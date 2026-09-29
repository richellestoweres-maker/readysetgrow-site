/**
 * Ready Set Grow: the part that stays awake
 * ------------------------------------------------------------------
 * Everything else in this app runs in a browser. A notification cannot,
 * because the whole point of one is that it arrives when the browser is
 * shut. So these three functions are the only server side code in the
 * project, and they are deliberately the smallest thing that does the
 * job.
 *
 * WHAT THEY READ
 * One document per user, users/{uid}/private/push, written by the app
 * when somebody changes their notification settings. It holds the
 * device tokens, which kinds they want, their quiet hours and their
 * timezone. It holds nothing about a child, not even a name, because
 * nothing here needs one and a server that does not hold something
 * cannot leak it.
 *
 * THE QUIET HOURS ARE ENFORCED HERE, NOT ON THE PHONE
 * A phone that is asleep still buzzes. So a message that would land in
 * somebody's quiet hours is not sent at all, rather than sent and
 * hidden. The one exception is nothing: even a reply waits until
 * morning. A parent of a newborn sleeps at strange times and a buzz at
 * two in the morning that turns out to be a comment is the kind of
 * thing that gets an app deleted.
 *
 * TOKENS DIE AND THAT IS NORMAL
 * A browser reissues its token whenever it feels like it, and a dead
 * one comes back as a specific error. Those are pruned on the spot
 * rather than retried forever, which is what stops a user who cleared
 * their browser six months ago from costing a send on every run.
 */

import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getMessaging } from 'firebase-admin/messaging';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { logger } from 'firebase-functions';

initializeApp();
const db = getFirestore();

const REGION = 'us-central1';
const SITE = 'https://readysetgrow-app.com';

/* Local hour for a user, from the timezone their browser reported.
   A bad or missing timezone falls back to the server's, which is UTC,
   and that is the safe direction: it makes the quiet window wider
   rather than narrower. */
function localHour(tz) {
  try {
    return Number(new Intl.DateTimeFormat('en-US', {
      hour: 'numeric', hour12: false, timeZone: tz || 'UTC',
    }).format(new Date()));
  } catch (err) {
    return new Date().getUTCHours();
  }
}

function inQuiet(hour, from, to) {
  const f = Number.isFinite(from) ? from : 21;
  const t = Number.isFinite(to) ? to : 7;
  if (f === t) return false;
  /* The window normally wraps around midnight, which is why this is
     not simply hour >= from && hour < to. */
  return f > t ? (hour >= f || hour < t) : (hour >= f && hour < t);
}

async function pushDoc(uid) {
  const snap = await db.doc(`users/${uid}/private/push`).get();
  return snap.exists ? snap.data() : null;
}

/* Send to every device a user has, and prune the ones that are gone. */
async function sendTo(uid, settings, message) {
  const tokens = Array.isArray(settings.tokens) ? settings.tokens.filter(Boolean) : [];
  if (!tokens.length) return { sent: 0, pruned: 0 };

  const res = await getMessaging().sendEachForMulticast({
    tokens,
    notification: { title: message.title, body: message.body },
    data: { url: message.url || SITE },
    webpush: {
      fcmOptions: { link: message.url || SITE },
      notification: {
        icon: `${SITE}/icon-192.png`,
        badge: `${SITE}/favicon-32.png`,
        tag: message.tag || 'rsg',
        /* Replaces an earlier one with the same tag instead of stacking
           six of them up on a lock screen. */
        renotify: false,
      },
    },
  });

  const dead = [];
  res.responses.forEach((r, i) => {
    const code = r.error && r.error.code;
    if (code === 'messaging/registration-token-not-registered'
      || code === 'messaging/invalid-registration-token'
      || code === 'messaging/invalid-argument') dead.push(tokens[i]);
  });
  if (dead.length) {
    await db.doc(`users/${uid}/private/push`).update({
      tokens: FieldValue.arrayRemove(...dead),
    }).catch(() => {});
  }
  return { sent: res.successCount, pruned: dead.length };
}

/* ------------------------------------------------------------------
   THE HOURLY RUN
   Everything that is not urgent goes out on the hour the user chose,
   in their own timezone. Running hourly rather than at a fixed time is
   what makes a per user hour possible without a job per timezone.
   ------------------------------------------------------------------ */
export const hourlyNudges = onSchedule(
  { schedule: 'every 60 minutes', region: REGION, timeZone: 'UTC', retryCount: 0 },
  async () => {
    const users = await db.collectionGroup('private').where('kinds', '!=', null).get();
    let sent = 0;

    for (const doc of users.docs) {
      if (doc.id !== 'push') continue;
      const uid = doc.ref.parent.parent.id;
      const s = doc.data() || {};
      const kinds = s.kinds || {};
      const hour = localHour(s.tz);
      if (inQuiet(hour, s.quietFrom, s.quietTo)) continue;

      const due = [];
      if (kinds.jobs && hour === 18) due.push('jobs');
      if (kinds.checkin && hour === 19) due.push('checkin');
      if (kinds.appointment && hour === 9) due.push('appointment');
      if (!due.length) continue;

      /* WHY THE MESSAGE IS VAGUE.
         The server does not know what is on the chart or which child
         is which, on purpose. It knows somebody asked to be reminded.
         The app fills in the detail when it opens. That is a worse
         notification and a much better privacy position, and for a
         reminder to open the app it costs almost nothing. */
      const text = {
        jobs: { title: 'This evening', body: 'Anything left on the chart today.', url: `${SITE}/?open=chores` },
        checkin: { title: 'Thirty seconds', body: 'How did today go.', url: `${SITE}/?open=checkin` },
        appointment: { title: 'Coming up', body: 'Something is due around now.', url: `${SITE}/?open=vaxrecord` },
      }[due[0]];

      const r = await sendTo(uid, s, { ...text, tag: due[0] });
      sent += r.sent;
    }
    logger.info(`hourlyNudges sent ${sent}`);
  },
);

/* ------------------------------------------------------------------
   A REPLY
   Fires the moment one lands. Still respects quiet hours, which means
   a reply at midnight is simply not sent rather than queued, because a
   notification about a comment is worth nothing eight hours late and
   the app will show it anyway.
   ------------------------------------------------------------------ */
export const onReply = onDocumentCreated(
  { document: 'posts/{postId}/replies/{replyId}', region: REGION },
  async (event) => {
    const reply = event.data && event.data.data();
    if (!reply) return;
    const post = await db.doc(`posts/${event.params.postId}`).get();
    if (!post.exists) return;
    const ownerUid = post.data().authorUid;
    if (!ownerUid || ownerUid === reply.authorUid) return;

    const s = await pushDoc(ownerUid);
    if (!s || !(s.kinds || {}).reply) return;
    if (inQuiet(localHour(s.tz), s.quietFrom, s.quietTo)) return;

    await sendTo(ownerUid, s, {
      title: 'Somebody replied',
      body: 'A reply on one of your posts.',
      url: `${SITE}/?open=community`,
      tag: `reply-${event.params.postId}`,
    });
  },
);

/* ------------------------------------------------------------------
   A ME TOO ON A LIT FIREFLY
   The one notification in the whole app that is purely for company,
   and the only one worth having at three in the morning. It still
   obeys quiet hours, because somebody who set them meant them, and
   anybody who is up at three with a lit firefly has not.
   ------------------------------------------------------------------ */
export const onMeToo = onDocumentCreated(
  { document: 'fireflies/{uid}/metoo/{id}', region: REGION },
  async (event) => {
    const uid = event.params.uid;
    const s = await pushDoc(uid);
    if (!s || !(s.kinds || {}).metoo) return;
    if (inQuiet(localHour(s.tz), s.quietFrom, s.quietTo)) return;

    await sendTo(uid, s, {
      title: 'Somebody is up too',
      body: 'A me too on your firefly.',
      url: `${SITE}/?open=community`,
      tag: 'metoo',
    });
  },
);

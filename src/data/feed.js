/**
 * Ready Set Grow: The Shared Feed
 * ------------------------------------------------------------------
 * Until now a post could be marked "Share to Community" and nothing
 * happened to it. The button was there, the switch flipped, and the
 * post sat on her own profile exactly as before. This file and the
 * rules in firestore.rules are what make that button tell the truth.
 *
 * THE DECISION SHE MADE, AND WHY IT SHAPES EVERYTHING HERE
 * People choose public or private themselves, and a public post goes up
 * straight away. She said plainly that she does not want to be the
 * person everything waits on, and she is right: a room where every post
 * sits in a queue until the founder wakes up is a room where nobody
 * bothers posting twice.
 *
 * SO THE BACKSTOP IS NARROW ON PURPOSE.
 * A very short filter holds back the few things that are dangerous
 * rather than merely disagreeable: a medication dose, or somebody's
 * phone number or email address. Those are objective, they are rare,
 * and getting one wrong in a room full of new parents is the mistake
 * that cannot be taken back afterwards. Everything else goes straight
 * up and is handled by people reporting it.
 *
 * WHAT THE FILTER DELIBERATELY DOES NOT TRY TO DO
 * It does not judge tone, advice, parenting choices or arguments. A
 * filter that tried would be wrong constantly and would quietly become
 * the thing deciding what parents are allowed to say to each other.
 * Cruelty is caught by people reporting it, which is slower and far
 * more accurate.
 *
 * WHERE THE FILTER ACTUALLY LIVES
 * In firestore.rules as well as here. The rules run the same patterns
 * on arrival and refuse a post that trips one unless it is marked held,
 * so a modified app cannot send a dose straight to the feed by lying
 * about its status. This file is the wording, the rules are the
 * enforcement.
 *
 * WHAT A FEED POST DELIBERATELY DOES NOT CARRY
 * No child id, no birthday, no child name. The rules reject a document
 * holding any of them. A parent posts under a username and nothing in
 * the document can be walked back to a child's record.
 */

export const FEED_STATUS = {
  live: 'live',       // up, which is where almost everything goes
  held: 'held',       // tripped the narrow filter, waiting on a person
  removed: 'removed', // taken down after the fact
};

/* How many come down at once. A parent scrolling a feed on a phone
   connection does not need two hundred. */
export const FEED_PAGE = 40;

export const FEED_TITLE = 'You are not the only one awake.';
export const FEED_SUB =
  'What other parents are in the middle of tonight. You choose what you share and what stays '
  + 'yours, and you can take anything back down.';

export const FEED_EMPTY =
  'Nothing has been shared yet. Somebody has to be first, and being first in a quiet room is how '
  + 'every good one started.';

export const FEED_HOW =
  'Share a post from Home and it appears here straight away. Yours are the only ones you can '
  + 'take back down.';

/* What somebody sees when the filter has held their own post. It says
   what tripped it and that a person will look, because a bare status
   reads like the app lost it. */
export const FEED_HELD =
  'Held for a look. This one mentions a dose or a way to contact somebody, and those 2 get '
  + 'read by a person first. Everything else goes straight up.';

export const FEED_REMOVED =
  'This one was taken down. If you think that was a mistake, say so and it gets looked at again.';

export const FEED_GUEST =
  'Looking around without an account, so this is read only. Make an account and you can join in.';

/* The promise, said in the room it applies to rather than buried in a
   settings screen. */
export const FEED_PRIVACY = [
  'Nothing is shared unless you press share. A post is private until you say otherwise.',
  'You post under your username. Your real name is never shown here.',
  'A post cannot carry a child’s name, birthday or photo. The database itself refuses one that does.',
  'Your children’s profiles, logs, milestones and memories are never part of this and never can be.',
  'You can take anything of yours back down, whenever you like.',
];

/* Why somebody reports something. Short list on purpose: a long one
   makes people give up and scroll past instead. */
export const REPORT_REASONS = [
  { id: 'cruel', label: 'Cruel or abusive' },
  { id: 'unsafe', label: 'Unsafe advice, such as a dose or a sleep practice' },
  { id: 'private', label: 'Somebody’s private information' },
  { id: 'spam', label: 'Spam or selling something' },
  { id: 'other', label: 'Something else' },
];

export const REPORT_THANKS =
  'Thank you. A person reads every report. You will not hear back about this one, which is '
  + 'deliberate, since telling a reporter what happened tells them who reported.';

export const BLOCK_NOTE =
  'You will stop seeing anything from them here. They are not told. This is kept on your account '
  + 'and nowhere else.';

/* ------------------------------------------------------------------
 * THE FILTER
 *
 * Two patterns. That is the whole thing, and keeping it to two is the
 * design, not a first draft.
 *
 * A DOSE. "Give him 5ml of ibuprofen" from a stranger on the internet
 * is the one piece of advice in a parenting app that can put a child in
 * hospital, and the parent reading it at 3am is in no state to check.
 * Held, read, and usually put straight up with nothing changed, because
 * most of these are somebody saying what their own doctor told them.
 *
 * CONTACT DETAILS. A phone number or an email address in a public room
 * is either somebody about to be harassed or somebody about to be sold
 * something. Held either way.
 *
 * Everything else, including every argument about sleep training that
 * this app will ever host, goes straight up.
 *
 * The same patterns are in firestore.rules, which is what actually
 * enforces them. These are here so the app can say WHY in a sentence,
 * which rules cannot do.
 * ------------------------------------------------------------------ */

const RE_EMAIL = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
/* Ten digits with anything or nothing between the groups, which catches
   555-123-4567, 555.123.4567, (555) 123 4567 and 5551234567. */
const RE_PHONE = /[0-9]{3}[^a-zA-Z0-9]?[0-9]{3}[^a-zA-Z0-9]?[0-9]{4}/;
/* A number next to a unit. Deliberately not matching "2 doses" or
   "10 minutes", only the units a medicine is measured in. */
const RE_DOSE = /[0-9]\s?(mg|mcg|ml|cc)\b/i;

export function filterVerdict(body) {
  const b = String(body || '');
  if (RE_DOSE.test(b)) return 'dose';
  if (RE_EMAIL.test(b) || RE_PHONE.test(b)) return 'contact';
  return '';
}

export function filterReason(verdict) {
  if (verdict === 'dose') {
    return 'This mentions a dose, so it gets read by a person before it goes up. That usually '
      + 'takes a day and most of them go up exactly as written.';
  }
  if (verdict === 'contact') {
    return 'This looks like it has a phone number or an email address in it, so it gets read by '
      + 'a person before it goes up. Sharing contact details in an open room rarely ends well.';
  }
  return '';
}

/* Which status a new post should carry. The rules check this again on
   arrival, so an app that lied about it would simply be refused. */
export function statusFor(body) {
  return filterVerdict(body) ? FEED_STATUS.held : FEED_STATUS.live;
}

/* ------------------------------------------------------------------
 * MODERATION
 * Only reachable by an account that has a document in the moderators
 * collection, which can only be created from the Firebase console. An
 * account that could make itself a moderator is not a moderation
 * system.
 * ------------------------------------------------------------------ */
export const MOD_TITLE = 'Needs a look';
export const MOD_EMPTY = 'Nothing needs you right now.';
export const MOD_NOTE =
  'Nobody but you sees this tab, and nothing in the room is waiting on you. Posts go up by '
  + 'themselves. This is only the handful the filter held, and anything people have reported.';

export const MOD_HELD_TITLE = 'Held by the filter';
export const MOD_HELD_NOTE =
  'A dose or a set of contact details. Most of these are fine and go straight up.';

export const MOD_REPORTED_TITLE = 'Reported by somebody';
export const MOD_REPORTED_NOTE =
  'Already up in the room. Taking one down is the only thing that changes that.';

/* ------------------------------------------------------------------
 * PURE HELPERS, so the rules of the room can be tested without a
 * network, a browser, or a Firebase project.
 * ------------------------------------------------------------------ */

/* What actually goes up. Built in one place so no screen can invent its
   own shape, and written as a whitelist rather than a copy of the local
   post, because a copy is how a child id ends up in a public document
   six months from now when somebody adds a field. */
export function feedDocFrom(post, username, uid) {
  return {
    authorUid: uid,
    /* Which room it hangs in. Always present, even when it is the
       empty string meaning the main feed, so a query never has to care
       whether a document predates rooms. */
    group: isGroupId((post && post.group) || '') ? String((post && post.group) || '') : '',
    username: String(username || '').trim(),
    body: String((post && post.text) || '').trim(),
    files: ((post && post.files) || []).map((f) => ({
      url: String(f.url || ''),
      kind: String(f.kind || 'photo'),
    })),
    status: statusFor((post && post.text) || ''),
    /* THE TWO FIELDS THAT MAKE FOR YOU AND TRENDING POSSIBLE.
       tags come out of the body, so nothing is entered twice. band is
       a stage, not an age and certainly not a birthday: seven buckets
       across eighteen years, and it cannot be turned back into a date.
       It is the only thing about a child that leaves the phone, and
       that is the whole reason it is this coarse. */
    tags: parseTags((post && post.text) || ''),
    band: String((post && post.band) || ''),
    at: Number((post && post.at)) || Date.now(),
    localId: String((post && post.id) || ''),
  };
}

/* The last line of defense, checked before anything is sent as well as
   by the rules on arrival. Belt and braces on purpose: this one can
   tell her WHY in a sentence, the rules can only refuse. */
export function feedRefuseReason(doc, post) {
  if (!doc.username) {
    return 'You need a username before you can share anything. Settings has one waiting for you.';
  }
  if (!doc.body && !doc.files.length) {
    return 'There is nothing in this one to share.';
  }
  if (doc.body.length > 4000) {
    return 'That is longer than a post can be here. 4000 characters is the limit.';
  }
  if (post && post.childId) {
    return 'This post is tagged with one of your children, and posts about a child stay on your '
      + 'own profile. Take the tag off if you want to share it.';
  }
  /* Data URLs were the old shape for photos and they can be a megabyte
     each. Anything still carrying one predates Storage. */
  if ((post && (post.photos || []).length)) {
    return 'This post was made before the app could store files properly, so it can only stay on '
      + 'your own profile. A new post with the same photo will share fine.';
  }
  return '';
}

export function statusLine(status) {
  if (status === FEED_STATUS.live) return '';
  if (status === FEED_STATUS.removed) return FEED_REMOVED;
  return FEED_HELD;
}

/* Blocked people are filtered on the reader's own device rather than
   with a query, because a query cannot express "not in this list" and
   because who somebody has blocked is nobody else's business. */
export function visibleFeed(posts, blocked) {
  const dead = {};
  (blocked || []).forEach((uid) => { dead[uid] = true; });
  return (posts || [])
    .filter((p) => p && p.status === FEED_STATUS.live && !dead[p.authorUid])
    .sort((a, b) => (Number(b.at) || 0) - (Number(a.at) || 0));
}

export function countReactions(rows) {
  const out = {};
  (rows || []).forEach((r) => {
    const k = r && r.r;
    if (!k) return;
    out[k] = (out[k] || 0) + 1;
  });
  return out;
}

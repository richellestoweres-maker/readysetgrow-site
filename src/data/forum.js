/**
 * Ready Set Grow: the rooms, as an actual forum
 * ------------------------------------------------------------------
 * WHAT WAS ACTUALLY WRONG, OCTOBER 2026
 *
 * The Community tab was not broken. It was a noticeboard. You could
 * write something, it went up where everybody could see it, and that
 * was the end of it. Nobody could answer you.
 *
 * A mother posts at 3am asking whether a 4 month old waking every
 * hour is normal. Four people read it. None of them can reply. She
 * refreshes, sees her own words sitting there on their own, and never
 * opens the tab again. That is not a community, and no amount of copy
 * fixes it.
 *
 * Two things were missing and both were structural:
 *
 *   1. REPLIES. The shared posts lived in a flat `feed` collection
 *      with no reply path, and the deployed security rules refuse any
 *      subcollection under it except reactions. So replies were not a
 *      feature somebody forgot to design, they were impossible.
 *
 *   2. LIVE. The feed was fetched once per session with getDocs and a
 *      guard that stopped it asking again. Two people in the same room
 *      at the same time could not see each other. For a forum that is
 *      the whole point.
 *
 * WHY THIS LIVES AT community/{room}/posts
 *
 * The deployed rules already allow exactly this shape, including a
 * replies subcollection under each post, with the write restricted to
 * your own uid and a post forbidden from carrying a child id. That
 * path was written and deployed and then never used by the app.
 *
 * It is used now, because rules cannot be redeployed from where this
 * was built, and a forum that needs a rules change to work is a forum
 * that does not work tonight.
 *
 * WHAT THAT TRADE COSTS, SAID PLAINLY
 *
 * The old `feed` rules enforced moderation ON THE SERVER: a post whose
 * body tripped the filter had to arrive marked held or the write was
 * refused, and only a moderator could move it back. The community
 * rules do not do that. They check that you are writing as yourself,
 * that the body is a string of sane length, and that no child record
 * is attached. Everything else is enforced by this app.
 *
 * So the filter, the model check and the hold still run, and they
 * still stop things, but they run in the client. Somebody determined
 * enough to use the database directly could get round them. For an
 * invited group that is a reasonable risk. For an open signup it is
 * not, and the fix is a rules deploy, which needs Firebase access.
 * That is written down here rather than left for somebody to discover.
 */

export const FORUM_TITLE = 'Rooms';

export const FORUM_SUB =
  'Pick a room and talk to whoever is in it. Everybody here is a parent and nobody uses their real '
  + 'name unless they want to.';

export const FORUM_EMPTY_ROOM = {
  title: 'Nobody has started anything here yet',
  body: 'Which is an opportunity rather than a problem. The first post in a room is the one that '
    + 'decides what the room is for.',
};

export const FORUM_START = 'Start something';
export const FORUM_POST_PH = 'What is going on';
export const FORUM_REPLY_PH = 'Say something back';
export const FORUM_POST_BTN = 'Post it';
export const FORUM_REPLY_BTN = 'Reply';
export const FORUM_CANCEL = 'Cancel';

export const FORUM_MAX = 4000;
export const FORUM_REPLY_MAX = 2000;

/* How many come down per room. A room busier than this needs paging,
   and no room will be for a long while. */
export const FORUM_PAGE = 100;
export const FORUM_REPLY_PAGE = 200;

export const FORUM_NEED_NAME = {
  title: 'Pick a name first',
  body: 'Other parents see this instead of your real name. It can be anything. Change it any time '
    + 'in your settings.',
  cta: 'Choose a name',
};

export const FORUM_NEED_ACCOUNT = {
  title: 'The rooms need an account',
  body: 'Only so that what you write can be yours, and so you can delete it. Nothing you post is '
    + 'attached to your real name or to any child on your profile.',
};

export const FORUM_REPLY_COUNT = (n) => (n === 1 ? '1 reply' : n + ' replies');
export const FORUM_NO_REPLIES = 'No replies yet. Being first is a kindness.';

export const FORUM_DELETE = 'Delete';
export const FORUM_DELETE_ASK = 'Delete this for everybody?';
export const FORUM_DELETE_YES = 'Yes, delete it';
export const FORUM_DELETE_NO = 'Keep it';

export const FORUM_YOURS = 'you';

export const FORUM_SENDING = 'Posting';

export const FORUM_OFFLINE =
  'That did not send. Check your connection and try again. Nothing was lost, your words are still '
  + 'in the box.';

/* A post with nothing in it, or a wall of one character, is the shape
   almost every bit of junk arrives in. Checked here so the room never
   has to render it. */
export function forumBodyOk(text, max) {
  const t = String(text == null ? '' : text).trim();
  if (!t) return false;
  if (t.length > (max || FORUM_MAX)) return false;
  /* 1 character repeated is not a post. */
  if (t.length > 8 && new Set(t.replace(/\s/g, '')).size <= 2) return false;
  return true;
}

export function forumClean(text, max) {
  return String(text == null ? '' : text)
    .replace(/\r/g, '')
    .replace(/\n{4,}/g, '\n\n\n')
    .trim()
    .slice(0, max || FORUM_MAX);
}

/* "4 minutes ago" beats a timestamp in a room, because the only thing
   anybody wants to know is whether the person is still awake. */
export function forumWhen(ms, now) {
  const t = Number(ms);
  if (!isFinite(t) || t <= 0) return '';
  const secs = Math.max(0, Math.floor(((now || Date.now()) - t) / 1000));
  if (secs < 90) return 'just now';
  const mins = Math.floor(secs / 60);
  if (mins < 60) return mins + ' min ago';
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return hrs === 1 ? 'an hour ago' : hrs + ' hours ago';
  const days = Math.floor(hrs / 24);
  if (days === 1) return 'yesterday';
  if (days < 7) return days + ' days ago';
  const wks = Math.floor(days / 7);
  if (wks < 5) return wks === 1 ? 'last week' : wks + ' weeks ago';
  return Math.floor(days / 30) + ' months ago';
}

/* Newest conversation first, which for a forum means the post with the
   most recent activity rather than the most recent post. A thread
   somebody answered an hour ago is more alive than one nobody touched
   since Tuesday. */
export function forumSort(posts, replyCounts, lastReplyAt) {
  const rc = replyCounts || {};
  const la = lastReplyAt || {};
  return (posts || []).slice().sort((a, b) => {
    const aAt = Math.max(Number(a.at) || 0, Number(la[a.id]) || 0);
    const bAt = Math.max(Number(b.at) || 0, Number(la[b.id]) || 0);
    return bAt - aAt;
  });
}

export const FORUM_RULES_SHORT = [
  'Everybody in here is doing their best with less sleep than they need.',
  'No advice that starts with "you should never".',
  'What gets said in a room stays in the room.',
  'Report anything cruel. It gets looked at.',
];

export const FORUM_SAFETY_NOTE =
  'If you are in danger of hurting yourself or anybody else, please do not wait for a reply. Call '
  + 'or text 988, any hour, free.';

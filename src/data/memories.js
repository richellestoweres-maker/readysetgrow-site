/**
 * Ready Set Grow: Memories
 * ------------------------------------------------------------------
 * The keepsake half of the app. A photo, a video, a voice memo, or
 * just the thing they said in the back of the car that you will have
 * forgotten by Thursday.
 *
 * THE TWO RULES SHE SET, AND THEY ARE THE WHOLE DESIGN
 *
 * 1. A child's memories live on that child's profile and nowhere else.
 *    Not on Home, not on a public profile, not in a post. A child's
 *    profile is somewhere to document, never somewhere to share, and
 *    that has been true since the first week of this app. A memory
 *    attached to a child is private, always, with no switch to make it
 *    public, because the switch is the thing that gets pressed by
 *    accident at eleven at night.
 *
 * 2. Nothing is ever removed unless she removes it. No expiry, no
 *    tidying up, no dropping the oldest when the list gets long. The
 *    whole point of a keepsake is that it is still there in nine
 *    years. Logs trim themselves. Memories never do.
 *
 * HERS ARE DIFFERENT, DELIBERATELY
 * A memory on her own profile can be private or public, the same way a
 * post can, because it is hers to decide. They are kept separate from
 * posts rather than mixed in, which is what she asked for: posts are
 * for saying something now, memories are for keeping something.
 *
 * COMING BACK AROUND
 * A year later, or two, or five, it reappears on Home. That is the
 * feature people actually stay for, and it costs nothing but a date
 * comparison.
 */

export const MEMORY_KINDS = [
  { id: 'photo', label: 'Photo', icon: 'camera', accept: 'image/*',
    maxBytes: 12 * 1024 * 1024 },
  { id: 'video', label: 'Video', icon: 'play', accept: 'video/*',
    maxBytes: 100 * 1024 * 1024,
    note: 'Up to about 2 minutes. Longer ones fail on a phone connection more often than they work.' },
  { id: 'audio', label: 'Voice memo', icon: 'mic', accept: 'audio/*',
    maxBytes: 25 * 1024 * 1024,
    note: 'Their voice at this age is the thing you will want back most.' },
  { id: 'words', label: 'Something they said', icon: 'quote', accept: '',
    maxBytes: 0 },
];

export function memoryKind(id) {
  return MEMORY_KINDS.filter((k) => k.id === id)[0] || null;
}

/* WHAT A POST CAN CARRY.
 *
 * The same three file kinds and the same size limits as a memory, and
 * deliberately the same code path underneath, because a post with a
 * video in it and a memory with a video in it are the same problem and
 * two answers to it would drift apart within a month.
 *
 * Posts are capped lower than memories on purpose. A memory is a
 * keepsake and you may want six angles of the same birthday. A post is
 * something you are saying, and four is already a lot to scroll past.
 */
export const POST_MEDIA = MEMORY_KINDS.filter((k) => !!k.accept);
export const POST_MAX_FILES = 4;

export function postMediaKind(id) {
  return POST_MEDIA.filter((k) => k.id === id)[0] || null;
}

/* What a memory looks like on the record.
 *
 *   id        stable, never reused
 *   who       'me' or a child id. Decides where it shows and nothing else
 *   kind      photo | video | audio | words
 *   text      what she wrote, which is the only required part
 *   files     [{ path, url, kind, w, h, bytes }] in Storage, never inline
 *   at        when it HAPPENED, which she can change. Not when it was typed
 *   madeAt    when it was typed, never shown, used to break ties
 *   visibility  private | public. Always private when who is a child
 */
export function newMemory(who, kind) {
  return {
    id: 'mem' + Date.now() + Math.floor(Math.random() * 1000),
    who: who || 'me',
    kind: kind || 'words',
    text: '',
    files: [],
    at: null,
    madeAt: Date.now(),
    visibility: 'private',
  };
}

/** A child's memories are private. There is no argument with this one. */
/* EVERY MEMORY IS PRIVATE. HERS TOO.

   Hers could once be shared, the same as a post. She changed that and
   she was right: a post is something you are saying, a memory is
   something you are keeping. The two were sitting next to each other on
   her profile offering the same button and meaning completely different
   things, which is exactly how somebody shares a thing they meant to
   keep.

   So sharing lives on posts, in one place, and memories are a private
   shelf. Nothing here can be made public by the app, by a setter, or by
   editing the record, and the function below is the single place that
   is decided. */
export function memoryVisibility() {
  return 'private';
}

export function canBePublic() {
  return false;
}

/* ------------------------------------------------------------------
 * COMING BACK AROUND
 * ------------------------------------------------------------------ */

function memParts(value) {
  const m = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return null;
  return { y: Number(m[1]), m: Number(m[2]), d: Number(m[3]) };
}

/**
 * Anything that happened on this day in an earlier year.
 * today is a YYYY-MM-DD string.
 */
export function onThisDay(memories, today) {
  const t = memParts(today);
  if (!t) return [];
  return (memories || []).filter((mem) => {
    const d = memParts(mem.at || '');
    if (!d) return false;
    return d.m === t.m && d.d === t.d && d.y < t.y;
  }).map((mem) => {
    const d = memParts(mem.at);
    return Object.assign({}, mem, { yearsAgo: t.y - d.y });
  }).sort((a, b) => a.yearsAgo - b.yearsAgo);
}

export function yearsAgoLine(n) {
  if (n === 1) return 'A year ago today';
  return n + ' years ago today';
}

/* ------------------------------------------------------------------
 * SORTING AND GROUPING
 * ------------------------------------------------------------------ */

export function sortMemories(list) {
  return (list || []).slice().sort((a, b) => {
    const at = String(a.at || '');
    const bt = String(b.at || '');
    if (at !== bt) return at < bt ? 1 : -1;
    return (b.madeAt || 0) - (a.madeAt || 0);
  });
}

export function memoriesFor(list, who) {
  return sortMemories((list || []).filter((m) => (m.who || 'me') === who));
}

/** Grouped by the year it happened, newest first, for the long view. */
export function memoriesByYear(list) {
  const out = [];
  sortMemories(list).forEach((m) => {
    const p = memParts(m.at || '');
    const y = p ? p.y : 'Undated';
    const bucket = out.filter((b) => b.year === y)[0];
    if (bucket) bucket.items.push(m);
    else out.push({ year: y, items: [m] });
  });
  return out;
}

/* ------------------------------------------------------------------
 * LIMITS, SAID OUT LOUD RATHER THAN DISCOVERED
 * ------------------------------------------------------------------ */

export const MEMORY_MAX_FILES = 6;

export function sizeLabel(bytes) {
  const n = Number(bytes) || 0;
  if (n < 1024) return n + ' B';
  if (n < 1024 * 1024) return Math.round(n / 1024) + ' KB';
  return (n / (1024 * 1024)).toFixed(1) + ' MB';
}

export function tooBigMessage(kind, bytes) {
  const k = memoryKind(kind);
  if (!k || !k.maxBytes) return '';
  if (bytes <= k.maxBytes) return '';
  return 'That ' + k.label.toLowerCase() + ' is ' + sizeLabel(bytes) + ', and the limit is '
    + sizeLabel(k.maxBytes) + '. '
    + (kind === 'video'
      ? 'A shorter clip, or trimming it in your phone first, is the usual fix.'
      : 'A smaller file is the usual fix.');
}

export const MEMORY_PRIVACY_CHILD = 'Memories on a child\'s profile are private, always. There is '
  + 'no way to make one public, because a page you keep about a child is for documenting them, '
  + 'never for sharing them.';

export const MEMORY_PRIVACY_MINE = 'Yours are private too. Memories are a shelf you keep, not '
  + 'something you say. Anything you want other people to see goes in a post instead.';

export const MEMORY_KEEP_NOTE = 'Kept until you delete it. Nothing here expires, tidies itself up, '
  + 'or drops the oldest when the list gets long.';

export const MEMORY_EMPTY_CHILD = 'The things you will forget otherwise. What they said, how they '
  + 'said it, the face they pulled. A year from now this comes back to you.';

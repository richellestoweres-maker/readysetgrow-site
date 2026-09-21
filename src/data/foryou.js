/**
 * Ready Set Grow: For You, hashtags and trending
 * ------------------------------------------------------------------
 * A feed sorted by whether a post is likely to matter to somebody with
 * a child this age, rather than by what is newest.
 *
 * WHY AGE AND NOTHING ELSE
 * A mother of a six week old and a mother of a fourteen year old have
 * almost nothing in common on a given Tuesday. Age is the single
 * strongest predictor of whether a post is worth somebody's time, and
 * it needs nothing about the person to work out. No interests to
 * gather, no behavior to watch, no profile to build. One number that
 * the app already knows, and it is not even sent: what goes up with a
 * post is a band, not a birthday.
 *
 * THE BAND IS COARSE ON PURPOSE
 * Seven bands across eighteen years. "Newborn" is not a date of birth
 * and cannot be turned back into one, which matters because this is
 * the only thing about a child that leaves the phone at all.
 *
 * TRENDING IS ALLOWED TO SAY IT HAS NOTHING
 * A trending list with three posts in it is not trending, it is a
 * list. Below the threshold the app shows curated topics instead and
 * says which it is doing. Faking momentum an app does not have is how
 * a community feels dead, because everybody can tell.
 */

export const TAG_MAX = 5;
export const TAG_MIN_LEN = 2;
export const TAG_MAX_LEN = 24;

/* Hashtags out of a body of text. Lowercased so #Teething and
   #teething are the same thing, capped so nobody can stuff forty of
   them into one post and take over the trending list on their own. */
export function parseTags(text) {
  const out = [];
  const seen = {};
  /* The negative lookahead is what stops a forty character word being
     chopped to twenty four and accepted as a tag. Too long is not a
     tag, it is somebody typing. */
  const re = /(^|\s)#([A-Za-z][A-Za-z0-9]{1,23})(?![A-Za-z0-9])/g;
  let m;
  while ((m = re.exec(String(text || ''))) !== null) {
    const t = m[2].toLowerCase();
    if (t.length < TAG_MIN_LEN || t.length > TAG_MAX_LEN) continue;
    if (seen[t]) continue;
    seen[t] = true;
    out.push(t);
    if (out.length >= TAG_MAX) break;
  }
  return out;
}

export function tagLabel(tag) {
  return '#' + String(tag || '');
}

/* ------------------------------------------------------------------
   THE BANDS
   ------------------------------------------------------------------ */
export const FEED_BANDS = [
  { id: 'expecting', label: 'Expecting', min: -12, max: 0 },
  { id: 'newborn', label: 'Newborn days', min: 0, max: 4 },
  { id: 'baby', label: 'Babies', min: 4, max: 12 },
  { id: 'toddler', label: 'Toddlers', min: 12, max: 36 },
  { id: 'preschool', label: 'Preschool', min: 36, max: 60 },
  { id: 'school', label: 'School age', min: 60, max: 132 },
  { id: 'teen', label: 'Teenagers', min: 132, max: 240 },
];

export function feedBandFor(months) {
  const m = Number(months);
  if (!isFinite(m)) return '';
  for (let i = 0; i < FEED_BANDS.length; i++) {
    const b = FEED_BANDS[i];
    if (m >= b.min && m < b.max) return b.id;
  }
  return m >= 240 ? 'teen' : '';
}

export function bandLabel(id) {
  const b = FEED_BANDS.filter((x) => x.id === id)[0];
  return b ? b.label : '';
}

export function bandIndex(id) {
  for (let i = 0; i < FEED_BANDS.length; i++) if (FEED_BANDS[i].id === id) return i;
  return -1;
}

/* ------------------------------------------------------------------
   THE ORDER

   Three things, in this order of weight: how close the poster's stage
   is to yours, how recent it is, and whether it is in a room you were
   already reading. No engagement anywhere in it. Sorting a parenting
   feed by what got the most reactions surfaces the most upsetting
   post in it, every time, and there is no version of that which is
   good for somebody at three in the morning.
   ------------------------------------------------------------------ */
export const FORYOU_HALF_LIFE_HOURS = 30;

export function forYouScore(post, myBand, now) {
  const t = Number((post || {}).at) || 0;
  const hours = Math.max(0, ((now || Date.now()) - t) / 3600000);
  /* Halves every day and a bit, so a week old post can still surface
     if it is a much better match, and a month old one will not. */
  const fresh = Math.pow(0.5, hours / FORYOU_HALF_LIFE_HOURS);

  const mine = bandIndex(myBand);
  const theirs = bandIndex((post || {}).band || '');
  let match = 0.45;
  if (mine >= 0 && theirs >= 0) {
    const gap = Math.abs(mine - theirs);
    /* Same stage counts for a lot, one either side counts for
       something, and further away than that is just the feed. */
    match = gap === 0 ? 1 : (gap === 1 ? 0.6 : 0.25);
  }
  return match * (0.25 + 0.75 * fresh);
}

export function sortForYou(posts, myBand, now) {
  const at = now || Date.now();
  return (posts || []).slice().sort((a, b) => forYouScore(b, myBand, at) - forYouScore(a, myBand, at));
}

export function postsWithTag(posts, tag) {
  const t = String(tag || '').toLowerCase();
  return (posts || []).filter((p) => (p.tags || []).indexOf(t) !== -1);
}

/* ------------------------------------------------------------------
   TRENDING, AND THE HONEST FALLBACK
   ------------------------------------------------------------------ */
export const TRENDING_MIN_POSTS = 3;
export const TRENDING_MIN_PEOPLE = 2;
export const TRENDING_SHOW = 8;
export const TRENDING_WINDOW_HOURS = 168;

export function trendingTags(posts, now) {
  const cut = (now || Date.now()) - TRENDING_WINDOW_HOURS * 3600000;
  const counts = {};
  const people = {};
  (posts || []).forEach((p) => {
    if ((Number(p.at) || 0) < cut) return;
    (p.tags || []).forEach((t) => {
      counts[t] = (counts[t] || 0) + 1;
      people[t] = people[t] || {};
      people[t][p.authorUid || '?'] = true;
    });
  });
  return Object.keys(counts)
    /* Two different people, not one person posting four times. That
       single rule is most of what stops a trending list being one
       enthusiastic account. */
    .filter((t) => counts[t] >= TRENDING_MIN_POSTS
      && Object.keys(people[t]).length >= TRENDING_MIN_PEOPLE)
    .sort((a, b) => counts[b] - counts[a])
    .slice(0, TRENDING_SHOW)
    .map((t) => ({ tag: t, posts: counts[t], people: Object.keys(people[t]).length }));
}

export const CURATED_TOPICS = [
  { tag: 'nightfeeds', label: 'Night feeds', band: 'newborn' },
  { tag: 'latch', label: 'Latch and feeding', band: 'newborn' },
  { tag: 'fourthtrimester', label: 'The fourth trimester', band: 'newborn' },
  { tag: 'naps', label: 'Naps', band: 'baby' },
  { tag: 'teething', label: 'Teething', band: 'baby' },
  { tag: 'firstfoods', label: 'First foods', band: 'baby' },
  { tag: 'tantrums', label: 'Tantrums', band: 'toddler' },
  { tag: 'pottytraining', label: 'Potty training', band: 'toddler' },
  { tag: 'bigfeelings', label: 'Big feelings', band: 'preschool' },
  { tag: 'startingschool', label: 'Starting school', band: 'preschool' },
  { tag: 'homework', label: 'Homework', band: 'school' },
  { tag: 'screens', label: 'Screens', band: 'school' },
  { tag: 'friendships', label: 'Friendships', band: 'school' },
  { tag: 'independence', label: 'Independence', band: 'teen' },
  { tag: 'talkingtoteens', label: 'Talking to teenagers', band: 'teen' },
  { tag: 'sleep', label: 'Sleep', band: '' },
  { tag: 'guilt', label: 'Guilt', band: '' },
  { tag: 'help', label: 'Asking for help', band: '' },
];

export function curatedFor(band) {
  const mine = CURATED_TOPICS.filter((t) => t.band === band);
  const any = CURATED_TOPICS.filter((t) => !t.band);
  return mine.concat(any).slice(0, TRENDING_SHOW);
}

export const TRENDING_TITLE = 'What people are talking about';
export const TRENDING_THIN =
  'Not enough posts yet for anything to be genuinely trending, so these are topics rather than a '
  + 'leaderboard. Tap one to start it off.';
export const FORYOU_TITLE = 'For you';
export const FORYOU_SUB =
  'Sorted by whether somebody with a child about the same age as yours wrote it. Nothing else goes '
  + 'into it, and nothing about your child leaves your phone to make it work.';
export const FORYOU_NO_BAND =
  'Add a birthday to a child and this sorts itself around their age. Until then it is everything, newest first.';
export const TAG_HINT = 'Put a # in front of a word and it becomes a topic other people can find.';

/* ------------------------------------------------------------------
   WILLOW'S DAILY POST

   She writes it, a person presses post. Never automatic.

   An AI posting into a parenting community unattended is a bad idea on
   a long enough timeline, and the timeline is never long. So the draft
   lands in the same queue a held post lands in, a human reads it, and
   a human sends it. If nobody presses the button, nothing appears,
   which is the correct failure.
   ------------------------------------------------------------------ */
export const WILLOW_POST_TITLE = 'Willow has written something';
export const WILLOW_POST_NOTE =
  'She writes one of these each morning. Read it, change anything you like, and press post. '
  + 'Nothing goes up on its own.';

export const WILLOW_POST_THEMES = [
  { id: 'question', ask: 'Ask the room one open question about something ordinary and hard in this stage. No advice in it at all, just the question and one line of why you are asking.' },
  { id: 'permission', ask: 'Give people permission to stop doing one thing that parents at this stage are told they must do and that does not actually matter. Say plainly that it does not matter.' },
  { id: 'nobodytells', ask: 'Name one thing about this stage that nobody warns anybody about. Not a tip. Just the thing, said out loud, so somebody reads it and feels less strange.' },
  { id: 'smallwin', ask: 'Describe one very small thing that is going right for a parent at this stage and that they have almost certainly not noticed themselves doing.' },
  { id: 'twoways', ask: 'Take one thing parents argue about at this stage and lay out both ways of doing it fairly, then say that both households turn out fine. Take no side.' },
  { id: 'onething', ask: 'Offer one thing to try today that takes under 5 minutes and needs nothing bought.' },
  { id: 'hardday', ask: 'Write to somebody having a bad day at this stage. No fixing, no steps. 2 or 3 sentences that would be worth reading at 3am.' },
];

export function willowThemeFor(dayKey) {
  /* Rotates by the date so the same day always produces the same
     theme, which makes a draft reproducible and stops a refresh
     quietly changing what she was going to say. */
  const s = String(dayKey || '');
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h * 31) + s.charCodeAt(i)) >>> 0;
  return WILLOW_POST_THEMES[h % WILLOW_POST_THEMES.length];
}

export function willowPostPrompt(theme, bandName) {
  return [
    'You are writing one short post for the Ready Set Grow parenting community.',
    'The room is parents of ' + (bandName || 'children of all ages') + '.',
    '',
    'The brief: ' + theme.ask,
    '',
    'Rules for the writing:',
    'Between 30 and 80 words. Shorter is better.',
    'Plain words. No exclamation marks. No emoji.',
    'Never use a dash of any kind as punctuation. Use commas and full stops.',
    'Do not open with a greeting and do not sign it.',
    'Do not claim to be a parent and do not invent a personal story.',
    'Do not give medical advice and do not tell anybody to see a doctor.',
    'End with one hashtag, lowercase, one word, that fits what you wrote.',
  ].join('\n');
}

export const WILLOW_POST_FALLBACK =
  'Willow could not write one just now. That is usually the connection rather than anything wrong. '
  + 'Try again in a minute.';

export default FEED_BANDS;

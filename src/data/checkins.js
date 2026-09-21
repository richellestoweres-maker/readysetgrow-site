/**
 * Ready Set Grow: The Daily Check In
 * ------------------------------------------------------------------
 * One question a day for each kind of support a parent has turned on,
 * so that "how is he doing" stops being a feeling and starts being
 * something you can actually look at.
 *
 * WHY THIS EXISTS
 * A parent in the middle of a hard stretch cannot tell whether this
 * week is worse than last week. Everything feels like the worst week.
 * Thirty seconds a day for a month turns that into a picture, and a
 * picture is what makes a fifteen minute pediatrician appointment
 * useful instead of apologetic.
 *
 * THE LANGUAGE RULE, SAME AS EVERYWHERE
 * Nothing here says the child has anything. Every question is about
 * the DAY, not about the child. "How did focus go today" rather than
 * "how bad was his ADHD". A hard day is a hard day, never a bad child
 * and never a failing parent, and the wording has to carry that or the
 * feature does more harm than good.
 *
 * WHAT THIS IS NOT
 * Not a symptom tracker, not a severity scale, not a screening tool,
 * and not something anybody should read a diagnosis out of. It notices
 * patterns. A person decides what they mean.
 */

export const CHECKIN_SCALE = [
  { id: 'hard', label: 'Hard', color: '#B5705C', tint: '#F7EDEA' },
  { id: 'mixed', label: 'Mixed', color: '#B0873F', tint: '#F7EFE2' },
  { id: 'good', label: 'Good', color: '#6E8B54', tint: '#EEF2E7' },
];

export function getCheckinScale(id) {
  return CHECKIN_SCALE.filter((s) => s.id === id)[0] || null;
}

/* Always asked, whatever is or is not turned on, so a child with no
   lenses still has somewhere to put a day. */
export const GENERAL_CHECKIN = {
  id: 'general',
  question: 'How was today overall?',
  hard: 'One of the hard ones',
  mixed: 'Some of both',
  good: 'A good day',
};

/* One per lens. The question is about the day, the three answers are
   written in the words a parent would actually use at the end of it. */
export const LENS_CHECKINS = {
  adhd: {
    question: 'How did focus and settling go today?',
    hard: 'Could not land anywhere',
    mixed: 'Came and went',
    good: 'Settled well',
  },
  autism: {
    question: 'How did the day sit with them today?',
    hard: 'Too much, most of it',
    mixed: 'Up and down',
    good: 'Steady and themselves',
  },
  pda: {
    question: 'How much did everyday asks feel like pressure today?',
    hard: 'Everything was a no',
    mixed: 'Some things landed',
    good: 'Went along with most of it',
  },
  communication: {
    question: 'How did being understood go today?',
    hard: 'Lots of frustration',
    mixed: 'Got there with work',
    good: 'Understood easily',
  },
  speech: {
    question: 'How did talking go today?',
    hard: 'Hard to get words out',
    mixed: 'Some of both',
    good: 'Flowed well',
  },
  selectiveMutism: {
    question: 'How did speaking outside the house go today?',
    hard: 'No words at all',
    mixed: 'A little, with someone safe',
    good: 'Spoke more than usual',
  },
  auditoryProcessing: {
    question: 'How did listening and following go today?',
    hard: 'Words did not land',
    mixed: 'Needed repeating',
    good: 'Followed along well',
  },
  sensory: {
    question: 'How did their body feel to them today?',
    hard: 'Overloaded',
    mixed: 'Needed breaks',
    good: 'Comfortable',
  },
  motor: {
    question: 'How did their body cooperate today?',
    hard: 'Everything was effortful',
    mixed: 'Some things were hard',
    good: 'Moved easily',
  },
  tics: {
    question: 'How were tics today?',
    hard: 'A lot, and tiring',
    mixed: 'Came in waves',
    good: 'Quiet today',
  },
  emotionalRegulation: {
    question: 'How did big feelings go today?',
    hard: 'Went from nought to everything',
    mixed: 'Some wobbles',
    good: 'Rode them out',
  },
  anxiety: {
    question: 'How much did worry get in the way today?',
    hard: 'Ran the whole day',
    mixed: 'There, but manageable',
    good: 'Barely came up',
  },
  ocd: {
    question: 'How much did the need to get it right take up today?',
    hard: 'Took over',
    mixed: 'Came and went',
    good: 'Quiet today',
  },
  bigChanges: {
    question: 'How did the changes and transitions go today?',
    hard: 'Every change was a battle',
    mixed: 'Some were rough',
    good: 'Moved through them',
  },
  executiveFunction: {
    question: 'How did getting started and finishing go today?',
    hard: 'Stuck at the start',
    mixed: 'Needed a lot of prompting',
    good: 'Got through it',
  },
  learningDifferences: {
    question: 'How did learning and school work go today?',
    hard: 'Discouraging',
    mixed: 'Hard but we got through',
    good: 'Something clicked',
  },
  gifted: {
    question: 'How did the day meet them today?',
    hard: 'Bored and prickly',
    mixed: 'Patchy',
    good: 'Properly engaged',
  },
  downSyndrome: {
    question: 'How did the day go for them today?',
    hard: 'Heavy going',
    mixed: 'A mix',
    good: 'A good day',
  },
  prematurity: {
    question: 'How did energy and feeding go today?',
    hard: 'Tired and struggling',
    mixed: 'Some of both',
    good: 'Strong today',
  },
  medicalComplexity: {
    question: 'How did their health hold up today?',
    hard: 'A hard health day',
    mixed: 'Watchful',
    good: 'Steady',
  },
  exploring: {
    question: 'What did today look like?',
    hard: 'Harder than most',
    mixed: 'A mix',
    good: 'A good one',
  },
};

/* A lens with no written entry still gets a usable row rather than
   being silently dropped, which is what would happen if a lens is
   added to the app and nobody remembers this file. */
export function checkinFor(lens) {
  if (!lens) return null;
  const written = LENS_CHECKINS[lens.id];
  if (written) {
    return {
      id: lens.id,
      label: lens.label,
      question: written.question,
      hard: written.hard,
      mixed: written.mixed,
      good: written.good,
    };
  }
  return {
    id: lens.id,
    label: lens.label,
    question: 'How did today go for this?',
    hard: 'Hard day',
    mixed: 'Mixed',
    good: 'Good day',
  };
}

/* The general row first, because a parent who only wants to answer one
   thing should meet the easiest one. */
export function checkinRows(lenses) {
  const rows = [Object.assign({ label: 'The day' }, GENERAL_CHECKIN)];
  (lenses || []).forEach((l) => {
    const row = checkinFor(l);
    if (row) rows.push(row);
  });
  return rows;
}

export const CHECKIN_INTRO =
  '30 seconds, once a day. Enough of them and you can see the shape of a month instead of '
  + 'trying to remember it.';

export const CHECKIN_NOTE_PROMPT = 'Anything worth remembering about today';

export const CHECKIN_PATTERN_NOTE =
  'This notices patterns. It does not mean anything on its own, and it is not a measure of how '
  + 'anybody is doing as a parent. A run of hard days is worth mentioning to your pediatrician, '
  + 'and so is a stretch of good ones, because both say something about what is working.';

export const CHECKIN_STREAK_LINES = {
  first: 'First one down.',
  going: 'Checked in for {n} days in a row.',
  back: 'Good to have you back.',
};

/* How many days of history to keep on a child. Half a year is plenty
   to see a season in, and it keeps the record small enough to sync
   without anybody noticing. */
export const CHECKIN_KEEP_DAYS = 180;
export const CHECKIN_STRIP_DAYS = 14;

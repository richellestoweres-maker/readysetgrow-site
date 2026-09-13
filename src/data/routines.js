/**
 * Ready Set Grow: Routines
 * ------------------------------------------------------------------
 * Age appropriate routine templates, and a builder that times each step
 * backward from when the routine needs to END.
 *
 * WHY BACKWARD
 * A parent does not think "the routine starts at 6:52". They think
 * "bedtime is 7:30" and then wonder when to start the bath. So the
 * builder takes the end time, which sleep.js already calculated, and
 * works backward through the steps.
 *
 * ROUTINES ARE OPTIONAL AND THE APP MUST SAY SO
 * Plenty of families do better without a structured routine, and plenty
 * of parents feel judged by apps that assume otherwise. Every routine
 * screen should offer the same thing a different way: use this template,
 * build your own, or skip routines entirely and just log as you go.
 * See ROUTINE_STANCE below. None of those three is the wrong answer.
 *
 * WHY THE STEPS CARRY A "why"
 * A parent who knows why the order matters can adapt it. A parent handed
 * a list can only follow or fail. The why is what makes it theirs.
 */

export const ROUTINE_STANCE = {
  headline: 'Routines help some families and not others',
  body:
    'A predictable order does more for most children than any single technique, mostly because it ' +
    'removes the nightly negotiation. But some families do better following the child, and some ' +
    'weeks there is no capacity for a routine at all. All three of these are fine.',
  options: [
    { id: 'template', label: 'Start from a template', detail: 'Use the age based suggestion and change whatever does not fit.' },
    { id: 'custom', label: 'Build my own', detail: 'Add only the steps you actually do, in your order.' },
    { id: 'none', label: 'Skip routines', detail: 'Just log things as they happen. Nothing in the app will nag you about it.' },
  ],
};

export const ROUTINE_TYPES = [
  { id: 'bedtime', label: 'Bedtime', anchor: 'end', description: 'Works backward from bedtime.' },
  { id: 'morning', label: 'Morning', anchor: 'end', description: 'Works backward from when you need to be out the door.' },
  { id: 'nap', label: 'Before a nap', anchor: 'end', description: 'A short version of bedtime.' },
  { id: 'afterschool', label: 'After school', anchor: 'start', description: 'Runs forward from pickup.' },
];

/**
 * Templates by age band.
 *
 * Each step: id, label, minutes, icon, why, optional
 * optional steps are suggestions the parent can switch off, and they are
 * excluded from the default build so the routine does not look enormous.
 */
export const ROUTINE_TEMPLATES = [
  /* ---------------- BEDTIME ---------------- */
  {
    type: 'bedtime', minMonths: 0, maxMonths: 4, label: 'Newborn bedtime',
    note: 'Newborns have no day and night rhythm yet. This is not a schedule, it is a repeated set of cues that eventually becomes one.',
    steps: [
      { id: 'lights', label: 'Dim the lights', minutes: 2, icon: 'moon', why: 'Light is the strongest signal for the body clock that is still forming.' },
      { id: 'diaper', label: 'Fresh diaper', minutes: 3, icon: 'note', why: 'Do it before the feed so you are not waking a settled baby.' },
      { id: 'feed', label: 'Feed', minutes: 20, icon: 'utensils', why: 'Most newborns feed right before their longest stretch.' },
      { id: 'swaddle', label: 'Swaddle', minutes: 3, icon: 'heart', why: 'Only until they show any sign of rolling, then stop completely.', optional: true },
      { id: 'sound', label: 'White noise on', minutes: 1, icon: 'moon', why: 'Steady sound is closer to what they are used to than silence.', optional: true },
      { id: 'down', label: 'Into the bassinet, on their back', minutes: 2, icon: 'moon', why: 'Back to sleep, firm flat surface, nothing else in with them.' },
    ],
  },
  {
    type: 'bedtime', minMonths: 4, maxMonths: 12, label: 'Baby bedtime',
    note: 'Short and identical every night. The sameness is what does the work.',
    steps: [
      { id: 'bath', label: 'Bath', minutes: 10, icon: 'heart', why: 'Not needed nightly. Two or three times a week is plenty for most babies.', optional: true },
      { id: 'pajamas', label: 'Pajamas and diaper', minutes: 5, icon: 'note', why: 'One more layer than you are comfortable in, no more.' },
      { id: 'feed', label: 'Feed', minutes: 15, icon: 'utensils', why: 'Feeding before the last step rather than to sleep gives more flexibility later.' },
      { id: 'book', label: 'One book', minutes: 5, icon: 'book', why: 'Starts the reading habit years before they understand the words.' },
      { id: 'song', label: 'Same song, every night', minutes: 2, icon: 'chat', why: 'A consistent audio cue they will recognize for years.' },
      { id: 'down', label: 'Into the crib', minutes: 2, icon: 'moon', why: 'Same words every night, then leave. Predictable endings settle faster.' },
    ],
  },
  {
    type: 'bedtime', minMonths: 12, maxMonths: 36, label: 'Toddler bedtime',
    note: 'Front load the requests. Offer the drink, the extra hug and the last question before lights out, so there is nothing left to bargain with.',
    steps: [
      { id: 'warn', label: 'Five minute warning', minutes: 5, icon: 'clock', why: 'Most bedtime meltdowns are about being surprised, not about bedtime.' },
      { id: 'bath', label: 'Bath', minutes: 12, icon: 'heart', why: 'Also a transition marker. The day is over when the bath happens.', optional: true },
      { id: 'pajamas', label: 'Pajamas', minutes: 5, icon: 'note', why: 'Let them choose between two pairs. Real control over something small.' },
      { id: 'teeth', label: 'Brush teeth', minutes: 3, icon: 'star', why: 'Twice a day from the first tooth. You do the brushing at this age.' },
      { id: 'books', label: 'Two books', minutes: 8, icon: 'book', why: 'Say the number out loud beforehand so the ending is not a negotiation.' },
      { id: 'drink', label: 'Last drink', minutes: 2, icon: 'utensils', why: 'Offered on purpose, so it cannot be used later as a stalling tactic.', optional: true },
      { id: 'song', label: 'Song and hug', minutes: 3, icon: 'heart', why: 'The connection step. This is the one they will remember.' },
      { id: 'down', label: 'Lights out, same words', minutes: 2, icon: 'moon', why: 'Identical closing line every night, then leave.' },
    ],
  },
  {
    type: 'bedtime', minMonths: 36, maxMonths: 84, label: 'Preschool bedtime',
    note: 'This is the age when night fears show up. Take them seriously rather than arguing with them, and give a concrete promise you can keep.',
    steps: [
      { id: 'warn', label: 'Five minute warning', minutes: 5, icon: 'clock', why: 'Stopping play is the hardest transition of the day.' },
      { id: 'tidy', label: 'Put away three things', minutes: 3, icon: 'star', why: 'A small number is doable. Clean up everything is not.', optional: true },
      { id: 'bath', label: 'Bath or shower', minutes: 12, icon: 'heart', why: 'Marks the end of the day, and a warm to cool shift helps sleep.', optional: true },
      { id: 'pajamas', label: 'Pajamas', minutes: 5, icon: 'note', why: 'Let them do as much of it themselves as time allows.' },
      { id: 'teeth', label: 'Brush teeth', minutes: 3, icon: 'star', why: 'They brush, then you brush after. They cannot do it well alone until around seven or eight.' },
      { id: 'books', label: 'Books', minutes: 10, icon: 'book', why: 'Reading together at this age is one of the strongest predictors of later literacy.' },
      { id: 'talk', label: 'Best part and hard part of the day', minutes: 5, icon: 'chat', why: 'A tiny daily ritual that keeps a channel open for the years when it matters more.' },
      { id: 'down', label: 'Lights out, same words', minutes: 2, icon: 'moon', why: 'If they are scared, name the fear and give a keepable promise: I will check on you.' },
    ],
  },
  {
    type: 'bedtime', minMonths: 84, maxMonths: 156, label: 'School age bedtime',
    note: 'Screens are now the biggest variable. Getting them out of the last hour does more than anything else on this list.',
    steps: [
      { id: 'screens', label: 'Screens off', minutes: 2, icon: 'clock', why: 'An hour before sleep if you can. Both the light and the content delay sleep.' },
      { id: 'tomorrow', label: 'Set out tomorrow', minutes: 5, icon: 'note', why: 'Clothes and bag ready now removes tomorrow morning\'s fight.', optional: true },
      { id: 'shower', label: 'Shower', minutes: 12, icon: 'heart', why: 'Moving this to evening buys real time in the morning.', optional: true },
      { id: 'teeth', label: 'Brush teeth', minutes: 3, icon: 'star', why: 'Around seven or eight most children can do this well alone. Spot check.' },
      { id: 'read', label: 'Read', minutes: 15, icon: 'book', why: 'Their own book or together. Both count.' },
      { id: 'talk', label: 'Check in', minutes: 5, icon: 'chat', why: 'Bedtime is when school age children actually talk. Protect the space and stay quiet.' },
      { id: 'down', label: 'Lights out', minutes: 2, icon: 'moon', why: 'Consistent timing matters more at this age than the exact hour does.' },
    ],
  },
  {
    type: 'bedtime', minMonths: 156, maxMonths: 240, label: 'Teen wind down',
    note: 'A teen body clock genuinely runs later. This is a routine they own, with you setting the outer edges rather than the steps.',
    steps: [
      { id: 'screens', label: 'Phone out of the room', minutes: 2, icon: 'clock', why: 'The single highest impact change for teen sleep. Charge it somewhere else.' },
      { id: 'tomorrow', label: 'Sort out tomorrow', minutes: 5, icon: 'note', why: 'Bag, clothes, anything due. Removes the 7 AM panic.', optional: true },
      { id: 'shower', label: 'Shower', minutes: 15, icon: 'heart', why: 'Evening rather than morning buys sleep at the end that matters.', optional: true },
      { id: 'teeth', label: 'Teeth', minutes: 3, icon: 'star', why: 'Their job entirely by now.' },
      { id: 'read', label: 'Read or something offline', minutes: 20, icon: 'book', why: 'Anything that is not a screen. The point is the transition, not the activity.' },
      { id: 'down', label: 'Lights out', minutes: 2, icon: 'moon', why: 'Work backward from the alarm. Eight to ten hours is the target, and most teens get far less.' },
    ],
  },

  /* ---------------- MORNING ---------------- */
  {
    type: 'morning', minMonths: 12, maxMonths: 48, label: 'Toddler morning',
    note: 'Add fifteen minutes more than you think you need. Most morning power struggles are actually schedule problems.',
    steps: [
      { id: 'wake', label: 'Wake up gently', minutes: 5, icon: 'sun', why: 'Light and a slow start beat being rushed straight into demands.' },
      { id: 'diaper', label: 'Diaper or potty', minutes: 5, icon: 'potty', why: 'First thing, before they get absorbed in something else.' },
      { id: 'dressed', label: 'Get dressed', minutes: 8, icon: 'note', why: 'Two outfit choices, both acceptable to you. This is the biggest fight avoided.' },
      { id: 'breakfast', label: 'Breakfast', minutes: 15, icon: 'utensils', why: 'Sitting down. Eating in the car is where choking risk lives.' },
      { id: 'teeth', label: 'Brush teeth', minutes: 3, icon: 'star', why: 'After breakfast, not before, or you brush and then feed them sugar.' },
      { id: 'shoes', label: 'Shoes and out', minutes: 6, icon: 'run', why: 'Last, because a toddler in shoes indoors will find something to do.' },
    ],
  },
  {
    type: 'morning', minMonths: 48, maxMonths: 120, label: 'School morning',
    note: 'A visual checklist they can follow themselves turns you from the nag into the person who points at the list.',
    steps: [
      { id: 'wake', label: 'Wake up', minutes: 5, icon: 'sun', why: 'Open the curtains. Morning light is what shifts a body clock.' },
      { id: 'dressed', label: 'Get dressed', minutes: 8, icon: 'note', why: 'Clothes picked the night before removes the decision entirely.' },
      { id: 'breakfast', label: 'Breakfast', minutes: 15, icon: 'utensils', why: 'Protein helps more than sugar for holding attention through the morning.' },
      { id: 'teeth', label: 'Teeth and hair', minutes: 5, icon: 'star', why: 'After eating.' },
      { id: 'bag', label: 'Bag, lunch, anything due', minutes: 5, icon: 'note', why: 'Same checklist every day, and let them run it rather than you.' },
      { id: 'shoes', label: 'Shoes and out', minutes: 5, icon: 'run', why: 'Shoes and bag by the door the night before saves the last five minutes.' },
    ],
  },

  /* ---------------- NAP ---------------- */
  {
    type: 'nap', minMonths: 3, maxMonths: 48, label: 'Before a nap',
    note: 'A short version of bedtime, in the same order. The similarity is the cue.',
    steps: [
      { id: 'warn', label: 'Warning', minutes: 3, icon: 'clock', why: 'Even a small heads up reduces the fight.' },
      { id: 'diaper', label: 'Diaper or potty', minutes: 3, icon: 'potty', why: 'So they are not woken for it thirty minutes in.' },
      { id: 'dark', label: 'Room dark, sound on', minutes: 2, icon: 'moon', why: 'Daytime sleep needs more help from the environment than night sleep does.' },
      { id: 'book', label: 'One book or one song', minutes: 4, icon: 'book', why: 'A shortened echo of bedtime, so the body recognizes the pattern.' },
      { id: 'down', label: 'Down', minutes: 2, icon: 'moon', why: 'Same words as bedtime.' },
    ],
  },

  /* ---------------- AFTER SCHOOL ---------------- */
  {
    type: 'afterschool', minMonths: 48, maxMonths: 156, label: 'After school',
    note: 'This runs forward from pickup. The first half hour is for recovery, not for questions or homework.',
    steps: [
      { id: 'food', label: 'Snack, immediately', minutes: 10, icon: 'utensils', why: 'Hunger peaks right at pickup. Feed before you ask anything at all.' },
      { id: 'quiet', label: 'Quiet, no questions', minutes: 20, icon: 'moon', why: 'They spent all day holding it together. Questions are more work.' },
      { id: 'move', label: 'Move their body', minutes: 25, icon: 'run', why: 'Outside if possible. Movement before homework, not after.' },
      { id: 'homework', label: 'Homework', minutes: 25, icon: 'book', why: 'Now, not at pickup. Sit with them for the first two minutes to get it started.', optional: true },
      { id: 'talk', label: 'Ask about the day, sideways', minutes: 10, icon: 'chat', why: 'One good thing and one annoying thing gets answers where how was your day gets fine.' },
    ],
  },
];

/* ------------------------------------------------------------------
 * TIME HELPERS
 * Kept local so this file has no dependencies, matching sleep.js.
 * ------------------------------------------------------------------ */

function parseClock(value) {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return null;
  const s = value.trim().toLowerCase();
  const m = /^(\d{1,2})[:.](\d{2})\s*(am|pm)?$/.exec(s) || /^(\d{1,2})\s*(am|pm)$/.exec(s);
  if (!m) return null;
  let h = Number(m[1]);
  const min = m[2] && /^\d{2}$/.test(m[2]) ? Number(m[2]) : 0;
  const ap = (m[3] || m[2] || '').toString().toLowerCase();
  if (ap === 'pm' && h < 12) h += 12;
  if (ap === 'am' && h === 12) h = 0;
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}

function clockLabel(mins) {
  if (typeof mins !== 'number' || Number.isNaN(mins)) return '';
  const total = ((Math.round(mins) % 1440) + 1440) % 1440;
  const h24 = Math.floor(total / 60);
  const m = total % 60;
  const ap = h24 >= 12 ? 'PM' : 'AM';
  let h = h24 % 12; if (h === 0) h = 12;
  return `${h}:${String(m).padStart(2, '0')} ${ap}`;
}

/* ------------------------------------------------------------------
 * LOOKUP AND BUILD
 * ------------------------------------------------------------------ */

/** The template for a routine type at an age, or null. */
export function getTemplate(type, months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return null;
  return ROUTINE_TEMPLATES.find(
    (t) => t.type === type && months >= t.minMonths && months < t.maxMonths
  ) || null;
}

/** Which routine types have a template at this age. */
export function getRoutineTypesForAge(months) {
  return ROUTINE_TYPES.filter((t) => getTemplate(t.id, months));
}

/**
 * Builds a timed routine.
 *
 *   buildRoutine({ type: 'bedtime', months: 30, endTime: '7:30 PM' })
 *   buildRoutine({ type: 'afterschool', months: 84, startTime: '3:15 PM' })
 *   buildRoutine({ type: 'bedtime', months: 30, endTime: '7:30 PM',
 *                  include: ['bath'], exclude: ['drink'] })
 *
 * Optional steps are off by default. Pass their ids in `include` to add
 * them, and any step id in `exclude` to drop it.
 *
 * Returns { ok, steps, startTime, endTime, totalMinutes, template }
 */
export function buildRoutine(options = {}) {
  const { type, months, endTime, startTime, include = [], exclude = [], custom } = options;

  const template = getTemplate(type, months);
  if (!template && !custom) {
    return { ok: false, reason: 'No routine template for that type at that age.', steps: [], template: null };
  }

  const source = custom || template.steps;
  const chosen = source.filter((st) => {
    if (exclude.includes(st.id)) return false;
    if (st.optional) return include.includes(st.id);
    return true;
  });

  if (chosen.length === 0) {
    return { ok: false, reason: 'No steps selected.', steps: [], template };
  }

  const total = chosen.reduce((n, st) => n + st.minutes, 0);

  const typeDef = ROUTINE_TYPES.find((t) => t.id === type);
  const anchor = typeDef ? typeDef.anchor : 'end';

  let start;
  if (anchor === 'start' || startTime != null) {
    start = parseClock(startTime);
    if (start === null) return { ok: false, reason: 'Could not read that start time.', steps: [], template };
  } else {
    const end = parseClock(endTime);
    if (end === null) return { ok: false, reason: 'Could not read that end time.', steps: [], template };
    start = end - total;
  }

  let cursor = start;
  const steps = chosen.map((st) => {
    const at = cursor;
    cursor += st.minutes;
    return { ...st, startMinutes: at, endMinutes: cursor, time: clockLabel(at), duration: `${st.minutes} min` };
  });

  return {
    ok: true,
    template,
    steps,
    totalMinutes: total,
    startMinutes: start,
    endMinutes: cursor,
    startTime: clockLabel(start),
    endTime: clockLabel(cursor),
    note: template ? template.note : null,
    optionalAvailable: source.filter((st) => st.optional && !include.includes(st.id)),
  };
}

/** Every optional step available for a routine, for the customize screen. */
export function getOptionalSteps(type, months) {
  const t = getTemplate(type, months);
  return t ? t.steps.filter((s) => s.optional) : [];
}

/** Total minutes a routine takes, for showing before a parent commits to it. */
export function estimateMinutes(type, months, include = []) {
  const t = getTemplate(type, months);
  if (!t) return 0;
  return t.steps
    .filter((s) => !s.optional || include.includes(s.id))
    .reduce((n, s) => n + s.minutes, 0);
}

export { parseClock, clockLabel };
export default ROUTINE_TEMPLATES;

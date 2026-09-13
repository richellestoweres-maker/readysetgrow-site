/**
 * Ready Set Grow: Log Types
 * ------------------------------------------------------------------
 * What a parent can record, what fields each one has, and which ages it
 * makes sense at.
 *
 * WHY THIS IS DATA AND NOT SCREENS
 * A teenager should never be offered a diaper log and a newborn should
 * never be offered a homework log. Driving the whole logging UI from this
 * file means age gating happens in one place instead of being remembered
 * in every screen.
 *
 * THE MEDICATION CASE IS THE IMPORTANT ONE
 * Rotating two fever medicines at 3 AM while exhausted is exactly where
 * double dosing happens. So the medication log records what was given and
 * when, and computes when the next dose of that same medicine is due.
 *
 * What it must never do is tell a parent how much to give. Dose is by
 * weight and comes from their pediatrician or the label. The app tracks
 * timing, which is the part memory fails at. That line is deliberate and
 * should not move.
 */

/* ------------------------------------------------------------------
 * FIELD TYPES
 * A small set on purpose. Every log form is built from these, so adding a
 * new log type never means writing new form code.
 * ------------------------------------------------------------------ */

export const FIELD_TYPES = {
  choice: 'choice',       // pick one from options
  multi: 'multi',         // pick any number
  number: 'number',       // amount, temperature, minutes
  duration: 'duration',   // minutes, usually filled by a timer
  time: 'time',           // clock time
  text: 'text',           // free notes
  toggle: 'toggle',       // yes or no
};

/* ------------------------------------------------------------------
 * THE LOG TYPES
 * ------------------------------------------------------------------ */

export const LOG_TYPES = [
  /* ---------------- FEEDING ---------------- */
  {
    id: 'breastfeeding',
    label: 'Breastfeeding',
    group: 'feeding',
    icon: 'heart',
    minMonths: 0, maxMonths: 36,
    hasTimer: true,
    timerLabel: 'Feed timer',
    summaryTemplate: '{side} for {duration}',
    fields: [
      { id: 'side', label: 'Side', type: 'choice', options: ['Left', 'Right', 'Both'], required: true },
      { id: 'duration', label: 'How long', type: 'duration' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
    // Which side you started on is the thing nobody remembers at 4 AM.
    tracksAlternating: 'side',
  },
  {
    id: 'bottle',
    label: 'Bottle',
    group: 'feeding',
    icon: 'coffee',
    minMonths: 0, maxMonths: 36,
    summaryTemplate: '{amount} of {contents}',
    fields: [
      { id: 'amount', label: 'Amount', type: 'number', unit: 'oz', step: 0.5 },
      { id: 'contents', label: 'What', type: 'choice', options: ['Breast milk', 'Formula', 'Mixed'], required: true },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'pumping',
    label: 'Pumping',
    group: 'feeding',
    icon: 'droplet',
    minMonths: 0, maxMonths: 36,
    hasTimer: true,
    timerLabel: 'Pump timer',
    summaryTemplate: '{amount} in {duration}',
    fields: [
      { id: 'side', label: 'Side', type: 'choice', options: ['Left', 'Right', 'Both'] },
      { id: 'amount', label: 'Amount', type: 'number', unit: 'oz', step: 0.5 },
      { id: 'duration', label: 'How long', type: 'duration' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
    tracksAlternating: 'side',
  },
  {
    id: 'solids',
    label: 'Solids',
    group: 'feeding',
    icon: 'award',
    minMonths: 4, maxMonths: 24,
    summaryTemplate: '{food}',
    fields: [
      { id: 'food', label: 'What they tried', type: 'text', required: true },
      { id: 'reaction', label: 'How it went', type: 'choice', options: ['Loved it', 'Ate some', 'Refused', 'Gagged'] },
      { id: 'allergen', label: 'New allergen', type: 'toggle',
        hint: 'Worth flagging so you can watch for a reaction and space out the next new one.' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'meals',
    label: 'Meals',
    group: 'feeding',
    icon: 'coffee',
    minMonths: 12, maxMonths: 240,
    summaryTemplate: '{meal}: {what}',
    fields: [
      { id: 'meal', label: 'Which meal', type: 'choice', options: ['Breakfast', 'Lunch', 'Dinner', 'Snack'], required: true },
      { id: 'what', label: 'What they ate', type: 'text' },
      { id: 'howMuch', label: 'How much', type: 'choice', options: ['All of it', 'Most', 'Some', 'Barely any', 'Refused'] },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },

  /* ---------------- OUTPUT ---------------- */
  {
    id: 'diapers',
    label: 'Diaper',
    group: 'care',
    icon: 'refresh-cw',
    minMonths: 0, maxMonths: 42,
    summaryTemplate: '{kind}',
    fields: [
      { id: 'kind', label: 'What was in it', type: 'choice', options: ['Wet', 'Dirty', 'Both', 'Dry'], required: true },
      { id: 'color', label: 'Color', type: 'choice', options: ['Yellow', 'Brown', 'Green', 'Black', 'Red or bloody', 'Pale or chalky'],
        hint: 'Red, black past the newborn days, or pale and chalky are all worth a call.' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'potty',
    label: 'Potty',
    group: 'care',
    icon: 'check-circle',
    minMonths: 18, maxMonths: 72,
    summaryTemplate: '{result}',
    fields: [
      { id: 'result', label: 'How it went', type: 'choice', options: ['Pee', 'Poop', 'Both', 'Tried, nothing', 'Accident'], required: true },
      { id: 'prompted', label: 'Did you prompt them', type: 'toggle' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },

  /* ---------------- SLEEP ---------------- */
  {
    id: 'sleep',
    label: 'Sleep',
    group: 'sleep',
    icon: 'moon',
    minMonths: 0, maxMonths: 240,
    hasTimer: true,
    timerLabel: 'Sleep timer',
    summaryTemplate: '{kind} for {duration}',
    fields: [
      { id: 'kind', label: 'Nap or night', type: 'choice', options: ['Nap', 'Night'], required: true },
      { id: 'duration', label: 'How long', type: 'duration' },
      { id: 'where', label: 'Where', type: 'choice', options: ['Crib', 'Bassinet', 'Contact nap', 'Stroller', 'Car seat', 'Bed'],
        hint: 'Car seats and strollers are not safe for unsupervised sleep. Move them to a flat surface when you can.' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },

  /* ---------------- HEALTH ---------------- */
  {
    id: 'medication',
    label: 'Medication',
    group: 'health',
    icon: 'thermometer',
    minMonths: 0, maxMonths: 240,
    summaryTemplate: '{name} {dose}',
    tracksInterval: true,
    fields: [
      { id: 'name', label: 'Which medicine', type: 'text', required: true,
        hint: 'Use the same name each time so the app can track when the next dose is due.' },
      { id: 'dose', label: 'How much you gave', type: 'text',
        hint: 'Record what you actually gave. Dose comes from your pediatrician or the label, never from this app.' },
      { id: 'reason', label: 'Why', type: 'choice', options: ['Fever', 'Pain', 'Cough or cold', 'Allergy', 'Prescription', 'Other'] },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'symptoms',
    label: 'Symptoms',
    group: 'health',
    icon: 'activity',
    minMonths: 0, maxMonths: 240,
    summaryTemplate: '{what}',
    fields: [
      { id: 'what', label: 'What you are seeing', type: 'multi',
        options: ['Fever', 'Cough', 'Runny nose', 'Vomiting', 'Diarrhea', 'Rash', 'Ear pulling', 'Not eating', 'Unusually sleepy', 'Breathing effort'],
        required: true },
      { id: 'temperature', label: 'Temperature', type: 'number', unit: 'F', step: 0.1,
        hint: 'Under 3 months, 100.4 F or higher needs to be seen right away.' },
      { id: 'howTaken', label: 'How you took it', type: 'choice', options: ['Rectal', 'Forehead', 'Ear', 'Armpit', 'Oral'] },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },

  /* ---------------- DEVELOPMENT AND DAY TO DAY ---------------- */
  {
    id: 'behavior',
    label: 'Behavior',
    group: 'development',
    icon: 'users',
    minMonths: 6, maxMonths: 240,
    summaryTemplate: '{what}',
    fields: [
      { id: 'what', label: 'What happened', type: 'text', required: true },
      { id: 'before', label: 'What came just before', type: 'text',
        hint: 'The trigger is usually the useful part. Patterns show up here before they show up anywhere else.' },
      { id: 'howLong', label: 'How long it lasted', type: 'duration' },
      { id: 'notes', label: 'What helped', type: 'text' },
    ],
  },
  {
    id: 'mood',
    label: 'Mood',
    group: 'development',
    icon: 'smile',
    minMonths: 6, maxMonths: 240,
    summaryTemplate: '{mood}',
    fields: [
      { id: 'mood', label: 'How they seem', type: 'choice',
        options: ['Happy', 'Calm', 'Clingy', 'Frustrated', 'Sad', 'Wired', 'Withdrawn'], required: true },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'milestone',
    label: 'Milestone',
    group: 'development',
    icon: 'star',
    minMonths: 0, maxMonths: 240,
    summaryTemplate: '{what}',
    fields: [
      { id: 'what', label: 'What they did', type: 'text', required: true },
      { id: 'first', label: 'First time', type: 'toggle' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'reading',
    label: 'Reading',
    group: 'development',
    icon: 'book-open',
    minMonths: 0, maxMonths: 240,
    hasTimer: true,
    timerLabel: 'Reading timer',
    summaryTemplate: '{minutes} minutes',
    fields: [
      { id: 'minutes', label: 'How long', type: 'duration' },
      { id: 'book', label: 'What you read', type: 'text' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'notes',
    label: 'Note',
    group: 'development',
    icon: 'file-text',
    minMonths: 0, maxMonths: 240,
    summaryTemplate: '{note}',
    fields: [
      { id: 'note', label: 'What happened', type: 'text', required: true },
    ],
  },
];

export const LOG_GROUPS = {
  feeding: 'Feeding',
  care: 'Care',
  sleep: 'Sleep',
  health: 'Health',
  development: 'Day to day',
};

/* ------------------------------------------------------------------
 * MEDICATION INTERVALS
 *
 * These are the standard minimum intervals from the labels. They exist so
 * the app can say "the next dose of this is not due until 11:40 PM",
 * which is the thing an exhausted parent gets wrong.
 *
 * DOSE IS NOT HERE AND MUST NOT BE ADDED. Dosing is by weight and comes
 * from a pediatrician or the label. Timing is what memory fails at, and
 * timing is all this tracks.
 * ------------------------------------------------------------------ */

export const MED_INTERVALS = [
  {
    match: ['acetaminophen', 'tylenol', 'paracetamol', 'infant tylenol', 'childrens tylenol'],
    label: 'Acetaminophen',
    minHours: 4,
    maxPer24h: 5,
    note: 'Usually every 4 to 6 hours, and most labels cap it at 5 doses in 24 hours. Confirm the dose for your child’s weight with your pediatrician.',
  },
  {
    match: ['ibuprofen', 'motrin', 'advil', 'infant motrin', 'childrens motrin'],
    label: 'Ibuprofen',
    minHours: 6,
    maxPer24h: 4,
    note: 'Usually every 6 to 8 hours. Not used under 6 months. Confirm the dose for your child’s weight with your pediatrician.',
  },
];

/** Finds interval guidance for a medicine name a parent typed. */
export function getMedInterval(name) {
  if (!name || typeof name !== 'string') return null;
  const n = name.trim().toLowerCase();
  if (!n) return null;
  return MED_INTERVALS.find((m) => m.match.some((x) => n.includes(x))) || null;
}

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

export function getLogType(id) {
  if (!id) return null;
  return LOG_TYPES.find((t) => t.id === id) || null;
}

/** Which logs make sense at this age. Everything else stays hidden. */
export function getLogTypesForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return [];
  return LOG_TYPES.filter((t) => months >= t.minMonths && months < t.maxMonths);
}

/** The same list, grouped, for a quick log grid. */
export function getLogGroupsForAge(months) {
  const list = getLogTypesForAge(months);
  const out = {};
  list.forEach((t) => { (out[t.group] = out[t.group] || []).push(t); });
  return Object.keys(out).map((id) => ({ id, label: LOG_GROUPS[id] || id, items: out[id] }));
}

/** Every log type that offers a timer, for the timer screen. */
export function getTimerLogTypes(months) {
  return getLogTypesForAge(months).filter((t) => t.hasTimer);
}

/**
 * A one line summary of a saved log, for the recent list.
 * Fills the type's template and quietly drops anything not filled in.
 */
export function summarizeLog(log) {
  const type = getLogType(log && log.typeId);
  if (!type) return '';
  const values = (log && log.values) || {};
  if (!type.summaryTemplate) return type.label;

  const filled = type.summaryTemplate.replace(/\{(\w+)\}/g, (_, key) => {
    const v = values[key];
    if (v === undefined || v === null || v === '') return '';
    if (Array.isArray(v)) return v.join(', ');
    const field = type.fields.find((f) => f.id === key);
    if (field && field.type === 'duration') {
      const mins = Number(v);
      if (!Number.isFinite(mins)) return String(v);
      if (mins < 60) return `${mins} min`;
      const h = Math.floor(mins / 60);
      const r = Math.round(mins % 60);
      return r === 0 ? `${h}h` : `${h}h ${r}m`;
    }
    if (field && field.unit) return `${v} ${field.unit}`;
    return String(v);
  });
  const cleaned = filled.replace(/\s{2,}/g, ' ').replace(/^\W+|\W+$/g, '').trim();
  return cleaned || type.label;
}

export const LOG_TYPE_IDS = LOG_TYPES.map((t) => t.id);

export default LOG_TYPES;

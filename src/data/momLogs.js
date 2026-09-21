/**
 * Ready Set Grow: Her Own Logs
 * ------------------------------------------------------------------
 * Everything in logTypes.js records something about a child. This file
 * records something about HER, and it exists because she said the app
 * was watching everybody in the house except the person holding it.
 *
 * THE SAME SHAPE, ON PURPOSE
 * These use the field types from logTypes.js, so the same form code
 * draws them and the same list code reads them back. A new log here is
 * data, never new screens.
 *
 * WHAT DECIDES WHETHER SHE SEES ONE
 * Child logs are gated by the child's age. Hers are gated by where she
 * is, which is a different question: how long since she gave birth,
 * whether she is feeding, whether she is expecting, and what she has
 * told Settings she lives with. Somebody whose youngest is four should
 * never be offered a bleeding log, and somebody who has never had
 * diabetes should never be shown a blood sugar field.
 *
 * WHERE THE LINE IS
 * The same line the rest of the app holds. These record what happened
 * and when. They do not set targets, they do not interpret a number
 * back at her, and they do not tell her whether something is wrong.
 * Where a number has a widely used threshold worth knowing, such as
 * 100.4 for a fever, it is written as a hint next to the field and
 * attributed to what providers ask people to watch for, never
 * presented as this app's finding.
 */

export const MOM_LOG_GROUPS = {
  yourself: { id: 'yourself', label: 'For you' },
  feeding: { id: 'feeding', label: 'Feeding' },
  health: { id: 'health', label: 'Your health' },
  recovery: { id: 'recovery', label: 'After the birth' },
  pregnancy: { id: 'pregnancy', label: 'Pregnancy' },
};

export const MOM_LOG_TYPES = [

  /* ---------------- FOR YOU ----------------
     Not health tracking. These are the things that get dropped first
     when somebody is looking after everybody else, and the only reason
     to record them is so she can look back and see that she did get
     outside, or read something, or have twenty minutes that were hers.
     Nothing here has a target and nothing here is ever counted against
     her for missing a day. */
  {
    id: 'mom-moved',
    label: 'Moved your body',
    group: 'yourself',
    icon: 'activity',
    shows: 'always',
    summaryTemplate: '{what}, {minutes}',
    fields: [
      { id: 'what', label: 'What you did', type: 'choice',
        options: ['A walk', 'A workout', 'Stretching or yoga', 'Dancing about the kitchen',
          'Carrying a child up a hill', 'Something else'], required: true,
        hint: 'Pushing a stroller round the block counts. It was never about the gym.' },
      { id: 'minutes', label: 'Roughly how long', type: 'duration' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-outside',
    label: 'Got outside',
    group: 'yourself',
    icon: 'leaf',
    shows: 'always',
    summaryTemplate: '{where}, {minutes}',
    fields: [
      { id: 'where', label: 'Where', type: 'choice',
        options: ['The garden or yard', 'A walk', 'A park', 'Water', 'Just the doorstep'], required: true },
      { id: 'minutes', label: 'Roughly how long', type: 'duration' },
      { id: 'withKids', label: 'With the children', type: 'toggle' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-read',
    label: 'Read something',
    group: 'yourself',
    icon: 'book',
    shows: 'always',
    summaryTemplate: '{what}',
    fields: [
      { id: 'what', label: 'What you read', type: 'text', required: true,
        placeholder: 'A book, an article, 2 pages before you fell asleep' },
      { id: 'minutes', label: 'Roughly how long', type: 'duration' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-forme',
    label: 'Something for you',
    group: 'yourself',
    icon: 'star',
    shows: 'always',
    summaryTemplate: '{what}',
    fields: [
      { id: 'what', label: 'What it was', type: 'choice',
        options: ['A shower on my own', 'Saw a friend', 'A hobby', 'Rested', 'Ate a proper meal',
          'A hot drink while it was still hot', 'Something else'], required: true },
      { id: 'minutes', label: 'Roughly how long', type: 'duration' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },

  /* ---------------- FEEDING ---------------- */
  {
    id: 'mom-breastfeeding',
    label: 'Breastfeeding',
    group: 'feeding',
    icon: 'heart',
    shows: 'feeding',
    hasTimer: true,
    timerLabel: 'Feed timer',
    summaryTemplate: '{side} for {duration}',
    /* The thing nobody remembers at four in the morning, which is the
       whole reason this log is worth opening. */
    tracksAlternating: 'side',
    fields: [
      { id: 'side', label: 'Which side', type: 'choice', options: ['Left', 'Right', 'Both'], required: true },
      { id: 'duration', label: 'How long', type: 'duration' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-pumping',
    label: 'Pumping',
    group: 'feeding',
    icon: 'droplet',
    shows: 'feeding',
    hasTimer: true,
    timerLabel: 'Pump timer',
    summaryTemplate: '{amount} from {side}',
    tracksAlternating: 'side',
    fields: [
      { id: 'side', label: 'Which side', type: 'choice', options: ['Left', 'Right', 'Both'] },
      { id: 'amount', label: 'How much', type: 'number', unit: 'oz', step: 0.5 },
      { id: 'duration', label: 'How long', type: 'duration' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-bottle',
    label: 'Bottle given',
    group: 'feeding',
    icon: 'coffee',
    shows: 'feeding',
    summaryTemplate: '{amount} of {contents}',
    fields: [
      { id: 'amount', label: 'How much', type: 'number', unit: 'oz', step: 0.5 },
      { id: 'contents', label: 'What was in it', type: 'choice',
        options: ['Breast milk', 'Formula', 'Mixed'], required: true },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-stash',
    label: 'Milk put away',
    group: 'feeding',
    icon: 'award',
    shows: 'feeding',
    summaryTemplate: '{amount} to the {where}',
    fields: [
      { id: 'amount', label: 'How much', type: 'number', unit: 'oz', step: 0.5, required: true },
      { id: 'where', label: 'Where it went', type: 'choice', options: ['Fridge', 'Freezer', 'Deep freezer'],
        hint: 'Fresh milk keeps about 4 days in the fridge, and roughly 6 months in a freezer, '
          + 'longer in a deep freezer. Label it with today so the oldest gets used first.' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },

  /* ---------------- HER HEALTH ---------------- */
  {
    id: 'mom-mood',
    label: 'How you are',
    group: 'health',
    icon: 'leaf',
    shows: 'always',
    summaryTemplate: '{mood}',
    fields: [
      { id: 'mood', label: 'Today, honestly', type: 'choice',
        options: ['Good', 'All right', 'Flat', 'Anxious', 'Angry', 'Very low'], required: true },
      { id: 'sleptWell', label: 'Did you get any real sleep', type: 'toggle' },
      { id: 'notes', label: 'Anything you want to put down', type: 'text' },
    ],
  },
  {
    id: 'mom-bp',
    label: 'Blood pressure',
    group: 'health',
    icon: 'activity',
    shows: 'always',
    summaryTemplate: '{systolic} over {diastolic}',
    fields: [
      { id: 'systolic', label: 'Top number', type: 'number', required: true },
      { id: 'diastolic', label: 'Bottom number', type: 'number', required: true,
        hint: 'Sitting down, feet flat, arm at heart height. After a birth, providers ask people to '
          + 'call for 140 over 90 or higher twice 20 minutes apart, and to go in for 160 over 110.' },
      { id: 'pulse', label: 'Pulse', type: 'number' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-sugar',
    label: 'Blood sugar',
    group: 'health',
    icon: 'droplet',
    shows: 'diabetes',
    summaryTemplate: '{reading} {when}',
    fields: [
      { id: 'reading', label: 'Reading', type: 'number', unit: 'mg/dL', required: true },
      { id: 'when', label: 'When you took it', type: 'choice',
        options: ['Fasting', 'Before a meal', 'One hour after', '2 hours after', 'Bedtime', 'Felt low'],
        required: true,
        hint: 'The app does not set a target. Your own numbers come from your provider, and they are '
          + 'different in pregnancy than outside it.' },
      { id: 'notes', label: 'What you ate, or anything else', type: 'text' },
    ],
  },
  {
    id: 'mom-medication',
    label: 'Medication',
    group: 'health',
    icon: 'thermometer',
    shows: 'always',
    summaryTemplate: '{name} {dose}',
    tracksInterval: true,
    fields: [
      { id: 'name', label: 'Which medicine', type: 'text', required: true,
        hint: 'Use the same name each time and the app can tell you when you last took it.' },
      { id: 'dose', label: 'How much you took', type: 'text' },
      { id: 'reason', label: 'Why', type: 'choice',
        options: ['Pain', 'Prescription', 'Iron', 'Prenatal or vitamin', 'Blood pressure', 'Other'] },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-sleep',
    label: 'Your sleep',
    group: 'health',
    icon: 'moon',
    shows: 'always',
    summaryTemplate: '{hours} hours, {quality}',
    fields: [
      { id: 'hours', label: 'Roughly how many hours', type: 'number', unit: 'hrs', step: 0.5 },
      { id: 'quality', label: 'How was it', type: 'choice',
        options: ['Solid', 'Broken', 'Barely any', 'None'] },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-weight',
    label: 'Weight',
    group: 'health',
    icon: 'chart',
    shows: 'always',
    summaryTemplate: '{weight}',
    /* Deliberately bare. A number, a date, nothing else. No target, no
       BMI, no chart implying a direction, and nothing anywhere that
       comments on it. She asked for it quietly and that is how it
       stays. */
    fields: [
      { id: 'weight', label: 'Weight', type: 'number', unit: 'lb', step: 0.1, required: true },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },

  /* ---------------- AFTER THE BIRTH ---------------- */
  {
    id: 'mom-bleeding',
    label: 'Bleeding',
    group: 'recovery',
    icon: 'heart',
    shows: 'postpartum',
    summaryTemplate: '{how}',
    fields: [
      { id: 'how', label: 'How heavy', type: 'choice',
        options: ['Spotting', 'Light', 'Moderate', 'Heavy', 'Soaked a pad in an hour'], required: true,
        hint: 'Soaking a pad in an hour or less, or clots bigger than an egg, is the one to ring about '
          + 'straight away rather than watch. It is not only a first week problem.' },
      { id: 'clots', label: 'Any clots', type: 'choice', options: ['None', 'Small', 'Big'] },
      { id: 'color', label: 'Color', type: 'choice', options: ['Bright red', 'Pink', 'Brown'],
        hint: 'Going back to bright red after it had slowed is worth mentioning.' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-pain',
    label: 'Pain',
    group: 'recovery',
    icon: 'activity',
    shows: 'postpartum',
    summaryTemplate: '{where}, {level}',
    fields: [
      { id: 'where', label: 'Where', type: 'multi',
        options: ['Cramping', 'Stitches or tear', 'Cesarean incision', 'Back', 'Chest or breast',
          'Head', 'One leg'] },
      { id: 'level', label: 'How bad', type: 'choice',
        options: ['Background', 'Noticeable', 'Hard to ignore', 'Stopping my day'] },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-incision',
    label: 'Stitches or incision',
    group: 'recovery',
    icon: 'shield',
    shows: 'postpartum',
    summaryTemplate: '{look}',
    fields: [
      { id: 'look', label: 'How it looks today', type: 'choice',
        options: ['Better than yesterday', 'The same', 'Worse'], required: true },
      { id: 'signs', label: 'Anything from this list', type: 'multi',
        options: ['Spreading redness', 'Hot to touch', 'Opening', 'Pus or a smell', 'More painful'],
        hint: 'Any of these is a call today, not a wait and see.' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-temp',
    label: 'Your temperature',
    group: 'recovery',
    icon: 'thermometer',
    shows: 'year-one',
    summaryTemplate: '{temp}',
    fields: [
      { id: 'temp', label: 'Temperature', type: 'number', unit: 'F', step: 0.1, required: true,
        hint: 'After a birth, 100.4 or higher is treated as an infection until something else explains '
          + 'it, and it is always worth a call.' },
      { id: 'chills', label: 'Chills or body aches', type: 'toggle' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },

  /* ---------------- PREGNANCY ---------------- */
  {
    id: 'mom-kicks',
    label: 'Kick count',
    group: 'pregnancy',
    icon: 'star',
    shows: 'pregnant',
    hasTimer: true,
    timerLabel: 'Kick count timer',
    summaryTemplate: '{count} in {minutes} minutes',
    fields: [
      { id: 'count', label: 'Movements you counted', type: 'number', required: true },
      { id: 'minutes', label: 'Over how long', type: 'duration',
        hint: 'A common way providers suggest doing this is to lie on your side after a meal and count '
          + 'to 10. Most people reach 10 well inside 2 hours. What matters more than the number is '
          + 'a change from what is normal for your baby, and that is always worth ringing about.' },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-contraction',
    label: 'Contraction',
    group: 'pregnancy',
    icon: 'clock',
    shows: 'pregnant',
    hasTimer: true,
    timerLabel: 'Contraction timer',
    summaryTemplate: 'Lasted {seconds}s',
    fields: [
      { id: 'seconds', label: 'How long it lasted', type: 'number', unit: 'seconds', required: true },
      { id: 'strength', label: 'How strong', type: 'choice',
        options: ['Mild', 'Moderate', 'Strong', 'Could not talk through it'] },
      { id: 'notes', label: 'Notes', type: 'text' },
    ],
  },
  {
    id: 'mom-appointment',
    label: 'Appointment',
    group: 'pregnancy',
    icon: 'calendar',
    shows: 'pregnant',
    summaryTemplate: '{what}',
    fields: [
      { id: 'what', label: 'What they said', type: 'text', required: true },
      { id: 'bp', label: 'Blood pressure they took', type: 'text' },
      { id: 'weight', label: 'Weight they took', type: 'text' },
      { id: 'next', label: 'Next one', type: 'text' },
      { id: 'ask', label: 'To ask next time', type: 'text',
        hint: 'The questions you think of at two in the morning and forget in the room.' },
    ],
  },
];

/* ------------------------------------------------------------------
 * HER OWN CHECK IN
 *
 * The children each get one. She did not have one, which said
 * something the app did not mean to say.
 *
 * Same rule as theirs: every question is about the DAY, not about her.
 * It is not a symptom tracker and it never scores her.
 * ------------------------------------------------------------------ */

export const MOM_CHECKIN = {
  id: 'mom',
  title: 'How today went for you',
  intro: '30 seconds, about the day rather than about you.',
  rows: [
    { id: 'day', label: 'How was today', options: [
      { id: 'good', label: 'Good' },
      { id: 'mixed', label: 'A bit of both' },
      { id: 'hard', label: 'Hard' },
    ] },
    { id: 'self', label: 'Did you get anything that was just yours', options: [
      { id: 'good', label: 'Yes' },
      { id: 'mixed', label: 'A few minutes' },
      { id: 'hard', label: 'None' },
    ] },
    { id: 'help', label: 'Did you have help', options: [
      { id: 'good', label: 'Plenty' },
      { id: 'mixed', label: 'Some' },
      { id: 'hard', label: 'None' },
    ] },
  ],
  note: 'Anything you want to remember about today',
};

/* ------------------------------------------------------------------
 * WHAT SHE SEES
 * ------------------------------------------------------------------ */

/**
 * shape describes where she is:
 *   { monthsSinceBirth, feeding, pregnant, conditions: [] }
 */
export function momLogShows(shows, shape) {
  const s = shape || {};
  const m = s.monthsSinceBirth;
  const cond = Array.isArray(s.conditions) ? s.conditions : [];
  if (shows === 'always') return true;
  if (shows === 'feeding') return !!s.feeding;
  if (shows === 'pregnant') return !!s.pregnant;
  if (shows === 'postpartum') return m != null && m < 3;
  if (shows === 'year-one') return m != null && m < 12;
  if (shows === 'diabetes') {
    return cond.indexOf('diabetes') !== -1 || cond.indexOf('gestational') !== -1;
  }
  return false;
}

export function getMomLogTypes(shape) {
  return MOM_LOG_TYPES.filter((t) => momLogShows(t.shows, shape));
}

export function getMomLogType(id) {
  return MOM_LOG_TYPES.filter((t) => t.id === id)[0] || null;
}

export function getMomLogGroups(shape) {
  const out = [];
  Object.keys(MOM_LOG_GROUPS).forEach((g) => {
    const items = getMomLogTypes(shape).filter((t) => t.group === g);
    if (items.length) out.push({ id: g, label: MOM_LOG_GROUPS[g].label, items: items });
  });
  return out;
}

export const MOM_LOG_IDS = MOM_LOG_TYPES.map((t) => t.id);

export const MOM_LOG_NOTE = 'Yours, and only yours. Nothing here is ever part of a post, a profile '
  + 'anybody else can see, or a child record.';

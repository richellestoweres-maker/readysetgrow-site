/**
 * Ready Set Grow: The seed stage
 * ==================================================================
 * A baby added before they are born, with a due date instead of a
 * birthday, on the same profile they will keep for eighteen years.
 *
 * WHY THE SAME PROFILE AND NOT A SEPARATE PREGNANCY SECTION
 * Because the story is continuous and nearly every app breaks it. A
 * mother spends nine months in a pregnancy app, has the baby, and
 * starts again from nothing somewhere else. Here the record she built
 * before birth, the name they were calling the bump, the scan photos,
 * the memories, all of it is already on the profile the day the child
 * arrives. One id, one row of logs, one story.
 *
 * THE GROWTH METAPHOR, EXTENDED
 * The app already draws a child as a sprout that grows through
 * childhood. Pregnancy is the seed stage, so birth is the moment it
 * breaks the surface rather than the moment the story begins.
 *
 * HOW THE DATE IS HELD
 *   expecting: true, dueDate set, birthday empty.
 * That is deliberate. Every existing screen in the app reads
 * `birthday`, and leaving it empty means none of them try to compute
 * an age from a date in the future. An unborn child gets its own
 * profile and nothing else has to know.
 *
 * On the day they arrive, birthday is filled in and expecting goes
 * false. dueDate is KEPT, because the gap between the two is the
 * child's gestational age at birth, and that is worth knowing for
 * years afterward.
 *
 * ON SYNC, WHICH IS THE THING THAT HAS BITTEN BEFORE
 * Nothing extra is needed here. normalizeChild builds every child on
 * top of newChildRecord, so a field added to that record syncs by
 * itself. The parent record is the one with a hand written key list in
 * flushStore, and nothing in this file lives there.
 *
 * DATING
 * Forty weeks from the last period, which is how a due date is set and
 * why a pregnancy is counted as forty weeks when it is really about
 * thirty eight. The app says that out loud once, because it confuses
 * everybody and nobody explains it.
 */

export const GESTATION_DAYS = 280;

export const EXP_STAGES = [
  {
    id: 'planted', label: 'Planted', from: 4, to: 13,
    blurb: 'The first trimester. Almost nothing is visible and almost everything is happening.',
  },
  {
    id: 'root', label: 'Taking root', from: 14, to: 27,
    blurb: 'The second trimester. Usually the kindest stretch, and the one where it starts to feel real.',
  },
  {
    id: 'sprout', label: 'Ready to sprout', from: 28, to: 42,
    blurb: 'The third trimester. Getting ready, on both sides.',
  },
];

export function expStageForWeek(week) {
  if (typeof week !== 'number') return null;
  for (let i = 0; i < EXP_STAGES.length; i++) {
    const s = EXP_STAGES[i];
    if (week >= s.from && week <= s.to) return s;
  }
  return week < EXP_STAGES[0].from ? EXP_STAGES[0] : EXP_STAGES[EXP_STAGES.length - 1];
}

/* Where this pregnancy is, from the due date and today.

   Returns null rather than guessing when there is no date, because a
   screen that quietly invents a week number is worse than one that
   asks for the date again. */
export function expWhere(dueDate, today) {
  if (!dueDate || !today) return null;
  const due = Date.parse(dueDate + 'T00:00:00');
  const now = Date.parse(today + 'T00:00:00');
  if (!isFinite(due) || !isFinite(now)) return null;

  const daysToDue = Math.round((due - now) / 86400000);
  const daysIn = GESTATION_DAYS - daysToDue;
  const week = Math.floor(daysIn / 7);
  const days = ((daysIn % 7) + 7) % 7;

  return {
    week: week,
    days: days,
    daysIn: daysIn,
    daysToDue: daysToDue,
    overdue: daysToDue < 0,
    /* Before the fourth week there is nothing written and usually
       nothing known, and past forty two the app stops counting rather
       than inventing weeks nobody is in. */
    tooEarly: week < 4,
    tooLate: week > 42,
    stage: expStageForWeek(week),
  };
}

/* The short line that goes under a baby's face on Home, where a born
   child would show their age. */
export function expShortLabel(where) {
  if (!where) return 'Due date not set yet';
  if (where.tooEarly) return 'Very early days';
  if (where.overdue) {
    const d = Math.abs(where.daysToDue);
    return d === 0 ? 'Due today' : d + ' day' + (d === 1 ? '' : 's') + ' past the due date';
  }
  return where.week + ' week' + (where.week === 1 ? '' : 's') + (where.days ? ' and ' + where.days + ' day' + (where.days === 1 ? '' : 's') : '');
}

export function expDueLabel(where) {
  if (!where) return '';
  if (where.overdue) return 'The due date has passed. Most babies come within a couple of weeks either side of it.';
  if (where.daysToDue === 0) return 'Due today.';
  if (where.daysToDue < 14) return where.daysToDue + ' days to the due date.';
  const w = Math.floor(where.daysToDue / 7);
  return 'About ' + w + ' week' + (w === 1 ? '' : 's') + ' to the due date.';
}

/* ==================================================================
   ADDING THEM
   ================================================================== */

export const EXP_ADD_TITLE = 'Are they here yet';

export const EXP_ADD_OPTIONS = [
  { id: 'born', label: 'They are already here', sub: 'You will put in their birthday' },
  { id: 'expecting', label: 'Still expecting', sub: 'You will put in the due date, and it becomes a birthday later' },
];

export const EXP_ADD_NOTE = 'Either way this is the same profile they keep for the next eighteen '
  + 'years. Nothing started before they arrive gets left behind when they do.';

export const EXP_NAME_NOTE = 'A name, or whatever you have been calling them. Peanut is a perfectly '
  + 'good name for now and you can change it at any point.';

export const EXP_DUE_NOTE = 'The date from your provider, or from your last period if that is all '
  + 'you have. It can be changed whenever a scan moves it, which happens often and is normal.';

/* ==================================================================
   THE PROFILE
   ================================================================== */

export const EXP_PROFILE_SUB = 'The seed stage. Same profile, same story, just earlier.';

export const EXP_DATING_NOTE = {
  title: 'Why it says forty weeks when it is really thirty eight',
  body: 'A pregnancy is counted from the first day of your last period, which is roughly two weeks '
    + 'before there was anything to count. So the weeks are dated from about a fortnight before '
    + 'conception, everybody uses the same system, and it is why week four is the week a test tends '
    + 'to go positive rather than the week anything started.',
};

export const EXP_SCAN_NOTE = 'If a scan moved your date, use the new one. A dating scan beats a '
  + 'calculation and always wins.';

export const EXP_NOTHING_YET = {
  title: 'Nothing written for this week yet',
  body: 'The weekly writing runs from week four through week forty two. Before that there is usually '
    + 'very little to say and a great deal of waiting.',
};

export const EXP_OVERDUE = {
  title: 'Past the date',
  body: 'The due date was always an estimate, and only about one baby in twenty five arrives on it. '
    + 'Most come somewhere in the two weeks either side. Your provider will usually start talking '
    + 'about monitoring or induction somewhere past forty one weeks, and that conversation is a '
    + 'normal part of this rather than a sign something is wrong.',
};

/* ==================================================================
   THE DAY THEY ARRIVE
   ==================================================================
   The one button that turns the seed into the sprout. Deliberately
   not automatic on the due date, because babies do not read calendars
   and an app that announced a birth that had not happened would be
   unforgivable.
   ================================================================== */

export const EXP_BORN_BTN = 'Baby is here';

export const EXP_BORN = {
  title: 'They are here',
  body: [
    'Congratulations. Put in the day they were born and this profile becomes their profile.',
    'Everything already on it stays. The name, the photos, the memories, anything you logged. Nothing '
    + 'starts again.',
  ],
  ask: 'The day they were born',
  confirm: 'Yes, they are here',
  cancel: 'Not yet',
  after: 'Their profile now works the way every child profile does, and the app has reshaped itself '
    + 'around a newborn. The due date is kept, because the gap between the two is how early or late '
    + 'they were, and that is worth having on the record.',
};

/* How early or late they turned out to be, kept for years because it
   changes what corrected age means and a parent is asked it a lot. */
export function expBornGap(dueDate, birthday) {
  if (!dueDate || !birthday) return null;
  const due = Date.parse(dueDate + 'T00:00:00');
  const born = Date.parse(birthday + 'T00:00:00');
  if (!isFinite(due) || !isFinite(born)) return null;
  const days = Math.round((born - due) / 86400000);
  const weeks = Math.floor((GESTATION_DAYS + days) / 7);
  const rem = ((GESTATION_DAYS + days) % 7 + 7) % 7;
  return { days: days, gestWeeks: weeks, gestDays: rem, early: days < 0, late: days > 0 };
}

export function expBornGapLabel(gap) {
  if (!gap) return '';
  const at = 'Born at ' + gap.gestWeeks + ' weeks' + (gap.gestDays ? ' and ' + gap.gestDays + ' days' : '');
  if (gap.days === 0) return at + ', on the due date.';
  const d = Math.abs(gap.days);
  const which = gap.early ? 'before' : 'after';
  if (d < 14) return at + ', ' + d + ' day' + (d === 1 ? '' : 's') + ' ' + which + ' the due date.';
  const w = Math.round(d / 7);
  return at + ', about ' + w + ' week' + (w === 1 ? '' : 's') + ' ' + which + ' the due date.';
}

export const EXP_PRETERM_NOTE = 'Born before thirty seven weeks. The app can follow corrected age '
  + 'as well as actual age wherever that matters, and the prematurity lens on their profile turns '
  + 'that on.';

/* ==================================================================
   WHAT ELSE IS ON THE PROFILE
   ================================================================== */

export const EXP_SECTIONS = {
  week: 'This week',
  prep: 'Getting ready',
  ask: 'Worth asking at the next appointment',
  care: 'Looking after yourself',
};

/* Appointment questions, by stage rather than by week, because
   appointments are not weekly and a list that changed every seven days
   would never be the list she has in her hand in the room. */
export const EXP_ASK = [
  {
    stage: 'planted',
    title: 'First trimester appointments',
    items: [
      'What is my due date by your dating, and did the scan move it.',
      'Which screening tests are offered, when, and what does each one actually tell me. All of them '
      + 'are yours to accept or decline.',
      'Is there anything in my history, or my family history, that changes how you want to watch this.',
      'What should I keep taking, what should I stop, and is my prenatal vitamin the right one.',
      'What counts as an emergency, and who do I call out of hours.',
    ],
  },
  {
    stage: 'root',
    title: 'Second trimester appointments',
    items: [
      'What did the anatomy scan show, and is anything being followed up.',
      'Where is my blood pressure sitting, and what would make you worried about it.',
      'When is the glucose test and what happens if it is high.',
      'Am I anemic, and should I be taking iron.',
      'When should I start feeling regular movement, and what do I do if it changes.',
    ],
  },
  {
    stage: 'sprout',
    title: 'Third trimester appointments',
    items: [
      'Which way is the baby lying, and when does that start to matter.',
      'What is your view on how I want to give birth, and what would change it.',
      'When do you want me to come in, and when should I not wait.',
      'What happens if I go past my date, and at what point do we talk about induction.',
      'What is the plan for the group B strep test.',
      'Who will actually be there when I give birth.',
    ],
  },
];

export function expAskFor(stageId) {
  return EXP_ASK.filter((a) => a.stage === stageId)[0] || null;
}

export const EXP_ASK_NOTE = 'Appointments go fast and everybody forgets the question they came in '
  + 'with. Screenshot this, or read it off the phone in the room. Nobody minds.';

export const EXP_CHOICE_NOTE = 'Every test and every screening on this list is offered to you, not '
  + 'done to you. Accepting all of them, some of them or none of them is your decision, and a good '
  + 'provider will explain any of them without making you feel awkward for asking.';

export const EXP_DISCLAIMER = 'Educational information, not medical advice, and not a substitute '
  + 'for the person looking after you. Every pregnancy is different and yours is the one that counts.';

export const EXP_SOURCES = [
  { org: 'ACOG', label: 'How pregnancy is dated, and what each trimester involves',
    url: 'https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy' },
  { org: 'CDC', label: 'Urgent maternal warning signs',
    url: 'https://www.cdc.gov/hearher/maternal-warning-signs/index.html' },
  { org: 'NHS', label: 'Week by week, and what is happening when',
    url: 'https://www.nhs.uk/pregnancy/week-by-week/' },
  { org: 'MotherToBaby', label: 'Whether a particular medicine or exposure is a problem',
    url: 'https://mothertobaby.org/' },
];

export default EXP_STAGES;

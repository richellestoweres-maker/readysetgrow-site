/**
 * Ready Set Grow: Cycle And Dates
 * ------------------------------------------------------------------
 * Two small things a parent tells the app about herself, and what the
 * app is allowed to do with them.
 *
 *   1. The first day of her last period. From that one date comes the
 *      day of her cycle, a rough estimate of when the next one is due,
 *      the window where conception is most likely, and, if she is
 *      pregnant, how far along she is and the date her provider would
 *      call her due date.
 *
 *   2. Her own birthday, so the app can say happy birthday to her the
 *      same way it does for the children. A parenting app that
 *      remembers everybody's birthday except hers is telling her
 *      something, and it is not a kind thing.
 *
 * WHAT THIS FILE IS NOT
 * None of this is a diagnosis, a pregnancy test, or birth control.
 * Cycles move. Twenty eight days is an average, not a promise, and a
 * perfectly healthy cycle can run anywhere from twenty one to thirty
 * five days. Every number below is an estimate from one date, said
 * plainly as an estimate, and every screen that shows one says so.
 *
 * Naegele's rule, the due date math here, is what an obstetric
 * provider starts with too: last period plus 280 days. An early
 * ultrasound beats it and always wins, which the copy says out loud.
 */

/** A plain YYYY-MM-DD string into { y, m, d }, or null. */
function cycleParts(value) {
  if (!value) return null;
  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) return null;
    return { y: value.getFullYear(), m: value.getMonth() + 1, d: value.getDate() };
  }
  const s = String(value).trim();
  const m = s.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  if (!y || mo < 1 || mo > 12 || d < 1 || d > 31) return null;
  return { y: y, m: mo, d: d };
}

/** Whole days since the epoch, in UTC, so nothing shifts across a time change. */
function cycleDayNumber(p) {
  return Math.floor(Date.UTC(p.y, p.m - 1, p.d) / 86400000);
}

function cycleToday(ref) {
  const p = cycleParts(ref);
  if (p) return p;
  const now = new Date();
  return { y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() };
}

/** A day number back into YYYY-MM-DD. */
export function cycleDateString(dayNum) {
  const dt = new Date(dayNum * 86400000);
  const mm = String(dt.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(dt.getUTCDate()).padStart(2, '0');
  return dt.getUTCFullYear() + '-' + mm + '-' + dd;
}

/** The way a person says a date out loud. */
export function cycleDateLabel(value) {
  const p = cycleParts(value);
  if (!p) return '';
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return months[p.m - 1] + ' ' + p.d;
}

export function cycleDateLabelWithYear(value) {
  const p = cycleParts(value);
  if (!p) return '';
  return cycleDateLabel(value) + ', ' + p.y;
}

/** An average cycle, and the outside edges of a normal one. */
export const CYCLE_AVERAGE_LENGTH = 28;
export const CYCLE_NORMAL_RANGE = { min: 21, max: 35 };
export const CYCLE_LUTEAL_DAYS = 14;
export const PREGNANCY_DAYS = 280;

/**
 * Everything derivable from one date. Returns null when there is no
 * usable date, so a screen can simply not draw the card.
 *
 *   dayOfCycle      day 1 is the first day of bleeding
 *   nextPeriod      estimated first day of the next one
 *   daysToNext      negative once it is late
 *   fertileStart    the six day window that ends on estimated ovulation
 *   ovulation       estimated, and only ever estimated
 *   dueDate         if she is pregnant, what Naegele's rule gives
 *   weeksPregnant   how a provider would count it, weeks plus days
 */
export function cycleInfo(lastPeriod, ref, cycleLength) {
  const start = cycleParts(lastPeriod);
  if (!start) return null;
  const today = cycleToday(ref);
  const startNum = cycleDayNumber(start);
  const todayNum = cycleDayNumber(today);
  const elapsed = todayNum - startNum;
  if (elapsed < 0) return null;

  const len = Math.max(CYCLE_NORMAL_RANGE.min,
    Math.min(CYCLE_NORMAL_RANGE.max, Number(cycleLength) || CYCLE_AVERAGE_LENGTH));

  const ovulationNum = startNum + (len - CYCLE_LUTEAL_DAYS);
  const nextNum = startNum + len;
  const dueNum = startNum + PREGNANCY_DAYS;

  const weeks = Math.floor(elapsed / 7);
  const days = elapsed % 7;

  return {
    lastPeriod: cycleDateString(startNum),
    cycleLength: len,
    dayOfCycle: elapsed + 1,
    daysSince: elapsed,
    nextPeriod: cycleDateString(nextNum),
    daysToNext: nextNum - todayNum,
    isLate: todayNum > nextNum,
    daysLate: Math.max(0, todayNum - nextNum),
    ovulation: cycleDateString(ovulationNum),
    fertileStart: cycleDateString(ovulationNum - 5),
    fertileEnd: cycleDateString(ovulationNum),
    inFertileWindow: todayNum >= ovulationNum - 5 && todayNum <= ovulationNum,
    dueDate: cycleDateString(dueNum),
    daysToDue: dueNum - todayNum,
    weeksPregnant: weeks,
    daysIntoWeek: days,
    pregnancyLabel: weeks + ' weeks' + (days ? ' and ' + days + ' day' + (days === 1 ? '' : 's') : ''),
  };
}

/** One sentence for wherever the cycle card is small. */
export function cycleShortLine(info) {
  if (!info) return '';
  if (info.isLate) {
    return 'Day ' + info.dayOfCycle + ', which is ' + info.daysLate + ' day'
      + (info.daysLate === 1 ? '' : 's') + ' past the estimate';
  }
  if (info.daysToNext === 0) return 'Day ' + info.dayOfCycle + ', the estimate lands today';
  if (info.inFertileWindow) return 'Day ' + info.dayOfCycle + ', inside the estimated fertile window';
  return 'Day ' + info.dayOfCycle + ', next one estimated ' + cycleDateLabel(info.nextPeriod);
}

/** The standing caveat. Shown wherever a number from here is shown. */
export const CYCLE_DISCLAIMER = 'These are estimates from one date, not a test and not birth '
  + 'control. Cycles move with stress, illness, travel, feeding a baby and plenty else. A late '
  + 'period, a cycle that keeps changing length, bleeding between periods or pain that stops your '
  + 'day are all worth a call to your own provider.';

export const CYCLE_DUE_DATE_NOTE = 'A due date from a last period is where providers start, not '
  + 'where they finish. A dating ultrasound in the first trimester is more accurate and it wins '
  + 'over this number every time.';

export const CYCLE_NOTES = [
  'Day one is the first day of real bleeding, not spotting the day before.',
  'Twenty eight days is an average. Anywhere from twenty one to thirty five is ordinary.',
  'Ovulation is estimated backward from the next period, not forward from this one, which is why '
    + 'a cycle that runs long moves the window later.',
  'The fertile window is about six days: the five before ovulation and the day itself. Sperm last '
    + 'longer than the egg does.',
  'Cycles take a while to settle after a baby, after stopping hormonal birth control, and while '
    + 'breastfeeding. Irregular for a few months in those seasons is expected.',
];

export const CYCLE_SOURCES = [
  { org: 'ACOG', label: 'Your first period and tracking your cycle',
    url: 'https://www.acog.org/womens-health/faqs/your-first-period' },
  { org: 'ACOG', label: 'How your fetus grows during pregnancy',
    url: 'https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy' },
  { org: 'Office on Women’s Health', label: 'Your menstrual cycle',
    url: 'https://womenshealth.gov/menstrual-cycle/your-menstrual-cycle' },
];

/* ------------------------------------------------------------------
 * BIRTHDAYS
 *
 * The greeting is deliberately warm and deliberately short. It appears
 * once, on the day, and it is dismissable, because a five in the
 * morning feed is not the moment for a full screen of confetti you
 * cannot get past.
 * ------------------------------------------------------------------ */

/** The card for the parent reads differently from the card for a child. */
export const BIRTHDAY_PARENT_LINES = [
  'Somebody has to say it, so it may as well be the app that watches you do all of this.',
  'You have kept a whole person alive for another year. That counts, even on the days it did not feel like it.',
  'The house runs on you. Today it can run a little slower.',
  'Whatever else today holds, this part is yours.',
];

export const BIRTHDAY_CHILD_LINES = [
  'A whole year of them.',
  'Look how far they have come.',
  'Another year of being their person.',
  'They got here on your watch.',
];

/** A number a child will actually care about. */
export function birthdayOrdinal(n) {
  const num = Number(n);
  if (!Number.isFinite(num) || num < 0) return '';
  const rem100 = num % 100;
  if (rem100 >= 11 && rem100 <= 13) return num + 'th';
  const rem10 = num % 10;
  if (rem10 === 1) return num + 'st';
  if (rem10 === 2) return num + 'nd';
  if (rem10 === 3) return num + 'rd';
  return num + 'th';
}

/** Whole years old today. Null when the date is missing or in the future. */
export function yearsOldToday(birthday, ref) {
  const b = cycleParts(birthday);
  if (!b) return null;
  const t = cycleToday(ref);
  let years = t.y - b.y;
  if (t.m < b.m || (t.m === b.m && t.d < b.d)) years -= 1;
  return years < 0 ? null : years;
}

/** Which year of the greeting this is, so it shows once and not every open. */
export function birthdaySeenKey(who, ref) {
  const t = cycleToday(ref);
  return String(who) + ':' + t.y;
}

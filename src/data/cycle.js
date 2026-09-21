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

/* ------------------------------------------------------------------
 * A HISTORY, NOT ONE DATE
 *
 * One date gives an estimate. A list of them gives her something
 * better: how long her own cycles actually run, whether they hold
 * steady, and a record she can read back to a provider instead of
 * trying to remember.
 *
 * Stored as the first day of each period, newest first. Nothing here
 * decides anything. It counts the gaps between the dates she entered
 * and says what it sees.
 *
 * WHERE THE NUMBERS COME FROM
 * A typical adult cycle runs 21 to 35 days, and ACOG treats a
 * variation of more than 7 to 9 days between a person's shortest and
 * longest cycle as irregular and worth raising. Those are the two
 * thresholds used below, and they are described to her as "worth
 * mentioning", never as a finding.
 * ------------------------------------------------------------------ */

/** How many recent cycles the average is taken over. */
export const CYCLE_HISTORY_WINDOW = 6;
/** Shortest to longest spread that still reads as steady. */
export const CYCLE_STEADY_SPREAD = 7;

/** Clean, de-duplicate and sort a list of period start dates, newest first. */
export function normalizePeriods(list) {
  const seen = {};
  const out = [];
  (Array.isArray(list) ? list : []).forEach((v) => {
    const p = cycleParts(v);
    if (!p) return;
    const s = cycleDateString(cycleDayNumber(p));
    if (seen[s]) return;
    seen[s] = 1;
    out.push(s);
  });
  out.sort();
  out.reverse();
  return out;
}

/** The gap in days between each period and the one before it, newest first. */
export function periodGaps(list) {
  const p = normalizePeriods(list);
  const out = [];
  for (let i = 0; i < p.length - 1; i++) {
    out.push(cycleDayNumber(cycleParts(p[i])) - cycleDayNumber(cycleParts(p[i + 1])));
  }
  return out;
}

/**
 * What her own history says. Everything is null until there are at
 * least two dates, because one date is not a cycle.
 *
 *   cycles     how many complete cycles she has recorded
 *   average    her own average, rounded, over the recent window
 *   shortest / longest / spread
 *   steady     the spread is inside the range that reads as regular
 *   outside    any recorded cycle fell outside 21 to 35 days
 *   note       one plain sentence, or empty when there is nothing to say
 */
export function cycleStats(list) {
  const all = periodGaps(list);
  const gaps = all.slice(0, CYCLE_HISTORY_WINDOW);
  if (!gaps.length) {
    return { cycles: 0, average: null, shortest: null, longest: null,
      spread: null, steady: null, outside: false, note: '' };
  }
  const sum = gaps.reduce((a, b) => a + b, 0);
  const average = Math.round(sum / gaps.length);
  const shortest = Math.min.apply(null, gaps);
  const longest = Math.max.apply(null, gaps);
  const spread = longest - shortest;
  const steady = spread <= CYCLE_STEADY_SPREAD;
  const outside = gaps.some((g) => g < CYCLE_NORMAL_RANGE.min || g > CYCLE_NORMAL_RANGE.max);

  let note = '';
  if (gaps.length === 1) {
    note = 'One cycle recorded, ' + longest + ' days. A couple more and the app can tell you '
      + 'whether that is your usual.';
  } else if (outside) {
    note = 'Some of these fall outside the usual 21 to 35 days. That happens for all sorts of '
      + 'ordinary reasons, and it is also the kind of thing worth mentioning at your next visit.';
  } else if (steady) {
    note = 'Steady. Your cycles have stayed within ' + spread + ' day' + (spread === 1 ? '' : 's')
      + ' of each other.';
  } else {
    note = 'These vary by ' + spread + ' days between your shortest and longest. More than about a '
      + 'week of variation is worth mentioning at your next visit, and it is common enough that '
      + 'nobody will be surprised by it.';
  }

  return { cycles: gaps.length, average: average, shortest: shortest, longest: longest,
    spread: spread, steady: steady, outside: outside, note: note };
}

/** The headline for the widget: "Usually 28 to 30 days" and so on. */
export function cycleLengthLine(stats) {
  if (!stats || !stats.cycles) return '';
  if (stats.shortest === stats.longest) return 'Your cycle has been ' + stats.longest + ' days';
  return 'Usually ' + stats.shortest + ' to ' + stats.longest + ' days, average ' + stats.average;
}

/** The length to predict with: her own average once there is one. */
export function predictLength(list, fallback) {
  const st = cycleStats(list);
  if (st.cycles >= 2) return st.average;
  if (st.cycles === 1) return st.longest;
  const n = Number(fallback);
  return n || CYCLE_AVERAGE_LENGTH;
}

/** How many days each recorded period lasted, where the next one is known. */
export function periodHistoryRows(list) {
  const p = normalizePeriods(list);
  return p.map((date, i) => {
    const prev = p[i + 1];
    const gap = prev
      ? cycleDayNumber(cycleParts(date)) - cycleDayNumber(cycleParts(prev))
      : null;
    return { date: date, gap: gap };
  });
}

/** What Willow is told, so she can answer a question about it. */
export function cycleForWillow(list, info, stats) {
  const bits = [];
  if (info) {
    bits.push('Day ' + info.dayOfCycle + ' of her cycle.');
    bits.push('Last period started ' + cycleDateLabelWithYear(info.lastPeriod) + '.');
    if (info.isLate) bits.push('The estimate for the next one passed ' + info.daysLate + ' days ago.');
    else bits.push('Next one estimated ' + cycleDateLabel(info.nextPeriod) + '.');
  }
  if (stats && stats.cycles) {
    bits.push('She has recorded ' + stats.cycles + ' complete cycle'
      + (stats.cycles === 1 ? '' : 's') + ', running '
      + stats.shortest + ' to ' + stats.longest + ' days, average ' + stats.average + '.');
    if (stats.outside) bits.push('At least one fell outside 21 to 35 days.');
    else if (!stats.steady) bits.push('They vary by ' + stats.spread + ' days.');
    else bits.push('They have been steady.');
  } else {
    bits.push('She has not recorded enough periods yet for an average of her own.');
  }
  return bits.join(' ');
}

export const CYCLE_WILLOW_BRIEF = 'If she asks about her cycle, use the numbers above rather than '
  + 'textbook averages, and say they are from what she logged. Never diagnose, never tell her '
  + 'whether she is pregnant, and never present an estimate as a fact. Bleeding between periods, '
  + 'pain that stops her day, a cycle shorter than 21 days or longer than 35, or 3 months with '
  + 'no period at all are all worth her provider, and say so plainly without alarming her.';

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
  '28 days is an average. Anywhere from 21 to 35 is ordinary.',
  'Ovulation is estimated backward from the next period, not forward from this one, which is why '
    + 'a cycle that runs long moves the window later.',
  'The fertile window is about 6 days: the 5 before ovulation and the day itself. Sperm last '
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

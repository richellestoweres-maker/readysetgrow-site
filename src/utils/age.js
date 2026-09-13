/**
 * Ready Set Grow: Age Engine
 * ------------------------------------------------------------------
 * This is the spine of the whole product. Almost every personalized
 * thing the app does starts by asking "how old is this child, really".
 *
 * A child who is 4 years and 3 months should never just be treated as
 * "age 4". A 5 week old and a 3 month old are both infants but they
 * need completely different content. This file makes that possible.
 *
 * WHAT IT DOES
 *   1. Turns a birthday into age in days, weeks, months and years
 *   2. Formats that age the way a parent would actually say it
 *   3. Decides which life stage the child is in
 *   4. Finds the nearest CDC milestone checkpoint
 *   5. Handles pregnancy, where there is a due date but no birthday yet
 *
 * WHY NO DAYJS
 * Your project already uses dayjs and you can keep using it elsewhere.
 * This file deliberately uses plain JavaScript dates instead, for three
 * reasons: it is the file everything else depends on so it should have
 * no dependencies of its own, date math is normalized to UTC internally
 * so a child's age never shifts by a day across daylight saving time,
 * and it can be tested outside the app.
 *
 * Every function is defensive. Pass it a missing or malformed date and
 * it returns null or a safe default instead of crashing a screen.
 */

/* ------------------------------------------------------------------
 * INTERNAL DATE HELPERS
 *
 * Everything is reduced to a "day number", the count of whole days
 * since the epoch in UTC. Comparing day numbers means time of day and
 * daylight saving can never introduce an off by one error in a child's
 * age, which is the classic bug in this kind of code.
 * ------------------------------------------------------------------ */

/**
 * Turns a Date, a timestamp, or a string into { y, m, d } or null.
 * Accepts 'YYYY-MM-DD' and 'YYYY/MM/DD' without timezone surprises,
 * which is important because a plain 'YYYY-MM-DD' string is parsed by
 * JavaScript as UTC midnight and can render as the previous day in the
 * Americas. We parse those strings by hand to avoid that.
 */
function toParts(value) {
  if (value === null || value === undefined || value === '') return null;

  if (value instanceof Date) {
    if (Number.isNaN(value.getTime())) return null;
    return { y: value.getFullYear(), m: value.getMonth() + 1, d: value.getDate() };
  }

  if (typeof value === 'number') {
    const dt = new Date(value);
    if (Number.isNaN(dt.getTime())) return null;
    return { y: dt.getFullYear(), m: dt.getMonth() + 1, d: dt.getDate() };
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    // Plain calendar date, the format a date picker usually produces
    const plain = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/.exec(trimmed);
    if (plain) {
      const y = Number(plain[1]);
      const m = Number(plain[2]);
      const d = Number(plain[3]);
      if (m < 1 || m > 12 || d < 1 || d > 31) return null;
      return { y, m, d };
    }
    // Anything else, let JavaScript try
    const dt = new Date(trimmed);
    if (Number.isNaN(dt.getTime())) return null;
    return { y: dt.getFullYear(), m: dt.getMonth() + 1, d: dt.getDate() };
  }

  // A dayjs object, or anything else exposing toDate()
  if (typeof value === 'object' && typeof value.toDate === 'function') {
    return toParts(value.toDate());
  }

  return null;
}

/** Whole days since the epoch, in UTC. */
function dayNumber(parts) {
  return Math.floor(Date.UTC(parts.y, parts.m - 1, parts.d) / 86400000);
}

/** Today's calendar date in the device's local timezone. */
function todayParts() {
  const now = new Date();
  return { y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() };
}

/** Days in a given month, handling leap years. */
function daysInMonth(y, m) {
  return new Date(Date.UTC(y, m, 0)).getUTCDate();
}

/**
 * Adds months to a date, clamping the day if the target month is short.
 * January 31 plus one month is February 28, not March 3.
 */
function addMonths(parts, count) {
  const total = parts.y * 12 + (parts.m - 1) + count;
  const y = Math.floor(total / 12);
  const m = (total % 12) + 1;
  const d = Math.min(parts.d, daysInMonth(y, m));
  return { y, m, d };
}

/**
 * Whole months between two dates, not counting a partial final month.
 *
 * This uses the same month end clamping as addMonths, which matters for
 * two real cases. A baby born January 31 is one month old on February 28,
 * because February has no 31st. A baby born February 29 turns two on
 * February 28 in a non leap year, so the month count and the birthday
 * celebration agree instead of contradicting each other.
 */
function monthsBetween(from, to) {
  let months = (to.y - from.y) * 12 + (to.m - from.m);
  if (months > 0 && dayNumber(addMonths(from, months)) > dayNumber(to)) {
    months -= 1;
  }
  return months < 0 ? 0 : months;
}

/** Is date a strictly after date b. */
function isAfter(a, b) {
  return dayNumber(a) > dayNumber(b);
}

/* ------------------------------------------------------------------
 * CORE AGE CALCULATION
 * ------------------------------------------------------------------ */

/**
 * The one function everything else is built on.
 *
 * Returns an object describing the child's age from every angle we
 * might need, or null if the birthday is missing or invalid.
 *
 * {
 *   totalDays: 1553,
 *   totalWeeks: 221,
 *   totalMonths: 51,
 *   years: 4,
 *   months: 3,   // whole months past the last birthday
 *   days: 0,     // whole days past the last month mark
 *   isUnborn: false
 * }
 */
export function getAge(birthday, referenceDate) {
  const birth = toParts(birthday);
  if (!birth) return null;

  const today = toParts(referenceDate) || todayParts();

  // A birthday in the future means we are still expecting this child.
  const isUnborn = isAfter(birth, today);

  const totalDays = Math.abs(dayNumber(today) - dayNumber(birth));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = Math.abs(monthsBetween(isUnborn ? today : birth, isUnborn ? birth : today));

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const afterWholeMonths = addMonths(isUnborn ? today : birth, totalMonths);
  const days = Math.abs(
    (isUnborn ? dayNumber(birth) : dayNumber(today)) - dayNumber(afterWholeMonths)
  );

  return {
    totalDays,
    totalWeeks,
    totalMonths,
    years,
    months,
    days,
    isUnborn,
    birthday: birth,
  };
}

/** Convenience wrappers. Each returns a number, or null if no birthday. */
export function getAgeInDays(birthday, ref) {
  const a = getAge(birthday, ref);
  return a ? a.totalDays : null;
}
export function getAgeInWeeks(birthday, ref) {
  const a = getAge(birthday, ref);
  return a ? a.totalWeeks : null;
}
export function getAgeInMonths(birthday, ref) {
  const a = getAge(birthday, ref);
  return a ? a.totalMonths : null;
}
export function getAgeInYears(birthday, ref) {
  const a = getAge(birthday, ref);
  return a ? a.years : null;
}

/* ------------------------------------------------------------------
 * AGE LABELS
 *
 * How a parent says their child's age changes completely with age.
 * Nobody says "my child is 0 years and 2 months". They say "8 weeks".
 * Nobody says "my child is 168 months". They say "he is 14".
 * ------------------------------------------------------------------ */

/**
 * The full, warm label. This is what goes under the child's name.
 *
 *   3 days old
 *   6 weeks old
 *   4 months old
 *   14 months old
 *   2 years, 5 months
 *   4 years, 3 months
 *   14 years old
 */
export function formatAge(birthday, ref) {
  const a = getAge(birthday, ref);
  if (!a) return '';

  if (a.isUnborn) return 'On the way';

  // First two weeks, parents count days
  if (a.totalDays < 14) {
    return a.totalDays === 1 ? '1 day old' : `${a.totalDays} days old`;
  }
  // Up to about 3 months, parents count weeks
  if (a.totalDays < 92) {
    return a.totalWeeks === 1 ? '1 week old' : `${a.totalWeeks} weeks old`;
  }
  // Up to 2 years, parents count months
  if (a.totalMonths < 24) {
    return a.totalMonths === 1 ? '1 month old' : `${a.totalMonths} months old`;
  }
  // From 2 to 6, years plus months is how parents talk
  if (a.years < 6) {
    const y = a.years === 1 ? '1 year' : `${a.years} years`;
    if (a.months === 0) return `${y} old`;
    const m = a.months === 1 ? '1 month' : `${a.months} months`;
    return `${y}, ${m}`;
  }
  // From 6 up, just the year
  return a.years === 1 ? '1 year old' : `${a.years} years old`;
}

/**
 * Short label for tight spaces such as a profile chip or a switcher row.
 *
 *   6w   4mo   14mo   4y 3m   14y
 */
export function formatAgeShort(birthday, ref) {
  const a = getAge(birthday, ref);
  if (!a) return '';
  if (a.isUnborn) return 'Due soon';
  if (a.totalDays < 14) return `${a.totalDays}d`;
  if (a.totalDays < 92) return `${a.totalWeeks}w`;
  if (a.totalMonths < 24) return `${a.totalMonths}mo`;
  if (a.years < 6) return a.months === 0 ? `${a.years}y` : `${a.years}y ${a.months}m`;
  return `${a.years}y`;
}

/**
 * Turns a due date into a pregnancy label.
 * Pregnancy is conventionally counted as 40 weeks, so weeks along is
 * 40 minus the whole weeks remaining until the due date.
 */
export function formatPregnancy(dueDate, ref) {
  const due = toParts(dueDate);
  if (!due) return '';
  const today = toParts(ref) || todayParts();
  const daysUntil = dayNumber(due) - dayNumber(today);
  if (daysUntil <= 0) return 'Any day now';
  const weeksAlong = 40 - Math.ceil(daysUntil / 7);
  if (weeksAlong < 1) return 'Early days';
  return `${weeksAlong} weeks along`;
}

/** Which trimester a due date implies. Returns 1, 2, 3 or null. */
export function getTrimester(dueDate, ref) {
  const due = toParts(dueDate);
  if (!due) return null;
  const today = toParts(ref) || todayParts();
  const daysUntil = dayNumber(due) - dayNumber(today);
  const weeksAlong = 40 - Math.ceil(daysUntil / 7);
  if (weeksAlong < 1) return 1;
  if (weeksAlong <= 13) return 1;
  if (weeksAlong <= 27) return 2;
  return 3;
}

/* ------------------------------------------------------------------
 * BIRTHDAYS
 * ------------------------------------------------------------------ */

/** Days until the next birthday. Returns 0 on the birthday itself. */
export function daysUntilBirthday(birthday, ref) {
  const birth = toParts(birthday);
  if (!birth) return null;
  const today = toParts(ref) || todayParts();

  // Guard against February 29 on a non leap year
  const thisYearDay = Math.min(birth.d, daysInMonth(today.y, birth.m));
  let next = { y: today.y, m: birth.m, d: thisYearDay };

  if (dayNumber(next) < dayNumber(today)) {
    const nextYearDay = Math.min(birth.d, daysInMonth(today.y + 1, birth.m));
    next = { y: today.y + 1, m: birth.m, d: nextYearDay };
  }
  return dayNumber(next) - dayNumber(today);
}

/** True if today is the child's birthday. Worth celebrating in the UI. */
export function isBirthdayToday(birthday, ref) {
  return daysUntilBirthday(birthday, ref) === 0;
}

/* ------------------------------------------------------------------
 * CDC MILESTONE CHECKPOINTS
 *
 * The CDC groups milestones at ages that line up with well child
 * visits. The 2022 revision added 15 and 30 months so that every
 * recommended visit from 2 months through 5 years has a checkpoint.
 * ------------------------------------------------------------------ */

export const CDC_CHECKPOINTS = [2, 4, 6, 9, 12, 15, 18, 24, 30, 36, 48, 60];

/**
 * The checkpoint a child has most recently reached.
 * A 20 month old returns 18, because that is the last one passed.
 * Returns null for a child under 2 months.
 */
export function getCurrentCheckpoint(birthday, ref) {
  const a = getAge(birthday, ref);
  if (!a || a.isUnborn) return null;
  // CDC milestone tracking runs to 5 years. Past 6 there is no current
  // checkpoint, so screens should show school age content instead of
  // still offering a preschooler's milestone list.
  if (a.totalMonths >= 72) return null;
  let current = null;
  for (const cp of CDC_CHECKPOINTS) {
    if (a.totalMonths >= cp) current = cp;
  }
  return current;
}

/** The next checkpoint coming up, or null if the child is past 5 years. */
export function getNextCheckpoint(birthday, ref) {
  const a = getAge(birthday, ref);
  if (!a || a.isUnborn) return null;
  return CDC_CHECKPOINTS.find((cp) => cp > a.totalMonths) || null;
}

/* ------------------------------------------------------------------
 * STAGE DETECTION
 *
 * Stage ids match src/data/stages.js. Boundaries are in months,
 * inclusive of the lower bound and exclusive of the upper.
 * ------------------------------------------------------------------ */

export const STAGE_BOUNDS = [
  { id: 'newborn', minMonths: 0, maxMonths: 3 },
  { id: 'infant', minMonths: 3, maxMonths: 12 },
  { id: 'toddler', minMonths: 12, maxMonths: 36 },
  { id: 'preschool', minMonths: 36, maxMonths: 60 },
  { id: 'earlyElementary', minMonths: 60, maxMonths: 96 },
  { id: 'upperElementary', minMonths: 96, maxMonths: 132 },
  { id: 'middleSchool', minMonths: 132, maxMonths: 168 },
  { id: 'teen', minMonths: 168, maxMonths: 216 },
  { id: 'lifeLaunch', minMonths: 216, maxMonths: Infinity },
];

/**
 * Returns the stage id for a child, for example 'preschool'.
 * Returns 'pregnancy' if the birthday is still in the future.
 * Returns null only if we have no usable date at all.
 */
export function getStageId(birthday, ref) {
  const a = getAge(birthday, ref);
  if (!a) return null;
  if (a.isUnborn) return 'pregnancy';
  const match = STAGE_BOUNDS.find(
    (s) => a.totalMonths >= s.minMonths && a.totalMonths < s.maxMonths
  );
  return match ? match.id : 'lifeLaunch';
}

/**
 * How far through the current stage the child is, from 0 to 1.
 * Useful for the growth visual, since the sprout should grow gradually
 * within a stage rather than snapping between stages.
 */
export function getStageProgress(birthday, ref) {
  const a = getAge(birthday, ref);
  if (!a || a.isUnborn) return 0;
  const bounds = STAGE_BOUNDS.find(
    (s) => a.totalMonths >= s.minMonths && a.totalMonths < s.maxMonths
  );
  if (!bounds || bounds.maxMonths === Infinity) return 1;
  const span = bounds.maxMonths - bounds.minMonths;
  const into = a.totalMonths - bounds.minMonths;
  return Math.max(0, Math.min(1, into / span));
}

/* ------------------------------------------------------------------
 * CONTENT MATCHING
 *
 * Content in src/data is tagged with a month range. These helpers let a
 * screen ask "what content applies to this child right now" without
 * every screen reinventing the comparison.
 * ------------------------------------------------------------------ */

/**
 * True if the child's age in months falls inside the given range.
 * minMonths is inclusive, maxMonths is exclusive.
 */
export function isInAgeRange(birthday, minMonths, maxMonths, ref) {
  const months = getAgeInMonths(birthday, ref);
  if (months === null) return false;
  const min = typeof minMonths === 'number' ? minMonths : 0;
  const max = typeof maxMonths === 'number' ? maxMonths : Infinity;
  return months >= min && months < max;
}

/**
 * Filters any array of content objects down to what fits this child.
 * Each item is expected to have minMonths and maxMonths properties.
 * Items missing both are treated as applying to every age.
 */
export function filterByAge(items, birthday, ref) {
  if (!Array.isArray(items)) return [];
  const months = getAgeInMonths(birthday, ref);
  if (months === null) return [];
  return items.filter((item) => {
    if (!item) return false;
    const min = typeof item.minMonths === 'number' ? item.minMonths : 0;
    const max = typeof item.maxMonths === 'number' ? item.maxMonths : Infinity;
    return months >= min && months < max;
  });
}

/**
 * Picks the single best matching item for a child, preferring the
 * narrowest age window. If two entries both apply, the more specific
 * one wins, because tighter windows mean more relevant content.
 */
export function bestMatchByAge(items, birthday, ref) {
  const matches = filterByAge(items, birthday, ref);
  if (matches.length === 0) return null;
  return matches.reduce((best, item) => {
    const width =
      (typeof item.maxMonths === 'number' ? item.maxMonths : Infinity) -
      (typeof item.minMonths === 'number' ? item.minMonths : 0);
    const bestWidth =
      (typeof best.maxMonths === 'number' ? best.maxMonths : Infinity) -
      (typeof best.minMonths === 'number' ? best.minMonths : 0);
    return width < bestWidth ? item : best;
  });
}

/* ------------------------------------------------------------------
 * ONE CALL SUMMARY
 *
 * Most screens want everything at once. This gives it to them in a
 * single object so a screen never has to call five functions in a row.
 * ------------------------------------------------------------------ */

/**
 * Everything a screen needs to know about a child's age.
 * Pass the whole child object. Returns a safe empty summary if the
 * child has no usable birthday, so screens never crash on bad data.
 */
export function getAgeSummary(child, ref) {
  const empty = {
    isReady: false,
    age: null,
    label: '',
    shortLabel: '',
    stageId: null,
    stageProgress: 0,
    checkpoint: null,
    nextCheckpoint: null,
    isBirthday: false,
    daysToBirthday: null,
    trimester: null,
  };

  if (!child) return empty;

  const birthday = child.birthday || child.birthDate || child.dob || null;

  // A record with only a due date is a pregnancy record.
  if (!birthday && child.dueDate) {
    return {
      ...empty,
      isReady: true,
      label: formatPregnancy(child.dueDate, ref),
      shortLabel: 'Due soon',
      stageId: 'pregnancy',
      trimester: getTrimester(child.dueDate, ref),
    };
  }

  const age = getAge(birthday, ref);
  if (!age) return empty;

  return {
    isReady: true,
    age,
    label: formatAge(birthday, ref),
    shortLabel: formatAgeShort(birthday, ref),
    stageId: getStageId(birthday, ref),
    stageProgress: getStageProgress(birthday, ref),
    checkpoint: getCurrentCheckpoint(birthday, ref),
    nextCheckpoint: getNextCheckpoint(birthday, ref),
    isBirthday: isBirthdayToday(birthday, ref),
    daysToBirthday: daysUntilBirthday(birthday, ref),
    trimester: null,
  };
}

export default {
  getAge,
  getAgeInDays,
  getAgeInWeeks,
  getAgeInMonths,
  getAgeInYears,
  formatAge,
  formatAgeShort,
  formatPregnancy,
  getTrimester,
  daysUntilBirthday,
  isBirthdayToday,
  getCurrentCheckpoint,
  getNextCheckpoint,
  getStageId,
  getStageProgress,
  isInAgeRange,
  filterByAge,
  bestMatchByAge,
  getAgeSummary,
  CDC_CHECKPOINTS,
  STAGE_BOUNDS,
};

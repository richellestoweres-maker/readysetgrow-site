/**
 * Ready Set Grow: the family calendar
 * ------------------------------------------------------------------
 * WHY THIS EXISTS AT ALL
 * The app had a notification setting called "Something is coming up"
 * and nowhere in the entire product to put something that was coming
 * up. The reminder was real and had nothing to remind anybody about.
 * This is the thing it was always supposed to be reading.
 *
 * WHOSE CALENDAR IT IS
 * The house's. That is the exception to the rule that runs everywhere
 * else in this app, which is that her things live on her profile and a
 * child's things live on theirs. A calendar is the one object a family
 * genuinely shares: the dentist on Thursday is not the child's fact or
 * the parent's fact, it is the week's fact, and splitting it across 3
 * profiles would mean nobody could ever see Thursday.
 *
 * So the entry belongs to the house and CARRIES who it is about. One
 * list, filterable by person, rather than a list per person.
 *
 * IT MUST NOT OPEN EMPTY
 * A calendar that asks you to type before it shows you anything is a
 * calendar nobody fills in. The app already knows a great deal with
 * dates attached: which vaccine doses are coming due, which well child
 * check this age falls in, every birthday, the chore chart, a cycle
 * prediction, a due date. None of it had anywhere to appear. The feeds
 * in app.js pour all of that in, so the first time she opens this it
 * is already describing her actual month. She adds appointments to a
 * calendar that is already useful, which is the only way anybody ever
 * keeps one up.
 *
 * THE DIFFERENCE BETWEEN AN ENTRY AND A READING
 * Entries are hers. She typed them, she can edit or delete them, they
 * sync, they can carry a reminder. Readings are the app's: worked out
 * fresh every time from a birthday or a record, never stored, never
 * editable, and gone the moment the thing behind them changes. A
 * reading has `from` set to the feed that produced it. Anything that
 * can be edited checks that field first, because letting somebody drag
 * their own child's birthday to a different day would be a lie the
 * calendar then has to keep telling.
 */

export const CAL_TITLE = 'What is coming up';

export const CAL_SUB =
  'Appointments, the chart, birthdays and anything the app already knows is due, on one calendar '
  + 'for the whole house.';

export const CAL_INTRO = [
  'Everything with a date on it, in one place. Add an appointment and say who it is about, and it '
    + 'sits alongside the things the app worked out for itself, such as a vaccine dose coming due or '
    + 'a check that belongs to this age.',
  'Nothing here is shared outside your house, and nothing on this calendar goes to the community.',
];

/* ------------------------------------------------------------------
   WHAT KIND OF THING IT IS

   Kept short on purpose. A list of 20 kinds is a list nobody reads,
   and the kind only has to do 3 jobs: pick an icon, decide whether a
   reminder makes sense by default, and let her filter later. Anything
   that does not fit is just Something else, which is a real answer
   rather than a shrug.
   ------------------------------------------------------------------ */
export const CAL_KINDS = [
  { id: 'doctor', label: 'Doctor or dentist', icon: 'heart',
    hint: 'A check up, a sick visit, a dentist, a specialist', remind: '1d' },
  { id: 'therapy', label: 'Therapy or an evaluation', icon: 'heart',
    hint: 'Speech, occupational, physical, behavioural, or an assessment', remind: '1d' },
  { id: 'school', label: 'School or childcare', icon: 'note',
    hint: 'A meeting, a conference, a first day, a deadline on a form', remind: '1d' },
  { id: 'activity', label: 'An activity', icon: 'star',
    hint: 'Practice, a lesson, a game, a class', remind: '2h' },
  { id: 'family', label: 'Family and friends', icon: 'people',
    hint: 'A party, a visit, somebody arriving or leaving', remind: '1d' },
  { id: 'reminder', label: 'A reminder to yourself', icon: 'leaf',
    hint: 'Refill a prescription, send the form back, pay for the thing', remind: 'same9' },
  { id: 'other', label: 'Something else', icon: 'calendar',
    hint: 'Anything that does not fit above', remind: 'none' },
];

export function calKind(id) {
  const k = CAL_KINDS.filter((x) => x.id === id)[0];
  return k || CAL_KINDS[CAL_KINDS.length - 1];
}

/* ------------------------------------------------------------------
   WHEN TO BE TOLD

   minutesBefore is what the server does the arithmetic with, and the
   one marked dayBefore9 is deliberately not a number of minutes: "the
   evening before" is a useful reminder and "1440 minutes before a
   07:30 appointment" is a buzz at half past 7 at night, which is
   nearly the same thing and reads as an accident.

   Everything here still obeys quiet hours. A reminder that lands at
   2am is how an app gets deleted, and the server drops those rather
   than queueing them.
   ------------------------------------------------------------------ */
export const CAL_REMIND = [
  { id: 'none', label: 'No reminder', minutesBefore: null },
  { id: '30m', label: '30 minutes before', minutesBefore: 30 },
  { id: '2h', label: '2 hours before', minutesBefore: 120 },
  { id: 'same9', label: 'That morning', atHour: 9 },
  { id: '1d', label: 'The evening before', atHour: 18, daysBefore: 1 },
  { id: '2d', label: '2 days before', atHour: 18, daysBefore: 2 },
  { id: '1w', label: 'A week before', atHour: 18, daysBefore: 7 },
];

export function calRemind(id) {
  const r = CAL_REMIND.filter((x) => x.id === id)[0];
  return r || CAL_REMIND[0];
}

export const CAL_LENGTH_HELP =
  'How long to block out. It only changes how big it looks on the day, so a rough answer is fine.';

export const CAL_REPEAT = [
  { id: '', label: 'Just once' },
  { id: 'weekly', label: 'Every week' },
  { id: 'fortnightly', label: 'Every 2 weeks' },
  { id: 'monthly', label: 'Every month on this date' },
  { id: 'yearly', label: 'Every year' },
];

/* ==================================================================
   DATES

   All dates in this app are plain 'YYYY-MM-DD' strings and all times
   are 'HH:MM', both in the family's own local time, with no timezone
   written down anywhere.

   That is a decision rather than an oversight. A calendar entry is not
   an instant, it is a thing on a day: the dentist at 09:00 is at 09:00
   whether or not the family drove 2 states over that week, and storing
   it as a UTC instant would quietly move it. Local wall clock time is
   what a paper calendar means and it is what people mean.
   ================================================================== */

function two(n) { return (n < 10 ? '0' : '') + n; }

export function calDateString(d) {
  const x = d instanceof Date ? d : new Date(d);
  return x.getFullYear() + '-' + two(x.getMonth() + 1) + '-' + two(x.getDate());
}

export function calToday() { return calDateString(new Date()); }

/* Midday rather than midnight, every time a date string becomes a
   Date. An hour of daylight saving either way moves midnight onto the
   day before and takes the whole calendar with it. Nothing here cares
   about the time of day, so the middle of the day is the safe place to
   stand. */
export function calParse(s) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s || ''));
  if (!m) return null;
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0, 0);
}

export function calAddDays(s, n) {
  const d = calParse(s);
  if (!d) return s;
  d.setDate(d.getDate() + n);
  return calDateString(d);
}

export function calAddMonths(s, n) {
  const d = calParse(s);
  if (!d) return s;
  const day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + n);
  /* 31 January plus a month is not 31 February. Clamp to the end of
     the month the way every calendar people already use does. */
  const last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(Math.min(day, last));
  return calDateString(d);
}

export function calDaysBetween(a, b) {
  const x = calParse(a); const y = calParse(b);
  if (!x || !y) return 0;
  return Math.round((y.getTime() - x.getTime()) / 86400000);
}

export const CAL_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

export const CAL_DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const CAL_DOW_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'];

/* "Thursday 9 October", or "Today" and "Tomorrow", because a parent
   reading a list at 6am wants to know whether this is the thing
   happening in 2 hours. */
export function calDayLabel(date, today) {
  const d = calParse(date);
  if (!d) return '';
  const t = today || calToday();
  const diff = calDaysBetween(t, date);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Tomorrow';
  if (diff === -1) return 'Yesterday';
  const base = CAL_DOW_FULL[d.getDay()] + ' ' + d.getDate() + ' ' + CAL_MONTHS[d.getMonth()];
  const sameYear = d.getFullYear() === new Date().getFullYear();
  return sameYear ? base : base + ' ' + d.getFullYear();
}

export function calShortLabel(date) {
  const d = calParse(date);
  if (!d) return '';
  return CAL_DOW[d.getDay()] + ' ' + d.getDate() + ' ' + CAL_MONTHS[d.getMonth()].slice(0, 3);
}

/* 24 hour in, 12 hour out, because the inputs are easier to get right
   with the first and every American parent reads the second. */
export function calTimeLabel(t) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(String(t || ''));
  if (!m) return '';
  let h = Number(m[1]);
  const suffix = h >= 12 ? 'pm' : 'am';
  if (h === 0) h = 12; else if (h > 12) h -= 12;
  return h + (m[2] === '00' ? '' : ':' + m[2]) + suffix;
}

/* The 7 days of the week a date falls in, starting Sunday to match the
   month grid. A week that starts on a different day to the month above
   it is the kind of small wrongness people feel without being able to
   name. */
export function calWeekOf(date) {
  const d = calParse(date);
  if (!d) return [];
  const start = calAddDays(date, -d.getDay());
  const out = [];
  for (let i = 0; i < 7; i += 1) out.push(calAddDays(start, i));
  return out;
}

export function calWeekLabel(dates) {
  if (!dates || !dates.length) return '';
  const a = calParse(dates[0]);
  const b = calParse(dates[dates.length - 1]);
  if (!a || !b) return '';
  const sameMonth = a.getMonth() === b.getMonth();
  const left = a.getDate() + (sameMonth ? '' : ' ' + CAL_MONTHS[a.getMonth()].slice(0, 3));
  return left + ' to ' + b.getDate() + ' ' + CAL_MONTHS[b.getMonth()];
}

/* ------------------------------------------------------------------
   THE MONTH GRID
   6 rows of 7 always, rather than 5 rows some months and 6 in others,
   so the grid does not change height as she pages through it and move
   everything underneath up and down the screen.
   ------------------------------------------------------------------ */
export function calMonthGrid(year, month) {
  const first = new Date(year, month, 1, 12);
  const start = new Date(year, month, 1 - first.getDay(), 12);
  const out = [];
  for (let i = 0; i < 42; i += 1) {
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i, 12);
    out.push({ date: calDateString(d), inMonth: d.getMonth() === month, dow: d.getDay() });
  }
  return out;
}

/* ==================================================================
   REPEATS

   Deliberately the small version. No "third Tuesday", no "every
   weekday except holidays", no end date. Those belong to a calendar
   people run their working lives on, and this is a calendar for a
   house. Weekly swimming, a monthly appointment and a yearly birthday
   cover nearly everything a family actually repeats, and each of them
   is 1 line of arithmetic rather than a rules engine nobody can debug.

   Occurrences are worked out on the way past rather than written down,
   so a weekly swimming lesson is 1 record forever instead of 500 rows
   that have to be cleaned up when it stops.
   ================================================================== */
export function calOccursOn(ev, date) {
  if (!ev || !ev.date) return false;
  if (ev.date === date) return true;
  if (!ev.repeat) return false;
  const diff = calDaysBetween(ev.date, date);
  if (diff <= 0) return false;
  if (ev.repeat === 'weekly') return diff % 7 === 0;
  if (ev.repeat === 'fortnightly') return diff % 14 === 0;
  const a = calParse(ev.date); const b = calParse(date);
  if (!a || !b) return false;
  if (ev.repeat === 'monthly') {
    if (a.getDate() === b.getDate()) return true;
    /* A monthly entry on the 31st still has to land in February, so it
       falls on the last day of any month too short to hold it. */
    const last = new Date(b.getFullYear(), b.getMonth() + 1, 0).getDate();
    return a.getDate() > last && b.getDate() === last;
  }
  if (ev.repeat === 'yearly') return a.getDate() === b.getDate() && a.getMonth() === b.getMonth();
  return false;
}

/* ==================================================================
   TIME, AS A LINE RATHER THAN A LIST

   THE THING I HAD WRONG, AND IT WAS THE WHOLE THING.

   Every view in the first 2 attempts was a list: things in order, one
   under the next. That is a to do list that happens to have dates on
   it. A calendar is a TIMELINE. The hours run down the side, an entry
   is a block sitting at the hour it starts, and its height is how long
   it lasts. That is what lets somebody see the shape of a day, which
   is mostly the gaps: swimming at 4 does not matter on its own, it
   matters because it is 40 minutes after school ends.

   None of that is possible without an end time, which the entries did
   not have. So they have one now, and an entry saved before this gets
   a sensible default rather than a zero height block.
   ================================================================== */

/* How long something lasts when nobody said. An hour is the right
   guess for most of what a family puts on a calendar, and a dentist
   that actually takes 20 minutes still reads correctly as "late
   morning is spoken for". */
export const CAL_DEFAULT_MINS = 60;

export const CAL_LENGTHS = [
  { id: 15, label: '15 min' },
  { id: 30, label: '30 min' },
  { id: 45, label: '45 min' },
  { id: 60, label: '1 hour' },
  { id: 90, label: '1.5 hours' },
  { id: 120, label: '2 hours' },
  { id: 180, label: '3 hours' },
  { id: 240, label: '4 hours' },
  { id: 480, label: 'Most of the day' },
];

export function calMinutes(t) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(String(t || ''));
  if (!m) return null;
  return Number(m[1]) * 60 + Number(m[2]);
}

export function calFromMinutes(n) {
  const x = Math.max(0, Math.min(24 * 60 - 1, Math.round(n)));
  const h = Math.floor(x / 60);
  const mm = x % 60;
  return (h < 10 ? '0' : '') + h + ':' + (mm < 10 ? '0' : '') + mm;
}

/* Start and end in minutes from midnight, or null for an all day
   thing. Anything that runs past midnight is clipped to the end of its
   own day rather than drawn into tomorrow, because a block that wraps
   round a grid is harder to read than 2 honest ones. */
export function calSpan(ev) {
  const start = calMinutes(ev && ev.time);
  if (start === null) return null;
  let mins = Number(ev.mins);
  if (!isFinite(mins) || mins <= 0) mins = CAL_DEFAULT_MINS;
  const end = Math.min(24 * 60, start + mins);
  return { start: start, end: end, mins: end - start };
}

export function calEndLabel(ev) {
  const sp = calSpan(ev);
  if (!sp) return '';
  return calTimeLabel(calFromMinutes(sp.end));
}

/* WHICH HOURS THE GRID HAS TO COVER.

   Not midnight to midnight. 24 hours on a phone gives each one about
   26 pixels and most families have nothing at all in 14 of them, so
   the day you care about is squeezed into a third of the screen. The
   grid covers the hours this day actually uses, padded by 1 either
   side, inside a sensible floor and ceiling. A day with nothing timed
   on it falls back to a normal waking day. */
export function calHourRange(list) {
  let lo = null;
  let hi = null;
  (list || []).forEach((e) => {
    const sp = calSpan(e);
    if (!sp) return;
    const a = Math.floor(sp.start / 60);
    const b = Math.ceil(sp.end / 60);
    if (lo === null || a < lo) lo = a;
    if (hi === null || b > hi) hi = b;
  });
  if (lo === null) return { from: 7, to: 21 };
  return { from: Math.max(0, Math.min(lo - 1, 8)), to: Math.min(24, Math.max(hi + 1, 19)) };
}

/* OVERLAPS.

   Two things at 4pm cannot both have the full width or one hides the
   other. They are laid out in columns: anything that overlaps anything
   already placed goes in the next column along, and the whole group
   shares the width. This is the simple version of what every calendar
   does, and for a family calendar, where 3 things at once is a busy
   day, the simple version is the correct amount of machinery. */
export function calLayout(list) {
  const timed = (list || []).filter((e) => calSpan(e)).map((e) => {
    const sp = calSpan(e);
    return { ev: e, start: sp.start, end: sp.end, col: 0, cols: 1 };
  }).sort((a, b) => (a.start - b.start) || (a.end - b.end));

  let group = [];
  let groupEnd = -1;
  const out = [];
  const closeGroup = () => {
    const width = group.reduce((n, x) => Math.max(n, x.col + 1), 1);
    group.forEach((x) => { x.cols = width; out.push(x); });
    group = [];
    groupEnd = -1;
  };
  timed.forEach((item) => {
    if (group.length && item.start >= groupEnd) closeGroup();
    const taken = {};
    group.forEach((x) => { if (x.end > item.start) taken[x.col] = true; });
    let c = 0;
    while (taken[c]) c += 1;
    item.col = c;
    group.push(item);
    groupEnd = Math.max(groupEnd, item.end);
  });
  if (group.length) closeGroup();
  return out;
}

export function calHourLabel(h) {
  if (h === 0 || h === 24) return '12am';
  if (h === 12) return '12pm';
  return (h > 12 ? h - 12 : h) + (h >= 12 ? 'pm' : 'am');
}

/* ==================================================================
   SORTING

   DATE FIRST. That is not obvious enough: this started out sorting on
   time alone, because it was written to order the entries inside a
   single day, and then got used across a whole month as well. The list
   came out with Saturday above Tomorrow, which looks like a broken
   calendar and is really a comparison missing its first term.

   Then timed things ahead of all day things, in clock order. An
   appointment at 09:00 matters more to the shape of a Tuesday than
   "library books due", and a day that opens with the untimed list
   reads as though nothing is happening.
   ================================================================== */
export function calSort(list) {
  return (list || []).slice().sort((a, b) => {
    const ad = a.date || ''; const bd = b.date || '';
    if (ad !== bd) return ad < bd ? -1 : 1;
    const at = a.time || ''; const bt = b.time || '';
    if (at && !bt) return -1;
    if (!at && bt) return 1;
    if (at !== bt) return at < bt ? -1 : 1;
    return String(a.title || '').localeCompare(String(b.title || ''));
  });
}

/* ==================================================================
   WHAT THE SERVER NEEDS

   The one piece of arithmetic that has to agree exactly between the
   app and functions/index.js, which is why it is written once here and
   the server imports the same shape rather than reimplementing it. A
   reminder the phone thinks is at 6pm and the server thinks is at 6am
   is the worst kind of bug, because it looks like it works.

   Returns 'YYYY-MM-DDTHH:MM' in the family's own local time, or null
   when the entry has no reminder on it.
   ================================================================== */
export function calRemindAt(ev) {
  if (!ev || !ev.date) return null;
  const r = calRemind(ev.remind);
  if (!r || r.id === 'none') return null;
  if (r.minutesBefore != null) {
    /* Relative to the appointment, so it needs one. An entry with no
       time cannot have a 30 minutes before. */
    if (!ev.time) return null;
    const d = calParse(ev.date);
    const m = /^(\d{1,2}):(\d{2})$/.exec(ev.time);
    if (!d || !m) return null;
    d.setHours(Number(m[1]), Number(m[2]), 0, 0);
    d.setMinutes(d.getMinutes() - r.minutesBefore);
    return calDateString(d) + 'T' + two(d.getHours()) + ':' + two(d.getMinutes());
  }
  const day = calAddDays(ev.date, -(r.daysBefore || 0));
  return day + 'T' + two(r.atHour || 9) + ':00';
}

/* ==================================================================
   A COLOUR PER PERSON

   The most visible thing a family calendar on a wall does, and the
   reason you can read a month from across the kitchen: whose week is
   heavy is a shape, not a list you have to go through name by name.

   THE PALETTE IS PICKED FOR THIS APP, NOT BORROWED.
   Every one of these sits inside the sage, cream and earth range the
   rest of the app lives in. A calendar that suddenly goes primary red
   and electric blue would read as a different product bolted on. These
   are muted on purpose and still tell apart at the size of a 5 pixel
   dot, which is the only size that actually matters here.

   They also have to survive being the ONLY difference between 2 rows,
   so none of them are a pair that a red green colour blindness would
   collapse. The sage and the clay are the 2 most likely to be
   confused, and they differ in lightness as well as hue, which is what
   keeps them apart. Colour is never the only signal anyway: every row
   says whose it is in words, and the filter chips work without it.
   ================================================================== */
export const CAL_COLORS = [
  { id: 'sage', label: 'Sage', dot: '#7C9068', soft: '#EAEFE2', ink: '#3C5435' },
  { id: 'clay', label: 'Clay', dot: '#A85A44', soft: '#F6E8E3', ink: '#7C4030' },
  { id: 'sky', label: 'Sky', dot: '#5B7F99', soft: '#E4EDF2', ink: '#3B5A6E' },
  { id: 'plum', label: 'Plum', dot: '#7A5B82', soft: '#EFE7F1', ink: '#553D5C' },
  { id: 'honey', label: 'Honey', dot: '#B58B3C', soft: '#F6EDD9', ink: '#7E5F22' },
  { id: 'moss', label: 'Moss', dot: '#5F7355', soft: '#E6EBE1', ink: '#3F4F38' },
  { id: 'rose', label: 'Rose', dot: '#A76A77', soft: '#F4E7EA', ink: '#75464F' },
  { id: 'slate', label: 'Slate', dot: '#6B7280', soft: '#E9EAEC', ink: '#45494F' },
];

export function calColor(id) {
  const c = CAL_COLORS.filter((x) => x.id === id)[0];
  return c || CAL_COLORS[CAL_COLORS.length - 1];
}

/* Somebody with no colour chosen still has to have one, or the
   calendar is grey until every person has been through a settings
   screen nobody will open. So an unset colour is worked out from the
   person's id, which means it is stable for that person forever and
   different from their siblings without anybody picking anything.

   The parent is always sage, because that is the app's own colour and
   she is the one constant on every household's calendar. */
export function calColorFor(who, explicit) {
  if (explicit) return calColor(explicit);
  if (!who || who === 'house') return calColor('slate');
  if (who === 'me') return calColor('sage');
  let n = 0;
  const s = String(who);
  for (let i = 0; i < s.length; i += 1) n = (n * 31 + s.charCodeAt(i)) % 100000;
  /* Skips sage, so a child is never the same colour as the parent. */
  const pick = CAL_COLORS.filter((c) => c.id !== 'sage');
  return pick[n % pick.length];
}

export const CAL_COLOR_HELP =
  'Pick a colour and this person is that colour everywhere on the calendar. Leave it and they get '
  + 'one of their own anyway.';

/* ==================================================================
   WHAT FILLS ITSELF IN, AND WHY NONE OF IT IS ASSUMED

   The first version of this put the next vaccine dose on the calendar
   for every child, worked out from their age. That was wrong and she
   caught it. Plenty of families do not vaccinate, or do it on their
   own schedule, and an app that quietly writes "Hepatitis B due" onto
   their October has taken a side in something that is theirs to
   decide. It is the same mistake as a red overdue badge, just in a
   nicer font.

   The app's own rule on this has been settled since the vaccine screen
   was written: educate, never push, and say plainly that the parent
   decides. A calendar that fills itself in has to obey that too.

   So 2 things changed.

   1. EVERY FEED HAS A SWITCH, and the switches live on the calendar
      where she can see what is putting things there. Nothing arrives
      from a source she cannot turn off.

   2. THE VACCINE FEED DOES NOT START ITSELF. It stays off until the
      family has actually used the vaccine record, meaning they have
      written down a dose or marked a series as one they are not
      giving. Either of those is a family telling the app they are
      tracking this. Until then the app has not been told anything and
      says nothing, which is the correct behaviour for a question it
      has no business having an opinion on.

      Note that marking a series as not being given counts as engaging.
      That is deliberate. A parent who has gone through and said no to
      some of them is tracking the schedule as carefully as anybody,
      and the record already respects a skip by never suggesting it
      again.
   ================================================================== */
export const CAL_FEEDS = [
  { id: 'birthdays', label: 'Birthdays',
    hint: 'Yours and each child\'s, every year, with what they are turning.',
    defaultOn: true },
  { id: 'chores', label: 'The chore chart',
    hint: 'One line per person per day, from the chart you already built.',
    defaultOn: true },
  { id: 'vaccines', label: 'Vaccine doses coming due',
    hint: 'Only for children whose record you are keeping, and only the next one '
      + 'outstanding. Nothing appears here unless you have started the record.',
    defaultOn: true, needsOptIn: true },
  { id: 'cycle', label: 'Your period, estimated',
    hint: 'From your own average, once you have logged a couple.',
    defaultOn: true },
  { id: 'due', label: 'A due date, if you are expecting',
    hint: 'Marked as an estimate, because that is what it is.',
    defaultOn: true },
];

export function calFeedOn(id, prefs) {
  const p = (prefs && typeof prefs === 'object') ? prefs : {};
  if (p[id] === true) return true;
  if (p[id] === false) return false;
  const f = CAL_FEEDS.filter((x) => x.id === id)[0];
  return !!(f && f.defaultOn);
}

export const CAL_FEEDS_TITLE = 'What fills this in by itself';

export const CAL_FEEDS_INTRO =
  'Everything below is worked out from what is already in the app, so you never type it twice. Turn '
  + 'off anything you would rather not see. Nothing here is ever posted anywhere, and turning one '
  + 'off changes the calendar only, not the screen it comes from.';

export const CAL_VAX_OFF =
  'Nothing is shown here until you start a vaccine record for a child, either by writing down a dose '
  + 'they have had or by marking one you are not giving. Whether and when to vaccinate is yours to '
  + 'decide and the app does not assume either way.';

/* ==================================================================
   MIRRORING IT INTO THE PHONE'S OWN CALENDAR

   Her choice, and the right one. A family calendar that only exists
   inside one app is a second calendar to check, and a second calendar
   to check is a calendar that goes stale in about 3 weeks.

   Subscribing rather than sending a copy is what makes it stay true.
   A copy is wrong the moment anything changes. A subscription is a
   link the phone re-reads on its own, so moving the dentist here moves
   it on her phone without her doing anything, and her husband can
   subscribe to the same link on his.

   What it does NOT do is read the other way. Nothing she puts in her
   phone calendar appears here. Two way sync means asking for
   permission to read every appointment in her life, including work,
   and this app has no business holding that.
   ================================================================== */
export const CAL_SUBSCRIBE = {
  title: 'Put this on your phone calendar',
  body: [
    'Subscribe once and every appointment on this calendar turns up in the calendar app you already '
      + 'use, next to everything else in your life, with your phone\'s own alerts. Change something '
      + 'here and it changes there on its own. You do not have to do this again.',
    'It only goes one way. Nothing from your phone calendar comes into Ready Set Grow, because that '
      + 'would mean handing this app every appointment you have, work included, and it has no '
      + 'business holding that.',
  ],
  steps: [
    { who: 'iPhone and iPad',
      how: 'Copy the link, then Settings, Calendar, Accounts, Add Account, Other, Add Subscribed '
        + 'Calendar, and paste it.' },
    { who: 'Android',
      how: 'Open calendar.google.com in a browser, then Other calendars, the plus, From URL, and '
        + 'paste it. It arrives on the phone within the hour.' },
    { who: 'Outlook',
      how: 'Add calendar, Subscribe from web, and paste it.' },
  ],
  warn: 'Treat the link like a key. Anybody who has it can read this calendar, so share it with the '
    + 'people in your house and nobody else. You can replace it at any time, which turns the old one '
    + 'off for good.',
};

/* ==================================================================
   EMPTY STATES

   There are 2, and they are not the same thing. A day with nothing on
   it is good news and should read as good news. A calendar with
   nothing in it at all is a thing somebody has not set up yet.
   ================================================================== */
export const CAL_EMPTY_DAY = 'Nothing on this day.';

export const CAL_EMPTY_ALL = {
  title: 'Nothing on the calendar yet',
  body: 'Add the next appointment you already know about, such as a check up or a dentist. Birthdays '
    + 'and anything the app can work out for itself turn up here on their own.',
};

export const CAL_PAST_NOTE =
  'Everything before today, newest first. Kept so you can answer the question every new doctor asks, '
  + 'which is when they were last seen.';

/* Filters across the top. 'all' first, because the thing a parent
   opens a family calendar for is the week, not one person's week. */
export const CAL_WHO_ALL = 'Everybody';
export const CAL_WHO_HOUSE = 'The whole house';
export const CAL_WHO_HOUSE_ID = 'house';

export const CAL_ADD_HELP =
  'Who it is about decides whose profile it shows up on, and nothing more. It stays on this '
  + 'calendar either way.';

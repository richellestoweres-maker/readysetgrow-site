/**
 * Ready Set Grow: Sleep
 * ------------------------------------------------------------------
 * Three things live here:
 *
 *   1. What the evidence says about how much sleep a child needs
 *   2. Wake window and nap guides by age
 *   3. A schedule builder: give it a wake up time, get back the day
 *
 * THE SCHEDULE BUILDER IS THE POINT
 * A parent should not have to read a chart and do arithmetic at 6 AM.
 * They tell the app one thing, when the baby woke up, and the app lays
 * out the rest of the day. If the baby wakes at 9 instead of 6, the whole
 * day shifts. If a nap runs short, the rest recalculates.
 *
 * WHERE THESE NUMBERS COME FROM, AND WHERE THEY DO NOT
 *
 * Total sleep needs are from the American Academy of Sleep Medicine
 * consensus statement, which the AAP endorses. Those are real published
 * numbers and they are cited in careTopics.js.
 *
 * Wake windows are different, and it matters that we are honest about
 * it. There is no single authoritative body publishing official wake
 * window numbers. The ranges below reflect broad consensus across
 * pediatric sleep practice, and every sleep program uses roughly these
 * figures with small variations. They are genuinely useful as a starting
 * point and they are not a standard anyone can be measured against.
 *
 * So the app must present them as a starting point that gets adjusted to
 * the actual child, never as a schedule the family is failing to hit.
 * Every generated schedule carries that framing with it.
 *
 * A NOTE ON THE ALGORITHM
 * The last wake window of the day is deliberately the longest. That is
 * how sleep pressure actually builds and it is why a schedule that uses
 * one flat number for every gap produces a bedtime that does not work.
 */

/* ------------------------------------------------------------------
 * HOW MUCH SLEEP, BY AGE
 * American Academy of Sleep Medicine consensus, endorsed by the AAP.
 * Figures are total sleep per 24 hours, naps included.
 * ------------------------------------------------------------------ */

export const SLEEP_NEEDS = [
  { minMonths: 0,   maxMonths: 4,   label: 'Newborn',        hours: [14, 17], note: 'Spread across the whole 24 hours with no day and night pattern yet. The AASM consensus begins at 4 months, so the newborn range reflects general pediatric guidance.' },
  { minMonths: 4,   maxMonths: 12,  label: '4 to 12 months', hours: [12, 16], note: 'Including naps.' },
  { minMonths: 12,  maxMonths: 36,  label: '1 to 2 years',   hours: [11, 14], note: 'Including naps.' },
  { minMonths: 36,  maxMonths: 72,  label: '3 to 5 years',   hours: [10, 13], note: 'Including naps.' },
  { minMonths: 72,  maxMonths: 156, label: '6 to 12 years',  hours: [9, 12],  note: 'Naps have usually stopped by now.' },
  { minMonths: 156, maxMonths: 240, label: '13 to 18 years', hours: [8, 10],  note: 'Most teens get well under this, and biology pushes their sleep timing later, which school start times fight against.' },
];

export function getSleepNeeds(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return null;
  return SLEEP_NEEDS.find((s) => months >= s.minMonths && months < s.maxMonths) || null;
}

/* ------------------------------------------------------------------
 * WAKE WINDOWS AND NAPS, BY AGE
 *
 * firstWindow  minutes awake between morning wake up and nap one
 * midWindow    minutes awake between the middle naps
 * lastWindow   minutes awake between the final nap and bedtime
 * napMinutes   typical length of a nap at this age
 * ------------------------------------------------------------------ */

export const WAKE_WINDOWS = [
  {
    minMonths: 0, maxMonths: 1, label: 'Newborn',
    naps: { typical: 5, min: 4, max: 7 },
    firstWindow: 45, midWindow: 50, lastWindow: 60,
    windowRange: [35, 60],
    napMinutes: { typical: 75, min: 30, max: 180 },
    bedtimeRange: ['20:00', '23:00'],
    guidance:
      'Newborns have no schedule and should not be put on one. Feed on demand, watch for sleepy cues ' +
      'rather than the clock, and expect the day to look different every day. This is survival, not structure.',
    flexible: true,
  },
  {
    minMonths: 1, maxMonths: 2, label: '1 to 2 months',
    naps: { typical: 5, min: 4, max: 6 },
    firstWindow: 60, midWindow: 65, lastWindow: 75,
    windowRange: [45, 90],
    napMinutes: { typical: 70, min: 30, max: 150 },
    bedtimeRange: ['19:30', '22:00'],
    guidance:
      'Still very flexible. A rhythm may start to appear but a fixed schedule is not the goal yet. ' +
      'Watch the baby, not the clock.',
    flexible: true,
  },
  {
    minMonths: 2, maxMonths: 4, label: '2 to 4 months',
    naps: { typical: 4, min: 3, max: 5 },
    firstWindow: 90, midWindow: 105, lastWindow: 120,
    windowRange: [60, 120],
    napMinutes: { typical: 55, min: 30, max: 120 },
    bedtimeRange: ['19:00', '20:30'],
    guidance:
      'A pattern usually starts to show up here, and bedtime often moves earlier. This is also when ' +
      'sleep reorganizes into cycles, which is why nights can fall apart around 4 months.',
    flexible: false,
  },
  {
    minMonths: 4, maxMonths: 5, label: '4 to 5 months',
    naps: { typical: 4, min: 3, max: 5 },
    firstWindow: 105, midWindow: 120, lastWindow: 135,
    windowRange: [90, 150],
    napMinutes: { typical: 55, min: 30, max: 120 },
    bedtimeRange: ['18:30', '20:00'],
    guidance:
      '4 naps is still common at 4 months, often with a short catnap late in the day. Short ' +
      'naps are very normal here, because a baby who wakes after one sleep cycle has not yet learned ' +
      'to link into the next one.',
    flexible: false,
  },
  {
    minMonths: 5, maxMonths: 6, label: '5 to 6 months',
    naps: { typical: 3, min: 3, max: 4 },
    firstWindow: 120, midWindow: 135, lastWindow: 150,
    windowRange: [90, 150],
    napMinutes: { typical: 70, min: 30, max: 120 },
    bedtimeRange: ['18:30', '20:00'],
    guidance:
      '3 naps is common by the end of this window. Short naps are very normal here, because a ' +
      'baby who wakes after one sleep cycle has not yet learned to link into the next one.',
    flexible: false,
  },
  {
    minMonths: 6, maxMonths: 9, label: '6 to 9 months',
    naps: { typical: 3, min: 2, max: 3 },
    firstWindow: 130, midWindow: 145, lastWindow: 150,
    windowRange: [120, 195],
    napMinutes: { typical: 70, min: 40, max: 120 },
    bedtimeRange: ['18:30', '20:00'],
    guidance:
      'The third nap usually drops somewhere in this window, often between 7 and 9 months. ' +
      'When it goes, bedtime needs to move earlier for a few weeks.',
    flexible: false,
  },
  {
    minMonths: 9, maxMonths: 12, label: '9 to 12 months',
    naps: { typical: 2, min: 2, max: 2 },
    firstWindow: 185, midWindow: 210, lastWindow: 225,
    windowRange: [150, 240],
    napMinutes: { typical: 80, min: 45, max: 120 },
    bedtimeRange: ['18:30', '20:00'],
    guidance:
      '2 solid naps is the pattern here. Many babies appear to be dropping to one around 10 or ' +
      '11 months because of a developmental leap, and then go back to two. Waiting it out is ' +
      'usually right.',
    flexible: false,
  },
  {
    minMonths: 12, maxMonths: 15, label: '12 to 15 months',
    naps: { typical: 2, min: 1, max: 2 },
    firstWindow: 190, midWindow: 215, lastWindow: 225,
    windowRange: [165, 255],
    napMinutes: { typical: 75, min: 45, max: 120 },
    bedtimeRange: ['18:30', '20:00'],
    guidance:
      'The 2 to 1 nap transition usually happens between 12 and 18 months, and it is ' +
      'rarely clean. Alternating between one nap and two for several weeks is normal.',
    flexible: false,
  },
  {
    minMonths: 15, maxMonths: 18, label: '15 to 18 months',
    naps: { typical: 1, min: 1, max: 2 },
    firstWindow: 330, midWindow: 330, lastWindow: 300,
    windowRange: [240, 330],
    napMinutes: { typical: 120, min: 60, max: 180 },
    bedtimeRange: ['18:30', '20:00'],
    guidance:
      'One longer nap after lunch is the usual pattern by the end of this window. During the ' +
      'transition, an earlier bedtime covers the gap.',
    flexible: false,
  },
  {
    minMonths: 18, maxMonths: 36, label: '18 months to 3 years',
    naps: { typical: 1, min: 0, max: 1 },
    firstWindow: 330, midWindow: 330, lastWindow: 315,
    windowRange: [270, 360],
    napMinutes: { typical: 120, min: 60, max: 180 },
    bedtimeRange: ['19:00', '20:30'],
    guidance:
      'One afternoon nap, usually early afternoon. If the nap starts pushing bedtime very late, ' +
      'capping the nap works better than dropping it entirely.',
    flexible: false,
  },
  {
    minMonths: 36, maxMonths: 60, label: '3 to 5 years',
    naps: { typical: 1, min: 0, max: 1 },
    firstWindow: 360, midWindow: 360, lastWindow: 330,
    windowRange: [300, 420],
    napMinutes: { typical: 75, min: 45, max: 120 },
    bedtimeRange: ['19:00', '20:30'],
    guidance:
      'Naps drop somewhere in here for most children, commonly between 3 and 4. Quiet time in ' +
      'place of a nap keeps the rest in the day without the bedtime cost.',
    flexible: false,
  },
  {
    minMonths: 60, maxMonths: 156, label: '5 to 12 years',
    naps: { typical: 0, min: 0, max: 0 },
    firstWindow: 0, midWindow: 0, lastWindow: 0,
    windowRange: [0, 0],
    napMinutes: { typical: 0, min: 0, max: 0 },
    bedtimeRange: ['19:30', '21:00'],
    guidance:
      'Naps are done. Bedtime is now driven by how much night sleep they need and what time they ' +
      'have to be up, so it is easiest to work backwards from the alarm.',
    flexible: false,
  },
  {
    minMonths: 156, maxMonths: 240, label: '13 to 18 years',
    naps: { typical: 0, min: 0, max: 0 },
    firstWindow: 0, midWindow: 0, lastWindow: 0,
    windowRange: [0, 0],
    napMinutes: { typical: 0, min: 0, max: 0 },
    bedtimeRange: ['21:30', '23:00'],
    guidance:
      'Teen body clocks genuinely shift later at puberty, so a teenager who cannot fall asleep at ' +
      '10 PM is usually not being difficult. Work backwards from the alarm and protect the morning ' +
      'light, which is what actually moves the clock.',
    flexible: false,
  },
];

export function getWakeWindows(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return null;
  return WAKE_WINDOWS.find((w) => months >= w.minMonths && months < w.maxMonths) || null;
}

/* ------------------------------------------------------------------
 * TIME HELPERS
 * Everything works in minutes from midnight, which keeps the arithmetic
 * simple and avoids timezone problems entirely.
 * ------------------------------------------------------------------ */

/** '06:30' or '6:30 AM' to minutes from midnight. Returns null if unparseable. */
export function parseTime(value) {
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

/** Minutes from midnight to '6:30 AM'. */
export function formatTime(mins) {
  if (typeof mins !== 'number' || Number.isNaN(mins)) return '';
  const total = ((Math.round(mins) % 1440) + 1440) % 1440;
  const h24 = Math.floor(total / 60);
  const m = total % 60;
  const ap = h24 >= 12 ? 'PM' : 'AM';
  let h = h24 % 12; if (h === 0) h = 12;
  return `${h}:${String(m).padStart(2, '0')} ${ap}`;
}

/** 95 to '1h 35m'. */
export function formatDuration(mins) {
  if (typeof mins !== 'number' || Number.isNaN(mins)) return '';
  const m = Math.max(0, Math.round(mins));
  const h = Math.floor(m / 60);
  const r = m % 60;
  if (h === 0) return `${r}m`;
  if (r === 0) return `${h}h`;
  return `${h}h ${r}m`;
}

/* ------------------------------------------------------------------
 * THE SCHEDULE BUILDER
 * ------------------------------------------------------------------ */

/**
 * Builds a whole day from one piece of information: when they woke up.
 *
 *   buildDay({ months: 9, wakeTime: '6:00' })
 *   buildDay({ months: 9, wakeTime: '9:00' })          // whole day shifts
 *   buildDay({ months: 9, wakeTime: '6:00', naps: 3 }) // parent override
 *   buildDay({ months: 9, wakeTime: '6:00', actualNaps: [{ start: '8:45', end: '9:15' }] })
 *
 * options
 *   months       required, the child's age in months
 *   wakeTime     required, when they woke this morning
 *   naps         optional, override how many naps today
 *   napMinutes   optional, override typical nap length
 *   adjustment   optional, minutes to add or subtract from every wake
 *                window, so a family can tune it to their actual child
 *   actualNaps   optional, naps that already happened today. Anything
 *                after the last real nap is recalculated from it, which
 *                is what makes a short nap not wreck the rest of the day.
 *
 * Returns { ok, blocks, summary, notes, band }
 */
export function buildDay(options = {}) {
  const { months, wakeTime, naps, napMinutes, adjustment = 0, actualNaps = [] } = options;

  const band = getWakeWindows(months);
  if (!band) return { ok: false, reason: 'No age band for that age.', blocks: [], notes: [], summary: null, band: null };

  const wake = parseTime(wakeTime);
  if (wake === null) return { ok: false, reason: 'Could not read that wake up time.', blocks: [], notes: [], summary: null, band };

  const napCount = typeof naps === 'number'
    ? Math.max(0, Math.min(naps, band.naps.max))
    : band.naps.typical;
  const napLen = typeof napMinutes === 'number' ? napMinutes : band.napMinutes.typical;

  const blocks = [{ type: 'wake', label: 'Wake up', start: wake, end: wake, actual: true }];
  const notes = [];

  // Any naps that already happened are treated as fact, and the rest of
  // the day is rebuilt from the end of the last real one.
  let cursor = wake;
  let napsPlaced = 0;

  const real = (Array.isArray(actualNaps) ? actualNaps : [])
    .map((n) => ({ start: parseTime(n.start), end: parseTime(n.end) }))
    .filter((n) => n.start !== null && n.end !== null && n.end > n.start)
    .sort((a, b) => a.start - b.start)
    .slice(0, napCount);

  real.forEach((n, i) => {
    const len = n.end - n.start;
    blocks.push({
      type: 'nap', label: `Nap ${i + 1}`, start: n.start, end: n.end,
      minutes: len, actual: true,
    });
    if (len < band.napMinutes.min) {
      notes.push(`Nap ${i + 1} ran short at ${formatDuration(len)}. The rest of the day has been pulled earlier to make up for it.`);
    }
    cursor = n.end;
    napsPlaced = i + 1;
  });

  const win = (index) => {
    const isFirst = index === 0;
    const isLast = index === napCount;
    const base = isFirst ? band.firstWindow : isLast ? band.lastWindow : band.midWindow;
    return Math.max(20, base + adjustment);
  };

  // Predicted naps for the rest of the day
  for (let i = napsPlaced; i < napCount; i++) {
    const w = win(i);
    const start = cursor + w;
    const end = start + napLen;
    blocks.push({
      type: 'nap', label: `Nap ${i + 1}`, start, end,
      minutes: napLen, awakeBefore: w, actual: false,
    });
    cursor = end;
  }

  // Bedtime is the last wake window after the final nap, or after wake
  // up if this child no longer naps.
  const lastW = win(napCount);
  let bedtime = cursor + lastW;

  const bedMin = parseTime(band.bedtimeRange[0]);
  const bedMax = parseTime(band.bedtimeRange[1]);

  if (napCount === 0) {
    // Past naps, bedtime is driven by sleep need rather than by windows.
    const need = getSleepNeeds(months);
    const target = need ? Math.round(((need.hours[0] + need.hours[1]) / 2) * 60) : 600;
    bedtime = Math.min(bedMax, Math.max(bedMin, wake + 1440 - target));
    notes.push('At this age bedtime works backwards from how much night sleep they need and when they have to be up, rather than from wake windows.');
  } else {
    if (bedtime < bedMin) {
      notes.push(`That lands bedtime at ${formatTime(bedtime)}, which is on the early side. An early bedtime is usually better than pushing a tired child through to a "normal" hour.`);
    }
    if (bedtime > bedMax) {
      notes.push(`That lands bedtime at ${formatTime(bedtime)}, which is late for this age. Shortening the last nap or capping it can pull it back.`);
    }
  }

  blocks.push({
    type: 'bedtime', label: 'Bedtime', start: bedtime, end: bedtime,
    awakeBefore: napCount === 0 ? null : lastW, actual: false,
  });

  // Wind down is a real part of the plan, not an afterthought
  blocks.push({
    type: 'winddown', label: 'Start wind down', start: bedtime - 25, end: bedtime,
    minutes: 25, actual: false, hint: 'Same short sequence, same order, every night.',
  });
  blocks.sort((a, b) => a.start - b.start || (a.type === 'winddown' ? -1 : 0));

  const dayNap = blocks.filter((b) => b.type === 'nap').reduce((n, b) => n + (b.minutes || 0), 0);
  const night = 1440 - (bedtime - wake);
  const need = getSleepNeeds(months);
  const total = dayNap + night;

  if (need && total < need.hours[0] * 60) {
    notes.push(`This day adds up to about ${formatDuration(total)} of sleep, a little under the ${need.hours[0]} to ${need.hours[1]} hours typical for this age. An earlier bedtime is the usual fix.`);
  }

  return {
    ok: true,
    band,
    blocks,
    notes,
    summary: {
      wake, bedtime, napCount,
      dayNapMinutes: dayNap,
      estimatedNightMinutes: night,
      estimatedTotalMinutes: total,
      needHours: need ? need.hours : null,
    },
  };
}

/** The generated day as plain rows, ready to render. */
export function describeDay(result) {
  if (!result || !result.ok) return [];
  return result.blocks.map((b) => ({
    ...b,
    time: formatTime(b.start),
    range: b.type === 'nap' ? `${formatTime(b.start)} to ${formatTime(b.end)}` : formatTime(b.start),
    length: b.minutes ? formatDuration(b.minutes) : '',
    awake: b.awakeBefore ? `${formatDuration(b.awakeBefore)} awake` : '',
  }));
}

/** The framing that must travel with every generated schedule. */
export const SCHEDULE_DISCLAIMER =
  'This is a starting point, not a rule. Wake windows are widely used guides rather than an official ' +
  'standard, and plenty of thriving babies sit outside them. Watch your baby first and treat this as ' +
  'a suggestion you adjust, not a target you have to hit.';

/* ------------------------------------------------------------------
 * WHEN SLEEP FALLS APART
 * Searchable by the thing a parent actually types.
 * ------------------------------------------------------------------ */

export const SLEEP_DISRUPTIONS = [
  {
    id: 'four-month-change', label: '4 month sleep change',
    aliases: ['4 month regression', '4 month regression', 'sleep regression'],
    minMonths: 3, maxMonths: 6,
    what: 'A baby who slept in long stretches starts waking every 1 to 2 hours, and naps get short.',
    why: 'Sleep permanently reorganizes into cycles with lighter stages, much closer to adult sleep. This is not a regression and it does not go back.',
    tryThis: ['Watch wake windows rather than the clock', 'Practice new motor skills in the daytime', 'Keep the last 20 minutes before sleep identical', 'Give a minute before going in'],
  },
  {
    id: 'eight-ten-month', label: '8 to 10 month disruption',
    aliases: ['8 month regression', '9 month regression', '10 month regression', '6 month regression'],
    minMonths: 6, maxMonths: 12,
    what: 'Night waking returns, often alongside standing up in the crib and crying at separation.',
    why: 'Crawling, pulling up, and separation awareness all land around the same time. New skills get rehearsed at 2 AM.',
    tryThis: ['Lots of daytime practice standing and getting back down', 'Keep goodbyes and night responses short and boring', 'Expect a few weeks, not a few days'],
  },
  {
    id: 'twelve-month', label: '12 month nap confusion',
    aliases: ['12 month regression', 'dropping to one nap'],
    minMonths: 10, maxMonths: 15,
    what: 'They start refusing the second nap, and it looks like time to drop to one.',
    why: 'This is usually a leap rather than a real transition. Most babies still need 2 naps until somewhere between 12 and 18 months.',
    tryThis: ['Hold the 2 nap schedule for a few weeks before switching', 'If nap two is refused, move bedtime earlier that day', 'Switch only when refusal has lasted consistently for 2 or more weeks'],
  },
  {
    id: 'eighteen-month', label: '18 month bedtime resistance',
    aliases: ['18 month regression', 'toddler bedtime battle'],
    minMonths: 16, maxMonths: 24,
    what: 'Bedtime becomes a fight, night waking returns, and the nap gets refused.',
    why: 'Independence, language, molars, and separation all arrive together. This one is mostly about autonomy rather than sleep need.',
    tryThis: ['Give real choices inside the routine', 'Keep the sequence identical', 'Do not drop the nap yet', 'Give warnings before each transition'],
  },
  {
    id: 'two-year', label: '2 year sleep disruption',
    aliases: ['2 year regression', 'climbing out of crib', 'night fears'],
    minMonths: 22, maxMonths: 36,
    what: 'Bedtime stalling, climbing out, early waking, and the first real night fears.',
    why: 'Imagination develops enough to invent things to be afraid of, and testing limits is a full time job at this age.',
    tryThis: ['Take the fear seriously rather than arguing with it', 'Hold the limit warmly and identically each time', 'Delay the move to a bed if you can, most children are not ready before three'],
  },
  {
    id: 'nap-drop', label: 'Dropping the last nap',
    aliases: ['no more naps', 'nap transition', 'quiet time'],
    minMonths: 30, maxMonths: 60,
    what: 'The nap starts pushing bedtime very late, or gets refused entirely.',
    why: 'Most children drop the last nap between 3 and 4, and the transition takes months rather than days.',
    tryThis: ['Cap the nap at an hour before dropping it', 'Replace it with quiet time in their room', 'Move bedtime earlier on no nap days', 'Expect to alternate for a while'],
  },
  {
    id: 'teen-late', label: 'Teenager cannot fall asleep',
    aliases: ['teen sleep', 'teenager tired', 'wont get up'],
    minMonths: 132, maxMonths: 240,
    what: 'They cannot fall asleep at a reasonable hour and cannot get up in the morning.',
    why: 'The body clock genuinely shifts later at puberty. A teen who is wide awake at 11 PM is usually not being difficult, and early school start times fight directly against their biology.',
    tryThis: ['Get bright light in their eyes in the morning, which is what actually moves the clock', 'Keep wake up time consistent, including weekends, within about an hour', 'Screens down in the last hour', 'Work backwards from the alarm to find a realistic bedtime'],
  },
];

export function findDisruption(query, months) {
  if (!query || typeof query !== 'string') return [];
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return SLEEP_DISRUPTIONS.filter((d) => {
    const inAge = typeof months !== 'number' || (months >= d.minMonths && months < d.maxMonths);
    const hay = [d.label, ...(d.aliases || []), d.what].join(' ').toLowerCase();
    return hay.includes(q) && inAge;
  });
}

export function getDisruptionsForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return [];
  return SLEEP_DISRUPTIONS.filter((d) => months >= d.minMonths && months < d.maxMonths);
}

/* ------------------------------------------------------------------
 * SETTLING APPROACHES
 *
 * This is the most opinionated territory in all of parenting, and the
 * app's job is to be useful rather than to take a side. Each approach is
 * described plainly, with what it asks of the parent and what the
 * evidence does and does not show.
 * ------------------------------------------------------------------ */

export const SETTLING_APPROACHES = [
  {
    id: 'responsive',
    label: 'Responsive settling',
    minMonths: 0, maxMonths: 240,
    summary: 'Respond to every waking and support them back to sleep however works, expecting the skill to arrive with development.',
    asksOfYou: 'The most night involvement, over the longest period.',
    goodFitWhen: ['You are comfortable with night waking', 'Your baby is under 4 to 6 months', 'The current setup is working for your family'],
    evidence: 'Always appropriate. There is no evidence that responding to a baby at night causes harm, and under about 4 months it is the only approach most guidance supports.',
  },
  {
    id: 'gradual',
    label: 'Gradual, parent present',
    minMonths: 4, maxMonths: 60,
    summary: 'Stay in the room and slowly reduce how much help you give, over days or weeks.',
    asksOfYou: 'Patience and consistency. Slower results, less crying.',
    goodFitWhen: ['Leaving them to cry is not something you are willing to do', 'You can be consistent over a few weeks', 'Your child settles better with you present'],
    evidence: 'Studies of gradual and parent present methods generally show improved sleep with high parent satisfaction. They typically take longer than more structured methods.',
  },
  {
    id: 'timed-checks',
    label: 'Timed checks',
    minMonths: 4, maxMonths: 60,
    summary: 'Leave the room and return at set intervals to reassure, gradually lengthening the gaps.',
    asksOfYou: 'Tolerating some crying, and being consistent enough that the pattern is learnable.',
    goodFitWhen: ['You want a faster change', 'Everyone caring for your child can be consistent', 'Your child is over about 4 to 6 months'],
    evidence: 'This is the most studied approach. Trials generally show it improves sleep within 1 to 2 weeks, and follow up studies have not found harm to attachment or to emotional development.',
  },
  {
    id: 'routine-only',
    label: 'Routine and timing only',
    minMonths: 0, maxMonths: 240,
    summary: 'Change nothing about how you respond at night. Change bedtime, wake windows, the wind down, and the sleep environment instead.',
    asksOfYou: 'Attention to timing during the day rather than anything at night.',
    goodFitWhen: ['You want to try the gentlest thing first', 'Bedtime is late or the day is disorganized', 'You are not ready to change night responses'],
    evidence: 'Consistent bedtime routines are associated with better sleep across studies, and this is often enough on its own. It is the reasonable first thing to try.',
  },
];

export function getApproachesForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return [];
  return SETTLING_APPROACHES.filter((a) => months >= a.minMonths && months < a.maxMonths);
}

export const SETTLING_FRAMING =
  'There is no single right answer here, and families who choose differently both end up with ' +
  'children who sleep. What matters most is picking something you can actually be consistent with, ' +
  'and that everyone caring for your child does the same thing. If you are not ready to change ' +
  'anything at night, that is a legitimate choice too.';

/* ------------------------------------------------------------------
 * TIMERS
 * Referenced by rightNow.js. Each is something the app can launch with
 * one tap while a parent has one hand free.
 * ------------------------------------------------------------------ */

export const TIMER_PRESETS = [
  { id: 'soothe-five', label: 'Stick with one thing', minutes: 5, direction: 'down',
    why: 'Cycling through 6 soothing techniques in 2 minutes is its own kind of overstimulating. Pick one and give it a real 5 minutes.' },
  { id: 'parent-break', label: 'Your 5 minutes', minutes: 5, direction: 'down',
    why: 'Baby safe in the crib, you out of the room. This is a legitimate strategy, not a failure.' },
  { id: 'settle-check', label: 'Wait before going in', minutes: 2, direction: 'down',
    why: 'Some wakings resolve on their own. Going in during a light stage can fully wake a baby who was heading back down.' },
  { id: 'wake-window', label: 'Wake window', minutes: null, direction: 'down', dynamic: 'wakeWindow',
    why: 'Counts down the awake time typical for their age, so you can start the wind down before they are overtired.' },
  { id: 'feed-timer', label: 'Feed timer', minutes: null, direction: 'up',
    why: 'Counts up, and records which side you started on.' },
  { id: 'upright-after-feed', label: 'Stay upright', minutes: 30, direction: 'down',
    why: '30 minutes upright after a feed helps with spitting up. Never prop the mattress instead.' },
  { id: 'wind-down', label: 'Wind down', minutes: 25, direction: 'down',
    why: 'The same short sequence in the same order does more than any single technique.' },
  { id: 'mealtime', label: 'Mealtime', minutes: 20, direction: 'down',
    why: 'Short and pleasant beats long and tense. A drawn out meal teaches that eating is unpleasant.' },
  { id: 'focus-block', label: 'Focus block', minutes: 15, direction: 'down',
    why: 'A short visible block with a real break after it, so time becomes something they can see.' },
  { id: 'decompress', label: 'Decompress', minutes: 30, direction: 'down',
    why: 'No questions, no demands, food available. The first half hour after school is for recovery.' },
];

export function getTimer(id) {
  if (!id) return null;
  return TIMER_PRESETS.find((t) => t.id === id) || null;
}

/** A wake window timer needs the child's age to know how long to run. */
export function resolveTimer(id, months) {
  const t = getTimer(id);
  if (!t) return null;
  if (t.dynamic === 'wakeWindow') {
    const band = getWakeWindows(months);
    if (!band || band.naps.typical === 0) return null;
    return { ...t, minutes: band.midWindow, note: `Typical for ${band.label} is about ${formatDuration(band.midWindow)} awake between naps.` };
  }
  return t;
}

export default { SLEEP_NEEDS, WAKE_WINDOWS, buildDay, SLEEP_DISRUPTIONS, SETTLING_APPROACHES, TIMER_PRESETS };

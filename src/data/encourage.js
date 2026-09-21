/**
 * Ready Set Grow: A Word After You Log Something
 * ------------------------------------------------------------------
 * She asked for encouragement to appear after logging, different on
 * different days. This is that.
 *
 * THE LINE THAT MATTERS MOST IN THIS FILE
 * Nothing here praises a number for moving. Not weight, not blood
 * pressure, not sleep hours, not blood sugar. A postpartum body being
 * told well done for going down is how an app starts quietly running
 * somebody's relationship with food, and that is not what this is for.
 *
 * What gets praised is the showing up. Recording it, going outside,
 * reading two pages, taking the medicine, having twenty minutes that
 * were hers. Those are things she did. A number on a scale is not.
 *
 * So the weight lines below acknowledge the act of keeping track and
 * say nothing whatsoever about the direction, and there is no version
 * of them that does.
 *
 * HOW A DAY PICKS ITS LINE
 * Seeded on the date and the log type, so the same log on the same day
 * gives the same words rather than reshuffling under her, and tomorrow
 * gives different ones.
 */

export const ENCOURAGE = {

  /* ---- looking after herself ---- */
  'mom-moved': [
    'That counted. All of it counts.',
    'Your body did something for you today rather than for everybody else.',
    'Movement on a day like this is not a small thing.',
    'Whatever that was, it was more than nothing, and nothing was very much on the table.',
  ],
  'mom-outside': [
    'Daylight does something no amount of trying harder does.',
    'Out of the house counts as a win. It is allowed to be the whole win.',
    'Fresh air, and you made it happen on a day with a lot in it.',
    'The doorstep counts. It always counted.',
  ],
  'mom-read': [
    '2 pages is still reading. You kept a bit of your own head today.',
    'Something that was not about anybody else. Good.',
    'That is you staying a person as well as a parent.',
  ],
  'mom-forme': [
    '20 minutes that were yours. That is not selfish, it is maintenance.',
    'You are allowed to need care as well as give it.',
    'Noted. This is the thing that runs out first and it just got topped up.',
  ],

  /* ---- her health ---- */
  /* Every one of these has to survive being read on a weight card by
     somebody watching for a verdict. No direction words at all, and
     that includes ones that only mean direction by accident: "down
     here whenever you want it" reads as the weight going down. */
  'mom-weight': [
    'Recorded. Nothing else, and no comment on the number.',
    'Kept for you, and it will never have an opinion about it.',
    'Logged. That is all this does.',
    'Recorded with the date, which is the only thing this is for.',
  ],
  'mom-bp': [
    'Kept. A run of these is exactly what a provider wants to see.',
    'Worth having written down rather than remembered.',
    'Recorded, with the date, which is the part memory loses.',
  ],
  'mom-sugar': [
    'Recorded. Your numbers are between you and your provider.',
    'Kept with the time, which is the bit that makes a pattern readable later.',
  ],
  'mom-sleep': [
    'Broken sleep is a physical injury, not a character flaw. Lower every other bar today.',
    'Written down. On the thin nights, please know the standard drops with the sleep.',
    'That is going to show up in your patience later, and it will not be your fault.',
  ],
  'mom-mood': [
    'Thank you for being honest with it. That is harder than it looks.',
    'Said out loud, even just here. That is how it stops being only yours.',
    'Noticing how you are is the first half of doing anything about it.',
  ],
  'mom-medication': [
    'Timed and kept, so you are not doing that arithmetic while exhausted.',
    'Recorded, which is the whole point on the days that blur.',
  ],

  /* ---- feeding ---- */
  'mom-breastfeeding': [
    'Written down. Next time the app remembers the side so you do not have to.',
    'That is another one done, at whatever hour it was.',
    'Fed is fed, and you did it again.',
  ],
  'mom-pumping': [
    'That is work, and it is rarely counted as work. It is counted here.',
    'Kept. Every one of those took time you did not really have.',
  ],
  'mom-bottle': [
    'Fed is fed. It was always fed is fed.',
    'Down and noted.',
  ],
  'mom-stash': [
    'Future you is going to be glad that is in the freezer.',
    'Labeled and logged, so the oldest gets used first.',
  ],

  /* ---- after the birth ---- */
  'mom-bleeding': [
    'Kept, with the date. If it changes direction you will be able to see it rather than guess.',
    'Written down, which is what makes the phone call easy if you need to make one.',
  ],
  'mom-pain': [
    'Recorded. Pain that is getting worse rather than better is worth saying out loud.',
    'Noted. You are not making a fuss by writing it down.',
  ],
  'mom-incision': [
    'Kept. Comparing day to day is far more useful than trying to remember.',
    'Written down, and worth a photo in good light alongside it.',
  ],
  'mom-temp': [
    'Recorded, with the time.',
    'Kept. If it climbs you will have the run of numbers to hand.',
  ],

  /* ---- pregnancy ---- */
  'mom-kicks': [
    'Counted and kept. Knowing their normal is the whole value of this.',
    'Written down, with the time it took.',
  ],
  'mom-contraction': [
    'Timed. Keep going and the pattern will show itself.',
    'Recorded, which beats counting in your head through one.',
  ],
  'mom-appointment': [
    'Written down while it is fresh, including the thing you will otherwise forget to ask.',
    'Kept. The questions at 2am are the ones that vanish in the room.',
  ],
};

/* Used when a log type has no lines of its own, including every child
   log, so nothing ever saves in silence. */
export const ENCOURAGE_ANY = [
  /* This read "Down. You are keeping track of a lot." and meant
     "written down". On its own it reads as a number going down, which
     is the one word the weight rule at the top of this file forbids,
     and ENCOURAGE_ANY is the fallback for every log that has no lines
     of its own. A line that can be misread as a comment on a number
     does not belong in the list that catches everything. */
  'Written down. You are keeping track of a lot.',
  'Noted, with the time on it.',
  'Kept. Small records add up to something useful later.',
  'That is one more thing you will not have to hold in your head.',
];

/* A run of self care in one week, which is worth saying out loud
   because it is the thing people never notice themselves doing. */
export const ENCOURAGE_RUNS = {
  self: 'That is {n} times this week you have done something for yourself. That is a pattern, '
    + 'and it is a good one.',
  outside: 'You have been outside {n} times this week.',
  moved: 'That is {n} times moving this week.',
};

/* Which log types count toward the run lines. */
export const SELFCARE_TYPES = ['mom-moved', 'mom-outside', 'mom-read', 'mom-forme'];

/**
 * One line, chosen by the day so it is steady within a day and
 * different tomorrow.
 */
export function encourageFor(typeId, seed) {
  const list = ENCOURAGE[typeId] || ENCOURAGE_ANY;
  const s = String(seed || '');
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  for (let i = 0; i < String(typeId || '').length; i++) {
    h = (h * 31 + String(typeId).charCodeAt(i)) >>> 0;
  }
  return list[h % list.length];
}

export function runLine(kind, n) {
  const t = ENCOURAGE_RUNS[kind];
  if (!t || n < 2) return '';
  return t.replace('{n}', n);
}

/* What Willow is asked for when she is available to write it instead. */
export const ENCOURAGE_SYSTEM =
  'You are Willow, writing one short warm line to a parent who has just recorded something in '
  + 'their own log. One or 2 sentences, plain, never bubbly, never an exclamation mark. Praise '
  + 'the fact they showed up or kept track, never a number and never a direction a number moved. '
  + 'Say nothing at all about weight going up or down, about size, or about food. Do not give '
  + 'advice unless it is the obvious kind comfort. Never diagnose. Return the line and nothing else.';

export function encouragePrompt(typeId, label, context) {
  return 'They just logged: ' + label + '.'
    + (context ? '\n\nRecently: ' + context : '')
    + '\n\nWrite the one line.';
}

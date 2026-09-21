/**
 * Ready Set Grow: What A Child's Profile Puts First
 * ------------------------------------------------------------------
 * She set the order herself, and then agreed with the one change I
 * argued for: the daily check in goes back to the top rather than the
 * bottom. It is thirty seconds, it happens every day, and it is the
 * thing that makes everything else in the app smart over time. A daily
 * habit that requires scrolling past nine sections is a daily habit
 * that dies in a week.
 *
 * THEN SHE ASKED FOR THE PART I HAD ONLY FLOATED: that the order should
 * follow the child's age. She is right, and the example she gave is the
 * proof. For a newborn, Everyday care is the most opened screen in the
 * app. For a twelve year old, Feeding and Care topics are almost never
 * touched, while How their mind works matters enormously.
 *
 * THE PRINCIPLE, WHICH IS THE SAME AT EVERY AGE:
 * how often would a parent of a child THIS age actually touch this,
 * decaying down the page. Daily at the top, weekly in the middle, look
 * it up at the bottom.
 *
 * WHAT THIS IS NOT. Nothing is ever hidden by age. Every section exists
 * on every profile, and the order is the only thing that moves. A
 * parent who wants the safety screen for their toddler can still reach
 * it, it simply is not sitting above the thing they open every morning.
 * Hiding is what the milestones and development guidance rules do, and
 * they hide only when there is genuinely nothing behind the link.
 */

export const CHILD_SECTIONS = [
  { id: 'checkin', label: '' },        // drawn as a card, no heading
  { id: 'plan', label: '' },           // likewise
  { id: 'logs', label: 'Log it as it happens' },
  { id: 'care', label: 'Everyday care' },
  { id: 'together', label: 'Things to do together' },
  { id: 'where', label: 'Where they are now' },
  { id: 'mind', label: 'How their mind works' },
  { id: 'health', label: 'Health' },
  { id: 'safety', label: 'If something happens' },
  { id: 'memories', label: '' },       // has its own heading inside
];

/* The default, which is hers exactly. Every age below is a small
   rearrangement of this rather than its own list, so a section added
   here shows up everywhere and cannot be forgotten in one band. */
const BASE = CHILD_SECTIONS.map((s) => s.id);

/* Moves one id to sit immediately before another, leaving everything
   else exactly where it was. */
function moveBefore(list, id, beforeId) {
  const out = list.filter((x) => x !== id);
  const at = out.indexOf(beforeId);
  if (at === -1) return out.concat([id]);
  return out.slice(0, at).concat([id], out.slice(at));
}

export function childSectionOrder(months) {
  let order = BASE.slice();
  if (typeof months !== 'number') return order;

  /* UNDER ONE. The day is feeds, diapers and naps, and Everyday care
     holds the rhythm builder that a parent of a newborn opens more than
     anything else in the app. Activities and milestones can wait. */
  if (months < 12) {
    order = moveBefore(order, 'care', 'logs');
    order = moveBefore(order, 'health', 'together');
    return order;
  }

  /* ONE TO THREE. Logging is still constant, the rhythm still matters,
     and this is where behavior starts being the daily question, so
     How their mind works climbs above the reference material. */
  if (months < 36) {
    order = moveBefore(order, 'mind', 'where');
    return order;
  }

  /* THREE TO SIX. Her order as written. Play and doing things together
     is the center of the day at this age. */
  if (months < 72) {
    order = moveBefore(order, 'together', 'care');
    return order;
  }

  /* SIX TO TWELVE. School age. Feeding and naps are settled, so
     Everyday care drops, and understanding how they think is what a
     parent is actually reading about. */
  if (months < 144) {
    order = moveBefore(order, 'mind', 'where');
    order = moveBefore(order, 'care', 'health');
    return order;
  }

  /* TWELVE AND UP. How their mind works is the whole game now, memories
     matter more as the years behind them pile up, and Everyday care is
     nearly never opened.

     Mind sits just BELOW logging rather than above it. Above it was the
     first thing I tried and it pushed Log it into the quiet half, which
     is wrong: logging a mood or a bad night is still something a parent
     DOES rather than something they look up, and actions belong in the
     top half at every age. */
  order = moveBefore(order, 'mind', 'together');
  order = moveBefore(order, 'memories', 'where');
  order = moveBefore(order, 'care', 'health');
  return order;
}

/* WHERE THE PAGE BREAKS IN HALF.
 *
 * Ten headings in a column reads as one undifferentiated list however
 * it is ordered. So the page has two halves you can feel: the things
 * somebody touches today, drawn with some presence, and everything
 * else, drawn quieter and tighter.
 *
 * The break is not a fixed position, because which sections are daily
 * depends on the age. It is whatever comes after the last section in
 * DAILY below, in whatever order that age produced. */
const DAILY = ['checkin', 'plan', 'logs', 'care'];

export function isDailySection(id, months) {
  if (id === 'care') {
    /* Everyday care is daily for a baby and reference for a teenager,
       which is the clearest case for why this is not a fixed list. */
    return typeof months !== 'number' || months < 36;
  }
  return DAILY.indexOf(id) !== -1;
}

/* The quiet half gets one line saying what it is, so the change of
   weight reads as deliberate rather than as the page running out of
   steam. */
export const REST_LABEL = 'Everything else about them';

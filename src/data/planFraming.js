/**
 * Ready Set Grow: The Words Around Today's Plan
 * ------------------------------------------------------------------
 * She asked whether Today's Plan would change daily once the AI was
 * connected, and she chose the hybrid answer: the activities keep
 * coming from her own library, and Willow writes fresh words around
 * them each day.
 *
 * WHY THE ACTIVITIES ARE NOT GENERATED
 * Everything in the activity library was written for a specific age
 * band, checked against what a child that age can actually do, and is
 * safe to hand a tired parent at seven in the morning. A model asked to
 * invent an activity for a fourteen month old will cheerfully suggest
 * something involving scissors. So the library picks what to do, and
 * that is not negotiable.
 *
 * WHAT WILLOW ACTUALLY ADDS
 * The thing a plan made of three library entries cannot do on its own:
 * say why THESE THREE, TODAY, for THIS CHILD. That is the difference
 * between a list and somebody having thought about your morning.
 *
 * ONE PIECE OF WRITING PER CHILD PER DAY.
 * Not one per item. Four calls a child a day would eat the budget that
 * the chat needs, and a parent with two children would burn through it
 * before lunch.
 *
 * AND THE RULE THAT HOLDS EVERYWHERE ELSE IN THIS APP HOLDS HERE:
 * the written version ships, Willow replaces it when she can, and the
 * screen is never blank while she thinks.
 */

/* Openers by age band. Each one has to make sense standing alone,
   because on any day the model is unavailable this IS the framing.
   They talk about the shape of the day rather than the activities, so
   they are true whatever the library picked. */
const FRAMING_BY_BAND = {
  baby: [
    'At this age the plan is mostly you. Your face, your voice, and the same few things often '
    + 'enough that they start to expect them. None of it has to be done properly.',
    'Everything below is optional. A day where you fed them, changed them and held them is a '
    + 'complete day at this age, and the rest is a bonus if you have it in you.',
    'They are learning what the world is like from how you handle it, which means a calm 10 '
    + 'minutes counts for more than a perfect hour.',
  ],
  toddler: [
    'Expect about half of this to work. A toddler who refuses the activity and then plays with '
    + 'the box it came in has still had the good part of it.',
    'Two of these will land and one will not, and which one is which changes daily. Follow '
    + 'whichever one they are still interested in after 2 minutes.',
    'At this age the point is doing it alongside you rather than doing it right. Let them lead '
    + 'it somewhere odd, that is the bit their brain is actually using.',
  ],
  preschool: [
    'This is the age where they want to know why, constantly. Any of these will work better if '
    + 'you let the questions take it off course.',
    'Pick one. A whole plan done badly because everybody is tired is worse than one thing done '
    + 'properly while you are both enjoying it.',
    'They can hold a plan in their head now, so telling them what is coming next makes most of '
    + 'today easier than just starting it.',
  ],
  school: [
    'They have been following instructions from somebody else all day, so anything here works better '
    + 'if they get to choose how it goes.',
    'The talking matters more than the activity at this age. Most of these are really just an '
    + 'excuse to be next to each other for 20 minutes.',
    'Some of this will feel babyish to them and some will feel about right. Let them tell you '
    + 'which, it is useful information.',
  ],
  tween: [
    'Anything that feels like a scheduled activity will be rejected on principle at this age. '
    + 'Use these as something to do while you talk, not as the point.',
    'Being in the same room doing separate things still counts. Most of what they tell you at '
    + 'this age arrives sideways rather than when you ask.',
    'They are working out who they are away from you, which is the job. Staying available '
    + 'without hovering is most of what today needs from you.',
  ],
  teen: [
    'The plan at this age is mostly being reachable. Pick whichever of these gives you a reason '
    + 'to be in the same space without it being a conversation they have to perform.',
    'They will not want any of this framed as an activity. A car journey, cooking, or a walk is '
    + 'where the actual talking happens.',
    'Most of parenting a teenager is short moments you did not plan. These are just ways of '
    + 'being around for more of them.',
  ],
};

export function planBand(months) {
  if (months == null) return 'preschool';
  if (months < 12) return 'baby';
  if (months < 36) return 'toddler';
  if (months < 72) return 'preschool';
  if (months < 132) return 'school';
  if (months < 168) return 'tween';
  return 'teen';
}

export function writtenFraming(months, seed) {
  const list = FRAMING_BY_BAND[planBand(months)] || FRAMING_BY_BAND.preschool;
  const n = String(seed || '').split('').reduce((a, ch) => a + ch.charCodeAt(0), 0);
  return list[n % list.length];
}

/* What Willow is asked. She is given the actual titles so she can refer
   to them, which is the whole reason this is worth a model call. */
export function planFramingPrompt(ctx) {
  const c = ctx || {};
  const items = (c.items || []).filter(Boolean);
  return [
    'A parent is about to open the plan for one of their children in a parenting app.',
    'Write the short paragraph that sits at the top of it.',
    c.childName ? 'The child: ' + c.childName + (c.ageLabel ? ', ' + c.ageLabel : '') + '.' : '',
    items.length ? 'What the plan actually holds today: ' + items.join('; ') + '.' : '',
    c.focus ? 'The development focus for their age right now: ' + c.focus + '.' : '',
    '',
    '2 or 3 sentences, 60 words maximum.',
    'Say something true about doing THESE things with a child THIS age today. You may name one '
    + 'of them. Do not list them all back, they are already on the screen underneath.',
    'Speak to the parent, not about them.',
    'Do not invent an activity that is not in the list, and do not suggest an alternative one.',
    'Do not promise an outcome, do not tell them it will be fun, and do not tell them to enjoy it.',
    'No exclamation marks, no emoji, no headings, no sign off.',
    'Do not use dashes as punctuation, use commas and full stops.',
    'Return the paragraph only.',
  ].filter(Boolean).join('\n');
}

/* The eyebrow above it. Named rather than generic, because "Today" on a
   screen called Today's Plan says nothing. */
export const PLAN_FRAMING_LABEL = 'Willow on today';

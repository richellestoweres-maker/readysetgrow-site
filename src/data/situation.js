/**
 * Ready Set Grow: What The App Knows About Her Situation
 * ------------------------------------------------------------------
 * She said it plainly: none of the postpartum content applies to her
 * any more, and the app was showing it anyway. To give good guidance
 * it has to know where somebody actually is.
 *
 * THE RULE THIS FILE EXISTS TO ENFORCE
 * Nothing here is a profile of her. It is a set of switches that decide
 * which parts of the app are worth showing. Ticking "breastfeeding"
 * brings pumping and supply to the front. Leaving it unticked puts it
 * away. That is the whole job.
 *
 * WHY EVERY ONE IS OPTIONAL AND WHY NONE OF IT IS REQUIRED
 * Some of these are private in a way that matters, such as how
 * somebody is trying to conceive, or that they lost a pregnancy. The
 * app never requires an answer, never asks twice, and never puts any
 * of it in front of anybody else. Skipping the whole section leaves an
 * app that works exactly as it does today.
 *
 * ADOPTION, FOSTERING AND STEP PARENTING
 * She asked for this specifically. A child who arrived at four does
 * not have a newborn history in this house, and an app that opens on
 * "your birth story" is telling that family it was not built for them.
 * The switch changes the framing, never the developmental content,
 * because a four year old is a four year old however they got here.
 */

export const SITUATION_INTRO =
  'None of this is required, and none of it is ever shown to anybody else. It only decides which '
  + 'parts of the app are worth your time. Leave anything blank and nothing is missing.';

export const SITUATION_PRIVACY =
  'This stays on your account. The community only ever sees your username, never any of this.';

/* ------------------------------------------------------------------
 * WHERE SHE IS RIGHT NOW
 * ------------------------------------------------------------------ */

export const PARENT_STAGES = [
  { id: 'expecting', label: 'Expecting',
    help: 'Pregnancy week by week, what to ask at appointments, and getting ready.' },
  { id: 'trying', label: 'Trying to conceive',
    help: 'Cycle tracking comes forward, with the fertile window and what actually affects it.' },
  { id: 'postpartum', label: 'In the first year after birth',
    help: 'Recovery, the fourth trimester, and how you are actually doing.' },
  { id: 'breastfeeding', label: 'Breastfeeding',
    help: 'Latch, supply, and what to do when it hurts.' },
  { id: 'pumping', label: 'Pumping',
    help: 'Flange fitting, schedules, storage, and why frozen milk tastes like soap.' },
  { id: 'formula', label: 'Formula feeding or combination feeding',
    help: 'How much, how often, and mixing safely. Fed is fed.' },
];

/* Only asked once Expecting or Trying is ticked, and it is the most
   private question in the app, so it says so and offers a way out. */
export const CONCEIVE_PATHS = [
  { id: 'natural', label: 'On our own' },
  { id: 'tracking', label: 'Tracking and timing' },
  { id: 'meds', label: 'With medication' },
  { id: 'iui', label: 'IUI' },
  { id: 'ivf', label: 'IVF' },
  { id: 'donor', label: 'With a donor' },
  { id: 'surrogacy', label: 'Surrogacy' },
  { id: 'private', label: 'Rather not say' },
];

export const CONCEIVE_NOTE =
  'This only changes which appointments, timelines and terms the app uses, so it is talking about '
  + 'your actual situation rather than a generic one. Rather not say is a complete answer.';

/* ------------------------------------------------------------------
 * HOW SHE PARENTS
 * ------------------------------------------------------------------ */

export const PARENT_ROLES = [
  { id: 'birth', label: 'Birth parent' },
  { id: 'adoptive', label: 'Adoptive parent' },
  { id: 'foster', label: 'Foster parent' },
  { id: 'step', label: 'Step parent' },
  { id: 'kinship', label: 'Grandparent or kinship carer' },
  { id: 'guardian', label: 'Guardian' },
];

export const SUPPORT_SHAPE = [
  { id: 'solo', label: 'Doing this on my own' },
  { id: 'partner', label: 'With a partner' },
  { id: 'coparent', label: 'Co-parenting across two homes' },
  { id: 'family', label: 'With family close by' },
];

/* ------------------------------------------------------------------
 * PER CHILD
 * A child can have arrived in a way that changes the framing without
 * changing a single thing about their development.
 * ------------------------------------------------------------------ */

export const CHILD_ARRIVAL = [
  { id: 'adopted', label: 'Adopted' },
  { id: 'fostered', label: 'In foster care with us' },
  { id: 'step', label: 'My step child' },
  { id: 'kinship', label: 'In our care through family' },
  { id: 'early', label: 'Born early' },
];

export const CHILD_ARRIVAL_NOTE =
  'This changes how the app talks about their early days, never what it says about their '
  + 'development. A four year old is a four year old however they got here.';

/* ------------------------------------------------------------------
 * WHAT THE SWITCHES ACTUALLY DO
 *
 * One place, so no screen has to work it out for itself and no screen
 * can disagree with another about whether something is relevant.
 * ------------------------------------------------------------------ */

export function hasStage(situation, id) {
  const s = (situation && situation.stages) || [];
  return s.indexOf(id) !== -1;
}

/* Age in months of the youngest child, or null. Used so the app can be
   right about somebody who has not ticked anything at all. */
export function youngestMonths(ages) {
  const list = (ages || []).filter((m) => typeof m === 'number' && m >= 0);
  if (!list.length) return null;
  return Math.min.apply(null, list);
}

export function showsPostpartum(situation, ages) {
  if (hasStage(situation, 'postpartum')) return true;
  if (hasStage(situation, 'expecting')) return true;
  const y = youngestMonths(ages);
  return y != null && y < 12;
}

export function showsFeeding(situation, ages) {
  if (hasStage(situation, 'breastfeeding') || hasStage(situation, 'pumping')
    || hasStage(situation, 'formula')) return true;
  const y = youngestMonths(ages);
  return y != null && y < 24;
}

export function showsPregnancy(situation, ages) {
  if (hasStage(situation, 'expecting')) return true;
  const y = youngestMonths(ages);
  return y != null && y < 0;
}

export function showsTrying(situation) {
  return hasStage(situation, 'trying');
}

/* The cycle card is the odd one out. Somebody who is expecting does not
   want a fertile window, she wants how far along she is. */
export function cycleMode(situation) {
  if (hasStage(situation, 'expecting')) return 'pregnant';
  if (hasStage(situation, 'trying')) return 'trying';
  return 'cycle';
}

/* Said on her profile when nothing is ticked, so the section reads as
   an invitation rather than an empty box. */
export const SITUATION_EMPTY =
  'The app is guessing from your children’s ages at the moment. Tell it where you actually are '
  + 'and it will stop showing you things that finished a while ago.';

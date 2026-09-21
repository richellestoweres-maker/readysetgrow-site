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

/* Things she lives with that change what the app should offer her.
   Ticking one turns on a log she would otherwise never be shown, and
   nothing here is ever presented as a diagnosis or shared anywhere. */
export const PARENT_CONDITIONS = [
  { id: 'diabetes', label: 'Diabetes',
    help: 'Turns on a blood sugar log. The app never sets a target, your provider does.' },
  { id: 'gestational', label: 'Gestational diabetes',
    help: 'The same log, for the version that arrives with a pregnancy and usually leaves after it.' },
  { id: 'bloodPressure', label: 'High blood pressure, or I have been asked to watch it',
    help: 'Keeps the blood pressure log to hand rather than buried.' },
  { id: 'thyroid', label: 'A thyroid condition',
    help: 'Common after birth and easy to mistake for ordinary exhaustion.' },
  { id: 'anemia', label: 'Low iron or anemia',
    help: 'Also easy to mistake for ordinary exhaustion, and worth tracking alongside how you feel.' },
];

export function hasCondition(sit, id) {
  const s = sit || {};
  return Array.isArray(s.conditions) && s.conditions.indexOf(id) !== -1;
}

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
  /* Added because the app had no way at all to say this, which meant
     every non birth parent was either mistaken for one or invisible. */
  { id: 'partner', label: 'My partner gave birth' },
  { id: 'adoptive', label: 'Adoptive parent' },
  { id: 'foster', label: 'Foster parent' },
  { id: 'step', label: 'Step parent' },
  { id: 'kinship', label: 'Grandparent or kinship carer' },
  { id: 'guardian', label: 'Guardian' },
];

/* WHO THEY ARE, AND WHO THEY ARE TO THE CHILD.
 *
 * She asked for this directly: the app should find out who is holding
 * the phone and what they are to the child, rather than quietly
 * assuming a woman who recently gave birth.
 *
 * TWO QUESTIONS, NOT ONE, BECAUSE THEY ARE GENUINELY DIFFERENT.
 *
 * CALLED_BY is what the child calls them. It is the warm one, it is
 * the one that shows up on screen, and it is the one that covers the
 * grandmother, the auntie, the step dad and the foster carer without
 * any of them having to file themselves under a category first.
 *
 * REFERS_TO is how the app and Willow should write about them. She
 * asked for male or female, and the honest reason this is phrased as
 * words rather than as a sex is that what the app needs is not their
 * sex, it is which pronoun to put in a sentence. Getting that wrong in
 * a piece of writing that is supposed to feel like it knows them is a
 * small thing that lands hard.
 *
 * NEITHER IS REQUIRED. Skipping both leaves the app writing the way it
 * did before, which is with the name and no pronoun at all.
 *
 * NOTE ON THE BODY CONTENT. This does not gate anything medical. What
 * gates bleeding, stitches and blood pressure is having given birth,
 * which is asked separately and stays that way.
 */

export const CALLED_BY = [
  { id: 'mom', label: 'Mom' },
  { id: 'dad', label: 'Dad' },
  { id: 'mama', label: 'Mama' },
  { id: 'papa', label: 'Papa' },
  { id: 'grandma', label: 'Grandma' },
  { id: 'grandpa', label: 'Grandpa' },
  { id: 'nana', label: 'Nana' },
  { id: 'pawpaw', label: 'Pawpaw' },
  { id: 'auntie', label: 'Auntie' },
  { id: 'uncle', label: 'Uncle' },
  { id: 'byname', label: 'They call me by my name' },
];

export const CALLED_BY_OTHER_NOTE =
  'Not on the list? Type whatever they actually call you. Every family has its own word for this '
  + 'and yours is the right one.';

export const REFERS_TO = [
  { id: 'she', label: 'She and her', help: 'Woman or mother.' },
  { id: 'he', label: 'He and him', help: 'Man or father.' },
  { id: 'they', label: 'They and them', help: 'Or if you would rather not pick one.' },
  { id: 'name', label: 'Just use my name', help: 'The app writes around it.' },
];

export const REFERS_TO_NOTE =
  'This is only so the app writes about you correctly. It changes nothing about what you are shown, '
  + 'and it is never shared with anybody. What you are shown is decided by a separate question, '
  + 'because guessing that from a pronoun would be wrong in both directions.';

/* The version that actually goes on the screen. The long one above is
   kept because the privacy page quotes this kind of thing properly,
   and because three reassurances stacked in one card was the exact
   thing she objected to. */
export const REFERS_TO_SHORT = 'Only so the app writes about you correctly.';

/* The label to actually print, given what they picked and whatever they
   typed if they picked nothing from the list. */
export function calledByLabel(parent) {
  const p = parent || {};
  const custom = (p.calledByOther || '').trim();
  if (custom) return custom;
  const m = CALLED_BY.filter((x) => x.id === p.calledBy)[0];
  if (!m || m.id === 'byname') return '';
  return m.label;
}

/* Subject, object and possessive, so a sentence can be written without
   the caller having to remember three lookups. Empty strings when they
   asked for their name instead, which is the signal to write around it
   rather than to guess. */
export function pronounsFor(parent) {
  const id = (parent || {}).refersTo || '';
  if (id === 'she') return { subject: 'she', object: 'her', possessive: 'her', plural: false };
  if (id === 'he') return { subject: 'he', object: 'him', possessive: 'his', plural: false };
  if (id === 'they') return { subject: 'they', object: 'them', possessive: 'their', plural: true };
  return { subject: '', object: '', possessive: '', plural: false };
}

/* One line for Willow, so she stops calling everybody she. Returns an
   empty string when nothing was picked, which leaves Willow writing the
   way she always did. */
export function caretakerLine(parent) {
  const p = parent || {};
  const bits = [];
  const called = calledByLabel(p);
  if (called) bits.push('Their child calls them ' + called + '.');
  const pr = pronounsFor(p);
  if (pr.subject) {
    bits.push('Refer to them as ' + pr.subject + ' and ' + pr.object + '.');
  } else if (p.refersTo === 'name') {
    bits.push('They asked not to be given a pronoun. Use their name, or write around it.');
  }
  if (!bits.length) return '';
  return bits.join(' ');
}

export const SUPPORT_SHAPE = [
  { id: 'solo', label: 'Doing this on my own' },
  { id: 'partner', label: 'With a partner' },
  { id: 'coparent', label: 'Co-parenting across 2 homes' },
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
  { id: 'exchange', label: 'Here as an exchange student' },
  { id: 'early', label: 'Born early' },
];

/* Set per child rather than per family on purpose. Plenty of houses
   hold a child somebody gave birth to and a child who arrived another
   way, and an app that asks the question once, at the family level,
   tells half of those children they are the exception. */
export const ARRIVAL_IS_PER_CHILD = true;

export const CHILD_ARRIVAL_NOTE =
  'This changes how the app talks about their early days, never what it says about their '
  + 'development. A 4 year old is a 4 year old however they got here.';

/* ------------------------------------------------------------------
 * WHAT THE SWITCHES ACTUALLY DO
 *
 * One place, so no screen has to work it out for itself and no screen
 * can disagree with another about whether something is relevant.
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------
   DOES THE BODY HALF APPLY TO YOU

   This app has a half that is about the parent's own body: periods,
   cycles, pregnancy, and recovering from a birth. It was shown to
   everybody, which meant a father opened the app and was invited to
   log a period.

   IT IS ASKED, NOT GUESSED
   Guessing from a pronoun or from being called Dad would be wrong in
   both directions and insulting in at least one of them. An adoptive
   mother has no birth to recover from. A father may be the one
   holding the app while his wife recovers. A trans man may want every
   bit of it. There is no reliable inference here, there is only a
   question, so the app asks once, plainly, and never again.

   AND THE ANSWER IS NOT A GENDER
   The question is about which screens are useful, not about who
   somebody is. It is worded that way on purpose and stored that way
   too, which is why this field is called bodyCare rather than sex.
   ------------------------------------------------------------------ */
export const BODY_CARE_ASK = {
  title: 'Is the body half of this for you',
  body: 'Part of this app is about your own body rather than your child\u2019s. Periods and cycles, '
    + 'pregnancy, and recovering after a birth. It is not right for everybody who uses this.',
  yes: 'Yes, show me that',
  no: 'Not for me',
  after: 'You can change this whenever you like, on your own profile.',
};

export const BODY_CARE_SETTING = {
  title: 'The body half',
  on: 'On. Cycles, pregnancy and recovery are on your Home.',
  off: 'Off. None of that shows anywhere.',
  note: 'This is about which screens are useful to you, not about who you are, which is why it is a '
    + 'question rather than something the app works out from your name.',
};

/* '' not asked yet, 'yes' or 'no' once they have answered. */
export function bodyCare(parent) {
  const v = String((parent || {}).bodyCare || '');
  return (v === 'yes' || v === 'no') ? v : '';
}

export function showsBodyHalf(parent) {
  return bodyCare(parent) === 'yes';
}

export function askedBodyHalf(parent) {
  return bodyCare(parent) !== '';
}

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

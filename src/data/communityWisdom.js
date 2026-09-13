/**
 * Ready Set Grow: Community Wisdom
 * ------------------------------------------------------------------
 * The room where parents say what actually worked for them.
 *
 * WHY THIS FILE EXISTS SEPARATELY
 * The rest of the app speaks in sourced guidance. This part speaks in
 * lived experience, and the two are not the same thing. Blending them
 * would be dishonest in both directions: it would dress up a hunch as
 * medicine, and it would bury things that genuinely helped somebody
 * because no one has run a trial on them.
 *
 * THE RULE
 * Every entry carries an evidence label and the app shows it. Nothing
 * is hidden for being unstudied, and nothing unstudied is presented as
 * established. A parent deciding what to do at two in the morning
 * deserves to know which is which, and then deserves to decide.
 *
 * THE TONE RULE, WHICH MATTERS MORE
 * Nobody gets judged here. Not for eating the cookies, not for wanting
 * an enormous supply, not for buying the gadget, not for stopping. A
 * parenting app that makes people feel stupid for what they tried is
 * worse than no app. Where current guidance has moved away from
 * something popular, this file says so plainly and says it kindly,
 * because "that advice changed in 2022" is useful and "you did it
 * wrong" is not.
 */

export const WISDOM_DISCLAIMER =
  'This section is other parents talking, not medical advice. Some of it is backed by current ' +
  'guidance, some of it is not, and every entry says which. Your own clinician knows things about ' +
  'you that a room full of strangers does not.';

export const EVIDENCE_LABELS = {
  established: {
    id: 'established',
    label: 'In current guidance',
    meaning: 'This appears in professional protocols or major health body guidance.',
    tone: 'sage',
  },
  mixed: {
    id: 'mixed',
    label: 'Mixed evidence',
    meaning: 'Studied, with results that do not clearly agree. Reasonable to try, not a sure thing.',
    tone: 'taupe',
  },
  community: {
    id: 'community',
    label: 'Parent tip, not studied',
    meaning: 'Parents pass this around and say it helped. No good research either way.',
    tone: 'blush',
  },
  changed: {
    id: 'changed',
    label: 'Guidance changed',
    meaning: 'This used to be standard advice and current protocols have moved away from it.',
    tone: 'attention',
  },
};

/* ------------------------------------------------------------------
 * WHAT PEOPLE TRY FOR SUPPLY
 * The honest ordering: the things that actually move supply come
 * first, because they are boring and they work. The food and the
 * supplements follow, labeled, because people will look for them
 * whether or not this app mentions them.
 * ------------------------------------------------------------------ */

export const OUTPUT_WISDOM = [
  {
    id: 'more-removal',
    title: 'Removing milk more often',
    evidence: 'established',
    what:
      'More sessions, not longer ones. Supply runs on how often milk leaves, and nothing else in this ' +
      'list comes close to it.',
    note:
      'If you only change one thing, change frequency. Everything below is worth trying on top of that ' +
      'and none of it substitutes for it.',
  },
  {
    id: 'night-session',
    title: 'One session between 1 and 5 AM',
    evidence: 'established',
    what:
      'Prolactin runs highest overnight, so a session in that window does more for supply than the ' +
      'same session in the afternoon.',
    note: 'Brutal, and it is the single highest yield change most people can make.',
  },
  {
    id: 'power-pumping',
    title: 'Power pumping',
    evidence: 'mixed',
    what:
      'An hour broken into pump twenty, rest ten, pump ten, rest ten, pump ten. It imitates cluster ' +
      'feeding and signals for more.',
    note:
      'Widely recommended by lactation consultants and thinly studied. Give it a week before deciding, ' +
      'and stop if it is wrecking your sleep for nothing.',
  },
  {
    id: 'hands-on',
    title: 'Hands on pumping and breast compression',
    evidence: 'established',
    what:
      'Compressing and massaging while the pump runs, then hand expressing after. It empties more ' +
      'thoroughly, and thorough removal is what drives production.',
    note: 'Free, takes five extra minutes, and is the most underused thing on this list.',
  },
  {
    id: 'oatmeal',
    title: 'Oatmeal, and the cookies',
    evidence: 'community',
    what:
      'Oats, lactation cookies, oatmeal cream pies, whatever form it takes. Enormously popular and ' +
      'plenty of parents swear their output went up the same day.',
    note:
      'No good evidence that oats themselves do anything. Some of it is likely eating more and drinking ' +
      'more at all, which does matter, and some of it is that eating something you like at 3 AM makes ' +
      'the session bearable. That is not nothing. It is cheap, it is safe, and if it helps you, it helps ' +
      'you.',
  },
  {
    id: 'hydration-calories',
    title: 'Actually eating and drinking',
    evidence: 'established',
    what:
      'Making milk costs roughly 500 extra calories a day and a lot of fluid. Running short on either ' +
      'will eventually show up in output.',
    note:
      'Drink to thirst rather than forcing gallons. Past the point of thirst there is no bonus, and very ' +
      'large fluid intakes have been reported to lower supply rather than raise it.',
  },
  {
    id: 'herbal-galactagogues',
    title: 'Fenugreek, moringa, and lactation teas',
    evidence: 'mixed',
    what:
      'The most common herbal supplements people reach for. Fenugreek is the one most often named.',
    note:
      'Evidence is thin and inconsistent. Fenugreek in particular causes stomach upset for a lot of ' +
      'people, can smell like maple syrup coming through the skin, and interacts with diabetes ' +
      'medication and blood thinners. Run any supplement past your own clinician rather than the ' +
      'internet, especially if you take anything daily.',
  },
];

/* ------------------------------------------------------------------
 * CLOGS AND MASTITIS
 * This is the section where the guidance genuinely changed, in 2022,
 * and where a lot of confident advice online is now out of date. It is
 * written carefully, because the old advice is not merely unhelpful
 * here, it can make things worse.
 * ------------------------------------------------------------------ */

export const CLOG_WISDOM = {
  headline: 'The advice on clogs and mastitis changed in 2022, and most of the internet has not caught up',
  why:
    'The Academy of Breastfeeding Medicine rewrote its mastitis protocol in 2022. The old model treated ' +
    'a clog as milk stuck in a pipe, so the answer was heat, deep massage and emptying harder. The ' +
    'current model treats it as inflammation and swelling in the tissue around the ducts, often ' +
    'alongside making more milk than is being taken. That flips several of the classic fixes from ' +
    'helpful to counterproductive.',
  kindNote:
    'If you did the heat and the hard massage and the extra pumping, you were following what everyone ' +
    'was told, including plenty of clinicians. Lots of people got through a clog that way. The point of ' +
    'this section is what to reach for next time, not a verdict on last time.',
  nowRecommended: [
    {
      id: 'lecithin',
      title: 'Sunflower or soy lecithin',
      evidence: 'established',
      what:
        'Named in the current protocol for recurrent clogs. It is thought to emulsify the milk and ' +
        'reduce inflammation.',
      note:
        'A commonly used amount is around 1200 mg a few times a day, and your clinician or an IBCLC ' +
        'should set the actual dose for you. Sunflower is usually preferred over soy. This one moved ' +
        'from parent tip to protocol, so if it worked for you, it works.',
    },
    {
      id: 'ice',
      title: 'Ice, not heat',
      evidence: 'established',
      what: 'Cold after feeding or pumping, to bring swelling down.',
      note: 'This is the straightest reversal in the new protocol. Warm compresses are out, ice is in.',
    },
    {
      id: 'ibuprofen',
      title: 'Ibuprofen',
      evidence: 'established',
      what: 'An anti inflammatory, treating the actual problem rather than only the pain.',
      note: 'Check with your own clinician about what is right for you, as always.',
    },
    {
      id: 'lymphatic',
      title: 'Light lymphatic stroking',
      evidence: 'established',
      what:
        'Very light sweeping toward the collarbone and the armpit, at the pressure you would use to pet ' +
        'a cat. Moving fluid out, rather than pushing a lump around.',
      note: 'If it hurts, it is too hard. This is the replacement for deep massage, not a gentler version of it.',
    },
    {
      id: 'normal-removal',
      title: 'Feeding or pumping normally',
      evidence: 'established',
      what: 'Keep your usual pattern, and express for comfort rather than to empty aggressively.',
      note: 'Normal is the goal. Not more, not less.',
    },
  ],
  movedAway: [
    {
      id: 'extra-pumping',
      title: 'Pumping extra to clear the clog',
      evidence: 'changed',
      what: 'The old standard, and the current protocol advises against it.',
      note:
        'Emptying harder tells your body to make more, and making more than is being taken is part of ' +
        'what caused the inflammation. It can clear a clog and make the next one more likely. Plenty of ' +
        'people cleared one this way, which is why the advice stuck around.',
    },
    {
      id: 'deep-massage',
      title: 'Deep massage and digging at the lump',
      evidence: 'changed',
      what: 'Now advised against, because it increases swelling in tissue that is already swollen.',
      note: 'The bruising a lot of people ended up with was a clue.',
    },
    {
      id: 'vibration-heat',
      title: 'Vibrating massagers and warming devices',
      evidence: 'changed',
      what:
        'Vibrating massagers and heat both came out of the current protocol, along with salt soaks.',
      note:
        'These are still sold everywhere and a lot of parents will tell you theirs helped, which is a ' +
        'real experience and not a lie. It is just no longer what the protocol advises, and that is ' +
        'worth knowing before you spend money on one.',
    },
  ],
  whenToCall: [
    'A red, hot, painful area with fever, chills, or feeling like you have flu. That is mastitis and it needs a clinician, sometimes antibiotics.',
    'A lump that is not shifting after a day or two of the current approach.',
    'A firm, very painful, growing lump with worsening fever, which can mean an abscess and needs imaging.',
    'Repeated clogs, which usually means something upstream to fix, such as flange fit, oversupply, or how often milk is being removed.',
  ],
  sources: [
    { org: 'ABM', label: 'Clinical Protocol 36, The Mastitis Spectrum, revised 2022',
      url: 'https://abm.memberclicks.net/assets/DOCUMENTS/PROTOCOLS/36-mitchell-et-al-2022-academy-of-breastfeeding-medicine-clinical-protocol-36-the-mastitis-spectrum-revised-2022.pdf' },
  ],
};

/* ------------------------------------------------------------------
 * THE KIT
 * Categories rather than brands, on purpose. See the note below, which
 * is a product decision as much as a content one.
 * ------------------------------------------------------------------ */

export const KIT_STANCE =
  'Ready Set Grow lists what a thing is for and what to look for, rather than naming a brand to buy. ' +
  'Nobody pays to be on this list. If that ever changes, it will say so on the item, in plain words, ' +
  'before you click anything.';

export const PARENT_KIT = [
  {
    id: 'flange-sizes',
    title: 'Flange inserts in more than one size',
    forWhat: 'Comfort and output, and the single most common fixable pumping problem.',
    lookFor:
      'Inserts that fit the shields you already own, in a couple of sizes around your measurement. ' +
      'Most people need smaller than the size their pump came with, and sizes change over the first weeks.',
    evidence: 'established',
  },
  {
    id: 'hands-free-bra',
    title: 'A hands free pumping bra',
    forWhat: 'Making hands on compression possible, which genuinely raises output.',
    lookFor: 'Something you can get into one handed at 3 AM. That is the whole test.',
    evidence: 'established',
  },
  {
    id: 'wearable-pump',
    title: 'A wearable or portable pump',
    forWhat: 'Pumping while doing something else, which is often what makes an extra session happen at all.',
    lookFor:
      'Check the suction strength and the flange sizing before the marketing. Many wearables are weaker ' +
      'than a plug in pump, so plenty of people keep a strong pump for the main sessions and use a ' +
      'wearable for the extra ones.',
    evidence: 'mixed',
  },
  {
    id: 'collection-cup',
    title: 'A silicone collection cup',
    forWhat: 'Catching letdown on the other side while you feed. Free milk, no extra time.',
    lookFor: 'Suction style cups collect more than passive catch cups. Either beats a nursing pad.',
    evidence: 'community',
  },
  {
    id: 'lecithin-supp',
    title: 'Sunflower lecithin',
    forWhat: 'Recurrent clogs. This one is in the current mastitis protocol.',
    lookFor: 'Sunflower rather than soy is the usual preference. Ask your clinician about the dose.',
    evidence: 'established',
  },
  {
    id: 'cold-packs',
    title: 'Breast shaped cold packs',
    forWhat: 'Ice after feeding, which the 2022 protocol moved to the front of clog and mastitis care.',
    lookFor:
      'Many gel packs sold for this are dual use, warm or cold. Current guidance is the cold side.',
    evidence: 'established',
  },
  {
    id: 'storage-bags',
    title: 'Storage bags and a date marker',
    forWhat: 'Freezing, and knowing what you have.',
    lookFor:
      'Bags that lie flat freeze faster and stack better. Date every single one, especially if you might ' +
      'donate, because milk banks require it.',
    evidence: 'established',
  },
];

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

export function getEvidenceLabel(id) {
  return EVIDENCE_LABELS[id] || EVIDENCE_LABELS.community;
}

export function getOutputWisdom() {
  const order = { established: 0, mixed: 1, community: 2, changed: 3 };
  return OUTPUT_WISDOM.slice().sort((a, b) => order[a.evidence] - order[b.evidence]);
}

export function getWisdomById(id) {
  const all = [...OUTPUT_WISDOM, ...CLOG_WISDOM.nowRecommended, ...CLOG_WISDOM.movedAway];
  return all.find((w) => w.id === id) || null;
}

export function getAllWisdomSources() {
  return (CLOG_WISDOM.sources || []).slice();
}

export default OUTPUT_WISDOM;

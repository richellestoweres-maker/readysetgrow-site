/**
 * Ready Set Grow: Emergency skills and home alone readiness
 * ------------------------------------------------------------------
 * WHAT THIS IS AND IS NOT
 * This is a refresher and a reference, not a certification. Reading a
 * screen does not make someone competent at CPR, and we say so at the
 * top of every section rather than burying it. The purpose is that a
 * parent who took a class two years ago can check the numbers, and a
 * parent who never took one knows what to do while help is coming
 * instead of freezing.
 *
 * ACCURACY NOTE
 * The pediatric content follows the 2025 AHA and AAP guidelines for
 * CPR and emergency cardiovascular care, published October 2025. Two
 * things changed that will surprise anyone trained before then, and
 * both are flagged in WHATS_NEW so people do not teach the old version
 * to each other. When these guidelines update again, this file and
 * EMERGENCY_SOURCES get revisited together.
 */

export const CPR_STANCE = {
  headline: 'This is a reference, not a certification. Take the class.',
  body: [
    'An in person infant and child CPR class takes about two hours and costs very little, and several places run them free. The Red Cross, the American Heart Association, most hospitals, and many fire departments all offer them.',
    'What you cannot get from a screen is the feel of how hard compressions actually are, and that is the part people get wrong. Almost everyone pushes too softly the first time.',
    'What you can get from a screen is the sequence, so it is in your head, and the confidence that doing something imperfectly is far better than doing nothing. Bystander CPR roughly doubles survival, and nobody has ever been sued for trying.',
  ],
  ifYouRememberOneThing:
    'Call 911 and put it on speaker. The dispatcher will talk you through compressions in real time. ' +
    'You do not have to remember any of this alone.',
};

export const WHATS_NEW_2025 = {
  headline: 'Two things changed in October 2025. If you trained before then, read this part.',
  changes: [
    {
      change: 'Choking in a child over one now starts with back blows.',
      detail:
        'The sequence is now five back blows alternating with five abdominal thrusts, repeated. ' +
        'Abdominal thrusts alone were the old teaching for children.',
    },
    {
      change: 'The two finger technique for infant compressions was dropped.',
      detail:
        'It was removed because it does not reliably reach the needed depth. Use the two thumbs ' +
        'encircling hands technique, or the heel of one hand, instead.',
    },
  ],
  unchanged:
    'Abdominal thrusts are still never used on a baby under one. For an infant it is back blows and ' +
    'chest thrusts, which has not changed.',
};

/* ------------------------------------------------------------------
 * CPR
 * ------------------------------------------------------------------ */

export const CPR_BY_AGE = [
  {
    id: 'infant',
    label: 'Baby under 1 year',
    minMonths: 0,
    maxMonths: 12,
    checkFirst: [
      'Tap the bottom of their foot and shout. No response and no normal breathing means start.',
      'Gasping is not breathing. If all you see is occasional gasps, treat it as not breathing.',
    ],
    callForHelp:
      'Shout for someone to call 911 and get an AED. If you are completely alone, do two minutes of CPR first, then call, ' +
      'because a baby in arrest almost always needs air before anything else.',
    steps: [
      'Put them on their back on a firm flat surface. The floor is better than a bed.',
      'Place both thumbs side by side in the center of the chest just below the nipple line, with your hands wrapping around their back. If your hands are too big, use the heel of one hand instead.',
      'Push down about one and a half inches, which is roughly one third of the depth of their chest.',
      'Let the chest come all the way back up between pushes. Half a release is half a compression.',
      'Do 30 compressions at 100 to 120 a minute, which is about two a second.',
      'Then give 2 breaths. Cover their nose and mouth with your mouth, or pinch the nose and seal over the mouth, and puff just enough to make the chest rise. Small puffs. Their lungs are tiny.',
      'Keep going 30 and 2 until they respond or help takes over. If someone else is helping and you are both trained, switch to 15 and 2.',
    ],
    technique: 'Two thumbs encircling hands, or the heel of one hand.',
    depth: 'About 1.5 inches, roughly one third of the chest.',
    rate: '100 to 120 compressions a minute.',
    ratio: '30 compressions to 2 breaths alone, 15 to 2 with a second trained rescuer.',
    note:
      'Breaths matter more in babies than in adults. Adult cardiac arrest is usually a heart problem, ' +
      'infant arrest is usually a breathing problem, so compression only CPR is not the goal here.',
  },
  {
    id: 'child',
    label: 'Child 1 year to puberty',
    minMonths: 12,
    maxMonths: 168,
    checkFirst: [
      'Tap their shoulder and shout their name. No response and no normal breathing means start.',
      'Gasping is not breathing.',
    ],
    callForHelp:
      'Shout for someone to call 911 and get an AED. If you are alone with no phone, do two minutes of CPR first, then go and call.',
    steps: [
      'Put them on their back on a firm flat surface.',
      'Use the heel of one hand in the center of the chest, on the lower half of the breastbone. Use both hands if they are a bigger child or if one hand is not enough.',
      'Push down about two inches, which is roughly one third of the depth of their chest.',
      'Let the chest fully recoil between pushes.',
      'Do 30 compressions at 100 to 120 a minute.',
      'Then give 2 breaths. Tilt the head back, lift the chin, pinch the nose, and blow until you see the chest rise.',
      'Keep going 30 and 2. Switch to 15 and 2 if a second trained rescuer is helping.',
      'Use an AED as soon as one arrives. Use pediatric pads if the machine has them, and adult pads if it does not, because an adult shock is better than no shock.',
    ],
    technique: 'Heel of one hand, or both hands for a larger child.',
    depth: 'About 2 inches, roughly one third of the chest.',
    rate: '100 to 120 compressions a minute.',
    ratio: '30 compressions to 2 breaths alone, 15 to 2 with a second trained rescuer.',
    note: 'Push hard enough that it feels like too much. That is almost always about right.',
  },
  {
    id: 'teen',
    label: 'Teenager and adult',
    minMonths: 168,
    maxMonths: 1200,
    checkFirst: [
      'Shake their shoulder and shout. No response and no normal breathing means start.',
    ],
    callForHelp: 'Call 911 first, put it on speaker, and get an AED. Then start compressions.',
    steps: [
      'Heel of one hand in the center of the chest, the other hand on top, fingers interlocked.',
      'Arms straight, shoulders directly over your hands, push with your body weight rather than your arms.',
      'Push down at least two inches, and no more than about two and a half.',
      'Let the chest come fully back up each time.',
      '30 compressions to 2 breaths, at 100 to 120 a minute.',
      'If you are untrained or unwilling to give breaths, do compressions only and do not stop. Hands only CPR works for a teenager or adult who collapsed suddenly.',
      'Use an AED the moment it arrives and follow its spoken instructions.',
    ],
    technique: 'Two hands, heel of one hand with the other on top.',
    depth: 'At least 2 inches.',
    rate: '100 to 120 compressions a minute.',
    ratio: '30 compressions to 2 breaths, or compressions only if untrained.',
    note:
      'If the collapse was from drowning, choking, or a drug overdose, give breaths if you can. ' +
      'Those are breathing problems and compressions alone do less.',
  },
];

/* ------------------------------------------------------------------
 * CHOKING
 * ------------------------------------------------------------------ */

export const CHOKING_STANCE = {
  headline: 'If they are coughing, let them cough. Coughing is working.',
  body: [
    'A person who can cough, cry, or speak is moving air, and their own cough is stronger than anything you can do. Stay close, stay calm, and let them work.',
    'Act when they cannot make noise. Silent, a weak high pitched squeak, clutching the throat, panicked eyes, or going blue. That is a blocked airway and it needs you now.',
    'Never do a blind finger sweep. If you can clearly see the object and can hook it out, do that. If you cannot see it, sweeping pushes it deeper.',
  ],
};

export const CHOKING_BY_AGE = [
  {
    id: 'infant',
    label: 'Baby under 1 year',
    minMonths: 0,
    maxMonths: 12,
    steps: [
      'Shout for help and have someone call 911.',
      'Sit down and lay them face down along your forearm, head lower than their body, supporting the jaw and head with your hand. Rest your arm on your thigh.',
      'Give 5 firm back blows with the heel of your other hand, between the shoulder blades.',
      'Turn them face up along your other forearm, still head down.',
      'Give 5 chest thrusts. Two fingers in the center of the chest just below the nipple line, pushing about one and a half inches, sharper and slower than compressions.',
      'Look in the mouth. Remove the object only if you can see it clearly.',
      'Repeat 5 back blows and 5 chest thrusts until it clears or they go unresponsive.',
      'If they go unresponsive, start CPR. Look in the mouth each time before you give breaths.',
    ],
    neverDo: 'Never give abdominal thrusts to a baby under one. Their liver sits too exposed.',
  },
  {
    id: 'child',
    label: 'Child 1 year and over',
    minMonths: 12,
    maxMonths: 1200,
    steps: [
      'Ask can you speak. If they can cough or speak, stand by and let them cough.',
      'If they cannot, shout for help and have someone call 911.',
      'Lean them forward and give 5 firm back blows between the shoulder blades with the heel of your hand.',
      'Then give 5 abdominal thrusts. Stand or kneel behind them, make a fist just above the belly button and below the ribs, grab it with your other hand, and pull sharply inward and upward.',
      'Alternate 5 back blows and 5 abdominal thrusts until it clears or they go unresponsive.',
      'If they go unresponsive, lower them to the floor and start CPR. Check the mouth before each set of breaths and remove anything you can see.',
    ],
    neverDo:
      'Do not use abdominal thrusts on someone who is pregnant or very large. Use chest thrusts in the same ' +
      'position on the breastbone instead.',
  },
];

/* ------------------------------------------------------------------
 * ANTI CHOKING DEVICES
 *
 * Richelle asked whether the app should recommend keeping a LifeVac in
 * the house. The honest answer is more complicated than yes, and the
 * app already has a vocabulary for exactly this situation, which is the
 * evidence label. So this is filed as mixed, with what the official
 * bodies actually say and what the studies actually show, and with one
 * rule stated loudly enough that nobody misses it: the device never
 * goes first. A parent who reaches for a box instead of hitting their
 * baby's back has lost the seconds that mattered.
 * ------------------------------------------------------------------ */

export const ANTI_CHOKING_DEVICES = {
  evidence: 'mixed',
  headline: 'Worth owning, never worth reaching for first.',
  whatTheyAre:
    'Handheld suction devices such as LifeVac and Dechoker. You put a mask over the mouth and nose and ' +
    'pull, and the suction is meant to lift the object out the way a hard cough would. They cost around ' +
    'fifty to seventy dollars and they do not expire quickly.',
  theOneRule:
    'Back blows and thrusts first, every time. The device is what you try when those have failed and ' +
    'someone is already calling 911, not instead of them. Every second spent opening a box is a second ' +
    'the airway is still blocked.',
  whatTheBodiesSay: [
    'The FDA issued a safety communication in April 2024 saying the safety and effectiveness of over the counter anti choking devices have not been established, and that they are not FDA approved or cleared.',
    'The American Heart Association does not endorse or recommend devices for removing an airway obstruction.',
    'The American Red Cross says it is waiting for further studies and systematic reviews.',
    'The American Academy of Pediatrics has no position on them either way.',
  ],
  whatTheResearchShows: [
    'A 2025 systematic review and meta analysis of six studies covering 789 cases found high success rates, with LifeVac around 98 percent and abdominal thrusts around 71 percent.',
    'The same review flagged high heterogeneity and probable publication bias, and concluded plainly that comparative effectiveness remains unproven and traditional techniques should remain the priority.',
    'A lot of the underlying case data comes from registries run by the manufacturers, which is not the same thing as independent evidence.',
    'A 2023 cadaver study found the device failed to remove cashews or whole grapes, which are two of the most common things a small child actually chokes on, and caused some tissue swelling.',
  ],
  soShouldYouBuyOne: [
    'It is a reasonable thing to own. Plenty of thoughtful parents keep one, and there are documented cases of them working after back blows and thrusts did not.',
    'It is not a substitute for knowing what to do, and buying one instead of taking a class is the wrong trade.',
    'If you get one, open the box now. Practice assembling it in the dark, and put it somewhere you can reach in five seconds, not in a cupboard behind the pots.',
    'Tell every adult who watches your child that it exists, where it is, and that it comes second.',
    'If money is tight, spend it on the class before the device. The class is the part with the evidence behind it.',
  ],
  whyWeLabelItThisWay:
    'This app tells you what the evidence actually is rather than only what is popular, and it does that in ' +
    'both directions. Some things parents swear by turn out to be unstudied, and some things the guidelines ' +
    'were slow to adopt turn out to work. This one is genuinely unsettled, so it says so.',
};

/* ------------------------------------------------------------------
 * HOME ALONE
 * ------------------------------------------------------------------ */

export const HOME_ALONE = {
  headline: 'There is no magic age, and in most places there is no law either.',
  theLegalPart: [
    'Only a handful of states set a legal minimum age. Illinois is the strictest at 14. Maryland and North Carolina set 8, and Oregon sets 10.',
    'Colorado, Connecticut, Florida, and Mississippi publish a guideline of around 12 rather than a law.',
    'The other 36 or so states have no state level minimum at all, though some counties and cities do.',
    'Where there is no age in law, the standard is whether a reasonable person would call it neglect, which depends on the child, the length of time, the time of day, and what could go wrong.',
    'Check your own state and county before you rely on any number, because this changes and local rules sit on top of state ones.',
  ],
  maturityMattersMore: {
    intro: 'Age is the least useful part of the decision. These are the questions that actually answer it.',
    questions: [
      'Do they follow a rule when nobody is watching, or only when someone is?',
      'Can they use a phone to call you and to call 911, and do they know your address by heart?',
      'Do they know what to do if the smoke alarm goes off, and have they practiced walking out?',
      'Would they answer the door to a stranger, and do they know the answer is no?',
      'Can they get themselves a snack without the stove?',
      'Do they get scared alone in the house during the day?',
      'Is there a neighbor they know and could go to?',
      'Are there younger siblings, because supervising a sibling is a much bigger job than being alone?',
    ],
    note:
      'A cautious 9 year old may be ready for 45 minutes after school. A impulsive 13 year old may not be. ' +
      'You know which one you have.',
  },
  buildUpToIt: [
    'Start with 15 minutes while you take the trash out or walk the dog, and talk about it afterward.',
    'Move to half an hour while you run one errand nearby.',
    'Then an hour, then after school until you get home.',
    'Only then consider evenings, and treat evenings and overnight as a completely separate decision.',
  ],
  theRulesToAgree: [
    'Who they can call and in what order, written on the fridge, not only in a phone.',
    'The full address and a parent phone number memorized, not looked up.',
    'Door stays locked, nobody comes in, and the door is not answered.',
    'No stove, no oven, no candles. Microwave only if they have practiced.',
    'What to say on the phone, which is never that they are home alone.',
    'Where to go if they have to leave the house, and the fire meeting point.',
    'What they are allowed to do online while alone, since the unsupervised hour is where a lot of that starts.',
  ],
  siblings:
    'Leaving an older child in charge of a younger one is a job, not a status, and it deserves a separate ' +
    'conversation and usually a couple more years. Ask yourself whether the older one could handle the ' +
    'younger one getting hurt, because that is the scenario that matters.',
};

export const EMERGENCY_SOURCES = [
  { org: 'American Heart Association', label: '2025 AHA and AAP Guidelines for CPR and ECC, Pediatric Basic Life Support', url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000001370' },
  { org: 'American Heart Association', label: 'Updated CPR guidelines released for pediatric and neonatal emergency care', url: 'https://newsroom.heart.org/news/updated-cpr-guidelines-released-for-pediatric-and-neonatal-emergency-care-and-resuscitation' },
  { org: 'American Red Cross', label: 'First aid, CPR and AED classes', url: 'https://www.redcross.org/take-a-class/cpr' },
  { org: 'HealthyChildren.org (AAP)', label: 'Choking prevention and first aid for children', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx' },
  { org: 'FDA', label: 'Safety communication on over the counter anti choking devices, April 2024', url: 'https://www.fda.gov/medical-devices/safety-communications/use-caution-anti-choking-devices-fda-safety-communication' },
  { org: 'Journal of Emergency Nursing', label: 'Efficacy of antichoking suction devices versus traditional techniques, 2025 systematic review', url: 'https://pubmed.ncbi.nlm.nih.gov/41231173/' },
];

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

/** The CPR card matching a child's age, defaulting to the child card. */
export function getCprForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return CPR_BY_AGE[1];
  return CPR_BY_AGE.find((c) => months >= c.minMonths && months < c.maxMonths) || CPR_BY_AGE[1];
}

/** The choking card matching a child's age. */
export function getChokingForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return CHOKING_BY_AGE[1];
  return CHOKING_BY_AGE.find((c) => months >= c.minMonths && months < c.maxMonths) || CHOKING_BY_AGE[1];
}

/** True once home alone is a question worth showing, around age 7. */
export function homeAloneIsRelevant(months) {
  return typeof months === 'number' && months >= 84;
}

export default CPR_BY_AGE;

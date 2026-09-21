/**
 * Ready Set Grow: Pregnancy
 * ------------------------------------------------------------------
 * Deliberately NOT week by week fetal development.
 *
 * Every pregnancy app already tells you the baby is the size of a mango.
 * That is commodity, it is done better elsewhere, and it does nothing for
 * the actual problem, which is that most people arrive at the birth having
 * prepared enormously for one day and almost not at all for the months
 * after it.
 *
 * So this file is about preparing for what comes next. Feeding education
 * before the first latch. Safe sleep set up before anyone is too tired to
 * read. What recovery is actually like. What to ask. What the partner
 * does. That gap is real, nobody owns it, and it is continuous with the
 * rest of the app.
 *
 * THE SAFETY LAYER COMES FIRST
 * Pregnancy and postpartum complications are time critical in a way that
 * a toddler tantrum is not. The urgent warning signs below are from the
 * CDC's Hear Her campaign, and the point of that campaign is not only
 * that these signs matter, it is that women reporting them get dismissed.
 * So this file carries the signs AND the words to use when someone is not
 * listening. That second part is the part that saves lives.
 */

/* ------------------------------------------------------------------
 * URGENT WARNING SIGNS
 * Source: CDC Hear Her. These apply during pregnancy and for a full year
 * after delivery, which is far longer than most people are told.
 * ------------------------------------------------------------------ */

export const URGENT_MATERNAL_SIGNS = {
  headline: 'Get medical care right away if you have any of these',
  window: 'These apply during pregnancy and for a full year after birth, not just the first 6 weeks.',
  signs: [
    'A headache that will not go away, or gets worse over time',
    'Dizziness or fainting',
    'Changes in your vision',
    'A fever of 100.4 F or higher',
    'Extreme swelling of your hands or face',
    'Thoughts about harming yourself or your baby',
    'Trouble breathing',
    'Chest pain, or a fast beating heart',
    'Severe nausea and throwing up',
    'Severe belly pain that does not go away',
    'Your baby’s movement stopping or slowing during pregnancy',
    'Vaginal bleeding or fluid leaking during pregnancy',
    'Severe swelling, redness or pain in your leg or arm',
    'Vaginal bleeding after birth that soaks through more than one pad an hour, or large clots',
  ],
  ifDismissed: {
    headline: 'If someone is not taking you seriously',
    body:
      'Being dismissed is common enough that the CDC built a campaign around it. You are not being ' +
      'dramatic. Say the words below, plainly, and keep saying them until someone examines you.',
    scripts: [
      'I am worried. This does not feel normal to me, and I need it checked today.',
      'I am concerned this could be a complication. Please tell me what you are ruling out.',
      'I would like this documented in my chart, including that I raised it and what was decided.',
      'I want a second opinion.',
    ],
    escalate:
      'If you cannot reach your provider and you have any of the signs above, go to an emergency ' +
      'room or call 911. Tell them you are pregnant or how recently you gave birth, because it ' +
      'changes what they look for.',
  },
};

/**
 * The three postpartum conditions ACOG specifically flags, because they
 * are the ones people do not know to watch for and they arrive after
 * everyone has stopped paying attention to the mother.
 */
export const POSTPARTUM_CONDITIONS = [
  {
    id: 'preeclampsia',
    label: 'Postpartum preeclampsia',
    surprise: 'It can start after you are already home, even with a completely normal pregnancy.',
    signs: [
      'A headache that will not go away',
      'Changes in your vision, such as spots or blurring',
      'Swelling in your face or hands',
      'Pain in your upper belly or shoulder',
      'Trouble breathing',
      'Nausea or vomiting',
      'Sudden weight gain',
    ],
    action: 'Call your obstetric provider immediately. This is treatable and it is dangerous if it is missed.',
  },
  {
    id: 'hemorrhage',
    label: 'Postpartum hemorrhage',
    surprise: 'Some bleeding is normal. Soaking a pad an hour is not.',
    signs: [
      'Bleeding that soaks more than one pad an hour, for more than an hour or two',
      'Blood clots larger than an egg',
      'Dizziness, confusion, or a racing heart',
      'Pale, clammy skin',
    ],
    action: 'Call right away, or go to an emergency room. Do not wait to see if it settles.',
  },
  {
    id: 'endometritis',
    label: 'Infection of the uterus',
    surprise: 'It usually shows up between 2 and 10 days after birth, once you are home.',
    signs: [
      'Fever and chills',
      'Belly pain or tenderness',
      'Vaginal discharge that smells bad',
      'Feeling unusually unwell or exhausted',
    ],
    action: 'Call your provider. This needs antibiotics and it does not clear on its own.',
  },
];

/* ------------------------------------------------------------------
 * PREPARING FOR WHAT COMES NEXT
 *
 * trimester: 1, 2, 3, or 'any'. Surfaced by due date.
 * ------------------------------------------------------------------ */

export const PREP_TOPICS = [
  {
    id: 'feeding-before-birth',
    title: 'Learn feeding before you need it',
    trimester: 3,
    priority: 100,
    why:
      'The most common reason feeding goes badly is that the first latch is the first time anyone has ' +
      'explained how it works, and by then you have been awake for 30 hours. 20 minutes of ' +
      'reading now is worth more than any amount of reading at 3 AM on day two.',
    doNow: [
      'Learn what a deep latch looks like: nose level with the nipple, head tilting back, chin leading, wide open mouth.',
      'Know that newborns feed 8 to 12 times in 24 hours, and that this is normal rather than a sign of low supply.',
      'Know that cluster feeding in the evening is normal and is not evidence your supply failed.',
      'Find out now whether your hospital has lactation support and whether your insurance covers a consultant. Do not wait until you need one.',
      'If you plan to pump, get your flange size checked rather than assuming the box size fits. Wrong sizing is the most common cause of pain and low output.',
      'Decide what your line is for asking for help, and tell someone what it is, so you actually do it.',
    ],
    parentNote:
      'However you end up feeding your baby, they will be fed. Deciding that now, before anyone has ' +
      'opinions at you, protects you later.',
    linksTo: ['breastfeeding', 'pumping', 'formula-feeding', 'milk-storage'],
  },
  {
    id: 'safe-sleep-setup',
    title: 'Set up safe sleep before you are too tired to read about it',
    trimester: 3,
    priority: 98,
    why:
      'Safe sleep is a set of decisions best made while rested. Set the room up now and the exhausted ' +
      'version of you does not have to make any decisions at 2 AM.',
    doNow: [
      'A firm, flat, non inclined surface. A crib, bassinet or play yard with a fitted sheet and nothing else in it.',
      'Put the bassinet in your room. The guidance is to share a room, not a bed, ideally for at least the first 6 months.',
      'Remove the bumpers, the pillows, the loose blankets and the stuffed toys now, so they are not there to be tempting later.',
      'Do not buy an inclined sleeper or a positioner. They are not safe and several have been recalled.',
      'Decide where night feeds will happen, and make sure it is not a couch or an armchair. Falling asleep with a baby on a sofa is one of the most dangerous things that happens by accident.',
      'Get sleep clothing rather than blankets. Dress them in about one more layer than you are comfortable in.',
    ],
    parentNote:
      'You will be more tired than you have ever been. The setup you do now is the setup that protects ' +
      'your baby when you are too tired to think.',
    linksTo: ['safe-sleep'],
  },
  {
    id: 'recovery-truth',
    title: 'What recovery is actually like',
    trimester: 3,
    priority: 96,
    why:
      'Most preparation is about labor, which lasts a day. Recovery lasts months and almost nobody ' +
      'describes it honestly, so people assume something has gone wrong when it has not.',
    doNow: [
      'Bleeding lasts weeks, not days. It usually tapers over 4 to 6 weeks and it is normal for it to come and go.',
      'Afterpains are real. Cramping while feeding, often stronger with a second or third baby, because feeding makes the uterus contract.',
      'The first bowel movement is a thing everyone dreads and nobody mentions. Ask for a stool softener before you leave the hospital.',
      'Night sweats for a couple of weeks are normal as fluid leaves your body.',
      'Your belly will still look pregnant when you go home. That is anatomy, not failure.',
      'A cesarean is major abdominal surgery. Recovery takes longer than people act like it does, and lifting limits are real.',
      'Pelvic floor problems such as leaking are common and are treatable. Common does not mean you have to live with it. Ask about pelvic floor physical therapy.',
      'The 6 week check is not the finish line. Ask for a real conversation about how you are doing, not just clearance for exercise.',
    ],
    parentNote:
      'You are also a patient. Almost all attention shifts to the baby the moment they arrive, and you ' +
      'are the one who has to keep asking for care.',
    linksTo: ['postpartum-parent'],
  },
  {
    id: 'appointment-questions',
    title: 'What to actually ask at appointments',
    trimester: 'any',
    priority: 92,
    why:
      'Appointments are short and it is easy to leave having asked nothing. Having the questions ' +
      'written down is the difference between a useful visit and a blood pressure check.',
    doNow: [
      'Write questions in your phone as they occur to you, so you are not trying to remember them in the room.',
      'Ask the most important one first, not last. Visits run out of time at the end.',
      'Ask what number to call after hours, and whether it reaches a person or a machine.',
      'Ask what would make them want to see you sooner than the next scheduled visit.',
      'Take someone with you to the appointments that matter, because 2 people hear more than one.',
      'If something was dismissed, ask for it to be written in your chart. That single sentence changes how seriously it gets taken.',
    ],
    parentNote:
      'Asking questions does not make you a difficult patient. It makes you an informed one, and good ' +
      'providers prefer it.',
    linksTo: [],
  },
  {
    id: 'partner-prep',
    title: 'The partner has an actual job',
    trimester: 3,
    priority: 90,
    why:
      'The most common failure is a partner who wants to help and has no idea what help is, so they ' +
      'wait to be asked. Being asked is itself work, and the person recovering is doing it while ' +
      'bleeding and awake every 2 hours.',
    doNow: [
      'Own whole areas rather than tasks. All the laundry, all the food, all the visitor management. Not "tell me what to do".',
      'Be the gatekeeper. Someone has to say no to visitors, and it should not be the person recovering.',
      'Take the night shift you can take. If the baby is bottle fed at all, take one full feed so one adult gets an unbroken stretch.',
      'Learn the feeding setup too. A partner who knows what a good latch looks like is a second set of eyes.',
      'Know the warning signs on this screen. The person recovering may be too exhausted to judge whether something is wrong.',
      'Watch for how she is doing emotionally, not just physically. Partners often spot postpartum depression before she does.',
      'Partners get postpartum depression too. Roughly 1 in 10. Know that in advance.',
    ],
    parentNote:
      'The first 6 weeks are not a time to divide things fairly. They are a time for one person to ' +
      'carry more so the other can heal.',
    linksTo: ['postpartum-parent'],
  },
  {
    id: 'newborn-expectations',
    title: 'What newborns are actually like',
    trimester: 3,
    priority: 88,
    why:
      'Almost every new parent privately thinks something is wrong with their baby in week three. ' +
      'Usually nothing is. They just had no idea what normal looks like.',
    doNow: [
      'Crying climbs from birth, peaks somewhere around 6 to 8 weeks, then drops. Some of it has no findable cause.',
      'Newborns feed constantly. 8 to 12 times in 24 hours, sometimes more in the evening.',
      'They have no day and night rhythm for weeks. This is not something you did wrong.',
      'Sleep comes in short stretches. Long stretches are not a sign of good parenting and short ones are not a sign of bad.',
      'They sneeze, hiccup, grunt and make constant noise while sleeping. Almost all of it is normal.',
      'Weight loss in the first days is expected, and most babies are back to birth weight by about 2 weeks.',
      'You cannot spoil a newborn. Responding is what builds the security they regulate from later.',
    ],
    parentNote:
      'The fourth trimester is a real idea. For about 3 months they are essentially still expecting ' +
      'to be held constantly, and that is not a habit you are creating.',
    linksTo: ['newborn-basics', 'jaundice', 'safe-sleep'],
  },
  {
    id: 'support-plan',
    title: 'Build the support plan now',
    trimester: 3,
    priority: 86,
    why:
      'Everyone offers help before the baby comes and nobody knows what to do after. A plan made now ' +
      'turns vague offers into actual meals.',
    doNow: [
      'When someone says let me know if you need anything, give them a specific job instead. People want to be told.',
      'Write down who is on call for what: meals, the older child, the dog, a ride to an appointment.',
      'Set the visitor rule in advance and tell people before the birth, so it is not a negotiation while you are recovering.',
      'Find your local resources now: lactation support, a postpartum group, your pediatrician’s after hours line.',
      'Save the crisis numbers in your phone now, while it is not urgent. In the US the National Maternal Mental Health Hotline is 1-833-852-6262, and 988 is the crisis line.',
      'Decide who your one honest person is. The one you will tell the truth to when you are not okay.',
    ],
    parentNote:
      'Asking for help early is not weakness. It is the thing that keeps the first months survivable.',
    linksTo: ['postpartum-parent'],
  },
  {
    id: 'what-you-need',
    title: 'What you actually need, and what you do not',
    trimester: 2,
    priority: 80,
    why:
      'Registries are built to sell things. Very little of it matters and some of it is unsafe.',
    doNow: [
      'A safe sleep space, a car seat that fits your car, feeding supplies, diapers, and somewhere for you to sit comfortably while feeding.',
      'Get the car seat installed and inspected before the birth. A free check with a certified technician catches the installation errors that are extremely common.',
      'Skip the inclined sleepers, the crib bumpers, the positioners, the weighted sleep sacks and any teething jewelry. Several of these carry safety warnings.',
      'Borrow rather than buy the things they outgrow in 8 weeks.',
      'Buy far fewer newborn size clothes than you think. Many babies skip that size almost entirely.',
      'The expensive thing worth considering is help, not gear. A cleaner, a meal service, or a postpartum doula beats most of the registry.',
    ],
    parentNote:
      'Nothing you buy will make this easier in the way that sleep and help will.',
    linksTo: ['car-seat', 'safe-sleep'],
  },
  {
    id: 'mental-load',
    title: 'Talk about the mental load before it arrives',
    trimester: 2,
    priority: 78,
    why:
      'The invisible work of remembering everything is where a lot of resentment starts, and it is far ' +
      'easier to divide before it exists than to renegotiate at 4 AM in month two.',
    doNow: [
      'Name the invisible jobs out loud: appointments, supplies running out, whose turn it is, what the baby needs next size up.',
      'Assign whole domains rather than tasks, so one person is not the manager of everything.',
      'Agree how you will raise it when the split stops feeling fair, before it stops feeling fair.',
      'Talk about money and leave now. Who takes what time off, what changes, what it costs.',
      'Agree that either of you can call a reset. A short conversation now beats a fight later.',
    ],
    parentNote:
      'Couples who discuss this in advance report an easier transition. It is one of the few things that ' +
      'genuinely helps and costs nothing.',
    linksTo: [],
  },
  {
    id: 'birth-preferences',
    title: 'Preferences, not a script',
    trimester: 3,
    priority: 76,
    why:
      'A rigid birth plan sets people up to feel they failed. Knowing your preferences and your ' +
      'decision making style is more useful than a document nobody reads.',
    doNow: [
      'Write one page, not five. What matters most, what you want to avoid if possible, and who speaks for you.',
      'Know the questions to ask in the moment: what are the options, what happens if we wait, what are the risks either way.',
      'Decide who your advocate is and tell them explicitly, so someone is asking questions when you cannot.',
      'Prepare for the version where things change. Most births deviate from the plan and that is not a failure.',
      'Ask what routine practices your hospital follows, so you learn them now rather than during labor.',
    ],
    parentNote:
      'The goal is not a specific birth. It is that you were informed, heard, and part of the decisions.',
    linksTo: [],
  },
];

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

export function getPrepTopic(id) {
  if (!id) return null;
  return PREP_TOPICS.find((t) => t.id === id) || null;
}

/**
 * Topics for a trimester, most important first. Anything marked 'any'
 * always applies. Passing nothing returns the whole list.
 */
export function getPrepForTrimester(trimester) {
  const list = trimester
    ? PREP_TOPICS.filter((t) => t.trimester === trimester || t.trimester === 'any')
    : [...PREP_TOPICS];
  return list.sort((a, b) => b.priority - a.priority);
}

/** Anything relevant now plus anything from an earlier trimester not yet covered. */
export function getPrepUpTo(trimester) {
  if (!trimester) return getPrepForTrimester();
  return PREP_TOPICS
    .filter((t) => t.trimester === 'any' || (typeof t.trimester === 'number' && t.trimester <= trimester))
    .sort((a, b) => b.priority - a.priority);
}

export const PREP_TOPIC_IDS = PREP_TOPICS.map((t) => t.id);

export default PREP_TOPICS;

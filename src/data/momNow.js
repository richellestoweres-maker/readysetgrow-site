/**
 * Ready Set Grow: Right Now, for her
 * ------------------------------------------------------------------
 * The child version of Right Now answers "something is happening to my
 * baby". This one answers "something is happening to ME", which is the
 * half that every parenting app leaves out.
 *
 * WHY THIS EXISTS
 * The most dangerous window for a mother in the United States is the
 * one right after birth, and most of the deaths in it are preventable.
 * The warning signs are not obscure. They are simply never said out
 * loud to the person who needs them, because everyone in the room is
 * looking at the baby. This file says them out loud.
 *
 * THE RULES, same as the child version
 * 1. Anything that can kill her is first, undecorated, and never
 *    collapsed behind a tap.
 * 2. Something to do in the first sixty seconds, not a lecture.
 * 3. Nothing here diagnoses. "This can mean", never "you have".
 * 4. Nothing here shames her for how she feels. The entries about her
 *    head are written as if the reader is already ashamed, because
 *    usually she is.
 *
 * WHAT SHOWS WHEN
 * Every entry names the shape of life it belongs to, so a mother of a
 * twelve year old is never handed postpartum hemorrhage signs, and
 * somebody who has never pumped is never handed flange sizing.
 *   'always'      everyone, every stage
 *   'postpartum'  within POSTPARTUM_WINDOW_MONTHS of a birth
 *   'year-one'    within twelve months, the slower recovery items
 *   'feeding'     breastfeeding or pumping is switched on
 *   'pregnant'    she has marked herself expecting
 */

/* The outer edge of the postpartum window. Twelve weeks, because
   hemorrhage and preeclampsia both still happen at eleven, and because
   the six week checkup has convinced a great many people that they are
   finished when they are not. */
export const POSTPARTUM_WINDOW_MONTHS = 3;

export const MOM_URGENCY = {
  emergency: {
    id: 'emergency',
    label: 'Go now',
    description: 'Call 911 or go to an emergency room. Say that you gave birth recently.',
  },
  callNow: {
    id: 'callNow',
    label: 'Call now',
    description: 'Call your OB or midwife today, including after hours. This is what the line is for.',
  },
  sameDay: {
    id: 'sameDay',
    label: 'Be seen today',
    description: 'Ask for an appointment today rather than waiting for the next one.',
  },
  support: {
    id: 'support',
    label: 'You are not in trouble',
    description: 'Nothing here is an emergency. It is still worth saying out loud to someone.',
  },
};

/* ------------------------------------------------------------------
 * THE CARD THAT IS ALWAYS ON TOP
 *
 * Adapted from the AWHONN POST-BIRTH warning signs, which exist because
 * mothers were being sent home without them. The line that matters most
 * is the last one: say that you gave birth. Emergency rooms miss
 * postpartum complications when nobody tells them.
 * ------------------------------------------------------------------ */

export const MOM_ALWAYS_EMERGENCY = {
  id: 'mom-emergency',
  title: 'Call 911 for any of these',
  shows: 'postpartum',
  signs: [
    'Bleeding that soaks through a pad in an hour, or clots bigger than an egg',
    'Chest pain, trouble breathing, or a racing heart that will not settle',
    'A headache that will not lift, changes in your vision, or seeing spots',
    'Pain or swelling in one leg, especially the calf, with warmth or redness',
    'A fever of 100.4 or higher',
    'Thoughts of hurting yourself or your baby',
  ],
  sayThis: 'Tell them how many weeks ago you gave birth. Say it first, before anything else. ' +
    'Postpartum complications get missed when the person taking the history does not know.',
  source: { org: 'AWHONN', label: 'POST-BIRTH Warning Signs',
    url: 'https://www.awhonn.org/education/hospital-products/post-birth-warning-signs-education-program/' },
};

/* ------------------------------------------------------------------
 * THE SITUATIONS
 * ------------------------------------------------------------------ */

export const MOM_NOW = [

  /* ---------------- HER BODY ---------------- */

  {
    id: 'bleeding',
    label: 'I am bleeding a lot',
    blurb: 'How much is too much, and the number that means go now',
    icon: 'heart',
    category: 'body',
    shows: 'postpartum',
    urgencyCheck: {
      urgency: 'emergency',
      title: 'Go now if either of these is true',
      signs: [
        'You are soaking through a maxi pad in an hour or less',
        'You are passing clots bigger than an egg',
      ],
      note: 'Postpartum hemorrhage is not only a first day problem. It happens at 3 weeks and at ' +
        '8 weeks, and it is one of the things most likely to be brushed off.',
    },
    tryRightNow: [
      'Put on a fresh pad and write down the time.',
      'Check it in an hour. If it is soaked through, that is the number. Go.',
      'If you are dizzy, gray in the face, or your heart is pounding, do not wait the hour.',
    ],
    whatIsHappening:
      'Bleeding after birth normally slows and changes color over several weeks, red to pink to brown ' +
      'to nothing. A day of heavier bleeding after a day of doing too much is common and usually settles ' +
      'with rest. Bleeding that gets heavier rather than lighter, or goes back to bright red after it had ' +
      'stopped, is the pattern worth a phone call.',
    callDoctorIf: [
      'It is getting heavier rather than lighter',
      'It went back to bright red after slowing down',
      'It smells bad, which can mean infection',
      'You are still bleeding heavily at 6 weeks',
    ],
  },

  {
    id: 'headache-vision',
    label: 'I have a headache that will not go away',
    blurb: 'Blood pressure after birth, and the signs nobody mentions',
    icon: 'info',
    category: 'body',
    shows: 'postpartum',
    urgencyCheck: {
      urgency: 'emergency',
      title: 'These together are an emergency',
      signs: [
        'A bad headache that does not lift with water, food and acetaminophen',
        'Blurry vision, spots or flashes of light',
        'Pain high up under your ribs, usually on the right',
        'Swelling in your face or hands that came on quickly',
      ],
      note: 'Preeclampsia can start AFTER the birth, including in someone whose pregnancy was ' +
        'completely normal. Most cases that appear after birth show up within the first week, and it ' +
        'can happen up to 6 weeks out. Almost nobody is told this on the way home.',
    },
    tryRightNow: [
      'If you have a cuff, take your blood pressure sitting down, feet flat, arm at heart height.',
      '140 over 90 or higher, twice, 20 minutes apart, is a call.',
      '160 over 110 or higher is a go now, cuff or no cuff.',
    ],
    whatIsHappening:
      'Plenty of headaches after birth are ordinary ones made worse by no sleep, no water and no food. ' +
      'The reason this entry is written so plainly anyway is that the serious version looks the same at ' +
      'the start, and the cost of checking is a phone call.',
    callDoctorIf: [
      'It is the worst headache of your life',
      'It came on suddenly, like a switch',
      'You had high blood pressure at any point in the pregnancy',
    ],
  },

  {
    id: 'fever-mom',
    label: 'I have a fever',
    blurb: '100.4 is the number, and where the infection usually is',
    icon: 'info',
    category: 'body',
    shows: 'year-one',
    urgencyCheck: {
      urgency: 'callNow',
      title: 'A fever of 100.4 or higher after birth is always a call',
      signs: [
        'Shaking chills, whether or not the thermometer agrees yet',
        'Discharge that smells bad',
        'A red hot area on your breast',
        'An incision or tear that is hot, opening, or leaking',
      ],
    },
    tryRightNow: [
      'Take your temperature properly, not with the back of your hand.',
      'Look at your incision or your stitches in a mirror, and at both breasts.',
      'Call whether or not you find the cause. Finding it is their job.',
    ],
    whatIsHappening:
      'After a birth a fever is treated as an infection until something else explains it. The usual ' +
      'places are the uterus, an incision or tear, the bladder, and the breast. All of them are ' +
      'treatable and all of them get worse if left.',
    callDoctorIf: ['Any fever of 100.4 or higher, full stop'],
  },

  {
    id: 'incision',
    label: 'My incision or stitches do not look right',
    blurb: 'What healing looks like, and what does not',
    icon: 'shield',
    category: 'body',
    shows: 'postpartum',
    urgencyCheck: {
      urgency: 'callNow',
      title: 'Call today for any of these',
      signs: [
        'Spreading redness, or heat around it',
        'It is pulling apart or opening',
        'Pus, or a smell',
        'Pain that is increasing rather than easing',
        'A fever with any of the above',
      ],
    },
    tryRightNow: [
      'Take a photo in good light. It makes the next comparison honest, and it is useful on the phone.',
      'Keep it clean and dry. No scrubbing, no ointment unless you were told to.',
    ],
    whatIsHappening:
      'A healing incision gets less painful, less red and less swollen week by week, with itching along ' +
      'the way. Any reversal of that direction is the thing to report. Numbness around a cesarean scar ' +
      'is normal and can last a long time.',
    callDoctorIf: ['Anything above', 'You are worried and cannot tell. That is a good enough reason'],
  },

  {
    id: 'leg-or-breath',
    label: 'My leg hurts, or I cannot catch my breath',
    blurb: 'Clot risk stays high for weeks after birth',
    icon: 'info',
    category: 'body',
    shows: 'postpartum',
    urgencyCheck: {
      urgency: 'emergency',
      title: 'Go now',
      signs: [
        'One calf that is swollen, warm, red or painful, especially standing',
        'Sudden shortness of breath',
        'Chest pain, or pain when you breathe in',
        'Coughing blood',
      ],
      note: 'Pregnancy and the weeks after it make the blood clot more readily. That protects against ' +
        'bleeding during birth and it raises clot risk afterwards. This is why a swollen calf gets ' +
        'taken seriously now in a way it would not have a year ago.',
    },
    tryRightNow: [
      'Compare both calves side by side. One noticeably bigger is the sign.',
      'Do not massage it and do not walk it off.',
    ],
    whatIsHappening:
      'Swelling in both legs and feet after birth is extremely common and settles over a couple of ' +
      'weeks. One leg is the one that matters.',
    callDoctorIf: ['Any of the above, immediately'],
  },

  /* ---------------- FEEDING ---------------- */

  {
    id: 'breast-pain',
    label: 'My breast is sore, hot or lumpy',
    blurb: 'The clog and mastitis guidance changed in 2022',
    icon: 'heart',
    category: 'feeding',
    shows: 'feeding',
    urgencyCheck: {
      urgency: 'callNow',
      title: 'Call today if you have',
      signs: [
        'A fever of 100.4 or higher',
        'Chills, body aches, or feeling like you have flu',
        'A red wedge shaped area that is spreading',
      ],
    },
    tryRightNow: [
      'Ice, not heat. 10 minutes at a time.',
      'Feed or pump on your normal schedule. Not more.',
      'Do not deep massage it. Stroke gently toward the armpit if you touch it at all.',
      'Ibuprofen, if you can take it, brings down the swelling that is causing the block.',
    ],
    whatIsHappening:
      'The old advice was heat, aggressive massage and emptying the breast as often as possible. The ' +
      'Academy of Breastfeeding Medicine rewrote it in 2022, because that approach makes it worse. A ' +
      'clog is now understood as swelling narrowing the duct rather than a plug of milk sitting in it. ' +
      'Extra pumping tells your body to make more milk into an already swollen breast, and hard massage ' +
      'damages the tissue. Most of the internet has not caught up, including people who will tell you ' +
      'confidently to get in a hot shower and push it out.',
    callDoctorIf: [
      'Fever or flu feeling, which is the mastitis line',
      'It is not improving in 24 hours',
      'You are getting them over and over, which is worth investigating rather than enduring',
    ],
    topics: ['clogs-mastitis'],
    sources: [
      { org: 'ABM', label: 'Protocol 36, The Mastitis Spectrum, revised 2022',
        url: 'https://abm.memberclicks.net/assets/DOCUMENTS/PROTOCOLS/36-mitchell-et-al-2022-academy-of-breastfeeding-medicine-clinical-protocol-36-the-mastitis-spectrum-revised-2022.pdf' },
    ],
  },

  {
    id: 'feeding-hurts',
    label: 'Feeding or pumping hurts',
    blurb: 'Pain is information, not something to get through',
    icon: 'heart',
    category: 'feeding',
    shows: 'feeding',
    tryRightNow: [
      'If you are pumping, turn the suction down. Higher is not more milk, it is more damage.',
      'If you are feeding, break the seal with a finger and start the latch again rather than enduring it.',
      'Look at your nipple right after. A wedge or a slant shape points at the latch or the flange.',
    ],
    whatIsHappening:
      'Some tenderness in the first couple of weeks is common. Pain that makes you dread the next one is ' +
      'not a stage to push through, it is a fixable mechanical problem most of the time. Flange size, ' +
      'latch, suction setting, a tie, or thrush. All of them have answers.',
    callDoctorIf: [
      'Cracked, bleeding or blistered',
      'Burning pain that carries on after the feed, which can be thrush or vasospasm',
      'It hurts every single time and nothing you change helps',
    ],
    topics: ['pumping-hurts', 'flange-fitting'],
  },

  /* ---------------- HER HEAD ---------------- */

  {
    id: 'rage',
    label: 'I am angrier than I have ever been',
    blurb: 'Anger is a symptom people miss because they are watching for sadness',
    icon: 'heart',
    category: 'head',
    shows: 'always',
    tryRightNow: [
      'If you are holding the baby and you feel out of control, put them somewhere safe and walk out of ' +
        'the room. A crying baby in a crib is safe. Walking away is the right move, not a failure.',
      'Cold water on your wrists and the back of your neck.',
      'Say out loud what happened right before it, even to nobody. It slows the next one down.',
    ],
    whatIsHappening:
      'Postpartum mood disorders show up as irritability and a short fuse at least as often as they show ' +
      'up as crying. People miss it in themselves for months because they are checking whether they feel ' +
      'sad, and they do not, they feel furious. Anger counts. It is on the list. It responds to treatment ' +
      'the same way the sad version does.',
    callDoctorIf: [
      'It is most days',
      'You frightened yourself',
      'You are avoiding being alone with your child because of it',
    ],
    sayThis: 'I am not sad, I am angry all the time, and it is not like me. I think something is wrong.',
    support: true,
  },

  {
    id: 'intrusive',
    label: 'I keep having awful thoughts about something happening to the baby',
    blurb: 'Almost everyone has these, and almost nobody says so',
    icon: 'shield',
    category: 'head',
    shows: 'always',
    urgencyCheck: {
      urgency: 'callNow',
      title: 'One thing makes this urgent rather than ordinary',
      signs: [
        'You feel pulled toward the thought rather than horrified by it',
        'You are making a plan',
        'You are thinking about hurting yourself',
      ],
      note: 'Call 1-833-852-6262 or 988. Both are free and confidential, day or night.',
    },
    tryRightNow: [
      'Notice that the thought disgusts you. That reaction is the whole difference, and it is the part ' +
        'a clinician listens for.',
      'Do not try to force it away. Arguing with it feeds it. Name it as anxiety and carry on with ' +
        'what you were doing.',
      'Tell one person. It loses most of its power the first time you say it out loud.',
    ],
    whatIsHappening:
      'Sudden vivid images of something terrible happening to your baby are reported by the large ' +
      'majority of new parents, mothers and fathers both. They are a symptom of anxiety, not a wish and ' +
      'not a warning. The horror you feel is the evidence. Nobody will take your child away for ' +
      'reporting them, and providers hear them constantly.',
    callDoctorIf: [
      'They are constant, or taking up the day',
      'You are doing rituals to keep them away',
      'Anything in the box above',
    ],
    sayThis: 'I am getting intrusive thoughts about the baby being hurt. They scare me. I do not want ' +
      'to act on them and I want help with the anxiety.',
    support: true,
    sensitive: true,
  },

  {
    id: 'nothing-left',
    label: 'I have nothing left today',
    blurb: 'Touched out, done, and still 3 hours from bedtime',
    icon: 'leaf',
    category: 'head',
    shows: 'always',
    tryRightNow: [
      'Lower the bar to safe and fed. That is a complete day. Everything else was optional and you can ' +
        'prove it tomorrow.',
      'Screen time, cereal for dinner, the same film again. None of it will be the thing that shaped them.',
      '10 minutes where nobody touches you, even if it is standing in the kitchen with the door shut.',
    ],
    whatIsHappening:
      'Being touched out is a real and physical feeling, not ingratitude. A body that has been climbed ' +
      'on, fed from and leaned against since six in the morning is running out of a resource, and the ' +
      'resource is refilled by being left alone, not by trying harder.',
    callDoctorIf: [
      'It is every day rather than a bad day',
      'You are not enjoying anything at all any more, including things you used to',
    ],
    support: true,
  },

  {
    id: 'not-myself',
    label: 'I do not feel like myself',
    blurb: '2 weeks is the line between adjusting and something treatable',
    icon: 'star',
    category: 'head',
    shows: 'always',
    tryRightNow: [
      'Count backwards. Has it been more than 2 weeks?',
      'If yes, that is the whole test. It is worth a call, and the call is short.',
    ],
    whatIsHappening:
      'The first 2 weeks after a birth is chemically brutal and tearfulness in it is expected. Past 2 ' +
      'weeks, low mood, anxiety, not sleeping even when the baby sleeps, not feeling connected, or not ' +
      'feeling anything at all, all point at something with a name and a treatment. Perinatal mood ' +
      'disorders are the most common complication of childbirth. They are also among the most treatable, ' +
      'and treatment does not automatically mean medication.',
    callDoctorIf: [
      'More than 2 weeks',
      'You cannot sleep even when you have the chance',
      'You feel nothing when you look at your child, which is a symptom and not a verdict on you',
    ],
    sayThis: 'It has been more than 2 weeks and I do not feel like myself. I want to talk about ' +
      'perinatal mental health.',
    support: true,
  },

  {
    id: 'no-help',
    label: 'Nobody is helping me',
    blurb: 'Words for asking, when hinting has stopped working',
    icon: 'people',
    category: 'head',
    shows: 'always',
    tryRightNow: [
      'Pick one task, not a feeling. "Can you take her from 7 to 8" lands. "I need more support" does not.',
      'Name the day and the hour. Open ended offers never get used.',
      'Ask the person most likely to say yes first, not the person who ought to.',
    ],
    whatIsHappening:
      'People who are not doing the work genuinely cannot see it, and waiting for them to notice is a ' +
      'strategy that has already failed. Specific requests get met far more often than general ones, ' +
      'which is not fair, it is just true, and it is worth using.',
    scripts: [
      { when: 'To a partner', say: 'I need you to take bedtime on your own on Tuesday and Thursday. Not help with it. Take it.' },
      { when: 'To a parent or friend', say: 'Could you come Saturday morning for 2 hours so I can sleep? You would not need to do anything but hold her.' },
      { when: 'To someone who says let me know if you need anything',
        say: 'Actually yes. Could you bring dinner Wednesday? Anything at all, I am not fussy.' },
    ],
    support: true,
  },
];

/* ------------------------------------------------------------------
 * WHICH OF THESE BELONG TO HER TODAY
 * ------------------------------------------------------------------ */

export const MOM_CATEGORY_LABELS = {
  body: 'Your body',
  feeding: 'Feeding',
  head: 'Your head',
};

/**
 * shape describes where she is:
 *   { monthsSinceBirth, feeding, pregnant }
 * monthsSinceBirth is the age in months of her youngest child, or null.
 */
export function momSituationShows(entryShows, shape) {
  const s = shape || {};
  const m = s.monthsSinceBirth;
  if (entryShows === 'always') return true;
  if (entryShows === 'pregnant') return !!s.pregnant;
  if (entryShows === 'feeding') return !!s.feeding;
  if (entryShows === 'postpartum') return m != null && m < POSTPARTUM_WINDOW_MONTHS;
  if (entryShows === 'year-one') return m != null && m < 12;
  return false;
}

export function getMomSituations(shape) {
  return MOM_NOW.filter((e) => momSituationShows(e.shows, shape));
}

export function getMomSituation(id) {
  return MOM_NOW.filter((e) => e.id === id)[0] || null;
}

export function getMomSituationsByCategory(shape) {
  const out = {};
  getMomSituations(shape).forEach((e) => {
    if (!out[e.category]) out[e.category] = [];
    out[e.category].push(e);
  });
  return out;
}

export function showsMomEmergencyCard(shape) {
  return momSituationShows(MOM_ALWAYS_EMERGENCY.shows, shape);
}

export const MOM_NOW_IDS = MOM_NOW.map((e) => e.id);

export const MOM_NOW_DISCLAIMER =
  'Written to help you decide whether to call, not to tell you what is wrong. Nobody here is your ' +
  'doctor or your midwife, and calling them when it turns out to be nothing is exactly what they ' +
  'would rather you did.';

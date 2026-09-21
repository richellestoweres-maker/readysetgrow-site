/**
 * Ready Set Grow: When A Parent Is At The End Of It
 * ------------------------------------------------------------------
 * She asked for this in her own words, and the words matter, so they
 * are written down here:
 *
 *   "we need to gear this as well towards moms who are struggling.
 *    Like call a loved one, a friend, family member, baby sitter... if
 *    you need time to yourself thats okay and its okay to not be okay.
 *    if you dont want your kid dont toss them in a trashbag or dumpster
 *    you can literally drop them at a fire station or adopt them out as
 *    all kids deserve a chance."
 *
 * WHY THIS SITS INSIDE "HOME ALONE" RATHER THAN SOMEWHERE GENTLER
 * Because that is where the real question gets asked. She pointed out
 * that home alone cannot be a question that only appears at seven,
 * since babies get left unattended too, and left in hot cars. A parent
 * looking for permission to walk out of the house is not going to open
 * a screen called Support. They will open the one about leaving a child
 * alone, and what they find there has to be the truth and a way out.
 *
 * THE FOUR THINGS IT HAS TO DO, IN ORDER
 * 1. Say the feeling is ordinary and survivable. A parent who believes
 *    they are the only one who has ever felt this will not ask for
 *    help, and shame is the thing that kills babies here.
 * 2. Give the thirty second version. Put them down somewhere safe and
 *    walk out of the room. That single sentence is the whole of shaken
 *    baby prevention and it works in the moment it is needed.
 * 3. Give a person to call, in the order somebody would actually try.
 * 4. Say plainly that giving a child up is legal, free, anonymous and
 *    not a crime, because the alternative a desperate person reaches
 *    for is the one she named.
 *
 * THE TONE RULE
 * Not one line of this scolds. A parent reading this is already certain
 * they are a bad person, and anything that agrees with them makes the
 * worst outcome likelier. Every line assumes somebody who loves their
 * child and has run out of room.
 *
 * WHAT IS CHECKED AND WHAT IS NOT
 * The Safe Haven facts are real, checked against the Texas DFPS Baby
 * Moses page and the National Safe Haven Alliance, September 2026.
 * Every state has a law, the age limit and the locations vary by state,
 * and that variation is stated rather than smoothed over, because a
 * parent acting on a wrong number here is the worst thing this file
 * could cause. Where a number is state specific the app says so and
 * sends them to the hotline that knows their state.
 */

export const BREAKING_HEADLINE = 'If you are at the end of it right now, start here.';

export const BREAKING_INTRO = [
  'Almost every parent has had a moment they do not tell anybody about. The one where the crying '
  + 'has gone on so long that something in you goes cold, or you think about walking out of the '
  + 'house and not coming back. Having that moment does not make you dangerous and it does not '
  + 'mean you do not love them. It means you are a person who has not slept.',
  'It is okay to not be okay. What matters is what you do in the next 5 minutes, and there is '
  + 'a right answer that costs you nothing.',
];

/* THE THIRTY SECOND VERSION. First, biggest, and written to be followed
   by somebody who is not really reading. This is the whole of shaken
   baby prevention in four lines. */
export const BREAKING_RIGHT_NOW = {
  title: 'Right now, in this order',
  steps: [
    'Put them down somewhere safe. A crib, a pack and play, or the floor with nothing on it. On '
    + 'their back, no pillows, no blankets.',
    'Walk out of the room and shut the door.',
    'Let them cry. A baby crying in a safe place for 10 minutes is not being harmed. 10 minutes '
    + 'is nothing to them and it might be everything to you.',
    'Breathe, get water, put your face under cold water, sit on the floor. Whatever gets you back.',
    'Then call somebody, before you go back in.',
  ],
  note: 'Never shake a baby, not even a little, not even to get their attention. Their neck cannot '
    + 'hold their head and the damage happens in under 5 seconds. If you have already shaken '
    + 'them, even gently, call 911 now and say so, because the treatable window is short and '
    + 'telling the truth is the thing that saves them.',
};

/* Who to call, in the order somebody would really try, with permission
   built into each line. The hardest part of asking is believing you are
   allowed to, so each of these says that you are. */
export const BREAKING_WHO_TO_CALL = {
  title: 'Somebody to call',
  intro: 'You do not need a reason better than "I am struggling and I need an hour". Anybody who '
    + 'loves you would rather get this call than the other one.',
  people: [
    { who: 'Your partner, if you have one',
      say: 'Come home, or take them for an hour. I am not okay.' },
    { who: 'Your mom, your sister, a friend',
      say: 'Can you come and hold the baby while I have a shower. You do not have to say more than that.' },
    { who: 'Any neighbor you are on speaking terms with',
      say: 'People say yes to this far more often than you think, and they think more of you for asking, not less.' },
    { who: 'A babysitter, even a teenager down the road',
      say: 'An hour of paid help is cheaper than almost anything else that will fix this today.' },
    { who: 'Your pediatrician or your own doctor',
      say: 'Tell them how you actually feel, not the tidy version. They have heard it and there is treatment for it.' },
  ],
};

/* The lines, with what each one is actually for, because a wall of
   numbers helps nobody at two in the morning. */
export const BREAKING_LINES = [
  { name: 'National Maternal Mental Health Hotline',
    contact: '1-833-852-6262',
    detail: 'Free, 24 hours, English and Spanish, for pregnant and new parents. Call or text.',
    url: 'https://mchb.hrsa.gov/national-maternal-mental-health-hotline' },
  { name: '988 Suicide and Crisis Lifeline',
    contact: '988',
    detail: 'If the thoughts have turned toward yourself or toward them. Call or text, any hour.',
    url: 'https://988lifeline.org/' },
  { name: 'National Safe Haven Alliance',
    contact: '1-888-510-2229',
    detail: 'They know the law in your state and they will talk it through with you, whatever you decide.',
    url: 'https://www.nationalsafehavenalliance.org/' },
  { name: 'Childhelp National Child Abuse Hotline',
    contact: '1-800-422-4453',
    detail: 'For a parent who is frightened of what they might do, as much as for anybody else. Nobody is reported for asking for help.',
    url: 'https://www.childhelphotline.org/' },
];

/* NEVER, AND WHY. Short, factual, no lecture. Each one is a thing that
   kills children every year and each one is something an exhausted
   person does without deciding to. */
export const BREAKING_NEVER = {
  title: 'The three that cannot be undone',
  items: [
    { what: 'Never shake them',
      why: 'Under 5 seconds of shaking can cause permanent brain injury or death. There is no safe amount.' },
    { what: 'Never leave them in a car, not for a minute',
      why: 'A car reaches lethal heat in 10 minutes, even at 70 degrees, even with a window cracked. Put '
        + 'something you need, such as a phone or a shoe, in the back seat every single time.' },
    { what: 'Never leave a baby or young child alone in the house',
      why: 'Not while you run one errand, not while they sleep. If you have to leave and there is nobody '
        + 'to call, take them with you, or read what is below.' },
  ],
};

/* ------------------------------------------------------------------
 * SAFE SURRENDER
 *
 * The part she asked for most directly, and the part with the highest
 * cost of getting wrong. Facts checked September 2026 against the Texas
 * DFPS Baby Moses page and the National Safe Haven Alliance.
 *
 * WHAT IS TRUE EVERYWHERE: all fifty states have a law. It goes by
 * different names. Handing an unharmed baby to staff at a safe haven
 * location is legal and is not abandonment, and the parent is not
 * prosecuted and is not required to give their name or any information.
 *
 * WHAT VARIES BY STATE: the maximum age of the baby and exactly which
 * locations count. Texas is 60 days, fire stations, EMS stations and
 * hospitals. Other states differ, some considerably.
 *
 * So the app states what is true everywhere as fact, states plainly
 * that the age limit and locations depend on the state, gives Texas as
 * the worked example because that is where she is, and sends anybody
 * else to the hotline rather than guessing at their state for them.
 * ------------------------------------------------------------------ */
export const SAFE_SURRENDER = {
  title: 'If you cannot do this, there is a legal way out, today',
  intro: [
    'If you have got to the point of thinking about leaving your baby somewhere, or worse, read '
    + 'this part carefully, because the thing you are imagining is not your only option and there '
    + 'is one that harms nobody.',
    'Every state has a Safe Haven law. You can hand your baby to a person at a fire station, an '
    + 'ambulance station or a hospital, and walk away. It is legal. It is not abandonment and it '
    + 'is not a crime.',
  ],
  facts: [
    'You do not have to give your name, your address, or any reason.',
    'You are not arrested and you are not charged, as long as the baby has not been hurt.',
    'You do not have to explain yourself to anybody there. Handing the baby over is the whole process.',
    'They will ask if you want to give medical history, for the baby’s sake. You can say no.',
    'The baby goes into care that day and into the adoption process, and there are far more '
    + 'families waiting than there are babies.',
  ],
  varies: 'The age limit and which places count depend on which state you are in. In Texas it is 60 '
    + 'days old or younger, at any fire station, EMS station or hospital. Other states set different '
    + 'ages. If you are not in Texas, or you are not sure, call 1-888-510-2229 and they will tell you '
    + 'the law where you are, at any hour.',
  ifOlder: 'If your child is past the age your state allows, this law is not the route, but you still '
    + 'have one. Call 1-888-510-2229 or your local child protective services and say you cannot care '
    + 'for your child and you want to place them safely. Asking to place a child is not the same as '
    + 'being reported, and people do it, and their children are alright.',
  closing: 'Choosing this is not the worst thing a person can do. It is the opposite of the worst '
    + 'thing. Every child deserves a chance, and so does every parent who was honest enough to know '
    + 'they could not give it.',
};

export const BREAKING_SOURCES = [
  { org: 'Texas DFPS', label: 'Baby Moses law, safe surrender of an infant 60 days or younger',
    url: 'https://www.dfps.texas.gov/child_protection/child_safety/resources/baby_moses.asp' },
  { org: 'National Safe Haven Alliance', label: 'Safe Haven laws by state, and the 24 hour helpline',
    url: 'https://www.nationalsafehavenalliance.org/' },
  { org: 'HRSA', label: 'National Maternal Mental Health Hotline',
    url: 'https://mchb.hrsa.gov/national-maternal-mental-health-hotline' },
  { org: 'AAP', label: 'Responding to crying, and why a baby is never shaken',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Responding-to-Your-Babys-Cries.aspx' },
  { org: 'NHTSA', label: 'Heatstroke, why a child is never left in a car',
    url: 'https://www.nhtsa.gov/campaign/heatstroke' },
];

/* WHO SEES WHICH HALF.

   The breaking point content is shown at every age, because a parent
   can reach the end of it with a toddler or a fourteen year old just as
   easily as with a newborn.

   Safe surrender is shown when there is a baby in the house, since the
   law is written for newborns, and the wording for an older child
   points somewhere that actually applies to them instead. */
export function showsSafeSurrender(months) {
  return typeof months === 'number' && months < 12;
}

/* Home alone readiness, the original question, only once it is a real
   question. Below that age the answer is simply no, and the screen says
   so and turns into the content above. */
export function showsHomeAloneReadiness(months) {
  return typeof months === 'number' && months >= 84;
}

export const HOME_ALONE_TOO_YOUNG = {
  headline: 'At this age the answer is no, and that is the easy part.',
  body: 'A child this young is not left alone, not for 10 minutes, not while they sleep, not while '
    + 'you run one errand. You already know that. The harder question, and the one nobody asks out '
    + 'loud, is what you are supposed to do when you badly need to not be here and there is nobody '
    + 'to hand them to. That is what the rest of this page is about.',
};

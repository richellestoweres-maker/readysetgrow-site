/**
 * Ready Set Grow: Consent, and if something happens
 * ==================================================================
 * WHY THIS EXISTS, AND THE BRIEF IT WAS WRITTEN TO
 * A mother asked for it, and the reason she asked is the design. It
 * happened to her at sixteen. She was frightened to tell her mother.
 * She told her anyway, and her mother got her a Plan B pill and was,
 * in her words, great.
 *
 * Both halves of that matter. The fear nearly stopped it, and what
 * her mother did next is the model. So this file has one job: close
 * the gap between frightened to tell and told anyway, and then make
 * sure the adult on the other side knows what to do.
 *
 * THE NUMBER THIS IS BUILT AROUND
 * Of American children aged ten to seventeen who were sexually
 * abused or assaulted, 31 percent told a parent. Two thirds told no
 * adult at all. That is not a failure of those children. It is what
 * happens when nobody said in advance what would happen if they did.
 *
 * WHAT GOES FIRST AND WHY
 * The tab for a parent whose child has just told them opens first.
 * Somebody arriving here at eleven at night is not reading an
 * explainer, and the two clocks that genuinely close, emergency
 * contraception and HIV prevention, are measured in hours.
 *
 * THE THING THIS FILE REFUSES TO REPEAT
 * Almost every page on the internet says a forensic exam must happen
 * within 72 hours. Current best practice has moved to seven days and
 * in places ten, and DNA is recoverable well past the old cutoffs. A
 * parent at hour eighty who reads 72 concludes the window is gone
 * when it is not. So this says go now, sooner is better, and do not
 * decide on your own that you are too late.
 *
 * ON FREEZING
 * The single most useful fact in here. In the best known study of
 * women examined after rape, around seven in ten reported significant
 * tonic immobility, the involuntary freeze. Nearly half reported it
 * at the extreme end. A child who did not fight concludes it was not
 * really assault, or that it was their fault, and then does not tell
 * anybody. Saying this out loud, in advance, is prevention.
 *
 * ON WHAT IS STATED AS PROVEN
 * The research on how a parent should respond is correlational. It
 * shows that blame, disbelief, minimizing, taking over the decisions
 * and distancing travel with worse outcomes. It does not prove the
 * reaction causes them, and it is mostly drawn from adults rather
 * than teenagers telling a parent. The advice is sound and it is
 * written as associated with rather than as will cause.
 *
 * Everything checked September 2026. Sources in CON_SOURCES.
 */

export const CON_TITLE = 'Consent, and if something happens';

export const CON_SUB = 'What consent actually requires, what to say at each age, and what to do in '
  + 'the first day if your child tells you something.';

export const CON_TABS = [
  { id: 'told', label: 'If they just told you' },
  { id: 'what', label: 'What consent really is' },
  { id: 'age', label: 'What to say, by age' },
  { id: 'raising', label: 'Raising the other half' },
];

/* ==================================================================
   IF THEY JUST TOLD YOU
   ==================================================================
   First tab, first block, shortest sentences in the file.
   ================================================================== */

export const TOLD_HEAD = 'Read this part first. The rest can wait.';

export const TOLD_FIRST = {
  title: 'The first 30 seconds',
  intro: 'What you say now is what they will remember about this for the rest of their life. 3 '
    + 'sentences, in this order, before anything else.',
  lines: [
    'I believe you.',
    'I am so glad you told me.',
    'This is not your fault. None of it.',
  ],
  then: 'Then stop talking and let them talk, or not talk. You do not need the details tonight and '
    + 'you may never need them. What you need is for them to know the person they told did not '
    + 'flinch.',
};

export const TOLD_DONT = {
  title: 'The 5 things not to say',
  intro: 'These are the reactions that show up in the research alongside worse outcomes afterwards. '
    + 'Every one of them is something a frightened parent says out of love.',
  items: [
    'Why did you not fight, or scream, or leave. Freezing is the usual response, not the rare one, '
    + 'and it is involuntary. This question tells a child it was their fault.',
    'What were you wearing, how much did you drink, why were you there. However you mean it, it '
    + 'lands as blame, and it is the reason 2 thirds of children tell nobody.',
    'Why did you not tell me sooner. They are telling you now. That is the hard part and they have '
    + 'just done it.',
    'Right, here is what we are going to do. Taking the decisions away is its own harm. Something '
    + 'was just done to them without their say. Do not be the second thing.',
    'Nothing. Going quiet, changing the subject, or treating them differently afterwards reads as '
    + 'disgust, and they will assume it is aimed at them.',
  ],
  instead: 'Instead: I believe you. What do you want to do. You do not have to decide everything '
    + 'tonight, and I am not going anywhere.',
};

/* THE TWO CLOCKS. The only genuinely urgent part, and the part most
   parents do not know exists. Everything else on this screen can wait
   until the morning. These cannot. */
export const TOLD_CLOCKS = {
  title: '2 things have a clock on them',
  intro: 'Almost nothing about this has to be decided tonight. These two do, and most parents have '
    + 'never been told they exist.',
  items: [
    { what: 'Emergency contraception', when: 'Best within hours. Still worth it for days.',
      detail: 'Sooner is meaningfully better. See below for which one and where.' },
    { what: 'Medication that prevents HIV', when: 'Within 72 hours, and sooner is better',
      detail: 'It is called PEP, it is a 28 day course, and an emergency department can start it '
        + 'the same night. After 72 hours it is no longer offered, so this is a real deadline.' },
  ],
  note: 'If you take only one thing from this page: an emergency department can do both of those, '
    + 'plus the exam, plus antibiotics, in one visit tonight.',
};

export const TOLD_EC = {
  title: 'Emergency contraception, plainly',
  intro: 'There is more than one and they are not the same. Which one matters more than most people '
    + 'realize, and a pharmacist will not always volunteer the difference.',
  options: [
    { name: 'Plan B and its generics, levonorgestrel',
      window: 'Labeled for 72 hours. Works best in the first 24.',
      how: 'Over the counter, no prescription, no age limit, no identification needed. Anybody of '
        + 'any age can buy it, including your child, including you for your child. Usually 10 to 50 '
        + 'dollars, and the generics are the same medicine.',
      note: 'Often locked in a cabinet or behind the counter, which costs time. Ask at the counter '
        + 'rather than hunting the shelves.' },
    { name: 'ella, ulipristal',
      window: 'Works for the full 120 hours, 5 days',
      how: 'Needs a prescription, at any age, which is the main obstacle. A telehealth appointment '
        + 'can often write one the same day.',
      note: 'The important difference: levonorgestrel fades as the hours pass and ella does not. '
        + 'After the first day, ella is the better option, and after 3 days it is clearly better.' },
    { name: 'A copper or hormonal IUD',
      window: 'Up to 120 hours',
      how: 'Needs a clinician to place it, so it is the highest effort option.',
      note: 'It is also by some distance the most effective, cutting the chance of pregnancy by over '
        + '99 percent, and it is unaffected by body weight. Worth asking about rather than assuming '
        + 'it is not for a teenager.' },
  ],
  weight: 'One thing nobody tells you. Levonorgestrel works less well at higher body weight. At a '
    + 'BMI over 25 the pregnancy rate is around one and a half times higher, and over 30 it is more '
    + 'than 3 times. American regulators have not put a warning on the label because they judged '
    + 'the data inconclusive, but professional guidance is to use ella or an IUD instead above that '
    + 'point. Nobody should ever be refused Plan B over their weight, it is still worth taking, and '
    + 'it is worth asking for one of the others as well.',
};

export const TOLD_EXAM = {
  title: 'The exam, and the thing everybody gets wrong about it',
  body: [
    'A sexual assault forensic exam is done by a specially trained nurse, usually called a SANE. It '
    + 'collects evidence, treats injuries, and it is also where the emergency contraception, the HIV '
    + 'medication and the antibiotics happen. It is not only about a court case.',
    'You should not be billed for it. Federal law requires states to cover the cost whether or not '
    + 'anybody talks to the police.',
  ],
  window: 'Almost every page on the internet says 72 hours. Do not use that number to decide you are '
    + 'too late. Current best practice in many places collects evidence up to 7 days, and some go '
    + 'to 10. Go as soon as you can, because sooner is better, and if it has already been 4 days, '
    + 'call anyway and ask rather than deciding for yourself that the window has closed.',
  preserve: 'Ideally, do not shower, change clothes, brush hair or use the bathroom first, and put '
    + 'the clothes in a paper bag rather than plastic. If they already showered, that does not end it '
    + 'and it is not a reason not to go.',
};

export const TOLD_REPORT = {
  title: 'What will happen about the police, honestly',
  body: [
    'If your child is under 18 and you take them to a hospital or a doctor and say what '
    + 'happened, expect a report to be made. Medical staff are mandated reporters in every state, '
    + 'and in many places it is not optional and you will not be asked to agree to it.',
    'That is worth knowing in the car rather than discovering in a waiting room, because a young '
    + 'person who was told nothing would happen and then watches a police officer arrive has been '
    + 'let down by the adult who promised it.',
  ],
  ask: 'Ask the intake nurse directly, before anything else: in this state, what are you required to '
    + 'report, to whom, and when. They will tell you, and it is a normal question.',
  adults: 'An adult can usually have the exam done and have the evidence stored without reporting. '
    + 'For a minor that option exists in only a handful of states, so do not count on it.',
  perp: 'Whether the other person is investigated depends on their age relative to your child and on '
    + 'your state, and those rules vary enormously. Nobody can tell you from a page what will happen '
    + 'in your state, and a call to the hotline below will get you closer than a search will.',
};

export const TOLD_LATER = {
  title: 'What does not have to be decided tonight',
  items: [
    'Whether to press charges.',
    'Whether to tell anybody else, including the other parent, the school or the family.',
    'Whether to see a therapist.',
    'What happens about school, or the team, or the friendship group.',
    'What your child wants this to mean.',
  ],
  note: 'Tonight is medical, and it is being believed. Everything else keeps.',
};

export const TOLD_AFTER = {
  title: 'The weeks after',
  items: [
    'Keep responding well. It is not one conversation, and how you react the fifth time matters as '
    + 'much as the first.',
    'Let them keep control of who knows. Telling somebody else without asking is its own betrayal.',
    'Watch sleep, school, eating and friendships rather than asking how they are every day.',
    'There are follow up appointments that matter. Repeat testing at 1 to 2 weeks, and blood '
    + 'tests at 6 weeks and 3 months. Put them in the calendar.',
    'Offer a therapist without making it a condition. Somebody who works with this specifically, not '
    + 'just anybody.',
    'Look after yourself somewhere they cannot see, because a parent falling apart in front of them '
    + 'becomes one more thing for them to manage.',
  ],
};

export const TOLD_LINES = [
  { name: 'RAINN, the National Sexual Assault Hotline', contact: '1-800-656-4673',
    detail: 'Free, 24 hours, confidential. They take calls from parents as well, and they will talk '
      + 'you through what happens in your state. Chat at rainn.org, or text HOPE to 64673.',
    url: 'https://rainn.org/' },
  { name: 'Childhelp National Child Abuse Hotline', contact: '1-800-422-4453',
    detail: 'Counselors, 24 hours, 170 languages, and explicitly for parents. You can call before '
      + 'you have decided anything.',
    url: 'https://childhelphotline.org/' },
  { name: 'Love Is Respect, for teenagers', contact: '1-866-331-9474',
    detail: 'If this happened inside a relationship, which for teenagers it very often does. Text '
      + 'LOVEIS to 22522.',
    url: 'https://www.loveisrespect.org/' },
  { name: 'The Deaf Hotline, by video', contact: '1-855-812-1001',
    detail: 'Answered in American Sign Language by Deaf advocates, and it covers sexual assault.',
    url: 'https://thedeafhotline.org/' },
  { name: 'Stop It Now', contact: '1-888-773-8368',
    detail: 'For an adult who is worried about a child, including when the person who did it is '
      + 'inside the family and you do not know what to do about that.',
    url: 'https://www.stopitnow.org/help-guidance/help-services' },
];

/* ==================================================================
   WHAT CONSENT REALLY IS
   ================================================================== */

export const WHAT_HEAD = 'No means no is the beginner version, and it is the part that fails.';

export const WHAT_INTRO = [
  'Almost everybody was taught consent as a thing that gets refused. That leaves out every situation '
  + 'where nobody said no, which is most of them, and it leaves a young person who did not say no '
  + 'certain that what happened must have been fine.',
  'The grown up version is the other way round. Consent is not the absence of a no. It is the '
  + 'presence of a yes, from somebody in a state to give one, for this, now.',
];

export const WHAT_CAPACITY = {
  title: 'You cannot agree to something if you are not in a state to agree',
  items: [
    'Asleep, or passed out. There is no version of this that is ambiguous.',
    'Drunk or high enough that they are not really there. Not tipsy, not merry, but past the point '
    + 'of making decisions. If somebody is wondering whether the other person is too drunk, that is '
    + 'the answer.',
    'Drugged, whether they took it knowingly or not.',
    'Too young, which depends on their age, the other person’s age, and the state.',
    'Frightened, cornered, or dependent on the person asking.',
  ],
};

export const WHAT_FREEZE = {
  title: 'The part that stops children telling anybody',
  body: [
    'Freezing is the usual response, not the rare one. In the best known study, of nearly 300'
    + ' women examined after rape, around 7 in 10 reported significant involuntary '
    + 'freezing during it, and nearly half reported it at the extreme end. It has a name, tonic '
    + 'immobility, it is a reflex, and it is not something anybody chooses.',
    'This matters more than almost anything else on this page. A young person who did not fight, did '
    + 'not shout and did not run concludes that it therefore was not really assault, or that they '
    + 'must have wanted it, or that nobody will believe them. Then they tell nobody.',
  ],
  say: 'So say it before anything ever happens, out loud, to a 12 year old: if your body freezes '
    + 'and you cannot move or speak, that is normal, it happens to most people, and it does not mean '
    + 'you agreed to anything. Not fighting is not saying yes.',
};

export const WHAT_COERCION = {
  title: 'Force is not the only way it happens',
  intro: 'For teenagers it is very rarely a stranger with a weapon. It is much more often this.',
  items: [
    'Being worn down. Asking over and over until it is easier to give in than to keep saying no.',
    'If you loved me. If you were not frigid. Everybody else does.',
    'Threatening to leave, to tell people, to share a photo, to hurt themselves.',
    'Being the one with the power. Older, more popular, the one with the car, the one everybody '
    + 'believes.',
    'Getting somebody drunk on purpose.',
    'Carrying on after a yes turned into a no, or after somebody went still and quiet.',
  ],
  note: 'Giving in is not the same as agreeing. Somebody who says fine, whatever, just to make it '
    + 'stop has not consented, and a person who cannot tell the difference has chosen not to.',
};

export const WHAT_CARRY = {
  title: 'Yes does not carry forward',
  items: [
    'Yes last week is not yes tonight.',
    'Yes to one thing is not yes to another thing.',
    'Being in a relationship is not standing permission. Marriage is not either.',
    'Yes can be taken back partway through, at any point, for any reason or none.',
    'Having done it before does not make the next time automatic.',
  ],
};

export const WHAT_LAW = {
  title: 'What the law says, and why not to lean on it',
  body: [
    'Worth being honest with a teenager about this rather than letting them find out later. Around '
    + '13 states have no statutory definition of consent at all. Only a handful spell out in '
    + 'law that consent can be taken back partway through. Most states define the absence of consent '
    + 'rather than requiring the presence of it, and what counts as too drunk varies enormously from '
    + 'one state line to the next.',
    'That does not mean any of the things on this page are up for debate. It means the law is a '
    + 'floor written by legislatures and what you owe another person is higher than the floor. Teach '
    + 'the standard, not the statute.',
  ],
};

export const WHAT_WHO = {
  title: 'Who it usually is',
  body: [
    'Not a stranger. For children and teenagers, the person who does it is usually another young '
    + 'person. In a large national sample, around 7 in 10 were other juveniles, and for teenage '
    + 'girls it was most often a boyfriend or a male acquaintance.',
    'Which is why a rule about strangers protects almost nobody, and why the conversation has to '
    + 'include the possibility that it is somebody your child likes, somebody you have met, and '
    + 'somebody they will not want to get in trouble.',
  ],
};

/* ==================================================================
   BY AGE
   ================================================================== */

export const CON_BY_AGE = [
  {
    id: 'tiny', label: '2 to 4', from: 18, to: 59,
    head: 'Nothing about sex. Everything about your body being yours.',
    items: [
      'Nobody has to hug or kiss anybody, including grandparents. Offer a wave, a high five, a '
      + 'handshake. This is the first consent lesson and it does not mention consent.',
      'When they say stop during tickling or wrestling, stop instantly, every time, even if they are '
      + 'laughing. That is the whole lesson in one second.',
      'Ask before you do things to their body where you can. Can I wipe your face. I am going to '
      + 'pick you up now.',
      'Correct words for body parts, so that if they ever need to tell somebody something they have '
      + 'the words to do it with.',
      'Surprises are things everybody finds out. Secrets are things you keep forever, and we do not '
      + 'have those.',
    ],
  },
  {
    id: 'small', label: '5 to 8', from: 60, to: 107,
    head: 'The rules about touch, and the promise.',
    items: [
      'The parts a swimsuit covers are private. Nobody looks at them or touches them, except to keep '
      + 'them clean or healthy, and a doctor only with you in the room.',
      'Say out loud that it includes everybody. Not a teacher, not a cousin, not a coach, not a '
      + 'grown up in this family. A rule that only covers strangers covers almost nothing.',
      'If anybody does, you are not in trouble and it is not your fault, and if they said I would be '
      + 'angry, that is how they trick people.',
      'Make the promise for the first time and make it enormous. You will never be in trouble for '
      + 'telling me. Never. Whatever it is.',
      'Ask who else they would tell if they could not tell you, and make sure there is a real answer.',
      'Their no counts too, for other children. You stop when somebody says stop.',
    ],
  },
  {
    id: 'middle', label: '9 to 11', from: 108, to: 143,
    head: 'Both directions, and the first mention that it is usually somebody you know.',
    items: [
      'Say it plainly for the first time: most of the time this is not a stranger. It is somebody '
      + 'you know, and sometimes somebody you like.',
      'Somebody being nice to you does not mean what they are doing is alright, and you are allowed '
      + 'to feel 2 things at once about the same person.',
      'You are in charge of your own body and everybody else is in charge of theirs. Both halves, '
      + 'said together, from now on.',
      'Pictures. If anybody asks for one, that is an adult problem and not yours, and it stops the '
      + 'second you tell me.',
      'Practice it out loud. What would you say, what would you do, who would you find. Saying it in '
      + 'the kitchen makes it reachable later.',
    ],
  },
  {
    id: 'teen', label: '12 to 15', from: 144, to: 191,
    head: 'The real version, before they need it.',
    items: [
      'Consent is a yes, from somebody in a state to give one, for this, now. Not the absence of a '
      + 'no. Say it in those words.',
      'Asleep, drunk, high, frightened or cornered means no. If you are wondering whether somebody '
      + 'is too drunk, you already know.',
      'Freezing is normal and involuntary and it happens to most people. If your body goes still, '
      + 'that is not you agreeing. Say this one twice.',
      'Yes can be taken back at any point. Yes to one thing is not yes to another.',
      'Being pestered until you give in is not agreeing, whatever anybody says afterwards.',
      'If it happens to a friend: believe them, do not tell anybody else without asking, and help '
      + 'them find an adult. What you say in the first minute matters as much for them as it would '
      + 'for you.',
      'And the promise again, now that it means something harder. Whatever has happened, whoever it '
      + 'was, whatever you had taken or drunk, whatever you told me you were doing that night, come '
      + 'to me. You will not be in trouble. Not then, not later, not at all.',
    ],
  },
  {
    id: 'older', label: '16 to 18', from: 192, to: 400,
    head: 'The practical half, and saying the promise out loud one more time.',
    items: [
      'Tell them emergency contraception exists, what it is called, that it works best within hours, '
      + 'that anybody of any age can buy Plan B over the counter with no identification, and that '
      + 'there is a different one called ella that works better after the first day.',
      'Tell them a hospital can prevent HIV with medication but only within 72 hours.',
      'Tell them the exam is free and that they will not be billed for it.',
      'Tell them what you would actually do: I would come and get you, wherever you are, whatever '
      + 'time it is, and I would not ask a single question in the car.',
      'Say the part about the police honestly rather than promising something you cannot deliver. If '
      + 'we go to a hospital they may have to report it, and I will tell you before we walk in.',
      'And then say the whole promise again, because 16 is when they most need it and least '
      + 'expect it to still apply.',
    ],
  },
];

export function conStageFor(months) {
  if (months === null || months === undefined) return null;
  for (let i = 0; i < CON_BY_AGE.length; i++) {
    const s = CON_BY_AGE[i];
    if (months >= s.from && months <= s.to) return s;
  }
  return months < CON_BY_AGE[0].from ? null : CON_BY_AGE[CON_BY_AGE.length - 1];
}

export const CON_PROMISE = {
  title: 'The promise, written out',
  body: 'This is the whole of it. Say it at five in small words, say it at 12 in bigger ones, '
    + 'and say it again at 16 when they have stopped listening to most things.',
  words: 'You will never be in trouble for telling me. Not about a photograph, not about who you '
    + 'were with, not about where you were, not about what you drank or took, not about lying to me '
    + 'about where you were going. If something happens, come to me. I will believe you, I will not '
    + 'be angry, and we will work out what to do together.',
  why: 'Only about 3 in 10 children who are sexually abused or assaulted tell a parent. 2 '
    + 'thirds tell no adult at all. The single thing most likely to move your child from that second '
    + 'group to the first is having heard that promise, in those words, before anything ever '
    + 'happened.',
};

/* ==================================================================
   RAISING THE OTHER HALF
   ==================================================================
   The half most parents skip, and the one that is actually about
   prevention rather than about damage limitation.
   ================================================================== */

export const RAISE_HEAD = 'Everybody teaches their child how not to be a victim. Far fewer teach '
  + 'them the other thing.';

export const RAISE_INTRO = [
  'Most of what parents say about this is defensive. Watch your drink, do not walk alone, tell me '
  + 'where you are. All sensible, all aimed at one side of it.',
  'The people who do this are somebody’s children, and for teenagers they are usually other '
  + 'teenagers. Which means the conversation that prevents it is one somebody has to have with the '
  + 'person who might do it, and that is not a conversation about being accused.',
];

export const RAISE_SAY = {
  title: 'What to actually say',
  items: [
    'Your job is not to avoid being refused. Your job is to be sure. If you are not sure, you stop '
    + 'and you ask, and if asking feels like it would ruin the mood, that is the moment it matters.',
    'Silence is not a yes. Going still is not a yes. Freezing is what most people’s bodies do '
    + 'when they are frightened, and it is the single most misread thing there is.',
    'Being drunk does not make it not count, and it will not be a defense for you either.',
    'If somebody says fine, whatever, just to make you stop asking, you did not get a yes. You wore '
    + 'somebody down, and you know the difference.',
    'Yes can be taken back partway through, and when it is, you stop immediately and without sulking '
    + 'about it.',
    'If you get this wrong you will not have made a mistake, you will have done something to another '
    + 'person that they carry. That is the weight of it and it is not too heavy to say out loud.',
  ],
  not: 'What not to say: any version of be careful, you could get accused. It teaches a boy that the '
    + 'risk in this situation is to him, and it is the opposite of the lesson.',
};

export const RAISE_FRIENDS = {
  title: 'The part that actually moves the numbers',
  body: [
    'The programs with the best evidence behind them are not the ones that lecture teenagers about '
    + 'consent. They are the ones that change what a young person thinks their friends will tolerate.',
    'A bystander program run across 26 high schools cut sexual violence perpetration by '
    + 'roughly a fifth. A coach led program with male athletes reduced dating violence a year '
    + 'later, and the striking part is what moved first. Their stated attitudes barely shifted. What '
    + 'changed was whether they laughed along with their friends.',
  ],
  home: 'So the version of this for a kitchen table is not another lecture about consent. It is: '
    + 'what do you do when your friend is the one doing it. Do you laugh. Do you say nothing. Do you '
    + 'get the girl a lift home. Those are the questions worth asking, and a teenager will actually '
    + 'answer them.',
  honest: 'Said honestly: no study has shown that a parent teaching this at home reduces anything, '
    + 'because nobody has been able to measure it. The program evidence is real and the effects are '
    + 'modest. Do it anyway, for the obvious reason.',
};

export const RAISE_BOTH = 'One more thing, because it gets missed. Boys are assaulted too, by around '
  + '1 in 20 by the age of 17, and they tell people even less often than girls do. A '
  + 'son needs both halves of this conversation just as much as a daughter does.';

export const CON_SOURCES = [
  { org: 'RAINN', label: 'The hotline, the forensic exam, and state consent law compared',
    url: 'https://rainn.org/articles/rape-kit' },
  { org: 'EVAWI', label: 'Why the 72 hour figure for an exam is out of date',
    url: 'https://evawintl.org/best_practice_faqs/medical-forensic-exams-exam-timelines/' },
  { org: 'KFF', label: 'Emergency contraception, the options, the windows and the cost',
    url: 'https://www.kff.org/womens-health-policy/emergency-contraception/' },
  { org: 'Society of Family Planning', label: 'Which emergency contraception, and the body weight evidence',
    url: 'https://societyfp.org/wp-content/uploads/2023/05/SFP-Clinical-Recommendation_Emergency-contraception-2023_Final.pdf' },
  { org: 'CDC', label: 'What happens medically after an assault, including the 72 hour HIV window',
    url: 'https://www.cdc.gov/std/treatment-guidelines/sexual-assault-adults.htm' },
  { org: 'Moller et al 2017', label: 'Tonic immobility during sexual assault, the freezing research',
    url: 'https://obgyn.onlinelibrary.wiley.com/doi/full/10.1111/aogs.13174' },
  { org: 'CCRC, University of New Hampshire', label: 'Who the perpetrator is, and how few children tell a parent',
    url: 'https://www.unh.edu/ccrc/sites/default/files/media/2022-03/sexual-abuse-and-assault-in-a-large-national-sample-of-children-and-adolescents.pdf' },
  { org: 'CHILD USA', label: 'Delayed disclosure, and how long children wait',
    url: 'https://childusa.org/wp-content/uploads/2024/06/Delayed-Disclosure-2024.pdf' },
  { org: 'Ullman 2023', label: 'What kinds of reaction to a disclosure go with worse outcomes',
    url: 'https://journals.sagepub.com/doi/abs/10.1177/15248380211016013' },
  { org: 'Coker et al 2017', label: 'The bystander programme that reduced perpetration across 26 schools',
    url: 'https://www.ajpmonline.org/article/S0749-3797(17)30027-2/fulltext' },
  { org: 'HHS ASPE', label: 'How age of consent and reporting duties vary by state',
    url: 'https://aspe.hhs.gov/reports/statutory-rape-guide-state-laws-reporting-requirements' },
];

export const CON_DISCLAIMER = 'Information, not medical or legal advice. The medical windows here '
  + 'are real and worth acting on tonight. Everything about the police and the law varies by state, '
  + 'and the hotline above will get you a better answer for where you live than any page can.';

export default CON_TITLE;

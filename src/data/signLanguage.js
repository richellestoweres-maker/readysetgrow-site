/**
 * Ready Set Grow: Signing, For Every Family And For Some Families
 * ------------------------------------------------------------------
 * WHY THIS FILE EXISTS
 * Two different questions ended up in one place on purpose.
 *
 * The first is baby sign, which is a nice thing that helps a hearing
 * toddler ask for milk before they can say milk. It is optional, it is
 * fun, and nothing bad happens if a family skips it.
 *
 * The second is a deaf or hard of hearing child getting full access to
 * a language in the first year of their life. That is not a nice
 * optional extra. Language deprivation in early childhood has lifelong
 * effects, and the single largest factor is how early a child had a
 * language they could fully reach.
 *
 * Those two are kept visibly separate below, because flattening them
 * into one cheerful "signing is great" section is how the serious one
 * gets treated as a hobby.
 *
 * WHAT THIS FILE IS NOT
 * It is not an ASL course and it does not pretend to be. You cannot
 * learn a language from written descriptions of handshapes, any more
 * than you could learn French pronunciation from a paragraph. What is
 * here is enough signs to start using today, honest information about
 * what ASL actually is, and pointers to the people who teach it
 * properly. Every one of those pointers is free.
 *
 * ON WRITING SIGNS DOWN
 * Each sign below has a handshape, a movement, and a hook. The hook is
 * the bit that makes it stick, because most ASL signs are motivated by
 * something and knowing what it is means you remember it. Where a sign
 * has regional variation, that is said rather than hidden.
 *
 * THE LANGUAGE RULE, AGAIN
 * Deaf with a capital D is a culture and an identity. deaf with a
 * small d is an audiological fact. Both are used here deliberately.
 * The app never calls a deaf child hearing impaired, and never frames
 * being deaf as a thing to be fixed, because plenty of Deaf adults do
 * not experience it that way and they are the people whose opinion on
 * this counts most.
 */

export const SIGN_INTRO =
  'Signing is worth doing whether or not your child is deaf. For a hearing baby it gives them a '
  + 'way to tell you what they want months before they can say it. For a deaf or hard of hearing '
  + 'child it is something much bigger than that, and the section below says so plainly.';

/* ------------------------------------------------------------------
 * THE PART THAT IS NOT OPTIONAL
 * ------------------------------------------------------------------ */

export const WHY_IT_MATTERS = {
  title: 'If your child is deaf or hard of hearing',
  headline: 'For a deaf or hard of hearing child, this is not an enrichment activity. It is language access, and the clock is real.',
  body: [
    'The first few years are when the brain builds language, and it builds it out of whatever language it can fully reach. A child who has full access to a signed language from the start builds language on the ordinary timetable. A child who spends the first 2 years with partial access to speech and no signed language behind it can end up behind in a way that is hard to make up later.',
    'This is the part families are often not told: signing does not slow down speech. The research runs the other way. Children with early signed language tend to do better on spoken language too, including children with cochlear implants. There is no tradeoff to weigh here.',
    'Hearing technology is wonderful and it is not instant and it is not total. Aids and implants take fitting, mapping, and time, they come out at bath time and bedtime, and they do not make a noisy classroom quiet. Signing fills the gap while that is being worked out, and it keeps filling it afterwards.',
    'The most useful thing a hearing family can do is learn faster than their child. A house where only the child signs is a house where the child is still on their own at the dinner table.',
  ],
  theHardTruth:
    'A deaf child raised among people who all sign is a child with a language. A deaf child raised '
    + 'among people who each know 20 signs is a child being spoken to in fragments. Whatever '
    + 'you decide about hearing technology, the family learning the language is the part that is '
    + 'worth the most and it is the part most often left undone.',
};

export const ABOUT_ASL = {
  title: 'What ASL actually is',
  headline: 'ASL is a language, with its own grammar. It is not English done with hands.',
  points: [
    'American Sign Language has its own word order, its own grammar, and its own idioms. It is not a code for English and it cannot be translated word for word.',
    'The face is grammar, not decoration. Raised eyebrows turn a statement into a yes or no question, and a furrowed brow marks a different kind of question. Signing with a blank face is like speaking in a monotone with no punctuation.',
    'Signed Exact English, sometimes called SEE, is a different thing. It maps English word for word onto signs and it is used in some schools. It is not ASL and Deaf adults largely do not use it with each other.',
    'Sign language is not universal. British Sign Language is a completely different language from ASL, and the two are not mutually intelligible.',
    'Fingerspelling is the alphabet, and it is what you use for names and for words you do not have a sign for. Learn it early, because it gets you through everything else.',
    'ASL has regions and accents like any language. If a Deaf adult signs something differently from a video you watched, they are not wrong.',
  ],
};

export const DEAF_CULTURE = {
  title: 'Deaf culture, in the order it usually matters',
  headline: 'The things hearing families usually learn late, and wish they had learned first.',
  points: [
    'Deaf with a capital D usually means identifying with Deaf culture and community. Small d deaf refers to hearing levels. Many people are both, some are only one, and it is theirs to choose.',
    'Hearing impaired is a term most Deaf people dislike. Deaf or hard of hearing is what to use.',
    'It is normal and polite to tap a shoulder, wave in someone line of sight, or flick a light to get attention. None of that is rude.',
    'Look at the person, not at the interpreter, and talk to the person, not about them. Say you rather than tell him.',
    'Eye contact in a signed conversation is not optional, it is how you listen. Looking away is hanging up.',
    'Directness reads differently in Deaf culture, and comments a hearing person might soften are often said plainly. It is not rudeness.',
    'Deaf children of hearing parents are the great majority, around 9 in 10, so almost every hearing family is starting from zero. That is normal and there is a whole community used to helping with it.',
    'Deaf adults are the best resource your family will ever have and the one most often skipped. Find them before you need them.',
  ],
};

/* ------------------------------------------------------------------
 * THE SIGNS
 * Grouped by why a family reaches for them. Ordered inside each group
 * by how soon it earns its keep.
 * ------------------------------------------------------------------ */

export const SIGN_GROUPS = [
  {
    id: 'first',
    label: 'The first five',
    blurb: 'Start here. These five do most of the work and they are the ones babies give back soonest.',
    note:
      'Sign the word every single time you say it and every single time it happens, and expect '
      + 'weeks of nothing before the first one comes back. Most babies start signing back somewhere '
      + 'around 8 to 12 months, and earlier if you started early.',
    signs: [
      {
        word: 'Milk',
        how: 'Hold a hand up, open, and squeeze it into a fist. Open, squeeze, open, squeeze.',
        hook: 'It is milking a cow. Once you see it you cannot unsee it.',
        why: 'Usually the first one a baby gives back, because it is the one they want most.',
      },
      {
        word: 'More',
        how: 'Flatten your fingers against your thumb on both hands so each hand makes a closed beak, then tap the 2 fingertips together twice.',
        hook: '2 handfuls of something coming together to make a bigger pile.',
        why: 'The one that ends the most crying, because it turns a scream into a request.',
      },
      {
        word: 'Eat, or food',
        how: 'Fingers and thumb together in a beak, tap your fingertips to your mouth a couple of times.',
        hook: 'Putting food in your mouth. It is exactly what it looks like.',
        why: 'Pairs with more and milk to cover almost everything a one year old wants.',
      },
      {
        word: 'All done, or finished',
        how: 'Hold both hands up, palms toward you, fingers spread, then flip them over so the palms face away. Like shaking something off.',
        hook: 'Shaking it off. Done with it.',
        why: 'Gives them a way out of the high chair that is not throwing the bowl.',
      },
      {
        word: 'Help',
        how: 'Make a fist with your thumb sticking up, rest it on your flat other palm, and lift both together.',
        hook: 'Giving somebody a lift up.',
        why: 'The one that prevents the most frustration once they are trying to do things themselves.',
      },
    ],
  },
  {
    id: 'daily',
    label: 'Everyday words',
    blurb: 'The next handful, for when the first five have landed.',
    signs: [
      {
        word: 'Mom',
        how: 'Open hand, fingers spread, tap your thumb on your chin.',
        hook: 'Chin for the women in the family, forehead for the men. That split runs through a lot of family signs.',
        why: '',
      },
      {
        word: 'Dad',
        how: 'Open hand, fingers spread, tap your thumb on your forehead.',
        hook: 'Same hand as mom, higher up.',
        why: '',
      },
      {
        word: 'Water',
        how: 'Make a W with your index, middle and ring fingers, and tap it on your chin.',
        hook: 'W for water, at the mouth.',
        why: 'Useful the moment they are on solids.',
      },
      {
        word: 'Please',
        how: 'Flat hand on your chest, circle it a few times.',
        hook: 'Rubbing your heart while you ask.',
        why: '',
      },
      {
        word: 'Thank you',
        how: 'Flat hand touching your chin near your lips, then move it forward and down toward the person.',
        hook: 'Sending a kiss of thanks out from your mouth.',
        why: '',
      },
      {
        word: 'Sleep, or bed',
        how: 'Flat hand against the side of your face, head tipped into it.',
        hook: 'Resting your head on a pillow.',
        why: 'Worth having for the whole of the bedtime routine.',
      },
      {
        word: 'Play',
        how: 'Both hands in a Y shape, thumb and pinky out, and twist them back and forth at the wrist.',
        hook: 'Loose and waggly, the way playing feels.',
        why: '',
      },
      {
        word: 'Book',
        how: 'Put your palms together, then open them like a book while the little fingers stay touching.',
        hook: 'Opening a book.',
        why: '',
      },
      {
        word: 'Dog',
        how: 'Pat your thigh twice. Some people snap their fingers after.',
        hook: 'Calling a dog over.',
        why: 'Animals are usually the signs children are most motivated to learn.',
      },
      {
        word: 'Cat',
        how: 'Pinch thumb and index finger at your cheek and pull outward, like drawing a whisker.',
        hook: 'Whiskers.',
        why: '',
      },
    ],
  },
  {
    id: 'feelings',
    label: 'Feelings and hard moments',
    blurb: 'These are the ones that change how a difficult afternoon goes, because a child who can name it does not have to act it out.',
    signs: [
      {
        word: 'Hurt, or pain',
        how: 'Point both index fingers toward each other and jab them together twice. Do it near the part that hurts.',
        hook: '2 points meeting where it hurts.',
        why: 'Worth teaching early. A toddler who can tell you it is their ear saves you both a lot.',
      },
      {
        word: 'Sad',
        how: 'Open hands in front of your face, fingers spread, and draw them slowly downward.',
        hook: 'Your face falling.',
        why: '',
      },
      {
        word: 'Mad, or angry',
        how: 'Claw your hand in front of your face and pull it sharply toward you, tensing.',
        hook: 'A face screwing up.',
        why: 'Naming anger is the first step out of it. Sign it for them while they are having it.',
      },
      {
        word: 'Scared, or afraid',
        how: 'Both hands in loose fists in front of your body, then open them suddenly toward your chest, like a flinch.',
        hook: 'Jumping out of your skin.',
        why: '',
      },
      {
        word: 'Happy',
        how: 'Flat hands brushing upward on your chest in circles.',
        hook: 'Something bubbling up inside you.',
        why: '',
      },
      {
        word: 'Stop',
        how: 'Bring the edge of one flat hand down sharply onto your other flat palm.',
        hook: 'A gate coming down.',
        why: 'Useful and worth pairing with a reason, since stop on its own is just a command.',
      },
      {
        word: 'Wait',
        how: 'Both hands up, palms up, fingers wiggling.',
        hook: 'Fingers drumming while you wait.',
        why: '',
      },
      {
        word: 'I love you',
        how: 'Index finger, pinky and thumb up, middle and ring fingers down.',
        hook: 'It is the letters I, L and Y layered on one hand.',
        why: 'Everybody learns this one first anyway, and it is worth knowing it is a real sign and not just a gesture.',
      },
    ],
  },
];

/* ==================================================================
   SIGNING BY AGE

   The word list on its own was a flat pile of twenty three signs with
   no answer to the two questions a parent actually asks: when do I
   start, and what comes after these.

   So this is the progression. Each band says what a child can
   genuinely do at that age, what to add, and what changes. The bands
   keep going to eighteen, because a hearing family that starts at six
   months and stops at two has taught their child a handful of gestures,
   and a deaf child's family that stops at two has a problem.

   THE HONEST SHAPE OF IT
   Signing to a baby is not the same activity as learning ASL. The
   first is a small set of useful words used by hearing parents, and it
   is genuinely useful. The second is a language with its own grammar
   that belongs to a community. The early bands are the first thing.
   From about five, the bands are the second thing, and they say so.

   WHERE THE AGES COME FROM
   Families can start from birth. Babies typically give a sign back
   somewhere around eight to twelve months, and earlier if the family
   started early, with some producing a rough milk as early as six or
   seven months. Nothing here promises that, because a baby who signs
   at fourteen months is not late.
   ================================================================== */

export const SIGN_STAGES = [
  {
    id: 's-birth',
    label: 'Birth to 6 months',
    minMonths: 0, maxMonths: 6,
    expect: 'Nothing back, for months. That is not a sign it is not working, it is the whole first stage.',
    howMany: '3 or 4 signs, used constantly.',
    focus: ['Milk', 'More', 'All done, or finished', 'Mom or Dad'],
    doThis: [
      'Start now. There is no age at which it is too early and the adults need the practice more than the baby does.',
      'Sign it while it is happening and while they are looking at your face. A sign made to the back of a head did not happen.',
      'Say the word out loud every single time you make the sign. The 2 together is the entire method.',
      '3 or 4 signs is the right number. A family that learns 40 and uses none has done nothing.',
    ],
    next: 'The first one comes back somewhere around 8 to 12 months, and it is usually milk.',
  },
  {
    id: 's-six',
    label: '6 to 12 months',
    minMonths: 6, maxMonths: 12,
    expect: 'The first signs come back, roughly 8 to 12 months. They will be sloppy and they still count.',
    howMany: '5 to 8, and no more until those five are theirs.',
    focus: ['Milk', 'More', 'Eat, or food', 'All done, or finished', 'Help', 'Sleep', 'Water'],
    doThis: [
      'Accept any approximation. A hand opening and closing near the face is milk. Do not correct it.',
      'Answer the sign immediately and out loud. You want more. Here is more. That is the loop that teaches it.',
      'Everybody in the house signs. A language used by one parent is not a language, it is a habit.',
      'When one sign is solid, add one. Not five.',
    ],
    next: 'Somewhere after a year the pace changes completely and they start collecting them.',
  },
  {
    id: 's-one',
    label: '1 to 18 months',
    minMonths: 12, maxMonths: 18,
    expect: 'They start asking for signs. Point at a thing and look at you, which is a request for its name.',
    howMany: '15 to 25, and they will drive it now rather than you.',
    focus: ['Please', 'Thank you', 'Dog', 'Cat', 'Ball', 'Book', 'Bath', 'Hurt or pain'],
    doThis: [
      'Follow what they are interested in rather than a list. A child who loves dogs learns dog in a day and learns napkin never.',
      'Sign the thing they just pointed at, then wait. The waiting is where it lands.',
      'Add hurt. It is the one that changes an inconsolable evening into a pointed finger.',
      'Keep signing after they can say the word. Dropping it the moment speech arrives teaches them the signs were a temporary measure.',
    ],
    next: '2 signs together, which is the beginning of grammar rather than vocabulary.',
  },
  {
    id: 's-two',
    label: '18 months to three',
    minMonths: 18, maxMonths: 36,
    expect: '2 signs joined together. More milk. Dad car. That is a sentence and it is a real milestone.',
    howMany: 'Whatever they will take. 50 is normal at this point.',
    focus: ['Play', 'Outside', 'Friend', 'Sorry', 'Wait', 'Stop', 'Scared', 'Happy', 'Sad', 'Angry'],
    doThis: [
      'Put feelings in now. A 2 year old who can sign angry before they can say it is a 2 year old having fewer of the other kind of afternoon.',
      'Join 2 signs yourself, constantly, so they hear the shape of it.',
      'Start signing while you read. Pick 3 signs in a familiar book and do them every time.',
      'If this is a hearing family and the signing has become something the child does and the adults have stopped, that is the moment it dies. Pick it back up.',
    ],
    next: 'Letters, and the first idea that signing is a language rather than a set of words.',
  },
  {
    id: 's-three',
    label: '3 to 5',
    minMonths: 36, maxMonths: 60,
    expect: 'They can copy a handshape deliberately and hold it, which is what fingerspelling needs.',
    howMany: '100 or more if it is part of the day. Plus their own name in letters.',
    focus: ['Where', 'Who', 'What', 'Again'],
    alsoLearn: ['Their own name, spelled', 'Colors', 'Numbers to 10'],
    doThis: [
      'Teach their name first, letter by letter, as a shape rather than as spelling. Most children learn it as one movement and that is correct.',
      'Question signs matter more than nouns here, because they are what turns signing into conversation.',
      'Introduce the idea that this is a language that Deaf people use, not a baby thing. Age three is not too early and it sets up everything after it.',
      'Watch signed stories together. They will copy the face before they copy the hands, which is exactly right.',
    ],
    next: 'The grammar, which is where it stops being English with your hands.',
  },
  {
    id: 's-five',
    label: '5 to 8',
    minMonths: 60, maxMonths: 96,
    expect: 'Old enough to learn that ASL has its own grammar and is not English translated.',
    howMany: 'This is where a word count stops being the measure. It becomes a class rather than a list.',
    focus: [],
    alsoLearn: ['The full alphabet', 'Numbers past 10', 'Yes and no questions', 'Facial grammar'],
    doThis: [
      'Teach that the face is grammar and not decoration. Eyebrows up is a yes or no question, eyebrows down is a question with an answer. Getting this wrong is the commonest thing hearing signers do.',
      'Word order is different. ASL puts the topic first. Store, I go. Teaching them English word order with signs on top of it is teaching them something that is not ASL.',
      'Find a real teacher, ideally a Deaf one. Past this point a hearing parent learning from videos is the ceiling rather than the floor.',
      'Go to something. A Deaf coffee night, a signed story time at a library, an ASL club. A language with no people in it does not survive.',
    ],
    next: 'Holding a conversation with somebody who is not you.',
  },
  {
    id: 's-eight',
    label: '8 to 12',
    minMonths: 96, maxMonths: 144,
    expect: 'Can hold a real conversation if they have had real exposure, and will outpace a parent who is self taught.',
    howMany: 'Fluency is the goal now, not vocabulary.',
    focus: [],
    alsoLearn: ['Classifiers', 'Telling a story in ASL', 'Deaf history', 'Talking to somebody who is not family'],
    doThis: [
      'Classifiers are the thing that makes signing look like signing rather than like a dictionary. A flat hand becoming a car, a moving finger becoming a person walking. They come from watching fluent signers, not from a list.',
      'Teach some Deaf history. Deaf schools, the 1880 Milan conference that banned signing in education for most of a century, Gallaudet, Deaf President Now. A child who signs and knows none of this has half of it.',
      'Let them talk to Deaf adults without you translating for them. Standing between your child and a conversation is a habit that is easy to form.',
      'If they are ahead of you now, say so out loud and let them teach you. That is a good thing that parents often handle badly.',
    ],
    next: 'A language on a transcript, and a possible career.',
  },
  {
    id: 's-teen',
    label: '12 to 18',
    minMonths: 144, maxMonths: 240,
    expect: 'Can reach real fluency, and can take it seriously as a subject rather than a family habit.',
    howMany: 'Course level. Think in credits and levels rather than in words.',
    focus: [],
    alsoLearn: ['ASL as a world language credit', 'Deaf culture properly', 'Interpreting, and its ethics'],
    doThis: [
      '45 states, Texas included, have laws or regulations letting ASL count as a world language. It can go on a high school transcript and be accepted by most universities. Check your own state and your own target colleges, because the detail varies.',
      'Culture, not just language. Deaf is a culture with a capital D, and being fluent without understanding that is the thing Deaf adults complain about most.',
      'If they are thinking about interpreting, the ethics are the hard part rather than the signing. A child of Deaf adults who has interpreted for their parents since they were 7 already knows why.',
      'Keep them in Deaf spaces where they are not the most fluent person in the room. That is the only place fluency keeps growing.',
    ],
    next: '',
  },
];

export function signStageFor(months) {
  const m = Number(months);
  if (!isFinite(m)) return null;
  for (let i = 0; i < SIGN_STAGES.length; i++) {
    const s = SIGN_STAGES[i];
    if (m >= s.minMonths && m < s.maxMonths) return s;
  }
  return m >= 240 ? SIGN_STAGES[SIGN_STAGES.length - 1] : null;
}

export function signStageById(id) {
  return SIGN_STAGES.filter((s) => s.id === id)[0] || null;
}

/* Every sign in the book, flat, so a stage can name a word and the
   screen can find how to make it without the two lists having to be
   kept in step by hand. */
export function allSigns() {
  const out = [];
  SIGN_GROUPS.forEach((g) => g.signs.forEach((s) => out.push(s)));
  EXTRA_SIGNS.forEach((s) => out.push(s));
  return out;
}

export function signByWord(word) {
  const w = String(word || '').toLowerCase();
  return allSigns().filter((s) => String(s.word).toLowerCase() === w)[0] || null;
}

/* The words a stage asks for that are not in the themed groups. Kept
   separate so the groups stay readable as groups. */
export const EXTRA_SIGNS = [
  { word: 'Sleep', how: 'Open hand in front of your face, draw it down past your chin closing it as you go, ending with your eyes shut.', hook: 'Your face closing for the night.', why: 'Lets them tell you they are done before the meltdown tells you.' },
  { word: 'Angry', how: 'Claw your hand in front of your stomach and pull it up sharply towards your chest.', hook: 'Something boiling up out of your middle.', why: 'A 2 year old who can sign this before they can say it has fewer of the other kind of afternoon.' },
  { word: 'Mom or Dad', how: 'Thumb of an open hand to the chin for mom, to the forehead for dad. Fingers spread, tap twice.', hook: 'Low for mom, high for dad. That is the only thing to remember.', why: 'Lets a baby ask for a specific person rather than crying at whoever is nearest.' },
  { word: 'Ball', how: 'Curve both hands as though holding a ball and tap the fingertips together twice.', hook: 'You are holding the ball.', why: 'One of the first things a toddler wants badly enough to ask for.' },
  { word: 'Bath', how: '2 fists on your chest, rubbing up and down.', hook: 'Scrubbing yourself.', why: 'Warns them what is coming, which is most of what stops a bath time fight.' },
  { word: 'Hurt or pain', how: 'Point both index fingers at each other and jab them together twice, near wherever hurts.', hook: '2 points of pain meeting.', why: 'The single most useful sign in the book. It turns an inconsolable hour into a pointed finger.' },
  { word: 'Play', how: 'Both hands in the Y shape, thumb and pinky out, and shake them from the wrists.', hook: 'Loose and waggling, which is what play looks like.', why: 'Gives them a way to ask for your attention that is not pulling at you.' },
  { word: 'Outside', how: 'Open hand near your chest, close it into a grabbing shape as you pull it outward and up.', hook: 'Pulling yourself out through a door.', why: 'The request that prevents the most afternoons from going wrong.' },
  { word: 'Friend', how: 'Hook your 2 index fingers together, then swap which one is on top.', hook: '2 people linked, both ways round.', why: 'Comes into its own the moment there are other children.' },
  { word: 'Sorry', how: 'Make a fist and rub it in a circle over your chest.', hook: 'Rubbing the feeling in your chest.', why: 'A 2 year old can mean it long before they can say it.' },
  { word: 'Wait', how: 'Both hands up, palms up, fingers wiggling.', hook: 'Fingers drumming while you wait.', why: 'A visible answer to a demand, which works far better than the word does.' },
  { word: 'Stop', how: 'Bring the edge of one flat hand down sharply onto the palm of the other.', hook: 'A chopping halt.', why: 'Clear, unmistakable, and it works across a room without shouting.' },
  { word: 'Scared', how: 'Both hands in loose fists in front of your chest, then open them suddenly towards each other.', hook: 'Your heart jumping.', why: 'Naming fear is most of what shrinks it.' },
  { word: 'Again', how: 'One hand flat, palm up. The other hand bent, arcing over and tapping into that palm.', hook: 'Coming back round to the same place.', why: 'Ends the whining version of the same request.' },
  { word: 'Where', how: 'Index finger up, shaken side to side.', hook: 'A finger looking around.', why: 'Builds joint attention, and it is the first question sign most children use.' },
  { word: 'Who', how: 'Thumb on your chin, index finger bending twice near your lips.', hook: 'Mouthing the question.', why: 'Turns signing into conversation rather than requests.' },
  { word: 'What', how: 'Both hands out, palms up, shaken slightly.', hook: 'The universal shrug, and in ASL it is a real sign.', why: 'One of the first 3 question signs.' },
];

export const SIGN_STAGE_TITLE = 'Where to start, and what comes next';
export const SIGN_STAGE_INTRO =
  'Signing is not one thing you do at one age. It starts before they can sit up and it can end in a '
  + 'language on a transcript, and what to do changes completely along the way.';
export const SIGN_STAGE_NOT_LATE =
  'If you are starting at three, or at eight, you have not missed anything. Start at the band that '
  + 'fits them now and use the earlier signs as the first words.';

export const HOW_TO_PRACTICE = {
  title: 'Making it stick',
  headline: 'How to make it actually stick, for the adults more than for the child.',
  tips: [
    'Sign the word at the same time as you say it, every time. Consistency beats quantity by a long way.',
    'Sign what is happening right now, in front of them. Signing milk while there is no milk anywhere teaches nothing.',
    'Pick 5 and use those five for a month rather than learning 50 and using none.',
    'Get their eyes first. A sign made while they are looking somewhere else did not happen.',
    'Put the signs where you use them. Feeding signs on the fridge, bedtime signs by the crib, so whoever is on duty can see them.',
    'Expect weeks of nothing. Receptive understanding comes long before they can make the shape with their hands.',
    'Accept a sloppy version. Their hands are not built for precision yet and a rough approximation still counts as communication.',
    'Everybody signs. Both parents, grandparents, the sitter, the older siblings. A language used by one person in the house is not a language.',
  ],
  ifYourChildIsDeaf:
    'If your child is deaf or hard of hearing, take everything above and go much further with it. '
    + 'Aim for a real class, a Deaf tutor, and immersion rather than a word list, and get the whole '
    + 'family in. Many states fund family sign language instruction through early intervention and '
    + 'a lot of families are never told.',
};

export const WHERE_TO_LEARN = {
  title: 'Where to actually learn it',
  headline: 'Where to actually learn it, all of these free.',
  note:
    'You cannot learn a language from written descriptions, including the ones above. Those are to '
    + 'get you started today. These are to get you somewhere.',
  places: [
    {
      name: 'ASL University, sometimes called Lifeprint',
      what: 'A free full ASL curriculum with video, run by a Deaf instructor. The closest thing to a real course at no cost.',
      url: 'https://www.lifeprint.com/',
    },
    {
      name: 'Handspeak',
      what: 'A video dictionary with a good deal of grammar and culture alongside it.',
      url: 'https://www.handspeak.com/',
    },
    {
      name: 'Signing Savvy',
      what: 'A large searchable video dictionary. Good for looking up one sign quickly.',
      url: 'https://www.signingsavvy.com/',
    },
    {
      name: 'Gallaudet University',
      what: 'The world Deaf university. Resources for families, and the place to read about Deaf education and culture from the source.',
      url: 'https://gallaudet.edu/',
    },
    {
      name: 'Hands and Voices',
      what: 'A parent led organization that takes no position on communication method, which is rarer than it sounds. Good for families weighing options and feeling pushed.',
      url: 'https://www.handsandvoices.org/',
    },
    {
      name: 'National Association of the Deaf',
      what: 'Advocacy, rights, and what schools and employers are actually required to provide.',
      url: 'https://www.nad.org/',
    },
    {
      name: 'Your state early intervention program',
      what: 'Often funds family sign language instruction, a Deaf mentor, and a teacher of the deaf. Ask by name, since it is rarely offered unprompted.',
      url: 'https://www.cdc.gov/ncbddd/actearly/parents/states.html',
    },
  ],
};

export const SIGN_MYTHS = [
  {
    myth: 'Signing will delay speech.',
    truth: 'It does not. Children with early signed language tend to do better on spoken language, not worse, including children with cochlear implants.',
  },
  {
    myth: 'Signing is only for deaf children.',
    truth: 'It helps any baby, because the hands can make the shape months before the mouth can make the word. It reduces frustration for the whole house.',
  },
  {
    myth: 'If we get an implant we will not need sign.',
    truth: 'An implant is not instant and it is not total. It comes out at bath time and it does not fix a noisy room. Sign is what fills those, before and after.',
  },
  {
    myth: 'We should wait and see how the hearing goes before starting.',
    truth: 'Waiting costs language and there is nothing to gain by it. Starting to sign takes nothing away from any other path.',
  },
  {
    myth: 'Sign language is universal.',
    truth: 'It is not. ASL and British Sign Language are entirely different languages.',
  },
  {
    myth: 'I need to be fluent before I start using it with my child.',
    truth: 'No. Start with 5 signs today. Learning alongside them is how most hearing families do it and it works.',
  },
];

export const SIGN_SOURCES = [
  { label: 'States recognizing ASL as a world language', org: 'National Association of the Deaf', url: 'https://www.nad.org/wp-content/uploads/2023/12/2023-States_Recognizing_ASL.pdf' },
  { label: 'The first signs to teach a new baby', org: 'The Learning Center for the Deaf', url: 'https://www.tlcdeaf.org/about/news/top-five-signs-teach-your-new-baby' },
  { org: 'CDC', label: 'Hearing loss in children, treatment and intervention', url: 'https://www.cdc.gov/hearing-loss-children/treatment/' },
  { org: 'NIDCD', label: 'American Sign Language', url: 'https://www.nidcd.nih.gov/health/american-sign-language' },
  { org: 'AAP', label: 'Hearing loss and your baby', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Hearing-Loss.aspx' },
];

export function signGroup(id) {
  return SIGN_GROUPS.filter((g) => g.id === id)[0] || SIGN_GROUPS[0];
}

export function countSigns() {
  return SIGN_GROUPS.reduce((n, g) => n + g.signs.length, 0);
}

export default SIGN_GROUPS;

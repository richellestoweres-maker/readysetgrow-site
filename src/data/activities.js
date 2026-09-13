/**
 * Ready Set Grow: Activities
 * ------------------------------------------------------------------
 * Activities exist to answer "what do I do with them right now", with
 * the emphasis on right now. Every activity here uses things a family
 * already has, or nothing at all.
 *
 * WHY THIS CONNECTS TO SUPPORT LENSES
 * Each activity carries strategyTags drawn from the same vocabulary as
 * src/data/supportLenses.js. That means when a parent turns on the
 * sensory lens, heavy work activities can rise to the top automatically,
 * without maintaining a separate list per lens. One vocabulary, shared
 * across lenses, content, and activities.
 *
 * FIELDS
 *   minMonths / maxMonths  the age window, matched by age.js helpers
 *   minutes                realistic, not aspirational
 *   materials              empty array means nothing needed
 *   setting                indoor, outdoor, or anywhere
 *   skills                 what it actually builds
 *   strategyTags           shared vocabulary with lenses
 *   howTo                  numbered steps, short enough to follow while supervising
 *   makeItEasier / makeItHarder   so one activity covers a wider range
 */

export const ACTIVITY_SKILLS = [
  { id: 'sensory', label: 'Sensory' },
  { id: 'grossMotor', label: 'Gross Motor' },
  { id: 'fineMotor', label: 'Fine Motor' },
  { id: 'language', label: 'Language' },
  { id: 'socialEmotional', label: 'Social and Emotional' },
  { id: 'pretendPlay', label: 'Pretend Play' },
  { id: 'cognitive', label: 'Thinking and Problem Solving' },
  { id: 'literacy', label: 'Early Literacy' },
  { id: 'numeracy', label: 'Early Math' },
  { id: 'regulation', label: 'Calming and Regulation' },
];

export const ACTIVITY_SETTINGS = [
  { id: 'indoor', label: 'Indoor' },
  { id: 'outdoor', label: 'Outdoor' },
  { id: 'anywhere', label: 'Anywhere' },
];

export const ACTIVITIES = [
  /* ---------------- Newborn and infant ---------------- */
  {
    id: 'tummy-time-chest',
    title: 'Chest to Chest Tummy Time',
    minMonths: 0,
    maxMonths: 4,
    minutes: 5,
    setting: 'indoor',
    skills: ['grossMotor', 'socialEmotional'],
    strategyTags: ['connection-first'],
    materials: [],
    description:
      'Tummy time that does not end in crying, because they are lying on you instead of the floor.',
    howTo: [
      'Lie back on a couch or propped up in bed.',
      'Place baby tummy down on your chest, face toward yours.',
      'Talk to them so they lift their head to find your face.',
      'Stop before they get upset, even if that is one minute.',
    ],
    makeItEasier: ['Recline further back so lifting the head takes less work.'],
    makeItHarder: ['Move toward flatter surfaces as they get stronger.'],
    whyItHelps: 'Builds neck and shoulder strength, and the motivation to lift is your face.',
  },
  {
    id: 'narrate-your-day',
    title: 'Narrate What You Are Doing',
    minMonths: 0,
    maxMonths: 24,
    minutes: 5,
    setting: 'anywhere',
    skills: ['language'],
    strategyTags: ['narrate', 'model-language'],
    materials: [],
    description:
      'Say out loud whatever you are already doing. It costs nothing and it is one of the strongest language builders there is.',
    howTo: [
      'Talk through ordinary tasks as you do them.',
      'Use real words rather than simplified ones.',
      'Pause sometimes, as though waiting for a reply.',
      'Respond to their sounds as if they were answers.',
    ],
    makeItEasier: ['Pick one routine, such as diaper changes, and only narrate that one.'],
    makeItHarder: ['Add describing words, then ask questions and wait longer for a response.'],
    whyItHelps: 'Language grows from the number of words heard in real back and forth, not from lessons.',
  },
  {
    id: 'peekaboo',
    title: 'Peek a Boo',
    minMonths: 4,
    maxMonths: 18,
    minutes: 5,
    setting: 'anywhere',
    skills: ['cognitive', 'socialEmotional'],
    strategyTags: ['connection-first'],
    materials: [],
    description:
      'The classic, and it is doing real cognitive work. It teaches that things still exist when you cannot see them.',
    howTo: [
      'Cover your face with your hands or a cloth.',
      'Pause long enough for them to wonder.',
      'Reappear with a big reaction.',
      'Let them try hiding and reappearing themselves.',
    ],
    makeItEasier: ['Shorter hiding time, and keep talking so they hear you the whole time.'],
    makeItHarder: ['Hide behind furniture so your whole body disappears.'],
    whyItHelps:
      'Practices object permanence, which is also the thing that makes separation easier later.',
  },
  {
    id: 'container-play',
    title: 'In and Out Container Play',
    minMonths: 8,
    maxMonths: 24,
    minutes: 15,
    setting: 'indoor',
    skills: ['fineMotor', 'cognitive'],
    strategyTags: ['repetition'],
    materials: ['A bowl or box', 'Safe objects too big to swallow'],
    description:
      'Putting things in and taking them out again, endlessly. Deeply boring for you, genuinely important for them.',
    howTo: [
      'Give a container and a handful of safe objects.',
      'Show them once, then let them repeat it as long as they want.',
      'Name what they are doing as they go.',
    ],
    makeItEasier: ['Wider container and larger objects.'],
    makeItHarder: ['Narrower opening, or sorting by color into two containers.'],
    whyItHelps: 'Builds grasp, release, and the early idea that objects have places.',
  },

  /* ---------------- Toddler ---------------- */
  {
    id: 'obstacle-path',
    title: 'Obstacle Path',
    minMonths: 15,
    maxMonths: 84,
    minutes: 15,
    setting: 'indoor',
    skills: ['grossMotor', 'cognitive'],
    strategyTags: ['heavy-work', 'movement-break', 'break-into-steps'],
    materials: ['Pillows', 'Chairs', 'Tape or a rope'],
    description:
      'A path through the living room using what is already in it. Crawl under, climb over, balance along.',
    howTo: [
      'Lay out three or four obstacles in a line.',
      'Walk it once yourself so they see the route.',
      'Let them go through as many times as they want.',
      'Change one obstacle when interest drops.',
    ],
    makeItEasier: ['Fewer obstacles, and hold a hand for the balance section.'],
    makeItHarder: ['Add a rule such as hopping one section, or time it with a stopwatch.'],
    whyItHelps:
      'Heavy work and movement, which is often the fastest route to a calmer body afterward.',
  },
  {
    id: 'heavy-work-helper',
    title: 'Heavy Work Helper Jobs',
    minMonths: 18,
    maxMonths: 144,
    minutes: 10,
    setting: 'anywhere',
    skills: ['sensory', 'grossMotor', 'socialEmotional'],
    strategyTags: ['heavy-work', 'deep-pressure', 'movement-break'],
    materials: [],
    description:
      'Real jobs that involve pushing, pulling, or carrying something heavy. Regulating for the body and genuinely useful to you.',
    howTo: [
      'Pick a real task: carrying the laundry basket, pushing the grocery cart, wiping the table hard.',
      'Give it as a job rather than a game.',
      'Do it before the hard part of the day rather than after things fall apart.',
    ],
    makeItEasier: ['Lighter load, shorter distance.'],
    makeItHarder: ['Heavier load, or a sequence of jobs in order from memory.'],
    whyItHelps:
      'Pushing and carrying give deep input to muscles and joints, which many children find organizing.',
  },
  {
    id: 'feelings-faces',
    title: 'Feelings Faces Game',
    minMonths: 24,
    maxMonths: 84,
    minutes: 10,
    setting: 'indoor',
    skills: ['socialEmotional', 'language'],
    strategyTags: ['name-the-feeling', 'model-language'],
    materials: [],
    description:
      'Make a face, name the feeling, guess each other. Building the vocabulary before it is needed in a real moment.',
    howTo: [
      'Make an exaggerated face and ask what feeling it is.',
      'Let them make one for you to guess.',
      'Add when someone might feel that way.',
      'Keep it silly. This is not a lesson.',
    ],
    makeItEasier: ['Start with happy, sad, and mad only.'],
    makeItHarder: ['Add frustrated, disappointed, nervous, and proud.'],
    whyItHelps:
      'A child who can name a feeling has a route other than their body for expressing it.',
  },
  {
    id: 'sprout-sorting',
    title: 'Sprout Sorting',
    minMonths: 24,
    maxMonths: 72,
    minutes: 15,
    setting: 'indoor',
    skills: ['fineMotor', 'cognitive', 'numeracy'],
    strategyTags: ['fine-motor-play'],
    materials: ['Pom poms, beans, or buttons', 'Two or three bowls', 'A spoon or tongs'],
    description:
      'Sorting small objects by color or size into bowls. Quiet, focused, and it builds the hand strength writing needs later.',
    howTo: [
      'Put a mixed pile in one bowl.',
      'Show them one example of sorting.',
      'Offer tongs or a spoon to move the pieces.',
      'Let them invent their own sorting rule if they want.',
    ],
    makeItEasier: ['Two colors only, and use fingers rather than tongs.'],
    makeItHarder: ['Sort by two rules at once, such as color and size, or count each bowl at the end.'],
    whyItHelps: 'Sorting is early math, and tongs build the exact grip used for a pencil.',
    safetyNote: 'Choose pieces too large to swallow, and stay close with children under three.',
  },
  {
    id: 'transition-countdown',
    title: 'Transition Countdown',
    minMonths: 24,
    maxMonths: 96,
    minutes: 5,
    setting: 'anywhere',
    skills: ['regulation', 'socialEmotional'],
    strategyTags: ['transition-warning', 'timer', 'first-then'],
    materials: [],
    description:
      'Not really an activity, more a habit that prevents a large share of meltdowns. Warn before you switch.',
    howTo: [
      'Give a warning about five minutes before a change.',
      'Give a second one at one minute.',
      'Say what comes next, not only what is stopping.',
      'Use the same words every time so it becomes predictable.',
    ],
    makeItEasier: ['Use a visible timer so time is something they can see rather than imagine.'],
    makeItHarder: ['Let them set the timer themselves and call the transition.'],
    whyItHelps:
      'Most transition meltdowns are about being surprised, not about the new activity.',
  },

  /* ---------------- Preschool ---------------- */
  {
    id: 'animal-rescue-pretend',
    title: 'Animal Rescue Pretend Play',
    minMonths: 30,
    maxMonths: 72,
    minutes: 20,
    setting: 'indoor',
    skills: ['pretendPlay', 'socialEmotional', 'language'],
    strategyTags: ['join-their-play', 'model-language'],
    materials: ['Stuffed animals', 'A box or basket', 'Bandages or cloth strips'],
    description:
      'Set up a rescue center and care for hurt stuffed animals. Builds empathy through practice rather than through instruction.',
    howTo: [
      'Make a rescue center from a box or a corner.',
      'Bring in an animal with a problem, such as a hurt paw.',
      'Ask what the animal might be feeling.',
      'Let them lead the treatment and follow their story.',
    ],
    makeItEasier: ['One animal, one simple problem.'],
    makeItHarder: ['Add a check in chart, or have several animals with different needs.'],
    whyItHelps:
      'Caring for something else is how empathy gets practiced at an age when lectures about it do not land.',
  },
  {
    id: 'feelings-clinic',
    title: 'The Feelings Clinic',
    minMonths: 36,
    maxMonths: 72,
    minutes: 20,
    setting: 'indoor',
    skills: ['socialEmotional', 'pretendPlay', 'language'],
    strategyTags: ['name-the-feeling', 'join-their-play'],
    materials: ['Stuffed animals or dolls'],
    description:
      'A pretend clinic where the patients arrive with feelings rather than injuries. Practicing emotional words with no personal stakes.',
    howTo: [
      'Set up a clinic with a chair for patients.',
      'Bring an animal in who is sad, angry, or worried.',
      'Ask your child what the animal needs.',
      'Let them prescribe the fix, whatever it is.',
    ],
    makeItEasier: ['You play the patient and name the feeling out loud for them.'],
    makeItHarder: ['Add patients with mixed feelings, such as excited and nervous at once.'],
    whyItHelps:
      'Talking about a stuffed animal is much easier than talking about yourself, and the vocabulary transfers.',
  },
  {
    id: 'crash-pile',
    title: 'The Crash Pile',
    minMonths: 30,
    maxMonths: 96,
    minutes: 15,
    setting: 'indoor',
    skills: ['sensory', 'grossMotor', 'regulation'],
    strategyTags: ['heavy-work', 'deep-pressure', 'movement-break'],
    materials: ['Cushions', 'Pillows', 'Blankets'],
    description:
      'A legal place to crash. If your child throws their body at things, this gives that need somewhere to go.',
    howTo: [
      'Pile cushions and pillows against a wall, away from hard edges.',
      'Let them jump or fall into it from a safe height.',
      'Add a squeeze between two cushions if they like deep pressure.',
      'Make it a place they can go without asking.',
    ],
    makeItEasier: ['Lower launch point, more cushions.'],
    makeItHarder: ['Add a run up, or a sequence such as roll, crash, and get up.'],
    whyItHelps:
      'Saying yes to the need and no only to the location resolves most of these conflicts.',
    safetyNote: 'Clear the area of furniture corners and supervise the height they jump from.',
  },
  {
    id: 'feeling-walk',
    title: 'Feeling Walk',
    minMonths: 30,
    maxMonths: 84,
    minutes: 15,
    setting: 'outdoor',
    skills: ['socialEmotional', 'grossMotor', 'language'],
    strategyTags: ['movement-break', 'name-the-feeling'],
    materials: [],
    description:
      'Walk outside and take turns calling out a feeling, then act it out with your whole body.',
    howTo: [
      'Head outside with no destination.',
      'Take turns naming a feeling.',
      'Both of you act it out physically, stomping, tiptoeing, spinning.',
      'Add why someone might feel that way if they are interested.',
    ],
    makeItEasier: ['Stick to three feelings and repeat them.'],
    makeItHarder: ['Guess the feeling from the movement alone, without saying it.'],
    whyItHelps: 'Pairs movement with emotional vocabulary, which makes the words stick.',
  },
  {
    id: 'nature-count',
    title: 'Count What You Find',
    minMonths: 36,
    maxMonths: 84,
    minutes: 20,
    setting: 'outdoor',
    skills: ['numeracy', 'cognitive'],
    strategyTags: [],
    materials: [],
    description:
      'Collect and count things outside: leaves, rocks, pinecones, sticks. Math that does not look like math.',
    howTo: [
      'Pick something to collect.',
      'Count as you gather them.',
      'Sort into groups by size or color.',
      'Count each group and compare which has more.',
    ],
    makeItEasier: ['Count to five, and count out loud together.'],
    makeItHarder: ['Add simple addition, or ask how many more one pile has than another.'],
    whyItHelps: 'Counting real objects builds number sense far better than counting on a screen.',
  },
  {
    id: 'leaf-detective',
    title: 'Leaf Detective',
    minMonths: 36,
    maxMonths: 132,
    minutes: 20,
    setting: 'outdoor',
    skills: ['cognitive', 'language'],
    strategyTags: ['observe-and-note'],
    materials: [],
    description:
      'Find one leaf and look at it closely. Smooth edges, bumpy edges, an unusual shape, a different color.',
    howTo: [
      'Find a leaf together.',
      'Ask what they notice before offering anything yourself.',
      'Look for a second leaf that is different, and compare them.',
      'Take one home if they want to keep it.',
    ],
    makeItEasier: ['Compare just two leaves and name one difference.'],
    makeItHarder: ['Keep a nature journal, or try to identify the tree it came from.'],
    whyItHelps: 'Close observation is the foundation of scientific thinking, and it starts here.',
  },
  {
    id: 'breathing-games',
    title: 'Breathing Games',
    minMonths: 36,
    maxMonths: 144,
    minutes: 5,
    setting: 'anywhere',
    skills: ['regulation'],
    strategyTags: ['breathing-game', 'co-regulate', 'quiet-space'],
    materials: [],
    description:
      'Breathing taught as a game, when everyone is calm, so it is available later when nobody is.',
    howTo: [
      'Pretend to smell a flower, then blow out a candle.',
      'Or trace up and down the fingers of one hand, breathing in going up and out going down.',
      'Practice when calm, never for the first time during a meltdown.',
      'Do it alongside them rather than instructing them to do it.',
    ],
    makeItEasier: ['Blow a real feather or a piece of tissue so the breath is visible.'],
    makeItHarder: ['Add counting, or let them teach it to someone else.'],
    whyItHelps:
      'A strategy only works in a hard moment if it was learned in an easy one.',
  },
  {
    id: 'letter-hunt',
    title: 'Letter Hunt',
    minMonths: 42,
    maxMonths: 84,
    minutes: 10,
    setting: 'anywhere',
    skills: ['literacy'],
    strategyTags: [],
    materials: [],
    description:
      'Hunt for one letter everywhere you go: on signs, packages, and books. Usually the first letter of their name.',
    howTo: [
      'Pick one letter, ideally the one their name starts with.',
      'Spot it out loud wherever you see it.',
      'Let them find the next one.',
      'Say the sound as well as the name of the letter.',
    ],
    makeItEasier: ['Just their initial, and you point out most of them at first.'],
    makeItHarder: ['Hunt for whole words, or for letters in order.'],
    whyItHelps:
      'Letters in the real world connect print to meaning, which is what early reading rests on.',
  },
  {
    id: 'first-then-board',
    title: 'Make a First Then Board',
    minMonths: 30,
    maxMonths: 120,
    minutes: 15,
    setting: 'indoor',
    skills: ['cognitive', 'regulation'],
    strategyTags: ['visual-schedule', 'first-then', 'break-into-steps'],
    materials: ['Paper', 'Markers', 'Tape'],
    description:
      'Two boxes on a page: first this, then that. Makes the order visible instead of something they have to hold in their head.',
    howTo: [
      'Draw two boxes side by side, labeled first and then.',
      'Draw or write the task in the first box and the reward or next activity in the second.',
      'Let your child help draw it, so it becomes theirs.',
      'Point at it rather than repeating yourself out loud.',
    ],
    makeItEasier: ['Pictures rather than words, and only two steps.'],
    makeItHarder: ['Extend to a full morning routine with four or five steps.'],
    whyItHelps:
      'Seeing the sequence removes the argument, because the board is saying it rather than you.',
  },

  /* ---------------- School age ---------------- */
  {
    id: 'kitchen-math',
    title: 'Cooking as Math',
    minMonths: 60,
    maxMonths: 168,
    minutes: 30,
    setting: 'indoor',
    skills: ['numeracy', 'fineMotor', 'cognitive'],
    strategyTags: ['break-into-steps'],
    materials: ['A simple recipe', 'Measuring cups'],
    description:
      'Fractions, doubling, and measuring, done with a real outcome at the end.',
    howTo: [
      'Pick a recipe with several measurements.',
      'Let them do the measuring themselves.',
      'Ask what happens if you double it or halve it.',
      'Let them make a mistake and see the result.',
    ],
    makeItEasier: ['Whole cups only, and read the steps for them.'],
    makeItHarder: ['Double a recipe with fractions, or scale it to feed a specific number of people.'],
    whyItHelps:
      'Fractions are abstract on paper and obvious in a measuring cup.',
  },
  {
    id: 'two-minute-start',
    title: 'The Two Minute Start',
    minMonths: 72,
    maxMonths: 216,
    minutes: 5,
    setting: 'anywhere',
    skills: ['cognitive', 'regulation'],
    strategyTags: ['body-double', 'break-into-steps', 'timer'],
    materials: [],
    description:
      'For a child who knows exactly what to do and cannot start. You sit down and do the first two minutes with them.',
    howTo: [
      'Sit down beside them, without taking over.',
      'Do the first two minutes together.',
      'Then say you are staying nearby and let them continue.',
      'Do not comment on the work while they are getting going.',
    ],
    makeItEasier: ['Stay for five minutes rather than two.'],
    makeItHarder: ['Sit in the same room but work on your own thing.'],
    whyItHelps:
      'Starting is a separate skill from doing. Some children need company only for the starting part.',
  },
  {
    id: 'family-check-in',
    title: 'Weekly Family Check In',
    minMonths: 60,
    maxMonths: 240,
    minutes: 20,
    setting: 'indoor',
    skills: ['socialEmotional', 'language'],
    strategyTags: ['connection-first'],
    materials: [],
    description:
      'The same four questions every week. Builds a habit of talking before there is something hard to talk about.',
    howTo: [
      'Pick a regular time, ideally attached to something you already do such as a meal.',
      'Ask what went well, what was stressful, what they need help with, and what is coming up.',
      'Answer the questions yourself too, honestly.',
      'Do not turn their answers into a lecture, or they will stop giving real ones.',
    ],
    makeItEasier: ['Two questions only, and keep it to five minutes.'],
    makeItHarder: ['Add setting one goal each for the week and reviewing it the next time.'],
    whyItHelps:
      'A routine conversation is far easier to use in a crisis than a conversation started from nothing.',
  },
  /* ---------------- Added: first year depth ----------------
     The first year had the fewest activities and the most hours to
     fill, which is backwards. These all use a body, a voice, and
     whatever is already in the room. ------------------------------ */
  {
    id: 'face-time-close',
    title: 'Close Up Face Watching',
    minMonths: 0,
    maxMonths: 4,
    minutes: 5,
    setting: 'anywhere',
    skills: ['socialEmotional', 'cognitive'],
    strategyTags: ['connection-first', 'wait-time'],
    materials: [],
    description:
      'A newborn can focus clearly at about the distance from your elbow to your eyes. That is not an accident, and it is the whole activity.',
    howTo: [
      'Hold them about eight to twelve inches from your face.',
      'Make one slow expression, such as a wide mouth or raised eyebrows.',
      'Hold it, then wait. Waiting is the part most people skip.',
      'If they move their mouth or eyes at all, respond as though they spoke.',
    ],
    makeItEasier: ['Do it during a feed, when they are already still and close.'],
    makeItHarder: ['Try slowly sticking your tongue out and see whether they copy it.'],
    whyItHelps:
      'Early turn taking, long before words, is what conversation is actually built on.',
  },
  {
    id: 'slow-dance',
    title: 'Slow Dancing With A Baby',
    minMonths: 0,
    maxMonths: 12,
    minutes: 10,
    setting: 'indoor',
    skills: ['regulation', 'sensory', 'socialEmotional'],
    strategyTags: ['co-regulate', 'deep-pressure', 'connection-first'],
    materials: [],
    description:
      'Movement plus your heartbeat plus contact. It is the closest thing there is to a reset button for both of you.',
    howTo: [
      'Hold them upright against your chest, one hand supporting the head.',
      'Put on anything slow, or hum.',
      'Sway side to side more slowly than feels natural.',
      'Keep going for a full song, even if the crying does not stop right away.',
    ],
    makeItEasier: ['Sit on a birth ball and bounce gently instead of standing.'],
    makeItHarder: ['Try it with them facing outward once they can hold their head up.'],
    whyItHelps:
      'Rhythmic movement with steady pressure calms a nervous system that cannot calm itself yet.',
  },
  {
    id: 'kick-and-crinkle',
    title: 'Kick And Crinkle',
    minMonths: 2,
    maxMonths: 8,
    minutes: 10,
    setting: 'indoor',
    skills: ['grossMotor', 'cognitive', 'sensory'],
    strategyTags: ['repetition', 'observe-and-note'],
    materials: ['A crinkly wrapper, paper bag, or foil'],
    description:
      'Put something noisy where their feet land, and let them discover that they are the one making the sound.',
    howTo: [
      'Lay them on their back somewhere safe.',
      'Tape or hold a crinkly material where their feet naturally kick.',
      'Say what happened each time they hit it.',
      'Move it slightly so they have to aim.',
    ],
    makeItEasier: ['Hold the material right against their feet so no aiming is needed.'],
    makeItHarder: ['Use two different sounds on two sides so they choose.'],
    whyItHelps:
      'Cause and effect is the first real thinking skill, and feet are easier to control than hands at this age.',
  },
  {
    id: 'mirror-time',
    title: 'Baby In The Mirror',
    minMonths: 3,
    maxMonths: 18,
    minutes: 10,
    setting: 'indoor',
    skills: ['socialEmotional', 'language', 'cognitive'],
    strategyTags: ['narrate', 'model-language', 'connection-first'],
    materials: ['Any mirror'],
    description:
      'Babies are fascinated by faces, and the mirror has two of them.',
    howTo: [
      'Hold them in front of a mirror where you are both visible.',
      'Name what you see, such as their nose, your nose, their hands.',
      'Wave, and point out the waving in the glass.',
      'Let them touch and pat the reflection.',
    ],
    makeItEasier: ['Sit closer so the image is bigger and easier to track.'],
    makeItHarder: ['Put a sticker on their forehead and see whether they reach for their head or the mirror.'],
    whyItHelps:
      'Recognizing yourself is a slow build, and every look in the mirror is practice for it.',
  },
  {
    id: 'bathtime-pour',
    title: 'Pouring In The Bath',
    minMonths: 5,
    maxMonths: 30,
    minutes: 10,
    setting: 'indoor',
    skills: ['fineMotor', 'cognitive', 'sensory'],
    strategyTags: ['fine-motor-play', 'repetition'],
    materials: ['Two cups you already own'],
    description:
      'Bath time is already happening. Adding two cups turns it into a physics lesson.',
    howTo: [
      'Put two cups of different sizes in the water.',
      'Fill one and pour it out slowly where they can watch.',
      'Hand them a cup and wait.',
      'Say full, empty, and more as it happens.',
    ],
    makeItEasier: ['One cup only, and help their hands tip it.'],
    makeItHarder: ['Add a cup with a hole in the bottom and let them work out why it never fills.'],
    whyItHelps:
      'Pouring builds wrist control and the early idea that the same water can look like different amounts.',
  },
  {
    id: 'roll-the-ball',
    title: 'Rolling A Ball Back',
    minMonths: 6,
    maxMonths: 24,
    minutes: 10,
    setting: 'anywhere',
    skills: ['grossMotor', 'socialEmotional', 'cognitive'],
    strategyTags: ['wait-time', 'join-their-play', 'repetition'],
    materials: ['Any ball, or a rolled up sock'],
    description:
      'The first game with rules. You go, then I go, and nobody explains it out loud.',
    howTo: [
      'Sit on the floor facing them with legs apart.',
      'Roll the ball slowly toward their hands.',
      'Say their name, then wait for them to push it back.',
      'React with real delight when it comes back, however badly.',
    ],
    makeItEasier: ['Sit close enough that the ball reaches them without a real push.'],
    makeItHarder: ['Move further apart, or add a third person so they must choose a direction.'],
    whyItHelps:
      'Turn taking with an object is the same structure as conversation, practiced before words arrive.',
  },
  {
    id: 'hide-under-cup',
    title: 'What Is Under The Cup',
    minMonths: 7,
    maxMonths: 20,
    minutes: 10,
    setting: 'indoor',
    skills: ['cognitive'],
    strategyTags: ['repetition', 'wait-time'],
    materials: ['A cup and a small toy'],
    description:
      'Hiding one thing under another, over and over, until the answer stops being a surprise.',
    howTo: [
      'Show them a small toy while they are watching.',
      'Cover it with an upturned cup, slowly.',
      'Wait. Let them lift the cup themselves.',
      'Repeat many more times than feels interesting to you.',
    ],
    makeItEasier: ['Leave part of the toy sticking out from under the cup.'],
    makeItHarder: ['Use two cups, and move them after hiding.'],
    whyItHelps:
      'Object permanence is what makes you leaving the room survivable, and this is how it gets practiced.',
  },
  {
    id: 'basket-of-real-things',
    title: 'A Basket Of Real Things',
    minMonths: 6,
    maxMonths: 20,
    minutes: 15,
    setting: 'indoor',
    skills: ['sensory', 'fineMotor', 'language'],
    strategyTags: ['sensory-bin', 'narrate', 'observe-and-note'],
    materials: ['A basket', 'Five or six safe household objects'],
    description:
      'Babies almost always prefer the wooden spoon to the toy. This leans into that instead of fighting it.',
    howTo: [
      'Fill a basket with safe real objects, such as a wooden spoon, a silicone brush, a metal measuring cup, a fabric scrap.',
      'Sit nearby and let them empty it at their own pace.',
      'Name each thing as they pick it up, without taking it from them.',
      'Swap two objects out each week so it stays interesting.',
    ],
    makeItEasier: ['Three objects instead of six, so it is less overwhelming.'],
    makeItHarder: ['Ask for one by name and see whether they hand it over.'],
    whyItHelps:
      'Different weights, temperatures, and textures give far more sensory information than one plastic toy can.',
  },
  {
    id: 'songs-with-hands',
    title: 'Songs With Hand Motions',
    minMonths: 4,
    maxMonths: 36,
    minutes: 5,
    setting: 'anywhere',
    skills: ['language', 'fineMotor', 'socialEmotional'],
    strategyTags: ['rhyme-and-song', 'repetition', 'model-language'],
    materials: [],
    description:
      'Any song where the hands do something. It does not matter whether you can sing.',
    howTo: [
      'Pick one or two songs and use the same ones every day.',
      'Do the motions clearly and slowly.',
      'Pause right before the familiar part and wait for them to fill it in.',
      'Let them lead the motions once they know it.',
    ],
    makeItEasier: ['Do the motions on their hands with yours.'],
    makeItHarder: ['Sing it faster, then very slowly, and let them tell you which one.'],
    whyItHelps:
      'Rhythm and repetition make words stick, and the pause teaches them their turn is expected.',
  },
  {
    id: 'pillow-mountain',
    title: 'Pillow Mountain',
    minMonths: 8,
    maxMonths: 30,
    minutes: 15,
    setting: 'indoor',
    skills: ['grossMotor', 'sensory'],
    strategyTags: ['heavy-work', 'movement-break', 'obstacle-course'],
    materials: ['Couch cushions and pillows'],
    description:
      'An unstable surface is harder to walk on than a floor, which is exactly the point.',
    howTo: [
      'Pile cushions and pillows on the floor, away from hard edges.',
      'Let them climb, crawl over, and fall into it.',
      'Stay close enough to catch, far enough to let them work.',
      'Let them rebuild the pile themselves when it collapses.',
    ],
    makeItEasier: ['Flatter pile, and hold a hand.'],
    makeItHarder: ['Put a toy on the far side so there is a reason to cross.'],
    whyItHelps:
      'Balance comes from wobbling and recovering, not from standing still on flat ground.',
  },
  {
    id: 'point-and-name-window',
    title: 'The Window Report',
    minMonths: 8,
    maxMonths: 36,
    minutes: 10,
    setting: 'indoor',
    skills: ['language', 'cognitive'],
    strategyTags: ['narrate', 'model-language', 'wait-time', 'quiet-space'],
    materials: ['A window'],
    description:
      'Stand at a window and report what is happening outside. Free, weatherproof, and endlessly different.',
    howTo: [
      'Hold them or stand together at a window.',
      'Describe what is moving, such as a car, a bird, a person walking a dog.',
      'Follow their eyes and name whatever they are already looking at.',
      'Pause after naming something and let them react.',
    ],
    makeItEasier: ['Narrate one thing only, repeated, such as every car that goes past.'],
    makeItHarder: ['Ask where questions, then guessing questions such as where do you think she is going.'],
    whyItHelps:
      'Naming what a child is already looking at builds vocabulary faster than naming what you chose.',
  },
  {
    id: 'laundry-helper-baby',
    title: 'Laundry Basket Work',
    minMonths: 9,
    maxMonths: 36,
    minutes: 15,
    setting: 'indoor',
    skills: ['fineMotor', 'grossMotor', 'cognitive'],
    strategyTags: ['heavy-work', 'break-into-steps', 'celebrate-partial'],
    materials: ['Laundry you have to do anyway'],
    description:
      'The chore still gets done, more slowly, and they get an hour of real work out of it.',
    howTo: [
      'Sit down with the basket where they can reach it.',
      'Give them one job, such as pulling everything out, or handing you socks.',
      'Name what they hand you.',
      'Let them push or drag the basket, which is genuinely heavy work.',
    ],
    makeItEasier: ['Emptying only. Sorting can wait a year.'],
    makeItHarder: ['Ask them to find matching socks, or put all the towels in one pile.'],
    whyItHelps:
      'Carrying and pushing weight organizes the body, and helping with real work matters to them in a way toys do not.',
  },
  /* ---------------- Added: older kids and teenagers ----------------
     Activities for a fifteen year old do not look like activities. They
     look like doing something side by side, or handing over a real
     responsibility. That is what these are. ---------------------- */
  {
    id: 'cook-one-meal',
    title: 'They Cook, You Sit Down',
    minMonths: 108,
    maxMonths: 228,
    minutes: 45,
    setting: 'indoor',
    skills: ['cognitive', 'socialEmotional', 'numeracy'],
    strategyTags: ['break-into-steps', 'celebrate-partial', 'body-double'],
    materials: ['Ingredients for one simple meal'],
    description:
      'Not helping you cook. Cooking, while you stay in the room and answer questions.',
    howTo: [
      'Pick one meal together earlier in the week and buy what it needs.',
      'Read the recipe through with them once before starting.',
      'Sit where they can ask you things, and let them make the decisions.',
      'Eat what comes out, and say something true about it.',
    ],
    makeItEasier: ['You do the knife work and the stove, they do everything else.'],
    makeItHarder: ['They plan the meal, write the list, and manage the timing of two dishes at once.'],
    whyItHelps:
      'Following a multi step plan with a real result at the end is executive function practice that does not feel like practice.',
  },
  {
    id: 'side-by-side-drive',
    title: 'The Car Conversation',
    minMonths: 120,
    maxMonths: 228,
    minutes: 20,
    setting: 'anywhere',
    skills: ['socialEmotional', 'language'],
    strategyTags: ['connection-first', 'wait-time', 'reduce-demands'],
    materials: [],
    description:
      'Teenagers talk more when nobody is looking at them. A car is the easiest place in the world for that.',
    howTo: [
      'Drive somewhere ordinary, even if the errand could have waited.',
      'Start with something low stakes, such as music or a show.',
      'Ask one open question, then stop talking.',
      'Let silences sit. Do not fill them.',
    ],
    makeItEasier: ['Say nothing at all and just let them pick the music.'],
    makeItHarder: ['Bring up one harder topic near the end, when the drive is almost over.'],
    whyItHelps:
      'Side by side and no eye contact lowers the pressure enough that harder things can be said.',
  },
  {
    id: 'teach-me-something',
    title: 'Teach Me Something You Know',
    minMonths: 96,
    maxMonths: 228,
    minutes: 30,
    setting: 'anywhere',
    skills: ['language', 'socialEmotional', 'cognitive'],
    strategyTags: ['join-their-play', 'celebrate-partial', 'connection-first'],
    materials: [],
    description:
      'Hand them the expert role in something you genuinely do not understand, and mean it.',
    howTo: [
      'Pick something they actually care about, such as a game, an artist, or an app.',
      'Ask them to teach you properly, not to summarize.',
      'Ask real follow up questions, including ones that show you were listening.',
      'Do not turn it into a lesson about screen time.',
    ],
    makeItEasier: ['Ten minutes, and one narrow question rather than the whole subject.'],
    makeItHarder: ['Ask them to teach it to a younger sibling while you watch.'],
    whyItHelps:
      'Explaining something out loud deepens their own understanding, and being the expert with a parent is rare and it lands.',
  },
  {
    id: 'money-of-their-own',
    title: 'A Budget That Is Actually Theirs',
    minMonths: 120,
    maxMonths: 228,
    minutes: 30,
    setting: 'anywhere',
    skills: ['numeracy', 'cognitive'],
    strategyTags: ['break-into-steps', 'checklist', 'observe-and-note'],
    materials: ['A set amount of money, however small'],
    description:
      'A fixed amount they control, including the right to spend it badly.',
    howTo: [
      'Agree on an amount and a period, such as a month.',
      'Agree on what it is meant to cover.',
      'Hand it over and then stay out of the decisions.',
      'When it runs out early, do not top it up. Talk about it at the end of the month instead.',
    ],
    makeItEasier: ['A week at a time instead of a month, with one category only.'],
    makeItHarder: ['Add a savings goal they have to reach by a date they picked.'],
    whyItHelps:
      'Running out of money at fourteen with you nearby is a much cheaper lesson than running out at twenty two.',
  },
  {
    id: 'long-walk-no-phone',
    title: 'A Walk With No Destination',
    minMonths: 84,
    maxMonths: 228,
    minutes: 30,
    setting: 'outdoor',
    skills: ['regulation', 'grossMotor', 'socialEmotional'],
    strategyTags: ['movement-break', 'co-regulate', 'quiet-space'],
    materials: [],
    description:
      'Walking side by side, phones away, going nowhere in particular. It works on hard days and ordinary ones.',
    howTo: [
      'Invite rather than require, and accept a no without commentary.',
      'Leave the phones at home or in pockets, yours included.',
      'Walk at their pace.',
      'Let the conversation happen or not happen.',
    ],
    makeItEasier: ['Around the block once, with a specific small errand as the excuse.'],
    makeItHarder: ['Somewhere new, and let them navigate.'],
    whyItHelps:
      'Rhythmic movement lowers stress hormones, and a walk gives a hard conversation somewhere to go.',
  },
  {
    id: 'fix-something-broken',
    title: 'Fix Something That Is Broken',
    minMonths: 96,
    maxMonths: 228,
    minutes: 45,
    setting: 'indoor',
    skills: ['cognitive', 'fineMotor'],
    strategyTags: ['break-into-steps', 'celebrate-partial', 'adaptive-tools'],
    materials: ['Something broken you were going to throw away'],
    description:
      'A broken lamp, a bike, a drawer that sticks. The stakes are zero because it is already broken.',
    howTo: [
      'Pick something that is already ruined, so a failed attempt costs nothing.',
      'Look up how it works together before touching it.',
      'Let them do the hands on part, including the parts they will do wrong.',
      'If it stays broken, say so plainly. That is a normal result.',
    ],
    makeItEasier: ['Something with four parts or fewer, such as a flashlight or a pen.'],
    makeItHarder: ['They pick the object and find the instructions themselves.'],
    whyItHelps:
      'Taking things apart builds the belief that objects have insides and problems have causes, which is most of engineering.',
  },
  {
    id: 'plan-the-outing',
    title: 'They Plan The Outing',
    minMonths: 108,
    maxMonths: 228,
    minutes: 60,
    setting: 'anywhere',
    skills: ['cognitive', 'socialEmotional', 'numeracy'],
    strategyTags: ['break-into-steps', 'checklist', 'timer'],
    materials: [],
    description:
      'Hand over a real family outing, including the boring parts like timing and cost.',
    howTo: [
      'Give them the constraints, such as the budget, the date, and how long you have.',
      'Let them choose where and work out how you get there.',
      'Ask questions rather than corrections when the plan has a hole in it.',
      'Go, and follow their plan even when it runs late.',
    ],
    makeItEasier: ['One afternoon, one destination, and you handle the travel.'],
    makeItHarder: ['A whole day with two stops and a meal, planned to a budget they track.'],
    whyItHelps:
      'Planning forward in time and holding several steps at once is exactly the skill that is still developing in the teenage brain.',
  },
  {
    id: 'hard-news-together',
    title: 'Read The Same Thing And Disagree',
    minMonths: 132,
    maxMonths: 228,
    minutes: 30,
    setting: 'anywhere',
    skills: ['literacy', 'cognitive', 'language'],
    strategyTags: ['wait-time', 'name-the-feeling', 'model-language'],
    materials: ['One article or video you both watch'],
    description:
      'Pick something arguable, form your own opinions separately, then compare them without trying to win.',
    howTo: [
      'Pick one article or video that has a real argument in it.',
      'Both go through it on your own.',
      'Each say what you think before either of you argues.',
      'Ask what would change their mind, and answer that question yourself too.',
    ],
    makeItEasier: ['Something short and low stakes, such as a review or a local story.'],
    makeItHarder: ['Ask each of you to argue the opposite side of what you actually believe.'],
    whyItHelps:
      'Practicing disagreement somewhere safe is how a teenager learns that being challenged is not the same as being attacked.',
  },
  {
    id: 'body-of-work',
    title: 'One Thing, Every Week, For A Season',
    minMonths: 84,
    maxMonths: 228,
    minutes: 30,
    setting: 'anywhere',
    skills: ['cognitive', 'socialEmotional'],
    strategyTags: ['repetition', 'celebrate-partial', 'observe-and-note'],
    materials: [],
    description:
      'Pick one thing and do it weekly for three months. A photo, a drawing, a page of writing, a song. The point is the stack at the end.',
    howTo: [
      'Choose something small enough to finish in half an hour.',
      'Pick a day and keep it, even on the weeks it is bad.',
      'Keep everything, including the bad ones, in one place.',
      'At the end of three months, look at the whole set together.',
    ],
    makeItEasier: ['Every other week, and fifteen minutes.'],
    makeItHarder: ['Add one constraint that changes each month, such as the same subject every time.'],
    whyItHelps:
      'Seeing your own improvement laid out is the most convincing argument there is that effort works, and it beats being told.',
  },
  {
    id: 'kid-run-project',
    title: 'Something With A Real Deadline',
    minMonths: 96,
    maxMonths: 180,
    minutes: 45,
    setting: 'anywhere',
    skills: ['cognitive', 'socialEmotional'],
    strategyTags: ['break-into-steps', 'visual-schedule', 'timer', 'checklist'],
    materials: [],
    description:
      'A small project with a date on it and an audience, such as a bake sale, a video, or a gift they make.',
    howTo: [
      'Agree on the thing and the date it has to be done by.',
      'Break it into steps together, then write the steps somewhere visible.',
      'Check in on the steps, not on the whole thing.',
      'Let the deadline be real, including the part where it is not finished.',
    ],
    makeItEasier: ['A week, three steps, and you do one of them.'],
    makeItHarder: ['A month, and they set their own checkpoints.'],
    whyItHelps:
      'Working backward from a date is a skill, and it is easier to learn on something they chose than on homework.',
  },
];

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

/** One activity by id, or null. */
export function getActivityById(id) {
  if (!id) return null;
  return ACTIVITIES.find((a) => a.id === id) || null;
}

/** Activities that fit a child's age in months. */
export function getActivitiesForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return [];
  return ACTIVITIES.filter((a) => months >= a.minMonths && months < a.maxMonths);
}

/**
 * Filter activities by any combination of options. Every filter is
 * optional, and passing nothing returns everything for that age.
 *
 * filterActivities({ months: 51, setting: 'outdoor', maxMinutes: 20 })
 */
export function filterActivities({ months, setting, skill, maxMinutes, noMaterials } = {}) {
  let list = typeof months === 'number' ? getActivitiesForAge(months) : [...ACTIVITIES];

  if (setting && setting !== 'anywhere') {
    list = list.filter((a) => a.setting === setting || a.setting === 'anywhere');
  }
  if (skill) {
    list = list.filter((a) => Array.isArray(a.skills) && a.skills.includes(skill));
  }
  if (typeof maxMinutes === 'number') {
    list = list.filter((a) => a.minutes <= maxMinutes);
  }
  if (noMaterials) {
    list = list.filter((a) => !a.materials || a.materials.length === 0);
  }
  return list;
}

/**
 * Activities for a child, reordered so anything matching their active
 * support lenses comes first. Nothing is hidden, only reordered.
 *
 * Pass the merged strategy tags from getMergedStrategyTags in
 * supportLenses.js.
 */
export function getActivitiesForChild(months, mergedStrategyTags = []) {
  const forAge = getActivitiesForAge(months);
  if (!Array.isArray(mergedStrategyTags) || mergedStrategyTags.length === 0) return forAge;

  const relevance = (a) =>
    (a.strategyTags || []).filter((t) => mergedStrategyTags.includes(t)).length;

  return [...forAge].sort((a, b) => relevance(b) - relevance(a));
}

/** Every distinct material mentioned, useful for a supply list screen. */
export function getAllMaterials() {
  const all = ACTIVITIES.flatMap((a) => a.materials || []);
  return Array.from(new Set(all)).sort();
}

export default ACTIVITIES;

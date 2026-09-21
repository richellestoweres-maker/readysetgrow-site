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
  /* ================================================================
     THE NEWBORN SHELF WAS NEARLY EMPTY.

     Today's Plan shows three activities a day and it is the headline
     card on every child's profile. With four activities in range, a
     five week old's plan repeated every day and a bit, which made the
     most opened card in the app look broken to the parent who has the
     most time to stare at it.

     Everything below is new, weighted hardest at the ages where the
     shelf was barest. The bar for each one: it uses something already
     in the house or nothing at all, it can be done one handed where
     the age makes that likely, and it is a real thing rather than a
     parenting article's idea of a real thing.
     ================================================================ */

  {
    id: 'slow-face',
    title: 'The Slow Face',
    minMonths: 0, maxMonths: 4, minutes: 4,
    setting: 'anywhere',
    skills: ['socialEmotional', 'cognitive'],
    strategyTags: ['connection-first', 'wait-time'],
    materials: [],
    description: 'Your face, about a foot away, moving far more slowly than feels natural.',
    howTo: [
      'Hold them facing you, around 8 to 12 inches away. That is as far as they can focus.',
      'Open your mouth wide, or stick your tongue out, and hold it.',
      'Wait. Count to 20 in your head. It will feel far too long.',
      'Watch their mouth. Many babies will try to copy, and it takes them a while to organize it.',
      'Do it again. Stop when they look away, which is them saying enough.',
    ],
    makeItEasier: ['Try it right after a feed, when they are awake and calm rather than hungry.'],
    makeItHarder: ['Add a sound to the shape, and let them work out both.'],
    whyItHelps: 'Newborns can imitate facial movements far earlier than most people expect. The waiting is the whole activity.',
  },
  {
    id: 'high-contrast-tour',
    title: 'The Black and White Tour',
    minMonths: 0, maxMonths: 4, minutes: 5,
    setting: 'indoor',
    skills: ['sensory', 'cognitive'],
    strategyTags: ['narrate'],
    materials: ['Anything stripy or checked you already own'],
    description: 'A walk round the house looking at whatever has the strongest edges.',
    howTo: [
      'Carry them round and find high contrast things. A striped cushion, a book spine, a dark doorframe against a light wall, a ceiling fan.',
      'Hold each one about a foot from their face and stay there.',
      'Say what it is, even though they do not understand yet.',
      'Move on when they stop looking.',
    ],
    makeItEasier: ['Do it in good daylight. Contrast is what they can see, and light is what makes contrast.'],
    makeItHarder: ['From about 2 months add color, and see which they hold on longest.'],
    whyItHelps: 'Newborn vision is built for edges and contrast long before it is built for detail or soft color.',
  },
  {
    id: 'narrated-change',
    title: 'The Narrated Change',
    minMonths: 0, maxMonths: 12, minutes: 4,
    setting: 'indoor',
    skills: ['language', 'socialEmotional'],
    strategyTags: ['narrate', 'model-language', 'connection-first'],
    materials: [],
    description: 'Turning a diaper change into the most reliable language lesson of the day.',
    howTo: [
      'Say what you are about to do before you do it. I am going to lift your legs now.',
      'Name the parts as you go. Arm, foot, tummy, knee.',
      'Pause after a sentence and look at them, as though waiting for an answer.',
      'When they make a sound, answer it as if it was a sentence.',
    ],
    makeItEasier: ['Pick one thing to name rather than all of it. Feet is a fine whole lesson.'],
    makeItHarder: ['Ask questions and leave the gap. Where are your toes. Wait. There they are.'],
    whyItHelps: 'You do this 8 times a day anyway. Adding words to it is the cheapest language input there is, and the pause teaches turn taking.',
  },
  {
    id: 'side-lying',
    title: 'Side Lying Play',
    minMonths: 0, maxMonths: 5, minutes: 6,
    setting: 'indoor',
    skills: ['grossMotor', 'sensory'],
    strategyTags: ['break-into-steps'],
    materials: ['A rolled towel'],
    description: 'The position between back and tummy, which most babies tolerate far better than either.',
    howTo: [
      'Lay them on their side on the floor, with a rolled towel along their back to stop them rolling over.',
      'Bring both hands together in front of their chest.',
      'Sit in front of them and talk, or put something to look at where they are facing.',
      'Swap sides, and try to do each side about the same amount.',
    ],
    makeItEasier: ['Start with 2 minutes. Side lying is easier work than tummy time and still counts.'],
    makeItHarder: ['Put something just out of reach so they have to turn toward it.'],
    whyItHelps: 'Brings the hands to the middle, which is where reaching starts, and takes pressure off the back of the head.',
  },
  {
    id: 'the-pause-game',
    title: 'The Pause',
    minMonths: 1, maxMonths: 8, minutes: 5,
    setting: 'anywhere',
    skills: ['language', 'socialEmotional'],
    strategyTags: ['wait-time', 'connection-first', 'model-language'],
    materials: [],
    description: 'A conversation, with them doing half of it.',
    howTo: [
      'Say one short thing to them. Hello. You are awake.',
      'Stop. Look at them. Count five in your head.',
      'Whatever they do, a sound, a mouth movement, a kick, treat it as their turn.',
      'Answer what they did. Is that right. Tell me more.',
      'Keep going as long as they are interested, which may be 4 turns.',
    ],
    makeItEasier: ['Exaggerate your face while you wait, so the gap does not feel empty to them.'],
    makeItHarder: ['Leave longer gaps, and let them start it rather than you.'],
    whyItHelps: 'Turn taking is the shape of conversation, and babies learn it months before they have any words to put in it.',
  },
  {
    id: 'bicycle-legs',
    title: 'Bicycle Legs',
    minMonths: 1, maxMonths: 8, minutes: 4,
    setting: 'indoor',
    skills: ['grossMotor', 'sensory'],
    strategyTags: ['movement-break', 'connection-first'],
    materials: [],
    description: 'Cycling their legs, which is a game and also the thing that shifts trapped wind.',
    howTo: [
      'Lay them on their back and hold their ankles gently.',
      'Cycle the legs slowly, one then the other.',
      'Then bring both knees up to the tummy and hold for a count of three.',
      'Sing while you do it, the same song each time.',
      'Stop if they stiffen or turn away.',
    ],
    makeItEasier: ['Do one leg at a time, very slowly.'],
    makeItHarder: ['Pause with the knees up and let them push back against you.'],
    whyItHelps: 'Moves wind, stretches hips, and the same song every time turns it into something they recognize.',
  },
  {
    id: 'window-weather',
    title: 'Watching the Weather',
    minMonths: 1, maxMonths: 24, minutes: 6,
    setting: 'indoor',
    skills: ['language', 'sensory', 'regulation'],
    strategyTags: ['narrate', 'quiet-space'],
    materials: [],
    description: 'Standing at a window, describing whatever is out there. Works at almost any age and costs nothing.',
    howTo: [
      'Stand at a window with them facing out.',
      'Say what you can see. The tree is moving. That car is red. It is raining on the glass.',
      'Let them look at whatever they are looking at rather than steering them.',
      'Stay until one of you is done.',
    ],
    makeItEasier: ['Pick the window with the most movement outside it.'],
    makeItHarder: ['From about 18 months, ask them what they can see and wait.'],
    whyItHelps: 'A calm shared focus with a running commentary, which is most of what early language needs. It also rescues a lot of difficult afternoons.',
  },
  {
    id: 'sock-hands',
    title: 'Finding Their Hands',
    minMonths: 2, maxMonths: 6, minutes: 5,
    setting: 'indoor',
    skills: ['fineMotor', 'cognitive', 'sensory'],
    strategyTags: ['observe-and-note'],
    materials: ['A clean sock, or a bit of ribbon'],
    description: 'Making their own hands interesting enough to notice.',
    howTo: [
      'Put a brightly colored sock loosely over one of their hands.',
      'Lay them on their back and let them find it.',
      'Say nothing at first. Let them do the work of noticing.',
      'Swap to the other hand after a few minutes.',
    ],
    makeItEasier: ['Guide the hand into their line of sight once, then let go.'],
    makeItHarder: ['Put something with a light rattle on the sock so moving it makes a sound.'],
    whyItHelps: 'Discovering that those hands are theirs, and that moving them changes what they see, is the beginning of cause and effect.',
  },
  {
    id: 'mirror-meeting',
    title: 'Meeting the Baby in the Mirror',
    minMonths: 2, maxMonths: 18, minutes: 6,
    setting: 'indoor',
    skills: ['socialEmotional', 'language'],
    strategyTags: ['connection-first', 'narrate'],
    materials: ['Any mirror'],
    description: 'A face that does exactly what they do, which is endlessly interesting for about a year.',
    howTo: [
      'Hold them in front of a mirror, close enough to focus.',
      'Point at them and name them. There is Tripp.',
      'Point at you and name yourself.',
      'Make faces and let them watch both of you at once.',
      'Wave, and see what happens.',
    ],
    makeItEasier: ['Do it during tummy time with a mirror propped in front of them.'],
    makeItHarder: ['Put a small sticker on their forehead and see if they reach for the mirror or for themselves. That comes at around 18 months.'],
    whyItHelps: 'They do not know it is them for a long time, and the not knowing is the interesting part.',
  },
  {
    id: 'kitchen-tour',
    title: 'The Kitchen Tour',
    minMonths: 2, maxMonths: 14, minutes: 7,
    setting: 'indoor',
    skills: ['sensory', 'language'],
    strategyTags: ['narrate', 'model-language'],
    materials: [],
    description: 'A walk round the kitchen touching and naming things, which is free and works while you wait for a kettle.',
    howTo: [
      'Carry them and stop at things. A wooden spoon, a cold faucet, a dish towel, the fridge door.',
      'Let them touch it. Say what it is and what it feels like. Cold. Smooth. Rough.',
      'Go slowly. 3 things properly beats 12 things quickly.',
      'Skip anything hot, sharp or heavy, obviously.',
    ],
    makeItEasier: ['Do 2 things and stop.'],
    makeItHarder: ['Ask them to find the cold one, from about a year.'],
    whyItHelps: 'Texture and temperature words are learned by touching things, and your kitchen is full of them.',
  },
  {
    id: 'towel-roll-tummy',
    title: 'Tummy Time on a Roll',
    minMonths: 2, maxMonths: 7, minutes: 6,
    setting: 'indoor',
    skills: ['grossMotor'],
    strategyTags: ['break-into-steps', 'adaptive-tools'],
    materials: ['A rolled bath towel'],
    description: 'Tummy time propped up, for the baby who hates tummy time flat.',
    howTo: [
      'Roll a bath towel into a firm sausage.',
      'Lay them tummy down with the roll under their chest and their arms over the front of it.',
      'Get down at their eye level in front of them.',
      'Start with 2 minutes and build up.',
    ],
    makeItEasier: ['Use a thicker roll. The higher the chest, the less work it is.'],
    makeItHarder: ['Thinner roll, then no roll at all.'],
    whyItHelps: 'Most tummy time refusal is that it is simply too hard. Propping the chest makes it possible, and possible is what builds the strength to do it flat.',
  },
  {
    id: 'muslin-peekaboo',
    title: 'Peekaboo, The Long Version',
    minMonths: 4, maxMonths: 14, minutes: 6,
    setting: 'anywhere',
    skills: ['cognitive', 'socialEmotional'],
    strategyTags: ['connection-first', 'wait-time', 'repetition'],
    materials: ['A muslin or a dish towel'],
    description: 'Peekaboo played slowly enough that they get to do the thinking.',
    howTo: [
      'Put the cloth over your face and stay there for a beat longer than feels right.',
      'Let them pull it off if they can. Wait and see if they try.',
      'Then put it over their face and wait.',
      'Say the same words every single time. That is half of why it works.',
    ],
    makeItEasier: ['Leave a gap so they can still see one eye.'],
    makeItHarder: ['Hide behind a door instead, or hide a toy under the cloth and let them find it.'],
    whyItHelps: 'The idea that a thing still exists when you cannot see it is one of the biggest ideas of the first year, and this is how it gets practiced.',
  },
  {
    id: 'reach-across',
    title: 'Reaching Across',
    minMonths: 4, maxMonths: 9, minutes: 5,
    setting: 'indoor',
    skills: ['fineMotor', 'grossMotor', 'cognitive'],
    strategyTags: ['observe-and-note', 'fine-motor-play'],
    materials: ['Anything they like holding'],
    description: 'Putting things slightly on the wrong side, so they have to cross the middle to get them.',
    howTo: [
      'Sit them supported, or lay them on their back.',
      'Hold something they want just out to their left, at chest height.',
      'Wait for them to reach. Let them use whichever hand they want.',
      'Then move it to the right and do it again.',
      'Give it to them every few tries rather than teasing.',
    ],
    makeItEasier: ['Hold it closer, straight in front, and move out slowly.'],
    makeItHarder: ['Hold it a little higher, so they have to lift and turn.'],
    whyItHelps: 'Crossing the midline connects the 2 sides of the body, and it is the groundwork for rolling, crawling and eventually handwriting.',
  },
  {
    id: 'frozen-cloth',
    title: 'The Frozen Washcloth',
    minMonths: 5, maxMonths: 20, minutes: 8,
    setting: 'indoor',
    skills: ['sensory', 'regulation'],
    strategyTags: ['quiet-space', 'deep-pressure'],
    materials: ['A clean washcloth'],
    description: 'The cheapest teething thing there is, and it works better than most of what you can buy.',
    howTo: [
      'Wet a clean washcloth, wring it out, and twist one corner into a point.',
      'Put it in a sandwich bag in the freezer for about 20 minutes. Cold, not rock solid.',
      'Give them the pointed corner to chew.',
      'Stay with them while they have it.',
      'Wash it after, and keep 2 or 3 in rotation.',
    ],
    makeItEasier: ['Fridge cold rather than freezer cold if they refuse it.'],
    makeItHarder: ['Dip the corner in breastmilk or water and freeze it, for a baby already on solids.'],
    whyItHelps: 'Cold and pressure are what actually help a sore gum, and the texture gives them something to work at.',
  },
  {
    id: 'bath-body-parts',
    title: 'Naming Them in the Bath',
    minMonths: 6, maxMonths: 30, minutes: 8,
    setting: 'indoor',
    skills: ['language', 'socialEmotional'],
    strategyTags: ['narrate', 'model-language', 'repetition'],
    materials: [],
    description: 'Using the bath you were already running as a body parts lesson.',
    howTo: [
      'Name each part as you wash it. Washing your arm. Now your tummy.',
      'Use the same words in the same order every night.',
      'After a few weeks, pause before the word and see if they look at the right place.',
      'Include the private parts by their proper names, in the same ordinary tone as elbow.',
    ],
    makeItEasier: ['Pick 4 parts and stick to those.'],
    makeItHarder: ['Ask them to wash their own knee, and see if they find it.'],
    whyItHelps: 'Repetition in a routine is how early words stick. Using proper names for everything, from the start and without embarrassment, is also what body safety guidance asks for.',
  },

  {
    id: 'skin-to-skin-anytime',
    title: 'Skin to Skin, Past the First Day',
    minMonths: 0, maxMonths: 5, minutes: 20,
    setting: 'indoor',
    skills: ['regulation', 'socialEmotional'],
    strategyTags: ['co-regulate', 'connection-first', 'deep-pressure'],
    materials: ['A blanket over the top of both of you'],
    description: 'The thing everybody does in the first hour and then stops doing, which keeps working for months.',
    howTo: [
      'Take your top off and strip them to a diaper.',
      'Lie back, chest to chest, and put a blanket over both of you rather than between you.',
      'Do nothing else. No phone, no television.',
      '20 minutes is a good target and 5 minutes still counts.',
      'Either parent. It is not only for the one who gave birth.',
    ],
    makeItEasier: ['Do it during a feed, or while they nap on you in the evening.'],
    makeItHarder: ['Nothing to make harder. This one is meant to be easy.'],
    whyItHelps: 'Steadies their heart rate, breathing and temperature, helps supply if you are feeding, and does something real for how you feel too.',
  },
  {
    id: 'wearing-them',
    title: 'Wearing Them Round the House',
    minMonths: 0, maxMonths: 12, minutes: 25,
    setting: 'anywhere',
    skills: ['regulation', 'sensory', 'language'],
    strategyTags: ['co-regulate', 'narrate', 'movement-break'],
    materials: ['A carrier or a wrap'],
    description: 'Putting them in a carrier and just getting on with your day, which counts as an activity because it is.',
    howTo: [
      'Get them in the carrier high enough to kiss the top of their head.',
      'Check their chin is off their chest and you can see their face without moving fabric.',
      'Then do whatever you were doing. Washing dishes, hanging laundry, walking around the yard.',
      'Talk about what you are doing while you do it.',
    ],
    makeItEasier: ['Front facing in, always, for a young baby. Facing out comes much later and for shorter stretches.'],
    makeItHarder: ['Take it outside and name what you pass.'],
    whyItHelps: 'Motion and closeness settle most young babies better than anything stationary, and it is the only activity on this list that also empties the dishwasher.',
  },
  {
    id: 'one-song-daily',
    title: 'The Same Song, Every Day',
    minMonths: 0, maxMonths: 18, minutes: 4,
    setting: 'anywhere',
    skills: ['language', 'regulation', 'socialEmotional'],
    strategyTags: ['rhyme-and-song', 'repetition', 'connection-first'],
    materials: [],
    description: 'Picking one song and doing it at the same moment each day, for months.',
    howTo: [
      'Choose one song. It does not matter which, and it does not matter whether you can sing.',
      'Attach it to a moment. Getting dressed, going in the car seat, the last diaper of the day.',
      'Do it every single time, same words, same tune.',
      'After a few weeks, stop just before the last word and wait.',
    ],
    makeItEasier: ['Pick something you already know all the words to.'],
    makeItHarder: ['Add a movement to each line and let them start doing it before you.'],
    whyItHelps: 'Repetition is how babies learn the pattern of language, and a song tied to a moment becomes a signal that makes the moment easier for years.',
  },
  {
    id: 'light-and-shade',
    title: 'Light and Shade',
    minMonths: 0, maxMonths: 6, minutes: 6,
    setting: 'indoor',
    skills: ['sensory', 'cognitive'],
    strategyTags: ['quiet-space', 'observe-and-note'],
    materials: [],
    description: 'Finding the places in your house where light moves, and letting them watch.',
    howTo: [
      'Look for where light is doing something. Leaf shadows on a wall, a curtain moving, sun through a blind, a slowly turning fan.',
      'Hold them where they can see it and stay still.',
      'Say what is happening, quietly.',
      'Let them watch as long as they want to.',
    ],
    makeItEasier: ['Sit with them rather than holding them up, so nobody gets tired.'],
    makeItHarder: ['Hold something up to make a shadow and move it slowly.'],
    whyItHelps: 'Slow moving contrast is about the most interesting thing available to new eyes, and this is a rescue for the hour before a nap.',
  },
  {
    id: 'the-hand-tour',
    title: 'Touching Things, One at a Time',
    minMonths: 1, maxMonths: 9, minutes: 6,
    setting: 'anywhere',
    skills: ['sensory', 'language'],
    strategyTags: ['narrate', 'wait-time'],
    materials: ['Things already in the room'],
    description: 'Taking their hand to 4 different textures and naming each one properly.',
    howTo: [
      'Pick 4 things with genuinely different surfaces. A towel, a wooden chair leg, a cold window, a soft sweater.',
      'Open their hand gently and let it rest on the first one.',
      'Say what it is and what it feels like. Wait a few seconds before moving on.',
      'Four is plenty. This is slow on purpose.',
    ],
    makeItEasier: ['2 textures, and let the back of their hand touch rather than the palm, which is less startling.'],
    makeItHarder: ['Let them reach for it themselves and choose which one to go back to.'],
    whyItHelps: 'Texture words are learned by touching, and slowing right down is what lets a young baby actually process each one.',
  },
  {
    id: 'container-dump',
    title: 'Filling and Tipping Out',
    minMonths: 8, maxMonths: 20, minutes: 10,
    setting: 'indoor',
    skills: ['fineMotor', 'cognitive'],
    strategyTags: ['fine-motor-play', 'repetition', 'observe-and-note'],
    materials: ['A plastic tub or saucepan', 'Anything too big to swallow'],
    description: 'Putting things in a pot and tipping them out again, roughly 400 times.',
    howTo: [
      'Give them a tub and a handful of safe objects. Wooden spoons, fabric blocks, plastic cups.',
      'Show them once. Put something in, tip it out.',
      'Then leave them to it and do not organize it for them.',
      'Refill it when they lose interest, and see if that restarts it.',
    ],
    makeItEasier: ['Bigger container, bigger objects, fewer of them.'],
    makeItHarder: ['A container with a narrower opening, so aim matters.'],
    whyItHelps: 'In and out is a genuine concept and this is how it gets learned. The repetition that looks pointless is the lesson.',
  },
  {
    id: 'the-drop-game',
    title: 'The Drop Game',
    minMonths: 8, maxMonths: 18, minutes: 8,
    setting: 'indoor',
    skills: ['cognitive', 'socialEmotional'],
    strategyTags: ['observe-and-note', 'repetition', 'connection-first'],
    materials: ['2 or 3 things that make different sounds when dropped'],
    description: 'They drop it, you pick it up, they drop it again. Playing along on purpose instead of enduring it.',
    howTo: [
      'Sit them in a high chair with a hard floor underneath.',
      'Give them something to drop. A wooden spoon, a plastic cup, a soft toy.',
      'When it lands, say what happened. It fell. That one was loud.',
      'Hand it back. Do it until you are bored, then say all done and mean it.',
    ],
    makeItEasier: ['Tie one to the chair with a short ribbon so they can haul it back themselves.'],
    makeItHarder: ['Offer 2 things and see if they notice the different sounds.'],
    whyItHelps: 'This is not them winding you up. It is a repeated experiment about gravity, sound and whether you come back, and knowing that makes it much easier to bear.',
  },
  {
    id: 'chair-tunnel',
    title: 'A Tunnel Made of Chairs',
    minMonths: 7, maxMonths: 24, minutes: 10,
    setting: 'indoor',
    skills: ['grossMotor', 'cognitive'],
    strategyTags: ['obstacle-course', 'movement-break', 'heavy-work'],
    materials: ['2 dining chairs', 'A blanket'],
    description: '30 seconds of setup, and somewhere to crawl through.',
    howTo: [
      'Put 2 chairs facing each other with a gap between them and drape a blanket over the top.',
      'Get on the far side and call them through.',
      'Put something they want at your end the first few times.',
      'Make it longer with more chairs once they have the idea.',
    ],
    makeItEasier: ['Take the blanket off so they can see straight through.'],
    makeItHarder: ['Add a turn, or something to climb over first.'],
    whyItHelps: 'Crawling through a space builds the shoulder strength that handwriting needs years later, and going where they cannot see you is its own small act of courage.',
  },
  {
    id: 'ball-roll',
    title: 'Rolling It Back',
    minMonths: 8, maxMonths: 26, minutes: 8,
    setting: 'anywhere',
    skills: ['grossMotor', 'socialEmotional'],
    strategyTags: ['connection-first', 'wait-time', 'join-their-play'],
    materials: ['A ball, or anything that rolls'],
    description: 'The first proper game with rules, and the rules are that it comes back.',
    howTo: [
      'Sit on the floor facing them with your legs open, a meter or so apart.',
      'Roll the ball slowly to them.',
      'Wait. Do not reach for it.',
      'When it comes back, however badly, make it a big deal.',
      'Add words. My turn. Your turn.',
    ],
    makeItEasier: ['Sit closer and use a bigger, slower ball.'],
    makeItHarder: ['Sit further apart, or roll it to a third person.'],
    whyItHelps: 'Back and forth with an object is the same shape as conversation, and most children learn it here before they learn it with words.',
  },
  {
    id: 'water-tray',
    title: 'A Roasting Tin of Water',
    minMonths: 10, maxMonths: 48, minutes: 15,
    setting: 'anywhere',
    skills: ['sensory', 'fineMotor'],
    strategyTags: ['sensory-bin', 'fine-motor-play', 'quiet-space'],
    materials: ['A baking pan or dish tub', 'Cups and spoons', 'A towel'],
    description: 'An inch of water and some cups. Reliably the longest 20 minutes you will buy all week.',
    howTo: [
      'Put a towel down and a pan with an inch of warm water on it.',
      'Add cups, spoons, a funnel, anything that pours.',
      'Let them tip it about. It will go on the floor. That is the towel’s job.',
      'Never leave them alone with it, not even for a second, not even an inch.',
    ],
    makeItEasier: ['Do it in the bath, where the mess has nowhere to go.'],
    makeItHarder: ['Add a squirt of dish soap, or a few drops of food coloring, or ice cubes.'],
    whyItHelps: 'Pouring is fine motor work, hand strength and early volume all at once, and water holds attention longer than almost anything else you own.',
  },
  {
    id: 'posting-box',
    title: 'The Posting Slot',
    minMonths: 11, maxMonths: 28, minutes: 12,
    setting: 'indoor',
    skills: ['fineMotor', 'cognitive'],
    strategyTags: ['fine-motor-play', 'repetition'],
    materials: ['A shoebox or a wipes tub', 'Milk bottle lids or large buttons'],
    description: 'A slot cut in a box, and things that fit through it. 10 minutes to make, weeks of use.',
    howTo: [
      'Cut a slot in the lid of a box, just bigger than whatever they will be posting.',
      'Show them once, then hand it over.',
      'Let them open the box and get them out themselves. The getting out is half the point.',
      'Nothing small enough to swallow. Milk bottle lids are about the right size.',
    ],
    makeItEasier: ['Cut a bigger hole, or use a round hole rather than a slot.'],
    makeItHarder: ['2 slots of different shapes, or make them turn the lid to fit.'],
    whyItHelps: 'Lining a thing up with a hole and letting go at the right moment is real hand and eye work, and the click of it landing is the reward.',
  },
  {
    id: 'painting-with-water',
    title: 'Painting the House with Water',
    minMonths: 16, maxMonths: 60, minutes: 20,
    setting: 'outdoor',
    skills: ['grossMotor', 'sensory'],
    strategyTags: ['movement-break', 'heavy-work'],
    materials: ['A bucket of water', 'A decorating brush'],
    description: 'A big brush, a bucket of water, and a fence. No mess at all, and it lasts ages.',
    howTo: [
      'Fill a bucket with water and give them the biggest brush you have.',
      'Point them at a fence, a wall, a path, or a shed.',
      'Let them paint. It dries and disappears, which they will notice and want to fix.',
      'Stand back.',
    ],
    makeItEasier: ['A smaller bucket so it is not too heavy to move.'],
    makeItHarder: ['Give them a shape to fill in, or ask them to write a letter of their name.'],
    whyItHelps: 'Big arm movements at a vertical surface build the shoulder stability that neat handwriting needs, and it costs nothing.',
  },
  {
    id: 'sort-the-cutlery',
    title: 'Sorting the Cutlery',
    minMonths: 18, maxMonths: 48, minutes: 10,
    setting: 'indoor',
    skills: ['cognitive', 'numeracy', 'fineMotor'],
    strategyTags: ['break-into-steps', 'fine-motor-play'],
    materials: ['The clean cutlery'],
    description: 'A real job, done badly, which is exactly the right way for them to do it.',
    howTo: [
      'Take the knives out and put them somewhere else.',
      'Give them the clean spoons and forks and the drawer tray.',
      'Let them sort them. Say what they are doing rather than correcting it.',
      'Thank them properly. This is work and they know it.',
    ],
    makeItEasier: ['2 kinds only, and start them off with one of each in place.'],
    makeItHarder: ['Add teaspoons as a third pile, or ask how many forks there are.'],
    whyItHelps: 'Sorting by a property is early math, and doing a real job that the household actually needed is worth 10 activities invented for them.',
  },
  {
    id: 'animal-walks',
    title: 'Animal Walks',
    minMonths: 20, maxMonths: 72, minutes: 8,
    setting: 'anywhere',
    skills: ['grossMotor', 'regulation'],
    strategyTags: ['movement-break', 'heavy-work', 'co-regulate'],
    materials: [],
    description: 'Crossing the room as a bear, a crab and a frog. The fastest way to reset a wound up afternoon.',
    howTo: [
      'Pick an animal and show them how it moves. Bear on hands and feet, crab on hands and feet facing up, frog jumping from a squat.',
      'Cross the room and back as that animal.',
      'Let them pick the next one.',
      '4 or 5 crossings is plenty.',
    ],
    makeItEasier: ['Shorter distance, and do it alongside them rather than watching.'],
    makeItHarder: ['Carry something, or go up the stairs as a bear.'],
    whyItHelps: 'Pushing through the arms is calming for most children, which is why this works so well when somebody is climbing the walls.',
  },
  {
    id: 'torch-shadows',
    title: 'Flashlight and Shadows',
    minMonths: 30, maxMonths: 84, minutes: 15,
    setting: 'indoor',
    skills: ['cognitive', 'pretendPlay'],
    strategyTags: ['quiet-space', 'join-their-play'],
    materials: ['A flashlight or a phone light', 'A blank wall'],
    description: 'A dark room, a flashlight and a wall. Works as a game and works as a way to come down at bedtime.',
    howTo: [
      'Turn the lights off and shine a flashlight at a blank wall.',
      'Make a shape with your hand and let them guess it.',
      'Let them try. Do not correct the shape.',
      'Move the flashlight nearer and further and let them see the shadow change size.',
    ],
    makeItEasier: ['Use a toy in front of the light rather than hands.'],
    makeItHarder: ['Tell a story with the shadows, taking a character each.'],
    whyItHelps: 'Light and shadow is real physics they can control with their hands, and the dark and quiet make it a genuinely calming one.',
  },
  {
    id: 'own-obstacle-course',
    title: 'An Obstacle Course They Design',
    minMonths: 36, maxMonths: 96, minutes: 25,
    setting: 'anywhere',
    skills: ['grossMotor', 'cognitive'],
    strategyTags: ['obstacle-course', 'movement-break', 'break-into-steps'],
    materials: ['Cushions, chairs, tape, whatever is there'],
    description: 'They design it, you do it. The designing is the part that is good for them.',
    howTo: [
      'Tell them they are in charge and you will do whatever they build.',
      'Give them the materials and get out of the way.',
      'Do the course exactly as instructed, including the bits that do not work.',
      'Then swap and let them do it.',
    ],
    makeItEasier: ['Start them with 2 obstacles and ask what should come next.'],
    makeItHarder: ['Add a rule, such as no hands, or time it and try to beat it.'],
    whyItHelps: 'Planning a sequence and then watching somebody follow it is real problem solving, and being the one in charge is rarer for them than you think.',
  },
  {
    id: 'real-cooking-job',
    title: 'A Real Job in the Kitchen',
    minMonths: 30, maxMonths: 120, minutes: 20,
    setting: 'indoor',
    skills: ['fineMotor', 'cognitive', 'socialEmotional'],
    strategyTags: ['break-into-steps', 'celebrate-partial'],
    materials: ['Whatever you are already cooking'],
    description: 'Not a pretend cooking activity. A part of the actual dinner, which is theirs.',
    howTo: [
      'Pick one step that is genuinely theirs. Tearing lettuce, mashing potato, stirring a cold bowl, peeling a banana, shaking the dressing.',
      'Show them once and then let them do it their way.',
      'Let it be imperfect and serve it anyway.',
      'Tell whoever else is eating who made that bit.',
    ],
    makeItEasier: ['Do it with them hand over hand the first time, then step back.'],
    makeItHarder: ['Give them 2 steps in a row, or let them read the next line of the recipe.'],
    whyItHelps: 'Doing a real thing the family needed, and then watching people eat it, does more for how capable a child feels than any activity invented for them.',
  },
  {
    id: 'drawn-treasure-hunt',
    title: 'A Treasure Hunt with Drawn Clues',
    minMonths: 42, maxMonths: 108, minutes: 25,
    setting: 'anywhere',
    skills: ['cognitive', 'literacy'],
    strategyTags: ['break-into-steps', 'checklist'],
    materials: ['Paper and a pen'],
    description: '5 drawn clues round the house, ending in something small. 15 minutes to make, an hour of play.',
    howTo: [
      'Draw 5 simple pictures of places. The fridge, a bed, the front door, a shoe, the bath.',
      'Hide each clue at the place the previous one shows.',
      'Hand them the first and follow them round.',
      'Something small at the end. A cookie is plenty.',
    ],
    makeItEasier: ['3 clues, all in one room, and go with them.'],
    makeItHarder: ['Write the clues as words, or as riddles, and let them go alone.'],
    whyItHelps: 'A drawing standing for a real place is the same idea as a word standing for a thing, which is the whole foundation of reading.',
  },
  {
    id: 'interview-a-grandparent',
    title: 'Interview Somebody Old',
    minMonths: 72, maxMonths: 216, minutes: 30,
    setting: 'anywhere',
    skills: ['language', 'socialEmotional', 'literacy'],
    strategyTags: ['connection-first', 'model-language'],
    materials: ['A phone to record, or paper'],
    description: '10 questions for a grandparent or an older relative, asked properly and recorded.',
    howTo: [
      'Help them write 10 questions first. What was your first job. What did you get in trouble for. What is something nobody knows about you.',
      'Set up a call or a visit, and let them run it.',
      'Record it, with the person’s permission.',
      'Do not rescue the awkward pauses. Let them work it out.',
    ],
    makeItEasier: ['5 questions, and you ask the first one to get it going.'],
    makeItHarder: ['Ask them to turn it into a written piece, or a short edited recording.'],
    whyItHelps: 'Asking a question and then actually listening to the answer is a skill, and this is one of the few recordings a family ends up genuinely glad to have.',
  },
  {
    id: 'money-for-a-thing',
    title: 'Working Out What It Costs',
    minMonths: 84, maxMonths: 216, minutes: 25,
    setting: 'anywhere',
    skills: ['numeracy', 'cognitive'],
    strategyTags: ['break-into-steps', 'checklist'],
    materials: ['Paper, or a phone'],
    description: 'Taking something they want and working out, properly, how they get it.',
    howTo: [
      'Pick the thing they have been asking for and find the real price together.',
      'Work out what money comes in. Pocket money, birthdays, jobs they could do.',
      'Divide it out. How many weeks is that.',
      'Write the number of weeks somewhere they will see it.',
      'Let the answer be the answer, even when it is a long time.',
    ],
    makeItEasier: ['Pick something small, so the number of weeks is small too.'],
    makeItHarder: ['Add a second option at a different price and let them compare.'],
    whyItHelps: 'Turning wanting into a number of weeks is the first real experience of a budget, and it lands far harder than being told no.',
  },
  {
    id: 'teach-me-that',
    title: 'Teach Me Something You Know',
    minMonths: 120, maxMonths: 216, minutes: 25,
    setting: 'anywhere',
    skills: ['language', 'socialEmotional', 'cognitive'],
    strategyTags: ['connection-first', 'wait-time'],
    materials: [],
    description: 'Handing over the expert role to a teenager, entirely and without commentary.',
    howTo: [
      'Ask them to teach you something they are good at and you are not. A game, an app, an edit, a skill.',
      'Be a real beginner. Ask real questions.',
      'Do not know better. Do not improve their explanation.',
      'Say thank you at the end and mean it.',
    ],
    makeItEasier: ['Ask about something they have already been talking to you about.'],
    makeItHarder: ['Ask them to teach it to somebody else in the family while you watch.'],
    whyItHelps: 'Teenagers are corrected constantly. Being the one who knows, in front of a parent who is genuinely learning, is rarer for them than almost anything else on offer.',
  },
  {
    id: 'phones-down-walk',
    title: 'The Walk with No Phones',
    minMonths: 96, maxMonths: 216, minutes: 30,
    setting: 'outdoor',
    skills: ['socialEmotional', 'regulation'],
    strategyTags: ['connection-first', 'movement-break', 'wait-time'],
    materials: [],
    description: 'A walk, side by side, with nothing to look at and nowhere to be.',
    howTo: [
      'Both phones stay at home. Yours as well, and that is the part that matters.',
      'Walk somewhere ordinary. It does not need to be nice.',
      'Do not open with a question about school.',
      'Let there be long silences, and do not fill them.',
      'Whatever comes up, take it seriously.',
    ],
    makeItEasier: ['20 minutes, with a destination such as a shop, so it has a reason.'],
    makeItHarder: ['Make it a regular thing on the same day each week, without announcing that you are making it a thing.'],
    whyItHelps: 'Side by side with no eye contact is where difficult things get said. The car works for the same reason, and neither is an accident.',
  },
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
    makeItHarder: ['Narrower opening, or sorting by color into 2 containers.'],
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
      'Lay out 3 or 4 obstacles in a line.',
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
    materials: ['Pom poms, beans, or buttons', '2 or 3 bowls', 'A spoon or tongs'],
    description:
      'Sorting small objects by color or size into bowls. Quiet, focused, and it builds the hand strength writing needs later.',
    howTo: [
      'Put a mixed pile in one bowl.',
      'Show them one example of sorting.',
      'Offer tongs or a spoon to move the pieces.',
      'Let them invent their own sorting rule if they want.',
    ],
    makeItEasier: ['2 colors only, and use fingers rather than tongs.'],
    makeItHarder: ['Sort by 2 rules at once, such as color and size, or count each bowl at the end.'],
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
      'Give a warning about 5 minutes before a change.',
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
      'Add a squeeze between 2 cushions if they like deep pressure.',
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
    makeItEasier: ['Stick to 3 feelings and repeat them.'],
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
    makeItEasier: ['Compare just 2 leaves and name one difference.'],
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
      '2 boxes on a page: first this, then that. Makes the order visible instead of something they have to hold in their head.',
    howTo: [
      'Draw 2 boxes side by side, labeled first and then.',
      'Draw or write the task in the first box and the reward or next activity in the second.',
      'Let your child help draw it, so it becomes theirs.',
      'Point at it rather than repeating yourself out loud.',
    ],
    makeItEasier: ['Pictures rather than words, and only 2 steps.'],
    makeItHarder: ['Extend to a full morning routine with 4 or 5 steps.'],
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
    title: 'The 2 Minute Start',
    minMonths: 72,
    maxMonths: 216,
    minutes: 5,
    setting: 'anywhere',
    skills: ['cognitive', 'regulation'],
    strategyTags: ['body-double', 'break-into-steps', 'timer'],
    materials: [],
    description:
      'For a child who knows exactly what to do and cannot start. You sit down and do the first 2 minutes with them.',
    howTo: [
      'Sit down beside them, without taking over.',
      'Do the first 2 minutes together.',
      'Then say you are staying nearby and let them continue.',
      'Do not comment on the work while they are getting going.',
    ],
    makeItEasier: ['Stay for 5 minutes rather than two.'],
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
      'The same 4 questions every week. Builds a habit of talking before there is something hard to talk about.',
    howTo: [
      'Pick a regular time, ideally attached to something you already do such as a meal.',
      'Ask what went well, what was stressful, what they need help with, and what is coming up.',
      'Answer the questions yourself too, honestly.',
      'Do not turn their answers into a lecture, or they will stop giving real ones.',
    ],
    makeItEasier: ['2 questions only, and keep it to 5 minutes.'],
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
      'Hold them about 8 to 12 inches from your face.',
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
    makeItHarder: ['Use 2 different sounds on 2 sides so they choose.'],
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
    materials: ['2 cups you already own'],
    description:
      'Bath time is already happening. Adding 2 cups turns it into a physics lesson.',
    howTo: [
      'Put 2 cups of different sizes in the water.',
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
    makeItHarder: ['Use 2 cups, and move them after hiding.'],
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
    materials: ['A basket', '5 or 6 safe household objects'],
    description:
      'Babies almost always prefer the wooden spoon to the toy. This leans into that instead of fighting it.',
    howTo: [
      'Fill a basket with safe real objects, such as a wooden spoon, a silicone brush, a metal measuring cup, a fabric scrap.',
      'Sit nearby and let them empty it at their own pace.',
      'Name each thing as they pick it up, without taking it from them.',
      'Swap 2 objects out each week so it stays interesting.',
    ],
    makeItEasier: ['3 objects instead of six, so it is less overwhelming.'],
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
      'Pick one or 2 songs and use the same ones every day.',
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
    makeItHarder: ['They plan the meal, write the list, and manage the timing of 2 dishes at once.'],
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
    makeItEasier: ['10 minutes, and one narrow question rather than the whole subject.'],
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
      'Running out of money at 14 with you nearby is a much cheaper lesson than running out at 22.',
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
    makeItEasier: ['Something with 4 parts or fewer, such as a flashlight or a pen.'],
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
    makeItHarder: ['A whole day with 2 stops and a meal, planned to a budget they track.'],
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
      'Pick one thing and do it weekly for 3 months. A photo, a drawing, a page of writing, a song. The point is the stack at the end.',
    howTo: [
      'Choose something small enough to finish in half an hour.',
      'Pick a day and keep it, even on the weeks it is bad.',
      'Keep everything, including the bad ones, in one place.',
      'At the end of 3 months, look at the whole set together.',
    ],
    makeItEasier: ['Every other week, and 15 minutes.'],
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
    makeItEasier: ['A week, 3 steps, and you do one of them.'],
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

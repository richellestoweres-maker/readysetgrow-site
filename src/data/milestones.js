/**
 * Ready Set Grow: Milestones
 * ------------------------------------------------------------------
 * Milestone content based on the CDC's Learn the Signs, Act Early
 * program, using the 2022 revised checklists.
 *
 * TWO THINGS THAT MATTER ABOUT THIS DATA
 *
 * 1. These are 75th percentile milestones, not averages.
 *    Before 2022 the CDC used the 50th percentile, which meant half of
 *    all children had not done the thing yet and parents panicked over
 *    nothing. The revised lists describe what most children (about 75
 *    percent or more) can do by that age. That is a meaningfully
 *    gentler bar, and the app should say so out loud.
 *
 * 2. The CDC deliberately moved away from wait and see.
 *    A missed milestone is not a diagnosis and not a failure, but it is
 *    a reason to mention it at the next visit rather than wait. Our
 *    warm tone must never talk a parent out of asking. Reassurance and
 *    "bring it up" are not in conflict, and this file holds both.
 *
 * HOW WE FRAME IT TO PARENTS
 * Never "your child is behind". Instead: "most children can do this by
 * four years. Every child moves at their own pace, and if this one is
 * not happening yet it is worth mentioning at your next visit."
 *
 * DOMAINS
 * The four domains below are the CDC's own. Your brief also listed
 * gross motor, fine motor, feeding and self care. Rather than inventing
 * domains the source data does not use, every milestone also carries
 * tags, so you can filter to fine motor or feeding across domains and
 * still keep the underlying data faithful.
 */

/* ------------------------------------------------------------------
 * STATUSES
 * Five options, none of which is a failing grade. "Unsure" matters
 * more than it looks. Without it, a stressed parent guesses, and a
 * guess is worse data than an honest "I do not know".
 * ------------------------------------------------------------------ */

export const MILESTONE_STATUSES = [
  { id: 'notYet', label: 'Not yet', description: 'Not seeing this one yet.', order: 0 },
  { id: 'emerging', label: 'Emerging', description: 'Starting to show up.', order: 1 },
  { id: 'sometimes', label: 'Doing sometimes', description: 'Happens, but not consistently.', order: 2 },
  { id: 'mastered', label: 'Mastered', description: 'Doing this comfortably.', order: 3 },
  { id: 'unsure', label: 'Unsure', description: 'Not sure, and that is okay.', order: 4 },
];

export const MILESTONE_DOMAINS = [
  {
    id: 'socialEmotional',
    label: 'Social and Emotional',
    shortLabel: 'Social',
    description: 'How they connect with you and with other people.',
  },
  {
    id: 'language',
    label: 'Language and Communication',
    shortLabel: 'Language',
    description: 'How they understand you and get their own message across.',
  },
  {
    id: 'cognitive',
    label: 'Learning and Thinking',
    shortLabel: 'Thinking',
    description: 'How they figure things out, solve problems, and play.',
  },
  {
    id: 'movement',
    label: 'Movement and Physical',
    shortLabel: 'Movement',
    description: 'How they move their body, use their hands, and care for themselves.',
  },
];

/** Cross cutting tags, so you can filter to the categories in your brief. */
export const MILESTONE_TAGS = [
  'grossMotor',
  'fineMotor',
  'feeding',
  'selfCare',
  'play',
  'attachment',
  'speech',
  'understanding',
  'problemSolving',
  'emotions',
  'social',
  'literacy',
  'numeracy',
];

/**
 * The guidance shown whenever a parent marks something as not yet.
 * This wording is doing real work. It reassures without discouraging
 * the parent from asking, which is the balance the CDC revision was
 * specifically trying to fix.
 */
export const ACT_EARLY_GUIDANCE = {
  reassurance:
    'Children reach milestones across a range, not on a deadline. One milestone that is not here ' +
    'yet is common and usually not a concern on its own.',
  action:
    'It is still worth mentioning at your next well visit. You are not overreacting by asking, and ' +
    'bringing it up early gives you more options if support turns out to be helpful.',
  howToAsk:
    'You can simply say: "I noticed she is not doing this yet. Is that something we should look at?"',
  urgent:
    'If your child loses a skill they used to have, contact your pediatrician rather than waiting ' +
    'for the next scheduled visit.',
};

/* ------------------------------------------------------------------
 * THE CHECKPOINTS
 *
 * These twelve ages line up with recommended well child visits. The 15
 * and 30 month checkpoints were added in the 2022 revision so that
 * every visit from 2 months through 5 years has a matching list.
 * ------------------------------------------------------------------ */

export const MILESTONE_CHECKPOINTS = [
  {
    months: 2,
    label: '2 months',
    ageDescription: 'By 2 months',
    milestones: {
      socialEmotional: [
        { id: 'm2-se-1', text: 'Calms down when spoken to or picked up', tags: ['attachment', 'emotions'] },
        { id: 'm2-se-2', text: 'Looks at your face', tags: ['attachment', 'social'] },
        { id: 'm2-se-3', text: 'Seems happy to see you when you walk up to them', tags: ['attachment', 'social'] },
        { id: 'm2-se-4', text: 'Smiles when you talk to or smile at them', tags: ['social', 'emotions'] },
      ],
      language: [
        { id: 'm2-lang-1', text: 'Makes sounds other than crying', tags: ['speech'] },
        { id: 'm2-lang-2', text: 'Reacts to loud sounds', tags: ['understanding'] },
      ],
      cognitive: [
        { id: 'm2-cog-1', text: 'Watches you as you move', tags: ['problemSolving'] },
        { id: 'm2-cog-2', text: 'Looks at a toy for several seconds', tags: ['play'] },
      ],
      movement: [
        { id: 'm2-mov-1', text: 'Holds head up when on tummy', tags: ['grossMotor'] },
        { id: 'm2-mov-2', text: 'Moves both arms and both legs', tags: ['grossMotor'] },
        { id: 'm2-mov-3', text: 'Opens hands briefly', tags: ['fineMotor'] },
      ],
    },
  },
  {
    months: 4,
    label: '4 months',
    ageDescription: 'By 4 months',
    milestones: {
      socialEmotional: [
        { id: 'm4-se-1', text: 'Smiles on their own to get your attention', tags: ['social', 'attachment'] },
        { id: 'm4-se-2', text: 'Chuckles when you try to make them laugh', tags: ['social', 'emotions'] },
        { id: 'm4-se-3', text: 'Looks at you, moves, or makes sounds to get or keep your attention', tags: ['social', 'attachment'] },
      ],
      language: [
        { id: 'm4-lang-1', text: 'Makes cooing sounds like oooo and aahh', tags: ['speech'] },
        { id: 'm4-lang-2', text: 'Makes sounds back when you talk to them', tags: ['speech', 'social'] },
        { id: 'm4-lang-3', text: 'Turns head toward the sound of your voice', tags: ['understanding'] },
      ],
      cognitive: [
        { id: 'm4-cog-1', text: 'Opens mouth when they see the breast or bottle if hungry', tags: ['feeding', 'problemSolving'] },
        { id: 'm4-cog-2', text: 'Looks at their hands with interest', tags: ['problemSolving'] },
      ],
      movement: [
        { id: 'm4-mov-1', text: 'Holds head steady without support when you are holding them', tags: ['grossMotor'] },
        { id: 'm4-mov-2', text: 'Holds a toy when you put it in their hand', tags: ['fineMotor'] },
        { id: 'm4-mov-3', text: 'Uses their arm to swing at toys', tags: ['grossMotor', 'play'] },
        { id: 'm4-mov-4', text: 'Brings hands to mouth', tags: ['fineMotor'] },
        { id: 'm4-mov-5', text: 'Pushes up onto elbows or forearms when on tummy', tags: ['grossMotor'] },
      ],
    },
  },
  {
    months: 6,
    label: '6 months',
    ageDescription: 'By 6 months',
    milestones: {
      socialEmotional: [
        { id: 'm6-se-1', text: 'Knows familiar people', tags: ['attachment', 'social'] },
        { id: 'm6-se-2', text: 'Likes to look at themselves in a mirror', tags: ['social'] },
        { id: 'm6-se-3', text: 'Laughs', tags: ['emotions', 'social'] },
      ],
      language: [
        { id: 'm6-lang-1', text: 'Takes turns making sounds with you', tags: ['speech', 'social'] },
        { id: 'm6-lang-2', text: 'Blows raspberries', tags: ['speech'] },
        { id: 'm6-lang-3', text: 'Makes squealing noises', tags: ['speech'] },
      ],
      cognitive: [
        { id: 'm6-cog-1', text: 'Puts things in their mouth to explore them', tags: ['play', 'problemSolving'] },
        { id: 'm6-cog-2', text: 'Reaches to grab a toy they want', tags: ['problemSolving', 'fineMotor'] },
        { id: 'm6-cog-3', text: 'Closes lips to show they do not want more food', tags: ['feeding'] },
      ],
      movement: [
        { id: 'm6-mov-1', text: 'Rolls from tummy to back', tags: ['grossMotor'] },
        { id: 'm6-mov-2', text: 'Pushes up with straight arms when on tummy', tags: ['grossMotor'] },
        { id: 'm6-mov-3', text: 'Leans on hands to support themselves when sitting', tags: ['grossMotor'] },
      ],
    },
  },
  {
    months: 9,
    label: '9 months',
    ageDescription: 'By 9 months',
    milestones: {
      socialEmotional: [
        { id: 'm9-se-1', text: 'Is shy, clingy, or fearful around strangers', tags: ['attachment', 'emotions'] },
        { id: 'm9-se-2', text: 'Shows several facial expressions such as happy, sad, angry, and surprised', tags: ['emotions'] },
        { id: 'm9-se-3', text: 'Looks when you call their name', tags: ['understanding', 'social'] },
        { id: 'm9-se-4', text: 'Reacts when you leave, by looking, reaching, or crying', tags: ['attachment', 'emotions'] },
        { id: 'm9-se-5', text: 'Smiles or laughs when you play peek a boo', tags: ['play', 'social'] },
      ],
      language: [
        { id: 'm9-lang-1', text: 'Makes different sounds like mamamama and bababababa', tags: ['speech'] },
        { id: 'm9-lang-2', text: 'Lifts arms up to be picked up', tags: ['understanding', 'social'] },
      ],
      cognitive: [
        { id: 'm9-cog-1', text: 'Looks for objects when dropped out of sight', tags: ['problemSolving'] },
        { id: 'm9-cog-2', text: 'Bangs two things together', tags: ['play', 'fineMotor'] },
      ],
      movement: [
        { id: 'm9-mov-1', text: 'Gets to a sitting position by themselves', tags: ['grossMotor'] },
        { id: 'm9-mov-2', text: 'Moves things from one hand to the other', tags: ['fineMotor'] },
        { id: 'm9-mov-3', text: 'Uses fingers to rake food toward themselves', tags: ['fineMotor', 'feeding'] },
        { id: 'm9-mov-4', text: 'Sits without support', tags: ['grossMotor'] },
      ],
    },
  },
  {
    months: 12,
    label: '12 months',
    ageDescription: 'By 12 months',
    milestones: {
      socialEmotional: [
        { id: 'm12-se-1', text: 'Plays games with you, like pat a cake', tags: ['play', 'social'] },
      ],
      language: [
        { id: 'm12-lang-1', text: 'Waves bye bye', tags: ['social', 'understanding'] },
        { id: 'm12-lang-2', text: 'Calls a parent mama or dada or another special name', tags: ['speech'] },
        { id: 'm12-lang-3', text: 'Understands no, and pauses briefly or stops when you say it', tags: ['understanding'] },
      ],
      cognitive: [
        { id: 'm12-cog-1', text: 'Puts something in a container, like a block in a cup', tags: ['problemSolving', 'fineMotor'] },
        { id: 'm12-cog-2', text: 'Looks for things they see you hide, like a toy under a blanket', tags: ['problemSolving'] },
      ],
      movement: [
        { id: 'm12-mov-1', text: 'Pulls up to stand', tags: ['grossMotor'] },
        { id: 'm12-mov-2', text: 'Walks holding on to furniture', tags: ['grossMotor'] },
        { id: 'm12-mov-3', text: 'Drinks from a cup without a lid as you hold it', tags: ['feeding', 'selfCare'] },
        { id: 'm12-mov-4', text: 'Picks things up between thumb and pointer finger, like small bits of food', tags: ['fineMotor', 'feeding'] },
      ],
    },
  },
  {
    months: 15,
    label: '15 months',
    ageDescription: 'By 15 months',
    milestones: {
      socialEmotional: [
        { id: 'm15-se-1', text: 'Copies other children while playing', tags: ['play', 'social'] },
        { id: 'm15-se-2', text: 'Shows you an object they like', tags: ['social'] },
        { id: 'm15-se-3', text: 'Claps when excited', tags: ['emotions', 'social'] },
        { id: 'm15-se-4', text: 'Hugs a stuffed doll or other toy', tags: ['play', 'emotions'] },
        { id: 'm15-se-5', text: 'Shows you affection with hugs, cuddles, or kisses', tags: ['attachment', 'emotions'] },
      ],
      language: [
        { id: 'm15-lang-1', text: 'Tries to say one or two words besides mama or dada', tags: ['speech'] },
        { id: 'm15-lang-2', text: 'Looks at a familiar object when you name it', tags: ['understanding'] },
        { id: 'm15-lang-3', text: 'Follows directions given with both a gesture and words', tags: ['understanding'] },
        { id: 'm15-lang-4', text: 'Points to ask for something or to get help', tags: ['speech', 'social'] },
      ],
      cognitive: [
        { id: 'm15-cog-1', text: 'Tries to use things the right way, like a phone, cup, or book', tags: ['play', 'problemSolving'] },
        { id: 'm15-cog-2', text: 'Stacks at least two small objects, like blocks', tags: ['fineMotor', 'problemSolving'] },
      ],
      movement: [
        { id: 'm15-mov-1', text: 'Takes a few steps on their own', tags: ['grossMotor'] },
        { id: 'm15-mov-2', text: 'Uses fingers to feed themselves some food', tags: ['feeding', 'fineMotor', 'selfCare'] },
      ],
    },
  },
  {
    months: 18,
    label: '18 months',
    ageDescription: 'By 18 months',
    milestones: {
      socialEmotional: [
        { id: 'm18-se-1', text: 'Moves away from you but looks to make sure you are close by', tags: ['attachment'] },
        { id: 'm18-se-2', text: 'Points to show you something interesting', tags: ['social'] },
        { id: 'm18-se-3', text: 'Puts hands out for you to wash them', tags: ['selfCare', 'social'] },
        { id: 'm18-se-4', text: 'Looks at a few pages in a book with you', tags: ['literacy', 'social'] },
        { id: 'm18-se-5', text: 'Helps you dress them by pushing an arm through a sleeve or lifting a foot', tags: ['selfCare'] },
      ],
      language: [
        { id: 'm18-lang-1', text: 'Tries to say three or more words besides mama or dada', tags: ['speech'] },
        { id: 'm18-lang-2', text: 'Follows one step directions without any gestures', tags: ['understanding'] },
      ],
      cognitive: [
        { id: 'm18-cog-1', text: 'Copies you doing chores, like sweeping with a broom', tags: ['play', 'problemSolving'] },
        { id: 'm18-cog-2', text: 'Plays with toys in a simple way, like pushing a toy car', tags: ['play'] },
      ],
      movement: [
        { id: 'm18-mov-1', text: 'Walks without holding on to anyone or anything', tags: ['grossMotor'] },
        { id: 'm18-mov-2', text: 'Scribbles', tags: ['fineMotor', 'literacy'] },
        { id: 'm18-mov-3', text: 'Drinks from a cup without a lid, and may spill sometimes', tags: ['feeding', 'selfCare'] },
        { id: 'm18-mov-4', text: 'Feeds themselves with their fingers', tags: ['feeding', 'selfCare'] },
        { id: 'm18-mov-5', text: 'Tries to use a spoon', tags: ['feeding', 'selfCare', 'fineMotor'] },
        { id: 'm18-mov-6', text: 'Climbs on and off a couch or chair without help', tags: ['grossMotor'] },
      ],
    },
  },
  {
    months: 24,
    label: '2 years',
    ageDescription: 'By 2 years',
    milestones: {
      socialEmotional: [
        { id: 'm24-se-1', text: 'Notices when others are hurt or upset, like pausing or looking sad when someone cries', tags: ['emotions', 'social'] },
        { id: 'm24-se-2', text: 'Looks at your face to see how to react in a new situation', tags: ['social', 'attachment'] },
      ],
      language: [
        { id: 'm24-lang-1', text: 'Points to things in a book when you ask, like where is the bear', tags: ['understanding', 'literacy'] },
        { id: 'm24-lang-2', text: 'Says at least two words together, like more milk', tags: ['speech'] },
        { id: 'm24-lang-3', text: 'Points to at least two body parts when you ask', tags: ['understanding'] },
        { id: 'm24-lang-4', text: 'Uses more gestures than just waving and pointing, like blowing a kiss or nodding', tags: ['social'] },
      ],
      cognitive: [
        { id: 'm24-cog-1', text: 'Holds something in one hand while using the other hand', tags: ['fineMotor', 'problemSolving'] },
        { id: 'm24-cog-2', text: 'Tries to use switches, knobs, or buttons on a toy', tags: ['problemSolving', 'play'] },
        { id: 'm24-cog-3', text: 'Plays with more than one toy at the same time, like putting toy food on a toy plate', tags: ['play'] },
      ],
      movement: [
        { id: 'm24-mov-1', text: 'Kicks a ball', tags: ['grossMotor'] },
        { id: 'm24-mov-2', text: 'Runs', tags: ['grossMotor'] },
        { id: 'm24-mov-3', text: 'Walks up a few stairs with or without help', tags: ['grossMotor'] },
        { id: 'm24-mov-4', text: 'Eats with a spoon', tags: ['feeding', 'selfCare'] },
      ],
    },
  },
  {
    months: 30,
    label: '30 months',
    ageDescription: 'By 30 months',
    milestones: {
      socialEmotional: [
        { id: 'm30-se-1', text: 'Plays next to other children and sometimes plays with them', tags: ['play', 'social'] },
        { id: 'm30-se-2', text: 'Shows you what they can do by saying look at me', tags: ['social', 'emotions'] },
        { id: 'm30-se-3', text: 'Follows simple routines when told, like helping to pick up toys', tags: ['selfCare', 'understanding'] },
      ],
      language: [
        { id: 'm30-lang-1', text: 'Says about 50 words', tags: ['speech'] },
        { id: 'm30-lang-2', text: 'Says two or more words together with one action word, like doggie run', tags: ['speech'] },
        { id: 'm30-lang-3', text: 'Names things in a book when you point and ask what is this', tags: ['speech', 'literacy'] },
        { id: 'm30-lang-4', text: 'Says words like I, me, or we', tags: ['speech'] },
      ],
      cognitive: [
        { id: 'm30-cog-1', text: 'Uses things to pretend, like feeding a block to a doll as if it were food', tags: ['play'] },
        { id: 'm30-cog-2', text: 'Shows simple problem solving, like standing on a stool to reach something', tags: ['problemSolving'] },
        { id: 'm30-cog-3', text: 'Follows two step instructions, like put the toy down and close the door', tags: ['understanding'] },
        { id: 'm30-cog-4', text: 'Shows they know at least one color', tags: ['problemSolving'] },
      ],
      movement: [
        { id: 'm30-mov-1', text: 'Uses hands to twist things, like turning doorknobs or unscrewing lids', tags: ['fineMotor'] },
        { id: 'm30-mov-2', text: 'Takes some clothes off by themselves, like loose pants or an open jacket', tags: ['selfCare'] },
        { id: 'm30-mov-3', text: 'Jumps off the ground with both feet', tags: ['grossMotor'] },
        { id: 'm30-mov-4', text: 'Turns book pages one at a time when you read to them', tags: ['fineMotor', 'literacy'] },
      ],
    },
  },
  {
    months: 36,
    label: '3 years',
    ageDescription: 'By 3 years',
    milestones: {
      socialEmotional: [
        { id: 'm36-se-1', text: 'Calms down within 10 minutes after you leave, like at a childcare drop off', tags: ['emotions', 'attachment'] },
        { id: 'm36-se-2', text: 'Notices other children and joins them to play', tags: ['social', 'play'] },
      ],
      language: [
        { id: 'm36-lang-1', text: 'Talks with you in conversation using at least two back and forth exchanges', tags: ['speech', 'social'] },
        { id: 'm36-lang-2', text: 'Asks who, what, where, or why questions', tags: ['speech'] },
        { id: 'm36-lang-3', text: 'Says what action is happening in a picture or book when asked', tags: ['speech', 'literacy'] },
        { id: 'm36-lang-4', text: 'Says their first name when asked', tags: ['speech'] },
        { id: 'm36-lang-5', text: 'Talks well enough for others to understand most of the time', tags: ['speech'] },
      ],
      cognitive: [
        { id: 'm36-cog-1', text: 'Draws a circle when you show them how', tags: ['fineMotor', 'literacy'] },
        { id: 'm36-cog-2', text: 'Avoids touching hot objects when you warn them', tags: ['understanding', 'problemSolving'] },
      ],
      movement: [
        { id: 'm36-mov-1', text: 'Strings items together, like large beads or macaroni', tags: ['fineMotor'] },
        { id: 'm36-mov-2', text: 'Puts on some clothes by themselves, like loose pants or a jacket', tags: ['selfCare'] },
        { id: 'm36-mov-3', text: 'Uses a fork', tags: ['feeding', 'selfCare'] },
      ],
    },
  },
  {
    months: 48,
    label: '4 years',
    ageDescription: 'By 4 years',
    milestones: {
      socialEmotional: [
        { id: 'm48-se-1', text: 'Pretends to be something else during play', tags: ['play'] },
        { id: 'm48-se-2', text: 'Asks to go play with other children if none are around', tags: ['social'] },
        { id: 'm48-se-3', text: 'Comforts others who are hurt or sad', tags: ['emotions', 'social'] },
        { id: 'm48-se-4', text: 'Avoids danger, like not jumping from tall heights', tags: ['understanding'] },
        { id: 'm48-se-5', text: 'Likes to be a helper', tags: ['social', 'selfCare'] },
        { id: 'm48-se-6', text: 'Changes their behavior based on where they are', tags: ['social', 'understanding'] },
      ],
      language: [
        { id: 'm48-lang-1', text: 'Says sentences with four or more words', tags: ['speech'] },
        { id: 'm48-lang-2', text: 'Says some words from a song, story, or nursery rhyme', tags: ['speech', 'literacy'] },
        { id: 'm48-lang-3', text: 'Talks about at least one thing that happened during their day', tags: ['speech'] },
        { id: 'm48-lang-4', text: 'Answers simple questions, like what is a coat for', tags: ['understanding'] },
      ],
      cognitive: [
        { id: 'm48-cog-1', text: 'Names a few colors of items', tags: ['problemSolving'] },
        { id: 'm48-cog-2', text: 'Tells what comes next in a well known story', tags: ['literacy', 'problemSolving'] },
        { id: 'm48-cog-3', text: 'Draws a person with three or more body parts', tags: ['fineMotor'] },
      ],
      movement: [
        { id: 'm48-mov-1', text: 'Catches a large ball most of the time', tags: ['grossMotor'] },
        { id: 'm48-mov-2', text: 'Serves themselves food or pours water with adult supervision', tags: ['selfCare', 'feeding'] },
        { id: 'm48-mov-3', text: 'Unbuttons some buttons', tags: ['fineMotor', 'selfCare'] },
        { id: 'm48-mov-4', text: 'Holds a crayon or pencil between fingers and thumb rather than in a fist', tags: ['fineMotor', 'literacy'] },
      ],
    },
  },
  {
    months: 60,
    label: '5 years',
    ageDescription: 'By 5 years',
    milestones: {
      socialEmotional: [
        { id: 'm60-se-1', text: 'Follows rules or takes turns when playing games with other children', tags: ['social', 'play'] },
        { id: 'm60-se-2', text: 'Sings, dances, or acts for you', tags: ['social', 'play'] },
        { id: 'm60-se-3', text: 'Does simple chores at home, like matching socks or clearing the table', tags: ['selfCare'] },
      ],
      language: [
        { id: 'm60-lang-1', text: 'Tells a story they heard or made up with at least two events', tags: ['speech', 'literacy'] },
        { id: 'm60-lang-2', text: 'Answers simple questions about a book or story after you read it', tags: ['understanding', 'literacy'] },
        { id: 'm60-lang-3', text: 'Keeps a conversation going with more than three back and forth exchanges', tags: ['speech', 'social'] },
        { id: 'm60-lang-4', text: 'Uses or recognizes simple rhymes', tags: ['literacy'] },
      ],
      cognitive: [
        { id: 'm60-cog-1', text: 'Counts to 10', tags: ['numeracy'] },
        { id: 'm60-cog-2', text: 'Names some numbers between 1 and 5 when you point to them', tags: ['numeracy'] },
        { id: 'm60-cog-3', text: 'Uses words about time, like yesterday, tomorrow, morning, or night', tags: ['understanding'] },
        { id: 'm60-cog-4', text: 'Pays attention for 5 to 10 minutes during an activity', tags: ['problemSolving'] },
        { id: 'm60-cog-5', text: 'Writes some letters in their name', tags: ['literacy', 'fineMotor'] },
        { id: 'm60-cog-6', text: 'Names some letters when you point to them', tags: ['literacy'] },
      ],
      movement: [
        { id: 'm60-mov-1', text: 'Buttons some buttons', tags: ['fineMotor', 'selfCare'] },
        { id: 'm60-mov-2', text: 'Hops on one foot', tags: ['grossMotor'] },
      ],
    },
  },
];

/* ------------------------------------------------------------------
 * DERIVED DATA AND HELPERS
 * ------------------------------------------------------------------ */

/**
 * Every milestone as a flat list, with its checkpoint and domain
 * attached, plus a derived window.
 *
 * A note on emergingFromMonths. The CDC publishes a single "by this
 * age" point, not a start date. To support your range based framing we
 * treat the previous checkpoint as the point where a skill commonly
 * starts appearing. That is a presentation convention chosen to keep
 * parents calm, not a separate clinical dataset, which is why the
 * wording in the app should stay soft: "often starts showing up around".
 */
export const ALL_MILESTONES = MILESTONE_CHECKPOINTS.flatMap((checkpoint, index) => {
  const previous = index > 0 ? MILESTONE_CHECKPOINTS[index - 1].months : 0;
  return MILESTONE_DOMAINS.flatMap((domain) =>
    (checkpoint.milestones[domain.id] || []).map((m) => ({
      ...m,
      domain: domain.id,
      domainLabel: domain.label,
      checkpointMonths: checkpoint.months,
      checkpointLabel: checkpoint.label,
      typicalByMonths: checkpoint.months,
      emergingFromMonths: previous,
      // Content matching fields, so filterByAge in age.js works on these
      minMonths: previous,
      maxMonths: checkpoint.months + 12,
    }))
  );
});

/** The checkpoint object for an exact age in months, or null. */
export function getCheckpoint(months) {
  return MILESTONE_CHECKPOINTS.find((c) => c.months === months) || null;
}

/** Every milestone at one checkpoint, as a flat list. */
export function getMilestonesForCheckpoint(months) {
  return ALL_MILESTONES.filter((m) => m.checkpointMonths === months);
}

/** Milestones at one checkpoint, grouped by domain, ready to render. */
export function getMilestonesByDomain(months) {
  const checkpoint = getCheckpoint(months);
  if (!checkpoint) return [];
  return MILESTONE_DOMAINS.map((domain) => ({
    domain: domain.id,
    label: domain.label,
    shortLabel: domain.shortLabel,
    description: domain.description,
    items: getMilestonesForCheckpoint(months).filter((m) => m.domain === domain.id),
  })).filter((group) => group.items.length > 0);
}

/** Every milestone carrying a given tag, for example all feeding items. */
export function getMilestonesByTag(tag) {
  return ALL_MILESTONES.filter((m) => Array.isArray(m.tags) && m.tags.includes(tag));
}

/** A single milestone by id, or null. */
export function getMilestoneById(id) {
  return ALL_MILESTONES.find((m) => m.id === id) || null;
}

/**
 * The parent friendly range sentence for a milestone.
 * flexMonths comes from getMilestoneFlexMonths in supportLenses.js, so
 * a family using a lens sees a gentler window.
 */
export function describeMilestoneWindow(milestone, flexMonths = 0) {
  if (!milestone) return '';
  const by = milestone.typicalByMonths + (flexMonths || 0);
  const asYears = (m) => (m >= 24 ? `${Math.round(m / 12)} years` : `${m} months`);
  if (milestone.emergingFromMonths === 0) {
    return `Most children can do this by ${asYears(by)}.`;
  }
  return `This often starts showing up around ${asYears(
    milestone.emergingFromMonths
  )}, and most children can do it by ${asYears(by)}.`;
}

/**
 * Progress summary for one checkpoint given a child's saved statuses.
 *
 * statuses is a plain object of milestoneId to status id, which is what
 * you would store per child. Anything unrecorded is simply not counted,
 * so a parent who has filled in three items is not shown as failing the
 * other twelve.
 */
export function summarizeProgress(months, statuses = {}) {
  const items = getMilestonesForCheckpoint(months);
  const counts = { notYet: 0, emerging: 0, sometimes: 0, mastered: 0, unsure: 0, unrecorded: 0 };

  items.forEach((item) => {
    const status = statuses[item.id];
    if (status && Object.prototype.hasOwnProperty.call(counts, status)) {
      counts[status] += 1;
    } else {
      counts.unrecorded += 1;
    }
  });

  const recorded = items.length - counts.unrecorded;
  // "Showing up" deliberately counts sometimes and mastered together.
  // Progress within a skill is real progress and should be visible.
  const showingUp = counts.sometimes + counts.mastered;

  return {
    total: items.length,
    recorded,
    ...counts,
    showingUp,
    // Ratio of recorded items that are showing up, or null if none recorded
    ratio: recorded > 0 ? showingUp / recorded : null,
  };
}

/**
 * Milestones a parent marked as not yet, which is what should surface
 * in a "worth mentioning at your next visit" list. Never framed as
 * failures, always paired with ACT_EARLY_GUIDANCE.
 */
export function getNotYetMilestones(months, statuses = {}) {
  return getMilestonesForCheckpoint(months).filter((m) => statuses[m.id] === 'notYet');
}

export const CHECKPOINT_MONTHS = MILESTONE_CHECKPOINTS.map((c) => c.months);

export default MILESTONE_CHECKPOINTS;

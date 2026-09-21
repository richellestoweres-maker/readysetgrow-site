/**
 * Ready Set Grow: The learning day
 * ------------------------------------------------------------------
 * What a structured day actually looks like, block by block, from
 * about eighteen months up. Written for a parent teaching at home, and
 * for a parent whose child is in a daycare and who wants to know what
 * on earth they do all day.
 *
 * WHY A RHYTHM AND NOT A CURRICULUM
 * Every good early years program is a rhythm first. The same shape
 * every day, in the same order, with the content swapped in and out.
 * The rhythm is what lets a two year old cope, because they know what
 * comes next. The content is the easy part and it changes weekly. So
 * this file is the rhythm, and the subjects hang off it.
 *
 * IT GOES ALL THE WAY TO EIGHTEEN
 * It stopped at six for a while, which was wrong. Families home
 * educate through high school, and the part they most need help with
 * is the end of it, where the work has to start counting for something
 * outside the house. The hours per band follow the published
 * homeschool guidance, which is roughly one to two hours at five and
 * four to five at sixteen.
 *
 * IT IS DELIBERATELY SHORTER THAN A SCHOOL DAY
 * A daycare day is long because of childcare, not because of learning.
 * The actual taught minutes inside a preschool day are small, and the
 * rest is play, outside, food and sleep. A parent at home can cover
 * the same ground in a fraction of the hours and should be told that
 * plainly, because the alternative is a mother who thinks she is
 * failing at nine in the morning.
 *
 * WHERE THE NUMBERS COME FROM
 * Block lengths follow the HighScope daily routine, which publishes
 * real minute counts, and the widely used circle time lengths by age.
 * The movement minutes are the World Health Organization figure for
 * under fives. Sources at the bottom. Where a number is our judgement
 * rather than a published one, it says so.
 */

export const LEARN_INTRO =
  'The same shape every day, in the same order. That is most of what a daycare is actually doing, '
  + 'and it is the part you can do at home.';

export const LEARN_BLOCK_KINDS = [
  { id: 'circle', label: 'Together' },
  { id: 'work', label: 'Their own work' },
  { id: 'taught', label: 'Taught' },
  { id: 'move', label: 'Moving' },
  { id: 'outside', label: 'Outside' },
  { id: 'calm', label: 'Calm' },
  { id: 'care', label: 'Food and rest' },
];

export const LEARN_BANDS = [
  /* ============================================================
     EIGHTEEN MONTHS TO TWO
     The age she asked about by name. Almost nothing published is
     aimed here, because it sits between baby classes and preschool.
     What it needs is not lessons, it is the shape: the same three
     or four moments in the same order, so the day becomes something
     a toddler can predict.
     ============================================================ */
  {
    id: 'first',
    label: '18 months to two',
    minMonths: 16, maxMonths: 24,
    sum: 'About an hour of structure, spread across a morning. Everything else is play.',
    note: 'If they walk off halfway through a block, the block is over. That is not a failure, it is the information.',
    blocks: [
      {
        id: 'hello', kind: 'circle', name: 'Hello time', minutes: '3 to 5',
        what: 'The same tiny opening every single day, so they learn that the day has a beginning.',
        doThis: [
          'The same hello song, with the same hand actions, every day. Do not change it for months.',
          'Say their name and let them say it back, however it comes out.',
          'Go to the window and say what the weather is doing. 2 sentences.',
          'One last song with a big finish, which is the signal that hello time is done.',
        ],
        need: ['Nothing'],
      },
      {
        id: 'onething', kind: 'taught', name: 'One thing together', minutes: '5 to 10',
        what: 'A single material, on a tray, that you show them how to use and then hand over.',
        doThis: [
          'Put out one thing only. Posting coins into a slot, a jug of water and 2 cups, a bowl of pasta and a spoon.',
          'Show them once, slowly, with almost no words. Your hands, not your voice.',
          'Then stop talking and let them do it wrong for as long as they want to.',
          'Put it away together when they lose interest, which is part of the lesson.',
        ],
        need: ['One tray', 'One activity, from the kitchen is fine'],
      },
      {
        id: 'move1', kind: 'move', name: 'Moving', minutes: '20 to 30',
        what: 'Big muscles. At this age this is the learning, not the break from it.',
        doThis: [
          'Cushions on the floor to climb over, a tunnel out of chairs and a sheet, stairs with you behind them.',
          'Music on and dance, stop the music, everybody freeze. They will not get it for weeks and then suddenly will.',
          'Carrying heavy things across the room. A full laundry basket is perfect and it is also a job.',
        ],
        need: ['Cushions', 'Music'],
      },
      {
        id: 'outside1', kind: 'outside', name: 'Outside', minutes: '30 to 40',
        what: 'Every day, in almost every weather. This is the single highest value block on the list.',
        doThis: [
          'No plan. Walking slowly and letting them stop at everything counts and is better than a playground.',
          'Name 3 things out loud while you are out. Just name them.',
          'Let them carry something home. A stick, a leaf, a stone.',
        ],
        need: ['Coat', 'Rain boots'],
      },
      {
        id: 'books1', kind: 'calm', name: 'Books', minutes: '5 to 10',
        what: 'On your lap, the same books over and over, which is exactly what they need.',
        doThis: [
          'Let them choose, even when it is the same one for the ninth day.',
          'Point at a thing and name it, then wait. The waiting is where the language comes from.',
          'Stop when they get down. Finishing the book is not the goal.',
        ],
        need: ['4 or 5 board books, low down where they can reach them'],
      },
    ],
  },

  /* ============================================================
     TWO TO THREE
     Free choice appears properly here, and the taught block gets
     long enough to be worth calling taught.
     ============================================================ */
  {
    id: 'two',
    label: '2 to 3',
    minMonths: 24, maxMonths: 36,
    sum: 'About 2 hours of shape across the morning, most of it their own play.',
    note: 'Two is the age where the whole thing falls apart if the order changes. Keep the order even when you change what is in it.',
    blocks: [
      {
        id: 'circle2', kind: 'circle', name: 'Circle time', minutes: '5 to 8',
        what: 'Settle, learn one small thing, move, close. That order, every day.',
        doThis: [
          'Opening song with actions.',
          'The day of the week and the weather. 2 minutes, with a picture or a real look out of the window.',
          'Count something real. Everyone here, the buttons on their cardigan, the apples in the bowl.',
          'One short book, and stop to ask what happens next even though they cannot answer yet.',
          'A movement song to reset them, then the same closing line every day.',
        ],
        need: ['Nothing', 'A calendar or weather chart if you want one, but it is optional'],
      },
      {
        id: 'work2', kind: 'work', name: 'Their own work', minutes: '30 to 45',
        what: 'They choose, you stay out of it. The longest block of the day and the most important.',
        doThis: [
          '4 or 5 things out on a low shelf, not 20 in a toy box. Rotate what is out every week or two.',
          'Sit nearby and say nothing unless asked. Narrating play interrupts it.',
          'When they get stuck, ask one question rather than fixing it. What could you try.',
          'Tidy up together at the end with the same tidy up song every time.',
        ],
        need: ['A low shelf', '4 or 5 activities, rotated'],
      },
      {
        id: 'taught2', kind: 'taught', name: 'Small group time', minutes: '10 to 15',
        what: 'One skill, one material, led by you. This is where the letters and colors and numbers actually live.',
        doThis: [
          'Pick one thing for the whole week. One color, one shape, the number three.',
          'Same material every day that week, used slightly differently each day.',
          'Say the word far more often than feels sensible. Repetition is the lesson.',
        ],
        need: ['Whatever the week’s one thing needs'],
      },
      {
        id: 'move2', kind: 'move', name: 'Music and moving', minutes: '10 to 15',
        what: 'Deliberate, not just running about. Beat, stopping, and copying.',
        doThis: [
          'Clap the beat of a song, then clap their name in syllables. This is early reading, though it does not look like it.',
          'Ribbons or scarves and move them high, low, fast, slow.',
          'Animal walks across the room. Bear, crab, frog.',
        ],
        need: ['Music', 'Scarves or dish towels'],
      },
      {
        id: 'outside2', kind: 'outside', name: 'Outside', minutes: '30 to 40',
        what: 'Still every day. Under fives need about 3 hours of moving across the whole day and this is the reliable chunk of it.',
        doThis: [
          'Somewhere to climb, somewhere to run, and water or sand if you can manage it.',
          'Take one indoor thing outside. Cars in the mud, chalk on the path, a paintbrush and a bucket of water.',
        ],
        need: ['Outdoor clothes'],
      },
      {
        id: 'story2', kind: 'calm', name: 'Story and rest', minutes: '15',
        what: 'The wind down, and the signal that the working part of the day is finished.',
        doThis: [
          'Lights down, one longer book, and no questions this time.',
          'Then quiet time whether or not they still nap.',
        ],
        need: ['Books'],
      },
    ],
  },

  /* ============================================================
     THREE TO FOUR
     The full plan, do, review shape becomes possible, and this is
     where a home day starts to look properly like a preschool day.
     ============================================================ */
  {
    id: 'three',
    label: '3 to 4',
    minMonths: 36, maxMonths: 48,
    sum: 'About 2 and a half to 3 hours, and it now has a beginning, a middle and an end they can describe.',
    note: 'The big change at three is that they can say what they are going to do before they do it. That is worth building the morning around.',
    blocks: [
      {
        id: 'circle3', kind: 'circle', name: 'Circle time', minutes: '8 to 12',
        what: 'Longer, and now it can carry real content.',
        doThis: [
          'Hello song, then the calendar. Day, month, weather, how many days until something they care about.',
          'The letter or sound of the week. Say it, find it, make its shape with their body.',
          'Count to 20 together, and count a real set of 10 things.',
          'A book with questions in the middle of it.',
          'Movement song, closing line.',
        ],
        need: ['A calendar', 'The week’s letter somewhere they can see it'],
      },
      {
        id: 'plan3', kind: 'circle', name: 'Planning', minutes: '5 to 10',
        what: 'They say out loud what they are going to do and where. It sounds small and it changes everything.',
        doThis: [
          'Ask where are you going to work today, and what are you going to do there.',
          'Take it seriously and write it down in front of them. Writing it down is half the point.',
          'Do not steer them. A plan you chose is not a plan.',
        ],
        need: ['Paper and a pen'],
      },
      {
        id: 'work3', kind: 'work', name: 'Work time', minutes: '45 to 60',
        what: 'They carry out the plan, or abandon it for something better, which is allowed.',
        doThis: [
          'Areas rather than a toy box. A building corner, a drawing table, a pretend corner, a book corner.',
          'Stay out unless invited. Join at their level when you are.',
          'Comment on what you see rather than praising it. You used every single blue one.',
        ],
        need: ['3 or 4 defined areas, however small'],
      },
      {
        id: 'recall3', kind: 'circle', name: 'Tidy up and tell me', minutes: '10',
        what: 'They tidy, then they tell you what they did. The telling is a language lesson wearing a costume.',
        doThis: [
          'Same tidy up song, every day.',
          'Then ask what did you make, what was hard, what will you do tomorrow.',
          'Let them show you rather than only tell you if that is easier.',
        ],
        need: ['Nothing'],
      },
      {
        id: 'taught3', kind: 'taught', name: 'Taught time', minutes: '15 to 20',
        what: 'You lead. One skill, done properly, sat at a table.',
        doThis: [
          'Rotate through the week. Letters and sounds, numbers, writing and fine motor, colors and feelings, and something about the world.',
          '15 minutes is plenty. Stop before they are done rather than after.',
          'Do it at the same table every time so sitting there means working.',
        ],
        need: ['Pencils, paper, scissors, glue'],
      },
      {
        id: 'outside3', kind: 'outside', name: 'Outside', minutes: '40 to 60',
        what: 'The block most likely to be cut and the one that should never be.',
        doThis: [
          'At least one thing that gets them properly out of breath.',
          'Take the learning out with you. Chalk letters on the path, count the cars, find 5 things that are red.',
        ],
        need: ['Chalk', 'A bucket'],
      },
      {
        id: 'calm3', kind: 'calm', name: 'Yoga or quiet', minutes: '10',
        what: 'A deliberate down shift before food. It is also where they learn that a body can be calmed on purpose.',
        doThis: [
          '4 or 5 poses with animal names and hold each one while you count to five.',
          'Lie on their back with a soft toy on their tummy and watch it go up and down.',
          'One slow breath in through the nose, out through the mouth, 5 times.',
        ],
        need: ['A mat or a rug', 'A small soft toy'],
      },
      {
        id: 'story3', kind: 'calm', name: 'Story and rest', minutes: '20',
        what: 'A longer book, and quiet time after it whether or not they nap.',
        doThis: [
          'Chapter books start to work here. A few pages a day of the same one.',
          'Quiet time in their room with books counts. It does not have to be sleep.',
        ],
        need: ['Books'],
      },
    ],
  },

  /* ============================================================
     FOUR TO FIVE
     The pre school year. Letters become reading, marks become
     writing, and a second language is worth putting in the day.
     ============================================================ */
  {
    id: 'four',
    label: '4 to 5',
    minMonths: 48, maxMonths: 60,
    sum: 'Around 3 hours. The taught part roughly doubles, and it can now sit still long enough to be taught.',
    note: 'This is the year the gap opens between what they can do and what they will sit down for. Keep the sitting blocks short and the rest of it moving.',
    blocks: [
      {
        id: 'circle4', kind: 'circle', name: 'Circle time', minutes: '10 to 15',
        what: 'The longest circle time will ever need to be.',
        doThis: [
          'Calendar, weather, and how many days in the month. Real counting on a real grid.',
          'The sound of the week, words that start with it, and writing it in the air.',
          'A book with proper discussion. What do you think happens next and why do you think that.',
          'Something they share with you, one at a time, which is the beginning of taking turns to speak.',
        ],
        need: ['A calendar', 'A whiteboard or a big sheet of paper'],
      },
      {
        id: 'plan4', kind: 'circle', name: 'Planning', minutes: '5 to 10',
        what: 'Same as three, but now they can plan 2 steps and you can hold them to it.',
        doThis: [
          'Where, what, and what you will need for it.',
          'Write it as a list and let them draw next to it.',
        ],
        need: ['Paper and a pen'],
      },
      {
        id: 'work4', kind: 'work', name: 'Work time', minutes: '45 to 60',
        what: 'Longer projects that survive to the next day start to be possible.',
        doThis: [
          'Let something stay built overnight. A model that is not knocked down is a new idea at this age.',
          'Add real tools. A stapler, a hole punch, sellotape, safety scissors.',
        ],
        need: ['A shelf or corner where work in progress can live'],
      },
      {
        id: 'recall4', kind: 'circle', name: 'Tidy up and tell me', minutes: '10',
        what: 'Now they can be asked what was hard, and answer it.',
        doThis: [
          'What did you do, what went wrong, what will you change tomorrow.',
        ],
        need: ['Nothing'],
      },
      {
        id: 'taught4', kind: 'taught', name: 'Taught time', minutes: '20 to 30',
        what: 'Split it. 2 short blocks with something physical in between works far better than one long one.',
        doThis: [
          'Letters and sounds on Monday and Thursday, numbers on Tuesday and Friday, writing every day for 5 minutes.',
          'Writing means their own name first, then letters that are in it.',
          'Stop at the first sign it has become a battle. Tomorrow is fine.',
        ],
        need: ['Pencils', 'Lined paper', 'Their name written out to copy'],
      },
      {
        id: 'lang4', kind: 'taught', name: 'A second language', minutes: '10',
        what: 'Short and daily beats long and weekly. It does not need you to be fluent.',
        doThis: [
          '10 minutes, same time every day. Songs and naming, not grammar.',
          'Name things you are already touching. The apple, the door, the water.',
          'Count to 10 in it every single day until it is automatic.',
        ],
        need: ['Nothing', 'Songs in that language if you can find them'],
      },
      {
        id: 'outside4', kind: 'outside', name: 'Outside', minutes: '45 to 60',
        what: 'At this age at least an hour of the day should be properly energetic.',
        doThis: [
          'Bikes, scooters, climbing, balls. Something with a skill in it that they can get better at.',
          'Take the taught thing outside once a week. Chalk math on the path, a letter hunt, measuring things with a stick.',
        ],
        need: ['Chalk', 'A ball'],
      },
      {
        id: 'calm4', kind: 'calm', name: 'Yoga and feelings', minutes: '10 to 15',
        what: 'Poses, and then naming what their body is doing, which is where emotional vocabulary comes from.',
        doThis: [
          '5 poses, held and counted.',
          'Then ask what color they feel like today and why, and tell them yours.',
          'Name the feeling out loud when you see it during the day. You look frustrated. That is the whole lesson.',
        ],
        need: ['A mat', 'A feelings chart if you like one, but your own face works'],
      },
      {
        id: 'story4', kind: 'calm', name: 'Story', minutes: '20',
        what: 'A chapter a day of something with a plot they have to hold in their head.',
        doThis: [
          'Ask what happened yesterday before you start.',
          'Let them be bored for a moment. Holding a story across days is the skill.',
        ],
        need: ['A chapter book'],
      },
    ],
  },

  /* ============================================================
     FIVE TO SIX
     Home education proper. Reading and writing become the spine.
     ============================================================ */
  {
    id: 'five',
    label: '5 to 6',
    minMonths: 60, maxMonths: 72,
    sum: '2 hours or so, and for the first time the taught blocks are the point rather than the seasoning.',
    note: 'A home educated 5 year old covers in about 2 focused hours what a class of 20 takes most of a day to cover. That is not a shortcut, it is the arithmetic of 1 to 1, and the published homeschool guidance says the same.',
    blocks: [
      {
        id: 'circle5', kind: 'circle', name: 'Morning together', minutes: '10',
        what: 'Shorter than four. It becomes a briefing rather than a lesson.',
        doThis: [
          'Date, the plan for the day, and one thing to look forward to.',
          'A poem or a song. The same one all week until they know it.',
        ],
        need: ['Nothing'],
      },
      {
        id: 'read5', kind: 'taught', name: 'Reading', minutes: '20',
        what: 'Daily, non negotiable, and short.',
        doThis: [
          '10 minutes of them reading to you, ten of you reading to them well above their own level.',
          'Sounding out, then re reading the same sentence smoothly. The second read is where it sticks.',
          'Stop while they still want to carry on.',
        ],
        need: ['Reading books at their level', 'One book far above it'],
      },
      {
        id: 'write5', kind: 'taught', name: 'Writing', minutes: '15 to 20',
        what: 'Letter formation, then real sentences about real things.',
        doThis: [
          '5 minutes of forming letters properly, which matters more than it sounds.',
          'Then one sentence about something true. What they did yesterday, what they want for lunch.',
          'Do not correct the spelling of a 5 year old sentence. Correct one thing, once.',
        ],
        need: ['Lined paper', 'A pencil that fits their hand'],
      },
      {
        id: 'maths5', kind: 'taught', name: 'Numbers', minutes: '15 to 20',
        what: 'Always with objects first, then on paper.',
        doThis: [
          'Count, add and take away with real things they can move. Buttons, pasta, coins.',
          'Only write it down after they have done it with their hands.',
          'Measure and weigh something real once a week.',
        ],
        need: ['Something countable', 'A tape measure', 'Kitchen scales'],
      },
      {
        id: 'work5', kind: 'work', name: 'Project time', minutes: '45',
        what: 'One big thing they are working on across weeks, chosen by them.',
        doThis: [
          'Let it be strange and let it be theirs. Volcanoes, a shop, a comic, a model of the house.',
          'Your job is materials and questions, not direction.',
        ],
        need: ['Junk modelling box', 'Tape, glue, scissors'],
      },
      {
        id: 'lang5', kind: 'taught', name: 'A second language', minutes: '10 to 15',
        what: 'Still daily. Now it can carry short sentences.',
        doThis: [
          '10 minutes, same slot. Songs, then simple back and forth.',
          'Label 5 things in the house in that language and leave the labels up.',
        ],
        need: ['Sticky labels'],
      },
      {
        id: 'outside5', kind: 'outside', name: 'Outside', minutes: '60',
        what: 'An hour, and ideally with other children in it at least twice a week.',
        doThis: [
          'A sport, a club, a park with people they know. The social half stops being automatic once they are not in a class.',
        ],
        need: ['Nothing'],
      },
      {
        id: 'calm5', kind: 'calm', name: 'Quiet and read', minutes: '20',
        what: 'Alone, with a book, not being taught. The habit is the point.',
        doThis: [
          'Same time every day. They can look at pictures. It still counts.',
        ],
        need: ['Books they chose themselves'],
      },
    ],
  },
  /* ============================================================
     SIX TO ELEVEN
     The primary years. This is the first band where the day has
     subjects in it rather than blocks, and the first where a parent
     is genuinely teaching rather than setting things up.
     ============================================================ */
  {
    id: 'primary',
    label: '6 to 11',
    minMonths: 72, maxMonths: 132,
    sum: '2 and a half to 3 and a half hours of actual work. That is the whole school day at this age and the published homeschool guidance agrees.',
    note: 'The hardest part of this band is believing you have done enough by lunchtime. You have. A class of 25 needs the rest of the day for the 25, not for the learning.',
    blocks: [
      {
        id: 'p-open', kind: 'circle', name: 'Opening', minutes: '10',
        what: 'A short start that makes it a working morning rather than a continuation of breakfast.',
        doThis: [
          'The date, the plan for the day written where they can see it, and one thing they are looking forward to.',
          'A poem, a psalm, a piece of music or a painting. The same one all week. This is the whole of what people mean by morning basket and it costs 10 minutes.',
        ],
        need: ['A whiteboard or a sheet of paper for the day’s list'],
      },
      {
        id: 'p-maths', kind: 'taught', name: 'Math', minutes: '30 to 45',
        what: 'The subject that suffers most from being skipped and least from being short.',
        doThis: [
          'New idea first, while they are fresh, then practice. Never the other way round.',
          '10 minutes of something already learned at the end of every session. Spaced review is the difference between knowing it in March and knowing it in September.',
          'Stop at the time, not at the end of the page. Finishing the page is not the lesson.',
        ],
        need: ['A curriculum or a workbook you trust', 'Something countable', 'Squared paper'],
      },
      {
        id: 'p-read', kind: 'taught', name: 'Reading and language', minutes: '30 to 45',
        what: 'Reading aloud to them, them reading to you, and the mechanics of spelling and grammar in small doses.',
        doThis: [
          'Read aloud to them every day, far above their own reading level, for as long as they will sit. This is the single highest value thing in the band and it stays true until they leave.',
          '10 to 15 minutes of them reading to you, and then them reading alone.',
          'Spelling and grammar in 10 minute pieces rather than in an hour on Fridays.',
        ],
        need: ['A read aloud book', 'Reading books at their level'],
      },
      {
        id: 'p-write', kind: 'taught', name: 'Writing', minutes: '20 to 30',
        what: 'Something written every day, and only one thing corrected at a time.',
        doThis: [
          'Narration first. They tell you what happened in the read aloud, then they write a version of it. That single exercise carries comprehension, sequencing and composition at once.',
          'Copy a well written sentence a day. It teaches punctuation without a punctuation lesson.',
          'Correct one thing. A page returned covered in red teaches them that writing is dangerous.',
        ],
        need: ['Lined paper', 'A pencil'],
      },
      {
        id: 'p-world', kind: 'work', name: 'History, science or the world', minutes: '45',
        what: 'One of them a day rather than all of them every day. Rotate across the week.',
        doThis: [
          'Read about it, talk about it, then make something or write something about it.',
          '6 weeks on one topic beats 6 topics in 6 weeks. Depth is what they remember.',
          'Once a week, do the thing rather than read about it. Grow it, build it, visit it, cook it.',
        ],
        need: ['Library books', 'Junk modelling box'],
      },
      {
        id: 'p-out', kind: 'outside', name: 'Outside and moving', minutes: '60',
        what: 'An hour, and at least twice a week with other children in it.',
        doThis: [
          'A sport, a club, a park with people they know. The social half stops being automatic the moment they are not in a class, and it has to be deliberately arranged.',
        ],
        need: ['Nothing'],
      },
      {
        id: 'p-own', kind: 'calm', name: 'Their own time', minutes: '45 or more',
        what: 'Not taught, not scheduled, not screens. Boredom included.',
        doThis: [
          'Leave them alone with it. What they choose when nobody is directing them is most of who they are becoming.',
          'Quiet reading counts and is worth protecting as a fixed habit.',
        ],
        need: ['Books they chose themselves'],
      },
    ],
  },

  /* ============================================================
     ELEVEN TO FOURTEEN
     Middle school. The year a home educated child starts working
     rather than being worked with, and the year most families find
     hardest to get right.
     ============================================================ */
  {
    id: 'middle',
    label: '11 to 14',
    minMonths: 132, maxMonths: 168,
    sum: '3 to 4 hours, and the shift that matters is that some of it is now theirs to run rather than yours.',
    note: 'The job in this band is to hand over the running of the day, one piece at a time, while they are still at your table and a bad week costs nothing. If you are still telling a 14 year old what to do at nine every morning, that is the thing to change.',
    blocks: [
      {
        id: 'm-plan', kind: 'circle', name: 'Their plan, not yours', minutes: '10',
        what: 'They write the day. You look at it and say yes or ask one question.',
        doThis: [
          'Give them the week on a Monday and let them decide what lands on which day.',
          'Let a badly planned Thursday actually be a bad Thursday. That is the lesson and it is cheap now and expensive at 19.',
        ],
        need: ['A planner or a notebook they own'],
      },
      {
        id: 'm-maths', kind: 'taught', name: 'Math', minutes: '45 to 60',
        what: 'Pre algebra and then algebra. The band where a shaky foundation starts to show, and the band to fix it in.',
        doThis: [
          'If fractions, decimals and percentages are not solid, stop and fix that before algebra. Everything after it sits on those three.',
          'They attempt it alone first and bring you the stuck ones. Sitting next to them for the whole hour is why some children never learn to be stuck productively.',
          'A video lesson is a fine teacher here and you are allowed to use one.',
        ],
        need: ['A proper curriculum', 'Squared paper'],
      },
      {
        id: 'm-eng', kind: 'taught', name: 'English', minutes: '45',
        what: 'Longer writing, and reading something they would not have picked.',
        doThis: [
          'One piece of real writing a week, drafted and then improved, rather than something new every day.',
          'Teach the paragraph properly. It is the unit everything later is built out of.',
          'Keep reading aloud to them. 11 is not too old and they will not say they like it.',
        ],
        need: ['A novel', 'Somewhere to keep drafts'],
      },
      {
        id: 'm-sci', kind: 'taught', name: 'Science', minutes: '45',
        what: 'Now with real vocabulary, real measurement and written up results.',
        doThis: [
          'Write it up properly. What I thought would happen, what I did, what happened, why I think that is.',
          'Rotate biology, chemistry and physics by term rather than mixing them.',
        ],
        need: ['Measuring things', 'A notebook kept as a lab book'],
      },
      {
        id: 'm-hist', kind: 'work', name: 'History, geography and the arts', minutes: '45',
        what: '2 or three of these across a week, not all of them every day.',
        doThis: [
          'Primary sources start to work here. A real letter, a real photograph, a real map.',
          'Let them argue with it. Why would somebody have written that, and who was not asked.',
        ],
        need: ['Library books', 'A map'],
      },
      {
        id: 'm-skill', kind: 'work', name: 'Something they chose', minutes: '45',
        what: 'A skill they picked, pursued for a term at a time. This is not a reward block, it is the point.',
        doThis: [
          'An instrument, a language, code, a craft, a sport, a business. Theirs to pick and theirs to abandon at the end of a term, not in week two.',
          'Your job is materials, a teacher if one is needed, and staying out of it.',
        ],
        need: ['Whatever it is'],
      },
      {
        id: 'm-life', kind: 'care', name: 'Running a life', minutes: '30',
        what: 'The subject school does not teach and a home can.',
        doThis: [
          'Cook one family meal a week from start to doing the dishes.',
          'Their own laundry, their own room, their own alarm clock.',
          'Money. An amount, a period, and no rescuing halfway through it.',
        ],
        need: ['Nothing you do not already own'],
      },
      {
        id: 'm-out', kind: 'outside', name: 'Out of the house', minutes: '60',
        what: 'Every day, and with people their own age several times a week.',
        doThis: [
          'This is the band where isolation does real damage and the band where a parent is most tempted to let it slide. Put it in the diary.',
        ],
        need: ['Nothing'],
      },
    ],
  },

  /* ============================================================
     FOURTEEN TO EIGHTEEN
     High school. The band where the work has to start counting for
     something outside the house, and where the parent's job turns
     into record keeping and getting out of the way.
     ============================================================ */
  {
    id: 'high',
    label: '14 to 18',
    minMonths: 168, maxMonths: 240,
    sum: '4 to 5 hours, mostly run by them. Your job shifts from teaching to keeping the records and opening doors.',
    note: 'Start the transcript in the first week of ninth grade, not in the spring of twelfth. Reconstructing 4 years of work from memory is the single most common regret in home educating high school, and it is entirely avoidable.',
    blocks: [
      {
        id: 'h-own', kind: 'circle', name: 'They run the day', minutes: '10',
        what: 'A check in, not a briefing. What is on today, what is due, where are you stuck.',
        doThis: [
          'Weekly is enough by 16. Daily is too much by then and they will tell you so.',
          'Hold them to deadlines you did not set. Somebody else will, soon, and it will matter more.',
        ],
        need: ['A planner they own'],
      },
      {
        id: 'h-core', kind: 'taught', name: 'The four that count', minutes: '3 to 4 hours total',
        what: 'English, math, science and social studies. Most states expect 4 years of English and 3 to four of the rest, and a transcript that shows them.',
        doThis: [
          'One credit is roughly 120 to 180 hours of work, or a finished textbook. Write down which definition you are using and stay with it.',
          'Outsource what you cannot teach. A community college class, an online course, a tutor. Using one is not failing at this.',
          'Community college classes taken at 16 and 17 often count twice, once for high school and once for college. That is the single best value move available in this band.',
        ],
        need: ['Curricula you have chosen on purpose', 'A record of hours or chapters'],
      },
      {
        id: 'h-elect', kind: 'work', name: 'Their own subjects', minutes: '45 to 60',
        what: 'The electives. This is where a home educated transcript gets genuinely interesting rather than a thinner version of a school one.',
        doThis: [
          'Depth in one or 2 things beats a scattering. 3 years of the same instrument, language or trade says more than 8 abandoned ones.',
          'Real work counts. A job, a business, caring for a relative, running the family books. Name it, hour it, put it on the transcript.',
        ],
        need: ['Whatever it is'],
      },
      {
        id: 'h-record', kind: 'care', name: 'The record', minutes: '15 a week',
        what: '15 minutes a week that saves a catastrophic 2 weeks in 12th grade.',
        doThis: [
          'What was studied, roughly how long, what was produced, what the grade was and how you decided it.',
          'Keep a folder of actual work. Essays, lab reports, photographs of things made.',
          'Check what your own state requires, because it varies enormously and some of it has deadlines.',
        ],
        need: ['A spreadsheet or a folder', 'Somewhere to keep the work'],
      },
      {
        id: 'h-after', kind: 'work', name: 'What comes next', minutes: 'An hour a week from 16',
        what: 'College, trade, work or a year of something else. All four are real answers and the planning for each starts early.',
        doThis: [
          'Test dates, application windows and financial aid deadlines go in a calendar in ninth grade, not later.',
          'If it is a trade or an apprenticeship, find out now what they actually want to see, because it is rarely what a college wants.',
          '2 people who are not their parent who will write about them. Start building those relationships years before you need the letters.',
        ],
        need: ['A calendar', 'A list of deadlines'],
      },
      {
        id: 'h-life', kind: 'care', name: 'Running a life', minutes: '30',
        what: 'The things an 18 year old is assumed to know and mostly does not.',
        doThis: [
          'A bank account, a budget, and what a payslip actually says.',
          'How to file a tax return, in the year they first earn anything.',
          'Cooking 6 meals properly. Booking their own appointments. Changing a tire.',
          'What a lease says, what insurance is for, and what an interest rate does over time.',
        ],
        need: ['Nothing bought'],
      },
      {
        id: 'h-out', kind: 'outside', name: 'A life outside the house', minutes: 'Most days',
        what: 'Work, volunteering, a team, a class, a church, a band. Somewhere they are known by people who are not related to them.',
        doThis: [
          'A job is worth more than another elective at this age, for reasons that have nothing to do with the money.',
          'Leaving home at 18 from a house where everything happened inside it is the hard version. Make it the easy version.',
        ],
        need: ['Nothing'],
      },
    ],
  },
];

/* THE THINGS THAT MATTER MORE THAN THE PLAN
   If a parent only reads one screen, it should be this one. */
export const LEARN_RULES = {
  title: '5 things worth more than any curriculum',
  items: [
    'Same order every day. The content can change daily, the order should not change for months. Children cope with what they can predict.',
    'Watch the child, not the clock. When a block stops working it is over, and the usual reason is that it was too long rather than that they were naughty.',
    'Under fives need about 3 hours of moving a day. Not a break from learning. At this age it is a large part of the learning.',
    'Talk far more than you think you need to, and then wait. The waiting after a question is where the language actually happens.',
    'Sitting down blocks are short at every age on this list. 15 to 20 minutes is a lot for a 4 year old and there is no prize for more.',
  ],
};

export const LEARN_AT_HOME = {
  title: 'If you are teaching at home',
  items: [
    'You are not replacing a daycare day. Most of a daycare day is care, food, sleep and the logistics of 20 children. The taught part is an hour or two.',
    '1 to 1 is enormously faster than 1 to 20. If you have covered the morning blocks by 11, you have not cut corners, you have finished.',
    'The bit that does not come free at home is other children. That has to be deliberately arranged, and it matters more than any worksheet.',
    'Keep one book where you write what you did each day, even a line. On the bad weeks it is the only evidence that you have been doing this, and you will need it.',
    'Home education is regulated differently in every state. Check what your state actually requires before you build a year around anything. Texas and Florida set no minimum hours at all. California expects you to match the school year. Alabama names a number of days and a number of hours.',
    'From about 14, start keeping the record as you go. A transcript reconstructed from memory in the spring of the final year is the commonest regret in home educating high school and it is entirely avoidable.',
  ],
};

/* HOW LONG A DAY ACTUALLY IS, BY AGE
   Printed because the commonest mistake a new home educating parent
   makes is trying to reproduce a six hour school day and concluding
   after 2 weeks that they cannot do this. */
export const LEARN_HOURS = {
  title: 'How long a day actually is',
  rows: [
    { band: '5 and under', hours: '1 to 2 hours' },
    { band: '6 to 8', hours: '2 to 2 and a half hours' },
    { band: '8 to 11', hours: '2 and a half to 3 and a half hours' },
    { band: '11 to 14', hours: '3 to 4 hours' },
    { band: '14 to 18', hours: '4 to 5 hours' },
  ],
  note: 'These are hours of actual work, not hours in a building. 1 to 1 is enormously faster than 1 '
    + 'to 25, and a school day is long because of the 25 rather than because of the learning.',
};

/* ------------------------------------------------------------------
   THE SUBJECTS
   Not lessons yet, which is honest. This is what each one is, when it
   genuinely starts, and what a parent should be doing about it now.
   The lessons themselves are the next piece of work.
   ------------------------------------------------------------------ */
export const LEARN_SUBJECTS = [
  {
    id: 'letters', label: 'Letters and sounds', startsMonths: 36,
    what: 'Recognizing letters, and knowing the sound each one makes, which is the part that matters for reading.',
    now: [
      'Start with the letters in their own name. Always.',
      'Teach the sound rather than the name. Buh, not bee. Sounding out a word does not work with letter names.',
      'One letter a week is fast enough. Find it in books, in the street, on packets.',
    ],
  },
  {
    id: 'writing', label: 'Writing', startsMonths: 42,
    what: 'Marks first, then their name, then letters, then words. The hand has to be ready before any of it.',
    now: [
      'Before pencils, do the things that build the hand. Tearing paper, pegs, squeezing sponges, playdough, threading.',
      'Their own name is the first real word, and usually the capital letter followed by small ones.',
      'Do not correct a young child’s spelling. Invented spelling is a stage, not an error.',
    ],
  },
  {
    id: 'numbers', label: 'Numbers', startsMonths: 24,
    what: 'Counting out loud is not the same as knowing how many. The second one is the real skill.',
    now: [
      'Count real objects and touch each one as you say it. This is the whole foundation.',
      'Ask how many after counting. A child who counts to 10 but cannot say how many there were is not counting yet.',
      'Numbers live in the kitchen. 3 spoons, 2 cups, one more.',
    ],
  },
  {
    id: 'colours', label: 'Colors', startsMonths: 18,
    what: 'Naming them, sorting by them, and then something more interesting than that.',
    now: [
      'Sorting comes before naming. Put all the red ones here, long before they can say red.',
      'Name the color of things you are already holding all day long.',
      'Mixing 2 colors to make a third is the first real science experiment most children do.',
    ],
  },
  {
    id: 'feelings', label: 'Colors and feelings', startsMonths: 36,
    what: 'Giving feelings a color gives a young child a handle on them before they have the words. It is a teaching device rather than a fact about colors, and it works.',
    now: [
      'Pick 4 feelings and give each one a color together. Let them choose which is which.',
      'Ask what color they are today, and answer it yourself first so it is not an interrogation.',
      'Name the feeling out loud when you see it, without fixing it. You are really cross. That is it.',
      'A feeling with a name is a feeling that can be talked about instead of thrown.',
    ],
  },
  {
    id: 'language', label: 'A second language', startsMonths: 0,
    what: 'There is no minimum age. From birth is fine, and 2 languages do not cause a speech delay.',
    now: [
      'A bilingual child hits the same milestones as any other child. Their words are split across 2 languages, so each one looks smaller until you add them together.',
      'Consistency beats fluency. 10 minutes at the same time every day does more than an hour on Sundays.',
      'You do not have to be fluent. Songs, counting and naming objects is a real start, and the accent you are worried about matters less than the exposure.',
      'Once school starts, English takes over fast. Families who keep the other language going usually protect a specific time for it, such as after school until bedtime.',
    ],
  },
  {
    id: 'music', label: 'Music and beat', startsMonths: 12,
    what: 'Clapping a rhythm is early reading in disguise, because hearing the parts of a word is the skill underneath it.',
    now: [
      'Clap their name in syllables. Het, tie, lee.',
      'Same songs over and over. Familiarity is what lets them join in.',
      'Loud and quiet, fast and slow, stop and go. Those 4 pairs are most of early music.',
    ],
  },
  {
    id: 'yoga', label: 'Yoga and calming', startsMonths: 30,
    what: 'Less about flexibility and more about a child learning that a body can be deliberately settled.',
    now: [
      'Animal poses with names, held while you count. 5 poses is a session.',
      'A soft toy on the tummy to watch the breath move it.',
      'Do it at the same point in the day so it becomes the signal rather than the treatment.',
    ],
  },
  {
    id: 'world', label: 'The world around them', startsMonths: 30,
    what: 'Weather, growing things, where food comes from, what happens when you mix or freeze or float something.',
    now: [
      'Grow one thing they can watch. Beans on cotton wool works in a week.',
      'Ask what do you think will happen before you do anything, and let a wrong answer stand.',
      'Weather every morning at the window is a science lesson that costs nothing.',
    ],
  },
];

/* ------------------------------------------------------------------
   SUPPLIES
   Deliberately short. The most common way a parent gives up on this is
   deciding they need to buy things first.
   ------------------------------------------------------------------ */
export const LEARN_SUPPLIES = {
  title: 'What you actually need',
  core: [
    'A low shelf they can reach, with 4 or 5 things on it, not 20.',
    'Trays. One activity per tray is the single trick that makes this work.',
    'Paper, chunky pencils, safety scissors, glue, sticky tape.',
    'Playdough, or flour and salt and oil to make it.',
    'A small jug, a small brush and dustpan, a cloth on a low hook.',
    'Books, low down, that they can get themselves.',
  ],
  laterOn: [
    'A whiteboard and pens, from about three.',
    'Lined paper and pencils that fit a small hand, from about four.',
    'Buttons, pasta or coins for counting, and a tape measure.',
    'A mat for the calm block.',
  ],
  freeStuff: [
    'Cardboard boxes, jar lids, clothespins, a muffin tin, dried pasta, a colander and pipe cleaners cover most of what a bought activity kit contains.',
    'The kitchen is the best sensory shelf in the house and everything on it is already paid for.',
  ],
};

/* ON THE KITS
   She wants to be able to send parents to a box they can order. That
   needs a supplier and it needs one we have actually checked, so this
   says plainly that it does not exist yet rather than linking to
   whatever comes up first. */
export const LEARN_KITS = {
  title: 'About buying a kit',
  body: [
    'There are boxes you can subscribe to that post you a month of activities with the bits included, and for some families that is the difference between doing this and not.',
    'We are not recommending one yet. A recommendation here would be us taking money to point you somewhere, and we would rather check a supplier properly first.',
    'In the meantime everything in this section can be done with what is already in your kitchen, and the list above says exactly what.',
  ],
};

export const LEARN_SOURCES = [
  { label: 'The daily routine, with published block lengths', org: 'HighScope', url: 'https://www.nj.gov/education/earlychildhood/preschool/docs/HighScopeDailyRoutine.pdf' },
  { label: 'Physical activity, sedentary behavior and sleep under five', org: 'World Health Organization', url: 'https://www.ncbi.nlm.nih.gov/books/NBK541169/' },
  { label: 'Dual language development', org: 'Zero to Three', url: 'https://www.zerotothree.org/resource/dual-language-development-double-the-benefit/' },
  { label: 'Promoting preschoolers\u2019 emergent writing', org: 'NAEYC', url: 'https://www.naeyc.org/resources/pubs/yc/nov2017/emergent-writing' },
  { label: 'Circle time, recommended length by age', org: 'Brightwheel', url: 'https://mybrightwheel.com/blog/circle-time' },
  { label: 'Homeschool hours by grade, and what states require', org: 'Outschool', url: 'https://outschool.com/homeschool/hours-by-grade' },
];

export function learnBandFor(months) {
  const m = Number(months);
  if (!isFinite(m)) return null;
  for (let i = 0; i < LEARN_BANDS.length; i++) {
    const b = LEARN_BANDS[i];
    if (m >= b.minMonths && m < b.maxMonths) return b;
  }
  /* Older than the last band still gets the last band rather than
     nothing, because a seven year old being home educated is a real
     person and an empty screen helps nobody. */
  if (m >= LEARN_BANDS[LEARN_BANDS.length - 1].maxMonths) return LEARN_BANDS[LEARN_BANDS.length - 1];
  return null;
}

export function learnBandById(id) {
  return LEARN_BANDS.filter((b) => b.id === id)[0] || null;
}

/* WHEN THE LEARNING TAB EXISTS
   From sixteen months, because that is where the first band starts,
   and it never goes away, because home educating parents keep going
   and the last band holds them. */
export function showsLearning(months) {
  return isFinite(Number(months)) && Number(months) >= 16;
}

export function subjectsFor(months) {
  const m = Number(months);
  if (!isFinite(m)) return [];
  return LEARN_SUBJECTS.filter((s) => m >= s.startsMonths);
}

export function blockKindLabel(id) {
  const k = LEARN_BLOCK_KINDS.filter((x) => x.id === id)[0];
  return k ? k.label : '';
}

export default LEARN_BANDS;

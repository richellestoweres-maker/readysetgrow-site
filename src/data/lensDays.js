/**
 * Ready Set Grow: Kinds Of Day, The Kit, And The Hard Moments
 * ------------------------------------------------------------------
 * Her ask, and it is the most practical thing in the app:
 *
 *   "for those who have ADHD they may need guidance on how to handle
 *   different days as they may all look different for any diagnoses.
 *   Some days someone with ADHD may need to add in some PE or give
 *   some suggestions of things that help with school or homeschool
 *   like stretch bands at the bottoms of chairs and maybe some sensory
 *   items and we need this reassurance, teaching, and guidance for
 *   every diagnoses so parents can know how to handle certain
 *   situations."
 *
 * WHAT WAS MISSING. The app could tell a parent how a day should be
 * shaped for their child in general. It could not tell them that today
 * is not that day. A child is not the same on a Tuesday after a bad
 * night as they are on a morning when everything is landing, and a
 * parent running the same plan through both is the parent who ends up
 * believing they are failing at it.
 *
 * SO EACH LENS CARRIES 4 THINGS:
 *   days      3 or 4 named kinds of day, written so a parent knows
 *             which one it is by breakfast, with what to change and
 *             one sentence to say out loud. Movement is specified with
 *             real numbers, because "add some movement" is not
 *             actionable at 8am.
 *   kit       the physical things, in 3 tiers, so a family with no
 *             money gets the useful half. Free first, on purpose.
 *   moments   the specific situations, what is actually happening
 *             underneath, what to do, and the one thing a reasonable
 *             parent does that makes it worse.
 *   reassure  written for the guilt this particular lens produces,
 *             rather than a general note that parenting is hard.
 *
 * ON THE EVIDENCE, WHICH IS THE PART THAT TOOK THE ARGUING.
 * Much of what is sold for these children is marketed far harder than
 * the research supports. A controlled study found weighted vests and
 * ball seating did not improve attention or work completed. The AAP
 * calls the evidence for sensory integration therapy limited and
 * inconclusive. Colored overlays are not a dyslexia treatment.
 *
 * All of that is said plainly here, and so is the other true thing: a
 * child who is calmer with earmuffs on is calmer with earmuffs on,
 * and a 5 dollar band across a chair leg is cheap enough to try
 * whatever the literature says. This page never tells a parent that
 * their child's comfort does not count. It tells them which things to
 * spend real money on, and an occupational therapy assessment is
 * usually the answer rather than the gear.
 *
 * SAFETY IS NOT OPTIONAL HERE. Weighted items never for sleep, never
 * heavy enough to restrict movement, nothing around a neck. Chewables
 * carry a choking risk and are inspected and thrown out at the first
 * tear. Where something needs a clinician, it says so rather than
 * being written as a home project.
 */

export const DAYS_BY_LENS = {
  adhd: {
    days: [
      {
        name: 'Nothing is landing today',
        looks: 'By 9:30 you have said the same sentence 4 times and the socks are still not on. They '
          + 'are in the room, they are not unkind, and nothing you say seems to reach the part of '
          + 'them that acts.',
        do: [
          'Cut the morning list to 3 things. Say those 3 out loud in order, write them on an '
            + 'index card, and stop adding.',
          'Put a movement block FIRST, before any seated work. 20 minutes, hard enough that '
            + 'they are breathing fast: laps of the yard, 10 trips up and down the stairs, bike, '
            + 'trampoline, music on loud and dance. Rhythmic and physical beats fun and fiddly.',
          'Come straight back to the hardest subject for 12 minutes only, with a timer they '
            + 'can see.',
          'Then alternate 12 minutes of work and 4 minutes of movement for the rest of the '
            + 'morning. Do not try to stretch the 12 minutes today.',
          'Drop one subject on purpose and tell them which one, so the day has a finish line '
            + 'they can see.',
        ],
        say: '"Your brain is not coming to the table this morning, so we are going to move first '
          + 'and work in short pieces. That is allowed."',
      },
      {
        name: 'They are flying, get out of the way',
        looks: 'They sat down and started something without being asked, and 40 minutes have gone by '
          + 'without you in the room. If you interrupt, you get snapped at.',
        do: [
          'Do not interrupt to get the subjects back in order. Let the thing run. A day of '
            + 'real momentum is worth more than a tidy checklist.',
          'Slide water and a snack next to their hand without talking. They will not notice '
            + 'hunger while they are in it.',
          'Protect the ending. Warn once at 10 minutes left, again at 2 minutes, and let them '
            + 'save or photograph where they got to.',
          'Bank it. Ask which 2 things they want to skip tomorrow, because today paid for '
            + 'them.',
          'Expect a crash about 90 minutes after the thing ends, and keep the rest of the day '
            + 'soft.',
        ],
        say: '"You are in it. I am staying out. Water is by your left hand."',
      },
      {
        name: 'The day after a short night',
        looks: 'They were up late or awake at 5. By breakfast they are either slumped and slow or '
          + 'louder and more physical than usual. Short sleep often shows up as more motor, not '
          + 'less, so a wired morning can mean a tired child.',
        do: [
          'Get outside for 15 minutes right after breakfast, walking or moving. Light and '
            + 'movement do more for a tired brain than another reminder does.',
          'Move the hardest thinking as early as you can. Whatever is left at 2pm will not '
            + 'happen today.',
          'Cut the written output in half. Let them answer out loud while you write, so the '
            + 'thinking still counts.',
          'Review and practice only. No new material on a short night.',
          'Start the wind down 45 minutes earlier tonight and hold it even if they insist '
            + 'they are not tired.',
        ],
        say: '"We are running on less today, so we are doing less. That is the plan, not a '
          + 'failure."',
      },
      {
        name: 'The day after something big',
        looks: 'Yesterday was a birthday party, a competition, a trip, a first day. This morning '
          + 'they seem fine, and then they come apart over a pencil.',
        do: [
          'Expect the crash and give it somewhere to happen. One hour of nothing after '
            + 'breakfast, screens off if you can manage it, just being in the house.',
          'Half a day of school work, and choose which half before anyone is awake so it is '
            + 'not a negotiation.',
          'One physical thing outdoors, 20 to 30 minutes, steady rather than competitive. No '
            + 'scoring today.',
          'Feed them early and more than usual. Big days usually mean they barely ate.',
          'No conversation today about how yesterday went, good or bad.',
        ],
        say: '"Yesterday was a lot, even though it was fun. Today is a small day on purpose."',
      },
    ],
    kit: {
      free: [
        'A kitchen timer or phone timer set where they can SEE the numbers counting down, '
          + 'because seeing time pass is the whole point',
        'Standing at the kitchen counter for written work instead of sitting, which many '
          + 'children will keep doing far longer than they will sit',
        'A rolled bath towel or a stack of books under the desk to press their feet into',
        'An index card with today\'s 3 tasks, one line each, crossed off with a marker so the '
          + 'progress is physical',
        'A basket of socks to fold or a jar of coins to sort for the 4 minutes between work '
          + 'chunks, so the break has an end built into it',
        'Read alouds done while they walk laps of the room or bounce on couch cushions on the '
          + 'floor',
      ],
      cheap: [
        'A resistance band tied across the front chair legs to push and bounce their feet '
          + 'against. Often helps, thin formal evidence, quiet and cheap enough to try',
        'A visual countdown timer with a colored disk that shrinks, so time is a thing they '
          + 'can see instead of a number they have to imagine',
        'Noise reducing earmuffs, the kind sold for yard work, which cost a fraction of '
          + 'headphones and work well in a loud house',
        'Erasable pens or a small dry erase board, because a mistake that wipes clean stops '
          + 'the tear it up and start over spiral',
        'A cheap stopwatch for racing themselves through the boring task, which turns dread '
          + 'into a game for about 3 weeks at a time',
        'A clipboard, so the work can go to the floor, the porch, or the couch without moving '
          + 'the whole desk',
      ],
      worth_it: [
        'A wobble stool, a ball chair, or a weighted vest. Here is the honest version: a '
          + 'controlled study of elementary students with ADHD found that stability balls and '
          + 'weighted vests did not improve attention, on task behavior, or work completed, while '
          + 'behavior supports did. If your child likes one, use it as comfort, not as the plan. '
          + 'Any weighted item should be light enough that they move freely, removable by them, '
          + 'and never used for sleep.',
        'A standing desk or a riser that puts a laptop at standing height. This is the one '
          + 'that genuinely helps a child who cannot stay in a chair, because it stops moving and '
          + 'working from competing with each other.',
        'Over the ear noise canceling headphones. Worth it for a child who does school work '
          + 'in a house that has other people in it.',
        'A watch that vibrates on a timer. Helps a child who needs the reminder without you '
          + 'being the reminder, which quietly removes a dozen arguments a week.',
      ],
    },
    moments: [
      {
        when: 'They have been staring at the same page for 20 minutes',
        why: 'Getting started is a different job for the brain than doing. For a lot of children '
          + 'with attention differences, starting stalls when a task feels shapeless, and sitting '
          + 'still in front of it looks like working. Every extra minute adds a layer of '
          + 'embarrassment, which makes starting harder, not easier.',
        do: [
          'Do the first line for them, out loud, and write it down. Starting is the hurdle, '
            + 'not the work.',
          'Shrink the target and say the smaller number out loud: "Just number 1. Not the '
            + 'page."',
          'Set a visible 8 minute timer and leave the room. Your face in the doorway becomes '
            + 'something to perform for.',
          'If nothing has moved in 8 minutes, change the output instead of pushing. They '
            + 'talk, you write. Or they answer standing up.',
        ],
        avoid: 'Asking "do you understand it?" again and again. They usually do. The question turns '
          + 'a starting problem into a comprehension interview, and now they have to defend '
          + 'themselves before they can begin.',
      },
      {
        when: 'I asked for one thing and got an explosion',
        why: 'The request usually landed in the middle of something they were already using all of '
          + 'their effort to hold on to. The size of the reaction is about the switch, not about '
          + 'the shoes. Stopping a task midstream costs a lot more for some brains than it does '
          + 'for yours.',
        do: [
          'Stop talking. Do not stack a second instruction on top of the first one.',
          'Give a landing strip: "Finish that line, then shoes."',
          'Wait 60 seconds and actually count them. Most of the time the shoes happen inside '
            + 'that minute.',
          'If it is still escalating, drop the request completely and come back in 10 '
            + 'minutes. Nothing real is lost.',
        ],
        avoid: 'Repeating the instruction louder while they are already over the edge. To them it '
          + 'reads as pressure rather than information, and volume is the one ingredient that '
          + 'reliably makes this worse.',
      },
      {
        when: 'It is 4pm and almost none of the work got done',
        why: 'Most days like this were decided by 10am. What usually happened is that the effort '
          + 'went into transitions, arguments, and restarting rather than into the work itself, '
          + 'so everybody is tired out and nothing is finished. That is a fuel problem, not a '
          + 'character problem.',
        do: [
          'Pick the 1 thing that actually matters if only 1 thing happens, and say what it is '
            + 'out loud.',
          'Do that 1 thing in a new location, standing or on the floor, with a 15 minute '
            + 'timer.',
          'Stop at the timer whether it is finished or not, and write on the top of the page '
            + 'what was completed.',
          'Close the day deliberately with something they are good at, so the last memory of '
            + 'the day is not failure.',
        ],
        avoid: 'Making up the lost hours by working through dinner. It buys you 1 worksheet and '
          + 'costs you tomorrow, because a child who learns that a slow day means a stolen '
          + 'evening will fight the morning even harder.',
      },
      {
        when: 'They lose their homework, their shoes, and their water bottle every single day',
        why: 'Things that are out of sight are genuinely out of mind. Holding a plan for later '
          + 'while doing something now leans on working memory, which is often the exact thing '
          + 'that is in short supply. This is not a caring problem, and no amount of caring more '
          + 'will fix it.',
        do: [
          'Make 1 landing zone by the door, the same square foot every day, and nothing else '
            + 'is allowed to live there.',
          'Pack the bag the night before, attached to something that already happens, such as '
            + 'right after teeth.',
          'Take a photo of the fully packed bag and tape it by the door, so checking is a '
            + 'matching game instead of a memory test.',
          'Keep duplicates of the cheap things. Two water bottles is cheaper than 20 '
            + 'arguments.',
        ],
        avoid: 'Asking "how do you lose it every day?" It is a real question with no answer they can '
          + 'give you, so all it does is teach them that they are the kind of person who loses '
          + 'things.',
      },
      {
        when: 'They can focus for 5 hours on a video game and 5 minutes on math',
        why: 'Attention follows interest, novelty, and fast feedback much more than it follows '
          + 'importance. A game answers every few seconds. A worksheet answers tomorrow. The game '
          + 'is not proof that they could focus on math if they wanted to badly enough.',
        do: [
          'Add feedback. Check every 2 questions instead of at the end, so there is a result '
            + 'while they are still in the task.',
          'Add novelty. New pen, new room, read the problem in a ridiculous voice.',
          'Add an end they can see: "6 problems, then done," and stick to the 6 even if it '
            + 'goes well.',
          'Add motion. Say facts while bouncing a ball, or walk the room between problems.',
        ],
        avoid: 'Using the game as evidence in an argument. "You can focus when you want to" lands as '
          + 'an accusation of lying, and it ends the conversation you were trying to have.',
      },
    ],
    reassure: [
      'You feel like you have become the nag. You hear your own voice saying the same '
        + 'sentence for the fourth time and you hate it, and then you feel guilty for being '
        + 'irritated at a child who is not doing it on purpose. Here is the part nobody says: the '
        + 'repeating is not a sign that you are doing it wrong. Instructions that need saying '
        + 'twice are simply the cost of this wiring, and the cost is real. What actually lowers '
        + 'it is not more patience from you. It is fewer instructions, shorter ones, and systems '
        + 'that do the reminding so that you do not have to be the alarm clock with feelings.',
      'The other guilt is the opposite one, and a lot of parents carry both in the same day. '
        + 'Am I making excuses. Would they just rise to it if I stopped bending. So here is the '
        + 'line that matters: an accommodation changes how the work gets done, not whether it '
        + 'gets done. Letting them answer standing up, out loud, in 12 minute pieces, is not a '
        + 'lower standard. Ten problems is still 10 problems. You lowered the barrier to entry, '
        + 'not the bar. If you find yourself dropping the actual expectation, that is worth '
        + 'noticing. Changing the route to it never was.',
      'And then there are the good days, the ones where they are organized and funny and '
        + 'everything works, and you think, there it is, we have turned a corner. Then Thursday '
        + 'happens and you are back where you started, and it feels like a backslide or like you '
        + 'imagined the whole thing. You did not imagine it. Days like this vary far more than '
        + 'other children\'s days do, and the good ones are not a promise that got broken. They '
        + 'are proof of what is in there. The skill you are building is not consistency, because '
        + 'that is not on offer this year. It is knowing by 9:30 which kind of day you are in, '
        + 'and running that day instead of the one you planned.',
    ],
  },
  executiveFunction: {
    days: [
      {
        name: 'The launch pad is stuck',
        looks: 'They are dressed, fed, sitting at the table, and 40 minutes have gone by with '
          + 'nothing on paper. Ask what they are working on and they genuinely do not know where '
          + 'the first step is.',
        do: [
          'Sit down at the same table and do your own work next to them for the first 20 '
            + 'minutes. Working alongside somebody is the most reliable free tool for this, and '
            + 'it does not require you to say anything.',
          'Write the first step in their handwriting or yours. Not the plan, the actual first '
            + 'physical action, such as "open the book to page 44 and copy the question."',
          'Break the day into 3 blocks on paper with a start time next to each one, and put '
            + 'it where they can see it.',
          'Move for 10 minutes before the first block. Walk, stairs, anything that gets them '
            + 'out of the chair they are stuck to.',
          'Start with the second easiest thing, not the hardest. The goal today is momentum, '
            + 'and momentum needs a win first.',
        ],
        say: '"You are not being lazy, you are stuck at the start. I will do the first step with '
          + 'you."',
      },
      {
        name: 'Everything is half finished',
        looks: 'Three projects are open on the table and none of them is done. They keep drifting to '
          + 'the next interesting thing. The room looks like a map of places they started.',
        do: [
          'Pick 1 and physically remove the other 2 from the table. Not tidied, removed, into '
            + 'another room.',
          'Say what done looks like in 1 sentence before they start, and write it on a sticky '
            + 'note on the page. Unfinished work is often work that never had a definition of '
            + 'finished.',
          'Set a timer for the finish, not for the work: "15 minutes to get this one to '
            + 'done."',
          'No new start until 1 thing is finished, and mean it gently.',
          'Make a loud deal out of the finish. Finishing is the skill you are building today, '
            + 'so it is the thing that gets noticed.',
        ],
        say: '"One thing, all the way to done. Then we pick the next one together."',
      },
      {
        name: 'The day the plan collapsed',
        looks: 'Something moved. A class was canceled, an appointment shifted, a friend bailed. The '
          + 'whole day fell apart in a way that looks wildly out of proportion to the size of the '
          + 'change.',
        do: [
          'Write the new order down on paper immediately. A plan that only exists in '
            + 'conversation does not count, because holding it is the exact thing that is hard.',
          'Name out loud the 2 things that did NOT change. Certainty is the thing that got '
            + 'taken away, so hand some back.',
          'Take 15 minutes outside before restarting anything.',
          'Remove 1 item from the day. A day that got rearranged cannot also be a full day.',
          'End with something completely predictable, the same show or the same walk, so the '
            + 'day closes on solid ground.',
        ],
        say: '"The plan changed. Here is the new one, written down. Two things are exactly the '
          + 'same as before: dinner and bedtime."',
      },
      {
        name: 'The night before something big is due',
        looks: 'You just found out there is a long assignment due tomorrow that you thought was '
          + 'handled weeks ago. They either panic or go oddly calm and insist it is fine.',
        do: [
          'Do not start with the lecture. There is not time for both the lecture and the '
            + 'assignment, and only 1 of them is due tomorrow.',
          'Work backward from a hard stop time you set out loud, such as 8:30, and say '
            + 'plainly that you are aiming for honest and turned in rather than good.',
          'Take over every part that is not thinking. You can be the typist, the page number '
            + 'finder, the one who prints it. That is not cheating, that is scaffolding.',
          'Sit in the room the entire time. Leaving is when the work stops.',
          'Save the whole conversation about how this happened for a walk in 2 days, when '
            + 'nobody is scared.',
        ],
        say: '"We are going to turn in something honest, not something perfect. I am sitting right '
          + 'here until it is done."',
      },
    ],
    kit: {
      free: [
        'An index card with the next 3 steps on it, one line each. Not the week, the next 3 '
          + 'steps',
        'You, sitting at the same table doing your own work. Working beside somebody costs '
          + 'nothing and is the single most reliable item on this whole list',
        'A done pile and a not done pile, physically separate, so progress is something you '
          + 'can see from across the room',
        'A sticky note on the laptop with only the next action written on it, replaced each '
          + 'time it is finished',
        'A photo of what the correctly packed bag looks like, taped where the bag gets packed',
        'The plan said out loud into a phone voice memo, so they can play back their own '
          + 'instructions instead of trying to remember them',
      ],
      cheap: [
        'An analog clock with a real face where they work. A digital clock tells you the '
          + 'time, a face shows you how much is left',
        'A visual disk timer for work blocks, because a shrinking color is easier to feel '
          + 'than a number',
        'A paper wall calendar big enough to see the whole month at once, so due dates stop '
          + 'being invisible until the night before',
        'A 3 drawer plastic tray, one drawer per subject, so putting it away is a decision '
          + 'that is already made',
        'Clear document pockets, one per subject or project, so a subject becomes 1 object '
          + 'that can be found',
        'Colored dot stickers for a done chart on the wall. Cheap, slightly babyish, and '
          + 'surprisingly effective well past the age you would expect',
      ],
      worth_it: [
        'A home printer. Sounds unglamorous. It helps enormously, because a child who '
          + 'struggles to plan does far better with the whole thing on paper in front of them '
          + 'than with 6 browser tabs.',
        'A large wall whiteboard, 3 feet or bigger. This is the one that helps a child who '
          + 'cannot hold a plan in their head, because the plan stops living in their head.',
        'A watch that vibrates on a schedule. It helps most for the child who is fine once '
          + 'started but loses track of time completely, and it transfers the nagging job from '
          + 'you to a device.',
        'A tutor or coach whose actual job is planning and organizing rather than the subject '
          + 'content. Worth it for the middle and high school years, where the volume of tracking '
          + 'outgrows what a parent can do without becoming the enemy.',
      ],
    },
    moments: [
      {
        when: 'They said they had no homework and they did',
        why: 'Most of the time this is not a lie. To report homework accurately, you have to '
          + 'notice it being assigned, understand it as a future obligation, hold it through 5 '
          + 'more hours of school, and retrieve it when asked. Any 1 of those links breaking '
          + 'gives you a child who honestly believes there is nothing.',
        do: [
          'Take the accusation out of your voice first. If they think they are in trouble, '
            + 'the conversation becomes a defense instead of a fix.',
          'Go look at the actual source together, the online portal or the folder, rather '
            + 'than asking them to search their memory again.',
          'Build 1 checking habit that does not rely on them remembering: same time, same '
            + 'place, every school day, done with you for the first few weeks.',
          'Write down whose job each part is for the next month, out loud and on paper, so it '
            + 'is not renegotiated every night.',
        ],
        avoid: 'Making the consequence about honesty. Punishing a memory failure as a lie teaches '
          + 'them to hide the whole subject from you, and you have just lost the only visibility '
          + 'you had.',
      },
      {
        when: 'They have been getting ready for 45 minutes and are still not ready',
        why: 'Getting ready is not 1 task, it is roughly 9 of them held in the right order with '
          + 'time awareness running in the background. That is a lot of separate operations, and '
          + 'the usual failure is not slowness, it is losing the thread halfway and getting '
          + 'absorbed in something in the bedroom.',
        do: [
          'Go and look. Do not shout up the stairs again. You will usually find them holding '
            + '1 sock and reading a book.',
          'Name the very next physical action, 1 only, then leave the doorway.',
          'Put a list of the steps on the wall where they get ready, with pictures for a '
            + 'younger child, and point at it rather than reciting it.',
          'Move 2 steps to the night before, permanently. Clothes out and bag by the door '
            + 'removes a third of the morning.',
        ],
        avoid: 'Adding a consequence in the last 5 minutes. Time pressure plus a threat floods a '
          + 'child who was already losing track, and now you are managing tears in the car as '
          + 'well as being late.',
      },
      {
        when: 'The room is a disaster and asking them to clean it makes them cry',
        why: 'A whole messy room presents hundreds of undecided decisions at once, with no obvious '
          + 'first move and no visible end. For a child who struggles to break things down, that '
          + 'is not laziness, it is genuinely paralyzing, and the crying is what overwhelm looks '
          + 'like from outside.',
        do: [
          'Name 1 category, not the room: "Only the laundry. Nothing else."',
          'Bring a basket or a bag, because a container turns sorting into putting.',
          'Set 12 minutes and work in there with them for those 12 minutes.',
          'Stop at the timer even if it is not finished, and say what got done. A room '
            + 'cleaned in 4 short visits stays cleaner than a room cleaned once in tears.',
        ],
        avoid: 'Standing in the doorway listing everything that is wrong with the room. You mean it '
          + 'as instructions. It arrives as a pile of impossible, and it is the most common way '
          + 'this ends in a shutdown.',
      },
      {
        when: 'They wrote 1 paragraph in 2 hours',
        why: 'Writing asks a brain to generate ideas, put them in order, hold the sentence while '
          + 'producing letters, and monitor quality, all at once. When any of those is effortful, '
          + 'they collide, and the usual result is a child who freezes, rewrites the first '
          + 'sentence 9 times, and produces almost nothing.',
        do: [
          'Split the jobs. First they talk, you write down what they say, with no editing '
            + 'allowed from either of you.',
          'Then put the pieces in order together, out loud, numbering them on the page.',
          'Then they write from that, knowing the thinking is already finished.',
          'Cap the time and say the cap out loud in advance, so the work stops before they '
            + 'do.',
        ],
        avoid: 'Suggesting improvements while they are still generating. Editing in the same breath '
          + 'as producing shuts down the production, and you both end up with a better first '
          + 'sentence and no paragraph.',
      },
      {
        when: 'They forgot the thing we talked about 10 minutes ago',
        why: 'A spoken instruction has to be held actively, and anything in between can knock it '
          + 'loose. It is not a comment on how much they care about you. Once it slips there is '
          + 'often no trace of it at all, which is why they can look honestly blank.',
        do: [
          'Move it out of the air. Write it, text it, put it on the whiteboard, or tie it to '
            + 'an existing habit.',
          'Ask them to say it back once, in their own words, before you walk away.',
          'Attach it to a landmark instead of a time: "after you put your plate in the sink," '
            + 'not "in a little while."',
          'Expect to do this for years and build it into the house, rather than treating each '
            + 'instance as an incident.',
        ],
        avoid: '"I just told you." It is true, and it changes nothing, and what it teaches is that '
          + 'they are unreliable. Save your energy for moving the instruction somewhere it cannot '
          + 'fall out.',
      },
    ],
    reassure: [
      'The guilt here has a very specific shape: you feel like you have become their external '
        + 'brain, and you are quietly terrified that you are making them helpless. You reminded '
        + 'them about the form, so they never learned to remember the form. You sat with them, so '
        + 'now they cannot work alone. Every time you help, a voice asks what happens when you '
        + 'are not there.',
      'Here is what is actually true about how this develops. These skills come in slowly and '
        + 'keep developing into the twenties, and they come in by being done with somebody else '
        + 'first and then handed over. A child does not learn to plan by being left to fail at '
        + 'planning. They learn it the way they learned to cross a road, with you holding the '
        + 'hand, then walking a step behind, then watching from the corner. Sitting at the table '
        + 'while they work is not doing it for them. It is the step before they do it alone, and '
        + 'skipping it does not speed anything up.',
      'You are also probably tired of hearing how smart they are. People say it kindly and it '
        + 'lands as an accusation, because the gap between what they can think and what they can '
        + 'hand in is the thing you live inside. That gap is real, it is not about effort or '
        + 'attitude, and it closes unevenly over years rather than in a semester. Your job this '
        + 'year is not to close it. It is to build enough outside structure that their actual '
        + 'thinking gets to count, and to keep your relationship intact while you do it, because '
        + 'that relationship is the thing they will still need at 22 when the structure is theirs '
        + 'to build.',
    ],
  },
  gifted: {
    days: [
      {
        name: 'The work is beneath them and they have checked out',
        looks: 'They finish in 4 minutes, then go silly, or refuse, or rush it into a mess. The eye '
          + 'rolling starts at breakfast when you name the subject.',
        do: [
          'Let them show you once and then skip the rest. If they can do 3 problems '
            + 'correctly, the other 17 teach nothing except that effort is punished with more of '
            + 'it.',
          'Go deeper instead of longer. Same topic, harder question, one that you do not '
            + 'already know the answer to.',
          'Hand them a real problem with a real use: measure something in the house and work '
            + 'out whether the couch fits, calculate the grocery bill before the register does.',
          'Put the boring necessary practice, such as handwriting or times tables, in a short '
            + 'fixed block, 10 minutes, at the same time each day, so it stops being a fight '
            + 'about the whole subject.',
          'Add 20 minutes of physical activity somewhere in the morning. A bored child who is '
            + 'also under moved is a much harder child by lunch.',
        ],
        say: '"You already know this. Show me once and we will skip the other 19."',
      },
      {
        name: 'Big mind, young body',
        looks: 'They read something about a war at breakfast and asked a question you could not '
          + 'answer, then fell apart at 9 over a seam in a sock. They argued a point like a '
          + 'lawyer and then needed the sandwich cut a certain way.',
        do: [
          'Answer the big question honestly and briefly. Do not talk down and do not hand '
            + 'them everything you know.',
          'Then handle the sock at the age they actually are. Both of these children are real '
            + 'and both live in your house.',
          'Keep the physical routine matched to their years, not to their vocabulary. Same '
            + 'bedtime, same snacks, same amount of your lap as any child that age.',
          'Put 1 noncompetitive physical thing in the day, 30 minutes, where nobody is being '
            + 'measured.',
          'Say out loud, once, that minds and bodies do not grow at the same speed. Children '
            + 'often find that enormously relieving to hear.',
        ],
        say: '"Your thinking is running ahead of the rest of you right now, and that is '
          + 'uncomfortable. Both parts of you get taken care of here."',
      },
      {
        name: 'The perfectionism day',
        looks: 'Paper crumpled before the second line. "I cannot do it" before they have started. '
          + 'Tears over a smudge. A flat refusal to try anything unfamiliar.',
        do: [
          'Do something badly in front of them, on purpose, and narrate it: draw the terrible '
            + 'horse, sing the wrong note, and keep going anyway.',
          'Take the grade off the table out loud for today. Say plainly that nothing being '
            + 'done this morning is being judged.',
          'Require a rough version. Not allowed to be good. If it comes out good, they do it '
            + 'again worse. This sounds silly and it works.',
          'Timebox it. 15 minutes, then it is done regardless of quality, so that stopping is '
            + 'not their decision to agonize over.',
          'Do 1 thing together that they are genuinely bad at and you are too. Bowling, a new '
            + 'instrument, a language neither of you speaks.',
        ],
        say: '"I am going to do this badly right in front of you, and we are both going to survive '
          + 'it."',
      },
      {
        name: 'The big question day',
        looks: 'They are stuck on death, or infinity, or why people are cruel. They cannot be '
          + 'jollied out of it, they follow you around with it, and it is starting to affect '
          + 'sleep.',
        do: [
          'Do not deflect it or promise them it is fine. They will hear the dodge and '
            + 'conclude it is worse than they thought.',
          'Answer at their reading level, admit what nobody knows, and then look up 1 real '
            + 'fact together so the question has somewhere to go.',
          'Put a boundary on it out loud: 20 minutes of thinking about it with you, then '
            + 'something physical outdoors. Contained, not dismissed.',
          'Give them a channel, such as writing it down, a letter, drawing it, or a small '
            + 'useful action related to it.',
          'Protect the night. Big questions get much bigger in a dark bedroom, so bring the '
            + 'wind down earlier and stay longer than usual.',
        ],
        say: '"That is a real question and grownups have not solved it either. I will think about '
          + 'it with you for 20 minutes, and then we are going outside."',
      },
    ],
    kit: {
      free: [
        'A library card, used hard, including the sections above their grade',
        'A blank notebook that is entirely theirs, that nobody grades and nobody reads '
          + 'without asking',
        'A hard question written on an index card at breakfast, with no requirement to answer '
          + 'it today',
        'The adult level book they want, read alongside you rather than handed over, so the '
          + 'difficult parts have somewhere to land',
        'A rough draft pile that is never judged, kept separate from finished work, so a bad '
          + 'start has a legitimate home',
        'Kitchen science with what is already in the cupboard, and the household jobs that '
          + 'involve real measuring, real money, and real consequences',
      ],
      cheap: [
        'A graph paper notebook, which suits the child who wants to build, diagram, and plan '
          + 'more than they want to write in lines',
        'A tape measure, a kitchen scale, and a thermometer, so questions can be settled with '
          + 'data instead of with your opinion',
        'Secondhand textbooks 1 or 2 grades up, which is the cheapest way to raise the '
          + 'ceiling without changing schools',
        'A logic puzzle book or a chess set from a thrift store, for the child who needs '
          + 'somewhere legitimate to put the wanting to win',
        'A dry erase board for thinking out loud, because a child who fears mistakes writes '
          + 'much more freely on something erasable',
        'A visual timer, used for the perfectionism timebox rather than for speed',
      ],
      worth_it: [
        'A library or museum membership, the kind you use monthly. Cheaper than most '
          + 'subscriptions and it helps most for the child whose real problem is that home has '
          + 'run out of new.',
        'A class in 1 subject at the right level, online or local, even 1 hour a week. This '
          + 'is the item that helps most, because the thing that is missing is usually correctly '
          + 'leveled work and somebody who is not you to be stretched by.',
        'Contact with true peers, which sometimes costs money, such as a club, camp, or '
          + 'interest group. A child who has never met anybody who thinks like them often '
          + 'concludes that something is wrong with them, and 1 weekend can undo years of that.',
        'A real instrument or a real tool rather than the toy version, for the child who has '
          + 'outgrown pretending. Honest note: no product on this list will make a bright child '
          + 'happier. Matched work and matched company will.',
      ],
    },
    moments: [
      {
        when: 'They can explain it perfectly out loud and refuse to write a word of it',
        why: 'A gap this wide between speaking and writing is worth taking seriously rather than '
          + 'treating as stubbornness. Handwriting, spelling, or organizing can be effortful in a '
          + 'child whose thinking is well ahead, and when producing costs that much, refusing is '
          + 'the rational choice. Being bright and having a learning difference together is '
          + 'common, and it is often missed precisely because the child compensates so well.',
        do: [
          'Separate the thinking from the writing today. They talk, you write, and the ideas '
            + 'still count as theirs.',
          'Watch the hand, not just the page. Pain, a tight grip, unusual letter formation, '
            + 'or exhaustion after 4 lines are information.',
          'Write down what you are seeing over 2 weeks, with dates and examples.',
          'Ask for an evaluation through the school or a psychologist. A gap between '
            + 'reasoning and output is exactly what an assessment is for, and this is not '
            + 'something to figure out from the internet.',
        ],
        avoid: 'Turning it into a discipline issue because you know they are capable. The capability '
          + 'is real and so is the bottleneck, and pushing harder on output hides the thing that '
          + 'would have explained everything.',
      },
      {
        when: 'They got 1 question wrong and the whole day is over',
        why: 'When a child\'s sense of who they are is built on being the one who knows things, a '
          + 'wrong answer is not a small error. It is evidence against their identity. The '
          + 'reaction is enormous because the stakes feel enormous, not because they are being '
          + 'dramatic.',
        do: [
          'Do not minimize it or point out that it is only 1 question. That is true and it '
            + 'will not reach them yet.',
          'Name the real fear out loud: "You are scared that being wrong means you are not '
            + 'smart."',
          'Wait. Nothing teachable lands until the body has come down, which usually takes 20 '
            + 'minutes or more.',
          'Later, tell them about something you were wrong about this week and what happened '
            + 'afterward, which was nothing.',
        ],
        avoid: 'Reassuring them by reminding them how smart they are. It is meant kindly, and it '
          + 'tightens the exact trap, because now the good opinion depends on continuing to be '
          + 'right.',
      },
      {
        when: 'They say they are stupid, and they are the sharpest child in the room',
        why: 'Bright children measure themselves against what they can imagine rather than against '
          + 'their peers, and what they can imagine is very good. So the gap they feel is between '
          + 'their own work and the perfect version in their head. It has nothing to do with the '
          + 'class and cannot be argued away with comparisons.',
        do: [
          'Take the statement seriously instead of contradicting it. "Tell me what happened '
            + 'that made you feel that."',
          'Shift the ground from smart to specific: what was hard, which part, what would '
            + 'help.',
          'Give them a genuine skill to build where they are currently a beginner, so they '
            + 'get regular practice at being bad at something and surviving it.',
          'If they talk like this often, or it comes with hopelessness, take it to their '
            + 'doctor or a therapist. Talent does not protect a child from depression or anxiety, '
            + 'and nobody should read that pattern alone.',
        ],
        avoid: 'Listing their achievements back at them. It answers a question they did not ask and '
          + 'it tells them that the subject is closed.',
      },
      {
        when: 'They will not try anything they might not be immediately good at',
        why: 'If praise has mostly arrived for being fast and correct, then anything unfamiliar is '
          + 'a threat to the only currency they have. Avoiding it is protective. This narrows '
          + 'fast, and by the teen years it can shrink a child\'s life to the 3 things they know '
          + 'they can win at.',
        do: [
          'Choose activities where nobody can be good at first, and go in as a pair so they '
            + 'are not the only beginner.',
          'Praise the specific process out loud, such as sticking with it, trying a second '
            + 'way, or asking for help, and stop praising speed.',
          'Let them see you keep doing something you are mediocre at, cheerfully, for months.',
          'Keep the first attempts completely private if that is what it takes. An audience '
            + 'is often the whole objection.',
        ],
        avoid: 'Signing them up for the competitive version to build confidence. It confirms the '
          + 'fear rather than curing it, because now being bad at it is public and scored.',
      },
      {
        when: 'They correct adults and it is making people dislike them',
        why: 'Two things are usually happening at once: they genuinely know the fact, and they '
          + 'have not yet learned that being right and being welcome are separate skills. Social '
          + 'reading often lags behind reasoning, so they are not being arrogant so much as '
          + 'operating without the information other children already have.',
        do: [
          'Teach it as a skill, not a moral failing. "Being right and being kind are two '
            + 'different jobs and you can do both."',
          'Give them the actual words, such as "I read something different, can I show you '
            + 'later?"',
          'Practice it privately, in the car, with you playing the adult.',
          'Give them 1 place where correcting is allowed and welcome, such as a club or with '
            + 'you at dinner, so the impulse has a legal home.',
        ],
        avoid: 'Correcting them about it in front of the person. You are modeling the exact behavior '
          + 'you are asking them to stop, and the humiliation will be what they remember instead '
          + 'of the lesson.',
      },
    ],
    reassure: [
      'Nobody will let you say this is hard. You mention that the day fell apart and you get '
        + 'told how lucky you are, so you stop mentioning it. The guilt this lens produces is a '
        + 'very particular one: it feels like bragging to ask for help. It is not. A child who '
        + 'reads 4 years ahead and cries over a sock is a genuinely difficult child to raise, and '
        + 'the difficulty does not cancel out because the report card is good.',
      'You are probably also worried that you are pushing. You see them reach for the harder '
        + 'book and you wonder whether you should be slowing them down, protecting the childhood, '
        + 'making them be 8. Here is the reframe that helps: following is not pushing. When you '
        + 'hand them the harder book because they asked, you are meeting a need, the same as '
        + 'feeding a child who is hungry. The pushing to watch for is the kind that comes from '
        + 'your hopes rather than from their pulling. You will usually know the difference by who '
        + 'is disappointed when they stop.',
      'And the last one, said plainly: bright does not mean fine. The abilities and the '
        + 'feelings are often developing at completely different speeds, which is uncomfortable '
        + 'in ways that are easy to mistake for being difficult on purpose. Being able to talk '
        + 'about a feeling in beautiful sentences is not the same as being able to manage it. If '
        + 'they seem persistently unhappy, anxious, or hopeless, that deserves a real '
        + 'professional and not a harder curriculum. Their vocabulary can hide a lot, including '
        + 'from you, and asking for help early is not an admission that you have wasted their '
        + 'potential.',
    ],
  },
  learningDifferences: {
    days: [
      {
        name: 'Reading is not going in today',
        looks: 'They read the same line 3 times, lose their place, and guess at words they had cold '
          + 'yesterday. By 9:30 they are tired in a way that looks exactly like refusing.',
        do: [
          'Change the input so the content keeps moving. You read it aloud, or use an '
            + 'audiobook or the read aloud button on the device, and they do the thinking.',
          'Keep the actual decoding practice, but cap it at 10 to 15 minutes and do it early '
            + 'while they are freshest. That short block is where the real reading gain comes '
            + 'from, so protect it rather than skipping it.',
          'Move for 10 minutes before that block, and again after.',
          'Separate reading from the subject. History is not a reading test, so let them get '
            + 'the history any way they can and keep the reading work in its own box.',
          'Cut the total page count in half out loud, before they start, so the end is '
            + 'visible from the beginning.',
        ],
        say: '"Your eyes are tired, not your brain. I will read, you think."',
      },
      {
        name: 'The writing day that turns into tears',
        looks: 'They can tell you the answer in 3 clear sentences and produce 1 crooked line on '
          + 'paper. The grip is white knuckled, the eraser has gone through the page, and the '
          + 'hand is shaking out every few words.',
        do: [
          'Split the jobs completely. They dictate, you write every word down with no '
            + 'editing, then they copy only the 2 best sentences in their own hand.',
          'Change the surface. A slant board, or a 3 ring binder laid on its side, puts the '
            + 'paper at an angle that makes writing physically easier for a lot of children.',
          'Warm the hand up for 2 minutes first: squeeze, shake, press palms together, big '
            + 'arm circles.',
          'Halve the quantity and keep the standard. Four good sentences instead of 12 bad '
            + 'ones is not a lower bar.',
          'Stop at a set time rather than at a set amount. Anything past the point where the '
            + 'hand gives out is teaching them that writing means pain.',
        ],
        say: '"The ideas are yours and they are good. I am just the pen today."',
      },
      {
        name: 'The numbers have come unglued',
        looks: 'They had it on Tuesday. Today 7 times 8 is gone, place value looks random, and they '
          + 'are asking whether a bigger number is the one on the left.',
        do: [
          'Go back to objects for 10 minutes. Real things they can move, coins, beans, '
            + 'blocks, before any symbols.',
          'Put a facts chart on the table and let them use it. Knowing where to look is a '
            + 'real skill, not cheating, and it keeps today\'s actual lesson from being buried '
            + 'under recall.',
          'Do fewer problems with the steps written out beside them as a model, rather than '
            + 'more problems from memory.',
          'Let them talk the problem out loud as they go, and write the numbers for them if '
            + 'writing is also hard.',
          'Take a movement break the moment frustration shows rather than after the tears, '
            + 'and come back to the same problem, not a new one.',
        ],
        say: '"We are using the chart today. Knowing where to look things up is what grownups '
          + 'actually do."',
      },
      {
        name: 'The day after a hard school day',
        looks: 'They held it together all day and got in the car completely empty, or they came home '
          + 'with a paper covered in corrections. There is nothing left, and it often shows up as '
          + 'anger rather than sadness.',
        do: [
          'No academics at all for 90 minutes. Not a shortened version, none.',
          'Food and water first, then something physical for 20 to 30 minutes.',
          'Give them 1 small task in their strongest area so the day contains a competence, '
            + 'even a tiny one.',
          'Put the conversation about the paper 24 hours out, and say out loud that you are '
            + 'not talking about it today.',
          'If you can, take 1 nonessential thing off the evening entirely.',
        ],
        say: '"You held it together all day at school. You do not have to hold it together here."',
      },
    ],
    kit: {
      free: [
        'An index card or folded paper to cover everything except the line they are reading, '
          + 'which cuts the visual load with nothing bought',
        'A 3 ring binder turned on its side as a slant board, which is the free version of a '
          + 'product that sells for 30 dollars',
        'A multiplication chart or letter sound chart printed and taped directly to the '
          + 'table, permanently, not fetched each time',
        'A phone voice memo used for dictation, so ideas can be captured before the hand runs '
          + 'out',
        'A phone camera to photograph the board or the assignment, so copying accurately is '
          + 'never the barrier to knowing what the homework is',
        'Reading aloud in the car, which puts a whole book into a child whose eyes are done '
          + 'for the day',
      ],
      cheap: [
        'A pack of triangular or chunky pencil grips, a few dollars and worth trying, since '
          + 'which one helps varies wildly by child',
        'A slant board, which is better supported than most items on these lists for '
          + 'handwriting comfort and posture',
        'Wide ruled and graph paper, plus raised line paper, which gives the hand a physical '
          + 'edge to feel instead of a line to aim at',
        'A colored overlay or reading guide strip. Be honest with yourself here: tinted '
          + 'overlays and colored lenses are marketed as a dyslexia treatment and the research '
          + 'does not support that. Some children do prefer the reduced glare, so it is fine as '
          + 'comfort. It is not instruction and it is not a fix',
        'A cheap pair of headphones for audiobooks and text to speech, which is the single '
          + 'highest value few dollars on this list',
        'Sticky flags for marking where to start and stop, so a chapter becomes a visible '
          + 'finite thing',
      ],
      worth_it: [
        'A device with text to speech and speech to text switched on, and 1 sitting with '
          + 'somebody who will teach them to use it well. This is the biggest one, because it '
          + 'lets a child whose thinking is years ahead of their reading keep learning at their '
          + 'real level while the reading work continues separately.',
        'Structured literacy tutoring with a trained reading specialist, 2 or 3 times a week. '
          + 'Explicit systematic teaching of sounds, decoding, and spelling is the approach with '
          + 'the strongest research behind it, and nothing else on this list substitutes for it. '
          + 'If money is tight, this is the line item to protect.',
        'A full educational evaluation if you do not have one. It is the thing that converts '
          + 'an argument with the school into a set of rights, and it tells you which of the many '
          + 'possible bottlenecks you are actually dealing with.',
        'A home printer, so work can be enlarged, spaced out, and given more room, which '
          + 'removes a surprising amount of daily friction.',
      ],
    },
    moments: [
      {
        when: 'They read a word correctly on one line and get it wrong on the next',
        why: 'Until a word is fully automatic it has to be rebuilt each time, and rebuilding costs '
          + 'effort. When the effort runs down, accuracy goes with it, so the same word really '
          + 'can be right and then wrong within a minute. It is not carelessness and it is not '
          + 'evidence that yesterday\'s practice was wasted.',
        do: [
          'Supply the word after about 3 seconds instead of waiting them out. Long struggles '
            + 'at the word level do not build reading, they build dread.',
          'Note which words keep coming back and practice those few, briefly, separately from '
            + 'real reading.',
          'Keep the practice sessions short and daily rather than long and occasional, '
            + 'because this is built by repetition over time.',
          'Reread the same easy passage a few times across the week. Fluency comes from '
            + 'rereading, and it is one of the few things you can do at home that reliably helps.',
        ],
        avoid: 'Saying "you just read that." It is true, it is confusing to them, and it turns a '
          + 'fatigue effect into proof that they are not trying.',
      },
      {
        when: 'Homework that should take 30 minutes takes 3 hours',
        why: 'The assignment was designed for a child for whom reading and writing are automatic. '
          + 'When they are not, every question costs several times more, so a reasonable amount '
          + 'of work becomes an unreasonable amount of time. The child is not being slow at '
          + 'thinking, they are paying a toll on every sentence.',
        do: [
          'Time it honestly for a week and write the numbers down.',
          'Cap the time rather than the amount. Decide with your child\'s teacher how long is '
            + 'reasonable, work for exactly that, and stop.',
          'Send the timed evidence to the teacher and ask for reduced quantity rather than '
            + 'reduced content, such as the odd numbers only.',
          'Take the transcription off them wherever it is not the skill being assessed. You '
            + 'scribe, or they type, or they record an answer.',
        ],
        avoid: 'Pushing through to finish it all so they do not fall behind. Three hour nights buy 1 '
          + 'completed worksheet and cost the child\'s belief that school is survivable, and that '
          + 'trade never comes out ahead.',
      },
      {
        when: 'They memorized it perfectly last night and it is gone this morning',
        why: 'Information that was drilled in the short term without being connected to anything '
          + 'often does not stick, and this is more pronounced for some children than others. '
          + 'What looks like it was learned was actually held briefly. Nothing was lost through '
          + 'laziness.',
        do: [
          'Space it out. Five minutes today, tomorrow, and 3 days from now beats an hour the '
            + 'night before.',
          'Attach it to something concrete: a picture, a movement, a rhyme, a real object, or '
            + 'a story.',
          'Let them teach it back to you, which reveals what is actually solid in about 90 '
            + 'seconds.',
          'Keep the reference chart available during the test if the school will allow it, '
            + 'and ask, because many will.',
        ],
        avoid: 'Re testing them first thing in the morning to see if it stuck. You will both find '
          + 'out that it did not, and the day now starts with a failure.',
      },
      {
        when: 'They can talk about it brilliantly and write almost nothing',
        why: 'Speaking and writing use different machinery. When spelling, handwriting, and '
          + 'organizing all cost effort at once, they collide, and the writing that comes out '
          + 'looks like the work of a much less capable child. This gap is the most commonly '
          + 'misread thing in this whole area, including by people who love them.',
        do: [
          'Let the talking count. Record the answer, or you write it down verbatim, and treat '
            + 'that as the work for today.',
          'Then move just one step toward paper: they copy 2 sentences, or type them, or fill '
            + 'in a frame you have written.',
          'Use a simple structure they can reuse every time, such as 3 boxes for beginning, '
            + 'middle, and end, so organizing is not reinvented each assignment.',
          'Keep a folder of their dictated work so somebody at the school can see the '
            + 'difference between what they know and what they can currently produce.',
        ],
        avoid: 'Telling them they are not trying because you have heard them explain it. You have '
          + 'just proved the thinking is fine, which is exactly why the writing needs a different '
          + 'route rather than more willpower.',
      },
      {
        when: 'They said they are stupid, and they meant it',
        why: 'A child who works harder than everybody at the table and produces less will draw the '
          + 'obvious conclusion unless somebody explains the real one. This usually arrives '
          + 'around 8 or 9, when comparison switches on. What they need is not reassurance, it is '
          + 'an accurate explanation of themselves.',
        do: [
          'Stop the work. This is more important than the worksheet and it is the right use '
            + 'of the next 20 minutes.',
          'Give them the real explanation in plain words, matched to their age, such as that '
            + 'brains do different jobs at different speeds and reading is one job, not a measure '
            + 'of how smart somebody is.',
          'Name things they are demonstrably good at, specifically, with examples from this '
            + 'week.',
          'Tell them about adults with the same profile in fields they respect, and let them '
            + 'meet one if you can.',
        ],
        avoid: '"Of course you are not stupid, you are so smart." It is loving and it lands as a '
          + 'parent who has to say that. The accurate explanation reaches them, the blanket '
          + 'denial does not.',
      },
    ],
    reassure: [
      'Two guilts usually arrive together here. The first is that you missed it. You think '
        + 'back to first grade and you remember the crying about homework, and you wonder how '
        + 'long they sat in a classroom feeling stupid while you told yourself they would catch '
        + 'up. Be fair to who you were then. Reading difficulties are genuinely hard to '
        + 'distinguish from a slow start, everybody around you said give it time, and most of '
        + 'them believed it. You are here now, and now is when it counts. Children who get the '
        + 'right kind of teaching later still make real gains.',
      'The second one is sharper. You feel mean when you push and mean when you stop. Make '
        + 'them finish and you are the parent who kept a crying 9 year old at the table until '
        + '8pm. Let them stop and you are the parent who let them fall behind. There is no '
        + 'version of that evening where you feel good, and that is not because you are choosing '
        + 'badly. It is because the assignment was built for a different child and you are being '
        + 'asked to absorb the difference with your own relationship. You are allowed to stop the '
        + 'clock, write a note, and let the adults who set the work know what it actually cost.',
      'One thing worth holding onto: the specific teaching that helps here is a known '
        + 'quantity. Explicit, systematic instruction in sounds and spelling patterns, done '
        + 'regularly by somebody trained in it, is well supported by research. That means this is '
        + 'not a mystery you have to solve with love and grit alone, and it is not a character '
        + 'trait to be endured. It is a teaching problem with a known answer, which makes your '
        + 'job advocating for that teaching rather than inventing it at the kitchen table at 9pm.',
    ],
  },
  anxiety: {
    days: [
      {
        name: 'The stomach hurts morning',
        looks: 'Real physical complaints before school or before something on the calendar. A '
          + 'stomachache, a headache, needing the bathroom repeatedly, and it eases by mid '
          + 'morning on a day with nothing scheduled.',
        do: [
          'Check for fever and actual illness first, briefly, then treat what is left as '
            + 'worry, out loud and kindly.',
          'Shrink the goal to the very next step only. Not the whole day. Shoes, then the '
            + 'car, then the door.',
          'Get them moving for 10 minutes before leaving. A body braced for danger settles '
            + 'faster with movement than with talking.',
          'Make the handoff short. Long goodbyes give the fear more time, not more comfort.',
          'Name a specific thing about the reunion, such as who is collecting them and what '
            + 'is happening after.',
        ],
        say: '"Your stomach is telling the truth about how you feel, and we are still going. I '
          + 'will be right there at pickup with the dog."',
      },
      {
        name: 'The what if day',
        looks: 'The same question 6 times in slightly different words. Your answers seem to work for '
          + '3 minutes and then it comes back. By 10am you feel like a machine that dispenses '
          + 'reassurance.',
        do: [
          'Answer it once, properly and fully. Once.',
          'Then name the loop out loud, kindly, and stop answering. The answering is what '
            + 'keeps it alive, even though it is the kindest thing in the room.',
          'Offer a worry time instead: a fixed 10 minutes later today where you will sit with '
            + 'them and the worry gets the floor.',
          'Put something physical between now and then. Get outside, carry something heavy, '
            + 'ride a bike.',
          'Let the worry exist unresolved. You do not have to fix it and they do not have to '
            + 'stop feeling it for the day to work.',
        ],
        say: '"I have answered that one. Your worry wants me to answer it again, and answering it '
          + 'makes it louder. I am right here, and I am not answering it again."',
      },
      {
        name: 'The day after a scare',
        looks: 'There was a fire drill, a dog, a hospital visit, or a video they should not have '
          + 'seen. Today they are jumpy, following you room to room, and asking to sleep in your '
          + 'bed.',
        do: [
          'Expect this and do not read it as losing ground. A raised alarm system takes a few '
            + 'days to come down.',
          'Keep the routine identical. Sameness is the medicine today, so resist the urge to '
            + 'make the day gentler than usual.',
          'Add 20 minutes of hard physical movement, the kind that leaves them breathing '
            + 'fast.',
          'Allow 1 temporary comfort with a stated end: "Tonight and tomorrow on the mattress '
            + 'in our room, then back to your bed on Thursday." Say the end date when you offer '
            + 'it, not later.',
          'Do a small ordinary version of the scary thing soon rather than eventually, such '
            + 'as walking past the house with the dog on a leash, with you.',
        ],
        say: '"That was scary. Scared feelings hang around a couple of days and then they fade. '
          + 'Yours will too."',
      },
      {
        name: 'The brave day, and what to do with it',
        looks: 'They are loose. Joking at breakfast, walked into the room without checking your face '
          + 'first, did not ask the usual question. Nothing about today looks like a problem, '
          + 'which is exactly why it matters.',
        do: [
          'Use it. Pick 1 slightly hard thing that has been waiting, and do that thing today '
            + 'while the tank is full.',
          'Keep it small and keep it to 1. Stacking 3 hard things onto a good day teaches '
            + 'them that good days get taxed.',
          'Afterward, describe exactly what they did in specific words rather than praising '
            + 'them for being brave: "You ordered your own food and your voice did not even '
            + 'shake."',
          'Write it down somewhere they can see. On a hard day, evidence that they have done '
            + 'it before is worth more than any encouragement you can invent.',
          'Do not analyze why today was better. Just take it.',
        ],
        say: '"You walked in without me today. I saw that."',
      },
    ],
    kit: {
      free: [
        'Cold water on the wrists and face, or holding an ice cube, because a strong harmless '
          + 'physical sensation gives a spinning body something else to do',
        'A worry list, written down and then physically closed in a drawer, which gets it out '
          + 'of the head and into an object',
        'A fixed worry time, the same 10 minutes each day, with you, which is the single most '
          + 'useful free structure in this whole lens',
        'Breathing out for longer than you breathe in, counted on fingers, which does more '
          + 'than deep breaths in do',
        'Hard conversations had while walking side by side rather than face to face, because '
          + 'eye contact raises the stakes for an anxious child',
        'Naming 5 things they can see out loud, which is not magic and does reliably '
          + 'interrupt a spiral long enough to get out of the door',
      ],
      cheap: [
        'A small notebook that is only for worries, so the worry has a place that is not your '
          + 'ear at 11pm',
        'A quiet pocket fidget they can use without anybody noticing, which matters more than '
          + 'which one it is',
        'A visual timer for worry time and for the we are leaving in countdown, so the ending '
          + 'is not a surprise',
        'A water bottle with a straw, since slow sipping and slow breathing are physically '
          + 'connected and one brings on the other',
        'Noise reducing earmuffs for loud unpredictable places, such as gyms, assemblies, and '
          + 'fireworks',
        'A laminated card in their own handwriting listing their own 3 steps, carried in a '
          + 'pocket or a backpack',
      ],
      worth_it: [
        'A therapist who does cognitive behavioral therapy with children, including gradual '
          + 'approach work. This is the item with the strongest evidence behind it by a wide '
          + 'margin. The gradual facing of feared things works, and it should be planned with a '
          + 'professional rather than assembled from articles, because doing it too fast or in '
          + 'the wrong order can set a child back.',
        'A weighted lap pad. Many families find it calming and the research is thin, so treat '
          + 'it as comfort you are allowed to buy rather than treatment. It must be light enough '
          + 'that they move and remove it easily, never used for sleep, and never given to a '
          + 'child who cannot take it off themselves. Weighted products are not safe for babies '
          + 'and are not recommended for infant sleep.',
        'A proper bedtime setup for the child whose anxiety lives at night: a dim light they '
          + 'control, a clock they can read, and a reliable sound source. Worth it because night '
          + 'is when most of this happens and everybody is at their worst.',
        'Over the ear noise canceling headphones for a child whose worry gets loudest in busy '
          + 'noisy places.',
      ],
    },
    moments: [
      {
        when: 'They ask me the same question over and over and my answer never sticks',
        why: 'Reassurance works like a painkiller. It brings relief for a few minutes, and the '
          + 'relief teaches the brain that asking is what made the fear stop, so the asking gets '
          + 'more frequent. That is why your answers stop working. The fix is not a better '
          + 'answer, it is fewer answers, offered with more warmth rather than less.',
        do: [
          'Answer once, fully and warmly.',
          'Then say out loud what you are doing and why, so it does not read as you '
            + 'withdrawing.',
          'Replace the answer with presence. Stay, sit close, put a hand on their back, and '
            + 'say nothing about the content.',
          'Offer worry time later, and keep that appointment exactly, because you are asking '
            + 'them to trust a delay.',
        ],
        avoid: 'Answering the eleventh time because they are so upset and you cannot stand it. '
          + 'Nobody blames you for it. It is also the thing that quietly guarantees a twelfth.',
      },
      {
        when: 'They will not go in, and we are standing outside the door',
        why: 'Standing at the threshold is the peak of it. Fear rises as they approach and then '
          + 'falls once they are inside and nothing bad happens, and the falling is where the '
          + 'learning lives. Leaving at the peak means the brain records that the door was the '
          + 'danger and leaving was the rescue, which makes next time harder.',
        do: [
          'Lower the demand rather than removing it. Go in for 5 minutes, stand at the back, '
            + 'say hello to 1 person and leave.',
          'Give them something to do with their hands or a concrete job, such as carrying the '
            + 'gift or finding the coats.',
          'Say what the exit plan is before you go in, out loud, so there is an end they can '
            + 'see.',
          'Go in with them and stay if that is what makes in possible today. Attached and '
            + 'inside beats independent and outside.',
        ],
        avoid: 'Giving the pep talk in the doorway. More words at the peak lands as more pressure, '
          + 'and the sentence that helps is short and about the next 30 seconds.',
      },
      {
        when: 'It is 11pm and they are crying about tomorrow',
        why: 'Tired brains are worse at putting worry in perspective, and a dark quiet room '
          + 'removes every distraction, so the volume goes up. Almost nothing thought about after '
          + '10pm is thought about accurately, which is worth telling them.',
        do: [
          'Do not solve it tonight. Say plainly that you will both think about it in the '
            + 'morning and that you are not going anywhere.',
          'Get them physically settled first: water, a cooler room, feet covered, your hand '
            + 'on their back.',
          'Write the worry on a pad by the bed and hand it over to tomorrow, literally '
            + 'putting the paper somewhere else.',
          'Stay until the body is calm, then go. Leaving during the crying teaches them to '
            + 'fight sleep.',
        ],
        avoid: 'Problem solving at 11pm because they finally opened up. It feels like the '
          + 'breakthrough moment. It is actually how a 20 minute settle becomes a 2 hour one, and '
          + 'the same conversation goes much better at 4pm tomorrow.',
      },
      {
        when: 'Their heart is racing and they say they cannot breathe',
        why: 'This is the body\'s alarm system firing at full volume. Heart rate up, breathing '
          + 'fast and shallow, tingling hands, a real feeling of not getting enough air even '
          + 'while getting plenty. It is intensely unpleasant and, in itself, not dangerous. The '
          + 'fear of the sensations is what drives the next one, which is why explaining the '
          + 'mechanism matters so much.',
        do: [
          'Get low, get calm, and slow your own voice and movements down. They will borrow '
            + 'your pace before they take your advice.',
          'Say the same short sentence a few times, such as "This will pass. Your body is '
            + 'doing a false alarm."',
          'Guide a longer breath out than in, counting with them, and do it with them rather '
            + 'than instructing them.',
          'Afterward, once, get it checked by their doctor so you are not both wondering '
            + 'about the heart, and ask for a referral. Repeated episodes like this are worth '
            + 'professional help rather than a home plan.',
        ],
        avoid: 'Asking what is wrong in the middle of it. Talking and searching for a cause is work, '
          + 'and in that moment they have nothing spare. Explanations after, never during.',
      },
      {
        when: 'I keep rearranging our whole life around their fear and I did not notice it '
          + 'happening',
        why: 'This is the most common trap in this lens, and it forms out of kindness, one '
          + 'reasonable decision at a time. You stopped going to the place, you started answering '
          + 'for them, you let them skip the thing. Each accommodation bought a calmer evening, '
          + 'and together they taught the fear that it is in charge. Parents who change the '
          + 'accommodating are a recognized and effective part of treatment, which tells you '
          + 'where the leverage is.',
        do: [
          'Write down every accommodation you currently make for 1 week, without changing '
            + 'anything. Most people are shocked by the list.',
          'Pick 1, the easiest, and tell them in advance what you are changing and why, '
            + 'calmly and without a debate.',
          'Expect it to get louder before it gets better, and hold the 1 change anyway.',
          'Get help for the bigger ones. If school attendance is affected, or the list is '
            + 'long, work with a therapist rather than dismantling it alone.',
        ],
        avoid: 'Removing all of it at once on a Monday because you have had enough. It overwhelms '
          + 'them, it fails, and it convinces everybody that this cannot be changed.',
      },
    ],
    reassure: [
      'Here is the cruel design of this one: almost every kind instinct you have makes it '
        + 'worse. Comfort them, and the comfort becomes required. Answer the question, and the '
        + 'question comes back bigger. Let them skip the party, and the next party is harder. You '
        + 'are not failing at this. You are being punished for being a warm parent by a mechanism '
        + 'that feeds on exactly that warmth, and nobody would work it out by instinct, because '
        + 'instinct is the thing being exploited.',
      'So let me take away the guilt you are probably carrying about the accommodating. You '
        + 'did not cause the anxiety. Temperament is a large part of this and it shows up in '
        + 'babies long before any parenting has happened. What you did was respond to a '
        + 'distressed child the way any decent person responds to a distressed child. The change '
        + 'you make now is not an apology for the past 3 years, it is a technique, and you can '
        + 'adopt it without accepting that you broke something.',
      'One more thing, because it is the part that keeps parents going. The goal is not a '
        + 'child who stops feeling anxious. That child does not exist and aiming for it makes '
        + 'both of you miserable, because every wave of fear becomes evidence that it is not '
        + 'working. The goal is a child who feels it and goes anyway, and who learns over '
        + 'hundreds of ordinary repetitions that they are somebody who can do a hard thing '
        + 'scared. You are not trying to get rid of the feeling. You are building the person who '
        + 'can carry it.',
    ],
  },
  emotionalRegulation: {
    days: [
      {
        name: 'The short fuse day',
        looks: 'By breakfast the wrong cup is a catastrophe. The pause between the thing happening '
          + 'and the reaction is simply not there today, and you can feel the whole house walking '
          + 'carefully.',
        do: [
          'Reduce the day to the 3 things that genuinely have to happen, and say them out '
            + 'loud so you are not inventing demands as you go.',
          'Feed them early and put 20 minutes of physical movement in before the first '
            + 'demand.',
          'Make every transition loud and early: 10 minutes, 5 minutes, 2 minutes. Surprises '
            + 'are the main fuel today.',
          'Take the negotiable fights off the table entirely. The clothes, the second cup, '
            + 'the shoes on the wrong feet. Win those another week.',
          'Schedule yourself a break too, a real one, because your own steadiness is the main '
            + 'tool in the house and it runs out.',
        ],
        say: '"You are running hot today. I am going to make today easier, not harder."',
      },
      {
        name: 'The day after a big blowup',
        looks: 'Quiet. Clingy, or oddly helpful, or extremely agreeable. They will not quite look at '
          + 'you. Everybody is being careful, and nobody has mentioned yesterday.',
        do: [
          'Repair first, before any lesson, and you go first. Children cannot usually '
            + 'initiate this and waiting for them to apologize costs you the whole day.',
          'Keep it to 2 sentences and then genuinely move on. Long processing is for you and '
            + 'your partner, not for them this morning.',
          'Do not relitigate the incident. Not one detail.',
          'Go back to the ordinary routine as fast as possible, because normal is the signal '
            + 'that they are still safe here.',
          'Put the real conversation at least 24 hours out, in the car or on a walk, where '
            + 'nobody has to make eye contact.',
        ],
        say: '"We are okay. I lost my patience too. We start again from here."',
      },
      {
        name: 'The bottled day',
        looks: 'A glowing report from school and a meltdown at 4:15 over a worksheet. They are not '
          + 'being fake at school. They spent everything there and arrived home with nothing '
          + 'left.',
        do: [
          'Build a 30 minute landing pad with no questions in it. Food, water, quiet, '
            + 'something physical, no debrief.',
          'Put homework AFTER the landing pad, never inside it.',
          'Ask 1 specific question later, such as who they sat with at lunch, rather than how '
            + 'was your day, which is too big a question for an empty child.',
          'Move bedtime 20 minutes earlier on days like this, because holding it together all '
            + 'day costs more than a normal day does.',
          'Say out loud that home is where it gets to come out, so they do not add shame to '
            + 'exhaustion.',
        ],
        say: '"You do not have to talk yet. Food first."',
      },
      {
        name: 'The flooded day',
        looks: 'It has already happened, before breakfast is cleared. You are well past the point '
          + 'where reasoning reaches them, and you can see it in the eyes.',
        do: [
          'Stop teaching completely. Nothing is learned during a flood and every word you add '
            + 'is fuel.',
          'Get low, get quiet, use very few words, and ask no questions.',
          'Keep everybody safe and give them space without leaving the area.',
          'Wait for the body to come down before any conversation, which commonly takes 20 to '
            + '40 minutes, and do not test it early.',
          'Then food, water, and 1 small easy task they can definitely do, so the day '
            + 'contains a success. Write off the academics out loud so nobody has to wonder.',
        ],
        say: '"I am here. You are not in trouble."',
      },
    ],
    kit: {
      free: [
        'Your own voice dropping in volume and slowing down, which is the most effective free '
          + 'tool here and the hardest one to use',
        'A calm spot that is NOT the punishment spot, chosen by them, with a blanket in it',
        'A pillow to push hard against a wall, since pushing with everything you have uses up '
          + 'a flooded body without hurting anything',
        'Heavy work around the house: carrying the laundry basket, pushing the vacuum, '
          + 'hauling groceries, which delivers deep pressure for free and is better supported '
          + 'than most bought sensory items',
        'A 1 to 5 scale drawn on paper and stuck on the fridge, so they can point instead of '
          + 'finding words',
        'An ice cube or cold water on the face, which interrupts the physical spiral long '
          + 'enough for anything else to work',
      ],
      cheap: [
        'A stretchy fabric tube or body sock to push into, which gives whole body pressure '
          + 'and doubles as something to hide inside',
        'A resistance band across the chair legs or looped between the hands for pulling. '
          + 'Often helps, thin formal evidence, cheap enough to try',
        'A visual timer, used for how long until the next thing, not for how fast to calm '
          + 'down',
        'A chewable pencil topper or chew necklace for a child who bites and chews when '
          + 'overwhelmed. SAFETY: these are a choking and strangulation risk. The FDA has warned '
          + 'that necklaces and jewelry sold for teething or sensory stimulation have caused '
          + 'choking and a strangulation death. Use them with supervision, inspect them daily for '
          + 'tears, and for a child under about 3 or any child who chews through material, use a '
          + 'wrist or pencil version rather than anything around the neck',
        'A spray bottle of cool water or a damp washcloth for the face, which is a small '
          + 'physical reset that works in public',
        'A pair of noise reducing earmuffs, because for a lot of children the meltdown is '
          + 'downstream of noise',
      ],
      worth_it: [
        'Parent training in behavior management, meaning a structured program that teaches '
          + 'you the moves. Honest ranking: this has more evidence behind it than any object on '
          + 'any of these lists, and it is training for you rather than treatment for them, which '
          + 'is why it works. The CDC names it as a first line approach for young children.',
        'An occupational therapy evaluation, for a child whose blowups cluster around noise, '
          + 'clothing, food textures, or crowds. Worth it for the individualized plan and the '
          + 'teaching. Be aware that sensory integration therapy as a treatment has limited and '
          + 'inconclusive evidence, so ask what specifically is being targeted and how you will '
          + 'know it worked.',
        'A weighted lap pad or blanket. Plenty of families swear by these and the research is '
          + 'mixed and modest, so buy it as comfort rather than as a treatment. Never for sleep '
          + 'with a young child, never heavy enough to restrict movement, and never on a child '
          + 'who cannot remove it themselves. Weighted sleep products are not recommended for '
          + 'babies.',
        'A mini trampoline, a swing, or a climbing option at home. This is the one that pays '
          + 'off daily, because most of what settles a dysregulated body is repeated hard '
          + 'movement, and having it 10 feet away means it actually gets used.',
      ],
    },
    moments: [
      {
        when: 'They are screaming and nothing I say is working',
        why: 'During a flood, the parts of the brain that handle reasoning and language are '
          + 'effectively offline while the alarm system runs the show. Talking is asking for '
          + 'something they cannot currently do. This is why the same child who is reasonable at '
          + '4pm is unreachable at 4:15, and it is a state, not a choice.',
        do: [
          'Stop talking. Then stop again, because you will want to say one more thing.',
          'Get physically lower than them, soften your face, and slow everything you do down.',
          'Keep 1 short sentence and repeat it: "I am here."',
          'Wait. Twenty to 40 minutes is normal for the body to come down, and every attempt '
            + 'to speed it up restarts it.',
        ],
        avoid: 'Reasoning, explaining, or adding a consequence mid flood. All 3 add input to a '
          + 'system that is already overloaded, and the consequence you invent while furious is '
          + 'one you will have to walk back later.',
      },
      {
        when: 'They hit me',
        why: 'Most hitting at this point is a flooded body with no other exit, not a decision '
          + 'about you. That does not make it acceptable, and both things need to be true in your '
          + 'response: it is not allowed, and it is not evidence that they are becoming a violent '
          + 'person.',
        do: [
          'Protect yourself first. Stand up, step back, block, hold a cushion. You are '
            + 'allowed to be safe.',
          'Say it once, flat and short: "I will not let you hit me." No lecture.',
          'Move the situation rather than winning it. Change the room, go outside, put a door '
            + 'between you.',
          'Handle the repair and the rule later, when everybody is calm, and teach the '
            + 'alternative explicitly, such as pushing a wall or coming to find you and saying a '
            + 'word. If hitting is frequent or anybody is getting hurt, get a professional '
            + 'involved. That is not failure, it is the right size of response.',
        ],
        avoid: 'Hitting back or grabbing hard to make a point. Beyond everything else, it teaches '
          + 'the exact lesson you are trying to unteach, and the shame afterward makes the next '
          + 'one likelier.',
      },
      {
        when: 'They are fine at school and a monster at home',
        why: 'Holding it together all day is real work, and it is done in the place where they '
          + 'feel watched. What comes out at home is the bill for that effort, and the fact that '
          + 'it lands on you is not a coincidence or a verdict on your parenting. It lands on you '
          + 'because you are safe.',
        do: [
          'Build the landing pad. Thirty minutes of food and quiet and movement with no '
            + 'questions in it, every school day.',
          'Move homework and chores out of the first hour home, permanently.',
          'Tell the school what you see at 4pm, since they usually have no idea and it '
            + 'changes what they offer.',
          'Say to your child, once, that home is where it gets to come out. It removes a '
            + 'layer of shame from a child who already knows they are different at home.',
        ],
        avoid: 'Saying "your teacher says you are wonderful, so I know you can control it." It is '
          + 'logical and it is wrong, because they can control it for a fixed number of hours, '
          + 'and you get the ones after those run out.',
      },
      {
        when: 'They got what they asked for and they still could not come down',
        why: 'Once the body\'s alarm is fully switched on, it has to run its course. It is not '
          + 'responding to the content of the argument any more, so giving them the thing arrives '
          + 'too late to matter. This is the moment most parents conclude the whole episode was '
          + 'manipulation, and it usually was not.',
        do: [
          'Stop trying to fix the trigger. It has stopped being the point.',
          'Switch entirely to the body: outside, water, movement, pressure, quiet.',
          'Do not remove the thing again as a consequence for not calming down, which '
            + 'restarts everything.',
          'Once they are down, name what happened plainly: "Your body was too switched on to '
            + 'stop, even after you got the thing." That is a genuinely useful thing for a child '
            + 'to understand about themselves.',
        ],
        avoid: 'Deciding retroactively that the whole thing was a performance and setting a '
          + 'consequence for it. It is the most understandable conclusion in parenting and it is '
          + 'usually wrong at this age.',
      },
      {
        when: 'I lost it and yelled back',
        why: 'Your own alarm system works the same way theirs does, and screaming at close range '
          + 'for 40 minutes will set it off in almost anybody. That is physiology, not a '
          + 'character report. What matters next is not whether it happened, it is whether it '
          + 'gets repaired, because repair is what children actually learn from.',
        do: [
          'Take yourself out of the room for 2 minutes if anybody else can be with them '
            + 'safely. Leaving to calm down is a skill, not an abandonment.',
          'Repair specifically and briefly once you are calm: what you did, that it was not '
            + 'okay, and what you will try next time. No but and no but you.',
          'Do not overdo the apology. A long one asks the child to comfort you, and that is a '
            + 'job you do not want to give them.',
          'Then look at your own load honestly. Sleep, food, help, being alone in the house '
            + 'all day. This is the part nobody puts on the list and it is usually the real '
            + 'variable.',
        ],
        avoid: 'Promising it will never happen again. You will break that promise and the broken '
          + 'promise costs more than the yelling did. Promise the repair instead, because that '
          + 'one you can keep.',
      },
    ],
    reassure: [
      'This is the lens that produces the worst guilt of all of them, because you are not '
        + 'only worried about your child, you are ashamed of yourself. You yelled. You said the '
        + 'thing you swore you would never say, in the voice you swore you would never use. Then '
        + 'you looked at their face and hated yourself. So here it is plainly: your alarm system '
        + 'runs on the same hardware theirs does, and 40 minutes of screaming at close range will '
        + 'set it off in almost any human being. What your child needs from you is not a parent '
        + 'who never loses it. It is a parent who comes back. Repair is not damage control, it is '
        + 'the actual lesson, and every time you do it you are showing them what to do after they '
        + 'lose it too.',
      'The second fear is the one you probably have not said out loud to anybody. You are '
        + 'scared about who they are becoming. You watch a 7 year old put a hole in a door and '
        + 'you imagine 17, and something cold goes through you. Here is what is worth knowing: '
        + 'managing feelings is a skill that develops, not a trait somebody has or does not have, '
        + 'and it develops slowly, with a lot of help, well into the teenage years. A child who '
        + 'cannot do it at 7 is not a preview of an adult who cannot do it. They are a child in '
        + 'the middle of learning something difficult, in the presence of somebody who is going '
        + 'to teach them, which is you.',
      'And the judgment, since somebody has almost certainly offered you their opinion. A '
        + 'relative who thinks it is discipline. A stranger in a parking lot. The friend whose '
        + 'children simply do not do this. You do not owe any of them an explanation, and more to '
        + 'the point, none of them is in your house at 4:15. The work you are doing is invisible '
        + 'by design, because it consists of things that did not escalate, and nobody ever '
        + 'congratulates a parent for a blowup that did not happen. Count them anyway. Those are '
        + 'yours.',
    ],
  },
  autism: {
    days: [
      {
        name: 'The day after a big day',
        looks: 'Yesterday had a party, a field trip, a new place or a lot of people in it, and this '
          + 'morning they are slow, flat, snappy over nothing, or back in bed with the door shut. '
          + 'Skills that were easy last week are suddenly hard, such as getting dressed or '
          + 'answering a simple question.',
        do: [
          'Cut today\'s plan by about half before anyone asks you to. Pick the 2 things that '
            + 'actually matter and let the rest go without announcing that you cut them.',
          'Start with 10 to 15 minutes of heavy work rather than a talking task, such as '
            + 'carrying a laundry basket up the stairs 3 times, pushing a loaded stroller or '
            + 'wagon around the yard, or hanging from a bar for 10 seconds at a time.',
          'Keep every work block to 10 or 15 minutes with a full stop in between, and put the '
            + 'hardest block first while there is still gas in the tank.',
          'Make today a low language day. Point, show, hand them the thing, use a written '
            + 'list instead of spoken instructions.',
          'Protect a real recovery window, 45 to 90 minutes with no demands, no questions and '
            + 'no screens they have to respond to, before dinner rather than after.',
        ],
        say: '"Yesterday was a lot. Today is the small version of today."',
      },
      {
        name: 'A words are expensive day',
        looks: 'By breakfast they are answering in 1 word, or in scripts and lines from a show, or '
          + 'not at all, and questions seem to cost them something. They may be using more '
          + 'gestures and pulling you by the hand instead of asking.',
        do: [
          'Stop asking questions for the next hour. Narrate instead, such as "I\'m getting '
            + 'the cereal out," and give them the option to point.',
          'Put out a written or picture list of the day\'s 3 or 4 steps so nothing has to be '
            + 'negotiated out loud.',
          'Give a 10 second pause after anything you do say. Count it silently. Most of us '
            + 'reword the question at second 3, which restarts their processing from the top.',
          'Offer 1 movement block of 15 minutes mid morning that needs no talking at all, '
            + 'such as a walk, a trampoline, swinging or digging.',
          'Accept any form of communication today as the real thing, including typing, '
            + 'pointing, a picture card, a yes or no card, or a line from a movie that means what '
            + 'they need it to mean.',
        ],
        say: '"You don\'t have to talk to me right now. I\'ll keep you company anyway."',
      },
      {
        name: 'A something moved day',
        looks: 'A substitute teacher, a canceled plan, a new couch, a different route, a sibling '
          + 'home sick. The day looks like resistance or a meltdown that seems out of scale, and '
          + 'they may keep returning to the thing that changed.',
        do: [
          'Name the change out loud once, plainly, and write it down or draw it. Uncertainty '
            + 'is heavier than bad news.',
          'Rebuild the day\'s frame from the 2 or 3 anchors that did not change, such as the '
            + 'same breakfast, the same order of work, the same bedtime, and say those out loud.',
          'Add 1 extra movement or heavy work block of 10 minutes right before the first '
            + 'demand of the day, such as wall pushes, carrying books to the table, or a lap '
            + 'around the block.',
          'Put a visual timer on transitions today and give 2 warnings instead of 1, at 10 '
            + 'minutes and at 2 minutes.',
          'Expect the day to hold about 60 percent of its usual output and plan it that way, '
            + 'so you are not negotiating from behind at 2pm.',
        ],
        say: '"The thing that changed is real and I\'m not going to pretend it didn\'t. Here\'s '
          + 'what is still the same today."',
      },
      {
        name: 'A green light day',
        looks: 'They came out of their room already talking, they are flexible about small things, '
          + 'they are eating, they are seeking you out. Nothing dramatic happened. This is a real '
          + 'day and it is a resource.',
        do: [
          'Spend it, don\'t test it. Do the thing that usually needs a good day, such as the '
            + 'haircut, the dentist, the new park, the harder chapter.',
          'Front load the hard thing into the first 90 minutes, then put something they love '
            + 'directly after it so the pairing sticks.',
          'Practice 1 new skill today, just 1, in a 10 minute chunk, such as ordering their '
            + 'own drink or a new part of the morning routine.',
          'Still take the movement break. Regulated does not mean unlimited, and a green '
            + 'light day you run into the ground turns into the day after a big day.',
          'Write down what was different about this morning, including sleep, food, weather '
            + 'and what happened yesterday. 3 or 4 of these notes will show you a pattern nobody '
            + 'else could have told you.',
        ],
        say: '"You\'re having a good one today. Want to spend it on something fun and something '
          + 'hard?"',
      },
    ],
    kit: {
      free: [
        'A day list on paper or a whiteboard, drawn in boxes, in the order it happens, so the '
          + 'day can be looked at instead of asked about.',
        'A first and then strip made from an index card folded in half, with the task on the '
          + 'left and what comes after on the right.',
        'A laundry basket with 4 or 5 books in it, carried from room to room. This is the '
          + 'cheapest heavy work there is and it is genuinely calming for a lot of kids.',
        'A lamp instead of the overhead light, and the overhead light off. Fluorescent '
          + 'flicker and glare are a real load and you can remove them for free.',
        'A blanket over the back and arms of a chair to make a covered corner, or a card '
          + 'table with a sheet over it, for a place to work that has walls.',
        'A cap or the hood of a hoodie worn indoors, which cuts overhead light and side '
          + 'vision without anyone commenting on it.',
      ],
      cheap: [
        'A resistance band tied across the front 2 legs of the chair to push and bounce feet '
          + 'against while sitting.',
        'Over the ear noise reducing headphones or earmuffs for loud rooms, and filtered '
          + 'earplugs with a small vent for places where they still want to hear you, such as a '
          + 'store or a church.',
        'Sunglasses kept in the car and allowed indoors, plus a stick on dimmer or a warm '
          + 'bulb for the desk lamp.',
        'A visual timer with a colored disk that shrinks, because a shrinking amount of color '
          + 'is readable at a glance and a number countdown is not.',
        'A set of laminated picture cards on a ring for the 8 or 10 things asked for most '
          + 'often, including all done, break, too loud, and help.',
        'A footrest, or a stack of 2 books under the feet, so the feet are flat and the body '
          + 'is not bracing to stay upright.',
      ],
      worth_it: [
        'A small pop up tent or a floor cushion nest in a corner of the main room. Helps a '
          + 'child who needs to leave the room without leaving the family, and it needs to stay '
          + 'in sight of an adult rather than behind a closed door.',
        'A sturdy indoor swing or a mounted pull up bar. Helps the child who is calmest after '
          + 'their body has been upside down or hanging, and it only pays off if it is somewhere '
          + 'they can reach it themselves.',
        'A weighted lap pad of about 3 to 5 pounds. Helps some children stay at a table '
          + 'longer, used for short stretches while you are there, never during sleep, never '
          + 'heavy enough that they cannot lift it off themselves, and never over the head or '
          + 'neck.',
        'An hour with an occupational therapist who will watch your actual morning and your '
          + 'actual desk setup. What you are buying is the observation, not a program to run '
          + 'forever.',
      ],
    },
    moments: [
      {
        when: 'The plan changed and now the entire day is gone.',
        why: 'The plan was not a preference, it was the map they were using to know what happens '
          + 'to their body next. When the map goes, the whole day becomes unpredictable, not just '
          + 'the canceled part. What you are seeing is not disappointment, it is the cost of '
          + 'having to rebuild a whole day in your head with no warning.',
        do: [
          'Say the change once, in 1 short sentence, and then stop talking. Do not sell it or '
            + 'list the reasons.',
          'Write or draw the new version of the day where they can see it, even if you write '
            + 'it on a napkin.',
          'Name the parts that are still true, out loud, 2 or 3 of them.',
          'Give it 20 minutes of nothing before you ask for anything, then restart the day at '
            + 'the next anchor rather than trying to recover the lost hour.',
        ],
        avoid: 'Trying to fix it by offering something better. A treat instead of the plan adds a '
          + 'second unknown to a day that already lost its shape.',
      },
      {
        when: 'They are in full meltdown in a store and strangers are staring at me.',
        why: 'A meltdown is not a tantrum, and the difference matters for what you do. A tantrum '
          + 'has an audience and a goal and stops when the goal is met. A meltdown is a nervous '
          + 'system that has already gone past its limit, and there is no goal in it and no '
          + 'reasoning available inside it. Talking, asking and negotiating are all more input '
          + 'into a system that has already had too much.',
        do: [
          'Get them out of the input first. Outside, the car, an empty aisle, anywhere with '
            + 'less light and noise, even if the cart stays behind.',
          'Go quiet. Stay close, stay low, stop the questions. Your silence is the help.',
          'Once the crying changes pitch or the body softens, offer 1 thing without a '
            + 'question in it, such as water held out, or a hand out flat.',
          'Do the talking later, much later, and keep it to what you will do differently next '
            + 'time rather than what they did.',
        ],
        avoid: 'Explaining to the people watching. It costs you the attention your child needs right '
          + 'now, and you owe those strangers nothing.',
      },
      {
        when: 'Homework or schoolwork turns into a fight every single day at the same time.',
        why: 'A fight that arrives at the same time every day is usually about the shape of the '
          + 'task, not about willingness. The most common culprits are that the task has no '
          + 'visible end, that there is too much on the page at once, that sitting still is '
          + 'itself the hard part, or that by that hour the day has already spent everything they '
          + 'had.',
        do: [
          'Move the work earlier if you possibly can, and put 10 to 15 minutes of movement '
            + 'directly before it rather than after.',
          'Make the end visible. Cover all but 1 row with a piece of paper, or cut the '
            + 'worksheet into 4 strips and hand over 1 at a time.',
          'Set a visual timer for 10 minutes and honor it exactly, even mid sentence. '
            + 'Stopping when you said you would is what makes the next 10 minutes possible.',
          'Change the position rather than the child. Standing at a counter, lying on the '
            + 'floor, or writing on a clipboard in the tent all count as doing the work.',
        ],
        avoid: 'Adding time as a consequence for the fight. It makes the task longer, and length is '
          + 'usually what triggered it.',
      },
      {
        when: 'They hit me, or scratched me, while they were overwhelmed.',
        why: 'In an overwhelmed state the part of the brain that plans and chooses is offline, and '
          + 'what comes out is closer to a reflex than a decision. It is not a sign of what kind '
          + 'of person they are becoming, and it is also not something you have to accept as your '
          + 'permanent life. Both of those are true at once.',
        do: [
          'Move your body out of range rather than blocking or holding. Step back, turn '
            + 'sideways, put a pillow between you.',
          'Say almost nothing. 3 words at most, such as "I\'m right here."',
          'Once they are back, help them repair in a way that does not require a speech, such '
            + 'as getting you an ice pack or a bandage. Repair, not apology on demand.',
          'Later, look for what came 20 minutes before the hit, not 20 seconds before. That '
            + 'is where the change you can actually make is living. If this is happening often or '
            + 'you are getting hurt, bring it to a pediatrician or an occupational therapist, '
            + 'because that is a support question and not a parenting failure.',
        ],
        avoid: 'Making them say sorry in the moment. It teaches the words without the repair, and it '
          + 'restarts the overwhelm.',
      },
      {
        when: 'They want to tell me about the same subject for the fourth time today and I am out '
          + 'of patience.',
        why: 'For a lot of autistic kids, talking at length about the thing they love is not a '
          + 'detour from connection, it is the connection, and it is also regulating in the same '
          + 'way that rocking or music is regulating. On a hard day the talking gets longer, not '
          + 'shorter. Your patience being finite is not a character flaw either.',
        do: [
          'Give it your full attention for a set amount you can actually manage, such as 5 '
            + 'real minutes with your phone down.',
          'Be honest about the end and be specific, such as "I\'ve got 5 more minutes in me '
            + 'and then I have to make dinner."',
          'Offer another place for the rest of it, such as telling it to a recorder, drawing '
            + 'it, or saving it for the drive.',
          'Come back to it later on your own, unprompted. Asking a question about their '
            + 'subject 3 hours later is one of the largest deposits you can make.',
        ],
        avoid: 'Pretending to listen. Most autistic kids clock it immediately, and it reads as being '
          + 'tolerated rather than enjoyed.',
      },
    ],
    reassure: [
      'The guilt this one hands you is usually shaped like a question about the future. If I '
        + 'make today easier, am I raising someone who cannot handle a hard day later. You lower '
        + 'the lights, you cut the list, you let them work on the floor, and a voice that sounds '
        + 'a lot like somebody else\'s mother asks what happens when there is no floor. Here is '
        + 'the honest answer. Nobody builds capacity while they are past their limit. Adults do '
        + 'not learn to tolerate a fire alarm by standing under one. What you are doing when you '
        + 'cut the day in half is not lowering the ceiling, it is lowering the water so they can '
        + 'actually swim in it, and the ones who get that kind of support are the ones who end up '
        + 'with the most room to grow, not the least.',
      'There is a second kind of guilt here that people talk about less, and it is the guilt '
        + 'of being tired. Of loving your kid completely and still wanting 20 minutes where '
        + 'nobody needs anything. Of hearing about the same subject again and feeling your face '
        + 'go stiff. That does not mean you resent who they are. It means you are a person with a '
        + 'limit, parenting someone else with a limit, and the two limits do not always land on '
        + 'the same day. You are allowed to say out loud that it is hard. It does not subtract '
        + 'anything from how much you love them.',
      'One more thing worth putting down. You will get things wrong. You will push on a day '
        + 'you should have folded, you will misread a shutdown as defiance, you will say the '
        + 'thing you wish you hadn\'t. Repair counts more than accuracy, and kids who see a '
        + 'parent come back and say "I got that wrong, I was going too fast" learn something '
        + 'enormous from watching it. You do not have to read your child perfectly. You have to '
        + 'keep coming back, and you clearly already do.',
    ],
  },
  pda: {
    days: [
      {
        name: 'A day where everything lands as a demand',
        looks: 'By breakfast, "do you want juice" got a no, and then the juice you poured anyway got '
          + 'a no, and then not having juice got a no. It is not the tasks, it is that being '
          + 'asked anything at all is the trigger, including the pleasant asks and the ones that '
          + 'are supposedly optional.',
        do: [
          'Cut the day to 3 non negotiables and mean it. Safety, food, and whatever is '
            + 'genuinely time bound. Everything else goes, today, without a discussion about it '
            + 'going.',
          'Switch to declarative language for the whole day. Say what you see or what you are '
            + 'doing, and leave the space for them to step in, such as "these shoes are still by '
            + 'the door" instead of "put your shoes on."',
          'Move the demand off you and onto something neutral. A timer they set, a list on '
            + 'the fridge, a note, an alarm on a speaker. A machine asking is not the same as a '
            + 'person asking.',
          'Build in movement that has no instruction attached, such as putting music on and '
            + 'leaving the room, or going out to the yard yourself and letting them follow. 15 to '
            + '20 minutes of moving before you need anything from them buys you more than any '
            + 'conversation will.',
          'Do the day side by side instead of face to face. Sit next to them, work on your '
            + 'own thing, and let the task happen in parallel rather than being handed over.',
        ],
        say: '"I\'m going to be at the table for a while doing my own stuff. There\'s a chair over '
          + 'here if you end up wanting it."',
      },
      {
        name: 'A day they are driving',
        looks: 'They woke up with a plan of their own, they are building something, they are telling '
          + 'you how it is going to go. There is energy and it is pointed somewhere. This is not '
          + 'them being bossy, this is their nervous system finding the only setting where it '
          + 'feels safe.',
        do: [
          'Get out of the way and let the plan be theirs, even if the plan is inefficient or '
            + 'upside down from how you would do it.',
          'Hide the thing you need inside their plan rather than next to it. If they are '
            + 'running a restaurant, the restaurant needs clean dishes. If they are building a '
            + 'fort, the fort needs the laundry basket carried in.',
          'Use this window for the thing that has been stuck for 3 weeks, once, and then '
            + 'stop. Do not stack a second ask on top of a yes.',
          'Say yes to as many small things as you can today, deliberately, so the ratio of '
            + 'yes to no in their day tilts.',
          'Let the movement be whatever they chose. If they want to be outside for 2 hours, '
            + 'that is your movement block and it is a better one than anything you would have '
            + 'designed.',
        ],
        say: '"You clearly know how this is going. I\'ll follow you."',
      },
      {
        name: 'The day after you held a hard line',
        looks: 'Something was genuinely not optional yesterday, a doctor, a flight, a hard no, and '
          + 'today they are either flat and clingy or firing at you from the moment their eyes '
          + 'open. Trust took a hit and everything is being tested to see if it is still there.',
        do: [
          'Spend the first hour rebuilding rather than requiring. Sit near them, bring food '
            + 'without asking if they want it, say almost nothing.',
          'Name what happened once, honestly, from your side, such as "yesterday was not how '
            + 'either of us wanted it to go." No defense of the decision attached.',
          'Pick 1 thing you had previously said no to and reverse it today, out loud, so they '
            + 'get evidence that you can move.',
          'Keep every demand off the table until after a movement block, ideally something '
            + 'loud and physical for 20 minutes, such as a scooter, a bike, water, or jumping.',
          'Do not add a consequence for yesterday. Yesterday already cost them more than it '
            + 'cost you.',
        ],
        say: '"That was rough and I\'m not going to pretend it wasn\'t. I\'m still here and we\'re '
          + 'fine."',
      },
      {
        name: 'A held it together all day day',
        looks: 'School or co op or grandma\'s says they were lovely, and the second the door shuts '
          + 'at home it comes apart over the wrong cup. The people who saw the good version will '
          + 'tell you it is only a problem with you, which is exactly backwards.',
        do: [
          'Make the first 45 minutes after pickup a no demand zone. No questions about the '
            + 'day, no shoes off instruction, no snack negotiation. Food out, quiet, available.',
          'Move the after school routine to last rather than first. Bags, papers and lunch '
            + 'boxes can wait until after dinner or until tomorrow morning.',
          'Give them something physical and solitary as the decompression, such as 20 minutes '
            + 'on a trampoline, a bath, hanging upside down off the couch, or a walk with no '
            + 'conversation required.',
          'Let the wrong cup be the wrong cup. Fix it if fixing it is cheap. This is not the '
            + 'hill.',
          'If this is the pattern every single day, that is information about the school day, '
            + 'not about your evenings. Write down 2 weeks of it before you next talk to the '
            + 'school.',
        ],
        say: '"You did the whole day out there. In here you don\'t have to do anything for a '
          + 'while."',
      },
    ],
    kit: {
      free: [
        'A whiteboard or paper list on the wall that holds the day, so the list is what asks '
          + 'and you are not.',
        'Two chairs side by side rather than across a table, so nothing has to be handed over '
          + 'face to face.',
        'A clipboard, so the work can go to the floor, the couch, the trampoline or the car '
          + 'and still be the work.',
        'Your own version of the task running next to theirs. Doing your own writing at the '
          + 'table is an invitation, and an invitation is not a demand.',
        'A rule you say out loud that they can leave the table at any time without asking. '
          + 'Removing the trap often removes the need to escape it.',
        'Choices that are real and small, such as which of 2 pages first, or marker or '
          + 'pencil, given as a statement rather than a question.',
      ],
      cheap: [
        'An alarm or a smart speaker timer they set themselves, so the clock gives the cue '
          + 'and you do not.',
        'A resistance band tied across the front chair legs to push against, which gives '
          + 'somewhere for the fight in the body to go while they stay at the table.',
        'A visual timer they control, placed on their side of the table, not yours.',
        'A stack of index cards for writing notes back and forth when talking has become the '
          + 'trigger. Notes work when voices do not.',
        'A cheap lap desk or folding tray table, so the work surface can travel to wherever '
          + 'they are actually willing to be.',
        'Headphones for them and also for you, because being able to lower the volume on the '
          + 'room helps whoever is closest to their limit.',
      ],
      worth_it: [
        'A swing, a hammock chair or a mounted bar somewhere central. Helps a child who '
          + 'regulates through motion and who will use it far more when using it was their idea.',
        'A closing door on a small space, such as a corner with a curtain or a pop up tent. '
          + 'Helps the child who needs to be able to end an interaction without needing '
          + 'permission, and a tent still needs an adult within earshot.',
        'Time with a clinician or coach who already understands demand avoidance, rather than '
          + 'a general behavior program. This matters more here than gear does, because standard '
          + 'reward and consequence systems often make demand avoidance worse and you do not want '
          + 'to spend a year finding that out.',
      ],
    },
    moments: [
      {
        when: 'They will not come to the table and every way I ask makes it worse.',
        why: 'The request itself is the problem, not the table and not the food. For a child with '
          + 'this profile, a direct instruction registers as a loss of control, and losing '
          + 'control registers as danger. That means asking nicely, asking firmly, asking with a '
          + 'reward and asking with a countdown are all the same shape underneath, which is why '
          + 'nothing you try seems to work.',
        do: [
          'Stop asking. Put the food out, sit down, and start eating, and talk about '
            + 'something unrelated.',
          'Narrate instead of requesting, once, such as "there\'s a plate here with your name '
            + 'on it." Then let it sit.',
          'Make coming easy to do without an audience. Look away, keep talking to someone '
            + 'else, leave a chair pulled out.',
          'Let them eat standing up, in the next room, or 15 minutes later. Eating is the '
            + 'goal. Sitting at the table on time was never the goal.',
        ],
        avoid: 'Adding a countdown to make it fair. A 5 minute warning is still a demand with a '
          + 'deadline attached, and a deadline usually raises the panic rather than lowering it.',
      },
      {
        when: 'They shut down completely when I gave a 5 minute warning.',
        why: 'Warnings help a lot of kids and they can backfire here. A warning hands over a fixed '
          + 'point in the future that they cannot move, which is exactly the thing that feels '
          + 'unbearable. The shutdown is not stubbornness, it is a system that has gone still '
          + 'because it sees something coming that it cannot control.',
        do: [
          'Drop the countdown and use a condition instead, such as "we\'re going after this '
            + 'episode" or "once the song ends."',
          'Give them the job of saying when, inside a real range, such as "sometime in the '
            + 'next little while."',
          'If the time truly is fixed, put the fixedness on the outside world, such as "the '
            + 'appointment is at 3, that\'s the clinic\'s clock, not mine."',
          'Once they are shut down, stop adding words. Sit nearby, wait, and let the '
            + 'transition happen late rather than escalating to get it on time.',
        ],
        avoid: 'Repeating the warning in a calmer voice. The calmness is not the issue and the '
          + 'repetition adds pressure.',
      },
      {
        when: 'School says they are completely fine there and then they explode the second they are '
          + 'home with me.',
        why: 'Holding it together all day is work, and it is done by suppressing everything that '
          + 'wants to come out. That suppression has to unload somewhere, and it unloads where it '
          + 'is safest. The explosion at home is not evidence that home is the problem. It is '
          + 'evidence that home is the place they trust enough to stop performing.',
        do: [
          'Protect the first 45 minutes after they get home as a zero demand window, with '
            + 'food available and nobody asking about the day.',
          'Move all after school admin to the evening or the next morning.',
          'Give the body somewhere to unload before you expect any words, such as 20 minutes '
            + 'of something loud and physical.',
          'Keep a simple written log for 2 weeks, including what time it starts and what '
            + 'happened at school that day, and bring the log rather than the story when you talk '
            + 'to the school.',
        ],
        avoid: 'Apologizing to the school for behavior at home. It hands over the frame that the '
          + 'good version is the real one, and the exhausted version is the problem.',
      },
      {
        when: 'They were excited about the thing 10 minutes ago and now they absolutely refuse to '
          + 'go.',
        why: 'Wanting it and being able to do it are two different systems. Once the plan became a '
          + 'plan, it became something expected of them, and expectation is the trigger, even '
          + 'when the expectation is fun. This is one of the most confusing patterns for a '
          + 'parent, because it looks like they are sabotaging their own happiness, and from the '
          + 'inside it is closer to a panic response than a change of mind.',
        do: [
          'Take the pressure off the plan out loud, once, such as "that thing is not '
            + 'compulsory, we can be in the car or in this house, both are fine with me."',
          'Get the boring parts done in the background, such as shoes near the door and keys '
            + 'in your pocket, so going is possible if the window opens.',
          'Go do something neutral for 10 minutes and let the topic drop entirely.',
          'If the window does not open, let it go without a post mortem, and do not mention '
            + 'the wasted ticket.',
        ],
        avoid: 'Reminding them how much they wanted it. That adds shame to a panic, and now there '
          + 'are 2 problems.',
      },
      {
        when: 'They have to go to the doctor and there is no version of this where it is optional.',
        why: 'Some things genuinely cannot be dropped, and pretending otherwise is not honesty. '
          + 'What you can control is how much of it is a surprise, how much of it is yours to '
          + 'hand over, and how much control they get back everywhere else that day.',
        do: [
          'Tell them early, once, in writing, and be completely honest that this one is not a '
            + 'choice. Hidden non negotiables cost more trust than stated ones.',
          'Hand over every real choice inside it, such as who drives, what\'s on in the car, '
            + 'what they wear, whether you speak first, whether they sit on your lap, what '
            + 'happens right after.',
          'Tell the clinic in advance what you need, such as a first appointment of the day, '
            + 'waiting in the car until they are ready, or no small talk.',
          'Clear the rest of the day completely and expect to be rebuilding trust tomorrow, '
            + 'because you will be, and that is the actual cost of the appointment.',
        ],
        avoid: 'Softening it into a surprise to avoid the buildup. The arriving is worse than the '
          + 'knowing, and it costs you the next non negotiable too.',
      },
    ],
    reassure: [
      'The guilt here has a very particular flavor, and it is usually somebody else\'s voice. '
        + 'You are letting them run the house. You are raising a kid who will never take '
        + 'direction. If you just followed through once, they would learn. So let\'s be clear '
        + 'about what you are actually doing. You are not avoiding structure, you are changing '
        + 'where the structure lives, from your mouth into the environment. A list on the fridge, '
        + 'a timer they set, a chair left pulled out. That is not less parenting. It is '
        + 'substantially more work than saying do it now, and it is the version that works for '
        + 'this particular nervous system.',
      'It is also worth naming that you are being asked to do something genuinely '
        + 'counterintuitive. Every instinct, every parenting book, and probably your entire '
        + 'extended family says that when a child refuses, you hold the line. With this profile, '
        + 'holding the line on things that did not matter is what burns the trust you will need '
        + 'for the things that do. Choosing your 3 non negotiables is not giving up. It is '
        + 'deciding where to spend a budget that is real and finite, and you are the only person '
        + 'with enough information to spend it.',
      'And on the days you get it wrong, when you snapped and gave a direct instruction and '
        + 'the whole thing detonated, that is not a setback that undoes your work. You are living '
        + 'at close range with a kid whose alarm system goes off at ordinary requests, and you '
        + 'are a human with your own limit. Repair, rest, and go again tomorrow. The fact that '
        + 'you are reading about declarative language at all tells me this kid has someone in '
        + 'their corner who is willing to learn a whole new way of talking for them. That is not '
        + 'a small thing to have.',
    ],
  },
  sensory: {
    days: [
      {
        name: 'The tank was already full at breakfast',
        looks: 'Before 8am they have complained about the tag, the noise of the cereal, the light in '
          + 'the kitchen and somebody breathing near them. Nothing bad has happened yet. The '
          + 'volume on everything is just turned up, and they have already spent today\'s '
          + 'tolerance getting dressed.',
        do: [
          'Take input out of the room first, before you ask for anything. Overhead light off '
            + 'and a lamp on, background TV or radio off, and whoever is loudest sent somewhere '
            + 'else for 20 minutes.',
          'Let them change into whatever is softest, right now, even if it is pajamas and '
            + 'even if it was yesterday\'s shirt. Clothing comfort is not a battle worth a whole '
            + 'day.',
          'Swap the first academic block for 15 minutes of deep slow input, which for most '
            + 'kids means pushing or pulling something heavy rather than running, such as '
            + 'carrying a full laundry basket, pushing a box of books across the carpet, or a '
            + 'long squeeze under a couch cushion.',
          'Cut work blocks to 10 minutes with a 5 minute movement break between each one, and '
            + 'do 3 of those instead of 1 long stretch.',
          'Put a hard stop on the day earlier than usual, and skip whatever this evening\'s '
            + 'extra was. A full tank in the morning does not empty by 4pm.',
        ],
        say: '"Everything\'s loud today, huh. Let\'s turn the world down before we do anything '
          + 'else."',
      },
      {
        name: 'A crashing and seeking day',
        looks: 'They are on the furniture, into you, hugging too hard, chewing the shirt collar, '
          + 'talking loudly, bumping the walls on the way past. It reads as wild or as not '
          + 'listening. What it usually is, is a body asking for more information about where it '
          + 'is.',
        do: [
          'Feed it on purpose before it gets in trouble. 15 to 20 minutes of heavy work first '
            + 'thing, such as animal walks down the hall, wheelbarrow walking, pushing a loaded '
            + 'wagon, or carrying grocery bags in.',
          'Then put a 5 minute heavy work top up between every single work block, and plan '
            + 'for that instead of being surprised by it. Pushing against a wall for 10 seconds '
            + 'at a time, 6 times, is enough.',
          'Give the mouth and hands legitimate jobs, such as a crunchy snack, a drink through '
            + 'a straw, or something safe to chew, so the shirt collar is not the only option.',
          'Let them work in a position that loads the body, such as standing at a counter, '
            + 'kneeling, or lying on their stomach propped on elbows.',
          'Save any quiet fine motor task for after the movement, never before, and expect '
            + 'handwriting to be the last thing that comes back online.',
        ],
        say: '"Your body needs a big job. Come help me move this, and then we\'ll sit down."',
      },
      {
        name: 'A cover it all up day',
        looks: 'Hood up, hands over ears, eyes down, refusing food they liked last week, wanting the '
          + 'door shut and the room dark, going flat and quiet instead of loud. Sometimes this '
          + 'follows a crashing day and sometimes it arrives on its own.',
        do: [
          'Reduce, do not add. This is the day to take things away, not to offer a new fidget '
            + 'or a new activity.',
          'Give them a small enclosed place with dim light for 30 to 45 minutes with no '
            + 'demands, such as a tent, a closet with the door open, or under a table with a '
            + 'blanket over it.',
          'Keep movement gentle and predictable rather than exciting. Slow rocking, a slow '
            + 'walk, a warm bath, or being squeezed in a blanket for a minute at a time, with '
            + 'them asking for it.',
          'Move to 1 sense at a time for the rest of the day. If they are listening, do not '
            + 'also expect eye contact. If they are eating, do not also talk.',
          'Drop food to whatever they will actually eat today, even if it is 2 things. A '
            + 'shutdown day is not the day to expand the menu.',
        ],
        say: '"I\'m going to stop talking and stop turning things on. Tell me when you want more '
          + 'than that."',
      },
      {
        name: 'A day the volume is normal',
        looks: 'The tag is not a problem, dinner smells fine, they are in the room with everybody. '
          + 'Nothing was different about the morning. Take it and use it.',
        do: [
          'Do the sensory hard thing today, in 1 short attempt, such as the haircut, the nail '
            + 'trim, standing in the shower, or a new food touched to the lip. 5 minutes of it, '
            + 'then stop early while it is still going well.',
          'Still run the movement block. The best days are the ones where you kept doing the '
            + 'thing that was working, and a lot of families stop on good days and wonder why the '
            + 'next day is bad.',
          'Get in the practice that needs a calm body, such as a slightly longer work block '
            + 'or a busier store.',
          'Write down 4 things about this morning, including sleep, breakfast, weather, what '
            + 'clothes they chose. Do it 5 times and you will start seeing your child\'s actual '
            + 'pattern, which no assessment can hand you.',
        ],
        say: '"Today feels easier in your body. Want to try the hard thing while it\'s easy?"',
      },
    ],
    kit: {
      free: [
        'A laundry basket loaded with books or canned goods, carried, pushed and dragged. '
          + 'Heavy work is the most useful free tool in the house and it costs nothing.',
        'The overhead light off and a single lamp on, plus a hood or a cap for cutting glare '
          + 'and side vision.',
        'A sofa cushion sandwich, where they lie between 2 cushions and you press gently for '
          + 'as long as they ask for it and stop the second they say stop.',
        'Cold water in a bottle with a narrow opening or a straw. Sucking and drinking cold '
          + 'are both organizing for a lot of kids and you already own both.',
        'A wall push, done standing 2 feet from a wall, palms flat, pushing for 10 seconds, 6 '
          + 'times. It resets a lot of bodies before a task and takes 2 minutes.',
        'A blanket over a card table, or a corner behind the couch, as a dim small place to '
          + 'go without leaving the family.',
      ],
      cheap: [
        'A resistance band tied across the front 2 legs of a chair to push feet against, '
          + 'which lets a body that needs to move do it without leaving the seat.',
        'Over the ear noise reducing earmuffs for loud rooms, plus filtered earplugs with a '
          + 'small vent for places they still want to hear in.',
        'Sunglasses kept in the car and allowed indoors, plus a warmer or dimmable bulb for '
          + 'the work lamp.',
        'A weighted lap pad of about 3 to 5 pounds for table time only, used while you are in '
          + 'the room. Never for sleep, never so heavy they cannot lift it off themselves, and '
          + 'never near the head or neck.',
        'Chewable jewelry on a breakaway cord, for older kids who are chewing shirts and '
          + 'pencils. This one has a real choking and gagging risk, so it is not appropriate for '
          + 'a child under about 3, or for any child who bites pieces off, and it needs checking '
          + 'for wear every few days and throwing out at the first tear.',
        'Crunchy and chewy snacks kept where they can reach them, plus a straw cup, because '
          + 'the mouth is one of the fastest routes to a calmer body.',
      ],
      worth_it: [
        'A swing, a hammock or a mounted bar. Helps the child who visibly changes after being '
          + 'upside down, spinning or hanging, and the honest test is whether they seek it out '
          + 'themselves rather than whether a catalog said they would.',
        'A body sock or a stretchy fabric tube. Helps some kids who want whole body pressure, '
          + 'and it must be used with an adult in the room every single time, never over the '
          + 'head, and never by a child who cannot get out of it on their own.',
        'A pop up tent or a small enclosed pod in a corner of a main room. Helps the child '
          + 'who needs to reduce input without being sent away, and an adult stays within sight '
          + 'and earshot.',
        'An evaluation with an occupational therapist, with your expectations set correctly. '
          + 'Here is the honest picture. Sensory processing disorder is not a stand alone '
          + 'diagnosis in the main diagnostic manuals, and the American Academy of Pediatrics has '
          + 'said the evidence for sensory integration therapy as a treatment is limited and '
          + 'inconclusive. A 2025 systematic review of sensory based interventions found deep '
          + 'pressure and training the caregiver had the best support, and found weighted vests, '
          + 'alternative seating such as balls and wobble stools, and noise canceling headphones '
          + 'did not show significant effects on the outcomes measured. None of that means your '
          + 'child\'s comfort is imaginary. A child who can sit through dinner with earmuffs on '
          + 'is genuinely sitting through dinner, and a kid who is calmer after carrying the '
          + 'laundry basket is calmer. What the research is saying is that no one should sell you '
          + 'a long expensive program with a promise attached, and what a good occupational '
          + 'therapist is really worth is an hour of watching your actual morning and your actual '
          + 'desk, then handing you 3 things to change. Buy the observation, not the '
          + 'subscription.',
      ],
    },
    moments: [
      {
        when: 'Getting dressed ends in tears almost every morning.',
        why: 'For a lot of kids the clothing is not a preference, it is a signal that will not '
          + 'stop arriving. Most of us stop noticing a waistband in about 20 seconds, and some '
          + 'nervous systems keep reporting it all day at full volume. Seams, tags, socks and '
          + 'anything tight at the waist are the usual suspects, and the fight is usually about 1 '
          + 'or 2 specific sensations rather than about clothes in general.',
        do: [
          'Find the actual culprit by elimination, not by discussion. Try the same outfit '
            + 'with the socks inside out, then with a different waistband, then with the tag cut '
            + 'out, and change 1 thing at a time.',
          'Buy 4 or 5 of whatever works and stop shopping. A uniform is a completely '
            + 'reasonable solution and nobody at the store is grading you.',
          'Do 10 minutes of movement before getting dressed rather than after. A body that '
            + 'has already moved tolerates clothing better than a body coming straight out of '
            + 'bed.',
          'Let them dress in the order and position they want, including lying on the floor, '
            + 'and lay clothes out in a line the night before so no decisions happen at 7am.',
        ],
        avoid: 'Telling them it does not feel like anything. It does, to them, and the moment they '
          + 'learn you do not believe the reports they stop telling you what is wrong.',
      },
      {
        when: 'Haircuts, nail trims and tooth brushing are a battle every single time.',
        why: 'All 3 of these have the same ingredients, which are someone else touching them, in a '
          + 'way they cannot predict, near the head, with something sharp or buzzing, and no '
          + 'clear end point. The resistance is usually about unpredictability and lack of '
          + 'control far more than about pain.',
        do: [
          'Give the end a number before you start, out loud, and then honor it exactly. 10 '
            + 'brush strokes, 2 nails, counted, and you stop at the number even if it looks like '
            + 'you could get 1 more.',
          'Hand over the control that can be handed over, such as who does it, where they '
            + 'sit, which hand first, and a stop word that actually stops you every time.',
          'Add firm pressure before the light touch. A hard scalp squeeze before a haircut, '
            + 'or pressing on the fingertips before nail trimming, makes the light unpredictable '
            + 'touch land less sharply for a lot of kids.',
          'Split the job into 4 sessions across a week instead of 1 session that ends in '
            + 'tears. 2 nails on Monday is a success, not a failure.',
        ],
        avoid: 'Pushing through to get it done while they scream because it needs finishing. It '
          + 'works once, and it costs you the next 10 attempts.',
      },
      {
        when: 'They chew through every shirt collar, sleeve and pencil we own.',
        why: 'Chewing is heavy work for the jaw, and the jaw is one of the most reliable places to '
          + 'send calming input. A child who is chewing constantly is usually self medicating for '
          + 'a body that needs more input than the day is giving it, and it tends to spike during '
          + 'hard cognitive tasks and in the late afternoon.',
        do: [
          'Get ahead of it with the mouth\'s real job, such as crunchy food at the start of '
            + 'the work block and a cold drink through a straw during it.',
          'Give a safe designated alternative if they are old enough, such as chewable '
            + 'jewelry on a breakaway cord, inspected every few days and thrown out at the first '
            + 'tear. Skip this entirely for young children who might bite pieces off.',
          'Add 10 minutes of whole body heavy work before the task where the chewing spikes. '
            + 'Often the collar chewing drops when the body got fed first.',
          'Stop drawing attention to it in the moment. Hand over the alternative silently and '
            + 'move on.',
        ],
        avoid: 'Making the ruined shirts into a conversation about money or carelessness. It adds '
          + 'shame to something that is not a choice, and the shirts were already ruined.',
      },
      {
        when: 'They cannot sit still long enough to finish a 20 minute worksheet.',
        why: 'For many kids, holding a body still is an active job, and it is running at the same '
          + 'time as the reading and the writing. So the worksheet is not competing with 20 '
          + 'minutes of attention, it is competing with what is left after sitting still took its '
          + 'cut. Movement is not the opposite of focus here, it is often what pays for it.',
        do: [
          'Put 10 to 15 minutes of movement immediately before, and make it heavy rather than '
            + 'just fast, such as carrying, pushing, climbing or hanging.',
          'Cut the 20 minutes into 2 blocks of 8 with a 5 minute movement break between, and '
            + 'set a visual timer so the end is visible.',
          'Change the position, not the child. Standing at a counter, kneeling at a coffee '
            + 'table, or lying on the floor with a clipboard all count.',
          'Put a resistance band across the front chair legs and let the feet work the whole '
            + 'time, and be honest that this helps some kids a lot and does nothing for others. '
            + 'Give it a week and judge by what you see, because the research on seating and '
            + 'movement equipment is genuinely mixed.',
        ],
        avoid: 'Requiring the sitting still as a condition of the work being finished. You end up '
          + 'grading the sitting, and the work gets lost.',
      },
      {
        when: 'Dinner ends in gagging and I know they are not being dramatic.',
        why: 'Smell and texture arrive before taste does, and for some kids the smell of a food '
          + 'across the room is already too much. Gagging is a real reflex and not a performance. '
          + 'The fear underneath it, once it has happened a few times at the table, becomes its '
          + 'own problem on top of the food.',
        do: [
          'Take the smell down first. Lid on the pot, extractor fan on, window open, and '
            + 'their plate served before the strong dish comes out.',
          'Give them a safe distance. A separate small plate, or the other end of the table, '
            + 'is a legitimate accommodation and not a defeat.',
          'Always have 2 foods on the table they will definitely eat, so the meal is never '
            + 'all risk.',
          'Keep exposure tiny and pressure free, such as a new food on the plate with no '
            + 'expectation to touch it, for 10 meals in a row. If weight, growth or the number of '
            + 'accepted foods is genuinely shrinking, that is a conversation for your '
            + 'pediatrician and a feeding therapist rather than something to keep working on '
            + 'alone.',
        ],
        avoid: 'The 1 bite rule. It reliably turns a sensory problem into an anxiety problem, and '
          + 'then you are solving 2 things.',
      },
    ],
    reassure: [
      'Here is the guilt I hear most with this one. Somebody, probably somebody who loves '
        + 'you, has told you that you are indulging it. That in their day kids ate what was on '
        + 'the plate and wore what they were given. And you are standing in a kitchen at 7am '
        + 'cutting a tag out of a shirt wondering if you are making your child fragile. You are '
        + 'not. A child telling you the seam hurts is giving you accurate information about the '
        + 'inside of their own body, which is the only place they have first hand access to and '
        + 'you do not. Believing them is not spoiling them. It is the thing that keeps them '
        + 'telling you.',
      'The second thing that gets tangled up here is money, and I want to be straight with '
        + 'you about it, because this is an area where families get sold a lot. Sensory '
        + 'processing disorder is not a stand alone diagnosis in the main diagnostic manuals, and '
        + 'the American Academy of Pediatrics has said the evidence for sensory integration '
        + 'therapy is limited and inconclusive. A recent systematic review found that the '
        + 'strongest support went to deep pressure and to teaching the caregiver, and that '
        + 'several of the most heavily marketed items, including weighted vests and wobble '
        + 'seating, did not show the effects their marketing claims. So if you cannot afford the '
        + 'swing, the pod, the pricey program, you are not withholding treatment from your child. '
        + 'The laundry basket and the lamp and the earmuffs and you, watching carefully and '
        + 'adjusting, are doing a lot of the actual work.',
      'And none of that research means your child\'s comfort does not count. This is the part '
        + 'people get wrong in both directions. A kid who can stay at a birthday party with '
        + 'earmuffs on is at the birthday party. A kid who is calmer after carrying the groceries '
        + 'in is calmer. You do not need a diagnosis, a study or anyone\'s permission to keep '
        + 'doing the thing that visibly makes your child\'s day survivable. Keep notes, keep what '
        + 'works, drop what does not, and let go of the idea that there is a correct program out '
        + 'there you have failed to find. You are already running the most informed experiment '
        + 'anyone could run on this particular child.',
    ],
  },
  selectiveMutism: {
    days: [
      {
        name: 'A brand new place day',
        looks: 'There is a new building, a new teacher, a new group or a new relative in the plan, '
          + 'and by breakfast they are quiet, close to you, asking what will happen, or '
          + 'complaining their stomach hurts. The voice you heard yesterday is already getting '
          + 'smaller.',
        do: [
          'Get there 15 or 20 minutes early so they can be in the empty room before it fills. '
            + 'Walking into a room that is already loud costs 10 times more than being there '
            + 'first.',
          'Tell them explicitly, before you leave the house, that nobody is going to make '
            + 'them talk today, and that you will not answer for them either.',
          'Give the new adult a heads up in writing beforehand, in 3 sentences, saying the '
            + 'child talks freely at home, needs no questions for the first few visits, and can '
            + 'point or nod.',
          'Bring 1 physical way to participate that needs no voice, such as a card to hand '
            + 'over, a job to do, or a drawing to work on at the table.',
          'Plan something low demand and physical directly after, such as 20 minutes at a '
            + 'park with nobody to greet, because holding still and silent is exhausting work.',
        ],
        say: '"Nobody\'s going to make you talk today. You can point, or nod, or just hang out, '
          + 'and that counts as being there."',
      },
      {
        name: 'A frozen day',
        looks: 'You can see it in the body before you notice the silence. Still shoulders, flat '
          + 'face, eyes down, not moving toward anything, and even at home the answers get '
          + 'shorter. Often this follows a day where somebody put them on the spot.',
        do: [
          'Drop all speaking expectations for the whole day, including at home, including '
            + 'with you, and say so out loud once.',
          'Move to nonverbal channels for everything today, such as pointing at a menu of '
            + 'options, writing notes back and forth, thumbs up or down, or typing.',
          'Give them a physical job in the middle of any social setting, such as handing out '
            + 'cups or carrying something, because having a role removes the pressure to have a '
            + 'line.',
          'Add 15 to 20 minutes of movement that has nobody watching, such as a walk, a bike, '
            + 'or a trampoline, before any social thing today.',
          'Keep 1 familiar person nearby and cut the number of new faces to the lowest you '
            + 'can manage.',
        ],
        say: '"Your words are stuck today and that\'s allowed. I\'m not going anywhere."',
      },
      {
        name: 'A day their voice is available',
        looks: 'They whispered to a cousin, they answered the librarian, they said 1 word at drop '
          + 'off. Something opened a crack. You will want to celebrate loudly and that is exactly '
          + 'the instinct to hold.',
        do: [
          'Do not comment on it in the moment. No look, no gasp, no squeezing their arm. Keep '
            + 'your face completely normal and keep the conversation moving.',
          'Use the window for 1 small step, right now, while it is open, such as ordering '
            + 'their own drink with you standing beside them, or saying 1 word to a person they '
            + 'have already spoken to once.',
          'Mention it later and privately, if at all, and make it about effort rather than '
            + 'about speech, such as "that was a brave one today."',
          'Repeat the exact conditions next time. Same person, same place, same time of day. '
            + 'Brave voices come back to the setting where they worked before.',
          'Do not ask them to do it again for anyone. Not for grandma on the phone, not for '
            + 'the other parent. Performing on request usually closes the crack.',
        ],
        say: '"I liked hanging out with you today."',
      },
      {
        name: 'The day after somebody put them on the spot',
        looks: 'A teacher asked them to read aloud, or a relative kept asking why they will not say '
          + 'hello, and today they do not want to go back, they are clingy, or they are angry at '
          + 'you. Trust took the hit, not just the voice.',
        do: [
          'Believe them and say so first, before anything practical. "That was unfair and I '
            + 'should have stepped in."',
          'Fix the environment rather than coaching the child. Email the teacher or call the '
            + 'relative yourself, today, and say plainly what you need instead.',
          'Return to the setting soon but in the smallest version of it, such as 10 minutes '
            + 'in the empty classroom after hours, or 1 cousin instead of 8.',
          'Take every speaking expectation to zero for 2 or 3 days, and let their voice come '
            + 'back on its own timetable.',
          'Keep 1 routine completely unchanged so the day still has a shape they recognize.',
        ],
        say: '"That should not have happened to you. I\'m going to handle the grown ups."',
      },
    ],
    kit: {
      free: [
        'A yes card and a no card, 2 index cards, kept in a pocket, so a question can be '
          + 'answered without a voice.',
        'A written note in your handwriting for the teacher or the host, 3 sentences long, '
          + 'handed over at the door, so your child never has to explain themselves.',
        'A job to hold, such as passing out papers, carrying the bag, or feeding the dog, so '
          + 'being in the room does not require a line of dialogue.',
        'A silent count of 5 that you do in your head after any question, so nobody fills the '
          + 'gap for them. Most of us wait 2 seconds and then rescue.',
        'One familiar person, arranged in advance, in any new room. A known face lowers the '
          + 'cost of the whole setting.',
        'A voice recording made at home on your phone, in their own voice, that they can play '
          + 'in the new place if they want to. Their voice arriving before they do helps some '
          + 'kids enormously.',
      ],
      cheap: [
        'A small notebook and pen kept in a pocket or backpack, so writing is always '
          + 'available as a channel.',
        'A printed strip of 6 or 8 common phrases to point at, such as bathroom, help, I '
          + 'don\'t know, and I need my mom.',
        'A fidget that keeps the hands busy under a table, which gives the body somewhere to '
          + 'put the anxiety while the mouth is stuck.',
        'A lanyard card that says something like "I\'m working on talking to new people, '
          + 'please don\'t ask me questions yet," for a child who wants one.',
        'A visual timer for warm up time in a new place, so they can see that the hard 10 '
          + 'minutes has an end.',
        'A pack of cards or a simple game to bring along, because a game is a script and a '
          + 'script is easier than open conversation.',
      ],
      worth_it: [
        'Time with a clinician who specifically knows selective mutism, such as a speech '
          + 'language pathologist or psychologist with real experience in it. This matters more '
          + 'here than any object does, because generic shyness advice and generic reward charts '
          + 'often make it worse, and the specific techniques are the ones with support behind '
          + 'them.',
        'A tablet or phone with a simple text or typing app, if they do not already have one. '
          + 'Helps a child who can produce language easily in writing and not at all out loud, '
          + 'and it takes the pressure off the voice being the only route.',
        'A short 1 on 1 or small group activity, paid if you can, such as a 3 child art class '
          + 'or a private lesson. Helps because small rooms with predictable people are where '
          + 'voices come back, and a large class rarely is.',
      ],
    },
    moments: [
      {
        when: 'A relative asks why she won\'t say hi and I can feel the whole room waiting.',
        why: 'This is not shyness and it is not rudeness. It is an anxiety response in which '
          + 'speech becomes physically unavailable in specific settings, while being completely '
          + 'available at home. The room waiting is the single most reliable way to make it '
          + 'worse, because the pressure is what is causing the freeze, and 6 people watching is '
          + 'more pressure, not less.',
        do: [
          'Step in immediately and take the question yourself, in a light voice, such as "she '
            + 'does her hellos with a wave."',
          'Redirect the relative to a parallel activity rather than a conversation, such as '
            + '"she\'d love to show you the dog."',
          'Do not look at your child while you do it. Your eyes on them adds to the pressure.',
          'Say something later, privately, to the adult, and be specific about what you need '
            + 'next time, such as no questions and no comments about talking.',
        ],
        avoid: 'Explaining to the relative while your child stands there listening. Even a kind '
          + 'explanation makes the silence the topic of the room, and they will remember being '
          + 'the subject.',
      },
      {
        when: 'The teacher wants her to read aloud or present, and it is part of her grade.',
        why: 'Being graded on the exact thing anxiety has taken away puts a child in an impossible '
          + 'position, and pushing through it does not build tolerance, it usually builds '
          + 'avoidance of the whole setting. Schools generally do not know this, and most will '
          + 'work with you once they understand it is an anxiety response and not a preference.',
        do: [
          'Ask for the same skill through a different channel, in writing, such as a video '
            + 'recorded at home, a reading to the teacher alone after class, or a written '
            + 'version.',
          'Ask for a ladder rather than an exemption, such as reading to the teacher alone '
            + 'first, then with 1 friend present, then to a group of 3.',
          'Get whatever is agreed written down in a plan, so a substitute teacher cannot undo '
            + 'it in a single afternoon.',
          'Tell your child the plan before they hear it at school, so they are never '
            + 'surprised by what is being asked.',
        ],
        avoid: 'Coaching your child to just try it once so they can see it is fine. If it does not '
          + 'go fine, the cost lands on them and not on the assignment.',
      },
      {
        when: 'She talks nonstop at home and does not say 1 word at co op.',
        why: 'This is the most common shape of it and it is often misread as a choice, because the '
          + 'ability to speak is clearly there. It is not a choice about where to bother talking. '
          + 'The setting itself determines whether speech is available, and home is where it is. '
          + 'The gap between the 2 versions of your child is the clearest evidence of anxiety, '
          + 'not the clearest evidence against it.',
        do: [
          'Make joining in possible without speech first, and say so out loud to her and to '
            + 'the adults there. A child who participates silently for a month is making real '
            + 'progress.',
          'Shrink the group. Invite 1 child from co op to your house, where her voice already '
            + 'works, and let the friendship start where speech is available.',
          'Then move that same friendship to a neutral place, such as a park, before you '
            + 'expect anything at the co op itself.',
          'Keep the adults there consistent if you can, and brief them in writing on no '
            + 'questions for the first several weeks.',
        ],
        avoid: 'Making speech the price of joining in, such as needing to say hello to get in the '
          + 'door or to get a turn. It reliably turns the whole activity into something to avoid.',
      },
      {
        when: 'She needs to order her own food and I always end up doing it for her.',
        why: 'Ordering for her is the kind thing to do in the moment and it is also the thing that '
          + 'keeps the pattern going, because it removes the situation before her body ever gets '
          + 'to learn it is survivable. The way out is not to stop helping. It is to make the '
          + 'help smaller in steps that are small enough to actually succeed at.',
        do: [
          'Break it into steps and take weeks, not days. Pointing at the item, then handing '
            + 'over a written order, then saying the word with you saying it at the same time, '
            + 'then saying it alone.',
          'Pick 1 place and go to the same one 6 times. Familiarity does more work than '
            + 'courage does.',
          'Stand slightly behind her rather than beside her, so she is facing the counter and '
            + 'not you.',
          'Wait a full 5 seconds, silently, every time. If the words do not come, hand over '
            + 'the written order without a sigh and without a comment, and try the same step '
            + 'again next week.',
        ],
        avoid: 'Stepping in at second 2 because the line is waiting. The waiting feels enormous to '
          + 'you and the strangers behind you have completely forgotten it by the parking lot.',
      },
      {
        when: 'She finally spoke to someone new, I made a big happy deal about it, and now she has '
          + 'gone quiet again.',
        why: 'This happens to nearly everyone and it comes from love, so put the self blame down. '
          + 'Praise turns a private moment into a public one and makes the speaking visible, '
          + 'which is exactly the thing anxiety is monitoring for. Now the next word carries an '
          + 'audience with it.',
        do: [
          'Go back to completely neutral. No mention of it, no asking her to do it again, no '
            + 'telling the other parent in front of her.',
          'Recreate the exact conditions that worked. The same person, the same room, the '
            + 'same time of day.',
          'If you praise at all, do it privately and aim it at the effort rather than the '
            + 'speech, such as "that was a hard room today and you stayed in it."',
          'Let it take a few weeks to come back. It does come back, and nothing was undone.',
        ],
        avoid: 'Apologizing to her for making a fuss. It puts the topic right back in the room, '
          + 'which is what you are trying to get out of it.',
      },
    ],
    reassure: [
      'The guilt that comes with this one usually has 2 heads. The first says you are '
        + 'enabling it. You answer for her, you order the food, you wave for her, and somewhere a '
        + 'voice says that if you would just stop rescuing, she would have to talk. The second '
        + 'says it is your fault to begin with, that she got your nerves, or that something you '
        + 'did made her this way. Neither one is holding up. Speech in specific settings is not '
        + 'available to her the way it is to other kids, and no amount of being left to sink '
        + 'produces it. What does help is making rooms smaller, making speech optional, and '
        + 'shrinking your help one step at a time rather than pulling it away all at once. That '
        + 'is what you are doing.',
      'Something nobody tells you is how lonely it is to be the parent of the quiet one. '
        + 'Other parents are chatting at pickup while you are managing a whole situation with '
        + 'your eyes. Relatives think they are helping. You spend a lot of energy protecting her '
        + 'from questions and then you go home and she talks your ear off for 2 hours and you are '
        + 'the only person on earth who knows how funny she is. That gap is real, and carrying '
        + 'the knowledge of who your kid is when nobody else can see it is genuinely heavy. It is '
        + 'worth saying out loud to somebody.',
      'And she will be fine, in the sense that matters. Not because it goes away by itself, '
        + 'but because the specific things that help are known and workable, and because the '
        + 'single biggest predictor of a kid moving through this is an adult who stops making '
        + 'speech the price of belonging. That is the whole thing. Keep her in rooms, keep the '
        + 'pressure off, get a clinician who knows this particular territory when you can, and '
        + 'let her be the silent kid who is fully included rather than the talking kid who got '
        + 'there by force. She is listening to everything, and she knows exactly what you have '
        + 'been doing for her.',
    ],
  },
  ocd: {
    days: [
      {
        name: 'A stuck on one thing day',
        looks: 'By breakfast there is 1 question coming back around, worded slightly differently '
          + 'each time, and your answer is not sticking. It may be about illness, safety, whether '
          + 'something is fair, or whether something bad will happen, and the tone is urgent '
          + 'rather than curious.',
        do: [
          'Decide your response once, early, and write it on a card so you are not inventing '
            + 'it 14 times under pressure. One short sentence, same words every time.',
          'Do not change the day around the topic. Same meals, same order, same bedtime, '
            + 'because a day that reorganizes itself around a worry teaches that the worry is in '
            + 'charge.',
          'Front load something physical, 20 minutes, before the first stretch of quiet time, '
            + 'such as a walk, a bike ride, or shooting hoops. Bodies that have moved tend to '
            + 'loop a little less, and quiet unoccupied time is where looping lives.',
          'Keep work in 15 minute blocks with something active in between, and put the '
            + 'hardest block before lunch when there is more capacity.',
          'Tell them once, plainly, that you are on their side and not on the worry\'s side, '
            + 'and then stop explaining.',
        ],
        say: '"I can see that question is really loud today. I already gave you my answer and I '
          + 'love you too much to keep feeding it."',
      },
      {
        name: 'A checking day',
        looks: 'Doors, locks, backpacks, whether the oven is off, whether they said something wrong '
          + 'yesterday. They are retracing, going back into rooms, or asking you to confirm. '
          + 'Getting out of the house takes 4 times as long as it should.',
        do: [
          'Add 20 minutes to the front of the schedule today instead of fighting the clock. '
            + 'Time pressure makes checking worse, every single time.',
          'Let them do a check once, and hold the line only where you and their clinician '
            + 'have already agreed to hold it. Do not pick new battles at 7:40am.',
          'Give the transition a physical anchor instead of a verbal one, such as carrying '
            + 'something out to the car, so leaving has a job attached to it.',
          'Build in 2 short movement breaks across the day, 10 minutes each, and put them '
            + 'right before the times when checking usually spikes.',
          'Write down what time it spiked and what came before it. Patterns here are useful '
            + 'to the person treating them and nearly impossible to remember by Friday.',
        ],
        say: '"You checked it once and I saw you do it. We\'re going to walk out with the '
          + 'uncertainty today, together."',
      },
      {
        name: 'A day everything is a threat',
        looks: 'Sleep was short, or they are getting sick, or something big happened at school, and '
          + 'today the volume on everything is up. More rituals, more asking, more distress, and '
          + 'things that were fine last week are suddenly not fine. This is a flare, not a '
          + 'failure.',
        do: [
          'Lower the total load on the day by about a third, but do not lower it around the '
            + 'specific worry. Fewer errands, not fewer habits.',
          'Hold the ground you already hold and do not attempt any new step today. Flares are '
            + 'for maintaining, not for progress.',
          'Move bedtime 30 minutes earlier and protect it, because short sleep reliably makes '
            + 'this louder.',
          'Add 1 longer block of physical activity, 30 minutes, ideally outside, and make it '
            + 'something they actually enjoy rather than a prescribed exercise.',
          'Tell their clinician about the flare rather than waiting for the next scheduled '
            + 'session. This is the kind of information that changes a plan.',
        ],
        say: '"Today the alarm in your brain is turned way up. It\'s not telling the truth just '
          + 'because it\'s loud."',
      },
      {
        name: 'A quiet day',
        looks: 'The questions have loosened, they are absorbed in something, the getting out the '
          + 'door took a normal amount of time. It is tempting to tiptoe around it and hope it '
          + 'lasts.',
        do: [
          'Do not tiptoe. Behave completely normally, because normal is what you are '
            + 'teaching.',
          'Use it for the family things the hard days eat, such as going somewhere new, '
            + 'having a friend over, or a longer outing.',
          'If you are working with a clinician and they have given you a step, this is the '
            + 'day to take it, once, and only the step you were actually given.',
          'Talk about something entirely unrelated to the worry for most of the day. Kids in '
            + 'this territory get very used to being a topic.',
          'Note what today looked like, because this is the baseline you are working toward '
            + 'and it helps enormously to have seen it in writing.',
        ],
        say: '"It\'s nice having a regular day with you."',
      },
    ],
    kit: {
      free: [
        'One written sentence on an index card on the fridge, agreed by everyone in the '
          + 'house, that is the family\'s answer to the repeated question. Same words from every '
          + 'adult.',
        'A clock built into the morning with 20 extra minutes in it, because time pressure is '
          + 'one of the most reliable amplifiers.',
        'A notebook where a question can be written down to bring to the next appointment, '
          + 'which gives the urge somewhere to go that is not your mouth.',
        'A daily walk or bike ride at the same time, which is free and which gives the day a '
          + 'structure the worry did not choose.',
        'Twenty minutes of parent time that is completely off topic, such as cooking together '
          + 'or a card game, where the subject is not allowed to be the worry.',
        'A house rule that the adults do not debate the worry with each other in front of the '
          + 'child, agreed out loud.',
      ],
      cheap: [
        'A visual timer, used for the things you and the clinician have agreed to time, such '
          + 'as how long a bedtime routine gets.',
        'A wall calendar with the appointments on it, so the child can see that help is '
          + 'scheduled and happening.',
        'A fidget or a squeeze ball for the hands during the waiting that follows not doing a '
          + 'ritual. It does not treat anything, it just gives a body somewhere to be.',
        'A copy of a well reviewed parent workbook on childhood anxiety and obsessive '
          + 'compulsive difficulties, used alongside a clinician rather than instead of one.',
        'A cheap pair of headphones and a playlist or audiobook for the drive, which cuts the '
          + 'amount of unoccupied time where looping happens.',
        'A shared paper log kept on the counter, 2 lines a day, tracking what spiked and '
          + 'when. This is the single most useful thing you can bring to an appointment.',
      ],
      worth_it: [
        'Sessions with a clinician trained specifically in exposure and response prevention '
          + 'for children. This is the part that actually treats it, and it is worth calling 6 '
          + 'places to find someone who names that training. Be direct on the phone and ask '
          + 'whether they do exposure and response prevention with kids, because plain talk '
          + 'therapy and reassurance based counseling are not the same thing and can leave '
          + 'families stuck for years.',
        'Family sessions included in that treatment, not just child sessions. Reducing the '
          + 'amount the family accommodates the worry is one of the most important parts of the '
          + 'work, and it is done with guidance rather than figured out alone at the kitchen '
          + 'table.',
        'Something physical and absorbing they choose themselves, such as a season of a '
          + 'sport, a martial art, or climbing. This is not a treatment and nobody should sell it '
          + 'as one. It is a reliable source of hours where they are in their body and not in '
          + 'their head.',
      ],
    },
    moments: [
      {
        when: 'They\'re asking me for the fourth time tonight if I\'m sure, and they\'re crying, '
          + 'and it would take 2 seconds to just say it again.',
        why: 'Here is the mechanic underneath it. Your answer does bring relief, and the relief '
          + 'lasts about 90 seconds, and then the doubt comes back slightly stronger, because the '
          + 'brain just learned that the only way to survive that feeling was to get an answer '
          + 'from you. That is why the fourth time does not settle it and the fifth will not '
          + 'either. You are not failing to explain well enough. The loop is fed by the '
          + 'answering, not by the content.',
        do: [
          'Answer once, fully and kindly, the first time. That is information and it is fine.',
          'After that, switch to the same short sentence every time, decided in advance, such '
            + 'as "I\'ve given you my answer and I\'m not going to answer that one again '
            + 'tonight."',
          'Stay physically close while you do not answer. Sit next to them, hand on their '
            + 'back. You are removing the reassurance, not your presence.',
          'Bring this exact pattern to their clinician and ask for a specific plan for it, '
            + 'because how fast you reduce reassurance matters and that pacing is a clinical '
            + 'decision, not a parenting one.',
        ],
        avoid: 'Explaining it better and longer, with more evidence. A more thorough answer is a '
          + 'bigger meal for the loop, and you will both be up an hour later.',
      },
      {
        when: 'I have been doing the routine with them for months, and now it is 40 minutes of my '
          + 'night, and I do not know how to stop.',
        why: 'This has a name in the research, which is family accommodation, and nearly every '
          + 'family does it, because in the short term it ends the distress and gets everybody to '
          + 'bed. Over time it grows, because the routine expands to fill whatever it is allowed '
          + 'to fill, and the child never gets to find out that they could have gotten through '
          + 'without it. You did not cause this by participating. You were doing what any loving '
          + 'parent does.',
        do: [
          'Write down exactly what you currently do, in order, with times. All of it, without '
            + 'softening it. This list is the most useful document in the process.',
          'Take that list to the clinician and build a plan to reduce it in steps, agreed '
            + 'with your child where possible, starting with the smallest piece.',
          'Get every adult in the house onto the same plan, in writing, because 1 person '
            + 'still doing the routine keeps the whole thing alive.',
          'Change 1 piece at a time and expect it to get louder before it gets quieter. That '
            + 'spike is normal and it is not evidence you did the wrong thing.',
        ],
        avoid: 'Stopping all of it overnight to get it over with. It usually ends in a night nobody '
          + 'recovers from, and then the routine comes back bigger.',
      },
      {
        when: 'The bedtime routine has grown from 10 minutes to over an hour and it gets longer '
          + 'every week.',
        why: 'Routines that must be done in an exact order, and restarted if interrupted, grow by '
          + 'their nature. Each addition felt small on the night it appeared. Bedtime is also '
          + 'when it tends to be worst, because the day is over, the body is tired, and there is '
          + 'nothing left to occupy the mind.',
        do: [
          'Cap the clock rather than arguing about the content. Agree, with the clinician, on '
            + 'a total length, and use a visible timer.',
          'Move the wind down earlier so the whole thing is not happening at the edge of '
            + 'exhaustion.',
          'Fill the last hour before bed with something absorbing and low stakes, such as an '
            + 'audiobook or being read to, because occupied minds loop less.',
          'Keep the adult in the room and the affection completely intact while the routine '
            + 'shrinks. The child needs to lose the ritual, not the company.',
        ],
        avoid: 'Negotiating the order and the details in the moment at 9:30pm. You will lose, '
          + 'because they are more motivated than you are at that hour, and the negotiating '
          + 'itself becomes part of the ritual.',
      },
      {
        when: 'I read about exposure therapy and I want to start doing it at home myself.',
        why: 'Your instinct is pointed at the right treatment. Exposure and response prevention is '
          + 'the approach with the strongest support for this, and it works. The reason to have a '
          + 'trained clinician run it is that the order of the steps, how hard each one is, and '
          + 'how fast to move all have to be matched to the specific child, and getting that '
          + 'wrong tends to teach the opposite lesson, which is that the feared thing really was '
          + 'unbearable. Badly paced exposure can set a family back a long way.',
        do: [
          'Do the parts that are genuinely yours, which are reducing accommodation with '
            + 'guidance, keeping routines normal, keeping your response to reassurance '
            + 'consistent, and protecting sleep.',
          'Call around and ask specifically whether the clinician does exposure and response '
            + 'prevention with children. Ask it as a direct question.',
          'Ask to be included in sessions and to be given the homework, because you are the '
            + 'one who is there at 9pm, and good pediatric treatment expects that.',
          'Keep the 2 line daily log. It makes the sessions much more productive and it saves '
            + 'you money.',
        ],
        avoid: 'Designing your own exposure ladder from what you read online and running it on a '
          + 'hard day. Not because you are not capable, but because the pacing is the whole skill '
          + 'and a bad step is expensive.',
      },
      {
        when: 'They cannot leave the house until something is done a certain way and now we are '
          + 'late for everything.',
        why: 'The lateness is a symptom of the size of the thing, not a discipline problem. A '
          + 'morning that requires a ritual to finish before the front door opens will expand to '
          + 'fill however much time is available, and racing it makes the underlying anxiety '
          + 'louder, which makes the ritual longer.',
        do: [
          'Add 20 to 30 minutes to the front of the morning as a standing policy, so you are '
            + 'not pushing while they are stuck.',
          'Move as much as possible to the night before, such as clothes out, bags packed, '
            + 'breakfast decided, so the morning holds less.',
          'Hold only the specific limits your clinician has already agreed with you, and let '
            + 'the rest go for now.',
          'If being late is threatening school attendance, say that out loud to the clinician '
            + 'and to the school, and ask for help early. This is a known pattern and there are '
            + 'ways to support it.',
        ],
        avoid: 'A consequence for being late. The lateness is not being chosen, and adding pressure '
          + 'to a morning that is already too tight makes tomorrow\'s morning longer.',
      },
    ],
    reassure: [
      'The guilt with this one is very specific and very common, and it goes like this. I '
        + 'made it worse. I answered every time. I did the routine with them for 8 months. I '
        + 'taught them to need me for this. So here is what is actually true. Family '
        + 'accommodation is nearly universal, it is documented in the research as the normal '
        + 'thing families do, and it happens precisely because you love your kid and you could '
        + 'not stand watching the distress. Every parent in every waiting room has done it. '
        + 'Knowing about it now is not a verdict on the last year, it is the thing that changes '
        + 'the next one.',
      'There is also a quieter grief in this that people do not warn you about, which is '
        + 'watching your child argue with something inside their own head that you cannot reach '
        + 'or reason with. You can see how hard they are working. You can see them being '
        + 'frightened by a thought they do not want to have. And for once you cannot fix it by '
        + 'being clever or loving enough, and the specific thing that helps involves not giving '
        + 'them the relief they are asking you for. Doing that while they cry at you is one of '
        + 'the hardest things parenting asks of anyone. If it feels awful, that is because it is, '
        + 'not because you are doing it wrong.',
      'The last thing I want to say is that this responds to treatment, genuinely and well, '
        + 'and that matters more than anything else on this screen. Kids get better at this. Not '
        + 'by white knuckling and not by the right explanation at last, but with a clinician who '
        + 'knows exposure and response prevention and a family who stops being on the worry\'s '
        + 'payroll. Your job is not to be the therapist. Your job is to keep the house normal, '
        + 'keep your answer the same, keep them sleeping, and keep showing up at the '
        + 'appointments. That is a genuinely full job and you are already doing it.',
    ],
  },
  bigChanges: {
    days: [
      {
        name: 'A velcro day',
        looks: 'They are on you from the moment they wake up. Following you to the bathroom, not '
          + 'wanting you out of sight, asking where you are going, wanting to be carried when '
          + 'they have walked for 2 years. Nothing new has happened today. The change is still '
          + 'the change.',
        do: [
          'Give the closeness on purpose before they have to ask for it. 15 minutes of full '
            + 'attention with your phone in another room, first thing, does more than 3 hours of '
            + 'distracted proximity.',
          'Keep the day\'s shape exactly the same as yesterday, because the routine is the '
            + 'thing doing the reassuring right now, more than any words you say.',
          'Make the leaving predictable rather than smooth. Same words, same length, same '
            + 'order, every time, such as 2 hugs and then out the door, even if they cry.',
          'Put 20 minutes of physical play in where you would normally have quiet time, '
            + 'ideally with you in it, such as chase, or being thrown on the couch cushions.',
          'Let them regress on 1 or 2 things without commentary, such as wanting help with '
            + 'clothes they can manage alone. Skills go backward during change and they come '
            + 'back.',
        ],
        say: '"You want to be near me a lot right now and that makes sense. I\'m not going '
          + 'anywhere."',
      },
      {
        name: 'A going backward day',
        looks: 'Wetting the bed again, baby talk, wanting the old bottle or the old blanket, '
          + 'tantrums they had grown out of, not sleeping alone. They are doing things you '
          + 'thought were finished 2 years ago.',
        do: [
          'Treat it as normal and expected rather than as a problem to correct, because it is '
            + 'one of the most common ways children process change.',
          'Lower the bar on independence for a few weeks, deliberately. Help them dress, sit '
            + 'with them at bedtime, and stop asking them to do the thing they cannot do right '
            + 'now.',
          'Handle any accidents with total neutrality, no reaction, no discussion. Fresh '
            + 'sheets and a shrug is the whole response.',
          'Keep sleep, food and the order of the day rock steady, and move bedtime 30 minutes '
            + 'earlier for a while.',
          'If it is still going and getting worse after 3 or 4 weeks, or it is wrecking '
            + 'school and friendships, that is the point to talk to your pediatrician rather than '
            + 'waiting it out longer.',
        ],
        say: '"You\'re allowed to need more help for a while. I\'ll take over the hard parts."',
      },
      {
        name: 'A furious day',
        looks: 'Everything is your fault, the toast is wrong, they slam a door, they say something '
          + 'designed to land. There is more anger than sadness and it is aimed squarely at you.',
        do: [
          'Let the anger be allowed and the behavior be limited, separately. "You can be this '
            + 'mad. You cannot hit your sister."',
          'Give it a physical exit within the first 30 minutes, such as 20 minutes outside, '
            + 'kicking a ball hard, hitting a pillow, running, or pulling weeds. Grief in kids '
            + 'comes out through the body far more than through conversation.',
          'Do not require a talk. Sit near them and do something with your hands. Most kids '
            + 'will say the real thing sideways, later, in the car or at lights out.',
          'Say the actual thing out loud once, plainly, such as "you did not get a vote in '
            + 'this and that is genuinely unfair." Being angry at something unfair is accurate, '
            + 'not a problem.',
          'Take the day\'s demands down by a third and put the hardest task first while there '
            + 'is still fuel.',
        ],
        say: '"You\'re allowed to be furious about this. I\'d be furious too. I can take it."',
      },
      {
        name: 'A steady day that ambushes you',
        looks: 'They are fine. Playing, eating, laughing, not mentioning it at all. And you are the '
          + 'one undone, either because it looks like they do not care or because you are waiting '
          + 'for the other shoe. Sometimes the ambush arrives at 7pm for no reason.',
        do: [
          'Let the good day be a good day and do not go looking for the feelings. Children '
            + 'grieve in bursts, and the playing between the bursts is not denial, it is how they '
            + 'pace it.',
          'Keep the door open without pushing it, with 1 low key mention and then a subject '
            + 'change, such as "I was thinking about the old house today," and then let it drop.',
          'Use the steady day for the practical thing, such as the new school visit, '
            + 'unpacking 1 more box, or meeting a neighbor.',
          'Put your own support in place today rather than on the bad day, such as calling 1 '
            + 'person. Your steadiness is the actual intervention here, and it needs maintenance.',
          'Expect the burst to arrive later, probably at bedtime, and have nothing scheduled '
            + 'for the evening.',
        ],
        say: '"I\'m glad today was an easier one. I\'m here on the other kind too."',
      },
    ],
    kit: {
      free: [
        'The same 3 steps at bedtime, in the same order, every single night, even in a hotel '
          + 'or a relative\'s spare room. A portable routine is the most powerful anchor you own '
          + 'and it is free.',
        'A paper chain or a row of boxes on a calendar to cross off, so a wait that is '
          + 'currently infinite becomes 11 things long.',
        'A photo taped at their eye level of the person or the place that is gone, so they do '
          + 'not have to ask permission to look.',
        'A 1 page written plan of the next 3 days on the fridge, in pictures if they are '
          + 'little, because during a change the question underneath everything is what happens '
          + 'to me next.',
        'One box unpacked before all the others, with their own things in it, put in the same '
          + 'arrangement as the old room if you can manage it.',
        'A standing 10 minutes of your undivided attention at the same time each day, '
          + 'announced and protected, so closeness is not something they have to earn by falling '
          + 'apart.',
      ],
      cheap: [
        'A cheap photo book printed from your phone of the old house, the old class, or the '
          + 'person, kept somewhere they can reach it themselves.',
        'A night light, and a second one for whatever room they may end up in, because the '
          + 'dark gets bigger during a change.',
        'A duplicate of the comfort object if one exists, because losing it during a month '
          + 'like this is a genuine emergency and you will thank yourself.',
        'A visual calendar or a simple paper week chart on the wall where they can see who is '
          + 'picking them up and when.',
        'A small notebook for drawing or writing to the person or the place, especially for a '
          + 'child who cannot get the words out loud.',
        'A cheap walkie talkie pair or a video call scheduled at a fixed time each week, so '
          + 'contact with whoever is far away is predictable rather than hoped for.',
      ],
      worth_it: [
        'A few sessions with a child therapist who works in play, particularly for a child '
          + 'under about 8 or a child who cannot talk about it. Helps most when the change was a '
          + 'loss, a separation, or something they saw, and going early is easier than going '
          + 'after 6 months of it coming out sideways.',
        'Keeping 1 expensive thing exactly the same, if there is any way to do it, such as '
          + 'the same sports team, the same music teacher, or the same weekend routine. This can '
          + 'be worth more than a new bedroom set, because continuity is the thing that is '
          + 'actually in short supply.',
        'Paid help for you, not for them, such as a cleaner for a month, food delivered, or '
          + 'childcare for 3 hours a week. Your steadiness is the thing they are standing on, and '
          + 'buying yourself 3 hours is buying them a calmer parent.',
      ],
    },
    moments: [
      {
        when: 'They ask me the same question about it over and over and I do not know what else to '
          + 'say.',
        why: 'Repeated questions during a change are usually not a request for new information. '
          + 'They are a test of whether the answer holds still. The world just proved to them '
          + 'that things can change without warning, so they are checking the same fact from 6 '
          + 'angles to see if it stays the same. A consistent answer is the reassurance, and it '
          + 'works by being boring.',
        do: [
          'Give the same answer, in the same words, every time. Write it down so it does not '
            + 'drift.',
          'Keep it honest and short. A child can handle a small true answer and cannot handle '
            + 'a large uncertain one.',
          'If you genuinely do not know, say that you do not know and then say what you do '
            + 'know, such as "I don\'t know that yet, and I do know you\'re coming with me."',
          'Put the answer somewhere they can check without asking you, such as a drawing on '
            + 'the fridge or a note in their room.',
        ],
        avoid: 'Adding new detail each time to make it more satisfying. It sounds like the story is '
          + 'still changing, which is the opposite of what they are checking for.',
      },
      {
        when: 'The teacher says they are absolutely fine at school and then they fall apart here.',
        why: 'Holding it together in public is work, and children do it at school because school '
          + 'is not safe enough to fall apart in. Home is. So the difficult version you get is '
          + 'not a sign that home is the problem or that you are being manipulated. It is what it '
          + 'costs them to have been fine for 7 hours, and you are the person they trust with the '
          + 'bill.',
        do: [
          'Make the first 45 minutes after school a soft landing, with food ready and no '
            + 'questions about the day.',
          'Move homework and admin later, or skip it for a few weeks and tell the teacher you '
            + 'are doing that.',
          'Give the body an outlet before any talking, such as 20 minutes outside or a bath.',
          'Tell the school what is happening at home anyway, even though they are not seeing '
            + 'it, so they know what this child is carrying while they are being fine.',
        ],
        avoid: 'Telling them you have heard how good they are at school. It turns the coping into '
          + 'the standard and makes home feel like the place they are failing.',
      },
      {
        when: 'The new baby is here and my older one has started hitting.',
        why: 'From their side, the math is simple and brutal. There is a new person, that person '
          + 'gets the attention, and they have lost their position with no consultation. Hitting '
          + 'is usually the fastest reliable way a small child has found to get an adult to look '
          + 'at them, and at this age negative attention still counts as attention.',
        do: [
          'Get ahead of it with attention that does not have to be earned. Ten minutes, same '
            + 'time daily, your full attention, announced by name as their time.',
          'Give them a real job that makes them the big one, such as picking the baby\'s '
            + 'outfit or being the only one allowed to do a certain thing.',
          'Handle the hitting in 2 parts, which are stopping it physically and immediately, '
            + 'and then naming the feeling underneath separately, such as "you are allowed to '
            + 'hate this. You cannot hit her."',
          'Say out loud, more than once, the thing they are actually afraid of, which is "you '
            + 'are not replaced. There is no version of this where I have less room for you."',
        ],
        avoid: 'Pointing out how much the baby loves them as a way to soften it. It asks them to '
          + 'manage your feelings about the situation while they are still drowning in their own.',
      },
      {
        when: 'They keep asking if we are going to move again, or if the other parent is leaving '
          + 'too.',
        why: 'One big unpredictable event resets a child\'s whole model of how stable the world '
          + 'is. If that could happen, anything could. So they are not being dramatic or '
          + 'catastrophizing for effect. They are doing sensible risk assessment with new and '
          + 'frightening data, and they need evidence rather than comfort.',
        do: [
          'Answer the specific question specifically, and only promise what you can actually '
            + 'keep. A promise you break here costs more than an honest uncertainty.',
          'Point at evidence rather than feelings, such as "the lease runs until next summer '
            + 'and I\'ll tell you before anything changes."',
          'Make a standing rule out loud and then keep it, which is that they will hear about '
            + 'anything big from you first, before anyone else.',
          'Give the near future a visible shape, such as the next 2 weeks drawn on a '
            + 'calendar, because the small predictions being kept is what rebuilds the big ones.',
        ],
        avoid: 'Reassuring with nothing behind it, such as saying everything will always be fine. '
          + 'They already know that is not how it works, and it teaches them your reassurance is '
          + 'decorative.',
      },
      {
        when: 'They do not seem sad at all and I am starting to worry something is wrong.',
        why: 'Children grieve and process change in bursts, not in a continuous stream, and the '
          + 'playing in between is not avoidance. A 6 year old can cry about a death for 4 '
          + 'minutes and then genuinely want to know what is for lunch, and both of those are '
          + 'real. It also frequently arrives months later, attached to something that looks '
          + 'unrelated.',
        do: [
          'Let it be, and resist the urge to open it up to check it is in there.',
          'Leave doors open at low cost, such as mentioning the person or place casually in '
            + 'normal conversation, and then letting the subject go where they take it.',
          'Watch for it coming out sideways instead of directly, in sleep, in eating, in '
            + 'friendships, in sudden fears, or at bedtime.',
          'Use the calm stretch to set up support rather than waiting for a crisis, such as '
            + 'an introductory session with a play therapist or a conversation with the school '
            + 'counselor.',
        ],
        avoid: 'Asking repeatedly how they are feeling about it. It puts them in charge of producing '
          + 'a feeling for you, and most kids will start performing one to make you feel better.',
      },
    ],
    reassure: [
      'The guilt in this one is almost always the same sentence, and it is I did this to '
        + 'them. You moved for the job, or the marriage ended, or you had another baby, or you '
        + 'could not stop the thing that happened. And you are watching a child who did not vote '
        + 'on any of it deal with the fallout, and something in you keeps adding it up as damage '
        + 'you caused. So let\'s look at it honestly. Children are not broken by change. They are '
        + 'shaken by change and then steadied by the people around them, and the steadying is the '
        + 'part that determines how it lands. You are not the author of their hard year. You are '
        + 'the thing that makes it survivable, and those are completely different jobs.',
      'The second thing that is worth saying out loud is that you are doing this while going '
        + 'through it yourself. A move, a loss, a separation, a new baby, these are not things '
        + 'that happen to your child while you watch from a safe distance. Your heart is in it '
        + 'too, and you are being asked to be the calm one on the exact days you have the least '
        + 'to give. That is a genuinely unreasonable arrangement and nobody manages it '
        + 'gracefully. Which is why the cleaner, the frozen meals, the 3 hours of childcare, or '
        + 'the 1 phone call to someone who gets it are not luxuries you have not earned. They are '
        + 'how the calm one stays standing.',
      'And you will not have to be steady perfectly. You will cry in front of them, you will '
        + 'snap at the wrong moment, you will not have the answer to the question. What children '
        + 'actually take away from a hard year is not a flawless parent. It is that the hard '
        + 'thing happened, and the adults kept showing up, and dinner still happened, and someone '
        + 'still read to them at night. You are keeping the shape of their life intact while the '
        + 'contents change, and that turns out to be nearly the whole job. They will remember '
        + 'that you were there. They will not remember the day you got it wrong.',
    ],
  },
  communication: {
    days: [
      {
        name: 'A day they have a lot to say',
        looks: 'They start conversations instead of waiting to be asked, they reach for their device '
          + 'or their signs without a prompt, and they stay in a back and forth for several '
          + 'turns. You are the one struggling to keep up.',
        do: [
          'Slow your own pace and leave a full 10 seconds of silence after each of their '
            + 'turns, counting in your head, before you add anything.',
          'Give them 2 or 3 real choices with actual stakes, such as what is for lunch or '
            + 'which errand you run first, and then honor the answer exactly as given.',
          'Add 1 or 2 new words to their board or device tonight, pulled from what today\'s '
            + 'conversation kept needing, such as gross, again, later.',
          'Turn 20 minutes of the school block into something they narrate, such as cooking '
            + 'or building, instead of something they answer.',
          'Skip the drill work. A day of real conversation teaches more language than a '
            + 'worksheet does, and today is the day you get one.',
        ],
        say: 'You have so much to tell me today, and I am listening as long as you want to keep '
          + 'going.',
      },
      {
        name: 'A day nobody is understanding them',
        looks: 'The same message attempted over and over, rising volume or sound, pushing the device '
          + 'away, hitting 1 button repeatedly, or walking off and giving up. Often the behavior '
          + 'shows up before you realize a message got missed.',
        do: [
          'Stop guessing out loud. Tell them plainly that you did not get it, and ask them to '
            + 'show you instead.',
          'Drop all the way down to yes and no. Offer 2 options they can see, point to each '
            + 'one, and let them answer with a look, a reach, or a button.',
          'Move the conversation to the place or the object, so they can lead you there '
            + 'instead of describing it.',
          'Cut the rest of the hour\'s demands in half. Frustration plus a full task list '
            + 'turns into a hard afternoon every time.',
          'Write the message down once you finally get it, and add that word to their system '
            + 'tonight so this exact wall is lower next time.',
        ],
        say: 'I know you are telling me something real, and I am not going to quit until I get it.',
      },
      {
        name: 'A day the device is not there or not working',
        looks: 'A dead battery, a cracked screen, a bag left in somebody else\'s car, a board that '
          + 'went through the wash. You will notice the communication drop first and the mood '
          + 'drop about 20 minutes later.',
        do: [
          'Treat this as an access emergency and not a behavior problem. Your first 10 '
            + 'minutes go to finding a backup, not to redirecting them.',
          'Pull out the paper backup. Keep a printed core word page and an alphabet grid in a '
            + 'kitchen drawer and a second set in the car, so this is a 30 second fix instead of '
            + 'a lost day.',
          'Hold the academic day loosely. Do the listening and watching work, such as a read '
            + 'aloud or a documentary, and push written output to tomorrow.',
          'Add 2 movement blocks of 10 minutes, outside if you can. Losing your voice for a '
            + 'day is physically stressful, and movement takes some of that out of the body.',
          'Fix the root cause tonight, such as a charger that lives permanently in the car, '
            + 'so this kind of day gets rarer.',
        ],
        say: 'Your words are not gone, we just have to use the paper ones until this is fixed.',
      },
      {
        name: 'A day after a long social morning',
        looks: 'They came home from therapy, church, or a co op and now they are finished. 1 word '
          + 'messages, refusing the device they loved yesterday, wanting a dark room or a screen, '
          + 'sometimes a meltdown over something very small.',
        do: [
          'Give them 45 minutes where nobody asks them anything at all, including friendly '
            + 'questions. A question is work.',
          'Keep talking to them anyway. Narrate what you are doing with no response required, '
            + 'so language keeps coming in while nothing is demanded out.',
          'Offer a 15 minute heavy movement block, such as carrying in groceries, pushing a '
            + 'loaded laundry basket, or a swing, then a 20 minute rest block somewhere with low '
            + 'light.',
          'Hold school to 1 thing, and make it the thing they are already good at.',
          'Move anything hard, such as a correction or a plan for tomorrow, to after dinner.',
        ],
        say: 'You worked hard being around people this morning, and you do not owe me any words '
          + 'right now.',
      },
    ],
    kit: {
      free: [
        'Print the core word page you already have and tape 1 copy inside a kitchen cabinet, '
          + '1 by the bathroom, and 1 in the car, so there is always a way to talk in whatever '
          + 'room you are standing in.',
        'Write an alphabet grid on an index card for a child who can spell, and keep it in '
          + 'your own pocket, not in a bag upstairs.',
        'Sit at their eye level and slightly to the side rather than across the table, so '
          + 'looking at your face and pointing at their board are not competing for the same head '
          + 'turn.',
        'Count to 10 in your head before you fill their silence. Most missed messages are '
          + 'messages that never got time to finish.',
        'Clear 1 shelf or basket of real objects they can hand you or lead you to, such as a '
          + 'cup, a shoe, a snack box, so an object is always an available answer.',
        'Keep a running list of the messages you failed to understand. That list is your '
          + 'vocabulary plan, and it is more useful than any published word list.',
      ],
      cheap: [
        'A ring binder with clear plastic sleeves so printed communication pages survive '
          + 'juice, dirt, and a backpack.',
        'Laminating pouches or wide clear packing tape to waterproof the board that lives in '
          + 'the kitchen.',
        'A small dry erase board and marker so you can write down the instruction you just '
          + 'said out loud.',
        'Sticky backed hook and loop dots plus a strip of stiff fabric to build a portable '
          + 'board that will stay put on a car seat or a wheelchair tray.',
        'A lanyard or belt clip so their low tech board travels with them instead of living '
          + 'on the counter.',
        'A second charging cable that never leaves the car, and a spare stylus if they use '
          + 'one.',
      ],
      worth_it: [
        'A speech generating device with a full vocabulary system rather than a few fixed '
          + 'pages: helps any child who has more to say than their current set of words allows, '
          + 'and the honest part is that it takes months of an adult modeling on it before it '
          + 'looks like a win.',
        'Here is the thing families are most often told wrongly, so it is worth saying '
          + 'plainly. Giving a child a device does not stop them from talking. A systematic '
          + 'review of studies on AAC and speech production found that AAC intervention did not '
          + 'hinder speech, and more often was associated with small gains in it. If someone '
          + 'tells you to withhold a device to protect speech, they are working from a belief and '
          + 'not from the research.',
        'A mount, stand, or case that holds the device up: helps the child who cannot hold a '
          + 'tablet and use it at the same time, which is far more children than you would guess, '
          + 'and it is the cheapest way to double how much a device gets used.',
        'Evaluation and ongoing coaching from a speech language pathologist who specializes '
          + 'in AAC: helps the whole family, because choosing the device is the easy part and '
          + 'learning how to model on it all day is the hard part.',
      ],
    },
    moments: [
      {
        when: 'I asked 3 times and they still did not do it.',
        why: 'For a child who communicates without speech, the missing piece is almost never '
          + 'willingness. It is that they had no fast way to tell you the part you left out, such '
          + 'as I do not know which shoes, or my stomach hurts, or I heard you and I need 2 more '
          + 'minutes. Asking a fourth time adds pressure without adding any information, and now '
          + 'you are both in a worse spot than you started.',
        do: [
          'Stop repeating. Go to them, get down to their eye level, and say it once more with '
            + 'the actual object in your hand.',
          'Give them a way to answer. Point to later, help, or the thing they want instead, '
            + 'and wait.',
          'Break the request into the first physical step, and do that step alongside them.',
          'If the answer is no, count that as successful communication even when you still '
            + 'need the task done, then negotiate from there.',
        ],
        avoid: 'Raising your voice or counting down, which speeds up the demand at the exact moment '
          + 'they need more time to answer it.',
      },
      {
        when: 'They will not touch the device at school, but they use it with me all day.',
        why: 'A communication system only works where the people around it know how to wait and '
          + 'how to respond. If the adults in 1 setting fill silences quickly, ask questions with '
          + '1 right answer, or treat the device as a school task, the child learns that it does '
          + 'not work there and stops spending energy on it. That is a reasonable conclusion for '
          + 'a child to draw, and it is information about the setting rather than about your '
          + 'child.',
        do: [
          'Record 2 minutes of them using it well at home, with their permission, and share '
            + 'it so the team can see what waiting looks like.',
          'Ask for 1 specific change instead of a general one, such as an adult modeling on '
            + 'the device for 5 minutes during snack every day.',
          'Ask that the device stay physically with the child all day, including at recess '
            + 'and lunch, which is where most real talking happens.',
          'Ask for the team\'s consideration of assistive technology to be written into the '
            + 'plan, since federal special education rules require the team to consider whether a '
            + 'child needs assistive technology devices and services.',
        ],
        avoid: 'Framing it to the team as a motivation problem, since that sends everyone looking '
          + 'for a reward system instead of fixing how the adults respond.',
      },
      {
        when: 'They can say a few words, so people keep telling me to make them use their voice '
          + 'instead of the device.',
        why: 'This advice comes from a real place, which is that everyone wants to hear your '
          + 'child\'s voice, including you. But it sets up a rule where the child has to earn '
          + 'communication with the hardest possible method. A child who has 15 spoken words and '
          + '200 words on a device does not have 15 words available to them, they have 215, and '
          + 'taking away the 200 does not grow the 15. The research on this points the other way, '
          + 'toward AAC supporting speech rather than replacing it.',
        do: [
          'Say 1 sentence back and then move on, such as we use everything he has, and speech '
            + 'is one of them.',
          'Accept whatever method they use in the moment, and respond to the message, not the '
            + 'method.',
          'Keep talking and keep modeling on the device at the same time, which is what most '
            + 'children need in order to do both.',
          'Ask your speech language pathologist to put this in writing, in plain words, so '
            + 'you have something to hand a relative or a teacher.',
        ],
        avoid: 'Holding out an item until they say it out loud, since it turns a want into a '
          + 'performance and teaches them that communicating is a test they can fail.',
      },
      {
        when: 'Other people talk to me about my child, right in front of them, as if they are not '
          + 'there.',
        why: 'People do this when they cannot predict how a response is going to come back, so '
          + 'they route around the uncertainty and talk to the adult. It is awkwardness rather '
          + 'than cruelty, but your child hears every word of it, and children who are talked '
          + 'over learn early that the fastest way to be included is to stop trying. The good '
          + 'news is that this one is easy to fix in the moment, and you are the person who can '
          + 'fix it.',
        do: [
          'Step back half a step and go quiet, and let the silence sit. Most people will '
            + 'redirect to your child on their own.',
          'Turn your body toward your child and repeat the question to them, such as she is '
            + 'asking what grade you are in.',
          'Give the other adult 1 short instruction, such as you can ask him, give him a '
            + 'second to answer.',
          'Afterward, tell your child out loud that they got talked over and that it was not '
            + 'okay.',
        ],
        avoid: 'Answering fast to spare everyone the awkwardness, which is the kindest reflex you '
          + 'have and also the one that teaches your child to stay quiet.',
      },
      {
        when: 'They hit me, or threw something, and I have no idea what set it off.',
        why: 'When a child has no fast way to say stop, or that hurts, or you got it wrong, the '
          + 'body says it instead. This is not a discipline problem wearing a costume, it is '
          + 'usually a message arriving through the only channel that was open at the speed the '
          + 'moment required. That does not make it okay, and you can hold the boundary and still '
          + 'go looking for the message.',
        do: [
          'Handle safety first, with as few words as possible. Words during a peak do not '
            + 'land.',
          'Once they are calm, work backward through the 5 minutes before it, out loud, and '
            + 'offer 2 guesses they can confirm or reject.',
          'Add whatever word was missing to their system that same day, such as stop, too '
            + 'loud, move, mad, wrong.',
          'Lower the rest of the day\'s demands, and put a movement block and then a rest '
            + 'block in before you try anything academic.',
        ],
        avoid: 'Requiring an apology on their device before they have calmed down, since it teaches '
          + 'them that their communication system is where punishment happens.',
      },
    ],
    reassure: [
      'The guilt this one hands you is very specific. Everybody else\'s child says mama and '
        + 'yours does not, and somewhere in you is a sentence that goes I should be able to '
        + 'understand my own child. So let me take that apart. Understanding a person who '
        + 'communicates differently is a skill, not an instinct. Nobody is born knowing how to '
        + 'read a look toward a door, or which 2 buttons in a row meant something urgent. You are '
        + 'learning a language while also raising a person while also cooking dinner, and the '
        + 'days you misread them are not evidence of a weak bond. They are evidence that you are '
        + 'doing something hard.',
      'The other fear worth naming out loud is the one about giving up. Many parents are '
        + 'told, sometimes by people they trust, that a device or a sign system means settling, '
        + 'and that if you just hold out a little longer the speech will come. That fear is why '
        + 'so many families lose years. The research does not support it. A systematic review of '
        + 'AAC and speech production in children found AAC did not hinder speech and was more '
        + 'often linked to gains in it. You are not choosing between a device and a voice. You '
        + 'are choosing between your child having words now and your child waiting.',
      'And the score you should be keeping is not how your child communicates, it is how much '
        + 'they get to say. A child who can tell you they are scared, who can pick their own '
        + 'snack, who can argue with their sibling and win, has what language is actually for. '
        + 'The method is a detail. The arguing is the milestone.',
    ],
  },
  speech: {
    days: [
      {
        name: 'A day the words come easy',
        looks: 'They talk over you, they get through a long story without restarting it, they call a '
          + 'friend, they order their own food. Their speech may still sound different from other '
          + 'kids and that is not the measure. The measure is that they are using it freely.',
        do: [
          'Let them do the talking today. Ordering at the counter, calling grandma, asking '
            + 'the librarian. A good day is when you bank confidence for a hard one.',
          'Move the reading aloud block to today instead of putting it off, and keep it to 10 '
            + 'minutes so it ends on a high.',
          'Record 60 seconds of them telling a story, with their permission, so they have '
            + 'proof of a good day to go back to later.',
          'Do the home practice their speech therapist gave you now, while it costs almost '
            + 'nothing, rather than in the middle of a hard week.',
          'Do not comment on how clear they were. Respond to what they actually said.',
        ],
        say: 'I loved that story, save me the rest for dinner.',
      },
      {
        name: 'A day every word is a fight',
        looks: 'More repeating, more stretched or stuck sounds, starting the same sentence 4 times, '
          + 'or speech that even you are not catching. It often follows a short night, a growth '
          + 'spurt, a big week, or plain excitement.',
        do: [
          'Slow your own speech way down and put a real pause before you answer them. Your '
            + 'rate is the most powerful lever you have, and it works better than any instruction '
            + 'you could give them.',
          'Cut the number of questions you ask in half and comment instead, such as that '
            + 'truck is huge, rather than what color is the truck.',
          'Give 5 minutes of 1 on 1 talking time with no siblings and no phone, on a topic '
            + 'they pick.',
          'Pull the performance pieces out of the day, such as reading aloud to the group or '
            + 'reciting memory work, and move them to a clear day.',
          'Put in 2 movement blocks of 10 to 15 minutes, and say out loud that the movement '
            + 'is not a punishment. Speech gets harder when the whole body is wound tight.',
        ],
        say: 'I have all the time in the world, take as long as you need.',
      },
      {
        name: 'A day they stopped trying',
        looks: '1 word answers, pointing at the menu instead of ordering, letting a sibling answer '
          + 'for them, saying never mind and walking off, or suddenly not wanting to go somewhere '
          + 'they used to love.',
        do: [
          'Do not push for more talking today. Make talking cost less instead. Take the phone '
            + 'call, order for them if they ask, and say nothing about it afterward.',
          'Ask questions they can answer in 1 or 2 words, or with a yes or a no, for the next '
            + 'few hours.',
          'Give them a job that earns respect without much speech, such as running the '
            + 'checkout, carrying the tools, or reading a recipe silently and handing you '
            + 'ingredients.',
          'Bring up the avoidance later, gently, and exactly once. Ask what happened, not why '
            + 'they will not talk.',
          'Put 1 safe speaking win in the day, such as telling a joke to somebody who already '
            + 'adores them.',
        ],
        say: 'You do not have to talk your way through today, and you are still the best company I '
          + 'have.',
      },
      {
        name: 'A day after somebody laughed or asked what',
        looks: 'They shut down right after a specific moment, or they get furious on the drive home '
          + 'from it. Sometimes the moment happened 3 days ago and you are only finding out now.',
        do: [
          'Name it out loud before they have to. Say you saw what happened, say it was not '
            + 'okay, and stop there.',
          'Do not coach today. Solutions on the same day read as agreement that there is '
            + 'something wrong with them.',
          'Turn the day into low talking and high doing, such as a hike, a build, baking, or '
            + 'a long drive with music up.',
          'Offer 1 script for next time, but only once they ask, such as I stutter, give me a '
            + 'second, and let them decide whether they ever use it.',
          'Tell them about a real person who talks the way they do and is doing fine, ideally '
            + 'one they can actually meet or watch.',
        ],
        say: 'What that kid did was rude, and there is nothing wrong with the way you talk.',
      },
    ],
    kit: {
      free: [
        'Slow your own talking down and add a 2 second pause before you reply. Guidance for '
          + 'families from the Stuttering Foundation puts your own unhurried speech ahead of '
          + 'telling a child to slow down, and it costs nothing.',
        'A no questions dinner once a week, where the adults tell stories and nobody gets put '
          + 'on the spot.',
        '5 minutes of daily 1 on 1 time, same time every day, on the calendar, with their '
          + 'topic and your undivided attention.',
        '1 house rule on the fridge: we do not finish each other\'s sentences. Teach it to '
          + 'the siblings first, since they are the ones doing it.',
        'The voice memo app on your phone, so home practice gets recorded and they hear a '
          + 'clear version of themselves instead of only the hard moments.',
        'Give the listener context before your child speaks, such as saying the topic out '
          + 'loud first, so anybody who misses a word can still follow the sentence.',
      ],
      cheap: [
        'A small standing mirror for the table, if their therapist has them watching how a '
          + 'sound is made.',
        'A pack of index cards for the words they actually need daily, such as their own '
          + 'name, their address, and their order at the drive through.',
        'A wallet card they can hand to a stranger saying they stutter or that their speech '
          + 'sounds different and they need a moment. Print it at home.',
        'A small notebook for words that got missed today, which becomes the practice list '
          + 'instead of a generic worksheet full of words nobody uses.',
        'A visual timer so a 10 minute practice block has a visible end and does not feel '
          + 'like it goes on forever.',
        'An inexpensive clip on microphone and a free recording app, which some children find '
          + 'motivating and others hate. Try it before you spend more.',
      ],
      worth_it: [
        'Regular sessions with a speech language pathologist, in person or by video: this is '
          + 'the purchase that actually moves outcomes, and video sessions have put good '
          + 'therapists within reach of families who live 2 hours from a clinic.',
        'A conference or membership with a national stuttering or speech organization: helps '
          + 'the child who has never met another person who talks like they do, and for a lot of '
          + 'kids that weekend is the turning point, not the therapy.',
        'Before you spend on any program sold to fix speech, know this. An evidence based '
          + 'systematic review published in an ASHA journal looked at nonspeech oral motor '
          + 'exercises, meaning blowing, straws, horns, and tongue exercises, and found there was '
          + 'not enough evidence to either support or refute their effect on speech. That means '
          + 'unproven, not promising. Put the money on therapy time with a qualified person '
          + 'instead.',
      ],
    },
    moments: [
      {
        when: 'I asked 3 times and they still did not do it.',
        why: 'With a speech difference, the reason usually lives in the thing that did not get '
          + 'said, such as I do not know which ones, or I already tried, or I need help and '
          + 'asking for help is 6 more words than I have in me right now. Saying the same '
          + 'sentence a fourth time does not add the missing information, it just adds heat.',
        do: [
          'Go to them, say it once more, shorter, with the object in your hand.',
          'Ask a yes or no question about the sticking point, such as do you know where they '
            + 'are.',
          'Do the first step with them so the task starts without a conversation.',
          'Accept a nod, a point, or a grunt as a real answer today.',
        ],
        avoid: 'Adding volume, which raises the demand on speech at the exact moment they needed it '
          + 'lowered.',
      },
      {
        when: 'They say it perfectly at home and then freeze in front of my mother in law.',
        why: 'Speech gets harder as the demand goes up, and an audience is the heaviest demand '
          + 'there is. This is not your child being lazy at home or dramatic in public, it is the '
          + 'same skill under a bigger load. Confidence that only exists in easy conditions is '
          + 'still real confidence. It just has not been stretched yet.',
        do: [
          'Warn the relative ahead of time, in 1 sentence, such as give him a second, he gets '
            + 'there.',
          'Take the spotlight off by talking alongside your child instead of everyone '
            + 'watching them.',
          'Let them skip the performance moment, such as saying their age for the room, '
            + 'without anyone making a thing of it.',
          'Debrief later with 1 question, such as what would make that easier next time.',
        ],
        avoid: 'Saying tell Grandma what you told me, which converts a natural sentence into a test '
          + 'with an audience.',
      },
      {
        when: 'Strangers keep asking me what he said, right over his head.',
        why: 'Adults route around uncertainty, and the parent is the easy path. But every time it '
          + 'happens, your child learns that you are the translator and their own speech is a '
          + 'rough draft. They also learn, faster than you would like, that staying quiet is less '
          + 'humiliating than being asked again.',
        do: [
          'Go quiet and look at your child. Most adults will redirect on their own within 3 '
            + 'seconds.',
          'Hand the question back, such as he is asking what you want on it.',
          'Give the stranger 1 instruction, such as ask him again, he will tell you.',
          'If your child asks you to translate, do it immediately and without commentary. '
            + 'Their call, not yours.',
        ],
        avoid: 'Jumping in fast to end the awkwardness for everybody, which is the kindest instinct '
          + 'you have and also the one that trains your child to stop speaking in public.',
      },
      {
        when: 'They are 5 and still saying wuh for r, and everyone keeps telling me not to worry.',
        why: 'Some sound differences do settle with age and some do not, and nobody can tell you '
          + 'which from a description across a kitchen table. Waiting has a real cost once a '
          + 'child is already being teased or already avoiding words. You do not need a diagnosis '
          + 'to ask for an evaluation, and an evaluation is not a commitment to do therapy.',
        do: [
          'Ask your school district for an evaluation in writing, and keep a dated copy. '
            + 'Federal special education rules require districts to identify, locate, and '
            + 'evaluate children who may need services.',
          'If you homeschool, ask anyway. Child find covers children with disabilities '
            + 'residing in the state, including children attending private schools, and most '
            + 'districts will evaluate a homeschooled child on request, though how your state '
            + 'counts that child varies, so call the special education office and ask directly.',
          'Keep your own 2 week log of which sounds, in which situations, with who listening. '
            + 'That log is better information than a 30 minute screening.',
          'Ask specifically whether speech is affecting participation, not only test scores, '
            + 'since participation is often what opens the door to services.',
        ],
        avoid: 'Waiting for the pediatrician to raise it first, since well visits are short and '
          + 'speech is easy to miss in a cheerful, chatty child.',
      },
      {
        when: 'Reading aloud turns into a fight every single day.',
        why: 'Reading aloud stacks 2 hard jobs, decoding and speaking, onto 1 child at 1 time. For '
          + 'a child with a speech difference that is not twice as hard, it is much more than '
          + 'twice. When they resist, they are usually protecting themselves from being heard '
          + 'failing, which is a reasonable thing to protect yourself from.',
        do: [
          'Separate the jobs. Let them read silently and then tell you about it, and save '
            + 'reading aloud for text they already know by heart.',
          'Read alternating sentences with them so their voice is never out there alone for '
            + 'long.',
          'Cap it at 5 minutes with a visible timer, every day, rather than 20 minutes 2 '
            + 'times a week.',
          'Let reading aloud to the dog or to a younger sibling count, because it does.',
        ],
        avoid: 'Correcting sounds while they read, which stops the sentence and tells them the point '
          + 'of reading was their mouth and not the story.',
      },
    ],
    reassure: [
      'The guilt here usually sounds like I should have gotten him help sooner. Maybe there '
        + 'were 2 years of people telling you he would grow out of it, and you believed them '
        + 'because you wanted to, and now you are angry at yourself for the time. Put that down. '
        + 'You acted on the information you had, from people you had reason to trust, and '
        + 'children make progress from wherever they start. The kid in front of you does not have '
        + 'a closed window. They have a parent who is paying attention now, which turns out to '
        + 'matter more than the calendar.',
      'There is a second, quieter one. You understand your child perfectly, so when a '
        + 'stranger asks what, some part of you wonders whether you have been making things easy '
        + 'in a way that let it go on. You have not. Being understood at home is how a child '
        + 'stays willing to talk anywhere. A child whose own house is a place where speaking is '
        + 'safe will keep spending their courage out in the world. The goal was never to make '
        + 'home hard enough to prepare them.',
      'One more thing, because nobody says it plainly enough. Your child\'s speech is not a '
        + 'character flaw that needs fixing before they can be liked. Plenty of people with '
        + 'stutters and with speech that sounds different are funny, respected, loved, and hired. '
        + 'What you are working on is access to their own ideas, not repair. Keep the therapy. '
        + 'Keep the practice. And keep responding to what they said, which is the part they will '
        + 'actually remember.',
    ],
  },
  auditoryProcessing: {
    days: [
      {
        name: 'A day the room is too loud to think',
        looks: 'They keep saying what, they answer the question you asked 2 questions ago, they get '
          + 'irritated at the fan or the sibling humming, and the same worksheet that took 8 '
          + 'minutes yesterday takes 40 today. Nothing about their effort changed, the room did.',
        do: [
          'Before you fix your child, fix the room. Turn off the fan, the air conditioner if '
            + 'you can stand it, the dishwasher, and the TV in the next room, then do the school '
            + 'block in the quietest 45 minutes of the day.',
          'Close the door. 1 closed door does more than most products you could buy.',
          'Move their chair so their back is to the wall and away from the window or hallway, '
            + 'and put them within 3 feet of whoever is talking.',
          'Give 1 instruction at a time, and write it in 3 words on a scrap of paper you hand '
            + 'over.',
          'Put in a 15 minute movement block outside, then bring them back to a quieter room '
            + 'rather than the same one.',
        ],
        say: 'This room is working against you right now, so let us go somewhere quieter and start '
          + 'over.',
      },
      {
        name: 'A day they are 1 step behind every instruction',
        looks: 'They start the second step while you are on the fourth. They do 2 of the 4 things '
          + 'you asked. They look at what a sibling is doing before they move, because copying is '
          + 'faster than catching up.',
        do: [
          'Cut every instruction to 1 step and wait for it to finish before you give the next '
            + 'one. This feels painfully slow and it is faster than the alternative.',
          'Write the day\'s 4 steps on a small whiteboard where they can see it, and let them '
            + 'cross each one off.',
          'Say their name, wait 2 full seconds for their attention to arrive, then talk. The '
            + 'first 2 words of a sentence are the ones most often lost.',
          'Ask them to tell you back what they are about to do, and treat a wrong answer as '
            + 'useful information rather than as not listening.',
          'Shorten the academic block to 20 minutes, add a 10 minute movement break, then do '
            + 'another 20.',
        ],
        say: 'I am going to give you 1 thing at a time, and you tell me when you are ready for the '
          + 'next one.',
      },
      {
        name: 'A day listening has used them up',
        looks: 'Fine all morning, then a crash in the early afternoon over something tiny. A '
          + 'headache. Wanting silence and a dark room. Refusing something they did happily on '
          + 'Tuesday. This often lands after a co op day, a church day, or a long car ride with '
          + 'everybody talking.',
        do: [
          'Take the listening out of the rest of the day. Reading, video with captions on, '
            + 'building, drawing, anything where the information comes through their eyes.',
          'Give a 20 minute rest block in a quiet, low light spot, with no expectation that '
            + 'they nap or do anything.',
          'Then a 15 minute movement block, ideally outdoors and away from voices, before you '
            + 'ask for anything academic.',
          'Reduce the day to your 2 highest priority tasks and say out loud which 2 you '
            + 'dropped, so they know it was a decision and not a failure.',
          'Move any conversation that needs their real attention to tomorrow morning.',
        ],
        say: 'Listening all day is real work, and you are allowed to be tired from it.',
      },
      {
        name: 'A quiet day when everything works',
        looks: 'They follow a 3 step instruction the first time. They join a conversation instead of '
          + 'monitoring it. They tell you something that happened at co op without being '
          + 'interviewed for it.',
        do: [
          'Do the hardest listening task of the week today, such as the new math concept or '
            + 'the read aloud chapter with the complicated names.',
          'Notice out loud what the room was like, such as it is quiet in here today, and '
            + 'start teaching them to notice it too. That is the skill that carries into '
            + 'adulthood.',
          'Let them do something socially demanding that you have been putting off, such as a '
            + 'phone call or a group activity.',
          'Bank a short recording or a written note of what today\'s setup was, meaning where '
            + 'they sat and what was off, so you can repeat it.',
          'Keep the day normal length. A good day is not a reason to double the workload.',
        ],
        say: 'It is quiet in here today, and I noticed how easy that made things for you.',
      },
    ],
    kit: {
      free: [
        'Turn off the noise you stopped hearing years ago. The fan, the air conditioner '
          + 'cycling on, the refrigerator, the dryer, the TV in the next room. Do the hardest 45 '
          + 'minutes of the day in the quietest 45 minutes of the house.',
        'Close the door of whatever room you are working in, every time, without discussion.',
        'Soften the room with what you already own. A rug on a hard floor, a folded quilt '
          + 'over a bare table, cushions on a bench, and curtains instead of blinds all cut the '
          + 'echo that smears 1 word into the next.',
        'Get their eyes before you say the thing, and then say it once, as a whole sentence, '
          + 'instead of in pieces shouted across the house.',
        'Write the instruction down. 3 words on the back of an envelope beats saying it 4 '
          + 'times.',
        'Move the chair. Facing away from the window, away from the hallway, and close to '
          + 'whoever is talking changes how much of each sentence actually arrives.',
      ],
      cheap: [
        'Felt pads on every chair leg in the room, which kills the scrape that reliably '
          + 'covers the first word of your next sentence.',
        'A small dry erase board on the wall where the day\'s steps live in writing all day.',
        'A thick secondhand curtain or a moving blanket hung on 1 wall. It sounds strange, it '
          + 'looks unremarkable, and it works.',
        'A pair of over ear noise reducing muffs, the kind sold for yard work, for '
          + 'independent work only and not for times when they need to hear you.',
        'A visual timer, so time is something they can see instead of something they have to '
          + 'be told about while also listening to instructions.',
        'A set of index cards with 1 step written per card, handed over 1 at a time.',
      ],
      worth_it: [
        'A remote microphone system, where you or the teacher wear a small microphone that '
          + 'sends your voice directly to the child\'s ears: helps most when the real problem is '
          + 'distance and background noise rather than the words themselves, and it is the single '
          + 'most useful piece of technology in this category.',
        'A full evaluation by an audiologist, ideally one who tests auditory processing: '
          + 'worth it because hearing loss and auditory processing differences look absolutely '
          + 'identical from your kitchen and call for different responses, and guessing costs '
          + 'years.',
        'A tablet or phone on a stand running live captions during a lesson or a read aloud: '
          + 'helps the child who does noticeably better when they can see the words at the same '
          + 'time as they hear them.',
        'Be skeptical before you spend hundreds on a commercial listening or brain training '
          + 'program. An evidence based systematic review in an ASHA journal concluded that the '
          + 'evidence for auditory and language interventions here was too small and too weak to '
          + 'give clear guidance, and found little indication that any gains came from the '
          + 'listening features of the programs. Treat a promise to fix processing as a claim, '
          + 'not a fact, and spend the money on the room and the microphone first.',
      ],
    },
    moments: [
      {
        when: 'I asked 3 times and they still did not do it.',
        why: 'For a child with auditory processing differences, your sentence often arrives with '
          + 'holes in it, most often at the very beginning and the very end, and especially with '
          + 'a fan running or a room between you. They are not ignoring you. They are working '
          + 'from a damaged copy of the instruction. Saying it again from the sink produces '
          + 'another damaged copy, not a clearer one.',
        do: [
          'Go to them, get their eyes, and say it once, in the shortest whole sentence you '
            + 'can build.',
          'Turn off 1 noise source before you say it again.',
          'Ask them to tell you what they are about to go do. If it comes back wrong, you '
            + 'have your answer and it was never defiance.',
          'Write the 3 key words down and hand them the paper.',
        ],
        avoid: 'Repeating it louder, since volume does not repair a sentence that arrived broken, it '
          + 'only tells the child they are in trouble for something they never received.',
      },
      {
        when: 'They said what, so I repeated it, and then they got mad at me.',
        why: 'A lot of children say what as a stall. It buys the half second their brain needs to '
          + 'finish assembling the sentence you already said. If you repeat immediately, you '
          + 'overwrite the version they were about to catch, and they lose it twice. Repeating '
          + 'the same words at the same speed in the same noise also hands them no new '
          + 'information, which is why the second try often goes worse than the first.',
        do: [
          'Wait 3 seconds after they say what, and do nothing. A surprising number of times '
            + 'they will answer you.',
          'If they still need it, reword rather than repeat, and make it shorter.',
          'Change 1 thing about the conditions, such as stepping into the room, turning '
            + 'toward them, or turning something off.',
          'Add the key noun at the end so it does not land in the part of the sentence that '
            + 'gets lost, such as shoes, go get your shoes.',
        ],
        avoid: 'Saying I just told you, which turns a processing delay into an accusation and makes '
          + 'them stop asking at all, which is worse for both of you.',
      },
      {
        when: 'They are perfect 1 on 1 and they fall apart in a group.',
        why: '1 voice in a quiet room is an entirely different task from 6 voices in a room with a '
          + 'hard floor. In a group, your child is doing 3 jobs at once: picking 1 voice out of '
          + 'several, filling in the words that got lost, and keeping up socially while doing the '
          + 'first 2. Most children run out of capacity somewhere in the middle of that, and what '
          + 'you see is the running out, not the caring.',
        do: [
          'Cap group time before the crash, not after, such as 90 minutes at a co op rather '
            + 'than the full 3 hours.',
          'Give them a physical job during the loud part, such as passing out papers, which '
            + 'is a legitimate reason to move and not to track 5 conversations.',
          'Build in 1 quiet exit they are allowed to take with no explanation, and tell the '
            + 'other adults about it in advance.',
          'Plan for the drive home to be silent, with no debrief questions, and do the '
            + 'debrief tomorrow.',
        ],
        avoid: 'Adding a second social activity to the same day to help them practice, since '
          + 'practice in a state of exhaustion teaches avoidance rather than skill.',
      },
      {
        when: 'The teacher says they are not paying attention, and I know they are trying.',
        why: 'Attention and listening look exactly alike from across a classroom, and a school '
          + 'report usually describes the behavior rather than the cause. This is worth sorting '
          + 'out with testing instead of arguing about at a conference table, because the '
          + 'response is completely different. And here is the part that matters most: a child '
          + 'who did not hear the instruction is not failing the lesson. They are being graded on '
          + 'something the lesson never actually delivered to them.',
        do: [
          'Request an evaluation in writing, including audiology, and keep a dated copy of '
            + 'the request.',
          'Ask for the accommodations that cost nothing first, such as seating close to the '
            + 'teacher, instructions in writing, and checking comprehension rather than checking '
            + 'attention.',
          'Ask for the team\'s consideration of assistive technology to be documented, since '
            + 'federal special education rules require the team to consider whether a child needs '
            + 'assistive technology devices and services.',
          'If you homeschool, you can still ask your district for an evaluation. Child find '
            + 'covers children with disabilities residing in the state, so call the special '
            + 'education office and ask how your state handles a homeschooled child.',
        ],
        avoid: 'Fighting over the word attention. Ask instead what the plan is for making the '
          + 'instruction accessible, which is a question a school is obligated to answer.',
      },
      {
        when: 'They come home from co op and melt down over absolutely nothing.',
        why: 'The nothing is the last straw on a pile you did not see being built. 3 hours of '
          + 'picking voices out of noise is genuine cognitive work, and a child who held it '
          + 'together for all 3 hours has spent everything they had on the holding together. The '
          + 'meltdown is what happens when the effort finally stops, and it usually happens at '
          + 'home because home is the only place safe enough for it.',
        do: [
          'Say nothing for the first 15 minutes. No questions, no how was it, no reminders '
            + 'about shoes.',
          'Offer food and water immediately, since both are almost always part of it.',
          'Give a 20 minute rest block in low light and quiet, followed by a 15 minute '
            + 'movement block outside.',
          'Cancel whatever else was on the schedule tonight and tell them you canceled it, so '
            + 'they learn that stopping is an option they can ask for next time.',
        ],
        avoid: 'Making the consequence for the meltdown the loss of the next co op day, since that '
          + 'punishes the effort rather than teaching the recovery.',
      },
    ],
    reassure: [
      'This lens comes with a very particular humiliation. Somebody, maybe your own mother, '
        + 'has said out loud that you are making excuses, that he hears fine when it is ice '
        + 'cream, and that what this child needs is consistency. And you have no scan, no visible '
        + 'device, nothing to hold up. So you start wondering whether they are right. Here is the '
        + 'thing. The fact that a child hears a whispered word about dessert in a silent kitchen '
        + 'and misses a 4 part instruction shouted over a running dishwasher is not proof that '
        + 'they were choosing. It is exactly what you would expect, because those are 2 '
        + 'completely different listening tasks.',
      'If you have yelled at your kid for ignoring you, for a year or for 6 years, and you '
        + 'are now sitting with the realization that they may not have heard you, that is a heavy '
        + 'thing to carry. You did the best available thing with the information you had. And '
        + 'children are not fragile in the way that thought implies. What repairs it is not '
        + 'guilt, it is the new behavior. Go to them, get their eyes, say it once. They will '
        + 'notice the change long before you feel forgiven for the old version.',
      'Also, be careful with your money on this one. Auditory processing is an area with real '
        + 'science and a very crowded market, and the reviews of the commercial programs are not '
        + 'impressive. The unglamorous things, a quieter room, a closed door, a rug, 1 '
        + 'instruction at a time, and a microphone if you can get one, are the ones with the best '
        + 'return. You are not failing your child by not buying the program. You may be '
        + 'protecting them from a year spent on it.',
    ],
  },
  deafHoh: {
    days: [
      {
        name: 'A day the technology is not working',
        looks: 'A dead battery, a lost dome or earmold, a processor that got wet, a whistle nobody '
          + 'can fix, or a child who quietly stops responding and you find out an hour later why. '
          + 'You will usually see the mood change before you find the cause.',
        do: [
          'Treat this as an access problem to solve, not a behavior to manage. Your first 10 '
            + 'minutes go to troubleshooting, not to redirecting them.',
          'Switch the day to eyes. Captions on for everything, writing on a whiteboard, '
            + 'signing if your family signs, and a book instead of a lecture.',
          'Keep a spare kit in 1 known drawer: batteries, a spare cable, a drying jar, and '
            + 'the audiologist\'s number written on paper so you are not hunting for it.',
          'Add 2 movement blocks of 10 to 15 minutes, since a day of reduced access is '
            + 'physically draining and movement takes some of it back out.',
          'Get in the repair queue today, even if the appointment is 2 weeks out, and ask '
            + 'specifically whether there is a loaner.',
        ],
        say: 'This is a broken piece of equipment and not a broken day, and we are going to use '
          + 'our eyes until it is fixed.',
      },
      {
        name: 'A day in their own language',
        looks: 'They are signing with somebody fluent, or they are with other Deaf kids, or a Deaf '
          + 'adult is in the room. The difference is obvious and a little startling. They are '
          + 'faster, funnier, more argumentative, and not tired.',
        do: [
          'Protect this on the calendar the way you would protect a doctor\'s appointment, '
            + 'because it is doing at least as much for them.',
          'Get out of the middle. Do not translate, do not prompt, do not explain your child '
            + 'to the other people.',
          'Ask them afterward to teach you 3 new signs they used today, and actually learn '
            + 'them.',
          'Put the hardest academic conversation of the week on a day like this, in their '
            + 'language, because comprehension is at its highest.',
          'Say yes to the next invitation before you leave the first one.',
        ],
        say: 'Teach me what you were all laughing about, I want to be able to say it too.',
      },
      {
        name: 'A day of watching everything',
        looks: 'A birthday party, a big family dinner, a co op, a crowded room with a hard floor. '
          + 'They look engaged, they nod in the right places, and then they are wrecked in the '
          + 'car. Some children are extremely good at appearing to have followed a conversation '
          + 'they did not follow.',
        do: [
          'Set a hard end time before you go, and give them a signal they can use to leave '
            + 'early without explaining themselves to anybody.',
          'Claim a spot with good light and a view of the whole room, and put their back to a '
            + 'wall so nobody arrives from behind.',
          'Give them 1 reliable person whose job is to keep them in the conversation, and '
            + 'tell that person out loud what the job is.',
          'Build in a 15 minute break away from the room every hour, ideally somewhere they '
            + 'can move, and treat it as scheduled rather than earned.',
          'Make the drive home silent, with zero debrief questions, and save the conversation '
            + 'for tomorrow.',
        ],
        say: 'You do not have to keep up with all of that, and we can leave whenever you want.',
      },
      {
        name: 'A clear day with a good setup',
        looks: 'Technology working, a quiet room, the remote microphone actually on and actually '
          + 'charged, and light on the faces. They interrupt you, argue with you, and tell you '
          + 'something you did not ask about.',
        do: [
          'Do the hardest listening or new vocabulary work today, and do it early.',
          'Write down what today\'s setup actually was, meaning who wore the microphone, '
            + 'which room, what was turned off, and where everyone sat, so you can reproduce it.',
          'Let them handle something on their own that you have been doing for them, such as '
            + 'ordering or asking a clerk a question.',
          'Keep the day a normal length. A clear day is not a reason to add 2 hours.',
          'Tell them out loud what made today work, so the setup becomes something they can '
            + 'ask for themselves later.',
        ],
        say: 'Today was set up right, and you should know exactly what we did so you can ask for '
          + 'it yourself.',
      },
    ],
    kit: {
      free: [
        'Put the light on your face rather than behind you. If you stand in front of a window '
          + 'while you talk, your face is a silhouette and every word costs more. Turn around so '
          + 'the window lights you instead.',
        'Never talk from another room, and never from behind. Get their attention first, with '
          + 'a wave, a tap on the table, or a flick of the light switch, and wait for their eyes '
          + 'before you start.',
        'Keep your hands, your coffee cup, and your hair away from your mouth, and do not '
          + 'talk while you chew or while you are walking away.',
        'Keep paper and a pen in the kitchen, in the car, and in your bag. Writing it down is '
          + 'not a failure of communication, it is communication.',
        'Give them the chair with a view of the whole room and their back to the wall, so '
          + 'nobody can appear beside them without warning.',
        'Learn sign as a family, out loud and on purpose, such as 5 new signs a week posted '
          + 'on the fridge. A hearing parent learning slowly in front of their child is doing '
          + 'something enormous, and children learn language from people who are visibly trying.',
      ],
      cheap: [
        'A small dry erase board or a bound pad that lives in the kitchen and never leaves '
          + 'it.',
        'A clip on lamp aimed at your own face for evening conversations and read aloud time.',
        'Felt pads on the chair legs, a rug on a hard floor, and heavy curtains, since even '
          + 'strong hearing technology performs better in a room with less echo.',
        'A phone stand plus the free live caption feature on the phone you already own, set '
          + 'on the table during a lesson or a family dinner.',
        'A vibrating alarm or a bed shaker, so getting up in the morning belongs to them and '
          + 'not to you.',
        'Spare batteries, a drying jar for the equipment, and a retention clip or headband so '
          + 'the technology stays on and stays working.',
      ],
      worth_it: [
        'A remote microphone system, where the person talking wears a microphone that sends '
          + 'their voice straight to the child\'s hearing devices: helps most in noise, in the '
          + 'car, and across a room, which is exactly where hearing technology on its own '
          + 'struggles.',
        'Sign language classes for the whole family and not only for the child. Sign language '
          + 'is a complete language with its own grammar and its own literature, and it is not a '
          + 'fallback for when speech does not work out. The National Association of the Deaf '
          + 'treats early access to sign as a matter of a child\'s development and a human right, '
          + 'not a last resort. Real places to learn: your state\'s early hearing detection and '
          + 'intervention program, a deaf mentor or parent to parent program if your state runs '
          + 'one, a community college ASL course taught by a Deaf instructor, a local Deaf '
          + 'community event or Deaf club, and Gallaudet University\'s online ASL program.',
        'Live captioning by a human writer, rather than automatic captions, for lessons, a '
          + 'sermon, or a class: helps the older child trying to keep up with fast, content heavy '
          + 'talking, which is where automatic captions still fall apart on names and subject '
          + 'vocabulary.',
        'Interpreters, which is worth knowing about before you spend a dollar. Under federal '
          + 'disability law, a doctor\'s office, a hospital, or a school is generally responsible '
          + 'for providing and paying for an interpreter when that is what effective '
          + 'communication requires, and the cost is not supposed to land on your family. Ask in '
          + 'writing, and keep the request.',
      ],
    },
    moments: [
      {
        when: 'I asked 3 times and they still did not do it.',
        why: 'If your child did not hear you, the count does not exist. 3 times from the sink with '
          + 'the water running is 0 times from where they were sitting. This is the one place '
          + 'where a parent\'s instinct, repeat it and add urgency, is almost exactly backwards, '
          + 'because the urgency in your voice arrives even when the words do not. So your child '
          + 'gets the feeling of being in trouble without ever receiving the information they '
          + 'needed.',
        do: [
          'Go to them. Get their attention first with a wave or a tap, and wait for their '
            + 'eyes to actually land on you.',
          'Say it once, facing them, with the light on your face, as a whole sentence rather '
            + 'than in fragments.',
          'Ask them to tell you back what they are about to do.',
          'If there was water running, noise, or a room between you, let it go entirely. That '
            + 'was never a 3 times situation.',
        ],
        avoid: 'Counting out loud or saying you are not listening to me, which converts an access '
          + 'problem into a statement about their character.',
      },
      {
        when: 'The school says they are doing fine, so they do not need an interpreter or a '
          + 'notetaker.',
        why: 'Doing fine on a report card and having access are 2 different measurements, and '
          + 'schools usually only take the first one. A child who is reading lips, filling gaps '
          + 'from context, and monitoring the room all day can produce passing grades while '
          + 'paying for them with every bit of energy they have. Research on children with '
          + 'hearing loss has documented listening related fatigue at levels higher than what has '
          + 'been reported for children with some chronic illnesses. Tired is not a small side '
          + 'finding here. It is the finding.',
        do: [
          'Ask the team to document its consideration of your child\'s language and '
            + 'communication needs. Federal special education rules specifically require this for '
            + 'a child who is deaf or hard of hearing, including opportunities for direct '
            + 'communication with peers and adults in the child\'s own language and mode, and '
            + 'opportunities for direct instruction in it.',
          'Put every request in writing and keep a dated copy of all of it.',
          'Bring your own evidence rather than an opinion: what time of day they fall apart, '
            + 'how long homework takes at home, how many words they miss on an uncaptioned video.',
          'Ask for a trial instead of a permanent decision, such as an interpreter or '
            + 'captioning for 6 weeks with a scheduled check in.',
        ],
        avoid: 'Accepting the phrase doing fine as an answer, and there is no need to blame the '
          + 'teacher who said it, since most teachers have never been taught what access costs a '
          + 'child.',
      },
      {
        when: 'My child is the only Deaf person they know.',
        why: 'Access to communication is not the same thing as access to people. A child can have '
          + 'excellent technology, a good placement, and a family who adores them, and still be '
          + 'the only person in their entire world who moves through it the way they do. That '
          + 'loneliness rarely shows up as sadness. It usually shows up as exhaustion, or as a '
          + 'child who has become very good at pretending they followed the conversation.',
        do: [
          'Find Deaf adults, not only Deaf children. A Deaf adult who is doing well is the '
            + 'most reassuring person your child can meet and the most useful person you can have '
            + 'on your side.',
          'Go to a Deaf community event as a family, and then go back a second time even '
            + 'though the first one was awkward for you.',
          'Ask your state program for a deaf mentor, or for a parent to parent connection '
            + 'with a family further along than you.',
          'Let your child watch you be the beginner in their language. That is the whole '
            + 'message, and it lands harder than anything you could say.',
        ],
        avoid: 'Waiting until you can sign well enough to not feel embarrassed, since the years you '
          + 'spend getting ready are the same years your child needed you in.',
      },
      {
        when: 'Family gatherings wreck them, and my relatives think I am being dramatic.',
        why: 'A holiday dinner is close to the worst possible listening environment ever designed. '
          + 'Hard floors, 9 people talking at once, food in mouths, nobody facing anybody, and a '
          + 'running commentary that switches topics every 20 seconds. Your child is not fragile. '
          + 'They are working at maximum effort for 4 hours in the noisiest room of the year, and '
          + 'the crash afterward is the price of that, not a tantrum.',
        do: [
          'Send 3 sentences to the host in advance: 1 place setting with the back to the '
            + 'wall, the TV off during dinner, and 1 person at a time please.',
          'Set up a quiet room in advance and tell your child where it is when you walk in, '
            + 'not when they are already done.',
          'Keep the visit to a planned length and leave on time, on a good note, rather than '
            + 'staying for the part where everybody is tired.',
          'Give 1 relative a specific job, such as sitting beside them and keeping them in '
            + 'the conversation, because vague requests get vague results.',
        ],
        avoid: 'Apologizing for the accommodations while you ask for them, since your relatives take '
          + 'their cue from your tone and will treat it as optional if you do.',
      },
      {
        when: 'They are refusing to wear the hearing technology, and every morning is a fight.',
        why: 'There is usually a reason and it is usually physical or social, not defiance. It '
          + 'hurts, it whistles, it makes a specific room unbearable, or somebody at co op said '
          + 'something about it. There is also a legitimate version where an older child is '
          + 'telling you something real about how they want to move through the world, and that '
          + 'deserves a conversation rather than a consequence.',
        do: [
          'Rule out fit and function first, since a device that hurts or whistles is a device '
            + 'nobody should be asked to wear. Call the audiologist before you call it a '
            + 'behavior.',
          'Ask 1 open question and then shut up, such as tell me what happens when you have '
            + 'them in.',
          'Offer real control over the parts that are theirs to control, such as when they '
            + 'come out, which rooms are device free, and what they look like.',
          'Keep access going while you sort it out. Captions on, writing things down, signing '
            + 'if you sign, so refusing the technology never means losing information.',
        ],
        avoid: 'Making the technology the condition for something they want, since it turns their '
          + 'own ears into a bargaining chip and buries the reason you actually needed to hear.',
      },
    ],
    reassure: [
      'The guilt here has a timestamp on it, and it is usually the first 3 years. You were '
        + 'handed enormous decisions in the middle of a fog, by people who each had a strong '
        + 'opinion, and now you can read the research and you are sitting up at night auditing '
        + 'yourself. Whatever you chose, you chose it to give your child language, which was the '
        + 'right goal. And here is the part nobody tells new parents clearly enough: it is not '
        + 'closed. Families start signing when their child is 6, or 10, or 14, and it is worth '
        + 'doing. The signs you learn this month still count.',
      'Then there is the feeling of being a fraud. You are hearing, your family is hearing, '
        + 'and you walk into a Deaf event and you are the person who understands the least in the '
        + 'room. Go anyway. Go badly. Deaf adults have watched hearing parents fumble through '
        + 'this for generations, and the ones who show up and keep showing up are not the ones '
        + 'anybody is critical of. Your child is watching which discomfort you are willing to sit '
        + 'in for them, and this is a good one to pick.',
      'Last thing, and it matters more than the rest. Your child is not a hearing child with '
        + 'something missing. Deaf people have their own language, their own community, their own '
        + 'history, and their own way of doing nearly everything, and none of it is a workaround. '
        + 'Your job was never to get them as close to hearing as possible. It is to make sure '
        + 'they have full access to language, to people, and to their own life, and to make sure '
        + 'they meet the adults who are already living the one they are headed for.',
    ],
  },
  blindLowVision: {
    days: [
      {
        name: 'A day in a place they do not know',
        looks: 'A new building, a rearranged classroom, a hotel, a relative\'s house. They slow '
          + 'down, they hold onto you, they ask a lot of questions or go very quiet, and they are '
          + 'worn out by lunch. None of that is fear. It is the cost of building a map from '
          + 'scratch.',
        do: [
          'Arrive 20 minutes early and walk the space with them before it fills with people. '
            + 'Bathroom, exit, where they will sit, where the food is.',
          'Narrate the layout once, in order, in a way they can hold, such as door, then 6 '
            + 'steps to the table, then the sink is on the right.',
          'Cut the academic or social expectation for the day roughly in half, because '
            + 'learning a new building is the day\'s real work.',
          'Give a 15 minute break every hour in a spot they already know, then let them go '
            + 'back out.',
          'Let them explore on their own terms, including touching things, rather than being '
            + 'escorted from point to point.',
        ],
        say: 'We are going to learn this place together before anybody else gets here.',
      },
      {
        name: 'A day everything is where it should be',
        looks: 'Nobody moved the furniture, their things are where they left them, and they move '
          + 'through the house fast, hands free, doing their own thing. They will seem like a '
          + 'completely different kid from the one you had at the hotel.',
        do: [
          'Do the hard new academic thing today, since none of their energy is going into '
            + 'orientation.',
          'Let them do something independent you have been nervous about, such as walking to '
            + 'a neighbor\'s door or making their own lunch.',
          'Take stock out loud of what is making it work, such as nothing got moved this '
            + 'week, and say it in front of everyone who lives here.',
          'Add a movement block they can do without asking for help, such as a swing, a '
            + 'trampoline, a bike on a known path, or laps in a known yard.',
          'Resist the urge to help with anything they did not ask for help with. Today is the '
            + 'day the independence gets built.',
        ],
        say: 'You know this house better than anyone, and I am going to stay out of your way.',
      },
      {
        name: 'A day their eyes are done',
        looks: 'For a child with some usable vision: headaches, rubbing, holding the page closer '
          + 'than usual, reading fine at 9 am and not at 2 pm, watering eyes, and irritability '
          + 'that arrives with the reading and leaves when it stops. Some eye conditions also '
          + 'vary a lot day to day, and bright glare days are harder.',
        do: [
          'Switch to listening and hands as soon as you see it, meaning audio books, read '
            + 'aloud, tactile work, and speech instead of typing.',
          'Fix glare before you fix anything else. Close the blind behind the page, put the '
            + 'lamp beside the page instead of above it, and lay a dark cloth under a shiny '
            + 'worksheet.',
          'Cap sustained reading in 10 minute chunks with 5 minutes of looking at something '
            + 'far away in between.',
          'Add a 15 minute movement block outside in shade, which rests the eyes and the rest '
            + 'of them at the same time.',
          'Move the visually heavy work to the morning permanently if this keeps happening at '
            + 'the same hour, since that is data and not a coincidence.',
        ],
        say: 'Your eyes have done enough work for now, so we are going to use your ears for the '
          + 'rest of this.',
      },
      {
        name: 'A day they are being helped too much',
        looks: 'A day at a relative\'s house or a co op where every adult grabbed, steered, carried, '
          + 'or answered for them. You will see either a very passive, compliant child or a '
          + 'furious one, and both mean the same thing.',
        do: [
          'Hand back every single thing you can, starting immediately, such as let them pour '
            + 'their own drink and open their own door even if it is slower.',
          'Ask them what they wanted to do themselves today, and then let them do that exact '
            + 'thing, even if it is 8 pm.',
          'Tell them out loud that being grabbed is annoying and that they are allowed to say '
            + 'so.',
          'Give them a real job with real stakes, such as carrying the eggs, being in charge '
            + 'of the money, or guiding you somewhere.',
          'Have 1 short conversation with the adult who did the most of it, in private, with '
            + '1 specific request instead of a general complaint.',
        ],
        say: 'You are allowed to tell people to let you do it yourself, and I will back you up '
          + 'every time.',
      },
    ],
    kit: {
      free: [
        'Stop moving the furniture, and put everything back exactly where it was. A home '
          + 'whose map does not change is the biggest free gift in this entire list, and everyone '
          + 'in the house has to be in on it.',
        'Say your name when you walk into a room and say that you are leaving when you leave, '
          + 'so nobody is talking to an empty chair or getting startled by a hand on their '
          + 'shoulder.',
        'Narrate what you are doing and where things are, such as your cup is at the top '
          + 'right corner of your plate. Your commentary is their visual information, and it does '
          + 'not have to be elegant.',
        'Control glare before you add light. Close the blind behind the page, move the lamp '
          + 'to the side, and put a dark towel under a shiny worksheet.',
        'Let a child with usable vision hold the page as close to their face and at whatever '
          + 'angle they want. It is not bad for their eyes, it is how they read, and being told '
          + 'to sit up straight costs them the sentence.',
        'Label with texture instead of only print. A rubber band on the shampoo bottle, a '
          + 'notch cut in 1 corner of the folder, a safety pin inside the collar of the navy '
          + 'shirt.',
      ],
      cheap: [
        'A slant board, or a 3 inch binder turned on its side, which brings the page up '
          + 'toward their face instead of bending their neck down to the table for an hour.',
        'A bold line notebook and a black felt tip pen, since pencil on white paper is about '
          + 'the lowest contrast thing in an entire school day, plus a reading guide strip or a '
          + 'piece of black card stock with a window cut in it to isolate 1 line at a time.',
        'A lamp with a flexible neck and a warm bulb that can sit beside the page rather than '
          + 'glaring down onto it, with a dimmer if you can find one.',
        'Tactile letters, or letters cut from sandpaper and glued to card stock, so a letter '
          + 'shape can be learned by hand and not only by eye.',
        'Bump dots or self adhesive felt pads on the microwave, the washer, the thermostat, '
          + 'and the front door lock, which buys back a surprising amount of independence for a '
          + 'few dollars.',
        'A slate and stylus, which is the inexpensive way to write braille and still works '
          + 'when every battery in the house is dead.',
      ],
      worth_it: [
        'Braille instruction from a certified teacher of students with visual impairments, '
          + 'plus something to write it on. Federal special education rules put the burden the '
          + 'right way around here: the team must provide for instruction in braille and the use '
          + 'of braille unless it evaluates the child\'s reading and writing skills, needs, and '
          + 'appropriate media, including future needs, and decides braille is not appropriate. '
          + 'The National Federation of the Blind is blunt about what low expectations cost blind '
          + 'children on exactly this point, so if you are being steered away from braille, ask '
          + 'for the reading media assessment in writing.',
        'Orientation and mobility instruction and a long white cane: this is instruction '
          + 'rather than equipment, and it is the item on this list that changes a life the most, '
          + 'because a child who can get themselves across a parking lot gets to have their own '
          + 'life. Ask for it as a related service and ask early, including for young children.',
        'A screen reader and a magnification setup they own and genuinely know how to drive: '
          + 'helps every blind or low vision child eventually, and the sooner they learn the '
          + 'keyboard instead of the mouse the sooner they are independent. Start with the screen '
          + 'reader already built into the computer you own, which is free.',
        'A refreshable braille display or a video magnifier, chosen by which one they '
          + 'actually read with: a braille display lets a braille reader read and write at the '
          + 'speed of the class, and a video magnifier lets a child with usable vision read the '
          + 'print nobody is ever going to convert for them, such as a menu or a medicine label.',
      ],
    },
    moments: [
      {
        when: 'I asked 3 times and they still did not do it.',
        why: 'Check whether your instruction contained visual information your child never '
          + 'received. Put it over there, hand me that one, and it is right in front of you are '
          + 'all instructions that only work with eyes. A child who does not move is often '
          + 'waiting for the part of the sentence that never came, and asking again with the same '
          + 'piece missing produces the same result and a worse mood.',
        do: [
          'Replace every there, that, and it with a name and a location, such as your blue '
            + 'cup is on the counter to the left of the sink.',
          'Give 1 step, wait for it to be finished, then give the next one.',
          'Offer your arm rather than taking theirs, and let them decide whether to take it.',
          'Ask them which part they need, since children are usually precise about this if '
            + 'anybody asks.',
        ],
        avoid: 'Pointing while you talk. It is a reflex nobody notices themselves doing, and it '
          + 'means the most important part of your sentence was delivered silently.',
      },
      {
        when: 'Everyone grabs my child, or steers them, or picks them up out of the way.',
        why: 'Strangers grab, and it is usually panic plus no education rather than unkindness. '
          + 'But a hand on the arm with no warning is startling, it takes away a child\'s control '
          + 'of their own body, and repeated a few hundred times it teaches a child that their '
          + 'body is public property. This is the thing blind adults talk about most often, and '
          + 'it is worth taking seriously while your child is young.',
        do: [
          'Teach your child 1 sentence and rehearse it in the kitchen until it is easy, such '
            + 'as please ask before you touch me.',
          'Model it out loud yourself, such as she will take your arm if she wants help, and '
            + 'do not apologize for saying it.',
          'When it happens, put yourself between them and narrate, such as he has got it, '
            + 'thank you.',
          'Afterward, tell your child they were right to be annoyed, because they were.',
        ],
        avoid: 'Thanking the stranger to smooth things over while your child is still being held, '
          + 'since your child learns from what you did in the moment and not from what you say in '
          + 'the car.',
      },
      {
        when: 'The school keeps offering large print because braille seems like too much.',
        why: 'Large print and braille are not a ladder with braille at the bottom as a last '
          + 'resort. They are 2 different reading media, and the real question is which one lets '
          + 'this child read and write at grade level through an entire school day without their '
          + 'eyes giving out. Print that works for 10 minutes and collapses by third period is '
          + 'not working, no matter how encouraging the first 10 minutes looked.',
        do: [
          'Ask in writing for a learning media assessment, and ask for the results in writing '
            + 'too.',
          'Ask 2 specific numbers: how many minutes of sustained reading your child can do in '
            + 'print, and at what grade level, then compare that to what the school day actually '
            + 'requires.',
          'Ask for both media. A child can read print and braille, and having 2 is an '
            + 'advantage rather than a contradiction.',
          'If you homeschool, ask your district anyway. Child find covers children with '
            + 'disabilities residing in the state, including children attending private schools, '
            + 'and an evaluation is not a commitment to enroll, so call the special education '
            + 'office and ask how your state handles it.',
        ],
        avoid: 'Accepting she has some vision so she does not need braille as a reason, since the '
          + 'amount of vision was never the question. Sustained reading and writing at grade '
          + 'level is the question.',
      },
      {
        when: 'They are exhausted and impossible by the middle of the afternoon and I cannot figure '
          + 'out why.',
        why: 'There is a second curriculum your child does all day that nobody wrote on the '
          + 'schedule. Working out where things are, listening hard to fill in what a sighted '
          + 'classmate got with 1 glance, decoding a page that will not hold still, and '
          + 'maintaining a mental map of rooms that other people keep rearranging. That is real '
          + 'work and it burns real energy. When they crash at 2 pm, they are not being '
          + 'difficult. They have been working since 7.',
        do: [
          'Put a 20 minute rest block into the schedule before the crash time you already '
            + 'know about, not after it.',
          'Follow it with a 15 minute movement block, ideally something they can do without '
            + 'navigating, such as a swing, a trampoline, or laps in a familiar yard.',
          'Front load the visually or navigationally hard work into the morning and leave '
            + 'listening work for the afternoon.',
          'Cut 1 thing from the afternoon and tell them which thing you cut, so they learn '
            + 'that asking for that is allowed.',
        ],
        avoid: 'Adding a reward chart for afternoon behavior, since it asks them to solve a stamina '
          + 'problem with motivation they have already spent.',
      },
      {
        when: 'They will not use the cane because it makes them look blind.',
        why: 'That is not vanity, it is accurate social reading, and it usually shows up around '
          + 'the age other kids start noticing each other. The trouble is that the cane is the '
          + 'thing that buys independence, and independence is what eventually makes the social '
          + 'part easier. This is worth working rather than winning, and it goes better when the '
          + 'argument is about freedom and not about safety.',
        do: [
          'Stop arguing about safety and start talking about what the cane buys, such as '
            + 'going somewhere by themselves without an adult attached to their elbow.',
          'Get them in front of a blind adult who uses one, ideally somebody young, cool, and '
            + 'busy. This does more than 6 months of you talking.',
          'Give them control of the negotiable parts, such as where they use it, when it '
            + 'stays in the bag, and what it looks like.',
          'Keep the orientation and mobility lessons going while you sort out the feelings, '
            + 'since skill and willingness do not have to arrive in that order.',
        ],
        avoid: 'Making the cane a rule enforced with a consequence, since it turns the tool of their '
          + 'independence into something that belongs to you.',
      },
    ],
    reassure: [
      'The specific guilt here is the hovering. You know you do it. You reach for their hand '
        + 'a half second before they needed it, you move the chair out of the way, you answer the '
        + 'question the stranger asked them. And then you feel awful about it, because you also '
        + 'know that every time you do it, you take something away. So here is the reframe that '
        + 'helps: your job is not to keep them from ever getting hurt, it is to make sure they '
        + 'get to be the one who is doing things. A blind or low vision child who bumps a '
        + 'doorframe and keeps walking is having a completely normal childhood. A child who never '
        + 'gets to cross a room alone is the one paying a price, and you will not see the bill '
        + 'for years.',
      'The other one is the media fight, print against braille, and the feeling that you are '
        + 'somehow choosing your child\'s future in a meeting you are not qualified to be in. You '
        + 'are qualified. You are the one who knows that reading is fine at 9 am and gone by 2 '
        + 'pm, and that is exactly the information the decision needs. Ask for the assessment, '
        + 'ask for the numbers in writing, and remember that the law is written in your favor '
        + 'here: braille is the default that has to be ruled out, not the exception that has to '
        + 'be justified.',
      'And take the fixing out of your head entirely. Blind and low vision adults are '
        + 'lawyers, teachers, engineers, parents, and cooks, and they are not doing those things '
        + 'despite blindness with some workaround bolted on. They are doing them with skills, '
        + 'with braille, with a cane, with a screen reader, and with the expectation that they '
        + 'would. The organizations run by blind people are unified on 1 point, which is that the '
        + 'real barrier is low expectations and not eyesight. Your child is going to inherit '
        + 'their expectations from somebody. Let it be you.',
    ],
  },
  motor: {
    days: [
      {
        name: 'Good body day',
        looks: 'Their hands and feet are doing roughly what they ask of them. They get dressed '
          + 'without a standoff, the pencil stays in the grip you worked on, and they are not '
          + 'bumping into the doorframe.',
        do: [
          'Do the hardest physical thing first, while the tank is full. If handwriting is the '
            + 'hard thing, do it in the first 30 minutes of the day, not after lunch.',
          'Practice the actual skill you want, not a warm up for the skill. If the goal is '
            + 'cutting, cut. If the goal is buttons, do 3 buttons. Practicing the real task is '
            + 'the best studied approach for coordination differences, though the research is '
            + 'still thin.',
          'Add 15 to 20 minutes of real movement they choose, such as a scooter, a swim, a '
            + 'bike, an obstacle course down the hallway.',
          'Stop while it is still going well. End 5 minutes before the wheels come off, so '
            + 'the memory of the day is a good one.',
        ],
        say: '"Your body is working with you today. Let\'s use it on the thing you want to get '
          + 'better at, then we\'re done."',
      },
      {
        name: 'Off balance day',
        looks: 'They are tripping, dropping, spilling, and bumping into things more than usual, and '
          + 'they are getting frustrated with themselves. You hear more "I can\'t" than normal.',
        do: [
          'Cut the physical demand of the day roughly in half. Pick 1 motor task to keep and '
            + 'drop the rest for today.',
          'Move the work to a stable setup. Feet flat on the floor or a book, forearms '
            + 'resting on the table, paper taped down so it cannot slide.',
          'Swap output, not content. Let them tell you the answer, type it, or point to it, '
            + 'while you do the writing.',
          'Give 3 short movement breaks of 3 to 5 minutes each rather than one long PE block. '
            + 'Choose low risk movement such as pushing a laundry basket, wall pushes, or '
            + 'carrying books.',
          'If they fall or hurt themselves twice in an hour, stop the physical part of the '
            + 'day entirely. Read together instead.',
        ],
        say: '"Your body is having a rough day. That\'s not you being careless. Let\'s pick easier '
          + 'jobs today."',
      },
      {
        name: 'Worn out day',
        looks: 'It is the day after therapy, a field trip, a long walk, or a busy weekend. They are '
          + 'slumped, slow, asking to be carried, or melting down over things that were fine '
          + 'yesterday.',
        do: [
          'Assume the tank is at about a quarter and plan for that number, not for the child '
            + 'you saw on Saturday.',
          'Cancel PE and any strength or endurance work today. Rest is the right prescription '
            + 'on this day, not more movement.',
          'Keep work to 10 or 15 minutes at a time, seated and supported, with a real break '
            + 'between.',
          'Do the movement they need for comfort only, such as gentle stretching, a warm '
            + 'bath, or lying on their back with knees bent. Moving a stiff body gently is '
            + 'different from exercising it.',
          'Move bedtime 30 minutes earlier tonight, even if the day looked easy.',
        ],
        say: '"You spent a lot yesterday. Today is a refill day, and that counts as doing the '
          + 'work."',
      },
      {
        name: 'Writing wall day',
        looks: 'The pencil grip has collapsed, letters are drifting off the line, they are pressing '
          + 'hard enough to tear the paper, and one of you is close to tears within 10 minutes.',
        do: [
          'Stop the writing within 2 minutes of noticing this. Nothing useful is being '
            + 'learned past that point.',
          'Change 1 thing in the setup, not 4. Try a slanted surface first, such as a 3 inch '
            + 'binder turned to face them with the paper clipped on.',
          'Reduce the amount, not the difficulty. If there are 20 problems, circle 5 and have '
            + 'them do only those, with the same level of thinking.',
          'Let them dictate the rest into a phone or to you, and be the scribe without '
            + 'commentary.',
          'Come back to handwriting tomorrow for 5 minutes only, at the start of the day.',
        ],
        say: '"Your hand is done. That\'s information, not failure. Talk it to me and I\'ll '
          + 'write."',
      },
    ],
    kit: {
      free: [
        'Feet flat. Put a stack of books or a shoebox under their feet so hips, knees, and '
          + 'ankles sit at roughly right angles. A child whose feet dangle is using core muscles '
          + 'just to stay upright, and has less left for their hands.',
        'Chair pulled all the way in, so their forearms rest on the table. A supported arm '
          + 'writes better than a floating one.',
        'Tape the paper down with 2 pieces of tape at the top corners, or clip it to a '
          + 'clipboard. This removes the second job of holding the paper still.',
        'A 3 inch ring binder turned so the spine faces away makes a slant board. Clip the '
          + 'paper to it. A slanted surface brings the work into view and puts the wrist in a '
          + 'better position.',
        'Break the task into 3 visible pieces on the table. 3 small piles of 5 problems beats '
          + 'one worksheet of 15, because they can see the end.',
        'Roll a bath towel and put it behind their lower back for a chair that is too deep.',
      ],
      cheap: [
        'Pencil grips, a few shapes in a pack. Evidence that grips improve handwriting is '
          + 'weak and mixed, but they cost a few dollars and some children clearly write longer '
          + 'with one, so trying 3 shapes is reasonable.',
        'A folding slant board or an angled writing surface. Same logic as the binder, just '
          + 'sturdier, and a piece of rubber shelf liner underneath stops it sliding.',
        'A footrest, or a plastic step stool turned upside down. This is the single change '
          + 'most likely to help, and it is nearly free.',
        'Loop scissors or self opening scissors, which spring back open on their own so the '
          + 'child only has to squeeze. Genuinely useful for a hand that struggles to reopen.',
        'A weighted or wide barrel pen or pencil. Some children steady up with extra weight '
          + 'in the hand. Try before buying several.',
        'A visual timer with a colored disk that shrinks. Seeing time left is easier than '
          + 'being told about it.',
      ],
      worth_it: [
        'An occupational therapy assessment. If you buy 1 thing on this page, buy this. An OT '
          + 'watches your specific child write, dress, and sit, and tells you which of the 20 '
          + 'possible changes matters for them. Guessing from a list is far less efficient.',
        'Speech to text on a tablet or computer, set up properly with a decent microphone. '
          + 'This helps most when the child\'s ideas are well ahead of their handwriting, which '
          + 'is very common with coordination differences.',
        'A keyboard as a real alternative to handwriting, plus time spent learning to use it. '
          + 'Worth it for a school age child whose handwriting is the bottleneck on everything '
          + 'else. Handwriting practice can continue alongside without being the only route to '
          + 'getting words on a page.',
        'Adaptive equipment recommended by a therapist, such as a supportive chair, a '
          + 'positioning cushion, or an adapted bike. Worth it when a specific therapist has '
          + 'named a specific need. Not worth buying speculatively, because the fit is the whole '
          + 'point.',
      ],
    },
    moments: [
      {
        when: 'Their handwriting is so bad we both end up in tears.',
        why: 'Handwriting is one of the most demanding things we ask a child to do. It needs '
          + 'postural stability, shoulder control, finger control, eye tracking, letter memory, '
          + 'spelling, and ideas, all at once. When the body part of that is expensive, there is '
          + 'nothing left over for the thinking part. The tears are usually a full system, not a '
          + 'bad attitude.',
        do: [
          'Stop the session. Not in 5 more minutes, now.',
          'Separate the 2 jobs. Today, they think and talk, you write. Handwriting gets its '
            + 'own tiny slot on another day.',
          'Fix the setup before you fix the child. Feet supported, paper anchored, surface '
            + 'slanted, task cut to a third.',
          'Put handwriting practice at 5 minutes a day, first thing, and let everything else '
            + 'be typed or spoken.',
        ],
        avoid: 'Pushing through to finish the page. It feels like perseverance, and it teaches the '
          + 'body that writing means pain, which makes tomorrow harder than today was.',
      },
      {
        when: 'They fall over things constantly and I\'m always saying be careful.',
        why: 'Knowing where your body is in space without looking is a sense in its own right, and '
          + 'for some children the signal is fuzzy. They are not ignoring your warnings. They '
          + 'genuinely did not know their foot was going to be there. Repeated correction teaches '
          + 'a child that their body is a problem, which shows up later as refusing to try '
          + 'anything physical.',
        do: [
          'Change the environment instead of the child where you can. Clear one wide path '
            + 'through the main rooms, move the coffee table, put a light in the hallway.',
          'Narrate the hazard instead of the child. Say "step up here" rather than "watch '
            + 'out."',
          'Let them look. Encourage them to glance at their feet on stairs and curbs. It is a '
            + 'fine strategy, not cheating.',
          'Protect the skin and let the rest go. Shoes with grip, long sleeves on the '
            + 'scooter, and then stop counting the bumps.',
        ],
        avoid: 'Saying "be careful" many times a day. It gives no usable information and slowly '
          + 'becomes a message about who they are.',
      },
      {
        when: 'They can\'t manage buttons or laces and we are already late.',
        why: 'Fastenings need 2 hands doing different things at once while you cannot see what you '
          + 'are doing. That is genuinely hard. Mornings are also the worst possible time to '
          + 'learn a motor skill, because a hurrying adult raises the difficulty of every task in '
          + 'the room.',
        do: [
          'Take buttons out of the morning entirely this month. Pull on clothes, elastic '
            + 'waists, slip on shoes.',
          'Practice the fastening at a calm time, on clothing that is not being worn. Buttons '
            + 'on a shirt laid flat on the table are much easier than buttons on your own chest.',
          'Teach the last step first. You do the whole button, they do the final pull '
            + 'through. Then they do the last 2 steps, and so on backward.',
          'Set out clothes the night before and add 10 minutes to the morning, so you are not '
            + 'the pressure in the room.',
        ],
        avoid: 'Making the morning the practice session. You will both lose, and the skill will get '
          + 'associated with being rushed.',
      },
      {
        when: 'They hate PE and recess and beg not to go.',
        why: 'For a child with coordination differences, open ended group physical activity is a '
          + 'public test they lose repeatedly. It is not the movement they are avoiding. It is '
          + 'the audience and the rules. Many of these children genuinely need more movement, and '
          + 'will accept plenty of it when it stops being competitive.',
        do: [
          'Ask them which single part is worst. Being picked last, the noise, the ball coming '
            + 'at them, changing clothes. The answer usually points at a fixable thing.',
          'Find 1 movement they do not lose at. Swimming, riding, hiking, climbing, dance, '
            + 'martial arts, anything without a ball flying at their face. Aim for twice a week.',
          'For school, ask for specific accommodations in writing, such as preassigned teams, '
            + 'a job like scorekeeper on hard days, and extra time to change.',
          'On a day they have already spent themselves, ask for permission to sit out without '
            + 'it being a discipline event.',
        ],
        avoid: 'Telling them it will get better if they just keep trying. Repetition without a '
          + 'change in the setup mostly teaches them that they are bad at it.',
      },
      {
        when: 'They could do it yesterday and today they can\'t, and I think they\'re being lazy.',
        why: 'Motor skills that take effort are not stable from day to day. Fatigue, sleep, '
          + 'growth, illness, stress, and how much the body already spent that week all change '
          + 'what is available. A skill that is new and expensive will come and go for a long '
          + 'time before it becomes automatic. That wobble is normal and is not a sign that '
          + 'yesterday was faked.',
        do: [
          'Believe today\'s body over yesterday\'s. Plan the day for what you are seeing '
            + 'right now.',
          'Ask 1 question. Did they sleep, have they eaten, did something big happen '
            + 'yesterday.',
          'Drop back to the version of the task they can do today, without commentary, then '
            + 'move on.',
          'Keep a rough note over a few weeks. The trend line over a month is the real '
            + 'answer, not any single day.',
        ],
        avoid: 'Saying "but you did it yesterday." You mean it as encouragement. It lands as an '
          + 'accusation of not trying.',
      },
    ],
    reassure: [
      'The guilt here usually sounds like this. If I had made them practice more, their hands '
        + 'would work better by now. So every time you let them type instead of write, or you do '
        + 'the buttons because you are late, you file it away as evidence that you gave up on '
        + 'them. Here is the thing. The research on motor practice for coordination differences '
        + 'is honestly not strong enough to carry that much guilt. What it does suggest is that '
        + 'practicing the actual task in short, willing sessions helps somewhat. Nothing suggests '
        + 'that grinding a tired, crying child through a worksheet builds anything at all. You '
        + 'did not cause this by being gentle.',
      'You are also probably the only person who sees the whole cost. Other people see the '
        + 'finished thing, a coat that is on, a page that is filled in, and think it was easy. '
        + 'You saw the 20 minutes and the tears. That gap is exhausting, and it is why you feel '
        + 'like you are exaggerating when you ask school for help. You are not exaggerating. You '
        + 'have better data than anyone.',
      'One more thing worth hearing. Giving a child a keyboard, a slanted board, loop '
        + 'scissors, or your own hand as a scribe is not lowering the bar. It is moving the bar '
        + 'off the part of their body that is expensive and onto the part that is not, so the '
        + 'actual thinking can show. Every adult you know uses tools for the things their body '
        + 'does not do well. They just stopped calling it accommodation and started calling it '
        + 'life.',
    ],
  },
  tics: {
    days: [
      {
        name: 'Loud tic day',
        looks: 'The movements or sounds are bigger, faster, or more frequent than last week, often '
          + 'with something coming up such as a party, a test, a trip, or a visitor. They may be '
          + 'more irritable and less able to hear a correction.',
        do: [
          'Say nothing about the tics. Reminding a child not to tic reliably increases the '
            + 'urge, and adds anxiety on top, which makes the next hour worse.',
          'Take 1 thing off today\'s list. Whichever demand is least essential, cancel it out '
            + 'loud so they hear the pressure drop.',
          'Feed and water them before the hardest part of the day. Hunger and thirst stress '
            + 'the body and tics often climb before lunch.',
          'Protect a low stakes, absorbing activity for 30 to 45 minutes, such as drawing, '
            + 'music, building, or a game they love. Tics often quiet right down during a '
            + 'focused, enjoyable activity.',
          'Keep work in 15 minute blocks with real breaks, and expect less written output '
            + 'today, because suppressing tics uses the same attention that schoolwork needs.',
        ],
        say: '"Busy tic day. Nobody\'s in trouble. Let\'s take one thing off the list."',
      },
      {
        name: 'Quiet day',
        looks: 'The tics have faded into the background. Nobody is mentioning them. They seem '
          + 'lighter and more available.',
        do: [
          'Do the hard, high concentration work today. Tests, long writing, new learning, '
            + 'difficult conversations.',
          'Still do not comment on the tics being better. Praising a quiet day teaches them '
            + 'that a loud day is a disappointment.',
          'Bank something for later. Set up the social plan, the appointment, the thing you '
            + 'have been putting off.',
          'Keep sleep steady anyway. Tics go up with fatigue, and a late night today shows up '
            + 'tomorrow.',
        ],
        say: '"Good brain day. Want to knock out the big thing while it feels easy?"',
      },
      {
        name: 'Holding it in all day',
        looks: 'School reports a calm, fine day, and then the moment they get in the car or through '
          + 'the front door, the tics come out hard, sometimes with a meltdown attached.',
        do: [
          'Plan the first 30 minutes after school as a release window. No questions, no '
            + 'homework, no how was your day.',
          'Give them a private place and something physical they choose, such as a '
            + 'trampoline, a bike, a shower, a bed with the door shut.',
          'Feed them within 15 minutes of getting home.',
          'Push all homework to at least 1 hour after arrival, and cap it. If it is not done '
            + 'in 30 minutes, write a note to the teacher and stop.',
          'Ask school for a quiet place they can use for a few minutes without asking '
            + 'permission out loud, such as a card they can put on the desk.',
        ],
        say: '"You held that together for 7 hours. You don\'t have to hold it here."',
      },
      {
        name: 'Sore day',
        looks: 'They are rubbing a neck, shoulder, jaw, or stomach, or saying a movement hurts. The '
          + 'tic itself may have become forceful or repetitive enough to ache.',
        do: [
          'Take the complaint seriously and tell their doctor about pain from movements. This '
            + 'is one of the times a call is genuinely worth making.',
          'Reduce the physical load of the day. No heavy backpack, no long handwriting '
            + 'session, no contact sport today.',
          'Make the environment softer where the tic lands. Cushions, a supported chair, a '
            + 'pillow, a warm bath. Do not restrain or hold the body part still.',
          'Cut the day\'s demands by about half and let them lie down and listen to something '
            + 'instead of reading.',
          'If the pain is new, sharp, or getting worse, stop the day\'s activities and '
            + 'contact their doctor rather than waiting it out.',
        ],
        say: '"That sounds sore, and I believe you. Let\'s make today easy on that part of your '
          + 'body."',
      },
    ],
    kit: {
      free: [
        'A water bottle within reach at all times, and a snack before the hardest subject. '
          + 'Hunger and thirst are physical stress, and physical stress raises tics.',
        'A seat where they are not being watched from behind. The back or the edge of a room, '
          + 'with a clear route to the door, lowers the pressure to hold it in.',
        'A no questions asked exit signal. Agree on a card, a raised finger, or a word that '
          + 'means they are leaving for 3 minutes, so they never have to announce it.',
        'Paper taped or clipped down, and writing broken into 5 minute chunks, because motor '
          + 'tics wreck a line of handwriting and then wreck the mood.',
        'Turn off the audience. Everyone in the house stops looking, commenting, counting, '
          + 'and imitating. This is free and it matters more than any product.',
        'An absorbing activity kept ready for hard hours, because tics often drop during a '
          + 'focused, enjoyable task.',
      ],
      cheap: [
        'A visual timer, so work has a visible end and the day is not an open ended stretch '
          + 'of holding on.',
        'A small quiet fidget for the hands. There is no real evidence that fidgets reduce '
          + 'tics, but they are cheap, and some children find them a socially easier place to put '
          + 'restless energy.',
        'A laminated break card for the desk, so leaving the room costs nothing socially.',
        'Noise reducing ear muffs or over ear headphones. Worth trying if noise is one of the '
          + 'things that winds the day up. Evidence is limited, cost is low.',
        'A clipboard so a sudden movement does not send the page across the room, plus a free '
          + 'dictation app on a phone, so a tic in the writing hand never costs them a whole '
          + 'assignment.',
        'A safe chewable necklace or a supply of crunchy snacks, if there is an oral tic. Two '
          + 'rules. Nothing tight around the neck, and a breakaway clasp only. Anything that can '
          + 'pull against the throat is a no.',
      ],
      worth_it: [
        'An assessment with a clinician who knows tic disorders. Worth it mostly for the '
          + 'accurate explanation, which changes how everyone at home and school behaves, and '
          + 'that in turn changes the child\'s week.',
        'Behavioral therapy designed for tics, sometimes called comprehensive behavioral '
          + 'intervention for tics, with a properly trained therapist. This is the option with '
          + 'the strongest research behind it. It teaches the child to notice the urge and use a '
          + 'competing response, and it explicitly does not work by telling them off. '
          + 'Availability is the usual obstacle, and telehealth is worth asking about.',
        'A keyboard or tablet with good dictation for school work, if motor tics affect the '
          + 'writing hand. Worth it when handwriting is being destroyed by something outside '
          + 'their control.',
        'Skip weighted vests as a tic treatment. The evidence for weighted vests in general '
          + 'is limited, and nothing suggests they reduce tics. If you do use any weighted item '
          + 'for calming, never at sleep, never heavy enough that the child cannot move it off '
          + 'themselves, and never anywhere near the neck.',
      ],
    },
    moments: [
      {
        when: 'I keep telling them to stop and it\'s getting worse.',
        why: 'This is the most important thing to know, so it is the first one here. Tics are '
          + 'neurological. They are physical urges that build until they are completed, a bit '
          + 'like a sneeze or an itch. Reminding a child not to tic increases the urge, and adds '
          + 'anxiety, and anxiety raises tics again. So the request genuinely makes the thing '
          + 'worse. It is not stubbornness answering you back. A child can sometimes hold a tic '
          + 'in for a while, but it costs real mental effort, it builds tension, and it usually '
          + 'comes out harder later.',
        do: [
          'Stop asking. Today. Tell them plainly that you have learned this and you were '
            + 'wrong, which also repairs something between you.',
          'Tell everyone else in the house and at school the same thing, in 1 sentence. No '
            + 'reminding, no counting, no imitating.',
          'Put your attention on the thing underneath instead. What is stressful this week, '
            + 'are they sleeping, are they hungry, is something exciting coming.',
          'If the tics are hurting them or getting in the way of daily life, ask their doctor '
            + 'about therapy designed for tics rather than trying to manage it with willpower at '
            + 'home.',
        ],
        avoid: 'Making a deal, such as a reward for a quiet hour. It turns an involuntary movement '
          + 'into a performance they can fail, and adds exactly the pressure that raises tics.',
      },
      {
        when: 'The tics explode the second we get in the car after school.',
        why: 'They have almost certainly been holding on all day. Suppression is possible in short '
          + 'stretches, and many children do it at school to avoid being noticed, but it takes '
          + 'concentration, which is why their schoolwork can look worse than their ability. The '
          + 'car is the first safe place. The explosion is a release, not a decline.',
        do: [
          'Make the first 30 minutes after pickup a no demand zone. Music, silence, a snack, '
            + 'whatever they choose.',
          'Ask nothing about the school day until after they have eaten and moved.',
          'Delay homework by at least an hour, and cap the time rather than the amount.',
          'Ask school for a place they can go briefly without announcing it, so the whole day '
            + 'is not one long hold.',
        ],
        avoid: 'Reading the calm school report as proof that the tics are voluntary. What that '
          + 'report usually means is that the holding on happened somewhere you cannot see.',
      },
      {
        when: 'Their cousin is coming to stay and the tics have gone through the roof.',
        why: 'Tics rise with excitement just as much as with stress. Parents often expect the '
          + 'stress part and are blindsided by the happy part, and then worry that the child does '
          + 'not actually want the good thing. They do want it. Their nervous system is simply '
          + 'running hot, and a hot nervous system tics more. Tics also naturally come and go in '
          + 'waves over weeks, so a busy stretch is not a new baseline.',
        do: [
          'Say out loud, before the visit, that busy tics are expected and mean nothing is '
            + 'wrong. Say it to the child and to the visitor.',
          'Build in 2 planned quiet breaks per day during the visit, on the schedule, not '
            + 'offered as a rescue when things go wrong.',
          'Protect sleep hard. Fatigue is the other big amplifier, and a visit usually eats '
            + 'bedtime.',
          'Give the visiting child or adult 1 simple instruction. We do not mention the '
            + 'movements or sounds.',
        ],
        avoid: 'Canceling the fun thing to keep tics down. You would be teaching them that joy is '
          + 'dangerous, and it would not work anyway.',
      },
      {
        when: 'Another kid asked why they do that, and my child froze.',
        why: 'Most of the social damage comes from having no script, not from the question. '
          + 'Children asking is usually plain curiosity, and it is answerable in a sentence. What '
          + 'hurts is the moment of not knowing what to say while everyone waits.',
        do: [
          'Give your child 1 short line to own, in their words, such as "My body does extra '
            + 'movements sometimes. It\'s called tics. I can\'t stop it and it doesn\'t hurt."',
          'Practice it 3 times at home when nothing is happening, so it is available under '
            + 'pressure.',
          'Agree on who handles it in which setting. You answer adults, they answer kids, or '
            + 'the other way around if they prefer.',
          'Ask a trusted teacher to give the class a plain, brief explanation with your '
            + 'child\'s permission, which usually ends the questions for good.',
        ],
        avoid: 'Jumping in to answer for them every time. It rescues the moment and quietly tells '
          + 'them that this is too shameful to say themselves.',
      },
      {
        when: 'They say their neck hurts from the movements and I don\'t know if that\'s normal.',
        why: 'Tics vary a lot, and some are forceful or repeated enough to cause real muscle pain '
          + 'or injury. This is one of the times when the answer is not a home strategy. Pain '
          + 'from tics is a legitimate medical thing to raise, and there are options worth '
          + 'discussing with someone who knows tic disorders.',
        do: [
          'Write down what hurts, which movement causes it, and how long it has been going '
            + 'on, then contact their doctor.',
          'In the meantime, reduce the physical load of the day and soften what the body is '
            + 'hitting, with cushions and supported seating.',
          'Do not hold, restrain, or brace the body part, and keep anything tight away from '
            + 'the neck.',
          'If the pain is new, sharp, or worsening, treat it as a reason to call today rather '
            + 'than at the next routine visit.',
        ],
        avoid: 'Deciding to wait and see because the tics have always waxed and waned. Pain is a '
          + 'different question from frequency, and it deserves its own answer.',
      },
    ],
    reassure: [
      'If you have been telling your child to stop, and you just learned that this makes tics '
        + 'worse, you are probably sitting with a hot, sick feeling right now. Put it down. Every '
        + 'reasonable parent tries that first, because it is what we are taught to do with '
        + 'behavior, and because nobody handed you a leaflet explaining that this particular '
        + 'thing is not behavior. You corrected it the week you found out. That is genuinely what '
        + 'good parenting looks like. Your child will remember that you stopped, not that you '
        + 'started.',
      'The other quiet guilt is about embarrassment. You have felt it, in the checkout line, '
        + 'at church, at your in laws\' house, and then felt terrible for feeling it. Both things '
        + 'can be true. You can love this child completely and still flinch when a room turns to '
        + 'look. Noticing that flinch, and not putting it on your child to manage, is the whole '
        + 'job. You do not have to feel nothing.',
      'Here is what is worth holding onto. Tics come in waves. There will be weeks that look '
        + 'like a slide backward and then quietly are not. For most people the loudest years are '
        + 'the early teens, and things tend to settle after that. You are not watching a straight '
        + 'line. You are watching weather. Your job on a loud day is not to fix it, it is to '
        + 'lower the pressure in the room, feed them, protect their sleep, and stay the person '
        + 'they are not performing for.',
    ],
  },
  downSyndrome: {
    days: [
      {
        name: 'Strong day',
        looks: 'They are upright, engaged, and holding their own posture without propping. They are '
          + 'offering words or signs, trying things, and staying with a task past the first '
          + 'difficulty.',
        do: [
          'Do the new learning today, not the review. New words, new skills, the first go at '
            + 'something.',
          'Work in 15 minute blocks with movement between, and stop at 3 blocks even if it is '
            + 'going well.',
          'Put the hard fine motor task early, such as writing, cutting, or buttons, while '
            + 'the trunk is still holding itself up.',
          'Get 20 to 30 minutes of active movement in, such as walking, dancing, swimming, '
            + 'climbing. Building strength on the good days is what makes the heavy days less '
            + 'frequent.',
          'End on something they are already good at, so the last memory of the session is '
            + 'competence.',
        ],
        say: '"You\'ve got a strong body today. Let\'s learn something new while you\'re feeling '
          + 'it."',
      },
      {
        name: 'Heavy body day',
        looks: 'They are slumping over the table, propping their head on a hand, sliding down in the '
          + 'chair, sitting on the floor rather than a chair, or leaning on you constantly. '
          + 'Handwriting looks much worse than yesterday.',
        do: [
          'Fix the chair before you judge the child. Feet flat on the floor or on books, hips '
            + 'and knees at roughly right angles, table at about elbow height, forearms resting '
            + 'on the surface. Low muscle tone means an unsupported body spends everything it has '
            + 'on staying upright.',
          'Move the work to a slanted surface, such as a binder with the paper clipped on, so '
            + 'they are not fighting gravity with their neck.',
          'Cut writing to a third and switch the rest to pointing, matching, saying, '
            + 'stamping, or dragging word cards.',
          'Do 3 short movement breaks of 3 to 5 minutes rather than 1 long one, and make them '
            + 'upright and weight bearing, such as wall pushes or carrying a basket.',
          'If they are sliding off the chair by the second task, stop academic work and do '
            + 'something on the floor on their tummy instead.',
        ],
        say: '"Your body feels heavy today. Let\'s get you propped up properly, then we\'ll do the '
          + 'short version."',
      },
      {
        name: 'I\'m done day',
        looks: 'They sit down, go still, go floppy, or say no to everything, often right at the '
          + 'start of something. Pushing produces more stillness, not less. This often follows a '
          + 'day or a week of tasks that were slightly too hard.',
        do: [
          'Read this as a signal about the task, not the child. Sitting down is usually the '
            + 'clearest communication available to them about difficulty.',
          'Drop the demand to something they can definitely do in 1 try, and accept it as the '
            + 'whole task.',
          'Offer a real choice of 2, such as this one or that one, now or after snack. '
            + 'Control is often the thing being asked for.',
          'Rebuild tomorrow\'s version of the task to be 1 step easier, and start it with the '
            + 'part they enjoy.',
          'If you have had 3 of these days in a week, make the whole plan easier rather than '
            + 'trying harder.',
        ],
        say: '"That was too much, wasn\'t it. You don\'t have to do that one. Pick this or that."',
      },
      {
        name: 'Not hearing well day',
        looks: 'They are not responding to their name, are watching your face harder than usual, are '
          + 'speaking less clearly, seem to be in their own world, or have a cold or a stuffy '
          + 'nose. Instructions bounce off.',
        do: [
          'Assume they can hear less today and do not raise your voice. Get in front of them, '
            + 'at their level, and let them see your mouth.',
          'Show, do not just say. Point, demonstrate, hold up the object, write the word, use '
            + 'the sign.',
          'Give 1 instruction at a time and wait a full 5 to 10 seconds before repeating. '
            + 'Processing and word finding take longer than you think, and rushing produces '
            + 'silence.',
          'Switch to visual work today, such as word cards, pictures, matching, and reading, '
            + 'and leave listening heavy tasks for another day.',
          'If this is happening often, or comes with colds, mention it to their doctor. '
            + 'Hearing that comes and goes is common enough to be worth checking rather than '
            + 'assuming.',
        ],
        say: '"Let me come round where you can see me. I\'ll show you instead of telling you."',
      },
    ],
    kit: {
      free: [
        'Feet flat, hips and knees at roughly right angles, table at elbow height, forearms '
          + 'supported. This is the highest value free change on this page. With low muscle tone, '
          + 'a body that has to hold itself up has very little left for hands. A shoebox or a '
          + 'stack of books under the feet does the job, and sitting them at a table corner or '
          + 'against a wall supports even more of the body.',
        'Tape or clip the paper down, and use a binder as a slant board. Both remove a job '
          + 'from a hand that is already working hard.',
        'Make whole word cards from index cards or scrap paper, in large plain print. Many '
          + 'children with Down syndrome learn strongly through their eyes and can recognize '
          + 'whole written words as pictures before they can sound anything out. Start with names '
          + 'of family, favorite things, and food. Research based reading programs for Down '
          + 'syndrome build a sight vocabulary of around 50 words before bringing in phonics, '
          + 'rather than starting with letter sounds.',
        'Label the house. Put printed words on the door, the bed, the fridge, the box of '
          + 'trains. Free, visual, and it turns the whole day into reading practice.',
        'Wait longer. After you ask something, count to 10 in your head before you repeat or '
          + 'rescue. Understanding usually runs well ahead of speaking, so the answer may be '
          + 'there and just slow to come out. Filling the silence teaches them not to try.',
        'Break every task into 3 visible pieces so the end is always in sight.',
      ],
      cheap: [
        'A pack of index cards and a thick marker for sight word cards and labels. This is '
          + 'the cheapest thing on the page with the best research behind it for this particular '
          + 'group.',
        'A footrest or an upside down step stool. Small money, large effect on posture and '
          + 'therefore on handwriting.',
        'A slant board or angled writing surface.',
        'Hand tools for a low tone grip. Loop scissors that spring open on their own so a '
          + 'hand only has to squeeze, plus chunky triangular pencils and a few shapes of grip. '
          + 'Grip evidence is weak in general, but a wider barrel often helps and the whole lot '
          + 'is a few dollars.',
        'A small dry erase board and markers. Vertical writing on a board or an easel is '
          + 'easier on a low tone shoulder than flat paper, and mistakes wipe away, which lowers '
          + 'the stakes.',
        'A visual timer and a simple picture schedule, printed or drawn, so the shape of the '
          + 'day is visible rather than only spoken.',
      ],
      worth_it: [
        'An occupational therapy assessment. Worth it because seating, posture, and hand '
          + 'support need to be set up for your specific child, and because an OT will spot the 2 '
          + 'changes that matter out of the 20 available. Getting this right early saves years of '
          + 'bad handwriting habits. Ask them about any weighted product before you buy one, '
          + 'because evidence for weighted vests is limited, and if one is recommended it is '
          + 'never for sleep, never heavier than the child can move off themselves, and never '
          + 'around the neck.',
        'A reading program built specifically on the way many children with Down syndrome '
          + 'learn, meaning whole words first, a sight vocabulary established before phonics, '
          + 'plenty of pictures, and reading used to build spoken language. This has real '
          + 'research support for this group, which is more than can be said for most things you '
          + 'will be sold. Reading aloud from a page also gives a child a sentence that is '
          + 'already organized for them, which takes the load off memory and lets them work on '
          + 'speech.',
        'A speech and language assessment, including a look at signs, pictures, or a '
          + 'communication app. Worth it precisely because understanding usually outruns speech, '
          + 'so a child who cannot tell you something may still know it. Giving them a second '
          + 'route out is often the single biggest change in daily frustration for the whole '
          + 'family.',
        'A tablet or keyboard as a route around handwriting for school age children. Worth it '
          + 'when handwriting fatigue is capping what they can show you. Keep handwriting '
          + 'practice as its own short daily slot rather than the only way to produce work.',
      ],
    },
    moments: [
      {
        when: 'They just sit down on the floor and refuse, and I don\'t know whether to push.',
        why: 'This is almost always communication rather than defiance. Sitting down is available '
          + 'to a child when the words for "this is too hard" or "I have had enough" are not. It '
          + 'very often follows a task that was pitched slightly too high, or a stretch of days '
          + 'where everything was. Pushing a body with low tone that has already run out of '
          + 'postural stamina produces stillness, because there is nothing left to push with.',
        do: [
          'Stop the demand. Not as a reward, as information gathering.',
          'Make the task visibly smaller and offer it once. 1 problem, 1 word, 1 button.',
          'Offer a choice of 2 real options so they have some control in the moment.',
          'Come back tomorrow with a version 1 step easier, starting with the part they like.',
        ],
        avoid: 'Turning it into a standoff about compliance. You will win the floor and lose the '
          + 'task, and next time the shutdown will come earlier.',
      },
      {
        when: 'Handwriting wears them out after 2 lines.',
        why: 'Low muscle tone and flexible joints mean a body works harder to stay upright and a '
          + 'hand works harder to hold a shape. Before the pencil even moves, energy has gone '
          + 'into the trunk, the shoulder, and the neck. Two lines is not a short attention span. '
          + 'It is a body that has spent its budget on posture.',
        do: [
          'Fix seating first. Feet supported, elbows at table height, forearms resting, back '
            + 'supported, then slant the surface, anchor the paper, and try a thicker barrel '
            + 'pencil.',
          'Cut the writing to a third and keep the thinking the same. 5 problems, not 15.',
          'Move some writing to vertical, on a dry erase board or an easel, which is kinder '
            + 'to the shoulder.',
          'Ask an occupational therapist to set this up properly rather than guessing across '
            + 'a dozen products.',
        ],
        avoid: 'Adding more handwriting practice because it is weak. More repetitions on an '
          + 'unsupported body mostly builds fatigue and a grip you will have to undo later.',
      },
      {
        when: 'People act like reading is off the table for them.',
        why: 'That belief is out of date. There is a real body of research on teaching reading to '
          + 'children with Down syndrome, and it points somewhere specific. Many of these '
          + 'children are strong visual learners who recognize whole written words as units well '
          + 'before they can decode sounds, which is roughly the opposite order of how most '
          + 'school programs start. Programs built on that order, whole words first and a sight '
          + 'vocabulary of around 50 words before phonics, have research behind them. Reading is '
          + 'also one of the best ways in to spoken language for these children, because the '
          + 'printed sentence holds the words steady so they can work on saying them.',
        do: [
          'Start today with 5 printed words that matter to them, such as their name, mom, '
            + 'dad, and 2 favorite things, in large plain print on index cards.',
          'Play matching and finding games with those words rather than drilling them, add a '
            + 'word only when the old ones are solid, and label things around the house so words '
            + 'appear in real life and not only at the table.',
          'Once there is a bank of around 50 words they know by sight, bring in letter '
            + 'sounds, rather than the other way round.',
          'Read aloud together from books with the words they know, and let them fill in what '
            + 'they can.',
        ],
        avoid: 'Letting a program that starts with letter sounds be the only thing you try. When it '
          + 'stalls, people conclude the child cannot read, when what stalled was the order.',
      },
      {
        when: 'I can tell they understand me, but they can\'t tell me what\'s wrong, and we both '
          + 'end up upset.',
        why: 'For most children with Down syndrome, understanding runs ahead of speaking, '
          + 'sometimes by a lot. Word finding and short term memory for sounds are the usual '
          + 'bottlenecks, not comprehension. So a child can follow the whole conversation and '
          + 'still not be able to produce the 1 word that would fix the moment. That gap is '
          + 'genuinely maddening for them, and a lot of what looks like frustration or behavior '
          + 'is this.',
        do: [
          'Assume they understood. Speak to them at their real level of comprehension, not at '
            + 'their level of speech.',
          'Give them a second route out. Pointing, a sign, a photo on your phone, a picture '
            + 'board, an app, writing the word if they read.',
          'Ask questions they can answer without a sentence. Show me, is it this or this, yes '
            + 'or no.',
          'Wait a full 10 seconds after asking. The word is often coming and gets lost when '
            + 'the room fills up with other voices.',
        ],
        avoid: 'Simplifying what you say to them to match how they speak. It is well meant, and it '
          + 'removes exactly the rich language they need to hear.',
      },
      {
        when: 'They\'re slumped over the table by the second worksheet and I keep saying sit up.',
        why: 'Telling a child with low tone to sit up asks them to spend energy on posture that '
          + 'they need for the task. They are not being sloppy. The chair is probably wrong. A '
          + 'child whose feet dangle, whose back is unsupported, or whose table is too high will '
          + 'collapse forward within minutes no matter how motivated they are.',
        do: [
          'Stop the reminders and change the furniture. Books under the feet, cushion behind '
            + 'the back, table at elbow height.',
          'Let them work at a corner or against a wall so more of the body is supported by '
            + 'something other than muscle.',
          'Switch to 15 minute blocks with an upright, weight bearing movement break between, '
            + 'such as carrying or pushing something.',
          'If the slump is still there with good seating, that is worth an occupational '
            + 'therapy conversation rather than more reminders.',
        ],
        avoid: 'Repeating "sit up straight" through the session. It costs them the energy they were '
          + 'about to use on the work, and it becomes a running commentary on their body.',
      },
    ],
    reassure: [
      'The guilt with this one tends to split in 2 directions, and you will feel both in the '
        + 'same week. On Monday you are sure you are not pushing hard enough, that some other '
        + 'parent is doing 3 therapies and phonics and you are letting time slip away. On '
        + 'Thursday you are sure you are pushing too hard, that you are turning your child\'s '
        + 'whole childhood into a program. Both feelings are honest and neither is a verdict. The '
        + 'thing that actually distinguishes a good week is not how much you did. It is whether '
        + 'the tasks were pitched at the right level, because a well pitched task is why one day '
        + 'ends in learning and a nearly identical day ends on the floor.',
      'If you have been told, in words or in glances, that your child will not read, will not '
        + 'talk much, will not manage school, understand that you were handed a set of '
        + 'expectations that the research left behind. Understanding usually runs ahead of '
        + 'speech, which means your child is taking in far more than they can hand back to you '
        + 'right now. Strong visual learning means printed words are often a real door rather '
        + 'than a distant hope. None of that promises you a timeline. It does mean the ceiling '
        + 'people described to you was not measured, it was assumed.',
      'One more thing. On the heavy days, when they are sliding off the chair and nothing is '
        + 'landing, the most useful thing you can do is boring and physical. Get the feet '
        + 'supported. Get the table at the right height. Make the task a third of the size. That '
        + 'is not giving up on the lesson. With low muscle tone, the seating is the lesson, '
        + 'because a body that is not fighting gravity has something left over for thinking. You '
        + 'are not lowering expectations. You are paying the body\'s bill first.',
    ],
  },
  prematurity: {
    days: [
      {
        name: 'Full tank day',
        looks: 'They wake up settled, they are curious, they stay with something for a while, and '
          + 'they recover from small frustrations on their own.',
        do: [
          'Use it for the thing that needs a good day, such as new learning, a new place, a '
            + 'doctor visit, a social event.',
          'Still cap the day. Whatever they could do in 90 minutes, plan for 60, so the day '
            + 'ends with something in reserve.',
          'Add 20 to 30 minutes of active play they choose. Building stamina happens on these '
            + 'days, not on the hard ones.',
          'Hold the routine steady anyway. Good days often tempt us into a late night, which '
            + 'is what turns tomorrow into a hard day.',
        ],
        say: '"You seem full of it today. Want to do the new thing while it feels easy?"',
      },
      {
        name: 'Too much day',
        looks: 'Noise, light, crowds, or several people talking at once, and they go either wild or '
          + 'completely flat. They may cover their ears, hide, cry at nothing, or lose skills '
          + 'they had an hour ago.',
        do: [
          'Reduce input before you talk to them. Turn off the overhead light and use a lamp, '
            + 'turn off the background noise, clear everything off the table except 1 item.',
          'Take them somewhere smaller for 10 to 15 minutes. A bedroom, a car, a bathroom, '
            + 'outside. Quiet and boring is the treatment.',
          'Speak in short sentences and fewer of them. Every extra word is more to process.',
          'Do not add a new activity to distract them. Subtract instead.',
          'If you are out, leave. Leaving 40 minutes early is a smaller cost than the next 3 '
            + 'hours.',
        ],
        say: '"It\'s too loud and too much in here. Let\'s go somewhere quiet for a few minutes, '
          + 'then decide."',
      },
      {
        name: 'Running on empty day',
        looks: 'They are fading much earlier than other children the same age, asking to be carried, '
          + 'lying on the floor, or falling apart at the 30 minute mark of something that used to '
          + 'be fine.',
        do: [
          'Believe the fatigue. Children born preterm often have less endurance than their '
            + 'calendar age suggests, and that is physical, not motivational.',
          'Halve the day. 1 outing, not 3. 10 or 15 minute work blocks, not 30.',
          'Put a rest in before they need it, not after they collapse. A planned 20 minutes '
            + 'of lying down at 11 am prevents the 2 pm disaster.',
          'Cancel the extra activity today, including the good one. Rest is the right '
            + 'prescription on this day.',
          'Move bedtime 30 minutes earlier tonight.',
        ],
        say: '"Your tank is low today. We\'re doing 1 thing, and the rest can wait."',
      },
      {
        name: 'Gap day',
        looks: 'A skill that was there is not there today, or someone at the park asks how old they '
          + 'are and the answer lands badly, or you are comparing them to a cousin in your head '
          + 'all afternoon.',
        do: [
          'Do the corrected age math and write it on the fridge. Take the weeks since birth, '
            + 'subtract how many weeks early they arrived from 40, and use that number. A baby '
            + 'born at 32 weeks who is 4 months old has a corrected age of about 2 months. '
            + 'Pediatric guidance is to use corrected age for developmental expectations through '
            + 'roughly the first 2 years.',
          'Compare them to themselves 3 months ago, not to the child at the next table. Look '
            + 'at photos or a note you made.',
          'Do 1 thing today they are genuinely good at, so both of you get evidence.',
          'Write down the specific thing that worried you, with a date, and bring the note to '
            + 'their next checkup instead of researching it at midnight.',
          'If a skill they clearly had is gone rather than wobbly, that is worth calling '
            + 'their doctor about rather than waiting.',
        ],
        say: '"You\'re doing this on your own clock. Let\'s look at what you couldn\'t do in the '
          + 'spring."',
      },
    ],
    kit: {
      free: [
        'The corrected age number, written down somewhere you can see it. Weeks since birth '
          + 'minus weeks early. Pediatric guidance says to judge developmental expectations '
          + 'against that number, not the birthday, for roughly the first 2 years. It reframes '
          + 'half the worry in the house for free.',
        'Feet flat and the table at elbow height, with a stack of books under the feet if '
          + 'they dangle, the paper taped or clipped down, and the task broken into 3 visible '
          + 'pieces.',
        '1 thing on the table at a time. Clear everything else off. A cluttered surface is '
          + 'extra input for a child who is already near capacity.',
        'A lamp instead of the overhead light, and the background noise off, during any work '
          + 'session.',
        'Shorter blocks. 10 minutes for a young child, 15 for an older one, with a real '
          + 'break. Endurance is often the limit, not ability.',
        'A quiet corner with a blanket and a cushion that is a landing place, never a '
          + 'punishment place.',
      ],
      cheap: [
        'A visual timer, so effort has a visible end and they can pace themselves.',
        'Noise reducing ear muffs for shops, gyms, parties, and noisy classrooms. Some '
          + 'children use them constantly for a year and then stop needing them. Evidence is '
          + 'limited, cost is low, and the child will usually tell you clearly whether they help.',
        'A small clip on lamp for the work area.',
        'A footrest or an upside down step stool, plus pencil grips and a slanted writing '
          + 'surface. Evidence for grips is weak, but the footrest alone is often the change that '
          + 'lets a child sit and work for longer.',
        'A clipboard, so work can happen on a lap in a quiet room instead of only at a desk.',
        'A light lap pad for sitting work, if they seem calmer with some pressure. Two rules. '
          + 'Never for sleep, and never heavier than they can move off by themselves.',
      ],
      worth_it: [
        'A developmental assessment, either through a preterm follow up clinic or an early '
          + 'intervention program. Worth it because it replaces years of wondering with a '
          + 'baseline and a plan, and because early intervention services are often free or low '
          + 'cost once you have the assessment in hand. This is the highest value thing on the '
          + 'page.',
        'An occupational therapy assessment, if handwriting, coordination, or sensitivity to '
          + 'noise and touch is shaping the day. Worth it because you get the 2 changes that '
          + 'matter for your child rather than a shopping list.',
        'A keyboard or tablet with speech to text for a school age child whose thinking is '
          + 'well ahead of what their hand can produce.',
        'Skip the weighted vest as a general purchase. Evidence for weighted vests is '
          + 'limited. If a therapist recommends a weighted item for a specific reason, never at '
          + 'sleep, never heavy enough to restrict movement, and nothing around the neck.',
      ],
    },
    moments: [
      {
        when: 'Everyone asks why they\'re so small, and I have to explain the birth again.',
        why: 'You are being asked to retell the hardest weeks of your life to strangers in a '
          + 'checkout line, and each time you have to decide how much to give away. The '
          + 'exhaustion is not about the question. It is about the unpaid emotional work of '
          + 'narrating your own trauma on demand.',
        do: [
          'Prepare 1 short line you can say without going anywhere near the story, such as '
            + '"She arrived early, she\'s catching up nicely, thanks." Then change the subject.',
          'Decide in advance who gets the real version. A friend, yes. A stranger at the '
            + 'store, no. You are allowed to have a public answer and a private one.',
          'Give your child their own line as they get older, such as "I was born early," so '
            + 'they are not waiting for you to explain them.',
          'Let yourself be done. If you cannot face it today, "He\'s small for his age" is a '
            + 'complete sentence.',
        ],
        avoid: 'Answering fully every time because it feels rude not to. It bleeds you out slowly '
          + 'and gives near strangers a piece of something that belongs to you.',
      },
      {
        when: 'They fall apart at every birthday party and I\'m starting to dread invitations.',
        why: 'A party is the maximum possible amount of input. Noise, echo, bright lights, sugar, '
          + 'other people\'s excitement, changing rules, no predictable schedule. Many children '
          + 'born preterm hit capacity on input sooner, and when capacity is reached the nervous '
          + 'system stops handling anything well. The meltdown at the end is usually the bill for '
          + 'the whole hour, not a reaction to the last thing that happened.',
        do: [
          'Arrive early, before the crowd and the noise build. The first 20 minutes of a '
            + 'party is a different event from the last 20.',
          'Plan to stay 45 minutes and leave while it is still going well, whatever is '
            + 'happening on the schedule.',
          'Find the quiet spot when you arrive, before you need it, and take 1 break there at '
            + 'the halfway point whether or not anything is wrong.',
          'Tell your child the plan out loud in advance, including when you will leave, so '
            + 'the ending is not a surprise, and keep the rest of that day empty.',
        ],
        avoid: 'Staying for the cake because it would be rude to leave. The extra 30 minutes costs '
          + 'you the evening, and sometimes the next day too.',
      },
      {
        when: 'They\'re behind their class and I cannot stop comparing them to other kids.',
        why: 'Comparison is not a character flaw, it is how humans check on safety, and you have a '
          + 'very good reason to be checking. The trouble is that you are comparing 2 different '
          + 'measurements. The classroom compares by birthday. Children born preterm develop on a '
          + 'timeline that is shifted, and pediatric guidance is to use corrected age for '
          + 'developmental expectations in the early years. Beyond that, catch up is uneven. It '
          + 'happens in bursts, in different areas at different times, and rarely in the neat '
          + 'order anyone wants.',
        do: [
          'Switch your comparison to your own child 3 or 6 months ago. Keep a short note or a '
            + 'photo so you have something real to compare against.',
          'Write down the 1 specific thing that worries you most, with dates and examples, '
            + 'and take it to their doctor rather than a search engine.',
          'Ask school for their actual data rather than a general impression, and ask what '
            + 'support is available now rather than later.',
          'Give yourself a limit. 10 minutes of worrying and then something else, because '
            + 'past that point it is no longer information gathering.',
        ],
        avoid: 'Making the comparison out loud in front of them. They hear it, they cannot do '
          + 'anything about it, and it becomes part of how they describe themselves.',
      },
      {
        when: 'I still replay the birth and wonder what I did wrong.',
        why: 'Preterm birth mostly happens for reasons nobody can point to, and the human mind '
          + 'absolutely cannot tolerate that. So it goes looking for a cause it can hold, and the '
          + 'only thing available in the story is you. That is why the guilt attaches to the '
          + 'coffee, the stress, the lifting, the argument, the shift you worked. It is not '
          + 'evidence. It is your mind refusing to accept a blank where a reason should be.',
        do: [
          'Say the accusation out loud in plain words, to a person or on paper, because it is '
            + 'usually much thinner in daylight than at 2 am.',
          'Ask your own doctor directly what is actually known about why it happened, and '
            + 'write down the answer where you can reread it.',
          'Notice the pattern in when it hits. Usually a hard day with your child, or a '
            + 'milestone, or an anniversary, which tells you it is grief showing up rather than '
            + 'new information.',
          'Talk to someone who does this for a living if it is still running the show. '
            + 'Replaying a birth for years is common, treatable, and not something you are '
            + 'supposed to manage alone.',
        ],
        avoid: 'Trying to settle it by researching causes at night. Every search gives you a new '
          + 'candidate to blame yourself for and never gives you the absolution you went looking '
          + 'for.',
      },
      {
        when: 'School says they can\'t sit still or focus, and I think they just get tired.',
        why: 'Both things can be true, and fatigue is the part that is usually missed. A child who '
          + 'is running out of physical stamina by 10 am looks exactly like a child who is not '
          + 'paying attention. They get up, they fidget, they stop producing work, they get '
          + 'silly. Endurance is a real and underappreciated difference for many children born '
          + 'preterm, and it is the thing nobody in a classroom is watching for.',
        do: [
          'Ask the teacher for the timing, not the behavior. What time of day does it happen, '
            + 'and how far into the task.',
          'Share the corrected age and the endurance picture in writing, with examples, so it '
            + 'is on the record as a physical thing to plan around.',
          'Ask for concrete accommodations, such as shorter work blocks, a legitimate '
            + 'movement break, and the hardest subjects earlier in the day.',
          'If it persists with those changes in place, ask for an evaluation rather than '
            + 'waiting to see.',
        ],
        avoid: 'Defending your child by insisting nothing is going on. You lose the teacher as an '
          + 'ally, and you both need each other for the accommodations to actually happen.',
      },
    ],
    reassure: [
      'Let\'s take the birth guilt apart properly, because it is almost always the real thing '
        + 'underneath. You have a list. The stress, the job, the drive, the argument, the thing '
        + 'you lifted, the day you did not rest. You have gone through it so many times that it '
        + 'feels like investigation. It is not. Preterm birth frequently happens with no '
        + 'identifiable cause, and your mind cannot sit with a blank space where a reason '
        + 'belongs, so it fills it with you, because you are the only character in the story it '
        + 'can hold responsible. That is not evidence about your body or your choices. That is a '
        + 'mind trying to make an unbearable thing make sense.',
      'There is a second guilt underneath the first, and fewer people say it out loud. You '
        + 'may not have felt what you were supposed to feel. There was a plastic box and wires '
        + 'and other people\'s hands on your baby, and permission to visit, and you were '
        + 'terrified and numb and maybe not bonded at all for a while, and you have quietly held '
        + 'that against yourself ever since. That is not a failure of love. That is what a person '
        + 'looks like when they have been through something frightening while being asked to '
        + 'behave normally. Love arrived anyway. It usually does, on its own schedule, not the '
        + 'one in the pamphlet.',
      'Here is the practical part. Use the corrected age, for the first couple of years, and '
        + 'let it recalibrate your whole sense of how things are going. Watch your own child over '
        + 'months rather than against the child at the next table, because catch up comes in '
        + 'uneven bursts and almost never in the order you want. And when someone at the park '
        + 'says something thoughtless about their size, you are allowed to give them 8 words and '
        + 'nothing else. You already did the hardest part of this. You do not owe anybody the '
        + 'story.',
    ],
  },
  medicalComplexity: {
    days: [
      {
        name: 'Appointment day',
        looks: 'There is a clinic visit, a procedure, a test, a fasting requirement, or a long drive '
          + 'on the calendar. Everything else in the day is going to be shaped by it whether you '
          + 'plan for that or not.',
        do: [
          'Declare this a 1 thing day out loud, at breakfast. The appointment is the day. '
            + 'Nothing else is scheduled and nothing else is failing.',
          'Put your 3 questions in your phone the night before, because you will not remember '
            + 'them in the room.',
          'Pack the boring things that prevent a disaster. Food, drink, a charger, '
            + 'medications, a change of clothes, something absorbing.',
          'Plan the landing, not just the visit. Decide in advance what dinner is and that it '
            + 'is easy, and put nothing after the appointment.',
          'Skip schoolwork entirely today. It is not a gap, it is a correct allocation of a '
            + 'limited day.',
        ],
        say: '"Today\'s job is the appointment. That\'s the whole list. We\'re not behind on '
          + 'anything."',
      },
      {
        name: 'Day after',
        looks: 'They are wiped out, more emotional than usual, sore, clingy, or asleep at odd times. '
          + 'You are also wrecked, and possibly sitting with news you have not processed.',
        do: [
          'Assume the tank is near empty for both of you and plan for that, not for making up '
            + 'yesterday.',
          'Cancel everything you can. This is the most protectable day in the week and the '
            + 'one most often overbooked.',
          'Do 15 minutes of something gentle and connected, such as reading together, a show, '
            + 'drawing in bed. That is the entire academic and developmental agenda.',
          'Feed, hydrate, and rest before you start processing any news. Decisions made on '
            + 'this day are usually worse than the same decisions made Thursday.',
          'If you got hard information yesterday, write down what you were told and what you '
            + 'want to ask, then put it away until you have slept.',
        ],
        say: '"Yesterday took a lot out of both of us. Today we recover, and that\'s the plan, not '
          + 'the backup plan."',
      },
      {
        name: 'Good window day',
        looks: 'They feel well. Color is good, appetite is back, they are up and interested and '
          + 'asking to do things. These windows can be short and they are not always predictable.',
        do: [
          'Spend it on what matters most to them, not on what is furthest behind. If there is '
            + '1 hour of good energy, a friend, the park, or the project beats a worksheet.',
          'Do the 1 piece of catch up that actually matters, in 20 minutes, early, before the '
            + 'window closes.',
          'Add movement they choose, within whatever limits their team has given you. Good '
            + 'windows are where stamina gets built.',
          'Do not fill the window completely. Leave a third of it empty so the day does not '
            + 'end in a crash.',
          'Take a photo or write 1 line about it. On the bad weeks you will need the evidence '
            + 'that these days exist.',
        ],
        say: '"You\'re feeling good today. What do you want to spend it on?"',
      },
      {
        name: 'Rough patch day',
        looks: 'Symptoms are up, sleep is broken, they are not eating well, or something in their '
          + 'condition is unsettled. Everything takes 3 times as long and your own patience is '
          + 'paper thin.',
        do: [
          'Drop to the bare minimum and name it clearly. Medications, food, fluids, sleep, '
            + 'comfort, and connection. Everything else is off.',
          'Follow whatever plan their medical team has given you for days like this, and call '
            + 'them rather than waiting if you are not sure whether this is inside the plan.',
          'Move all activity to wherever they are. A clipboard and a pillow in bed, a story, '
            + 'an audiobook. Do not try to relocate them to a desk.',
          'Stop entirely if they are working to breathe, cannot keep fluids down, are much '
            + 'less responsive than usual, or anything matches the warning signs you were given. '
            + 'Those are call now signs, not push through signs.',
          'Ask 1 person for 1 specific thing today. A meal, a school pickup, an hour. '
            + 'Specific requests get answered and vague ones do not.',
        ],
        say: '"Today is about being comfortable. Nothing else is expected of you, and nothing else '
          + 'is expected of me."',
      },
    ],
    kit: {
      free: [
        'A 1 page summary of your child that lives in your phone and on the fridge. '
          + 'Diagnoses, medications and doses as written by their team, allergies, equipment, '
          + 'baseline, who to call. It saves you reciting it under stress, and it means someone '
          + 'else can step in.',
        'A running note in your phone for questions as they occur to you, so the appointment '
          + 'gets the real list and not whatever you can recall in the room.',
        'Work where they are. A pillow behind the back, a big book or a binder as a lap desk, '
          + 'paper clipped down so it does not slide, and on the days they are up at a table, '
          + 'feet flat and forearms supported.',
        '15 minute blocks with a real stop, and the task broken into 3 visible pieces. Assume '
          + 'that on many days you will get 1 block, and design so 1 block is a success.',
        'A photo of the medication list and the equipment settings, in case a bag goes '
          + 'missing or someone else takes over.',
        '1 empty day a week on the calendar, defended like an appointment, because it is the '
          + 'only thing that absorbs the unplanned.',
      ],
      cheap: [
        'A clipboard or a lap desk, or a wide cutting board, so work can happen in a bed, a '
          + 'car, or a waiting room.',
        'A cheap ring binder with dividers, or a scanning app on your phone, for discharge '
          + 'papers, test results, and letters. Boring, and it will save you hours across a year.',
        'A visual timer, so a short block of work has a visible end for a child who is easily '
          + 'worn out.',
        'A footrest or step stool for the table days, and a slant board with pencil grips. '
          + 'Evidence is thin for grips and boards, cost is low, worth 2 weeks of trying.',
        'A free dictation app, so a tired child can talk their answer instead of writing it.',
        'A soft eye mask and a small fan or white noise for hospital and clinic sleep.',
      ],
      worth_it: [
        'An occupational therapy assessment. Worth it because it looks at the whole real day, '
          + 'including fatigue, seating, equipment, and self care, and gives you the specific 2 '
          + 'or 3 changes for your child instead of a catalog.',
        'A tablet with a keyboard and good speech to text. Worth it for a child whose school '
          + 'participation keeps getting cut off by fatigue or by being in bed, because it '
          + 'separates thinking from the physical effort of writing.',
        'Adaptive seating or positioning equipment, when a therapist has named the specific '
          + 'need. Fit is everything here, so this is worth professional input and not worth '
          + 'buying speculatively. Ask the same team before adding any weighted product, because '
          + 'with equipment, lines, or breathing support in the picture the answer may be no, and '
          + 'weighted items are never for sleep, never heavy enough to restrict movement, and '
          + 'never around the neck.',
        'Paid help, if you can possibly reach it. Respite care, a few hours of nursing, a '
          + 'cleaner, a sitter for the sibling. The research on caregiver strain in families like '
          + 'yours keeps pointing at 2 protective things, having some daily support and getting '
          + 'enough sleep. Buying either of those back is more valuable than anything else on '
          + 'this page.',
      ],
    },
    moments: [
      {
        when: 'This whole week got eaten by appointments and nothing else happened.',
        why: 'This is not a planning failure. Coordinating care for a child with ongoing medical '
          + 'needs is genuinely a job, and it usually lands on a parent, unpaid, on top of the '
          + 'parenting. Several clinicians, several calendars, prescriptions, prior '
          + 'authorizations, supplies, and the driving. A week can be consumed by logistics and '
          + 'still contain almost no actual care by you, which is exactly why it feels so empty '
          + 'afterward.',
        do: [
          'Count the appointment week as the week\'s work. Write it down if you need to see '
            + 'it. 4 visits, 2 hours on the phone, 90 miles. That is a full week of labor.',
          'Move 1 recurring thing off your plate. Ask whether a visit can be telehealth, '
            + 'whether 2 can be scheduled on the same day, or whether a nurse line can answer it '
            + 'instead of a visit.',
          'Ask directly whether your child qualifies for care coordination, a case manager, '
            + 'or a complex care clinic. Many families are eligible and never told, and it is the '
            + 'single biggest reducer of this exact problem.',
          'Put 1 protected empty day into next week before anything else gets booked.',
        ],
        avoid: 'Trying to make the missed schoolwork and housework up over the weekend. You will '
          + 'spend the only recovery time you had, and next week starts with you already empty.',
      },
      {
        when: 'This month has been terrible and I\'m scared this is the new normal.',
        why: 'A bad month is a bad month. It is not automatically a trend. When you live inside '
          + 'the day to day, a run of hard weeks feels like a slope, because you have no vantage '
          + 'point and because your fear supplies the line between the dots. Many chronic '
          + 'conditions move in patches, with rough stretches that settle again, and some rough '
          + 'stretches have an ordinary cause sitting underneath them, such as a virus, a growth '
          + 'spurt, a change in routine, a sleep debt, or a season.',
        do: [
          'Write down what actually happened, with dates. Not how it felt, the events. A '
            + 'month usually looks different on paper than in your head.',
          'Look for the 1 thing that changed at the start of it. A cold going around, a '
            + 'schedule change, school starting, a bad sleep run.',
          'Take the written month to their team and ask the question directly. Is this a '
            + 'flare or a change in direction, and what would tell us the difference.',
          'Go back and read a note or look at a photo from a good window. You need the '
            + 'evidence that those existed, because a bad month deletes them from memory.',
        ],
        avoid: 'Making long term decisions during the worst week. Schooling, work, moving. The view '
          + 'from inside a rough patch is not the view you will have in 6 weeks.',
      },
      {
        when: 'I\'m either a nurse or a parent and I\'m never doing enough of either.',
        why: 'You have been given 2 full time roles that actively interfere with each other, and '
          + 'then judged by the standards of each while doing both. The medical job has visible '
          + 'tasks and deadlines, so it wins your attention by default and your parenting starts '
          + 'to feel like the thing you keep neglecting. It is not being neglected. It is '
          + 'happening inside the medical job, in the voice you use, in the way you explain '
          + 'things, in the hand on their back.',
        do: [
          'Ringfence 15 minutes a day that has no medical content at all. No questions about '
            + 'symptoms, no equipment, no logistics. A story, a show, a game. Short and protected '
            + 'beats long and hypothetical.',
          'Let someone else be the technician sometimes, if that is possible at all, so your '
            + 'child gets an hour of you as the fun one.',
          'Split the roles out loud where you can. "I have to do the nurse bit now, then I\'m '
            + 'coming back as mom." Children handle this well and it protects the relationship.',
          'Write down 1 thing you did today that was pure parenting. You will have done '
            + 'several and counted none.',
        ],
        avoid: 'Waiting for a calm stretch to be the fun parent again. The calm stretch is not '
          + 'coming on its own schedule, and 15 minutes today is worth more than a good week you '
          + 'are saving up for.',
      },
      {
        when: 'Their brother got nothing from me this week and I feel sick about it.',
        why: 'Attention in a family with high medical needs goes where the emergency is, because '
          + 'it has to. A sibling is not damaged by an unequal week. What tends to hurt is being '
          + 'unable to ask, having their smaller problems treated as unimportant, and having to '
          + 'find out what is happening from overheard phone calls.',
        do: [
          'Give them 10 protected minutes, alone, doing something they picked, on a '
            + 'predictable day. Small and reliable beats a big trip you cannot deliver.',
          'Tell them the truth in a size they can hold, and update them. Not knowing is worse '
            + 'than knowing.',
          'Let their small problems be real problems. Do not rank them against their '
            + 'sibling\'s out loud, even when the ranking is obvious to you.',
          'Give them 1 adult who is not you, such as a grandparent, an aunt, a coach, who is '
            + 'reliably theirs.',
        ],
        avoid: 'Telling them they have to understand because their sibling is sick. It is true and '
          + 'it is a heavy thing to hand a child, and it teaches them that their own needs are an '
          + 'inconvenience.',
      },
      {
        when: 'They\'re too tired to do any schoolwork and we\'re falling further behind.',
        why: 'Fatigue from a chronic condition, from treatment, from broken sleep, or from the '
          + 'effort of a body doing extra work is physical. It is not motivation and it cannot be '
          + 'pushed through with encouragement. Also, the thing you are measuring against was '
          + 'designed for a child who gets 5 predictable days a week, which is not the situation '
          + 'you are in.',
        do: [
          'Find the 1 hour a day when they are at their best and put the single most '
            + 'important thing there. Everything else is optional.',
          'Cut to essentials on paper, with the school. Ask which specific skills matter this '
            + 'term and let the rest genuinely go.',
          'Work in 15 minute blocks, in bed if that is where they are, with a clipboard and '
            + 'dictation, and ask school in writing about homebound instruction, a reduced '
            + 'schedule, or a medical accommodation plan. These exist and are rarely offered '
            + 'without being requested.',
          'Stop for the day when they are worse rather than just reluctant. Nothing gets '
            + 'learned past that point and it costs you tomorrow.',
        ],
        avoid: 'Measuring the year against the pace of a child with no medical appointments. It is '
          + 'the wrong ruler and it will have you grieving on a week when your child was actually '
          + 'doing well.',
      },
    ],
    reassure: [
      'The guilt in this lens has a very particular shape. It is not that you are failing at '
        + 'one thing. It is that you are always failing at whichever of the 2 jobs you are not '
        + 'currently doing. When you are on the phone fighting for a referral, you are a bad '
        + 'parent. When you are on the floor playing, you are neglecting the referral. That '
        + 'feeling is not a report card. It is the mathematically guaranteed result of being '
        + 'handed 2 full time roles that use the same hours. No parent in your position is doing '
        + 'both fully, because it cannot be done, and the ones who look like they are have help '
        + 'you cannot see.',
      'Something worth saying plainly. Coordinating your child\'s care is real work. It has a '
        + 'name in the research literature, it is known to be substantial, and it mostly falls on '
        + 'parents. When a week disappears into phone calls and driving and nothing else gets '
        + 'done, you did not lose the week. You worked it. If nobody has ever asked whether your '
        + 'child qualifies for care coordination or a case manager, ask, because that unpaid job '
        + 'was never supposed to be yours alone.',
      'And about the bad month. A bad month is a bad month. Your fear will want to draw a '
        + 'line through it and extend that line into next year, and from inside the month you '
        + 'will not be able to tell the difference between a rough patch and a change of '
        + 'direction. You do not have to settle that question tonight, and you should not try to. '
        + 'Write down what happened, take it to their team, and ask them the question out loud. '
        + 'In the meantime, look back at the last good window. It was real. It was not a fluke '
        + 'you imagined, and this month has not deleted it. And one last thing, because it comes '
        + 'up in every study of families like yours and almost never in conversation. Your own '
        + 'sleep and your own support are not luxuries at the bottom of the list. They are the 2 '
        + 'things most consistently linked to parents coping with this, which means an hour of '
        + 'help or a full night is maintenance on the person the whole system depends on. Ask 1 '
        + 'person for 1 specific thing this week.',
    ],
  },
};

export const DAYS_SOURCES = [
  { org: 'CDC',
    label: 'Treatment of ADHD, including behavior therapy, parent training and healthy lifestyle basics',
    url: 'https://www.cdc.gov/adhd/treatment/index.html' },
  { org: 'CHADD',
    label: 'Classroom accommodations, including movement, seating, timers and breaking work into '
      + 'smaller pieces',
    url: 'https://chadd.org/for-educators/classroom-accommodations/' },
  { org: 'Florida International University Center for Children and Families',
    label: 'Controlled study finding weighted vests and stability balls did not improve classroom '
      + 'attention or work in elementary students with ADHD',
    url: 'https://news.fiu.edu/2019/weighted-vests,-stability-balls-do-not-help-children-with-adhd1' },
  { org: 'American Academy of Pediatrics, HealthyChildren.org',
    label: 'Sensory integration therapy: evidence described as limited and inconclusive, and advice '
      + 'to talk with your pediatrician',
    url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Sensory-Integration-Therapy.aspx' },
  { org: 'Understood.org',
    label: 'Classroom accommodations for sensory processing challenges, including alternative '
      + 'seating, bands on chair legs, lap pads and headphones',
    url: 'https://www.understood.org/en/articles/classroom-accommodations-for-sensory-processing-challenges' },
  { org: 'Understood.org',
    label: 'Brain breaks: short 1 to 5 minute movement or calming breaks planned after roughly 10 to '
      + '25 minutes of work',
    url: 'https://www.understood.org/en/articles/evidence-based-behavior-strategy-brain-breaks' },
  { org: 'International Dyslexia Association',
    label: 'Structured Literacy: explicit systematic teaching of decoding, spelling, vocabulary, '
      + 'comprehension and writing',
    url: 'https://dyslexiaida.org/structuredliteracy/' },
  { org: 'Child Mind Institute',
    label: 'What to do and what not to do when children are anxious, including why avoidance and '
      + 'repeated reassurance backfire',
    url: 'https://childmind.org/article/what-to-do-and-not-do-when-children-are-anxious/' },
  { org: 'Child Mind Institute',
    label: 'How emotional regulation develops and how parents coach it rather than rescue',
    url: 'https://childmind.org/article/can-help-kids-self-regulation/' },
  { org: 'National Association for Gifted Children',
    label: 'Asynchronous development tip sheet for parents, including twice exceptional learners and '
      + 'peer matching',
    url: 'https://assets.noviams.com/novi-file-uploads/nagc/pdfs-and-documents/NAGC-TIP_Sheet-Asynchronous_Development.pdf' },
  { org: 'Frontiers in Pediatrics',
    label: 'Systematic review of sensory based interventions for children and youth, 2015 to 2024: '
      + 'strongest support for deep pressure and caregiver training, no significant effects found '
      + 'for weighted vests, alternative seating or noise canceling headphones on the outcomes '
      + 'measured',
    url: 'https://www.frontiersin.org/articles/10.3389/fped.2025.1720179' },
  { org: 'PDA Society',
    label: 'PANDA as a way in: prioritizing and compromising, anxiety management, negotiation, '
      + 'disguising demands with declarative language, and adaptation',
    url: 'https://www.pdasociety.org.uk/what-helps-guides/pda-approaches/panda-as-a-way-in/' },
  { org: 'International OCD Foundation',
    label: 'Managing OCD in Your Household: family accommodation, responding to reassurance seeking, '
      + 'and working with a trained clinician on exposure and response prevention',
    url: 'https://kids.iocdf.org/for-parents/managing-ocd-in-your-household/' },
  { org: 'National Institute of Mental Health',
    label: 'Obsessive Compulsive Disorder: exposure and response prevention is delivered by a '
      + 'trained mental health professional, and children often need family involvement',
    url: 'https://www.nimh.nih.gov/health/publications/obsessive-compulsive-disorder-when-unwanted-thoughts-or-repetitive-behaviors-take-over' },
  { org: 'Selective Mutism Association',
    label: 'How to Help Your Child with Selective Mutism: warm up time, small groups, open ended '
      + 'questions, waiting at least 5 seconds, and not forcing speech',
    url: 'https://www.selectivemutism.org/how-to-help-child-with-selective-mutism/' },
  { org: 'American Speech Language Hearing Association',
    label: 'Selective Mutism practice portal: selective mutism as an anxiety condition, and guidance '
      + 'to avoid speaking for the child or pressuring the child to speak',
    url: 'https://www.asha.org/practice-portal/clinical-topics/selective-mutism/' },
  { org: 'Autistic Self Advocacy Network',
    label: 'Start Here, a guide for parents of autistic kids: autism as part of who a child is, '
      + 'presuming competence, and what good support looks like',
    url: 'https://autisticadvocacy.org/book/start-here/' },
  { org: 'Centers for Disease Control and Prevention',
    label: 'Helping Children Cope: returning to routines, honest answers, limiting media, expecting '
      + 'regression such as bed wetting and tantrums, and seeking help if difficulties persist '
      + 'beyond 2 to 4 weeks',
    url: 'https://www.cdc.gov/children-and-school-preparedness/before-during-after/helping-children-cope.html' },
  { org: 'Oxford Health NHS Foundation Trust, Children\'s Community Occupational Therapy',
    label: 'Sensory weighted product advice: a maximum of about 10 percent of body weight, short '
      + 'periods of about 20 minutes rather than overnight use, constant supervision, head and '
      + 'neck never covered, and the child must be able to remove it alone',
    url: 'https://www.oxfordhealth.nhs.uk/wp-content/uploads/2014/05/Sensory-Weighted-Product-Advice.pdf' },
  { org: 'ASHA',
    label: 'Schlosser and Wendt 2008, systematic review finding AAC intervention does not hinder '
      + 'speech production and may increase it',
    url: 'https://apps.asha.org/EvidenceMaps/Articles/ArticleSummary/ef378226-07c0-48f4-8ba1-3bd0161d57c4' },
  { org: 'ASHA',
    label: 'Fey and colleagues 2011, evidence based systematic review concluding the evidence for '
      + 'auditory and language interventions in auditory processing disorder is too small and '
      + 'weak to guide practice',
    url: 'https://pubs.asha.org/doi/10.1044/0161-1461(2010/10-0013)' },
  { org: 'ASHA',
    label: 'McCauley and colleagues 2009, evidence based systematic review finding insufficient '
      + 'evidence to support or refute nonspeech oral motor exercises for speech',
    url: 'https://pubs.asha.org/doi/10.1044/1058-0360(2009/09-0006)' },
  { org: 'US Department of Education, IDEA regulations',
    label: '34 CFR 300.324, special factors an IEP team must consider, including braille '
      + 'instruction, the language and communication needs of a child who is deaf or hard of '
      + 'hearing, and assistive technology devices and services',
    url: 'https://www.ecfr.gov/current/title-34/subtitle-B/chapter-III/part-300/subpart-D/subject-group-ECFR11f22b2d80f8226/section-300.324' },
  { org: 'US Department of Education, IDEA regulations',
    label: '34 CFR 300.111, child find, requiring that all children with disabilities residing in '
      + 'the state, including children attending private schools, are identified, located, and '
      + 'evaluated',
    url: 'https://www.ecfr.gov/current/title-34/subtitle-B/chapter-III/part-300/subpart-B/subject-group-ECFR6a5e39e969a9a60/section-300.111' },
  { org: 'National Association of the Deaf',
    label: 'Position statement on American Sign Language as a full language and on early language '
      + 'access as a human right',
    url: 'https://www.nad.org/about-us/position-statements/position-statement-on-american-sign-language/' },
  { org: 'National Federation of the Blind',
    label: 'Educating Blind Children, on braille literacy, equal expectations, and rejecting a '
      + 'deficit model',
    url: 'https://nfb.org/educating-blind-children' },
  { org: 'NIDCD',
    label: 'Assistive Devices for People with Hearing, Voice, Speech, or Language Disorders, '
      + 'covering remote microphone and FM systems, captioned telephones, and AAC devices',
    url: 'https://www.nidcd.nih.gov/health/assistive-devices-people-hearing-voice-speech-or-language-disorders' },
  { org: 'Stuttering Foundation',
    label: '7 Tips for Talking With Your Child Who Stutters, including using your own unhurried '
      + 'speech rather than telling a child to slow down',
    url: 'https://www.stutteringhelp.org/7-tips-talking-your-child' },
  { org: 'Peer reviewed',
    label: 'Bess and Hornsby 2014, Ear and Hearing, on listening effort and fatigue in children with '
      + 'hearing loss reported at levels exceeding those reported for some chronic illnesses',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5603232/' },
  { org: 'Tourette Association of America',
    label: 'Tics in the classroom, an educator\'s guide, on suppression, triggers and tics not being '
      + 'deliberate',
    url: 'https://tourette.org/resource/tics-classroom-educators-guide/' },
  { org: 'National Institute of Neurological Disorders and Stroke',
    label: 'Tourette syndrome, involuntary tics, premonitory urge, waxing and waning, and stress and '
      + 'excitement as triggers',
    url: 'https://www.ninds.nih.gov/health-information/disorders/tourette-syndrome' },
  { org: 'Down Syndrome Education International',
    label: 'Teaching reading skills to children with Down syndrome, whole word first, sight '
      + 'vocabulary before phonics, comprehension ahead of production',
    url: 'https://www.down-syndrome.org/en-us/library/news-update/06/2/teaching-reading-skills-down-syndrome/' },
  { org: 'National Down Syndrome Society',
    label: 'Physical therapy, occupational therapy and speech therapy, including low muscle tone, '
      + 'fine motor skills and desk positioning',
    url: 'https://ndss.org/resources/pt-ot-down-syndrome' },
  { org: 'Eunice Kennedy Shriver National Institute of Child Health and Human Development',
    label: 'Common treatments and therapies for Down syndrome, including early intervention and '
      + 'adaptive tools',
    url: 'https://www.nichd.nih.gov/health/topics/down/conditioninfo/treatments' },
  { org: 'American Academy of Pediatrics, HealthyChildren.org',
    label: 'Corrected age for preemies, how to calculate it and using it for developmental '
      + 'expectations in the first 2 years',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx' },
  { org: 'Centers for Disease Control and Prevention',
    label: 'About cerebral palsy, types, associated conditions, and the role of physical, '
      + 'occupational and speech therapy',
    url: 'https://www.cdc.gov/cerebral-palsy/about/index.html' },
  { org: 'Cochrane',
    label: 'Task oriented intervention for children with developmental coordination disorder, '
      + 'showing possible benefit at very low certainty of evidence',
    url: 'https://www.cochrane.org/evidence/CD010914_task-oriented-intervention-children-developmental-co-ordination-disorder' },
  { org: 'American Journal of Occupational Therapy, via PubMed',
    label: 'Bodison and Parham systematic review of specific sensory techniques, finding only '
      + 'limited evidence for weighted vests',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29280714/' },
  { org: 'Peer reviewed, PubMed Central',
    label: 'Caregiver burden in children with medical complexity, with daily care support and '
      + 'adequate sleep as protective factors',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13286575/' },
];

export const DAYS_INTRO =
  'No 2 days with the same child are the same day, and running the same plan through all of them is '
  + 'how a parent ends up believing they are bad at this. Pick the kind of day it actually is, and '
  + 'change the plan rather than the child.';

export const KIT_INTRO =
  'Free things first, on purpose. Most of what gets sold for this is not the thing that helps, and '
  + 'a good deal of it has thinner evidence behind it than the packaging suggests. Where that is '
  + 'true it is said here, along with the honest other half, which is that something cheap that '
  + 'makes your child comfortable is worth trying whatever a study found.';

export const MOMENTS_INTRO =
  'What is actually happening underneath, which is almost never what it looks like from the outside, '
  + 'and what to do about it in the moment rather than afterward.';

export function daysFor(lensId) {
  return DAYS_BY_LENS[lensId] || null;
}

/* Whether there is anything at all behind this tab for this child, so
   it is never offered empty. */
export function daysAnyFor(lensIds) {
  return (lensIds || []).some((id) => DAYS_BY_LENS[id]);
}

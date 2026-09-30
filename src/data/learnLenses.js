/**
 * Ready Set Grow: The Learning Day, For This Child
 * ------------------------------------------------------------------
 * Her ask, and it is the one that matters most on this screen: "for
 * the learning page I want it to only be related to their profile,
 * their age, their needs whether it be autism, down syndrom, ocd,
 * adhd, whatever is marked on their profile."
 *
 * WHY THIS HAS TO EXIST. Nearly every word written about homeschooling
 * assumes a child who sits down when asked, holds an instruction in
 * their head, and finishes the thing. A parent whose child does not do
 * those things is handed the same advice and then told, usually kindly,
 * that they need to be more consistent. That is how a parent who is
 * already doing the hardest version of this ends up believing they are
 * the problem.
 *
 * SO EACH LENS SAYS 6 THINGS:
 *   headline   the single change that matters most
 *   day        what the shape of the day should actually be
 *   teaching   how a thing gets taught to this child
 *   watch      what gets misread as laziness or defiance, and what it
 *              usually is instead. This is the warmest part and it is
 *              the reason the section exists.
 *   wins       what this child is often genuinely good at, that a
 *              standard school day would never notice. Real strengths,
 *              not consolation.
 *   ask        what is worth raising with a doctor or a district,
 *              including that a homeschooled child can still be
 *              evaluated in most states.
 *
 * THE LANGUAGE RULE IS THE SAME AS EVERYWHERE IN THE APP. Nothing here
 * says a child has anything. The parent turned the lens on. Nothing is
 * a deficit, nothing is behind, and anything that needs a clinician
 * says so rather than being written as a home project.
 */

export const LL_INTRO = [
  'This part sits on top of the ordinary day rather than replacing it. You still have your '
    + 'together block, your taught block, your practice, your read aloud. What changes here is '
    + 'how long each block runs, what order they come in, how a thing gets explained, and what '
    + 'counts as finished. Everything below is here because you turned a lens on for your child, '
    + 'so it is written for that child instead of for a room of 25. It is teaching information, '
    + 'not a diagnosis and not a prediction, and none of it replaces your pediatrician or your '
    + 'child\'s therapists. You know your kid better than any app does. Take the parts that fit '
    + 'this week and leave the rest sitting here for later.',
];

export const LL_STACK_NOTE =
  'If you have more than 1 lens turned on, pick only the 1 or 2 changes from each that your '
    + 'child would actually notice today and let the rest wait.';

/* Keyed by lens id, matching SUPPORT_LENSES exactly. */
export const LEARN_LENSES = {
  adhd: {
    headline: 'Movement is part of the learning, not a break from it',
    day: [
      'Cap the taught block at 10 to 15 minutes, not 45. 2 short taught blocks with a move '
        + 'between them beat 1 long one.',
      'Put the hardest thing first, inside the first hour of the day, and never right after '
        + 'lunch.',
      'Let the practice block happen standing, pacing, on a ball, or lying on the floor. '
        + 'Accuracy often goes up when the body is allowed to move.',
      'Make time visible. A sand timer or a visual timer sitting on the table, so 15 minutes '
        + 'is a shrinking thing your child can see instead of a number you announced.',
      'Open the day with 10 minutes of real physical activity before the together block. Move '
        + 'first, then sit.',
    ],
    teaching: [
      'Give 1 instruction, then check. A 3 step direction gets lost in the middle, and that '
        + 'is working memory, not listening.',
      'Write the steps where your child can see them. Never make them hold the plan in their '
        + 'head while also doing the work.',
      'Shrink the page. 4 problems on a sheet instead of 20, or fold the paper so only 1 row '
        + 'shows. Volume on a page reads as impossible.',
      'Check understanding by having your child teach it back to you out loud, right away, '
        + 'while it is still there.',
      'Sit beside them for the first 2 minutes of anything hard. Getting started is the '
        + 'expensive part, not continuing.',
    ],
    watch: [
      'Not starting looks like refusal. It is usually task initiation, the gap between '
        + 'wanting to do it and being able to launch.',
      'Forgetting what you said 10 seconds ago looks like not caring. It is working memory. '
        + 'Repeating it louder does not help and writing it down does.',
      'Careless mistakes on work your child clearly understands usually mean the body ran out '
        + 'of regulation before the brain ran out of ability.',
      'Total focus on 1 thing and nothing else looks like selective effort. Attention here '
        + 'follows interest and urgency rather than importance, and your child cannot simply '
        + 'point it somewhere else.',
    ],
    wins: [
      'Genuine creative leaps, the answer nobody else in the room was going to get, because '
        + 'the thinking went sideways instead of forward.',
      'Enormous output when the topic is the right one. A whole self directed afternoon of '
        + 'real work, which a 45 minute period would have cut off at the knees.',
      'Novelty and urgency. Your child often gets sharper exactly when something is new, '
        + 'interesting, or suddenly matters.',
    ],
    ask: [
      'Ask your pediatrician for an evaluation that looks at attention, sleep, and anxiety '
        + 'together, since poor sleep and anxiety can look identical to attention differences and '
        + 'often travel alongside them.',
      'In most states you can ask your local school district to evaluate your homeschooled '
        + 'child at no cost to you. A district evaluation can open a 504 plan or an IEP if you '
        + 'ever enroll, and written documentation is also what unlocks extended time on college '
        + 'entrance tests later.',
    ],
  },
  autism: {
    headline: 'Interests are the road in, not the reward at the end',
    day: [
      'Fix the shape of the day before you fix the content. Same order daily, posted where '
        + 'your child can see it, with anything different about today marked on it in advance.',
      'Warn transitions twice, at 5 minutes and at 1 minute, and name what is ending and what '
        + 'comes next. Most hard moments live at the seam between blocks, not inside them.',
      'Deal with the room first. Overhead light off, tag out of the shirt, sound checked. '
        + 'Sensory load your child is already carrying will eat the taught block before you open '
        + 'the book.',
      'Put the interest inside the taught block rather than after it. If it is trains, the '
        + 'math is about trains. The interest is the vehicle, not the payment.',
      'Protect 1 unstructured block where your child is deep in their own thing and nothing '
        + 'at all is asked of them.',
    ],
    teaching: [
      'Say exactly what you mean. Write 3 sentences about the picture, rather than tell me '
        + 'about this.',
      'Show a finished example first. Your child often needs to see the destination before '
        + 'the steps mean anything.',
      'Choose writing and pictures over talking. Written instructions stay put, spoken ones '
        + 'vanish, especially while your child is also regulating.',
      'Take the answer in whatever form your child has. Typed, drawn, built, labeled, '
        + 'dictated. The knowledge is the goal and the format is not.',
      'Check understanding with something specific, such as point to the one that is a '
        + 'mammal, instead of do you get it, which is very hard to answer honestly.',
    ],
    watch: [
      'Not looking at you is often how your child listens best. Eye contact can cost so much '
        + 'processing that the words do not land.',
      'A hard moment at the end of a good day is usually accumulated sensory and social load, '
        + 'not the last thing that happened and not manipulation.',
      'Needing the same order every time looks rigid. It is usually how your child makes an '
        + 'unpredictable day survivable, and it frees up room for learning.',
      'Repeating lines from a show or a book while working is often regulation that supports '
        + 'focus rather than distraction from it.',
    ],
    wins: [
      'Depth. Your child can go further into 1 subject than most adults ever will, and hold '
        + 'detail a survey course would never ask for.',
      'Pattern and system recognition, catching the rule or the inconsistency everyone else '
        + 'read straight past.',
      'Honesty and precision, which makes your child unusually good at editing, fact '
        + 'checking, debugging, and noticing when something does not add up.',
    ],
    ask: [
      'Ask for an occupational therapy evaluation that includes sensory processing, and ask '
        + 'for a written plan you can actually run at home during the school day.',
      'Ask your district about an evaluation under IDEA. In most states your homeschooled '
        + 'child can still be evaluated by the district where you live, and what services follow '
        + 'depends on your state, so ask specifically what your state does for home educated '
        + 'children.',
    ],
  },
  pda: {
    headline: 'Standard advice makes this harder, so start by dropping it',
    day: [
      'Turn the schedule from a set of instructions into information. A list on the wall of '
        + 'what exists today, in any order, with your child choosing, is not the same thing as a '
        + 'plan they have to follow.',
      'Count the learning across a week, not a day. Some days the taught block does not '
        + 'happen and Thursday quietly carries it.',
      'Keep the first 45 minutes of the day completely demand free. No requests, no '
        + 'questions, not even a cheerful ready to start. Anxiety is lowest when nothing is being '
        + 'asked.',
      'Let learning happen sideways, during cooking, driving, building, or playing, and count '
        + 'it as real. A worksheet is not more legitimate than halving a recipe out loud.',
      'Give an exit that costs nothing. Your child can leave any block at any point with no '
        + 'consequence and no sigh, and that exit is exactly what makes coming back possible.',
    ],
    teaching: [
      'Use declarative language. I wonder how many are left, or I am stuck on this one, '
        + 'instead of what is 12 minus 5. A question is a demand with a question mark on it.',
      'Think out loud and let your child correct you. Being the one who knows better is a '
        + 'role they will pick up when a compliance role is not on offer.',
      'Offer, do not invite. The paints are out lands differently than do you want to paint '
        + 'with me, because even a kind invitation is still something to answer.',
      'Build it together from the start. Your child picks the topic, the order, or how you '
        + 'will both know it is finished. That shared ownership is the scaffold.',
      'Do not let praise become the next demand. Good job, now do the next one turns a '
        + 'finished thing into a new request. Notice the work instead, such as you got the tricky '
        + 'one.',
    ],
    watch: [
      'Reward charts, first and then, countdowns and timers usually make this worse rather '
        + 'than better, because every one of them adds a demand. When the standard advice '
        + 'backfires, it is the advice. It is not your child and it is not you.',
      'Refusing something they loved and asked for an hour ago is not defiance and not being '
        + 'difficult. The demand attached to it became unbearable. The love for it is still '
        + 'there.',
      'Sudden silliness, shutdown, or a change of subject in the middle of work is usually '
        + 'anxiety spiking, and it is the thing most often misread as rudeness.',
      'I can\'t often means exactly that, right now, even when your child did the same thing '
        + 'easily yesterday.',
    ],
    wins: [
      'Negotiation and argument. Your child can hold a position, find the flaw in yours, and '
        + 'build a case, which is real intellectual work.',
      'Self chosen learning that goes obsessively deep, often years past where a curriculum '
        + 'would have placed them.',
      'Fairness and reading people. Your child often clocks injustice and social dynamics '
        + 'faster than the adults do.',
    ],
    ask: [
      'Bring this to a clinician who already understands demand avoidance, and ask directly '
        + 'whether their plan is anxiety focused rather than behavior focused. Compliance based '
        + 'behavior plans tend to make things harder here.',
      'If you ever pursue an IEP or a 504 plan, ask that anxiety driven avoidance be written '
        + 'into the document by name, along with a note that standard reward and consequence '
        + 'systems are not an appropriate support for your child.',
    ],
  },
  communication: {
    headline: 'Give your child a way to answer before you ask anything',
    day: [
      'Spend the first 10 minutes of the day on the communication system itself, the device, '
        + 'the signs, the board, with nothing academic attached to it.',
      'Keep taught blocks to 15 minutes with a real pause after. Following language takes '
        + 'more effort than the content does.',
      'Build wait time into everything. After you ask, count to 10 silently. Most of what '
        + 'looks like no answer is an answer still being assembled.',
      'Put the language heavy work earliest and save the hands on block for later, when '
        + 'processing is tired.',
    ],
    teaching: [
      'Pair every spoken instruction with something your child can see, a picture, a written '
        + 'word, an object, a gesture.',
      'Model the system yourself, out loud and on the device, without asking your child to '
        + 'use it. Kids learn a communication system by watching someone else use it for real '
        + 'reasons.',
      'Cut the sentence, not the idea. Which one floats teaches as much as a paragraph and is '
        + 'far easier to get into.',
      'Offer closed choices as a bridge, such as 2 objects to point at, so answering becomes '
        + 'possible before speaking does.',
      'Check understanding with a do rather than a say. Show me the heavy one tells you more '
        + 'than which one is heavier.',
    ],
    watch: [
      'A long silence after a question is usually processing, not refusal, and repeating the '
        + 'question restarts the whole clock.',
      'An unrelated answer often means your child caught 2 words out of 10 and answered '
        + 'those, not that they were not listening.',
      'Frustration at the end of a language heavy block is almost always the gap between what '
        + 'your child understands and what they can get out.',
      'Understanding usually runs well ahead of talking, so assume your child took in more '
        + 'than they gave back, and never talk about them as if they are not in the room.',
    ],
    wins: [
      'Reading people and situations. Kids who cannot lean on words often become very good at '
        + 'faces, tone, and what is actually going on.',
      'Determination in getting a message across, using every channel at once, which is '
        + 'genuine problem solving.',
      'Visual memory and detail, often noticing what changed in a room or a picture before '
        + 'anyone else does.',
    ],
    ask: [
      'Ask for a speech and language evaluation that specifically assesses augmentative and '
        + 'alternative communication. Research shows AAC supports spoken language rather than '
        + 'holding it back, and there is no readiness level a child has to reach first.',
      'Speech and language therapy is a related service under IDEA. In most states you can '
        + 'request a district evaluation while homeschooling, so ask what your state provides for '
        + 'home educated children.',
    ],
  },
  speech: {
    headline: 'Never let clear speech be the price of showing what you know',
    day: [
      'Keep the speech practice block separate from the academic block. Do not let reading '
        + 'aloud double as articulation homework, because then your child is paying twice for 1 '
        + 'lesson.',
      'Keep any read aloud to 5 minutes and let the rest of reading happen silently or in '
        + 'your voice.',
      'Put speech practice early, when your child is freshest, and hold it to 10 minutes. It '
        + 'is real work, not a warm up.',
      'Allow written, typed, drawn, and pointed answers in every block all week, not only on '
        + 'the hard days.',
    ],
    teaching: [
      'Assess the knowing separately from the saying. An answer that came out unclearly can '
        + 'be a completely correct answer.',
      'Never correct a sound in the middle of an idea. Let your child finish the thought, '
        + 'then say it back correctly yourself as a model, without asking them to redo it.',
      'Slow your own rate of speech instead of asking your child to slow theirs.',
      'Read the same line together, in unison. Your voice carries the hard sounds and your '
        + 'child stays in the flow of the sentence.',
      'Check understanding in writing or by pointing on the days when talking is expensive.',
    ],
    watch: [
      '1 word answers often mean your child is choosing words they can say rather than the '
        + 'words they mean. That is not a small vocabulary.',
      'Avoiding reading aloud or presenting is usually about being heard, not about the '
        + 'reading, and it is worth separating those 2 before you conclude anything.',
      'Understanding almost always runs ahead of talking, so a child who says little may be '
        + 'tracking every word.',
    ],
    wins: [
      'Written voice. Many kids whose speech takes effort write with real precision and '
        + 'force, because the page never interrupts them.',
      'Careful listening. Your child is often the one who actually heard what was said.',
      'Persistence. Repairing a message until it lands is hard work your child already does '
        + 'many times a day.',
    ],
    ask: [
      'Ask for a speech and language evaluation that reports receptive and expressive '
        + 'language separately, so you have it in writing that what your child understands and '
        + 'what they can say are 2 different numbers.',
      'Speech and language therapy is a related service under IDEA. Ask your district about '
        + 'evaluating your homeschooled child, and ask specifically what your state offers home '
        + 'educated children.',
    ],
  },
  selectiveMutism: {
    headline: 'Participating never requires speaking, in any block, ever',
    day: [
      'Make every block answerable without a voice. Pointing, nodding, a whiteboard, typing, '
        + 'thumbs up. Build this into the ordinary day rather than granting it on bad days.',
      'Give a 10 minute warm up at the start of anything new or with anyone new, where '
        + 'absolutely nothing is asked and your child can just watch.',
      'If any part of the day involves talking, put it at the end rather than the start, once '
        + 'your child has been in the space a while.',
      'Keep groups small and predictable. If a class or co op is part of your week, the same '
        + '2 kids every time beats a rotating 8.',
    ],
    teaching: [
      'Comment instead of questioning. That one looks tricky opens a door that what is the '
        + 'answer closes.',
      'Ask questions your child can answer by pointing, such as is it this one or this one.',
      'Let your child show what they know by recording audio alone in a room, or not at all. '
        + 'The reading level is the reading level whether or not you hear it out loud.',
      'Never bribe, reward, or count speech, and never say if you answer we can stop. '
        + 'Speaking as a condition or a prize raises exactly the pressure that is already the '
        + 'problem.',
      'Make written and pointed answers the default for the whole year, not a fallback.',
    ],
    watch: [
      'Silence is anxiety. It is not rudeness, stubbornness, or a choice. Your child usually '
        + 'wants to answer and cannot get the words out of their body.',
      'Talking freely at home and not elsewhere is the pattern itself, not proof your child '
        + 'could do it anywhere if they tried harder.',
      'A frozen face, a whisper, or turning away is a stress response, which is why waiting '
        + 'calmly nearby helps and prompting again does not.',
      'Filling the silence for your child feels kind and quietly teaches that someone else '
        + 'will speak. Hold the pause 1 beat longer than is comfortable.',
    ],
    wins: [
      'Observation. Your child often knows the room, the people, and the material better than '
        + 'anyone who was busy talking.',
      'Written work of real depth, because the page was never the frightening part.',
      'Deep 1 to 1 relationships once safety is established, and a loyalty that goes very '
        + 'far.',
    ],
    ask: [
      'Ask for a clinician experienced specifically with selective mutism, and ask them to '
        + 'write the plan. Graded practice does work, and it needs a professional to design and '
        + 'pace, so it is not something to build alone from the internet.',
      'This sits under anxiety, so a 504 plan or an IEP can name nonverbal participation, '
        + 'extra warm up time, and no oral presentations. Ask your district about evaluating your '
        + 'homeschooled child if you want that in writing.',
    ],
  },
  auditoryProcessing: {
    headline: 'Fix the sound in the room before you fix the teaching',
    day: [
      'Kill the background noise in your teaching space. No fan, no music, no dishwasher, no '
        + 'sibling video. Noise is not neutral here, it removes words.',
      'Keep listening heavy blocks to 15 minutes, and put the read aloud and the verbal '
        + 'instruction early, when listening effort is cheapest.',
      'Alternate a listening block with a doing block all day. Never 2 listening blocks back '
        + 'to back.',
      'Sit close and face to face for instructions, within a few feet, not across the room '
        + 'while you are loading the dishwasher.',
    ],
    teaching: [
      'Give the instruction in writing as well as out loud, every time, even for something as '
        + 'small as get your pencil and turn to page 8.',
      'Chunk it. 1 step, pause, next step, and a check in between each.',
      'Turn captions on for every video and audiobook so your child reads and listens at '
        + 'once. That is access, not cheating.',
      'Preteach the vocabulary before the lesson that uses it, because an unfamiliar word '
        + 'inside fast speech is a word that will not be caught.',
      'Check understanding by having your child say the instruction back in their own words '
        + 'before starting.',
    ],
    watch: [
      'What, asked over and over, is not inattention. The sound arrived and the words had not '
        + 'resolved into meaning yet.',
      'Doing the first step and stopping usually means only the first step made it through.',
      'Looking blank during a read aloud while reading the same text fine silently is a '
        + 'listening load difference, not a comprehension gap.',
      'Tiredness and short fuse by midday is common, because listening in a noisy world is '
        + 'physical effort your child has been spending since breakfast.',
    ],
    wins: [
      'Reading comprehension that is often well above what the listening picture would '
        + 'suggest, because information through the eyes arrives intact.',
      'Visual and hands on problem solving, since your child has been building workarounds '
        + 'their whole life.',
      'Real skill at reading context and filling gaps, which is sophisticated inference.',
    ],
    ask: [
      'A full hearing evaluation by an audiologist is the starting point, since hearing '
        + 'itself has to be checked before anything else. Testing specifically for auditory '
        + 'processing is usually reliable from around age 7 or 8.',
      'Ask about assistive listening technology such as a remote microphone system. An IEP '
        + 'team is required to consider assistive technology, and a 504 plan can cover written '
        + 'instructions, captions, preferential seating, and a quiet testing space.',
    ],
  },
  deafHoh: {
    headline: 'Access to the language comes before any teaching decision',
    day: [
      'Start the day with an equipment check, hearing aids, implants, or a remote microphone, '
        + 'so a dead battery does not quietly cost you a whole morning nobody can explain.',
      'Keep taught blocks to 15 or 20 minutes. Watching for language, signed or spoken, is '
        + 'sustained visual work and it genuinely tires.',
      'Set the room for sightlines. Your child can see your face, your hands, and the '
        + 'material without swinging between them, and the light falls on you rather than behind '
        + 'you.',
      'Do not read aloud and expect your child to follow your voice while looking at the '
        + 'pictures. Split it. Look at the book, then look at you.',
    ],
    teaching: [
      '1 visual thing at a time. Your child cannot watch your hands or your mouth and read '
        + 'the board simultaneously, so pause the language while they look, then pick it back up.',
      'Caption everything, and choose materials that are captioned or signed over audio only.',
      'Preteach vocabulary in your child\'s own language and mode before the content lesson '
        + 'uses it.',
      'Check understanding by having your child explain it back, never by asking did you hear '
        + 'me.',
      'Put incidental learning in on purpose. Hearing kids absorb enormous amounts from '
        + 'overheard talk, so say or sign out loud the things you would otherwise assume got '
        + 'picked up.',
    ],
    watch: [
      'Nodding along is often a survival habit rather than understanding. Kids get very '
        + 'practiced at looking like they followed.',
      'Shutting down late in the day is the cost of watching and listening all day, not '
        + 'disinterest.',
      'A gap in general knowledge that seems random is usually missed overheard language, not '
        + 'a learning difference.',
      'Answering the question you asked 2 questions ago means the conversation moved faster '
        + 'than access allowed.',
    ],
    wins: [
      'Visual attention and memory most people never develop, including faces, spatial '
        + 'detail, and noticing what changed.',
      'If your child signs, real bilingualism, with everything that comes with holding 2 '
        + 'languages.',
      'Self advocacy earlier than peers, because your child has had to name what they need in '
        + 'order to get it.',
    ],
    ask: [
      'Ask your audiologist how often equipment should be checked and remapped, and ask for a '
        + 'written plan for the day it fails.',
      'Under IDEA, an IEP team is specifically required to consider your child\'s language '
        + 'and communication needs, opportunities for direct communication with peers and adults '
        + 'in your child\'s own language and mode, and assistive technology. Those are named in '
        + 'the law, so ask for them by name. Also ask your state school for the deaf or your '
        + 'state deaf education program what is available to homeschooled children.',
    ],
  },
  sensory: {
    headline: 'The room decides whether the lesson was ever possible',
    day: [
      'Set the space before you set the content. Lighting, seating, sound, temperature, '
        + 'clothing. Run that check every morning, not once in September.',
      'Put 10 minutes of the input your child needs before every taught block. Swinging, '
        + 'jumping, pushing, squeezing, spinning, deep pressure, whichever one actually works.',
      'Shorten sitting blocks to 15 minutes and let position change freely. Floor, standing, '
        + 'upside down on the couch. Position has nothing to do with whether learning is '
        + 'happening.',
      'Schedule 1 protected quiet block with low input and no demands, before your child '
        + 'needs it rather than after a hard moment.',
      'Keep the loud and messy subjects away from the end of the day, when reserves are '
        + 'lowest.',
    ],
    teaching: [
      'Offer a way around the material itself. Gloves for glue, a brush instead of fingers, a '
        + 'video instead of the dissection. The learning is not in the texture.',
      'Add movement to memorizing, such as pacing while reciting or jumping on each fact. It '
        + 'helps rather than competes.',
      'Keep headphones, a hood, and a dim corner available as ordinary equipment your child '
        + 'can reach for without asking.',
      'Check understanding after the input break, not during a moment when your child is '
        + 'working hard just to stay regulated.',
      'Give a heads up before any sensory change you control, such as a blender or a bright '
        + 'light.',
    ],
    watch: [
      'Wriggling, chewing, humming, and rocking are almost always regulation rather than '
        + 'distraction, and stopping them usually costs more attention than it saves.',
      'I can\'t concentrate with no reason attached is often 1 sensory thing your child has '
        + 'not identified yet, such as a sock seam or a hum. Go looking for it instead of pushing '
        + 'through.',
      'A big reaction to something small is usually the last piece of input landing on a full '
        + 'day of it.',
      'Refusing a texture or a food is a body response, not a preference to be talked out of.',
    ],
    wins: [
      'Noticing. Your child detects what others miss in sound, smell, texture, taste, and '
        + 'small changes, which is real perceptual skill.',
      'Deep physical learning. Things learned through the body tend to stay learned.',
      'Often a strong aesthetic sense, in music, color, texture, or arrangement.',
    ],
    ask: [
      'Ask for an occupational therapy evaluation that includes sensory processing, and ask '
        + 'for a written sensory plan you can run at home during the school day.',
      'Occupational therapy is a related service under IDEA, and a 504 plan can cover '
        + 'environmental accommodations such as seating, noise, lighting, and breaks. In most '
        + 'states you can ask your district to evaluate your homeschooled child.',
    ],
  },
  blindLowVision: {
    headline: 'Access to the material comes first, everything else is second',
    day: [
      'Have materials ready in your child\'s reading medium before the block starts, braille, '
        + 'large print, audio, or tactile. Converting on the fly turns a 20 minute lesson into an '
        + 'hour of waiting.',
      'Add time to every block, roughly 1.5 to 2 times what a print reader needs, and build '
        + 'the day around that instead of treating it as slow.',
      'Put braille and tactile work when your child is freshest. Reading by touch is '
        + 'physically tiring in a way print reading is not.',
      'Make orientation and mobility, and daily living skills, real blocks in the week rather '
        + 'than extras. Those skills do not arrive by being nearby.',
    ],
    teaching: [
      'Describe out loud everything you would otherwise have pointed at. This one and over '
        + 'here carry no information.',
      'Go from concrete to abstract with real objects your child can hold, before diagrams, '
        + 'models, or tactile graphics.',
      'Teach the technology as its own subject, screen reader, braille display, '
        + 'magnification, and expect genuine fluency. It is your child\'s pencil.',
      'Give the whole before the parts. Say what a tactile graphic is a picture of before '
        + 'your child starts feeling for the pieces.',
      'Check understanding by having your child describe or build it, never by pointing.',
    ],
    watch: [
      'Slowness on a task is usually access time, not processing speed and not effort.',
      'Not joining in is often not knowing something is happening, because so much invitation '
        + 'is visual.',
      'Fatigue in a child with some usable vision is real. Using low vision all day is '
        + 'effortful, and it is why the afternoon looks different from the morning.',
      'Gaps in things nobody teaches directly, such as how a plant actually feels or what a '
        + 'crowd does, are missing incidental information rather than missing ability.',
    ],
    wins: [
      'Auditory memory and listening comprehension that are often far ahead, including '
        + 'holding long spoken information accurately.',
      'Spatial and tactile reasoning, plus real organization, because systems are how your '
        + 'child finds things.',
      'Independence and problem solving built from working out routes and methods nobody '
        + 'handed over.',
    ],
    ask: [
      'Ask for an evaluation by a teacher of students with visual impairments, including a '
        + 'learning media assessment, which determines your child\'s primary reading medium, and '
        + 'a separate orientation and mobility evaluation.',
      'Under IDEA, an IEP must provide instruction in braille and the use of braille for a '
        + 'child who is blind or visually impaired, unless the team determines after an '
        + 'evaluation that braille is not appropriate, and assistive technology must be '
        + 'considered. Also ask your state instructional materials center and your state school '
        + 'for the blind about materials and services for homeschooled children, and ask about '
        + 'eligibility for free accessible book services.',
    ],
  },
  motor: {
    headline: 'Separate what your child knows from what their hands can do',
    day: [
      'Cap handwriting at 10 minutes total across the entire day, spread out, and let '
        + 'everything else be typed, dictated, or spoken.',
      'Put fine motor work early, when hands are rested, and never right after gross motor '
        + 'play.',
      'Build 5 minutes of transition time into every block change. Getting materials out and '
        + 'moving rooms is real work, not dawdling.',
      'Alternate seated fine motor blocks with whole body blocks so the same small muscles '
        + 'are not doing everything.',
    ],
    teaching: [
      'Take writing out of the assessment. Your child dictates and you write, or they type. '
        + 'You are grading the history, not the letter formation.',
      'Stabilize the body and the paper first. Feet flat, paper taped down, slant board, '
        + 'thicker pencil. Position before practice.',
      'Reduce the amount, not the difficulty. 3 sentences instead of 10, at the same '
        + 'complexity.',
      'Break physical tasks into named steps and do them alongside your child rather than '
        + 'describing them from across the room.',
      'Check understanding out loud whenever hands are the bottleneck.',
    ],
    watch: [
      'Messy or slow writing on work your child clearly knows is a motor difference, not '
        + 'carelessness and not rushing.',
      'Avoiding a task is often avoiding the physical part of it. Swap the tool and watch '
        + 'what happens before you conclude anything.',
      'Getting tired much faster than expected is real. Holding a body upright at a table '
        + 'takes energy other kids are not spending.',
      'A hand that hurts after 5 minutes of writing is information, not a complaint.',
    ],
    wins: [
      'Spoken expression that is often rich and well organized once the hand is out of the '
        + 'way.',
      'Patience and persistence beyond their years, built from doing hard physical things '
        + 'over and over.',
      'Strategy and workaround thinking, which is genuine engineering.',
    ],
    ask: [
      'Ask for occupational therapy and physical therapy evaluations, and ask specifically '
        + 'about assistive technology for writing, such as speech to text, and whether '
        + 'keyboarding should be taught now as a primary tool rather than a backup.',
      'Occupational and physical therapy are related services under IDEA, and a 504 plan can '
        + 'cover typing instead of handwriting, a scribe, and extra time. Ask your district about '
        + 'evaluating your homeschooled child.',
    ],
  },
  tics: {
    headline: 'Do not ask your child to stop, it costs them the lesson',
    day: [
      'Keep taught blocks to 15 or 20 minutes, because holding still and holding tics in '
        + 'takes energy your child then does not have for the content.',
      'Build in unwatched time, 2 or 3 short blocks a day where your child is alone and '
        + 'nothing needs suppressing. That is where the pressure gets released.',
      'Read the pattern rather than the day. Tics usually rise with stress, tiredness, and '
        + 'excitement, including happy excitement, so plan lighter content after a big day.',
      'Give a private place to work. Being observed raises tics for a lot of kids, and so '
        + 'does the effort of trying not to be seen.',
    ],
    teaching: [
      'Treat interrupted work as normal. A tic in the middle of a sentence means the sentence '
        + 'takes longer, not that focus was lost.',
      'Move writing to typing wherever you can, since handwriting and tics compete for the '
        + 'same steady hand.',
      'Let audio and video be paused and rewound freely, with no comment about how many '
        + 'times.',
      'Check understanding at a moment your child picks, not on your schedule.',
      'Never build a lesson around suppression. Learning and suppressing at the same time is '
        + '2 jobs, and only 1 of them is school.',
    ],
    watch: [
      'Tics are not voluntary and not attention seeking, even when they look aimed at getting '
        + 'a reaction.',
      'A quiet morning and a hard afternoon is the ordinary shape of this, not a change in '
        + 'attitude.',
      'Kids who hold tics in during a lesson often release a lot afterward, so a rough hour '
        + 'at 3pm can be the price of a calm hour at 1pm.',
      'Asking your child to stop, or even gently pointing a tic out, usually adds tension and '
        + 'adds tics.',
    ],
    wins: [
      'Real self control, practiced constantly, in a way most kids never have to develop.',
      'Humor and timing, often quick and sharp.',
      'Deep empathy for anyone else having a hard time being looked at.',
    ],
    ask: [
      'Ask your pediatrician about a referral to a neurologist or a clinician who treats tic '
        + 'disorders, and ask specifically about behavioral treatments designed for tics, which '
        + 'need a trained therapist rather than a home program.',
      'A tic disorder can qualify for a 504 plan or an IEP, covering a private testing space, '
        + 'extra time, and permission to leave a room without asking first. Ask your district '
        + 'about evaluating your homeschooled child if you want it documented.',
    ],
  },
  emotionalRegulation: {
    headline: 'Nothing gets taught until the body is calm again',
    day: [
      'Open with a regulating block rather than a teaching block. 10 or 15 minutes of '
        + 'movement, water, food, or quiet before anything is asked.',
      'Keep taught blocks to 15 minutes with a real reset between them, and treat the reset '
        + 'as part of the lesson rather than as lost time.',
      'Put the hardest subject second, once your child is warm but before they are tired, and '
        + 'not immediately before or after lunch.',
      'Agree on an exit and a place to go, decided in advance on a calm day, that your child '
        + 'can use without asking permission.',
      'End the day early when it is gone, and do not make the work up. 1 finished good hour '
        + 'beats 3 forced ones and costs far less tomorrow.',
    ],
    teaching: [
      'Front load the hard part. Say out loud what will be tricky before you start, so '
        + 'difficulty does not arrive as an ambush.',
      'Make mistakes visibly ordinary by making yours out loud. A lot of hard moments during '
        + 'work are about being wrong, not about the work.',
      'Break the work into pieces small enough that success shows up inside 2 minutes, then '
        + 'build from there.',
      'Never teach during a hard moment. Regulate first, connect second, and come back to the '
        + 'content later or tomorrow.',
      'Check understanding once your child is calm, because what looks like forgetting is '
        + 'often something that never got in through a stressed moment.',
    ],
    watch: [
      'A big reaction to a small thing is almost always the last item on a full load, not the '
        + 'thing itself.',
      'Anger is frequently the outside of fear, embarrassment, or overwhelm, and the loud '
        + 'part is the only part you get to see.',
      'Refusing to try is often a prediction of failing, and it protects your child from '
        + 'something that feels worse than not doing it.',
      'Fine all morning and falling apart at 4pm usually means your child held it together '
        + 'all day. That is effort, not manipulation.',
    ],
    wins: [
      'Emotional depth and empathy. Your child often feels things at full volume, and that '
        + 'includes joy, loyalty, and care.',
      'Honesty about their internal state once they have words for it, which plenty of adults '
        + 'never manage.',
      'Intensity that turns into genuine passion and drive when it is pointed at something '
        + 'they love.',
    ],
    ask: [
      'Ask your pediatrician for a referral to a child mental health professional, and ask '
        + 'them to look at sleep, anxiety, sensory, and language together rather than treating '
        + 'the behavior by itself.',
      'A 504 plan or an IEP can include breaks, a calm space, and a written plan for hard '
        + 'moments. Ask your district about evaluating your homeschooled child, and ask for '
        + 'positive behavior supports rather than a consequence based plan.',
    ],
  },
  anxiety: {
    headline: 'Avoiding the work makes tomorrow harder, so shrink it instead',
    day: [
      'Keep the same order every day and post it, because not knowing what is coming is '
        + 'itself a source of worry.',
      'Put the most feared subject early and make it short, 10 minutes, so it is done and the '
        + 'rest of the day is not spent dreading it.',
      'Make the finish line visible and concrete. 4 problems, 1 page, a timer. Do your best '
        + 'has no end, so it never feels safe to stop.',
      'Put 15 minutes of real movement in the first hour. Physical activity takes the edge '
        + 'off in a way talking about it does not.',
      'Do not cancel a block because your child is anxious about it. Shrink it, to 5 minutes '
        + 'or 1 problem, so the day does not teach that avoiding works.',
    ],
    teaching: [
      'Preview before you teach. Show what the lesson will be, so novelty is not the '
        + 'obstacle.',
      'Let your child watch you be wrong and keep going, out loud, several times a week.',
      'Separate practice from judgment. Have a block explicitly marked not graded, not '
        + 'checked, just tried.',
      'Give a clear first step. Write the date and the first number removes the blank page, '
        + 'which is often the frightening part.',
      'Check understanding in low stakes ways, by talking it through or playing a game, not '
        + 'with a surprise quiz.',
    ],
    watch: [
      'Stalling, refusing, and I hate this are very often fear of getting it wrong, and the '
        + 'anger is the outside of the worry.',
      'A stomach ache or a headache before a particular subject is usually a real sensation, '
        + 'not a story.',
      'Starting over and over looks like high standards and is usually distress.',
      'Letting your child skip the thing brings relief today and makes it bigger tomorrow, '
        + 'which is exactly why it is so hard to see for what it is.',
    ],
    wins: [
      'Preparation and conscientiousness, which often produce careful, thorough work.',
      'Noticing risk and detail others miss, which is real foresight.',
      'Deep empathy, because your child knows what feeling bad is like and pays attention to '
        + 'other people.',
    ],
    ask: [
      'Ask your pediatrician for a referral to a therapist trained in cognitive behavioral '
        + 'therapy for childhood anxiety. Gradual exposure works well and needs a professional to '
        + 'design and pace it, so it is not a home project.',
      'Anxiety can qualify a child for a 504 plan or an IEP under emotional disability or '
        + 'other health impairment. Ask your district about evaluating your homeschooled child, '
        + 'and ask for accommodations such as breaks, no cold calling, and alternatives to '
        + 'presenting.',
    ],
  },
  ocd: {
    headline: 'Answering the same question again is what keeps it going',
    day: [
      'Keep the same order and the same materials daily, because unpredictability recruits '
        + 'more checking.',
      'Put a hard time limit on each block instead of a completion requirement, so rewriting '
        + 'the heading 9 times cannot consume the hour. 15 minutes, then it moves.',
      'Notice where rituals attach, such as erasing, rewriting, perfect letters, or counting, '
        + 'and quietly change the material. Typing instead of writing, a form with boxes instead '
        + 'of a blank page, a pencil with no eraser.',
      'Put a physical block right after the subject where rituals cluster, so the day moves '
        + 'forward instead of circling.',
      'Protect 1 block that cannot be redone at all, such as reading aloud together or a '
        + 'walk, so there is time each day that checking cannot get into.',
    ],
    teaching: [
      'Take the first answer. Nothing gets redone, and say that in advance so it is a rule '
        + 'about the work rather than a refusal in the moment.',
      'Praise the finishing, not the perfection. You stopped when the timer went is the thing '
        + 'you are actually teaching.',
      'Remove the surfaces rituals use. No erasers, pen instead of pencil, boxes instead of '
        + 'an open page.',
      'Check understanding out loud and quickly, so there is no written product left over to '
        + 'perfect.',
      'Answer a repeated question once, kindly, then use 1 short agreed phrase after that, '
        + 'such as we already answered that one. Set that phrase up with your child on a calm '
        + 'day, not in the middle of it.',
    ],
    watch: [
      'Answering the same question for the 40th time feels like love, and reassurance is what '
        + 'feeds the cycle. Each answer works for about a minute and makes the next question more '
        + 'necessary. This is not your fault, and almost nobody tells parents this.',
      'Slowness is often invisible ritual, counting, rereading, or mental checking, rather '
        + 'than daydreaming.',
      'A hard moment when work gets interrupted or when something is not right is distress '
        + 'about a rule being broken, not defiance.',
      'Avoiding a whole subject can be avoiding what the rituals cost inside it, rather than '
        + 'avoiding the content.',
    ],
    wins: [
      'Thoroughness and accuracy that is genuinely excellent when it is aimed at work instead '
        + 'of at doubt.',
      'Moral seriousness and real care about doing right, which is character.',
      'Pattern detection and memory for detail.',
    ],
    ask: [
      'Ask for a referral to a therapist trained in exposure and response prevention for '
        + 'pediatric OCD. That is the treatment with the evidence behind it, and it is not '
        + 'something to run at home on your own. Exposures done without a trained clinician can '
        + 'make things worse.',
      'Ask that therapist how to reduce family accommodation, meaning the reassurance, the '
        + 'checking, and the rituals the whole household has quietly taken on. Reducing it helps, '
        + 'and the pacing has to come from them. OCD can also qualify for a 504 plan or an IEP, '
        + 'and in most states your district can evaluate a homeschooled child.',
    ],
  },
  bigChanges: {
    headline: 'Expect less for a while, and say out loud that it is temporary',
    day: [
      'Cut the academic day by a third for a few weeks and keep the shape identical. Fewer '
        + 'blocks, same order, same times. The predictability is what is doing the work.',
      'Keep the together block and the read aloud no matter what. If only 2 things happen '
        + 'today, make it those 2.',
      'Put the hardest thing early and keep it to 10 minutes, because afternoon capacity is '
        + 'going somewhere else right now.',
      'Add a 10 minute daily check in that is not about school, at the same time every day, '
        + 'so your child never has to be the one to raise it.',
      'Introduce no new curriculum, no new method, no new anything for the first few weeks. '
        + 'This is a season for familiar material.',
    ],
    teaching: [
      'Review more than you teach. Going back over known material is regulating, and it is '
        + 'also real learning.',
      'Expect new information to need more repetitions for a while. That is not lost ground.',
      'Let your child be younger than they were. Wanting the easier book or sitting closer is '
        + 'normal, and it passes.',
      'Use the change as material where it fits, such as maps for a move, letters to write, '
        + 'or a project about the place you left.',
      'Check understanding gently and often, because things look learned and then are not, '
        + 'and that is the change rather than your child.',
    ],
    watch: [
      'Going backward on things your child could do easily is normal and temporary, and it is '
        + 'not lost progress.',
      'Clinging and sudden fierce independence can both be responses to the same thing.',
      'Anger aimed at you is often the safest available place to put a feeling that belongs '
        + 'somewhere else.',
      'Bringing it up constantly and refusing to discuss it at all are both processing, so '
        + 'follow your child rather than a plan.',
    ],
    wins: [
      'Adaptability that is being built right now, which is a real and durable skill.',
      'Perspective about what actually matters, which peers usually do not have yet.',
      'Empathy for anyone new, displaced, or on the outside of things.',
    ],
    ask: [
      'Tell your pediatrician what changed, so it is in the record and someone is watching '
        + 'sleep, appetite, and mood alongside you instead of seeing a snapshot months later.',
      'If the hard stretch runs past a couple of months, or if your child is not sleeping or '
        + 'eating, ask for a referral to a child therapist. Counseling for grief and for family '
        + 'change exists and is an ordinary thing to ask for.',
    ],
  },
  executiveFunction: {
    headline: 'Put the plan outside your child\'s head, on paper, every day',
    day: [
      'Write the whole day on a board your child can see and cross off. A day that lives only '
        + 'in your head lives nowhere for them.',
      'Shorten every block to 20 minutes with a visible timer, because managing a long '
        + 'stretch of time is the exact thing that is hard.',
      'Do the setup with your child, not for them and not by instruction. Sit down together '
        + 'and get the materials out, as the first 5 minutes, daily.',
      'Put the hardest thing to start right after a physical block, when getting going is '
        + 'cheapest.',
      'Add a 10 minute closing block where materials get put away and tomorrow\'s first thing '
        + 'is laid out. That 10 minutes saves 40 tomorrow.',
    ],
    teaching: [
      'Break assignments into numbered written steps your child checks off, including the '
        + 'obvious ones such as get the book.',
      'Teach how to start, explicitly. Name the first physical action out loud, every time, '
        + 'until it is automatic.',
      'Do the first 1 or 2 problems together, then step back. Momentum is what your child '
        + 'cannot generate, not effort.',
      'Make lengths and deadlines concrete. A paragraph is 5 sentences and this is sentence '
        + '1, rather than write about it.',
      'Check understanding right after teaching rather than at the end of the week, so you '
        + 'catch it before it has to be relearned.',
    ],
    watch: [
      'Not starting looks like laziness and is almost always the launch problem. Your child '
        + 'often cannot get off the line, and once moving they are fine.',
      'Losing the paper they just finished is not carelessness about your effort or theirs. 1 '
        + 'tray beats another reminder.',
      'Underestimating how long something takes is a real difference in how time is felt, not '
        + 'overconfidence and not an excuse.',
      'Stopping halfway through a 3 step instruction means steps 2 and 3 are gone, so write '
        + 'them down instead of repeating them.',
    ],
    wins: [
      'Big picture thinking and connections across subjects, which step by step instruction '
        + 'never asks for.',
      'Idea generation and real creativity, which is a different skill from execution and is '
        + 'often abundant here.',
      'Excellent work when the structure is external, which means the ability is genuinely '
        + 'there once the scaffolding exists.',
    ],
    ask: [
      'Ask your pediatrician about an evaluation that includes executive function, and ask '
        + 'for the report to name specific accommodations rather than general recommendations.',
      'Executive function needs can be written into a 504 plan or an IEP as extended time, '
        + 'chunked assignments, checklists, and written instructions. In most states you can ask '
        + 'your district to evaluate your homeschooled child at no cost to you.',
    ],
  },
  learningDifferences: {
    headline: 'Teach at reading level, test at thinking level',
    day: [
      'Keep direct reading or math instruction to 20 minutes and do it every single day. '
        + 'Frequency matters more than length here, and 20 minutes 5 days a week beats an hour '
        + 'twice.',
      'Never let reading difficulty cap the other subjects. Read the science aloud or use '
        + 'audio, so your child learns science at their thinking level while reading is taught at '
        + 'their reading level.',
      'Put the taught reading or math block first, when your child is freshest, not last when '
        + 'the day is already hard.',
      'Cut the volume in half and keep the difficulty. 10 problems instead of 25, the same 10 '
        + 'problems.',
      'Pair audio with text so your child follows along while listening. That is access, not '
        + 'a shortcut.',
    ],
    teaching: [
      'Use structured, explicit, sequential reading instruction. Sounds and patterns taught '
        + 'directly and in order with heavy review, rather than guessed from pictures or context.',
      'Make it multisensory. Say it, trace it, build it, move it. More than 1 channel at once '
        + 'helps it hold.',
      'Overteach and review. Your child may need many more repetitions before something is '
        + 'automatic, and that says nothing at all about how smart they are.',
      'Separate the skill from the content when you assess. Let your child answer out loud, '
        + 'type, or draw, so a spelling difficulty cannot hide a good history answer.',
      'Check understanding the same day and again 3 days later, because the first time can '
        + 'look solid and still not stick.',
    ],
    watch: [
      'Slow, effortful reading of a text your child understands perfectly when they hear it '
        + 'is a decoding difference, not low ability and not low effort.',
      'Reversed letters, lost places, and skipped lines are not carelessness, and telling '
        + 'your child to slow down does not touch it.',
      'Avoiding reading and writing is usually about what those cost, since your child has '
        + 'been doing something exhausting since kindergarten.',
      'Lazy is the single most common misread here. Kids with learning differences often work '
        + 'harder than anyone in the room for the same page.',
    ],
    wins: [
      'Reasoning, inference, and connecting ideas, often well above grade level once reading '
        + 'is out of the way.',
      'Spatial, mechanical, and visual thinking, plus building and design.',
      'Verbal reasoning and storytelling, and real resilience from doing a hard thing daily '
        + 'for years.',
    ],
    ask: [
      'Ask for a full psychoeducational evaluation that reports cognitive ability and '
        + 'academic achievement separately, so the gap is there in writing. A private evaluator '
        + 'or your school district can do this.',
      'Specific learning disability is 1 of the 13 IDEA categories, which can mean an IEP, '
        + 'and a 504 plan can cover extended time, audio books, and a scribe. In most states your '
        + 'district can evaluate your homeschooled child at no cost, and that written evaluation '
        + 'is also what unlocks accommodations on college entrance tests and eligibility for free '
        + 'accessible book services later.',
    ],
  },
  gifted: {
    headline: 'Reading at 12 and regulating at 5, on the same day',
    day: [
      'Let the ceiling go in the subject your child is ahead in and keep the floor in the '
        + 'subject where they are age typical. Different levels in different blocks on the same '
        + 'day is normal, not a problem to fix.',
      'Compact the practice block hard. If your child got it in 3 problems, 20 more is a '
        + 'lesson in how pointless effort is. Test out, then move on.',
      'Protect 1 long uninterrupted block, 60 to 90 minutes, for a single deep project. Deep '
        + 'thinking needs time that a 30 minute rotation destroys.',
      'Keep the emotional and physical parts of the day age appropriate. Your child may read '
        + 'like a teenager and still need a nap, a snack, and help with a zipper.',
      'Put 1 genuinely hard thing in the week where your child is not already good, and '
        + 'expect that to be the hardest block emotionally rather than academically.',
    ],
    teaching: [
      'Go faster and deeper rather than adding more. Acceleration, meaning moving on to '
        + 'harder material, is usually what helps. Enrichment, meaning more activities at the '
        + 'same level, is good alongside it but it is not a substitute for it.',
      'Ask why and what if, not what. Your child almost always has the what already.',
      'Teach the experience of being wrong on purpose. Show your own drafts, your own errors, '
        + 'and the boring middle part of getting good at something.',
      'Never use more work as the reward for finishing, which teaches your child to hide what '
        + 'they can do.',
      'Check understanding by asking your child to explain it to someone else or to find the '
        + 'flaw in it, since recall questions will never show you the edge of what they know.',
    ],
    watch: [
      'A meltdown over a small mistake looks like drama and is usually the gap between what '
        + 'your child can imagine and what their hands or their age can currently do.',
      'Refusing to start something they might not be great at is fear of not being the smart '
        + 'one, not laziness. Perfectionism very often looks exactly like avoidance.',
      'Boredom showing up as clowning, arguing, or refusing is often about a lack of '
        + 'challenge, and 20 more of the same problems makes it worse.',
      'Age typical behavior in a child who talks like an adult gets read as going backward. '
        + 'It is not. It is their actual age showing up on schedule.',
    ],
    wins: [
      'Depth in a self chosen subject, going far past where any curriculum would have '
        + 'stopped.',
      'Connections across unrelated fields, which a subject by subject school day never asks '
        + 'for.',
      'Complex moral and abstract reasoning, and real originality in how a problem gets '
        + 'solved.',
    ],
    ask: [
      'Ask an evaluator experienced with gifted children about above level testing, which '
        + 'shows what your child can actually do rather than only that they hit the ceiling of a '
        + 'grade level test, and ask whether subject or whole grade acceleration is indicated.',
      'Giftedness is not covered by IDEA and gifted services vary entirely by state, so ask '
        + 'your state department of education what exists. If your child is both gifted and has a '
        + 'disability, sometimes called twice exceptional, the disability side does qualify under '
        + 'IDEA or Section 504, and that is worth pursuing even when the academic scores look '
        + 'fine.',
    ],
  },
  downSyndrome: {
    headline: 'Your child understands far more than they can say back',
    day: [
      'Keep every taught block to 10 or 15 minutes, with a clear start and a clear finish and '
        + 'the same order daily. Short and frequent beats long.',
      'Teach reading daily in a short block, and start early. Do not wait for speech to catch '
        + 'up first.',
      'Put new learning in the morning and let the afternoon be practice and review rather '
        + 'than new material.',
      'Put real movement and physical skill work inside the school day rather than leaving it '
        + 'to therapy appointments.',
      'Give more transition time than seems necessary, and keep the routine visible in photos '
        + 'or pictures.',
    ],
    teaching: [
      'Start reading with whole words your child can recognize on sight, names and favorite '
        + 'things first, and build a sight vocabulary before you teach phonics. Down Syndrome '
        + 'Education International suggests a sight vocabulary of around 50 words before starting '
        + 'phonics, because visual memory is usually the stronger route in and sounding out is '
        + 'usually the harder one.',
      'Put it in front of the eyes. Written words, photos, objects, and demonstration land '
        + 'better than spoken explanation.',
      'Never let talking be the test. Understanding usually runs well ahead of speech, so let '
        + 'your child answer by pointing, matching, choosing, signing, or using a device, and '
        + 'assume they took in more than they gave back.',
      'Use reading to build spoken language. A sentence your child already understands is '
        + 'organized for them on the page, which lowers the memory load and makes it easier to '
        + 'say out loud.',
      'Break new skills into small steps, teach 1 step at a time, and review yesterday\'s '
        + 'step before adding today\'s.',
    ],
    watch: [
      'Not answering is very often not being able to say it right now rather than not knowing '
        + 'it. Change the question so it can be answered by pointing and you will often find the '
        + 'answer was there the whole time.',
      'A slow response is usually processing and word finding time, so count to 10 before you '
        + 'rephrase.',
      'Doing something yesterday and not today is normal variation, not a lost skill and not '
        + 'failed teaching.',
      'Being socially charming leads people to underestimate the academic work your child can '
        + 'do. Keep expectations high, because the reading research supports doing exactly that.',
    ],
    wins: [
      'Visual memory, often excellent, and it is the doorway to reading, spelling, and a '
        + 'great deal more.',
      'Reading. Many children with Down syndrome read well, often better than their spoken '
        + 'language would predict, which surprises people who really ought to know better.',
      'Social intelligence, reading a room and reading people, plus serious determination '
        + 'about anything they have decided on.',
    ],
    ask: [
      'Ask for a speech and language evaluation that reports receptive and expressive '
        + 'language separately, and ask about augmentative communication such as signs or a '
        + 'device while spoken language develops. Using AAC supports speech rather than holding '
        + 'it back.',
      'Children with Down syndrome are eligible under IDEA, which can mean an IEP with '
        + 'speech, occupational, and physical therapy as related services. In most states you can '
        + 'ask your district to evaluate your homeschooled child, so ask what your state '
        + 'provides. Also ask your pediatrician about the Down syndrome specific health checks, '
        + 'including hearing and vision, since an untreated hearing or vision change can look '
        + 'exactly like a learning plateau.',
    ],
  },
  prematurity: {
    headline: 'A hard month is a hard month, not a direction',
    day: [
      'Plan shorter blocks and more of them, 10 to 15 minutes, since stamina rather than '
        + 'ability is often what sets the limit.',
      'Build a real rest block into the middle of the day, whether or not it looks needed, '
        + 'and protect it.',
      'Put academics in the morning window and let the afternoon be hands on, read aloud, or '
        + 'nothing at all.',
      'Leave the week deliberately unfull, so 1 appointment or 1 bad night cannot wreck the '
        + 'plan. 4 planned days and a flexible fifth.',
      'Read the pattern over a month rather than judging a week. Development after an early '
        + 'birth often arrives in bursts with flat stretches between them.',
    ],
    teaching: [
      'Pace to what your child\'s body can hold rather than to a grade level. The same '
        + 'content simply takes more sittings.',
      'Front load the new material and use the back half of the block for practice, since '
        + 'attention often fades before understanding does.',
      'Keep 1 subject going daily even in a rough stretch, usually reading, so there is '
        + 'continuity while everything else flexes.',
      'Break things into small steps and review often, and expect more repetitions for some '
        + 'things and fewer for others, unevenly.',
      'Check understanding when your child is rested, because a tired answer only tells you '
        + 'about tiredness.',
    ],
    watch: [
      'Fatigue reads as inattention or lack of interest and it is stamina. Check whether the '
        + 'same task goes fine at 9am.',
      'Uneven skills, strong in 1 area and slower in another, is an ordinary pattern and says '
        + 'nothing about effort.',
      'A rough few weeks after an illness or a hospital visit is a dip, not a trend, and it '
        + 'does not call for rebuilding the whole plan.',
      'Comparing to chronological age can mislead you in the early years, and adjusted age '
        + 'matters. Your child is not late, they are on their own timeline.',
    ],
    wins: [
      'Resilience and tolerance for hard things, built from a start most people cannot '
        + 'imagine.',
      'Strong bursts of capability when the body cooperates, often well above what an average '
        + 'day would suggest.',
      'Ease with adults, medical settings, and explaining themselves, which is real self '
        + 'advocacy.',
    ],
    ask: [
      'Ask your pediatrician about a developmental follow up evaluation, and about what is '
        + 'worth watching after an early birth, including vision, hearing, motor skills, and '
        + 'attention.',
      'Early intervention under IDEA Part C covers birth to age 3 and does not require a '
        + 'diagnosis, only a developmental concern, and Part B takes over at age 3. If your child '
        + 'is older, ask your district about evaluating your homeschooled child, and ask about a '
        + '504 plan for stamina based accommodations such as a shortened day, rest breaks, and '
        + 'extra time.',
    ],
  },
  medicalComplexity: {
    headline: 'Build the week around the appointments, not despite them',
    day: [
      'Plan 3 or 4 teaching days, not 5, and let appointments live in the days you left '
        + 'empty. A plan that assumes a clear week fails every week.',
      'Keep blocks to 10 or 15 minutes, and name a short list of essentials, usually reading '
        + 'and math, that happen even on a hospital day.',
      'Write a low capacity version of every block in advance, such as audiobook instead of '
        + 'reading and verbal math instead of written, so a bad day has a plan rather than a '
        + 'decision.',
      'Make the school day portable. A bag by the door with the current book and the tablet '
        + 'turns waiting rooms into learning time without anyone having to be brave about it.',
      'Put academics wherever your child\'s good window actually falls, even if that is 7pm '
        + 'or a Saturday, and let the calendar be wrong on purpose.',
    ],
    teaching: [
      'Teach in small pieces with frequent review, since continuity keeps getting interrupted '
        + 'and review is what keeps it from becoming relearning.',
      'Keep a simple written record of exactly where you stopped, so coming back after 2 '
        + 'weeks takes 5 minutes instead of a morning.',
      'Let medication timing, fatigue, and pain set the pace, and never make your child earn '
        + 'a break they already need.',
      'Use audio, video, and read aloud freely on low energy days. The content is what '
        + 'matters and the delivery is not.',
      'Check understanding often and lightly, because gaps open during interruptions and are '
        + 'easy to close early.',
    ],
    watch: [
      'A bad month is a bad month. It is not a decline in ability, not a failure of your '
        + 'teaching, and not a reason to throw out the plan.',
      'Slowness and short attention during a flare is the illness or the treatment, not '
        + 'motivation.',
      'I can\'t today is medical information, from the person who knows that body better than '
        + 'anyone.',
      'Falling well off the standard pace looks alarming and usually is not. Kids fill in '
        + 'fast when the body allows it, and homeschooling is the one setting that actually lets '
        + 'that happen.',
    ],
    wins: [
      'Medical self knowledge and self advocacy years ahead of peers, which is a serious life '
        + 'skill.',
      'Ease with adults and with hard conversations, plus patience most children never build.',
      'Real depth in whatever they got to go deep on during the slow stretches, which is '
        + 'often surprising.',
    ],
    ask: [
      'Ask your care team for a written summary of how the condition and the treatment affect '
        + 'learning, energy, and attention. That 1 document is what unlocks accommodations, and '
        + 'asking once saves you asking 10 times.',
      'Other health impairment is an IDEA category, so an IEP is possible, and a 504 plan can '
        + 'cover a shortened day, rest breaks, extra time, and absences. Ask your district about '
        + 'evaluating your homeschooled child, and ask what would happen if you ever enrolled '
        + 'part time for therapies.',
    ],
  },
};

export const LL_SOURCES = [
  { org: 'Down Syndrome Education International',
    label: 'Teaching reading skills to children with Down syndrome, on sight vocabulary before '
      + 'phonics and on comprehension running ahead of speech',
    url: 'https://www.down-syndrome.org/en-us/library/news-update/06/2/teaching-reading-skills-down-syndrome/' },
  { org: 'NICHD, National Institutes of Health',
    label: 'Common treatments and supports for Down syndrome, including early intervention and '
      + 'related therapies',
    url: 'https://www.nichd.nih.gov/health/topics/down/conditioninfo/treatments' },
  { org: 'PDA Society',
    label: 'PANDA as a way in, on declarative language, collaboration, and why reward based '
      + 'approaches raise pressure',
    url: 'https://www.pdasociety.org.uk/what-helps-guides/pda-approaches/panda-as-a-way-in/' },
  { org: 'International OCD Foundation',
    label: 'Managing OCD in your household, on reassurance, family accommodation, and working with a '
      + 'trained therapist',
    url: 'https://kids.iocdf.org/for-parents/managing-ocd-in-your-household/' },
  { org: 'Selective Mutism Association',
    label: 'Educator toolkit, on participation without speaking and on not using pressure or bribes '
      + 'to get speech',
    url: 'https://www.selectivemutism.org/wp-content/uploads/2022/10/20221019_SMA_Educator_ToolKit_SinglePagesRevisedOct2022.pdf' },
  { org: 'CHADD',
    label: 'Do not stop the movement, on physical activity improving accuracy and attention during work',
    url: 'https://chadd.org/attention-article/dont-stop-the-movement/' },
  { org: 'Centers for Disease Control and Prevention',
    label: 'ADHD treatment, including parent training as first line for children under 6',
    url: 'https://www.cdc.gov/adhd/treatment/index.html' },
  { org: 'Centers for Disease Control and Prevention',
    label: 'Autism signs and symptoms, including routines, sameness, and sensory responses',
    url: 'https://www.cdc.gov/autism/signs-symptoms/index.html' },
  { org: 'Centers for Disease Control and Prevention',
    label: 'Anxiety and depression in children, including how anxiety shows up and how it is treated',
    url: 'https://www.cdc.gov/children-mental-health/about/about-anxiety-and-depression-in-children.html' },
  { org: 'American Speech Language Hearing Association',
    label: 'Augmentative and alternative communication, including that AAC supports rather than '
      + 'delays speech',
    url: 'https://www.asha.org/public/speech/disorders/aac/' },
  { org: 'American Speech Language Hearing Association',
    label: 'Understanding auditory processing disorders in children, including noise, evaluation by '
      + 'an audiologist, and age of reliable testing',
    url: 'https://www.asha.org/public/hearing/understanding-auditory-processing-disorders-in-children/' },
  { org: 'Understood.org',
    label: 'The difference between IEPs and 504 plans',
    url: 'https://www.understood.org/en/articles/the-difference-between-ieps-and-504-plans' },
  { org: 'Understood.org',
    label: 'What dyslexia is, and why structured literacy and multisensory instruction help',
    url: 'https://www.understood.org/en/articles/what-is-dyslexia' },
  { org: 'National Association for Gifted Children',
    label: 'Asynchronous development tip sheet, on uneven development and age appropriate expectations',
    url: 'https://assets.noviams.com/novi-file-uploads/nagc/pdfs-and-documents/NAGC-TIP_Sheet-Asynchronous_Development.pdf' },
  { org: 'US Department of Education, IDEA',
    label: 'Section 300.324, special factors the IEP team must consider, including braille and '
      + 'communication needs and mode for deaf or hard of hearing children',
    url: 'https://sites.ed.gov/idea/regs/b/d/300.324/a' },
  { org: 'US Department of Education, IDEA',
    label: 'Questions and answers on children placed by their parents in private schools, which '
      + 'states that whether home schooled children count is determined by state law and that the '
      + 'district where the child lives is generally responsible for child find and evaluations',
    url: 'https://sites.ed.gov/idea/idea-files/questions-and-answers-on-serving-children-with-disabilities-placed-by-their-parents-in-private-schools/' },
];

/* The lenses this child has on, in the order the parent will want to
   read them, which is the order they were turned on. Anything without
   an entry here is skipped rather than shown empty, so a lens added to
   the app later cannot leave a blank card on somebody's screen. */
export function learnLensesFor(lensIds) {
  return (lensIds || []).filter((id) => LEARN_LENSES[id]).map((id) => ({
    id: id,
    ...LEARN_LENSES[id],
  }));
}

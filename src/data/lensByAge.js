/**
 * Ready Set Grow: Support lenses, by age
 * ------------------------------------------------------------------
 * WHY THIS FILE EXISTS
 * A four year old and a sixteen year old can carry the same diagnosis
 * and look almost nothing alike. The general understanding written in
 * src/data/supportLenses.js stays true across childhood, but the day
 * to day picture does not, and a parent reading about meltdowns at the
 * supermarket when their child is fifteen learns nothing useful.
 *
 * So this file holds the part that changes with age, kept separate so
 * the lens definitions stay readable and so age bands can be added or
 * rewritten one at a time without touching anything else.
 *
 * THE OTHER REASON, WHICH MATTERS MORE
 * No child does all of the things on any of these lists. Most do a few.
 * Some do things that are not on the list at all. These are written as
 * a menu of possibilities so a parent can recognize their own child in
 * two or three lines, not as a checklist to score them against. Every
 * screen that shows this content must show LENS_VARIATION_NOTE with it.
 *
 * SHAPE
 *   LENS_AGE_BANDS    the five bands, in order, with month ranges
 *   LENS_BY_AGE       { lensId: { bandId: { looksLike[], whatHelps[] } } }
 *   getLensAgeView()  the one function screens should call
 *
 * Coverage is deliberately partial. A lens with no entry here simply
 * falls back to the general understanding, which is still correct.
 */

export const LENS_VARIATION_NOTE =
  'No child does all of this, and plenty of children do things that are not here at all. ' +
  'Read it looking for the 2 or 3 lines that sound like your child, and let the rest go. ' +
  'A short list of matches does not mean a mild version of anything, and a long one does not mean a severe version.';

export const LENS_AGE_BANDS = [
  { id: 'baby', label: 'Birth to 2', short: 'Baby and toddler', minMonths: 0, maxMonths: 24 },
  { id: 'early', label: '2 to 5', short: 'Preschool', minMonths: 24, maxMonths: 60 },
  { id: 'primary', label: '5 to 11', short: 'Elementary school', minMonths: 60, maxMonths: 132 },
  { id: 'middle', label: '11 to 15', short: 'Early teen', minMonths: 132, maxMonths: 180 },
  { id: 'teen', label: '15 to 18', short: 'Older teen', minMonths: 180, maxMonths: 229 },
];

/* ------------------------------------------------------------------
 * CONTENT
 * ------------------------------------------------------------------ */

export const LENS_BY_AGE = {
  adhd: {
    baby: {
      looksLike: [
        'Very active from early on, and harder to settle than other babies you have met.',
        'Sleep that never quite falls into a pattern, or a toddler who fights it every single night.',
        'Moving to the next thing before the last one finished, so play is short and constant.',
        'Big reactions that arrive fast and pass fast.',
      ],
      whatHelps: [
        'Do not chase a diagnosis this young. Nobody can tell yet, and the strategies work anyway.',
        'Movement before anything that needs sitting still, not as a reward afterward.',
        'The same order of events every day, even when the times move around.',
        'One instruction at a time, and expect to give it more than once.',
      ],
      note:
        'ADHD is not diagnosed this early, and an active toddler is usually just an active toddler. ' +
        'Nothing here is a prediction.',
    },
    early: {
      looksLike: [
        'Constant motion, including climbing on things that were not meant to be climbed.',
        'Struggling to wait for a turn in a way that is noticeably harder than other children the same age.',
        'Hearing an instruction, meaning to do it, and being somewhere else entirely 30 seconds later.',
        'Enormous focus on one thing they love, and none at all on anything they do not.',
        'Preschool feedback that uses words like busy, spirited, or a handful.',
      ],
      whatHelps: [
        'Say the one thing you want, in the positive. Feet on the floor lands better than stop climbing.',
        'Get down to their eye level and touch their shoulder before you speak.',
        'Build in a run around every half hour rather than waiting for the wall climbing to start.',
        'First this, then that, said out loud and repeated back.',
        'Pick 2 rules that matter and let the rest go for now.',
      ],
    },
    primary: {
      looksLike: [
        'Homework that takes 3 hours because the starting is the hard part, not the work.',
        'Losing coats, water bottles, and whole reading folders, repeatedly, without carelessness being the reason.',
        'Blurting answers and then feeling awful about it.',
        'Fine 1 to 1 and much harder in a noisy classroom.',
        'A pattern of being told to try harder by people who have not noticed how hard they are already trying.',
        'Girls in particular may show none of the movement and all of the drifting, which is why they get missed.',
      ],
      whatHelps: [
        'Break homework into pieces with a visible timer and a real break between them.',
        'Sit nearby while they start. Your presence often does what willpower cannot.',
        'A checklist by the door with pictures, not words, for everything that has to leave the house.',
        'Rewards that arrive today. A sticker chart cashed in on Friday is invisible to them on Monday.',
        'Ask the school for an evaluation in writing if it is affecting more than one setting.',
        'Protect the thing they are great at. It is doing more for their self image than you can see.',
      ],
    },
    middle: {
      looksLike: [
        'Several subjects with several teachers and several deadlines, which is where organization finally breaks.',
        'Work that is finished and never handed in.',
        'Saying yes to everything and then drowning.',
        'A short fuse at home, because school used up everything they had.',
        'Comparing themselves to friends who seem to manage without trying, and coming to hard conclusions about themselves.',
        'Trying to fix it with all nighters, which works once and then stops working.',
      ],
      whatHelps: [
        'Move from you reminding to a system they can see, such as one shared calendar or one whiteboard.',
        'Body doubling. Homework in the same room as you, both working, no supervision.',
        'Teach them to hand in imperfect work on time rather than perfect work late.',
        'Talk about how their brain works, in plain language, so the story is wiring and not character.',
        'Let them drop something. Fewer commitments done well beats more done badly.',
        'If medication is on the table, they get a real say in it now.',
      ],
    },
    teen: {
      looksLike: [
        'Driving, money, and deadlines, all of which punish exactly this wiring.',
        'Night owl sleep that collides with early classes.',
        'Impulsive decisions with real consequences, made by someone who genuinely knew better.',
        'Higher risk of using something, including alcohol or nicotine, to steady themselves.',
        'Anxiety or low mood sitting on top of the ADHD, often for years by now.',
        'Real competence in a job or a passion, alongside paperwork they cannot make themselves do.',
      ],
      whatHelps: [
        'Hand over the systems now, while you are still nearby to help when they fail.',
        'Talk about driving and phones directly and without a lecture, because the risk is real and known.',
        'Treat a missed deadline as a problem to solve together, not a character trial.',
        'Make sure they know their own diagnosis, their own medication, and how to ask for accommodations.',
        'Check in on mood. Depression and anxiety are common here and get written off as laziness.',
        'Say the strengths out loud. They have heard the deficits for a decade.',
      ],
    },
  },

  autism: {
    baby: {
      looksLike: [
        'Less pointing, less showing you things, and less looking back at your face to check.',
        'Responding to their name inconsistently, though hearing is fine.',
        'Lining things up or spinning wheels with real absorption.',
        'Strong reactions to particular sounds, textures, or clothing.',
        'Losing words or gestures they used to have, which is always worth a same week phone call.',
      ],
      whatHelps: [
        'Ask for an evaluation if you are wondering. You do not need a referral or a reason.',
        'Get in beside their play rather than redirecting it. Join the lining up.',
        'Narrate everything, and leave long pauses for a reply that may not come yet.',
        'Keep the order of the day steady even when the clock moves.',
        'Let stimming be. It is regulation, and it is working.',
      ],
    },
    early: {
      looksLike: [
        'Deep, detailed interest in one subject, well past what other children manage.',
        'Meltdowns at transitions, especially leaving somewhere they were enjoying.',
        'Playing alongside other children rather than with them, which is still connection.',
        'Very specific food, clothing, or routine requirements that are not negotiable in the moment.',
        'Speech that is scripted, echoed from shows, or absent, any of which can be communication.',
        'Holding it together at preschool and falling apart in the car.',
      ],
      whatHelps: [
        'Visual schedules, because seeing the day is easier than remembering it.',
        'Warn before transitions twice, at 5 minutes and at one.',
        'Concrete language. Say what to do instead of what to stop.',
        'A quiet landing space at home with no questions for 20 minutes.',
        'Accept the safe foods while slowly offering more beside them, with zero pressure.',
        'If speech is delayed, ask about AAC now. It supports speech, it does not replace it.',
      ],
    },
    primary: {
      looksLike: [
        'Knowing the rules better than anyone and finding it unbearable when others break them.',
        'Friendships that are wanted and hard to start or keep.',
        'Copying other children on purpose to blend in, which costs enormous energy.',
        'A school day that goes fine and an evening that does not, in the same child.',
        'Honesty that reads as rudeness, and genuine confusion about why it landed badly.',
        'Sensory limits showing up as school refusal, uniform battles, or dinner hall avoidance.',
      ],
      whatHelps: [
        'Believe the after school collapse. It is evidence of how hard the day was, not of home being the problem.',
        'Build the landing pad into the schedule. Food, quiet, and no debrief until later.',
        'Teach social rules explicitly, as information rather than correction.',
        'Protect the special interest. It is a strength, a comfort, and often a future.',
        'Ask school what supports are in place, in writing, and what the sensory plan is.',
        'Let them have a friendship that looks different, such as one friend and a shared interest.',
      ],
      note:
        'This is the age where a child who needs less support can look like they need none. ' +
        'Managing is not the same as coping, and the cost usually shows up somewhere else.',
    },
    middle: {
      looksLike: [
        'Social demands that got much more complicated, much faster, than the year before.',
        'Masking all day and being exhausted, irritable, or shut down by evening.',
        'Anxiety, low mood, or both, often more visible than anything else by now.',
        'Wanting independence and needing predictability at the same time, which is a hard combination.',
        'Puberty landing harder because the body itself became unpredictable.',
        'Realizing they are different, and needing help to hold that without shame.',
      ],
      whatHelps: [
        'Tell them about their diagnosis plainly, positively, and before someone else does it badly.',
        'Reduce demands when you can see the load building, before it breaks.',
        'Let the downtime be genuinely theirs, without turning it into a screen time argument.',
        'Watch for anxiety and depression and treat them, rather than reading them as autism getting worse.',
        'Find autistic adults, online or in person. Being told you turn out fine matters at this age.',
        'Keep predictability where it costs you nothing, and negotiate hard on the rest.',
      ],
    },
    teen: {
      looksLike: [
        'Competence in the areas they care about, alongside paperwork and phone calls that feel impossible.',
        'Burnout, which can look like losing skills they clearly had last year.',
        'Deciding who to tell, and when, and getting it wrong sometimes.',
        'Relationships and consent, where clear direct information is safer than hints.',
        'Real anxiety about leaving school, because the structure is what has been holding the week together.',
      ],
      whatHelps: [
        'Teach the admin explicitly. Making an appointment is a script they can learn, not a thing they should just know.',
        'Take burnout seriously and lower the load rather than pushing through it.',
        'Talk about disclosure at work and college as a decision with pros and cons, not an obligation.',
        'Be direct about relationships, consent, and safety. Vagueness here is not kindness.',
        'Plan the transition out of school a year early, and build structure into whatever comes next.',
        'Keep the rule you started with. Join them in what they love, at any age.',
      ],
    },
  },

  sensory: {
    baby: {
      looksLike: [
        'Screaming through diaper changes, baths, or having clothes pulled over the head.',
        'Hating car seats, or only settling when moving.',
        'Refusing textures at weaning that other babies take, and gagging on lumps.',
        'Startling hard at ordinary household noise.',
        'Or the opposite, which is a baby who barely reacts and seems to need a lot of input to notice anything.',
      ],
      whatHelps: [
        'Warn the body before you touch it. Say what is coming and use firm hands rather than light ones.',
        'Firm pressure calms, light touch alerts. Swaddling and deep hugs are doing real work.',
        'Change one thing at a time at weaning, and keep offering without pressure.',
        'Lower the background noise at the end of the day before the meltdown, not after.',
      ],
    },
    early: {
      looksLike: [
        'Seams, tags, waistbands, and socks, which are a genuine daily battle rather than a preference.',
        'Covering ears at hand dryers, assemblies, or birthday parties.',
        'Crashing into furniture and people, and wanting to be squeezed.',
        'Eating a very short list of foods, usually beige and dry.',
        'Falling apart at the supermarket, which is one of the loudest, brightest places they go.',
      ],
      whatHelps: [
        'Let the clothes battle go. Cut the tags, buy seamless, and buy five of whatever works.',
        'Ear defenders in the bag, every time, without making it a discussion.',
        'Heavy work before hard moments. Carrying, pushing, climbing, hanging.',
        'One safe food on every plate, always, so the plate is never a threat.',
        'Shorter supermarket trips, or none, for a while. You are not failing by avoiding it.',
      ],
    },
    primary: {
      looksLike: [
        'The school dinner hall being the hardest part of the day.',
        'Fidgeting constantly, or looking still and paying attention to none of it.',
        'Meltdowns after school that trace back to a loud assembly 6 hours earlier.',
        'Handwriting that hurts, or pressing so hard the pencil goes through.',
        'Being called sensitive, dramatic, or fussy by people who cannot feel what they feel.',
      ],
      whatHelps: [
        'Ask school for a sensory plan in writing, including somewhere quiet they can go without asking.',
        'A movement job at school, such as carrying books or handing things out.',
        'Chewy or crunchy snacks, which regulate more than they look like they should.',
        'Name the input out loud so they learn their own pattern. That hall was loud, your ears are full.',
        'An occupational therapy referral is reasonable to ask for if it is affecting school.',
      ],
    },
    middle: {
      looksLike: [
        'Deodorant, showers, shaving, and periods, all of which add new sensory demands at once.',
        'Refusing school uniform items, or the whole day, over things adults think are small.',
        'Headphones on constantly, which is usually a coping tool and not avoidance of you.',
        'Being the one who cannot sit in the canteen, and feeling it socially.',
      ],
      whatHelps: [
        'Solve the hygiene problem rather than winning it. Different products, different textures, different order.',
        'Let the headphones stay unless there is a safety reason.',
        'Help them advocate for themselves, with a script, rather than doing it all for them.',
        'Accept that sensory needs are not something they will outgrow on a schedule.',
      ],
    },
    teen: {
      looksLike: [
        'Knowing exactly what they can and cannot tolerate, and building life around it quietly.',
        'Jobs, buses, and clubs being ruled out for reasons they may not explain.',
        'Sensory overload landing as anger or shutdown rather than as tears.',
      ],
      whatHelps: [
        'Treat their knowledge of their own body as accurate, because by now it is.',
        'Plan around the environment when choosing work, study, and travel.',
        'Make sure they can explain their needs to a manager or tutor in one clear sentence.',
        'Keep the tools available. Ear defenders and sunglasses are not childish.',
      ],
    },
  },

  anxiety: {
    baby: {
      looksLike: [
        'Very strong separation distress that lasts well past the usual window.',
        'Wariness of new people and new rooms that takes a long time to settle.',
        'Tummy aches, poor sleep, or feeding changes with no medical cause found.',
      ],
      whatHelps: [
        'Goodbyes that are short, warm, and the same every time. Sneaking out makes tomorrow worse.',
        'Let them warm up from your lap rather than being handed over.',
        'Keep your own face calm, because they are reading it to decide whether this is safe.',
      ],
    },
    early: {
      looksLike: [
        'Endless what if questions, and reassurance that works for 2 minutes.',
        'Refusing parties, classes, or the toilet at preschool.',
        'Bedtime taking an hour because the dark is when the worrying starts.',
        'Physical complaints, such as tummy aches, on the mornings of hard things.',
      ],
      whatHelps: [
        'Answer a worry once, kindly, then stop answering it. Repeated reassurance feeds it.',
        'Name the feeling and normalize it. Your tummy feels funny because you are nervous. That happens.',
        'Practice the hard thing in small steps rather than avoiding it or forcing it.',
        'Keep the goodbye ritual identical every time, so there is nothing new to predict.',
      ],
    },
    primary: {
      looksLike: [
        'Perfectionism, rubbing out until the paper tears, or refusing to start in case it is wrong.',
        'Monday morning tummy aches that are genuinely felt and not invented.',
        'Needing to know the plan for the whole day before it starts.',
        'Being the easiest child in the class and the hardest one at home.',
        'Worrying about adult sized things, such as money, illness, or the news.',
      ],
      whatHelps: [
        'Ladder the hard thing. 6 small steps, each one repeated until it is boring.',
        'Praise the attempt and the mess, out loud, more than the result.',
        'Give the day a shape they can see, and be honest about the parts you do not know.',
        'Do not remove the hard thing entirely. Avoidance is what makes anxiety grow.',
        'Ask for help if it is stopping them doing things. Anxiety treats well at this age.',
      ],
    },
    middle: {
      looksLike: [
        'Social anxiety arriving properly, including fear of being looked at or spoken to.',
        'School refusal that starts as one day and becomes a pattern fast.',
        'Panic attacks, which they may describe as thinking they were dying.',
        'Reassurance seeking moving to texting you all day.',
        'Sleep going first, which makes all of it worse.',
      ],
      whatHelps: [
        'Move on school refusal quickly. Every missed day makes the next one harder.',
        'Teach what a panic attack actually is, physically, so it stops being frightening in itself.',
        'Agree a limit on reassurance texts together, kindly, rather than going silent on them.',
        'Protect sleep like it is treatment, because it partly is.',
        'Get a referral. Therapy for anxiety works, and waiting lists are long, so start early.',
      ],
    },
    teen: {
      looksLike: [
        'Exams, driving, and the future, all of which give anxiety real material to work with.',
        'Avoidance that looks like not caring, such as not applying, not asking, not going.',
        'Alcohol or weed used to take the edge off, which works briefly and then does not.',
        'Very high achievement held up by very high fear, which nobody sees as a problem until it breaks.',
      ],
      whatHelps: [
        'Separate the standard from the fear. You can want them to do well and not want this.',
        'Be direct about self medicating, without panic, because the pattern starts here.',
        'Help them access their own care, including making the appointment themselves with you beside them.',
        'Make sure they know the difference between anxiety and danger in their own body.',
        'Say plainly that you are not disappointed. They often assume you are.',
      ],
    },
  },

  ocd: {
    early: {
      looksLike: [
        'Rigid rituals at bedtime or in the bath that cause real distress if they are interrupted.',
        'Needing things lined up, even, or done in an exact order before they can move on.',
        'Asking the same question many times a day and not being settled by the answer.',
      ],
      whatHelps: [
        'Do not join the ritual. Every time you complete it for them it gets a little stronger.',
        'Change one small part of it at a time, with warning, rather than removing it all at once.',
        'Answer a worry question once, then say you already answered that, warmly and the same way each time.',
      ],
      note:
        'Plenty of young children like order and sameness and do not have OCD. The difference is ' +
        'distress. If interrupting it is upsetting to you but not to them, it is probably not this.',
    },
    primary: {
      looksLike: [
        'Washing, checking, tapping, or counting that they know is silly and cannot stop.',
        'Homework taking hours because of rubbing out and redoing.',
        'Confessing things over and over, or needing you to say it is fine.',
        'Intrusive thoughts that frighten them, often about harm, which they may be too ashamed to tell you.',
        'Holding it all in at school and doing all of it at home.',
      ],
      whatHelps: [
        'Name it as a separate thing from them. Many families call it the worry brain or give it a name.',
        'Stop giving reassurance, gently and with warning, because reassurance is the compulsion in disguise.',
        'Ask for a referral for exposure and response prevention specifically. It is the treatment that works.',
        'Tell them intrusive thoughts are common and mean nothing about who they are. Everyone has them.',
        'Do not punish the compulsions. They are not choices at the moment they happen.',
      ],
    },
    middle: {
      looksLike: [
        'Rituals hidden well enough that you only see the time they take.',
        'Hours lost at night, and exhaustion the next day.',
        'Themes that are harder to talk about, including ones about harm, religion, or relationships.',
        'Avoiding whole situations rather than performing the ritual in public.',
      ],
      whatHelps: [
        'Treat secrecy as a symptom and not as dishonesty.',
        'Get specialist treatment. This is very treatable and it does not usually resolve on its own.',
        'Agree together on which accommodations you will stop, and go slowly, with them involved.',
        'Keep the relationship out of the fight. You are both on the same side against it.',
      ],
    },
    teen: {
      looksLike: [
        'A pattern they now understand well, and the shame that comes with understanding it.',
        'Flare ups under stress, such as exams or a move.',
        'Reluctance to take medication, or to keep taking it once it is working.',
      ],
      whatHelps: [
        'Hand them the management of it, with you as support rather than supervisor.',
        'Expect flares at stressful points and plan for them instead of treating each one as failure.',
        'Make sure they know what worked before, so they can restart it themselves.',
      ],
    },
  },

  pda: {
    early: {
      looksLike: [
        'A no to almost any direct instruction, including things they wanted a minute ago.',
        'Meltdowns over ordinary requests that seem far too big for the request.',
        'Being much easier for other people than for you, or the exact reverse.',
        'Enormous creativity in avoiding, including distraction, negotiation, and excuses.',
      ],
      whatHelps: [
        'Take the demand out of the sentence. The shoes are by the door beats put your shoes on.',
        'Offer 2 real choices rather than one instruction.',
        'Make it a game or a challenge. Playfulness lowers the threat more than firmness does.',
        'Drop every demand you do not actually need today. Save your requests for the ones that matter.',
      ],
    },
    primary: {
      looksLike: [
        'School going well on paper while home takes the whole cost of it.',
        'Refusal that comes with real panic underneath it, not defiance.',
        'Rewards and consequences making everything worse rather than better.',
        'Needing to feel equal rather than managed.',
      ],
      whatHelps: [
        'Reward charts often backfire here. It is safe to stop using them.',
        'Say things sideways. I wonder whether, or I am not sure how we do this, invites them in.',
        'Give them genuine control over the order and the timing of things.',
        'Explain the why, because being told without a reason is itself the demand.',
      ],
    },
    middle: {
      looksLike: [
        'School attendance breaking down, sometimes suddenly.',
        'Shutting down completely rather than arguing.',
        'Anxiety that is now the most obvious part of the picture.',
      ],
      whatHelps: [
        'Lower the load before pushing attendance. Pushing usually costs more than it buys.',
        'Collaborate on the plan, out loud, with them in the room and with real veto power.',
        'Find professionals who know this presentation. Standard behavior approaches often make it worse.',
      ],
    },
    teen: {
      looksLike: [
        'Real capability alongside an inability to be told what to do by anyone.',
        'Doing very well in settings they chose and badly in ones chosen for them.',
      ],
      whatHelps: [
        'Move fully to partnership. Advice offered once, then left alone.',
        'Help them find paths with autonomy built in, such as flexible study or self directed work.',
        'Trust that the capability is real, even on the weeks it is not visible.',
      ],
    },
  },

  speech: {
    baby: {
      looksLike: [
        'Few or no babbled consonant sounds by around 9 months.',
        'No single words by around 15 months, or no pointing and showing.',
        'Understanding far more than they can say, which is common and still worth checking.',
        'Losing words they previously had, which needs a call this week rather than a wait.',
      ],
      whatHelps: [
        'Self refer for speech therapy now. You do not need a doctor to agree first in most places.',
        'Narrate everything, and pause for a turn even when no turn comes.',
        'Use signs alongside words. Signing supports speech, it does not delay it.',
        'Cut down background noise, especially television, during the times you talk together.',
      ],
    },
    early: {
      looksLike: [
        'Speech that family understands and strangers do not.',
        'Short sentences compared to other children the same age.',
        'Frustration and hitting or biting, because the words are not available in time.',
        'Understanding instructions perfectly and answering with very little.',
      ],
      whatHelps: [
        'Say their sentence back correctly, slightly longer, without asking them to repeat it.',
        'Give them the word for the feeling before the meltdown, not during it.',
        'Wait longer after asking a question. Count to 10 in your head.',
        'Keep the therapy going if you have it, and ask for the home strategies in writing.',
      ],
    },
    primary: {
      looksLike: [
        'Reading and spelling being harder, because sound and letter mapping sits on top of speech.',
        'Avoiding speaking in class, or being seen as quiet rather than as struggling.',
        'Being teased about how words come out, which they may not tell you about.',
        'Word finding pauses, or talking around the word they cannot get to.',
      ],
      whatHelps: [
        'Tell school specifically, and ask how they will handle reading aloud.',
        'Never finish their sentence. Wait, even when it is uncomfortable.',
        'Check in on teasing directly, because they usually will not raise it.',
        'Keep speech therapy going into school years if it is still needed. It is not only for toddlers.',
      ],
    },
    middle: {
      looksLike: [
        'Managing well socially while avoiding presentations, phone calls, or reading aloud.',
        'Written work that is far better than spoken, or the reverse.',
        'Self consciousness that can look like refusal.',
      ],
      whatHelps: [
        'Get accommodations written down rather than relying on goodwill.',
        'Practice the specific feared task, such as ordering food, in small real steps.',
        'Let them decide who knows, and back that decision.',
      ],
    },
  },

  executiveFunction: {
    early: {
      looksLike: [
        'Needing every step of getting dressed said out loud, every day.',
        'Starting a task and being somewhere else halfway through.',
        'Big feelings at transitions, because stopping is its own skill.',
      ],
      whatHelps: [
        'Pictures of the steps, on the wall, at their height.',
        'One step at a time, and the next one only after the first is done.',
        'Warn before changes, twice, and use a timer they can see.',
      ],
      note:
        'Executive function is genuinely not developed yet at this age in any child. ' +
        'Support here is normal parenting, not intervention.',
    },
    primary: {
      looksLike: [
        'Homework, bags, and PE kit, all of which need holding several things in mind at once.',
        'Knowing what to do and not being able to start.',
        'Time going missing, so 20 minutes and an hour feel similar.',
        'Being described as disorganized by adults who think it is a choice.',
      ],
      whatHelps: [
        'Externalize everything. If it is not visible, it does not exist.',
        'Break work into pieces small enough that starting is not a decision.',
        'Sit nearby while they start, then leave. The start is the expensive part.',
        'Use a clock with hands or a visual timer, so time becomes something they can see.',
      ],
    },
    middle: {
      looksLike: [
        'Several subjects, several teachers, and no single place where everything is written down.',
        'Work done and not handed in, repeatedly.',
        'Leaving everything to the night before and then genuinely panicking.',
      ],
      whatHelps: [
        'One system, in one place, that they chose. A perfect system they will not use is worthless.',
        'Weekly planning together, 15 minutes, same time every week.',
        'Teach backward planning from a date, explicitly, because nobody is born knowing it.',
        'Let a small deadline be missed while the stakes are still low.',
      ],
    },
    teen: {
      looksLike: [
        'Capability and paperwork failing in the same person on the same day.',
        'Applications, forms, and appointments not happening.',
        'Sleep and time management colliding with early starts.',
      ],
      whatHelps: [
        'Hand the systems over now, while you are still there to catch what falls.',
        'Do the hard admin beside them once, narrating, rather than for them.',
        'Agree what you will still remind them about, so it stops being nagging.',
      ],
    },
  },

  learningDifferences: {
    early: {
      looksLike: [
        'Trouble learning rhymes, or hearing that 2 words start the same way.',
        'Letters and names of letters not sticking, despite plenty of exposure.',
        'A family history of reading or spelling difficulty, which matters a lot here.',
      ],
      whatHelps: [
        'Rhyme, sing, and clap syllables. Sound awareness is the foundation reading sits on.',
        'Read to them far past the age they could read to themselves.',
        'Raise the family history with school now rather than waiting for a problem.',
      ],
    },
    primary: {
      looksLike: [
        'Reading that is slow and effortful while understanding is fine when someone reads aloud.',
        'Spelling the same word three ways on one page.',
        'Avoiding reading, or becoming the class clown around it.',
        'Being told they are not trying, by people watching them try very hard.',
        'Tummy aches on the days with reading or spelling tests.',
      ],
      whatHelps: [
        'Ask for an assessment in writing. Waiting to see rarely helps and the gap widens.',
        'Use audiobooks and text to speech immediately. Listening is still reading for content.',
        'Separate handwriting from thinking. Let them dictate ideas and write later.',
        'Protect what they are good at, fiercely, because school will not.',
        'Say out loud that this has nothing to do with how clever they are, because they do not believe that yet.',
      ],
    },
    middle: {
      looksLike: [
        'Workload rising faster than reading speed can carry it.',
        'Hiding it well, and being exhausted by the hiding.',
        'Choosing subjects to avoid reading and writing rather than by interest.',
        'Beliefs about themselves that have now hardened into fact.',
      ],
      whatHelps: [
        'Get the exam access arrangements sorted early, not in the final term.',
        'Teach the technology properly, so it is a tool they own rather than a badge.',
        'Challenge the story out loud. They have carried the stupid label for years.',
        'Let subject choices follow interest, with support built around the reading load.',
      ],
    },
    teen: {
      looksLike: [
        'Real strengths that school never measured.',
        'Anxiety about exams that is about the format more than the content.',
        'Deciding whether to disclose in applications and at work.',
      ],
      whatHelps: [
        'Make sure they can explain their own needs in one clear sentence to a stranger.',
        'Check the accommodations carry into college or work. They do not transfer automatically.',
        'Point at people who did well with the same wiring, because there are many.',
      ],
    },
  },

  gifted: {
    early: {
      looksLike: [
        'Reading early, or asking questions that are years ahead of the room.',
        'Intense reactions to fairness, death, or anything they have understood too early.',
        'Being bored and then difficult, in that order.',
        'Skills that are wildly uneven, such as reading fluently and not being able to do a zip.',
      ],
      whatHelps: [
        'Answer the hard questions honestly and at their level, including the frightening ones.',
        'Let them go deep rather than pushing them forward through more of the same.',
        'Do not expect emotional maturity to match the vocabulary. It rarely does.',
      ],
    },
    primary: {
      looksLike: [
        'Finishing first and then unraveling, or refusing to do work they find pointless.',
        'Perfectionism, and refusing to try things they might be bad at.',
        'Feeling out of step with other children the same age.',
        'Existential worry about big subjects, at an age that makes it hard to carry.',
        'A second difference sitting underneath, such as ADHD or dyslexia, hidden by the ability.',
      ],
      whatHelps: [
        'Ask for depth rather than more worksheets. Harder is better than longer.',
        'Praise effort and strategy, not being clever, because clever becomes a thing to protect.',
        'Let them fail at something on purpose, somewhere safe, regularly.',
        'Find peers by interest rather than by age.',
        'If something is inconsistent, look underneath. High ability hides other differences well.',
      ],
    },
    middle: {
      looksLike: [
        'Underachieving on purpose, sometimes to fit in.',
        'Arguing with everything, which is a skill being practiced and not just attitude.',
        'Real distress about the state of the world.',
        'Identity built entirely on being the clever one, which is fragile.',
      ],
      whatHelps: [
        'Take the arguments seriously and argue back properly.',
        'Give them something real to do about what worries them, however small.',
        'Build identity on more than achievement, deliberately.',
        'Let them be a beginner at something new and public.',
      ],
    },
    teen: {
      looksLike: [
        'Enormous pressure, some of it from you and some of it invented.',
        'Burnout that looks like not caring.',
        'Choices driven by what they are good at rather than what they want.',
      ],
      whatHelps: [
        'Say clearly that your view of them does not move with their results.',
        'Ask what they want, separately from what they are able to do.',
        'Watch for burnout and depression, which are common and easy to miss under high grades.',
      ],
    },
  },

  downSyndrome: {
    baby: {
      looksLike: [
        'Low muscle tone, so holding the head, sitting, and walking take longer.',
        'Feeding taking longer, and tiring more quickly during it.',
        'A sociable, engaged baby who is working harder for each motor step.',
        'Health follow ups, including heart, hearing, thyroid, and vision checks.',
      ],
      whatHelps: [
        'Start early intervention now. Physical, occupational, and speech therapy all matter early.',
        'Keep the medical schedule, because most of it is routine screening rather than bad news.',
        'Use signs from the start. Understanding usually runs well ahead of speech here.',
        'Measure against last month rather than against other babies.',
      ],
    },
    early: {
      looksLike: [
        'Understanding far more than they can say, which is very common.',
        'Speech that is hard for strangers to follow.',
        'Real social warmth and a good sense of humor.',
        'Using charm to get out of hard tasks, which is smart rather than naughty.',
        'Hearing that fluctuates with glue ear and takes speech down with it.',
      ],
      whatHelps: [
        'Keep signing alongside speech for as long as it helps.',
        'Have hearing checked often. Small losses cost a lot here.',
        'Break skills into smaller steps than you think are necessary, and celebrate each one.',
        'Do not let the charm get them out of the task. Kindly, hold the expectation.',
      ],
    },
    primary: {
      looksLike: [
        'Strong visual learning and much weaker learning by listening alone.',
        'Reading often going better than expected, especially with a visual approach.',
        'Wanting friendships and needing help to build them.',
        'Gaps between them and classmates widening, which is painful to watch.',
      ],
      whatHelps: [
        'Ask for visual materials as standard, not as an extra.',
        'Push for real inclusion with support, because expectations shape outcomes here more than almost anything.',
        'Keep teaching reading. Many children with Down syndrome read well.',
        'Arrange friendships actively, with structure, rather than hoping they happen.',
      ],
    },
    middle: {
      looksLike: [
        'Puberty arriving on the ordinary timetable, whatever else is different.',
        'Wanting independence and privacy like any other teenager.',
        'Social gap widening, and noticing it.',
        'Stubbornness that is often communication about something they cannot say another way.',
      ],
      whatHelps: [
        'Teach about bodies, puberty, privacy, and consent directly and concretely.',
        'Hand over real independence in small pieces, with backup.',
        'Treat digging in as a message and look for what it is about.',
        'Find social spaces where they are not the only one, alongside inclusive ones.',
      ],
    },
    teen: {
      looksLike: [
        'A clear sense of who they are and what they want.',
        'Transition planning, which needs to start years before it feels urgent.',
        'Wanting work, relationships, and a place of their own, like anyone else.',
      ],
      whatHelps: [
        'Start transition planning by 14, including work experience and travel training.',
        'Assume competence and adjust down only where you must, never the reverse.',
        'Talk about relationships honestly. Adults with Down syndrome have them.',
        'Get the legal and financial planning advice early, without letting it shrink the plans.',
      ],
    },
  },

  deafHoh: {
    baby: {
      looksLike: [
        'A referred newborn screen, or a screen that passed and a nagging feeling since.',
        'Not startling at sudden sound, or not turning toward a voice from behind.',
        'Babbling that started on time and then thinned out or stopped, which is one of the clearest early signs there is.',
        'Settling well when you are in sight and not settling at all when you are talking from the next room.',
        'Hearing aids that come out of the ears roughly 400 times a day.',
      ],
      whatHelps: [
        'Do not wait and see. A referred screen gets a full audiology assessment, and the timeline that matters is months, not years.',
        'Start signing now, as a whole family, before anyone knows how the hearing technology will go. Language in now costs nothing and cannot be taken back.',
        'Get their eyes before you speak or sign, every single time. Tap, wave, or come into their view.',
        'Talk and sign about everything you are doing while you do it. The narration is the language.',
        'Keep the aids in with caps, clips and tape, and accept that the first weeks are a battle everybody has.',
        'Find Deaf adults and other families now. Families who do this in the first year describe it as the thing that made the rest feel possible.',
      ],
    },
    early: {
      looksLike: [
        'Language that is coming along beautifully in the language they have most access to, and thin in the other one.',
        'Watching your face constantly, and missing anything said while their eyes are elsewhere.',
        'Doing well at home and lost in a daycare room with 15 other children.',
        'Frustration and hitting, which at this age is almost always about not being able to say it.',
        'Being the one who did not hear the instruction and then getting told off for it.',
      ],
      whatHelps: [
        'Keep the family signing ahead of the child. A house where only the child signs is a house where the child is still alone.',
        'Ask daycare to get attention first, face them, and cut the background noise, and put it in writing rather than saying it at pickup.',
        'Fill in what they missed out loud. Who came, what the noise was, why everyone laughed.',
        'Ask them to tell you the plan back instead of asking whether they understood. Nodding is a habit, not an answer.',
        'Caption everything they watch. It is free and it builds reading.',
      ],
    },
    primary: {
      looksLike: [
        'Coping in a quiet room and drowning in a classroom, a hall, or a playground.',
        'Coming home wiped out, and the meltdown landing on you rather than on school.',
        'Reading that needs more deliberate teaching, since a lot of reading is built on sounds they access differently.',
        'Friendship groups that are harder to break into, since group talk moves fast and overlaps.',
        'Saying they are fine, because being the one who needs things repeated gets old.',
      ],
      whatHelps: [
        'Get the formal school support in writing, including a remote microphone system, a seat with sightlines, and captions on anything shown.',
        'Ask for a teacher of the deaf. Many families are never told the role exists.',
        'Protect a quiet stretch after school before you ask anything of them.',
        'Teach them to advocate in actual words. Not "pardon" but "say that again, I missed the middle".',
        'Arrange 1 to 1 time with friends, since 2 people in a quiet room is a completely different game from six at a table.',
        'Keep them around other deaf children. Being the only one is its own weight.',
      ],
    },
    middle: {
      looksLike: [
        'Refusing the aids, the implant, or the microphone, because being visibly different is unbearable at this age.',
        'Real questions about identity, about whether they are Deaf or hard of hearing or neither.',
        'Exhaustion that looks like laziness.',
        'Missing the social layer, the asides and the group chat energy that happens in overlapping talk.',
        'Anger at you specifically, which is common and is usually not actually about you.',
      ],
      whatHelps: [
        'Do not force the technology. Talk about what it is for and let them make some real choices, since a device that gets left in a bag helps nobody.',
        'Deaf mentors and Deaf teenagers matter more now than at any other age.',
        'Back their own advocacy at school rather than doing it for them, and stay available for the parts that are too big.',
        'Take the fatigue seriously in the timetable, not just in sympathy.',
        'Let identity be theirs to work out. It may not be where you would have put it.',
      ],
    },
    teen: {
      looksLike: [
        'A clear view of what they need and no patience for people who will not do it.',
        'Decisions about college, interpreters, captioning and disclosure coming up fast.',
        'Real thinking about where they belong, in Deaf spaces, hearing spaces, or both.',
        'Worry about work, driving, and independence, some of it inherited from you.',
      ],
      whatHelps: [
        'Teach them the legal ground. What accommodations they can require, and how to ask in writing.',
        'Make sure they can run their own audiology and technology appointments before they leave.',
        'Talk about disclosure honestly, since when and whether to tell an employer is theirs to decide.',
        'Deaf adults doing the job they want are worth more than any amount of reassurance from you.',
      ],
    },
  },

  blindLowVision: {
    baby: {
      looksLike: [
        'Eyes that do not follow a face, or that still wander past about 4 months.',
        'A white or washed out reflection in photographs instead of red eye, which is worth a same week call.',
        'Smiling to your voice rather than to your face.',
        'Rolling, sitting and crawling arriving later, since there is nothing visible to move toward.',
        'Going still and quiet to listen, which is easy to read as not interested.',
        'Hands that do not come together at the middle, or that avoid touching new textures.',
      ],
      whatHelps: [
        'Any vision concern goes to pediatric ophthalmology rather than to a wait and see, and a white reflection in a photo goes today.',
        'Narrate constantly. What you are doing, what you are about to do to them, and who just walked in.',
        'Say their name before you touch them or lift them, so nothing arrives out of nowhere.',
        'Put things in their hands rather than holding them up, and let them explore before you name it.',
        'Give them reasons to move. Sound toys just out of reach, and a lot of floor time and tummy time.',
        'Get early intervention and ask specifically for a teacher of students with visual impairments.',
      ],
    },
    early: {
      looksLike: [
        'Language that is strong, sometimes with whole phrases copied before the meaning fills in.',
        'Self care steps not arriving on their own, since dressing and spoons are normally copied.',
        'Rocking, eye pressing or hand flapping, especially when there is nothing going on.',
        'Real confidence in rooms they know and hesitance in rooms they do not.',
        'Playing alongside other children rather than with them, because they cannot see what the game is.',
      ],
      whatHelps: [
        'Teach self care explicitly, in order, hand under hand, and expect to teach it more times than feels reasonable.',
        'Keep the house where it lives, and say out loud when something moves.',
        'Offer real movement and real texture before trying to stop the rocking, and get eye pressing looked at since it can damage the eye.',
        'Tell them who is in the room and what the game is, and give them a job in it.',
        'Start orientation and mobility now. A cane at three is a tool for exploring, not a last resort.',
        'Use high contrast and good light for low vision. A dark plate under light food does more than it sounds like it should.',
      ],
    },
    primary: {
      looksLike: [
        'Braille or large print and the gap in speed between them and the class, which is real and closes with practice.',
        'Being helped far too much by adults who mean well, and losing the chance to learn it.',
        'Playground and PE being the hardest parts of the day, not the lessons.',
        'Gaps in things nobody taught anyone, like what a cloud looks like or how a shop is laid out.',
        'Tiredness, since listening and touching all day is more work than glancing.',
      ],
      whatHelps: [
        'Get materials in their format before the lesson, not during it, and put that in the school plan in writing.',
        'Ask adults to stop doing it for them. Hands off is how independence gets built.',
        'Keep orientation and mobility going, including routes around school they walk without an adult.',
        'Fill in the accidental knowledge on purpose. Go to the farm, the building site, the fish counter, and let them touch things.',
        'Teach the technology early. Screen readers and magnification are literacy now.',
        'Find blind children and blind adults, so the only blind person they know is not themselves.',
      ],
    },
    middle: {
      looksLike: [
        'Resisting the cane or the equipment, because visible difference is unbearable at this age.',
        'Social life moving to screens and group chats that may or may not be accessible.',
        'Wanting to go places alone and both of you being frightened of it.',
        'Real questions about the future, driving, and what work looks like.',
      ],
      whatHelps: [
        'Do not fight the cane head on. Talk about what it buys them, which is going places without you.',
        'Hand over real independence in pieces, with a plan and a phone, and let the first ones be short.',
        'Make sure their devices and their school platforms actually work with a screen reader, and complain loudly when they do not.',
        'Blind teenagers and blind adults, again. It is the single thing that changes what they think is possible.',
        'Let them own their own accommodations at school, with you as backup rather than as the voice.',
      ],
    },
    teen: {
      looksLike: [
        'Knowing exactly what they need and being tired of explaining it.',
        'College, work, travel and disclosure decisions arriving at once.',
        'Grief about driving, which is real and worth saying out loud.',
        'Wanting to live alone, and the whole family quietly not believing it yet.',
      ],
      whatHelps: [
        'Start transition planning by 14. Travel training, work experience, and the technology they will use at work.',
        'Teach them the law, what they can require, and how to ask for it in writing.',
        'Sort the practical independence now, cooking, laundry, money, public transport, while you are still there to catch it.',
        'Talk about driving honestly rather than around it, including what the alternatives actually cost and how people manage.',
        'Assume competence and adjust down only where you must, never the reverse.',
      ],
    },
  },

  emotionalRegulation: {
    baby: {
      looksLike: [
        'Going from fine to inconsolable with almost nothing in between.',
        'Taking a long time to come down once upset.',
        'Being very hard to settle by anyone other than one person.',
      ],
      whatHelps: [
        'Regulate yourself first. They borrow your nervous system before they have their own.',
        'Movement, pressure, and low light, in that order, before talking.',
        'Expect it to take longer than it takes other babies. That is the difference itself.',
      ],
    },
    early: {
      looksLike: [
        'Tantrums that are bigger and longer than other children the same age.',
        'Hitting, biting, or throwing when overwhelmed.',
        'No warning, so the first sign is the peak.',
        'Coming down slowly and needing you close afterward.',
      ],
      whatHelps: [
        'Do not teach during the meltdown. Nothing goes in. Teach afterward, briefly.',
        'Stay calm and near, and say very little.',
        'Name the feeling afterward, so they get words for next time.',
        'Look for the pattern in what came before. It is often hunger, tiredness, or a transition.',
      ],
    },
    primary: {
      looksLike: [
        'Holding it together at school and exploding at home.',
        'Going from nought to furious over something small, then feeling terrible about it.',
        'Shutting down and refusing to speak rather than exploding.',
        'Struggling to lose a game, or to be wrong in front of people.',
      ],
      whatHelps: [
        'Treat the after school explosion as evidence of effort, not of bad behavior.',
        'Build a calm down plan together when everyone is calm, and make it visible.',
        'Repair afterward, every time. The repair is what teaches, not the consequence.',
        'Separate the feeling from the behavior out loud. Being furious is fine, hitting is not.',
      ],
    },
    middle: {
      looksLike: [
        'Moods that swing hard and fast, on top of ordinary teenage change.',
        'Slamming doors, then genuine remorse, then the same thing tomorrow.',
        'Taking small social things very hard.',
        'Self criticism after losing control that is far harsher than anything you would say.',
      ],
      whatHelps: [
        'Do not match their volume. Lower yours instead.',
        'Come back to it later, when both of you can think.',
        'Teach them what is happening in their body, so it is information rather than failure.',
        'If it is affecting friendships or school, ask for help. This responds well to therapy.',
      ],
    },
    teen: {
      looksLike: [
        'Intensity in relationships, including fast closeness and fast ruptures.',
        'Risky decisions made inside a feeling rather than outside it.',
        'Understanding the pattern and still being inside it.',
      ],
      whatHelps: [
        'Stay available without demanding the conversation happen now.',
        'Be specific about safety without treating every strong feeling as a crisis.',
        'Get professional support if it is affecting safety, school, or relationships.',
        'Keep repairing. It still works at this age, and it still matters.',
      ],
    },
  },

  selectiveMutism: {
    early: {
      looksLike: [
        'Talking freely at home and not one word at preschool, for weeks or months.',
        'Freezing, going still, or hiding behind you when spoken to by anyone outside the family.',
        'Being described as shy by people who have never heard them talk.',
        'Playing happily with other children while still not speaking.',
      ],
      whatHelps: [
        'Never ask them to say hello or to answer. Pressure is the thing keeping it locked.',
        'Answer for them once, matter of factly, and move the conversation on.',
        'Get one familiar adult into a comfortable setting with them, and build out from there.',
        'Ask for help early. This responds well to treatment and it does not usually pass on its own.',
      ],
      note:
        'This is anxiety, not stubbornness and not choosing. They are not refusing to speak, ' +
        'the words genuinely will not come out.',
    },
    primary: {
      looksLike: [
        'Speaking to one or 2 children and to no adults at school.',
        'Not being able to ask for the toilet, for help, or to say they feel ill.',
        'Falling behind in anything assessed by speaking.',
        'Being relaxed and loud at home, which makes teachers doubt it is real.',
      ],
      whatHelps: [
        'Get a plan in writing with school, including how they ask for the toilet without speaking.',
        'Use sliding in, where a trusted person joins a game they are already talking during.',
        'Let them communicate by writing, pointing, or recording, rather than waiting for speech.',
        'Push for referral. The longer it is in place, the more habit it builds.',
      ],
    },
    middle: {
      looksLike: [
        'A long established pattern that everyone at school has stopped questioning.',
        'Social anxiety on top, which by now may be the bigger problem.',
        'Real distress about presentations, group work, and being called on.',
      ],
      whatHelps: [
        'Treat it as anxiety and get proper treatment, not more accommodation alone.',
        'Involve them in the plan. At this age it cannot be done to them.',
        'Make a small, specific, chosen goal rather than a general aim to talk more.',
      ],
    },
  },

  auditoryProcessing: {
    early: {
      looksLike: [
        'Saying what a lot, with hearing that tested fine.',
        'Following one instruction and losing the second.',
        'Struggling more in a noisy room than a quiet one, noticeably so.',
        'Watching your face very closely while you speak.',
      ],
      whatHelps: [
        'Get hearing checked properly first, including for glue ear, which comes and goes.',
        'Get their attention before you speak, not while you are speaking.',
        'One instruction at a time, and let them repeat it back.',
        'Turn off background noise during conversation. The television costs more than it seems to.',
      ],
    },
    primary: {
      looksLike: [
        'Missing parts of what the teacher said and filling in the gaps wrongly.',
        'Being exhausted by the end of the school day from the effort of listening.',
        'Looking inattentive, which gets read as ADHD or as not listening.',
        'Doing well 1 to 1 and much worse in a group.',
        'Spelling and phonics being harder, because they rest on hearing small sound differences.',
      ],
      whatHelps: [
        'Ask school for instructions in writing as well as spoken, as standard.',
        'Seating near the front and away from fans, corridors, and windows.',
        'Teach them to say I did not catch that, without embarrassment, and make sure adults respond well.',
        'Pause between sentences. Processing takes time and the next sentence arrives too fast.',
        'Ask about an audiology assessment specifically for processing, not just for hearing level.',
      ],
    },
    middle: {
      looksLike: [
        'Lectures and group discussion being much harder than reading.',
        'Losing the thread in fast social conversation and going quiet.',
        'Video calls and noisy canteens being disproportionately difficult.',
      ],
      whatHelps: [
        'Recorded lessons, slides in advance, or notes shared, all of which are reasonable to ask for.',
        'Captions on everything, because reading along fills the gaps.',
        'Help them explain it once, clearly, to teachers and friends.',
      ],
    },
  },

  motor: {
    baby: {
      looksLike: [
        'Rolling, sitting, or walking arriving later than expected.',
        'Floppiness or stiffness that you notice when handling them.',
        'Preferring one side strongly before their first birthday, which is worth asking about.',
        'Struggling with the mechanics of feeding.',
      ],
      whatHelps: [
        'Ask early. Physical and occupational therapy work best when they start young.',
        'Lots of floor time in different positions rather than time in seats and bouncers.',
        'Practice the step just below the one they are stuck on, not the one you are waiting for.',
      ],
    },
    early: {
      looksLike: [
        'Falling more than other children, and bumping into things.',
        'Struggling with buttons, zips, cutlery, and scissors.',
        'Avoiding climbing frames and ride on toys.',
        'Getting dressed taking a very long time and ending in tears.',
        'Drawing and mark making being avoided entirely.',
      ],
      whatHelps: [
        'Break dressing into steps and let them do the last step, then the last two.',
        'Buy clothes that remove the problem, such as elastic waists and velcro.',
        'Build hand strength through play, such as dough, pegs, tearing paper, and spray bottles.',
        'Practice climbing and balancing somewhere soft and unhurried.',
        'Ask for an occupational therapy referral if daily tasks are affected.',
      ],
    },
    primary: {
      looksLike: [
        'Handwriting that is slow, painful, or unreadable, holding back work that is otherwise good.',
        'PE being the worst part of the week, and excuses to avoid it.',
        'Being picked last, and knowing it.',
        'Bags, shoelaces, and ties being a daily problem.',
        'Tiring quickly at tasks other children do without thinking.',
      ],
      whatHelps: [
        'Separate handwriting from thinking. Let them type or dictate for content work.',
        'Ask for extra time and for a laptop, in writing, rather than hoping.',
        'Find a physical activity without a team, such as swimming, climbing, or cycling.',
        'Solve the shoelaces problem rather than winning it. Buy the ones that do not need tying.',
        'Say out loud that this is coordination, not effort, because everyone else has implied otherwise.',
      ],
    },
    middle: {
      looksLike: [
        'Exams with long writing tasks becoming a real barrier.',
        'Avoiding sport entirely, and the fitness and friendship cost that comes with that.',
        'Practical subjects, such as science labs and food tech, being harder than expected.',
      ],
      whatHelps: [
        'Get exam access arrangements agreed early, in writing.',
        'Keep some physical activity in the week, chosen by them.',
        'Teach the specific practical skills separately, out of the pressure of the lesson.',
      ],
    },
    teen: {
      looksLike: [
        'Driving taking longer to learn, and needing more practice than peers.',
        'Self consciousness about coordination in social settings.',
        'Real competence in areas that do not need it, which is most areas.',
      ],
      whatHelps: [
        'Expect more driving lessons and say so up front, so it is not read as failure.',
        'Help them pick work and study that plays to what they are good at.',
        'Keep the practical life skills going, such as cooking, one skill at a time.',
      ],
    },
  },

  tics: {
    early: {
      looksLike: [
        'Blinking, sniffing, throat clearing, or head jerking that comes and goes.',
        'Tics that change over weeks, so one disappears and another arrives.',
        'More tics when tired, excited, or anxious.',
      ],
      whatHelps: [
        'Do not mention them. Every comment makes them more frequent, even a kind one.',
        'Tell other adults not to comment either, including grandparents.',
        'Most tics at this age fade. Watching quietly is usually the right plan.',
      ],
      note:
        'Simple tics are common in young children and often pass within a year. ' +
        'Waiting is a real option and not neglect.',
    },
    primary: {
      looksLike: [
        'Tics becoming noticeable to other children, and questions or teasing starting.',
        'Holding tics in all day at school and releasing them the moment they get home.',
        'A build up feeling before the tic that they can describe if you ask.',
        'Vocal tics appearing alongside motor ones.',
        'Tics being worse during stressful weeks and better over school breaks.',
      ],
      whatHelps: [
        'Explain tics to the class, with their permission, because unexplained is worse than explained.',
        'Give them somewhere at school they can let the tics out without an audience.',
        'Do not ask them to stop. Suppressing works briefly and costs a lot.',
        'Ask about comprehensive behavioral intervention for tics if they want help managing them.',
        'Check for ADHD and OCD, which travel with tics far more often than chance.',
      ],
    },
    middle: {
      looksLike: [
        'Peak severity, which for many people is somewhere between 10 and 14.',
        'Real social self consciousness, and avoiding quiet places such as libraries and exams.',
        'Exhaustion from suppressing all day.',
        'Occasionally tics that hurt, or that are socially difficult to explain.',
      ],
      whatHelps: [
        'Tell them plainly that this is usually the worst it gets and it often eases after this.',
        'Get exam arrangements, such as a separate room, before they have to ask under pressure.',
        'Let them lead on who knows and how it is described.',
        'Treat the anxiety, because anxiety and tics feed each other directly.',
      ],
    },
    teen: {
      looksLike: [
        'Tics easing for many people through the later teens, though not for everyone.',
        'Questions about driving, work, and disclosure.',
        'Managing it themselves, mostly, with occasional hard weeks.',
      ],
      whatHelps: [
        'Be honest that it eases for most and not for all, rather than promising.',
        'Help them script a one line explanation for work and new people.',
        'Keep sleep and stress in view, since both move tics more than anything else.',
      ],
    },
  },

  bigChanges: {
    baby: {
      looksLike: [
        'Sleep and feeding going backwards, sometimes weeks after the event.',
        'Needing far more holding than before.',
        'Being unsettled by people they were fine with last month.',
      ],
      whatHelps: [
        'Keep the small routines identical even when everything large has changed.',
        'Expect regression and do not try to correct it. It is the response, not a new problem.',
        'Look after your own regulation, because they are running on yours.',
      ],
    },
    early: {
      looksLike: [
        'Regression in toileting, sleep, or speech.',
        'Playing the event out over and over, which is how they process it.',
        'Asking the same question about it repeatedly.',
        'Clinginess, or the reverse, which is not needing you at all in a way that is new.',
        'Big feelings about small things, because the large thing is too big to hold.',
      ],
      whatHelps: [
        'Answer the repeated question the same way each time. The repetition is the work.',
        'Let the play happen, including the parts that are hard to watch.',
        'Use simple concrete words, including the real ones. Died is clearer than lost.',
        'Keep the parts of the routine you can, and say out loud which parts are staying the same.',
      ],
    },
    primary: {
      looksLike: [
        'Trouble at school appearing before anyone connects it to what happened at home.',
        'Worrying about you, and hiding their own feelings to protect you.',
        'Tummy aches and headaches with no cause found.',
        'Anger arriving where sadness was expected.',
        'Doing fine for months and then falling apart at an anniversary or a trigger.',
      ],
      whatHelps: [
        'Tell school what has happened, even if it feels private. They cannot help without knowing.',
        'Say out loud that it is not their job to look after you.',
        'Let anger be a grief response rather than treating it as behavior.',
        'Expect it to resurface later, and treat that as normal rather than as going backwards.',
      ],
    },
    middle: {
      looksLike: [
        'Withdrawing into their room and their phone.',
        'Refusing to talk to you about it while talking to friends.',
        'Risk taking, or a sudden change in who they spend time with.',
        'School work dropping noticeably.',
      ],
      whatHelps: [
        'Stay present without requiring conversation. Be in the room, doing something else.',
        'Offer someone outside the family to talk to, and accept it may not be you.',
        'Keep the boundaries steady. Loosening everything makes it less safe, not more.',
        'Name the change out loud yourself, so they know it is allowed to be discussed.',
      ],
    },
    teen: {
      looksLike: [
        'Taking on adult responsibility, quietly, and not saying it is too much.',
        'Anger at the unfairness of it, sometimes aimed at you.',
        'Making big decisions, such as about study or leaving, inside the middle of it.',
      ],
      whatHelps: [
        'Say clearly which responsibilities are not theirs.',
        'Let the anger exist without needing it to be fair.',
        'Slow down irreversible decisions where you can, kindly and without forbidding.',
        'Get them their own support. They need somewhere that is not managing your feelings too.',
      ],
    },
  },

  prematurity: {
    baby: {
      looksLike: [
        '2 ages, and milestones tracking the corrected one rather than the birthday.',
        'Feeding taking longer, tiring faster, and needing more breaks.',
        'Being easily overstimulated by light, noise, and handling.',
        'Follow up appointments, including eyes, hearing, and development checks.',
        'Catch up growth that happens unevenly rather than steadily.',
      ],
      whatHelps: [
        'Use corrected age for milestones until 2 years. That is what the guidance says, and it matters.',
        'Skin to skin, dim light, and quiet handling, for much longer than with a term baby.',
        'Keep every follow up appointment, because early support is the whole advantage.',
        'Tell people the corrected age when they comment, or do not, whichever costs you less.',
      ],
    },
    early: {
      looksLike: [
        'Most children having caught up by two, and some still catching up.',
        'Speech or motor skills lagging slightly while everything else is on track.',
        'Higher chance of needing extra help, without that being a certainty.',
      ],
      whatHelps: [
        'Stop correcting at two, which is when the guidance says to, and use real age from then.',
        'Raise anything still lagging rather than assuming it is prematurity and will resolve.',
        'Ask for a developmental review before school starts if anything is uneven.',
      ],
    },
    primary: {
      looksLike: [
        'Most differences gone by now for most children born early.',
        'For some, attention, working memory, or math being harder than everything else.',
        'Being small for their year, which can carry a social cost.',
      ],
      whatHelps: [
        'Mention the prematurity to school. It is relevant background even years later.',
        'Assess anything uneven properly rather than attributing it to a birth years ago.',
        'Watch the social side of being smaller, which is often the part that matters most to them.',
      ],
    },
  },

  medicalComplexity: {
    baby: {
      looksLike: [
        'A calendar built around appointments, and a household built around equipment.',
        'Development happening around medical events rather than in a straight line.',
        'Losing skills during an illness or admission and regaining them afterward.',
        'Caregiver exhaustion that nobody is asking about.',
      ],
      whatHelps: [
        'Keep one folder, physical or digital, with everything in it. You will be asked the same questions repeatedly.',
        'Ask for a care coordinator if there is one. Chasing specialists should not be your job.',
        'Play still matters and still counts, in hospital and at home, in 5 minute pieces.',
        'Accept help with specific tasks, since general offers are hard to use.',
      ],
    },
    early: {
      looksLike: [
        'Missing preschool often, and the friendships that come with it.',
        'Being handled by adults constantly, which makes bodily autonomy harder to build.',
        'Fear of medical settings building up.',
        'Siblings feeling the shape of it.',
      ],
      whatHelps: [
        'Give real choices wherever the medicine allows, so something is theirs.',
        'Ask for play specialists, who make a genuine difference to procedure fear.',
        'Keep one social thing going even when attendance is patchy.',
        'Build in something for siblings that is only theirs.',
      ],
    },
    primary: {
      looksLike: [
        'Attendance affecting learning, and learning gaps affecting confidence.',
        'Knowing far more about their own condition than their classmates know about anything.',
        'Being treated as fragile, sometimes by adults who mean well.',
        'Wanting to be ordinary, badly.',
      ],
      whatHelps: [
        'Get an education plan that assumes absence rather than treating each one as an exception.',
        'Let them start explaining their own condition, in their own words.',
        'Push for inclusion in everything that is safe, and be specific about what is not.',
        'Ask what they want people to know and what they want kept private.',
      ],
    },
    middle: {
      looksLike: [
        'Wanting privacy about their body at exactly the age care is still hands on.',
        'Not taking medication, or not saying symptoms, in order to be normal for a while.',
        'Real awareness of how their life differs from their friends.',
      ],
      whatHelps: [
        'Hand over parts of their own care deliberately, with a plan and a safety net.',
        'Talk about missed doses without alarm, because alarm makes the next one more hidden.',
        'Ask for their voice in appointments, and ask the clinician to speak to them, not over them.',
      ],
    },
    teen: {
      looksLike: [
        'Transition to adult services, which is often abrupt and badly supported.',
        'Decisions about study, work, and living, with medical constraints in the mix.',
        'Having managed this their whole life and being tired of it.',
      ],
      whatHelps: [
        'Start transition planning at 14. It takes longer than anyone tells you.',
        'Make sure they can list their own conditions, medications, and allergies from memory.',
        'Talk about the future as a plan with adjustments, not as a smaller version of everyone elses.',
        'Get them their own mental health support. Living with this is heavy and rarely asked about.',
      ],
    },
  },

  exploring: {
    baby: {
      looksLike: [
        'A feeling that something is different, without being able to say what.',
        'Comparing to other babies and not being sure whether the difference matters.',
        'Being told to wait and see, and not feeling settled by it.',
      ],
      whatHelps: [
        'Write down what you notice, with dates. Patterns are much clearer on paper.',
        'Take video. 2 minutes of ordinary play tells a clinician more than a paragraph.',
        'Ask anyway. You are allowed to ask without being sure, and early is better than certain.',
      ],
    },
    early: {
      looksLike: [
        'One or 2 things that keep coming back, while everything else is fine.',
        'Different answers from different people, including family members.',
        'Preschool seeing something you do not see, or the reverse.',
      ],
      whatHelps: [
        'Ask preschool to write down what they see, with examples and dates.',
        'Bring your notes to the appointment. Memory is unreliable in a 10 minute slot.',
        'Try the strategies before the label. Most of them help regardless of the answer.',
      ],
    },
    primary: {
      looksLike: [
        'School raising something, or you raising it and being told it is fine.',
        'A gap between what they can do and what they do do, that nobody can explain.',
        'Years of small things that only make a pattern when you line them up.',
      ],
      whatHelps: [
        'Put the request for assessment in writing. Verbal requests disappear.',
        'Ask what would need to be true for an assessment to happen, and write the answer down.',
        'Keep using the strategies. A label changes the paperwork, not what helps today.',
        'Trust the pattern you have seen for years over a 20 minute observation.',
      ],
    },
    middle: {
      looksLike: [
        'Your child asking their own questions about why things are harder for them.',
        'Late recognition, which is very common, especially for girls and for quiet children.',
        'Anxiety or low mood arriving before anyone names the thing underneath it.',
      ],
      whatHelps: [
        'Include them in the wondering. At this age it has to be with them, not about them.',
        'Assessment is still worth it. Later is not too late, and understanding helps at any age.',
        'Treat the anxiety now rather than waiting for the bigger answer.',
      ],
    },
    teen: {
      looksLike: [
        'Recognizing themselves in something they read, and asking you about it.',
        'Wanting an answer for practical reasons, such as exam support or work.',
        'Or deciding they do not want a label at all, which is theirs to decide.',
      ],
      whatHelps: [
        'Take their self recognition seriously. It is often accurate.',
        'Explain what a diagnosis does and does not get them, practically.',
        'Support whichever way they go, including not pursuing it.',
      ],
    },
  },

  communication: {
    baby: {
      looksLike: [
        'Not pointing, showing, or bringing you things by around 15 months.',
        'Very few sounds, or sounds that do not seem aimed at anyone.',
        'Frustration arriving fast, because there is no other way to say it.',
        'Understanding you clearly while giving almost nothing back.',
      ],
      whatHelps: [
        'Add channels now. Signs, pointing, and pictures all reduce the pressure on speech.',
        'Respond to every attempt as though it were a word, including grabs and sounds.',
        'Pause and look expectant after you speak, for longer than feels natural.',
        'Refer for speech therapy. In most places you do not need a doctor to agree first.',
      ],
    },
    early: {
      looksLike: [
        'Hitting, biting, or screaming when not understood, which is the message arriving another way.',
        'Using single words or scripts from shows to carry whole meanings.',
        'Being understood by you and by nobody else.',
        'Giving up on trying to tell you, which is easy to mistake for contentment.',
      ],
      whatHelps: [
        'Treat the behavior as the message and answer the message, then teach the word for it later.',
        'Ask about AAC, which is any tool that adds a way to communicate. It supports speech and does not replace it.',
        'Keep a small set of core words and use them constantly, everywhere.',
        'Say their meaning back in a full sentence, without asking them to repeat it.',
      ],
    },
    primary: {
      looksLike: [
        'Being talked about in the third person by adults standing right next to them.',
        'Frustration turning inward, into giving up rather than fighting.',
        'Understanding the lesson and being unable to show it in the way it is assessed.',
        'Friendships that need an adult to open the door.',
      ],
      whatHelps: [
        'Speak to them directly, always, at their real level of understanding.',
        'Make sure their communication tool goes everywhere, including the playground and home.',
        'Ask school how they will assess understanding without requiring speech.',
        'Build in ways for them to say no, to protest, and to choose, not only to request.',
      ],
    },
    middle: {
      looksLike: [
        'Wanting to communicate about much more complicated things than the vocabulary allows.',
        'Frustration at being treated as younger than they are.',
        'Needing privacy in conversation, which is hard when communication is mediated.',
      ],
      whatHelps: [
        'Update the vocabulary on their tool to match their age, including slang and blunt language.',
        'Make sure they can communicate without an adult present.',
        'Ask them what they want to be able to say, rather than deciding for them.',
      ],
    },
    teen: {
      looksLike: [
        'A clear identity and opinions that need a way out.',
        'Decisions about their own life being made in rooms where they cannot speak fast enough.',
        'Assumptions about their ability based on their speech.',
      ],
      whatHelps: [
        'Insist they are in the room and given the time, in every meeting about them.',
        'Teach self advocacy phrases explicitly, ready to go.',
        'Assume competence and build from there. The cost of getting that wrong runs one way only.',
      ],
    },
  },
};

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

/** The band an age in months falls into, or null if the age is unknown. */
export function getLensBandForAge(ageMonths) {
  if (typeof ageMonths !== 'number' || !isFinite(ageMonths) || ageMonths < 0) return null;
  return (
    LENS_AGE_BANDS.find((b) => ageMonths >= b.minMonths && ageMonths < b.maxMonths) ||
    LENS_AGE_BANDS[LENS_AGE_BANDS.length - 1]
  );
}

/** The band object for a band id, or null. */
export function getLensBandById(bandId) {
  if (!bandId) return null;
  return LENS_AGE_BANDS.find((b) => b.id === bandId) || null;
}

/**
 * The age specific view of one lens.
 *
 * Returns { band, looksLike, whatHelps, note } or null when this lens
 * has no age content yet, in which case the caller should fall back to
 * the general understanding rather than showing an empty section.
 */
export function getLensAgeView(lensId, ageMonths, bandIdOverride) {
  const byAge = LENS_BY_AGE[lensId];
  if (!byAge) return null;
  const band = bandIdOverride ? getLensBandById(bandIdOverride) : getLensBandForAge(ageMonths);
  if (!band) return null;
  const entry = byAge[band.id];
  if (!entry) return null;
  return {
    band,
    looksLike: entry.looksLike || [],
    whatHelps: entry.whatHelps || [],
    note: entry.note || null,
  };
}

/** Which bands this lens actually has content for, in order. */
export function getLensBandsWithContent(lensId) {
  const byAge = LENS_BY_AGE[lensId];
  if (!byAge) return [];
  return LENS_AGE_BANDS.filter((b) => byAge[b.id]);
}

/**
 * What tends to help at this age, merged across several lenses, with
 * duplicates removed and each line tagged with the lens it came from.
 * Used on the overview screen so a parent with three lenses on does not
 * have to open all three to find today's list.
 */
export function getMergedAgeHelps(lensIds, ageMonths, labelFor) {
  if (!Array.isArray(lensIds)) return [];
  const seen = new Set();
  const out = [];
  lensIds.forEach((id) => {
    const view = getLensAgeView(id, ageMonths);
    if (!view) return;
    view.whatHelps.forEach((line) => {
      const key = line.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      out.push({ line, lensId: id, lensLabel: labelFor ? labelFor(id) : id, band: view.band });
    });
  });
  return out;
}

/** True if any of these lenses has age specific content. */
export function anyLensHasAgeContent(lensIds) {
  if (!Array.isArray(lensIds)) return false;
  return lensIds.some((id) => !!LENS_BY_AGE[id]);
}

export default LENS_BY_AGE;

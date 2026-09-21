/**
 * Ready Set Grow: Development Content
 * ------------------------------------------------------------------
 * This is the differentiator. Everything else in the app is a container
 * for this.
 *
 * The product question is not "what is my child doing". It is:
 *   "What is happening with my child, and what do I actually do about it
 *    at 6:45 PM when they are screaming because they wanted the blue cup."
 *
 * Every entry therefore has to survive a simple test. If a tired parent
 * reads it standing in a hallway, does it give them something to do in
 * the next sixty seconds. Explanations alone do not pass. "That is
 * normal" alone definitely does not pass.
 *
 * THE SHAPE OF AN ENTRY
 *   whatYouMayNotice   the behavior, in the words a parent would use
 *   whyItHappens       the developmental reason, in plain English
 *   whatIsTypical      the reassurance, honest and specific
 *   parentStrategies   things to try, concrete enough to do tonight
 *   scripts            actual words to say out loud
 *   forYou             the parent's own regulation, because it matters
 *   worthMentioning    when to bring it up with a pediatrician
 *
 * RULES FOR WRITING NEW ENTRIES
 *   Never diagnose. "Some children" and "one possibility is", never
 *   "your child has".
 *   Never promise a timeline. Ranges, not deadlines.
 *   Never imply the parent caused it, and never imply they can fix it
 *   in one evening.
 *   worthMentioning is not a scare list. It is the honest answer to
 *   "when should I stop wondering and just ask someone".
 *
 * All content is educational. It does not replace a pediatrician, a
 * therapist, or any other professional who knows the actual child.
 */

export const CONTENT_CATEGORIES = [
  { id: 'sleep', label: 'Sleep', description: 'Nights, naps, and the changes that come with development.' },
  { id: 'emotional-regulation', label: 'Emotional Regulation', description: 'Big feelings and learning to manage them.' },
  { id: 'behavior', label: 'Behavior', description: 'What behavior is communicating, and what to do about it.' },
  { id: 'feeding', label: 'Feeding', description: 'Eating, appetite, and mealtimes.' },
  { id: 'social', label: 'Social', description: 'Friendships, sharing, and playing with others.' },
  { id: 'independence', label: 'Independence', description: 'Doing it themselves, and everything that comes with it.' },
  { id: 'separation', label: 'Separation', description: 'Being apart, drop offs, and clinginess.' },
  { id: 'transitions', label: 'Transitions', description: 'Stopping one thing and starting another.' },
];

export const CONTENT_DISCLAIMER =
  'Ready Set Grow offers educational information, not medical advice. It cannot examine your child ' +
  'and it does not replace your pediatrician. If something feels wrong, trust that instinct and ask.';

export const DEVELOPMENT_CONTENT = [
  /* ---------------------------------------------------------------- */
  {
    id: 'sleep-4-month-change',
    title: 'Sleep Falls Apart Around 4 Months',
    category: 'sleep',
    minMonths: 3,
    maxMonths: 7,
    ageRange: '3 to 6 months',
    summary:
      'A baby who was sleeping in long stretches suddenly wakes every hour or two. This one is not ' +
      'a setback. It is a permanent change in how their brain sleeps.',
    whatYouMayNotice: [
      'A baby who slept in long stretches now wakes every 1 to 2 hours.',
      'Naps get shorter, sometimes only one sleep cycle long.',
      'They wake fully rather than stirring and settling.',
      'What used to get them back down stops working.',
      'It seems to arrive out of nowhere, often alongside rolling or new alertness.',
    ],
    whyItHappens: [
      'Newborn sleep is only 2 states. Around this age it reorganizes into cycles with lighter stages, much closer to adult sleep.',
      'Lighter stages mean more chances to surface fully, and at this age they cannot yet bridge back into the next cycle alone.',
      'This is a permanent change in sleep architecture, which is why it is not really a regression. Their sleep grew up.',
      'New motor skills such as rolling often land at the same time, and babies practice new skills at night.',
      'More awareness of the world also means more awareness that you left the room.',
    ],
    whatIsTypical:
      'Very common in this window, and the disruption usually eases over a few weeks as they learn ' +
      'to link cycles. Sleep does not go back to how it was, it moves forward into something new.',
    parentStrategies: [
      'Watch wake windows rather than the clock. Overtired babies wake more, not less.',
      'Give plenty of daytime practice for whatever new skill they are working on, so they rehearse it less at 2 AM.',
      'Keep the last 20 minutes before sleep the same every night. Predictability does more here than any single technique.',
      'Give a minute before going in. Some wakings resolve on their own, and some do not, and you will not know which without waiting.',
      'Dark room, white noise if it helps, and a cool temperature all reduce the number of things that can wake them.',
      'Trade nights with a partner if you have one. This phase is survived, not solved.',
    ],
    scripts: [
      { situation: 'To yourself at 3 AM', say: 'This is his brain growing, not something I broke.', why: 'Reframing the wake as development makes it easier to stay calm, and calm is the thing that actually helps him settle.' },
      { situation: 'To someone offering advice you did not ask for', say: 'We are riding this one out for now, thanks.', why: 'A short closed answer ends the conversation without a debate.' },
    ],
    forYou: [
      'Sleep deprivation is a physical injury, not a character flaw. Lower every other standard while this lasts.',
      'Split the night into shifts if there is another adult, so at least one of you gets one unbroken stretch.',
      'If you feel unsafe driving or holding the baby, that is the moment to call in help, not to push through.',
    ],
    worthMentioning: [
      'Your baby seems to be in pain rather than just awake.',
      'Breathing sounds noisy, strained, or pauses during sleep.',
      'They are not gaining weight as expected, or feeding has changed significantly.',
      'You are struggling in a way that feels bigger than tiredness. Postpartum mood changes are common, treatable, and worth raising with your own doctor as well.',
    ],
    strategyTags: ['transition-warning', 'visual-schedule'],
    relatedLenses: ['sensory'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'separation-anxiety-onset',
    title: 'Suddenly They Cannot Let You Leave the Room',
    category: 'separation',
    minMonths: 7,
    maxMonths: 20,
    ageRange: '7 to 18 months',
    summary:
      'A baby who was happy with anyone now cries when you step away. This is not a step backward ' +
      'in confidence. It is a sign the attachment worked.',
    whatYouMayNotice: [
      'Crying when you leave the room, even briefly.',
      'Refusing people they used to be comfortable with, including grandparents.',
      'Waking at night after a stretch of better sleep.',
      'Wanting to be held constantly, especially in new places.',
      'Watching the door after you go through it.',
    ],
    whyItHappens: [
      'They have just worked out that you continue to exist when you are out of sight. Before that, gone was simply gone.',
      'Knowing you exist elsewhere is exactly what makes your absence worth protesting.',
      'They cannot yet hold the idea that you will come back, so every exit feels open ended.',
      'They have no sense of time. 10 minutes and the whole day feel the same.',
      'Preferring one or 2 specific people is a healthy sign of a secure attachment forming, not a sign of being spoiled.',
    ],
    whatIsTypical:
      'Very common from around 7 to 9 months, often peaking somewhere between 10 and 18 months, and ' +
      'usually easing as they build the ability to hold you in mind while you are gone.',
    parentStrategies: [
      'Always say goodbye. Slipping out quietly avoids one hard moment and teaches them to watch you constantly for the next disappearance.',
      'Keep goodbyes short and confident. Long drawn out goodbyes tell them there is something here to be worried about.',
      'Practice tiny separations at home. Leave the room, call out from the hallway, come back. You are proving the pattern.',
      'Play peek a boo and hiding games. It is the same lesson in a form they can enjoy.',
      'Give the same goodbye every time, the same words and the same gesture, so it becomes predictable.',
      'Let the other caregiver take over the distraction after you leave rather than lingering in the doorway.',
    ],
    scripts: [
      { situation: 'Leaving for work or an appointment', say: "I'm going to work. I always come back. See you after your nap.", why: 'Names what is happening, promises the return, and anchors it to something in their day rather than to a clock they cannot read.' },
      { situation: 'Handing off to another caregiver', say: "You're safe with Grandma. I'll be back after lunch.", why: 'Your confidence is the message. If you sound unsure, they learn the situation is worth being unsure about.' },
      { situation: 'When they cry as you go', say: "It's hard to say goodbye. I know. And I'll be back.", why: 'Acknowledges the feeling without treating it as a reason to stay, which would teach that crying reverses decisions.' },
      { situation: 'Coming back', say: "I came back. I always come back.", why: 'The return is the part that teaches the lesson. Naming it out loud makes the pattern visible.' },
    ],
    forYou: [
      'A child who cries when you leave and settles a few minutes later is doing well. Ask the caregiver how long it actually lasted, it is usually far shorter than you imagine.',
      'Guilt at drop off is not evidence you are doing something wrong.',
    ],
    worthMentioning: [
      'Distress does not ease at all after you leave, over a long stretch of weeks.',
      'They do not seek comfort from you when they are upset, or seem equally content with anyone at all.',
      'They lose words, gestures, or social skills they previously had.',
      'Separation fear is severe enough that it is preventing sleep, eating, or normal daily life.',
    ],
    strategyTags: ['transition-warning', 'connection-first'],
    relatedLenses: ['emotionalRegulation', 'autism'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'toddler-tantrums-begin',
    title: 'The Tantrums Have Started',
    category: 'emotional-regulation',
    minMonths: 12,
    maxMonths: 36,
    ageRange: '1 to 3 years',
    summary:
      'Full body meltdowns over things that make no sense to you. The cracker broke. The sock is ' +
      'wrong. This is a brain limitation, not a behavior problem.',
    whatYouMayNotice: [
      'Screaming, dropping to the floor, throwing, or going stiff.',
      'Triggers that seem trivial, such as the wrong colored cup or a broken cracker.',
      'Meltdowns that arrive with no warning and take a long time to end.',
      'Worse when tired, hungry, or at the end of a busy day.',
      'Refusing the very thing they just asked for.',
    ],
    whyItHappens: [
      'They now know what they want, clearly and specifically, and they cannot yet say it or get it themselves. That gap is the whole problem.',
      'The part of the brain that manages impulses and calms big feelings is barely under construction at this age. Expecting them to use it is like expecting them to reach a high shelf.',
      'They have no ability yet to soften disappointment, so a small no feels like a total loss.',
      'Feelings arrive at full volume with no dimmer switch, and they have no way to bring themselves down.',
      'Being told no is also their first experience of a limit on a will that suddenly feels enormous.',
    ],
    whatIsTypical:
      'Extremely common through the toddler years, usually peaking somewhere around 2 to 3 ' +
      'and easing as language and self control develop. Frequency matters less than whether they ' +
      'can be comforted and recover afterward.',
    parentStrategies: [
      'Get calm before you do anything else. They cannot borrow calm you do not have.',
      'Say the feeling out loud before solving anything. Being understood ends more tantrums than being fixed.',
      'Stay nearby and quiet rather than reasoning. Words do not land while a brain is flooded.',
      'Hold the limit but soften the delivery. You can be completely warm and still say no.',
      'Offer 2 acceptable choices rather than open questions, so they get real control over something.',
      'Look at what came before it. Hunger, tiredness, and too much stimulation cause more meltdowns than defiance does.',
      'Do the teaching afterward, when they are calm. During is for safety and presence only.',
    ],
    scripts: [
      { situation: 'The meltdown is happening', say: "You really wanted that. I'm right here.", why: 'Names the want and offers presence, without arguing and without giving in.' },
      { situation: 'They want something they cannot have', say: "You want the cookie. It's not cookie time. That's disappointing.", why: 'Validates the desire and holds the limit in the same breath, so the limit does not read as rejection.' },
      { situation: 'They are hitting or throwing', say: "I won't let you hit. I'm going to move you here so you're safe.", why: 'Stops the behavior by acting rather than by asking, and describes what you are doing so it is not frightening.' },
      { situation: 'Afterward, when calm', say: "That was a big feeling. Big feelings are okay. Next time you can tell me mad.", why: 'Teaches at the only moment teaching can be heard, and names the alternative rather than only the problem.' },
      { situation: 'In public with an audience', say: "We're okay. He's having a hard time.", why: 'Answers the onlookers in 5 words so you can put your attention back where it belongs.' },
    ],
    forYou: [
      'A tantrum in public is not a performance review. It is a 2 year old with a 2 year old brain.',
      'If you feel yourself escalating, it is fine to say "I need a second" and step just far enough away to breathe, as long as they are safe.',
      'You will lose your patience sometimes. Repair afterward matters more than never slipping.',
    ],
    worthMentioning: [
      'Tantrums regularly last far longer than about 25 minutes, or happen many times every day over a long stretch.',
      'Your child hurts themselves or others during them.',
      'They cannot be soothed by anyone at all, or cannot recover afterward.',
      'They are not gaining words, or have lost words they used to have.',
      'You are frightened by how angry you feel. That is worth saying to your own doctor, and asking is a sign of good parenting rather than a failure of it.',
    ],
    strategyTags: ['co-regulate', 'name-the-feeling', 'offer-choices', 'connection-first'],
    relatedLenses: ['emotionalRegulation', 'communication', 'sensory'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'hitting-and-biting',
    title: 'Hitting, Biting, and Pushing',
    category: 'behavior',
    minMonths: 15,
    maxMonths: 42,
    ageRange: '15 months to 3 years',
    summary:
      'They bite a friend, hit you, or push another child at the park. At this age this is almost ' +
      'always communication, not cruelty.',
    whatYouMayNotice: [
      'Biting during play, often when excited rather than angry.',
      'Hitting you specifically, often more than anyone else.',
      'Pushing another child over a toy.',
      'It happens fastest when they are tired, crowded, or overstimulated.',
      'They look surprised or upset by the reaction they get.',
    ],
    whyItHappens: [
      'They do not have the words yet. Hitting is a sentence when the sentence is not available.',
      'Impulse control barely exists at this age. The gap between feeling and doing is almost zero.',
      'They cannot yet imagine another person feeling pain, so the effect on the other child is not part of the decision.',
      'Excitement and frustration feel similar in the body, and both can come out physically.',
      'Sometimes it is sensory. Biting gives strong input to the jaw, and some children seek that out.',
      'They hit you most because you are safest. That is uncomfortable and it is also a good sign.',
    ],
    whatIsTypical:
      'Common in this age range and usually fading as language and impulse control develop. What ' +
      'matters is the trend across months, not whether it happened today.',
    parentStrategies: [
      'Respond immediately and briefly. Long explanations lose them and can make the reaction feel like a reward.',
      'Attend to the child who was hurt first. It shifts the attention away from the behavior and models care.',
      'Name what happened and give the alternative in the same sentence. Stopping a behavior without replacing it leaves nothing to do.',
      'Look for the pattern. Same time of day, same setting, same trigger, usually.',
      'Shadow closely in high risk moments so you can intervene before it happens rather than after.',
      'If it looks sensory, offer strong input on purpose: chewable toys, crunchy foods, pushing and carrying heavy things.',
      'Teach the word during calm moments, not during incidents.',
    ],
    scripts: [
      { situation: 'Right after they hit', say: "I won't let you hit. Hands are for playing.", why: 'A limit plus a replacement, short enough to actually land.' },
      { situation: 'After biting another child', say: "Teeth hurt people. Let's check on her.", why: 'Names the consequence in concrete terms and moves straight to repair.' },
      { situation: 'When it is excitement rather than anger', say: "You're so excited. Big energy is okay. Let's use it safely. Stomp with me.", why: 'Does not treat excitement as bad, it redirects the energy somewhere the body can still discharge it.' },
      { situation: 'Teaching the alternative when calm', say: "When you're mad, you can say mad, or stomp, or come find me.", why: '3 concrete options given before the moment, when there is room to learn them.' },
      { situation: 'To another parent at the park', say: "We're working on hands. I'm sorry, are you okay?", why: 'Handles the social moment honestly without a lecture about your child in front of your child.' },
    ],
    forYou: [
      'Being hit by your own child stings in a way people do not talk about. That reaction is normal.',
      'This behavior is not evidence about who they will become, and it is not a verdict on your parenting.',
    ],
    worthMentioning: [
      'It is not decreasing at all over a period of months.',
      'It is causing real injury, or they seem to intend harm.',
      'It happens with no clear trigger and they cannot be redirected.',
      'They have very few words compared to what you would expect at this age. Frustration from not being understood is one of the most common drivers, and speech support can change the whole picture.',
      'It is severe enough to threaten their place in childcare or preschool.',
    ],
    strategyTags: ['name-the-feeling', 'heavy-work', 'model-language', 'connection-first'],
    relatedLenses: ['communication', 'sensory', 'adhd', 'emotionalRegulation'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'two-year-autonomy',
    title: 'No to Everything',
    category: 'independence',
    minMonths: 18,
    maxMonths: 40,
    ageRange: '18 months to 3 years',
    summary:
      'They say no to things they want. They insist on doing it themselves and then fall apart when ' +
      'they cannot. This is the first appearance of a self.',
    whatYouMayNotice: [
      'No as the automatic answer, including to things they clearly want.',
      'Insisting on doing tasks themselves, then melting down over the difficulty.',
      'Rage when you do something for them they wanted to do.',
      'Needing things in a precise order or a precise way.',
      'Refusing the shoes, the coat, the car seat, and the bath, all in one morning.',
    ],
    whyItHappens: [
      'They have just discovered they are a separate person with their own preferences, and saying no is how you test that.',
      'They want independence far beyond their actual skill, and the gap between the two is enormous and constant.',
      'Their whole day is decided by other people. No is one of the very few levers they have.',
      'Predictable order gives them a feeling of control in a world where they control almost nothing.',
      'This drive toward autonomy is the same drive that will become confidence and self advocacy later. It is not defiance for its own sake.',
    ],
    whatIsTypical:
      'A well known feature of the second and third years. It usually softens as language grows and ' +
      'as they get more real chances to decide things.',
    parentStrategies: [
      'Give real choices where you genuinely do not care. 2 shirts, 2 snacks, stairs or elevator.',
      'Never offer a choice you cannot honor. A fake choice teaches them that choices are not real.',
      'Build in more time rather than more speed. Most power struggles are actually schedule problems.',
      'Let them do the last step. You pull the sock most of the way, they pull it over the heel.',
      'Use when then rather than if. "When shoes are on, then we go to the park."',
      'Skip the yes or no question when it is not optional. "Time for the car seat" instead of "are you ready to go".',
      'Pick your battles honestly. Safety is not negotiable. Mismatched clothes are not a battle.',
    ],
    scripts: [
      { situation: 'They refuse something that is not optional', say: "You don't want to. It's still time to go. Do you want to walk or should I carry you?", why: 'Accepts the feeling, holds the requirement, and gives back control over the part that can be theirs.' },
      { situation: 'They want to do it themselves and cannot', say: "You want to do it. That's hard. Want me to start it and you finish?", why: 'Keeps them in the job rather than taking it away, which is what the meltdown is usually about.' },
      { situation: 'They say no to something they want', say: "Okay, no yogurt. It'll be here if you change your mind.", why: 'Removes the fight. Without opposition there is nothing to push against, and they often come back to it.' },
      { situation: 'Getting out the door', say: "When your shoes are on, then we go find the ducks.", why: 'When then states the order plainly, without bargaining and without a threat.' },
    ],
    forYou: [
      'You are not losing authority by giving choices. You are spending it where it counts.',
      'Most days at this age are a negotiation with someone who has no concept of time or consequences. Exhaustion is the appropriate response.',
    ],
    worthMentioning: [
      'Refusal is so total that eating, sleeping, or leaving the house have become genuinely difficult.',
      'They have very few words, or are not combining words by around 2 years.',
      'Rigidity about order or sameness is extreme, and any change causes major distress.',
      'You find yourself in physical struggles with your child most days and it feels like it is escalating.',
    ],
    strategyTags: ['offer-choices', 'first-then', 'transition-warning'],
    relatedLenses: ['emotionalRegulation', 'communication', 'autism', 'executiveFunction'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'four-year-physical-intensity',
    title: 'Big Energy and Physical Play',
    category: 'behavior',
    minMonths: 42,
    maxMonths: 66,
    ageRange: '3.5 to 5 years',
    summary:
      'Your 4 year old seems more aggressive, and often not because they are angry. They crash, ' +
      'wrestle, hit during play, and use their body at full volume.',
    whatYouMayNotice: [
      'Hitting or pushing while laughing, not while upset.',
      'Crashing into furniture, people, and the floor on purpose.',
      'Play that turns into weapons, battles, monsters, and chasing, even without exposure to it.',
      'Not stopping when another child says stop.',
      'Sudden intensity right after school or daycare.',
      'Testing a limit while looking directly at you.',
    ],
    whyItHappens: [
      'Impulse control is still years from finished. They can name the rule perfectly and still not stop their body in time, and knowing the rule is not the same skill as using it.',
      'Excitement and aggression feel almost identical in a 4 year old body. Big feeling comes out as big movement regardless of whether the feeling was good or bad.',
      'Many children are sensory seeking at this age. Crashing and wrestling give the deep pressure input their body is actively looking for.',
      'Rough and tumble play is normal developmental work. It is how children learn force, limits, and reading other people.',
      'Boundary testing is a real job at this age. They are checking whether the rule is the same today as yesterday, and whether it is the same when you are tired.',
      'Attention is a driver too, and a big reaction from you is attention. If the only intense response they get is to hitting, hitting becomes worth doing.',
      'Sometimes it is the end of a long day of holding it together somewhere else, and you get everything they managed to suppress all day.',
    ],
    whatIsTypical:
      'Very common at this age, especially in children who need a lot of movement. The useful ' +
      'question is not whether it happens but whether they can stop when a limit is set, and ' +
      'whether it is trending down across months.',
    parentStrategies: [
      'Give the body what it is asking for before the behavior shows up. Heavy work such as pushing, carrying, climbing, and jumping, ideally before the hard part of the day.',
      'Make a legal place for rough play. A crash pad of cushions, a wrestling rule set, a pillow that is allowed to be hit.',
      'Teach stop as the rule of the game. Everyone stops when anyone says stop, including you when they say it. That makes the rule real.',
      'Separate excitement from aggression out loud, so they learn there is a difference.',
      'Catch the good version. Notice out loud when they were rough and still stopped, or asked first.',
      'Front load movement after school before you ask for anything calm.',
      'Get down to their level and be brief. Long explanations at this age lose the thread.',
      'Keep the limit identical every time. Inconsistency is what keeps testing worthwhile.',
    ],
    scripts: [
      { situation: 'They hit during excited play', say: "Big energy is okay. Let's use it safely.", why: 'Does not shame the energy, which is not the problem, and points it somewhere it can go.' },
      { situation: 'You need it stopped now', say: "Stop. Bodies are for keeping safe.", why: 'One word first, because at full speed a sentence arrives too late.' },
      { situation: 'They want to wrestle', say: "You want to crash. Let's build a crash pile and you can jump into that.", why: 'Says yes to the need and no to the location, which is usually the actual problem.' },
      { situation: 'They did not stop when a friend said stop', say: "She said stop. When someone says stop, the game stops. Let's check if she still wants to play.", why: 'Teaches consent in the simplest form a 4 year old can use, and puts repair right after the rule.' },
      { situation: 'After school intensity', say: "You held it together all day. Let's get that out. Race me to the fence.", why: 'Names what actually happened and gives the body a way to discharge it before you ask for calm.' },
      { situation: 'They are testing you deliberately', say: "You're checking if the rule is still the rule. It is. Feet on the floor.", why: 'Naming the test defuses it, and repeating the limit unchanged answers the real question.' },
    ],
    forYou: [
      'A 4 year old who is aggressive in play is not becoming a violent person. This is one of the most misread stages there is.',
      'If you dread the hour after pickup, plan for it rather than hoping for a better version of it.',
      'The behavior often looks worse with you than at school. That means you are safe, not that you are doing it wrong.',
    ],
    worthMentioning: [
      'They cannot stop when a clear limit is set, consistently, across many weeks.',
      'They are causing real injury, or they seem to intend to hurt.',
      'Aggression is also happening at school or childcare, or is putting their placement at risk.',
      'It is not trending down at all over several months.',
      'They seem unusually driven to seek intense input, or unusually distressed by ordinary sounds, textures, or touch. An occupational therapy evaluation is one thing families find helpful here.',
      'You see cruelty to animals, fire setting, or aggression that seems planned rather than impulsive.',
    ],
    strategyTags: ['heavy-work', 'movement-break', 'name-the-feeling', 'connection-first', 'first-then'],
    relatedLenses: ['sensory', 'adhd', 'emotionalRegulation'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'preschool-big-feelings',
    title: 'Enormous Feelings Over Small Things',
    category: 'emotional-regulation',
    minMonths: 36,
    maxMonths: 66,
    ageRange: '3 to 5 years',
    summary:
      'The banana broke. The blue cup is in the dishwasher. The reaction is genuinely enormous and ' +
      'genuinely real to them.',
    whatYouMayNotice: [
      'Total devastation over something small or unfixable.',
      'Fairness becoming a constant theme, especially with siblings.',
      'Falling apart at the end of the day over almost nothing.',
      'Wanting the exact same routine, and distress when it changes.',
      'Recovering suddenly and completely, as if it never happened.',
    ],
    whyItHappens: [
      'They feel things at full intensity and have almost no ability yet to scale a reaction to the size of the problem.',
      'Regulation is a skill that develops over years, and it develops through being calmed by someone else many hundreds of times.',
      'They think in absolutes. The broken banana is not a damaged banana, it is a ruined one.',
      'Fairness is a brand new concept and they apply it rigidly, because nuance comes much later.',
      'By evening they have spent all day managing themselves, and there is nothing left in reserve.',
      'They cannot yet hold 2 feelings at once, so disappointment fills the entire space.',
    ],
    whatIsTypical:
      'Very common through the preschool years. Look at recovery rather than intensity. A child who ' +
      'gets very upset and can come back with support is doing exactly what this stage looks like.',
    parentStrategies: [
      'Regulate yourself first, every time. Your calm is the tool, not your explanation.',
      'Name the feeling before fixing the problem. Most of the time the naming is the fix.',
      'Do not try to talk them out of the size of it. Telling a child it is not a big deal teaches them not to bring you the big ones later.',
      'Offer connection rather than solutions. Sitting nearby beats reasoning.',
      'Protect the end of the day. Fewer demands, more food, earlier bedtime than feels necessary.',
      'Give warnings before transitions, especially before stopping something enjoyable.',
      'Build a calm down space that is a choice they can make, never a place you send them as a punishment.',
      'Practice naming emotions when everyone is calm, in books, in play, and about your own feelings out loud.',
    ],
    scripts: [
      { situation: 'The unfixable disappointment', say: "You wanted it whole. That's so disappointing.", why: 'Matches the size of their feeling instead of arguing with it, which is what lets it pass.' },
      { situation: 'You cannot fix it and they want you to', say: "I can't make it whole again. I can sit with you while you're sad.", why: 'Honest about the limit, and offers the thing you can actually give.' },
      { situation: 'Fairness complaints', say: "You wanted a turn too. Waiting is hard. Your turn is next.", why: 'Validates and then gives the concrete information they are actually asking for.' },
      { situation: 'End of day collapse', say: "You worked hard today. Let's have a soft evening.", why: 'Reframes the meltdown as depletion, which is usually what it is, and lowers the demands.' },
      { situation: 'They are too flooded to hear you', say: "I'm right here. I'll wait.", why: 'Words do not work during flooding. Presence does.' },
      { situation: 'Afterward', say: "That was hard. You came back. That's the part I'm proud of.", why: 'Puts the praise on recovery, which is the skill being built, rather than on not having feelings.' },
    ],
    forYou: [
      'You cannot regulate a child while dysregulated yourself. Your own breath is the first step, not a nice extra.',
      'Getting frustrated by a meltdown over a cup does not make you a bad parent. It makes you a person whose reasoning brain is intact.',
      'Repair after you snap is more valuable than never snapping. Children learn what to do after a rupture by watching you do it.',
    ],
    worthMentioning: [
      'Meltdowns are extremely long, extremely frequent, or they cannot be soothed by anyone.',
      'They hurt themselves during them.',
      'It is getting worse over months rather than better.',
      'They seem anxious, sad, or withdrawn most of the time rather than mainly during hard moments.',
      'It is affecting friendships, preschool, sleep, or eating.',
    ],
    strategyTags: ['co-regulate', 'name-the-feeling', 'quiet-space', 'transition-warning', 'connection-first'],
    relatedLenses: ['emotionalRegulation', 'sensory', 'autism', 'adhd'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'preschool-lying-imagination',
    title: 'They Are Making Things Up',
    category: 'behavior',
    minMonths: 36,
    maxMonths: 72,
    ageRange: '3 to 6 years',
    summary:
      'They insist they did not do it while holding the evidence. They tell you about things that ' +
      'never happened. At this age, most of this is not really lying.',
    whatYouMayNotice: [
      'Denying something you watched them do.',
      'Elaborate stories about events that did not happen.',
      'Claiming a sibling or an invisible friend did it.',
      'Insisting on their version even when it is impossible.',
      'Telling you what they wish were true as though it is.',
    ],
    whyItHappens: [
      'The line between imagination and memory is genuinely blurry at this age. Sometimes they are not reporting a fact, they are reporting a wish.',
      'Working out that other people do not automatically know what you know is a major cognitive leap, and it is happening right now.',
      'They deny things to avoid disappointing you. Avoiding your disappointment is a relationship instinct before it is a moral one.',
      'They do not yet grasp that being caught and confessing lead to different outcomes.',
      'Story making is developmentally healthy and closely tied to the pretend play that builds social understanding.',
      'Sometimes a question that already contains the accusation invites a denial. Asking who did this when you watched them do it puts them in a corner.',
    ],
    whatIsTypical:
      'Common and generally an ordinary part of cognitive development at this age. It usually shifts ' +
      'as they understand other minds better and as honesty gets easier than concealment.',
    parentStrategies: [
      'Do not ask questions you already know the answer to. State what you saw instead.',
      'Make telling the truth safe. If honesty always leads to punishment, concealment is the rational choice.',
      'Separate the story from the fact without shaming either. Both have a place.',
      'Name the wish underneath. Often the lie is a wish said out loud.',
      'Praise honesty specifically and immediately, especially when it was clearly hard.',
      'Focus on repair rather than confession. Fixing it matters more than admitting it at this age.',
      'Keep your reaction small. A big reaction makes the next truth more expensive.',
    ],
    scripts: [
      { situation: 'You saw them do it', say: "I saw the cup spill. Let's get a towel.", why: 'Skips the interrogation entirely and moves to repair, which is the part that teaches something.' },
      { situation: 'They deny it anyway', say: "I think it's scary to tell me. You won't get in trouble for telling the truth.", why: 'Names the fear driving the denial and removes the reason for it.' },
      { situation: 'An impossible story', say: "That's a great story. Is that a real thing or a pretend thing?", why: 'Gives them the vocabulary to sort it themselves without calling them a liar.' },
      { situation: 'They told the truth about something hard', say: "That was hard to tell me and you told me anyway. Thank you.", why: 'Rewards the exact behavior you want repeated, at the moment it happened.' },
      { situation: 'The wish underneath', say: "You wish you had a puppy. Me too. Let's pretend about it.", why: 'Answers what they actually meant rather than correcting what they literally said.' },
    ],
    forYou: [
      'A 4 year old who lies is not showing you a character flaw. This is normal cognitive development and nearly every child does it.',
    ],
    worthMentioning: [
      'Lying is frequent, deliberate, and continues well past this age range.',
      'It comes with stealing, aggression, or cruelty.',
      'They seem genuinely unable to tell what is real from what is imagined, in a way that worries you.',
      'The lying seems to be covering something you cannot see. Trust that instinct and ask.',
    ],
    strategyTags: ['connection-first', 'concrete-language'],
    relatedLenses: ['emotionalRegulation'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'after-school-restraint-collapse',
    title: 'They Fall Apart the Second They See You',
    category: 'emotional-regulation',
    minMonths: 36,
    maxMonths: 132,
    ageRange: '3 to 11 years',
    summary:
      'Their teacher says they had a great day. Then they get in the car and everything falls apart. ' +
      'This is one of the most misread patterns in parenting.',
    whatYouMayNotice: [
      'A glowing report from school, followed by a meltdown within minutes of pickup.',
      'Snapping at you specifically, and only you.',
      'Falling apart over the snack, the seatbelt, or the wrong song.',
      "Being fine at a friend's house and difficult at home.",
      'It is worst on the days that went best.',
    ],
    whyItHappens: [
      'Holding it together all day takes enormous effort. Their reserves are simply empty by pickup.',
      'You are the safe person. They release with you precisely because you are the one who will not leave.',
      "They have been following someone else's rules and schedule for hours with almost no control.",
      'Hunger and tiredness both peak right at pickup, which is the worst possible timing.',
      'The transition itself is hard, and they have to switch modes with no warning.',
      'Younger children cannot yet tell you they are depleted, so it comes out as behavior.',
    ],
    whatIsTypical:
      'Extremely common, especially in the first months of a new school year or a new setting, and ' +
      'in children who work hard to meet expectations elsewhere.',
    parentStrategies: [
      'Feed them before you ask anything. Have food in the car, ready, every time.',
      'Do not ask about their day right away. Questions are more work, and work is the problem.',
      'Give quiet first. Connection can be a snack and silence rather than conversation.',
      'Plan for movement before you plan for homework or chores.',
      'Keep the after school routine identical so it takes no thought.',
      'Do the talking later. Most children open up at bedtime or in the car, sideways, not on demand.',
      'Lower expectations for the hour after pickup, on purpose, as a policy rather than a concession.',
    ],
    scripts: [
      { situation: 'The moment they get in the car', say: "Snack's here. We don't have to talk yet.", why: 'Removes both demands at once, food and conversation, which are the 2 things they cannot manage right now.' },
      { situation: 'They snap at you', say: "You held it together all day. You can let it out with me.", why: 'Tells them the release is allowed and, importantly, tells you what it means so it stings less.' },
      { situation: 'They will not say what is wrong', say: "You don't have to tell me. I'm here when you want to.", why: 'Keeps the door open without pushing, which is what usually gets them to walk through it later.' },
      { situation: 'Later, when you want the real conversation', say: "Tell me one thing that was good and one thing that was annoying.", why: 'Specific and small, which gets answers where how was your day gets fine.' },
    ],
    forYou: [
      'Being the person they fall apart with is a compliment delivered in the worst possible format.',
      'This pattern is not a sign that something is wrong at school, and it is not a sign that you are the problem.',
    ],
    worthMentioning: [
      'They seem anxious or unhappy about going, not just tired after.',
      'The collapse is getting more severe over time rather than settling.',
      'There are changes in sleep, eating, or interest in things they used to enjoy.',
      'They mention or hint at something happening at school that concerns you.',
    ],
    strategyTags: ['movement-break', 'connection-first', 'transition-warning', 'quiet-space'],
    relatedLenses: ['emotionalRegulation', 'sensory', 'adhd', 'autism'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'picky-eating',
    title: 'They Will Only Eat 4 Things',
    category: 'feeding',
    minMonths: 18,
    maxMonths: 84,
    ageRange: '18 months to 7 years',
    summary:
      'A child who used to eat everything now refuses most of it. Appetite drops. Meals become a ' +
      'negotiation. Most of this is developmental.',
    whatYouMayNotice: [
      'A shrinking list of accepted foods.',
      'Refusing a food they liked last week.',
      'Eating almost nothing at a meal and then being hungry an hour later.',
      'Foods not being allowed to touch each other.',
      'Rejecting a food based on how it looks, before tasting it.',
    ],
    whyItHappens: [
      'Growth slows dramatically after the first year, so appetite genuinely drops. They are not eating less than they need, they need less.',
      'Wariness of new foods is a developmental stage that shows up strongly in the toddler and preschool years, and it likely had a protective purpose.',
      'Food is one of the few things a child can fully control, so it becomes an obvious place to exercise that.',
      'Some children are more sensitive to texture, smell, and temperature, and that sensitivity is real rather than stubbornness.',
      'Accepting a new food often takes many neutral exposures. Being offered it and not eating it is part of the process, not a failed attempt.',
    ],
    whatIsTypical:
      'Very common in this age range. The useful measure is growth and energy over months, not what ' +
      'was eaten at dinner.',
    parentStrategies: [
      'Keep the roles clear. You decide what is offered and when. They decide whether and how much. That division removes most of the fight.',
      'Serve a safe food alongside the new one, every time, so there is never nothing to eat.',
      'Offer without pressure and without commentary. Praise for eating is still pressure.',
      'Expect many exposures. Put it on the plate and let it be ignored.',
      'Let them touch, smell, or lick it. That is a real step toward eating it.',
      'Stop the short order cooking, gently and gradually, but never leave them with no acceptable option.',
      'Eat the same food yourself where they can see it.',
      'Keep mealtimes short and pleasant. A long tense meal teaches them that eating is unpleasant.',
    ],
    scripts: [
      { situation: 'They refuse what is served', say: "You don't have to eat it. It's just on your plate.", why: 'Removes the pressure that causes most refusal, while keeping the exposure.' },
      { situation: 'They ask for something else', say: "This is what's for dinner. There's bread too.", why: 'Holds the boundary while guaranteeing something they can eat, so it never becomes a hunger standoff.' },
      { situation: 'They say they hate it', say: "You're not liking it today. That's okay. Tastes change.", why: 'Keeps the door open for later instead of turning a refusal into a permanent identity.' },
      { situation: 'They try something new', say: "You tried it.", why: 'Notice without celebrating. A big reaction turns eating into a performance for you.' },
      { situation: 'They are hungry after refusing dinner', say: "Kitchen's closed, but breakfast is coming. Want to pick what we have?", why: 'Consistent limit, plus control over the next thing, which is what they were after anyway.' },
    ],
    forYou: [
      'You are responsible for what is offered, not for what is swallowed. Holding that line protects both of you.',
      'Mealtime anxiety spreads. If you dread dinner, they will feel it and eat less.',
    ],
    worthMentioning: [
      'They are losing weight, or not growing along their expected curve.',
      'The accepted food list is very short and still shrinking.',
      'They gag, choke, vomit, or seem to have pain with eating.',
      'They avoid entire textures or whole food groups, which can point toward a sensory difference worth evaluating.',
      'Mealtimes are causing real distress for your child or your family.',
      'You are worried. Growth is tracked at well visits, and asking gets you actual data instead of guessing.',
    ],
    strategyTags: ['offer-choices', 'observe-and-note'],
    relatedLenses: ['sensory', 'autism', 'motor'],
  },

  /* ==================================================================
     THE TWEEN AND TEEN YEARS, ROUGHLY ELEVEN TO EIGHTEEN

     Everything above this line was written for a parent who is
     physically present when the hard thing happens. From about eleven,
     that stops being true. You hear about the hard thing afterwards,
     if at all, and usually in the car.

     So the entries below shift what they offer. Less about what to do
     in the next sixty seconds, more about what is actually happening
     and how to stay someone your child will still talk to. The scripts
     matter more here than anywhere else in the app, because the wrong
     sentence at fourteen closes a door that stays closed.

     A note that runs through all of it. Adolescence for a
     neurodivergent teen is the same adolescence plus a second job,
     which is looking normal while doing it. Where that changes the
     picture, it is said out loud rather than left for a parent to
     work out.
     ================================================================== */

  /* ---------------------------------------------------------------- */
  {
    id: 'teen-sleep-clock-shift',
    title: 'They Cannot Fall Asleep, and It Is Not Defiance',
    category: 'sleep',
    minMonths: 132,
    maxMonths: 228,
    ageRange: '11 to 18 years',
    summary:
      'Wide awake at midnight, impossible to wake at seven. This is a real biological shift in when ' +
      'their body releases the hormone that starts sleep, and willpower does not move it.',
    whatYouMayNotice: [
      'They genuinely cannot fall asleep at the time that used to work.',
      'Waking them for school feels like waking someone from anesthesia.',
      'They are exhausted all week and then sleep until noon on Saturday.',
      'They insist they are not tired at 11 at night, and they are telling the truth.',
      'Mood, focus, and patience all get noticeably worse across the school week.',
    ],
    whyItHappens: [
      'At puberty the body clock shifts later by around 2 hours. Melatonin, the hormone that starts sleep, simply arrives later than it did.',
      'Teenagers still need roughly 8 to 10 hours. The need did not shrink, only the window moved.',
      'Most school start times were set for a body clock teenagers no longer have, so the week runs at a deficit by design.',
      'Screens do not cause the shift, and light late at night does push it a little further out.',
      'The weekend lie in is the body repaying debt, and it also makes Monday harder, which is a genuinely unfair trap.',
    ],
    whatIsTypical:
      'Nearly universal from around age 11 or 12 through the late teens, and it starts to ' +
      'drift back earlier in the early twenties.',
    parentStrategies: [
      'Treat the shift as real. Arguing with biology costs you credibility you will want for other things.',
      'Anchor the wake time rather than the bedtime. Wake time is what actually moves a body clock.',
      'Get light into them in the morning, ideally outdoors, even for 10 minutes.',
      'Keep weekend sleep within about 2 hours of the school day, rather than letting it run to noon.',
      'Dim the house in the last hour, which does more than banning a phone at nine.',
      'Move homework earlier where you can, since the late night session is usually the least productive hour of their day.',
      'Protect naps under 30 minutes and before mid afternoon, and treat longer ones as a sign of real debt.',
    ],
    scripts: [
      { situation: 'They say they are not tired', say: "I believe you. Your body clock genuinely moved. Let's work with it instead of fighting it.", why: 'Believing them is the whole move here, and it buys you a conversation rather than an argument.' },
      { situation: 'The phone at midnight', say: "The phone isn't the problem, the clock is. Can we park it at 11 and see if anything changes in a week?", why: 'Frames it as an experiment you run together rather than a confiscation, which is the difference between compliance and a fight.' },
      { situation: 'Weekend sleeping until one in the afternoon', say: "Sleep in, that's fair. Can we cap it around 11 so Monday isn't brutal?", why: 'Concedes the real need while protecting the thing that actually wrecks their week.' },
      { situation: 'Morning, and they are impossible', say: "I know this hour is the worst. 10 minutes, then food.", why: 'Removes conversation from the hardest part of their day, which is the same restraint that works at pickup when they are five.' },
    ],
    forYou: [
      'The morning fight is not about respect, and treating it as a discipline problem tends to lose you both the morning and the relationship.',
      'If your teen is chronically short on sleep, almost everything else you are worried about will look worse than it is.',
    ],
    worthMentioning: [
      'They are exhausted even after a full night, which can point to iron, thyroid, sleep apnea, or depression.',
      'Snoring, gasping, or long pauses in breathing during sleep.',
      'They cannot fall asleep for hours because their mind will not stop, which is often anxiety rather than a clock problem.',
      'Sleep changed suddenly rather than gradually.',
      'They are sleeping far more than usual and withdrawing from things they used to enjoy.',
    ],
    strategyTags: ['visual-schedule', 'timer', 'transition-warning', 'observe-and-note'],
    relatedLenses: ['adhd', 'autism', 'anxiety', 'emotionalRegulation'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'teen-brain-reactivity',
    title: 'The Door Slam, and the Brain Behind It',
    category: 'emotional-regulation',
    minMonths: 132,
    maxMonths: 216,
    ageRange: '11 to 17 years',
    summary:
      'Reactions that seem wildly out of proportion, followed an hour later by a completely reasonable ' +
      'person asking what is for dinner. Both of those are the same brain, mid rebuild.',
    whatYouMayNotice: [
      'A small correction produces an enormous response.',
      'Eye rolling, door slamming, and the word whatever, deployed like a weapon.',
      'They are charming to everyone outside the house.',
      'They recover far faster than you do, and seem baffled that you are still upset.',
      'They cannot explain why they reacted that way, and the question itself makes it worse.',
    ],
    whyItHappens: [
      'The emotional part of the brain matures years before the part that applies the brakes. That gap is widest in the early teens, and it is the whole story.',
      'The brain is pruning hard during these years, keeping what is used and clearing what is not. That is efficient long term and unstable in the middle.',
      'Teenagers read neutral faces as hostile more often than adults do, so your ordinary expression can land as an attack.',
      'Their sense of self is genuinely under construction, which makes criticism feel like a challenge to who they are, not to what they did.',
      'Chronic sleep debt lowers the threshold for all of this, every single time.',
    ],
    whatIsTypical:
      'Very common from around 11, usually peaking somewhere between 13 and 15, and ' +
      'easing through the later teens as the braking system finishes.',
    parentStrategies: [
      'Do not match the volume. The louder person in the room stops being the adult.',
      'Postpone the conversation. Nothing useful is learned during the surge, exactly as when they were three.',
      'Come back within a day. Skipping the repair teaches that blowups simply end rather than get resolved.',
      'Separate the behavior from the person out loud, since they cannot yet do it for themselves.',
      'Pick the 2 or 3 things that genuinely matter and let the rest go, because you cannot win on volume and content at once.',
      'Apologize when you get it wrong. It is the single most effective thing you can model at this age.',
      'Have hard conversations side by side, in the car or on a walk, rather than face to face across a table.',
    ],
    scripts: [
      { situation: 'Mid explosion', say: "I'm not going anywhere. We'll talk when we're both calmer.", why: 'Says the relationship is not in danger, which is the fear underneath most of these, while refusing to hold the conversation now.' },
      { situation: 'After, when they are back', say: "That got big. I want to hear your side before I say anything else.", why: 'Being asked first is what makes a teenager willing to hear the second half.' },
      { situation: 'You lost your temper too', say: "I shouted, and that was mine, not yours. I'm sorry.", why: 'Models repair without canceling the original limit, which is a distinction teenagers watch closely.' },
      { situation: 'They say you never listen', say: "Tell me the part I got wrong. I'll actually listen this time.", why: 'Defending yourself here ends the conversation. Asking keeps it open, which is worth more than being right.' },
    ],
    forYou: [
      'Being the one they explode at usually means you are the one they feel safe with. That does not make it pleasant, and it does mean something.',
      'You will get this wrong regularly. Repair matters more than accuracy, and it is available every single time.',
    ],
    worthMentioning: [
      'Aggression that involves real harm to people, animals, or property.',
      'Mood that stays low or irritable for more than 2 weeks rather than swinging.',
      'Withdrawal from friends and from things they used to love.',
      'Any mention of self harm or of not wanting to be here, which is always worth acting on the same day.',
      'You are afraid of your child, which is a reason to get support for the whole family.',
    ],
    strategyTags: ['co-regulate', 'name-the-feeling', 'connection-first', 'quiet-space'],
    relatedLenses: ['emotionalRegulation', 'adhd', 'autism', 'anxiety'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'teen-pulling-away',
    title: 'They Stop Telling You Things',
    category: 'independence',
    minMonths: 132,
    maxMonths: 228,
    ageRange: '11 to 18 years',
    summary:
      'The child who narrated every thought now answers in one word and shuts the bedroom door. ' +
      'This is developmental, it is supposed to happen, and there are ways to stay in the room.',
    whatYouMayNotice: [
      'Fine, nothing, and I don\'t know, as complete answers.',
      'The bedroom door closed by default.',
      'Friends now know things you do not.',
      'They are irritated by questions that used to be ordinary.',
      'Flashes of the old closeness, usually late at night or in the car.',
    ],
    whyItHappens: [
      'Separating from parents is the actual developmental task of adolescence. A teenager who never pulled away would be the thing to worry about.',
      'Privacy is how they build a self that is theirs rather than yours, and they cannot do it under observation.',
      'Peers become the reference group. That is not a rejection of you, it is a rehearsal for a life you will not be in.',
      'Every question costs them something now, because answering means handing over territory they are still claiming.',
      'They are often protecting you as much as themselves, especially if they think you will worry or be disappointed.',
    ],
    whatIsTypical:
      'Very common from around 11 or 12, and most intense in the middle teens. Closeness ' +
      'usually returns in a different form in the later teens and twenties.',
    parentStrategies: [
      'Be available rather than interested. Presence gets more than questions do.',
      'Take the openings when they come, even at 11 at night when you are exhausted. The window is theirs to open, not yours.',
      'Do things shoulder to shoulder. Driving, cooking, walking, and gaming all produce more talking than sitting across a table.',
      'Ask about their world rather than about them. The friend drama, the game, the music, all of it is a door.',
      'React small. A big reaction to a small disclosure is how you stop hearing the big ones.',
      'Keep the non negotiables short and clear, and negotiate genuinely on everything else.',
      'Say what you like about them out loud, specifically. Teenagers hear correction constantly and praise almost never.',
    ],
    scripts: [
      { situation: 'They say nothing happened today', say: "Fair enough. I'm around if that changes.", why: 'Ends the pressure and leaves the door visibly open, which is what gets you the story 3 hours later.' },
      { situation: 'They tell you something alarming', say: "Thanks for telling me. Let me think for a second before I say anything.", why: 'Buys you the moment you need to not overreact, and it tells them that telling you was the right call.' },
      { situation: 'You want to know about friends', say: "What's the group chat losing its mind about this week?", why: 'Asks about the world rather than about them, which is a far lower toll to pay.' },
      { situation: 'They snap that you are prying', say: "You're right, that was too much. I miss you, that's all.", why: 'Honest, brief, and puts the feeling on you rather than making them responsible for managing it.' },
    ],
    forYou: [
      'This is grief, and it is allowed to be. The child who told you everything is not coming back in that form, and the person replacing them is worth knowing.',
      'Your job shifts from managing them to being the place they come back to. That is quieter work and it is not lesser.',
    ],
    worthMentioning: [
      'Withdrawal from everyone, not just from you, including friends.',
      'They have given up things they used to love.',
      'Secrecy paired with big changes in mood, sleep, appearance, or money.',
      'You believe they are being harmed by someone, online or in person.',
      'Your instinct says this is more than distance. That instinct is worth acting on.',
    ],
    strategyTags: ['connection-first', 'offer-choices', 'wait-time', 'observe-and-note'],
    relatedLenses: ['emotionalRegulation', 'anxiety', 'autism', 'exploring'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'teen-friendship-upheaval',
    title: 'Friendships Turn Brutal',
    category: 'social',
    minMonths: 132,
    maxMonths: 204,
    ageRange: '11 to 16 years',
    summary:
      'Friend groups reshuffle, someone is left out of the group chat, and a child who had friends ' +
      'last year suddenly has none. Middle school social life is genuinely harsh, and it is survivable.',
    whatYouMayNotice: [
      'A long standing friendship ends with no explanation you are given.',
      'Being left out of something, and finding out through a photo.',
      'Exhausting analysis of who said what, or complete refusal to discuss it.',
      'Changing how they dress, talk, or what they like, quite fast.',
      'Reluctance to go to school on specific days.',
    ],
    whyItHappens: [
      'Social groups reorganize hard in early adolescence as everyone works out who they are becoming, and friendships built at 7 often do not survive that.',
      'Belonging feels like survival at this age, because for most of human history it was. Exclusion genuinely hurts, and brain imaging shows it running through pain pathways.',
      'Status becomes visible and countable through phones, which is new and which makes exclusion measurable in a way it never used to be.',
      'Most teenagers are also excluding someone while being excluded. Very few are purely one or the other.',
      'Neurodivergent teens often get hit hardest here, because the unwritten rules multiply at exactly the age they get less explicit.',
    ],
    whatIsTypical:
      'Very common between 11 and 15, and usually settling by 16 or 17 as groups ' +
      'stabilize around actual shared interests rather than status.',
    parentStrategies: [
      'Listen without fixing first. The urge to solve it is strong and it usually ends the conversation.',
      'Do not badmouth the friend who hurt them, since they will very likely be friends again by Thursday and you will have made that awkward.',
      'Build one reliable connection outside school, such as a club, a sport, a job, or a cousin. A single friendship elsewhere changes what school can do to them.',
      'Name the difference between a hard friendship and bullying, and take the second one to the school in writing.',
      'Help them practice exits. Knowing how to leave a group chat or a party is a real skill and it can be rehearsed.',
      'Tell them about your own version of this. Teenagers assume they are uniquely defective, and evidence helps.',
      'Watch what the phone is doing at night, since exclusion is a 24 hour broadcast now rather than something that ends at the school gate.',
    ],
    scripts: [
      { situation: 'They were left out', say: "That's a horrible feeling, and it says nothing about whether you're worth including.", why: 'Names the feeling and separates it from the conclusion they are already drawing about themselves.' },
      { situation: 'You want to fix it', say: "Do you want ideas, or do you want me to just be mad about it with you?", why: 'Asking which one they need is the difference between being useful and being another demand.' },
      { situation: 'They have no friends right now', say: "This is a bad season, not a permanent fact about you. We can find people somewhere else while it passes.", why: 'Gives a time frame and an action, which is what stops a bad month becoming an identity.' },
      { situation: 'They repeated something cruel', say: "I get why you did. Who did it land on, and what do you want to do about that?", why: 'Holds the standard without shaming, which keeps them telling you things they did wrong.' },
    ],
    forYou: [
      'Watching your child be excluded reactivates your own adolescence with startling accuracy. Notice when you are fighting your battle instead of theirs.',
      'You cannot make people like your child, and you can make sure they have one place where they are liked. That is the achievable version.',
    ],
    worthMentioning: [
      'Repeated targeting by the same person or group, which is bullying and needs the school involved in writing.',
      'They are refusing school, or ill every morning and fine by 10.',
      'No friends at all across a long period, alongside low mood.',
      'Anything involving images, threats, or someone older online.',
      'Talk of self harm or of not wanting to be here, which needs same day attention.',
    ],
    strategyTags: ['name-the-feeling', 'connection-first', 'observe-and-note', 'offer-choices'],
    relatedLenses: ['anxiety', 'autism', 'adhd', 'selectiveMutism', 'emotionalRegulation'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'teen-executive-cliff',
    title: 'Middle School Breaks the System That Was Working',
    category: 'independence',
    minMonths: 132,
    maxMonths: 192,
    ageRange: '11 to 15 years',
    summary:
      'One teacher becomes seven. Homework becomes long term projects. The adult who used to catch ' +
      'everything disappears. Plenty of capable children fall off this exact cliff.',
    whatYouMayNotice: [
      'Work that was done and then never handed in.',
      'A project remembered the night before it is due.',
      'Grades dropping in a child whose understanding has not changed at all.',
      'A backpack that is an archaeological site.',
      'Saying it is fine, and meaning it, right up until the report arrives.',
    ],
    whyItHappens: [
      'The organizational demand roughly multiplies at the same moment that the single adult tracking everything is removed. That is a structural change, not a character change.',
      'Executive skills, meaning starting, planning, remembering, and judging time, mature slowly and unevenly, well into the twenties.',
      'When those skills are a genuine difficulty, they often run about 3 years behind same age peers. An 11 year old can be functioning organizationally like an 8 year old while reasoning like a 14 year old.',
      'Long term projects require estimating time, which is the specific skill many of these teenagers do not have.',
      'A bright child can coast on ability for years and hit the wall precisely when the coasting stops working, which makes it look sudden.',
    ],
    whatIsTypical:
      'Extremely common in the first 2 years of middle school, and more pronounced in teenagers with ' +
      'ADHD, autism, anxiety, or a learning difference, including ones identified late.',
    parentStrategies: [
      'Build the system with them, not for them. A system they did not agree to will not survive a week.',
      'Make it external and visible. One calendar, one place, where the work actually happens.',
      'Break long projects into dated steps together, and put the steps in the calendar rather than the deadline.',
      'Body double. Sit nearby doing your own work, since starting is easier with company and it is not babysitting.',
      'Check the online gradebook weekly rather than daily, and hand that check over to them in stages.',
      'Separate capability from output out loud, often. They are drawing conclusions about their intelligence right now.',
      'Ask the school what supports exist. A formal plan is worth requesting in writing if this is persistent.',
      'Expect the system to fail every few months and to need rebuilding. That is maintenance, not failure.',
    ],
    scripts: [
      { situation: 'Work done but not turned in', say: "That's so annoying, you did the hard part. Where does the finished work go so it can't hide?", why: 'Names the real problem, which is a handoff step, and skips a lecture that would not fix it anyway.' },
      { situation: 'A project due tomorrow', say: "Okay. Tonight we salvage. Tomorrow we figure out how we saw it coming earlier.", why: 'Solves the crisis first, since nothing is learnable at 10 at night, and keeps the review alive.' },
      { situation: 'They insist they have it handled', say: "I believe you can. Can we look at it together on Sundays so I stop asking on Tuesdays?", why: 'Trades constant nagging for one agreed checkpoint, which is a deal most teenagers will actually take.' },
      { situation: 'They say they are stupid', say: "You're not. Getting things in is a different skill from understanding them, and it's the one we're working on.", why: 'Splits the 2 things apart, which is the belief that most needs protecting at this age.' },
    ],
    forYou: [
      'This is the age where doing less for them is the goal and doing nothing is not. Scaffolding that comes down slowly is the actual target.',
      'If this is familiar from your own school years, that is worth noticing. These things run in families and it can make your reaction bigger than the moment needs.',
    ],
    worthMentioning: [
      'A persistent gap between how capable they clearly are and what they produce.',
      'It is not improving despite real support at home.',
      'Anxiety or shame about school that is growing rather than settling.',
      'One specific subject is far behind the rest, which can point to a learning difference.',
      'Attention or organization has been a problem in more than one setting for 6 months or longer.',
    ],
    strategyTags: ['visual-schedule', 'break-into-steps', 'checklist', 'body-double', 'timer', 'first-then'],
    relatedLenses: ['executiveFunction', 'adhd', 'learningDifferences', 'gifted', 'anxiety'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'teen-masking-burnout',
    title: 'Holding It Together All Day, Falling Apart All Evening',
    category: 'emotional-regulation',
    minMonths: 120,
    maxMonths: 228,
    ageRange: '10 to 18 years',
    summary:
      'A teacher who says your child is a delight, and a child who cannot speak or move by six in the ' +
      'evening. For a lot of neurodivergent teenagers this is the central fact of their week.',
    whatYouMayNotice: [
      'Glowing school reports alongside a child who is silent, furious, or flat at home.',
      'Shutting down completely after school rather than melting down.',
      'Skills that were reliable dropping away, such as replying to messages or managing hygiene.',
      'Exhaustion that sleep does not fix.',
      'It gets worse across a term and better over school breaks.',
    ],
    whyItHappens: [
      'Masking means suppressing what your body wants to do and performing what the room expects. It works, and it is expensive, and the bill arrives later.',
      'A teenager may be spending most of their attention on eye contact, posture, tone, and reading the room, and the rest of it on the actual lesson.',
      'The social rules multiply enormously in middle and high school at exactly the age adults stop explaining them.',
      'Sustained masking can tip into burnout, meaning a longer collapse where skills genuinely go offline for weeks or months rather than for an evening.',
      'This is a large part of why many autistic and ADHD teenagers, girls especially, are identified late or not at all. They were never a problem in class, so nobody looked.',
    ],
    whatIsTypical:
      'Common in autistic and ADHD teenagers, and in anxious ones. School reporting no concerns is not ' +
      'evidence that school is going well, and it is one of the most misleading signals parents get.',
    parentStrategies: [
      'Build a landing pad. Quiet, food, no questions, no plans, for a solid half hour after school.',
      'Cut demands in the evening rather than adding them, and treat that as policy rather than as giving in.',
      'Protect the things that recharge them, including the special interest and the screen time, rather than using them as leverage.',
      'Watch the term shape. If the collapse deepens week by week, the load is too high and something has to come out.',
      'Let them unmask at home. Stimming, no eye contact, a flat voice, all of it is rest.',
      'Tell the school what you are seeing. A child doing well in class can still be past their limit, and schools genuinely do not know unless you say so.',
      'Take burnout seriously. Pushing through a real burnout lengthens it, and time off that looks like giving up is sometimes the shortest route back.',
    ],
    scripts: [
      { situation: 'They get in the car silent', say: "Nothing needs saying. Food's in the bag.", why: 'Removes both demands, and tells them the silence is allowed rather than something they will be asked about later.' },
      { situation: 'School says everything is fine', say: "At home we're seeing them completely depleted by four. What does the day actually cost them?", why: 'Reframes the question so the school looks at load rather than at behavior, which is where the information is.' },
      { situation: 'They cannot do a thing they normally manage', say: "That one's off the list this week. It'll come back.", why: 'Removes the demand without making it a judgment, which is what stops a skill loss becoming a shame spiral.' },
      { situation: 'They say they are pretending all day', say: "That sounds exhausting, and you shouldn't have to do it here.", why: 'Confirms what it costs and marks home as the place it stops, which is the thing they most need to be true.' },
    ],
    forYou: [
      'A child who saves it all for you is a child who trusts you. It is still relentless, and you are allowed to find it hard.',
      'If school keeps telling you nothing is wrong and your evenings say otherwise, your evenings are the more accurate data.',
    ],
    worthMentioning: [
      'Skills disappearing for weeks rather than for an evening, which points toward burnout rather than tiredness.',
      'School refusal, or long standing illness on school mornings.',
      'Low mood, hopelessness, or withdrawal that lasts more than 2 weeks.',
      'Any mention of self harm or of not wanting to be here, which needs attention the same day.',
      'You suspect there is something unidentified going on. Late identification is extremely common, and an evaluation at 15 is still worth having.',
    ],
    strategyTags: ['quiet-space', 'reduce-demands', 'connection-first', 'co-regulate', 'noise-reduction'],
    relatedLenses: ['autism', 'adhd', 'anxiety', 'sensory', 'emotionalRegulation', 'exploring'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'teen-identity',
    title: 'Trying On Who They Are',
    category: 'independence',
    minMonths: 144,
    maxMonths: 228,
    ageRange: '12 to 18 years',
    summary:
      'New music, new clothes, new opinions, new certainty, and a new version roughly every few months. ' +
      'This is the actual work of adolescence, and how you respond to the drafts affects the final one.',
    whatYouMayNotice: [
      'Big changes in appearance, interests, or the way they talk.',
      'Strong opinions held with total conviction and abandoned without comment.',
      'Testing your beliefs, sometimes by arguing the opposite of whatever you said.',
      'Wanting to be seen as an individual and to be indistinguishable from their friends at the same time.',
      'Real distress if you laugh at any of it.',
    ],
    whyItHappens: [
      'Working out who you are is the core developmental task of these years, and it is done by trying versions out rather than by thinking it through.',
      'Most drafts are temporary, and being taken seriously while they are current is what makes it safe to move on from them.',
      'Arguing is often rehearsal rather than rejection. They are testing whether an idea holds up, and you are the safest available opponent.',
      'Belonging to a group is part of how a self is built, which is why individuality and conformity arrive together and do not feel contradictory to them.',
      'For neurodivergent teenagers this stage often carries an extra question, which is whether to tell people. That decision is theirs, including the timing.',
    ],
    whatIsTypical:
      'Universal, running roughly from 12 through the late teens, and usually settling into ' +
      'something recognizable in the late teens and early twenties.',
    parentStrategies: [
      'Do not mock any of it, ever, including the parts that are objectively funny. Being laughed at here is remembered for decades.',
      'Say yes to the reversible things. Hair, clothes, and room decor cost you nothing and buy you enormous credibility.',
      'Argue with them properly rather than pulling rank. Teenagers can tell the difference and they respect the first one.',
      'Get curious about the interest, even briefly. Learning 2 facts about the thing they love is worth an hour of questions about their feelings.',
      'Keep your values visible and stop selling them. What you do is the argument they will actually weigh.',
      'Let the drafts go without comment. Pointing out that they used to love something is a small humiliation with no upside.',
      'Make it clear that nothing they could tell you about themselves would change how you feel. Say it before it is needed rather than after.',
    ],
    scripts: [
      { situation: 'A change you dislike but which is harmless', say: "Not what I'd pick. It's your hair.", why: 'Honest without a fight, and it keeps your objections credible for the things that actually matter.' },
      { situation: 'They argue a position you find wrong', say: "Make the case. I'll tell you where I think it falls over.", why: 'Treats them as a thinker, which is what they are asking for, and keeps you in the conversation.' },
      { situation: 'They tell you something big about themselves', say: "Thank you for telling me. I love you, and nothing about that changed.", why: 'Short, unambiguous, and finished. Questions can come later, and the first sentence is the one they will remember.' },
      { situation: 'An interest you find baffling', say: "Explain it to me. What makes someone good at it?", why: 'Asks them to be the expert, which is a role teenagers almost never get offered at home.' },
    ],
    forYou: [
      'Some of this will feel like a rejection of you and your values. Most of it is not about you at all, which is oddly hard to accept.',
      'The version you find hardest is usually the one that passes fastest, and how you handled it is what stays.',
    ],
    worthMentioning: [
      'Changes in identity paired with withdrawal, low mood, or secrecy about who they are spending time with.',
      'Distress about their body or themselves that is persistent rather than passing.',
      'They are being harassed for who they are, at school or online.',
      'They ask to talk to someone. Take that at face value and make it happen.',
    ],
    strategyTags: ['connection-first', 'offer-choices', 'wait-time', 'name-the-feeling'],
    relatedLenses: ['autism', 'adhd', 'anxiety', 'gifted', 'exploring'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'teen-online-life',
    title: 'The Phone, the Group Chat, and the Part You Cannot See',
    category: 'social',
    minMonths: 132,
    maxMonths: 228,
    ageRange: '11 to 18 years',
    summary:
      'Their social life now runs 24 hours a day on a device in their pocket. The goal is not ' +
      'to win a war over screen time, it is to stay the person they come to when something goes wrong.',
    whatYouMayNotice: [
      'The phone is the first thing in the morning and the last thing at night.',
      'Mood swinging sharply after a stretch of scrolling.',
      'Panic at the idea of being offline, or of missing a message.',
      'Comparing themselves to people whose lives are edited for a living.',
      'Conversations you are not part of, which is most of them.',
    ],
    whyItHappens: [
      'For this generation online is not separate from social life, it is where most of it happens. Removing it is removing the friendships, not the distraction.',
      'The feeds are built to be hard to leave, by people who are extremely good at their jobs. That is not a failure of willpower at 14.',
      'Exclusion used to end at the school gate. Now it is visible, timestamped, and available all night.',
      'The comparison is against an edited highlight reel, and adolescence is the moment a person is most vulnerable to exactly that comparison.',
      'The genuine risk is not screen time in hours. It is what happens in specific places, with specific people, at night, unsupervised.',
    ],
    whatIsTypical:
      'Universal now. Most teenagers manage it reasonably well most of the time, and almost all of them ' +
      'will encounter something upsetting online at some point.',
    parentStrategies: [
      'Make the deal early and in writing. Phones out of bedrooms at night is the single highest value rule, and it is much easier to set before it is needed.',
      'Promise that you will not confiscate the phone when they bring you a problem. If you do, they will stop bringing you problems, and that is the outcome that actually hurts them.',
      'Decide what is worth attention. Hours matter less than which apps, which people, and what time of night.',
      'Tell them early that an adult asking to keep a secret, move to another app, or send a picture is the signal to come to you, and that they will never be in trouble for it.',
      'Use their own terms. Ask what the drama is, rather than announcing a review.',
      'Model it. A parent on their phone at dinner has no leverage, and teenagers keep score.',
      'Keep one daily stretch device free for everyone, and include yourself in it.',
    ],
    scripts: [
      { situation: 'Setting the rule up front', say: "Phones charge in the kitchen overnight, mine too. That's the deal for all of us.", why: 'Shared rather than imposed, which removes most of the argument before it starts.' },
      { situation: 'They bring you something upsetting', say: "I'm really glad you showed me. You're not in trouble. Let's sort it out.", why: 'The 3 sentences that decide whether they ever show you the next one.' },
      { situation: 'Scrolling has clearly wrecked their mood', say: "You seem worse after that app than before it. Worth noticing?", why: 'An observation rather than a ban, which lets them draw the conclusion and keeps it theirs.' },
      { situation: 'They want an app you do not know', say: "Show me how it works and who's on it, and let's see.", why: 'Makes them the expert and gets you real information, which a flat no never does.' },
    ],
    forYou: [
      'You cannot supervise all of this, and pretending otherwise costs you the relationship that is actually protective.',
      'The most useful safety measure available to you is being the person they tell. Every rule should be checked against whether it protects that.',
    ],
    worthMentioning: [
      'Contact from an adult or an older stranger, or any request for images, which needs action immediately.',
      'Threats, blackmail, or images being shared without consent.',
      'Ongoing targeting by peers online.',
      'Mood, sleep, or eating clearly deteriorating alongside online life.',
      'Content about self harm, suicide, or extreme dieting appearing in their feeds, which is worth raising with a professional.',
    ],
    strategyTags: ['connection-first', 'offer-choices', 'observe-and-note', 'visual-schedule'],
    relatedLenses: ['anxiety', 'adhd', 'autism', 'emotionalRegulation', 'exploring'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'teen-risk-and-peers',
    title: 'Sensible Alone, Reckless in a Group',
    category: 'behavior',
    minMonths: 156,
    maxMonths: 228,
    ageRange: '13 to 18 years',
    summary:
      'A teenager who makes good decisions on their own can make startlingly bad ones with friends ' +
      'watching. That is not a character flaw, it is one of the most consistent findings in the research.',
    whatYouMayNotice: [
      'Good judgment on their own, and much worse judgment in a group.',
      'Doing something they clearly knew was a bad idea, and being unable to explain why.',
      'Underestimating how bad an outcome could be.',
      'Honest surprise at their own behavior afterwards.',
      'Far more willingness to take a risk when an audience is present.',
    ],
    whyItHappens: [
      'The reward system in the adolescent brain is highly active while the braking system is still finishing, and the presence of peers pushes the reward side harder still.',
      'Teenagers do not think they are invulnerable. They weigh the social cost of opting out very heavily, and in the moment that cost feels larger than the physical risk.',
      'Risk taking at this age is not a malfunction. It is what pushes a person to leave home and try things, and it is turned up on purpose.',
      'They plan badly for situations they have never been in, which is most of them, so a rehearsed exit matters more than a warning.',
      'Alcohol, tiredness, and a group together remove what little braking is available.',
    ],
    whatIsTypical:
      'Very common, peaking in the middle teens. Most teenagers take some risks and come out fine, and ' +
      'the goal is reducing the severity of the worst one rather than eliminating all of them.',
    parentStrategies: [
      'Agree a code word or a text that means come and get me, no questions tonight, and honor it completely the first time it is used.',
      'Rehearse exits out loud. Having a sentence ready for the moment is worth more than any lecture about consequences.',
      'Be specific about the small number of things that can end a life, and be relaxed about the rest.',
      'Know where they are and who with, and accept that this is negotiated rather than surveilled at this age.',
      'Debrief without punishing when nothing went badly wrong. The information you get is worth more than the point you would score.',
      'Talk about substances factually and early, since a teenager who thinks you are exaggerating discounts everything you said.',
      'Keep your reaction proportionate. A large reaction to a small thing guarantees you will not hear about the large thing.',
    ],
    scripts: [
      { situation: 'Setting up the safety net', say: "If you ever need out, text me a full stop. I'll come, no questions that night.", why: 'Concrete, deniable to their friends, and it works precisely because the no questions part is real.' },
      { situation: 'Rehearsing an exit', say: "What would you actually say if everyone's getting in that car?", why: 'Practicing the sentence is what makes it available under pressure, which a warning never is.' },
      { situation: 'They did something reckless', say: "Walk me through it. I want to understand it before I react.", why: 'Gets you the truth, which is the thing that makes the next conversation possible.' },
      { situation: 'Talking about drinking', say: "I'd rather you didn't. If you do, here's what actually matters for staying safe.", why: 'Honest about your position and useful anyway, which is what stops them binning the whole conversation.' },
    ],
    forYou: [
      'You cannot prevent all risk, and you can shrink the worst version of it. That is a real goal and it is achievable.',
      'Fear makes parents louder, and louder is what gets you cut out of the loop. Steady is more protective than strict here.',
    ],
    worthMentioning: [
      'Repeated risk taking, or risk taking on their own rather than with a group.',
      'Substance use that is regular rather than occasional, or any use to cope with feelings.',
      'Risky behavior alongside low mood or hopelessness, which is a combination worth taking seriously.',
      'Trouble with the law, or being harmed.',
      'Your instinct says something is genuinely wrong. Ask for help early rather than waiting for proof.',
    ],
    strategyTags: ['connection-first', 'offer-choices', 'observe-and-note', 'name-the-feeling'],
    relatedLenses: ['adhd', 'emotionalRegulation', 'anxiety', 'exploring'],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'teen-mood-and-mental-health',
    title: 'Low Days, and How to Tell When It Is More',
    category: 'emotional-regulation',
    minMonths: 144,
    maxMonths: 228,
    ageRange: '12 to 18 years',
    summary:
      'Moody is normal at this age, which is exactly what makes the real thing hard to spot. Here is ' +
      'the honest line between the two, and what to do when you are not sure.',
    whatYouMayNotice: [
      'Mood that swings, and then mood that stops swinging and just stays low.',
      'Irritability rather than sadness, which is how depression most often shows up in teenagers.',
      'Losing interest in things they used to care about.',
      'Sleeping far more or far less, and eating far more or far less.',
      'Pulling away from friends, not only from you.',
      'Saying they are tired all the time, or that nothing matters.',
    ],
    whyItHappens: [
      'Adolescence genuinely involves big mood shifts, driven by hormones, a rebuilding brain, and chronic sleep debt. Most of it is ordinary.',
      'The difference is duration and reach. Ordinary teenage mood moves. Depression sits still, lasts more than 2 weeks, and takes things with it, including friends, interests, and sleep.',
      'Anxiety and depression frequently arrive together, and in teenagers both often look like anger from the outside.',
      'Neurodivergent teenagers carry a higher risk here, largely because of the daily cost of masking and of not fitting a setting built for someone else.',
      'These conditions respond well to treatment, and earlier is genuinely better, which is the main argument for asking sooner rather than waiting to be sure.',
    ],
    whatIsTypical:
      'Mood swings are typical. 2 weeks or more of persistent low or irritable mood, with withdrawal ' +
      'and loss of interest, is not, and it is common enough that asking about it is unremarkable.',
    parentStrategies: [
      'Ask directly and plainly. Asking a teenager about low mood, including about thoughts of suicide, does not plant the idea, and it does give them permission to answer.',
      'Take the first mention seriously. Do not wait for a second one to confirm it.',
      'Keep the basics steady, since sleep, food, daylight, and movement genuinely move mood, and they are the parts you can help with today.',
      'Stay close without hovering. Shoulder to shoulder time, no agenda, repeated.',
      'Get professional help rather than handling it alone. Start with your pediatrician, who can refer.',
      'Say out loud that this is treatable and that they will not feel like this permanently, because from inside it they cannot see that.',
      'Look after yourself too. You cannot be a steady presence on empty.',
    ],
    scripts: [
      { situation: 'You are worried and want to open it', say: "You've seemed heavy for a while. I'm not going to make it a thing, I just want to know how you're doing underneath.", why: 'Names what you see without an accusation and lowers the stakes of answering honestly.' },
      { situation: 'Asking the direct question', say: "Have you had thoughts about hurting yourself, or about not wanting to be here?", why: 'Plain words, asked calmly. Vagueness here lets a teenager answer a question you did not mean to ask.' },
      { situation: 'They say yes', say: "Thank you for telling me. We're going to get you help, and I'm staying with you.", why: 'Gratitude, action, and presence. No panic, no negotiation, and no leaving it until Monday.' },
      { situation: 'They refuse help', say: "You don't have to like it. We're going anyway, and you can decide what you say when we're there.", why: 'Holds the necessary thing while handing back the control that is genuinely theirs.' },
    ],
    forYou: [
      'If you are frightened right now, that is reasonable, and it is not evidence that you missed something obvious.',
      'In the United States you can call or text 988 for the Suicide and Crisis Lifeline, at any hour, for yourself or about your child.',
    ],
    worthMentioning: [
      'Any talk of suicide, self harm, or not wanting to be here. Call your pediatrician the same day, or 988, and go to an emergency room if there is immediate danger.',
      'Low or irritable mood lasting more than 2 weeks.',
      'Withdrawal from friends and from things they used to enjoy.',
      'Big changes in sleep, appetite, or weight.',
      'Giving away possessions, or saying goodbye in a way that sits wrong with you.',
      'You are unsure. Uncertainty is a reason to ask, not a reason to wait.',
    ],
    strategyTags: ['connection-first', 'name-the-feeling', 'co-regulate', 'observe-and-note'],
    relatedLenses: ['anxiety', 'emotionalRegulation', 'autism', 'adhd', 'ocd', 'exploring'],
  },
];

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

/** One entry by id, or null. */
export function getContentById(id) {
  if (!id) return null;
  return DEVELOPMENT_CONTENT.find((c) => c.id === id) || null;
}

/** Every entry in one category. */
export function getContentByCategory(categoryId) {
  return DEVELOPMENT_CONTENT.filter((c) => c.category === categoryId);
}

/**
 * Entries that apply to a child at a given age in months.
 * Sorted so the most specific age window comes first, because a tighter
 * window means content written closer to where this child actually is.
 */
export function getContentForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return [];
  return DEVELOPMENT_CONTENT.filter((c) => months >= c.minMonths && months < c.maxMonths).sort(
    (a, b) => a.maxMonths - a.minMonths - (b.maxMonths - b.minMonths)
  );
}

/**
 * Entries for a child's age, reordered so anything connected to their
 * active support lenses rises to the top. Nothing is hidden, only
 * reordered, because a parent should still be able to find everything.
 */
export function getContentForChild(months, lensIds = []) {
  const forAge = getContentForAge(months);
  if (!Array.isArray(lensIds) || lensIds.length === 0) return forAge;

  const relevance = (entry) =>
    (entry.relatedLenses || []).filter((l) => lensIds.includes(l)).length;

  return [...forAge].sort((a, b) => relevance(b) - relevance(a));
}

/** Plain text search across titles, summaries, and the notice list. */
export function searchContent(query) {
  if (!query || typeof query !== 'string') return [];
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return DEVELOPMENT_CONTENT.filter((c) => {
    const haystack = [c.title, c.summary, ...(c.whatYouMayNotice || [])].join(' ').toLowerCase();
    return haystack.includes(q);
  });
}

/** Every script across every entry, flattened, with its source attached. */
export function getAllScripts() {
  return DEVELOPMENT_CONTENT.flatMap((entry) =>
    (entry.scripts || []).map((s, i) => ({
      ...s,
      id: `${entry.id}-script-${i}`,
      sourceId: entry.id,
      sourceTitle: entry.title,
      category: entry.category,
      minMonths: entry.minMonths,
      maxMonths: entry.maxMonths,
    }))
  );
}

/** Scripts that fit a child's age, for the featured script card. */
export function getScriptsForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return [];
  return getAllScripts().filter((s) => months >= s.minMonths && months < s.maxMonths);
}

export default DEVELOPMENT_CONTENT;

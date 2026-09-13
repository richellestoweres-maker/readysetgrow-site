/**
 * Ready Set Grow: Neuro Inclusive Support Lenses
 * ------------------------------------------------------------------
 * This is the differentiator, and it is also the part most likely to
 * cause harm if it is built carelessly. Read this header before
 * changing anything in this file.
 *
 * WHAT A LENS IS
 * A lens is a parent saying "this is the kind of support that helps my
 * child". It is not a diagnosis, it is not a label on the child, and
 * turning one on does not mean anything is wrong.
 *
 * THE LANGUAGE RULE
 * The app never says "your child has ADHD". It says "children who
 * struggle with impulse control or attention often benefit from".
 * Every string in this file follows that rule. If you write new
 * content here, keep following it.
 *
 * LENSES STACK
 * A parent may turn on ADHD, sensory, and communication at once. The
 * app should merge their strategies rather than picking one winner.
 *
 * WHAT LENSES DO NOT DO
 * A lens never hides a red flag. Widening a milestone window changes
 * how gently the app phrases things, it never removes the guidance to
 * talk with a pediatrician. Softening that guidance would delay a
 * family getting help, which is the exact opposite of the point.
 * That is why every lens below has suppressesRedFlags set to false and
 * why nothing in the app should ever read it as true.
 *
 * THE UNDERSTANDING BLOCK
 * Every lens carries an "understanding" block. That block exists to
 * answer the question a parent is really asking, which is not "what
 * is the label" but "what is happening inside my child's head, and
 * why does the thing I keep doing not work". It has four parts:
 *   headline   one sentence a parent can hold onto
 *   mind       plain language, no jargon, how this way of thinking works
 *   strengths  what this often comes with, because deficit only
 *              descriptions are both inaccurate and demoralizing
 *   misreadAs  the behavior a parent sees, next to what it usually is
 * The misreadAs pairs are the most important content in this file.
 * A parent who stops reading a behavior as defiance parents
 * differently that same day.
 *
 * OPTIONS AND LEVELS
 * Some lenses carry an "options" list, which is a single choice a
 * parent can make inside that lens, such as an autism support level.
 * Options only change wording and emphasis. They never change whether
 * pediatric guidance appears. A lens with no option selected must
 * still work completely.
 */

export const LENS_DISCLAIMER =
  'Support lenses help Ready Set Grow suggest strategies that many families find useful. ' +
  'They are not a diagnosis and they are not an assessment. If you have questions about your ' +
  "child's development, your pediatrician is the right place to start.";

export const UNDERSTANDING_INTRO =
  'This section is about how your child experiences the world, not about what is wrong with them. ' +
  'Nothing here is a diagnosis. It is here so that the behavior you are seeing makes more sense, ' +
  'because behavior that makes sense is much easier to respond to well.';

/* Groups exist so the toggle list reads as categories rather than as
 * one long alphabetical wall of conditions. Order here is the order
 * the app should display. */
export const LENS_GROUPS = [
  {
    id: 'attention',
    label: 'Attention and focus',
    blurb: 'Holding attention, pausing before acting, and getting started.',
  },
  {
    id: 'communication',
    label: 'Communication and connection',
    blurb: 'How your child takes in language, and how they give it back.',
  },
  {
    id: 'sensoryBody',
    label: 'Senses and body',
    blurb: 'How the world feels, and how their body moves through it.',
  },
  {
    id: 'feelings',
    label: 'Feelings and behavior',
    blurb: 'Big emotions, worry, and what sits underneath hard moments.',
  },
  {
    id: 'learning',
    label: 'Thinking and learning',
    blurb: 'Planning, reading, math, memory, and unusually fast thinking.',
  },
  {
    id: 'development',
    label: 'Development and health',
    blurb: 'Different timelines, early arrivals, and medical complexity.',
  },
  {
    id: 'unsure',
    label: 'Still figuring it out',
    blurb: 'You noticed something. You do not need a name for it yet.',
  },
];

export const SUPPORT_LENSES = [
  /* ================= ATTENTION ================= */
  {
    id: 'adhd',
    group: 'attention',
    label: 'ADHD',
    aka: ['ADD', 'attention deficit', 'inattentive', 'hyperactive'],
    tagline: 'Attention, impulse control, and big energy.',
    description:
      'For children who move a lot, act before thinking, lose track of steps, or find it hard to ' +
      'settle. Strategies focus on movement, shorter steps, and clear structure.',
    framing:
      'Children who find it hard to hold attention or pause before acting often do better with ' +
      'movement built into the day and instructions broken into single steps.',
    note:
      'If you are looking for ADD, this is it. ADD stopped being a separate diagnosis in 2013. ' +
      'What used to be called ADD is now described as ADHD, inattentive presentation, which means ' +
      'attention without the outward hyperactivity. Same child, updated name.',
    options: {
      key: 'presentation',
      label: 'Which fits better day to day?',
      help: 'Optional. This only changes which strategies come first.',
      choices: [
        {
          key: 'inattentive',
          label: 'Mostly attention',
          description:
            'Drifts off mid task, loses things, seems to not hear you, quiet rather than loud. ' +
            'This is what used to be called ADD.',
        },
        {
          key: 'hyperactive',
          label: 'Mostly movement and impulse',
          description:
            'Always in motion, blurts, climbs, interrupts, struggles to wait.',
        },
        {
          key: 'combined',
          label: 'Both',
          description: 'Attention and movement are both in play. This is the most common pattern.',
        },
      ],
    },
    understanding: {
      headline:
        'This is not a shortage of attention. It is attention that will not stay where it is told.',
      mind: [
        'The part of the brain that decides what to pay attention to is doing a harder job here than it does for other children. Your child can focus intensely on something interesting, sometimes for hours, and then be completely unable to focus on something boring. That gap is the thing itself, not proof they could do it if they cared.',
        'Motivation works differently too. Most people can run on "this matters later". A child with ADHD mostly runs on interest, urgency, novelty, and challenge. A reward at the end of the week is nearly invisible to them. A reward in five minutes is real.',
        'Time is the other piece. Many of these children experience time as now and not now, with very little in between. That is why fifteen minutes and an hour feel the same, and why waiting is genuinely uncomfortable rather than merely annoying.',
        'And movement is often regulation, not misbehavior. Plenty of children think better while their body is busy. Asking for stillness can cost them the attention you were trying to get.',
      ],
      strengths: [
        'Deep focus on what interests them, often well past what other children manage.',
        'Fast, unusual connections between ideas.',
        'Energy and enthusiasm that lifts a room.',
        'Strong in a crisis, when urgency finally matches how their brain runs.',
      ],
      misreadAs: [
        {
          looksLike: 'Ignoring you.',
          isOften: 'The instruction arrived while their attention was somewhere else, so it never landed at all.',
        },
        {
          looksLike: 'Lazy, because they will not start.',
          isOften: 'Starting is the hardest part. Once they are in, they often cannot stop.',
        },
        {
          looksLike: 'Not caring about consequences.',
          isOften: 'They cared. The consequence was in the future and the impulse was right now.',
        },
        {
          looksLike: 'Being rude by interrupting.',
          isOften: 'Holding the thought until you finish costs more than they have. Saying it is how they keep it.',
        },
      ],
    },
    emphasizes: ['movement', 'structure', 'transitions', 'executiveFunction', 'impulseControl'],
    strategyTags: ['heavy-work', 'movement-break', 'one-step-directions', 'visual-schedule', 'timer', 'first-then'],
    environmentTips: [
      'Give one instruction at a time rather than a list.',
      'Build movement into the day on purpose, before it is needed.',
      'Use a visual schedule so the next step is visible instead of remembered.',
      'Warn before transitions, at five minutes and again at one.',
      'Get their eyes or their hand before you speak, not their name shouted from another room.',
      'Put the reward close. Later is a concept, now is a feeling.',
    ],
    whenToAsk:
      'Bring it up with your pediatrician if attention or impulses are causing trouble in two or more ' +
      'settings, such as home and school, and it has been going on for six months or more.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },

  /* ================= COMMUNICATION ================= */
  {
    id: 'autism',
    group: 'communication',
    label: 'Autism support',
    aka: ['autistic', 'ASD', 'spectrum'],
    tagline: 'Predictability, communication, and connection.',
    description:
      'For families using autism related supports, whether or not there is a diagnosis. ' +
      'Strategies focus on predictability, clear communication, and respecting how a child plays.',
    framing:
      'Many children do better when the day is predictable, when communication is concrete, and ' +
      'when their own way of playing is joined rather than corrected.',
    note:
      'You may have heard about levels. There are three, not four, and they describe how much ' +
      'support a person needs rather than how autistic they are. Levels can also change with age, ' +
      'setting, and how tired a child is. Picking one here is optional.',
    options: {
      key: 'level',
      label: 'Support level, if one has been discussed',
      help:
        'Optional. These are the three levels used in the DSM 5. They describe support needs, not ' +
        'ability or intelligence, and a child can look like a different level on a different day.',
      choices: [
        {
          key: 'level1',
          label: 'Level 1, requiring support',
          description:
            'Manages much of the day with some help. Social back and forth and switching between ' +
            'activities take real effort, and that effort is often invisible to other people.',
        },
        {
          key: 'level2',
          label: 'Level 2, requiring substantial support',
          description:
            'Needs support in place most of the day. Communication differences are obvious even to ' +
            'people who do not know your child, and changes to routine are hard.',
        },
        {
          key: 'level3',
          label: 'Level 3, requiring very substantial support',
          description:
            'Needs support available throughout the day. Communication may be largely nonspeaking or ' +
            'use very few words, and change can be genuinely distressing.',
        },
        {
          key: 'none',
          label: 'No level, or not sure',
          description: 'Completely fine. Everything in this lens still works.',
        },
      ],
    },
    understanding: {
      headline:
        'Their brain is not a slower version of anyone else. It is running a different operating system, and it is running it well.',
      mind: [
        'A lot of autistic children process the world in detail first and the big picture second. That is why a small change, such as a different cup, can matter enormously. The cup was not a small detail to them. It was part of the structure holding the morning together.',
        'Prediction is the other big one. Most brains quietly guess what happens next all day long, which is what makes the world feel safe. When prediction is harder, the world is genuinely less safe, and routine is how your child builds the safety back. Routine is not stubbornness. It is load bearing.',
        'Social rules are learned rather than absorbed, which takes real energy. Many autistic children spend all day working out what other people expect and then fall apart at home, where it is finally safe to stop. That after school collapse is a sign of trust, even though it does not feel like one.',
        'Stimming, such as rocking, flapping, humming, or spinning, is regulation. It is the body turning the volume down. Unless it is hurting them, it is helping, and stopping it usually just removes a tool.',
        'And a flat face is not a flat feeling. Many autistic people feel things very intensely and show it differently or later. Do not read the face for the feeling.',
      ],
      strengths: [
        'Deep, sustained expertise in the things they love.',
        'Honesty and a real sense of fairness.',
        'Noticing detail and pattern that most people walk straight past.',
        'Loyalty to the people who let them be themselves.',
      ],
      misreadAs: [
        {
          looksLike: 'Ignoring you when you call their name.',
          isOften: 'Deep focus, or the sound reaching them without the meaning attached yet. Give a beat longer.',
        },
        {
          looksLike: 'A meltdown over something tiny.',
          isOften: 'The last straw on a day of accumulated load. It was rarely about the last thing.',
        },
        {
          looksLike: 'Rude or blunt.',
          isOften: 'Accurate. Social padding is a separate skill, and it can be taught later without shame.',
        },
        {
          looksLike: 'Not interested in other children.',
          isOften: 'Interested, and unsure how to get in. Parallel play alongside someone is still connection.',
        },
        {
          looksLike: 'Fine at school, impossible at home.',
          isOften: 'Holding it together all day and releasing where it is safe.',
        },
      ],
    },
    emphasizes: ['predictability', 'communication', 'regulation', 'play', 'transitions'],
    strategyTags: ['visual-schedule', 'first-then', 'transition-warning', 'concrete-language', 'join-their-play', 'quiet-space'],
    environmentTips: [
      'Say what will happen next, not just what to stop doing.',
      'Use concrete language. "Feet on the floor" lands better than "be careful".',
      'Join the play your child is already doing before trying to redirect it.',
      'Keep routines steady, and preview changes to them ahead of time.',
      'Let stimming be, unless it is causing harm.',
      'Build a landing pad after school. Quiet, food, no questions for twenty minutes.',
    ],
    whenToAsk:
      'An evaluation is worth asking about at any age, and earlier means earlier support. You do not ' +
      'need to be certain to ask, and you can ask your pediatrician for a referral directly.',
    milestoneFlexMonths: 3,
    suppressesRedFlags: false,
  },
  {
    id: 'pda',
    group: 'communication',
    label: 'Demand avoidance',
    aka: ['PDA', 'pathological demand avoidance', 'persistent drive for autonomy'],
    tagline: 'When any request, even a welcome one, triggers refusal.',
    description:
      'For children who resist everyday demands far beyond ordinary defiance, including things they ' +
      'actually want to do. Strategies focus on lowering the demand rather than raising the pressure.',
    framing:
      'For some children a direct request itself sets off alarm, not the task inside it. Softening ' +
      'how something is asked often works when nothing else does.',
    note:
      'This one is not a formal diagnosis. It does not appear in the DSM 5 and you cannot be ' +
      'diagnosed with it on its own. It is a described profile, most often alongside autism, and ' +
      'some clinicians will note a demand avoidant profile. It is included here because parents find ' +
      'the strategies useful, not because it is settled medicine.',
    understanding: {
      headline:
        'This is an anxiety response wearing a defiance costume. The refusal is protection, not power.',
      mind: [
        'For most children, refusing a request is about the request. Here it is about control. Losing control over what happens next feels genuinely threatening, so the body says no before the child has weighed anything up.',
        'The giveaway is that it happens with things they want. A child who has been begging for ice cream can refuse the moment you say "come and get your ice cream". That is not manipulation. The sentence turned a pleasure into a demand.',
        'Escalating pressure makes this worse, reliably. Every firmer repetition raises the threat and lowers the odds. This is the one profile where the usual advice about following through immediately tends to backfire.',
        'What works is making the demand smaller, indirect, or shared. Not lower standards, just a different doorway into the same room.',
      ],
      strengths: [
        'Strong sense of fairness and a real intolerance for arbitrary rules.',
        'Imaginative and often skilled at role play.',
        'Socially perceptive, frequently reading adults very accurately.',
        'Genuinely capable when they are a collaborator rather than a recipient.',
      ],
      misreadAs: [
        {
          looksLike: 'Deliberate defiance.',
          isOften: 'A threat response. The nervous system said no before your child did.',
        },
        {
          looksLike: 'Manipulative, because they refuse things they wanted.',
          isOften: 'The wanting was real. Being told to do it is what changed.',
        },
        {
          looksLike: 'Spoiled, and needing a firmer hand.',
          isOften: 'The opposite. Firmer raises the alarm and guarantees the fight.',
        },
      ],
    },
    emphasizes: ['autonomy', 'anxiety', 'language', 'connection'],
    strategyTags: ['offer-choices', 'declarative-language', 'reduce-demands', 'connection-first', 'playful-framing', 'quiet-space'],
    environmentTips: [
      'Swap commands for observations. "Those shoes are still by the door" instead of "put your shoes on".',
      'Use could, might, and I wonder, rather than need to and have to.',
      'Offer real choices, including the order things happen in.',
      'Make it a team problem. "How are we going to get out by eight?"',
      'Drop the audience. No spectators, no standing over them.',
      'Decide in advance which demands are worth it, and let the rest go for today.',
    ],
    whenToAsk:
      'If refusal is taking over daily life, an autism or anxiety evaluation is the practical route, ' +
      'since demand avoidance is not assessed on its own.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },
  {
    id: 'communication',
    group: 'communication',
    label: 'Communication',
    tagline: 'Getting their message across.',
    description:
      'For children who understand more than they can say, use few words, or get frustrated when ' +
      'they are not understood. Strategies focus on giving them more ways to communicate.',
    framing:
      'When a child cannot get their message across, frustration usually shows up as behavior. ' +
      'Adding ways to communicate often reduces the behavior on its own.',
    understanding: {
      headline: 'The words going in and the words coming out are two different systems, and they can be very far apart.',
      mind: [
        'Understanding language almost always runs ahead of producing it. Your child very likely knows far more than they can show you, which means talking to them at their real level matters, not at the level of their speech.',
        'When the message cannot get out, the feeling still has to go somewhere. It usually arrives as a scream, a grab, or a hit. That is communication too, just the only channel currently open.',
        'Every extra channel you add, such as pointing, signs, or pictures, reduces the pressure on speech. It does not delay talking. Children who are given other ways to communicate tend to talk more, not less.',
      ],
      strengths: [
        'Often highly observant, since watching carries the load that words cannot.',
        'Persistent at making themselves understood.',
        'Frequently strong at gesture and expression.',
      ],
      misreadAs: [
        {
          looksLike: 'Tantrums out of nowhere.',
          isOften: 'A message that had no other way out.',
        },
        {
          looksLike: 'Not understanding you.',
          isOften: 'Understanding fully and unable to answer.',
        },
        {
          looksLike: 'Being lazy by pointing instead of asking.',
          isOften: 'Using the channel that works. Give the word, accept the point.',
        },
      ],
    },
    emphasizes: ['language', 'frustration', 'choices', 'modeling'],
    strategyTags: ['sign-language', 'offer-choices', 'model-language', 'wait-time', 'picture-cards', 'narrate'],
    environmentTips: [
      'Offer two choices instead of an open question.',
      'Wait longer than feels natural after asking something.',
      'Say the word you want back, rather than asking them to say it.',
      'Accept pointing, signs, and sounds as real communication.',
    ],
    whenToAsk:
      'You can request a speech and language evaluation at any age without a referral in most places, ' +
      'and early intervention is free in the United States before age three.',
    milestoneFlexMonths: 3,
    suppressesRedFlags: false,
  },
  {
    id: 'speech',
    group: 'communication',
    label: 'Speech and language',
    tagline: 'Sounds, words, and being understood.',
    description:
      'For children working on how speech sounds, on how many words they use, or on being ' +
      'understood by people outside the family.',
    framing:
      'Speech and language develop on a wide range. Building in more chances to talk, and more ' +
      'chances to be understood, supports that development.',
    understanding: {
      headline: 'Speech is a physical skill. Language is a thinking skill. A child can need help with either one alone.',
      mind: [
        'Making a sound correctly takes precise coordination of lips, tongue, jaw, and breath. Some children know exactly which word they want and their mouth cannot yet build it. Correcting them does not add coordination, practice does.',
        'A useful yardstick for strangers understanding your child is roughly half at age two, three quarters at age three, and nearly all at age four. Family members are terrible judges here, because you have learned to translate without noticing.',
        'Being asked to say it again, repeatedly, is what teaches children to stop talking. Reply to the meaning first and model the correct version inside your reply.',
      ],
      strengths: [
        'Often strong at getting meaning across in other ways.',
        'Frequently excellent listeners.',
        'Motivated, because they usually have plenty to say.',
      ],
      misreadAs: [
        {
          looksLike: 'Shy.',
          isOften: 'Avoiding the words that come out wrong.',
        },
        {
          looksLike: 'Behind on everything.',
          isOften: 'Behind on one channel. Thinking, play, and understanding are often right on track.',
        },
      ],
    },
    emphasizes: ['language', 'reading', 'modeling', 'confidence'],
    strategyTags: ['model-language', 'expand-sentences', 'wait-time', 'read-aloud', 'narrate', 'rhyme-and-song'],
    environmentTips: [
      'Repeat back what they said with one more word added.',
      'Read the same book often, familiarity builds language.',
      'Narrate what you are doing during ordinary tasks.',
      'Do not correct the sound, just say the word again correctly in your reply.',
    ],
    whenToAsk:
      'Ask about a hearing check first, every time, before a speech evaluation. Hearing is the most ' +
      'common fixable cause and it is the cheapest thing to rule out.',
    milestoneFlexMonths: 3,
    suppressesRedFlags: false,
  },
  {
    id: 'selectiveMutism',
    group: 'communication',
    label: 'Talks at home, not elsewhere',
    aka: ['selective mutism', 'situational mutism'],
    tagline: 'Chatty in one place, silent in another.',
    description:
      'For children who speak freely at home and cannot speak at school, with relatives, or in ' +
      'public. Strategies focus on removing pressure to speak and building comfort first.',
    framing:
      'Some children lose access to speech in specific settings. Pressure to talk reliably makes it ' +
      'worse, and lowering the stakes is what tends to open it back up.',
    understanding: {
      headline: 'They are not choosing not to speak. In that moment, speaking is not available to them.',
      mind: [
        'This is an anxiety response, not a stubbornness problem. The word selective is misleading and it has cost a lot of children a lot of unfair pressure. Nothing is being selected.',
        'Freezing is the body doing something automatic. Attention lands on them, the throat closes, and no amount of encouragement reopens it. A room full of adults waiting for a word makes it far less likely, not more.',
        'It usually shows up between age two and five, often when a child starts school and the gap between home and outside becomes obvious. It rarely resolves by itself with time alone, and it responds well to the right support.',
        'Progress goes in order. Comfortable in the room, then a nod, then a whisper to one person, then a word. Skipping steps costs you the ones you already had.',
      ],
      strengths: [
        'Often highly observant and unusually good at reading a room.',
        'Warm, talkative, and funny where they feel safe.',
        'Thoughtful, since the listening hours add up.',
      ],
      misreadAs: [
        {
          looksLike: 'Rude for not saying hello.',
          isOften: 'Frozen. Prompting in front of people raises the cost of the next attempt.',
        },
        {
          looksLike: 'Just shy, and something they will grow out of.',
          isOften: 'An anxiety response that usually needs active support to shift.',
        },
        {
          looksLike: 'Being difficult on purpose at school only.',
          isOften: 'Speech being available at home and not there. Both are real.',
        },
      ],
    },
    emphasizes: ['anxiety', 'pressure', 'school', 'connection'],
    strategyTags: ['reduce-demands', 'wait-time', 'offer-choices', 'connection-first', 'playful-framing', 'observe-and-note'],
    environmentTips: [
      'Take the pressure off. Answer for them rather than leaving a silence for them to fill.',
      'Tell relatives and teachers in advance not to prompt, praise, or comment on speaking.',
      'Let them warm up sideways, through play or a shared activity, rather than through conversation.',
      'Count nodding, pointing, and whispering as real progress.',
      'Do not reward speaking with a fuss, since the attention is the hard part.',
    ],
    whenToAsk:
      'If it has lasted more than a month and is affecting school, ask your pediatrician about a ' +
      'referral. This responds well to treatment and waiting it out is the least effective plan.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },
  {
    id: 'auditoryProcessing',
    group: 'communication',
    label: 'Listening and processing',
    aka: ['auditory processing', 'APD', 'processing speed'],
    tagline: 'Hearing fine, and still not catching it.',
    description:
      'For children who pass hearing tests but lose what was said, especially in noise or when ' +
      'instructions are long. Strategies focus on fewer words, more time, and less background sound.',
    framing:
      'Hearing a sound and making sense of it are two different jobs. Some children need the second ' +
      'one to go slower or quieter than it usually does.',
    understanding: {
      headline: 'The sound arrives. The meaning arrives late, and by then you have said three more things.',
      mind: [
        'Think of it as buffering. The words come in, and unpacking them takes an extra beat. If you keep talking during that beat, the new sentence lands on top of the one still being unpacked, and both are lost.',
        'Background noise costs far more here than it does for other people. A classroom, a busy kitchen, or a car with music can make speech genuinely unavailable, even though your child can hear it perfectly.',
        'This is why "what?" often comes out before they have finished working it out, and why the answer sometimes arrives right after you have repeated yourself. Give the pause before repeating.',
        'It is also exhausting. Following conversation all day while running a slower decoder uses energy that other children spend elsewhere.',
      ],
      strengths: [
        'Often strong visual learners, since watching is more reliable than listening.',
        'Good at working things out from context.',
        'Patient with other people who need things repeated.',
      ],
      misreadAs: [
        {
          looksLike: 'Not listening.',
          isOften: 'Still processing the first half while the second half went by.',
        },
        {
          looksLike: 'Only doing the last thing you asked.',
          isOften: 'The last thing is the only one that survived. Give one at a time.',
        },
        {
          looksLike: 'Daydreaming in class.',
          isOften: 'Opting out after the noise made following impossible.',
        },
      ],
    },
    emphasizes: ['language', 'environment', 'school', 'structure'],
    strategyTags: ['one-step-directions', 'wait-time', 'noise-reduction', 'visual-schedule', 'checklist', 'concrete-language'],
    environmentTips: [
      'Get their attention first, then speak. Not at the same time.',
      'Use fewer words, and pause instead of rephrasing.',
      'Turn off background sound during anything that matters.',
      'Back it up visually. Written, drawn, or pointed at.',
      'Ask them to tell you the plan back, rather than asking if they understood.',
    ],
    whenToAsk:
      'Start with a full hearing test. Formal auditory processing testing is usually done from around ' +
      'age seven, since younger results are unreliable.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },

  /* ================= SENSES AND BODY ================= */
  {
    id: 'sensory',
    group: 'sensoryBody',
    label: 'Sensory',
    tagline: 'How the world feels to them.',
    description:
      'For children who seek out or avoid certain sounds, textures, lights, tastes, or movement. ' +
      'Strategies focus on regulating input before behavior escalates.',
    framing:
      'Some children take in sensory information more intensely, or need more of it than others. ' +
      'Meeting that need on purpose usually works better than waiting for a meltdown.',
    understanding: {
      headline: 'Their volume dials are set differently, and they cannot turn them down by deciding to.',
      mind: [
        'Everyone filters sensory information constantly without noticing. When that filter runs differently, a tag in a shirt does not fade into the background, it keeps shouting all day. The complaint is accurate. The sensation really is that loud.',
        'There are two directions, and most children are a mix. Seeking means needing more input, which looks like crashing, spinning, chewing, and touching everything. Avoiding means needing less, which looks like covering ears, refusing textures, and melting down in busy rooms. The same child can seek movement and avoid sound.',
        'Giving the input on purpose, before it is needed, works far better than waiting. Heavy work, meaning pushing, carrying, climbing, or squeezing, is the single most useful tool, because it calms a seeking body and organizes an overwhelmed one.',
        'Food refusal is frequently sensory rather than behavioral. Texture, smell, and temperature are doing the deciding, and hunger does not override them.',
      ],
      strengths: [
        'Notice detail that other people miss entirely.',
        'Often deeply appreciative of the sensory things they love.',
        'Physically capable and adventurous, when seeking movement.',
      ],
      misreadAs: [
        {
          looksLike: 'Being dramatic about a shirt.',
          isOften: 'A real and continuous sensation you cannot feel.',
        },
        {
          looksLike: 'Hyperactive.',
          isOften: 'A body hunting for the input it needs to settle.',
        },
        {
          looksLike: 'Picky eating.',
          isOften: 'Texture or smell being genuinely intolerable rather than disliked.',
        },
        {
          looksLike: 'A meltdown at a birthday party.',
          isOften: 'Two hours of noise, light, and people with nowhere to put it.',
        },
      ],
    },
    emphasizes: ['regulation', 'environment', 'transitions', 'clothing', 'food'],
    strategyTags: ['heavy-work', 'quiet-space', 'deep-pressure', 'sensory-bin', 'noise-reduction', 'movement-break'],
    environmentTips: [
      'Offer a quiet space that is a choice, not a punishment.',
      'Try heavy work such as pushing, carrying, or climbing before hard transitions.',
      'Notice which sense is involved before deciding what to change.',
      'Reduce one thing at a time, such as sound or light, rather than everything at once.',
      'Plan the exit before you arrive anywhere loud.',
    ],
    whenToAsk:
      'An occupational therapist is the right professional here. Ask your pediatrician for a referral ' +
      'if sensory needs are limiting eating, sleeping, dressing, or school.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },
  {
    id: 'motor',
    group: 'sensoryBody',
    label: 'Motor development',
    aka: ['dyspraxia', 'coordination', 'fine motor', 'gross motor'],
    tagline: 'Moving, balancing, and using their hands.',
    description:
      'For children working on gross motor skills such as balance and coordination, or fine motor ' +
      'skills such as holding a pencil, using utensils, or fastening clothes.',
    framing:
      'Motor skills build on each other. Practice usually works better woven into play than ' +
      'practiced as a drill.',
    understanding: {
      headline: 'Planning the movement is the hard part, not the muscles.',
      mind: [
        'Most of what looks like clumsiness is a planning job. The brain has to sequence a movement before the body performs it, and when that sequencing is harder, every new physical skill takes many more repetitions than it takes other children.',
        'Skills that are automatic for other children stay effortful here for longer. Doing up a coat while listening to you is two tasks, and one of them will drop.',
        'This costs confidence quickly, because motor skills are the most visible ones in a playground. Children often avoid the activity rather than risk looking foolish, which removes the practice they needed.',
        'Core strength underpins everything, including sitting still and handwriting. Climbing and carrying build the thing that a chair demands.',
      ],
      strengths: [
        'Determined, since nothing physical has come free.',
        'Often verbally strong, having leaned on words rather than physicality.',
        'Empathetic with other children who find things hard.',
      ],
      misreadAs: [
        {
          looksLike: 'Not trying at sports.',
          isOften: 'Avoiding public failure. Practice privately first.',
        },
        {
          looksLike: 'Messy handwriting from carelessness.',
          isOften: 'Every letter costing full attention, leaving none for neatness or spelling.',
        },
        {
          looksLike: 'Fidgeting in a chair.',
          isOften: 'A core working hard just to hold the position.',
        },
      ],
    },
    emphasizes: ['grossMotor', 'fineMotor', 'selfCare', 'play'],
    strategyTags: ['heavy-work', 'obstacle-course', 'fine-motor-play', 'break-into-steps', 'adaptive-tools'],
    environmentTips: [
      'Put motor practice inside play rather than making it an exercise.',
      'Let them do the last step of a task themselves, then the last two.',
      'Try bigger tools first, such as chunky crayons, before smaller ones.',
      'Climbing, pushing, and carrying build the core strength that sitting still needs.',
      'Practice new physical skills privately before they are performed in front of other children.',
    ],
    whenToAsk:
      'Occupational therapy covers fine motor and daily living skills, physical therapy covers gross ' +
      'motor. Your pediatrician can point you to the right one.',
    milestoneFlexMonths: 3,
    suppressesRedFlags: false,
  },
  {
    id: 'tics',
    group: 'sensoryBody',
    label: 'Tics',
    aka: ['Tourette', 'tic disorder', 'twitches'],
    tagline: 'Movements and sounds that arrive on their own.',
    description:
      'For children with repeated movements or sounds that are hard to hold back. Strategies focus ' +
      'on reducing attention and pressure rather than on stopping the tic.',
    framing:
      'Tics are involuntary. Attention, stress, and being asked to stop all tend to increase them, so ' +
      'the most useful thing a family can do is lower the temperature around them.',
    understanding: {
      headline: 'A tic is closer to a sneeze than to a habit, and watching for it makes it more likely.',
      mind: [
        'Most tics are preceded by an urge, a building physical pressure that only the tic relieves. Older children can describe it. Holding a tic back is possible for a while and it takes effort, and the backlog usually arrives later, often at home.',
        'That is why many children tic hardly at all during school and enormously the moment they walk in the door. It looks like control being switched on and off. It is really a cost being paid later.',
        'Tics rise and fall in waves, and they often change form. A new tic replacing an old one is normal and not a sign that something is getting worse.',
        'Stress, excitement, tiredness, and being watched all raise them. Calm attention paid elsewhere lowers them. Telling a child to stop does the opposite of what it intends.',
      ],
      strengths: [
        'Often develop real self awareness, from having had to notice their own body closely.',
        'Frequently resilient about being visibly different.',
        'Creative and quick, which shows up in plenty of the research.',
      ],
      misreadAs: [
        {
          looksLike: 'Doing it for attention.',
          isOften: 'Involuntary. Attention is what makes it worse, not what it is seeking.',
        },
        {
          looksLike: 'Able to stop, since they stop at school.',
          isOften: 'Suppressed all day and released where it is safe.',
        },
        {
          looksLike: 'A new bad habit forming.',
          isOften: 'A tic changing shape, which is a normal part of how they behave.',
        },
      ],
    },
    emphasizes: ['regulation', 'stress', 'school', 'connection'],
    strategyTags: ['connection-first', 'quiet-space', 'observe-and-note', 'reduce-demands', 'movement-break'],
    environmentTips: [
      'Do not mention it in the moment. No looks, no counting, no reminding.',
      'Keep sleep steady, since tiredness raises tics reliably.',
      'Let the after school release happen without comment.',
      'Tell the school so that they are not treated as disruptive on purpose.',
      'Keep notes on what rises before a wave, because it is usually stress you can partly remove.',
    ],
    whenToAsk:
      'Talk with your pediatrician if tics are causing pain, interfering with school, or come with ' +
      'sudden dramatic onset. There are effective behavioral treatments.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },

  /* ================= FEELINGS AND BEHAVIOR ================= */
  {
    id: 'emotionalRegulation',
    group: 'feelings',
    label: 'Emotional regulation',
    tagline: 'Big feelings, and what to do with them.',
    description:
      'For children whose feelings arrive fast and large, who take a long time to come back down, ' +
      'or who fall apart at transitions and endings.',
    framing:
      'Regulation is a skill that develops over years, and it develops through being regulated ' +
      'with, not through being told to calm down.',
    understanding: {
      headline: 'During a meltdown, the thinking part of their brain is offline. Reasoning with it is talking to a room nobody is in.',
      mind: [
        'Feelings arrive in the fast part of the brain and get managed by the slow part. In children the slow part is still being built, and it is not finished until well into their twenties. A four year old with no brakes is not failing. The brakes are not installed yet.',
        'A meltdown and a tantrum are different things. A tantrum has a goal and stops when the goal is met or clearly lost. A meltdown is a system overload, and it has to run its course. Consequences applied during a meltdown teach nothing, because nothing is going in.',
        'Children borrow calm before they make their own. Your steady voice and slow breathing are doing more work than any of your words. This is also why your own regulation is not a luxury item.',
        'The teaching happens afterwards, once the storm has passed and the thinking brain is back. Same day is fine. Same minute is wasted.',
      ],
      strengths: [
        'Feel joy at the same volume they feel everything else.',
        'Empathetic, often noticing the feelings of other people early.',
        'Passionate and wholehearted about what they care about.',
      ],
      misreadAs: [
        {
          looksLike: 'Manipulative crying.',
          isOften: 'A nervous system past its limit. Look at what came before, not at the trigger.',
        },
        {
          looksLike: 'Overreacting to something small.',
          isOften: 'The small thing arriving last, on top of everything else that day.',
        },
        {
          looksLike: 'Refusing to calm down on purpose.',
          isOften: 'Not yet able to. Coming down takes far longer than going up.',
        },
      ],
    },
    emphasizes: ['regulation', 'transitions', 'connection', 'scripts'],
    strategyTags: ['co-regulate', 'name-the-feeling', 'transition-warning', 'quiet-space', 'breathing-game', 'connection-first'],
    environmentTips: [
      'Get calm yourself first. A child cannot borrow calm you do not have.',
      'Name the feeling before solving the problem.',
      'Handle the teaching part after the storm, not during it.',
      'Warn before endings, because endings are the hardest transition.',
      'Check food and sleep before you look for a psychological cause.',
    ],
    whenToAsk:
      'Worth raising with your pediatrician if outbursts happen most days past age five, involve harm ' +
      'to themselves or others, or are getting more frequent rather than less.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },
  {
    id: 'anxiety',
    group: 'feelings',
    label: 'Anxiety',
    aka: ['worry', 'separation anxiety', 'panic'],
    tagline: 'Worry that will not switch off.',
    description:
      'For children who worry a lot, ask the same reassuring question repeatedly, avoid new things, ' +
      'or complain of stomachaches before school. Strategies focus on building tolerance rather than ' +
      'removing every worry.',
    framing:
      'Anxiety asks a family to make it go away, and the things that make it go away fastest are ' +
      'usually the things that make it bigger tomorrow.',
    understanding: {
      headline: 'Anxiety is a smoke alarm going off when there is no fire, and reassurance is the battery.',
      mind: [
        'The alarm system is doing its job too eagerly. Your child is not choosing to worry and they usually know the worry is unreasonable, which is part of what makes it so frustrating for them.',
        'It very often shows up in the body first. Stomachaches, headaches, and needing the bathroom before school are real physical sensations, not excuses. Believing the stomachache and still going is the move.',
        'Here is the hard part. Answering the same question for the tenth time brings relief for about a minute and teaches the brain that it needed you to feel safe. Avoidance works the same way. Every time a child skips the thing, the fear of it grows.',
        'What builds real confidence is doing the thing while afraid, in steps small enough to succeed at. Confidence follows the action. It does not arrive first and it cannot be talked into existence.',
      ],
      strengths: [
        'Conscientious, prepared, and thoughtful about consequences.',
        'Empathetic, often reading distress in others quickly.',
        'Careful in genuinely risky situations.',
      ],
      misreadAs: [
        {
          looksLike: 'Attention seeking with constant questions.',
          isOften: 'Seeking relief. The question is a compulsion, not curiosity.',
        },
        {
          looksLike: 'Defiance about going to school.',
          isOften: 'Avoidance. The refusal is where the fear became too big to carry.',
        },
        {
          looksLike: 'Faking a stomachache.',
          isOften: 'A real stomachache. Anxiety genuinely lives in the gut.',
        },
        {
          looksLike: 'Anger and aggression.',
          isOften: 'Anxiety in a child who cannot yet name it. Fight is one of the options.',
        },
      ],
    },
    emphasizes: ['regulation', 'avoidance', 'school', 'sleep', 'connection'],
    strategyTags: ['name-the-feeling', 'co-regulate', 'break-into-steps', 'breathing-game', 'connection-first', 'reduce-demands'],
    environmentTips: [
      'Answer a worry question once, well. After that, name the pattern kindly instead of answering again.',
      'Say that you believe they can handle it, rather than saying nothing bad will happen.',
      'Break the scary thing into steps and start with one they can win.',
      'Keep bedtime predictable, because worry gets loudest in the quiet.',
      'Do not remove the thing they fear. Shrink it.',
      'Watch your own worrying out loud, since children calibrate to it.',
    ],
    whenToAsk:
      'Worth a conversation with your pediatrician if worry is stopping school, sleep, eating, or ' +
      'friendships. Anxiety in children responds very well to treatment, especially early.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },
  {
    id: 'ocd',
    group: 'feelings',
    label: 'OCD',
    aka: ['obsessive compulsive', 'rituals', 'intrusive thoughts'],
    tagline: 'Thoughts that stick, and rituals that promise relief.',
    description:
      'For children with unwanted thoughts that will not leave, and behaviors they feel they have to ' +
      'do in response. Strategies focus on supporting the child while slowly stepping back from the ' +
      'rituals the whole family has been pulled into.',
    framing:
      'OCD works as a pair. An obsession creates distress and a compulsion relieves it briefly, which ' +
      'teaches the brain to run the loop again. Families almost always get recruited into the ' +
      'compulsion, usually without realizing.',
    understanding: {
      headline: 'The ritual is not the problem to solve. It is the solution your child found, and it stops working a little more each time.',
      mind: [
        'An obsession is an unwanted thought, image, or urge that arrives without warning and causes real distress. Children rarely describe them as thoughts. Younger children more often show fear about harm coming to you, checking doors and windows, or needing things to feel just right.',
        'A compulsion is whatever brings the distress down. Washing, checking, counting, repeating, asking, redoing. The relief is real and it is brief, and the brain records that the ritual was necessary. That is the engine.',
        'The part almost nobody warns families about is accommodation. Answering the question again, doing the extra rinse, waiting while they redo the stairs, avoiding the trigger word. Every accommodation is kind in the moment and feeds the loop. Research on this is clear, and most caregivers have no idea how much they are doing until they count it.',
        'Stepping back from accommodation works best slowly, planned in advance with your child, and ideally with a therapist trained in exposure and response prevention. Going cold turkey on a Tuesday out of frustration is not the approach.',
        'One more thing that matters. Intrusive thoughts are often violent or frightening or taboo, and they horrify the person having them. A child terrified by their own thought is not dangerous. They are distressed, and the distress is the evidence that it is not what they want.',
      ],
      strengths: [
        'Conscientious and highly responsible.',
        'Detail oriented and thorough.',
        'Deeply moral, which is part of why the intrusive thoughts land so hard.',
      ],
      misreadAs: [
        {
          looksLike: 'Being fussy or controlling.',
          isOften: 'An attempt to make an unbearable feeling stop.',
        },
        {
          looksLike: 'Deliberately slow at bedtime.',
          isOften: 'A ritual that has to be completed correctly before they can stop.',
        },
        {
          looksLike: 'A phase of superstition.',
          isOften: 'Worth watching, if it is causing distress or eating more than an hour a day.',
        },
        {
          looksLike: 'A rage out of nowhere when a routine is interrupted.',
          isOften: 'The ritual being blocked, which leaves the distress with nowhere to go.',
        },
      ],
    },
    emphasizes: ['anxiety', 'rituals', 'accommodation', 'family'],
    strategyTags: ['name-the-feeling', 'observe-and-note', 'co-regulate', 'break-into-steps', 'connection-first'],
    environmentTips: [
      'Give the pattern a name your child chooses, so you are both on one side against it.',
      'Notice what your family already does to keep the peace. That is accommodation, and it is the map.',
      'Reduce one accommodation at a time, agreed in advance, never as a surprise.',
      'Praise the effort of resisting, not whether the resisting worked.',
      'Do not argue with the content of the thought. Arguing is reassurance in a different coat.',
      'Get a therapist who names exposure and response prevention specifically, since general talk therapy can make OCD worse.',
    ],
    whenToAsk:
      'Raise it with your pediatrician if rituals take more than an hour a day, cause distress, or are ' +
      'shaping the family schedule. Ask specifically for someone who treats childhood OCD.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },
  {
    id: 'bigChanges',
    group: 'feelings',
    label: 'Big changes',
    aka: ['transition', 'move', 'loss', 'hospital', 'new home'],
    tagline: 'Something large happened, and it is showing up sideways.',
    description:
      'For families going through a move, a separation, a loss, a hospital stay, a new placement, or ' +
      'any other large change. Strategies focus on predictability and connection while everything ' +
      'else is uncertain.',
    framing:
      'Children rarely tell you they are struggling with a change. It shows up in sleep, appetite, ' +
      'behavior, and in skills that seemed settled coming undone for a while.',
    understanding: {
      headline: 'Going backwards for a while is how children handle change. It is not a loss of progress.',
      mind: [
        'When the world becomes unpredictable, children spend energy on safety rather than on growth. Skills that were new and effortful are the first to go, which is why potty training, sleeping alone, and independent play often wobble right when you need them most.',
        'Younger children do not have the words, so the feeling arrives as behavior. Clinginess, aggression, night waking, and stomachaches are all reasonable translations of I do not know what is happening.',
        'Predictability is the medicine. You cannot make the big thing certain, and you can make breakfast, bath, and bedtime completely certain. Small reliable structures carry a lot of weight during large unreliable periods.',
        'Honest, simple, age appropriate information helps more than protection does. Children fill silence with something worse, and often with a version where it is their fault.',
      ],
      strengths: [
        'Adaptable over time, once the ground is steady again.',
        'Often more empathetic to other children going through hard things.',
        'Close to the adults who stayed steady with them.',
      ],
      misreadAs: [
        {
          looksLike: 'Regression, as if progress was lost.',
          isOften: 'A temporary and normal retreat to what is safe. It usually comes back.',
        },
        {
          looksLike: 'Behaving worse now that the hard part is over.',
          isOften: 'Waiting until it was safe enough to fall apart.',
        },
        {
          looksLike: 'Being unaffected, since they never mention it.',
          isOften: 'Not having the words. Watch sleep, appetite, and play instead.',
        },
      ],
    },
    emphasizes: ['predictability', 'connection', 'regulation', 'routine'],
    strategyTags: ['visual-schedule', 'connection-first', 'transition-warning', 'co-regulate', 'observe-and-note', 'quiet-space'],
    environmentTips: [
      'Hold one or two routines completely steady, even if everything else moves.',
      'Tell them what is happening in simple, true words, and say plainly that it is not their fault.',
      'Expect old skills to wobble, and help with them again without commentary.',
      'Protect a small amount of undivided time daily. Ten focused minutes beats a whole distracted day.',
      'Keep your own support in place, because their steadiness is downstream of yours.',
    ],
    whenToAsk:
      'If changes in sleep, appetite, mood, or behavior last more than about a month, or if your child ' +
      'seems persistently withdrawn, talk with your pediatrician about support for them and for you.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },

  /* ================= THINKING AND LEARNING ================= */
  {
    id: 'executiveFunction',
    group: 'learning',
    label: 'Executive function',
    tagline: 'Starting, planning, and finishing.',
    description:
      'For children who know what to do but cannot get started, lose track partway through, or ' +
      'struggle to judge how long something takes.',
    framing:
      'Starting a task, holding the steps in mind, and finishing are separate skills. A child can ' +
      'be strong at one and still need support with another.',
    understanding: {
      headline: 'Knowing what to do and being able to start doing it are two different abilities, and only one of them is visible.',
      mind: [
        'Executive function is the set of skills that gets an intention turned into action. Starting, holding steps in mind, switching, resisting distraction, and estimating time. They develop separately and on their own schedules.',
        'A child can explain the whole plan perfectly and still be stuck on the floor, unable to begin. That gap is not defiance and it is not laziness. Starting is its own skill, and for some children it is the weakest one they have.',
        'Working memory is the other frequent bottleneck. Go upstairs, get your shoes, and bring the laundry is three things to hold. If two fall out on the stairs, what comes back down is one shoe and no idea why.',
        'Time blindness is real. Ten minutes and forty minutes feel similar from the inside, which is why estimates are wildly wrong and why visible timers help so much more than reminders do.',
        'Roughly, expect executive skills to run about three years behind same age peers when they are a struggle. Setting expectations at that younger level is not lowering the bar, it is aiming at the actual child.',
      ],
      strengths: [
        'Often excellent at the parts they can hyperfocus on.',
        'Creative problem solvers, since the standard route rarely worked.',
        'Capable and independent once a system fits them.',
      ],
      misreadAs: [
        {
          looksLike: 'Lazy.',
          isOften: 'Stuck at the starting line. Start it with them for two minutes and watch what happens.',
        },
        {
          looksLike: 'Careless, from forgetting half of what you asked.',
          isOften: 'Working memory full. Write it down instead of repeating it.',
        },
        {
          looksLike: 'Always late and never sorry.',
          isOften: 'Genuinely unable to feel time passing. Make it visible.',
        },
        {
          looksLike: 'Able to do it, since they did it beautifully last week.',
          isOften: 'Inconsistency is the pattern. Capacity varies with sleep, stress, and interest.',
        },
      ],
    },
    emphasizes: ['structure', 'planning', 'time', 'organization'],
    strategyTags: ['visual-schedule', 'break-into-steps', 'timer', 'checklist', 'body-double', 'first-then'],
    environmentTips: [
      'Make the next step visible rather than something to remember.',
      'Start the task alongside them for the first two minutes.',
      'Use a visible timer so time becomes something they can see.',
      'Break one task into steps small enough that the first one feels easy.',
      'Put the system where the task happens, not on a chart in another room.',
    ],
    whenToAsk:
      'If organization and starting are affecting school despite support at home, ask the school about ' +
      'an evaluation. You can request one in writing and they must respond.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },
  {
    id: 'learningDifferences',
    group: 'learning',
    label: 'Learning differences',
    aka: ['dyslexia', 'dyscalculia', 'dysgraphia', 'reading', 'writing', 'math'],
    tagline: 'Bright child, specific wall.',
    description:
      'For children who are clearly capable and hit a wall in one specific area, most often reading, ' +
      'writing, or math. Strategies focus on the specific skill and on protecting confidence ' +
      'everywhere else.',
    framing:
      'A learning difference is a gap between general ability and one particular skill. The gap ' +
      'itself is the signal, and it does not say anything about how smart a child is.',
    understanding: {
      headline: 'This is a wiring difference in one narrow area, sitting next to completely ordinary intelligence.',
      mind: [
        'With reading, the usual bottleneck is hearing the separate sounds inside a word. If cat does not break into three sounds easily, letters cannot be matched to them, and reading stays effortful long after other children have gone automatic. It has nothing to do with seeing letters backwards, which is a myth that has lasted far too long.',
        'With writing, the physical act can take so much attention that spelling, punctuation, and ideas all suffer at once. A child who tells brilliant stories out loud and writes four flat sentences is usually not being lazy. The channel is expensive.',
        'With math, the difficulty is often number sense itself, meaning the intuition for how big numbers are and how they relate. Facts get memorized without ever feeling true, so they fall out again.',
        'The most damaging part is rarely the skill. It is the conclusion a child draws, usually by around age seven, that they are stupid. That belief does more long term harm than the reading gap, and it is the thing you can protect against starting today.',
        'These respond well to the right teaching, and specifically to structured, explicit, repeated instruction. More of the same instruction that already failed is not it.',
      ],
      strengths: [
        'Often strong at reasoning, big picture thinking, and problem solving.',
        'Frequently creative, three dimensional thinkers.',
        'Persistent, having worked harder for every result.',
        'Verbally sharp, even when reading is hard.',
      ],
      misreadAs: [
        {
          looksLike: 'Not trying.',
          isOften: 'Trying much harder than classmates for a worse result, and getting tired of it.',
        },
        {
          looksLike: 'Behaving badly in reading time.',
          isOften: 'Choosing to look naughty rather than look stupid. Almost every child makes that trade.',
        },
        {
          looksLike: 'Careless spelling.',
          isOften: 'Spelling that requires full attention every single time, with none left for checking.',
        },
        {
          looksLike: 'Bright, so it cannot be a learning difference.',
          isOften: 'Exactly the profile. The gap between ability and output is the whole signal.',
        },
      ],
    },
    emphasizes: ['reading', 'writing', 'math', 'confidence', 'school'],
    strategyTags: ['break-into-steps', 'read-aloud', 'repetition', 'adaptive-tools', 'checklist', 'celebrate-partial'],
    environmentTips: [
      'Keep reading to them well past the age they can read alone, so books stay a pleasure.',
      'Separate the idea from the writing. Let them talk it out, or record it, then write.',
      'Protect the thing they are great at, and protect the time for it.',
      'Say out loud that this is about wiring, not intelligence. Say it more than once.',
      'Audiobooks are reading. Comprehension is the point, and the eyes are not the only route.',
    ],
    whenToAsk:
      'Ask the school in writing for an evaluation if a specific skill is far behind the rest. You do ' +
      'not have to wait for them to suggest it, and waiting to see rarely helps.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },
  {
    id: 'gifted',
    group: 'learning',
    label: 'Gifted and twice exceptional',
    aka: ['gifted', '2e', 'advanced', 'intense'],
    tagline: 'Ahead in some places, behind in others, intense everywhere.',
    description:
      'For children who are far ahead in one area and struggling in another, and for children whose ' +
      'intensity, perfectionism, or sense of fairness makes ordinary days hard.',
    framing:
      'Being ahead intellectually does not move emotional development along with it. A child can ' +
      'reason like a ten year old and fall apart like the six year old they are.',
    understanding: {
      headline: 'Uneven is the norm here, and the emotions are running at the age on the birth certificate.',
      mind: [
        'Advanced thinking does not bring advanced coping. A child who can discuss extinction at dinner still needs help sharing a toy afterwards, and the gap between those two things confuses everyone, including the child.',
        'Perfectionism is very common and it looks strange from the outside. A child may refuse to try something they cannot already do well, because the gap between their standard and their skill is unbearable. That refusal is not arrogance, it is fear of being ordinary at something.',
        'Intensity comes as a package. Big enthusiasm, big injustice, big sensory reactions, big questions at bedtime about death. It is not a behavior problem to be managed down.',
        'Twice exceptional means gifted alongside a learning difference, ADHD, or autism. The two frequently mask each other, so the child looks merely average and neither need gets met. That masking is why plenty of these children are only identified late, or never.',
        'Boredom in these children rarely looks like boredom. It looks like clowning, arguing, daydreaming, or refusing to hand work in.',
      ],
      strengths: [
        'Rapid learning and long memory in areas of interest.',
        'Strong reasoning and a real appetite for complexity.',
        'Deep moral seriousness and concern for fairness.',
        'Creative, original, and frequently very funny.',
      ],
      misreadAs: [
        {
          looksLike: 'Arrogant.',
          isOften: 'Frustrated by pace, and often lonely with it.',
        },
        {
          looksLike: 'Lazy, since they will not attempt the new thing.',
          isOften: 'Perfectionism. Not trying protects them from being merely okay at it.',
        },
        {
          looksLike: 'Fine, since grades are average.',
          isOften: 'Possibly twice exceptional, with strength and difficulty cancelling out on paper.',
        },
        {
          looksLike: 'Dramatic.',
          isOften: 'Intensity that comes with the same wiring as the thinking you admire.',
        },
      ],
    },
    emphasizes: ['challenge', 'perfectionism', 'emotions', 'school', 'fairness'],
    strategyTags: ['break-into-steps', 'name-the-feeling', 'co-regulate', 'body-double', 'celebrate-partial', 'observe-and-note'],
    environmentTips: [
      'Praise the trying, the strategy, and the persistence. Do not praise being smart.',
      'Let them be a beginner at something on purpose, where being bad is safe.',
      'Answer the big questions honestly at their intellectual level, then comfort at their actual age.',
      'Do not use them as a classroom helper instead of giving them work that stretches them.',
      'If ability and output do not match, look for a second thing rather than assuming effort.',
    ],
    whenToAsk:
      'If school is a daily fight, ask for an evaluation that looks at both strengths and difficulties ' +
      'rather than one or the other. A single number will miss a twice exceptional child.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },

  /* ================= DEVELOPMENT AND HEALTH ================= */
  {
    id: 'downSyndrome',
    group: 'development',
    label: 'Down syndrome',
    aka: ['trisomy 21', 'T21'],
    tagline: 'Same milestones, their own timeline.',
    description:
      'For families of children with Down syndrome. Milestone windows are presented with more room, ' +
      'and strategies lean on repetition, visual supports, and celebrating steps within a skill.',
    framing:
      'Children with Down syndrome reach the same milestones, often on a longer timeline. ' +
      'Progress within a skill is worth tracking, not just the finished skill.',
    understanding: {
      headline: 'The order of development is familiar. The pace is their own, and the visual channel is usually the strongest one.',
      mind: [
        'Visual learning tends to be a genuine strength, and auditory processing and short term memory for spoken information tend to be harder. That combination is why pairing every word with a sign or a picture works so well, and why spoken instructions alone often do not land.',
        'Understanding usually runs well ahead of speech. Low muscle tone affects the mouth just as it affects the rest of the body, so the words can be in there long before they can come out. Assume competence and talk to them at their real age.',
        'Low tone shows up everywhere. Sitting, walking, chewing, and speaking all take more effort and more repetitions. Repetition is not a sign the approach is failing. Repetition is the approach.',
        'Steps within a skill are worth counting. Pulling to stand, cruising, and standing alone are each real achievements, and a milestone chart that only marks walking will hide months of genuine progress.',
        'Personality is not part of the condition. The stereotype that every child with Down syndrome is happy and affectionate flattens real children who are also stubborn, funny, private, and furious sometimes, exactly like anyone else.',
      ],
      strengths: [
        'Strong visual learning and imitation.',
        'Often excellent social awareness and warmth.',
        'Persistent, since most skills have been worked for.',
        'Good long term memory for routines that have been practiced.',
      ],
      misreadAs: [
        {
          looksLike: 'Not understanding, since they did not answer.',
          isOften: 'Understanding and needing more time, or a way to answer that is not speech.',
        },
        {
          looksLike: 'Stubborn refusal.',
          isOften: 'Frequently a real opinion. Offer a choice before assuming noncompliance.',
        },
        {
          looksLike: 'Plateaued.',
          isOften: 'Progress happening inside a skill, below the level a milestone chart can see.',
        },
      ],
    },
    emphasizes: ['motor', 'communication', 'repetition', 'selfCare'],
    strategyTags: ['break-into-steps', 'visual-schedule', 'repetition', 'sign-language', 'celebrate-partial'],
    environmentTips: [
      'Break a skill into smaller steps and celebrate each one.',
      'Pair words with signs or pictures to support communication.',
      'Repetition is the strategy, not a sign something is not working.',
      'Ask your care team which therapy goals to reinforce at home.',
      'Talk to them at their actual age, not at the age their speech sounds like.',
    ],
    whenToAsk:
      'Your care team will have a schedule of checks, including hearing, vision, thyroid, and heart. ' +
      'Keeping those appointments matters more here, since untreated hearing loss slows everything else.',
    milestoneFlexMonths: 6,
    suppressesRedFlags: false,
  },
  {
    id: 'prematurity',
    group: 'development',
    label: 'Born early',
    aka: ['premature', 'preemie', 'NICU', 'corrected age', 'adjusted age'],
    tagline: 'Two birthdays, and one of them is the one milestones follow.',
    description:
      'For families whose baby arrived early. Milestones are read against corrected age rather than ' +
      'the date on the birth certificate, for the first two years.',
    framing:
      'A baby born early is doing developmental work on the schedule their brain is actually on, ' +
      'which is not the schedule the calendar says.',
    numeric: {
      key: 'weeksEarly',
      label: 'How many weeks early?',
      help:
        'Full term is forty weeks. If your baby was born at thirty two weeks, that is eight weeks ' +
        'early. Ready Set Grow will use this to show corrected age alongside actual age.',
      min: 1,
      max: 17,
      unit: 'weeks',
    },
    understanding: {
      headline: 'Corrected age is actual age minus how early they arrived, and it is the fairer measure until about two years old.',
      mind: [
        'The American Academy of Pediatrics is clear on this. For the first two years, corrected age gives you a far better idea of when to expect common developmental goals.',
        'The math is simple. Subtract the weeks of prematurity from the weeks since birth. A baby born at thirty two weeks is eight weeks early, so at four months old their corrected age is two months, and two month skills such as head control and social smiling are what to look for.',
        'This matters emotionally as much as practically. Comparison to term babies the same age is the fastest route to a miserable first year, and the comparison is not a fair one. You are looking at a younger baby.',
        'By around two years, most children who were born early have caught up enough that corrected age stops being useful, and you can go back to the calendar.',
        'A NICU stay leaves marks on parents too. Hypervigilance, flinching at monitors, and a hard time relaxing into ordinary parenting are extremely common and worth taking seriously rather than pushing through.',
      ],
      strengths: [
        'Often remarkably resilient babies.',
        'Parents who have become sharp, informed observers of their own child.',
        'Frequently already connected to early intervention, which is a real advantage.',
      ],
      misreadAs: [
        {
          looksLike: 'Behind on milestones.',
          isOften: 'Exactly on time for corrected age. Check the corrected number first.',
        },
        {
          looksLike: 'A small baby who will always be small.',
          isOften: 'Growth that often catches up substantially over the first two to three years.',
        },
        {
          looksLike: 'Overreacting parents.',
          isOften: 'Parents who watched their baby need medical support and learned to watch closely.',
        },
      ],
    },
    emphasizes: ['milestones', 'feeding', 'motor', 'parentSupport'],
    strategyTags: ['celebrate-partial', 'repetition', 'observe-and-note', 'break-into-steps'],
    environmentTips: [
      'Use corrected age when you check a milestone. Write both ages down.',
      'Skin to skin helps well past the newborn weeks.',
      'Accept early intervention if it is offered, even if things look fine.',
      'Stop comparing to babies born at the same time. It is not the same starting line.',
      'Ask for support for yourself. NICU stays leave a mark on parents, and that is worth naming.',
    ],
    whenToAsk:
      'Follow the corrected age windows, and still raise anything that concerns you. Babies born early ' +
      'are followed more closely for good reason, and asking early costs nothing.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },
  {
    id: 'medicalComplexity',
    group: 'development',
    label: 'Medical complexity',
    aka: ['chronic illness', 'feeding tube', 'multiple specialists', 'complex care'],
    tagline: 'When care takes a team, and the calendar is full of appointments.',
    description:
      'For families managing an ongoing condition, equipment, feeding support, or several specialists ' +
      'at once. Strategies focus on development continuing alongside treatment, and on the load the ' +
      'parent is carrying.',
    framing:
      'Medical care and development are running at the same time. Plenty of families end up so ' +
      'focused on the first that the second quietly waits, and it does not have to.',
    understanding: {
      headline: 'Your child is developing during treatment, not after it, and you are doing a job several people would normally share.',
      mind: [
        'Hospital time costs developmental time. Not because anything is wrong, but because a child in a bed misses floor time, mess, risk, and boredom, all of which are how development happens. Building small amounts of ordinary play back in is real medicine.',
        'Medical experiences change how a child responds to touch, to strangers, and to being held down. What looks like an extreme reaction to a routine appointment is usually accurate memory doing its job.',
        'You have become a project manager without applying for the role. Holding the history that every specialist needs, catching the contradictions between them, and being the only person with the whole picture is genuinely heavy work, and it is invisible on any chart.',
        'Siblings notice everything and often go quiet about it, because they can see there is no room. Small amounts of separate, undivided time do more here than anything elaborate.',
        'Development can be uneven in a way that has nothing to do with ability. A child on oxygen may crawl late and talk early, and that is about opportunity rather than potential.',
      ],
      strengths: [
        'Often extraordinarily tolerant and adaptable children.',
        'Families with real expertise in their own child.',
        'Strong bonds, built through a lot of hours together.',
      ],
      misreadAs: [
        {
          looksLike: 'Developmental delay across the board.',
          isOften: 'Missed opportunity in specific areas. Add the opportunity and watch.',
        },
        {
          looksLike: 'An extreme reaction to a routine procedure.',
          isOften: 'Accurate memory of a previous one.',
        },
        {
          looksLike: 'A parent who is coping well.',
          isOften: 'A parent with no space to not cope. Ask them anyway.',
        },
      ],
    },
    emphasizes: ['development', 'play', 'parentSupport', 'siblings', 'coordination'],
    strategyTags: ['celebrate-partial', 'break-into-steps', 'connection-first', 'observe-and-note', 'adaptive-tools'],
    environmentTips: [
      'Keep one running document of history, medications, and questions, and bring it to every appointment.',
      'Ask each specialist what they need you to watch for at home, in one sentence.',
      'Protect ordinary play. Mess, floor time, and boredom are developmental work.',
      'Prepare your child for procedures honestly and in advance, including the parts that will hurt.',
      'Carve out separate time for siblings, however small.',
      'Ask about respite and about support for you. You are allowed to need it.',
    ],
    whenToAsk:
      'Ask whether your child has a care coordinator, and ask for one if not. Ask your pediatrician to ' +
      'be the hub that the specialists report into.',
    milestoneFlexMonths: 3,
    suppressesRedFlags: false,
  },

  /* ================= STILL FIGURING IT OUT ================= */
  {
    id: 'exploring',
    group: 'unsure',
    label: 'Exploring',
    tagline: 'Still figuring it out, and that is allowed.',
    description:
      'For parents who have noticed something and are not sure what it means. This lens keeps ' +
      'guidance broad and gentle, and points toward observation rather than conclusions.',
    framing:
      'You do not need a label to get support. Noticing patterns and writing them down is useful ' +
      'on its own, and it is genuinely helpful information if you decide to talk with a professional.',
    understanding: {
      headline: 'You are allowed to use every strategy in this app without deciding what anything means.',
      mind: [
        'Nothing here requires a diagnosis. Visual schedules, movement breaks, transition warnings, and naming feelings are good parenting for any child. If a strategy helps, use it, and you never have to justify why.',
        'Your observations are data, and they are the data a professional cannot collect. What happened, when, what came right before, how long it lasted, and what helped. A few weeks of that is worth more at an appointment than anything you can say from memory.',
        'One hard day is not a pattern. Look across two or three weeks before drawing any conclusion, since sleep, illness, and growth spurts can imitate almost anything.',
        'And the concern that brought you here is worth taking seriously. Parents are right far more often than they expect to be, and asking early has essentially no downside.',
      ],
      strengths: [
        'You are paying attention, which is the part nobody can outsource.',
        'Noticing early is the single biggest advantage a child can have.',
      ],
      misreadAs: [
        {
          looksLike: 'Overthinking it.',
          isOften: 'Noticing accurately. Write it down and decide later.',
        },
        {
          looksLike: 'Something they will grow out of.',
          isOften: 'Sometimes true. Worth watching on purpose rather than watching by default.',
        },
      ],
    },
    emphasizes: ['observation', 'regulation', 'documentation'],
    strategyTags: ['observe-and-note', 'co-regulate', 'connection-first', 'visual-schedule'],
    environmentTips: [
      'Write down what you notice, including when and what came just before it.',
      'Patterns over a few weeks tell you more than any single hard day.',
      'You can try supportive strategies without deciding what anything means.',
      'Bringing your notes to a pediatric visit makes that visit far more useful.',
    ],
    whenToAsk:
      'You never need a reason to ask. If something has been on your mind for more than a few weeks, ' +
      'that is reason enough to mention it at the next visit.',
    milestoneFlexMonths: 0,
    suppressesRedFlags: false,
  },
];

/* ------------------------------------------------------------------
 * HELPERS
 * All safe to call with unknown ids or empty arrays.
 * ------------------------------------------------------------------ */

/** Full lens object for an id, or null. */
export function getLens(lensId) {
  if (!lensId) return null;
  return SUPPORT_LENSES.find((l) => l.id === lensId) || null;
}

/** Full lens objects for a child's selected lens ids, unknown ids dropped. */
export function getLenses(lensIds) {
  if (!Array.isArray(lensIds)) return [];
  return lensIds.map(getLens).filter(Boolean);
}

/** Lenses belonging to one group id, in file order. */
export function getLensesInGroup(groupId) {
  return SUPPORT_LENSES.filter((l) => l.group === groupId);
}

/** Groups paired with their lenses, ready to render as sections. */
export function getGroupedLenses() {
  return LENS_GROUPS.map((g) => ({ ...g, lenses: getLensesInGroup(g.id) })).filter(
    (g) => g.lenses.length > 0
  );
}

/**
 * Merges strategy tags across every active lens, with no duplicates.
 * This is how stacking works. A parent with ADHD plus sensory active
 * gets the union of both, not one or the other.
 */
export function getMergedStrategyTags(lensIds) {
  const tags = getLenses(lensIds).flatMap((l) => l.strategyTags);
  return Array.from(new Set(tags));
}

/** Merged environment tips across active lenses, duplicates removed. */
export function getMergedEnvironmentTips(lensIds) {
  const tips = getLenses(lensIds).flatMap((l) => l.environmentTips);
  return Array.from(new Set(tips));
}

/**
 * Every misreadAs pair across the active lenses, tagged with which
 * lens it came from. This is what the Understanding screen renders,
 * and it is the highest value content in the file.
 */
export function getMergedMisreads(lensIds) {
  return getLenses(lensIds).flatMap((l) =>
    ((l.understanding && l.understanding.misreadAs) || []).map((m) => ({
      ...m,
      lensId: l.id,
      lensLabel: l.label,
    }))
  );
}

/** Every strength across the active lenses, tagged with its lens. */
export function getMergedStrengths(lensIds) {
  return getLenses(lensIds).flatMap((l) =>
    ((l.understanding && l.understanding.strengths) || []).map((s) => ({
      text: s,
      lensId: l.id,
      lensLabel: l.label,
    }))
  );
}

/**
 * The option choice object a parent selected inside a lens, or null.
 * selections looks like { autism: 'level2', adhd: 'combined' }.
 */
export function getLensOption(lensId, selections) {
  const lens = getLens(lensId);
  if (!lens || !lens.options || !selections) return null;
  const key = selections[lensId];
  if (!key) return null;
  return lens.options.choices.find((c) => c.key === key) || null;
}

/** True if this lens offers a single choice sub selection. */
export function lensHasOptions(lensId) {
  const lens = getLens(lensId);
  return !!(lens && lens.options && lens.options.choices && lens.options.choices.length);
}

/**
 * Corrected age in months for a baby born early, or null when the
 * prematurity lens is off, no weeks were entered, or the child is
 * past twenty four months, which is where the AAP stops using it.
 */
export function getCorrectedAgeMonths(ageMonths, lensIds, numbers) {
  if (typeof ageMonths !== 'number' || !isFinite(ageMonths) || ageMonths < 0) return null;
  if (!Array.isArray(lensIds) || !lensIds.includes('prematurity')) return null;
  if (!numbers || typeof numbers.weeksEarly !== 'number') return null;
  const weeks = numbers.weeksEarly;
  if (!isFinite(weeks) || weeks <= 0) return null;
  if (ageMonths > 24) return null;
  const corrected = ageMonths - weeks / 4.345;
  return corrected > 0 ? Math.round(corrected * 10) / 10 : 0;
}

/**
 * How much extra room to show around a milestone window, in months.
 * When several lenses are active the widest one wins, because the
 * gentler framing should apply.
 *
 * This only affects how a window is described. It never removes the
 * guidance to talk with a pediatrician.
 */
export function getMilestoneFlexMonths(lensIds) {
  const lenses = getLenses(lensIds);
  if (lenses.length === 0) return 0;
  return Math.max(...lenses.map((l) => l.milestoneFlexMonths || 0));
}

/** True if a given strategy tag is relevant to any active lens. */
export function hasStrategyTag(lensIds, tag) {
  return getMergedStrategyTags(lensIds).includes(tag);
}

/**
 * Loose text match across labels and the aka lists, so a parent
 * searching for ADD, dyslexia, or T21 lands on the right lens even
 * though none of those is a label in this file.
 */
export function findLensesByTerm(term) {
  const q = String(term || '').trim().toLowerCase();
  if (!q) return [];
  return SUPPORT_LENSES.filter((l) => {
    if (l.label.toLowerCase().includes(q)) return true;
    if (l.id.toLowerCase().includes(q)) return true;
    return (l.aka || []).some((a) => a.toLowerCase().includes(q));
  });
}

export const LENS_IDS = SUPPORT_LENSES.map((l) => l.id);

export default SUPPORT_LENSES;

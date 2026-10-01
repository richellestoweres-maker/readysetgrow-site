/**
 * Ready Set Grow: Sound Machines, Night Lights, And The Morning Signal
 * ------------------------------------------------------------------
 * She asked for this and described exactly how she uses hers, which
 * turned out to be the best part of the page:
 *
 *   "my son is 4 and has a fear of the dark so I set the red light at
 *   night to 32 percent and the song to 30 percent. It is scheduled
 *   for 7:30 pm which is his normal bedtime ish, and it changes to
 *   blue around 7:30 am and that means he is welcome to come out of
 *   his room into our room."
 *
 * That is an ok to wake system, and it is one of the few genuinely
 * useful pieces of kit in a small child's room, because a 3 year old
 * cannot read a clock and can absolutely learn that a color means
 * come out. Most parents who own one of these devices never set that
 * part up, so it leads the page.
 *
 * WHAT THE PAGE WILL NOT DO
 * It names the best known brand once, because pretending not to know
 * what she meant would be silly, and then writes about the category.
 * It says plainly that a cheap sound machine and a color changing bulb
 * on a timer does most of the same job for a fraction of the money.
 *
 * AND IT TELLS THE TRUTH ABOUT THE EVIDENCE, which here cuts against
 * the marketing in 2 places. Red light is sold as the sleep color and
 * the measurement work is about light output rather than children
 * actually sleeping better. White noise is sold as a sleep solution
 * and the systematic review concluded the evidence quality does not
 * support recommending it broadly. Both are said, and so is the other
 * half: if it works in your house, it works in your house.
 *
 * THE VOLUME SECTION IS NOT OPTIONAL. The 2014 Pediatrics measurements
 * of infant sleep machines are real and the numbers are alarming, so
 * they are here with the practical rule: across the room, never in or
 * on the crib, no louder than it needs to be.
 */

export const NL_TITLE = 'Sound machine and night light';
export const NL_SUB =
  'One small device in a toddler\'s room can do three jobs, and the one most parents do not '
    + 'know about is the color that tells a child it is morning.';

export const NL_INTRO = [
  'This is a category, not a product. The thing most parents end up with is a single device '
    + 'that sits on a dresser and combines three functions: a sound machine that plays white '
    + 'noise or a lullaby, a dim night light you can set to a specific color and a specific '
    + 'brightness, and a color change on a schedule that acts as a signal to your child. Most of '
    + 'them are controlled from an app on your phone, which matters more than it sounds, because '
    + 'it means you can turn the volume down from the hallway at 2 in the morning instead of '
    + 'walking into the room and waking everybody up. The best known example is the Hatch, and '
    + 'you will see it on a lot of baby registries, but the category is wide and the cheap end of '
    + 'it works.',
  'What makes it worth a page of its own is that the three jobs land at completely different '
    + 'ages. The sound machine is useful from the first week. The dim light becomes useful when '
    + 'your child is old enough to be scared of the dark, which is usually somewhere around 3. '
    + 'And the scheduled color change, the part that quietly fixes 6 a.m. wakeups, only starts '
    + 'working once your child can learn a rule, which is later still. So if you buy one of these '
    + 'at a baby shower, understand that you are buying a sound machine now and a morning signal '
    + 'in about 3 years. That is fine. Just know what you are getting, and know that a $15 sound '
    + 'machine plus a $12 color changing smart bulb on a timer does most of the same job if the '
    + 'budget matters.',
];

/* The part most people who own one never switch on. */
export const NL_OKWAKE = [
  {
    h: 'What an ok to wake system actually is',
    body: [
      'You set the light to turn a particular color at a particular time in the morning. '
        + 'Before that color appears, the rule is stay in your room. Once the color appears, the '
        + 'rule is you may come out. That is the whole thing. Red or amber at night, green or '
        + 'blue in the morning, and a child who cannot read a number learns the rule in about a '
        + 'week.',
      'Parents usually arrive at this because of one specific problem: a child who wakes at '
        + '5:40 and comes to find you, every single day. You cannot reason with a 3 year old '
        + 'about what time it is, because time is abstract and they have nothing to hang it on. A '
        + 'color is not abstract. It is right there on the dresser.',
    ],
  },
  {
    h: 'Why a color works when a clock does not',
    body: [
      'Most children do not reliably tell time on an analog or digital clock until somewhere '
        + 'around 6 or 7. Before that, 6:45 and 7:30 are the same information, which is to say no '
        + 'information. But matching a color to a rule is something toddlers are already good at, '
        + 'well before they can count, read, or sequence. It is the same skill as a red light and '
        + 'a green light.',
      'This is also why the signal should be a color and not a sound. A sound wakes a child '
        + 'who is still asleep. A color sits there patiently and is only noticed by a child who '
        + 'is already awake and wondering whether they are allowed out.',
    ],
  },
  {
    h: 'How to set it up',
    body: [
      'Do this part before you ever mention it to your child. The setup is boring, and the '
        + 'teaching is the part that matters.',
    ],
    list: [
      'Pick 2 clearly different colors. Red or amber for night, green or blue for morning. '
        + 'Avoid pairs a young child might confuse.',
      'Set the night color to come on at bedtime and stay on all night, dim.',
      'Set the morning color for your child\'s current natural wake time, or even 5 minutes '
        + 'after it. Not the time you wish they woke up. You want them to succeed on day 1.',
      'Once they are reliably waiting for the color, move the morning time later by about 10 '
        + 'or 15 minutes every few days until you get where you want to be.',
      'Turn off any chime, alarm, or sound on the morning change, at least at first.',
      'If the device has a nap setting, use the same 2 colors for naps so the rule stays the '
        + 'same rule.',
    ],
  },
  {
    h: 'Teaching it in the first week',
    body: [
      'Teach it in the daytime, awake, as a game. Nobody learns a new rule at 5:40 a.m.',
    ],
    list: [
      'Day 1, in the daylight: show them the light, change the colors by hand, and name them. '
        + 'Red means my room. Green means come find you.',
      'Practice it like pretend play. Have them lie in bed, flip the light to green, and let '
        + 'them run out and be delighted. Do it 3 or 4 times.',
      'Say the rule the same way every night at bedtime, in the same words. Repetition is '
        + 'doing the work here, not explanation.',
      'The first morning, make a genuinely big deal of it when they wait. Enthusiasm is the '
        + 'whole reward system at this age.',
      'If they want something to do while waiting, leave a couple of books or quiet toys '
        + 'within reach. A rule that asks a child to lie still and do nothing is a harder rule.',
    ],
  },
  {
    h: 'When they come out anyway',
    body: [
      'They will come out anyway. Plan for it so you are not inventing a response while half '
        + 'asleep.',
      'Walk them back with almost no talking. Point at the light. Say the one sentence you '
        + 'always say. Leave. The less interesting you are at 5:40, the faster this resolves. You '
        + 'may do this 8 times in one morning, and that is a normal first week, not a failure.',
      'If it keeps failing, the usual culprit is the time rather than the child. A morning '
        + 'target that is 40 minutes past their body\'s actual wake time is asking for something '
        + 'they cannot do yet. Move it back toward their natural wake time and climb again more '
        + 'slowly.',
    ],
  },
  {
    h: 'What age it starts working',
    body: [
      'Honest answer: it varies, and there is no real research on this. There are no trials '
        + 'on ok to wake clocks. What you have instead is the developmental picture plus a lot of '
        + 'consistent practitioner experience, and both point to roughly 2.5 to 3 years as the '
        + 'earliest it tends to stick, with 3 and up being much more reliable.',
      'What you are actually waiting on is not age, it is 3 abilities: your child can '
        + 'distinguish the 2 colors, they can follow a simple rule without you in the room, and '
        + 'they can tolerate a short wait. Some 2 year olds have all 3. Plenty of 3 year olds do '
        + 'not yet. If you try it and it flatly does not land, it is not a discipline problem and '
        + 'it is not a failure on your part. Put it away, keep using the device as a night light, '
        + 'and try again in 2 or 3 months.',
    ],
  },
];

/* Numbers to copy, including hers, labeled as a starting point. */
export const NL_SETTINGS = [
  {
    h: 'Read this before you copy any number',
    body: [
      'Everything below is a starting point to adjust, not a correct answer. Rooms differ, '
        + 'children differ enormously in what they tolerate, and the only real test is whether '
        + 'your child settles and stays asleep. Change one thing at a time and give it 3 or 4 '
        + 'nights before you judge it.',
    ],
  },
  {
    h: 'A real example from a parent',
    body: [
      'This is what one mom actually runs for her 4 year old, who is afraid of the dark. It '
        + 'is included because it is a real working configuration rather than a theoretical one.',
    ],
    list: [
      'Light: red, about 32 percent brightness',
      'Sound: about 30 percent volume',
      'On at 7:30 p.m., which is roughly his bedtime',
      'Changes to blue at 7:30 a.m., which means he is welcome to come into his parents\' '
        + 'room',
    ],
  },
  {
    h: 'Volume',
    body: [
      'Start near the bottom of the dial, around 20 to 30 percent on most devices, and only '
        + 'go up if you have a specific noise you are trying to cover. Louder is not better and '
        + 'the ceiling on these devices is higher than anything your child needs.',
      'A free decibel meter app on your phone is a genuinely useful 2 minute check. Measure '
        + 'at your child\'s head, not at the device. The figures in the sound section below tell '
        + 'you what you are aiming under.',
    ],
  },
  {
    h: 'Brightness',
    body: [
      'Start dim and go dimmer than feels right. Somewhere in the 10 to 35 percent range is '
        + 'where most families land for an all night light. The test is simple: stand in the '
        + 'doorway after your eyes adjust for a minute. You should be able to see the shape of '
        + 'furniture and not much else. If you could read a book by it, it is too bright.',
      'Point it at a wall or the floor rather than at the bed, and keep it out of your '
        + 'child\'s direct line of sight from the pillow.',
    ],
  },
  {
    h: 'Timing',
    body: [
      'Have the night setting come on 20 to 30 minutes before lights out so it becomes part '
        + 'of the wind down rather than an event.',
    ],
    list: [
      'Night color on: 20 to 30 minutes before bedtime',
      'Morning color: set it to your child\'s current natural wake time first, then move it '
        + 'later by 10 to 15 minutes every few days',
      'A realistic morning target for most toddlers and preschoolers is somewhere in the 6:30 '
        + 'to 7:30 range, but your child\'s body clock gets a vote',
      'If you use a nap color, keep it the same 2 colors as nighttime',
      'Weekends: keep it the same. The whole system runs on the rule not changing',
    ],
  },
];

/* The safety section. Real measurements, real distances. */
export const NL_SOUND = [
  {
    h: 'The number that matters',
    body: [
      'A 2014 study published in Pediatrics tested 14 infant sleep machines at maximum volume '
        + 'and measured them at 30 cm, 100 cm, and 200 cm, which is about 1 foot, 3 feet, and 6.5 '
        + 'feet. At 30 cm, every single one of the 14 exceeded 50 dBA, and 3 of them exceeded 85 '
        + 'dBA. At 100 cm all of them still exceeded 50 dBA, and even at 200 cm, 13 of the 14 '
        + 'did.',
      '50 dBA matters because it is the recommended hourly noise limit for hospital nurseries '
        + 'and NICUs. 85 dBA matters because that is the level at which adults in workplaces are '
        + 'told to wear hearing protection. Three of these devices, sitting where a crib rail is, '
        + 'hit that. The authors\' advice was direct: put the machine as far from the baby as you '
        + 'can, never in or on the crib, turn the volume down, and do not run it at maximum all '
        + 'night.',
    ],
    warn: true,
  },
  {
    h: 'What the AAP says',
    body: [
      'The American Academy of Pediatrics does not ban these devices. Its 2023 policy on '
        + 'noise exposure acknowledges potential benefits and tells pediatricians to counsel '
        + 'families on safe use, while noting that this study raised real concern about the '
        + 'levels these machines can reach.',
      'The AAP\'s general position is that sound above 70 decibels over a prolonged period '
        + 'may begin to damage hearing, and that the occupational 85 decibel standard should not '
        + 'be assumed safe for children. It also makes the point that dose matters as much as '
        + 'volume, meaning how long the exposure lasts, not just how loud it is at one moment. '
        + 'Its plainest rule of thumb: if an environment sounds too loud to an adult, it is '
        + 'probably too loud for a child.',
    ],
  },
  {
    h: 'The practical rules',
    body: [
      'None of this means do not use a sound machine. It means use it the way the research '
        + 'points to.',
    ],
    list: [
      'Across the room. As far from your child\'s head as the room allows, and at minimum '
        + 'several feet.',
      'Never in the crib, on the crib rail, attached to the crib, or under the mattress. Safe '
        + 'sleep rules do not have an exception for this device. The sleep space stays bare, with '
        + 'a fitted sheet and nothing else.',
      'No louder than needed. The job is masking household noise, not drowning it out. If you '
        + 'are raising your voice to talk over it, it is too loud.',
      'Check it once with a phone decibel app, measured at your child\'s head, and aim to '
        + 'stay comfortably under 50 dBA.',
      'A timer that shuts it off, or turning it down once your child is asleep, reduces total '
        + 'exposure. An app that lets you do this from the hallway makes it actually happen.',
      'Keep the volume honest as the device moves. A machine that was fine on a dresser is '
        + 'not fine when it gets relocated to a bedside table.',
    ],
    warn: true,
  },
];

/* Fear of the dark, which is ordinary and not a bad habit. */
export const NL_DARK = [
  {
    h: 'It is extremely common and it is not a backward step',
    body: [
      'Fear of the dark shows up in a huge number of children somewhere between about 3 and '
        + '6, and it is developmentally ordinary. It arrives at the same time as imagination. A 3 '
        + 'year old who can now invent a story is a 3 year old who can now invent something in '
        + 'the closet, and that is cognitive progress wearing a frightening costume. Nightmares '
        + 'follow a similar curve and are most common between roughly 3 and 12.',
      'Your child was not scared of the dark at 18 months and now is. That is not something '
        + 'going wrong. That is a brain that got better at imagining things.',
    ],
  },
  {
    h: 'A dim light is a legitimate accommodation',
    body: [
      'You will be told that a night light is a crutch and that you are making a rod for your '
        + 'own back. You can set that aside. The AAP\'s own guidance on nighttime fears says to '
        + 'let a frightened child keep a light on if it helps them feel better. It is a comfort '
        + 'measure for a real fear, and comforting a real fear is not the same as reinforcing it.',
      'What a dim light buys you is a child who can open their eyes at 2 a.m., see that the '
        + 'room is the room, and go back to sleep without needing you. That is the opposite of '
        + 'dependence. Most children let go of the light on their own eventually, usually '
        + 'sometime in the school years, without anyone running a program.',
    ],
  },
  {
    h: 'How dim is dim enough',
    body: [
      'Dim enough to orient, not bright enough to read by. That is the standard.',
    ],
    list: [
      'Lowest setting that your child actually accepts. Ask them. A 4 year old can tell you.',
      'Red or amber rather than white or blue, for the reason in the evidence section below.',
      'Aimed at a wall or the floor, out of direct line of sight from the pillow.',
      'If you can see color in the room clearly, or make out text, turn it down.',
      'One light, not several. Hallway light under the door plus a night light plus a glowing '
        + 'tablet adds up.',
    ],
  },
  {
    h: 'When to mention it to your pediatrician',
    body: [
      'Most of the time you do not need to. This is a phase that resolves. Bring it up at a '
        + 'regular visit, with no urgency, if the fear is spilling out of bedtime and into the '
        + 'daytime, if your child is losing real amounts of sleep night after night for weeks, if '
        + 'they will not be alone in any room at all, if the fear appeared suddenly after '
        + 'something specific happened, or if it is severe enough that it is wearing the whole '
        + 'family down.',
      'This is education, not diagnosis. Your pediatrician knows your child and can tell you '
        + 'whether what you are seeing is the usual version or something worth a closer look. '
        + 'Asking is never an overreaction.',
    ],
  },
];

/* What it is actually for, stage by stage. The honest answer at some
   ages is that it is just a sound machine. */
export const NL_AGES = [
  { band: 'Newborn',
    what: 'Mostly just the sound machine, and honestly that is the whole value at this stage. '
      + 'Steady white noise can help mask household noise such as a sibling, a dog, or a TV. No '
      + 'light is needed for your baby, though a dim setting can help you see during night feeds '
      + 'without fully waking either of you. The device goes on a dresser or shelf across the '
      + 'room, never in or attached to the crib, and the sleep space itself stays bare.' },
  { band: 'Roughly 4 to 12 months',
    what: 'Still mostly the sound machine. This is the stretch where it becomes part of the '
      + 'routine, and that routine cue is probably doing as much work as the noise itself. Keep '
      + 'the volume low and the device far from the crib. Skip the light at bedtime if you can, '
      + 'since there is no benefit to your baby from it. A dim amber or red setting for diaper '
      + 'changes at 3 a.m. is a reasonable use of it.' },
  { band: '1 to 3',
    what: 'The transition years. The sound machine keeps doing its job, and toward the back end of '
      + 'this band the morning signal starts to become possible, usually closer to 3 than to 2. '
      + 'If your child has moved to a toddler bed and is now free to roam at 5:45, this is the '
      + 'moment the color change earns the price of the device. Introduce it as a game in the '
      + 'daytime, not as a rule at bedtime.' },
  { band: '3 to 5',
    what: 'Peak usefulness, and the stage where all 3 functions are live at once. The morning color '
      + 'is a working boundary. The night color becomes a real accommodation for fear of the '
      + 'dark, which shows up hard in this band. The sound machine is often still running. This '
      + 'is also where a nap or quiet time color can help, since many children drop the nap in '
      + 'here but still need the room time.' },
  { band: 'School age',
    what: 'It shifts from a sleep signal to a clock. Many of these devices turn into an actual '
      + 'alarm, and a lot of kids are proud of getting themselves up. Night lights often fade out '
      + 'on their own somewhere in here, though not always and not on a schedule. Some kids keep '
      + 'white noise for years, especially in a shared room or a noisy house, and there is '
      + 'nothing wrong with that.' },
];

/* Where the marketing and the evidence part company. */
export const NL_HONEST = [
  {
    h: 'Is red light really better for sleep',
    body: [
      'Partly supported, and oversold. The mechanism is real. The cells in the eye that tell '
        + 'your brain what time it is are most sensitive to short wavelength blue light and least '
        + 'sensitive to long wavelength red. A 2026 paper in npj Biological Timing and Sleep '
        + 'measured 25 popular night lights across 79 settings and found red hued ones '
        + 'consistently had the lowest theoretical biological potency, and the authors recommend '
        + 'red or amber at the dimmest settings.',
      'Here is the honest limit. That paper measured light, not children\'s sleep. It is a '
        + 'very good argument that red is the lower risk choice. It is not a trial showing that '
        + 'children fall asleep faster or sleep longer under red light than under dim amber or '
        + 'dim white, and that trial in young children largely does not exist. The same paper '
        + 'found only 3 of the 25 products stayed reliably under the brightness threshold it '
        + 'used, which points at the thing the marketing underplays: brightness matters more than '
        + 'color. A bright red light is worse than a very dim warm white one. If you remember one '
        + 'thing, remember dim, then worry about the color.',
    ],
  },
  {
    h: 'Does white noise help babies sleep',
    body: [
      'Plausible, widely used, and genuinely weakly evidenced. A systematic review of noise '
        + 'as a sleep aid found mixed results and concluded that the quality of the existing '
        + 'evidence does not support broadly recommending white noise as a sleep aid, and that '
        + 'more research is needed. Some studies found benefit. Some found none. In some cases '
        + 'noise disturbed sleep instead.',
      'Researchers also do not agree on why it would work. The most mundane explanation is '
        + 'the most likely: it masks other noises, such as a door, a sibling, a dog. If you live '
        + 'somewhere loud, that is a real benefit regardless of what brain wave theory turns out '
        + 'to be true. If you live somewhere quiet, you may be solving a problem you do not have.',
      'Practically: many families find it helps, nobody can promise it will help yours, and '
        + 'the main thing to get right is the volume rather than whether to use it.',
    ],
  },
  {
    h: 'The dependence worry',
    body: [
      'This is the warning parents hear most and it is mostly overstated. The underlying idea '
        + 'is a real thing called a sleep onset association, where a child learns to need a '
        + 'specific condition to fall asleep. It is true that a child who has always slept with '
        + 'white noise may notice when it is gone.',
      'But weigh that honestly. The practical cost is that you pack a travel sound machine, '
        + 'or use a phone, or the first night in a hotel is rough. That is a small cost. There is '
        + 'no evidence that using a sound machine or a dim light harms children, and no evidence '
        + 'that it causes lasting sleep problems. Compare that to the cost of not sleeping now.',
      'The real difference is between a condition your child can have all night without you, '
        + 'such as a light that stays on or noise that keeps playing, and one that requires you '
        + 'to come back and recreate it. The first kind is barely a dependence at all. The second '
        + 'kind is the one worth thinking about. A night light and a sound machine are the first '
        + 'kind.',
    ],
  },
  {
    h: 'It is an internet connected device in your child\'s bedroom',
    body: [
      'No camera, no microphone on most of these, and that puts them at the low risk end of '
        + 'nursery tech. But an app controlled device is a device with an account, a cloud '
        + 'connection, and a company behind it, and that is worth 5 minutes of thought.',
      'What it knows is small but not nothing: your child\'s bedtime, their wake time, when '
        + 'they woke in the night, which room the device is in, and your email address. That is a '
        + 'behavioral record of a young child\'s schedule. Products aimed at children in the US '
        + 'are covered by COPPA, which requires verifiable parental consent before collecting '
        + 'personal information from children under 13, and the FTC has enforced this against '
        + 'connected devices. That is a real protection and it is also not a guarantee of good '
        + 'behavior.',
      'The sensible middle ground: use a strong unique password, turn off anything you do not '
        + 'need such as voice assistant integration, keep the firmware updated, and glance at '
        + 'what the privacy policy says about sharing data with third parties. If any of that is '
        + 'more than you want to deal with, note that the fully offline version of this category '
        + 'exists. A plug in sound machine with a physical knob and a color changing bulb on a '
        + 'mechanical timer connects to nothing, costs far less, and does the same 3 jobs with '
        + 'less convenience.',
    ],
  },
  {
    h: 'What is simply marketing',
    body: [
      'Any specific sleep promise. Sound profiles tuned for a particular age or temperament '
        + 'are a reasonable convenience and not a clinical finding. Claims that one brand\'s red '
        + 'is physiologically special are not supported, since red is red. The real value of '
        + 'these devices is unglamorous: consistency, scheduling, and a color your child can read '
        + 'before they can read a clock. The night light part and the sound part can be replaced '
        + 'for about $25 total. The scheduled color signal is the part worth paying for, and only '
        + 'once your child is old enough to use it.',
    ],
  },
];

export const NL_GIFT = [
  'It is a good baby shower gift and a good new baby gift, mainly because it is something '
    + 'parents genuinely use for years rather than for 6 weeks. The sound machine works from the '
    + 'first week and the morning signal is still being used at 5.',
  'Be clear eyed about price. This is a $50 to $100 category, and a basic sound machine that '
    + 'does the main job for a newborn costs $15 to $25. If you are buying for someone on a tight '
    + 'registry, a cheap sound machine plus something they actually need is the better gift, and '
    + 'nobody should feel they are missing out.',
  'It also makes a strong group gift or a gift from a grandparent, since it is in the price '
    + 'range where splitting it makes sense and most parents will not buy it for themselves early '
    + 'on.',
  'If you are the one registering, put it on the list and say so out loud. Most people buying '
    + 'for a baby shower would rather get the one useful thing than guess at another outfit in '
    + 'the wrong size.',
];

export const NL_SOURCES = [
  { org: 'NPR Shots',
    label: 'Coverage of the 2014 Pediatrics study on infant sleep machine sound levels, with '
      + 'measured distances and decibel findings',
    url: 'https://www.npr.org/sections/health-shots/2014/03/03/283972897/noise-machines-to-help-babies-sleep-can-raise-quite-a-din' },
  { org: 'ENTtoday',
    label: 'Detailed reporting of the Hugh et al. 2014 Pediatrics study, Infant Sleep Machines and '
      + 'Hazardous Sound Pressure Levels',
    url: 'https://www.enttoday.org/article/sleep-machines-may-damage-infant-hearing/' },
  { org: 'American Academy of Pediatrics, HealthyChildren.org',
    label: 'AAP Sounds Alarm on Excessive Noise Risks to Children, summarizing the 2023 policy '
      + 'statement including infant sleep machines',
    url: 'https://www.healthychildren.org/English/news/Pages/sounds-the-alarm-on-excessive-noise-and-risks-to-children.aspx' },
  { org: 'American Academy of Pediatrics, HealthyChildren.org',
    label: 'Nightmares, Night Terrors and Sleepwalking in Children, including ages of peak '
      + 'nightmares and keeping a light on',
    url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Nightmares-and-Night-Terrors.aspx' },
  { org: 'American Academy of Pediatrics, HealthyChildren.org',
    label: 'A Parent\'s Guide to Safe Sleep, on keeping the sleep space bare with nothing in the crib',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
  { org: 'National Institute on Deafness and Other Communication Disorders, NIH',
    label: 'How Loud Is Too Loud, on safe and harmful decibel levels and exposure duration',
    url: 'https://www.nidcd.nih.gov/health/how-loud-too-loud' },
  { org: 'npj Biological Timing and Sleep, Nature Portfolio',
    label: 'Quantifying the biological impacts of nightlights: implications for sleep and circadian '
      + 'health in children, 2026, measuring 25 night light products',
    url: 'https://www.nature.com/articles/s44323-026-00072-6' },
  { org: 'Sleep Foundation',
    label: 'White Noise and Sleep, summarizing the 2021 systematic review of noise as a sleep aid '
      + 'and its conclusions on evidence quality',
    url: 'https://www.sleepfoundation.org/noise-and-sleep/white-noise' },
  { org: 'Children\'s National Hospital',
    label: 'The truth about baby sound machines and hearing loss, on volume and distance from the crib',
    url: 'https://riseandshine.childrensnational.org/baby-sound-machines-and-hearing-loss/' },
  { org: 'US Federal Trade Commission',
    label: 'Children\'s Privacy, on COPPA, verifiable parental consent, and enforcement involving '
      + 'connected devices',
    url: 'https://www.ftc.gov/business-guidance/privacy-security/childrens-privacy' },
];

/* WHO SEES IT. From birth, because the sound machine and the volume
   warning matter on day 1, and up to 10, because the morning signal
   quietly becomes an alarm clock and the fear of the dark part does
   not finish when they start school. */
export function nlShows(months) {
  return typeof months !== 'number' || months <= 120;
}

export function nlRowSub(months) {
  if (typeof months !== 'number') return 'Sound, light, and the color that means come out';
  if (months < 12) return 'Safe volume, how far away, and what it is actually for yet';
  if (months < 30) return 'The sound machine now, and the morning signal coming';
  if (months < 72) return 'The color that means they can come out, and fear of the dark';
  return 'The morning signal, the dark, and when it becomes an alarm clock';
}

/* Which part to open on, following what a parent of a child this age
   came here to work out. */
export function nlFirstTab(months) {
  if (typeof months !== 'number') return 'okwake';
  if (months < 18) return 'sound';
  if (months < 30) return 'settings';
  return 'okwake';
}

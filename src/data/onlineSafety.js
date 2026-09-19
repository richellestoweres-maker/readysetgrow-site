/**
 * Ready Set Grow: Phones, games and the people on the other side
 * ==================================================================
 * She asked for this directly: "talk about the importance to your
 * children about their phones, social media, not talking to strangers
 * like on roblox and how strangers can kidnap them etc."
 *
 * THE DECISION THAT SHAPES THIS WHOLE FILE
 * Her instinct is right and the mechanism has moved. A stranger taking
 * a child by force is real, it happens, and children have died. It is
 * also, in the United States, on the order of a hundred cases a year.
 * In the same country the CyberTipline took 21.3 million reports of
 * suspected child sexual exploitation in 2025.
 *
 * So this file does not tell a frightened mother that her fear is
 * silly. It tells her the fear is pointed at the wrong door. The van
 * has become a friend request. That honours the instinct and puts her
 * vigilance somewhere it will actually do something.
 *
 * WHAT IS LED WITH, AND WHY THAT ORDER
 * Contact harms first: grooming, enticement, sextortion. Nobody
 * serious disputes those. The mental health argument about social
 * media is led with nowhere in here, because the Surgeon General and
 * the National Academies looked at overlapping evidence in
 * consecutive years and reached different conclusions, and a parenting
 * app that picks a side in a live scientific argument inherits the
 * argument. The practical advice comes out the same either way.
 *
 * WHAT IS NOT REPEATED HERE
 * Sextortion in the first hour, and what to do when a child is already
 * being exploited, live in src/data/support.js. That screen has the
 * quick exit and the hotlines. This one is the ordinary parenting
 * version: what to set up, what to say, and at what age.
 *
 * THE RULE ABOUT PARENTAL CONTROLS
 * Every control in here is described as what it does and what it does
 * not do. A parent who believes Snapchat Family Center shows her the
 * messages is less safe than one who knows it shows her the contact
 * list, because she has stopped asking.
 *
 * Everything checked September 2026 against the source in ONLINE_SOURCES.
 */

export const ONLINE_TITLE = 'Phones, games and who is on the other side';

export const ONLINE_SUB = 'What to set up, what to say, and at what age. Written around how this '
  + 'actually happens rather than how it happens in the news.';

export const ONLINE_TABS = [
  { id: 'real', label: 'How it really happens' },
  { id: 'age', label: 'What to do at their age' },
  { id: 'apps', label: 'The apps they use' },
  { id: 'rules', label: 'Phones and rules that work' },
];

/* ==================================================================
   HOW IT REALLY HAPPENS
   ================================================================== */

export const ONLINE_HEAD = 'The van became a friend request.';

export const ONLINE_INTRO = [
  'Almost every parent carries the same picture: a stranger, a vehicle, a parking lot. That does '
  + 'happen. It is also rare enough to count. The last national estimate put stereotypical '
  + 'kidnappings, the kind in the picture, at around a hundred a year in the whole United States, '
  + 'and even within those, nearly four in ten were taken by somebody the child slightly knew '
  + 'rather than a complete stranger.',
  'In the same country, in 2025, the national tip line for child exploitation took 21.3 million '
  + 'reports. Your instinct is not wrong. An adult who wants to hurt your child gets to them by '
  + 'earning their trust first. That is exactly what you were afraid of. It now happens through a '
  + 'screen in your own living room, which is both worse and a great deal easier to do something '
  + 'about.',
];

export const ONLINE_NUMBERS = {
  title: 'The real shape of it',
  items: [
    'Around 100 stereotypical kidnappings a year nationally, the last time it was measured properly. '
    + 'Eight of the children in that count were killed. It is rare, and it is not nothing.',
    'Of the missing child cases the national centre worked in 2025, 92 percent were children who had '
    + 'run away. Running is far and away the commonest way a child goes missing.',
    '21.3 million reports of suspected child sexual exploitation in 2025, through the tip line alone.',
    'Over 50,000 reports of financially motivated sextortion in 2025, about 137 a day, up from around '
    + '36,000 in 2024.',
    'Nearly six in ten teenage girls say they have been contacted by a stranger on social media in a '
    + 'way that made them uncomfortable.',
  ],
  note: 'Those numbers are not there to frighten you. They are there because knowing which door to '
    + 'watch is worth more than watching all of them.',
};

/* The pattern, step by step, because a parent who can name the steps
   spots step two instead of finding out at step six. */
export const ONLINE_PATTERN = {
  title: 'What the pattern actually looks like',
  intro: 'This is the sequence the national centre and the FBI describe. It is not a theory, it is '
    + 'what these people do, and they do it for a living.',
  steps: [
    'They find your child somewhere ordinary. A game, a comment section, a server, a follower list.',
    'They are lovely. Compliments, shared interests, liking their posts. They are more interested in '
    + 'your child than almost anybody else is.',
    'They lie about who they are, usually by being younger. A great many of them claim to be a child '
    + 'the same age.',
    'They make the sexual part ordinary before they ask for anything. Jokes, role play, sending '
    + 'something of their own first. The talk is the grooming, not the goal.',
    'They ask, usually framed as a swap. You send me one and I will send you one.',
    'Then it turns, and often it turns in a single message. Pay, or this goes to everybody you know.',
  ],
  speed: 'It is much faster than parents expect. The national centre documented a fifteen year old '
    + 'groomed to the point of an in person meeting in nine days, and in the sextortion cases around '
    + 'three in ten children faced demands within twenty four hours of first contact.',
  offPlatform: 'Watch for the move. Getting your child off the platform they met on, into a private '
    + 'message or an encrypted app, is a step, and it is the step that takes them out of anywhere you '
    + 'or a moderator can see.',
};

export const ONLINE_GROUPS = {
  title: 'The part almost no parent has heard of',
  body: [
    'They do not always work alone. The FBI has warned about groups of adults operating together '
    + 'inside gaming clans, servers and follower groups aimed at children. Several of them pose as '
    + 'children in the same group, so when one of them starts, the others are already there being '
    + 'friendly.',
    'The reason it works is the reason it is hard to teach against. A child trusts somebody more when '
    + 'other children in the group appear to trust them already.',
  ],
  teach: 'Which is why "do not talk to strangers" does not hold up online. By the time it matters, '
    + 'this person is not a stranger. They have been in the group for months.',
};

export const ONLINE_SEXTORTION = {
  title: 'Boys, and the thing that gets them',
  body: [
    'The version aimed at teenage boys is financial. It is not somebody local who wants your son. It '
    + 'is an organised operation, usually run from overseas, that wants money and is working hundreds '
    + 'of children at once.',
    'The FBI puts typical victims at boys aged fourteen to seventeen and has recorded a frightening '
    + 'number of suicides among them. Children have killed themselves within hours of it starting, '
    + 'believing there was no way out of it.',
  ],
  oneThing: 'If you tell your son one thing about the internet this year, make it this: if this ever '
    + 'happens, you come to me, I will not be angry, and it will be over by the morning. There is a '
    + 'full page on what to do in the first hour under If something is happening at home.',
};

/* ==================================================================
   BY AGE
   ================================================================== */

export const ONLINE_STAGES = [
  {
    id: 'baby', label: 'Under two', from: 0, to: 23,
    head: 'There is almost nothing to do here, which is the good news.',
    body: 'A baby does not learn from a screen. The current pediatric position is gentler than the '
      + 'old one, and occasionally watching something short and good is not damaging, but there is no '
      + 'version of this where a baby needs it. Video calls with people who love them are a different '
      + 'thing and are fine.',
    doNow: [
      'Decide now, while it is easy, that there are no screens at the table and none in the bedroom. '
      + 'Starting that at eleven is a fight. Starting it at one is just how your house is.',
      'Watch your own phone in front of them more than you watch theirs. They are learning what a '
      + 'phone is for by watching you hold one.',
    ],
  },
  {
    id: 'toddler', label: 'Two to five', from: 24, to: 59,
    head: 'Everything they watch, you are in the room for.',
    body: 'This is the age where co watching does more than any control does. Not because they are in '
      + 'danger yet, but because watching together is what teaches them that you are part of what '
      + 'happens on a screen, and that is the habit you need in eight years.',
    doNow: [
      'Screens live in the family room. No devices in the bedroom, ever, and starting now means never '
      + 'having to take one away later.',
      'Nothing an hour before bed. Sleep is the one harm from screens that nobody argues about.',
      'Pick what they watch rather than letting an autoplay pick it. The quality of what is on '
      + 'matters more than the number of minutes.',
      'Say the sentence early, even now: you will never be in trouble for telling me something.',
    ],
  },
  {
    id: 'early', label: 'Five to eight', from: 60, to: 107,
    head: 'Games with other people in them. This is where it starts.',
    body: 'Roblox and Minecraft arrive around now, and a game with strangers in it is a different '
      + 'thing from a game. The point of this age is not restriction, it is that you know the names '
      + 'of the things they play and roughly who is in them.',
    doNow: [
      'Link your account to theirs on anything that allows it, and set chat off or friends only.',
      'Play it with them. Twenty minutes once a week tells you more than any dashboard.',
      'Teach the one rule they can actually hold at this age: anybody who says keep this between us '
      + 'is the person you tell me about.',
      'Teach that nobody they have only met in a game is a friend, however nice they are, and that '
      + 'the nicest ones are sometimes the problem.',
    ],
  },
  {
    id: 'middle', label: 'Eight to eleven', from: 108, to: 143,
    head: 'The years everything changes, and the years most parents wait too long.',
    body: 'Almost four in ten children aged eight to twelve are already on social media, even though '
      + 'the minimum age on all of it is thirteen. This is the stretch where a child goes from playing '
      + 'to having an online life with people in it you have never heard of.',
    doNow: [
      'Have the conversation about pictures now, before there is a reason to. If anybody ever asks '
      + 'you for a picture, that is an adult problem and not yours, and it stops the second you tell me.',
      'Go through their friends and followers with them, out loud, one by one. Who is this. Where did '
      + 'you meet them. Have you ever seen their face.',
      'Explain the swap trick specifically, because it is the one that works on this age. If somebody '
      + 'sends you one first, that is not them being brave, that is the trick.',
      'If they are asking for a phone, read the phone section before you answer.',
    ],
  },
  {
    id: 'tween', label: 'Eleven to thirteen', from: 144, to: 155,
    head: 'The pressure year. Everybody else has one, and mostly they do.',
    body: 'Thirteen is the minimum age on Instagram, TikTok, Snapchat, YouTube, Discord and WhatsApp, '
      + 'not because thirteen is safe but because a privacy law makes under thirteen expensive for '
      + 'them. Plenty of children are on all of it at eleven with a made up birthday.',
    doNow: [
      'If you are going to say no to social media until later, say it now and say it with other '
      + 'parents, because on their own it is a punishment and together it is just how things are.',
      'If they are getting accounts, set them up together, on your phone, with the privacy settings '
      + 'done in front of them and explained.',
      'Agree what happens when something goes wrong, in advance and in writing if you like. Nobody '
      + 'loses the phone for telling the truth about something that happened to them.',
      'Talk about what they are seeing, not only who they are talking to. This is the age bodies and '
      + 'comparison start to bite.',
    ],
  },
  {
    id: 'teen', label: 'Thirteen to sixteen', from: 156, to: 191,
    head: 'The window the sextortion crews aim at.',
    body: 'Boys aged fourteen to seventeen are the typical target for financially motivated '
      + 'sextortion, and it moves in hours. Girls are far more likely to report unwanted contact from '
      + 'strangers. Both of them need the same promise from you.',
    doNow: [
      'Say it plainly, to a teenager, out loud: if anybody ever gets a photo of you and threatens you '
      + 'with it, come to me. Do not pay, do not send more, and I will not be angry. Not once, not '
      + 'later, not at all.',
      'Tell them you know it happens to people who are not stupid, because that is the belief that '
      + 'keeps them silent.',
      'Keep the phone out of the bedroom overnight. It is the single rule with the clearest evidence '
      + 'behind it and it is worth the argument.',
      'Stop reading their messages if you were, and say you have stopped and why. At this age '
      + 'monitoring buys you less than they will tell you voluntarily.',
    ],
  },
  {
    id: 'older', label: 'Sixteen to eighteen', from: 192, to: 400,
    head: 'You are advising now rather than controlling.',
    body: 'They will have devices and accounts you do not know about, and that is developmentally '
      + 'correct rather than a failure. What you keep is the relationship, and the relationship is the '
      + 'only thing that is going to get them to tell you when something goes wrong.',
    doNow: [
      'Talk about the ones who are not children. Sending money, meeting somebody from an app, a '
      + 'person who wants everything private very fast.',
      'Talk about what they send as much as what they receive, including that an image of somebody '
      + 'under eighteen is a criminal matter even when both of them are under eighteen.',
      'Tell them that if a picture of them is out there and they were under eighteen when it was '
      + 'taken, it can be taken down, for free, without sending it to anybody. It is at '
      + 'takeitdown.ncmec.org.',
      'Keep saying the sentence. It does not stop working at sixteen.',
    ],
  },
];

export function onlineStageFor(months) {
  if (months === null || months === undefined) return null;
  for (let i = 0; i < ONLINE_STAGES.length; i++) {
    const s = ONLINE_STAGES[i];
    if (months >= s.from && months <= s.to) return s;
  }
  return ONLINE_STAGES[ONLINE_STAGES.length - 1];
}

/* ==================================================================
   THE APPS
   ==================================================================
   Written to be useful rather than complete. Every entry says what the
   controls actually do, and where a control is weaker than a parent
   assumes, it says so, because a false sense of cover is worse than
   none.
   ================================================================== */

export const ONLINE_APPS = [
  {
    id: 'roblox', name: 'Roblox', age: 'No minimum age. Built for young children.',
    what: 'A platform of millions of games made by other users, most of them fine, some of them not, '
      + 'with chat in almost all of them. It is very often a child’s first place with strangers in it.',
    changed: 'It changed a lot recently. Since January 2026 everybody worldwide has to pass an age '
      + 'check to use chat at all, done by the camera estimating their age. People are sorted into '
      + 'brackets, under 9, 9 to 12, 13 to 15, 16 to 17, 18 to 20 and 21 plus, and can only chat with '
      + 'their own bracket and the ones either side. An adult cannot start a conversation with a '
      + 'twelve year old. Since June 2026 there are separate Roblox Kids accounts for 5 to 8 and '
      + 'Roblox Select for 9 to 15, with smaller reviewed lists of games.',
    canDo: [
      'Turn chat off entirely for an under nine, and turn direct or whisper messages off for an under thirteen.',
      'Set a content maturity level, and block or allow individual games one at a time.',
      'Turn off the sensitive issues setting.',
      'Set Party and Group Party to nobody, and block private server access.',
      'Set a daily time limit, and a monthly cap on Robux spending with notifications.',
      'Approve or decline every friend request, and block and report from the connections list.',
    ],
    honest: 'What it does not have is a parent PIN or a single lock everything switch, and the '
      + 'controls loosen as the child gets older. Several state attorneys general have sued Roblox '
      + 'over child safety, alleging grooming and exposure to explicit content. Those are allegations '
      + 'in filed cases and none of them has been decided.',
  },
  {
    id: 'discord', name: 'Discord', age: '13 and up',
    what: 'Servers and voice chat, built around gaming, and the place a lot of game conversations '
      + 'move to. Private servers are invisible from the outside.',
    changed: 'From March 2026 teen accounts default differently: messages from people they may not '
      + 'know go to a separate inbox, sensitive content filters cannot be switched off without '
      + 'verifying as an adult, and teens cannot get into age restricted servers or channels.',
    canDo: [
      'Check whether their account is actually set as a teen account, since the protections hang off that.',
      'Look at which servers they are in and ask who invited them to each one.',
      'Turn direct messages from server members off in the privacy settings.',
    ],
    honest: 'Discord does not age check most people, so an adult can simply say they are an adult and '
      + 'a child can simply say they are older. Treat the teen defaults as a floor and not a fence.',
  },
  {
    id: 'snap', name: 'Snapchat', age: '13 and up',
    what: 'Messages that disappear, which is exactly why children like it and exactly why it is where '
      + 'a lot of the worst conversations happen.',
    canDo: [
      'Family Center shows you their friend list, who they have been talking to, and roughly how much '
      + 'time they spend. You can report an account on their behalf.',
    ],
    honest: 'Family Center does not show you what was said, on purpose, and no setting will. If you '
      + 'want to know the content of a conversation, the only route is asking your child. Parents who '
      + 'think Family Center covers this stop asking, which is the worst of both.',
  },
  {
    id: 'meta', name: 'Instagram and TikTok', age: '13 and up',
    what: 'Where most of the social comparison happens, and where a stranger reaches a child through '
      + 'comments and message requests rather than through a friend list.',
    canDo: [
      'Private account, message requests off from anybody they do not follow, comments limited to '
      + 'people they follow.',
      'Go through the follower list together. Anybody they cannot account for comes off.',
      'TikTok has a separate under thirteen experience in the US with no posting, no comments and no '
      + 'messaging at all.',
    ],
    honest: 'Nearly six in ten teenage girls report being contacted by a stranger on social media in '
      + 'a way that made them uncomfortable. A private account cuts this down a great deal and does '
      + 'not end it.',
  },
  {
    id: 'yt', name: 'YouTube', age: '13 for their own account',
    what: 'The default babysitter, and the place the recommendation engine matters more than the '
      + 'video they searched for.',
    canDo: [
      'Under thirteen, use YouTube Kids or a supervised account rather than yours.',
      'Turn autoplay off. It is the single setting that changes what a young child ends up watching.',
      'Watch the history occasionally rather than the live video. It shows you where the algorithm has '
      + 'been taking them.',
    ],
    honest: 'YouTube Kids is filtered by machine and things get through. It is much better than the '
      + 'main app for a young child and it is not a walled garden.',
  },
];

/* ==================================================================
   RULES THAT ACTUALLY WORK
   ================================================================== */

export const ONLINE_WORKS = {
  title: 'What the research says actually works',
  intro: 'The biggest review of this ran to 88 studies. It is worth knowing what came out on top, '
    + 'because it is not what most parents reach for first.',
  items: [
    'Using it together came first. Sitting with them, playing it, watching it, having opinions about it.',
    'Talking about it came second. Explaining, discussing, having a view, asking questions.',
    'Restricting it alone came last of the three. It still helps. It helps less than either of the '
    + 'other two, and on its own it buys less as they get older.',
    'Monitoring software has the same problem. The researchers who studied it concluded it works '
    + 'better as something to talk about than as something to rely on, and that it stops being a '
    + 'viable answer as teenagers get older.',
  ],
  note: 'None of that means take the controls off. It means the controls are the floor and the '
    + 'conversation is the thing.',
};

export const ONLINE_GAP = {
  title: 'The number that should decide how you react',
  body: [
    'Asked what they would do if an adult sent them explicit images online, 40 percent of children '
    + 'said they would go to a parent or caregiver. Among the children it had actually happened to, '
    + '10 percent did.',
    'The gap between forty and ten is fear of what you will do. One in five said they worried about '
    + 'getting in trouble with their family, one in four felt embarrassed or worried about being '
    + 'judged, and one in six thought it was their fault.',
  ],
  what: 'Which means the most protective thing in this entire page is a promise you make before '
    + 'anything happens, and then keep on the worst night of your life. You will never be in trouble '
    + 'for telling me. Not about a photo, not about who you were talking to, not about where you were '
    + 'or what you took.',
};

export const ONLINE_RULES = {
  title: 'The rules with the most behind them',
  items: [
    'No devices in the bedroom, and none overnight. Charge them in the kitchen. This is the one with '
    + 'the clearest evidence of all, because it protects sleep, and the sleep harm is the part nobody '
    + 'argues about.',
    'Nothing for an hour before bed.',
    'No phones at the table, and none during homework.',
    'You hold the app store password, so a new app is a conversation rather than a tap.',
    'Every account gets set up together, with the privacy settings done in front of them.',
    'Go through friends and followers out loud, together, every few months.',
    'Whatever the rules are, they apply to you too, visibly, or they are not rules, they are a rank.',
  ],
};

export const ONLINE_PHONE = {
  title: 'When should they get a phone',
  body: [
    'There is no research that gives you an age, and anybody who tells you there is has usually read '
    + 'a survey rather than a study. What surveys do show fairly consistently is that most American '
    + 'children have one somewhere between ten and twelve, and one recent study raised concerns about '
    + 'ownership before twelve, though it needs reading carefully before anybody builds a rule on it.',
    'The more useful question is not the age. It is whether you have already had the conversations '
    + 'on this page, because a phone is a door and the point is who is allowed through it.',
  ],
  together: 'The hardest part of saying no is that they are the only one without one. There is a '
    + 'pledge called Wait Until 8th that exists entirely to solve that, where a family agrees to hold '
    + 'off on a smartphone until the end of eighth grade, and the pledge only activates once ten '
    + 'families from the same grade at the same school have signed. Basic phones and watches are still '
    + 'allowed. The mechanism is the point. It turns a decision your child can argue with into one '
    + 'that is just how things are.',
  middle: [
    'A watch or a basic phone answers the actual problem, which is usually that you want to reach '
    + 'them, not that they need an internet in their pocket.',
    'A smartphone with no social media on it is a real option and most parents forget it exists.',
    'Whatever they get, it does not sleep in their room.',
  ],
};

export const ONLINE_SCRIPTS = {
  title: 'What to actually say',
  intro: 'Not a lecture about strangers. Short things, said more than once, starting years before '
    + 'they seem necessary.',
  items: [
    'You will never be in trouble for telling me. Not about a photo, not about who you were talking '
    + 'to, not about where you were.',
    'Anybody who says keep this between us is the person you tell me about.',
    'If somebody asks you for a picture, that is an adult problem and not yours, and it stops the '
    + 'second you tell me.',
    'If somebody sends you one of themselves first, that is not them being brave. That is the trick.',
    'Somebody who is very generous very fast wants something.',
    'If somebody says they already have a picture of you, they are usually lying, and either way '
    + 'there is a way out and you would not be the first.',
    'People online are not always the age they say. A lot of them say they are your age on purpose.',
    'You can leave any conversation without being polite about it.',
  ],
};

export const ONLINE_WRONG = {
  title: 'If it has already happened',
  body: 'Whatever has happened, the first thirty seconds are what your child will remember for the '
    + 'rest of it. Do not react to the picture, react to them. Then: stop replying but do not delete '
    + 'anything, screenshot everything, do not pay, report it to the platform and at report.cybertip.org '
    + 'or 1-800-843-5678, and if an image of somebody under eighteen is out there, takeitdown.ncmec.org '
    + 'will get it removed for free without you sending it anywhere.',
  link: 'There is a fuller version, including what to do in the first hour and who to call, under If '
    + 'something is happening at home.',
};

export const ONLINE_SOURCES = [
  { org: 'American Academy of Pediatrics', label: 'Digital ecosystems, children and adolescents, the 2026 policy statement',
    url: 'https://publications.aap.org/pediatrics/article/157/2/e2025075320/206129/Digital-Ecosystems-Children-and-Adolescents-Policy' },
  { org: 'AAP', label: 'The Family Media Plan, and the age to start social media',
    url: 'https://www.healthychildren.org/English/fmp/Pages/MediaPlan.aspx' },
  { org: 'NCMEC', label: 'Online enticement, the grooming pattern, and 2025 sextortion data',
    url: 'https://www.missingkids.org/theissues/onlineenticement' },
  { org: 'FBI', label: 'Financially motivated sextortion, and group grooming in games',
    url: 'https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/sextortion/financially-motivated-sextortion' },
  { org: 'OJJDP', label: 'How many stereotypical kidnappings there really are',
    url: 'https://ojjdp.ojp.gov/sites/g/files/xyckuh176/files/pubs/249249.pdf' },
  { org: 'Thorn', label: 'Why children do not tell, and the gap between what they say and what they do',
    url: 'https://www.thorn.org/research/disclosure-and-reporting/' },
  { org: 'US Surgeon General', label: 'Social media and youth mental health, 2023, including its own caveats',
    url: 'https://www.hhs.gov/sites/default/files/sg-youth-mental-health-social-media-advisory.pdf' },
  { org: 'National Academies', label: 'The 2024 report that reached a different conclusion on mental health',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK603429/' },
  { org: 'Roblox', label: 'Age checks, the age brackets, and the full parental controls list',
    url: 'https://about.roblox.com/parental-controls' },
  { org: 'Snapchat', label: 'What Family Center shows you and what it does not',
    url: 'https://parents.snapchat.com/family-center' },
  { org: 'Wait Until 8th', label: 'The pledge, and how the ten family rule works',
    url: 'https://www.waituntil8th.org/faqs/' },
];

/* Where the evidence is genuinely contested, said out loud, because an
   app that picks a side in a live scientific argument inherits the
   argument and loses the reader who has read the other side. */
export const ONLINE_HONEST = {
  title: 'One thing this page is deliberately not telling you',
  body: 'You will have read that social media is causing a mental health crisis in teenagers. The '
    + 'Surgeon General issued an advisory saying the evidence is worrying and that we do not yet know '
    + 'whether it is safe. The National Academies reviewed overlapping evidence the following year and '
    + 'said it did not support the conclusion that social media causes changes in adolescent health at '
    + 'the population level. Both are serious bodies. That argument is live and this app is not going '
    + 'to settle it for you. What is not in dispute is the contact side, the grooming and the '
    + 'sextortion and the sleep, and everything on this page would be worth doing either way.',
};

export default ONLINE_TITLE;

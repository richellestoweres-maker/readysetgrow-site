/**
 * Ready Set Grow: The Daily Lift
 * ------------------------------------------------------------------
 * The three things the app says to HER rather than about a child: an
 * affirmation that changes every day, a way into the morning, and an
 * answer when she has just told it how the day went.
 *
 * WHY THERE IS A WRITTEN VERSION OF EVERYTHING HERE
 * Each of these can be written fresh by Willow, and each of them has a
 * written fallback in this file. That is deliberate. The AI can be
 * switched off, out of quota, blocked by a network, or simply slow,
 * and on every one of those days the app still has to open with
 * something kind on it. A blank space where the encouragement was is
 * worse than no feature at all.
 *
 * So the rule is: the written version is the product, and Willow makes
 * it personal when she can.
 *
 * THE TONE
 * Never chirpy. Never "you've got this!". A parent reading this at six
 * in the morning after a bad night can smell cheerfulness from a long
 * way off and it makes things worse. Warm, plain, and true.
 */

/* ------------------------------------------------------------------
 * THE DAILY AFFIRMATION
 * Longer and quieter than the lines in the margins. One a day.
 * ------------------------------------------------------------------ */

export const DAILY_LIFTS = [
  'You do not have to do this perfectly. You have to keep showing up, and you are.',
  'The hard parts of today are not a verdict on you. They are just the hard parts of today.',
  'Somebody in this house feels safe because of the ordinary things you did without being thanked.',
  'You are allowed to find this hard and love them completely at the same time. Both are true.',
  'Nobody is keeping score. The only person holding you to an impossible standard is you.',
  'The days are long. You are further through this than it feels from the inside.',
  'You know your child better than any chart, any book, and anybody with an opinion.',
  'Rest is not a reward you earn after everything is done. Everything is never done.',
  'A calm 5 minutes is worth more to them than an hour of you running on empty.',
  'You are not behind. There is no schedule, there is only your family and the pace it moves at.',
  'The fact that you keep wondering whether you are getting it right is the proof that you care.',
  'Being needed this much is exhausting. It is also temporary, in a way nobody warns you about.',
  'You came back after losing your patience. That is the part they learn from.',
  'Good enough, done with love, beats perfect every single time.',
  'You do not owe anyone an explanation for how you are raising your own children.',
  'Whatever you got done today counts. Including the things nobody could see.',
  'Your child does not need you to be everything. They need you to be theirs.',
  'It is allowed to be one of those days. Tomorrow gets to start over.',
  'The way you talk to yourself is the voice they will grow up to use on themselves. Be kind to yourself.',
  'You are doing something genuinely difficult, and doing it anyway is not nothing.',
  'Ask for help before you are desperate for it. That is not weakness, that is planning.',
  'Some seasons you are surviving rather than thriving, and surviving is the right goal for that season.',
  'You have already handled every single hard day so far. That record is perfect.',
  'The love is getting through even on the days the patience does not.',
];

/* FOR A GRANDPARENT, AN AUNT OR AN UNCLE.
   Her mom opened the app and was told that being needed this much is
   exhausting, which is a line for the person up at 3am, not for the
   person who comes over on Sundays. So the people around a family get
   their own lines, about the part they actually play. */
export const DAILY_LIFTS_GRAND = [
  'The steady adult who is always glad to see them is one of the most protective things a child can have. That is you.',
  'You have done this before, and you are allowed to do it differently this time.',
  'Helping without taking over is a real skill, and the parents notice more than they say.',
  'The time you spend with them now is stored somewhere they will draw on for the rest of their lives.',
  'You do not have to keep up with every new rule. Asking how they do it now is a kindness in itself.',
  'A grandparent who listens is somebody a child can tell things to. That door matters later.',
  'Rest counts for you too. You are more use to all of them rested than worn out.',
  'Some of the best things you give them are the unhurried ones. A walk, a story, a whole afternoon.',
];

export const DAILY_LIFTS_FAMILY = [
  'Being the aunt or uncle they can talk to is a real job, and it matters more as they get older.',
  'A child who has more than one safe adult is a safer child. You are one of them.',
  'Showing up regularly beats showing up big. The ordinary visits are the ones they remember.',
  'Offering the parents a break, even an hour, is one of the kindest things anyone can do for a family.',
  'You get to be fun and steady at the same time. That combination is rarer than it sounds.',
  'Asking the parents what would actually help is always better than guessing.',
];

/* ------------------------------------------------------------------
 * THE MORNING
 *
 * Hers, not a child's. Small, real, and achievable before anybody
 * needs anything, because a morning routine that assumes a quiet house
 * is a morning routine written by somebody without children.
 * ------------------------------------------------------------------ */

export const MORNING_STARTS = [
  { title: 'Water before coffee',
    body: 'A full glass before anything else. You are almost certainly a little dehydrated and it is the cheapest thing that helps.' },
  { title: '10 minutes before they are up',
    body: 'Not for chores. For sitting somewhere with something warm, on your own, while the house is still quiet.' },
  { title: 'Open the curtains first',
    body: 'Daylight in your eyes in the first hour sets your body clock for the night ahead, which matters more on the broken sleep weeks.' },
  { title: 'Decide the one thing',
    body: 'Pick the single thing that would make today feel handled. Just one. Everything else is a bonus.' },
  { title: 'Get dressed properly',
    body: 'Not for anybody else. Changing out of what you slept in tells your own brain the day has started.' },
  { title: 'Do the 2 minute tidy',
    body: 'One surface, 2 minutes, timer on. Walking past one clear counter all day is worth more than it sounds.' },
  { title: 'Eat something with protein',
    body: 'Coffee on an empty stomach is why 11 o’clock feels the way it does. Eggs, yogurt, leftovers, anything.' },
  { title: 'Say the day out loud',
    body: 'Tell them what is happening today before it happens. Transitions land better when nobody is surprised.' },
  { title: 'Step outside for 2 minutes',
    body: 'Front step counts. Cold air and daylight do something for a fogged head that a phone screen cannot.' },
  { title: 'Put the phone down first',
    body: 'Whatever is on there will still be there in an hour, and starting the day in somebody else’s news is a rough way to begin.' },
  { title: 'Start the thing you are dreading',
    body: '5 minutes of it, that is all. The dread is almost always bigger than the task and it follows you around all day.' },
  { title: 'Lay tomorrow out tonight',
    body: 'Clothes, bags, bottles. Morning you is running on nothing and deserves to find everything already done.' },
];

/* ------------------------------------------------------------------
 * WHAT TO SAY AFTER A CHECK IN
 *
 * She said the card filled in and then went away, and that she would
 * rather something stepped in. This is that. It reads the shape of the
 * day she just described and answers it.
 *
 * SAFETY
 * It reassures and it offers at most one concrete thing. It never
 * diagnoses, never treats a run of hard days as a symptom, and never
 * tells her a hard stretch means something is wrong with her child. A
 * long run does get a gentle nudge toward her pediatrician, phrased as
 * useful information to bring rather than a warning.
 * ------------------------------------------------------------------ */

export const CHECKIN_REPLIES = {
  allGood: [
    'A good one all round. Worth writing down, because these are the days that get forgotten first when a hard week comes along.',
    'Good day across the board. Whatever you did today, it worked. That is allowed to just be a nice thing.',
  ],
  mostlyGood: [
    'More good than not. That is what most good days actually look like from the inside.',
    'That reads like a decent day with a rough patch in it, which is a normal day and a fine outcome.',
  ],
  mixed: [
    'Some of both, which is most days. Mixed is not a failure, it is the ordinary texture of this.',
    'A bit of everything. You handled the hard parts and the good parts happened too, and both of those are real.',
  ],
  mostlyHard: [
    'That was a lot to hold. Hard days are hard days, and it does not mean you did anything wrong.',
    'A heavy one. Lower the bar for the rest of tonight, and let tomorrow start clean.',
  ],
  allHard: [
    'That sounds like a genuinely rough day, start to finish. You got through it, and that is the whole achievement today.',
    'All of it hard. Nothing about that is a reflection on you. Be as kind to yourself tonight as you would be to a friend telling you the same thing.',
  ],
};

/* Said once a run gets long enough to be worth noticing, and phrased
   as something useful to bring rather than something to worry about. */
export const CHECKIN_RUN_NOTE =
  'That is a few hard days close together. Nothing about that is alarming on its own, but it is exactly '
  + 'the kind of thing worth mentioning at the next appointment, and you have it written down now, which '
  + 'makes that conversation much easier.';

export const CHECKIN_GOOD_RUN_NOTE =
  'That is a good stretch you are in. Worth noticing what has been different, because whatever it is seems '
  + 'to be helping.';

/* Which bucket a day falls into. */
export function checkinShape(answers) {
  const vals = Object.keys(answers || {}).map((k) => answers[k]).filter(Boolean);
  if (!vals.length) return null;
  const hard = vals.filter((v) => v === 'hard').length;
  const good = vals.filter((v) => v === 'good').length;
  if (hard === 0 && good === vals.length) return 'allGood';
  if (hard === vals.length) return 'allHard';
  if (hard > good) return 'mostlyHard';
  if (good > hard) return 'mostlyGood';
  return 'mixed';
}

/* Seeded so it holds still through a repaint, rather than flickering
   between two phrasings while she is reading it. */
function pickSeeded(list, seed) {
  if (!list || !list.length) return null;
  let h = 0;
  const s = String(seed || '');
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return list[h % list.length];
}

export function writtenLift(seed, role) {
  const list = role === 'grand' ? DAILY_LIFTS_GRAND : role === 'family' ? DAILY_LIFTS_FAMILY : DAILY_LIFTS;
  return pickSeeded(list, 'lift' + seed);
}

export function writtenMorning(seed) {
  return pickSeeded(MORNING_STARTS, 'morning' + seed);
}

export function writtenCheckinReply(answers, seed) {
  const shape = checkinShape(answers);
  if (!shape) return '';
  return pickSeeded(CHECKIN_REPLIES[shape] || CHECKIN_REPLIES.mixed, 'reply' + seed + shape);
}

/* ------------------------------------------------------------------
 * WHAT WILLOW IS ASKED, WHEN SHE IS AVAILABLE
 *
 * A separate instruction from the chat one. The chat Willow has to
 * close every answer with a sources line and hold a conversation.
 * These are one shot pieces of writing and need neither, so they get
 * their own short brief rather than being squeezed through rules
 * written for something else.
 * ------------------------------------------------------------------ */

export const LIFT_SYSTEM = [
  'You are Willow, writing one short piece of text for a parenting app.',
  '',
  'The person reading is a parent, usually tired, often reading this early in the morning or late at night.',
  '',
  'HOW YOU WRITE',
  'Warm, plain and short. Never chirpy, never a pep talk, never exclamation marks.',
  'Never say "you have got this" or anything that sounds like a poster.',
  'Do not use dashes as punctuation. Use commas and full stops.',
  'No headings, no bullet points, no sign off, no emoji.',
  'Write it as if you are saying it to them, not about them.',
  '',
  'THE LINE YOU DO NOT CROSS',
  'You are not a doctor or a therapist. Never diagnose anything, never suggest a condition,',
  'never imply that a hard day or a hard week means something is wrong with the child or the parent.',
  'Never give a medication dose. Never promise an outcome.',
  '',
  'Return only the text. No preamble, no quotation marks, no explanation of what you wrote.',
].join('\n');

export function liftPrompt(kind, context) {
  const c = context || {};
  const who = (c.parentName ? 'Their name is ' + c.parentName + '.' : '')
    + (c.role === 'grand' ? ' They are a grandparent, not the parent. Write about the part a grandparent plays.'
      : c.role === 'family' ? ' They are an aunt or uncle, not the parent. Write about the part they play in the family.'
      : c.role === 'dad' ? ' He is the dad.' : '');
  const kids = c.children ? (c.role === 'grand' || c.role === 'family' ? 'The children in their life: ' : 'Their children: ') + c.children + '.' : '';

  if (kind === 'affirmation') {
    return [
      'Write one affirmation for today, 2 sentences at most, 40 words maximum.',
      who, kids,
      'It should read as something true rather than something encouraging.',
      'Do not mention the date, the app, or yourself.',
      c.avoid ? 'Do not repeat this idea, they read it recently: ' + c.avoid : '',
    ].filter(Boolean).join('\n');
  }

  /* One line after something is logged. The rule that matters is in
     encourage.js and it is repeated here because this is the prompt
     that actually reaches the model: praise the showing up, never a
     number and never the direction one moved. */
  if (String(kind).indexOf('noted') === 0) {
    return [
      'A parent has just recorded something in their own log: ' + (c.label || 'something') + '.',
      who,
      'Write one warm line back, 2 sentences at most, 30 words maximum.',
      'Praise the fact that they did it or kept track of it.',
      'Never comment on a number, on a number going up or down, on weight, on size, or on food.',
      'No exclamation marks, nothing bubbly, no advice, no diagnosis.',
      'Return the line only.',
    ].filter(Boolean).join('\n');
  }

  if (kind === 'morning') {
    return [
      'Suggest one small thing she could do this morning, for herself, before or around everyone else waking.',
      who, kids,
      'Give it a short title of 4 words at most, then one sentence saying why it helps.',
      'Format exactly as: TITLE: the title here, then a new line, then the sentence.',
      'It has to be achievable in a house with young children in it. Nothing that assumes quiet or free time.',
      c.avoid ? 'Do not suggest this, it came up recently: ' + c.avoid : '',
    ].filter(Boolean).join('\n');
  }

  /* The closing line of Willow's walkthrough. The written version in
     onboarding.js is already on screen when this runs, so an answer
     that never arrives costs nothing. */
  if (kind === 'onboard') {
    return onboardPrompt(c);
  }

  /* Willow speaking up after a log. The written line in nudges.js is
     already on screen, so an answer that never arrives costs nothing. */
  /* A month of check ins looked back on. The written version from
     monthReview.js is already on screen. */
  if (String(kind).indexOf('month:') === 0) {
    return monthPrompt(c);
  }

  if (String(kind).indexOf('nudge:') === 0) {
    return nudgePrompt(c.reason, c);
  }

  /* The words around today's plan. The activities are the library's,
     this is the only part Willow writes. See planFraming.js. */
  if (String(kind).indexOf('planframe:') === 0) {
    return planFramingPrompt(c);
  }

  if (kind === 'checkin') {
    return [
      'A parent has just recorded how today went for one of her children. Respond to her, briefly.',
      who,
      c.childLine ? 'The child: ' + c.childLine : '',
      'What she recorded today: ' + (c.summary || 'nothing specific'),
      c.note ? 'She also wrote: ' + c.note : '',
      c.run ? 'Context you may use gently: ' + c.run : '',
      '',
      '3 sentences at most, 80 words maximum.',
      'Acknowledge the day she actually described. If it was hard, say so plainly rather than brightening it.',
      'You may offer one small concrete thing to try, or nothing at all if reassurance is what the day needs.',
      'Do not list several suggestions. Do not ask her a question. Do not diagnose anything.',
    ].filter(Boolean).join('\n');
  }

  return '';
}

/* A hard cap on how many of these the app will generate in a day, so a
   background feature can never quietly eat the budget that the chat
   she actually opened is meant to have. */
/* Six, not twelve.

   Twelve was set when the only background writers were the affirmation
   and the morning line. There are five now: those two, the reply after
   a check in, Willow speaking up after a log, and the framing on each
   child's plan. With two children that is easily a dozen before lunch,
   all of it drawn from the same allowance the chat needs.

   Six is deliberately mean. Every one of these ships a written version
   that is already on screen, so the cost of running out is that a line
   stays as written, which nobody notices. The cost of the CHAT running
   out is that a parent at two in the morning gets nothing, which they
   notice very much. */
export const LIFT_DAILY_LIMIT = 6;

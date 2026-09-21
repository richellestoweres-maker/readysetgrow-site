/**
 * Ready Set Grow: Willow Speaking Up
 * ------------------------------------------------------------------
 * She asked for this: "maybe she can pop up sometimes with a message
 * after something is logged".
 *
 * THE WORD THAT DOES ALL THE WORK IS "SOMETIMES".
 * An assistant who says something every single time you touch anything
 * is not a friend, it is a notification. Within a week you stop reading
 * her, and the one time she has something worth saying it goes past you
 * with everything else.
 *
 * So the default is silence. Every log still gets its quiet line of
 * encouragement on the Logs screen, which is the card that was already
 * there. Willow herself only surfaces when one of the reasons below is
 * actually true, and even then not more than a few times a day and not
 * twice in a row within a few hours.
 *
 * WHAT COUNTS AS WORTH SAYING
 * Something changed, something started, something has been going for a
 * while, or somebody is up at three in the morning. Those are the
 * moments a friend would notice. Everything else is just Tuesday.
 *
 * THE RULE INHERITED FROM encourage.js, RESTATED HERE BECAUSE THIS IS
 * ALSO A PLACE THAT COULD GET IT WRONG: nothing in here praises a
 * number for moving, in either direction, and nothing comments on
 * weight, size or food.
 */

/* How long Willow stays quiet after speaking up, and how many times in
   one day she is allowed to at all. Deliberately low. */
export const NUDGE_QUIET_MINUTES = 200;
export const NUDGE_DAILY_MAX = 3;

/* How long her bubble sits there before it gives up and goes away on
   its own. Long enough to notice, short enough that it is not still
   there when you come back from the school run. */
export const NUDGE_LIFE_MINUTES = 12;

/* Nothing is said about a first log for these, because "you logged a
   diaper for the first time" is not an observation, it is a receipt. */
export const NUDGE_NO_FIRST = ['diaper', 'feed', 'bottle', 'nurse', 'mom-pump', 'mom-nurse'];

/* A mood worth checking in on. Not a diagnosis and never treated as
   one, just the difference between "all right" and somebody telling
   you plainly that today was bad. */
export const NUDGE_LOW_MOODS = ['Flat', 'Anxious', 'Angry', 'Very low'];

/* ------------------------------------------------------------------
 * THE REASONS, AND WHAT SHE SAYS WHEN SHE HAS NO MODEL TO WRITE WITH
 *
 * Every one of these ships written. Willow rewrites it when she can
 * reach the model, and the written one is what is on screen the whole
 * time she is trying. Same rule as dailyLift.js and onboarding.js.
 * ------------------------------------------------------------------ */

export const NUDGE_REASONS = {
  night: {
    id: 'night',
    /* The one that matters most. Somebody logging a feed at 3am is
       awake and alone, and that is the single moment this whole app
       exists for. */
    lines: [
      'You are up in the middle of the night again. I am here if you want company while you wait '
      + 'for them to go back down.',
      'Three in the morning is its own kind of lonely. I am awake too, if you want to talk about '
      + 'anything at all.',
    ],
    ask: 'A parent has just logged something in the middle of the night, so they are awake and '
      + 'probably alone with a baby. Say one warm thing and offer to keep them company. Do not '
      + 'give sleep advice and do not tell them to rest.',
  },
  /* Somebody has just lit their firefly, which means they are awake,
     probably alone, and reached for a screen to feel less like the
     only one. Willow saying something at that exact moment is the
     whole point of her existing. */
  lit: {
    id: 'lit',
    lines: [
      'I saw your light go on. However this night is going, you are not the only one having it.',
      'Your light is up. I am here too, if you want to say how tonight is actually going.',
      'You lit yours. Sitting in the dark with a baby is its own thing, and I am about if you want the company.',
    ],
    ask: 'A parent has just lit their light on a screen that shows how many other parents are '
      + 'awake right now. They are almost certainly up at an odd hour, on their own, and looking '
      + 'for company. Say one warm thing about not being the only one and offer to stay with them. '
      + 'Do not give any advice, do not mention sleep training, and do not tell them to rest.',
  },
  first: {
    id: 'first',
    lines: [
      'That is the first time you have kept track of that. Do it a few more times and I can start '
      + 'showing you what it usually looks like for you.',
      'First one of those. They only really start to mean something once there are a few, so I '
      + 'will keep them together for you.',
    ],
    ask: 'A parent has just used a particular log for the very first time. Say one line about what '
      + 'keeping track of it will show them over time. Do not congratulate them and do not mention '
      + 'any number.',
  },
  run: {
    id: 'run',
    lines: [
      'That is a few days in a row now of doing something that was for you. I noticed, in case '
      + 'nobody else did.',
      'You have kept something for yourself going for a few days. That is harder than it sounds '
      + 'with everything else you are carrying.',
    ],
    ask: 'A parent has kept up something for themselves several days running, such as moving, '
      + 'getting outdoors, or reading. Say one line noticing it. Do not use the word streak, do '
      + 'not tell them to keep it up, and do not mention any number.',
  },
  /* A run of hard days is not a diagnosis and this line is careful not
     to make it one. It says that support exists and that plenty of
     people use it, and it stops there. The number is the one the app
     already carries in careTopics.js and postpartum.js, so a parent
     is never handed a number the rest of the app does not stand behind.

     Why it exists: a parent recording "very low" three times in a
     2 weeks is the exact person this app was built for, and saying
     nothing at all would be its own kind of answer. */
  lowrun: {
    id: 'lowrun',
    lines: [
      'That is a few hard days close together now. Nothing about that means anything is wrong with '
      + 'you, and it is also the kind of thing worth saying out loud to somebody. I am here, and so '
      + 'is the National Maternal Mental Health Hotline on 1-833-852-6262, free, day or night.',
      'You have put down several hard days recently. I am not going to read anything into that, but '
      + 'I do want you to know that talking to somebody about it is ordinary and it helps. The '
      + 'National Maternal Mental Health Hotline is 1-833-852-6262, free and confidential.',
    ],
    /* Deliberately not sent to the model. This is the one line in the
       app where the exact wording and the exact number matter more than
       it sounding fresh, so Willow reads it as written. */
    fixed: true,
  },
  low: {
    id: 'low',
    lines: [
      'You put down that today has been hard. I am not going to try to fix it, but I am here if '
      + 'you want to say more about it.',
      'Thank you for being honest about today rather than writing something easier. Talk to me if '
      + 'you want to.',
    ],
    ask: 'A parent has just recorded honestly that they are having a hard day. Say one line back. '
      + 'Acknowledge it plainly rather than brightening it, and offer to listen. Do not suggest a '
      + 'cause, do not name any condition, do not give advice, and do not ask them a question.',
  },
  back: {
    id: 'back',
    lines: [
      'It has been a little while. Nothing here expired and nothing is behind, it all just waited '
      + 'for you.',
      'Good to see you. Nothing was lost while you were away, it is all still where you left it.',
    ],
    ask: 'A parent has logged something after not opening the app for a while. Say one warm line. '
      + 'Make clear that nothing is behind and nothing was lost. Do not say welcome back and do '
      + 'not mention how long it has been.',
  },
};

/* ------------------------------------------------------------------
 * THE DECISION, KEPT PURE SO IT CAN BE TESTED WITHOUT A BROWSER
 *
 * facts is everything the app already knows, gathered by the caller:
 *   typeId       what was just logged
 *   hour         hour of the day, 0 to 23
 *   isFirst      no earlier log of this type exists
 *   selfRun      how many self care logs in the last week
 *   mood         the mood value, if this was a mood log
 *   lowCount     how many hard days recorded in the last 2 weeks
 *   daysAway     days since the log before this one
 *   lastAt       when Willow last spoke up, in ms
 *   todayCount   how many times she has spoken up today
 *   now          ms
 * ------------------------------------------------------------------ */
export function nudgeReason(facts) {
  const f = facts || {};
  const now = Number(f.now) || 0;

  /* The two limits come first, so a day full of logging cannot turn her
     into a notification. */
  if ((f.todayCount || 0) >= NUDGE_DAILY_MAX) return null;
  if (f.lastAt && now - f.lastAt < NUDGE_QUIET_MINUTES * 60 * 1000) return null;

  /* Ordered by how much the moment actually deserves interrupting for. */
  const hour = Number(f.hour);
  if (hour >= 0 && hour < 5) return 'night';

  if (f.mood && NUDGE_LOW_MOODS.indexOf(f.mood) !== -1) {
    return (f.lowCount || 0) >= 3 ? 'lowrun' : 'low';
  }

  if ((f.daysAway || 0) >= 5) return 'back';

  if ((f.selfRun || 0) >= 3) return 'run';

  if (f.isFirst && NUDGE_NO_FIRST.indexOf(f.typeId) === -1) return 'first';

  return null;
}

/* Which of the written lines, so the same one does not come back every
   time the same reason does. Seeded rather than random so a repaint
   cannot swap the words out from under somebody mid sentence. */
export function nudgeWritten(reasonId, seed) {
  const r = NUDGE_REASONS[reasonId];
  if (!r) return '';
  const n = String(seed || '').split('').reduce((a, ch) => a + ch.charCodeAt(0), 0);
  return r.lines[n % r.lines.length];
}

export function nudgePrompt(reasonId, context) {
  const r = NUDGE_REASONS[reasonId];
  if (!r) return '';
  const c = context || {};
  return [
    r.ask,
    c.parentName ? 'Their name is ' + c.parentName + '.' : '',
    c.label ? 'What they just logged: ' + c.label + '.' : '',
    '',
    '2 sentences at most, 35 words maximum.',
    'Speak to them, not about them. No exclamation marks, no emoji, nothing bubbly.',
    'Never comment on a number, on a number going up or down, on weight, on size, or on food.',
    'Never diagnose anything and never suggest a condition.',
    'Return the line only.',
  ].filter(Boolean).join('\n');
}

/* What the tap on her bubble turns into, so it becomes a conversation
   rather than a message that vanishes. */
export const NUDGE_OPENERS = {
  night: 'I am up with them again.',
  lit: 'It is just me and them right now.',
  lowrun: 'Can we talk about how I have been feeling?',
  first: 'What will this log show me?',
  run: 'Thanks for noticing.',
  low: 'Today has been hard.',
  back: 'I have been away a while.',
};

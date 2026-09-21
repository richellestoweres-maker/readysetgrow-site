/**
 * Ready Set Grow: Willow Walking Somebody In The Door
 * ------------------------------------------------------------------
 * She asked for this in her own words: Willow should pop up once people
 * sign up and help walk them through setting up their profile, what
 * this app does, what it is useful for, and how to use it.
 *
 * WHY IT IS WILLOW AND NOT A FORM
 * A brand new account lands on a screen full of empty cards asking for
 * things, and an empty app looks like work. Willow asking four short
 * questions is the same four answers, given to somebody rather than
 * typed into a form, and it is the first time a parent meets the thing
 * that is meant to be their best friend at two in the morning.
 *
 * THE RULES THIS FILE HOLDS TO
 * 1. Every step is skippable, and skipping loses nothing. Everything
 *    asked here can also be set later from a profile or from settings.
 * 2. Nothing is required. A parent who taps straight through ends up
 *    with a working app, just a less tailored one.
 * 3. Every line has a WRITTEN version here and that is what ships.
 *    Willow may rewrite the closing line once she knows their name and
 *    their child. She never gets to leave a blank space where the kind
 *    thing was. Same rule as dailyLift.js.
 * 4. Nothing said here is ever shown to anybody else.
 */

export const ONBOARD_STEPS = ['hello', 'you', 'where', 'child', 'ready'];

/* The very first thing a new parent reads. Written, never generated,
   because waiting on a model for the opening line of the app would mean
   a blank screen at exactly the wrong moment. */
export const ONBOARD_HELLO = [
  'I am here to help you with whatever this stage of parenting is throwing at you. '
  + 'I am not a doctor or a therapist, but I can talk things through with you, help you '
  + 'work out what is going on, and point you somewhere real when you need it.',
  'Let me show you around. It takes about a minute, and you can stop at any point.',
].join('\n\n');

/* THE WELCOME POP UP.
   She wanted Willow to pop up the moment somebody makes an account and
   say hi, who she is, and how she can help, rather than a page of text.
   So the first step is Willow arriving as a card over the app, talking
   in short chat bubbles, with one line that says what the app is. */
export const WILLOW_WELCOME = {
  hi: "Hi, I'm Willow.",
  bubbles: [
    "Welcome to Ready Set Grow, your family's guide from pregnancy all the way to 18.",
    "I'm the helper who lives in here. Think of me as the friend who already read all the "
      + "research, so you don't have to.",
  ],
  helpsTitle: "Here's how I can help",
  helps: [
    { icon: 'chat', title: 'Ask me anything, any hour',
      body: 'Tap the leaf in the corner and ask in your own words. No search box, no judgment.' },
    { icon: 'calendar', title: 'Keep track of it all',
      body: 'Feeds, sleep, cycles, milestones and appointments, for you and each of your kids.' },
    { icon: 'bulb', title: 'Give you the short version',
      body: 'Long pages start with my quick summary. The full details are always one tap away.' },
    { icon: 'shield', title: 'Point you to real help',
      body: "I'm not a doctor. When something needs one, I'll say so, and the \"I need help\" "
        + 'button is always there.' },
  ],
  go: 'Show me around',
  skip: "I'll explore on my own",
  note: 'Takes about a minute. You can change anything later.',
};

/* What the app is actually for, in plain statements rather than
   marketing. Four, because five starts to read as a list of features. */
export const ONBOARD_WHAT = [
  { icon: 'leaf', title: 'It follows your child, not a calendar',
    body: 'Everything reshapes around how old they actually are, from sleep windows to what to '
      + 'say when bedtime falls apart. It keeps up as they grow, all the way through school.' },
  { icon: 'heart', title: 'It is for you as much as for them',
    body: 'Your recovery, your feeding, your mood, your cycle, your appointments. A parent who '
      + 'is running on empty cannot pour, and most apps forget that entirely.' },
  { icon: 'bulb', title: 'Ask me anything, any hour',
    body: 'Witching hour, a rash you cannot place, a teenager who has stopped speaking to you. '
      + 'Ask in your own words. I will not hand you a search box.' },
  { icon: 'shield', title: 'What you write here is yours',
    body: 'Your children, your logs and your memories belong to your account alone. Nothing '
      + 'becomes public unless you deliberately share it.' },
];

/* What Willow says at the top of each step. Short, because the step
   itself is the content and she is only introducing it. */
export const ONBOARD_LINES = {
  you: 'First, what should I call you? This is just so I am not talking to a stranger.',
  where: 'Now the part that does the most work. Tick anything that is true for you today, '
    + 'and I will bring those parts of the app forward and put the rest away. Nothing here '
    + 'is required and none of it is ever shown to anybody else.',
  child: 'Who are we growing? A name and a birthday is genuinely all I need. Everything else '
    + 'follows from it.',
  ready: 'That is everything I need. You can change any of it later, and I will be in the '
    + 'corner of every screen whenever you want me.',
};

export const ONBOARD_TITLES = {
  hello: 'Hi, I am Willow',
  you: 'What should I call you?',
  where: 'Where are you right now?',
  child: 'Who are we growing?',
  ready: 'You are all set',
};

/* The skip wording matters. "Skip" sounds like you are missing out.
   These say plainly that nothing is lost, because nothing is. */
export const ONBOARD_SKIP = 'I will do this later';
export const ONBOARD_SKIP_NOTE =
  'Nothing is lost by skipping. Everything here can be set later from your profile.';

export const ONBOARD_NAME_NOTE =
  'Your username is the only thing other parents ever see, and only if you post.';

export const ONBOARD_CHILD_NOTE =
  'Expecting? Put the due date in and the app follows the pregnancy instead.';

export const ONBOARD_CHILD_SKIP =
  'You can add children later, and you can add as many as you like. Each one keeps their '
  + 'own notes, milestones and memories, kept separate from the others.';

/* The closing screen. Three things worth doing first, so nobody lands
   on a full app with no idea where to start. Each one points at
   something that already exists. */
export const ONBOARD_FIRST_THINGS = [
  { id: 'willow', label: 'Ask me something',
    body: 'Tap the leaf in the corner. Anything at all, in your own words.' },
  { id: 'logs', label: 'Log one thing today',
    body: 'A feed, a nap, how you slept. One is enough to start seeing your own patterns.' },
  { id: 'memory', label: 'Save one memory',
    body: 'A photo, a voice memo, or something funny they said. It never expires, and it '
      + 'comes back to you a year from now.' },
];

/* The written closing line, used as it is unless Willow rewrites it.
   Takes what they just told us so it is specific even before the model
   is involved. */
export function onboardClosing(ctx) {
  const c = ctx || {};
  const name = (c.parentName || '').trim();
  const kid = (c.childName || '').trim();
  const hi = name ? name + ', ' : '';

  if (kid) {
    return hi.charAt(0).toUpperCase() + hi.slice(1)
      + 'the app is set up around ' + kid + ' now. What you see changes as they grow, so you '
      + 'will not have to come back and reorganize anything. I am in the corner whenever you '
      + 'want me.';
  }
  return (hi ? hi.charAt(0).toUpperCase() + hi.slice(1) : '')
    + 'you are set up. Add a child whenever you are ready and everything reshapes around them. '
    + 'I am in the corner whenever you want me.';
}

/* Willow may rewrite the closing line, and only that line. Everything
   before it has to appear instantly. */
export function onboardPrompt(ctx) {
  const c = ctx || {};
  return [
    'A parent has just finished setting up their account in a parenting app. Say one warm '
    + 'closing thing to them.',
    c.parentName ? 'Their name is ' + c.parentName + '.' : '',
    c.childName ? 'Their child: ' + c.childName + (c.childAge ? ', ' + c.childAge : '') + '.' : '',
    c.situation ? 'What they told you about where they are: ' + c.situation : '',
    '',
    '2 sentences at most, 40 words maximum.',
    'Speak to them, not about them. Refer to what they actually told you.',
    'Do not list features, do not welcome them to anything, do not use the word journey.',
    'No exclamation marks, no advice, no questions.',
    'Return the line only.',
  ].filter(Boolean).join('\n');
}

/* A short readable line describing what they ticked, for the prompt
   above and for nothing else. */
export function onboardSituationLine(sit, stageLabels, roleLabels) {
  const s = sit || {};
  const parts = [];
  (s.stages || []).forEach((id) => { if (stageLabels[id]) parts.push(stageLabels[id]); });
  (s.roles || []).forEach((id) => { if (roleLabels[id]) parts.push(roleLabels[id]); });
  return parts.join(', ');
}

/* WHO SEES THIS AND WHEN.

   Only an account that was created in this session, or a guest who has
   just chosen to look around. Never somebody signing in on a second
   device, whose children are still on their way down from the cloud and
   whose app would otherwise ask them to set up everything they already
   have. That race is the reason this is a deliberate flag rather than a
   guess based on an empty account. */
export function onboardShouldOpen(ob) {
  return !!(ob && ob.open && !ob.done);
}

export function onboardNext(step) {
  const i = ONBOARD_STEPS.indexOf(step);
  if (i === -1 || i === ONBOARD_STEPS.length - 1) return null;
  return ONBOARD_STEPS[i + 1];
}

export function onboardBack(step) {
  const i = ONBOARD_STEPS.indexOf(step);
  if (i <= 0) return null;
  return ONBOARD_STEPS[i - 1];
}

export function onboardIndex(step) {
  const i = ONBOARD_STEPS.indexOf(step);
  return i === -1 ? 0 : i;
}

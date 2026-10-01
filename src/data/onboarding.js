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

/* ONE QUESTION AT A TIME.

   She asked for this and she was right about why: "when you first sign
   up it come up with slides, like what's your first and last name,
   next slide birthday, next slide are you trying to conceive, pregnant,
   have children, dad, grandparent, adoptive parent, check all that
   apply, next slide letting you build your own profile, next slide
   letting you build your child's profile, so they don't have to play
   with the whole app in order to get set up because these may be hard
   to find."

   WHAT WAS WRONG BEFORE. The same questions were there, 3 or 4 to a
   screen, in dense cards. A page with 7 things on it reads as work,
   and the things that actually tailor the app, such as whether a child
   has anything turned on, were not in the flow at all. They were
   somewhere in the app, which is exactly her point: hard to find.

   SO EVERY SLIDE ASKS 1 THING. The list below is the full set. Which
   of them a person actually sees depends on their answers, because
   asking a grandparent for a due date is how an app loses somebody.
   onboardSteps() works out the real list. Everything is still
   skippable and nothing is required. */
export const ONBOARD_STEPS = ['hello', 'name', 'bday', 'who', 'calledby', 'due',
  'kids', 'kidname', 'kidbday', 'kidsex', 'kidneeds', 'ready'];

/* The slides that belong to one child, run once per child. */
export const ONBOARD_KID_STEPS = ['kidname', 'kidbday', 'kidsex', 'kidneeds'];

/* THE ONE SLIDE THAT DOES THE MOST WORK.

   Her list, in her order, written the way she said it. It maps onto
   what the app already holds rather than inventing a new shape: some
   of these are a stage, some are a role, and the slide does not make
   anybody care which is which. */
export const ONBOARD_WHO = [
  { id: 'trying', kind: 'stage', label: 'Trying to conceive' },
  { id: 'expecting', kind: 'stage', label: 'Pregnant right now' },
  { id: 'postpartum', kind: 'stage', label: 'In the first year after a birth' },
  { id: 'haskids', kind: 'flag', label: 'I have children already' },
  { id: 'birth', kind: 'role', label: 'I gave birth to them' },
  { id: 'partner', kind: 'role', label: 'My partner gave birth' },
  { id: 'adoptive', kind: 'role', label: 'Adoptive parent' },
  { id: 'foster', kind: 'role', label: 'Foster parent' },
  { id: 'step', kind: 'role', label: 'Step parent' },
  { id: 'kinship', kind: 'role', label: 'Grandparent, or family raising them' },
  { id: 'guardian', kind: 'role', label: 'Guardian' },
];

export const ONBOARD_WHO_NOTE =
  'Tick anything that is true. It moves those parts of the app to the front and puts the rest '
  + 'away, and none of it is ever shown to anybody else.';

/* How many, asked plainly, because the alternative is a parent of 4
   adding them one at a time and wondering if it took. */
export const ONBOARD_COUNTS = [1, 2, 3, 4, 5, 6];
export const ONBOARD_COUNT_MORE = 'More than 6';
export const ONBOARD_COUNT_NONE = 'None yet';

export const ONBOARD_SEX = [
  { id: 'f', label: 'Girl' },
  { id: 'm', label: 'Boy' },
  { id: '', label: 'Rather not say' },
];
export const ONBOARD_SEX_NOTE =
  'Only used for growth charts, which are drawn differently, and for the parts about puberty. '
  + 'Nothing else in the app changes, and you can change it or clear it whenever you like.';

export const ONBOARD_NEEDS_NOTE =
  'If something about how they learn or how their day goes has a name, or you think it might, '
  + 'turning it on here reshapes the whole app around them rather than adding a page about it. '
  + 'Nothing here is a diagnosis and nothing is shared.';
export const ONBOARD_NEEDS_NONE = 'Nothing yet, or still working it out';

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
  name: 'First, what should I call you? This is just so I am not talking to a stranger.',
  bday: 'And your birthday. This is only so the app knows when to wish you a happy one, and '
    + 'so the parts about your own body know roughly where you are.',
  who: 'Now the one that does the most work. Tick anything that is true for you today.',
  calledby: 'What do they call you? It changes how I write to you, which sounds small and is not.',
  due: 'When are they due? An estimate is fine, and you can change it whenever the estimate does.',
  kids: 'How many children are we looking after here? Each one gets their own everything, kept '
    + 'separate from the others.',
  kidname: 'Who are we growing?',
  kidbday: 'And their birthday. Almost everything in the app follows from this one answer.',
  kidsex: 'One more, and it is optional.',
  kidneeds: 'Last one, and it is the one that changes the most.',
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
  name: 'What is your name?',
  bday: 'When is your birthday?',
  who: 'Where are you right now?',
  calledby: 'What do they call you?',
  due: 'When are they due?',
  kids: 'How many children?',
  kidname: 'What is their name?',
  kidbday: 'When were they born?',
  kidsex: 'Boy or girl?',
  kidneeds: 'Anything worth knowing?',
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

/* WHICH SLIDES THIS PERSON ACTUALLY SEES.

   Built from what they have already said rather than fixed, because a
   grandparent should never be asked for a due date and somebody with
   no children yet should not be walked through a child they do not
   have. The child slides repeat, once per child, which is why they
   carry an index. */
export function onboardSteps(ctx) {
  const c = ctx || {};
  const out = ['hello', 'name', 'bday', 'who'];
  if (c.expecting) out.push('due');
  if (c.hasKids) out.push('calledby');
  out.push('kids');
  const n = Math.max(0, Math.min(6, Number(c.kidCount) || 0));
  for (let i = 0; i < n; i++) {
    ONBOARD_KID_STEPS.forEach((s) => out.push(s + ':' + i));
  }
  out.push('ready');
  return out;
}

/* A step is either a plain name or a child slide carrying its index,
   such as kidbday:1. These 2 take them apart so nothing else has to. */
export function onboardStepName(step) {
  return String(step || '').split(':')[0];
}

export function onboardStepKid(step) {
  const parts = String(step || '').split(':');
  return parts.length > 1 ? Number(parts[1]) : -1;
}

export function onboardNext(step, ctx) {
  const steps = onboardSteps(ctx);
  const i = steps.indexOf(step);
  if (i === -1 || i === steps.length - 1) return null;
  return steps[i + 1];
}

export function onboardBack(step, ctx) {
  const steps = onboardSteps(ctx);
  const i = steps.indexOf(step);
  if (i <= 0) return null;
  return steps[i - 1];
}

export function onboardIndex(step, ctx) {
  const i = onboardSteps(ctx).indexOf(step);
  return i === -1 ? 0 : i;
}

export function onboardCount(ctx) {
  return onboardSteps(ctx).length;
}

/**
 * Ready Set Grow: One privacy page, instead of twelve
 * ------------------------------------------------------------------
 * WHY THIS FILE EXISTS
 * She looked at the Fireflies screen and said, correctly, that it read
 * like a safety briefing rather than a product. Four bullet points
 * about what her light does not say, and a paragraph explaining why
 * there is no map, sitting on a screen whose entire job is to make
 * somebody at 3am feel less alone.
 *
 * That was not the only place. The app was announcing its own
 * carefulness on the community screen, on the composer, in the
 * memories section, in the situation block in Settings, and next to
 * every product it named. Each one was written well and each one was
 * reassuring, and stacked up they said something the app did not mean,
 * which is that using this thing is a risk you should be thinking
 * about constantly.
 *
 * So: it all moves here. One page, reachable from Settings and from
 * her own profile, written properly and in full, and the screens
 * themselves get at most one quiet line at the bottom pointing at it.
 *
 * THE RULE FOR EVERY OTHER SCREEN FROM NOW ON
 * Say the reassuring thing once, in small type, at the bottom, and
 * link here. Never lead with it. Never repeat it. A parent who wants
 * the detail will come and read this page, and a parent who does not
 * should never be made to.
 *
 * THIS PAGE IS NOT A LEGAL DOCUMENT and does not pretend to be one. It
 * is a plain account of what the app does with what she puts into it.
 * If the app ever takes money, adds advertising, or is sold, this page
 * has to be rewritten before any of that ships, not after.
 */

export const PRIV_TITLE = 'Privacy';

export const PRIV_SUB = 'What this app knows, where it goes, and who can see it.';

export const PRIV_INTRO =
  'Plain language, no lawyers. If something here is not clear, that is a fault in this page rather '
  + 'than in you, and it is worth telling us about.';

export const PRIV_SHORT = {
  title: 'The short version',
  items: [
    'Everything about your children is yours alone. Nobody else can read it, including us in any ordinary sense.',
    'Nothing you write is shared anywhere unless you choose to share that specific thing.',
    'Your location is never asked for and never collected, anywhere in this app.',
    'You can take all of it with you, and you can delete all of it.',
    'There is no advertising here and nothing is sold to anybody.',
  ],
};

export const PRIV_SECTIONS = [
  {
    id: 'children',
    title: 'Your children',
    body: [
      'Their names, birthdays, photos, milestones, logs, check ins and support lenses are stored against your account and nobody else’s. There is no path in this app that lets one account read another account’s children, and there is not supposed to be one.',
      'If you are signed in, it syncs so the same information is on your phone and your laptop. If you are not, it stays on the one device.',
      'Nothing about a child can become community content. That is built into the structure rather than promised: a post physically cannot carry a child’s identity, and the server refuses one that tries.',
    ],
  },
  {
    id: 'posts',
    title: 'What you write',
    body: [
      'Everything you write starts private. A post on your own page is read by you and by nobody else.',
      'Sharing something to the community is a separate decision you make for that one post, and you can take it back down afterwards.',
      'Memories are private always. There is no way to share one, on purpose.',
      'A shared post carries the username you chose and nothing else. Not your name, not your email, not your children.',
    ],
  },
  {
    id: 'community',
    title: 'The community',
    body: [
      'Posts go up straight away rather than waiting for approval, because a room where every post waits on one person is not a room.',
      'A narrow filter holds back posts containing medication doses, phone numbers and email addresses, for review rather than deletion. Those 3 because they are the ones that do real harm: a wrong dose passed between strangers, and contact details that move a conversation somewhere with no protections at all.',
      'Anything can be reported, and anybody can be blocked. Blocking is held on your own device, so who you have blocked is nobody else’s business including ours.',
    ],
  },
  {
    id: 'fireflies',
    title: 'Fireflies',
    body: [
      'A lit firefly is 2 numbers: when it goes out, and how many people have tapped it. That is the whole record.',
      'It carries no name, no username, no children, no words and no place. Other people see a light.',
      'There is no map, and that is deliberate. Most people awake at 3am with a baby are alone in a house, and a map saying so near a real address is a useful thing for the wrong person to have. Knowing somebody else is up is the entire point, and a light says that perfectly well without saying where.',
      'Your light goes out on its own, and you can put it out sooner at any time.',
    ],
  },
  {
    id: 'location',
    title: 'Location',
    body: [
      'Never asked for, never collected, never stored, never sent. Not for Fireflies, not for the community, not for anything.',
      'There is no feature in this app that needs it, and the ones that might have wanted it were built a different way on purpose.',
    ],
  },
  {
    id: 'willow',
    title: 'Willow',
    body: [
      'What you say to Willow goes to Google’s AI service to be answered, which is how she works at all.',
      'She is given what is useful for your question, such as your child’s age and which lenses you have on, and your own recent logs if you asked about yourself. She is not given your full history.',
      'Your conversations with her are kept on your own device rather than on a server.',
      'She is not a doctor, she refuses to give medication doses, and she will point you at real help rather than handle an emergency herself.',
    ],
  },
  {
    id: 'yours',
    title: 'Taking it with you, and deleting it',
    body: [
      'You can export your logs at any time from the Logs screen, as plain text you keep.',
      'Deleting a child removes their record. Deleting your account removes everything attached to it.',
      'A post you take down comes down. A post a moderator removes stays out of sight rather than being recoverable by you.',
    ],
  },
  {
    id: 'money',
    title: 'Money, advertising and recommendations',
    body: [
      'There is no advertising in this app and no plan for any.',
      'Nothing here is sponsored. Where a product is named, such as a bottle or a pacifier, it is named because being told what exists is genuinely useful, and nobody has paid for it to be there.',
      'Where a claim about a product rests on research the manufacturer funded, the app says so.',
      'If that ever changes, it will be said plainly on this page and on the screen in question, in the same size type as everything else.',
    ],
  },
  {
    id: 'notdoctor',
    title: 'What this app is not',
    body: [
      'It is not medical advice and it does not replace your pediatrician, your midwife or your IBCLC.',
      'Support lenses are not diagnoses and never become one. Turning one on changes what the app puts in front of you and nothing else.',
      'Nothing in the app will ever hide a reason to get seen. Softening the wording is allowed. Removing the guidance is not.',
    ],
  },
];

export const PRIV_CONTACT = {
  title: 'Asking about any of this',
  body:
    'If you want to know what is held about you, or you want it gone, or something on this page does '
    + 'not match what you are seeing in the app, say so and it gets answered properly.',
};

export const PRIV_FOOTER =
  'This page is written to be read rather than to protect anybody legally. It describes how the app '
  + 'actually behaves today.';

/* The one line other screens are allowed to show. Any screen that
   wants to reassure somebody uses this, in small type, at the bottom,
   once. See the header of this file for why. */
export const PRIV_LINK_LINE = 'What this app keeps, and what it never does, is all in one place.';

export default PRIV_TITLE;

/* WHO REVIEWED THE MEDICAL CONTENT.
   Left empty on purpose. A health app earns trust, and gets through the
   app stores, faster with a named clinician on it, but only a real one
   who has actually read the pages. Fill these in once somebody such as
   a nurse, midwife, lactation consultant or doctor has reviewed the
   content, and the line appears on the About page. Until then nothing
   is shown, because a made up reviewer would be worse than none. */
export const CONTENT_REVIEW = {
  name: '',
  credential: '',
  scope: '',
  date: '',
};

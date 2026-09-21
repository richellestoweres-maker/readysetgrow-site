/**
 * Ready Set Grow: Notifications
 * ------------------------------------------------------------------
 * The app being able to say something while it is closed.
 *
 * WHY THIS NEEDS A SERVER AND MOST FEATURES DO NOT
 * Everything else in this app runs in the browser. A notification
 * cannot, because the whole point is that it arrives when the browser
 * is not running. Something else has to be awake and decide to send
 * it, and that something is a scheduled function on Firebase. So this
 * file is the words and the rules, the app holds the permission and
 * the token, and functions/index.js holds the part that is awake.
 *
 * NOTHING IS ASKED FOR UNTIL IT WOULD WORK
 * WEB_PUSH_KEY below is empty until the project has a web push
 * certificate. While it is empty the app never asks for permission,
 * never shows the settings, and never mentions notifications, because
 * a permission prompt that leads nowhere burns the one chance a site
 * gets to ask. A browser that has been refused once is very hard to
 * ask again.
 *
 * THE RULE FOR WHAT IS WORTH INTERRUPTING SOMEBODY FOR
 * A parent of a newborn is asleep at unpredictable times and has a
 * phone next to their head. Getting this wrong is worse than not
 * having it. So: nothing is on by default except the things the
 * parent themselves set up, nothing arrives between the quiet hours
 * they choose, and anything that is not time critical waits and goes
 * out together once a day rather than one at a time.
 */

/* The public half of the project's web push certificate, from the
   Firebase console under Cloud Messaging. Public by design, the same
   way the rest of the Firebase config is: it identifies the project to
   the browser's push service and authorizes nothing. Empty means the
   whole feature stays asleep. */
export const WEB_PUSH_KEY = '';

export function pushConfigured() {
  return typeof WEB_PUSH_KEY === 'string' && WEB_PUSH_KEY.length > 20;
}

export const PUSH_TITLE = 'Notifications';
export const PUSH_SUB = 'What the app is allowed to interrupt you for.';

export const PUSH_INTRO =
  'Nothing here is on unless you turn it on, and nothing arrives during the hours you mark as quiet.';

/* WHAT CAN BE SENT.
   Deliberately short. Every one of these is something a parent
   actually asked for at some point, rather than a reason to re engage
   them with the app. */
export const PUSH_KINDS = [
  {
    id: 'reply',
    label: 'Somebody replies to you',
    detail: 'A reply to one of your posts, or to a comment you left. Sent when it happens.',
    instant: true,
    defaultOn: true,
  },
  {
    id: 'metoo',
    label: 'Somebody lights up with you',
    detail: 'When you have a firefly lit at night and another parent sends a me too. Sent when it happens, and only while yours is lit.',
    instant: true,
    defaultOn: true,
  },
  {
    id: 'jobs',
    label: 'The jobs left today',
    detail: 'One message in the evening listing what is still unticked on the chart. Only if there is anything.',
    instant: false,
    defaultOn: false,
    at: 18,
  },
  {
    id: 'checkin',
    label: 'The daily check in',
    detail: 'A nudge to answer how the day went, once, at a time you pick. 30 seconds.',
    instant: false,
    defaultOn: false,
    at: 19,
  },
  {
    id: 'appointment',
    label: 'Something is coming up',
    detail: 'A vaccine dose or a check that is due around now, sent a few days before rather than on the day.',
    instant: false,
    defaultOn: false,
    at: 9,
  },
];

export const PUSH_QUIET = {
  title: 'Quiet hours',
  body: 'Nothing that is not a reply to you will arrive between these times. A reply still waits until '
    + 'morning if it lands in the quiet hours, it does not jump the queue.',
  defaultFrom: 21,
  defaultTo: 7,
};

export const PUSH_HOW = {
  title: 'How it works and what it costs you',
  items: [
    'Your phone, not us, decides whether an app may interrupt you. Turning something on here only means the app will try.',
    'On an iPhone this only works once the app is on your home screen. That is an Apple rule and there is no way around it.',
    'You can turn the whole thing off in one tap here, and again in your phone settings, and we will not ask twice.',
    'Nothing in a notification says anything about your child by name on a lock screen unless you turn that on.',
  ],
};

export const PUSH_NAMES = {
  title: 'Names on the lock screen',
  body: 'By default a notification says what happened without saying who it is about, because a lock '
    + 'screen is read by whoever is standing near it. Turn this on if you would rather see the name.',
};

export const PUSH_DENIED =
  'Your phone has notifications blocked for this app. Nothing here can turn them back on, only you can, '
  + 'in your phone settings under this app or this website.';

export const PUSH_NOT_YET =
  'Notifications are not switched on for this app yet. When they are, this is where you will choose '
  + 'what is worth interrupting you for.';

export const PUSH_IOS_NEEDS_INSTALL =
  'On an iPhone, notifications only work once the app is on your home screen. Add it first and then '
  + 'come back here.';

export function pushKind(id) {
  return PUSH_KINDS.filter((k) => k.id === id)[0] || null;
}

export function pushDefaults() {
  const out = {};
  PUSH_KINDS.forEach((k) => { out[k.id] = !!k.defaultOn; });
  return out;
}

/* The shape written to the user's own document, which is all the
   scheduled function ever reads. Deliberately small and deliberately
   free of anything about a child. */
export function pushSettingsPayload(prefs, token, tz) {
  const on = {};
  PUSH_KINDS.forEach((k) => { on[k.id] = !!(prefs || {})[k.id]; });
  return {
    tokens: token ? [token] : [],
    kinds: on,
    quietFrom: Number((prefs || {}).quietFrom),
    quietTo: Number((prefs || {}).quietTo),
    useNames: !!(prefs || {}).useNames,
    tz: tz || '',
    updatedAt: Date.now(),
  };
}

export default PUSH_KINDS;

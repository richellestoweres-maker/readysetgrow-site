/**
 * Ready Set Grow: Something Is Wrong
 * ------------------------------------------------------------------
 * The week this was written, a repaint loop made the app flicker on a
 * real phone and the only way anybody found out was a message saying
 * "it is glitching". A tester with no way to report a problem reports
 * nothing, and then stops opening the app.
 *
 * So this is one tap from the menu: say what happened, send. The app
 * attaches what a person should not have to know to tell us, such as
 * the build number and the screen it happened on.
 *
 * WHAT IS NEVER ATTACHED
 * No child names, no birthdays, no photos, no logs, no memories, no
 * cycle days, nothing anybody wrote in the app. The attached part is
 * the build, the screen, the size of the window, the browser's own
 * description of itself, and whether a repaint loop was caught. That
 * list is shown in full on the screen before anything is sent, because
 * a parent should be able to see exactly what they are sending.
 */

export const FB_TITLE = 'Something is wrong';
export const FB_SUB = 'Tell me what happened and I will fix it. It goes straight to Richelle.';

export const FB_KINDS = [
  { id: 'broken', label: 'Something is broken', hint: 'It did not work, or it did the wrong thing.' },
  { id: 'confusing', label: 'I could not find something', hint: 'You knew what you wanted and the app hid it.' },
  { id: 'wrong', label: 'Something here is wrong', hint: 'A fact, a number, or advice that does not match what you know.' },
  { id: 'idea', label: 'An idea', hint: 'Something you wish it did.' },
];

export const FB_PROMPT = 'What happened, in your own words?';
export const FB_PLACEHOLDER = 'Such as: I tapped the wake time and it kept going back to 7:30.';
export const FB_SEND = 'Send it';
export const FB_SENT = 'Sent. Thank you, honestly. This is how it gets better.';
export const FB_QUEUED = 'Saved on this device and it will go the next time you are online.';
export const FB_FAILED = 'That would not send. It is saved here and will go when there is a connection.';
export const FB_GUEST = 'Looking around without an account, so this stays on this device until you make one.';

export const FB_ATTACHED_TITLE = 'What gets sent with it';
export const FB_ATTACHED = [
  'Which version of the app you are on, and the screen you were on.',
  'The size of your screen and what your browser says it is.',
  'Whether the app caught itself repainting in a loop.',
  'Your account, so I can write back if I need to ask you something.',
];
export const FB_NOT_ATTACHED =
  'Nothing you have written in the app is sent. No child names, no birthdays, no photos, no logs, '
  + 'no memories, no cycle days.';

export const FB_INBOX_TITLE = 'What people have sent';
export const FB_INBOX_EMPTY = 'Nothing yet.';

export function fbKindLabel(id) {
  const k = FB_KINDS.filter((x) => x.id === id)[0];
  return k ? k.label : 'Something is wrong';
}

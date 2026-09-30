/**
 * Ready Set Grow: Willow Noticing Things
 * ------------------------------------------------------------------
 * She described what she actually wants Willow to be: the sister you
 * call. Somebody who notices what you just told her, asks the right
 * question, explains the thing nobody explained, says plainly when it
 * is a call the doctor should make, and then points you at the part of
 * the app that goes deeper.
 *
 * So a tip is Willow speaking up after something is logged. Each one
 * says what she noticed, one or two things worth knowing, a way to
 * read more inside the app, and a way to just talk to her about it.
 *
 * THE RULES
 * 1. Never a diagnosis, never a dose, never a promise about how a
 *    child is. The most she ever does is tell somebody what is usually
 *    true and when it is worth a phone call.
 * 2. Anything clinical is the app's existing, sourced content, said
 *    again here rather than written fresh. The fever lines below are
 *    the triage bands from rightNow.js, not new advice.
 * 3. One at a time, dismissible, and never twice on the same day.
 * 4. Nothing alarming for something ordinary. A late nap is a late
 *    nap, not a problem.
 */

export const TIP_DISMISS = 'Not now';

export const TIP_NAP_LATE = {
  id: 'napLate',
  title: 'About that late nap',
  lines: [
    'A nap that late often shows up as a second wind at bedtime: wired rather than sleepy, chatty, '
      + 'silly, then a hard crash. If tonight goes that way, it is the timing rather than anything you did.',
    'The reason is that the pressure to sleep drops right when you want it highest, so the usual '
      + 'routine has less to work with.',
    'The day has been rebuilt around the real nap, so the bedtime shown now already accounts for it.',
  ],
  ask: 'He napped late today. What should I expect at bedtime, and is there anything worth trying?',
  link: { label: "Today's rhythm", screen: 'sleep' },
};

export const TIP_FEVER = {
  id: 'fever',
  title: 'You logged a fever',
  ask: 'I just logged a fever. What should I be watching for, and when should I call someone?',
  link: { label: 'Fever, and when to call', screen: 'now' },
  /* The clinical lines are not written here. They come from the fever
     triage bands the app already carries, which are age specific and
     sourced, and they are handed in when the tip is shown. */
  closing:
    'Whatever the number says, you know how they usually are. If something feels wrong to you, that '
    + 'is a good enough reason to call, and no one will think you overreacted.',
};

export const TIP_SICK_QUESTIONS = [
  'Are they drinking, and are the wet diapers or trips to the bathroom close to normal?',
  'Are they alert and able to be comforted in between the worst of it?',
  'Is their breathing easy and quiet when they are calm?',
  'Is there a rash that does not fade when you press a glass against it?',
];

export const TIP_SICK_QUESTIONS_NOTE =
  'Those 4 are the ones a nurse line asks first. If the answer to any of the first 3 is no, or the '
  + 'last one is yes, that is the moment to call rather than wait.';

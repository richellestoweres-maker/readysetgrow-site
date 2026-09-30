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

/* 3 to 24 months, and only when something logged today actually says
   teeth. The second line is the important one: teething gets blamed for
   fevers that are not teething, and the app should say so. */
export const TIP_TEETHING = {
  id: 'teething',
  title: 'About that tooth',
  lines: [
    'Teething really does cause drooling, chewing on everything, sore gums and broken sleep, '
        + 'and the 2 or 3 days around a tooth cutting are usually the worst of it. Firm pressure '
        + 'from a clean finger helps more than most things you can buy.',
    'What teething does not cause is a high fever, diarrhea or a rash all over. Those point '
        + 'at something else happening at the same time, so treat a real fever as a fever rather '
        + 'than as teeth.',
    'Cold but not frozen solid, such as a damp washcloth chilled in the fridge. Skip amber '
        + 'necklaces and numbing gels, both of which carry FDA warnings. Any fever in a baby under '
        + '3 months is a call straight away.',
  ],
  ask: 'A tooth is coming through and he is miserable. What actually helps, and what is not '
        + 'teething?',
  link: { label: 'Teething, safely', topic: 'teething' },
};

/* 4 hard days out of the last 7. Never a diagnosis, never a judgement,
   and the only thing it is ever for is being able to say 4 out of 7 at
   an appointment instead of trying to remember. */
export const TIP_HARD_DAYS = {
  id: 'hardDays',
  title: 'About this past week',
  lines: [
    '4 hard days out of 7 is a heavy week, and you got through every one of them. A run like '
        + 'this usually says something about the week rather than about your child, and none of it '
        + 'says you are failing.',
    'Nothing here is a diagnosis, and a week of hard days does not mean anything on its own. '
        + 'What it is good for is being able to say 4 out of 7 at the next appointment instead of '
        + 'trying to remember.',
    'It is worth mentioning at the next visit, and so is a stretch of good ones, because both '
        + 'say something about what is working. If this week has flattened you as well, that is '
        + 'worth saying out loud too.',
  ],
  ask: 'It has been 4 hard days this week. Is that worth raising with the pediatrician, and what '
        + 'should I tell them?',
  link: { label: 'Your check ins', screen: 'checkins' },
};

/* The first period recorded this month. Written for the parent, about
   what is ordinary in the first year or 2 and what is worth a doctor,
   and it says out loud that how much of it a parent tracks is the
   daughter's call. */
export const TIP_FIRST_PERIOD = {
  id: 'firstPeriod',
  title: 'Her first period',
  lines: [
    'Cycles are usually irregular for the first few years, and that is expected rather than a '
        + 'problem. Anywhere from 21 to 45 days apart is ordinary at her age, which is a wider '
        + 'range than the one written for adults.',
    'Worth a doctor rather than waiting out: bleeding longer than 7 days, soaking a pad or '
        + 'tampon every hour or 2, pain that keeps her off school, or 90 days between periods even '
        + 'once.',
    'The way to make this feel normal is to treat it as normal. Ask her how much of it she '
        + 'wants you keeping track of, tell her what you can see, and keep supplies somewhere she '
        + 'can reach without asking.',
  ],
  ask: 'She just got her first period. What is normal in the first year, and how do I keep track '
        + 'of it without her feeling watched?',
  link: { label: 'Her first year', screen: 'growingup' },
};

/* A dose the schedule puts more than 2 months behind. Not a scolding.
   A gap almost never means starting again, and declining one is a
   choice the app records rather than argues with. */
export const TIP_VACCINE_DUE = {
  id: 'vaccineDue',
  title: 'One looks overdue',
  lines: [
    'This one was due a while ago, which happens to plenty of families and is straightforward '
        + 'to sort out. A gap almost never means starting a series again, so catching up is usually '
        + 'a matter of an appointment, not a fresh start.',
    'How it usually works is that the office looks at what has been given and when, then '
        + 'spaces the remaining doses at the shortest intervals allowed. Several can often be given '
        + 'at the same visit.',
    'If you have decided against this one, or you want to space things out, mark it as not '
        + 'being given and it will read as settled instead of sitting there looking overdue. Your '
        + 'call, either way.',
  ],
  ask: 'One of his vaccines is showing as overdue. How does catching up usually work, and do we '
        + 'have to start anything again?',
  link: { label: 'The record', screen: 'vaxrecord' },
};

/* A weight that has come down a centile space or more, or has landed
   below the 2nd line. One dot is a dot, and this exists so a parent
   hears that before they spend the night reading. */
export const TIP_WEIGHT_WORRY = {
  id: 'weightWorry',
  title: 'That weight, in context',
  lines: [
    'One measurement is a dot, and a dot cannot tell you much on its own. Scales differ, '
        + 'clothes differ, and a full diaper is about 100 grams, so the number moving down once is '
        + 'usually the weighing rather than the child.',
    'What a doctor looks at is whether they are following their own line over 3 or more '
        + 'measurements, not which line it is. Half of all healthy children are below the 50th, '
        + 'because that is what a 50th line means.',
    'Worth asking about: a line that comes down across 2 or more centile spaces and stays '
        + 'down, a weight below the 2nd line, or a child who is not just light but also not '
        + 'themselves. Behavior matters more than the number.',
  ],
  ask: 'Her weight dropped through a percentile line. Does one measurement mean anything, and '
        + 'when should I be asking about it?',
  link: { label: 'The whole line', screen: 'growth' },
};

/* 3 or more marked not yet at the current checkpoint. Marking them
   honestly is more useful than marking them hopefully, and the tip
   hands over the exact sentence to say at the visit. */
export const TIP_MILESTONE_WORRY = {
  id: 'milestoneWorry',
  title: 'Several marked not yet',
  lines: [
    'Children reach these across a range, not on a deadline, and a handful that are not here '
        + 'yet is common and usually not a concern on its own. Marking them honestly is more useful '
        + 'than marking them hopefully.',
    'It is still worth mentioning at the next well visit. You are not overreacting by asking, '
        + 'and asking early costs nothing while it gives you more options if support turns out to '
        + 'be useful.',
    'You can keep it simple: I noticed a few of these are not happening yet, is that '
        + 'something we should look at. Take the list in with you. If they ever lose a skill they '
        + 'had, call rather than wait.',
  ],
  ask: 'I marked a few milestones as not yet. What does that actually mean, and how do I bring '
        + 'it up at his appointment?',
  link: { label: 'The milestone list', screen: 'milestones' },
};

/**
 * WHAT DECIDES WHICH ONE SHOWS
 * The trigger for each of these lives in proto/app.js, next to the data
 * it reads, because that is the only place that knows what was logged.
 * The cool off is here: a tip about a late nap belongs to that day and
 * should not come back tomorrow, while a tip about an overdue vaccine
 * or a heavy week would be nagging if it appeared every morning. The
 * number below is how many days must pass before that tip is allowed
 * to speak up again.
 */
export const TIP_COOL_OFF = {
  fever: 1,
  napLate: 1,
  teething: 2,
  hardDays: 7,
  firstPeriod: 21,
  vaccineDue: 14,
  weightWorry: 14,
  milestoneWorry: 21,
  pottyStart: 30,
  pottyAccidents: 3,
  pottyWin: 10,
};

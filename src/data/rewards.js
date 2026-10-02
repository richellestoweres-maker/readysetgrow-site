/**
 * Ready Set Grow: stars and rewards
 * ------------------------------------------------------------------
 * The chore chart has had stars on it since September. What it never
 * had was anywhere for them to GO. A star you earn and then nothing
 * happens to is a sticker with no chart behind it, and children work
 * that out in about a week.
 *
 * So this is the other half: the stars add up, and they buy something
 * the family agreed on in advance.
 *
 * WHY IT IS OFF UNTIL SOMEBODY TURNS IT ON
 * Star charts are genuinely good for some children and genuinely bad
 * for others, and the difference is not the chart, it is the child.
 * For a child who needs the next step made visible, a chart is scaffolding.
 * For a child who is already anxious about getting things right,
 * the same chart turns every ordinary morning into a test they can
 * fail. That second child exists in a lot of the houses this app is
 * written for.
 *
 * So the app does not switch this on for anybody. It offers it, per
 * child, with that said out loud, and the parent decides. The age
 * window below is a default, not a rule, and she can override it.
 *
 * WHAT THE EVIDENCE ACTUALLY SUPPORTS, BRIEFLY
 * Reward charts work best for a small number of specific, achievable
 * things, with the reward close in time, and they work badly as a
 * general verdict on whether a child was good. They lose their effect
 * when the thing being rewarded is something the child already finds
 * hard for a reason, such as a sensory or attention difficulty, where
 * the barrier is not motivation. All of that shapes the copy here:
 * the app rewards the DOING of named jobs, never the child's character
 * and never their day as a whole.
 *
 * STARS ARE NEVER TAKEN AWAY
 * Nothing in here removes a star as a punishment. Spending them on an
 * agreed reward is the only way the number goes down. Taking earned
 * stars back is how a chart turns into a threat, and a threat is the
 * version that does the harm.
 */

export const REW_TITLE = 'Stars and rewards';

export const REW_SUB =
  'Jobs on the chart earn stars. Stars buy something the family agreed on. Off until you turn it on '
  + 'for a child, because this suits some children and not others.';

/* The default window. Below this the idea does not land yet, above it
   most children find it patronising and the natural version is pocket
   money or simply being asked. Both ends are a default she can ignore. */
export const REW_FROM_MONTHS = 36;
export const REW_TO_MONTHS = 156;

export const REW_AGE_NOTE =
  'Usually lands somewhere between 3 and 13. Younger than that and the star is not connected to the '
  + 'job yet. Older and most children would rather be asked, or paid.';

export const REW_OFF_TITLE = 'Stars are off for this child';

export const REW_OFF_BODY = [
  'Reward charts help some children a great deal and make things worse for others, and which one it '
    + 'is depends on the child rather than on the chart.',
  'They work well when a child needs the next step made visible and the win made obvious. They work '
    + 'badly when the thing being asked is already hard for a reason, such as attention or sensory '
    + 'load, because the barrier was never motivation, and a chart then turns an ordinary morning '
    + 'into something they can fail at.',
  'You know which one yours is. Nothing here switches itself on.',
];

export const REW_ON_LABEL = 'Turn stars on for';

export const REW_HOW = {
  title: 'How it works',
  items: [
    'Jobs on the chore chart are already worth 1, 2 or 3 stars depending on how big they are.',
    'Ticking a job off earns its stars. Unticking it takes them back off, because it was a mistake '
      + 'rather than a punishment.',
    'Stars are never removed for behaviour. The only thing that spends them is choosing a reward.',
    'You set the rewards and what they cost, so a week of jobs buys something real rather than '
      + 'something the app invented.',
  ],
};

/* ------------------------------------------------------------------
   STARTER REWARDS

   Deliberately mostly not things you buy. The evidence on this is dull
   and consistent: time and choice land harder than objects, and they
   cost nothing, which matters because a chart that needs a tenner
   every Friday quietly stops being used.

   Costs assume a child earning roughly 5 to 15 stars a day, so a small
   one is about a day, a middling one about half a week, a big one
   about a fortnight.
   ------------------------------------------------------------------ */
export const REW_IDEAS = [
  { id: 'story', label: 'An extra bedtime story', cost: 10, kind: 'time' },
  { id: 'pick-dinner', label: 'Pick what is for dinner', cost: 20, kind: 'choice' },
  { id: 'film', label: 'Film night, their choice', cost: 40, kind: 'time' },
  { id: 'late', label: 'Stay up 30 minutes later, once', cost: 30, kind: 'choice' },
  { id: 'park', label: 'A trip to the park with you', cost: 25, kind: 'time' },
  { id: 'baking', label: 'Bake something together', cost: 35, kind: 'time' },
  { id: 'friend', label: 'A friend over', cost: 60, kind: 'time' },
  { id: 'money', label: 'Pocket money', cost: 50, kind: 'thing' },
  { id: 'toy', label: 'A small something from the shop', cost: 80, kind: 'thing' },
];

export const REW_IDEAS_NOTE =
  'Time and choice work better than things, and cost nothing, which is also why they last. Change '
  + 'any of these or write your own.';

export const REW_NEW_PLACEHOLDER = 'What they are working towards';

export const REW_EMPTY = {
  title: 'Nothing to work towards yet',
  body: 'Stars only mean something once there is something to spend them on. Pick one below or '
    + 'write your own, and agree it with them before it starts.',
};

export const REW_SPEND_ASK = 'Give this reward and take the stars off';

export const REW_NOT_ENOUGH = 'Not enough stars yet';

export const REW_HISTORY_TITLE = 'Already earned';

export const REW_HISTORY_EMPTY = 'Nothing claimed yet.';

export const REW_NEVER_TAKE =
  'Stars are never taken away for behaviour. The only thing that spends them is a reward you both '
  + 'agreed on.';

/* What a day is worth, so the number on a child's profile means
   something before any reward exists. */
export function rewStarsFromJobs(jobs, choreLookup) {
  let n = 0;
  (jobs || []).forEach((j) => {
    const c = choreLookup(j.choreId);
    n += (c && c.stars) ? c.stars : 1;
  });
  return n;
}

export function rewShows(months) {
  return months != null && months >= REW_FROM_MONTHS && months <= REW_TO_MONTHS;
}

export function rewCanAfford(balance, cost) {
  return (Number(balance) || 0) >= (Number(cost) || 0);
}

export const REW_SOURCES = [
  { org: 'NHS',
    label: 'Reward charts for children, including keeping them to a few specific things and not '
      + 'taking rewards away once earned',
    url: 'https://www.nhs.uk/conditions/baby/babys-development/behaviour/temper-tantrums/' },
  { org: 'CDC, Essentials for Parenting',
    label: 'Using rewards and why praising the specific thing done works better than praising the '
      + 'child in general',
    url: 'https://www.cdc.gov/parents/essentials/consequences/rewards.html' },
];

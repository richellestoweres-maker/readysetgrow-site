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
export const REW_TO_MONTHS = 216;

export const REW_AGE_NOTE =
  'Starts landing around 3, once a star and a job are connected in their head. It does not stop at '
  + 'the end of childhood, it changes shape: a six year old is saving for the indoor play place, a '
  + 'fifteen year old is saving for a lift into town and no questions asked. The rewards below move '
  + 'with them.';

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
/* Each one carries the age it makes sense at, in months, and a size.
   A reward outside a child's window is not shown at all rather than
   shown and ignored, because the whole problem with a long list is
   that the three useful lines are buried in it.

   The sizes are the thing she asked for in so many words: a small one
   and a big one of the same reward, so a child can take something
   today or save for the thing they actually want. A chart with only
   big rewards never pays out, and a chart with only small ones never
   teaches saving. */
export const REW_IDEAS = [

  /* --- SMALL. About a day of jobs. ------------------------------ */
  { id: 'story', label: 'An extra bedtime story', cost: 10,
    kind: 'time', size: 'small', from: 36, to: 120 },
  { id: 'piggyback', label: 'A piggyback up the stairs to bed', cost: 10,
    kind: 'time', size: 'small', from: 36, to: 84 },
  { id: 'music', label: 'Pick the music in the car', cost: 10,
    kind: 'choice', size: 'small', from: 36, to: 216 },
  { id: 'trolley', label: 'Be in charge of the trolley at the shop', cost: 10,
    kind: 'choice', size: 'small', from: 36, to: 84 },
  { id: 'bath', label: 'A long bath with the good bubbles', cost: 15,
    kind: 'time', size: 'small', from: 36, to: 108 },
  { id: 'stickers', label: 'A sticker sheet they choose', cost: 15,
    kind: 'thing', size: 'small', from: 36, to: 84 },
  { id: 'pick-dinner', label: 'Pick what is for dinner', cost: 20,
    kind: 'choice', size: 'small', from: 36, to: 216 },
  { id: 'park', label: 'A trip to the park with you', cost: 25,
    kind: 'time', size: 'small', from: 36, to: 144 },
  { id: 'late', label: 'Stay up 30 minutes later, once', cost: 25,
    kind: 'choice', size: 'small', from: 48, to: 216 },
  { id: 'takeaway', label: 'Pick the takeaway on Friday', cost: 25,
    kind: 'choice', size: 'small', from: 96, to: 216 },
  { id: 'skip-job', label: 'Skip one job, their pick of which', cost: 30,
    kind: 'choice', size: 'small', from: 72, to: 216 },
  { id: 'onegame', label: 'A game with you, one on one, nobody rushing', cost: 30,
    kind: 'time', size: 'small', from: 48, to: 180 },
  { id: 'small-thing', label: 'A small something they pick, from the shop they pick', cost: 40,
    kind: 'thing', size: 'small', from: 36, to: 216 },
  { id: 'lift', label: 'A lift somewhere, no questions', cost: 40,
    kind: 'choice', size: 'small', from: 132, to: 216 },

  /* --- MIDDLING. A few days of saving. -------------------------- */
  { id: 'baking', label: 'Bake something together, their recipe', cost: 35,
    kind: 'time', size: 'mid', from: 36, to: 192 },
  { id: 'film', label: 'Film night, their choice, nobody else gets a vote', cost: 40,
    kind: 'time', size: 'mid', from: 36, to: 216 },
  { id: 'money', label: 'Pocket money', cost: 50,
    kind: 'thing', size: 'mid', from: 60, to: 216 },
  { id: 'friend', label: 'A friend over', cost: 60,
    kind: 'time', size: 'mid', from: 48, to: 216 },
  { id: 'camp', label: 'Camp out in the living room', cost: 60,
    kind: 'time', size: 'mid', from: 48, to: 156 },
  { id: 'home-late', label: 'An hour later coming home, once', cost: 60,
    kind: 'choice', size: 'mid', from: 156, to: 216 },
  { id: 'softplay', label: 'The indoor play place', cost: 70,
    kind: 'time', size: 'mid', from: 36, to: 132 },
  { id: 'swim', label: 'Swimming, just for the fun of it', cost: 70,
    kind: 'time', size: 'mid', from: 36, to: 216 },
  { id: 'cinema', label: 'The actual cinema, with the popcorn', cost: 80,
    kind: 'time', size: 'mid', from: 48, to: 216 },
  { id: 'drive', label: 'An hour of driving practice', cost: 60,
    kind: 'time', size: 'mid', from: 192, to: 216 },

  /* --- BIG. A week or two of saving. ---------------------------- */
  { id: 'sleepover', label: 'A friend to stay the night', cost: 100,
    kind: 'time', size: 'big', from: 72, to: 216 },
  { id: 'day-out', label: 'A day out, anywhere they pick', cost: 120,
    kind: 'time', size: 'big', from: 48, to: 216 },
  { id: 'zoo', label: 'The zoo, or the aquarium', cost: 120,
    kind: 'time', size: 'big', from: 36, to: 180 },
  { id: 'trampoline', label: 'The trampoline park, and they pick who comes', cost: 130,
    kind: 'time', size: 'big', from: 60, to: 192 },
  { id: 'big-thing', label: 'The big thing they have been going on about, from the shop they pick',
    cost: 150, kind: 'thing', size: 'big', from: 48, to: 216 },
  { id: 'tickets', label: 'Tickets to something they choose', cost: 150,
    kind: 'thing', size: 'big', from: 120, to: 216 },
];

/* The three headings the add list is grouped under, so a small one and
   a big one of the same idea sit in different places and the choice
   between taking it now and saving is the obvious one on the screen. */
export const REW_SIZES = [
  { id: 'small', label: 'Small', hint: 'About a day of jobs. Something to take today.' },
  { id: 'mid', label: 'Worth saving for', hint: 'A few days. Most of what gets claimed sits here.' },
  { id: 'big', label: 'The big one', hint: 'A week or two. Worth agreeing out loud before it starts.' },
];

/* Age gates both ends. A fifteen year old being offered a sticker
   sheet is the thing that makes a child decide the whole chart is for
   babies, and that decision is not reversible. */
export function rewIdeasAtAge(months) {
  const m = Number(months);
  if (!isFinite(m)) return REW_IDEAS.filter((i) => i.size !== 'big');
  return REW_IDEAS.filter((i) => m >= i.from && m <= i.to);
}

export function rewIdeasBySize(months) {
  const live = rewIdeasAtAge(months);
  return REW_SIZES.map((s) => ({
    size: s,
    items: live.filter((i) => i.size === s.id),
  })).filter((g) => g.items.length);
}

/* One line at the top of the add list that names where this child is,
   so it is clear the list changed on purpose rather than at random. */
export function rewAgeFraming(months) {
  const m = Number(months);
  if (!isFinite(m)) return '';
  if (m < 60) return 'Geared to a little one: short, soon, and mostly you rather than a shop.';
  if (m < 108) return 'Geared to this age: outings and choices, and a big one worth saving a fortnight for.';
  if (m < 156) return 'Geared to this age: friends, outings, and something real at the end of saving.';
  return 'Geared to this age: money, freedom and time, because that is what is actually worth having now.';
}

export const REW_IDEAS_NOTE =
  'Only the ones that suit their age are shown. Time and choice work better than things and cost '
  + 'nothing, which is also why they last, but a real object at the end of a fortnight of saving is '
  + 'the one most children are actually working for. Change any of these or write your own.';

export const REW_FOOD_NOTE =
  'Nothing here is a pudding or a treat to eat. Food used as a reward is the one that tends to '
  + 'backfire later, so picking the dinner is on the list and earning dessert is not.';

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

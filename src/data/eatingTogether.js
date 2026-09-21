/**
 * Ready Set Grow: Eating, Once The Milk Question Is Over
 * ------------------------------------------------------------------
 * She spotted this one: Stetson is four and his Feeding screen was
 * still leading with formula and breastfeeding. Her instruction was to
 * end that at two, with a way to keep it for anybody still nursing or
 * pumping.
 *
 * GATING IT OFF WAS THE EASY HALF. The hard half is that switching the
 * infant content off at two leaves a four year old's parent with an
 * almost empty screen, which is worse than the wrong content, because
 * at least the wrong content could be scrolled past. A parent of a four
 * year old has real feeding questions. They are just completely
 * different questions.
 *
 * SO THIS IS WHAT REPLACES IT, AND THE SPINE OF IT IS THE DIVISION OF
 * RESPONSIBILITY: the parent decides what is served, when, and where.
 * The child decides whether to eat and how much. It is the most
 * consistently supported idea in child feeding, and almost every
 * mealtime battle in this age range comes from one side reaching across
 * that line.
 *
 * THE TONE RULE, AND IT MATTERS MORE HERE THAN ALMOST ANYWHERE.
 * Nothing in this file describes a child as a problem, and nothing
 * frames a parent as the cause of one. Picky eating at three is
 * developmentally ORDINARY, not a failure of anybody. Feeding is also
 * the place where a parent's own history with food shows up fastest,
 * so nothing here moralizes about food, ranks foods as good or bad, or
 * mentions weight at all. That is the same rule encourage.js holds to,
 * for the same reason.
 */

export const TABLE_HEADLINE =
  'Your job is what is served, when, and where. Their job is whether, and how much.';

export const TABLE_INTRO = [
  'This one idea settles most of what happens at a table with a small child. You decide what food '
  + 'appears, at roughly what times, and that it happens sitting down. They decide whether to eat '
  + 'it and how much of it goes in.',
  'Almost every mealtime fight comes from one side reaching over that line. Coaxing one more bite '
  + 'is reaching over it. So is letting them decide that dinner is crackers.',
];

export const TABLE_WHAT_WORKS = {
  title: 'What actually helps',
  items: [
    'Serve one thing you know they will eat alongside whatever else is on the table. Not a separate '
    + 'meal, just bread or fruit on the side, so there is always a safe landing.',
    'Put a small amount of the new thing on the plate and say nothing else about it. Being near a '
    + 'food is the first step to eating it, and it takes far more exposures than feels reasonable.',
    'Eat the same food, at the same time, in the same room. Children copy eating far more than they '
    + 'take instruction about it.',
    'Let them leave food. A child who is trusted to stop when full keeps that signal, and that is '
    + 'worth more than any single meal.',
    'Keep the meal to about 20 minutes and end it without a comment either way.',
  ],
};

export const TABLE_WHAT_BACKFIRES = {
  title: 'What backfires, even though it feels like it should work',
  items: [
    { what: '2 more bites, and a bargain for dessert',
      why: 'It teaches that the food is a chore and the sweet thing is the prize, which raises the '
        + 'value of the sweet thing and lowers the value of the dinner.' },
    { what: 'Cooking a second meal when the first is refused',
      why: 'It is a completely reasonable thing to do at seven in the evening, and it teaches them '
        + 'that refusing produces a better option. The side dish approach above does the same job '
        + 'without the lesson.' },
    { what: 'Describing food as good, bad, naughty or clean',
      why: 'Children take that literally and apply it to themselves for eating it. Food is just '
        + 'food, some of it more often than the rest.' },
    { what: 'Making them finish, or praising them for finishing',
      why: 'Both override the signal that tells them they are full, and that signal is much harder '
        + 'to get back than it is to keep.' },
  ],
};

/* Why a three year old suddenly stops eating things they liked. Almost
   every parent thinks this is theirs alone and something they caused. */
export const TABLE_PICKY = {
  title: 'The narrowing that happens around two',
  body: [
    'Somewhere between one and 3, most children get suddenly and loudly picky, refuse things '
    + 'they ate happily last month, and want the same 4 foods on repeat. This is ordinary, it '
    + 'is well described, and it is not something you did.',
    '2 things are behind it. Growth slows sharply after the first year, so they genuinely need '
    + 'less food than they did. And this is the age where saying no to things is the whole '
    + 'developmental project, and dinner is simply the place it is most convenient to practice.',
    'It usually loosens between 4 and 5 on its own, provided nobody has turned mealtimes into '
    + 'a contest in the meantime. Keep offering, keep it calm, and let time do most of the work.',
  ],
  whenToAsk: [
    'They are losing weight, or their own growth curve has flattened off.',
    'Fewer than about 10 to 15 foods accepted in total, and the list keeps shrinking.',
    'Gagging, choking or vomiting at the sight or smell of food rather than at the taste.',
    'A whole food group refused for months, such as anything with protein.',
    'A texture or smell reaction strong enough to disrupt the meal for everybody, which is worth '
    + 'mentioning alongside anything else you have noticed about their senses.',
  ],
  whenToAskNote:
    'Any of these is worth raising at the next appointment. None of them is an emergency, and none '
    + 'of them means you have done this wrong.',
};

/* THE ONE PIECE OF PURELY PRACTICAL SAFETY THAT OUTLIVES THE INFANT
   CONTENT. Choking risk runs to about four, and these are exactly the
   foods a parent stops thinking about once the baby stage is over. */
export const TABLE_CHOKING = {
  title: 'Still a choking risk at this age',
  intro: 'Airways stay small and chewing stays unreliable until around four. These are the usual '
    + 'culprits, and most of them are easy to serve safely rather than avoid.',
  items: [
    'Whole grapes and cherry tomatoes. Quarter them lengthways.',
    'Hot dogs and sausages. Slice lengthways first, then across.',
    'Whole nuts. Nut butter thinly spread is fine, a spoonful of it is not.',
    'Popcorn, hard candy and chunks of raw carrot or apple. Grate or cook the hard vegetables.',
    'Marshmallows and sticky candy, which can mold to the airway.',
  ],
  rules: [
    'Sitting down, every time. Not walking, not in the car, not in a buggy.',
    'An adult in the room. Choking is silent far more often than people expect.',
    'No eating while laughing, crying or lying down.',
  ],
};

export const TABLE_SOURCES = [
  { org: 'HealthyChildren.org (AAP)', label: 'Picky eaters and how to handle them',
    url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx' },
  { org: 'HealthyChildren.org (AAP)', label: 'Choking prevention and foods to avoid',
    url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx' },
  { org: 'CDC', label: 'Toddler feeding, foods and drinks for 12 to 24 months',
    url: 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/index.html' },
];

/* ------------------------------------------------------------------
 * WHO SEES WHICH VERSION
 *
 * The milk and solids content is the live question up to two. After
 * that it is history for most families, and still the live question for
 * anybody who is nursing or pumping, which is why the opt in is not an
 * extra switch to find: it is the breastfeeding and pumping boxes she
 * has already ticked on her own profile.
 * ------------------------------------------------------------------ */
export const MILK_ENDS_MONTHS = 24;

export function showsMilkContent(months, stages) {
  if (typeof months !== 'number') return true;
  if (months < MILK_ENDS_MONTHS) return true;
  const s = stages || [];
  return s.indexOf('breastfeeding') !== -1 || s.indexOf('pumping') !== -1;
}

export function showsTableContent(months) {
  return typeof months !== 'number' || months >= 12;
}

/* Said once, on the screen, so a parent who is still nursing a three
   year old knows exactly which switch is keeping it there and that
   nothing is judging her for it. */
export const MILK_KEPT_NOTE =
  'Milk and weaning are still here because you have breastfeeding or pumping ticked on your own '
  + 'profile. Untick it whenever you are done and this tidies itself away.';

export const MILK_GONE_NOTE =
  'Milk, formula and starting solids have moved out of the way now they are past two. If you are '
  + 'still nursing or pumping, tick it on your own profile and it all comes back.';

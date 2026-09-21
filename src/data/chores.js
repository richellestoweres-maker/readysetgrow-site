/**
 * Ready Set Grow: Chores and the family chart
 * ------------------------------------------------------------------
 * A chore chart that covers the whole house, adults included, because a
 * chart with only the children on it teaches a child that jobs are a
 * thing done by children.
 *
 * WHAT THIS FILE IS AND IS NOT
 * It is the library: every job, the earliest age it is reasonable to
 * hand over, roughly how long it takes, and what it is worth in stars.
 * It is not the chart. The chart is what a family builds out of this,
 * and that lives in the app's own store, because it is theirs.
 *
 * ON THE AGES
 * Every minMonths below is the earliest age a typical child can have a
 * go, not the age they will do it well, and definitely not a deadline.
 * A three year old setting the table puts forks in the wrong place.
 * That is the job being done. The sources are at the bottom and they
 * do not fully agree with each other, which is worth knowing: the
 * American Academy of Pediatrics list starts at five, the Montessori
 * practical life tradition starts around twelve months, and both are
 * describing real children. Where they differ this file leans early,
 * because the cost of offering too soon is a child who says no, and
 * the cost of offering too late is a twelve year old who has never
 * been asked.
 *
 * FIELDS
 *   minMonths   earliest reasonable age to offer it
 *   area        which part of the house, for grouping
 *   minutes     honest, including the part where they lose interest
 *   stars       1 small, 2 middling, 3 a real piece of work
 *   withYou     true when it is a job done alongside an adult, not alone
 *   note        only where there is something specific worth saying
 *   adult       true for the jobs that are an adult's, listed so the
 *               grown ups can be on the chart too
 */

export const CHORE_AREAS = [
  { id: 'tidy', label: 'Tidying up' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'laundry', label: 'Laundry' },
  { id: 'bathroom', label: 'Bathroom' },
  { id: 'floors', label: 'Floors and surfaces' },
  { id: 'pets', label: 'Pets' },
  { id: 'outside', label: 'Outside' },
  { id: 'self', label: 'Looking after themselves' },
  { id: 'house', label: 'Running the house' },
];

export const CHORES = [
  /* ---------------- AROUND EIGHTEEN MONTHS ----------------
     The age almost every list skips, and the age a child most wants
     to help. A toddler who is handed a job now is not being put to
     work, they are being let in. */
  { id: 'toys-in-basket', label: 'Put toys in the basket', area: 'tidy', minMonths: 16, minutes: 5, stars: 1, withYou: true },
  { id: 'nappy-in-bin', label: 'Put their diaper in the trash', area: 'self', minMonths: 16, minutes: 1, stars: 1 },
  { id: 'cup-to-sink', label: 'Carry their cup to the sink', area: 'kitchen', minMonths: 16, minutes: 1, stars: 1 },
  { id: 'clothes-in-hamper', label: 'Put dirty clothes in the basket', area: 'laundry', minMonths: 16, minutes: 1, stars: 1 },
  { id: 'wipe-a-spill', label: 'Wipe a spill with a cloth', area: 'floors', minMonths: 16, minutes: 2, stars: 1, note: 'Keep a small cloth somewhere they can reach it. Half the point is that they get it themselves.' },
  { id: 'feed-pet-with-you', label: 'Help fill the pet bowl', area: 'pets', minMonths: 16, minutes: 2, stars: 1, withYou: true },
  { id: 'books-on-shelf', label: 'Put books back on the shelf', area: 'tidy', minMonths: 18, minutes: 3, stars: 1 },
  { id: 'shoes-away', label: 'Put their shoes away', area: 'tidy', minMonths: 18, minutes: 1, stars: 1 },

  /* ---------------- TWO ---------------- */
  { id: 'water-a-plant', label: 'Water a plant', area: 'house', minMonths: 24, minutes: 3, stars: 1, note: 'A tiny jug, filled by you. Overwatering one plant is a cheap lesson.' },
  { id: 'napkins-out', label: 'Put the napkins on the table', area: 'kitchen', minMonths: 24, minutes: 2, stars: 1 },
  { id: 'wipe-the-table', label: 'Wipe the table after a meal', area: 'kitchen', minMonths: 24, minutes: 3, stars: 1 },
  { id: 'load-the-washer', label: 'Put clothes into the washing machine', area: 'laundry', minMonths: 24, minutes: 4, stars: 1, withYou: true },
  { id: 'match-socks', label: 'Match up the socks', area: 'laundry', minMonths: 24, minutes: 6, stars: 1, note: 'One of the few jobs that is also a sorting lesson, which is why it is worth the mess.' },
  { id: 'dust-low-down', label: 'Dust the low shelves', area: 'floors', minMonths: 30, minutes: 5, stars: 1, note: 'A sock on each hand works better than a duster and they will do it for longer.' },

  /* ---------------- THREE ---------------- */
  { id: 'make-bed-roughly', label: 'Pull their own covers up', area: 'self', minMonths: 36, minutes: 3, stars: 1, note: 'It will look terrible. Leave it.' },
  { id: 'clear-own-plate', label: 'Clear their own plate', area: 'kitchen', minMonths: 36, minutes: 2, stars: 1 },
  { id: 'feed-the-pet', label: 'Feed the pet', area: 'pets', minMonths: 36, minutes: 4, stars: 2 },
  { id: 'groceries-away', label: 'Help put the shopping away', area: 'kitchen', minMonths: 36, minutes: 8, stars: 2, withYou: true },
  { id: 'sort-by-colour', label: 'Sort the laundry into piles', area: 'laundry', minMonths: 36, minutes: 6, stars: 1 },
  { id: 'toys-out-of-garden', label: 'Bring the toys in from outside', area: 'outside', minMonths: 36, minutes: 5, stars: 1 },
  { id: 'put-own-laundry-away', label: 'Put their own clothes in the drawer', area: 'laundry', minMonths: 36, minutes: 6, stars: 2 },

  /* ---------------- FOUR ---------------- */
  { id: 'set-the-table', label: 'Set the table', area: 'kitchen', minMonths: 48, minutes: 6, stars: 2 },
  { id: 'tidy-own-room', label: 'Tidy their own room', area: 'tidy', minMonths: 48, minutes: 12, stars: 2, note: 'Give one instruction at a time. Tidy your room means nothing at four. Books on the shelf does.' },
  { id: 'wipe-the-sink', label: 'Wipe the bathroom sink', area: 'bathroom', minMonths: 48, minutes: 4, stars: 1 },
  { id: 'sweep-small', label: 'Sweep up with a small brush', area: 'floors', minMonths: 48, minutes: 6, stars: 1, note: 'A child sized broom is the difference between a job and a fight.' },
  { id: 'empty-small-bins', label: 'Empty the small trash cans', area: 'house', minMonths: 48, minutes: 5, stars: 1 },
  { id: 'make-own-snack', label: 'Make their own simple snack', area: 'kitchen', minMonths: 48, minutes: 6, stars: 2, note: 'Spreading, pouring from a small jug, peeling a banana. A low shelf with a few safe things on it does most of the work.' },
  { id: 'carry-in-shopping', label: 'Carry in a light bag of shopping', area: 'outside', minMonths: 48, minutes: 4, stars: 1 },

  /* ---------------- FIVE TO SIX ---------------- */
  { id: 'make-own-bed', label: 'Make their own bed', area: 'self', minMonths: 60, minutes: 5, stars: 2 },
  { id: 'water-and-feed-pet', label: 'Feed and water the pet, both', area: 'pets', minMonths: 60, minutes: 6, stars: 2 },
  { id: 'wash-plastic-dishes', label: 'Wash the plastic dishes', area: 'kitchen', minMonths: 60, minutes: 10, stars: 2 },
  { id: 'dust-properly', label: 'Dust a whole room', area: 'floors', minMonths: 60, minutes: 10, stars: 2 },
  { id: 'recycling-out', label: 'Take the recycling out', area: 'house', minMonths: 60, minutes: 5, stars: 1 },
  { id: 'bring-in-post', label: 'Bring in the post', area: 'outside', minMonths: 60, minutes: 2, stars: 1 },
  { id: 'water-the-flowers', label: 'Water the flowers outside', area: 'outside', minMonths: 60, minutes: 8, stars: 1 },
  { id: 'pack-own-bag', label: 'Pack their own school bag', area: 'self', minMonths: 66, minutes: 6, stars: 2, note: 'Let them get to school without something once. The lesson does not land any other way.' },

  /* ---------------- SIX TO EIGHT ---------------- */
  { id: 'rake-leaves', label: 'Rake the leaves', area: 'outside', minMonths: 72, minutes: 20, stars: 3 },
  { id: 'vacuum-a-room', label: 'Vacuum one room', area: 'floors', minMonths: 72, minutes: 10, stars: 2 },
  { id: 'wipe-counters', label: 'Wipe down the kitchen counters', area: 'kitchen', minMonths: 72, minutes: 6, stars: 2 },
  { id: 'unload-lower-rack', label: 'Empty the bottom of the dishwasher', area: 'kitchen', minMonths: 72, minutes: 6, stars: 2 },
  { id: 'peel-veg', label: 'Peel the vegetables', area: 'kitchen', minMonths: 78, minutes: 10, stars: 2, withYou: true },
  { id: 'walk-dog-with-adult', label: 'Walk the dog with an adult', area: 'pets', minMonths: 72, minutes: 25, stars: 2, withYou: true },
  { id: 'weed-a-bed', label: 'Weed one flower bed', area: 'outside', minMonths: 78, minutes: 20, stars: 3 },
  { id: 'pack-own-lunch', label: 'Pack their own lunch', area: 'kitchen', minMonths: 78, minutes: 10, stars: 2 },

  /* ---------------- EIGHT TO TEN ---------------- */
  { id: 'vacuum-the-house', label: 'Vacuum the whole downstairs', area: 'floors', minMonths: 96, minutes: 25, stars: 3 },
  { id: 'help-cook-dinner', label: 'Help cook dinner', area: 'kitchen', minMonths: 96, minutes: 30, stars: 3, withYou: true },
  { id: 'walk-the-dog', label: 'Walk the dog', area: 'pets', minMonths: 96, minutes: 25, stars: 3, note: 'Down to your street and your dog, not their age. Some 10 year olds can. Some cannot.' },
  { id: 'unload-dishwasher', label: 'Empty the whole dishwasher', area: 'kitchen', minMonths: 96, minutes: 10, stars: 2 },
  { id: 'bins-to-kerb', label: 'Take the trash out to the curb', area: 'house', minMonths: 96, minutes: 6, stars: 2 },
  { id: 'fold-and-put-away', label: 'Fold the laundry and put it away', area: 'laundry', minMonths: 96, minutes: 20, stars: 3 },
  { id: 'wash-the-car', label: 'Wash the car', area: 'outside', minMonths: 102, minutes: 40, stars: 3, withYou: true },
  { id: 'tidy-shared-rooms', label: 'Tidy the living room', area: 'tidy', minMonths: 96, minutes: 12, stars: 2 },

  /* ---------------- ELEVEN TO TWELVE ---------------- */
  { id: 'clean-the-kitchen', label: 'Clean the kitchen after dinner', area: 'kitchen', minMonths: 132, minutes: 25, stars: 3 },
  { id: 'change-own-sheets', label: 'Change their own bedsheets', area: 'self', minMonths: 132, minutes: 12, stars: 2 },
  { id: 'full-load-laundry', label: 'Do a load of laundry start to finish', area: 'laundry', minMonths: 132, minutes: 20, stars: 3 },
  { id: 'clean-the-bathroom', label: 'Clean the bathroom', area: 'bathroom', minMonths: 132, minutes: 25, stars: 3, note: 'Show them which products must never be mixed before they do this alone. Bleach and anything with ammonia in it is the one that matters.' },
  { id: 'cook-simple-meal', label: 'Cook a simple meal with you nearby', area: 'kitchen', minMonths: 132, minutes: 40, stars: 3, withYou: true },
  { id: 'watch-sibling', label: 'Watch a younger sibling while you are in the house', area: 'house', minMonths: 138, minutes: 30, stars: 2 },
  { id: 'mow-with-supervision', label: 'Mow the lawn with you there', area: 'outside', minMonths: 138, minutes: 40, stars: 3, withYou: true, note: 'Closed shoes, no one else in the yard, and you outside with them the first several times.' },

  /* ---------------- THIRTEEN AND UP ---------------- */
  { id: 'cook-for-everyone', label: 'Cook a meal for the family', area: 'kitchen', minMonths: 156, minutes: 60, stars: 3, note: 'Once a week is the version that actually sticks, and it teaches more than the cooking.' },
  { id: 'own-laundry-fully', label: 'Manage all of their own laundry', area: 'laundry', minMonths: 156, minutes: 30, stars: 3 },
  { id: 'deep-clean-room', label: 'Properly clean their own room', area: 'tidy', minMonths: 156, minutes: 45, stars: 3 },
  { id: 'mow-the-lawn', label: 'Mow the lawn', area: 'outside', minMonths: 156, minutes: 45, stars: 3 },
  { id: 'shop-with-a-list', label: 'Do a shop from a list', area: 'house', minMonths: 156, minutes: 45, stars: 3 },
  { id: 'iron-something', label: 'Iron their own clothes', area: 'laundry', minMonths: 156, minutes: 15, stars: 2 },
  { id: 'younger-bedtime', label: 'Run a younger sibling’s bedtime', area: 'house', minMonths: 168, minutes: 30, stars: 3 },
  { id: 'car-basics', label: 'Check the oil and the tires', area: 'outside', minMonths: 180, minutes: 15, stars: 2, withYou: true },
  { id: 'book-own-appointment', label: 'Book their own appointment', area: 'self', minMonths: 192, minutes: 10, stars: 2, note: 'Phoning a receptionist is a skill, and the first time is easier with you in the room and not on the phone.' },

  /* ---------------- THE GROWN UPS ----------------
     Here so the chart is honest. A child looking at the week should
     see their name next to two jobs and a parent's name next to nine.
     That is the actual arithmetic of a household and it is worth them
     seeing it. */
  { id: 'a-meal-plan', label: 'Plan the week’s meals', area: 'house', adult: true, minutes: 25, stars: 0 },
  { id: 'a-grocery-shop', label: 'Do the food shop', area: 'house', adult: true, minutes: 60, stars: 0 },
  { id: 'a-cook-dinner', label: 'Cook dinner', area: 'kitchen', adult: true, minutes: 45, stars: 0 },
  { id: 'a-dishes', label: 'Do the dishes', area: 'kitchen', adult: true, minutes: 20, stars: 0 },
  { id: 'a-laundry', label: 'Wash, dry and fold a load', area: 'laundry', adult: true, minutes: 30, stars: 0 },
  { id: 'a-bathrooms', label: 'Clean the bathrooms', area: 'bathroom', adult: true, minutes: 30, stars: 0 },
  { id: 'a-floors', label: 'Vacuum and mop', area: 'floors', adult: true, minutes: 40, stars: 0 },
  { id: 'a-bins', label: 'Trash and recycling', area: 'house', adult: true, minutes: 10, stars: 0 },
  { id: 'a-bills', label: 'Pay the bills', area: 'house', adult: true, minutes: 25, stars: 0 },
  { id: 'a-school-admin', label: 'School forms, emails and money', area: 'house', adult: true, minutes: 20, stars: 0 },
  { id: 'a-appointments', label: 'Book and keep track of appointments', area: 'house', adult: true, minutes: 20, stars: 0 },
  { id: 'a-bedtime', label: 'Bedtime routine', area: 'house', adult: true, minutes: 45, stars: 0 },
  { id: 'a-school-run', label: 'School run', area: 'house', adult: true, minutes: 40, stars: 0 },
  { id: 'a-bath-time', label: 'Bath time', area: 'house', adult: true, minutes: 30, stars: 0 },
  { id: 'a-pet-vet', label: 'Pet food, vet and worming', area: 'pets', adult: true, minutes: 20, stars: 0 },
  { id: 'a-yard', label: 'Garden and yard', area: 'outside', adult: true, minutes: 60, stars: 0 },
  { id: 'a-car', label: 'Car, fuel and servicing', area: 'outside', adult: true, minutes: 30, stars: 0 },
  { id: 'a-tidy-round', label: 'The evening tidy round', area: 'tidy', adult: true, minutes: 15, stars: 0 },
];

export const CHORE_INTRO =
  'A chart is not really about getting the house clean. It is about a child knowing that this '
  + 'house runs on somebody doing things, that they are somebody, and that what they did is seen.';

export const CHORE_WHY = {
  title: 'Why bother with a chart at all',
  items: [
    'A job with their name on it is different from being asked. Being asked can be argued with. A chart is just what Tuesday looks like.',
    'It stops the whole thing living in your head. You are not remembering who was supposed to feed the dog, the chart is.',
    'Everyone on it, adults included, means a child can see the real share of the work rather than assuming the house cleans itself.',
    'Doing a job badly and being thanked anyway is how a child ends up willing to do it again. The clean floor is not the point.',
  ],
};

export const CHORE_START = {
  title: 'Handing a job over without it becoming a fight',
  steps: [
    'One new job at a time. A list of 6 arriving at once is the fastest way to lose all six.',
    'Show them once, slowly, with almost no talking. Narrating over your own hands makes it harder to watch.',
    'Give them the right sized thing. A child sized broom, a small jug, a cloth on a low hook. Most refusals are a tool problem wearing a mood.',
    'Same time every day. Attached to something that already happens, such as after dinner or before the bath, rather than a time of day.',
    'Let it be done badly and leave it that way. Redoing it in front of them tells them the job was never really theirs.',
    'Thank the effort out loud and be specific. You put every book back is worth more than good job.',
  ],
};

export const CHORE_WHEN_THEY_WONT = {
  title: 'When they will not do it',
  items: [
    'Check the job before you check the child. Too long, too vague or too hard is usually the answer, and the fix is to shrink it rather than push harder.',
    'Do the first 30 seconds with them. Starting is the part that is hard, not the job.',
    'Nagging does not work and it costs you. Agree one checkpoint instead, such as before screens, and hold that rather than asking 6 times.',
    'A consequence that is a lost privilege lands better than a punishment. The bike goes away until the trash goes out is a sentence a child can act on.',
    'If it has become a daily war, take that job off them for 2 weeks and give them a different one. You are not conceding, you are changing the ground.',
  ],
};

export const CHORE_STARS_NOTE = {
  title: 'About the stars',
  body: [
    'Stars are on by default because most young children like a total that goes up, and it gives you something specific to notice out loud.',
    'You can turn them off in one tap if you would rather chores were simply what we all do here. Plenty of families feel strongly about that and the chart works exactly the same without them.',
    'If you pay pocket money, the usual advice is to keep it separate from the basic jobs. Everyone tidies because they live here. The extra jobs, the car, the garage, the windows, are the ones that can carry money.',
  ],
};

export const CHORE_SAFETY = {
  title: 'The short safety list',
  items: [
    'Never mix bleach with anything containing ammonia, which includes most glass cleaners. Say this out loud before a child cleans a bathroom alone.',
    'Lawnmowers, knives and the oven are supervised jobs for a long time after a child is technically capable of them.',
    'A child walking a dog alone is a question about your street and your dog, not about their birthday.',
  ],
};

export const CHORE_SOURCES = [
  { label: 'Age appropriate chores for children', org: 'American Academy of Pediatrics', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Chores-and-Responsibility.aspx' },
  { label: 'Chores and children', org: 'American Academy of Child and Adolescent Psychiatry', url: 'https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Chores_and_Children-125.aspx' },
  { label: 'Age appropriate family work', org: 'Montessori Academy', url: 'https://montessoriacademy.com.au/montessori-at-home/getting-started/age-appropriate-family-work/' },
];

export const CHORE_DAYS = [
  { id: 0, label: 'Sunday', short: 'Sun' },
  { id: 1, label: 'Monday', short: 'Mon' },
  { id: 2, label: 'Tuesday', short: 'Tue' },
  { id: 3, label: 'Wednesday', short: 'Wed' },
  { id: 4, label: 'Thursday', short: 'Thu' },
  { id: 5, label: 'Friday', short: 'Fri' },
  { id: 6, label: 'Saturday', short: 'Sat' },
];

export function choreById(id) {
  return CHORES.filter((c) => c.id === id)[0] || null;
}

/* Everything a child of this age could reasonably be offered. Open
   ended on purpose: a twelve year old can still be the one who feeds
   the cat, and taking the easy jobs away as they grow is how you end
   up with a teenager whose only jobs are the horrible ones. */
export function choresForMonths(months) {
  const m = Number(months);
  if (!isFinite(m)) return [];
  return CHORES.filter((c) => !c.adult && m >= c.minMonths);
}

/* The ones that have come into range recently, for the nudge that says
   they are old enough for this now. Six months is wide enough that a
   parent who opens the app once a month still sees it. */
export function choresNewlyPossible(months, windowMonths = 6) {
  const m = Number(months);
  if (!isFinite(m)) return [];
  return CHORES.filter((c) => !c.adult && c.minMonths <= m && c.minMonths > m - windowMonths);
}

export function adultChores() {
  return CHORES.filter((c) => !!c.adult);
}

export function choreAreaLabel(id) {
  const a = CHORE_AREAS.filter((x) => x.id === id)[0];
  return a ? a.label : '';
}

/* Grouped by area, in the order CHORE_AREAS declares, with empty areas
   dropped. Used by the picker so a parent scans headings rather than
   one long alphabetical wall. */
export function choresByArea(list) {
  const out = [];
  CHORE_AREAS.forEach((area) => {
    const items = (list || []).filter((c) => c.area === area.id);
    if (items.length) out.push({ area: area, items: items });
  });
  return out;
}

export default CHORES;

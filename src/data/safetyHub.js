/**
 * Ready Set Grow: Safety Hub
 * ------------------------------------------------------------------
 * WHY THIS FILE EXISTS AND WHAT IT DELIBERATELY DOES NOT HOLD
 *
 * The app already had most of the safety content, and it was scattered.
 * CPR, choking and home alone live in src/data/emergencySkills.js and
 * render on the screen called "If something happens". Water safety,
 * choking prevention and car seat stages are three of the sourced
 * entries in src/data/careTopics.js. Behaviour and sensory support is
 * the whole of src/data/supportLenses.js, which is the part of this app
 * that nothing else does. Screens and who is talking to them is
 * src/data/onlineSafety.js.
 *
 * So this file is NOT a second copy of any of that. It is the index
 * that gathers it, plus the two things that genuinely were not here:
 *
 *   1. A CAR SEAT A FAMILY ACTUALLY OWNS. The guidance existed. The
 *      seat did not. A parent cannot read a guidance page to find out
 *      whether the seat in their own back seat has expired, because the
 *      answer is stamped on the shell and nowhere else. So a seat is a
 *      record on the child, with the date it was made, the date it runs
 *      out, and which stage it is being used in.
 *
 *   2. AROUND THE HOUSE AND IF THE POWER GOES OUT. Poison Control's
 *      number was in two topic footers and nowhere a frightened person
 *      would find it in ten seconds.
 *
 * THE DECEMBER 2026 PROBLEM
 *
 * This ships weeks before FMVSS 213a becomes mandatory on 5 December
 * 2026, and the viral version of that news tells parents their seat is
 * about to be illegal. It is not. The standard governs what may be
 * manufactured and sold, not what is already buckled into somebody's
 * car. SEAT_NEW_RULE says that plainly, because the alternative is a
 * mother throwing away a perfectly good seat she cannot afford to
 * replace.
 *
 * THE LAW IS NOT THE GUIDANCE
 *
 * Every state sets its own minimum and several of them are well below
 * what the AAP recommends. Saying "the law says" would be answering a
 * different question from the one a parent is asking, so the content
 * answers the safety question and says separately that state law is a
 * floor. We do not list fifty states, because a list we cannot keep
 * current is worse than no list.
 *
 * ACCURACY NOTE
 * Checked against AAP child passenger safety guidance (healthychildren
 * .org, last updated April 2026), NHTSA's car seat and heatstroke
 * pages, the FAA's child safety seat guidance, and the Federal Register
 * rule of 9 September 2026 that moved the 213a compliance date. When
 * any of those move, this file and SAFETY_SOURCES get revisited
 * together.
 */

export const SAFETY_HUB_TITLE = 'Safety';

export const SAFETY_HUB_SUB =
  'The car, the house, the water, and what to do if something happens.';

/* THE HUB, AS SHE DREW IT.

   Twelve tiles, three across, each in its own soft colour. The order is
   hers and it is not alphabetical: the car and the water are first
   because they are the two that kill children, and the softer ones are
   further down.

   `kind` says where a tile goes. 'screen' is one of ours, 'topic' is a
   sourced entry in careTopics, and 'sub' opens a screen on a particular
   tab, which is how First Aid and Choking land on the right part of a
   screen that already holds both.

   WHAT `depth` IS FOR, AND WHY IT IS HONEST

   'full' means this app has real, sourced content behind the tile.
   'topic' means it is one careTopics entry, which is good but is one
   page rather than a section. Nothing here is marked as having more
   behind it than it has, because a hub that promises twelve sections
   and delivers four is worse than a hub with four tiles. */
export const SAFETY_TILES = [
  { id: 'carseat', ic: 'car', tint: 'tint-sky', label: 'Car Seat & Travel',
    blurb: 'Stages, the seat you own, expiry and recalls.',
    kind: 'screen', to: 'carseat', depth: 'full' },
  { id: 'water', ic: 'drop', tint: 'tint-aqua', label: 'Water Safety',
    blurb: 'Why drowning is silent, and what touch supervision means.',
    kind: 'topic', to: 'water-safety', depth: 'topic' },
  { id: 'home', ic: 'home', tint: 'tint-rose', label: 'Home Safety',
    blurb: 'Poison Control, and the hazards that actually hurt children.',
    kind: 'screen', to: 'homesafe', depth: 'full' },
  { id: 'choking', ic: 'utensils', tint: 'tint-amber', label: 'Choking & Food',
    blurb: 'The sequence by age, and the foods that cause it.',
    kind: 'sub', to: 'safety', tab: 'safetyTab', val: 'choking', depth: 'full' },
  { id: 'meds', ic: 'pill', tint: 'tint-indigo', label: 'Medication Safety',
    blurb: 'Dosing by weight, storage, and what a double dose means.',
    kind: 'screen', to: 'medsafe', depth: 'full' },
  { id: 'sleep', ic: 'moon', tint: 'tint-violet', label: 'Safe Sleep',
    blurb: 'The cot, the room, and sleeping somewhere that is not home.',
    kind: 'topic', to: 'safe-sleep', depth: 'topic' },
  { id: 'heat', ic: 'sun', tint: 'tint-gold', label: 'Heat & Weather',
    blurb: 'Hot cars, sun, cold, and the storm that takes the power out.',
    kind: 'screen', to: 'heatsafe', depth: 'full' },
  { id: 'online', ic: 'eye', tint: 'tint-sage', label: 'Online Safety',
    blurb: 'Screens, settings, and who is talking to them.',
    kind: 'screen', to: 'online', depth: 'full' },
  { id: 'cpr', ic: 'heart', tint: 'tint-coral', label: 'First Aid & CPR',
    blurb: 'The sequence by age, and when they can be home alone.',
    kind: 'sub', to: 'safety', tab: 'safetyTab', val: 'cpr', depth: 'full' },
  { id: 'prepared', ic: 'shield', tint: 'tint-plum', label: 'Emergency Planning',
    blurb: 'Contacts, the kit, the plan, and when to go to the ER.',
    kind: 'screen', to: 'prepared', depth: 'full' },
  { id: 'sitter', ic: 'people', tint: 'tint-moss', label: 'Babysitter Safety',
    blurb: 'What to leave written down, and what to ask before you go.',
    kind: 'screen', to: 'sittersafe', depth: 'full' },
  { id: 'lost', ic: 'search', tint: 'tint-clay', label: 'Lost Child',
    blurb: 'The two minutes that matter, and what to teach beforehand.',
    kind: 'screen', to: 'lostchild', depth: 'full' },
];

/* The search box on her hub. Searching a hub that holds twelve tiles is
   pointless; searching the content behind them is not. These are the
   words a frightened or tired parent actually types, mapped to the tile
   that answers them, including the ones where the obvious tile is the
   wrong one. */
export const SAFETY_SEARCH = [
  { q: ['car seat', 'carseat', 'booster', 'rear facing', 'harness', 'buckle', 'expired', 'recall', 'flying', 'plane', 'taxi'], to: 'carseat' },
  { q: ['drown', 'pool', 'swim', 'bath', 'lake', 'life jacket', 'float'], to: 'water' },
  { q: ['poison', 'swallow', 'ate', 'battery', 'magnet', 'detergent', 'bleach', 'anchor', 'tip over', 'stairs', 'blind cord', 'outlet'], to: 'home' },
  { q: ['chok', 'grape', 'hot dog', 'popcorn', 'heimlich', 'back blow'], to: 'choking' },
  { q: ['medicine', 'medication', 'dose', 'dosage', 'tylenol', 'acetaminophen', 'ibuprofen', 'motrin', 'double dose', 'overdose'], to: 'meds' },
  { q: ['sleep', 'cot', 'crib', 'sids', 'bedshar', 'co sleep', 'swaddle', 'roll over'], to: 'sleep' },
  { q: ['hot car', 'heat', 'heatstroke', 'sunscreen', 'sunburn', 'cold', 'frostbite', 'storm', 'power cut', 'tornado', 'hurricane'], to: 'heat' },
  { q: ['screen', 'tablet', 'youtube', 'tiktok', 'stranger online', 'grooming', 'parental control'], to: 'online' },
  { q: ['cpr', 'first aid', 'not breathing', 'unconscious', 'burn', 'bleed', 'head bump', 'home alone'], to: 'cpr' },
  { q: ['emergency', 'er', 'a and e', '911', 'kit', 'go bag', 'disaster', 'evacuat'], to: 'prepared' },
  { q: ['babysitter', 'sitter', 'nanny', 'leaving them with', 'grandparent'], to: 'sitter' },
  { q: ['lost', 'missing', 'wander', 'elope', 'runs off', 'separated', 'amber alert'], to: 'lost' },
];

export function safetySearch(query) {
  const q = String(query || '').trim().toLowerCase();
  if (q.length < 2) return [];
  const hits = {};
  SAFETY_SEARCH.forEach((row) => {
    row.q.forEach((term) => { if (term.indexOf(q) !== -1 || q.indexOf(term) !== -1) hits[row.to] = true; });
  });
  SAFETY_TILES.forEach((t) => {
    if (t.label.toLowerCase().indexOf(q) !== -1 || t.blurb.toLowerCase().indexOf(q) !== -1) hits[t.id] = true;
  });
  return SAFETY_TILES.filter((t) => hits[t.id]);
}

/* Kept so nothing that linked to the old six row index breaks. */
export const SAFETY_ROWS = SAFETY_TILES;

export const SAFETY_HUB_NOTE =
  'None of this replaces a paediatrician, a certified car seat technician, or 911. ' +
  'It is here so you are not searching for it at the worst possible moment.';

/* ==================================================================
   CAR SEATS

   THE STAGES

   The old rule was an age and the current rule is not. Every stage
   lasts until the child reaches the limits printed on their own seat,
   which is almost always longer than a parent expects, and each move
   to the next stage is a step down in protection rather than a
   milestone to celebrate.

   `floor` and `ceiling` are months, used only to decide which stage to
   show first. The stage a child is actually in is decided by their
   seat's limits, which is why seatStageFor returns a suggestion and
   says so rather than an answer.
   ================================================================== */
export const SEAT_STAGES = [
  {
    id: 'rear',
    label: 'Rear facing',
    short: 'Rear facing',
    floor: 0, ceiling: 48,
    headline: 'From the first ride home, for as long as the seat allows.',
    why:
      'In a frontal crash, which is the most common serious one, a rear facing shell takes the force ' +
      'across the whole back and keeps the head, neck and spine in line. A young child’s neck ' +
      'cannot do that job on its own.',
    until:
      'Until they reach the maximum height OR weight their seat allows rear facing, whichever comes ' +
      'first. Many convertible seats rear face to 40 or 50 pounds, which is well past 2 years and ' +
      'often past 3.',
    checks: [
      'Harness straps come from AT or BELOW their shoulders.',
      'The recline angle is inside the range marked on the seat. Newborns need more recline so the chin stays off the chest.',
      'There is a hand width or less of space between the top of their head and the top of the shell.',
      'Nothing is tucked in behind or underneath them that did not come with the seat.',
    ],
    myth: {
      myth: 'Their legs look cramped, so it is time to turn them around.',
      truth:
        'Children sit cross legged happily and leg injuries in rear facing crashes are rare. ' +
        'Turning them early trades a comfort worry for a head and neck risk.',
    },
  },
  {
    id: 'forward',
    label: 'Forward facing with a harness',
    short: 'Forward, harnessed',
    floor: 24, ceiling: 84,
    headline: 'Only once they have outgrown rear facing, and then for years.',
    why:
      'A five point harness spreads crash force across the shoulders, hips and between the legs, and ' +
      'the top tether stops the shell pitching forward. A seat belt alone cannot do either of those ' +
      'things on a body this size.',
    until:
      'Until they reach the harness height or weight limit on their seat, at an absolute minimum age 4. ' +
      'If they outgrow a low limit seat before then, the answer is a seat with higher limits, not a booster.',
    checks: [
      'Harness straps come from AT or ABOVE their shoulders now that they are forward facing.',
      'The top tether is attached and tightened. This is the single most skipped step, and it cuts how far the head travels.',
      'The chest clip sits level with their armpits, not on their belly and not on their throat.',
      'You cannot pinch a horizontal fold of webbing at the shoulder. If you can, it is not tight enough.',
    ],
    myth: {
      myth: 'They are tall enough for the belt to reach, so they can move to a booster.',
      truth:
        'Reaching is not fitting, and a harness is more protective than a booster at the same weight. ' +
        'Use the harness to its limit first.',
    },
  },
  {
    id: 'booster',
    label: 'Belt positioning booster',
    short: 'Booster',
    floor: 48, ceiling: 156,
    headline: 'A booster does one job: it puts the adult belt where it belongs.',
    why:
      'An adult belt on an unboosted child rides up onto the soft belly and across the neck. A booster ' +
      'lifts them so the lap belt sits on bone and the shoulder belt sits on the collarbone and ribs.',
    until:
      'Until the adult belt fits correctly without it. That is usually around 4 foot 9 and somewhere ' +
      'between 8 and 12 years old. Most children do not fit a belt alone until 10 to 12.',
    checks: [
      'A booster needs a lap AND shoulder belt. Never a lap belt only.',
      'They can sit properly for the whole trip without slouching or sliding the shoulder belt behind them.',
      'A high back booster also positions the shoulder belt and gives head support where the vehicle seat back is low.',
    ],
    myth: {
      myth: 'Boosters are for little children, so a big 7 year old does not need one.',
      truth:
        'It is about belt geometry, not pride. The belt either lands on bone or it does not, and at ' +
        'seven it almost never does.',
    },
  },
  {
    id: 'belt',
    label: 'The adult belt on its own',
    short: 'Belt alone',
    floor: 96, ceiling: 300,
    headline: 'Five things have to be true at once, and you can check them in a minute.',
    why:
      'This is the one stage with an actual test rather than a number, and it is worth doing in your ' +
      'own car, because a belt that fits in one vehicle may not fit in another.',
    until:
      'The back seat is still the safest place, and children should ride there through at least age 13.',
    checks: [
      'They can sit all the way back against the vehicle seat.',
      'Their knees bend comfortably at the front edge of the seat cushion.',
      'The lap belt lies low and flat across the tops of the thighs, not on the stomach.',
      'The shoulder belt crosses the middle of the chest and the shoulder, not the neck or the arm.',
      'They can stay like that for the whole journey, including asleep.',
    ],
    myth: {
      myth: 'They passed the test in my car, so they are done.',
      truth:
        'Check it again in anybody else’s car, and in the third row. The same child can pass in one ' +
        'seat and fail in another.',
    },
  },
];

/* The kinds of seat a family owns, in the words printed on the box.
   `stages` is which stages that shell can be used in, which is what
   lets the app tell somebody their current seat does not cover the
   stage their child has reached. */
export const SEAT_KINDS = [
  { id: 'infant', label: 'Infant carrier', stages: ['rear'],
    note: 'Rear facing only, with a base that stays in the car.' },
  { id: 'convertible', label: 'Convertible', stages: ['rear', 'forward'],
    note: 'Rear facing, then turns around. Usually the longest rear facing limits.' },
  { id: 'allinone', label: 'All in one', stages: ['rear', 'forward', 'booster'],
    note: 'Meant to cover every stage. Check it does all three well, not just on the box.' },
  { id: 'combination', label: 'Harness to booster', stages: ['forward', 'booster'],
    note: 'Forward facing with a harness, then the harness comes off and it becomes a booster.' },
  { id: 'highback', label: 'High back booster', stages: ['booster'],
    note: 'Positions the shoulder belt and supports the head.' },
  { id: 'backless', label: 'Backless booster', stages: ['booster'],
    note: 'Needs a vehicle seat back or head rest behind their ears.' },
];

export function seatKind(id) {
  return SEAT_KINDS.filter((k) => k.id === id)[0] || null;
}

export function seatStage(id) {
  return SEAT_STAGES.filter((s) => s.id === id)[0] || null;
}

/**
 * Which stage to show first for a child of this age.
 *
 * This is a STARTING POINT, not an answer, and every screen that uses
 * it says so. The real answer is the limits printed on their seat, and
 * a 3 year old who still fits rear facing should stay rear facing even
 * though the window below has opened on forward facing. That is why
 * this returns the earliest stage still plausible rather than the
 * latest one allowed.
 */
export function seatStageFor(months) {
  const m = Number(months);
  if (!isFinite(m) || m < 0) return SEAT_STAGES[0];
  const hit = SEAT_STAGES.filter((s) => m >= s.floor && m < s.ceiling)[0];
  return hit || SEAT_STAGES[SEAT_STAGES.length - 1];
}

/** Every stage this child could plausibly be in, earliest first. */
export function seatStagesFor(months) {
  const m = Number(months);
  if (!isFinite(m) || m < 0) return [SEAT_STAGES[0]];
  const open = SEAT_STAGES.filter((s) => m >= s.floor && m < s.ceiling);
  return open.length ? open : [SEAT_STAGES[SEAT_STAGES.length - 1]];
}

/* ------------------------------------------------------------------
   EXPIRY

   WHY SEATS EXPIRE, since every parent asks and the usual answer
   sounds like a sales pitch. Four real reasons: the plastic shell is
   cycled through freezing and baking every year and gets brittle; the
   webbing and the foam degrade; the standard the seat was built to
   moves, which is exactly what is happening in December 2026; and
   manufacturers stop making the replacement parts and the labels
   become unreadable, so you can no longer confirm it is installed
   correctly.

   There is no universal number. Six to ten years from manufacture
   covers nearly every seat sold in the US, and the real figure is
   stamped on the shell or in the manual. So the app asks for the date
   rather than calculating one, and offers the common range as a
   fallback for a parent who cannot find it.
   ------------------------------------------------------------------ */
export const SEAT_EXPIRY = {
  title: 'Seats expire, and the date is on the seat',
  body: [
    'Every seat has a useful life, and most are between 6 and 10 years from the date it was made. The real number for your seat is stamped into the plastic, usually on a label on the side or the bottom, and it is in the manual.',
    'It is not a sales trick. The shell is frozen and baked every year it sits in a car and the plastic gets brittle, the webbing and foam degrade, the labels you need in order to install it correctly become unreadable, and the manufacturer stops making the replacement parts.',
  ],
  findIt:
    'Look for two dates: DATE OF MANUFACTURE, which is always there, and an expiry or "do not use after" date, which most seats now carry. If only the manufacture date is there, check the manual for the useful life.',
  close:
    'An expired seat is not a seat that got slightly worse. It is a seat nobody will stand behind.',
};

/** Common useful life, used only to estimate when a parent cannot find the printed date. */
export const SEAT_LIFE_YEARS = [6, 7, 8, 9, 10];

/**
 * How a seat's expiry date is doing, as of `today`.
 *
 * Returns a level the screen can colour on, and words that say the
 * thing rather than making the parent work out a date difference in
 * their head. 'soon' is six months, which is long enough to save up.
 */
export function seatExpiryState(expires, today) {
  const t = String(today || '');
  const e = String(expires || '');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(e)) {
    return { level: 'unknown', words: 'No expiry date saved yet' };
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) {
    return { level: 'unknown', words: 'No expiry date saved yet' };
  }
  if (e < t) return { level: 'expired', words: 'This seat has expired' };
  const days = Math.round((Date.parse(e + 'T00:00:00') - Date.parse(t + 'T00:00:00')) / 86400000);
  if (days <= 183) {
    const months = Math.max(1, Math.round(days / 30.4));
    return {
      level: 'soon',
      words: months === 1 ? 'Expires within a month' : 'Expires in about ' + months + ' months',
    };
  }
  const years = days / 365.25;
  return {
    level: 'ok',
    words: years < 1.5
      ? 'Good for about another year'
      : 'Good for about another ' + Math.round(years) + ' years',
  };
}

/** The date on the shell, turned into an estimate when no expiry is printed. */
export function seatExpiryGuess(made, years) {
  const m = String(made || '');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(m)) return '';
  const y = Number(years);
  if (!isFinite(y) || y <= 0) return '';
  const d = new Date(m + 'T00:00:00');
  d.setFullYear(d.getFullYear() + y);
  return d.toISOString().slice(0, 10);
}

/* ------------------------------------------------------------------
   RECALLS
   ------------------------------------------------------------------ */
export const SEAT_RECALL = {
  title: 'Recalls, and the card nobody posts',
  body:
    'Car seats get recalled, usually for one part rather than the whole seat, and the fix is almost ' +
    'always a free replacement part posted to you. The problem is that nobody can tell you about it ' +
    'if they do not know you own it.',
  steps: [
    'Register the seat. There is a card in the box, and every manufacturer takes it online. It takes two minutes and the only thing they are allowed to use it for is safety notices.',
    'Check it now against NHTSA’s recall list, by make and model.',
    'Write the model name and the manufacture date down somewhere that is not the box you are about to throw away. That is what this screen is for.',
  ],
  secondhand:
    'A used seat is only safe if you know its whole history: who owned it, that it has never been in a ' +
    'crash, that nothing is missing, that it is not expired, and that it is not under an open recall. ' +
    'If any of those is a guess, it is not a bargain.',
  link: { label: 'Check recalls at NHTSA', url: 'https://www.nhtsa.gov/recalls' },
};

/* ------------------------------------------------------------------
   AFTER A CRASH

   NHTSA's five conditions, all of which must be true. Quoted closely
   on purpose: a paraphrase of this one would get somebody hurt.
   ------------------------------------------------------------------ */
export const SEAT_CRASH = {
  title: 'After a crash',
  headline:
    'After a moderate or severe crash, the seat is replaced even if it looks perfect. Damage to the ' +
    'shell and webbing is usually invisible.',
  minorIntro:
    'A crash counts as minor, and the seat does not automatically need replacing, only if ALL FIVE of ' +
    'these are true:',
  minor: [
    'The vehicle could be driven away from the crash site.',
    'The vehicle door nearest the car seat was not damaged.',
    'Nobody in the vehicle was injured.',
    'If the vehicle has air bags, none of them went off.',
    'There is no visible damage to the car seat.',
  ],
  override:
    'If your seat’s manual is stricter than that, the manual wins. Several manufacturers say replace ' +
    'after any crash at all.',
  insurance:
    'Car insurance will often pay for a replacement seat after a crash. Ask, even for a minor one, and ' +
    'keep the old seat until they have answered.',
  dispose:
    'When a seat is done, cut the harness straps and write EXPIRED or CRASHED on the shell before it ' +
    'goes out, so nobody takes it off the kerb and puts a child in it. Some shops run trade in events ' +
    'that recycle them.',
};

/* ------------------------------------------------------------------
   THE DECEMBER 2026 RULE

   She launches weeks before this date and the viral version of it is
   already circulating. This is the straight answer.
   ------------------------------------------------------------------ */
export const SEAT_NEW_RULE = {
  title: 'The new side impact rule, and what it does not mean',
  headline: 'Your seat does not become illegal. Nobody has to replace anything.',
  body: [
    'From 5 December 2026, seats for children up to 40 pounds or 43.3 inches have to pass a federal side impact test as well as the frontal one. The standard is FMVSS 213a, it was first set for June 2025, and the compliance date was moved to December 2026 after the industry asked for more time.',
    'It is a manufacturing standard. It governs what may be built and sold from that date, not what is already buckled into your car. A seat you own stays legal and stays safe to use.',
  ],
  stillFine: 'The seat in your car is fine to keep using as long as all three of these hold:',
  conditions: [
    'It has not passed its expiry date.',
    'It is not under an open recall.',
    'It has not been in a moderate or severe crash.',
  ],
  close:
    'If you are buying a new seat anyway in 2027, a seat built to the new standard is a genuine ' +
    'improvement. That is a reason to choose one, not a reason to throw out the one you have.',
};

/* ------------------------------------------------------------------
   STATE LAW
   ------------------------------------------------------------------ */
export const SEAT_LAW = {
  title: 'The law and the safest thing are two different questions',
  body:
    'Every state writes its own minimum, and several of them are below what the AAP recommends. A ' +
    'state that lets a 4 year old use a booster is not telling you a booster is as safe as a harness ' +
    'at 4, it is telling you where it will ticket you.',
  close:
    'Everything on this screen is the safety answer. Check your own state for the legal minimum, and ' +
    'treat it as a floor rather than a target. A few states are now adding a belt fit test for older ' +
    'children instead of a bare age, which is closer to how it actually works.',
};

/* ------------------------------------------------------------------
   WINTER, HEAT, AND THE THINGS THAT GO WRONG AROUND THE SEAT
   ------------------------------------------------------------------ */
export const SEAT_COATS = {
  title: 'Coats, and anything bulky',
  body:
    'A puffy coat compresses to almost nothing in a crash, which leaves the harness several inches ' +
    'looser than it felt when you tightened it. Nothing bulky goes between the child and the harness.',
  instead: [
    'Buckle and tighten the harness over their normal clothes, then put the coat on backwards over the top like a blanket.',
    'Or lay the coat, or a blanket, over the buckled harness.',
    'Fleece and thin layers are fine. The pinch test is the deciding factor: if you can pinch a fold of webbing at the shoulder, take a layer off.',
  ],
  aftermarket:
    'The same goes for the strap covers, head positioners, seat protectors and shoulder pads sold at ' +
    'the shop. If it did not come in the box with your seat and is not named in your manual, it was ' +
    'not crash tested with your seat.',
};

export const SEAT_HEAT = {
  title: 'Never on their own in the car. Not for a minute.',
  body:
    'A child’s body temperature rises three to five times faster than an adult’s. Heatstroke ' +
    'starts at a core temperature around 104 degrees and becomes fatal at 107. Thirty one children ' +
    'died this way in vehicles in 2025.',
  facts: [
    'Rolling the windows down or parking in the shade barely changes the inside temperature.',
    'It happens below 70 degrees outside. It does not need to be a hot day.',
    'It very rarely happens to the kind of parent who thinks it could not happen to them. It happens on the day the routine changed.',
  ],
  habits: [
    'Put something you cannot leave without, a phone, a bag, a shoe, in the back next to them.',
    'Open the back door every single time you park, even when you know they are not there. Make it the habit rather than the exception.',
    'Agree with daycare that they ring you if a child who was expected does not arrive.',
    'Keep the car locked on the drive. A third of these deaths are children who got in by themselves and could not get out.',
  ],
  ifYouSee:
    'A child alone in a car: call 911 first. Do not wait to find the driver. Getting them out is the ' +
    'right call and every state protects you for making it.',
};

/* ------------------------------------------------------------------
   TRAVEL
   ------------------------------------------------------------------ */
export const SEAT_TRAVEL = {
  title: 'Taxis, planes and other people’s cars',
  rows: [
    {
      q: 'Flying',
      a: 'The safest place for a child under 2 on a plane is an approved restraint, not your lap. Look on the seat for a label reading "This restraint is certified for use in motor vehicles and aircraft". Lap only belts on planes are not a substitute, and turbulence is the usual reason it matters.',
    },
    {
      q: 'The CARES harness',
      a: 'An FAA certified harness that goes round the aircraft seat back, for children 22 to 44 pounds and up to 40 inches. It is the only harness device the FAA approves, it weighs about a pound, and it is far easier than carrying a seat through an airport. It is not for use in a car.',
    },
    {
      q: 'Gate checking a seat',
      a: 'Free on every US airline. It also means the seat spends the flight in the hold being thrown about, which is exactly the kind of unseen stress a shell is not meant to take. A padded bag helps. If you can take it on board and use it, do.',
    },
    {
      q: 'Taxis and rideshare',
      a: 'The law exempts taxis in many places. Physics does not. A lightweight travel seat or a backless booster in a bag is the realistic answer for a city trip with an older child.',
    },
    {
      q: 'Rental cars',
      a: 'Renting a seat means an unknown history, which is the one thing you are not allowed to accept. Check the manufacture date and the shell before you use it, or bring your own.',
    },
    {
      q: 'Grandparents and anybody else driving them',
      a: 'The most common day for a child to ride wrongly restrained is a day somebody else is driving. Install it yourself the first time, take a photo of the correct install, and send them the photo.',
    },
  ],
};

export const SEAT_HELP = {
  title: 'Somebody will check it for you, free',
  body:
    'Most installation errors are in the install rather than the seat, and they are invisible to the ' +
    'person who made them. A certified Child Passenger Safety Technician will go through your actual ' +
    'car with you, usually free, usually at a fire station, hospital or health department.',
  close:
    'Take the manual. Ask them to watch you install it rather than doing it for you, because you are ' +
    'the one who will be doing it next time.',
  link: { label: 'Find an inspection station', url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats' },
};

export const SEAT_EMPTY =
  'No seat saved for them yet. Add one and the app will keep the expiry date, the model name and the ' +
  'manufacture date, which are the three things you cannot read once the box is gone.';

export const SEAT_WHY_RECORD =
  'This is kept on your device and synced to your own account, the same as everything else about them. ' +
  'It is not sent to a manufacturer and it is not used to sell you a seat.';

export const SEAT_FIELD_NOTE =
  'All of it is on the seat itself. The manufacture date is on a white or silver label on the side or ' +
  'the base, and it is also moulded into the plastic underneath.';

/* ==================================================================
   AROUND THE HOUSE
   ================================================================== */
export const POISON = {
  title: 'Poison Control',
  number: '1-800-222-1222',
  blurb: 'Free, 24 hours, staffed by pharmacists and nurses, anywhere in the US.',
  body:
    'Ring them before you do anything else, including before you decide it is nothing. Most calls end ' +
    'with staying home, and they will tell you what to watch for and ring you back.',
  rules: [
    'Do not make them sick. Syrup of ipecac has been off the advice for twenty years and bringing it back up can do more damage on the way out.',
    'Do not wait for symptoms. The window where it is easy to treat is usually before anything shows.',
    'Have the container in your hand when you ring. The name, the strength and roughly how much is missing is what they need.',
    'Save the number in your phone now, under Poison, so it is there before you need it.',
  ],
  call911:
    'Ring 911 instead if they are unconscious, having a seizure, struggling to breathe, or cannot be ' +
    'woken.',
};

export const HOME_HAZARDS = {
  title: 'What actually hurts children at home',
  intro:
    'Not the things that feel frightening. These are the ones that send children to hospital, in rough ' +
    'order of how often, and most of them are fixed in an afternoon.',
  rows: [
    { h: 'Furniture and televisions tipping over',
      d: 'Anchor the dresser, the bookcase and the TV to the wall. A child climbing a drawer is a lever. Anti tip kits come with most furniture now and cost a few dollars otherwise.' },
    { h: 'Button batteries and magnets',
      d: 'A swallowed button battery burns through tissue in about two hours, and the early signs look like a cold. Remote controls, car keys, greeting cards, scales. Treat it as an emergency, not a wait and see. Swallowed high powered magnets attract each other through the bowel.' },
    { h: 'Medicine, including yours and visitors’',
      d: 'Up and locked, not just up. A handbag on the floor is the classic one. Grandparents’ tablet organisers are the other.' },
    { h: 'Cleaning products and detergent pods',
      d: 'Pods look like sweets and burst under a bite. Out of reach, in the original container, never decanted into a drinks bottle.' },
    { h: 'Water, including the kind indoors',
      d: 'Baths, buckets, toilets, paddling pools, and the dog bowl. A child can drown in two inches, in under a minute, with no noise at all.' },
    { h: 'Blind and curtain cords',
      d: 'Cordless, or cleats high on the wall. A looped cord at a cot or a bed is the one to deal with today.' },
    { h: 'Windows and stairs',
      d: 'A screen will not hold a child. Window stops or guards, and gates at the top and the bottom of the stairs while they are learning.' },
    { h: 'Hot drinks, taps and cookers',
      d: 'A mug of tea still scalds fifteen minutes later. Set the water heater to 120 degrees, turn pan handles inward, and keep the mug away from the edge.' },
    { h: 'Firearms, if there are any',
      d: 'Unloaded, locked, ammunition locked separately. And ask the question at every house they visit, in the same tone you would ask about a dog or a pool, because a quarter of the homes they play in have one.' },
    { h: 'The small round food',
      d: 'Whole grapes, hot dog rounds, popcorn, whole nuts, hard sweets. See the choking screen for the ages and the sizes.' },
  ],
  close:
    'Do one of these a week rather than all of them in a weekend. Done slowly is better than planned ' +
    'thoroughly and never started.',
};

export const HOME_DETECTORS = {
  title: 'The two alarms, and the drill',
  rows: [
    'A smoke alarm on every level, outside every sleeping area, and inside each bedroom. Test them monthly and replace the whole unit every 10 years, not just the battery.',
    'A carbon monoxide alarm on every level if anything in the house burns fuel: gas, oil, wood, or an attached garage. Carbon monoxide has no smell and the symptoms are a headache and feeling sick, which is to say they look like a bug.',
    'Two ways out of every room, and one meeting point outside that a 4 year old can name.',
    'Practise it twice a year, at night at least once. Children sleep through smoke alarms more often than anyone expects, so the plan has to include somebody fetching them.',
    'Teach them that a firefighter in full gear looks and sounds frightening and is still the person to go to. Children hide from them.',
  ],
};

export const PREPARED = {
  title: 'If the power goes out, or you have to leave',
  intro:
    'Not a bunker. A box in a cupboard that means a bad night is boring instead of frightening, and ' +
    'that you are not shopping in the dark with a toddler on your hip.',
  kit: [
    'Water: a gallon per person per day, three days at home, and work out what the formula needs on top of that.',
    'Formula, and a way to prepare it without power. Ready to feed cartons need nothing. Powder needs safe water.',
    'Food they will actually eat. A disaster is the worst time to introduce a new texture.',
    'Nappies and wipes, a size up from the ones they are in now, because the box will sit there for a year.',
    'Any prescription they take, and a written list of doses. A photo of the label is enough.',
    'A torch each, including a small one for them. A child with their own torch is a child who is less frightened.',
    'A hand crank or battery radio, and a battery pack for the phone.',
    'Copies of the things that are hard to replace: birth certificates, insurance, the paediatrician’s number. A photo in the cloud counts.',
    'One comfort item each that lives in the box and is not played with. The familiar blanket is doing more work than anything else in there.',
  ],
  plan: [
    'One out of area contact everybody knows, because local lines jam first and texts get through when calls do not.',
    'Teach them their full name, your full name and your phone number. Make it a song if they are little. This is the single most useful thing on the list.',
    'Know where daycare and school take children, and who they will release them to. Fill that form in before you need it.',
    'Agree a meeting point outside the house and a second one outside the neighbourhood.',
  ],
  withChildren: [
    'Tell them what is happening in short true sentences. The version they make up is always worse.',
    'Give them a job. Carrying the torch, counting the water, holding the dog’s lead. Being useful is the fastest route out of frightened.',
    'Keep one thing on schedule even if everything else is gone. The same bedtime story does more than an explanation.',
    'Afterwards, expect it in their play and their sleep for a few weeks. Play is how they process it, and it is a good sign rather than a worrying one.',
  ],
};

/* ==================================================================
   MEDICATION SAFETY

   THE RULE THIS SCREEN WAS WRITTEN AROUND: NO DOSING TABLE.

   A weight based dose printed in an app is a dose nobody checked
   against this child, this strength, this formulation and this
   illness, and the two places it goes wrong are the ones that put
   children in hospital: the infant drops and the children's syrup are
   different concentrations, and a parent reading an age column for a
   small four year old gives too much. So this screen teaches somebody
   to read the bottle in front of them and to ring the pharmacist, and
   it refuses to be the number. That refusal is the feature.
   ================================================================== */
export const MED_STANCE = {
  headline: 'This screen will not give you a dose, on purpose.',
  body: [
    'The right dose depends on your child’s weight, on which bottle is in your hand, and on what else they have had today. Infant drops and children’s syrup are different strengths, and the mix up between them is one of the most common ways a child is overdosed at home.',
    'What it will do is teach you to read the bottle, measure it properly, and know who to ring. Your pharmacist will work the dose out with you in about ninety seconds, free, without an appointment, and they are better at it than any chart.',
  ],
  close:
    'Write the dose your paediatrician or pharmacist gives you on a sticky note on the bottle, with ' +
    'the date. That note is worth more than any table.',
};

export const MED_RULES = [
  { h: 'Measure in millilitres, with the thing that came in the box',
    d: 'A syringe or the dosing cup that came with that bottle. Never a kitchen teaspoon: they vary by two or three times, and the error is always in the same direction.' },
  { h: 'Dose by weight, not by age',
    d: 'The age column on the box is a rough proxy for weight. If your child is small or large for their age, it is wrong for them. Know their current weight in pounds and kilograms.' },
  { h: 'Write down what you gave and when',
    d: 'Two tired adults each giving a dose an hour apart is the most common accidental double dose there is. A note on the bottle or in the app stops it.' },
  { h: 'Check the active ingredient, not the brand name',
    d: 'Acetaminophen is in dozens of combination products. A cold medicine plus a fever medicine can be two doses of the same drug.' },
  { h: 'No ibuprofen under 6 months',
    d: 'Unless your doctor has specifically told you to. Under 3 months, any fever at all is a phone call before any medicine.' },
  { h: 'Never aspirin, for a child or a teenager',
    d: 'Aspirin during a viral illness is linked to Reye’s syndrome, which is rare and catastrophic. It is also hidden in some stomach remedies, so check.' },
  { h: 'Cough and cold medicines: never under 2, not recommended under 6',
    d: 'They do not work in small children and they do cause harm. Honey after 1 year, fluids, and a humidifier do more.' },
  { h: 'A fever is not the thing being treated',
    d: 'Medicine is for comfort, not for the number. A child with a fever who is drinking and playing may not need anything.' },
];

export const MED_STORAGE = {
  title: 'Where it lives',
  rows: [
    'Up AND locked. Height alone stops a 2 year old and nothing else. A lockbox costs less than a car seat strap cover.',
    'In the original container, with the label. A decanted medicine is an unlabelled medicine.',
    'No child resistant cap is childproof. It buys you time, it does not buy you safety.',
    'The handbag on the floor is the classic one, and the visiting grandparent’s tablet organiser is the other. Those organisers have no caps at all.',
    'Vitamins and supplements count. Iron tablets are one of the most dangerous things in most houses, and they look like sweets.',
    'Never call medicine sweets or candy to get it down. They will go looking for it later.',
    'Take old medicine back to a pharmacy or a police drop box rather than binning it where a child can find it.',
  ],
};

export const MED_WRONG = {
  title: 'If they have had too much, or something that was not theirs',
  headline: 'Ring Poison Control on 1-800-222-1222 before you do anything else.',
  rows: [
    'Do not wait for symptoms. With acetaminophen in particular there may be none at all for a day, and the window where it is easy to treat is in the first hours.',
    'Do not try to make them sick.',
    'Have the bottle in your hand: the name, the strength, and roughly how much is gone.',
    'Ring 911 instead if they are unconscious, fitting, struggling to breathe, or will not wake.',
  ],
};

/* ==================================================================
   HEAT, COLD AND WEATHER
   ================================================================== */
export const HEAT_TABS_INTRO =
  'Children heat up and cool down faster than adults do, and they will not tell you until it is ' +
  'well along. These are the three that put them in hospital.';

export const HEAT_CAR = SEAT_HEAT;

export const HEAT_SUN = {
  title: 'Sun',
  rows: [
    'Under 6 months, shade and clothing rather than sunscreen on most of the body. A small amount on the face and backs of the hands where you cannot cover them is fine.',
    'From 6 months, broad spectrum SPF 30 or higher, on everybody, on cloudy days too.',
    'Reapply every two hours, and immediately after swimming or towelling. Reapplying is where almost everybody fails rather than the first application.',
    'A hat with a brim and a long sleeved swim top do more than any bottle.',
    'One blistering sunburn in childhood meaningfully raises their melanoma risk for life. This is not a cosmetic issue.',
  ],
};

export const HEAT_HOT = {
  title: 'Hot days',
  rows: [
    'Watch for a child who stops sweating, goes quiet, or stops asking for things. In small children, flat and uninterested is the warning sign, not complaining.',
    'Offer drinks before they ask, every twenty minutes while they are playing outside. Thirst arrives late.',
    'Playground equipment, car seat buckles, and tarmac all burn skin at temperatures that feel ordinary underfoot in shoes.',
    'Hot, dry skin with confusion or a fit is heatstroke and is a 911 call. Cool them while you wait: shade, wet cloths, a fan.',
  ],
};

export const HEAT_COLD = {
  title: 'Cold',
  rows: [
    'One more layer than you are wearing, and layers rather than one thick coat.',
    'Nothing bulky inside the car seat harness, however cold it is. See the car seat screen.',
    'Loose cords, scarves and hood toggles are a strangulation risk on playground equipment. A neck warmer instead of a scarf.',
    'Hats and mittens do most of the work. Small children lose heat fastest from the head.',
    'Bring them in to warm up on a schedule rather than when they say so. They will not say so.',
  ],
};

export const HEAT_STORM = {
  title: 'Storms and losing power',
  rows: [
    'Never run a generator, grill or camp stove in a garage, a porch or anywhere near a window. Carbon monoxide after a storm kills more people than the storm did.',
    'A carbon monoxide alarm with a battery backup is the one thing to buy before hurricane season.',
    'Know the difference between a watch and a warning, and decide in advance where in the house you go.',
    'A torch rather than a candle, always, with a toddler in the house.',
    'See Emergency Planning for what goes in the box.',
  ],
};

/* ==================================================================
   BABYSITTERS AND ANYBODY ELSE WHO HAS THEM

   This exists because the written sheet is the thing nobody makes and
   everybody wishes they had, and because the hardest items on it are
   the ones a parent feels rude asking about. Saying them here makes
   them ordinary.
   ================================================================== */
export const SITTER_INTRO =
  'The written sheet matters more than the conversation at the door, because the person will be ' +
  'frightened and alone when they need it and will not remember what you said.';

export const SITTER_SHEET = {
  title: 'What goes on the sheet, on the fridge',
  rows: [
    'Your full name, your mobile, and a second adult’s mobile.',
    'The actual street address of the house. Somebody ringing 911 from a mobile has to say where they are, and a sitter often cannot.',
    'Poison Control, 1-800-222-1222.',
    'The children’s full names and dates of birth, their weights, and the paediatrician’s name and number.',
    'Allergies, in capitals, and where the medicine for them is. Say it out loud as well.',
    'Any medicine due, the dose, and the time. Written, not remembered.',
    'A neighbour who is in, by name and door number.',
    'What the children are and are not allowed to do, including screens, food and leaving the house.',
    'Where the torch, the first aid kit and the fuse box are.',
  ],
};

export const SITTER_ASK = {
  title: 'What to ask before you go, including the awkward ones',
  rows: [
    'Are you trained in infant and child CPR, and when did you last do it.',
    'Will anybody else be in the house, including adults, and including for a few minutes.',
    'Will you be driving them anywhere, and if so, can you install the seat with me now.',
    'Are there firearms in your house, and are they locked, with the ammunition separate. Ask this at every house they visit, in the same tone as asking about a dog.',
    'Is there a pool, a hot tub or a pond, and is there a fence with a self closing gate.',
    'What is your phone policy while they are awake.',
  ],
  tone:
    'If asking any of this feels rude, it is worth noticing that nobody who is safe to leave a child ' +
    'with has ever been offended by it. The reaction to the question is itself an answer.',
};

export const SITTER_RUN = {
  title: 'Run through it with them, in the house',
  rows: [
    'Walk the exits. Where the doors are, where the meeting point outside is, which window does not open.',
    'Show them how the car seat buckles and unbuckles, even if nobody is driving.',
    'Show them how the cot works, where the baby sleeps, and that nothing else goes in it.',
    'Tell them that ringing you is never an overreaction, and that ringing 911 before ringing you is correct.',
    'Agree a time you will check in, so a quiet phone does not mean anything either way.',
  ],
};

export const SITTER_OLDER = {
  title: 'When the sitter is a teenager, including your own',
  rows: [
    'An older sibling minding a younger one is still a sitter and still needs the sheet.',
    'Most 11 and 12 year olds can manage an hour in daylight. Overnight, bath time and feeding a baby are a different question entirely.',
    'The Red Cross runs a babysitting course from 11 and it is genuinely good. It costs about the same as one evening’s pay.',
    'Agree in advance what happens if the younger one will not do as they are told, because that is the moment it goes wrong.',
  ],
};

/* ==================================================================
   LOST CHILD

   WHY WATER IS FIRST. Half of autistic children wander at some point
   and drowning is the leading cause of death when they do, which is
   why the CDC tells families to have responders search water first.
   That instruction is good for every child, so it is here rather than
   buried in a lens.
   ================================================================== */
export const LOST_NOW = {
  title: 'If it is happening right now',
  headline: 'Water first. Say that to the dispatcher.',
  steps: [
    'Shout their name and describe them out loud to everybody near you. In a shop, tell staff immediately and ask for the doors to be watched: most chains have a trained lockdown procedure.',
    'Ring 911 straight away. There is no waiting period for a missing child, and nobody will think you overreacted.',
    'Tell them to search water first: pools, ponds, retention ponds, drainage ditches, canals, the lake. Then busy roads and railway lines. This is the CDC’s own search order and it is where children are found.',
    'Send one person to the car and one to the exit. Children head for water, for their own car, and for whatever they were just looking at.',
    'Give the dispatcher what they were wearing, their height, and whether they respond to their name. That last one matters enormously and nobody thinks to say it.',
  ],
  photo:
    'Take a photo of each child on your phone every morning you go somewhere crowded. Not a nice ' +
    'photo, today’s clothes. It takes two seconds and it is the single most useful thing on this page.',
};

export const LOST_TEACH = {
  title: 'What to teach them, before',
  rows: [
    'Stop where you are and stay there. A child who stays put is found far faster than one who searches.',
    'Who to ask. Not "do not talk to strangers", which leaves them with nobody. Teach them to find a mum with children, or somebody behind a till in a uniform.',
    'Their full name, your full name, and your phone number. Make it a song. This is the one that actually gets them back to you.',
    'That you will never be angry about this. Children hide because they are frightened of the telling off.',
    'Agree a meeting point out loud every time you arrive somewhere big, and point at it.',
  ],
};

export const LOST_PREVENT = {
  title: 'Before you go',
  rows: [
    'Dress them in something you can describe in three words. Bright is easier than nice.',
    'Write your number on their wrist or on a card in their pocket for a day at a fair or a theme park.',
    'In a crowd, the pushchair or a hand is not fussy, it is the plan. The age where they can be trusted not to bolt is later than it feels.',
    'Count them out loud at every change of place. Say the number.',
  ],
};

export const LOST_WANDER = {
  title: 'Children who leave on purpose',
  body:
    'Nearly half of autistic children wander at some point, usually towards water or towards something ' +
    'they are interested in, and usually without responding to their name being called. It is not ' +
    'naughtiness and it is not a parenting failure, and the families it happens to are almost always ' +
    'watching closely when it happens.',
  rows: [
    'Locks they cannot work, high on the door, and a chime or alarm on every exit including the windows. This is the single most effective thing.',
    'Swimming lessons, early and repeatedly, in clothes as well as a costume. For a child who heads for water, this is a life saving skill rather than a hobby.',
    'Tell the neighbours, by name, which child and what they are drawn to. Give them your number.',
    'Tell your local police and fire service in advance, before anything happens. Many departments keep a voluntary register, and some provide a tracking device free.',
    'A medical ID bracelet, or a tag on the shoe, saying their name, your number and that they may not answer to their name.',
    'Tell school and daycare in writing that this child elopes, and ask what their plan is. Ask them to ring you the moment they cannot see them, not after they have looked.',
  ],
  close:
    'If this is your child, this is a safety plan rather than a worry, and the families who make one ' +
    'are not the anxious ones. They are the prepared ones.',
};

/* ==================================================================
   FINDING A TECHNICIAN

   WHAT THIS DELIBERATELY IS NOT. Her mockup draws a map with pins,
   distances and star ratings. There is no directory behind this app
   that could fill those in, and inventing a nearby technician would be
   the worst possible thing this screen could do. So it sends people to
   the two real national finders and tells them what to expect when
   they get there, which is slower to look at and actually works.
   ================================================================== */
export const CPST = {
  title: 'Somebody will check your seat, free',
  body:
    'A Child Passenger Safety Technician is certified through a national programme and will go through ' +
    'your own car with you. Most inspection stations are free, and they are usually at a fire station, ' +
    'a hospital, a health department or a police station.',
  expect: [
    'Allow 30 to 45 minutes for one seat. It is not a two minute look.',
    'Take the seat’s manual and your car’s manual. The second one is the one everybody forgets and it is where the anchor positions are.',
    'Ask them to watch you install it rather than doing it for you. You are the one who will be doing it next week.',
    'Take a photo of the finished install, from both sides. Send it to anybody else who drives them.',
    'Bring the child if you can, so the harness is adjusted to the body that will be in it.',
  ],
  links: [
    { label: 'NHTSA inspection station finder, searchable by ZIP', url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats#find-car-seat-inspection-station' },
    { label: 'Safe Kids Worldwide, car seat checkup events', url: 'https://www.safekids.org/car-seat' },
  ],
  cost:
    'If you cannot afford a seat, say so when you ring. Many health departments, hospitals and Safe ' +
    'Kids coalitions run programmes that give one free or at low cost, and nobody will make it awkward.',
};

/* ==================================================================
   SOURCES
   ================================================================== */
export const SAFETY_SOURCES = [
  { org: 'AAP', label: 'Car seats: information for families, updated April 2026',
    url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx' },
  { org: 'AAP', label: 'Rear facing car seats for infants and toddlers',
    url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Rear-Facing-Car-Seats-for-Infants-Toddlers.aspx' },
  { org: 'NHTSA', label: 'Car seats and booster seats, and finding a free inspection',
    url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats' },
  { org: 'NHTSA', label: 'Car seat use after a crash, including the five minor crash conditions',
    url: 'https://www.nhtsa.gov/car-seat-use-after-crash' },
  { org: 'NHTSA', label: 'Recalls, searchable by car seat make and model',
    url: 'https://www.nhtsa.gov/recalls' },
  { org: 'NHTSA', label: 'Child heatstroke prevention',
    url: 'https://www.nhtsa.gov/campaign/heatstroke' },
  { org: 'Federal Register', label: 'FMVSS 213a side impact protection, the rule of 9 September 2026 that set the 5 December 2026 compliance date',
    url: 'https://www.federalregister.gov/documents/2026/09/09/2026-18380/federal-motor-vehicle-safety-standard-no-213a-child-restraint-systems-side-impact-protection-federal' },
  { org: 'FAA', label: 'Child safety seat tips, including the aircraft certification label and CARES',
    url: 'https://www.faa.gov/travelers/fly_children/child_safety_seat_tips' },
  { org: 'Poison Control', label: 'US Poison Control, 1-800-222-1222, 24 hours',
    url: 'https://www.poison.org/' },
  { org: 'AAP', label: 'Medication safety tips, including measuring, storage and the cough and cold age limits',
    url: 'https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Medication-Safety-Tips.aspx' },
  { org: 'CDC', label: 'Autism wandering and elopement is an emergency, including the search water first instruction',
    url: 'https://www.cdc.gov/priorities/autism/autism-wandering-and-elopement-is-an-emergency.html' },
  { org: 'Safe Kids', label: 'Car seat checkup events and inspection',
    url: 'https://www.safekids.org/car-seat' },
];

export const SAFETY_DISCLAIMER =
  'Checked against AAP, NHTSA and FAA guidance current in October 2026. Your own seat’s manual and ' +
  'your own state’s law both override anything here, and a certified technician looking at your ' +
  'actual car beats every word of it.';

export default SAFETY_ROWS;

/**
 * Ready Set Grow: How many diapers, actually
 * ------------------------------------------------------------------
 * WHY THIS IS SEPARATE FROM THE DIAPER COUNTS ALREADY IN THE APP
 * src/data/feeding.js already carries diaper expectations, and those
 * are a health signal: how many wet diapers a newborn should have to
 * show enough milk is going in. Important, and a completely different
 * question from the one a parent actually asks out loud, which is
 * "how many of these am I going to get through, and how many do I send
 * to daycare".
 *
 * Nobody writes that down. Every article is either the medical
 * question or a brand telling you to buy more.
 *
 * THE DAYCARE ONE IS THE WHOLE POINT
 * Her example, which is the reason this exists: her son at two or
 * three was changed roughly every three hours at daycare plus whenever
 * he pooped, so three or four there, and around five or six across the
 * whole day. That is exactly the arithmetic a parent needs when the
 * daycare says bring diapers and does not say how many, and it is
 * nowhere.
 *
 * ON THE NUMBERS
 * These are ranges from published guidance, and they are averages
 * across a lot of babies rather than a target. A baby at the bottom of
 * the range who is gaining and happy is not underchanged, and a baby
 * at the top is not overchanged. Where a number really does matter
 * medically, which is wet diapers in the first weeks, this file points
 * at the place that already covers it rather than saying it again
 * slightly differently.
 */

export const DIAPER_TITLE = 'How many diapers';

export const DIAPER_SUB = 'What you will actually get through, and how many to send.';

export const DIAPER_INTRO =
  'Nobody tells you this number and everybody needs it. Here is roughly what a day looks like at '
  + 'each age, what to send to daycare, and how much to buy without ending up with 4 unopened '
  + 'packs of a size they have grown out of.';

/* ------------------------------------------------------------------
 * PER DAY, BY AGE
 * ------------------------------------------------------------------ */

export const DIAPER_BANDS = [
  {
    id: 'newborn',
    label: 'Newborn, the first month',
    max: 1,
    perDay: '8 to 12',
    low: 8, high: 12,
    perMonth: 'around 240 to 360',
    note: 'The most you will ever use. They feed constantly, so they go constantly, and a newborn will often go during the change itself.',
  },
  {
    id: 'twotofour',
    label: '2 to 4 months',
    max: 5,
    perDay: '8 to 10',
    low: 8, high: 10,
    perMonth: 'around 240 to 300',
    note: 'Still high, but the poops start spacing out, sometimes dramatically. A breastfed baby going several days without one at this age can be completely normal.',
  },
  {
    id: 'fivetoeight',
    label: '5 to 8 months',
    max: 9,
    perDay: '7 to 9',
    low: 7, high: 9,
    perMonth: 'around 210 to 270',
    note: 'Solids arrive and change everything about the other end. Firmer, smellier, and usually fewer.',
  },
  {
    id: 'ninetotwelve',
    label: '9 to 12 months',
    max: 13,
    perDay: '6 to 8',
    low: 6, high: 8,
    perMonth: 'around 180 to 240',
    note: 'Now moving, which means changes are a wrestling match rather than a task. Standing changes are allowed and they save everybody.',
  },
  {
    id: 'oneandtwo',
    label: 'One and 2 years',
    max: 36,
    perDay: '5 to 7',
    low: 5, high: 7,
    perMonth: 'around 150 to 210',
    note: 'Roughly one every 3 hours awake plus whenever they poop, which is where most of the variation comes from.',
  },
  {
    id: 'training',
    label: 'Around potty training',
    max: 60,
    perDay: '3 to 6',
    low: 3, high: 6,
    perMonth: 'around 90 to 180',
    note: 'It goes down in steps rather than smoothly, and it goes back up during any illness, any vacation, and the week a sibling arrives. That is not a failure, that is just what it does.',
  },
];

export function diaperBandFor(months) {
  if (typeof months !== 'number') return DIAPER_BANDS[2];
  for (let i = 0; i < DIAPER_BANDS.length; i++) {
    if (months < DIAPER_BANDS[i].max) return DIAPER_BANDS[i];
  }
  return DIAPER_BANDS[DIAPER_BANDS.length - 1];
}

export const DIAPER_RULE = {
  title: 'The rule the whole thing runs on',
  body: [
    'Every 2 to 3 hours while they are awake, and straight away when they poop. Everything else on this screen is that rule with arithmetic done to it.',
    'Overnight is the exception. A lightly wet diaper on a sleeping baby is not worth waking them for. A poop or a soaked one is.',
    'Sooner than the schedule if they are uncomfortable, if it feels heavy, or if the wetness line has changed color.',
  ],
};

/* ------------------------------------------------------------------
 * THE DAYCARE ONE
 * ------------------------------------------------------------------ */

export const DIAPER_DAYCARE = {
  title: 'How many to send to daycare',
  headline: 'Hours there, divided by three, plus two. That is the whole formula.',
  body: [
    'Most centers change on a schedule of roughly every 2 to 3 hours, plus immediately for a poop. So an 8 hour day is around 3 scheduled changes, plus one or 2 for poops, which is where 3 to 4 comes from.',
    'Then add 2 spares. Not because they will use them, but because a blowout costs 2 and being the parent whose child ran out is a bad afternoon for everybody.',
    'Most centers also ask you to keep a small stock there and will tell you when it is getting low. Send a full pack on the first day rather than counting them out, and top it up when they ask.',
    'The rest of the day at home is another 2 or 3, which is how a 2 year old lands at around 5 or 6 across a whole day.',
  ],
  alsoSend: [
    'Wipes, a full pack, refilled more often than you expect',
    'Cream, labeled with their name, since most centers will not share',
    '2 full changes of clothes, and a third in summer',
    'Bags for the wet things, if the center does not provide them',
  ],
};

export function diaperDaycareCount(hours) {
  const h = Math.max(0, Math.min(14, Number(hours) || 0));
  if (!h) return 0;
  return Math.ceil(h / 3) + 2;
}

export function diaperDayTotal(months, daycareHours) {
  const band = diaperBandFor(months);
  const away = diaperDaycareCount(daycareHours);
  if (!away) return { away: 0, home: band.low + ' to ' + band.high, total: band.perDay };
  /* Away is a count of what to SEND, which includes spares, so the
     home half is the band minus the changes they will actually use
     there rather than minus what was sent. */
  const used = Math.max(1, away - 2);
  const lowHome = Math.max(1, band.low - used);
  const highHome = Math.max(lowHome, band.high - used);
  return { away: away, home: lowHome + ' to ' + highHome, total: band.perDay };
}

/* ------------------------------------------------------------------
 * BUYING
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------
 * HOW MANY TO TAKE WITH YOU
 * The other half of the question. Knowing you use seven a day does not
 * tell you how many to put in a bag for a six hour drive.
 * ------------------------------------------------------------------ */

export const DIAPER_PACKING = {
  title: 'How many to take with you',
  headline: 'One for every hour you will be out, plus two. Round up, never down.',
  body: [
    'It sounds like too many and it is not. The 2 spares are for the blowout that needs two, and for the delay nobody planned.',
    'A diaper weighs nothing and being short of one is the worst 20 minutes of a day out. This is the one thing on this screen where over packing costs you nothing.',
  ],
  trips: [
    { what: 'A couple of hours out', how: 'Four. Two you will use and two you will not.' },
    { what: 'A whole day out', how: '8 to 10, and a full pack of wipes rather than a travel one.' },
    { what: 'A long car journey', how: 'One per hour plus four, and keep them in the cabin rather than the boot.' },
    { what: 'A flight', how: 'Double what the same hours on the ground would need. Delays on a plane are the reason, and you cannot go and buy more at 30,000 feet.' },
    { what: 'A night away', how: 'A day\u2019s worth plus six, since somebody else\u2019s house at 2am is not the moment to run out.' },
    { what: 'A week away', how: 'Take 3 days and buy the rest there, unless you are going somewhere rural or abroad where your size may not be on the shelf.' },
    { what: 'Left with a grandparent or sitter', how: 'Double what the hours suggest, and show them where the spares are.' },
  ],
  alsoNote:
    'Keep a sealed bag in the car with 4 diapers, a travel pack of wipes and a full change of '
    + 'clothes, and forget about it until the day it saves you. Swap the clothes for the next size up '
    + 'every few months.',
};

export function diapersForHours(hours) {
  const h = Math.max(0, Math.min(24, Number(hours) || 0));
  if (!h) return 0;
  return Math.ceil(h) + 2;
}

export const DIAPER_BUYING = {
  title: 'Buying them without wasting money',
  items: [
    'Do not stockpile newborn size. Most babies are in it for a few weeks and some skip it completely. One pack, and buy more only if you need more.',
    'Size one is the same warning with a smaller siren. 2 packs, not 10.',
    'From size 3 onwards, stockpiling starts to make sense, because they stay in each of the bigger sizes for months.',
    'Bigger sizes have fewer diapers in the same size box. The price per diaper goes up as they grow and the pack count goes down, which is why the bill feels like it never falls.',
    'Register for a mix of sizes rather than a tower of newborn. Anybody buying you newborn diapers means well and is buying you 3 weeks.',
    'Subscriptions are usually cheaper and usually send too many at first. Set it at the low end and adjust up.',
    'Store brands are genuinely fine for most babies. The ones that matter are overnight and, if you have a leaker, the specific brand that stops it.',
  ],
  sizeUp: {
    title: 'When to go up a size',
    items: [
      'Red marks at the thighs or the waist after a change.',
      'Leaks that are happening more than occasionally, especially up the back.',
      'The tabs are reaching the very edge to fasten.',
      'Less than 2 fingers of room at the waist.',
      'They are near the top of the weight range on the pack.',
      'A diaper that leaks is usually the wrong size rather than the wrong brand, and going up a size fixes more leaks than going up a brand.',
    ],
  },
};

export const DIAPER_NIGHT = {
  title: 'Overnight',
  items: [
    'From around 4 to 6 months, one overnight diaper instead of a regular one solves most morning leaks.',
    'A size up at night alone is the cheap version of the same trick and it works.',
    'Point it downwards for a boy before you fasten it. That single move fixes an enormous number of leaks up the front.',
    'Make sure the frill around each leg is pulled out rather than tucked in. Tucked in is the single most common cause of a leak and almost nobody is told.',
    'If they still leak through, it is usually fit rather than absorbency. Go up a size before you go up a price.',
  ],
};

export const DIAPER_COST = {
  title: 'What it adds up to',
  body: [
    'Somewhere around 2,000 to 2,500 diapers in the first year for most babies, and roughly 5,000 to 6,000 across the whole time they are in them.',
    'The first 3 months are about a third of the first year’s total, which is why it feels so relentless at the start and why it genuinely does get easier.',
    'If the cost is a real problem, diaper banks exist and they are ordinary to use. Hospital social workers, WIC offices, pediatric practices and local churches nearly all know where the nearest one is.',
  ],
};

export const DIAPER_HEALTH_NOTE =
  'One thing here is medical rather than practical. In the first weeks, how many WET diapers a '
  + 'newborn has is the simplest measure of whether enough milk is going in, and too few is a reason '
  + 'to be seen rather than a reason to buy more. That is covered properly on the Feeding screen '
  + 'under the newborn rhythm.';

/* WHERE THESE NUMBERS COME FROM, SAID OUT LOUD.

   She asked for a proper source and she was right to. The detailed per
   age tables in circulation are almost all published by companies that
   sell diapers, which does not make them wrong and does mean the
   people writing them have an obvious reason to round up.

   So the top of the range is anchored to the National Diaper Bank
   Network, who work on diaper need and are not selling anything: up to
   twelve a day for an infant, at eighty to a hundred dollars or more a
   month per baby. That figure matches the manufacturer tables at the
   newborn end, which is a reasonable check on them.

   There is no clinical body publishing a per age breakdown, because it
   is not a clinical question. It is a household planning question, and
   the honest thing is to say so on the screen rather than dress a
   marketing table up as guidance. */
export const DIAPER_SOURCE_NOTE =
  'Worth knowing where these come from. The top of the range, up to 12 a day for an infant and '
  + '80 to 100 dollars a month, is from the National Diaper Bank Network, who work on '
  + 'diaper need and do not sell diapers. The age by age breakdown is the industry\u2019s own, because '
  + 'nobody else publishes one, and the companies behind it sell diapers. Treat the ranges as a '
  + 'starting point for your own arithmetic rather than a target, and after 2 weeks your own '
  + 'count beats anybody\u2019s table.';

export const DIAPER_SOURCES = [
  { org: 'National Diaper Bank Network', label: 'What diaper need is, and how many a baby uses', url: 'https://nationaldiaperbanknetwork.org/wp-content/uploads/2022/12/NDBN_DiaperNeed_Overview_Dec_2022-.pdf' },
  { org: 'National Diaper Bank Network', label: 'Find a diaper bank near you', url: 'https://nationaldiaperbanknetwork.org/' },
  { org: 'AAP', label: 'Diapering and diaper rash, HealthyChildren', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/default.aspx' },
  { org: 'Pediatrics', label: 'Diaper need and its impact on child health', url: 'https://publications.aap.org/pediatrics/article-abstract/132/2/253/31443/Diaper-Need-and-Its-Impact-on-Child-Health' },
];

export function showsDiaperContent(months) {
  return typeof months !== 'number' || months < 60;
}

export default DIAPER_TITLE;

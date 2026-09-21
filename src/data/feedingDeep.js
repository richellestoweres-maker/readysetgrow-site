/**
 * Ready Set Grow: Feeding, the part nobody writes down
 * ------------------------------------------------------------------
 * WHY THIS FILE EXISTS
 * src/data/feeding.js answers what to feed. This one answers how, and
 * how is where parents actually get stuck. Triple feeding, a baby who
 * is not gaining, a bottle that drowns them, and the wall of products
 * that all claim to be the one that works.
 *
 * THE RULE THIS FILE IS WRITTEN UNDER, AND IT IS A NEW ONE
 * Parents want to be told what to buy. Refusing to name anything is a
 * way of being useless while looking careful. So this file names
 * products, and then it does the thing almost nobody does, which is
 * separate two questions that get deliberately blurred on packaging:
 *
 *   What do parents and lactation consultants actually reach for?
 *   And what does the evidence behind the claim on the box say?
 *
 * Those have different answers, and a parent deserves both. An app
 * that only gives the first is an advertorial. An app that only gives
 * the second is no help at 2am in a Target aisle.
 *
 * NOTHING HERE IS SPONSORED, and nothing here should ever be. The
 * moment a brand pays to be in this list, every other sentence in this
 * app is worth less. If that ever changes it has to be said on the
 * screen in the same size type as everything else.
 *
 * THE BIGGEST SINGLE FACT IN THIS FILE
 * Measured flow rates across twenty five bottle nipples ran from under
 * 1 mL per minute to nearly 38, and nipples all labeled slow flow
 * differed significantly from one another. Slow flow is a marketing
 * word, not a measurement. That one finding is worth more to a
 * struggling parent than every shape claim on every box combined.
 *
 * SOURCES are at the bottom with links, and the claims that rest on
 * manufacturer funded research say so.
 */

/* ------------------------------------------------------------------
 * TRIPLE FEEDING
 *
 * There is a short operational card about this on the pumping screen,
 * in src/data/pumping.js, because somebody already pumping needs it
 * right there. This is the full treatment: the same position, more of
 * it, and the exit numbers that card does not have room for.
 * ------------------------------------------------------------------ */

export const TRIPLE_TITLE = 'Triple feeding';

export const TRIPLE_HEADLINE =
  'Feed, then top up, then pump. 3 jobs every 3 hours, around the clock. It is a bridge and '
  + 'it is not a way to live.';

export const TRIPLE_WHAT = {
  title: 'What it actually is',
  body: [
    'One cycle is 3 things in a row. Feed the baby at the breast. Then offer a top up of expressed milk or formula by bottle, syringe, cup or an at breast supplementer. Then pump to tell your body to make more for next time.',
    'The whole cycle takes somewhere between 45 minutes and an hour and a quarter, and it repeats every 2 and a half to 3 hours. Do the arithmetic and you will see the problem, which is that at the tight end there is almost no gap between finishing one and starting the next.',
    'It is usually started for one of 3 reasons: the baby is not gaining enough, the baby cannot transfer milk well, or your supply needs protecting while something else gets fixed.',
  ],
  why:
    'It exists to do 2 jobs at once. Get calories into a baby who is not getting enough, and keep your '
    + 'supply up while whatever is in the way gets sorted out. Both of those are real and worth doing. '
    + 'Neither of them is a reason to still be doing it in 4 months.',
};

export const TRIPLE_HONEST = {
  title: 'The part nobody says out loud',
  body: [
    'Triple feeding is one of the most common reasons parents stop breastfeeding altogether, and it is often started without anybody saying how it ends. That is the failure. Not the parent, and not the method.',
    'You are doing 3 jobs where most people do one, on no sleep, usually in the first weeks after giving birth. There is nothing weak about finding it unsustainable. It is unsustainable.',
    'Days to a couple of weeks is the shape of it. If you are past that and nobody has changed the plan, the plan needs changing.',
  ],
  permission:
    'It is also completely reasonable to look at what this is costing you and decide to stop, at any '
    + 'point, for any reason. Moving to combination feeding or to formula is a decision, not a '
    + 'surrender, and a parent who is coping matters more to this baby than the source of the milk.',
};

export const TRIPLE_EXIT = {
  title: 'How you get off it',
  intro:
    'You should have this in writing before you start, and if nobody gave you one, this is what to ask '
    + 'for. Two ways off, and your IBCLC or pediatrician picks which fits your baby.',
  ways: [
    {
      way: 'Shrink the top ups',
      how: 'Take a quarter to half an ounce off each supplement every day or two, which works out to somewhere around 2 to 6 ounces less across the whole day each day or two. Watch diapers and weight as you go rather than guessing.',
    },
    {
      way: 'Drop whole top ups',
      how: 'Keep the amounts the same and remove one supplemental bottle every few days, starting with whichever feed the baby seems most satisfied after. Often the morning one, when supply is highest.',
    },
  ],
  thenThePump:
    'The pumping comes down last and slowly, not all at once. Cutting pumps suddenly once the baby is '
    + 'feeding well is how people end up with a blocked duct or mastitis at the exact moment they '
    + 'thought the hard part was over.',
  askEveryVisit: [
    'What specifically has to change for us to stop doing this?',
    'What are we watching to know it is working, and how often are we weighing?',
    'What is the date we look at this again if it has not changed?',
    'If this does not work, what is the plan after it?',
  ],
};

export const TRIPLE_EASIER = {
  title: 'Things that make it survivable while it lasts',
  items: [
    'Top up while you pump, if you have a hands free pump and somebody to hold the bottle, or a pillow setup that lets you do both. This is the single biggest time saving there is.',
    'Set up stations. One by the bed, one where you sit in the day, each with everything you need, so no cycle starts with hunting for a pump part.',
    'Buy extra pump parts so you are not washing at 3am. Rinse and refrigerate between sessions is fine within a day.',
    'Skip one pump in the night if your supply is established and you are running on nothing. A parent who slept is worth more than one extra ounce.',
    'Hand express for a minute after pumping. It gets out more than the pump does and it takes almost no time.',
    'Let somebody else do a whole cycle with a bottle while you sleep, if you have anybody at all. Your supply survives one missed session far better than you survive a fourth week of this.',
  ],
};

/* ------------------------------------------------------------------
 * WEIGHT GAIN
 * ------------------------------------------------------------------ */

export const GAIN_TITLE = 'Weight gain, and what the numbers mean';

export const GAIN_HEADLINE =
  'Diapers and the scale are the only honest measure of how much went in. Feed length, how full you '
  + 'feel, and how much you can pump are all guesses.';

export const GAIN_NUMBERS = {
  title: 'Roughly what to expect',
  rows: [
    { when: 'The first few days', what: 'Most newborns lose weight. Up to about 7 to 10 percent of birth weight is common and expected.' },
    { when: 'By 10 to 14 days', what: 'Back to birth weight. Not back by then is a reason to be seen, not a reason to wait another week.' },
    { when: 'Birth to 3 months', what: 'About an ounce a day, which is roughly 30 grams.' },
    { when: '3 to 6 months', what: 'About 2 thirds of an ounce a day, roughly 20 grams.' },
    { when: '6 to 12 months', what: 'Slower again, and appetite genuinely drops once they start moving. A baby who has thinned out while learning to crawl is usually a baby who is learning to crawl.' },
  ],
  note:
    'These are averages and your baby is not an average. What matters far more than any single number '
    + 'is the shape of the line over time.',
};

export const GAIN_SLOW = {
  title: 'Slow gaining, and worrying gaining',
  intro: 'These are 2 different things and they get treated as one, which frightens people unnecessarily.',
  fine: {
    label: 'A slow gainer who is fine usually looks like this',
    items: [
      'Staying on their own curve, even if it is a low one.',
      'Growing in length and head circumference at the normal rate.',
      'Feeding 8 to 12 times a day and alert between feeds.',
      'Wet and dirty diapers in the normal range for their age.',
    ],
  },
  notFine: {
    label: 'Get seen this week, or sooner',
    items: [
      'Not back to birth weight by about 2 weeks.',
      'Falling across their growth curve rather than tracking along a low one.',
      'Length or head circumference dropping off too, not just weight.',
      'Fewer wet diapers than expected, or a baby who is hard to wake.',
      'Feeds that are very long and still leave them hungry within minutes.',
    ],
  },
};

export const WEIGHED_FEED = {
  title: 'The weighed feed, which is the test that actually answers it',
  body: [
    'A weighed feed means weighing your baby on a sensitive scale immediately before a feed and again immediately after, in the same clothes and the same diaper, without changing anything in between. The difference is how much milk they took, and a gram is a milliliter.',
    'This is the only way to know what is transferring. Everybody else is guessing, including the people telling you your supply is fine and the people telling you it is not.',
    'Ask an IBCLC for one rather than the pediatric office, since it needs the right scale and somebody watching the whole feed. Most lactation consultants do this as a matter of course and many parents are never told it exists.',
  ],
  note:
    'One weighed feed is a snapshot and babies vary across the day. It is still an enormous amount more '
    + 'information than anyone had before it.',
};

/* ------------------------------------------------------------------
 * PACED BOTTLE FEEDING
 * ------------------------------------------------------------------ */

export const PACED_TITLE = 'Paced bottle feeding';

export const PACED_HEADLINE =
  'A bottle tipped up pours. A baby cannot stop it and will keep swallowing because the alternative is '
  + 'choking. Pacing hands the control back.';

export const PACED_WHY = [
  'Milk out of a breast takes work and comes in waves. Milk out of an upright bottle arrives continuously whether the baby wants it or not, which is why a bottle fed baby often finishes far faster and then seems uncomfortable.',
  'This matters most if you are also breastfeeding, because a baby who learns that milk arrives with no effort can get frustrated at the breast, where it does not. It also matters for any bottle fed baby, because it is how you avoid routinely overfeeding somebody who has no way to say stop.',
];

export const PACED_HOW = {
  title: 'How to do it',
  steps: [
    'Sit them upright rather than cradled back, supported, closer to sitting than lying.',
    'Touch the nipple to their lips and wait for the wide open mouth rather than putting it in.',
    'Hold the bottle level, close to horizontal, so the milk only just fills the nipple. Not tipped up.',
    'Let them take 20 or 30 swallows, then tip the bottle down so the nipple empties while it stays in their mouth. They get a breather without losing their place.',
    'Switch sides partway through, the way they would at the breast.',
    'Stop when they show you they are done. Turning away, slowing right down, loosening off. A few ounces left is fine and does not need finishing.',
  ],
  target:
    'A bottle should take roughly as long as a feed at the breast, somewhere around 15 to 20 '
    + 'minutes. 5 minutes and empty means the flow is too fast for them.',
};

/* ------------------------------------------------------------------
 * FLOW RATE, WHICH IS THE WHOLE GAME
 * ------------------------------------------------------------------ */

export const FLOW_TITLE = 'Flow rate, and why the box is lying to you';

export const FLOW_HEADLINE =
  'Slow flow is a marketing word, not a measurement. There is no standard behind it and no 2 brands '
  + 'mean the same thing by it.';

export const FLOW_FACTS = [
  'When researchers actually measured the milk coming out of 25 different bottle nipples, the rates ran from under one milliliter a minute to nearly 38. That is not a small spread, it is one nipple delivering almost 40 times what another does.',
  'Nipples all labeled slow flow differed significantly from each other in those measurements. One brand’s slow is another brand’s medium.',
  'The label on the package was found not to be a reliable guide to the actual flow. Nobody regulates the word.',
  'Which means the level number printed on your nipple tells you how it compares to others from that same brand, and nothing whatsoever about how it compares to anything else.',
];

export const FLOW_WHAT_TO_DO = {
  title: 'So what do you actually do',
  items: [
    'Judge the flow by watching your baby, not by reading the box. That is the only measurement available to you and it is a good one.',
    'Too fast looks like gulping, spluttering, milk running out of the corners, eyes wide, pulling off, or finishing a bottle in 5 minutes.',
    'Too slow looks like a baby working hard, tiring out, falling asleep partway through, or taking 40 minutes and still being hungry.',
    'Stay on the slowest nipple they will take. There is no prize for moving up and most babies do not need to. Plenty do the whole first year on the slowest one.',
    'Do not move up a size because the box says to at that age. Sizes on the box are tied to age for marketing reasons, not for feeding reasons.',
    'If you are also breastfeeding, slower is better, because it keeps the effort at the bottle closer to the effort at the breast.',
  ],
};

/* ------------------------------------------------------------------
 * BOTTLES
 * ------------------------------------------------------------------ */

export const BOTTLE_TITLE = 'Bottles, honestly';

export const BOTTLE_MARKETING = {
  title: 'What the claims on the box are worth',
  body: [
    'Almost every bottle sold says it is the one that is most like the breast. They cannot all be. What that phrase almost always means is that the nipple is shaped like a breast, wide and round with a little stalk on top, and the uncomfortable thing lactation consultants point out is that a nipple shaped like a breast often works least like breastfeeding. A baby latches onto the stalk, which is the shallow latch you were trying to avoid.',
    'Nipple confusion, the thing every one of these products promises to prevent, is much less settled than the packaging suggests. Plenty of babies move between breast and bottle with no difficulty at all. Where it does happen it is far more about flow and pacing than about the silhouette of the silicone.',
    'Where a brand does have research behind its claims, it has very often paid for that research itself. That is normal in this industry and it does not make the findings wrong. It is a reason to weigh them lightly rather than treat them as settled.',
  ],
};

export const BOTTLE_WHAT_MATTERS = {
  title: 'What actually matters, in order',
  items: [
    'The flow. First, second and third. Slow enough that the feed takes about as long as a feed at the breast.',
    'A gradual taper. A nipple that widens steadily from tip to base encourages a wide open mouth. A narrow tube, or a bulb on a stalk, encourages a shallow one.',
    'A short tip, so it does not trigger gagging while still letting them get a wide latch.',
    'A base narrow enough that their lips can actually seal on it. Very wide bases defeat small mouths.',
    'That your baby will take it. This one quietly outranks everything above it.',
    'That you can clean it. A bottle with 7 parts gets used less than one with three, at 3am, by everybody.',
  ],
};

export const BOTTLE_WHAT_PEOPLE_USE = {
  title: 'What actually gets handed to people',
  intro:
    'Named because you asked to be told, with what each one is actually good at. None of this is '
    + 'sponsored and none of it is a medical recommendation. If your baby is already feeding well on '
    + 'something that is not on this list, that bottle is the right bottle.',
  bottles: [
    {
      name: 'Evenflo Balance and Balance Plus',
      why: 'The one lactation consultants hand out most often right now, and the one most often recommended for babies who also breastfeed. Wide base tapering gradually to a short tip, which is the shape described above, and a genuinely slow slowest nipple. Cheap, and only 3 parts.',
      honest: 'The research behind its breastfeeding claims is largely funded by the manufacturer. The shape is sound on its own merits, and that funding is worth knowing about rather than ignoring.',
    },
    {
      name: 'Dr Brown’s, narrow or wide',
      why: 'The one most often reached for when flow is the problem, because the preemie and level one nipples are among the genuinely slow ones. The vent system helps some reflux and wind babies.',
      honest: 'More parts to wash than anything else here, and the vent is the reason. Plenty of people use it without the vent insert once the early weeks are over.',
    },
    {
      name: 'Pigeon SofTouch',
      why: 'Popular with feeding therapists for babies who tire quickly or have a weak suck, because the nipple is soft and the flow at the slowest level is gentle.',
      honest: 'Harder to find in ordinary shops in the US, and the sizing runs differently from everything else.',
    },
    {
      name: 'Lansinoh',
      why: 'A good cheap option with a slow slowest nipple and a reasonable taper. Often the one that works when a baby has refused something more expensive.',
      honest: 'Nothing special about it, which is not a criticism. Most babies do not need special.',
    },
    {
      name: 'Comotomo',
      why: 'Squishy silicone body, very easy to clean, 2 parts. Babies who refuse hard plastic sometimes take this.',
      honest: 'The flow jumps noticeably between levels and the wide base does not suit every mouth. Great when it works, and it does not always.',
    },
  ],
  theRealAdvice:
    'Buy one of 2 different bottles rather than a set of six of anything. Babies have opinions and '
    + 'they are not predictable, and the expensive mistake here is committing to a whole set before '
    + 'your baby has voted.',
};

/* ------------------------------------------------------------------
 * PACIFIERS
 * ------------------------------------------------------------------ */

export const PACI_TITLE = 'Pacifiers, and the shape argument';

export const PACI_EVIDENCE = {
  title: 'What is actually established',
  items: [
    'The AAP recommends offering a pacifier at sleep times, because it lowers the risk of SIDS. That is the strongest finding here by a distance and it is a reason to use one rather than a reason to worry about one.',
    'A Cochrane review found that pacifier use did not affect whether or how long healthy full term babies breastfed, up to 4 months. That directly contradicts the advice most parents are given about waiting until feeding is established, and it is worth knowing before somebody makes you feel guilty about it.',
    'Past about 12 months, continued use is associated with more ear infections.',
    'Past about 18 months it starts to influence how the mouth and jaw develop.',
    'By three, the guidance is to have stopped, to avoid a lasting bite problem.',
    'How long the habit goes on matters considerably more than how much they use it in a day. A baby who has it constantly and gives it up at two is in better shape than one who has it occasionally until four.',
    'And the reassuring part: an open bite caused by a pacifier usually corrects itself once the pacifier goes, as long as that happens before about three.',
  ],
};

export const PACI_SHAPE = {
  title: 'The orthodontic shape claim, weighed properly',
  body: [
    'Orthodontic pacifiers, the flatter symmetrical ones, are sold on the promise that they protect the palate and the bite in a way that round ones do not. The honest answer is that the evidence points gently that way and does not go as far as the packaging does.',
    'One systematic review did find that orthodontic shapes produced less open bite than conventional ones. In the same breath, the American Academy of Pediatric Dentistry states that the evidence is not sufficient to recommend orthodontic pacifiers for preventing bite problems.',
    'Both of those are true at once. It is a mild lean, not a settled finding, and it is much smaller than the effect of how long the habit lasts.',
    'Getting the size right for their age, and having it stop by three, matter more than which silhouette you bought.',
  ],
  soWhat:
    'Which means the right pacifier is the one your baby will actually take. If that is an orthodontic '
    + 'one, fine, you have a small possible edge. If your baby spits out every orthodontic one and '
    + 'only settles for a round hospital one, that is also fine and you have lost very little.',
};

export const PACI_WHAT_PEOPLE_USE = {
  title: 'The ones you will actually be handed',
  paci: [
    {
      name: 'MAM',
      why: 'The orthodontic one most people mean when they say orthodontic. Flatter symmetrical nipple so it sits right whichever way up it lands, soft textured silicone, and a lot of babies who reject everything else take one of these.',
      honest: 'Its palate and bite claims rest on the mild lean described above rather than on anything settled. The symmetry is a real practical advantage at 3am in the dark.',
    },
    {
      name: 'Philips Avent Soothie',
      why: 'The green one from the hospital. One piece of medical grade silicone, nothing to come apart, and it is what most American babies meet first, which is often why they take it.',
      honest: 'Round rather than orthodontic. Given the size of the shape effect, that is not the problem it is sometimes made out to be.',
    },
    {
      name: 'BIBS',
      why: 'Round cherry or natural shape, latex or silicone. The one people buy because it photographs well, and a lot of babies do like the softer latex.',
      honest: 'Latex wears out faster than silicone and has to be replaced more often. Not for a baby with a latex allergy in the family.',
    },
    {
      name: 'Ninni',
      why: 'Designed for babies with feeding and suck problems, and used by some feeding therapists for that reason rather than as an everyday soother.',
      honest: 'Expensive and specialist. If nobody has told you your baby has a suck issue, you do not need this one.',
    },
  ],
  sizing:
    'Whichever one you land on, move up the sizes as they grow rather than staying on the newborn one, '
    + 'and replace them when the silicone goes cloudy, sticky or starts to swell.',
};

export const FEEDING_DEEP_SOURCES = [
  { org: 'La Leche League Canada', label: 'Triple feeding, what next, including how to reduce supplements', url: 'https://www.lllc.ca/triple-feeding' },
  { org: 'Stanford Medicine Children’s Health', label: 'Slow or poor infant weight gain', url: 'https://www.stanfordchildrens.org/en/topic/default?id=slow-or-poor-infant-weight-gain-90-P02880' },
  { org: 'American Journal of Speech Language Pathology', label: 'Milk flow rates from bottle nipples, the measured study', url: 'https://pubs.asha.org/doi/10.1044/2015_AJSLP-15-0011' },
  { org: 'Advances in Neonatal Care', label: 'Know the flow, milk flow rates in hospital and after discharge', url: 'https://pubmed.ncbi.nlm.nih.gov/30028734/' },
  { org: 'AAPD', label: 'Policy on pacifiers, revised 2024', url: 'https://www.aapd.org/globalassets/media/policies_guidelines/p_on-pacifiers.pdf' },
  { org: 'AAP', label: 'Breastfeeding and the use of human milk (2022 policy statement)', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Policy-Statement-Breastfeeding-and-the-Use-of' },
];

export const FEEDING_DEEP_DISCLOSURE =
  'Nothing on this screen is sponsored and no brand has paid to be here. Products are named because '
  + 'being told what to buy is genuinely useful and refusing to name anything is a way of being no '
  + 'help while looking careful. Where a claim rests on research a manufacturer paid for, it says so.';

export function showsFeedingDeep(months, stages) {
  return showsMilkContent(months, stages);
}

export default TRIPLE_HEADLINE;

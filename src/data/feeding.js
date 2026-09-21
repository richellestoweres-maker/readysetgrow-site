/**
 * Ready Set Grow: Feeding, from first milk to the family table
 * ------------------------------------------------------------------
 * THE RULE THIS FILE IS WRITTEN UNDER
 * We never say breast is best. We say fed is best, and we mean it in
 * the content and not only in a disclaimer at the bottom.
 *
 * That is not a softening of the evidence. Human milk has real
 * documented benefits and they are listed here plainly. It is a
 * recognition that the parent reading this may have had a baby with
 * oral ties who could not transfer milk, may have had supply that did
 * not come in, may be on medication, may have gone back to work at six
 * weeks, may have adopted, or may simply have decided. In every one of
 * those cases the formula was the right call, and a baby who is growing
 * is the outcome we were all after.
 *
 * So: benefits stated honestly, alternatives stated without apology,
 * and no sentence anywhere that a formula feeding parent would have to
 * brace before reading.
 *
 * SOURCES
 * AAP policy on breastfeeding and human milk (2022), AAP guidance on
 * starting solids and on cow's milk, and the CDC infant and toddler
 * nutrition pages. Listed in FEEDING_SOURCES with links.
 */

export const FEEDING_STANCE = {
  headline: 'Fed is best. That is the whole position, and it does not have an asterisk.',
  body: [
    'Human milk has real benefits and this app will tell you what they are, because you deserve accurate information. What it will never do is imply that a parent who used formula gave their baby something second rate.',
    'There are 100 reasons a baby ends up on formula, and almost none of them are a choice anybody made lightly. Oral ties that stopped a baby transferring milk. Supply that never came in. A NICU stay. Medication that was not compatible. A return to work at 6 weeks with no pump breaks. Adoption. Surrogacy. Or a parent who looked at what breastfeeding was costing their mental health and decided their baby needed a well parent more.',
    'In every one of those situations, formula was not a compromise. It was the thing that let the baby grow.',
    'A baby who is fed, gaining, and loved is the goal. The route there is yours.',
  ],
  forTheParentWhoIsStruggling:
    'If you are reading this at 3am deciding whether to keep going, here is the honest version. ' +
    'The difference between a breastfed baby and a formula fed baby in a developed country with clean ' +
    'water is real but small. The difference between a parent who is coping and a parent who is not is ' +
    'enormous. Weigh both.',
};

export const BREASTMILK_BENEFITS = {
  intro:
    'Stated plainly, because you should have the real information whatever you end up doing with it.',
  forBaby: [
    'Antibodies that change composition as your baby is exposed to things, which formula cannot do.',
    'Lower rates of ear infections, respiratory infections, and stomach bugs in the first year.',
    'Lower risk of necrotizing enterocolitis in premature babies, which is the single largest benefit in the whole list and the reason donor milk exists for NICU babies.',
    'Lower rates of SIDS, with the association strongest at 6 months or more of any breastfeeding.',
    'Easier digestion for most babies, so less constipation.',
  ],
  forParent: [
    'Faster uterine contraction in the early days, which means less bleeding.',
    'Lower lifetime risk of breast and ovarian cancer, and of type 2 diabetes.',
    'Free, and always the right temperature, which matters at 3am.',
  ],
  honestCaveats: [
    'Most of the studies are observational, which means they compare families who breastfed to families who did not, and those families differ in income, education, and support in ways that are hard to fully adjust for. The effects are real and they are smaller than the headlines.',
    'The benefits scale with how much and how long, so any amount counts. 2 weeks counts. Combination feeding counts.',
    'None of these benefits are worth a parent in crisis. That is not a nice thing we are saying to be kind, it is the actual risk calculation.',
  ],
};

export const FORMULA_FACTS = {
  intro: 'Formula is regulated food, not a fallback, and it is worth knowing how it actually works.',
  points: [
    'All infant formula sold in the US has to meet the same FDA nutrient requirements. The name brand and the store brand are both complete nutrition.',
    'Standard cow milk based formula is the right starting point for most babies. Specialty formulas exist for specific medical reasons and are worth using when a doctor says so, not on a hunch.',
    'Gassiness, spitting up, and fussiness are normal newborn behavior far more often than they are a formula problem. Switching formulas repeatedly usually changes nothing and costs a lot.',
    'Combination feeding is a real, valid, common way to feed a baby. Breastmilk when you can, formula when you cannot, and nobody has to pick a side.',
    'Never water down formula to stretch a can. If cost is the problem, WIC and formula banks exist and this is exactly what they are for.',
    'Follow the mixing instructions exactly. The scoop that came with the can is the right scoop for that can.',
  ],
  ifYouNeedHelpAffordingIt:
    'WIC covers formula and serves families well above the poverty line in most states. Hospital social workers, ' +
    'pediatric offices, and local diaper banks often keep formula too. Asking is not a failure, it is the system working.',
};

/* ------------------------------------------------------------------
 * STARTING SOLIDS
 * ------------------------------------------------------------------ */

export const SOLIDS_TIMING = {
  headline: 'Around 6 months, and the readiness signs matter more than the date.',
  body: [
    'The AAP recommends human milk or formula alone for about the first 6 months, then starting solids while milk continues.',
    'Some babies are genuinely ready closer to 5 months and some are not ready until seven, and both are normal. What you are watching for is the body, not the calendar.',
    'Before 4 months, no. The gut and the swallowing coordination are not there yet, and starting early is linked to more choking and does not help with sleep, despite what you will be told.',
    'Waiting much past 6 months has its own cost, because iron stores from birth start running out around then and the window for accepting new textures is easier earlier than later.',
  ],
  theSleepMyth:
    'Rice cereal in a bottle does not make babies sleep through the night. It has been studied and it does not, ' +
    'and it is a choking risk. If someone who loves you suggests it, they are passing on what they were told.',
};

export const SOLIDS_READINESS = {
  intro: 'All of these, not some of them. This is the list worth being strict about, because it is a choking question.',
  signs: [
    {
      sign: 'Sits upright with good head and neck control',
      why: 'They need to hold their head steady and stay upright in a high chair with little support. A slumped baby cannot protect their airway.',
      notYet: 'If they still need to be propped with rolled towels, give it a few more weeks.',
    },
    {
      sign: 'The tongue thrust reflex has faded',
      why: 'Newborns automatically push things out of their mouth with their tongue. When food stops being pushed straight back out, that reflex is going.',
      notYet: 'If every spoonful comes back out on the tongue, that is reflex and not dislike.',
    },
    {
      sign: 'Opens their mouth when food comes toward them',
      why: 'Interest with intent. They lean in, they open up, they watch your fork.',
      notYet: 'Turning the head away repeatedly is a no, and a no is allowed.',
    },
    {
      sign: 'Can move food from the front of the mouth to the back and swallow it',
      why: 'This is the part that actually keeps them safe, and it is a learned skill that takes a few weeks of practice.',
      notYet: 'Expect a lot of it to come back out at first. That is practice, not failure.',
    },
    {
      sign: 'Roughly doubled birth weight, and usually over about 13 pounds',
      why: 'A rough size marker rather than a rule. It tracks with the other signs more often than not.',
      notYet: 'Small babies and early babies get judged on the other 4 signs, and on corrected age if they were premature.',
    },
  ],
  correctedAgeNote:
    'If your baby was born early, use corrected age for this. A baby born at 32 weeks is usually ready for solids ' +
    'around 6 months corrected, not 6 months from their birthday.',
};

export const FEEDING_APPROACHES = {
  intro:
    'There are 2 well known ways to start, and a third that is what most families actually do. ' +
    'None of them is safer than the others when they are done properly, and none of them determines ' +
    'how your child eats at five. Pick the one that fits your kitchen and your nerve.',
  options: [
    {
      id: 'purees',
      label: 'Spoon feeding and purees',
      how: [
        'Start with smooth single ingredient purees on a soft tipped spoon.',
        'One new food every 3 to 5 days at first, so a reaction is traceable.',
        'Thicken the texture over a few weeks, then move to lumps, then to soft finger foods by around 8 or 9 months.',
      ],
      goodFor: [
        'Parents who want to see exactly how much went in.',
        'Babies with medical feeding issues, reflux, or low weight gain where intake is being tracked.',
        'Families who find the mess of the other approach genuinely unmanageable right now.',
      ],
      watchFor: [
        'Do not get stuck on smooth. Babies who never move past purees have a harder time with texture later, so keep advancing.',
        'Do not chase the last spoonful. Turning away, clamping, and head shaking are all a full signal.',
      ],
    },
    {
      id: 'babyLed',
      label: 'Baby led weaning',
      how: [
        'Skip purees and offer soft finger foods the baby picks up and feeds themselves from the start.',
        'Pieces about the size and shape of your finger at first, so they can hold it with some sticking out of the fist.',
        'Soft enough to squash between your thumb and forefinger. If it will not squash, it is not ready.',
        'They sit at the table with you and eat a safe version of what you are eating.',
      ],
      goodFor: [
        'Families who want one meal cooked rather than two.',
        'Babies who refuse the spoon and want to do it themselves.',
        'Building chewing and hand skills early, and keeping the baby in charge of how much.',
      ],
      watchFor: [
        'Gagging is loud and normal and is not choking. Gagging is the reflex working. Learn the difference before you start, because you will see gagging.',
        'Iron is the real thing to watch. Offer iron rich foods from the start, such as meat, beans, lentils, and iron fortified cereal.',
        'Never leave them alone with food, never feed in a car seat or on the move, and always fully upright.',
      ],
    },
    {
      id: 'combination',
      label: 'A bit of both, which is what most people do',
      how: [
        'Purees for the things that are easier that way, such as yogurt and oatmeal, and finger foods alongside.',
        'Preloaded spoons, where you load it and hand it over, sit neatly in the middle.',
        'Follow the baby. Some days they want to be fed, some days they want to do it.',
      ],
      goodFor: [
        'Almost everyone.',
        'Daycare, where the policy may require purees regardless of what you do at home.',
        'Parents who like the idea of baby led weaning and want a lower stakes start.',
      ],
      watchFor: [
        'None specific. This is a perfectly good plan and it is not a failure to commit to a method.',
      ],
    },
  ],
  gaggingVsChoking: {
    gagging: [
      'Noisy. Coughing, spluttering, retching, going red.',
      'Eyes watering, tongue forward, a lot of drama.',
      'They are moving air, which is why you can hear it.',
      'What to do: stay calm, stay quiet, let them work it out. Reacting loudly teaches fear of food.',
    ],
    choking: [
      'Silent, or a weak high pitched sound.',
      'Cannot cry, cannot cough, cannot breathe.',
      'Panicked face, possibly going blue around the lips.',
      'What to do: act immediately. Back blows and chest thrusts for an infant, back blows and abdominal thrusts for a child over one. See the CPR and choking section.',
    ],
    note:
      'Take an infant CPR and choking class before you start solids if you possibly can. An hour, once, ' +
      'and you will never feel the same kind of fear at the table again.',
  },
};

export const FIRST_FOODS = {
  intro: 'Iron first, allergens early, and no honey. Those are the three that actually matter.',
  ironRich: [
    'Soft cooked meat, shredded or in finger sized strips.',
    'Beans and lentils, well cooked and squashed.',
    'Iron fortified infant cereal, which is worth using even in a baby led weaning household.',
    'Egg yolk, tofu, and dark leafy greens cooked soft.',
    'Serve iron foods with something containing vitamin C, such as fruit or peppers, because it helps absorption.',
  ],
  allergens: {
    headline: 'Introduce the common allergens early and keep them in the diet.',
    body: [
      'The old advice to delay peanut, egg, and dairy was wrong and has been reversed. Delaying increases allergy risk rather than lowering it.',
      'Start the common allergens between about 4 and 6 months once solids are underway, at home, earlier in the day, one at a time.',
      'The 9 common ones are milk, egg, peanut, tree nuts, soy, wheat, fish, shellfish, and sesame.',
      'Keeping them in the diet regularly is the part people forget. One exposure does not build tolerance, regular exposure does.',
      'Never whole nuts or spoonfuls of thick nut butter, which are choking hazards. Thin the butter into yogurt or spread it thinly.',
    ],
    highRisk:
      'If your baby has severe eczema or a known egg allergy, talk to your pediatrician before introducing peanut. ' +
      'That specific group may need testing or a supervised introduction first.',
  },
  avoid: [
    { food: 'Honey', why: 'Botulism risk under 12 months, including in baked goods. This one is absolute.' },
    { food: 'Cow milk as a drink', why: 'Not before 12 months. Yogurt and cheese as food are fine from 6 months.' },
    { food: 'Added salt and sugar', why: 'Their kidneys cannot handle much salt, and sugar sets a preference you will be arguing with for years.' },
    { food: 'Choking shaped foods', why: 'Whole grapes, cherry tomatoes, hot dog coins, whole nuts, popcorn, hard raw vegetables, chunks of meat or cheese, sticky spoonfuls of nut butter, hard candy.' },
    { food: 'Juice under 12 months', why: 'No nutritional need, and it displaces milk. After one, 4 ounces a day at most.' },
    { food: 'Unpasteurized anything', why: 'Milk, cheese, and juice. Their immune systems are not ready.' },
  ],
  howToCutIt: [
    'Grapes, cherry tomatoes, and olives: quartered lengthwise, always. Never in coins.',
    'Hot dogs and sausages: quartered lengthwise, then chopped. Never in rounds.',
    'Raw hard vegetables such as carrot and apple: cooked soft, or grated, until they have molars and know how to use them.',
    'Meat: shredded, or in a long strip they hold and gnaw rather than a cube they can swallow.',
    'Bread: lightly toasted, because fresh soft bread balls up into a plug.',
  ],
};

/* ------------------------------------------------------------------
 * MILK, AND MOVING ON FROM IT
 * ------------------------------------------------------------------ */

export const MILK_TRANSITION = {
  headline: 'Formula stops at 12 months. Breastmilk can carry on as long as you both want.',
  timeline: [
    {
      when: 'Birth to 6 months',
      what: 'Human milk or formula only. Solids are not needed and water is not needed, even in hot weather.',
    },
    {
      when: '6 to 12 months',
      what: 'Milk is still the main nutrition and solids are practice. Food before one is for learning, not for filling up. Small amounts of water in an open or straw cup with meals are fine from 6 months.',
    },
    {
      when: 'Around 12 months',
      what: 'Solids become the main nutrition and milk becomes a drink alongside it. Formula is no longer needed. Whole cow milk can start now.',
    },
    {
      when: '12 to 24 months',
      what: 'Whole milk, about 16 ounces a day at most, since more than that displaces food and iron. Water the rest of the time.',
    },
    {
      when: 'After two',
      what: 'Lower fat milk is an option to discuss with your pediatrician, based on your child rather than a rule.',
    },
  ],
  aboutToddlerFormula:
    'Toddler formula and follow on formula are marketing rather than nutrition. The AAP is clear that most ' +
    'toddlers do not need them. Whole milk and food do the job for far less money. The exception is a child ' +
    'whose doctor has recommended a specific product for a specific reason.',
  aboutContinuedBreastfeeding: [
    'The AAP supports continued breastfeeding to 2 years or beyond, alongside food, for as long as both of you want to.',
    'The World Health Organization says the same. There is no age at which milk stops being good for them.',
    'It does not cause dependence, it does not stop them eating, and it does not need to be justified to anyone.',
    'And stopping before that is equally fine. Both of you get a vote and yours counts.',
  ],
  weaningGently: [
    'Drop one feed at a time and hold each change for a week or so, which is easier on your body and on theirs.',
    'Drop the least interesting feed first, usually a middle of the day one. The first and last of the day are usually last to go.',
    'Do not offer, do not refuse, is a workable middle gear for a toddler.',
    'Expect some clinginess and some extra night waking during a change. It passes.',
    'Sudden stopping risks clogged ducts and mastitis, so go slowly for your own sake as much as theirs.',
  ],
};

/* ------------------------------------------------------------------
 * THE NEWBORN RHYTHM
 *
 * The first six weeks are the part nobody can picture in advance, and
 * the part where a parent is most likely to be awake at 3am wondering
 * whether any of this is normal. So this section answers the three
 * questions that actually get asked, in the order they get asked:
 * how often, how do I know it is working, and how much goes in a
 * bottle.
 *
 * DIAPERS ARE THE MEASURE, NOT OUNCES.
 * A breastfeeding parent cannot see how much went in. What she can see
 * is what comes out, and the diaper count is the sign clinicians
 * actually use. So the diaper table leads, and the ounces come after.
 *
 * WHAT THIS FILE MUST NEVER DO.
 * It must never tell a parent to limit a feed, stretch a schedule, or
 * hold a hungry baby to the clock. Every number here is a description
 * of what is usual, offered so she can recognize her own baby in it,
 * never a target to hit. A baby who wants more gets more.
 * ------------------------------------------------------------------ */

export const NEWBORN_RHYTHM = {
  headline: 'Every 2 to 3 hours, around the clock, and that is the job for a while.',
  body: [
    'A newborn feeds 8 to 12 times in 24 hours. Breastfed babies often nurse every 2 hours ' +
    'counted from the start of one feed to the start of the next, which is not the same as 2 ' +
    'hours off between them. If a feed takes 40 minutes, the next one can be 80 minutes ' +
    'after you finished. That is normal and it is not a sign anything is wrong.',

    'It does not space out on a schedule you set. It spaces out when their stomach grows, which ' +
    'happens somewhere around 6 to 8 weeks for most babies and later for plenty of others. ' +
    'Until then, feeding on demand is not spoiling them and it is not a habit you will have to ' +
    'break later. It is how supply gets built.',

    'Nights are part of the count. A newborn who sleeps through the night in the first weeks is ' +
    'usually a newborn who needs waking, not a lucky break.',
  ],
  clusterFeeding: {
    title: 'Cluster feeding is not a problem to solve',
    text: 'Some evenings they will feed almost hourly for hours. It usually lands in the late ' +
      'afternoon and evening, it often shows up in the first few days and again around 3 ' +
      'weeks and 6 weeks, and it is how a baby drives supply up. It feels like your milk has ' +
      'run out. It is the opposite. Eat something, get comfortable, and let them.',
  },
  wakingThem: {
    title: 'When to wake a sleepy newborn',
    text: 'Until they are back to birth weight and clearly gaining, do not let a newborn go more ' +
      'than 4 hours without a feed, day or night. Unwrap them, change the diaper, skin to skin, ' +
      'a cool cloth on the feet. After they are gaining well, a longer stretch is theirs to take.',
    sleepyWarning: 'A newborn who is too sleepy to wake for a feed, or who will not stay latched ' +
      'long enough to feed, is worth a phone call rather than another hour of trying.',
  },
};

/* The diaper count, day by day. The first week is the week people panic
   in, so it gets a row per day rather than a range. */
export const DIAPER_EXPECTATIONS = [
  { day: 1, label: 'Day 1', wet: 1, wetLabel: '1 or more', dirty: '1 or 2',
    stool: 'Meconium, black and tarry and hard to wipe off', note: 'Colostrum comes in teaspoons. That is enough.' },
  { day: 2, label: 'Day 2', wet: 2, wetLabel: '2 or more', dirty: '1 or 2',
    stool: 'Still meconium, black to very dark green' },
  { day: 3, label: 'Day 3', wet: 3, wetLabel: '3 or more', dirty: '2 or more',
    stool: 'Turning, greenish brown and looser', note: 'Milk usually comes in somewhere around now, day 2 to day five.' },
  { day: 4, label: 'Day 4', wet: 4, wetLabel: '4 or more', dirty: '2 or more',
    stool: 'Greenish to yellow' },
  { day: 5, label: 'Day 5', wet: 6, wetLabel: '6 or more', dirty: '3 or more',
    stool: 'Yellow, loose, with small seedy curds', note: 'From here on, 6 or more wet diapers a day is the number to hold onto.' },
  { day: 6, label: 'Day 6 onward', wet: 6, wetLabel: '6 or more', dirty: '3 or more',
    stool: 'Yellow and seedy for breastfed babies, tan to brown and firmer on formula' },
];

export const DIAPER_NOTES = {
  wetHowToTell: 'A disposable diaper hides how wet it is. A wet one weighs about like 3 ' +
    'tablespoons of water poured onto a dry one, and if you are unsure, that is genuinely the ' +
    'test people are taught to use. Urine should be pale, close to colorless.',
  bricks: 'Brick red or orange dust in the diaper in the first few days is urate crystals. Common ' +
    'before the milk is fully in, and expected to stop once it is. After day 4 or 5 it is ' +
    'worth mentioning.',
  afterSixWeeks: 'Somewhere after 3 to 6 weeks a breastfed baby may stop pooing daily and ' +
    'go several days between them. If they are comfortable, feeding well, and the diaper when it ' +
    'arrives is soft, that is normal and not constipation. A formula fed baby usually keeps to a ' +
    'more regular pattern.',
  formulaStool: 'Formula stool is tan to brown, firmer, and there is less of it. Different is not worse.',
};

/* Volumes. These sit below the diaper table on purpose. */
export const BOTTLE_AMOUNTS = {
  intro: 'These are the amounts most babies land on, not amounts to get into them. A baby who is ' +
    'still rooting and smacking after the bottle is still hungry. A baby who turns away with milk ' +
    'left is finished, and the bottle is not a plate to be cleared.',

  breastmilk: {
    title: 'Bottles of expressed breastmilk',
    lead: 'Here is the part that surprises almost everybody: it barely goes up.',
    rows: [
      { when: 'Day 1', amount: 'A teaspoon or two', per: 'per feed',
        note: 'Their stomach is about the size of a cherry. Colostrum is measured in milliliters and that is by design.' },
      { when: 'Days 2 to 3', amount: 'About half an ounce to an ounce', per: 'per feed' },
      { when: 'Days 4 to 7', amount: '1 to 2 ounces', per: 'per feed' },
      { when: '2 weeks to 1 month', amount: '2 to 3 ounces', per: 'per feed' },
      { when: '1 to 6 months', amount: 'About 2.5 to 4 ounces', per: 'per feed',
        note: 'Around 25 to 30 ounces across the whole day, and it stays about there.' },
    ],
    theFlatLine: 'A breastfed baby takes roughly the same amount of milk a day at 5 months as ' +
      'at one month. In the study most of these numbers come from, the average was just under 27 ' +
      'ounces a day across babies aged 1 to 6 months, spread over about 11 feeds, and the ' +
      'volume per feed had no relationship to the baby\u2019s age at all. Breastmilk changes ' +
      'composition as they grow, so the same volume keeps doing the job. This is why a bottle fed ' +
      'baby on expressed milk does not need bigger and bigger bottles, and why being handed a ' +
      'formula chart can make a pumping parent think she is falling behind when she is not.',
    range: 'The honest spread in that same study was 16 to 46 ounces a day. If your baby sits at ' +
      'one end of that, they are still inside normal.',
    daycare: 'A rough starting point for a bottle while you are apart: about an ounce for every ' +
      'hour you are away, split across the feeds that fall in that window. Send a little extra ' +
      'and ask them to send back what is left rather than to finish it.',
  },

  formula: {
    title: 'Bottles of formula',
    lead: 'Formula does climb with weight, which is the difference.',
    rule: 'About 2.5 ounces a day for every pound they weigh, spread across the day.',
    ruleExample: 'A 9 pound baby comes out around 22 ounces a day. A 12 pound baby around 30.',
    cap: 'Most babies should not average more than about 32 ounces in 24 hours. If they seem ' +
      'hungry past that, that is a conversation with the pediatrician rather than another bottle.',
    rows: [
      { when: 'First week', amount: '1 to 2 ounces', per: 'per feed, every 2 to 3 hours' },
      { when: 'By the end of the first month', amount: '3 to 4 ounces', per: 'per feed, every 3 to 4 hours' },
      { when: '6 months', amount: '6 to 8 ounces', per: 'per feed, 4 or 5 times a day' },
    ],
    neverDilute: 'Never add extra water to stretch a can. Over diluted formula causes water ' +
      'intoxication: it throws off sodium and can cause seizures, and it has genuinely hurt ' +
      'babies. Mix it exactly as the label says, every time. If formula is hard to afford or hard ' +
      'to find, WIC and your pediatrician have real options and this is exactly what to ask them ' +
      'about.',
    noWater: 'A baby under 6 months needs no water at all, and no juice, unless a doctor has ' +
      'specifically told you otherwise. Milk or formula is the whole diet.',
    noCereal: 'Do not put cereal in a bottle. It does not help them sleep, it is a choking risk, ' +
      'and it replaces nutrition with filler. If someone has told you to do it for reflux, ask ' +
      'your pediatrician first.',
  },

  paced: {
    title: 'Pace the bottle, whatever is in it',
    steps: [
      'Sit them upright rather than lying flat, and keep the bottle close to level so they have to work for it.',
      'Slow flow teat, and leave it there. Moving up a size because a feed takes 20 minutes usually just means they swallow more air.',
      'Let them take breaks. Tip the bottle down, let them breathe, offer it again.',
      'Stop when they stop. Turning away, letting milk pool, hands relaxing open, all of it means done.',
      'Never prop a bottle and walk away, and never put a baby to bed with one. Choking, ear infections and tooth decay all live there.',
    ],
  },
};

export const NEWBORN_WARNING_SIGNS = {
  title: 'Call about feeding if',
  items: [
    'Fewer than 6 wet diapers a day after day five, or urine that is dark or has brick colored dust in it past the first few days',
    'No stool at all in 24 hours in the first week, or stools that are still black past day four',
    'They are still below birth weight at 2 weeks old',
    'Too sleepy to wake for feeds, or feeding for a few minutes and falling straight back to sleep every time',
    'Yellowing of the skin or the whites of the eyes that is spreading or getting deeper',
    'A dry mouth, no tears when they cry, or a soft spot on the head that looks sunken',
    'Feeding is so painful that you are dreading it, or a nipple is cracked or bleeding',
  ],
  urgent: 'Sunken eyes, cool or mottled hands and feet, very hard to rouse, or passing urine only ' +
    'once or twice in a day are signs of real dehydration. That is today, not the next available ' +
    'appointment.',
  reassurance: 'Weight loss in the first days is expected. Up to 8 to 10 percent of birth weight ' +
    'is normal, and most babies are back to birth weight by about 2 weeks. Asking to be weighed ' +
    'is free, and no good pediatric office has ever minded.',
};

export const FEEDING_SOURCES = [
  { org: 'American Academy of Pediatrics', label: 'Breastfeeding and the Use of Human Milk, 2022 policy statement', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Policy-Statement-Breastfeeding-and-the-Use-of' },
  { org: 'HealthyChildren.org (AAP)', label: 'Starting Solid Foods', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx' },
  { org: 'HealthyChildren.org (AAP)', label: 'Why Formula Instead of Cow’s Milk', url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Why-Formula-Instead-of-Cows-Milk.aspx' },
  { org: 'HealthyChildren.org (AAP)', label: 'Most Toddlers Don’t Need Toddler Formula', url: 'https://www.healthychildren.org/English/news/Pages/why-most-toddlers-dont-need-toddler-formula.aspx' },
  { org: 'CDC', label: 'Cow’s Milk and Milk Alternatives', url: 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/cows-milk-and-milk-alternatives.html' },
];

/* The newborn section is the part most likely to be read at 3am and
   repeated to somebody else, so it carries its own sources rather than
   sharing the general feeding list. */
export const NEWBORN_SOURCES = [
  { org: 'HealthyChildren.org (AAP)', label: 'How Often and How Much Should Your Baby Eat?', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/how-often-and-how-much-should-your-baby-eat.aspx' },
  { org: 'HealthyChildren.org (AAP)', label: 'How to Tell if Your Breastfed Baby is Getting Enough Milk', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-to-Tell-if-Baby-is-Getting-Enough-Milk.aspx' },
  { org: 'HealthyChildren.org (AAP)', label: 'Amount and Schedule of Baby Formula Feedings', url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/amount-and-schedule-of-formula-feedings.aspx' },
  { org: 'CDC', label: 'How Much and How Often to Breastfeed', url: 'https://www.cdc.gov/infant-toddler-nutrition/breastfeeding/how-much-and-how-often.html' },
  { org: 'CDC', label: 'How Much and How Often to Feed Infant Formula', url: 'https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/how-much-and-how-often.html' },
  { org: 'American Academy of Pediatrics', label: 'Kent et al, Volume and Frequency of Breastfeedings, Pediatrics 2006', url: 'https://publications.aap.org/pediatrics/article-abstract/117/3/e387/68590/Volume-and-Frequency-of-Breastfeedings-and-Fat' },
  { org: 'HealthyChildren.org (AAP)', label: 'How to Safely Prepare Baby Formula With Water', url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/how-to-safely-prepare-formula-with-water.aspx' },
  { org: 'HealthyChildren.org (AAP)', label: 'Signs of Dehydration in Infants and Children', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/dehydration.aspx' },
];

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

/** Which part of the feeding journey an age in months sits in. */
export function getFeedingStage(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return null;
  if (months < 4) return 'milkOnly';
  if (months < 6) return 'approaching';
  if (months < 9) return 'starting';
  if (months < 12) return 'building';
  if (months < 24) return 'transition';
  return 'table';
}

/** A short line for the feeding card on the home screen. */
export function getFeedingHeadline(months) {
  const stage = getFeedingStage(months);
  /* A parent of a two week old and a parent of a three month old are
     both in milkOnly and are not asking the same question. */
  if (typeof months === 'number' && months < 2) {
    return 'Every 2 to 3 hours, and 6 wet diapers a day once the milk is in.';
  }
  const lines = {
    milkOnly: 'Milk only for now. Solids can wait, and waiting is the safer side to be on.',
    approaching: 'Getting close. Watch for the readiness signs rather than the date on the calendar.',
    starting: 'Starting solids. Food before one is practice, milk is still the nutrition.',
    building: 'Building skills and textures. Keep advancing rather than staying smooth.',
    transition: 'Food is the main event now, and milk becomes a drink alongside it.',
    table: 'Eating with the family. The job now is variety and a calm table, not clean plates.',
  };
  return stage ? lines[stage] : null;
}

/* Which diaper row applies today. Only meaningful in the first week,
   which is exactly when it matters. */
export function getDiaperDay(ageInDays) {
  if (typeof ageInDays !== 'number' || Number.isNaN(ageInDays) || ageInDays < 0) return null;
  const d = Math.floor(ageInDays) + 1;
  if (d >= 6) return DIAPER_EXPECTATIONS[DIAPER_EXPECTATIONS.length - 1];
  return DIAPER_EXPECTATIONS.find((r) => r.day === d) || null;
}

/** How many wet diapers a day to expect at this age, as a number. */
export function expectedWetDiapers(ageInDays) {
  const row = getDiaperDay(ageInDays);
  return row ? row.wet : 6;
}

/** The newborn section is worth showing while it is still the question. */
export function newbornRhythmIsRelevant(months) {
  return typeof months === 'number' && !Number.isNaN(months) && months < 4;
}

/** Roughly how much formula a day, from a weight in pounds. */
export function formulaOuncesForWeight(pounds) {
  const w = Number(pounds);
  if (!isFinite(w) || w <= 0) return null;
  const oz = Math.round(w * 2.5);
  return { ounces: Math.min(oz, 32), capped: oz > 32 };
}

export default FEEDING_STANCE;

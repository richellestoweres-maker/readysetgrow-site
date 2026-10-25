/**
 * Ready Set Grow: eating for where your body is
 * ------------------------------------------------------------------
 * Two requests, one file, because they are the same idea at different
 * points on the same timeline: what is worth eating given where you
 * are in your cycle, and what is worth eating given where you are in
 * a pregnancy.
 *
 * THE RULE THIS FILE INHERITS
 * src/data/meals.js says it plainly and it still holds: this app does
 * not get to have an opinion about somebody's dinner. Nothing here
 * counts a calorie for her, scores a meal, or implies a day of eating
 * was a failure. The second a nutrition feature has a traffic light on
 * it, that is exactly what it has.
 *
 * So everything below is framed as worth knowing rather than as a
 * plan. No meal plans. No daily targets to hit and fail. No shopping
 * list she is behind on.
 *
 * HOW HONEST THIS HAS TO BE, AND WHY
 * Cycle eating content online runs from well established nutrition to
 * things somebody made up on Instagram, presented identically. She
 * asked for seed cycling by name, so seed cycling is here, with what
 * is actually known about it said out loud rather than buried.
 *
 * Every line carries a strength, and the strengths mean what they say:
 *
 *   solid     Established nutrition or a guideline figure. Iron losses
 *             from bleeding. Folate before 12 weeks. Not in doubt.
 *   decent    More than one randomized trial, pointing the same way,
 *             effect sizes worth having.
 *   thin      A trial or two, small, often one population, unreplicated.
 *             Possibly real. Not settled.
 *   popular   Widely recommended, pleasant, essentially untested for
 *             the thing it is sold for. Not harmful, not proven.
 *
 * That last tier exists so this file never has to pretend. Putting
 * seed cycling next to folic acid without a label would be the dishonest
 * version, and a parenting app that blurs those two has taught somebody
 * the wrong thing about how to weigh health advice generally.
 *
 * WHAT IS NOT HERE
 * No supplement brands. No doses to self prescribe beyond the public
 * guideline figures, and those are written as what the guidelines say
 * rather than as instructions. Anything above a food amount says to
 * ask a provider, because iron and vitamin D in particular are things
 * people take too much of after reading a page like this one.
 */

export const NSH_STRENGTH = {
  solid: { label: 'Well established', tone: 'good' },
  decent: { label: 'Decent evidence', tone: 'good' },
  thin: { label: 'Thin evidence', tone: 'warn' },
  popular: { label: 'Popular, barely studied', tone: 'warn' },
};

export const NSH_NOT_A_PLAN =
  'Worth knowing, not a plan to follow.';

/* ==================================================================
   PART ONE: AROUND YOUR CYCLE
   ================================================================== */

export const CEAT_TITLE = 'Eating around your cycle';

export const CEAT_SUB =
  'What the evidence supports, and what is just popular.';

/* The four phases, worked out from her own cycle length and her own
   ovulation estimate rather than from a 28 day textbook, because the
   app already knows both. */
export const CEAT_PHASES = [
  {
    id: 'period',
    label: 'Your period',
    short: 'Bleeding',
    ic: 'drop',
    body:
      'Iron goes out with the blood, and that is the one part of cycle nutrition that is not in '
      + 'dispute. A heavy period is a genuine iron drain, and iron deficiency without anemia is '
      + 'common and underdiagnosed in women who bleed heavily.',
    eat: [
      { t: 'Iron you absorb easily', why: 'Red meat, chicken thigh, sardines. Heme iron, which your '
        + 'body takes up several times better than the plant kind.', s: 'solid' },
      { t: 'Plant iron with something sour or citrus', why: 'Lentils, beans, spinach, fortified '
        + 'cereal, alongside peppers, tomatoes, citrus or strawberries. Vitamin C alongside plant '
        + 'iron increases how much you absorb, substantially.', s: 'solid' },
      { t: 'Tea and coffee away from the iron meal', why: 'The tannins bind iron and cut absorption. '
        + 'An hour either side of the meal is enough, and nobody has to give anything up.', s: 'solid' },
      { t: 'Magnesium rich food', why: 'Pumpkin seeds, dark chocolate, beans, leafy greens. Magnesium '
        + 'has only been tested for cramps in combination with calcium, so the food is sensible and '
        + 'the supplement claim is ahead of the evidence.', s: 'thin' },
    ],
    ask: 'If your periods soak through protection, last more than 7 days, or you are exhausted in a '
      + 'way that food is not touching, ask for a ferritin test rather than guessing. Iron is a '
      + 'thing people take far too much of after reading an article.',
  },
  {
    id: 'follicular',
    label: 'The week or two after',
    short: 'Follicular',
    ic: 'leaf',
    body:
      'Estrogen is climbing and most people feel steadiest here. Nothing dramatic is needed. This '
      + 'is the stretch where rebuilding iron stores after bleeding actually matters more than '
      + 'anything fashionable.',
    eat: [
      { t: 'Keep the iron going a few more days', why: 'Stores refill slowly. The week after is doing '
        + 'more of that work than the week of.', s: 'solid' },
      { t: 'Protein at breakfast', why: 'Not cycle specific, just the single change that most often '
        + 'makes a day feel less erratic. Eggs, yogurt, leftovers, whatever you will actually eat.',
        s: 'decent' },
      { t: 'Flax and pumpkin seeds, if you are doing seed cycling', why: 'This is the first half of '
        + 'the protocol. See the seed cycling card below for what is and is not known about it.',
        s: 'popular' },
    ],
  },
  {
    id: 'ovulation',
    label: 'Around ovulation',
    short: 'Ovulation',
    ic: 'sun',
    body:
      'A few days in the middle. If you are trying to conceive this is the window that matters, and '
      + 'the nutrition that matters in it is the nutrition that matters before conception generally, '
      + 'which is folate.',
    eat: [
      { t: 'Folate, and folic acid if there is any chance of pregnancy', why: 'Guidelines put folic '
        + 'acid at 400 to 800 micrograms a day for anyone who could become pregnant, started at '
        + 'least a month before. The neural tube closes within about 28 days of conception, which is '
        + 'before most people know. Leafy greens, beans, citrus, fortified grains.', s: 'solid' },
      { t: 'Iodine, if you might conceive', why: 'Many bodies recommend 150 micrograms a day started '
        + 'before conception. Dairy, eggs, fish, iodised salt. First trimester iodine status has '
        + 'been linked to child verbal IQ.', s: 'solid' },
      { t: 'Water, honestly', why: 'Cervical fluid changes here and people notice dehydration in it. '
        + 'Not a fertility intervention, just the dullest useful thing on the page.', s: 'thin' },
    ],
  },
  {
    id: 'luteal',
    label: 'The week before your period',
    short: 'Luteal',
    ic: 'moon',
    body:
      'Progesterone is up, appetite often is too, and this is where premenstrual symptoms live. It '
      + 'is also the only phase where supplements have been properly trialled, so it is the one with '
      + 'real answers rather than vibes.',
    eat: [
      { t: 'Calcium, around 1,000 to 1,200 mg a day', why: 'This has the best trial evidence of '
        + 'anything in this part of the cycle. Multiple randomized trials and a meta analysis found '
        + 'calcium reduced premenstrual symptoms. Dairy, fortified plant milks, tinned fish with the '
        + 'bones, tofu set with calcium.', s: 'decent' },
      { t: 'Carbohydrate, without apology', why: 'Appetite genuinely rises in the luteal phase and '
        + 'resting energy use goes up slightly. Fighting it tends to end in a worse week. This is '
        + 'the line this app will not hedge: eat the extra food.', s: 'decent' },
      { t: 'Vitamin E, if cramps are the problem', why: 'Trials at roughly 100 to 400 IU a day found '
        + 'a small to moderate reduction in period pain after about 2 months. Nuts, seeds, '
        + 'sunflower oil, avocado. Worth asking a provider before taking it as a pill.', s: 'decent' },
      { t: 'Oily fish, or fish oil', why: 'Fish oil at about 500 mg a day reduced period pain versus '
        + 'placebo in trials, though not pooled into a single estimate. Salmon, sardines, mackerel.',
        s: 'thin' },
      { t: 'Zinc', why: 'Trials found pain relief in later months rather than the first, which '
        + 'suggests it needs weeks rather than days. Oysters, beef, pumpkin seeds, chickpeas.',
        s: 'thin' },
      { t: 'Sesame and sunflower seeds, if you are doing seed cycling', why: 'The second half of the '
        + 'protocol. Both happen to be good sources of vitamin E and zinc, which may be most of what '
        + 'is going on.', s: 'popular' },
    ],
    ask: 'Vitamin D showed the largest effect on period pain in the meta analysis, but off the back '
      + 'of only 2 trials using a single enormous dose before menstruation. That is a conversation '
      + 'with a provider, not something to buy.',
  },
];

/* ------------------------------------------------------------------
   SEED CYCLING, SAID STRAIGHT

   She asked for it by name, so it gets a proper answer rather than
   either a breathless yes or a dismissive no.
   ------------------------------------------------------------------ */
export const CEAT_SEEDS = {
  title: 'Seed cycling, and what is actually known',
  protocol: [
    { phase: 'Day 1 until ovulation', seeds: 'Flaxseed and pumpkin seeds',
      amount: '1 to 2 tablespoons of each, ground' },
    { phase: 'Ovulation until your period', seeds: 'Sesame and sunflower seeds',
      amount: '1 to 2 tablespoons of each, ground' },
  ],
  claim:
    'The claim is that the seeds support estrogen in the first half of the cycle and progesterone in '
    + 'the second, through their lignans and their fats and their zinc.',
  evidence:
    'What exists is one randomized trial from 2023, in women with PCOS, over 12 weeks, which found '
    + 'improvements in FSH, LH and progesterone against controls. That is genuinely the first '
    + 'published clinical evidence for the protocol, it has not been replicated, and it was in a '
    + 'specific population rather than in people with ordinary cycles.',
  verdict:
    'So: not nonsense, not established. The honest version is that these are four nutritious seeds '
    + 'and eating them daily is a good idea whatever the calendar says. Whether the timing adds '
    + 'anything on top is unproven.',
  harm:
    'There is no real downside. Ground seeds, a couple of tablespoons, fibre and good fats. If '
    + 'following the calendar is the thing that gets you eating them, the calendar has earned its '
    + 'place.',
  grind:
    'Grind the flax. Whole flaxseed largely passes through undigested, which is the one practical '
    + 'detail most posts leave out.',
};

export const CEAT_IRREGULAR =
  'Your cycles move about, so these phases are estimates.';

/* ==================================================================
   PART TWO: THROUGH A PREGNANCY

   By stage, because what matters genuinely moves. Folate is urgent
   early and almost irrelevant by the third trimester. Iron is the
   reverse. Saying all of it at week 6 is how none of it lands.
   ================================================================== */

export const PEAT_TITLE = 'Eating while pregnant';

export const PEAT_SUB =
  'What matters most at the week you are in.';

export const PEAT_STAGES = [
  {
    id: 'early',
    from: 0, to: 13,
    label: 'The first trimester',
    ic: 'leaf',
    head: 'Almost nothing extra, and one thing that is urgent',
    body:
      'Energy needs barely move in the first trimester, somewhere around 70 to 85 extra calories a '
      + 'day, which is a slice of toast. Eating well matters here. Eating more does not. And if you '
      + 'are being sick, eating anything at all is the whole job, which is a real answer rather than '
      + 'a consolation.',
    keys: [
      { t: 'Folic acid, 400 to 800 mcg a day', why: 'The urgent one. The neural tube closes within '
        + 'about 28 days of conception. Guidelines say start a month before conception and continue '
        + 'through about week 12. Total folate target in pregnancy is 600 mcg DFE a day, and about '
        + '36 percent of pregnant women in the US fall short on diet alone.', s: 'solid' },
      { t: 'Iodine, 220 mcg a day', why: 'About 10 percent fall short, and median iodine status in '
        + 'pregnant women sits below the sufficiency threshold. Dairy, eggs, fish, iodised salt.',
        s: 'solid' },
      { t: 'Whatever stays down', why: 'Cold food smells less. Dry carbohydrate before standing up. '
        + 'Small and often beats proper meals. A week of crackers and apples is not a nutritional '
        + 'emergency and the prenatal vitamin is covering more than you think.', s: 'decent' },
      { t: 'The prenatal, at a time of day you can keep it', why: 'At night with food, if mornings '
        + 'are the problem. A vitamin you have thrown up is not a vitamin you have taken.', s: 'decent' },
    ],
  },
  {
    id: 'mid',
    from: 14, to: 27,
    label: 'The second trimester',
    ic: 'sun',
    head: 'The stretch where eating is easiest',
    body:
      'Nausea usually eases and the bump is still manageable. Energy needs rise by roughly 260 to '
      + '340 calories a day, which is a sandwich, not a second dinner. Protein needs go up by about '
      + '9 grams a day over your baseline.',
    keys: [
      { t: 'Calcium, 1,000 mg a day', why: 'About 21 percent of pregnant women fall short. It is '
        + 'also the window where calcium supplementation is started for preeclampsia prevention in '
        + 'women with low intake, usually before 24 weeks, which is a provider conversation.',
        s: 'solid' },
      { t: 'One or two servings of oily fish a week', why: 'Guidelines aim this at an extra 700 to '
        + '1,400 mg of DHA a week. Salmon, sardines, mackerel, trout. One trial of 600 mg DHA daily '
        + 'in the second half of pregnancy found longer gestation and larger babies, though the '
        + 'neurodevelopment evidence is mixed.', s: 'decent' },
      { t: 'Choline, 450 mg a day', why: 'The nutrient almost nobody mentions. Most pregnant women '
        + 'do not meet it and very few prenatal vitamins contain a meaningful amount, so this one '
        + 'has to come from food. Eggs, especially the yolks, plus meat, fish, beans.', s: 'solid' },
      { t: 'Protein, about 9 g a day more than usual', why: 'Two servings a day across the first and '
        + 'second trimesters. Not a reason to count anything, just a reason to put something with '
        + 'protein in it at each meal.', s: 'solid' },
    ],
  },
  {
    id: 'late',
    from: 28, to: 99,
    label: 'The third trimester',
    ic: 'moon',
    head: 'Iron, protein, and the plumbing',
    body:
      'Energy needs rise most here, roughly 450 to 500 extra calories a day, and protein needs jump '
      + 'to about 28 grams a day above baseline, three servings a day. Everything is also physically '
      + 'harder, which is why the practical lines matter as much as the nutrients.',
    keys: [
      { t: 'Iron, 27 mg a day, and this is when it bites', why: 'Around 84 percent of pregnant women '
        + 'take in less than the estimated requirement from diet, and iron deficiency prevalence is '
        + 'about 25 percent in the third trimester. Red meat, sardines, beans and lentils with '
        + 'something citrus alongside, and tea or coffee an hour away from the meal.', s: 'solid' },
      { t: 'Protein, about 28 g a day more, three servings', why: 'The biggest change of the whole '
        + 'pregnancy and the one people are most surprised by.', s: 'solid' },
      { t: 'Fibre and water, for the obvious reason', why: 'Iron tablets and a slower gut make '
        + 'constipation close to universal. Fruit, vegetables, beans, whole grains, and more water '
        + 'than feels necessary. Worth doing before it is a problem rather than after.', s: 'decent' },
      { t: 'Smaller meals, more often', why: 'There is less room. Heartburn and feeling full after '
        + 'three bites are mechanical, not dietary failures.', s: 'decent' },
      { t: 'Keep the oily fish going', why: 'Most of the brain growth that DHA is for happens in this '
        + 'stretch.', s: 'decent' },
    ],
  },
];

/* Always true, at every week, so it does not need repeating in all
   three stages. */
export const PEAT_ALWAYS = [
  { t: 'Vitamin D, 15 mcg a day', why: 'Prenatal supplements matter for this one, since food sources '
    + 'are few.', s: 'solid' },
  { t: 'B12, 2.6 mcg a day', why: 'Worth a specific conversation if you do not eat animal products.',
    s: 'solid' },
  { t: 'Caffeine under 200 mg a day', why: 'About 1 cup of filter coffee, or 2 instant, or 2 to 4 '
    + 'cups of tea.', s: 'solid' },
  { t: 'No alcohol', why: 'The guidance is to avoid it entirely. No argument offered here because '
    + 'there is not one to have.', s: 'solid' },
];

export const PEAT_AVOID = {
  title: 'The avoid list, and why each one is on it',
  items: [
    { t: 'High mercury fish', why: 'Shark, swordfish, ray, marlin. Tuna limited to 1 fresh steak or '
      + '2 tins a week.' },
    { t: 'Raw and undercooked', why: 'Raw or undercooked meat, raw fish including sushi and cold '
      + 'smoked salmon, raw egg in homemade mayonnaise, mousse, cheesecake or tiramisu.' },
    { t: 'Unpasteurised dairy', why: 'Including goat and sheep milk and anything made from them.' },
    { t: 'Mould ripened and soft blue cheese', why: 'Brie, camembert, gorgonzola, Roquefort, unless '
      + 'thoroughly cooked through.' },
    { t: 'Cold cured meats, unless cooked', why: 'And unwashed produce, and raw sprouts.' },
    { t: 'Liver, pate and fish liver oil', why: 'Preformed vitamin A, with an upper limit of 3,000 '
      + 'mcg a day. Beta carotene from vegetables is not the same thing and is fine.' },
    { t: 'Clams, mussels, oysters and scallops', why: 'Biotoxins that cooking does not destroy.' },
  ],
  note: 'Listeria and toxoplasmosis are most of the reasoning behind this list, and both have their '
    + 'own page under Looking after yourself.',
};

export const PEAT_WEIGHT_NOTE =
  'Weight in pregnancy is between you and your provider.';

export function peatStageFor(week) {
  const w = Number(week);
  if (!isFinite(w)) return PEAT_STAGES[0];
  return PEAT_STAGES.filter((s) => w >= s.from && w <= s.to)[0] || PEAT_STAGES[0];
}

/* Which cycle phase a given day of the cycle falls in, using her own
   numbers. Takes the cycleInfo object the app already builds. */
export function ceatPhaseFor(info) {
  if (!info) return null;
  const day = Number(info.dayOfCycle);
  const len = Number(info.cycleLength) || 28;
  const ovDay = len - 14;
  if (!isFinite(day)) return null;
  if (day <= 5) return CEAT_PHASES[0];
  if (day < ovDay - 1) return CEAT_PHASES[1];
  if (day <= ovDay + 1) return CEAT_PHASES[2];
  return CEAT_PHASES[3];
}

export const NSH_SOURCES = [
  { org: 'NIH Office of Dietary Supplements',
    label: 'Nutrient requirements in pregnancy, and how many women fall short of each',
    url: 'https://ods.od.nih.gov/factsheets/Pregnancy-HealthProfessional/' },
  { org: 'Institute of Obstetricians and Gynaecologists',
    label: 'Nutrition during pregnancy, including energy and protein by trimester and the avoid list',
    url: 'https://www.rcpi.ie/Portals/0/Document%20Repository/Institute%20of%20Obstetricians%20and%20Gynaecologists/National%20Clinical%20Guidelines/IOG_National%20Clinical%20Guidelines_Nutrition%20in%20pregnancy%20Guideline_2019.pdf' },
  { org: 'ACOG',
    label: 'Healthy eating during pregnancy',
    url: 'https://www.acog.org/womens-health/faqs/healthy-eating-during-pregnancy' },
  { org: 'Systematic review and meta analysis',
    label: 'Micronutrients and period pain, which is where the vitamin E, zinc and vitamin D figures '
      + 'come from, including how weak the authors say the evidence is',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7146731/' },
  { org: 'Meta analysis',
    label: 'Calcium and premenstrual syndrome',
    url: 'https://www.clinmedkaz.org/download/the-effect-of-calcium-on-premenstrual-syndrome-a-meta-analysis-study-15827.pdf' },
];

export const NSH_DISCLAIMER =
  'Not medical advice. Supplement doses belong to a provider who knows your bloodwork, especially iron and vitamin D.';

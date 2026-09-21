/**
 * Ready Set Grow: Trying
 * ==================================================================
 * A gentle mode on her own profile, built on the cycle tracker that
 * is already there. Not a fertility product bolted on the side.
 *
 * THE RULE THIS WHOLE FILE IS WRITTEN UNDER
 * Never imply she did this to herself. Not with food, not with
 * stress, not with the supplement she did not take. That rule is not
 * softness, it is accuracy: the evidence for almost everything sold
 * to women in this position is far weaker than the selling, and the
 * one large study on diet and fertility says outright that the arrow
 * may run the other way, with women changing how they eat after
 * trouble starts rather than before.
 *
 * WHAT THIS DOES THAT THE APPS SHE IS ALREADY USING DO NOT
 * Tells her when something is unproven. The three supplement groups
 * she asked for are sorted by what the evidence actually shows, and
 * the middle and bottom groups are much bigger than the top one. A
 * consumer group looked at thirty nine fertility supplements from
 * twenty seven companies and not one of them could substantiate its
 * claims. Somebody should say so.
 *
 * THE ESTIMATE PROBLEM, SAID PROPERLY
 * The professional body puts calendar and app prediction of the day
 * of ovulation at no better than twenty one percent accurate. So
 * every window this app draws says estimate on it, and the file says
 * plainly that it is not good enough to rely on for getting pregnant
 * or for avoiding it. A cycle app is not a contraceptive.
 *
 * ON THE BOOK
 * It Starts with the Egg gets named once, because a lot of women find
 * it helpful and pretending it does not exist is silly. Nothing from
 * inside it is reproduced, summarized or turned into a protocol here.
 *
 * WHAT IS NOT CLAIMED, AND WHY
 * Nothing is attributed to ACOG anywhere in this file, because their
 * site could not be read to check the wording. CDC, USPSTF, ASRM,
 * SART, AUA, Cochrane and NIH are used instead and named where used.
 * Where a number could not be verified it is absent rather than
 * approximated.
 *
 * Checked September 2026. Sources in TTC_SOURCES.
 */

export const TTC_TITLE = 'Trying';

export const TTC_SUB = 'The timing, what the evidence actually supports, and what happens if you '
  + 'need help. Written to be honest rather than encouraging.';

export const TTC_TABS = [
  { id: 'timing', label: 'Timing and when to ask' },
  { id: 'body', label: 'Food and supplements' },
  { id: 'help', label: 'If you need help' },
  { id: 'wait', label: 'The waiting' },
];

export const TTC_HEAD = 'Nothing on this page is something you did wrong.';

export const TTC_INTRO = [
  'Most of what gets sold to women trying to conceive is sold on evidence that would not survive '
  + 'being read out loud. This page tells you which is which, including the parts where the honest '
  + 'answer is that nobody knows.',
  'It also does not tell you to relax. That is not advice, it has never been advice, and it puts '
  + 'the blame in the one place it does not belong.',
];

/* ==================================================================
   TIMING
   ================================================================== */

export const TTC_WINDOW = {
  title: 'The fertile window, and how well anybody can find it',
  body: [
    'The window is 6 days long and it ends on the day of ovulation. The 2 days before ovulation '
    + 'are the best of the six. By the standard reference, the chance of conceiving from a single act '
    + 'is about 3 percent on day eight of a cycle, about 9 percent on day 12, and under 2 percent '
    + 'by day 21.',
    'Here is the part cycle apps do not print. The professional body that writes the guidance puts '
    + 'calendar prediction of the day of ovulation at no better than 21 percent accurate. '
    + 'That includes this app. Every window it draws is an estimate and it says so.',
  ],
  notContraception: 'Which means, plainly: do not use this or any other cycle app to avoid pregnancy. '
    + 'It is not accurate enough and it is not a contraceptive. The only app cleared as one in the '
    + 'United States is a specific regulated product and this is not it.',
  better: [
    'Urinary LH tests pick up the surge reliably, with roughly a 7 percent false positive rate. '
    + 'They are the most useful thing most people can buy.',
    'Cervical mucus is genuinely informative. Pregnancy rates are around 38 percent on the peak mucus '
    + 'day against 15 to 20 percent either side of it.',
    'Basal body temperature tells you ovulation has happened. It does not tell you it is about to, '
    + 'which is the thing you wanted to know.',
  ],
};

export const TTC_FREQUENCY = {
  title: 'How often, by the guidance rather than by folklore',
  items: [
    'Daily through the window gives the highest rates. Every other day and every third day are close '
    + 'behind. One act in the whole window is the lowest.',
    'The guidance says in as many words that couples should not be advised to limit how often they '
    + 'have sex. Saving it up does not help.',
    'Position makes no difference. Lying down afterwards has no basis. Most lubricants do not reduce '
    + 'the chance of conceiving, whatever they do in a dish.',
  ],
  note: 'Timed sex is the part most couples find hardest, and it is worth saying out loud to each '
    + 'other that it has stopped being fun. Every third day through the window is nearly as good as '
    + 'daily and is a great deal easier on a marriage.',
};

export const TTC_WHEN_ASK = {
  title: 'When to see somebody',
  items: [
    'Under 35, after 12 months of trying.',
    '35 and over, after 6 months.',
    'Over 40, sooner than that. The guidance says more immediate evaluation may be warranted.',
  ],
  sooner: {
    title: 'Go sooner than that, whatever the count says, if',
    items: [
      'Your cycles are irregular or absent.',
      'You have known or suspected trouble with your tubes, uterus, or endometriosis.',
      'There is a known or suspected issue on the male side.',
      'There is a genetic condition in the family that affects fertility.',
      'Either of you has had radiation or chemotherapy.',
    ],
  },
  both: 'One thing worth knowing before you book. The guidance from the urology and fertility bodies '
    + 'is that both partners are assessed at the same time, not the woman first and the man later if '
    + 'nothing turns up. If a clinic wants to work through you alone, that is worth a question.',
  definition: 'Worth knowing too: the current definition of infertility explicitly includes needing '
    + 'donor sperm, eggs or embryos to conceive, whether on your own or with a partner, and says in '
    + 'terms that it must not be used to delay treatment to anybody based on relationship status or '
    + 'sexual orientation.',
};

export const TTC_WORKUP = {
  title: 'What a first workup actually involves',
  hers: [
    'History and a targeted exam. A full gynecological workup on everybody is specifically not required.',
    'Whether you are ovulating. Often your period history answers it. Otherwise a progesterone level, '
    + 'LH kits, or a scan.',
    'Ovarian reserve. AMH, antral follicle count, or FSH and estradiol early in the cycle.',
    'Thyroid, routinely. Prolactin only if there is a reason.',
    'Your tubes and uterus, by HSG, sonohysterography or ultrasound.',
  ],
  his: [
    'A semen analysis. If it is abnormal, at least two, a month apart.',
    'Hormones only if there is a reason, such as low libido, erectile difficulty, a very low count, '
    + 'or small testes.',
    'Genetic testing in specific situations, mainly very low or absent counts.',
    'A scrotal ultrasound is specifically not recommended as part of the first look.',
  ],
  notRecommended: {
    title: 'What you should not be sold at this stage',
    intro: 'These are on the guidance as not routinely recommended, which is useful to know if one '
      + 'is offered to you with a price attached.',
    items: [
      'Basal body temperature charting as a diagnostic test.',
      'Endometrial biopsy.',
      'Inhibin B, or a clomiphene challenge test.',
      'Laparoscopy for unexplained infertility.',
      'Postcoital testing.',
      'Immunologic testing.',
      'Chlamydia antibody testing as the only assessment of your tubes.',
    ],
  },
};

/* ==================================================================
   FOOD AND SUPPLEMENTS
   ==================================================================
   Her ask was three honest groups. The honest sort puts one thing in
   the top group and a great deal in the bottom one, and that is the
   finding rather than a failure of the sorting.
   ================================================================== */

export const TTC_SUPP_INTRO = 'Sorted by what the evidence actually shows rather than by what is on '
  + 'the label. The top group is small on purpose.';

export const TTC_SUPP_STRONG = {
  title: 'Strong evidence',
  tone: 'strong',
  items: [
    { what: 'Folic acid, 400 micrograms a day',
      why: 'Start at least a month before you are trying and keep going through the first 2 to '
        + '3 months of pregnancy. The task force that grades these things gives it their highest '
        + 'grade. The reason for the month in front is that the neural tube closes in weeks 3 and '
        + '4, which is usually before anybody knows they are pregnant, so waiting for a first '
        + 'appointment is too late to prevent anything.' },
    { what: 'A prenatal vitamin containing that folic acid',
      why: 'Look for 400 micrograms. More is not better, and the ceiling from supplements and '
        + 'fortified food is 1,000 micrograms a day for an adult, because very high folic acid can '
        + 'mask a B12 deficiency while the nerve damage carries on.' },
  ],
};

export const TTC_SUPP_MAYBE = {
  title: 'Some evidence, worth asking your doctor about',
  tone: 'maybe',
  intro: 'None of these is recommended by a professional body for fertility. All of them are worth a '
    + 'conversation rather than a purchase.',
  items: [
    { what: 'CoQ10',
      why: 'The honest version: there is no review of CoQ10 on its own. The studies are small, mostly '
        + 'under 50 women, and mostly in women with low ovarian reserve or over 35 going '
        + 'through IVF rather than in the general population. The best recent pooled analysis found '
        + 'better clinical pregnancy rates, and did not report live births at all. Doses in studies '
        + 'run 200 to 600 mg a day for about 3 months. If you are in the group it was studied in, '
        + 'it is a reasonable thing to raise with your clinic.' },
    { what: 'Myo-inositol, if you have PCOS',
      why: 'The review found it uncertain whether it improves live births, with a confidence range so '
        + 'wide it tells you very little, and rated the evidence very low quality. The international '
        + 'PCOS guideline calls the evidence limited and inconclusive. One genuine point in its '
        + 'favor: it causes fewer stomach side effects than metformin.' },
    { what: 'Omega 3',
      why: 'One good prospective study of 900 women found users were about one and a half times as '
        + 'likely to conceive in a given cycle. It is not a trial, the authors say users may simply be '
        + 'more health conscious generally, and no dose can be stated because the study did not record '
        + 'one.' },
  ],
};

export const TTC_SUPP_WEAK = {
  title: 'Popular, and not supported',
  tone: 'weak',
  intro: 'Sold hard, and this is what the evidence says when somebody actually looks.',
  items: [
    { what: 'Vitamin D as a fertility treatment',
      why: 'The observational studies look good. The one large placebo controlled trial, 630 women in '
        + 'IVF, found no difference at all. Correcting a real deficiency is ordinary medical care for '
        + 'other reasons. Taking it to get pregnant is not supported.' },
    { what: 'DHEA',
      why: 'A 2024 review of 28 trials and 3,000 women found little to no difference in live births, '
        + 'at moderate certainty, which is a clearer answer than most things on this page get. It is '
        + 'also an androgen sold over the counter, so it is one to take only with a doctor watching '
        + 'rather than one to try.' },
    { what: 'Melatonin',
      why: 'Improves things measured in a laboratory. 11 trials and 1,241 people found no effect '
        + 'on live births, clinical pregnancy or miscarriage. It is a hormone rather than a vitamin, '
        + 'it is unregulated here, and there is no established safe dose in pregnancy.' },
    { what: 'NAC, vitamin E, L arginine',
      why: 'All 3 sit inside a broad review of antioxidants that found the effect on live births '
        + 'uncertain at very low certainty. None has credible evidence of its own.' },
    { what: 'Fertility blends and proprietary formulas',
      why: 'A consumer group examined 39 of these products from 27 companies. Not one could '
        + 'substantiate its claims. Of the studies companies cited on their own websites, 4 showed '
        + 'no increase in pregnancy, four did not measure pregnancy at all, and one used 8 times '
        + 'the dose the product contained. 16 companies cited no studies when asked.' },
  ],
};

export const TTC_SUPP_RISK = {
  title: 'The ones that can actually do harm',
  items: [
    'Preformed vitamin A, also called retinol. The ceiling in pregnancy is 10,000 IU a day and going '
    + 'over it is linked to birth defects of the eye, skull, lungs and heart. Beta carotene is a '
    + 'different thing and is not the concern. Check the label on anything you take, not just the '
    + 'prenatal.',
    'DHEA, because it is a hormone with no demonstrated benefit and thin safety data, sold with no '
    + 'supervision.',
    'Melatonin in pregnancy, for the same reason. No established dose.',
    'Very high folic acid taken on your own. The prescribed 4 mg dose exists for specific situations '
    + 'and is monitored. It is not achieved by taking 10 prenatals.',
  ],
  regulation: 'Worth holding in mind behind all of this: supplements do not need to be shown safe or '
    + 'effective before they are sold here. The regulator and the trade commission have sent joint '
    + 'warning letters to companies selling supplements claiming to treat infertility.',
  tell: 'Tell whoever is looking after you everything you are taking, including the things that came '
    + 'from a health shop. Not because this app can list what interacts with what, it cannot, and '
    + 'anybody who gives you a confident list of interactions is going beyond the evidence. Tell them '
    + 'because they cannot think about it at all if they do not know.',
};

export const TTC_MTHFR = {
  title: 'About MTHFR, since it comes up constantly',
  body: [
    'People with an MTHFR variant process every type of folate normally, including ordinary folic '
    + 'acid. Folic acid is the only form ever shown to prevent neural tube defects, and there are no '
    + 'studies showing the other forms do it.',
    'It is also not a rare finding. More people in the United States have one or 2 copies of the '
    + 'common variant than do not have it.',
    'There is no clinical recommendation to test for it, or to take a different amount of folate '
    + 'based on the result. If somebody sells you a test and then sells you a methylfolate product on '
    + 'the strength of it, that is the sequence to be wary of.',
  ],
};

export const TTC_EATING = {
  title: 'Eating, held very lightly',
  body: [
    'You will read that a Mediterranean pattern of eating improves fertility. Here is what is behind '
    + 'that. 8 observational studies, about 3000 people, and the results split down the '
    + 'middle. 4 found an association, 4 found nothing. Every one of them was graded low or very '
    + 'low quality. There are no trials.',
    'The largest recent study, 5500 women, found that eating this way was '
    + 'associated with fewer fertility problems, and that simply following general healthy eating '
    + 'guidance was associated with almost as much. Its authors say plainly that the design cannot '
    + 'show cause, and that the arrow may well run the other way, with women changing how they eat '
    + 'after difficulties start rather than before.',
  ],
  verdict: 'So: more vegetables, more fish, more olive oil, fewer ultra processed things. It is good '
    + 'for you for a dozen reasons that have nothing to do with this. It is not a treatment, it is not '
    + 'a rule, and there is no evidence anywhere that how a woman ate caused her infertility.',
};

export const TTC_BOOK = 'A lot of women find the book It Starts with the Egg useful and it comes up '
  + 'in every forum. It is not summarized here and nothing from it is reproduced. If you read it, '
  + 'take what is in it to your doctor the same as anything else, because parts of it go further than '
  + 'the published evidence does.';

/* ==================================================================
   IF YOU NEED HELP
   ================================================================== */

export const TTC_IUI = {
  title: 'IUI',
  what: 'Washed sperm placed through the cervix into the uterus around ovulation. The procedure '
    + 'itself takes a few minutes. Most people feel nothing worse than mild cramping.',
  meds: 'Medication is usual rather than optional. Either tablets, such as letrozole or clomiphene, '
    + 'or injections.',
  rates: {
    title: 'The numbers, as live births per cycle',
    intro: 'These are from the guideline, for unexplained infertility, and they are lower than the '
      + 'figures most clinics put on a website. That is usually because clinics quote clinical '
      + 'pregnancy rather than live birth. Always ask which one you are being shown.',
    items: [
      'Natural cycle IUI, about 6 percent per cycle.',
      'With clomiphene, about 9 percent.',
      'With letrozole, about 9 percent.',
    ],
    note: 'Success falls with age and varies by diagnosis. There is no national table for IUI by age '
      + 'the way there is for IVF, so any age breakdown you are shown is one clinic’s own numbers.',
  },
  howMany: 'Typically 3 or 4 cycles with tablets before moving on. If that has not worked, the '
    + 'guideline recommends going to IVF rather than to IUI with injectable gonadotropins.',
  warn: 'Worth knowing and worth asking about: the guideline recommends strongly against standard '
    + 'dose injectable gonadotropins with IUI, because around a third of the resulting pregnancies are '
    + 'twins or more.',
  cost: 'Roughly 1,200 to 2,400 dollars a cycle self pay, or 300 to 1,000 with insurance. The single '
    + 'biggest swing is the medication, which runs from about 30 dollars for tablets to several '
    + 'thousand for injections.',
};

export const TTC_IVF = {
  title: 'IVF, through one cycle',
  steps: [
    { step: 'Getting ready', body: 'Some protocols start with a few weeks of birth control or a '
      + 'suppression drug. Not all do, so do not assume this phase is coming.' },
    { step: 'Stimulation', body: 'Injections to grow several follicles at once. Usually 8 to '
      + '14 days.' },
    { step: 'Monitoring', body: 'Repeated scans and blood tests through the stimulation to watch how '
      + 'you are responding. This is the part that eats your mornings.' },
    { step: 'Trigger and retrieval', body: 'A trigger injection, then eggs are collected about 34 to '
      + '36 hours later. The retrieval is done under sedation through the vagina with ultrasound and '
      + 'usually takes under 30 minutes.' },
    { step: 'Fertilisation', body: 'Sperm and eggs together overnight, or ICSI where a single sperm '
      + 'is injected. Usually 65 to 75 percent of mature eggs fertilise.' },
    { step: 'Growing', body: 'Fertilisation is confirmed the next day. Day two is 2 to 4 cells, '
      + 'day three is 6 to 10, day five is a blastocyst.' },
    { step: 'Transfer', body: 'Any time from 1 to 6 days after retrieval, or in a later frozen '
      + 'cycle. No anesthetic normally needed.' },
    { step: 'The wait', body: 'Implantation happens roughly 6 to 10 days after retrieval. Your '
      + 'clinic will tell you when to test. Testing before they say is the commonest way to spend a '
      + 'week frightened for no reason.' },
  ],
};

export const TTC_IVF_RATES = {
  title: 'IVF success by age, and what the number actually means',
  intro: 'The most recent national figures, for 2023, using your own eggs. These are live births per '
    + 'intended egg retrieval, counting cumulatively across every transfer from that retrieval, and '
    + 'counting cycles that were canceled before retrieval. That is the honest denominator.',
  rows: [
    { age: 'Under 35', rate: '53 percent' },
    { age: '35 to 37', rate: '40 percent' },
    { age: '38 to 40', rate: '26 percent' },
    { age: '41 to 42', rate: '13 percent' },
    { age: 'Over 42', rate: '4 percent' },
  ],
  denominator: 'The single most important thing to understand about any IVF statistic is the '
    + 'denominator. The same 2023 data for women under 35 gives 53 percent per intended retrieval and '
    + '39 percent if you count only the first transfer. Same women, same year, very different number. '
    + 'When a clinic shows you a rate, ask what it is per.',
};

export const TTC_ADDONS = {
  title: '2 add ons the guidance does not support',
  intro: 'Both of these are commonly offered and both cost real money. The professional body has '
    + 'published on each.',
  items: [
    { what: 'PGT-A, genetic testing of embryos for chromosome number',
      why: 'The 2024 committee opinion says routine use in all patients having IVF cannot be '
        + 'recommended. The large trial found ongoing pregnancy of 42 percent with it against 44 '
        + 'percent without. Between about a tenth and a third of embryos come back mosaic, and mosaic '
        + 'embryos can implant and produce healthy babies. It averages around 8,700 dollars.' },
    { what: 'ICSI when there is no male factor',
      why: 'The 2026 committee opinion says routine use for non male factor is not recommended, and '
        + 'specifically not for unexplained infertility, low egg yield, low ovarian reserve or older '
        + 'age. An analysis of over 400,000 cycles found it associated with lower odds of live birth. '
        + 'It adds around 1,500 dollars.' },
  ],
  ask: 'None of that means never. It means these are conversations to have rather than boxes to tick, '
    + 'and it is entirely reasonable to ask a clinic why they are recommending one for you '
    + 'specifically.',
};

export const TTC_COST = {
  title: 'What it costs, honestly',
  body: [
    'There is no official price dataset in the United States. Every figure below comes from clinics '
    + 'or consumer sites, so treat them as indicative rather than as prices.',
    'A base IVF cycle is quoted anywhere from about 12,400 to around 29,000 dollars depending who you '
    + 'ask. Medication is usually not included and runs roughly 2,000 to 7,000. All in, most sources '
    + 'land somewhere between 15,000 and 30,000 a cycle.',
    'Add ons: ICSI around 1,500, PGT-A around 8,700, freezing embryos around 500 plus storage of 600 '
    + 'to 1,500 a year, and a frozen transfer around 6,000.',
  ],
  compare: 'The reason quotes are impossible to compare is that a quoted cycle price usually excludes '
    + 'medication, often excludes the frozen transfer, and may or may not include the add ons. Ask for '
    + 'the all in number for a retrieval plus one transfer plus medication, and ask what happens to '
    + 'the price if the cycle is canceled.',
  coverage: 'On insurance: around 25 states have some infertility law and around 15 require IVF '
    + 'coverage, but 61 percent of covered workers are in self funded plans, which are exempt from '
    + 'state mandates. Living in a mandate state does not mean you are covered. Check the plan, not '
    + 'the state.',
  federal: 'There has been federal activity in 2025 and 2026 on drug pricing and on letting employers '
    + 'offer standalone fertility benefits. All of it is voluntary so far. There is no federal '
    + 'mandate, no subsidy, and the 2026 rules are proposed rather than final.',
};

export const TTC_DONOR = {
  title: 'Donor paths, and doing it on your own',
  intro: 'All of these are ordinary routes to a family and the guidance says in terms that treatment '
    + 'must not be delayed for anybody based on relationship status or sexual orientation.',
  paths: [
    { what: 'Donor sperm from a bank',
      body: 'Screened and quarantined for at least 6 months before use, with retesting. Roughly 900 '
        + 'to 2,400 dollars a vial, plus shipping and storage, and most people need more than one '
        + 'vial. Budget per attempt rather than per vial.' },
    { what: 'A known donor',
      body: 'This is the route with the real legal exposure. Directed donations are exempt from the '
        + 'mandatory quarantine rules, though the guidance still recommends 35 days and retesting. '
        + 'More importantly, in some states a known donor who inseminates outside a licensed clinic '
        + 'can end up a legal parent. The guidance is unambiguous that everybody involved should see a '
        + 'lawyer who knows reproductive law in your state.' },
    { what: 'Donor eggs',
      body: 'A fresh cycle runs roughly 35,000 to 65,000 dollars all in, including agency fees and '
        + 'donor compensation. Frozen donor eggs start around 21,000 for a cohort of 6 to 8, '
        + 'which is cheaper but usually means fewer embryos.' },
    { what: 'Donated embryos',
      body: 'By some distance the cheapest donor route, roughly 5,000 to 15,000, because there is no '
        + 'stimulation cycle and no donor compensation. The guidance is emphatic here: get a written '
        + 'agreement and a court determination of parentage before the donation happens.' },
    { what: 'Reciprocal IVF',
      body: 'One partner provides the eggs, the other carries. Standard IVF cost plus donor sperm plus '
        + 'legal fees. Worth asking your clinic early whether they will apply donor screening rules to '
        + 'the partner providing eggs, because many do and it takes couples by surprise.' },
    { what: 'On your own',
      body: 'Single parents by choice are explicitly inside the current definition of who fertility '
        + 'care is for. The practical questions are the same ones, plus the legal ones if a known '
        + 'donor is involved.' },
  ],
  anonymity: {
    title: 'Anonymity is over, and the bodies say so',
    body: 'The ethics opinion is blunt: the era of perpetual donor anonymity has ended. Tens of '
      + 'millions of Americans have their genetic data in consumer databases, and somebody can be '
      + 'identified through relatives who tested even if they never test themselves. The official '
      + 'terms changed to reflect it, from known and anonymous to directed and nonidentified. Plan on '
      + 'the basis that a child may find a donor, and that a donor’s relatives may find you.',
  },
  legal: 'Parentage law varies enormously between states and in places does not exist. Where a '
    + 'parentage order or a second parent adoption is available it is generally worth doing even for '
    + 'married couples, because a marital presumption is not always recognized across state lines.',
};

/* ==================================================================
   THE WAITING
   ================================================================== */

export const TTC_WAIT = {
  title: 'The 2 week wait',
  body: [
    'Naturally, implantation happens somewhere around 6 to 12 days after ovulation, most often '
    + 'around day 8 to 10. In an IVF cycle it is roughly 6 to 10 days after the retrieval.',
    'Once it happens, hCG doubles every 2 to 3 days. That is why a single day makes such a '
    + 'difference to whether a test can see it, and why a negative at 10 days past ovulation may '
    + 'simply mean implantation has not happened yet.',
  ],
  test: 'Tests are reliable from after the day your period was due. Earlier than that is the main '
    + 'cause of false negatives, and a very early positive can be followed by a loss you would never '
    + 'otherwise have known about. Both of those are arguments for waiting, and neither of them makes '
    + 'waiting any easier.',
  symptoms: {
    title: 'About symptom spotting',
    body: 'The most useful study here followed 221 women keeping daily diaries. Among those who went '
      + 'on to have a baby, half had no pregnancy symptoms at all until day 36 after their last '
      + 'period, which is about a week after the missed period. Most of the rest started later than '
      + 'that. Which means that symptoms at 8 or 10 days past ovulation are very unlikely to be '
      + 'telling you anything, in either direction. That is not a reason to feel foolish for looking. '
      + 'Everybody looks.',
  },
};

export const TTC_FEELINGS = {
  title: 'What this does to people',
  body: [
    'A review of 40 studies and 16,000 people going through fertility treatment found anxiety in '
    + 'roughly half of the women and depression in roughly a third. For men it was around a quarter '
    + 'and around a fifth. Those numbers are wide and should be read as a range rather than a '
    + 'measurement, and they are high by any reading.',
    'So if this is flattening you, that is not fragility. It is the common experience of people doing '
    + 'this, and most of them are not saying so out loud either.',
  ],
  helps: 'Psychological support does help distress. A review of 58 trials found a real effect, though '
    + 'outside one region it was a small one. Worth having for its own sake.',
  notYourFault: 'One thing this app will not do is tell you that reducing your stress will get you '
    + 'pregnant. There is a finding in that literature that gets quoted that way, the trials behind it '
    + 'are weak, and the direction of cause is not established. Being stressed by infertility is a '
    + 'result of infertility. It is not the reason for it.',
  resolve: 'RESOLVE, the national infertility association, runs free peer support groups, virtual and '
    + 'in person, and is also the main advocacy body on insurance coverage. There are therapists who '
    + 'specifically train and certify in fertility counseling, so a therapist who knows this ground '
    + 'is a real thing you can ask for.',
};

export const TTC_LINES = [
  { name: 'RESOLVE, the National Infertility Association', contact: 'resolve.org',
    detail: 'Free peer led support groups, virtual and in person, plus the practical side of '
      + 'insurance and coverage.',
    url: 'https://resolve.org/get-help/support-groups/' },
  { name: 'ReproductiveFacts', contact: 'reproductivefacts.org',
    detail: 'The patient education arm of the fertility professional body. Plain fact sheets on every '
      + 'procedure, without a clinic trying to sell you one.',
    url: 'https://www.reproductivefacts.org/' },
  { name: '988 Suicide and Crisis Lifeline', contact: '988',
    detail: 'If this has taken you somewhere darker than you expected. Call or text, any hour.',
    url: 'https://988lifeline.org/' },
];

/* ==================================================================
   PRIVACY
   ==================================================================
   She asked for this explicitly and it is the most personal data in
   the app, so it is stated plainly and the delete is real.
   ================================================================== */

export const TTC_PRIVACY = {
  title: 'Who can see any of this',
  items: [
    'Your cycle, your dates and anything on this page live on your own profile, not on a child’s.',
    'Nobody you have shared a child with can see it. Sharing gives somebody access to that child, and '
    + 'this is not on a child.',
    'It is never sold, never used for advertising, and never part of the community side of the app.',
    'It syncs to your own account so it is there on your other devices, and it is deleted from there '
    + 'too when you delete it.',
  ],
  deleteTitle: 'Deleting all of it',
  deleteBody: 'One tap removes every period you have logged, the cycle length the app worked out, and '
    + 'anything recorded about trying. It cannot be undone and nothing is kept.',
  deleteBtn: 'Delete all my cycle and trying data',
  deleteConfirm: 'Yes, delete all of it',
  deleteCancel: 'Keep it',
};

export const TTC_SOURCES = [
  { org: 'ASRM', label: 'Optimizing natural fertility, the window, the timing and the accuracy of prediction',
    url: 'https://www.asrm.org/practice-guidance/practice-committee-documents/optimizing-natural-fertility-a-committee-opinion-2021/' },
  { org: 'ASRM', label: 'When to be evaluated, and what a workup should and should not include',
    url: 'https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2021/' },
  { org: 'AUA and ASRM', label: 'The male half, assessed at the same time rather than afterwards',
    url: 'https://www.auanet.org/guidelines-and-quality/guidelines/male-infertility' },
  { org: 'CDC', label: 'Folic acid, the dose, the timing and why the month in front matters',
    url: 'https://www.cdc.gov/folic-acid/hcp/clinical-overview/index.html' },
  { org: 'CDC', label: 'MTHFR, and why folic acid is still the right form',
    url: 'https://www.cdc.gov/folic-acid/data-research/mthfr/index.html' },
  { org: 'USPSTF', label: 'The grade A recommendation on folic acid',
    url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/folic-acid-for-the-prevention-of-neural-tube-defects-preventive-medication' },
  { org: 'Cochrane', label: 'Antioxidants for female subfertility, which covers most of the supplement shelf',
    url: 'https://www.cochrane.org/evidence/CD007807_vitamins-and-minerals-subfertility-women' },
  { org: 'Cochrane', label: 'DHEA and testosterone, and what they do and do not do',
    url: 'https://www.cochrane.org/evidence/CD009749_androgens-dehydroepiandrosterone-or-testosterone-women-undergoing-assisted-reproduction-technology' },
  { org: 'CSPI', label: 'The investigation into 39 fertility supplements and what they could substantiate',
    url: 'https://www.cspi.org/news/manufacturers-fertility-supplements-false-hope-20191118' },
  { org: 'NIH', label: 'Vitamin A in pregnancy, and the upper limits',
    url: 'https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/' },
  { org: 'ASRM', label: 'IUI and the evidence based treatments for unexplained infertility',
    url: 'https://www.asrm.org/practice-guidance/practice-committee-documents/evidence-based-treatments-for-couples-with-unexplained-infertility-a-guideline-2020/' },
  { org: 'SART', label: 'National IVF outcomes by age, 2023 reporting year',
    url: 'https://www.sartcorsonline.com/rptcsr_publicmultyear.aspx' },
  { org: 'ASRM', label: 'Why routine PGT-A is not recommended',
    url: 'https://www.asrm.org/practice-guidance/practice-committee-documents/the-use-of-preimplantation-genetic-testing-for-aneuploidy-a-committee-opinion-2024/' },
  { org: 'ASRM', label: 'Why ICSI without male factor is not recommended',
    url: 'https://www.asrm.org/practice-guidance/practice-committee-documents/intracytoplasmic-sperm-injection-for-nonmale-factor-indications-a-committee-opinion-2026/' },
  { org: 'ASRM', label: 'Donor paths, and why anonymity can no longer be promised',
    url: 'https://www.asrm.org/practice-guidance/practice-committee-documents/guidance-regarding-gamete-and-embryo-donation/' },
  { org: 'RESOLVE', label: 'Support groups, and insurance coverage state by state',
    url: 'https://resolve.org/get-help/support-groups/' },
  { org: 'KFF', label: 'Who is actually covered, and why a state mandate may not reach you',
    url: 'https://www.kff.org/womens-health-policy/coverage-and-use-of-fertility-services-in-the-u-s/' },
];

export const TTC_DISCLAIMER = 'Educational information, not medical advice. Costs are indicative '
  + 'because no official price data exists in the United States. Nothing here is attributed to ACOG, '
  + 'because their wording could not be checked directly when this was written.';

export default TTC_TITLE;

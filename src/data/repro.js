/**
 * Ready Set Grow: what is going on with your body
 * ------------------------------------------------------------------
 * Her ask: let women record PCOS, endometriosis and its stage, tubes
 * tied, trying to conceive, IVF, infertility, bilateral hydrosalpinx
 * and the rest, make it genuinely informative, and have Willow only
 * speak up when somebody logs irregular cycles rather than nagging.
 *
 * WHY THE EVIDENCE LABELS MATTER MORE HERE THAN ANYWHERE ELSE
 *
 * This is the corner of women's health with the worst ratio of
 * confident advice to actual evidence. A woman who has been trying for
 * a year is the single most marketed-to person in wellness, and the
 * supplement aisle, the clinic upsell and the bestselling book all
 * sound equally certain.
 *
 * So every line carries the same strength label the eating pages use,
 * and some of what it says will be unwelcome. Inositol is the clearest
 * example: it is sold everywhere for PCOS fertility, and the 2023
 * international guideline calls it experimental therapy and does not
 * recommend it for fertility. Saying so is the whole point of having
 * the label.
 *
 * ON "IT STARTS WITH THE EGG"
 *
 * She likes the book and it is genuinely better than most of the
 * genre: the 90 day framing is real biology, and it sends people to
 * their own numbers rather than away from doctors. But its supplement
 * case is stronger in the book than in the trials, and a woman spending
 * money she may not have deserves to know which parts are which. The
 * book is named and credited, and then the evidence is given straight.
 * That is more respectful than either dismissing it or repeating it.
 *
 * WHAT IS NOT HERE
 * No diagnosis. No "you probably have". Nothing that reads as a result.
 * Recording a condition here changes what the app shows her and nothing
 * else, and every page says who to ask.
 *
 * PRIVACY
 * All of this sits on her own account record, which the security rules
 * make readable only by her. None of it ever reaches the community,
 * a post, or another parent, and nothing in here is attached to a child.
 */

export const REPRO_TITLE = 'Your reproductive health';

export const REPRO_SUB =
  'Tick anything that applies, now or in the past. It only changes what the app shows you.';

export const REPRO_PRIVACY = 'Only you can see this. It never reaches the community.';

export const REPRO_NONE = 'Nothing ticked yet.';

/* ------------------------------------------------------------------
   WHAT SHE CAN RECORD
   ------------------------------------------------------------------ */
export const REPRO_CONDITIONS = [
  { id: 'pcos', label: 'PCOS', ic: 'circle',
    blurb: 'Polycystic ovary syndrome' },
  { id: 'endo', label: 'Endometriosis', ic: 'flower',
    blurb: 'Including adenomyosis', stages: true, when: true },
  { id: 'hydro', label: 'Hydrosalpinx', ic: 'drop',
    blurb: 'Fluid in one or both tubes', sides: true, when: true },
  { id: 'tied', label: 'Tubes tied or removed', ic: 'shield',
    blurb: 'Whichever operation it was', fixAlways: true },
  { id: 'ttc', label: 'Trying to conceive', ic: 'heart',
    blurb: 'However long it has been', months: true },
  { id: 'ivf', label: 'IVF or IUI', ic: 'leaf',
    blurb: 'In treatment, or about to be' },
  { id: 'dor', label: 'Low ovarian reserve', ic: 'moon',
    blurb: 'Low AMH, or told you have few eggs' },
  { id: 'fibroids', label: 'Fibroids', ic: 'circle', when: true },
  { id: 'thyroid', label: 'Thyroid', ic: 'pill',
    blurb: 'Under or over active', when: true },
  { id: 'loss', label: 'Recurrent loss', ic: 'heart',
    blurb: 'Two or more' },
  { id: 'male', label: 'Male factor', ic: 'user',
    blurb: 'On his side of it' },
  { id: 'unexplained', label: 'Unexplained', ic: 'info',
    blurb: 'Everything came back normal' },
];

/* NOW, OR BEHIND YOU.

   A tick used to mean "I have this", which is wrong for anybody whose
   tube has been taken out or whose endometriosis has been excised. It
   is also the difference between a page telling her to go and get
   something done and a page telling her what it means that it is
   already done. */
export const REPRO_WHEN = [
  { id: 'now', label: 'I have this now' },
  { id: 'past', label: 'Had it, it has been dealt with' },
];

/* WHAT WAS ACTUALLY DONE.

   "Treated" covers operations that do completely different things. A
   tube that was clipped is still there; a tube that was removed is
   not, and that second one decides whether IUI is even possible. */
export const REPRO_FIXES = {
  hydro: [
    { id: 'removed', label: 'Tube or tubes removed', short: 'tubes removed',
      note: 'A salpingectomy. The tube is gone, so the fluid cannot come back.' },
    { id: 'clipped', label: 'Clipped or tied off', short: 'clipped',
      note: 'Left in place but blocked at the womb end, so nothing washes back.' },
    { id: 'drained', label: 'Drained', short: 'drained',
      note: 'Aspirated rather than operated on. It can refill.' },
    { id: 'other', label: 'Something else', short: 'treated' },
  ],
  tied: [
    { id: 'tied', label: 'Tied or clipped', short: 'tied or clipped',
      note: 'The tubes are still there.' },
    { id: 'removed', label: 'Removed', short: 'tubes removed',
      note: 'A salpingectomy. The tubes are gone.' },
    { id: 'reversed', label: 'Since reversed', short: 'reversed' },
  ],
  endo: [
    { id: 'excision', label: 'Excision surgery', short: 'excision' },
    { id: 'ablation', label: 'Ablation', short: 'ablation' },
    { id: 'hyst', label: 'Hysterectomy', short: 'hysterectomy' },
    { id: 'meds', label: 'Managed with medication', short: 'on medication' },
    { id: 'other', label: 'Something else', short: 'treated' },
  ],
  fibroids: [
    { id: 'myo', label: 'Myomectomy', short: 'myomectomy' },
    { id: 'embol', label: 'Embolisation', short: 'embolisation' },
    { id: 'hyst', label: 'Hysterectomy', short: 'hysterectomy' },
    { id: 'other', label: 'Something else', short: 'treated' },
  ],
  thyroid: [
    { id: 'meds', label: 'On medication for it', short: 'on medication' },
    { id: 'surgery', label: 'Surgery or radioiodine', short: 'surgery' },
    { id: 'settled', label: 'Settled on its own', short: 'settled' },
  ],
};

export const REPRO_SUMMARY_TITLE = 'What you have told the app';
export const REPRO_SUMMARY_NOTE =
  'This is everything it is holding. Untick anything that is wrong and it goes.';

export const ENDO_STAGES = [
  { id: '1', label: 'Stage 1', note: 'Minimal' },
  { id: '2', label: 'Stage 2', note: 'Mild' },
  { id: '3', label: 'Stage 3', note: 'Moderate' },
  { id: '4', label: 'Stage 4', note: 'Severe' },
  { id: 'unknown', label: 'Not staged', note: 'Or nobody told me' },
];

export const HYDRO_SIDES = [
  { id: 'one', label: 'One side' },
  { id: 'both', label: 'Both sides' },
  { id: 'unknown', label: 'Not sure' },
];

export const TTC_LENGTHS = [
  { id: 'u6', label: 'Under 6 months', months: 3 },
  { id: '6to12', label: '6 to 12 months', months: 9 },
  { id: '1to2', label: '1 to 2 years', months: 18 },
  { id: 'over2', label: 'Over 2 years', months: 30 },
];

/* ------------------------------------------------------------------
   THE PAGES

   One per condition. Every claim carries a strength, using the same
   four tiers as the eating pages: solid, decent, thin, popular.
   ------------------------------------------------------------------ */
export const REPRO_PAGES = {
  pcos: {
    title: 'PCOS',
    head: 'A diagnosis of exclusion, and the most over-marketed condition in women\'s health',
    body:
      'It is diagnosed on 2 of 3 things, once other causes are ruled out: signs of high androgens, '
      + 'cycles that do not come regularly, and either polycystic ovaries on a scan or a raised AMH. '
      + 'If you have irregular cycles and high androgens, you do not need a scan at all to be '
      + 'diagnosed.',
    rows: [
      { t: 'Either a scan or AMH, not both', s: 'solid',
        why: 'The 2023 international guideline allows AMH to stand in for the scan in adults, and '
          + 'deliberately says to use one or the other, to stop the overdiagnosis that comes from '
          + 'counting both.' },
      { t: 'Different rules under 18', s: 'solid',
        why: 'An adolescent needs both high androgens and irregular cycles. Scans and AMH are not '
          + 'recommended at that age because too many normal teenagers look polycystic.' },
      { t: 'Letrozole is first line for ovulation, not clomid', s: 'solid',
        why: 'The guideline recommends it over clomiphene for ovulation, pregnancy and live birth. '
          + 'It is still used off label in a lot of places, so you may have to ask for it by name.' },
      { t: 'Metformin is mainly metabolic', s: 'solid',
        why: 'Recommended at a BMI of 25 or over for the metabolic side. It can help fertility on '
          + 'its own, but there are more effective ovulation drugs.' },
      { t: 'Inositol is not a fertility treatment', s: 'thin',
        why: 'This is the one people will argue with. The guideline calls it experimental therapy '
          + 'for infertility and does not recommend it, because the benefit and risk are both too '
          + 'uncertain. It is cheap and low harm, so taking it is a reasonable personal choice. It '
          + 'is not a treatment, and it is not a reason to delay seeing somebody.' },
    ],
    ask: ['Can we use letrozole rather than clomid?',
      'Should my insulin and lipids be checked?',
      'Was anything else ruled out before this diagnosis?'],
  },

  endo: {
    title: 'Endometriosis',
    head: 'The stage was never about your pain',
    body:
      'The four stages come from a system built to predict fertility, scored on ovarian disease and '
      + 'adhesions. Stages 1 and 2 are minimal to mild, 3 and 4 moderate to severe.',
    rows: [
      { t: 'Your stage does not predict your pain', s: 'solid',
        why: 'The European guideline says the staging system neither predicts the severity of pain '
          + 'nor the complexity of surgery. Stage 4 with almost no symptoms happens, and so does '
          + 'stage 1 with pain that stops a life. If anybody has used your stage to tell you how '
          + 'much it should hurt, they were wrong.' },
      { t: 'Where it is matters more than the stage', s: 'decent',
        why: 'Superficial, ovarian endometrioma and deep endometriosis behave differently and are '
          + 'treated differently. That subtype is more useful than the number.' },
      { t: 'Most women with endometriosis are fertile', s: 'solid',
        why: 'An estimated 60 to 70 percent. It is not a sentence, and it is worth hearing before '
          + 'anything else.' },
      { t: 'Hormone treatment does not improve fertility', s: 'solid',
        why: 'Not recommended while trying to conceive. It has not been shown to raise the chance '
          + 'of pregnancy. It is still useful for pain if you are not trying right now.' },
      { t: 'Surgery on an endometrioma has a cost', s: 'solid',
        why: 'Removing lesions can improve the chance of conceiving naturally, but operating on an '
          + 'ovarian endometrioma risks the ovary itself. That trade is a conversation to have out '
          + 'loud before anybody books it.' },
      { t: 'Pregnancy is not a cure', s: 'solid',
        why: 'It is still said. It is not true, and it is not a reason to have a baby.' },
    ],
    ask: ['Which subtype do I have, not just which stage?',
      'If surgery is suggested, what happens to my ovarian reserve?',
      'What is my Endometriosis Fertility Index?'],
  },

  hydro: {
    title: 'Hydrosalpinx',
    head: 'The one thing worth treating before IVF, and the numbers are not close',
    body:
      'A blocked tube filled with fluid. It matters for IVF beyond the blockage itself, because the '
      + 'fluid can wash back into the womb and work against an embryo that was otherwise fine.',
    rows: [
      { t: 'Untreated, it roughly halves the odds', s: 'solid',
        why: 'In tubal infertility, pregnancy was about 20 percent with a hydrosalpinx against 31 '
          + 'percent without, and delivery 13 against 23 percent per transfer. Pregnancy loss was '
          + 'about 74 percent higher.' },
      { t: 'Treating it first changes the result', s: 'solid',
        why: 'In a randomised trial, clinical pregnancy was 37 percent after the tube was removed '
          + 'against 24 percent with no intervention, and delivery 29 against 16 percent. The '
          + 'benefit was largest in women whose hydrosalpinx was visible on ultrasound.' },
      { t: 'Removal or clipping, both count', s: 'decent',
        why: 'The 2025 WHO guideline conditionally suggests removing the tube or blocking it at the '
          + 'uterine end before IVF. A 2025 network meta analysis found no clear live birth '
          + 'difference between the strategies, so which operation is a surgical judgement rather '
          + 'than a settled answer.' },
      { t: 'Both sides is a real conversation about your ovaries', s: 'decent',
        why: 'Taking both tubes is definitive, but it disturbs the blood supply to both ovaries, '
          + 'and bilateral surgery showed a larger drop in AMH in one meta analysis. Clipping the '
          + 'tubes instead leaves them in place and may be preferred with low reserve, previous '
          + 'ovarian surgery or dense adhesions.' },
      { t: 'Draining it is a fallback, not a fix', s: 'decent',
        why: 'Aspiration is for when surgery is not possible or not wanted. It comes back.' },
      { t: 'Collecting eggs before surgery is sometimes offered', s: 'thin',
        why: 'Stimulating and freezing embryos first, then operating before transfer. The evidence '
          + 'on that order is observational and conflicting.' },
    ],
    ask: ['Is mine communicating with the womb, and is it visible on ultrasound?',
      'Removal or clipping, and what does that do to my AMH?',
      'If both sides, can we freeze embryos before the surgery?'],
  },

  tied: {
    title: 'Tubes tied',
    head: 'Still options, and they are different options',
    body:
      'Sterilisation is meant to be permanent and is one of the most effective contraceptives there '
      + 'is. If you want to conceive afterwards there are two routes, and which one suits depends on '
      + 'what was actually done to the tubes.',
    rows: [
      { t: 'Reversal or IVF, and it depends on the operation', s: 'decent',
        why: 'Clips and rings leave more tube to rejoin than burning or removal does. If the tubes '
          + 'were removed entirely, reversal is not possible and IVF is the route. Ask which was '
          + 'done, and ask for the operation note.' },
      { t: 'Age is the strongest factor in either route', s: 'solid',
        why: 'More than the surgery itself. A reversal at 30 and a reversal at 42 are different '
          + 'propositions and a clinic should say so plainly.' },
      { t: 'Reversal carries an ectopic risk', s: 'solid',
        why: 'A rejoined tube is more likely to hold a pregnancy in the wrong place. Worth knowing '
          + 'the early signs, and worth an early scan if you do conceive.' },
    ],
    ask: ['What exactly was done to my tubes, and can I have the operation note?',
      'For my age, would reversal or IVF give the better chance?'],
  },

  ttc: {
    title: 'Trying to conceive',
    head: 'There is a line, and it exists so nobody waits politely for years',
    body:
      'Not conceiving after 12 months of regular unprotected sex is the definition of infertility, '
      + 'and it is 6 months if you are 35 or over. That is not a verdict. It is the point at which '
      + 'you are entitled to be looked at rather than reassured.',
    rows: [
      { t: '12 months, or 6 if you are 35 or over', s: 'solid',
        why: 'Both numbers are thresholds for investigation, not diagnoses. Earlier if you already '
          + 'know about irregular cycles, endometriosis, a tube problem, or anything on his side.' },
      { t: 'Both of you get tested, at the same time', s: 'solid',
        why: 'Male factor is involved in roughly half of cases and a semen analysis is quick, cheap '
          + 'and non invasive. A workup that tests only the woman first is a workup that wastes '
          + 'months.' },
      { t: 'Timing matters less than frequency', s: 'decent',
        why: 'Every 1 to 2 days across the fertile window beats trying to hit a single day. Apps '
          + 'and strips predict a window, not an event, and sex on a schedule costs more than it '
          + 'buys for most couples.' },
      { t: 'A Mediterranean pattern: worth doing, not proven', s: 'thin',
        why: 'The systematic review of 8 studies found 4 showed an association with assisted '
          + 'reproduction outcomes and 4 found nothing, and graded almost all of them low or very '
          + 'low quality. All observational, so none of it establishes cause. It is a good way to '
          + 'eat for reasons that have nothing to do with fertility, which is the honest case for '
          + 'it.' },
      { t: 'Folic acid, and start before', s: 'solid',
        why: '400 to 800 micrograms a day, from at least a month before conception. This is the one '
          + 'supplement that is not in doubt.' },
    ],
    ask: ['Can we both be tested, including a semen analysis?',
      'Given my age and how long it has been, should we be referred now?'],
  },

  ivf: {
    title: 'IVF and IUI',
    head: 'The questions worth asking before you start paying',
    body:
      'Clinics differ enormously in what they offer, what they charge for, and how they report '
      + 'success. These are the questions that change what you get.',
    rows: [
      { t: 'Ask for live birth per cycle started, by your age group', s: 'solid',
        why: 'Not pregnancy per transfer, which is the flattering number. Per cycle started, live '
          + 'birth, your age band, at that clinic.' },
      { t: 'Ask which add ons are evidence based', s: 'solid',
        why: 'A great many extras are sold alongside IVF with thin or no evidence behind them. A '
          + 'good clinic will tell you which of its own add ons it cannot justify.' },
      { t: 'A hydrosalpinx should be dealt with first', s: 'solid',
        why: 'See the hydrosalpinx page. This is the clearest example of something worth fixing '
          + 'before a transfer rather than after a failed one.' },
      { t: 'For endometriosis, surgery before IVF is not routine', s: 'solid',
        why: 'The European guideline finds no clear benefit from medical or surgical treatment '
          + 'before IVF, with specific exceptions such as significant pain or an endometrioma '
          + 'blocking access to the ovary.' },
    ],
    ask: ['What is your live birth rate per cycle started for my age?',
      'Which of your add ons would you not pay for yourself?',
      'What is the plan if this cycle does not work?'],
  },

  dor: {
    title: 'Low ovarian reserve',
    head: 'It tells you about quantity, not about whether you can conceive',
    body:
      'AMH and antral follicle count estimate how many eggs are left. They predict how you will '
      + 'respond to stimulation. They are much weaker at predicting whether you will conceive '
      + 'naturally.',
    rows: [
      { t: 'A low AMH is not a diagnosis of infertility', s: 'solid',
        why: 'It is a response predictor. Women with low AMH conceive naturally, and the number on '
          + 'its own should not be used to tell you otherwise.' },
      { t: 'Age still outweighs the number', s: 'solid',
        why: 'Egg quality tracks age more closely than it tracks reserve. A low AMH at 30 and a low '
          + 'AMH at 42 mean different things.' },
      { t: 'DHEA and CoQ10 are not established', s: 'thin',
        why: 'See the supplements page. Both are widely sold for this and neither has the trial '
          + 'evidence that the marketing implies.' },
    ],
    ask: ['What is my antral follicle count alongside my AMH?',
      'Does this change the protocol you would use?'],
  },
};

/* ------------------------------------------------------------------
   THE SUPPLEMENT PAGE, AND THE BOOK

   Separated out because every condition above leads here eventually
   and because this is where the money goes.
   ------------------------------------------------------------------ */
export const REPRO_SUPP = {
  title: 'Supplements, and what the trials actually show',
  intro:
    'Sorted by how good the evidence is rather than by how often you will be told to take it. Some '
    + 'of these are cheap and harmless and a reasonable thing to try. None of them is a treatment, '
    + 'and none is a reason to wait longer before being seen.',
  rows: [
    { t: 'Folic acid, 400 to 800 mcg', s: 'solid',
      why: 'Not in doubt, and start at least a month before conception. The neural tube closes '
        + 'within about 28 days, before most people know.' },
    { t: 'Vitamin D, if you are low', s: 'decent',
      why: 'In PCOS it has been linked to better ovulation and pregnancy rates and lower '
        + 'miscarriage. Worth testing rather than guessing, and worth not megadosing.' },
    { t: 'Myo-inositol, if you have PCOS', s: 'thin',
      why: 'The best studied of the fashionable ones, with several small trials in PCOS showing '
        + 'more mature eggs and better fertilisation. Results are mixed and the 2023 guideline '
        + 'still calls it experimental for fertility. Reasonable to try, not a treatment.' },
    { t: 'CoQ10', s: 'thin',
      why: 'The headline supplement of the egg quality world. The human randomised trials are '
        + 'described as inconclusive, and most of the striking results are in aged mice. Some '
        + 'studies in poor responders reported better embryo quality. Plausible, unproven, and '
        + 'expensive.' },
    { t: 'Melatonin', s: 'thin',
      why: 'Good mechanistic reasoning, inconsistent human results, and no agreed dose. Not a '
        + 'sleeping tablet you should start on your own while trying.' },
    { t: 'DHEA', s: 'thin',
      why: 'Sold hard for low reserve on the back of very little. It is a hormone, it has side '
        + 'effects, and it should not be taken without a clinic monitoring it.' },
    { t: 'Omega-3', s: 'thin',
      why: 'Limited human data and unclear dosing. Oily fish is a good idea anyway.' },
  ],
  book: {
    title: 'On It Starts With the Egg',
    body:
      'It is better than most of the genre. The 90 day framing is real: the eggs ovulating in 3 '
      + 'months are maturing now, which is why anything you change takes a season to show up. It '
      + 'also pushes people towards their own numbers and their own clinic rather than away from '
      + 'them.',
    caveat:
      'Where it runs ahead of the evidence is the supplement case. CoQ10, DHEA and melatonin are '
      + 'presented with more confidence than the trials support, and the plastics and BPA advice '
      + 'rests on much thinner ground than the folic acid advice does. None of it is likely to harm '
      + 'you. Some of it will cost a lot of money for an effect nobody has demonstrated.',
    verdict:
      'Worth reading. Worth reading alongside the labels on this page rather than instead of them.',
  },
};

/* ------------------------------------------------------------------
   WHEN WILLOW SPEAKS UP

   Her rule, and it is the right one: Willow does not lecture. She says
   something when the app has actually noticed something, and then she
   stops. Each of these fires once.
   ------------------------------------------------------------------ */
export const REPRO_WILLOW = {
  irregular: {
    id: 'irregular',
    say:
      'I noticed your cycles are moving around more than usual. That is worth mentioning to '
      + 'somebody, not worrying about tonight.\n\nA spread of more than about a week between your '
      + 'shortest and longest cycle is the thing a provider wants to hear, and irregular cycles are '
      + 'the most common reason PCOS or a thyroid problem gets picked up. Neither is an emergency '
      + 'and both are manageable once somebody has looked.',
    offers: [
      { id: 'pcos', label: 'What is PCOS, actually' },
      { id: 'thyroid', label: 'Could it be my thyroid' },
      { id: 'track', label: 'What should I be writing down' },
      { id: 'no', label: 'Not now' },
    ],
  },
  ttcYear: {
    id: 'ttcYear',
    say:
      'You have had trying to conceive ticked for a while now, and there is a line I would rather '
      + 'you knew about than found out later.\n\nTwelve months without conceiving, or six if you '
      + 'are 35 or over, is the point where you are entitled to be investigated rather than '
      + 'reassured. That is not a verdict and it does not mean anything is wrong. It means you can '
      + 'stop waiting politely.',
    offers: [
      { id: 'tests', label: 'What should we both be tested for' },
      { id: 'diet', label: 'Does diet actually help' },
      { id: 'supps', label: 'What about supplements' },
      { id: 'no', label: 'Not now' },
    ],
  },
};

export const REPRO_WILLOW_REPLIES = {
  pcos: 'It is diagnosed on 2 of 3 things, once other causes are ruled out: signs of high '
    + 'androgens, cycles that do not come regularly, and either polycystic ovaries on a scan or a '
    + 'raised AMH. If you have irregular cycles and high androgens you do not need a scan at all. '
    + 'If it does turn out to be PCOS, letrozole rather than clomid is what the 2023 guideline '
    + 'recommends first for ovulation, which is worth knowing because it is still used off label in '
    + 'a lot of places and you may have to ask for it.',
  thyroid: 'An under or over active thyroid changes cycles and is found with a blood test, which '
    + 'is one of the first things worth asking for when cycles go irregular. It is common, it is '
    + 'treatable, and it is easy to miss because the symptoms look like ordinary exhaustion.',
  track: 'The first day of each period is the one thing that matters most, because the gap between '
    + 'them is what tells a provider whether this is irregular or just varied. Flow, pain and any '
    + 'bleeding between periods are worth a line too. You do not need to track your temperature '
    + 'unless somebody has asked you to.',
  tests: 'Both of you, at the same time. For him a semen analysis, which is quick and cheap and '
    + 'involved in roughly half of cases. For you, bloods across the cycle, thyroid, and usually a '
    + 'look at whether the tubes are open. A workup that tests only you first is a workup that '
    + 'wastes months.',
  diet: 'Honestly? Weaker than you will be told. The systematic review of the Mediterranean pattern '
    + 'and assisted reproduction found half the studies showed an association and half showed '
    + 'nothing, and graded nearly all of them low quality. All of it observational. It is a good '
    + 'way to eat for other reasons, and it is not the thing standing between you and a pregnancy.',
  supps: 'Folic acid is the one that is not in doubt. Vitamin D if you are actually low. '
    + 'Everything else, including CoQ10 and DHEA, is sold with far more confidence than the trials '
    + 'support. Cheap and harmless ones are a reasonable personal choice. None of them is a reason '
    + 'to wait longer before being seen.',
  no: 'That is completely fine. It is on your cycle page whenever you want it.',
};

/* The spread between her shortest and longest cycle that counts as
   worth mentioning. Matches the threshold the cycle screen already
   uses, so the app never says steady in one place and irregular in
   another. */
export const REPRO_IRREGULAR_SPREAD = 8;
export const REPRO_IRREGULAR_MIN_CYCLES = 3;

/* cycleStats reports the number of gaps it measured as `cycles`. This
   read it as `count` and so always saw zero, which meant the irregular
   trigger could never fire and Willow would have stayed silent for
   exactly the person she was built for. Caught by the test that
   checked a 14 day spread actually set the nudge. */
export function reproIrregular(stats) {
  if (!stats) return false;
  const n = Number(stats.cycles != null ? stats.cycles : (stats.count || stats.n || 0));
  const spread = Number(stats.spread);
  if (!isFinite(spread) || n < REPRO_IRREGULAR_MIN_CYCLES) return false;
  return spread >= REPRO_IRREGULAR_SPREAD;
}

/* 12 months, or 6 from 35. Takes her own age so the app never quotes
   the wrong threshold at somebody. */
export function reproTtcThresholdMet(ttcLengthId, ageYears) {
  const row = TTC_LENGTHS.filter((t) => t.id === ttcLengthId)[0];
  if (!row) return false;
  const limit = (Number(ageYears) >= 35) ? 6 : 12;
  return row.months >= limit;
}

export function reproPageFor(id) {
  return REPRO_PAGES[id] || null;
}

export function reproTicked(rep) {
  const r = (rep && typeof rep === 'object') ? rep : {};
  return REPRO_CONDITIONS.filter((c) => r[c.id]);
}

export function reproFixesFor(id) {
  return REPRO_FIXES[id] || [];
}

function reproFixRow(id, fixId) {
  return reproFixesFor(id).filter((f) => f.id === fixId)[0] || null;
}

/* Whether the fix row should show at all. A condition that is behind
   her gets asked what was done about it; tubes tied is itself the
   operation, so it is always asked. */
export function reproAsksFix(c, r) {
  if (!c || !r || !r[c.id]) return false;
  if (c.fixAlways) return reproFixesFor(c.id).length > 0;
  return c.when === true && r[c.id + ':when'] === 'past' && reproFixesFor(c.id).length > 0;
}

/* ONE LINE PER THING SHE HAS TOLD IT.

   Read back in her own order of importance: what it is, then the
   detail that changes the advice, then whether it is behind her. The
   point is that she can look at the top of the screen and see the app
   has actually kept all of it. */
export function reproLine(c, rep) {
  const r = (rep && typeof rep === 'object') ? rep : {};
  if (!c || !r[c.id]) return '';
  const bits = [];
  if (c.stages) {
    const st = ENDO_STAGES.filter((x) => x.id === r[c.id + ':stage'])[0];
    if (st) bits.push(st.id === 'unknown' ? 'not staged' : st.label.toLowerCase());
  }
  if (c.sides) {
    const sd = HYDRO_SIDES.filter((x) => x.id === r[c.id + ':side'])[0];
    if (sd) bits.push(sd.label.toLowerCase());
  }
  if (c.months) {
    const tl = TTC_LENGTHS.filter((x) => x.id === r[c.id + ':length'])[0];
    if (tl) bits.push(tl.label.toLowerCase());
  }
  const fx = reproFixRow(c.id, r[c.id + ':fix']);
  if (fx) bits.push(fx.short || fx.label.toLowerCase());
  if (c.when && r[c.id + ':when'] === 'past' && !fx) bits.push('dealt with');
  return c.label + (bits.length ? ', ' + bits.join(', ') : '');
}

export function reproSummary(rep) {
  return reproTicked(rep).map((c) => reproLine(c, rep)).filter(Boolean);
}

/* A CONSEQUENCE THE APP SHOULD ACTUALLY KNOW.

   With both tubes gone, IUI cannot work, because IUI puts sperm in the
   womb rather than past a blockage. Telling somebody who has had a
   bilateral salpingectomy to consider IUI would be worse than saying
   nothing, so every page that mentions it checks this first. */
export function reproTubesGone(rep) {
  const r = (rep && typeof rep === 'object') ? rep : {};
  if (r.tied && r['tied:fix'] === 'removed') return true;
  if (r.hydro && r['hydro:fix'] === 'removed' && r['hydro:side'] === 'both') return true;
  return false;
}

export const REPRO_TUBES_GONE =
  'You have recorded that both tubes are gone. IUI puts sperm into the womb rather than past a '
  + 'blockage, so it is not a route that can work, and IVF is the one that bypasses the tubes '
  + 'entirely. Nothing here about IUI applies to you.';

/* What a page says differently once the thing is behind her. */
export const REPRO_PAST_NOTE = {
  hydro: 'You have recorded this as dealt with. Everything below about treating it first is the '
    + 'reason that mattered, and it is the part you have already done.',
  endo: 'You have recorded this as dealt with. Endometriosis can come back after surgery, so this '
    + 'is still worth knowing rather than closed.',
  fibroids: 'You have recorded this as dealt with.',
  thyroid: 'You have recorded this as treated. Thyroid levels are worth rechecking in pregnancy '
    + 'even when they have been stable.',
};

export const REPRO_SOURCES = [
  { org: 'International PCOS Guideline 2023',
    label: 'Diagnosis, letrozole first line, and inositol as experimental therapy for fertility',
    url: 'https://www.monash.edu/__data/assets/pdf_file/0003/3371133/PCOS-Guideline-Summary-2023.pdf' },
  { org: 'ESHRE',
    label: 'Endometriosis, including that the stage predicts neither pain nor surgical complexity',
    url: 'https://www.eshre.eu/-/media/sitecore-files/Guidelines/Endometriosis/ESHRE-ENDOMETRIOSIS-patient-Guideline_21032022.pdf' },
  { org: 'Medicina, 2026 review',
    label: 'Hydrosalpinx before IVF, the outcome figures and the bilateral trade off',
    url: 'https://www.mdpi.com/1648-9144/62/10/1959' },
  { org: 'European Journal of Public Health',
    label: 'Mediterranean diet and assisted reproduction, the systematic review graded low quality',
    url: 'https://academic.oup.com/eurpub/article/35/5/960/8197054' },
  { org: 'Frontiers in Cell and Developmental Biology',
    label: 'Supplements and egg quality, including how thin the CoQ10 and DHEA evidence is',
    url: 'https://www.frontiersin.org/journals/cell-and-developmental-biology/articles/10.3389/fcell.2025.1619758/full' },
];

export const REPRO_DISCLAIMER =
  'Educational information, not a diagnosis and not medical advice. Everything here belongs in a '
  + 'conversation with a provider who can actually examine you and see your results.';

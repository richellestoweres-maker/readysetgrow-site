/**
 * Ready Set Grow: Birth
 * ==================================================================
 * Written from one message, which is worth keeping in full because
 * everything here answers a part of it:
 *
 *   "A lot of times they want to just break your water asap whether
 *   you are ready or not and a lot of times it leads you to a c
 *   section possibly emergency. It is called the bishop score and you
 *   need to be able to advocate for yourself or have someone there
 *   who will. There are also doulas and midwives and some people
 *   choose at home birth etc. Some want natural some want epidural
 *   and I think people need to know alllll of the information, all of
 *   what can and cannot go wrong etc, plus ripping vs episiotomy."
 *
 * THE HARDEST THING IN THIS FILE, AND WHY IT IS HANDLED THE WAY IT IS
 *
 * Half of that belief is right and half of it is not, and an app that
 * agreed with all of it would be lying to her, while an app that
 * corrected her would be useless.
 *
 * The practice is real. Breaking the waters early is routine, and the
 * most recent American guidance moved toward recommending it rather
 * than away. She is not imagining it.
 *
 * The consequence is not what she thinks. Sixteen randomised trials
 * covering three thousand three hundred and seventy eight people
 * found early breaking of the waters made no difference at all to the
 * caesarean rate. A separate analysis restricted to women whose
 * cervix had needed ripening first, which is exactly her scenario,
 * found the same. What early rupture does do is shorten labour by
 * about two and a half hours and raise infection in the womb by about
 * forty six percent.
 *
 * So this file says: the concern is real, the specific link is not
 * what the evidence shows, and here is the thing you may be sensing
 * instead. An induction cannot be declared failed until the waters
 * are broken, because the clock runs from there. That is a genuine
 * structural relationship and almost nobody is told about it.
 *
 * THE SECOND HARDEST THING
 *
 * The cascade of intervention is a real way of thinking and it is not
 * a proven mechanism. Some links hold up beautifully. Continuous
 * monitoring really does raise caesareans by about sixty three
 * percent without preventing cerebral palsy. Having somebody with you
 * the whole time really does cut caesareans by a quarter. Other
 * links, particularly the epidural one, do not survive contact with
 * randomised evidence at all. This file goes through them one at a
 * time and marks each one.
 *
 * THE RULES
 *
 * 1. Nothing here tells a woman what to choose. Every option gets
 *    what it gives her and what it costs her, and then it is hers.
 * 2. The two countries are separated wherever they disagree, and they
 *    disagree a lot: on the score before amniotomy, on home birth, on
 *    water birth, on when active labour starts, on episiotomy
 *    technique. An app that gave one answer would be wrong in one
 *    country.
 * 3. Whether this is a first baby is the organising fact for place of
 *    birth, and it is printed as two rows rather than a risk ratio,
 *    because that is the only way it reads honestly.
 * 4. Where the marketing is stronger than the evidence, this says so,
 *    including for the gentle sounding things. Hypnobirthing has one
 *    of the weakest evidence bases here and one of the loudest sales
 *    pitches.
 * 5. Nothing is attributed to ACOG that could not be read. Their site
 *    refuses automated reading. Where a claim rests on an ACOG
 *    document it is cited to a hosted copy and named by number and
 *    date, and their patient leaflets are not quoted at all.
 *
 * Checked September 2026. Sources in BIRTH_SOURCES.
 */

export const BIRTH_TITLE = 'Birth';

export const BIRTH_SUB = 'What each choice actually gives you and what it costs, who can be in the '
  + 'room, and what can go wrong. Written so that none of it is a surprise.';

export const BIRTH_TABS = [
  { id: 'yours', label: 'What you want' },
  { id: 'who', label: 'Who is with you' },
  { id: 'pain', label: 'Pain' },
  { id: 'body', label: 'Tearing and cutting' },
  { id: 'wrong', label: 'What can go wrong' },
];

export const BIRTH_HEAD = 'You are allowed to know all of it.';

export const BIRTH_INTRO = [
  'Most of what gets said about birth is said by somebody with a side. This page tries not to have '
  + 'one. Every option below comes with what it gives you and what it takes, including the gentle '
  + 'sounding ones, and nothing here tells you which to pick.',
  'It also does not soften the numbers. If you would rather not read the part about what can go '
  + 'wrong, it is the last tab and you can leave it there.',
];

/* ==================================================================
   WHAT YOU WANT

   The cascade, the honest version, and the preferences tool.
   ================================================================== */

export const CASCADE_TITLE = 'The cascade, and which parts of it are true';

export const CASCADE_INTRO = [
  'The idea is that one intervention leads to the next. It is not a medical term and no guideline '
  + 'body uses it. It comes from parent advocacy, and the best known page explaining it carries no '
  + 'citations at all.',
  'That does not make it wrong. Some of its links are real and well measured. Others do not survive '
  + 'contact with randomised evidence. Here they are one at a time, because being told the whole '
  + 'thing is true and being told the whole thing is nonsense are both unhelpful.',
];

export const CASCADE_LINKS = [
  {
    id: 'efm',
    claim: 'Being monitored constantly leads to more caesareans',
    verdict: 'holds',
    body: 'This is the strongest link in the chain and it is a good one. Thirteen trials covering '
      + 'more than thirty seven thousand women found continuous monitoring raised caesareans by '
      + 'about sixty three percent and instrumental births by about fifteen percent.',
    twist: 'It does do something real. It halves newborn seizures, on moderate quality evidence. '
      + 'What it does not do is reduce cerebral palsy, which is what it was introduced for, or '
      + 'deaths around birth. More than ninety nine percent of worrying traces come from babies who '
      + 'will not have cerebral palsy, and when four obstetricians were shown fifty traces they '
      + 'agreed with each other on twenty two percent of them.',
  },
  {
    id: 'epi',
    claim: 'An epidural leads to a caesarean',
    verdict: 'fails',
    body: 'Thirty three trials covering ten thousand three hundred and fifty women found no '
      + 'increase at all. This is the highest certainty finding in the whole epidural evidence base '
      + 'and it is the most repeated claim in cascade material.',
    twist: 'Where the belief comes from is real enough. Women who have epidurals do have more '
      + 'caesareans, in ordinary hospital figures. But long, hard, induced and high risk labours '
      + 'are both more likely to get an epidural and more likely to end in surgery. The comparison '
      + 'that answers the question is the randomised one, and it says no.',
  },
  {
    id: 'forceps',
    claim: 'An epidural leads to forceps',
    verdict: 'was',
    body: 'Across all the trials, yes, by about forty four percent. But restricted to trials from '
      + '2005 onward, when low dose epidurals became normal, the effect disappears.',
    twist: 'A trial of more than a thousand first time mothers compared the old high dose epidural '
      + 'with two low dose versions. Instrumental births were thirty seven percent with the old '
      + 'one and twenty eight to twenty nine percent with the new ones. Caesareans were about '
      + 'twenty eight percent in all three. So it was the dose, not the epidural, and it has '
      + 'largely been engineered away. The later analysis is a subgroup rather than the main '
      + 'result, so it is suggestive rather than settled.',
  },
  {
    id: 'water',
    claim: 'Breaking the waters leads to a caesarean',
    verdict: 'fails',
    body: 'Sixteen trials of early against late rupture during an induction found the caesarean '
      + 'rate identical. A separate analysis of four trials, in women who had all needed their '
      + 'cervix ripened first, found the same.',
    twist: 'Two honest qualifications. In labour that started on its own rather than being induced, '
      + 'routinely breaking the waters showed a twenty seven percent increase whose confidence '
      + 'interval only just touched no effect, and the review concluded it should not be routine. '
      + 'And early rupture does raise infection in the womb by about forty six percent. The harm is '
      + 'real. It is just a different harm.',
  },
  {
    id: 'ctg',
    claim: 'One thing really does put you on the path to the next',
    verdict: 'holds',
    body: 'Here is a chain that is written down in a national guideline rather than asserted. In '
      + 'Britain, having an epidural or being on the oxytocin drip are both listed as reasons to '
      + 'move you onto continuous monitoring. And continuous monitoring raises the caesarean rate '
      + 'by about sixty three percent.',
    twist: 'So the mechanism is real. It just runs through the monitor rather than through the '
      + 'epidural itself. Worth knowing, because it is a thing you can ask about.',
  },
  {
    id: 'support',
    claim: 'Having somebody with you the whole time reduces interventions',
    verdict: 'holds',
    body: 'Twenty four trials covering more than fifteen thousand women. Caesareans down about '
      + 'twenty five percent. Instrumental births down ten percent. Epidurals down seven percent. '
      + 'Negative feelings about the birth down thirty one percent.',
    twist: 'This is the cascade running backwards and it is the best evidenced thing on this entire '
      + 'page. It is also the only one that costs nothing medical. The certainty is rated low, '
      + 'because you cannot blind anybody to whether somebody is in the room, but the direction is '
      + 'consistent across every trial.',
  },
];

export const CASCADE_VERDICTS = {
  holds: 'The evidence supports this',
  fails: 'The evidence does not support this',
  was: 'It used to be true',
};

export const CASCADE_CLOSE = 'So it is a useful way of thinking rather than a proven mechanism. '
  + 'Some links are real and measured. The two most often repeated, that the epidural caused the '
  + 'caesarean and that breaking the waters caused the caesarean, are not what the trials show.';

export const CASCADE_STRUCTURE = {
  title: 'The part almost nobody is told',
  body: [
    'An induction cannot be called failed until your waters have been broken, because the clock '
    + 'that counts runs from the rupture. American guidance says the drip should run for at least '
    + 'twelve to eighteen hours after the waters go before anybody uses that word.',
    'So breaking the waters is not only a step in the induction. It is the step that makes it '
    + 'possible to declare the induction over. That is a real structural relationship, and it may '
    + 'be what people are half seeing when they say that breaking the waters led to the caesarean.',
  ],
};

/* THE PREFERENCES TOOL

   The evidence on written birth plans is thin and points at one
   thing: the benefit turns up where the plan was DISCUSSED with
   somebody, not where it was written and handed over. One review
   found that a plan written alone and then not followed left women
   less satisfied and feeling less in control than no plan at all, and
   another found that plans with a great many requests went with much
   lower satisfaction. So this is deliberately short, deliberately
   phrased as preferences rather than instructions, and every screen
   it appears on says the conversation is the point. */

export const PREF_TITLE = 'What matters to you';

export const PREF_INTRO = [
  'Not a birth plan, exactly. The research on those is thin, and what little there is points one '
  + 'way: the benefit shows up when the plan was talked through with a midwife or doctor, not when '
  + 'it was written alone and handed over at the door. One review found that women whose unspoken '
  + 'plan was not followed ended up less satisfied and feeling less in control than women who had '
  + 'no plan at all.',
  'So this is short on purpose. Pick what you actually have a view on, leave the rest, and take it '
  + 'to an appointment rather than to the hospital reception.',
];

export const PREF_ROWS = [
  {
    id: 'pain',
    q: 'Pain relief',
    options: [
      { v: 'epi', label: 'I want an epidural' },
      { v: 'none', label: 'I want to avoid one if I can' },
      { v: 'see', label: 'I want to decide in the moment' },
      { v: 'ask', label: 'Please do not offer, I will ask' },
    ],
  },
  {
    id: 'move',
    q: 'Moving about',
    options: [
      { v: 'up', label: 'I want to stay upright and moving' },
      { v: 'bed', label: 'I would rather be in the bed' },
      { v: 'see', label: 'Whatever feels right then' },
    ],
  },
  {
    id: 'mon',
    q: 'Monitoring',
    options: [
      { v: 'int', label: 'Listening in now and then if I am low risk' },
      { v: 'cont', label: 'Continuous is fine with me' },
      { v: 'ask', label: 'Tell me why before it changes' },
    ],
  },
  {
    id: 'water',
    q: 'Breaking my waters',
    options: [
      { v: 'ask', label: 'Ask me first and tell me my score' },
      { v: 'fine', label: 'Go ahead if you think it helps' },
      { v: 'late', label: 'I would rather wait as long as is safe' },
    ],
  },
  {
    id: 'cut',
    q: 'If a cut is being considered',
    options: [
      { v: 'ask', label: 'Tell me why, at the time' },
      { v: 'avoid', label: 'Only if there is a clear reason' },
      { v: 'fine', label: 'I trust your judgement' },
    ],
  },
  {
    id: 'who',
    q: 'Who is with me',
    options: [
      { v: 'partner', label: 'My partner' },
      { v: 'doula', label: 'A doula as well' },
      { v: 'family', label: 'Somebody from my family' },
      { v: 'alone', label: 'I would rather it was quiet' },
    ],
  },
  {
    id: 'after',
    q: 'Straight after',
    options: [
      { v: 'skin', label: 'Baby on my chest, cord left alone a minute' },
      { v: 'partner', label: 'My partner takes the baby first if I cannot' },
      { v: 'see', label: 'I have not thought about it yet' },
    ],
  },
  {
    id: 'caes',
    q: 'If it becomes a caesarean',
    options: [
      { v: 'gentle', label: 'Awake, partner in, baby on my chest in theatre' },
      { v: 'quiet', label: 'Keep it calm and tell me what is happening' },
      { v: 'see', label: 'I would rather not think about that' },
    ],
  },
];

export const PREF_CAESAREAN_NOTE = 'The one worth filling in even if you are sure it will not '
  + 'happen is the last one. Unexpected intervention is what most strongly goes with women feeling '
  + 'the birth went badly, and having said in advance what you would want in that room is the one '
  + 'thing that makes it less of a shock.';

export const PREF_SAVE_NOTE = 'Kept on this baby’s profile. Nothing about it is sent anywhere '
  + 'by the app.';

export const PREF_EMPTY = 'Nothing picked yet. Choose only what you have a view on.';

export const RIGHTS = {
  title: 'What you are entitled to, in their words',
  quotes: [
    { text: 'Recognise that women can decide to proceed with, delay, decline or stop an induction.',
      from: 'The British national guideline on inducing labour. The word almost nobody knows is in '
        + 'there is stop.' },
    { text: 'They can accept or decline care that is offered, can change their mind, and decisions '
        + 'they make will not affect how care is provided to them.',
      from: 'The British national guideline on care in labour. The second half of that sentence is '
        + 'the part worth holding on to.' },
    { text: 'The doctor is under a duty to take reasonable care to ensure that the patient is aware '
        + 'of any material risks involved in any recommended treatment, and of any reasonable '
        + 'alternative or variant treatments.',
      from: 'The UK Supreme Court in 2015, in a case brought by a mother whose son was injured '
        + 'during birth after she was not told about a risk. It changed the test from what doctors '
        + 'thought you needed to know to what you would want to know.' },
  ],
  note: 'American practice rests on the same principle through consent law and professional ethics '
    + 'rather than through a single quotable guideline sentence, and the relevant college documents '
    + 'could not be read to quote them here. The principle is not in doubt. The wording is.',
};

export const MISTREAT = {
  title: 'It does happen, and knowing that is not the same as expecting it',
  body: [
    'A United States survey of two thousand one hundred and thirty eight women found that about one '
    + 'in six reported at least one form of mistreatment. Being shouted at or scolded, eight and a '
    + 'half percent. Being ignored or getting no response to a request for help, nearly eight '
    + 'percent. Being threatened with or given treatment they had refused or not consented to, four '
    + 'and a half percent.',
    'It was not spread evenly. Fourteen percent of white women, twenty two and a half percent of '
    + 'Black women, twenty five percent of Hispanic women, nearly thirty three percent of '
    + 'Indigenous women. The strongest single association in the whole study was having a '
    + 'disagreement with the provider.',
    'A British charity survey of one thousand five hundred and eighty four women found that forty '
    + 'two percent reported something being done to them without consent, most often a vaginal '
    + 'examination and next most often an episiotomy.',
  ],
  caveat: 'Both of those were surveys people chose to take part in, and the second was run by a '
    + 'charity for women who had had traumatic births, so the true rates across everybody are '
    + 'almost certainly lower. What they establish is that it happens and that it happens often '
    + 'enough to matter, not how often it happens to you.',
  use: 'The reason it is here is not to frighten you. It is so that if it happens you know it was '
    + 'not normal and not your fault, and so that whoever is with you knows to speak up.',
};

/* ==================================================================
   WHO IS WITH YOU
   ================================================================== */

export const WHO_INTRO = 'Of everything on this page, this is the part with the best evidence and '
  + 'the least attention. Somebody staying with you the whole way through changes outcomes more '
  + 'reliably than most of the medical decisions further down.';

export const WHO_SUPPORT = {
  title: 'Somebody who does not leave',
  body: [
    'Twenty four trials, more than fifteen thousand women. Continuous support through labour was '
    + 'associated with caesareans down about a quarter, instrumental births down a tenth, any pain '
    + 'medication down a tenth, and negative feelings about the birth down about a third. Babies '
    + 'were less likely to have a low Apgar score at five minutes.',
    'The certainty is rated low, for an unavoidable reason: you cannot hide from anybody whether '
    + 'there is a person in the room. The direction was consistent across the trials all the same.',
  ],
  whoBest: 'The trials also compared who was doing the supporting. The effect on caesareans was '
    + 'largest when the support came from somebody who was neither hospital staff nor part of her '
    + 'own circle, which in practice means a doula. Caesareans fell about twenty eight percent with '
    + 'that kind of support against no measurable change with hospital staff. But for how she felt '
    + 'about the birth afterwards, her own mother, partner or friend did at least as well as a '
    + 'doula, and slightly better. Those subgroups rest on far fewer women than the main result, so '
    + 'read them as a hint rather than a finding.',
};

export const WHO_ROLES = [
  {
    id: 'partner',
    name: 'Your partner, your mum, your friend',
    what: 'Whoever you would want there at four in the morning.',
    does: 'The trials found that support from somebody already in your life produced the biggest '
      + 'improvement in how women felt about their births afterwards, better even than a doula. '
      + 'What it did not do on its own was change the caesarean rate.',
    worth: 'Give them a job. Knowing your Bishop score, remembering what you said you wanted, and '
      + 'asking the question you forget are all things a frightened person can do if you told them '
      + 'in advance that it was their job.',
  },
  {
    id: 'doula',
    name: 'A doula',
    what: 'Somebody trained to support you and only you, through pregnancy, the birth and the days '
      + 'after. Not a clinician.',
    does: 'Does not examine you, monitor the baby, give medicines, deliver the baby, or make '
      + 'decisions for you. Does not speak for you either, which surprises people. The job is to '
      + 'help you speak for yourself and to keep you comfortable while you do it.',
    worth: 'In the United States, doula care is not a licensed profession and anybody may use the '
      + 'title, so ask who trained them and what they have attended. Typical private cost runs '
      + 'about one thousand to fifteen hundred dollars with a much wider range either side. As of '
      + 'March 2026, twenty six states and Washington DC cover doula care through Medicaid, up from '
      + 'twelve states two years earlier, so it is worth checking again even if you checked '
      + 'recently.',
  },
  {
    id: 'midwife',
    name: 'A midwife',
    what: 'A clinician who leads normal pregnancy and birth care.',
    does: 'Seventeen trials covering more than eighteen thousand women compared midwife continuity '
      + 'of care with other models. Spontaneous vaginal births up slightly, caesareans down about '
      + 'nine percent, instrumental births down about eleven percent, episiotomies down about '
      + 'seventeen percent, and women generally reported better experiences.',
    worth: 'One correction worth having, because it is repeated everywhere. The older version of '
      + 'that review found midwife led care cut premature birth by about a quarter. The 2024 '
      + 'update, with more trials, no longer finds that. Premature birth came out the same in both '
      + 'groups. Most websites still quote the old figure.',
  },
];

/* This one is lifted out of the midwife block and given its own
   heading, because it is the single most widely repeated wrong number
   in this whole subject. Almost every site still quotes the 2016
   figure. Burying a correction inside a collapsed card is not
   correcting anything. */
export const WHO_PRETERM = {
  title: 'One number almost every other site still gets wrong',
  body: [
    'You will read, in a great many places, that midwife led care reduces premature birth by about '
    + 'a quarter. That came from the 2016 version of the review and it was rated high certainty at '
    + 'the time.',
    'The 2024 update, with more trials and nearly nineteen thousand women, no longer finds it. '
    + 'Premature birth came out the same in both groups. The mortality signals in the older version '
    + 'went the same way.',
    'The other findings held up. Fewer caesareans, fewer instrumental births, probably fewer '
    + 'episiotomies, better reported experiences. Those are the reasons that stand. The premature '
    + 'birth one is not.',
  ],
};

export const WHO_US_UK = {
  title: 'Midwives mean different things in the two countries',
  body: [
    'In Britain a midwife is one regulated profession with one register, a three year degree, and '
    + 'the lead role in every normal pregnancy on the NHS. Calling in a doctor is what happens when '
    + 'something changes.',
    'In America there are three credentials and they are not the same. A certified nurse midwife is '
    + 'a nurse with a graduate degree, can practise and prescribe in all fifty states, and mostly '
    + 'works in hospitals. A certified midwife has no nursing degree and is authorised in about ten '
    + 'states. A certified professional midwife trains by apprenticeship or portfolio, cannot '
    + 'prescribe, works almost entirely at home births and birth centres, and is not licensed in '
    + 'every state.',
    'That patchwork is worth understanding before you compare any British statistic about midwives '
    + 'with anything happening near you.',
  ],
};

export const PLACE_TITLE = 'Where';

export const PLACE_INTRO = 'This is the one decision where whether it is your first baby changes '
  + 'the answer completely. Not slightly. Completely. So the numbers below are printed as two rows '
  + 'rather than as one risk, because any other way of showing them misleads somebody.';

export const PLACE_SETTINGS = [
  { id: 'home', label: 'Home', short: 'Home' },
  { id: 'fmu', label: 'A midwife unit in its own building', short: 'Midwife unit, own building' },
  { id: 'amu', label: 'A midwife unit inside the hospital', short: 'Midwife unit, in hospital' },
  { id: 'ou', label: 'The hospital labour ward', short: 'Labour ward' },
];

/* Birthplace in England, 64,538 low risk women, as NICE prints it:
   serious problems for the baby per 1,000 births, by setting and by
   parity. The nulliparous home row is the entire point of the table
   and it is why the table is here rather than a sentence. */
export const PLACE_BABY = {
  title: 'Babies with a serious problem, per 1,000 births',
  first: { home: 9, fmu: 5, amu: 5, ou: 5 },
  later: { home: 3, fmu: 3, amu: 2, ou: 3 },
  says: 'If this is not your first baby, the four settings came out the same. If it is your first, '
    + 'the midwife units also came out the same as the hospital, and planned home birth was the one '
    + 'option carrying about four more serious problems per thousand. Both halves of that are true '
    + 'and both belong in front of you.',
};

export const PLACE_TRANSFER = {
  title: 'Transferred during labour or just after, per 1,000',
  first: { home: 450, fmu: 363, amu: 402, ou: 10 },
  later: { home: 115, fmu: 94, amu: 125, ou: 10 },
  says: 'A first time mother planning a home birth has close to a one in two chance of moving. That '
    + 'is not a failure, it is the safety mechanism working, but it is worth picturing in advance '
    + 'rather than in the moment.',
};

export const PLACE_INTERVENTION = {
  title: 'And the other side of the trade, first babies, per 1,000 women',
  rows: [
    { label: 'Birth without forceps, ventouse or surgery', home: 794, fmu: 813, amu: 765, ou: 688 },
    { label: 'Forceps or ventouse', home: 126, fmu: 118, amu: 159, ou: 191 },
    { label: 'Unplanned caesarean', home: 80, fmu: 69, amu: 76, ou: 121 },
    { label: 'Epidural or spinal', home: 218, fmu: 200, amu: 240, ou: 349 },
    { label: 'Episiotomy', home: 165, fmu: 165, amu: 216, ou: 242 },
  ],
  says: 'Midwife units, of either kind, gave first time mothers the same outcomes for the baby as '
    + 'the hospital with markedly fewer interventions. On this evidence they carry no measured '
    + 'trade at all, which makes them the least discussed option on the list.',
};

export const PLACE_US = {
  title: 'The American picture is different, and not for the reason you would guess',
  body: [
    'Do not read the British numbers across. An Oregon study of nearly three hundred and fifty '
    + 'thousand births found planned community birth carried higher odds of a low Apgar score and '
    + 'of needing help breathing, and lower odds of admission to the newborn unit. But the newest '
    + 'and largest analysis splits it: almost all of the elevated risk sat in the births that '
    + 'transferred. Births that stayed where they were planned did better than hospital births on '
    + 'most measures.',
    'The likely reason is not that American women are different. It is that British home birth '
    + 'midwives are employed by the same organisation as the hospital, with agreed transfer '
    + 'protocols and applied risk criteria, and most of America is not set up that way. American '
    + 'out of hospital birth also includes far more women outside recommended criteria, including '
    + 'breech babies, twins and previous caesareans.',
    'So the question that matters most for an American family planning a home birth is not whether '
    + 'home birth is safe in general. It is what the transfer plan is, how far the hospital is, and '
    + 'whether your midwife has a working relationship with it.',
  ],
};

export const PLACE_GUIDE = {
  title: 'What the two countries tell clinicians to say',
  uk: 'Explain that they may choose any birth setting, and support them in their choice wherever '
    + 'they choose to give birth. British guidance requires that a first time mother be told about '
    + 'the four in a thousand difference and then be supported in whatever she decides.',
  us: 'The American college holds that hospitals and accredited birth centres are the safest '
    + 'settings while affirming that each woman has the right to make an informed decision. It lists '
    + 'a baby in the wrong position, twins and a previous caesarean as reasons not to plan a home '
    + 'birth. Their own documents could not be read directly here, so that is reported from sources '
    + 'quoting them.',
};

export const PLACE_CENTRE = {
  title: 'What a birth centre does not have',
  body: 'No epidurals, no continuous monitoring, no drip to speed things up, no forceps, no theatre. '
    + 'Anybody who wants an epidural or develops a complication transfers. That is the design, not '
    + 'a shortcoming, and every accredited centre has to have a written transfer plan. Worth '
    + 'knowing before you picture the room.',
};

/* ==================================================================
   PAIN

   Every option, what it gives, what it costs. No preferred answer
   anywhere, because the strongest finding in the satisfaction
   literature is that which drug she picked is not what decides
   whether she looks back on it well.
   ================================================================== */

export const PAIN_INTRO = [
  'There is no right answer here and this page is not going to imply one. What predicts whether a '
  + 'woman looks back on her birth well turns out to be mostly not which method she chose. A review '
  + 'of a hundred and thirty seven studies found four things that override the rest: what she '
  + 'expected, how much support she had, the quality of her relationship with the people caring for '
  + 'her, and whether she was involved in the decisions.',
  'Worth knowing before you decide anything, because it means a firm plan you cannot keep to is '
  + 'itself a risk. Women whose births did not match what they expected reported lower satisfaction '
  + 'and, in two studies out of three, more symptoms of post traumatic stress. Having a preference '
  + 'is fine. Having a script is harder.',
];

export const PAIN_OPTIONS = [
  {
    id: 'epidural',
    name: 'Epidural',
    kind: 'drug',
    what: 'A fine tube is threaded into the space outside the spinal cord in your lower back and '
      + 'local anaesthetic and a small dose of an opioid are fed through it. It usually takes about '
      + 'twenty minutes to put in and about twenty minutes to work.',
    gives: 'By a long way the most effective pain relief there is. Women needing anything extra for '
      + 'pain dropped by about ninety percent compared with opioid injections, and satisfaction '
      + 'with pain relief was substantially higher.',
    costs: 'Low blood pressure, fever, difficulty passing urine, and weakness in the legs are all '
      + 'more common. Labour takes longer, the second stage by about fifteen minutes on average, '
      + 'and you are more likely to need the drip. Roughly one woman in eight finds it does not '
      + 'give enough relief and needs something else.',
    myth: 'It does not raise the caesarean rate. Thirty three trials, ten thousand three hundred '
      + 'and fifty women, no difference, and this is the highest certainty finding in the whole '
      + 'review. And it does not have to wait. Nine trials of fifteen thousand seven hundred and '
      + 'fifty two women found getting one early rather than late made no difference to caesareans, '
      + 'forceps or the baby, on high certainty evidence. The old advice to hold out until four '
      + 'centimetres has nothing behind it.',
    numbers: [
      'Blood pressure drops noticeably, about 1 in 50',
      'Not enough relief, needing something else, about 1 in 8',
      'A severe headache afterwards, about 1 in 100',
      'Temporary nerve damage, about 1 in 1,000',
      'Permanent nerve damage, about 1 in 13,000',
      'Severe injury including paralysis, about 1 in 250,000',
    ],
    numbersFrom: 'From the British obstetric anaesthetists’ own information card, which notes '
      + 'that published sources do not give precise figures for all of these.',
  },
  {
    id: 'fever',
    name: 'The epidural fever, since nobody mentions it',
    kind: 'note',
    what: 'Fifteen to twenty five percent of women with an epidural develop a fever. It is about '
      + 'three and a half times more common than without one.',
    gives: 'It is not an infection. It is a sterile inflammatory response, and the leading '
      + 'explanation involves the local anaesthetic interfering with an anti inflammatory signal in '
      + 'white blood cells.',
    costs: 'The problem is that nobody at the bedside can tell it apart from a real infection. So '
      + 'it can lead to antibiotics for you and blood tests for the baby. The evidence on how often '
      + 'that happens points upward but mostly does not reach significance, and there is no signal '
      + 'of actual infection in the babies.',
    myth: 'No single thing has been shown to prevent it. Lower dose helped a little until the '
      + 'weaker trials were removed. Paracetamol beforehand did not. Antibiotics did not.',
  },
  {
    id: 'gas',
    name: 'Gas and air',
    kind: 'drug',
    what: 'Half nitrous oxide and half oxygen, breathed through a mouthpiece you hold yourself. It '
      + 'reaches your brain in under a minute and wears off in under five. You control it entirely.',
    gives: 'Real but mild pain relief, and something else that matters more than the pain scores '
      + 'suggest. Around ninety percent of women rate it highly, and when asked why they name '
      + 'control, staying mobile, feeling less frightened, and the pain mattering less rather than '
      + 'hurting less.',
    costs: 'Nausea, in up to forty six percent. Dizziness, drowsiness, a feeling of being less '
      + 'aware. Nothing lasting, and no significant effect found on the baby’s Apgar scores.',
    myth: 'It is not an alternative to an epidural and the figures are blunt about that. Between '
      + 'forty and sixty percent of women who start with gas go on to have an epidural, and when '
      + 'asked why, ninety six percent said it was not helping enough. Only about a third of women '
      + 'using it alone called the relief good.',
    where: 'Universal in Britain, where national guidance requires it to be available in every '
      + 'birth setting and around half to sixty percent of women use it. In America it has gone '
      + 'from a handful of hospitals in 2011 to many hundreds, but it is still patchy and '
      + 'concentrated in larger and teaching hospitals. Ask yours.',
  },
  {
    id: 'opioid',
    name: 'Pethidine, diamorphine, morphine',
    kind: 'drug',
    what: 'An injection into a muscle or a vein, giving relief over a few hours.',
    gives: 'Some. After seventy trials and more than eight thousand women, the honest summary from '
      + 'the reviewers was that they appear to provide some relief but that substantial proportions '
      + 'of women still reported moderate or severe pain.',
    costs: 'Drowsiness, nausea and vomiting. The evidence quality throughout is low to very low, '
      + 'and the trials comparing them with nothing at all rested on fifty and a hundred and '
      + 'sixteen women.',
    myth: 'No clear evidence of harm to the newborn was found, and no good evidence that any one of '
      + 'them beats another. If somebody tells you one is much better than the others, that is not '
      + 'coming from the trials.',
  },
  {
    id: 'waterp',
    name: 'Being in water',
    kind: 'soft',
    what: 'A pool or a deep bath during the first stage.',
    gives: 'This is the only drug free option with moderate certainty randomised evidence of '
      + 'reducing epidural use, and the reduction is about nine percent. Two thousand four hundred '
      + 'and thirty nine women across five trials.',
    costs: 'It did not change how the baby was born or the amount of perineal damage. No evidence '
      + 'of increased harm to mother or baby was found.',
    myth: 'Actually giving birth in the water, as opposed to labouring in it, rests on two small '
      + 'trials. No harm was found, but no harm found in two small trials is not the same as '
      + 'evidence of no harm. Britain supports labouring in water for healthy women and treats '
      + 'birth in water as reasonable with care; American guidance is more cautious about the birth '
      + 'itself. Their document could not be read to quote it.',
  },
  {
    id: 'move',
    name: 'Staying upright and moving',
    kind: 'soft',
    what: 'Walking, leaning, swaying, a ball, anything other than lying down, during the first '
      + 'stage.',
    gives: 'Twenty five trials, more than five thousand women. First stage about eighty minutes '
      + 'shorter, caesareans down about twenty nine percent, epidural use down about nineteen '
      + 'percent.',
    costs: 'Nothing measured. But the trial quality was variable and there is an obvious catch: a '
      + 'woman coping well is more able to stay on her feet, so some of this may be running '
      + 'backwards.',
    myth: 'Once you have an epidural, first stage position made no measurable difference to any of '
      + 'these. That is the same review saying it.',
  },
  {
    id: 'massage',
    name: 'Massage and counterpressure',
    kind: 'soft',
    what: 'Firm pressure on the lower back or hips, usually from whoever is with you.',
    gives: 'The largest pain intensity effect of any drug free method in the reviews, from six '
      + 'trials and three hundred and sixty two women. Single trials also found less anxiety and a '
      + 'greater sense of control.',
    costs: 'Nothing. But the certainty is low, it cannot be blinded, and whether it reduces the '
      + 'need for actual pain relief is not established.',
    myth: 'Reflexology gets bundled in with this and should not be. There are no trials of its '
      + 'effectiveness in labour at all.',
  },
  {
    id: 'tens',
    name: 'TENS',
    kind: 'soft',
    what: 'Pads on your back giving small electrical pulses, controlled by a handset.',
    gives: 'Very little, on the pain scores. Seventeen trials found little difference from control, '
      + 'except when the pads were placed at acupuncture points, where fewer women reported severe '
      + 'pain.',
    costs: 'Nothing. No adverse events were reported in any trial.',
    myth: 'And yet most women who used it said they would use it again. That is the honest shape of '
      + 'this one: it probably does not do much for pain, it definitely does not hurt you, and '
      + 'plenty of women like having it. On the NHS you buy or hire it yourself.',
  },
  {
    id: 'hypno',
    name: 'Hypnobirthing',
    kind: 'soft',
    what: 'Self hypnosis and relaxation techniques taught antenatally.',
    gives: 'Nine trials, two thousand nine hundred and fifty four women. Use of any pain relief '
      + 'fell by about twenty seven percent, on very low certainty evidence.',
    costs: 'Money and time, and the risk that comes with any firm expectation.',
    myth: 'Read the last two sentences again. The reduction was in any pain relief, driven by gas '
      + 'and injections, and there was no clear difference in epidural use at all. There was also '
      + 'no difference in satisfaction with pain relief, and none in sense of coping, which are the '
      + 'two things it is usually sold on. This is the widest gap on this page between how strong '
      + 'the evidence is and how confident the marketing is. British guidance says not to offer it '
      + 'and to support the choice of any woman who wants it, which is about right.',
  },
  {
    id: 'sterile',
    name: 'Sterile water injections',
    kind: 'soft',
    what: 'Four tiny injections of sterile water just under the skin of the lower back, for back '
      + 'pain in labour.',
    gives: 'British guidance now recommends offering these for back pain, on evidence of benefit '
      + 'from ten minutes to about two hours. The older review was unconvinced.',
    costs: 'They sting sharply for twenty or thirty seconds and that is the one consistently '
      + 'reported adverse effect. Nothing enters your bloodstream and no effect on the baby was '
      + 'found.',
    myth: 'They do not reduce your chance of needing an epidural, or a caesarean, or forceps. They '
      + 'are for the back pain and nothing else.',
  },
];

export const PAIN_KINDS = {
  drug: 'Medicine',
  soft: 'Without medicine',
  note: 'Worth knowing',
};

export const PAIN_POSITION = {
  title: 'Where to be when you push, which reverses depending on the epidural',
  noEpi: {
    title: 'Without an epidural',
    body: 'Thirty trials, nine thousand women. Upright positions, including kneeling, squatting, a '
      + 'birth stool and all fours, gave about twenty five percent fewer forceps and ventouse '
      + 'births and about twenty five percent fewer episiotomies. They also gave about forty eight '
      + 'percent more blood loss over five hundred millilitres, and possibly more second degree '
      + 'tears. For the severe tears, the evidence was too uncertain to say anything.',
    note: 'The second stage was about six minutes shorter, which is nothing, so the common claim '
      + 'that upright births are quicker is not what the trials found.',
  },
  epi: {
    title: 'With an epidural, and this is the surprising one',
    body: 'Eight trials, four thousand four hundred and sixty four women. Pooled together, no '
      + 'difference. But restricted to the trials at low risk of bias, upright positions '
      + 'significantly increased operative birth and caesarean, on high quality evidence. About '
      + 'twenty five more caesareans per thousand women.',
    note: 'So the advice flips. Upright helps if you do not have an epidural. Lying on your side '
      + 'may be better if you do. British guidance still encourages upright with an epidural, which '
      + 'sits awkwardly with this, and it is worth knowing both exist.',
  },
};

export const PAIN_PUSH = {
  title: 'When to push, if you have an epidural',
  body: 'A trial of two thousand four hundred and fourteen first time mothers compared pushing '
    + 'straight away with waiting. Waiting did not increase the chance of a straightforward vaginal '
    + 'birth at all, and it added about half an hour to the second stage, slightly more infection '
    + 'and slightly more heavy bleeding. British guidance still allows waiting one to two hours. '
    + 'The two are genuinely in tension.',
};

export const PAIN_ROOM = {
  title: 'The room itself, which sounds soft and is not',
  body: [
    'Ten randomised trials covering eleven thousand seven hundred and ninety five women compared '
    + 'ordinary delivery rooms with home like birth rooms in the same hospitals. Epidural use fell '
    + 'about twenty percent. Use of the drip to speed labour fell about twenty three percent. '
    + 'Episiotomies fell about seventeen percent. The chance of rating the care very positively '
    + 'nearly doubled. No safety penalty was found.',
    'That is a randomised finding about furniture and lighting, and it is stronger than the '
    + 'evidence for several things sold much harder. It is also something you can ask about: does '
    + 'this hospital have a birth room, and can I use it.',
  ],
  honest: 'The usual explanation, that fear releases hormones that oppose the ones driving labour, '
    + 'is plausible and mostly comes from animal studies. The outcome is randomised. The mechanism '
    + 'is an inference. Both of those are worth saying.',
};

/* ==================================================================
   TEARING AND CUTTING

   Her words were ripping versus episiotomy. The popular answer,
   never let them cut you, is an over correction from a real
   historical wrong, and getting it right matters because the one
   situation where a cut genuinely helps is also the frightening one.
   ================================================================== */

export const TEAR_INTRO = [
  'This is the part most people are most frightened of and least told about, which is a bad '
  + 'combination. So here it is plainly, including the numbers that are not reassuring.',
  'The short version: almost everybody having a first vaginal birth has something. Most of it is '
  + 'small and heals. The severe kind happens to about six in a hundred first time mothers, and '
  + 'the biggest thing that changes that number on the day is not whether you were cut, it is '
  + 'whether forceps were used.',
];

export const TEAR_DEGREES = [
  {
    id: 'first', label: 'First degree',
    what: 'The skin of the perineum or the lining of the vagina only. No muscle.',
    fix: 'Often left alone if it is not bleeding and the edges sit together. If it is repaired, '
      + 'either stitches or surgical glue, in the room, with local anaesthetic or none. Glue is '
      + 'faster and hurts less.',
  },
  {
    id: 'second', label: 'Second degree',
    what: 'Into the muscle of the perineum, but not the muscle that controls your bottom.',
    fix: 'Stitched in the room, usually with local anaesthetic or a working epidural, in three '
      + 'layers. One useful detail: the skin layer is often deliberately left unstitched, because '
      + 'stitching it is associated with more perineal pain three months later.',
  },
  {
    id: 'third', label: 'Third degree',
    what: 'Into the ring of muscle around the anus. Graded by how much: 3a is less than half the '
      + 'outer muscle, 3b is more than half, 3c means the inner muscle is torn as well. 3c is not '
      + 'simply deeper than 3b, it is a different muscle, and it is the one that holds continence '
      + 'at rest.',
    fix: 'Repaired in an operating theatre, under a spinal or epidural, by somebody trained for it. '
      + 'Antibiotics and laxatives afterwards. Both colleges agree the two repair techniques give '
      + 'equivalent results, so nobody is doing it the wrong way.',
  },
  {
    id: 'fourth', label: 'Fourth degree',
    what: 'Through the anal muscles and into the lining of the back passage itself.',
    fix: 'Theatre, as above. The lining is repaired first, then the muscles.',
  },
];

export const TEAR_OASI = 'Third and fourth degree together are called OASI, which stands for '
  + 'obstetric anal sphincter injury. If somebody says that word to you, that is what it means, and '
  + 'you are entitled to ask whether it was 3a, 3b, 3c or fourth. It will be written in your notes.';

export const TEAR_RATES = {
  title: 'How common, honestly',
  items: [
    'Something, for a first vaginal birth: up to about nine in ten women have a graze, a tear or a '
    + 'cut. An intact perineum was about one in ten in one British hospital dataset and about one '
    + 'in three in a Swedish one, which tells you how much it varies by where you are and by what '
    + 'gets counted.',
    'Severe tearing, first baby: about six in a hundred. A British national survey covering nearly '
    + 'four hundred and seventy thousand births in 2024 and 2025 found six point four percent.',
    'Severe tearing, later babies: about one to two in a hundred.',
    'Second degree tears, which is the commonest outcome by a distance: about fifty six percent of '
    + 'first time mothers and thirty four percent of those who have given birth before.',
  ],
  rose: 'Recorded severe tearing in England tripled between 2000 and 2012, from one point eight to '
    + 'five point nine percent among first time mothers. The authors concluded the most likely '
    + 'explanation is that a standard way of classifying tears was introduced and people started '
    + 'finding them. That is not the whole story though. Since 2009, after the classification was '
    + 'already embedded, first time mothers’ odds rose a further fifteen percent, alongside a '
    + 'rise in forceps use.',
  ethnic: 'Both British and American data show higher rates of severe tearing among Asian women, '
    + 'roughly double. The largest recent study, of six hundred and fifty thousand births in '
    + 'California, found the rate ranged from three point four to fifteen point two percent across '
    + 'different Asian groups, and concluded that social factors such as where a woman was born, '
    + 'her education and her insurance explained more of the difference than clinical ones. Nobody '
    + 'has established why. It is worth raising rather than worth a theory about anatomy, because '
    + 'the evidence points at care rather than at bodies.',
};

export const TEAR_FORCEPS = {
  title: 'The number that matters most on the day',
  body: [
    'Compared with all vaginal births, forceps without a cut raised the odds of a severe tear by '
    + 'about six and a half times. Forceps with a correctly angled cut raised them by about one '
    + 'and a third.',
    'Ventouse without a cut, about one and nine tenths. Ventouse with a cut, about half, which is '
    + 'to say lower than average.',
  ],
  says: 'So this is where the popular advice goes wrong. For an ordinary birth a cut is not better '
    + 'than a tear. For a forceps birth the cut makes a very large difference, and British guidance '
    + 'says it should be considered.',
};

export const EPIS_TITLE = 'Cutting';

export const EPIS_BODY = [
  'An episiotomy is a cut made from the opening of the vagina to make more room. Where it is '
  + 'angled is the whole argument. A midline cut goes straight back towards the anus and is common '
  + 'in America. A mediolateral cut goes off at an angle away from the midline, usually to the '
  + 'right, and is standard in Britain.',
  'A cut pointing straight at the muscle you do not want torn is more likely to extend into it. '
  + 'Both colleges recommend the angled kind where a cut is needed, on observational evidence and '
  + 'on anatomy rather than on a head to head trial.',
  'The angle matters and so does when it is measured. British guidance says sixty degrees from the '
  + 'midline while the perineum is stretched, because tissue that is cut at sixty degrees while '
  + 'stretched retracts towards the midline afterwards. Cut at forty degrees while stretched and '
  + 'you have effectively made a midline cut. The other British guideline says forty five to sixty, '
  + 'so even they do not fully agree.',
];

export const EPIS_EVIDENCE = {
  title: 'Routine cutting was abandoned, and rightly',
  body: [
    'Twelve trials, six thousand one hundred and seventy seven women, comparing a policy of cutting '
    + 'routinely with cutting only when there is a reason. Cutting only when needed produced about '
    + 'thirty percent fewer severe tears, on low certainty evidence.',
    'What the review showed more convincingly is the absence of everything routine cutting was '
    + 'supposed to deliver. No reduction in severe trauma, no clear benefit for pain, no difference '
    + 'in painful sex at six months or more, no difference in urinary incontinence, no benefit to '
    + 'the baby.',
    'The reviewers’ own words are that believing routine episiotomy reduces damage is not '
    + 'justified by current evidence.',
  ],
  careful: 'One thing that gets misread constantly. That review compared two policies across whole '
    + 'populations. It is not a trial of cutting against tearing in one particular woman, and it '
    + 'cannot tell you what will happen to you.',
};

export const EPIS_RATES = 'In Britain about forty five percent of first time mothers have an '
  + 'episiotomy and about seven percent of those who have given birth before. American rates are '
  + 'much lower, in the single digits nationally, although among first births in Californian data '
  + 'they ran between thirteen and nineteen percent. The two are not comparing like with like, '
  + 'because British cuts are angled and many American ones are midline.';

export const EPIS_HONEST = {
  title: 'So is a tear better than a cut',
  yes: [
    'For a straightforward birth, generally yes. Most spontaneous tears are first or second degree, '
    + 'and a good many women have only a graze or nothing. An angled cut is by design at least as '
    + 'deep as a second degree tear, because it goes through the muscle. A policy of cutting turns '
    + 'a population where many women would have had something small into one where all of them have '
    + 'a muscle deep wound.',
  ],
  no: [
    'For a forceps birth, the cut lowers the risk of severe tearing a great deal, and that is the '
    + 'clearest case for one.',
    'If the baby needs to be born now, the cut is about the baby, not about your perineum. That is '
    + 'a different decision entirely.',
    'A cut can still extend into a severe tear. It is not a guarantee.',
    'A cut placed too close to the midline loses its protection and may point at the very muscle it '
    + 'was meant to spare.',
  ],
  ask: 'Which makes the useful question not "will you cut me" but "why do you think a cut is needed '
    + 'right now, and at what angle".',
};

export const TEAR_REDUCE = [
  {
    id: 'compress', name: 'A warm compress while you push', strength: 'best',
    body: 'The best supported thing on this list. Severe tears down about fifty four percent, on '
      + 'moderate certainty evidence that survived a sceptical 2024 re review. Also a large '
      + 'reduction in pain. British guidance says to offer it, and you can ask.',
  },
  {
    id: 'massage2', name: 'Massage while you push', strength: 'maybe',
    body: 'The 2017 review found severe tears down about half. The 2024 update downgraded it to '
      + 'limited effectiveness on mostly low certainty evidence. Warm compress and massage together '
      + 'did reduce second degree tears. British guidance says consider it, and only if it is '
      + 'acceptable to you, which is a deliberately weaker phrasing than for the compress.',
  },
  {
    id: 'antenatal', name: 'Massaging the perineum yourself from about 35 weeks', strength: 'maybe',
    body: 'Four trials, nearly two and a half thousand women. Trauma needing stitches down about '
      + 'nine percent and episiotomy down about sixteen percent, mostly in women who had not given '
      + 'birth vaginally before. Pain at three months was lower, but only in women who had. Two or '
      + 'three minutes a day with a plain oil.',
    honest: 'The important caveat is that it did not reduce third or fourth degree tears. Its main '
      + 'measured effect is fewer cuts. That is worth having and it is not protection against the '
      + 'injury people are most afraid of.',
  },
  {
    id: 'hands', name: 'Hands on the perineum as the head is born', strength: 'contested',
    body: 'Recommended in Britain and part of the national care bundle. But the randomised evidence '
      + 'does not clearly show it reduces severe tears, and the 2024 review’s confidence '
      + 'interval spans both benefit and harm. Critics of the care bundle made exactly this point. '
      + 'Nobody should tell you it is proven.',
  },
  {
    id: 'slow', name: 'A slow, controlled birth of the head', strength: 'contested',
    body: 'Recommended, physiologically sensible, and what experienced midwives do. It has never '
      + 'been isolated and tested on its own, because in the trials it is tangled up with hands on. '
      + 'Plausible rather than proven.',
  },
  {
    id: 'pushstyle', name: 'Pushing how you feel like rather than to instruction', strength: 'weak',
    body: 'Despite how strongly this is taught, neither pushing spontaneously nor delaying pushing '
      + 'has been shown to reduce severe tears. The delayed pushing result is moderate certainty '
      + 'and essentially flat. Remember too that a longer second stage is itself a risk factor. '
      + 'Reviewers concluded your preference and comfort should guide it, since nothing has been '
      + 'shown better.',
  },
];

export const TEAR_STRENGTH = {
  best: 'Strong evidence',
  maybe: 'Some evidence',
  contested: 'Recommended, not proven',
  weak: 'Not shown to help',
};

export const TEAR_BUNDLE = {
  title: 'The care bundle, and the argument about it',
  body: [
    'Britain runs a four part programme: talk about it beforehand, hands on at the birth, an angled '
    + 'cut at sixty degrees where a cut is needed, and an examination including a rectal '
    + 'examination after every vaginal birth.',
    'Across fifty five thousand births it reduced severe tearing from three point three to three '
    + 'percent, which after adjusting for case mix was about a twenty percent reduction in odds. '
    + 'Caesareans and episiotomies did not rise.',
    'The criticism is worth knowing too. That is one fewer severe tear for roughly every three '
    + 'hundred and thirty three women. The 2014 review the bundle was built on was never published. '
    + 'The evidence for hands on is patchy and the sixty degree angle is not backed by high level '
    + 'evidence. And warm compresses, which have the strongest evidence of anything here, were left '
    + 'out of the bundle on the grounds that they could not be standardised.',
  ],
  consent: 'One useful thing the college says plainly: every part of the bundle is individually '
    + 'subject to your consent, and all of it should be discussed with you during pregnancy. '
    + 'Including the rectal examination.',
};

export const TEAR_AFTER = {
  title: 'Afterwards',
  items: [
    'After a cut, soreness for about two to three weeks, worst when walking and sitting.',
    'After a severe tear, about four to six weeks, and no strenuous activity in that time.',
    'Stinging when you pass urine is normal. Stitches irritating as they heal is normal.',
    'Sex when the stitches have healed, the bleeding has stopped and it feels right to you. There '
    + 'is deliberately no fixed number of weeks in the guidance.',
  ],
  warn: {
    title: 'Get it looked at if',
    items: [
      'The pain increases rather than settling',
      'There is a smell, new bleeding, or discharge like pus',
      'You feel generally unwell',
      'The wound looks like it is opening',
      'You are having any trouble controlling your bowels or wind',
      'You need strong painkillers, which usually means infection or a problem with the repair '
      + 'rather than ordinary healing',
    ],
  },
  followup: 'After a severe tear British guidance says you should be reviewed at six to twelve '
    + 'weeks, ideally by somebody who specialises in it, with physiotherapy offered. There is no '
    + 'American equivalent expectation, and access there mostly depends on insurance. Ask for the '
    + 'referral rather than waiting to be offered it.',
};

export const TEAR_LONG = {
  title: 'The long run, said straight',
  body: [
    'Six to eight in ten women have no lasting problems twelve months after a severe tear is '
    + 'repaired. Which means two to four in ten do, and that half of the sentence is almost never '
    + 'said. Most of those describe trouble holding wind, or needing to get to a toilet quickly, '
    + 'rather than loss of stool.',
    'Painful sex is more common after a severe tear, at three months, at twelve months and beyond. '
    + 'The studies behind that are observational and mostly did not measure how things were '
    + 'beforehand, so they are a signal rather than a proof.',
    'Having a second severe tear matters much more than having one. Reported rates of bowel '
    + 'problems were about twelve percent in women with no sphincter injury, twenty four percent '
    + 'after one, and thirty six percent after two.',
  ],
  next: 'About six in a hundred women with a previous severe tear have another one, which means '
    + 'about nine in ten do not. Two separate 2025 reviews both failed to show that a planned '
    + 'caesarean protects against bowel symptoms afterwards, and both said the evidence was too '
    + 'weak to settle it either way. British practice is to offer a caesarean if you have symptoms '
    + 'or abnormal tests; American practice is that a caesarean is reasonable if you ask. Either '
    + 'way the decision should follow an assessment rather than the label of last time.',
  noCut: 'And one clear negative finding: a preventive cut next time is not recommended. There is '
    + 'no evidence it helps.',
};

export const TEAR_TOLD = {
  title: 'Ask what happened to you',
  body: 'There is no published evidence on how often women are told what degree of tear they had, '
    + 'and no guidance requiring it that could be verified here. The absence is itself the point. '
    + 'Severe tears were being missed often enough that a national programme added a routine '
    + 'examination after every birth to find them, and up to twenty seven percent of first time '
    + 'mothers have a sphincter injury that was not diagnosed at the time.',
  ask: [
    'What degree of tear did I have, and if it was third, was it 3a, 3b or 3c?',
    'Did I have a cut as well as a tear?',
    'Was a rectal examination done afterwards to check?',
    'Who repaired it, and was it in the room or in theatre?',
    'Have I been referred for physiotherapy, and to the perineal clinic?',
    'If I still have any leaking of wind or stool, or urgency, what happens next?',
    'What does this mean for a next birth, and can that go in my notes now?',
  ],
};

/* ==================================================================
   WHAT CAN GO WRONG

   She asked for all of what can and cannot go wrong. This tab exists
   because being handed a list of things nobody warned you about, in
   the middle of it happening, is worse than reading them in advance
   in your own time. It opens with the proportion so that nothing
   below reads as likely, and it is the last tab so that anybody who
   would rather not can leave it alone.
   ================================================================== */

export const WRONG_WARN = 'This tab has the numbers in it. There is nothing here you need to read '
  + 'to be safe, and plenty of people would rather not. It will keep.';

export const WRONG_PROPORTION = {
  title: 'Before any of it, the proportion',
  body: [
    'In Britain about one woman in seven thousand eight hundred who gives birth dies, and about one '
    + 'baby in two hundred and ten dies in the period around birth. In America about one woman in '
    + 'five thousand six hundred dies, and about one delivery in fifty six involves a serious '
    + 'complication for the mother.',
    'Nearly everything below is far more likely than any of that, and the manoeuvres, drugs and '
    + 'operations described are the reason.',
  ],
  unequal: 'It is not distributed evenly, and that is not a biological fact. In America in 2024 the '
    + 'maternal death rate was forty four point eight per hundred thousand for Black women against '
    + 'fourteen point two for white women, about three times. In Britain it was twenty eight point '
    + 'two against twelve point four, about two and a third times. Women in the most deprived areas '
    + 'of Britain died at nearly twice the rate of those in the least deprived. Both countries know '
    + 'this and neither has fixed it.',
};

export const WRONG_CAESAREAN = {
  title: 'Caesarean, and why first ones happen',
  why: [
    'Labour not progressing, about thirty five percent of first caesareans',
    'A worrying heart rate pattern, about twenty four percent',
    'The baby lying the wrong way, about nineteen percent',
    'Pre eclampsia, about three percent',
    'Twins or more, about three percent',
    'A baby thought to be very large, about three percent',
  ],
  says: 'So roughly six in ten first caesareans come down to two things, and both of them are '
    + 'judgement calls with soft edges. That is exactly why the American colleges set out to change '
    + 'the thresholds.',
  thresholds: [
    'Active labour now starts at six centimetres, not four. A great many women who would once have '
    + 'been called stuck are now simply still in early labour.',
    'Arrest in the first stage should not be called before six centimetres with waters broken and '
    + 'four hours of good contractions, or six hours of the drip without change.',
    'At least two hours of pushing for a woman who has given birth before, at least three for a '
    + 'first baby, and longer may be appropriate with an epidural or if the baby is facing the '
    + 'wrong way.',
  ],
  variation: 'One more figure worth carrying. In a study of more than ninety nine thousand births, '
    + 'the caesarean rate for low risk first time mothers varied enormously between hospitals. '
    + 'Where you give birth is one of the biggest single predictors, and that is not something about '
    + 'your body.',
};

export const WRONG_CATEGORIES = {
  title: 'Emergency, and what that word actually means',
  rows: [
    { n: '1', what: 'An immediate threat to the life of the mother or the baby',
      when: 'As soon as possible, and in most situations within thirty minutes',
      eg: 'A cord that has come down ahead of the baby, or a suspected rupture of the womb' },
    { n: '2', what: 'Mother or baby in difficulty, but not immediately life threatening',
      when: 'As soon as possible, and in most situations within seventy five minutes',
      eg: 'The placenta separating early without the mother being in shock' },
    { n: '3', what: 'No one in difficulty, but the baby needs to be born soon',
      when: 'Soon, without the rush', eg: 'A breech baby in early labour' },
    { n: '4', what: 'Timed to suit you and the hospital', when: 'Planned', eg: 'A breech baby not '
      + 'in labour' },
  ],
  note: 'Those times are audit targets, not a cliff you fall off. Guidance says plainly that rapid '
    + 'birth can itself be harmful in some circumstances. Being told thirty minutes and then taking '
    + 'thirty five does not mean something went wrong.',
  ga: 'The one practical thing to know in advance: with a spinal or epidural you are awake and your '
    + 'partner is with you. If there is no time and a general anaesthetic is needed, your partner '
    + 'is not normally in the room. The most frightening situation is the one where you are most '
    + 'likely to be alone, and knowing that beforehand is better than finding out then.',
};

export const WRONG_THEATRE = {
  title: 'What a caesarean is actually like',
  body: [
    'A catheter into the bladder and a drip in your arm beforehand. A spinal or an epidural, so you '
    + 'are awake. A screen across your middle so you cannot see.',
    'Between about six and ten people in the room, which startles everyone: the surgeon and an '
    + 'assistant, a scrub nurse, a theatre practitioner, an anaesthetist and their assistant, and '
    + 'somebody for the baby.',
    'The baby is out in five to ten minutes. You feel pulling and tugging and no pain. The whole '
    + 'operation takes about forty to fifty minutes, because most of it is closing. The catheter '
    + 'usually comes out twelve to eighteen hours later, once you can walk.',
  ],
  gentle: 'A gentle caesarean is a set of requests rather than a different operation: quiet in the '
    + 'room, your music, the cord left for at least thirty seconds, the baby onto your chest in '
    + 'theatre if you are both well, feeding started there, and no separation unless it is needed. '
    + 'The individual pieces are evidence based. The package has not been proven as a package, and '
    + 'the one real complication reported was babies getting cold, which a warming blanket fixed. '
    + 'Ask for it. It is reasonable.',
  risks: [
    'Infection of the womb lining afterwards, about 9 in 100, falling to about 4 in 100 with a '
    + 'vaginal wash before surgery',
    'Wound infection, about 7 in 100, falling to about 2 in 100 with an extra antibiotic',
    'A cut to the baby’s skin or a fracture, about 1 in 100',
    'Needing a blood transfusion, about 1 in 200 for a planned repeat',
    'Injury to bladder or bowel, about 1 in 200 to 1 in 300 for a planned repeat',
    'Hysterectomy, about 1 in 600 for a planned repeat',
    'The placenta growing into the scar next time, about 1 in 300 after one caesarean, rising to '
    + 'about 7 in 100 after five',
  ],
  unknown: 'Two honest gaps. The comparative risk of a planned caesarean against a planned vaginal '
    + 'birth is much less precisely known than parents are led to believe; the British evidence '
    + 'review behind the guideline rated it very low to low quality, all observational, and found '
    + 'no evidence at all on bladder injury. And the figures above do not separate planned from '
    + 'emergency, because a clean comparison could not be found.',
};

export const WRONG_INSTRUMENT = {
  title: 'Forceps and ventouse',
  body: [
    'Thirty one trials, five thousand seven hundred and fifty four women. Forceps were less likely '
    + 'to fail and to need a caesarean afterwards, and caused less injury to the baby. Ventouse '
    + 'caused less injury to the mother.',
    'Severe tearing was about eighty three percent more likely with forceps. Bruising on the '
    + 'baby’s head and small bleeds in the eye were more common with ventouse, both of which '
    + 'resolve. Apgar scores and cord acidity were the same.',
    'The certainty throughout is low. This is not a case where the evidence picks a winner, and in '
    + 'practice the choice comes down to the situation and to what the person holding them is best '
    + 'at, which is a reasonable basis.',
  ],
  theatre: 'If you are told the attempt will happen in theatre, it means the caesarean team is '
    + 'scrubbed and ready so that if it does not work nothing has to be moved. It is a sign of '
    + 'caution, not of something going wrong.',
  reassure: 'Worth knowing: the American consensus describes assisted vaginal birth as a safe and '
    + 'acceptable alternative to a caesarean. Many people assume forceps is the more dangerous '
    + 'option of the two, and that is not what the guidance says.',
};

export const WRONG_EVENTS = [
  {
    id: 'shoulder', name: 'Shoulder dystocia',
    rate: 'About 1 in 150 to 1 in 170 vaginal births',
    what: 'The baby’s head is born and a shoulder catches behind the pubic bone. The room fills '
      + 'quickly and somebody will ask you to pull your knees hard up to your chest.',
    does: 'That move, done first, works up to ninety percent of the time. Pressure just above the '
      + 'pubic bone is added if needed, then internal manoeuvres or rolling you onto all fours.',
    honest: 'It is very nearly unpredictable and that is the important part. Conventional risk '
      + 'factors predicted only sixteen percent of the cases that caused harm, and forty eight '
      + 'percent happened with babies under four kilograms. Nobody could have seen it coming and '
      + 'nobody did anything wrong.',
    after: 'A stretch injury to the nerves in the arm happens in about two to sixteen percent of '
      + 'these births. Fewer than one in ten of those leaves any permanent problem.',
  },
  {
    id: 'pph', name: 'Heavy bleeding afterwards',
    rate: 'Over 500 ml is called minor, over 1,000 ml major',
    what: 'Four causes, and they are taught as four words: tone, meaning the womb not clamping '
      + 'down; tissue, meaning something left behind; trauma, meaning a tear; and thrombin, meaning '
      + 'the blood not clotting properly.',
    does: 'Massage of the womb, emptying the bladder, then drugs to make the womb contract, then a '
      + 'balloon inflated inside it, then surgical options. The injection you are offered as the '
      + 'baby is born is the main prevention.',
    honest: 'That injection is near universal and the evidence for it is weaker than you would '
      + 'expect. Pooled trials suggested a large reduction in severe bleeding but were rated very '
      + 'low quality, and in women at low risk of bleeding the difference was uncertain. It also '
      + 'comes with more vomiting, more afterpains and, if the cord is clamped early to give it, '
      + 'about a hundred grams less blood for the baby. You can ask about it rather than just '
      + 'receiving it.',
    after: 'Tranexamic acid, given if bleeding starts, was tested on twenty thousand and sixty '
      + 'women. It did not change the main outcome. It did reduce death from bleeding, by an amount '
      + 'that only just reached significance, and clearly more so when given within three hours.',
  },
  {
    id: 'cord', name: 'Cord prolapse',
    rate: 'About 1 to 6 in 1,000 births, a little over 1 in 100 with a breech baby',
    what: 'A loop of cord slips down ahead of the baby when the waters go, and can be squashed.',
    does: 'This is the textbook reason for the fastest kind of caesarean. Somebody will hold the '
      + 'baby up off the cord and you will be moved very quickly.',
    honest: 'It is largely prevented by choosing the moment: a head that is not engaged, an unknown '
      + 'position or an unstable lie are all reasons not to break the waters. That is why asking '
      + 'whether the head is engaged is a good question.',
  },
  {
    id: 'rupture', name: 'The womb tearing',
    rate: 'About 1 in 5,000 to 7,000 births overall. Without a previous caesarean, 1 in 10,000 to '
      + '25,000',
    what: 'The scar from a previous caesarean gives way during labour.',
    does: 'An immediate caesarean. About one in three of these ends in a hysterectomy.',
    honest: 'For a woman labouring after one previous caesarean the risk is about one in two '
      + 'hundred overall, and what changes it most is how labour starts. Spontaneous labour, about '
      + 'zero point one five to zero point four percent. Induced, zero point five to one point four '
      + 'percent. Induced with prostaglandin, about zero point eight seven percent; induced with a '
      + 'balloon, about zero point two nine percent. That difference between the two ways of '
      + 'inducing is one of the most useful numbers in this whole app.',
  },
  {
    id: 'afe', name: 'Amniotic fluid embolism',
    rate: 'About 2 in 100,000 births in Britain, about 2 to 8 in 100,000 in America',
    what: 'A sudden, catastrophic reaction during or just after birth. It is the one on this page '
      + 'that cannot be predicted, screened for or prevented.',
    does: 'Full resuscitation, blood products, and often an emergency operation.',
    honest: 'Risk factors exist but none of them make it foreseeable in any individual woman. It is '
      + 'here because leaving it out would make this page dishonest, and it is mentioned with the '
      + 'absolute numbers rather than the survival rates, because in a population of a hundred '
      + 'thousand women giving birth, about two will have one.',
  },
];

export const WRONG_VBAC = {
  title: 'Giving birth after a caesarean',
  body: [
    'About seventy two to seventy five percent of planned vaginal births after a caesarean succeed. '
    + 'If you have also given birth vaginally before, especially after a caesarean, about eighty '
    + 'five to ninety percent.',
    'The least favourable combination, which is an induced labour, no previous vaginal birth, a BMI '
    + 'over thirty and a first caesarean for labour not progressing, succeeds about forty percent '
    + 'of the time.',
    'The risk of the scar giving way is about one in two hundred overall. Estimates range from '
    + 'about one in two hundred to about one in a hundred depending on the study and on how labour '
    + 'starts.',
  ],
  calc: 'If somebody puts your numbers into a calculator, know this. The original American '
    + 'calculator, published in 2007, included race, and it lowered the predicted success for Black '
    + 'and Hispanic women. For one worked example the prediction was forty eight percent with race '
    + 'included and sixty five percent without. It was revised in 2021 to remove race. If you were '
    + 'given a number before then, it may have been seventeen points too low. A calculator is not a '
    + 'verdict, and how well the new version predicts is not yet established.',
};

export const WRONG_GOOD = {
  title: 'And the things that are simply good',
  items: [
    {
      name: 'Leaving the cord alone for a minute or more',
      body: 'Fifteen trials, three thousand nine hundred and eleven women. Clamping early leaves '
        + 'the baby with about a hundred grams less blood, lower haemoglobin in the first two days, '
        + 'and about two and a half times the chance of iron deficiency at three to six months. It '
        + 'does not increase your bleeding. The genuine trade is jaundice: babies whose cords were '
        + 'clamped early needed light treatment less often.',
    },
    {
      name: 'The baby on your skin straight away',
      body: 'Sixty nine trials, over seven thousand pairs. About seventy five percent of babies who '
        + 'had early skin to skin were exclusively breastfeeding at one month against about fifty '
        + 'five percent who did not, with benefits also for temperature, blood sugar, breathing and '
        + 'heart rate. This can happen in theatre during a caesarean too.',
    },
    {
      name: 'Eating and drinking',
      body: 'Five studies, three thousand one hundred and thirty women. Restricting food and drink '
        + 'made no difference to caesareans, to assisted births or to the baby. The reviewers said '
        + 'there is no justification for restriction in women at low risk. British guidance says '
        + 'drink when thirsty, isotonic drinks may help more than water, and a light diet is fine '
        + 'unless you have had opioids or something changes that makes a caesarean more likely.',
    },
    {
      name: 'The golden hour',
      body: 'Worth a note of honesty. There is no trial of the golden hour as such. The evidence '
        + 'behind it is the skin to skin evidence, the cord clamping evidence and not being '
        + 'separated. Which is plenty. It is just not a studied thing in its own right.',
    },
  ],
};

export const BIRTH_DISCLAIMER = 'Educational information, not medical advice, and not a substitute '
  + 'for the people looking after you. Numbers are from published trials and national guidelines '
  + 'and describe groups of people, not you. Where Britain and America differ, both are given.';

export const BIRTH_SOURCES = [
  { org: 'Cochrane', label: 'Continuous support for women during childbirth, the best evidenced thing here',
    url: 'https://www.cochrane.org/evidence/CD003766_continuous-support-women-during-childbirth' },
  { org: 'Cochrane', label: 'Midwife continuity of care, the 2024 update that changed the headline',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38597126/' },
  { org: 'Cochrane', label: 'Epidurals for pain relief in labour',
    url: 'https://www.cochrane.org/evidence/CD000331_epidurals-pain-relief-labour' },
  { org: 'NIH', label: 'Early against late epidural, fifteen thousand women, high certainty',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10726979/' },
  { org: 'Cochrane', label: 'Continuous monitoring against listening in, the strongest cascade link',
    url: 'https://portaldeboaspraticas.iff.fiocruz.br/wp-content/uploads/2018/06/Alfirevic_et_al-2017-.pdf' },
  { org: 'Cochrane', label: 'Immersion in water during labour and birth',
    url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD000111.pub4/abstract' },
  { org: 'Cochrane', label: 'Hypnosis for pain management, including what it did not find',
    url: 'https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD009356.pub3/abstract' },
  { org: 'Cochrane', label: 'Position in the second stage without an epidural',
    url: 'https://www.cochrane.org/evidence/CD002006_position-second-stage-labour-women-without-epidural-anaesthesia' },
  { org: 'Cochrane', label: 'Position in the second stage with an epidural, which reverses it',
    url: 'https://www.cochrane.org/evidence/CD008070_maternal-position-second-stage-labour-epidural-anaesthesia' },
  { org: 'Cochrane', label: 'Selective against routine episiotomy',
    url: 'https://www.cochrane.org/evidence/CD000081_selective-versus-routine-use-episiotomy-vaginal-birth' },
  { org: 'Cochrane', label: 'Perineal techniques in the second stage, the 2024 re review',
    url: 'https://www.cochrane.org/evidence/CD016148_perineal-techniques-during-second-stage-labour-reducing-perineal-trauma-and-postpartum' },
  { org: 'Cochrane', label: 'Antenatal perineal massage',
    url: 'https://www.cochrane.org/evidence/CD005123_antenatal-perineal-massage-reducing-perineal-trauma' },
  { org: 'Cochrane', label: 'Instruments for assisted vaginal birth, 2021',
    url: 'https://www.cochrane.org/evidence/CD005455_instruments-assisted-vaginal-birth' },
  { org: 'Cochrane', label: 'Eating and drinking in labour',
    url: 'https://www.cochrane.org/evidence/CD003930_eating-and-drinking-labour' },
  { org: 'Cochrane', label: 'Alternative against conventional birth rooms, the randomised furniture finding',
    url: 'https://www.cochrane.org/evidence/CD000012_alternative-versus-conventional-institutional-settings-birth' },
  { org: 'BMJ', label: 'Birthplace in England, sixty four thousand women, place of birth by parity',
    url: 'https://www.bmj.com/content/343/bmj.d7400' },
  { org: 'NICE', label: 'Intrapartum care, NG235, including the right to decline and change your mind',
    url: 'https://www.nice.org.uk/guidance/ng235' },
  { org: 'NICE', label: 'Caesarean birth, NG192, the four urgency categories',
    url: 'https://www.nice.org.uk/guidance/ng192' },
  { org: 'NICE', label: 'Fetal monitoring in labour, NG229',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK589158/' },
  { org: 'RCOG', label: 'Third and fourth degree tears, Green top 29',
    url: 'https://www.rcog.org.uk/media/5jeb5hzu/gtg-29.pdf' },
  { org: 'RCOG', label: 'Reducing your risk of perineal tears, for parents',
    url: 'https://www.rcog.org.uk/for-the-public/perineal-tears-and-episiotomies-in-childbirth/reducing-your-risk-of-perineal-tears/' },
  { org: 'RCOG', label: 'Shoulder dystocia, Green top 42',
    url: 'https://gynerisq.fr/wp-content/uploads/2013/12/2012-RCOG-dystocie-%C3%A9paules.pdf' },
  { org: 'RCOG', label: 'Birth after previous caesarean, Green top 45',
    url: 'https://www.rcog.org.uk/media/kpkjwd5h/gtg_45.pdf' },
  { org: 'ACOG', label: 'Safe prevention of the primary caesarean, 2014, confirmed 2019',
    url: 'https://ilpqc.org/ILPQC%202020+/PVB/Toolkit/NGACOG/ACOG%20Consensus%202014%20Confirmed%202019.pdf' },
  { org: 'ACOG', label: 'Intrapartum fetal heart rate monitoring, 2009, the false positive rate',
    url: 'https://mnhospitals.org/wp-content/uploads/Portals/Documents/patientsafety/Perinatal/3a_ACOG%20Bulletin%20106.pdf' },
  { org: 'CDC', label: 'Maternal mortality in the United States, 2024',
    url: 'https://www.cdc.gov/nchs/data/hestat/hestat113.htm' },
  { org: 'MBRRACE', label: 'Saving Lives, Improving Mothers’ Care 2025, the UK figures',
    url: 'https://www.npeu.ox.ac.uk/assets/downloads/mbrrace-uk/reports/maternal-report-2025/MBRRACE-UK%20Maternal%20Report%202025%20-%20%20Lay%20summary%20v1.0.pdf' },
  { org: 'NIH', label: 'Giving Voice to Mothers, mistreatment during childbirth in the United States',
    url: 'https://reproductive-health-journal.biomedcentral.com/articles/10.1186/s12978-019-0729-2' },
  { org: 'NHS', label: 'What happens during a caesarean',
    url: 'https://www.nhs.uk/tests-and-treatments/caesarean-section/what-happens/' },
  { org: 'WHO', label: 'Timing of cord clamping and what it does for the baby',
    url: 'https://www.who.int/tools/elena/review-summaries/cord-clamping--effect-of-timing-of-umbilical-cord-clamping-of-term-infants-on-maternal-and-neonatal-outcomes' },
];

export default BIRTH_TABS;

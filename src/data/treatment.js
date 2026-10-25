/**
 * Ready Set Grow: IVF, ICSI and IUI
 * ------------------------------------------------------------------
 * Built because she went through it. Bilateral salpingectomy for
 * bilateral hydrosalpinx, a son from IVF with ICSI, and embryos still
 * frozen. The gap she named is real: clinics explain the next
 * appointment and almost nobody explains the whole shape of it, so
 * people arrive at retrieval day not knowing what twilight sedation
 * is, and get an embryo report full of numbers and letters nobody
 * translates.
 *
 * WHERE THIS IS DELIBERATELY UNFLATTERING
 * Two things in here will contradict what a clinic may have said.
 * ICSI without a male factor does not improve live birth, and ASRM
 * says so plainly. PGT-A has not been shown to work as a universal
 * screen. Both are sold widely. Saying so is the point, and both are
 * written so that somebody who already had them does not read it as
 * having been conned: ICSI is the right answer for male factor and for
 * PGT-M, and PGT-A may help at 38 to 41.
 *
 * ON GRADES
 * The single most useful fact about embryo grading is that the inner
 * cell mass letter carries more weight than the number, and that a
 * C still becomes a baby about 28 percent of the time. People stare at
 * these reports for months. They deserve the real numbers.
 */

export const TX_TITLE = 'IVF, ICSI and IUI';
export const TX_SUB = 'The whole shape of it, not just the next appointment.';

export const TX_KINDS = [
  { id: 'ivf', label: 'IVF', blurb: 'Stimulation, retrieval, lab, transfer' },
  { id: 'iui', label: 'IUI', blurb: 'Timed insemination' },
];

/* ------------------------------------------------------------------
   THE IVF WALKTHROUGH
   ------------------------------------------------------------------ */
export const TX_IVF_STEPS = [
  {
    id: 'baseline', n: 1, label: 'Baseline', when: 'Day 2 or 3 of a period',
    what: 'Bloods and a scan to check nothing is already growing and the ovaries are quiet. Some '
      + 'protocols put you on the pill or an injection for a couple of weeks first.',
    note: 'A cyst at baseline can delay a cycle. It is common, it is not a failure, and it usually '
      + 'resolves on its own.',
  },
  {
    id: 'stim', n: 2, label: 'Stimulation', when: 'About 8 to 12 days',
    what: 'Injections, usually nightly, to grow many follicles at once instead of the one your body '
      + 'would pick. Often a second injection partway through to stop you ovulating early.',
    note: 'Bloating, tiredness and feeling emotional are the usual three. The needles are small and '
      + 'subcutaneous, which almost everybody finds easier than they feared.',
  },
  {
    id: 'monitor', n: 3, label: 'Monitoring', when: 'Every 2 or 3 days',
    what: 'Scans count and measure follicles, bloods track oestradiol. The dose gets adjusted off '
      + 'these numbers.',
    note: 'Follicle count is not egg count. Some follicles are empty and some hold an immature egg. '
      + 'Expect the final number to be lower than the scan suggested.',
  },
  {
    id: 'trigger', n: 4, label: 'The trigger', when: 'Exactly 34 to 36 hours before retrieval',
    what: 'One injection that finishes the eggs maturing. The timing is the most precise thing in '
      + 'the whole cycle.',
    note: 'Set two alarms. Taken late or missed, the eggs are not ready and the retrieval can be '
      + 'lost. This is the one instruction worth reading back to the nurse.',
  },
  {
    id: 'retrieval', n: 5, label: 'Retrieval', when: 'About 20 minutes',
    what: 'A needle guided by ultrasound through the vaginal wall into each ovary, draining the '
      + 'follicles. You are asleep.',
    note: 'See the retrieval day page for the anaesthetic and what afterwards feels like.',
  },
  {
    id: 'fert', n: 6, label: 'Fertilisation', when: 'That afternoon',
    what: 'Either conventional IVF, where eggs and sperm are put together, or ICSI, where one sperm '
      + 'is injected into each mature egg.',
    note: 'You get a fertilisation report the next morning. Not every egg is mature, and not every '
      + 'mature egg fertilises. Both drops are normal and neither is anybody\'s fault.',
  },
  {
    id: 'lab', n: 7, label: 'The lab days', when: 'Day 1 to day 5 or 6',
    what: 'Numbers fall at every stage. Eggs, then mature eggs, then fertilised, then dividing, then '
      + 'blastocysts. Most clinics call on day 1, day 3 and day 5.',
    note: 'The drop between day 3 and day 5 is the steepest and the most frightening. It is also the '
      + 'most normal part of the whole process.',
  },
  {
    id: 'transfer', n: 8, label: 'Transfer, or freeze', when: 'Day 5, or a later cycle',
    what: 'A catheter places one embryo in the womb. No anaesthetic, a full bladder, a few minutes. '
      + 'Many clinics freeze everything and transfer in a later, calmer cycle instead.',
    note: 'A freeze-all is often the better plan, not a setback. It avoids transferring into a body '
      + 'still full of stimulation hormones.',
  },
  {
    id: 'wait', n: 9, label: 'The wait', when: 'About 9 to 14 days',
    what: 'A blood test for hCG, the beta. Usually repeated 48 hours later to see whether it is '
      + 'rising properly.',
    note: 'Home tests can pick up a trigger shot still leaving your system and give a false positive. '
      + 'The beta is the one that counts.',
  },
];

export const TX_IVF_INTRO =
  'Numbers fall at every single stage, and nobody warns you how steeply. That is the shape of it, '
  + 'not a sign anything went wrong.';

/* ------------------------------------------------------------------
   RETRIEVAL DAY

   She named twilight anaesthesia specifically. Worth being precise,
   because "twilight" is a word patients are given and clinicians are
   not, and the difference matters when somebody is frightened.
   ------------------------------------------------------------------ */
export const TX_RETRIEVAL = {
  title: 'Retrieval day',
  head: 'What twilight actually means',
  rows: [
    { t: 'It is sedation, not general anaesthetic', s: 'solid',
      why: 'Usually monitored anaesthesia care, given by an anaesthetist through a drip, most often '
        + 'propofol. You are asleep and you will not remember it, but you are breathing on your own '
        + 'and there is no breathing tube. That is the difference from a general.' },
    { t: 'Nothing to eat or drink beforehand', s: 'solid',
      why: 'Usually from midnight. This is not fussiness: sedation with a full stomach risks '
        + 'aspiration. Eating will get your slot cancelled, so ask for the exact cut off time.' },
    { t: 'The procedure itself is about 20 minutes', s: 'solid',
      why: 'An hour or so in recovery afterwards, then home the same day. You cannot drive and you '
        + 'cannot be alone for the rest of it.' },
    { t: 'Bloating, cramping and spotting are expected', s: 'solid',
      why: 'The usual list is bloating, a feeling of fullness, cramps, spotting and constipation, '
        + 'mostly settling within a day. Paracetamol is usually enough.' },
    { t: 'You may not feel normal until your next period', s: 'decent',
      why: 'Which tends to arrive about 10 days later and is often heavier than usual. Feeling off '
        + 'for a fortnight is not a complication.' },
  ],
  ohss: {
    title: 'When to ring them, not wait',
    body: 'Ovarian hyperstimulation is the one real risk worth knowing the signs of.',
    signs: [
      'Putting on more than a pound in 24 hours',
      'Vomiting, or unable to keep fluids down',
      'Shortness of breath, or pain on breathing in',
      'Passing much less urine than usual',
      'A belly that is tight, swollen and painful rather than just bloated',
    ],
    close: 'Any of these is a phone call now rather than at the next appointment. It is treatable '
      + 'and it gets worse if left.',
  },
};

/* ------------------------------------------------------------------
   EMBRYO GRADING
   ------------------------------------------------------------------ */
export const TX_GRADE = {
  title: 'Embryo grading',
  head: 'What 4AA and 3BC actually mean',
  intro:
    'A blastocyst grade is a number and two letters, such as 4AA. The number is how expanded it is, '
    + 'the first letter is the inner cell mass, which becomes the baby, and the second is the '
    + 'trophectoderm, which becomes the placenta.',
  parts: [
    { k: 'The number, 1 to 6', v: 'How far the blastocyst has expanded. 3 is expanding, 4 is fully '
      + 'expanded, 5 is starting to hatch out of its shell, 6 has hatched.' },
    { k: 'First letter, the baby part', v: 'A is many tightly packed cells, B is fewer and looser, '
      + 'C is very few.' },
    { k: 'Second letter, the placenta part', v: 'A is many cells forming a neat layer, B is fewer, '
      + 'C is very few and uneven.' },
  ],
  rows: [
    { t: 'The first letter matters most', s: 'decent',
      why: 'In 10,482 single frozen transfers, inner cell mass grade was the strongest predictor of '
        + 'live birth: 54.6 percent for A, 41.3 percent for B, 28.5 percent for C.' },
    { t: 'A C grade still becomes a baby', s: 'decent',
      why: 'Roughly 28 percent of the time for an ICM of C, and about 33 percent for a '
        + 'trophectoderm of C. Lower is less likely, not hopeless, and plenty of people reading '
        + 'their report as a verdict are reading it wrong.' },
      { t: 'B and A placenta grades are about the same', s: 'decent',
      why: 'Trophectoderm A and B did not differ significantly in that study. Only C was lower.' },
    { t: 'Grading is a human eye, not a measurement', s: 'solid',
      why: 'Two embryologists grade the same embryo differently often enough that a single letter '
        + 'is not worth agonising over. It is used to choose the order of transfer, not to predict '
        + 'your child.' },
    { t: 'Grade is not the same as chromosomally normal', s: 'solid',
      why: 'A beautiful embryo can be aneuploid and an average one can be euploid. Morphology and '
        + 'genetics are two different things.' },
  ],
  ask: ['Which embryo are you transferring, and why that one first?',
    'What were the day 3 numbers as well as the day 5 grades?'],
};

/* ------------------------------------------------------------------
   ICSI
   ------------------------------------------------------------------ */
export const TX_ICSI = {
  title: 'ICSI',
  head: 'The right answer for some cycles, and sold for most',
  intro:
    'One sperm is injected directly into each mature egg, instead of letting eggs and sperm find '
    + 'each other. It was invented for male factor infertility and it transformed it.',
  rows: [
    { t: 'For male factor it is the treatment', s: 'solid',
      why: 'Low count, poor movement, poor shape, or sperm retrieved surgically. This is what it is '
        + 'for and it works.' },
    { t: 'Without a male factor it does not improve live birth', s: 'solid',
      why: 'ASRM: routine use of ICSI for nonmale factor infertility is not recommended. It is '
        + 'specifically not recommended for unexplained infertility, low egg yield, low reserve, '
        + 'older age, or PGT-A. Randomised trials in 2024 and 2025 found no difference, and two '
        + 'large population studies suggested non-indicated ICSI may do slightly worse.' },
    { t: 'It does raise fertilisation, which is not the same thing', s: 'solid',
      why: 'More eggs fertilise and total fertilisation failure is rarer. That is why it feels '
        + 'safer and why it is offered. It does not carry through to more babies.' },
    { t: 'It is the right call after a failed fertilisation', s: 'solid',
      why: 'Previous poor or no fertilisation with conventional IVF is a genuine indication, and so '
        + 'is PGT-M, where stray sperm would contaminate the test, and previously frozen eggs.' },
    { t: 'If you already had it, this is not a mistake you made', s: 'solid',
      why: 'Many clinics use ICSI as standard. The reason to know the evidence is the next cycle and '
        + 'the next invoice, not the last one.' },
  ],
  ask: ['Is ICSI indicated for us specifically, or is it your default?',
    'What does it add to the cost?'],
};

/* ------------------------------------------------------------------
   PGT-A
   ------------------------------------------------------------------ */
export const TX_PGT = {
  title: 'Genetic testing of embryos',
  head: 'Not proven as a test for everybody',
  intro:
    'PGT-A biopsies a few cells from the placenta part of a blastocyst and counts chromosomes. '
    + 'PGT-M is a different test, looking for one specific inherited condition.',
  rows: [
    { t: 'As a universal screen, it is not established', s: 'solid',
      why: 'ASRM: the value of PGT-A as a universal screening test for all patients undergoing IVF '
        + 'has not been demonstrated. The largest trial found cumulative live birth of 77.2 percent '
        + 'with it against 81.8 percent without.' },
    { t: 'It may help between 38 and 41', s: 'thin',
      why: 'One trial in that age band found higher live birth per transfer, 52.9 against 24.2 '
        + 'percent, but only 68 percent of the tested group reached a transfer at all. Most of the '
        + 'rest of the evidence is retrospective.' },
    { t: 'It can lead to discarding embryos that would have worked', s: 'solid',
      why: 'In one study about 1 in 6 embryos with reproductive potential would have been thrown '
        + 'away for mosaicism or a false aneuploid result. Mosaic embryos can implant and produce '
        + 'healthy babies.' },
    { t: 'Not for donor eggs, and not for male factor alone', s: 'solid',
      why: 'ASRM says the evidence argues against routine PGT-A in donor egg cycles, and that it '
        + 'should not be used for male factor alone or for advanced paternal age.' },
    { t: 'Per transfer looks better than per cycle, on purpose', s: 'solid',
      why: 'Testing removes embryos before transfer, so the ones left look better. Ask for live '
        + 'birth per cycle started, which is the number that includes the cycles that never reached '
        + 'a transfer.' },
  ],
  ask: ['What is your live birth per cycle started, with and without testing, at my age?',
    'What is your policy on mosaic embryos?'],
};

/* ------------------------------------------------------------------
   IUI
   ------------------------------------------------------------------ */
export const TX_IUI = {
  title: 'IUI',
  head: 'Simpler, cheaper, and worth knowing when to stop',
  intro:
    'Washed sperm is placed directly into the womb around ovulation, either on your natural cycle '
    + 'or with tablets or low dose injections to help you release an egg.',
  steps: [
    { k: 'Day 2 or 3', v: 'Baseline scan, and start letrozole or clomid if you are using them.' },
    { k: 'Around day 10 to 12', v: 'A scan to see how many follicles are growing and how big.' },
    { k: 'Trigger', v: 'An injection to time ovulation, or ovulation strips if it is unmedicated.' },
    { k: 'Insemination', v: 'A catheter, a few minutes, no anaesthetic, usually 24 to 36 hours '
      + 'after the trigger. Mild cramping and that is all.' },
    { k: 'Two weeks', v: 'Often progesterone support, then a test.' },
  ],
  rows: [
    { t: 'Roughly 10 to 20 percent a cycle under 35', s: 'decent',
      why: 'Falling to 8 to 12 percent at 35 to 37, 5 to 8 percent at 38 to 40, and under 5 percent '
        + 'over 40. Medicated cycles do better than natural ones.' },
    { t: 'Most of the success is in the first three cycles', s: 'decent',
      why: 'Around 88 to 90 percent of IUI pregnancies happen within three cycles and about 95 '
        + 'percent within four. After that each extra cycle adds very little.' },
    { t: 'Which is why there is a stopping point', s: 'decent',
      why: 'Commonly 3 to 4 cycles under 35, 2 to 3 at 35 to 37, 1 to 2 at 38 to 39, and going '
        + 'straight to IVF at 40 and over. Worth agreeing the number before you start, rather than '
        + 'deciding it one disappointed month at a time.' },
    { t: 'It needs at least one open tube', s: 'solid',
      why: 'IUI puts sperm in the womb, not past a blockage. With both tubes blocked or removed it '
        + 'cannot work, and IVF is the route.' },
  ],
  ask: ['How many cycles would you do before recommending IVF?',
    'Is this medicated or natural, and why?'],
};

/* ------------------------------------------------------------------
   LOGGING A CYCLE
   ------------------------------------------------------------------ */
export const TX_LOG_TITLE = 'Your cycle';
export const TX_LOG_SUB = 'Medications, appointments and numbers, in one place to take with you.';

export const TX_MED_COMMON = [
  'Gonal-F', 'Follistim', 'Menopur', 'Rekovelle', 'Cetrotide', 'Ganirelix', 'Orgalutran',
  'Ovidrel', 'Pregnyl', 'Lupron trigger', 'Progesterone in oil', 'Crinone', 'Utrogestan',
  'Estrace', 'Letrozole', 'Clomid', 'Metformin', 'Prednisolone', 'Aspirin', 'Clexane',
];

/* count is the question asked when logging it. unit is how the number
   reads back afterwards, because "Mature eggs, how many mature: 11"
   is the question still attached to its own answer. */
export const TX_MILESTONES = [
  { id: 'start', label: 'Started stimulation' },
  { id: 'trigger', label: 'Trigger shot', timed: true },
  { id: 'retrieval', label: 'Retrieval', count: 'Eggs retrieved', unit: 'eggs' },
  { id: 'mature', label: 'Mature eggs', count: 'How many were mature', unit: 'mature' },
  { id: 'fert', label: 'Fertilised', count: 'How many fertilised', unit: 'fertilised' },
  { id: 'day3', label: 'Day 3 report', count: 'How many still growing', unit: 'still growing' },
  { id: 'day5', label: 'Blastocysts', count: 'How many blastocysts', unit: 'blasts' },
  { id: 'frozen', label: 'Frozen', count: 'How many frozen', unit: 'frozen' },
  { id: 'transfer', label: 'Transfer' },
  { id: 'beta', label: 'Beta test', count: 'The hCG number', unit: 'hCG' },
];

export const TX_APPT_FIELDS = [
  { id: 'follicles', label: 'Follicles' },
  { id: 'e2', label: 'Oestradiol' },
  { id: 'lining', label: 'Lining, mm' },
];

export const TX_LOG_EMPTY = 'Nothing logged yet.';
export const TX_LOG_NONE = 'No cycle started. Start one to log medications and appointments.';
export const TX_START = 'Start a cycle';
export const TX_END = 'Close this cycle';
export const TX_ADD_MED = 'Log a medication';
export const TX_ADD_APPT = 'Log an appointment';
export const TX_ADD_MILE = 'Log a milestone';

/* ------------------------------------------------------------------
   WILLOW, ON A CYCLE

   Same rule as everywhere: she speaks when something happened, once
   each, and never otherwise.
   ------------------------------------------------------------------ */
export const TX_WILLOW = {
  started: {
    id: 'started',
    say:
      'You have started a cycle. One thing worth knowing before anything else: the numbers fall at '
      + 'every single stage, and steeply.\n\nFollicles are more than eggs. Eggs are more than mature '
      + 'eggs. Mature eggs are more than fertilised. And the drop between day 3 and day 5 is the '
      + 'steepest of all. None of that is a sign anything has gone wrong. It is simply the shape of '
      + 'the process, and knowing it in advance is the difference between a hard phone call and a '
      + 'frightening one.',
    offers: [
      { id: 'shape', label: 'Walk me through the whole thing' },
      { id: 'trigger', label: 'What about the trigger shot' },
      { id: 'supps', label: 'Should I be taking anything' },
      { id: 'no', label: 'Not now' },
    ],
  },
  trigger: {
    id: 'trigger',
    say:
      'You have logged the trigger. This is the most time critical instruction in the whole cycle: '
      + 'retrieval is 34 to 36 hours after it, and the eggs are not ready if it goes in late.\n\n'
      + 'Set two alarms. Read the time back to your nurse. And nothing to eat or drink from midnight '
      + 'before the retrieval, because sedation on a full stomach is the one thing that gets a slot '
      + 'cancelled.',
    offers: [
      { id: 'retrieval', label: 'What is retrieval day like' },
      { id: 'twilight', label: 'What is twilight sedation' },
      { id: 'no', label: 'Not now' },
    ],
  },
  retrieval: {
    id: 'retrieval',
    say:
      'Retrieval done. Bloating, cramping, spotting and constipation are all expected and usually '
      + 'settle within a day.\n\nThe one thing to watch for is hyperstimulation. Ring them, rather '
      + 'than waiting for the next appointment, if you put on more than a pound in a day, cannot '
      + 'keep fluids down, get short of breath, or are passing much less urine than usual. It is '
      + 'treatable and it gets worse if left.',
    offers: [
      { id: 'grades', label: 'Explain the embryo report' },
      { id: 'ohss', label: 'More on hyperstimulation' },
      { id: 'no', label: 'Not now' },
    ],
  },
};

export const TX_WILLOW_REPLIES = {
  shape: 'Baseline, then 8 to 12 days of injections, scans every 2 or 3 days, a trigger shot timed '
    + 'to the hour, retrieval under sedation about 36 hours later, fertilisation that afternoon, '
    + 'then calls on day 1, day 3 and day 5 as the numbers come down. Then either a transfer or a '
    + 'freeze-all, and a blood test about 9 to 14 days after. The full version with what each stage '
    + 'feels like is on the IVF page.',
  trigger: 'It finishes the eggs maturing and retrieval is 34 to 36 hours later, which is the '
    + 'tightest timing in the cycle. Late or missed and the eggs are not ready. Two alarms, and read '
    + 'the time back to the nurse rather than trusting the text message.',
  retrieval: 'About 20 minutes, asleep, a needle guided by ultrasound into each ovary. An hour in '
    + 'recovery, then home the same day. You cannot drive and should not be on your own. Expect '
    + 'bloating and cramps for a day or so, and to not feel quite right until your next period, '
    + 'which usually comes about 10 days later.',
  twilight: 'It is sedation rather than a general anaesthetic. An anaesthetist gives it through a '
    + 'drip, usually propofol. You are asleep and will not remember any of it, but you breathe on '
    + 'your own and there is no breathing tube. That is the whole difference, and it is why you are '
    + 'home the same day.',
  grades: 'A grade like 4AA is a number and two letters. The number is how expanded it is, the '
    + 'first letter is the part that becomes the baby, the second is the part that becomes the '
    + 'placenta. The first letter matters most: in a study of over 10,000 transfers, live birth was '
    + '54.6 percent for an A, 41.3 for a B and 28.5 for a C. A C is less likely, not hopeless.',
  ohss: 'Ring them now rather than waiting if you gain more than a pound in 24 hours, are vomiting '
    + 'or cannot keep fluids down, are short of breath, are passing much less urine, or your belly '
    + 'is tight and painful rather than just bloated. They will usually bring you in for a scan and '
    + 'bloods. It is treatable and it gets worse if left.',
  supps: 'Folic acid is the one that is not in doubt. Vitamin D if you are actually low. Everything '
    + 'else, including CoQ10, is sold with more confidence than the trials support. Important: tell '
    + 'the clinic everything you are taking, because some supplements affect bleeding or interact '
    + 'with the protocol, and a few clinics ask you to stop specific ones before retrieval.',
  no: 'Fine. It is all on the treatment pages whenever you want it.',
};

export const TX_SUPP_NOTE =
  'Tell your clinic everything you are taking. Some affect bleeding or interact with the protocol, '
  + 'and some clinics ask you to stop specific ones before retrieval.';

export const TX_SOURCES = [
  { org: 'ASRM, 2026 committee opinion',
    label: 'ICSI for nonmale factor indications, and that routine use is not recommended',
    url: 'https://www.asrm.org/practice-guidance/practice-committee-documents/intracytoplasmic-sperm-injection-for-nonmale-factor-indications-a-committee-opinion-2026/' },
  { org: 'ASRM, 2024 committee opinion',
    label: 'PGT-A, including mosaicism and embryos discarded that had potential',
    url: 'https://www.asrm.org/practice-guidance/practice-committee-documents/the-use-of-preimplantation-genetic-testing-for-aneuploidy-a-committee-opinion-2024/' },
  { org: 'Frontiers in Endocrinology',
    label: 'Blastocyst grading and live birth across 10,482 single frozen transfers',
    url: 'https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2021.621221/full' },
];

export const TX_DISCLAIMER =
  'Educational information, not medical advice. Your clinic\'s protocol and your own numbers always '
  + 'come first, and anything here that contradicts them is a question to ask, not an instruction.';

/**
 * Ready Set Grow: Induction, and the chart nobody shows you
 * ==================================================================
 * This file exists because of one sentence from the woman building
 * this app: "there is a chart you need to know for when your body is
 * ready before they break your water, and this is important
 * especially advocating for yourself. It took my body a longggg time
 * before my cervix was where it needed to be, but there is a chart
 * they are supposed to follow."
 *
 * She is right, and the chart has a name. It is the Bishop score.
 * Five things are felt at a vaginal exam, each is given points, and
 * the total out of thirteen is the number that decides what happens
 * next. It is written in her notes at almost every induction. Almost
 * nobody is told it exists, let alone what their own number is.
 *
 * THE FOUR RULES THIS FILE IS WRITTEN UNDER
 *
 * 1. The chart gets printed in full, exactly as the guideline prints
 *    it, including the two rows that stop at two points instead of
 *    three. Reproducing a scoring table wrong is worse than not
 *    reproducing it at all, so the blanks stay blank and the station
 *    scale problem is said out loud rather than quietly smoothed.
 *
 * 2. This is not anti induction. Induction saves babies. The evidence
 *    for offering it at forty one weeks is about as strong as
 *    obstetric evidence gets, and the one study that looked at
 *    whether an unready cervix should make anybody wait found the
 *    opposite of what everyone assumes. A low number is a reason to
 *    ripen first. It is not a reason to refuse.
 *
 * 3. A cervix that takes a long time is not a body failing. She said
 *    it took hers a long time, and the truthful answer is that the
 *    score was designed in 1964 on women who had already had babies,
 *    and that it is a weak predictor in everyone else. A two at
 *    thirty nine weeks predicts far less than it feels like it does.
 *
 * 4. Where the two countries disagree, both are printed. Britain
 *    makes the score a formal gate before the waters are broken and
 *    writes the numbers into national guidance. America does not.
 *    An app that told an American woman her hospital was breaking a
 *    rule would be arming her with something untrue, and she would
 *    find that out in the worst room to find it out in.
 *
 * WHAT IS DELIBERATELY NOT HERE
 * Doses to argue about. The drug amounts are named once so the words
 * are recognisable on a consent form, and nothing in this file is
 * written so that a woman can tell a midwife she is giving the wrong
 * amount. The point is questions, not corrections.
 *
 * Nothing is attributed to ACOG that could not be read. Their site
 * refuses automated reading, so where a claim rests on an ACOG
 * document it is cited to a hosted copy of that document and named
 * by its number and date, and their patient leaflets are not quoted
 * at all because they could not be opened.
 *
 * Checked September 2026. Sources in IND_SOURCES.
 */

export const IND_TITLE = 'Induction, and the chart';

export const IND_SUB = 'The five numbers that decide what happens next, what each one means, and '
  + 'what to ask before anybody breaks your water.';

export const IND_TABS = [
  { id: 'chart', label: 'The chart' },
  { id: 'ripen', label: 'Getting ready' },
  { id: 'water', label: 'Breaking the water' },
  { id: 'why', label: 'Why it is offered' },
  { id: 'ask', label: 'Asking for yourself' },
];

export const IND_HEAD = 'There is a chart. You are allowed to know your number.';

export const IND_INTRO = [
  'At almost every induction somebody puts a hand inside you and feels for five things. Each one is '
  + 'given points. The five add up to a number out of thirteen, and that number is what decides '
  + 'whether you are given something to soften the cervix first or whether they go straight to '
  + 'breaking your waters and starting the drip.',
  'It is called the Bishop score. It is in your notes. It is almost never said out loud, and you '
  + 'are allowed to ask for it in exactly those words.',
];

/* ==================================================================
   THE CHART

   Transcribed from Table 1 of ACOG Practice Bulletin 107, August
   2009, which is itself labelled as modified from Bishop EH, Pelvic
   scoring for elective induction, Obstetrics and Gynecology 1964.
   The same five factors carry into ACOG Clinical Practice Guideline
   number 9, July 2025.

   Two rows stop at two points. Position and consistency have no three
   point row in the original table and they have none here. Filling
   them in would change everybody's total.
   ================================================================== */

export const BISHOP_MAX = 13;

export const BISHOP_ROWS = [
  {
    id: 'dil',
    label: 'How open',
    term: 'Dilation',
    what: 'How far open the cervix is, in centimetres. Ten is fully open, which is the number '
      + 'people know from television. Before labour most people are closed or very nearly.',
    options: [
      { v: 0, label: 'Closed' },
      { v: 1, label: '1 to 2 cm' },
      { v: 2, label: '3 to 4 cm' },
      { v: 3, label: '5 to 6 cm' },
    ],
  },
  {
    id: 'eff',
    label: 'How thin',
    term: 'Effacement',
    what: 'How thin the cervix has drawn up, as a percentage. It starts thick, like the end of '
      + 'your nose, and has to shorten and thin out before it can open properly.',
    options: [
      { v: 0, label: '0 to 30 percent' },
      { v: 1, label: '40 to 50 percent' },
      { v: 2, label: '60 to 70 percent' },
      { v: 3, label: '80 percent' },
    ],
  },
  {
    id: 'sta',
    label: 'How low',
    term: 'Station',
    what: 'How far down the baby has come, measured against two bony points in your pelvis. Zero '
      + 'means level with them. Minus numbers are above, plus numbers are below.',
    options: [
      { v: 0, label: 'Minus 3' },
      { v: 1, label: 'Minus 2' },
      { v: 2, label: 'Minus 1 or zero' },
      { v: 3, label: 'Plus 1 or plus 2' },
    ],
  },
  {
    id: 'con',
    label: 'How soft',
    term: 'Consistency',
    what: 'How soft the cervix feels. Firm like the end of your nose, medium like your chin, soft '
      + 'like your lip. That is the comparison midwives actually use.',
    options: [
      { v: 0, label: 'Firm' },
      { v: 1, label: 'Medium' },
      { v: 2, label: 'Soft' },
    ],
  },
  {
    id: 'pos',
    label: 'Which way it points',
    term: 'Position',
    what: 'Which way the cervix is facing. Before labour it usually points backwards, towards your '
      + 'spine, and it swings forward as things get going.',
    options: [
      { v: 0, label: 'Pointing back' },
      { v: 1, label: 'In the middle' },
      { v: 2, label: 'Pointing forward' },
    ],
  },
];

export function bishopRow(id) {
  for (let i = 0; i < BISHOP_ROWS.length; i++) {
    if (BISHOP_ROWS[i].id === id) return BISHOP_ROWS[i];
  }
  return null;
}

/* Returns the total, or null if any of the five is unanswered, since
   a partial Bishop score is not a Bishop score and showing one as
   though it were a total would be actively misleading. */
export function bishopScore(marks) {
  const m = marks || {};
  let total = 0;
  for (let i = 0; i < BISHOP_ROWS.length; i++) {
    const v = m[BISHOP_ROWS[i].id];
    if (typeof v !== 'number') return null;
    total += v;
  }
  return total;
}

export function bishopHowMany(marks) {
  const m = marks || {};
  let n = 0;
  for (let i = 0; i < BISHOP_ROWS.length; i++) {
    if (typeof m[BISHOP_ROWS[i].id] === 'number') n += 1;
  }
  return n;
}

/* The three bands, and what each one means in practice. The wording
   is careful on purpose. Six or less is the number the trials used to
   mean an unfavourable cervix. More than eight is the number at which
   an induction behaves like labour that started on its own. Seven and
   eight sit in between and one large hospital calls that band
   intermediate rather than pretending it falls one side. */
export function bishopRead(total) {
  if (typeof total !== 'number') return null;
  if (total <= 6) {
    return {
      band: 'low', label: 'Six or less',
      says: 'This is the range the research calls an unfavourable cervix. It does not mean anything '
        + 'has gone wrong. It means the cervix has not started yet, and the usual next step is '
        + 'something to soften and open it before anything else happens.',
      uk: 'In Britain this is the number that says ripen first. National guidance offers a '
        + 'medicine or a balloon at six or less, not amniotomy and a drip.',
    };
  }
  if (total <= 8) {
    return {
      band: 'mid', label: 'Seven or eight',
      says: 'In between. Some places treat anything above six as ready to go. Others wait for eight '
        + 'before they expect an induction to behave like ordinary labour. This is the band where '
        + 'it is most worth asking what your hospital does and why.',
      uk: 'British guidance splits at six, so seven and eight sit on the ready side of the line '
        + 'there, and amniotomy with a drip would usually be offered.',
    };
  }
  return {
    band: 'ready', label: 'More than eight',
    says: 'At more than eight the chance of ending in a vaginal birth is about the same as it '
      + 'would be if labour had started by itself. This is the range the original 1964 paper had '
      + 'in mind.',
    uk: 'Well above the British threshold of six, so amniotomy and a drip would be the usual offer.',
  };
}

export const BISHOP_BLANKS = 'Two of the five stop at two points. Position and consistency have no '
  + 'three point row, and that is not a mistake in this app. It is how the original chart is '
  + 'printed. It is also why thirteen is the top and not fifteen.';

export const BISHOP_STATION = {
  title: 'The station numbers, which are genuinely confusing',
  body: [
    'The chart runs from minus three to plus three. But since 1988 American hospitals have charted '
    + 'station on a different scale that runs from minus five to plus five, so your notes can say '
    + 'minus four when the chart has no row for it.',
    'Almost everybody handles that by putting minus four and minus five in the minus three row. If '
    + 'your notes say a number the chart does not have, that is why, and it is worth asking which '
    + 'scale they wrote it on.',
  ],
};

export const BISHOP_FEEL = 'Two of the five, how soft and which way it points, are somebody’s '
  + 'judgement by hand. Two people examining you twenty minutes apart can write down different '
  + 'numbers, and one large hospital says so plainly on its own patient page. That is not '
  + 'carelessness. It is the limit of what a hand can tell you.';

export const BISHOP_ORIGIN = {
  title: 'Where the chart came from, which matters more than it sounds',
  body: [
    'Edward Bishop published it in 1964 after scoring five hundred women who then went into labour '
    + 'on their own. He proposed that an elective induction was safe at a score of nine or more.',
    'Two things about that. It was built on women who had already had a baby, and it was built for '
    + 'choosing who to induce for convenience. It was never designed to work out whether a first '
    + 'time mother with a medical reason to be induced should go ahead. Every modern use of it is '
    + 'a stretch from its original job.',
  ],
};

export const BISHOP_HONEST = {
  title: 'How good a predictor it actually is',
  body: [
    'Not very. A review of forty studies covering thirteen thousand seven hundred and fifty seven '
    + 'women concluded, in its own words, that the Bishop score is a poor predictor of the outcome '
    + 'of induced labour and should not be used to decide whether to induce or not.',
    'At the commonly used cutoff of six or less, it got it right about seventy eight percent of the '
    + 'time for the women who did need help, and only about forty four percent of the time for the '
    + 'women who did not. More than half of the women it labelled unfavourable went on to give '
    + 'birth vaginally anyway.',
    'ACOG’s own 2025 guideline says there is no universally accepted definition of an '
    + 'unfavourable cervix and that thresholds anywhere from three to eight have been used.',
  ],
  matters: 'So a low number is a plan, not a prophecy. It tells the room what to reach for first. '
    + 'It does not tell you how this ends.',
};

export const BISHOP_SIMPLE = {
  title: 'The short version of the chart',
  body: [
    'A study of five thousand six hundred and ten first time mothers found that dropping the two '
    + 'judgement calls, how soft and which way it points, and scoring only how open, how thin and '
    + 'how low, predicted just as well. That version runs from zero to nine and above five counts '
    + 'as favourable.',
    'The honest reading is not that the short version is better. It is that the two subjective '
    + 'rows were adding almost nothing.',
    'A later study of five thousand eight hundred and seven people found the short score is most '
    + 'useful measured after ripening and before the drip starts. Above five at that point went '
    + 'with an eleven percent caesarean rate. Five or under went with thirty two percent. If you '
    + 'are being ripened, the number worth asking for is the one after.',
  ],
};

export const BISHOP_LONG = {
  title: 'If your number is barely moving',
  body: [
    'A cervix that takes weeks is doing something ordinary. First babies take longer. The score is '
    + 'a snapshot of one afternoon and it can jump several points in a day once things start.',
    'Nobody should be telling you your body has failed at this. It has not. The chart is a tool for '
    + 'choosing what to use next, and a low number is exactly the situation the ripening methods on '
    + 'the next page were invented for.',
  ],
};

/* ==================================================================
   THE TRACKER

   Her own words were that it took a long time. A single number in a
   corridor tells you nothing. Four numbers over three weeks tell you
   whether anything is happening, and they are the thing to bring to
   the conversation about what to do next.
   ================================================================== */

export const IND_TRACK = {
  title: 'Your own numbers, over time',
  body: 'Ask for the five numbers at each check and put them here. One score on its own says very '
    + 'little. Three or four of them in a row show whether anything is moving, and that is the '
    + 'thing worth talking about.',
  ask: 'What were my five numbers today, and what is my Bishop score out of thirteen?',
  empty: 'Nothing recorded yet. Add a check after your next appointment.',
  privacy: 'Kept on this profile with everything else about the baby. Nothing about it is sent '
    + 'anywhere by the app.',
};

/* ==================================================================
   THE RULE, IN BOTH COUNTRIES
   ================================================================== */

export const IND_UK = {
  title: 'Britain writes the rule down',
  intro: 'The national guideline for inducing labour puts the score at the centre of the decision. '
    + 'These are its own recommendations, in its own words.',
  quotes: [
    'Explain to women that a vaginal examination to assess the readiness of the cervix, recorded as '
    + 'the Bishop score, will help to decide which method of induction they will be offered first, '
    + 'and obtain consent to carry this out.',
    'For women with a Bishop score of 6 or less, offer induction of labour with dinoprostone as '
    + 'vaginal tablet, vaginal gel or controlled release vaginal delivery system or with low dose '
    + 'oral misoprostol tablets.',
    'For women with a Bishop score of 6 or less, consider a mechanical method to induce labour, for '
    + 'example a balloon catheter or osmotic cervical dilator, if pharmacological methods are not '
    + 'suitable or the woman chooses to use a mechanical method.',
    'For women with a Bishop score of more than 6, offer induction of labour with amniotomy and an '
    + 'intravenous oxytocin infusion.',
  ],
  plain: 'Six or less, soften first. More than six, then break the waters and start the drip. That '
    + 'is the chart being followed, written out in four sentences.',
};

export const IND_US = {
  title: 'America does not, and you should know that before you quote anything',
  body: [
    'There is no American guideline that says a Bishop score has to be checked before your waters '
    + 'are broken. ACOG’s 2025 guideline on cervical ripening covers only pregnancies with the '
    + 'waters still intact and does not discuss breaking them at all. Their 2024 guideline on '
    + 'managing labour recommends breaking the waters during an induction to shorten it, and says '
    + 'nothing about a cervical threshold.',
    'The closest American wording is the older 2009 bulletin, which said breaking the waters may be '
    + 'used as a method of induction, especially if the condition of the cervix is favourable. That '
    + 'is a leaning, not a rule.',
    'So in America the chart is still used, still written in your notes and still the thing that '
    + 'decides whether you are ripened first. It is just not a rule anybody is breaking. Asking is '
    + 'still completely reasonable. Accusing is not, and it will cost you the room.',
  ],
};

/* ==================================================================
   RIPENING
   ================================================================== */

export const RIPEN_INTRO = 'If the number is low, the job is to soften and shorten the cervix '
  + 'before anything else. This is called ripening and it is a stage of its own, often taking most '
  + 'of a day or overnight. It is not the induction failing. It is the induction starting.';

export const RIPEN_METHODS = [
  {
    id: 'balloon',
    name: 'A balloon',
    also: 'Foley catheter, or a double balloon',
    how: 'A thin tube is passed through the cervix and a small balloon on the end is filled with '
      + 'about thirty millilitres of water. The gentle pressure opens the cervix from the inside. '
      + 'It usually falls out by itself once you are around three centimetres.',
    time: 'Often left for six to twelve hours. There does not seem to be a clear advantage to '
      + 'leaving it longer than six.',
    evidence: 'As effective as the gel for getting to a vaginal birth, with meaningfully fewer '
      + 'episodes of the uterus contracting too hard with changes to the baby’s heart rate, and '
      + 'fewer serious problems for the baby. It looks slightly less effective than oral '
      + 'misoprostol on the numbers.',
    worth: 'It has no drug in it, so if the thing you are worried about is the uterus being driven '
      + 'too hard, this is the one to ask about. You can also ask for it to be placed by hand '
      + 'rather than with a speculum. Studies found that more comfortable with no downside.',
  },
  {
    id: 'pess',
    name: 'A pessary or gel',
    also: 'Dinoprostone, Propess, Cervidil, Prostin',
    how: 'A hormone is placed in the vagina, either as a slow release insert on a tape or as a gel. '
      + 'It softens the cervix over hours.',
    time: 'The insert runs at the same rate in both countries but the licence differs. Twelve hours '
      + 'in America, twenty four in Britain. Worth knowing so a different number does not alarm you.',
    evidence: 'Recommended, on moderate quality evidence. Compared with misoprostol it was less '
      + 'likely to get to a birth within twenty four hours and more likely to need the drip as '
      + 'well.',
    worth: 'It comes out if your waters break or are broken, if labour gets going properly, or if '
      + 'the uterus starts contracting too hard. That is standard and it is on the label.',
  },
  {
    id: 'miso',
    name: 'Misoprostol',
    also: 'Cytotec in America, Angusta in Britain',
    how: 'A small tablet, either swallowed or placed in the vagina.',
    time: 'Swallowed every two to four hours, or vaginally every three to six, usually over a good '
      + 'part of a day.',
    evidence: 'Strongly recommended on high quality evidence, by either route. Newborn outcomes did '
      + 'not differ between the two routes in the trials. Vaginal needed the drip less often. '
      + 'Under the tongue is specifically not recommended for routine use because the uterus is '
      + 'more likely to contract too hard.',
    worth: 'Two things to know. It is not used if you have had a caesarean or other surgery on the '
      + 'uterus, because of the risk of the scar giving way. And in Britain it is a licensed '
      + 'induction medicine while in America the same drug is used off label, which is legal, '
      + 'ordinary and worth understanding rather than being frightened by.',
  },
  {
    id: 'dila',
    name: 'Dilators',
    also: 'Dilapan, laminaria',
    how: 'Small rods placed in the cervix that swell slowly as they absorb water and open it '
      + 'mechanically.',
    time: 'Usually removed at twelve hours, sometimes up to twenty four.',
    evidence: 'A 2024 review of fourteen studies found outcomes comparable to the gel with a lower '
      + 'risk of the uterus contracting too hard.',
    worth: 'Another drug free option, less widely offered than the balloon.',
  },
  {
    id: 'sweep',
    name: 'A sweep',
    also: 'Membrane sweep, stretch and sweep',
    how: 'A finger is swept around the inside of the cervix to separate the bag of waters from it. '
      + 'A few minutes, at an ordinary appointment, no admission.',
    time: 'Any effect is over the next forty eight hours.',
    evidence: 'This is the one to read carefully. Pooled across forty studies it made spontaneous '
      + 'labour more likely and formal induction less likely, both on low certainty evidence. But '
      + 'when the weaker studies were removed the labour finding stopped being statistically '
      + 'significant. An independent appraisal rated the benefits unclear.',
    worth: 'It can hurt, and it can cause some bleeding. In Britain it is discussed from thirty '
      + 'nine weeks and verbal consent is required first. Of the women asked in three studies, '
      + 'eighty eight percent said they would choose it again.',
  },
];

export const RIPEN_COMBO = {
  title: 'Two at once',
  body: [
    'A network analysis pulling together eleven reviews, two hundred and seven trials and more than '
    + 'forty thousand people found that a balloon filled to thirty millilitres alongside vaginal '
    + 'misoprostol at twenty five micrograms was the most effective and safest combination, with '
    + 'the lowest odds of caesarean and the highest odds of a birth within twenty four hours.',
    'The guideline that quotes that finding also says plainly that the analysis could not assess '
    + 'whether the combination raises the risk of infection in the womb, which has been raised as a '
    + 'concern. So it is the best supported combination and there is an open question sitting next '
    + 'to it.',
  ],
};

export const RIPEN_TRAUMA = 'One line from the 2025 American guideline is worth carrying in with '
  + 'you: it says a trauma informed approach should be used when discussing swallowed misoprostol '
  + 'as against the methods that go inside you. If repeated vaginal examinations and insertions are '
  + 'hard for you, for any reason at all, that is a recognised reason to ask for the oral option '
  + 'and you do not owe anybody the story behind it.';

export const RIPEN_HOME = 'Some places send low risk people home during ripening. The 2025 '
  + 'guideline supports that as an option in low risk pregnancies. If sleeping in your own bed '
  + 'through the slow part would help, it is worth asking whether your hospital does it.';

/* ==================================================================
   BREAKING THE WATERS

   The heart of it. Her question was specifically about this step.
   ================================================================== */

export const WATER_WHAT = {
  title: 'What it is',
  body: [
    'A small hook is used to make a hole in the bag of waters around the baby. It is called '
    + 'amniotomy, or breaking or rupturing the membranes, and it is usually described as painless '
    + 'in itself though the examination to reach the cervix is not always comfortable.',
    'It is almost never done on its own. It is done to start or speed up an induction, and a drip '
    + 'of the hormone that drives contractions usually follows.',
  ],
};

export const WATER_ONEWAY = {
  title: 'It is the one step that cannot be undone',
  body: [
    'Ripening can be paused. A pessary can come out. A balloon can be removed. A drip can be turned '
    + 'down. Once the waters are broken there is no putting them back, and from that point the '
    + 'expectation is that this pregnancy ends in a birth.',
    'That is not a reason to refuse it. It is the reason it is worth being a deliberate decision '
    + 'rather than something that happens while somebody is already examining you.',
  ],
};

export const WATER_CLOCK = {
  title: 'The clock starts here, not at the beginning',
  body: [
    'American guidance says an induction should not be called failed until the drip has been '
    + 'running for at least twelve to eighteen hours after the waters were broken, and that '
    + 'continuing past eighteen can be individualised.',
    'Read that again, because it is the most useful sentence in this whole page. The clock starts '
    + 'at the waters, not at the beginning. A day and a night of ripening before that does not '
    + 'count against you, and it does not mean the induction is failing.',
    'It also runs the other way. Breaking the waters early starts the infection clock early, which '
    + 'is the trade the next section is about.',
  ],
};

export const WATER_TRADE = {
  title: 'Early or later, and what each costs',
  body: [
    'A 2025 review of sixteen trials covering three thousand three hundred and seventy eight people '
    + 'compared breaking the waters early in an induction against later.',
    'Early got to the birth about two and a half hours sooner. It made no difference at all to the '
    + 'caesarean rate. And it came with about a forty six percent higher relative risk of infection '
    + 'in the womb. There was no significant difference in cord prolapse, bleeding afterwards, or '
    + 'any of the newborn outcomes measured.',
    'Set against that, the American guideline from 2024 recommends breaking the waters during an '
    + 'induction to shorten labour, on high quality evidence, and did not report that infection '
    + 'signal. That is a real and recent disagreement between a guideline and a meta analysis, and '
    + 'this app is not going to pretend it is settled.',
  ],
  ask: 'So the honest question is not whether to break the waters. It is whether now is the right '
    + 'moment, and what is gained by doing it before the cervix is ready.',
};

export const WATER_HEAD = {
  title: 'Is the head engaged',
  body: [
    'The complication everybody fears is cord prolapse, where a loop of cord comes down ahead of '
    + 'the baby when the waters go. It is an emergency.',
    'It is largely prevented by choosing the right moment. A head that is not engaged, an unstable '
    + 'lie or an unknown presentation are all listed as reasons not to break the waters. The '
    + 'American procedure guidance tells the clinician to feel for a cord first and to avoid '
    + 'pushing the head up, and to check the baby’s heart rate before and immediately after.',
    'Because of that selection, the trials do not show breaking the waters causing cord prolapse. '
    + 'That is not the reassurance it first sounds like. It is a measure of how much the choosing '
    + 'matters, which is exactly why asking whether the head is engaged is a good question.',
  ],
};

export const WATER_ROUTINE = 'One separate thing, in case you are told otherwise in labour that '
  + 'started on its own. A review of fifteen trials covering five thousand five hundred and eighty '
  + 'three women found that routinely breaking the waters to speed up a labour that began by itself '
  + 'did not meaningfully shorten it, and the authors said they cannot recommend it as part of '
  + 'standard care. Induction is a different situation. Routine use in ordinary labour is not '
  + 'supported.';

export const WATER_QUESTIONS = [
  'What is my Bishop score right now, and what are the five numbers behind it?',
  'Is the baby’s head engaged?',
  'What do we gain by breaking my waters now rather than after more ripening?',
  'Once they are broken, what is the plan and what is the time frame?',
  'If I would rather wait, what would you watch, and for how long?',
];

/* ==================================================================
   WHY IT IS BEING OFFERED
   ================================================================== */

export const WHY_INTRO = 'Induction is offered for very different reasons and they are not all the '
  + 'same strength. It is worth knowing which kind yours is, because it changes how much room there '
  + 'is to talk about timing.';

export const WHY_STRONG = {
  title: 'Where the evidence is strong',
  items: [
    'High blood pressure in pregnancy or pre eclampsia. Delivery at thirty seven weeks for the '
    + 'milder forms, earlier and faster for the severe ones.',
    'Being past forty one weeks. This one is about as well supported as obstetric evidence gets.',
    'Waters broken at term before labour starts. Delivery at the time of diagnosis is recommended, '
    + 'on evidence that it reduces infection in both mother and baby without raising the caesarean '
    + 'rate.',
    'A baby measuring small, with the timing graded steeply by what the blood flow scans show.',
    'Cholestasis of pregnancy, with the timing set by the bile acid level.',
    'Diabetes, with the timing depending on type and how well it is controlled.',
  ],
  note: 'For these the conversation is usually about how and when, not whether. And an unready '
    + 'cervix is not a reason to wait: in the one trial that looked specifically at this, women '
    + 'with high blood pressure or mild pre eclampsia and an unfavourable cervix benefited more '
    + 'from induction than everybody else, not less.',
};

export const WHY_WEAK = {
  title: 'Where it is weaker, and honesty is the kindness',
  items: [
    'Reduced movements. A study across thirty three hospitals and more than four hundred thousand '
    + 'pregnancies tested a whole package built around this and did not find a reduction in '
    + 'stillbirth, while inductions rose from thirty six to forty one percent and caesareans from '
    + 'twenty five to twenty eight percent.',
    'Well controlled gestational diabetes managed by diet alone. The recommended window is the '
    + 'widest on the whole list, which is what genuine uncertainty looks like in a guideline.',
  ],
  warn: 'One thing that must not be misread. Always report reduced movements, urgently, every '
    + 'time. What that study tested was a system wide policy of inducing for it, not whether you '
    + 'should pick up the phone. You should.',
};

export const WHY_39 = {
  title: 'Being offered induction at thirty nine weeks with nothing wrong',
  body: [
    'This comes from one large American trial published in 2018, of six thousand one hundred and '
    + 'six low risk first time mothers. Caesarean was eighteen point six percent in the induced '
    + 'group against twenty two point two percent in those who waited, which works out at about one '
    + 'caesarean avoided for every twenty eight women induced. High blood pressure problems were '
    + 'also lower.',
    'The newborn outcome that gets quoted was four point three percent against five point four '
    + 'percent, with the confidence interval touching one and a p value of point zero four nine. '
    + 'That is sitting exactly on the line. The solid finding from that trial is the caesarean '
    + 'number, not the newborn one.',
    'The criticisms are real. Only about twenty seven percent of eligible women agreed to take '
    + 'part. It ran in academic hospitals with unusually low caesarean rates and strict protocols. '
    + 'And when the policy went out into ordinary practice the results split: one national dataset '
    + 'of nearly three million births found a small caesarean reduction, while a thirteen hospital '
    + 'study of twenty eight thousand births found elective inductions tripled with no change in '
    + 'caesareans at all.',
    'A replication trial is running now. That is the fairest summary of where this stands.',
  ],
  line: 'The professional bodies call it reasonable to offer, with shared decision making described '
    + 'as a critical element. Reasonable to offer is not the same as recommended, and you are '
    + 'allowed to hear it as the offer it is.',
};

export const WHY_41 = {
  title: 'Forty one weeks, which is a much clearer picture',
  body: [
    'Pooling the two big trials, four thousand five hundred and sixty one women, induction at forty '
    + 'one weeks against waiting to forty two: one death against eight. Serious problems for the '
    + 'baby, ten against twenty three. Caesarean rates identical.',
    'A review of thirty four trials covering more than twenty one thousand women and babies found '
    + 'induction at or beyond term reduced deaths around birth and stillbirths, both on high '
    + 'certainty evidence, and reduced caesareans slightly as well.',
    'In that pooled analysis the benefit was concentrated in first time mothers. Women who had '
    + 'given birth before showed no significant benefit.',
  ],
};

export const WHY_CSECTION = {
  title: 'Does being induced make a caesarean more likely',
  body: [
    'You have almost certainly heard that it does. That belief comes from comparing induced labours '
    + 'with labours that started on their own, and that is not the choice anybody actually faces.',
    'A woman in spontaneous labour at forty weeks has already passed the test of going into labour. '
    + 'Comparing her with a woman being induced the same day makes induction look about forty '
    + 'percent worse than it is. The real choice is being induced or waiting, and that includes '
    + 'everyone who waits and then needs inducing anyway.',
    'When the trials make that comparison, induction does not raise the caesarean rate and at or '
    + 'past term it slightly lowers it. Whether that reduction turns up in ordinary hospitals is '
    + 'much less clear, and two of the three real world studies did not find it.',
  ],
};

/* ==================================================================
   ASKING
   ================================================================== */

export const ASK_HEAD = 'You are not being difficult. You are being a patient.';

export const ASK_RIGHT = {
  title: 'The sentence worth knowing',
  quote: 'Recognise that women can decide to proceed with, delay, decline or stop an induction.',
  from: 'That is the British national guideline, in its own words, and the word almost nobody knows '
    + 'is in there is stop. An induction that has already started is still a thing you are '
    + 'consenting to, hour by hour.',
  note: 'The same guideline requires that the reasons, the timing, the alternatives and the risks '
    + 'are all discussed with you, and that you are given time to think and to talk it over with '
    + 'somebody else.',
};

export const ASK_LIST = [
  { q: 'What is my Bishop score, and what are the five numbers that make it up?',
    why: 'This is the whole point of the page. The number exists and it is about you.' },
  { q: 'Is it six or less? If so, what are you going to use to ripen my cervix first?',
    why: 'Six or less is the trial definition of an unfavourable cervix and the British threshold '
      + 'for ripening before anything else.' },
  { q: 'Are you planning to break my waters, and is my cervix ready for that?',
    why: 'The older American bulletin leans this way and the British guideline requires it.' },
  { q: 'Is the head engaged?',
    why: 'A head that is not engaged is a listed reason to wait.' },
  { q: 'What happens to the clock once my waters are broken?',
    why: 'The twelve to eighteen hours before an induction is called failed starts there.' },
  { q: 'Can I have the balloon instead of the medicine?',
    why: 'Mechanical methods carry a strong recommendation on high quality evidence, and the '
      + 'British guideline allows choosing one simply because you want to.' },
  { q: 'Can it be placed by hand rather than with a speculum?',
    why: 'Studies found that more comfortable with no clinical downside.' },
  { q: 'How long is this likely to take, start to finish?',
    why: 'The 2025 guideline says patients should be counselled on the expected time course. The '
      + 'median in the big trial was twenty hours.' },
  { q: 'If I wanted to wait, what would you watch and how often?',
    why: 'Declining or delaying comes with monitoring, not with being abandoned.' },
  { q: 'Can I pause or stop this once it has started?',
    why: 'Yes, and the British guideline says so in those words.' },
];

export const ASK_BRAIN = {
  title: 'The five letters, if you like a structure',
  body: 'Benefits, risks, alternatives, intuition, and nothing. What are the benefits of doing '
    + 'this. What are the risks. What else could we do. What is my gut saying. And what happens if '
    + 'we do nothing for now.',
  honest: 'It goes around birth classes and doula training as BRAIN or BRAN, and nobody seems to '
    + 'know who came up with it, including the midwife most often credited. It is not from any '
    + 'guideline body and this app is not going to pretend otherwise. It is just a useful way to '
    + 'remember five questions when you are frightened and being asked to decide.',
};

export const ASK_ALONE = 'Take somebody with you if you can, and tell them in advance that their '
  + 'job is to ask what your Bishop score is if you forget. It is a small thing to hand to '
  + 'somebody who wants to help and does not know how.';

export const IND_DISCLAIMER = 'Educational information, not medical advice, and not a substitute '
  + 'for the people looking after you. The chart here is reproduced as guidelines print it so you '
  + 'can recognise your own numbers, not so you can score yourself. Only an examination can '
  + 'produce those numbers.';

export const IND_SOURCES = [
  { org: 'NICE', label: 'Inducing labour, NG207, the guideline that makes the score the decision point',
    url: 'https://www.nice.org.uk/guidance/ng207' },
  { org: 'NICE', label: 'Inducing labour, information for the public',
    url: 'https://www.nice.org.uk/guidance/ng207/informationforpublic' },
  { org: 'ACOG', label: 'Practice Bulletin 107, Induction of Labor, 2009, where the chart is printed',
    url: 'https://www.mnhospitals.org/wp-content/uploads/Portals/Documents/patientsafety/Perinatal/acog--practice_bulletin_107_2009.pdf' },
  { org: 'ACOG', label: 'Clinical Practice Guideline 9, Cervical Ripening in Pregnancy, July 2025',
    url: 'https://www.methodistcollege.edu/hubfs/Cervical%20Ripening%20in%20Pregnancy%20Clinical%20Practice%20Guideline%20July%202025.pdf' },
  { org: 'ACOG', label: 'Clinical Practice Guideline 8, First and Second Stage Labor Management, 2024',
    url: 'https://bpb-us-w2.wpmucdn.com/sites.uab.edu/dist/f/430/files/2025/09/ACOG-First-and-Second-Stage-Labor-Management-Clinical-Practice-Guideline.pdf' },
  { org: 'NIH', label: 'Bishop Score, StatPearls, the scale problem and the thresholds',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK470368/' },
  { org: 'NIH', label: 'Amniotomy, StatPearls, including when it should not be done',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK470167/' },
  { org: 'NIH', label: 'Kolkman 2013, the review that found the score a poor predictor',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK209154/' },
  { org: 'NIH', label: 'Laughon 2011, the simplified score, five thousand six hundred and ten women',
    url: 'https://pubmed.ncbi.nlm.nih.gov/21383643/' },
  { org: 'Cochrane', label: 'Mechanical methods for induction of labour, 2023',
    url: 'https://www.cochrane.org/evidence/CD001233_mechanical-methods-induction-labour' },
  { org: 'Cochrane', label: 'Membrane sweeping, 2020, including how fragile the finding is',
    url: 'https://www.cochrane.org/evidence/CD000451_membrane-sweeping-induction-labour' },
  { org: 'Cochrane', label: 'Induction at or beyond thirty seven weeks, 2020',
    url: 'https://www.cochrane.org/evidence/CD004945_induction-labour-women-normal-pregnancies-or-beyond-37-weeks' },
  { org: 'Cochrane', label: 'Amniotomy for shortening spontaneous labour, 2013',
    url: 'https://www.cochrane.org/CD006167/PREG_amniotomy-for-shortening-spontaneous-labour' },
  { org: 'PLOS Medicine', label: 'Induction at forty one weeks against waiting, pooled trials, 2020',
    url: 'https://journals.plos.org/plosmedicine/article?id=10.1371%2Fjournal.pmed.1003436' },
  { org: 'Karger', label: 'Early against late amniotomy, sixteen trials, 2025',
    url: 'https://pubmed.ncbi.nlm.nih.gov/40068652/' },
  { org: 'SMFM', label: 'Statement on elective induction at thirty nine weeks, 2018',
    url: 'https://www.ajog.org/article/S0002-9378(18)30661-6/fulltext' },
  { org: 'NIHR', label: 'The reduced movements trial, and why the package did not work',
    url: 'https://evidence.nihr.ac.uk/alert/a-care-package-to-increase-awareness-of-fetal-movements-does-not-reduce-risk-of-stillbirth/' },
  { org: 'NHS', label: 'Inducing labour, the patient page',
    url: 'https://www.nhs.uk/pregnancy/labour-and-birth/signs-of-labour/inducing-labour/' },
];

export default BISHOP_ROWS;

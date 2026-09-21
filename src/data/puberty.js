/**
 * Ready Set Grow: Keeping track of it
 * ==================================================================
 * Her ask, in her words: "if someone has a daughter that is in the age
 * range for a period we should be able to track their cycle like the
 * mom does and be able to mark on there if they are on birth control
 * or anything else so that mom can help. maybe she can check off the
 * list on there as well on what she has hit puberty wise and same with
 * son if there is anything they can check off."
 *
 * So: a checklist of what has happened, a cycle for a daughter who has
 * started, and somewhere to record medication. All of it feeding back
 * something useful rather than just sitting there.
 *
 * THE THING THIS DOES THAT A TICK LIST NORMALLY DOES NOT
 * Puberty runs in a fairly reliable order with fairly reliable gaps,
 * which means a parent who has recorded two or three things can be
 * told roughly what is coming and roughly when. Breasts come about two
 * to two and a half years before a first period. Discharge starts six
 * to twelve months before it. A growth spurt is about a year out.
 * Those gaps are the whole point of recording the dates, and they turn
 * a checklist into an answer to the only question a mother is actually
 * asking, which is when.
 *
 * THE PRIVACY PROBLEM, TAKEN SERIOUSLY
 * A record of a teenage girl's body, kept by somebody else, is not the
 * same kind of data as a vaccination card. Three things follow from
 * that and all three are built in rather than written in a footer.
 *
 *   1. Anybody this child is shared with can see it. A co parent, a
 *      grandparent, whoever holds a code. The app says so before the
 *      first thing is recorded, not after.
 *   2. It is opt in per child. Nothing appears on a daughter's profile
 *      because she turned eleven. Somebody has to decide to start it.
 *   3. It can be handed over and it can be deleted, in one tap, and
 *      the app says out loud that at some point this should stop being
 *      her mother's record and start being hers.
 *
 * WHY BIRTH CONTROL IS WRITTEN THE WAY IT IS
 * Because the commonest reasons a teenager is prescribed it in the
 * United States are period pain, heavy bleeding, irregular cycles and
 * acne, and an app that treats the entry as though it could only mean
 * one thing puts a mother off recording something her daughter's
 * doctor needs to know. It is a medication. It is recorded as one.
 *
 * Ages and gaps checked September 2026. Sources in PUB_SOURCES.
 */

/* ==================================================================
   THE CHECKLISTS
   ==================================================================
   Order matters. These are listed in the order they usually happen,
   so the list itself teaches the sequence even to somebody who ticks
   nothing.

   'gap' is how long after this thing a first period usually is, in
   months, and it is only on the girls' list because it is the only
   question with a real answer. Where there is no reliable gap there
   is no number, rather than a number made up to fill the column.
   ================================================================== */

export const PUB_GIRL = [
  {
    id: 'breast', label: 'Breasts starting',
    what: 'A firm, often tender lump under one nipple, frequently on one side for a while. This is '
      + 'usually the first sign of anything.',
    typical: 'Usually around 10, anywhere from 8 to 12',
    gap: 30, gapText: 'A first period usually comes about 2 to 2 and a half years after this',
  },
  {
    id: 'hair', label: 'Pubic hair',
    what: 'Sometimes before the breasts, more often just after.',
    typical: 'Usually within a year of the breasts starting',
    gap: 18, gapText: 'A first period usually comes 1 to 2 years after this',
  },
  {
    id: 'smell', label: 'Body odor',
    what: 'The day you notice they need deodorant. It catches parents off guard because it often '
      + 'arrives before anything else is visible.',
    typical: 'Often the first thing anybody notices',
  },
  {
    id: 'spurt', label: 'A growth spurt',
    what: 'Pants short, shoes too small, eating constantly. In girls this comes earlier in the '
      + 'process than it does in boys.',
    typical: 'Often about a year before a first period',
    gap: 12, gapText: 'A first period often comes around a year after this',
  },
  {
    id: 'underarm', label: 'Underarm hair',
    what: 'Usually after pubic hair.',
    typical: 'Later in the run up',
  },
  {
    id: 'acne', label: 'Skin changing',
    what: 'Spots, oilier skin and hair. Hormonal rather than anything to do with washing, and worth '
      + 'saying so to a child who thinks it is their fault.',
    typical: 'Anywhere through it',
  },
  {
    id: 'discharge', label: 'Discharge started',
    what: 'A clear or milky discharge in her underwear. Nobody warns girls about this and a lot of '
      + 'them think something is wrong with them. It is the body getting ready and it is normal.',
    typical: 'The most useful single sign that it is close',
    gap: 9, gapText: 'A first period usually comes 6 to 12 months after this starts',
    big: true,
  },
  {
    id: 'moods', label: 'Moods changing',
    what: 'More tearful, more irritable, more easily stung. Real, hormonal, and not something to be '
      + 'argued out of.',
    typical: 'Through the whole of it',
  },
  {
    id: 'period', label: 'First period',
    what: 'The day it happened. Once this is recorded the app can start tracking the cycle.',
    typical: 'On average around 12, and earlier than that is common',
    opensCycle: true,
  },
];

export const PUB_BOY = [
  {
    id: 'testes', label: 'Testicles getting bigger',
    what: 'The actual first sign, and almost nobody notices it. If you are not going to record this '
      + 'one, that is completely fine, and it is on the list because it is the honest starting point.',
    typical: 'Usually around 11 and a half, anywhere from 9 and a half to 14',
  },
  {
    id: 'hair', label: 'Pubic hair',
    what: 'Usually the first thing a parent actually sees.',
    typical: 'Soon after the testicles start changing',
  },
  {
    id: 'smell', label: 'Body odor',
    what: 'Often early, often sudden, and often the first conversation about deodorant.',
    typical: 'Often one of the first noticeable things',
  },
  {
    id: 'spurt', label: 'A growth spurt',
    what: 'Nearly 4 inches in a year at the peak. Growing pains, eating constantly, and clumsy '
      + 'with it because the limbs arrived before the coordination.',
    typical: 'Later in the process than in girls',
  },
  {
    id: 'acne', label: 'Skin changing',
    what: 'Spots and oilier skin. Boys get told even less about this than girls do.',
    typical: 'Anywhere through it',
  },
  {
    id: 'voicecrack', label: 'Voice starting to crack',
    what: 'The squeaking stage. Mortifying, temporary, and worth not laughing at.',
    typical: 'Just after the growth spurt peaks',
  },
  {
    id: 'voice', label: 'Voice settled deeper',
    what: 'The change everybody watches for, and one of the last things to happen rather than one of '
      + 'the first.',
    typical: 'Late',
  },
  {
    id: 'underarm', label: 'Underarm hair',
    what: 'Usually after pubic hair.',
    typical: 'Later in the run up',
  },
  {
    id: 'facial', label: 'Facial hair',
    what: 'Upper lip first, usually, then the rest over a few years.',
    typical: 'Near the end of it',
  },
  {
    id: 'ejac', label: 'First ejaculation or wet dream',
    what: 'You may well never know about this one and there is no need to ask. It is on the list '
      + 'because a lot of parents want to know where it sits in the order, which is about a year '
      + 'after the testicles start changing.',
    typical: 'About a year after the start',
    private: true,
  },
];

export function pubList(sex) {
  return sex === 'f' ? PUB_GIRL : PUB_BOY;
}

export function pubItem(sex, id) {
  return pubList(sex).filter((x) => x.id === id)[0] || null;
}

/* How far through, counting only the things a parent could reasonably
   observe, so a list with two private items on it does not read as
   permanently incomplete. */
export function pubCount(sex, marks) {
  const list = pubList(sex).filter((x) => !x.private);
  let done = 0;
  list.forEach((x) => { if ((marks || {})[x.id]) done += 1; });
  return { done: done, total: list.length };
}

/* Months between a YYYY-MM or YYYY-MM-DD and today. Month granularity
   on purpose, because no parent knows the day her daughter's breasts
   started and asking for one gets you a made up answer. */
export function pubMonthsSince(value, today) {
  if (!value) return null;
  const a = String(value).split('-');
  const b = String(today || '').split('-');
  if (a.length < 2 || b.length < 2) return null;
  const ay = Number(a[0]), am = Number(a[1]);
  const by = Number(b[0]), bm = Number(b[1]);
  if (!isFinite(ay) || !isFinite(am) || !isFinite(by) || !isFinite(bm)) return null;
  return (by - ay) * 12 + (bm - am);
}

export function pubMonthLabel(value) {
  if (!value) return '';
  const p = String(value).split('-');
  const names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];
  const m = Number(p[1]);
  if (!isFinite(m) || m < 1 || m > 12) return String(value);
  return names[m - 1] + ' ' + p[0];
}

export function pubAddMonths(value, add) {
  const p = String(value || '').split('-');
  let y = Number(p[0]), m = Number(p[1]);
  if (!isFinite(y) || !isFinite(m)) return '';
  m += add;
  y += Math.floor((m - 1) / 12);
  m = ((m - 1) % 12 + 12) % 12 + 1;
  return y + '-' + String(m).padStart(2, '0');
}

/* THE PART THAT MAKES THE LIST WORTH FILLING IN.

   Takes what has been recorded and says what usually comes next and
   roughly when. Only for girls and only about a first period, because
   that is the only gap in the whole of puberty with a number behind it
   that is worth telling somebody. Uses the tightest signal available,
   which is discharge if it is there, then the growth spurt, then hair,
   then breasts. */
export function pubPeriodHint(sex, marks, today) {
  if (sex !== 'f') return null;
  const m = marks || {};
  if (m.period) return null;
  const order = ['discharge', 'spurt', 'hair', 'breast'];
  for (let i = 0; i < order.length; i++) {
    const it = pubItem('f', order[i]);
    if (!it || !it.gap || !m[it.id]) continue;
    const since = pubMonthsSince(m[it.id], today);
    if (since === null || since < 0) continue;
    const left = it.gap - since;
    return {
      from: it.label.toLowerCase(),
      started: m[it.id],
      since: since,
      gapText: it.gapText,
      left: left,
      /* Past the usual window is worth saying gently. It is extremely
         common and it is not a problem, and a girl waiting is usually
         the one who most wants to know she is normal. */
      overdue: left < -6,
      around: pubAddMonths(m[it.id], it.gap),
    };
  }
  return null;
}

export const PUB_HINT_OVERDUE = 'Later than the usual gap, which happens to plenty of girls and is '
  + 'not on its own a problem. The ages that are worth an appointment are no period by 15, or '
  + 'more than 3 years since her breasts started.';

/* ==================================================================
   PRIVACY, AND WHOSE RECORD THIS IS
   ==================================================================
   The honest section, shown before anything is recorded rather than
   buried in a footer nobody reads.
   ================================================================== */

export const PUB_TITLE = 'Keeping track of it';

export const PUB_SUB = 'What has happened so far, and when. Only if you want it.';

export const PUB_START = {
  title: 'Before you start',
  body: [
    'This is a record of your child’s body, and that is a different kind of thing from a '
    + 'vaccination card. Worth 30 seconds before you begin.',
  ],
  items: [
    'Anybody you have shared this child with can see everything on it. A co parent, a grandparent, '
    + 'whoever you gave a code to. If that is not what you want, do not start it, or take their '
    + 'access back first under Sharing a child.',
    'It is not on by default and it never appears by itself. You are turning it on.',
    'You can delete the whole thing in one tap, at any time, and nothing is kept.',
    'At some point this stops being your record and starts being theirs. There is no right age for '
    + 'that and you will know. When it comes, hand it over or delete it rather than keeping it quietly.',
  ],
  ask: 'Does your child know you are keeping this? For a younger child that question does not really '
    + 'arise. For a 13 year old it does, and being told is usually better than being found out.',
  btn: 'Start keeping track',
  notNow: 'Not for now',
};

export const PUB_INTRO = 'Tick what has happened and put roughly when. A month is enough, nobody '
  + 'knows the day. The more you record the better the app can tell you what is usually next.';

export const PUB_DELETE = {
  title: 'Deleting it',
  body: 'This removes every mark, every date, every period and every medication for this child, from '
    + 'this device and from the cloud copy. It cannot be undone and nothing is kept.',
  btn: 'Delete all of it',
  confirm: 'Yes, delete all of it',
  cancel: 'Keep it',
};

export const PUB_HANDOVER = {
  title: 'When it should be theirs',
  body: 'Somewhere in the middle of all this, a child gets old enough that a record of their body '
    + 'kept by somebody else stops being care and starts being something else. There is no age on '
    + 'that and you will know it when you see it. When you get there, you can show them what is here, '
    + 'let them keep it themselves, and delete this copy. That is not losing anything. That is the '
    + 'whole point of it.',
};

/* ==================================================================
   HER CYCLE
   ================================================================== */

export const CYC_TITLE = 'Her cycle';

export const CYC_SUB = 'The same calendar you use for yourself, for her, so somebody is keeping '
  + 'track while she works out what is normal.';

export const CYC_INTRO = [
  'Log the first day of each period. After two the app works out her own average rather than '
  + 'assuming 28 days, and after a few it can say whether her cycles are settling.',
  'The first few years are irregular and that is expected. What this is really for is having an '
  + 'accurate answer when a doctor asks, because nobody remembers and the answer matters.',
];

export const CYC_NORMAL = {
  title: 'What normal looks like at her age',
  items: [
    'Anywhere from 21 to 45 days apart. That is the adolescent range and it is wider than the adult '
    + 'one, so do not measure her against a chart written for you.',
    'Fewer than 7 days of bleeding.',
    '3 to 6 pads or tampons a day.',
    'Irregular for the first few years, and taking longer to settle than it used to. In one large '
    + 'study the share of girls whose cycles were regular within 2 years of starting fell from 76 '
    + 'percent in those born in the 1950s and 60s to 56 percent in those born in the early 2000s.',
  ],
};

export const CYC_RED = {
  title: 'Worth a doctor',
  items: [
    'Cycles closer together than every 21 days, or further apart than every 45.',
    '90 days between periods, even once.',
    'Bleeding for more than 7 days.',
    'Soaking through more than one pad or tampon every 1 to 2 hours.',
    'Pain that keeps her off school. Period pain that stops a girl living her life is worth '
    + 'investigating rather than enduring, and a generation of women were told otherwise.',
    'A lot of bruising or bleeding generally, or a bleeding disorder in the family.',
  ],
  note: 'This is exactly what the log is for. Turning up with dates beats turning up with a guess, '
    + 'and it is the difference between being taken seriously and being told to come back in 6 months.',
};

export const CYC_NO_FERTILE = 'Deliberately left out: this does not show a fertile window or '
  + 'anything about pregnancy. That is on your own cycle screen because it is your body. What is '
  + 'here is dates, averages and whether anything looks worth asking about.';

/* ==================================================================
   MEDICATION
   ==================================================================
   Neutral on purpose. See the file header for why.
   ================================================================== */

export const MED_TITLE = 'What she is taking';

export const MED_TITLE_ANY = 'What they are taking';

export const MED_INTRO = 'Anything ongoing, so it is in one place when a doctor asks. Dates matter '
  + 'more than doses here, because what a doctor usually wants to know is how long.';

export const MED_KINDS = [
  { id: 'bc', label: 'Birth control',
    note: 'Pill, patch, ring, implant, injection or coil. Worth recording which one and when it '
      + 'started, because it changes bleeding and it changes what a period chart means.' },
  { id: 'period', label: 'Something for periods',
    note: 'Pain relief, tranexamic acid, iron, or anything else taken around a period.' },
  { id: 'skin', label: 'Something for skin',
    note: 'Including the ones that interact with other things.' },
  { id: 'mood', label: 'Something for mood or attention', note: '' },
  { id: 'other', label: 'Anything else ongoing', note: '' },
];

export const MED_BC_NOTE = 'Worth knowing, and worth saying to a daughter who assumes what it means: '
  + 'the commonest reasons a teenager in the United States is prescribed hormonal birth control are '
  + 'period pain, heavy or irregular bleeding and acne. It is a medication with several uses. This '
  + 'app records it as one and draws no conclusion about why.';

export const MED_ON_CHART = 'Hormonal birth control usually changes the bleeding pattern, and on '
  + 'some methods periods stop altogether. That is expected rather than alarming, and it does mean '
  + 'the cycle averages below stop describing a natural cycle from the day it starts.';

export const MED_EMPTY = 'Nothing recorded.';

export const PUB_SOURCES = [
  { org: 'AAFP', label: 'The order puberty happens in, and the usual ages',
    url: 'https://www.aafp.org/pubs/afp/issues/2017/1101/p590.html' },
  { org: 'Geisinger', label: 'The signs a first period is coming, and how far out each one is',
    url: 'https://www.geisinger.org/health-and-wellness/wellness-articles/2026/04/23/13/15/signs-your-daughter-is-about-to-start-her-period' },
  { org: 'ACOG and AAP', label: 'The adolescent cycle ranges and what is worth an appointment',
    url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2015/12/menstruation-in-girls-and-adolescents-using-the-menstrual-cycle-as-a-vital-sign' },
  { org: 'Harvard Chan School', label: 'Cycles taking longer to settle than they used to',
    url: 'https://hsph.harvard.edu/news/menstrual-periods-are-arriving-earlier-for-younger-generations-especially-among-racial-minority-and-lower-income-individuals/' },
  { org: 'AAP, HealthyChildren', label: 'What to tell boys, and where the first ejaculation sits',
    url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/puberty/Pages/Physical-Development-Boys-What-to-Expect.aspx' },
];

/* When the tracker is worth offering at all. Below this it is not
   useful and putting it on a profile would be strange. */
export function pubShows(months) {
  return typeof months === 'number' && months >= 84;
}

export default PUB_TITLE;

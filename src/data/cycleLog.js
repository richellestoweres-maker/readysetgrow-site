/**
 * Ready Set Grow: The day log
 * ==================================================================
 * How a day felt, for a mother and for a daughter, on the same
 * vocabulary and the same screen shape.
 *
 * WHY BOTH ON ONE FILE
 * Because a fifteen year old and her mother have the same body doing
 * the same thing, and building the teenager a smaller, softer,
 * vaguer version of the adult tool would be its own kind of insult.
 * The words are the same. The framing around them changes.
 *
 * WHAT THIS IS NOT
 * Not a diagnosis, not a prediction, and not a fertility tool. It is
 * a diary. Its value is that three months of it answers a question
 * a doctor will ask and almost nobody can remember the answer to:
 * how long, how heavy, and what else was happening.
 *
 * ON THE TEENAGER'S PRIVACY
 * A girl old enough to have periods is old enough to have an opinion
 * about who reads them. The screens say so out loud rather than
 * quietly recording her. If she wants to keep it herself, the app
 * says that is a reasonable thing to want.
 *
 * Checked September 2026.
 */

export const CYCLOG_TITLE = 'How today felt';

export const CYCLOG_SUB = 'Flow, mood, and what your body was doing. Takes about 10 seconds and '
  + 'answers the questions you get asked in a 5 minute appointment.';

export const CYCLOG_FLOW = [
  { id: 'spot', label: 'Spotting' },
  { id: 'light', label: 'Light' },
  { id: 'med', label: 'Medium' },
  { id: 'heavy', label: 'Heavy' },
];

export const CYCLOG_MOODS = [
  { id: 'ok', label: 'Fine' },
  { id: 'good', label: 'Good' },
  { id: 'low', label: 'Low' },
  { id: 'teary', label: 'Teary' },
  { id: 'irrit', label: 'Irritable' },
  { id: 'angry', label: 'Angry' },
  { id: 'anx', label: 'Anxious' },
  { id: 'flat', label: 'Flat' },
  { id: 'wired', label: 'Wired' },
  { id: 'sens', label: 'Everything is too much' },
];

export const CYCLOG_SYMPTOMS = [
  { id: 'cramp', label: 'Cramps' },
  { id: 'back', label: 'Backache' },
  { id: 'head', label: 'Headache' },
  { id: 'breast', label: 'Sore breasts' },
  { id: 'bloat', label: 'Bloated' },
  { id: 'tired', label: 'Exhausted' },
  { id: 'sleep', label: 'Could not sleep' },
  { id: 'nausea', label: 'Queasy' },
  { id: 'skin', label: 'Skin' },
  { id: 'crave', label: 'Cravings' },
  { id: 'gut', label: 'Stomach upset' },
  { id: 'dizzy', label: 'Dizzy' },
  { id: 'pain', label: 'Pain somewhere else' },
];

export function cyclogItem(kind, id) {
  const src = kind === 'flow' ? CYCLOG_FLOW
    : kind === 'mood' ? CYCLOG_MOODS
      : kind === 'period' ? CYCLOG_PERIOD
        : kind === 'dis' ? CYCLOG_DISCHARGE
          : kind === 'color' ? CYCLOG_COLOR
            : kind === 'odor' ? CYCLOG_ODOR
              : kind === 'dsx' ? CYCLOG_DSX
                : CYCLOG_SYMPTOMS;
  for (let i = 0; i < src.length; i++) if (src[i].id === id) return src[i];
  return null;
}

/* An entry is { flow, moods: [], sx: [] }. Empty entries are removed
   rather than stored, so a day that was opened and closed again
   leaves nothing behind. */
export function cyclogEmpty(entry) {
  if (!entry) return true;
  if (entry.flow || entry.period || entry.dis || entry.color || entry.odor) return false;
  if (entry.note && String(entry.note).trim()) return false;
  if (Array.isArray(entry.moods) && entry.moods.length) return false;
  if (Array.isArray(entry.sx) && entry.sx.length) return false;
  if (Array.isArray(entry.dsx) && entry.dsx.length) return false;
  return true;
}

export function cyclogSummary(entry) {
  if (cyclogEmpty(entry)) return '';
  const bits = [];
  if (entry.flow) {
    const f = cyclogItem('flow', entry.flow);
    if (f) bits.push(f.label + ' flow');
  }
  const names = (kind, ids) => (Array.isArray(ids) ? ids : [])
    .map((id) => (cyclogItem(kind, id) || {}).label)
    .filter(Boolean);
  const m = names('mood', entry.moods);
  const s = names('sx', entry.sx);
  if (m.length) bits.push(m.join(', ').toLowerCase());
  if (s.length) bits.push(s.join(', ').toLowerCase());
  const d = cyclogItem('dis', entry.dis);
  const c = cyclogItem('color', entry.color);
  const o = cyclogItem('odor', entry.odor);
  const dpart = [d ? d.label.toLowerCase() : '', c ? c.label.toLowerCase() : '']
    .filter(Boolean).join(', ');
  if (dpart) bits.push(dpart + ' discharge');
  if (o && o.id !== 'none') bits.push(o.label.toLowerCase() + ' odour');
  const ds = names('dsx', entry.dsx);
  if (ds.length) bits.push(ds.join(', ').toLowerCase());
  return bits.join('. ');
}

/* Counts across the logged days, which is the thing worth taking to
   an appointment. Nothing here interprets, it only totals. */
export function cyclogCounts(days) {
  const out = { n: 0, flow: {}, mood: {}, sx: {} };
  const d = days || {};
  const keys = Object.keys(d);
  for (let i = 0; i < keys.length; i++) {
    const e = d[keys[i]];
    if (cyclogEmpty(e)) continue;
    out.n += 1;
    if (e.flow) out.flow[e.flow] = (out.flow[e.flow] || 0) + 1;
    (e.moods || []).forEach((x) => { out.mood[x] = (out.mood[x] || 0) + 1; });
    (e.sx || []).forEach((x) => { out.sx[x] = (out.sx[x] || 0) + 1; });
  }
  return out;
}

export function cyclogTop(counts, kind, n) {
  const src = counts[kind] || {};
  return Object.keys(src)
    .map((id) => ({ id: id, n: src[id], label: (cyclogItem(kind === 'sx' ? 'sx' : kind, id) || {}).label }))
    .filter((x) => x.label)
    .sort((a, b) => b.n - a.n)
    .slice(0, n || 4);
}

export const CYCLOG_HONEST = 'This is a diary, not a diagnosis and not a prediction. What it is '
  + 'good for is the appointment where somebody asks how long, how heavy and how often, and you '
  + 'can answer instead of guessing.';

export const CYCLOG_MOM = 'Log the days you want to and skip the ones you do not. A patchy record '
  + 'is still better than none.';

export const CYCLOG_TEEN = {
  title: 'Her log, and who reads it',
  body: [
    'This sits on her profile, which means you can see it. She should know that, rather than find '
    + 'it out later.',
    'Plenty of girls would rather keep this themselves, and that is a reasonable thing to want. You '
    + 'can let her fill it in on your phone, you can leave it to her entirely, or you can agree that '
    + 'you only look at the bleeding and not the moods. Any of those work better than the version '
    + 'where she does not know.',
  ],
  ask: 'Worth asking her which she would prefer before you start, not after.',
};

export const CYCLOG_WHEN_ASK = {
  title: 'Worth mentioning to a doctor',
  intro: 'None of these mean something is wrong. They are the things worth raising rather than '
    + 'waiting out, especially in the first couple of years when everything is still settling.',
  items: [
    'Soaking through a pad or tampon every hour or two',
    'Bleeding for more than about 7 days',
    'Clots bigger than the end of your thumb',
    'Pain that stops her going to school, or painkillers not touching it',
    'Periods that stop for 3 months or more once they had settled into a pattern',
    'Bleeding between periods',
    'Feeling faint, breathless or unusually tired, which can be low iron from heavy bleeding',
  ],
  note: 'Adolescent cycles are commonly anywhere from 21 to 45 days apart in the '
    + 'first few years, which is wider than the adult range, so irregular on its own is usually '
    + 'just young rather than wrong.',
};

export const CYCLOG_FIRST = {
  title: 'Has she had her first period?',
  body: 'Some girls start at 9 and some at 15 and both are ordinary. Answering this only '
    + 'decides what this screen shows her.',
  yes: 'Yes, it has started',
  no: 'Not yet',
  skip: 'I would rather not say yet',
  after: 'You can start the calendar whenever suits. Nothing has to be filled in backwards.',
  notYet: 'Nothing changes. The checklist keeps track of the signs that usually come first, and '
    + 'this question will still be here when the answer changes.',
};

export const CYCLOG_DELETE = 'Everything logged here can be deleted, all of it at once, from the '
  + 'bottom of this screen.';

export const CYCLOG_SOURCES = [
  { org: 'ACOG', label: 'The menstrual cycle as a vital sign in adolescents, and what counts as normal',
    url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2015/12/menstruation-in-girls-and-adolescents-using-the-menstrual-cycle-as-a-vital-sign' },
  { org: 'NHS', label: 'Periods, heavy bleeding and when to get advice',
    url: 'https://www.nhs.uk/conditions/heavy-periods/' },
];

export default CYCLOG_FLOW;

/* ==================================================================
   DISCHARGE AND CERVICAL MUCUS

   Her ask, and a gap the app was already embarrassed by: Willow's own
   copy tells women cervical mucus is more informative than calendar
   prediction, and there was nowhere to write it down.

   THE RULE THIS WHOLE SECTION OBEYS

   Nothing here is a diagnosis and nothing here is contraception.
   Discharge overlaps so heavily between normal variation, thrush and
   bacterial vaginosis that even a clinician swabs rather than guesses,
   so every explanation below says what else causes the same thing and
   sends her for the test. The evidence labels are the same four tiers
   the rest of the health content uses.
   ================================================================== */

/* Period is a separate question from flow, the way her mockup has it.
   "Did it come" and "how heavy" are two different answers, and the
   old single list quietly conflated spotting with a light period. */
export const CYCLOG_PERIOD = [
  { id: 'yes', label: 'Yes' },
  { id: 'no', label: 'No' },
  { id: 'spot', label: 'Spotting' },
];

export const CYCLOG_DISCHARGE = [
  { id: 'dry', label: 'Dry or none', ic: 'close' },
  { id: 'sticky', label: 'Sticky', ic: 'drop' },
  { id: 'creamy', label: 'Creamy', ic: 'drop' },
  { id: 'watery', label: 'Watery', ic: 'drop' },
  { id: 'eggwhite', label: 'Egg white', ic: 'leaf' },
  { id: 'clumpy', label: 'Thick or clumpy', ic: 'circle' },
  { id: 'other', label: 'Something else', ic: 'info' },
];

/* Swatches rather than words, because a colour is quicker to point at
   than to name, and "cream" means different things to different
   people. */
export const CYCLOG_COLOR = [
  { id: 'clear', label: 'Clear', hex: 'transparent' },
  { id: 'white', label: 'White', hex: '#FFFFFF' },
  { id: 'cream', label: 'Cream', hex: '#F4EBD9' },
  { id: 'yellow', label: 'Yellow', hex: '#F2DE9B' },
  { id: 'green', label: 'Green', hex: '#C3D6AE' },
  { id: 'grey', label: 'Grey', hex: '#D3D5D0' },
  { id: 'brown', label: 'Brown', hex: '#C4A48A' },
  { id: 'pink', label: 'Pink', hex: '#F0C3CE' },
];

export const CYCLOG_ODOR = [
  { id: 'none', label: 'None' },
  { id: 'mild', label: 'Mild or usual' },
  { id: 'fishy', label: 'Fishy' },
  { id: 'ammonia', label: 'Ammonia-like' },
  { id: 'strong', label: 'Unusual or strong' },
];

export const CYCLOG_DSX = [
  { id: 'itch', label: 'Itching' },
  { id: 'burn', label: 'Burning' },
  { id: 'irrit', label: 'Irritation' },
  { id: 'pelvic', label: 'Pelvic discomfort' },
  { id: 'wee', label: 'Pain passing urine' },
  { id: 'sex', label: 'Pain during sex' },
  { id: 'spotting', label: 'Spotting between periods' },
];

export const CYCLOG_NOTES_PLACEHOLDER = 'Anything else worth remembering';
export const CYCLOG_NOTES_MAX = 400;

/* ------------------------------------------------------------------
   WHAT EACH ONE CAN MEAN, AND WHAT ELSE IT CAN MEAN
   ------------------------------------------------------------------ */
export const CYCLOG_DISCHARGE_LEARN = [
  { id: 'eggwhite', t: 'Clear and stretchy, like egg white', s: 'decent',
    why: 'Usually the days around ovulation, when rising oestrogen thins the mucus so sperm can '
      + 'travel through it. It does not confirm that you ovulated, and plenty of cycles produce it '
      + 'without releasing an egg.' },
  { id: 'creamy', t: 'White or creamy, no itch and no odour', s: 'solid',
    why: 'The most common thing there is. It changes through the cycle and between cycles, and on '
      + 'its own it is not a sign of anything.' },
  { id: 'clumpy', t: 'Thick and clumpy, with itching or soreness', s: 'decent',
    why: 'Can go with a yeast infection, but irritation from soap, a new product or a latex '
      + 'sensitivity looks very similar, and so can BV. Self treating the wrong one is common and '
      + 'it delays the right treatment, so this is worth a swab rather than a guess.' },
  { id: 'fishy', t: 'Thin and greyish with a fishy odour', s: 'decent',
    why: 'Often associated with bacterial vaginosis, especially when it is stronger after sex. It '
      + 'is also the pattern most often mistaken for thrush. A test tells them apart; the symptoms '
      + 'do not.' },
  { id: 'ammonia', t: 'An ammonia smell', s: 'thin',
    why: 'Usually urine rather than discharge, often just concentrated urine on a day you drank '
      + 'less. Worth drinking more and seeing whether it settles before assuming infection.' },
  { id: 'yellowgreen', t: 'Yellow or green, frothy, with soreness', s: 'decent',
    why: 'Can go with trichomoniasis or another infection that needs testing and treating, and a '
      + 'partner may need treating too. This is a clinic visit rather than a pharmacy one.' },
  { id: 'brown', t: 'Brown or pink spotting', s: 'solid',
    why: 'Usually old blood at the start or end of a period. Between periods, after sex, or if it '
      + 'is new for you, it is worth mentioning rather than watching.' },
];

/* The things that stop being a diary entry and become a phone call. */
export const CYCLOG_DISCHARGE_RED = {
  title: 'When to ring somebody rather than log it',
  signs: [
    'Severe pelvic or stomach pain',
    'A fever with it',
    'Any unusual discharge or bleeding in pregnancy',
    'A new discharge after a procedure or a coil fitting',
    'Pain that stops you doing the day',
  ],
  close: 'Any of these is a call today rather than a note for later.',
};

export const CYCLOG_DISCHARGE_NOTE =
  'This is a record to take to an appointment, not a test. Discharge overlaps so much between '
  + 'normal, thrush and BV that clinicians swab rather than guess, and so should this.';

export const CYCLOG_FERTILE_NOTE =
  'Mucus patterns and fertile windows are estimates. Neither is contraception.';

/* ------------------------------------------------------------------
   THE TEEN SHARING SWITCH

   Her call: shareable, but only if the girl says so. Her cycle log
   rides on her child record, which anybody the parent granted access
   to can read, so without this a grandparent or a sitter sees it by
   default. Off unless it is turned on, and the wording says whose
   choice it is.
   ------------------------------------------------------------------ */
export const CYCLOG_SHARE = {
  title: 'Who else can see this',
  off: 'Only this phone. Nobody you have shared her profile with can see her cycle.',
  on: 'Shared with anybody who has access to her profile, the same as the rest of it.',
  ask: 'Let the people who can see her profile see her cycle too',
  note: 'Her choice, not a setting to turn on for her. Somebody who thinks a parent is reading '
    + 'along stops writing things down, and the point of the record is that it is honest.',
};

export function cyclogDischargeLearn(id) {
  for (let i = 0; i < CYCLOG_DISCHARGE_LEARN.length; i++) {
    if (CYCLOG_DISCHARGE_LEARN[i].id === id) return CYCLOG_DISCHARGE_LEARN[i];
  }
  return null;
}

/* The four tabs across the top of the screen, from her mockup. */
export const CYCLOG_TABS = [
  { id: 'summary', label: 'Summary' },
  { id: 'log', label: 'Log' },
  { id: 'patterns', label: 'Patterns' },
  { id: 'learn', label: 'Insights' },
];

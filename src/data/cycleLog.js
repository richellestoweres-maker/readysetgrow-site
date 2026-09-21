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
  const src = kind === 'flow' ? CYCLOG_FLOW : kind === 'mood' ? CYCLOG_MOODS : CYCLOG_SYMPTOMS;
  for (let i = 0; i < src.length; i++) if (src[i].id === id) return src[i];
  return null;
}

/* An entry is { flow, moods: [], sx: [] }. Empty entries are removed
   rather than stored, so a day that was opened and closed again
   leaves nothing behind. */
export function cyclogEmpty(entry) {
  if (!entry) return true;
  if (entry.flow) return false;
  if (Array.isArray(entry.moods) && entry.moods.length) return false;
  if (Array.isArray(entry.sx) && entry.sx.length) return false;
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

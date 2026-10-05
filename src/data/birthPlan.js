/**
 * Ready Set Grow: the one page they will actually read
 * ------------------------------------------------------------------
 * The app already let her pick what mattered to her. What it never did
 * was give her anything to take out of the building.
 *
 * WHY A PAGE AND NOT A DOCUMENT
 * The single most useful fact about birth plans is in the research the
 * preferences screen already quotes: the benefit shows up when the plan
 * was TALKED THROUGH with a provider, and a plan written alone and
 * handed over at the door is associated with feeling WORSE about the
 * birth, not better. A long document makes that outcome more likely,
 * not less, because nobody reads it and she believes they have.
 *
 * Midwives and labor nurses say the same thing in plainer words: one
 * side of one page, or it goes in the folder unread. So this builds
 * exactly that. One page. Only the things she actually chose. No
 * preamble, no explanation of what a birth plan is, nothing that
 * lectures the person holding it.
 *
 * WHY IT IS PHRASED THE WAY IT IS
 * Every line is written as a preference rather than an instruction,
 * because that is both true and the version that gets cooperation. The
 * footer says in her words that she knows things change. That line is
 * not decoration. It is the single most common piece of advice from
 * the people who receive these, and it is what stops a plan reading as
 * a list of demands to a room that is trying to help.
 *
 * WHAT IS DELIBERATELY NOT HERE
 * No scripts, no legal language, no "I do not consent to" phrasing, no
 * timing demands. Those make staff defensive and they are not what she
 * came for. The Rights section on the Birth screen says what she is
 * entitled to and says it properly, with sources. This is a different
 * job: it is the thing clipped to the front of her notes.
 */

export const BP_TITLE = 'Your birth plan';

export const BP_SUB =
  'One page, only what you picked, ready to print or send. Take it to an appointment and talk it '
  + 'through, which is the part that actually makes a difference.';

export const BP_WHY = {
  title: 'Short on purpose',
  body:
    'The evidence on birth plans points one way. They help when they have been discussed with your '
    + 'midwife or doctor beforehand, and a long one handed in on the day tends not to get read. One '
    + 'side of one page is what the people receiving it ask for.',
};

/* ------------------------------------------------------------------
   THE DETAILS AT THE TOP

   Not a medical record. Just enough that a page found on a trolley at
   3am can be matched to the person it belongs to, and that whoever is
   holding it knows who to let into the room.
   ------------------------------------------------------------------ */
export const BP_FIELDS = [
  { id: 'name', label: 'Your name', ph: 'The name you want to be called' },
  { id: 'baby', label: 'Baby is called', ph: 'Or whatever you have been calling them' },
  { id: 'support', label: 'With me', ph: 'Who is coming in with you' },
  { id: 'provider', label: 'My midwife or doctor', ph: 'Name or practice' },
  { id: 'place', label: 'Where', ph: 'Hospital or birth centre' },
];

export const BP_NOTE_LABEL = 'Anything else they should know';

export const BP_NOTE_PH =
  'Previous birth, something you are frightened of, a word you would rather they did not use';

export const BP_NOTE_MAX = 400;

/* ------------------------------------------------------------------
   THE CHOICES

   The eight original rows are kept with their original ids and their
   original wording, so nothing anybody has already picked is lost.
   The rest fill in what a real one pager covers and a half finished
   one does not: the room, eating, the cord, feeding, the first bath,
   and what happens if the baby has to leave the room.

   Grouped, because a page with headings is skimmable in the ten
   seconds somebody will give it, and an ungrouped list of twenty is
   not. `sec` names the heading a row prints under.

   Every row has an option that amounts to no strong view, and leaving
   a row blank is normal rather than incomplete. A plan that pressures
   somebody into having an opinion about forceps is doing harm.
   ------------------------------------------------------------------ */
export const BP_SECTIONS = [
  { id: 'labor', label: 'During labor' },
  { id: 'push', label: 'Pushing and birth' },
  { id: 'after', label: 'Straight after' },
  { id: 'baby', label: 'Our baby' },
  { id: 'change', label: 'If plans change' },
];

export const BP_ROWS = [
  /* --- during labor ------------------------------------------- */
  { id: 'who', sec: 'labor', q: 'Who is with me',
    options: [
      { v: 'partner', label: 'My partner' },
      { v: 'doula', label: 'A doula as well' },
      { v: 'family', label: 'Somebody from my family' },
      { v: 'alone', label: 'I would rather it was quiet' },
    ] },
  { id: 'pain', sec: 'labor', q: 'Pain relief',
    options: [
      { v: 'epi', label: 'I want an epidural' },
      { v: 'none', label: 'I want to avoid one if I can' },
      { v: 'see', label: 'I want to decide in the moment' },
      { v: 'ask', label: 'Please do not offer, I will ask' },
    ] },
  { id: 'move', sec: 'labor', q: 'Moving about',
    options: [
      { v: 'up', label: 'I want to stay upright and moving' },
      { v: 'bed', label: 'I would rather be in the bed' },
      { v: 'see', label: 'Whatever feels right then' },
    ] },
  { id: 'mon', sec: 'labor', q: 'Monitoring',
    options: [
      { v: 'int', label: 'Listening in now and then if I am low risk' },
      { v: 'cont', label: 'Continuous is fine with me' },
      { v: 'ask', label: 'Tell me why before it changes' },
    ] },
  { id: 'water', sec: 'labor', q: 'Breaking my waters',
    options: [
      { v: 'ask', label: 'Ask me first and tell me my score' },
      { v: 'fine', label: 'Go ahead if you think it helps' },
      { v: 'late', label: 'I would rather wait as long as is safe' },
    ] },
  { id: 'room', sec: 'labor', q: 'The room',
    options: [
      { v: 'dim', label: 'Lights low and voices down, please' },
      { v: 'music', label: 'I would like my own music on' },
      { v: 'few', label: 'As few people in the room as possible' },
      { v: 'none', label: 'No strong feelings about the room' },
    ] },
  { id: 'eat', sec: 'labor', q: 'Eating and drinking',
    options: [
      { v: 'light', label: 'I would like to eat and drink if I am allowed' },
      { v: 'sips', label: 'Water and ice chips are enough' },
      { v: 'ask', label: 'Tell me what is allowed here' },
    ] },

  /* --- pushing and birth -------------------------------------- */
  { id: 'pushhow', sec: 'push', q: 'How I push',
    options: [
      { v: 'own', label: 'Let me follow my own body if it is safe' },
      { v: 'coach', label: 'I would like to be told when and how' },
      { v: 'see', label: 'Whatever is working on the day' },
    ] },
  { id: 'pushpos', sec: 'push', q: 'Position for pushing',
    options: [
      { v: 'upright', label: 'Upright or on my side if I can' },
      { v: 'back', label: 'On my back is fine' },
      { v: 'see', label: 'I will see how I feel' },
    ] },
  { id: 'cut', sec: 'push', q: 'If a cut is being considered',
    options: [
      { v: 'ask', label: 'Tell me why, at the time' },
      { v: 'avoid', label: 'Only if there is a clear reason' },
      { v: 'fine', label: 'I trust your judgement' },
    ] },
  { id: 'see', sec: 'push', q: 'As the baby is born',
    options: [
      { v: 'mirror', label: 'I would like a mirror, or to reach down' },
      { v: 'tell', label: 'Tell me what is happening as it happens' },
      { v: 'quiet', label: 'I would rather just be left to it' },
    ] },

  /* --- straight after ----------------------------------------- */
  { id: 'after', sec: 'after', q: 'The first few minutes',
    options: [
      { v: 'skin', label: 'Baby on my chest, cord left alone a minute' },
      { v: 'partner', label: 'My partner takes the baby first if I cannot' },
      { v: 'see', label: 'I have not thought about it yet' },
    ] },
  { id: 'cord', sec: 'after', q: 'The cord',
    options: [
      { v: 'wait', label: 'Wait before clamping if all is well' },
      { v: 'partner', label: 'My partner would like to cut it' },
      { v: 'bank', label: 'We are banking or donating it' },
      { v: 'any', label: 'No strong feelings' },
    ] },
  { id: 'placenta', sec: 'after', q: 'Delivering the placenta',
    options: [
      { v: 'managed', label: 'The injection to speed it up is fine' },
      { v: 'nat', label: 'I would like to try without it first' },
      { v: 'ask', label: 'Explain the choice to me at the time' },
    ] },

  /* --- the baby ----------------------------------------------- */
  { id: 'feed', sec: 'baby', q: 'Feeding',
    options: [
      { v: 'breast', label: 'Breastfeeding, and I would like help early' },
      { v: 'bottle', label: 'Bottle feeding' },
      { v: 'both', label: 'Both, and I know what I am doing' },
      { v: 'see', label: 'Still deciding' },
    ] },
  { id: 'formula', sec: 'baby', q: 'If formula is offered',
    options: [
      { v: 'ask', label: 'Please ask me first' },
      { v: 'fine', label: 'That is fine without asking' },
      { v: 'na', label: 'Not applicable' },
    ] },
  { id: 'stay', sec: 'baby', q: 'Where the baby sleeps',
    options: [
      { v: 'room', label: 'In the room with me' },
      { v: 'help', label: 'I may want a break overnight' },
      { v: 'see', label: 'I will decide when I am there' },
    ] },
  { id: 'bath', sec: 'baby', q: 'The first bath',
    options: [
      { v: 'wait', label: 'Please wait a while before bathing them' },
      { v: 'any', label: 'Whenever suits you' },
      { v: 'me', label: 'I would like to be there for it' },
    ] },
  { id: 'vitk', sec: 'baby', q: 'Vitamin K and the newborn checks',
    options: [
      { v: 'yes', label: 'Yes to all of it' },
      { v: 'talk', label: 'I have questions first' },
      { v: 'decided', label: 'We have decided already and will tell you' },
    ] },

  /* --- if plans change ---------------------------------------- */
  { id: 'caes', sec: 'change', q: 'If it becomes a cesarean',
    options: [
      { v: 'gentle', label: 'Awake, partner in, baby on my chest in the operating room' },
      { v: 'quiet', label: 'Keep it calm and tell me what is happening' },
      { v: 'see', label: 'I would rather not think about that' },
    ] },
  { id: 'nicu', sec: 'change', q: 'If the baby needs to leave the room',
    options: [
      { v: 'partner', label: 'My partner goes with the baby' },
      { v: 'stay', label: 'My partner stays with me' },
      { v: 'photo', label: 'Please bring me a photo as soon as you can' },
    ] },
  { id: 'tell', sec: 'change', q: 'If something changes',
    options: [
      { v: 'all', label: 'Tell me everything, even if it is quick' },
      { v: 'partner', label: 'Tell my partner and let them tell me' },
      { v: 'do', label: 'Just do what is needed, explain afterwards' },
    ] },
];

export function bpRowsIn(secId) {
  return BP_ROWS.filter((r) => r.sec === secId);
}

export function bpAnswerLabel(rowId, value) {
  const row = BP_ROWS.filter((r) => r.id === rowId)[0];
  if (!row) return '';
  const opt = (row.options || []).filter((o) => o.v === value)[0];
  return opt ? opt.label : '';
}

/* How many she has actually answered, so the screen can say something
   true rather than show a progress bar toward a number that does not
   matter. Nobody has to fill in all of them. */
export function bpChosen(prefs) {
  const p = (prefs && typeof prefs === 'object') ? prefs : {};
  return BP_ROWS.filter((r) => p[r.id] && bpAnswerLabel(r.id, p[r.id])).length;
}

export function bpSectionsWithAnswers(prefs) {
  const p = (prefs && typeof prefs === 'object') ? prefs : {};
  return BP_SECTIONS.map((s) => ({
    label: s.label,
    lines: bpRowsIn(s.id)
      .filter((r) => p[r.id] && bpAnswerLabel(r.id, p[r.id]))
      .map((r) => ({ q: r.q, a: bpAnswerLabel(r.id, p[r.id]) })),
  })).filter((s) => s.lines.length);
}

/* The line at the bottom of the printed page. Every midwife and labor
   nurse asked about birth plans says some version of this, and a plan
   that carries it is read as a person rather than a list of demands.
   It is hers to delete, which is why it is a choice and not fixed. */
export const BP_FLEX_LINE =
  'I know birth does not follow a plan. If something needs to change, please tell me what is '
  + 'happening and why, and I will go with you.';

export const BP_FLEX_LABEL = 'End the page with this';

export const BP_EMPTY = {
  title: 'Nothing picked yet',
  body: 'Answer only the ones you have a view on. A page with 4 lines you mean is better than 20 '
    + 'you were talked into.',
};

export const BP_PRINT = 'Print it';
export const BP_SHARE = 'Send a copy';
export const BP_PRINT_HINT =
  'On a phone this opens the print sheet, where Save as PDF is usually the first option.';
export const BP_FILENAME = 'birth-plan.txt';

export const BP_TALK = {
  title: 'Take it to an appointment',
  body: 'This is the step the research is actually about. Printing it is not the point, talking it '
    + 'through is. Ask at your next visit whether anything on it would be difficult where you are '
    + 'giving birth, because that answer is worth more than the page.',
};

export const BP_SOURCES = [
  { org: 'Cochrane',
    label: 'Written birth plans, and why discussion with a provider is the part that helps',
    url: 'https://www.cochrane.org/evidence' },
  { org: 'ACOG',
    label: 'Preparing for birth, and talking preferences through in advance',
    url: 'https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins' },
];

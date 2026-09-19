/**
 * Ready Set Grow: The vaccine record
 * ------------------------------------------------------------------
 * What this child has actually had, with dates, and what the series
 * would normally do next. A record, not an argument. The argument, and
 * the case for both sides of it, lives in src/data/vaccines.js and is
 * not repeated here.
 *
 * WHY THIS IS A RECORD AND NOT A REMINDER SYSTEM
 * The single most useful thing an app can do here is answer the
 * question a parent is asked at every appointment, every school form
 * and every A and E visit: has she had her twelve month shots. That is
 * a question about the past. Nagging somebody about the future is a
 * different product and a worse one, particularly in a family that has
 * decided not to do some of this.
 *
 * DECLINING IS A FIRST CLASS STATE
 * A parent who has decided against a vaccine, or against all of them,
 * should still be able to keep a complete and accurate record. So a
 * series can be marked as not being given, and it then reads as
 * settled rather than as permanently overdue. An app that shows a red
 * mark forever is not recording anything, it is nagging.
 *
 * ON THE AGES BELOW
 * These are the ages the doses have been given at in the United States
 * for many years, and they are what is printed on a record card. They
 * are not a claim about what anybody should do. See VAX_WHERE_THINGS
 * STAND for why that distinction matters more in 2026 than it used to.
 *
 * FIELDS
 *   doses[].at        the usual age in months for that dose
 *   doses[].window    what the card actually prints, in words
 *   sdm               the dose or series is one where the guidance has
 *                     said at some point to decide with a doctor
 *   seasonal          given yearly rather than once, so it is recorded
 *                     by date rather than ticked off a list
 */

export const VAX_SERIES = [
  {
    id: 'hepb', label: 'Hepatitis B', long: 'HepB',
    protects: 'A liver infection that a baby can catch at birth and that often causes no symptoms for decades.',
    doses: [
      { n: 1, at: 0, window: 'At birth' },
      { n: 2, at: 1.5, window: '1 to 2 months' },
      { n: 3, at: 9, window: '6 to 18 months' },
    ],
  },
  {
    id: 'rv', label: 'Rotavirus', long: 'RV',
    protects: 'The stomach bug that used to be the commonest reason a baby in the US ended up on a drip.',
    note: 'Drops by mouth rather than an injection. The series has to be started before 15 weeks and finished by 8 months, which is the one real deadline in the whole schedule.',
    doses: [
      { n: 1, at: 2, window: '2 months' },
      { n: 2, at: 4, window: '4 months' },
      { n: 3, at: 6, window: '6 months, brand dependent', optional: true },
    ],
  },
  {
    id: 'dtap', label: 'Diphtheria, tetanus and whooping cough', long: 'DTaP',
    protects: 'Three at once. Whooping cough is the one that matters most in the first months, and it is the reason the first dose is early.',
    doses: [
      { n: 1, at: 2, window: '2 months' },
      { n: 2, at: 4, window: '4 months' },
      { n: 3, at: 6, window: '6 months' },
      { n: 4, at: 16, window: '15 to 18 months' },
      { n: 5, at: 60, window: '4 to 6 years' },
    ],
  },
  {
    id: 'hib', label: 'Hib', long: 'Haemophilus influenzae type b',
    protects: 'A bacterial meningitis that was common in under fives and is now rare.',
    doses: [
      { n: 1, at: 2, window: '2 months' },
      { n: 2, at: 4, window: '4 months' },
      { n: 3, at: 6, window: '6 months, brand dependent', optional: true },
      { n: 4, at: 13, window: '12 to 15 months' },
    ],
  },
  {
    id: 'pcv', label: 'Pneumococcal', long: 'PCV',
    protects: 'Pneumonia, ear infections and another kind of meningitis.',
    doses: [
      { n: 1, at: 2, window: '2 months' },
      { n: 2, at: 4, window: '4 months' },
      { n: 3, at: 6, window: '6 months' },
      { n: 4, at: 13, window: '12 to 15 months' },
    ],
  },
  {
    id: 'ipv', label: 'Polio', long: 'IPV',
    protects: 'Polio. The inactivated kind, which is not the swallowed one older relatives will remember.',
    doses: [
      { n: 1, at: 2, window: '2 months' },
      { n: 2, at: 4, window: '4 months' },
      { n: 3, at: 12, window: '6 to 18 months' },
      { n: 4, at: 60, window: '4 to 6 years' },
    ],
  },
  {
    id: 'mmr', label: 'Measles, mumps and rubella', long: 'MMR',
    protects: 'Three at once. Measles is the one that spreads fastest of almost anything known.',
    note: 'Not given before 12 months in normal circumstances, because antibodies passed on in pregnancy get in the way before then. An earlier dose is sometimes given for travel and does not count towards the two.',
    doses: [
      { n: 1, at: 13, window: '12 to 15 months' },
      { n: 2, at: 60, window: '4 to 6 years' },
    ],
  },
  {
    id: 'var', label: 'Chickenpox', long: 'Varicella',
    protects: 'Chickenpox, and the shingles it can come back as decades later.',
    doses: [
      { n: 1, at: 13, window: '12 to 15 months' },
      { n: 2, at: 60, window: '4 to 6 years' },
    ],
  },
  {
    id: 'hepa', label: 'Hepatitis A', long: 'HepA',
    protects: 'Another liver infection, this one usually caught from food or water.',
    doses: [
      { n: 1, at: 15, window: '12 to 23 months' },
      { n: 2, at: 21, window: 'At least 6 months after the first' },
    ],
  },
  {
    id: 'flu', label: 'Flu', long: 'Influenza', seasonal: true,
    protects: 'Whatever flu is going round this winter. It changes every year, which is why this one does too.',
    note: 'From 6 months, once a year. The first year a child has it they need two doses about a month apart, and after that it is one.',
    doses: [],
  },
  {
    id: 'covid', label: 'COVID-19', long: 'COVID-19', seasonal: true, sdm: true,
    protects: 'COVID-19.',
    note: 'The guidance on this one has changed more than any other in the schedule and is still moving. Whether and when it is offered to a healthy child is currently a decision to make with your own doctor.',
    doses: [],
  },
  {
    id: 'rsv', label: 'RSV', long: 'RSV antibody or maternal vaccine', seasonal: true,
    protects: 'The winter virus that fills baby wards every year. The commonest reason a baby under one is admitted.',
    note: 'Not a vaccine in the usual sense for the baby. Either the mother has a vaccine late in pregnancy, or the baby has an antibody injection before their first RSV season. One or the other, not usually both.',
    doses: [],
  },
  {
    id: 'tdap', label: 'Tdap booster', long: 'Tdap',
    protects: 'The same three as DTaP, topped up for a bigger body.',
    doses: [
      { n: 1, at: 138, window: '11 to 12 years' },
    ],
  },
  {
    id: 'hpv', label: 'HPV', long: 'Human papillomavirus',
    protects: 'The virus behind almost all cervical cancer and a large share of throat cancers, in both sexes.',
    note: 'Two doses if it is started before the thirteenth birthday, three if it is started later. Starting earlier means fewer needles, which is most of why the age is where it is.',
    doses: [
      { n: 1, at: 138, window: '11 to 12 years' },
      { n: 2, at: 144, window: '6 to 12 months after the first' },
      { n: 3, at: 150, window: 'Only if the series was started at 15 or older', optional: true },
    ],
  },
  {
    id: 'menacwy', label: 'Meningococcal ACWY', long: 'MenACWY',
    protects: 'Four kinds of meningococcal disease, which is rare and can kill a healthy teenager in a day.',
    doses: [
      { n: 1, at: 138, window: '11 to 12 years' },
      { n: 2, at: 192, window: '16 years' },
    ],
  },
  {
    id: 'menb', label: 'Meningococcal B', long: 'MenB', sdm: true,
    protects: 'The fifth kind, the one ACWY does not cover. Common in college outbreaks.',
    note: 'This one has been a decide with your doctor vaccine for years rather than a routine one, and it is usually discussed around sixteen.',
    doses: [
      { n: 1, at: 192, window: '16 to 18 years' },
      { n: 2, at: 198, window: 'A few months after the first' },
    ],
  },
];

/* THE BIT THAT IS HONEST ABOUT 2026
   Written to be read by somebody who is not following the news, and
   dated, because it will go out of date and a reader deserves to know
   how old it is. It takes no side. Both bodies named here are real and
   both are worth reading. */
export const VAX_WHERE_THINGS_STAND = {
  title: 'Why the schedule is not one schedule right now',
  asOf: 'September 2026',
  body: [
    'For decades the CDC schedule and the American Academy of Pediatrics schedule were the same document. In 2026 they are not.',
    'The federal schedule was rewritten to move several vaccines, including hepatitis B at birth, hepatitis A, rotavirus, flu, COVID and meningococcal, from a routine recommendation to a decide it with your doctor recommendation. The American Academy of Pediatrics published its own schedule keeping them as routine.',
    'A federal court then suspended the rewritten schedule on the grounds that the process used to change it was likely unlawful, which put an earlier version back in force while appeals continue. That is where it stood when this was written.',
    'What this means for you in practice: your pediatrician, your state, your school district and your insurer may not all be working from the same list, and none of them is being difficult. Ask your own doctor which schedule their practice is following and why.',
    'The ages in this record are the ones that have been on a US vaccination card for years and that both schedules still use for the doses they include. They are here so you can keep track of what has been given, not to tell you what to do.',
  ],
};

export const VAX_RECORD_INTRO =
  'What has actually been given, with dates. The question every form, every new doctor and every '
  + 'school office asks, answered from your own pocket.';

export const VAX_RECORD_HOW = {
  title: 'Filling it in',
  items: [
    'Copy it off the card from the last appointment rather than from memory. Memory reliably merges two visits into one.',
    'If you do not have the dates, your pediatrician has them, and every state has an immunization registry that can send you a full copy.',
    'An approximate date is far better than a blank. Put the month if that is all you have.',
    'If you have decided against one, mark it as not being given. It will read as settled rather than sitting there looking overdue forever.',
  ],
};

export const VAX_RECORD_NOTE =
  'This is your copy, not an official one. Schools and travel usually want the record from the '
  + 'practice or the state registry, and this is the thing that tells you what to ask them for.';

export const VAX_SCHEDULE_SOURCES = [
  { label: 'Child and adolescent immunization schedule', org: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/vaccines/hcp/imz-schedules/child-adolescent-notes.html' },
  { label: 'Recommended childhood and adolescent immunization schedule, 2026', org: 'American Academy of Pediatrics', url: 'https://publications.aap.org/pediatrics/article/157/3/e2025075754/206175/Recommended-Childhood-and-Adolescent-Immunization' },
  { label: 'Where the two 2026 schedules differ', org: 'Contemporary Pediatrics', url: 'https://www.contemporarypediatrics.com/view/the-unharmonious-2026-child-and-adolescent-immunization-schedule' },
  /* Their Vaccines on the Go app is being taken off the app stores
     and will not be updated again. The same content, kept current by
     the same people, moved to the website below, so that is what is
     linked rather than the app. */
  { label: 'Vaccine Education Center, plain English on every vaccine and the schedule', org: 'Children\u2019s Hospital of Philadelphia', url: 'https://www.chop.edu/parents-pack/vaccines-on-the-go' },
];

/* ------------------------------------------------------------------
 * THE SAME RECORD, BY APPOINTMENT
 *
 * WHY THIS EXISTS, IN HER WORDS: "are all the vaccine check offs by
 * age?"
 *
 * The list above is organised by vaccine, which is how a schedule is
 * printed and is the wrong way round for a parent. Nobody walks out of
 * a pediatric office having had the third dose of four unrelated
 * series. They walk out of the four month visit having had five shots,
 * and the card in their hand is one line with a date on it.
 *
 * So this regroups exactly the same doses by the visit they are given
 * at. Nothing new is recorded and nothing is duplicated. Ticking a
 * dose here and ticking it in the list are the same tick, because both
 * write the same key.
 *
 * THE RANGES OVERLAP THE REAL WORLD, NOT EACH OTHER
 * Each bucket claims a stretch of months and every dose falls in
 * exactly one, so no dose can go missing from this view or appear
 * twice in it. The labels are the windows a card actually prints,
 * which is why some of them are wide.
 *
 * WHAT IS NOT HERE
 * Flu, COVID and RSV. They are yearly rather than one offs, they do
 * not belong to a particular visit, and pinning them to one would be
 * wrong. They stay in the list view and get one card of their own at
 * the bottom of this one.
 * ------------------------------------------------------------------ */
export const VAX_VISITS = [
  { id: 'birth', label: 'In the hospital', when: 'At birth', from: -1, to: 0.9 },
  { id: 'm1', label: 'The first month check', when: '1 to 2 months', from: 1, to: 1.9 },
  { id: 'm2', label: 'The 2 month visit', when: 'Around 2 months', from: 2, to: 3.9 },
  { id: 'm4', label: 'The 4 month visit', when: 'Around 4 months', from: 4, to: 5.9 },
  { id: 'm6', label: 'The 6 month visit', when: 'Around 6 months', from: 6, to: 8.9 },
  { id: 'm6to18', label: 'Any visit between 6 and 18 months', when: '6 to 18 months', from: 9, to: 12.9,
    note: 'These two have a wide window on purpose. They get done at whichever visit falls inside it.' },
  { id: 'm12', label: 'The 12 month visit', when: '12 to 15 months', from: 13, to: 15.9 },
  { id: 'm15', label: 'The 15 to 18 month visit', when: '15 to 18 months', from: 16, to: 20.9 },
  { id: 'm18', label: 'Between 18 months and 4 years', when: 'The quiet stretch, one dose in it', from: 21, to: 59.9,
    note: 'Almost nothing is due in these years. The one to finish is the second hepatitis A, at least six months after the first.' },
  { id: 'y4', label: 'Before they start school', when: '4 to 6 years', from: 60, to: 137.9,
    note: 'The big one. Four boosters together, and most states want them on the form before kindergarten.' },
  { id: 'y11', label: 'The 11 to 12 year visit', when: '11 to 12 years', from: 138, to: 143.9 },
  { id: 'y12', label: 'Between 12 and 16 years', when: 'The follow up doses', from: 144, to: 191.9,
    note: 'The second HPV dose comes 6 to 12 months after the first. A series started at 15 or older needs a third.' },
  { id: 'y16', label: 'The 16 year visit', when: '16 years', from: 192, to: 195.9 },
  { id: 'y17', label: 'The late teen ones', when: '16 to 18 years', from: 196, to: 400 },
];

/* Every one off dose that belongs to this visit, in the order the
   series are listed, so the card reads the way the appointment goes. */
export function vaxVisitDoses(visit) {
  const out = [];
  if (!visit) return out;
  VAX_SERIES.forEach((s) => {
    if (s.seasonal) return;
    s.doses.forEach((d) => {
      if (d.at >= visit.from && d.at <= visit.to) out.push({ series: s, dose: d });
    });
  });
  return out;
}

/* Done, of how many, for one visit, with declined series left out of
   both numbers rather than counted as outstanding forever. */
export function vaxVisitCounts(visit, record, skipped) {
  const skip = {};
  (skipped || []).forEach((id) => { skip[id] = true; });
  let given = 0, total = 0;
  vaxVisitDoses(visit).forEach((x) => {
    if (skip[x.series.id] || x.dose.optional) return;
    total += 1;
    if ((record || {})[vaxDoseKey(x.series.id, x.dose.n)]) given += 1;
  });
  return { given: given, total: total };
}

/* Where this child is relative to a visit. Same gentleness as a single
   dose: nothing is ever missed, it was due a while ago. */
export function vaxVisitState(visit, months, counts) {
  if (counts && counts.total && counts.given >= counts.total) return 'done';
  if (months === null || months === undefined) return 'unknown';
  if (months < visit.from - 1) return 'later';
  if (months <= visit.to + 2) return 'about now';
  return 'was due';
}

/* The visit to open first. The one they are at or coming up to, rather
   than the top of the list, because a parent of a twelve year old
   should not scroll past the newborn shots to find their place. */
export function vaxVisitNow(months) {
  if (months === null || months === undefined) return VAX_VISITS[0].id;
  let last = VAX_VISITS[0];
  for (let i = 0; i < VAX_VISITS.length; i++) {
    const v = VAX_VISITS[i];
    if (months >= v.from && months <= v.to) return v.id;
    if (months > v.to) last = v;
  }
  return last.id;
}

export const VAX_VISITS_INTRO =
  'The same record, grouped the way the appointments actually happen. Tick them off here or in the '
  + 'list, it is the same record either way.';

export const VAX_SEASONAL_NOTE = {
  title: 'The yearly ones',
  body: 'Flu, COVID and RSV are not tied to a particular visit, because they are given every year '
    + 'rather than once. Flu is from 6 months old. They are recorded by date in the list rather than '
    + 'ticked off, since there is no end to the series.',
};

export function vaxSeries(id) {
  return VAX_SERIES.filter((v) => v.id === id)[0] || null;
}

export function vaxDoseKey(seriesId, n) {
  return seriesId + ':' + n;
}

/* Where a dose sits relative to this child's age. Deliberately gentle:
   nothing is ever "missed", only "was due a while ago", because a
   parent who is behind usually knows and does not need it said twice. */
export function vaxDoseState(series, dose, months, given) {
  if (given) return 'given';
  if (months === null || months === undefined) return 'unknown';
  if (months < dose.at - 1) return 'later';
  if (months <= dose.at + 2) return 'about now';
  return 'was due';
}

/* What is worth surfacing on the child's profile. One line, or nothing
   at all, and nothing for a series that has been declined. */
export function vaxNextUp(months, record, skipped) {
  if (months === null || months === undefined) return null;
  const skip = {};
  (skipped || []).forEach((id) => { skip[id] = true; });
  let best = null;
  VAX_SERIES.forEach((s) => {
    if (skip[s.id] || s.seasonal) return;
    s.doses.forEach((d) => {
      if (d.optional) return;
      if ((record || {})[vaxDoseKey(s.id, d.n)]) return;
      if (months < d.at - 1) return;
      if (!best || d.at < best.dose.at) best = { series: s, dose: d };
    });
  });
  return best;
}

export function vaxCounts(record, skipped) {
  const skip = {};
  (skipped || []).forEach((id) => { skip[id] = true; });
  let given = 0, total = 0;
  VAX_SERIES.forEach((s) => {
    if (s.seasonal) return;
    s.doses.forEach((d) => {
      if (d.optional) return;
      if (skip[s.id]) return;
      total += 1;
      if ((record || {})[vaxDoseKey(s.id, d.n)]) given += 1;
    });
  });
  return { given: given, total: total };
}

export default VAX_SERIES;

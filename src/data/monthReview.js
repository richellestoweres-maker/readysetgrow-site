/**
 * Ready Set Grow: The Evening Check In, and a Month Looked Back On
 * ------------------------------------------------------------------
 * She asked for two things. In the evening, "How is today going?"
 * should come up on its own as a small pop up, get filled in, and fold
 * away to the bottom of the child's profile where it can be looked back
 * on. And at the end of a month, all of that logging should turn into
 * something useful: a few suggestions, some guidance.
 *
 * THE RULE FOR THE MONTH
 * It notices, it points somewhere useful, and it never diagnoses. A
 * run of hard days is something to mention at the next appointment,
 * never a sign of a condition. A good month is said plainly. Every line
 * here has a written version, and Willow may rewrite it with the real
 * numbers when she is available, the same as the daily lift.
 */

/* From this hour, the evening question can pop up. */
export const CI_POP_HOUR = 17;

export const CI_POP = {
  eyebrow: 'Before the day ends',
  ask: (name) => 'How was today for ' + name + '?',
  sub: 'Takes about 30 seconds. It folds away to the bottom of their profile once it is done.',
  go: 'Fill it in',
  skip: 'Not tonight',
};

/* The fewest days in a month worth saying anything about. */
export const MONTH_MIN_DAYS = 5;

/* Month names come from MONTH_NAMES in the app, which already has them. */

/* Counts a child's check ins for one month, "2026-09". */
export function monthCounts(checkins, ym) {
  const out = { days: 0, rows: {} };
  Object.keys(checkins || {}).forEach((day) => {
    if (day.slice(0, 7) !== ym) return;
    const e = checkins[day] || {};
    out.days++;
    Object.keys(e.answers || {}).forEach((id) => {
      if (!out.rows[id]) out.rows[id] = { hard: 0, mixed: 0, good: 0 };
      const v = e.answers[id];
      if (out.rows[id][v] !== undefined) out.rows[id][v]++;
    });
  });
  return out;
}

/* What was logged that month, by kind, most first. */
export function monthLogs(logs, ym, labelOf) {
  const by = {};
  (logs || []).forEach((l) => {
    if (String(l.at || '').slice(0, 7) !== ym) return;
    by[l.typeId] = (by[l.typeId] || 0) + 1;
  });
  return Object.keys(by).map((id) => ({ id: id, label: labelOf(id) || id, n: by[id] }))
    .sort((a, b) => b.n - a.n);
}

/* The written guidance. A handful of plain lines, each one pointing at
   something real. Returns [] when there is not enough to go on. */
export function monthGuidance(name, counts, logs, rowLabels) {
  if (!counts || counts.days < MONTH_MIN_DAYS) return [];
  const out = [];
  const g = counts.rows.general || { hard: 0, mixed: 0, good: 0 };
  const total = g.hard + g.mixed + g.good;
  if (total) {
    if (g.good / total >= 0.6) {
      out.push({ text: 'Most of ' + name + '\'s days this month were good ones. Whatever the rhythm has been '
        + 'lately seems to suit them, so it is worth noticing what has been different and leaning on it '
        + 'when a harder week comes.' });
    } else if (g.hard / total >= 0.5) {
      out.push({ text: 'This month had more hard days than easy ones. That is not a verdict on you or on '
        + name + '. It is worth bringing to the next appointment, and you have it written down now, which '
        + 'makes that conversation much easier.', go: 'willow' });
    } else {
      out.push({ text: 'A real mix this month, which is what most months look like from the inside. If the '
        + 'hard days bunched together, look at what else was going on that week, such as sleep, a change '
        + 'at daycare or school, or somebody being ill.', go: 'sleep' });
    }
  }
  Object.keys(counts.rows).forEach((id) => {
    if (id === 'general') return;
    const r = counts.rows[id];
    const n = r.hard + r.mixed + r.good;
    if (n >= 4 && r.hard / n >= 0.4) {
      out.push({ text: (rowLabels[id] || 'One area') + ' was marked hard on ' + r.hard + ' of ' + n
        + ' days. The page on it has a few things to try on those days, and a note of when they happen '
        + 'is useful to anybody helping.', go: 'understand' });
    }
  });
  if (logs && logs.length) {
    const all = logs.reduce((s, l) => s + l.n, 0);
    out.push({ text: 'You logged ' + all + ' thing' + (all === 1 ? '' : 's') + ' this month, most often '
      + logs[0].label.toLowerCase() + '. That record is what makes patterns visible, and it is there '
      + 'whenever a doctor asks.', go: 'logs' });
  }
  return out;
}

export function monthPrompt(c) {
  return [
    'A parent has been doing a short daily check in about their child for a month. Write them a short note looking back on it.',
    c.name ? 'The child: ' + c.name + (c.age ? ', ' + c.age : '') + '.' : '',
    'How the days went: ' + c.summary,
    c.logs ? 'What they logged: ' + c.logs + '.' : '',
    '',
    '3 sentences at most, 70 words maximum.',
    'Notice one real pattern from the numbers, then offer one small, practical thing to try next month.',
    'Never diagnose, never name a condition, never suggest something is wrong with the child or the parent.',
    'If the hard days outnumber the good ones, gently say it is worth mentioning at the next appointment.',
    'Warm and plain. No exclamation marks, no dashes as punctuation, no lists.',
    'Return the note only.',
  ].filter(Boolean).join('\n');
}

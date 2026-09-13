/**
 * Ready Set Grow: Log Export
 * ------------------------------------------------------------------
 * Turns saved logs into something a parent can hand to a pediatrician.
 *
 * WHY THIS MATTERS MORE THAN IT LOOKS
 * A parent who walks into an appointment saying "he's been off for a
 * couple of weeks" gets a different visit than one who hands over two
 * weeks of feeds, wet diapers and medication times. The second parent
 * gets taken seriously faster and the doctor gets actual data.
 *
 * So the export is not a data dump. It is organized the way a clinician
 * reads: who and how old, the window covered, counts and patterns first,
 * then the detail underneath.
 *
 * TWO FORMATS
 * Plain text for email and messages, because it reads fine anywhere.
 * CSV for anyone who wants it in a spreadsheet.
 *
 * Everything here is pure. No React, no storage, no sharing. That means
 * it can be tested properly, which matters for something a doctor reads.
 */

import { getLogType, summarizeLog, getMedInterval } from '../data/logTypes';
import { formatAge } from './age';

/* ------------------------------------------------------------------
 * TIME HELPERS
 * ------------------------------------------------------------------ */

function asDate(value) {
  const d = value instanceof Date ? value : new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}

function dayKey(value) {
  const d = asDate(value);
  if (!d) return '';
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function dayLabel(value) {
  const d = asDate(value);
  if (!d) return '';
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}

function timeLabel(value) {
  const d = asDate(value);
  if (!d) return '';
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, '0');
  const ap = h >= 12 ? 'PM' : 'AM';
  h = h % 12; if (h === 0) h = 12;
  return `${h}:${m} ${ap}`;
}

/** Logs from the last N days, newest first. */
export function filterRecent(logs, days = 14, now) {
  if (!Array.isArray(logs)) return [];
  const end = asDate(now) || new Date();
  const cutoff = end.getTime() - days * 86400000;
  return logs
    .filter((l) => {
      const t = asDate(l && l.at);
      return t && t.getTime() >= cutoff && t.getTime() <= end.getTime() + 60000;
    })
    .sort((a, b) => asDate(b.at) - asDate(a.at));
}

/* ------------------------------------------------------------------
 * THE SUMMARY A CLINICIAN ACTUALLY WANTS
 * ------------------------------------------------------------------ */

/**
 * Counts and averages per day, which is what gets asked in the room:
 * how many feeds, how many wet diapers, how much sleep.
 */
export function summarize(logs, days = 14, now) {
  const recent = filterRecent(logs, days, now);
  const byType = {};
  recent.forEach((l) => {
    byType[l.typeId] = byType[l.typeId] || { count: 0, logs: [] };
    byType[l.typeId].count += 1;
    byType[l.typeId].logs.push(l);
  });

  const dayCount = Math.max(1, new Set(recent.map((l) => dayKey(l.at))).size);

  const lines = [];
  Object.keys(byType).forEach((typeId) => {
    const type = getLogType(typeId);
    if (!type) return;
    const entry = byType[typeId];
    const perDay = (entry.count / dayCount).toFixed(1);
    let extra = '';

    if (typeId === 'diapers') {
      const wet = entry.logs.filter((l) => ['Wet', 'Both'].includes(l.values && l.values.kind)).length;
      const dirty = entry.logs.filter((l) => ['Dirty', 'Both'].includes(l.values && l.values.kind)).length;
      extra = `, about ${(wet / dayCount).toFixed(1)} wet and ${(dirty / dayCount).toFixed(1)} dirty per day`;
    }
    if (['sleep', 'breastfeeding', 'pumping', 'reading'].includes(typeId)) {
      const mins = entry.logs.reduce((n, l) => n + (Number((l.values || {}).duration) || Number((l.values || {}).minutes) || 0), 0);
      if (mins > 0) {
        const hrs = Math.floor(mins / dayCount / 60);
        const rem = Math.round((mins / dayCount) % 60);
        extra = `, averaging ${hrs > 0 ? hrs + 'h ' : ''}${rem}m per day`;
      }
    }
    if (typeId === 'bottle') {
      const oz = entry.logs.reduce((n, l) => n + (Number((l.values || {}).amount) || 0), 0);
      if (oz > 0) extra = `, about ${(oz / dayCount).toFixed(1)} oz per day`;
    }
    if (typeId === 'symptoms') {
      const temps = entry.logs.map((l) => Number((l.values || {}).temperature)).filter((n) => n > 0);
      if (temps.length) extra = `, highest recorded temperature ${Math.max(...temps).toFixed(1)} F`;
    }

    lines.push(`${type.label}: ${entry.count} in ${dayCount} day${dayCount === 1 ? '' : 's'} (about ${perDay} per day)${extra}`);
  });

  return { recent, dayCount, byType, lines };
}

/**
 * Medication needs its own section, because the question in the room is
 * always what was given and when, not how many times in total.
 */
export function summarizeMedication(logs, days = 14, now) {
  const meds = filterRecent(logs, days, now).filter((l) => l.typeId === 'medication');
  if (meds.length === 0) return null;

  const byName = {};
  meds.forEach((l) => {
    const name = ((l.values || {}).name || 'Unnamed').trim();
    const key = name.toLowerCase();
    byName[key] = byName[key] || { name, doses: [] };
    byName[key].doses.push(l);
  });

  return Object.keys(byName).map((key) => {
    const entry = byName[key];
    const interval = getMedInterval(entry.name);
    const sorted = [...entry.doses].sort((a, b) => asDate(a.at) - asDate(b.at));
    return {
      name: entry.name,
      total: sorted.length,
      interval,
      doses: sorted.map((l) => ({
        at: l.at,
        when: `${dayLabel(l.at)} ${timeLabel(l.at)}`,
        dose: (l.values || {}).dose || '',
        reason: (l.values || {}).reason || '',
      })),
    };
  });
}

/**
 * When the next dose of a given medicine is due, from the last one taken.
 * Timing only. This never says how much, because dose is by weight and
 * comes from a pediatrician.
 */
export function nextDoseDue(logs, medName, now) {
  const interval = getMedInterval(medName);
  if (!interval) return null;
  const name = (medName || '').trim().toLowerCase();
  const last = (Array.isArray(logs) ? logs : [])
    .filter((l) => l.typeId === 'medication' && ((l.values || {}).name || '').trim().toLowerCase().includes(name))
    .map((l) => asDate(l.at))
    .filter(Boolean)
    .sort((a, b) => b - a)[0];
  if (!last) return null;

  const due = new Date(last.getTime() + interval.minHours * 3600000);
  const current = asDate(now) || new Date();
  const readyNow = current >= due;
  const minsLeft = Math.max(0, Math.round((due - current) / 60000));

  // How many doses in the trailing 24 hours, which is the cap that matters
  const since = current.getTime() - 86400000;
  const in24 = (Array.isArray(logs) ? logs : []).filter((l) => {
    if (l.typeId !== 'medication') return false;
    if (!((l.values || {}).name || '').trim().toLowerCase().includes(name)) return false;
    const t = asDate(l.at);
    return t && t.getTime() >= since;
  }).length;

  return {
    interval,
    lastAt: last,
    lastLabel: `${dayLabel(last)} ${timeLabel(last)}`,
    dueAt: due,
    dueLabel: timeLabel(due),
    readyNow,
    minutesUntilDue: minsLeft,
    dosesInLast24h: in24,
    atOrOverCap: interval.maxPer24h ? in24 >= interval.maxPer24h : false,
  };
}

/* ------------------------------------------------------------------
 * THE REPORT
 * ------------------------------------------------------------------ */

const DISCLAIMER =
  'Recorded by a parent in the Ready Set Grow app. These are parent observations, not clinical measurements.';

/**
 * A plain text report, ready to email or print.
 * Organized the way a clinician reads: who, when, the pattern, then detail.
 */
export function buildReport(child, logs, options = {}) {
  const days = options.days || 14;
  const now = options.now;
  const { recent, dayCount, lines } = summarize(logs, days, now);
  const meds = summarizeMedication(logs, days, now);

  const out = [];
  const name = (child && child.name) || 'Child';
  const age = child && child.birthday ? formatAge(child.birthday) : '';

  out.push('READY SET GROW LOG SUMMARY');
  out.push('');
  out.push(`Child: ${name}${age ? `  (${age})` : ''}`);
  if (child && child.birthday) out.push(`Date of birth: ${child.birthday}`);
  out.push(`Period covered: last ${days} days`);
  out.push(`Entries recorded: ${recent.length} across ${dayCount} day${dayCount === 1 ? '' : 's'}`);
  out.push(`Generated: ${new Date().toLocaleString()}`);
  out.push('');

  if (recent.length === 0) {
    out.push('No entries recorded in this period.');
    out.push('');
    out.push(DISCLAIMER);
    return out.join('\n');
  }

  out.push('OVERVIEW');
  out.push('');
  lines.forEach((l) => out.push(`  ${l}`));
  out.push('');

  if (meds && meds.length) {
    out.push('MEDICATION');
    out.push('');
    meds.forEach((m) => {
      out.push(`  ${m.name}  (${m.total} dose${m.total === 1 ? '' : 's'} recorded)`);
      if (m.interval) out.push(`    Label guidance: ${m.interval.note}`);
      m.doses.forEach((d) => {
        out.push(`    ${d.when}${d.dose ? `  ${d.dose}` : ''}${d.reason ? `  (${d.reason})` : ''}`);
      });
      out.push('');
    });
  }

  out.push('FULL LOG');
  out.push('');

  const byDay = {};
  recent.forEach((l) => {
    const k = dayKey(l.at);
    byDay[k] = byDay[k] || [];
    byDay[k].push(l);
  });

  Object.keys(byDay).sort().reverse().forEach((k) => {
    const entries = byDay[k].sort((a, b) => asDate(a.at) - asDate(b.at));
    out.push(`  ${dayLabel(entries[0].at)}`);
    entries.forEach((l) => {
      const type = getLogType(l.typeId);
      const summary = summarizeLog(l);
      const note = (l.values || {}).notes || (l.values || {}).note || '';
      // For a plain note the summary IS the note, so do not print it twice.
      const tail = note && note !== summary ? `  |  ${note}` : '';
      out.push(`    ${timeLabel(l.at).padEnd(9)} ${(type ? type.label : l.typeId).padEnd(15)} ${summary}${tail}`);
    });
    out.push('');
  });

  out.push(DISCLAIMER);
  return out.join('\n');
}

/** The same data as CSV, for anyone who wants it in a spreadsheet. */
export function buildCsv(child, logs, options = {}) {
  const days = options.days || 14;
  const recent = filterRecent(logs, days, options.now);
  const esc = (v) => {
    const s = v === undefined || v === null ? '' : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };

  const rows = [['date', 'time', 'type', 'summary', 'details', 'notes']];
  recent
    .slice()
    .sort((a, b) => asDate(a.at) - asDate(b.at))
    .forEach((l) => {
      const type = getLogType(l.typeId);
      const values = l.values || {};
      const details = Object.keys(values)
        .filter((k) => k !== 'notes' && k !== 'note' && values[k] !== '' && values[k] !== undefined)
        .map((k) => `${k}=${Array.isArray(values[k]) ? values[k].join('/') : values[k]}`)
        .join('; ');
      rows.push([
        dayKey(l.at),
        timeLabel(l.at),
        type ? type.label : l.typeId,
        summarizeLog(l),
        details,
        values.notes || values.note || '',
      ]);
    });

  return rows.map((r) => r.map(esc).join(',')).join('\n');
}

/** A short subject line for the email a parent sends. */
export function buildSubject(child, days = 14) {
  const name = (child && child.name) || 'Child';
  return `${name} log summary, last ${days} days`;
}

export default buildReport;

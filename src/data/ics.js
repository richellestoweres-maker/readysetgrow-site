/**
 * Ready Set Grow: the calendar as a file
 * ------------------------------------------------------------------
 * WHY THIS EXISTS, AND WHY IT EXISTS BEFORE THE SUBSCRIPTION LINK
 *
 * She followed the iPhone steps on the subscribe card and nothing
 * happened, because step one was "copy the link" and there was no
 * link. I shipped the instructions, the three platforms and the
 * security warning before I shipped the feed they describe, with the
 * admission in a quiet line at the bottom that nobody reads after
 * they have already gone looking in Settings. That was the wrong
 * order and it wasted her evening.
 *
 * THE TWO THINGS PEOPLE MEAN BY "PUT IT ON HIS PHONE"
 *
 * 1. A subscription. A URL the phone checks every few hours forever,
 *    so changes here turn up there. This is the better one and it
 *    needs a server to sit at the end of that URL, which is work that
 *    is not finished.
 *
 * 2. A copy, right now. A .ics file, which every calendar app on
 *    every platform has understood for twenty years. Share it, he
 *    taps it, the appointments land in his calendar. It is a snapshot
 *    rather than a subscription, so something moved here does not
 *    move there.
 *
 * The second one needs no server, works today, and is what somebody
 * actually wants at the moment they ask. So this builds that, and it
 * says plainly that it is a copy, because a snapshot that a family
 * believes is live is worse than no snapshot at all.
 *
 * WHAT GOES IN AND WHAT STAYS OUT
 * Appointments she typed, and nothing else. No vaccine estimates, no
 * period predictions, no due date, no chore lines. Those are guesses
 * and private facts, and a file that leaves this app can be forwarded
 * by anybody to anybody. The calendar a grandparent gets should be
 * the school run and the dentist.
 *
 * TIMES ARE FLOATING, ON PURPOSE
 * Everything in this app is a plain local date and time with no zone,
 * because a family is all in one place and a 4pm swimming lesson is
 * 4pm. So these go out as floating local times rather than being
 * converted to UTC against a guessed zone, which is the thing that
 * puts everybody's dentist appointment an hour out twice a year.
 */

export const ICS_TITLE = 'Put this on a phone';

export const ICS_PRODID = '-//Ready Set Grow//Family Calendar//EN';

export const ICS_NOW_TITLE = 'Send a copy now';

export const ICS_NOW_BODY =
  'Makes a calendar file of everything coming up and hands it to your phone\'s share sheet, so you '
  + 'can text it to somebody. They tap it and the appointments drop into whatever calendar they '
  + 'already use. Nothing to install and nothing to set up.';

export const ICS_NOW_WARN =
  'This is a copy, not a link. Something you change here afterwards will not change on their phone, '
  + 'so send a fresh one when plans move.';

export const ICS_SUB_TITLE = 'Keep it in sync instead';

export const ICS_SUB_NOT_READY =
  'The live link is not built yet. When it is, one tap will subscribe a phone and it will stay '
  + 'up to date on its own. Until then the copy above is the way to do it.';

export const ICS_SHARE_LABEL = 'Share the calendar';

export const ICS_DOWNLOAD_LABEL = 'Download the file';

export const ICS_EMPTY = 'Nothing coming up to send yet.';

export const ICS_FILENAME = 'family-calendar.ics';

/* How far ahead a copy reaches. A year is enough for birthdays and
   the school year and short enough that the file stays small. */
export const ICS_AHEAD_DAYS = 365;

/* ------------------------------------------------------------------
   THE FORMAT

   RFC 5545. It is fussy in three specific ways and all three of them
   are the reason a hand rolled .ics opens on a Mac and silently fails
   on an Android: commas, semicolons and backslashes have to be
   escaped, newlines become a literal backslash n, and no line may be
   longer than 75 octets.
   ------------------------------------------------------------------ */
export function icsEscape(text) {
  return String(text == null ? '' : text)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');
}

/* Folding is by octets, not characters, so a line of emoji or
   accented letters counts for more than its length. Continuation
   lines start with one space. */
export function icsFold(line) {
  const enc = (s) => (typeof TextEncoder !== 'undefined'
    ? new TextEncoder().encode(s).length : s.length);
  if (enc(line) <= 75) return line;
  const out = [];
  let cur = '';
  let limit = 75;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (enc(cur + ch) > limit) {
      out.push(cur);
      cur = ' ' + ch;
      limit = 74;
    } else {
      cur += ch;
    }
  }
  if (cur) out.push(cur);
  return out.join('\r\n');
}

function pad(n) { return String(n).padStart(2, '0'); }

/* 'YYYY-MM-DD' to 'YYYYMMDD'. */
export function icsDate(date) {
  return String(date || '').replace(/-/g, '');
}

/* 'YYYY-MM-DD' plus 'HH:MM' to a floating local date time. */
export function icsDateTime(date, time) {
  const t = String(time || '00:00').split(':');
  return icsDate(date) + 'T' + pad(Number(t[0]) || 0) + pad(Number(t[1]) || 0) + '00';
}

/* The one stamp that genuinely is UTC, because it records when the
   file was written rather than when anything happens. */
export function icsStamp(now) {
  const d = now || new Date();
  return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate())
    + 'T' + pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + 'Z';
}

export function icsRrule(repeat) {
  if (repeat === 'weekly') return 'RRULE:FREQ=WEEKLY';
  if (repeat === 'fortnightly') return 'RRULE:FREQ=WEEKLY;INTERVAL=2';
  if (repeat === 'monthly') return 'RRULE:FREQ=MONTHLY';
  if (repeat === 'yearly') return 'RRULE:FREQ=YEARLY';
  return '';
}

/* The app's reminder choices do not all map onto what a calendar file
   can express. A fixed offset before the start does; "that morning at
   9" does not, because .ics alarms are relative to the event. The
   ones that cannot be said exactly are turned into the nearest honest
   offset rather than dropped, since a reminder an hour out is better
   than no reminder, and rather than faked precisely, since a family
   relying on a wrong alarm is worse than both. */
export function icsAlarmMinutes(remindId, time) {
  if (!remindId || remindId === 'none') return null;
  if (remindId === '30m') return 30;
  if (remindId === '2h') return 120;
  const t = String(time || '09:00').split(':');
  const startMins = (Number(t[0]) || 0) * 60 + (Number(t[1]) || 0);
  if (remindId === 'same9') return Math.max(10, startMins - (9 * 60));
  if (remindId === '1d') return (24 * 60) - (18 * 60) + startMins;
  if (remindId === '2d') return (48 * 60) - (18 * 60) + startMins;
  if (remindId === '1w') return (7 * 24 * 60) - (18 * 60) + startMins;
  return null;
}

/* ------------------------------------------------------------------
   THE FILE

   events: the app's own event objects, already filtered to the ones
           the family typed. Readings and estimates never reach here.
   name:   what the calendar is called once it lands on a phone.
   ------------------------------------------------------------------ */
export function icsBuild(events, name, now) {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:' + ICS_PRODID,
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:' + icsEscape(name || 'Family'),
  ];
  const stamp = icsStamp(now);

  (events || []).forEach((e, i) => {
    if (!e || !e.date) return;
    lines.push('BEGIN:VEVENT');
    lines.push('UID:' + icsEscape(String(e.id || ('rsg' + i))) + '@readysetgrow-app.com');
    lines.push('DTSTAMP:' + stamp);

    if (e.time) {
      const mins = Number(e.mins) > 0 ? Number(e.mins) : 60;
      const t = String(e.time).split(':');
      const startM = (Number(t[0]) || 0) * 60 + (Number(t[1]) || 0);
      /* Clipped to the end of the day, same as the grid does, so a
         long evening thing does not spill into tomorrow's column on
         somebody else's calendar either. */
      const endM = Math.min(startM + mins, 23 * 60 + 59);
      const endH = Math.floor(endM / 60);
      lines.push('DTSTART:' + icsDateTime(e.date, e.time));
      lines.push('DTEND:' + icsDateTime(e.date, pad(endH) + ':' + pad(endM - endH * 60)));
    } else {
      /* An all day event's DTEND is exclusive, so a single day runs to
         the next morning. Getting this wrong is what makes a birthday
         show as two days long. */
      const d = new Date(e.date + 'T00:00:00');
      d.setDate(d.getDate() + 1);
      lines.push('DTSTART;VALUE=DATE:' + icsDate(e.date));
      lines.push('DTEND;VALUE=DATE:' + d.getFullYear()
        + pad(d.getMonth() + 1) + pad(d.getDate()));
    }

    lines.push('SUMMARY:' + icsEscape(e.title || 'Something'));
    if (e.where) lines.push('LOCATION:' + icsEscape(e.where));
    if (e.notes) lines.push('DESCRIPTION:' + icsEscape(e.notes));
    const rr = icsRrule(e.repeat);
    if (rr) lines.push(rr);

    const alarm = icsAlarmMinutes(e.remind, e.time);
    if (alarm != null) {
      lines.push('BEGIN:VALARM');
      lines.push('ACTION:DISPLAY');
      lines.push('DESCRIPTION:' + icsEscape(e.title || 'Something'));
      lines.push('TRIGGER:-PT' + Math.round(alarm) + 'M');
      lines.push('END:VALARM');
    }
    lines.push('END:VEVENT');
  });

  lines.push('END:VCALENDAR');
  return lines.map(icsFold).join('\r\n') + '\r\n';
}

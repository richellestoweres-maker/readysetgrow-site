/**
 * Ready Set Grow: Fireflies
 * ------------------------------------------------------------------
 * WHAT THIS IS
 * A night sky. Every parent who is awake right now and has said so is
 * one light in it. You light yours, you see the others, and you can
 * tap one to send a wordless "me too" that arrives as a small pulse
 * and a number. That is the entire feature.
 *
 * WHAT IT DELIBERATELY IS NOT
 * It is not a map. There is no location in this file, none is
 * collected, none is stored, and none is ever sent. That was a
 * decision, not an omission, and it is worth writing down why so that
 * nobody helpfully adds it back later.
 *
 * ONE. The feeling being chased here is "other lights are on, I am not
 * the only one up at 3am". That feeling comes entirely from presence.
 * Knowing somebody is awake delivers all of it. Knowing roughly where
 * their house is delivers none of it.
 *
 * TWO. The people using this are disproportionately women alone in a
 * house at night with a newborn, and that population overlaps heavily
 * with domestic violence. A record saying "a new mother is awake and
 * alone, roughly here, at 3am" is a targeting tool the moment it leaks
 * or gets scraped. Fuzzing coordinates to ten miles sounds like a lot
 * right up until you are in a rural county where ten miles holds four
 * houses.
 *
 * THREE. Precise location is sensitive data under the Texas Data
 * Privacy and Security Act, defined there as within 1,750 feet, and it
 * needs real affirmative consent rather than a line in the terms.
 * Collecting none means there is nothing to consent to, nothing to
 * leak, and nothing to argue about.
 *
 * WHY THERE IS NO "WHAT I AM DOING" LABEL EITHER
 * The obvious next idea is letting somebody say they are feeding, or
 * pumping, or rocking. It is not here, and that is also deliberate.
 * Washington's My Health My Data Act covers reproductive health
 * information, it has no size threshold at all so being small does not
 * exempt this app, and it lets individual people sue directly. A
 * record tying an account to "breastfeeding at 3am" is that kind of
 * data. A record saying only "awake" is not. The difference in what a
 * parent gets out of the screen is nearly nothing. The difference in
 * exposure is everything.
 *
 * SO THE WHOLE DOCUMENT IS: awake until this time, and a count of how
 * many people saw it. No name, no username, no child, no words, no
 * place, no activity. There is nothing in a firefly to moderate,
 * because there is nothing in a firefly.
 *
 * ON THE DOCUMENT ID
 * One document per account, keyed by the account id, so the collection
 * can never grow past one row per person however many nights they are
 * up. Relighting overwrites rather than adding.
 */

export const FIREFLY_TITLE = 'Fireflies';

export const FIREFLY_SUB = 'Somebody else is awake right now.';

/* WHAT THIS SCREEN IS FOR, WHICH IS NOT EXPLAINING ITSELF.
   The first version of this copy spent four paragraphs justifying the
   design decisions in this file to somebody sitting in the dark at
   3am. She does not need my reasoning, she needs to feel less alone.
   The reasoning lives in the header above and on the privacy screen.
   Everything below is written for her. */

export const FIREFLY_WHAT = [
  'Light yours and you join the sky. Tap somebody else\u2019s light to send a quiet me too.',
  'No names, no messages, nothing to write. Just the two of you knowing.',
];

export const FIREFLY_LIT_MINUTES = 45;

export const FIREFLY_LIMIT = 200;

/* The three states of the sky. An empty sky needs saying most
   carefully, because the one person it is talking to is the one most
   likely to feel it. */
export const FIREFLY_ALONE =
  'Yours is the only one lit right now. It stays up for a while, and whoever wakes next will see it.';

export const FIREFLY_DARK =
  'The sky is dark just now. Light yours and you will be the first one up.';

export function firefliesLine(others) {
  if (others <= 0) return '';
  if (others === 1) return 'One other person is awake right now.';
  return String(others) + ' other people are awake right now.';
}

export const FIREFLY_LIGHT = 'Light mine';
export const FIREFLY_OUT = 'Put mine out';

export function firefliesMineLine(minutes) {
  if (minutes <= 0) return 'It just went out. Light it again whenever you like.';
  if (minutes === 1) return 'Up for one more minute.';
  return 'Up for another ' + String(minutes) + ' minutes.';
}

export function firefliesGlowLine(glow) {
  if (!glow) return 'Nobody has tapped yours yet. They will.';
  if (glow === 1) return 'Somebody saw your light and said me too.';
  return String(glow) + ' people saw your light and said me too.';
}

export const FIREFLY_SENT = 'Sent.';

/* Written rather than generated, so there is something warm on the
   screen the instant she lights it even if Willow is slow or off. */
export const FIREFLY_AFTER = [
  'There you are.',
  'That is you in the sky now.',
  'Your light is up.',
];

export function fireflyAfterLine(seed) {
  const n = String(seed || '').split('').reduce((a, ch) => a + ch.charCodeAt(0), 0);
  return FIREFLY_AFTER[n % FIREFLY_AFTER.length];
}

/* The long nights, said once, at the bottom, for whoever scrolls. Not
   a feature list and not a policy. */
export const FIREFLY_NIGHT = {
  title: 'The middle of the night',
  body: [
    'The hours between about 2 and 5 are the worst of it, and not only because of the tiredness. The house is silent, the world has gone to bed, and it is very easy to feel like the only person on earth still awake and still needed.',
    'You are not. On any given night there are thousands of people doing exactly this, in exactly this state, at exactly this hour. They are just all in their own dark rooms, which is the whole problem.',
    'That is all this is. A way of seeing the other rooms.',
  ],
};

export const FIREFLY_GUEST =
  'Fireflies needs an account, because a sky with one person in it is not a sky. It takes a minute, '
  + 'and it keeps everything else you have saved here safe too.';

export const FIREFLY_OFFLINE =
  'The sky needs a connection. It will be here when you have one.';

/* One line, at the bottom, linking to the one place all of this lives.
   It used to be four bullet points and a paragraph, on this screen, in
   the middle of the night. */
export const FIREFLY_QUIET_NOTE =
  'Your light carries no name and no location. How that works is in Privacy.';

/* Placement.

   A light has to land in the same spot every time the screen repaints
   or the sky twitches, so position comes from the account id rather
   than from a random number. Same id, same place, all night. */
export function fireflySpot(id, i) {
  const s = String(id || '') + ':' + String(i || 0);
  let h = 2166136261;
  for (let n = 0; n < s.length; n++) {
    h ^= s.charCodeAt(n);
    h = (h * 16777619) >>> 0;
  }
  const a = (h % 1000) / 1000;
  const b = ((h >>> 10) % 1000) / 1000;
  const c = ((h >>> 20) % 1000) / 1000;
  return {
    /* Kept off the very edges so nothing is half cut off, and off the
       top strip where the count sits. */
    left: 5 + a * 90,
    top: 10 + b * 78,
    /* A little variation in size, brightness and rhythm, so it reads as
       a scatter of living things rather than a grid of dots. */
    size: 5 + c * 5,
    delay: (a * 7).toFixed(2),
    dur: (3.4 + b * 3.2).toFixed(2),
  };
}

export function firefliesMinutesLeft(out, now) {
  const left = Number(out || 0) - Number(now || Date.now());
  if (left <= 0) return 0;
  return Math.ceil(left / 60000);
}

export function fireflyIsLit(doc, now) {
  return !!doc && Number(doc.out || 0) > Number(now || Date.now());
}

export default FIREFLY_TITLE;

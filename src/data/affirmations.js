/**
 * Ready Set Grow: Affirmations
 * ------------------------------------------------------------------
 * Two different things live here, and the difference matters.
 *
 * MARGIN LINES are the short handwritten phrases in the mockups. They sit
 * on the soft shapes at the edges of every screen. They are brand voice:
 * warm, short, never instructional.
 *
 * PARENT NOTES are the real feature. They are addressed to the parent
 * rather than about the child, and they exist because this app talks all
 * day to someone who is usually tired and often convinced they are doing
 * it wrong. A parenting app that never once tells the parent they are
 * doing well is missing half its user.
 *
 * WHAT MAKES A GOOD PARENT NOTE
 * It has to be earned rather than generic. "You are doing amazing" is
 * empty. "You checked. That is what a parent who is paying attention
 * does" is about something they actually did. Specific beats warm.
 *
 * WHAT THESE MUST NEVER DO
 * Never talk someone out of getting help. An affirmation that lands on a
 * parent whose gut says something is wrong must not soothe them into
 * waiting, which is why none of these say everything is fine, and why
 * several point the other way.
 */

/* ------------------------------------------------------------------
 * MARGIN LINES
 * Short enough to sit in a corner in a handwritten face. Line breaks are
 * intentional, they are set with <br> in the web build and \n in the app.
 * ------------------------------------------------------------------ */

export const MARGIN_LINES = [
  { id: 'possibilities', lines: ['Little people', 'big possibilities'] },
  { id: 'braver', lines: ['A kinder', 'brighter', 'braver', 'tomorrow'] },
  { id: 'smallSteps', lines: ['Small steps', 'Brighter', 'Days'] },
  { id: 'futures', lines: ['Brighter children', 'Brighter futures'] },
  { id: 'moments', lines: ['Every moment', 'matters'] },
  { id: 'bigFutures', lines: ['Small moments', 'brighten', 'big futures'] },
  { id: 'everyday', lines: ['Braver kinder', 'brighter', 'every day'] },
  { id: 'stories', lines: ['Small stories', 'brighter days'] },
  { id: 'growing', lines: ['Growing together', 'one day at a time'] },
  { id: 'enough', lines: ['You are already', 'enough'] },
  { id: 'roots', lines: ['Deep roots', 'bright leaves'] },
  { id: 'slowly', lines: ['Growing slowly', 'is still', 'growing'] },
  { id: 'seen', lines: ['Seen, known,', 'loved'] },
  { id: 'today', lines: ['Today counts', 'more than', 'you think'] },
  { id: 'ownTime', lines: ['Every child', 'in their', 'own time'] },
  { id: 'hardDays', lines: ['Hard days', 'pass', 'love stays'] },
  { id: 'wonder', lines: ['Room to grow', 'room to', 'wonder'] },
  { id: 'begin', lines: ['Ready, set,', 'begin again'] },
  /* Richelle's, September 2026. */
  { id: 'ownPace', lines: ["It's okay to grow", 'at your own pace'] },
  { id: 'bestEnough', lines: ['Your best', 'is enough'] },
  { id: 'progress', lines: ['Strive for progress,', 'not perfection'] },
  { id: 'mistakes', lines: ['Mistakes help me', 'learn and grow'] },
  { id: 'different', lines: ['Growth looks different', 'for everyone'] },
  { id: 'seeds', lines: ['Planting seeds', 'of love'] },
  /* Written to fill the margins, September 2026, in the same voice. */
  { id: 'betterThan', lines: ['You are doing', 'better than', 'you think'] },
  { id: 'slowMornings', lines: ['Slow mornings', 'still count'] },
  { id: 'littleHands', lines: ['Little hands,', 'big hearts'] },
  { id: 'graceOver', lines: ['Grace over', 'perfect'] },
  { id: 'restIsPart', lines: ['Rest is', 'part of', 'growing'] },
  { id: 'oneSmall', lines: ['One small thing', 'at a time'] },
  { id: 'loveFirst', lines: ['Love first,', 'always'] },
  { id: 'messyDays', lines: ['Messy days', 'make the', 'best memories'] },
  { id: 'ownSeason', lines: ['Bloom in', 'your own', 'season'] },
  { id: 'quietMoments', lines: ['Quiet moments', 'grow deep'] },
  { id: 'beginHere', lines: ['Begin where', 'you are'] },
  { id: 'softer', lines: ['Softer than', 'yesterday'] },
  { id: 'keepShowing', lines: ['Keep', 'showing up'] },
  { id: 'stillForward', lines: ['Tiny steps', 'are still', 'forward'] },
  { id: 'safePlace', lines: ['You are their', 'safe place'] },
  { id: 'patienceGrows', lines: ['Patience grows', 'like everything', 'else'] },
  { id: 'sunAfter', lines: ['Sunshine after', 'the rain'] },
  { id: 'gentleHands', lines: ['Gentle hands,', 'gentle hearts'] },
  { id: 'wholeJob', lines: ['Here is the', 'whole job'] },
  { id: 'roomToBe', lines: ['Room to be', 'exactly', 'who they are'] },
];

/* ------------------------------------------------------------------
 * PARENT NOTES
 * The feature. One is surfaced a day, and they are chosen by context
 * rather than at random where context is available.
 * ------------------------------------------------------------------ */

export const PARENT_NOTES = [
  { id: 'showed-up', context: 'any',
    text: 'You showed up today. On the ordinary days that is the entire job, and you did it.' },
  { id: 'worry', context: 'any',
    text: 'The fact that you worry about whether you are doing this right is itself evidence that you are paying attention.' },
  { id: 'repair', context: 'hardDay',
    text: 'You will lose your patience sometimes. What your child learns from is what happens after, and coming back is the part that teaches them.' },
  { id: 'not-behind', context: 'milestones',
    text: 'Your child is not a checklist and you are not being graded. Ranges exist because children are different, not because some are failing.' },
  { id: 'asked', context: 'concern',
    text: 'You noticed something and you asked about it. That is exactly what a parent who is paying attention does, and nobody will think you are overreacting.' },
  { id: 'tired', context: 'sleep',
    text: 'Broken sleep is a physical injury, not a character flaw. Lower every other standard while this lasts. It is temporary even when it does not feel it.' },
  { id: 'safe-place', context: 'behavior',
    text: 'They fall apart with you because you are the safest person they have. It is a compliment delivered in the worst possible format.' },
  { id: 'feeding', context: 'feeding',
    text: 'However your baby is fed, they are fed. The method matters far less than almost anyone will tell you.' },
  { id: 'newborn', context: 'newborn',
    text: 'Nothing about this stage is a test you can fail. You are keeping a very small person alive and loved, and that is the whole assignment right now.' },
  { id: 'comparison', context: 'any',
    text: 'You are comparing your behind the scenes to everyone else’s highlight reel. Their hard days just are not on the internet.' },
  { id: 'teen', context: 'teen',
    text: 'Being pushed away and staying available anyway is one of the hardest things parenting asks. It is also the thing that keeps the door open.' },
  { id: 'no-perfect', context: 'any',
    text: 'Children do not need a perfect parent. They need one who keeps coming back, and you are already doing that.' },
  { id: 'you-too', context: 'any',
    text: 'You are allowed to need care too. Looking after yourself is not taken from them, it is what makes the rest of it possible.' },
  { id: 'hard-is-hard', context: 'hardDay',
    text: 'Today was hard. That is allowed to just be true. It does not have to mean anything about you.' },
  { id: 'trust-gut', context: 'concern',
    text: 'If your gut says something is wrong, keep asking until someone actually looks. You know your child better than any chart does.' },
];

/* ------------------------------------------------------------------
 * SELECTION
 *
 * Deterministic rather than random. A phrase that reshuffles every time a
 * screen redraws is distracting, and a parent who wants to show someone
 * the nice thing the app said should be able to find it again.
 * ------------------------------------------------------------------ */

/**
 * Stable small hash, so the same seed always gives the same pick.
 *
 * The mixing step at the end matters more than it looks. Date strings for
 * two days in a row differ by one character, and a plain rolling hash
 * turns that into a near constant step, so "yesterday plus one" lands on
 * a predictable neighbor once you take it modulo a short list. The
 * finalizer scrambles the bits so consecutive days scatter instead.
 */
function hashSeed(seed) {
  const s = String(seed == null ? 'rsg' : seed);
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  h ^= h >>> 16;
  h = Math.imul(h, 2246822507) >>> 0;
  h ^= h >>> 13;
  h = Math.imul(h, 3266489909) >>> 0;
  h ^= h >>> 16;
  return h >>> 0;
}

/** Today as a string, so the choice changes once a day and not per render. */
export function todayKey(date) {
  const d = date ? new Date(date) : new Date();
  if (Number.isNaN(d.getTime())) return 'rsg';
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

/**
 * Three margin lines for a screen, guaranteed to be different from each
 * other. Seeded so they hold still while a parent is reading.
 */
export function pickMarginLines(seed, count) {
  const n = MARGIN_LINES.length;
  const want = Math.max(1, Math.min(typeof count === 'number' ? count : 3, n));
  const h = hashSeed(seed);
  const used = [];
  const pick = (i) => {
    let k = ((i % n) + n) % n;
    while (used.includes(k)) k = (k + 1) % n;
    used.push(k);
    return MARGIN_LINES[k];
  };
  const out = [];
  // Spread the picks around the list rather than taking a run of
  // neighbors, so two shapes on the same screen never read as a pair.
  for (let i = 0; i < want; i++) out.push(pick(h + i * 3 + (h % (i + 2))));
  return out;
}

/**
 * The parent note for today.
 *
 * context narrows the pool where we know something useful, for example a
 * newborn parent or a parent who has just been reading about sleep. With
 * no context it draws from the ones that apply to any day.
 */
export function getParentNote(seed, context) {
  const pool = context
    ? PARENT_NOTES.filter((n) => n.context === context)
    : [];
  const list = pool.length ? pool : PARENT_NOTES.filter((n) => n.context === 'any');
  const source = list.length ? list : PARENT_NOTES;
  return source[hashSeed(seed) % source.length];
}

/**
 * Picks a context from the child's age, so a newborn parent and a teen
 * parent are not handed the same encouragement.
 */
export function contextForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return null;
  if (months < 4) return 'newborn';
  if (months < 12) return 'sleep';
  if (months < 60) return 'behavior';
  if (months >= 132) return 'teen';
  return null;
}

export default PARENT_NOTES;

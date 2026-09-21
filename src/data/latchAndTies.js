/**
 * Ready Set Grow: The Latch, And The Thing Everybody Blames
 * ------------------------------------------------------------------
 * WHY THIS FILE EXISTS
 * The Feeding screen talked about what to feed and never once about
 * how the feeding physically works. A parent whose baby clicks at the
 * breast, slides off, feeds for fifty minutes and is hungry again in
 * twenty had nowhere in this app to find out what that means. The
 * oral ties care topic existed, buried two screens away under
 * Understanding, and it opened on the evidence review rather than on
 * the question she actually came with, which is "what am I looking
 * at".
 *
 * THE ORDER THIS CONTENT IS IN, AND WHY
 * Signs first. What it usually is second. What it sometimes is third.
 * That order is deliberate and it is the opposite of how the internet
 * does it. Search any one of these signs and the first result names a
 * tongue tie, because the pages that name a tie are written by people
 * who release ties. Latch depth causes far more of this, latch depth
 * is fixable in one visit with somebody who knows what they are
 * looking at, and a parent who reads that first gets the cheap fix
 * offered before the procedure.
 *
 * THE OTHER HALF OF THE RULE
 * Ties are real. A baby who genuinely cannot transfer milk and whose
 * parent is told for four months that it is positioning is also being
 * failed, and that failure ends in a weaning nobody chose. So this
 * file does not talk anybody out of a frenotomy. It gives her the
 * three questions that separate a real functional problem from a
 * diagnosis somebody reached for, and it says plainly when to stop
 * trying to fix it at home.
 *
 * ON BOTTLES
 * Everything here is written for bottle feeding too. A shallow latch
 * on a bottle nipple clicks, leaks and swallows air exactly the same
 * way, and half the parents reading this are feeding expressed milk
 * or formula. Splitting the content in two would have meant writing
 * the bottle half badly.
 *
 * SOURCES
 * AAP 2024 clinical report on ankyloglossia, AAP breastfeeding policy
 * (2022), and CDC infant nutrition guidance. Listed at the bottom.
 */

export const LATCH_INTRO =
  'Feeding is a physical skill, and like any physical skill it has a shape that works and a '
  + 'shape that does not. Almost everything that goes wrong in the early weeks is the shape, '
  + 'and the shape is fixable. Start here before you start reading about ties.';

/* ------------------------------------------------------------------
 * WHAT A DEEP LATCH ACTUALLY LOOKS LIKE
 * Written as things she can see from where she is sitting, because
 * she cannot see inside the mouth and most descriptions assume she
 * can.
 * ------------------------------------------------------------------ */

export const DEEP_LATCH = {
  title: 'What a deep latch looks like',
  headline: 'A deep latch takes in a mouthful of breast, not a nipple. On a bottle it takes in the wide part, not the tip.',
  intro:
    'These are the things you can actually see from where you are sitting, in the order they '
    + 'happen. If most of them are true, the latch is doing its job.',
  signs: [
    {
      sign: 'Their nose lines up with the nipple before they open, not their mouth.',
      why: 'Starting nose to nipple makes them tip their head back to reach, and a tipped back head is what opens the jaw wide. Lining up mouth to nipple gives you a shallow latch every time.',
    },
    {
      sign: 'The mouth opens wide, like a yawn, before they come on.',
      why: 'A small opening can only take the nipple. Wait for the wide one, even if it takes 3 tries.',
    },
    {
      sign: 'The chin is pressed in and the nose is clear.',
      why: 'Chin leading means the tongue is under the right part of the breast. A baby who can breathe easily at the breast is a baby who is on deeply.',
    },
    {
      sign: 'More of the areola is visible above the top lip than below the bottom one.',
      why: 'An off center latch is the point. The nipple should end up toward the roof of the mouth, away from the part of the jaw that compresses.',
    },
    {
      sign: 'Both lips are turned out, not tucked in.',
      why: 'A tucked lower lip is easy to fix. Press gently on the chin and it usually rolls out.',
    },
    {
      sign: 'Cheeks are rounded and full, not dimpled or hollow.',
      why: 'Dimpling means they are pulling a vacuum against air, which is the single clearest sign the seal is not holding.',
    },
    {
      sign: 'The rhythm changes after the first half minute.',
      why: 'Fast short sucks at the start to trigger letdown, then long slow draws with a pause you can hear. That pause is a swallow. Swallows are the measure of a feed, not minutes.',
    },
    {
      sign: 'It stops hurting after the first few seconds.',
      why: 'A stretch or a tug for the first seconds is common. Sharp pain that carries on through the feed is information, not something to breathe through.',
    },
  ],
  bottleNote:
    'On a bottle the same rules hold. Wait for the wide open mouth, aim the nipple at the roof '
    + 'of the mouth, get the lips out past the narrow neck onto the wide base, and hold the '
    + 'bottle closer to level than upright so they have to work for it. Upright bottle feeding '
    + 'pours milk in faster than a baby can pace, which is where a lot of gulping, spluttering '
    + 'and wind comes from.',
};

/* ------------------------------------------------------------------
 * THE SIGNS SHE CAME HERE FOR
 * Split by who is showing them, because a parent usually notices one
 * side or the other and does not connect the two.
 * ------------------------------------------------------------------ */

export const LATCH_SIGNS = {
  intro:
    'Any one of these on its own is worth a look. 2 or 3 together, and feeding is working '
    + 'harder than it needs to.',
  inBaby: [
    {
      sign: 'Clicking or a small smacking sound while they feed',
      means:
        'The seal is breaking and resealing, so they are swallowing air along with the milk. '
        + 'Clicking is the most reported sign there is, and it is much more often a shallow latch '
        + 'or a fast letdown they are struggling to keep up with than it is a tie.',
    },
    {
      sign: 'Sliding off, or gradually working their way down onto the tip',
      means:
        'A latch that starts deep and shallows out as the feed goes on usually means the jaw is '
        + 'tiring or the position is letting gravity pull them off. Try more support under them '
        + 'and relatching partway through instead of pushing on.',
    },
    {
      sign: 'Dimpled or sucked in cheeks',
      means: 'They are pulling against air rather than against milk. Break the seal and start again.',
    },
    {
      sign: 'Milk running out of the corners of the mouth',
      means: 'A leak is a seal problem. It happens on bottles for the same reason it happens at the breast.',
    },
    {
      sign: 'Feeds that go on and on and they are hungry again almost at once',
      means:
        'Long plus ineffective is the pairing that matters. Long feeds alone are normal in a '
        + 'newborn, and cluster feeding in the evening is normal too. Long feeds with very few '
        + 'swallows, and hunger again within a few minutes, means milk is not moving.',
    },
    {
      sign: 'Falling asleep within a few minutes, every single feed',
      means:
        'Newborns are sleepy. A baby who falls asleep because feeding is hard work with little '
        + 'reward is different from a baby who fed well and drifted off full, and the difference '
        + 'shows up in the diapers and on the scale.',
    },
    {
      sign: 'A lot of wind, hiccups, or arching and pulling off mid feed',
      means:
        'Air swallowed through a broken seal has to go somewhere. Fixing the seal usually does '
        + 'more for this than any amount of winding afterwards.',
    },
    {
      sign: 'Weight gain that has stalled, or fewer wet diapers than expected',
      means:
        'This is the one that is not about comfort. This one gets seen by somebody today, not '
        + 'worked on at home. Diapers and the scale are the only honest measure of how much went in.',
    },
    {
      sign: 'A tongue that cannot lift to the roof of the mouth, or a heart shaped tip when they cry',
      means:
        'This one genuinely points at anatomy. Note it, mention it, and still start with a '
        + 'feeding assessment rather than with a referral for a procedure.',
    },
  ],
  inYou: [
    {
      sign: 'Sharp pain that carries on past the first few seconds',
      means:
        'Not normal, not something to toughen up through, and almost always fixable. Pain is the '
        + 'fastest signal you have that the latch is shallow.',
    },
    {
      sign: 'A nipple that comes out slanted, wedged, or shaped like a new lipstick',
      means:
        'Textbook shallow latch. The nipple is being compressed against the hard part of the '
        + 'jaw instead of sitting back near the soft palate.',
    },
    {
      sign: 'A white or blanched stripe across the nipple after a feed',
      means: 'Compression again, sometimes with vasospasm on top of it. Warmth right after a feed helps the pain while you fix the cause.',
    },
    {
      sign: 'Cracking, bleeding, or scabs',
      means: 'Damage means friction, and friction means the latch. Skilled help now saves weeks of this.',
    },
    {
      sign: 'Breasts that still feel full after a feed, or blocked ducts that keep coming back',
      means: 'Milk that is not being removed well. That is a transfer problem, and transfer problems and latch problems are usually the same problem.',
    },
    {
      sign: 'Dreading the next feed',
      means:
        'Worth writing down as a sign, because it is treated as a feeling and it is actually '
        + 'data. Nobody dreads something that is going well. Something is wrong and it is '
        + 'probably fixable.',
    },
  ],
};

/* ------------------------------------------------------------------
 * WHAT IT USUALLY IS
 * ------------------------------------------------------------------ */

export const USUAL_CAUSES = {
  title: 'What it usually is',
  headline: 'Before anyone says tie, these 4 account for most of it.',
  causes: [
    {
      cause: 'Latch depth',
      detail:
        'By a wide margin the most common cause of pain, clicking, and poor transfer. It is also '
        + 'the one that can be fixed in a single visit with somebody who knows what they are '
        + 'watching for, at no cost to the baby.',
    },
    {
      cause: 'Position and support',
      detail:
        'A baby who is not well supported spends energy holding on instead of feeding. Tummy to '
        + 'you, ear shoulder and hip in a line, their weight taken by you or a pillow rather than '
        + 'by their own grip on the latch.',
    },
    {
      cause: 'A fast or forceful letdown',
      detail:
        'Clicking, spluttering, pulling off and gulping can all be a baby trying to cope with '
        + 'milk arriving faster than they can swallow. Leaning back so they are working uphill, '
        + 'or letting the first spray into a cloth, usually settles it.',
    },
    {
      cause: 'A flange or bottle nipple that is the wrong size',
      detail:
        'For pumping, a flange that is too big or too small hurts and empties poorly. For '
        + 'bottles, a flow that is too fast makes a baby gulp and a flow that is too slow makes '
        + 'them tire out and give up. Both get blamed on the baby.',
    },
  ],
  theGoodNews:
    'Every one of those is a change somebody can make with you in one appointment. That is why '
    + 'they come first. Not because ties are not real, but because these are cheaper, faster, '
    + 'and reversible, and a procedure is none of those things.',
};

/* ------------------------------------------------------------------
 * WHAT IT SOMETIMES IS
 * ------------------------------------------------------------------ */

export const ABOUT_TIES = {
  title: 'What it sometimes is',
  headline: 'Tongue tie is real. It is also diagnosed far more often than the evidence supports, and both of those are true at once.',
  plain:
    'A tongue tie, called ankyloglossia, is when the band of tissue under the tongue is short or '
    + 'tight enough to stop the tongue lifting and moving the way feeding needs it to. The '
    + 'question that matters is never whether a band is visible, because everybody has one. The '
    + 'question is whether the tongue can do its job.',
  points: [
    'The AAP published a clinical report in 2024 specifically because diagnoses had climbed so sharply, roughly tenfold between 1997 and 2012 and then roughly doubled again by 2016.',
    'The central finding of that report is that most breastfeeding difficulty, pain included, is not caused by ankyloglossia.',
    'Function is the test, not appearance. A tongue that lifts, cups and extends is doing its job whatever the band under it looks like.',
    'Non surgical help comes first. A skilled lactation consultant, and where speech is the concern a speech language pathologist, before any procedure.',
    'Upper lip tie and posterior tongue tie are diagnosed frequently and have notably weaker evidence behind them than classic anterior tongue tie.',
    'Frenotomy is quick and low risk, and low risk is not the same as no reason to be careful. It is a procedure on a newborn, sometimes with stretching aftercare that a lot of parents find distressing.',
    'Where there is a genuine functional problem that skilled feeding support has not resolved, release can help quickly and it is a reasonable thing to do.',
  ],
  askBeforeAProcedure: {
    intro:
      'You are allowed to ask these, and a good provider will not mind. Asking is not being '
      + 'difficult, it is the same thing you would do before any other procedure.',
    questions: [
      'What specific function is impaired here, and what did you see that shows it.',
      'What have we tried first, and how long did we give it.',
      'What does the evidence show for this particular kind of tie, at this age.',
      'What happens if we do nothing for 2 weeks and work on the latch instead.',
      'Who benefits financially from this being done, and is a second opinion available from someone who does not perform them.',
    ],
    note:
      'That last one is not an accusation. It is the ordinary question you would ask about any '
      + 'procedure, and it is worth asking here because the people most likely to diagnose a tie '
      + 'are often the people who release them.',
  },
};

/* ------------------------------------------------------------------
 * WHO TO GET, AND WHEN IT STOPS BEING A HOME PROJECT
 * ------------------------------------------------------------------ */

export const WHO_TO_ASK = {
  title: 'Who to ask, and when',
  headline: 'The right person is an IBCLC, and early rather than as a last resort.',
  body: [
    'IBCLC is the highest lactation credential there is. Many hospitals have one, many pediatric offices can refer to one, and the Affordable Care Act requires most plans to cover lactation support without a copay. A lot of parents never find this out.',
    'Ask for a feeding assessment, which means somebody watches a whole feed and weighs the baby before and after. That measures what actually transferred, which is the number nobody can guess at from across the room.',
    'Go early. Week one help changes the whole trajectory. Week 6 help is repairing 6 weeks of damage and of dread, and the dread is usually the harder part.',
  ],
  ifYouAreDoneTrying:
    'And if you get to the point where you are done, that is allowed. A parent who is coping '
    + 'matters more to a baby than the source of the milk. Fed is best is the position of this '
    + 'whole app and it has no asterisk on it.',
};

export const LATCH_RED_FLAGS = {
  title: 'Stop working on this at home and get seen',
  items: [
    'Your baby is not back to birth weight by about 2 weeks, or has stopped gaining',
    'Fewer wet diapers than expected for their age',
    'Your baby is very hard to wake, or will not wake for feeds',
    'Feeding pain that skilled lactation support has not improved',
    'Your baby cannot hold a latch at all, or feeds are very long and still ineffective',
    'You have a fever, a red painful area on the breast, or you feel like you have flu',
  ],
  urgent:
    'Weight and diapers are the two that do not wait. Everything else on this screen is worth '
    + 'reading tonight. Those two are worth a phone call today.',
};

export const LATCH_SOURCES = [
  { org: 'AAP', label: 'Identification and Management of Ankyloglossia (2024 clinical report)', url: 'https://publications.aap.org/pediatrics/article/154/2/e2024067605/198022/Identification-and-Management-of-Ankyloglossia-and' },
  { org: 'AAP', label: 'Report addresses rise in tongue tie diagnoses', url: 'https://www.healthychildren.org/English/news/Pages/AAP-report-addresses-rise-in-tongue-tie-diagnoses-for-breastfeeding-concerns.aspx' },
  { org: 'AAP', label: 'Breastfeeding and the use of human milk (2022 policy statement)', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Policy-Statement-Breastfeeding-and-the-Use-of' },
  { org: 'CDC', label: 'Infant and toddler nutrition', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/' },
];

/* WHEN THIS TAB EXISTS
   Exactly when the rest of the milk half exists, which is
   showsMilkContent in src/data/eatingTogether.js, opt in and all. It
   had its own copy of that rule for about ten minutes and the copy
   said months <= 24 against the original's months < 24, so a two year
   old got a latch tab with no milk tabs behind it. Two copies of one
   rule drift, so there is only the one. */

export default DEEP_LATCH;

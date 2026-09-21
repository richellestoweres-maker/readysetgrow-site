/**
 * Ready Set Grow: Postpartum
 * ------------------------------------------------------------------
 * The fourth trimester, told honestly.
 *
 * WHY THIS FILE EXISTS
 * Pregnancy gets 40 weeks of appointments and apps. Postpartum gets one
 * six week visit, and historically that visit was the only one. ACOG now
 * calls for contact within the first 3 weeks and ongoing care through
 * 12 weeks, but most people were never told that, and most still get the
 * single appointment. In the gap, people bleed for weeks without being
 * told that is normal, cry in the shower without being told what is not
 * normal, and are handed a baby with no instructions for themselves.
 *
 * WHERE THE DANGER SIGNS LIVE
 * The urgent maternal warning signs and the specific conditions,
 * preeclampsia, hemorrhage and uterine infection, live in pregnancy.js
 * as URGENT_MATERNAL_SIGNS and POSTPARTUM_CONDITIONS. This file points at
 * them rather than restating them, so there is exactly one place in the
 * codebase where those signs are maintained. Getting those out of date in
 * two files at once is how someone gets hurt.
 *
 * WHAT THIS FILE COVERS INSTEAD
 * The lived experience. What happens week by week, what nobody warns you
 * about, what to actually have at home, how to ask for help, and the
 * mental health piece said clearly rather than gently enough to be
 * ignorable.
 *
 * THE MENTAL HEALTH LINE
 * We name symptoms, we normalize, and we route to a human every single
 * time. We never diagnose and we never suggest anyone wait and see. The
 * hotline is listed with every entry that touches it, not buried at the
 * bottom, because the person who needs it is not going to scroll.
 *
 * TONE
 * This is where the app has to be a friend rather than a pamphlet. Not
 * cheerful, not clinical. The register is the friend who had a baby two
 * years ago and tells you the truth.
 */

/* ------------------------------------------------------------------
 * CRISIS AND SUPPORT LINES
 * Referenced by every mental health entry, defined once.
 * ------------------------------------------------------------------ */

export const MATERNAL_SUPPORT_LINES = [
  {
    id: 'nmmh-hotline',
    name: 'National Maternal Mental Health Hotline',
    contact: '1-833-TLC-MAMA, 1-833-852-6262',
    detail: 'Free, confidential, 24 hours a day. Call or text. English and Spanish.',
    url: 'https://mchb.hrsa.gov/programs-impact/national-maternal-mental-health-hotline',
    forWho: 'Any pregnant or postpartum person, or their partner or family, at any level of distress.',
  },
  {
    id: 'psi',
    name: 'Postpartum Support International',
    contact: '1-800-944-4773, call or text',
    detail: 'Helpline plus free online support groups and a directory of specialized providers.',
    url: 'https://postpartum.net/get-help/',
    forWho: 'Support, groups, and finding a therapist or prescriber who specializes in perinatal mental health.',
  },
  {
    id: '988',
    name: '988 Suicide and Crisis Lifeline',
    contact: '988, call or text',
    detail: 'Free, confidential, 24 hours a day.',
    url: 'https://988lifeline.org/',
    forWho: 'Anyone in crisis, including thoughts of harming yourself or your baby.',
  },
];

/* ------------------------------------------------------------------
 * RECOVERY TIMELINE
 * ------------------------------------------------------------------ */

export const RECOVERY_TIMELINE = [
  {
    id: 'days-1-3',
    label: 'The first few days',
    window: 'Days 1 to 3',
    order: 10,
    body:
      'Adrenaline is doing a lot of work right now, and a lot of people feel better than they expect to on ' +
      'day one and considerably worse on day three. Bleeding is heavy and bright red. Afterpains, cramping ' +
      'while your uterus shrinks back down, are strongest during feeding and get worse with each baby you ' +
      'have had. If you had a cesarean, standing up for the first time is the hardest single moment.',
    expect: [
      'Heavy bright red bleeding, with some clots. Ask what size clot should prompt a call.',
      'Cramping during feeding, sometimes strong.',
      'Swelling, sometimes worse than during pregnancy, especially if you had IV fluids.',
      'Night sweats. You may soak through your clothes. This is your body offloading fluid.',
      'Shaking or trembling in the hours right after birth, which is normal and passes.',
      'The first bowel movement, which most people dread and which is genuinely fine with stool softeners.',
    ],
    doThis: [
      'Take the stool softener. Start it before you think you need it, not after.',
      'Take pain medication on a schedule, not once the pain has already broken through.',
      'Use the peri bottle every time you use the bathroom. Warm water, front to back.',
      'Ask for the lactation consultant before you are discharged.',
      'Ask for extra mesh underwear, pads, ice packs and witch hazel pads to take home.',
    ],
  },
  {
    id: 'week-1',
    label: 'The first week',
    window: 'Days 3 to 7',
    order: 20,
    body:
      'Milk usually comes in somewhere around day 3 to 5, and it can arrive dramatically. Engorgement is ' +
      'uncomfortable and passes in a couple of days. Day 3 to 5 is also when the baby blues peak, an ' +
      'emotional crash driven by an enormous hormone shift. Crying for no reason you can name, feeling ' +
      'raw and overwhelmed, being tearful at a commercial, that is baby blues, and it affects most people.',
    expect: [
      'Milk coming in, with fullness, heat and sometimes a low grade temperature.',
      'Baby blues peaking. Weepy, fragile, up and down.',
      'Bleeding still red but usually lighter than day one.',
      'Exhaustion that is different from ordinary tiredness.',
      'Your belly still looking pregnant. It takes weeks, not days.',
    ],
    doThis: [
      'For engorgement, feed or pump on your normal schedule, use cold between, and only remove enough for comfort if you are not feeding at that time.',
      'Sleep when you can, and let someone else hold the baby while you do.',
      'Eat. People forget to eat. Have one handed food within reach of wherever you feed.',
      'Say the crying out loud to someone. Not to hide it, just so it is not only in your head.',
    ],
    flag:
      'Baby blues should peak around day 5 and be clearly easing by about 2 weeks. If it is getting worse ' +
      'instead of better, or it never lifts, that is postpartum depression or anxiety and it is treatable. ' +
      'Call 1-833-852-6262 any time.',
  },
  {
    id: 'weeks-2-6',
    label: 'Weeks 2 to 6',
    window: 'Weeks 2 to 6',
    order: 30,
    body:
      'The visitors stop and the help leaves, usually right when it gets hardest. Physically you are ' +
      'improving. Bleeding is fading to pink then brown then yellowish. Emotionally this is the stretch ' +
      'where people quietly struggle, because everyone has decided you are fine now.',
    expect: [
      'Bleeding changing color and tapering off. It can last up to about 6 weeks in total.',
      'Hair still holding on, before it starts falling out around month 3.',
      'Sweating at night, still.',
      'Feeling like you should be further along than you are.',
      'A cesarean scar that is numb, itchy, or has a shelf above it. All expected.',
    ],
    doThis: [
      'You should be seen or contacted by your provider within the first 3 weeks, per ACOG guidance. If nobody has called you, call them. That is not being difficult.',
      'Go outside once a day, even for 5 minutes. It is not a cure and it does help.',
      'Accept specific help. People say let me know if you need anything and mean it, but nobody knows what to offer. Ask for a specific thing: a grocery run, an hour of holding the baby while you shower.',
      'Do not start a fitness plan yet. Walking is fine, and everything else waits for clearance.',
    ],
    flag:
      'A sudden increase in bleeding after it had tapered, or bright red bleeding returning heavily, is worth ' +
      'a call. So is any of the urgent warning signs list.',
  },
  {
    id: 'weeks-6-12',
    label: 'Weeks 6 to 12',
    window: 'Weeks 6 to 12',
    order: 40,
    body:
      'The 6 week visit is not a finish line, and treating it as one is why so many people fall through. ' +
      'ACOG describes postpartum care as an ongoing process through 12 weeks and beyond, not one appointment. ' +
      'Around month 3 your hair starts falling out in handfuls, which is alarming and temporary.',
    expect: [
      'Hair shedding, sometimes a lot. It regrows.',
      'Being cleared for exercise and sex at the 6 week visit, which is a clearance, not an instruction. Ready is a separate question.',
      'Your body not looking or feeling like it did. Some of that changes and some of it does not.',
      'Emotions leveling out, or not. Both happen and only one needs treatment.',
    ],
    doThis: [
      'Bring a written list to the 6 week visit. You will forget otherwise.',
      'Ask about pelvic floor physical therapy. In much of the world it is standard after birth and in the United States you usually have to ask. If you leak urine, feel heaviness or pressure, or sex is painful, that is what it is for and those things are common but not something you have to live with.',
      'Ask what contraception options work with feeding, if that is relevant to you.',
      'Ask to be screened for depression and anxiety, and answer honestly. The screening only works if you do.',
    ],
    flag:
      'Postpartum depression can start any time in the first year, not just the first weeks. So can postpartum ' +
      'anxiety, which is more common than people realize and often shows up as racing thoughts and inability ' +
      'to sleep even when the baby sleeps.',
  },
  {
    id: 'the-first-year',
    label: 'The rest of the first year',
    window: 'Months 3 to 12',
    order: 50,
    body:
      'The fourth trimester gets the attention, and the recovery is longer than that. Abdominal separation, ' +
      'pelvic floor changes and joint laxity can take a year or more. So can feeling like yourself.',
    expect: [
      'Continued changes as feeding changes or ends, including mood shifts around weaning.',
      'Returning periods, which can be irregular for a while and which are often heavier or different than before.',
      'Being asked when you are having another one, by people with no idea what they are asking.',
    ],
    doThis: [
      'Keep going to your own appointments. Yours, not just the baby’s.',
      'If something has not resolved, say so rather than assuming it is now permanent.',
      'Ask for a referral if you are still in pain, still leaking, or still not feeling right. A year out is not too late.',
    ],
  },
];

/* ------------------------------------------------------------------
 * NOBODY WARNED ME
 * ------------------------------------------------------------------ */

export const NOBODY_WARNED_ME = [
  {
    id: 'bleeding-length',
    thing: 'You bleed for weeks, not days',
    detail:
      'Lochia can last up to about 6 weeks, going from bright red to pink to brown to yellowish. It is not ' +
      'a period. Doing too much too soon can make it turn red again, which is your body telling you to sit down.',
  },
  {
    id: 'night-sweats',
    thing: 'You may soak the sheets at night',
    detail:
      'Your body is offloading the extra fluid it carried in pregnancy, and hormones are dropping fast. Sleep ' +
      'on a towel for a couple of weeks. It passes.',
  },
  {
    id: 'afterpains',
    thing: 'Cramping gets worse with each baby',
    detail:
      'Afterpains are your uterus contracting back down, and they are strongest during feeding because ' +
      'oxytocin drives both. First babies, mild. Third baby, people describe it as labor.',
  },
  {
    id: 'hair-loss',
    thing: 'Your hair falls out around month 3',
    detail:
      'In pregnancy you stopped shedding normally. Around 3 months postpartum, all of it sheds at once. ' +
      'It looks alarming in the shower drain. It regrows, often as a fringe of short pieces at your hairline.',
  },
  {
    id: 'first-poop',
    thing: 'The first bowel movement is a real event',
    detail:
      'Everyone dreads it and nobody says so. Stool softeners, water, and not holding it are the whole answer. ' +
      'If you have stitches, holding a clean pad against them with light pressure helps.',
  },
  {
    id: 'cesarean-shelf',
    thing: 'A cesarean scar can be numb, itchy, and have a shelf',
    detail:
      'Numbness above and around the incision is normal and can last a long time, sometimes permanently. The ' +
      'overhang above the scar is common. Scar massage, once you are healed and cleared, helps with adhesions ' +
      'and sensitivity, and a pelvic floor physical therapist can teach you how.',
  },
  {
    id: 'still-look-pregnant',
    thing: 'You still look pregnant when you leave the hospital',
    detail:
      'Your uterus takes about 6 weeks to return to its size. Nobody puts this in the movies, and people are ' +
      'genuinely shocked by their own reflection on day two.',
  },
  {
    id: 'leaking',
    thing: 'Leaking urine is common and is not something you have to accept',
    detail:
      'Common does not mean normal forever. Pelvic floor physical therapy is real medicine with real results, ' +
      'and in the United States you almost always have to ask for the referral yourself.',
  },
  {
    id: 'intrusive-thoughts',
    thing: 'Frightening thoughts about the baby being hurt are extremely common',
    detail:
      'Sudden vivid intrusive images of something terrible happening are reported by the overwhelming majority ' +
      'of new parents. They are horrifying and they do not mean you want it or would do it. Anxiety produces ' +
      'them. Saying them out loud to a provider is safe and usually a relief. If they are constant, or you feel ' +
      'pulled toward acting on them rather than repelled by them, that is different and it needs help today. ' +
      'Call 1-833-852-6262 or 988.',
    sensitive: true,
  },
  {
    id: 'sex-later',
    thing: 'Cleared at 6 weeks is not the same as ready',
    detail:
      'Hormones, particularly while feeding, commonly cause dryness and lower desire. Pain is not something to ' +
      'push through, and it is a reason to be seen rather than a reason to avoid it forever.',
  },
  {
    id: 'rage',
    thing: 'It can show up as rage, not sadness',
    detail:
      'Postpartum mood disorders often look like irritability, snapping, or a short fuse rather than crying. ' +
      'People miss it in themselves because they are looking for sadness. Anger counts. Say it to your provider.',
  },
  {
    id: 'dmer',
    thing: 'A wave of dread right as milk lets down is a real thing',
    detail:
      'Dysphoric milk ejection reflex, D-MER, is a brief and intense drop in mood in the seconds before ' +
      'letdown, caused by a hormone shift. It lasts a minute or 2 and then lifts. It is physiological, not ' +
      'psychological, and knowing it has a name helps enormously.',
  },
];

/* ------------------------------------------------------------------
 * PERINATAL MOOD AND ANXIETY
 * ------------------------------------------------------------------ */

export const PERINATAL_MENTAL_HEALTH = {
  id: 'perinatal-mental-health',
  label: 'How you are doing',
  headline: 'This is the most common complication of childbirth, and it is treatable',
  intro:
    'Perinatal mood and anxiety disorders affect roughly 1 in 5 birthing people. That makes them more common ' +
    'than gestational diabetes, more common than preeclampsia, and far less talked about. They are not caused ' +
    'by weakness, by not loving your baby enough, or by anything you did.',
  babyBluesVsMore: {
    babyBlues:
      'Tearful, fragile, up and down. Starts in the first days, peaks around day 5, and is clearly easing by ' +
      'about 2 weeks. Affects most people. Does not need treatment.',
    somethingMore:
      'Persists past 2 weeks, or gets worse instead of better, or starts later. Can begin any time in the ' +
      'first year. Needs support, and treatment works.',
  },
  whatItLooksLike: [
    'Sadness or emptiness that does not lift.',
    'Anxiety, racing thoughts, or a constant sense that something bad is about to happen.',
    'Irritability and rage, which is often the form it takes and is often missed.',
    'Not sleeping even when the baby is asleep and you are exhausted.',
    'Feeling disconnected from your baby, or going through the motions.',
    'Feeling like your family would be better off without you.',
    'Checking and rechecking compulsively, or being unable to let anyone else hold the baby.',
    'Not eating, or not being able to stop.',
    'Feeling nothing at all.',
  ],
  partnersToo:
    'Partners get this as well, at rates around 1 in 10, and nobody screens them. If a partner is withdrawn, ' +
    'angry, working constantly, or clearly not okay, the same help applies to them.',
  whatHelps: [
    'Telling one real person. That is genuinely the hardest and most effective step.',
    'Therapy, particularly with someone who specializes in perinatal mental health. Postpartum Support International has a directory.',
    'Medication, if that is right for you. There are options considered compatible with breastfeeding, and this is a conversation with a prescriber, not something to rule out on your own.',
    'Sleep, in real blocks. A stretch of 4 or 5 uninterrupted hours, with someone else covering, is treatment and not indulgence.',
    'Support groups. Postpartum Support International runs free online ones.',
  ],
  getHelpNow:
    'If you are having thoughts of harming yourself or your baby, if you are hearing or seeing things others ' +
    'do not, or if you feel confused or disconnected from reality, that needs help today, not at your next ' +
    'appointment. Call 988, or 1-833-852-6262, or go to an emergency room. Postpartum psychosis is rare and it ' +
    'is a medical emergency, and it is treatable.',
  theThingPeopleFear:
    'People do not tell anyone because they are afraid their baby will be taken. Telling a provider that you ' +
    'are depressed, anxious, or having intrusive thoughts is a normal clinical conversation that happens every ' +
    'day and results in support, not removal.',
  lines: ['nmmh-hotline', 'psi', '988'],
  sources: [
    {
      org: 'HRSA',
      label: 'National Maternal Mental Health Hotline',
      url: 'https://mchb.hrsa.gov/programs-impact/national-maternal-mental-health-hotline',
    },
    {
      org: 'Postpartum Support International',
      label: 'Get help, provider directory and free support groups',
      url: 'https://postpartum.net/get-help/',
    },
    {
      org: 'ACOG',
      label: 'Screening and treatment of perinatal mental health conditions',
      url: 'https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/treatment-and-management-of-mental-health-conditions-during-pregnancy-and-postpartum',
    },
  ],
};

/* ------------------------------------------------------------------
 * SUPPLIES AT HOME
 * ------------------------------------------------------------------ */

export const RECOVERY_SUPPLIES = {
  id: 'recovery-supplies',
  label: 'What to have at home',
  headline: 'Set up before the baby comes, because you will not be shopping',
  intro:
    'Most of this the hospital gives you. Ask for extras of everything they open before you are discharged, ' +
    'their versions are better than retail.',
  items: [
    { label: 'Peri bottle, ideally the angled kind', why: 'Warm water while you use the bathroom. The angled ones are far easier to use one handed.' },
    { label: 'Heavy overnight pads, and a lot of them', why: 'Not tampons, not menstrual cups, nothing internal until you are cleared.' },
    { label: 'Disposable or old high waisted underwear', why: 'Above a cesarean incision, and you will not care about it after.' },
    { label: 'Witch hazel pads and a cooling spray', why: 'For stitches and swelling. Ask the hospital for theirs.' },
    { label: 'Instant cold packs, or padsicles you made ahead', why: 'The first days are the worst and cold is the most effective thing.' },
    { label: 'Stool softener', why: 'Start it on day one. This is the single most repeated piece of advice from people who have done it.' },
    { label: 'Ibuprofen and acetaminophen, if your provider says they are fine for you', why: 'Ask what schedule they want you on before you leave.' },
    { label: 'A sitz bath basin, or just the bathtub', why: 'Warm shallow water helps stitches and hemorrhoids.' },
    { label: 'Nipple cream and reusable or disposable nursing pads', why: 'Leaking is unpredictable in the early weeks.' },
    { label: 'Easy one handed food, and a large water bottle with a straw', why: 'You will be pinned under a baby at mealtimes for weeks.' },
    { label: 'A basket you can carry from room to room', why: 'Fill it with pads, snacks, phone charger, water, burp cloths. Move it with you.' },
  ],
  forCesarean: [
    'An abdominal binder, if your provider recommends one.',
    'A small firm pillow to press against the incision when you cough, sneeze, laugh or get in and out of a car.',
    'Things placed at counter height in advance, since bending and lifting are limited.',
    'Loose clothing that does not sit at the waistband.',
  ],
};

/* ------------------------------------------------------------------
 * ASKING FOR HELP
 * ------------------------------------------------------------------ */

export const ASKING_FOR_HELP = {
  id: 'asking-for-help',
  label: 'Letting people help',
  headline: 'People want to help and have no idea what to offer',
  intro:
    'Let me know if you need anything is sincere and useless. The fix is to have specific answers ready, ' +
    'because in the moment you will not think of any.',
  specificAsks: [
    'Bring dinner, and leave it at the door rather than coming in.',
    'Hold the baby for one hour so I can sleep, not so I can clean.',
    'Take the older kids to the park on Saturday morning.',
    'Do a grocery run, here is the list.',
    'Start a load of laundry and fold the one in the dryer.',
    'Walk the dog.',
    'Come sit with me while I feed, and do not give advice.',
    'Take the trash out on Tuesday, every Tuesday, for a month.',
  ],
  boundaries: [
    'You are allowed to say not yet to visitors, for as long as you want.',
    'You are allowed to require handwashing, current vaccines, and no one who is sick, including family.',
    'You are allowed to ask people not to kiss the baby. In a newborn, common adult viruses such as HSV and RSV can be serious.',
    'You are allowed to end a visit. A visit that requires hosting is not help.',
    'A useful script: we are keeping visits to 30 minutes for the first few weeks, and we would love to see you at 2pm on Sunday.',
  ],
  forPartners: [
    'Take over one whole category, not one task. Bottles and pump parts, or nights, or the older child. Owning something is different from helping with it.',
    'Handle the visitors, so that saying no is not coming from the person who just gave birth.',
    'Ask what she needs at this exact moment rather than what you can do generally.',
    'Notice food and water. Bring both without being asked.',
    'Watch her mood over weeks, not days. Partners are frequently the first to notice a mood disorder, and saying I am worried about you is an act of love, not criticism.',
    'Your own mental health counts too, and around 1 in 10 partners experience postpartum depression.',
  ],
};

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

export function getTimeline() {
  return [...RECOVERY_TIMELINE].sort((a, b) => a.order - b.order);
}

export function getTimelineStage(id) {
  if (!id) return null;
  return RECOVERY_TIMELINE.find((s) => s.id === id) || null;
}

/**
 * Which recovery stage a person is in, given days since birth.
 * Returns null for a negative or missing value rather than guessing.
 */
export function getStageForDaysPostpartum(days) {
  if (days === null || days === undefined || days === '') return null;
  if (typeof days === 'boolean') return null;
  const d = Number(days);
  if (Number.isNaN(d) || d < 0) return null;
  if (d <= 3) return getTimelineStage('days-1-3');
  if (d <= 7) return getTimelineStage('week-1');
  if (d <= 42) return getTimelineStage('weeks-2-6');
  if (d <= 84) return getTimelineStage('weeks-6-12');
  if (d <= 365) return getTimelineStage('the-first-year');
  return null;
}

export function getSupportLine(id) {
  if (!id) return null;
  return MATERNAL_SUPPORT_LINES.find((l) => l.id === id) || null;
}

/** The lines referenced by the mental health entry, resolved to objects. */
export function getMentalHealthLines() {
  return (PERINATAL_MENTAL_HEALTH.lines || [])
    .map((id) => getSupportLine(id))
    .filter(Boolean);
}

/** Entries flagged sensitive, so a screen can choose how to introduce them. */
export function getSensitiveEntries() {
  return NOBODY_WARNED_ME.filter((e) => e.sensitive);
}

export function getAllPostpartumSources() {
  const seen = new Set();
  const out = [];
  const add = (s, from) => {
    if (!s || !s.url || seen.has(s.url)) return;
    seen.add(s.url);
    out.push({ ...s, from });
  };
  (PERINATAL_MENTAL_HEALTH.sources || []).forEach((s) => add(s, 'Perinatal mental health'));
  POSTPARTUM_SOURCES.forEach((s) => add(s, 'Postpartum recovery'));
  MATERNAL_SUPPORT_LINES.forEach((l) =>
    add({ org: l.name, label: l.detail, url: l.url }, 'Support lines')
  );
  return out;
}

export const POSTPARTUM_SOURCES = [
  {
    org: 'ACOG',
    label: 'Optimizing postpartum care, why it is 12 weeks and not one visit',
    url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care',
  },
  {
    org: 'CDC',
    label: 'Urgent maternal warning signs',
    url: 'https://www.cdc.gov/hearher/maternal-warning-signs/index.html',
  },
  {
    org: 'AAP, HealthyChildren',
    label: 'Recovering from delivery',
    url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/Recovering-from-Delivery.aspx',
  },
  {
    org: 'Office on Women’s Health',
    label: 'Recovering from birth',
    url: 'https://www.womenshealth.gov/pregnancy/childbirth-and-beyond/recovering-birth',
  },
];

export const TIMELINE_IDS = RECOVERY_TIMELINE.map((s) => s.id);

export default RECOVERY_TIMELINE;

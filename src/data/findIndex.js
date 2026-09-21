/**
 * Ready Set Grow: Find Anything
 * ------------------------------------------------------------------
 * Her mom got lost, and she has asked "where is it?" more than once
 * herself. The app has a lot in it, and the fix for that is not to
 * take things out, it is to let somebody type what they are looking
 * for and be taken straight there.
 *
 * Each entry is a place in the app, the words a parent would actually
 * type to get there, and where it lives so they learn the way next
 * time. go is either a screen (with an optional tab) or a main tab.
 * Words are matched loosely, so "c section", "csection" and
 * "cesarean" all land in the same place.
 */

export const FIND_TITLE = 'Ask Willow';
export const FIND_SUB = "Ask anything, the way you'd say it to a friend. I'll answer, and show you any pages in the app about it.";
export const FIND_PLACEHOLDER = 'Ask Willow anything, or find a page';
export const FIND_FIELD_HINT = 'Such as why is my son flapping his arms';
export const FIND_NONE = "I don't have a page on that yet, but I can help. Tap Ask Willow and I'll answer it.";

export const FIND_INDEX = [
  { title: 'I need help right now', where: 'Home, I need help', go: { screen: 'now' },
    words: 'emergency urgent 911 fever rash crisis help now breathing hurt injured poison scared suicidal' },
  { title: 'Something is happening to me', where: 'Home, I need help', go: { screen: 'momnow' },
    words: 'me my body bleeding headache chest pain dizzy panic overwhelmed postpartum emergency' },
  { title: 'If something happens: CPR and choking', where: 'Child profile, Safety', go: { screen: 'safety' },
    words: 'cpr choking choke first aid emergency not breathing heimlich back blows' },
  { title: 'If something is happening at home', where: 'Home, I need help', go: { screen: 'support' },
    words: 'domestic violence abuse unsafe partner cps child protective services trafficking hotline leave safety plan' },

  { title: 'Your cycle and period log', where: 'Home, Your cycle', go: { screen: 'mycycle' },
    words: 'period cycle log period flow mood symptoms cramps fertile window ovulation late period flo pms birth control' },
  { title: 'Trying to conceive', where: 'Home, Trying', go: { screen: 'trying' },
    words: 'ttc trying to conceive fertility ovulation lh test ivf iui folic acid two week wait pregnancy test infertility' },
  { title: 'Pregnancy week by week', where: 'Your pregnancy profile', go: { screen: 'expecting' },
    words: 'pregnancy pregnant week by week baby size due date trimester bump' },
  { title: 'Looking after yourself in pregnancy', where: 'Your pregnancy profile', go: { screen: 'pregHealth' },
    words: 'pregnancy health medication medicine cmv tdap flu shot vitamins prenatal vitamin iron' },
  { title: 'Induction and the Bishop score', where: 'Birth, Induction', go: { screen: 'induction', tab: ['indTab', 'chart'] },
    words: 'induction induce bishop score cervix dilation ripen ripening balloon cervidil misoprostol pitocin' },
  { title: 'Breaking your waters', where: 'Birth, Induction', go: { screen: 'induction', tab: ['indTab', 'water'] },
    words: 'break waters breaking water amniotomy rupture membranes' },
  { title: 'Birth: your choices and your rights', where: 'Birth', go: { screen: 'birth', tab: ['birthTab', 'yours'] },
    words: 'birth plan preferences rights consent advocate advocacy monitoring' },
  { title: 'Doulas, midwives and home birth', where: 'Birth, Who is with you', go: { screen: 'birth', tab: ['birthTab', 'who'] },
    words: 'doula midwife midwives home birth birth center support person partner' },
  { title: 'Pain relief and epidurals', where: 'Birth, Pain', go: { screen: 'birth', tab: ['birthTab', 'pain'] },
    words: 'epidural pain relief natural birth unmedicated gas nitrous water birth hypnobirthing' },
  { title: 'Tearing, episiotomy and pelvic floor', where: 'Birth, Tearing and cutting', go: { screen: 'birth', tab: ['birthTab', 'body'] },
    words: 'tear tearing ripping episiotomy stitches perineum pelvic floor physical therapy pt incontinence' },
  { title: 'What can go wrong, and c sections', where: 'Birth, What can go wrong', go: { screen: 'birth', tab: ['birthTab', 'wrong'] },
    words: 'c section csection cesarean caesarean emergency complications hemorrhage vbac shoulder dystocia' },
  { title: 'Hospital bag', where: 'Your pregnancy profile', go: { screen: 'bag' },
    words: 'hospital bag packing list what to pack' },

  { title: 'You, after birth', where: 'Home, Your recovery', go: { screen: 'postpartum' },
    words: 'postpartum recovery after birth bleeding lochia stitches six week check 6 week' },
  { title: 'Postpartum mood and anxiety', where: 'You, after, Your mind', go: { screen: 'postpartum', tab: ['ppTab', 'mind'] },
    words: 'postpartum depression ppd anxiety baby blues intrusive thoughts psychosis rage mood' },
  { title: 'Pumping', where: 'Feeding, Pumping', go: { screen: 'pumping' },
    words: 'pump pumping flange breast milk storage freezer lipase output supply' },
  { title: 'Feeding', where: 'Child profile, Feeding', go: { screen: 'feeding' },
    words: 'feeding breastfeeding formula bottle bottles latch weight gain solids starting solids allergens baby led weaning milk' },
  { title: 'Diapers, how many you need', where: 'Child profile', go: { screen: 'diaperplan' },
    words: 'diapers nappies how many diapers sizes wet diapers' },
  { title: 'Sleep and naps', where: 'Child profile, Today', go: { screen: 'sleep' },
    words: 'sleep nap naps wake windows bedtime night waking regression schedule' },
  { title: 'Milestones', where: 'Child profile, Milestones', go: { screen: 'milestones' },
    words: 'milestones development checklist cdc crawling walking talking behind' },
  { title: 'Development guidance', where: 'Child profile', go: { screen: 'development' },
    words: 'development what to expect age stage brain speech motor' },
  { title: 'Understanding behavior', where: 'Child profile', go: { screen: 'understand' },
    words: 'behavior tantrums meltdowns attention sensory feelings adhd autism worried' },
  { title: 'Activities to do together', where: 'Child profile, Activities', go: { screen: 'activities' },
    words: 'activities play games bored ideas things to do' },
  { title: 'Baby sign language', where: 'Child profile, Signing', go: { screen: 'signs' },
    words: 'sign language baby signs asl signing' },
  { title: 'Vaccines', where: 'Child profile, Vaccines', go: { screen: 'vaccines' },
    words: 'vaccines vaccine shots immunizations schedule autism measles' },
  { title: 'Vaccine record', where: 'Child profile, Baby\'s record', go: { screen: 'vaxrecord' },
    words: 'vaccine record shot record immunization record card' },
  { title: 'Growth chart', where: 'Child profile, Growth', go: { screen: 'growth' },
    words: 'growth chart weight height length percentile head circumference' },
  { title: 'Jobs and chores', where: 'Child profile, Jobs', go: { screen: 'chores' },
    words: 'chores jobs responsibilities chore chart allowance' },
  { title: 'Learning at home', where: 'Child profile, Learning', go: { screen: 'learning' },
    words: 'learning homeschool home school school reading math' },

  { title: 'Growing up and puberty', where: 'Child profile, Growing up', go: { screen: 'growingup' },
    words: 'puberty growing up body changes bra wet dreams first period deodorant' },
  { title: 'Her cycle and first period', where: 'Child profile, Growing up', go: { screen: 'growingup', tab: ['growTab', 'track'] },
    words: 'daughter period first period her cycle teen period tracker menstruation' },
  { title: 'Sex, honestly', where: 'Child profile, Growing up', go: { screen: 'sexed' },
    words: 'sex ed sex education sti std chlamydia gonorrhea herpes hpv hiv condoms birth control teen pregnancy porn' },
  { title: 'Consent, and if something happens', where: 'Child profile, Growing up', go: { screen: 'consent' },
    words: 'consent assault rape abuse disclosure told me rainn grooming' },
  { title: 'Phones, games and online safety', where: 'Child profile, Online', go: { screen: 'online' },
    words: 'online safety phone social media sextortion roblox discord snapchat instagram tiktok screen time grooming' },

  { title: 'Logs', where: 'Logs tab', go: { tab: 'logs' },
    words: 'logs log history feeds sleep diapers calendar tracking' },
  { title: 'Community', where: 'Community tab', go: { tab: 'community' },
    words: 'community other parents post chat group' },
  { title: 'Outings and travel', where: 'Outings tab', go: { tab: 'outings' },
    words: 'outings travel trip vacation flight hotel packing day out' },
  { title: 'Sharing a child with family', where: 'Child profile, Sharing', go: { screen: 'sharing' },
    words: 'share sharing invite partner grandparent caretaker babysitter access' },
  { title: 'Notifications and reminders', where: 'Settings, Notifications', go: { screen: 'notifications' },
    words: 'notifications reminders push alerts' },
  { title: 'Settings', where: 'Menu, Settings', go: { tab: 'settings' },
    words: 'settings calm home everything full details account password name' },
  { title: 'For you: your own head', where: 'Home, For you', go: { screen: 'learnall' },
    words: 'for me self care burnout rage guilt parenting style' },
  { title: 'Privacy', where: 'Menu, Privacy', go: { screen: 'privacy' },
    words: 'privacy data delete account who can see' },
];

function findNorm(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
}

/* Loose on purpose. Every word typed has to appear somewhere in the
   entry, as a whole word or the start of one, and joined up spellings
   such as csection are tried split as well. */
export function findSearch(q) {
  const n = findNorm(q);
  if (!n) return [];
  const terms = n.split(' ');
  return FIND_INDEX.map((e) => {
    const hay = ' ' + findNorm(e.title + ' ' + e.words + ' ' + e.where) + ' ';
    const squash = hay.replace(/ /g, '');
    let score = 0;
    for (const t of terms) {
      if (hay.indexOf(' ' + t + ' ') !== -1) score += 3;
      else if (hay.indexOf(' ' + t) !== -1) score += 2;
      else if (t.length > 3 && squash.indexOf(t) !== -1) score += 1;
      else return null;
    }
    if (findNorm(e.title).indexOf(n) !== -1) score += 4;
    return { e, score };
  }).filter(Boolean).sort((a, b) => b.score - a.score).map((x) => x.e).slice(0, 8);
}

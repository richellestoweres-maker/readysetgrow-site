/**
 * Ready Set Grow: Vaccines, and the parent's decision
 * ------------------------------------------------------------------
 * READ THIS BEFORE CHANGING ANYTHING IN THIS FILE.
 *
 * Two things are true at once here, and this file is built to hold
 * both of them without dropping either.
 *
 * ONE. The parent decides. Not the app, not a stranger in a comment
 * section, not a pediatrician who never asked what the worry was. A
 * parent is allowed to ask questions, allowed to want more time, and
 * allowed to say no. That is not a loophole in the system, it is how
 * consent works. Nothing in this file shames anybody, and nothing in
 * it pretends a family who declines has stopped caring about their
 * child. They are usually declining precisely because they care.
 *
 * TWO. The evidence is not evenly split, and this app does not
 * pretend otherwise. Vaccine safety and effectiveness are among the
 * most heavily studied questions in medicine, and the findings point
 * one way. Presenting it as a coin flip would be a lie told to seem
 * balanced, and a parent who made a decision based on that lie would
 * have been badly served by an app that claimed to be their friend.
 *
 * So the rule is: respect without distortion. Say what the evidence
 * says, plainly. Say what each choice actually costs, plainly. Then
 * hand the decision back to the parent, because it was always theirs.
 *
 * THE SECTION THAT MATTERS MOST
 * IF_YOU_DECLINE exists because almost nobody writes it. A family who
 * has decided against vaccinating still needs to know which fevers
 * are the frightening ones, what to tell an emergency room, and what
 * happens at school during an outbreak. Withholding that to express
 * disapproval would put a child at risk to make a point. Write that
 * section as though the family is your friend, because they are.
 */

export const VACCINE_STANCE = {
  headline: 'This is your decision, and you are allowed to ask hard questions about it',
  body:
    'Ready Set Grow will always tell you what the evidence actually shows, including the parts that ' +
    'are uncomfortable in either direction. It will not shame you, it will not pretend the science is ' +
    'split when it is not, and it will not decide for you. You are the parent. You get to weigh this, ' +
    'and you are allowed to say no.',
  noShame:
    'If you have already decided to decline, or to space things out, you are still welcome here and ' +
    'this app is still yours. Skip to the section on doing that as safely as possible, which is written ' +
    'for you rather than at you.',
};

/* ------------------------------------------------------------------
 * YOUR RIGHTS, AND WHAT EACH CHOICE ACTUALLY COSTS
 * ------------------------------------------------------------------ */

export const YOUR_RIGHTS = {
  id: 'rights',
  headline: 'What you are entitled to, and what follows from each choice',
  consent: [
    'In the United States, you are your child’s medical decision maker. A vaccine cannot be given without your consent.',
    'You are entitled to ask what a vaccine is for, what is in it, what the risks are, and what happens if you wait. A clinician who will not answer those is not doing their job.',
    'You are entitled to the Vaccine Information Statement for anything offered. It is a required handout, it is free, and you can ask for it before you decide rather than after.',
    'You can say no to one vaccine and yes to another. It is not all or nothing, and saying so out loud is often where a useful conversation starts.',
    'You can change your mind later, in either direction. Nothing here is a one time door.',
  ],
  exemptions:
    'Every state allows a medical exemption. Most states allow a religious exemption and some allow a ' +
    'personal or philosophical one, and which is which changes as legislatures act, sometimes in the ' +
    'middle of a school year. Check your own state rather than trusting a list you found online, ' +
    'including this one. The CDC keeps a page of state school immunization laws, linked below.',
  realConsequences: [
    'School and daycare entry usually require records or a filed exemption. The paperwork takes time, so start it before enrollment week.',
    'During an outbreak, unvaccinated children are commonly excluded from school for the incubation period, which is up to 21 days for measles. This happens whether or not your child is sick.',
    'Some pediatric practices decline to keep families who refuse all vaccines. The AAP treats dismissal as a last resort rather than a first move, and it does happen, so it is worth asking a practice about their policy before you need them.',
    'Some countries require proof of certain vaccines for entry, and some require it for travel back.',
    'Certain camps, sports programs, and colleges have their own requirements.',
  ],
  sources: [
    { org: 'CDC', label: 'State school and childcare vaccination laws',
      url: 'https://www.cdc.gov/phlp/php/resources/state-school-and-childcare-vaccination-laws.html' },
    { org: 'CDC', label: 'Vaccine Information Statements',
      url: 'https://www.cdc.gov/vaccines/hcp/current-vis/index.html' },
  ],
};

/* ------------------------------------------------------------------
 * THE QUESTIONS PARENTS ACTUALLY ASK
 * Answered straight. A dodge here costs the app its credibility on
 * everything else, and a parent can tell when they are being managed.
 * ------------------------------------------------------------------ */

export const COMMON_QUESTIONS = [
  {
    id: 'autism',
    q: 'Do vaccines cause autism?',
    evidence: 'established',
    a:
      'No, and this is one of the most thoroughly investigated questions in modern medicine. Studies ' +
      'following millions of children across several countries, including one Danish study of more than ' +
      '650,000, have looked for a link and not found one.',
    more:
      'The 1998 paper that started this was retracted by the journal that published it, and its lead ' +
      'author lost his medical license after an investigation found he had falsified data. That is worth ' +
      'knowing, and it is also worth saying that parents who worried about this were not being foolish. ' +
      'They were told something alarming by someone with credentials, and they responded the way a ' +
      'loving parent responds.',
  },
  {
    id: 'too-many',
    q: 'Is it too many, too soon, for such a small body?',
    evidence: 'established',
    a:
      'The current schedule contains far fewer antigens, meaning the parts the immune system actually ' +
      'responds to, than the schedule of the 1980s did, even though it covers more diseases. The vaccines ' +
      'got more refined, not heavier.',
    more:
      'A baby’s immune system meets an enormous number of new things every single day, through ' +
      'breathing, feeding, and being kissed by relatives. The schedule is a small addition to that load. ' +
      'The timing is early because the diseases are most dangerous in the first year, which is the real ' +
      'reason it feels front loaded.',
  },
  {
    id: 'aluminum',
    q: 'What about the aluminum?',
    evidence: 'established',
    a:
      'Aluminum salts are used in tiny amounts in some vaccines as an adjuvant, meaning they help the ' +
      'immune system respond so a smaller dose works. They have been used for over 70 years.',
    more:
      'Over the first 6 months, a baby takes in more aluminum from breast milk or formula than from ' +
      'the entire vaccine schedule. Formula fed babies take in considerably more. That comparison is not ' +
      'a dismissal of the question, it is the context that makes the number mean something.',
  },
  {
    id: 'ingredients',
    q: 'What else is in them, and what about mercury?',
    evidence: 'established',
    a:
      'Thimerosal, the mercury containing preservative, was removed from routine childhood vaccines in ' +
      '2001. A few multi dose flu vials still contain it and single dose versions without it are widely ' +
      'available if you ask.',
    more:
      'It was removed as a precaution while the question was being studied, not because harm had been ' +
      'found, and the studies since have not found harm. You can read the full ingredient list for any ' +
      'vaccine in its package insert, and you are entitled to ask for it.',
  },
  {
    id: 'side-effects',
    q: 'Are there real side effects?',
    evidence: 'established',
    a:
      'Yes. Fever, soreness, swelling at the injection site, fussiness and sleepiness are common and ' +
      'usually pass within a day or two. Serious reactions exist and are rare.',
    more:
      'Anyone telling you the risk is exactly zero is overselling, and you should trust them less for it. ' +
      'The honest version is that the risks are small, known, and much smaller than the diseases. The ' +
      'United States runs a public reporting system called VAERS, which anyone can file to, and a ' +
      'compensation program for the rare serious injuries. Both exist because the risk is not pretended ' +
      'away.',
  },
  {
    id: 'natural-immunity',
    q: 'Is catching it naturally better?',
    evidence: 'established',
    a:
      'Immunity from infection is real, and the price of it is having the disease, with whatever that ' +
      'disease does on the way through.',
    more:
      'Measles is the clearest example. Beyond the immediate illness, it can wipe out existing immune ' +
      'memory, leaving a child more vulnerable to other infections for years afterward. Chickenpox leaves ' +
      'the virus dormant in the body and it can return as shingles decades later. Both of those are ' +
      'costs that do not show up in the week the child recovers.',
  },
  {
    id: 'spacing',
    q: 'Can I space them out instead?',
    evidence: 'mixed',
    a:
      'You can, and it is worth knowing that no alternative schedule has been studied as a whole for ' +
      'safety or effectiveness the way the recommended one has. The alternative schedules circulating ' +
      'online were designed by individuals rather than tested.',
    more:
      'Spacing lengthens the window where your child is unprotected, and it usually means more visits ' +
      'and more needles overall rather than fewer. If spacing is genuinely where you land, doing it with ' +
      'a pediatrician who will plan it with you is far better than doing it alone off a chart from the ' +
      'internet. Plenty of pediatricians will have that conversation if you ask directly.',
  },
  {
    id: 'already-rare',
    q: 'These diseases are rare now, so why bother?',
    evidence: 'established',
    a:
      'They are rare in places with high vaccination rates, and that is the reason rather than a ' +
      'coincidence. Where coverage falls, they come back, usually within a few years.',
    more:
      'Measles in particular is one of the most contagious diseases known. It spreads before anyone looks ' +
      'sick and it can linger in the air of a room after the person has left. Any community can be one ' +
      'traveling case away from an outbreak.',
  },
];

/* ------------------------------------------------------------------
 * IF YOU ARE DECLINING OR DELAYING
 * The section almost nobody writes. It exists so a family that has
 * made this decision still has what they need to keep their child
 * safe inside it.
 * ------------------------------------------------------------------ */

export const IF_YOU_DECLINE = {
  id: 'declining',
  headline: 'If you have decided against, or decided to wait',
  opening:
    'You are not getting a lecture here. You have made a decision about your own child and you are ' +
    'entitled to make it. What follows is the practical stuff that makes that decision safer to live ' +
    'with, because a family that declines still deserves to know which fever is the frightening one.',
  keepYourDoctor: [
    'Keep a pediatrician, and be upfront about your decision at the first visit rather than at the fourth.',
    'Ask a practice about their policy before you enroll. Some decline families who refuse everything, and finding that out during an emergency is the worst possible time.',
    'A pediatrician who keeps talking to you is worth more than one who agrees with you. Losing your medical home over this hurts your child more than the disagreement does.',
  ],
  knowTheSigns: [
    'Measles. Fever, cough, runny nose and red watery eyes first, then a rash starting at the hairline and spreading down. Call ahead rather than walking into a waiting room, because it spreads through the air.',
    'Whooping cough. A cold that turns into violent coughing fits, sometimes with a whoop or with vomiting after. In young babies it can show up as pauses in breathing rather than coughing at all. This one is most dangerous under 6 months.',
    'Meningitis. Fever with a stiff neck, a severe headache, light hurting their eyes, confusion, or a rash that does not fade when you press a glass to it. This is an emergency, same hour.',
    'Hib and other invasive bacterial illness. A young child who is unusually floppy, very hard to rouse, breathing fast, or not taking fluids. Trust that instinct and go.',
    'Tetanus. Any deep or dirty wound, especially puncture wounds, is worth a call, because tetanus is in soil and is not caught from other people.',
  ],
  tellClinicians:
    'Say your child is not vaccinated, or is partially vaccinated, every time you see a clinician, ' +
    'and say it early. It is not an invitation to be judged, it is clinically important. It changes ' +
    'what an emergency room tests for and how fast they move, and with something like measles or ' +
    'meningitis those hours matter enormously.',
  practical: [
    'Travel raises the risk substantially, especially for measles. Check what is circulating where you are going, well before you book.',
    'Expect exclusion from school or daycare during an outbreak, often for up to 21 days, whether or not your child is unwell. Have a plan for the childcare that creates.',
    'Be careful around newborns too young to be vaccinated, anyone pregnant, and anyone on chemotherapy or immune suppressing medication. This is the part that involves other people.',
    'Keep whatever records you do have somewhere you can reach them fast, including a copy on your phone.',
    'File your exemption paperwork early, since schools cannot always process it quickly.',
  ],
  vitaminA:
    'One specific thing, because it has caused real harm recently. Vitamin A does not prevent measles ' +
    'and does not treat it at home. It is used in hospital in specific doses for specific patients. ' +
    'Children have been hospitalized with vitamin A toxicity, including liver damage, after parents gave ' +
    'high doses hoping to protect them. If you take nothing else from this section, take that one.',
  revisit:
    'This decision is not permanent and revisiting it is not a climbdown. Plenty of families change ' +
    'their minds in one direction or the other as circumstances change, such as a new baby in the house, ' +
    'a trip abroad, or an outbreak nearby. You can start at any point and you do not have to begin again ' +
    'from the beginning.',
};

/* ------------------------------------------------------------------
 * BRINGING IT TO YOUR PEDIATRICIAN
 * ------------------------------------------------------------------ */

export const ASK_YOUR_PEDIATRICIAN = {
  id: 'asking',
  headline: 'Questions worth bringing, whichever way you are leaning',
  questions: [
    'Which of these protects against something my child is realistically likely to meet, and which is for something rarer?',
    'What happens if we wait 6 months on this one specifically? What is the window we are leaving open?',
    'What side effects should I expect in the next 48 hours, and what would make you want to see us?',
    'Can I have the Vaccine Information Statement, and the package insert, to read at home before I decide?',
    'If I want to split these across more visits, will you plan that with me?',
    'Has anything in the schedule changed since my older child, and why?',
    'What is your practice policy if I decline some or all of these?',
  ],
  howToBeHeard: [
    'Write your questions down beforehand. Under time pressure with a baby on your lap, they evaporate.',
    'Say what the actual worry is rather than a general one. "I read about aluminum" gets a far more useful answer than "I am not sure about vaccines".',
    'Ask for a separate appointment to talk it through. A well visit is not enough time and most practices will book one.',
    'If you are dismissed rather than answered, that is a reason to find a different clinician rather than a reason to stop asking.',
  ],
};

export const VACCINE_SOURCES = [
  { org: 'CDC', label: 'Child and adolescent immunization schedule',
    url: 'https://www.cdc.gov/vaccines/hcp/imz-schedules/child-adolescent-age.html' },
  { org: 'CDC', label: 'Vaccine Information Statements',
    url: 'https://www.cdc.gov/vaccines/hcp/current-vis/index.html' },
  { org: 'CDC', label: 'State school and childcare vaccination laws',
    url: 'https://www.cdc.gov/phlp/php/resources/state-school-and-childcare-vaccination-laws.html' },
  { org: 'AAP', label: 'Immunization resources for families',
    url: 'https://www.aap.org/en/patient-care/immunizations/' },
  { org: 'HHS', label: 'VAERS, the vaccine adverse event reporting system',
    url: 'https://vaers.hhs.gov/' },
  { org: 'HRSA', label: 'National Vaccine Injury Compensation Program',
    url: 'https://www.hrsa.gov/vaccine-compensation' },
];

export const VACCINE_DISCLAIMER =
  'Educational information, not medical advice. Ready Set Grow does not know your child’s health ' +
  'history, and your own clinician does. Whatever you decide, decide it with someone who has met them.';

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

export function getVaccineQuestion(id) {
  return COMMON_QUESTIONS.find((q) => q.id === id) || null;
}

export function getAllVaccineSources() {
  const seen = new Set();
  const out = [];
  [...VACCINE_SOURCES, ...(YOUR_RIGHTS.sources || [])].forEach((s) => {
    if (s && s.url && !seen.has(s.url)) { seen.add(s.url); out.push(s); }
  });
  return out;
}

export default COMMON_QUESTIONS;

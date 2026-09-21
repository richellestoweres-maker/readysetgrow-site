/**
 * Ready Set Grow: Pregnancy Health
 * ------------------------------------------------------------------
 * Infections, vaccines, supplements, and looking after yourself.
 *
 * WHY THIS FILE EXISTS SEPARATELY
 * pregnancy.js is about preparing for the months after birth. This is
 * about the pregnancy itself, and specifically about the things that are
 * preventable or treatable and that people are not told about clearly.
 *
 * CMV LEADS ON PURPOSE
 * It is the most common infectious cause of birth defects in the United
 * States, about 1 in 200 babies, and most pregnant people have never
 * heard of it. Prevention is genuinely simple, mostly not sharing food
 * and utensils with a toddler and washing hands after diapers. That is a
 * very large payoff for a very small piece of information, and almost no
 * pregnancy app says it.
 *
 * THE LINE THIS FILE HOLDS
 * Every entry says what it is, how it spreads, what reduces the risk, and
 * what testing exists. None of it prescribes. Treatment decisions belong
 * to an obstetric provider who knows the person.
 *
 * WHERE THE URGENCY LIVES
 * Some of this is time critical. Congenital CMV testing has to happen in
 * the first two to three weeks of life or it can no longer be
 * distinguished from an infection caught after birth. That kind of window
 * is flagged in the entry rather than buried.
 */

/* ------------------------------------------------------------------
 * INFECTIONS
 * ------------------------------------------------------------------ */

export const INFECTIONS = [
  {
    id: 'cmv',
    label: 'CMV, cytomegalovirus',
    priority: 100,
    headline: 'The most common infectious cause of birth defects, and almost nobody has heard of it',
    whyItMatters:
      'About 1 in 200 babies is born with congenital CMV, and about 1 in 5 of those has birth defects ' +
      'or long term effects such as hearing loss, vision problems or developmental delay. It is more ' +
      'common than many conditions that get far more attention in pregnancy.',
    howYouGetIt: [
      'Most often from the saliva or urine of young children, who carry it commonly and without symptoms.',
      'If you are pregnant and have a toddler in daycare, that is the most likely source.',
      'It crosses from your blood through the placenta to the baby.',
      'Most adults who catch it have no symptoms at all, or something that feels like a mild cold.',
    ],
    prevention: [
      'Do not share food, drinks, utensils, cups or straws with young children.',
      'Do not put a child’s pacifier in your mouth.',
      'Kiss children on the head or cheek rather than on the lips.',
      'Wash your hands with soap and water after changing diapers, wiping noses, or helping with the toilet.',
      'Wash hands after handling children’s toys that have been in mouths.',
    ],
    testing:
      'There is no routine CMV screening in pregnancy in the United States. If you are concerned, or ' +
      'work with young children, ask your provider whether testing makes sense for you.',
    timeCritical:
      'A newborn has to be tested within the first 2 to 3 weeks of life for congenital CMV to be ' +
      'confirmed. After that window, a positive test cannot be distinguished from an infection caught ' +
      'after birth. If your baby fails a newborn hearing screen, ask about CMV testing right away rather ' +
      'than waiting for a follow up appointment.',
    askYourProvider: [
      'Should I be tested for CMV given my exposure to young children?',
      'If my baby does not pass the newborn hearing screen, can we test for CMV before we leave the hospital?',
    ],
    relatedPrograms: [
      {
        org: 'Enavima',
        label: 'Congenital CMV point of care testing, Microgen Laboratories',
        url: null,
        relationship:
          'Ready Set Grow is built by a member of the family behind this program. Saying so here so ' +
          'you can weigh it the way you would weigh any recommendation with a connection behind it.',
        note:
          'Listed because congenital CMV has to be confirmed within the first 2 to 3 weeks of life, and ' +
          'knowing where testing exists is genuinely useful in that window. The CDC and AAP links below ' +
          'are independent and are the place to start.',
      },
    ],
    sources: [
      { org: 'CDC', label: 'Congenital CMV', url: 'https://www.cdc.gov/cytomegalovirus/congenital-infection/index.html' },
      { org: 'CDC', label: 'About cytomegalovirus', url: 'https://www.cdc.gov/cytomegalovirus/about/index.html' },
      { org: 'AAP', label: 'Congenital CMV toolkit', url: 'https://www.aap.org/en/patient-care/congenital-cytomegalovirus-ccmv/congenital-cytomegalovirus-ccmv-toolkit/' },
      /* ENAVIMA, PENDING.
         Enavima is the congenital CMV point of care testing program run by
         Microgen Laboratories. Slot the final URL in below when the site is
         ready; the staging address today is
         richellestoweres-maker.github.io/Enavima/

         It goes in `relatedPrograms` rather than in `sources`, on purpose.
         Everything in `sources` is independent public health guidance. A
         commercial testing program is a different kind of thing, and the
         app owner has a family connection to this one. Keeping it in its
         own block with the relationship stated is what lets a parent weigh
         it properly, and it is the version that holds up if anyone ever
         asks how the link got there. */
    ],
  },

  {
    id: 'hsv',
    label: 'Herpes, HSV',
    priority: 92,
    headline: 'The timing of a first infection matters enormously, and it is manageable',
    whyItMatters:
      'Neonatal herpes is rare and serious. The risk depends almost entirely on when the infection was ' +
      'acquired. A first infection caught near the end of pregnancy carries a transmission risk of ' +
      'roughly 30 to 50 percent. Recurrent herpes, or a first infection in the first half of pregnancy, ' +
      'carries a risk of less than 1 percent.',
    howYouGetIt: [
      'Through skin to skin or sexual contact with someone who has the virus, whether or not they have visible sores.',
      'A person can carry and pass HSV without ever having had a noticeable outbreak.',
      'The dangerous scenario is catching it for the first time late in pregnancy, before your body has made antibodies to pass on.',
    ],
    prevention: [
      'If you do not have HSV and your partner does, this is worth discussing with your provider early rather than late.',
      'Avoid sexual contact in the third trimester if your partner has HSV and you do not, or use condoms consistently.',
      'Avoid oral sex in the third trimester if your partner has or has had cold sores, which are usually HSV.',
      'A partner on suppressive therapy has a lower chance of passing it on.',
    ],
    testing:
      'HSV is not part of routine prenatal screening. If you or a partner has a history of herpes or ' +
      'cold sores, say so early in pregnancy so it can be planned for.',
    ifYouHaveIt: [
      'If you have a history of genital herpes, ACOG suggests suppressive antiviral medication can be offered from 36 weeks, which reduces outbreaks at delivery.',
      'A cesarean is recommended if there are active lesions or warning symptoms when labor starts.',
      'A cesarean is not recommended just because you have a history of HSV with nothing active.',
      'A first infection in the third trimester usually means a referral to maternal fetal medicine or infectious disease.',
    ],
    askYourProvider: [
      'I have a history of cold sores or genital herpes. Should I be on suppressive therapy from 36 weeks?',
      'My partner has HSV and I do not. What should we be doing in the third trimester?',
    ],
    sources: [
      { org: 'ACOG', label: 'Genital herpes in pregnancy, practice guidance summary', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/05/management-of-genital-herpes-in-pregnancy' },
      { org: 'CDC', label: 'Genital herpes', url: 'https://www.cdc.gov/herpes/about/index.html' },
    ],
  },

  {
    id: 'syphilis',
    label: 'Syphilis',
    priority: 94,
    headline: 'Cases have risen more than tenfold, and it is completely treatable when caught',
    whyItMatters:
      'Congenital syphilis in the United States reached 3,882 cases in 2023, including 279 stillbirths ' +
      'and infant deaths, the highest in more than 30 years. Untreated, it causes stillbirth, ' +
      'premature birth, and permanent damage to bones, vision and hearing. Treated in pregnancy, it is ' +
      'usually preventable entirely. This is one of the clearest cases in medicine where a test changes ' +
      'an outcome.',
    howYouGetIt: [
      'Through sexual contact. Many people have no symptoms, or symptoms so mild they are missed.',
      'It passes to the baby through the placenta, at any point in pregnancy.',
    ],
    prevention: [
      'Get tested. Screening is the prevention here, because so many infections are silent.',
      'The US Preventive Services Task Force gives universal early screening in pregnancy its highest grade.',
      'Many areas now recommend testing more than once, often again in the third trimester and at delivery, because infection can happen during the pregnancy.',
    ],
    testing:
      'A blood test, standard early in pregnancy. If you were not tested early, ask at the next visit. ' +
      'Testing at delivery still prevents harm, so it is never too late to ask.',
    ifYouHaveIt: [
      'Penicillin treats it, and treating the pregnant parent treats the baby.',
      'Timing matters. Treatment well before delivery is far more protective, which is why early testing counts.',
      'Partners need treating too, or reinfection is likely.',
    ],
    askYourProvider: [
      'Have I been screened for syphilis this pregnancy, and will I be screened again in the third trimester?',
    ],
    sources: [
      { org: 'USPSTF', label: 'Syphilis screening in pregnancy', url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/syphilis-infection-in-pregnancy-screening' },
      { org: 'CDC', label: 'Congenital syphilis', url: 'https://www.cdc.gov/syphilis/congenital-syphilis/index.html' },
    ],
  },

  {
    id: 'gbs',
    label: 'Group B strep',
    priority: 88,
    headline: 'Routine, common, and handled with antibiotics during labor',
    whyItMatters:
      'Group B strep is bacteria that lives harmlessly in the body of roughly a quarter of people. It ' +
      'matters only because it can be passed to a baby during delivery, where it can cause serious ' +
      'infection. Carrying it says nothing about hygiene and nothing about you.',
    howYouGetIt: [
      'You do not catch it. It is normal bacteria that comes and goes.',
      'Being positive in one pregnancy does not mean being positive in the next, which is why it is retested every time.',
    ],
    prevention: [
      'Screening late in pregnancy, usually around 36 to 37 weeks, because status can change.',
      'If positive, antibiotics through an IV during labor, not before, since the aim is to protect the baby at delivery.',
    ],
    testing: 'A swab, late in pregnancy. Simple, quick, and routine.',
    ifYouHaveIt: [
      'Tell whoever is caring for you in labor that you are GBS positive, especially if you arrive somewhere unexpected.',
      'Antibiotics work best given several hours before delivery, which is one reason to call when labor starts rather than waiting.',
      'If you are having a planned cesarean without labor or broken waters, antibiotics for GBS are usually not needed.',
    ],
    askYourProvider: [
      'When will I be screened for group B strep, and what happens if I am positive?',
    ],
    sources: [
      { org: 'CDC', label: 'About group B strep', url: 'https://www.cdc.gov/group-b-strep/about/index.html' },
    ],
  },

  {
    id: 'listeria',
    label: 'Listeria and food safety',
    priority: 82,
    headline: 'Pregnant people are about 10 times more likely to get listeria',
    whyItMatters:
      'Listeria can cause miscarriage, stillbirth, premature delivery and serious infection in a ' +
      'newborn. The illness in the pregnant person can be mild enough to be mistaken for flu, which is ' +
      'why the food rules exist rather than relying on feeling unwell.',
    howYouGetIt: [
      'Contaminated food. Unlike most bacteria, listeria grows at refrigerator temperatures.',
      'Common sources are unheated deli meats, unpasteurized dairy, soft cheeses made from raw milk, refrigerated smoked seafood, and pre cut melon left out.',
    ],
    prevention: [
      'Heat deli meats and hot dogs until steaming before eating them.',
      'Avoid unpasteurized milk and any soft cheese made from it, such as some queso fresco, brie and blue veined cheeses.',
      'Avoid refrigerated smoked seafood such as lox, unless it is cooked into something.',
      'Avoid raw or undercooked meat, poultry, fish, sushi and ceviche.',
      'Avoid raw sprouts, unpasteurized juice or cider, raw cookie dough and homemade eggnog.',
      'Refrigerate cut melon within 2 hours and wash all produce.',
    ],
    testing: 'No routine screening. If you develop fever and body aches after a suspect food, tell your provider you are pregnant and mention listeria specifically.',
    askYourProvider: [
      'I ate something on the avoid list. Should I be watching for anything in particular?',
    ],
    sources: [
      { org: 'CDC', label: 'Food safety for pregnant people', url: 'https://www.cdc.gov/food-safety/foods/pregnant-women.html' },
      { org: 'CDC', label: 'Listeria', url: 'https://www.cdc.gov/listeria/about/index.html' },
    ],
  },

  {
    id: 'toxoplasmosis',
    label: 'Toxoplasmosis',
    priority: 78,
    headline: 'The cat litter one, though undercooked meat is the bigger risk',
    whyItMatters:
      'Toxoplasma can pass to a baby and cause eye and brain damage, sometimes not appearing until ' +
      'years later. Most infected adults have no symptoms.',
    howYouGetIt: [
      'Undercooked meat, which is actually the more common route than cats.',
      'Cat feces, usually through litter boxes or gardening in soil where cats go.',
      'Unwashed produce or contaminated water.',
    ],
    prevention: [
      'Have someone else change the litter box. If you must do it, wear gloves and wash your hands afterward.',
      'Change litter daily, since the parasite takes a day or more to become infectious.',
      'Cook meat thoroughly and do not taste while cooking.',
      'Wear gloves for gardening and wash hands afterward.',
      'Wash produce, and wash boards and knives after raw meat.',
      'You do not need to rehome your cat. Indoor cats fed commercial food are low risk.',
    ],
    testing: 'Not routinely screened in the US. Testing exists if there is a specific exposure or concern.',
    askYourProvider: [
      'I have cats, or I garden. Is there anything specific I should be doing?',
    ],
    sources: [
      { org: 'CDC', label: 'Toxoplasmosis and pregnancy', url: 'https://www.cdc.gov/toxoplasmosis/prevention/index.html' },
    ],
  },

  {
    id: 'routine-panel',
    label: 'The routine screening panel',
    priority: 74,
    headline: 'What is already being tested, so you know what has been covered',
    whyItMatters:
      'Standard prenatal bloodwork usually screens for several infections at once. Knowing what is on ' +
      'that list tells you what has already been ruled out and what has not.',
    howYouGetIt: [],
    prevention: [],
    testing:
      'Typically includes HIV, hepatitis B, syphilis, rubella immunity and blood type with Rh status, ' +
      'often with hepatitis C and chlamydia and gonorrhea depending on age and risk. Ask for your ' +
      'actual results rather than assuming no news means normal.',
    ifYouHaveIt: [
      'HIV in pregnancy is highly manageable. With treatment, the chance of passing it to the baby can be reduced to very low.',
      'Hepatitis B positive means the baby gets vaccine and immune globulin at birth, which is highly effective.',
      'If you are Rh negative, you will likely be offered an injection around 28 weeks and after birth.',
    ],
    askYourProvider: [
      'Can I have a copy of my prenatal lab results, and can you walk me through what was and was not tested?',
    ],
    sources: [
      { org: 'CDC', label: 'Infections and pregnancy', url: 'https://www.cdc.gov/reproductive-health/hcp/pregnancy-complications/index.html' },
    ],
  },
];

/* ------------------------------------------------------------------
 * VACCINES
 * ------------------------------------------------------------------ */

export const PREGNANCY_VACCINES = {
  id: 'vaccines',
  label: 'Vaccines in pregnancy',
  headline: 'Vaccines in pregnancy protect the baby too',
  body:
    'Antibodies cross the placenta, so several of these are given specifically to protect a newborn in ' +
    'the months before they can be vaccinated themselves. That is the whole point of the timing.',
  during: [
    {
      id: 'tdap', label: 'Tdap, whooping cough',
      timing: 'Between 27 and 36 weeks, ideally earlier in that window, and every pregnancy',
      why: 'Whooping cough is dangerous for newborns. Getting it in this window gives you time to make antibodies and pass them on before birth.',
    },
    {
      id: 'flu', label: 'Flu',
      timing: 'Any point in pregnancy, ideally by the end of October',
      why: 'Pregnancy raises the risk of severe flu, and the antibodies protect the baby for the first months when they are too young for their own flu shot.',
    },
    {
      id: 'covid', label: 'COVID-19',
      timing: 'Recommendations have changed recently, so ask your provider what applies now',
      why: 'Pregnancy raises the risk of severe illness. This is one worth confirming with your provider rather than relying on an app, because the guidance has moved.',
    },
    {
      id: 'rsv', label: 'RSV',
      timing: 'Between 32 and 36 weeks, if you are in weeks 32 to 36 during September through January',
      why: 'RSV is a leading cause of infant hospitalization. Either the parent gets this vaccine, or the baby gets an antibody injection after birth. Usually not both, so ask which route applies to you.',
    },
  ],
  before: [
    { id: 'mmr', label: 'MMR, measles mumps rubella', note: 'Live vaccine, so it is given before pregnancy, not during. Avoid conceiving for a month after. Rubella immunity is checked in routine prenatal bloodwork.' },
    { id: 'varicella', label: 'Chickenpox', note: 'Also a live vaccine, so before pregnancy rather than during.' },
  ],
  sources: [
    { org: 'CDC', label: 'Vaccines before, during and after pregnancy', url: 'https://www.cdc.gov/vaccines-pregnancy/recommended-vaccines/index.html' },
    { org: 'CDC', label: 'RSV vaccine guidance in pregnancy', url: 'https://www.cdc.gov/rsv/hcp/vaccine-clinical-guidance/pregnant-people.html' },
  ],
};

/* ------------------------------------------------------------------
 * SUPPLEMENTS AND MEDICATIONS
 * ------------------------------------------------------------------ */

export const SUPPLEMENTS_AND_MEDS = {
  id: 'meds',
  label: 'Supplements and medications',
  headline: 'What to take, and what not to stop without asking',
  supplements: [
    { id: 'folic', label: 'Folic acid', note: 'Reduces the risk of neural tube defects, and it works earliest in pregnancy, often before someone knows they are pregnant. Which is why it is recommended for anyone who could become pregnant.' },
    { id: 'prenatal', label: 'A prenatal vitamin', note: 'Covers folic acid, iron and iodine among others. Brand matters far less than taking it consistently.' },
    { id: 'iron', label: 'Iron', note: 'Anemia is common in pregnancy and is worth testing for rather than guessing. Ask for your levels.' },
    { id: 'vitd', label: 'Vitamin D', note: 'Often low, and easy to check. Worth asking about.' },
  ],
  theBigOne: {
    headline: 'Do not stop a medication because you got pregnant',
    body:
      'This is the single most common and most damaging mistake. People stop antidepressants, thyroid ' +
      'medication, asthma inhalers, seizure medication or blood pressure treatment the day they see a ' +
      'positive test, without telling anyone. Untreated illness is itself a risk to a pregnancy, and ' +
      'sometimes a much larger one than the medication. Bring the bottle to your next appointment and ' +
      'decide together, rather than deciding alone in a pharmacy aisle.',
  },
  askYourProvider: [
    'Here is everything I take, including supplements and anything over the counter. Which of these should change?',
    'If I need pain relief or a cold remedy, what is on my allowed list?',
    'I have a chronic condition. Who is coordinating between my specialist and my obstetric care?',
  ],
  sources: [
    { org: 'CDC', label: 'Medicine and pregnancy', url: 'https://www.cdc.gov/pregnancy/meds/index.html' },
    { org: 'MotherToBaby', label: 'Fact sheets on specific medications and exposures', url: 'https://mothertobaby.org/fact-sheets/' },
  ],
};

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

export function getInfection(id) {
  if (!id) return null;
  return INFECTIONS.find((i) => i.id === id) || null;
}

export function getInfectionsSorted() {
  return [...INFECTIONS].sort((a, b) => b.priority - a.priority);
}

/** Every source across this file, so a references screen can list them. */
export function getAllHealthSources() {
  const seen = new Set();
  const out = [];
  const add = (s, from) => {
    if (!s || seen.has(s.url)) return;
    seen.add(s.url);
    out.push({ ...s, from });
  };
  INFECTIONS.forEach((i) => (i.sources || []).forEach((s) => add(s, i.label)));
  (PREGNANCY_VACCINES.sources || []).forEach((s) => add(s, 'Vaccines'));
  (SUPPLEMENTS_AND_MEDS.sources || []).forEach((s) => add(s, 'Medications'));
  return out;
}

export const INFECTION_IDS = INFECTIONS.map((i) => i.id);

export default INFECTIONS;

/**
 * Ready Set Grow: Sex, honestly
 * ==================================================================
 * For parents, about the conversation that most schools reduce to
 * "do not get pregnant". Written from a brief whose central line is
 * worth keeping exactly:
 *
 *   "Use protection even if you're on birth control, because
 *   pregnancy is the least of your worries."
 *
 * THE ORGANISING IDEA
 * Most teenagers are taught that the risk of sex is a baby. The
 * risk nobody explains well is the infection you do not notice. Many
 * of the common ones cause no symptoms at all, and one of them, left
 * untreated, can quietly damage the fallopian tubes in a way that
 * turns up years later as a fertility problem. That is not a scare
 * line. It is the reason there is a national screening recommendation
 * for every sexually active young woman under twenty five, in both
 * countries.
 *
 * THE RULES
 * 1. Accurate, including where accuracy is less frightening than the
 *    folklore. The old figure that ten to forty percent of chlamydia
 *    turns into pelvic inflammatory disease is now thought too high.
 *    The current best estimate is about one in six, with wide
 *    uncertainty. Still serious, still preventable, and said
 *    honestly.
 * 2. No shame, anywhere. The evidence on fear is more mixed than
 *    people expect: warning about real risks works on average WHEN
 *    it comes with what to do about them. Humiliation is what the
 *    evidence points against, because concealment is what turns a
 *    difficult situation into a dangerous one.
 * 3. For sons as well as daughters. HPV now causes more throat cancer
 *    than cervical cancer in the United States, and most of it is in
 *    men.
 * 4. The teenager's right to confidential care is presented as a
 *    good thing, because it is. A parent who knows their child can be
 *    tested without them is a parent who can say so out loud.
 * 5. Where the facts are politically contested, the file reports what
 *    is in force and what the professional bodies say, dated, and does
 *    not take a side.
 *
 * WHAT IS LINKED RATHER THAN REPEATED
 * Consent and assault live in consent.js. Sexting, grooming and
 * sextortion live in onlineSafety.js. Puberty and anatomy live in
 * growingUp.js. This screen points at them rather than duplicating
 * them, so each is kept correct in one place.
 *
 * Checked September 2026. Sources in SEXED_SOURCES.
 */

export const SEXED_TITLE = 'Sex, honestly';

export const SEXED_SUB = 'More than not getting pregnant. The infections nobody explains, how to '
  + 'protect against them, and what to say if the worst happens.';

export const SEXED_TABS = [
  { id: 'why', label: 'More than pregnancy' },
  { id: 'stis', label: 'The infections' },
  { id: 'protect', label: 'Protection and testing' },
  { id: 'pregnant', label: 'If there is a pregnancy' },
  { id: 'more', label: 'Everything else' },
];

/* Nine, because that is when the HPV vaccine can start and when the
   first period can come, and both conversations are easier started
   early and small than late and large. */
export const SEXED_FROM_MONTHS = 108;

export function sexedShows(months) {
  return typeof months === 'number' && months >= SEXED_FROM_MONTHS;
}

export const SEXED_HEAD = 'Pregnancy is the least of your worries.';

export const SEXED_LINE = {
  quote: 'Use protection even if you are on birth control, because pregnancy is the least of your '
    + 'worries.',
  from: 'A line one mother said to her daughter, over and over. It is worth borrowing, because it is '
    + 'exactly what the evidence says.',
};

export const SEXED_INTRO = [
  'Most sex education is built around one risk: a baby. That risk is real and it gets plenty of '
  + 'attention. The one that gets almost none is the infection you do not know you have.',
  'Several of the common ones cause no symptoms at all in most people. One of them, left untreated, '
  + 'can quietly scar the fallopian tubes in a way that nobody notices until years later, when '
  + 'somebody is trying to have a baby and cannot. That is the conversation this page is for.',
];

/* ==================================================================
   MORE THAN PREGNANCY
   ================================================================== */

export const WHY_SILENT = {
  title: 'Why silent matters more than serious',
  body: [
    'Chlamydia is the most commonly reported infection in both countries. Up to seven in ten women '
    + 'and five in ten men who have it notice nothing at all. People aged fifteen to twenty four '
    + 'account for nearly half of all new sexually transmitted infections in the United States, and '
    + 'more than half of reported chlamydia.',
    'Nothing hurts, so nobody gets tested, so it stays. And while it stays, in some women, it '
    + 'travels upward.',
  ],
};

export const WHY_TUBES = {
  title: 'What can happen, said carefully',
  body: [
    'Untreated chlamydia or gonorrhoea can spread from the cervix up into the womb and fallopian '
    + 'tubes. That is called pelvic inflammatory disease. The current best estimate is that roughly '
    + 'one in six untreated chlamydia infections leads to it, with a wide range of uncertainty either '
    + 'side. The older figure of up to forty percent is now thought to be too high for most young '
    + 'women.',
    'Pelvic inflammatory disease can scar the tubes. About one in eight women who have had it go on '
    + 'to have difficulty getting pregnant, and the risk rises sharply with each repeat episode and '
    + 'with how severe it was. It also raises the chance that a future pregnancy implants in the tube '
    + 'rather than the womb, which is an emergency.',
    'And it does not always announce itself. The American guidelines say plainly that even mild or '
    + 'symptom free pelvic inflammatory disease may carry a risk to fertility.',
  ],
  hydro: 'One of the ways this shows up is a blocked tube filled with fluid, called a hydrosalpinx. '
    + 'Previous pelvic infection is the leading recognised cause, though not the only one, and in any '
    + 'one woman it usually cannot be proven what caused it. Removing the affected tubes is often '
    + 'recommended before IVF, because the fluid lowers the chance of it working.',
};

export const WHY_PROPORTION = {
  title: 'In proportion',
  body: 'Most people who get chlamydia will not lose their fertility to it. Out of every thousand '
    + 'infections in women, modelling suggests roughly five end in fertility damage from blocked '
    + 'tubes. But those five were almost all preventable with a urine test and a week of antibiotics, '
    + 'and the risk is concentrated in exactly the people who never knew they had it, or who caught it '
    + 'again.',
  again: 'Catching it again is common. About one in seven young women treated for chlamydia have it '
    + 'again within a year, usually from a partner who was never treated. That is why both countries '
    + 'recommend a retest about three months after treatment, and why repeat infections are the ones '
    + 'that matter most.',
};

export const WHY_DUAL = {
  title: 'Birth control and condoms do different jobs',
  body: [
    'The pill, the implant, the coil and the injection are very good at preventing pregnancy. They '
    + 'do nothing at all against infection. Only a barrier does that.',
    'This is the gap that matters. In an American survey of high school students, teenage girls using '
    + 'an implant or coil were about sixty percent less likely to also use a condom than girls on the '
    + 'pill. In another, only about nine percent of sexually active students were using a condom '
    + 'together with a more reliable method. The better protected they felt against pregnancy, the '
    + 'less protected they were against everything else.',
  ],
  line: 'So the thing to say is not "use protection". It is "use a condom as well, every time, even '
    + 'if you are on something".',
};

export const WHY_TALK = {
  title: 'Does talking to them actually help',
  body: [
    'A little, and more than nothing. Pooling fifty two studies of twenty five thousand teenagers, '
    + 'talking openly with a parent about sex was associated with safer sex, meaning more condom and '
    + 'contraceptive use. The effect was small, strongest for girls, and strongest when it came from '
    + 'mothers.',
    'What predicts whether they tell you things later is how you react when they do. Teenagers '
    + 'describe anger, lecturing, punishment and teasing as the things that make them stop. Calm, '
    + 'listening, and keeping what they said private are what keep them talking. None of that is '
    + 'proven by a trial. It is consistent across every study that has asked.',
  ],
  how: [
    'Small and often beats one big talk. Car journeys work because nobody has to make eye contact.',
    'Say the real words. Chlamydia, condom, vagina, penis. Embarrassment is catching and so is calm.',
    'Tell them what to do, not only what to fear. Warnings on their own work less well than warnings '
    + 'with a plan attached.',
    'Tell them in advance that they can come to you with anything and you will not panic, and then do '
    + 'not panic when they test it with something small.',
    'Tell them they can be tested without you, and where. It is the single most protective thing on '
    + 'this page.',
  ],
};

export const WHY_WHEN = 'There is no right age for the whole conversation, only the right size of it '
  + 'for now. Nine is a reasonable point to start on the facts, because it is when the HPV vaccine '
  + 'can begin and when the first changes of puberty can too. The rest follows the questions.';

/* ==================================================================
   THE INFECTIONS

   One card each. The field that matters most is silent, which is
   printed on the closed card, because that is the fact that changes
   behaviour.
   ================================================================== */

export const STI_LIST = [
  {
    id: 'chlamydia',
    name: 'Chlamydia',
    silent: 'Up to 7 in 10 women and 5 in 10 men have no symptoms',
    cure: 'curable',
    spread: 'Vaginal, anal and oral sex. It does not spread through skin contact alone.',
    test: 'A urine sample or a swab you can take yourself. Test about two weeks after sex.',
    treat: 'A week of antibiotics, or sometimes a single dose. No sex for seven days afterwards, and '
      + 'partners need treating too or it comes straight back. Retest at about three months.',
    risk: 'In women, pelvic inflammatory disease, damage to the fallopian tubes, ectopic pregnancy '
      + 'and infertility. In men, a painful infection of the testicles and, rarely, reduced '
      + 'fertility. This is the one the national screening programmes exist for.',
  },
  {
    id: 'gonorrhoea',
    name: 'Gonorrhoea',
    silent: 'About half of women notice nothing. Throat and rectal infections are usually silent',
    cure: 'curable',
    spread: 'Vaginal, anal and oral sex, and shared sex toys. Throat infection is common and '
      + 'usually unnoticed.',
    test: 'A urine sample or swab, including throat and rectal swabs where relevant. Test about two '
      + 'weeks after sex.',
    treat: 'A single antibiotic injection. Two new oral treatments were approved in the United States '
      + 'in December 2025. A throat infection needs a follow up test to make sure it has gone.',
    risk: 'The same damage to the tubes as chlamydia. It is also becoming resistant to antibiotics, '
      + 'and England has recorded eighty eight cases resistant to the main treatment, which is why '
      + 'catching and treating it properly matters for everyone, not only the person who has it.',
  },
  {
    id: 'hpv',
    name: 'HPV',
    silent: 'Almost always silent. Nearly everyone unvaccinated gets it at some point',
    cure: 'clears',
    spread: 'Close skin to skin contact during vaginal, anal and oral sex. A condom lowers the risk '
      + 'but cannot remove it, because it does not cover all the skin.',
    test: 'There is no routine test for men or for teenagers, because it is so common in young people '
      + 'and usually clears, so testing would mostly find infections that are about to go by '
      + 'themselves. Cervical screening starts at twenty one in the US and twenty five in the UK.',
    treat: 'The virus itself is not treated. About nine in ten infections clear on their own within '
      + 'two years. What is treated is what it causes: warts, and cell changes caught by screening '
      + 'before they become cancer.',
    risk: 'A few types cause cancer. Nearly all cervical cancer, over ninety percent of anal cancer, '
      + 'and about seventy percent of throat cancer. In the United States HPV now causes more throat '
      + 'cancer, about sixteen thousand a year, than cervical cancer, about eleven thousand, and most '
      + 'of the throat cancers are in men. It spreads through oral sex.',
    boys: 'So this one is as much a conversation for sons as for daughters.',
  },
  {
    id: 'herpes',
    name: 'Herpes',
    silent: 'About 8 in 10 people who have it have never been told',
    cure: 'managed',
    spread: 'Skin to skin, including oral sex. A cold sore on a partner’s mouth can cause '
      + 'genital herpes. It can pass when there are no sores at all, and it can be on skin a condom '
      + 'does not cover.',
    test: 'A swab from a sore. Blood tests for people without symptoms are not recommended.',
    treat: 'Not curable, but very manageable. Antiviral tablets shorten outbreaks, and taking them '
      + 'daily cuts outbreaks by seventy to eighty percent and roughly halves the chance of passing it '
      + 'on.',
    risk: 'Mostly recurring sores, which for many people are mild or rare. The heavier risk is to a '
      + 'newborn if a first infection happens late in pregnancy, which is something to tell the '
      + 'midwife about.',
    humane: 'It is extraordinarily common, usually mild, and says nothing about a person. Most people '
      + 'who carry it do not know. If your child is ever diagnosed with it, the most useful thing you '
      + 'can do is make it ordinary.',
  },
  {
    id: 'syphilis',
    name: 'Syphilis',
    silent: 'The first sore is usually painless and easily missed',
    cure: 'curable',
    spread: 'Contact with a sore during vaginal, anal or oral sex. The sore can be somewhere a condom '
      + 'does not cover.',
    test: 'A blood test. Symptoms appear from about three weeks, and a home test needs about six '
      + 'weeks.',
    treat: 'Usually a penicillin injection. It cures the infection, but damage already done may not '
      + 'reverse, which is why catching it early matters.',
    risk: 'Left for years it can damage the brain, eyes, ears, heart and other organs. Passed to a '
      + 'baby in pregnancy it can cause stillbirth and death. American cases in newborns have risen '
      + 'twelve years in a row and are nearly seven times what they were a decade ago. England had '
      + 'more cases in 2024 than in any year since the 1940s.',
  },
  {
    id: 'hiv',
    name: 'HIV',
    silent: 'Often no symptoms for years. Only about half of infected Americans aged 13 to 24 know',
    cure: 'managed',
    spread: 'Blood, semen and vaginal or rectal fluids. Not through skin contact.',
    test: 'A blood or finger prick test. Depending on the test, it can take from about ten days to '
      + 'three months to turn positive. Everybody aged thirteen to sixty four should be tested at '
      + 'least once in the United States.',
    treat: 'Not curable, but daily treatment now gives near normal health. And someone whose '
      + 'treatment keeps the virus undetectable cannot pass it on through sex.',
    risk: 'Untreated, it destroys the immune system. Treated, it is a long term condition.',
    prevent: 'PrEP is a medicine taken before possible exposure to prevent HIV, and it is approved '
      + 'for adolescents. PEP is an emergency medicine started within seventy two hours after a '
      + 'possible exposure.',
  },
  {
    id: 'trich',
    name: 'Trichomoniasis',
    silent: 'About 7 in 10 people have no symptoms',
    cure: 'curable',
    spread: 'Mainly vaginal sex. It rarely infects the mouth or anus.',
    test: 'A swab or urine test.',
    treat: 'An antibiotic, a single dose or a week of tablets. About one in five catch it again within '
      + 'three months, so women should be retested.',
    risk: 'Raises the chance of premature birth in pregnancy and of catching HIV.',
  },
  {
    id: 'hepb',
    name: 'Hepatitis B',
    silent: 'Many people have no symptoms, especially when young',
    cure: 'managed',
    spread: 'Blood, semen and other body fluids, through sex, birth and shared needles. Not through '
      + 'kissing or sharing cups.',
    test: 'A blood test.',
    treat: 'About ninety five percent of adults clear it completely. Those who do not are managed with '
      + 'medication rather than cured.',
    risk: 'Long term infection can lead to liver disease and liver cancer. There is a vaccine, and '
      + 'most children in both countries have had it, though not all current teenagers were routinely '
      + 'vaccinated as babies. Worth checking their record.',
  },
];

export const STI_CURE = {
  curable: 'Curable',
  clears: 'Usually clears by itself',
  managed: 'Managed, not cured',
};

export function stiItem(id) {
  for (let i = 0; i < STI_LIST.length; i++) if (STI_LIST[i].id === id) return STI_LIST[i];
  return null;
}

export const STI_ORAL = 'Oral sex is sex, as far as infections are concerned. Chlamydia, gonorrhoea, '
  + 'syphilis, herpes, HPV and HIV can all pass that way, and a lot of teenagers genuinely believe it '
  + 'does not count. It is worth saying out loud.';

export const STI_MGEN = 'You may also hear about mycoplasma genitalium. Routine testing without symptoms '
  + 'is not recommended in either country, so it is not something to push for.';

/* ==================================================================
   PROTECTION AND TESTING
   ================================================================== */

export const PROT_CONDOM = {
  title: 'What a condom actually does',
  rows: [
    { what: 'HIV', how: 'Cuts the risk by about eighty percent when used every time' },
    { what: 'Chlamydia and gonorrhoea', how: 'Protects well, on good observational evidence' },
    { what: 'HPV', how: 'About seventy percent lower risk in one study of women whose partners used '
      + 'them every time' },
    { what: 'Herpes', how: 'About thirty percent lower risk. Partial, because herpes lives on skin a '
      + 'condom does not cover' },
    { what: 'Syphilis', how: 'Protects when the sore is on skin the condom covers' },
    { what: 'Pregnancy', how: 'About thirteen in a hundred in a year of real world use, two in a '
      + 'hundred when used perfectly' },
  ],
  note: 'Latex or polyurethane, not lambskin, which does not stop viruses. For oral sex, a condom or '
    + 'a dental dam, which is a thin square of latex, or a condom cut open into one.',
};

export const PROT_COMPARE = {
  title: 'Pregnancy, in a year of ordinary use',
  rows: [
    { what: 'Implant or coil', typ: 'Under 1 in 100' },
    { what: 'The injection', typ: 'About 4 in 100' },
    { what: 'The pill, patch or ring', typ: 'About 7 in 100' },
    { what: 'External condom', typ: 'About 13 in 100' },
  ],
  says: 'The most reliable against pregnancy are the ones that do nothing against infection. That is '
    + 'the whole argument for using both.',
};

export const PROT_TEST = {
  title: 'Getting tested, and how ordinary it is',
  body: [
    'In both countries, every sexually active young woman under twenty five is advised to test for '
    + 'chlamydia every year, and after every new partner. In the United States that includes '
    + 'gonorrhoea. Young men are not routinely screened in the same way, but can and should test '
    + 'after a new partner or any symptom.',
    'For most teenagers a test is a urine sample, or a swab they take themselves in a toilet. Nobody '
    + 'needs to examine them. HIV and syphilis need a small blood sample, which can be a finger prick.',
  ],
  uk: 'In the UK, free postal test kits are available to under twenty fives, usually from sixteen, and '
    + 'NHS sexual health clinics are free and see young people.',
  us: 'In the United States, a school based health centre, a county health department clinic, a '
    + 'Title X family planning clinic, Planned Parenthood, or a family doctor. The government’s '
    + 'own locator at gettested.cdc.gov finds free and low cost testing nearby.',
};

export const PROT_CONFIDENTIAL = {
  title: 'They can be tested without you, and that is a good thing',
  body: [
    'In every American state and in Washington DC, a teenager can consent to their own STI testing '
    + 'and treatment without a parent. Eight states set a minimum age, from twelve to fourteen. In '
    + 'some states a doctor is allowed to tell a parent in certain circumstances, and the rules differ, '
    + 'so if it matters, check your own state.',
    'In the UK, a young person under sixteen can be seen confidentially at a sexual health clinic if '
    + 'the clinician believes they understand what is involved, under what are called the Gillick and '
    + 'Fraser principles. The NHS is explicit that the clinic will not tell parents unless there is a '
    + 'serious risk to the young person’s safety.',
  ],
  why: 'This is not a loophole to worry about. A teenager who believes testing means telling their '
    + 'parents is a teenager who does not get tested. The protective move is to tell them yourself '
    + 'that they can go without you, and where, and that you would rather they went than did not.',
  eob: 'One practical catch in the United States. If they are on your insurance, the statement that '
    + 'comes to you can show the visit and the lab. Some states let teenagers ask for that to be sent '
    + 'somewhere else, and free clinics avoid it entirely. Worth knowing so they are not caught out.',
};

/* THE VACCINE. Dated, because the American federal position is the
   subject of a court case and is expected to change. What is written
   here is what is in force and what the professional bodies say,
   without taking a side on the dispute itself. */
export const PROT_HPV = {
  title: 'The HPV vaccine',
  body: [
    'It prevents the types of HPV that cause most cancers. In Scotland, among women fully vaccinated '
    + 'at twelve or thirteen, no cases of cervical cancer have been found. In England, cervical cancer '
    + 'fell by eighty seven percent in women offered it at twelve or thirteen, and no cervical cancer '
    + 'deaths were recorded in women aged twenty to twenty four between 2020 and 2024. In the United '
    + 'States, precancers in screened women aged twenty to twenty four fell by seventy nine percent.',
    'It works best given young, before any exposure, which is why it is offered at eleven or twelve '
    + 'and can start at nine. It is for boys as well as girls in both countries.',
    'For throat cancer the evidence is still indirect. Vaccinated people have far less of the relevant '
    + 'HPV in their mouths, and the American regulator approved it for preventing head and neck cancers '
    + 'on that basis, with a confirming trial still running.',
  ],
  uk: 'In the UK, one dose at twelve to thirteen in school, with catch up to the twenty fifth '
    + 'birthday.',
  us: 'In the United States, the recommendation in force is routine vaccination at eleven to twelve, '
    + 'able to start at nine, with two doses if started before fifteen and three after, and catch up '
    + 'to twenty six. A federal change to one dose announced in January 2026 was paused by a court in '
    + 'March 2026, and the appeal is due to be heard on 6 October 2026. The American Academy of '
    + 'Pediatrics recommends starting between nine and twelve and currently keeps two doses.',
  checked: 'Checked September 2026. The American schedule is expected to change after the appeal, so '
    + 'check with your child’s doctor.',
};

export const PROT_HEPB = 'Hepatitis B is part of the infant vaccines in both countries. In the UK it '
  + 'was added to the routine infant schedule in 2017, so many current teenagers were not vaccinated as '
  + 'babies. American guidance recommends it for any unvaccinated young person being seen for sexual '
  + 'health. Worth checking your child’s record.';

/* ==================================================================
   IF SHE IS PREGNANT
   ================================================================== */

export const PREG_HEAD = 'Please tell someone.';

export const PREG_INTRO = [
  'A teenage pregnancy is life changing and it is worth your child understanding exactly how much. '
  + 'But the evidence points in one direction about what makes it dangerous, and it is not the '
  + 'pregnancy. It is hiding it.',
  'In a study of American newborns who died in their first day at the hands of their mother, about '
  + 'three quarters of the pregnancies had been concealed and two thirds of the babies were born at '
  + 'home with nobody there to help. Pregnant teenagers who had no antenatal care at all were about '
  + 'seven times more likely to give birth prematurely than those who had it.',
];

/* For a son, the pregnancy is his partner's, and the useful message is
   different: stand by her, make sure she gets care, and come to you. */
export const PREG_SON = {
  title: 'If your son tells you someone is pregnant',
  body: [
    'The same rule applies in the other direction. A teenage boy who expects fury will keep it to '
    + 'himself, and then nobody helps the girl either.',
    'What he most needs to hear from you is that he did the right thing telling you, that the most '
    + 'important thing now is that she gets seen by a doctor or midwife, and that the decision about '
    + 'the pregnancy is hers, with his support.',
  ],
};

export const PREG_WHY_HIDE = {
  title: 'Why they hide it',
  body: 'When pregnant teenagers are asked why they delayed telling anyone or getting care, the same '
    + 'things come up: not recognising the signs, not wanting it to be true, and fear of how their '
    + 'parents would react. Some wait well into the second trimester. The studies are small, but that '
    + 'last reason appears in nearly all of them.',
  so: 'So the most protective thing a parent can do happens years before it is needed. It is saying, '
    + 'plainly and more than once: if you are ever pregnant, or think you might be, tell me. I will not '
    + 'be angry. We will work it out. And if you cannot tell me, tell somebody.',
};

export const PREG_SAY = [
  'I am glad you told me.',
  'You are not in trouble. We are going to work this out together.',
  'Whatever you decide, you will not be doing it alone.',
  'The first thing is to get you seen by a doctor or midwife, so we know you are both all right.',
];

export const PREG_CARE = {
  title: 'Care starts as soon as she tells someone',
  body: [
    'In most of the United States, thirty seven states and Washington DC, a pregnant minor can consent '
    + 'to her own antenatal care without a parent. In the UK, a young person under sixteen can consent '
    + 'if she understands what is involved, and confidential advice is available from a GP, a practice '
    + 'nurse, a sexual health clinic or NHS 111.',
    'Early care matters for her as much as for the baby. It is where high blood pressure, infection and '
    + 'anaemia get caught, and where she finds out how far along she is, which shapes every other '
    + 'decision.',
  ],
};

export const PREG_OPTIONS = {
  title: 'Her options, plainly',
  body: 'There are three: continuing the pregnancy and parenting, continuing it and placing the baby '
    + 'for adoption, or ending it. Which of those are available depends on where she lives and how far '
    + 'along she is.',
  us: 'In the United States, abortion law varies by state and has changed a great deal since 2022, and '
    + 'many states have rules about parental involvement for minors. Current state by state information '
    + 'is kept up to date by the Guttmacher Institute.',
  uk: 'In England, Scotland and Wales, abortion is legal up to twenty four weeks, and the same '
    + 'principles about a young person’s ability to consent apply.',
  adult: 'Whatever she decides, the research on young mothers is consistent that having a trusted '
    + 'adult involved helps. If that cannot be you, helping her find someone who can is its own kind of '
    + 'support.',
};

export const PREG_HAVEN = {
  title: 'If a baby is born and she cannot keep it',
  us: 'Every American state has a Safe Haven law. A newborn can be handed over safely at a hospital, '
    + 'and in most states a fire station or police station, and in some states a secure baby box. '
    + 'Usually no name has to be given, and a parent who follows their state’s rules will not be '
    + 'prosecuted. The age limit for the baby varies by state, from seventy two hours to thirty days or '
    + 'more.',
  line: 'The National Safe Haven Alliance runs a confidential line, day and night.',
  phone: '1-888-510-2229',
  phoneLabel: '1-888-510-BABY',
  site: 'nationalsafehavenalliance.org',
  uk: 'The UK has no safe haven law and abandoning a baby is a criminal offence. What exists instead is '
    + 'confidential help: a GP, a midwife, NHS 111, or a hospital, all of whom can arrange care and '
    + 'adoption without anyone being in trouble for asking.',
  why: 'It is worth your child knowing this exists, not because you expect it, but because a '
    + 'frightened teenager who knows there is a safe option is one who does not reach for a dangerous '
    + 'one.',
};

/* ==================================================================
   EVERYTHING ELSE
   ================================================================== */

export const MORE_READY = {
  title: 'The emotional side, which nobody tests them on',
  body: [
    'A large British study asked young people about their first time. Just under half of young women '
    + 'and over a quarter of young men said it had not been the right time. Almost one in five young '
    + 'women said they and their partner had not been equally willing.',
    'In an American study of teenagers who started having sex during the study, sixty one percent of '
    + 'girls and thirty nine percent of boys said they wished they had waited longer.',
  ],
  so: 'None of that is a reason for shame. It is a reason to talk about readiness as its own thing, '
    + 'separate from protection: whether they want to, whether it is their own decision rather than '
    + 'pressure or alcohol, and whether they would feel all right about it tomorrow.',
};

export const MORE_PORN = {
  title: 'Pornography, which is teaching them whether you do or not',
  body: [
    'In an American survey of teenagers aged thirteen to seventeen, seventy three percent had seen '
    + 'pornography online, most often for the first time at about twelve, and more than half had come '
    + 'across it by accident. More than a quarter thought it showed how most people actually have sex.',
    'In England, almost half of young adults surveyed said girls expect sex to involve physical '
    + 'aggression. Researchers link heavy early exposure with more aggressive attitudes, though that '
    + 'evidence shows association rather than proof of cause.',
  ],
  hope: 'The same American survey found more teenagers said they had learned a lot about sex from a '
    + 'parent or trusted adult than from pornography. You are still the bigger influence. It is worth '
    + 'using.',
  say: 'The useful message is short: it is acting, it is often made to be extreme, and real sex '
    + 'between people who like each other involves asking, checking and stopping.',
};

export const MORE_LINKS = {
  consent: {
    title: 'Consent, and what to do if something happens',
    sub: 'What consent looks like at each age, and the first hours after an assault',
  },
  online: {
    title: 'Phones, images and strangers',
    sub: 'Sexting, grooming, and what to do if an image is used to threaten them',
  },
  body: {
    title: 'Puberty and bodies',
    sub: 'What changes when, for girls and for boys, and how to talk about it',
  },
};

export const MORE_IMAGE = 'One line worth saying to every teenager with a phone: once an image is sent, '
  + 'you no longer control where it goes. And if anyone ever uses one to threaten you, it is not your '
  + 'fault, you are not in trouble, and there are people whose whole job is getting it taken down.';

export const SEXED_DISCLAIMER = 'Educational information for parents, not medical advice. Figures are '
  + 'from national surveillance, guidelines and published studies and describe groups of people. Laws '
  + 'on minors and consent differ between states and countries and change, so check locally where it '
  + 'matters.';

export const SEXED_SOURCES = [
  { org: 'CDC', label: 'STI Treatment Guidelines, including adolescents and confidentiality',
    url: 'https://www.cdc.gov/std/treatment-guidelines/adolescents.htm' },
  { org: 'CDC', label: 'Chlamydia, and why it is so often silent',
    url: 'https://www.cdc.gov/chlamydia/about/index.html' },
  { org: 'CDC', label: 'Pelvic inflammatory disease and fertility',
    url: 'https://www.cdc.gov/pid/about/index.html' },
  { org: 'NIHR', label: 'The natural history of chlamydia in women, the current best estimates',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK350652/' },
  { org: 'CDC', label: 'HPV associated cancers, including throat cancer',
    url: 'https://www.cdc.gov/cancer/hpv/cases.html' },
  { org: 'NCI', label: 'HPV and cancer, which types cause which',
    url: 'https://www.cancer.gov/about-cancer/causes-prevention/risk/infectious-agents/hpv-and-cancer' },
  { org: 'CDC', label: 'STIs and oral sex',
    url: 'https://www.cdc.gov/sti/about/about-sti-risk-and-oral-sex.html' },
  { org: 'CDC', label: 'STI surveillance, the most recent national figures',
    url: 'https://cdc.gov/sti-statistics/annual/index.html' },
  { org: 'UKHSA', label: 'STIs and chlamydia screening in England, 2025',
    url: 'https://www.gov.uk/government/statistics/sexually-transmitted-infections-stis-annual-data-tables/sexually-transmitted-infections-and-screening-for-chlamydia-in-england-2025-report' },
  { org: 'NHS', label: 'Chlamydia, and free testing for under twenty fives',
    url: 'https://www.nhs.uk/conditions/chlamydia/' },
  { org: 'NHS', label: 'Confidentiality at sexual health services',
    url: 'https://www.nhs.uk/live-well/sexual-health/confidentiality-at-sexual-health-services/' },
  { org: 'Guttmacher', label: 'Minors’ access to STI services, state by state',
    url: 'https://www.guttmacher.org/state-policy/explore/minors-access-sti-services' },
  { org: 'Guttmacher', label: 'Minors’ access to prenatal care, state by state',
    url: 'https://www.guttmacher.org/state-policy/explore/minors-access-prenatal-care' },
  { org: 'Guttmacher', label: 'Contraceptive effectiveness in the United States',
    url: 'https://www.guttmacher.org/fact-sheet/contraceptive-effectiveness-united-states' },
  { org: 'CDC', label: 'Find free and low cost testing near you',
    url: 'https://gettested.cdc.gov/' },
  { org: 'Safe Haven', label: 'National Safe Haven Alliance',
    url: 'https://www.nationalsafehavenalliance.org' },
  { org: 'JAMA', label: 'Parent and teen communication about sex, fifty two studies',
    url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2468100' },
  { org: 'Common Sense', label: 'Teens and pornography, 2023',
    url: 'https://www.commonsensemedia.org/press-releases/new-report-reveals-truths-about-how-teens-engage-with-pornography' },
];

export default SEXED_TABS;

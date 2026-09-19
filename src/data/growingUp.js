/**
 * Ready Set Grow: Bodies, puberty and the conversations nobody had
 * ==================================================================
 * She asked for this alongside the online safety content, and the two
 * belong together more than they look. A child who has the right words
 * for their own body, who has been told that no part of them is a
 * secret, and who knows they will never be in trouble for telling, is
 * the child who says something on day one instead of month four.
 *
 * TWO TRACKS, ON PURPOSE
 * The body track, which is what is happening to them and when. The
 * people track, which is consent, privacy, relationships and sex. They
 * run in parallel from toddlerhood, not from thirteen, because the
 * groundwork for both is laid at three and the conversation at
 * thirteen only works if it is the fortieth one rather than the first.
 *
 * THE RULE THIS FILE IS WRITTEN UNDER
 * Say what is known, say how well it is known, and never dress up
 * expert consensus as proven outcome. The clearest example is the
 * business of teaching correct anatomical names. Every serious body
 * recommends it and it is a national education standard by second
 * grade, and no study has ever isolated that one component and shown
 * it reduces abuse. This file says exactly that, in those terms,
 * because a parent who is told something is proven and later finds out
 * it was not stops believing the rest of the page.
 *
 * ON WHOSE VALUES THESE ARE
 * Not the app's. Families differ enormously on when and how much to
 * say about sex, and a parenting app has no business ruling on that.
 * What this does is set out what the evidence shows about outcomes,
 * plainly, including where it is weaker than the people who quote it
 * admit, and then get out of the way.
 *
 * Everything checked September 2026 against GROW_SOURCES.
 */

export const GROW_TITLE = 'Growing up';

export const GROW_SUB = 'Their body, their privacy, and the conversations that work better early. '
  + 'Two tracks, both starting long before you think they need to.';

export const GROW_TABS = [
  { id: 'now', label: 'Where they are now' },
  { id: 'body', label: 'What their body does' },
  { id: 'talking', label: 'How to talk about it' },
  { id: 'safe', label: 'Bodies and safety' },
];

export const GROW_HEAD = 'The talk does not work. Forty small ones do.';

export const GROW_INTRO = [
  'There is good evidence that how parents talk about this matters, and that what matters is not how '
  + 'much you say but how specific and how comfortable it is. Vague general talk about sex does very '
  + 'little. Specific conversations about actual things do measurably more.',
  'The other consistent finding is that talking about it does not make anything happen sooner. That '
  + 'worry is the main reason parents wait, and it does not hold up.',
];

/* ==================================================================
   THE BODY TRACK
   ==================================================================
   Numbers first, because parents come here with a specific question
   and it is nearly always when, or is this normal.
   ================================================================== */

export const GROW_GIRLS = {
  title: 'Girls, in order',
  order: [
    'Breasts start first, on average around ten, anywhere from eight to twelve. A firm lump under one '
    + 'nipple is the usual first sign, often on one side only for a while, and often tender. It is not '
    + 'a lump to worry about.',
    'Pubic hair, usually soon after, sometimes before.',
    'The growth spurt, which in girls comes earlier in the process than it does in boys.',
    'Then the first period, on average about two to two and a half years after the breasts started.',
  ],
  menarche: 'The average age of a first period is around twelve. Recent data from a large study of '
    + 'over seventy thousand women suggests it has drifted earlier, to about eleven point nine, with '
    + 'the shift most pronounced among Black, Hispanic and Asian participants and those on lower '
    + 'incomes. Clinical references still say twelve to twelve and a half, so treat around twelve as '
    + 'the number and earlier than that as unremarkable.',
  early: 'Breast development before eight is what doctors call precocious and is worth an '
    + 'appointment. That threshold has not changed. What changed in June 2026 is the response to it: '
    + 'the current guideline recommends watching and waiting with checks every four to six months for '
    + 'girls between seven and eight, rather than going straight to testing, and no routine brain scan '
    + 'in girls aged six to eight without other symptoms. If you have read older advice that early '
    + 'breast development means urgent testing, that is out of date.',
  late: 'No breast development by thirteen, or more than three years between breasts starting and a '
    + 'first period, or no period by fifteen, are all worth an appointment.',
};

export const GROW_PERIODS = {
  title: 'Periods, the practical part',
  normal: [
    'Cycles for a teenager run anywhere from 21 to 45 days apart. That is the adolescent range and it '
    + 'is wider than the adult one, so do not measure a thirteen year old against a chart written for '
    + 'a thirty year old.',
    'A period lasts fewer than seven days.',
    'Three to six pads or tampons a day is the normal range.',
    'The first few years are irregular, and that is expected rather than a problem.',
  ],
  slower: 'Worth knowing, because it reassures: cycles are taking longer to settle than they used to. '
    + 'In the same large study, the share of girls whose cycles became regular within two years of '
    + 'their first period fell from 76 percent in those born in the 1950s and 60s to 56 percent in '
    + 'those born in the early 2000s.',
  red: {
    title: 'Worth a doctor',
    items: [
      'No period by fifteen, or by fourteen if there is also a lot of body hair, an eating disorder, '
      + 'or very heavy exercise.',
      'Cycles closer together than every 21 days, or further apart than every 45.',
      'Ninety days between periods, even once.',
      'Bleeding for more than seven days.',
      'Soaking through more than one pad or tampon every one to two hours.',
      'A lot of bruising or bleeding generally, or a bleeding disorder in the family.',
      'Pain that keeps her off school. Being told period pain is just part of it has left a generation '
      + 'of women undiagnosed, and severe pain is worth investigating rather than enduring.',
    ],
  },
  before: 'Tell her before it happens, and tell her more than once. Most children can understand the '
    + 'basics by six or seven. The research on girls who were not told describes information that came '
    + 'too late, or was wrong, or was not enough, and mothers who felt they did not know enough '
    + 'themselves to explain it. Put something in her bag before she needs it. A girl who starts at '
    + 'school with nothing and no idea what is happening remembers that day for forty years.',
};

export const GROW_BOYS = {
  title: 'Boys, in order',
  order: [
    'Testicles get larger first, on average around eleven and a half, anywhere from nine and a half '
    + 'to fourteen. This is the actual first sign and almost nobody notices it.',
    'Pubic hair.',
    'The growth spurt, peaking around the middle of it, often nearly four inches in a year.',
    'First ejaculation, about a year after the testicles started changing.',
    'Voice change and facial hair, late, just after the growth spurt peaks. The voice is the sign '
    + 'everybody watches for and it is one of the last things to happen.',
  ],
  erections: 'Tell him about spontaneous erections before they start happening in a classroom. The '
    + 'pediatric guidance is to explain that they happen to every boy, that they are a normal sign his '
    + 'body is changing, and that they become less frequent over time.',
  wet: 'Tell him about wet dreams the same way, and tell him one specific thing that almost nobody '
    + 'gets told: a wet dream does not mean he was having a sexual dream. Boys who have not been told '
    + 'that assume something about themselves that is not true. Say clearly that he cannot prevent it '
    + 'and it is not something he did.',
  early: 'Signs before nine is precocious and worth an appointment. No testicular enlargement by '
    + 'fourteen, or more than four years from start to finish, is worth one too.',
  note: 'Boys get told far less than girls do, by everybody, and a boy who has had none of this '
    + 'explained assumes whatever the internet tells him. That gap is not neutral.',
};

export const GROW_EARLY_RISK = {
  title: 'If she is developing early',
  body: [
    'Girls who develop noticeably before their friends are more likely to experience anxiety and '
    + 'depression, to be bullied, to get unwanted sexual attention from both peers and adults, and to '
    + 'be expected to behave older than they are. Clinicians also flag that Black girls are read as '
    + 'older and less innocent than they are, a bias that early development makes worse.',
    'Those are associations rather than proven causes, and researchers are still working out how much '
    + 'is the early development itself and how much is shared family and genetic factors. It is worth '
    + 'knowing either way, because the part you can act on is the same.',
  ],
  what: [
    'Talk about it before it is visible, so she is not learning what is happening to her from the way '
    + 'people look at her.',
    'Say out loud that a body that looks older does not make her older, and that nobody is allowed to '
    + 'treat her as older.',
    'Watch the friendships. Early developing girls often get pulled toward older groups.',
    'Tell her school if she is being commented on. This is a thing schools are supposed to handle.',
  ],
};

/* ==================================================================
   THE TALKING TRACK
   ================================================================== */

export const GROW_EVIDENCE = {
  title: 'What actually works, by the research',
  items: [
    'Specific beats general by a long way. Talking about condoms, contraception, or what to do in a '
    + 'particular situation does measurably more than a general conversation about sex.',
    'Comfort matters as much as content. Conversations that are open, calm and respectful predict '
    + 'better outcomes. Ones that are awkward and rushed predict very little.',
    'It does not make them start earlier. This is the fear that keeps parents quiet and it is not '
    + 'supported.',
    'Many small conversations beat one big talk, and the guidance is consistent on this from every '
    + 'direction.',
    'More talk is not itself the finding. Some studies found that sheer volume of conversation '
    + 'predicted more permissive attitudes rather than delay. Talking well is the finding, not talking '
    + 'more.',
  ],
  dads: 'The finding worth putting in front of fathers: across 52 studies and over twenty five '
    + 'thousand adolescents, communication with mothers had a small but real protective effect on '
    + 'safer sex behaviour, and communication with fathers had essentially none. That is almost '
    + 'certainly not because fathers cannot do this. It is because they mostly are not doing it. A '
    + 'father who takes this on is doing something the research has barely had a chance to measure.',
};

export const GROW_SEXED = {
  title: 'What the evidence says about sex education',
  strong: {
    title: 'Where the evidence is strong',
    items: [
      'Abstinence only until marriage programmes do not work. A federal evaluation of four of them '
      + 'found no effect on when young people first had sex. A review of thirteen found no effect on '
      + 'starting sex, frequency, number of partners or condom use.',
      'Programmes teaching abstinence along with contraception do better. A review of 66 of them found '
      + 'favourable effects on sexual activity, number of partners, use of protection, and rates of '
      + 'sexually transmitted infection and pregnancy.',
      'Virginity pledges largely do not hold, and young people who took one and then had sex were less '
      + 'likely to use contraception when they did.',
    ],
  },
  weak: {
    title: 'Where it is weaker than people admit',
    body: 'A review of 21 studies of school based teen pregnancy prevention programmes in the United '
      + 'States found that of thirty comparisons, 24 showed no significant difference in pregnancy '
      + 'rates, four showed a reduction and two showed an increase. The authors rated the quality of '
      + 'the evidence low or very low. So: comprehensive sex education performs well on knowledge, '
      + 'attitudes and protective behaviour, and the effect on actual pregnancy rates in American '
      + 'schools is much more mixed than the summaries suggest. Anybody quoting a single dramatic '
      + 'percentage at you is quoting a headline rather than a body of evidence.',
  },
  yours: 'What you teach at home is yours to decide and this app has no view on it. What is worth '
    + 'knowing is that withholding accurate information has not been shown to delay anything, and has '
    + 'been shown to leave young people less able to protect themselves when they do.',
};

export const GROW_BY_AGE = [
  {
    id: 'toddler', label: 'Two to four', from: 18, to: 59,
    body: 'Correct names and body ownership. Nothing about sex.',
    items: [
      'Use the real words. Penis, vulva, vagina, breasts, bottom. Not because a three year old needs '
      + 'anatomy, but because a made up word tells a child this part is unspeakable, and the child who '
      + 'cannot name it cannot report it.',
      'Nobody has to hug or kiss anybody. Offer a high five, a wave, a handshake instead. Grandparents '
      + 'will survive it.',
      'Your body is yours. You can say no.',
      'Start the difference between a surprise and a secret. A surprise is something everybody finds '
      + 'out and is happy about. A secret is something you are told to keep forever, and we do not '
      + 'have those in this house.',
      'Stop asking them to keep small secrets yourself. Do not tell Mum I gave you ice cream teaches '
      + 'exactly the thing you do not want taught.',
    ],
  },
  {
    id: 'early', label: 'Five to eight', from: 60, to: 107,
    body: 'Privacy, the rules about touch, and where babies come from if they ask.',
    items: [
      'The parts a swimsuit covers are private. Nobody looks at them or touches them except to keep '
      + 'them clean or healthy, and a doctor only with you there.',
      'Say it includes everybody, out loud. Not a teacher, not a cousin, not a coach, not somebody in '
      + 'the family. Nine in ten children who are abused are abused by somebody they know, and a rule '
      + 'that only covers strangers covers almost nothing.',
      'If somebody does, it is not your fault and you are not in trouble, and if they said I would be '
      + 'angry, they said that to trick you.',
      'Ask them who else they could tell if they did not want to tell you, and make sure there is '
      + 'somebody.',
      'Answer the baby question honestly and briefly. Most children ask around five. A short true '
      + 'answer now is what makes the longer conversation possible at eleven.',
      'By this age it is a national education standard that a child can name the body parts correctly '
      + 'and can say what consent means.',
    ],
  },
  {
    id: 'middle', label: 'Nine to eleven', from: 108, to: 143,
    body: 'Puberty, before it starts. Both children, both sets of changes.',
    items: [
      'Explain periods to girls by nine at the latest, and explain them to boys too. A boy who knows '
      + 'what a period is does not become the reason a girl dreads school.',
      'Explain erections and wet dreams to boys before they happen.',
      'Explain that everybody goes at a different speed and that being first or last is not a problem '
      + 'to be solved.',
      'This is the age to talk about images and bodies online, because they will see things they did '
      + 'not go looking for. Tell them in advance that if they see something that upsets them, they '
      + 'can tell you and nothing will be taken away.',
      'Deodorant, showers, sheets. The practical half matters and children are mortified to ask.',
    ],
  },
  {
    id: 'teen', label: 'Twelve to fifteen', from: 144, to: 191,
    body: 'Consent as a real thing rather than a word, and the specifics.',
    items: [
      'Consent at this age is not just no means no. It is that somebody who is asleep, drunk, '
      + 'frightened or being pestered into it has not agreed, and that changing your mind is allowed '
      + 'at any point.',
      'Both directions. Your child needs to know their own boundaries are real and that somebody '
      + 'else’s are too.',
      'Be specific. What actually protects against pregnancy and infection, what does not, and where '
      + 'they can get it. General talk about sex does very little and this does more.',
      'Talk about pressure and about what a good relationship feels like, not just about mechanics.',
      'An image of somebody under eighteen is a criminal matter even when the two people involved are '
      + 'both under eighteen. Say it once, plainly, without making it the whole conversation.',
      'Their first gynecology visit is usually recommended between thirteen and fifteen.',
    ],
  },
  {
    id: 'older', label: 'Sixteen and up', from: 192, to: 400,
    body: 'You are a person they can ask now rather than a person who tells them.',
    items: [
      'Make sure they know the practical things. Where to get contraception, what testing involves, '
      + 'what to do the morning after something went wrong.',
      'Tell them that you would rather know and be worried than not know.',
      'Talk about what they want out of a relationship, not only what to avoid.',
      'Keep the door open on the hard version. Assault, coercion, a pregnancy, a diagnosis. The '
      + 'promise from when they were four is the same promise now.',
    ],
  },
];

export function growStageFor(months) {
  if (months === null || months === undefined) return null;
  for (let i = 0; i < GROW_BY_AGE.length; i++) {
    const s = GROW_BY_AGE[i];
    if (months >= s.from && months <= s.to) return s;
  }
  return months < GROW_BY_AGE[0].from ? null : GROW_BY_AGE[GROW_BY_AGE.length - 1];
}

/* ==================================================================
   BODIES AND SAFETY
   ==================================================================
   The honest section. This is where the claim everybody repeats gets
   examined rather than repeated.
   ================================================================== */

export const GROW_NAMES = {
  title: 'The correct words, and what is actually known about them',
  body: [
    'Every major child health and child protection body recommends teaching children the correct '
    + 'anatomical words from as soon as they can talk, and being able to name the body parts correctly '
    + 'is a national education standard by the end of second grade.',
    'The reasoning given is twofold. A made up word signals that a part of the body is shameful or '
    + 'unspeakable, and a child without accurate words is much harder to understand if they try to '
    + 'tell somebody something.',
    'What is honestly known: prevention programmes that include this teaching do measurably increase '
    + 'what children know and how likely they are to disclose. What has never been shown is that '
    + 'teaching the words on its own reduces abuse, because no study has isolated that one part, and '
    + 'reviewers note that no programme has yet been shown to reduce actual abuse rates. The claim '
    + 'that offenders avoid children who know the words comes from offenders being interviewed about '
    + 'how they chose victims, which is suggestive rather than proof.',
  ],
  verdict: 'So: do it, because everybody who works in this recommends it and the cost is nothing. Do '
    + 'not do it believing it is a shield on its own, because it is not, and the things that go with '
    + 'it matter more.',
};

export const GROW_BODY_RULES = {
  title: 'The rules that go with it',
  items: [
    'Your body belongs to you and you can always say no, including to family.',
    'It is not okay for anybody to touch you in a way that makes you uncomfortable. Not Mum, not Dad, '
    + 'not an aunt or an uncle or a teacher or a friend.',
    'If somebody does, it is never your fault.',
    'If somebody tells you not to tell, that is exactly when you tell.',
    'If somebody says nobody will believe you, or offers you something, or lets you do something you '
    + 'are not allowed, they are tricking you.',
    'Nothing is ever so bad that you cannot tell me.',
  ],
  who: 'Ask them who else they would tell if they could not tell you, and help them have an answer. '
    + 'A child needs more than one door.',
  adults: 'The part for you rather than them: reduce the situations where one adult is alone with '
    + 'your child unobserved, ask what the supervision policy is wherever they go, and notice if they '
    + 'suddenly do not want to go somewhere they used to love.',
};

export const GROW_CONSENT = {
  title: 'Consent, by age',
  intro: 'There is a proper progression for this, used in schools, and it starts far earlier than '
    + 'most people assume.',
  bands: [
    { when: 'By the end of second grade', what: 'Can say what bodily autonomy and personal boundaries '
      + 'mean, can say what consent means, and can both state their own boundaries and respect '
      + 'somebody else’s.' },
    { when: 'By the end of fifth grade', what: 'Can explain how consent, boundaries and bodily '
      + 'autonomy relate to each other, and can do both sides of it in practice.' },
    { when: 'By the end of eighth grade', what: 'Can define sexual consent, and has strategies for '
      + 'stating boundaries and respecting them.' },
    { when: 'By the end of high school', what: 'Can describe what sexual consent is, why it matters, '
      + 'and the legal consequences of sex without it, and can communicate consent and their own '
      + 'wants.' },
  ],
  note: 'Notice how early the first band is. Consent at six is about hugs and tickling and somebody '
    + 'taking a toy, and it is the same skill.',
};

export const GROW_DISCLOSE = {
  title: 'If they tell you something',
  items: [
    'Stay calm on the outside whatever is happening on the inside. Your face is the thing they will '
    + 'remember and it decides whether they tell you the rest.',
    'Believe them. False reports are rare, somewhere between four and eight percent.',
    'Say it out loud: I believe you, I am glad you told me, this is not your fault.',
    'Do not interrogate. Do not ask leading questions. What you ask can affect what happens later in a '
    + 'case, so get the outline and stop.',
    'Write down what they said in their words, as soon as you can, with the date.',
    'Then call somebody who does this. Childhelp on 1-800-422-4453 will talk you through what happens '
    + 'next, and you can call before deciding anything.',
  ],
};

export const GROW_SOURCES = [
  { org: 'Endocrine Society', label: 'Central precocious puberty, the June 2026 guideline and the shift to watchful waiting',
    url: 'https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty' },
  { org: 'AAFP', label: 'Disorders of puberty, the ages and the order things happen in',
    url: 'https://www.aafp.org/pubs/afp/issues/2017/1101/p590.html' },
  { org: 'AAP, HealthyChildren', label: 'What to tell boys about erections and wet dreams',
    url: 'https://www.healthychildren.org/English/ages-stages/gradeschool/puberty/Pages/Concerns-Boys-Have-About-Puberty.aspx' },
  { org: 'ACOG and AAP', label: 'The menstrual cycle as a vital sign, and the adolescent normal ranges',
    url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2015/12/menstruation-in-girls-and-adolescents-using-the-menstrual-cycle-as-a-vital-sign' },
  { org: 'Harvard Chan School', label: 'Periods arriving earlier, and cycles taking longer to settle',
    url: 'https://hsph.harvard.edu/news/menstrual-periods-are-arriving-earlier-for-younger-generations-especially-among-racial-minority-and-lower-income-individuals/' },
  { org: 'JAMA Pediatrics', label: 'Parent communication and safer sex, the meta analysis of 52 studies',
    url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2468100' },
  { org: 'Journal of Adolescent Health', label: 'Abstinence only until marriage, the updated review of what it does',
    url: 'https://www.jahonline.org/article/S1054-139X(17)30260-4/fulltext' },
  { org: 'Prevention Science', label: 'Where school based pregnancy prevention evidence is genuinely weak',
    url: 'https://link.springer.com/article/10.1007/s11121-017-0861-6' },
  { org: 'AAP, HealthyChildren', label: 'Correct names for body parts, and why',
    url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Sexual-Behaviors-Young-Children.aspx' },
  { org: 'Cochrane', label: 'School based abuse prevention, what it does and does not achieve',
    url: 'https://www.cochrane.org/evidence/CD004380_school-based-programmes-prevention-child-sexual-abuse' },
  { org: 'Stop It Now', label: 'The actual words to use with a child about their body',
    url: 'https://www.stopitnow.org/ohc-content/talking-to-children-and-teens' },
  { org: 'NCMEC KidSmartz', label: 'Surprises versus secrets, and the four rules for younger children',
    url: 'https://www.missingkids.org/education/kidsmartz' },
  { org: 'Darkness to Light', label: 'Five steps, and what the risk actually looks like',
    url: 'https://www.d2l.org/fall5steps/' },
  { org: 'Future of Sex Education', label: 'The national standards, and consent by grade',
    url: 'https://www.advocatesforyouth.org/wp-content/uploads/2020/03/NSES-2020-web.pdf' },
];

export const GROW_DISCLAIMER = 'Information, not medical advice. Ages and ranges are averages and '
  + 'your child is not an average. Anything that worries you is worth an appointment, and a '
  + 'pediatrician would far rather see a child who turned out to be fine.';

export default GROW_TITLE;

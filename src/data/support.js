/**
 * Ready Set Grow: The hard part
 * ==================================================================
 * Child protective services, somebody at home who frightens you, and
 * somebody who is targeting your child.
 *
 * WHY THIS EXISTS WHEN NO OTHER PARENTING APP HAS IT
 * Because it is uncomfortable, and because the parent who needs it is
 * not the parent the marketing is aimed at. A mother with a caseworker
 * at the door, or a partner who checks her phone, opens the same app
 * everybody else opens, and finds sleep charts. She then goes looking
 * on the open internet, where the first page is a law firm buying ads
 * on her worst day.
 *
 * THE FOUR RULES THIS FILE IS WRITTEN UNDER
 *
 * 1. NEVER TELL SOMEBODY WHAT TO DO. Every line here is written for a
 *    person who knows their own situation far better than this app
 *    ever will. Telling a frightened woman to leave is the single most
 *    common piece of advice given and it is given by people who will
 *    not be there at two in the morning. What helps is accurate
 *    information about risk, and the number of somebody who does this
 *    for a living. So this file gives facts and options and it never
 *    once says "you should".
 *
 * 2. SAY WHAT IS TRUE EVEN WHEN IT IS NOT REASSURING. Refusing a drug
 *    test can be used against you. Refusing entry can bring them back
 *    with a court order. Leaving is the most dangerous moment in an
 *    abusive relationship. A parent who acts on a comfortable half
 *    truth from this app is worse off than one who read nothing.
 *
 * 3. THE SCREEN ITSELF IS A RISK. Somebody reading this may be on a
 *    phone another person checks. So there is a way off it in one tap,
 *    and the app is honest that leaving a screen is not the same as
 *    leaving no trace, because a parent who believes she covered her
 *    tracks when she did not is in more danger than one who knows she
 *    did not.
 *
 * 4. NO SHAME ANYWHERE. Not for being investigated, not for staying,
 *    not for not having noticed sooner, not for being poor. Shame is
 *    the thing that stops a person calling, and the calling is the
 *    whole point of the page.
 *
 * WHAT IS CHECKED AND AGAINST WHAT
 * Every number and every claim in here was checked in September 2026
 * against the source listed at the bottom of its section. The
 * strangulation figure is from the Glass 2008 case control study, not
 * from an advocacy page quoting it. The child protection rights are
 * written as varying by state, because they do, and a parent acting on
 * another state's law is the worst thing this file could cause.
 */

/* ==================================================================
   THE SCREEN ITSELF
   ================================================================== */

export const SUP_TITLE = 'If something is happening at home';

export const SUP_SUB = 'Child protective services, somebody who frightens you, and somebody who is '
  + 'targeting your child. Written plainly, with a way off this screen in one tap.';

export const SUP_INTRO = 'Nothing you read here is recorded, reported, or shown to anybody. '
  + 'Opening this page does not put a flag on your account, because there is no such thing on your '
  + 'account. Read what you need and leave.';

export const SUP_TABS = [
  { id: 'safe', label: 'Reading it safely' },
  { id: 'dv', label: 'Somebody frightens you' },
  { id: 'cps', label: 'A caseworker is involved' },
  { id: 'traffick', label: 'Somebody targeting your child' },
];

/* ==================================================================
   THE WAY OUT
   ==================================================================
   WHAT THE BUTTON REALLY DOES, so that the copy can be exact.

   It replaces the current page with a weather site, using replace
   rather than a normal navigation, which means the Back button does
   not come back here. Before it goes it puts the app back on Home, so
   that reopening it later does not land on this screen in front of
   somebody.

   WHAT IT CANNOT DO, and the copy has to say all three.
   It cannot remove this page from the browser history. It cannot hide
   the app if it is sitting on the home screen. It cannot do anything
   about software somebody else installed on the phone on purpose.

   Half the value of a quick exit button is the escape and the other
   half is the honest paragraph next to it, because a person who thinks
   she covered her tracks and did not is more exposed than one who
   knows exactly where she stands.
   ================================================================== */

export const EXIT_BTN = 'Leave now';

export const EXIT_TITLE = 'The Leave now button';

export const EXIT_WHAT = [
  'The red button in the corner sends this phone straight to a weather page. It happens instantly '
  + 'and there is no pause and no are you sure.',
  'Pressing Back after it will not bring you back here. It also puts the app back on the Home '
  + 'screen, so if somebody opens Ready Set Grow later they do not land on this page.',
];

export const EXIT_CANNOT = {
  title: 'What it cannot do, and you should know this before you rely on it',
  items: [
    'It cannot erase this page from your browser history. Somebody who goes looking in your history '
    + 'can still see that this site was open.',
    'It cannot hide the app itself. If Ready Set Grow is on your home screen, it is on your home screen.',
    'It cannot do anything about tracking software that somebody installed on your phone on purpose. '
    + 'That kind of software records what you type and what you open before a browser ever sees it.',
  ],
};

export const EXIT_SAFER = {
  title: 'If somebody checks your phone',
  items: [
    'The safest place to read this is a device that person has never touched. A library computer, a '
    + 'friend’s phone, a computer at work or at a clinic.',
    'Private browsing keeps it out of that browser’s history on that device. It does not hide '
    + 'anything from software installed on the phone, and it does not hide anything from the person '
    + 'who pays the phone bill and can see the account.',
    'Clearing your whole browser history can itself be the thing that gets noticed, if somebody '
    + 'checks it regularly. An empty history where there used to be one is a signal.',
    'The National Domestic Violence Hotline will talk through phone safety with you, for free, at any '
    + 'hour, and they do this every day. 1-800-799-7233, or text START to 88788.',
  ],
};

/* ------------------------------------------------------------------
   THE APP AS A RISK

   The sharing feature is the reason this section exists. It was built
   so a mother and a father could both see their child, which is a good
   thing and is what most families want. It is also, in exactly the
   wrong household, a live feed of what one parent is doing all day.

   An app that offers sharing and does not say this out loud is being
   dishonest about its own product. So it is said out loud, with the
   way to check and the way to undo it, and with the warning that
   undoing it is visible to the other person, because somebody who
   revokes access without thinking about that may pay for it.
   ------------------------------------------------------------------ */
export const SUP_APP_RISK = {
  title: 'What this app itself can give away',
  body: [
    'This app lets you share a child with somebody else so you can both see the record. If you have '
    + 'done that with a person you are now worried about, they can see everything logged about that '
    + 'child, including when it was logged, which tells them roughly what you were doing and when.',
    'A shared account is worse than shared access. If you and that person sign in as the same '
    + 'account, they see all of it, including your own logs and your own notes.',
  ],
  check: [
    'Open the menu at the top of the screen and go to Sharing a child. Everybody who can see one of '
    + 'your children is listed there, along with which children they can see.',
    'Take it back removes their access immediately.',
    'It does not delete anything they already added, and it does not tell them in a message. They '
    + 'will notice the next time they open the app.',
  ],
  warn: 'Think about that last part before you do it. Somebody losing access without warning may ask '
    + 'why, and only you know whether that is a safe conversation to have. An advocate on the hotline '
    + 'can help you think through the order to do things in.',
  doesNot: [
    'This app does not track where you are. There is no location in it at all, on any screen, '
    + 'including the night sky.',
    'It does not share anything you write about yourself, your own logs, your memories or your check '
    + 'ins with anybody you share a child with.',
    'Nothing you read on this page is logged.',
  ],
};

/* ==================================================================
   SOMEBODY FRIGHTENS YOU
   ==================================================================
   ORDER MATTERS MORE HERE THAN ANYWHERE ELSE IN THE APP.

   Naming it first, before any advice, because most people in it do not
   use the word and will close a page that opens with the word.

   Then the risk facts, because that is the part she cannot get from a
   friend and the part that actually changes decisions.

   Then the children, because for a lot of mothers that is the only
   reason they would move at all, and because the fear of losing them
   to child protection is the single biggest reason for not calling.
   That fear is real and it is addressed rather than waved away.

   Advice about leaving comes last and comes with the truth attached,
   which is that leaving is when people get killed. Everything before
   it is useful whether she stays or goes.
   ================================================================== */

export const DV_HEAD = 'It does not have to have a name for it to count.';

export const DV_INTRO = [
  'Most people living with this do not use the word abuse about their own house. They say he has a '
  + 'temper, or we fight a lot, or it is only when he drinks. The word does not matter. What matters '
  + 'is whether you change what you do because of what he might do.',
  'You do not have to decide anything today. You do not have to leave, you do not have to call the '
  + 'police, and you do not have to tell anybody. Knowing accurately where you stand is worth '
  + 'something on its own.',
];

export const DV_LOOKS_LIKE = {
  title: 'What it looks like when nobody is being hit',
  intro: 'Physical violence is the part everybody recognises. These are the parts that do as much '
    + 'damage and rarely get counted.',
  items: [
    'Money. You have to ask for it, or account for it, or you are not allowed to work, or the accounts '
    + 'are in one name.',
    'Your phone. It gets checked, or you get asked who that was, or there is an app on it you did not put there.',
    'Who you see. Your family are a problem, your friends are a problem, and there are fewer of them '
    + 'than there used to be.',
    'The children as a lever. Threats to take them, to call child protective services, to tell a court '
    + 'you are unfit.',
    'Immigration or money as a lever. Threats to have you reported, deported, or cut off.',
    'Pregnancy. Pressure to have a baby or not to, sabotaged birth control, or violence that started '
    + 'or got worse while you were pregnant.',
    'Sex you did not agree to. Inside a marriage, it is still that.',
    'The pets. Hurting them, or threatening to.',
    'The feeling itself. You watch his face when he comes in to work out what kind of evening it will be.',
  ],
};

/* The strangulation fact is the single most useful thing in this file.
   Written with the actual study behind it rather than as a slogan,
   because a woman deciding what to do with her life deserves to know
   where the number comes from. */
export const DV_STRANGLE = {
  title: 'If his hands have ever been on your neck',
  body: [
    'This is the one fact worth stopping for. A woman whose partner has strangled her, even once, '
    + 'even briefly, even with no marks left, is around seven times more likely to be killed by him '
    + 'than a woman in an abusive relationship where that has never happened.',
    'That is from a study of nearly a thousand cases across eleven cities, comparing women who were '
    + 'killed by a partner with women who were abused and not killed. Strangulation was one of the '
    + 'strongest single predictors in it.',
    'It does not mean it will happen. It means this is not the same as the rest of it, and anybody '
    + 'working in this field treats it as the line it is.',
  ],
  medical: 'There is a medical part too. Strangulation can cause injury that shows up hours or days '
    + 'later, including swelling, clots and stroke, with nothing visible on the outside at the time. '
    + 'Trouble swallowing, a changed voice, dizziness, or tiny red spots in the eyes or on the face '
    + 'are all reasons to be seen the same day.',
};

export const DV_RISK = {
  title: 'The other things that raise the risk, by the research rather than by feel',
  intro: 'None of these mean something will happen and having none of them does not mean you are '
    + 'safe. This is the list that people who assess danger for a living actually use.',
  items: [
    'He has threatened to kill you, or the children, or himself. Prior threats to kill are one of the '
    + 'strongest predictors there is.',
    'There is a gun in the house, or he can get one.',
    'The violence has been getting worse, or more often, over the last year.',
    'He has said something like you will never leave me, or if I cannot have you nobody will.',
    'He follows you, checks on you constantly, or turns up where you did not tell him you would be.',
    'He is violently jealous, or accuses you of things that are not happening.',
    'He hurt you while you were pregnant.',
    'He has forced sex on you.',
    'He is drinking heavily or using, or he is depressed and talking about killing himself.',
    'You have recently left, or he thinks you are about to.',
  ],
  note: 'If several of those are true, say so on the first call you make. It changes what an advocate '
    + 'will suggest and how fast.',
};

/* The children, and the fear that stops the call. */
export const DV_CHILDREN = {
  title: 'What about the children',
  body: [
    'Children in a house like this know. Not the details, but the weather. They get very good at '
    + 'reading a room, and that skill costs them later, in sleep, in school, in how they expect to be '
    + 'treated by people who say they love them.',
    'None of that is your fault and none of it is a reason to be told what to do. You are the one '
    + 'holding the house together, not the one breaking it.',
  ],
  cpsFear: {
    title: 'The part nobody says out loud',
    body: [
      'A lot of mothers do not call anybody because they are frightened that the moment they do, child '
      + 'protective services takes the children. That fear is not irrational. In many states a child '
      + 'witnessing violence can generate a report, and mothers have been investigated for failing to '
      + 'protect children from somebody who was hurting them too.',
      'What is also true: domestic violence advocates deal with this every single day and know how it '
      + 'works in your state. A hotline advocate is not a mandated reporter of your situation in the '
      + 'way a doctor or a teacher is, and calling them does not start a case. You can call and ask '
      + 'that exact question before you say anything else.',
    ],
  },
};

export const DV_LEAVING = {
  title: 'If you are thinking about leaving',
  head: 'The most dangerous time in a relationship like this is the period around leaving and just '
    + 'after. That is not a reason not to go. It is the reason to not announce it, and to do it with '
    + 'somebody who plans these for a living.',
  items: [
    'Do not tell him you are thinking about it, and do not leave anything written where it can be found.',
    'Call an advocate before you move anything. 1-800-799-7233, or text START to 88788. They will '
    + 'build a plan around your actual house, your actual work, and your actual custody situation.',
    'Ask them about a protective order and about what it does and does not do, before you decide '
    + 'whether you want one.',
    'Ask about your phone before you use it to plan anything.',
  ],
};

export const DV_BAG = {
  title: 'What people wish they had taken',
  intro: 'If you can get these into one bag at a friend’s house, or a locker, or your car boot, '
    + 'ahead of time, do. If you cannot, go anyway. All of it can be replaced.',
  items: [
    'Identification for you and every child. Birth certificates, social security cards, passports, '
    + 'immigration papers, driving licence.',
    'Any medication, and the prescriptions.',
    'Court papers. Custody orders, protective orders, divorce papers.',
    'Some cash, in notes, not a card he can see the statement for.',
    'Phone and charger, and a written list of numbers in case the phone has to be left behind.',
    'Keys. House, car, work, safe deposit.',
    'One thing each child will not leave without.',
    'Photographs and documents that prove what has happened, kept somewhere he cannot reach.',
  ],
};

export const DV_STAYING = {
  title: 'If you are not leaving, and plenty of people are not',
  intro: 'Staying is not a failure and it is very often the more rational choice, for money, for '
    + 'immigration, for the children, or because leaving is the dangerous part. These are worth doing '
    + 'either way.',
  items: [
    'Work out which room in the house has a way out and no weapons in it, and which one does not. The '
    + 'kitchen and the bathroom are the two worst.',
    'Agree a word or a message with one person who will call for help without asking questions.',
    'Teach the children how to call 911, where to go, and that it is never their job to get in the '
    + 'middle of it.',
    'Keep your own record. Dates, what happened, photographs, in somewhere he has no access to, such '
    + 'as an email account he does not know about.',
    'Get seen by a doctor after an injury, even a small one, and say honestly how it happened. It is '
    + 'medical care first and a record second.',
  ],
};

export const DV_IF_ITS_YOU = {
  title: 'If you are the one they are frightened of',
  body: 'If you have read this and recognised yourself rather than your partner, that recognition is '
    + 'rarer and more useful than you think, and it is not too late. The same hotline number takes '
    + 'those calls and will point you at a proper intervention programme in your area. Anger management '
    + 'on its own is not the right programme for this and a good advocate will tell you why. Doing it '
    + 'before a court orders you to is the difference between keeping a family and losing one.',
};

export const DV_LINES = [
  { name: 'National Domestic Violence Hotline',
    contact: '1-800-799-7233',
    detail: 'Free, 24 hours, over 200 languages. Text START to 88788, or chat on their site. They do '
      + 'safety planning, not lectures.',
    url: 'https://www.thehotline.org/' },
  { name: 'Deaf Hotline, video phone',
    contact: '1-855-812-1001',
    detail: 'Answered in American Sign Language by Deaf advocates. Video, email or chat.',
    url: 'https://thedeafhotline.org/' },
  { name: 'StrongHearts Native Helpline',
    contact: '1-844-762-8483',
    detail: 'For Native and Alaska Native people, culturally appropriate, 24 hours.',
    url: 'https://strongheartshelpline.org/' },
  { name: 'Love Is Respect, for teenagers',
    contact: '1-866-331-9474',
    detail: 'If the person you are worried about is your teenage child in their own relationship. Text '
      + 'LOVEIS to 22522.',
    url: 'https://www.loveisrespect.org/' },
  { name: 'RAINN, sexual assault',
    contact: '1-800-656-4673',
    detail: 'Including inside a marriage or a relationship, and including a long time ago.',
    url: 'https://rainn.org/' },
];

export const DV_SOURCES = [
  { org: 'Glass et al 2008', label: 'Non fatal strangulation as a risk factor for homicide, Journal of Emergency Medicine',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18024383/' },
  { org: 'Campbell et al 2003', label: 'Risk factors for femicide in abusive relationships, American Journal of Public Health',
    url: 'https://ajph.aphapublications.org/doi/10.2105/AJPH.93.7.1089' },
  { org: 'The Hotline', label: 'Safety planning, phone safety, and what an advocate actually does',
    url: 'https://www.thehotline.org/plan-for-safety/' },
  { org: 'WomensLaw', label: 'The Danger Assessment, and state by state law',
    url: 'https://www.womenslaw.org/about-abuse/am-i-being-abused/danger-assessment' },
];

/* ==================================================================
   A CASEWORKER IS INVOLVED
   ==================================================================
   THE HARDEST SECTION TO WRITE HONESTLY.

   Two things are true at once and most writing on this picks one.

   The first is that child protection exists because children are hurt
   and sometimes removal is the thing that saves them.

   The second is that being investigated is terrifying, that most
   investigations end with nothing found, and that poverty gets
   mistaken for neglect at a rate that is not seriously disputed by
   anybody who looks at the figures.

   A parent standing in a doorway needs the second one. She needs to
   know her rights, that exercising them has costs, and that this
   varies enormously by state. Every rights line below carries its own
   catch, because a rights list without the catches gets people hurt.
   ================================================================== */

export const CPS_HEAD = 'Somebody knocking on your door does not mean you did something.';

export const CPS_INTRO = [
  'An investigation starts with a report, and a report can come from anybody. A neighbour, an ex, a '
  + 'school nurse, a hospital, somebody who is angry with you. It is not a finding and it is not a '
  + 'judgement about you.',
  'Most investigations end without anything being substantiated, and the overwhelming majority end '
  + 'with the child staying exactly where they are. That is worth holding on to while you deal with it.',
];

export const CPS_POVERTY = {
  title: 'Being broke is not neglect, and you may have to prove it anyway',
  body: [
    'A thin fridge, a messy house, an eviction, a car that does not run, all of it gets reported as '
    + 'neglect, and the numbers show it. Children in low income households are recorded at more than '
    + 'seven times the rate for neglect and more than three times the rate for abuse, and a large part '
    + 'of that gap is poverty being read as a parenting failure.',
    'That does not make the visit go away. What it means is that the thing you are ashamed of is very '
    + 'often the thing the law does not actually count, and that saying plainly what you need, rather '
    + 'than hiding it, works out better than it feels like it will. Agencies have money and vouchers '
    + 'and programmes that they can hand out, and a parent asking for help is a different file from a '
    + 'parent avoiding them.',
  ],
};

export const CPS_RIGHTS = {
  title: 'What you can do, and what it costs',
  intro: 'These are real rights and every one of them has a catch. Both halves are here because the '
    + 'half without the catch is how people make things worse.',
  items: [
    { right: 'You do not have to let them into your home.',
      catch: 'Not without a court order signed by a judge, or a genuine emergency. You can talk on the '
        + 'doorstep or outside. The catch is that refusing can read as having something to hide, and '
        + 'they can come back with a court order or with police. Ask what happens if you say no, and '
        + 'write down the answer.' },
    { right: 'You can decline to answer questions.',
      catch: 'You are not required to explain yourself. The catch is real: this is not only a child '
        + 'protection case. What you say can be handed to the police and used in a criminal case, and '
        + 'people talk themselves into charges trying to be helpful.' },
    { right: 'You can ask what you are actually accused of.',
      catch: 'Ask for the allegation, the caseworker’s full name, their identification, their '
        + 'supervisor’s name, and a card. They do not always volunteer the allegation and you are '
        + 'entitled to know what it is.' },
    { right: 'You can say no to a drug test without a court order.',
      catch: 'In most places they cannot make you. The catch is that refusal is routinely treated as '
        + 'though it were a positive result, and it can end up in a filing that way.' },
    { right: 'A safety plan is usually voluntary.',
      catch: 'Read it before you sign it. Ask directly whether it is voluntary and what happens if you '
        + 'refuse. The catch is that refusing one can be the thing that triggers a removal, so this is '
        + 'the moment to have a lawyer on the phone if you possibly can.' },
    { right: 'You can have a lawyer.',
      catch: 'In most states you are only given one once a case is filed in court, which is after the '
        + 'stage where a lawyer would have helped most. Legal aid, a family defence office, or a public '
        + 'defender’s office may take a call earlier. Ask.' },
    { right: 'You may be able to record the conversation.',
      catch: 'Some states allow it if one person knows, others require everybody to agree. Check yours '
        + 'before you do it. Either way you can take notes in front of them, and you should.' },
  ],
  varies: 'All of this varies by state, in places quite a lot. Texas, for example, requires a court '
    + 'order or your consent for them to enter, and a court order to remove a child except in an '
    + 'immediate emergency. Look up your own state, or ask a legal aid office, before you rely on any '
    + 'of it.',
};

export const CPS_HELPS = {
  title: 'What tends to help',
  items: [
    'Being there. Answer the door, answer the phone, turn up to everything, on time.',
    'Being calm even when it is outrageous. Anger at the door goes in the file and it goes in badly.',
    'Keeping your own record from the first day. Every date, every name, every visit, what was said, '
    + 'what you were asked to do, and what you did about it.',
    'Doing the things you agreed to, and being able to show it. Certificates, appointment slips, '
    + 'receipts, messages.',
    'Getting the child seen by your own doctor if there is any medical question at all, and getting it '
    + 'in writing.',
    'Lining up people who will speak for you. A teacher, a pastor, a coach, a neighbour, the doctor.',
  ],
};

export const CPS_HURTS = {
  title: 'What tends to make it worse',
  items: [
    'Disappearing, not answering, or moving the child somewhere while it is open.',
    'Lying about something small. It is almost never the thing itself that sinks a case, it is being '
    + 'caught out on a detail.',
    'Letting the person who was reported come and go as though nothing happened, if the report was '
    + 'about somebody else in the house.',
    'Signing anything without reading it because you want them to leave.',
    'Talking about the case on social media.',
  ],
};

export const CPS_REMOVED = {
  title: 'If a child has already been taken',
  items: [
    'Ask for the paperwork in your hand, and ask for the reason in writing.',
    'Ask when the first hearing is. In most states there is one within a few days and you are entitled '
    + 'to be at it. Go to every single one.',
    'Say the names of every relative and family friend who could take the child, straight away and in '
    + 'writing. Placement with somebody known to the child is usually preferred and it moves fast.',
    'Ask about visits, ask for them in writing, and never miss one, even a bad one, even a short one.',
    'Get a lawyer now. At this stage one is usually appointed if you cannot pay, and you ask the court '
    + 'for it at the first hearing.',
  ],
  note: 'A case being opened is not the end of anything. Most children who are removed go home. The '
    + 'parents it works out for are, over and over, the ones who turned up to everything.',
};

export const CPS_WORRIED = {
  title: 'If you are the one who is worried about a child',
  body: 'If this is about somebody else’s child rather than your own, Childhelp will talk it '
    + 'through with you before you do anything, including whether what you are seeing is reportable at '
    + 'all. You can call anonymously and you do not have to be sure.',
};

export const CPS_LINES = [
  { name: 'Childhelp National Child Abuse Hotline',
    contact: '1-800-422-4453',
    detail: 'Counsellors, 24 hours, in 170 languages. For parents under investigation as well as for '
      + 'people reporting. Call or text.',
    url: 'https://www.childhelphotline.org/' },
  { name: 'Legal aid near you',
    contact: 'lsc.gov/find-legal-aid',
    detail: 'Free legal help by income. Ask specifically for family defence or dependency.',
    url: 'https://www.lsc.gov/about-lsc/what-legal-aid/get-legal-help' },
  { name: '211',
    contact: '211',
    detail: 'Housing, food, utility help, childcare. The practical things that a case is often really '
      + 'about. Free, and they know what is in your county.',
    url: 'https://www.211.org/' },
];

export const CPS_SOURCES = [
  { org: 'American Bar Association', label: 'Poverty is not neglect, and how often the two get confused',
    url: 'https://www.americanbar.org/groups/public_interest/child_law/resources/child_law_practiceonline/january---december-2017/confronting-the-racial-pay-gap/' },
  { org: 'Child Welfare Information Gateway', label: 'How an investigation works, state by state',
    url: 'https://www.childwelfare.gov/topics/responding/iia/' },
  { org: 'Texas DFPS', label: 'What Texas investigators can and cannot do',
    url: 'https://www.dfps.texas.gov/Child_Protection/Investigations/' },
  { org: 'Legal Services Corporation', label: 'Finding free legal help by income and area',
    url: 'https://www.lsc.gov/about-lsc/what-legal-aid/get-legal-help' },
];

/* ==================================================================
   SOMEBODY IS TARGETING YOUR CHILD
   ==================================================================
   THE MYTH HAS TO GO FIRST.

   Every parent has seen the van in the parking lot post. Almost
   nothing works that way, and the myth actively hurts, because a
   mother watching the parking lot is not watching the twenty six year
   old who has been in her fifteen year old's messages for four months.

   The realistic shape in 2026 is a phone, a person the child already
   knows or has been talking to for weeks, and money. Sextortion of
   teenage boys is the fastest growing version of it and most parents
   have never heard of it, which is why it gets its own block.
   ================================================================== */

export const TRAF_HEAD = 'It is almost never a van in a parking lot.';

export const TRAF_INTRO = [
  'The kidnapping story is the one everybody knows and it is the rarest version by a long way. The '
  + 'real thing usually starts with somebody the child already knows, or somebody who has spent weeks '
  + 'being kind to them in a game or in their messages.',
  'There is no evidence that this comes from one kind of person. The people doing it are family '
  + 'members, boyfriends, friends of friends, and strangers online, in that rough order of how often.',
];

export const TRAF_SEXTORTION = {
  title: 'The one most parents have not heard of',
  body: [
    'Somebody, usually pretending to be a girl the same age, talks to your child for days or weeks and '
    + 'gets one photograph out of them. Then it turns, in a single message. Pay, or send more, or this '
    + 'goes to everybody you know.',
    'It moves fast, sometimes within an hour, and it is aimed heavily at teenage boys, which is the '
    + 'group nobody is watching for it. Children have killed themselves over this within hours of it '
    + 'starting, believing there was no way out.',
  ],
  rules: {
    title: 'If it is happening right now',
    items: [
      'It is not their fault, and say that first, out loud, before anything else. They are being '
      + 'blackmailed by an adult who does this professionally.',
      'Do not pay. Paying almost never stops it and it tells them there is money here.',
      'Do not send anything else.',
      'Stop replying, but do not delete the messages or the account. That is the evidence.',
      'Screenshot everything, including the username and the profile.',
      'Report it to the platform, and report it at report.cybertip.org or by calling 1-800-843-5678.',
      'If the image is already out there and your child is under 18, takeitdown.ncmec.org can get it '
      + 'taken down from the major platforms, for free, without you uploading the image anywhere.',
    ],
  },
};

export const TRAF_SIGNS = {
  title: 'What to actually watch for',
  intro: 'Any one of these on its own is probably nothing. Several of them together, appearing over a '
    + 'few weeks, is worth a quiet conversation.',
  items: [
    'A new boyfriend, girlfriend or friend who is noticeably older, and who they will not talk about '
    + 'or let you meet.',
    'Money, a phone, clothes, nails or a hotel that you did not pay for and they cannot explain.',
    'A second phone, or an app you have not seen, or accounts you did not know about.',
    'Going missing overnight, or running away, even once. This is the biggest single flag there is.',
    'Being coached. Answers that sound rehearsed, or somebody else answering for them.',
    'A sudden drop out of everything they used to do, and out of the friends they used to have.',
    'A tattoo or a mark they are strange about, particularly a name.',
    'Talk of a job, an agency, a modelling contact, or somebody who is going to make them famous.',
    'Injuries, exhaustion, or a change in how they talk about their own body.',
  ],
};

export const TRAF_IF_ALREADY = {
  title: 'If you think they are already in it',
  items: [
    'They will probably defend the person. That is not stupidity and it is not disloyalty to you, it '
    + 'is how this works, and the person has usually spent months making sure of it.',
    'Do not make them choose between you and that person, because you will lose, and then you will '
    + 'have lost the only line into them that still exists.',
    'Keep the door open no matter what. The single most useful sentence is that they can come to you '
    + 'at any hour, from anywhere, having done anything, and you will come and get them and there will '
    + 'be no lecture.',
    'Call 1-888-373-7888 before you confront anybody. They will tell you what confronting it will '
    + 'likely cause and how to do it without the child being moved somewhere you cannot find them.',
    'If your child is under 18 and anybody is selling them for sex, they are legally a victim, full '
    + 'stop, whether or not anybody forced them and whether or not money went to a third person.',
  ],
};

export const TRAF_PREVENT = {
  title: 'The conversation that actually prevents it',
  intro: 'Not a lecture about strangers. One promise, repeated until they believe it.',
  items: [
    'You will never be in trouble for telling me. Not about a photograph, not about who you were '
    + 'talking to, not about where you were or what you took.',
    'If anybody asks you for a picture, that is an adult problem and not yours, and it stops the '
    + 'second you tell me.',
    'Anybody who says keep this between us is the person you tell me about.',
    'Anybody who is being very generous very fast wants something.',
    'If somebody says they already have a picture, they are almost always lying, and either way there '
    + 'is a way out and you are not the first.',
  ],
  note: 'Say it at seven and keep saying it at fifteen. The children who tell somebody are almost '
    + 'always the ones who were told in advance that they would not get in trouble for it.',
};

export const TRAF_LINES = [
  { name: 'National Human Trafficking Hotline',
    contact: '1-888-373-7888',
    detail: 'Free, 24 hours, over 200 languages, anonymous. Text 233733. They advise parents, not only '
      + 'victims.',
    url: 'https://humantraffickinghotline.org/' },
  { name: 'NCMEC, missing and exploited children',
    contact: '1-800-843-5678',
    detail: 'For sextortion, images of your child online, and a missing child. Report at '
      + 'report.cybertip.org.',
    url: 'https://www.missingkids.org/' },
  { name: 'Take It Down',
    contact: 'takeitdown.ncmec.org',
    detail: 'Free, for anybody who was under 18 in the image. Gets it removed from the major platforms '
      + 'without you sending the image to anybody.',
    url: 'https://takeitdown.ncmec.org/' },
  { name: 'National Runaway Safeline',
    contact: '1-800-786-2929',
    detail: 'If they have gone, or are about to. They also pass messages both ways without giving away '
      + 'where anybody is.',
    url: 'https://www.1800runaway.org/' },
];

export const TRAF_SOURCES = [
  { org: 'National Human Trafficking Hotline', label: 'Recognising it, and who is actually doing it',
    url: 'https://humantraffickinghotline.org/en/human-trafficking/recognizing-signs' },
  { org: 'NCMEC', label: 'Sextortion, what it looks like and what to do in the first hour',
    url: 'https://www.missingkids.org/sextortion' },
  { org: 'FBI', label: 'Public warnings on financially motivated sextortion of teenagers',
    url: 'https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/sextortion' },
  { org: 'Polaris Project', label: 'What trafficking in the United States actually looks like',
    url: 'https://polarisproject.org/' },
];

/* ==================================================================
   THE FOOTER THAT GOES ON EVERY TAB
   ================================================================== */

export const SUP_DISCLAIMER = 'This is information, not legal advice and not a substitute for an '
  + 'advocate or a lawyer who knows your state. Every number on this page was checked in September 2026.';

export const SUP_911 = 'If somebody is in danger right now, call 911. If you cannot speak, you can '
  + 'text 911 in most of the country, and in many places you can call and stay silent and press numbers '
  + 'when the operator asks.';

/* Which tab opens first. Somebody arriving here has already decided
   what they came for, except for one case: the first visit, where the
   safety of reading it at all comes before anything they might read. */
export function supportFirstTab(seenBefore) {
  return seenBefore ? 'dv' : 'safe';
}

export default SUP_TITLE;

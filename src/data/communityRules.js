/**
 * Ready Set Grow: The Community Rules, And What Happens When One Breaks
 * ------------------------------------------------------------------
 * Her ask: "I want forums that people can post in or start their own.
 * It should flag things like Facebook does and remove things and let
 * them know why etc."
 *
 * THE LET THEM KNOW WHY PART IS THE WHOLE THING. A post vanishing with
 * no explanation is how a parent decides the app hates them and leaves.
 * So every action here carries a notice that names the rule, names the
 * specific thing that tripped it, assumes they meant no harm, and ends
 * with a way to appeal. The notices are written out in full rather
 * than generated, and they fill in which forum and which rule.
 *
 * THE 4 ACTIONS, AND WHY THERE ARE 4 RATHER THAN 2
 *   remove   taken down at once. Reserved for the handful of things
 *            that can hurt a baby while they sit there, plus targeted
 *            harassment and scams. Nothing else.
 *   hold     hidden until a person reads it. The default for anything
 *            ambiguous, because holding a good post for a day is a
 *            much smaller harm than removing it.
 *   warn     stays up, the poster hears about it.
 *   support  STAYS UP and the poster is shown help. This is the one
 *            most apps get wrong. A parent writing about their own
 *            postpartum depression, their intrusive thoughts, or being
 *            frightened of their own temper has not broken a rule.
 *            They have said the hardest thing out loud in the only
 *            place they felt able to, and taking it down would be a
 *            cruelty. It stays, and somebody meets them.
 *
 * WHAT GETS REMOVED ON SIGHT is deliberately short, and it is the list
 * of things that can actually kill an infant: chlorine dioxide sold as
 * a cure, homemade formula recipes, raw milk for a baby. Everything
 * else that looks dangerous, including unsafe sleep advice and telling
 * somebody to skip vitamin K, is HELD rather than removed, because the
 * person saying it is usually a frightened parent repeating something
 * rather than somebody doing harm, and a human should answer them.
 *
 * ADULTS ONLY, and that is COPPA rather than snobbery. A photo or a
 * post from somebody under 13 is personal information collected from a
 * child, and the only safe answer for a 1 person team is not to have
 * any.
 *
 * ON MANDATORY REPORTING the wording is deliberately careful and
 * should not be loosened without a lawyer. Most states do not make an
 * app operator a mandated reporter, every state lets anybody report,
 * and promising more than can be delivered would be worse than
 * promising nothing.
 */

export const CR_INTRO = [
  'Welcome to the Ready Set Grow community. This is a place for parents and caregivers to ask '
    + 'the questions they are too tired to google, to say the thing they cannot say out loud yet, '
    + 'and to hear from somebody who has been awake at the same hour for the same reason. You can '
    + 'post in any forum here, and you can start your own if the room you need does not exist '
    + 'yet.',
  'Here is how moderation works, so nothing feels like a mystery. Some posts are checked '
    + 'automatically the moment you hit post, because this app is run by a very small team and a '
    + 'real person cannot read everything the minute it goes up. If something happens to your '
    + 'post, you will always be told what happened, which rule it touched, and what in the post '
    + 'triggered it, and you will always have a way to ask a human to look again. Automated '
    + 'checks get things wrong sometimes. When that happens it is our mistake to fix, not yours '
    + 'to apologize for.',
];

export const CR_RULES = [
  {
    id: 'beKind',
    title: 'Be kind, especially at 3am',
    body: 'Assume the person posting is doing their best with less sleep than they need. You can '
      + 'tell somebody their plan worries you without telling them they are a bad parent. If a '
      + 'reply would sting to receive on your worst day, write it differently or do not send it.',
    why: 'Most people post here when they are already at the edge, and one cruel reply is enough '
      + 'to make somebody stop asking for help.',
  },
  {
    id: 'notMedicalFact',
    title: 'Share your experience, not a diagnosis',
    body: 'Tell us what happened with your baby and what your doctor or midwife said. Please do not '
      + 'tell another parent what their child has, what to stop giving them, or what dose to use, '
      + 'even if you are a nurse or a doctor in real life. Say "this is what worked for us, ask '
      + 'your pediatrician" and you are inside the rule.',
    why: 'A confident wrong answer from a stranger can delay the care a child actually needs.',
  },
  {
    id: 'dangerousAdvice',
    title: 'Some advice is not allowed here at all',
    body: 'A short list of things we remove no matter how kindly they are meant, because they have '
      + 'hurt and killed babies: Miracle Mineral Solution, MMS, or any chlorine dioxide or bleach '
      + 'protocol given to a child, homemade infant formula recipes or diluting formula to '
      + 'stretch it, raw unpasteurized milk for a baby or toddler, and telling another parent to '
      + 'skip the vitamin K shot at birth. Unsafe sleep setups passed on as safe, such as '
      + 'inclined sleepers, loose blankets, pillows, bumpers, or sleep positioners, get held for '
      + 'review too. You can absolutely talk about your own choices and your own fears here, and '
      + 'you can ask questions about any of this.',
    why: 'These are the specific posts that can end a baby\'s life, and no amount of good intent '
      + 'changes that.',
  },
  {
    id: 'noShaming',
    title: 'Every feeding, birth and parenting choice is welcome',
    body: 'Breast, bottle, formula, combo, donor milk, tube. Home birth, hospital, cesarean, '
      + 'epidural, unmedicated, surrogacy, adoption. Cosleeping families, crib families, sleep '
      + 'training families, never sleep training families. You can describe what you chose and '
      + 'why you love it without placing anybody else\'s choice below yours.',
    why: 'Shame makes parents hide what they are actually doing, and a parent who is hiding cannot '
      + 'be helped.',
  },
  {
    id: 'disagreeWell',
    title: 'Disagree about the topic, not the person',
    body: 'Vaccines, screen time, sleep training, discipline, daycare, circumcision. You are '
      + 'allowed to hold a position and say it plainly. You are not allowed to make a thread '
      + 'about a person who disagrees with you, follow them into other forums, or organize '
      + 'replies against them.',
    why: 'The hard topics are exactly the ones parents need to talk through, and they only stay '
      + 'possible if nobody gets hunted for an opinion.',
  },
  {
    id: 'otherPeoplesKids',
    title: 'Only post photos of your own children',
    body: 'No photos of your friend\'s baby, your sister\'s toddler, your daycare class, a '
      + 'stranger\'s child at the park, or a group shot with other people\'s kids in it. If you '
      + 'want to show a rash or a latch or a sleep setup, crop faces out or describe it in words, '
      + 'which honestly works just as well for most questions. Never post a photo of a child '
      + 'alongside their full name, school, or neighborhood.',
    why: 'A child cannot consent to being on the internet, and the parent who did not post them '
      + 'never agreed either.',
  },
  {
    id: 'adultsOnly',
    title: 'You have to be 18 or older to post',
    body: 'This community is for adults who are parenting or expecting. If you are under 18, please '
      + 'do not create an account or post here, and if we learn an account belongs to somebody '
      + 'under 18 we will close it and delete what it posted.',
    why: 'We are not set up to protect minors\' privacy the way the law requires, so the honest '
      + 'answer is to keep this an adult space.',
  },
  {
    id: 'noSelling',
    title: 'This is not a marketplace',
    body: 'Please do not post your shop, your affiliate links, your coaching packages, your '
      + 'supplement line, or your downline recruiting pitch. If somebody asks what carrier you '
      + 'liked, naming the brand you use is fine and normal. The difference is whether you are '
      + 'answering a parent or advertising to a room.',
    why: 'The moment a forum becomes a sales floor, parents stop trusting that the advice they get '
      + 'is actually about their baby.',
  },
  {
    id: 'noTargeting',
    title: 'Do not make a post about one specific person',
    body: 'That includes your ex, your mother in law, your child\'s teacher, your old doctor, and '
      + 'another member here, if the post names them or makes them identifiable. You can tell the '
      + 'story and ask for help, which is often the real reason you want to post anyway, without '
      + 'the name, the photo, the clinic, or the screenshot. Calling for others to contact, '
      + 'review bomb, or report a person is never allowed.',
    why: 'Once a named person can be found, a vent becomes a campaign, and real people get hurt '
      + 'offline.',
  },
  {
    id: 'keepItPrivate',
    title: 'What gets shared here stays here',
    body: 'Do not screenshot posts or comments and put them somewhere else, and do not repeat '
      + 'somebody\'s story outside this app with details that could identify them. Sensitive '
      + 'forums such as loss, mental health and coparenting are closed to search and screenshots '
      + 'are grounds for removal from the community.',
    why: 'People only tell the truth here if they can be reasonably sure it will not follow them '
      + 'home.',
  },
  {
    id: 'emergencies',
    title: 'A forum is slower than an emergency',
    body: 'If a child is struggling to breathe, is limp or unresponsive, had a fall or a head '
      + 'injury, or something in your gut says now, call 911 or your local emergency number and '
      + 'go. Post afterward if you want company. Nobody here will be annoyed that you called '
      + 'first.',
    why: 'Waiting on replies has cost families time they could not get back.',
  },
];

/* The automated pass. Ordered worst first, so a post that trips more
   than one gets the most serious answer rather than the first match. */
export const CR_FLAGS = [
  {
    id: 'vaccineDebate',
    action: 'hold',
    what: 'The post argues for or against vaccines, posts studies at somebody, or tells another '
      + 'parent what to do about their own child\'s shots. Saying what happened at your own '
      + 'appointment, asking what to expect, or saying you are nervous is not this.',
    why: 'The argument never changes anybody\'s mind and it reliably ends the room for everybody '
      + 'else. Held rather than removed, because the line between asking and arguing is a judgment '
      + 'a person should make.',
  },
  {
    id: 'lethalAdvice',
    action: 'remove',
    what: 'The post gives another person instructions involving Miracle Mineral Solution, MMS, '
      + 'chlorine dioxide or bleach for a child, a homemade infant formula recipe with '
      + 'measurements, directions for diluting formula to make it last, or feeding raw '
      + 'unpasteurized milk to a baby or toddler.',
    why: 'These cause hospitalizations and deaths in infants, and holding them for review means '
      + 'they can be read and acted on in the meantime.',
  },
  {
    id: 'targetedHarassment',
    action: 'remove',
    what: 'The post or comment is aimed at a specific member with insults, slurs, repeated unwanted '
      + 'replies, threats, sexual comments, or a call for others to go after them.',
    why: 'Leaving this visible even for an hour tells the person being targeted that this is a '
      + 'place where that is tolerated.',
  },
  {
    id: 'spamAndScams',
    action: 'remove',
    what: 'The post is posted many times across forums, is mostly links, offers a giveaway or free '
      + 'product in exchange for contact details, impersonates the app or a brand, or matches '
      + 'known scam patterns such as formula resale or fake funding programs.',
    why: 'Scams here target people who are short on money and sleep, and formula resale scams in '
      + 'particular have left families without food for a baby.',
  },
  {
    id: 'crisisLanguage',
    action: 'support',
    what: 'The post contains language about wanting to die, not being here anymore, hurting '
      + 'yourself, or feeling like your family would be better off without you.',
    why: 'A parent reaching out at the lowest moment of their life must never watch their words '
      + 'disappear, so the post stays and crisis support appears alongside it.',
  },
  {
    id: 'postpartumStruggle',
    action: 'support',
    what: 'The post describes postpartum depression, postpartum anxiety or rage, intrusive '
      + 'thoughts, feeling nothing for the baby, or regretting becoming a parent.',
    why: 'This is one of the most important things a parent can say out loud, it is extremely '
      + 'common, and removing it would be the worst possible response.',
  },
  {
    id: 'abuseDisclosure',
    action: 'support',
    what: 'The post says a child is being hurt, hit, neglected, or is not safe at home or in '
      + 'somebody\'s care, including when the poster is describing their own child or their own '
      + 'fear about their own temper.',
    why: 'The post stays up because the person is asking for help, and they are shown the child '
      + 'abuse hotline and crisis numbers immediately while a human is alerted.',
  },
  {
    id: 'unsafeSleepAdvice',
    action: 'hold',
    what: 'The post tells another parent that an unsafe sleep setup is safe, such as an inclined '
      + 'sleeper or lounger, a pillow, quilt, blanket or bumper in the crib, sleep positioners, '
      + 'or stomach sleeping for a healthy newborn.',
    why: 'The words look almost identical whether a parent is recommending it, asking about it, or '
      + 'confessing they fell asleep that way, and only a human can tell the difference.',
  },
  {
    id: 'skippingNewbornCare',
    action: 'hold',
    what: 'The post urges other parents to decline the vitamin K shot, the newborn screening, or '
      + 'other routine newborn care, or shares a script for refusing it.',
    why: 'A parent describing their own decision is allowed, but campaigning for a refusal that '
      + 'carries a known bleeding risk needs a person to read it.',
  },
  {
    id: 'dosingAndSubstances',
    action: 'hold',
    what: 'The post gives a dose or a regimen for a baby or child, including adult medication, '
      + 'herbal preparations, supplements, colloidal silver, or essential oils applied to or '
      + 'given to an infant.',
    why: 'Doses by weight and age are a medical decision, and a number typed by a stranger is a '
      + 'number somebody will follow.',
  },
  {
    id: 'namingAnAbuser',
    action: 'hold',
    what: 'The post names, photographs, or otherwise identifies a specific person as an abuser, '
      + 'including an ex, a relative, a provider, or a daycare, or names a child in connection '
      + 'with an abuse or custody allegation.',
    why: 'The person posting may be in real danger and the named person may be too, and publishing '
      + 'it can affect a live case, so it waits for a human read.',
  },
  {
    id: 'personalDetails',
    action: 'hold',
    what: 'The post contains a phone number, a street address, an email address, a school or '
      + 'daycare name paired with a child, a full legal name of a child, a license plate, or '
      + 'location data in a photo.',
    why: 'Most of the time somebody shared their own details by accident, and holding it means we '
      + 'can tell them before a stranger copies it.',
  },
  {
    id: 'childPhoto',
    action: 'hold',
    what: 'The post contains a photo of a child that appears to include more than one child, a '
      + 'child with an adult who is not the poster, a school or sports uniform, a group or '
      + 'classroom setting, or a photo in a forum where photos are turned off.',
    why: 'We cannot tell from a photo whose child it is, and a photo of somebody else\'s kid '
      + 'cannot be unposted once it has been seen.',
  },
  {
    id: 'possibleMinor',
    action: 'hold',
    what: 'The account or post suggests the poster is under 18, such as mentioning a grade in '
      + 'school, a curfew set by a parent, or stating an age under 18.',
    why: 'This space is adults only, and the right response is a careful human check rather than '
      + 'an automatic accusation.',
  },
  {
    id: 'sellingSomething',
    action: 'warn',
    what: 'The post promotes the poster\'s own shop, service, coaching, supplement line, affiliate '
      + 'link, or recruiting pitch in a way that reads as advertising rather than answering a '
      + 'parent.',
    why: 'Plenty of parents here run small businesses and do not know the rule yet, so the first '
      + 'time should be a friendly heads up, not a punishment.',
  },
];

/* What somebody is actually told. {forumName}, {ruleTitle} and
   {triggerDetail} are filled in before it is shown, because a notice
   that does not say which rule is not an explanation. */
export const CR_NOTICES = {
  removed: {
    title: 'We took this post down',
    body: 'Your post in {forumName} has been removed because of one rule, {ruleTitle}. The specific '
      + 'part that triggered it was {triggerDetail}. We know you were almost certainly trying to '
      + 'help somebody, and we are not treating you as a bad actor here. This particular kind of '
      + 'advice gets removed right away rather than reviewed first, because other parents can act '
      + 'on it while it sits there. Everything else you have posted is untouched, and you are '
      + 'welcome to post the same question or story again without that part.',
    appeal: 'If you think we read this wrong, tap Ask for a review and tell us in a sentence or two '
      + 'what you actually meant. A real person reads every one of these, and if we got it wrong '
      + 'we will put your post back and say so.',
  },
  held: {
    title: 'A person is taking a look at this one',
    body: 'Your post in {forumName} is not visible to others yet. Our automatic check noticed '
      + '{triggerDetail}, which touches on {ruleTitle}, and this is a situation where a human '
      + 'should read it rather than a computer deciding. This is not a strike and it is not an '
      + 'accusation. Plenty of held posts go straight up exactly as written, because the check '
      + 'cannot tell the difference between recommending something and asking about it. We are a '
      + 'very small team, so this usually takes a few hours and sometimes up to a day. You will '
      + 'get a message either way, including if the answer is yes.',
    appeal: 'If it is urgent, or if you want to add context while you wait, tap Add a note and it '
      + 'goes to the top of the queue.',
  },
  warned: {
    title: 'Quick heads up about one rule',
    body: 'Your post in {forumName} is up and staying up. We just wanted to flag that '
      + '{triggerDetail} runs close to {ruleTitle}, and a lot of people do not know that rule '
      + 'until somebody mentions it. Nothing happens to your account and there is no mark against '
      + 'you. If you want to edit that part, you can, and if you are not sure where the line is, '
      + 'ask us and we will tell you plainly.',
    appeal: 'If you think this rule does not apply to what you posted, tap Tell us more. We would '
      + 'rather fix the rule\'s wording than have you guessing.',
  },
  supportShown: {
    title: 'Your post is up, and we wanted to leave you something',
    body: 'Nothing has been removed and nothing is hidden. What you wrote is here, and it is the '
      + 'kind of thing a lot of people in this community have felt and not said. Because of what '
      + 'you shared, we put some numbers next to your post where someone can talk with you right '
      + 'now, any hour: call or text 988 for the Suicide and Crisis Lifeline, and Postpartum '
      + 'Support International at 1 800 944 4773 for anything pregnancy or postpartum related. If '
      + 'a child is in danger, the Childhelp National Child Abuse Hotline is 800 422 4453 and you '
      + 'can call it just to figure out what to do. You are not in trouble and you did not do '
      + 'anything wrong by writing this down.',
    appeal: 'If you would rather not have resources attached to your post, tap Hide these and they '
      + 'will come off. Your post stays either way, and we will not ask you why.',
  },
  appealReceived: {
    title: 'We have your request',
    body: 'Thank you for telling us. Your note about your post in {forumName} is in front of a '
      + 'person now, not a computer, and it is somebody other than whatever flagged it in the '
      + 'first place. We are a small team, so give us up to 2 days, and longer if it lands on a '
      + 'weekend. You do not need to send it again or follow up. If you remembered something else '
      + 'you want us to know, you can add it to the same request.',
    appeal: 'You will get one message with the decision and the reason for it, whichever way it goes.',
  },
  appealUpheld: {
    title: 'You were right, and your post is back',
    body: 'We looked again at your post in {forumName} and we got it wrong the first time. It is '
      + 'restored exactly as you wrote it, with its replies, and there is no mark of any kind on '
      + 'your account. Thank you for pushing back, genuinely. The check that flagged this has '
      + 'been noted so it stops catching posts like yours, which is the only way these things '
      + 'ever get better.',
    appeal: 'If anything about your post or its replies did not come back properly, tell us and we '
      + 'will fix it.',
  },
  appealDenied: {
    title: 'We looked again, and we are keeping this one down',
    body: 'A person read your note about your post in {forumName} and we are still going to leave '
      + 'it removed. Here is the honest reason: {reviewerReason}. This is about {ruleTitle} and '
      + 'that one part of the post, not about you, and we are not questioning why you posted it. '
      + 'If you want to post the same thing without {triggerDetail}, that is completely fine and '
      + 'we will not flag it again. You are a welcome member here and this does not change that.',
    appeal: 'If you think the rule itself is wrong, tell us at the Feedback link. The rules here were '
      + 'written by one person and they get edited when somebody makes a good argument.',
  },
};

export const CR_FORUMS = [
  { id: 'newbornDays',
    name: 'The Newborn Days',
    about: 'The first 12 weeks, when nobody is sleeping and every day is 40 hours long.',
    sensitive: false },
  { id: 'sleep',
    name: 'Sleep, Or The Lack Of It',
    about: 'Naps, night wakings, regressions, and every approach to all of it.',
    sensitive: false },
  { id: 'feeding',
    name: 'Feeding, Every Way',
    about: 'Breast, bottle, formula, combo, pumping, donor milk, tube feeding, solids, and picky '
      + 'eaters.',
    sensitive: true },
  { id: 'pregnancyAndBirth',
    name: 'Pregnancy and Birth',
    about: 'Everything from the test to the birth story, including the plans that changed.',
    sensitive: true },
  { id: 'lossAndGrief',
    name: 'Loss and Grief',
    about: 'For miscarriage, stillbirth, infant loss, termination for medical reasons, and the '
      + 'babies who are not here.',
    sensitive: true },
  { id: 'postpartumMind',
    name: 'The Postpartum Mind',
    about: 'Depression, anxiety, rage, intrusive thoughts, and the parts of this nobody warned you '
      + 'about.',
    sensitive: true },
  { id: 'additionalNeeds',
    name: 'Additional Needs',
    about: 'For parents of children with disabilities, delays, chronic illness, neurodivergence, or '
      + 'a diagnosis you are still learning to say.',
    sensitive: true },
  { id: 'toddlerYears',
    name: 'Toddlers and Big Feelings',
    about: 'Ages 1 to 4, tantrums, potty learning, biting, and the word no.',
    sensitive: false },
  { id: 'schoolAge',
    name: 'School Age and Beyond',
    about: 'Kindergarten onward, homework, friendships, screens, and school that is not working.',
    sensitive: false },
  { id: 'coparenting',
    name: 'Solo and Coparenting',
    about: 'Single parenting, custody schedules, blended families, and doing this with someone you '
      + 'are no longer with.',
    sensitive: true },
  { id: 'dads',
    name: 'Dads and Partners',
    about: 'For fathers and partners, including the ones who feel like a spare part right now.',
    sensitive: false },
  { id: 'workAndMoney',
    name: 'Work, Childcare and Money',
    about: 'Leave, going back, daycare hunting, nanny shares, and making the numbers work.',
    sensitive: false },
  { id: 'askAnything',
    name: 'Ask Anything',
    about: 'The question you think is too small or too strange to ask anywhere else.',
    sensitive: false },
  { id: 'smallWins',
    name: 'Small Wins',
    about: 'She slept 5 hours, he ate a vegetable, you showered. Post it here.',
    sensitive: false },
];

export const CR_NEW_FORUM = [
  'Anybody with an account that is 7 days old or older can start a forum, and you do not need '
    + 'to ask permission first.',
  'Name it for the people in it, such as Twins and Multiples or NICU Parents or Parenting '
    + 'After Loss, so a tired person can tell at a glance whether they belong there.',
  'A name cannot include a brand, a business, a product, a diagnosis presented as a cure, or '
    + 'the name of a real person who is not you.',
  'Write one or two sentences about who the forum is for, and say up front if it is a space '
    + 'where advice is not wanted.',
  'If your forum is about something tender such as loss, trauma, mental health, or custody, '
    + 'mark it sensitive when you create it, which turns off search indexing and photos and adds '
    + 'the support resources to the sidebar.',
  'Starting a forum makes you its host, which means you keep an eye on it, remove replies '
    + 'that break the community rules, and tell us when something is beyond you.',
  'All of the community rules apply inside your forum and you cannot write a rule that '
    + 'cancels one of them, though you are welcome to add stricter rules of your own.',
  'You cannot use a forum you host to sell anything, recruit, collect contact details, or '
    + 'send people to another app or group chat.',
  'A forum with no posts for 60 days gets quietly archived, and you can ask to reopen it any '
    + 'time.',
  'A forum gets closed if it exists to target a person or group, to promote the dangerous '
    + 'advice named in the rules, to gather photos of children, to sell something, or if the host '
    + 'stops moderating it after we have asked.',
  'If your forum is closed you will get the same kind of notice as any other removal, naming '
    + 'the reason, and you can appeal it the same way.',
];

export const CR_SAFETY = {
  underAge: 'You must be 18 or older to have an account or post in this community, because this is a '
    + 'space where adults talk candidly about pregnancy, mental health, bodies, and their '
    + 'children, and because we are a small operation that is not equipped to give minors the '
    + 'privacy protections the law requires for them. If we find out an account belongs to '
    + 'somebody under 18, we close it and delete what it posted, and a parent can write to us to '
    + 'confirm that has been done.',
  mandatory: 'Here is the honest version. We are not a doctor, a school, or a caseworker, so in most '
    + 'states we are not a mandated reporter, and we are not going to tell you we automatically '
    + 'report posts to anybody, because that would not be true and it would stop people from '
    + 'asking for help. What we actually do: a post saying a child is being hurt stays up, you '
    + 'are shown the Childhelp National Child Abuse Hotline at 800 422 4453 and your local '
    + 'emergency number right away, and a human on our team is alerted and will read it. If a '
    + 'post describes a specific child in immediate danger and gives us enough to identify them, '
    + 'we will contact law enforcement or child protective services ourselves, and we will tell '
    + 'you that we did. Anyone can report a concern about a child in every state, whether or not '
    + 'they are a mandated reporter, and if you are the one worried, calling that hotline '
    + 'yourself will get you further and faster than a forum will.',
  notAdvice: 'Nothing posted in this community is medical advice, including anything posted by a member '
    + 'who says they are a doctor, nurse, midwife, or lactation consultant, and including '
    + 'anything written by us. It is parents talking to parents, which is worth a great deal and '
    + 'is not a substitute for your own provider who can actually see your child. Please take '
    + 'anything you read here to the person responsible for your care before you act on it, and '
    + 'call 911 or your local emergency number if something is wrong right now.',
};

export const CR_SOURCES = [
  { org: 'Santa Clara Principles',
    label: 'Santa Clara Principles 2.0 on Transparency and Accountability in Content Moderation, the '
      + 'notice and appeal standards this policy follows',
    url: 'https://santaclaraprinciples.org/' },
  { org: 'Federal Trade Commission',
    label: 'Complying with COPPA, Frequently Asked Questions, including photos of children and user '
      + 'generated content as personal information',
    url: 'https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions' },
  { org: 'American Academy of Pediatrics, HealthyChildren.org',
    label: 'A Parent\'s Guide to Safe Sleep, including back sleeping, firm flat surfaces, no soft '
      + 'bedding or bumpers, and no inclined sleepers',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
  { org: 'U.S. Food and Drug Administration',
    label: 'FDA advises parents and caregivers not to make or feed homemade infant formula to '
      + 'infants, including reported hospitalizations for low calcium',
    url: 'https://www.fda.gov/food/alerts-advisories-safety-information/fda-advises-parents-and-caregivers-not-make-or-feed-homemade-infant-formula-infants' },
  { org: 'U.S. Food and Drug Administration',
    label: 'FDA warning letter on Miracle Mineral Solution, identifying the product as chlorine '
      + 'dioxide with dangerous and potentially life threatening effects',
    url: 'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/genesis-2-church-606459-04082020' },
  { org: 'Centers for Disease Control and Prevention',
    label: 'Raw Milk, the pathogens it carries and the higher risk for children under 5',
    url: 'https://www.cdc.gov/food-safety/foods/raw-milk.html' },
  { org: 'Centers for Disease Control and Prevention',
    label: 'About Vitamin K Deficiency Bleeding, including that infants who do not get the shot at '
      + 'birth are 81 times more likely to develop late VKDB',
    url: 'https://www.cdc.gov/vitamin-k-deficiency/about/index.html' },
  { org: 'Electronic Frontier Foundation',
    label: 'Section 230 of the Communications Decency Act, what it protects and the carve outs it '
      + 'does not cover',
    url: 'https://www.eff.org/issues/cda230' },
  { org: 'Child Welfare Information Gateway',
    label: 'Mandatory Reporting of Child Abuse and Neglect, state statutes, which professions are '
      + 'mandated and the fact that any person may report in every state',
    url: 'https://artifacts.childwelfare.gov/public/documents/mandatory-reporting-abuse-neglect.pdf' },
  { org: 'Discord',
    label: 'Discord Community Guidelines, an example of rules grouped by respect for people, respect '
      + 'for the platform, and the law',
    url: 'https://discord.com/guidelines' },
  { org: '988 Suicide and Crisis Lifeline',
    label: 'Free and confidential crisis support by call, text or chat, 24 hours a day, used in the '
      + 'support notice',
    url: 'https://988lifeline.org/' },
  { org: 'Childhelp',
    label: 'Childhelp National Child Abuse Hotline, available to anyone concerned about a child, not '
      + 'only mandated reporters',
    url: 'https://childhelphotline.org/' },
];

/* ==================================================================
   VACCINES, AND THE ONE DIAL SHE MAY WANT TO TURN

   Her words: "also no talk about vaccinations and stuff like that.
   They can talk to their provider about that but that's a huge topic
   that causes arguements etc."

   She is right about the arguments. A vaccine thread in a parenting
   forum is the single most reliable way to lose a room, and no parent
   has ever been persuaded of anything by one.

   BUT A FLAT BAN CATCHES THE WRONG POSTS TOO. "Did anyone else's baby
   run a fever after the 2 month shots" is not an argument, it is a
   frightened parent at 11pm. So is "which pharmacy does them", and so
   is "we are behind because we moved, is anyone else". Removing those
   reads as arbitrary and is the kind of thing that makes people stop
   posting at all.

   SO THE DEFAULT IS 'debate': the arguing goes, the ordinary parent
   talk stays, and everything vaccine shaped points at the app's own
   sourced vaccine pages and at their provider.

   If she wants the flat ban instead, this is the only line to change.
   Set it to 'all' and anything mentioning vaccines at all is held. */
export const CR_VACCINE_MODE = 'debate';   // 'debate' or 'all'

export const CR_VACCINE_RULE = {
  id: 'vaccineTalk',
  title: 'Ask about the appointment, not the argument',
  body: 'The practical side is welcome and always will be. A fever afterward, a sore leg, what to '
    + 'expect, when to call, catching up after a move, being nervous about tomorrow. What does not '
    + 'happen here is the argument. No making the case for or against, no posting studies at each '
    + 'other, and no telling another parent what to do with their child.',
  why: 'The argument has ended more parenting groups than every other topic combined and has never '
    + 'once changed somebody\'s mind. The practical questions are the opposite: they are how a '
    + 'parent finds out that the thing they half remember about Tylenol is the wrong way round.',
};

/* THE REASON THE PRACTICAL HALF STAYS.

   She made the case for this herself and she was right, even though
   the example she reached for has the rule backwards, which is rather
   the point. A great many parents believe you must not give Tylenol
   AFTER shots. The real caution is about giving it BEFORE, to head off
   a fever that has not happened. So a parent holding the common
   version leaves a miserable baby untreated all night for no reason,
   and the only place that gets corrected is a room where the question
   is allowed to be asked. See VAX_AFTER_TYLENOL in vaccines.js. */
export const CR_VACCINE_WELCOME = [
  'A fever, a sore leg, or a fussy evening afterward, and what helped yours.',
  'What to expect at an appointment, or that you are dreading it.',
  'Being behind on the schedule, and how other people caught up.',
  'What a reaction looked like for your own child.',
  'Asking when something is worth a phone call.',
];

export const CR_VACCINE_ALL_BODY =
  'Vaccines do not get discussed here at all, in either direction. It is not that the question does '
  + 'not matter, it is that it matters too much to be settled by strangers. Your provider can see '
  + 'your child and we cannot, and the app has its own pages on what the evidence says.';

/* Where a held vaccine post is pointed instead of simply being stopped. */
export const CR_VACCINE_SEND = {
  label: 'What the evidence says',
  screen: 'vaccines',
  line: 'The app has its own pages on this, with the sources attached, and your pediatrician can '
    + 'answer for your actual child in a way a forum never can.',
};

export function crVaccineRule() {
  return CR_VACCINE_MODE === 'all'
    ? Object.assign({}, CR_VACCINE_RULE, { body: CR_VACCINE_ALL_BODY })
    : CR_VACCINE_RULE;
}

export function crRule(id) {
  if (id === 'vaccineTalk') return crVaccineRule();
  return CR_RULES.filter((r) => r.id === id)[0] || null;
}

/* The rules as shown, with the vaccine one in place. Kept out of the
   array itself so its wording can follow the dial above. */
export function crRulesAll() {
  return CR_RULES.concat([crVaccineRule()]);
}

export function crFlag(id) {
  return CR_FLAGS.filter((f) => f.id === id)[0] || null;
}

export function crForum(id) {
  return CR_FORUMS.filter((f) => f.id === id)[0] || null;
}

/* The notice, with its blanks filled. Anything still missing is cut
   rather than left as a token, because {forumName} on screen is worse
   than no forum name at all. */
export function crNotice(kind, fill) {
  const n = CR_NOTICES[kind];
  if (!n) return null;
  const f = fill || {};
  const put = (t) => String(t || '')
    .replace(/\{forumName\}/g, f.forumName || 'that forum')
    .replace(/\{ruleTitle\}/g, f.ruleTitle || 'one of the community rules')
    .replace(/\{triggerDetail\}/g, f.triggerDetail || 'something the filter picked up')
    .replace(/\{reviewerReason\}/g, f.reviewerReason || 'it still breaks that rule')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return { title: put(n.title), body: put(n.body), appeal: put(n.appeal) };
}

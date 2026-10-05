/**
 * Ready Set Grow: when a pregnancy ends
 * ------------------------------------------------------------------
 * WHY THIS FILE EXISTS
 *
 * Her brief for this app is conception to eighteen, start to finish.
 * Until now the arc had one exit that nobody plans for and it was not
 * built. An expecting child could become a born child, or could be
 * deleted. That was the whole list.
 *
 * So a parent who miscarried had two choices. Leave the pregnancy in
 * the app and keep being told each week what size fruit their baby is
 * and how many days until the due date. Or press Remove, which is
 * worded as tidying up a record, and which takes the name, the dates
 * and any scan photo with it.
 *
 * Both of those are cruel, and the second one is worse, because it
 * asks a grieving parent to perform a deletion in order to stop being
 * hurt by an app. Roughly one in five known pregnancies ends this way.
 * Whatever else this app gets wrong, it does not get to get this
 * wrong.
 *
 * THE RULES THIS IS BUILT ON
 *
 * 1. NOTHING IS DELETED. Recording a loss never removes the record.
 *    The name they chose, the dates, the scan, the notes, all of it
 *    stays unless they personally choose to remove it later. Grief is
 *    not tidy and plenty of parents want the record kept. Some want it
 *    gone. Only they know which, and they may not know today.
 *
 * 2. EVERYTHING FORWARD LOOKING STOPS AT ONCE. The week by week
 *    updates, the countdown, the hospital bag, the nesting list, the
 *    birth plan, the induction pages, the baby shower. The moment this
 *    is recorded, none of it is ever shown again for this pregnancy.
 *    This is the entire point of the feature and it has to be total.
 *
 * 3. THEY SAY AS MUCH OR AS LITTLE AS THEY WANT. One tap is enough.
 *    Every other field on this screen is optional, including the date,
 *    including how far along, including whether to name them. An app
 *    that demands the details of the worst week of somebody's life
 *    before it will stop sending them fruit comparisons is not a
 *    caring app.
 *
 * 4. NO TIMELINE AND NO STAGES. Nothing in here tells anybody how
 *    long this should take, what they should be feeling, or that it
 *    was for the best. No "at least you know you can get pregnant".
 *    No "it was probably a chromosomal problem" offered as comfort,
 *    even though it usually is, because that is a fact and not a
 *    comfort and the difference matters.
 *
 * 5. THE WORD IS THEIRS. Miscarriage, loss, our baby, the pregnancy.
 *    The app uses the neutral one and never corrects theirs. The
 *    clinical term for early loss is "spontaneous abortion" and it
 *    appears nowhere in this app's own voice, because a parent
 *    reading that word about their own baby is a documented harm and
 *    it buys nothing.
 *
 * 6. ANNIVERSARIES ARE OFFERED, NEVER IMPOSED. The due date and the
 *    date it happened are both hard days. Some parents want them
 *    marked. Some want to never see them again. So the app asks once
 *    and then does exactly what it was told, forever.
 *
 * WHAT THIS IS NOT
 * Not medical advice, not a diagnosis, not a decision aid about
 * management. Bleeding that soaks through a pad an hour, fever, or
 * feeling faint are emergency symptoms and the only thing this app
 * says about them is go now. Everything else here is orientation and
 * company.
 */

export const LOSS_TITLE = 'If this pregnancy has ended';

/* The entry point. Quiet, never a button in a bright colour, never
   sitting above the week by week content where a happily pregnant
   person has to read past it every day. Reachable, not loud. */
export const LOSS_ENTRY = 'This pregnancy has ended';

export const LOSS_ENTRY_SUB =
  'However it happened, and whenever. This stops the weekly updates and the countdown straight away.';

export const LOSS_INTRO = [
  'I am very sorry.',
  'Whatever you want to do next in here is allowed. You can stop the weekly updates and leave '
    + 'everything else exactly where it is, you can keep as much of the record as you want, and you '
    + 'can change any of it later.',
  'Nothing is deleted by doing this.',
];

/* ------------------------------------------------------------------
   THE ONE DECISION THAT MATTERS

   The only required answer. Everything below it can be skipped, and
   skipping it all is a complete and normal way to use this screen.
   ------------------------------------------------------------------ */
export const LOSS_CONFIRM = 'Stop the updates';

export const LOSS_CONFIRM_NOTE =
  'The week by week pages, the countdown, the birth and hospital pages and the nesting list all '
  + 'stop now and do not come back.';

export const LOSS_CANCEL = 'Not now';

/* ------------------------------------------------------------------
   THE OPTIONAL PART

   Offered after it is already done, never before, so nobody has to
   fill in a form in order to make the app stop.
   ------------------------------------------------------------------ */
export const LOSS_OPTIONAL_TITLE = 'Anything you want to keep';

export const LOSS_OPTIONAL_NOTE =
  'All of this is optional and you can come back to it, or never. There is no wrong answer here and '
  + 'nothing is shared with anybody.';

export const LOSS_DATE_LABEL = 'The day it happened';
export const LOSS_DATE_NOTE = 'Leave it blank if you would rather not, or if you are not sure.';

export const LOSS_NAME_LABEL = 'If you gave them a name';
export const LOSS_NAME_NOTE =
  'Some families name their baby and some do not, and both are completely normal. If you have, it '
  + 'stays on the record.';

export const LOSS_NOTE_LABEL = 'Anything you want written down';
export const LOSS_NOTE_PLACEHOLDER = 'Only for you. Nobody else sees this.';

/* ------------------------------------------------------------------
   THE DAYS

   Asked once, in plain words, and then obeyed. The default is OFF,
   because a reminder nobody asked for about the worst day of their
   life is the single worst thing a calendar can do.
   ------------------------------------------------------------------ */
export const LOSS_DATES_TITLE = 'The hard days';

export const LOSS_DATES_BODY =
  'The due date and the day it happened both tend to come round harder than people expect. Some '
  + 'parents want them marked so they are not ambushed. Some want them never mentioned again.';

export const LOSS_DATES_ASK = 'Would you like these marked on your calendar?';

export const LOSS_DATES_OPTIONS = [
  { id: 'none', label: 'No, never show me these', note: 'Nothing goes on the calendar.' },
  { id: 'quiet', label: 'Mark them quietly', note: 'They appear on the calendar with no reminder '
    + 'and no notification. Only you see them.' },
  { id: 'warn', label: 'Give me a few days warning', note: 'A quiet note three days before, so the '
    + 'day itself is not a surprise.' },
];

export const LOSS_DATES_CHANGE = 'You can change this whenever you like.';

/* ------------------------------------------------------------------
   WHAT IS ACTUALLY HAPPENING TO THEIR BODY

   The part almost nobody is told, and the most asked question in
   every loss support forum. Kept factual, kept short, kept free of
   anything that sounds like a schedule they are failing to meet.
   ------------------------------------------------------------------ */
export const LOSS_BODY_TITLE = 'What happens to your body';

export const LOSS_BODY_INTRO =
  'Nobody tends to tell you this part, and not knowing makes it frightening on top of everything '
  + 'else. This is general information about what is common, not a prediction about you.';

export const LOSS_BODY_POINTS = [
  'Bleeding and cramping can carry on for days to a couple of weeks, and are often heavier than a '
    + 'period. How long varies enormously between people and between pregnancies.',
  'Pregnancy hormones take time to clear, so a pregnancy test can stay positive for days or weeks '
    + 'afterwards. That is not a sign anything was missed.',
  'Periods usually return within about four to six weeks, though later is common and is not a '
    + 'problem on its own.',
  'After a later loss your milk can come in, which is physically painful and emotionally brutal and '
    + 'almost nobody is warned about it. There are things that help and it is worth asking for them '
    + 'rather than waiting it out.',
  'Feeling physically fine quickly is also normal and is not a sign you are not grieving properly.',
];

export const LOSS_BODY_ASK_TITLE = 'Worth a call rather than a search';

export const LOSS_BODY_ASK = [
  'Soaking through a pad an hour for more than two hours, or passing clots larger than a golf ball',
  'A fever, chills, or discharge that smells wrong',
  'Severe pain that is not easing, or pain concentrated on one side',
  'Feeling faint, dizzy, or short of breath',
];

export const LOSS_BODY_ASK_NOTE =
  'Any of these are a reason to call your provider or go in now rather than wait. Heavy bleeding '
  + 'and infection after a loss are both treatable and both are time sensitive.';

/* ------------------------------------------------------------------
   TRYING AGAIN, FOR THE PEOPLE WHO WANT TO KNOW TODAY

   Deliberately short and deliberately not promoted. Some parents want
   this question answered within the hour and are made to feel
   monstrous for asking. Others will not want to see the words for a
   year. So it is here, it is accurate, and it is behind its own
   heading rather than in the middle of the grief content.
   ------------------------------------------------------------------ */
export const LOSS_AGAIN_TITLE = 'If you are already wondering about trying again';

export const LOSS_AGAIN = [
  'Wanting to know this immediately is common and is not a sign you are not grieving. Not wanting '
    + 'to think about it for a long time is just as common.',
  'The old advice to wait three months is not well supported by the evidence, and guidance in most '
    + 'places now is that there is no required waiting period once bleeding has settled and you feel '
    + 'ready, unless your own clinician has told you otherwise for a specific reason.',
  'One loss does not usually mean anything about the next pregnancy. Most people who have had one '
    + 'go on to have a healthy pregnancy.',
  'Recurrent loss, usually counted as two or three, is worth investigating rather than enduring, '
    + 'and you are allowed to ask for that referral yourself.',
];

export const LOSS_AGAIN_NOTE =
  'Your own clinician knows your history and this app does not. Anything here is general '
  + 'information, not advice about your situation.';

/* ------------------------------------------------------------------
   THE PART ABOUT OTHER PEOPLE
   ------------------------------------------------------------------ */
export const LOSS_OTHERS_TITLE = 'The other people in this';

export const LOSS_OTHERS = [
  'A partner has usually lost the same thing and is very often asked only how you are doing. That '
    + 'gap is one of the most common things couples say damaged them afterwards.',
  'People will say unhelpful things. Almost all of them are frightened and reaching for anything. '
    + 'You do not owe anybody a gracious response.',
  'You do not have to tell anyone, and you do not have to keep it private either. Both are fine and '
    + 'you can change your mind.',
  'If you had already told other children, they tend to need less detail and more certainty than '
    + 'adults expect: that it was nobody\'s fault, that nobody else is ill, and that it is alright to '
    + 'ask again later.',
];

/* ------------------------------------------------------------------
   WHEN IT IS MORE THAN GRIEF

   Carefully worded. Grief is not a disorder and this must never read
   as the app diagnosing somebody for being sad about their baby.
   ------------------------------------------------------------------ */
export const LOSS_HEAVY_TITLE = 'If it is sitting heavier than that';

export const LOSS_HEAVY_BODY =
  'Grief after a loss is not a condition and it does not need treating. But loss also raises the '
  + 'chance of depression and anxiety, and those do respond to help. If weeks are going by and you '
  + 'cannot function, if the anxiety is constant, or if you are having thoughts of harming yourself, '
  + 'that is worth telling a professional about. It is a common thing to need and asking for it is '
  + 'not a failure of grieving properly.';

export const LOSS_HEAVY_NOTE =
  'If you are in immediate danger, or thinking about harming yourself, contact your local emergency '
  + 'number or a crisis line now rather than waiting for an appointment.';

/* ------------------------------------------------------------------
   WHAT THE APP DOES FROM NOW ON

   Said plainly, so they do not have to wonder whether something is
   about to jump out at them. Predictability is most of what makes an
   app safe to keep open after this.
   ------------------------------------------------------------------ */
export const LOSS_WHAT_NOW_TITLE = 'What this app will do now';

export const LOSS_WHAT_NOW = [
  'The week by week pages, the size comparisons and the countdown have stopped and will not come '
    + 'back for this pregnancy.',
  'The hospital bag, the birth plan, the induction pages and the nesting list have gone with them.',
  'Everything you had already saved stays exactly where it is, including the name if you gave one '
    + 'and any photos.',
  'Nothing about this is ever posted anywhere, suggested to the community, or shown to anybody you '
    + 'have shared a child with.',
  'If you ever want the record removed completely, that is on their page and it is yours to do.',
];

export const LOSS_REVERSIBLE =
  'If you recorded this by mistake, you can undo it on their page and everything comes straight '
  + 'back.';

export const LOSS_UNDO = 'I recorded this by mistake';

/* ------------------------------------------------------------------
   HOW THE REST OF THE APP REFERS TO THEM AFTERWARDS
   ------------------------------------------------------------------ */
export const LOSS_CHIP = 'Pregnancy ended';

export function lossLabel(name) {
  return (name && String(name).trim()) ? String(name).trim() : 'Your baby';
}

/* The line on their card. No dates unless the parent asked for dates,
   no duration, no counting. */
export function lossCardLine(rec) {
  const named = rec && rec.name && String(rec.name).trim();
  return named ? 'Remembered' : 'Pregnancy ended';
}

export const LOSS_PRIVACY =
  'This is on your account only. It is never shared with the community, never used to choose what '
  + 'you are shown, and nobody you share a child with can see it.';

/* ==================================================================
   WHAT WILLOW SAYS

   Her request, and the right one: a reference page is not the same as
   somebody being there. The page tells them what the app has stopped
   doing. Willow is the part that says I am sorry.

   THE RULES FOR THIS, WHICH ARE STRICTER THAN ANYWHERE ELSE IN THE APP

   She goes first, once, and then she waits. She does not check in
   tomorrow. She does not ask how they are doing on a schedule. A
   grief feature that keeps tapping somebody on the shoulder is a
   grief feature nobody can bear to keep installed.

   She does not say it happens for a reason, that it was probably
   chromosomal, that at least they know they can get pregnant, that
   one in five pregnancies end, or anything else that is true and is
   not a comfort. The difference between a fact and a comfort is the
   whole job here.

   She does not ask a single question in her opening message. A person
   who has just recorded this does not owe an AI an answer. What she
   offers instead is a short list of things they can tap if they want
   one, and silence if they do not.
   ================================================================== */
export const LOSS_WILLOW_OPEN =
  'I am so sorry. I saw what you just recorded and I did not want you to have to be the one to '
  + 'bring it up.\n\nI have stopped everything that was counting forward. Nothing in here is going '
  + 'to congratulate you or ask you how many weeks you are.\n\nYou do not have to talk to me. I am '
  + 'here if it helps, at whatever hour it is when it gets loud.';

/* Offered as taps rather than asked as a question. Nothing in this
   list assumes they want to do anything at all. */
export const LOSS_WILLOW_OFFERS = [
  { id: 'body',    label: 'What is happening to my body' },
  { id: 'milk',    label: 'My milk has come in', needsMilk: true },
  { id: 'nothing', label: 'I do not want to talk about it' },
  { id: 'partner', label: 'My partner is not okay either' },
  { id: 'tell',    label: 'What do I tell people' },
  { id: 'kids',    label: 'What do I tell my other children' },
  { id: 'again',   label: 'Will this happen again' },
  { id: 'heavy',   label: 'I am not coping' },
];

export const LOSS_WILLOW_QUIET =
  'That is completely allowed. I will not bring it up again.\n\nIf you want me later, I am in the '
  + 'corner like always, and you can ask me about anything else in here without me mentioning this '
  + 'at all.';

/* ------------------------------------------------------------------
   MILK AFTER A LOSS

   Her specific ask, and the single most neglected thing in this whole
   area. After a loss from around sixteen weeks, and sometimes
   earlier, milk comes in. Nobody warns people. A parent wakes up
   three days later engorged and leaking for a baby who is not there,
   and it is physically painful and emotionally unbearable at once.

   TWO PATHS AND NEITHER IS THE RECOMMENDED ONE

   Most people want it to stop, and suppression is legitimate, normal
   and nothing to feel guilty about. Some people find that expressing
   and donating is the thing that carries them through, and for those
   parents it is often described as the only part of it that felt like
   it meant something.

   Both are offered with equal weight and neither is framed as the
   better one. Pushing donation at a grieving parent is coercive, and
   hiding it from the ones who would want it takes away the one
   choice they have left. So: here are both, here is how each works,
   you decide, and you can change your mind.

   WHY IT IS GATED ON HOW FAR ALONG THEY WERE

   Offering milk donation to somebody who lost at seven weeks would be
   grotesque. So this only appears when the app can work out that they
   were far enough along for lactation to be likely, or when they tell
   Willow it is happening.
   ------------------------------------------------------------------ */
export const LOSS_MILK_FROM_WEEK = 16;

export const LOSS_MILK_TITLE = 'If your milk comes in';

export const LOSS_MILK_WARN =
  'Almost nobody is warned about this and it is cruel to find out by it happening. From around '
  + 'sixteen weeks, and sometimes earlier, your body may make milk whatever else has happened. It '
  + 'usually starts a couple of days after and it can be painful.';

export const LOSS_MILK_CHOICE =
  'There are two things people do and neither one is the right one. Some want it to stop as quickly '
  + 'as possible. Some express, and some of those donate it. Plenty of parents say the donating was '
  + 'the only part of the whole thing that felt like it meant something, and plenty of others find '
  + 'the idea unbearable. Both of those are completely reasonable responses and nobody gets to tell '
  + 'you which one you are.';

export const LOSS_MILK_STOP_TITLE = 'If you want it to stop';

export const LOSS_MILK_STOP = [
  'A firm, supportive bra worn day and night, including while you sleep.',
  'Cold packs, and plain ibuprofen or paracetamol if you can take them, for the swelling and the '
    + 'ache.',
  'Express only enough for comfort when you are painfully full, not until empty. Emptying tells '
    + 'your body to make more, which is the opposite of what you want here.',
  'Avoid heat, warm showers on your chest and any kind of pumping routine, all of which keep it '
    + 'going.',
  'Cabbage leaves in the bra are an old remedy that a lot of people swear by and the evidence for '
    + 'is thin. It is harmless, so it is worth a try if you want one.',
  'There are medicines that stop lactation and they are not right for everybody. Your provider can '
    + 'tell you whether they are an option for you.',
  'It usually settles within one to two weeks of leaving it alone, often sooner.',
];

export const LOSS_MILK_GIVE_TITLE = 'If you want to express and donate';

export const LOSS_MILK_GIVE = [
  'Milk banks do take donations from bereaved parents, and many of them have people whose job is '
    + 'exactly this conversation. You will not have to explain yourself from scratch.',
  'It goes to babies in neonatal intensive care, usually very premature ones, for whom donor milk '
    + 'measurably lowers the risk of serious gut disease. It is not a gesture. It is treatment.',
  'There is a screening process, usually a questionnaire and a blood test, and it is free to the '
    + 'donor. Some medications and some medical histories rule it out, which is nobody\'s fault and '
    + 'is worth finding out early rather than late.',
  'Milk you have already frozen before the screening is often still usable. Ask before you throw '
    + 'anything away.',
  'You can donate once, or for a while, and stop whenever you want. Nobody is counting and nobody '
    + 'will chase you.',
  'If a milk bank cannot take yours, that is a rule about paperwork and not a verdict on you or on '
    + 'what you were trying to do.',
];

export const LOSS_MILK_EITHER =
  'You are allowed to change your mind in either direction, including halfway through, including '
  + 'more than once.';

export const LOSS_MILK_SOURCES = [
  { org: 'HMBANA',
    label: 'Human Milk Banking Association of North America, including donating after a loss and '
      + 'how to find your nearest bank',
    url: 'https://www.hmbana.org/' },
  { org: 'NHS',
    label: 'Stopping breastfeeding and relieving engorgement',
    url: 'https://www.nhs.uk/conditions/baby/breastfeeding-and-bottle-feeding/breastfeeding-problems/' },
];

/* ------------------------------------------------------------------
   WHAT SHE SAYS TO EACH OF THE TAPS

   Short. Everything long lives on the page, and Willow's job in this
   moment is to be a person rather than a leaflet.
   ------------------------------------------------------------------ */
export const LOSS_WILLOW_REPLIES = {
  body:
    'Bleeding and cramping for days to a couple of weeks is usual, often heavier than a period, and '
    + 'how long varies hugely. A pregnancy test can stay positive for a while afterwards, which is '
    + 'hormones clearing and not a sign anything was missed.\n\nThe ones that mean call someone now '
    + 'rather than read: soaking a pad an hour for more than two hours, clots bigger than a golf '
    + 'ball, a fever or discharge that smells wrong, severe or one sided pain, or feeling faint. '
    + 'Those are all treatable and all time sensitive.',
  milk:
    'I am sorry. Almost nobody is warned this can happen and finding out by waking up to it is '
    + 'brutal.\n\nIf you want it to stop: a firm bra day and night, cold packs, express only enough '
    + 'for comfort rather than emptying, and keep heat off it. It usually settles in one to two '
    + 'weeks.\n\nSome parents express and donate instead, to babies in intensive care, and describe '
    + 'it as the only part of this that felt like it meant something. Others cannot bear the idea. '
    + 'Both of those are reasonable and neither is what you are supposed to do.\n\nThere is more on '
    + 'both, including how donating actually works, on the page.',
  nothing: LOSS_WILLOW_QUIET,
  partner:
    'They have usually lost the same thing and been asked only how you are doing. That gap is one '
    + 'of the most common things couples say did the lasting damage, and it is almost never anybody '
    + 'being careless.\n\nGrief also rarely syncs up. One of you wanting to talk about it on the '
    + 'day the other cannot is normal and is not a sign you are drifting apart.',
  tell:
    'You do not owe anybody the information, and you do not owe anybody privacy either. Both are '
    + 'fine and you can change your mind.\n\n"We lost the baby and we are not up to talking about '
    + 'it" is a complete sentence. So is asking one person to tell everybody else so you do not '
    + 'have to say it twelve times.\n\nPeople will say unhelpful things. Nearly all of them are '
    + 'frightened and reaching for anything. You do not owe them a gracious reply.',
  kids:
    'They usually need less detail and more certainty than adults expect. That the baby died, that '
    + 'it was nobody\'s fault and nothing anybody did, that nobody else is ill, and that you are sad '
    + 'and will still look after them.\n\nPlain words rather than "we lost the baby" or "gone to '
    + 'sleep", both of which small children take literally and then worry about losing you or about '
    + 'bedtime.\n\nThey will ask again, often at a strange moment, and that is them checking rather '
    + 'than them being upset.',
  again:
    'One loss usually says nothing about the next pregnancy. Most people who have had one go on to '
    + 'have a healthy pregnancy.\n\nRecurrent loss, counted as two or three depending where you '
    + 'are, is worth investigating rather than enduring, and you can ask for that referral '
    + 'yourself rather than waiting to be offered it.\n\nIf you are already thinking about trying '
    + 'again, that is common and it does not mean you are not grieving. If you cannot stand the '
    + 'thought, that is just as common.',
  heavy:
    'Grief is not a condition and does not need treating. But loss does raise the chance of '
    + 'depression and anxiety, and those do respond to help.\n\nIf weeks are passing and you cannot '
    + 'function, or the anxiety is constant, that is worth telling a professional. Postpartum '
    + 'Support International covers loss and has a helpline.\n\nIf you are having thoughts of '
    + 'harming yourself, please contact a crisis line or your local emergency number now rather '
    + 'than waiting for an appointment. I am not able to be the right help for that, and it is the '
    + 'one thing I will not pretend about.',
};

/* Whether milk is likely to be part of this, from how far along they
   were. Unknown means not offered unprompted: a parent can still tap
   it, and Willow answers, but she does not raise it. */
export function lossMilkLikely(weeksAtLoss) {
  const w = Number(weeksAtLoss);
  return isFinite(w) && w >= LOSS_MILK_FROM_WEEK;
}

/* ------------------------------------------------------------------
   WHERE TO ACTUALLY GO

   Organisations whose written material on this is good and free.
   Kept short, because a wall of links at this moment is its own kind
   of unhelpful.
   ------------------------------------------------------------------ */
export const LOSS_SOURCES = [
  { org: 'ACOG',
    label: 'Early pregnancy loss, including what is normal physically and what the options are',
    url: 'https://www.acog.org/womens-health/faqs/early-pregnancy-loss' },
  { org: 'NHS',
    label: 'Miscarriage: symptoms, what happens, and afterwards',
    url: 'https://www.nhs.uk/conditions/miscarriage/' },
  { org: 'March of Dimes',
    label: 'Pregnancy loss, and trying again',
    url: 'https://www.marchofdimes.org/find-support/topics/miscarriage-loss-grief' },
  { org: 'Share Pregnancy and Infant Loss Support',
    label: 'Support groups and a helpline, United States',
    url: 'https://nationalshare.org/' },
  { org: 'Postpartum Support International',
    label: 'Help for depression and anxiety after loss, including a helpline',
    url: 'https://www.postpartum.net/' },
  { org: 'The Miscarriage Association',
    label: 'Plain language leaflets, including one written for partners',
    url: 'https://www.miscarriageassociation.org.uk/' },
];

export const LOSS_DISCLAIMER =
  'General information, not medical advice, and not a substitute for your own clinician. If '
  + 'something feels wrong physically, call them rather than reading.';

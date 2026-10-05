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

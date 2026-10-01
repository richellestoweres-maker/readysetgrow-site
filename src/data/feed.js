/**
 * Ready Set Grow: The Shared Feed
 * ------------------------------------------------------------------
 * Until now a post could be marked "Share to Community" and nothing
 * happened to it. The button was there, the switch flipped, and the
 * post sat on her own profile exactly as before. This file and the
 * rules in firestore.rules are what make that button tell the truth.
 *
 * THE DECISION SHE MADE, AND WHY IT SHAPES EVERYTHING HERE
 * People choose public or private themselves, and a public post goes up
 * straight away. She said plainly that she does not want to be the
 * person everything waits on, and she is right: a room where every post
 * sits in a queue until the founder wakes up is a room where nobody
 * bothers posting twice.
 *
 * SO THE BACKSTOP IS NARROW ON PURPOSE.
 * A very short filter holds back the few things that are dangerous
 * rather than merely disagreeable: a medication dose, or somebody's
 * phone number or email address. Those are objective, they are rare,
 * and getting one wrong in a room full of new parents is the mistake
 * that cannot be taken back afterwards. Everything else goes straight
 * up and is handled by people reporting it.
 *
 * WHAT THE FILTER DELIBERATELY DOES NOT TRY TO DO
 * It does not judge tone, advice, parenting choices or arguments. A
 * filter that tried would be wrong constantly and would quietly become
 * the thing deciding what parents are allowed to say to each other.
 * Cruelty is caught by people reporting it, which is slower and far
 * more accurate.
 *
 * WHERE THE FILTER ACTUALLY LIVES
 * In firestore.rules as well as here. The rules run the same patterns
 * on arrival and refuse a post that trips one unless it is marked held,
 * so a modified app cannot send a dose straight to the feed by lying
 * about its status. This file is the wording, the rules are the
 * enforcement.
 *
 * WHAT A FEED POST DELIBERATELY DOES NOT CARRY
 * No child id, no birthday, no child name. The rules reject a document
 * holding any of them. A parent posts under a username and nothing in
 * the document can be walked back to a child's record.
 */

export const FEED_STATUS = {
  live: 'live',       // up, which is where almost everything goes
  held: 'held',       // tripped the narrow filter, waiting on a person
  removed: 'removed', // taken down after the fact
};

/* How many come down at once. A parent scrolling a feed on a phone
   connection does not need two hundred. */
export const FEED_PAGE = 40;

export const FEED_TITLE = 'You are not the only one awake.';
export const FEED_SUB =
  'What other parents are in the middle of tonight. You choose what you share and what stays '
  + 'yours, and you can take anything back down.';

export const FEED_EMPTY =
  'Nothing has been shared yet. Somebody has to be first, and being first in a quiet room is how '
  + 'every good one started.';

export const FEED_HOW =
  'Share a post from Home and it appears here straight away. Yours are the only ones you can '
  + 'take back down.';

/* What somebody sees when the filter has held their own post. It says
   what tripped it and that a person will look, because a bare status
   reads like the app lost it. */
export const FEED_HELD =
  'Held for a look. This one mentions a dose or a way to contact somebody, and those 2 get '
  + 'read by a person first. Everything else goes straight up.';

export const FEED_REMOVED =
  'This one was taken down. If you think that was a mistake, say so and it gets looked at again.';

export const FEED_GUEST =
  'Looking around without an account, so this is read only. Make an account and you can join in.';

/* The promise, said in the room it applies to rather than buried in a
   settings screen. */
export const FEED_PRIVACY = [
  'Nothing is shared unless you press share. A post is private until you say otherwise.',
  'You post under your username. Your real name is never shown here.',
  'A post cannot carry a child’s name, birthday or photo. The database itself refuses one that does.',
  'Your children’s profiles, logs, milestones and memories are never part of this and never can be.',
  'You can take anything of yours back down, whenever you like.',
];

/* Why somebody reports something. Short list on purpose: a long one
   makes people give up and scroll past instead. */
export const REPORT_REASONS = [
  { id: 'cruel', label: 'Cruel or abusive' },
  { id: 'unsafe', label: 'Unsafe advice, such as a dose or a sleep practice' },
  { id: 'private', label: 'Somebody’s private information' },
  { id: 'spam', label: 'Spam or selling something' },
  { id: 'other', label: 'Something else' },
];

export const REPORT_THANKS =
  'Thank you. A person reads every report. You will not hear back about this one, which is '
  + 'deliberate, since telling a reporter what happened tells them who reported.';

export const BLOCK_NOTE =
  'You will stop seeing anything from them here. They are not told. This is kept on your account '
  + 'and nowhere else.';

/* ------------------------------------------------------------------
 * THE FILTER
 *
 * Two patterns. That is the whole thing, and keeping it to two is the
 * design, not a first draft.
 *
 * A DOSE. "Give him 5ml of ibuprofen" from a stranger on the internet
 * is the one piece of advice in a parenting app that can put a child in
 * hospital, and the parent reading it at 3am is in no state to check.
 * Held, read, and usually put straight up with nothing changed, because
 * most of these are somebody saying what their own doctor told them.
 *
 * CONTACT DETAILS. A phone number or an email address in a public room
 * is either somebody about to be harassed or somebody about to be sold
 * something. Held either way.
 *
 * Everything else, including every argument about sleep training that
 * this app will ever host, goes straight up.
 *
 * The same patterns are in firestore.rules, which is what actually
 * enforces them. These are here so the app can say WHY in a sentence,
 * which rules cannot do.
 * ------------------------------------------------------------------ */

/* THE SHORT LIST. Chlorine dioxide sold as a cure, homemade infant
   formula, and raw milk for a baby. The FDA and the CDC are explicit
   about all 3 and children have been hospitalized by all 3. */
const RE_MMS = /\b(mms|miracle mineral|chlorine dioxide|cd protocol)\b/i;
const RE_HOMEMADE_FORMULA = /\b(homemade|home made|diy|make your own)\s+(infant\s+)?formula\b|\bformula\s+recipe\b|\bgoat milk formula\b/i;
const RE_RAW_MILK = /\braw (cow'?s? )?milk\b|\bunpasteuri[sz]ed milk\b/i;

/* Unsafe sleep and skipping newborn care. HELD, not removed. */
const RE_UNSAFE_SLEEP = /\b(stomach sleep|sleep on (their|his|her) (stomach|tummy|front)|tummy sleep|crib bumper|inclined sleeper|rock ?n ?play|weighted (sleep ?sack|swaddle|blanket)|loose blanket in the crib)\b/i;
/* The verb and the treatment within a sentence of each other. The verb
   endings matter: declined, refusing and skipping are how people
   actually write this, and \b after the stem missed all 3. */
const RE_SKIP_NEWBORN = /\b(skip(ped|ping)?|declin(e|ed|ing)|refus(e|ed|ing)|say(ing)? no to|turn(ed)? down|do(?:n'?t| not| not ever) (?:get|do|let them|allow))\b[^.!?]{0,60}\b(vitamin k|vit k|eye ointment|erythromycin|newborn screen|heel prick|hep ?b|hepatitis b)\b/i;

/* A dose or a regimen aimed at somebody else's child. */
const RE_DOSE = /[0-9]\s?(mg|mcg|ml|cc)\b/i;
const RE_ADULT_MED = /\b(benadryl|melatonin|nyquil|ibuprofen|motrin|tylenol|acetaminophen|essential oils?)\b[^.!?]{0,40}\b(baby|infant|newborn|toddler|month old)\b/i;

/* Crisis and struggle. SUPPORT, never removed and never hidden. */
/* DELIBERATELY GENEROUS. A false positive here shows a support card on
   a post that stays exactly where it is, which costs almost nothing. A
   miss costs somebody being met at the worst moment of their life, so
   this leans hard toward catching it. Written out long rather than
   clever, because every contraction and every "do not" spelling is a
   real way somebody types this at 3am. */
const RE_CRISIS = new RegExp([
  'want(ing)? to die',
  '(do ?n.t|do not|dont) want to (be here|wake up|do this)',
  "(don'?t|do not|dont) want to be here",
  'not want(ing)? to be here',
  'end it all',
  'better off without me',
  '(they|everyone|my (kids|family)) would be better off',
  'kill(ing)? myself',
  '(can.?t|cannot|can not) (do|keep doing) this an?y ?more',
  '(can.?t|cannot|can not) go on',
  'no reason to (be here|keep going)',
  'disappear and never come back',
  'give up on everything',
].join('|'), 'i');
const RE_STRUGGLE = /\b(postpartum depression|post ?partum anxiety|ppd\b|ppa\b|intrusive thoughts|scared of what i might|afraid of (myself|my own anger|what i)|shaking (him|her|them)|resent (my|the) baby|do(?:n'?t| not) feel anything for)\b/i;
const RE_ABUSE = /\b(hits? (him|her|them|my (son|daughter|kid))|hurting (him|her|them)|is not safe at home|beats? (him|her|them)|cps\b|child protective)\b/i;

/* VACCINES.

   Which half of this fires depends on CR_VACCINE_MODE in
   communityRules.js. In 'debate', which is the default, the mention on
   its own is fine and only the arguing is caught. In 'all', any
   mention is held.

   The argument patterns are what an argument actually looks like in a
   parenting forum: a claim about what shots cause, a verb aimed at
   another parent, a study being waved, or one of the words that only
   ever appears when a fight is already underway. */
/* "jab" is the other word people use, and it turns up far more often
   in the argument than in a question about a sore leg. */
const RE_VAX_MENTION = new RegExp([
  'jabs?\\b',
  'vaccin\\w*',
  'immuni[sz]\\w*',
  'mmr\\b', 'dtap\\b', 'hep ?b\\b', 'rotavirus', 'varicella', 'tdap\\b',
  'flu shot', 'covid (shot|vax|vaccine)', 'booster',
  /* "shots" on its own only counts when it is clearly the medical kind,
     so a post about shots of espresso is left alone. */
  '\\bshots?\\b[^.!?]{0,30}\\b(baby|babies|infant|toddler|appointment|pediatrician|well ?(child|baby)|month)',
  '\\b(baby|babies|infant|toddler|appointment|pediatrician|well ?(child|baby)|\\d+ month)\\b[^.!?]{0,30}\\bshots?\\b',
].join('|'), 'i');
/* WHAT IS NOT AN ARGUMENT, checked first and allowed through.

   The practical half of this topic is explicitly welcome, so a post
   that is plainly about aftercare is never read as a fight even if it
   contains a word the fight patterns watch for. A sore leg is a sore
   leg. */
const RE_VAX_AFTERCARE = new RegExp([
  '(fever|sore|swollen|swelling|fussy|crying|rash|lump|red|warm)[^.!?]{0,60}\\b(shot|shots|jab|vaccin\\w*|mmr|dtap|appointment)',
  '\\b(shot|shots|jab|vaccin\\w*|mmr|dtap|appointment)[^.!?]{0,60}(fever|sore|swollen|swelling|fussy|crying|rash|lump|limp|not eating)',
  '(what|how) (should i|do i|long|many)[^.!?]{0,60}(shot|shots|jab|vaccin\\w*)',
  'how many (shots|jabs)',
  /* Being frightened of the appointment is a practical feeling, not a
     position, so it is read as the practical half in any word order. */
  '(nervous|dreading|anxious|worried|scared)[^.!?]{0,40}(shot|shots|jab|vaccin\\w*|appointment)',
  '(shot|shots|jab|vaccin\\w*|appointment)[^.!?]{0,40}(nervous|dreading|anxious|worried|scared)',
  'behind on (the )?(schedule|shots|vaccin\\w*)',
  'catch(ing)? up on[^.!?]{0,40}(shots|jabs|vaccin\\w*|schedule|appointments?)',
  'missed[^.!?]{0,30}(appointments?|shots|jabs|vaccin\\w*)',
].join('|'), 'i');

/* THE ARGUMENT, IN BOTH DIRECTIONS.

   Worth saying out loud: the patterns here are deliberately symmetric.
   A post telling a parent they are a danger to other children for not
   vaccinating is the same fight as a post telling them the shots are
   poison, and it comes down the same way. The room is not taking a
   side, it is declining to host the fight. */
const RE_VAX_FIGHT = new RegExp([
  'vaccines? (cause|caused|causing|lead to|give|gave)',
  '(autism|sids|infertility|shedding|myocarditis)[^.!?]{0,40}(vaccin|shot|jab)',
  '(vaccin|shot|jab)[^.!?]{0,40}(autism|aluminum|mercury|thimerosal|graphene|spike protein)',
  '(you|parents|moms?) (should|need to|have to|must) (not )?(get|vaccinate|delay|space)',
  "do(?:n'?t| not)?( let them| let anyone| let him| let her)? "
    + "(vaccinate|get the shots?|get the jabs?|give (her|him|them|my \\w+) the (shot|jab))",
  "(never|refus\\w+|wont|will not) (let|letting|have|having|get|getting|be)"
    + "[^.!?]{0,30}(vaccinat\\w*|jabbed|the jab|the shots?)",
  '(jab|shot)s? (cause|caused|causing|are poison|are dangerous|are unnecessary)',
  '(un ?vaxx?ed|anti ?vax|pro ?vax|vax(x)?ed)',
  '(sheep|brainwashed|do your research|wake up|big pharma)',
  '(study|studies|paper|data|research) (shows?|proves?|prov(ing|ed)|found)[^.!?]{0,40}(vaccin|shot|jab)',
  '(jab|jabs|vaccin\\w*|shots?)[^.!?]{0,30}(are|is) (unnecessary|useless|poison|poisonous|dangerous|harmful|a scam)',
  '(poison(?! control)|toxin|toxic|unnecessary|useless)[^.!?]{0,30}(jab|jabs|vaccin\\w*|shots?)',
  /* And the same thing aimed the other way, at the parent who said no. */
  "(anyone|anybody|people|parents|moms?|those) who (do(es)? not|do ?n'?t|refuse\\w*|wont|will not|choose not)"
    + '[^.!?]{0,50}(vaccinat\\w*|jab|shots?|immuni)',
  '(danger|selfish|negligent|child abuse|should be reported|should not be allowed|keep them home)'
    + '[^.!?]{0,40}(un ?vaxx?ed|not vaccinat\\w*|no shots)',
].join('|'), 'i');

/* THE SOFTER END, WHICH ONLY COUNTS WHEN THE POST IS NOT PRACTICAL.

   This is what the aftercare check is actually FOR. A parent writing
   "we spaced hers out and she still ran a fever after her shots" is
   asking about a fever. A parent writing "spacing them out is safer,
   here is why" is making the case. Same words, different post, and the
   only thing that separates them is whether the practical half of the
   sentence is there. */
const RE_VAX_LEAN = new RegExp([
  'delay(ed|ing)? schedule|alternative schedule|spacing them out|spread them out',
  'informed consent[^.!?]{0,30}(vaccin|shot|jab)',
  '(selective|split) (vaccin\\w*|schedule)',
].join('|'), 'i');

/* Contact details, people named, and selling. */
const RE_EMAIL = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
const RE_PHONE = /[0-9]{3}[^a-zA-Z0-9]?[0-9]{3}[^a-zA-Z0-9]?[0-9]{4}/;
const RE_ADDRESS = /\b\d{1,5}\s+[A-Z][a-z]+\s+(street|st|road|rd|avenue|ave|lane|ln|drive|dr|court|ct|way)\b/;
const RE_SELLING = /\b(dm me|message me to (buy|order)|my shop|use my code|discount code|affiliate|link in bio|join my team|\$\d+ ?(a|per) (month|session))\b/i;
const RE_SPAM = /(https?:\/\/[^\s]+){3,}/i;
const RE_HARASS = /\b(you are a (terrible|awful|bad|disgusting) (mother|mom|parent)|shut up|nobody asked|kill yourself|you deserve)\b/i;

/* THE ORDER MATTERS AND IT IS NOT THE ORDER OF THE LIST.

   Crisis and struggle are checked BEFORE anything that could remove or
   hide a post, so a parent writing "I have intrusive thoughts about
   shaking him and I am terrified" is met rather than filtered. That
   sentence trips the abuse pattern too. Checking support first is what
   makes the difference between help and punishment. */
export function filterVerdict(body) {
  const b = String(body || '');

  if (RE_CRISIS.test(b)) return 'crisisLanguage';
  if (RE_STRUGGLE.test(b)) return 'postpartumStruggle';
  if (RE_ABUSE.test(b)) return 'abuseDisclosure';

  if (RE_MMS.test(b) || RE_HOMEMADE_FORMULA.test(b) || RE_RAW_MILK.test(b)) return 'lethalAdvice';
  if (RE_HARASS.test(b)) return 'targetedHarassment';
  if (RE_SPAM.test(b)) return 'spamAndScams';

  /* THE VACCINE TOPIC, WHICH IS HALF OPEN ON PURPOSE.

     'debate' is the setting the room runs on. The argument is held in
     either direction, the practical side is welcome and stays up.
     'all' is the panic switch, and it closes the topic completely,
     practical questions included. It exists so the whole thing can be
     shut in 1 line if the room is ever flooded, and it is off.

     The fight patterns are checked ahead of the other holds, because a
     vaccine argument that also happens to mention a dose should read
     as the argument it is. */
  if (FILTER_MODE.vaccine === 'all' && RE_VAX_MENTION.test(b)) return 'vaccineDebate';
  if (RE_VAX_FIGHT.test(b)) return 'vaccineDebate';
  if (!RE_VAX_AFTERCARE.test(b) && RE_VAX_LEAN.test(b)) return 'vaccineDebate';

  if (RE_UNSAFE_SLEEP.test(b)) return 'unsafeSleepAdvice';
  if (RE_SKIP_NEWBORN.test(b)) return 'skippingNewbornCare';
  if (RE_DOSE.test(b) || RE_ADULT_MED.test(b)) return 'dosingAndSubstances';
  if (RE_EMAIL.test(b) || RE_PHONE.test(b) || RE_ADDRESS.test(b)) return 'personalDetails';
  if (RE_SELLING.test(b)) return 'sellingSomething';
  return '';
}

/* What a verdict actually does. Unknown verdicts hold rather than
   remove, so a rule added carelessly later cannot start deleting
   people's posts. */
export function filterAction(verdict) {
  if (!verdict) return 'live';
  const f = FILTER_FLAGS.list.filter((x) => x.id === verdict)[0];
  return f ? f.action : 'hold';
}

/* Filled in at boot so this file does not have to import across itself.
   See communityRules.js for the list it points at. A plain object
   rather than a let, because the build strips module syntax and an
   exported binding that gets reassigned does not survive that. */
export const FILTER_FLAGS = { list: [] };
export function setFilterFlags(list) {
  FILTER_FLAGS.list = Array.isArray(list) ? list : [];
}

/* How wide the vaccine net is. Set at boot from CR_VACCINE_MODE so
   there is still only 1 line to change. */
export const FILTER_MODE = { vaccine: 'debate' };
export function setFilterMode(vaccine) {
  FILTER_MODE.vaccine = vaccine === 'all' ? 'all' : 'debate';
}

/* The short, specific phrase shown back to somebody in a notice, so it
   says what tripped rather than only which rule. */
export function filterTrigger(verdict) {
  const map = {
    lethalAdvice: 'advice that has hospitalized babies, such as chlorine dioxide, homemade formula or raw milk',
    unsafeSleepAdvice: 'a sleep setup that is not considered safe for a baby',
    skippingNewbornCare: 'telling another parent to decline a newborn treatment',
    dosingAndSubstances: 'a dose or a medicine aimed at somebody else\'s child',
    personalDetails: 'contact details, such as a phone number, an email address or a street address',
    targetedHarassment: 'language aimed at another member',
    spamAndScams: 'repeated links',
    sellingSomething: 'something being sold or promoted',
    childPhoto: 'a photo that may include a child who is not yours',
    possibleMinor: 'something suggesting the account may not belong to an adult',
    namingAnAbuser: 'a named person described as having hurt somebody',
    vaccineDebate: 'the vaccine argument, which this room does not host in either direction',
  };
  return map[verdict] || '';
}

export function filterReason(verdict) {
  const f = FILTER_FLAGS.list.filter((x) => x.id === verdict)[0];
  return f ? f.why : '';
}

/* Which status a new post should carry. The rules check this again on
   arrival, so an app that lied about it would simply be refused.

   A support verdict goes LIVE. That is the whole point of it. */
export function statusFor(body) {
  const a = filterAction(filterVerdict(body));
  if (a === 'remove') return FEED_STATUS.removed;
  if (a === 'hold') return FEED_STATUS.held;
  return FEED_STATUS.live;
}

/* ------------------------------------------------------------------
 * MODERATION
 * Only reachable by an account that has a document in the moderators
 * collection, which can only be created from the Firebase console. An
 * account that could make itself a moderator is not a moderation
 * system.
 * ------------------------------------------------------------------ */
export const MOD_TITLE = 'Needs a look';
export const MOD_EMPTY = 'Nothing needs you right now.';
export const MOD_NOTE =
  'Nobody but you sees this tab, and nothing in the room is waiting on you. Posts go up by '
  + 'themselves. This is only the handful the filter held, and anything people have reported.';

export const MOD_HELD_TITLE = 'Held by the filter';
export const MOD_HELD_NOTE =
  'A dose or a set of contact details. Most of these are fine and go straight up.';

export const MOD_REPORTED_TITLE = 'Reported by somebody';
export const MOD_REPORTED_NOTE =
  'Already up in the room. Taking one down is the only thing that changes that.';

/* ------------------------------------------------------------------
 * PURE HELPERS, so the rules of the room can be tested without a
 * network, a browser, or a Firebase project.
 * ------------------------------------------------------------------ */

/* What actually goes up. Built in one place so no screen can invent its
   own shape, and written as a whitelist rather than a copy of the local
   post, because a copy is how a child id ends up in a public document
   six months from now when somebody adds a field. */
export function feedDocFrom(post, username, uid) {
  return {
    authorUid: uid,
    /* Which room it hangs in. Always present, even when it is the
       empty string meaning the main feed, so a query never has to care
       whether a document predates rooms. */
    group: isGroupId((post && post.group) || '') ? String((post && post.group) || '') : '',
    username: String(username || '').trim(),
    body: String((post && post.text) || '').trim(),
    files: ((post && post.files) || []).map((f) => ({
      url: String(f.url || ''),
      kind: String(f.kind || 'photo'),
    })),
    status: statusFor((post && post.text) || ''),
    /* THE TWO FIELDS THAT MAKE FOR YOU AND TRENDING POSSIBLE.
       tags come out of the body, so nothing is entered twice. band is
       a stage, not an age and certainly not a birthday: seven buckets
       across eighteen years, and it cannot be turned back into a date.
       It is the only thing about a child that leaves the phone, and
       that is the whole reason it is this coarse. */
    tags: parseTags((post && post.text) || ''),
    band: String((post && post.band) || ''),
    at: Number((post && post.at)) || Date.now(),
    localId: String((post && post.id) || ''),
  };
}

/* The last line of defense, checked before anything is sent as well as
   by the rules on arrival. Belt and braces on purpose: this one can
   tell her WHY in a sentence, the rules can only refuse. */
export function feedRefuseReason(doc, post) {
  if (!doc.username) {
    return 'You need a username before you can share anything. Settings has one waiting for you.';
  }
  if (!doc.body && !doc.files.length) {
    return 'There is nothing in this one to share.';
  }
  if (doc.body.length > 4000) {
    return 'That is longer than a post can be here. 4000 characters is the limit.';
  }
  if (post && post.childId) {
    return 'This post is tagged with one of your children, and posts about a child stay on your '
      + 'own profile. Take the tag off if you want to share it.';
  }
  /* Data URLs were the old shape for photos and they can be a megabyte
     each. Anything still carrying one predates Storage. */
  if ((post && (post.photos || []).length)) {
    return 'This post was made before the app could store files properly, so it can only stay on '
      + 'your own profile. A new post with the same photo will share fine.';
  }
  return '';
}

export function statusLine(status) {
  if (status === FEED_STATUS.live) return '';
  if (status === FEED_STATUS.removed) return FEED_REMOVED;
  return FEED_HELD;
}

/* Blocked people are filtered on the reader's own device rather than
   with a query, because a query cannot express "not in this list" and
   because who somebody has blocked is nobody else's business. */
export function visibleFeed(posts, blocked) {
  const dead = {};
  (blocked || []).forEach((uid) => { dead[uid] = true; });
  return (posts || [])
    .filter((p) => p && p.status === FEED_STATUS.live && !dead[p.authorUid])
    .sort((a, b) => (Number(b.at) || 0) - (Number(a.at) || 0));
}

export function countReactions(rows) {
  const out = {};
  (rows || []).forEach((r) => {
    const k = r && r.r;
    if (!k) return;
    out[k] = (out[k] || 0) + 1;
  });
  return out;
}

/**
 * Ready Set Grow: Two parents, one child
 * ------------------------------------------------------------------
 * WHY THIS EXISTS
 * She logs the feed and he does not see it. Every serious parenting
 * app solves this and this one did not, because a child's record was
 * owned outright by the account that made it.
 *
 * WHAT IT DOES NOT DO, ON PURPOSE
 * It does not move anybody's data. A child stays exactly where it was,
 * under the account that created it. Nothing migrates, which means
 * nothing can be lost in a migration. What changes is that a second
 * adult can be granted access to named children.
 *
 * THE DANGEROUS THING THIS IS BUILT AROUND
 * The worst bug this app could ever have is one family reading another
 * family's child. So the grant is never assembled from anything the
 * joining person typed. They present a code, and the security rules
 * themselves copy the child list out of the invite and refuse anything
 * that does not match exactly. The client below is convenience. The
 * rules in firestore.rules are the actual guarantee, and they were
 * written first and tested against twenty seven ways in.
 *
 * WHY CODES RATHER THAN EMAIL INVITES
 * An email invite needs somebody's address, which is a thing to store,
 * a thing to get wrong, and a thing to leak. A code you read out over
 * the phone or send in a text needs none of that, and the person
 * joining proves nothing except that they were given it.
 *
 * PER CHILD, NOT PER ACCOUNT
 * Stetson's dad can be given Stetson without being given Hartlee. This
 * matters more than it sounds. Blended families, separated parents,
 * grandparents who look after one of them on Thursdays. An all or
 * nothing switch would make this feature unusable for most of the
 * families who need it most.
 */

export const SHARE_TITLE = 'Sharing a child';

export const SHARE_SUB = 'Let somebody else see and add to a child, without giving them your account.';

export const SHARE_INTRO =
  'You keep the record. They get to open it, log a feed, mark a milestone, and see everything you '
  + 'see about that child. You choose which children, and you can take it back at any time.';

/* Unambiguous alphabet. No O or 0, no I or 1, no S or 5, because this
   gets read out over the phone at least as often as it gets copied. */
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRTUVWXY2346789';

export const CODE_LENGTH = 10;

export function makeShareCode() {
  let out = '';
  const n = CODE_ALPHABET.length;
  /* Real randomness where the browser has it. The fallback exists so
     the function cannot throw, not because it is good enough. */
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const buf = new Uint32Array(CODE_LENGTH);
    crypto.getRandomValues(buf);
    for (let i = 0; i < CODE_LENGTH; i++) out += CODE_ALPHABET[buf[i] % n];
  } else {
    for (let i = 0; i < CODE_LENGTH; i++) out += CODE_ALPHABET[Math.floor(Math.random() * n)];
  }
  return out;
}

/* Shown in two halves, because ten characters in a row is a thing
   people misread. Stored without the gap. */
export function prettyCode(code) {
  const c = String(code || '').toUpperCase();
  if (c.length !== CODE_LENGTH) return c;
  return c.slice(0, 5) + ' ' + c.slice(5);
}

/* THE CHARACTERS PEOPLE ACTUALLY TYPE INSTEAD.
   The alphabet already leaves out the pairs that look alike, O and 0,
   I and 1, S and 5. That stops a code being generated with an
   ambiguous character in it. It does not stop somebody reading a Q off
   a screen and typing an O, which is exactly what happens, and then
   the app tells them the code is wrong when the code is fine.

   So the ones that were deliberately excluded are mapped back to the
   one character they could possibly have meant. This is safe precisely
   because the excluded ones can never legitimately appear: an O in a
   typed code is always a mistake, and Q is the only thing it can have
   been. */
const CODE_FIXUPS = { O: 'Q', '0': 'Q', I: 'J', '1': 'J', S: '2', '5': '2' };

export function cleanCode(typed) {
  const raw = String(typed || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  let out = '';
  for (let i = 0; i < raw.length && out.length < CODE_LENGTH; i++) {
    const ch = raw[i];
    out += Object.prototype.hasOwnProperty.call(CODE_FIXUPS, ch) ? CODE_FIXUPS[ch] : ch;
  }
  return out;
}

/* Which character is the problem, so the app can say so rather than
   repeating that the code is ten long when it already is. */
export function badCodeChar(typed) {
  const c = cleanCode(typed);
  for (let i = 0; i < c.length; i++) if (CODE_ALPHABET.indexOf(c[i]) === -1) return c[i];
  return '';
}

export function codeLooksRight(typed) {
  const c = cleanCode(typed);
  if (c.length !== CODE_LENGTH) return false;
  for (let i = 0; i < c.length; i++) if (CODE_ALPHABET.indexOf(c[i]) === -1) return false;
  return true;
}

/* Long enough to send it and have them get to it. Short enough that a
   forgotten code in an old text message stops working. */
/* A week rather than two days. The person on the other end of this is
   usually a husband at work or a grandmother who checks her messages
   in the evening, and a code that died overnight was the commonest way
   this failed. The rules cap it at seven days and this sits on that
   cap deliberately. */
export const CODE_HOURS = 168;

export function codeExpiry(now) {
  return (Number(now) || Date.now()) + CODE_HOURS * 60 * 60 * 1000;
}

export function codeLeft(expiresAt, now) {
  const ms = Number(expiresAt || 0) - (Number(now) || Date.now());
  if (ms <= 0) return '';
  const hours = Math.ceil(ms / 3600000);
  if (hours <= 1) return 'Expires within the hour';
  if (hours < 24) return 'Expires in ' + String(hours) + ' hours';
  const days = Math.ceil(hours / 24);
  return days === 1 ? 'Expires tomorrow' : 'Expires in ' + String(days) + ' days';
}

export const SHARE_STEPS = [
  'Pick which children they should see. Not all of them unless you mean all of them.',
  'You get a code. Text it, read it out, write it on a napkin.',
  'They put it into their own Ready Set Grow, under Sharing.',
  'From then on you are both looking at the same child.',
];

export const SHARE_CODE_NOTE =
  'The code works once and stops working after 2 days. Anybody who has it can use it, so send it '
  + 'to the person and not to a group chat.';

export const SHARE_WHAT_THEY_GET = {
  title: 'What they can do',
  can: [
    'See the children you picked, and everything logged about them.',
    'Add logs, mark milestones, and tick off a plan.',
    'Read the guidance and use Willow about those children.',
  ],
  cannot: [
    'See your other children.',
    'See your own logs, your memories, your posts or your check ins.',
    'See anything about you except your first name.',
    'Give anybody else access. Only you can do that.',
    'Delete the child. If they leave, the record stays with you.',
  ],
};

export const SHARE_REVOKE_NOTE =
  'Taking access back is immediate and it does not delete anything they added. Their logs stay on '
  + 'the child, because those happened.';

export const SHARE_LEAVE_NOTE =
  'Leaving removes the child from your app. Nothing about them is deleted, it goes back to being '
  + 'only on the account that owns it.';

export const SHARE_EMPTY_OWNER = 'Nobody else can see your children.';
export const SHARE_EMPTY_JOINED = 'You have not been given access to anybody else’s child.';

/* ------------------------------------------------------------------
   THE LINK

   Typing a ten character code off one phone into another is the part
   that fails, and it failed here for a real husband on a real evening.
   So the code is still there, and nobody should ever have to use it.

   The link carries the code in the address. Tapping it opens the app
   with the invite already in hand: somebody who is signed in is added
   on the spot, and somebody who is not sees why they are being asked
   to make an account before they make it, and is added the moment
   they do.
   ------------------------------------------------------------------ */
export const SHARE_ORIGIN = 'https://readysetgrow-app.com';

export function shareLink(code, origin) {
  return (origin || SHARE_ORIGIN) + '/?join=' + encodeURIComponent(cleanCode(code));
}

export function joinCodeFromUrl(search) {
  const m = String(search || '').match(/[?&]join=([^&]+)/i);
  if (!m) return '';
  let raw = '';
  try { raw = decodeURIComponent(m[1]); } catch (err) { raw = m[1]; }
  const c = cleanCode(raw);
  return codeLooksRight(c) ? c : '';
}

export function shareMessage(ownerName, names, code, origin) {
  const who = String(ownerName || '').trim();
  const kids = (names || []).filter(Boolean);
  const about = kids.length === 0 ? 'our child'
    : (kids.length === 1 ? kids[0] : kids.slice(0, -1).join(', ') + ' and ' + kids[kids.length - 1]);
  return (who ? who + ' wants' : 'Somebody wants') + ' to share ' + about
    + ' with you on Ready Set Grow. Tap this and it sets itself up.\n\n'
    + shareLink(code, origin);
}

export const SHARE_LINK_TITLE = 'Send them the link';
export const SHARE_LINK_NOTE =
  'This is the easy way. Text them the link and tapping it does the rest, so nobody has to read '
  + '10 characters off one phone and type them into another.';
export const SHARE_LINK_BTN = 'Send the link';
export const SHARE_LINK_COPIED = 'Copied. Paste it into a message.';

export const SHARE_INVITED_TITLE = 'You have been invited';
export function shareInvitedLine(ownerName, names) {
  const who = String(ownerName || '').trim();
  const kids = (names || []).filter(Boolean);
  const about = kids.length === 0 ? 'their child'
    : (kids.length === 1 ? kids[0] : kids.slice(0, -1).join(', ') + ' and ' + kids[kids.length - 1]);
  return (who ? who : 'Somebody') + ' wants to share ' + about + ' with you.';
}
export const SHARE_INVITED_SIGNUP =
  'Make an account and you will be added straight away. It is the account that holds the access, '
  + 'which is why there has to be one.';
export const SHARE_INVITED_WORKING = 'Setting that up now.';

export const SHARE_JOIN_TITLE = 'Somebody gave you a code';
export const SHARE_JOIN_HELP = '10 characters. Upper or lower case, the spaces do not matter.';

export const SHARE_ERRORS = {
  shape: 'That is not 10 characters. Check you have the whole thing.',
  badChar: 'There is no letter like that in our codes. Look at it again, they are easy to misread.',
  missing: 'That code does not exist. Check it again, they are easy to mistype.',
  expired: 'That code has expired. Ask them to make you a new one, it takes a second.',
  used: 'That code has already been used. Codes only work once, so ask for a fresh one.',
  own: 'That is your own code. Give it to the other person rather than using it yourself.',
  already: 'You already have access to that child.',
  offline: 'This needs a connection. Try again when you have one.',
  failed: 'That would not go through. Nothing has changed, so it is safe to try again.',
  noAccount: 'Sharing needs an account on both sides, so there is something to share with.',
};

export function shareJoinedLine(ownerName, names) {
  const who = (ownerName || 'They').trim();
  if (!names || !names.length) return 'You are in.';
  if (names.length === 1) return 'You can now see ' + names[0] + ', shared by ' + who + '.';
  const last = names[names.length - 1];
  return 'You can now see ' + names.slice(0, -1).join(', ') + ' and ' + last + ', shared by ' + who + '.';
}

export function sharedWithLine(n) {
  if (!n) return '';
  return n === 1 ? 'Shared with one person' : 'Shared with ' + String(n) + ' people';
}

export default SHARE_TITLE;

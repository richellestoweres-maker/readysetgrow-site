/**
 * Ready Set Grow: The Rooms
 * ------------------------------------------------------------------
 * WHY A FIXED LIST RATHER THAN LET ANYBODY MAKE ONE
 * She chose this and it is the right call for a room this size. An
 * open group system grows fast and finds corners nobody would have
 * thought of, and it also means inheriting every group anybody makes,
 * including the ones that would have to be shut down at eleven at
 * night by the one person who owns the app. A fixed list is moderated
 * by existing at all.
 *
 * It also solves the emptiest problem a new community has. Nine groups
 * with somebody in them beats ninety with nobody, and a room a parent
 * opens to find one post from four months ago is a room she does not
 * come back to.
 *
 * ADDING ONE LATER IS ONE LINE HERE. That is deliberate. When she
 * notices the same conversation happening over and over in the general
 * feed, that conversation has earned a room, and giving it one is a
 * line in this file and nothing else.
 *
 * THE ORDER
 * Not alphabetical. Roughly the order of how likely somebody is to
 * need it at 3am, with the heaviest two last so they are found on
 * purpose rather than scrolled past by somebody having a nice day.
 *
 * ON THE HARD ROOMS
 * Loss and Struggling are in here because leaving them out does not
 * mean those conversations do not happen. It means they happen in the
 * general feed underneath somebody's newborn photos, which serves
 * nobody. They carry a note so a parent knows what she is walking
 * into, and the rest of the app's filter and reporting applies inside
 * them exactly as it does everywhere else.
 *
 * EVERY GROUP IS STILL THE SAME FEED. Posting into one changes which
 * room it hangs in and nothing else: the instant publish, the narrow
 * filter that holds dosing and contact details, the reporting, and the
 * moderator queue all work identically inside a group. There is no
 * second set of rules to keep in step.
 */

/* The id that means "no room in particular". Stored as an empty string
   rather than left off, so every post in the collection has the field
   and a query never has to care about documents written before groups
   existed. */
export const GROUP_GENERAL = '';

export const GROUPS = [
  {
    id: 'nights',
    label: 'The night shift',
    blurb: 'For whoever is up right now.',
    about: 'Cluster feeds, contact naps, the 4am stretch, and the particular loneliness of being the only one awake in the house. Post at any hour. Somebody will be up.',
  },
  {
    id: 'feeding',
    label: 'Feeding',
    blurb: 'Breast, bottle, pump, or all three at once.',
    about: 'Supply, latch, triple feeding, weaning, refusing the bottle, refusing the breast. No side to be on in here. Fed is the whole position.',
  },
  {
    id: 'sleep',
    label: 'Sleep, or the lack of it',
    blurb: 'Naps, regressions, and what finally worked.',
    about: 'What worked for somebody else may not work for you and it is still worth hearing. Nobody here gets told they are making a rod for their own back.',
  },
  {
    id: 'first',
    label: 'First time',
    blurb: 'Nobody is born knowing any of this.',
    about: 'The questions that feel too small or too obvious to ask anywhere else. They are not obvious. Nobody told any of us either.',
  },
  {
    id: 'solo',
    label: 'Doing it on my own',
    blurb: 'Single, solo, or parenting while your partner is away.',
    about: 'For anybody carrying it without another adult in the room, whether that is permanent, temporary, or just how this week is going.',
  },
  {
    id: 'bodies',
    label: 'What happened to my body',
    blurb: 'Recovery, and the parts nobody warned you about.',
    about: 'Healing, hormones, hair, teeth, pelvic floors, and the 6 week appointment that clears you for everything and explains none of it.',
  },
  {
    id: 'needs',
    label: 'Extra needs',
    blurb: 'Diagnoses, waiting lists, therapies and school.',
    about: 'For families whose child needs something the standard advice does not cover. Includes the fight to be believed, which is most of it early on.',
  },
  {
    id: 'big',
    label: 'Bigger kids',
    blurb: 'School age, tweens and teenagers.',
    about: 'The years the baby books stop at. Friendships, phones, homework, attitude, and the strange grief of them not needing you the same way.',
  },
  {
    id: 'blended',
    label: 'Step, adoptive and kinship',
    blurb: 'Families that came together another way.',
    about: 'Step parenting, adoption, fostering, and grandparents raising grandchildren. Different questions, and almost nowhere that asks them.',
  },
  {
    id: 'struggling',
    label: 'Struggling',
    blurb: 'For the days you are not okay.',
    about: 'Postpartum depression and anxiety, rage, intrusive thoughts, resenting it, wanting out. None of that makes you a bad parent and all of it is more common than anyone says.',
    heavy: true,
    note: 'This room holds hard things. If you are in danger of hurting yourself or your child, please do not post and wait. Call or text 988, any hour, free.',
  },
  {
    id: 'loss',
    label: 'Loss',
    blurb: 'Miscarriage, stillbirth, and the babies who are not here.',
    about: 'A room for the grief that everybody expects you to be over. Rainbow pregnancies and the fear that comes with them belong here too.',
    heavy: true,
    note: 'This room holds loss. Please read it when you have the room for it, and please be gentle with the people in it.',
  },
];

export const GROUPS_TITLE = 'Rooms';

export const GROUPS_INTRO =
  'The same community, sorted so you can find the people having your conversation rather than '
  + 'scrolling past everybody else having theirs.';

export const GROUP_ALL_LABEL = 'Everything';

export const GROUP_PICK_LABEL = 'Which room should this go in?';

export const GROUP_PICK_NOTE =
  'Optional. Leaving it off puts it in the main feed where everybody sees it.';

export const GROUP_EMPTY =
  'Nothing in this room yet. Yours would be the first, which somebody has to be.';

/* A post written before rooms existed, or written without picking one,
   sits in the general feed. Said out loud on the screen rather than
   left to look like a bug. */
export const GROUP_GENERAL_LABEL = 'No particular room';

export function groupById(id) {
  return GROUPS.filter((g) => g.id === id)[0] || null;
}

export function groupLabel(id) {
  const g = groupById(id);
  return g ? g.label : '';
}

export function isGroupId(id) {
  return id === GROUP_GENERAL || !!groupById(id);
}

/* Filtered here rather than with a query on purpose.

   A where on group alongside the where on status and the order on
   time needs a composite index in the Firebase console, which is a
   thing somebody has to go and create by hand, and forgetting means
   every room is empty with an error nobody sees. One page of the feed
   is forty posts, so sorting them in the browser costs nothing and
   needs nothing set up. When there is enough traffic that a quiet room
   falls off the end of that page, that is the moment to add the index,
   and not before. */
export function inGroup(posts, groupId) {
  if (groupId === null || groupId === undefined) return posts || [];
  return (posts || []).filter((p) => String((p && p.group) || '') === String(groupId));
}

export function groupCounts(posts) {
  const out = {};
  (posts || []).forEach((p) => {
    const g = String((p && p.group) || '');
    out[g] = (out[g] || 0) + 1;
  });
  return out;
}

export const GROUP_IDS = GROUPS.map((g) => g.id);

export default GROUPS;

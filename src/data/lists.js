/**
 * Ready Set Grow: shared lists
 * ------------------------------------------------------------------
 * The second thing a family calendar product is actually used for,
 * after the calendar itself. Groceries, the thing to pack, what to
 * ask at the appointment, what the 6 year old wants for their
 * birthday.
 *
 * WHY THESE ARE SHARED AND THE MEMORIES ARE NOT
 * She drew that line herself and it is the right one. A memory is
 * hers, privately, and the app enforces that hard. A shopping list is
 * the opposite: it is useless unless the other adult in the house can
 * see it from the shop. So lists sync at the household level, same as
 * the chore chart and the calendar, and nothing on them ever goes near
 * the community.
 *
 * WHAT A LIST IS NOT
 * It is not a task manager. No assignees, no due dates, no priorities,
 * no projects. Those exist already in this app: a job that belongs to
 * a person on a day is a chore, and a thing that happens at a time is
 * a calendar entry. A list is the flat, unordered, tickable kind,
 * which is the kind families actually keep. Adding structure to it is
 * how a grocery list turns into something nobody opens.
 *
 * TICKING IS NOT DELETING
 * A ticked item goes grey and drops to the bottom, it does not vanish.
 * Half the value of a grocery list is seeing what you already put in
 * the trolley. Clearing the ticked ones is a deliberate press.
 */

export const LISTS_TITLE = 'Lists';

export const LISTS_SUB =
  'Groceries, what to pack, what to ask at the appointment. Shared with everybody in the house and '
  + 'with nobody outside it.';

export const LISTS_EMPTY = {
  title: 'No lists yet',
  body: 'Start with the one you would otherwise be keeping in your head or in a text message to '
    + 'yourself. Groceries is the usual first one.',
};

export const LISTS_EMPTY_ONE = 'Nothing on this list yet.';

/* ------------------------------------------------------------------
   THE STARTERS

   Not templates to fill in, which nobody does. These are 4 lists a
   family either has or wishes it had, offered with their first few
   items already on them so the list is useful 2 seconds after it is
   made rather than being another empty box asking for work.

   The items are starting points and every one of them is deletable.
   ------------------------------------------------------------------ */
export const LIST_STARTERS = [
  {
    id: 'grocery',
    name: 'Groceries',
    icon: 'bag',
    hint: 'The one everybody needs. Add as you run out rather than the night before.',
    items: ['Milk', 'Bread', 'Eggs', 'Nappies or pull ups', 'Fruit'],
  },
  {
    id: 'ask',
    name: 'Ask at the appointment',
    icon: 'note',
    hint: 'Everything you think of at 2am and forget in the room. Worth more than you expect.',
    items: ['The thing I keep meaning to mention', 'Is this normal for their age',
      'Anything about sleep'],
  },
  {
    id: 'pack',
    name: 'What to pack',
    icon: 'bag',
    hint: 'For a day out, a night away, or the hospital. Keep it and reuse it.',
    items: ['Spare clothes', 'Snacks', 'Water', 'Something to do in the car'],
  },
  {
    id: 'wish',
    name: 'Wish list',
    icon: 'star',
    hint: 'What they actually want, kept somewhere you can find it in December.',
    items: [],
  },
];

export const LISTS_START_HELP =
  'Pick one to start with, or make your own. Everything on them can be changed or deleted.';

/* ------------------------------------------------------------------
   WHAT A LIST CAN BE ABOUT

   The same who as the calendar, because a list for one child's
   appointment and a list for the house are different things and the
   colour should say which at a glance.
   ------------------------------------------------------------------ */
export const LIST_NEW_NAME = 'What is this list for';

export const LIST_NEW_PLACEHOLDER = 'Groceries, party, school run';

export const LIST_ADD_PLACEHOLDER = 'Add something';

export const LIST_TICKED_NOTE =
  'Ticked things drop to the bottom and stay there until you clear them, so you can see what you '
  + 'already have.';

export const LIST_CLEAR = 'Clear the ticked ones';

export const LIST_DELETE_ASK = 'Delete this whole list and everything on it. This cannot be undone.';

/* A list the shop needs and a list the house needs read differently,
   so the count says which kind of number it is. */
export function listCountLine(items) {
  const all = (items || []).length;
  if (!all) return 'Nothing on it yet';
  const left = (items || []).filter((x) => !x.done).length;
  if (!left) return 'All ' + all + ' done';
  return left + ' to go' + (all - left ? ', ' + (all - left) + ' done' : '');
}

/* Ticked items sink. Within each half, the order they were added,
   because a shopping list that reshuffles itself while you are in the
   shop is maddening. */
export function listSort(items) {
  return (items || []).slice().sort((a, b) => {
    if (!!a.done !== !!b.done) return a.done ? 1 : -1;
    return (Number(a.at) || 0) - (Number(b.at) || 0);
  });
}

export const LISTS_PRIVACY =
  'Lists are shared with everybody signed in to this house and with nobody else. They are never '
  + 'posted, never shown in the community, and nothing on them reaches another family.';

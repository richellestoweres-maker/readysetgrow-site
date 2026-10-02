/**
 * Ready Set Grow: what is for dinner
 * ------------------------------------------------------------------
 * The fourth thing she asked for off Skylight, and the one that turns
 * out to be the smallest piece of code and the biggest change to how
 * the week reads.
 *
 * WHY IT IS ONE LINE A DAY AND NOT A MEAL PLANNER
 * Meal planning apps fail the same way every time. They ask for
 * breakfast, lunch, dinner and snacks, seven days out, with portions,
 * and a week later nobody has filled one in. The thing families
 * actually keep is a single word per evening, written on a whiteboard
 * on the fridge, answering the only question anybody asks at 4pm.
 *
 * So that is what this is. One short line per day, sitting across the
 * top of that day on the calendar, where anybody in the house can see
 * it without opening anything.
 *
 * WHY IT SITS ON THE CALENDAR AND NOT IN ITS OWN TAB
 * Because dinner is not an appointment but it is a thing that happens
 * at a time on a day, and the week is where the family already looks.
 * A separate meals tab is another place to remember to go.
 *
 * WHAT IT DELIBERATELY DOES NOT DO
 * No nutrition scoring. No calorie counts. No portion sizes, no
 * macros, nothing that could read as a judgement on what a family
 * eats. This app does not get to have an opinion about somebody's
 * dinner, and the moment a meal field has a traffic light next to it
 * that is exactly what it has.
 *
 * It also does not nag. A day with nothing on it says nothing.
 */

export const MEAL_TITLE = 'Dinner';

export const MEAL_SUB =
  'One line a day, so everybody in the house can see what is happening at 6 without asking.';

export const MEAL_PLACEHOLDER = 'What is for dinner';

export const MEAL_HELP =
  'Short is better. Tacos, leftovers, whatever is in the freezer. Nobody needs a recipe here, they '
  + 'need to stop asking.';

export const MEAL_CLEAR = 'Clear this day';

export const MEAL_MAX = 40;

/* ------------------------------------------------------------------
   THE QUICK ONES

   Not a recipe library, which would be a different app. These are the
   handful of answers that cover most evenings in most houses, offered
   as one tap each so putting dinner on the calendar costs nothing.

   Leftovers and Breakfast for dinner are on the list on purpose. A
   meal feature that only lets you enter proper cooked meals quietly
   tells a tired parent that their actual Tuesday does not count.
   ------------------------------------------------------------------ */
export const MEAL_QUICK = [
  'Tacos',
  'Pasta',
  'Pizza',
  'Chicken and veg',
  'Soup',
  'Stir fry',
  'Sandwiches',
  'Breakfast for dinner',
  'Leftovers',
  'Takeaway',
  'Out',
];

export const MEAL_QUICK_NOTE = 'Tap one, or write your own.';

/* The meal bar borrows the house colour rather than a person colour,
   because dinner belongs to the whole table. Kept here so the one
   place that decides is next to everything else about meals. */
export const MEAL_COLOR_ID = 'clay';

export function mealClean(text) {
  return String(text || '').replace(/\s+/g, ' ').trim().slice(0, MEAL_MAX);
}

/* Stored as a flat map of date to text so a day with nothing on it
   costs nothing and clearing one is a delete rather than a tombstone.
   Meals are not worth syncing conflict resolution for: last write
   wins, and the worst case is somebody retypes one word. */
export function mealOn(map, date) {
  if (!map || typeof map !== 'object') return '';
  return mealClean(map[date] || '');
}

export function mealSet(map, date, text) {
  const out = (map && typeof map === 'object') ? map : {};
  const v = mealClean(text);
  if (v) out[date] = v;
  else delete out[date];
  return out;
}

/* Anything older than a fortnight is of no use to anybody and a map
   that grows forever is a store that eventually will not save. */
export function mealTrim(map, todayDate, keepDays = 120) {
  if (!map || typeof map !== 'object') return {};
  const out = {};
  const cut = new Date(todayDate + 'T00:00:00');
  cut.setDate(cut.getDate() - keepDays);
  const cutKey = cut.getFullYear() + '-' + String(cut.getMonth() + 1).padStart(2, '0')
    + '-' + String(cut.getDate()).padStart(2, '0');
  Object.keys(map).forEach((d) => { if (d >= cutKey) out[d] = map[d]; });
  return out;
}

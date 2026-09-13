/**
 * Ready Set Grow: Life Stages
 * ------------------------------------------------------------------
 * The product follows one child from pregnancy to life launch, roughly
 * eighteen years, on a single continuous profile. That only works if
 * the app knows what stage a child is in and shifts accordingly.
 *
 * This file is the definition of those stages. It is pure data. It has
 * no imports and no side effects, so adding it cannot break anything.
 *
 * The stage ids here are matched by:
 *   src/utils/age.js       (STAGE_BOUNDS, getStageId)
 *   src/theme/theme.js     (stageAccents)
 *
 * If you add or rename a stage, update all three.
 */

/**
 * growth: which point of the sprout to tree metaphor this stage sits at.
 * The same character grows with the child rather than being redrawn.
 *
 * logTypes: which logs make sense at this stage. A newborn screen should
 * not offer a homework log and a fourteen year old should not offer a
 * diaper log. Screens read this instead of showing everything always.
 *
 * suggestedTabs: a proposal only. Nothing reads this yet. It is here so
 * the navigation conversation has something concrete to argue with.
 */

export const STAGES = [
  {
    id: 'pregnancy',
    label: 'Pregnancy',
    shortLabel: 'Expecting',
    minMonths: null,
    maxMonths: 0,
    growth: 'seed',
    tagline: 'Getting ready for what comes next.',
    focusAreas: [
      'Pregnancy timeline',
      'Preparing for baby',
      'Birth preparation',
      'Feeding education',
      'Postpartum preparation',
      'Partner preparation',
    ],
    logTypes: ['appointments', 'symptoms', 'movement', 'weight', 'notes'],
    suggestedTabs: ['Home', 'Prepare', 'Learn', 'Memories', 'More'],
  },
  {
    id: 'newborn',
    label: 'Newborn',
    shortLabel: 'Newborn',
    minMonths: 0,
    maxMonths: 3,
    ageDescription: 'Birth to 3 months',
    growth: 'sprouting-seed',
    tagline: 'Feeding, resting, and finding your rhythm.',
    focusAreas: [
      'Feeding',
      'Sleep',
      'Diapers',
      'Tummy time',
      'Bonding',
      'Parent recovery',
      'Safety',
      'Pediatric appointments',
    ],
    logTypes: [
      'breastfeeding',
      'bottle',
      'pumping',
      'diapers',
      'sleep',
      'tummyTime',
      'weight',
      'symptoms',
      'medications',
      'milestones',
      'notes',
    ],
    suggestedTabs: ['Home', 'Today', 'Logs', 'Learn', 'More'],
  },
  {
    id: 'infant',
    label: 'Infant',
    shortLabel: 'Infant',
    minMonths: 3,
    maxMonths: 12,
    ageDescription: '3 to 12 months',
    growth: 'sprout',
    tagline: 'Rolling, reaching, and finding their voice.',
    focusAreas: [
      'Milestones',
      'First foods',
      'Sleep',
      'Babbling and early communication',
      'Sensory play',
      'Motor development',
      'Attachment',
      'Baby proofing',
    ],
    logTypes: [
      'breastfeeding',
      'bottle',
      'pumping',
      'solids',
      'diapers',
      'sleep',
      'symptoms',
      'medications',
      'milestones',
      'notes',
    ],
    suggestedTabs: ['Home', 'Today', 'Logs', 'Learn', 'More'],
  },
  {
    id: 'toddler',
    label: 'Toddler',
    shortLabel: 'Toddler',
    minMonths: 12,
    maxMonths: 36,
    ageDescription: '1 to 3 years',
    growth: 'young-plant',
    tagline: 'Big feelings, big independence, small body.',
    focusAreas: [
      'Walking and movement',
      'Speech',
      'Independence',
      'Tantrums',
      'Emotional development',
      'Feeding',
      'Sleep',
      'Potty readiness',
      'Routines',
      'Safety',
    ],
    logTypes: [
      'meals',
      'sleep',
      'potty',
      'behavior',
      'mood',
      'symptoms',
      'medications',
      'milestones',
      'notes',
    ],
    suggestedTabs: ['Home', 'Plan', 'Logs', 'Learn', 'More'],
  },
  {
    id: 'preschool',
    label: 'Preschool',
    shortLabel: 'Preschool',
    minMonths: 36,
    maxMonths: 60,
    ageDescription: '3 to 5 years',
    growth: 'leafy-plant',
    tagline: 'Learning how to feel, share, and figure things out.',
    focusAreas: [
      'Emotional regulation',
      'Behavior',
      'Pretend play',
      'Social skills',
      'Language',
      'Early literacy',
      'Early math',
      'Independence',
      'Life skills',
    ],
    logTypes: [
      'meals',
      'sleep',
      'potty',
      'behavior',
      'mood',
      'symptoms',
      'medications',
      'milestones',
      'reading',
      'notes',
    ],
    suggestedTabs: ['Home', 'Plan', 'Learn', 'Logs', 'More'],
  },
  {
    id: 'earlyElementary',
    label: 'Early Elementary',
    shortLabel: 'K to 2nd',
    minMonths: 60,
    maxMonths: 96,
    ageDescription: 'Kindergarten to 2nd grade',
    growth: 'growing-plant',
    tagline: 'Reading, friendships, and learning together.',
    focusAreas: [
      'Phonics and reading',
      'Handwriting',
      'Math foundations',
      'Science and nature',
      'Emotional regulation',
      'Friendships',
      'Independence',
      'Chores and responsibility',
    ],
    logTypes: [
      'mood',
      'sleep',
      'behavior',
      'meals',
      'reading',
      'chores',
      'symptoms',
      'medications',
      'notes',
    ],
    suggestedTabs: ['Home', 'Learn', 'Plan', 'Logs', 'More'],
  },
  {
    id: 'upperElementary',
    label: 'Upper Elementary',
    shortLabel: '3rd to 5th',
    minMonths: 96,
    maxMonths: 132,
    ageDescription: '3rd to 5th grade',
    growth: 'sapling',
    tagline: 'Bigger ideas and more of their own opinions.',
    focusAreas: [
      'Reading comprehension',
      'Writing',
      'Multiplication and fractions',
      'Science',
      'Social studies',
      'Organization',
      'Money basics',
      'Goal setting',
    ],
    logTypes: [
      'mood',
      'sleep',
      'behavior',
      'reading',
      'homework',
      'chores',
      'symptoms',
      'medications',
      'notes',
    ],
    suggestedTabs: ['Home', 'Learn', 'Plan', 'Progress', 'More'],
  },
  {
    id: 'middleSchool',
    label: 'Middle School',
    shortLabel: '6th to 8th',
    minMonths: 132,
    maxMonths: 168,
    ageDescription: '6th to 8th grade',
    growth: 'tree',
    tagline: 'More independence, more to figure out.',
    focusAreas: [
      'Pre algebra',
      'Essay writing',
      'Science foundations',
      'World history',
      'Executive function',
      'Puberty and body changes',
      'Peer relationships',
      'Digital literacy',
      'Career exploration',
    ],
    logTypes: ['mood', 'sleep', 'assignments', 'goals', 'chores', 'symptoms', 'medications', 'notes'],
    suggestedTabs: ['Home', 'Learn', 'Study', 'Goals', 'More'],
  },
  {
    id: 'teen',
    label: 'Teen',
    shortLabel: '9th to 12th',
    minMonths: 168,
    maxMonths: 216,
    ageDescription: '9th to 12th grade',
    growth: 'branching-tree',
    tagline: 'Building the skills that come next.',
    focusAreas: [
      'High school academics',
      'Study skills',
      'Personal finance',
      'Life skills',
      'Career and college planning',
      'Relationships',
      'Mental health and stress',
      'Driving and transportation',
      'Work and responsibility',
    ],
    logTypes: ['mood', 'sleep', 'assignments', 'goals', 'work', 'symptoms', 'medications', 'notes'],
    suggestedTabs: ['Home', 'Learn', 'Study', 'Goals', 'More'],
  },
  {
    id: 'lifeLaunch',
    label: 'Life Launch',
    shortLabel: 'Life Launch',
    minMonths: 216,
    maxMonths: null,
    ageDescription: '18 and beyond',
    growth: 'blooming-landscape',
    tagline: 'Ready for what comes next.',
    focusAreas: [
      'Money and budgeting',
      'Career and education',
      'Home and independent living',
      'Health and wellness',
      'Transportation',
      'Important documents',
      'Communication',
      'Goals and next steps',
    ],
    logTypes: ['goals', 'budget', 'appointments', 'documents', 'notes'],
    suggestedTabs: ['Home', 'Money', 'Career', 'Life Skills', 'More'],
  },
];

/* ------------------------------------------------------------------
 * THE GROWTH METAPHOR
 *
 * One character, ten states. The sprout in your mockups is the same
 * character at every stage, which means it becomes a progress indicator
 * and an emotional payoff rather than just decoration.
 * ------------------------------------------------------------------ */

export const GROWTH_STATES = [
  { id: 'seed', label: 'Seed', order: 0, description: 'A seed resting in soil, not yet sprouted.' },
  { id: 'sprouting-seed', label: 'Sprouting', order: 1, description: 'The seed cracks open, one small leaf appears.' },
  { id: 'sprout', label: 'Sprout', order: 2, description: 'A short stem with two rounded leaves.' },
  { id: 'young-plant', label: 'Young plant', order: 3, description: 'Standing upright, a few more leaves.' },
  { id: 'leafy-plant', label: 'Leafy plant', order: 4, description: 'Fuller, with a clear stem and several leaves.' },
  { id: 'growing-plant', label: 'Growing plant', order: 5, description: 'Taller than it is wide, starting to look sturdy.' },
  { id: 'sapling', label: 'Sapling', order: 6, description: 'A young trunk with the first real branches.' },
  { id: 'tree', label: 'Tree', order: 7, description: 'A recognizable tree, simple and strong.' },
  { id: 'branching-tree', label: 'Branching tree', order: 8, description: 'Wider canopy, more branches, more directions.' },
  { id: 'blooming-landscape', label: 'Blooming landscape', order: 9, description: 'The tree in a landscape, roots and horizon together.' },
];

/* ------------------------------------------------------------------
 * LOOKUP HELPERS
 * All are safe to call with unknown values.
 * ------------------------------------------------------------------ */

/** Returns the full stage object for an id, or null. */
export function getStage(stageId) {
  if (!stageId) return null;
  return STAGES.find((s) => s.id === stageId) || null;
}

/** Human readable stage label, safe for direct rendering. */
export function getStageLabel(stageId) {
  const stage = getStage(stageId);
  return stage ? stage.label : '';
}

/** Which growth visual this stage uses, for example 'leafy-plant'. */
export function getGrowthState(stageId) {
  const stage = getStage(stageId);
  return stage ? stage.growth : 'sprout';
}

/** The growth state object, including its order in the sequence. */
export function getGrowthDetail(stageId) {
  const growth = getGrowthState(stageId);
  return GROWTH_STATES.find((g) => g.id === growth) || GROWTH_STATES[2];
}

/**
 * Which log types belong on screen for this stage.
 * Screens should call this rather than rendering every log type always,
 * because offering a diaper log to a teenager is the fastest way to make
 * the app feel like it was not built for them.
 */
export function getLogTypesForStage(stageId) {
  const stage = getStage(stageId);
  return stage ? stage.logTypes : [];
}

/** True if a specific log type should be offered at this stage. */
export function isLogTypeAvailable(stageId, logType) {
  return getLogTypesForStage(stageId).includes(logType);
}

/** The stage that comes after this one, or null at the end. */
export function getNextStage(stageId) {
  const index = STAGES.findIndex((s) => s.id === stageId);
  if (index === -1 || index === STAGES.length - 1) return null;
  return STAGES[index + 1];
}

/** Every stage id in order, useful for pickers and onboarding. */
export const STAGE_IDS = STAGES.map((s) => s.id);

export default STAGES;

/**
 * Ready Set Grow: Design System
 * ------------------------------------------------------------------
 * Single source of truth for color, type, spacing, radius and shadow.
 *
 * WHY THIS FILE EXISTS
 * Every screen should pull its styling from here instead of writing raw
 * hex codes inline. That way, when the app matures for older kids (the
 * teen experience should not look like an enlarged preschool app), we
 * change values in one file instead of hunting through every screen.
 *
 * HOW TO USE IT
 *   import { theme } from '../theme/theme';
 *   <View style={{ backgroundColor: theme.colors.cream }} />
 *
 * Nothing in this file has side effects. Importing it cannot break
 * anything that already works.
 */

/* ------------------------------------------------------------------
 * COLOR
 * Pulled from the mockups. The palette is deliberately narrow so the
 * app reads as calm and premium rather than busy.
 * ------------------------------------------------------------------ */

const palette = {
  // Backgrounds, the warm cream base seen behind every screen
  cream: '#F7F5EF',
  creamDeep: '#EFEBE1',
  creamShadow: '#E8E3D6',

  // Card and surface colors
  surface: '#FFFFFF',
  surfaceAlt: '#FBFAF6',
  surfaceSunken: '#F2EFE6',

  // The sage green that carries the brand
  primary: '#7C9068',
  primaryPressed: '#6B7E58',
  primaryDeep: '#4A6741',
  primaryInk: '#3C5435',

  // Pale sage used for chips, icon circles and progress tracks
  leafPale: '#DCE4D2',
  leafWash: '#EAEFE2',
  leafTint: '#F1F4EB',

  // Warm taupe used for the handwritten script accents
  taupe: '#A08E7B',
  taupeDeep: '#82705E',
  taupeWash: '#EDE7DE',

  // Soft blush, used sparingly for hearts and gentle emotional accents
  blush: '#D9B8AC',
  blushWash: '#F0E3DE',

  // Text
  ink: '#2C3126',
  body: '#4E5447',
  muted: '#8A9080',
  faint: '#AEB3A5',
  onPrimary: '#FFFFFF',

  // Lines and dividers
  border: '#E5E1D4',
  borderSoft: '#EFEBE0',

  // Status colors, kept muted so they never feel clinical or alarming
  positive: '#6F8C5E',
  attention: '#C99A5B',
  concern: '#B5705C',
  info: '#6E8794',

  transparent: 'transparent',
};

/* ------------------------------------------------------------------
 * MILESTONE STATUS COLORS
 * Milestone statuses must never read as pass or fail. These are all
 * gentle and none of them are red.
 * ------------------------------------------------------------------ */

const milestoneStatus = {
  notYet: { label: 'Not yet', color: '#AEB3A5', background: '#F2F1EC' },
  emerging: { label: 'Emerging', color: '#C99A5B', background: '#F7EFE2' },
  sometimes: { label: 'Doing sometimes', color: '#8AA06F', background: '#EEF2E7' },
  mastered: { label: 'Mastered', color: '#6F8C5E', background: '#E7EFE0' },
  unsure: { label: 'Unsure', color: '#6E8794', background: '#E9EEF0' },
};

/* ------------------------------------------------------------------
 * TYPOGRAPHY
 *
 * The mockups pair a serif display face with a clean sans for body copy
 * and a handwritten script for the small decorative phrases.
 *
 * IMPORTANT: React Native does not ship with these fonts. Until custom
 * fonts are loaded, the fallbacks below render correctly on both iOS and
 * Android, so nothing will look broken. When you are ready to load real
 * fonts, change only the three family values here.
 * ------------------------------------------------------------------ */

import { Platform } from 'react-native';

/**
 * FONT NAMES
 *
 * These strings are the names the fonts register under once loaded in
 * App.js. If a font fails to load, React Native silently falls back to
 * the system face rather than crashing, which is why FALLBACK exists and
 * why nothing here is load bearing.
 *
 * Playfair Display is the high contrast serif in the mockups.
 * Inter is the clean sans for everything a parent actually reads.
 * Caveat is the handwritten face for the short decorative phrases.
 */
const FALLBACK = {
  serif: Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia' }),
  sans: Platform.select({ ios: 'System', android: 'sans-serif', default: 'System' }),
  script: Platform.select({ ios: 'Snell Roundhand', android: 'cursive', default: 'cursive' }),
};

const fontFamily = {
  display: 'PlayfairDisplay_600SemiBold',
  displayRegular: 'PlayfairDisplay_400Regular',
  displayBold: 'PlayfairDisplay_700Bold',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemi: 'Inter_600SemiBold',
  bodyBold: 'Inter_700Bold',
  script: 'Caveat_600SemiBold',
  fallback: FALLBACK,
};

const typography = {
  fontFamily,

  // Screen title, for example "Memories" or "Today's Plan"
  screenTitle: {
    fontFamily: fontFamily.display,
    fontSize: 34,
    lineHeight: 41,
    color: palette.ink,
  },
  // Large greeting, for example "Good Morning, Richelle"
  greeting: {
    fontFamily: fontFamily.display,
    fontSize: 27,
    lineHeight: 34,
    color: palette.ink,
  },
  // Section heading inside a screen, for example "Support Lenses"
  sectionTitle: {
    fontFamily: fontFamily.display,
    fontSize: 21,
    lineHeight: 28,
    color: palette.ink,
  },
  // Card heading
  cardTitle: {
    fontFamily: fontFamily.bodySemi,
    fontSize: 17,
    lineHeight: 23,
    color: palette.ink,
  },
  // Standard reading text
  body: {
    fontFamily: fontFamily.body,
    fontSize: 15,
    lineHeight: 22,
    color: palette.body,
  },
  // Supporting text under a card title
  subtle: {
    fontFamily: fontFamily.body,
    fontSize: 13.5,
    lineHeight: 20,
    color: palette.muted,
  },
  // All caps eyebrow label, for example "MORNING ACTIVITY"
  eyebrow: {
    fontFamily: fontFamily.bodySemi,
    fontSize: 11,
    lineHeight: 15,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    color: palette.muted,
  },
  // Button text
  button: {
    fontFamily: fontFamily.bodySemi,
    fontSize: 16,
    lineHeight: 21,
  },
  // Pill and chip text
  chip: {
    fontFamily: fontFamily.bodyMedium,
    fontSize: 13,
    lineHeight: 18,
  },
  // The decorative handwritten phrases in the corners
  accentScript: {
    fontFamily: fontFamily.script,
    fontSize: 16,
    lineHeight: 22,
    color: palette.taupe,
  },
  // A quoted parent script, meant to be read out loud
  quote: {
    fontFamily: fontFamily.display,
    fontSize: 18,
    lineHeight: 27,
    color: palette.primaryInk,
  },
};

/* ------------------------------------------------------------------
 * SPACING
 * A 4 point scale. Use these instead of typing numbers directly so
 * rhythm stays consistent across screens.
 * ------------------------------------------------------------------ */

const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 44,
  screenX: 20, // standard left and right screen padding
};

/* ------------------------------------------------------------------
 * RADIUS
 * ------------------------------------------------------------------ */

const radius = {
  sm: 10,
  md: 16,
  card: 22,
  lg: 28,
  pill: 999,
};

/* ------------------------------------------------------------------
 * SHADOW
 * Soft and low contrast. Heavy shadows make the app feel cheap.
 * ------------------------------------------------------------------ */

const shadow = {
  none: {},
  card: {
    shadowColor: '#6B6550',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 2,
  },
  raised: {
    shadowColor: '#6B6550',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 4,
  },
  button: {
    shadowColor: '#4A6741',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 3,
  },
};

/* ------------------------------------------------------------------
 * ACCESSIBILITY
 * Minimum tap target is 44 points, which is the Apple and Android
 * guideline. Any pressable smaller than this needs a hitSlop.
 * ------------------------------------------------------------------ */

const a11y = {
  minTapTarget: 44,
  minTapSlop: { top: 8, bottom: 8, left: 8, right: 8 },
  // Multiply font sizes by the user's setting, capped so layouts survive
  maxFontScale: 1.6,
};

/* ------------------------------------------------------------------
 * STAGE ACCENTS
 *
 * The interface should mature as the child grows. Rather than building
 * separate themes, each stage carries a small set of overrides. The
 * brand stays recognizable, the feel changes.
 *
 * The stage ids here match src/data/stages.js.
 * ------------------------------------------------------------------ */

const stageAccents = {
  pregnancy:        { accent: '#A08E7B', surface: palette.surface, cornerArt: 'heavy', displayScale: 1.0 },
  newborn:          { accent: '#8FA57C', surface: palette.surface, cornerArt: 'heavy', displayScale: 1.0 },
  infant:           { accent: '#8FA57C', surface: palette.surface, cornerArt: 'heavy', displayScale: 1.0 },
  toddler:          { accent: '#7C9068', surface: palette.surface, cornerArt: 'heavy', displayScale: 1.0 },
  preschool:        { accent: '#7C9068', surface: palette.surface, cornerArt: 'heavy', displayScale: 1.0 },
  earlyElementary:  { accent: '#7C9068', surface: palette.surface, cornerArt: 'medium', displayScale: 0.97 },
  upperElementary:  { accent: '#6F8C5E', surface: palette.surface, cornerArt: 'medium', displayScale: 0.95 },
  middleSchool:     { accent: '#5F7350', surface: palette.surfaceAlt, cornerArt: 'light', displayScale: 0.92 },
  teen:             { accent: '#4A6741', surface: palette.surfaceAlt, cornerArt: 'none', displayScale: 0.9 },
  lifeLaunch:       { accent: '#3C5435', surface: palette.surfaceAlt, cornerArt: 'none', displayScale: 0.9 },
};

/**
 * Returns the theme with stage specific accents merged in.
 * Safe to call with an unknown or missing stage id, it falls back to
 * the preschool look rather than throwing.
 */
function themeForStage(stageId) {
  const accents = stageAccents[stageId] || stageAccents.preschool;
  return {
    ...theme,
    stageId: stageId || 'preschool',
    colors: { ...palette, accent: accents.accent, stageSurface: accents.surface },
    cornerArt: accents.cornerArt,
    displayScale: accents.displayScale,
  };
}

/* ------------------------------------------------------------------
 * DECORATIVE BLOBS
 * The soft organic shapes behind the corners of the mockups. Keeping the
 * values here rather than inside components means the whole decorative
 * layer can be toned down for older stages in one place.
 * ------------------------------------------------------------------ */

const decoration = {
  blobPale: '#EAEDE0',
  blobLeaf: '#DCE4D2',
  blobCream: '#F0EDE3',
  blobBlush: '#F2E7E1',
  leafOutline: '#CBD7BE',
};

const theme = {
  colors: palette,
  decoration,
  milestoneStatus,
  typography,
  spacing,
  radius,
  shadow,
  a11y,
  stageAccents,
};

export { theme, palette, typography, spacing, radius, shadow, a11y, milestoneStatus, stageAccents, themeForStage, decoration, FALLBACK };
export default theme;

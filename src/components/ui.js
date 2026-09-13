/**
 * Ready Set Grow: Shared UI
 * ------------------------------------------------------------------
 * Every visual piece the screens are built from, in one file.
 *
 * WHY ONE FILE
 * Twelve tiny component files means twelve imports at the top of every
 * screen and twelve places to look when something is off. One file means
 * one import line and one place to change how a card looks everywhere.
 * If this grows past a few hundred lines it should be split, and that is
 * an easy change to make later.
 *
 * Nothing here holds state or knows about navigation. These are shapes
 * and colors, so they can be reused anywhere without surprises.
 */

import React from 'react';
import {
  View, Text, Pressable, StyleSheet, ScrollView, Platform,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import Svg, { Circle, Ellipse, Path, G, Defs, ClipPath } from 'react-native-svg';

import { theme, decoration } from '../theme/theme';

const C = theme.colors;
const F = theme.typography.fontFamily;

/* ------------------------------------------------------------------
 * TEXT
 * ------------------------------------------------------------------ */

/**
 * Custom fonts and fontWeight do not mix.
 *
 * Once a real font file is loaded, adding fontWeight on top makes Android
 * synthesize a fake bold, which looks smeared next to the real weights.
 * So instead of hunting down every inline fontWeight in every screen, this
 * reads the weight off whatever style was passed, swaps in the matching
 * font file, and strips the fontWeight before it reaches the Text.
 *
 * That means screens can keep writing fontWeight: '600' and get the real
 * Inter SemiBold rather than a faked one.
 */
const SANS_BY_WEIGHT = {
  '400': F.body, '500': F.bodyMedium, '600': F.bodySemi,
  '700': F.bodyBold, '800': F.bodyBold, '900': F.bodyBold, bold: F.bodyBold,
};
const SERIF_BY_WEIGHT = {
  '400': F.displayRegular, '500': F.display, '600': F.display,
  '700': F.displayBold, '800': F.displayBold, '900': F.displayBold, bold: F.displayBold,
};

function resolveFont(style, base, serif = false) {
  const flat = StyleSheet.flatten(style);
  if (!flat || flat.fontWeight === undefined) return [{ fontFamily: base }, style];
  const table = serif ? SERIF_BY_WEIGHT : SANS_BY_WEIGHT;
  const family = table[String(flat.fontWeight)] || base;
  const { fontWeight, ...rest } = flat;
  return [{ fontFamily: family }, rest];
}

export function Title({ children, small, style }) {
  return <Text style={[s.title, small && s.titleSmall, resolveFont(style, F.display, true)]}>{children}</Text>;
}

export function SectionTitle({ children, style }) {
  return <Text style={[s.section, resolveFont(style, F.display, true)]}>{children}</Text>;
}

export function Eyebrow({ children, color, style }) {
  return <Text style={[s.eyebrow, color && { color }, resolveFont(style, F.bodyBold)]}>{children}</Text>;
}

/** The handwritten phrases in the corners of the mockups. */
export function ScriptAccent({ children, style, align = 'right' }) {
  return <Text style={[s.script, { textAlign: align }, style]}>{children}</Text>;
}

export function BodyText({ children, style }) {
  return <Text style={[s.body, resolveFont(style, F.body, false)]}>{children}</Text>;
}

export function Tiny({ children, style }) {
  return <Text style={[s.tiny, resolveFont(style, F.body, false)]}>{children}</Text>;
}

export function Sub({ children, style }) {
  return <Text style={[s.sub, resolveFont(style, F.body, false)]}>{children}</Text>;
}

export function Strong({ children }) {
  return <Text style={s.strong}>{children}</Text>;
}

/* ------------------------------------------------------------------
 * LAYOUT
 * ------------------------------------------------------------------ */

/** Every screen wraps in this. Handles the notch, the cream ground and scrolling. */
export function Screen({ children, scroll = true, style }) {
  const insets = useSafeAreaInsets();
  const body = (
    <View style={[{ paddingBottom: 28 + insets.bottom }, style]}>{children}</View>
  );
  return (
    <SafeAreaView style={s.screen} edges={['top', 'left', 'right']}>
      {scroll ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentInsetAdjustmentBehavior="automatic"
        >
          {body}
        </ScrollView>
      ) : (
        body
      )}
    </SafeAreaView>
  );
}

/** Screen title block. Sits above the padded content area. */
export function ScreenHeader({ eyebrow, title, sub, small, right }) {
  return (
    <View style={s.header}>
      <View style={{ flex: 1 }}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Title small={small}>{title}</Title>
        {sub ? <Sub>{sub}</Sub> : null}
      </View>
      {right}
    </View>
  );
}

/** Standard left and right padding for screen content. */
export function Content({ children, style }) {
  return <View style={[s.content, style]}>{children}</View>;
}

export function Row({ children, style, align = 'center' }) {
  return <View style={[{ flexDirection: 'row', alignItems: align, gap: 12 }, style]}>{children}</View>;
}

export function Spacer({ h = 12 }) {
  return <View style={{ height: h }} />;
}

/* ------------------------------------------------------------------
 * CARDS
 * ------------------------------------------------------------------ */

export function Card({ children, tone = 'default', style }) {
  return <View style={[s.card, TONES[tone], style]}>{children}</View>;
}

const TONES = {
  default: {},
  flat: { backgroundColor: C.surfaceAlt, borderWidth: 1, borderColor: C.borderSoft, shadowOpacity: 0, elevation: 0 },
  leafy: { backgroundColor: C.leafTint, shadowOpacity: 0, elevation: 0 },
  alert: { backgroundColor: '#FCF2EE', borderWidth: 1.5, borderColor: '#DDA192', shadowOpacity: 0, elevation: 0 },
  warn: { backgroundColor: '#FBF5EA', borderWidth: 1.5, borderColor: '#E0C39A', shadowOpacity: 0, elevation: 0 },
};

/** A tappable row with an icon, a label, and a chevron. */
export function ListRow({ icon, title, subtitle, onPress, tint, right, align = 'center' }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [s.listRow, pressed && s.pressed]}
    >
      {icon ? (
        <View style={[s.listIcon, tint && { backgroundColor: tint }]}>
          <Feather name={icon} size={18} color={C.primaryDeep} />
        </View>
      ) : null}
      <View style={{ flex: 1 }}>
        <Text style={s.listTitle}>{title}</Text>
        {subtitle ? <Tiny style={{ marginTop: 2 }}>{subtitle}</Tiny> : null}
      </View>
      {right !== undefined ? right : <Feather name="chevron-right" size={18} color={C.faint} />}
    </Pressable>
  );
}

/* ------------------------------------------------------------------
 * BUTTONS AND CHIPS
 * ------------------------------------------------------------------ */

export function Button({ title, onPress, variant = 'primary', icon, style, disabled }) {
  const ghost = variant === 'ghost';
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [
        s.btn,
        ghost && s.btnGhost,
        disabled && { opacity: 0.45 },
        pressed && !disabled && (ghost ? s.pressed : { backgroundColor: C.primaryPressed }),
        style,
      ]}
    >
      <Text style={[s.btnText, ghost && { color: C.primaryDeep }]}>{title}</Text>
      {icon ? <Feather name={icon} size={16} color={ghost ? C.primaryDeep : '#fff'} /> : null}
    </Pressable>
  );
}

export function Chip({ label, active, onPress, activeColor = C.primary, activeText = '#fff' }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: !!active }}
      accessibilityLabel={label}
      style={({ pressed }) => [
        s.chip,
        active && { backgroundColor: activeColor, borderColor: activeColor },
        pressed && !active && s.pressed,
      ]}
    >
      <Text style={[s.chipText, active && { color: activeText }]}>{label}</Text>
    </Pressable>
  );
}

export function ChipRow({ children, style }) {
  return <View style={[s.chipRow, style]}>{children}</View>;
}

export function Tag({ label, tone = 'leaf' }) {
  const tones = {
    leaf: { bg: C.leafWash, fg: C.primaryInk },
    warm: { bg: C.taupeWash, fg: C.taupeDeep },
    time: { bg: C.creamDeep, fg: C.body },
  };
  const t = tones[tone] || tones.leaf;
  return (
    <View style={[s.tag, { backgroundColor: t.bg }]}>
      <Text style={[s.tagText, { color: t.fg }]}>{label}</Text>
    </View>
  );
}

/* ------------------------------------------------------------------
 * CONTENT BLOCKS
 * ------------------------------------------------------------------ */

/** A labelled section inside a detail screen. */
export function DetailSection({ label, children, style }) {
  return (
    <View style={[{ marginBottom: 18 }, style]}>
      {label ? <Text style={s.detailLabel}>{label}</Text> : null}
      {children}
    </View>
  );
}

/** Bulleted list. tone 'warn' switches the dot to taupe for red flag lists. */
export function Bullets({ items, tone = 'default' }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <View style={{ gap: 9 }}>
      {items.map((t, i) => (
        <View key={i} style={{ flexDirection: 'row', gap: 11 }}>
          <View style={[s.dot, tone === 'warn' && { backgroundColor: C.taupe }]} />
          <Text style={[s.body, { flex: 1 }]}>{t}</Text>
        </View>
      ))}
    </View>
  );
}

/** Numbered steps, used wherever order actually matters. */
export function Steps({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <View style={{ gap: 11 }}>
      {items.map((t, i) => (
        <View key={i} style={{ flexDirection: 'row', gap: 11 }}>
          <View style={s.stepNum}>
            <Text style={s.stepNumText}>{i + 1}</Text>
          </View>
          <Text style={[s.body, { flex: 1 }]}>{t}</Text>
        </View>
      ))}
    </View>
  );
}

/** A parent script. The thing they read out loud. */
export function ScriptCard({ situation, say, why }) {
  return (
    <View style={s.quote}>
      {situation ? <Text style={s.quoteSit}>{situation}</Text> : null}
      <Text style={s.quoteText}>{'“' + say + '”'}</Text>
      {why ? <Text style={s.quoteWhy}>{why}</Text> : null}
    </View>
  );
}

export function Callout({ children, style }) {
  return (
    <View style={[s.callout, style]}>
      <Text style={s.calloutText}>{children}</Text>
    </View>
  );
}

export function Disclaimer({ children }) {
  return <Text style={s.disclaimer}>{children}</Text>;
}

export function Empty({ title, body, growth = 2 }) {
  return (
    <View style={s.empty}>
      <Sprout order={growth} size={74} />
      {title ? <Text style={[s.listTitle, { marginTop: 12, textAlign: 'center' }]}>{title}</Text> : null}
      {body ? <Tiny style={{ marginTop: 8, textAlign: 'center', lineHeight: 20 }}>{body}</Tiny> : null}
    </View>
  );
}

/** A simple progress bar. Empty must clearly read as empty. */
export function Bar({ value = 0 }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <View style={s.bar}>
      <View style={[s.barFill, { width: `${pct}%` }]} />
    </View>
  );
}

/* ------------------------------------------------------------------
 * THE GROWTH CHARACTER
 * One drawing, ten states, from seed to landscape. The same character
 * grows with the child rather than being redrawn per stage.
 * ------------------------------------------------------------------ */

export function Sprout({ order = 2, size = 46 }) {
  const G_ = '#7C9068';
  const D = '#4A6741';
  const S = '#C9B79E';
  const E = '#EAEFE2';
  const base = 78;
  const o = Math.max(0, Math.min(9, Math.round(order)));

  const parts = [];

  if (o <= 1) {
    parts.push(<Ellipse key="seed" cx={50} cy={base - 9} rx={15} ry={17} fill={S} />);
    parts.push(
      <Path key="crack" d={`M43 ${base - 14} Q50 ${base - 20} 57 ${base - 14}`} stroke="#B5A288" strokeWidth={2} fill="none" strokeLinecap="round" />
    );
    if (o === 1) {
      parts.push(<Path key="stem" d={`M50 ${base - 25} v9`} stroke={D} strokeWidth={3} strokeLinecap="round" />);
      parts.push(
        <Ellipse key="leaf" cx={57} cy={base - 28} rx={9} ry={5.5} fill={G_} transform={`rotate(-22 57 ${base - 28})`} />
      );
    }
  } else if (o <= 5) {
    const h = [0, 0, 20, 29, 38, 46][o];
    const pairs = [0, 0, 1, 2, 3, 3][o];
    parts.push(<Ellipse key="soil" cx={50} cy={base - 4} rx={13} ry={8} fill={S} opacity={0.55} />);
    parts.push(<Path key="stem" d={`M50 ${base - 4} v-${h}`} stroke={D} strokeWidth={3.4} strokeLinecap="round" />);
    for (let i = 0; i < pairs; i++) {
      const y = base - 10 - (h - 10) * (i / Math.max(pairs - 1, 1));
      const r = 10 - i * 1.1;
      const ry = 6 - i * 0.5;
      parts.push(
        <Ellipse key={`l${i}`} cx={50 + r + 3} cy={y} rx={r} ry={ry} fill={G_} transform={`rotate(-20 ${50 + r + 3} ${y})`} />
      );
      parts.push(
        <Ellipse key={`r${i}`} cx={50 - r - 3} cy={y - 4} rx={r} ry={ry} fill={G_} opacity={0.85} transform={`rotate(20 ${50 - r - 3} ${y - 4})`} />
      );
    }
    if (o === 5) parts.push(<Circle key="bud" cx={50} cy={base - h - 4} r={4.5} fill={G_} />);
  } else {
    const th = [0, 0, 0, 0, 0, 0, 40, 46, 50, 50][o];
    const cr = [0, 0, 0, 0, 0, 0, 15, 19, 23, 23][o];
    if (o === 9) {
      parts.push(
        <Path key="hills" d={`M2 ${base - 2} q18 -13 34 -2 q16 -12 30 -1 q14 -9 32 1 v14 H2 Z`} fill={E} />
      );
    }
    parts.push(<Ellipse key="soil" cx={50} cy={base - 3} rx={15} ry={8} fill={S} opacity={0.5} />);
    parts.push(<Path key="trunk" d={`M50 ${base - 3} v-${th}`} stroke={D} strokeWidth={4.6} strokeLinecap="round" />);
    if (o >= 8) {
      parts.push(
        <Path key="branch" d={`M50 ${base - th + 16} l-11 -10M50 ${base - th + 24} l12 -10`} stroke={D} strokeWidth={3} strokeLinecap="round" />
      );
    }
    parts.push(<Circle key="c1" cx={50} cy={base - th - cr + 6} r={cr} fill={G_} />);
    parts.push(<Circle key="c2" cx={50 - cr * 0.72} cy={base - th - cr + 13} r={cr * 0.62} fill={G_} opacity={0.9} />);
    parts.push(<Circle key="c3" cx={50 + cr * 0.72} cy={base - th - cr + 12} r={cr * 0.66} fill={G_} opacity={0.82} />);
  }

  return (
    <Svg width={size} height={size} viewBox="0 0 100 90">
      <G>{parts}</G>
    </Svg>
  );
}

/**
 * The Ready Set Grow wordmark.
 *
 * Drawn rather than shipped as an image so it stays crisp at any size and
 * so the sprout inside the O is the same character used everywhere else in
 * the app. When you have the real logo file, this component is the single
 * place to swap it.
 */
export function Wordmark({ size = 'large', tagline = true }) {
  const big = size === 'large';
  const gw = big ? 46 : 32;
  // The O is drawn taller than the cap height so the sprout can rise above
  // the letters. Bottom aligning the row keeps the ring on the baseline.
  const oh = big ? 62 : 44;
  const ow = big ? 36 : 26;

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: big ? 26 : 18 }}>
        <Text style={[s.markSmallWord, big ? null : s.markSmallWordSm]}>READY</Text>
        <Text style={[s.markSmallWord, big ? null : s.markSmallWordSm]}>SET</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: -2 }}>
        <Text style={[s.markBigWord, { fontSize: gw }]}>GR</Text>
        <View style={{ marginHorizontal: 1, marginBottom: -3 }}>
          <Svg width={ow} height={oh} viewBox="0 0 34 60">
            <Defs>
              <ClipPath id="oclip">
                <Circle cx={17} cy={41} r={13} />
              </ClipPath>
            </Defs>
            {/* soil settled in the base of the O, the seed it grows from */}
            <G clipPath="url(#oclip)">
              <Path d="M2 47 q7 -4 15 -1 q8 3 15 -1 v20 H2 Z" fill="#DCCDB6" />
            </G>
            <Circle cx={17} cy={41} r={15.4} stroke={C.primary} strokeWidth={4.8} fill="none" />
            {/* the sprout rising out of the top of the O */}
            <Path d="M17 27 C17 20 17 15 17 10" stroke={C.primaryDeep} strokeWidth={2.6} fill="none" strokeLinecap="round" />
            <Ellipse cx={24} cy={12} rx={7.4} ry={4.3} fill={C.primary} transform="rotate(-26 24 12)" />
            <Ellipse cx={10} cy={16} rx={6.6} ry={3.9} fill={C.primary} opacity={0.88} transform="rotate(24 10 16)" />
          </Svg>
        </View>
        <Text style={[s.markBigWord, { fontSize: gw }]}>W</Text>
      </View>

      {tagline ? (
        <Text style={s.markTagline}>PARENTING TODAY{'\n'}FOR A BRIGHTER TOMORROW</Text>
      ) : null}
    </View>
  );
}

/**
 * A soft shape in the top corner that holds a handwritten line.
 *
 * The mockups use these as containers for the script phrases, not as loose
 * background decoration. Floating blobs on their own just read as noise, so
 * this component only exists with text inside it.
 */
export function ScriptBadge({ children, style }) {
  return (
    <View pointerEvents="none" style={[{ position: 'absolute', top: -30, left: -40, width: 168, height: 132 }, style]}>
      <Svg width={168} height={132} viewBox="0 0 190 150" preserveAspectRatio="none">
        <Path
          d="M22 8 C74 -10 150 2 172 44 C192 82 168 128 118 142 C68 156 8 132 2 88 C-3 52 2 20 22 8 Z"
          fill={decoration.blobPale}
        />
      </Svg>
      <Text style={[s.script, { position: 'absolute', top: 50, left: 48, maxWidth: 96, fontSize: 14.5 }]}>
        {children}
      </Text>
    </View>
  );
}

/** The soft leaf shapes in the corners of the mockups. Purely decorative. */
export function LeafArt({ position = 'topRight' }) {
  const isTop = position === 'topRight';
  return (
    <View
      pointerEvents="none"
      style={[
        { position: 'absolute', opacity: 0.5 },
        isTop ? { top: -14, right: -12 } : { bottom: 40, left: -18 },
      ]}
    >
      <Svg width={126} height={140} viewBox="0 0 130 150">
        <G fill="#DCE4D2">
          <Ellipse cx={96} cy={34} rx={21} ry={11} transform="rotate(-34 96 34)" />
          <Ellipse cx={72} cy={62} rx={18} ry={9.5} transform="rotate(-18 72 62)" />
          <Ellipse cx={108} cy={76} rx={16} ry={8.5} transform="rotate(-48 108 76)" />
        </G>
        <Path d="M120 12 C104 38 88 58 66 74" stroke="#CBD7BE" strokeWidth={1.6} fill="none" />
      </Svg>
    </View>
  );
}

/* ------------------------------------------------------------------
 * STYLES
 * ------------------------------------------------------------------ */

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: C.cream },
  content: { paddingHorizontal: theme.spacing.screenX },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: theme.spacing.screenX,
    paddingTop: 10,
    paddingBottom: 6,
    gap: 12,
  },

  title: {
    fontFamily: F.display,
    fontSize: 30, lineHeight: 37, color: C.ink, letterSpacing: -0.4,
  },
  titleSmall: { fontSize: 24, lineHeight: 30 },
  section: {
    fontFamily: F.display,
    fontSize: 18.5, color: C.ink, marginTop: 22, marginBottom: 9,
  },
  eyebrow: {
    fontFamily: F.bodyBold, fontSize: 10.5, letterSpacing: 1.5,
    textTransform: 'uppercase', color: C.muted, marginBottom: 5,
  },
  script: { fontFamily: F.script, fontSize: 17, lineHeight: 21, color: C.taupe },
  markSmallWord: {
    fontFamily: F.display, fontSize: 15, letterSpacing: 4.5, color: C.primaryInk,
  },
  markSmallWordSm: { fontSize: 11, letterSpacing: 3 },
  markBigWord: {
    fontFamily: F.displayBold, color: C.primary, letterSpacing: 1, lineHeight: undefined,
  },
  markTagline: {
    fontFamily: F.bodyMedium, fontSize: 8.5, letterSpacing: 2.2, lineHeight: 13,
    textAlign: 'center', color: C.muted, marginTop: 7, textTransform: 'uppercase',
  },
  body: { fontFamily: F.body, fontSize: 14.5, lineHeight: 22, color: C.body },
  tiny: { fontFamily: F.body, fontSize: 12.5, lineHeight: 18.5, color: C.muted },
  sub: { fontFamily: F.body, fontSize: 13.5, lineHeight: 20, color: C.muted, marginTop: 5 },
  strong: { fontFamily: F.bodySemi, color: C.ink },

  card: {
    backgroundColor: C.surface,
    borderRadius: theme.radius.card,
    padding: 16,
    marginBottom: 11,
    shadowColor: '#6B6550',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 2,
  },

  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: C.surface,
    borderRadius: 18,
    padding: 14,
    marginBottom: 9,
    minHeight: theme.a11y.minTapTarget,
    shadowColor: '#6B6550',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 2,
  },
  listIcon: {
    width: 38, height: 38, borderRadius: 12,
    backgroundColor: C.leafWash, alignItems: 'center', justifyContent: 'center',
  },
  listTitle: { fontFamily: F.bodySemi, fontSize: 14.5, color: C.ink, lineHeight: 19.5 },
  pressed: { opacity: 0.62 },

  btn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
    backgroundColor: C.primary, borderRadius: theme.radius.pill,
    paddingVertical: 13, paddingHorizontal: 20,
    minHeight: theme.a11y.minTapTarget,
  },
  btnGhost: { backgroundColor: 'transparent', borderWidth: 1, borderColor: C.border },
  btnText: { fontFamily: F.bodySemi, fontSize: 15.5, color: '#fff' },

  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 7 },
  chip: {
    paddingVertical: 8, paddingHorizontal: 13, borderRadius: theme.radius.pill,
    backgroundColor: C.surface, borderWidth: 1, borderColor: C.border,
    minHeight: 36, justifyContent: 'center',
  },
  chipText: { fontFamily: F.bodyMedium, fontSize: 13, color: C.body },

  tag: { paddingVertical: 4, paddingHorizontal: 10, borderRadius: theme.radius.pill },
  tagText: { fontFamily: F.bodyMedium, fontSize: 11 },

  detailLabel: {
    fontFamily: F.bodyBold, fontSize: 10.5, letterSpacing: 1.4,
    textTransform: 'uppercase', color: C.taupe, marginBottom: 9,
  },
  dot: { width: 5, height: 5, borderRadius: 3, backgroundColor: C.primary, marginTop: 8 },
  stepNum: {
    width: 23, height: 23, borderRadius: 12, backgroundColor: C.primary,
    alignItems: 'center', justifyContent: 'center', marginTop: 1,
  },
  stepNumText: { fontFamily: F.bodyBold, color: '#fff', fontSize: 11.5 },

  quote: { backgroundColor: C.leafTint, borderRadius: 16, padding: 14, marginBottom: 9 },
  quoteSit: {
    fontFamily: F.bodyBold, fontSize: 10, letterSpacing: 1.3,
    textTransform: 'uppercase', color: C.taupe, marginBottom: 7,
  },
  quoteText: {
    fontFamily: F.display, fontSize: 17, lineHeight: 25, color: C.primaryInk,
  },
  quoteWhy: { fontFamily: F.body, fontSize: 12, lineHeight: 18, color: C.muted, marginTop: 8 },

  callout: { backgroundColor: C.taupeWash, borderRadius: 14, padding: 13 },
  calloutText: { fontFamily: F.body, fontSize: 12.5, lineHeight: 19.5, color: '#6E5D4C' },

  disclaimer: {
    fontFamily: F.body, fontSize: 11, lineHeight: 17, color: C.muted,
    paddingTop: 14, marginTop: 16, borderTopWidth: 1, borderTopColor: C.borderSoft,
  },

  empty: { alignItems: 'center', paddingVertical: 40, paddingHorizontal: 20 },

  bar: { height: 7, borderRadius: 999, backgroundColor: '#E0DED1', overflow: 'hidden', marginTop: 6 },
  barFill: { height: '100%', borderRadius: 999, backgroundColor: C.primary },
});

export { s as uiStyles, C as colors };

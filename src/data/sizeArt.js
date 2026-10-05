/**
 * Ready Set Grow: the size characters
 * ------------------------------------------------------------------
 * "If the baby looks like a carrot I want it to show a carrot."
 *
 * The app has had the comparison in words since the first week screen
 * went in: "A carrot", "about 10.5 inches". Words are the honest part
 * and they stay. But the fruit is the bit people screenshot and send
 * to their mum, and a line of text is not something anybody sends.
 *
 * WHY THESE ARE DRAWN HERE RATHER THAN LOADED
 * The whole app ships as one file that works offline. Thirty-nine
 * image files would be thirty-nine requests that fail on a train, and
 * a week screen with a broken image on it is worse than one with no
 * image at all. So each one is a handful of SVG shapes, drawn at
 * whatever size the screen asks for, with nothing to fetch.
 *
 * WHY THEY HAVE FACES
 * Because the alternative is a clipart carrot, and this is a screen
 * somebody opens while feeling sick at 6am in week 9. The faces are
 * doing a job.
 *
 * WHAT THEY ARE NOT
 * Not a scale drawing, and not a picture of a baby. Every one of them
 * sits next to the real measurement, because a fruit is a feeling and
 * a centimetre is a fact, and the fact is the one that matters if
 * somebody is worried about growth.
 */

export const SIZE_ART_TITLE = 'About this big';

/* The house palette for produce. Kept in one place so the whole set
   reads as one family rather than thirty-nine clipart downloads. */
const C = {
  ring: '#F2EEE6',
  shade: 'rgba(74,103,65,.09)',
  leaf: '#7C9A5E', leafD: '#5E7A46',
  green: '#8FB06A', greenD: '#6E8F4D', greenP: '#B9CE96',
  deepGreen: '#4E6B3C',
  red: '#D06A5C', redD: '#B3503F',
  pink: '#D4738A',
  purple: '#7E5A86', purpleD: '#60436A',
  orange: '#E08B48', orangeD: '#C06F31',
  gold: '#E3B457', goldD: '#C2913A',
  yellow: '#EBD07A',
  cream: '#EFE3C4',
  brown: '#8A6A4F', brownD: '#6B5039',
  tan: '#D8B98A',
  blue: '#6B7FA8',
  ink: '#4A3F36',
  blush: 'rgba(214,138,130,.42)',
};

/* One face, so every character is recognisably from the same hand.
   cx, cy and s let it sit correctly on a long carrot and a round
   pumpkin without redrawing it each time. */
function face(cx, cy, s, dark) {
  const col = dark ? '#FFF6EC' : C.ink;
  const e = 1.9 * s;
  const dx = 5.2 * s;
  return ''
    + `<ellipse cx="${cx - dx}" cy="${cy}" rx="${e * 0.78}" ry="${e}" fill="${col}"/>`
    + `<ellipse cx="${cx + dx}" cy="${cy}" rx="${e * 0.78}" ry="${e}" fill="${col}"/>`
    + `<path d="M${cx - 2.6 * s} ${cy + 3.6 * s}q${2.6 * s} ${2.4 * s} ${5.2 * s} 0" `
    + `stroke="${col}" stroke-width="${1.25 * s}" fill="none" stroke-linecap="round"/>`
    + `<ellipse cx="${cx - 9.4 * s}" cy="${cy + 2.6 * s}" rx="${2.5 * s}" ry="${1.7 * s}" fill="${C.blush}"/>`
    + `<ellipse cx="${cx + 9.4 * s}" cy="${cy + 2.6 * s}" rx="${2.5 * s}" ry="${1.7 * s}" fill="${C.blush}"/>`;
}

/* ------------------------------------------------------------------
   THE SHAPES

   body: everything behind the face. fx/fy/fs: where the face goes and
   how big. dark: light face on a dark body, for the aubergine and the
   coconut, where an ink face disappears.
   ------------------------------------------------------------------ */
function dot(r, fill, dashed) {
  return (dashed ? `<circle cx="50" cy="50" r="26" fill="none" stroke="rgba(74,103,65,.3)"
    stroke-width="1.1" stroke-dasharray="3 4"/>` : '')
    + `<circle cx="50" cy="52" r="${r}" fill="${fill}"/>`;
}

function berry(rx, ry, fill, stem) {
  return `<ellipse cx="50" cy="54" rx="${rx}" ry="${ry}" fill="${fill}"/>`
    + (stem || '');
}

function longThing(w, h, fill, top) {
  return `<rect x="${50 - w / 2}" y="${56 - h / 2}" width="${w}" height="${h}" rx="${w / 2}" fill="${fill}"/>`
    + (top || '');
}

const LEAF_TUFT = `<path d="M50 24q-7-9-2-13 5 3 4 12z" fill="${C.leaf}"/>`
  + `<path d="M50 24q7-9 2-13-5 3-4 12z" fill="${C.leafD}"/>`;

const SHAPES = {
  poppy: { body: dot(4.5, '#4A4036', true), fx: 50, fy: 51, fs: 0.34, dark: true },
  sesame: { body: dot(0, '') + `<ellipse cx="50" cy="52" rx="5" ry="7.5" fill="${C.cream}"/>`
    + `<circle cx="50" cy="50" r="26" fill="none" stroke="rgba(74,103,65,.3)" stroke-width="1.1" stroke-dasharray="3 4"/>`,
    fx: 50, fy: 52, fs: 0.42 },
  sweetpea: { body: `<circle cx="50" cy="50" r="26" fill="none" stroke="rgba(74,103,65,.3)" stroke-width="1.1" stroke-dasharray="3 4"/>`
    + `<circle cx="50" cy="52" r="8" fill="${C.greenP}"/>`, fx: 50, fy: 52, fs: 0.5 },
  blueberry: { body: berry(13, 13, C.blue)
    + `<path d="M46 44h8M50 40v8" stroke="rgba(255,255,255,.5)" stroke-width="1.4" stroke-linecap="round"/>`,
    fx: 50, fy: 55, fs: 0.7, dark: true },
  raspberry: { body: [[42,46],[50,43],[58,46],[38,54],[46,54],[54,54],[62,54],[42,62],[50,63],[58,62],[46,70],[54,70]]
    .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.4" fill="${C.pink}"/>`).join('')
    + `<path d="M44 42q6-6 12 0" stroke="${C.leafD}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
    fx: 50, fy: 56, fs: 0.72, dark: true },
  olive: { body: `<ellipse cx="50" cy="56" rx="11" ry="15" fill="${C.green}"/>`
    + `<path d="M55 42q10-8 16-6-5 8-15 9z" fill="${C.leaf}"/>`, fx: 50, fy: 56, fs: 0.62 },
  strawberry: { body: `<path d="M50 76q-15-6-15-20 0-11 15-11t15 11q0 14-15 20z" fill="${C.red}"/>`
    + `<path d="M38 44h24l-6 5h-12z" fill="${C.leaf}"/><path d="M50 36v8" stroke="${C.leafD}" stroke-width="2.2" stroke-linecap="round"/>`
    + [[44,56],[56,56],[50,64],[41,63],[59,63]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.1" fill="#F6E7D8"/>`).join(''),
    fx: 50, fy: 56, fs: 0.72, dark: true },
  fig: { body: `<path d="M50 78q-14-7-14-19 0-10 14-15 14 5 14 15 0 12-14 19z" fill="${C.purple}"/>`
    + `<path d="M50 44v-8M50 38q5-4 9-3" stroke="${C.leafD}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    fx: 50, fy: 57, fs: 0.72, dark: true },
  lime: { body: berry(17, 16, C.green) + `<path d="M64 42q6-5 9-3-3 6-9 6z" fill="${C.leaf}"/>`,
    fx: 50, fy: 55, fs: 0.78 },
  peapod: { body: `<path d="M22 50q4 26 28 26t28-26q-6 10-28 10T22 50z" fill="${C.green}"/>`
    + [[33,54],[42,57],[50,58],[58,57],[67,54]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6.5" fill="${C.greenP}"/>`).join('')
    + `<path d="M22 50q4 26 28 26t28-26" fill="none" stroke="${C.greenD}" stroke-width="1.6" opacity=".45"/>`,
    fx: 50, fy: 57, fs: 0.52 },
  lemon: { body: `<ellipse cx="50" cy="57" rx="19" ry="15" fill="${C.yellow}"/>`
    + `<path d="M68 48q6-5 9-4-3 6-9 6z" fill="${C.leaf}"/>`, fx: 50, fy: 57, fs: 0.78 },
  pinecone: { body: `<ellipse cx="50" cy="57" rx="15" ry="21" fill="${C.brownD}"/>`
    + [[50,40],[42,47],[58,47],[50,54],[42,61],[58,61],[50,68],[46,75],[54,75]]
      .map(([x, y]) => `<path d="M${x - 7} ${y}q7 7 14 0q-7-6-14 0z" fill="${C.tan}"/>`
        + `<path d="M${x - 7} ${y}q7 7 14 0" fill="none" stroke="${C.brown}" stroke-width="1"/>`).join(''),
    fx: 50, fy: 55, fs: 0.62 },
  avocado: { body: `<path d="M50 80q-16-6-16-23 0-16 16-21 16 5 16 21 0 17-16 23z" fill="${C.deepGreen}"/>`
    + `<path d="M50 74q-11-5-11-17 0-12 11-16 11 4 11 16 0 12-11 17z" fill="${C.greenP}"/>`
    + `<circle cx="50" cy="60" r="9" fill="${C.brown}"/>`, fx: 50, fy: 48, fs: 0.6 },
  pear: { body: `<path d="M50 82q-14 0-14-13 0-9 7-14 4-3 4-10 0-6 3-6t3 6q0 7 4 10 7 5 7 14 0 13-14 13z" fill="#C9C97E"/>`
    + `<path d="M50 40v-6" stroke="${C.brownD}" stroke-width="2" stroke-linecap="round"/>`
    + `<path d="M52 36q7-5 10-3-3 6-10 5z" fill="${C.leaf}"/>`, fx: 50, fy: 64, fs: 0.68 },
  pepper: { body: `<path d="M50 80q-17 0-17-16 0-14 17-14t17 14q0 16-17 16z" fill="${C.red}"/>`
    + `<path d="M43 50h14l-3 4h-8z" fill="${C.leaf}"/><path d="M50 44v6" stroke="${C.leafD}" stroke-width="2.4" stroke-linecap="round"/>`,
    fx: 50, fy: 64, fs: 0.74, dark: true },
  tomato: { body: `<ellipse cx="50" cy="60" rx="21" ry="17" fill="${C.red}"/>`
    + [[36,60],[43,60],[57,60],[64,60]].map(([x]) => `<path d="M${x} 46q-2 14 0 28" stroke="${C.redD}" stroke-width="1.3" fill="none" opacity=".45"/>`).join('')
    + `<path d="M40 46h20l-5 5H45z" fill="${C.leaf}"/>`, fx: 50, fy: 62, fs: 0.78, dark: true },
  sweetpotato: { body: `<path d="M24 60q6-14 26-14t26 12q0 12-26 12T24 60z" fill="#A9705A"/>`
    + `<path d="M76 58q6 1 8 4" stroke="#8A5947" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    fx: 50, fy: 59, fs: 0.74, dark: true },
  carrot: { body: `<path d="M50 84 38 46q12-5 24 0z" fill="${C.orange}"/>`
    + `<path d="M44 56h12M42 48h16" stroke="${C.orangeD}" stroke-width="1.3" opacity=".5" stroke-linecap="round"/>`
    + `<path d="M50 46V30M50 46 40 32M50 46l10-14" stroke="${C.leaf}" stroke-width="3" stroke-linecap="round" fill="none"/>`,
    fx: 50, fy: 60, fs: 0.6, dark: true },
  zucchini: { body: `<path d="M28 72q-4-6 2-12l32-20q7-4 11 2t-2 11L39 73q-7 4-11-1z" fill="${C.green}"/>`
    + `<path d="M70 40q5-5 9-5" stroke="${C.brownD}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`
    + [[40,62],[50,55],[60,48]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.3" fill="${C.greenP}"/>`).join(''),
    fx: 46, fy: 60, fs: 0.56, dark: true },
  mango: { body: `<path d="M50 80q-20-4-20-21t20-17q20 0 20 17-1 17-20 21z" fill="${C.gold}"/>`
    + `<path d="M58 44q10 0 14 6-8 3-16 1z" fill="${C.orange}" opacity=".7"/>`, fx: 50, fy: 62, fs: 0.8 },
  corn: { body: `<ellipse cx="50" cy="56" rx="13" ry="24" fill="${C.yellow}"/>`
    + [0, 1, 2, 3, 4].map((i) => `<path d="M${40 + i * 5} 34v44" stroke="${C.goldD}" stroke-width="1" opacity=".45"/>`).join('')
    + `<path d="M37 36q-14 10-10 36 12-8 12-32z" fill="${C.leaf}"/>`
    + `<path d="M63 36q14 10 10 36-12-8-12-32z" fill="${C.leafD}"/>`, fx: 50, fy: 56, fs: 0.62 },
  swede: { body: `<ellipse cx="50" cy="58" rx="18" ry="17" fill="${C.cream}"/>`
    + `<path d="M32 52q4-12 18-12t18 12z" fill="${C.purple}"/>`
    + `<path d="M50 40V28M44 30l6 8M56 30l-6 8" stroke="${C.leaf}" stroke-width="2.6" stroke-linecap="round" fill="none"/>`
    + `<path d="M50 75v8" stroke="${C.tan}" stroke-width="2" stroke-linecap="round"/>`, fx: 50, fy: 60, fs: 0.74 },
  acorn: { body: `<ellipse cx="50" cy="58" rx="19" ry="19" fill="${C.deepGreen}"/>`
    + `<path d="M50 39v-8" stroke="${C.brownD}" stroke-width="3" stroke-linecap="round"/>`
    + `<ellipse cx="62" cy="64" rx="5" ry="4" fill="${C.gold}" opacity=".8"/>`, fx: 48, fy: 58, fs: 0.78, dark: true },
  cauliflower: { body: `<path d="M26 66q-8-14 2-20 6 14 6 22z" fill="${C.green}"/>`
    + `<path d="M74 66q8-14-2-20-6 14-6 22z" fill="${C.leaf}"/>`
    + `<ellipse cx="50" cy="60" rx="22" ry="17" fill="#E6DFCB"/>`
    + [[36,54],[50,48],[64,54],[42,64],[58,64]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9.5" fill="#F7F2E6"/>`).join('')
    + [[36,54],[50,48],[64,54],[42,64],[58,64]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="9.5" fill="none" stroke="#DCD3BC" stroke-width="1.1"/>`).join(''),
    fx: 50, fy: 60, fs: 0.74 },
  aubergine: { body: `<path d="M50 82q-18 0-18-18 0-16 18-20 18 4 18 20 0 18-18 18z" fill="${C.purple}"/>`
    + `<path d="M42 46h16l-4 5h-8z" fill="${C.leaf}"/><path d="M50 38v8" stroke="${C.leafD}" stroke-width="2.4" stroke-linecap="round"/>`,
    fx: 50, fy: 64, fs: 0.76, dark: true },
  butternut: { body: `<path d="M50 84q-13 0-13-13 0-11 6-15 3-2 3-12 0-8 4-8t4 8q0 10 3 12 6 4 6 15 0 13-13 13z" fill="${C.tan}"/>`
    + `<path d="M50 36v-6" stroke="${C.brownD}" stroke-width="3" stroke-linecap="round"/>`, fx: 50, fy: 66, fs: 0.66 },
  cabbage: { body: `<circle cx="50" cy="57" r="21" fill="${C.greenP}"/>`
    + `<path d="M50 36v42M32 52q18 6 36 0M34 66q16-6 32 0" stroke="${C.green}" stroke-width="1.5" fill="none" opacity=".7"/>`,
    fx: 50, fy: 57, fs: 0.8 },
  coconut: { body: `<circle cx="50" cy="57" r="20" fill="${C.brownD}"/>`
    + [[42,44],[50,42],[58,44]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.4" fill="#4A3729"/>`).join('')
    + `<path d="M36 64q6 8 10 10M62 62q-4 8-8 11" stroke="#6B5039" stroke-width="1.6" fill="none" opacity=".7"/>`,
    fx: 50, fy: 59, fs: 0.8, dark: true },
  marrow: { body: `<path d="M24 66q-3-8 4-13l34-14q8-3 11 4t-4 12L36 70q-8 3-12-4z" fill="${C.green}"/>`
    + `<path d="M70 40q6-4 10-3" stroke="${C.brownD}" stroke-width="3" fill="none" stroke-linecap="round"/>`
    + [0, 1, 2, 3].map((i) => `<path d="M${32 + i * 11} ${66 - i * 4}q6-8 14-12" stroke="${C.greenP}" stroke-width="1.4" fill="none" opacity=".7"/>`).join(''),
    fx: 45, fy: 58, fs: 0.56, dark: true },
  pineapple: { body: `<ellipse cx="50" cy="62" rx="17" ry="20" fill="${C.gold}"/>`
    + [0, 1, 2].map((r) => [0, 1, 2, 3].map((i) => `<path d="M${38 + i * 8} ${50 + r * 9}l4 4-4 4-4-4z" fill="${C.goldD}" opacity=".45"/>`).join('')).join('')
    + `<path d="M50 42V26M42 42l-4-14M58 42l4-14" stroke="${C.leaf}" stroke-width="3" stroke-linecap="round" fill="none"/>`,
    fx: 50, fy: 62, fs: 0.74, dark: true },
  cantaloupe: { body: `<circle cx="50" cy="56" r="23" fill="#E8DCBE"/>`
    + [-15, -5, 5, 15].map((dx) => `<path d="M${50 + dx} 34q${dx > 0 ? -7 : 7} 22 0 44" stroke="#F4EEDD" stroke-width="2.2" fill="none" stroke-linecap="round"/>`).join('')
    + [-12, 0, 12].map((dy) => `<path d="M29 ${56 + dy}q21 ${dy > 0 ? -7 : 7} 42 0" stroke="#F4EEDD" stroke-width="2.2" fill="none" stroke-linecap="round"/>`).join(''),
    fx: 50, fy: 58, fs: 0.8 },
  honeydew: { body: `<circle cx="50" cy="56" r="24" fill="#C9D9A6"/>`
    + `<path d="M50 32v-6" stroke="${C.leafD}" stroke-width="2.6" stroke-linecap="round"/>`,
    fx: 50, fy: 56, fs: 0.86 },
  romaine: { body: `<path d="M33 80q-9-30 1-48 5 24 4 48z" fill="${C.leaf}"/>`
    + `<path d="M67 80q9-30-1-48-5 24-4 48z" fill="${C.leaf}"/>`
    + `<path d="M40 80q-6-32 3-52 5 28 4 52z" fill="${C.green}"/>`
    + `<path d="M60 80q6-32-3-52-5 28-4 52z" fill="${C.green}"/>`
    + `<path d="M50 80q-9 0-9-10 0-28 9-44 9 16 9 44 0 10-9 10z" fill="#CBDDA8"/>`
    + `<path d="M50 34v42" stroke="#AFC98A" stroke-width="1.5" opacity=".8"/>`,
    fx: 50, fy: 62, fs: 0.58 },
  wintermelon: { body: `<ellipse cx="50" cy="58" rx="25" ry="19" fill="#9FB58A"/>`
    + [[38,52],[46,62],[56,50],[62,60],[50,56],[42,68],[60,68]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="1.6" fill="#E6EDDC"/>`).join('')
    + `<path d="M74 54q6-2 8 0" stroke="${C.brownD}" stroke-width="2.2" fill="none" stroke-linecap="round"/>`,
    fx: 50, fy: 58, fs: 0.78, dark: true },
  leek: { body: `<path d="M38 50q12-5 24 0l-3 32q-9 3-18 0z" fill="#E4E7D2"/>`
    + `<path d="M38 50q12-5 24 0" fill="none" stroke="#C7CDAE" stroke-width="1.4"/>`
    + `<path d="M50 50V20M41 52 31 26M59 52l10-26M45 50l-4-26M55 50l4-26"
        stroke="${C.green}" stroke-width="4.6" stroke-linecap="round" fill="none"/>`
    + `<path d="M50 50V22" stroke="${C.leafD}" stroke-width="4.6" stroke-linecap="round"/>`,
    fx: 50, fy: 66, fs: 0.56 },
  watermelonS: { body: `<ellipse cx="50" cy="57" rx="24" ry="20" fill="${C.deepGreen}"/>`
    + [0, 1, 2, 3].map((i) => `<path d="M${32 + i * 12} 39q-5 18 0 36" stroke="#A8C487" stroke-width="3.4" fill="none" opacity=".85"/>`).join(''),
    fx: 50, fy: 57, fs: 0.8, dark: true },
  pumpkin: { body: `<ellipse cx="50" cy="60" rx="24" ry="19" fill="${C.orange}"/>`
    + [[34],[42],[58],[66]].map(([x]) => `<path d="M${x} 44q-3 16 0 32" stroke="${C.orangeD}" stroke-width="1.5" fill="none" opacity=".5"/>`).join('')
    + `<path d="M50 41v-7q6-1 8 2" stroke="${C.leafD}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    fx: 50, fy: 60, fs: 0.8, dark: true },
  watermelonL: { body: `<ellipse cx="50" cy="56" rx="29" ry="24" fill="${C.deepGreen}"/>`
    + [0, 1, 2, 3, 4].map((i) => `<path d="M${28 + i * 11} 34q-6 22 0 44" stroke="#A8C487" stroke-width="3.8" fill="none" opacity=".85"/>`).join(''),
    fx: 50, fy: 56, fs: 0.9, dark: true },
  pumpkinL: { body: `<ellipse cx="50" cy="59" rx="29" ry="23" fill="${C.orange}"/>`
    + [[31],[40],[60],[69]].map(([x]) => `<path d="M${x} 40q-4 19 0 38" stroke="${C.orangeD}" stroke-width="1.7" fill="none" opacity=".5"/>`).join('')
    + `<path d="M50 38v-8q7-1 9 3" stroke="${C.leafD}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`,
    fx: 50, fy: 59, fs: 0.9, dark: true },
};

/* Week to shape. The names match the size line in pregnancyWeeks.js,
   so if a comparison is ever reworded the picture has to be moved
   here deliberately rather than quietly going wrong. */
export const SIZE_ART_BY_WEEK = {
  4: 'poppy', 5: 'sesame', 6: 'sweetpea', 7: 'blueberry', 8: 'raspberry', 9: 'olive',
  10: 'strawberry', 11: 'fig', 12: 'lime', 13: 'peapod', 14: 'lemon', 15: 'pinecone',
  16: 'avocado', 17: 'pear', 18: 'pepper', 19: 'tomato', 20: 'sweetpotato', 21: 'carrot',
  22: 'zucchini', 23: 'mango', 24: 'corn', 25: 'swede', 26: 'acorn', 27: 'cauliflower',
  28: 'aubergine', 29: 'butternut', 30: 'cabbage', 31: 'coconut', 32: 'marrow',
  33: 'pineapple', 34: 'cantaloupe', 35: 'honeydew', 36: 'romaine', 37: 'wintermelon',
  38: 'leek', 39: 'watermelonS', 40: 'pumpkin', 41: 'watermelonL', 42: 'pumpkinL',
};

export function sizeArtKey(week) {
  const w = Math.round(Number(week));
  if (SIZE_ART_BY_WEEK[w]) return SIZE_ART_BY_WEEK[w];
  if (w > 42) return SIZE_ART_BY_WEEK[42];
  if (w < 4) return SIZE_ART_BY_WEEK[4];
  return '';
}

/* px is the drawn size. ring false drops the cream disc, for places
   that already sit on a tinted card. */
export function sizeArtSvg(week, px = 86, ring = true) {
  const key = sizeArtKey(week);
  const s = SHAPES[key];
  if (!s) return '';
  return `<svg width="${px}" height="${px}" viewBox="0 0 100 100" aria-hidden="true"
    style="display:block;flex:none">
    ${ring ? `<circle cx="50" cy="50" r="46" fill="${C.ring}"/>` : ''}
    <ellipse cx="50" cy="84" rx="20" ry="3.4" fill="${C.shade}"/>
    ${s.body}
    ${face(s.fx, s.fy, s.fs, s.dark)}
  </svg>`;
}

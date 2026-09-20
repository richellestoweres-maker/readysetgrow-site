/* =================================================================
   Ready Set Grow: browser prototype
   Drives the real data modules from the repo. No mock content.
   ================================================================= */

const ICON = {
  check:'<path d="M4.5 12.5 9.5 17.5 19.5 6.5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  hand:'<path d="M9 11.5V5.2a1.3 1.3 0 0 1 2.6 0v5.6"/><path d="M11.6 10.4V4.1a1.3 1.3 0 0 1 2.6 0v6.3"/><path d="M14.2 10.8V6a1.3 1.3 0 0 1 2.6 0v6.6"/><path d="M9 11.5V9a1.3 1.3 0 0 0-2.6 0v5.4c0 3.2 2.3 5.6 5.5 5.6s5.7-2.2 5.7-5.6"/>',
  circle:'<circle cx="12" cy="12" r="8.2"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5"/><path d="M12 7.6v.4"/>',
  eye:'<path d="M2.2 12S5.8 5.8 12 5.8 21.8 12 21.8 12 18.2 18.2 12 18.2 2.2 12 2.2 12Z"/><circle cx="12" cy="12" r="3.1"/>',
  chevdown:'<path d="M6 9.5 12 15.5 18 9.5"/>',
  leaf:'<path d="M11 20.5A7.2 7.2 0 0 1 9.7 6.4C15.4 5.2 17 4.6 19 2.1c1 2 2 4.2 2 8 0 5.6-4.8 10.4-10 10.4Z"/><path d="M2.5 21.5c0-3 1.9-5.4 5.1-6.1C10 14.9 12.5 13.3 13.5 12.2"/>',
  heart:'<path d="M12 20s-7-4.4-7-9.3A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.7C19 15.6 12 20 12 20Z"/>',
  calendar:'<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
  book:'<path d="M4 4.5h6a2.5 2.5 0 0 1 2.5 2.5v12A2 2 0 0 0 10.5 17H4Z"/><path d="M20 4.5h-6A2.5 2.5 0 0 0 11.5 7v12A2 2 0 0 1 13.5 17H20Z"/>',
  chart:'<path d="M5 20V11M12 20V5M19 20v-6"/>',
  people:'<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 6.2a3.2 3.2 0 0 1 0 5.9M17.5 20a5.6 5.6 0 0 0-2.2-4.3"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4"/>',
  moon:'<path d="M20 14.5A8.2 8.2 0 0 1 9.5 4a8.3 8.3 0 1 0 10.5 10.5Z"/>',
  run:'<circle cx="14" cy="4.6" r="1.9"/><path d="M6 20l3.2-4.6L7 12l1-4 3.4-1.2 2.8 3L17 11M9 12l-3 .6M13 14l2 2 .7 4"/>',
  chat:'<path d="M20 12.5a7 7 0 0 1-7 7H7l-3 2.4V12.5a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7Z"/>',
  star:'<path d="M12 3.6l2.5 5.3 5.5.8-4 4 .9 5.7L12 16.7 7.1 19.4 8 13.7l-4-4 5.5-.8Z"/>',
  utensils:'<path d="M6 3v8a2 2 0 0 0 4 0V3M8 11v10M17 3c-1.5 1-2 3-2 5s.6 3 2 3M17 11v10"/>',
  note:'<rect x="4.5" y="3.5" width="15" height="17" rx="2.5"/><path d="M8.5 8h7M8.5 12h7M8.5 16h4"/>',
  puzzle:'<path d="M10 4.5h4v2a1.8 1.8 0 1 0 3.6 0v-2H20v4.4h-1.8a1.8 1.8 0 1 0 0 3.6H20V19H10v-2a1.8 1.8 0 1 0-3.6 0v2H4V8.9h2.4a1.8 1.8 0 1 0 0-3.6H4V4.5Z"/>',
  bulb:'<path d="M9.5 18h5M10 21h4M12 3a6 6 0 0 1 3.5 10.9V16h-7v-2.1A6 6 0 0 1 12 3Z"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/>',
  clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  chev:'<path d="M9 5l7 7-7 7"/>',
  back:'<path d="M15 5l-7 7 7 7"/>',
  potty:'<path d="M6 4h9v6a4.5 4.5 0 0 1-9 0Z"/><path d="M9 14.5V20M12 14.5V20"/>',
  pill:'<rect x="3" y="9" width="18" height="6.5" rx="3.25"/><path d="M12 9v6.5"/>',
  home:'<path d="M4 10.5L12 4l8 6.5V20H4Z"/>',
  drop:'<path d="M12 3.2c3.2 3.8 5.5 6.7 5.5 9.6a5.5 5.5 0 0 1-11 0c0-2.9 2.3-5.8 5.5-9.6Z"/>',
  bag:'<rect x="3.5" y="7.5" width="17" height="12.5" rx="2.5"/><path d="M8.5 7.5V6a3.5 3.5 0 0 1 7 0v1.5"/>',
  shield:'<path d="M12 3.2l7 2.6v5.4c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V5.8Z"/>',
  user:'<circle cx="12" cy="8" r="3.7"/><path d="M4.9 20.2a7.1 7.1 0 0 1 14.2 0"/>',
  gear:'<circle cx="12" cy="12" r="3.1"/><path d="M19.1 14.6a1.6 1.6 0 0 0 .3 1.8l.1.1a1.9 1.9 0 1 1-2.7 2.7l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5v.2a1.9 1.9 0 1 1-3.8 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a1.9 1.9 0 1 1-2.7-2.7l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1h-.2a1.9 1.9 0 1 1 0-3.8h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a1.9 1.9 0 1 1 2.7-2.7l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5v-.2a1.9 1.9 0 1 1 3.8 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a1.9 1.9 0 1 1 2.7 2.7l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1h.2a1.9 1.9 0 1 1 0 3.8h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
  camera:'<path d="M3.5 8.5h3l1.6-2.4h6.8L16.5 8.5h4a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18v-8a1.5 1.5 0 0 1 1.5-1.5Z"/><circle cx="12" cy="13.6" r="3.4"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  flower:'<circle cx="12" cy="10" r="2.1"/><path d="M12 7.9c0-2 .8-3.6 2-3.6s1.4 2 .4 3.3M12 7.9c0-2-.8-3.6-2-3.6s-1.4 2-.4 3.3M14.1 10c2 0 3.6.8 3.6 2s-2 1.4-3.3.4M9.9 10c-2 0-3.6.8-3.6 2s2 1.4 3.3.4M12 12.1V20M12 16c1.6 0 3-1 3.4-2"/>',
};

function icon(name, size = 19, color = 'var(--deep)', sw = 1.7) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}"
    stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[name] || ICON.leaf}</svg>`;
}

/* -----------------------------------------------------------------
   THE GROWTH CHARACTER
   One drawing, ten states. Same character from seed to landscape,
   which is the whole point of the metaphor: it grows with the child.
   ----------------------------------------------------------------- */
function growthSVG(order, size = 46) {
  const G = '#7C9068', D = '#4A6741', S = '#C9B79E', E = '#EAEFE2';
  const base = 78;
  let art = '';

  if (order <= 1) {
    // Seed resting in soil, with the first leaf on state 1
    art += `<ellipse cx="50" cy="${base - 9}" rx="15" ry="17" fill="${S}"/>`;
    art += `<path d="M43 ${base - 14} Q50 ${base - 20} 57 ${base - 14}" stroke="#B5A288" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    if (order === 1) {
      art += `<path d="M50 ${base - 25} v9" stroke="${D}" stroke-width="3" stroke-linecap="round"/>`;
      art += `<ellipse cx="57" cy="${base - 28}" rx="9" ry="5.5" fill="${G}" transform="rotate(-22 57 ${base - 28})"/>`;
    }
  } else if (order <= 5) {
    // Stem with leaf pairs, growing taller and fuller
    const h = [0, 0, 20, 29, 38, 46][order];
    const pairs = [0, 0, 1, 2, 3, 3][order];
    art += `<ellipse cx="50" cy="${base - 4}" rx="13" ry="8" fill="${S}" opacity=".55"/>`;
    art += `<path d="M50 ${base - 4} v-${h}" stroke="${D}" stroke-width="3.4" stroke-linecap="round"/>`;
    for (let i = 0; i < pairs; i++) {
      const y = base - 10 - (h - 10) * (i / Math.max(pairs - 1, 1));
      const r = 10 - i * 1.1, ry = 6 - i * .5;
      art += `<ellipse cx="${50 + r + 3}" cy="${y}" rx="${r}" ry="${ry}" fill="${G}" transform="rotate(-20 ${50 + r + 3} ${y})"/>`;
      art += `<ellipse cx="${50 - r - 3}" cy="${y - 4}" rx="${r}" ry="${ry}" fill="${G}" opacity=".85" transform="rotate(20 ${50 - r - 3} ${y - 4})"/>`;
    }
    if (order === 5) art += `<circle cx="50" cy="${base - h - 4}" r="4.5" fill="${G}"/>`;
  } else {
    // Trunk and canopy: the same plant, grown up
    const th = [0, 0, 0, 0, 0, 0, 40, 46, 50, 50][order];
    const cr = [0, 0, 0, 0, 0, 0, 15, 19, 23, 23][order];
    if (order === 9) {
      art += `<path d="M2 ${base - 2} q18 -13 34 -2 q16 -12 30 -1 q14 -9 32 1 v14 H2 Z" fill="${E}"/>`;
    }
    art += `<ellipse cx="50" cy="${base - 3}" rx="15" ry="8" fill="${S}" opacity=".5"/>`;
    art += `<path d="M50 ${base - 3} v-${th}" stroke="${D}" stroke-width="4.6" stroke-linecap="round"/>`;
    if (order >= 8) {
      art += `<path d="M50 ${base - th + 16} l-11 -10M50 ${base - th + 24} l12 -10" stroke="${D}" stroke-width="3" stroke-linecap="round"/>`;
    }
    art += `<circle cx="50" cy="${base - th - cr + 6}" r="${cr}" fill="${G}"/>`;
    art += `<circle cx="${50 - cr * .72}" cy="${base - th - cr + 13}" r="${cr * .62}" fill="${G}" opacity=".9"/>`;
    art += `<circle cx="${50 + cr * .72}" cy="${base - th - cr + 12}" r="${cr * .66}" fill="${G}" opacity=".82"/>`;
  }
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 90" aria-hidden="true">${art}</svg>`;
}

/* The Ready Set Grow wordmark, drawn so the sprout in the O is the same
   character used everywhere else in the app. */
function wordmark(big = true) {
  // GROW sets the scale. Everything else is derived from it.
  const gw = big ? 46 : 34;
  const ring = gw * 0.92;          // the O matches the cap height
  const tall = ring * 2.3;         // room above for the stem and leaves
  const gap = ring * 1.15;         // READY and SET sit either side of the stem

  return `
  <div class="mark">
    <div class="mark-top" style="gap:${gap}px;font-size:${gw * 0.34}px">
      <span class="mark-word">READY</span>
      <span class="mark-word">SET</span>
    </div>
    <div class="mark-big">
      <span class="mark-grow" style="font-size:${gw}px">GR</span>
      <span class="mark-o-wrap" style="width:${ring}px;height:${ring}px">
        <svg width="${ring}" height="${tall}" viewBox="0 0 34 78" aria-hidden="true">
          <clipPath id="oclip${big ? 'L' : 'S'}"><circle cx="17" cy="59" r="12.9"/></clipPath>
          <g clip-path="url(#oclip${big ? 'L' : 'S'})">
            <path d="M2 64 q7 -4.5 15 -1.5 q8 3 15 -1.5 v20 H2 Z" fill="#D9C9AE"/>
          </g>
          <circle cx="17" cy="59" r="15.3" stroke="#7C9068" stroke-width="4.6" fill="none"/>
          <!-- one continuous stem, from inside the O up between READY and SET -->
          <path d="M17 62 C17 46 17 28 17 13" stroke="#5E7A4C" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <ellipse cx="25.5" cy="12" rx="8.2" ry="4.4" fill="#7C9068" transform="rotate(-30 25.5 12)"/>
          <ellipse cx="8.5" cy="17" rx="7.4" ry="4" fill="#8CA179" transform="rotate(28 8.5 17)"/>
          <ellipse cx="17" cy="4.5" rx="4.6" ry="3.4" fill="#6E8C5B" transform="rotate(-8 17 4.5)"/>
        </svg>
      </span>
      <span class="mark-grow" style="font-size:${gw}px">W</span>
    </div>
    <div class="mark-tag" style="font-size:${gw * 0.19}px">
      Parenting today<br>for a brighter tomorrow.
    </div>
  </div>`;
}

/* The data file returns arrays of lines. The web build joins them with
   <br>, the app joins them with a newline. Same source either way. */
function pickAffirmations(seed) {
  /* Ask for one line per shape in the field, so a wide window never
     shows the same words twice down the two gutters. The picker
     guarantees they are all different, and it stops at however many
     are written. */
  const picked = pickMarginLines(seed, AFFIRM_SPOTS.length);
  const html = (m) => m.lines.join('<br>');
  const all = picked.map(html);
  return {
    all,
    topLeft: all[0], midLeft: all[1], right: all[2],
  };
}

/**
 * The affirmation layer.
 *
 * In the mockups these soft shapes are not background noise. Each one
 * carries a line telling the parent something kind, and that makes them
 * part of the product rather than decoration. The lines come from
 * data/affirmations.js and rotate.
 */
function affirmation(lines, o) {
  o = o || {};
  /* The words sit in the middle of their shape with the heart under
     them, rather than being placed by hand per shape. One box, centred,
     so every bubble reads the same however many lines it holds. */
  return `
  <div class="affirm${o.cls ? ' ' + o.cls : ''}" style="${o.box || ''}">
    ${o.noShape ? '' : `<svg viewBox="0 0 190 150" preserveAspectRatio="none" aria-hidden="true">
      <path d="M22 8 C74 -10 150 2 172 44 C192 82 168 128 118 142 C68 156 8 132 2 88 C-3 52 2 20 22 8 Z"
        fill="${o.fill || '#E9EBDF'}"/></svg>`}
    <span class="affirm-in" style="${o.inset || 'inset:0'};${o.text || ''}">
      <span class="affirm-lines">${lines}</span>
      ${o.heart === false ? '' : `<span class="heart">&#9829;</span>`}
    </span>
  </div>`;
}

/* Leaf sprigs down both edges, as in every mockup. On desktop they move
   out to the edges of the reading column instead of the phone frame. */
function sprigsDesktop(sprig) {
  return sprigField(sprig);
}

function sprigs() {
  const sprig = (x, y, rot, scale, op) => `
    <g transform="translate(${x} ${y}) rotate(${rot}) scale(${scale})" opacity="${op}">
      <path d="M0 0 C4 -18 10 -30 18 -40" stroke="#C3D0B4" stroke-width="1.6" fill="none"/>
      <ellipse cx="9" cy="-13" rx="9.5" ry="5.2" fill="#CFDCC1" transform="rotate(-38 9 -13)"/>
      <ellipse cx="-2" cy="-24" rx="8.6" ry="4.8" fill="#D7E2CA" transform="rotate(28 -2 -24)"/>
      <ellipse cx="14" cy="-32" rx="8" ry="4.4" fill="#CFDCC1" transform="rotate(-46 14 -32)"/>
    </g>`;
  if (IS_DESKTOP) return sprigsDesktop(sprig);
  return `
  <svg class="leafart" style="top:70px;right:-12px;width:88px;height:220px" viewBox="0 0 88 220" aria-hidden="true">
    ${sprig(56, 70, 12, 1.05, .95)}${sprig(74, 152, -8, .9, .8)}${sprig(44, 212, 18, .8, .7)}
  </svg>
  <svg class="leafart" style="top:300px;left:-14px;width:88px;height:240px" viewBox="0 0 88 240" aria-hidden="true">
    ${sprig(32, 74, -20, 1, .9)}${sprig(16, 158, 12, .85, .75)}${sprig(38, 228, -10, .8, .7)}
  </svg>`;
}

/* The header every screen shares: logo centered, affirmations on soft shapes
   at the left, the promise line top right, sprigs framing both edges. */
function pageHeader(large) {
  const a = pickAffirmations(state.birthday);
  /* On desktop the whole header is painted into the fixed background
     layer by render(), so screens must not also emit a copy of it into
     the scroll container. Two copies is what made it move. */
  if (IS_DESKTOP) return '';
  return `
  ${affirmation(a.topLeft, {
    box: 'top:-34px;left:-46px;width:172px;height:138px',
    inset: 'inset:38px 10px 8px 52px',
    text: 'font-size:13.5px;transform:rotate(-6deg)',
  })}
  ${affirmation(a.midLeft, {
    box: 'top:352px;left:-52px;width:146px;height:120px', fill: '#EDEADF',
    inset: 'inset:10px 10px 10px 58px',
    text: 'font-size:12.5px;transform:rotate(-7deg)',
  })}
  ${affirmation(a.right, {
    box: 'top:368px;right:4px;width:118px;height:104px', noShape: true,
    inset: 'inset:8px 6px 8px 6px',
    text: 'font-size:12.5px;transform:rotate(-6deg)',
  })}
  ${sprigs()}
  <div class="corner-right">Brighter<br>Tomorrows<br>Together<span class="corner-rule"></span></div>
  <div class="mark-holder"${large ? ' style="padding-top:26px"' : ''}>${wordmark(!!large)}</div>`;
}

/* The same decorative layer as the phone, moved into the margins either
   side of the reading column. Anchored with calc against the center line
   so the blobs sit beside the content at any window width, and hidden by
   CSS below the width where that margin actually exists. */
/* The decorative layer, as a table rather than as a wall of markup.
 *
 * Each entry is one affirmation: which side it hangs from, how far in,
 * how far down, how big, and which tier it belongs to. Tiers decide when
 * a shape appears as the window changes width, and the CSS owns that.
 *
 *   mob    narrow screens, bleeding off the edges behind the cards,
 *          which is how the mockups look on a phone
 *   core   always on, once there is a gutter at all
 *   extra  a fuller set once the gutter can hold it
 *   wide   the inner column, anchored to the reading column with calc
 *          so it follows the text instead of drifting to the screen edge
 *
 * Fills alternate so the shapes do not read as a repeated stamp, and a
 * few carry no shape at all, which is what stops it looking like a grid.
 */
/* The field of shapes, generated rather than hand placed.
 *
 * Two columns of shapes down each side, half a step out of phase with
 * each other, and a cluster of sprouts in every gap between them. So
 * going down either gutter you get shape, sprouts, shape, sprouts, and
 * the two columns interlock rather than lining up in rows.
 *
 * Vertical positions are a share of the window height, because the
 * background is pinned to the viewport and has to fill whatever size
 * window she has open rather than a fixed page.
 *
 * Tiers decide when a column appears as the window narrows:
 *   mob    no gutter yet, three shapes bleeding off the edges
 *   core   the outer column, once there is any gutter at all
 *   extra  the rest of the outer column
 *   wide   the inner column, anchored to the reading column with calc
 */

const AFFIRM_FILLS = ['#E9EBDF', '#EDEADF', '#E6EBDC', '#EAECE0', '#EBE9DD'];
const AFFIRM_TILTS = [-5, 4, -3, 6, -4, 3, -6, 5];

/* THE DECORATIVE FIELD
 *
 * Columns of shapes right across the window, not only down the sides.
 * The cards sit on top of the middle ones and hide most of them, and
 * what shows through the gaps between cards is the point: the page
 * reads as one continuous field with the app laid over it, rather than
 * as a white strip with decoration pushed out to the margins.
 *
 * Every column is placed as a percentage of the window, so the spacing
 * opens and closes with the window instead of drifting. Sprouts sit in
 * the channel immediately to the right of each column, in ground no
 * shape ever occupies, which is what keeps a leaf off a word.
 *
 * Vertical positions are a share of window height, because the
 * background is pinned to the viewport and has to fill whatever size
 * window is open.
 */

const AFFIRM_WIDTHS = [118, 128, 122, 126, 120, 124];
const AFFIRM_HEIGHTS = [92, 100, 96, 104, 94, 98];
/* Six steps down the window, starting above the top edge so the field
   runs up behind the wordmark rather than starting under it, and
   carrying on to the bottom, where the solid tab bar covers whatever
   reaches it. */
const AFFIRM_ROWS = [-2, 13, 28, 43, 58, 73];
const AFFIRM_ROWS_ALT = [5.5, 20.5, 35.5, 50.5, 65.5, 80.5];

/* Four columns across at any desktop width, and four more slotted
   between them once the window is wide enough that they do not crowd. */
const AFFIRM_COLS = [
  { pct: 3,  tier: 'core', rows: AFFIRM_ROWS },
  { pct: 15, tier: 'wide', rows: AFFIRM_ROWS_ALT },
  { pct: 27, tier: 'core', rows: AFFIRM_ROWS },
  { pct: 39, tier: 'wide', rows: AFFIRM_ROWS_ALT },
  { pct: 51, tier: 'core', rows: AFFIRM_ROWS },
  { pct: 63, tier: 'wide', rows: AFFIRM_ROWS_ALT },
  { pct: 75, tier: 'core', rows: AFFIRM_ROWS },
  { pct: 87, tier: 'wide', rows: AFFIRM_ROWS_ALT },
];

function buildAffirmSpots() {
  const out = [];

  /* Phone. Three, hanging off the edges behind the content. */
  out.push({ tier: 'mob', side: 'left', x: '-54px', top: 'top:86px', w: 172, h: 138,
    fill: '#E9EBDF', tilt: -6, size: 13, inset: 'inset:12px 10px 10px 60px' });
  out.push({ tier: 'mob', side: 'right', x: '-48px', top: 'top:352px', w: 152, h: 124,
    fill: '#EDEADF', tilt: 5, size: 12.5, inset: 'inset:10px 56px 10px 10px' });
  out.push({ tier: 'mob', side: 'left', x: '-44px', top: 'top:600px', w: 154, h: 124,
    fill: '#E6EBDC', tilt: -5, size: 12.5, inset: 'inset:10px 10px 10px 50px' });

  let n = 0;
  AFFIRM_COLS.forEach((col) => {
    col.rows.forEach((topVh, r) => {
      /* The promise line owns the top right corner and Willow sits in
         the bottom right, so the last column steps around both. */
      if (col.pct >= 87 && (r === 0 || r === col.rows.length - 1)) return;
      /* Nothing behind the wordmark. The sprout growing out of the O is
         the one thing on the page that has to stay crisp, and since the
         columns are placed by percentage the clear zone has to be wide
         enough to hold at every window width. */
      if (col.pct >= 27 && col.pct <= 63 && topVh < 16) return;
      out.push({
        tier: col.tier,
        /* The band the cards sit over is painted quieter, so the field
           carries right across the window but never competes with the
           circles, the headings or anything she has to read. */
        hush: col.pct >= 27 && col.pct <= 63,
        side: 'left',
        x: col.pct + '%',
        top: 'top:' + topVh + 'vh',
        w: AFFIRM_WIDTHS[n % AFFIRM_WIDTHS.length],
        h: AFFIRM_HEIGHTS[n % AFFIRM_HEIGHTS.length],
        /* Every fourth one carries no shape, just the words, so the
           field does not read as a grid of identical stamps. */
        noShape: n % 4 === 3,
        fill: AFFIRM_FILLS[n % AFFIRM_FILLS.length],
        tilt: AFFIRM_TILTS[n % AFFIRM_TILTS.length],
        size: 12.5,
      });
      n++;
    });
  });
  return out;
}

const AFFIRM_SPOTS = buildAffirmSpots();

/* The sprouts. One narrow channel to the right of every column, in the
   strip of ground no shape reaches, on the rows that column is not
   using so they never sit level with its words either. */
const SPRIG_OFFSET = 134;   // px past a column's left edge, clear of its widest shape
const SPRIG_W = 40;

function sprigField(sprig) {
  let out = '';
  let n = 0;
  AFFIRM_COLS.forEach((col) => {
    const rows = col.rows === AFFIRM_ROWS ? AFFIRM_ROWS_ALT : AFFIRM_ROWS;
    rows.forEach((topVh) => {
      const h = 68;
      const hush = col.pct >= 27 && col.pct <= 63 ? ' leafart-hush' : '';
      out += `
      <svg class="leafart leafart-${col.tier}${hush}" aria-hidden="true"
        style="top:${topVh}vh;left:calc(${col.pct}% + ${SPRIG_OFFSET}px);width:${SPRIG_W}px;height:${h}px"
        viewBox="0 0 ${SPRIG_W} ${h}">
        ${sprig(SPRIG_W * 0.4, 27, n % 2 ? -16 : 15, .88, .74)}${sprig(SPRIG_W * 0.6, 58, n % 2 ? 13 : -14, .72, .5)}
      </svg>`;
      n++;
    });
  });
  return out;
}

function desktopHeader(a) {
  const lines = a.all || [];
  const shapes = AFFIRM_SPOTS.map((sp, i) => affirmation(lines[i % lines.length], {
    box: `${sp.side}:${sp.x};${sp.top};width:${sp.w}px;height:${sp.h}px`,
    fill: sp.fill,
    noShape: sp.noShape,
    cls: 'affirm-' + sp.tier + (sp.hush ? ' affirm-hush' : ''),
    inset: sp.inset,
    text: `font-size:${sp.size}px;transform:rotate(${sp.tilt}deg)`,
  })).join('');

  return `
  ${cornerFoliage()}
  ${shapes}
  ${sprigs()}
  <div class="corner-right">Brighter<br>Tomorrows<br>Together<span class="corner-rule"></span></div>`;
}

/* Soft foliage in the two far corners, well behind everything else.
   This is what stops the wide build reading as a white page with a
   column down the middle. Desktop only; the phone has its own pair in
   cornerLeaves. */
function cornerFoliage() {
  return `
  <svg class="leafart leafart-soft" style="top:-30px;left:-40px;width:280px;height:260px"
    viewBox="0 0 280 260" aria-hidden="true">
    <g fill="#DFE6D6">
      <ellipse cx="70" cy="44" rx="42" ry="21" transform="rotate(-28 70 44)"/>
      <ellipse cx="32" cy="104" rx="36" ry="18" transform="rotate(-8 32 104)"/>
      <ellipse cx="104" cy="112" rx="32" ry="16" transform="rotate(-52 104 112)"/>
      <ellipse cx="58" cy="172" rx="27" ry="14" transform="rotate(16 58 172)"/>
    </g>
    <path d="M-10 6 C34 58 66 104 118 140" stroke="#CFDCC1" stroke-width="2" fill="none"/>
  </svg>
  <svg class="leafart leafart-soft" style="bottom:64px;right:-46px;width:300px;height:280px"
    viewBox="0 0 300 280" aria-hidden="true">
    <g fill="#DFE6D6">
      <ellipse cx="222" cy="80" rx="40" ry="20" transform="rotate(26 222 80)"/>
      <ellipse cx="262" cy="146" rx="34" ry="17" transform="rotate(8 262 146)"/>
      <ellipse cx="186" cy="150" rx="30" ry="15" transform="rotate(48 186 150)"/>
      <ellipse cx="238" cy="214" rx="26" ry="13" transform="rotate(-18 238 214)"/>
    </g>
    <path d="M306 40 C262 96 226 142 174 178" stroke="#CFDCC1" stroke-width="2" fill="none"/>
  </svg>`;
}

/* Decorative corner leaves, matching the mockups */
function cornerLeaves() {
  if (IS_DESKTOP) return pageHeader();
  return pageHeader() + `
  <svg class="leafart" style="top:-18px;right:-14px;width:130px;height:150px" viewBox="0 0 130 150" aria-hidden="true">
    <g fill="#DCE4D2">
      <ellipse cx="96" cy="34" rx="21" ry="11" transform="rotate(-34 96 34)"/>
      <ellipse cx="72" cy="62" rx="18" ry="9.5" transform="rotate(-18 72 62)"/>
      <ellipse cx="108" cy="76" rx="16" ry="8.5" transform="rotate(-48 108 76)"/>
    </g>
    <path d="M120 12 C104 38 88 58 66 74" stroke="#CBD7BE" stroke-width="1.6" fill="none"/>
  </svg>
  <svg class="leafart" style="bottom:56px;left:-20px;width:110px;height:130px" viewBox="0 0 110 130" aria-hidden="true">
    <g fill="#DCE4D2" opacity=".85">
      <ellipse cx="20" cy="50" rx="19" ry="10" transform="rotate(28 20 50)"/>
      <ellipse cx="40" cy="80" rx="16" ry="8.5" transform="rotate(14 40 80)"/>
      <ellipse cx="12" cy="92" rx="14" ry="7.5" transform="rotate(44 12 92)"/>
    </g>
    <path d="M-4 34 C14 60 30 78 52 92" stroke="#CBD7BE" stroke-width="1.5" fill="none"/>
  </svg>`;
}

/* -----------------------------------------------------------------
   STATE
   ----------------------------------------------------------------- */
/* The full screen shell provides this marker. It is the same app either
   way; WIDE only decides where the decorative layer sits and how many
   tabs the bottom bar carries. */
const IS_DESKTOP = !!document.getElementById('wideLayout');

/* -----------------------------------------------------------------
   THE STORE

   Ready Set Grow has two kinds of user at once, and they are not the
   same person. A mother has her own recovery, her own pumping, her own
   community, and her own account. A child has an age, a set of support
   lenses, and content that is only right for that age.

   Mixing them is what makes most parenting apps feel wrong. A mother of
   a fourteen year old should never see a flange sizing card, and a
   twelve year old's profile should never be where the fourth trimester
   lives.

   So the store has two levels. Parent scoped things sit on `store`.
   Child scoped things sit inside a child record, and `state` below is a
   live view onto whichever child is currently selected.
   ----------------------------------------------------------------- */

const STORE_KEY = 'readysetgrow:v2';

/* A new child record. Everything about a child starts here, which is
   also what structurally stops one child's notes turning up under a
   sibling's name. */
/* -----------------------------------------------------------------
   FACES

   A row of names is a list. A row of faces is your family. Every
   profile, hers included, can carry a real photo or one of the drawn
   avatars, and a child with neither falls back to the growth sprout at
   their stage, which is still better than a grey silhouette.

   Photos never leave her account. They are resized down to 256 square
   in the browser before anything is stored, which keeps a 4MB phone
   photo from becoming a 4MB row in her database, and means the whole
   thing works on the free plan with no file storage set up at all.
   ----------------------------------------------------------------- */

const AVATARS = [
  { id: 'leaf', icon: 'leaf', bg: '#7C9A72' },
  { id: 'flower', icon: 'flower', bg: '#E8B4A0' },
  { id: 'sun', icon: 'sun', bg: '#F0D9A8' },
  { id: 'moon', icon: 'moon', bg: '#9BB8C4' },
  { id: 'star', icon: 'star', bg: '#C9A8D4' },
  { id: 'heart', icon: 'heart', bg: '#D98E73' },
  { id: 'drop', icon: 'drop', bg: '#A8C09A' },
  { id: 'bulb', icon: 'bulb', bg: '#C4B49B' },
];

function getAvatar(id) {
  return AVATARS.filter((a) => a.id === id)[0] || null;
}

/* One renderer for every face in the app, so a photo looks the same in
   the corner as it does on Home. `fallback` is either a growth order
   number for a child or the string 'me' for her. */
function faceHTML(photo, size, fallback) {
  const px = Math.round(size);
  const val = String(photo || '');

  if (val.indexOf('data:image') === 0) {
    return `<span class="face" style="width:${px}px;height:${px}px">
      <img src="${esc(val)}" alt="" />
    </span>`;
  }

  if (val.indexOf('avatar:') === 0) {
    const av = getAvatar(val.slice(7));
    if (av) {
      return `<span class="face" style="width:${px}px;height:${px}px;background:${av.bg}">
        ${icon(av.icon, Math.round(px * 0.52), '#fff', 1.8)}
      </span>`;
    }
  }

  if (fallback === 'me') {
    return `<span class="face plain" style="width:${px}px;height:${px}px">
      ${icon('user', Math.round(px * 0.5), 'var(--deep)')}
    </span>`;
  }

  return `<span class="face plain" style="width:${px}px;height:${px}px">
    ${growthSVG(typeof fallback === 'number' ? fallback : 2, Math.round(px * 0.72))}
  </span>`;
}

/* The face for a child, with their growth stage as the fallback. */
function childFace(k, size) {
  return faceHTML(k && k.photo, size, chipGrowthOrder(k));
}

function parentFace(size) {
  return faceHTML(store.parent && store.parent.photo, size, 'me');
}

/* Down to 256 square, centre cropped, before anything is saved. A phone
   photo is four thousand pixels wide and nobody needs that to fill a
   circle forty pixels across.

   Two things worth knowing about the route this takes. It goes through
   createImageBitmap rather than a FileReader, because that reads the
   orientation tag phones write into their photos: without it a picture
   taken in portrait comes out lying on its side, which is the classic
   version of this bug. And it never turns the original into a base64
   string, which on an eight megabyte photo would mean holding eleven
   megabytes of text in memory on a phone for no reason. */
function cropSquare(src, w, h) {
  const S = 256;
  const cv = document.createElement('canvas');
  cv.width = S; cv.height = S;
  const cx = cv.getContext('2d');
  const side = Math.min(w, h);
  cx.drawImage(src, (w - side) / 2, (h - side) / 2, side, side, 0, 0, S, S);
  return cv.toDataURL('image/jpeg', 0.82);
}

function readPhotoFile(file, done) {
  if (!file) { done('', 'No photo came back from the picker. Try choosing it again.'); return; }
  if (!/^image\//.test(file.type || '')) {
    done('', 'That file is not a photo. A jpg, png or heic from your camera roll works.');
    return;
  }

  /* The old browser route. An object URL rather than a data URL, so a
     big photo is not copied into a string first. */
  const viaImage = () => {
    let url = '';
    try { url = URL.createObjectURL(file); } catch (err) { done('', 'That photo could not be opened.'); return; }
    const img = new Image();
    img.onload = () => {
      let out = '';
      try { out = cropSquare(img, img.naturalWidth || img.width, img.naturalHeight || img.height); }
      catch (err) { out = ''; }
      try { URL.revokeObjectURL(url); } catch (err) {}
      done(out, out ? '' : 'That photo could not be resized. A smaller one usually works.');
    };
    img.onerror = () => {
      try { URL.revokeObjectURL(url); } catch (err) {}
      done('', 'That photo could not be opened. If it came from a text message, try saving it first.');
    };
    img.src = url;
  };

  if (typeof createImageBitmap === 'function') {
    let p = null;
    try { p = createImageBitmap(file, { imageOrientation: 'from-image' }); } catch (err) { p = null; }
    if (p && typeof p.then === 'function') {
      p.then((bmp) => {
        let out = '';
        try { out = cropSquare(bmp, bmp.width, bmp.height); } catch (err) { out = ''; }
        try { if (bmp.close) bmp.close(); } catch (err) {}
        if (out) done(out, '');
        else viaImage();
      }).catch(viaImage);
      return;
    }
  }
  viaImage();
}

/* -----------------------------------------------------------------
   CROPPING

   A square circle is a brutal thing to do to a photo somebody chose.
   Centre cropping puts the middle of the picture in the circle, and
   the middle of a photo of a child is very often their chest.

   So: pick, then move and zoom it until the face is where you want it,
   then use it. The original never leaves the browser and never gets
   saved anywhere. Only the finished 256 square does.

   The drag deliberately does NOT go through render. Repainting the
   whole screen on every pointermove would be unusable on a phone, and
   would also throw away the image element mid gesture. It moves the
   element directly and only writes the result down when the finger
   lifts. */

const crop = {
  on: false,
  target: '',
  src: '',      // an object URL for the chosen file, revoked when we are done
  /* The decoded photo itself. A post photo never draws a cropper on
     screen, so there is no #cropImg to read back from, and this is
     what the canvas copies from instead. */
  img: null,
  w: 0,
  h: 0,
  scale: 1,
  x: 0,
  y: 0,
  wired: false,
};

const CROP_VIEW = 264;   // the square she is looking at, in CSS pixels

/* Where the caret should land after the next repaint, set when an emoji
   is dropped into the middle of what she has written. */
let postCaret = null;

function cropBase() {
  if (!crop.w || !crop.h) return 1;
  return CROP_VIEW / Math.min(crop.w, crop.h);
}

/* The image must always cover the square, so it can never be dragged
   far enough to show a gap at the edge. */
function cropClamp() {
  const f = cropBase() * crop.scale;
  const dw = crop.w * f;
  const dh = crop.h * f;
  crop.x = Math.min(0, Math.max(CROP_VIEW - dw, crop.x));
  crop.y = Math.min(0, Math.max(CROP_VIEW - dh, crop.y));
}

function cropOpen(file, target) {
  if (!file || !/^image\//.test(file.type || '')) {
    store.photoError = 'That file is not a photo. A jpg, png or heic from your camera roll works.';
    render();
    return;
  }
  cropClose(true);
  let url = '';
  try { url = URL.createObjectURL(file); } catch (err) {
    store.photoError = 'That photo could not be opened.';
    render();
    return;
  }
  const img = new Image();
  img.onload = () => {
    crop.on = true;
    crop.target = target;
    crop.src = url;
    crop.img = img;
    crop.w = img.naturalWidth || img.width;
    crop.h = img.naturalHeight || img.height;
    crop.scale = 1;
    const f = cropBase();
    /* Start centred, which is the same place the old automatic crop
       used, so doing nothing gives the old behaviour. */
    crop.x = (CROP_VIEW - crop.w * f) / 2;
    crop.y = (CROP_VIEW - crop.h * f) / 2;
    crop.wired = false;
    store.photoBusy = false;
    store.photoError = '';
    /* A post photo goes straight in. There is nothing to frame. */
    if (target === 'post') { cropConfirm(); return; }
    render();
  };
  img.onerror = () => {
    try { URL.revokeObjectURL(url); } catch (e) {}
    store.photoBusy = false;
    store.photoError = 'That photo could not be opened. If it came from a text message, try saving it first.';
    render();
  };
  img.src = url;
}

function cropClose(quiet) {
  if (crop.src) { try { URL.revokeObjectURL(crop.src); } catch (e) {} }
  crop.on = false;
  crop.src = '';
  crop.img = null;
  crop.target = '';
  crop.wired = false;
  if (!quiet) render();
}

/* What she is looking at, turned into the 256 square that gets saved. */
function cropConfirm() {
  if (!crop.on) return;
  const target = crop.target;
  /* A post photo keeps its shape and its detail. Cropping it to a 256
     circle would be pointless, since the whole reason for putting it in
     a post is looking at it. */
  if (target === 'post') {
    const imgEl = crop.img || document.getElementById('cropImg');
    let out = '';
    try {
      if (!imgEl) throw new Error('no image');
      const MAX = 1100;
      const w = crop.w;
      const h = crop.h;
      const f = Math.min(1, MAX / Math.max(w, h));
      const cv = document.createElement('canvas');
      cv.width = Math.round(w * f);
      cv.height = Math.round(h * f);
      cv.getContext('2d').drawImage(imgEl, 0, 0, cv.width, cv.height);
      out = cv.toDataURL('image/jpeg', 0.82);
    } catch (err) { out = ''; }
    cropClose(true);
    if (out) postPhotoAdd(out);
    else { store.photoError = 'That photo could not be added. A smaller one usually works.'; render(); }
    return;
  }
  const img = document.getElementById('cropImg');
  if (!img) { cropClose(); return; }
  cropClamp();
  const f = cropBase() * crop.scale;
  const side = CROP_VIEW / f;
  const sx = (0 - crop.x) / f;
  const sy = (0 - crop.y) / f;
  let out = '';
  try {
    const S = 256;
    const cv = document.createElement('canvas');
    cv.width = S; cv.height = S;
    const cx = cv.getContext('2d');
    cx.drawImage(img, sx, sy, side, side, 0, 0, S, S);
    out = cv.toDataURL('image/jpeg', 0.82);
  } catch (err) { out = ''; }
  cropClose(true);
  if (out) applyFaceValue(target, out);
  else { store.photoError = 'That photo could not be saved. A smaller one usually works.'; render(); }
}

function cropCard() {
  if (!crop.on) return '';
  if (crop.target === 'post') return '';
  const f = cropBase() * crop.scale;
  return `
  <div class="card cropcard">
    <p class="eyebrow">${icon('camera', 11, 'var(--sage)')} Move it where you want it</p>
    <div class="cropstage" id="cropStage">
      <img id="cropImg" src="${esc(crop.src)}" alt="" draggable="false"
        style="width:${Math.round(crop.w * f)}px;height:${Math.round(crop.h * f)}px;
               transform:translate(${Math.round(crop.x)}px,${Math.round(crop.y)}px)" />
      <span class="cropring"></span>
    </div>
    <div class="croprow">
      <span class="tiny">Zoom</span>
      <input class="cropzoom" id="cropZoom" type="range" min="100" max="320" value="${Math.round(crop.scale * 100)}" />
    </div>
    <p class="tiny" style="margin-top:6px">Drag the photo to move it. Only the part inside the circle is saved.</p>
    <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;justify-content:flex-end">
      <button class="chip" data-crop="cancel">Cancel</button>
      <button class="chip" data-crop="another">Choose another</button>
      <button class="btn" data-crop="use" style="width:auto;flex:none;padding:10px 20px">
        ${icon('check', 15, '#fff')} Use this photo
      </button>
    </div>
  </div>`;
}

/* Wired after the markup exists, and only once per appearance. The
   gesture moves the element itself rather than asking for a repaint,
   because a repaint mid drag would destroy the thing being dragged. */
function cropWire() {
  const stage = document.getElementById('cropStage');
  const img = document.getElementById('cropImg');
  if (!stage || !img || crop.wired) return;
  crop.wired = true;

  const apply = () => {
    cropClamp();
    img.style.transform = 'translate(' + Math.round(crop.x) + 'px,' + Math.round(crop.y) + 'px)';
  };

  let dragging = false;
  let sx = 0;
  let sy = 0;
  let ox = 0;
  let oy = 0;

  stage.addEventListener('pointerdown', (e) => {
    dragging = true;
    sx = e.clientX; sy = e.clientY; ox = crop.x; oy = crop.y;
    try { stage.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
  });
  stage.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    crop.x = ox + (e.clientX - sx);
    crop.y = oy + (e.clientY - sy);
    apply();
    e.preventDefault();
  });
  const stop = (e) => {
    if (!dragging) return;
    dragging = false;
    try { stage.releasePointerCapture(e.pointerId); } catch (err) {}
  };
  stage.addEventListener('pointerup', stop);
  stage.addEventListener('pointercancel', stop);

  const zoom = document.getElementById('cropZoom');
  if (zoom) {
    zoom.addEventListener('input', () => {
      const next = Math.max(1, Number(zoom.value) / 100);
      /* Zoom toward the middle of the square rather than the top left,
         which is what it feels like it should do. */
      const before = cropBase() * crop.scale;
      const after = cropBase() * next;
      const cx = CROP_VIEW / 2;
      crop.x = cx - ((cx - crop.x) / before) * after;
      crop.y = cx - ((cx - crop.y) / before) * after;
      crop.scale = next;
      const f = after;
      img.style.width = Math.round(crop.w * f) + 'px';
      img.style.height = Math.round(crop.h * f) + 'px';
      apply();
    });
  }
}

/* ONE file input, for the whole app, living outside the screen.

   This is the bug she hit. The input used to sit inside the picker,
   which means inside the part of the page that gets thrown away and
   rebuilt on every repaint. Choosing a photo on a phone backgrounds
   the app while the camera roll is open, and if anything repainted in
   that moment the input she picked into no longer existed by the time
   the picker handed the file back. The change event fired at nothing
   and the photo quietly vanished.

   An element appended to the body once, at boot, cannot be thrown away
   by a repaint. */
let photoInput = null;
let photoTarget = '';

function ensurePhotoInput() {
  if (photoInput && photoInput.isConnected) return photoInput;
  const el = document.createElement('input');
  el.type = 'file';
  el.accept = 'image/*';
  el.id = 'rsgPhotoIn';
  el.style.position = 'fixed';
  el.style.left = '-9999px';
  el.style.width = '1px';
  el.style.height = '1px';
  el.setAttribute('aria-hidden', 'true');
  el.addEventListener('change', () => {
    const file = el.files && el.files[0];
    const target = photoTarget;
    el.value = '';
    if (!target) return;
    store.photoBusy = true;
    store.photoError = '';
    render();
    /* Straight to the cropper rather than straight to saved, so she
       decides what ends up in the circle. */
    cropOpen(file, target);
  });
  document.body.appendChild(el);
  photoInput = el;
  return el;
}

function pickPhoto(target) {
  photoTarget = target;
  store.photoError = '';
  const el = ensurePhotoInput();
  try { el.click(); } catch (err) {
    store.photoError = 'This browser would not open the photo picker.';
    render();
  }
}

/* Where a finished face lands. 'me' or a child id, same shape as the
   date fields, for the same reason. A face chosen while a profile is
   being edited goes into the draft and waits for Save like everything
   else on that screen. */
function applyFaceValue(target, value) {
  const e = store.profileEdit;
  if (e && e.who === target) { e.values.photo = value; render(); return; }
  if (target === 'me') {
    store.parent.photo = value;
    store.parentUpdatedAt = Date.now();
  } else {
    const k = store.children.filter((x) => x.id === target)[0];
    if (!k) return;
    k.photo = value;
    k.updatedAt = Date.now();
  }
  flushStore();
  render();
}

function newChildRecord(name, birthday) {
  return {
    id: 'c' + Date.now() + Math.floor(Math.random() * 1000),
    name: (name || '').trim(),
    birthday: birthday || null,
    /* A photo of this child, or 'avatar:<id>' for one of the drawn ones,
       or empty for the growth sprout. Stored on the record so it follows
       them to every device rather than living in one browser. */
    photo: '',
    lenses: [],
    lensOptions: {},
    lensNumbers: {},
    statuses: {},
    /* The day each milestone was first marked as reached. This is the
       part a parent actually wants later: not that he can do it, but
       when he started. */
    statusDates: {},
    milestonesUpdatedAt: '',
    /* One entry per day, keyed YYYY-MM-DD. See src/data/checkins.js. */
    checkins: {},
    /* How they arrived. Changes the framing of their early days, never
       anything about their development. See src/data/situation.js. */
    arrival: [],
    wakeTime: '06:30',
    napOverride: null,
    routineInclude: [],
    /* What has been given, keyed series:dose to a date, plus
       season:<id> to a list of dates for the yearly ones. vaxSkip is
       the series this family has decided against, which is a settled
       state rather than a permanently outstanding one. See
       src/data/vaccineRecord.js. */
    vax: {},
    vaxSkip: [],
    /* Which set of growth curves to plot them on. Empty until asked,
       and asked only on the growth screen, which is the one place it
       is needed. See screenGrowth. */
    sex: '',
    /* THE SEED STAGE. A child added before they are born holds a due
       date and an empty birthday, so that every screen reading
       `birthday` treats them as not yet dated rather than computing an
       age from a day in the future. On the day they arrive, birthday
       is filled in and expecting goes false, on the same record with
       the same id, so nothing started before birth is left behind.

       The due date is KEPT afterwards on purpose. The gap between the
       two is their gestational age at birth and it matters for years.

       Nothing has to be added to any sync list for these. Children are
       merged through normalizeChild, which builds every record on top
       of this one, so a field added here syncs by itself. It is the
       PARENT record that has a hand written key list in flushStore.
       See src/data/expecting.js. */
    expecting: false,
    dueDate: null,
    /* Weights, lengths and head measurements, one entry per occasion,
       always stored in kilograms and centimetres whatever the parent
       reads. See src/data/growth.js. */
    growth: [],
    /* Logs belong to the child rather than to the app, which is what
       structurally stops one child's feeds turning up under a sibling. */
    logs: [],
    createdAt: new Date().toISOString(),
  };
}

const store = {
  /* The parent's own account. Password is deliberately absent. A real
     account needs a server, and storing one in a browser would be worse
     than not having one at all. The profile screen says so out loud. */
  parent: { name: '', username: '', email: '', birthday: '', lastPeriod: '', cycleLength: '',
    photo: '',
    /* Who they are to the child, and how the app should write about
       them. Both optional. See CALLED_BY and REFERS_TO. */
    calledBy: '', calledByOther: '', refersTo: '',
    /* Whether the half of the app about their own body applies to
       them. Empty until asked. See BODY_CARE_ASK in situation.js for
       why this is a question rather than something inferred. */
    bodyCare: '',
    /* Where she actually is, so the app stops showing her things that
       finished a while ago. See src/data/situation.js. */
    situation: { stages: [], path: '', roles: [], support: [] } },

  /* Posts. Hers, private unless she deliberately shares one. */
  posts: [],
  postDraft: null,
  postOpen: false,

  /* Memories. Photos, videos, voice memos and little things said, kept
     for every child and for her. Nothing here ever expires on its own,
     so this list only ever shrinks when somebody deletes something. */
  memories: [],
  memDraft: null,

  /* Willow's walkthrough. Only ever opened by a deliberate flag, never
     by the app deciding an account looks empty. See the section that
     builds it for why that distinction matters. */
  onboard: { open: false, done: false, step: 'hello', line: '', lineFrom: '' },

  /* The last time Willow decided something was worth speaking up about,
     and how many times she has today. Persisted so closing the app does
     not reset her restraint. */
  nudge: {},

  /* Willow's framing for today's plan, one per child, thrown away at
     midnight when the plan itself changes. Never synced: it is a day
     old at most and regenerating it costs less than carrying it. */
  planLift: null,

  /* Accounts she has blocked in the feed. Kept on her own record and
     filtered on her own device, because a query cannot say "not in this
     list" and who somebody has blocked is nobody else's business. */
  blocked: [],
  feedError: '',
  feedThanks: false,

  /* The day the project last ran out of AI quota. Everything Willow
     writes in the background stands down for the rest of that day so
     the chat keeps whatever is left. */
  liftQuotaDay: '',
  liftQuotaHit: false,

  /* The day the "a year ago today" card was waved away, so it stays
     away until tomorrow rather than coming back on the next reload. */
  memDayHidden: '',
  /* Memories that were deliberately deleted. Without this, the other
     device would push its old copy straight back and the thing she
     removed would reappear. */
  deletedMemoryIds: [],

  /* The corner menu. Never persisted: a menu left open across a reload
     would be a small haunting. */
  menuOpen: false,

  /* THE FAMILY CHORE CHART.
     choreJobs is the chart itself: one entry per job per person, with
     the days it falls on. choreDone is what has actually been ticked,
     keyed by date then by job, and trimmed to about ten weeks so a
     family who uses this for years does not carry every tick forever.
     choreAdults is anybody on the chart who is not the parent and not
     a child, such as a partner or a grandparent. */
  choreJobs: [],
  choreDone: {},
  choreAdults: [],
  choreStarsOn: true,
  choreTab: 'today',
  choreDay: null,
  chorePick: null,

  /* Which age band of the learning day is being looked at, when it is
     not simply the active child's own. */
  learnBand: '',
  learnTab: 'day',

  /* Pounds and inches or kilograms and centimetres. A preference of the
     parent's, not of the child's, because a household reads one or the
     other and the numbers are stored metric either way. */
  /* Notification settings. Kept locally as well as on the account so
     the screen can draw before Firestore has answered. pushOn is the
     one that means permission was granted and a token was saved. */
  pushOn: false,
  pushPrefs: {},

  /* Willow's draft for today, and whether it has been sent. Keyed by
     the day so yesterday's cannot be posted by accident. */
  willowPost: null,
  /* Whether the invite link was copied rather than shared, so the
     button can say so. Never persisted. */
  shareLinkCopied: false,

  /* Which signing band is being looked at, when it is not simply the
     child's own. */
  signStage: '',

  vaxTab: 'visits',
  vaxVisit: '',
  vaxOpen: '',
  vaxEdit: '',
  vaxError: '',
  vaxCopied: false,

  growthUnits: 'us',
  growthTab: 'chart',
  growthMeasure: 'weight',
  growthDraft: {},
  growthError: '',
  growthCopied: false,

  /* The day the add to home screen banner was waved away. It comes back
     a week later rather than never, because somebody who says not now
     in a hospital car park genuinely might say yes on the sofa, and
     somebody who never wants it will wave it away twice and then it
     stops for good. */
  installHidden: '',
  installWaves: 0,

  /* Which month the cycle calendar is showing, 0 being this one. */
  calMonth: 0,
  children: [],
  activeChildId: null,

  /* Which birthday greetings have already been seen, keyed by who and
     year, so the card shows once on the day rather than every single
     time the app is opened between breakfast and bedtime. */
  birthdaySeen: {},

  /* The Profile tab shows whoever is selected. Tapping her own face in
     the corner puts 'me' here, tapping a child's circle on Home puts
     their id, and the tab simply renders whoever that is. */
  profileWho: 'me',

  /* Null when a profile is sitting there being read, and an object
     while it is being edited. Nothing reaches the real record until
     Save, so backing out of a half typed change costs nothing. */
  profileEdit: null,

  /* Milestones in progress. Taps land here rather than on the child
     until Save, and this one IS persisted: a parent who taps four
     things and then goes to answer the door should find them still
     waiting when she comes back, not gone. */
  msEdit: null,

  /* Today's check in, before it is saved. Same shape and the same
     reasoning as the milestone draft. */
  ciEdit: null,
  ciOpen: false,

  /* A photo being resized, and whatever went wrong if it did. Never
     persisted: a failure belongs to the moment it happened. */
  photoBusy: false,
  photoError: '',

  /* How many pieces of background writing have been generated today,
     so a feature nobody asked to open cannot quietly eat the budget
     that the chat she actually opened is meant to have. */
  liftUsed: 0,
  liftDate: '',

  /* Parent scoped. These follow the mother, not any child. */
  bagChecked: [],
  outChecked: [],   // the packing checklist, ticked per trip and per child
  outTrip: 'day',   // which kind of trip she is packing for
  daycareHours: 0,  // hours in daycare, for the diaper estimate
  pumpTab: 'flange',
  pumpGoal: 'exclusive',
  pumpProblem: null,
  flangeMm: '',
  ppTab: 'timeline',
  ppStage: 'days-1-3',

  /* Ask. askQuery is what is being typed, askAsked is what was
     submitted, so the results do not churn on every keystroke. */
  askQuery: '',
  askAsked: '',

  /* Session. hadSession records that this browser has signed in before,
     so a page load knows whether it is worth waiting for Firebase to
     restore the session before deciding to show the sign in screen.
     guest records that they chose to look around without an account,
     which should also survive a refresh. */
  hadSession: false,
  guest: false,

  /* Sync bookkeeping. deletedChildIds is a list of tombstones, because
     a child missing from the list is not the same as a child that was
     deleted, and without this every sign in would resurrect everything
     ever removed. */
  deletedChildIds: [],
  /* Name and birthday pairs a parent has told us really are two
     different children, so the app stops offering to combine them. */
  notDuplicates: [],
  parentUpdatedAt: 0,

  /* A log part way through being filled in, so a re render does not
     wipe what somebody has already typed, plus where it was opened from
     so saving returns there. */
  logDraft: { typeId: null, values: {} },
  logFrom: null,

  /* Navigation. */
  tab: IS_DESKTOP ? 'home' : 'welcome',
  view: null,
  undGroup: null,

  /* Which age band the understanding screen is showing. Null means
     use the child's real age, which is what it does on first open. */
  lensBand: null,

  /* Sub tabs on the feeding and safety screens. */
  feedTab: 'stance',
  outTab: null,
  safetyTab: 'cpr',

  /* Profile screen drafts, so a half typed child does not vanish on
     a re render. */
  draftChildName: '',
  draftChildBday: '',
  draftExpecting: false,
};

const auth = {
  ready: false,      // has the SDK finished loading and reported back
  checking: false,   // restoring a previous session, so do not show the door yet
  user: null,        // the signed in Firebase user, or null
  guest: false,      // looking around without an account
  busy: false,
  error: '',
  mode: 'signup',    // which half of the screen is showing
  form: { name: '', email: '', password: '' },
};


function activeChild() {
  if (!store.activeChildId) return null;
  return store.children.find((k) => k.id === store.activeChildId) || null;
}

function selectChild(id) {
  store.activeChildId = id || null;
  store.view = null;
  store.lensBand = null;
  flushStore();
}

/* An empty stand in so a screen that reads a child field while no child
   is selected gets a sane value instead of throwing. Writes to it are
   discarded on purpose, since there is nowhere for them to go. */
const NO_CHILD = newChildRecord('', null);

/* `state` is a live view onto the active child plus everything parent
   scoped, which is what lets every screen written before profiles
   existed keep working untouched. Reading state.lenses returns the
   real array on the real child, so push and splice still work. */
const state = {};

['name', 'birthday', 'lenses', 'lensOptions', 'lensNumbers', 'statuses',
 'wakeTime', 'napOverride', 'routineInclude', 'logs'].forEach((key) => {
  Object.defineProperty(state, key, {
    enumerable: true,
    get() { return (activeChild() || NO_CHILD)[key]; },
    set(v) { const k = activeChild(); if (k) k[key] = v; },
  });
});

['parent', 'children', 'activeChildId', 'bagChecked', 'outChecked', 'outTrip', 'daycareHours', 'birthdaySeen', 'profileWho', 'posts', 'postDraft',
 'postOpen', 'menuOpen', 'calMonth',
 'profileEdit', 'msEdit', 'ciEdit', 'ciOpen', 'photoBusy', 'photoError',
 'liftUsed', 'liftDate', 'pumpTab', 'pumpGoal',
 'pumpProblem', 'flangeMm', 'ppTab', 'ppStage', 'askQuery', 'askAsked',
 'tab', 'view', 'undGroup', 'lensBand', 'feedTab', 'outTab', 'safetyTab',
 /* EVERY SUB TAB KEY HAS TO BE IN THIS LIST.
    The one handler for every tab strip writes state[key], and state is
    a view onto store for the names below and a plain object for
    anything else. A key that is missing gets written to a property
    nothing reads, so the tab lights up, the screen does not change,
    and nothing throws. That is exactly what happened to the Learning
    tabs, and to Jobs, Growth and the vaccine record with them. The
    build now refuses to finish if a data-sub key is not here. */
 'learnTab', 'choreTab', 'growthTab', 'vaxTab', 'supportTab', 'onlineTab', 'growTab', 'conTab', 'expTab',
 'logDraft', 'draftChildName', 'draftChildBday', 'draftExpecting'].forEach((key) => {
  Object.defineProperty(state, key, {
    enumerable: true,
    get() { return store[key]; },
    set(v) { store[key] = v; },
  });
});

/* Persistence. Everything a parent enters stays put across visits, which
   is the whole point of a profile. Wrapped because storage can be
   blocked outright in a private window, and a blocked write must not
   take the app down with it. */
let saveTimer = null;

/* Writes immediately. Used wherever losing the change would actually
   hurt, such as adding a child and then closing the tab. */
function flushStore() {
  if (saveTimer) { clearTimeout(saveTimer); saveTimer = null; }
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      parent: store.parent,
      children: store.children,
      activeChildId: store.activeChildId,
      bagChecked: store.bagChecked,
      outChecked: store.outChecked,
      outTrip: store.outTrip,
      daycareHours: store.daycareHours,
      birthdaySeen: store.birthdaySeen,
      posts: store.posts,
      /* Memories live here too, or a voice memo saved this morning
         would be gone by the afternoon. */
      memories: store.memories,
      memDayHidden: store.memDayHidden,
      installHidden: store.installHidden,
      choreJobs: store.choreJobs,
      choreDone: store.choreDone,
      choreAdults: store.choreAdults,
      choreStarsOn: store.choreStarsOn,
      growthUnits: store.growthUnits,
      pushOn: store.pushOn,
      pushPrefs: store.pushPrefs,
      willowPost: store.willowPost,
      installWaves: store.installWaves,
      onboard: store.onboard,
      nudge: store.nudge,
      planLift: store.planLift,
      blocked: store.blocked,
      liftQuotaDay: store.liftQuotaDay,
      liftQuotaHit: store.liftQuotaHit,
      deletedMemoryIds: store.deletedMemoryIds,
      postDraft: store.postDraft,
      msEdit: store.msEdit,
      ciEdit: store.ciEdit,
      /* Persisted, same as the other two drafts. It used to be memory
         only, which meant a photo she had picked but not yet saved
         disappeared the moment anything reloaded. That is how Stetson's
         photo went missing while hers stayed. */
      profileEdit: store.profileEdit,
      hadSession: store.hadSession,
      guest: store.guest,
      deletedChildIds: store.deletedChildIds,
      notDuplicates: store.notDuplicates,
      parentUpdatedAt: store.parentUpdatedAt,
    }));
    /* Everything that saves locally also queues the cloud copy, so no
       future screen has to remember to sync. */
    cloudQueue();
  } catch (err) { /* private window, blocked storage, quota. Carry on. */ }
}

/* Writes shortly. Used from render, which runs on every keystroke. */
function saveStore() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(flushStore, 350);
}

/* A tab can be closed or backgrounded inside the debounce window, so the
   pending write gets one last chance on the way out. */
if (typeof document !== 'undefined' && document.addEventListener) {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushStore();
    /* Coming back to the app is the natural moment to find out whether
       it has been replaced underneath you. */
    else if (typeof checkForUpdate === 'function') checkForUpdate(false);
  });
  window.addEventListener('pagehide', flushStore);

  /* Two tabs of the app used to quietly overwrite each other. Each one
     holds the whole store in memory and writes all of it on every
     change, so a tab left open on an old screen would eventually flush
     its stale copy straight over whatever the other tab had just
     saved. That is how a photo can be in storage one minute and gone
     the next through no fault of the person who uploaded it.

     A storage event only fires in the OTHER tabs, which is exactly what
     is wanted: whoever just wrote keeps what they wrote, and everybody
     else picks it up. A tab with an edit open is left alone rather than
     having it yanked out from under her. */
  window.addEventListener('storage', (e) => {
    if (e.key !== STORE_KEY || !e.newValue) return;
    if (store.profileEdit || store.msEdit || store.ciEdit) return;
    try {
      if (saveTimer) { clearTimeout(saveTimer); saveTimer = null; }
      loadStore();
      render();
    } catch (err) { /* Better a stale tab than a broken one. */ }
  });
}

/* A date the old native input let through. Typing a year into one of
   those three little segments is fiddly enough that a first keystroke
   landing alone saves a real, parseable, completely wrong date: 0001-03-14
   rather than 1991-03-14. It looks harmless in storage and then pops a
   birthday screen in March for somebody born two thousand years ago.
   Anything outside a plausible range is treated as never answered. */
function sanitizeStoredDate(value, aheadYears) {
  const m = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return '';
  const y = Number(m[1]);
  const max = new Date().getFullYear() + (Number(aheadYears) || 0);
  if (y < 1900 || y > max) return '';
  return value;
}

function loadStore() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem(STORE_KEY) || 'null'); } catch (err) { saved = null; }

  /* Session flags come back first, because an account with no children
     yet still needs its session restored on refresh. */
  if (saved) {
    store.hadSession = !!saved.hadSession;
    store.guest = !!saved.guest;
    store.deletedChildIds = Array.isArray(saved.deletedChildIds) ? saved.deletedChildIds : [];
    store.notDuplicates = Array.isArray(saved.notDuplicates) ? saved.notDuplicates : [];
    store.parentUpdatedAt = Number(saved.parentUpdatedAt) || 0;
    store.birthdaySeen = (saved.birthdaySeen && typeof saved.birthdaySeen === 'object')
      ? saved.birthdaySeen : {};
    store.profileEdit = (saved.profileEdit && typeof saved.profileEdit === 'object'
      && saved.profileEdit.who && saved.profileEdit.values) ? saved.profileEdit : null;
    store.msEdit = (saved.msEdit && typeof saved.msEdit === 'object' && saved.msEdit.childId)
      ? saved.msEdit : null;
    store.ciEdit = (saved.ciEdit && typeof saved.ciEdit === 'object' && saved.ciEdit.childId)
      ? saved.ciEdit : null;
    store.posts = Array.isArray(saved.posts) ? saved.posts : [];
    store.memories = Array.isArray(saved.memories) ? saved.memories : [];
    store.memDayHidden = typeof saved.memDayHidden === 'string' ? saved.memDayHidden : '';
    store.installHidden = typeof saved.installHidden === 'string' ? saved.installHidden : '';
    store.choreJobs = Array.isArray(saved.choreJobs) ? saved.choreJobs : [];
    store.choreDone = (saved.choreDone && typeof saved.choreDone === 'object') ? saved.choreDone : {};
    store.choreAdults = Array.isArray(saved.choreAdults) ? saved.choreAdults : [];
    /* Only a saved false turns stars off. A store from before this
       existed has neither, and those families get stars, which is the
       default everywhere else. */
    store.choreStarsOn = saved.choreStarsOn === false ? false : true;
    store.growthUnits = saved.growthUnits === 'metric' ? 'metric' : 'us';
    store.pushOn = !!saved.pushOn;
    store.pushPrefs = (saved.pushPrefs && typeof saved.pushPrefs === 'object') ? saved.pushPrefs : {};
    store.willowPost = (saved.willowPost && typeof saved.willowPost === 'object') ? saved.willowPost : null;
    store.installWaves = Number(saved.installWaves) || 0;
    store.deletedMemoryIds = Array.isArray(saved.deletedMemoryIds) ? saved.deletedMemoryIds : [];
    store.onboard = (saved.onboard && typeof saved.onboard === 'object')
      ? saved.onboard : { open: false, done: false, step: 'hello', line: '', lineFrom: '' };
    store.nudge = (saved.nudge && typeof saved.nudge === 'object') ? saved.nudge : {};
    store.planLift = (saved.planLift && typeof saved.planLift === 'object') ? saved.planLift : null;
    store.blocked = Array.isArray(saved.blocked) ? saved.blocked : [];
    store.liftQuotaDay = typeof saved.liftQuotaDay === 'string' ? saved.liftQuotaDay : '';
    store.liftQuotaHit = !!saved.liftQuotaHit;
    store.postDraft = (saved.postDraft && typeof saved.postDraft === 'object') ? saved.postDraft : null;
  }

  /* SHE COMES BACK WHETHER OR NOT THERE ARE CHILDREN YET.

     This used to sit inside the children check below, which meant an
     account with no child on it lost her name, username, email,
     birthday and everything she had ticked about her situation on
     every single reload. Somebody who signed up, told the app who they
     were, and had not added a child yet got an empty profile back.
     Willow's walkthrough makes that path far more likely, since it now
     asks who you are before it asks about a child and lets you skip
     the child entirely. */
  if (saved && saved.parent) {
    store.parent = Object.assign({ name: '', username: '', email: '', birthday: '', lastPeriod: '', cycleLength: '', photo: '', calledBy: '', calledByOther: '', refersTo: '', situation: { stages: [], path: '', roles: [], support: [] } }, saved.parent);
    store.parent.birthday = sanitizeStoredDate(store.parent.birthday, 0);
    store.parent.lastPeriod = sanitizeStoredDate(store.parent.lastPeriod, 0);
    store.parent.situation = normalizeSituation(store.parent.situation);
    store.bagChecked = Array.isArray(saved.bagChecked) ? saved.bagChecked : [];
    store.outChecked = Array.isArray(saved.outChecked) ? saved.outChecked : [];
    store.outTrip = typeof saved.outTrip === 'string' ? saved.outTrip : 'day';
    store.daycareHours = Number(saved.daycareHours) || 0;
    store.parentUpdatedAt = Number(saved.parentUpdatedAt) || 0;
  }

  if (saved && Array.isArray(saved.children) && saved.children.length) {
    // Fill in any field an older saved record is missing, so a profile
    // written by a previous version cannot crash a newer screen.
    store.children = saved.children.map((k) => Object.assign(normalizeChild(k), {
      birthday: sanitizeStoredDate(k.birthday, 2) || null,
    }));
    /* Reopen whoever was open last. Three of the five tabs are about one
       child, so dropping back to the picker on every refresh would make
       the app feel like it forgot. With one child there is nothing to
       choose, so that one opens itself. */
    const was = saved.activeChildId;
    const stillThere = was && store.children.some((k) => k.id === was);
    store.activeChildId = stillThere ? was
      : (store.children.length === 1 ? store.children[0].id : null);
    return true;
  }

  /* An account that exists but has no child on it yet. Her own details
     have already been restored above, and seeding the example child
     into a real account would put somebody else's child on it. */
  if (saved && saved.parent && (saved.hadSession || saved.guest
      || (saved.parent.name || saved.parent.email || saved.parent.username))) {
    store.children = [];
    store.activeChildId = null;
    return true;
  }

  // Nothing saved. Seed the example child so the demo and the workbench
  // open on something rather than on an empty state.
  const seed = newChildRecord('Stetson', '2022-06-09');
  /* Marked as the app's own invention, so signing in can tell it apart
     from a child a parent actually added. */
  seed.seeded = true;
  store.children = [seed];
  /* Open on the example rather than on the picker. A first visit that
     starts with the question "which child?" and exactly one answer is a
     door with nothing behind it. */
  store.activeChildId = seed.id;
  return false;
}
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Everything the screens need, recomputed from the birthday every render. */
function ctx() {
  const child = { name: state.name, birthday: state.birthday };
  const summary = getAgeSummary(child);
  const months = summary.age ? summary.age.totalMonths : null;
  const stage = getStage(summary.stageId);
  const tags = getMergedStrategyTags(state.lenses);
  return {
    child, summary, months, stage, tags,
    days: summary.age ? summary.age.totalDays : null,
    flex: getMilestoneFlexMonths(state.lenses),
    corrected: getCorrectedAgeMonths(months, state.lenses, state.lensNumbers.prematurity),
    growth: summary.stageId ? getGrowthDetail(summary.stageId) : null,
    content: months == null ? [] : getContentForChild(months, state.lenses),
    situations: months == null ? [] : getSituationsForAge(months),
    topics: months == null ? [] : getTopicsForAge(months),
    band: months == null ? null : getWakeWindows(months),
    sleepNeeds: months == null ? null : getSleepNeeds(months),
    disruptions: months == null ? [] : getDisruptionsForAge(months),
    activities: months == null ? [] : getActivitiesForChild(months, tags),
    scripts: months == null ? [] : getScriptsForAge(months),
  };
}

/* -----------------------------------------------------------------
   SCREENS
   ----------------------------------------------------------------- */

/* THE WORDS AROUND THE PLAN.

   The activities are the library's, the framing is Willow's. See
   src/data/planFraming.js for why it is split that way. Cached per
   child per day, so opening the plan eleven times is one piece of
   writing, and it rewrites itself at midnight along with the plan. */
function planLift() {
  const day = ciToday();
  if (!store.planLift || typeof store.planLift !== 'object' || store.planLift.day !== day) {
    store.planLift = { day: day, byChild: {} };
  }
  if (!store.planLift.byChild || typeof store.planLift.byChild !== 'object') {
    store.planLift.byChild = {};
  }
  return store.planLift;
}

function planFraming(c, p) {
  const kid = activeChild();
  const id = kid ? kid.id : 'none';
  const pl = planLift();
  let entry = pl.byChild[id];

  if (!entry) {
    entry = {
      text: writtenFraming(c.months, pl.day + id),
      from: 'written',
    };
    pl.byChild[id] = entry;

    /* Willow is given the titles the library actually chose, which is
       the only reason this is worth a call: she can say something about
       these three today rather than something generic about parenting. */
    const items = [p.morning, p.learning, p.move]
      .filter(Boolean).map((a) => a.title);
    liftWrite('planframe:' + id + ':' + pl.day, {
      childName: (c.child && c.child.name) || '',
      ageLabel: (c.summary && c.summary.label) || '',
      items: items,
      focus: c.content && c.content[0] ? c.content[0].title : '',
    }, (text) => {
      const line = String(text || '').trim();
      /* A wall of text at the top of a plan would push the plan itself
         off the screen, which is the opposite of the point. */
      if (!line || line.length > 420) return;
      const cur = planLift();
      if (cur.day !== pl.day) return;
      cur.byChild[id] = { text: line, from: 'willow' };
    });
  }
  return entry;
}

/* HOW MANY THINGS THE PLAN CAN REMEMBER OFFERING.

   Capped so a small age band cannot run itself dry. If the library only
   holds twelve activities for a nine month old and the plan remembered
   all twelve, there would be nothing left to offer on day five and it
   would start refusing to fill slots. So the list is always kept a few
   shorter than the pool it is drawn from. */
function planRecentCap(poolSize) {
  /* Leave four spare: three slots plus one, so there is always
     something fresh for every slot and the fallback is never needed. */
  return Math.max(0, Math.min(40, poolSize - 4));
}

function planRecent(kid) {
  if (!kid) return [];
  if (!Array.isArray(kid.planRecent)) kid.planRecent = [];
  return kid.planRecent;
}

/* Today's plan for this child, built once and then left alone.

   It used to be recomputed on every render from a seed. That was fine
   for showing, and no use at all for ticking: a tick has to attach to a
   specific thing, and a thing that is recalculated on every repaint is
   not specific. So it is built once a day, saved on the child, and the
   ticks hang off it.

   THREE THINGS IT HAS TO GET RIGHT, ALL OF WHICH SHE ASKED FOR:
   it changes every day, it is different for each child on the same day,
   and it does not keep offering the same activity it offered on Tuesday.
   The first two come from the seed, which is the date plus the child's
   id. The third needs an actual memory, which is planRecent. */
function buildPlan(c) {
  const kid = activeChild();
  const day = ciToday();
  const kept = kid && kid.plan && kid.plan.day === day ? kid.plan : null;

  /* Already built today. Hand back what the ticks are attached to
     rather than building a second, different plan. */
  if (kept) return planHydrate(kept, c);

  const seed = hashSeed(day + ':' + (kid ? kid.id : 'none'));

  /* Rotate the list by the seed before choosing, rather than always
     taking the first match. Same candidates, different starting point
     each day. */
  const rotate = (list, offset) => {
    if (!list.length) return list;
    const n = offset % list.length;
    return list.slice(n).concat(list.slice(0, n));
  };

  /* Everything offered in the last few days, so the plan stops handing
     back Tuesday's activity on Thursday. */
  const seenList = planRecent(kid);
  const seen = {};
  seenList.forEach((id) => { seen[id] = true; });

  const used = {};
  /* THE ORDER OF PREFERENCE, WHICH IS THE WHOLE TRICK.

     Each slot has a category it wants, such as something physical for
     the movement slot. Those categories are small: an age band might
     hold fourteen activities in total but only four that are physical.
     Preferring the right category above all else means the movement
     slot cycles through its four and starts repeating by Thursday,
     while ten perfectly good activities sit unused.

     So a FRESH activity from anywhere beats a REPEAT from the right
     category. A parent notices being handed the same thing twice in a
     week. Nobody notices that today's movement suggestion came out of
     the learning drawer.

     Age is never in question at any point here: c.activities only ever
     holds what the library has for this child's months, and nothing
     below can reach outside it. */
  const pick = (fn, offset) => {
    const free = c.activities.filter((a) => !used[a.id]);
    const wanted = free.filter(fn);
    const order = [
      wanted.filter((a) => !seen[a.id]),   // right category, not seen lately
      free.filter((a) => !seen[a.id]),     // anything at all, not seen lately
      wanted,                              // right category, seen lately
      free,                                // whatever is left
    ];
    const pool = order.filter((list) => list.length)[0] || [];
    const chosen = rotate(pool, offset)[0] || null;
    if (chosen) used[chosen.id] = true;
    return chosen;
  };
  const anyLeft = (offset) => pick(() => true, offset);

  const morning = pick(
    (a) => a.skills.includes('regulation') || a.skills.includes('socialEmotional'), seed
  ) || anyLeft(seed);

  const learning = pick(
    (a) => a.skills.some((sk) => ['cognitive', 'literacy', 'numeracy', 'language'].includes(sk)), seed + 3
  ) || anyLeft(seed + 3);

  const move = pick(
    (a) => a.skills.includes('grossMotor') || a.setting === 'outdoor', seed + 7
  ) || anyLeft(seed + 7);

  const script = c.scripts.length ? c.scripts[seed % c.scripts.length] : null;
  const mins = c.months == null ? 10 : c.months < 12 ? 5 : c.months < 36 ? 10 : c.months < 72 ? 15 : 20;

  const record = {
    day: day,
    morningId: morning ? morning.id : '',
    learningId: learning ? learning.id : '',
    moveId: move ? move.id : '',
    scriptId: script ? script.id : '',
    mins: mins,
    done: {},
  };

  if (kid) {
    kid.plan = record;
    /* Newest first, so the oldest fall off the end as the list fills. */
    const fresh = [record.morningId, record.learningId, record.moveId].filter(Boolean);
    const next = fresh.concat(planRecent(kid).filter((id) => fresh.indexOf(id) === -1));
    kid.planRecent = next.slice(0, planRecentCap(c.activities.length));
    kid.updatedAt = Date.now();
    saveStore();
  }

  return planHydrate(record, c);
}

/* The saved plan holds ids. The screen needs the actual entries, looked
   up fresh each time so a change to the library shows up rather than
   being frozen into somebody's Tuesday. */
function planHydrate(record, c) {
  const byId = {};
  c.activities.forEach((a) => { byId[a.id] = a; });
  const script = (c.scripts || []).filter((x) => x.id === record.scriptId)[0] || null;
  return {
    morning: byId[record.morningId] || null,
    learning: byId[record.learningId] || null,
    move: byId[record.moveId] || null,
    script: script,
    mins: record.mins,
    done: record.done || {},
    day: record.day,
  };
}

/* Ticking one. Kept on the child, keyed by the slot rather than by the
   activity, so the reading and evening rows can be ticked too even
   though they are not library entries. */
function planTick(slot) {
  const kid = activeChild();
  if (!kid || !kid.plan) return;
  if (!kid.plan.done || typeof kid.plan.done !== 'object') kid.plan.done = {};
  if (kid.plan.done[slot]) delete kid.plan.done[slot];
  else kid.plan.done[slot] = true;
  kid.updatedAt = Date.now();
  flushStore();
  render();
}

function screenPlan(c) {
  if (c.months == null) return emptyScreen('Add a birthday to see a plan.');
  const p = buildPlan(c);
  const focus = c.content[0];
  const frame = planFraming(c, p);
  const done = p.done || {};

  /* Every row is tickable now, because "did we do it" is the question a
     parent actually has about a plan, and a plan you cannot answer that
     about is a list of suggestions. The tick is the whole row rather
     than a small box beside it, since this gets used one handed. */
  const item = (slot, eyebrow, ic, title, text, btn, go) => `
    <div class="plan${done[slot] ? ' done' : ''}">
      <button class="plantick${done[slot] ? ' on' : ''}" data-plan="tick" data-slot="${esc(slot)}"
        aria-pressed="${done[slot] ? 'true' : 'false'}"
        aria-label="${done[slot] ? 'Did this, tap to undo' : 'Mark as done'}">
        ${done[slot] ? icon('check', 14, '#fff') : ''}
      </button>
      <div class="grow">
        <p class="eyebrow">${eyebrow}</p>
        <h3 class="h3">${esc(title)}</h3>
        <p class="tiny" style="margin-top:3px">${esc(text)}</p>
        ${btn ? `<button class="btn ghost sm" style="margin-top:9px" ${go}>${btn}</button>` : ''}
      </div>
    </div>`;

  const slots = ['morning', 'learning', 'reading', 'move', 'evening']
    .filter((k) => k === 'reading' || k === 'evening'
      || (k === 'morning' && p.morning) || (k === 'learning' && p.learning) || (k === 'move' && p.move));
  const ticked = slots.filter((k) => done[k]).length;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">Today's Plan</h1>
    <p class="sub">${esc(c.child.name)} &middot; ${esc(c.summary.label)}</p>
  </div>
  <div class="sc">
    <div class="card planframe">
      <span class="planframe-face">${icon('leaf', 14, '#fff')}</span>
      <div class="grow">
        <p class="eyebrow">${esc(PLAN_FRAMING_LABEL)}</p>
        <p class="bodytext" style="margin-top:4px">${esc(frame.text)}</p>
      </div>
    </div>

    ${focus ? `
    <div class="card leafy">
      <p class="eyebrow">Today's Development Focus</p>
      <h3 class="h3">${esc(focus.title)}</h3>
      <p class="bodytext" style="margin-top:5px">${esc(focus.summary)}</p>
    </div>` : ''}

    ${p.morning ? item('morning', 'Morning Activity', 'sun', p.morning.title, p.morning.description, 'Let\'s do it', `data-go="activity" data-id="${esc(p.morning.id)}"`) : ''}
    ${p.learning ? item('learning', 'Learning Moment', 'book', p.learning.title, p.learning.description, 'Try this', `data-go="activity" data-id="${esc(p.learning.id)}"`) : ''}

    ${item('reading', 'Reading Time', 'book', `Read together for ${p.mins} minutes`, 'Ask what they think happens next. Questions build more language than reading straight through.', '', '')}

    ${p.move ? item('move', 'Outdoor / Movement', 'run', p.move.title, p.move.description, 'Get moving', `data-go="activity" data-id="${esc(p.move.id)}"`) : ''}

    ${p.script ? `
    <p class="sect">Parent Script</p>
    <div class="quote">
      <p class="sit">${esc(p.script.situation)}</p>
      <q>${esc(p.script.say)}</q>
      <p class="why">${esc(p.script.why)}</p>
    </div>` : ''}

    ${item('evening', 'Evening Wind Down', 'moon', 'Gratitude and Good Night', 'Share one thing that went well, one feeling you noticed, and end with: tomorrow is a new day, and I am so proud of you.', '', '')}

    ${/* Said once, at the bottom, quietly. A plan that counts what you
          did not do is a plan that makes a hard day worse. */ ''}
    <p class="tiny" style="text-align:center;margin-top:12px">
      ${ticked
        ? esc(ticked + ' of ' + slots.length + ' ticked off. Tomorrow brings a different plan either way.')
        : 'Tick anything you get to. Nothing here is a requirement, and a new plan arrives tomorrow whatever happens with this one.'}
    </p>
    <p class="disclaimer">${esc(CONTENT_DISCLAIMER)}</p>
  </div>`;
}

function screenDevelopment(c) {
  const byCat = {};
  c.content.forEach((e) => { (byCat[e.category] = byCat[e.category] || []).push(e); });
  const cats = CONTENT_CATEGORIES.filter((cat) => byCat[cat.id]);
  const catIcon = { sleep: 'moon', 'emotional-regulation': 'heart', behavior: 'people', feeding: 'utensils',
    social: 'people', independence: 'star', separation: 'heart', transitions: 'clock' };

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm" style="margin-top:6px">Development guidance</h1>
    <p class="sub">Written for exactly where ${esc(state.name || 'this child')} is right now.</p>
  </div>
  <div class="sc">
    ${c.content.length === 0 ? `
      <div class="empty">
        ${growthSVG(c.growth ? c.growth.order : 5, 74)}
        <p><strong style="color:var(--ink)">Nothing written for this age yet.</strong></p>
        <p>Development content runs from birth through eighteen. If this age is empty, it is a gap worth telling us about.</p>
      </div>` : `
      ${cats.map((cat) => `
        <p class="sect">${esc(cat.label)}</p>
        ${byCat[cat.id].map((e) => `
          <button class="lrow" data-go="content" data-id="${esc(e.id)}">
            <span class="licon">${icon(catIcon[e.category] || 'leaf', 18)}</span>
            <span class="grow">
              <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);line-height:1.3">${esc(e.title)}</span>
              <span class="tiny" style="display:block;margin-top:2px">${esc(e.ageRange)}</span>
            </span>
            <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
          </button>`).join('')}`).join('')}

      ${state.lenses.length ? `
      <div class="card flat" style="margin-top:14px">
        <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Your active lenses</p>
        <p class="tiny" style="margin-top:4px">${esc(getLenses(state.lenses).map((l) => l.label).join(', '))} are reordering this list. Nothing is hidden, everything is still here.</p>
      </div>` : ''}
    `}
    <p class="disclaimer">${esc(CONTENT_DISCLAIMER)}</p>
  </div>`;
}

function viewContent(c, id) {
  const e = getContentById(id);
  if (!e) return emptyScreen('That entry could not be found.');
  const sec = (label, items, cls = '') => !items || !items.length ? '' : `
    <div class="dsec">
      <h4>${label}</h4>
      <ul class="dlist ${cls}">${items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    </div>`;

  return `
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <p class="eyebrow" style="margin-top:6px">${esc(e.ageRange)}</p>
    <h1 class="title sm">${esc(e.title)}</h1>
  </div>
  <div class="sc">
    <div class="card leafy"><p class="bodytext">${esc(e.summary)}</p></div>
    ${sec('What you may notice', e.whatYouMayNotice)}
    ${sec('Why it happens', e.whyItHappens)}
    ${e.whatIsTypical ? `<div class="dsec"><h4>What is typical</h4><div class="card flat"><p class="bodytext">${esc(e.whatIsTypical)}</p></div></div>` : ''}
    ${sec('What you can try', e.parentStrategies)}

    ${e.scripts && e.scripts.length ? `
      <div class="dsec">
        <h4>What to say</h4>
        ${e.scripts.map((s) => `
          <div class="quote">
            <p class="sit">${esc(s.situation)}</p>
            <q>${esc(s.say)}</q>
            <p class="why">${esc(s.why)}</p>
          </div>`).join('')}
      </div>` : ''}

    ${e.forYou && e.forYou.length ? `
      <div class="dsec">
        <h4>For you</h4>
        <div class="callout">${e.forYou.map((t) => `<p style="margin:0 0 8px">${esc(t)}</p>`).join('').replace(/<p style="margin:0 0 8px">([^<]*)<\/p>$/, '<p style="margin:0">$1</p>')}</div>
      </div>` : ''}

    ${sec('Worth mentioning to your pediatrician', e.worthMentioning, 'warn')}
    <p class="disclaimer">${esc(CONTENT_DISCLAIMER)}</p>
  </div>`;
}

/* -----------------------------------------------------------------
   MILESTONES, RECORDED RATHER THAN TAPPED

   Tapping used to write straight to the record, which made the screen
   feel like nothing had happened. She asked to be able to come back
   each day, mark what has changed, and press Save, so that reaching
   something is an act rather than a side effect.

   Two things follow from that. Taps go into a draft and only Save
   commits them, and the draft is persisted rather than held in memory,
   because the realistic interruption here is a parent marking four
   things and then having to put the phone down. She should find them
   still waiting.

   Save also writes the date. That is the part worth keeping: not that
   he can do it, but the day he started.
   ----------------------------------------------------------------- */

function msDraft() {
  const k = activeChild();
  if (!k || !store.msEdit || store.msEdit.childId !== k.id) return null;
  return store.msEdit;
}

/* What a row should show: the draft if this one has been touched,
   otherwise what is actually recorded. */
function msCurrent(id) {
  const d = msDraft();
  if (d && Object.prototype.hasOwnProperty.call(d.statuses, id)) return d.statuses[id] || undefined;
  return state.statuses[id];
}

/* The saved statuses with the draft laid over the top, for the progress
   bar and the "worth mentioning" list, so both move as she taps. */
function msMerged() {
  const out = Object.assign({}, state.statuses);
  const d = msDraft();
  if (d) {
    Object.keys(d.statuses).forEach((id) => {
      if (d.statuses[id]) out[id] = d.statuses[id];
      else delete out[id];
    });
  }
  return out;
}

function msSet(id, st) {
  const k = activeChild();
  if (!k) return;
  if (!store.msEdit || store.msEdit.childId !== k.id) store.msEdit = { childId: k.id, statuses: {} };
  const cur = msCurrent(id);
  /* Tapping the answer already showing clears it, same as everywhere
     else in the app, so a wrong tap needs no reset button. */
  const next = cur === st ? '' : st;
  /* Back to what is already saved is not a change, so it leaves the
     draft rather than sitting there as a pending edit that does nothing. */
  if (next === (state.statuses[id] || '')) delete store.msEdit.statuses[id];
  else store.msEdit.statuses[id] = next;
  if (!Object.keys(store.msEdit.statuses).length) store.msEdit = null;
  flushStore();
}

/* WHERE BACK ACTUALLY GOES.

   Back used to mean "clear the view", which drops to whatever tab is
   underneath. From an activity opened out of Today's Plan that is the
   child's profile, two steps back rather than one, and the plan she was
   reading is gone.

   So there is a stack now. Going deeper remembers where you were,
   Back returns there, and running out of stack behaves the way it
   always did and drops to the tab. Deliberately short: this is for
   stepping back out of a couple of screens, not for replaying an
   afternoon. It is memory only, because a back stack restored from
   disk would send somebody back to yesterday. */
/* The last markup written into the willow slot, so render() can tell
   whether anything about her actually changed. Not read back out of
   the DOM: see the comment where this is used. */
let lastWillowHTML = null;

/* Which part of Settings to scroll to on the next paint, set by the
   account menu and cleared as soon as it has been used once. */
let settingsJump = null;

const NAV_MAX = 12;
let navStack = [];

function navPush() {
  navStack.push({ tab: state.tab, view: state.view });
  if (navStack.length > NAV_MAX) navStack.shift();
}

function navBack() {
  const prev = navStack.pop();
  if (!prev) { state.view = null; return; }
  state.tab = prev.tab;
  state.view = prev.view;
}

/* Anything that jumps sideways rather than deeper, such as a tab, makes
   the stack meaningless. Better an empty stack than one that sends
   somebody somewhere they were never coming from. */
function navClear() {
  navStack = [];
}

function msChangeCount() {
  const d = msDraft();
  return d ? Object.keys(d.statuses).length : 0;
}

function msReached(st) {
  return st === 'sometimes' || st === 'mastered';
}

function msSave() {
  const d = msDraft();
  const k = activeChild();
  if (!d || !k) return;
  const now = new Date();
  const today = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0')
    + '-' + String(now.getDate()).padStart(2, '0');
  if (!k.statusDates) k.statusDates = {};

  Object.keys(d.statuses).forEach((id) => {
    const val = d.statuses[id];
    const wasReached = msReached(k.statuses[id]);
    if (!val) {
      delete k.statuses[id];
      delete k.statusDates[id];
      return;
    }
    k.statuses[id] = val;
    /* The date is stamped the first time it is reached and then left
       alone. Moving from doing sometimes to mastered is the same
       milestone, not a new one, so it keeps the day it started. */
    if (msReached(val) && !wasReached) k.statusDates[id] = today;
    if (!msReached(val)) delete k.statusDates[id];
  });

  k.milestonesUpdatedAt = today;
  k.updatedAt = Date.now();
  store.msEdit = null;
  flushStore();
}

function msDiscard() {
  store.msEdit = null;
  flushStore();
}

/* The bar that appears the moment something is marked and stays until
   it is saved. Pinned to the bottom of the screen rather than sitting
   at the end of a long list, because a parent who marks one thing near
   the top should not have to scroll past forty rows to keep it. */
function msSaveBar(count) {
  if (!count) return '';
  return `
  <div class="savebar">
    <span class="grow">
      <span class="savebar-t">${count} change${count === 1 ? '' : 's'} not saved yet</span>
      <span class="savebar-s">Save and the date gets recorded with it</span>
    </span>
    <button class="chip" data-msave="discard">Undo</button>
    <button class="btn" data-msave="save">${icon('check', 15, '#fff')} Save</button>
  </div>`;
}

function screenMilestones(c) {
  const cp = c.summary.checkpoint;
  if (c.months == null) return emptyScreen('Add a birthday to see milestones.');
  if (!cp) {
    const past = c.months >= 72;
    return `
    ${cornerLeaves()}
    <div class="sc-head">
      <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
      <h1 class="title" style="margin-top:6px">Milestones</h1>
    </div>
    <div class="sc"><div class="empty">
      ${growthSVG(c.growth ? c.growth.order : 6, 78)}
      <p><strong style="color:var(--ink)">${past ? 'Milestone tracking runs to five years.' : 'The first checkpoint is at two months.'}</strong></p>
      <p>${past
        ? 'The CDC checklists stop at five. School age progress tracking, skills and subjects rather than milestones, is a separate build.'
        : 'Checkpoints line up with well child visits, starting at two months.'}</p>
    </div></div>`;
  }

  const kid = activeChild();
  const dates = (kid && kid.statusDates) || {};
  const merged = msMerged();
  const pending = msChangeCount();
  const groups = getMilestonesByDomain(cp);
  const prog = summarizeProgress(cp, merged);
  const label = getCheckpoint(cp).ageDescription;
  const notYet = getNotYetMilestones(cp, merged);

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">Milestones</h1>
    <p class="sub">${esc(label)} &middot; what most children can do by now</p>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext"><strong style="color:var(--ink)">These are not deadlines.</strong> They describe what about 75 percent of children can do by this age. Reaching one later is common and usually not a concern on its own.</p>
      <div class="pline"><span>Recorded</span><b>${prog.recorded} of ${prog.total}</b></div>
      <div class="bar"><i style="width:${prog.total ? Math.round((prog.showingUp / prog.total) * 100) : 0}%"></i></div>
      <p class="tiny" style="margin-top:9px">
        Mark whatever has changed and press Save. Come back as often as you like, the date goes down
        with it.${kid && kid.milestonesUpdatedAt
          ? ' Last saved ' + esc(cycleDateLabelWithYear(kid.milestonesUpdatedAt)) + '.' : ''}
      </p>
    </div>

    ${groups.map((g) => `
      <p class="sect">${esc(g.label)}</p>
      ${g.items.map((m) => {
        const cur = msCurrent(m.id);
        const changed = !!(msDraft() && Object.prototype.hasOwnProperty.call(msDraft().statuses, m.id));
        const on = dates[m.id];
        return `
        <div class="ms${changed ? ' changed' : ''}">
          <p class="mtext">${esc(m.text)}</p>
          <p class="mwin">${esc(describeMilestoneWindow(m, c.flex))}</p>
          <div class="mbtns">
            ${MILESTONE_STATUSES.map((s) => {
              const isOn = cur === s.id;
              const col = { notYet: ['#8A9080', '#F2F1EC'], emerging: ['#B0873F', '#F7EFE2'],
                sometimes: ['#6E8B54', '#EEF2E7'], mastered: ['#547045', '#E7EFE0'], unsure: ['#5C7581', '#E9EEF0'] }[s.id];
              return `<button class="mb" data-ms="${esc(m.id)}" data-st="${s.id}" aria-pressed="${isOn}"
                style="${isOn ? `background:${col[1]};color:${col[0]}` : ''}">${esc(s.label)}</button>`;
            }).join('')}
          </div>
          ${changed
            ? `<p class="mdate pend">${icon('clock', 11, '#B0873F')} Not saved yet</p>`
            : (on ? `<p class="mdate">${icon('check', 11, 'var(--sage)')} Reached ${esc(cycleDateLabelWithYear(on))}</p>` : '')}
        </div>`;
      }).join('')}`).join('')}

    ${notYet.length ? `
      <p class="sect">Worth mentioning</p>
      <div class="card flat">
        <p class="bodytext">${esc(ACT_EARLY_GUIDANCE.reassurance)}</p>
        <p class="bodytext" style="margin-top:9px">${esc(ACT_EARLY_GUIDANCE.action)}</p>
        <div class="callout" style="margin-top:11px">${esc(ACT_EARLY_GUIDANCE.howToAsk)}</div>
        <ul class="dlist warn" style="margin-top:12px">${notYet.map((m) => `<li>${esc(m.text)}</li>`).join('')}</ul>
      </div>` : ''}
    <p class="disclaimer">${esc(CONTENT_DISCLAIMER)}</p>
    ${msSaveBar(pending)}
  </div>`;
}

let actFilter = { setting: null, noMaterials: false };

function screenActivities(c) {
  if (c.months == null) return emptyScreen('Add a birthday to see activities.');
  let list = c.activities;
  if (actFilter.setting) list = list.filter((a) => a.setting === actFilter.setting || a.setting === 'anywhere');
  if (actFilter.noMaterials) list = list.filter((a) => !a.materials || a.materials.length === 0);

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">Activities</h1>
    <p class="sub">Play today. Brighter tomorrows ahead.</p>
  </div>
  <div class="sc">
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:13px">
      ${[['indoor', 'Indoor'], ['outdoor', 'Outdoor']].map(([v, l]) => `
        <button class="mb" data-filter="setting" data-val="${v}" aria-pressed="${actFilter.setting === v}"
          style="${actFilter.setting === v ? 'background:var(--sage);color:#fff' : ''}">${l}</button>`).join('')}
      <button class="mb" data-filter="mat" aria-pressed="${actFilter.noMaterials}"
        style="${actFilter.noMaterials ? 'background:var(--sage);color:#fff' : ''}">Nothing needed</button>
    </div>

    ${list.length === 0 ? `<div class="empty"><p>No activities match those filters at this age.</p></div>` :
      list.map((a) => `
      <button class="lrow" data-go="activity" data-id="${esc(a.id)}" style="align-items:flex-start">
        <span class="licon">${icon(a.skills.includes('grossMotor') ? 'run' : a.skills.includes('literacy') ? 'book' : a.skills.includes('regulation') ? 'heart' : 'puzzle', 18)}</span>
        <span class="grow">
          <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);line-height:1.3">${esc(a.title)}</span>
          <span class="tiny" style="display:block;margin-top:3px">${esc(a.description)}</span>
          <span class="tags">
            <span class="tag time">${icon('clock', 10, 'var(--body)')} ${a.minutes} min</span>
            ${a.skills.slice(0, 2).map((s) => {
              const sk = ACTIVITY_SKILLS.find((x) => x.id === s);
              return `<span class="tag">${esc(sk ? sk.label : s)}</span>`;
            }).join('')}
          </span>
        </span>
      </button>`).join('')}
    <p class="disclaimer">${esc(CONTENT_DISCLAIMER)}</p>
  </div>`;
}

function viewActivity(c, id) {
  const a = getActivityById(id);
  if (!a) return emptyScreen('That activity could not be found.');
  return `
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm" style="margin-top:6px">${esc(a.title)}</h1>
    <div class="tags">
      <span class="tag time">${icon('clock', 10, 'var(--body)')} ${a.minutes} min</span>
      <span class="tag warm">${esc(ACTIVITY_SETTINGS.find((s) => s.id === a.setting).label)}</span>
    </div>
  </div>
  <div class="sc">
    <div class="card leafy"><p class="bodytext">${esc(a.description)}</p></div>
    <div class="dsec">
      <h4>What you need</h4>
      <div class="card flat"><p class="bodytext">${a.materials && a.materials.length ? esc(a.materials.join(', ')) : 'Nothing at all.'}</p></div>
    </div>
    <div class="dsec">
      <h4>How to do it</h4>
      <ul class="dlist">${a.howTo.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
    </div>
    ${a.makeItEasier ? `<div class="dsec"><h4>Make it easier</h4><ul class="dlist">${a.makeItEasier.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
    ${a.makeItHarder ? `<div class="dsec"><h4>Make it harder</h4><ul class="dlist">${a.makeItHarder.map((s) => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
    ${a.whyItHelps ? `<div class="dsec"><h4>Why it helps</h4><div class="callout">${esc(a.whyItHelps)}</div></div>` : ''}
    ${a.safetyNote ? `<div class="dsec"><h4>Safety</h4><div class="callout">${esc(a.safetyNote)}</div></div>` : ''}
  </div>`;
}

function emptyScreen(msg) {
  return `<div class="sc"><div class="empty">${growthSVG(2, 70)}<p>${esc(msg)}</p></div></div>`;
}

/* -----------------------------------------------------------------
   RENDER
   ----------------------------------------------------------------- */
/* FIVE TABS, FIVE REASONS.

   A tab bar should match the reason somebody picked the phone up, not
   the shape of the content. There are five reasons and they happen in
   roughly this order through a day:

     Today     the daily driver, what are we doing, log it as it happens
     Right Now something is going wrong, answer in ten seconds
     Their name everything about this one child, in six sections
     Logs      what has been tracked, and the version for the doctor
     Me        the parent's own body, community and account

   The third tab carries the open child's name, because "Hub" told a
   parent nothing about what was behind it. */
const BOTTOM_BAR = ['today', 'now', 'child', 'logs', 'me'];

function tabList() {
  /* Home sits in the middle on purpose. It is the one you reach for
     without thinking, and the thumb lands there first. */
  return [
    { id: 'community', label: 'Community', icon: 'people' },
    { id: 'logs', label: 'Logs', icon: 'note' },
    { id: 'home', label: 'Home', icon: 'home', center: true },
    /* Sixth tab, which means Home is no longer exactly in the middle.
       Worth it: going places is a whole category of thing this app
       had nothing to say about, and buried two screens down nobody
       would ever find it. */
    { id: 'outings', label: 'Outings', icon: 'bag' },
    { id: 'profile', label: 'Profile', icon: 'user' },
    /* Settings used to sit here and it made six, which is too many
       across a phone. It is not a daily destination, it is the place
       you go once a month to change something, so it moved into the
       menu behind your own face at the top, the way every app with an
       account does it. Nothing was removed, it just stopped taking a
       sixth of the bottom of the screen. */
  ];
}

let lastFocus = { id: null, start: null, end: null };

/* Which screen the last paint was of. Everything in this app repaints
   the whole screen on every tap, which used to throw a parent back to
   the top of the page each time she marked a milestone. Forty rows in,
   that is maddening.

   So: same screen, same scroll position. A different screen starts at
   the top, which is what you want when you have just opened something.
   The sub tab fields are in the key on purpose, because switching from
   one tab of a screen to another really is new content and should
   start at the beginning. */
let lastRoute = null;

function routeKey() {
  const v = state.view;
  return [
    state.tab,
    v ? v.type + ':' + v.id : '-',
    store.activeChildId || '-',
    store.profileWho || '-',
    state.feedTab, state.outTab, state.safetyTab, state.ppTab, state.pumpTab,
    /* Which room of Community she is in. Here so switching to the sky
       starts at the top of the sky rather than partway down the feed
       she was reading. */
    feed.view, String(feed.room),
    /* undGroup is NOT here on purpose. It is the accordion on the
       Understanding page, which opens a group in place rather than
       going anywhere, and including it meant every tap counted as a new
       screen and threw her back to the top. A sub tab that replaces the
       whole body belongs in this key. Something that expands where she
       is standing does not. */
    state.lensBand,
  ].join('|');
}

function restoreFocus(id, start, end) {
  const useId = id || lastFocus.id;
  if (!useId) return;
  const back = document.getElementById(useId);
  if (!back) return;
  back.focus();
  const s = id ? start : lastFocus.start;
  const e = id ? end : lastFocus.end;
  // Some input types throw on setSelectionRange rather than ignoring it.
  try { if (s != null) back.setSelectionRange(s, e); } catch (err) {}
}

/* Paint the fixed background layer. Desktop only, since the phone
   build keeps its decoration inside the screen where it belongs. The
   affirmation lines are seeded on the birthday, so this only actually
   changes when the active child does. */
let lastBgSeed = null;
function paintBackground() {
  if (!IS_DESKTOP) return;
  const layer = document.getElementById('bglayer');
  if (!layer) return;
  const seed = String(state.birthday || '') + '|' + String(store.activeChildId || '');
  if (seed === lastBgSeed && layer.innerHTML) return;
  lastBgSeed = seed;
  layer.innerHTML = desktopHeader(pickAffirmations(state.birthday));
}

function render() {
  const live = document.activeElement;
  if (live && live.id && live.tagName === 'INPUT') {
    let st = null, en = null;
    try { st = live.selectionStart; en = live.selectionEnd; } catch (err) {}
    if (st == null) { st = String(live.value || '').length; en = st; }
    lastFocus = { id: live.id, start: st, end: en };
  }
  const c = ctx();
  /* The tab set changed. A browser still holding 'today' or 'me' from
     the old five would render the right screen but light up none of the
     new tabs, so it gets moved across once, here. */
  const TAB_MOVED = { today: 'home', now: 'home', child: 'profile', me: 'profile' };
  if (TAB_MOVED[state.tab]) {
    if (state.tab === 'child') store.profileWho = store.activeChildId || 'me';
    if (state.tab === 'me') store.profileWho = 'me';
    state.tab = TAB_MOVED[state.tab];
  }
  const screen = document.getElementById('screen');

  let html;
  let v = state.view;

  /* The front door. Nothing else renders until somebody is either
     signed in or has chosen to look around without an account. */
  if (!hasAccess()) {
    document.body.classList.add('locked');
    paintBackground();
    document.getElementById('screen').innerHTML =
      auth.checking ? screenRestoring() : screenAuth();
    const tabsEl = document.getElementById('tabs');
    if (tabsEl) tabsEl.innerHTML = '';
    const barEl = document.getElementById('topbar');
    if (barEl) barEl.innerHTML = topBar(true);
    const wEl = document.getElementById('willow');
    if (wEl) wEl.innerHTML = '';
    restoreFocus();
    saveStore();
    return;
  }
  document.body.classList.remove('locked');
  paintBackground();

  /* Willow's walkthrough takes the whole window. The tabs come off for
     the duration, because a guided flow you can wander out of halfway
     is not a guided flow, and every step carries its own way out. */
  if (onboardShouldOpen(onboard())) {
    const obHtml = screenOnboard();
    /* The wordmark only. The corner chip opens a menu that leads out of
       the flow, and every step already carries its own way out. */
    const obBar = document.getElementById('topbar');
    if (obBar) { obBar.innerHTML = topBar(true); screen.innerHTML = obHtml; }
    else screen.innerHTML = topBar(true) + obHtml;
    const obTabs = document.getElementById('tabs');
    if (obTabs) obTabs.innerHTML = '';
    const obW = document.getElementById('willow');
    if (obW) obW.innerHTML = '';
    restoreFocus();
    saveStore();
    return;
  }

  /* Screens that only make sense inside one child. Reaching one with no
     child open sends you to the picker rather than to an empty screen. */
  const CHILD_SCOPED = ['milestones', 'activities', 'topics', 'understand', 'feeding',
    'safety', 'plan', 'sleep', 'development', 'checkins'];
  if (v && v.type === 'screen' && CHILD_SCOPED.indexOf(v.id) !== -1 && !activeChild()) {
    v = null; state.view = null; state.tab = 'home';
  }
  if (v && v.type === 'log' && !activeChild()) { v = null; state.view = null; state.tab = 'home'; }
  /* An old link, a back button, or a reminder left over from before a
     birthday. Development guidance is what this child actually has, so
     that is where it goes rather than to an empty screen. */
  if (v && v.type === 'screen' && v.id === 'milestones' && !getAgeSummary({
    name: (activeChild() || {}).name, birthday: (activeChild() || {}).birthday,
  }).checkpoint) {
    v = { type: 'screen', id: 'development' };
    state.view = v;
  }

  if (v && v.type === 'content') html = viewContent(c, v.id);
  else if (v && v.type === 'activity') html = viewActivity(c, v.id);
  else if (v && v.type === 'situation') html = viewSituation(c, v.id);
  else if (v && v.type === 'topic') html = viewTopic(c, v.id);
  else if (v && v.type === 'screen' && v.id === 'milestones') html = screenMilestones(c);
  else if (v && v.type === 'screen' && v.id === 'activities') html = screenActivities(c);
  else if (v && v.type === 'screen' && v.id === 'topics') html = screenTopics(c);
  else if (v && v.type === 'screen' && v.id === 'feeding') html = screenFeeding(c);
  else if (v && v.type === 'screen' && v.id === 'safety') html = screenSafety(c);
  else if (v && v.type === 'screen' && v.id === 'signs') html = screenSigns(c);
  else if (v && v.type === 'screen' && v.id === 'sharing') html = screenSharing(c);
  else if (v && v.type === 'screen' && v.id === 'diaperplan') html = screenDiapers(c);
  else if (v && v.type === 'screen' && v.id === 'privacy') html = screenPrivacy(c);
  else if (v && v.type === 'screen' && v.id === 'rules') html = screenRules(c);
  else if (v && v.type === 'screen' && v.id === 'about') html = screenAbout(c);
  else if (v && v.type === 'screen' && v.id === 'install') html = screenInstall();
  else if (v && v.type === 'screen' && v.id === 'chores') html = screenChores();
  else if (v && v.type === 'screen' && v.id === 'learning') html = screenLearning(c);
  else if (v && v.type === 'screen' && v.id === 'growth') html = screenGrowth(c);
  else if (v && v.type === 'screen' && v.id === 'vaxrecord') html = screenVaxRecord(c);
  else if (v && v.type === 'screen' && v.id === 'notifications') html = screenPush();
  else if (v && v.type === 'screen' && v.id === 'support') html = screenSupport(c);
  else if (v && v.type === 'screen' && v.id === 'online') html = screenOnline(c);
  else if (v && v.type === 'screen' && v.id === 'growingup') html = screenGrowingUp(c);
  else if (v && v.type === 'screen' && v.id === 'childcycle') html = screenChildCycle(c);
  else if (v && v.type === 'screen' && v.id === 'consent') html = screenConsent(c);
  else if (v && v.type === 'screen' && v.id === 'expecting') html = screenExpecting(c);
  /* Any route that lands on a normal child profile for a baby who is
     not born yet is sent to the seed profile instead, rather than
     drawing a page of milestones for somebody with no age. */
  else if (!v && state.tab === 'profile' && store.profileWho && store.profileWho !== 'me'
    && isExpecting(store.children.filter((x) => x.id === store.profileWho)[0])) {
    state.view = { type: 'screen', id: 'expecting' };
    html = screenExpecting(c);
  }
  else if (v && v.type === 'screen' && v.id === 'plan') html = screenPlan(c);
  else if (v && v.type === 'screen' && v.id === 'sleep') html = screenSleep(c);
  else if (v && v.type === 'screen' && v.id === 'development') html = screenDevelopment(c);
  else if (v && v.type === 'screen' && v.id === 'community') html = screenCommunity(c);
  else if (v && v.type === 'log') html = viewLog(c, v.id);
  else if (v && v.type === 'screen' && v.id === 'bag') html = screenBag();
  else if (v && v.type === 'screen' && v.id === 'pumping') html = screenPumping();
  else if (v && v.type === 'screen' && v.id === 'postpartum') html = screenPostpartum(c);
  else if (v && v.type === 'screen' && v.id === 'pregHealth') html = screenPregHealth();
  else if (v && v.type === 'learn') html = viewLearn(v.id);
  else if (v && v.type === 'screen' && v.id === 'learnall') html = screenLearnAll();
  else if (v && v.type === 'screen' && v.id === 'checkins') html = screenCheckins(c);
  else if (v && v.type === 'screen' && v.id === 'addchild') html = screenAddChild();
  /* One child's logs, opened from their profile, with a way back to it. */
  else if (v && v.type === 'screen' && v.id === 'childlogs') html = screenLogsHub(c, { page: true });
  /* Every old link that said "profile" meant her own, so it still lands
     there rather than on a dead route. */
  else if (v && v.type === 'screen' && v.id === 'profile') {
    state.view = null; store.profileWho = 'me'; state.tab = 'profile'; html = screenMyProfile();
  }
  else if (v && v.type === 'screen' && v.id === 'wisdom') html = screenWisdom();
  else if (v && v.type === 'screen' && v.id === 'vaccines') html = screenVaccines();
  else if (v && v.type === 'screen' && v.id === 'understand') html = screenUnderstand(c);
  else if (v && v.type === 'lens') html = viewLens(c, v.id);
  else if (v && v.type === 'infection') html = viewInfection(v.id);
  else if (v && v.type === 'screen' && v.id === 'now') html = screenNow(c);
  else if (v && v.type === 'screen' && v.id === 'momnow') html = screenMomNow();
  /* There used to be a second screen listing her logs, reached from
     Home. Two screens doing one job is how somebody logs a thing and
     lands somewhere that is not where they started, so the old one now
     simply hands over to the Logs tab. */
  else if (v && v.type === 'caretaker') html = viewCaretaker(v.id);
  else if (v && v.type === 'screen' && v.id === 'momlogs') {
    state.view = null; state.tab = 'logs'; store.logWho = 'me'; html = screenLogsHub(c);
  }
  else if (v && v.type === 'momnow') html = screenMomNowOne(v.id);
  else if (state.tab === 'welcome') html = screenWelcome(c);
  else if (state.tab === 'settings') html = screenSettings();
  /* Profile shows whoever is selected. Her own face in the corner puts
     her here, a child's circle on Home puts them here. */
  else if (state.tab === 'profile') html = screenProfileTab(c);
  else if (state.tab === 'community') html = screenCommunity(c);
  else if (state.tab === 'outings') html = screenOutings(c);
  else if (state.tab === 'logs') html = screenLogsHub(c);
  /* Home is hers and never asks which child you mean, which is the whole
     point of it being the middle tab. */
  else html = screenHome(c);

  // Inputs inside the screen are destroyed by this swap, so remember where
  // the caret was and put it back, or typing loses focus every keystroke.
  const act = document.activeElement;
  /* Willow and the top bar live outside the screen but are rewritten by
     this same repaint, so anything focused in them has to be put back
     too. Without this, a repaint while she is mid sentence to Willow
     throws her out of the box and sends the caret to the start. */
  const willowSlotNow = document.getElementById('willow');
  const barSlotNow = document.getElementById('topbar');
  const inRewritten = !!act && (screen.contains(act)
    || (willowSlotNow && willowSlotNow.contains(act))
    || (barSlotNow && barSlotNow.contains(act)));
  const keepId = act && inRewritten && act.id ? act.id : null;
  // Some input types report selectionStart as null. Falling back to the
  // end of the value keeps typing in order instead of reversing it.
  let keepStart = null;
  let keepEnd = null;
  if (keepId) {
    try { keepStart = act.selectionStart; keepEnd = act.selectionEnd; } catch (err) {}
    if (keepStart == null) { keepStart = String(act.value || '').length; keepEnd = keepStart; }
  }
  const keepScroll = screen.scrollTop;

  /* The header is prepended rather than living in the shell, so it
     scrolls with the page on a phone instead of eating the top of a
     small screen, and so it survives every existing screen untouched. */
  /* The desktop shell gives the header its own pinned row above the
     scroll. The phone build has no such row, so there it is simply the
     first thing on the page. Either way it is written once, here. */
  const bar = state.tab === 'welcome' ? '' : topBar();
  const barSlot = document.getElementById('topbar');
  if (barSlot) { barSlot.innerHTML = bar; screen.innerHTML = html; }
  else screen.innerHTML = bar + html;

  /* Willow sits outside the scrolling screen so she stays put, and
     outside the header so she is reachable with a thumb. */
  const willowSlot = document.getElementById('willow');
  /* The birthday card gets the screen to itself. Willow's pill peeking
     out from under the scrim made the moment look like an accident. */
  const bday = birthdayOverlay();
  /* Willow steps aside for an unsaved save bar, the same way she does
     for a birthday card. On a phone her pill sits exactly where the
     Save button lands, and the thing that needs pressing should not be
     the thing behind something else. */
  const pendingSave = !!(v && v.type === 'screen' && v.id === 'milestones'
    && !willow.open && msChangeCount());
  if (willowSlot) {
    /* THE CHAT HAS ITS OWN SCROLLBAR AND IT HAS TO SURVIVE THIS.

       .wbody scrolls independently of the page, so rewriting the slot
       resets it to the top. Anything at all that repaints the app
       while she is reading a long answer, a background line finishing,
       a nudge appearing, a sync landing, sent her back to the first
       word. Remembered here and put back below. */
    const bodyBefore = document.getElementById('wbody');
    const bodyScroll = bodyBefore ? bodyBefore.scrollTop : 0;

    /* Only rewritten when it actually differs, because replacing the
       markup destroys the box she is typing in.

       COMPARED AGAINST WHAT WE LAST WROTE, NOT AGAINST innerHTML.
       Reading innerHTML back gives the browser's own serialization of
       the DOM, with attributes reordered and quoting normalized, and
       that almost never matches the string we generated. So this guard
       was always true and the panel was rebuilt on every repaint of
       the whole app, which is most of what was wrong with the chat. */
    const willowHTML = bday || (pendingSave ? '' : nudgeBubble() + willowBubble() + willowPanel());
    const replaced = lastWillowHTML !== willowHTML;
    if (replaced) {
      willowSlot.innerHTML = willowHTML;
      lastWillowHTML = willowHTML;
    }

    const bodyAfter = document.getElementById('wbody');
    if (bodyAfter) {
      if (willow.stick) {
        /* A new message just arrived, so the bottom is where she wants
           to be. This is the only case that moves the view. */
        bodyAfter.scrollTop = bodyAfter.scrollHeight;
        willow.stick = false;
      } else if (replaced) {
        bodyAfter.scrollTop = bodyScroll;
      }
    }

    /* The input's value is a property rather than an attribute, so it
       is written here instead of in the markup. Guarded, because
       assigning to value while she is typing moves the caret to the
       end even when the text is identical. */
    const wIn = document.getElementById('willowIn');
    if (wIn && wIn.value !== (willow.input || '')) wIn.value = willow.input || '';
  }
  /* The canvas has to exist before anything can draw on it, so the
     confetti starts here rather than inside the function that writes the
     markup. It leaves itself alone if it is already running. */
  if (bday) bdayStartArt(); else bdayStopArt();
  /* The cropper has to exist before its gesture can be attached. */
  if (crop.on) cropWire();
  /* THE SKY STOPS LISTENING THE MOMENT IT IS OFF SCREEN.

     Fireflies uses a live Firestore listener, which is what makes
     watching a light come on work at all. A listener left running
     behind a screen nobody is looking at is a bill and a battery, so
     it is torn down here, from the one place that knows what is
     actually painted. */
  const skyOnScreen = (state.tab === 'community'
    || (v && v.type === 'screen' && v.id === 'community'))
    && feed.view === 'flies';
  if (!skyOnScreen) fliesUnwatch();

  /* Computed after every redirect above has had its say, so the key
     describes the screen that was actually painted. */
  const nowRoute = routeKey();
  const sameRoute = nowRoute === lastRoute;
  lastRoute = nowRoute;
  screen.scrollTop = (keepId || sameRoute) ? keepScroll : 0;

  if (settingsJump) {
    const target = document.getElementById(settingsJump);
    settingsJump = null;
    if (target && target.scrollIntoView) {
      try { target.scrollIntoView({ block: 'start' }); screen.scrollTop = Math.max(0, screen.scrollTop - 12); } catch (err) {}
    }
  }

  if (postCaret != null) {
    restoreFocus('postIn', postCaret, postCaret);
    postCaret = null;
  } else if (keepId) restoreFocus(keepId, keepStart, keepEnd);

  document.getElementById('tabs').innerHTML = tabList().map((t) => {
    const on = state.tab === t.id && !state.view;
    if (t.center) {
      return `
      <button class="tab center${on ? ' on' : ''}" role="tab" data-tab="${t.id}" aria-selected="${on}">
        <span class="tabdisc">${icon(t.icon, 21, '#fff')}</span>
        <span>${t.label}</span>
      </button>`;
    }
    return `
    <button class="tab" role="tab" data-tab="${t.id}" aria-selected="${on}">
      ${icon(t.icon, 20, on ? 'var(--deep)' : 'var(--muted)')}
      <span>${t.label}</span><span class="dot"></span>
    </button>`;
  }).join('');

  let cpText;
  if (c.summary.checkpoint) cpText = `${c.summary.checkpoint} months`;
  else if (c.months == null) cpText = '-';
  else if (c.months < 2) cpText = 'first at 2 months';
  else cpText = 'past 5 years';
  const readout = document.getElementById('readout');
  if (!readout) { saveStore(); return; }
  readout.innerHTML = [
    ['Age', c.summary.label || 'no birthday'],
    ['Months', c.months == null ? '-' : c.months],
    ['Life stage', c.stage ? c.stage.label : '-'],
    ['Growth visual', c.growth ? c.growth.label : '-'],
    ['Milestone checkpoint', cpText],
    ['Milestone flex', `+${c.flex} months`],
    ['Content entries', c.content.length],
    ['Activities', c.activities.length],
    ['Parent scripts', c.scripts.length],
    ['Right Now options', c.situations.length],
    ['Care topics', c.topics.length],
    ['Naps today', c.band ? c.band.naps.typical : '-'],
    ['Logs offered', c.stage ? c.stage.logTypes.length : 0],
  ].map(([k, v]) => `<div class="rrow"><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');

  saveStore();
}

/* -----------------------------------------------------------------
   CONTROLS
   ----------------------------------------------------------------- */
const AGE_PRESETS = [
  ['Newborn', 1], ['6 mo', 6], ['12 mo', 12], ['18 mo', 18],
  ['2 yr', 24], ['4 yr', 51], ['6 yr', 72], ['9 yr', 108], ['15 yr', 180],
];

function birthdayForMonths(m) {
  const d = new Date();
  d.setMonth(d.getMonth() - m);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function initControls() {
  /* The workbench rail is optional. The desktop build has a real Profile
     screen instead, so every lookup below has to survive the element
     being absent rather than taking the whole app down with it. */
  const el = (id) => document.getElementById(id);

  if (el('ageJump')) el('ageJump').innerHTML = AGE_PRESETS
    .map(([l, m]) => `<button class="chip" data-months="${m}">${l}</button>`).join('');

  /* The workbench strip shows a handful of common lenses plus a way
     into the full screen. All twenty one as chips is unreadable, and
     the Understanding screen is where the real picker lives. */
  const QUICK_LENSES = ['adhd', 'autism', 'sensory', 'anxiety', 'speech', 'downSyndrome'];
  if (el('lensChips')) el('lensChips').innerHTML = QUICK_LENSES
    .map((id) => getLens(id))
    .filter(Boolean)
    .map((l) => `<button class="chip" data-lens="${l.id}" aria-pressed="false">${esc(l.label)}</button>`)
    .join('') +
    `<button class="chip" data-go="screen" data-id="understand">All ${SUPPORT_LENSES.length}, with explanations</button>`;

  if (el('nameIn')) el('nameIn').addEventListener('input', (e) => {
    state.name = e.target.value; render();
  });
  document.addEventListener('input', (e) => {
    if (e.target.matches('[data-wake]')) { state.wakeTime = e.target.value || '06:30'; render(); }
    else if (e.target.id === 'askIn') { state.askQuery = e.target.value; }
    else if (e.target.id === 'willowIn') { willow.input = e.target.value; }
    else if (e.target.matches('[data-sharefield]')) {
      /* No repaint while she types, or the caret jumps. The value is
         read back off the element when she presses the button. */
      share.joinInput = e.target.value;
      share.error = '';
    }
    else if (e.target.id === 'flangeIn') {
      const digits = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
      e.target.value = digits;
      state.flangeMm = digits;
      render();
    }
    else if (e.target.id === 'authName') { auth.form.name = e.target.value; }
    else if (e.target.id === 'authEmail') { auth.form.email = e.target.value; }
    else if (e.target.id === 'authPass') { auth.form.password = e.target.value; }
    else if (e.target.matches('[data-parentfield]')) {
      const f = e.target.dataset.parentfield;
      /* These fields only exist while editing, so the value goes to the
         draft. No repaint, or the caret jumps on every keystroke. */
      if (store.profileEdit && store.profileEdit.who === 'me') store.profileEdit.values[f] = e.target.value;
      else { store.parent[f] = e.target.value; flushStore(); }
    }
    else if (e.target.matches('[data-editname]')) {
      if (store.profileEdit) store.profileEdit.values.name = e.target.value;
    }
    else if (e.target.matches('[data-pw]')) {
      pw[e.target.dataset.pw] = e.target.value;
    }
    else if (e.target.matches('[data-postfield]')) {
      postDraft().text = e.target.value;
      /* No repaint here, or the caret jumps on every keystroke. That
         means the Post button would keep whatever state it was painted
         with, so it is switched by hand. Without this, typing a post
         with no photo leaves Post greyed out and nothing happens. */
      const saveBtn = document.querySelector('[data-post="save"]');
      if (saveBtn) saveBtn.disabled = !postHasContent();
      saveStore();
    }
    else if (e.target.matches('[data-obfield]')) {
      const f = e.target.dataset.obfield;
      const v = e.target.value;
      /* No repaint while she types, so the Add button on the child step
         is switched by hand. Third time this pattern has been needed. */
      if (f === 'child') {
        store.draftChildName = v;
        const b = document.querySelector('[data-ob="addchild"]');
        if (b) b.disabled = !(v.trim() || store.draftChildBday);
      } else {
        store.parent[f] = v;
        store.parentUpdatedAt = Date.now();
      }
      saveStore();
    }
    else if (e.target.matches('[data-memfield]')) {
      memDraft().text = e.target.value;
      saveStore();
      const b = document.querySelector('[data-memsave]');
      if (b) b.disabled = !!store.memBusy;
    }
    else if (e.target.matches('[data-durfield]')) {
      const id = e.target.dataset.durfield;
      const row = e.target.closest('.durrow');
      const get = (part) => {
        const box = row && row.querySelector('[data-durpart="' + part + '"]');
        return box ? Number(box.value) || 0 : 0;
      };
      const total = get('h') * 60 + get('m');
      const d = state.logDraft && state.logDraft.typeId ? state.logDraft : ensureDraft();
      if (d) {
        if (!d.values) d.values = {};
        d.values[id] = total ? String(total) : '';
        store.logDraft = d;
        saveStore();
      }
      /* Same reason the post button needed this: no repaint while she
         types, so anything depending on the value is switched by hand. */
      const saveBtn = document.querySelector('[data-logsave]');
      if (saveBtn && saveBtn.dataset.logsave && isMomLog(saveBtn.dataset.logsave)) {
        saveBtn.disabled = false;
      }
    }
    else if (e.target.matches('[data-momcinote]')) {
      momCiDraft().note = e.target.value;
      saveStore();
    }
    else if (e.target.matches('[data-cinote]')) {
      const d = ciEnsureDraft();
      if (d) { d.note = e.target.value; saveStore(); }
    }

    else if (e.target.matches('[data-childname]')) {
      const k = store.children.find((x) => x.id === e.target.dataset.childname);
      if (k) { k.name = e.target.value; render(); }
    }
    else if (e.target.id === 'newChildName') {
      store.draftChildName = e.target.value;
    }
    /* Log fields write straight into the draft rather than re rendering,
       so a half typed medicine name survives every repaint. The medicine
       timing card does need the repaint, so that one field asks for it. */
    else if (e.target.matches('[data-logfield]')) {
      const f = e.target.dataset.logfield;
      ensureDraft().values[f] = e.target.value;
      if (f === 'name' && state.view && state.view.type === 'log' && state.view.id === 'medication') render();
    }
    else if (e.target.matches('[data-lensnum]')) {
      // Digits only, same as the flange field, and for the same reason:
      // a number input reports no caret position in Chrome, so the
      // re render would drop every keystroke to the front of the field.
      const lensId = e.target.dataset.lensnum;
      const numKey = e.target.dataset.numkey;
      const digits = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
      e.target.value = digits;
      const lens = getLens(lensId);
      const cfg = lens && lens.numeric ? lens.numeric : null;
      let n = Number(digits);
      // Clamp to what the lens actually accepts. Nobody is eighty weeks
      // early, and an unclamped number would then feed a corrected age
      // calculation and produce nonsense on a milestone screen.
      if (cfg && isFinite(n)) {
        if (cfg.max != null && n > cfg.max) { n = cfg.max; e.target.value = String(n); }
        if (cfg.min != null && digits && n < cfg.min) n = Number(digits);
      }
      if (!digits || !isFinite(n) || n <= 0) {
        delete state.lensNumbers[lensId];
      } else {
        state.lensNumbers[lensId] = { ...(state.lensNumbers[lensId] || {}), [numKey]: n };
      }
      render();
    }
  });
  if (el('bdayIn')) el('bdayIn').addEventListener('change', (e) => {
    state.birthday = e.target.value; state.view = null; state.napOverride = null; render();
  });

  /* Date inputs fire change, not input, so they get their own listener. */
  let bdayTimer = null;

  document.addEventListener('change', (e) => {
    if (e.target.matches('[data-postchild]')) {
      postDraft().childId = e.target.value;
      flushStore();
      return;
    }
    if (e.target.matches('[data-datepart]')) {
      readDateRow(e.target.closest('[data-datefield]'));
    } else if (e.target.matches('[data-childbday]')) {
      const k = store.children.find((x) => x.id === e.target.dataset.childbday);
      if (!k) return;
      k.birthday = e.target.value || null;
      k.napOverride = null;
      flushStore();
      // A date input fires change part way through typing, as soon as what is
      // there parses. Re-rendering on each of those pulls the field out from
      // under the person typing. Wait until they stop.
      if (bdayTimer) clearTimeout(bdayTimer);
      bdayTimer = setTimeout(render, 600);
    } else if (e.target.id === 'newChildBday') {
      store.draftChildBday = e.target.value;
    } else if (e.target.matches && e.target.matches('[data-logfield]')) {
      ensureDraft().values[e.target.dataset.logfield] = e.target.value;
    }
  });

  /* Leaving the field is a definite finish, so render immediately rather than
     waiting out the timer. */
  document.addEventListener('blur', (e) => {
    if (e.target && e.target.matches && e.target.matches('[data-childbday]')) {
      if (bdayTimer) { clearTimeout(bdayTimer); bdayTimer = null; }
      render();
    }
  }, true);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && ['authName', 'authEmail', 'authPass'].indexOf(e.target.id) !== -1) {
      e.preventDefault();
      if (auth.mode === 'signup') doSignUp(); else doSignIn();
      return;
    }
    if (e.target.id === 'askIn' && e.key === 'Enter') {
      e.preventDefault();
      state.askAsked = state.askQuery.trim();
      render();
    }
    if (e.target.id === 'willowIn' && e.key === 'Enter') {
      e.preventDefault();
      willowAsk(willow.input);
    }
    /* Escape closes her, which is what everybody tries first. */
    if (e.key === 'Escape' && willow.open) { willow.open = false; render(); }
    /* On the support screen, Escape is the keyboard version of the
       Leave now button. Checked after Willow, so closing her never
       throws somebody off the page by accident. */
    if (e.key === 'Escape' && !willow.open && onSupportScreen()) { quickExit(); }
  });

  document.addEventListener('click', (e) => {
    /* A word about something she just logged clears as soon as she does
       the next thing, the same as the posted note. */
    if (store.noted && e.target.closest('[data-tab],[data-go],[data-back],[data-logwho],[data-me],[data-child]')) {
      store.noted = null;
    }
    /* The "it is on your profile" line lasts until she goes anywhere,
       which is what a note about something that just happened should do. */
    if (store.justPosted && e.target.closest('[data-tab],[data-go],[data-back],[data-me],[data-child],[data-post]')) {
      store.justPosted = false;
    }
    /* Work out what was clicked first, because the menu closing must
       never eat the tap that was meant to do something. */
    const t = e.target.closest('[data-months],[data-lens],[data-lensopt],[data-tab],[data-go],[data-back],[data-ms],[data-filter],[data-naps],[data-routine],[data-sub],[data-bag],[data-out],[data-outclear],[data-outtrip],[data-share],[data-daycare],[data-ask],[data-child],[data-allprofiles],[data-addchild],[data-removechild],[data-profilebtn],[data-auth],[data-update],[data-willow],[data-combinechild],[data-notdupe],[data-logset],[data-logmulti],[data-logsave],[data-dellog],[data-export],[data-bday],[data-me],[data-face],[data-avatar],[data-edit],[data-msave],[data-ci],[data-photopick],[data-crop],[data-sit],[data-sitpath],[data-calledby],[data-refersto],[data-menugo],[data-arrival],[data-post],[data-menu],[data-cal],[data-pwdo],[data-cycle],[data-period],[data-period-del],[data-delmomlog],[data-momexport],[data-momci],[data-logwho],[data-logday],[data-logcal],[data-memopen],[data-memclose],[data-memkind],[data-mempick],[data-memsave],[data-memdel],[data-memvis],[data-memvisdraft],[data-memdrop],[data-memall],[data-memhide],[data-ob],[data-nudge],[data-feed],[data-fly],[data-plan],[data-install],[data-chore],[data-learnband],[data-growth],[data-growthm],[data-vax],[data-push],[data-feedtag],[data-wpost],[data-signstage],[data-bodycare],[data-exit],[data-onlinestage],[data-growstage],[data-pub],[data-childperiod],[data-constage],[data-safety],[data-exp]');
    if (store.menuOpen && !e.target.closest('[data-menu]')) {
      /* Anything that actually goes somewhere closes the menu on the
         way through, including the rows inside the menu itself. Dead
         space inside the menu, such as the little headings, leaves it
         open, because nobody means to close a menu by tapping a label. */
      const inMenu = !!e.target.closest('.cmenu');
      if (t || !inMenu) {
        store.menuOpen = false;
        if (!t) {
          render();
          return;
        }
      }
    }
    if (!t) return;

    if (t.dataset.auth) {
      const a = t.dataset.auth;
      if (a === 'mode') { auth.mode = t.dataset.val; auth.error = ''; }
      else if (a === 'account') {
        /* Back to the front door without touching anything she has
           entered, so creating the account carries it all up rather
           than trading it for one. */
        auth.guest = false;
        store.guest = false;
        auth.mode = 'signup';
        auth.error = '';
        flushStore();
      }
      else if (a === 'guest') {
        auth.guest = true;
        store.guest = true;
        /* Somebody looking around without an account is also seeing this
           for the first time, and they are the ones most likely to give
           up on an empty screen. */
        if (!onboard().done) onboardStart();
        flushStore();
        state.tab = IS_DESKTOP ? 'home' : 'welcome';
      }
      else if (a === 'signup') { doSignUp(); return; }
      else if (a === 'login') { doSignIn(); return; }
      else if (a === 'reset') { doReset(); return; }
      else if (a === 'signout') { doSignOut(); return; }
      render();
      return;
    } else if (t.dataset.profilebtn) {
      state.view = { type: 'screen', id: 'profile' };
    } else if (t.dataset.child) {
      navClear();
      // Opening a child switches every child scoped screen at once, which
      // is the whole reason profiles are separate in the first place.
      selectChild(t.dataset.child);
      /* Tapping a face opens that child's profile, which is what the
         circle looks like it should do. */
      store.profileWho = t.dataset.child;
      store.profileEdit = null;
      state.tab = 'profile';
      /* A baby who is not here yet has a profile of their own. The
         ordinary one would be a page of sleep windows and milestones
         for somebody with no age. */
      const soon = store.children.filter((x) => x.id === t.dataset.child)[0];
      if (isExpecting(soon)) { state.view = { type: 'screen', id: 'expecting' }; }
    } else if (t.dataset.edit) {
      const how = t.dataset.edit;
      if (how === 'save') editSave();
      else if (how === 'cancel') editCancel();
      else editStart(how);
    } else if (t.dataset.crop) {
      const how = t.dataset.crop;
      if (how === 'use') cropConfirm();
      else if (how === 'another') { const tg = crop.target; cropClose(true); pickPhoto(tg); }
      else cropClose();
      return;
    } else if (t.dataset.pwdo) {
      const how = t.dataset.pwdo;
      if (how === 'open') { pw.open = true; pw.note = ''; }
      else if (how === 'close') { pw.open = false; pw.current = ''; pw.next = ''; pw.note = ''; }
      else if (how === 'save') { pwChange(); return; }
      else if (how === 'reset') { pwReset(); return; }
      render();
      return;
    } else if (t.dataset.cal) {
      store.calMonth = (store.calMonth || 0) + Number(t.dataset.cal);
      if (store.calMonth < -12) store.calMonth = -12;
      if (store.calMonth > 12) store.calMonth = 12;
      render();
      return;
    } else if (t.dataset.menu) {
      store.menuOpen = !store.menuOpen;
      render();
      return;
    } else if (t.dataset.post) {
      const how = t.dataset.post;
      if (how === 'open') { store.postOpen = true; postDraft(); }
      else if (how === 'save') postSave();
      else if (how === 'discard') {
        /* Anything already uploaded for a post that is being thrown
           away is a file nobody will ever see. */
        const dropped = postDraft().files.slice();
        store.postDraft = null; store.postOpen = false; store.photoError = ''; store.emojiOpen = false;
        flushStore();
        deleteStoredFiles(dropped);
      }
      else if (how === 'unpic') postPhotoRemove(t.dataset.i);
      else if (how === 'unfile') postFileRemove(t.dataset.i);
      else if (how === 'pick') { postPick(t.dataset.kind); return; }
      else if (how === 'vis') { postSetVisibility(t.dataset.id || 'draft', t.dataset.vis); return; }
      else if (how === 'group') {
        const g = t.dataset.g || '';
        /* Tapping the one already picked puts it back in the main feed,
           the same as every other chip in this app. */
        postDraft().group = (postDraft().group === g) ? '' : g;
        flushStore();
        render();
        return;
      }
      else if (how === 'del') { postDelete(t.dataset.id); return; }
      else if (how === 'react') { postReact(t.dataset.id, t.dataset.r); return; }
      else if (how === 'emojis') { store.emojiOpen = !store.emojiOpen; flushStore(); }
      else if (how === 'emoji') { postEmoji(t.dataset.ch); return; }
      render();
      return;
    } else if (t.dataset.memopen !== undefined && t.dataset.memopen) {
      memOpen(t.dataset.memopen, 'words');
      return;
    } else if (t.dataset.memclose) {
      memClose();
      return;
    } else if (t.dataset.memkind) {
      memSetKind(t.dataset.memkind);
      return;
    } else if (t.dataset.mempick) {
      memPick();
      return;
    } else if (t.dataset.memsave) {
      memSave();
      return;
    } else if (t.dataset.memdel) {
      memDelete(t.dataset.memdel);
      return;
    } else if (t.dataset.memvis) {
      memSetVisibilityOn(t.dataset.memvis, t.dataset.vis);
      return;
    } else if (t.dataset.memvisdraft) {
      memSetVisibility(t.dataset.memvisdraft);
      return;
    } else if (t.dataset.memdrop !== undefined) {
      memDropFile(t.dataset.memdrop);
      return;
    } else if (t.dataset.memall !== undefined) {
      store.memAll = t.dataset.memall || null;
      flushStore();
    } else if (t.dataset.fly) {
      const a = t.dataset.fly;
      if (a === 'light') flyLight();
      else if (a === 'out') flyOut();
      else if (a === 'glow') flyGlow(t.dataset.id);
      return;
    } else if (t.dataset.feed) {
      const a = t.dataset.feed;
      if (a === 'view') { feed.view = t.dataset.v || 'feed'; render(); }
      else if (a === 'room') {
        const g = t.dataset.g;
        feed.room = (g === '__all') ? null : (g || '');
        feed.view = 'feed';
        render();
      }
      else if (a === 'retry') { feed.tried = false; feedLoad(true); }
      else if (a === 'react') feedReact(t.dataset.id, t.dataset.r);
      else if (a === 'reportopen') { feed.reporting = t.dataset.id; render(); }
      else if (a === 'reportclose') { feed.reporting = ''; render(); }
      else if (a === 'report') feedReport(t.dataset.id, t.dataset.reason);
      else if (a === 'block') { feedBlock(t.dataset.id); }
      else if (a === 'unblock') feedUnblock(t.dataset.id);
      else if (a === 'approve') modDecide(t.dataset.id, FEED_STATUS.live);
      else if (a === 'reject') modDecide(t.dataset.id, FEED_STATUS.removed);
      else if (a === 'clearreports') modClearReports(t.dataset.id);
      else if (a === 'thanksok') { store.feedThanks = false; flushStore(); render(); }
      else if (a === 'errok') { store.feedError = ''; flushStore(); render(); }
      return;
    } else if (t.dataset.nudge) {
      if (t.dataset.nudge === 'open') nudgeTake(); else nudgeDismiss();
      return;
    } else if (t.dataset.ob) {
      const a = t.dataset.ob;
      if (a === 'restart') { onboardStart(); render(); }
      else if (a === 'next') onboardGo(onboardNext(onboard().step));
      else if (a === 'back') onboardGo(onboardBack(onboard().step));
      else if (a === 'skip') onboardSkip();
      else if (a === 'done') onboardFinish();
      else if (a === 'addchild') {
        const nm = (store.draftChildName || '').trim();
        const bd = store.draftChildBday || '';
        if (nm || bd) {
          const kid = newChildRecord(nm, bd || null);
          store.children.push(kid);
          store.draftChildName = '';
          store.draftChildBday = '';
          selectChild(kid.id);
          /* Stays on this step rather than jumping to their profile,
             because the walkthrough is not finished yet. */
          flushStore();
          render();
        }
      }
      return;
    } else if (t.dataset.memhide) {
      store.memDayHidden = ciToday();
      flushStore();
    } else if (t.dataset.logwho) {
      store.logWho = t.dataset.logwho;
      /* Also the way in from Home, so this has to land on the tab and
         not only decide whose logs it would show once you got there. */
      state.tab = 'logs';
      state.view = null;
      /* Opening somebody's logs makes them the one the rest of the app
         is talking about, so a tap on a log lands on the right record. */
      if (t.dataset.logwho !== 'me') selectChild(t.dataset.logwho);
      store.logDay = null;
      store.logCal = 0;
      flushStore();
    } else if (t.dataset.logday) {
      store.logDay = t.dataset.logday;
      flushStore();
    } else if (t.dataset.logcal) {
      store.logCal = (store.logCal || 0) + Number(t.dataset.logcal);
      flushStore();
    } else if (t.dataset.momci) {
      const how = t.dataset.momci;
      if (how === 'open') { store.momCiOpen = true; momCiDraft(); flushStore(); }
      else if (how === 'set') { momCiSet(t.dataset.row, t.dataset.val); return; }
      else if (how === 'save') { momCiSave(); return; }
      else if (how === 'cancel') { store.momCi = null; store.momCiOpen = false; flushStore(); }
    } else if (t.dataset.delmomlog) {
      momLogDelete(t.dataset.delmomlog);
      return;
    } else if (t.dataset.momexport) {
      momExport();
      return;
    } else if (t.dataset.cycle) {
      const how = t.dataset.cycle;
      if (how === 'edit') { store.cycleEdit = true; flushStore(); }
      else if (how === 'done') { store.cycleEdit = false; flushStore(); }
      else if (how === 'history') { store.cycleHistory = !store.cycleHistory; flushStore(); }
      else if (how === 'today') { periodToggle(ciToday()); return; }
    } else if (t.dataset.childperiod) {
      const kid = activeChild();
      if (kid) childPeriodToggle(kid, t.dataset.childperiod);
      return;
    } else if (t.dataset.period) {
      periodToggle(t.dataset.period);
      return;
    } else if (t.dataset.periodDel) {
      periodToggle(t.dataset.periodDel);
      return;
    } else if (t.dataset.sit) {
      sitToggle(t.dataset.sit, t.dataset.id);
      return;
    } else if (t.dataset.sitpath) {
      sitSetPath(t.dataset.sitpath);
      return;
    } else if (t.dataset.menugo) {
      /* The account menu opens Settings at the part she pressed rather
         than at the top, because Settings is long and hunting for the
         password section is exactly the annoyance this was meant to
         remove. */
      const where = t.dataset.menugo;
      store.menuOpen = false;
      if (where === 'password' && !auth.user) {
        /* No account yet, so the useful thing behind this row is the
           front door rather than a password field that cannot exist. */
        auth.guest = false;
        store.guest = false;
        auth.mode = 'signup';
        auth.error = '';
        flushStore();
        render();
        return;
      }
      navClear();
      state.tab = 'settings';
      state.view = null;
      settingsJump = 'set-' + where;
      render();
      return;
    } else if (t.dataset.calledby) {
      /* Tapping a chip clears the typed word, since the two are the
         same answer and showing both selected would be a lie about
         which one the app is going to use. */
      const was = store.parent.calledBy === t.dataset.calledby && !(store.parent.calledByOther || '').trim();
      store.parent.calledBy = was ? '' : t.dataset.calledby;
      store.parent.calledByOther = '';
      store.parentUpdatedAt = Date.now();
      saveStore();
      render();
      return;
    } else if (t.dataset.refersto) {
      store.parent.refersTo = store.parent.refersTo === t.dataset.refersto ? '' : t.dataset.refersto;
      store.parentUpdatedAt = Date.now();
      saveStore();
      render();
      return;
    } else if (t.dataset.arrival) {
      childArrivalToggle(t.dataset.arrivalfor, t.dataset.arrival);
      return;
    } else if (t.dataset.photopick) {
      pickPhoto(t.dataset.photopick);
      return;
    } else if (t.dataset.face !== undefined && t.dataset.avatar !== undefined) {
      const target = t.dataset.face;
      const av = t.dataset.avatar;
      applyFaceValue(target, av ? 'avatar:' + av : '');
      return;
    } else if (t.dataset.me) {
      store.profileWho = 'me';
      store.profileEdit = null;
      state.view = null;
      state.tab = 'profile';
    } else if (t.dataset.allprofiles) {
      selectChild(null);
      state.tab = 'home';
    } else if (t.dataset.addchild) {
      const nameEl = document.getElementById('newChildName');
      const nm = nameEl ? nameEl.value.trim() : '';
      /* The birthday comes from the draft rather than from a field, now
         that it is three dropdowns and only lands once all three are
         answered. */
      const bd = store.draftChildBday || '';
      if (nm || bd) {
        /* An expecting baby holds the date as a due date with an empty
           birthday, which is what keeps every other screen in the app
           from computing an age out of a day in the future. */
        const soon = !!store.draftExpecting;
        const kid = newChildRecord(nm, soon ? null : (bd || null));
        if (soon) { kid.expecting = true; kid.dueDate = bd || null; }
        store.children.push(kid);
        store.draftChildName = '';
        store.draftChildBday = '';
        store.draftExpecting = false;
        selectChild(kid.id);
        store.profileWho = kid.id;
        store.profileEdit = null;
        state.tab = 'profile';
        flushStore();
      }
    } else if (t.dataset.removechild) {
      const id = t.dataset.removechild;
      store.children = store.children.filter((k) => k.id !== id);
      if (!store.deletedChildIds) store.deletedChildIds = [];
      if (store.deletedChildIds.indexOf(id) === -1) store.deletedChildIds.push(id);
      cloudDeleteChild(id);
      willowForget(id);
      if (store.activeChildId === id) selectChild(null);
      flushStore();
    } else if (t.dataset.bday) {
      const how = t.dataset.bday;
      const kid = t.dataset.id;
      birthdayDismiss();
      if (how === 'open' && kid) {
        selectChild(kid);
        store.profileWho = kid;
        store.profileEdit = null;
        state.tab = 'profile';
      }
      render();
      return;
    } else if (t.dataset.update === 'go') {
      applyUpdate();
      return;
    } else if (t.dataset.update === 'later') {
      update.dismissed = true;
    } else if (t.dataset.share === 'link') {
      inviteSend(t.dataset.code);
      return;
    } else if (t.dataset.feedtag) {
      feed.tag = t.dataset.feedtag === '__clear' ? '' : t.dataset.feedtag;
      feed.view = 'foryou';
      state.tab = 'community';
      state.view = null;
    } else if (t.dataset.wpost === 'write') {
      willowWriteDaily();
      return;
    } else if (t.dataset.wpost === 'post') {
      willowPostIt();
      return;
    } else if (t.dataset.wpost === 'bin') {
      store.willowPost = { day: ciToday(), text: '', posted: true };
      saveStore();
    } else if (t.dataset.push === 'on') {
      pushEnable();
      return;
    } else if (t.dataset.push === 'off') {
      pushDisable();
      return;
    } else if (t.dataset.push === 'kind') {
      pushToggleKind(t.dataset.id);
    } else if (t.dataset.vax === 'visit') {
      store.vaxVisit = store.vaxVisit === t.dataset.id ? '' : t.dataset.id;
    } else if (t.dataset.vax === 'open') {
      store.vaxOpen = store.vaxOpen === t.dataset.id ? '' : t.dataset.id;
      store.vaxEdit = '';
      store.vaxError = '';
    } else if (t.dataset.vax === 'tick') {
      const kid = activeChild();
      if (kid) {
        const bits = t.dataset.id.split(':');
        /* A tick records today, which is right the overwhelming
           majority of the time because it is tapped in the car park.
           Change is there for the rest. */
        const has = !!vaxRecord(kid)[t.dataset.id];
        vaxSetDose(kid, bits[0], Number(bits[1]), has ? '' : ciToday());
      }
    } else if (t.dataset.vax === 'edit') {
      store.vaxEdit = store.vaxEdit === t.dataset.id ? '' : t.dataset.id;
      store.vaxError = '';
    } else if (t.dataset.vax === 'savedate') {
      const kid = activeChild();
      if (kid) vaxSaveDate(kid, t.dataset.id);
    } else if (t.dataset.vax === 'clear') {
      const kid = activeChild();
      if (kid) {
        const bits = t.dataset.id.split(':');
        vaxSetDose(kid, bits[0], Number(bits[1]), '');
        store.vaxEdit = '';
      }
    } else if (t.dataset.vax === 'skip') {
      const kid = activeChild();
      if (kid) vaxToggleSkip(kid, t.dataset.id);
    } else if (t.dataset.vax === 'addseason') {
      const kid = activeChild();
      const el = document.getElementById('vaxseasonin');
      if (kid && el && el.value) vaxAddSeasonal(kid, t.dataset.id, el.value);
    } else if (t.dataset.vax === 'delseason') {
      const kid = activeChild();
      if (kid) vaxRemoveSeasonal(kid, t.dataset.id, t.dataset.date);
    } else if (t.dataset.vax === 'export') {
      const kid = activeChild();
      if (kid) {
        copyText(vaxExportText(kid));
        store.vaxCopied = true;
        setTimeout(() => { store.vaxCopied = false; render(); }, 1800);
      }
    } else if (t.dataset.growthm) {
      store.growthMeasure = t.dataset.growthm;
      store.growthError = '';
    } else if (t.dataset.growth === 'sex') {
      const kid = activeChild();
      if (kid) { kid.sex = t.dataset.id === 'f' ? 'f' : 'm'; kid.updatedAt = Date.now(); saveStore(); }
    } else if (t.dataset.growth === 'save') {
      growthSave(t.dataset.id);
    } else if (t.dataset.growth === 'units') {
      store.growthUnits = growthUs() ? 'metric' : 'us';
      store.growthError = '';
      saveStore();
    } else if (t.dataset.growth === 'del') {
      const kid = activeChild();
      if (kid) {
        kid.growth = (kid.growth || []).filter((e) => e.id !== t.dataset.id);
        kid.updatedAt = Date.now();
        saveStore();
      }
    } else if (t.dataset.growth === 'export') {
      const kid = activeChild();
      if (kid) {
        copyText(growthExportText(kid));
        store.growthCopied = true;
        setTimeout(() => { store.growthCopied = false; render(); }, 1800);
      }
    } else if (t.dataset.bodycare) {
      store.parent.bodyCare = t.dataset.bodycare === 'yes' ? 'yes' : 'no';
      store.parentUpdatedAt = Date.now();
      flushStore();
    } else if (t.dataset.signstage) {
      store.signStage = t.dataset.signstage;
      saveStore();
    } else if (t.dataset.learnband) {
      store.learnBand = t.dataset.learnband;
      saveStore();
    } else if (t.dataset.chore === 'tick') {
      choreToggle(t.dataset.id);
    } else if (t.dataset.chore === 'day') {
      store.choreDay = Number(t.dataset.id);
    } else if (t.dataset.chore === 'pick') {
      store.chorePick = {
        personId: t.dataset.id,
        day: t.dataset.day === undefined ? choreTodayIndex() : Number(t.dataset.day),
      };
    } else if (t.dataset.chore === 'donepick') {
      store.chorePick = null;
    } else if (t.dataset.chore === 'add') {
      choreAdd(t.dataset.id, t.dataset.who, Number(t.dataset.day));
    } else if (t.dataset.chore === 'offday') {
      choreSetDay(t.dataset.id, Number(t.dataset.day), false);
    } else if (t.dataset.chore === 'toggleday') {
      const job = choreJobs().filter((j) => j.id === t.dataset.id)[0];
      const d = Number(t.dataset.day);
      choreSetDay(t.dataset.id, d, !(job && (job.days || []).indexOf(d) !== -1));
    } else if (t.dataset.chore === 'remove') {
      choreRemove(t.dataset.id);
    } else if (t.dataset.chore === 'stars') {
      store.choreStarsOn = !choreStarsOn();
      saveStore();
    } else if (t.dataset.chore === 'deladult') {
      choreRemoveAdult(t.dataset.id);
    } else if (t.dataset.chore === 'addadult') {
      /* Read straight off the field rather than keeping the name in the
         store as it is typed. A value in the markup rebuilds the input
         on every keystroke, which is what broke the Willow chat. */
      const f = document.getElementById('choreadult');
      if (f && f.value.trim()) { choreAddAdult(f.value); f.value = ''; }
    } else if (t.dataset.install === 'go') {
      doInstall();
      return;
    } else if (t.dataset.install === 'open') {
      /* Tapping through counts as a wave for the same reason saying not
         now does. Either way the question has been put and answered, and
         the banner does not need to ask again this week. */
      store.installHidden = ciToday();
      store.installWaves = (store.installWaves || 0) + 1;
      navPush();
      state.view = { type: 'screen', id: 'install' };
    } else if (t.dataset.install === 'later') {
      store.installHidden = ciToday();
      store.installWaves = (store.installWaves || 0) + 1;
      saveStore();
    } else if (t.dataset.willow === 'open') {
      willow.open = true;
      willow.stick = true;
      if (!willow.ready && !willow.loading) willowLoad().catch(() => {});
    } else if (t.dataset.willow === 'close') {
      willow.open = false;
    } else if (t.dataset.willow === 'send') {
      willowAsk(willow.input);
      return;
    } else if (t.dataset.willow === 'try') {
      willowAsk(t.dataset.q);
      return;
    } else if (t.dataset.willow === 'copyerr') {
      const text = willow.lastError || '';
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text);
        } else {
          /* Older iOS Safari has no clipboard API on a plain page, and
             a Copy button that silently does nothing is worse than no
             Copy button. */
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        store.willowCopied = true;
      } catch (err) { store.willowCopied = false; }
      render();
      setTimeout(() => { store.willowCopied = false; render(); }, 3000);
      return;
    } else if (t.dataset.willow === 'clearerr') {
      willow.lastError = '';
      store.willowCopied = false;
      render();
      return;
    } else if (t.dataset.combinechild) {
      combineDuplicateChildren(t.dataset.combinechild);
    } else if (t.dataset.notdupe) {
      markNotDuplicates(t.dataset.notdupe);
    } else if (t.dataset.update === 'check') {
      update.dismissed = false;
      checkForUpdate(true);
    } else if (t.dataset.logset) {
      // Tapping the value a field already holds clears it, so a wrong
      // tap can be backed out of without a reset button.
      const d = ensureDraft();
      const f = t.dataset.logset;
      if (d.values[f] === t.dataset.val) delete d.values[f];
      else d.values[f] = t.dataset.val;
    } else if (t.dataset.logmulti) {
      const d = ensureDraft();
      const f = t.dataset.logmulti;
      const arr = Array.isArray(d.values[f]) ? d.values[f] : [];
      const i = arr.indexOf(t.dataset.val);
      if (i === -1) arr.push(t.dataset.val); else arr.splice(i, 1);
      d.values[f] = arr;
    } else if (t.dataset.logsave) {
      if (isMomLog(t.dataset.logsave)) { momLogSave(t.dataset.logsave); return; }
      saveLog(t.dataset.logsave);
    } else if (t.dataset.dellog) {
      const k = activeChild();
      if (k && Array.isArray(k.logs)) k.logs = k.logs.filter((l) => l.id !== t.dataset.dellog);
      flushStore();
    } else if (t.dataset.export === 'logs') {
      exportLogs();
      return;
    } else if (t.dataset.ask === 'go') {
      state.askAsked = state.askQuery.trim();
    } else if (t.dataset.ask === 'try') {
      state.askQuery = t.dataset.q;
      state.askAsked = t.dataset.q;
    } else if (t.dataset.sub) {
      // One handler for every sub tab strip. The key names the state
      // field, so adding a tabbed screen needs no new branch here.
      const key = t.dataset.sub;
      const val = t.dataset.val;
      state[key] = val === '' ? null : val;
    } else if (t.dataset.out) {
      if (!Array.isArray(store.outChecked)) store.outChecked = [];
      const id = t.dataset.out;
      const at = store.outChecked.indexOf(id);
      if (at === -1) store.outChecked.push(id); else store.outChecked.splice(at, 1);
      store.parentUpdatedAt = Date.now();
      flushStore();
      render();
      return;
    } else if (t.dataset.daycare !== undefined) {
      store.daycareHours = Number(t.dataset.daycare) || 0;
      store.parentUpdatedAt = Date.now();
      flushStore();
      render();
      return;
    } else if (t.dataset.share) {
      const a = t.dataset.share;
      if (a === 'pick') {
        const id = t.dataset.id;
        const at = share.pickIds.indexOf(id);
        if (at === -1) share.pickIds.push(id); else share.pickIds.splice(at, 1);
        render();
      }
      else if (a === 'make') shareMakeCode();
      else if (a === 'join') shareJoin();
      else if (a === 'revoke') shareRevoke(t.dataset.id);
      else if (a === 'leave') shareLeave(t.dataset.id);
      else if (a === 'dropcode') shareDropCode(t.dataset.code);
      else if (a === 'joinedok') { share.joined = ''; render(); }
      else if (a === 'copy') {
        const code = t.dataset.code || '';
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code);
        } catch (err) {}
        store.shareCopied = true;
        render();
        setTimeout(() => { store.shareCopied = false; render(); }, 1800);
      }
      return;
    } else if (t.dataset.outtrip) {
      store.outTrip = t.dataset.outtrip;
      store.parentUpdatedAt = Date.now();
      flushStore();
      render();
      return;
    } else if (t.dataset.outclear) {
      /* One button per list rather than one for the whole page, since
         packing for one child is finished at a different moment from
         packing for another. */
      const prefix = t.dataset.outclear + ':';
      store.outChecked = (store.outChecked || []).filter((x) => x.indexOf(prefix) !== 0);
      store.parentUpdatedAt = Date.now();
      flushStore();
      render();
      return;
    } else if (t.dataset.bag) {
      const id = t.dataset.bag;
      const i = state.bagChecked.indexOf(id);
      if (i === -1) state.bagChecked.push(id); else state.bagChecked.splice(i, 1);
    } else if (t.dataset.routine) {
      const id = t.dataset.routine;
      const i = state.routineInclude.indexOf(id);
      if (i === -1) state.routineInclude.push(id); else state.routineInclude.splice(i, 1);
    } else if (t.dataset.naps) {
      const n = Number(t.dataset.naps);
      state.napOverride = state.napOverride === n ? null : n;
    } else if (t.dataset.months) {
      state.birthday = birthdayForMonths(Number(t.dataset.months));
      /* Only the workbench has this field. The website does not. */
      const bin = document.getElementById('bdayIn');
      if (bin) bin.value = state.birthday;
      state.view = null; state.napOverride = null;
      document.querySelectorAll('[data-months]').forEach((b) => b.setAttribute('aria-pressed', b === t));
    } else if (t.dataset.lensopt) {
      // Tapping the choice a lens already holds clears it, so a parent
      // can back out of picking a support level without a reset button.
      const id = t.dataset.lensopt;
      const val = t.dataset.val;
      if (state.lensOptions[id] === val) delete state.lensOptions[id];
      else state.lensOptions[id] = val;
    } else if (t.dataset.lens) {
      const id = t.dataset.lens;
      const i = state.lenses.indexOf(id);
      if (i === -1) state.lenses.push(id); else state.lenses.splice(i, 1);
      // Turning a lens off drops anything stored inside it, so turning it
      // back on later does not silently restore an old support level.
      if (i !== -1) { delete state.lensOptions[id]; delete state.lensNumbers[id]; }
      t.setAttribute('aria-pressed', i === -1);
    } else if (t.dataset.tab) {
      state.tab = t.dataset.tab; state.view = null; navClear();
    } else if (t.dataset.go === 'tab') {
      state.tab = t.dataset.id; state.view = null; navClear();
    } else if (t.dataset.go) {
      if (t.tagName === 'A') return; // source links open normally
      // Following one of her links means you want to read it, not keep chatting.
      if (willow.open && t.closest('.willowpanel')) willow.open = false;
      if (t.dataset.go === 'log') store.logFrom = { tab: state.tab, view: state.view };
      /* A diaper logged from the newborn screen should land back on the
         newborn screen with the count one higher, not on a list. */
      if (t.dataset.go === 'log') store.logFrom = { tab: state.tab, view: state.view };
      // An Ask result can name the sub tab to open on, so a pumping
      // answer lands on the pumping tab that actually holds it.
      if (t.dataset.asksub) state[t.dataset.asksub] = t.dataset.asksubval;
      // Opening a different lens starts from the child's real age again,
      // rather than inheriting whichever band was last looked at.
      if (t.dataset.go === 'lens') state.lensBand = null;
      /* store.logWho persists, so without this, looking at her own logs
         and then opening Stetson's would show hers with his name on the
         button that got you there. */
      if (t.dataset.go === 'screen' && t.dataset.id === 'childlogs') {
        store.logWho = store.profileWho || store.activeChildId || 'me';
        store.logDay = ciToday();
        store.logCal = 0;
      }
      navPush();
      state.view = { type: t.dataset.go, id: t.dataset.id };
    } else if (t.dataset.back) {
      const to = t.dataset.back;
      if (to === 'offchild') {
        /* Coming back off a child's profile means going where she tapped
           their circle from, which is her own Home. */
        store.profileWho = 'me';
        store.profileEdit = null;
        state.tab = 'home';
        state.view = null;
        navClear();
      } else if (to && to !== '1') {
        /* A screen that names where Back should land still wins, since
           it knows something the stack does not. */
        state.view = { type: 'screen', id: to };
        navClear();
      } else {
        navBack();
      }
    } else if (t.dataset.pub) {
      pubAction(t.dataset.pub, t.dataset.id);
      if (t.dataset.pub === 'caledit' || t.dataset.pub === 'caldone') { /* falls through to render */ }
    } else if (t.dataset.exp) {
      const how = t.dataset.exp;
      if (how === 'signs') store.expSigns = !store.expSigns;
      else if (how === 'born') { store.expBorn = true; store.expError = ''; }
      else if (how === 'bornno') { store.expBorn = false; store.expError = ''; }
      else if (how === 'bornsave') expBornSave();
      else if (how === 'kind') { store.draftExpecting = t.dataset.id === 'expecting'; }
    } else if (t.dataset.safety) {
      store.safetyAll = store.safetyAll === t.dataset.safety ? '' : t.dataset.safety;
    } else if (t.dataset.constage) {
      store.conStage = store.conStage === t.dataset.constage ? '' : t.dataset.constage;
    } else if (t.dataset.onlinestage) {
      store.onlineStage = store.onlineStage === t.dataset.onlinestage ? '' : t.dataset.onlinestage;
    } else if (t.dataset.growstage) {
      store.growStage = store.growStage === t.dataset.growstage ? '' : t.dataset.growstage;
    } else if (t.dataset.exit) {
      quickExit();
      return;
    } else if (t.dataset.plan === 'tick') {
      planTick(t.dataset.slot);
      return;
    } else if (t.dataset.ms) {
      msSet(t.dataset.ms, t.dataset.st);
    } else if (t.dataset.msave) {
      if (t.dataset.msave === 'save') msSave(); else msDiscard();
    } else if (t.dataset.ci) {
      const how = t.dataset.ci;
      if (how === 'set') ciSet(t.dataset.row, t.dataset.val);
      else if (how === 'save') ciSave();
      else if (how === 'cancel') ciDiscard();
      else if (how === 'open') { ciEnsureDraft(); store.ciOpen = true; flushStore(); }
    } else if (t.dataset.filter === 'setting') {
      actFilter.setting = actFilter.setting === t.dataset.val ? null : t.dataset.val;
    } else if (t.dataset.filter === 'mat') {
      actFilter.noMaterials = !actFilter.noMaterials;
    }
    render();
  });
}



/* =================================================================
   RIGHT NOW
   ================================================================= */

/* Right Now is the screen somebody opens one handed at 2am, so the
   order is fixed: emergencies first, then a search box, then the
   tappable list. Search lives here rather than in a tab of its own,
   because searching is something you do from wherever you are standing
   rather than a place you travel to. */
function screenNow(c) {
  const fever = c.months == null ? null : getFeverTriage(c.months);
  const urgColor = { emergency: 'var(--concern)', callNow: '#B5705C', sameDay: 'var(--attention)', routine: 'var(--muted)' };
  const asked = state.askAsked || '';

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <p class="eyebrow" style="margin-top:6px">What is happening right now</p>
    <h1 class="title">I need help</h1>
    <p class="sub">Tap what is going on, or type it the way you would say it out loud.</p>
  </div>
  <div class="sc">
    <div class="card" style="border:1.5px solid #E4C9BF;background:#FCF4F1">
      <p class="eyebrow" style="color:#A85A44">Call 911 right now if</p>
      <ul class="dlist warn" style="margin-top:7px">
        ${ALWAYS_EMERGENCY.items.slice(0, 3).map((t) => `<li>${esc(t)}</li>`).join('')}
      </ul>
      <p class="tiny" style="margin-top:9px;color:#8A5A4A">${esc(ALWAYS_EMERGENCY.poison)}</p>
    </div>

    ${activeChild() ? `
    <button class="lrow" data-go="screen" data-id="safety" style="align-items:flex-start">
      <span class="licon" style="background:#F7E9E4">${icon('heart', 18)}</span>
      <span class="grow">
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">They are choking, or not breathing</span>
        <span class="tiny" style="display:block;margin-top:2px">CPR and choking steps for ${esc(getCprForAge(c.months).label.toLowerCase())}, written to be followed while someone else calls 911</span>
      </span>
      <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
    </button>` : ''}

    ${supportRow()}

    ${askBlock(c)}

    ${fever ? `
    <div class="card flat" style="border-left:3px solid ${urgColor[fever.urgency]}">
      <p class="eyebrow" style="color:${urgColor[fever.urgency]}">Fever &middot; ${esc(URGENCY[fever.urgency].label)}</p>
      <h3 class="h3" style="font-size:16px">${esc(fever.headline)}</h3>
      <p class="bodytext" style="margin-top:5px">${esc(fever.detail)}</p>
    </div>` : ''}

    ${asked ? '' : `
    <p class="sect">Tap what is happening</p>
    ${c.months == null ? `
      <div class="card flat">
        <p class="bodytext">Open a child, or add a birthday, and this fills with the situations that
        actually happen at their age.</p>
      </div>` : ''}
    ${c.situations.map((s) => `
      <button class="lrow" data-go="situation" data-id="${esc(s.id)}" style="align-items:flex-start;padding:15px 15px">
        <span class="licon" style="background:${s.urgencyCheck && s.urgencyCheck.severity === 'critical' ? '#F7E9E4' : 'var(--leaf2)'}">
          ${icon(NOW_ICON[s.category] || 'heart', 19)}
        </span>
        <span class="grow">
          <span style="display:block;font-size:15px;font-weight:600;color:var(--ink);line-height:1.3">${esc(s.label)}</span>
          <span class="tiny" style="display:block;margin-top:2px">${esc(s.subtitle)}</span>
        </span>
        <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
      </button>`).join('')}
    `}
    <p class="disclaimer">${esc(TOPIC_DISCLAIMER)}</p>
  </div>`;
}

const NOW_ICON = {
  crying: 'heart', sleep: 'moon', feeding: 'utensils', behavior: 'people',
  separation: 'heart', emotional: 'chat', health: 'pill', school: 'book',
};

function viewSituation(c, id) {
  const s = getSituation(id);
  if (!s) return emptyScreen('That could not be found.');
  const sev = s.urgencyCheck && s.urgencyCheck.severity;
  const sevStyle = sev === 'critical'
    ? 'border:1.5px solid #DDA192;background:#FCF2EE'
    : sev === 'warning' ? 'border:1.5px solid #E0C39A;background:#FBF5EA' : 'background:var(--leaf3)';

  const timers = (s.timers || []).map((t) => resolveTimer(t, c.months)).filter(Boolean);

  return `
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm" style="margin-top:6px">${esc(s.label)}</h1>
    <p class="sub">${esc(s.subtitle)}</p>
  </div>
  <div class="sc">
    ${s.urgencyCheck ? `
    <div class="card" style="${sevStyle}">
      <p class="eyebrow" style="color:${sev === 'critical' ? '#A85A44' : 'var(--taupe)'}">${esc(s.urgencyCheck.title)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(s.urgencyCheck.body)}</p>
    </div>` : ''}

    <div class="dsec">
      <h4>Try this now</h4>
      <ol style="margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:9px">
        ${s.tryRightNow.map((t, i) => `
          <li style="display:flex;gap:11px;align-items:flex-start">
            <span style="flex:none;width:22px;height:22px;border-radius:50%;background:var(--sage);color:#fff;
              font-size:11.5px;font-weight:700;display:grid;place-items:center;margin-top:1px">${i + 1}</span>
            <span style="font-size:13.5px;line-height:1.55;color:var(--body)">${esc(t)}</span>
          </li>`).join('')}
      </ol>
    </div>

    ${timers.length ? `
    <div class="dsec">
      <h4>Timers that help</h4>
      ${timers.map((t) => `
        <div class="card flat" style="display:flex;gap:12px;align-items:center">
          <span style="flex:none;width:52px;height:52px;border-radius:50%;background:var(--leaf2);display:grid;place-items:center;
            font-family:var(--serif);font-size:15px;font-weight:600;color:var(--deep2)">${t.minutes ? t.minutes + 'm' : '&#8593;'}</span>
          <span class="grow">
            <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">${esc(t.label)}</span>
            <span class="tiny" style="display:block;margin-top:3px">${esc(t.why)}</span>
          </span>
        </div>`).join('')}
    </div>` : ''}

    ${s.whatIsHappening ? `
    <div class="dsec">
      <h4>What is happening</h4>
      <div class="card leafy">
        <h3 class="h3" style="font-size:16px">${esc(s.whatIsHappening.headline)}</h3>
        <p class="bodytext" style="margin-top:6px">${esc(s.whatIsHappening.body)}</p>
      </div>
      <ul class="dlist" style="margin-top:10px">${s.whatIsHappening.points.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    </div>` : ''}

    ${s.scripts && s.scripts.length ? `
    <div class="dsec">
      <h4>What to say</h4>
      ${s.scripts.map((x) => `
        <div class="quote">
          <p class="sit">${esc(x.situation)}</p>
          <q>${esc(x.say)}</q>
          <p class="why">${esc(x.why)}</p>
        </div>`).join('')}
    </div>` : ''}

    ${s.forYou && s.forYou.length ? `
    <div class="dsec">
      <h4>For you</h4>
      <div class="callout">${s.forYou.map((t, i) => `<p style="margin:0 0 ${i === s.forYou.length - 1 ? '0' : '8px'}">${esc(t)}</p>`).join('')}</div>
    </div>` : ''}

    <div class="dsec">
      <h4>Call your pediatrician if</h4>
      <ul class="dlist warn">${s.callDoctorIf.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    </div>

    ${(s.topics || []).length ? `
    <div class="dsec">
      <h4>Read more</h4>
      ${s.topics.map((t) => {
        const topic = getTopic(t);
        return topic ? `<button class="lrow" data-go="topic" data-id="${esc(topic.id)}">
          <span class="licon">${icon('bulb', 17)}</span>
          <span class="grow" style="font-size:14px;font-weight:600;color:var(--ink)">${esc(topic.label)}</span>
          <span class="chev">${icon('chev', 15, 'var(--faint)')}</span></button>` : '';
      }).join('')}
    </div>` : ''}
    <p class="disclaimer">${esc(TOPIC_DISCLAIMER)}</p>
  </div>`;
}

/* =================================================================
   SLEEP AND THE SCHEDULE BUILDER
   ================================================================= */

function screenSleep(c) {
  if (c.months == null) return emptyScreen('Add a birthday first.');
  const day = buildDay({ months: c.months, wakeTime: state.wakeTime, naps: state.napOverride });
  const rows = day.ok ? describeDay(day) : [];
  const needs = c.sleepNeeds;
  const band = c.band;

  const rowIcon = { wake: 'sun', nap: 'moon', winddown: 'heart', bedtime: 'moon' };

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">Today's Rhythm</h1>
    <p class="sub">Tell it one thing. It builds the rest of the day.</p>
  </div>
  <div class="sc">
    <div class="card">
      <p class="eyebrow">What time did they wake up?</p>
      <input type="time" data-wake="1" value="${esc(state.wakeTime)}"
        style="font:inherit;font-size:24px;font-family:var(--serif);font-weight:600;color:var(--ink);
        border:0;background:transparent;padding:4px 0;width:100%">
      ${band ? `<p class="tiny" style="margin-top:2px">${esc(band.label)} &middot; usually ${band.naps.typical === 0 ? 'no naps' : band.naps.typical + (band.naps.typical === 1 ? ' nap' : ' naps')}</p>` : ''}
    </div>

    ${band && band.naps.max > 0 ? `
    <div style="display:flex;gap:6px;margin-bottom:13px;align-items:center;flex-wrap:wrap">
      <span class="tiny" style="margin-right:2px">Naps today</span>
      ${Array.from({ length: band.naps.max + 1 }, (_, n) => n).map((n) => {
        const active = (state.napOverride == null ? band.naps.typical : state.napOverride) === n;
        return `<button class="mb" data-naps="${n}" aria-pressed="${active}"
          style="${active ? 'background:var(--sage);color:#fff' : ''}">${n}</button>`;
      }).join('')}
    </div>` : ''}

    ${day.ok ? `
    <div class="card" style="padding:6px 14px 14px">
      ${rows.map((r, i) => `
        <div style="display:flex;gap:12px;align-items:flex-start;padding:11px 0;
          ${i < rows.length - 1 ? 'border-bottom:1px solid var(--line2)' : ''}">
          <span style="flex:none;width:34px;height:34px;border-radius:50%;margin-top:1px;
            background:${r.type === 'bedtime' ? 'var(--leaf)' : 'var(--leaf2)'};display:grid;place-items:center">
            ${icon(rowIcon[r.type] || 'leaf', 16)}
          </span>
          <span class="grow">
            <span style="display:block;font-size:14.5px;font-weight:600;color:var(--ink)">${esc(r.label)}</span>
            <span class="tiny" style="display:block;margin-top:1px">${esc(r.range)}${r.length ? ' &middot; ' + esc(r.length) : ''}</span>
          </span>
          ${r.actual ? '<span class="tag">logged</span>' : ''}
        </div>`).join('')}
    </div>

    ${day.notes.map((n) => `<div class="callout" style="margin-bottom:9px">${esc(n)}</div>`).join('')}

    <div class="card flat">
      <p class="eyebrow">Sleep this day adds up to</p>
      <div class="pline" style="margin-top:6px">
        <span>Naps</span><b>${esc(formatDuration(day.summary.dayNapMinutes))}</b>
      </div>
      <div class="pline"><span>Overnight</span><b>${esc(formatDuration(day.summary.estimatedNightMinutes))}</b></div>
      <div class="pline" style="border-top:1px solid var(--line2);padding-top:7px;margin-top:7px">
        <span style="font-weight:600;color:var(--ink)">Total</span><b>${esc(formatDuration(day.summary.estimatedTotalMinutes))}</b>
      </div>
      ${needs ? `<p class="tiny" style="margin-top:8px">Typical for ${esc(needs.label)} is ${needs.hours[0]} to ${needs.hours[1]} hours in 24. ${esc(needs.note)}</p>` : ''}
    </div>` : `<div class="card flat"><p class="bodytext">${esc(day.reason)}</p></div>`}

    ${band ? `<div class="card leafy"><p class="bodytext">${esc(band.guidance)}</p></div>` : ''}

    ${(() => {
      if (!day.ok) return '';
      const rt = buildRoutine({
        type: 'bedtime', months: c.months,
        endTime: formatTime(day.summary.bedtime),
        include: state.routineInclude,
      });
      if (!rt.ok) return '';
      const opts = getOptionalSteps('bedtime', c.months);
      return `
      <p class="sect">Bedtime routine</p>
      <div class="card flat">
        <p class="bodytext">Start at <strong style="color:var(--ink)">${esc(rt.startTime)}</strong> to finish by ${esc(rt.endTime)}. ${rt.totalMinutes} minutes in all.</p>
        ${rt.note ? `<p class="tiny" style="margin-top:7px">${esc(rt.note)}</p>` : ''}
      </div>
      ${opts.length ? `
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:11px;align-items:center">
        <span class="tiny" style="margin-right:2px">Also include</span>
        ${opts.map((o) => {
          const on = state.routineInclude.includes(o.id);
          return `<button class="mb" data-routine="${esc(o.id)}" aria-pressed="${on}"
            style="${on ? 'background:var(--sage);color:#fff' : ''}">${esc(o.label)}</button>`;
        }).join('')}
      </div>` : ''}
      <div class="card" style="padding:6px 14px 14px">
        ${rt.steps.map((st, i) => `
          <div style="display:flex;gap:12px;align-items:flex-start;padding:11px 0;
            ${i < rt.steps.length - 1 ? 'border-bottom:1px solid var(--line2)' : ''}">
            <span style="flex:none;width:60px;font-size:12.5px;font-weight:600;color:var(--deep2);
              padding-top:2px;font-variant-numeric:tabular-nums">${esc(st.time)}</span>
            <span style="flex:none;width:30px;height:30px;border-radius:50%;background:var(--leaf2);display:grid;place-items:center">
              ${icon(st.icon || 'leaf', 15)}
            </span>
            <span class="grow">
              <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);line-height:1.3">${esc(st.label)}</span>
              <span class="tiny" style="display:block;margin-top:2px">${esc(st.why)}</span>
            </span>
          </div>`).join('')}
      </div>
      <div class="card flat">
        <p class="eyebrow">${esc(ROUTINE_STANCE.headline)}</p>
        <p class="bodytext" style="margin-top:5px">${esc(ROUTINE_STANCE.body)}</p>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px">
          ${ROUTINE_STANCE.options.map((o) => `<span class="tag">${esc(o.label)}</span>`).join('')}
        </div>
      </div>`;
    })()}
    <div class="callout">${esc(SCHEDULE_DISCLAIMER)}</div>

    ${c.disruptions.length ? `
    <p class="sect">Common at this age</p>
    ${c.disruptions.map((d) => `
      <div class="card">
        <h3 class="h3" style="font-size:16px">${esc(d.label)}</h3>
        <p class="bodytext" style="margin-top:5px"><strong style="color:var(--ink)">What it looks like.</strong> ${esc(d.what)}</p>
        <p class="bodytext" style="margin-top:7px"><strong style="color:var(--ink)">Why.</strong> ${esc(d.why)}</p>
        <ul class="dlist" style="margin-top:9px">${d.tryThis.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>`).join('')}` : ''}

    ${getApproachesForAge(c.months).length ? `
    <p class="sect">If you want to change how nights go</p>
    <div class="card flat"><p class="bodytext">${esc(SETTLING_FRAMING)}</p></div>
    ${getApproachesForAge(c.months).map((a) => `
      <div class="card">
        <h3 class="h3" style="font-size:15.5px">${esc(a.label)}</h3>
        <p class="bodytext" style="margin-top:4px">${esc(a.summary)}</p>
        <p class="tiny" style="margin-top:7px"><strong style="color:var(--ink)">Asks of you.</strong> ${esc(a.asksOfYou)}</p>
        <p class="tiny" style="margin-top:4px"><strong style="color:var(--ink)">Evidence.</strong> ${esc(a.evidence)}</p>
      </div>`).join('')}` : ''}
    <p class="disclaimer">${esc(TOPIC_DISCLAIMER)}</p>
  </div>`;
}

/* =================================================================
   CARE TOPICS
   ================================================================= */

function screenTopics(c) {
  const groups = getTopicsByCategory(c.months);
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm" style="margin-top:6px">Care Topics</h1>
    <p class="sub">Sourced, linked, and checked against current guidance.</p>
  </div>
  <div class="sc">
    ${groups.map((g) => `
      <p class="sect">${esc(g.label)}</p>
      ${g.items.map((t) => `
        <button class="lrow" data-go="topic" data-id="${esc(t.id)}" style="align-items:flex-start">
          <span class="licon">${icon(t.category === 'safety' ? 'star' : t.category === 'feeding' ? 'utensils' : 'pill', 18)}</span>
          <span class="grow">
            <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);line-height:1.3">${esc(t.label)}</span>
            <span class="tiny" style="display:block;margin-top:2px">${esc(t.summary.slice(0, 78))}...</span>
          </span>
          <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
        </button>`).join('')}`).join('')}
    <p class="disclaimer">${esc(TOPIC_DISCLAIMER)}</p>
  </div>`;
}

function viewTopic(c, id) {
  const t = getTopic(id);
  if (!t) return emptyScreen('That topic could not be found.');
  return `
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm" style="margin-top:6px">${esc(t.label)}</h1>
  </div>
  <div class="sc">
    <div class="card leafy"><p class="bodytext">${esc(t.summary)}</p></div>

    ${t.rateTable ? `
    <div class="dsec">
      <h4>Faster than this is worth a call</h4>
      <div class="card" style="padding:0">
        ${t.rateTable.map((r, i) => `
          <div style="display:flex;justify-content:space-between;gap:12px;padding:12px 14px;
            ${i < t.rateTable.length - 1 ? 'border-bottom:1px solid var(--line2)' : ''}">
            <span style="font-size:13.5px;font-weight:600;color:var(--ink)">${esc(r.age)}</span>
            <span style="font-size:13px;color:var(--body);text-align:right;font-variant-numeric:tabular-nums">${esc(r.fast)}</span>
          </div>`).join('')}
      </div>
      <p class="tiny" style="margin-top:7px">Count for a full sixty seconds while they are calm or asleep. Crying makes the number meaningless.</p>
    </div>` : ''}

    ${t.storageTable ? `
    <div class="dsec">
      <h4>How long it keeps</h4>
      <div class="card" style="padding:0;overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:12.5px;min-width:420px">
          <thead><tr>
            ${['', 'Room temp', 'Fridge', 'Freezer'].map((h) => `<th style="text-align:left;padding:10px 11px;
              font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);
              border-bottom:1px solid var(--line2);font-weight:700">${h}</th>`).join('')}
          </tr></thead>
          <tbody>
            ${t.storageTable.map((r, i) => `<tr>
              <td style="padding:10px 11px;font-weight:600;color:var(--ink);${i < t.storageTable.length - 1 ? 'border-bottom:1px solid var(--line2)' : ''}">${esc(r.state)}</td>
              <td style="padding:10px 11px;${i < t.storageTable.length - 1 ? 'border-bottom:1px solid var(--line2)' : ''}">${esc(r.room)}</td>
              <td style="padding:10px 11px;${i < t.storageTable.length - 1 ? 'border-bottom:1px solid var(--line2)' : ''}">${esc(r.fridge)}</td>
              <td style="padding:10px 11px;${i < t.storageTable.length - 1 ? 'border-bottom:1px solid var(--line2)' : ''}">${esc(r.freezer)}</td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>` : ''}

    <div class="dsec">
      <h4>What to know</h4>
      <ul class="dlist">${t.keyPoints.map((k) => `<li>${esc(k)}</li>`).join('')}</ul>
    </div>

    ${t.myths && t.myths.length ? `
    <div class="dsec">
      <h4>Things you will hear that are not true</h4>
      ${t.myths.map((m) => `
        <div class="card flat" style="margin-bottom:8px">
          <p style="margin:0;font-size:13px;color:var(--muted);text-decoration:line-through">${esc(m.myth)}</p>
          <p class="bodytext" style="margin-top:6px">${esc(m.truth)}</p>
        </div>`).join('')}
    </div>` : ''}

    ${t.redFlags && t.redFlags.length ? `
    <div class="dsec">
      <h4>Call your pediatrician if</h4>
      <ul class="dlist warn">${t.redFlags.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
    </div>` : ''}

    <div class="dsec">
      <h4>Sources</h4>
      ${sourceRows(t.sources)}
      <p class="tiny" style="margin-top:8px">Written against: ${esc(t.reviewedAgainst)}.</p>
    </div>
    <p class="disclaimer">${esc(TOPIC_DISCLAIMER)}</p>
  </div>`;
}



function screenWelcome(c) {
  const promises = [
    ['Real guidance', 'M11 20.5A7.2 7.2 0 0 1 9.7 6.4C15.4 5.2 17 4.6 19 2.1c1 2 2 4.2 2 8 0 5.6-4.8 10.4-10 10.4Z'],
    ['In the moment', 'M12 20s-7-4.4-7-9.3A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.7C19 15.6 12 20 12 20Z'],
    ['Brighter futures', 'M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4'],
  ];
  return `
  ${pageHeader(true)}
  <div class="sc" style="margin-top:26px">
    <h1 class="title" style="text-align:center">Grow with your child,<br>one stage at a time.</h1>
    <p class="sub" style="text-align:center;max-width:300px;margin-left:auto;margin-right:auto">
      Their birthday is the only thing the app needs. Everything else follows from it.
    </p>

    <div class="card" style="margin-top:20px">
      <p class="eyebrow">Their name or nickname</p>
      <p style="font-size:17px;color:var(--ink);margin:6px 0 0">${esc(c.child.name || 'Stetson')}</p>
    </div>
    <div class="card">
      <p class="eyebrow">Birthday</p>
      <p style="font-size:17px;color:var(--ink);margin:6px 0 0">${esc(state.birthday)}</p>
      <p class="tiny" style="margin-top:4px">That makes them ${esc(c.summary.label)}.</p>
    </div>
    <button class="btn" data-tab="home">Start ${icon('chev', 15, '#fff')}</button>

    <div style="display:flex;align-items:center;gap:12px;margin:26px 0 18px">
      <div style="flex:1;height:1px;background:var(--line)"></div>
      <span style="font-size:9px;letter-spacing:.18em;color:var(--faint);font-weight:500">A BRIGHTER TOMORROW TOGETHER</span>
      <div style="flex:1;height:1px;background:var(--line)"></div>
    </div>

    <div style="display:flex;gap:10px">
      ${promises.map(([label, d]) => `
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:7px">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="var(--sage)"
            stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>
          <span class="tiny" style="text-align:center">${label}</span>
        </div>`).join('')}
    </div>

    <div class="card leafy" style="margin-top:18px">
      <p class="bodytext">Ready Set Grow is educational information, not medical advice. It cannot
      examine your child. Your pediatrician can, and they want you to call.</p>
    </div>
  </div>`;
}



/* ------------------------------------------------------------------
 * RESTORING A SESSION ON PAGE LOAD
 *
 * Firebase keeps the signed in user in the browser, but it only hands
 * it back once the SDK has loaded and reported in. The SDK used to load
 * lazily, only when someone pressed a button, which meant a refresh
 * never asked, so the app decided nobody was signed in and showed the
 * front door. The account was fine the whole time. The app simply never
 * looked.
 *
 * So: if this browser has signed in before, load the SDK straight away
 * and hold a quiet screen until it answers. If it has not, nothing is
 * loaded and the sign in screen appears instantly, which keeps the
 * promise that a stranger browsing the public site never downloads an
 * auth library they had no use for.
 * ------------------------------------------------------------------ */
function restoreSession() {
  /* A real account wins over guest mode. Someone who once tapped look
     around and later made an account should come back to their account,
     not to the browsing view. */
  if (store.hadSession) {
    auth.checking = true;

    /* The call itself waits a tick. This boot block runs partway down
       the file, and loadFirebase closes over a `let` declared further
       down, which does not exist yet at this exact moment. Deferring by
       one turn of the event loop lets the rest of the script finish
       first. Learned the hard way, so please leave the setTimeout. */
    setTimeout(() => {
      try {
        loadFirebase().catch(giveUpRestoring);
      } catch (err) {
        giveUpRestoring();
      }
    }, 0);

    /* And a promise that never settles would leave a parent staring at
       a holding screen, so there is a hard limit either way. */
    setTimeout(() => { if (auth.checking) giveUpRestoring(); }, 8000);
    return;
  }

  // Looking around without an account should also survive a refresh.
  if (store.guest) auth.guest = true;
}

/* Offline, blocked CDN, or simply too slow. Show the front door rather
   than holding a screen that never resolves. */
function giveUpRestoring() {
  if (!auth.checking) return;
  auth.checking = false;
  render();
}


/* =================================================================
   FEEDING AND RECOVERY
   Hospital bag, pumping, and the fourth trimester.

   These are screens the parent goes to on purpose rather than
   screens the app routes them to, so they live behind the hub
   rather than taking a tab. Each one keeps its own sub tab in
   state, so switching away and back does not lose your place.
   ================================================================= */

/* A small tab strip shared by the pumping and postpartum screens. */
function subTabs(group, current, tabs) {
  return `<div class="chips" style="margin-bottom:12px">${tabs.map((t) => `
    <button class="chip" data-sub="${esc(group)}" data-val="${esc(t.id)}"
      aria-pressed="${current === t.id}">${esc(t.label)}</button>`).join('')}</div>`;
}

/* A labelled block, matching the dsec pattern used by the detail views. */
function dsec(label, inner) {
  if (!inner) return '';
  return `<div class="dsec"><h4>${esc(label)}</h4>${inner}</div>`;
}

function list(items, warn) {
  if (!items || !items.length) return '';
  return `<ul class="dlist${warn ? ' warn' : ''}">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
}

function steps(items) {
  if (!items || !items.length) return '';
  return `<ol class="dlist" style="counter-reset:none">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ol>`;
}

/* THE SOURCE BADGE.

   The little green tile is 38px square and the organisation names are
   not. "AAP, HealthyChildren" and "Office on Women's Health" were
   spilling out of it and running over the text beside them.

   So the tile gets a short code and the full name moves into the line
   underneath, where it can be as long as it likes. The codes are a
   written list rather than something clever with initials, because
   initials turn the Academy of Breastfeeding Medicine into ABM and the
   Cleveland Clinic into CC, and only one of those is a real thing
   anybody would recognize. Anything not on the list falls back to a
   rule that is at least never wrong: short names as they are, longer
   ones cut to their first word. */
const SOURCE_CODES = {
  '988 lifeline': '988',
  'aap, healthychildren': 'AAP',
  'healthychildren.org (aap)': 'AAP',
  'american academy of pediatrics': 'AAP',
  'academy of breastfeeding medicine': 'ABM',
  'american heart association': 'AHA',
  'american red cross': 'Red Cross',
  'center for parent information and resources': 'CPIR',
  'cleveland clinic': 'Cleveland',
  'ecta center': 'ECTA',
  'healthcare.gov': 'HealthCare',
  'journal of emergency nursing': 'JEN',
  'la leche league usa': 'LLL',
  'mothertobaby': 'MTB',
  'office on women\u2019s health': 'OWH',
  "office on women's health": 'OWH',
  'poison control': 'Poison',
  'postpartum support international': 'PSI',
  'star legacy foundation': 'SLF',
  'u.s. department of labor': 'DOL',
  'us dol': 'DOL',
  'who imci': 'WHO',
};

function sourceCode(org) {
  const raw = String(org == null ? '' : org).trim();
  if (!raw) return '?';
  const mapped = SOURCE_CODES[raw.toLowerCase()];
  if (mapped) return mapped;
  if (raw.length <= 7) return raw;
  return raw.split(/[\s,]+/)[0].slice(0, 10);
}

/* One row, used everywhere sources are listed, so fixing the badge once
   fixes it on every screen rather than on the one somebody noticed. */
function sourceRow(sc) {
  const domain = String(sc.url || '').replace(/^https?:\/\//, '').split('/')[0];
  const org = String(sc.org || '').trim();
  /* Only worth printing the organisation when the badge had to shorten
     it. "CDC" under a badge that says CDC is noise. */
  const showOrg = org && org !== sourceCode(org);
  return `
    <a href="${esc(sc.url)}" target="_blank" rel="noopener noreferrer" class="lrow" style="text-decoration:none">
      <span class="licon srcbadge">${esc(sourceCode(org))}</span>
      <span class="grow">
        <span style="display:block;font-size:13.5px;font-weight:600;color:var(--deep);line-height:1.35">${esc(sc.label)}</span>
        <span class="tiny" style="display:block;margin-top:2px">${showOrg ? esc(org) + ' &middot; ' : ''}${esc(domain)}</span>
      </span>
      <span class="chev">${icon('chev', 15, 'var(--faint)')}</span>
    </a>`;
}

function sourceRows(sources) {
  if (!sources || !sources.length) return '';
  return sources.map(sourceRow).join('');
}


/* ------------------------------------------------------------------
 * FEEDING
 *
 * Written under one rule: fed is best, stated in the content and not
 * only in a footer. The stance card sits at the top of the screen at
 * every age, because the parent who most needs to read it is the one
 * who opened this screen at 3am wondering whether to give up.
 * ------------------------------------------------------------------ */

function feedingStanceCard() {
  return `
  <div class="card leafy">
    <p class="eyebrow">${icon('heart', 11, 'var(--sage)')} Where we stand</p>
    <p class="bodytext" style="margin-top:6px;font-size:15px;line-height:1.55">
      ${esc(FEEDING_STANCE.headline)}
    </p>
    ${FEEDING_STANCE.body.map((p) => `
      <p class="bodytext" style="margin:10px 0 0">${esc(p)}</p>`).join('')}
    <div class="callout" style="margin-top:12px">
      <p style="margin:0">${esc(FEEDING_STANCE.forTheParentWhoIsStruggling)}</p>
    </div>
  </div>`;
}

function screenFeeding(c) {
  const months = c.months;
  const stage = getFeedingStage(months);
  const headline = getFeedingHeadline(months);
  /* Default to whichever tab answers the question they are most likely
     here for, rather than always to the same one. */
  let tab = state.feedTab || (c.months != null && c.months < 2 ? 'newborn' : 'stance');
  if (tab === 'newborn' && !newbornRhythmIsRelevant(c.months)) tab = 'stance';

  /* The newborn tab only exists while it is the live question, and while
     it exists it goes first, because a parent of a nine day old is not
     on this screen to read about avocado. */
  const newbornHere = newbornRhythmIsRelevant(months);

  /* THE MILK HALF HAS AN END DATE.

     Stetson is four and this screen was still opening on formula and
     breastfeeding. Past two that is history for most families, and
     still the live question for anybody nursing or pumping, so the opt
     in is not another switch to hunt for: it is the breastfeeding and
     pumping boxes already on her own profile. See eatingTogether.js. */
  const milkHere = showsMilkContent(months, situation().stages);
  const tableHere = showsTableContent(months);


  const tabs = (newbornHere ? [{ id: 'newborn', label: 'The newborn rhythm' }] : [])
    .concat(milkHere ? [
      { id: 'stance', label: 'Fed is best' },
      { id: 'latch', label: 'Latch and ties' },
      { id: 'weight', label: 'Weight and transfer' },
      { id: 'bottles', label: 'Bottles and pacifiers' },
      { id: 'milk', label: 'Milk' },
    ] : [])
    /* SOLIDS ARRIVE WHEN SOLIDS ARRIVE.

       A parent of a four week old does not need three tabs about
       avocado, and the same rule that hides milestones past six and
       hides development guidance when there is nothing behind it
       applies here. Shown from three months, which is early enough to
       read ahead and late enough not to be noise on day nine. */
    .concat(milkHere && (months == null || months >= 3) ? [
      { id: 'solids', label: 'Starting solids' },
      { id: 'how', label: 'Purees or baby led' },
      { id: 'foods', label: 'First foods' },
    ] : [])
    .concat(tableHere ? [{ id: 'table', label: 'Eating together' }] : []);

  /* Whichever tab is actually answering their question. A four year
     old's parent should not land on a tab about first foods. */
  if (!milkHere && ['stance', 'latch', 'weight', 'bottles', 'milk', 'solids', 'how', 'foods'].indexOf(tab) !== -1) tab = 'table';
  if (!tabs.some((t) => t.id === tab)) tab = (tabs[0] || {}).id || 'table';

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">Feeding</h1>
    <p class="sub">${headline ? esc(headline) : 'From first milk to the family table.'}</p>
  </div>
  <div class="sc">
    <div class="chips" style="margin-bottom:12px">
      ${tabs.map((t) => `
        <button class="chip" data-sub="feedTab" data-val="${esc(t.id)}"
                aria-pressed="${t.id === tab}">${esc(t.label)}</button>`).join('')}
    </div>

    ${tab === 'newborn' ? newbornBlock(c) : ''}

    ${tab === 'stance' ? `
      ${feedingStanceCard()}

      <div class="dsec">
        <h4>What human milk does</h4>
        <p class="tiny" style="margin:0 0 9px">${esc(BREASTMILK_BENEFITS.intro)}</p>
        <p class="sect" style="margin-top:0">For the baby</p>
        ${list(BREASTMILK_BENEFITS.forBaby)}
        <p class="sect">For the parent feeding</p>
        ${list(BREASTMILK_BENEFITS.forParent)}
        <p class="sect">The honest caveats</p>
        ${list(BREASTMILK_BENEFITS.honestCaveats)}
      </div>

      <div class="dsec">
        <h4>What formula is</h4>
        <p class="tiny" style="margin:0 0 9px">${esc(FORMULA_FACTS.intro)}</p>
        ${list(FORMULA_FACTS.points)}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0">${esc(FORMULA_FACTS.ifYouNeedHelpAffordingIt)}</p>
        </div>
      </div>` : ''}

    ${tab === 'latch' ? `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(LATCH_INTRO)}</p>
      </div>

      <div class="dsec">
        <h4>What you are seeing</h4>
        <p class="tiny" style="margin:0 0 10px">${esc(LATCH_SIGNS.intro)}</p>
        <p class="sect" style="margin-top:0">In your baby</p>
        ${LATCH_SIGNS.inBaby.map((x) => `
          <div class="quote">
            <p class="sit">${icon('info', 12, 'var(--taupe)')} ${esc(x.sign)}</p>
            <p class="why" style="margin-top:4px">${esc(x.means)}</p>
          </div>`).join('')}
        <p class="sect">In you</p>
        ${LATCH_SIGNS.inYou.map((x) => `
          <div class="quote">
            <p class="sit">${icon('info', 12, 'var(--taupe)')} ${esc(x.sign)}</p>
            <p class="why" style="margin-top:4px">${esc(x.means)}</p>
          </div>`).join('')}
      </div>

      <div class="dsec">
        <h4>${esc(DEEP_LATCH.title)}</h4>
        <p class="bodytext" style="margin:0 0 8px">${esc(DEEP_LATCH.headline)}</p>
        <p class="tiny" style="margin:0 0 10px">${esc(DEEP_LATCH.intro)}</p>
        ${DEEP_LATCH.signs.map((x) => `
          <div class="quote">
            <p class="sit">${icon('check', 12, 'var(--sage)')} ${esc(x.sign)}</p>
            <p class="why" style="margin-top:4px">${esc(x.why)}</p>
          </div>`).join('')}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0">${esc(DEEP_LATCH.bottleNote)}</p>
        </div>
      </div>

      <div class="dsec">
        <h4>${esc(USUAL_CAUSES.title)}</h4>
        <p class="bodytext" style="margin:0 0 10px">${esc(USUAL_CAUSES.headline)}</p>
        ${USUAL_CAUSES.causes.map((x) => `
          <div class="quote">
            <p class="sit">${esc(x.cause)}</p>
            <p class="why" style="margin-top:4px">${esc(x.detail)}</p>
          </div>`).join('')}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0">${esc(USUAL_CAUSES.theGoodNews)}</p>
        </div>
      </div>

      <div class="dsec">
        <h4>${esc(ABOUT_TIES.title)}</h4>
        <p class="bodytext" style="margin:0 0 9px">${esc(ABOUT_TIES.headline)}</p>
        <p class="bodytext" style="margin:0 0 10px">${esc(ABOUT_TIES.plain)}</p>
        ${list(ABOUT_TIES.points)}
        <p class="sect">What to ask before anyone releases anything</p>
        <p class="tiny" style="margin:-2px 0 9px">${esc(ABOUT_TIES.askBeforeAProcedure.intro)}</p>
        ${ABOUT_TIES.askBeforeAProcedure.questions.map((q) => `
          <div class="quote"><p class="sit">${icon('info', 12, 'var(--taupe)')} ${esc(q)}</p></div>`).join('')}
        <p class="tiny" style="margin-top:9px">${esc(ABOUT_TIES.askBeforeAProcedure.note)}</p>
      </div>

      <div class="dsec">
        <h4>${esc(WHO_TO_ASK.title)}</h4>
        <p class="bodytext" style="margin:0 0 9px">${esc(WHO_TO_ASK.headline)}</p>
        ${WHO_TO_ASK.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <div class="callout" style="margin-top:4px">
          <p style="margin:0">${esc(WHO_TO_ASK.ifYouAreDoneTrying)}</p>
        </div>
      </div>

      <div class="dsec">
        <h4>${esc(LATCH_RED_FLAGS.title)}</h4>
        ${list(LATCH_RED_FLAGS.items)}
        <p class="bodytext" style="margin-top:6px;color:#7A4E40">${esc(LATCH_RED_FLAGS.urgent)}</p>
      </div>

      <div class="dsec">
        <h4>Where this comes from</h4>
        ${LATCH_SOURCES.map((sc) => `
          <p class="tiny" style="margin:0 0 6px">
            <strong style="color:var(--deep)">${esc(sc.org)}</strong>
            <a href="${esc(sc.url)}" target="_blank" rel="noopener">${esc(sc.label)}</a>
          </p>`).join('')}
      </div>` : ''}

    ${tab === 'weight' ? `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(GAIN_HEADLINE)}</p>
      </div>

      <div class="dsec">
        <h4>${esc(GAIN_NUMBERS.title)}</h4>
        ${GAIN_NUMBERS.rows.map((r) => `
          <div class="quote">
            <p class="sit">${icon('clock', 12, 'var(--taupe)')} ${esc(r.when)}</p>
            <p class="why" style="margin-top:4px">${esc(r.what)}</p>
          </div>`).join('')}
        <p class="tiny" style="margin-top:9px">${esc(GAIN_NUMBERS.note)}</p>
      </div>

      <div class="dsec">
        <h4>${esc(GAIN_SLOW.title)}</h4>
        <p class="bodytext" style="margin:0 0 10px">${esc(GAIN_SLOW.intro)}</p>
        <p class="sect" style="margin-top:0">${esc(GAIN_SLOW.fine.label)}</p>
        ${list(GAIN_SLOW.fine.items)}
        <p class="sect">${esc(GAIN_SLOW.notFine.label)}</p>
        ${list(GAIN_SLOW.notFine.items)}
      </div>

      <div class="dsec">
        <h4>${esc(WEIGHED_FEED.title)}</h4>
        ${WEIGHED_FEED.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <p class="tiny" style="margin-top:2px">${esc(WEIGHED_FEED.note)}</p>
      </div>

      <div class="dsec">
        <h4>${esc(TRIPLE_TITLE)}</h4>
        <p class="bodytext" style="margin:0 0 10px;font-weight:600;color:var(--deep)">${esc(TRIPLE_HEADLINE)}</p>
        <p class="sect" style="margin-top:0">${esc(TRIPLE_WHAT.title)}</p>
        ${TRIPLE_WHAT.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <div class="callout" style="margin-top:4px"><p style="margin:0">${esc(TRIPLE_WHAT.why)}</p></div>
      </div>

      <div class="dsec">
        <h4>${esc(TRIPLE_HONEST.title)}</h4>
        ${TRIPLE_HONEST.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <div class="callout" style="margin-top:4px"><p style="margin:0">${esc(TRIPLE_HONEST.permission)}</p></div>
      </div>

      <div class="dsec">
        <h4>${esc(TRIPLE_EXIT.title)}</h4>
        <p class="tiny" style="margin:0 0 10px">${esc(TRIPLE_EXIT.intro)}</p>
        ${TRIPLE_EXIT.ways.map((w) => `
          <div class="quote">
            <p class="sit">${esc(w.way)}</p>
            <p class="why" style="margin-top:4px">${esc(w.how)}</p>
          </div>`).join('')}
        <p class="bodytext" style="margin-top:9px">${esc(TRIPLE_EXIT.thenThePump)}</p>
        <p class="sect">Ask these at every visit</p>
        ${TRIPLE_EXIT.askEveryVisit.map((q) => `
          <div class="quote"><p class="sit">${icon('info', 12, 'var(--taupe)')} ${esc(q)}</p></div>`).join('')}
      </div>

      <div class="dsec">
        <h4>${esc(TRIPLE_EASIER.title)}</h4>
        ${list(TRIPLE_EASIER.items)}
      </div>

      <div class="dsec">
        <h4>Where this comes from</h4>
        ${FEEDING_DEEP_SOURCES.map((sc) => `
          <p class="tiny" style="margin:0 0 6px">
            <strong style="color:var(--deep)">${esc(sc.org)}</strong>
            <a href="${esc(sc.url)}" target="_blank" rel="noopener">${esc(sc.label)}</a>
          </p>`).join('')}
      </div>` : ''}

    ${tab === 'bottles' ? `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(FLOW_HEADLINE)}</p>
      </div>

      <div class="dsec">
        <h4>${esc(FLOW_TITLE)}</h4>
        ${list(FLOW_FACTS)}
        <p class="sect">${esc(FLOW_WHAT_TO_DO.title)}</p>
        ${list(FLOW_WHAT_TO_DO.items)}
      </div>

      <div class="dsec">
        <h4>${esc(PACED_TITLE)}</h4>
        <p class="bodytext" style="margin:0 0 10px;font-weight:600;color:var(--deep)">${esc(PACED_HEADLINE)}</p>
        ${PACED_WHY.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <p class="sect">${esc(PACED_HOW.title)}</p>
        ${PACED_HOW.steps.map((x, i) => `
          <div class="quote">
            <p class="sit">${esc(String(i + 1))}</p>
            <p class="why" style="margin-top:4px">${esc(x)}</p>
          </div>`).join('')}
        <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(PACED_HOW.target)}</p></div>
      </div>

      <div class="dsec">
        <h4>${esc(BOTTLE_TITLE)}</h4>
        <p class="sect" style="margin-top:0">${esc(BOTTLE_MARKETING.title)}</p>
        ${BOTTLE_MARKETING.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <p class="sect">${esc(BOTTLE_WHAT_MATTERS.title)}</p>
        ${list(BOTTLE_WHAT_MATTERS.items)}
      </div>

      <div class="dsec">
        <h4>${esc(BOTTLE_WHAT_PEOPLE_USE.title)}</h4>
        <p class="tiny" style="margin:0 0 10px">${esc(BOTTLE_WHAT_PEOPLE_USE.intro)}</p>
        ${BOTTLE_WHAT_PEOPLE_USE.bottles.map((b) => `
          <div class="quote">
            <p class="sit">${esc(b.name)}</p>
            <p class="why" style="margin-top:4px">${esc(b.why)}</p>
            <p class="tiny" style="margin-top:5px"><strong style="color:var(--deep)">The honest bit:</strong> ${esc(b.honest)}</p>
          </div>`).join('')}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0">${esc(BOTTLE_WHAT_PEOPLE_USE.theRealAdvice)}</p>
        </div>
      </div>

      <div class="dsec">
        <h4>${esc(PACI_TITLE)}</h4>
        <p class="sect" style="margin-top:0">${esc(PACI_EVIDENCE.title)}</p>
        ${list(PACI_EVIDENCE.items)}
      </div>

      <div class="dsec">
        <h4>${esc(PACI_SHAPE.title)}</h4>
        ${PACI_SHAPE.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <div class="callout" style="margin-top:4px"><p style="margin:0">${esc(PACI_SHAPE.soWhat)}</p></div>
      </div>

      <div class="dsec">
        <h4>${esc(PACI_WHAT_PEOPLE_USE.title)}</h4>
        ${PACI_WHAT_PEOPLE_USE.paci.map((b) => `
          <div class="quote">
            <p class="sit">${esc(b.name)}</p>
            <p class="why" style="margin-top:4px">${esc(b.why)}</p>
            <p class="tiny" style="margin-top:5px"><strong style="color:var(--deep)">The honest bit:</strong> ${esc(b.honest)}</p>
          </div>`).join('')}
        <p class="tiny" style="margin-top:9px">${esc(PACI_WHAT_PEOPLE_USE.sizing)}</p>
      </div>

      <div class="card flat" style="margin-top:10px">
        <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} Nothing here is sponsored</p>
        <p class="tiny" style="margin-top:4px">${esc(FEEDING_DEEP_DISCLOSURE)}</p>
      </div>

      <div class="dsec">
        <h4>Where this comes from</h4>
        ${FEEDING_DEEP_SOURCES.map((sc) => `
          <p class="tiny" style="margin:0 0 6px">
            <strong style="color:var(--deep)">${esc(sc.org)}</strong>
            <a href="${esc(sc.url)}" target="_blank" rel="noopener">${esc(sc.label)}</a>
          </p>`).join('')}
      </div>` : ''}

    ${tab === 'milk' ? `
      <div class="card leafy">
        <p class="eyebrow">${icon('drop', 11, 'var(--sage)')} The short version</p>
        <p class="bodytext" style="margin-top:6px;font-size:15px;line-height:1.55">
          ${esc(MILK_TRANSITION.headline)}
        </p>
      </div>

      <div class="dsec">
        <h4>The timeline</h4>
        ${MILK_TRANSITION.timeline.map((row) => `
          <div class="quote">
            <p class="sit">${icon('clock', 12, 'var(--taupe)')} ${esc(row.when)}</p>
            <p class="why" style="margin-top:4px">${esc(row.what)}</p>
          </div>`).join('')}
      </div>

      <div class="dsec">
        <h4>Toddler formula</h4>
        <div class="callout"><p style="margin:0">${esc(MILK_TRANSITION.aboutToddlerFormula)}</p></div>
      </div>

      <div class="dsec">
        <h4>Feeding past a year</h4>
        ${list(MILK_TRANSITION.aboutContinuedBreastfeeding)}
      </div>

      <div class="dsec">
        <h4>Stopping gently, when you are ready</h4>
        ${list(MILK_TRANSITION.weaningGently)}
      </div>` : ''}

    ${tab === 'solids' ? `
      <div class="card leafy">
        <p class="eyebrow">${icon('utensils', 11, 'var(--sage)')} When</p>
        <p class="bodytext" style="margin-top:6px;font-size:15px;line-height:1.55">
          ${esc(SOLIDS_TIMING.headline)}
        </p>
        ${SOLIDS_TIMING.body.map((p) => `
          <p class="bodytext" style="margin:10px 0 0">${esc(p)}</p>`).join('')}
      </div>

      <div class="card flat" style="margin-top:10px">
        <p class="eyebrow">${icon('info', 11, 'var(--taupe)')} The cereal in the bottle myth</p>
        <p class="bodytext" style="margin-top:5px">${esc(SOLIDS_TIMING.theSleepMyth)}</p>
      </div>

      <div class="dsec">
        <h4>The readiness signs</h4>
        <p class="tiny" style="margin:0 0 10px">${esc(SOLIDS_READINESS.intro)}</p>
        ${SOLIDS_READINESS.signs.map((s) => `
          <div class="quote">
            <p class="sit">${icon('check', 12, 'var(--sage)')} ${esc(s.sign)}</p>
            <p class="why" style="margin-top:4px">${esc(s.why)}</p>
            <p class="tiny" style="margin-top:5px"><strong style="color:var(--deep)">Not yet:</strong> ${esc(s.notYet)}</p>
          </div>`).join('')}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0">${esc(SOLIDS_READINESS.correctedAgeNote)}</p>
        </div>
      </div>` : ''}

    ${tab === 'how' ? `
      <div class="card leafy">
        <p class="bodytext">${esc(FEEDING_APPROACHES.intro)}</p>
      </div>

      ${FEEDING_APPROACHES.options.map((o) => `
        <div class="dsec">
          <h4>${esc(o.label)}</h4>
          <p class="sect" style="margin-top:0">How it works</p>
          ${list(o.how)}
          <p class="sect">Suits</p>
          ${list(o.goodFor)}
          <p class="sect">Watch for</p>
          ${list(o.watchFor)}
        </div>`).join('')}

      <div class="dsec">
        <h4>Gagging is not choking, and you will see gagging</h4>
        <p class="sect" style="margin-top:0">Gagging, which is the reflex working</p>
        ${list(FEEDING_APPROACHES.gaggingVsChoking.gagging)}
        <p class="sect">Choking, which needs you now</p>
        ${list(FEEDING_APPROACHES.gaggingVsChoking.choking)}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0">${esc(FEEDING_APPROACHES.gaggingVsChoking.note)}</p>
        </div>
        <button class="btn ghost sm" style="width:100%;margin-top:10px" data-go="screen" data-id="safety">
          Open CPR and choking
        </button>
      </div>` : ''}

    ${tab === 'foods' ? `
      <div class="card leafy">
        <p class="bodytext">${esc(FIRST_FOODS.intro)}</p>
      </div>

      <div class="dsec">
        <h4>Iron, which is the one that actually matters</h4>
        ${list(FIRST_FOODS.ironRich)}
      </div>

      <div class="dsec">
        <h4>${esc(FIRST_FOODS.allergens.headline)}</h4>
        ${list(FIRST_FOODS.allergens.body)}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0">${esc(FIRST_FOODS.allergens.highRisk)}</p>
        </div>
      </div>

      <div class="dsec">
        <h4>Not yet, and why</h4>
        ${FIRST_FOODS.avoid.map((a) => `
          <div class="quote">
            <p class="sit">${icon('info', 12, 'var(--taupe)')} ${esc(a.food)}</p>
            <p class="why" style="margin-top:4px">${esc(a.why)}</p>
          </div>`).join('')}
      </div>

      <div class="dsec">
        <h4>How to cut it so it is safe</h4>
        ${list(FIRST_FOODS.howToCutIt)}
      </div>` : ''}

    ${tab === 'table' ? `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(TABLE_HEADLINE)}</p>
        ${TABLE_INTRO.map((p) => `<p class="bodytext" style="margin-top:10px">${esc(p)}</p>`).join('')}
      </div>

      ${!milkHere ? `
      <p class="tiny" style="margin:10px 0 0">${icon('info', 10, 'var(--taupe)')} ${esc(MILK_GONE_NOTE)}</p>` : ''}

      <div class="dsec">
        <h4>${esc(TABLE_WHAT_WORKS.title)}</h4>
        ${list(TABLE_WHAT_WORKS.items)}
      </div>

      <div class="dsec">
        <h4>${esc(TABLE_WHAT_BACKFIRES.title)}</h4>
        ${TABLE_WHAT_BACKFIRES.items.map((x) => `
          <div class="quote">
            <p class="sit">${icon('info', 12, 'var(--taupe)')} ${esc(x.what)}</p>
            <p class="why" style="margin-top:4px">${esc(x.why)}</p>
          </div>`).join('')}
      </div>

      <div class="dsec">
        <h4>${esc(TABLE_PICKY.title)}</h4>
        ${TABLE_PICKY.body.map((p) => `<p class="bodytext" style="margin:0 0 9px">${esc(p)}</p>`).join('')}
        <p class="sect" style="margin-top:4px">Worth mentioning at an appointment</p>
        ${list(TABLE_PICKY.whenToAsk)}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0">${esc(TABLE_PICKY.whenToAskNote)}</p>
        </div>
      </div>

      <div class="dsec">
        <h4>${esc(TABLE_CHOKING.title)}</h4>
        <p class="tiny" style="margin:0 0 9px">${esc(TABLE_CHOKING.intro)}</p>
        ${list(TABLE_CHOKING.items)}
        <p class="sect" style="margin-top:10px">Every time, whatever is being eaten</p>
        ${list(TABLE_CHOKING.rules)}
      </div>

      ${dsec('Sources', sourceRows(TABLE_SOURCES))}` : ''}

    ${milkHere && months != null && months >= MILK_ENDS_MONTHS ? `
    <p class="tiny" style="margin:12px 0 0">${icon('leaf', 10, 'var(--sage)')} ${esc(MILK_KEPT_NOTE)}</p>` : ''}

    ${milkHere ? dsec('Sources', sourceRows(FEEDING_SOURCES)) : ''}
    <p class="disclaimer">
      Educational information, not medical advice. Your pediatrician knows your child and this app does not.
    </p>
  </div>`;
}

/* ------------------------------------------------------------------
 * SAFETY: CPR, CHOKING, AND HOME ALONE
 *
 * The one screen in the app where being wrong is dangerous, so it
 * carries the guideline year, flags what changed in 2025, and says
 * plainly that reading it is not the same as taking the class.
 * ------------------------------------------------------------------ */

/* THE PART FOR A PARENT WHO HAS RUN OUT OF ROOM.

   Everything about why this exists and why the wording is what it is
   lives in src/data/breakingPoint.js. The short version: a parent
   looking for permission to walk out of the house will not open a
   screen called Support, they will open the one about leaving a child
   alone, so this is what they find there.

   Not one line of it scolds. Somebody reading this is already certain
   they are a bad person, and anything that agrees with them makes the
   worst outcome likelier. */
function breakingPointBlock(c) {
  const phone = (l) => {
    const digits = String(l.contact || '').replace(/[^\d]/g, '');
    const dial = (digits.length >= 10 || digits.length === 3) ? 'tel:' + digits : '';
    return `
    <div class="bpline">
      <p class="bpline-n">${esc(l.name)}</p>
      ${dial
        ? `<a class="bpline-c" href="${esc(dial)}">${esc(l.contact)}</a>`
        : `<span class="bpline-c">${esc(l.contact)}</span>`}
      <p class="tiny" style="margin:2px 0 0">${esc(l.detail)}</p>
      <a class="tiny" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer"
        style="text-decoration:underline">Their website</a>
    </div>`;
  };

  return `
  <div class="card bp">
    <p class="eyebrow">${icon('heart', 11, '#A85A44')} ${esc(BREAKING_HEADLINE)}</p>
    ${BREAKING_INTRO.map((p) => `<p class="bodytext" style="margin-top:9px">${esc(p)}</p>`).join('')}

    <div class="bpbox">
      <p class="bpbox-t">${esc(BREAKING_RIGHT_NOW.title)}</p>
      <ol class="bpsteps">
        ${BREAKING_RIGHT_NOW.steps.map((x) => `<li>${esc(x)}</li>`).join('')}
      </ol>
      <p class="bpwarn">${esc(BREAKING_RIGHT_NOW.note)}</p>
    </div>

    <div class="dsec">
      <h4>${esc(BREAKING_WHO_TO_CALL.title)}</h4>
      <p class="tiny" style="margin:0 0 9px">${esc(BREAKING_WHO_TO_CALL.intro)}</p>
      ${BREAKING_WHO_TO_CALL.people.map((p) => `
        <div class="bpwho">
          <span class="bpwho-w">${esc(p.who)}</span>
          <span class="bpwho-s">${esc(p.say)}</span>
        </div>`).join('')}
    </div>

    <div class="dsec">
      <h4>Somebody who will pick up, any hour</h4>
      ${BREAKING_LINES.map(phone).join('')}
    </div>

    <div class="dsec">
      <h4>${esc(BREAKING_NEVER.title)}</h4>
      ${BREAKING_NEVER.items.map((n) => `
        <div class="bpwho">
          <span class="bpwho-w">${esc(n.what)}</span>
          <span class="bpwho-s">${esc(n.why)}</span>
        </div>`).join('')}
    </div>

    ${showsSafeSurrender(c.months) ? `
    <div class="bpbox surrender">
      <p class="bpbox-t">${esc(SAFE_SURRENDER.title)}</p>
      ${SAFE_SURRENDER.intro.map((p) => `<p class="bodytext" style="margin-top:8px">${esc(p)}</p>`).join('')}
      <ul class="dlist" style="margin-top:10px">
        ${SAFE_SURRENDER.facts.map((f) => `<li>${esc(f)}</li>`).join('')}
      </ul>
      <p class="bodytext" style="margin-top:10px">${esc(SAFE_SURRENDER.varies)}</p>
      <p class="bpclose">${esc(SAFE_SURRENDER.closing)}</p>
    </div>` : `
    <div class="bpbox surrender">
      <p class="bpbox-t">If you cannot keep going, there is still a way that harms nobody</p>
      <p class="bodytext" style="margin-top:8px">${esc(SAFE_SURRENDER.ifOlder)}</p>
      <p class="bpclose">${esc(SAFE_SURRENDER.closing)}</p>
    </div>`}

    <div class="dsec">
      <h4>If the problem is not the child</h4>
      <p class="bodytext" style="margin:0 0 10px">Everything above assumes the hard part is being
        worn out by a person you love. If the hard part is another adult, or a caseworker, or
        somebody who has got hold of your child, that is written down too, and it has a button that
        gets you off the screen in one tap.</p>
      <button class="btn ghost" style="width:100%" data-go="screen" data-id="support">
        ${icon('shield', 14, 'var(--deep)')} ${esc(SUP_TITLE)}
      </button>
    </div>

    ${dsec('Where this comes from', sourceRows(BREAKING_SOURCES))}
  </div>`;
}

/* -----------------------------------------------------------------
   SIGNING

   Two audiences on one screen, kept visibly apart. A hearing family
   is here because baby sign is a nice thing that cuts down on
   screaming, and they can take the signs and go. A family with a deaf
   or hard of hearing child is here about language access, and that
   half opens first for them and stays out of the way for everybody
   else.

   The signs are written rather than drawn on purpose. Video belongs
   to the people who teach this properly and they are all linked at
   the bottom. What a written sign can do is get five of them into a
   kitchen tonight.
   ----------------------------------------------------------------- */

/* The row on the child profile changes its words when the lens is on,
   because "Signing together" is the wrong title for a family whose
   actual question is whether their child will have a language. */
function signLensOn() {
  return (state.lenses || []).indexOf('deafHoh') !== -1;
}

function signRowTitle() {
  return signLensOn() ? 'Sign language and Deaf culture' : 'Signing together';
}

function signRowSub(months) {
  if (signLensOn()) return 'Why it is not optional, the first signs, and where to learn properly';
  if (typeof months === 'number' && months < 36) {
    return 'Let them ask for milk months before they can say it';
  }
  return 'The first signs, what ASL actually is, and where to learn it';
}

/* WHERE THIS CHILD IS NOW, AND WHAT COMES NEXT.

   The word list on its own answered neither of the two questions a
   parent asks, which are when do I start and what happens after these
   twenty three. This puts their own age at the top, with the band
   either side reachable, so somebody can look forward without being
   told their four year old is behind. */
function signStageBlock(months) {
  const natural = signStageFor(months);
  const picked = store.signStage ? signStageById(store.signStage) : null;
  const st = picked || natural || SIGN_STAGES[0];
  const off = natural && st.id !== natural.id;

  return `
  <div class="dsec">
    <h4>${esc(SIGN_STAGE_TITLE)}</h4>
    <p class="tiny" style="margin:0 0 10px">${esc(SIGN_STAGE_INTRO)}</p>
    <div class="chips" style="margin-bottom:12px">
      ${SIGN_STAGES.map((x) => `
        <button class="chip" data-signstage="${esc(x.id)}" aria-pressed="${x.id === st.id}">${esc(x.label)}</button>`).join('')}
    </div>
    ${off && natural ? `
      <p class="tiny" style="margin:0 0 10px">Looking at ${esc(st.label.toLowerCase())}.
      <button class="tiny" data-signstage="${esc(natural.id)}"
        style="background:none;border:0;padding:0;color:var(--deep);text-decoration:underline">Back to their age</button></p>` : ''}

    <div class="card leafy">
      <p class="bodytext" style="margin:0 0 6px"><strong>${esc(st.label)}</strong></p>
      <p class="bodytext" style="margin:0">${esc(st.expect)}</p>
      <p class="tiny" style="margin:8px 0 0">${esc(st.howMany)}</p>
    </div>

    ${st.focus.length ? `
      <p class="tiny" style="margin:0 0 8px">Signs to be working on</p>
      <div class="chips" style="margin-bottom:12px">
        ${st.focus.map((w) => `<span class="chip">${esc(w)}</span>`).join('')}
      </div>` : ''}
    ${(st.alsoLearn || []).length ? `
      <p class="tiny" style="margin:0 0 8px">${esc(st.focus.length ? 'And the parts that are not one sign' : 'What this band is about')}</p>
      <div class="chips" style="margin-bottom:12px">
        ${st.alsoLearn.map((w) => `<span class="chip plain">${esc(w)}</span>`).join('')}
      </div>` : ''}

    ${list(st.doThis)}

    ${st.focus.map((w) => signByWord(w)).filter(Boolean).map((sg) => `
      <div class="quote" style="margin-top:9px">
        <p class="sit">${icon('hand', 12, 'var(--sage)')} ${esc(sg.word)}</p>
        <p class="why" style="margin-top:4px">${esc(sg.how)}</p>
        <p class="tiny" style="margin-top:5px"><strong style="color:var(--deep)">Remember it:</strong> ${esc(sg.hook)}</p>
      </div>`).join('')}

    ${st.next ? `<p class="tiny" style="margin-top:10px">Next: ${esc(st.next)}</p>` : ''}
    <p class="tiny" style="margin-top:8px">${esc(SIGN_STAGE_NOT_LATE)}</p>
  </div>`;
}

function screenSigns(c) {
  const months = c.months;
  const lensOn = signLensOn();
  /* The serious half leads for a family who has told us it applies,
     and sits below the signs for everybody else, where it reads as
     information rather than as a warning aimed at them. */
  const deafFirst = lensOn;

  const accessBlock = `
    <div class="dsec">
      <h4>${esc(WHY_IT_MATTERS.title)}</h4>
      <p class="bodytext" style="margin:0 0 9px;font-weight:600;color:var(--deep)">${esc(WHY_IT_MATTERS.headline)}</p>
      ${WHY_IT_MATTERS.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      <div class="callout" style="margin-top:4px">
        <p style="margin:0">${esc(WHY_IT_MATTERS.theHardTruth)}</p>
      </div>
    </div>`;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">Signing</h1>
    <p class="sub">${esc(countSigns())} signs to start with, and where to learn the rest.</p>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(SIGN_INTRO)}</p>
    </div>

    ${deafFirst ? accessBlock : ''}

    ${signStageBlock(months)}

    ${SIGN_GROUPS.map((g) => `
      <div class="dsec">
        <h4>${esc(g.label)}</h4>
        <p class="tiny" style="margin:0 0 10px">${esc(g.blurb)}</p>
        ${g.note ? `<div class="callout" style="margin-bottom:10px"><p style="margin:0">${esc(g.note)}</p></div>` : ''}
        ${g.signs.map((sg) => `
          <div class="quote">
            <p class="sit">${icon('hand', 12, 'var(--sage)')} ${esc(sg.word)}</p>
            <p class="why" style="margin-top:4px">${esc(sg.how)}</p>
            <p class="tiny" style="margin-top:5px"><strong style="color:var(--deep)">Remember it:</strong> ${esc(sg.hook)}</p>
            ${sg.why ? `<p class="tiny" style="margin-top:3px">${esc(sg.why)}</p>` : ''}
          </div>`).join('')}
      </div>`).join('')}

    <div class="dsec">
      <h4>${esc(HOW_TO_PRACTICE.title)}</h4>
      <p class="bodytext" style="margin:0 0 9px">${esc(HOW_TO_PRACTICE.headline)}</p>
      ${list(HOW_TO_PRACTICE.tips)}
      <div class="callout" style="margin-top:10px">
        <p style="margin:0">${esc(HOW_TO_PRACTICE.ifYourChildIsDeaf)}</p>
      </div>
    </div>

    ${deafFirst ? '' : accessBlock}

    <div class="dsec">
      <h4>${esc(ABOUT_ASL.title)}</h4>
      <p class="bodytext" style="margin:0 0 9px">${esc(ABOUT_ASL.headline)}</p>
      ${list(ABOUT_ASL.points)}
    </div>

    <div class="dsec">
      <h4>${esc(DEAF_CULTURE.title)}</h4>
      <p class="bodytext" style="margin:0 0 9px">${esc(DEAF_CULTURE.headline)}</p>
      ${list(DEAF_CULTURE.points)}
    </div>

    <div class="dsec">
      <h4>What people get told that is not true</h4>
      ${SIGN_MYTHS.map((m) => `
        <div class="quote">
          <p class="sit">${icon('info', 12, 'var(--taupe)')} ${esc(m.myth)}</p>
          <p class="why" style="margin-top:4px">${esc(m.truth)}</p>
        </div>`).join('')}
    </div>

    <div class="dsec">
      <h4>${esc(WHERE_TO_LEARN.title)}</h4>
      <p class="bodytext" style="margin:0 0 6px">${esc(WHERE_TO_LEARN.headline)}</p>
      <p class="tiny" style="margin:0 0 10px">${esc(WHERE_TO_LEARN.note)}</p>
      ${WHERE_TO_LEARN.places.map((pl) => `
        <div class="quote">
          <p class="sit"><a href="${esc(pl.url)}" target="_blank" rel="noopener">${esc(pl.name)}</a></p>
          <p class="why" style="margin-top:4px">${esc(pl.what)}</p>
        </div>`).join('')}
    </div>

    ${!lensOn ? `
    <div class="card flat" style="margin-top:10px">
      <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} If this is about your child</p>
      <p class="tiny" style="margin-top:4px">There is a support lens for deaf and hard of hearing
      children that changes what this app puts in front of you, at every age. It is under
      Understanding ${esc((c.child && c.child.name) || 'them')}.</p>
      <button class="btn ghost sm" style="width:100%;margin-top:9px"
        data-go="screen" data-id="understand">Open it</button>
    </div>` : ''}

    <div class="dsec">
      <h4>Where this comes from</h4>
      ${SIGN_SOURCES.map((sc) => `
        <p class="tiny" style="margin:0 0 6px">
          <strong style="color:var(--deep)">${esc(sc.org)}</strong>
          <a href="${esc(sc.url)}" target="_blank" rel="noopener">${esc(sc.label)}</a>
        </p>`).join('')}
    </div>
  </div>`;
}

/* -----------------------------------------------------------------
   OUTINGS

   Its own tab, because going places with a child is a whole category
   this app had nothing to say about, and because it was the thing she
   had not thought of and immediately recognised as missing.

   The order of the tabs is deliberate. What not to carry comes before
   what to carry, because renting at the other end changes the shape of
   every other decision. And sleeping away from home leads for a parent
   of a baby, because that is the one where improvising is dangerous
   rather than just annoying.
   ----------------------------------------------------------------- */

/* THE PACKING LIST IS A LIST PER CHILD, NOT A LIST PER APP.

   It used to read the active child and show one age band, so a mother
   of four opened Outings and got the twelve year old's list because he
   happened to be the child selected. Of course she did. Outings hangs
   off her, not off one of them.

   So: one ticked list for everyone, then one ticked list per child, in
   age order, each at that child's own band. Ticks are saved and they
   survive leaving the screen, because a packing list you cannot tick
   is just an article about packing. */

function outTicked(id) {
  return (store.outChecked || []).indexOf(id) !== -1;
}

/* Which trip she is packing for. Kept in the store rather than in
   state, because it belongs to her rather than to a child, and because
   coming back to a half packed cruise list and finding it reset to the
   day bag would be maddening. */
function outTrip() {
  const id = store.outTrip || 'day';
  return outTripById(id);
}

/* The tick key carries the trip, so packing for a cruise does not
   quietly tick off the day bag. */
function outKey(trip, listId, i) {
  return trip + '|' + outItemId(listId, i);
}

function outRow(trip, listId, i, label) {
  const id = outKey(trip, listId, i);
  const on = outTicked(id);
  return `
  <button class="lrow" data-out="${esc(id)}" style="align-items:flex-start;padding:10px 6px">
    <span style="width:22px;height:22px;border-radius:6px;margin-top:1px;flex:0 0 auto;
      display:flex;align-items:center;justify-content:center;
      background:${on ? 'var(--sage)' : 'transparent'};
      border:${on ? 'none' : '1.5px solid var(--line)'}">
      ${on ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>' : ''}
    </span>
    <span class="grow" style="margin-left:11px">
      <span style="display:block;font-size:14px;line-height:1.4;
        color:${on ? 'var(--faint)' : 'var(--ink)'};
        text-decoration:${on ? 'line-through' : 'none'}">${esc(label)}</span>
    </span>
  </button>`;
}

/* One block, which may be several groups of items under one heading
   with one running count. The groups are what lets a child's own list
   say "and these because of their lenses" without becoming a second
   list with a second count. */
function outBlock(trip, listId, heading, sub, groups) {
  const all = groups.reduce((n, g) => n + g.items.length, 0);
  if (!all) return '';
  let at = 0;
  const body = groups.map((g) => {
    const head = g.label ? `
      <p class="tiny" style="margin:10px 8px 2px;color:var(--taupe);font-weight:600">${esc(g.label)}</p>` : '';
    const rows = g.items.map((x) => outRow(trip, listId, at++, x)).join('');
    return head + rows;
  }).join('');

  let done = 0;
  for (let i = 0; i < all; i++) if (outTicked(outKey(trip, listId, i))) done++;

  return `
  <div class="dsec">
    <h4>${esc(heading)}</h4>
    <div style="display:flex;align-items:baseline;gap:9px;margin:0 0 8px;flex-wrap:wrap">
      <p class="tiny" style="margin:0;flex:1 1 auto">${esc(sub)}</p>
      <span class="tiny" style="color:${done === all ? 'var(--sage)' : 'var(--muted)'};font-weight:600">
        ${esc(String(done))} of ${esc(String(all))}
      </span>
      ${done ? `<button class="chip" data-outclear="${esc(trip + '|' + listId)}"
        style="padding:3px 10px;font-size:11px">Clear</button>` : ''}
    </div>
    <div class="card" style="padding:4px 10px">${body}</div>
  </div>`;
}

function outPacking() {
  const trip = outTrip();
  const kids = (store.children || [])
    .filter((k) => !isExampleChild(k))
    .map((k) => {
      const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
      return {
        id: k.id,
        name: (k.name || 'Your child'),
        months: sum && sum.age ? sum.age.totalMonths : null,
        label: sum && sum.label ? sum.label : '',
        lenses: Array.isArray(k.lenses) ? k.lenses : [],
      };
    })
    .sort((a, b) => (a.months == null ? 9999 : a.months) - (b.months == null ? 9999 : b.months));

  const anyLens = kids.some((k) => outLensPack(k.lenses).length);

  return `
    <div class="chips" style="margin-bottom:10px">
      ${OUT_TRIPS.map((t) => `
        <button class="chip${t.id === trip.id ? ' on' : ''}" data-outtrip="${esc(t.id)}"
          ${t.id === trip.id ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}
          >${esc(t.label)}</button>`).join('')}
    </div>

    <div class="card leafy" style="margin-bottom:12px">
      <p style="font-family:var(--serif);font-size:17px;color:var(--ink);margin:0">${esc(trip.label)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(trip.blurb)}</p>
      <p class="tiny" style="margin-top:8px">Tick as you pack. It remembers, and each trip keeps its
      own list.</p>
    </div>

    ${outBlock(trip.id, 'everyone', OUT_SHARED.label, 'Packed once, whoever is coming.', [
      { label: '', items: OUT_SHARED.items },
      { label: trip.everyone.length ? (trip.everyoneLabel || 'For this trip') : '',
        items: trip.everyone },
    ])}

    ${kids.length ? kids.map((k) => {
      const b = outBagForAge(k.months);
      const lens = outLensPack(k.lenses);
      return outBlock(trip.id, k.id, 'For ' + k.name,
        b.label + (k.label ? ', ' + k.label : ''), [
          { label: '', items: b.items },
          { label: trip.perChild.length ? 'For this trip' : '', items: trip.perChild },
          { label: lens.length ? outLensLabels(k.lenses).join('. ') : '', items: lens },
        ]);
    }).join('') : `
      ${outBlock(trip.id, 'nokid', 'For your child',
        'A general one, until there is somebody to make it for.', [
          { label: '', items: OUT_BAGS[1].items },
          { label: trip.perChild.length ? 'For this trip' : '', items: trip.perChild },
        ])}
      <p class="tiny" style="text-align:center;margin-top:-4px">Add a child and this becomes a list
      for each of them, at their own age and their own needs.</p>`}

    ${trip.note ? `
    <div class="callout" style="margin-top:2px"><p style="margin:0">${esc(trip.note)}</p></div>` : ''}

    ${anyLens ? `
    <p class="tiny" style="margin-top:12px">${esc(OUT_LENS_NOTE)}</p>` : `
    <p class="tiny" style="margin-top:12px">${esc(OUT_LENS_NONE)}</p>`}

    <div class="dsec">
      <h4>The other ages, if you want to look ahead</h4>
      ${OUT_BAGS.map((b) => `
        <div class="quote">
          <p class="sit">${esc(b.label)}</p>
          <p class="why" style="margin-top:4px">${esc(b.items.slice(0, 3).join('. '))}.</p>
        </div>`).join('')}
    </div>`;
}

function screenOutings(c) {
  const months = c.months;

  const tabs = [
    { id: 'bag', label: 'What to bring' },
    { id: 'rent', label: 'Rent, do not haul' },
    { id: 'sleep', label: 'Sleeping away' },
    { id: 'fly', label: 'Flying' },
    { id: 'road', label: 'Road trips' },
    { id: 'cruise', label: 'Cruises' },
    { id: 'stay', label: 'Hotels and rentals' },
    { id: 'days', label: 'Days out' },
  ];
  let tab = state.outTab || outFirstTab(months);
  if (!tabs.some((t) => t.id === tab)) tab = 'bag';

  const sourceBlock = `
    <div class="dsec">
      <h4>Where this comes from</h4>
      <p class="tiny" style="margin:0 0 9px">${esc(OUT_NOT_SPONSORED)}</p>
      ${OUT_SOURCES.map((sc) => `
        <p class="tiny" style="margin:0 0 6px">
          <strong style="color:var(--deep)">${esc(sc.org)}</strong>
          <a href="${esc(sc.url)}" target="_blank" rel="noopener">${esc(sc.label)}</a>
        </p>`).join('')}
    </div>`;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <p class="eyebrow">${esc(OUT_TITLE)}</p>
    <h1 class="title">Going places with them.</h1>
    <p class="sub">${esc(OUT_SUB)}</p>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(OUT_INTRO)}</p>
    </div>

    <div class="chips" style="margin:12px 0">
      ${tabs.map((t) => `
        <button class="chip" data-sub="outTab" data-val="${esc(t.id)}"
                aria-pressed="${t.id === tab}">${esc(t.label)}</button>`).join('')}
    </div>

    ${tab === 'bag' ? outPacking() : ''}

    ${tab === 'rent' ? `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(OUT_RENT.headline)}</p>
      </div>
      <div class="dsec">
        <h4>${esc(OUT_RENT.title)}</h4>
        ${OUT_RENT.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <p class="sect">Worth renting rather than carrying</p>
        ${list(OUT_RENT.worthRenting)}
        <p class="sect">Bring these anyway</p>
        ${list(OUT_RENT.bringAnyway)}
      </div>
      ${sourceBlock}` : ''}

    ${tab === 'sleep' ? `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(OUT_SLEEP.headline)}</p>
      </div>
      <div class="dsec">
        <h4>${esc(OUT_SLEEP.theRule.label)}</h4>
        ${OUT_SLEEP.theRule.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      </div>
      <div class="dsec">
        <h4>${esc(OUT_SLEEP.thePod.label)}</h4>
        ${OUT_SLEEP.thePod.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      </div>
      <div class="dsec">
        <h4>${esc(OUT_SLEEP.darkness.label)}</h4>
        ${OUT_SLEEP.darkness.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      </div>
      <div class="dsec">
        <h4>${esc(OUT_SLEEP.theRoom.label)}</h4>
        ${OUT_SLEEP.theRoom.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <div class="callout" style="margin-top:4px"><p style="margin:0">${esc(OUT_SLEEP.hotelCribs)}</p></div>
      </div>
      ${sourceBlock}` : ''}

    ${tab === 'fly' ? `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(OUT_FLY.headline)}</p>
      </div>
      <div class="dsec">
        <h4>${esc(OUT_FLY.milkAndFormula.label)}</h4>
        ${list(OUT_FLY.milkAndFormula.items)}
      </div>
      <div class="dsec">
        <h4>${esc(OUT_FLY.carSeat.label)}</h4>
        ${list(OUT_FLY.carSeat.items)}
      </div>
      <div class="dsec">
        <h4>${esc(OUT_FLY.practical.label)}</h4>
        ${list(OUT_FLY.practical.items)}
      </div>
      ${sourceBlock}` : ''}

    ${tab === 'road' ? `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(OUT_ROAD.headline)}</p>
      </div>
      <div class="dsec">
        <h4>The car seat part, which does not relax</h4>
        ${list(OUT_ROAD.safety)}
      </div>
      <div class="dsec">
        <h4>Making the drive work</h4>
        ${list(OUT_ROAD.practical)}
      </div>
      <button class="btn ghost sm" style="width:100%;margin-top:4px" data-go="screen" data-id="safety">
        CPR, choking and what to do if something happens
      </button>` : ''}

    ${tab === 'cruise' ? `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(OUT_CRUISE.headline)}</p>
      </div>
      <div class="dsec">
        <h4>The rules that are enforced at the terminal</h4>
        ${list(OUT_CRUISE.rules)}
      </div>
      <div class="dsec">
        <h4>What the ship already has</h4>
        ${list(OUT_CRUISE.provided)}
      </div>
      <div class="dsec">
        <h4>Worth knowing</h4>
        ${list(OUT_CRUISE.worthKnowing)}
      </div>
      ${sourceBlock}` : ''}

    ${tab === 'stay' ? `
      <div class="dsec">
        <h4>${esc(OUT_STAY.ask.label)}</h4>
        ${list(OUT_STAY.ask.items)}
      </div>
      <div class="dsec">
        <h4>${esc(OUT_STAY.babyproof.label)}</h4>
        ${list(OUT_STAY.babyproof.items)}
      </div>` : ''}

    ${tab === 'days' ? `
      <div class="dsec">
        <h4>${esc(OUT_DAYS.title)}</h4>
        ${list(OUT_DAYS.items)}
      </div>` : ''}
  </div>`;
}

/* -----------------------------------------------------------------
   PRIVACY

   One page, so that no other screen has to keep announcing how careful
   it is being. See the header of src/data/privacy.js for what this
   replaced and why.
   ----------------------------------------------------------------- */

/* The rules, and what this app is. Both used to be blocks sitting on
   other screens announcing themselves. They are real pages now, in the
   menu behind her own face, which is where somebody actually goes
   looking for them. */

function screenRules(c) {
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">Community rules</h1>
    <p class="sub">Short, because a long list of rules is a list nobody reads.</p>
  </div>
  <div class="sc">
    <div class="dsec">
      <h4>How the rooms work</h4>
      ${list(COMMUNITY_RULES)}
    </div>

    <div class="dsec">
      <h4>What gets a post held</h4>
      <p class="bodytext" style="margin:0 0 9px">Posts go up straight away. Three things are held
      back for a person to read first, and they are held rather than deleted.</p>
      ${list([
        'A medication dose. A wrong number passed between strangers is the one mistake here that can actually hurt a child.',
        'A phone number.',
        'An email address. Both of those because they move a conversation somewhere with none of the protections this room has.',
      ])}
      <p class="tiny" style="margin-top:8px">If yours is held you will see it on your own Yours tab,
      with what happened to it. Nothing disappears without being accounted for.</p>
    </div>

    <div class="dsec">
      <h4>Reporting and blocking</h4>
      ${list([
        'Anything can be reported, and a person reads every report.',
        'Anybody can be blocked, and blocking is kept on your own device rather than anywhere we can see.',
        'Reporting somebody is not a complaint about you and nobody is told you did it.',
      ])}
    </div>

    ${privacyLine()}
  </div>`;
}

function screenAbout(c) {
  const stamp = buildStamp();
  const notDoctor = PRIV_SECTIONS.filter((x) => x.id === 'notdoctor')[0];
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">About this app</h1>
    <p class="sub">What it is for, and what it is not.</p>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext" style="font-size:15px;line-height:1.55">Ready Set Grow follows your child
      rather than a calendar, and it is built for the parent as much as for the child. It was made by
      one mother who wanted it to exist.</p>
    </div>

    ${notDoctor ? `
    <div class="dsec">
      <h4>${esc(notDoctor.title)}</h4>
      ${notDoctor.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
    </div>` : ''}

    <div class="dsec">
      <h4>This copy of it</h4>
      <p class="bodytext" style="margin:0 0 9px">
        ${stamp ? 'Built ' + esc(stamp) + '.' : 'This copy does not carry a build stamp.'}
        ${update.available ? ' A newer one is ready.' : ' It is up to date.'}
      </p>
      ${update.available
        ? `<button class="btn" data-update="go">Load the new version</button>`
        : `<button class="chip" data-update="check">Check again</button>`}
    </div>

    <div class="dsec">
      <h4>Where the guidance comes from</h4>
      <p class="bodytext">Everything clinical in this app is written against published guidance from
      the American Academy of Pediatrics, the CDC and equivalent bodies, and the pages that lean on a
      specific document link to it at the bottom. Where the evidence is weaker than the packaging
      suggests, the app says so rather than repeating the claim.</p>
    </div>

    ${privacyLine()}
  </div>`;
}

function screenDiapers(c) {
  const months = c.months;
  const band = diaperBandFor(months);
  const name = (c.child && c.child.name) ? c.child.name : 'them';
  const hours = Number(store.daycareHours) || 0;
  const sums = diaperDayTotal(months, hours);

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">${esc(DIAPER_TITLE)}</h1>
    <p class="sub">${esc(DIAPER_SUB)}</p>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext">${esc(DIAPER_INTRO)}</p>
    </div>

    ${months != null ? `
    <div class="card" style="margin-top:11px;text-align:center;padding:20px 16px">
      <p class="eyebrow">${esc(name)}, right now</p>
      <p style="font-family:var(--serif);font-size:32px;color:var(--ink);margin:8px 0 0">
        ${esc(band.perDay)}
      </p>
      <p class="tiny" style="margin-top:2px">a day, so ${esc(band.perMonth)} a month</p>
      <p class="bodytext" style="margin-top:10px">${esc(band.note)}</p>
    </div>` : ''}

    <div class="dsec">
      <h4>${esc(DIAPER_DAYCARE.title)}</h4>
      <p class="bodytext" style="margin:0 0 10px;font-weight:600;color:var(--deep)">
        ${esc(DIAPER_DAYCARE.headline)}</p>
      <div class="card" style="margin-bottom:11px">
        <p class="eyebrow">Hours they are there</p>
        <div class="chips" style="margin-top:9px">
          ${[0, 4, 6, 8, 9, 10, 12].map((h) => `
            <button class="chip${hours === h ? ' on' : ''}" data-daycare="${h}"
              ${hours === h ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}
              >${h ? h + ' hours' : 'Not in daycare'}</button>`).join('')}
        </div>
        ${hours ? `
        <div style="margin-top:14px;padding-top:13px;border-top:1px solid var(--line2)">
          <p style="font-family:var(--serif);font-size:24px;color:var(--ink);margin:0">
            Send ${esc(String(sums.away))} a day
          </p>
          <p class="tiny" style="margin-top:4px">
            About ${esc(String(Math.max(1, sums.away - 2)))} used on the schedule and for poops, plus two spare.
          </p>
          <p class="bodytext" style="margin-top:8px">
            Another ${esc(sums.home)} at home, which is ${esc(sums.total)} across the whole day.
          </p>
        </div>` : ''}
      </div>
      ${DIAPER_DAYCARE.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      <p class="sect">Send these too</p>
      ${list(DIAPER_DAYCARE.alsoSend)}
    </div>

    <div class="dsec">
      <h4>${esc(DIAPER_RULE.title)}</h4>
      ${DIAPER_RULE.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
    </div>

    <div class="dsec">
      <h4>Every age, so you can see it coming</h4>
      ${DIAPER_BANDS.map((b) => `
        <div class="quote"${b.id === band.id ? ' style="border-left-color:var(--sage)"' : ''}>
          <p class="sit">${esc(b.label)}${b.id === band.id ? ', which is where you are' : ''}</p>
          <p class="why" style="margin-top:4px"><strong style="color:var(--deep)">${esc(b.perDay)} a day</strong>, ${esc(b.perMonth)} a month. ${esc(b.note)}</p>
        </div>`).join('')}
    </div>

    <div class="dsec">
      <h4>${esc(DIAPER_PACKING.title)}</h4>
      <p class="bodytext" style="margin:0 0 9px;font-weight:600;color:var(--deep)">
        ${esc(DIAPER_PACKING.headline)}</p>
      ${DIAPER_PACKING.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      ${DIAPER_PACKING.trips.map((x) => `
        <div class="quote">
          <p class="sit">${esc(x.what)}</p>
          <p class="why" style="margin-top:4px">${esc(x.how)}</p>
        </div>`).join('')}
      <div class="callout" style="margin-top:10px">
        <p style="margin:0">${esc(DIAPER_PACKING.alsoNote)}</p>
      </div>
    </div>

    <div class="dsec">
      <h4>${esc(DIAPER_BUYING.title)}</h4>
      ${list(DIAPER_BUYING.items)}
      <p class="sect">${esc(DIAPER_BUYING.sizeUp.title)}</p>
      ${list(DIAPER_BUYING.sizeUp.items)}
    </div>

    <div class="dsec">
      <h4>${esc(DIAPER_NIGHT.title)}</h4>
      ${list(DIAPER_NIGHT.items)}
    </div>

    <div class="dsec">
      <h4>${esc(DIAPER_COST.title)}</h4>
      ${DIAPER_COST.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
    </div>

    <div class="card flat" style="margin-top:6px">
      <p class="eyebrow">${icon('info', 11, 'var(--sage)')} One of these is medical</p>
      <p class="tiny" style="margin-top:4px">${esc(DIAPER_HEALTH_NOTE)}</p>
      <button class="btn ghost sm" style="width:100%;margin-top:10px"
        data-go="screen" data-id="feeding" data-asksub="feedTab" data-asksubval="newborn">
        Open the newborn rhythm
      </button>
    </div>

    <div class="dsec">
      <h4>Where these numbers come from</h4>
      <p class="bodytext" style="margin:0 0 10px">${esc(DIAPER_SOURCE_NOTE)}</p>
      ${DIAPER_SOURCES.map((sc) => `
        <p class="tiny" style="margin:0 0 6px">
          <strong style="color:var(--deep)">${esc(sc.org)}</strong>
          <a href="${esc(sc.url)}" target="_blank" rel="noopener">${esc(sc.label)}</a>
        </p>`).join('')}
    </div>
  </div>`;
}

function screenSharing(c) {
  const signedIn = !!auth.user;
  if (signedIn && !share.loaded && !share.busy) setTimeout(() => shareLoad(), 0);

  const mine = store.children.filter((k) => !isExampleChild(k) && !k.sharedFrom);
  const made = share.made;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">${esc(SHARE_TITLE)}</h1>
    <p class="sub">${esc(SHARE_SUB)}</p>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext">${esc(SHARE_INTRO)}</p>
    </div>

    ${!signedIn ? `
    <div class="card flat" style="margin-top:11px">
      <p class="bodytext">${esc(SHARE_ERRORS.noAccount)}</p>
      <button class="btn" style="width:100%;margin-top:11px" data-auth="account">Create an account</button>
    </div>` : ''}

    ${signedIn ? `
    ${share.error ? `
    <div class="card" style="border-left:3px solid var(--attention);margin-top:11px">
      <p class="bodytext">${esc(share.error)}</p>
    </div>` : ''}

    ${share.joined ? `
    <div class="card leafy" style="margin-top:11px">
      <p class="bodytext">${esc(share.joined)}</p>
      <button class="chip" style="margin-top:9px" data-share="joinedok">Close</button>
    </div>` : ''}

    ${made ? `
    <div class="dsec">
      <h4>Their code</h4>
      <p class="tiny" style="margin:0 0 10px">For ${esc(made.names.join(', '))}.</p>
      <div class="card" style="padding:18px 16px">
        <p class="bodytext" style="margin:0 0 10px">${esc(SHARE_LINK_NOTE)}</p>
        <button class="btn" style="width:100%" data-share="link" data-code="${esc(made.code)}">
          ${esc(store.shareLinkCopied ? SHARE_LINK_COPIED : SHARE_LINK_BTN)}
        </button>
        <p class="tiny" style="margin:14px 0 8px;text-align:center">Or read them the code.</p>
        <p style="font-family:var(--serif);font-size:30px;letter-spacing:3px;color:var(--ink);margin:0;text-align:center">
          ${esc(prettyCode(made.code))}
        </p>
        <p class="tiny" style="margin-top:8px;text-align:center">${esc(codeLeft(made.at + CODE_HOURS * 3600000, Date.now()))}</p>
        <button class="chip" style="margin-top:12px;width:100%" data-share="copy" data-code="${esc(made.code)}">
          ${esc(store.shareCopied ? 'Copied' : 'Copy just the code')}
        </button>
        <button class="chip" style="margin-top:9px" data-share="dropcode" data-code="${esc(made.code)}">
          Cancel this code
        </button>
      </div>
      <p class="tiny" style="margin-top:9px">${esc(SHARE_CODE_NOTE)}</p>
    </div>` : `
    <div class="dsec">
      <h4>Give somebody access</h4>
      <p class="tiny" style="margin:0 0 10px">Pick which children. Only the ones you tick.</p>
      ${mine.length ? `
        <div class="card" style="margin-bottom:10px">
          ${mine.map((k) => tickRow(share.pickIds.indexOf(k.id) !== -1, k.name || 'Your child',
            childAgeLabel(k), `data-share="pick" data-id="${esc(k.id)}"`)).join('')}
        </div>
        <button class="btn" style="width:100%"
          data-share="make" ${share.pickIds.length && !share.busy ? '' : 'disabled'}>
          ${esc(share.pickIds.length ? 'Make a code' : 'Pick a child first')}
        </button>
      ` : `
        <div class="card flat"><p class="bodytext">Add a child first, and then you can share them.</p></div>
      `}
    </div>`}

    <div class="dsec">
      <h4>${esc(SHARE_JOIN_TITLE)}</h4>
      <p class="tiny" style="margin:0 0 10px">${esc(SHARE_JOIN_HELP)}</p>
      <div class="card">
        <input class="inp" type="text" id="shareIn" data-sharefield="1" autocomplete="off"
          autocapitalize="characters" spellcheck="false"
          placeholder="ABCDE 12345" style="width:100%;text-align:center;letter-spacing:2px;font-size:18px" />
        <button class="btn" style="width:100%;margin-top:11px"
          data-share="join" ${share.busy ? 'disabled' : ''}>Use this code</button>
      </div>
    </div>

    <div class="dsec">
      <h4>Who can see your children</h4>
      ${share.shares.length ? share.shares.map((row) => {
        const names = (row.childIds || []).map((id) => {
          const k = store.children.filter((x) => x.id === id)[0];
          return (k && k.name) || 'A child';
        });
        return `
        <div class="quote">
          <p class="sit">${icon('user', 12, 'var(--taupe)')} Somebody with the code ${esc(String(row.code || '').slice(0, 5))}</p>
          <p class="why" style="margin-top:4px">Can see ${esc(names.join(', ') || 'nothing')}.</p>
          <button class="chip" style="margin-top:8px" data-share="revoke" data-id="${esc(row.viewerUid)}"
            ${share.busy ? 'disabled' : ''}>Take it back</button>
        </div>`;
      }).join('') : `
        <div class="card flat"><p class="bodytext">${esc(SHARE_EMPTY_OWNER)}</p></div>`}
      ${share.shares.length ? `<p class="tiny" style="margin-top:9px">${esc(SHARE_REVOKE_NOTE)}</p>` : ''}
    </div>

    <div class="dsec">
      <h4>Children shared with you</h4>
      ${share.links.length ? share.links.map((row) => {
        const names = (row.childIds || []).map((id) => {
          const k = store.children.filter((x) => x.id === id)[0];
          return (k && k.name) || 'A child';
        });
        return `
        <div class="quote">
          <p class="sit">${icon('people', 12, 'var(--sage)')} ${esc(names.join(', ') || 'A child')}</p>
          <p class="why" style="margin-top:4px">Shared with you by somebody else.</p>
          <button class="chip" style="margin-top:8px" data-share="leave" data-id="${esc(row.ownerUid)}"
            ${share.busy ? 'disabled' : ''}>Leave</button>
        </div>`;
      }).join('') : `
        <div class="card flat"><p class="bodytext">${esc(SHARE_EMPTY_JOINED)}</p></div>`}
      ${share.links.length ? `<p class="tiny" style="margin-top:9px">${esc(SHARE_LEAVE_NOTE)}</p>` : ''}
    </div>

    <div class="dsec">
      <h4>How it works</h4>
      ${SHARE_STEPS.map((x, i) => `
        <div class="quote">
          <p class="sit">${esc(String(i + 1))}</p>
          <p class="why" style="margin-top:4px">${esc(x)}</p>
        </div>`).join('')}
    </div>

    <div class="dsec">
      <h4>${esc(SHARE_WHAT_THEY_GET.title)}</h4>
      <p class="sect" style="margin-top:0">They can</p>
      ${list(SHARE_WHAT_THEY_GET.can)}
      <p class="sect">They cannot</p>
      ${list(SHARE_WHAT_THEY_GET.cannot)}
    </div>

    ${privacyLine()}
    ` : ''}

    <div class="dsec">
      <h4>If you are sharing with somebody you are not sure about</h4>
      <p class="bodytext" style="margin:0 0 10px">Sharing is a live view of what gets logged about a
        child, including when it was logged. In most families that is the whole point. In some it is
        not, and it is worth knowing exactly what the other person can see and what taking it back
        looks like from their end.</p>
      <button class="btn ghost" style="width:100%" data-go="screen" data-id="support">
        ${icon('shield', 14, 'var(--deep)')} What this app can give away
      </button>
    </div>

  </div>`;
}

function screenPrivacy(c) {
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">${esc(PRIV_TITLE)}</h1>
    <p class="sub">${esc(PRIV_SUB)}</p>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext">${esc(PRIV_INTRO)}</p>
    </div>

    <div class="dsec">
      <h4>${esc(PRIV_SHORT.title)}</h4>
      ${list(PRIV_SHORT.items)}
    </div>

    ${PRIV_SECTIONS.map((sec) => `
      <div class="dsec">
        <h4>${esc(sec.title)}</h4>
        ${sec.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      </div>`).join('')}

    <div class="dsec">
      <h4>${esc(PRIV_CONTACT.title)}</h4>
      <p class="bodytext">${esc(PRIV_CONTACT.body)}</p>
    </div>

    <p class="tiny" style="margin-top:6px">${esc(PRIV_FOOTER)}</p>
  </div>`;
}

/* The one line any other screen may use, small and at the bottom. */
function privacyLine() {
  return `
  <button class="tiny" data-go="screen" data-id="privacy"
    style="display:block;width:100%;text-align:center;margin-top:14px;padding:8px;
           background:none;border:0;color:var(--muted);text-decoration:underline">
    ${esc(PRIV_LINK_LINE)}
  </button>`;
}

/* ==================================================================
   THE HARD PART

   Child protective services, somebody at home who frightens you, and
   somebody who is targeting your child.

   Everything about why this screen exists and why the wording is what
   it is lives in src/data/support.js. What lives here is the two
   pieces of behaviour that the content cannot do on its own.

   THE FIRST is the way out. It is fixed to the corner so it is in the
   same place no matter how far down somebody has scrolled, it takes
   one tap with no confirmation, and it puts the app back on Home on
   the way past so that reopening it later does not land on this page
   in front of the wrong person. Escape does the same thing on a
   keyboard.

   THE SECOND is that this screen never becomes the thing the app
   reopens on. Nothing about visiting it is written anywhere that
   syncs, and the tab it was left on is reset the moment somebody
   leaves through the corner.
   ================================================================== */

/* Somebody may be on a phone that another person picks up, so this has
   to be quick and it has to be quiet. No confirmation, no animation,
   no history entry left pointing back at it. */
function quickExit() {
  /* Home first, and flushed, so that reopening Ready Set Grow later
     shows the ordinary app rather than this page. */
  try {
    state.view = null;
    state.tab = 'home';
    store.supportTab = 'safe';
    store.menuOpen = false;
    flushStore();
  } catch (e) { /* storage can be blocked, and that must not stop the exit */ }
  /* Strips anything in the address bar, then leaves by replacing the
     current entry rather than adding one, so Back does not come here. */
  try { history.replaceState(null, '', '/'); } catch (e) { /* ignore */ }
  const away = 'https://weather.com/';
  try { location.replace(away); } catch (e) { location.href = away; }
}

function onSupportScreen() {
  const v = state.view;
  return !!(v && v.type === 'screen' && v.id === 'support');
}

/* The corner button. Red on purpose, because every other control in
   this app is green and somebody scanning for the way out should find
   it without reading. */
function exitButton() {
  return `
  <button class="quickexit" data-exit="1" aria-label="${esc(EXIT_BTN)}, leaves this page immediately">
    ${esc(EXIT_BTN)}
  </button>`;
}

/* A phone line, shared by all three tabs. Tappable where the device
   can dial, plain text where it cannot. */
function supLine(l) {
  const digits = String(l.contact || '').replace(/[^\d]/g, '');
  const dial = (digits.length >= 10 || digits.length === 3) ? 'tel:' + digits : '';
  return `
  <div class="bpline">
    <p class="bpline-n">${esc(l.name)}</p>
    ${dial
      ? `<a class="bpline-c" href="${esc(dial)}">${esc(l.contact)}</a>`
      : `<span class="bpline-c">${esc(l.contact)}</span>`}
    <p class="tiny" style="margin:2px 0 0">${esc(l.detail)}</p>
    <a class="tiny" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer"
      style="text-decoration:underline">Their website</a>
  </div>`;
}

/* A right and its catch, the shape the whole child protection tab is
   built out of. A rights list without the catches attached is how a
   parent stands in a doorway and makes things worse. */
function rightRow(r) {
  return `
  <div class="quote">
    <p class="sit">${icon('shield', 12, 'var(--sage)')} ${esc(r.right)}</p>
    <p class="why" style="margin-top:4px">${esc(r.catch)}</p>
  </div>`;
}

function supTabSafe() {
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} ${esc(EXIT_TITLE)}</p>
      ${EXIT_WHAT.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
    </div>

    <div class="dsec">
      <h4>${esc(EXIT_CANNOT.title)}</h4>
      ${list(EXIT_CANNOT.items, true)}
    </div>

    <div class="dsec">
      <h4>${esc(EXIT_SAFER.title)}</h4>
      ${list(EXIT_SAFER.items)}
    </div>

    <div class="dsec">
      <h4>${esc(SUP_APP_RISK.title)}</h4>
      ${SUP_APP_RISK.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      <p class="sect">How to check who has access</p>
      ${list(SUP_APP_RISK.check)}
      <div class="callout" style="margin-top:10px">
        <p style="margin:0">${esc(SUP_APP_RISK.warn)}</p>
      </div>
      <button class="btn ghost" style="width:100%;margin-top:11px" data-go="screen" data-id="sharing">
        ${icon('people', 14, 'var(--deep)')} See who can open your children
      </button>
      <p class="sect">What this app does not do</p>
      ${list(SUP_APP_RISK.doesNot)}
    </div>`;
}

function supTabDv() {
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('heart', 11, '#A85A44')} ${esc(DV_HEAD)}</p>
      ${DV_INTRO.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
    </div>

    <div class="dsec">
      <h4>Somebody who will pick up, any hour</h4>
      ${DV_LINES.map(supLine).join('')}
    </div>

    <div class="dsec">
      <h4>${esc(DV_LOOKS_LIKE.title)}</h4>
      <p class="tiny" style="margin:0 0 9px">${esc(DV_LOOKS_LIKE.intro)}</p>
      ${list(DV_LOOKS_LIKE.items)}
    </div>

    <div class="bpbox">
      <p class="bpbox-t">${esc(DV_STRANGLE.title)}</p>
      ${DV_STRANGLE.body.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
      <p class="bpwarn">${esc(DV_STRANGLE.medical)}</p>
    </div>

    <div class="dsec">
      <h4>${esc(DV_RISK.title)}</h4>
      <p class="tiny" style="margin:0 0 9px">${esc(DV_RISK.intro)}</p>
      ${list(DV_RISK.items)}
      <div class="callout" style="margin-top:10px">
        <p style="margin:0">${esc(DV_RISK.note)}</p>
      </div>
    </div>

    <div class="dsec">
      <h4>${esc(DV_CHILDREN.title)}</h4>
      ${DV_CHILDREN.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      <p class="sect">${esc(DV_CHILDREN.cpsFear.title)}</p>
      ${DV_CHILDREN.cpsFear.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      <button class="btn ghost" style="width:100%;margin-top:4px" data-sub="supportTab" data-val="cps">
        ${icon('info', 14, 'var(--deep)')} What happens if a caseworker does get involved
      </button>
    </div>

    <div class="dsec">
      <h4>${esc(DV_STAYING.title)}</h4>
      <p class="tiny" style="margin:0 0 9px">${esc(DV_STAYING.intro)}</p>
      ${list(DV_STAYING.items)}
    </div>

    <div class="dsec">
      <h4>${esc(DV_LEAVING.title)}</h4>
      <p class="bodytext" style="margin:0 0 9px">${esc(DV_LEAVING.head)}</p>
      ${list(DV_LEAVING.items)}
    </div>

    <div class="dsec">
      <h4>${esc(DV_BAG.title)}</h4>
      <p class="tiny" style="margin:0 0 9px">${esc(DV_BAG.intro)}</p>
      ${list(DV_BAG.items)}
    </div>

    <div class="dsec">
      <h4>${esc(DV_IF_ITS_YOU.title)}</h4>
      <p class="bodytext">${esc(DV_IF_ITS_YOU.body)}</p>
    </div>

    ${dsec('Where this comes from', sourceRows(DV_SOURCES))}`;
}

function supTabCps() {
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} ${esc(CPS_HEAD)}</p>
      ${CPS_INTRO.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
    </div>

    <div class="dsec">
      <h4>${esc(CPS_RIGHTS.title)}</h4>
      <p class="tiny" style="margin:0 0 9px">${esc(CPS_RIGHTS.intro)}</p>
      ${CPS_RIGHTS.items.map(rightRow).join('')}
      <div class="callout" style="margin-top:10px">
        <p style="margin:0">${esc(CPS_RIGHTS.varies)}</p>
      </div>
    </div>

    <div class="dsec">
      <h4>${esc(CPS_POVERTY.title)}</h4>
      ${CPS_POVERTY.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
    </div>

    <div class="dsec">
      <h4>${esc(CPS_HELPS.title)}</h4>
      ${list(CPS_HELPS.items)}
    </div>

    <div class="dsec">
      <h4>${esc(CPS_HURTS.title)}</h4>
      ${list(CPS_HURTS.items, true)}
    </div>

    <div class="bpbox">
      <p class="bpbox-t">${esc(CPS_REMOVED.title)}</p>
      <ol class="bpsteps">
        ${CPS_REMOVED.items.map((x) => `<li>${esc(x)}</li>`).join('')}
      </ol>
      <p class="bpclose">${esc(CPS_REMOVED.note)}</p>
    </div>

    <div class="dsec">
      <h4>Somebody to call</h4>
      ${CPS_LINES.map(supLine).join('')}
    </div>

    <div class="dsec">
      <h4>${esc(CPS_WORRIED.title)}</h4>
      <p class="bodytext">${esc(CPS_WORRIED.body)}</p>
    </div>

    ${dsec('Where this comes from', sourceRows(CPS_SOURCES))}`;
}

function supTabTraffick() {
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('info', 11, 'var(--sage)')} ${esc(TRAF_HEAD)}</p>
      ${TRAF_INTRO.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
    </div>

    <div class="bpbox">
      <p class="bpbox-t">${esc(TRAF_SEXTORTION.title)}</p>
      ${TRAF_SEXTORTION.body.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
      <p class="sect" style="color:var(--deep)">${esc(TRAF_SEXTORTION.rules.title)}</p>
      <ol class="bpsteps">
        ${TRAF_SEXTORTION.rules.items.map((x) => `<li>${esc(x)}</li>`).join('')}
      </ol>
    </div>

    <div class="dsec">
      <h4>${esc(TRAF_SIGNS.title)}</h4>
      <p class="tiny" style="margin:0 0 9px">${esc(TRAF_SIGNS.intro)}</p>
      ${list(TRAF_SIGNS.items)}
    </div>

    <div class="dsec">
      <h4>${esc(TRAF_IF_ALREADY.title)}</h4>
      ${list(TRAF_IF_ALREADY.items)}
    </div>

    <div class="dsec">
      <h4>If it was not a stranger</h4>
      <p class="bodytext" style="margin:0 0 10px">For a teenager this is far more often somebody they
        know, and often somebody they are seeing. What consent actually requires, and what to do in
        the first day if your child tells you something, is written out in full.</p>
      <button class="btn ghost" style="width:100%" data-go="screen" data-id="consent">
        ${icon('heart', 14, 'var(--deep)')} ${esc(CON_TITLE)}
      </button>
    </div>

    <div class="dsec">
      <h4>${esc(TRAF_PREVENT.title)}</h4>
      <p class="tiny" style="margin:0 0 9px">${esc(TRAF_PREVENT.intro)}</p>
      ${TRAF_PREVENT.items.map((x) => `
        <div class="quote">
          <p class="why" style="margin:0">${esc(x)}</p>
        </div>`).join('')}
      <div class="callout" style="margin-top:10px">
        <p style="margin:0">${esc(TRAF_PREVENT.note)}</p>
      </div>
    </div>

    <div class="dsec">
      <h4>Somebody to call</h4>
      ${TRAF_LINES.map(supLine).join('')}
    </div>

    ${dsec('Where this comes from', sourceRows(TRAF_SOURCES))}`;
}

/* The row that gets somebody here from the screens they are actually
   standing on. It was reachable from the menu and from I need help,
   and neither of those is where a parent looks, which is why she
   opened the app twice and found nothing. */
function supportRow() {
  return `
  <button class="lrow" data-go="screen" data-id="support" style="align-items:flex-start">
    <span class="licon" style="background:#F7E9E4">${icon('shield', 18)}</span>
    <span class="grow">
      <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">${esc(SUP_TITLE)}</span>
      <span class="tiny" style="display:block;margin-top:2px">A caseworker, somebody who frightens you, or somebody targeting your child. With a button that gets you off the screen in one tap.</span>
    </span>
    <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
  </button>`;
}

function screenSupport(c) {
  /* NOTHING ABOUT THIS SCREEN IS SAVED, AND THAT IS DELIBERATE.
     Neither supportSeen nor supportTab is in the list flushStore
     writes, so which tab somebody was reading never reaches
     localStorage and never reaches the cloud copy. It lasts as long as
     the app is open and no longer, which also means every fresh open
     starts on the tab about reading this safely. */
  const tab = state.supportTab || supportFirstTab(!!store.supportSeen);
  if (!store.supportSeen) { store.supportSeen = true; }

  return `
  ${cornerLeaves()}
  ${exitButton()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">${esc(SUP_TITLE)}</h1>
    <p class="sub">${esc(SUP_SUB)}</p>
  </div>
  <div class="sc">
    <div class="card flat">
      <p class="bodytext">${esc(SUP_INTRO)}</p>
    </div>

    <div class="chips" style="margin:12px 0 0">
      ${SUP_TABS.map((t) => `
        <button class="chip" data-sub="supportTab" data-val="${esc(t.id)}"
                aria-pressed="${t.id === tab}">${esc(t.label)}</button>`).join('')}
    </div>

    <div class="callout" style="margin:12px 0 4px;border-left:3px solid var(--concern, #A85A44)">
      <p style="margin:0">${esc(SUP_911)}</p>
    </div>

    ${tab === 'safe' ? supTabSafe() : ''}
    ${tab === 'dv' ? supTabDv() : ''}
    ${tab === 'cps' ? supTabCps() : ''}
    ${tab === 'traffick' ? supTabTraffick() : ''}

    <p class="disclaimer">${esc(SUP_DISCLAIMER)}</p>
  </div>`;
}

/* ==================================================================
   PHONES, GAMES AND WHO IS ON THE OTHER SIDE

   Everything about why this exists and why it is ordered the way it
   is lives in src/data/onlineSafety.js. The short version: her fear
   was a stranger in a parking lot, and the honest answer is that the
   mechanism moved rather than that the fear was silly.

   The age tab opens first, because a parent arriving here has a
   particular child in mind and wants to know what to do about that
   child this year, not a lecture on the internet.
   ================================================================== */

function onlineAgeBlock(months) {
  const natural = onlineStageFor(months);
  const picked = store.onlineStage
    ? ONLINE_STAGES.filter((s) => s.id === store.onlineStage)[0]
    : null;
  const st = picked || natural || ONLINE_STAGES[0];
  const off = natural && st.id !== natural.id;

  return `
  <div class="chips" style="margin-bottom:12px">
    ${ONLINE_STAGES.map((s) => `
      <button class="chip" data-onlinestage="${esc(s.id)}"
        aria-pressed="${s.id === st.id}">${esc(s.label)}</button>`).join('')}
  </div>

  ${off ? `
  <p class="tiny" style="margin:0 0 10px">Looking at ${esc(st.label.toLowerCase())}.
    ${natural ? 'Yours is in ' + esc(natural.label.toLowerCase()) + '.' : ''}</p>` : ''}

  <div class="card leafy">
    <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} ${esc(st.label)}</p>
    <p class="bodytext" style="margin-top:6px;font-size:15px;line-height:1.55">${esc(st.head)}</p>
    <p class="bodytext" style="margin-top:9px">${esc(st.body)}</p>
  </div>

  <div class="dsec">
    <h4>What to do at this age</h4>
    ${list(st.doNow)}
  </div>`;
}

/* A row that says something true about this child rather than one
   generic line that is wrong at both ends of childhood. */
function onlineRowSub(months) {
  const st = onlineStageFor(months);
  if (!st) return 'Screens, games, and the people on the other side of them';
  if (months < 60) return 'Screen rules that are easy now and a fight at eleven';
  if (months < 108) return 'Games with strangers in them, and what to set up first';
  if (months < 144) return 'The years it changes, and the conversations to have before it does';
  if (months < 192) return 'Phones, accounts, and the promise that makes them tell you';
  return 'What to talk about when you are advising rather than controlling';
}

function growRowSub(months) {
  if (months == null) return 'Their body, their privacy, and the conversations that work better early';
  if (months < 60) return 'The right words, and nobody has to hug anybody';
  if (months < 108) return 'Privacy, the rules about touch, and where babies come from';
  if (months < 144) return 'Puberty, explained before it starts rather than after';
  if (months < 192) return 'What their body is doing, and consent as a real thing';
  return 'The practical things, and keeping the door open';
}

function screenOnline(c) {
  const tab = state.onlineTab || 'age';
  const months = c.months;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm">${esc(ONLINE_TITLE)}</h1>
    <p class="sub">${esc(ONLINE_SUB)}</p>
  </div>
  <div class="sc">
    ${subTabs('onlineTab', tab, ONLINE_TABS)}

    ${tab === 'age' ? onlineAgeBlock(months) : ''}

    ${tab === 'real' ? `
      <div class="card leafy">
        <p class="eyebrow">${icon('info', 11, 'var(--sage)')} ${esc(ONLINE_HEAD)}</p>
        ${ONLINE_INTRO.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
      </div>

      <div class="dsec">
        <h4>${esc(ONLINE_NUMBERS.title)}</h4>
        ${list(ONLINE_NUMBERS.items)}
        <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(ONLINE_NUMBERS.note)}</p></div>
      </div>

      <div class="bpbox">
        <p class="bpbox-t">${esc(ONLINE_PATTERN.title)}</p>
        <p class="tiny" style="margin:8px 0 0">${esc(ONLINE_PATTERN.intro)}</p>
        <ol class="bpsteps">
          ${ONLINE_PATTERN.steps.map((x) => `<li>${esc(x)}</li>`).join('')}
        </ol>
        <p class="bpwarn">${esc(ONLINE_PATTERN.speed)}</p>
        <p class="bpclose">${esc(ONLINE_PATTERN.offPlatform)}</p>
      </div>

      <div class="dsec">
        <h4>${esc(ONLINE_GROUPS.title)}</h4>
        ${ONLINE_GROUPS.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <div class="callout"><p style="margin:0">${esc(ONLINE_GROUPS.teach)}</p></div>
      </div>

      <div class="dsec">
        <h4>${esc(ONLINE_SEXTORTION.title)}</h4>
        ${ONLINE_SEXTORTION.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <div class="callout" style="border-left:3px solid var(--concern, #A85A44)">
          <p style="margin:0">${esc(ONLINE_SEXTORTION.oneThing)}</p>
        </div>
        <button class="btn ghost" style="width:100%;margin-top:11px" data-go="screen" data-id="support">
          ${icon('shield', 14, 'var(--deep)')} What to do in the first hour
        </button>
      </div>

      <div class="dsec">
        <h4>${esc(ONLINE_HONEST.title)}</h4>
        <p class="bodytext">${esc(ONLINE_HONEST.body)}</p>
      </div>` : ''}

    ${tab === 'apps' ? ONLINE_APPS.map((a) => `
      <div class="dsec">
        <div style="display:flex;align-items:baseline;gap:9px">
          <h4 style="flex:1;margin:0">${esc(a.name)}</h4>
          <span class="tiny">${esc(a.age)}</span>
        </div>
        <p class="bodytext" style="margin:9px 0 0">${esc(a.what)}</p>
        ${a.changed ? `<p class="bodytext" style="margin:9px 0 0">${esc(a.changed)}</p>` : ''}
        <p class="sect">What you can actually do</p>
        ${list(a.canDo)}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0"><strong style="color:var(--deep)">Worth knowing:</strong> ${esc(a.honest)}</p>
        </div>
      </div>`).join('') : ''}

    ${tab === 'rules' ? `
      <div class="bpbox">
        <p class="bpbox-t">${esc(ONLINE_GAP.title)}</p>
        ${ONLINE_GAP.body.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
        <p class="bpclose">${esc(ONLINE_GAP.what)}</p>
      </div>

      <div class="dsec">
        <h4>${esc(ONLINE_RULES.title)}</h4>
        ${list(ONLINE_RULES.items)}
      </div>

      <div class="dsec">
        <h4>${esc(ONLINE_WORKS.title)}</h4>
        <p class="tiny" style="margin:0 0 9px">${esc(ONLINE_WORKS.intro)}</p>
        ${list(ONLINE_WORKS.items)}
        <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(ONLINE_WORKS.note)}</p></div>
      </div>

      <div class="dsec">
        <h4>${esc(ONLINE_PHONE.title)}</h4>
        ${ONLINE_PHONE.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <p class="sect">The everybody else has one problem</p>
        <p class="bodytext" style="margin:0 0 9px">${esc(ONLINE_PHONE.together)}</p>
        <p class="sect">The middle options people forget</p>
        ${list(ONLINE_PHONE.middle)}
      </div>

      <div class="dsec">
        <h4>${esc(ONLINE_SCRIPTS.title)}</h4>
        <p class="tiny" style="margin:0 0 9px">${esc(ONLINE_SCRIPTS.intro)}</p>
        ${ONLINE_SCRIPTS.items.map((x) => `
          <div class="quote"><p class="why" style="margin:0">${esc(x)}</p></div>`).join('')}
      </div>

      <div class="dsec">
        <h4>${esc(ONLINE_WRONG.title)}</h4>
        <p class="bodytext" style="margin:0 0 9px">${esc(ONLINE_WRONG.body)}</p>
        <p class="tiny" style="margin:0 0 10px">${esc(ONLINE_WRONG.link)}</p>
        <button class="btn ghost" style="width:100%" data-go="screen" data-id="support">
          ${icon('shield', 14, 'var(--deep)')} ${esc(SUP_TITLE)}
        </button>
      </div>` : ''}

    ${dsec('Where this comes from', sourceRows(ONLINE_SOURCES))}
    <p class="disclaimer">Checked September 2026. Apps change their settings constantly, so treat the
      controls above as where to look rather than as a permanent map.</p>
  </div>`;
}

/* ==================================================================
   GROWING UP

   Two tracks, bodies and people, both starting at two rather than at
   thirteen. src/data/growingUp.js carries the reasoning and the rule
   this is written under, which is to say how well a thing is known
   rather than only what it says.
   ================================================================== */

function growNowBlock(months) {
  const natural = growStageFor(months);
  const picked = store.growStage
    ? GROW_BY_AGE.filter((s) => s.id === store.growStage)[0]
    : null;
  const st = picked || natural || GROW_BY_AGE[0];
  const off = natural && st.id !== natural.id;

  return `
  <div class="chips" style="margin-bottom:12px">
    ${GROW_BY_AGE.map((s) => `
      <button class="chip" data-growstage="${esc(s.id)}"
        aria-pressed="${s.id === st.id}">${esc(s.label)}</button>`).join('')}
  </div>

  ${!natural && months !== null && months !== undefined ? `
  <p class="tiny" style="margin:0 0 10px">Nothing here applies yet at this age. It is all here for
    when it does.</p>` : ''}

  ${off ? `
  <p class="tiny" style="margin:0 0 10px">Looking at ${esc(st.label.toLowerCase())}.
    ${natural ? 'Yours is in ' + esc(natural.label.toLowerCase()) + '.' : ''}</p>` : ''}

  <div class="card leafy">
    <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} ${esc(st.label)}</p>
    <p class="bodytext" style="margin-top:6px;font-size:15px;line-height:1.55">${esc(st.body)}</p>
  </div>

  <div class="dsec">
    <h4>What this looks like</h4>
    ${list(st.items)}
  </div>`;
}

function growTabsFor(months) {
  const base = GROW_TABS.slice();
  if (!pubShows(months)) return base;
  /* Second, not first. Somebody arriving here is usually reading
     rather than recording, and the reading is what the screen is
     mostly for. */
  return [base[0], { id: 'track', label: PUB_TITLE }].concat(base.slice(1));
}

function screenGrowingUp(c) {
  const months = c.months;
  let tab = state.growTab || 'now';
  if (growTabsFor(months).filter((x) => x.id === tab).length === 0) tab = 'now';

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm">${esc(GROW_TITLE)}</h1>
    <p class="sub">${esc(GROW_SUB)}</p>
  </div>
  <div class="sc">
    ${subTabs('growTab', tab, growTabsFor(months))}

    ${tab === 'now' ? growNowBlock(months) : ''}
    ${tab === 'track' ? pubTrackBlock(c) : ''}

    ${tab === 'body' ? `
      <div class="dsec">
        <h4>${esc(GROW_GIRLS.title)}</h4>
        ${steps(GROW_GIRLS.order)}
        <p class="sect">The first period</p>
        <p class="bodytext" style="margin:0 0 9px">${esc(GROW_GIRLS.menarche)}</p>
        <p class="sect">Early</p>
        <p class="bodytext" style="margin:0 0 9px">${esc(GROW_GIRLS.early)}</p>
        <p class="sect">Late</p>
        <p class="bodytext">${esc(GROW_GIRLS.late)}</p>
      </div>

      <div class="dsec">
        <h4>${esc(GROW_PERIODS.title)}</h4>
        <p class="sect" style="margin-top:0">What normal looks like</p>
        ${list(GROW_PERIODS.normal)}
        <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(GROW_PERIODS.slower)}</p></div>
        <p class="sect">${esc(GROW_PERIODS.red.title)}</p>
        ${list(GROW_PERIODS.red.items, true)}
        <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(GROW_PERIODS.before)}</p></div>
      </div>

      <div class="dsec">
        <h4>${esc(GROW_BOYS.title)}</h4>
        ${steps(GROW_BOYS.order)}
        <p class="sect">Erections</p>
        <p class="bodytext" style="margin:0 0 9px">${esc(GROW_BOYS.erections)}</p>
        <p class="sect">Wet dreams</p>
        <p class="bodytext" style="margin:0 0 9px">${esc(GROW_BOYS.wet)}</p>
        <p class="sect">Early and late</p>
        <p class="bodytext" style="margin:0 0 9px">${esc(GROW_BOYS.early)}</p>
        <div class="callout"><p style="margin:0">${esc(GROW_BOYS.note)}</p></div>
      </div>

      <div class="dsec">
        <h4>${esc(GROW_EARLY_RISK.title)}</h4>
        ${GROW_EARLY_RISK.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <p class="sect">What helps</p>
        ${list(GROW_EARLY_RISK.what)}
      </div>` : ''}

    ${tab === 'talking' ? `
      <div class="card leafy">
        <p class="eyebrow">${icon('heart', 11, 'var(--sage)')} ${esc(GROW_HEAD)}</p>
        ${GROW_INTRO.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
      </div>

      <div class="dsec">
        <h4>${esc(GROW_EVIDENCE.title)}</h4>
        ${list(GROW_EVIDENCE.items)}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0"><strong style="color:var(--deep)">For fathers:</strong> ${esc(GROW_EVIDENCE.dads)}</p>
        </div>
      </div>

      <div class="dsec">
        <h4>${esc(GROW_CONSENT.title)}</h4>
        <p class="tiny" style="margin:0 0 9px">${esc(GROW_CONSENT.intro)}</p>
        ${GROW_CONSENT.bands.map((b) => `
          <div class="quote">
            <p class="sit">${esc(b.when)}</p>
            <p class="why" style="margin-top:4px">${esc(b.what)}</p>
          </div>`).join('')}
        <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(GROW_CONSENT.note)}</p></div>
      </div>

      <div class="dsec">
        <h4>The long version of all of this</h4>
        <p class="bodytext" style="margin:0 0 10px">Consent properly, what it looks like at each age,
          how to be the person they tell, and what to do in the first day if they ever do. It is the
          most important screen in this app and it is one tap away.</p>
        <button class="btn" style="width:100%" data-go="screen" data-id="consent">
          ${icon('heart', 14, '#fff')} ${esc(CON_TITLE)}
        </button>
      </div>

      <div class="dsec">
        <h4>${esc(GROW_SEXED.title)}</h4>
        <p class="sect" style="margin-top:0">${esc(GROW_SEXED.strong.title)}</p>
        ${list(GROW_SEXED.strong.items)}
        <p class="sect">${esc(GROW_SEXED.weak.title)}</p>
        <p class="bodytext" style="margin:0 0 9px">${esc(GROW_SEXED.weak.body)}</p>
        <div class="callout"><p style="margin:0">${esc(GROW_SEXED.yours)}</p></div>
      </div>` : ''}

    ${tab === 'safe' ? `
      <div class="dsec">
        <h4>${esc(GROW_NAMES.title)}</h4>
        ${GROW_NAMES.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
        <div class="callout"><p style="margin:0">${esc(GROW_NAMES.verdict)}</p></div>
      </div>

      <div class="dsec">
        <h4>${esc(GROW_BODY_RULES.title)}</h4>
        ${GROW_BODY_RULES.items.map((x) => `
          <div class="quote"><p class="why" style="margin:0">${esc(x)}</p></div>`).join('')}
        <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(GROW_BODY_RULES.who)}</p></div>
        <p class="sect">Your half of it</p>
        <p class="bodytext">${esc(GROW_BODY_RULES.adults)}</p>
      </div>

      <div class="bpbox">
        <p class="bpbox-t">${esc(GROW_DISCLOSE.title)}</p>
        <ol class="bpsteps">
          ${GROW_DISCLOSE.items.map((x) => `<li>${esc(x)}</li>`).join('')}
        </ol>
      </div>

      <div class="dsec">
        <h4>The online half of the same thing</h4>
        <p class="bodytext" style="margin:0 0 10px">Everything above is about the people who can reach
          your child in a room. Most of them now reach them through a screen instead, and the
          groundwork is identical.</p>
        <button class="btn ghost" style="width:100%" data-go="screen" data-id="online">
          ${icon('shield', 14, 'var(--deep)')} ${esc(ONLINE_TITLE)}
        </button>
      </div>` : ''}

    ${dsec('Where this comes from', sourceRows(GROW_SOURCES))}
    <p class="disclaimer">${esc(GROW_DISCLAIMER)}</p>
  </div>`;
}

/* ==================================================================
   KEEPING TRACK OF PUBERTY, AND A DAUGHTER'S CYCLE

   Everything about why this is opt in, why it can be deleted in one
   tap, and why birth control is recorded as a medication rather than
   as a statement, lives in src/data/puberty.js.

   WHAT IS SHOWN TO WHOM, which was her question:

     The TRACKER is fitted to the child. A girl gets the girls' list,
     a boy gets the boys' list, the cycle only exists for a girl who
     has started, and none of it appears before seven. It is a record
     of one particular body and showing the wrong body's list would be
     both useless and strange.

     The READING is not fitted and never will be. Every age band and
     both sets of changes stay reachable on every child's profile at
     every age, because a mother of a son still needs to know what a
     period is, a parent reading ahead is doing the right thing, and
     an app that decides which half of puberty a family is allowed to
     read about has overstepped.
   ================================================================== */

function pubMarks(kid) {
  return (kid && kid.pub && typeof kid.pub === 'object') ? kid.pub : {};
}

function pubOn(kid) {
  return !!(kid && kid.pubOn);
}

function pubSet(kid, id, value) {
  if (!kid) return;
  if (!kid.pub || typeof kid.pub !== 'object') kid.pub = {};
  if (value) kid.pub[id] = value; else delete kid.pub[id];
  kid.updatedAt = Date.now();
  saveStore();
}

/* Today as YYYY-MM, since month is the granularity the whole of this
   works in. Nobody knows the day. */
function pubThisMonth() {
  return String(ciToday()).slice(0, 7);
}

function childPeriods(kid) {
  return normalizePeriods(Array.isArray((kid || {}).periods) ? kid.periods : []);
}

function childPeriodsSet(kid, list) {
  if (!kid) return;
  kid.periods = normalizePeriods(list);
  kid.updatedAt = Date.now();
  flushStore();
  render();
}

function childPeriodToggle(kid, date) {
  const list = childPeriods(kid);
  const at = list.indexOf(date);
  if (at === -1) list.push(date); else list.splice(at, 1);
  childPeriodsSet(kid, list);
  /* Logging a period IS the first period being recorded, so the
     checklist stops asking about something that has demonstrably
     already happened. */
  if (at === -1 && !pubMarks(kid).period) pubSet(kid, 'period', String(date).slice(0, 7));
}

function childMeds(kid) {
  return Array.isArray((kid || {}).meds) ? kid.meds : [];
}

function pubWipe(kid) {
  if (!kid) return;
  delete kid.pub;
  delete kid.periods;
  delete kid.meds;
  delete kid.cycleLength;
  kid.pubOn = false;
  kid.updatedAt = Date.now();
  store.pubDelete = false;
  flushStore();
}

/* The door. Nothing is recorded until somebody has read what this is
   and pressed the button, which is the whole of the consent design. */
function pubStartBlock(kid, first) {
  return `
  <div class="card leafy">
    <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} ${esc(PUB_START.title)}</p>
    ${PUB_START.body.map((x) => `<p class="bodytext" style="margin-top:8px">${esc(x)}</p>`).join('')}
  </div>

  <div class="dsec">
    <h4>What you should know first</h4>
    ${list(PUB_START.items)}
    <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(PUB_START.ask)}</p></div>
  </div>

  <button class="btn" style="width:100%" data-pub="on">${esc(PUB_START.btn)}</button>
  <p class="tiny" style="text-align:center;margin-top:9px">${esc(PUB_START.notNow)} is fine. Nothing
    is recorded until you press that.</p>`;
}

/* Which body's list to show. Reuses the same answer the growth curves
   already needed rather than asking a second time. */
function pubAskSex(kid, first) {
  return `
  <div class="card leafy">
    <p class="bodytext">The list of changes is different depending on which body
      ${esc(first)} has, so this needs to know which one to show.</p>
    <p class="tiny" style="margin-top:8px">It is the same answer the growth curves use, so you only
      answer it once, and you can change it whenever you like. If it is more complicated than the
      two options, pick the one whose changes you are expecting and read the other half on the other
      tabs, which are there for everybody at every age.</p>
  </div>
  <button class="lrow" data-growth="sex" data-id="f">
    <span class="licon">${icon('leaf', 18)}</span>
    <span class="grow"><span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">The girls' list</span>
    <span class="tiny" style="display:block;margin-top:2px">Breasts, discharge, periods and the rest</span></span>
  </button>
  <button class="lrow" data-growth="sex" data-id="m">
    <span class="licon">${icon('leaf', 18)}</span>
    <span class="grow"><span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">The boys' list</span>
    <span class="tiny" style="display:block;margin-top:2px">Voice, growth, and the rest</span></span>
  </button>`;
}

/* One row. Tick it, then say roughly when, because the when is what
   makes the whole list able to tell you anything. */
function pubRow(kid, item) {
  const marks = pubMarks(kid);
  const on = marks[item.id];
  const editing = store.pubEdit === item.id;
  const open = store.pubOpen === item.id;

  return `
  <div class="card flat vaxcard" style="padding:0;overflow:hidden${item.big && !on ? ';border-left:3px solid var(--leaf)' : ''}">
    <div class="vaxdose${on ? ' on' : ''}" style="padding:12px 13px">
      <button class="vaxtick" data-pub="tick" data-id="${esc(item.id)}"
        aria-pressed="${on ? 'true' : 'false'}"
        aria-label="${esc(on ? 'Unmark ' + item.label : 'Mark ' + item.label + ' as happened')}">
        ${on ? icon('check', 12, '#fff') : ''}
      </button>
      <span class="grow">
        <span class="vaxdname">${esc(item.label)}</span>
        <span class="tiny" style="display:block;margin-top:1px">
          ${on ? esc(pubMonthLabel(on)) : esc(item.typical)}
        </span>
      </span>
      ${on ? `<button class="tiny vaxdate" data-pub="when" data-id="${esc(item.id)}">When</button>` : ''}
      <button class="tiny vaxdate" data-pub="open" data-id="${esc(item.id)}"
        aria-label="More about ${esc(item.label)}">${open ? 'Less' : 'What'}</button>
    </div>

    ${editing ? `
    <div class="vaxedit">
      <input class="inp" id="pubmonthin" type="month" value="${esc(on || pubThisMonth())}"
        max="${esc(pubThisMonth())}">
      <button class="btn" data-pub="savewhen" data-id="${esc(item.id)}">Save</button>
    </div>` : ''}

    ${open ? `
    <div class="vaxbody">
      <p class="bodytext" style="margin:0">${esc(item.what)}</p>
      ${item.gapText ? `<p class="tiny" style="margin:8px 0 0">${icon('chart', 10, 'var(--sage)')} ${esc(item.gapText)}.</p>` : ''}
      ${item.private ? `<p class="tiny" style="margin:8px 0 0">You may never know about this one and
        there is no need to ask. It is here for the order, not for ticking.</p>` : ''}
    </div>` : ''}
  </div>`;
}

/* The bit that makes filling it in worth doing. */
function pubHintBlock(kid) {
  const h = pubPeriodHint(kid.sex, pubMarks(kid), ciToday());
  if (!h) return '';
  const first = (kid.name || 'She').split(/\s+/)[0];
  return `
  <div class="bpbox surrender">
    <p class="bpbox-t">What usually comes next</p>
    <p class="bodytext" style="margin-top:8px">
      You recorded ${esc(h.from)} in ${esc(pubMonthLabel(h.started))},
      which is ${esc(h.since === 0 ? 'this month' : h.since + ' month' + (h.since === 1 ? '' : 's') + ' ago')}.
      ${esc(h.gapText)}.
    </p>
    ${h.overdue ? `
      <p class="bpwarn">${esc(PUB_HINT_OVERDUE)}</p>` : `
      <p class="bodytext" style="margin-top:9px">On that gap, a first period for ${esc(first)} would
        land somewhere around ${esc(pubMonthLabel(h.around))}. It is an average and bodies are not
        averages, so treat it as a heads up rather than a date.</p>
      <p class="bpclose">Worth putting something in her bag before then. A girl who starts at school
        with nothing remembers that day for forty years.</p>`}
  </div>`;
}

function pubMedBlock(kid) {
  const meds = childMeds(kid);
  const adding = !!store.medAdd;
  const girl = kid.sex === 'f';

  return `
  <div class="dsec">
    <h4>${esc(girl ? MED_TITLE : MED_TITLE_ANY)}</h4>
    <p class="tiny" style="margin:0 0 10px">${esc(MED_INTRO)}</p>

    ${meds.length ? meds.map((m, i) => `
      <div class="quote">
        <p class="sit">${icon('pill', 12, 'var(--sage)')} ${esc(m.name || 'Something')}</p>
        <p class="why" style="margin-top:4px">
          ${esc((MED_KINDS.filter((k) => k.id === m.kind)[0] || {}).label || 'Ongoing')}${m.since ? esc(', since ' + pubMonthLabel(m.since)) : ''}
        </p>
        <button class="chip" style="margin-top:8px" data-pub="delmed" data-id="${esc(String(i))}">Remove</button>
      </div>`).join('') : `
      <div class="card flat"><p class="bodytext">${esc(MED_EMPTY)}</p></div>`}

    ${adding ? `
    <div class="card" style="margin-top:10px">
      <p class="eyebrow">What kind</p>
      <div class="chips" style="margin:8px 0 10px">
        ${MED_KINDS.map((k) => `
          <button class="chip" data-pub="medkind" data-id="${esc(k.id)}"
            aria-pressed="${store.medKind === k.id}">${esc(k.label)}</button>`).join('')}
      </div>
      ${store.medKind ? `
        <p class="tiny" style="margin:0 0 9px">${esc((MED_KINDS.filter((k) => k.id === store.medKind)[0] || {}).note || '')}</p>` : ''}
      <input class="inp" id="mednamein" type="text" placeholder="What is it called"
        value="${esc(store.medName || '')}" style="width:100%" autocomplete="off">
      <p class="eyebrow" style="margin-top:10px">Since</p>
      <input class="inp" id="medsincein" type="month" value="${esc(store.medSince || pubThisMonth())}"
        max="${esc(pubThisMonth())}" style="width:100%;margin-top:6px">
      <button class="btn" style="width:100%;margin-top:11px" data-pub="savemed">Save it</button>
      <button class="chip" style="margin-top:9px" data-pub="cancelmed">Cancel</button>
    </div>` : `
    <button class="btn ghost" style="width:100%;margin-top:10px" data-pub="addmed">
      ${icon('pill', 14, 'var(--deep)')} Add something
    </button>`}

    ${girl ? `
      <div class="callout" style="margin-top:12px"><p style="margin:0">${esc(MED_BC_NOTE)}</p></div>
      ${meds.filter((m) => m.kind === 'bc').length ? `
      <div class="callout" style="margin-top:9px"><p style="margin:0">${esc(MED_ON_CHART)}</p></div>` : ''}` : ''}
  </div>`;
}

/* Every button on the tracker, in one place, so the consent and the
   delete cannot drift apart from the thing they gate. */
function pubAction(how, id) {
  const kid = activeChild();
  if (!kid) return;

  if (how === 'on') { kid.pubOn = true; kid.updatedAt = Date.now(); flushStore(); return; }

  if (how === 'tick') {
    const marks = pubMarks(kid);
    if (marks[id]) {
      pubSet(kid, id, '');
      /* Unticking the first period does not quietly bin the dates she
         logged. Those are a record of something that happened. */
      if (id === 'period') store.pubEdit = '';
    } else {
      pubSet(kid, id, pubThisMonth());
      store.pubEdit = id;
    }
    return;
  }
  if (how === 'when') { store.pubEdit = store.pubEdit === id ? '' : id; return; }
  if (how === 'open') { store.pubOpen = store.pubOpen === id ? '' : id; return; }
  if (how === 'savewhen') {
    const el = document.getElementById('pubmonthin');
    const v = el && el.value ? el.value : '';
    if (v && v <= pubThisMonth()) pubSet(kid, id, v);
    store.pubEdit = '';
    return;
  }

  if (how === 'askwipe') { store.pubDelete = true; return; }
  if (how === 'nowipe') { store.pubDelete = false; return; }
  if (how === 'wipe') {
    pubWipe(kid);
    state.view = { type: 'screen', id: 'growingup' };
    state.growTab = 'now';
    return;
  }

  if (how === 'addmed') { store.medAdd = true; store.medKind = ''; store.medName = ''; store.medSince = ''; return; }
  if (how === 'cancelmed') { store.medAdd = false; return; }
  if (how === 'medkind') { store.medKind = id; return; }
  if (how === 'savemed') {
    const nameEl = document.getElementById('mednamein');
    const sinceEl = document.getElementById('medsincein');
    const name = nameEl && nameEl.value ? nameEl.value.trim() : '';
    if (!name) { store.medName = ''; return; }
    const meds = childMeds(kid).slice();
    meds.push({
      name: name.slice(0, 60),
      kind: store.medKind || 'other',
      since: (sinceEl && sinceEl.value) ? sinceEl.value : '',
    });
    kid.meds = meds;
    kid.updatedAt = Date.now();
    store.medAdd = false; store.medKind = ''; store.medName = ''; store.medSince = '';
    flushStore();
    return;
  }
  if (how === 'delmed') {
    const meds = childMeds(kid).slice();
    const at = Number(id);
    if (isFinite(at) && at >= 0 && at < meds.length) meds.splice(at, 1);
    kid.meds = meds;
    kid.updatedAt = Date.now();
    flushStore();
    return;
  }

  if (how === 'caledit') { store.childCycleEdit = true; return; }
  if (how === 'caldone') { store.childCycleEdit = false; return; }
  if (how === 'caltoday') { childPeriodToggle(kid, ciToday()); return; }
  if (how === 'calhist') { store.childCycleHist = !store.childCycleHist; return; }
  if (how === 'delperiod') {
    const l = childPeriods(kid).filter((d) => d !== id);
    childPeriodsSet(kid, l);
  }
}

function pubTrackBlock(c) {
  const kid = activeChild();
  if (!kid) return `<div class="card flat"><p class="bodytext">Open a child first.</p></div>`;
  const first = (kid.name || 'They').split(/\s+/)[0];

  if (!pubShows(c.months)) {
    return `
    <div class="card leafy">
      <p class="bodytext">${esc(first)} is too young for this to be any use yet. It appears here from
      around seven, which is early enough to catch the first signs and late enough not to be strange.</p>
      <p class="tiny" style="margin-top:8px">Everything else on this screen is worth reading now.</p>
    </div>`;
  }

  if (!pubOn(kid)) return pubStartBlock(kid, first);
  if (!kid.sex) return pubAskSex(kid, first);

  const marks = pubMarks(kid);
  const counts = pubCount(kid.sex, marks);
  const items = pubList(kid.sex);
  const started = !!marks.period;

  return `
  <div class="card leafy">
    <p class="bodytext" style="margin:0">${esc(PUB_INTRO)}</p>
    <p class="tiny" style="margin-top:8px">${esc(counts.done + ' of ' + counts.total + ' recorded for ' + first + '.')}</p>
  </div>

  ${pubHintBlock(kid)}

  <div class="dsec">
    <h4>What has happened so far</h4>
    ${items.map((it) => pubRow(kid, it)).join('')}
  </div>

  ${kid.sex === 'f' ? `
  <div class="dsec">
    <h4>${esc(CYC_TITLE)}</h4>
    ${started ? `
      <p class="bodytext" style="margin:0 0 10px">${esc(childPeriods(kid).length
        ? childPeriods(kid).length + ' logged. The calendar, her average and what is worth asking a '
          + 'doctor about are all on her cycle page.'
        : 'Her first period is recorded. Log each one as it comes and the app works out her own average.')}</p>
      <button class="btn" style="width:100%" data-go="screen" data-id="childcycle">
        ${icon('calendar', 14, '#fff')} Open ${esc(first)}'s cycle
      </button>
    ` : `
      <p class="bodytext" style="margin:0">Once you tick the first period above, a calendar appears
        here, the same one you use for yourself.</p>`}
  </div>` : ''}

  ${pubMedBlock(kid)}

  <div class="dsec">
    <h4>${esc(PUB_HANDOVER.title)}</h4>
    <p class="bodytext">${esc(PUB_HANDOVER.body)}</p>
  </div>

  <div class="dsec">
    <h4>${esc(PUB_DELETE.title)}</h4>
    <p class="bodytext" style="margin:0 0 10px">${esc(PUB_DELETE.body)}</p>
    ${store.pubDelete ? `
      <button class="btn" style="width:100%;background:#A8352A" data-pub="wipe">${esc(PUB_DELETE.confirm)}</button>
      <button class="chip" style="margin-top:9px" data-pub="nowipe">${esc(PUB_DELETE.cancel)}</button>
    ` : `
      <button class="btn ghost" style="width:100%" data-pub="askwipe">${esc(PUB_DELETE.btn)}</button>`}
  </div>

  ${dsec('Where this comes from', sourceRows(PUB_SOURCES))}`;
}

/* ------------------------------------------------------------------
   HER CYCLE, ON ITS OWN SCREEN

   The same calendar component as the parent's, told to draw a
   different set of dates and told to leave the fertile window out,
   which is a decision rather than an omission. See cycleCalendar.
   ------------------------------------------------------------------ */
function screenChildCycle(c) {
  const kid = activeChild();
  if (!kid || kid.sex !== 'f' || !pubOn(kid)) {
    state.view = { type: 'screen', id: 'growingup' };
    return screenGrowingUp(c);
  }
  const first = (kid.name || 'She').split(/\s+/)[0];
  const listed = childPeriods(kid);
  const stats = cycleStats(listed);
  const len = predictLength(listed, kid.cycleLength);
  const info = listed.length ? cycleInfo(listed[0], null, len) : null;
  const editing = !!store.childCycleEdit;
  const rows = periodHistoryRows(listed);
  const onBc = childMeds(kid).filter((m) => m.kind === 'bc').length > 0;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="growingup">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm">${esc(first + "'s cycle")}</h1>
    <p class="sub">${esc(CYC_SUB)}</p>
  </div>
  <div class="sc">
    <div class="card leafy">
      ${CYC_INTRO.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      <p class="tiny" style="margin:0">${esc(CYC_NO_FERTILE)}</p>
    </div>

    ${onBc ? `
    <div class="callout" style="margin-top:11px"><p style="margin:0">${esc(MED_ON_CHART)}</p></div>` : ''}

    <div class="card" style="margin-top:11px">
      ${info ? `
      <div style="display:flex;align-items:center;gap:12px">
        <span class="cycday">
          <span class="cycday-n">${info.dayOfCycle}</span>
          <span class="cycday-l">day</span>
        </span>
        <span class="grow">
          <span class="eyebrow" style="display:block">${esc(first + "'s cycle")}</span>
          <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);margin-top:2px">
            ${esc(listed.length === 1 ? 'One period logged so far' : listed.length + ' periods logged')}
          </span>
          <span class="tiny" style="display:block;margin-top:3px">
            ${stats.cycles
              ? esc(cycleLengthLine(stats))
              : 'Log the next one and this becomes her own average rather than a textbook number.'}
          </span>
        </span>
      </div>

      ${cycleCalendar(info, store.calMonth || 0, editing, listed, 'data-childperiod')}
      ` : `
      <p class="eyebrow">${icon('calendar', 11, 'var(--sage)')} ${esc(first + "'s cycle")}</p>
      <p class="bodytext" style="margin-top:6px">Tap the day her last period started and this fills
        itself in.</p>
      ${editing ? cycleCalendar({ lastPeriod: ciToday(), cycleLength: CYCLE_AVERAGE_LENGTH },
        store.calMonth || 0, true, listed, 'data-childperiod') : ''}`}

      <div style="display:flex;gap:7px;margin-top:10px;flex-wrap:wrap">
        <button class="chip${editing ? ' on' : ''}" data-pub="${editing ? 'caldone' : 'caledit'}"
          ${editing ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}>
          ${icon(editing ? 'check' : 'calendar', 12, 'var(--deep)')} ${editing ? 'Done logging' : 'Log a period'}
        </button>
        <button class="chip" data-pub="caltoday">Started today</button>
        ${rows.length ? `<button class="chip" data-pub="calhist">
          ${store.childCycleHist ? 'Hide' : 'All ' + rows.length + ' logged'}</button>` : ''}
      </div>

      ${stats.note ? `
      <p class="tiny" style="margin-top:9px">${icon('chart', 10, 'var(--sage)')} ${esc(stats.note)}</p>` : ''}

      ${store.childCycleHist && rows.length ? `
      <div class="cychist">
        ${rows.map((r) => `
          <div class="cychrow">
            <span class="grow">
              <span class="cychdate">${esc(cycleDateLabelWithYear(r.date))}</span>
              <span class="tiny">${r.gap
                ? esc(r.gap + ' days after the one before')
                : 'The earliest one logged'}</span>
            </span>
            <button class="tiny vaxdate" data-pub="delperiod" data-id="${esc(r.date)}">Remove</button>
          </div>`).join('')}
      </div>` : ''}
    </div>

    <div class="dsec">
      <h4>${esc(CYC_NORMAL.title)}</h4>
      ${list(CYC_NORMAL.items)}
    </div>

    <div class="dsec">
      <h4>${esc(CYC_RED.title)}</h4>
      ${list(CYC_RED.items, true)}
      <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(CYC_RED.note)}</p></div>
    </div>

    ${pubMedBlock(kid)}

    ${dsec('Where this comes from', sourceRows(PUB_SOURCES))}
    <p class="disclaimer">Estimates from dates, not a test. Anything on the list above is worth an
      appointment rather than a search.</p>
  </div>`;
}

/* ==================================================================
   CONSENT, AND IF SOMETHING HAPPENS

   The reasoning, the numbers and the rule about what is stated as
   proven all live in src/data/consent.js.

   TWO THINGS ABOUT THE ORDER HERE.

   The first tab is for a parent whose child has just told them. Not
   the explainer, not the age guide. Somebody arriving here at eleven
   at night is not reading, and the two clocks that genuinely close
   are measured in hours.

   And the promise gets repeated at the bottom of every tab. It is
   the one thing on this screen that works before anything has
   happened, and a parent who only ever opens the first tab should
   still leave with it.
   ================================================================== */

function conLine(l) {
  const digits = String(l.contact || '').replace(/[^\d]/g, '');
  const dial = (digits.length >= 10 || digits.length === 3) ? 'tel:' + digits : '';
  return `
  <div class="bpline">
    <p class="bpline-n">${esc(l.name)}</p>
    ${dial
      ? `<a class="bpline-c" href="${esc(dial)}">${esc(l.contact)}</a>`
      : `<span class="bpline-c">${esc(l.contact)}</span>`}
    <p class="tiny" style="margin:2px 0 0">${esc(l.detail)}</p>
    <a class="tiny" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer"
      style="text-decoration:underline">Their website</a>
  </div>`;
}

function conPromiseBlock() {
  return `
  <div class="bpbox surrender">
    <p class="bpbox-t">${esc(CON_PROMISE.title)}</p>
    <p class="bodytext" style="margin-top:8px">${esc(CON_PROMISE.body)}</p>
    <p class="liftline" style="font-size:16px;margin-top:11px">${esc(CON_PROMISE.words)}</p>
    <p class="bpclose">${esc(CON_PROMISE.why)}</p>
  </div>`;
}

function conToldTab() {
  return `
  <div class="card bp">
    <p class="eyebrow">${icon('heart', 11, '#A85A44')} ${esc(TOLD_HEAD)}</p>

    <div class="bpbox">
      <p class="bpbox-t">${esc(TOLD_FIRST.title)}</p>
      <p class="tiny" style="margin:8px 0 0">${esc(TOLD_FIRST.intro)}</p>
      ${TOLD_FIRST.lines.map((x) => `
        <p class="liftline" style="font-size:17px;margin-top:10px">${esc(x)}</p>`).join('')}
      <p class="bpclose">${esc(TOLD_FIRST.then)}</p>
    </div>
  </div>

  <div class="bpbox" style="margin-top:12px">
    <p class="bpbox-t">${esc(TOLD_CLOCKS.title)}</p>
    <p class="tiny" style="margin:8px 0 0">${esc(TOLD_CLOCKS.intro)}</p>
    ${TOLD_CLOCKS.items.map((x) => `
      <div class="bpwho">
        <span class="bpwho-w">${esc(x.what)} &middot; ${esc(x.when)}</span>
        <span class="bpwho-s">${esc(x.detail)}</span>
      </div>`).join('')}
    <p class="bpwarn">${esc(TOLD_CLOCKS.note)}</p>
  </div>

  <div class="dsec">
    <h4>Somebody to call, any hour</h4>
    ${TOLD_LINES.map(conLine).join('')}
  </div>

  <div class="dsec">
    <h4>${esc(TOLD_DONT.title)}</h4>
    <p class="tiny" style="margin:0 0 9px">${esc(TOLD_DONT.intro)}</p>
    ${list(TOLD_DONT.items, true)}
    <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(TOLD_DONT.instead)}</p></div>
  </div>

  <div class="dsec">
    <h4>${esc(TOLD_EC.title)}</h4>
    <p class="tiny" style="margin:0 0 10px">${esc(TOLD_EC.intro)}</p>
    ${TOLD_EC.options.map((o) => `
      <div class="card flat" style="margin-bottom:9px">
        <p style="margin:0;font-size:14px;font-weight:600;color:var(--ink)">${esc(o.name)}</p>
        <p class="tiny" style="margin:3px 0 0;color:var(--deep);font-weight:600">${esc(o.window)}</p>
        <p class="bodytext" style="margin:7px 0 0">${esc(o.how)}</p>
        <p class="tiny" style="margin:6px 0 0">${esc(o.note)}</p>
      </div>`).join('')}
    <div class="callout" style="margin-top:6px"><p style="margin:0">${esc(TOLD_EC.weight)}</p></div>
  </div>

  <div class="dsec">
    <h4>${esc(TOLD_EXAM.title)}</h4>
    ${TOLD_EXAM.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
    <div class="callout" style="border-left:3px solid var(--attention, #B5793F)">
      <p style="margin:0"><strong style="color:var(--deep)">The bit everybody gets wrong:</strong>
        ${esc(TOLD_EXAM.window)}</p>
    </div>
    <p class="bodytext" style="margin:10px 0 0">${esc(TOLD_EXAM.preserve)}</p>
  </div>

  <div class="dsec">
    <h4>${esc(TOLD_REPORT.title)}</h4>
    ${TOLD_REPORT.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
    <div class="callout"><p style="margin:0">${esc(TOLD_REPORT.ask)}</p></div>
    <p class="bodytext" style="margin:10px 0 0">${esc(TOLD_REPORT.adults)}</p>
    <p class="bodytext" style="margin:9px 0 0">${esc(TOLD_REPORT.perp)}</p>
  </div>

  <div class="dsec">
    <h4>${esc(TOLD_LATER.title)}</h4>
    ${list(TOLD_LATER.items)}
    <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(TOLD_LATER.note)}</p></div>
  </div>

  <div class="dsec">
    <h4>${esc(TOLD_AFTER.title)}</h4>
    ${list(TOLD_AFTER.items)}
  </div>`;
}

function conWhatTab() {
  return `
  <div class="card leafy">
    <p class="eyebrow">${icon('info', 11, 'var(--sage)')} ${esc(WHAT_HEAD)}</p>
    ${WHAT_INTRO.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
  </div>

  <div class="bpbox">
    <p class="bpbox-t">${esc(WHAT_FREEZE.title)}</p>
    ${WHAT_FREEZE.body.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
    <p class="bpwarn">${esc(WHAT_FREEZE.say)}</p>
  </div>

  <div class="dsec">
    <h4>${esc(WHAT_CAPACITY.title)}</h4>
    ${list(WHAT_CAPACITY.items)}
  </div>

  <div class="dsec">
    <h4>${esc(WHAT_COERCION.title)}</h4>
    <p class="tiny" style="margin:0 0 9px">${esc(WHAT_COERCION.intro)}</p>
    ${list(WHAT_COERCION.items)}
    <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(WHAT_COERCION.note)}</p></div>
  </div>

  <div class="dsec">
    <h4>${esc(WHAT_CARRY.title)}</h4>
    ${list(WHAT_CARRY.items)}
  </div>

  <div class="dsec">
    <h4>${esc(WHAT_WHO.title)}</h4>
    ${WHAT_WHO.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
  </div>

  <div class="dsec">
    <h4>${esc(WHAT_LAW.title)}</h4>
    ${WHAT_LAW.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
  </div>`;
}

function conAgeTab(months) {
  const natural = conStageFor(months);
  const picked = store.conStage
    ? CON_BY_AGE.filter((s) => s.id === store.conStage)[0]
    : null;
  const st = picked || natural || CON_BY_AGE[0];
  const off = natural && st.id !== natural.id;

  return `
  <div class="chips" style="margin-bottom:12px">
    ${CON_BY_AGE.map((s) => `
      <button class="chip" data-constage="${esc(s.id)}"
        aria-pressed="${s.id === st.id}">${esc(s.label)}</button>`).join('')}
  </div>

  ${off ? `
  <p class="tiny" style="margin:0 0 10px">Looking at ${esc(st.label.toLowerCase())}.
    ${natural ? 'Yours is in ' + esc(natural.label.toLowerCase()) + '.' : ''}</p>` : ''}

  <div class="card leafy">
    <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} ${esc(st.label)}</p>
    <p class="bodytext" style="margin-top:6px;font-size:15px;line-height:1.55">${esc(st.head)}</p>
  </div>

  <div class="dsec">
    <h4>What to do at this age</h4>
    ${st.items.map((x) => `
      <div class="quote"><p class="why" style="margin:0">${esc(x)}</p></div>`).join('')}
  </div>`;
}

function conRaisingTab() {
  return `
  <div class="card leafy">
    <p class="eyebrow">${icon('info', 11, 'var(--sage)')} ${esc(RAISE_HEAD)}</p>
    ${RAISE_INTRO.map((x) => `<p class="bodytext" style="margin:9px 0 0">${esc(x)}</p>`).join('')}
  </div>

  <div class="dsec">
    <h4>${esc(RAISE_SAY.title)}</h4>
    ${RAISE_SAY.items.map((x) => `
      <div class="quote"><p class="why" style="margin:0">${esc(x)}</p></div>`).join('')}
    <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(RAISE_SAY.not)}</p></div>
  </div>

  <div class="dsec">
    <h4>${esc(RAISE_FRIENDS.title)}</h4>
    ${RAISE_FRIENDS.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
    <div class="callout"><p style="margin:0">${esc(RAISE_FRIENDS.home)}</p></div>
    <p class="tiny" style="margin:10px 0 0">${esc(RAISE_FRIENDS.honest)}</p>
  </div>

  <div class="dsec">
    <h4>Sons too</h4>
    <p class="bodytext">${esc(RAISE_BOTH)}</p>
  </div>`;
}

function conRowSub(months) {
  if (months == null) return 'What consent requires, and how to be the person they tell';
  if (months < 60) return 'Nobody has to hug anybody, and stop means stop the first time';
  if (months < 108) return 'The rules about touch, and the promise that makes them tell you';
  if (months < 144) return 'Both directions, and that it is usually somebody they know';
  if (months < 192) return 'The real definitions, freezing, and what to do for a friend';
  return 'The practical half, and what to do in the first day if they tell you';
}

function screenConsent(c) {
  const tab = state.conTab || 'told';
  const months = c.months;

  return `
  ${cornerLeaves()}
  ${exitButton()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm">${esc(CON_TITLE)}</h1>
    <p class="sub">${esc(CON_SUB)}</p>
  </div>
  <div class="sc">
    ${subTabs('conTab', tab, CON_TABS)}

    ${tab === 'told' ? conToldTab() : ''}
    ${tab === 'what' ? conWhatTab() : ''}
    ${tab === 'age' ? conAgeTab(months) : ''}
    ${tab === 'raising' ? conRaisingTab() : ''}

    ${conPromiseBlock()}

    ${dsec('Where this comes from', sourceRows(CON_SOURCES))}
    <p class="disclaimer">${esc(CON_DISCLAIMER)}</p>
  </div>`;
}

/* THIS CHILD'S STEPS FIRST, AND ONLY THIS CHILD'S BY DEFAULT.

   Every age card used to be on the screen at once, which meant that
   somebody whose toddler had stopped breathing scrolled past infant
   CPR to reach the right one. On the one screen in this app where
   seconds are the whole point, that was the wrong default.

   The other ages are not deleted, because the child on the floor is
   not always yours. They are one tap away behind a row that says so,
   and the tap is remembered only for as long as the app is open, so
   the next person to open this screen in a hurry gets the fast
   version again. */
function safetyAgeCards(all, mine, key) {
  if (store.safetyAll === key) return all;
  const match = all.filter((c2) => c2.id === mine.id);
  return match.length ? match : all;
}

function safetyMoreBtn(all, key) {
  const open = store.safetyAll === key;
  if (!open && all.length < 2) return '';
  return `
  <button class="btn ghost" style="width:100%;margin-top:4px" data-safety="${esc(key)}">
    ${open ? 'Show only their age again' : 'Steps for a different age'}
  </button>
  ${open ? '' : `<p class="tiny" style="margin-top:7px;text-align:center">The child in front of you is not
    always yours. Every age is still here.</p>`}`;
}

/* ==================================================================
   THE SEED STAGE

   A baby added before they are born. Why it is the same profile, how
   the date is held, and why birthday stays empty until they arrive is
   all in src/data/expecting.js.

   The short version for anybody reading this file: an expecting child
   has `expecting: true` and a `dueDate`, and an empty `birthday`. That
   means every other screen in the app already treats them correctly,
   as a child with no date yet, without any of them needing to know
   this feature exists.
   ================================================================== */

function isExpecting(k) {
  return !!(k && k.expecting && k.dueDate);
}

function expWhereFor(k) {
  return isExpecting(k) ? expWhere(k.dueDate, ciToday()) : null;
}

/* The line under their face on Home, where a born child shows an age. */
function expChipLabel(k) {
  const w = expWhereFor(k);
  return w ? expShortLabel(w) : 'Due date not set yet';
}

/* One tap, then a date, then they are here. Deliberately never
   automatic on the due date: babies do not read calendars, and an app
   that announced a birth which had not happened would be unforgivable. */
function expBornSave() {
  const kid = activeChild();
  if (!kid) return;
  const el = document.getElementById('bornDateIn');
  const v = el && el.value ? el.value : '';
  if (!v || v > ciToday()) { store.expError = 'Pick the day they were born.'; return; }
  if (kid.dueDate && v < ciDayBefore(kid.dueDate, 200)) {
    store.expError = 'That is a long way before the due date. Check the date.';
    return;
  }
  kid.birthday = v;
  kid.expecting = false;
  /* dueDate deliberately kept. See the record comment in newChildRecord. */
  kid.updatedAt = Date.now();
  store.expBorn = false;
  store.expError = '';
  store.birthdaySeen = store.birthdaySeen || {};
  flushStore();
}

function expWeekBlock(k, where) {
  const wk = pregWeek(where.week);
  if (!wk) {
    return `
    <div class="card leafy">
      <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} ${esc(EXP_NOTHING_YET.title)}</p>
      <p class="bodytext" style="margin-top:6px">${esc(EXP_NOTHING_YET.body)}</p>
    </div>`;
  }
  return `
  <div class="card leafy">
    <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Week ${where.week} &middot; ${esc(where.stage.label)}</p>
    <p class="liftline" style="font-size:19px;margin-top:8px">${esc(wk.size)}</p>
    <p class="tiny" style="margin-top:2px">${esc(wk.measure)}</p>
  </div>

  <div class="dsec">
    <h4>What is happening</h4>
    <p class="bodytext">${esc(wk.baby)}</p>
  </div>

  <div class="dsec">
    <h4>What you may feel</h4>
    <p class="bodytext">${esc(wk.you)}</p>
    <p class="tiny" style="margin-top:8px">May, rather than will. Having none of this is just as
      normal as having all of it.</p>
  </div>

  <div class="bpbox surrender">
    <p class="bpbox-t">One thing to do this week</p>
    <p class="bodytext" style="margin-top:8px">${esc(wk.prepare)}</p>
  </div>`;
}

function expCallNowBlock() {
  const c = PREG_CALL_NOW;
  return `
  <div class="card" style="border-left:3px solid var(--concern, #A85A44);margin-top:12px">
    <p class="eyebrow" style="color:#A85A44">${esc(c.title)}</p>
    <p class="tiny" style="margin:7px 0 0">${esc(c.intro)}</p>
    ${store.expSigns ? `
      ${list(c.items, true)}
      <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(c.ambulance)}</p></div>
      <p class="bodytext" style="margin-top:9px;font-style:italic">${esc(c.never)}</p>
    ` : ''}
    <button class="chip" style="margin-top:10px" data-exp="signs">
      ${store.expSigns ? 'Hide the list' : 'Show the list'}
    </button>
  </div>`;
}

function screenExpecting(c) {
  const kid = activeChild();
  if (!kid || !isExpecting(kid)) {
    state.view = null; state.tab = 'home';
    return screenHome(c);
  }
  const first = (kid.name || 'Baby').split(/\s+/)[0];
  const where = expWhereFor(kid);
  const tab = state.expTab || 'week';
  const tabs = [
    { id: 'week', label: 'This week' },
    { id: 'ask', label: 'At your appointment' },
    { id: 'about', label: 'How this works' },
  ];
  const ask = where && where.stage ? expAskFor(where.stage.id) : null;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="offchild">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm">${esc(first)}</h1>
    <p class="sub">${esc(where ? expShortLabel(where) + '. ' + expDueLabel(where) : EXP_PROFILE_SUB)}</p>
  </div>
  <div class="sc">
    ${subTabs('expTab', tab, tabs)}

    ${tab === 'week' ? `
      ${!where ? `
        <div class="card flat"><p class="bodytext">Put a due date on this profile and the weeks
          start.</p></div>` : ''}
      ${where && where.tooEarly ? `
        <div class="card leafy">
          <p class="bodytext">Very early days. The weekly writing starts at week four, which is
            usually about when a test turns positive.</p>
        </div>` : ''}
      ${where && where.overdue ? `
        <div class="bpbox">
          <p class="bpbox-t">${esc(EXP_OVERDUE.title)}</p>
          <p class="bodytext" style="margin-top:8px">${esc(EXP_OVERDUE.body)}</p>
        </div>` : ''}
      ${where && !where.tooEarly && !where.tooLate ? expWeekBlock(kid, where) : ''}

      ${expCallNowBlock()}

      <div class="dsec">
        <h4>${esc(PREG_MOVEMENT.title)}</h4>
        <p class="bodytext">${esc(PREG_MOVEMENT.body)}</p>
      </div>

      <div class="dsec">
        <h4>Getting ready</h4>
        <button class="lrow" data-go="screen" data-id="bag">
          <span class="licon">${icon('bag', 18)}</span>
          <span class="grow">
            <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">The hospital bag</span>
            <span class="tiny" style="display:block;margin-top:2px">It remembers what you have packed</span>
          </span>
          <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
        </button>
        <button class="lrow" data-go="screen" data-id="pregHealth">
          <span class="licon">${icon('heart', 18)}</span>
          <span class="grow">
            <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">Your health while pregnant</span>
            <span class="tiny" style="display:block;margin-top:2px">What to watch, and the infections nobody mentions</span>
          </span>
          <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
        </button>
      </div>
    ` : ''}

    ${tab === 'ask' ? `
      ${ask ? `
        <div class="card leafy">
          <p class="eyebrow">${icon('note', 11, 'var(--sage)')} ${esc(ask.title)}</p>
          <p class="tiny" style="margin-top:6px">${esc(EXP_ASK_NOTE)}</p>
        </div>
        <div class="dsec">
          <h4>Worth asking</h4>
          ${ask.items.map((x) => `
            <div class="quote"><p class="why" style="margin:0">${esc(x)}</p></div>`).join('')}
        </div>` : `
        <div class="card flat"><p class="bodytext">Put a due date on this profile and the questions
          follow the stage you are at.</p></div>`}

      <div class="dsec">
        <h4>Your call, every time</h4>
        <p class="bodytext">${esc(EXP_CHOICE_NOTE)}</p>
      </div>
    ` : ''}

    ${tab === 'about' ? `
      <div class="dsec">
        <h4>${esc(EXP_DATING_NOTE.title)}</h4>
        <p class="bodytext">${esc(EXP_DATING_NOTE.body)}</p>
        <p class="tiny" style="margin-top:9px">${esc(EXP_SCAN_NOTE)}</p>
      </div>

      <div class="dsec">
        <h4>The stages</h4>
        ${EXP_STAGES.map((s) => `
          <div class="quote${where && where.stage && where.stage.id === s.id ? '' : ''}">
            <p class="sit">${esc(s.label)}${where && where.stage && where.stage.id === s.id ? ' (you are here)' : ''}</p>
            <p class="why" style="margin-top:4px">Weeks ${s.from} to ${s.to}. ${esc(s.blurb)}</p>
          </div>`).join('')}
        <p class="tiny" style="margin-top:9px">Birth is the sprout. The same profile carries straight
          on into their childhood from there.</p>
      </div>

      <div class="dsec">
        <h4>The due date</h4>
        <p class="bodytext" style="margin:0 0 10px">${esc(kid.dueDate ? 'Currently ' + cycleDateLabelWithYear(kid.dueDate) + '. ' + EXP_DUE_NOTE : EXP_DUE_NOTE)}</p>
        ${dateSelects('due:' + kid.id, kid.dueDate || '', 1, 2)}
      </div>

      ${dsec('Where this comes from', sourceRows(EXP_SOURCES.concat(PREG_WEEK_SOURCES)))}
    ` : ''}

    <div class="dsec">
      <h4>${esc(EXP_BORN.title)}</h4>
      ${EXP_BORN.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
      ${store.expBorn ? `
        <div class="card" style="margin-top:4px">
          <p class="eyebrow">${esc(EXP_BORN.ask)}</p>
          <input class="inp" id="bornDateIn" type="date" max="${esc(ciToday())}"
            value="${esc(ciToday())}" style="width:100%;margin-top:8px">
          ${store.expError ? `<p class="tiny" style="color:var(--concern);margin:8px 0 0">${esc(store.expError)}</p>` : ''}
          <button class="btn" style="width:100%;margin-top:11px" data-exp="bornsave">${esc(EXP_BORN.confirm)}</button>
          <button class="chip" style="margin-top:9px" data-exp="bornno">${esc(EXP_BORN.cancel)}</button>
        </div>
      ` : `
        <button class="btn" style="width:100%" data-exp="born">
          ${icon('star', 14, '#fff')} ${esc(EXP_BORN_BTN)}
        </button>`}
    </div>

    <p class="disclaimer">${esc(EXP_DISCLAIMER)}</p>
  </div>`;
}

function screenSafety(c) {
  const months = c.months;
  const tab = state.safetyTab || 'cpr';
  const cpr = getCprForAge(months);
  const choke = getChokingForAge(months);

  const tabs = [
    { id: 'cpr', label: 'CPR' },
    { id: 'choking', label: 'Choking' },
    { id: 'alone', label: 'Home alone' },
  ];

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">If something happens</h1>
    <p class="sub">CPR, choking, and knowing when they are ready to be home alone.</p>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} Read this first</p>
      <p class="bodytext" style="margin-top:6px;font-size:15px;line-height:1.55">
        ${esc(CPR_STANCE.headline)}
      </p>
      ${CPR_STANCE.body.map((p) => `
        <p class="bodytext" style="margin:10px 0 0">${esc(p)}</p>`).join('')}
      <div class="callout" style="margin-top:12px">
        <p style="margin:0">${esc(CPR_STANCE.ifYouRememberOneThing)}</p>
      </div>
    </div>

    <div class="chips" style="margin:12px 0">
      ${tabs.map((t) => `
        <button class="chip" data-sub="safetyTab" data-val="${esc(t.id)}"
                aria-pressed="${t.id === tab}">${esc(t.label)}</button>`).join('')}
    </div>

    ${tab === 'cpr' ? `
      <div class="card flat">
        <p class="eyebrow">${icon('info', 11, 'var(--taupe)')} ${esc(WHATS_NEW_2025.headline)}</p>
        ${WHATS_NEW_2025.changes.map((ch) => `
          <p class="bodytext" style="margin:8px 0 0">
            <strong style="color:var(--deep)">${esc(ch.change)}</strong> ${esc(ch.detail)}
          </p>`).join('')}
        <p class="tiny" style="margin-top:8px">${esc(WHATS_NEW_2025.unchanged)}</p>
      </div>

      ${safetyAgeCards(CPR_BY_AGE, cpr, 'cpr').map((card) => `
        <div class="dsec">
          <h4>${esc(card.label)}${card.id === cpr.id ? ' (this is ' + esc(state.name || 'your child') + ')' : ''}</h4>
          <p class="sect" style="margin-top:0">Check first</p>
          ${list(card.checkFirst)}
          <div class="callout" style="margin:10px 0">
            <p style="margin:0"><strong style="color:var(--deep)">Getting help:</strong> ${esc(card.callForHelp)}</p>
          </div>
          <p class="sect">What to do</p>
          ${steps(card.steps)}
          <div class="card flat" style="margin-top:10px">
            <p class="tiny" style="margin:0"><strong style="color:var(--deep)">Hands:</strong> ${esc(card.technique)}</p>
            <p class="tiny" style="margin:4px 0 0"><strong style="color:var(--deep)">Depth:</strong> ${esc(card.depth)}</p>
            <p class="tiny" style="margin:4px 0 0"><strong style="color:var(--deep)">Speed:</strong> ${esc(card.rate)}</p>
            <p class="tiny" style="margin:4px 0 0"><strong style="color:var(--deep)">Ratio:</strong> ${esc(card.ratio)}</p>
          </div>
          <p class="bodytext" style="margin-top:9px">${esc(card.note)}</p>
        </div>`).join('')}
      ${safetyMoreBtn(CPR_BY_AGE, 'cpr')}` : ''}

    ${tab === 'choking' ? `
      <div class="card leafy">
        <p class="eyebrow">${icon('info', 11, 'var(--sage)')} ${esc(CHOKING_STANCE.headline)}</p>
        ${CHOKING_STANCE.body.map((p) => `
          <p class="bodytext" style="margin:9px 0 0">${esc(p)}</p>`).join('')}
      </div>

      ${safetyAgeCards(CHOKING_BY_AGE, choke, 'choke').map((card) => `
        <div class="dsec">
          <h4>${esc(card.label)}${card.id === choke.id ? ' (this is ' + esc(state.name || 'your child') + ')' : ''}</h4>
          ${steps(card.steps)}
          <div class="callout" style="margin-top:10px">
            <p style="margin:0"><strong style="color:var(--deep)">Never:</strong> ${esc(card.neverDo)}</p>
          </div>
        </div>`).join('')}
      ${safetyMoreBtn(CHOKING_BY_AGE, 'choke')}

      ${(() => {
        const d = ANTI_CHOKING_DEVICES;
        return `
        <div class="dsec">
          <div style="display:flex;align-items:flex-start;gap:9px;margin-bottom:8px">
            <h4 style="flex:1;margin:0">Anti choking devices, such as LifeVac</h4>
            ${evidenceTag(d.evidence)}
          </div>

          <div class="card leafy">
            <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(d.headline)}</p>
            <p class="bodytext" style="margin:10px 0 0">${esc(d.whatTheyAre)}</p>
          </div>

          <div class="callout" style="margin-top:10px;border-left:3px solid var(--attention, #B5793F)">
            <p style="margin:0"><strong style="color:var(--deep)">The one rule:</strong> ${esc(d.theOneRule)}</p>
          </div>

          <p class="sect">What the official bodies say</p>
          ${list(d.whatTheBodiesSay)}

          <p class="sect">What the research actually shows</p>
          ${list(d.whatTheResearchShows)}

          <p class="sect">So should you get one</p>
          ${list(d.soShouldYouBuyOne)}

          <div class="card flat" style="margin-top:10px">
            <p class="eyebrow">${icon('info', 11, 'var(--taupe)')} Why this is labelled the way it is</p>
            <p class="bodytext" style="margin-top:5px">${esc(d.whyWeLabelItThisWay)}</p>
          </div>
        </div>`;
      })()}` : ''}

    ${tab === 'alone' ? `
      ${/* THE ANSWER FIRST, WHICHEVER ANSWER APPLIES.

            Home alone used to appear only from seven, on the reasoning
            that it is not a question before then. She pointed out that
            it is: babies get left unattended, and left in cars, and the
            parent who does it is usually not a monster, they are a
            person who has run out of room. So the tab is there at every
            age now, and below seven it answers the real question
            instead of the stated one. */ ''}
      ${showsHomeAloneReadiness(c.months) ? `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(HOME_ALONE.headline)}</p>
      </div>` : `
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(HOME_ALONE_TOO_YOUNG.headline)}</p>
        <p class="bodytext" style="margin-top:10px">${esc(HOME_ALONE_TOO_YOUNG.body)}</p>
      </div>`}

      ${breakingPointBlock(c)}

      ${showsHomeAloneReadiness(c.months) ? `
      <div class="dsec">
        <h4>What the law actually says</h4>
        ${list(HOME_ALONE.theLegalPart)}
      </div>

      <div class="dsec">
        <h4>The questions that answer it better than age does</h4>
        <p class="tiny" style="margin:0 0 9px">${esc(HOME_ALONE.maturityMattersMore.intro)}</p>
        ${list(HOME_ALONE.maturityMattersMore.questions)}
        <div class="callout" style="margin-top:10px">
          <p style="margin:0">${esc(HOME_ALONE.maturityMattersMore.note)}</p>
        </div>
      </div>

      <div class="dsec">
        <h4>Build up to it</h4>
        ${list(HOME_ALONE.buildUpToIt)}
      </div>

      <div class="dsec">
        <h4>The rules to agree before the first time</h4>
        ${list(HOME_ALONE.theRulesToAgree)}
      </div>

      <div class="dsec">
        <h4>Leaving them in charge of a sibling</h4>
        <div class="callout"><p style="margin:0">${esc(HOME_ALONE.siblings)}</p></div>
      </div>` : ''}` : ''}

    ${dsec('Sources', sourceRows(EMERGENCY_SOURCES))}
    <p class="disclaimer">
      Educational information based on the 2025 American Heart Association and American Academy of
      Pediatrics guidelines. It is not a certification and it is not a substitute for an in person class
      or for calling 911.
    </p>
  </div>`;
}

/* -----------------------------------------------------------------
   HOSPITAL BAG
   ----------------------------------------------------------------- */

function screenBag() {
  const prog = getBagProgress(state.bagChecked);
  const tips = getInsiderTips();

  const item = (it) => {
    const on = state.bagChecked.indexOf(it.id) !== -1;
    return `
    <button class="lrow" data-bag="${esc(it.id)}" style="align-items:flex-start;padding:11px 6px">
      <span style="width:22px;height:22px;border-radius:6px;margin-top:1px;flex:0 0 auto;
        display:flex;align-items:center;justify-content:center;
        background:${on ? 'var(--sage)' : 'transparent'};
        border:${on ? 'none' : '1.5px solid var(--line)'}">
        ${on ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>' : ''}
      </span>
      <span class="grow" style="margin-left:11px">
        <span style="display:block;font-size:14px;line-height:1.4;
          color:${on ? 'var(--faint)' : 'var(--ink)'};
          text-decoration:${on ? 'line-through' : 'none'}">${esc(it.label)}
          ${it.essential ? '<span class="tag" style="margin-left:6px">Essential</span>' : ''}</span>
        ${it.note ? `<span class="tiny" style="display:block;margin-top:4px;line-height:1.45">${esc(it.note)}</span>` : ''}
      </span>
    </button>`;
  };

  return `
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm" style="margin-top:6px">Hospital bag</h1>
    <p class="sub">Packed by 36 weeks, so it is one thing you never have to think about again.</p>
  </div>
  <div class="sc">
    <div class="card">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="flex:1">
          <p style="margin:0;font-size:16px;font-weight:600;color:var(--ink)">${prog.done} of ${prog.total} packed</p>
          <p class="tiny" style="margin-top:3px">${prog.essentialsComplete
            ? 'Every essential is in the bag.'
            : esc((prog.essentialsTotal - prog.essentialsDone) + ' of the ' + prog.essentialsTotal + ' essentials still to go.')}</p>
        </div>
        <span style="font-size:24px;color:var(--deep)">${prog.percent}%</span>
      </div>
      <div class="bar" style="margin-top:11px"><i style="width:${prog.percent}%"></i></div>
    </div>

    <div class="card leafy">
      <p class="eyebrow">${icon('clock', 11, 'var(--sage)')} ${esc(PACKING_TIMELINE.headline)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(PACKING_TIMELINE.body)}</p>
      ${steps(PACKING_TIMELINE.steps)}
      <div class="callout">${esc(PACKING_TIMELINE.note)}</div>
    </div>

    ${dsec('Things people wish they had known',
      `<p class="tiny" style="margin-bottom:9px">${tips.length} items on this list come with a note that changes what you pack. They are marked throughout, and here they are together.</p>` +
      list(tips.map((t) => t.label + '. ' + t.note)))}

    ${getCategories().map((cat) => {
      const cp = prog.categories.filter((x) => x.id === cat.id)[0];
      return `
      <p class="sect">${esc(cat.label)}</p>
      <div class="card" style="padding:12px 14px">
        <div style="display:flex;gap:12px;align-items:flex-start">
          <p class="tiny" style="flex:1;margin:0">${esc(cat.intro)}</p>
          <span class="tiny" style="color:${cp && cp.complete ? 'var(--deep)' : 'var(--faint)'}">${cp ? cp.done + '/' + cp.total : ''}</span>
        </div>
        <div style="margin-top:8px;border-top:1px solid var(--line2)">
          ${cat.items.map(item).join('')}
        </div>
      </div>`;
    }).join('')}

    ${dsec('If your birth goes a different way',
      `<p class="tiny" style="margin-bottom:10px">None of these are worst cases. They are common outcomes, and packing for them costs almost nothing.</p>` +
      BAG_ADDITIONS.map((a) => `
        <div class="card flat" style="margin-bottom:9px">
          <p style="margin:0;font-size:14px;font-weight:600;color:var(--ink)">${esc(a.label)}</p>
          <p class="bodytext" style="margin-top:5px">${esc(a.intro)}</p>
          ${list(a.items)}
          <div class="callout">${esc(a.note)}</div>
        </div>`).join(''))}

    ${dsec(SKIP_THESE.headline,
      list(SKIP_THESE.items.map((i) => i.label + '. ' + i.why)) +
      `<div class="callout">${esc(SKIP_THESE.note)}</div>`)}

    ${dsec('Sources', sourceRows(HOSPITAL_BAG_SOURCES))}

    <p class="disclaimer">Hospital policies vary more than you would expect. Ask at a prenatal visit what your unit provides, what they allow, and whether you can eat in labor, rather than assuming any list matches where you are giving birth.</p>
  </div>`;
}

/* -----------------------------------------------------------------
   PUMPING
   ----------------------------------------------------------------- */

const PUMP_TABS = [
  { id: 'flange', label: 'Flange fit' },
  { id: 'schedule', label: 'Schedules' },
  { id: 'output', label: 'Output' },
  { id: 'storage', label: 'Storage' },
  { id: 'lipase', label: 'Soapy milk' },
  { id: 'trouble', label: 'Problems' },
  { id: 'help', label: 'Real help' },
];

/* Community tips carry a visible tag so they never read as clinical. */
/* One evidence tag for the whole app. An earlier duplicate of this
   function lived here and was silently shadowed by the later one, which
   meant the pumping screen was labelling standard practice as an
   unstudied parent tip. Removed, and the odd evidence id it depended on
   was normalized in the data. */

function pumpFlange() {
  const f = FLANGE_FITTING;
  const mm = Number(state.flangeMm);
  const r = mm ? suggestFlangeSize(mm) : null;
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('bulb', 11, 'var(--sage)')} ${esc(f.headline)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(f.whyItMatters)}</p>
    </div>

    ${dsec('How to measure', steps(f.howToMeasure) + `<div class="callout">${esc(f.example)}</div>`)}

    <div class="card">
      <p class="tiny">Nipple width in millimeters, measured at the base, stimulated, without the areola.</p>
      <div class="field" style="margin-top:10px">
        <label class="fieldlabel" for="flangeIn">Your measurement</label>
        <input id="flangeIn" class="fieldinput" type="text" inputmode="numeric"
          autocomplete="off" maxlength="2" value="${esc(state.flangeMm)}" placeholder="17"
          aria-label="Nipple width in millimeters" style="max-width:130px">
      </div>
      ${r ? `
        <p style="margin:14px 0 0;font-size:18px;font-weight:600;color:var(--deep)">Try ${r.low}mm to ${r.high}mm</p>
        <p class="tiny" style="margin-top:4px">${r.commonSizesInRange.length
          ? esc('Sizes commonly sold in that range: ' + r.commonSizesInRange.join('mm, ') + 'mm. Start with ' + r.startWith + 'mm.')
          : 'Nothing standard falls exactly in that range. A silicone insert can bring a larger flange down to where you need it.'}</p>
        <div class="callout">${esc(r.note)}</div>` : ''}
    </div>

    ${dsec('A good fit looks like', list(f.goodFit))}
    ${dsec('Too small', list(f.tooSmall, true))}
    ${dsec('Too large', list(f.tooLarge, true))}

    <div class="card flat">
      <p style="margin:0;font-size:13.5px;font-weight:600;color:var(--ink)">Your size changes</p>
      <p class="bodytext" style="margin-top:5px">${esc(f.keepChecking)}</p>
      <p style="margin:13px 0 0;font-size:13.5px;font-weight:600;color:var(--ink)">If you are between sizes</p>
      <p class="bodytext" style="margin-top:5px">${esc(f.inserts)}</p>
      <p style="margin:13px 0 0;font-size:13.5px;font-weight:600;color:var(--ink)">When to ask</p>
      <p class="bodytext" style="margin-top:5px">${esc(f.askForHelp)}</p>
    </div>

    ${dsec(PUMP_SETTINGS.headline,
      `<p class="bodytext">${esc(PUMP_SETTINGS.intro)}</p>` +
      PUMP_SETTINGS.modes.map((m) => `
        <div class="card flat" style="margin-top:9px">
          <p style="margin:0;font-size:13.5px;font-weight:600;color:var(--ink)">${esc(m.name)}</p>
          <p class="bodytext" style="margin-top:5px">${esc(m.what)}</p>
          <p class="tiny" style="margin-top:5px">${esc(m.how)}</p>
        </div>`).join('') +
      `<div class="callout">${esc(PUMP_SETTINGS.suctionRule)}</div>` +
      `<p class="tiny" style="margin-top:9px">${esc(PUMP_SETTINGS.sessionLength)}</p>`)}

    ${dsec('What helps a letdown', list(PUMP_SETTINGS.helpsLetdown))}
    ${dsec('Keep the parts working', list(PUMP_SETTINGS.maintenance) + `<div class="callout">${esc(PUMP_SETTINGS.suddenDrop)}</div>`)}`;
}

function pumpSchedule() {
  const goals = getGoalsSorted();
  const g = goals.filter((x) => x.id === state.pumpGoal)[0] || goals[0];
  return `
    <div class="card flat">
      <p class="tiny">There is no single right pumping schedule. There is a schedule that matches what you are trying to do. Pick the one that describes you.</p>
      <div class="chips" style="margin-top:10px">
        ${goals.map((x) => `<button class="chip" data-sub="pumpGoal" data-val="${esc(x.id)}"
          aria-pressed="${g.id === x.id}">${esc(x.label)}</button>`).join('')}
      </div>
    </div>

    <p class="sect">${esc(g.label)}</p>
    <div class="card">
      <p class="tiny">${esc(g.who)}</p>
      <div class="callout">${esc(g.principle)}</div>
      ${list(g.guidance)}
    </div>

    <div class="card leafy">
      <p class="eyebrow">${icon('clock', 11, 'var(--sage)')} A day that looks like this</p>
      <div style="margin-top:8px">
        ${g.sampleDay.map((slot, i) => `
          <div style="display:flex;gap:12px;padding:9px 0;${i ? 'border-top:1px solid var(--line2)' : ''}">
            <span style="width:104px;flex:0 0 auto;font-size:13px;color:var(--deep)">${esc(slot.time)}</span>
            <span style="flex:1;font-size:13.5px;color:var(--ink);line-height:1.45">${esc(slot.note || 'Pump')}</span>
          </div>`).join('')}
      </div>
    </div>

    ${g.yourRights ? `
      <div class="card flat" style="border-left:3px solid var(--attention)">
        <p class="eyebrow">${icon('note', 11, 'var(--sage)')} Your rights at work</p>
        <p class="bodytext" style="margin-top:5px">${esc(g.yourRights)}</p>
      </div>` : ''}

    ${g.donating ? `
      <div class="card flat">
        <p class="eyebrow">${icon('heart', 11, 'var(--sage)')} Where donated milk goes</p>
        <p class="bodytext" style="margin-top:5px">${esc(g.donating)}</p>
      </div>` : ''}

    ${g.afterLoss ? `
      <div class="card" style="border-left:3px solid var(--sage)">
        <p class="eyebrow">${icon('heart', 11, 'var(--sage)')} If you are pumping after a loss</p>
        <p class="bodytext" style="margin-top:6px">${esc(g.afterLoss)}</p>
      </div>` : ''}

    <div class="card flat">
      <p class="bodytext" style="font-style:italic">${esc(g.reassurance)}</p>
    </div>

    ${g.sources && g.sources.length ? sourceRows(g.sources) : ''}`;
}

function pumpOutput() {
  const o = OUTPUT_EXPECTATIONS;
  const inc = INCREASING_OUTPUT;
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('bulb', 11, 'var(--sage)')} ${esc(o.headline)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(o.theNumber)}</p>
      <div class="callout">${esc(o.perSession)}</div>
    </div>

    ${dsec('Normal variation', list(o.variation))}
    ${dsec('The trap', `<p class="bodytext">${esc(o.theTrap)}</p>`)}
    ${dsec('About comparing', `<p class="bodytext">${esc(o.comparison)}</p>`)}

    <p class="sect">If you want more milk</p>
    <div class="card flat" style="border-left:3px solid var(--attention)">
      <p class="eyebrow">${icon('search', 11, 'var(--sage)')} Check the equipment first</p>
      <p class="bodytext" style="margin-top:5px">${esc(inc.theFirstThing)}</p>
    </div>
    <div class="card"><p class="bodytext">${esc(inc.howSupplyWorks)}</p></div>

    ${inc.levers.map((l) => `
      <div class="card flat">
        <div style="display:flex;gap:10px;align-items:flex-start">
          <p style="flex:1;margin:0;font-size:14px;font-weight:600;color:var(--ink)">${esc(l.name)}</p>
          ${evidenceTag(l.evidence)}
        </div>
        <p class="bodytext" style="margin-top:6px">${esc(l.detail)}</p>
      </div>`).join('')}

    <p class="sect">Power pumping, one hour</p>
    <div class="card leafy">
      ${inc.powerPumpingSchedule.map((b, i) => `
        <div style="display:flex;gap:12px;padding:9px 0;${i ? 'border-top:1px solid var(--line2)' : ''}">
          <span style="width:104px;flex:0 0 auto;font-size:14px;color:var(--deep)">${b.minutes} minutes</span>
          <span style="flex:1;font-size:14px;color:var(--ink)">${esc(b.action)}</span>
        </div>`).join('')}
      <div class="callout">${powerPumpTotalMinutes()} minutes total, once a day, at the same time. Give it 3 to 7 days before you judge whether it is working.</div>
    </div>

    ${dsec('About supply supplements', `<p class="bodytext">${esc(inc.aboutSupplements)}</p>`)}
    ${dsec('When to get a real evaluation', list(inc.whenToGetHelp, true))}`;
}

function pumpStorage() {
  const m = MILK_STORAGE;
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('clock', 11, 'var(--sage)')} ${esc(m.headline)}</p>
      <p class="tiny" style="margin-top:5px">${esc(m.note)}</p>
    </div>

    <div class="card" style="padding:0;overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:12.5px;min-width:440px">
        <thead><tr>
          ${['', 'Temperature', 'Fresh milk', 'Once thawed'].map((h) => `<th style="text-align:left;padding:10px 11px;
            font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);
            border-bottom:1px solid var(--line2);font-weight:700">${h}</th>`).join('')}
        </tr></thead>
        <tbody>
          ${m.table.map((r, i) => {
            const b = i < m.table.length - 1 ? 'border-bottom:1px solid var(--line2)' : '';
            return `<tr>
              <td style="padding:10px 11px;font-weight:600;color:var(--ink);${b}">${esc(r.place)}</td>
              <td style="padding:10px 11px;${b}">${esc(r.temp)}</td>
              <td style="padding:10px 11px;color:var(--deep);${b}">${esc(r.freshLimit)}</td>
              <td style="padding:10px 11px;${b}">${esc(r.thawedLimit)}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
    ${m.table.map((r) => `<p class="tiny" style="margin-top:6px">${esc(r.place)}. ${esc(r.note)}</p>`).join('')}

    <div class="card flat" style="border-left:3px solid var(--attention);margin-top:12px">
      <p class="eyebrow">${icon('note', 11, 'var(--sage)')} Milk your baby already drank from</p>
      <p class="bodytext" style="margin-top:5px">${esc(m.leftovers)}</p>
    </div>

    ${dsec('Building and rotating a stash', list(m.rules))}
    ${dsec('Thawing and warming', list(m.thawing))}
    ${dsec('If the power goes out', `<p class="bodytext">${esc(m.powerOutage)}</p>`)}`;
}

function pumpLipase() {
  const h = HIGH_LIPASE;
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('bulb', 11, 'var(--sage)')} ${esc(h.headline)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(h.whatIsHappening)}</p>
    </div>
    <div class="card flat"><p class="bodytext">${esc(h.whyItHurts)}</p></div>

    ${dsec('Test before you build a stash', steps(h.testFirst))}

    ${dsec(h.theFix.name,
      `<p class="bodytext">${esc(h.theFix.what)}</p>` +
      steps(h.theFix.steps) +
      `<div class="callout">${esc(h.theFix.cost)}</div>` +
      `<p class="tiny" style="margin-top:9px">${esc(h.theFix.tip)}</p>`)}

    <p class="sect">Other things parents try</p>
    ${h.alternatives.map((a) => `
      <div class="card${a.evidence === 'community' ? ' flat' : ''}">
        <div style="display:flex;gap:10px;align-items:flex-start">
          <p style="flex:1;margin:0;font-size:14px;font-weight:600;color:var(--ink)">${esc(a.name)}</p>
          ${evidenceTag(a.evidence)}
        </div>
        <p class="bodytext" style="margin-top:6px">${esc(a.detail)}</p>
        ${a.caution ? `<div class="callout">${esc(a.caution)}</div>` : ''}
      </div>`).join('')}

    <div class="card flat" style="border-left:3px solid var(--attention)">
      <p class="eyebrow">${icon('search', 11, 'var(--sage)')} Before you pour any of it out</p>
      <p class="bodytext" style="margin-top:5px">${esc(h.notThis)}</p>
    </div>`;
}

function pumpTrouble() {
  return `
    <div class="card flat"><p class="tiny">Pick what is happening. Almost all of these start with checking the equipment.</p></div>
    ${getTroubleshootingSorted().map((t) => {
      const open = state.pumpProblem === t.id;
      return `
      <button class="lrow" data-sub="pumpProblem" data-val="${esc(open ? '' : t.id)}" style="align-items:flex-start">
        <span class="licon">${icon(open ? 'chev' : 'search', 17)}</span>
        <span class="grow"><span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">${esc(t.problem)}</span></span>
      </button>
      ${open ? `
      <div class="card">
        ${dsec('Check these first', list(t.firstChecks))}
        ${dsec('Then what', `<p class="bodytext">${esc(t.thenWhat)}</p>`)}
        ${t.seeSomeone ? `<div class="callout">${esc(t.seeSomeone)}</div>` : ''}
      </div>` : ''}`;
    }).join('')}`;
}

function pumpHelp() {
  const l = LACTATION_SUPPORT;
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('people', 11, 'var(--sage)')} ${esc(l.headline)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(l.insurance)}</p>
    </div>
    <p class="sect">Who is who</p>
    ${l.whoIsWho.map((p) => `
      <div class="card">
        <p style="margin:0;font-size:15px;font-weight:600;color:var(--ink)">${esc(p.credential)}</p>
        <p class="tiny" style="margin-top:2px">${esc(p.full)}</p>
        <p class="bodytext" style="margin-top:8px">${esc(p.what)}</p>
      </div>`).join('')}
    ${dsec('How to actually get seen', list(l.howToAsk))}
    ${dsec('When to call', list(l.whenToCall, true))}
    <div class="card flat"><p class="bodytext" style="font-style:italic">${esc(l.theQuietPart)}</p></div>`;
}

function screenPumping() {
  const tab = state.pumpTab;
  let body = '';
  if (tab === 'flange') body = pumpFlange();
  else if (tab === 'schedule') body = pumpSchedule();
  else if (tab === 'output') body = pumpOutput();
  else if (tab === 'storage') body = pumpStorage();
  else if (tab === 'lipase') body = pumpLipase();
  else if (tab === 'trouble') body = pumpTrouble();
  else body = pumpHelp();

  return `
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm" style="margin-top:6px">Pumping</h1>
    <p class="sub">Start with the flange. It is the fix nobody tells you about and it changes everything.</p>
  </div>
  <div class="sc">
    ${subTabs('pumpTab', tab, PUMP_TABS)}
    ${body}
    ${dsec('Sources', sourceRows(getAllPumpingSources()))}
    <p class="disclaimer">Educational information, not medical advice. Pumping problems are worth a real evaluation, and an IBCLC can usually solve in one visit what people spend weeks struggling with alone. If feeding hurts, or your baby is not gaining, call rather than researching.</p>
  </div>`;
}

/* -----------------------------------------------------------------
   POSTPARTUM
   ----------------------------------------------------------------- */

const PP_TABS = [
  { id: 'timeline', label: 'Week by week' },
  { id: 'nobody', label: 'Nobody told me' },
  { id: 'mind', label: 'How you are' },
  { id: 'supplies', label: 'What to have' },
  { id: 'help', label: 'Letting people help' },
];

function supportLine(l) {
  return `
  <div class="card">
    <p style="margin:0;font-size:14px;font-weight:600;color:var(--ink)">${esc(l.name)}</p>
    <a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer"
      style="display:block;margin-top:5px;font-size:19px;color:var(--deep);text-decoration:none">${esc(l.contact)}</a>
    <p class="tiny" style="margin-top:5px">${esc(l.detail)}</p>
    <p class="tiny" style="margin-top:3px;color:var(--taupe2)">${esc(l.forWho)}</p>
  </div>`;
}

function ppTimeline() {
  const stages = getTimeline();
  const s = stages.filter((x) => x.id === state.ppStage)[0] || stages[0];
  return `
    <div class="card flat">
      <p class="tiny">Recovery is longer than anyone tells you, and it is not a straight line. Pick where you are.</p>
      <div class="chips" style="margin-top:10px">
        ${stages.map((x) => `<button class="chip" data-sub="ppStage" data-val="${esc(x.id)}"
          aria-pressed="${s.id === x.id}">${esc(x.window)}</button>`).join('')}
      </div>
    </div>
    <p class="sect">${esc(s.label)}</p>
    <div class="card leafy"><p class="bodytext">${esc(s.body)}</p></div>
    ${dsec('What to expect', list(s.expect))}
    ${dsec('What helps', list(s.doThis))}
    ${s.flag ? `
      <div class="card flat" style="border-left:3px solid var(--attention)">
        <p class="eyebrow">${icon('note', 11, 'var(--sage)')} Worth paying attention to</p>
        <p class="bodytext" style="margin-top:5px">${esc(s.flag)}</p>
      </div>` : ''}`;
}

function ppNobody() {
  return `
    <div class="card flat"><p class="tiny">None of this is a complication. It is the ordinary version of recovery that somehow never gets said out loud, so people assume it is only happening to them.</p></div>
    ${NOBODY_WARNED_ME.map((e) => `
      <div class="card${e.sensitive ? ' flat' : ''}"${e.sensitive ? ' style="border-left:3px solid var(--attention)"' : ''}>
        <p style="margin:0;font-size:14.5px;font-weight:600;color:var(--ink)">${esc(e.thing)}</p>
        <p class="bodytext" style="margin-top:7px">${esc(e.detail)}</p>
      </div>`).join('')}`;
}

function ppMind() {
  const m = PERINATAL_MENTAL_HEALTH;
  return `
    <p class="sect">If you need someone right now</p>
    ${getMentalHealthLines().map(supportLine).join('')}
    <div class="card" style="background:#FCF2EE;border:1.5px solid #DDA192;box-shadow:none">
      <p class="eyebrow" style="color:#A85A44">Go now, not at your next appointment</p>
      <p class="bodytext" style="margin-top:5px">${esc(m.getHelpNow)}</p>
    </div>
    <p class="sect">${esc(m.headline)}</p>
    <div class="card leafy"><p class="bodytext">${esc(m.intro)}</p></div>
    <div class="card">
      <p style="margin:0;font-size:13.5px;font-weight:600;color:var(--ink)">Baby blues</p>
      <p class="bodytext" style="margin-top:5px">${esc(m.babyBluesVsMore.babyBlues)}</p>
      <p style="margin:13px 0 0;font-size:13.5px;font-weight:600;color:var(--ink)">Something more than that</p>
      <p class="bodytext" style="margin-top:5px">${esc(m.babyBluesVsMore.somethingMore)}</p>
    </div>
    ${dsec('What it can look like', list(m.whatItLooksLike) +
      `<div class="callout">It does not always look like sadness. Rage, numbness and relentless anxiety are all forms of this, and they are the ones people miss in themselves.</div>`)}
    ${dsec('Partners get this too', `<p class="bodytext">${esc(m.partnersToo)}</p>`)}
    ${dsec('The reason people do not tell anyone', `<p class="bodytext">${esc(m.theThingPeopleFear)}</p>`)}
    ${dsec('What helps', list(m.whatHelps))}`;
}

function ppSupplies() {
  const r = RECOVERY_SUPPLIES;
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('bulb', 11, 'var(--sage)')} ${esc(r.headline)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(r.intro)}</p>
    </div>
    <div class="card">
      ${r.items.map((it, i) => `
        <div style="padding:10px 0;${i ? 'border-top:1px solid var(--line2)' : ''}">
          <p style="margin:0;font-size:14px;color:var(--ink)">${esc(it.label)}</p>
          <p class="tiny" style="margin-top:3px">${esc(it.why)}</p>
        </div>`).join('')}
    </div>
    ${dsec('If you had a cesarean', list(r.forCesarean))}`;
}

function ppHelp() {
  const a = ASKING_FOR_HELP;
  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('people', 11, 'var(--sage)')} ${esc(a.headline)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(a.intro)}</p>
    </div>
    ${dsec('Things to actually ask for', list(a.specificAsks))}
    ${dsec('What you are allowed to say no to', list(a.boundaries))}
    ${dsec('For partners', list(a.forPartners))}`;
}

function screenPostpartum(c) {
  const tab = state.ppTab;
  let body = '';
  if (tab === 'timeline') body = ppTimeline();
  else if (tab === 'nobody') body = ppNobody();
  else if (tab === 'mind') body = ppMind();
  else if (tab === 'supplies') body = ppSupplies();
  else body = ppHelp();

  const days = c.summary.age && !c.summary.age.isUnborn ? c.summary.age.totalDays : null;
  const now = getStageForDaysPostpartum(days);

  return `
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm" style="margin-top:6px">You, after</h1>
    <p class="sub">Pregnancy gets forty weeks of attention. This gets one appointment. Here is the rest.</p>
  </div>
  <div class="sc">
    ${now ? `
    <div class="card leafy">
      <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Where you are</p>
      <p style="margin:3px 0 0;font-size:15.5px;font-weight:600;color:var(--ink)">${esc(now.label)}</p>
      <p class="tiny" style="margin-top:3px">${esc(now.window)}</p>
    </div>` : ''}
    ${subTabs('ppTab', tab, PP_TABS)}
    ${body}
    <p class="sect">Support lines</p>
    ${MATERNAL_SUPPORT_LINES.map(supportLine).join('')}
    ${dsec('Sources', sourceRows(POSTPARTUM_SOURCES))}
    <p class="disclaimer">Educational information, not medical advice. The urgent warning signs, including postpartum preeclampsia, hemorrhage and infection, apply for at least a year after birth. If something feels wrong, call. You are allowed to be the one who is worried.</p>
  </div>`;
}

/* -----------------------------------------------------------------
   PREGNANCY HEALTH
   ----------------------------------------------------------------- */

function screenPregHealth() {
  return `
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm" style="margin-top:6px">Looking after yourself</h1>
    <p class="sub">Preventable, treatable, and mostly never mentioned. That is the only reason these are here.</p>
  </div>
  <div class="sc">
    ${getInfectionsSorted().map((i) => `
      <button class="lrow" data-go="infection" data-id="${esc(i.id)}" style="align-items:flex-start">
        <span class="licon">${icon('search', 17)}</span>
        <span class="grow">
          <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);line-height:1.3">${esc(i.label)}</span>
          <span class="tiny" style="display:block;margin-top:3px;line-height:1.4">${esc(i.headline)}</span>
        </span>
        <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
      </button>`).join('')}

    <p class="sect">${esc(PREGNANCY_VACCINES.label)}</p>
    <div class="card leafy"><p class="bodytext">${esc(PREGNANCY_VACCINES.body)}</p></div>
    ${PREGNANCY_VACCINES.during.map((v) => `
      <div class="card">
        <p style="margin:0;font-size:15px;font-weight:600;color:var(--ink)">${esc(v.label)}</p>
        <div class="callout">${esc(v.timing)}</div>
        <p class="bodytext" style="margin-top:9px">${esc(v.why)}</p>
      </div>`).join('')}
    ${dsec('Before pregnancy, not during',
      PREGNANCY_VACCINES.before.map((v) => `
        <div class="card flat" style="margin-bottom:8px">
          <p style="margin:0;font-size:14px;font-weight:600;color:var(--ink)">${esc(v.label)}</p>
          <p class="tiny" style="margin-top:4px">${esc(v.note)}</p>
        </div>`).join(''))}

    <p class="sect">${esc(SUPPLEMENTS_AND_MEDS.label)}</p>
    <div class="card" style="background:#FCF2EE;border:1.5px solid #DDA192;box-shadow:none">
      <p class="eyebrow" style="color:#A85A44">${esc(SUPPLEMENTS_AND_MEDS.theBigOne.headline)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(SUPPLEMENTS_AND_MEDS.theBigOne.body)}</p>
    </div>
    <div class="card">
      ${SUPPLEMENTS_AND_MEDS.supplements.map((s, i) => `
        <div style="padding:10px 0;${i ? 'border-top:1px solid var(--line2)' : ''}">
          <p style="margin:0;font-size:14px;color:var(--ink)">${esc(s.label)}</p>
          <p class="tiny" style="margin-top:3px">${esc(s.note)}</p>
        </div>`).join('')}
    </div>
    ${dsec('Bring these to your appointment',
      SUPPLEMENTS_AND_MEDS.askYourProvider.map((q) => `<div class="quote"><p class="q">${esc('“' + q + '”')}</p></div>`).join(''))}

    ${dsec('Sources', sourceRows(getAllHealthSources()))}
    <p class="disclaimer">Educational information, not medical advice. Testing, vaccine and medication decisions belong to an obstetric provider who knows your pregnancy.</p>
  </div>`;
}

function viewInfection(id) {
  const i = getInfection(id);
  if (!i) return emptyScreen('That topic could not be found.');
  return `
  <div class="sc-head">
    <button class="back" data-back="pregHealth">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm" style="margin-top:6px">${esc(i.label)}</h1>
    <p class="sub">${esc(i.headline)}</p>
  </div>
  <div class="sc">
    ${i.timeCritical ? `
    <div class="card" style="background:#FCF2EE;border:1.5px solid #DDA192;box-shadow:none">
      <p class="eyebrow" style="color:#A85A44">This one has a deadline</p>
      <p class="bodytext" style="margin-top:5px">${esc(i.timeCritical)}</p>
    </div>` : ''}
    <div class="card leafy">
      <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Why it matters</p>
      <p class="bodytext" style="margin-top:5px">${esc(i.whyItMatters)}</p>
    </div>
    ${dsec('How it spreads', list(i.howYouGetIt))}
    ${dsec('What lowers the risk', list(i.prevention))}
    ${i.testing ? dsec('Testing', `<p class="bodytext">${esc(i.testing)}</p>`) : ''}
    ${i.treatment ? dsec('Treatment', `<p class="bodytext">${esc(i.treatment)}</p>`) : ''}
    ${dsec('Bring these to your appointment',
      i.askYourProvider.map((q) => `<div class="quote"><p class="q">${esc('“' + q + '”')}</p></div>`).join(''))}
    ${dsec('Sources', sourceRows(i.sources))}

    ${i.relatedPrograms && i.relatedPrograms.length ? `
      <div class="dsec">
        <h4>Where testing exists</h4>
        ${i.relatedPrograms.map((rp) => `
          <div class="card" style="margin-bottom:10px">
            <div style="display:flex;align-items:flex-start;gap:9px">
              <span style="flex:1;font-size:14px;font-weight:600;color:var(--ink)">${esc(rp.org)}</span>
              <span class="tag" style="color:var(--attention);border-color:var(--attention)">Connected to this app</span>
            </div>
            <p class="bodytext" style="margin-top:7px">${esc(rp.label)}</p>
            ${rp.note ? `<p class="tiny" style="margin-top:7px;line-height:1.55">${esc(rp.note)}</p>` : ''}
            ${rp.relationship ? `
              <p class="tiny" style="margin-top:7px;line-height:1.55;color:var(--deep2)">${esc(rp.relationship)}</p>` : ''}
            ${rp.url
              ? `<a class="chip" href="${esc(rp.url)}" target="_blank" rel="noopener noreferrer"
                   style="display:inline-block;margin-top:10px;text-decoration:none">Visit ${esc(rp.org)}</a>`
              : `<p class="tiny" style="margin-top:10px;font-style:italic">Link coming once the site is live.</p>`}
          </div>`).join('')}
      </div>` : ''}

    <p class="disclaimer">Educational information, not medical advice. Testing and treatment decisions belong to an obstetric provider who knows your pregnancy and your history.</p>
  </div>`;
}


/* =================================================================
   ASK
   A question box that answers out of this app's own library.

   WHY IT SEARCHES INSTEAD OF GENERATING
   Every answer here is content that was written against a named
   source and reviewed. A general language model answering "my baby
   has a fever, what do I do" on a public parenting site would be
   confidently wrong some of the time, and the cost of being wrong in
   this subject is a child who does not get seen. So this returns the
   real entry, with its sources attached, rather than a paraphrase of
   it.

   SAFETY RUNS BEFORE MATCHING
   Emergency and crisis wording is checked first and rendered above
   any result, because a parent typing "baby not breathing" must not
   have to read a list of search results to find 911.
   ================================================================= */

/* Words that mean stop searching and show the emergency card. */
const ASK_EMERGENCY = [
  'not breathing', 'cant breathe', "can't breathe", 'stopped breathing', 'blue lips',
  'turning blue', 'unresponsive', 'wont wake', "won't wake", 'unconscious', 'limp',
  'seizure', 'seizing', 'choking', 'choke', 'swallowed a battery', 'button battery',
  'overdose', 'poison', 'drowned', 'drowning', 'head injury', 'gasping',
];

/* Words that mean show the crisis lines, for the parent rather than the child. */
const ASK_CRISIS = [
  'kill myself', 'end my life', 'want to die', 'suicidal', 'suicide', 'hurt myself',
  'harm myself', 'self harm', 'hurt my baby', 'harm my baby', 'shake the baby',
  'shaking my baby', 'better off without me',
];

/* Stop words carry no signal and would otherwise match everything. */
const ASK_STOP = new Set(('a an the and or but if is are was were be been being do does did ' +
  'my me i we our you your he she it they them his her its their this that these those ' +
  'to of in on at for with about from by as so than then there here what when where why ' +
  'how who which can could should would will just very really get got have has had not ' +
  'no yes any some all more most much many lot help please need want').split(' '));

function askTokens(q) {
  return String(q || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(function (w) { return w.length > 2 && !ASK_STOP.has(w); });
}

/* Everything the app can answer from, flattened into one searchable
   list. Each entry says how to open the real thing. */
function askCorpus(c) {
  var out = [];
  var add = function (o) { out.push(o); };

  RIGHT_NOW.forEach(function (s) {
    add({
      kind: 'Right Now', title: s.label, blurb: s.subtitle,
      go: 'situation', id: s.id, weight: 1.35,
      text: [s.label, s.subtitle, s.category,
             s.whatIsHappening && s.whatIsHappening.headline,
             s.whatIsHappening && s.whatIsHappening.body,
             (s.tryRightNow || []).join(' '),
             (s.callDoctorIf || []).join(' ')].filter(Boolean).join(' '),
    });
  });

  CARE_TOPICS.forEach(function (t) {
    add({
      kind: 'Care topic', title: t.label, blurb: t.summary,
      go: 'topic', id: t.id, weight: 1.15,
      text: [t.label, t.shortLabel, t.summary, (t.keyPoints || []).join(' '),
             (t.myths || []).map(function (m) { return m.myth + ' ' + m.truth; }).join(' '),
             (t.redFlags || []).join(' ')].join(' '),
    });
  });

  DEVELOPMENT_CONTENT.forEach(function (e) {
    add({
      kind: 'What is happening', title: e.title, blurb: e.summary,
      go: 'content', id: e.id, weight: 1.1,
      text: [e.title, e.summary, e.category, (e.whatYouMayNotice || []).join(' '),
             (e.whyItHappens || []).join(' '), (e.parentStrategies || []).join(' ')].join(' '),
    });
  });

  PUMPING_TROUBLESHOOTING.forEach(function (t) {
    add({
      kind: 'Pumping', title: t.problem, blurb: (t.firstChecks || [])[0] || '',
      go: 'screen', id: 'pumping', sub: ['pumpTab', 'trouble'], weight: 1.3,
      text: [t.problem, (t.firstChecks || []).join(' '), t.thenWhat, t.seeSomeone].filter(Boolean).join(' '),
    });
  });

  PUMPING_GOALS.forEach(function (g) {
    add({
      kind: 'Pumping', title: g.label, blurb: g.who,
      go: 'screen', id: 'pumping', sub: ['pumpGoal', g.id], weight: 1.1,
      text: [g.label, g.who, g.principle, (g.guidance || []).join(' '), g.yourRights,
             g.donating, g.afterLoss].filter(Boolean).join(' '),
    });
  });

  [[FLANGE_FITTING, 'flange'], [PUMP_SETTINGS, 'flange'], [INCREASING_OUTPUT, 'output'],
   [OUTPUT_EXPECTATIONS, 'output'], [MILK_STORAGE, 'storage'], [HIGH_LIPASE, 'lipase'],
   [LACTATION_SUPPORT, 'help']].forEach(function (pair) {
    var o = pair[0];
    add({
      kind: 'Pumping', title: o.label || o.headline, blurb: o.headline,
      go: 'screen', id: 'pumping', sub: ['pumpTab', pair[1]], weight: 1.2,
      text: JSON.stringify(o).toLowerCase(),
    });
  });

  RECOVERY_TIMELINE.forEach(function (s) {
    add({
      kind: 'Fourth trimester', title: s.label, blurb: s.window,
      go: 'screen', id: 'postpartum', sub: ['ppStage', s.id], weight: 1.1,
      text: [s.label, s.window, s.body, (s.expect || []).join(' '), (s.doThis || []).join(' '), s.flag].filter(Boolean).join(' '),
    });
  });

  NOBODY_WARNED_ME.forEach(function (e) {
    add({
      kind: 'Fourth trimester', title: e.thing, blurb: e.detail.slice(0, 110) + '...',
      go: 'screen', id: 'postpartum', sub: ['ppTab', 'nobody'], weight: 1.2,
      text: e.thing + ' ' + e.detail,
    });
  });

  add({
    kind: 'Fourth trimester', title: PERINATAL_MENTAL_HEALTH.headline,
    blurb: 'Baby blues, postpartum depression and anxiety, and what helps',
    go: 'screen', id: 'postpartum', sub: ['ppTab', 'mind'], weight: 1.25,
    text: JSON.stringify(PERINATAL_MENTAL_HEALTH).toLowerCase(),
  });

  INFECTIONS.forEach(function (i) {
    add({
      kind: 'In pregnancy', title: i.label, blurb: i.headline,
      go: 'infection', id: i.id, weight: 1.15,
      text: [i.label, i.headline, i.whyItMatters, (i.howYouGetIt || []).join(' '),
             (i.prevention || []).join(' '), i.testing, i.timeCritical].filter(Boolean).join(' '),
    });
  });

  add({
    kind: 'Hospital bag', title: 'Hospital bag checklist',
    blurb: 'What to pack, what the hospital already gives you, and what people forget',
    go: 'screen', id: 'bag', weight: 1.4,
    text: 'hospital bag pack packing what to bring birth labor delivery checklist ' +
          'suitcase overnight going home cesarean induction nicu ' +
          getCategories().map(function (c2) { return c2.label + ' ' + c2.intro; }).join(' '),
  });

  getAllItems().forEach(function (it) {
    add({
      kind: 'Hospital bag', title: it.label, blurb: it.note || it.categoryLabel,
      go: 'screen', id: 'bag', weight: 0.85,
      text: [it.label, it.note, it.categoryLabel].filter(Boolean).join(' '),
    });
  });

  SLEEP_DISRUPTIONS.forEach(function (d) {
    add({
      kind: 'Sleep', title: d.label, blurb: d.what,
      go: 'tab', id: 'sleep', weight: 1.15,
      text: [d.label, (d.aliases || []).join(' '), d.what, d.why, (d.tryThis || []).join(' ')].join(' '),
    });
  });

  return out;
}

/* Scores a query against the corpus. Title hits count for far more
   than body hits, and an exact phrase in the title wins outright. */
function askSearch(query, c) {
  var toks = askTokens(query);
  if (!toks.length) return [];
  var phrase = String(query).toLowerCase().trim();

  return askCorpus(c)
    .map(function (item) {
      var title = item.title.toLowerCase();
      var body = item.text.toLowerCase();
      var score = 0;
      toks.forEach(function (t) {
        if (title.indexOf(t) !== -1) score += 9;
        var m = body.split(t).length - 1;
        if (m) score += Math.min(m, 4) * 1.6;
      });
      if (phrase.length > 6 && title.indexOf(phrase) !== -1) score += 24;
      // Reward covering more of what was asked, not just repeating one word.
      var covered = toks.filter(function (t) {
        return title.indexOf(t) !== -1 || body.indexOf(t) !== -1;
      }).length;
      score *= 0.55 + 0.45 * (covered / toks.length);
      return { item: item, score: score * (item.weight || 1) };
    })
    .filter(function (r) { return r.score > 6; })
    .sort(function (a, b) { return b.score - a.score; })
    .slice(0, 7);
}

function askHit(q, list) {
  var s = String(q).toLowerCase();
  return list.some(function (w) { return s.indexOf(w) !== -1; });
}

const ASK_SUGGESTIONS = [
  'Why does my baby cry every evening',
  'How do I know my flange fits',
  'My frozen milk smells like soap',
  'How much sleep does she need',
  'What are retractions',
  'I feel angry all the time',
  'When do I start solids',
  'What should I pack for the hospital',
];

function askBlock(c) {
  var q = state.askQuery || '';
  var asked = state.askAsked || '';
  var results = asked ? askSearch(asked, c) : [];
  var emergency = asked && askHit(asked, ASK_EMERGENCY);
  var crisis = asked && askHit(asked, ASK_CRISIS);

  var card = function (r) {
    var it = r.item;
    var attrs = 'data-go="' + esc(it.go) + '" data-id="' + esc(it.id) + '"';
    if (it.sub) attrs += ' data-asksub="' + esc(it.sub[0]) + '" data-asksubval="' + esc(it.sub[1]) + '"';
    return `
    <button class="lrow" ${attrs} style="align-items:flex-start">
      <span class="licon">${icon('bulb', 17)}</span>
      <span class="grow">
        <span class="tag" style="margin-bottom:5px;display:inline-block">${esc(it.kind)}</span>
        <span style="display:block;font-size:14.5px;font-weight:600;color:var(--ink);line-height:1.35">${esc(it.title)}</span>
        ${it.blurb ? `<span class="tiny" style="display:block;margin-top:4px;line-height:1.5">${esc(it.blurb)}</span>` : ''}
      </span>
      <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
    </button>`;
  };

  return `
    <div class="card">
      <div class="field" style="margin:0">
        <label class="fieldlabel sronly" for="askIn">Your question</label>
        <input id="askIn" class="fieldinput" type="text" autocomplete="off"
          placeholder="Why won't she sleep through the night?"
          value="${esc(q)}"
          style="font-size:16px;padding:13px 14px">
      </div>
      <button class="btn" style="margin-top:11px" data-ask="go">
        ${icon('search', 15, '#fff')} Find the answer
      </button>
    </div>

    ${!asked ? `
      <p class="sect">Things people ask</p>
      <div class="chips" style="gap:7px">
        ${ASK_SUGGESTIONS.map(function (s) {
          return '<button class="chip" data-ask="try" data-q="' + esc(s) + '">' + esc(s) + '</button>';
        }).join('')}
      </div>
    ` : ''}

    ${crisis ? `
    <div class="card" style="background:#FCF2EE;border:1.5px solid #DDA192;box-shadow:none;margin-top:16px">
      <p class="eyebrow" style="color:#A85A44">Please talk to someone right now</p>
      <p class="bodytext" style="margin-top:5px">You do not have to be in crisis to call, and telling someone is the way through rather than a risk to your family.</p>
      <div style="margin-top:12px">
        ${MATERNAL_SUPPORT_LINES.map(function (l) {
          return '<div style="padding:9px 0;border-top:1px solid var(--line2)">' +
            '<p style="margin:0;font-size:13.5px;font-weight:600;color:var(--ink)">' + esc(l.name) + '</p>' +
            '<a href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer" style="font-size:18px;color:var(--deep);text-decoration:none">' + esc(l.contact) + '</a>' +
            '<p class="tiny" style="margin-top:3px">' + esc(l.detail) + '</p></div>';
        }).join('')}
      </div>
      <div class="callout" style="margin-top:12px">If you are thinking about harming yourself or your baby, call or text 988, or go to an emergency room. Postpartum psychosis is rare, it is a medical emergency, and it is treatable.</div>
    </div>` : ''}

    ${emergency ? `
    <div class="card" style="background:#FCF2EE;border:1.5px solid #DDA192;box-shadow:none;margin-top:16px">
      <p class="eyebrow" style="color:#A85A44">${esc(ALWAYS_EMERGENCY.title)}</p>
      <ul class="dlist warn" style="margin-top:8px">
        ${ALWAYS_EMERGENCY.items.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('')}
      </ul>
      <p class="tiny" style="margin-top:10px;color:#8A5A4A">${esc(ALWAYS_EMERGENCY.poison)}</p>
    </div>` : ''}

    ${asked ? (results.length ? `
      <p class="sect">${results.length} ${results.length === 1 ? 'answer' : 'answers'} for "${esc(asked)}"</p>
      ${results.map(card).join('')}
      <div class="card flat">
        <p class="tiny">These are entries from this app, not generated text. Each one opens the full version with what to try, when to call, and where it came from.</p>
      </div>
    ` : `
      <div class="empty">
        ${growthSVG(2, 70)}
        <p><strong style="color:var(--ink)">Nothing in the app matches that yet.</strong></p>
        <p>Try fewer words, or the way you would say it to a friend. Everything else about ${esc(state.name || 'your child')} is one tap away on their own tab.</p>
      </div>
    `) : ''}
  `;
}


/* =================================================================
   COMMUNITY

   The one place in the app where parents can reach each other, which
   makes it the one place where safety design matters most.

   NOTHING HERE IS LIVE YET. The posts below are written examples,
   labelled as examples on the screen, because a prototype that shows
   invented people as though they were real users is a lie that gets
   harder to walk back the longer it sits there.

   THE PRESENCE STRIP IS THE POINT
   At 3am a parent pumping alone is not looking for advice, they are
   looking for evidence that they are not the only person awake. A
   count of how many people are doing the same thing right now does
   more for that than any thread.
   ================================================================= */

const COMMUNITY_ROOMS = [
  { id: 'nights', label: 'The Night Shift', blurb: 'For whoever is awake right now', icon: 'moon' },
  { id: 'pumping', label: 'Pumping', blurb: 'Flanges, output, freezer stashes', icon: 'drop' },
  { id: 'fourth', label: 'Fourth Trimester', blurb: 'The first twelve weeks', icon: 'heart' },
  { id: 'feeding', label: 'Feeding', blurb: 'However you are doing it', icon: 'utensils' },
  { id: 'toddlers', label: 'Big Feelings', blurb: 'Toddlers and preschoolers', icon: 'people' },
  { id: 'teens', label: 'Teen Years', blurb: 'The ones who stopped talking', icon: 'chat' },
];

/* Evidence chips, so a parent can tell protocol from folklore at a
   glance without either one being hidden. */
function evidenceTag(id) {
  const e = getEvidenceLabel(id);
  const color = { established: 'var(--sage)', mixed: 'var(--taupe)',
                  community: 'var(--blush, #B58B7E)', changed: 'var(--attention)' }[e.id] || 'var(--taupe)';
  return `<span class="tag" style="color:${color};border-color:${color}">${esc(e.label)}</span>`;
}

function wisdomCard(w) {
  return `
  <div class="card" style="margin-bottom:10px">
    <div style="display:flex;align-items:flex-start;gap:9px">
      <span style="flex:1;font-size:14px;font-weight:600;color:var(--ink);line-height:1.35">${esc(w.title)}</span>
      ${evidenceTag(w.evidence)}
    </div>
    <p class="bodytext" style="margin-top:7px">${esc(w.what)}</p>
    ${w.note ? `<p class="tiny" style="margin-top:7px;line-height:1.55">${esc(w.note)}</p>` : ''}
  </div>`;
}

function screenWisdom() {
  const cw = CLOG_WISDOM;
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <p class="eyebrow" style="margin-top:6px">Community</p>
    <h1 class="title sm">What worked for us</h1>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext">${esc(WISDOM_DISCLAIMER)}</p>
    </div>

    <p class="sect">What people try for output</p>
    <p class="tiny" style="margin:-4px 0 10px">
      Sorted by how well supported it is, not by how often it comes up. The dull ones at the top are the
      ones that actually move supply.
    </p>
    ${getOutputWisdom().map(wisdomCard).join('')}

    <p class="sect">Clogs and mastitis</p>
    <div class="card" style="border-left:3px solid var(--attention)">
      <p class="eyebrow">${icon('info', 11, 'var(--attention)')} ${esc(cw.headline)}</p>
      <p class="bodytext" style="margin-top:6px">${esc(cw.why)}</p>
      <p class="bodytext" style="margin-top:9px;font-style:italic">${esc(cw.kindNote)}</p>
    </div>

    ${dsec('What the current protocol says to do', cw.nowRecommended.map(wisdomCard).join(''))}
    ${dsec('What it moved away from', cw.movedAway.map(wisdomCard).join(''))}

    <div class="dsec">
      <h4>Call someone if</h4>
      ${list(cw.whenToCall, true)}
    </div>
    ${sourceRows(cw.sources)}

    <p class="sect">The kit</p>
    <div class="card flat">
      <p class="bodytext">${esc(KIT_STANCE)}</p>
    </div>
    ${PARENT_KIT.map((k) => `
      <div class="card" style="margin-bottom:10px">
        <div style="display:flex;align-items:flex-start;gap:9px">
          <span style="flex:1;font-size:14px;font-weight:600;color:var(--ink);line-height:1.35">${esc(k.title)}</span>
          ${evidenceTag(k.evidence)}
        </div>
        <p class="bodytext" style="margin-top:7px">${esc(k.forWhat)}</p>
        <p class="tiny" style="margin-top:7px;line-height:1.55"><strong style="color:var(--deep)">What to look for:</strong> ${esc(k.lookFor)}</p>
      </div>`).join('')}

    <p class="disclaimer">${esc(WISDOM_DISCLAIMER)}</p>
  </div>`;
}

/* Kept for layout reference. Not rendered, because invented people
   presented as real users is a claim that gets harder to walk back. */
const COMMUNITY_SAMPLE = [
  {
    room: 'The Night Shift', who: 'A parent, 3 weeks in', when: '2:14 AM',
    body: 'Third night in a row of hourly wakes. I know it passes. Right now it does not feel like it passes.',
    replies: 12, hearts: 41,
  },
  {
    room: 'Pumping', who: 'A parent, 4 months in', when: '11:02 PM',
    body: 'Measured my nipple like the app said and I have been using a flange 7mm too big this whole time. Four months. No wonder it hurt.',
    replies: 23, hearts: 88,
  },
  {
    room: 'Fourth Trimester', who: 'A parent, 5 weeks in', when: '6:47 AM',
    body: 'Nobody told me about the night sweats. I woke up soaked and thought something was wrong with me.',
    replies: 17, hearts: 52,
  },
];

const COMMUNITY_RULES = [
  'No medical advice, ever. Share what happened to you, not what someone else should do.',
  'Anyone can say "I do not know". Nobody has to have an answer.',
  'No photos of other people’s children, and no screenshots of other rooms.',
  'Disagree with the idea, not the person.',
  'Report anything that worries you. A person reads every report.',
];

/* =================================================================
   THE SHARED FEED

   The part that makes "Share to Community" true. Everything about why
   it works this way is in src/data/feed.js, and the rule it rests on
   is in firestore.rules: nothing is public until a person approves it.

   THIS LAYER NEVER DECIDES WHO CAN SEE WHAT. It asks, and the rules
   answer. An app that enforced its own visibility would be one bug away
   from a private post in front of strangers.
   ================================================================= */

const feed = {
  posts: [],        // live ones, from everybody
  mine: [],         // this account's own, whatever their status
  queue: [],        // held by the filter, moderators only
  reported: [],     // already up, but somebody reported it
  loaded: false,
  loading: false,
  error: '',
  isMod: false,
  modChecked: false,
  busy: '',         // the id of whatever is mid flight
  reporting: '',    // the id being reported, so the reasons show
  view: 'feed',     // feed | flies | rooms | mine | queue
  room: null,       // null means everything, '' means the main feed, otherwise a group id
  /* THE THING THAT STOPS THE ROOM EATING ITSELF.

     The screen asks for the feed whenever it is not loaded and not
     already loading. A failed load used to leave both of those false,
     so the next repaint asked again, which set loading, which
     repainted, which failed, which repainted. The room flickered
     between "Loading" and an error several times a second and taps on
     the tabs landed on buttons that were destroyed before the click
     finished. That is what "I cannot select another tab" was.

     Once a load has been tried, it is not tried again on its own.
     Trying again is a button. */
  tried: false,
  /* The topic being looked at, or empty for everything. Lives on feed
     rather than in the store because a topic is where you are right
     now, not a setting. */
  tag: '',
};

/* -----------------------------------------------------------------
   FIREFLIES

   The night sky. See src/data/fireflies.js for what is deliberately
   not in it, which is the more important half.

   ONE DOCUMENT PER ACCOUNT, keyed by the account id, holding two
   numbers: when the light goes out, and how many people have tapped
   it. Relighting overwrites that document rather than adding another,
   so the collection can never grow past one row per person however
   many nights they are up.
   ----------------------------------------------------------------- */

const fly = {
  rows: [],         // every light currently on, including yours
  mine: null,       // your own row, or null
  loaded: false,
  loading: false,
  error: '',
  busy: false,
  stop: null,       // the live listener's unsubscribe, while the sky is open
  sent: {},         // ids tapped this session, so a light is only tapped once
  toast: '',        // "Sent." for a second and a half
  toastAt: 0,
};

function fliesOn() {
  return !!(cloud.started && cloud.db && cloud.mod && myUid());
}

/* Live rather than polled, because watching a light come on while you
   are sitting there is most of the point. Torn down the moment the
   screen is left, in render(), so it is never listening in the
   background. */
function fliesWatch() {
  if (!fliesOn() || fly.stop) return;
  const fs = cloud.mod;
  fly.loading = true;
  try {
    const q = fs.query(
      fs.collection(cloud.db, 'fireflies'),
      fs.where('out', '>', Date.now()),
      fs.orderBy('out', 'desc'),
      fs.limit(FIREFLY_LIMIT)
    );
    fly.stop = fs.onSnapshot(q, (snap) => {
      const rows = [];
      snap.forEach((d) => rows.push({ id: d.id, out: Number(d.data().out) || 0, glow: Number(d.data().glow) || 0 }));
      fly.rows = rows;
      fly.mine = rows.filter((r) => r.id === myUid())[0] || null;
      fly.loaded = true;
      fly.loading = false;
      fly.error = '';
      render();
    }, (err) => {
      fly.loading = false;
      fly.error = FIREFLY_OFFLINE;
      fly.stop = null;
      render();
    });
  } catch (err) {
    fly.loading = false;
    fly.error = FIREFLY_OFFLINE;
  }
}

function fliesUnwatch() {
  if (!fly.stop) return;
  try { fly.stop(); } catch (err) {}
  fly.stop = null;
}

async function flyLight() {
  if (!fliesOn() || fly.busy) return;
  fly.busy = true;
  render();
  const fs = cloud.mod;
  try {
    const out = Date.now() + FIREFLY_LIT_MINUTES * 60000;
    /* merge, so relighting keeps the glow count from earlier tonight
       rather than resetting it to zero and losing the me toos. */
    await fs.setDoc(fs.doc(cloud.db, 'fireflies', myUid()), { out: out, lit: Date.now() }, { merge: true });
    /* Somebody who just lit their light is awake, alone, and reached
       for a screen to feel less like the only one. That is the exact
       moment Willow should say something. */
    flyNudge();
  } catch (err) {
    fly.error = FIREFLY_OFFLINE;
  }
  fly.busy = false;
  render();
}

/* Willow's check in after the light goes up. Same machinery as every
   other nudge she makes: a written line on screen at once, rewritten
   by her in the background if she can manage it. It respects the daily
   nudge count, because three of these in one night would be somebody
   pestering rather than somebody there. */
function flyNudge() {
  try {
    if (nudgeCountToday() >= NUDGE_DAILY_MAX) return;
    const n = nudgeState();
    n.lastAt = Date.now();
    n.count = nudgeCountToday() + 1;
    n.at = Date.now();
    n.gone = false;
    n.reason = 'lit';
    n.text = nudgeWritten('lit', ciToday() + String(Date.now()));
    n.from = 'written';
    n.opener = NUDGE_OPENERS.lit || '';
    flushStore();
    if (typeof liftWrite === 'function') {
      liftWrite('nudge:lit:' + Date.now(), {
        reason: 'lit',
        label: '',
        parentName: (store.parent.name || '').trim().split(/\s+/)[0] || '',
      }, (text) => {
        const line = String(text || '').trim().replace(/^["']|["']$/g, '');
        if (!line || line.length > 200) return;
        const cur = nudgeState();
        if (cur.reason !== 'lit') return;
        cur.text = line;
        cur.from = 'willow';
      });
    }
  } catch (err) { /* the written line is already there */ }
}

async function flyOut() {
  if (!fliesOn() || fly.busy) return;
  fly.busy = true;
  render();
  try {
    /* Deleted rather than expired, so putting it out is immediate and
       so nothing is left sitting in the collection afterwards. */
    await cloud.mod.deleteDoc(cloud.mod.doc(cloud.db, 'fireflies', myUid()));
    fly.mine = null;
  } catch (err) {
    fly.error = FIREFLY_OFFLINE;
  }
  fly.busy = false;
  render();
}

/* The me too. One number going up by one, which is the entire payload,
   and the reason there is nothing here to moderate. */
async function flyGlow(id) {
  if (!fliesOn() || !id || id === myUid() || fly.sent[id]) return;
  fly.sent[id] = true;
  fly.toast = FIREFLY_SENT;
  fly.toastAt = Date.now();
  render();
  try {
    await cloud.mod.updateDoc(cloud.mod.doc(cloud.db, 'fireflies', id), {
      glow: cloud.mod.increment(1),
    });
  } catch (err) {
    /* A light that went out between painting and tapping is the common
       case here, and it does not need an error in her face. */
  }
  setTimeout(() => { if (Date.now() - fly.toastAt >= 1400) { fly.toast = ''; render(); } }, 1500);
}

function skyBlock() {
  const now = Date.now();
  const rows = fly.rows.filter((r) => r.out > now);
  const mine = rows.filter((r) => r.id === myUid())[0] || null;
  const others = rows.filter((r) => r.id !== myUid());

  return `
  <div class="sky" id="sky">
    <div class="sky-count">
      <span class="sky-n">${others.length
        ? esc(firefliesLine(others.length))
        : esc(mine ? 'Yours is lit.' : 'The sky is dark.')}</span>
      ${others.length ? `<span class="sky-s">Tap a light to say me too</span>` : ''}
    </div>

    ${!others.length ? `
      <p class="sky-empty">${esc(mine ? FIREFLY_ALONE : FIREFLY_DARK)}</p>` : ''}

    ${others.map((r, i) => {
      const sp = fireflySpot(r.id, i);
      return `<button class="ff${fly.sent[r.id] ? ' spent' : ''}"
        data-fly="glow" data-id="${esc(r.id)}"
        aria-label="Say me too to somebody who is awake"
        style="left:${sp.left}%;top:${sp.top}%;width:${sp.size}px;height:${sp.size}px;
               --ffdelay:${sp.delay}s;--ffdur:${sp.dur}s"></button>`;
    }).join('')}

    ${mine ? (() => {
      const sp = fireflySpot(mine.id, 0);
      return `<span class="ff mine" aria-label="Your light"
        style="left:${sp.left}%;top:${sp.top}%;width:${(sp.size + 2).toFixed(1)}px;height:${(sp.size + 2).toFixed(1)}px;
               --ffdelay:${sp.delay}s"></span>`;
    })() : ''}

    ${fly.toast ? `<span class="sky-toast">${esc(fly.toast)}</span>` : ''}
  </div>`;
}

function fliesBlock() {
  if (!auth.user) {
    return `
    <div class="card flat">
      <p class="bodytext">${esc(FIREFLY_GUEST)}</p>
      <button class="btn" style="width:100%;margin-top:11px" data-auth="account">Create an account</button>
    </div>`;
  }

  const now = Date.now();
  const mine = fly.mine && fly.mine.out > now ? fly.mine : null;
  const left = mine ? firefliesMinutesLeft(mine.out, now) : 0;

  return `
    ${fly.error ? `
    <div class="card flat" style="margin-bottom:10px">
      <p class="bodytext">${esc(fly.error)}</p>
    </div>` : ''}

    ${skyBlock()}

    <div class="card" style="margin-bottom:10px">
      ${mine ? `
        <p style="font-family:var(--serif);font-size:17px;color:var(--ink);margin:0">
          ${esc(fireflyAfterLine(String(mine.out)))}</p>
        <p class="bodytext" style="margin-top:6px">${esc(firefliesMineLine(left))}</p>
        <p class="tiny" style="margin-top:4px">${esc(firefliesGlowLine(mine.glow))}</p>
        <button class="btn ghost" style="width:100%;margin-top:12px"
          data-fly="out" ${fly.busy ? 'disabled' : ''}>${esc(FIREFLY_OUT)}</button>
      ` : `
        ${FIREFLY_WHAT.map((t) => `<p class="bodytext" style="margin:0 0 7px">${esc(t)}</p>`).join('')}
        <button class="btn" style="width:100%;margin-top:11px"
          data-fly="light" ${fly.busy ? 'disabled' : ''}>${esc(FIREFLY_LIGHT)}</button>
      `}
    </div>

    <div class="dsec">
      <h4>${esc(FIREFLY_NIGHT.title)}</h4>
      ${FIREFLY_NIGHT.body.map((t) => `<p class="bodytext" style="margin:0 0 9px">${esc(t)}</p>`).join('')}
    </div>

    <p class="tiny" style="text-align:center;margin-top:12px">${esc(FIREFLY_QUIET_NOTE)}</p>
    ${privacyLine()}`;
}

function feedOn() {
  return !!(cloud.started && cloud.db && cloud.mod && myUid());
}

function blockedList() {
  if (!Array.isArray(store.blocked)) store.blocked = [];
  return store.blocked;
}

/* Is this account allowed to approve things. Asked once per session,
   and a refusal is the normal answer for almost everybody, so it is
   never shown as an error. */
async function feedCheckMod() {
  if (feed.modChecked || !feedOn()) return;
  feed.modChecked = true;
  const fs = cloud.mod;
  try {
    const snap = await fs.getDoc(fs.doc(cloud.db, 'moderators', myUid()));
    feed.isMod = snap.exists();
    if (feed.isMod) feedLoadQueue();
  } catch (err) {
    feed.isMod = false;
  }
  render();
}

/* A FIRESTORE QUERY THAT DOES NOT DIE WHEN AN INDEX IS MISSING.

   A where plus an orderBy on a different field needs a composite index,
   which is a thing somebody has to go and create by hand in the
   console. Until it exists the query does not return slowly or return
   less, it throws failed-precondition, and the whole screen behind it
   is dead.

   That is exactly what happened to the community room: the feed had
   never had its index built, so the room threw on every attempt.

   So every ordered query in here goes through this. It tries the
   proper ordered version first, and if the only thing wrong is a
   missing index it drops the orderBy, takes a bigger slice, and sorts
   in the browser instead. The result is the same content in the same
   order for any feed small enough to fit in that slice, which is every
   feed this app has. What it buys is that a missing index is a
   slightly less efficient query rather than a screen that does not
   work. */
async function feedQuery(coll, wheres, orderField, dir, cap) {
  const fs = cloud.mod;
  try {
    const q = fs.query(
      fs.collection(cloud.db, coll),
      ...wheres.map((w) => fs.where(w[0], w[1], w[2])),
      fs.orderBy(orderField, dir),
      fs.limit(cap)
    );
    const snap = await fs.getDocs(q);
    const rows = [];
    snap.forEach((d) => rows.push(Object.assign({ id: d.id }, d.data())));
    return rows;
  } catch (err) {
    const code = String((err && (err.code || err.message)) || '');
    if (!/failed-precondition|requires an index|index/i.test(code)) throw err;
    /* No index. Same query without the ordering, which needs nothing
       built, then sort here. */
    const q2 = fs.query(
      fs.collection(cloud.db, coll),
      ...wheres.map((w) => fs.where(w[0], w[1], w[2])),
      fs.limit(Math.max(cap * 5, 200))
    );
    const snap2 = await fs.getDocs(q2);
    const rows = [];
    snap2.forEach((d) => rows.push(Object.assign({ id: d.id }, d.data())));
    rows.sort((a, b) => (dir === 'asc'
      ? (Number(a[orderField]) || 0) - (Number(b[orderField]) || 0)
      : (Number(b[orderField]) || 0) - (Number(a[orderField]) || 0)));
    return rows.slice(0, cap);
  }
}

async function feedLoad(force) {
  if (!feedOn()) { feed.error = ''; return; }
  if (feed.loading) return;
  if (feed.loaded && !force) return;
  /* Asked once. After that it takes the Try again button, or a force,
     because the alternative is the repaint loop described on
     feed.tried. */
  if (feed.tried && !force) return;
  feed.tried = true;
  feed.loading = true;
  feed.error = '';
  render();

  const fs = cloud.mod;
  try {
    feed.posts = await feedQuery('feed', [['status', '==', FEED_STATUS.live]], 'at', 'desc', FEED_PAGE);

    /* Her own, including the ones still waiting, so she can see what
       happened to something she shared rather than wondering. */
    const mine = await feedQuery('feed', [['authorUid', '==', myUid()]], 'at', 'desc', FEED_PAGE);
    feed.mine = mine;

    feed.loaded = true;

    /* Carry what happened back onto her own copies, so her profile can
       say "up in Community" or "not put up" rather than guessing. */
    const byId = {};
    mine.forEach((m) => { byId[m.id] = m.status; });
    (store.posts || []).forEach((p) => {
      if (!p.sharedId) return;
      const st = byId[p.sharedId];
      /* Gone from the feed entirely means a moderator deleted it, which
         is not the same as leaving it down. Either way it is not up. */
      p.sharedStatus = st || FEED_STATUS.removed;
    });
    flushStore();
  } catch (err) {
    feed.error = 'The feed would not load just now. It is worth trying again in a moment.';
  }
  feed.loading = false;
  render();
  feedCheckMod();
}

/* What actually needs a person. Two short lists, and both are usually
   empty: the handful the filter held, and anything somebody reported.
   Nothing in the room is waiting on either of them. */
async function feedLoadQueue() {
  if (!feedOn() || !feed.isMod) return;
  const fs = cloud.mod;
  try {
    feed.queue = await feedQuery('feed', [['status', '==', FEED_STATUS.held]], 'at', 'asc', FEED_PAGE);
  } catch (err) { /* the rest of the screen still works */ }

  /* Reports, grouped by the post they are about, so five people
     reporting the same thing is one row rather than five. */
  try {
    const rq = fs.query(fs.collection(cloud.db, 'reports'), fs.limit(200));
    const rsnap = await fs.getDocs(rq);
    const byPost = {};
    rsnap.forEach((d) => {
      const r = d.data();
      if (!r || !r.postId) return;
      const e = byPost[r.postId] || (byPost[r.postId] = { postId: r.postId, n: 0, reasons: {}, ids: [] });
      e.n += 1;
      e.reasons[r.reason] = (e.reasons[r.reason] || 0) + 1;
      e.ids.push(d.id);
    });
    const ids = Object.keys(byPost);
    const posts = [];
    for (let i = 0; i < ids.length; i++) {
      try {
        const snap2 = await fs.getDoc(fs.doc(cloud.db, 'feed', ids[i]));
        if (!snap2.exists()) continue;
        const data = snap2.data();
        /* Already taken down, so it is not a decision any more. */
        if (data.status === FEED_STATUS.removed) continue;
        posts.push(Object.assign({ id: ids[i] }, data, { report: byPost[ids[i]] }));
      } catch (err) { /* skip the one that would not load */ }
    }
    feed.reported = posts;
  } catch (err) { /* reports are readable by moderators only, so this is the normal failure */ }
  render();
}

/* SHARING ONE. Called when a post on her profile is switched to public.
   It goes up as pending, which is the only status the rules will take
   on a create. */
async function feedShare(post) {
  if (!feedOn()) {
    store.feedError = 'Sharing needs an account and a connection. This one has stayed private.';
    render();
    return false;
  }
  /* The stage band is attached here rather than at write time, so an
     old post shared later still carries the stage the family is in
     now, which is the one that matters for who should see it. */
  const withBand = Object.assign({}, post, { band: post.band || myFeedBand() });
  const doc = feedDocFrom(withBand, post.username || store.parent.username, myUid());
  const refuse = feedRefuseReason(doc, post);
  if (refuse) { store.feedError = refuse; render(); return false; }

  feed.busy = post.id;
  store.feedError = '';
  render();
  const fs = cloud.mod;
  try {
    const ref = await fs.addDoc(fs.collection(cloud.db, 'feed'), doc);
    post.sharedId = ref.id;
    post.sharedStatus = doc.status;
    /* Said at the moment she presses share rather than left for her to
       discover later, and it says which of the two patterns it was. */
    if (doc.status === FEED_STATUS.held) {
      store.feedError = filterReason(filterVerdict(doc.body));
    }
    store.parentUpdatedAt = Date.now();
    feed.loaded = false;
    feed.tried = false;
    flushStore();
  } catch (err) {
    store.feedError = 'That would not go up. It has stayed private, so nothing was lost.';
    feed.busy = '';
    render();
    return false;
  }
  feed.busy = '';
  render();
  return true;
}

/* TAKING ONE BACK DOWN. Hers to take, whatever its status. */
async function feedUnshare(post) {
  if (!post.sharedId || !feedOn()) return;
  feed.busy = post.id;
  render();
  const fs = cloud.mod;
  try {
    await fs.deleteDoc(fs.doc(cloud.db, 'feed', post.sharedId));
  } catch (err) { /* it may already be gone. Either way it is not hers any more. */ }
  post.sharedId = '';
  post.sharedStatus = '';
  store.parentUpdatedAt = Date.now();
  feed.loaded = false;
  feed.tried = false;
  feed.busy = '';
  flushStore();
  render();
}

/* One document per person per post, so nobody can overwrite everybody
   else's reactions by writing a map. */
async function feedReact(id, r) {
  if (!feedOn()) return;
  const fs = cloud.mod;
  const post = feed.posts.filter((p) => p.id === id)[0];
  if (!post) return;
  if (!post.myReaction) post.myReaction = '';
  const next = post.myReaction === r ? '' : r;
  post.myReaction = next;
  render();
  try {
    const ref = fs.doc(cloud.db, 'feed', id, 'reactions', myUid());
    if (next) await fs.setDoc(ref, { r: next, at: Date.now() });
    else await fs.deleteDoc(ref);
  } catch (err) { /* the tap already showed. A lost one is not worth a dialog. */ }
}

async function feedReport(id, reason) {
  feed.reporting = '';
  store.feedThanks = true;
  render();
  if (!feedOn()) return;
  const fs = cloud.mod;
  try {
    await fs.addDoc(fs.collection(cloud.db, 'reports'), {
      reporterUid: myUid(),
      postId: id,
      reason: String(reason || 'other'),
      at: Date.now(),
    });
  } catch (err) { /* nothing comes back out of reports, including errors */ }
}

/* Blocking is kept on her own account and filtered on her own device.
   A query cannot say "not in this list", and who somebody has blocked
   is nobody else's business. */
function feedBlock(uid) {
  if (!uid) return;
  const list = blockedList();
  if (list.indexOf(uid) === -1) list.push(uid);
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

function feedUnblock(uid) {
  store.blocked = blockedList().filter((x) => x !== uid);
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

async function modDecide(id, status) {
  if (!feedOn() || !feed.isMod) return;
  feed.busy = id;
  render();
  const fs = cloud.mod;
  try {
    await fs.updateDoc(fs.doc(cloud.db, 'feed', id), {
      status: status,
      decidedAt: Date.now(),
      decidedBy: myUid(),
    });
    feed.queue = feed.queue.filter((p) => p.id !== id);
    feed.reported = feed.reported.filter((p) => p.id !== id);
    feed.loaded = false;
    feed.tried = false;
  } catch (err) { /* it stays in the list, which is the safe way round */ }
  feed.busy = '';
  render();
}

/* Reports read and dealt with. Clearing them is separate from deciding
   about the post, because "I looked and it is fine" is a real answer
   and the post should not have to move for her to give it. */
async function modClearReports(postId) {
  if (!feedOn() || !feed.isMod) return;
  const entry = (feed.reported.filter((p) => p.id === postId)[0] || {}).report;
  if (!entry) return;
  feed.busy = postId;
  render();
  const fs = cloud.mod;
  try {
    await Promise.all(entry.ids.map((rid) =>
      fs.deleteDoc(fs.doc(cloud.db, 'reports', rid)).catch(() => null)));
    feed.reported = feed.reported.filter((p) => p.id !== postId);
  } catch (err) { /* it stays listed, which is the safe way round */ }
  feed.busy = '';
  render();
}

/* ------------------------------------------------------------------
 * WHAT IT ALL LOOKS LIKE
 * ------------------------------------------------------------------ */

function feedFileBlock(f) {
  if (!f || !f.url) return '';
  if (f.kind === 'video') {
    return `<span class="postpic vid"><video src="${esc(f.url)}" controls preload="metadata" playsinline></video></span>`;
  }
  if (f.kind === 'audio') {
    return `<span class="postpic aud">${icon('note', 16, 'var(--deep)')}<audio src="${esc(f.url)}" controls preload="metadata"></audio></span>`;
  }
  return `<span class="postpic"><img src="${esc(f.url)}" alt="" loading="lazy" /></span>`;
}

function feedCard(p, opts) {
  const o = opts || {};
  const mine = p.authorUid === myUid();
  const line = statusLine(p.status);

  return `
  <div class="card postcard">
    <div style="display:flex;gap:10px;align-items:center">
      <span class="feedav">${icon('user', 16, 'var(--deep)')}</span>
      <span class="grow">
        <span class="post-who">${esc(p.username || 'A parent')}${mine ? ' (you)' : ''}</span>
        <span class="post-when">${esc(postWhen(p.at))}</span>
      </span>
      ${o.queue ? `<span class="post-vis">${icon('clock', 11, 'var(--muted)')} Waiting</span>` : ''}
    </div>

    ${p.body ? `<p class="bodytext" style="margin-top:9px;white-space:pre-wrap">${bodyWithTags(p.body)}</p>` : ''}

    ${(p.files || []).length ? `
    <div class="postpics n${Math.min(4, p.files.length)}">
      ${p.files.map(feedFileBlock).join('')}
    </div>` : ''}

    ${line ? `<p class="tiny feedstatus">${icon(p.status === FEED_STATUS.removed ? 'info' : 'clock', 11, 'var(--muted)')} ${esc(line)}</p>` : ''}

    ${o.report ? `
    <p class="tiny feedstatus">
      ${icon('info', 11, 'var(--attention)')}
      Reported by ${o.report.n} ${o.report.n === 1 ? 'person' : 'people'}:
      ${esc(Object.keys(o.report.reasons).map((k) => {
        const r = REPORT_REASONS.filter((x) => x.id === k)[0];
        return (r ? r.label : k) + (o.report.reasons[k] > 1 ? ' (' + o.report.reasons[k] + ')' : '');
      }).join(', '))}
    </p>` : ''}

    ${o.queue ? `
    <div style="display:flex;gap:8px;margin-top:11px;flex-wrap:wrap">
      <button class="btn" data-feed="approve" data-id="${esc(p.id)}"
        ${feed.busy === p.id ? 'disabled' : ''}
        style="width:auto;flex:none;padding:9px 18px">Put it up</button>
      <button class="chip" data-feed="reject" data-id="${esc(p.id)}"
        ${feed.busy === p.id ? 'disabled' : ''}>Leave it down</button>
    </div>` : ''}

    ${o.report ? `
    <div style="display:flex;gap:8px;margin-top:11px;flex-wrap:wrap">
      <button class="chip" data-feed="clearreports" data-id="${esc(p.id)}"
        ${feed.busy === p.id ? 'disabled' : ''}>Looked, it is fine</button>
      <button class="btn ghost sm" data-feed="reject" data-id="${esc(p.id)}"
        ${feed.busy === p.id ? 'disabled' : ''}
        style="width:auto;flex:none;padding:9px 16px">Take it down</button>
    </div>` : ''}

    ${o.live ? `
    <div class="reacts">
      <div class="reactrow">
        ${POST_REACTIONS.map((r) => `
          <button class="reactbtn${p.myReaction === r.id ? ' on' : ''}" data-feed="react"
            data-id="${esc(p.id)}" data-r="${esc(r.id)}" title="${esc(r.label)}" aria-label="${esc(r.label)}">
            <span class="emo">${r.glyph}</span>
          </button>`).join('')}
      </div>
    </div>

    ${mine ? '' : `
    <div style="display:flex;gap:7px;margin-top:9px;flex-wrap:wrap">
      <button class="chip tiny" data-feed="reportopen" data-id="${esc(p.id)}">Report</button>
      <button class="chip tiny" data-feed="block" data-id="${esc(p.authorUid)}">Block ${esc(p.username || 'them')}</button>
    </div>`}

    ${feed.reporting === p.id ? `
    <div class="card flat" style="margin-top:9px">
      <p class="eyebrow">What is wrong with it</p>
      ${REPORT_REASONS.map((r) => `
        <button class="lrow" data-feed="report" data-id="${esc(p.id)}" data-reason="${esc(r.id)}">
          <span class="grow" style="font-size:13.5px;color:var(--ink)">${esc(r.label)}</span>
          <span class="chev">${icon('chev', 15, 'var(--faint)')}</span>
        </button>`).join('')}
      <button class="chip" style="margin-top:8px" data-feed="reportclose">Never mind</button>
    </div>` : ''}` : ''}
  </div>`;
}

function screenCommunity(c) {
  const signedIn = !!auth.user;
  const blocked = blockedList();
  const all = visibleFeed(feed.posts, blocked);
  /* Sorted in the browser rather than queried, so no composite index
     has to be created by hand in the console for the rooms to work.
     See inGroup in src/data/groups.js for when that stops being the
     right trade. */
  const live = inGroup(all, feed.room);
  const counts = groupCounts(all);
  const waiting = (feed.mine || []).filter((p) => p.status !== FEED_STATUS.live);

  /* Asked for as soon as somebody opens the room, rather than on a
     button, because a feed you have to press load on reads as broken. */
  if (signedIn && !feed.loaded && !feed.loading && !feed.tried) {
    setTimeout(() => feedLoad(), 0);
  }

  const tab = feed.view === 'queue' && feed.isMod ? 'queue'
    : feed.view === 'mine' ? 'mine'
    : feed.view === 'flies' ? 'flies'
    : feed.view === 'rooms' ? 'rooms'
      : feed.view === 'foryou' ? 'foryou' : 'feed';

  /* The sky is live while it is on screen and listening to nothing at
     all when it is not. Started here, torn down in render(). */
  if (tab === 'flies' && signedIn && !fly.stop) setTimeout(() => fliesWatch(), 0);

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <p class="eyebrow">Community</p>
    ${tab === 'flies' ? `
      <h1 class="title">${esc(FIREFLY_SUB)}</h1>
      <p class="sub">Every light is somebody up with a child.</p>
    ` : `
      <h1 class="title">${esc(FEED_TITLE)}</h1>
      <p class="sub">${esc(FEED_SUB)}</p>
    `}
  </div>
  <div class="sc">

    ${signedIn ? `
    <div class="feedtabs">
      <button class="chip${tab === 'flies' ? ' on' : ''}" data-feed="view" data-v="flies">${esc(FIREFLY_TITLE)}</button>
      <button class="chip${tab === 'foryou' ? ' on' : ''}" data-feed="view" data-v="foryou">${esc(FORYOU_TITLE)}</button>
      <button class="chip${tab === 'feed' ? ' on' : ''}" data-feed="view" data-v="feed">Everyone</button>
      <button class="chip${tab === 'rooms' ? ' on' : ''}" data-feed="view" data-v="rooms">${esc(GROUPS_TITLE)}</button>
      <button class="chip${tab === 'mine' ? ' on' : ''}" data-feed="view" data-v="mine">
        Yours${waiting.length ? ' (' + waiting.length + ' held)' : ''}
      </button>
      ${feed.isMod ? `
      <button class="chip${tab === 'queue' ? ' on' : ''}" data-feed="view" data-v="queue">
        Needs a look${(feed.queue.length + feed.reported.length)
          ? ' (' + (feed.queue.length + feed.reported.length) + ')' : ''}
      </button>` : ''}
    </div>` : `
    <div class="card flat">
      <p class="bodytext">${esc(FEED_GUEST)}</p>
    </div>`}

    ${tab === 'flies' ? fliesBlock() : ''}
    ${tab === 'foryou' ? willowPostBlock() : ''}

    ${store.feedThanks ? `
    <div class="card leafy">
      <p class="bodytext">${esc(REPORT_THANKS)}</p>
      <button class="chip" style="margin-top:9px" data-feed="thanksok">Close</button>
    </div>` : ''}

    ${store.feedError ? `
    <div class="card" style="border-left:3px solid var(--attention)">
      <p class="bodytext">${esc(store.feedError)}</p>
      <button class="chip" style="margin-top:9px" data-feed="errok">Close</button>
    </div>` : ''}

    ${feed.error ? `
    <div class="card flat">
      <p class="bodytext">${esc(feed.error)}</p>
      <button class="chip" style="margin-top:9px" data-feed="retry">Try again</button>
    </div>` : ''}

    ${tab === 'foryou' ? forYouBlock() : `
    ${tab === 'queue' ? `
      <p class="sect">${esc(MOD_TITLE)}</p>
      <p class="tiny" style="margin:-4px 0 10px">${esc(MOD_NOTE)}</p>

      ${!feed.queue.length && !feed.reported.length ? `
      <div class="card flat"><p class="bodytext">${esc(MOD_EMPTY)}</p></div>` : ''}

      ${feed.queue.length ? `
      <p class="sect">${esc(MOD_HELD_TITLE)}</p>
      <p class="tiny" style="margin:-4px 0 10px">${esc(MOD_HELD_NOTE)}</p>
      ${feed.queue.map((p) => feedCard(p, { queue: true })).join('')}` : ''}

      ${feed.reported.length ? `
      <p class="sect">${esc(MOD_REPORTED_TITLE)}</p>
      <p class="tiny" style="margin:-4px 0 10px">${esc(MOD_REPORTED_NOTE)}</p>
      ${feed.reported.map((p) => feedCard(p, { report: p.report })).join('')}` : ''}
    ` : tab === 'rooms' ? `
      <p class="sect">${esc(GROUPS_TITLE)}</p>
      <p class="tiny" style="margin:-4px 0 10px">${esc(GROUPS_INTRO)}</p>
      ${GROUPS.map((g) => `
        <button class="lrow" data-feed="room" data-g="${esc(g.id)}" style="align-items:flex-start">
          <span class="licon">${icon(g.heavy ? 'heart' : 'people', 17, g.heavy ? 'var(--taupe)' : 'var(--sage)')}</span>
          <span class="grow">
            <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">${esc(g.label)}</span>
            <span class="tiny" style="display:block;margin-top:2px">${esc(g.blurb)}</span>
            <span class="tiny" style="display:block;margin-top:3px;color:var(--faint)">
              ${counts[g.id] ? esc(counts[g.id] + (counts[g.id] === 1 ? ' post' : ' posts') + ' right now') : 'Quiet in here'}
            </span>
          </span>
          <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
        </button>`).join('')}
    ` : tab === 'mine' ? `
      <p class="sect">What you have shared</p>
      ${(feed.mine || []).length
        ? feed.mine.map((p) => feedCard(p, { live: p.status === FEED_STATUS.live })).join('')
        : `<div class="card flat"><p class="bodytext">${esc(FEED_HOW)}</p></div>`}
    ` : `
      ${feed.room != null ? (() => {
        const g = groupById(feed.room);
        return `
        <div class="card leafy" style="margin-bottom:11px">
          <p class="eyebrow">${icon('people', 11, 'var(--sage)')} ${esc(GROUPS_TITLE)}</p>
          <p style="font-size:16px;color:var(--ink);margin:6px 0 0;font-family:var(--serif)">
            ${esc(g ? g.label : GROUP_GENERAL_LABEL)}</p>
          ${g ? `<p class="bodytext" style="margin-top:6px">${esc(g.about)}</p>` : ''}
          ${g && g.note ? `<div class="callout" style="margin-top:9px"><p style="margin:0">${esc(g.note)}</p></div>` : ''}
          <button class="chip" style="margin-top:10px" data-feed="room" data-g="__all">
            ${esc(GROUP_ALL_LABEL)}</button>
        </div>`;
      })() : ''}

      ${feed.loading ? `
      <div class="card flat"><p class="bodytext">Loading the room.</p></div>` : ''}

      ${!feed.loading && !live.length ? `
      <div class="card" style="text-align:center;padding:30px 22px">
        ${growthSVG(2, 58)}
        <p style="margin:12px 0 0;font-size:14.5px;font-weight:600;color:var(--ink)">
          Nobody has shared anything yet
        </p>
        <p class="bodytext" style="margin-top:7px">${esc(feed.room != null ? GROUP_EMPTY : FEED_EMPTY)}</p>
        ${signedIn ? `
        <button class="chip" data-tab="home" style="margin-top:14px">Write something on Home</button>` : ''}
      </div>` : ''}

      ${live.map((p) => feedCard(p, { live: true })).join('')}

      ${live.length ? `
      <p class="tiny" style="text-align:center;margin-top:10px">${esc(FEED_HOW)}</p>` : ''}
    `}`}

    <button class="lrow" data-go="screen" data-id="wisdom" style="align-items:flex-start;margin-top:14px">
      <span class="licon">${icon('bulb', 18, 'var(--sage)')}</span>
      <span class="grow">
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">What worked for us</span>
        <span class="tiny" style="display:block;margin-top:2px">Output, clogs, and the kit. Every tip labelled for how well it holds up.</span>
      </span>
      <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
    </button>

    ${blocked.length ? `
    <p class="sect">People you have blocked</p>
    <div class="card">
      ${blocked.map((uid) => `
      <div style="display:flex;align-items:center;gap:9px;padding:8px 0;border-top:1px solid rgba(0,0,0,.055)">
        <span class="grow tiny">${esc(uid.slice(0, 8))}</span>
        <button class="chip" data-feed="unblock" data-id="${esc(uid)}">Unblock</button>
      </div>`).join('')}
    </div>` : ''}

    ${privacyLine()}

    <p class="disclaimer">
      Other parents are not a substitute for your pediatrician. Anything in here is one
      person’s experience, not medical advice, and what worked for their child may not be right
      for yours.
    </p>
  </div>`;
}


/* =================================================================
   UNDERSTANDING MY CHILD

   This is the neuro inclusive screen. Two jobs, in this order.

   First, let a parent turn on the lenses that match their child,
   grouped so the list reads as categories rather than as a wall of
   conditions. Second, and more importantly, explain in plain English
   how that child's mind works, and put the behavior a parent sees
   next to what it usually is.

   The misreadAs pairs are the reason this screen exists. A parent who
   stops reading a behavior as defiance parents differently the same
   day, and that is a thing this app can actually do for a family.

   Nothing here diagnoses, nothing here is hidden, and every lens
   carries its own line about when to talk with a pediatrician.
   ================================================================= */

function lensToggleRow(l) {
  const on = state.lenses.indexOf(l.id) !== -1;
  return `
  <button class="lrow" data-lens="${esc(l.id)}" aria-pressed="${on}" style="align-items:flex-start">
    <span class="licon" style="background:${on ? 'var(--sage-soft, #e7efe4)' : 'transparent'}">
      ${icon(on ? 'check' : 'plus', 17, on ? 'var(--sage)' : 'var(--faint)')}
    </span>
    <span class="grow">
      <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">${esc(l.label)}</span>
      <span class="tiny" style="display:block;margin-top:2px">${esc(l.tagline)}</span>
    </span>
  </button>`;
}

/* The single choice some lenses carry, such as an autism support
   level. Only rendered when the lens is on. Choosing nothing is a
   supported state, so every option list ends with a way out. */
function lensOptionBlock(l) {
  if (!l.options) return '';
  const cur = state.lensOptions[l.id] || null;
  return `
  <div class="card flat" style="margin-top:8px">
    <p class="eyebrow">${esc(l.options.label)}</p>
    <p class="tiny" style="margin-top:4px">${esc(l.options.help)}</p>
    <div style="margin-top:10px;display:flex;flex-direction:column;gap:7px">
      ${l.options.choices.map((ch) => {
        const on = cur === ch.key;
        return `
        <button class="lrow" data-lensopt="${esc(l.id)}" data-val="${esc(ch.key)}"
          aria-pressed="${on}" style="align-items:flex-start;padding:10px 11px">
          <span class="licon" style="width:20px;min-width:20px">
            ${icon(on ? 'check' : 'circle', 15, on ? 'var(--sage)' : 'var(--faint)')}
          </span>
          <span class="grow">
            <span style="display:block;font-size:13.5px;font-weight:600;color:var(--ink)">${esc(ch.label)}</span>
            <span class="tiny" style="display:block;margin-top:2px">${esc(ch.description)}</span>
          </span>
        </button>`;
      }).join('')}
    </div>
  </div>`;
}

/* A lens that needs a number rather than a choice. Only prematurity
   uses this today. Text input rather than number, because a number
   input reports no caret position in Chrome and the re render then
   drops every keystroke to the front of the field. */
function lensNumberBlock(l) {
  if (!l.numeric) return '';
  const held = (state.lensNumbers[l.id] || {})[l.numeric.key];
  const val = held == null ? '' : String(held);
  return `
  <div class="card flat" style="margin-top:8px">
    <p class="eyebrow">${esc(l.numeric.label)}</p>
    <p class="tiny" style="margin-top:4px">${esc(l.numeric.help)}</p>
    <div style="margin-top:10px;display:flex;align-items:center;gap:9px">
      <input id="lensNum_${esc(l.id)}" class="inp" type="text" inputmode="numeric" maxlength="2"
        value="${esc(val)}" placeholder="0"
        data-lensnum="${esc(l.id)}" data-numkey="${esc(l.numeric.key)}"
        style="width:72px;text-align:center" />
      <span class="tiny">${esc(l.numeric.unit)} early</span>
    </div>
  </div>`;
}

/* The heart of the screen. Rendered for one lens at a time so a parent
   reads rather than scans, which is the opposite of how the rest of
   the app is laid out and is deliberate here. */
/* The age specific block. A four year old and a sixteen year old can
   carry the same diagnosis and look almost nothing alike, so the general
   understanding is not enough on its own. The band defaults to the
   child's real age and can be moved, because parents ask what this is
   going to look like later, and because siblings differ. */
function lensAgeBlock(l, c) {
  const ageMonths = c && typeof c.months === 'number' ? c.months : null;
  const bands = getLensBandsWithContent(l.id);
  if (!bands.length) return '';

  const natural = getLensBandForAge(ageMonths);
  // Not every lens has something worth saying in every band. When the
  // child's own band is empty, show the nearest band that is written
  // rather than defaulting to babies for a sixteen year old.
  const nearest = () => {
    if (!natural) return bands[0].id;
    const order = LENS_AGE_BANDS.map((b) => b.id);
    const at = order.indexOf(natural.id);
    let best = bands[0];
    let bestGap = Infinity;
    bands.forEach((b) => {
      const gap = Math.abs(order.indexOf(b.id) - at);
      if (gap < bestGap) { bestGap = gap; best = b; }
    });
    return best.id;
  };
  const wanted = state.lensBand
    || (natural && bands.some((b) => b.id === natural.id) ? natural.id : nearest());
  const view = getLensAgeView(l.id, ageMonths, wanted);
  if (!view) return '';

  const isNatural = natural && view.band.id === natural.id;
  const who = state.name || 'your child';

  return `
  <div class="dsec">
    <h4>At this age</h4>
    <p class="tiny" style="margin:0 0 9px">
      ${isNatural
        ? esc(who + ' is in the ' + view.band.label + ' band. Tap another to see what this tends to look like at a different age.')
        : esc(natural && !bands.some((b) => b.id === natural.id)
            ? 'There is nothing written for ' + natural.label + ' on this one yet, so this is the ' + view.band.label + ' band, which is the closest.'
            : 'Showing ' + view.band.label + ', which is not ' + who + "'s current age.")}
    </p>

    <div class="chips" style="margin-bottom:12px">
      ${bands.map((b) => `
        <button class="chip" data-sub="lensBand" data-val="${esc(b.id)}"
                aria-pressed="${b.id === view.band.id}">
          ${esc(b.label)}${natural && b.id === natural.id ? ' \u2022' : ''}
        </button>`).join('')}
    </div>

    <div class="card flat" style="margin-bottom:12px">
      <p class="eyebrow">${icon('info', 11, 'var(--taupe)')} Before you read the list</p>
      <p class="bodytext" style="margin-top:5px">${esc(LENS_VARIATION_NOTE)}</p>
    </div>

    ${view.looksLike.length ? `
      <p class="sect" style="margin-top:0">What it can look like at ${esc(view.band.label)}</p>
      ${list(view.looksLike)}` : ''}

    ${view.note ? `
    <div class="callout" style="margin-top:10px"><p style="margin:0">${esc(view.note)}</p></div>` : ''}

    ${view.whatHelps.length ? `
      <p class="sect">What tends to help at ${esc(view.band.label)}</p>
      ${list(view.whatHelps)}` : ''}
  </div>`;
}

function lensUnderstanding(l, c) {
  const u = l.understanding;
  if (!u) return '';
  const chosen = l.options && state.lensOptions[l.id]
    ? l.options.choices.find((c2) => c2.key === state.lensOptions[l.id])
    : null;

  return `
  <div class="card leafy">
    <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} The short version</p>
    <p class="bodytext" style="margin-top:6px;font-size:15px;line-height:1.55">${esc(u.headline)}</p>
  </div>

  ${l.note ? `
  <div class="card flat" style="margin-top:10px">
    <p class="eyebrow">${icon('info', 11, 'var(--taupe)')} Worth knowing</p>
    <p class="bodytext" style="margin-top:5px">${esc(l.note)}</p>
  </div>` : ''}

  ${chosen ? `
  <div class="card flat" style="margin-top:10px">
    <p class="eyebrow">${esc(chosen.label)}</p>
    <p class="bodytext" style="margin-top:5px">${esc(chosen.description)}</p>
  </div>` : ''}

  ${lensAgeBlock(l, c)}

  <div class="dsec">
    <h4>How their mind works, at every age</h4>
    ${u.mind.map((para) => `
      <p class="bodytext" style="margin:0 0 11px">${esc(para)}</p>`).join('')}
  </div>

  ${u.misreadAs && u.misreadAs.length ? `
  <div class="dsec">
    <h4>What it looks like, and what it usually is</h4>
    <p class="tiny" style="margin:0 0 10px">
      This is the part worth rereading on a hard day.
    </p>
    ${u.misreadAs.map((m) => `
      <div class="quote">
        <p class="sit">${icon('eye', 12, 'var(--taupe)')} Looks like</p>
        <q>${esc(m.looksLike)}</q>
        <p class="why"><strong style="color:var(--deep)">Usually is:</strong> ${esc(m.isOften)}</p>
      </div>`).join('')}
  </div>` : ''}

  ${u.strengths && u.strengths.length ? `
  <div class="dsec">
    <h4>What often comes with it</h4>
    <p class="tiny" style="margin:0 0 9px">
      Every list of difficulties has a matching list of strengths. This one is not a consolation prize,
      it is the same wiring seen from the other side.
    </p>
    ${list(u.strengths)}
  </div>` : ''}

  <div class="dsec">
    <h4>What helps at home</h4>
    ${list(l.environmentTips)}
  </div>

  ${l.strategyTags && l.strategyTags.length ? `
  <div class="card flat">
    <p class="eyebrow">${icon('puzzle', 11, 'var(--sage)')} What this changes in the app</p>
    <p class="tiny" style="margin-top:5px">
      Activities and guidance tagged ${esc(l.strategyTags.slice(0, 3).join(', '))} and
      ${esc(String(Math.max(0, l.strategyTags.length - 3)))} more move toward the top of your lists.
      Nothing is removed.
    </p>
  </div>` : ''}

  ${l.whenToAsk ? `
  <div class="dsec">
    <h4>When to bring it up</h4>
    <div class="callout"><p style="margin:0">${esc(l.whenToAsk)}</p></div>
  </div>` : ''}`;
}

/* The reading view for one lens, reached from the list. */
function viewLens(c, lensId) {
  const l = getLens(lensId);
  if (!l) return emptyScreen('That support lens could not be found.');
  const on = state.lenses.indexOf(l.id) !== -1;

  return `
  <div class="sc-head">
    <button class="back" data-back="understand">${icon('back', 15, 'var(--deep)')} Back</button>
    <p class="eyebrow" style="margin-top:6px">${esc(l.tagline)}</p>
    <h1 class="title sm">${esc(l.label)}</h1>
  </div>
  <div class="sc">
    <button class="lrow" data-lens="${esc(l.id)}" aria-pressed="${on}" style="align-items:flex-start">
      <span class="licon">${icon(on ? 'check' : 'plus', 17, on ? 'var(--sage)' : 'var(--faint)')}</span>
      <span class="grow">
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">
          ${on ? 'On for ' + esc(state.name || 'this child') : 'Turn this on for ' + esc(state.name || 'this child')}
        </span>
        <span class="tiny" style="display:block;margin-top:2px">
          ${on ? 'Tap to turn it off. Nothing you have saved is lost.' : 'You can turn it off again at any time.'}
        </span>
      </span>
    </button>

    ${on ? lensOptionBlock(l) : ''}
    ${on ? lensNumberBlock(l) : ''}

    <div style="height:14px"></div>
    ${lensUnderstanding(l, c)}

    <p class="disclaimer">${esc(LENS_DISCLAIMER)}</p>
  </div>`;
}

function screenUnderstand(c) {
  const groups = getGroupedLenses();
  const active = getLenses(state.lenses);
  const misreads = getMergedMisreads(state.lenses);
  const openGroup = state.undGroup;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">Understanding ${esc(state.name || 'your child')}</h1>
    <p class="sub">How their mind works, in plain English, so the hard moments make more sense.</p>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext">${esc(UNDERSTANDING_INTRO)}</p>
    </div>

    ${active.length ? `
      <p class="sect">On for ${esc(state.name || 'this child')}</p>
      ${active.map((l) => `
        <button class="lrow" data-go="lens" data-id="${esc(l.id)}" style="align-items:flex-start">
          <span class="licon">${icon('leaf', 17, 'var(--sage)')}</span>
          <span class="grow">
            <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">${esc(l.label)}</span>
            <span class="tiny" style="display:block;margin-top:2px">
              ${l.understanding ? esc(l.understanding.headline) : esc(l.tagline)}
            </span>
          </span>
          <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
        </button>`).join('')}

      ${c.corrected != null ? `
      <div class="card flat" style="margin-top:10px">
        <p class="eyebrow">${icon('clock', 11, 'var(--sage)')} Corrected age</p>
        <p class="bodytext" style="margin-top:5px">
          ${esc(state.name || 'Your baby')} is ${esc(String(c.months))} months old by the calendar and
          about ${esc(String(c.corrected))} months corrected. Milestone windows in this app will use the
          corrected number until two years, which is what the American Academy of Pediatrics recommends.
        </p>
      </div>` : ''}

      ${(() => {
        // The one list a parent most often wants: what helps, right now,
        // at the age their child actually is, pulled from every lens
        // they have on rather than buried one screen down in each.
        const helps = getMergedAgeHelps(state.lenses, c.months, (id) => {
          const lens = getLens(id);
          return lens ? lens.label : id;
        });
        if (!helps.length) return '';
        const band = helps[0].band;
        return `
        <p class="sect">What tends to help at ${esc(band.label)}</p>
        <div class="card flat" style="margin-bottom:10px">
          <p class="bodytext">${esc(LENS_VARIATION_NOTE)}</p>
        </div>
        ${helps.slice(0, 10).map((h) => `
          <div class="lrow" style="align-items:flex-start;cursor:default">
            <span class="licon">${icon('leaf', 15, 'var(--sage)')}</span>
            <span class="grow">
              <span class="bodytext" style="display:block">${esc(h.line)}</span>
              <span class="tiny" style="display:block;margin-top:2px">${esc(h.lensLabel)}</span>
            </span>
          </div>`).join('')}
        ${helps.length > 10 ? `
        <p class="tiny" style="margin-top:8px">
          ${esc(String(helps.length - 10))} more across your active lenses. Open any lens above to read
          the rest, including what this tends to look like at other ages.
        </p>` : ''}`;
      })()}

      ${misreads.length ? `
      <p class="sect">Today, read this one first</p>
      ${(() => {
        // One pair, rotated by the day of the month, so a parent who
        // opens this screen daily does not see the same card forever.
        const pick = misreads[new Date().getDate() % misreads.length];
        return `
        <div class="quote">
          <p class="sit">${icon('eye', 12, 'var(--taupe)')} Looks like</p>
          <q>${esc(pick.looksLike)}</q>
          <p class="why"><strong style="color:var(--deep)">Usually is:</strong> ${esc(pick.isOften)}</p>
        </div>
        <p class="tiny" style="margin-top:-2px">From ${esc(pick.lensLabel)}. There are
          ${esc(String(misreads.length))} of these across your active lenses.</p>`;
      })()}` : ''}
    ` : `
      <div class="card flat">
        <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Nothing turned on yet</p>
        <p class="bodytext" style="margin-top:5px">
          Turning something on below does not label your child and it does not go anywhere.
          It reorders what this app shows you, and it opens up an explanation of how that
          way of thinking works. You never need a diagnosis to use any of it.
        </p>
      </div>
    `}

    <p class="sect">What fits ${esc(state.name || 'your child')}?</p>
    <p class="tiny" style="margin:-4px 0 10px">
      Pick as many as you like. They stack, and you can change them whenever.
    </p>

    ${groups.map((g) => {
      const open = openGroup === g.id;
      const onCount = g.lenses.filter((l) => state.lenses.indexOf(l.id) !== -1).length;
      return `
      <button class="lrow" data-sub="undGroup" data-val="${esc(open ? '' : g.id)}"
        aria-pressed="${open}" style="align-items:flex-start">
        <span class="licon">${icon(open ? 'chevdown' : 'chev', 16, 'var(--deep)')}</span>
        <span class="grow">
          <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">${esc(g.label)}</span>
          <span class="tiny" style="display:block;margin-top:2px">${esc(g.blurb)}</span>
        </span>
        ${onCount ? `<span class="tag">${esc(String(onCount))} on</span>` : ''}
      </button>
      ${open ? `<div style="padding:2px 0 10px">
        ${g.lenses.map((l) => `
          ${lensToggleRow(l)}
          ${state.lenses.indexOf(l.id) !== -1 ? lensOptionBlock(l) : ''}
          ${state.lenses.indexOf(l.id) !== -1 ? lensNumberBlock(l) : ''}
          ${state.lenses.indexOf(l.id) !== -1 && l.understanding ? `
            <button class="lrow" data-go="lens" data-id="${esc(l.id)}"
              style="align-items:center;margin:0 0 10px">
              <span class="licon">${icon('bulb', 16, 'var(--taupe)')}</span>
              <span class="grow"><span class="tiny">Read how ${esc(l.label.toLowerCase())} actually works</span></span>
              <span class="chev">${icon('chev', 15, 'var(--faint)')}</span>
            </button>` : ''}
        `).join('')}
      </div>` : ''}`;
    }).join('')}

    <div class="card flat" style="margin-top:14px">
      <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} What a lens never does</p>
      <p class="bodytext" style="margin-top:5px">
        A lens never hides anything. It does not remove a milestone, it does not soften a reason to
        call your pediatrician, and it does not take a red flag off your screen. It widens how gently
        a window is described, and it moves useful things up the list. Everything else stays exactly
        where it was.
      </p>
    </div>

    <p class="disclaimer">${esc(LENS_DISCLAIMER)}</p>
  </div>`;
}


/* =================================================================
   THE PARENT, AND THE CHILDREN

   Two levels, deliberately separate.

   A mother has her own recovery, her own pumping, her own community
   and her own account. None of that belongs on a child's profile, and
   a mother of a fourteen year old should never be shown a flange
   sizing card because the app could not tell the difference.

   A child has an age, a birthday and a set of support lenses, and
   what they need at eleven has nothing in common with what they
   needed at eleven months. So each child is entered separately and
   everything inside is scoped to that child.

   Home is the parent's. Selecting a child moves into their space.
   ================================================================= */

function childAgeLabel(k) {
  /* A baby who is not born yet shows how far along rather than an age,
     which is the one place the seed stage has to reach outside its own
     screen. Everywhere else reads `birthday`, which is empty for them. */
  if (isExpecting(k)) return expChipLabel(k);
  const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
  return sum && sum.label ? sum.label : 'No birthday yet';
}

function childLensLine(k) {
  if (!k.lenses || !k.lenses.length) return 'No support lenses on';
  return getLenses(k.lenses).map((l) => l.label).join(', ');
}

/* THE EXAMPLE CHILD HAS TO LOOK LIKE ONE.

   The app seeds a demo child so a first visit opens on something rather
   than on an empty state, and that child is called Stetson. If the
   parent's own son is also called Stetson, a phone that quietly failed
   to sign in looks exactly like a phone that synced perfectly, and she
   has no way to tell. That is not a hypothetical, it happened.

   So anything the app invented says so, in the chip, on the card and on
   the Today screen, until the moment it belongs to a real account. */
function isExampleChild(k) {
  return !!(k && k.seeded === true);
}

/* One child, as a tappable card. Used on parent home and on profile. */
function childCard(k, active) {
  const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
  const months = sum.age ? sum.age.totalMonths : null;
  const growth = sum.stageId ? getGrowthDetail(sum.stageId) : null;
  return `
  <button class="lrow" data-child="${esc(k.id)}" style="align-items:center">
    <span class="licon" style="width:44px;min-width:44px;height:44px;display:flex;align-items:center;justify-content:center">
      ${growthSVG(growth ? growth.order : 0, 34)}
    </span>
    <span class="grow">
      <span style="display:block;font-size:15px;font-weight:600;color:var(--ink)">
        ${esc(k.name || 'Unnamed')}${isExampleChild(k) ? ' <span class="tag warm">Example</span>' : ''}${active ? ' <span class="tag">Open</span>' : ''}
      </span>
      <span class="tiny" style="display:block;margin-top:2px">${esc(childAgeLabel(k))}</span>
      <span class="tiny" style="display:block;margin-top:1px;color:var(--sage)">${esc(childLensLine(k))}</span>
    </span>
    <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
  </button>`;
}

/* Shown instead of a child screen when nobody is selected. */
function screenPickChild(what) {
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <h1 class="title">Which child?</h1>
    <p class="sub">${esc(what)} is different for every age, so pick whose you want to see.</p>
  </div>
  <div class="sc">
    ${store.children.map((k) => childCard(k, false)).join('')}
    <button class="lrow" data-go="screen" data-id="profile">
      <span class="licon">${icon('plus', 18, 'var(--sage)')}</span>
      <span class="grow"><span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">Add a child</span></span>
      <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
    </button>
  </div>`;
}

/* -----------------------------------------------------------------
   DATE FIELDS

   A native date input looks fine and is miserable to actually use. On a
   laptop it is three little segments you have to tab between, and the
   year is the worst of them: four digits typed blind into a two
   character looking box, and if the first keystroke lands wrong you get
   0019 and no way to tell what happened. Asking somebody for a birthday
   in 1991 through that control is asking for a fight.

   Three plain dropdowns instead. Nothing to type, nothing to get wrong,
   and the year is a list you scroll rather than a number you aim at.
   ----------------------------------------------------------------- */

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

function splitISODate(value) {
  const m = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return m ? { y: m[1], m: m[2], d: m[3] } : { y: '', m: '', d: '' };
}

function daysInThisMonth(y, m) {
  const year = Number(y);
  const mon = Number(m);
  if (!mon) return 31;
  if (mon === 2) {
    if (!year) return 29;
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  }
  return [4, 6, 9, 11].indexOf(mon) === -1 ? 31 : 30;
}

/* `target` says where the finished date goes. `back` and `ahead` set how
   far the year list runs, because a parent's birthday and a due date
   need very different lists. */
function dateSelects(target, value, back, ahead) {
  const cur = splitISODate(value);
  const thisYear = new Date().getFullYear();
  const first = thisYear + (Number(ahead) || 0);
  const last = thisYear - (Number(back) || 100);

  const opt = (v, label, sel) =>
    `<option value="${esc(v)}"${sel ? ' selected' : ''}>${esc(label)}</option>`;

  let months = opt('', 'Month', !cur.m);
  MONTH_NAMES.forEach((name, i) => {
    const v = String(i + 1).padStart(2, '0');
    months += opt(v, name, cur.m === v);
  });

  let days = opt('', 'Day', !cur.d);
  const dayCount = daysInThisMonth(cur.y, cur.m);
  for (let d = 1; d <= dayCount; d++) {
    const v = String(d).padStart(2, '0');
    days += opt(v, String(d), cur.d === v);
  }

  let years = opt('', 'Year', !cur.y);
  for (let y = first; y >= last; y--) {
    years += opt(String(y), String(y), cur.y === String(y));
  }

  return `
  <div class="daterow" data-datefield="${esc(target)}">
    <select class="dsel dsel-m" data-datepart="m" aria-label="Month">${months}</select>
    <select class="dsel dsel-d" data-datepart="d" aria-label="Day">${days}</select>
    <select class="dsel dsel-y" data-datepart="y" aria-label="Year">${years}</select>
  </div>`;
}

/* Where a finished date lands. One place, so every date field in the app
   is wired the same way and a new one cannot forget to save. */
function applyDateField(target, iso) {
  const parts = String(target || '').split(':');
  /* A date changed inside an open edit goes to the draft, not to the
     record. Save is the only thing that commits. */
  const e = store.profileEdit;
  if (e) {
    if (parts[0] === 'parent' && e.who === 'me') { e.values[parts[1]] = iso; render(); return; }
    if (parts[0] === 'child' && e.who === parts[1]) { e.values.birthday = iso; render(); return; }
  }
  if (parts[0] === 'parent') {
    store.parent[parts[1]] = iso;
    store.parentUpdatedAt = Date.now();
  } else if (parts[0] === 'child') {
    const k = store.children.find((x) => x.id === parts[1]);
    if (!k) return;
    k.birthday = iso || null;
    k.napOverride = null;
    k.updatedAt = Date.now();
  } else if (parts[0] === 'due') {
    const k = store.children.find((x) => x.id === parts[1]);
    if (!k) return;
    k.dueDate = iso || null;
    k.updatedAt = Date.now();
  } else if (parts[0] === 'draft') {
    store.draftChildBday = iso;
  } else if (parts[0] === 'memory') {
    /* When the memory HAPPENED, which is not the same as when she got
       round to typing it, and is the date it comes back on. */
    memDraft().at = iso;
  }
  flushStore();
  render();
}

/* Reads the three dropdowns in one row and writes the date if all three
   are answered. A day that no longer exists in the chosen month, such as
   the 31st after switching to February, is pulled back to the last real
   day of that month rather than silently saving something else. */
function readDateRow(wrap) {
  if (!wrap) return;
  const pick = (part) => {
    const sel = wrap.querySelector('[data-datepart="' + part + '"]');
    return sel ? sel.value : '';
  };
  const y = pick('y');
  const mo = pick('m');
  let d = pick('d');

  if (mo && d) {
    const max = daysInThisMonth(y, mo);
    if (Number(d) > max) d = String(max).padStart(2, '0');
  }

  if (!y || !mo || !d) return;
  /* applyDateField repaints, either from the draft or from the record. */
  applyDateField(wrap.dataset.datefield, y + '-' + mo + '-' + d);
}

/* The cycle card only exists once there is a date to build it from, so
   a parent who never fills this in never sees an empty shell of it. */
function cycleCard(passed) {
  const info = passed || cycleInfo(store.parent.lastPeriod, null, store.parent.cycleLength);
  if (!info) return '';
  const row = (label, value, note) => `
    <div style="display:flex;gap:10px;align-items:baseline;padding:6px 0;border-top:1px solid rgba(0,0,0,.05)">
      <span class="tiny" style="width:118px;flex:none">${esc(label)}</span>
      <span class="grow">
        <span style="font-size:13px;font-weight:600;color:var(--ink)">${esc(value)}</span>
        ${note ? `<span class="tiny" style="display:block;margin-top:1px">${esc(note)}</span>` : ''}
      </span>
    </div>`;

  return `
  <div class="card" style="margin-bottom:8px">
    <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Where you are in your cycle</p>
    <p class="bodytext" style="margin-top:5px">${esc(cycleShortLine(info))}.</p>

    <div style="margin-top:9px">
      ${row('Next period', cycleDateLabel(info.nextPeriod),
        info.isLate
          ? info.daysLate + ' day' + (info.daysLate === 1 ? '' : 's') + ' past the estimate'
          : 'estimated, about ' + info.daysToNext + ' day' + (info.daysToNext === 1 ? '' : 's') + ' away')}
      ${row('Fertile window', cycleDateLabel(info.fertileStart) + ' to ' + cycleDateLabel(info.fertileEnd),
        info.inFertileWindow ? 'today falls inside it' : 'estimated, the six days ending at ovulation')}
      ${row('If you are pregnant', info.pregnancyLabel,
        'due ' + cycleDateLabelWithYear(info.dueDate) + ', by last period')}
    </div>

    <p class="tiny" style="margin-top:10px">${esc(CYCLE_DUE_DATE_NOTE)}</p>
    <p class="disclaimer" style="margin-top:8px">${esc(CYCLE_DISCLAIMER)}</p>
  </div>`;
}

/* The old all in one Profile screen is gone. It did four jobs: her
   details, the list of children, adding one, and the account. Each of
   those now has its own home, which is what made the app feel, in her
   words, all over the place. This is what is left of it: adding a
   child, which is the one job that needed a screen of its own. */

/* -----------------------------------------------------------------
   SETTINGS

   The things that are about the app rather than about anybody in it.
   Account, sync, the list of children as records rather than as faces,
   and which copy of the app this device is running.
   ----------------------------------------------------------------- */

function settingsChildRow(k) {
  const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
  return `
  <div class="card" style="margin-bottom:8px">
    <div style="display:flex;align-items:center;gap:11px">
      ${childFace(k, 40)}
      <span class="grow">
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">
          ${esc(k.name || 'Unnamed')}${isExampleChild(k) ? ' (example)' : ''}
        </span>
        <span class="tiny" style="display:block;margin-top:2px">
          ${esc(sum && sum.label ? sum.label : 'No birthday yet')}
        </span>
      </span>
    </div>
    <div style="display:flex;gap:7px;margin-top:10px;flex-wrap:wrap">
      <button class="chip" data-child="${esc(k.id)}">Open their profile</button>
      <button class="chip" data-removechild="${esc(k.id)}">Remove</button>
    </div>
  </div>`;
}

function screenSettings() {
  const kids = store.children;
  const st = cloudStatusLine();
  const border = st.tone === 'good' ? 'var(--sage)' : st.tone === 'warn' ? 'var(--attention)' : 'var(--line)';
  const p = store.parent || {};
  const editing = editingWho() === 'me';
  const v = editing ? store.profileEdit.values : p;

  const textField = (label, key, type, placeholder, help) => `
    <div class="card flat" style="margin-bottom:8px">
      <p class="eyebrow">${esc(label)}</p>
      <input class="inp" type="${type}" data-parentfield="${esc(key)}" id="pf_${esc(key)}"
        value="${esc(v[key] || '')}" placeholder="${esc(placeholder)}" autocomplete="off"
        style="margin-top:7px;width:100%" />
      ${help ? `<p class="tiny" style="margin-top:6px">${esc(help)}</p>` : ''}
    </div>`;

  const dateField = (label, key, help, back, ahead) => `
    <div class="card flat" style="margin-bottom:8px">
      <p class="eyebrow">${esc(label)}</p>
      ${dateSelects('parent:' + key, v[key] || '', back, ahead)}
      ${help ? `<p class="tiny" style="margin-top:6px">${esc(help)}</p>` : ''}
    </div>`;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <h1 class="title">Settings</h1>
    <p class="sub">Your details, your situation, and this copy of the app.</p>
  </div>
  <div class="sc">

    <p class="sect">Your details</p>
    <div class="editbar">
      ${editing ? `
        <button class="btn" data-edit="save">${icon('check', 15, '#fff')} Save</button>
        <button class="btn ghost" data-edit="cancel">Cancel</button>
      ` : `
        <button class="btn ghost" data-edit="me">${icon('star', 14, 'var(--deep)')} Edit</button>
      `}
    </div>

    ${editing ? `
      ${facePicker('me', v.photo)}
      ${editUnsavedNote()}
      ${textField('Your name', 'name', 'text', 'Richelle', '')}
      ${textField('Username', 'username', 'text', 'richelle_s', 'This is what other parents see in the community, not your real name.')}
      ${textField('Email', 'email', 'email', 'you@example.com', '')}
      ${dateField('Your birthday', 'birthday',
        'So the app can say it back to you on the day, the same as it does for the children.', 100, 0)}
      ${dateField('First day of your last period', 'lastPeriod',
        'Day one is the first day of real bleeding, not spotting the day before. Only you ever see this.', 2, 0)}
    ` : `
      <div class="card">
        ${readRow('Name', p.name, 'Add your name so the app knows who it is talking to')}
        ${readRow('Username', p.username, 'Not set, so the community will ask for one')}
        ${readRow('Email', p.email)}
        ${readRow('Birthday', p.birthday ? cycleDateLabelWithYear(p.birthday) : '')}
        ${readRow('Last period began', p.lastPeriod ? cycleDateLabel(p.lastPeriod) : '', 'Add it and the calendar fills itself in')}
      </div>
    `}

    <p class="sect" id="set-password">Password</p>
    ${passwordBlock()}

    <p class="sect">Willow</p>
    <button class="card learncard" data-ob="restart" style="width:100%;text-align:left">
      <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Show me around again</p>
      <p class="bodytext" style="margin-top:5px">
        Willow walks you through what the app does and what it can hold for you. Nothing you have
        already set is changed by running it again.
      </p>
    </button>

    ${/* Only ever here, and only after something has actually failed.
          Willow tells a parent what went wrong in plain words and that
          is all they need. This is the line underneath it, for whoever
          has to fix it, because "something went wrong" with the real
          reason thrown away is how an evening disappears. */ ''}
    ${willow.lastError ? `
    <div class="card flat" style="border-left:3px solid var(--attention)">
      <p class="eyebrow">${icon('info', 11, 'var(--attention)')} What Willow ran into last time</p>
      <p class="tiny" style="margin-top:6px;word-break:break-word;font-family:ui-monospace,SFMono-Regular,Menlo,monospace">
        ${esc(willow.lastError)}
      </p>
      <div style="display:flex;gap:7px;margin-top:9px;flex-wrap:wrap">
        <button class="chip" data-willow="copyerr">Copy it</button>
        <button class="chip" data-willow="clearerr">Clear</button>
      </div>
      ${store.willowCopied ? '<p class="tiny" style="margin-top:6px">Copied.</p>' : ''}
    </div>` : ''}

    ${situationBlock()}

    ${(() => {
      /* Only offered once there is somebody to offer it about, and it
         sits with the rest of what the app is allowed to know. */
      if (!kids.length) return '';
      return `
      <p class="sect">How each of them arrived</p>
      <p class="tiny" style="margin:-4px 0 10px">${esc(CHILD_ARRIVAL_NOTE)}</p>
      ${kids.map((k) => `
        <div class="card" style="margin-bottom:8px">
          <div style="display:flex;align-items:center;gap:10px">
            ${childFace(k, 34)}
            <span style="font-size:14px;font-weight:600;color:var(--ink)">${esc(k.name || 'Unnamed')}</span>
          </div>
          <div style="margin-top:8px">
            ${CHILD_ARRIVAL.map((a) => tickRow((k.arrival || []).indexOf(a.id) !== -1, a.label, '',
              'data-arrival="' + esc(a.id) + '" data-arrivalfor="' + esc(k.id) + '"')).join('')}
          </div>
        </div>`).join('')}`;
    })()}

    <p class="sect">Your account</p>
    <div class="card" style="border-left:3px solid ${border}">
      <p class="eyebrow">${icon(st.tone === 'good' ? 'check' : 'info', 11, 'var(--sage)')} ${esc(st.title)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(st.text)}</p>
      ${st.action ? `<button class="btn" style="margin-top:12px" data-auth="account">${esc(st.action)}</button>` : ''}
    </div>

    <button class="lrow" data-auth="signout" style="align-items:center">
      <span class="licon">${icon('back', 17, 'var(--deep)')}</span>
      <span class="grow">
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">Sign out</span>
        <span class="tiny" style="display:block;margin-top:2px">${auth.user
          ? esc(auth.user.email || 'Signed in')
          : 'Looking around without an account'}</span>
      </span>
    </button>

    <p class="sect" id="set-children">Your children</p>
    ${duplicateCard()}
    ${kids.map(settingsChildRow).join('')}
    ${childRow('plus', 'Add a child', 'Name and birthday is all it takes to start',
      'data-go="screen" data-id="addchild"')}
    ${childRow('people', esc(SHARE_TITLE), 'Give somebody else access to one of them, or use a code',
      'data-go="screen" data-id="sharing"')}

    <p class="sect">This app</p>
    ${childRow('shield', esc(PRIV_TITLE), esc(PRIV_SUB),
      'data-go="screen" data-id="privacy"')}
    ${(() => {
      const stamp = buildStamp();
      return `
      <div class="card flat">
        <p class="eyebrow">${icon('info', 11, 'var(--sage)')} Version</p>
        <p class="bodytext" style="margin-top:5px">
          ${stamp ? 'This device is running the copy built ' + esc(stamp) + '.'
            : 'This copy does not carry a build stamp.'}
          ${update.available ? ' A newer one is available.' : ''}
        </p>
        ${update.available
          ? `<button class="btn" style="margin-top:12px" data-update="go">Load the new version</button>`
          : `<button class="chip" style="margin-top:10px" data-update="check">Check for an update</button>`}
      </div>`;
    })()}

    <div class="card flat">
      <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} Your children's privacy</p>
      <p class="bodytext" style="margin-top:5px">
        A child's profile, milestones and notes belong to your account alone. They are never shown to
        another parent, never part of the community, and never carried into a post.
      </p>
    </div>
    ${editing ? editSaveBar() : ''}
  </div>`;
}

/* -----------------------------------------------------------------
   PASSWORD

   Two different jobs. Changing it needs the current one, which is
   Firebase being careful rather than the app being awkward: without it
   anybody who found an unlocked phone could lock the owner out of their
   own account. Forgetting it sends a link to the email on the account,
   which is the only way that can safely work.
   ----------------------------------------------------------------- */

const pw = { current: '', next: '', busy: false, note: '', tone: '', open: false };

function passwordBlock() {
  if (!auth.user) {
    return `
    <div class="card flat">
      <p class="bodytext">You are looking around without an account, so there is no password yet.
      Creating one keeps everything safe and carries it to your other devices.</p>
      <button class="btn" style="margin-top:12px" data-auth="account">Create an account</button>
    </div>`;
  }

  return `
  <div class="card">
    ${pw.open ? `
      <p class="eyebrow">Change your password</p>
      <input class="inp" type="password" id="pwCur" data-pw="current" value="${esc(pw.current)}"
        placeholder="Your current password" autocomplete="current-password"
        style="margin-top:8px;width:100%" />
      <input class="inp" type="password" id="pwNew" data-pw="next" value="${esc(pw.next)}"
        placeholder="New password, at least six characters" autocomplete="new-password"
        style="margin-top:8px;width:100%" />
      <div style="display:flex;gap:8px;margin-top:11px;justify-content:flex-end;flex-wrap:wrap">
        <button class="chip" data-pwdo="close">Cancel</button>
        <button class="btn" data-pwdo="save" ${pw.busy ? 'disabled' : ''}
          style="width:auto;flex:none;padding:10px 18px">${pw.busy ? 'Changing' : 'Change it'}</button>
      </div>
    ` : `
      <p class="bodytext">Signed in as ${esc(auth.user.email || 'your account')}.</p>
      <div style="display:flex;gap:8px;margin-top:11px;flex-wrap:wrap">
        <button class="chip" data-pwdo="open">Change password</button>
        <button class="chip" data-pwdo="reset" ${pw.busy ? 'disabled' : ''}>
          ${pw.busy ? 'Sending' : 'Email me a reset link'}
        </button>
      </div>
    `}
    ${pw.note ? `<p class="tiny" style="margin-top:9px;color:${pw.tone === 'bad' ? '#A85A44' : 'var(--deep)'};font-weight:600">${esc(pw.note)}</p>` : ''}
  </div>`;
}

async function pwChange() {
  if (pw.busy) return;
  if (!pw.current || !pw.next) { pw.note = 'Both boxes need filling in.'; pw.tone = 'bad'; render(); return; }
  if (String(pw.next).length < 6) { pw.note = 'A new password needs at least six characters.'; pw.tone = 'bad'; render(); return; }
  pw.busy = true; pw.note = ''; render();
  try {
    const { fbAuth, authMod } = await loadFirebase();
    const user = fbAuth.currentUser;
    const cred = authMod.EmailAuthProvider.credential(user.email, pw.current);
    await authMod.reauthenticateWithCredential(user, cred);
    await authMod.updatePassword(user, pw.next);
    pw.note = 'Password changed.';
    pw.tone = 'good';
    pw.current = ''; pw.next = ''; pw.open = false;
  } catch (err) {
    const code = String((err && err.code) || '');
    pw.note = /wrong-password|invalid-credential/.test(code)
      ? 'That current password is not right.'
      : /weak-password/.test(code) ? 'That new password is too easy to guess.'
      : /requires-recent-login/.test(code) ? 'Sign out and back in, then try again.'
      : 'That did not work. Try the reset link instead.';
    pw.tone = 'bad';
  }
  pw.busy = false;
  render();
}

async function pwReset() {
  if (pw.busy) return;
  const email = (auth.user && auth.user.email) || store.parent.email;
  if (!email) { pw.note = 'There is no email on this account to send it to.'; pw.tone = 'bad'; render(); return; }
  pw.busy = true; pw.note = ''; render();
  try {
    const { fbAuth, authMod } = await loadFirebase();
    await authMod.sendPasswordResetEmail(fbAuth, email);
    pw.note = 'Link sent to ' + email + '. Check your junk folder if it is not there.';
    pw.tone = 'good';
  } catch (err) {
    pw.note = 'That did not send. Check the email on your account is right.';
    pw.tone = 'bad';
  }
  pw.busy = false;
  render();
}

function screenAddChild() {
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">Add a child</h1>
    <p class="sub">A name and a date is all it takes to start, whether they are here yet or not.</p>
  </div>
  <div class="sc">
    <div class="card">
      <p class="eyebrow">Their name</p>
      <input class="inp" type="text" id="newChildName" value="${esc(store.draftChildName)}"
        placeholder="${esc(store.draftExpecting ? 'Or what you call them for now' : 'Their name')}"
        autocomplete="off" style="margin-top:8px;width:100%" />
      ${store.draftExpecting ? `<p class="tiny" style="margin-top:7px">${esc(EXP_NAME_NOTE)}</p>` : ''}

      <p class="eyebrow" style="margin-top:14px">${esc(EXP_ADD_TITLE)}</p>
      <div class="chips" style="margin-top:8px">
        ${EXP_ADD_OPTIONS.map((o) => `
          <button class="chip" data-exp="kind" data-id="${esc(o.id)}"
            aria-pressed="${(o.id === 'expecting') === !!store.draftExpecting}">${esc(o.label)}</button>`).join('')}
      </div>

      <p class="eyebrow" style="margin-top:14px">${esc(store.draftExpecting ? 'The due date' : 'Their birthday')}</p>
      <div style="margin-top:7px">${dateSelects('draft', store.draftChildBday || '',
        store.draftExpecting ? 1 : 25, store.draftExpecting ? 2 : 1)}</div>
      <p class="tiny" style="margin-top:9px">${esc(store.draftExpecting ? EXP_DUE_NOTE : EXP_ADD_NOTE)}</p>
      <button class="btn" data-addchild="1" style="margin-top:14px;width:100%">${esc(store.draftExpecting ? 'Add this baby' : 'Add this child')}</button>
    </div>

    <div class="card flat">
      <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} What happens next</p>
      <p class="bodytext" style="margin-top:5px">
        Everything reshapes around their age straight away, from sleep windows to what to say at
        bedtime. You can add their photo, and turn on any support lenses, from their own profile.
      </p>
    </div>

    <div class="card flat">
      <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} Your children's privacy</p>
      <p class="bodytext" style="margin-top:5px">
        A child's profile, milestones and notes belong to your account alone. They are never shown to
        another parent, never part of the community, and never carried into a post.
      </p>
    </div>
  </div>`;
}



/* =================================================================
   VACCINES

   Two things held at once. The parent decides, and the evidence is
   not a coin flip. The screen says both, in that order, and it does
   not soften either one to make the other easier.

   The declining section is deliberately the most practical part of
   the screen. A family that has decided against still needs to know
   which fever means go now, and withholding that to signal
   disapproval would put a child at risk to make a point.
   ================================================================= */

function screenVaccines() {
  const st = VACCINE_STANCE;
  const r = YOUR_RIGHTS;
  const d = IF_YOU_DECLINE;
  const ap = ASK_YOUR_PEDIATRICIAN;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="hub">${icon('back', 15, 'var(--deep)')} Back</button>
    <p class="eyebrow" style="margin-top:6px">Your call</p>
    <h1 class="title sm">Vaccines</h1>
  </div>
  <div class="sc">

    <div class="card leafy">
      <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} ${esc(st.headline)}</p>
      <p class="bodytext" style="margin-top:6px">${esc(st.body)}</p>
      <p class="bodytext" style="margin-top:9px;font-style:italic">${esc(st.noShame)}</p>
    </div>

    <p class="sect">What you are entitled to</p>
    ${list(r.consent)}

    <div class="card flat">
      <p class="eyebrow">${icon('note', 11, 'var(--taupe)')} Exemptions</p>
      <p class="bodytext" style="margin-top:5px">${esc(r.exemptions)}</p>
    </div>

    ${dsec('What follows from each choice', list(r.realConsequences))}

    <p class="sect">The questions people actually ask</p>
    <p class="tiny" style="margin:-4px 0 10px">
      Answered straight. If an answer here ever feels like it is managing you rather than informing you,
      that is a bug worth telling us about.
    </p>
    ${COMMON_QUESTIONS.map((q) => `
      <div class="card" style="margin-bottom:10px">
        <div style="display:flex;align-items:flex-start;gap:9px">
          <span style="flex:1;font-size:14px;font-weight:600;color:var(--ink);line-height:1.35">${esc(q.q)}</span>
          ${evidenceTag(q.evidence)}
        </div>
        <p class="bodytext" style="margin-top:8px">${esc(q.a)}</p>
        ${q.more ? `<p class="tiny" style="margin-top:8px;line-height:1.6">${esc(q.more)}</p>` : ''}
      </div>`).join('')}

    <p class="sect">If you are declining, or waiting</p>
    <div class="card leafy">
      <p class="eyebrow">${icon('heart', 11, 'var(--sage)')} ${esc(d.headline)}</p>
      <p class="bodytext" style="margin-top:6px">${esc(d.opening)}</p>
    </div>

    ${dsec('Keep a doctor', list(d.keepYourDoctor))}
    ${dsec('Know which signs mean go now', list(d.knowTheSigns, true))}

    <div class="card" style="border-left:3px solid var(--attention)">
      <p class="eyebrow">${icon('info', 11, 'var(--attention)')} Tell every clinician</p>
      <p class="bodytext" style="margin-top:5px">${esc(d.tellClinicians)}</p>
    </div>

    ${dsec('Practical things to plan for', list(d.practical))}

    <div class="card" style="background:#FCF2EE;border:1.5px solid #DDA192;box-shadow:none">
      <p class="eyebrow" style="color:#A85A44">One specific warning</p>
      <p class="bodytext" style="margin-top:5px">${esc(d.vitaminA)}</p>
    </div>

    <div class="card flat">
      <p class="bodytext" style="font-style:italic">${esc(d.revisit)}</p>
    </div>

    <p class="sect">${esc(ap.headline)}</p>
    ${ap.questions.map((q) => `
      <div class="quote"><q>${esc(q)}</q></div>`).join('')}
    ${dsec('Making the conversation work', list(ap.howToBeHeard))}

    <p class="sect">Sources</p>
    ${sourceRows(getAllVaccineSources())}

    <p class="disclaimer">${esc(VACCINE_DISCLAIMER)}</p>
  </div>`;
}


/* =================================================================
   ACCOUNTS

   The app opens here. Everything else sits behind it.

   Sign in runs against Firebase Authentication, so the password a
   parent types goes straight from their browser to Google and is
   never stored by this app, never written to the page, and never
   sent anywhere else. There is no password field anywhere in the
   rest of the app and there should never be one.

   "Look around first" exists on purpose. A parent deciding whether to
   trust an app with their child's information should be able to see
   what is inside before handing anything over. That is also the mode
   the public site opens in for anyone browsing.
   ================================================================= */


/* True once the person is allowed past the front door, either way. */
function hasAccess() {
  return !!auth.user || auth.guest;
}

/* Who this account is, to Firebase. Read through one function rather
   than reaching into auth.user.uid all over the place, because a guest
   has no user at all and every one of those reads would have to
   remember that. */
function myUid() {
  return (auth.user && auth.user.uid) || '';
}

/* Loads the Firebase SDK the first time it is needed, rather than on
   every page load, so someone reading the public site never pays for a
   library they did not use. */
let firebasePromise = null;

function loadFirebase() {
  if (firebasePromise) return firebasePromise;
  const v = FIREBASE_SDK_VERSION;
  firebasePromise = (async () => {
    const appMod = await import(`https://www.gstatic.com/firebasejs/${v}/firebase-app.js`);
    const authMod = await import(`https://www.gstatic.com/firebasejs/${v}/firebase-auth.js`);
    const app = appMod.initializeApp(FIREBASE_CONFIG);

    /* App Check, if there is a key to do it with. It has to be set up
       before anything else touches the app, which is why it lives here
       rather than next to Willow, who is the only part that currently
       needs it. Wrapped because a bad or missing key must cost the site
       Willow, not sign in and not syncing. */
    if (typeof RECAPTCHA_SITE_KEY === 'string' && RECAPTCHA_SITE_KEY) {
      try {
        const acMod = await import(`https://www.gstatic.com/firebasejs/${v}/firebase-app-check.js`);
        acMod.initializeAppCheck(app, {
          provider: new acMod.ReCaptchaEnterpriseProvider(RECAPTCHA_SITE_KEY),
          isTokenAutoRefreshEnabled: true,
        });
      } catch (err) {
        /* Carry on unprotected rather than not at all. */
      }
    }

    const fbAuth = authMod.getAuth(app);
    authMod.onAuthStateChanged(fbAuth, (u) => {
      auth.user = u;
      auth.ready = true;
      auth.checking = false;
      /* Remember, for the next page load, whether this browser has a
         session worth waiting for. Without this a refresh shows the sign
         in screen before Firebase has had a chance to answer. */
      store.hadSession = !!u;
      if (u) {
        store.guest = false;
        auth.guest = false;
        // Carry the account details into the profile the app already uses.
        if (!store.parent.email) store.parent.email = u.email || '';
        if (!store.parent.name && u.displayName) store.parent.name = u.displayName;
        /* This is the moment the account becomes real, so it is the
           moment her work stops living in one browser. */
        cloudStart(app, u.uid);
      } else {
        cloudStop();
      }
      flushStore();
      render();
    });
    return { app, fbAuth, authMod };
  })().catch((err) => {
    firebasePromise = null;
    throw err;
  });
  return firebasePromise;
}

/* Turns Firebase's error codes into something a tired person can act on. */
function authMessage(code) {
  const map = {
    'auth/invalid-email': 'That email address does not look right.',
    'auth/missing-password': 'Please enter a password.',
    'auth/weak-password': 'Passwords need to be at least six characters.',
    'auth/email-already-in-use': 'There is already an account with that email. Try signing in instead.',
    'auth/invalid-credential': 'That email and password do not match an account.',
    'auth/user-not-found': 'No account with that email yet. Create one below.',
    'auth/wrong-password': 'That password is not right.',
    'auth/too-many-requests': 'Too many attempts. Wait a minute and try again.',
    'auth/network-request-failed': 'Could not reach the network. Check your connection.',
  };
  return map[code] || 'Something went wrong. Please try again.';
}

async function doSignUp() {
  auth.busy = true; auth.error = ''; render();
  try {
    const { fbAuth, authMod } = await loadFirebase();
    const cred = await authMod.createUserWithEmailAndPassword(
      fbAuth, auth.form.email.trim(), auth.form.password
    );
    if (auth.form.name.trim()) {
      await authMod.updateProfile(cred.user, { displayName: auth.form.name.trim() });
      store.parent.name = auth.form.name.trim();
    }
    store.parent.email = auth.form.email.trim();
    /* A brand new account is the one moment we KNOW somebody has never
       seen this app before, so it is the only place the walkthrough is
       opened automatically. */
    onboardStart();
    flushStore();
    auth.form.password = '';
  } catch (err) {
    auth.error = authMessage(err && err.code);
  }
  auth.busy = false; render();
}

async function doSignIn() {
  auth.busy = true; auth.error = ''; render();
  try {
    const { fbAuth, authMod } = await loadFirebase();
    await authMod.signInWithEmailAndPassword(fbAuth, auth.form.email.trim(), auth.form.password);
    auth.form.password = '';
  } catch (err) {
    auth.error = authMessage(err && err.code);
  }
  auth.busy = false; render();
}

async function doSignOut() {
  try {
    const { fbAuth, authMod } = await loadFirebase();
    await authMod.signOut(fbAuth);
  } catch (err) { /* already signed out, or offline. Fall through. */ }
  /* Only a real account has a copy in the cloud to come back to. A
     guest signing out would simply be handing over her own work. */
  const hadAccount = !!auth.user;
  cloudStop();
  auth.user = null;
  auth.guest = false;
  auth.checking = false;
  store.hadSession = false;
  store.guest = false;
  if (hadAccount) {
    /* Signing out on a shared computer must not leave one parent's
       children sitting in the next person's browser. The account keeps
       them, so this is a clear rather than a loss. */
    store.children = [];
    store.activeChildId = null;
    store.parent = { name: '', username: '', email: '', birthday: '', lastPeriod: '', cycleLength: '', photo: '', calledBy: '', calledByOther: '', refersTo: '', situation: { stages: [], path: '', roles: [], support: [] } };
    store.posts = [];
    store.postDraft = null;
    store.birthdaySeen = {};
    store.bagChecked = [];
    store.deletedChildIds = [];
    store.parentUpdatedAt = 0;
    store.logDraft = { typeId: null, values: {} };
  }
  flushStore();
  auth.form = { name: '', email: '', password: '' };
  auth.mode = 'login';
  state.tab = IS_DESKTOP ? 'home' : 'welcome';
  state.view = null;
  selectChild(null);
  render();
}

async function doReset() {
  if (!auth.form.email.trim()) { auth.error = 'Enter your email first and we will send a reset link.'; render(); return; }
  auth.busy = true; auth.error = ''; render();
  try {
    const { fbAuth, authMod } = await loadFirebase();
    await authMod.sendPasswordResetEmail(fbAuth, auth.form.email.trim());
    auth.error = 'Reset link sent. Check your email.';
  } catch (err) {
    auth.error = authMessage(err && err.code);
  }
  auth.busy = false; render();
}

/* Shown for the moment between a page load and Firebase confirming who
   is signed in. Deliberately quiet and wordless about accounts, because
   the answer is almost always yes and a parent should not be made to
   wonder whether they have been logged out. */
function screenRestoring() {
  return `
  ${cornerLeaves()}
  <div class="sc" style="margin-top:${IS_DESKTOP ? '120px' : '90px'};text-align:center">
    ${growthSVG(3, 86)}
    <p class="bodytext" style="margin-top:16px;color:var(--taupe)">
      Welcome back${store.parent.name ? ', ' + esc(store.parent.name.split(' ')[0]) : ''}.
    </p>
  </div>`;
}

function screenAuth() {
  const signup = auth.mode === 'signup';
  const f = auth.form;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <h1 class="title">${signup ? 'Welcome' : 'Welcome back'}</h1>
    <p class="sub">${signup
      ? 'One profile for you, one for each of them, and eighteen years of knowing what is going on.'
      : 'Everything is where you left it.'}</p>
  </div>
  <div class="sc" style="max-width:430px">

    ${inviteDoorBlock()}

    <div class="chips" style="margin-bottom:16px">
      <button class="chip" data-auth="mode" data-val="signup" aria-pressed="${signup}">Create account</button>
      <button class="chip" data-auth="mode" data-val="login" aria-pressed="${!signup}">Sign in</button>
    </div>

    ${signup ? `
      <div class="card flat" style="margin-bottom:8px">
        <p class="eyebrow">Your name</p>
        <input class="inp" id="authName" type="text" value="${esc(f.name)}"
          placeholder="Richelle" autocomplete="name" style="margin-top:7px;width:100%" />
      </div>` : ''}

    <div class="card flat" style="margin-bottom:8px">
      <p class="eyebrow">Email</p>
      <input class="inp" id="authEmail" type="email" value="${esc(f.email)}"
        placeholder="you@example.com" autocomplete="email" style="margin-top:7px;width:100%" />
    </div>

    <div class="card flat" style="margin-bottom:8px">
      <p class="eyebrow">Password</p>
      <input class="inp" id="authPass" type="password" value="${esc(f.password)}"
        placeholder="${signup ? 'At least six characters' : 'Your password'}"
        autocomplete="${signup ? 'new-password' : 'current-password'}"
        style="margin-top:7px;width:100%" />
    </div>

    ${auth.error ? `
      <div class="card" style="border-left:3px solid var(--attention);margin-bottom:8px">
        <p class="bodytext">${esc(auth.error)}</p>
      </div>` : ''}

    <button class="lrow" data-auth="${signup ? 'signup' : 'login'}"
      style="justify-content:center;background:var(--deep);border-color:var(--deep);margin-top:4px">
      <span style="font-size:14.5px;font-weight:600;color:#fff">
        ${auth.busy ? 'One moment' : (signup ? 'Create my account' : 'Sign in')}
      </span>
    </button>

    ${!signup ? `
      <button class="lrow" data-auth="reset" style="justify-content:center;margin-top:8px">
        <span class="tiny">Forgot your password?</span>
      </button>` : ''}

    <button class="lrow" data-auth="guest" style="justify-content:center;margin-top:14px">
      <span style="font-size:13.5px;font-weight:600;color:var(--deep)">Look around first</span>
    </button>
    <p class="tiny" style="text-align:center;margin-top:8px">
      Have a proper look before you decide. You can make an account whenever you like.
    </p>

    <p class="disclaimer" style="text-align:center">
      Your child's profile, milestones and notes are yours. They are never part of the community,
      and they are never shown to another parent.
    </p>
  </div>`;
}


/* -----------------------------------------------------------------
   LOG DRAFTS AND SAVING
   ----------------------------------------------------------------- */

/* One draft at a time, keyed by which log it belongs to, so opening a
   different log never inherits half of the last one. */
function ensureDraft() {
  const v = state.view;
  const id = v && v.type === 'log' ? v.id : (store.logDraft && store.logDraft.typeId);
  if (!store.logDraft || store.logDraft.typeId !== id) {
    store.logDraft = { typeId: id, values: {} };
  }
  return store.logDraft;
}

function saveLog(typeId) {
  const t = getLogType(typeId);
  const k = activeChild();
  if (!t || !k) return;
  const d = ensureDraft();
  const values = Object.assign({}, d.values || {});

  /* An empty log is somebody tapping save by mistake, and a row with
     nothing in it is worse than no row at all. */
  const filled = Object.keys(values).some((key) => {
    const v = values[key];
    return Array.isArray(v) ? v.length > 0 : v !== '' && v != null;
  });
  if (!filled && t.fields.some((f) => f.required)) return;

  if (!Array.isArray(k.logs)) k.logs = [];
  /* Newest first, because the list is read from the top and the thing
     a parent wants is almost always the last one. */
  k.logs.unshift({
    id: 'l' + Date.now() + Math.floor(Math.random() * 1000),
    typeId: typeId,
    at: new Date().toISOString(),
    values: values,
  });
  if (k.logs.length > 500) k.logs.length = 500;
  notedSet(typeId);
  nudgeMaybe(typeId, values);
  store.logDraft = { typeId: null, values: {} };
  if (store.logFrom) {
    state.tab = store.logFrom.tab;
    state.view = store.logFrom.view;
    store.logFrom = null;
  } else {
    state.view = null;
    state.tab = 'logs';
  }
  flushStore();
}

/* =================================================================
   THE FIVE TABS

   Five reasons a parent picks up the phone, in roughly the order
   they happen through a day. Today is the daily driver. Right Now is
   when something is going wrong. The child tab is everything about
   one child. Logs is what has been tracked. Me is the parent, and it
   is never hidden by opening a child.
   ================================================================= */

/* The growth drawing order for a child, used on the header chips. */
function chipGrowthOrder(k) {
  const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
  const g = sum && sum.stageId ? getGrowthDetail(sum.stageId) : null;
  return g ? g.order : 0;
}

/* THE HEADER NEVER CHANGES.

   Children as chips on the left, the parent on the right. Wherever
   you are in the app, switching child or getting back to yourself is
   one tap and it is always in the same place. This is the single
   most important piece of chrome in a multi child app, which is why
   it sits above every screen rather than inside some of them. */
/* markOnly is the front door, where there is nobody to switch to and
   nowhere to navigate, but the wordmark still belongs at the top. */
/* The row of faces lives on Home now rather than up here, so the header
   is the wordmark and her own face. Hers is a way back to herself from
   anywhere in the app, including from the middle of a child's profile,
   which is the thing the old chip row never quite did. */
/* Whoever is open, shown in the corner. She asked for this: open
   Stetson and the corner says Stetson, so there is never a moment of
   wondering whose screen you are looking at. */
function whoIsOpen() {
  const who = store.profileWho || 'me';
  if (state.tab === 'profile' && who !== 'me') {
    const k = store.children.filter((x) => x.id === who)[0];
    if (k) {
      return { id: k.id, name: (k.name || 'Unnamed').split(/\s+/)[0], face: childFace(k, 26), child: true };
    }
  }
  return {
    id: 'me',
    name: (store.parent.name || '').trim().split(/\s+/)[0] || 'Me',
    face: parentFace(26),
    child: false,
  };
}

function topBar(markOnly) {
  const mark = IS_DESKTOP ? `<div class="mark-holder">${wordmark(false)}</div>` : '';
  if (markOnly) return updateBar() + `<div class="topbar mark-only">${mark}</div>`;
  const who = whoIsOpen();
  /* Every deep screen carries its own Back, so the chip would make two.
     The one place nothing goes back is a child's profile, reached by
     tapping their circle, and that is what this is for. */
  const deep = !state.view && !!store.profileWho && store.profileWho !== 'me';
  return updateBar() + `
  <div class="topbar">
    <div class="topbar-left">
      ${deep ? `<button class="backchip" data-back="offchild">${icon('back', 15, 'var(--deep)')} Back</button>` : ''}
    </div>
    ${mark}
    <div class="me-slot">
      <button class="mebtn${store.menuOpen ? ' on' : ''}" data-menu="toggle" aria-label="${esc(who.name)}, open menu">
        ${who.face}<span>${esc(who.name)}</span>
        ${icon('chevdown', 13, store.menuOpen ? '#fff' : 'var(--deep)')}
      </button>
      ${store.menuOpen ? cornerMenu(who) : ''}
    </div>
  </div>`;
}

/* The drop down. Notifications first because that is the part that
   changes, then the family to switch between, then the settings and
   the way out. */
function cornerMenu(who) {
  const notes = pendingNotices();
  return `
  <div class="cmenu">
    <p class="cmenu-h">${notes.length ? notes.length + ' waiting on you' : 'Nothing waiting'}</p>
    ${notes.length ? notes.map((n) => `
      <button class="cmenu-row" ${n.attrs}>
        <span class="cmenu-ic">${icon(n.icon, 15, 'var(--deep)')}</span>
        <span class="grow">
          <span class="cmenu-t">${esc(n.title)}</span>
          <span class="cmenu-s">${esc(n.sub)}</span>
        </span>
      </button>`).join('') : `
      <p class="cmenu-empty">Check ins done, nothing needs you right now.</p>`}

    <div class="cmenu-rule"></div>
    <p class="cmenu-h">Switch to</p>
    <button class="cmenu-row${who.id === 'me' ? ' on' : ''}" data-me="1">
      ${parentFace(26)}
      <span class="grow"><span class="cmenu-t">${esc(store.parent.name || 'You')}</span>
      <span class="cmenu-s">${esc(calledByLabel(store.parent) || 'Your profile')}</span></span>
    </button>
    ${store.children.map((k) => `
      <button class="cmenu-row${who.id === k.id ? ' on' : ''}" data-child="${esc(k.id)}">
        ${childFace(k, 26)}
        <span class="grow"><span class="cmenu-t">${esc(k.name || 'Unnamed')}</span>
        <span class="cmenu-s">${esc(childAgeLabel(k))}</span></span>
      </button>`).join('')}

    <div class="cmenu-rule"></div>
    <button class="cmenu-row" data-go="screen" data-id="support">
      <span class="cmenu-ic">${icon('shield', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">${esc(SUP_TITLE)}</span>
      <span class="cmenu-s">A caseworker, somebody who frightens you, or somebody targeting your child</span></span>
    </button>

    <div class="cmenu-rule"></div>
    <p class="cmenu-h">Your account</p>
    <button class="cmenu-row" data-tab="settings">
      <span class="cmenu-ic">${icon('user', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">Your details</span>
      <span class="cmenu-s">Name, username, email and birthday</span></span>
    </button>
    <button class="cmenu-row" data-menugo="password">
      <span class="cmenu-ic">${icon('shield', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">${esc(auth.user ? 'Password' : 'Create an account')}</span>
      <span class="cmenu-s">${esc(auth.user ? 'Change it, or reset it by email' : 'Keeps everything safe and on every device')}</span></span>
    </button>
    <button class="cmenu-row" data-menugo="children">
      <span class="cmenu-ic">${icon('people', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">Your children</span>
      <span class="cmenu-s">${esc(store.children.length === 1 ? 'One child' : store.children.length + ' children')}, and how each of them arrived</span></span>
    </button>
    <button class="cmenu-row" data-go="screen" data-id="sharing">
      <span class="cmenu-ic">${icon('people', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">${esc(SHARE_TITLE)}</span>
      <span class="cmenu-s">Let somebody else see and add to a child</span></span>
    </button>
    ${pushConfigured() ? `
    <button class="cmenu-row" data-go="screen" data-id="notifications">
      <span class="cmenu-ic">${icon('info', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">${esc(PUSH_TITLE)}</span>
      <span class="cmenu-s">${esc(store.pushOn ? 'On. What the app may interrupt you for.' : 'Off. Nothing will interrupt you.')}</span></span>
    </button>` : ''}
    <button class="cmenu-row" data-menugo="situation">
      <span class="cmenu-ic">${icon('leaf', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">Where you are right now</span>
      <span class="cmenu-s">What the app brings forward and what it puts away</span></span>
    </button>

    <div class="cmenu-rule"></div>
    <p class="cmenu-h">The rules and the small print</p>
    <button class="cmenu-row" data-go="screen" data-id="privacy">
      <span class="cmenu-ic">${icon('shield', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">${esc(PRIV_TITLE)}</span>
      <span class="cmenu-s">${esc(PRIV_SUB)}</span></span>
    </button>
    <button class="cmenu-row" data-go="screen" data-id="rules">
      <span class="cmenu-ic">${icon('people', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">Community rules</span>
      <span class="cmenu-s">How the rooms work, and what gets a post taken down</span></span>
    </button>
    <button class="cmenu-row" data-go="screen" data-id="install">
      <span class="cmenu-ic">${icon('home', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">${esc(isInstalled() ? 'On your home screen' : INSTALL_TITLE)}</span>
      <span class="cmenu-s">${esc(isInstalled() ? 'Already installed on this device' : 'One tap to open, and it works with no signal')}</span></span>
    </button>
    <button class="cmenu-row" data-go="screen" data-id="about">
      <span class="cmenu-ic">${icon('info', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">About this app</span>
      <span class="cmenu-s">What it is for, what it is not, and which version you have</span></span>
    </button>

    <div class="cmenu-rule"></div>
    <button class="cmenu-row" data-auth="signout">
      <span class="cmenu-ic">${icon('back', 15, 'var(--deep)')}</span>
      <span class="grow"><span class="cmenu-t">${esc(auth.user ? 'Sign out' : 'Leave this device')}</span></span>
    </button>
  </div>`;
}

/* What is actually waiting. Real things only, never a made up badge,
   because a notification that means nothing teaches somebody to ignore
   all of them. */
function pendingNotices() {
  const out = [];
  store.children.filter((k) => !isExampleChild(k)).forEach((k) => {
    if (!ciSavedFor(k)) {
      out.push({
        icon: 'sun',
        title: 'How ' + ((k.name || 'they').split(/\s+/)[0]) + ' is doing today',
        sub: 'Thirty seconds, on their profile',
        attrs: 'data-child="' + esc(k.id) + '"',
      });
    }
  });
  /* A draft can only belong to a child young enough to have a
     checkpoint, but a birthday can pass while one is sitting there, and
     a reminder pointing at a screen this child no longer has is a dead
     end with a number on it. */
  if (msChangeCount() && getAgeSummary({
    name: (activeChild() || {}).name, birthday: (activeChild() || {}).birthday,
  }).checkpoint) {
    out.push({
      icon: 'chart',
      title: msChangeCount() + ' milestone' + (msChangeCount() === 1 ? '' : 's') + ' not saved',
      sub: 'Marked but waiting for Save',
      attrs: 'data-go="screen" data-id="milestones"',
    });
  }
  if (store.profileEdit) {
    out.push({
      icon: 'star',
      title: 'A profile is part way edited',
      sub: 'Your changes are held until you save them',
      attrs: 'data-me="1"',
    });
  }
  if (update.available) {
    out.push({
      icon: 'info', title: 'A newer version is ready', sub: 'Tap to load it',
      attrs: 'data-update="go"',
    });
  }
  return out;
}


/* -----------------------------------------------------------------
   THE CYCLE CALENDAR

   She asked for something like the widget in Flo: a month you can look
   at rather than a list of dates you have to hold in your head. Period
   days, the fertile window and the estimated ovulation day, all on one
   grid.

   Everything drawn here is an estimate from one date, and the card says
   so, because a calendar looks authoritative in a way a sentence does
   not and that is exactly the risk.
   ----------------------------------------------------------------- */

const CYCLE_BLEED_DAYS = 5;

/* ---------- HER PERIOD HISTORY ----------

   One date gave an estimate. A list of them gives her her own numbers,
   and a record she can read back to a provider rather than trying to
   remember in the room.

   Every date lives on the parent record, so it syncs with everything
   else. lastPeriod is kept as the newest entry so every existing screen
   and the pregnancy maths carry on working untouched. */

function periods() {
  const p = store.parent || {};
  let list = Array.isArray(p.periods) ? p.periods : [];
  /* Somebody who used the app before this existed has one date and no
     list. Carry it in rather than losing it. */
  if (!list.length && p.lastPeriod) list = [p.lastPeriod];
  return normalizePeriods(list);
}

function periodsSet(list) {
  const clean = normalizePeriods(list);
  store.parent.periods = clean;
  store.parent.lastPeriod = clean[0] || '';
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

function periodToggle(date) {
  const list = periods();
  const at = list.indexOf(date);
  if (at === -1) list.push(date);
  else list.splice(at, 1);
  periodsSet(list);
}

/* Her own average once she has two dates, the textbook figure until
   then, so the calendar is never drawing nothing. */
function cycleLen() {
  return predictLength(periods(), store.parent.cycleLength);
}

function cycleInfoNow(ref) {
  return cycleInfo(store.parent.lastPeriod, ref, cycleLen());
}

function cycleCalendar(info, monthOffset, editing, loggedList, periodAttr) {
  if (!info) return '';
  const today = ciToday();
  const parts = today.split('-');
  const base = new Date(Number(parts[0]), Number(parts[1]) - 1 + (monthOffset || 0), 1);
  const y = base.getFullYear();
  const m = base.getMonth();
  const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'][m];

  const key = (d) => y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
  const days = new Date(y, m + 1, 0).getDate();
  const lead = new Date(y, m, 1).getDay();

  /* The windows, projected forward and back from the one date she gave
     us, so the month either side reads correctly too. */
  const start = info.lastPeriod;
  const len = info.cycleLength;
  const logged = loggedList || periods();
  const pAttr = periodAttr || 'data-period';
  const marks = {};
  /* The estimate first, projected forward and back so the months either
     side read correctly. */
  for (let c = -2; c <= 3; c++) {
    const s0 = ciDayBefore(start, -c * len);
    for (let i = 0; i < CYCLE_BLEED_DAYS; i++) marks[ciDayBefore(s0, -i)] = 'bleed';
    if (!periodAttr) {
      const ov = ciDayBefore(s0, -(len - CYCLE_LUTEAL_DAYS));
      for (let i = 0; i <= 5; i++) {
        const d = ciDayBefore(ov, i);
        if (!marks[d]) marks[d] = 'fertile';
      }
      marks[ov] = 'ovul';
    }
  }
  /* Then anything she actually logged, painted over the top, because a
     day she recorded beats a day the app guessed. */
  const starts = {};
  logged.forEach((d0) => {
    starts[d0] = 1;
    for (let i = 0; i < CYCLE_BLEED_DAYS; i++) marks[ciDayBefore(d0, -i)] = 'bleed';
  });

  const cells = [];
  for (let i = 0; i < lead; i++) cells.push('<span class="cal-pad"></span>');
  for (let d = 1; d <= days; d++) {
    const k = key(d);
    const mark = marks[k] || '';
    const isToday = k === today;
    const isStart = !!starts[k];
    const cls = `cal-d ${mark}${isToday ? ' today' : ''}${isStart ? ' logged' : ''}`;
    if (editing) {
      cells.push(`<button class="${cls}" ${pAttr}="${esc(k)}"
        aria-label="${esc(cycleDateLabelWithYear(k))}${isStart ? ', logged, tap to remove' : ', tap to log a period start'}"
        aria-pressed="${isStart ? 'true' : 'false'}">${d}</button>`);
    } else {
      cells.push(`<span class="${cls}">${d}</span>`);
    }
  }

  return `
  <div class="calwrap">
    <div class="calhead">
      <button class="calnav" data-cal="-1" aria-label="Previous month">${icon('back', 14, 'var(--deep)')}</button>
      <span class="calmonth">${esc(monthName)} ${y}</span>
      <button class="calnav" data-cal="1" aria-label="Next month">${icon('chev', 14, 'var(--deep)')}</button>
    </div>
    <div class="calgrid">
      ${['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => `<span class="cal-w">${d}</span>`).join('')}
      ${cells.join('')}
    </div>
    <div class="callegend">
      <span><i class="k-bleed"></i> Period</span>
      ${periodAttr ? '' : `
      <span><i class="k-fertile"></i> Fertile window</span>
      <span><i class="k-ovul"></i> Ovulation</span>`}
      <span><i class="k-logged"></i> ${periodAttr ? 'Logged' : 'You logged it'}</span>
    </div>
    ${editing ? `<p class="tiny" style="margin-top:7px;text-align:center">
      Tap the day a period started. Tap it again to take it off.</p>` : ''}
  </div>`;
}

/* The Home version. A glance, a calendar, and the standing reminder
   that all of it is estimated. */
function cycleWidget() {
  const p = store.parent;
  const mode = cycleMode(situation());
  const list = periods();
  const stats = cycleStats(list);

  if (mode === 'pregnant') {
    const info = cycleInfoNow();
    return `
    <div class="card">
      <p class="eyebrow">${icon('heart', 11, 'var(--sage)')} Your pregnancy</p>
      ${info ? `
        <p class="liftline" style="font-size:17px">${esc(info.pregnancyLabel)}</p>
        <p class="tiny" style="margin-top:4px">Due ${esc(cycleDateLabelWithYear(info.dueDate))}, counted from your last period.
        A dating scan beats this and always wins.</p>
      ` : `
        <p class="bodytext" style="margin-top:5px">Log the first day of your last period below and
        the app can work out how far along you are.</p>
        <button class="btn ghost sm" style="width:100%;margin-top:10px" data-cycle="edit">Log a period</button>`}
    </div>`;
  }

  const info = cycleInfoNow();
  const editing = !!store.cycleEdit;

  /* Nothing logged yet. One button, and it opens the calendar she is
     going to use every month anyway rather than sending her to
     Settings to type a date. */
  if (!info) {
    return `
    <div class="card">
      <p class="eyebrow">${icon('calendar', 11, 'var(--sage)')} Your cycle</p>
      <p class="bodytext" style="margin-top:5px">
        Tap the day your last period started and this fills itself in. Log each one as it comes and
        the app works out your own average rather than assuming twenty eight days.
      </p>
      ${editing ? cycleCalendar(
        { lastPeriod: ciToday(), cycleLength: CYCLE_AVERAGE_LENGTH }, store.calMonth || 0, true) : ''}
      <button class="btn${editing ? ' ghost' : ''}" style="width:100%;margin-top:11px" data-cycle="${editing ? 'done' : 'edit'}">
        ${editing ? 'Done' : 'Log a period'}
      </button>
    </div>`;
  }

  const lead = info.isLate
    ? info.daysLate + ' day' + (info.daysLate === 1 ? '' : 's') + ' past the estimate'
    : info.daysToNext === 0 ? 'The estimate lands today'
    : info.inFertileWindow ? 'Inside the estimated fertile window'
    : 'About ' + info.daysToNext + ' day' + (info.daysToNext === 1 ? '' : 's') + ' to the next one';

  const rows = periodHistoryRows(list);

  return `
  <div class="card">
    <div style="display:flex;align-items:center;gap:12px">
      <span class="cycday">
        <span class="cycday-n">${info.dayOfCycle}</span>
        <span class="cycday-l">day</span>
      </span>
      <span class="grow">
        <span class="eyebrow" style="display:block">Your cycle</span>
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);margin-top:2px">${esc(lead)}</span>
        <span class="tiny" style="display:block;margin-top:3px">
          ${stats.cycles
            ? esc(cycleLengthLine(stats))
            : 'Counting from the one date so far. Log the next one and this becomes your own average.'}
        </span>
        ${mode === 'trying' ? `<span class="tiny" style="display:block;margin-top:3px">
          Fertile window ${esc(cycleDateLabel(info.fertileStart))} to ${esc(cycleDateLabel(info.fertileEnd))}</span>` : ''}
      </span>
    </div>

    ${cycleCalendar(info, store.calMonth || 0, editing)}

    <div style="display:flex;gap:7px;margin-top:10px;flex-wrap:wrap">
      <button class="chip${editing ? ' on' : ''}" data-cycle="${editing ? 'done' : 'edit'}"
        ${editing ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}>
        ${icon(editing ? 'check' : 'calendar', 12, 'var(--deep)')} ${editing ? 'Done logging' : 'Log a period'}
      </button>
      <button class="chip" data-cycle="today">Started today</button>
      ${rows.length ? `<button class="chip" data-cycle="history">
        ${store.cycleHistory ? 'Hide' : 'All ' + rows.length + ' logged'}
      </button>` : ''}
    </div>

    ${stats.note ? `
    <p class="tiny" style="margin-top:9px">${icon('chart', 10, 'var(--sage)')} ${esc(stats.note)}</p>` : ''}

    ${store.cycleHistory && rows.length ? `
    <div class="cychist">
      ${rows.map((r) => `
        <div class="cychrow">
          <span class="grow">
            <span class="cychdate">${esc(cycleDateLabelWithYear(r.date))}</span>
            <span class="tiny">${r.gap
              ? esc(r.gap + ' days after the one before')
              : 'The earliest one you have logged'}</span>
          </span>
          <button class="chip" data-period-del="${esc(r.date)}" aria-label="Remove ${esc(cycleDateLabel(r.date))}">Remove</button>
        </div>`).join('')}
    </div>` : ''}

    <p class="tiny" style="margin-top:9px">Estimates from the dates you logged, not a test and not
    birth control.</p>
  </div>`;
}

/* -----------------------------------------------------------------
   POSTS

   Somewhere to write things down and keep photos, the way anybody
   already knows how to use.

   THE RULE SHE SET, AND IT IS THE IMPORTANT ONE
   Private is the default and every post is a deliberate choice. A
   child's profile is never public. It is a place for a parent or a
   carer to document, and nothing in it is ever shared. Only a post can
   be public, and only because she pressed the button that says so.

   A post carrying a photo says out loud what sharing it means, every
   time, because that is the one that cannot be taken back.
   ----------------------------------------------------------------- */

/* The reactions a public post can collect. Hers are the five she named,
   plus laughing, which is the one people actually reach for on a post
   about a good day.

   Stored on the post as { whoever: 'like' }, one each, the way Facebook
   does it, so the counts are just a tally of that map. Posts ride along
   in the parent record, so a reaction syncs to her other devices with
   everything else. */
const POST_REACTIONS = [
  { id: 'like', glyph: '\uD83D\uDC4D', label: 'Like' },
  { id: 'love', glyph: '\u2764\uFE0F', label: 'Love' },
  { id: 'haha', glyph: '\uD83D\uDE04', label: 'Haha' },
  { id: 'sad', glyph: '\uD83D\uDE22', label: 'Sad' },
  { id: 'angry', glyph: '\uD83D\uDE20', label: 'Angry' },
  { id: 'dislike', glyph: '\uD83D\uDC4E', label: 'Dislike' },
];

/* A small keyboard for the composer. Grouped the way somebody writing
   about their child would reach for them, rather than alphabetically. */
const POST_EMOJI = [
  { group: 'Faces', chars: ['\uD83D\uDE0A', '\uD83D\uDE02', '\uD83E\uDD70', '\uD83D\uDE0D', '\uD83D\uDE2D', '\uD83D\uDE05', '\uD83D\uDE34', '\uD83D\uDE47', '\uD83E\uDD74', '\uD83D\uDE4C', '\uD83D\uDC4F', '\uD83E\uDD17'] },
  { group: 'Love', chars: ['\u2764\uFE0F', '\uD83E\uDDE1', '\uD83D\uDC9B', '\uD83D\uDC9A', '\uD83D\uDC99', '\uD83D\uDC9C', '\uD83E\uDD0D', '\uD83D\uDC96', '\uD83D\uDC95', '\uD83D\uDCAF', '\u2728', '\uD83C\uDF1F'] },
  { group: 'Them', chars: ['\uD83D\uDC76', '\uD83D\uDC67', '\uD83D\uDC66', '\uD83E\uDDD2', '\uD83C\uDF7C', '\uD83E\uDDF8', '\uD83C\uDFA8', '\u26BD', '\u26BE', '\uD83C\uDFC0', '\uD83D\uDCDA', '\uD83C\uDF93'] },
  { group: 'Days', chars: ['\uD83C\uDF89', '\uD83C\uDF82', '\uD83C\uDF88', '\uD83C\uDF81', '\u2600\uFE0F', '\uD83C\uDF19', '\uD83C\uDF08', '\uD83C\uDF3F', '\uD83C\uDF3B', '\uD83C\uDF3C', '\u2615', '\uD83C\uDFE1'] },
];

const POST_VISIBILITY = [
  { id: 'private', label: 'Just me', help: 'Nobody else ever sees this.' },
  { id: 'public', label: 'Share to Community', help: 'Other parents see this under your username.' },
];

function postDraft() {
  if (!store.postDraft || typeof store.postDraft !== 'object') {
    store.postDraft = { text: '', photos: [], files: [], visibility: 'private', childId: '', group: '' };
  }
  /* photos is the old shape, a list of data URLs sitting on the record
     itself. Everything new goes into files, which holds links to
     Storage instead. Both are read, only files is written, and posts
     she made before this build keep working untouched. */
  if (!Array.isArray(store.postDraft.photos)) store.postDraft.photos = [];
  if (!Array.isArray(store.postDraft.files)) store.postDraft.files = [];
  /* Drafts saved before rooms existed have no group. Empty means the
     main feed, which is the right place for them. */
  if (typeof store.postDraft.group !== 'string') store.postDraft.group = '';
  return store.postDraft;
}

function postHasContent() {
  const d = postDraft();
  return !!(String(d.text || '').trim() || d.photos.length || d.files.length);
}

/* THE PICKER, appended to the body once at boot.

   Same reason as the photo one and the memory one: an input living
   inside the part of the page that gets rebuilt on every repaint does
   not survive a phone backgrounding the app while the camera roll is
   open, and the file comes back to an element that no longer exists.
   That is how Stetson's photo went missing the first time. */
let postInput = null;
let postKind = 'photo';

function ensurePostInput() {
  if (postInput && postInput.isConnected) return postInput;
  const el = document.createElement('input');
  el.type = 'file';
  el.id = 'rsgPostIn';
  el.style.position = 'fixed';
  el.style.left = '-9999px';
  el.setAttribute('aria-hidden', 'true');
  el.addEventListener('change', () => {
    const file = el.files && el.files[0];
    el.value = '';
    if (!file) return;
    postTakeFile(file, postKind);
  });
  document.body.appendChild(el);
  postInput = el;
  return el;
}

function postPick(kind) {
  const d = postDraft();
  const k = postMediaKind(kind);
  if (!k) return;
  if (d.photos.length + d.files.length >= POST_MAX_FILES) {
    store.photoError = 'That is ' + POST_MAX_FILES + ' already, which is as many as one post holds.';
    render();
    return;
  }
  postKind = kind;
  const el = ensurePostInput();
  el.accept = k.accept;
  store.photoError = '';
  try { el.click(); } catch (err) {
    store.photoError = 'This browser would not open the picker.';
    render();
  }
}

async function postTakeFile(file, kind) {
  const big = tooBigMessage(kind, file.size || 0);
  if (big) { store.photoError = big; render(); return; }

  store.photoBusy = 1;
  store.photoError = '';
  /* The box has to be open to show the progress, and picking a file
     from the folded composer is a real way in. */
  store.postOpen = true;
  render();

  try {
    const saved = await uploadFile(file, kind, (pct) => {
      store.photoBusy = Math.max(1, pct);
      render();
    });
    const cur = postDraft();
    cur.files.push(saved);
    store.photoBusy = 0;
    flushStore();
    render();
  } catch (err) {
    store.photoBusy = 0;
    store.photoError = 'That did not upload. ' + (navigator.onLine === false
      ? 'You are offline at the moment, so it is worth trying again when you are back.'
      : 'Worth trying again, and if it keeps failing tell me and I will look at it.');
    render();
  }
}

function postFileRemove(i) {
  const d = postDraft();
  const gone = d.files.splice(Number(i), 1);
  flushStore();
  render();
  /* Nothing has been posted yet, so a file dropped here is a file
     nobody will ever see and no reason to keep paying for. */
  deleteStoredFiles(gone);
}

/* One block, whatever the file turns out to be. Kept beside the memory
   version rather than merged with it, because a post plays inline and
   a memory sits in a card, and forcing one function to do both is how
   both end up slightly wrong. */
function postFileBlock(f, i, editing) {
  if (!f) return '';
  const x = editing
    ? `<button class="postpic-x" data-post="unfile" data-i="${i}" aria-label="Remove">${icon('plus', 14, '#fff')}</button>`
    : '';
  if (f.kind === 'video') {
    return `<span class="postpic vid"><video src="${esc(f.url)}" controls preload="metadata" playsinline></video>${x}</span>`;
  }
  if (f.kind === 'audio') {
    /* The remove button sits at the end of the row rather than floating
       over the corner, because a voice memo row is wide and a corner
       button lands on top of the player's own controls. */
    const audX = editing
      ? `<button class="aud-x" data-post="unfile" data-i="${i}" aria-label="Remove">&times;</button>`
      : '';
    return `<span class="postpic aud">${icon('note', 16, 'var(--deep)')}<audio src="${esc(f.url)}" controls preload="metadata"></audio>${audX}</span>`;
  }
  return `<span class="postpic"><img src="${esc(f.url)}" alt="" loading="lazy" />${x}</span>`;
}

function postSave() {
  const d = postDraft();
  const text = String(d.text || '').trim();
  if (!text && !d.photos.length && !d.files.length) return;
  /* Posting while a video is still going up would save a post with a
     hole in it, so the button is off until the upload lands. */
  if (store.photoBusy) return;
  store.posts = Array.isArray(store.posts) ? store.posts : [];
  store.posts.unshift({
    id: 'p' + Date.now() + Math.floor(Math.random() * 1000),
    text: text,
    photos: d.photos.slice(0, POST_MAX_FILES),
    files: d.files.slice(0, POST_MAX_FILES),
    visibility: d.visibility === 'public' ? 'public' : 'private',
    group: isGroupId(d.group || '') ? (d.group || '') : '',
    childId: d.childId || '',
    at: Date.now(),
  });
  /* Kept to a sensible number so the account record cannot grow without
     limit. Photos are the heavy part. */
  if (store.posts.length > 200) store.posts.length = 200;
  store.postDraft = null;
  /* The box folds back up once it is posted. Leaving it open with an
     empty draft under the thing she just wrote looks like it did not
     go through. */
  store.postOpen = false;
  store.photoError = '';
  store.emojiOpen = false;
  /* Home holds only the box she writes in, so without this she would
     press Post and watch nothing happen. */
  store.justPosted = true;
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

function postDelete(id) {
  const post = (store.posts || []).filter((p) => p.id === id)[0];
  store.posts = (store.posts || []).filter((p) => p.id !== id);
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
  /* The files go after the record, so the screen never waits on the
     network to show that the post is gone. */
  if (post) deleteStoredFiles(post.files);
}

/* Who is reacting. One person on this account today, but the map is
   keyed by person from the start, so when the Community is live the
   same posts count everybody's without being rebuilt. */
function reactorId() {
  return myUid() || (store.parent && store.parent.username) || 'me';
}

function postReactions(p) {
  return (p && p.reactions && typeof p.reactions === 'object') ? p.reactions : {};
}

function reactionCounts(p) {
  const out = {};
  const map = postReactions(p);
  Object.keys(map).forEach((who) => {
    const r = map[who];
    if (!r) return;
    out[r] = (out[r] || 0) + 1;
  });
  return out;
}

function reactionTotal(p) {
  const c = reactionCounts(p);
  return Object.keys(c).reduce((n, k) => n + c[k], 0);
}

function myReaction(p) {
  return postReactions(p)[reactorId()] || '';
}

/* Tapping the one already chosen takes it off again, which is what
   every one of these does and what everybody expects. */
function postReact(id, rid) {
  const p = (store.posts || []).filter((x) => x.id === id)[0];
  if (!p || p.visibility !== 'public') return;
  if (!p.reactions || typeof p.reactions !== 'object') p.reactions = {};
  const me = reactorId();
  if (p.reactions[me] === rid) delete p.reactions[me];
  else p.reactions[me] = rid;
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

/* Emoji land where the caret is rather than on the end, so one can go
   in the middle of a sentence she has already written. */
function postEmoji(ch) {
  const d = postDraft();
  const el = document.getElementById('postIn');
  /* Only trust the caret if she was actually typing in the box. An
     unfocused textarea reports nought, which would drop every emoji in
     front of the first word. */
  let at = String(d.text || '').length;
  if (el && document.activeElement === el) {
    try { if (el.selectionStart != null) at = el.selectionStart; } catch (err) {}
  }
  const t = String(d.text || '');
  d.text = t.slice(0, at) + ch + t.slice(at);
  postCaret = at + ch.length;
  flushStore();
  render();
}

function postSetVisibility(id, vis) {
  if (id === 'draft') { postDraft().visibility = vis; flushStore(); render(); return; }
  const p = (store.posts || []).filter((x) => x.id === id)[0];
  if (!p) return;

  /* Switching a post to public is now a real thing that happens
     somewhere else, rather than a word on her own record. It goes up
     waiting to be read, and it only counts as public once it is. */
  if (vis === 'public' && !p.sharedId) {
    feedShare(p).then((ok) => {
      if (!ok) return;
      p.visibility = 'public';
      store.parentUpdatedAt = Date.now();
      flushStore();
      render();
    });
    return;
  }
  if (vis !== 'public' && p.sharedId) {
    feedUnshare(p);
  }

  p.visibility = vis;
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

/* Posts get a bigger picture than a profile circle does, because the
   point of them is looking at the picture. */
function postPhotoAdd(url) {
  const d = postDraft();
  if (d.photos.length >= 4) return;
  d.photos.push(url);
  flushStore();
  render();
}

function postPhotoRemove(i) {
  const d = postDraft();
  d.photos.splice(Number(i), 1);
  flushStore();
  render();
}

function postWhen(at) {
  const d = new Date(Number(at) || 0);
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  if (sameDay) {
    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, '0');
    const ap = h < 12 ? 'am' : 'pm';
    h = h % 12 || 12;
    return 'Today at ' + h + ':' + m + ap;
  }
  return cycleDateLabelWithYear(d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0')
    + '-' + String(d.getDate()).padStart(2, '0'));
}

function postComposer() {
  const d = postDraft();
  const open = postHasContent() || store.postOpen;
  const first = (store.parent.name || '').trim().split(/\s+/)[0];

  if (!open) {
    return `
    <button class="composer shut" data-post="open">
      ${parentFace(38)}
      <span class="composer-hint">What is on your mind${first ? ', ' + esc(first) : ''}?</span>
      <span class="composer-cam">${icon('camera', 17, 'var(--deep)')}</span>
    </button>`;
  }

  const vis = d.visibility === 'public' ? 'public' : 'private';
  const full = (d.photos.length + d.files.length) >= POST_MAX_FILES;
  return `
  <div class="card composer">
    <div style="display:flex;gap:10px;align-items:flex-start">
      ${parentFace(38)}
      <textarea class="inp composer-in" id="postIn" data-postfield="text" rows="3"
        placeholder="What is on your mind${first ? ', ' + esc(first) : ''}?">${esc(d.text || '')}</textarea>
    </div>

    ${d.photos.length || d.files.length ? `
    <div class="postpics draft">
      ${d.photos.map((p, i) => `
        <span class="postpic">
          <img src="${esc(p)}" alt="" />
          <button class="postpic-x" data-post="unpic" data-i="${i}" aria-label="Remove">
            ${icon('plus', 14, '#fff')}
          </button>
        </span>`).join('')}
      ${d.files.map((f, i) => postFileBlock(f, i, true)).join('')}
    </div>` : ''}

    ${store.photoBusy ? `
    <div class="upbar" role="status">
      <span class="upbar-fill" style="width:${Math.max(4, Math.min(100, Number(store.photoBusy) || 4))}%"></span>
      <span class="tiny upbar-t">Uploading, ${Math.min(100, Number(store.photoBusy) || 0)}%</span>
    </div>` : ''}

    <div class="composer-bar">
      ${POST_MEDIA.map((k) => `
        <button class="chip" data-post="pick" data-kind="${esc(k.id)}"
          ${full || store.photoBusy ? 'disabled' : ''}>
          ${icon(k.id === 'video' ? 'eye' : k.id === 'audio' ? 'note' : 'camera', 13, 'var(--deep)')}
          ${esc(k.label)}
        </button>`).join('')}
      <button class="chip${store.emojiOpen ? ' on' : ''}" data-post="emojis"
        ${store.emojiOpen ? 'style="background:var(--leaf2);border-color:var(--leaf)"' : ''}>
        <span class="emo">\uD83D\uDE0A</span> Emoji
      </button>
    </div>

    ${store.emojiOpen ? `
    <div class="emotray">
      ${POST_EMOJI.map((g) => `
        <p class="emogroup">${esc(g.group)}</p>
        <div class="emogrid">
          ${g.chars.map((ch) => `
            <button class="emobtn" data-post="emoji" data-ch="${esc(ch)}" aria-label="${esc(ch)}">${ch}</button>`).join('')}
        </div>`).join('')}
    </div>` : ''}

    <div class="vispick">
      ${POST_VISIBILITY.map((v) => `
        <button class="chip${vis === v.id ? ' on' : ''}" data-post="vis" data-vis="${v.id}"
          ${vis === v.id ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}
          >${v.id === 'private' ? icon('shield', 12, 'var(--deep)') : icon('people', 12, 'var(--deep)')} ${esc(v.label)}</button>`).join('')}
    </div>
    ${vis === 'public' ? `
    <p class="sect" style="margin-top:13px">${esc(GROUP_PICK_LABEL)}</p>
    <div class="chips">
      <button class="chip${!d.group ? ' on' : ''}" data-post="group" data-g=""
        ${!d.group ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}
        >${esc(GROUP_GENERAL_LABEL)}</button>
      ${GROUPS.map((g) => `
        <button class="chip${d.group === g.id ? ' on' : ''}" data-post="group" data-g="${esc(g.id)}"
          ${d.group === g.id ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}
          >${esc(g.label)}</button>`).join('')}
    </div>
    <p class="tiny" style="margin-top:7px">${esc(GROUP_PICK_NOTE)}</p>
    <p class="tiny" style="margin-top:6px">
      ${esc((POST_VISIBILITY.filter((v) => v.id === vis)[0] || {}).help || '')}
      ${d.photos.length + d.files.length
        ? ' There is ' + (d.photos.length + d.files.length === 1 ? 'a file' : 'more than one file')
          + ' attached to this. Once it is out there you cannot take it back.'
        : ''}
    </p>` : ''}
    ${store.photoError ? `<p class="tiny" style="margin-top:6px;color:#A85A44">${esc(store.photoError)}</p>` : ''}

    <div style="display:flex;gap:8px;margin-top:11px;justify-content:flex-end;flex-wrap:wrap">
      <button class="chip" data-post="discard">Discard</button>
      <button class="btn" data-post="save" ${postHasContent() && !store.photoBusy ? '' : 'disabled'}
        style="width:auto;flex:none;padding:10px 20px">Post</button>
    </div>
  </div>`;
}

/* The row of reactions under a shared post. Only ever under a shared
   one, because a private post is read by one person and counting her
   own reaction back to her would be strange.

   The counts read across the top the way they do everywhere else: the
   faces that were actually used, then the number. */
function reactionBar(p) {
  const counts = reactionCounts(p);
  const mine = myReaction(p);
  const total = reactionTotal(p);
  const used = POST_REACTIONS.filter((r) => counts[r.id]);

  return `
  <div class="reacts">
    ${total ? `
    <div class="reacttally">
      <span class="reactfaces">${used.map((r) => `<span class="emo">${r.glyph}</span>`).join('')}</span>
      <span class="tiny">${total}</span>
    </div>` : ''}
    <div class="reactrow">
      ${POST_REACTIONS.map((r) => `
        <button class="reactbtn${mine === r.id ? ' on' : ''}" data-post="react"
          data-id="${esc(p.id)}" data-r="${esc(r.id)}" title="${esc(r.label)}" aria-label="${esc(r.label)}">
          <span class="emo">${r.glyph}</span>
          ${counts[r.id] ? `<span class="reactn">${counts[r.id]}</span>` : ''}
        </button>`).join('')}
    </div>
  </div>`;
}

function postCard(p, own) {
  const kid = p.childId ? store.children.filter((k) => k.id === p.childId)[0] : null;
  return `
  <div class="card postcard">
    <div style="display:flex;gap:10px;align-items:center">
      ${parentFace(36)}
      <span class="grow">
        <span class="post-who">${esc(store.parent.name || 'You')}</span>
        <span class="post-when">${esc(postWhen(p.at))}${kid ? ' &middot; with ' + esc((kid.name || '').split(/\s+/)[0]) : ''}</span>
      </span>
      <span class="post-vis${p.visibility === 'public' ? ' pub' : ''}">
        ${p.visibility === 'public' ? icon('people', 11, '#6E8B54') : icon('shield', 11, 'var(--muted)')}
        ${p.visibility === 'public' ? 'Shared' : 'Just me'}
      </span>
    </div>

    ${p.text ? `<p class="bodytext" style="margin-top:9px;white-space:pre-wrap">${esc(p.text)}</p>` : ''}

    ${(p.photos || []).length + (p.files || []).length ? `
    <div class="postpics n${Math.min(4, (p.photos || []).length + (p.files || []).length)}">
      ${(p.photos || []).map((src) => `<span class="postpic"><img src="${esc(src)}" alt="" loading="lazy" /></span>`).join('')}
      ${(p.files || []).map((f, i) => postFileBlock(f, i, false)).join('')}
    </div>` : ''}

    ${/* Reactions used to be counted here, on her own copy of her own
          post, which was a placeholder until there was somewhere real
          for a shared post to live. There is now. Real people react in
          Community, so what belongs here is not a count, it is what
          actually happened to the thing she shared. */ ''}
    ${p.visibility === 'public' ? `
    <p class="tiny feedstatus">
      ${icon(p.sharedStatus === FEED_STATUS.removed ? 'info'
        : p.sharedStatus === FEED_STATUS.held ? 'clock' : 'people', 11, 'var(--muted)')}
      ${!p.sharedStatus || p.sharedStatus === FEED_STATUS.live
        ? 'Up in Community.'
        : esc(statusLine(p.sharedStatus))}
      ${!p.sharedStatus || p.sharedStatus === FEED_STATUS.live
        ? '<button class="chip" style="margin-left:6px" data-tab="community">See it there</button>' : ''}
    </p>` : ''}

    ${own ? `
    <div style="display:flex;gap:7px;margin-top:10px;flex-wrap:wrap">
      ${p.visibility === 'public'
        ? `<button class="chip" data-post="vis" data-id="${esc(p.id)}" data-vis="private"
             ${feed.busy === p.id ? 'disabled' : ''}>Take it back down</button>`
        : `<button class="chip" data-post="vis" data-id="${esc(p.id)}" data-vis="public"
             ${feed.busy === p.id ? 'disabled' : ''}>${feed.busy === p.id ? 'Sending' : 'Share it'}</button>`}
      <button class="chip" data-post="del" data-id="${esc(p.id)}">Delete</button>
    </div>` : ''}
  </div>`;
}

/* -----------------------------------------------------------------
   HER SITUATION

   The switches that decide which parts of the app are worth showing
   her. She said it plainly: none of the postpartum content applies to
   her any more, and it was showing anyway.
   ----------------------------------------------------------------- */

function normalizeSituation(sit) {
  const s = (sit && typeof sit === 'object') ? sit : {};
  return {
    stages: Array.isArray(s.stages) ? s.stages : [],
    path: typeof s.path === 'string' ? s.path : '',
    roles: Array.isArray(s.roles) ? s.roles : [],
    support: Array.isArray(s.support) ? s.support : [],
    conditions: Array.isArray(s.conditions) ? s.conditions : [],
  };
}

function situation() {
  store.parent.situation = normalizeSituation(store.parent.situation);
  return store.parent.situation;
}

/* Every child's age in months, so the switches can be right about
   somebody who has told the app nothing at all. */
function childAges() {
  return store.children.filter((k) => !isExampleChild(k)).map((k) => {
    const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
    return sum && sum.age ? sum.age.totalMonths : null;
  }).filter((m) => m != null);
}

function sitShows(what) {
  const sit = situation();
  const ages = childAges();
  if (what === 'postpartum') return showsPostpartum(sit, ages);
  if (what === 'feeding') return showsFeeding(sit, ages);
  if (what === 'pregnancy') return showsPregnancy(sit, ages);
  if (what === 'trying') return showsTrying(sit);
  return false;
}

/* Toggling a switch. Ticking Expecting untucks Trying, because they
   are not both true, and the app should not have to ask. */
function sitToggle(field, id) {
  const sit = situation();
  const list = sit[field] || [];
  const i = list.indexOf(id);
  if (i === -1) {
    list.push(id);
    if (field === 'stages' && id === 'expecting') {
      const t = list.indexOf('trying');
      if (t !== -1) list.splice(t, 1);
    }
    if (field === 'stages' && id === 'trying') {
      const e = list.indexOf('expecting');
      if (e !== -1) list.splice(e, 1);
    }
  } else list.splice(i, 1);
  sit[field] = list;
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

function sitSetPath(id) {
  const sit = situation();
  sit.path = sit.path === id ? '' : id;
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

function childArrivalToggle(childId, id) {
  const k = store.children.filter((x) => x.id === childId)[0];
  if (!k) return;
  if (!Array.isArray(k.arrival)) k.arrival = [];
  const i = k.arrival.indexOf(id);
  if (i === -1) k.arrival.push(id); else k.arrival.splice(i, 1);
  k.updatedAt = Date.now();
  flushStore();
  render();
}

/* A row of tick boxes that reads as a list rather than a form. */
function tickRow(on, label, help, attrs) {
  return `
  <button class="tick${on ? ' on' : ''}" ${attrs}>
    <span class="tickbox">${on ? icon('check', 13, '#fff') : ''}</span>
    <span class="grow">
      <span class="tick-l">${esc(label)}</span>
      ${help ? `<span class="tick-h">${esc(help)}</span>` : ''}
    </span>
  </button>`;
}

/* WHO THEY ARE TO THE CHILD.

   One block, used in two places: the signup walkthrough and Settings.
   Written once so the two can never drift apart, which is what
   happened last time a question lived in both.

   Chips rather than tick rows, because both of these are pick one and
   a tick row implies you may pick several. */
function caretakerBlock() {
  const p = store.parent || {};
  const custom = (p.calledByOther || '').trim();
  return `
  <p class="sect">What ${esc(onlyChildFirstName() || 'your child')} calls you</p>
  <div class="card" style="margin-bottom:10px">
    <div class="chips">
      ${CALLED_BY.map((r) => `
        <button class="chip${p.calledBy === r.id && !custom ? ' on' : ''}" data-calledby="${esc(r.id)}"
          ${p.calledBy === r.id && !custom ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}
          >${esc(r.label)}</button>`).join('')}
    </div>
    <p class="eyebrow" style="margin-top:12px">Or your own word</p>
    <input class="inp" type="text" data-obfield="calledByOther"
      value="${esc(p.calledByOther || '')}" placeholder="Mimi, Bubba, Tata, anything"
      autocomplete="off" style="margin-top:7px;width:100%" />
    <p class="tiny" style="margin-top:8px">${esc(CALLED_BY_OTHER_NOTE)}</p>
  </div>

  <p class="sect">How we should write about you</p>
  <div class="card" style="margin-bottom:10px">
    ${REFERS_TO.map((r) => tickRow(p.refersTo === r.id, r.label, r.help,
      `data-refersto="${esc(r.id)}"`)).join('')}
    <p class="tiny" style="margin-top:9px">${esc(REFERS_TO_SHORT)}</p>
  </div>

  <p class="sect">${esc(BODY_CARE_SETTING.title)}</p>
  <div class="card" style="margin-bottom:10px">
    ${tickRow(bodyCare(p) === 'yes', 'Show it', BODY_CARE_SETTING.on, 'data-bodycare="yes"')}
    ${tickRow(bodyCare(p) === 'no', 'Leave it out', BODY_CARE_SETTING.off, 'data-bodycare="no"')}
    <p class="tiny" style="margin-top:9px">${esc(BODY_CARE_SETTING.note)}</p>
  </div>`;
}

/* The first real child's first name, for the line above. Falls back to
   nothing at all rather than to a placeholder name, since somebody
   signing up before they have added a child should not be asked what
   "your child" calls them by name. */
function onlyChildFirstName() {
  const real = (store.children || []).filter((k) => !isExampleChild(k));
  if (real.length !== 1) return '';
  return (real[0].name || '').trim().split(/\s+/)[0] || '';
}

function situationBlock() {
  const sit = situation();
  const showPath = hasStage(sit, 'expecting') || hasStage(sit, 'trying');
  const nothing = !sit.stages.length && !sit.roles.length && !sit.support.length;

  return `
  <p class="sect" id="set-situation">Where you are right now</p>
  <p class="tiny" style="margin:-4px 0 10px">${esc(SITUATION_INTRO)}</p>
  ${nothing ? `<p class="tiny" style="margin:-4px 0 10px;color:var(--taupe)">${esc(SITUATION_EMPTY)}</p>` : ''}

  <div class="card" style="margin-bottom:10px">
    ${PARENT_STAGES.map((st) => tickRow(hasStage(sit, st.id), st.label, st.help,
      `data-sit="stages" data-id="${esc(st.id)}"`)).join('')}
  </div>

  ${showPath ? `
  <div class="card" style="margin-bottom:10px">
    <p class="eyebrow">How you are going about it</p>
    <p class="tiny" style="margin:5px 0 9px">${esc(CONCEIVE_NOTE)}</p>
    <div class="chips">
      ${CONCEIVE_PATHS.map((p) => `
        <button class="chip${sit.path === p.id ? ' on' : ''}" data-sitpath="${esc(p.id)}"
          ${sit.path === p.id ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}
          >${esc(p.label)}</button>`).join('')}
    </div>
  </div>` : ''}

  <p class="sect">How you parent</p>
  <div class="card" style="margin-bottom:10px">
    ${PARENT_ROLES.map((r) => tickRow(sit.roles.indexOf(r.id) !== -1, r.label, '',
      `data-sit="roles" data-id="${esc(r.id)}"`)).join('')}
  </div>
  <div class="card" style="margin-bottom:10px">
    ${SUPPORT_SHAPE.map((r) => tickRow(sit.support.indexOf(r.id) !== -1, r.label, '',
      `data-sit="support" data-id="${esc(r.id)}"`)).join('')}
  </div>

  ${caretakerBlock()}

  <p class="sect">Anything you live with</p>
  <p class="tiny" style="margin:-2px 0 8px">Ticking one turns on a log you would otherwise never be
  shown. None of it is a diagnosis and none of it goes anywhere.</p>
  <div class="card" style="margin-bottom:10px">
    ${PARENT_CONDITIONS.map((r) => tickRow(
      (sit.conditions || []).indexOf(r.id) !== -1, r.label, r.help,
      `data-sit="conditions" data-id="${esc(r.id)}"`)).join('')}
  </div>

  <p class="tiny" style="margin-top:2px">${esc(SITUATION_PRIVACY)}</p>`;
}

/* -----------------------------------------------------------------
   THE LIFT

   Three small pieces of writing that Willow does in the background:
   the affirmation on Home, the morning suggestion under it, and the
   answer she gets after recording how a day went.

   THE RULE THAT MATTERS
   Every one of these has a written version in src/data/dailyLift.js
   and that version is what ships. Willow rewrites it when she is
   available, and when she is not, nothing is missing and nothing looks
   broken. A parent must never open this app to a blank space where the
   kind thing was.

   Everything is cached by the day, so opening the app eleven times
   before lunch is one piece of writing, not eleven.
   ----------------------------------------------------------------- */

const lift = {
  model: null,
  loading: null,
  tried: {},   // what has already been asked for today, so a failure is not retried forever
};

function liftStore() {
  if (!store.parent.lift || typeof store.parent.lift !== 'object') store.parent.lift = {};
  const day = ciToday();
  if (store.parent.lift.day !== day) {
    /* Yesterday's writing is kept for one more day only so the prompt
       can ask for something different, then it goes. */
    store.parent.lift = { day: day, prev: store.parent.lift.affirmation || '', prevMorning: (store.parent.lift.morning || {}).title || '' };
    lift.tried = {};
  }
  return store.parent.lift;
}

function liftCountToday() {
  const day = ciToday();
  if (store.liftDate !== day) { store.liftDate = day; store.liftUsed = 0; }
  return store.liftUsed || 0;
}

/* Its own model handle with its own brief. The chat Willow has to hold
   a conversation and close with a sources line, and squeezing a one
   line affirmation through those rules produces exactly the kind of
   thing you would expect. */
async function liftLoad() {
  if (lift.model) return lift.model;
  if (lift.loading) return lift.loading;
  lift.loading = (async () => {
    const v = FIREBASE_SDK_VERSION;
    const { app } = await loadFirebase();
    const aiMod = await import(`https://www.gstatic.com/firebasejs/${v}/firebase-ai.js`);
    const ai = aiMod.getAI(app, { backend: new aiMod.GoogleAIBackend() });
    lift.model = aiMod.getGenerativeModel(ai, {
      model: WILLOW_MODEL,
      systemInstruction: LIFT_SYSTEM,
    });
    return lift.model;
  })().catch((err) => { lift.loading = null; throw err; });
  return lift.loading;
}

/* Never throws and never blocks anything. Returns the written text
   straight away and quietly replaces it if Willow answers. */
/* HAS THE PROJECT RUN OUT OF QUOTA TODAY.

   The background writers and the chat draw on the same allowance. The
   chat is the one somebody is waiting on, so the moment a background
   write comes back over quota, every background write stops for the
   rest of the day and leaves what is left to Willow.

   Nothing visible is lost by stopping. Every one of these has a written
   version that is already on screen, which is the whole design. The
   affirmation quietly not being rewritten costs a parent nothing. Not
   being able to ask a question at two in the morning costs them the
   feature. */
function liftOutOfQuota() {
  const day = ciToday();
  if (store.liftQuotaDay !== day) return false;
  return !!store.liftQuotaHit;
}

function liftNoteQuota(err) {
  const code = String((err && err.code) || '') + ' ' + String((err && err.message) || '')
    + ' ' + String((err && err.status) || '');
  if (!/429|quota|RESOURCE_EXHAUSTED|rate.?limit/i.test(code)) return;
  store.liftQuotaDay = ciToday();
  store.liftQuotaHit = true;
  saveStore();
}

function liftWrite(kind, context, onDone) {
  if (!hasAccess()) return;
  if (lift.tried[kind]) return;
  if (liftOutOfQuota()) return;
  if (liftCountToday() >= LIFT_DAILY_LIMIT) return;
  lift.tried[kind] = true;
  store.liftUsed = liftCountToday() + 1;

  liftLoad().then((model) => model.generateContent(liftPrompt(kind, context)))
    .then((res) => {
      const raw = res && res.response && typeof res.response.text === 'function'
        ? res.response.text() : '';
      const text = String(raw || '').trim();
      if (!text) return;
      onDone(text);
      flushStore();
      render();
    })
    .catch((err) => {
      /* The written one is already on screen, so there is nothing to
         show. The only thing worth doing is getting out of the way. */
      liftNoteQuota(err);
    });
}

function liftContext() {
  const kids = store.children.filter((k) => !isExampleChild(k)).map((k) => {
    const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
    return (k.name || 'a child') + (sum && sum.shortLabel ? ', ' + sum.shortLabel : '');
  });
  return {
    parentName: (store.parent.name || '').trim().split(/\s+/)[0] || '',
    children: kids.join('; '),
  };
}

/* TODAY'S AFFIRMATION. Written version first, Willow's when it lands. */
function liftAffirmation() {
  const l = liftStore();
  if (!l.affirmation) {
    l.affirmation = writtenLift(l.day);
    l.affirmationFrom = 'written';
    liftWrite('affirmation', Object.assign(liftContext(), { avoid: l.prev || '' }), (text) => {
      const cur = liftStore();
      cur.affirmation = text;
      cur.affirmationFrom = 'willow';
    });
  }
  return l.affirmation;
}

/* THE MORNING. Same shape. The model is asked for TITLE: then a line,
   and anything that does not come back in that shape is ignored rather
   than shown half parsed. */
function liftMorning() {
  const l = liftStore();
  if (!l.morning) {
    l.morning = writtenMorning(l.day);
    l.morningFrom = 'written';
    liftWrite('morning', Object.assign(liftContext(), { avoid: l.prevMorning || '' }), (text) => {
      const m = String(text).match(/^\s*TITLE:\s*(.+?)\s*\n+([\s\S]+)$/);
      if (!m) return;
      const title = m[1].trim().replace(/[.]$/, '');
      const body = m[2].trim();
      if (!title || !body || title.length > 48) return;
      const cur = liftStore();
      cur.morning = { title: title, body: body };
      cur.morningFrom = 'willow';
    });
  }
  return l.morning;
}

/* THE ANSWER AFTER A CHECK IN.

   She filled the card in, it folded away, and she said she would
   rather something stepped in. This is that: it reads the shape of the
   day she just described and says something back. Written first so
   there is always an answer, then Willow's if she is available. */
function checkinRunNote(k, day) {
  if (!k || !k.checkins) return '';
  let hard = 0;
  let good = 0;
  for (let i = 0; i < 5; i++) {
    const e = k.checkins[ciDayBefore(day, i)];
    if (!e) break;
    const shape = checkinShape(e.answers);
    if (shape === 'allHard' || shape === 'mostlyHard') hard++;
    else if (shape === 'allGood' || shape === 'mostlyGood') good++;
    else break;
  }
  if (hard >= 3) return CHECKIN_RUN_NOTE;
  if (good >= 4) return CHECKIN_GOOD_RUN_NOTE;
  return '';
}

function makeCheckinReply(k, day) {
  const entry = k && k.checkins ? k.checkins[day] : null;
  if (!entry) return;
  entry.reply = writtenCheckinReply(entry.answers, day + k.id);
  entry.replyFrom = 'written';
  entry.runNote = checkinRunNote(k, day);

  /* One per day per child, keyed so two children each get their own. */
  const rows = checkinRows(getLenses(k.lenses || []));
  const summary = rows.filter((r) => entry.answers[r.id]).map((r) => {
    const sc = getCheckinScale(entry.answers[r.id]);
    return r.label.toLowerCase() + ': ' + (r[entry.answers[r.id]] || sc.label).toLowerCase();
  }).join('; ');

  const kid = k;
  const sum = getAgeSummary({ name: kid.name, birthday: kid.birthday });
  liftWrite('checkin:' + k.id + ':' + day, {
    parentName: (store.parent.name || '').trim().split(/\s+/)[0] || '',
    childLine: (kid.name || 'her child') + (sum && sum.shortLabel ? ', ' + sum.shortLabel : ''),
    summary: summary,
    note: entry.note || '',
    run: entry.runNote || '',
  }, (text) => {
    const live = activeChild();
    const target = (live && live.id === k.id) ? live : store.children.filter((x) => x.id === k.id)[0];
    if (!target || !target.checkins || !target.checkins[day]) return;
    target.checkins[day].reply = text;
    target.checkins[day].replyFrom = 'willow';
  });
}

/* -----------------------------------------------------------------
   THE DAILY CHECK IN

   She asked for this on the front screen: whatever support is turned
   on for a child should check in with her every day, so she can see
   how they are actually doing rather than trying to remember.

   It follows the same rule as the milestones: taps go into a draft,
   Save is what writes, and the draft survives putting the phone down.
   Once today is saved the card folds down to what she answered, with
   a strip of the last fortnight underneath, because the whole value of
   doing this daily is being able to see the run.
   ----------------------------------------------------------------- */

function ciToday() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0')
    + '-' + String(d.getDate()).padStart(2, '0');
}

function ciDayBefore(key, back) {
  const p = String(key).split('-');
  const d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  d.setDate(d.getDate() - back);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0')
    + '-' + String(d.getDate()).padStart(2, '0');
}

/* The rows for whoever is open: the day itself, then one per support
   lens they have turned on. */
function ciRows() {
  const k = activeChild();
  if (!k) return [];
  return checkinRows(getLenses(k.lenses || []));
}

function ciSaved(dayKey) {
  const k = activeChild();
  if (!k || !k.checkins) return null;
  return k.checkins[dayKey || ciToday()] || null;
}

function ciDraft() {
  const k = activeChild();
  if (!k || !store.ciEdit || store.ciEdit.childId !== k.id) return null;
  /* A draft left over from yesterday is yesterday's day, not today's,
     and quietly saving it under today's date would be a lie. */
  if (store.ciEdit.day !== ciToday()) return null;
  return store.ciEdit;
}

function ciCurrent(rowId) {
  const d = ciDraft();
  if (d && Object.prototype.hasOwnProperty.call(d.answers, rowId)) return d.answers[rowId] || undefined;
  const saved = ciSaved();
  return saved ? saved.answers[rowId] : undefined;
}

function ciEnsureDraft() {
  const k = activeChild();
  if (!k) return null;
  if (!store.ciEdit || store.ciEdit.childId !== k.id || store.ciEdit.day !== ciToday()) {
    const saved = ciSaved();
    store.ciEdit = {
      childId: k.id,
      day: ciToday(),
      answers: {},
      note: saved ? (saved.note || '') : '',
    };
  }
  return store.ciEdit;
}

function ciSet(rowId, val) {
  const d = ciEnsureDraft();
  if (!d) return;
  const cur = ciCurrent(rowId);
  d.answers[rowId] = cur === val ? '' : val;
  store.ciOpen = true;
  flushStore();
}

function ciChangeCount() {
  const d = ciDraft();
  if (!d) return 0;
  const saved = ciSaved();
  let n = 0;
  Object.keys(d.answers).forEach((id) => {
    const was = saved ? (saved.answers[id] || '') : '';
    if ((d.answers[id] || '') !== was) n++;
  });
  if ((d.note || '') !== (saved ? (saved.note || '') : '')) n++;
  return n;
}

function ciSave() {
  const d = ciDraft();
  const k = activeChild();
  if (!d || !k) return;
  const day = ciToday();
  if (!k.checkins) k.checkins = {};
  const prev = k.checkins[day] || { answers: {}, note: '' };
  const answers = Object.assign({}, prev.answers);
  Object.keys(d.answers).forEach((id) => {
    if (d.answers[id]) answers[id] = d.answers[id];
    else delete answers[id];
  });

  /* An empty answer set with an empty note is not a check in, it is a
     day she opened the card and changed her mind. Do not record it. */
  const note = String(d.note || '').trim();
  if (!Object.keys(answers).length && !note) delete k.checkins[day];
  else {
    k.checkins[day] = { answers: answers, note: note, at: Date.now() };
    /* Something says something back, rather than the card simply
       vanishing, which is what she told us it felt like. */
    makeCheckinReply(k, day);
  }

  ciTrim(k);
  k.updatedAt = Date.now();
  store.ciEdit = null;
  store.ciOpen = false;
  flushStore();
}

function ciDiscard() {
  store.ciEdit = null;
  store.ciOpen = false;
  flushStore();
}

/* Half a year is plenty to see a season in, and it keeps the record
   small enough to sync without anybody noticing. */
function ciTrim(k) {
  if (!k || !k.checkins) return;
  const keys = Object.keys(k.checkins).sort();
  const cutoff = ciDayBefore(ciToday(), CHECKIN_KEEP_DAYS);
  keys.forEach((day) => { if (day < cutoff) delete k.checkins[day]; });
}

/* How many days in a row up to and including today, so the card can
   say something true rather than nagging. */
function ciStreak() {
  const k = activeChild();
  if (!k || !k.checkins) return 0;
  let n = 0;
  let day = ciToday();
  while (k.checkins[day]) { n++; day = ciDayBefore(day, 1); }
  return n;
}

/* The fortnight strip. Oldest on the left, today on the right, one
   square per day, empty where nothing was recorded. */
function ciStrip(rowId, days) {
  const k = activeChild();
  if (!k) return '';
  const n = days || CHECKIN_STRIP_DAYS;
  const cells = [];
  for (let i = n - 1; i >= 0; i--) {
    const day = ciDayBefore(ciToday(), i);
    const entry = k.checkins ? k.checkins[day] : null;
    const val = entry ? entry.answers[rowId] : null;
    const sc = val ? getCheckinScale(val) : null;
    cells.push(`<span class="cidot${sc ? '' : ' none'}"
      style="${sc ? 'background:' + sc.color : ''}"
      title="${esc(cycleDateLabel(day) + (sc ? ', ' + sc.label.toLowerCase() : ', nothing recorded'))}"></span>`);
  }
  return `<span class="cistrip">${cells.join('')}</span>`;
}

/* The card itself. Two states: asking, and folded down to what she
   said. She can always reopen it, because a day can look different at
   four in the afternoon than it did at nine. */
function checkinCard() {
  const k = activeChild();
  if (!k) return '';
  const rows = ciRows();
  if (!rows.length) return '';

  const saved = ciSaved();
  const pending = ciChangeCount();
  const open = store.ciOpen || !saved;
  const name = (k.name || 'them').split(/\s+/)[0];
  const streak = ciStreak();

  if (!open) {
    return `
    <div class="card cicard">
      <div style="display:flex;align-items:baseline;gap:9px;flex-wrap:wrap">
        <p class="eyebrow grow">${icon('check', 11, 'var(--sage)')} Today is recorded</p>
        <button class="chip" data-ci="open">Change it</button>
      </div>
      ${rows.filter((r) => saved.answers[r.id]).map((r) => {
        const sc = getCheckinScale(saved.answers[r.id]);
        return `
        <div class="cirow done">
          <span class="cirow-l">${esc(r.label)}</span>
          <span class="cipill" style="background:${sc.tint};color:${sc.color}">${esc(r[saved.answers[r.id]] || sc.label)}</span>
          ${ciStrip(r.id)}
        </div>`;
      }).join('')}
      ${saved.note ? `<p class="tiny" style="margin-top:9px">${esc(saved.note)}</p>` : ''}

      ${saved.reply ? `
      <div class="cireply">
        <span class="cireply-av">${icon('leaf', 14, '#fff')}</span>
        <div class="grow">
          <p class="bodytext">${esc(saved.reply)}</p>
          ${saved.runNote ? `<p class="tiny" style="margin-top:7px">${esc(saved.runNote)}</p>` : ''}
          <button class="chip" style="margin-top:9px" data-willow="open">Talk to Willow about it</button>
        </div>
      </div>` : ''}

      ${streak > 1 ? `<p class="tiny" style="margin-top:9px">${esc(CHECKIN_STREAK_LINES.going.replace('{n}', streak))}</p>` : ''}
      <button class="btn ghost sm" style="width:100%;margin-top:11px" data-go="screen" data-id="checkins">
        See how the last few weeks have gone
      </button>
    </div>`;
  }

  return `
  <div class="card cicard">
    <p class="eyebrow">${icon('sun', 11, 'var(--sage)')} How is today going, ${esc(name)}?</p>
    <p class="tiny" style="margin-top:4px">${esc(CHECKIN_INTRO)}</p>

    ${rows.map((r) => {
      const cur = ciCurrent(r.id);
      return `
      <div class="cirow">
        <p class="ciq">${esc(r.question)}</p>
        <div class="cibtns">
          ${CHECKIN_SCALE.map((sc) => {
            const on = cur === sc.id;
            return `<button class="cib" data-ci="set" data-row="${esc(r.id)}" data-val="${sc.id}"
              aria-pressed="${on}"
              style="${on ? 'background:' + sc.tint + ';color:' + sc.color + ';border-color:' + sc.color : ''}"
              >${esc(r[sc.id] || sc.label)}</button>`;
          }).join('')}
        </div>
        ${ciSaved() || ciStreakHasAny() ? ciStrip(r.id) : ''}
      </div>`;
    }).join('')}

    <input class="inp" type="text" id="ciNote" data-cinote="1"
      value="${esc((ciDraft() && ciDraft().note) || (saved && saved.note) || '')}"
      placeholder="${esc(CHECKIN_NOTE_PROMPT)}" autocomplete="off"
      style="margin-top:10px;width:100%" />

    <div style="display:flex;gap:8px;margin-top:11px;flex-wrap:wrap;justify-content:flex-end">
      ${saved || pending ? `<button class="chip" data-ci="cancel">${saved ? 'Leave it as it was' : 'Not now'}</button>` : ''}
      <button class="btn" data-ci="save" ${pending ? '' : 'disabled'}
        style="width:auto;flex:none;padding:10px 20px">${icon('check', 15, '#fff')} Save today</button>
    </div>
    <p class="tiny" style="margin-top:9px">${esc(CHECKIN_PATTERN_NOTE)}</p>
  </div>`;
}

/* Whether there is any history at all, so the strip does not appear as
   fourteen empty squares on somebody's first day. */
function ciStreakHasAny() {
  const k = activeChild();
  return !!(k && k.checkins && Object.keys(k.checkins).length);
}

/* -----------------------------------------------------------------
   THE PATTERN

   Everything recorded, laid out so a run of hard days is visible
   rather than something she has to hold in her head. This is the
   screen worth opening on the way into an appointment.
   ----------------------------------------------------------------- */

function screenCheckins(c) {
  const k = activeChild();
  if (!k) return emptyScreen('Open a child to see their check ins.');
  const rows = ciRows();
  const days = Object.keys(k.checkins || {}).sort().reverse();
  const name = (k.name || 'them').split(/\s+/)[0];

  const counts = {};
  rows.forEach((r) => { counts[r.id] = { hard: 0, mixed: 0, good: 0 }; });
  days.slice(0, 30).forEach((day) => {
    const e = k.checkins[day];
    Object.keys(e.answers || {}).forEach((id) => {
      if (counts[id] && counts[id][e.answers[id]] !== undefined) counts[id][e.answers[id]]++;
    });
  });

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">How ${esc(name)} has been</h1>
    <p class="sub">${days.length
      ? esc(days.length + ' day' + (days.length === 1 ? '' : 's') + ' recorded')
      : 'Nothing recorded yet'}</p>
  </div>
  <div class="sc">

    ${!days.length ? `
    <p class="tiny" style="text-align:center;padding:6px 0">Check in from Home once and this fills in.</p>
    ` : `

    <p class="sect">The last two weeks</p>
    <div class="card">
      ${rows.map((r) => `
        <div class="cirow done">
          <span class="cirow-l">${esc(r.label)}</span>
          ${ciStrip(r.id)}
        </div>`).join('')}
      <p class="tiny" style="margin-top:10px">Oldest on the left, today on the right. An empty square
      is a day nothing was recorded, which is not the same as a bad day.</p>
    </div>

    <p class="sect">The last month, counted</p>
    <div class="card">
      ${rows.map((r) => {
        const cc = counts[r.id];
        const total = cc.hard + cc.mixed + cc.good;
        if (!total) return '';
        return `
        <div style="padding:8px 0;border-top:1px solid rgba(0,0,0,.055)">
          <p style="font-size:13.5px;font-weight:600;color:var(--ink)">${esc(r.label)}</p>
          <div class="cibar" style="margin-top:6px">
            ${CHECKIN_SCALE.map((sc) => cc[sc.id]
              ? `<i style="flex:${cc[sc.id]};background:${sc.color}" title="${cc[sc.id]} ${esc(sc.label.toLowerCase())}"></i>`
              : '').join('')}
          </div>
          <p class="tiny" style="margin-top:5px">
            ${CHECKIN_SCALE.map((sc) => cc[sc.id] + ' ' + sc.label.toLowerCase()).join(', ')}
          </p>
        </div>`;
      }).join('')}
    </div>

    <p class="sect">Day by day</p>
    ${days.slice(0, 30).map((day) => {
      const e = k.checkins[day];
      const answered = rows.filter((r) => e.answers[r.id]);
      return `
      <div class="card" style="margin-bottom:8px">
        <p class="eyebrow">${esc(cycleDateLabelWithYear(day))}</p>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:7px">
          ${answered.map((r) => {
            const sc = getCheckinScale(e.answers[r.id]);
            return `<span class="cipill" style="background:${sc.tint};color:${sc.color}">${esc(r.label)}: ${esc(r[e.answers[r.id]] || sc.label)}</span>`;
          }).join('')}
        </div>
        ${e.note ? `<p class="bodytext" style="margin-top:8px">${esc(e.note)}</p>` : ''}
      </div>`;
    }).join('')}`}

    <div class="card flat">
      <p class="eyebrow">${icon('info', 11, 'var(--sage)')} What this is and is not</p>
      <p class="bodytext" style="margin-top:5px">${esc(CHECKIN_PATTERN_NOTE)}</p>
    </div>
    <p class="disclaimer">${esc(CONTENT_DISCLAIMER)}</p>
  </div>`;
}

/* -----------------------------------------------------------------
   HOME

   Hers. Not a child's screen with her name on it. The faces across the
   top are the family, one tap each into that child. Underneath is the
   thing she reaches for when something is happening, then her own body
   and her own dates, then whatever is going on today with whoever is
   open.

   The order is deliberate. Everything above the fold is either about
   her or one tap from help.
   ----------------------------------------------------------------- */

function kidCircle(k) {
  const on = store.profileWho === k.id;
  const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
  return `
  <button class="kidcirc${on ? ' on' : ''}" data-child="${esc(k.id)}">
    ${childFace(k, 62)}
    <span class="kidcirc-name">${esc((k.name || 'Unnamed').split(/\s+/)[0])}</span>
    <span class="kidcirc-age">${esc(sum && sum.shortLabel ? sum.shortLabel : "No birthday")}</span>
  </button>`;
}

/* Hers sits first, on the left, because she asked for that and because
   an app that lists everybody in the house except the person holding
   the phone is saying something. */
function parentCircle() {
  const on = store.profileWho === 'me';
  const first = (store.parent.name || '').trim().split(/\s+/)[0];
  return `
  <button class="kidcirc${on ? ' on' : ''}" data-me="1">
    ${parentFace(62)}
    <span class="kidcirc-name">${esc(first || 'You')}</span>
    <span class="kidcirc-age">Your profile</span>
  </button>`;
}

/* THE ONE QUESTION, AND WHAT SITS WHERE THE ANSWER GOES.

   Unanswered, this is a small card asking. Answered yes, it is the
   cycle section. Answered no, there is nothing here at all and there
   never will be again.

   It does not guess. A father opening the app and being invited to log
   a period is what this exists to stop, and guessing from his name or
   his pronoun would have been wrong for an adoptive mother in the
   other direction. */
function bodyCareBlock() {
  const p = store.parent;
  if (bodyCare(p) === 'no') return '';
  if (bodyCare(p) === 'yes') {
    return `
    <p class="sect">Your cycle</p>
    ${cycleWidget()}`;
  }
  const a = BODY_CARE_ASK;
  return `
  <div class="card flat" style="margin-top:14px">
    <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} ${esc(a.title)}</p>
    <p class="bodytext" style="margin-top:6px">${esc(a.body)}</p>
    <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
      <button class="btn" style="flex:1 1 130px" data-bodycare="yes">${esc(a.yes)}</button>
      <button class="chip" style="flex:1 1 110px;justify-content:center" data-bodycare="no">${esc(a.no)}</button>
    </div>
    <p class="tiny" style="margin-top:9px">${esc(a.after)}</p>
  </div>`;
}

function screenHome(c) {
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const first = (store.parent.name || '').trim().split(/\s+/)[0];
  const kids = store.children;
  const l = liftStore();
  const affirmation = liftAffirmation();
  const morning = liftMorning();
  const isMorning = hour < 12;
  const learn = parentLearnForDay(l.day);

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <h1 class="title">${esc(greet)}${first ? ',' : ''}</h1>
    ${first ? `<p class="hello">${esc(first)}</p>` : ''}
  </div>
  <div class="sc">
    ${installBanner()}
    ${choreCard()}

    <div class="kidrow home">
      ${parentCircle()}
      ${kids.map(kidCircle).join('')}
      <button class="kidcirc add" data-go="screen" data-id="addchild">
        <span class="face plain addface" style="width:62px;height:62px">
          ${icon('plus', 23, 'var(--sage)')}
        </span>
        <span class="kidcirc-name">Add</span>
        <span class="kidcirc-age">a child</span>
      </button>
    </div>
    ${kids.length ? '' : `
    <div class="card flat" style="margin-top:2px">
      <p class="bodytext">
        Add a child and everything in the app reshapes around their age, from sleep windows to what
        to say at bedtime. Add as many as you like. Each one keeps their own notes.
      </p>
    </div>`}

    <div class="card liftcard">
      <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Today</p>
      <p class="liftline">${esc(affirmation)}</p>
    </div>

    ${postComposer()}
    ${store.justPosted ? `
    <p class="tiny" style="text-align:center;padding:2px 0 4px">
      Posted. It is on your profile.
      <button class="chip" style="margin-left:6px" data-me="1">See it</button>
    </p>` : ''}

    ${showsBodyHalf(store.parent) ? `
    <button class="bigbtn" data-go="screen" data-id="momnow">
      <span class="bigbtn-ic">${icon('heart', 22, '#fff')}</span>
      <span class="grow">
        <span class="bigbtn-t">Something is happening right now</span>
        <span class="bigbtn-s">${esc(momNowBlurb())}</span>
      </span>
      ${icon('chev', 17, 'rgba(255,255,255,.8)')}
    </button>` : ''}

    ${/* OUTSIDE THE BODY CARE GATE ON PURPOSE.
          The button above it is only for somebody who said the body half
          is for them. This is for everybody, because a father, a
          grandmother and an adoptive parent can all be the one in the
          house this is written for. */ ''}
    ${supportRow()}

    <p class="sect">Logs for you</p>
    ${momCheckinCard()}
    ${momLogCard()}

    ${bodyCareBlock()}

    ${memOnThisDay()}

    ${/* Hers live here rather than on her profile. Nothing on Home is
          shareable, which is exactly what a memory should be. */ ''}
    ${memSection('me')}

    ${caretakerCards()}

    <p class="sect">For you</p>
    <button class="card learncard" data-go="learn" data-id="${esc(learn.id)}">
      <p class="eyebrow">${icon('bulb', 11, 'var(--sage)')} ${esc(learn.kind)}</p>
      <h3 class="h3" style="font-size:16.5px;margin-top:5px">${esc(learn.title)}</h3>
      <p class="bodytext" style="margin-top:4px">${esc(learn.blurb)}</p>
      <span class="chip" style="margin-top:10px">Read this ${icon('chev', 12, 'var(--deep)')}</span>
    </button>
    <button class="btn ghost sm" style="width:100%;margin-top:2px" data-go="screen" data-id="learnall">
      Everything written for you
    </button>

    ${morning ? `
    <div class="card">
      <p class="eyebrow">${icon(isMorning ? 'sun' : 'moon', 11, 'var(--sage)')}
        ${isMorning ? 'Something for this morning' : 'For tomorrow morning'}</p>
      <h3 class="h3" style="font-size:16px;margin-top:5px">${esc(morning.title)}</h3>
      <p class="bodytext" style="margin-top:4px">${esc(morning.body)}</p>
    </div>` : ''}

    ${duplicateCard()}

    ${isExampleChild(activeChild()) ? `
    <div class="card" style="border-left:3px solid var(--attention)">
      <p class="eyebrow">${icon('info', 11, 'var(--sage)')} This is the example child</p>
      <p class="bodytext" style="margin-top:5px">
        The app made one up so there was something to look at. Add your own child and this disappears.
      </p>
      <button class="btn" style="margin-top:12px" data-go="screen" data-id="addchild">Add your child</button>
    </div>` : ''}
  </div>`;
}

/* ---------- HER OWN CHECK IN ----------

   Each child had one. She did not, which said something the app did
   not mean to say. Same shape as theirs, same rule: every question is
   about the DAY rather than about her, and it never scores her. */

function momCheckins() {
  if (!store.parent.checkins || typeof store.parent.checkins !== 'object') store.parent.checkins = {};
  return store.parent.checkins;
}

function momCiSaved(day) {
  return momCheckins()[day || ciToday()] || null;
}

function momCiDraft() {
  if (!store.momCi || typeof store.momCi !== 'object') {
    const saved = momCiSaved();
    store.momCi = saved ? JSON.parse(JSON.stringify(saved)) : {};
  }
  return store.momCi;
}

function momCiSet(rowId, val) {
  const d = momCiDraft();
  d[rowId] = d[rowId] === val ? '' : val;
  flushStore();
  render();
}

function momCiSave() {
  const d = momCiDraft();
  const any = MOM_CHECKIN.rows.some((r) => d[r.id]);
  if (!any) return;
  momCheckins()[ciToday()] = JSON.parse(JSON.stringify(d));
  /* Kept to half a year, the same as the children's, so the record
     stays useful without growing forever. */
  const keys = Object.keys(momCheckins()).sort().reverse();
  keys.slice(CHECKIN_KEEP_DAYS).forEach((k) => { delete store.parent.checkins[k]; });
  store.momCi = null;
  store.momCiOpen = false;
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

/* How the last stretch of days has gone, for the gentle line. */
function momCiRun() {
  const all = momCheckins();
  const days = Object.keys(all).sort().reverse().slice(0, 3);
  if (days.length < 3) return null;
  const hard = days.every((d) => {
    const v = all[d] || {};
    const vals = MOM_CHECKIN.rows.map((r) => v[r.id]).filter(Boolean);
    return vals.length && vals.filter((x) => x === 'hard').length >= Math.ceil(vals.length / 2);
  });
  return hard ? 'hard' : null;
}

function momCheckinCard() {
  const saved = momCiSaved();
  const open = store.momCiOpen && !saved;
  const run = momCiRun();

  if (saved && !store.momCiOpen) {
    const said = MOM_CHECKIN.rows.map((r) => {
      const v = saved[r.id];
      if (!v) return null;
      const opt = r.options.filter((o) => o.id === v)[0];
      return opt ? opt.label : null;
    }).filter(Boolean);
    return `
    <div class="card">
      <p class="eyebrow">${icon('check', 11, 'var(--sage)')} You checked in today</p>
      <p class="bodytext" style="margin-top:5px">${esc(said.join(', '))}</p>
      ${run === 'hard' ? `
      <p class="tiny" style="margin-top:8px">${icon('leaf', 10, 'var(--sage)')}
        That is a few hard days close together. Nothing about that is a verdict on you, and it is the
        kind of thing worth saying out loud to somebody, whether that is your provider or a person who
        loves you.</p>` : ''}
    </div>`;
  }

  if (!open) {
    return `
    <button class="lrow" data-momci="open">
      <span class="licon">${icon('leaf', 18)}</span>
      <span class="grow">
        <span style="display:block;font-size:14.5px;font-weight:600;color:var(--ink)">${esc(MOM_CHECKIN.title)}</span>
        <span class="tiny" style="display:block;margin-top:2px">${esc(MOM_CHECKIN.intro)}</span>
      </span>
      <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
    </button>`;
  }

  const d = momCiDraft();
  return `
  <div class="card">
    <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} ${esc(MOM_CHECKIN.title)}</p>
    ${MOM_CHECKIN.rows.map((r) => `
      <div class="cirow">
        <p class="cirow-q">${esc(r.label)}</p>
        <div class="chips" style="margin-top:7px">
          ${r.options.map((o) => `
            <button class="chip${d[r.id] === o.id ? ' on' : ''}" data-momci="set"
              data-row="${esc(r.id)}" data-val="${esc(o.id)}"
              ${d[r.id] === o.id ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}
              aria-pressed="${d[r.id] === o.id}">${esc(o.label)}</button>`).join('')}
        </div>
      </div>`).join('')}
    <div class="cirow">
      <p class="cirow-q">${esc(MOM_CHECKIN.note)}</p>
      <input class="inp" type="text" data-momcinote="1" id="momCiNote"
        value="${esc(d.note || '')}" autocomplete="off" style="margin-top:7px;width:100%" />
    </div>
    <div style="display:flex;gap:8px;margin-top:11px">
      <button class="btn" data-momci="save">${icon('check', 15, '#fff')} Save</button>
      <button class="btn ghost" data-momci="cancel">Cancel</button>
    </div>
  </div>`;
}


/* The card on Home, and the screen behind it. */
function momLogCard() {
  const shape = momLogShape();
  const groups = getMomLogGroups(shape);
  if (!groups.length) return '';
  const today = ciToday();
  const todays = momLogs().filter((l) => String(l.at).slice(0, 10) === today);
  const feedLast = lastSide('mom-breastfeeding') || lastSide('mom-pumping');

  /* The four most useful for where she is, flattened out of the groups
     so the common ones are one tap rather than two. */
  const quick = groups.reduce((all, g) => all.concat(g.items), []).slice(0, 4);

  return `
  <div class="card">
    <div style="display:flex;align-items:center;gap:10px">
      <span class="grow">
        <span class="eyebrow" style="display:block">${icon('leaf', 11, 'var(--sage)')} For you</span>
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);margin-top:2px">
          ${todays.length
            ? esc(todays.length + ' thing' + (todays.length === 1 ? '' : 's') + ' logged today')
            : 'Nothing logged today'}
        </span>
      </span>
    </div>

    ${feedLast ? `
    <p class="tiny" style="margin-top:7px">
      ${icon('clock', 10, 'var(--sage)')} Last side was <strong style="color:var(--ink)">${esc(feedLast.side)}</strong>,
      at ${esc(clockOf(feedLast.at))}.
    </p>` : ''}

    <div class="chips" style="margin-top:10px">
      ${quick.map((t) => `
        <button class="chip" data-go="log" data-id="${esc(t.id)}">
          ${icon(t.icon, 12, 'var(--deep)')} ${esc(t.label)}
        </button>`).join('')}
    </div>
    <button class="btn ghost sm" style="width:100%;margin-top:9px" data-logwho="me">
      Everything you can log
    </button>
  </div>`;
}

/* The same plain text export the children have, for her. */
function momExport() {
  const lines = [];
  lines.push('Logs for ' + (store.parent.name || 'me'));
  lines.push('Exported ' + cycleDateLabelWithYear(ciToday()));
  lines.push('');
  momLogs().slice().forEach((l) => {
    const t = anyLogType(l.typeId);
    const d = new Date(l.at);
    const day = isNaN(d.getTime()) ? String(l.at).slice(0, 10) : d.toISOString().slice(0, 10);
    const bits = [];
    Object.keys(l.values || {}).forEach((k) => {
      const v = l.values[k];
      if (v == null || v === '' || (Array.isArray(v) && !v.length)) return;
      bits.push(k + ': ' + (Array.isArray(v) ? v.join(', ') : v));
    });
    lines.push(day + '  ' + clockOf(l.at) + '  ' + (t ? t.label : l.typeId)
      + (summarizeLog(l, t) ? ' - ' + summarizeLog(l, t) : ''));
    if (bits.length) lines.push('    ' + bits.join('  |  '));
  });
  lines.push('');
  lines.push('Recorded in Ready Set Grow by the person it is about. Nothing in it was reviewed');
  lines.push('by a clinician and nothing in it is a diagnosis.');
  try {
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (store.parent.name || 'my').replace(/[^\w-]+/g, '-').toLowerCase() + '-logs.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  } catch (err) {
    /* A blocked download is not worth taking the screen down for. */
  }
}


/* =================================================================
   RIGHT NOW, FOR HER

   The child version answers "something is happening to my baby".
   This one answers "something is happening to me", which is the half
   she said was missing. What shows is driven by where she actually
   is, so a mother of a four year old is never handed hemorrhage
   signs and somebody who has never pumped never sees flange sizing.
   ================================================================= */

const MOM_URG_COLOR = {
  emergency: 'var(--concern)',
  callNow: '#B5705C',
  sameDay: 'var(--attention)',
  support: 'var(--sage)',
};

/* Where she is today, worked out rather than asked. The youngest
   child's age is what puts her in or out of the postpartum window. */
/* Which child is the youngest, and how they arrived. The arrival is
   the part that matters: a one month old who was adopted did not
   arrive through the body of the person holding the phone. */
function youngestChild() {
  const real = store.children.filter((k) => !isExampleChild(k) && k.birthday);
  if (!real.length) return null;
  let best = null;
  let bestMonths = null;
  real.forEach((k) => {
    const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
    const m = sum && sum.age ? sum.age.totalMonths : null;
    if (m == null) return;
    if (bestMonths == null || m < bestMonths) { bestMonths = m; best = k; }
  });
  return best ? { child: best, months: bestMonths } : null;
}

/* Did THIS person give birth recently.
 *
 * The app used to answer this with the youngest child's age alone,
 * which quietly assumed whoever is holding the phone gave birth to
 * them. An adoptive father with a one month old was being shown
 * bleeding and stitches. He was not.
 *
 * Two things say otherwise, and either is enough: the child is marked
 * as having arrived another way, or the person has told Settings they
 * are an adoptive, foster, step, kinship or guardian carer and not a
 * birth parent. With nothing said either way the app keeps the old
 * behaviour, because withholding hemorrhage warnings from somebody who
 * simply has not filled in Settings is the worse mistake of the two.
 */
function gaveBirthRecently() {
  const y = youngestChild();
  if (!y) return false;
  const arrival = Array.isArray(y.child.arrival) ? y.child.arrival : [];
  const notMine = ['adopted', 'fostered', 'step', 'kinship']
    .some((id) => arrival.indexOf(id) !== -1);
  if (notMine) return false;
  const roles = situation().roles || [];
  if (roles.length && roles.indexOf('birth') === -1) return false;
  return true;
}

function momShape() {
  const y = youngestChild();
  const sit = situation();
  return {
    /* Null for anybody who did not give birth, which is what turns the
       recovery content off rather than hiding it screen by screen. */
    monthsSinceBirth: gaveBirthRecently() && y ? y.months : null,
    /* Feeding is a separate question. Plenty of people who did not give
       birth feed a baby, by bottle or by inducing lactation. */
    feeding: sitShows('feeding'),
    pregnant: hasStage(sit, 'expecting'),
    youngestMonths: y ? y.months : null,
    roles: sit.roles || [],
  };
}

/* Whoever is holding the phone, in the shape caretakers.js wants. */
function caretakerShape() {
  const sit = situation();
  const kids = store.children.filter((k) => !isExampleChild(k));
  /* How each child arrived is recorded per child, so a house holding
     one somebody gave birth to and one who came another way is a shape
     the app can actually see rather than a special case. */
  const otherWays = ['adopted', 'fostered', 'step', 'kinship', 'exchange'];
  const arrived = kids.filter((k) => (k.arrival || []).some((a) => otherWays.indexOf(a) !== -1));
  return {
    roles: sit.roles || [],
    support: sit.support || [],
    gaveBirth: gaveBirthRecently(),
    hasChildren: kids.length > 0,
    /* Some arrived one way and some another, which is its own thing. */
    mixedArrivals: arrived.length > 0 && arrived.length < kids.length,
    hasExchange: kids.some((k) => (k.arrival || []).indexOf('exchange') !== -1),
  };
}

function caretakerCards() {
  const list = caretakerEntriesFor(caretakerShape());
  if (!list.length) return '';
  return `
  <p class="sect">Written for you</p>
  ${list.map((e) => `
    <button class="card learncard" data-go="caretaker" data-id="${esc(e.id)}">
      <p class="eyebrow">${icon('people', 11, 'var(--sage)')} ${esc(e.kind)}</p>
      <h3 class="h3" style="font-size:16.5px;margin-top:5px">${esc(e.title)}</h3>
      <p class="bodytext" style="margin-top:4px">${esc(e.blurb)}</p>
      <span class="chip" style="margin-top:10px">Read this ${icon('chev', 12, 'var(--deep)')}</span>
    </button>`).join('')}
  <p class="tiny" style="margin-top:2px">${esc(CARETAKER_NOTE)}</p>`;
}

function viewCaretaker(id) {
  const e = caretakerEntry(id);
  if (!e) return emptyScreen('That one is not here', 'Go back and pick again.');
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <p class="eyebrow" style="margin-top:6px">${esc(e.kind)}</p>
    <h1 class="title" style="margin-top:3px">${esc(e.title)}</h1>
  </div>
  <div class="sc">
    <div class="card flat">
      ${String(e.body).split('\n\n').map((para) => `<p class="bodytext" style="margin-bottom:9px">${esc(para)}</p>`).join('')}
    </div>

    <p class="sect">What helps</p>
    <div class="card">
      <ul class="dlist">${e.helps.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    </div>

    <p class="sect">When it needs more than an app</p>
    <div class="card flat" style="border-left:3px solid var(--attention)">
      <p class="bodytext">${esc(e.getHelp)}</p>
    </div>

    <p class="sect">Somebody to talk to</p>
    ${MATERNAL_SUPPORT_LINES.map((l) => `
      <div class="card flat">
        <p class="eyebrow">${icon('people', 11, 'var(--sage)')} ${esc(l.name)}</p>
        <p class="bodytext" style="margin-top:4px">${esc(l.detail)}</p>
        <a class="btn ghost sm" style="margin-top:9px;text-decoration:none;display:block;text-align:center"
          href="tel:${esc(String(l.contact).replace(/[^0-9]/g, '').slice(-11))}">${esc(l.contact)}</a>
      </div>`).join('')}
    <p class="tiny" style="margin-top:8px">These take calls from partners and family too, not only
    from the person who gave birth.</p>
  </div>`;
}

function momNowRow(e) {
  return `
  <button class="lrow" data-go="momnow" data-id="${esc(e.id)}">
    <span class="licon">${icon(e.icon || 'heart', 18)}</span>
    <span class="grow">
      <span style="display:block;font-size:14.5px;font-weight:600;color:var(--ink)">${esc(e.label)}</span>
      <span class="tiny" style="display:block;margin-top:2px">${esc(e.blurb)}</span>
    </span>
    <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
  </button>`;
}

/* The line under the button names what is actually behind it today,
   so it reads as hers rather than as a generic panic button. */
function momNowBlurb() {
  const shape = momShape();
  const bits = [];
  if (shape.monthsSinceBirth != null && shape.monthsSinceBirth < POSTPARTUM_WINDOW_MONTHS) {
    bits.push('bleeding', 'blood pressure');
  }
  if (shape.feeding) bits.push('a sore breast');
  bits.push('rage', 'nothing left today');
  return bits.slice(0, 4).join(', ');
}

function screenMomNow() {
  const shape = momShape();
  const groups = getMomSituationsByCategory(shape);
  const em = showsMomEmergencyCard(shape);

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">Something is happening</h1>
    <p class="sub">This one is about you.</p>
  </div>
  <div class="sc">

    ${em ? `
    <div class="card" style="border-left:3px solid var(--concern)">
      <p class="eyebrow" style="color:var(--concern)">
        ${icon('info', 11, 'var(--concern)')} ${esc(MOM_ALWAYS_EMERGENCY.title)}
      </p>
      <ul class="dlist" style="margin-top:7px">
        ${MOM_ALWAYS_EMERGENCY.signs.map((x) => `<li>${esc(x)}</li>`).join('')}
      </ul>
      <p class="bodytext" style="margin-top:9px"><strong style="color:var(--ink)">${esc(MOM_ALWAYS_EMERGENCY.sayThis)}</strong></p>
      <a class="btn urgent" href="tel:911" style="margin-top:12px;text-decoration:none">
        ${icon('info', 15, '#fff')} Call 911
      </a>
    </div>` : ''}

    ${Object.keys(MOM_CATEGORY_LABELS).filter((c) => (groups[c] || []).length).map((c) => `
      <p class="sect">${esc(MOM_CATEGORY_LABELS[c])}</p>
      ${groups[c].map(momNowRow).join('')}
    `).join('')}

    <p class="sect">If you need a person</p>
    ${MATERNAL_SUPPORT_LINES.map((l) => `
      <div class="card flat">
        <p class="eyebrow">${icon('people', 11, 'var(--sage)')} ${esc(l.name)}</p>
        <p class="bodytext" style="margin-top:4px">${esc(l.detail)}</p>
        <a class="btn ghost sm" style="margin-top:9px;text-decoration:none;display:block;text-align:center"
          href="tel:${esc(String(l.contact).replace(/[^0-9]/g, '').slice(-11))}">${esc(l.contact)}</a>
      </div>`).join('')}

    <p class="tiny" style="margin-top:12px">${esc(MOM_NOW_DISCLAIMER)}</p>
  </div>`;
}

function screenMomNowOne(id) {
  const e = getMomSituation(id);
  if (!e) return emptyScreen('That one is not here', 'Go back and pick again.');
  const u = e.urgencyCheck;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="momnow">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">${esc(e.label)}</h1>
  </div>
  <div class="sc">

    ${u ? `
    <div class="card" style="border-left:3px solid ${MOM_URG_COLOR[u.urgency] || 'var(--concern)'}">
      <p class="eyebrow" style="color:${MOM_URG_COLOR[u.urgency] || 'var(--concern)'}">
        ${icon('info', 11, MOM_URG_COLOR[u.urgency] || 'var(--concern)')}
        ${esc(MOM_URGENCY[u.urgency] ? MOM_URGENCY[u.urgency].label : '')} &middot; ${esc(u.title)}
      </p>
      <ul class="dlist" style="margin-top:7px">
        ${u.signs.map((x) => `<li>${esc(x)}</li>`).join('')}
      </ul>
      ${u.note ? `<p class="bodytext" style="margin-top:8px">${esc(u.note)}</p>` : ''}
      ${u.urgency === 'emergency' ? `
      <a class="btn urgent" href="tel:911" style="margin-top:12px;text-decoration:none">
        ${icon('info', 15, '#fff')} Call 911
      </a>` : ''}
    </div>` : ''}

    ${e.tryRightNow && e.tryRightNow.length ? `
    <p class="sect">Right now</p>
    <div class="card">
      <ol class="nlist">${e.tryRightNow.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>
    </div>` : ''}

    ${e.whatIsHappening ? `
    <p class="sect">What is going on</p>
    <div class="card flat"><p class="bodytext">${esc(e.whatIsHappening)}</p></div>` : ''}

    ${e.scripts && e.scripts.length ? `
    <p class="sect">Words for it</p>
    ${e.scripts.map((s) => `
      <div class="card flat">
        <p class="eyebrow">${esc(s.when)}</p>
        <p class="bodytext" style="margin-top:4px;font-style:italic">${esc(s.say)}</p>
      </div>`).join('')}` : ''}

    ${e.sayThis ? `
    <p class="sect">What to say when you call</p>
    <div class="card flat"><p class="bodytext" style="font-style:italic">${esc(e.sayThis)}</p></div>` : ''}

    ${e.callDoctorIf && e.callDoctorIf.length ? `
    <p class="sect">Call if</p>
    <div class="card flat" style="border-left:3px solid var(--attention)">
      <ul class="dlist">${e.callDoctorIf.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    </div>` : ''}

    ${e.support ? `
    <p class="sect">Somebody to talk to</p>
    ${MATERNAL_SUPPORT_LINES.map((l) => `
      <div class="card flat">
        <p class="eyebrow">${icon('people', 11, 'var(--sage)')} ${esc(l.name)}</p>
        <p class="bodytext" style="margin-top:4px">${esc(l.detail)}</p>
        <a class="btn ghost sm" style="margin-top:9px;text-decoration:none;display:block;text-align:center"
          href="tel:${esc(String(l.contact).replace(/[^0-9]/g, '').slice(-11))}">${esc(l.contact)}</a>
      </div>`).join('')}` : ''}

    ${e.sources && e.sources.length ? `
    <p class="sect">Where this comes from</p>
    <div class="card flat">
      ${e.sources.map((s) => `
        <p class="tiny" style="margin-bottom:5px">
          <a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.org)}, ${esc(s.label)}</a>
        </p>`).join('')}
    </div>` : ''}
  </div>`;
}


/* -----------------------------------------------------------------
   LEARNING, FOR HER
   ----------------------------------------------------------------- */

function screenLearnAll() {
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">For you</h1>
    <p class="sub">Your own head, and the kind of parent you want to be.</p>
  </div>
  <div class="sc">
    ${['Looking after yourself', 'Being their person'].map((kind) => `
      <p class="sect">${esc(kind)}</p>
      ${PARENT_LEARN.filter((p) => p.kind === kind).map((p) => `
        <button class="lrow" data-go="learn" data-id="${esc(p.id)}" style="align-items:flex-start">
          <span class="licon">${icon(p.weight === 'careful' ? 'heart' : 'bulb', 18)}</span>
          <span class="grow">
            <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);line-height:1.3">${esc(p.title)}</span>
            <span class="tiny" style="display:block;margin-top:2px">${esc(p.blurb)}</span>
          </span>
          <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
        </button>`).join('')}`).join('')}
    <p class="disclaimer">${esc(PARENT_LEARN_DISCLAIMER)}</p>
  </div>`;
}

function viewLearn(id) {
  const p = parentLearnById(id);
  if (!p) return emptyScreen('That could not be found.');
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="learnall">${icon('back', 15, 'var(--deep)')} Back</button>
    <p class="eyebrow" style="margin-top:6px">${esc(p.kind)}</p>
    <h1 class="title sm">${esc(p.title)}</h1>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext" style="font-size:15px">${esc(p.blurb)}</p>
    </div>
    ${p.body.map((para) => `<p class="bodytext" style="margin-top:12px">${esc(para)}</p>`).join('')}
    ${p.tryThis ? `
    <div class="card" style="margin-top:16px">
      <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Try this</p>
      <p class="bodytext" style="margin-top:5px">${esc(p.tryThis)}</p>
    </div>` : ''}
    <button class="btn ghost sm" style="width:100%;margin-top:12px" data-willow="open">
      Talk to Willow about this
    </button>
    <p class="disclaimer">${esc(PARENT_LEARN_DISCLAIMER)}</p>
  </div>`;
}

/* Whether a given child already has today recorded, without switching
   to them to find out. */
function ciSavedFor(k) {
  return !!(k && k.checkins && k.checkins[ciToday()]);
}

/* The same numbers as the profile card, laid out to be glanced at
   rather than read. */
function homeCycleCard(info) {
  const lead = info.isLate
    ? info.daysLate + ' day' + (info.daysLate === 1 ? '' : 's') + ' past the estimate'
    : info.daysToNext === 0 ? 'The estimate lands today'
    : info.inFertileWindow ? 'Inside the estimated fertile window'
    : 'About ' + info.daysToNext + ' day' + (info.daysToNext === 1 ? '' : 's') + ' to the next one';

  return `
  <button class="card cyccard" data-me="1">
    <div style="display:flex;align-items:center;gap:12px">
      <span class="cycday">
        <span class="cycday-n">${info.dayOfCycle}</span>
        <span class="cycday-l">day</span>
      </span>
      <span class="grow" style="text-align:left">
        <span class="eyebrow" style="display:block">Your cycle</span>
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);margin-top:2px">${esc(lead)}</span>
        <span class="tiny" style="display:block;margin-top:3px">
          Next one estimated ${esc(cycleDateLabel(info.nextPeriod))}, fertile window
          ${esc(cycleDateLabel(info.fertileStart))} to ${esc(cycleDateLabel(info.fertileEnd))}
        </span>
      </span>
      <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
    </div>
    <p class="tiny" style="margin-top:9px;text-align:left">Estimates from one date, not a test and not birth control.</p>
  </button>`;
}

/* -----------------------------------------------------------------
   THE CHILD TAB

   This replaces the old Hub, which was seven unrelated buttons in no
   particular order with Milestones sitting next to CPR. Six sections,
   each one a question a parent would actually ask, and every screen
   that used to be in the drawer lives inside exactly one of them.
   ----------------------------------------------------------------- */

function childRow(ic, title, sub, attrs) {
  return `
  <button class="lrow" ${attrs} style="align-items:flex-start">
    <span class="licon">${icon(ic, 18)}</span>
    <span class="grow">
      <span style="display:block;font-size:14px;font-weight:600;color:var(--ink);line-height:1.3">${title}</span>
      <span class="tiny" style="display:block;margin-top:2px">${sub}</span>
    </span>
    <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
  </button>`;
}

/* The ten people look for by name, rather than the first ten in the
   data file. File order put speech and auditory processing above
   anxiety and OCD, which is not how anybody searches. */
const COMMON_LENSES = ['adhd', 'autism', 'sensory', 'anxiety', 'ocd', 'speech',
  'emotionalRegulation', 'executiveFunction', 'learningDifferences', 'downSyndrome'];

/* -----------------------------------------------------------------
   EDITING A PROFILE

   Nothing on a profile saves as you type any more. She asked for Edit
   and Save, and she is right: a screen that quietly commits every
   keystroke gives you no way to change your mind, and no way to tell
   whether it worked. So a profile sits there being read until you press
   Edit, the changes live in a draft while you make them, and Save is
   the only thing that touches the real record.

   The draft is deliberately memory only. Backing out by closing the tab
   is the same as pressing Cancel.
   ----------------------------------------------------------------- */

function editingWho() {
  return store.profileEdit ? store.profileEdit.who : null;
}

function editStart(who) {
  if (who === 'me') {
    const p = store.parent || {};
    store.profileEdit = { who: 'me', values: {
      name: p.name || '', username: p.username || '', email: p.email || '',
      birthday: p.birthday || '', lastPeriod: p.lastPeriod || '', photo: p.photo || '',
    } };
    return;
  }
  const k = store.children.filter((x) => x.id === who)[0];
  if (!k) return;
  store.profileEdit = { who: who, values: {
    name: k.name || '', birthday: k.birthday || '', photo: k.photo || '',
  } };
}

function editCancel() { store.profileEdit = null; }

function editSave() {
  const e = store.profileEdit;
  if (!e) return;
  if (e.who === 'me') {
    ['name', 'username', 'email', 'birthday', 'lastPeriod', 'photo'].forEach((f) => {
      store.parent[f] = e.values[f] || '';
    });
    store.parentUpdatedAt = Date.now();
  } else {
    const k = store.children.filter((x) => x.id === e.who)[0];
    if (k) {
      k.name = (e.values.name || '').trim();
      /* A changed birthday changes the whole app underneath them, so the
         nap override goes with it rather than sitting there describing a
         day that no longer applies. */
      if (k.birthday !== (e.values.birthday || null)) k.napOverride = null;
      k.birthday = e.values.birthday || null;
      k.photo = e.values.photo || '';
      k.updatedAt = Date.now();
    }
  }
  store.profileEdit = null;
  flushStore();
}

/* Nothing on this screen is saved until Save is pressed, and a picked
   photo appearing in the big circle above makes it look as though it
   already is. Say so plainly, in the one place she is looking. */
function editUnsavedNote() {
  return `
  <p class="tiny" style="margin:-4px 0 12px;color:#B0873F;font-weight:600">
    ${icon('clock', 11, '#B0873F')} Nothing here is saved until you press Save.
  </p>`;
}

/* And a bar that follows her down the screen, so Save is never
   somewhere she has to scroll back up to find. */
function editSaveBar() {
  if (!store.profileEdit) return '';
  return `
  <div class="savebar">
    <span class="grow">
      <span class="savebar-t">Not saved yet</span>
      <span class="savebar-s">Your changes are held here until you save them</span>
    </span>
    <button class="chip" data-edit="cancel">Cancel</button>
    <button class="btn" data-edit="save">${icon('check', 15, '#fff')} Save</button>
  </div>`;
}

/* Read mode shows a value, not an input. It is the clearest possible
   signal that nothing here is going to move while you look at it. */
function readRow(label, value, empty) {
  const has = value !== null && value !== undefined && String(value) !== '';
  return `
  <div class="readrow">
    <span class="readrow-l">${esc(label)}</span>
    <span class="readrow-v${has ? '' : ' none'}">${esc(has ? String(value) : (empty || 'Not set'))}</span>
  </div>`;
}

/* The face picker. Shown only while editing, because changing a photo
   is an edit like any other. */
function facePicker(target, current) {
  const val = String(current || '');
  if (crop.on && crop.target === target) return cropCard();
  return `
  <div class="facepick">
    <div class="facepick-now">${faceHTML(val, 72, target === 'me' ? 'me' : 2)}</div>
    <div class="grow">
      <p class="tiny" style="margin-bottom:7px">Use a photo, or pick one of these.</p>
      <div class="avrow">
        ${AVATARS.map((a) => `
          <button class="avdot${val === 'avatar:' + a.id ? ' on' : ''}" style="background:${a.bg}"
            data-avatar="${esc(a.id)}" data-face="${esc(target)}" aria-label="${esc(a.id)} avatar">
            ${icon(a.icon, 17, '#fff', 1.9)}
          </button>`).join('')}
      </div>
      <div style="display:flex;gap:7px;flex-wrap:wrap;margin-top:9px">
        <button class="chip photobtn" data-photopick="${esc(target)}" ${store.photoBusy ? 'disabled' : ''}>
          ${icon('camera', 13, 'var(--deep)')} ${store.photoBusy ? 'Working on it' : 'Upload a photo'}
        </button>
        ${val ? `<button class="chip" data-avatar="" data-face="${esc(target)}">Remove</button>` : ''}
      </div>
      ${store.photoError ? `<p class="tiny" style="margin-top:7px;color:#A85A44">${esc(store.photoError)}</p>` : ''}
    </div>
  </div>`;
}

/* -----------------------------------------------------------------
   THE PROFILE TAB

   Whoever is selected. Her face in the corner puts her here, a child's
   circle on Home puts them here.
   ----------------------------------------------------------------- */

function screenProfileTab(c) {
  const who = store.profileWho || 'me';
  if (who !== 'me') {
    const k = store.children.filter((x) => x.id === who)[0];
    if (k && k.id === store.activeChildId) return screenChild(c);
    /* The selected child is gone, or somebody else got opened from a
       different screen. Fall back to her rather than to nothing. */
    if (!k) { store.profileWho = 'me'; store.profileEdit = null; }
    else return screenChild(c);
  }
  return screenMyProfile();
}

function screenMyProfile() {
  const p = store.parent || {};
  const editing = editingWho() === 'me';
  const v = editing ? store.profileEdit.values : p;
  const posts = store.posts || [];
  const shared = posts.filter((x) => x.visibility === 'public').length;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <div class="bigface">${faceHTML(v.photo, 96, 'me')}</div>
    <h1 class="title" style="margin-top:8px">${esc(p.name || 'Your profile')}</h1>
    <p class="sub">${calledByLabel(p) && store.children.length
      ? esc(calledByLabel(p)) + ' to ' + esc(store.children.length === 1
          ? (store.children[0].name || 'your child')
          : String(store.children.length) + ' of them')
      : (p.username ? '@' + esc(p.username) : 'Add a username in Settings')}</p>
  </div>
  <div class="sc">

    <div class="profstats">
      <span><b>${posts.length}</b> post${posts.length === 1 ? '' : 's'}</span>
      <span><b>${shared}</b> shared</span>
      <span><b>${store.children.length}</b> ${store.children.length === 1 ? 'child' : 'children'}</span>
    </div>

    <div class="editbar">
      ${editing ? `
        <button class="btn" data-edit="save">${icon('check', 15, '#fff')} Save</button>
        <button class="btn ghost" data-edit="cancel">Cancel</button>
      ` : `
        <button class="btn ghost" data-edit="me">${icon('camera', 14, 'var(--deep)')} Change photo</button>
        <button class="btn ghost" data-tab="settings">${icon('gear', 14, 'var(--deep)')} Edit details</button>
        <button class="btn ghost" data-go="screen" data-id="privacy">${icon('shield', 14, 'var(--deep)')} Privacy</button>
      `}
    </div>

    ${editing ? facePicker('me', v.photo) : ''}
    ${editing ? editUnsavedNote() : ''}

    ${store.feedError ? `
    <div class="card" style="border-left:3px solid var(--attention)">
      <p class="bodytext">${esc(store.feedError)}</p>
      <button class="chip" style="margin-top:9px" data-feed="errok">Close</button>
    </div>` : ''}

    ${/* The box she writes in lives on Home and only on Home. This page
          is where the posts LAND, which is the whole reason they are two
          different screens. A second composer here was the same thing in
          two places, and she has already had to say once that two
          screens doing one job is how somebody ends up somewhere that is
          not where they started. */ ''}
    ${posts.length ? '' : `
    <p class="tiny" style="text-align:center;padding:4px 0 2px">
      Nothing posted yet. The box to write in is on Home.
      <button class="chip" style="margin-left:6px" data-tab="home">Go there</button>
    </p>`}

    ${posts.map((x) => postCard(x, true)).join('')}

    ${/* Her memories are NOT here. This page is the public facing half
          of her, the one her posts live on, and a private shelf sitting
          underneath it offering the same kind of box was the thing that
          made her look twice. Hers are on Home, where nothing is
          shareable. A child's stay on the child's own profile. */ ''}

    <p class="tiny" style="margin-top:10px;text-align:center">
      ${icon('shield', 10, 'var(--muted)')} Only posts can be shared, and only the ones you choose.
      Everything else stays yours.
    </p>

    ${editing ? editSaveBar() : ''}
  </div>`;
}

function screenChild(c) {
  const kid = activeChild();
  const name = state.name || 'this child';
  const editing = kid && editingWho() === kid.id;
  const v = editing ? store.profileEdit.values : (kid || {});
  const doneMs = Object.keys(state.statuses || {}).filter(
    (id) => ['sometimes', 'mastered'].indexOf(state.statuses[id]) !== -1).length;
  const months = c.months;
  const first = (name || '').split(/\s+/)[0];

  /* EACH SECTION IS WRITTEN ONCE AND PLACED SOMEWHERE ELSE.

     The order follows the child's age, because the right order
     genuinely differs: for a newborn, Everyday care is the most opened
     screen in the app, and for a twelve year old it is almost never
     touched while How their mind works becomes the whole game. All of
     that reasoning lives in src/data/childSections.js.

     Nothing is hidden by age, only reordered. The only things that
     disappear are the ones with nothing behind them, such as milestones
     past six and development guidance for an age nobody has written
     yet, and those disappear for that reason rather than this one. */
  const body = {
    /* notedCard is what says something kind after a log is saved. It
       used to live only on the Logs hub, so saving from here returned
       her to this page and the encouragement was never seen. */
    checkin: () => notedCard() + checkinCard(),

    /* Today's plan is a card rather than another row with a heading,
       because it is the thing a parent arrives wanting and it should
       not look like the ninth item on a list. It used to appear twice,
       here and again inside Things to do together, which is the same
       duplication she has caught me on before. */
    plan: () => (months == null ? '' : `
      <button class="card todaycard" data-go="screen" data-id="plan">
        <span class="todaycard-ic">${icon('sun', 20, '#fff')}</span>
        <span class="grow">
          <span class="todaycard-t">Today's plan</span>
          <span class="todaycard-s">${esc(planCardLine(c))}</span>
        </span>
        ${icon('chev', 17, 'var(--deep)')}
      </button>`),

    logs: () => {
      const quickLogs = months == null ? [] : getLogTypesForAge(months).slice(0, 4);
      if (!quickLogs.length) return '';
      return `
      ${sectHead('logs', months, 'Log it as it happens')}
      <div class="qgrid">
        ${quickLogs.map((t) => `
          <button class="q" data-go="log" data-id="${esc(t.id)}">
            <span class="qi">${icon(logIcon(t.icon), 17)}</span>
            <span class="qt">${esc(t.label)}</span>
            <span class="qs">${esc(lastLogLine(t.id))}</span>
          </button>`).join('')}
      </div>
      <button class="btn ghost sm" style="width:100%;margin-top:2px"
        data-go="screen" data-id="childlogs">Everything logged for ${esc(first)}</button>`;
    },

    care: () => `
      ${sectHead('care', months, 'Everyday care')}
      ${childRow('moon', "Today's rhythm", 'Wake times, naps and bedtime, built from one answer',
        'data-go="screen" data-id="sleep"')}
      ${childRow('utensils', 'Feeding',
        esc(getFeedingHeadline(months) || 'Milk, starting solids, and the family table'),
        'data-go="screen" data-id="feeding"')}
      ${showsDiaperContent(months) ? childRow('drop', esc(DIAPER_TITLE),
        esc(diaperBandFor(months).perDay + ' a day at this age, and what to send to daycare'),
        'data-go="screen" data-id="diaperplan"') : ''}
      ${childRow('bulb', 'Care topics',
        c.topics.length ? esc(c.topics.slice(0, 4).map((t) => t.label).join(', ')) : 'Practical care, picked for this age',
        'data-go="screen" data-id="topics"')}`,

    together: () => {
      const jobs = kid ? choreJobsFor(kid.id).length : 0;
      const canDo = months == null ? 0 : choresForMonths(months).length;
      const fresh = months == null ? [] : choresNewlyPossible(months);
      return `
      ${sectHead('together', months, 'Things to do together')}
      ${childRow('puzzle', 'Activities',
        esc(c.activities.length + ' that fit this age'),
        'data-go="screen" data-id="activities"')}
      ${showsLearning(months) ? childRow('book', 'Learning',
        esc('What a structured day looks like at ' + (learnBandFor(months) || {}).label.toLowerCase()),
        'data-go="screen" data-id="learning"') : ''}
      ${canDo ? childRow('check', 'Jobs',
        esc(jobs
          ? jobs + (jobs === 1 ? ' job on the family chart' : ' jobs on the family chart')
          : (fresh.length
            ? 'Old enough now for ' + fresh[0].label.toLowerCase()
            : canDo + ' things they are old enough to have a go at')),
        'data-go="screen" data-id="chores"') : ''}`;
    },

    where: () => {
      const rows = [
        c.summary.checkpoint ? childRow('chart', 'Milestones',
          msChangeCount()
            ? esc(msChangeCount() + ' marked but not saved yet')
            : (doneMs ? esc(doneMs + ' marked so far. Ranges, not deadlines.') : 'Ranges, not deadlines'),
          'data-go="screen" data-id="milestones"') : '',
        c.content.length ? childRow('book', 'Development guidance',
          esc(c.content.length + ' written for exactly this age'),
          'data-go="screen" data-id="development"') : '',
      ].filter(Boolean).join('');
      return rows ? sectHead('where', months, 'Where they are now') + rows : '';
    },

    mind: () => `
      ${sectHead('mind', months, 'How their mind works')}
      ${childRow('bulb', 'Understanding ' + esc(first),
        state.lenses.length
          ? esc(getLenses(state.lenses).map((l) => l.label).join(', '))
          : 'Turn on what fits them, and read what it actually means',
        'data-go="screen" data-id="understand"')}
      ${childRow('hand', signRowTitle(), signRowSub(months),
        'data-go="screen" data-id="signs"')}
      ${state.lenses.length ? `
      <div class="card flat">
        <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Your active lenses</p>
        <p class="tiny" style="margin-top:4px">${esc(getLenses(state.lenses).map((l) => l.label).join(', '))}
        are reordering what surfaces first. Nothing is hidden, everything is still here.</p>
      </div>` : ''}`,

    health: () => `
      ${sectHead('health', months, 'Health')}
      ${childRow('chart', 'Growth', growthRowSub(kid, months),
        'data-go="screen" data-id="growth"')}
      ${childRow('note', 'Vaccine record', vaxRowSub(kid, months),
        'data-go="screen" data-id="vaxrecord"')}
      ${childRow('shield', 'Vaccines',
        'What the evidence says, what your rights are, and how to decide',
        'data-go="screen" data-id="vaccines"')}
      ${childRow('pill', 'Something is wrong right now',
        'Fever, rashes, crying that will not stop, and when to call',
        'data-go="screen" data-id="now"')}
      ${months != null && months >= 18 ? childRow('leaf', GROW_TITLE, growRowSub(months),
        'data-go="screen" data-id="growingup"') : ''}`,

    safety: () => `
      ${sectHead('safety', months, 'If something happens')}
      ${childRow('heart', 'CPR, choking and staying safe',
        esc('For ' + getCprForAge(months).label.toLowerCase()) + ', plus what to do when you are at the end of it',
        'data-go="screen" data-id="safety"')}
      ${months != null && months >= 18 ? childRow('heart', CON_TITLE, conRowSub(months),
        'data-go="screen" data-id="consent"') : ''}
      ${months != null && months >= 12 ? childRow('note', ONLINE_TITLE, onlineRowSub(months),
        'data-go="screen" data-id="online"') : ''}
      ${childRow('shield', SUP_TITLE,
        'A caseworker, somebody who frightens you, or somebody targeting your child',
        'data-go="screen" data-id="support"')}`,

    memories: () => (kid ? memSection(kid.id) : ''),
  };

  const order = childSectionOrder(months);
  /* The page breaks in half wherever the daily things stop for THIS
     age, rather than at a fixed position, and the quiet half is
     announced once so the change of weight reads as deliberate. */
  let restOpened = false;
  const sections = order.map((id) => {
    const html = body[id] ? body[id]() : '';
    if (!html) return '';
    if (!restOpened && !isDailySection(id, months)) {
      restOpened = true;
      return `<div class="restwrap"><p class="sect rest-label">${esc(REST_LABEL)}</p>` + html;
    }
    return html;
  }).join('');

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <div class="bigface">${faceHTML(v.photo, 84, c.growth ? c.growth.order : 2)}</div>
    <h1 class="title" style="margin-top:8px">${esc(name)}</h1>
    <p class="sub">${esc(c.summary.label || 'Add a birthday')}${c.stage ? ' &middot; ' + esc(c.stage.label) : ''}</p>
  </div>
  <div class="sc">

    ${kid ? `
    <div class="editbar">
      ${editing ? `
        <button class="btn" data-edit="save">${icon('check', 15, '#fff')} Save</button>
        <button class="btn ghost" data-edit="cancel">Cancel</button>
      ` : `
        <button class="btn ghost" data-edit="${esc(kid.id)}">${icon('star', 14, 'var(--deep)')} Edit their details</button>
      `}
    </div>

    ${editing ? `
      ${facePicker(kid.id, v.photo)}
      ${editUnsavedNote()}
      <div class="card flat" style="margin-bottom:8px">
        <p class="eyebrow">Their name</p>
        <input class="inp" type="text" data-editname="1" id="ce_name" value="${esc(v.name || '')}"
          placeholder="Name" autocomplete="off" style="margin-top:7px;width:100%" />
      </div>
      <div class="card flat" style="margin-bottom:8px">
        <p class="eyebrow">Their birthday, or a due date if you are expecting</p>
        <div style="margin-top:7px">${dateSelects('child:' + kid.id, v.birthday || '', 25, 1)}</div>
      </div>
    ` : ''}` : ''}

    ${c.days != null && c.days < 56 && getDiaperDay(c.days) ? `
    <p class="sect">The newborn count</p>
    ${newbornCounter(c)}
    <button class="btn ghost sm" style="width:100%;margin-top:-3px"
      data-go="screen" data-id="feeding" data-asksub="feedTab" data-asksubval="newborn">
      Feeds, diapers and how many ounces
    </button>` : ''}

    ${sections}
    ${restOpened ? '</div>' : ''}

    <p class="disclaimer">${esc(CONTENT_DISCLAIMER)}</p>
    ${editing ? editSaveBar() : ''}
  </div>`;
}

/* A heading, unless this section is one of the daily ones drawn as a
   card, in which case it has none. */
function sectHead(id, months, label) {
  return `<p class="sect${isDailySection(id, months) ? ' sect-day' : ''}">${esc(label)}</p>`;
}

/* What today's plan card says underneath its title. Reads the plan that
   already exists rather than building one, so opening the profile does
   not quietly commit a child to a plan they may never look at. */
function planCardLine(c) {
  const kid = activeChild();
  const plan = kid && kid.plan && kid.plan.day === ciToday() ? kid.plan : null;
  if (!plan) return 'Three things chosen for today, new again tomorrow';
  const done = Object.keys(plan.done || {}).length;
  if (!done) return 'Three things chosen for today. Nothing ticked off yet.';
  return done + ' ticked off today. Tomorrow brings a different one.';
}


/* -----------------------------------------------------------------
   LOGS

   Driven entirely by logTypes.js, so a teenager is never offered a
   diaper log and a newborn is never offered a homework log. The
   medication log computes when the next dose of that same medicine
   is due, because rotating two fever medicines at 3 AM is exactly
   where double dosing happens. It never says how much to give.
   ----------------------------------------------------------------- */

/* The data file names icons in a set the app does not draw, so this
   maps them onto the ones it does. */
const LOG_ICON = {
  activity: 'chart', award: 'star', 'book-open': 'book', 'check-circle': 'check',
  coffee: 'utensils', droplet: 'drop', 'file-text': 'note', heart: 'heart',
  moon: 'moon', 'refresh-cw': 'potty', smile: 'chat', star: 'star',
  thermometer: 'pill', users: 'people',
};
function logIcon(name) { return LOG_ICON[name] || 'note'; }

/* =================================================================
   FILES, IN STORAGE RATHER THAN IN THE RECORD

   Everything used to be stored as a data URL inside the account
   record itself. That works for a 256 pixel avatar and falls over at
   about seven real photos, because Firestore caps one record at a
   megabyte and a phone photo is roughly 125 KB once encoded. Video was
   never possible at all.

   So files now go to Cloud Storage under the account's own id, and the
   record keeps a path and a URL. The rules on the bucket say the id in
   the path has to match the id of whoever is asking, which is the
   whole security model.

   WHAT HAPPENS WHEN STORAGE IS NOT REACHABLE
   The upload fails and says so, in words, with the file still sitting
   in the composer. It does not silently drop it and it does not fall
   back to stuffing it in the record, because that is how the ceiling
   got hit in the first place.
   ================================================================= */

let storagePromise = null;

function loadStorage() {
  if (storagePromise) return storagePromise;
  storagePromise = (async () => {
    const v = FIREBASE_SDK_VERSION;
    const { app } = await loadFirebase();
    const mod = await import(`https://www.gstatic.com/firebasejs/${v}/firebase-storage.js`);
    return { mod: mod, storage: mod.getStorage(app) };
  })().catch((err) => {
    storagePromise = null;
    throw err;
  });
  return storagePromise;
}

/* Photos are shrunk before they go up. A 4000 pixel phone photo is
   four megabytes of detail nobody looks at on a 400 pixel screen, and
   the smaller it is the faster it comes back on her mother's wifi. */
function shrinkImage(file, maxEdge) {
  return new Promise((resolve) => {
    const done = (blob) => resolve(blob || file);
    const edge = maxEdge || 1600;
    const draw = (src, w, h) => {
      try {
        const f = Math.min(1, edge / Math.max(w, h));
        if (f >= 1 && file.size < 900 * 1024) { done(null); return; }
        const cv = document.createElement('canvas');
        cv.width = Math.round(w * f);
        cv.height = Math.round(h * f);
        cv.getContext('2d').drawImage(src, 0, 0, cv.width, cv.height);
        cv.toBlob((b) => done(b), 'image/jpeg', 0.84);
      } catch (err) { done(null); }
    };
    if (typeof createImageBitmap === 'function') {
      createImageBitmap(file, { imageOrientation: 'from-image' })
        .then((bmp) => { draw(bmp, bmp.width, bmp.height); try { bmp.close(); } catch (e) {} })
        .catch(() => done(null));
      return;
    }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => { draw(img, img.naturalWidth, img.naturalHeight); try { URL.revokeObjectURL(url); } catch (e) {} };
    img.onerror = () => { try { URL.revokeObjectURL(url); } catch (e) {} done(null); };
    img.src = url;
  });
}

function storageFolder(kind) {
  if (kind === 'video') return 'video';
  if (kind === 'audio') return 'audio';
  return 'photos';
}

/**
 * Put one file in Storage and hand back what the record should keep.
 * onProgress gets 0 to 100 so a slow upload never looks like a hang.
 */
async function uploadFile(file, kind, onProgress) {
  /* This used to read auth.uid, which has never existed. The signed in
     user lives at auth.user.uid, so this was undefined every time and
     every upload threw "not signed in" before it started. Photos,
     videos and voice memos could not have worked in production at all.
     Found while wiring the feed, which needed the same value. */
  const uid = myUid();
  if (!uid) throw new Error('not signed in');
  const { mod, storage } = await loadStorage();

  let body = file;
  if (kind === 'photo') body = await shrinkImage(file, 1600);

  const clean = String(file.name || 'file').replace(/[^\w.-]+/g, '-').slice(-60);
  const path = 'users/' + uid + '/' + storageFolder(kind) + '/'
    + Date.now() + '-' + Math.floor(Math.random() * 1000) + '-' + clean;

  const ref = mod.ref(storage, path);
  const task = mod.uploadBytesResumable(ref, body, {
    contentType: body.type || file.type || 'application/octet-stream',
  });

  await new Promise((resolve, reject) => {
    task.on('state_changed',
      (snap) => {
        if (onProgress && snap.totalBytes) {
          onProgress(Math.round((snap.bytesTransferred / snap.totalBytes) * 100));
        }
      },
      reject,
      resolve);
  });

  const url = await mod.getDownloadURL(ref);
  return { path: path, url: url, kind: kind, bytes: body.size || file.size || 0,
    name: file.name || '' };
}

/* Taking a memory away takes its files with it. A file left in the
   bucket after its memory is gone is something she is paying for and
   cannot see. */
async function deleteStoredFiles(files) {
  if (!files || !files.length) return;
  try {
    const { mod, storage } = await loadStorage();
    await Promise.all(files.map((f) => {
      if (!f || !f.path) return null;
      return mod.deleteObject(mod.ref(storage, f.path)).catch(() => null);
    }));
  } catch (err) {
    /* The memory still goes. An orphaned file is better than a delete
       that appears not to work. */
  }
}


/* =================================================================
   HER OWN LOGS

   The same machinery as the child logs, pointed at her record instead
   of a child's. What she is offered is decided by where she is rather
   than by anybody's age, which is what momShape() already works out
   for the mother facing Right Now.
   ================================================================= */

function momLogShape() {
  const sit = situation();
  return Object.assign(momShape(), { conditions: sit.conditions || [] });
}

function momLogs() {
  if (!Array.isArray(store.parent.logs)) store.parent.logs = [];
  return store.parent.logs;
}

/* One lookup for both sets, so the form and the list do not each need
   to know whose log they are drawing. */
function anyLogType(id) {
  return getMomLogType(id) || getLogType(id);
}

function isMomLog(id) {
  return !!getMomLogType(id);
}

/* The last side she fed or pumped from, which is the question the
   whole feeding log exists to answer at four in the morning. */
function lastSide(typeId) {
  const rows = momLogs().filter((l) => l.typeId === typeId && l.values && l.values.side);
  if (!rows.length) return null;
  const v = rows[0];
  return { side: v.values.side, at: v.at };
}

function momLogSave(typeId) {
  const t = getMomLogType(typeId);
  if (!t) return;
  const d = state.logDraft && state.logDraft.typeId === typeId ? state.logDraft : null;
  const values = Object.assign({}, (d && d.values) || {});
  const filled = Object.keys(values).some((key) => {
    const v = values[key];
    return Array.isArray(v) ? v.length > 0 : v !== '' && v != null;
  });
  if (!filled) return;

  const logs = momLogs();
  logs.unshift({
    id: 'm' + Date.now() + Math.floor(Math.random() * 1000),
    typeId: typeId,
    at: new Date().toISOString(),
    values: values,
  });
  if (logs.length > 500) logs.length = 500;
  state.logDraft = { typeId: null, values: {} };
  store.logDraft = { typeId: null, values: {} };
  store.parentUpdatedAt = Date.now();
  notedSet(typeId);
  nudgeMaybe(typeId, values);
  /* Back to where she can see it, rather than to a dead end. */
  store.logWho = 'me';
  store.logDay = ciToday();
  store.logCal = 0;
  state.view = null;
  state.tab = 'logs';
  flushStore();
  render();
}

function momLogDelete(id) {
  store.parent.logs = momLogs().filter((l) => l.id !== id);
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

/* When she last took the same medicine. Timing only, never dose. */
function momMedLine(name) {
  const n = String(name || '').trim().toLowerCase();
  if (!n) return null;
  const last = momLogs().filter((l) => l.typeId === 'mom-medication'
    && String((l.values || {}).name || '').trim().toLowerCase() === n)[0];
  if (!last) return null;
  const mins = Math.round((Date.now() - new Date(last.at).getTime()) / 60000);
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const ago = h ? h + ' hour' + (h === 1 ? '' : 's') + (m ? ' and ' + m + ' minutes' : '') : m + ' minutes';
  return { text: 'You last took ' + String(last.values.name) + ' ' + ago + ' ago, at ' + clockOf(last.at) + '.',
    note: 'Timing only. How much to take is on the label or from whoever prescribed it.' };
}

function childLogs() {
  const k = activeChild();
  if (!k) return [];
  if (!Array.isArray(k.logs)) k.logs = [];
  return k.logs;
}

function clockOf(iso) {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  let h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, '0');
  const ap = h < 12 ? 'AM' : 'PM';
  h = h % 12; if (h === 0) h = 12;
  return h + ':' + m + ' ' + ap;
}

function dayOf(iso) {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  const today = new Date();
  const same = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  const yest = new Date(today.getTime() - 86400000);
  if (same(d, today)) return 'Today';
  if (same(d, yest)) return 'Yesterday';
  return d.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
}

/* The line under a quick log button, so a parent can see at a glance
   when the last one was without opening anything. */
function lastLogLine(typeId) {
  const last = childLogs().filter((l) => l.typeId === typeId)[0];
  if (!last) return 'Nothing yet';
  const mins = Math.round((Date.now() - new Date(last.at).getTime()) / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return mins + ' min ago';
  const h = Math.floor(mins / 60);
  if (h < 24) return h + (h === 1 ? ' hour ago' : ' hours ago');
  return dayOf(last.at);
}

/* Timing only. Dose is by weight and comes from a pediatrician or the
   label, and this file must never carry one. */
function medDueLine(name) {
  const info = getMedInterval(name);
  if (!info) return null;
  const prev = childLogs().filter(
    (l) => l.typeId === 'medication' && getMedInterval(l.values && l.values.name) &&
      getMedInterval(l.values.name).label === info.label)[0];
  if (!prev) return { label: info.label, text: 'No earlier dose of ' + info.label.toLowerCase() + ' logged.', note: info.note, due: false };
  const dueAt = new Date(new Date(prev.at).getTime() + info.minHours * 3600000);
  const ok = Date.now() >= dueAt.getTime();
  const count = childLogs().filter((l) => {
    if (l.typeId !== 'medication') return false;
    const m = getMedInterval(l.values && l.values.name);
    if (!m || m.label !== info.label) return false;
    return Date.now() - new Date(l.at).getTime() < 86400000;
  }).length;
  return {
    label: info.label,
    text: ok
      ? 'Last ' + info.label.toLowerCase() + ' was ' + clockOf(prev.at) + '. The next dose is due now.'
      : 'Last ' + info.label.toLowerCase() + ' was ' + clockOf(prev.at) + '. The next dose is not due until ' + clockOf(dueAt.toISOString()) + '.',
    note: info.note + (count >= info.maxPer24h ? ' That is ' + count + ' in the last 24 hours, which is at or over the usual cap.' : ''),
    due: ok,
  };
}

/* ---------- A WORD AFTER SOMETHING IS LOGGED ----------

   The written line ships and shows immediately. Willow rewrites it in
   the background when she is reachable, on the same daily budget as
   the rest of her background writing, and if she is not reachable the
   written one simply stays. Nothing ever saves in silence. */

function selfCareRun(kind) {
  const since = Date.now() - 1000 * 60 * 60 * 24 * 7;
  const want = kind === 'self' ? SELFCARE_TYPES
    : kind === 'outside' ? ['mom-outside'] : ['mom-moved'];
  return momLogs().filter((l) => want.indexOf(l.typeId) !== -1
    && new Date(l.at).getTime() >= since).length;
}

function notedSet(typeId) {
  const t = anyLogType(typeId);
  const label = t ? t.label : 'that';
  const day = ciToday();
  store.noted = {
    typeId: typeId,
    text: encourageFor(typeId, day),
    from: 'written',
    at: Date.now(),
  };
  /* The run line only for the looking after yourself ones, and only
     once there is actually a run to mention. */
  if (SELFCARE_TYPES.indexOf(typeId) !== -1) {
    store.noted.run = runLine('self', selfCareRun('self'));
  }
  /* Willow's version, when she is going. Same budget as the daily
     affirmation so a heavy logging day cannot eat the chat. */
  try {
    if (typeof liftWrite === 'function') {
      /* A fresh key each time, or liftWrite would only ever write one
         of these per session. The daily cap still holds. */
      liftWrite('noted:' + typeId + ':' + Date.now(), { typeId: typeId, label: label, parentName: (store.parent.name || '').trim().split(/\s+/)[0] || '' }, (text) => {
        const line = String(text || '').trim().replace(/^["']|["']$/g, '');
        if (!line || line.length > 240) return;
        if (!store.noted || store.noted.typeId !== typeId) return;
        store.noted.text = line;
        store.noted.from = 'willow';
      });
    }
  } catch (err) { /* the written line is already on screen */ }
}

/* =================================================================
   WILLOW SPEAKING UP

   She asked for Willow to pop up sometimes with a message after
   something is logged. The whole design is in src/data/nudges.js and
   the short version is that "sometimes" is the requirement, not a
   softening of it. Every log still gets its quiet line on the Logs
   screen. Willow herself only surfaces when there is genuinely
   something a friend would have noticed.
   ================================================================= */

/* How many hard days she has actually put down lately. Counted from
   what she wrote, never inferred from anything else, and used for one
   thing only: deciding whether Willow mentions that support exists. */
function momLowDays(days) {
  const since = Date.now() - 1000 * 60 * 60 * 24 * (Number(days) || 14);
  return momLogs().filter((l) => l.typeId === 'mom-mood'
    && new Date(l.at).getTime() >= since
    && NUDGE_LOW_MOODS.indexOf(String((l.values || {}).mood || '')) !== -1).length;
}

function nudgeState() {
  if (!store.nudge || typeof store.nudge !== 'object') store.nudge = {};
  return store.nudge;
}

function nudgeCountToday() {
  const n = nudgeState();
  const day = ciToday();
  if (n.day !== day) { n.day = day; n.count = 0; }
  return n.count || 0;
}

/* Everything the decision needs, gathered from what the app already
   knows. Kept apart from the decision itself so the rules can be
   tested without a browser. */
function nudgeFacts(typeId, values) {
  const mine = isMomLog(typeId);
  const list = mine ? momLogs() : (activeChild() ? (activeChild().logs || []) : []);
  /* The log that was just saved is already in the list, so "first"
     means exactly one of them, and the gap is measured to the one
     before it rather than to itself. */
  const same = list.filter((l) => l.typeId === typeId);
  const others = list.filter((l) => l.id !== (same[0] || {}).id);
  const prevAt = others.length ? new Date(others[0].at).getTime() : 0;
  const n = nudgeState();

  return {
    typeId: typeId,
    hour: new Date().getHours(),
    isFirst: same.length <= 1,
    selfRun: SELFCARE_TYPES.indexOf(typeId) !== -1 ? selfCareRun('self') : 0,
    mood: (values && values.mood) ? String(values.mood) : '',
    lowCount: momLowDays(14),
    daysAway: prevAt ? Math.floor((Date.now() - prevAt) / (1000 * 60 * 60 * 24)) : 0,
    lastAt: Number(n.lastAt) || 0,
    todayCount: nudgeCountToday(),
    now: Date.now(),
  };
}

/* Decides, and if the answer is yes, puts her bubble on screen. The
   written line is there immediately and Willow rewrites it if she can,
   the same way everything else she writes works. */
function nudgeMaybe(typeId, values) {
  let reason = null;
  try { reason = nudgeReason(nudgeFacts(typeId, values)); } catch (err) { reason = null; }
  if (!reason) return;

  const n = nudgeState();
  const t = anyLogType(typeId);
  const label = t ? t.label : '';
  n.lastAt = Date.now();
  n.count = nudgeCountToday() + 1;
  n.at = Date.now();
  n.reason = reason;
  n.text = nudgeWritten(reason, ciToday() + typeId);
  n.from = 'written';
  n.opener = NUDGE_OPENERS[reason] || '';

  /* Some lines are written once and read as written. See the note on
     lowrun in nudges.js for why. */
  if ((NUDGE_REASONS[reason] || {}).fixed) { flushStore(); return; }

  try {
    if (typeof liftWrite === 'function') {
      liftWrite('nudge:' + reason + ':' + Date.now(), {
        reason: reason,
        label: label,
        parentName: (store.parent.name || '').trim().split(/\s+/)[0] || '',
      }, (text) => {
        const line = String(text || '').trim().replace(/^["']|["']$/g, '');
        if (!line || line.length > 200) return;
        const cur = nudgeState();
        /* She may have moved on, or a newer one may have replaced this.
           Either way the old answer is no longer wanted. */
        if (cur.reason !== reason) return;
        cur.text = line;
        cur.from = 'willow';
      });
    }
  } catch (err) { /* the written line is already on screen */ }
}

function nudgeLive() {
  const n = store.nudge;
  if (!n || !n.text || n.gone) return null;
  if (Date.now() - (n.at || 0) > NUDGE_LIFE_MINUTES * 60 * 1000) return null;
  return n;
}

function nudgeDismiss() {
  const n = nudgeState();
  n.gone = true;
  flushStore();
  render();
}

/* Tapping her opens the panel and puts the conversation in motion, so
   she is somebody who said something rather than a message that
   disappears. */
function nudgeTake() {
  const n = nudgeLive();
  if (!n) return;
  const key = willowThreadKey();
  willowSay('willow', n.text, [], '', key);
  if (n.opener) willow.input = n.opener;
  nudgeState().gone = true;
  willow.open = true;
  flushStore();
  render();
}

/* Her bubble, peeking out above her pill in the corner. Drawn beside
   the pill rather than instead of it, so the thing she is attached to
   is still visibly her. */
function nudgeBubble() {
  const n = nudgeLive();
  if (!n || willow.open) return '';
  return `
  <div class="wnudge">
    <button class="wnudge-x" data-nudge="no" aria-label="Not now">&times;</button>
    <button class="wnudge-body" data-nudge="open">
      <span class="wnudge-t">${esc(WILLOW.name)}</span>
      <span class="wnudge-l">${esc(n.text)}</span>
      ${n.opener ? `<span class="wnudge-go">${esc(n.opener)} ${icon('chev', 11, 'var(--deep)')}</span>` : ''}
    </button>
  </div>`;
}

/* Shown once, on the screen she lands on, then cleared by the next
   thing she does. A note about something that just happened should not
   still be there tomorrow. */
function notedCard() {
  const n = store.noted;
  if (!n || !n.text) return '';
  if (Date.now() - (n.at || 0) > 1000 * 60 * 10) return '';
  return `
  <div class="card notedcard">
    <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} ${esc(logWhoName('me'))}</p>
    <p class="bodytext" style="margin-top:4px">${esc(n.text)}</p>
    ${n.run ? `<p class="tiny" style="margin-top:7px">${icon('star', 10, 'var(--sage)')} ${esc(n.run)}</p>` : ''}
  </div>`;
}

/* =================================================================
   MEMORIES

   Kept forever, on the profile they belong to, and nowhere else.
   ================================================================= */

function memories() {
  if (!Array.isArray(store.memories)) store.memories = [];
  return store.memories;
}

function memDraft() {
  if (!store.memDraft || typeof store.memDraft !== 'object') {
    store.memDraft = newMemory(store.memWho || 'me', 'words');
    store.memDraft.at = ciToday();
  }
  return store.memDraft;
}

function memOpen(who, kind) {
  store.memWho = who;
  store.memDraft = newMemory(who, kind || 'words');
  store.memDraft.at = ciToday();
  store.memOpen = true;
  store.memError = '';
  flushStore();
  render();
}

function memClose() {
  store.memDraft = null;
  store.memOpen = false;
  store.memError = '';
  store.memBusy = 0;
  flushStore();
  render();
}

function memSetKind(kind) {
  const d = memDraft();
  d.kind = kind;
  flushStore();
  render();
}

function memSetVisibility(vis) {
  const d = memDraft();
  if (!canBePublic(d.who)) return;
  d.visibility = vis;
  flushStore();
  render();
}

function memSave() {
  const d = memDraft();
  const text = String(d.text || '').trim();
  if (!text && !d.files.length) return;
  if (store.memBusy) return;
  const mem = Object.assign({}, d, {
    text: text,
    at: d.at || ciToday(),
    visibility: memoryVisibility(d),
  });
  memories().unshift(mem);
  store.memDraft = null;
  store.memOpen = false;
  store.memError = '';
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

function memDelete(id) {
  const mem = memories().filter((m) => m.id === id)[0];
  if (!mem) return;
  store.memories = memories().filter((m) => m.id !== id);
  if (!Array.isArray(store.deletedMemoryIds)) store.deletedMemoryIds = [];
  if (store.deletedMemoryIds.indexOf(id) === -1) store.deletedMemoryIds.push(id);
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
  /* The files go after the record, so the screen never waits on the
     network to show that something was removed. */
  deleteStoredFiles(mem.files);
}

function memSetVisibilityOn(id, vis) {
  const mem = memories().filter((m) => m.id === id)[0];
  if (!mem || !canBePublic(mem.who)) return;
  mem.visibility = vis;
  store.parentUpdatedAt = Date.now();
  flushStore();
  render();
}

/* Picking a file for a memory. Separate from the profile photo picker
   because this one accepts video and audio and does not crop. */
let memInput = null;

function ensureMemInput() {
  if (memInput && memInput.isConnected) return memInput;
  const el = document.createElement('input');
  el.type = 'file';
  el.id = 'rsgMemIn';
  el.style.position = 'fixed';
  el.style.left = '-9999px';
  el.setAttribute('aria-hidden', 'true');
  el.addEventListener('change', () => {
    const file = el.files && el.files[0];
    el.value = '';
    if (!file) return;
    memTakeFile(file);
  });
  document.body.appendChild(el);
  memInput = el;
  return el;
}

function memPick() {
  const d = memDraft();
  const k = memoryKind(d.kind);
  if (!k || !k.accept) return;
  if (d.files.length >= MEMORY_MAX_FILES) {
    store.memError = 'That is ' + MEMORY_MAX_FILES + ' already, which is the limit for one memory.';
    render();
    return;
  }
  const el = ensureMemInput();
  el.accept = k.accept;
  store.memError = '';
  try { el.click(); } catch (err) {
    store.memError = 'This browser would not open the picker.';
    render();
  }
}

async function memTakeFile(file) {
  const d = memDraft();
  const big = tooBigMessage(d.kind, file.size || 0);
  if (big) { store.memError = big; render(); return; }

  store.memBusy = 1;
  store.memError = '';
  render();

  try {
    const saved = await uploadFile(file, d.kind, (pct) => {
      store.memBusy = Math.max(1, pct);
      render();
    });
    const cur = memDraft();
    cur.files.push(saved);
    store.memBusy = 0;
    flushStore();
    render();
  } catch (err) {
    store.memBusy = 0;
    /* Said in words, with the file still in her hand rather than gone. */
    store.memError = 'That did not upload. ' + (navigator.onLine === false
      ? 'You are offline at the moment, so it is worth trying again when you are back.'
      : 'Worth trying again, and if it keeps failing tell me and I will look at it.');
    render();
  }
}

function memDropFile(i) {
  const d = memDraft();
  const gone = d.files.splice(Number(i), 1);
  flushStore();
  render();
  deleteStoredFiles(gone);
}

/* ---------- WHAT ONE LOOKS LIKE ---------- */

function memFileBlock(f, i, editing) {
  if (!f) return '';
  if (f.kind === 'video') {
    return `
    <span class="memfile">
      <video src="${esc(f.url)}" controls preload="metadata" playsinline></video>
      ${editing ? `<button class="postpic-x" data-memdrop="${i}" aria-label="Remove">${icon('plus', 14, '#fff')}</button>` : ''}
    </span>`;
  }
  if (f.kind === 'audio') {
    return `
    <span class="memfile audio">
      ${icon('mic', 18, 'var(--deep)')}
      <audio src="${esc(f.url)}" controls preload="metadata"></audio>
      ${editing ? `<button class="postpic-x" data-memdrop="${i}" aria-label="Remove">${icon('plus', 14, '#fff')}</button>` : ''}
    </span>`;
  }
  return `
  <span class="memfile">
    <img src="${esc(f.url)}" alt="" loading="lazy" />
    ${editing ? `<button class="postpic-x" data-memdrop="${i}" aria-label="Remove">${icon('plus', 14, '#fff')}</button>` : ''}
  </span>`;
}

function memCard(mem, opts) {
  const o = opts || {};
  const vis = memoryVisibility(mem);
  const mine = (mem.who || 'me') === 'me';
  return `
  <div class="card memcard">
    <div style="display:flex;align-items:center;gap:8px">
      <span class="grow">
        <span class="memdate">${esc(mem.at ? cycleDateLabelWithYear(mem.at) : 'No date')}</span>
        ${o.yearsAgo ? `<span class="tiny" style="display:block">${esc(yearsAgoLine(o.yearsAgo))}</span>` : ''}
      </span>
      ${mine ? `
      <span class="post-vis${vis === 'public' ? ' pub' : ''}">
        ${icon('shield', 11, 'var(--muted)')} Just me
      </span>` : `
      <span class="post-vis">${icon('shield', 11, 'var(--muted)')} Private</span>`}
    </div>

    ${mem.text ? `<p class="bodytext" style="margin-top:8px;white-space:pre-wrap">${esc(mem.text)}</p>` : ''}

    ${(mem.files || []).length ? `
    <div class="memfiles n${Math.min(4, mem.files.length)}">
      ${mem.files.map((f, i) => memFileBlock(f, i, false)).join('')}
    </div>` : ''}

    ${/* No share button, on hers or on a child's. Memories are a shelf
          you keep. Anything meant for other people is a post. */ ''}
    ${o.actions === false ? '' : `
    <div style="display:flex;gap:7px;margin-top:10px;flex-wrap:wrap">
      <button class="chip" data-memdel="${esc(mem.id)}">Delete</button>
    </div>`}
  </div>`;
}

/* ---------- THE COMPOSER ---------- */

function memComposer(who) {
  if (!store.memOpen || store.memWho !== who) {
    return `
    <button class="composer shut" data-memopen="${esc(who)}">
      ${icon('star', 17, 'var(--deep)')}
      <span class="composer-hint">Keep something${who === 'me' ? '' : ' about ' + esc(logWhoName(who))}</span>
      <span class="composer-cam">${icon('camera', 17, 'var(--deep)')}</span>
    </button>`;
  }

  const d = memDraft();
  const k = memoryKind(d.kind) || MEMORY_KINDS[3];
  const busy = store.memBusy;

  return `
  <div class="card composer">
    <div class="chips" style="margin-bottom:9px">
      ${MEMORY_KINDS.map((x) => `
        <button class="chip${d.kind === x.id ? ' on' : ''}" data-memkind="${esc(x.id)}"
          ${d.kind === x.id ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}
          >${icon(x.icon, 12, 'var(--deep)')} ${esc(x.label)}</button>`).join('')}
    </div>

    <textarea class="inp composer-in" id="memIn" data-memfield="text" rows="3"
      placeholder="${esc(d.kind === 'words'
        ? 'What did they say? Write it the way they said it.'
        : 'What is this, and what do you want to remember about it?')}">${esc(d.text || '')}</textarea>

    ${k.note ? `<p class="tiny" style="margin-top:7px">${esc(k.note)}</p>` : ''}

    ${d.files.length ? `
    <div class="memfiles draft n${Math.min(4, d.files.length)}">
      ${d.files.map((f, i) => memFileBlock(f, i, true)).join('')}
    </div>` : ''}

    ${busy ? `
    <div class="memup">
      <div class="bar"><i style="width:${Math.max(4, busy)}%"></i></div>
      <p class="tiny" style="margin-top:6px">Uploading, ${busy}%. It is safe to wait here.</p>
    </div>` : ''}

    ${store.memError ? `<p class="tiny" style="margin-top:8px;color:#A85A44">${esc(store.memError)}</p>` : ''}

    <div class="composer-bar">
      ${k.accept ? `
      <button class="chip" data-mempick="1" ${busy || d.files.length >= MEMORY_MAX_FILES ? 'disabled' : ''}>
        ${icon(k.icon, 13, 'var(--deep)')} Add ${esc(k.label.toLowerCase())}
      </button>` : ''}
      <span class="tiny" style="align-self:center">When did it happen</span>
    </div>
    <div style="margin-top:7px">${dateSelects('memory', d.at || ciToday(), 20, 0)}</div>

    <p class="tiny" style="margin-top:10px">${icon('shield', 10, 'var(--sage)')}
      ${esc(who === 'me' ? MEMORY_PRIVACY_MINE : MEMORY_PRIVACY_CHILD)}</p>

    <div style="display:flex;gap:8px;margin-top:11px;justify-content:flex-end;flex-wrap:wrap">
      <button class="chip" data-memclose="1">Cancel</button>
      <button class="btn" data-memsave="1" ${busy ? 'disabled' : ''}
        style="width:auto;flex:none;padding:10px 20px">Keep it</button>
    </div>
  </div>`;
}

/* ---------- THE SECTION ON A PROFILE ---------- */

function memSection(who) {
  const list = memoriesFor(memories(), who);
  const show = store.memAll === who ? list : list.slice(0, 4);

  return `
  <p class="sect">Memories</p>
  ${memComposer(who)}
  ${show.map((m) => memCard(m)).join('')}
  ${list.length > 4 ? `
  <button class="btn ghost sm" style="width:100%" data-memall="${esc(store.memAll === who ? '' : who)}">
    ${store.memAll === who ? 'Show fewer' : 'All ' + list.length + ', by year'}
  </button>` : ''}
  ${!list.length ? `
  <p class="tiny" style="margin-top:2px">${esc(who === 'me' ? MEMORY_PRIVACY_MINE : MEMORY_EMPTY_CHILD)}</p>` : `
  <p class="tiny" style="margin-top:2px">${esc(MEMORY_KEEP_NOTE)}</p>`}`;
}

/* ---------- A YEAR AGO TODAY, ON HOME ---------- */

function memOnThisDay() {
  const hits = onThisDay(memories(), ciToday());
  if (!hits.length) return '';
  if (store.memDayHidden === ciToday()) return '';
  const m = hits[0];
  const whoName = (m.who || 'me') === 'me' ? '' : logWhoName(m.who);

  return `
  <div class="card memday">
    <div style="display:flex;align-items:center;gap:8px">
      <span class="grow">
        <span class="eyebrow">${icon('star', 11, 'var(--sage)')} ${esc(yearsAgoLine(m.yearsAgo))}</span>
        ${whoName ? `<span class="tiny" style="display:block;margin-top:2px">${esc(whoName)}</span>` : ''}
      </span>
      <button class="chip" data-memhide="1" aria-label="Hide for today"
        style="min-height:28px;padding:4px 10px">Not now</button>
    </div>
    ${m.text ? `<p class="bodytext" style="margin-top:8px;white-space:pre-wrap">${esc(m.text)}</p>` : ''}
    ${(m.files || []).length ? `
    <div class="memfiles n1">${memFileBlock(m.files[0], 0, false)}</div>` : ''}
    ${hits.length > 1 ? `
    <p class="tiny" style="margin-top:8px">${hits.length - 1} more from this day.</p>` : ''}
  </div>`;
}

/* =================================================================
   WILLOW WALKING SOMEBODY IN THE DOOR

   She asked for this directly: Willow should pop up once people sign
   up and help walk them through setting up their profile, and explain
   what the app does and what it is useful for.

   The problem it solves is that a brand new account lands on a Home
   screen full of empty cards asking for things, and an empty app looks
   like homework. The same four answers, asked by Willow one at a time,
   feel like being shown around instead.

   IT ONLY EVER OPENS ON A DELIBERATE FLAG.
   Not on "this account looks empty". Somebody signing in on a second
   device has an empty account for the two seconds before the cloud
   answers, and asking them to set up everything they already have
   would be the worst possible first impression of a sync feature.
   So doSignUp sets the flag, and choosing to look around sets the
   flag, and nothing else does.
   ================================================================= */

function onboard() {
  if (!store.onboard || typeof store.onboard !== 'object') {
    store.onboard = { open: false, done: false, step: 'hello', line: '', lineFrom: '' };
  }
  const ob = store.onboard;
  if (ONBOARD_STEPS.indexOf(ob.step) === -1) ob.step = 'hello';
  return ob;
}

/* Called from the two places somebody genuinely arrives for the first
   time, and from the button in Settings for anybody who wants it again. */
function onboardStart() {
  store.onboard = { open: true, done: false, step: 'hello', line: '', lineFrom: '' };
  flushStore();
}

function onboardGo(step) {
  const ob = onboard();
  if (!step) return;
  ob.step = step;
  /* The closing line is written the moment that step is reached, so it
     has something specific to say about what they just told us. */
  if (step === 'ready') onboardLine();
  flushStore();
  render();
}

function onboardFinish() {
  const ob = onboard();
  ob.open = false;
  ob.done = true;
  store.parentUpdatedAt = Date.now();
  state.view = null;
  state.tab = 'home';
  flushStore();
  render();
}

/* Skipping and finishing land in the same place on purpose. Somebody
   who taps out on step two has still made an account, and dropping
   them somewhere different would read as a punishment. */
function onboardSkip() {
  onboardFinish();
}

/* THE CLOSING LINE. Written first, Willow's if she answers, and the
   written one stays on screen the whole time. Exactly the pattern in
   liftAffirmation, and for the same reason: the app must never show a
   blank space where the kind thing was meant to be. */
function onboardLine() {
  const ob = onboard();
  const kid = onboardFirstChild();
  const sum = kid && kid.birthday ? getAgeSummary({ name: kid.name, birthday: kid.birthday }) : null;
  const ctxLine = {
    parentName: (store.parent.name || '').trim().split(/\s+/)[0] || '',
    childName: kid ? (kid.name || '') : '',
    childAge: sum && sum.shortLabel ? sum.shortLabel : '',
  };
  if (!ob.line) {
    ob.line = onboardClosing(ctxLine);
    ob.lineFrom = 'written';
  }
  const stageLabels = {};
  PARENT_STAGES.forEach((st) => { stageLabels[st.id] = st.label; });
  const roleLabels = {};
  PARENT_ROLES.forEach((r) => { roleLabels[r.id] = r.label; });
  liftWrite('onboard', Object.assign({}, ctxLine, {
    situation: onboardSituationLine(situation(), stageLabels, roleLabels),
  }), (text) => {
    const cur = onboard();
    /* A long answer is a sign the model ignored the brief, and a wall
       of text on the last screen would undo the whole tone. */
    if (text.length > 260) return;
    cur.line = text;
    cur.lineFrom = 'willow';
  });
  return ob.line;
}

/* The child this walkthrough is about, which is the one they just
   added if they added one. */
function onboardFirstChild() {
  const real = store.children.filter((k) => !isExampleChild(k));
  return real.length ? real[real.length - 1] : null;
}

function onboardDots(step) {
  const here = onboardIndex(step);
  return `
  <div class="obdots" aria-hidden="true">
    ${ONBOARD_STEPS.map((_, i) =>
      `<span class="obdot${i === here ? ' on' : ''}${i < here ? ' done' : ''}"></span>`).join('')}
  </div>`;
}

/* Willow saying something, drawn the same way her chat bubbles are so
   she reads as the same person here as she does in the corner. */
function onboardSays(text) {
  return `
  <div class="obsay">
    <span class="obsay-face">${icon('leaf', 15, '#fff')}</span>
    <div class="obsay-body">
      ${String(text).split('\n\n').map((p) => `<p>${esc(p)}</p>`).join('')}
    </div>
  </div>`;
}

function screenOnboard() {
  const ob = onboard();
  const step = ob.step;
  const next = onboardNext(step);
  const back = onboardBack(step);

  let body = '';

  if (step === 'hello') {
    body = `
    ${onboardSays(ONBOARD_HELLO)}
    <div class="card" style="margin-top:12px">
      ${ONBOARD_WHAT.map((w, i) => `
      <div class="obwhat${i ? ' sep' : ''}">
        <span class="obwhat-ic">${icon(w.icon, 15, 'var(--sage)')}</span>
        <span class="grow">
          <span class="obwhat-t">${esc(w.title)}</span>
          <span class="obwhat-b">${esc(w.body)}</span>
        </span>
      </div>`).join('')}
    </div>`;
  }

  if (step === 'you') {
    body = `
    ${onboardSays(ONBOARD_LINES.you)}
    <div class="card" style="margin-top:12px">
      <p class="eyebrow">Your name</p>
      <input class="inp" type="text" id="obName" data-obfield="name"
        value="${esc(store.parent.name || '')}" placeholder="Your first name"
        autocomplete="given-name" style="margin-top:8px;width:100%" />
      <p class="eyebrow" style="margin-top:14px">A username</p>
      <input class="inp" type="text" id="obUser" data-obfield="username"
        value="${esc(store.parent.username || '')}" placeholder="Optional"
        autocomplete="off" style="margin-top:8px;width:100%" />
      <p class="tiny" style="margin-top:9px">${esc(ONBOARD_NAME_NOTE)}</p>
    </div>`;
  }

  if (step === 'where') {
    const sit = situation();
    body = `
    ${onboardSays(ONBOARD_LINES.where)}
    <div class="card" style="margin-top:12px">
      ${PARENT_STAGES.map((st) => tickRow(hasStage(sit, st.id), st.label, st.help,
        `data-sit="stages" data-id="${esc(st.id)}"`)).join('')}
    </div>
    <p class="sect" style="margin-top:14px">How you parent</p>
    <div class="card">
      ${PARENT_ROLES.map((r) => tickRow((sit.roles || []).indexOf(r.id) !== -1, r.label, '',
        `data-sit="roles" data-id="${esc(r.id)}"`)).join('')}
    </div>
    <div style="margin-top:14px">${caretakerBlock()}</div>
    <p class="tiny" style="margin-top:10px">${esc(SITUATION_PRIVACY)}</p>`;
  }

  if (step === 'child') {
    const kid = onboardFirstChild();
    body = `
    ${onboardSays(ONBOARD_LINES.child)}
    ${kid ? `
    <div class="card" style="margin-top:12px">
      <p class="eyebrow">${icon('check', 11, 'var(--sage)')} Added</p>
      <p style="font-size:17px;color:var(--ink);margin:6px 0 0">${esc(kid.name || 'Your child')}</p>
      ${kid.birthday ? `<p class="tiny" style="margin-top:4px">
        That makes them ${esc((getAgeSummary({ name: kid.name, birthday: kid.birthday }) || {}).label || '')}.
      </p>` : ''}
    </div>
    <p class="sect" style="margin-top:14px">How they came to you</p>
    <p class="tiny" style="margin:-4px 0 10px">${esc(CHILD_ARRIVAL_NOTE)}</p>
    <div class="card">
      ${CHILD_ARRIVAL.map((a) => tickRow((kid.arrival || []).indexOf(a.id) !== -1, a.label, '',
        `data-arrival="${esc(a.id)}" data-arrivalfor="${esc(kid.id)}"`)).join('')}
    </div>` : `
    <div class="card" style="margin-top:12px">
      <p class="eyebrow">Their name</p>
      <input class="inp" type="text" id="obKid" data-obfield="child"
        value="${esc(store.draftChildName || '')}" placeholder="Their name or nickname"
        autocomplete="off" style="margin-top:8px;width:100%" />
      <p class="eyebrow" style="margin-top:14px">Their birthday</p>
      <div style="margin-top:7px">${dateSelects('draft', store.draftChildBday || '', 25, 1)}</div>
      <p class="tiny" style="margin-top:9px">${esc(ONBOARD_CHILD_NOTE)}</p>
      <button class="btn" data-ob="addchild" style="margin-top:14px;width:100%"
        ${(store.draftChildName || '').trim() || store.draftChildBday ? '' : 'disabled'}>Add them</button>
    </div>
    <p class="tiny" style="margin-top:10px">${esc(ONBOARD_CHILD_SKIP)}</p>`}`;
  }

  if (step === 'ready') {
    body = `
    ${onboardSays(onboardLine())}
    <p class="sect" style="margin-top:14px">Three things worth doing first</p>
    <div class="card">
      ${ONBOARD_FIRST_THINGS.map((f, i) => `
      <div class="obwhat${i ? ' sep' : ''}">
        <span class="obwhat-ic">${icon('leaf', 14, 'var(--sage)')}</span>
        <span class="grow">
          <span class="obwhat-t">${esc(f.label)}</span>
          <span class="obwhat-b">${esc(f.body)}</span>
        </span>
      </div>`).join('')}
    </div>
    <div class="card leafy" style="margin-top:12px">
      <p class="bodytext">Ready Set Grow is educational information, not medical advice. It cannot
      examine your child. Your pediatrician can, and they want you to call.</p>
    </div>`;
  }

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <div class="obtop">
      ${back ? `<button class="back" data-ob="back">${icon('back', 15, 'var(--deep)')} Back</button>`
        : '<span></span>'}
      <button class="chip" data-ob="skip">${esc(ONBOARD_SKIP)}</button>
    </div>
    ${onboardDots(step)}
    <h1 class="title" style="margin-top:8px">${esc(ONBOARD_TITLES[step] || '')}</h1>
  </div>
  <div class="sc">
    ${body}
    ${next ? `
    <button class="btn" data-ob="next" style="margin-top:16px;width:100%">
      ${step === 'hello' ? 'Show me' : 'Next'} ${icon('chev', 15, '#fff')}
    </button>` : `
    <button class="btn" data-ob="done" style="margin-top:16px;width:100%">
      Take me in ${icon('chev', 15, '#fff')}
    </button>`}
    ${step === 'hello' ? '' : `
    <p class="tiny" style="text-align:center;margin-top:10px">${esc(ONBOARD_SKIP_NOTE)}</p>`}
  </div>`;
}

/* =================================================================
   LOOKING BACK

   Logging is only half of it. She said she could log things and then
   not see where they went, which is fair: her own logs lived behind a
   button on Home and the Logs tab only ever showed a child.

   So Logs now covers everybody in the house. Pick a person, pick a
   day off the calendar, and see what that day held. Numbers that
   repeat, such as weight or blood pressure, get a line showing where
   they have moved rather than a list she has to read backwards.
   ================================================================= */

/* Whose logs are on screen. Follows whoever's profile she was last on,
   so opening Logs from a child shows that child. */
function logWho() {
  const w = store.logWho || store.profileWho || 'me';
  if (w === 'me') return 'me';
  return store.children.some((k) => k.id === w) ? w : 'me';
}

function logsOf(who) {
  if (who === 'me') return momLogs();
  const k = store.children.filter((x) => x.id === who)[0];
  if (!k) return [];
  if (!Array.isArray(k.logs)) k.logs = [];
  return k.logs;
}

function logTypesOf(who) {
  if (who === 'me') return getMomLogTypes(momLogShape());
  const k = store.children.filter((x) => x.id === who)[0];
  if (!k) return [];
  const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
  const months = sum && sum.age ? sum.age.totalMonths : null;
  return months == null ? [] : getLogTypesForAge(months);
}

function logWhoName(who) {
  if (who === 'me') return (store.parent.name || 'You').split(/\s+/)[0];
  const k = store.children.filter((x) => x.id === who)[0];
  return k ? (k.name || 'Unnamed').split(/\s+/)[0] : 'You';
}

/* ---------- THE CALENDAR ---------- */

function logDayKey(l) {
  return String(l.at).slice(0, 10);
}

function logCalendar(who, monthOffset) {
  const logs = logsOf(who);
  const counts = {};
  logs.forEach((l) => {
    const d = logDayKey(l);
    counts[d] = (counts[d] || 0) + 1;
  });

  const today = ciToday();
  const parts = today.split('-');
  const base = new Date(Number(parts[0]), Number(parts[1]) - 1 + (monthOffset || 0), 1);
  const y = base.getFullYear();
  const m = base.getMonth();
  const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'][m];
  const key = (d) => y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
  const days = new Date(y, m + 1, 0).getDate();
  const lead = new Date(y, m, 1).getDay();
  const picked = store.logDay || today;

  const cells = [];
  for (let i = 0; i < lead; i++) cells.push('<span class="cal-pad"></span>');
  for (let d = 1; d <= days; d++) {
    const k = key(d);
    const n = counts[k] || 0;
    /* Three weights rather than a number in every square, so a month
       reads as a shape at a glance and a busy day still stands out. */
    const band = n === 0 ? '' : n < 3 ? ' has1' : n < 7 ? ' has2' : ' has3';
    cells.push(`<button class="cal-d${band}${k === today ? ' today' : ''}${k === picked ? ' picked' : ''}"
      data-logday="${esc(k)}" aria-label="${esc(cycleDateLabelWithYear(k))}, ${n} logged"
      aria-pressed="${k === picked}">${d}</button>`);
  }

  return `
  <div class="calwrap">
    <div class="calhead">
      <button class="calnav" data-logcal="-1" aria-label="Previous month">${icon('back', 14, 'var(--deep)')}</button>
      <span class="calmonth">${esc(monthName)} ${y}</span>
      <button class="calnav" data-logcal="1" aria-label="Next month">${icon('chev', 14, 'var(--deep)')}</button>
    </div>
    <div class="calgrid">
      ${['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => `<span class="cal-w">${d}</span>`).join('')}
      ${cells.join('')}
    </div>
    <div class="callegend">
      <span><i class="k-has1"></i> A little</span>
      <span><i class="k-has2"></i> A fair bit</span>
      <span><i class="k-has3"></i> A lot</span>
    </div>
  </div>`;
}

/* ---------- ONE DAY ---------- */

function logDayCard(who) {
  const day = store.logDay || ciToday();
  const rows = logsOf(who).filter((l) => logDayKey(l) === day);
  const isToday = day === ciToday();

  return `
  <div class="card">
    <p class="eyebrow">${icon('calendar', 11, 'var(--sage)')}
      ${isToday ? 'Today' : esc(cycleDateLabelWithYear(day))}</p>
    ${rows.length ? `
      <p style="font-size:14px;font-weight:600;color:var(--ink);margin:4px 0 9px">
        ${esc(rows.length + ' thing' + (rows.length === 1 ? '' : 's') + ' logged')}
      </p>
      ${rows.map((l) => {
        const t = anyLogType(l.typeId);
        return `
        <div class="dayrow">
          <span class="dayrow-t">${esc(clockOf(l.at))}</span>
          <span class="grow">
            <span class="dayrow-l">${esc(t ? t.label : 'Log')}</span>
            ${summarizeLog(l, t) ? `<span class="tiny" style="display:block">${esc(summarizeLog(l, t))}</span>` : ''}
            ${l.values && l.values.notes ? `<span class="tiny" style="display:block;margin-top:2px">${esc(l.values.notes)}</span>` : ''}
          </span>
          ${who === 'me' ? `<button class="chip" data-delmomlog="${esc(l.id)}"
            style="min-height:28px;padding:4px 9px">Remove</button>` : ''}
        </div>`;
      }).join('')}
    ` : `
      <p class="bodytext" style="margin-top:4px">
        ${isToday ? 'Nothing logged yet today.' : 'Nothing was logged that day.'}
      </p>`}
  </div>`;
}

/* ---------- WHERE A NUMBER HAS MOVED ----------

   Only for the logs that record the same number over and over, and
   only once there are two of them. It says what the numbers are and
   how they have moved. It does not say whether that is good. */

const LOG_TRENDS = [
  { typeId: 'mom-weight', field: 'weight', label: 'Weight', unit: 'lb' },
  { typeId: 'mom-bp', field: 'systolic', label: 'Blood pressure', unit: '',
    pair: 'diastolic', join: ' over ' },
  { typeId: 'mom-sleep', field: 'hours', label: 'Your sleep', unit: 'hrs' },
  { typeId: 'mom-sugar', field: 'reading', label: 'Blood sugar', unit: 'mg/dL' },
];

function trendRows(who, spec) {
  return logsOf(who)
    .filter((l) => l.typeId === spec.typeId)
    .map((l) => ({
      at: l.at,
      n: Number((l.values || {})[spec.field]),
      pair: spec.pair ? (l.values || {})[spec.pair] : null,
    }))
    .filter((r) => isFinite(r.n))
    .slice(0, 30);
}

/* A plain line, drawn from the points themselves so it needs no
   library and no axis nobody reads. */
function sparkline(values) {
  if (values.length < 2) return '';
  const w = 240;
  const h = 44;
  const min = Math.min.apply(null, values);
  const max = Math.max.apply(null, values);
  const span = max - min || 1;
  const step = w / (values.length - 1);
  const pts = values.map((v, i) => {
    const x = i * step;
    const y = h - 4 - ((v - min) / span) * (h - 10);
    return x.toFixed(1) + ',' + y.toFixed(1);
  });
  return `
  <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" class="spark" aria-hidden="true">
    <polyline points="${pts.join(' ')}" fill="none" stroke="var(--leaf)" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="${(values.length - 1) * step}" cy="${(h - 4 - ((values[values.length - 1] - min) / span) * (h - 10)).toFixed(1)}"
      r="3.5" fill="var(--deep)" />
  </svg>`;
}

function trendCard(who, spec) {
  const rows = trendRows(who, spec);
  if (rows.length < 2) return '';
  /* Oldest first for the drawing, newest first is how they are stored. */
  const chron = rows.slice().reverse();
  const newest = rows[0];
  const oldest = rows[rows.length - 1];
  const diff = newest.n - oldest.n;
  const moved = Math.abs(Math.round(diff * 10) / 10);
  const dir = diff === 0 ? 'the same as' : diff > 0 ? 'up ' + moved + ' from' : 'down ' + moved + ' from';

  const show = (r) => (spec.pair && r.pair ? r.n + spec.join + r.pair : r.n + (spec.unit ? ' ' + spec.unit : ''));

  return `
  <div class="card">
    <p class="eyebrow">${icon('chart', 11, 'var(--sage)')} ${esc(spec.label)}</p>
    <p class="liftline" style="font-size:19px;margin-top:3px">${esc(show(newest))}</p>
    <p class="tiny" style="margin-top:2px">
      ${esc(cycleDateLabel(logDayKey({ at: newest.at })))}, and ${esc(dir)}
      ${esc(show(oldest))} on ${esc(cycleDateLabel(logDayKey({ at: oldest.at })))}.
      ${rows.length} recorded.
    </p>
    ${sparkline(chron.map((r) => r.n))}
  </div>`;
}

function trendsFor(who) {
  if (who !== 'me') return '';
  const cards = LOG_TRENDS.map((sp) => trendCard(who, sp)).filter(Boolean).join('');
  if (!cards) return '';
  return `<p class="sect">How it has moved</p>${cards}`;
}

/* ---------- THE PEOPLE STRIP ---------- */

function logWhoStrip(who) {
  const people = [{ id: 'me', name: logWhoName('me') }]
    .concat(store.children.filter((k) => !isExampleChild(k)).map((k) => ({ id: k.id, name: logWhoName(k.id) })));
  if (people.length < 2) return '';
  return `
  <div class="chips" style="margin-bottom:10px">
    ${people.map((p) => `
      <button class="chip${who === p.id ? ' on' : ''}" data-logwho="${esc(p.id)}"
        ${who === p.id ? 'style="background:var(--leaf2);border-color:var(--leaf);color:var(--deep)"' : ''}
        >${esc(p.name)}</button>`).join('')}
  </div>`;
}

/* The Logs tab. Everybody in the house, a month at a time. */
/* THE LOGS SCREEN WEARS TWO HATS.

   As the TAB it is the whole house: a strip along the top to pick who,
   and no Back, because a tab is a place rather than a step.

   Opened from a child's profile it is THAT CHILD'S log page: their name
   at the top, a Back button to their profile, and no person strip,
   because she did not come here to browse everybody.

   She hit the difference the hard way. "Everything logged for Stetson"
   used to jump to the tab, which dropped the back stack and left the
   bottom bar as the only way out, so pressing anything sent her Home. */
function screenLogsHub(c, opts) {
  const o = opts || {};
  const page = !!o.page;
  const who = logWho();
  const types = logTypesOf(who);
  const name = logWhoName(who);
  const mine = who === 'me';

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    ${page ? `<button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>` : ''}
    <h1 class="title"${page ? ' style="margin-top:6px"' : ''}>${page && !mine ? esc(name) + "'s logs" : 'Logs'}</h1>
    <p class="sub">${mine
      ? 'Everything you have put down, and where the numbers have moved.'
      : 'What you have tracked for ' + esc(name) + ', and the version you can hand your pediatrician.'}</p>
  </div>
  <div class="sc">

    ${notedCard()}

    ${page ? '' : logWhoStrip(who)}

    <p class="sect">Log something</p>
    ${types.length ? `
    <div class="qgrid">
      ${types.map((t) => `
        <button class="q" data-go="log" data-id="${esc(t.id)}">
          <span class="qi">${icon(logIcon(t.icon), 17)}</span>
          <span class="qt">${esc(t.label)}</span>
          ${mine ? '' : `<span class="qs">${esc(lastLogLine(t.id))}</span>`}
        </button>`).join('')}
    </div>` : `
    <p class="tiny" style="text-align:center;padding:8px 0">
      ${mine ? 'Tell Settings where you are and the right logs appear.'
        : 'Add a birthday and the right logs appear for that age.'}
    </p>`}

    <p class="sect">Look back</p>
    ${logCalendar(who, store.logCal || 0)}
    ${logDayCard(who)}

    ${trendsFor(who)}

    ${mine ? `
    <p class="sect">For your provider</p>
    <div class="card">
      <p class="bodytext">A plain list of everything above with dates and times, as a text file you can
      print, email, or read off your phone in the room. A blood pressure trend or a record of bleeding
      is exactly what gets asked for and never remembered.</p>
      <button class="btn ghost sm" style="width:100%;margin-top:11px" data-momexport="1">
        ${icon('export', 14, 'var(--deep)')} Save it as a file
      </button>
    </div>
    <p class="tiny" style="margin-top:10px">${icon('shield', 10, 'var(--sage)')} ${esc(MOM_LOG_NOTE)}</p>
    ` : `
    ${childLogs().length ? `
    <p class="sect">For your pediatrician</p>
    <div class="card">
      <p class="bodytext">A plain list with dates and times, as a text file you can print or email.</p>
      <button class="btn ghost sm" style="width:100%;margin-top:11px" data-export="logs">
        ${icon('export', 14, 'var(--deep)')} Save it as a file
      </button>
    </div>` : ''}`}
  </div>`;
}

function screenLogs(c) {
  if (c.months == null) return emptyScreen('Add a birthday and the right logs appear for that age.');
  /* Grouped by the data file, then flattened into one grid. The group
     headings were taller than the buttons under them, and "Meals" under
     a heading that says "Feeding" tells nobody anything. */
  const types = getLogGroupsForAge(c.months).reduce((all, g) => all.concat(g.items), []);
  const logs = childLogs();

  const days = [];
  logs.slice(0, 60).forEach((l) => {
    const d = dayOf(l.at);
    const bucket = days.filter((x) => x.day === d)[0];
    if (bucket) bucket.items.push(l); else days.push({ day: d, items: [l] });
  });

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <h1 class="title">Logs</h1>
    <p class="sub">What you have tracked for ${esc(state.name || 'this child')}, and the version you can hand your pediatrician.</p>
  </div>
  <div class="sc">

    <p class="sect">Log something</p>
    <p class="tiny" style="margin:-4px 0 10px">
      Only what makes sense at ${esc(c.summary.label || 'this age')}. The list changes as they grow.
    </p>
    <div class="qgrid">
      ${types.map((t) => `
        <button class="q" data-go="log" data-id="${esc(t.id)}">
          <span class="qi">${icon(logIcon(t.icon), 17)}</span>
          <span class="qt">${esc(t.label)}</span>
          <span class="qs">${esc(lastLogLine(t.id))}</span>
        </button>`).join('')}
    </div>

    <p class="sect">History</p>
    ${logs.length ? days.map((d) => `
      <p class="eyebrow" style="margin:14px 0 7px">${esc(d.day)}</p>
      ${d.items.map((l) => {
        const t = getLogType(l.typeId);
        return `
        <div class="lrow" style="align-items:flex-start">
          <span class="licon">${icon(logIcon(t ? t.icon : 'note'), 17)}</span>
          <span class="grow">
            <span style="display:block;font-size:13.5px;font-weight:600;color:var(--ink)">${esc(t ? t.label : 'Log')}</span>
            <span class="tiny" style="display:block;margin-top:2px">${esc(clockOf(l.at))}${summarizeLog(l) ? ' &middot; ' + esc(summarizeLog(l)) : ''}</span>
            ${l.values && l.values.notes ? `<span class="tiny" style="display:block;margin-top:3px">${esc(l.values.notes)}</span>` : ''}
          </span>
          <button class="chip" data-dellog="${esc(l.id)}" style="min-height:30px;padding:5px 10px">Remove</button>
        </div>`;
      }).join('')}`).join('') : `
      <p class="tiny" style="text-align:center;padding:6px 0">Nothing logged yet.</p>`}

    ${logs.length ? `
    <p class="sect">For your pediatrician</p>
    <div class="card">
      <p class="bodytext">A plain list of everything above, with dates and times, as a text file you can
      print, email or read off your phone in the room. It never leaves your device until you send it.</p>
      <button class="btn" style="margin-top:12px" data-export="logs">
        ${icon('note', 15, '#fff')} Save the summary
      </button>
    </div>` : ''}
    <p class="disclaimer">${esc(CONTENT_DISCLAIMER)}</p>
  </div>`;
}

function viewLog(c, typeId) {
  const t = anyLogType(typeId);
  if (!t) return emptyScreen('That log could not be found.');
  const mine = isMomLog(typeId);
  const d = state.logDraft && state.logDraft.typeId === typeId ? state.logDraft : { typeId: typeId, values: {} };
  const v = d.values || {};
  const med = typeId === 'medication' ? medDueLine(v.name || '')
    : typeId === 'mom-medication' ? momMedLine(v.name || '') : null;
  const last = mine && t.tracksAlternating ? lastSide(typeId) : null;

  const field = (f) => {
    const id = 'lf_' + esc(f.id);
    const val = v[f.id];
    if (f.type === 'choice') {
      return `
      <div class="card flat" style="margin-bottom:8px">
        <p class="eyebrow">${esc(f.label)}${f.required ? '' : ' <span style="opacity:.6">optional</span>'}</p>
        <div class="chips" style="margin-top:8px">
          ${f.options.map((o) => `
            <button class="chip" data-logset="${esc(f.id)}" data-val="${esc(o)}"
              aria-pressed="${val === o}">${esc(o)}</button>`).join('')}
        </div>
        ${f.hint ? `<p class="tiny" style="margin-top:8px">${esc(f.hint)}</p>` : ''}
      </div>`;
    }
    if (f.type === 'multi') {
      const arr = Array.isArray(val) ? val : [];
      return `
      <div class="card flat" style="margin-bottom:8px">
        <p class="eyebrow">${esc(f.label)}</p>
        <div class="chips" style="margin-top:8px">
          ${f.options.map((o) => `
            <button class="chip" data-logmulti="${esc(f.id)}" data-val="${esc(o)}"
              aria-pressed="${arr.indexOf(o) !== -1}">${esc(o)}</button>`).join('')}
        </div>
        ${f.hint ? `<p class="tiny" style="margin-top:8px">${esc(f.hint)}</p>` : ''}
      </div>`;
    }
    if (f.type === 'toggle') {
      return `
      <div class="card flat" style="margin-bottom:8px">
        <p class="eyebrow">${esc(f.label)}</p>
        <div class="chips" style="margin-top:8px">
          <button class="chip" data-logset="${esc(f.id)}" data-val="Yes" aria-pressed="${val === 'Yes'}">Yes</button>
          <button class="chip" data-logset="${esc(f.id)}" data-val="No" aria-pressed="${val === 'No'}">No</button>
        </div>
      </div>`;
    }
    /* A duration asks for hours AND minutes. It used to be one box in
       minutes, which is fine for a feed and ridiculous for a night's
       sleep: nobody wants to type 600. Stored as total minutes either
       way, so everything that reads it back is untouched. */
    if (f.type === 'duration') {
      const total = Number(val) || 0;
      const hrs = Math.floor(total / 60);
      const mins = total % 60;
      return `
      <div class="card flat" style="margin-bottom:8px">
        <p class="eyebrow">${esc(f.label)}</p>
        <div class="durrow">
          <span class="durbit">
            <input class="inp" type="number" min="0" inputmode="numeric"
              data-durfield="${esc(f.id)}" data-durpart="h"
              value="${total ? hrs : ''}" placeholder="0" />
            <span class="tiny">hours</span>
          </span>
          <span class="durbit">
            <input class="inp" type="number" min="0" max="59" inputmode="numeric"
              data-durfield="${esc(f.id)}" data-durpart="m"
              value="${total ? mins : ''}" placeholder="0" />
            <span class="tiny">minutes</span>
          </span>
        </div>
        ${f.hint ? `<p class="tiny" style="margin-top:8px">${esc(f.hint)}</p>` : ''}
      </div>`;
    }
    const inputType = f.type === 'number' ? 'number' : f.type === 'time' ? 'time' : 'text';
    return `
    <div class="card flat" style="margin-bottom:8px">
      <p class="eyebrow">${esc(f.label)}${f.unit ? ' <span style="opacity:.6">' + esc(f.unit) + '</span>' : ''}${f.type === 'duration' ? ' <span style="opacity:.6">minutes</span>' : ''}</p>
      <input class="inp" id="${id}" type="${inputType}" data-logfield="${esc(f.id)}"
        value="${esc(val == null ? '' : val)}" autocomplete="off"
        placeholder="${esc(f.placeholder || '')}" style="margin-top:7px;width:100%" />
      ${f.hint ? `<p class="tiny" style="margin-top:6px">${esc(f.hint)}</p>` : ''}
    </div>`;
  };

  return `
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <p class="eyebrow" style="margin-top:6px">${mine ? 'For you' : 'New log'}</p>
    <h1 class="title sm">${esc(t.label)}</h1>
  </div>
  <div class="sc">

    ${last ? `
    <div class="card" style="border-left:3px solid var(--sage)">
      <p class="eyebrow">${icon('clock', 11, 'var(--sage)')} Last time</p>
      <p class="bodytext" style="margin-top:5px">
        <strong style="color:var(--ink)">${esc(last.side)}</strong>, at ${esc(clockOf(last.at))}.
        ${last.side === 'Left' ? 'So this one is the right.'
          : last.side === 'Right' ? 'So this one is the left.' : ''}
      </p>
    </div>` : ''}

    ${med ? `
    <div class="card" style="border-left:3px solid ${med.due === false ? 'var(--attention)' : 'var(--sage)'}">
      <p class="eyebrow">${esc(med.label || 'Medication')} timing</p>
      <p class="bodytext" style="margin-top:5px">${esc(med.text)}</p>
      <p class="tiny" style="margin-top:8px">${esc(med.note)}</p>
    </div>` : ''}

    ${typeId === 'medication' ? `
    <div class="card flat">
      <p class="bodytext">This tracks <strong>when</strong>, never how much. Dose is by your child's weight
      and comes from your pediatrician or the label on the bottle.</p>
    </div>` : ''}

    ${t.fields.map(field).join('')}

    <button class="btn" style="margin-top:6px" data-logsave="${esc(typeId)}">
      Save this log
    </button>
    <p class="tiny" style="text-align:center;margin-top:9px">
      ${mine
        ? esc(MOM_LOG_NOTE)
        : 'Saved with the time right now. It stays on this device, under ' + esc(state.name || 'this child') + '.'}
    </p>
  </div>`;
}

/* -----------------------------------------------------------------
   ME

   The parent's own tab. Everything here used to vanish the moment a
   child was opened, which meant the person the app is actually for
   had nowhere of their own. Now it is a tab, and it is always there.
   ----------------------------------------------------------------- */


/* The pediatrician summary. Plain text on purpose, because the thing
   a parent needs in the room is something they can read aloud. */
function exportLogs() {
  const k = activeChild();
  if (!k) return;
  const logs = childLogs();
  if (!logs.length) return;
  const sum = getAgeSummary({ name: k.name, birthday: k.birthday });
  const lines = [];
  lines.push('READY SET GROW, log summary');
  lines.push(k.name || 'Child');
  if (sum && sum.label) lines.push('Age: ' + sum.label);
  lines.push('Printed: ' + new Date().toLocaleString());
  lines.push('');
  lines.push('This is a parent kept record. It is not a medical record and');
  lines.push('nothing in it was reviewed by a clinician.');
  lines.push('');
  let day = null;
  logs.slice().forEach((l) => {
    const d = dayOf(l.at);
    if (d !== day) { day = d; lines.push(''); lines.push(day.toUpperCase()); }
    const t = getLogType(l.typeId);
    let line = '  ' + clockOf(l.at) + '  ' + (t ? t.label : 'Log');
    const s = summarizeLog(l);
    if (s && t && s !== t.label) line += ' - ' + s;
    lines.push(line);
    if (l.values && l.values.notes) lines.push('        note: ' + l.values.notes);
  });
  const text = lines.join('\n');
  try {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (k.name || 'child').replace(/[^\w-]+/g, '-').toLowerCase() + '-logs.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  } catch (err) {
    // A blocked download is not worth taking the screen down for.
  }
}



/* =================================================================
   THE NEWBORN RHYTHM

   Written for somebody reading it one handed at 3am with a baby on
   them. Short lines, the diaper count first because that is the thing
   she can actually see, and the ounces after.

   The diaper table is not just a table. It counts what has already been
   logged today against what the age expects, which turns a reference
   chart into an answer. That is the whole reason the diaper log and
   this screen belong to each other.
   ================================================================= */

/* Today's diapers, read back out of the log for the open child. */
function diapersToday() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const t = start.getTime();
  let wet = 0, dirty = 0;
  childLogs().forEach((l) => {
    if (l.typeId !== 'diapers') return;
    if (new Date(l.at).getTime() < t) return;
    const kind = l.values && l.values.kind;
    if (kind === 'Wet' || kind === 'Both') wet++;
    if (kind === 'Dirty' || kind === 'Both') dirty++;
  });
  return { wet, dirty, logged: wet + dirty };
}

function newbornCounter(c) {
  const row = getDiaperDay(c.days);
  if (!row) return '';
  const t = diapersToday();
  const want = row.wet;
  const pct = Math.min(100, Math.round((t.wet / want) * 100));
  const met = t.wet >= want;

  return `
  <div class="card">
    <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Today &middot; ${esc(row.label)}</p>
    <h3 class="h3" style="margin-top:3px">${t.wet} wet, ${t.dirty} dirty so far</h3>
    <p class="tiny" style="margin-top:3px">
      ${esc(row.wetLabel)} wet and ${esc(row.dirty)} dirty is what this day usually looks like.
    </p>
    <div class="bar" style="margin-top:9px"><i style="width:${pct}%"></i></div>
    <p class="tiny" style="margin-top:7px">
      ${t.logged === 0
        ? 'Nothing logged today yet. Log a diaper and this counts itself.'
        : met
          ? 'That is the number for today. Nothing else to do with it.'
          : 'Still early in the day if it is early in the day. This is a count, not a verdict.'}
    </p>
    <button class="btn ghost sm" style="width:100%;margin-top:10px" data-go="log" data-id="diapers">
      Log a diaper
    </button>
  </div>`;
}

function newbornBlock(c) {
  const r = NEWBORN_RHYTHM;
  const bm = BOTTLE_AMOUNTS.breastmilk;
  const fm = BOTTLE_AMOUNTS.formula;
  const today = getDiaperDay(c.days);

  const amountRow = (x, last) => `
    <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 0;
      ${last ? '' : 'border-bottom:1px solid var(--line2)'}">
      <span class="tiny" style="flex:none;width:104px;font-weight:600;color:var(--ink)">${esc(x.when)}</span>
      <span class="grow">
        <span style="display:block;font-size:13.5px;color:var(--body);line-height:1.45">
          <strong style="color:var(--ink)">${esc(x.amount)}</strong> ${esc(x.per)}
        </span>
        ${x.note ? `<span class="tiny" style="display:block;margin-top:3px">${esc(x.note)}</span>` : ''}
      </span>
    </div>`;

  return `
    <div class="card leafy">
      <p class="eyebrow">${icon('clock', 11, 'var(--sage)')} How often</p>
      <h3 class="h3" style="font-size:19px">${esc(r.headline)}</h3>
      ${r.body.map((t) => `<p class="bodytext" style="margin-top:9px">${esc(t)}</p>`).join('')}
    </div>

    ${today ? newbornCounter(c) : ''}

    <p class="sect">What should be in the diaper</p>
    <p class="tiny" style="margin:-4px 0 10px">
      You cannot see how much went in. You can see what comes out, and that is the measure your
      pediatrician uses too.
    </p>
    <div class="card" style="padding:6px 14px 12px">
      ${DIAPER_EXPECTATIONS.map((d, i) => {
        const isToday = today && today.day === d.day;
        return `
        <div style="display:flex;gap:11px;align-items:flex-start;padding:11px 0;
          ${i < DIAPER_EXPECTATIONS.length - 1 ? 'border-bottom:1px solid var(--line2)' : ''}">
          <span style="flex:none;width:34px;height:34px;border-radius:50%;margin-top:1px;
            background:${isToday ? 'var(--leaf)' : 'var(--leaf2)'};display:grid;place-items:center;
            font-size:11px;font-weight:700;color:var(--deep2)">${d.day >= 6 ? '6+' : d.day}</span>
          <span class="grow">
            <span style="display:block;font-size:13.5px;font-weight:600;color:var(--ink)">
              ${esc(d.label)}${isToday ? ' <span class="tag">Today</span>' : ''}
            </span>
            <span class="tiny" style="display:block;margin-top:2px">
              ${esc(d.wetLabel)} wet &middot; ${esc(d.dirty)} dirty
            </span>
            <span class="tiny" style="display:block;margin-top:2px">${esc(d.stool)}</span>
            ${d.note ? `<span class="tiny" style="display:block;margin-top:3px;color:var(--sage)">${esc(d.note)}</span>` : ''}
          </span>
        </div>`;
      }).join('')}
    </div>
    <div class="card flat">
      <p class="bodytext">${esc(DIAPER_NOTES.wetHowToTell)}</p>
      <p class="bodytext" style="margin-top:9px">${esc(DIAPER_NOTES.bricks)}</p>
      <p class="bodytext" style="margin-top:9px">${esc(DIAPER_NOTES.afterSixWeeks)}</p>
      <p class="bodytext" style="margin-top:9px">${esc(DIAPER_NOTES.formulaStool)}</p>
    </div>

    <p class="sect">How much goes in a bottle</p>
    <div class="card flat">
      <p class="bodytext">${esc(BOTTLE_AMOUNTS.intro)}</p>
    </div>

    <div class="card">
      <p class="eyebrow">${icon('drop', 11, 'var(--sage)')} ${esc(bm.title)}</p>
      <h3 class="h3" style="margin-top:3px">${esc(bm.lead)}</h3>
      <div style="margin-top:8px">
        ${bm.rows.map((x, i) => amountRow(x, i === bm.rows.length - 1)).join('')}
      </div>
      <div class="callout" style="margin-top:12px">${esc(bm.theFlatLine)}</div>
      <p class="tiny" style="margin-top:9px">${esc(bm.range)}</p>
      <p class="bodytext" style="margin-top:9px">${esc(bm.daycare)}</p>
    </div>

    <div class="card">
      <p class="eyebrow">${icon('utensils', 11, 'var(--sage)')} ${esc(fm.title)}</p>
      <h3 class="h3" style="margin-top:3px">${esc(fm.lead)}</h3>
      <p class="bodytext" style="margin-top:6px"><strong style="color:var(--ink)">${esc(fm.rule)}</strong></p>
      <p class="tiny" style="margin-top:4px">${esc(fm.ruleExample)}</p>
      <div style="margin-top:8px">
        ${fm.rows.map((x, i) => amountRow(x, i === fm.rows.length - 1)).join('')}
      </div>
      <p class="tiny" style="margin-top:9px">${esc(fm.cap)}</p>
    </div>

    <div class="card" style="border-left:3px solid var(--concern)">
      <p class="eyebrow" style="color:var(--concern)">Never water it down</p>
      <p class="bodytext" style="margin-top:5px">${esc(fm.neverDilute)}</p>
      <p class="bodytext" style="margin-top:9px">${esc(fm.noWater)}</p>
      <p class="bodytext" style="margin-top:9px">${esc(fm.noCereal)}</p>
    </div>

    <p class="sect">${esc(BOTTLE_AMOUNTS.paced.title)}</p>
    ${steps(BOTTLE_AMOUNTS.paced.steps)}

    <p class="sect">${esc(r.clusterFeeding.title)}</p>
    <div class="card flat">
      <p class="bodytext">${esc(r.clusterFeeding.text)}</p>
    </div>

    <p class="sect">${esc(r.wakingThem.title)}</p>
    <div class="card">
      <p class="bodytext">${esc(r.wakingThem.text)}</p>
      <div class="callout" style="margin-top:11px">${esc(r.wakingThem.sleepyWarning)}</div>
    </div>

    <p class="sect">${esc(NEWBORN_WARNING_SIGNS.title)}</p>
    <ul class="dlist warn">
      ${NEWBORN_WARNING_SIGNS.items.map((t) => `<li>${esc(t)}</li>`).join('')}
    </ul>
    <div class="card" style="border:1.5px solid #E4C9BF;background:#FCF4F1;margin-top:10px">
      <p class="eyebrow" style="color:#A85A44">Today, not next week</p>
      <p class="bodytext" style="margin-top:5px;color:#7A4E40">${esc(NEWBORN_WARNING_SIGNS.urgent)}</p>
    </div>
    <div class="card leafy">
      <p class="bodytext">${esc(NEWBORN_WARNING_SIGNS.reassurance)}</p>
    </div>

    <div class="dsec">
      <h4>Sources</h4>
      ${sourceRows(NEWBORN_SOURCES)}
    </div>
  `;
}


/* =================================================================
   CLOUD SYNC

   Until now everything a parent typed lived in localStorage on one
   device. That is fine right up until the moment it is not: she logs
   feeds all night on her phone, opens the laptop, and it is empty. Or
   she clears her browsing data and her baby's first month is gone.

   HOW IT IS SHAPED
   One document for the parent at users/{uid}, and one document per
   child underneath it at users/{uid}/children/{childId}, logs and all.
   A child doc is small, a few tens of kilobytes even with five hundred
   logs, and keeping each child separate means editing one child does
   not rewrite the others.

   HOW IT DECIDES WHO WINS
   Every child carries an updatedAt. Rather than instrumenting every
   single place in the app that can change a child, which would mean
   remembering to do it forever, the sync serialises each child on the
   way past and compares it to the last copy it knows is in the cloud.
   Different means changed, changed means stamp the time and upload.
   Between two devices the later stamp wins, per child, so an edit made
   on a phone cannot be quietly undone by a laptop that had the screen
   open but changed nothing.

   DELETION IS NOT AN ABSENCE
   A child missing from the local list is not the same as a child that
   was deleted, or every sign in would resurrect everything ever
   removed. So removals are recorded by id and those ids are never
   adopted back.

   IT WORKS OFFLINE
   Firestore keeps its own cache, so writes made in a basement waiting
   room are queued and sent when the signal comes back. The status line
   on the Me screen says which of those is happening, because a mother
   should never have to guess whether her logs are safe.
   ================================================================= */

const cloud = {
  mod: null,        // the Firestore module namespace
  app: null,        // the initialised Firebase app, shared with messaging
  db: null,
  uid: null,
  unsub: null,      // the live listener, so signing out can stop it
  status: 'local',  // local | loading | saving | saved | offline | error
  error: '',
  lastSaved: null,
  timer: null,
  known: {},        // childId -> the serialised copy last known to be in the cloud
  knownParent: null,
  started: false,
};

/* Everything that belongs to the cloud copy of one child. JSON round
   trip on purpose: it drops undefined, which Firestore rejects outright,
   and it gives a stable string to compare against. */
/* WHAT GOES UP, AND WHY THIS IS A DENY LIST

   This used to name the fields to sync one by one. That is the kind of
   thing that looks careful and is actually a trap: every field added to
   a child after it was written, such as her photo, the day each
   milestone was reached, and every daily check in, was quietly left out
   of the payload. So the cloud never received them, and worse, the
   moment a record was adopted back from the cloud it arrived without
   them and overwrote the local copy that had them. A photo saved on
   Tuesday could simply be gone on Wednesday through no fault of
   anybody, which is exactly what happened.

   So it is a deny list now. Everything on a child syncs unless it is
   named here as belonging to this browser rather than to the child. Add
   a field to a child and it syncs, which is the behaviour anybody would
   assume. */
/* sharedFrom stays local on purpose. It says whose record this is from
   the reader's point of view, so writing it into the document itself
   would stamp the owner's own child as shared from themselves. */
const CHILD_LOCAL_ONLY = ['seeded', 'sharedFrom', 'sharedNames'];

function childPayload(k) {
  const src = k || {};
  const out = {};
  Object.keys(src).forEach((key) => {
    if (CHILD_LOCAL_ONLY.indexOf(key) !== -1) return;
    if (src[key] === undefined) return;
    out[key] = src[key];
  });
  /* The handful the rest of the app assumes are always present get a
     shape even on a record that predates them. */
  out.id = src.id;
  out.name = src.name || '';
  out.birthday = src.birthday || null;
  out.lenses = src.lenses || [];
  out.lensOptions = src.lensOptions || {};
  out.lensNumbers = src.lensNumbers || {};
  out.statuses = src.statuses || {};
  out.statusDates = src.statusDates || {};
  out.checkins = src.checkins || {};
  out.arrival = src.arrival || [];
  out.photo = src.photo || '';
  out.wakeTime = src.wakeTime || '06:30';
  out.napOverride = src.napOverride == null ? null : src.napOverride;
  out.routineInclude = src.routineInclude || [];
  out.logs = Array.isArray(src.logs) ? src.logs : [];
  out.createdAt = src.createdAt || null;
  out.updatedAt = src.updatedAt || 0;
  return JSON.parse(JSON.stringify(out));
}

/* A record coming back from the cloud may have been written by an older
   copy of the app and be missing fields this one expects. Filling them
   in here means adopting a record can never hand a half shaped child to
   a screen that assumes the whole thing. */
function normalizeChild(k) {
  return Object.assign(newChildRecord('', null), k, {
    lenses: Array.isArray(k.lenses) ? k.lenses : [],
    lensOptions: k.lensOptions && typeof k.lensOptions === 'object' ? k.lensOptions : {},
    lensNumbers: k.lensNumbers && typeof k.lensNumbers === 'object' ? k.lensNumbers : {},
    statuses: k.statuses && typeof k.statuses === 'object' ? k.statuses : {},
    statusDates: k.statusDates && typeof k.statusDates === 'object' ? k.statusDates : {},
    checkins: k.checkins && typeof k.checkins === 'object' ? k.checkins : {},
    arrival: Array.isArray(k.arrival) ? k.arrival : [],
    photo: k.photo || '',
    routineInclude: Array.isArray(k.routineInclude) ? k.routineInclude : [],
    logs: Array.isArray(k.logs) ? k.logs : [],
    updatedAt: Number(k.updatedAt) || 0,
  });
}

function parentPayload() {
  return JSON.parse(JSON.stringify({
    parent: store.parent,
    bagChecked: store.bagChecked || [],
    /* THE CHORE CHART SYNCS AT THE HOUSEHOLD LEVEL.
       Two parents sharing a child have to be looking at the same
       chart, or one of them ticks the bins on her phone and the other
       is still being told the bins need doing. The ticks travel too,
       for exactly that reason. */
    choreJobs: store.choreJobs || [],
    choreDone: store.choreDone || {},
    choreAdults: store.choreAdults || [],
    choreStarsOn: store.choreStarsOn !== false,
    growthUnits: store.growthUnits === 'metric' ? 'metric' : 'us',
    /* Carried so the greeting that already appeared on her phone does
       not appear again on the laptop the same afternoon. */
    birthdaySeen: store.birthdaySeen || {},
    posts: store.posts || [],
    /* Memories sync the same way posts do, so a photo added on the
       phone is there on the laptop. The files themselves live in
       Storage, this only carries the links and the words. */
    memories: store.memories || [],
    deletedMemoryIds: store.deletedMemoryIds || [],
    /* Carried so the walkthrough she already sat through on her phone
       does not run again on her laptop. */
    onboardDone: !!(store.onboard && store.onboard.done),
    blocked: store.blocked || [],
    deletedChildIds: store.deletedChildIds || [],
    notDuplicates: store.notDuplicates || [],
    updatedAt: store.parentUpdatedAt || 0,
  }));
}

/* The comparison ignores updatedAt, or every stamp would look like a
   change and the two devices would push each other back and forth
   forever. */
function contentKey(payload) {
  const copy = Object.assign({}, payload);
  delete copy.updatedAt;
  return JSON.stringify(copy);
}

/* The example child the app seeds so a first visit opens on something
   rather than on an empty state. Putting a fictional Stetson
   permanently on somebody's real account would be worse than useless,
   so an untouched one is dropped rather than synced.

   The seeded flag is what makes this safe. Matching on the name and
   birthday alone would mean a real child who happened to share both
   with the example could be thrown away, and only a record the app
   invented itself carries the flag. The moment a parent puts anything
   of her own into it, it stops being the example and is hers. */
function isUntouchedSeed(k) {
  if (!k || k.seeded !== true) return false;
  const empty = (o) => !o || Object.keys(o).length === 0;
  return empty(k.statuses) && empty(k.lensOptions) && empty(k.lensNumbers)
    && (!k.lenses || !k.lenses.length)
    && (!k.logs || !k.logs.length)
    && (!k.routineInclude || !k.routineInclude.length);
}

/* Memories never lose to a stamp. A photo added on the phone while the
   laptop was open has to survive, so the two lists are joined rather
   than one replacing the other, and only something deliberately deleted
   on either device stays gone. */
function mergeMemories(local, remote, deletedIds) {
  const dead = {};
  (deletedIds || []).forEach((id) => { dead[id] = true; });
  const out = [];
  const seen = {};
  const take = (list) => {
    (list || []).forEach((m) => {
      if (!m || !m.id) return;
      if (dead[m.id]) return;
      if (seen[m.id]) return;
      seen[m.id] = true;
      out.push(m);
    });
  };
  take(local);
  take(remote);
  return sortMemories(out);
}

/* Both devices' tombstones, joined, so a delete on either one holds. */
function mergeDeletedIds(local, remote) {
  const out = [];
  const seen = {};
  const take = (list) => {
    (list || []).forEach((id) => {
      if (!id || seen[id]) return;
      seen[id] = true;
      out.push(id);
    });
  };
  take(local);
  take(remote);
  return out;
}

/* THE MERGE, kept pure so it can be tested without a network.
   local and remote are both arrays of child payloads. */
function mergeChildren(local, remote, deletedIds) {
  const dead = new Set(deletedIds || []);
  const byId = {};
  const upload = [];
  const adopted = [];

  (local || []).forEach((k) => { if (!dead.has(k.id)) byId[k.id] = { local: k }; });
  (remote || []).forEach((k) => {
    if (dead.has(k.id)) return;
    byId[k.id] = Object.assign(byId[k.id] || {}, { remote: k });
  });

  const out = [];
  Object.keys(byId).forEach((id) => {
    const pair = byId[id];
    if (pair.local && !pair.remote) { out.push(pair.local); upload.push(id); return; }
    if (pair.remote && !pair.local) { out.push(normalizeChild(pair.remote)); adopted.push(id); return; }
    const lt = Number(pair.local.updatedAt) || 0;
    const rt = Number(pair.remote.updatedAt) || 0;
    if (rt > lt) { out.push(normalizeChild(pair.remote)); adopted.push(id); }
    else {
      out.push(pair.local);
      /* Equal timestamps with different content means two devices
         edited inside the same millisecond, which is vanishingly rare
         and still has to resolve somehow. Local wins and is pushed, so
         both ends end up agreeing rather than silently differing. */
      if (contentKey(pair.local) !== contentKey(pair.remote)) upload.push(id);
    }
  });

  /* Stable order so the child strip does not reshuffle on every sync. */
  out.sort((a, b) => String(a.createdAt || '').localeCompare(String(b.createdAt || '')));
  return { children: out, upload, adopted };
}

/* The module is normally fetched from Google's CDN. The hook lets a
   test drive the whole sync with a fake, which is the only way to
   exercise two devices and a dropped connection without one. */
function loadFirestoreModule() {
  if (typeof window !== 'undefined' && window.__RSG_FIRESTORE__) {
    return Promise.resolve(window.__RSG_FIRESTORE__);
  }
  return import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-firestore.js`);
}

function cloudSetStatus(s, err) {
  cloud.status = s;
  cloud.error = err || '';
  if (s === 'saved') cloud.lastSaved = Date.now();
  render();
}

async function cloudStart(app, uid) {
  if (cloud.started && cloud.uid === uid) return;
  cloudStop();
  /* Kept so notifications can attach to the same initialised app
     rather than starting a second one, which Firebase tolerates and
     then behaves oddly about. */
  cloud.app = app;
  cloud.uid = uid;
  cloud.started = true;
  cloudSetStatus('loading');
  try {
    const fs = await loadFirestoreModule();
    cloud.mod = fs;
    /* A cache on disk is what makes this work with no signal. Private
       windows and locked down browsers refuse it, and refusing is not a
       reason to have no sync at all, so fall back to memory. */
    try {
      cloud.db = fs.initializeFirestore(app, {
        localCache: fs.persistentLocalCache({ tabManager: fs.persistentMultipleTabManager() }),
      });
    } catch (err) {
      cloud.db = fs.getFirestore(app);
    }
    await cloudFirstSync();
    cloudListen();
    /* After, not before. The account's own children reconcile first,
       then anything shared with it is added on top. */
    sharePullAll();
    /* A link tapped before there was an account. This is the moment
       there is one, so it is the moment to spend the invite. */
    if (invite.code) inviteRedeem();
  } catch (err) {
    cloud.started = false;
    cloudSetStatus('error', String((err && err.message) || err));
  }
}

function cloudStop() {
  if (cloud.unsub) { try { cloud.unsub(); } catch (err) {} }
  cloud.unsub = null;
  cloud.db = null;
  cloud.uid = null;
  cloud.started = false;
  cloud.known = {};
  cloud.knownParent = null;
  share.invites = []; share.shares = []; share.links = [];
  share.loaded = false; share.made = null; share.joined = ''; share.error = '';
  if (cloud.timer) { clearTimeout(cloud.timer); cloud.timer = null; }
  cloud.status = 'local';
}

function cloudOn() {
  return !!(cloud.db && cloud.uid && cloud.mod);
}

async function cloudFirstSync() {
  const fs = cloud.mod;
  const uid = cloud.uid;

  const userRef = fs.doc(cloud.db, 'users', uid);
  const userSnap = await fs.getDoc(userRef);
  const remoteUser = userSnap.exists() ? userSnap.data() : null;

  /* Deletions from either side count, so a child removed on the phone
     does not come back the first time the laptop signs in. */
  const deleted = Array.from(new Set(
    (store.deletedChildIds || []).concat((remoteUser && remoteUser.deletedChildIds) || [])));
  store.deletedChildIds = deleted;

  const kidsRef = fs.collection(cloud.db, 'users', uid, 'children');
  const kidsSnap = await fs.getDocs(kidsRef);
  const remoteKids = [];
  kidsSnap.forEach((d) => remoteKids.push(d.data()));

  /* The example never goes up, empty account or not. This is the line
     that stops every new signup starting life with somebody else's
     child on it. */
  /* Shared children are held out of this merge entirely. They are not
     this account's to reconcile, they are pulled separately below from
     the account that owns them. Leaving them in would have meant the
     merge deciding a co parent's child was missing from their own
     collection and helpfully writing it there. */
  const localKids = store.children
    .filter((k) => !isUntouchedSeed(k) && !k.sharedFrom)
    .map(childPayload);
  const sharedKids = store.children.filter((k) => !!k.sharedFrom);

  const merged = mergeChildren(localKids, remoteKids, deleted);
  /* Anything that came through the merge is on the account now, so
     nothing left is the app's invention. */
  merged.children.forEach((k) => { delete k.seeded; });
  /* Mine, reconciled, plus the shared ones put back untouched. */
  store.children = merged.children.concat(sharedKids);
  if (store.activeChildId && !store.children.some((k) => k.id === store.activeChildId)) {
    store.activeChildId = store.children.length === 1 ? store.children[0].id : null;
  }

  /* The parent record follows the same later stamp wins rule. */
  const localPt = Number(store.parentUpdatedAt) || 0;
  const remotePt = Number(remoteUser && remoteUser.updatedAt) || 0;
  if (remoteUser && remotePt > localPt) {
    store.parent = Object.assign({ name: '', username: '', email: '', birthday: '', lastPeriod: '', cycleLength: '', photo: '', calledBy: '', calledByOther: '', refersTo: '', situation: { stages: [], path: '', roles: [], support: [] } }, remoteUser.parent || {});
    store.parent.birthday = sanitizeStoredDate(store.parent.birthday, 0);
    store.parent.lastPeriod = sanitizeStoredDate(store.parent.lastPeriod, 0);
    store.parent.situation = normalizeSituation(store.parent.situation);
    store.posts = Array.isArray(remoteUser.posts) ? remoteUser.posts : (store.posts || []);
    store.bagChecked = Array.isArray(remoteUser.bagChecked) ? remoteUser.bagChecked : [];
    store.choreJobs = Array.isArray(remoteUser.choreJobs) ? remoteUser.choreJobs : [];
    store.choreDone = (remoteUser.choreDone && typeof remoteUser.choreDone === 'object')
      ? remoteUser.choreDone : {};
    store.choreAdults = Array.isArray(remoteUser.choreAdults) ? remoteUser.choreAdults : [];
    store.choreStarsOn = remoteUser.choreStarsOn === false ? false : true;
    store.growthUnits = remoteUser.growthUnits === 'metric' ? 'metric' : 'us';
    store.birthdaySeen = (remoteUser.birthdaySeen && typeof remoteUser.birthdaySeen === 'object')
      ? remoteUser.birthdaySeen : {};
    store.parentUpdatedAt = remotePt;
  }

  /* Memories are handled outside the stamp comparison on purpose. They
     are the one thing in here that cannot be recreated, so both sides
     are kept and only a real delete removes anything. */
  /* If this account has already been shown around on another device,
     never show it again here. */
  if (remoteUser && remoteUser.onboardDone) {
    const ob = onboard();
    ob.open = false;
    ob.done = true;
  }

  if (remoteUser) {
    store.deletedMemoryIds = mergeDeletedIds(
      store.deletedMemoryIds,
      Array.isArray(remoteUser.deletedMemoryIds) ? remoteUser.deletedMemoryIds : []
    );
    store.memories = mergeMemories(
      store.memories,
      Array.isArray(remoteUser.memories) ? remoteUser.memories : [],
      store.deletedMemoryIds
    );
  }

  remoteKids.forEach((k) => { cloud.known[k.id] = contentKey(k); });
  if (remoteUser) cloud.knownParent = contentKey(remoteUser);

  flushStore();
  cloudSetStatus('saved');
  /* Anything the merge says exists only locally goes up now. */
  cloudPush();
}

/* Live updates from the other device. This is the part that makes a
   laptop show what was typed on a phone without anybody refreshing. */
function cloudListen() {
  const fs = cloud.mod;
  if (!fs.onSnapshot) return;
  const kidsRef = fs.collection(cloud.db, 'users', cloud.uid, 'children');
  cloud.unsub = fs.onSnapshot(kidsRef, (snap) => {
    let changed = false;
    snap.forEach((d) => {
      const remote = d.data();
      if (!remote || !remote.id) return;
      if ((store.deletedChildIds || []).indexOf(remote.id) !== -1) return;
      const key = contentKey(remote);
      cloud.known[remote.id] = key;
      const i = store.children.findIndex((k) => k.id === remote.id);
      if (i === -1) { store.children.push(normalizeChild(remote)); changed = true; return; }
      /* Keep whose record it is. normalizeChild builds from the
         document, and sharedFrom deliberately is not in the document. */
      const wasShared = store.children[i].sharedFrom;
      const lt = Number(store.children[i].updatedAt) || 0;
      const rt = Number(remote.updatedAt) || 0;
      /* Through the normaliser, same as the first sync. A record written
         by an older copy of the app must never arrive missing fields
         and take the local copy's with it. */
      if (rt > lt) {
        store.children[i] = normalizeChild(remote);
        if (wasShared) store.children[i].sharedFrom = wasShared;
        changed = true;
      }
    });
    if (changed) {
      if (store.activeChildId && !store.children.some((k) => k.id === store.activeChildId)) {
        store.activeChildId = null;
      }
      flushStore();
      render();
    }
  }, () => { /* a dropped listener is not worth a visible error */ });
}

/* Called from flushStore, so every path that already saves locally also
   queues the cloud copy without anybody having to remember to. */
function cloudQueue() {
  if (!cloudOn()) return;
  if (cloud.timer) clearTimeout(cloud.timer);
  cloud.timer = setTimeout(() => { cloud.timer = null; cloudPush(false); }, 1400);
}

/* =================================================================
   TWO PARENTS, ONE CHILD

   The rules in firestore.rules are the guarantee. Everything here is
   the convenience on top of them: making a code, redeeming one,
   fetching the children it unlocked, and taking it all back.

   Nothing in this block is trusted by the server. A modified copy of
   this app can ask for whatever it likes and the rules will refuse it,
   which is the whole reason they were written and tested first.
   ================================================================= */

const share = {
  invites: [],      // codes this account has handed out, still live
  shares: [],       // who currently has access, and to what
  links: [],        // whose children this account has been given
  loaded: false,
  busy: false,
  error: '',
  made: null,       // the code just created, so it can be shown once
  pickIds: [],      // which children the next code should cover
  joinInput: '',
  joined: '',       // the sentence after a successful redeem
};

function sharingOn() {
  return !!(cloud.started && cloud.db && cloud.mod && myUid());
}

/* Everything the two lists on the screen need. Read rather than
   watched, because access does not change minute to minute. */
async function shareLoad(force) {
  if (!sharingOn()) return;
  if (share.loaded && !force) return;
  const fs = cloud.mod;
  const uid = myUid();
  try {
    const mine = [];
    const invSnap = await fs.getDocs(fs.collection(cloud.db, 'users', uid, 'shares'));
    invSnap.forEach((d) => mine.push(Object.assign({ viewerUid: d.id }, d.data())));
    share.shares = mine;

    const links = [];
    const linkSnap = await fs.getDocs(fs.collection(cloud.db, 'links', uid, 'from'));
    linkSnap.forEach((d) => links.push(Object.assign({ ownerUid: d.id }, d.data())));
    share.links = links;

    share.loaded = true;
    share.error = '';
  } catch (err) {
    share.error = SHARE_ERRORS.offline;
  }
  render();
}

/* Make a code for the children she ticked. */
async function shareMakeCode() {
  if (!sharingOn()) { share.error = SHARE_ERRORS.noAccount; render(); return; }
  const ids = (share.pickIds || []).filter((id) => store.children.some((k) => k.id === id && !k.sharedFrom));
  if (!ids.length) return;
  share.busy = true;
  share.error = '';
  render();
  const fs = cloud.mod;
  const code = makeShareCode();
  const names = ids.map((id) => {
    const k = store.children.filter((x) => x.id === id)[0];
    return (k && k.name) || 'Your child';
  });
  try {
    await fs.setDoc(fs.doc(cloud.db, 'invites', code), {
      ownerUid: myUid(),
      ownerName: (store.parent.name || '').trim().split(/\s+/)[0] || 'They',
      childIds: ids,
      childNames: names,
      expiresAt: codeExpiry(Date.now()),
      usedBy: '',
      at: Date.now(),
    });
    share.made = { code: code, names: names, at: Date.now() };
    share.pickIds = [];
  } catch (err) {
    share.error = SHARE_ERRORS.failed;
  }
  share.busy = false;
  render();
}

/* Redeem one. The order matters: check it, write the grant, write the
   index, burn the code, then fetch. If any of the first three fail the
   rules have refused and nothing has changed. */
async function shareJoin() {
  if (!sharingOn()) { share.error = SHARE_ERRORS.noAccount; render(); return; }
  const box = document.getElementById('shareIn');
  if (box && box.value) share.joinInput = box.value;
  const code = cleanCode(share.joinInput);
  if (!codeLooksRight(code)) {
    /* Say which half is wrong. Telling somebody the code is ten
       characters long while they are staring at ten characters is how
       a working feature gets reported as broken. */
    const bad = badCodeChar(code);
    share.error = bad
      ? SHARE_ERRORS.badChar + ' The ' + bad + ' is the problem.'
      : SHARE_ERRORS.shape;
    render();
    return;
  }
  share.busy = true;
  share.error = '';
  share.joined = '';
  render();

  const fs = cloud.mod;
  const uid = myUid();
  try {
    const snap = await fs.getDoc(fs.doc(cloud.db, 'invites', code));
    if (!snap.exists()) { share.error = SHARE_ERRORS.missing; share.busy = false; render(); return; }
    const inv = snap.data();
    if (inv.ownerUid === uid) { share.error = SHARE_ERRORS.own; share.busy = false; render(); return; }
    if (Number(inv.expiresAt || 0) <= Date.now()) { share.error = SHARE_ERRORS.expired; share.busy = false; render(); return; }
    if (inv.usedBy) { share.error = SHARE_ERRORS.used; share.busy = false; render(); return; }

    const payload = { childIds: inv.childIds, code: code, at: Date.now() };
    await fs.setDoc(fs.doc(cloud.db, 'users', inv.ownerUid, 'shares', uid), payload);
    await fs.setDoc(fs.doc(cloud.db, 'links', uid, 'from', inv.ownerUid), payload);
    /* Burned last, so a failure earlier leaves the code usable rather
       than spending it on an attempt that did not work. */
    try { await fs.updateDoc(fs.doc(cloud.db, 'invites', code), { usedBy: uid }); } catch (err) {}

    await sharePullFrom(inv.ownerUid, inv.childIds);
    share.joined = shareJoinedLine(inv.ownerName, inv.childNames || []);
    share.joinInput = '';
    share.loaded = false;
    await shareLoad(true);
  } catch (err) {
    share.error = SHARE_ERRORS.failed;
  }
  share.busy = false;
  render();
}

/* Fetch the children a grant unlocked and put them in the store,
   marked with whose they are. */
async function sharePullFrom(ownerUid, childIds) {
  if (!sharingOn()) return;
  const fs = cloud.mod;
  for (let i = 0; i < (childIds || []).length; i++) {
    const id = childIds[i];
    try {
      const snap = await fs.getDoc(fs.doc(cloud.db, 'users', ownerUid, 'children', id));
      if (!snap.exists()) continue;
      const k = normalizeChild(snap.data());
      k.sharedFrom = ownerUid;
      const at = store.children.findIndex((x) => x.id === id);
      if (at === -1) store.children.push(k);
      else if ((Number(k.updatedAt) || 0) >= (Number(store.children[at].updatedAt) || 0)) store.children[at] = k;
      cloud.known[id] = contentKey(childPayload(k));
    } catch (err) { /* refused or gone. Either way it is not ours. */ }
  }
  flushStore();
}

/* Every shared child, refreshed. Called on sign in, after the account's
   own first sync. */
async function sharePullAll() {
  if (!sharingOn()) return;
  const fs = cloud.mod;
  try {
    const snap = await fs.getDocs(fs.collection(cloud.db, 'links', myUid(), 'from'));
    const jobs = [];
    snap.forEach((d) => jobs.push([d.id, (d.data() || {}).childIds || []]));
    for (let i = 0; i < jobs.length; i++) await sharePullFrom(jobs[i][0], jobs[i][1]);
    if (jobs.length) render();
  } catch (err) { /* no links, or offline */ }
}

/* The owner taking it back. */
async function shareRevoke(viewerUid) {
  if (!sharingOn() || share.busy) return;
  share.busy = true;
  render();
  const fs = cloud.mod;
  try {
    await fs.deleteDoc(fs.doc(cloud.db, 'users', myUid(), 'shares', viewerUid));
    try { await fs.deleteDoc(fs.doc(cloud.db, 'links', viewerUid, 'from', myUid())); } catch (err) {}
    share.shares = share.shares.filter((x) => x.viewerUid !== viewerUid);
  } catch (err) {
    share.error = SHARE_ERRORS.failed;
  }
  share.busy = false;
  render();
}

/* The co parent walking away. Removes the children from this device
   without touching the record itself. */
async function shareLeave(ownerUid) {
  if (!sharingOn() || share.busy) return;
  share.busy = true;
  render();
  const fs = cloud.mod;
  const uid = myUid();
  try {
    try { await fs.deleteDoc(fs.doc(cloud.db, 'links', uid, 'from', ownerUid)); } catch (err) {}
    try { await fs.deleteDoc(fs.doc(cloud.db, 'users', ownerUid, 'shares', uid)); } catch (err) {}
    const gone = store.children.filter((k) => k.sharedFrom === ownerUid).map((k) => k.id);
    store.children = store.children.filter((k) => k.sharedFrom !== ownerUid);
    /* NOT added to deletedChildIds. That list means "this child was
       deleted", which would propagate and remove them from the owner's
       account too. Leaving is not deleting. */
    gone.forEach((id) => { delete cloud.known[id]; });
    if (store.activeChildId && gone.indexOf(store.activeChildId) !== -1) {
      store.activeChildId = store.children.length === 1 ? store.children[0].id : null;
    }
    if (store.profileWho && gone.indexOf(store.profileWho) !== -1) store.profileWho = 'me';
    share.links = share.links.filter((x) => x.ownerUid !== ownerUid);
    flushStore();
  } catch (err) {
    share.error = SHARE_ERRORS.failed;
  }
  share.busy = false;
  render();
}

/* Cancel a code that has not been used. */
async function shareDropCode(code) {
  if (!sharingOn()) return;
  try { await cloud.mod.deleteDoc(cloud.mod.doc(cloud.db, 'invites', code)); } catch (err) {}
  if (share.made && share.made.code === code) share.made = null;
  render();
}

/* Who owns this child, in words, for the profile. */
function sharedOwnerName(k) {
  if (!k || !k.sharedFrom) return '';
  const link = share.links.filter((x) => x.ownerUid === k.sharedFrom)[0];
  return (link && link.ownerName) || '';
}

function sharedWithCount(childId) {
  return share.shares.filter((s2) => (s2.childIds || []).indexOf(childId) !== -1).length;
}

async function cloudPush() {
  if (!cloudOn()) return;
  const fs = cloud.mod;
  const uid = cloud.uid;
  const now = Date.now();
  const writes = [];
  const pending = [];   // what to mark as known, but only once it lands

  store.children.forEach((k) => {
    const payload = childPayload(k);
    const key = contentKey(payload);
    if (cloud.known[k.id] === key) return;
    /* Stamp the record itself, not only the copy going up, so both
       devices are comparing the same number. */
    k.updatedAt = now;
    payload.updatedAt = now;
    pending.push(['child', k.id, key]);
    /* THE LINE THAT STOPS A SECOND STETSON EXISTING.

       A child shared with this account belongs to somebody else, so an
       edit goes back to their record rather than creating a copy under
       this one. Without this, a co parent logging a feed would quietly
       fork the child, and neither parent would ever see the other's
       entries again. */
    const owner = k.sharedFrom || uid;
    writes.push(fs.setDoc(fs.doc(cloud.db, 'users', owner, 'children', k.id), payload));
  });

  const pt = parentPayload();
  const ptKey = contentKey(pt);
  if (cloud.knownParent !== ptKey) {
    store.parentUpdatedAt = now;
    pt.updatedAt = now;
    pending.push(['parent', null, ptKey]);
    writes.push(fs.setDoc(fs.doc(cloud.db, 'users', uid), pt, { merge: true }));
  }

  /* Nothing changed. Say nothing and change nothing, because setting a
     status here would re render, which would re save, which would queue
     another push, which would find nothing changed, forever. */
  if (!writes.length) return;

  cloudSetStatus('saving');
  try {
    await Promise.all(writes);
    /* Only now is it true that the cloud holds this. Recording it any
       earlier means a failed write is never retried. */
    pending.forEach(([kind, id, key]) => {
      if (kind === 'child') cloud.known[id] = key; else cloud.knownParent = key;
    });
    cloudSetStatus('saved');
  } catch (err) {
    /* Offline is not an error. Firestore has the write in its own
       queue and will send it, so say that rather than alarming
       anybody. The known map is deliberately not updated, so a real
       failure is retried on the next change. */
    const msg = String((err && err.code) || (err && err.message) || err);
    if (/unavailable|offline|network|failed-precondition/i.test(msg)) cloudSetStatus('offline');
    else cloudSetStatus('error', msg);
  }
}

function cloudDeleteChild(id) {
  if (!cloudOn()) return;
  delete cloud.known[id];
  try {
    cloud.mod.deleteDoc(cloud.mod.doc(cloud.db, 'users', cloud.uid, 'children', id));
  } catch (err) { /* the tombstone in deletedChildIds is what matters */ }
  /* The tombstone rides in the parent document, and normally that waits
     out the debounce with everything else. Not here. If another device
     syncs in the second and a half before it goes up, it still has the
     child and puts her straight back. Deletion is the one change where
     waiting can undo itself, so it goes now. */
  if (cloud.timer) { clearTimeout(cloud.timer); cloud.timer = null; }
  cloudPush();
}

/* The line on the Me screen. Deliberately plain. */
function cloudStatusLine() {
  if (auth.guest && !auth.user) {
    return {
      tone: 'warn',
      title: 'Saved on this device only',
      text: 'You are looking around without an account. Everything you enter stays in this browser, '
        + 'and clearing your browsing data would take it with it. Making an account keeps it.',
      action: 'Create an account',
    };
  }
  if (cloud.status === 'loading') {
    return { tone: 'plain', title: 'Catching up', text: 'Fetching what is saved to your account.' };
  }
  if (cloud.status === 'saving') {
    return { tone: 'plain', title: 'Saving', text: 'Sending your latest changes to your account.' };
  }
  if (cloud.status === 'offline') {
    return {
      tone: 'plain',
      title: 'Offline, and nothing is lost',
      text: 'You have no connection right now. Everything you enter is being kept and will go up '
        + 'on its own the moment you are back.',
    };
  }
  if (cloud.status === 'error') {
    return {
      tone: 'warn',
      title: 'Not saving to your account right now',
      text: 'Your work is still safe in this browser. ' + (cloud.error ? '(' + cloud.error + ')' : ''),
    };
  }
  if (cloud.status === 'saved') {
    return {
      tone: 'good',
      title: 'Saved to your account',
      text: 'Everything here is on your account as well as this device, so it survives a cleared '
        + 'browser and follows you to your phone.',
    };
  }
  return { tone: 'plain', title: 'Saved on this device', text: 'Sign in to keep it on your account too.' };
}


/* =================================================================
   THE INVITE LINK

   Sharing already worked through a ten character code. Typing that
   code off one phone into another is the part that failed, in real
   life, for a real husband on a real evening, and the app told him the
   code was ten characters long while he was looking at ten characters.

   So the code stays and nobody has to use it. A link carries it. Tap
   the link and the app knows who invited you before you have done
   anything, and joins you the moment there is an account to join with.

   THE CODE IS TAKEN OUT OF THE ADDRESS BAR IMMEDIATELY
   It is a single use credential sitting in a URL, which is fine while
   it is travelling through one text message and not fine sitting in
   somebody's history, in a screenshot, or in whatever a shared browser
   syncs. It is read once into memory, the address is rewritten without
   it, and it never goes to disk.
   ================================================================= */

const invite = {
  code: '',        // the pending code, in memory only
  done: false,
};

function inviteTake() {
  if (typeof location === 'undefined') return;
  const code = joinCodeFromUrl(location.search || '');
  const open = (String(location.search || '').match(/[?&]open=([a-z]+)/i) || [])[1] || '';
  if (!code && !open) return;
  if (code) invite.code = code;
  /* Out of the address bar before anything renders. */
  try {
    const clean = location.pathname + location.hash;
    history.replaceState(null, '', clean || '/');
  } catch (err) {}
  if (open) {
    try { pushOpenTarget(open); } catch (err) {}
  }
}

/* WHY THE DOOR DOES NOT NAME WHO INVITED YOU.
   It would be nicer if it did. Reading the invite needs an account,
   because the rules will not let a stranger read one, and that rule is
   worth more than the nicety: without it anybody could walk the invite
   collection and learn children's names. So the door says somebody,
   and the name appears the moment there is an account to see it with. */

/* Called once there is an account. Runs the same redemption the typed
   code runs, so there is only one path that can be wrong. */
async function inviteRedeem() {
  if (!invite.code || invite.done) return;
  if (!sharingOn()) return;
  invite.done = true;
  share.joinInput = invite.code;
  invite.code = '';
  state.tab = 'home';
  state.view = { type: 'screen', id: 'sharing' };
  render();
  await shareJoin();
}

/* The banner on the sign in door, so somebody who has just been sent a
   link by their husband knows why they are being asked to make an
   account before they decide whether to. */
function inviteDoorBlock() {
  if (!invite.code) return '';
  return `
  <div class="card leafy" style="margin-bottom:14px">
    <p class="eyebrow">${icon('people', 11, 'var(--sage)')} ${esc(SHARE_INVITED_TITLE)}</p>
    <p class="bodytext" style="margin-top:6px">Somebody wants to share a child with you.</p>
    <p class="tiny" style="margin-top:8px">${esc(SHARE_INVITED_SIGNUP)}</p>
  </div>`;
}

/* The share sheet, which on a phone is the row of apps with Messages
   at the front of it. Falls back to the clipboard on a desktop, where
   there is no sheet to open. */
async function inviteSend(code) {
  const names = ((share.made && share.made.names) || []);
  const text = shareMessage(store.parent.name, names, code, location.origin);
  try {
    if (navigator.share) {
      await navigator.share({ text: text });
      return;
    }
  } catch (err) {
    /* Dismissing the sheet throws, and that is not an error worth
       showing anybody. */
    if (String((err && err.name) || '') === 'AbortError') return;
  }
  copyText(text);
  store.shareLinkCopied = true;
  render();
  setTimeout(() => { store.shareLinkCopied = false; render(); }, 2200);
}

/* =================================================================
   FOR YOU, TOPICS, AND WILLOW'S DAILY POST

   Three things that hang together: a feed sorted by whether the
   person who wrote a post has a child about the same age as yours, a
   topic out of any word with a hash in front of it, and one post a
   day from Willow that a human has to press send on.

   NOTHING IN HERE SORTS BY REACTIONS
   Sorting a parenting feed by what got the most response surfaces the
   most upsetting post in it, reliably, every time. There is no version
   of that which is good for somebody reading at three in the morning,
   so engagement is not in the ordering at all. See forYouScore in
   src/data/foryou.js for what is.
   ================================================================= */

/* The stage band of whichever child is open, or the youngest real one,
   because that is the one whose stage a parent is living in. */
function myFeedBand() {
  const kids = store.children.filter((k) => !isExampleChild(k) && k.birthday);
  if (!kids.length) return '';
  const active = activeChild();
  const pick = (active && active.birthday && !isExampleChild(active))
    ? active
    : kids.slice().sort((a, b) => (a.birthday < b.birthday ? 1 : -1))[0];
  const m = childMonths(pick);
  return m === null ? '' : feedBandFor(m);
}

/* Any word with a hash in front of it becomes a button. Built by
   escaping the whole body first and then replacing inside the escaped
   string, so nothing a person types can become markup. */
function bodyWithTags(text) {
  const safe = esc(String(text || ''));
  return safe.replace(/(^|\s)#([A-Za-z][A-Za-z0-9]{1,23})(?![A-Za-z0-9])/g,
    (whole, pre, word) => pre + '<button class="taglink" data-feedtag="'
      + esc(word.toLowerCase()) + '">#' + word + '</button>');
}

function trendingBlock() {
  const all = visibleFeed(feed.posts, blockedList());
  const live = all.filter((p) => p.status === FEED_STATUS.live);
  const hot = trendingTags(live);
  const band = myFeedBand();
  const thin = hot.length < 3;
  const items = thin ? curatedFor(band) : hot;

  return `
  <div class="dsec">
    <h4>${esc(TRENDING_TITLE)}</h4>
    ${thin ? `<p class="tiny" style="margin:0 0 9px">${esc(TRENDING_THIN)}</p>` : ''}
    <div class="chips">
      ${items.map((t) => {
    const tag = t.tag;
    const on = feed.tag === tag;
    return `<button class="chip${on ? ' on' : ''}" data-feedtag="${esc(tag)}">${esc(tagLabel(tag))}${
      thin ? '' : ` <span class="tagn">${esc(String(t.posts))}</span>`}</button>`;
  }).join('')}
    </div>
  </div>`;
}

function forYouBlock() {
  const all = visibleFeed(feed.posts, blockedList());
  const live = all.filter((p) => p.status === FEED_STATUS.live);
  const band = myFeedBand();
  const tagged = feed.tag ? postsWithTag(live, feed.tag) : live;
  const ordered = band ? sortForYou(tagged, band) : tagged.slice().sort((a, b) => b.at - a.at);

  return `
  ${feed.tag ? `
    <div class="card leafy" style="margin-bottom:11px">
      <p class="eyebrow">${icon('search', 11, 'var(--sage)')} Topic</p>
      <p style="font-size:16px;color:var(--ink);margin:6px 0 0;font-family:var(--serif)">${esc(tagLabel(feed.tag))}</p>
      <p class="tiny" style="margin:6px 0 0">${esc(ordered.length
    ? (ordered.length === 1 ? 'One post' : ordered.length + ' posts')
    : 'Nobody has used this one yet. Put it in a post and you will be the first.')}</p>
      <button class="chip" style="margin-top:10px" data-feedtag="__clear">Show everything again</button>
    </div>` : `
    <p class="tiny" style="margin:0 0 10px">${esc(band ? FORYOU_SUB : FORYOU_NO_BAND)}</p>`}

  ${band && !feed.tag ? `
    <p class="tiny" style="margin:0 0 10px;color:var(--faint)">Leaning towards ${esc(bandLabel(band).toLowerCase())}.</p>` : ''}

  ${trendingBlock()}

  ${feed.loading ? `<div class="card flat"><p class="bodytext">Loading.</p></div>` : ''}

  ${!feed.loading && !ordered.length ? `
    <div class="card" style="text-align:center;padding:30px 22px">
      ${growthSVG(2, 58)}
      <p style="margin:12px 0 0;font-size:14.5px;font-weight:600;color:var(--ink)">Nothing here yet</p>
      <p class="bodytext" style="margin-top:7px">${esc(FEED_EMPTY)}</p>
    </div>` : ''}

  ${ordered.map((p) => feedCard(p, { live: true })).join('')}
  ${ordered.length ? `<p class="tiny" style="text-align:center;margin-top:10px">${esc(TAG_HINT)}</p>` : ''}`;
}

/* ------------------------------------------------------------------
   WILLOW'S DAILY POST
   Only a moderator sees this, and only a person can send it.
   ------------------------------------------------------------------ */
const wpost = { busy: false, error: '' };

function willowDraftToday() {
  const d = store.willowPost && typeof store.willowPost === 'object' ? store.willowPost : {};
  return d.day === ciToday() ? d : { day: ciToday(), text: '', posted: false };
}

async function willowWriteDaily() {
  if (wpost.busy) return;
  wpost.busy = true;
  wpost.error = '';
  render();
  try {
    const theme = willowThemeFor(ciToday());
    const band = myFeedBand();
    const prompt = willowPostPrompt(theme, bandLabel(band).toLowerCase() || 'children of all ages');
    /* Its own one shot call rather than the chat, which is a
       conversation with its own rules and a sources line at the end.
       Squeezing a community post through those produces exactly what
       you would expect. */
    const model = await liftLoad();
    const res = await model.generateContent(prompt);
    const text = res && res.response && typeof res.response.text === 'function'
      ? res.response.text() : '';
    const clean = String(text || '').trim();
    if (!clean) throw new Error('empty');
    store.willowPost = { day: ciToday(), text: clean, theme: theme.id, posted: false };
    saveStore();
  } catch (err) {
    wpost.error = WILLOW_POST_FALLBACK;
  }
  wpost.busy = false;
  render();
}

/* Posted as Willow rather than as the person who pressed the button,
   because pretending a person wrote it would be the actual problem
   with an AI posting in a community. */
async function willowPostIt() {
  const d = willowDraftToday();
  const text = (document.getElementById('wpostbody') || {}).value || d.text;
  if (!String(text || '').trim()) return;
  wpost.busy = true;
  render();
  const post = {
    id: 'wp' + Date.now(),
    text: String(text).trim(),
    files: [],
    group: '',
    band: myFeedBand(),
    at: Date.now(),
  };
  const ok = await feedShare(Object.assign({}, post, { username: 'Willow' }));
  if (ok !== false) {
    store.willowPost = { day: ciToday(), text: String(text).trim(), posted: true };
    saveStore();
  }
  wpost.busy = false;
  render();
}

function willowPostBlock() {
  if (!feed.isMod) return '';
  const d = willowDraftToday();
  return `
  <div class="card flat" style="margin-bottom:11px">
    <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} ${esc(WILLOW_POST_TITLE)}</p>
    <p class="tiny" style="margin:6px 0 9px">${esc(WILLOW_POST_NOTE)}</p>
    ${d.posted ? `
      <p class="bodytext" style="margin:0">Today's one is up.</p>` : d.text ? `
      <textarea class="inp" id="wpostbody" rows="5" style="width:100%">${esc(d.text)}</textarea>
      <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
        <button class="btn" data-wpost="post"${wpost.busy ? ' disabled' : ''}>${esc(wpost.busy ? 'Posting' : 'Post it')}</button>
        <button class="chip" data-wpost="write"${wpost.busy ? ' disabled' : ''}>Write a different one</button>
        <button class="chip" data-wpost="bin">Not today</button>
      </div>` : `
      <button class="btn" data-wpost="write"${wpost.busy ? ' disabled' : ''}>
        ${esc(wpost.busy ? 'Writing' : 'Ask her to write today’s')}
      </button>`}
    ${wpost.error ? `<p class="tiny" style="color:var(--concern);margin:8px 0 0">${esc(wpost.error)}</p>` : ''}
  </div>`;
}

/* =================================================================
   NOTIFICATIONS

   The client half. The app asks for permission, gets a token from
   Firebase and writes it to the user's own document. The half that is
   awake and decides to send anything is functions/index.js.

   THE WHOLE THING STAYS ASLEEP UNTIL IT WOULD WORK
   A site gets one chance to ask a browser for notification permission.
   Refused once, it is very hard to ask again, and on an iPhone it is
   effectively impossible. So nothing here appears at all until
   WEB_PUSH_KEY has a value, which is to say until the server half
   actually exists. See src/data/notifications.js.

   AND IT IS NEVER ASKED FOR WITHOUT BEING ASKED FOR
   No prompt on arrival, no prompt after three visits, no prompt when
   somebody posts. The browser dialog only ever appears after a tap on
   a button on this screen that says exactly what it is about to do.
   ================================================================= */

const push = {
  mod: null,
  messaging: null,
  token: '',
  busy: false,
  error: '',
};

function pushSupported() {
  return typeof window !== 'undefined'
    && 'Notification' in window
    && 'serviceWorker' in navigator
    && 'PushManager' in window;
}

function pushPermission() {
  try { return Notification.permission; } catch (err) { return 'default'; }
}

/* An iPhone can do this only from a home screen install. Saying so
   before the button rather than after the failure. */
function pushNeedsInstallFirst() {
  return installPlatform() === 'ios' && !isInstalled();
}

function pushPrefs() {
  const p = (store.pushPrefs && typeof store.pushPrefs === 'object') ? store.pushPrefs : {};
  const out = Object.assign({}, pushDefaults(), p);
  if (!isFinite(Number(out.quietFrom))) out.quietFrom = PUSH_QUIET.defaultFrom;
  if (!isFinite(Number(out.quietTo))) out.quietTo = PUSH_QUIET.defaultTo;
  return out;
}

async function pushLoad() {
  if (push.messaging) return push.messaging;
  const v = FIREBASE_SDK_VERSION;
  const mod = await import(`https://www.gstatic.com/firebasejs/${v}/firebase-messaging.js`);
  const supported = await mod.isSupported().catch(() => false);
  if (!supported) throw new Error('This browser cannot do notifications.');
  push.mod = mod;
  push.messaging = mod.getMessaging(cloud.app || undefined);
  return push.messaging;
}

/* Asking, once, out loud, in response to a tap. */
async function pushEnable() {
  if (push.busy) return;
  push.busy = true;
  push.error = '';
  render();
  try {
    if (!cloud.uid) throw new Error('Sign in first, so the settings follow you to your other devices.');
    const perm = await Notification.requestPermission();
    if (perm !== 'granted') {
      push.error = perm === 'denied' ? PUSH_DENIED : 'Not switched on. You can tap again whenever you like.';
      push.busy = false;
      render();
      return;
    }
    const messaging = await pushLoad();
    /* Handed our own service worker rather than letting Firebase
       register a second one. Two workers on one scope fight, and the
       one that wins is not always the one with the push handler. */
    const reg = await navigator.serviceWorker.ready;
    const token = await push.mod.getToken(messaging, {
      vapidKey: WEB_PUSH_KEY,
      serviceWorkerRegistration: reg,
    });
    if (!token) throw new Error('The browser did not give us a token. Try again in a moment.');
    push.token = token;
    await pushSaveSettings(token);
    store.pushOn = true;
    saveStore();
  } catch (err) {
    push.error = String((err && err.message) || err);
  }
  push.busy = false;
  render();
}

/* Writes to users/<uid>/private/push, which is the only document the
   scheduled function ever reads. Nothing about a child goes in it. */
async function pushSaveSettings(token) {
  if (!cloud.db || !cloud.uid) return;
  const fs = cloud.mod;
  if (!fs) return;
  let tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (err) {}
  const payload = pushSettingsPayload(pushPrefs(), token || push.token, tz);
  /* merge so a second device adds its token rather than replacing the
     first one's. The tokens array is unioned for the same reason. */
  await fs.setDoc(
    fs.doc(cloud.db, 'users', cloud.uid, 'private', 'push'),
    payload,
    { merge: true },
  ).catch((err) => { push.error = 'Could not save that. ' + String(err.message || err); });
}

async function pushDisable() {
  push.busy = true;
  render();
  try {
    if (cloud.db && cloud.uid && cloud.mod) {
      const fs = cloud.mod;
      await fs.setDoc(
        fs.doc(cloud.db, 'users', cloud.uid, 'private', 'push'),
        { tokens: [], kinds: {}, updatedAt: Date.now() },
        { merge: true },
      ).catch(() => {});
    }
    if (push.messaging && push.mod && push.mod.deleteToken) {
      await push.mod.deleteToken(push.messaging).catch(() => {});
    }
  } catch (err) {}
  push.token = '';
  store.pushOn = false;
  saveStore();
  push.busy = false;
  render();
}

function pushToggleKind(id) {
  const p = pushPrefs();
  p[id] = !p[id];
  store.pushPrefs = p;
  saveStore();
  if (store.pushOn) pushSaveSettings().catch(() => {});
}

function pushSetQuiet(which, value) {
  const p = pushPrefs();
  p[which] = Math.max(0, Math.min(23, Number(value) || 0));
  store.pushPrefs = p;
  saveStore();
  if (store.pushOn) pushSaveSettings().catch(() => {});
}

function hourLabel(h) {
  const n = Number(h) || 0;
  if (n === 0) return 'midnight';
  if (n === 12) return 'noon';
  return (n > 12 ? n - 12 : n) + (n >= 12 ? 'pm' : 'am');
}

function screenPush() {
  const perm = pushPermission();
  const p = pushPrefs();
  const on = !!store.pushOn && perm === 'granted';

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm">${esc(PUSH_TITLE)}</h1>
    <p class="sub">${esc(PUSH_SUB)}</p>
  </div>
  <div class="sc">
    ${!pushConfigured() ? `
      <div class="card leafy">
        <p class="bodytext">${esc(PUSH_NOT_YET)}</p>
      </div>
      <div class="dsec">
        <h4>${esc(PUSH_HOW.title)}</h4>
        ${list(PUSH_HOW.items)}
      </div>` : `
      <div class="card leafy">
        <p class="bodytext">${esc(PUSH_INTRO)}</p>
      </div>

      ${!pushSupported() ? `
        <div class="card flat"><p class="bodytext">This browser cannot do notifications at all.</p></div>`
    : pushNeedsInstallFirst() ? `
        <div class="card flat">
          <p class="bodytext">${esc(PUSH_IOS_NEEDS_INSTALL)}</p>
          <button class="bigbtn" data-go="screen" data-id="install" style="margin-top:10px">Put it on my home screen</button>
        </div>`
      : perm === 'denied' ? `
        <div class="card flat"><p class="bodytext">${esc(PUSH_DENIED)}</p></div>`
        : `
        <button class="bigbtn" data-push="${on ? 'off' : 'on'}"${push.busy ? ' disabled' : ''}>
          ${esc(push.busy ? 'One moment' : (on ? 'Turn notifications off' : 'Turn notifications on'))}
        </button>`}
      ${push.error ? `<p class="tiny" style="color:var(--concern);margin:4px 0 10px">${esc(push.error)}</p>` : ''}

      <div class="dsec">
        <h4>What is worth interrupting you for</h4>
        ${PUSH_KINDS.map((k) => `
          <button class="lrow" data-push="kind" data-id="${esc(k.id)}">
            <span class="chbox${p[k.id] ? ' on' : ''}" style="margin-top:2px">
              ${p[k.id] ? icon('check', 13, '#fff') : ''}
            </span>
            <span class="grow">
              <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">${esc(k.label)}</span>
              <span class="tiny" style="display:block;margin-top:2px">${esc(k.detail)}</span>
            </span>
          </button>`).join('')}
      </div>

      <div class="dsec">
        <h4>${esc(PUSH_QUIET.title)}</h4>
        <p class="tiny" style="margin:0 0 10px">${esc(PUSH_QUIET.body)}</p>
        <div class="quietrow">
          <span class="tiny">From</span>
          <select class="inp" data-pushquiet="quietFrom">
            ${[...Array(24).keys()].map((h) => `
              <option value="${h}"${Number(p.quietFrom) === h ? ' selected' : ''}>${esc(hourLabel(h))}</option>`).join('')}
          </select>
          <span class="tiny">until</span>
          <select class="inp" data-pushquiet="quietTo">
            ${[...Array(24).keys()].map((h) => `
              <option value="${h}"${Number(p.quietTo) === h ? ' selected' : ''}>${esc(hourLabel(h))}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="dsec">
        <h4>${esc(PUSH_NAMES.title)}</h4>
        <button class="lrow" data-push="kind" data-id="useNames">
          <span class="chbox${p.useNames ? ' on' : ''}" style="margin-top:2px">
            ${p.useNames ? icon('check', 13, '#fff') : ''}
          </span>
          <span class="grow"><span class="tiny">${esc(PUSH_NAMES.body)}</span></span>
        </button>
      </div>

      <div class="dsec">
        <h4>${esc(PUSH_HOW.title)}</h4>
        ${list(PUSH_HOW.items)}
      </div>`}
    ${privacyLine()}
  </div>`;
}

/* A tap on a notification tells the open window where to go. Paired
   with the postMessage in sw.js. */
if (typeof navigator !== 'undefined' && navigator.serviceWorker && navigator.serviceWorker.addEventListener) {
  navigator.serviceWorker.addEventListener('message', (ev) => {
    const d = ev && ev.data;
    if (!d || d.rsg !== 'open' || !d.url) return;
    try {
      const u = new URL(d.url, location.origin);
      const open = u.searchParams.get('open');
      if (open) { pushOpenTarget(open); render(); }
    } catch (err) {}
  });
}

/* A notification, or a link from one, naming where to land. Kept in
   one place so the function and the app cannot drift on the names. */
function pushOpenTarget(name) {
  const map = {
    chores: { type: 'screen', id: 'chores' },
    checkin: { type: 'screen', id: 'checkins' },
    vaxrecord: { type: 'screen', id: 'vaxrecord' },
    community: null,
    growth: { type: 'screen', id: 'growth' },
  };
  if (!(name in map)) return false;
  if (name === 'community') { state.tab = 'community'; state.view = null; return true; }
  state.tab = 'home';
  state.view = map[name];
  return true;
}

/* =================================================================
   THE VACCINE RECORD

   What this child has had, with dates. Separate from the vaccines
   screen, which is the reading and the argument. This is the ledger.

   IT NEVER GOES RED
   A dose that is behind says "was due around then" in the same type
   as everything else. Nothing flashes, nothing counts down, and a
   series a family has decided against reads as settled rather than as
   permanently outstanding. An app that keeps a red mark on the screen
   of somebody who has already made their decision is not keeping a
   record, it is arguing, and there is a whole screen for that already.
   ================================================================= */

function vaxRecord(kid) {
  return ((kid || {}).vax && typeof kid.vax === 'object') ? kid.vax : {};
}

function vaxSkipped(kid) {
  return Array.isArray((kid || {}).vaxSkip) ? kid.vaxSkip : [];
}

function vaxIsSkipped(kid, seriesId) {
  return vaxSkipped(kid).indexOf(seriesId) !== -1;
}

function vaxSetDose(kid, seriesId, n, date) {
  if (!kid.vax || typeof kid.vax !== 'object') kid.vax = {};
  const key = vaxDoseKey(seriesId, n);
  if (date) kid.vax[key] = date; else delete kid.vax[key];
  kid.updatedAt = Date.now();
  saveStore();
}

function vaxToggleSkip(kid, seriesId) {
  const cur = vaxSkipped(kid);
  kid.vaxSkip = cur.indexOf(seriesId) === -1
    ? cur.concat([seriesId])
    : cur.filter((x) => x !== seriesId);
  kid.updatedAt = Date.now();
  saveStore();
}

/* Yearly things are kept as a list of dates rather than a tick list,
   because a flu jab is a different event every autumn and a checkbox
   would only ever tell you that one happened at some point. */
function vaxSeasonalDates(kid, seriesId) {
  const r = vaxRecord(kid);
  const raw = r['season:' + seriesId];
  return Array.isArray(raw) ? raw.slice().sort() : [];
}

function vaxAddSeasonal(kid, seriesId, date) {
  if (!date) return;
  if (!kid.vax || typeof kid.vax !== 'object') kid.vax = {};
  const key = 'season:' + seriesId;
  const cur = Array.isArray(kid.vax[key]) ? kid.vax[key] : [];
  if (cur.indexOf(date) === -1) kid.vax[key] = cur.concat([date]).sort();
  kid.updatedAt = Date.now();
  saveStore();
}

function vaxRemoveSeasonal(kid, seriesId, date) {
  const key = 'season:' + seriesId;
  const cur = Array.isArray((kid.vax || {})[key]) ? kid.vax[key] : [];
  kid.vax[key] = cur.filter((d) => d !== date);
  kid.updatedAt = Date.now();
  saveStore();
}

function screenVaxRecord(c) {
  const kid = activeChild();
  if (!kid) return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">The record</h1>
  </div>
  <div class="sc"><div class="card leafy"><p class="bodytext">Add a child first.</p></div></div>`;

  const first = (kid.name || 'They').split(/\s+/)[0];
  const months = childMonths(kid);
  const rec = vaxRecord(kid);
  const counts = vaxCounts(rec, vaxSkipped(kid));
  /* BY VISIT FIRST, AND BY DEFAULT.
     The list by vaccine is how a schedule is printed. By visit is how
     a parent lives it, which is the whole of her question: are all the
     vaccine check offs by age. */
  const tab = store.vaxTab || 'visits';
  const tabs = [
    { id: 'visits', label: 'By visit' },
    { id: 'list', label: 'By vaccine' },
    { id: 'schedule', label: 'Where things stand' },
  ];

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title sm">${esc(first + "'s record")}</h1>
    <p class="sub">${esc(VAX_RECORD_INTRO)}</p>
  </div>
  <div class="sc">
    ${subTabs('vaxTab', tab, tabs)}
    ${tab === 'schedule' ? vaxStandTab() : ''}
    ${tab === 'list' ? vaxListTab(kid, first, months, counts) : ''}
    ${tab === 'visits' ? vaxVisitsTab(kid, first, months, counts) : ''}
  </div>`;
}

/* THE RECORD, BY APPOINTMENT.

   Same doses, same ticks, same keys. The only thing that changes is
   the grouping, and the grouping is the point: a parent remembers the
   four month visit, not the third dose of Hib.

   The visit this child is at opens by itself, so somebody with a
   twelve year old does not scroll past the newborn shots to find their
   place. Everything else is collapsed with its count on the row, which
   is the whole answer at a glance for the visits already behind them. */
function vaxVisitsTab(kid, first, months, counts) {
  const rec = vaxRecord(kid);
  const skipped = vaxSkipped(kid);
  const here = vaxVisitNow(months);
  const open = store.vaxVisit || here;

  const tone = {
    done: { word: 'All recorded', color: 'var(--sage)' },
    'about now': { word: 'Around now', color: 'var(--attention, #B5793F)' },
    'was due': { word: 'Usually done by now', color: 'var(--muted)' },
    later: { word: 'Later on', color: 'var(--faint)' },
    unknown: { word: '', color: 'var(--faint)' },
  };

  return `
  <div class="card leafy">
    <p class="bodytext" style="margin:0">${esc(VAX_VISITS_INTRO)}</p>
    <p class="tiny" style="margin:8px 0 0">${esc(counts.given + ' of the ' + counts.total + ' one off doses recorded so far.')}</p>
  </div>

  ${VAX_VISITS.map((v) => {
    const vc = vaxVisitCounts(v, rec, skipped);
    const st = vaxVisitState(v, months, vc);
    const isOpen = open === v.id;
    const doses = vaxVisitDoses(v);
    if (!doses.length) return '';
    const t = tone[st] || tone.unknown;
    return `
    <div class="card flat vaxcard" style="padding:0;overflow:hidden${v.id === here ? ';border-left:3px solid var(--sage)' : ''}">
      <button class="vaxhead" data-vax="visit" data-id="${esc(v.id)}">
        <span class="grow">
          <span class="vaxname">${esc(v.label)}${v.id === here ? ' (they are here now)' : ''}</span>
          <span class="tiny" style="display:block;margin-top:2px">${esc(v.when)} &middot; ${esc(vc.given + ' of ' + vc.total + ' recorded')}${t.word ? esc(' \u00b7 ' + t.word) : ''}</span>
        </span>
        <span class="chev">${icon(isOpen ? 'chevdown' : 'chev', 15, 'var(--faint)')}</span>
      </button>
      ${isOpen ? `
        <div class="vaxbody">
          ${v.note ? `<p class="tiny" style="margin:0 0 10px">${esc(v.note)}</p>` : ''}
          ${doses.map((x) => vaxIsSkipped(kid, x.series.id) ? `
            <div class="vaxdose">
              <span class="vaxtick" aria-hidden="true"></span>
              <span class="grow">
                <span class="vaxdname" style="color:var(--muted)">${esc(x.series.label)}</span>
                <span class="tiny" style="display:block;margin-top:1px">Marked as not being given</span>
              </span>
            </div>` : `
            <p class="sect" style="margin:10px 0 2px">${esc(x.series.label)}</p>
            ${vaxDoseRow(kid, x.series, x.dose, months)}`).join('')}
        </div>` : ''}
    </div>`;
  }).join('')}

  <div class="dsec">
    <h4>${esc(VAX_SEASONAL_NOTE.title)}</h4>
    <p class="bodytext" style="margin:0 0 10px">${esc(VAX_SEASONAL_NOTE.body)}</p>
    <button class="btn ghost" style="width:100%" data-sub="vaxTab" data-val="list">
      ${icon('note', 14, 'var(--deep)')} Open the list by vaccine
    </button>
  </div>

  <p class="tiny" style="margin-top:10px">${esc(VAX_RECORD_NOTE)}</p>`;
}

function vaxListTab(kid, first, months, counts) {
  const rec = vaxRecord(kid);
  const openId = store.vaxOpen || '';

  return `
  <div class="card leafy">
    <p class="bodytext" style="margin:0">
      ${esc(counts.given + ' of the ' + counts.total + ' one off doses recorded.')}
      ${counts.given === 0 ? 'Start with the card from their last appointment.' : ''}
    </p>
  </div>

  ${VAX_SERIES.map((s) => vaxSeriesRow(kid, s, months, openId === s.id)).join('')}

  <div class="dsec">
    <h4>${esc(VAX_RECORD_HOW.title)}</h4>
    ${list(VAX_RECORD_HOW.items)}
  </div>

  <button class="tiny" data-vax="export"
    style="display:block;width:100%;text-align:center;background:none;border:0;color:var(--deep);text-decoration:underline;padding:10px">
    Copy the whole record as text
  </button>
  ${store.vaxCopied ? `<p class="tiny" style="text-align:center;margin:0">Copied.</p>` : ''}
  <p class="tiny" style="margin-top:10px">${esc(VAX_RECORD_NOTE)}</p>`;
}

function vaxSeriesRow(kid, s, months, open) {
  const rec = vaxRecord(kid);
  const skipped = vaxIsSkipped(kid, s.id);
  const real = s.doses.filter((d) => !d.optional);
  const done = real.filter((d) => rec[vaxDoseKey(s.id, d.n)]).length;
  const seasonal = s.seasonal ? vaxSeasonalDates(kid, s.id) : [];

  let sub;
  if (skipped) sub = 'Not being given';
  else if (s.seasonal) sub = seasonal.length
    ? (seasonal.length === 1 ? 'One recorded' : seasonal.length + ' recorded')
    : 'Given yearly, nothing recorded yet';
  else if (done === real.length && real.length) sub = 'All ' + real.length + ' recorded';
  else sub = done + ' of ' + real.length + ' recorded';

  return `
  <div class="card flat vaxcard" style="padding:0;overflow:hidden">
    <button class="vaxhead" data-vax="open" data-id="${esc(s.id)}">
      <span class="grow">
        <span class="vaxname">${esc(s.label)}</span>
        <span class="tiny" style="display:block;margin-top:2px">${esc(sub)}</span>
      </span>
      <span class="chev">${icon(open ? 'chevdown' : 'chev', 15, 'var(--faint)')}</span>
    </button>
    ${open ? `
      <div class="vaxbody">
        <p class="bodytext" style="margin:0 0 8px">${esc(s.protects)}</p>
        ${s.note ? `<p class="tiny" style="margin:0 0 10px">${esc(s.note)}</p>` : ''}
        ${s.sdm ? `<p class="tiny" style="margin:0 0 10px">This one has been a decide it with your doctor vaccine rather than a routine one.</p>` : ''}

        ${skipped ? `
          <p class="bodytext" style="margin:0 0 10px">Marked as not being given. Nothing here will ask about it again.</p>` : (s.seasonal
    ? vaxSeasonalBody(kid, s)
    : s.doses.map((d) => vaxDoseRow(kid, s, d, months)).join(''))}

        <button class="tiny" data-vax="skip" data-id="${esc(s.id)}"
          style="display:block;width:100%;text-align:center;background:none;border:0;color:var(--muted);text-decoration:underline;padding:8px 0 2px">
          ${esc(skipped ? 'Put it back on the list' : 'We are not giving this one')}
        </button>
      </div>` : ''}
  </div>`;
}

function vaxDoseRow(kid, s, d, months) {
  const rec = vaxRecord(kid);
  const key = vaxDoseKey(s.id, d.n);
  const given = rec[key];
  const state = vaxDoseState(s, d, months, given);
  const editing = store.vaxEdit === key;

  const when = given ? given
    : (state === 'about now' ? 'Usually about now'
      : (state === 'was due' ? 'Usually by now' : d.window));

  return `
  <div class="vaxdose${given ? ' on' : ''}">
    <button class="vaxtick" data-vax="tick" data-id="${esc(key)}"
      aria-label="${esc(given ? 'Clear dose ' + d.n : 'Record dose ' + d.n + ' as given today')}">
      ${given ? icon('check', 12, '#fff') : ''}
    </button>
    <span class="grow">
      <span class="vaxdname">Dose ${d.n}${d.optional ? ', only some brands' : ''}</span>
      <span class="tiny" style="display:block;margin-top:1px">${esc(when)}${given ? '' : esc(' (' + d.window + ')')}</span>
    </span>
    <button class="tiny vaxdate" data-vax="edit" data-id="${esc(key)}">${esc(given ? 'Change' : 'Date')}</button>
  </div>
  ${editing ? `
    <div class="vaxedit">
      <input class="inp" id="vaxdatein" type="date" value="${esc(given || ciToday())}"
        max="${esc(ciToday())}" ${kid.birthday ? 'min="' + esc(kid.birthday) + '"' : ''}>
      <button class="btn" data-vax="savedate" data-id="${esc(key)}">Save</button>
      ${given ? `<button class="tiny vaxdate" data-vax="clear" data-id="${esc(key)}">Clear</button>` : ''}
    </div>
    ${store.vaxError ? `<p class="tiny" style="color:var(--concern);margin:0 0 8px">${esc(store.vaxError)}</p>` : ''}` : ''}`;
}

function vaxSeasonalBody(kid, s) {
  const dates = vaxSeasonalDates(kid, s.id);
  return `
  ${dates.map((d) => `
    <div class="vaxdose on">
      <span class="vaxtick on">${icon('check', 12, '#fff')}</span>
      <span class="grow"><span class="vaxdname">${esc(d)}</span></span>
      <button class="chx" data-vax="delseason" data-id="${esc(s.id)}" data-date="${esc(d)}"
        aria-label="Remove ${esc(d)}">${icon('close', 12, 'var(--muted)')}</button>
    </div>`).join('')}
  <div class="vaxedit">
    <input class="inp" id="vaxseasonin" type="date" value="${esc(ciToday())}" max="${esc(ciToday())}">
    <button class="btn" data-vax="addseason" data-id="${esc(s.id)}">Add a date</button>
  </div>`;
}

function vaxStandTab() {
  const w = VAX_WHERE_THINGS_STAND;
  return `
  <div class="card leafy">
    <p class="eyebrow">${icon('info', 11, 'var(--sage)')} As it stood in ${esc(w.asOf)}</p>
    <p class="bodytext" style="margin-top:6px">${esc(w.body[0])}</p>
  </div>
  <div class="dsec">
    <h4>${esc(w.title)}</h4>
    ${w.body.slice(1).map((b) => `<p class="bodytext" style="margin:0 0 9px">${esc(b)}</p>`).join('')}
  </div>
  <p class="tiny" style="margin:0 0 12px">This is a moving situation and the paragraph above is dated for
  that reason. If you are reading it long after ${esc(w.asOf)}, check the two schedules directly.</p>
  ${dsec('Both schedules, and where they differ', sourceRows(VAX_SCHEDULE_SOURCES))}
  <button class="lrow" data-go="screen" data-id="vaccines">
    <span class="licon">${icon('shield', 18)}</span>
    <span class="grow">
      <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">The reading, and both sides of it</span>
      <span class="tiny" style="display:block;margin-top:2px">What the evidence says, what your rights are, and how to decide</span>
    </span>
    <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
  </button>`;
}

function vaxSaveDate(kid, key) {
  const el = document.getElementById('vaxdatein');
  const date = el ? el.value : '';
  if (!date) { store.vaxError = 'Pick a date first.'; return; }
  if (date > ciToday()) { store.vaxError = 'That date has not happened yet.'; return; }
  if (kid.birthday && date < kid.birthday) { store.vaxError = 'That is before they were born.'; return; }
  const bits = key.split(':');
  store.vaxError = '';
  store.vaxEdit = '';
  vaxSetDose(kid, bits[0], Number(bits[1]), date);
}

function vaxExportText(kid) {
  const rec = vaxRecord(kid);
  const lines = ['Vaccine record for ' + (kid.name || 'child')
    + (kid.birthday ? ', born ' + kid.birthday : ''), ''];
  VAX_SERIES.forEach((s) => {
    if (vaxIsSkipped(kid, s.id)) { lines.push(s.label + ': not being given'); return; }
    if (s.seasonal) {
      const d = vaxSeasonalDates(kid, s.id);
      lines.push(s.label + ': ' + (d.length ? d.join(', ') : 'nothing recorded'));
      return;
    }
    const parts = s.doses.filter((d) => !d.optional || rec[vaxDoseKey(s.id, d.n)]).map((d) => {
      const g = rec[vaxDoseKey(s.id, d.n)];
      return 'dose ' + d.n + ' ' + (g || 'not recorded');
    });
    lines.push(s.label + ': ' + parts.join(', '));
  });
  lines.push('');
  lines.push('Kept by a parent in the Ready Set Grow app. Not an official record.');
  return lines.join('\n');
}

/* The one line under the record on a child's profile. */
function vaxRowSub(kid, months) {
  const rec = vaxRecord(kid);
  const counts = vaxCounts(rec, vaxSkipped(kid));
  if (!counts.given) return 'Tick off what has been given, and keep the dates';
  const next = vaxNextUp(months, rec, vaxSkipped(kid));
  if (counts.given >= counts.total) return 'Everything on the list is recorded';
  return counts.given + ' of ' + counts.total + ' recorded'
    + (next ? ', next is ' + next.series.label.toLowerCase() : '');
}

/* =================================================================
   GROWTH

   The chart a parent actually gets handed at the surgery, except that
   here the percentile is deliberately the small print and the shape of
   the child's own line is the headline.

   WHY THE SEX QUESTION IS ASKED HERE AND NOT AT SIGN UP
   Growth curves are separate for boys and girls and there is no honest
   way around that, the difference is real from birth. But asking for
   it when somebody is adding a child, before they have seen anything
   the app does, is a form question with no visible purpose. So it is
   asked on the one screen that cannot work without it, with the reason
   printed next to it.

   THE CHART IS DRAWN BY HAND IN SVG
   No charting library. It is five reference curves and a short
   polyline, the whole app is one file, and pulling in a library to
   draw six paths would cost more than it gives.
   ================================================================= */

const GROWTH_LINES = [3, 15, 50, 85, 97];

function childMonths(kid) {
  const sum = getAgeSummary({ name: (kid || {}).name, birthday: (kid || {}).birthday });
  return sum.age ? sum.age.totalMonths : null;
}

function growthUs() {
  return store.growthUnits !== 'metric';
}

function growthEntries(kid) {
  return Array.isArray((kid || {}).growth) ? kid.growth : [];
}

function growthField(measure) {
  return measure === 'weight' ? 'kg' : (measure === 'height' ? 'cm' : 'headCm');
}

function growthNewId() {
  return 'g' + Date.now() + Math.floor(Math.random() * 1000);
}

/* The percentile they were born on, which is what decides how far the
   line has to drift before it means anything. Taken from the earliest
   reading in the first fortnight, and null when there is not one,
   because guessing it would change the threshold silently. */
function growthBirthCentile(kid) {
  const sex = (kid || {}).sex;
  if (!sex || !kid.birthday) return null;
  const early = growthEntries(kid)
    .filter((e) => e.kg)
    .map((e) => ({ e: e, m: growthMonthsBetween(kid.birthday, e.date) }))
    .filter((x) => x.m !== null && x.m <= 0.5)
    .sort((a, b) => a.m - b.m)[0];
  if (!early) return null;
  return growthPercentile('weight', early.m, sex, early.e.kg);
}

function growthPoints(kid, measure) {
  if (!kid || !kid.sex || !kid.birthday) return [];
  return growthTrend(growthEntries(kid), measure, kid.birthday, kid.sex);
}

/* How wide the chart is. Starts at birth always, because the shape of
   the first year is the point, and runs a little past the newest
   reading so the last dot is not jammed against the edge. */
function growthSpan(points, measure) {
  const cap = growthMaxMonths(measure);
  const newest = points.length ? points[points.length - 1].months : 0;
  let to = Math.ceil((newest + Math.max(2, newest * 0.12)) / 3) * 3;
  to = Math.max(6, Math.min(cap, to));
  return { from: 0, to: to };
}

function growthChart(kid, measure) {
  const sex = kid.sex;
  const points = growthPoints(kid, measure);
  const span = growthSpan(points, measure);

  const curves = GROWTH_LINES.map((p) => ({
    p: p,
    pts: growthCurve(measure, sex, span.from, span.to, p, 48),
  })).filter((c) => c.pts.length > 1);
  if (!curves.length) return '';

  let lo = Infinity, hi = -Infinity;
  curves.forEach((c) => c.pts.forEach((q) => { lo = Math.min(lo, q.value); hi = Math.max(hi, q.value); }));
  points.forEach((q) => { lo = Math.min(lo, q.value); hi = Math.max(hi, q.value); });
  const pad = (hi - lo) * 0.08 || 1;
  lo -= pad; hi += pad;

  /* Room on the left for the value labels and along the bottom for the
     ages, inside the viewBox rather than outside it, so nothing is
     clipped at any width. */
  const W = 320, H = 210, L = 34, R = 26, T = 10, B = 24;
  const x = (m) => L + (m - span.from) / (span.to - span.from) * (W - L - R);
  const y = (v) => T + (hi - v) / (hi - lo) * (H - T - B);

  const path = (pts) => pts.map((q, i) => (i ? 'L' : 'M') + x(q.months).toFixed(1) + ' ' + y(q.value).toFixed(1)).join(' ');

  /* Age ticks at whole months while the span is short and at whole
     years once it is long, so the axis never prints "13.5 months". */
  const ticks = [];
  if (span.to <= 24) {
    for (let m = 0; m <= span.to; m += (span.to <= 12 ? 3 : 6)) ticks.push({ m: m, label: String(m) });
  } else {
    for (let yy = 0; yy * 12 <= span.to; yy += (span.to > 96 ? 2 : 1)) ticks.push({ m: yy * 12, label: String(yy) });
  }

  const us = growthUs();
  const show = (v) => (measure === 'weight'
    ? (us ? (v * LB_PER_KG).toFixed(0) : v.toFixed(0))
    : (us ? cmToIn(v).toFixed(0) : v.toFixed(0)));

  /* Four value labels, each naming a number the chart actually
     reaches, taken off the median curve rather than off round numbers
     that might sit outside the drawing. */
  const vals = [lo + (hi - lo) * 0.08, lo + (hi - lo) * 0.36,
    lo + (hi - lo) * 0.64, lo + (hi - lo) * 0.92];

  const last = points.length ? points[points.length - 1] : null;

  return `
  <div class="gchart">
    <svg viewBox="0 0 ${W} ${H}" role="img"
      aria-label="${esc((kid.name || 'Their') + ' ' + measure + ' plotted against the reference curves')}">
      ${vals.map((v) => `
        <line x1="${L}" y1="${y(v).toFixed(1)}" x2="${W - R}" y2="${y(v).toFixed(1)}"
          stroke="var(--line2)" stroke-width="1"/>
        <text x="${L - 5}" y="${(y(v) + 3.5).toFixed(1)}" text-anchor="end"
          font-size="8.5" fill="var(--muted)">${esc(show(v))}</text>`).join('')}

      ${curves.map((c) => `
        <path d="${path(c.pts)}" fill="none" stroke="var(--sage)"
          stroke-width="${c.p === 50 ? 1.6 : 1}"
          stroke-opacity="${c.p === 50 ? 0.85 : 0.38}"
          ${c.p === 50 ? '' : 'stroke-dasharray="3 3"'}/>
        <text x="${(W - R + 3).toFixed(1)}" y="${(y(c.pts[c.pts.length - 1].value) + 3).toFixed(1)}"
          font-size="7.5" fill="var(--muted)">${c.p}</text>`).join('')}

      ${ticks.map((t) => `
        <text x="${x(t.m).toFixed(1)}" y="${H - 8}" text-anchor="middle"
          font-size="8.5" fill="var(--muted)">${esc(t.label)}</text>`).join('')}
      <text x="${L}" y="${H - 1}" font-size="7.5" fill="var(--faint)">${esc(span.to <= 24 ? 'months' : 'years')}</text>

      ${points.length > 1 ? `
        <path d="${path(points)}" fill="none" stroke="var(--deep)" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round"/>` : ''}
      ${points.map((q) => `
        <circle cx="${x(q.months).toFixed(1)}" cy="${y(q.value).toFixed(1)}" r="3"
          fill="var(--deep)"/>`).join('')}
      ${last ? `
        <circle cx="${x(last.months).toFixed(1)}" cy="${y(last.value).toFixed(1)}" r="5.5"
          fill="none" stroke="var(--deep)" stroke-width="1.5" stroke-opacity="0.45"/>` : ''}
    </svg>
  </div>`;
}

function screenGrowth(c) {
  const kid = activeChild();
  const first = (((kid || {}).name) || 'They').split(/\s+/)[0];
  if (!kid) return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">Growth</h1>
  </div>
  <div class="sc">
    <div class="card leafy"><p class="bodytext">Add a child first and this fills up.</p></div>
  </div>`;

  if (!kid.sex) return growthAskSex(kid, first);

  const tab = store.growthTab || 'chart';
  const measure = store.growthMeasure || 'weight';
  const tabs = [
    { id: 'chart', label: 'The line' },
    { id: 'list', label: 'Every reading' },
    { id: 'about', label: 'What it means' },
  ];

  const body = tab === 'list' ? growthListTab(kid, first)
    : tab === 'about' ? growthAboutTab()
      : growthChartTab(kid, first, measure);

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">Growth</h1>
    <p class="sub">${esc(GROWTH_INTRO)}</p>
  </div>
  <div class="sc">
    ${subTabs('growthTab', tab, tabs)}
    ${body}
  </div>`;
}

/* The one question this screen cannot work without, asked once, with
   the reason attached. */
function growthAskSex(kid, first) {
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">Growth</h1>
  </div>
  <div class="sc">
    <div class="card leafy">
      <p class="bodytext">Before this can draw anything, it needs to know whether to use the boys'
      curves or the girls' curves for ${esc(first)}.</p>
      <p class="tiny" style="margin-top:8px">Growth references are separate from birth and there is no
      honest way around it. This is the only thing the app uses it for, and you can change it later.</p>
    </div>
    <button class="lrow" data-growth="sex" data-id="m">
      <span class="licon">${icon('chart', 18)}</span>
      <span class="grow"><span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">Boys' curves</span></span>
    </button>
    <button class="lrow" data-growth="sex" data-id="f">
      <span class="licon">${icon('chart', 18)}</span>
      <span class="grow"><span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">Girls' curves</span></span>
    </button>
    ${privacyLine()}
  </div>`;
}

function growthChartTab(kid, first, measure) {
  const ms = GROWTH_MEASURES.filter((m) => {
    const months = childMonths(kid);
    if (months === null) return true;
    /* A measure that has run past its useful age is not offered, but
       anything already recorded under it stays readable in the list. */
    return months <= m.maxMonths + 6;
  });
  const active = ms.filter((m) => m.id === measure)[0] || ms[0];
  const points = growthPoints(kid, active.id);
  const last = points.length ? points[points.length - 1] : null;
  const concern = growthConcern(points, growthBirthCentile(kid));
  const months = childMonths(kid);
  const scored = months !== null && months <= active.maxMonths;

  return `
  <div class="chips" style="margin-bottom:12px">
    ${ms.map((m) => `
      <button class="chip" data-growthm="${esc(m.id)}" aria-pressed="${m.id === active.id}">${esc(m.label)}</button>`).join('')}
  </div>

  ${points.length ? growthChart(kid, active.id) : `
    <div class="card leafy">
      <p class="bodytext">Nothing recorded yet. Add the reading from their last check and it will
      start a line. One reading is a dot, so it will not tell you much until there are three.</p>
    </div>`}

  ${last ? `
    <div class="card flat">
      <p class="eyebrow">${icon('chart', 11, 'var(--sage)')} ${esc(last.date)}</p>
      <p class="bodytext" style="margin:6px 0 0;font-size:15px">
        <strong>${esc(active.id === 'weight' ? showWeight(last.value, growthUs()) : showLength(last.value, growthUs()))}</strong>${scored ? esc(', ' + percentileWords(normCdfPct(last.z))) : ''}
      </p>
      ${points.length >= 2 ? `
        <p class="tiny" style="margin:6px 0 0">${esc(growthSinceLine(points, active.id))}</p>` : `
        <p class="tiny" style="margin:6px 0 0">One reading. Add the next one at their next check and this becomes a line.</p>`}
    </div>` : ''}

  ${concern ? `
    <div class="card flat" style="border:1px solid var(--line)">
      <p class="eyebrow">${icon('info', 11, 'var(--taupe)')} ${esc(concern.level === 'ask' ? 'Worth asking about' : 'Worth another reading')}</p>
      <p class="bodytext" style="margin:6px 0 0">${esc(concern.line)}</p>
    </div>` : ''}

  ${!scored && months !== null ? `
    <p class="tiny" style="margin:0 0 12px">${esc(active.id === 'weight'
    ? 'Past eleven, the app records a weight but stops putting a percentile on it. Above that age the number tells you very little you can act on, and it starts something that is hard to stop.'
    : 'Past the age this measurement is routinely taken, so it is recorded without a curve.')}</p>` : ''}

  ${growthAddForm(kid, active)}

  <p class="tiny" style="margin-top:14px">${esc(GROWTH_DISCLAIMER)}</p>`;
}

function normCdfPct(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp(-z * z / 2);
  const p = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937
    + t * (-1.821255978 + t * 1.330274429))));
  return (z > 0 ? 1 - p : p) * 100;
}

function growthSinceLine(points, measure) {
  const a = points[points.length - 2], b = points[points.length - 1];
  const weeks = Math.round((new Date(b.date) - new Date(a.date)) / 604800000);
  const gain = b.value - a.value;
  const us = growthUs();
  const amount = measure === 'weight'
    ? (us ? (Math.abs(gain) * LB_PER_KG).toFixed(1) + ' lb' : (Math.abs(gain) * 1000).toFixed(0) + ' g')
    : (us ? cmToIn(Math.abs(gain)).toFixed(1) + ' in' : Math.abs(gain).toFixed(1) + ' cm');
  const dir = gain >= 0 ? 'Up' : 'Down';
  const moved = Math.abs(b.z - a.z) < 0.25
    ? 'Same line as before, which is the answer you want.'
    : (b.z > a.z ? 'A little higher up the chart than last time.' : 'A little lower down the chart than last time.');
  return dir + ' ' + amount + ' in ' + (weeks <= 1 ? 'a week' : weeks + ' weeks') + '. ' + moved;
}

function growthAddForm(kid, measure) {
  const us = growthUs();
  const d = store.growthDraft || {};
  const id = measure.id;
  return `
  <div class="dsec">
    <h4>Add a reading</h4>
    <div class="grow-form">
      <label class="tiny" for="gdate">When it was taken</label>
      <input class="inp" id="gdate" type="date" value="${esc(d.date || ciToday())}" data-growthfield="date">
      ${id === 'weight' ? (us ? `
        <label class="tiny" for="glb">Weight</label>
        <div class="grow-pair">
          <input class="inp" id="glb" type="number" inputmode="decimal" min="0" step="1" placeholder="lb" value="${esc(d.lb || '')}" data-growthfield="lb">
          <input class="inp" id="goz" type="number" inputmode="decimal" min="0" max="15" step="1" placeholder="oz" value="${esc(d.oz || '')}" data-growthfield="oz">
        </div>` : `
        <label class="tiny" for="gkg">Weight in kg</label>
        <input class="inp" id="gkg" type="number" inputmode="decimal" min="0" step="0.01" placeholder="kg" value="${esc(d.kg || '')}" data-growthfield="kg">`) : ''}
      ${id === 'height' ? (us ? `
        <label class="tiny" for="gin">Length or height in inches</label>
        <input class="inp" id="gin" type="number" inputmode="decimal" min="0" step="0.25" placeholder="in" value="${esc(d.inches || '')}" data-growthfield="inches">` : `
        <label class="tiny" for="gcm">Length or height in cm</label>
        <input class="inp" id="gcm" type="number" inputmode="decimal" min="0" step="0.1" placeholder="cm" value="${esc(d.cm || '')}" data-growthfield="cm">`) : ''}
      ${id === 'head' ? (us ? `
        <label class="tiny" for="ghin">Head in inches</label>
        <input class="inp" id="ghin" type="number" inputmode="decimal" min="0" step="0.25" placeholder="in" value="${esc(d.headIn || '')}" data-growthfield="headIn">` : `
        <label class="tiny" for="ghcm">Head in cm</label>
        <input class="inp" id="ghcm" type="number" inputmode="decimal" min="0" step="0.1" placeholder="cm" value="${esc(d.headCm || '')}" data-growthfield="headCm">`) : ''}
      <button class="bigbtn" data-growth="save" data-id="${esc(id)}">Save this reading</button>
      ${store.growthError ? `<p class="tiny" style="color:var(--concern);margin:2px 0 0">${esc(store.growthError)}</p>` : ''}
    </div>
    <button class="tiny" data-growth="units"
      style="display:block;width:100%;text-align:center;background:none;border:0;color:var(--muted);text-decoration:underline;padding:8px">
      ${esc(us ? 'Switch to kilograms and centimetres' : 'Switch to pounds and inches')}
    </button>
    <p class="tiny" style="margin:0">${esc(measure.note)}</p>
  </div>`;
}

function growthListTab(kid, first) {
  const entries = growthEntries(kid).slice().sort((a, b) => (a.date < b.date ? 1 : -1));
  if (!entries.length) {
    return `<div class="card leafy"><p class="bodytext">Nothing recorded for ${esc(first)} yet.</p></div>`;
  }
  const us = growthUs();
  return `
  ${entries.map((e) => {
    const months = growthMonthsBetween(kid.birthday, e.date);
    const bits = [];
    if (e.kg) bits.push(showWeight(e.kg, us));
    if (e.cm) bits.push(showLength(e.cm, us));
    if (e.headCm) bits.push('head ' + showLength(e.headCm, us));
    return `
    <div class="card flat" style="padding:11px 12px">
      <div style="display:flex;align-items:flex-start;gap:8px">
        <span class="grow">
          <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">${esc(bits.join(', ') || 'Empty reading')}</span>
          <span class="tiny" style="display:block;margin-top:2px">${esc(e.date)}${months === null ? '' : esc(', at ' + growthAgeWord(months))}</span>
        </span>
        <button class="chx" data-growth="del" data-id="${esc(e.id)}"
          aria-label="Delete the reading from ${esc(e.date)}">${icon('close', 12, 'var(--muted)')}</button>
      </div>
    </div>`;
  }).join('')}
  <button class="tiny" data-growth="export"
    style="display:block;width:100%;text-align:center;background:none;border:0;color:var(--deep);text-decoration:underline;padding:10px">
    Copy all of it as text
  </button>
  ${store.growthCopied ? `<p class="tiny" style="text-align:center;margin:0">Copied. Paste it wherever you need it.</p>` : ''}`;
}

function growthAgeWord(months) {
  if (months < 1) return Math.max(0, Math.round(months * 30.4375)) + ' days old';
  if (months < 24) return Math.round(months) + ' months';
  const y = Math.floor(months / 12);
  const m = Math.round(months - y * 12);
  return y + (m ? ' years ' + m + ' months' : ' years');
}

function growthAboutTab() {
  return `
  <div class="card leafy">
    <p class="bodytext">${esc(GROWTH_INTRO)}</p>
  </div>
  <div class="dsec">
    <h4>${esc(GROWTH_WHAT_IT_MEANS.title)}</h4>
    ${list(GROWTH_WHAT_IT_MEANS.items)}
  </div>
  <div class="dsec">
    <h4>${esc(GROWTH_THE_JUMP.title)}</h4>
    ${GROWTH_THE_JUMP.body.map((b) => `<p class="bodytext" style="margin:0 0 9px">${esc(b)}</p>`).join('')}
  </div>
  <div class="dsec">
    <h4>${esc(GROWTH_WHEN_TO_ASK.title)}</h4>
    ${list(GROWTH_WHEN_TO_ASK.items, true)}
  </div>
  <div class="dsec">
    <h4>${esc(GROWTH_WHEN_NOT_TO.title)}</h4>
    ${list(GROWTH_WHEN_NOT_TO.items)}
  </div>
  <div class="dsec">
    <h4>${esc(GROWTH_HOW_TO_MEASURE.title)}</h4>
    ${list(GROWTH_HOW_TO_MEASURE.items)}
  </div>
  ${dsec('Where this comes from', sourceRows(GROWTH_SOURCES))}
  <p class="tiny">${esc(GROWTH_DISCLAIMER)}</p>`;
}

/* Reading the fields straight off the DOM at save time rather than
   holding them in the store as they are typed. A value in the markup
   rebuilds the input on every keystroke, which is the bug that broke
   the Willow chat, and a number field that rebuilds mid entry loses
   the decimal point. */
function growthSave(measureId) {
  const kid = activeChild();
  if (!kid) return;
  const g = (id) => {
    const el = document.getElementById(id);
    return el ? el.value : '';
  };
  const date = g('gdate') || ciToday();
  const entry = { id: growthNewId(), date: date };

  if (measureId === 'weight') {
    if (growthUs()) {
      const lb = parseFloat(g('glb')), oz = parseFloat(g('goz')) || 0;
      if (isFinite(lb) && lb > 0) entry.kg = lbOzToKg(lb, oz);
    } else {
      const kg = parseFloat(g('gkg'));
      if (isFinite(kg) && kg > 0) entry.kg = kg;
    }
  } else if (measureId === 'height') {
    const v = parseFloat(growthUs() ? g('gin') : g('gcm'));
    if (isFinite(v) && v > 0) entry.cm = growthUs() ? inToCm(v) : v;
  } else {
    const v = parseFloat(growthUs() ? g('ghin') : g('ghcm'));
    if (isFinite(v) && v > 0) entry.headCm = growthUs() ? inToCm(v) : v;
  }

  if (entry.kg === undefined && entry.cm === undefined && entry.headCm === undefined) {
    store.growthError = 'Put a number in before saving.';
    return;
  }
  /* A date in the future, or before they were born, is a typo rather
     than a measurement, and plotting it would bend the line. */
  if (date > ciToday()) { store.growthError = 'That date has not happened yet.'; return; }
  if (kid.birthday && date < kid.birthday) { store.growthError = 'That is before they were born.'; return; }

  if (!Array.isArray(kid.growth)) kid.growth = [];
  /* A second reading on a day that already has one merges into it,
     because a weight and a length taken at the same appointment are
     one visit and should be one row. */
  const sameDay = kid.growth.filter((e) => e.date === date)[0];
  if (sameDay) {
    if (entry.kg !== undefined) sameDay.kg = entry.kg;
    if (entry.cm !== undefined) sameDay.cm = entry.cm;
    if (entry.headCm !== undefined) sameDay.headCm = entry.headCm;
  } else {
    kid.growth.push(entry);
  }
  kid.growth.sort((a, b) => (a.date < b.date ? -1 : 1));
  store.growthError = '';
  store.growthDraft = {};
  kid.updatedAt = Date.now();
  saveStore();
}

/* Copying to the clipboard, with the old iOS fallback, because a Copy
   button that silently does nothing is worse than no Copy button. */
function copyText(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
      return;
    }
  } catch (err) {}
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  } catch (err) {}
}

/* The one line under Growth on a child's profile. Says what is there
   rather than inviting them in with nothing behind the door. */
function growthRowSub(kid, months) {
  const n = growthEntries(kid).length;
  if (!n) return 'Weight and height over time, on the real curves';
  if (n === 1) return 'One reading so far. Two more and it is a line.';
  const pts = growthPoints(kid, 'weight').length ? growthPoints(kid, 'weight') : growthPoints(kid, 'height');
  if (!pts.length) return esc(n + ' readings');
  return esc(n + ' readings, last one ' + pts[pts.length - 1].date);
}

function growthExportText(kid) {
  const us = growthUs();
  const lines = ['Growth for ' + (kid.name || 'child') + (kid.birthday ? ', born ' + kid.birthday : ''), ''];
  growthEntries(kid).slice().sort((a, b) => (a.date < b.date ? -1 : 1)).forEach((e) => {
    const bits = [];
    if (e.kg) bits.push(showWeight(e.kg, us));
    if (e.cm) bits.push(showLength(e.cm, us));
    if (e.headCm) bits.push('head ' + showLength(e.headCm, us));
    const m = growthMonthsBetween(kid.birthday, e.date);
    lines.push(e.date + (m === null ? '' : '  (' + growthAgeWord(m) + ')') + '  ' + bits.join(', '));
  });
  return lines.join('\n');
}

/* =================================================================
   THE FAMILY CHORE CHART

   A weekly grid of who does what on which day, which fills today's
   list on its own. Set it up in September and it still works in
   November, which is the whole reason it is a week and not a list.

   EVERYONE IS ON IT, NOT JUST THE CHILDREN
   A chart with only children on it quietly teaches that jobs are a
   thing children do. So the grown ups are people on this chart too,
   with their own rows and their own jobs, and a child looking at
   Tuesday sees two jobs with their name and nine with a parent's.
   That arithmetic is worth seeing.

   WHO TICKS
   Anybody with the app open. It is not locked to a parent, because a
   six year old who cannot tick their own box has not really been
   given the job. What a parent gets is the chart in front of them,
   which is enough.

   STARS ARE ON BY DEFAULT AND COME OFF IN ONE TAP
   Plenty of families feel strongly that helping at home should not be
   paid or scored. They are not wrong, and the chart works identically
   with the stars hidden.
   ================================================================= */

const CHORE_ME = 'me';

function choreNewId() {
  return 'j' + Date.now() + Math.floor(Math.random() * 1000);
}

/* Everyone the chart can hand a job to. The parent, any other adults
   they have added, and every real child. Example children are left
   out, because a chart is not a demo. */
function chorePeople() {
  const out = [{
    id: CHORE_ME,
    name: (store.parent.name || 'You').trim() || 'You',
    kind: 'adult',
    months: null,
  }];
  (store.choreAdults || []).forEach((a) => {
    out.push({ id: a.id, name: a.name || 'Someone', kind: 'adult', months: null });
  });
  store.children.filter((k) => !isExampleChild(k)).forEach((k) => {
    const s = getAgeSummary({ name: k.name, birthday: k.birthday });
    const months = s.age ? s.age.totalMonths : null;
    /* A baby is not on the chart. Not out of tidiness: a row with a
       name and no possible job on it invites somebody to invent one,
       and the youngest thing on the list is already sixteen months. */
    if (months != null && !choresForMonths(months).length) return;
    out.push({
      id: k.id,
      name: (k.name || 'Unnamed').split(/\s+/)[0],
      kind: 'child',
      months: months,
    });
  });
  return out;
}

function chorePerson(id) {
  return chorePeople().filter((p) => p.id === id)[0] || null;
}

function choreJobs() {
  return Array.isArray(store.choreJobs) ? store.choreJobs : [];
}

/* A job whose person has been removed from the family, or whose chore
   id no longer exists in the library, is dropped on the way out rather
   than deleted from the store. Deleting somebody's whole chart because
   a chore got renamed in a build would be an unpleasant surprise. */
function choreLiveJobs() {
  const ids = {};
  chorePeople().forEach((p) => { ids[p.id] = true; });
  return choreJobs().filter((j) => ids[j.personId] && choreById(j.choreId));
}

function choreJobsFor(personId, day) {
  return choreLiveJobs().filter((j) => j.personId === personId
    && (day === undefined || day === null || (j.days || []).indexOf(day) !== -1));
}

function choreJobsOnDay(day) {
  return choreLiveJobs().filter((j) => (j.days || []).indexOf(day) !== -1);
}

function choreTodayIndex() {
  return new Date().getDay();
}

function choreDoneFor(dayKey) {
  const all = (store.choreDone && typeof store.choreDone === 'object') ? store.choreDone : {};
  return all[dayKey] || {};
}

function choreIsDone(jobId, dayKey) {
  return !!choreDoneFor(dayKey || ciToday())[jobId];
}

function choreToggle(jobId) {
  const key = ciToday();
  if (!store.choreDone || typeof store.choreDone !== 'object') store.choreDone = {};
  if (!store.choreDone[key]) store.choreDone[key] = {};
  if (store.choreDone[key][jobId]) delete store.choreDone[key][jobId];
  else store.choreDone[key][jobId] = true;
  choreTrimDone();
  saveStore();
}

/* Ten weeks of history is plenty to draw a star total from, and it
   stops the saved store growing without limit for a family that uses
   this for years. */
function choreTrimDone() {
  const all = store.choreDone;
  if (!all || typeof all !== 'object') return;
  const keys = Object.keys(all).sort();
  const over = keys.length - 70;
  for (let i = 0; i < over; i++) delete all[keys[i]];
}

function choreStarsOn() {
  return store.choreStarsOn !== false;
}

/* Stars earned. Counted from the done record rather than stored, so it
   can never drift away from what is actually ticked. */
function choreStars(personId, sinceDays) {
  if (!choreStarsOn()) return 0;
  const byId = {};
  choreLiveJobs().forEach((j) => { byId[j.id] = j; });
  const all = (store.choreDone && typeof store.choreDone === 'object') ? store.choreDone : {};
  const keys = Object.keys(all);
  let cut = '';
  if (sinceDays) {
    const d = new Date();
    d.setDate(d.getDate() - sinceDays);
    cut = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0')
      + '-' + String(d.getDate()).padStart(2, '0');
  }
  let total = 0;
  keys.forEach((k) => {
    if (cut && k < cut) return;
    Object.keys(all[k] || {}).forEach((jobId) => {
      const job = byId[jobId];
      if (!job || job.personId !== personId) return;
      const ch = choreById(job.choreId);
      if (ch) total += (ch.stars || 0);
    });
  });
  return total;
}

function choreAdd(choreId, personId, day) {
  if (!Array.isArray(store.choreJobs)) store.choreJobs = [];
  /* The same job twice for the same person is never what anybody
     meant, so an existing one gains the day instead. */
  const found = store.choreJobs.filter((j) => j.choreId === choreId && j.personId === personId)[0];
  if (found) {
    if ((found.days || []).indexOf(day) === -1) found.days = (found.days || []).concat([day]);
  } else {
    store.choreJobs.push({ id: choreNewId(), choreId: choreId, personId: personId, days: [day] });
  }
  saveStore();
}

function choreSetDay(jobId, day, on) {
  const job = choreJobs().filter((j) => j.id === jobId)[0];
  if (!job) return;
  const days = (job.days || []).filter((d) => d !== day);
  job.days = on ? days.concat([day]).sort() : days;
  /* A job on no days at all is not a job. */
  if (!job.days.length) store.choreJobs = choreJobs().filter((j) => j.id !== jobId);
  saveStore();
}

function choreRemove(jobId) {
  store.choreJobs = choreJobs().filter((j) => j.id !== jobId);
  saveStore();
}

function choreAddAdult(name) {
  const clean = (name || '').trim();
  if (!clean) return;
  if (!Array.isArray(store.choreAdults)) store.choreAdults = [];
  store.choreAdults.push({ id: 'a' + Date.now() + Math.floor(Math.random() * 1000), name: clean });
  saveStore();
}

function choreRemoveAdult(id) {
  store.choreAdults = (store.choreAdults || []).filter((a) => a.id !== id);
  store.choreJobs = choreJobs().filter((j) => j.personId !== id);
  saveStore();
}

/* What is still outstanding today, for the card on Home. */
function choreOutstanding() {
  const day = choreTodayIndex();
  const key = ciToday();
  return choreJobsOnDay(day).filter((j) => !choreIsDone(j.id, key));
}

function choreStarRow(n) {
  if (!choreStarsOn() || !n) return '';
  return `<span class="chstars">${icon('star', 11, 'var(--taupe)')} ${esc(String(n))}</span>`;
}

/* ---------------- THE CARD ON HOME ---------------- */
function choreCard() {
  /* Before there is a chart at all, the card is the way in. It only
     appears once at least one child is old enough to be given
     something, so a household of one newborn never sees it. */
  if (!choreLiveJobs().length) {
    const ready = chorePeople().filter((p) => p.kind === 'child');
    if (!ready.length) return '';
    return `
    <button class="card flat chorecard" data-go="screen" data-id="chores" style="width:100%;text-align:left">
      <p class="eyebrow">${icon('check', 11, 'var(--sage)')} Jobs</p>
      <p class="bodytext" style="margin:5px 0 0">
        ${esc(ready.length === 1 ? ready[0].name + ' is old enough to have a job of their own.' : 'Everyone here is old enough for a job of their own.')}
        Start a chart for the week.
      </p>
    </button>`;
  }
  const left = choreOutstanding();
  const day = CHORE_DAYS[choreTodayIndex()];
  const names = [];
  left.forEach((j) => {
    const p = chorePerson(j.personId);
    if (p && names.indexOf(p.name) === -1) names.push(p.name);
  });
  return `
  <button class="card flat chorecard" data-go="screen" data-id="chores" style="width:100%;text-align:left">
    <p class="eyebrow">${icon('check', 11, 'var(--sage)')} ${esc(day.label)}</p>
    ${left.length ? `
      <p class="bodytext" style="margin:5px 0 0">
        ${esc(left.length === 1 ? 'One job left today' : left.length + ' jobs left today')}${names.length ? esc(', for ' + listJoin(names)) : ''}.
      </p>` : `
      <p class="bodytext" style="margin:5px 0 0">Everything on today's chart is done.</p>`}
  </button>`;
}

/* Oxford comma deliberately absent, because she does not use one. */
function listJoin(arr) {
  const a = (arr || []).slice();
  if (!a.length) return '';
  if (a.length === 1) return a[0];
  const last = a.pop();
  return a.join(', ') + ' and ' + last;
}

/* ---------------- THE BOARD ---------------- */
function screenChores() {
  const tab = store.choreTab || 'today';
  const tabs = [
    { id: 'today', label: 'Today' },
    { id: 'week', label: 'The week' },
    { id: 'who', label: 'Who does what' },
    { id: 'how', label: 'How to start' },
  ];
  const body = tab === 'week' ? choreWeekTab()
    : tab === 'who' ? choreWhoTab()
      : tab === 'how' ? choreHowTab()
        : choreTodayTab();

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">Jobs</h1>
    <p class="sub">${esc(CHORE_INTRO)}</p>
  </div>
  <div class="sc">
    ${subTabs('choreTab', tab, tabs)}
    ${store.chorePick ? chorePicker() : body}
  </div>`;
}

function choreTodayTab() {
  const day = choreTodayIndex();
  const key = ciToday();
  const people = chorePeople();
  const any = choreJobsOnDay(day).length;

  if (!choreLiveJobs().length) return choreEmpty();

  return `
  ${!any ? `
    <div class="card flat">
      <p class="bodytext">Nothing is on the chart for ${esc(CHORE_DAYS[day].label.toLowerCase())}. That is allowed.
      One clear day a week is a good idea rather than an oversight.</p>
    </div>` : ''}
  ${people.map((p) => {
    const jobs = choreJobsFor(p.id, day);
    if (!jobs.length) return '';
    const doneN = jobs.filter((j) => choreIsDone(j.id, key)).length;
    return `
    <div class="dsec">
      <h4>${esc(p.name)} ${esc(doneN + ' of ' + jobs.length)}${p.kind === 'child' ? esc(' ') : ''}</h4>
      ${jobs.map((j) => choreTickRow(j, key)).join('')}
    </div>`;
  }).join('')}
  ${choreStarsOn() ? `
    <div class="dsec">
      <h4>Stars this week</h4>
      ${people.filter((p) => p.kind === 'child' && choreJobsFor(p.id).length).map((p) => `
        <div class="lrow" style="pointer-events:none">
          <span class="grow" style="font-size:14px;font-weight:600;color:var(--ink)">${esc(p.name)}</span>
          <span class="tiny">${esc(String(choreStars(p.id, 7)))} this week, ${esc(String(choreStars(p.id)))} altogether</span>
        </div>`).join('')}
    </div>` : ''}`;
}

function choreTickRow(job, key) {
  const ch = choreById(job.choreId);
  if (!ch) return '';
  const done = choreIsDone(job.id, key);
  return `
  <button class="chrow${done ? ' done' : ''}" data-chore="tick" data-id="${esc(job.id)}">
    <span class="chbox">${done ? icon('check', 13, '#fff') : ''}</span>
    <span class="grow">
      <span class="chlabel">${esc(ch.label)}</span>
      <span class="tiny" style="display:block;margin-top:2px">
        ${esc(ch.minutes + ' min')}${ch.withYou ? ', with you' : ''}${ch.note ? '' : ''}
      </span>
    </span>
    ${choreStarRow(ch.stars)}
  </button>`;
}

function choreEmpty() {
  return `
  <div class="card leafy">
    <p class="bodytext">Nothing on the chart yet. Add one job for one person and see how the week goes
    before you add any more. A chart with six new jobs on it on day one is a chart nobody looks at on day three.</p>
  </div>
  ${chorePeople().map((p) => `
    <button class="lrow" data-chore="pick" data-id="${esc(p.id)}">
      <span class="licon">${icon(p.kind === 'child' ? 'star' : 'user', 18)}</span>
      <span class="grow">
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">Give ${esc(p.name)} a job</span>
        <span class="tiny" style="display:block;margin-top:2px">${esc(p.kind === 'child'
    ? (p.months == null ? 'Add their birthday to see what fits' : choresForMonths(p.months).length + ' things they are old enough for')
    : 'The jobs that are already yours, written down')}</span>
      </span>
      <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
    </button>`).join('')}`;
}

function choreWeekTab() {
  const sel = typeof store.choreDay === 'number' ? store.choreDay : choreTodayIndex();
  const people = chorePeople();
  return `
  <div class="chdays">
    ${CHORE_DAYS.map((d) => {
    const n = choreJobsOnDay(d.id).length;
    return `
    <button class="chday${sel === d.id ? ' on' : ''}" data-chore="day" data-id="${esc(String(d.id))}">
      <span class="chday-l">${esc(d.short)}</span>
      <span class="chday-n">${esc(n ? String(n) : '')}</span>
    </button>`;
  }).join('')}
  </div>
  <p class="tiny" style="margin:0 0 12px">Tap a day to see it, then give somebody a job on it.</p>
  ${people.map((p) => {
    const jobs = choreJobsFor(p.id, sel);
    return `
    <div class="dsec">
      <h4>${esc(p.name)}</h4>
      ${jobs.length ? jobs.map((j) => {
    const ch = choreById(j.choreId);
    return `
        <div class="chrow flat">
          <span class="grow"><span class="chlabel">${esc(ch.label)}</span>
          <span class="tiny" style="display:block;margin-top:2px">${esc(ch.minutes + ' min')}${ch.withYou ? ', with you' : ''}</span></span>
          ${choreStarRow(ch.stars)}
          <button class="chx" data-chore="offday" data-id="${esc(j.id)}" data-day="${esc(String(sel))}"
            aria-label="Take this off ${esc(CHORE_DAYS[sel].label)}">${icon('close', 12, 'var(--muted)')}</button>
        </div>`;
  }).join('') : `<p class="tiny" style="margin:0 0 8px">Nothing on ${esc(CHORE_DAYS[sel].short)}.</p>`}
      <button class="chadd" data-chore="pick" data-id="${esc(p.id)}" data-day="${esc(String(sel))}">
        ${icon('plus', 13, 'var(--deep)')} Add a job for ${esc(p.name)}
      </button>
    </div>`;
  }).join('')}`;
}

function choreWhoTab() {
  const people = chorePeople();
  return `
  ${people.map((p) => {
    const jobs = choreJobsFor(p.id);
    return `
    <div class="dsec">
      <h4>${esc(p.name)}${p.kind === 'child' && choreStarsOn() ? esc(', ' + choreStars(p.id) + ' stars') : ''}</h4>
      ${jobs.length ? jobs.map((j) => {
    const ch = choreById(j.choreId);
    return `
        <div class="card flat" style="padding:11px 12px">
          <div style="display:flex;align-items:flex-start;gap:8px">
            <span class="grow"><span class="chlabel">${esc(ch.label)}</span>
            <span class="tiny" style="display:block;margin-top:2px">${esc(choreAreaLabel(ch.area))}, ${esc(ch.minutes + ' min')}</span></span>
            ${choreStarRow(ch.stars)}
            <button class="chx" data-chore="remove" data-id="${esc(j.id)}"
              aria-label="Take ${esc(ch.label)} off the chart">${icon('close', 12, 'var(--muted)')}</button>
          </div>
          <div class="chdays sm">
            ${CHORE_DAYS.map((d) => `
              <button class="chday${(j.days || []).indexOf(d.id) !== -1 ? ' on' : ''}"
                data-chore="toggleday" data-id="${esc(j.id)}" data-day="${esc(String(d.id))}">
                <span class="chday-l">${esc(d.short)}</span>
              </button>`).join('')}
          </div>
          ${ch.note ? `<p class="tiny" style="margin:8px 0 0">${esc(ch.note)}</p>` : ''}
        </div>`;
  }).join('') : `<p class="tiny" style="margin:0 0 8px">No jobs yet.</p>`}
      <button class="chadd" data-chore="pick" data-id="${esc(p.id)}">
        ${icon('plus', 13, 'var(--deep)')} Add a job for ${esc(p.name)}
      </button>
      ${p.id !== CHORE_ME && p.kind === 'adult' ? `
        <button class="tiny" data-chore="deladult" data-id="${esc(p.id)}"
          style="background:none;border:0;color:var(--muted);text-decoration:underline;padding:6px 0">
          Take ${esc(p.name)} off the chart
        </button>` : ''}
    </div>`;
  }).join('')}

  <div class="dsec">
    <h4>Somebody else who helps</h4>
    <p class="tiny" style="margin:0 0 8px">A partner, a grandparent, an older stepchild, anyone who is part of how
    this house runs. They get their own row and their own jobs.</p>
    <div style="display:flex;gap:8px">
      <input class="inp grow" id="choreadult" type="text" autocomplete="off" placeholder="Their name" value="">
      <button class="btn" data-chore="addadult" style="flex:none">Add</button>
    </div>
  </div>

  <div class="dsec">
    <h4>Stars</h4>
    <button class="lrow" data-chore="stars">
      <span class="licon">${icon('star', 18)}</span>
      <span class="grow">
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">${esc(choreStarsOn() ? 'Stars are on' : 'Stars are off')}</span>
        <span class="tiny" style="display:block;margin-top:2px">${esc(choreStarsOn()
    ? 'Tap to hide them. The chart works exactly the same.'
    : 'Tap to turn them back on.')}</span>
      </span>
    </button>
  </div>`;
}

function chorePicker() {
  const pick = store.chorePick || {};
  const p = chorePerson(pick.personId);
  if (!p) { store.chorePick = null; return choreTodayTab(); }
  const day = typeof pick.day === 'number' ? pick.day : choreTodayIndex();
  const have = {};
  choreJobsFor(p.id, day).forEach((j) => { have[j.choreId] = true; });

  const pool = p.kind === 'adult'
    ? adultChores()
    : (p.months == null ? [] : choresForMonths(p.months));
  const groups = choresByArea(pool);

  return `
  <div class="card leafy">
    <p class="bodytext" style="margin:0">
      A job for ${esc(p.name)} on ${esc(CHORE_DAYS[day].label)}.
      ${p.kind === 'child' && p.months != null
    ? esc('Everything here is something a ' + childAgeWord(p.months) + ' can have a go at. It will not be done well and that is the job being done.')
    : esc('The work that is already yours, written down so it is on the chart with everybody else’s.')}
    </p>
  </div>
  ${p.kind === 'child' && p.months == null ? `
    <div class="card flat"><p class="bodytext">Add their birthday on their profile and this fills up.</p></div>` : ''}
  ${groups.map((g) => `
    <div class="dsec">
      <h4>${esc(g.area.label)}</h4>
      ${g.items.map((ch) => `
        <button class="chrow pick${have[ch.id] ? ' has' : ''}" data-chore="add"
          data-id="${esc(ch.id)}" data-who="${esc(p.id)}" data-day="${esc(String(day))}">
          <span class="chbox plus">${have[ch.id] ? icon('check', 13, '#fff') : icon('plus', 13, 'var(--deep)')}</span>
          <span class="grow">
            <span class="chlabel">${esc(ch.label)}</span>
            <span class="tiny" style="display:block;margin-top:2px">${esc(ch.minutes + ' min')}${ch.withYou ? ', with you' : ''}</span>
          </span>
          ${choreStarRow(ch.stars)}
        </button>`).join('')}
    </div>`).join('')}
  <button class="bigbtn" data-chore="donepick">Done</button>`;
}

/* A rough word for how old they are, for one sentence of copy. It does
   not need to be precise and a precise one reads like a form. */
function childAgeWord(months) {
  if (months < 24) return 'toddler';
  if (months < 60) return String(Math.floor(months / 12)) + ' year old';
  if (months < 156) return String(Math.floor(months / 12)) + ' year old';
  return 'teenager';
}

function choreHowTab() {
  return `
  <div class="card leafy">
    <p class="bodytext">${esc(CHORE_INTRO)}</p>
  </div>

  <div class="dsec">
    <h4>${esc(CHORE_WHY.title)}</h4>
    ${list(CHORE_WHY.items)}
  </div>

  <div class="dsec">
    <h4>${esc(CHORE_START.title)}</h4>
    <ol class="nlist">${CHORE_START.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
  </div>

  <div class="dsec">
    <h4>${esc(CHORE_WHEN_THEY_WONT.title)}</h4>
    ${list(CHORE_WHEN_THEY_WONT.items)}
  </div>

  <div class="dsec">
    <h4>${esc(CHORE_STARS_NOTE.title)}</h4>
    ${CHORE_STARS_NOTE.body.map((b) => `<p class="bodytext" style="margin:0 0 9px">${esc(b)}</p>`).join('')}
  </div>

  <div class="dsec">
    <h4>${esc(CHORE_SAFETY.title)}</h4>
    ${list(CHORE_SAFETY.items, true)}
  </div>

  ${dsec('Where this comes from', sourceRows(CHORE_SOURCES))}`;
}

/* =================================================================
   THE LEARNING DAY

   What a structured day actually looks like, block by block, for a
   parent teaching at home and for a parent who wants to know what
   their child does all day at nursery.

   IT SHOWS ONE BAND AT A TIME, STARTING AT THEIR AGE
   The bands are pickable, because a mother with a two year old and a
   four year old needs to see both, and because looking a year ahead is
   half of why anybody opens a page like this.

   IT DOES NOT PRETEND TO BE SIX HOURS
   The taught part of a nursery day is an hour or two. The rest is
   care, food, sleep and the logistics of twenty children. Saying that
   plainly is the single most useful thing on the screen, because the
   alternative is somebody at home concluding by nine in the morning
   that she is already failing.
   ================================================================= */

function learnBandChoice(months) {
  const picked = store.learnBand ? learnBandById(store.learnBand) : null;
  return picked || learnBandFor(months) || LEARN_BANDS[0];
}

function screenLearning(c) {
  const months = c.months;
  const band = learnBandChoice(months);
  const tab = store.learnTab || 'day';
  const tabs = [
    { id: 'day', label: 'The day' },
    { id: 'subjects', label: 'Subjects' },
    { id: 'kit', label: 'What you need' },
    { id: 'how', label: 'Running it' },
  ];
  const body = tab === 'subjects' ? learnSubjectsTab(months)
    : tab === 'kit' ? learnKitTab()
      : tab === 'how' ? learnHowTab()
        : learnDayTab(band, months);

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">Learning</h1>
    <p class="sub">${esc(LEARN_INTRO)}</p>
  </div>
  <div class="sc">
    ${subTabs('learnTab', tab, tabs)}
    ${body}
  </div>`;
}

function learnDayTab(band, months) {
  const natural = learnBandFor(months);
  const off = natural && band.id !== natural.id;
  return `
  <div class="chips" style="margin-bottom:12px">
    ${LEARN_BANDS.map((b) => `
      <button class="chip" data-learnband="${esc(b.id)}" aria-pressed="${b.id === band.id}">${esc(b.label)}</button>`).join('')}
  </div>
  ${off && natural ? `
    <p class="tiny" style="margin:0 0 10px">You are looking at ${esc(band.label.toLowerCase())}.
    <button class="tiny" data-learnband="${esc(natural.id)}"
      style="background:none;border:0;padding:0;color:var(--deep);text-decoration:underline">Back to their age</button></p>` : ''}

  <div class="card leafy">
    <p class="bodytext" style="margin:0 0 6px"><strong>${esc(band.label)}</strong></p>
    <p class="bodytext" style="margin:0">${esc(band.sum)}</p>
  </div>
  ${band.note ? `<p class="tiny" style="margin:0 0 14px">${esc(band.note)}</p>` : ''}

  ${band.blocks.map((b, i) => `
    <div class="lblock">
      <div class="lblock-h">
        <span class="lnum">${esc(String(i + 1))}</span>
        <span class="grow">
          <span class="lblock-t">${esc(b.name)}</span>
          <span class="lblock-s">${esc(blockKindLabel(b.kind))} &middot; ${esc(b.minutes)} min</span>
        </span>
      </div>
      <p class="bodytext" style="margin:0 0 8px">${esc(b.what)}</p>
      ${list(b.doThis)}
      ${(b.need || []).length ? `
        <p class="tiny" style="margin:8px 0 0">You need: ${esc(b.need.join(', ').toLowerCase())}.</p>` : ''}
    </div>`).join('')}

  <div class="dsec">
    <h4>${esc(LEARN_RULES.title)}</h4>
    ${list(LEARN_RULES.items)}
  </div>`;
}

function learnSubjectsTab(months) {
  const now = subjectsFor(months);
  const later = LEARN_SUBJECTS.filter((s) => now.indexOf(s) === -1);
  return `
  <div class="card leafy">
    <p class="bodytext" style="margin:0">Each of these hangs off a block in the day rather than being a lesson of
    its own. The ages are when it is worth starting, not when it should be finished.</p>
  </div>
  ${now.map(learnSubjectCard).join('')}
  ${later.length ? `
    <div class="dsec">
      <h4>Not yet</h4>
      ${later.map((s) => `
        <div class="card flat" style="padding:11px 12px">
          <p class="bodytext" style="margin:0"><strong>${esc(s.label)}</strong></p>
          <p class="tiny" style="margin:4px 0 0">Worth starting around ${esc(learnAgeWord(s.startsMonths))}. ${esc(s.what)}</p>
        </div>`).join('')}
    </div>` : ''}`;
}

function learnSubjectCard(s) {
  return `
  <div class="dsec">
    <h4>${esc(s.label)}</h4>
    <p class="bodytext" style="margin:0 0 8px">${esc(s.what)}</p>
    ${list(s.now)}
  </div>`;
}

function learnAgeWord(months) {
  if (months <= 0) return 'birth';
  if (months < 24) return String(months) + ' months';
  const y = months / 12;
  return (y === Math.floor(y) ? String(y) : String(Math.floor(y)) + ' and a half') + ' years';
}

function learnKitTab() {
  return `
  <div class="card leafy">
    <p class="bodytext" style="margin:0">The commonest way this stops before it starts is somebody deciding they
    have to buy things first. You do not.</p>
  </div>
  <div class="dsec">
    <h4>${esc(LEARN_SUPPLIES.title)}</h4>
    ${list(LEARN_SUPPLIES.core)}
  </div>
  <div class="dsec">
    <h4>Worth adding later</h4>
    ${list(LEARN_SUPPLIES.laterOn)}
  </div>
  <div class="dsec">
    <h4>Already in your kitchen</h4>
    ${list(LEARN_SUPPLIES.freeStuff)}
  </div>
  <div class="dsec">
    <h4>${esc(LEARN_KITS.title)}</h4>
    ${LEARN_KITS.body.map((b) => `<p class="bodytext" style="margin:0 0 9px">${esc(b)}</p>`).join('')}
  </div>`;
}

function learnHowTab() {
  return `
  <div class="dsec">
    <h4>${esc(LEARN_RULES.title)}</h4>
    ${list(LEARN_RULES.items)}
  </div>
  <div class="dsec">
    <h4>${esc(LEARN_HOURS.title)}</h4>
    <div class="card flat" style="padding:4px 12px">
      ${LEARN_HOURS.rows.map((r) => `
        <div class="hoursrow">
          <span class="grow">${esc(r.band)}</span>
          <span class="tiny" style="text-align:right">${esc(r.hours)}</span>
        </div>`).join('')}
    </div>
    <p class="tiny" style="margin:9px 0 0">${esc(LEARN_HOURS.note)}</p>
  </div>

  <div class="dsec">
    <h4>${esc(LEARN_AT_HOME.title)}</h4>
    ${list(LEARN_AT_HOME.items)}
  </div>
  ${dsec('Where this comes from', sourceRows(LEARN_SOURCES))}`;
}

/* =================================================================
   PUTTING THE APP ON THE HOME SCREEN

   Ready Set Grow is a website. That is a genuine advantage, because
   there is nothing to download and nothing to update by hand, and a
   parent who is handed a link can be reading it eight seconds later.
   It has one cost: a website lives in a tab, and a tab at three in the
   morning is a thing you have to go and find.

   Putting it on the home screen fixes that, and while it is there the
   browser also keeps a copy of the page, so it opens in a hospital
   corridor with no signal.

   THE TWO PHONES DO NOT WORK THE SAME WAY, AND THAT CANNOT BE HIDDEN
   Android and desktop Chrome fire beforeinstallprompt, which hands the
   page a real install button. A tap does the whole thing.

   iPhone has never fired that event. Not once, not in any version, and
   there is no sign it ever will. On an iPhone the only route is Share
   then Add to Home Screen, done by hand, in Safari, and Chrome on an
   iPhone cannot do it at all. So the app detects which of those two
   worlds it is in and either shows a button or shows the steps. It
   never shows a button that does nothing, which is what most sites do
   and which is worse than saying so.
   ================================================================= */

const install = {
  /* The saved beforeinstallprompt event. It can only be used once, and
     only in direct response to a tap, which is why it is kept rather
     than acted on the moment it arrives. */
  prompt: null,
  busy: false,
  done: false,
};

/* Already running from the home screen. Both spellings are needed:
   the standard one, and the old Apple property that iOS Safari still
   uses and which is the only thing that answers on an iPhone. */
function isInstalled() {
  try {
    if (window.navigator && window.navigator.standalone === true) return true;
    if (typeof window.matchMedia === 'function'
      && window.matchMedia('(display-mode: standalone)').matches) return true;
  } catch (err) {}
  return false;
}

/* Which set of steps to show. Deliberately blunt: the point is only to
   pick the right instructions, so an unknown phone falls through to the
   computer steps, which are the most forgiving. */
function installPlatform() {
  const ua = String((navigator && navigator.userAgent) || '');
  const touchMac = /Macintosh/.test(ua) && (navigator.maxTouchPoints || 0) > 1;
  if (/iPad|iPhone|iPod/.test(ua) || touchMac) return 'ios';
  if (/Android/.test(ua)) return 'android';
  return 'desktop';
}

/* iPhone Chrome, Firefox and Edge all run Safari underneath but none of
   them carry Add to Home Screen. Somebody following the steps in the
   wrong browser will scroll a list that does not contain the thing they
   are looking for and conclude the app is broken, so it is said up
   front instead. */
function iosWrongBrowser() {
  const ua = String((navigator && navigator.userAgent) || '');
  return installPlatform() === 'ios' && /CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);
}

function canPromptInstall() {
  return !!install.prompt;
}

async function doInstall() {
  if (!install.prompt || install.busy) return;
  install.busy = true;
  render();
  try {
    install.prompt.prompt();
    const res = await install.prompt.userChoice;
    if (res && res.outcome === 'accepted') install.done = true;
  } catch (err) {
    /* A prompt that was already used, or a browser that changed its
       mind. Nothing to say about it. The steps are on screen anyway. */
  }
  /* Used up either way. The browser will fire a fresh one later if it
     still wants to. */
  install.prompt = null;
  install.busy = false;
  render();
}

if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('beforeinstallprompt', (e) => {
    /* Stopping the default is what keeps the browser from putting its
       own bar across the bottom of the screen at whatever moment it
       likes, usually the moment somebody is halfway through typing. */
    e.preventDefault();
    install.prompt = e;
    render();
  });
  window.addEventListener('appinstalled', () => {
    install.done = true;
    install.prompt = null;
    store.installHidden = '';
    saveStore();
    render();
  });
}

/* WHEN THE QUIET BANNER ON HOME IS ALLOWED TO APPEAR

   Not on the first visit, because somebody who has not decided whether
   they like the app yet does not want to be asked to keep it. Not if
   it is already installed. Not if there is nothing in here worth
   coming back to. And not more than twice ever. */
function showInstallBanner() {
  if (isInstalled() || install.done) return false;
  if (installPlatform() === 'desktop' && !canPromptInstall()) return false;
  if ((store.installWaves || 0) >= 2) return false;
  /* Something of their own in here. An example child does not count. */
  const real = store.children.filter((k) => !isExampleChild(k)).length;
  if (!real) return false;
  const hidden = store.installHidden || '';
  if (hidden) {
    const days = (Date.now() - Date.parse(hidden + 'T00:00:00')) / 86400000;
    if (!(days >= 7)) return false;
  }
  return true;
}

function installBanner() {
  if (!showInstallBanner()) return '';
  return `
  <div class="installbar">
    <span class="installic">${icon('home', 15, 'var(--deep)')}</span>
    <span class="grow">${esc(INSTALL_BANNER)}</span>
    <button class="installgo" data-install="open">Show me</button>
    <button class="installx" data-install="later" aria-label="Not now">${icon('close', 12, 'var(--muted)')}</button>
  </div>`;
}

function screenInstall() {
  const plat = installPlatform();
  const here = plat === 'ios' ? INSTALL_IOS : (plat === 'android' ? INSTALL_ANDROID : INSTALL_DESKTOP);
  const others = [INSTALL_IOS, INSTALL_ANDROID, INSTALL_DESKTOP].filter((x) => x !== here);
  const installed = isInstalled() || install.done;

  const steps = (sec) => `
    <div class="dsec">
      <h4>${esc(sec.title)}</h4>
      <p class="tiny" style="margin:0 0 9px">${esc(sec.note)}</p>
      <ol class="nlist">
        ${sec.steps.map((x) => `<li>${esc(x)}</li>`).join('')}
      </ol>
    </div>`;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title">${esc(INSTALL_TITLE)}</h1>
    <p class="sub">${esc(INSTALL_SUB)}</p>
  </div>
  <div class="sc">
    ${installed ? `
      <div class="card leafy">
        <p class="bodytext">${esc(INSTALL_ALREADY)}</p>
      </div>` : `
      <div class="card leafy">
        ${list(INSTALL_WHY)}
      </div>

      ${canPromptInstall() ? `
        <button class="bigbtn" data-install="go"${install.busy ? ' disabled' : ''}>
          ${esc(install.busy ? 'Asking your browser' : 'Install Ready Set Grow')}
        </button>` : ''}

      ${iosWrongBrowser() ? `
        <div class="card flat">
          <p class="bodytext"><strong>You are not in Safari.</strong> On an iPhone, only Safari can add an app to
          the home screen. Open readysetgrow-app.com in Safari and the steps below will work.</p>
        </div>` : ''}

      ${steps(here)}

      <div class="dsec">
        <h4>On your other devices</h4>
        <p class="tiny" style="margin:0 0 9px">You can have it on as many as you like. Sign in on
        each one and they stay in step with each other.</p>
        ${others.map((sec) => `
          <p class="bodytext" style="margin:0 0 4px"><strong>${esc(sec.title)}</strong></p>
          <ol class="nlist" style="margin:0 0 12px">
            ${sec.steps.map((x) => `<li>${esc(x)}</li>`).join('')}
          </ol>`).join('')}
      </div>`}

    <div class="dsec">
      <h4>${esc(INSTALL_NOTIFY.title)}</h4>
      ${INSTALL_NOTIFY.body.map((x) => `<p class="bodytext" style="margin:0 0 9px">${esc(x)}</p>`).join('')}
    </div>

    ${privacyLine()}
  </div>`;
}

/* =================================================================
   IS THIS COPY OF THE APP STILL CURRENT?

   A phone running last week's copy looks exactly like a phone that is
   up to date, right until somebody notices a child is missing. That is
   not hypothetical, it is how an afternoon went: the site had sync on
   it, the phone did not, the phone showed the example child, and there
   was nothing on screen to say so.

   GitHub Pages asks browsers to cache the page for ten minutes, and a
   phone with the tab already open holds it far longer. So rather than
   hoping, the app asks.

   IT ASKS CHEAPLY. The build stamp is a meta tag inside the first few
   hundred bytes of the file, so the check is a range request for two
   kilobytes rather than a megabyte down somebody's cellular data. If
   the server will not do ranges the check gives up rather than paying
   for the whole file.
   ================================================================= */

const update = {
  available: false,
  stamp: null,        // the stamp the server is serving
  checkedAt: 0,
  dismissed: false,
};

function buildStamp() {
  return typeof BUILD_STAMP === 'string' ? BUILD_STAMP : '';
}

async function checkForUpdate(force) {
  if (update.available) return;
  const now = Date.now();
  /* At most every two minutes. The interval below asks every three, and
     focus and coming back online ask too, so this only exists to stop
     three of those landing at once. */
  if (!force && now - update.checkedAt < 120000) return;
  update.checkedAt = now;
  if (typeof fetch !== 'function' || !buildStamp()) return;
  try {
    const res = await fetch(location.pathname + '?stamp=' + now, {
      cache: 'no-store',
      headers: { Range: 'bytes=0-2047' },
    });
    /* 206 is the partial answer that was asked for. A server that
       ignores the Range header answers 200 with the whole file, and
       reading the stamp out of the first couple of kilobytes of that
       still works. It costs a download that was not wanted, so it is
       not the happy path, but silently never checking again is worse.
       GitHub Pages does honour ranges today. It has not always. */
    if (res.status !== 206 && res.status !== 200) return;
    const head = (await res.text()).slice(0, 4096);
    const m = head.match(/name="rsg-build"\s+content="([^"]+)"/);
    if (!m) return;
    if (m[1] && m[1] !== buildStamp()) {
      update.available = true;
      update.stamp = m[1];
      render();
    }
  } catch (err) {
    /* Offline, or a server that does not want to answer. Either way
       this is the least important thing on the screen. */
  }
}

/* Reloading through a new address is what actually defeats a stubborn
   cache. Asking for the same URL again is exactly what the browser
   thinks it has already answered. */
function applyUpdate() {
  const v = encodeURIComponent(update.stamp || String(Date.now()));
  location.replace(location.pathname + '?v=' + v);
}

function updateBar() {
  if (!update.available || update.dismissed) return '';
  return `
  <div class="updatebar">
    <span class="grow">A newer version of the app is ready.</span>
    <button class="updatebtn" data-update="go">Reload</button>
    <button class="updatebtn ghost" data-update="later" aria-label="Not now">Later</button>
  </div>`;
}


/* =================================================================
   DUPLICATE CHILDREN

   The first time sync is turned on, two devices that were each used on
   their own can be holding their own separate record for the same
   child. Nothing can know that the Stetson on the phone and the Stetson
   on the laptop are the same boy, so the merge does the only honest
   thing and keeps both, and the parent opens the app to two of
   everybody.

   It is not a bug so much as the unavoidable cost of starting to sync
   late, but leaving somebody to work it out on their own is. So the app
   spots it, says which copy has what in it, and removes the other only
   when asked.
   ================================================================= */

/* How much a parent has actually put into a record. Used to say which
   copy is the one worth keeping, never to decide it for her. */
function childWeight(k) {
  if (!k) return 0;
  const n = (o) => (o && typeof o === 'object' ? Object.keys(o).length : 0);
  return (Array.isArray(k.logs) ? k.logs.length : 0)
    + n(k.statuses)
    + (Array.isArray(k.lenses) ? k.lenses.length : 0) * 2
    + n(k.lensOptions) + n(k.lensNumbers)
    + (Array.isArray(k.routineInclude) ? k.routineInclude.length : 0);
}

function childContents(k) {
  const bits = [];
  const logs = Array.isArray(k.logs) ? k.logs.length : 0;
  const ms = k.statuses ? Object.keys(k.statuses).length : 0;
  const lenses = Array.isArray(k.lenses) ? k.lenses.length : 0;
  if (logs) bits.push(logs === 1 ? '1 log' : logs + ' logs');
  if (ms) bits.push(ms === 1 ? '1 milestone marked' : ms + ' milestones marked');
  if (lenses) bits.push(lenses === 1 ? '1 support lens' : lenses + ' support lenses');
  if (k.routineInclude && k.routineInclude.length) bits.push('routine choices');
  return bits.length ? bits.join(', ') : 'Nothing in it yet';
}

/* Same name and same birthday is the only pair worth calling a
   duplicate. Two children who genuinely share both is a coincidence
   that does not happen, and anything looser would start suggesting a
   parent delete one of her twins. */
function findDuplicateChildren() {
  const groups = {};
  store.children.forEach((k) => {
    const name = String(k.name || '').trim().toLowerCase();
    if (!name || !k.birthday) return;
    const key = name + '|' + k.birthday;
    (groups[key] = groups[key] || []).push(k);
  });
  const spared = store.notDuplicates || [];
  return Object.keys(groups)
    .filter((key) => spared.indexOf(key) === -1)
    .map((key) => groups[key])
    .filter((g) => g.length > 1)
    .map((g) => g.slice().sort((a, b) =>
      String(a.createdAt || '').localeCompare(String(b.createdAt || ''))));
}

function duplicateCard() {
  const dupes = findDuplicateChildren();
  if (!dupes.length) return '';
  return dupes.map((group) => {
    const best = group[0];
    const combined = combineChildren(group);
    return `
    <div class="card" style="border-left:3px solid var(--attention)">
      <p class="eyebrow" style="color:var(--attention)">${icon('info', 11, 'var(--attention)')} ${group.length} profiles for ${esc(best.name)}</p>
      <p class="bodytext" style="margin-top:5px">
        This happens the first time two devices start sharing an account, because each of them had
        its own copy of ${esc(best.name)}. Combining them keeps everything from both and leaves one
        profile, on every device.
      </p>
      <div style="margin-top:11px">
        ${group.map((k, i) => `
          <div style="display:flex;gap:11px;align-items:flex-start;padding:9px 0;
            ${i < group.length - 1 ? 'border-bottom:1px solid var(--line2)' : ''}">
            <span style="flex:none;width:18px;height:18px;border-radius:50%;margin-top:1px;
              background:var(--leaf2);display:grid;place-items:center;font-size:10px;
              font-weight:700;color:var(--deep2)">${i + 1}</span>
            <span class="grow">
              <span style="display:block;font-size:13.5px;color:var(--body);line-height:1.45">${esc(childContents(k))}</span>
              <span class="tiny" style="display:block;margin-top:2px">Added ${esc(String(k.createdAt || '').slice(0, 10) || 'at some point')}</span>
            </span>
          </div>`).join('')}
      </div>
      <div class="callout" style="margin-top:11px">
        <strong style="color:var(--ink)">Combined, ${esc(best.name)} would have:</strong><br>
        ${esc(childContents(combined))}
      </div>
      <button class="btn" style="margin-top:12px" data-combinechild="${esc(best.id)}">
        Combine them into one
      </button>
      <button class="chip" style="margin-top:9px" data-notdupe="${esc(best.id)}">
        These are two different children
      </button>
    </div>`;
  }).join('');
}

/* COMBINING BEATS CHOOSING.

   This started as a "keep this one" button, on the assumption that one
   copy would be the real child and the other would be empty. Real data
   said otherwise the first time it ran: one Stetson had the ADHD lens
   on, the other had two routine choices, and neither contained the
   other. Whichever you kept, you lost something, and the app would not
   have mentioned it.

   So it combines instead. Logs are unioned by id, milestone statuses
   and lens settings are merged, and where a single value genuinely
   conflicts the one that was changed from the default wins, because a
   default is the absence of a choice rather than a choice. Nothing is
   thrown away, and there is nothing for a parent to weigh up. */
function combineChildren(group) {
  /* The oldest record wins the id, so whichever device created her
     first is the one the others fold into. */
  const ordered = group.slice().sort((a, b) =>
    String(a.createdAt || '').localeCompare(String(b.createdAt || '')));
  const base = ordered[0];
  const out = Object.assign({}, base);

  out.lenses = [];
  out.lensOptions = {};
  out.lensNumbers = {};
  out.statuses = {};
  out.statusDates = {};
  out.checkins = {};
  out.routineInclude = [];
  out.logs = [];
  const seenLogs = {};

  ordered.forEach((k) => {
    (k.lenses || []).forEach((id) => { if (out.lenses.indexOf(id) === -1) out.lenses.push(id); });
    (k.routineInclude || []).forEach((id) => {
      if (out.routineInclude.indexOf(id) === -1) out.routineInclude.push(id);
    });
    /* Later records win on a key by key basis rather than wholesale, so
       a milestone marked on the phone and a different one marked on the
       laptop both survive. */
    ['statuses', 'statusDates', 'checkins', 'lensOptions', 'lensNumbers'].forEach((field) => {
      const src = k[field] || {};
      Object.keys(src).forEach((key) => { out[field][key] = src[key]; });
    });
    (k.logs || []).forEach((l) => {
      if (!l || !l.id || seenLogs[l.id]) return;
      seenLogs[l.id] = true;
      out.logs.push(l);
    });
    /* A wake time that is not the default is somebody having set it. */
    if (k.wakeTime && k.wakeTime !== '06:30') out.wakeTime = k.wakeTime;
    if (k.napOverride != null) out.napOverride = k.napOverride;
    if (!out.birthday && k.birthday) out.birthday = k.birthday;
    if (!out.name && k.name) out.name = k.name;
  });

  out.logs.sort((a, b) => String(b.at || '').localeCompare(String(a.at || '')));
  if (out.logs.length > 500) out.logs.length = 500;
  out.updatedAt = Date.now();
  return out;
}

/* Combining means the others go, tombstones and all, so the copies on
   the other devices go too rather than syncing themselves straight
   back. */
function combineDuplicateChildren(anyId) {
  const group = findDuplicateChildren().filter((g) => g.some((k) => k.id === anyId))[0];
  if (!group) return;
  const merged = combineChildren(group);

  const goneIds = group.map((k) => k.id).filter((id) => id !== merged.id);
  store.children = store.children.filter((k) => group.indexOf(k) === -1);
  store.children.push(merged);
  store.children.sort((a, b) => String(a.createdAt || '').localeCompare(String(b.createdAt || '')));

  if (!store.deletedChildIds) store.deletedChildIds = [];
  goneIds.forEach((id) => {
    if (store.deletedChildIds.indexOf(id) === -1) store.deletedChildIds.push(id);
    cloudDeleteChild(id);
    willowForget(id);
  });
  if (!store.children.some((k) => k.id === store.activeChildId)) selectChild(merged.id);
  flushStore();
}

/* Two children who really do share a name and a birthday is rare but it
   is not impossible, and the app must not badger somebody about it
   forever. */
function markNotDuplicates(anyId) {
  const group = findDuplicateChildren().filter((g) => g.some((k) => k.id === anyId))[0];
  if (!group) return;
  const k = group[0];
  const key = String(k.name || '').trim().toLowerCase() + '|' + k.birthday;
  if (!store.notDuplicates) store.notDuplicates = [];
  if (store.notDuplicates.indexOf(key) === -1) store.notDuplicates.push(key);
  flushStore();
}


/* =================================================================
   WILLOW

   The circle in the bottom right, and what happens when it is tapped.

   THE ORDER OF OPERATIONS IS THE SAFETY DESIGN
   A question goes through three gates before any request leaves the
   device, and the first two never touch the network:

     1. Crisis words    -> the maternal mental health lines, at once
     2. Emergency words -> the 911 card, at once
     3. Retrieval       -> the app's own entries, ranked
     4. The model       -> writes an answer using only those entries

   Steps one and two run on a keyword list in the browser because the
   single moment when seconds matter is the moment this must not depend
   on a signal, a server, or a model deciding how worried to be.

   IF SHE IS NOT SET UP, SHE SAYS SO
   The app ships before Firebase AI Logic is switched on, so the panel
   opens, explains that plainly, and points at the search that does the
   same retrieval without her. A button that quietly does nothing is
   worse than no button.
   ================================================================= */

const willow = {
  open: false,
  busyKey: '',      // the child whose question is in flight, '' when idle
  input: '',
  /* Set for exactly one repaint whenever a new message is added or the
     panel is opened, and it is the only thing allowed to move where
     she is reading. Every other repaint puts the conversation back
     where it was. */
  stick: false,
  threads: {},      // childId -> [ { who: 'you' | 'willow', text, sources: [], kind } ]
  ai: null,         // the model handle, once loaded
  loading: null,    // the in flight load promise
  ready: false,
  failed: false,
  usedToday: 0,
  usedDate: '',
  /* The last real failure, kept so Settings can show it. Memory only:
     it describes this device at this moment and is worthless tomorrow. */
  lastError: '',
};

/* One conversation per child rather than one for the whole app.
   Everything else in here is scoped to the active child, and a single
   shared thread meant switching from one kid to another carried the
   first one's turns into the second one's questions: ask about
   Hartlee's bedtime, switch to Stetson, ask "what about at naps", and
   the model is still thinking about a twelve year old. The threads are
   deliberately memory only. A conversation is a thing you are in the
   middle of, not a record to keep, and the questions people ask her
   are the last thing that should be sitting in a saved file. */
function willowThreadKey() {
  const k = activeChild();
  return (k && k.id) ? String(k.id) : '_none';
}

function willowThread(key) {
  const id = key || willowThreadKey();
  if (!willow.threads[id]) willow.threads[id] = [];
  return willow.threads[id];
}

/* A child who is gone takes her conversation with her. */
function willowForget(id) {
  if (id && willow.threads[String(id)]) delete willow.threads[String(id)];
}

function willowCountToday() {
  const today = todayKey();
  if (willow.usedDate !== today) { willow.usedDate = today; willow.usedToday = 0; }
  return willow.usedToday;
}

/* The Firebase AI Logic SDK. The key never comes near this file: the
   request goes to Google's proxy, which holds it. That is the whole
   reason for using this rather than calling Gemini directly, where the
   key would sit in the page source for anyone to read. */
async function willowLoad() {
  if (willow.ai) return willow.ai;
  if (willow.loading) return willow.loading;
  willow.loading = (async () => {
    const v = FIREBASE_SDK_VERSION;
    const { app } = await loadFirebase();
    const aiMod = await import(`https://www.gstatic.com/firebasejs/${v}/firebase-ai.js`);
    const ai = aiMod.getAI(app, { backend: new aiMod.GoogleAIBackend() });
    willow.ai = aiMod.getGenerativeModel(ai, {
      model: WILLOW_MODEL,
      systemInstruction: willowSystemPrompt(),
    });
    willow.ready = true;
    return willow.ai;
  })().catch((err) => {
    willow.loading = null;
    willow.failed = true;
    throw err;
  });
  return willow.loading;
}

/* One line about who we are talking about, so she can use the name and
   the age rather than saying "your child" eleven times. */
function willowChildLine(c) {
  const k = activeChild();
  if (!k || !k.name) return '';
  const bits = [k.name];
  if (c.summary && c.summary.label) bits.push(c.summary.label);
  if (state.lenses && state.lenses.length) {
    bits.push('support lenses on: ' + getLenses(state.lenses).map((l) => l.label).join(', '));
  }
  return bits.join(', ');
}

/* Her cycle, in a sentence, so a question such as "is it normal that my
   period was late this month" is answered from her own logged dates
   rather than from a textbook average. Nothing is sent when she has not
   logged anything. */
function willowMotherLine() {
  const bits = [];

  /* Who she is to her children, so Willow never addresses an adoptive
     father as though he gave birth. */
  const sit = situation();
  const roleLabels = (sit.roles || []).map((r) => {
    const m = PARENT_ROLES.filter((x) => x.id === r)[0];
    return m ? m.label : '';
  }).filter(Boolean);
  if (roleLabels.length) bits.push('She is: ' + roleLabels.join(', ') + '.');
  /* What the child calls them, and which pronoun to use. Without this
     Willow wrote to everybody as she, including the grandfather and
     the adoptive dad. */
  const careLine = caretakerLine(store.parent);
  if (careLine) bits.push(careLine);
  if (!gaveBirthRecently()) bits.push('She did not give birth recently, so nothing about recovery '
    + 'from a birth applies to her unless she raises it.');

  /* Her cycle, when she has logged any of it. */
  const list = periods();
  const info = list.length ? cycleInfoNow() : null;
  if (info) bits.push(cycleForWillow(list, info, cycleStats(list)));

  /* The last week of her own logs, so a question about how she has been
     is answered from what she actually recorded. */
  const since = Date.now() - 1000 * 60 * 60 * 24 * 7;
  const recent = momLogs().filter((l) => new Date(l.at).getTime() >= since);
  if (recent.length) {
    const counts = {};
    recent.forEach((l) => {
      const t = anyLogType(l.typeId);
      const label = t ? t.label : l.typeId;
      counts[label] = (counts[label] || 0) + 1;
    });
    bits.push('In the last week she logged: '
      + Object.keys(counts).map((k) => k.toLowerCase() + ' x' + counts[k]).join(', ') + '.');
  }

  /* And how she said the last few days went. */
  const ci = momCheckins();
  const days = Object.keys(ci).sort().reverse().slice(0, 3);
  if (days.length) {
    bits.push('Her last check ins: ' + days.map((d) => {
      const v = ci[d] || {};
      return d + ' ' + MOM_CHECKIN.rows.map((r) => v[r.id]).filter(Boolean).join('/');
    }).join('; ') + '.');
  }

  if (!bits.length) return '';
  return bits.join(' ') + ' '
    + (info ? CYCLE_WILLOW_BRIEF + ' ' : '')
    + 'Use any of this only if the question is about her. Never read her logs back at her '
    + 'unprompted, never comment on weight or a number moving, and never diagnose.';
}

function willowSay(who, text, sources, kind, key) {
  willowThread(key).push({ who: who, text: text, sources: sources || [], kind: kind || '' });
  /* A new message is the one and only time the conversation should
     move on its own. Every other repaint leaves her exactly where she
     was reading. See the willow slot in render(). */
  willow.stick = true;
}

async function willowAsk(question) {
  const q = String(question || '').trim();
  if (!q || willow.busyKey) return;
  /* Pinned once, here. If she switches children while an answer is in
     flight, the answer still belongs to the child who was asked about,
     and it lands back in that thread rather than in front of a parent
     who is now looking at somebody else. */
  const key = willowThreadKey();
  willowSay('you', q, [], '', key);
  willow.input = '';

  /* Gate one and two. No network, no model, no waiting. */
  const stop = willowStopReason(q);
  if (stop) {
    willowSay('willow', '', [], stop, key);
    render();
    return;
  }

  if (willowCountToday() >= WILLOW_DAILY_LIMIT) {
    willowSay('willow', 'That is a lot of questions for one day, and I am going to stop here so this '
      + 'stays affordable to run. Everything in the app is still there to read, and I will be back '
      + 'tomorrow.', [], 'limit', key);
    render();
    return;
  }

  willow.busyKey = key;
  render();

  const c = ctx();
  /* Retrieval is now a suggestion rather than a gate. Nothing matching
     used to end the conversation, which is exactly the wrong answer to
     "I feel like I am failing at this", a sentence no search index has
     ever had a good entry for. */
  const hits = askSearch(q, c).map((r) => r.item);

  try {
    const model = await willowLoad();
    /* A chat rather than a series of unrelated questions. This is most
       of what made her feel like a search box: every message used to
       arrive with no memory of the one before it, so a parent could not
       say "what about at naps?" and be understood. */
    const history = willowHistory(willowThread(key).slice(0, -1), 10);
    const chat = model.startChat({ history: history });
    const res = await chat.sendMessage(willowPrompt(q, hits.slice(0, 4), willowChildLine(c), willowMotherLine()));

    /* A response the model refused to give comes back looking almost
       like a normal one, with the reason tucked away and text() set to
       throw. Read the refusal FIRST, or the throw arrives in the catch
       below with nothing on it to identify itself. */
    const resp = res && res.response;
    const blocked = resp && ((resp.promptFeedback && resp.promptFeedback.blockReason)
      || (resp.candidates && resp.candidates[0] && resp.candidates[0].finishReason
          && ['SAFETY', 'BLOCKLIST', 'PROHIBITED_CONTENT', 'RECITATION', 'SPII']
               .indexOf(resp.candidates[0].finishReason) !== -1
          && resp.candidates[0].finishReason));
    if (blocked) {
      willow.lastError = 'blocked: ' + blocked;
      willowSay('willow', WILLOW.wouldNotAnswer, [], 'failed', key);
      willow.busyKey = '';
      render();
      return;
    }

    const raw = resp && typeof resp.text === 'function' ? resp.text() : String(res || '');
    const split = willowSplitSources(raw);
    /* Only entries that were actually offered can be linked, whatever
       the model wrote on that line. */
    const byId = {};
    hits.forEach((h) => { byId[h.id] = h; });
    /* Only what she said she used, and only if it was really offered.
       An answer she wrote from her own knowledge gets no links, rather
       than links to whatever happened to rank highest. */
    const used = split.ids.map((id) => byId[id]).filter(Boolean);
    willow.usedToday = willowCountToday() + 1;
    willowSay('willow', split.body || WILLOW.failed, used, '', key);
  } catch (err) {
    /* Different failures have different fixes, so they get different
       sentences. Telling somebody to try again in a moment, when the
       real answer is that a key was never pasted in, wastes their
       evening on a problem no amount of retrying will move.

       AND THE ONE THAT SENT ME ROUND IN CIRCLES: everything that did
       not match a pattern used to become "something went wrong",
       which is the least useful sentence in the app. The real reason
       was thrown away, so there was nothing to look at. It is kept
       now, and Settings shows it. */
    willow.lastError = willowErrorDetail(err);
    const code = willow.lastError;
    let message;
    if (/app.?check|401|unauthenticated|recaptcha/i.test(code)) message = WILLOW.notVerified;
    else if (/api-not-enabled|not been used|SERVICE_DISABLED|403|permission|consumer/i.test(code)) message = WILLOW.notReady;
    /* Out of quota is not a broken app and should never be described
       as one. It is a billing page, or tomorrow. */
    /* Credit before quota, because a depleted balance also arrives as a
       429 and the two need opposite answers: one you wait out, the
       other you pay. */
    else if (/prepayment|credits? (are |is )?depleted|billing#prepay|insufficient (funds|credit)/i.test(code)) {
      message = WILLOW.outOfCredit;
    }
    else if (/429|quota|RESOURCE_EXHAUSTED|rate.?limit/i.test(code)) message = WILLOW.outOfQuota;
    /* The model refused rather than failed. Common on anything that
       sounds medical, which in a parenting app is most questions worth
       asking, so it gets its own honest answer rather than a shrug. */
    else if (/SAFETY|blocked|block.?reason|PROHIBITED|RECITATION/i.test(code)) message = WILLOW.wouldNotAnswer;
    else if (/offline|network|Failed to fetch|NetworkError|ERR_/i.test(code)) message = WILLOW.noNetwork;
    else if (!willow.ready) message = WILLOW.notReady;
    else message = WILLOW.failed;
    willowSay('willow', message, [], 'failed', key);
  }
  willow.busyKey = '';
  render();
}

/* Everything an error is willing to tell us, flattened into one line.
   Firebase wraps its failures, so the useful part is often two levels
   down in `cause` or in `customData`, and the top level says only
   "error". */
function willowErrorDetail(err) {
  if (!err) return 'unknown';
  const bits = [];
  const add = (v) => { const t = String(v == null ? '' : v).trim(); if (t && bits.indexOf(t) === -1) bits.push(t); };
  add(err.code);
  add(err.name);
  add(err.message);
  add(err.status);
  if (err.customData) { try { add(JSON.stringify(err.customData)); } catch (e) {} }
  let cause = err.cause;
  let depth = 0;
  while (cause && depth < 3) {
    add(cause.code); add(cause.message); add(cause.status);
    cause = cause.cause; depth += 1;
  }
  if (!bits.length) { try { add(JSON.stringify(err)); } catch (e) { add(String(err)); } }
  return bits.join(' | ').slice(0, 600);
}

function willowBubble() {
  if (!hasAccess()) return '';
  if (willow.open) return '';
  return `
  <button class="willowdot" data-willow="open" aria-label="Ask ${esc(WILLOW.name)}">
    <span class="willowdot-leaf">${icon('leaf', 21, '#fff')}</span>
    <span class="willowdot-name">${esc(WILLOW.name)}</span>
  </button>`;
}

function willowSourceRow(s) {
  const attrs = 'data-go="' + esc(s.go) + '" data-id="' + esc(s.id) + '"'
    + (s.sub ? ' data-asksub="' + esc(s.sub[0]) + '" data-asksubval="' + esc(s.sub[1]) + '"' : '');
  return `<button class="wsrc" ${attrs}>${icon('chev', 12, 'var(--deep)')} ${esc(s.title)}</button>`;
}

/* The three answers she is never allowed to write herself. Each one
   says why it is refusing, then hands over the thing that is actually
   useful: a number to call, and where it came from. */

function willowPhoneRow(l) {
  /* Picking a number out of prose is fiddlier than it looks. The
     maternal hotline is written "1-833-TLC-MAMA, 1-833-852-6262", and
     a naive match stops dead at the T and dials 1833. So: take every
     run of digits and punctuation, keep the one with the most actual
     digits, and only trust it if it is a real length. */
  const runs = String(l.contact || '').match(/[\d][\d\s().\-]*\d/g) || [];
  const best = runs
    .map((r) => r.replace(/[^\d]/g, ''))
    .sort((a, b) => b.length - a.length)[0] || '';
  const dial = (best.length >= 10 || best.length === 3) ? 'tel:' + best : null;
  return `
  <div style="padding:9px 0;border-top:1px solid rgba(138,90,74,.25)">
    <p style="margin:0;font-size:13px;font-weight:600;color:#7A4E40">${esc(l.name)}</p>
    <a href="${dial || esc(l.url)}" ${dial ? '' : 'target="_blank" rel="noopener noreferrer"'}
       style="font-size:18px;font-weight:600;color:#A85A44;text-decoration:none">${esc(l.contact)}</a>
    ${l.detail ? `<p class="tiny" style="margin-top:2px;color:#8A5A4A">${esc(l.detail)}</p>` : ''}
    <a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer"
       class="tiny" style="color:#8A5A4A;text-decoration:underline">Their website</a>
  </div>`;
}

function willowEmergencyBlock() {
  const g = WILLOW_GATES.emergency;
  return `
  <div class="wcard urgent">
    <p class="eyebrow" style="color:#A85A44">${esc(g.title)}</p>
    <p class="bodytext" style="margin-top:5px;color:#7A4E40">${esc(g.lead)}</p>
    <a href="tel:911" class="wdial">Call 911</a>
    <p class="tiny" style="margin-top:10px;color:#8A5A4A;font-weight:600">Any of these is 911, now</p>
    <ul class="dlist warn" style="margin-top:5px">
      ${ALWAYS_EMERGENCY.items.slice(0, 4).map((t) => `<li>${esc(t)}</li>`).join('')}
    </ul>
    <div style="margin-top:8px">
      ${willowPhoneRow({ name: 'Poison Control', contact: '1-800-222-1222',
        detail: 'If they swallowed something. 24 hours a day, and call before trying anything at home.',
        url: 'https://www.poison.org/' })}
    </div>
    <p class="tiny" style="margin-top:9px;color:#8A5A4A">${esc(g.after)}</p>
  </div>`;
}

function willowCrisisBlock() {
  const g = WILLOW_GATES.crisis;
  /* 988 goes first here regardless of where it sits in the data, because
     it is the one somebody may be about to need. */
  const lines = MATERNAL_SUPPORT_LINES.slice().sort((a, b) => (a.id === '988' ? -1 : b.id === '988' ? 1 : 0));
  return `
  <div class="wcard urgent">
    <p class="eyebrow" style="color:#A85A44">${esc(g.title)}</p>
    <p class="bodytext" style="margin-top:5px;color:#7A4E40">${esc(g.lead)}</p>
    <a href="tel:988" class="wdial">Call or text 988</a>
    <div style="margin-top:6px">${lines.map(willowPhoneRow).join('')}</div>
    <p class="tiny" style="margin-top:10px;color:#8A5A4A">${esc(g.after)}</p>
  </div>`;
}

function willowDosingBlock() {
  const g = WILLOW_GATES.dosing;
  return `
  <div class="wcard urgent">
    <p class="eyebrow" style="color:#A85A44">${esc(g.title)}</p>
    <p class="bodytext" style="margin-top:5px;color:#7A4E40">${esc(g.lead)}</p>
    <p class="bodytext" style="margin-top:9px;color:#7A4E40">${esc(g.after)}</p>
    <button class="btn" style="margin-top:11px" data-go="log" data-id="medication">
      Log a medicine and see when the next one is due
    </button>
    <div style="margin-top:10px">
      ${willowPhoneRow({ name: 'Poison Control', contact: '1-800-222-1222',
        detail: g.poison, url: 'https://www.poison.org/' })}
    </div>
    <div style="margin-top:10px;padding-top:9px;border-top:1px solid rgba(138,90,74,.25)">
      <p class="tiny" style="margin-bottom:5px;color:#8A5A4A;font-weight:600">Where to read it properly</p>
      ${g.sources.map((sc) => `
        <a href="${esc(sc.url)}" target="_blank" rel="noopener noreferrer"
           class="tiny" style="display:block;padding:3px 0;color:#A85A44;text-decoration:underline">
          ${esc(sc.org)}: ${esc(sc.label)}
        </a>`).join('')}
    </div>
  </div>`;
}

/* -----------------------------------------------------------------
   BIRTHDAYS

   An app that knows every date in the house should be the thing that
   remembers. It appears once on the day, for the parent and for each
   child whose birthday it is, and then it gets out of the way. Not a
   banner that sits there all day, not a thing you have to hunt for,
   and not a thing that comes back every time the app is opened between
   the first feed and bedtime.

   The parent's card is written differently from a child's on purpose.
   Everybody says happy birthday to the kids.
   ----------------------------------------------------------------- */

/* Whose birthday is today, and who has not been wished yet this year. */
function birthdaysToday() {
  const out = [];
  const p = store.parent || {};
  const seen = store.birthdaySeen || {};

  if (p.birthday && isBirthdayToday(p.birthday)) {
    const key = birthdaySeenKey('parent');
    if (!seen[key]) {
      out.push({
        key: key,
        isParent: true,
        name: (p.name || '').split(' ')[0] || '',
        years: yearsOldToday(p.birthday),
      });
    }
  }

  (store.children || []).forEach((k) => {
    if (!k.birthday || !isBirthdayToday(k.birthday)) return;
    const key = birthdaySeenKey(k.id);
    if (seen[key]) return;
    out.push({
      key: key,
      isParent: false,
      id: k.id,
      name: k.name || 'your little one',
      years: yearsOldToday(k.birthday),
    });
  });

  return out;
}

/* Seeded on the date so the line holds still if the screen repaints
   while she is reading it. */
function birthdayLine(who) {
  const lines = who.isParent ? BIRTHDAY_PARENT_LINES : BIRTHDAY_CHILD_LINES;
  const seed = String(who.key) + String(who.name);
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return lines[h % lines.length];
}

function birthdayAgeLine(who) {
  if (who.years === null || who.years === undefined) return '';
  if (who.isParent) return 'Another year around.';
  if (who.years === 0) return 'One whole year old today.';
  return birthdayOrdinal(who.years) + ' birthday.';
}

function birthdayOverlay() {
  if (!hasAccess()) return '';
  const list = birthdaysToday();
  if (!list.length) return '';

  const card = (who) => `
    <div class="bdayone">
      <span class="bdayleaf">${icon('leaf', 26, '#fff')}</span>
      <p class="bdayname">Happy birthday${who.name ? ', ' + esc(who.name) : ''}</p>
      ${birthdayAgeLine(who) ? `<p class="bdayage">${esc(birthdayAgeLine(who))}</p>` : ''}
      <p class="bdayline">${esc(birthdayLine(who))}</p>
    </div>`;

  return `
  <div class="bdaywrap" role="dialog" aria-label="Birthday">
    <canvas class="bdayfetti" id="bdayfetti" aria-hidden="true"></canvas>
    <div class="bdaycard">
      ${list.map(card).join('<div class="bdayrule"></div>')}
      <button class="bdaybtn" data-bday="close">
        ${list.length > 1 ? 'Lovely, thank you' : 'Thank you'}
      </button>
      ${list.some((w) => !w.isParent) ? `
        <button class="bdaylater" data-bday="open" data-id="${esc((list.find((w) => !w.isParent) || {}).id || '')}">
          Open their profile
        </button>` : ''}
    </div>
  </div>`;
}

/* -----------------------------------------------------------------
   CONFETTI AND BALLOONS

   One canvas and one loop drawing both, rather than a few hundred
   animated divs, because this runs on whatever phone a parent happens
   to be holding at six in the morning and it should not make the fan
   come on.

   Everything comes down the screen. Confetti tumbles, balloons drift
   with a slow sway and a string that trails behind them. The loop runs
   for a little under fifteen seconds and then stops itself: a
   celebration that never ends is just a battery drain.
   ----------------------------------------------------------------- */

const bdayArt = { raf: null, canvas: null, started: 0 };

const BDAY_COLORS = ['#7C9A72', '#A8C09A', '#E8B4A0', '#F0D9A8', '#C9A8D4', '#F2F0E6', '#D98E73'];

function bdayStopArt() {
  if (bdayArt.raf) cancelAnimationFrame(bdayArt.raf);
  bdayArt.raf = null;
  bdayArt.canvas = null;
}

function bdayStartArt() {
  const cv = document.getElementById('bdayfetti');
  if (!cv) { bdayStopArt(); return; }
  /* Already running on this exact canvas, so leave it alone rather than
     restarting the burst every time something repaints. */
  if (bdayArt.canvas === cv && bdayArt.raf) return;
  bdayStopArt();

  let reduce = false;
  try {
    reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (err) { reduce = false; }
  if (reduce) return;

  const ctxc = cv.getContext && cv.getContext('2d');
  if (!ctxc) return;

  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const rect = cv.getBoundingClientRect();
  const W = Math.max(1, Math.round(rect.width));
  const H = Math.max(1, Math.round(rect.height));
  cv.width = Math.round(W * dpr);
  cv.height = Math.round(H * dpr);
  ctxc.scale(dpr, dpr);

  const rand = (a, b) => a + Math.random() * (b - a);

  /* Enough to feel like a celebration, few enough to stay smooth on a
     phone. Scaled to the width so a laptop is not sparse. */
  const pieceCount = Math.round(Math.min(150, Math.max(60, W / 5)));
  const pieces = [];
  for (let i = 0; i < pieceCount; i++) {
    pieces.push({
      x: rand(0, W),
      /* Some of it starts already on screen. A card that appears with an
         empty sky and confetti arriving a second later does not read as
         a pop, it reads as a loading delay. */
      y: rand(-H, H * 0.4),
      w: rand(5, 11),
      h: rand(7, 15),
      vy: rand(55, 135),
      vx: rand(-22, 22),
      spin: rand(-3.4, 3.4),
      a: rand(0, Math.PI * 2),
      c: BDAY_COLORS[Math.floor(Math.random() * BDAY_COLORS.length)],
    });
  }

  const balloonCount = W < 520 ? 6 : 10;
  const balloons = [];
  for (let i = 0; i < balloonCount; i++) {
    const r = rand(17, 27);
    balloons.push({
      x: rand(r + 8, W - r - 8),
      /* Balloons start below the fold and rise, which is what balloons
         do. A few begin already on screen so the card opens with some
         of them mid climb rather than with an empty sky. */
      y: rand(H * 0.25, H * 2.1),
      r: r,
      vy: rand(26, 48),
      sway: rand(11, 26),
      phase: rand(0, Math.PI * 2),
      speed: rand(0.5, 1.05),
      c: BDAY_COLORS[Math.floor(Math.random() * BDAY_COLORS.length)],
    });
  }

  const start = Date.now();
  let prev = start;
  bdayArt.canvas = cv;
  bdayArt.started = start;

  const frame = () => {
    if (bdayArt.canvas !== cv || !cv.isConnected) { bdayStopArt(); return; }
    const now = Date.now();
    const dt = Math.min(0.05, (now - prev) / 1000);
    prev = now;
    const life = (now - start) / 1000;

    ctxc.clearRect(0, 0, W, H);

    /* The last three seconds fade out rather than stopping mid air. */
    const fade = life > 11.5 ? Math.max(0, 1 - (life - 11.5) / 3) : 1;
    ctxc.globalAlpha = fade;

    balloons.forEach((b) => {
      /* Up, while the confetti comes down. */
      b.y -= b.vy * dt;
      b.phase += b.speed * dt;
      const bx = b.x + Math.sin(b.phase) * b.sway;
      /* Once the string has cleared the top, send it back below with a
         new colour and a new lane, so the stream never looks like the
         same eight balloons on a loop. */
      if (b.y + b.r * 3 < 0) {
        b.y = H + b.r + rand(0, H * 0.7);
        b.x = rand(b.r + 8, W - b.r - 8);
        b.c = BDAY_COLORS[Math.floor(Math.random() * BDAY_COLORS.length)];
      }

      /* The string first, so the balloon sits on top of where it joins. */
      ctxc.beginPath();
      ctxc.moveTo(bx, b.y + b.r * 1.22);
      ctxc.quadraticCurveTo(bx + Math.sin(b.phase + 1) * 9, b.y + b.r * 2.1,
        bx + Math.sin(b.phase + 2) * 5, b.y + b.r * 2.9);
      ctxc.strokeStyle = 'rgba(255,255,255,.55)';
      ctxc.lineWidth = 1.1;
      ctxc.stroke();

      ctxc.beginPath();
      ctxc.ellipse(bx, b.y, b.r * 0.82, b.r, 0, 0, Math.PI * 2);
      ctxc.fillStyle = b.c;
      ctxc.fill();

      /* The knot. Small, but without it a balloon reads as an egg. */
      ctxc.beginPath();
      ctxc.moveTo(bx - 3, b.y + b.r * 0.98);
      ctxc.lineTo(bx + 3, b.y + b.r * 0.98);
      ctxc.lineTo(bx, b.y + b.r * 1.24);
      ctxc.closePath();
      ctxc.fillStyle = b.c;
      ctxc.fill();

      /* One soft highlight, which is what makes it look inflated. */
      ctxc.beginPath();
      ctxc.ellipse(bx - b.r * 0.29, b.y - b.r * 0.34, b.r * 0.17, b.r * 0.26, -0.5, 0, Math.PI * 2);
      ctxc.fillStyle = 'rgba(255,255,255,.34)';
      ctxc.fill();
    });

    pieces.forEach((p) => {
      p.y += p.vy * dt;
      p.x += p.vx * dt;
      p.a += p.spin * dt;
      if (p.y - p.h > H) { p.y = -p.h; p.x = rand(0, W); }
      ctxc.save();
      ctxc.translate(p.x, p.y);
      ctxc.rotate(p.a);
      /* Squashing the height as it turns is what sells a flat piece of
         paper tumbling rather than a rectangle spinning on the spot. */
      ctxc.fillStyle = p.c;
      ctxc.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.a * 1.7)));
      ctxc.restore();
    });

    ctxc.globalAlpha = 1;

    if (life > 14.5) { ctxc.clearRect(0, 0, W, H); bdayStopArt(); return; }
    bdayArt.raf = requestAnimationFrame(frame);
  };

  bdayArt.raf = requestAnimationFrame(frame);
}

/* Dismissing marks everybody shown, so a house with twins does not get
   the card again an hour later for the second one. */
function birthdayDismiss() {
  bdayStopArt();
  if (!store.birthdaySeen) store.birthdaySeen = {};
  birthdaysToday().forEach((w) => { store.birthdaySeen[w.key] = true; });
  store.parentUpdatedAt = Date.now();
  flushStore();
}

/* NOTE ON THE INPUT AT THE BOTTOM: it carries no value attribute on
   purpose. With value="${willow.input}" baked in, the panel's markup
   changed on every keystroke, so render() saw a difference and rebuilt
   the whole panel, throwing away the box she was typing in. On a phone
   that drops the keyboard and breaks anything typed mid word. The
   value is set as a property after paint instead, in render(), so
   typing changes nothing about the markup and the box she is typing in
   is the same box the whole way through. */
function willowPanel() {
  if (!willow.open) return '';
  const key = willowThreadKey();
  const msgs = willowThread(key);
  const thinking = willow.busyKey === key;
  return `
  <div class="willowpanel" role="dialog" aria-label="Ask ${esc(WILLOW.name)}">
    <div class="whead">
      <span class="whead-av">${icon('leaf', 17, '#fff')}</span>
      <span class="grow">
        <span class="whead-name">${esc(WILLOW.name)}</span>
        ${WILLOW.tagline ? `<span class="whead-sub">${esc(WILLOW.tagline)}</span>` : ''}
      </span>
      <button class="wclose" data-willow="close" aria-label="Close">${icon('plus', 18, 'var(--muted)')}</button>
    </div>

    <div class="wbody" id="wbody">
      <div class="wcard">
        <p class="bodytext">${esc(WILLOW.greeting)}</p>
        <p class="tiny" style="margin-top:8px">${esc(WILLOW.standing)}</p>
      </div>

      ${!msgs.length && WILLOW.starters.length ? `
      <p class="tiny" style="margin:4px 2px 6px">Things people ask</p>
      <div class="chips" style="gap:6px">
        ${WILLOW.starters.map((s) => `<button class="chip" data-willow="try" data-q="${esc(s)}">${esc(s)}</button>`).join('')}
      </div>` : ''}

      ${msgs.map((m) => {
        if (m.who === 'you') return `<div class="wmsg you">${esc(m.text)}</div>`;
        if (m.kind === 'emergency') return willowEmergencyBlock();
        if (m.kind === 'crisis') return willowCrisisBlock();
        if (m.kind === 'dosing') return willowDosingBlock();
        return `
        <div class="wmsg her">
          ${'<p>' + esc(m.text).replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>') + '</p>'}
          ${m.sources && m.sources.length ? `
            <div class="wsrcs">
              <span class="tiny" style="display:block;margin-bottom:5px">Where this came from</span>
              ${m.sources.map(willowSourceRow).join('')}
            </div>` : ''}
        </div>`;
      }).join('')}

      ${thinking ? `<div class="wmsg her thinking"><span></span><span></span><span></span></div>` : ''}
    </div>

    <div class="wfoot">
      <input id="willowIn" class="winput" type="text" autocomplete="off"
        placeholder="Ask ${esc(WILLOW.name)} something"
        ${thinking ? 'disabled' : ''} />
      <button class="wsend" data-willow="send" aria-label="Send" ${thinking ? 'disabled' : ''}>
        ${icon('chev', 17, '#fff')}
      </button>
    </div>
  </div>`;
}

/* -----------------------------------------------------------------
   BOOT

   Last line of the file on purpose. Everything above is either a
   function declaration, which hoists, or a top level const, which does
   not: a const is unreadable until the line that declares it has run.
   Starting the app from the middle of the file meant the first screen
   painted could reach a const further down and throw a bare
   ReferenceError into a blank page. Starting from the bottom means
   every name in the file already exists by the time anything renders.
   Please leave this here.
   ----------------------------------------------------------------- */
loadStore();
/* Before the first render and before anything is written anywhere: the
   invite code comes out of the address bar into memory, and the address
   is rewritten without it. A single use credential should not sit in
   somebody's history. */
inviteTake();
initControls();
restoreSession();
render();

/* Ask once, a few seconds in, so it never competes with the first
   paint or with signing in. */
setTimeout(() => { try { checkForUpdate(true); } catch (err) {} }, 4000);

/* AND THEN IT KEEPS ASKING.

   This used to run four seconds after opening, and after that only
   when the tab went away and came back. Which meant a tab left open on
   a desk all afternoon asked exactly once, while it was still current,
   and then never again. She sat in front of a version from twenty
   minutes earlier twice in one day, both times concluding the work had
   vanished, because nothing in the app ever told her otherwise.

   So it now also asks on a timer, and on the two events that mean a
   browser has probably been asleep: getting focus back, and the
   network coming back. The ask itself is a range request for two
   kilobytes, so doing it every few minutes costs effectively nothing
   even on a phone. */
if (typeof setInterval === 'function') {
  setInterval(() => { try { checkForUpdate(false); } catch (err) {} }, 180000);
}
if (typeof window !== 'undefined' && window.addEventListener) {
  window.addEventListener('focus', () => { try { checkForUpdate(false); } catch (err) {} });
  window.addEventListener('online', () => { try { checkForUpdate(true); } catch (err) {} });
}

/* THE SERVICE WORKER.

   Registered last, and on purpose after everything else has started,
   because it is the least urgent thing in the file. It is what lets
   the app be installed on a home screen and what lets it open with no
   signal.

   IT IS NETWORK FIRST. Look at sw.js for why, but the short version is
   that a cache first worker would turn the stale copy problem into a
   permanent one, and that problem has already cost a real afternoon.

   It only registers over https or on localhost, which means the file
   protocol and the odd preview host quietly skip it rather than
   throwing. */
if (typeof navigator !== 'undefined' && navigator.serviceWorker
  && (location.protocol === 'https:' || location.hostname === 'localhost'
    || location.hostname === '127.0.0.1')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((reg) => {
      /* A waiting worker means a newer one is sitting behind the one
         currently running. Tell it to take over now rather than on some
         future full quit, since the page itself is fetched fresh either
         way and there is nothing to lose. */
      if (reg.waiting) reg.waiting.postMessage('skip-waiting');
      reg.addEventListener('updatefound', () => {
        const w = reg.installing;
        if (!w) return;
        w.addEventListener('statechange', () => {
          if (w.state === 'installed' && reg.waiting) reg.waiting.postMessage('skip-waiting');
        });
      });
    }).catch(() => {
      /* A browser that will not have it, a private window, or a host
         serving from a path we do not control. The app works exactly as
         it did before service workers existed. */
    });
  });
}

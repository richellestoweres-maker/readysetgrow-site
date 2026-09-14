/* =================================================================
   Ready Set Grow: browser prototype
   Drives the real data modules from the repo. No mock content.
   ================================================================= */

const ICON = {
  check:'<path d="M4.5 12.5 9.5 17.5 19.5 6.5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
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
  // Desktop has two wide gutters and room for six. The phone has room
  // for three. Ask for six either way and let the layout use what fits,
  // since the picker guarantees they are all different.
  // Twelve, because a wide window has two columns of gutter each side
  // and six leaves most of it bare. The layout uses what fits.
  const picked = pickMarginLines(seed, 16);
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
  return `
  <div class="affirm${o.cls ? ' ' + o.cls : ''}" style="${o.box || ''}">
    ${o.noShape ? '' : `<svg viewBox="0 0 190 150" preserveAspectRatio="none" aria-hidden="true">
      <path d="M22 8 C74 -10 150 2 172 44 C192 82 168 128 118 142 C68 156 8 132 2 88 C-3 52 2 20 22 8 Z"
        fill="${o.fill || '#E9EBDF'}"/></svg>`}
    <span style="${o.text || ''}">${lines}</span>
    ${o.heart === false ? '' : `<span class="heart" style="${o.heartPos || ''}">&#9829;</span>`}
  </div>`;
}

/* Leaf sprigs down both edges, as in every mockup. On desktop they move
   out to the edges of the reading column instead of the phone frame. */
function sprigsDesktop(sprig) {
  /* Four narrow columns of sprigs sitting in the gaps the affirmation
     shapes leave, two down each gutter. Kept narrow and hard against
     the edges so they read as a frame rather than as clutter. */
  return `
  <svg class="leafart" style="top:244px;left:0;width:78px;height:120px" viewBox="0 0 78 120" aria-hidden="true">
    ${sprig(30, 54, -22, 1.05, .85)}${sprig(14, 114, 10, .88, .65)}
  </svg>
  <svg class="leafart" style="top:494px;left:6px;width:78px;height:120px" viewBox="0 0 78 120" aria-hidden="true">
    ${sprig(24, 48, 14, .98, .8)}${sprig(44, 112, -16, .86, .62)}
  </svg>
  <svg class="leafart" style="top:302px;right:2px;width:78px;height:124px" viewBox="0 0 78 124" aria-hidden="true">
    ${sprig(48, 56, 16, 1.08, .85)}${sprig(28, 118, -12, .9, .66)}
  </svg>
  <svg class="leafart" style="top:552px;right:8px;width:78px;height:118px" viewBox="0 0 78 118" aria-hidden="true">
    ${sprig(52, 52, -18, 1, .8)}${sprig(30, 112, 12, .86, .62)}
  </svg>

  <svg class="leafart leafart-wide" style="top:378px;left:calc(50% - 620px);width:74px;height:116px"
    viewBox="0 0 74 116" aria-hidden="true">
    ${sprig(28, 52, 16, 1, .78)}${sprig(48, 110, -14, .86, .6)}
  </svg>
  <svg class="leafart leafart-wide" style="top:604px;left:calc(50% - 600px);width:74px;height:112px"
    viewBox="0 0 74 112" aria-hidden="true">
    ${sprig(44, 50, -20, .96, .74)}${sprig(24, 106, 10, .84, .58)}
  </svg>
  <svg class="leafart leafart-wide" style="top:288px;right:calc(50% - 616px);width:74px;height:118px"
    viewBox="0 0 74 118" aria-hidden="true">
    ${sprig(46, 54, -16, 1.02, .78)}${sprig(26, 112, 14, .86, .6)}
  </svg>
  <svg class="leafart leafart-wide" style="top:548px;right:calc(50% - 598px);width:74px;height:114px"
    viewBox="0 0 74 114" aria-hidden="true">
    ${sprig(26, 50, 18, .96, .74)}${sprig(46, 108, -12, .84, .58)}
  </svg>`;
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
    text: 'top:50px;left:50px;max-width:92px;font-size:14px;transform:rotate(-6deg)',
    heartPos: 'top:110px;left:56px',
  })}
  ${affirmation(a.midLeft, {
    box: 'top:352px;left:-52px;width:146px;height:120px', fill: '#EDEADF',
    text: 'top:32px;left:64px;max-width:76px;font-size:12.5px;transform:rotate(-7deg)',
    heartPos: 'top:98px;left:68px',
  })}
  ${affirmation(a.right, {
    box: 'top:368px;right:4px;width:118px;height:104px', noShape: true,
    text: 'top:12px;right:8px;max-width:76px;font-size:12.5px;text-align:right;transform:rotate(-6deg)',
    heartPos: 'top:84px;right:14px',
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
const AFFIRM_SPOTS = [
  // Phone. Three, hanging off the edges behind the content.
  { tier: 'mob', side: 'left',  x: '-54px', y: '86px',  w: 172, h: 138, fill: '#E9EBDF', tx: 'top:48px;left:60px;max-width:92px;font-size:13.5px;transform:rotate(-6deg)', hp: 'top:106px;left:66px' },
  { tier: 'mob', side: 'right', x: '-48px', y: '352px', w: 152, h: 124, fill: '#EDEADF', tx: 'top:34px;right:56px;max-width:80px;font-size:12.5px;text-align:right;transform:rotate(5deg)', hp: 'top:94px;right:62px' },
  { tier: 'mob', side: 'left',  x: '-44px', y: '600px', w: 154, h: 124, fill: '#E6EBDC', tx: 'top:40px;left:54px;max-width:84px;font-size:12.5px;transform:rotate(-5deg)', hp: 'top:98px;left:60px' },

  // Outer column, left. Four down the side.
  { tier: 'core',  side: 'left', x: '18px', y: '80px',  w: 162, h: 132, fill: '#E9EBDF', tx: 'top:44px;left:42px;max-width:92px;font-size:14px;transform:rotate(-6deg)', hp: 'top:100px;left:48px' },
  { tier: 'core',  side: 'left', x: '26px', y: '268px', w: 146, h: 120, fill: '#EDEADF', tx: 'top:32px;left:54px;max-width:78px;font-size:12.5px;transform:rotate(-7deg)', hp: 'top:92px;left:58px' },
  { tier: 'extra', side: 'left', x: '12px', y: '456px', w: 154, h: 124, fill: '#E6EBDC', tx: 'top:38px;left:44px;max-width:86px;font-size:13px;transform:rotate(-4deg)', hp: 'top:96px;left:50px' },
  { tier: 'extra', side: 'left', x: '24px', y: '632px', w: 148, h: 120, noShape: true, tx: 'top:14px;left:6px;max-width:126px;font-size:13px;transform:rotate(5deg)', hp: 'top:84px;left:12px' },

  // Outer column, right. The promise line owns the very top corner.
  { tier: 'core',  side: 'right', x: '18px', y: '168px', w: 148, h: 120, fill: '#EAECE0', tx: 'top:32px;right:22px;max-width:96px;font-size:13px;text-align:right;transform:rotate(5deg)', hp: 'top:90px;right:28px' },
  { tier: 'extra', side: 'right', x: '22px', y: '352px', w: 142, h: 116, noShape: true, tx: 'top:10px;right:6px;max-width:112px;font-size:13px;text-align:right;transform:rotate(-5deg)', hp: 'top:82px;right:12px' },
  { tier: 'extra', side: 'right', x: '14px', y: '520px', w: 150, h: 122, fill: '#EDEADF', tx: 'top:36px;right:20px;max-width:94px;font-size:12.5px;text-align:right;transform:rotate(6deg)', hp: 'top:94px;right:26px' },
  { tier: 'extra', side: 'right', x: '26px', y: '676px', w: 144, h: 116, fill: '#E9EBDF', tx: 'top:34px;right:22px;max-width:90px;font-size:12.5px;text-align:right;transform:rotate(-4deg)', hp: 'top:90px;right:28px' },

  // Inner column, anchored to the reading column.
  { tier: 'wide', side: 'left', x: 'calc(50% - 566px)', y: '140px', w: 170, h: 136, fill: '#EAECE0', tx: 'top:44px;left:44px;max-width:96px;font-size:13.5px;transform:rotate(-5deg)', hp: 'top:102px;left:50px' },
  { tier: 'wide', side: 'left', x: 'calc(50% - 550px)', y: '326px', w: 156, h: 124, noShape: true, tx: 'top:14px;left:8px;max-width:130px;font-size:13px;transform:rotate(4deg)', hp: 'top:86px;left:14px' },
  { tier: 'wide', side: 'left', x: 'calc(50% - 574px)', y: '504px', w: 164, h: 130, fill: '#EDEADF', tx: 'top:42px;left:40px;max-width:96px;font-size:13px;transform:rotate(-7deg)', hp: 'top:100px;left:46px' },
  { tier: 'wide', side: 'left', x: 'calc(50% - 556px)', y: '672px', w: 150, h: 120, fill: '#E6EBDC', tx: 'top:34px;left:44px;max-width:88px;font-size:12.5px;transform:rotate(6deg)', hp: 'top:92px;left:50px' },

  { tier: 'wide', side: 'right', x: 'calc(50% - 570px)', y: '96px',  w: 166, h: 132, fill: '#E6EBDC', tx: 'top:42px;right:26px;max-width:100px;font-size:13.5px;text-align:right;transform:rotate(6deg)', hp: 'top:100px;right:32px' },
  { tier: 'wide', side: 'right', x: 'calc(50% - 554px)', y: '284px', w: 158, h: 126, noShape: true, tx: 'top:14px;right:8px;max-width:132px;font-size:13px;text-align:right;transform:rotate(-4deg)', hp: 'top:88px;right:14px' },
  { tier: 'wide', side: 'right', x: 'calc(50% - 578px)', y: '470px', w: 162, h: 130, fill: '#EAECE0', tx: 'top:42px;right:24px;max-width:98px;font-size:13px;text-align:right;transform:rotate(5deg)', hp: 'top:100px;right:30px' },
  { tier: 'wide', side: 'right', x: 'calc(50% - 560px)', y: '650px', w: 152, h: 122, fill: '#EDEADF', tx: 'top:36px;right:22px;max-width:92px;font-size:12.5px;text-align:right;transform:rotate(-6deg)', hp: 'top:94px;right:28px' },
];

/* The y values in AFFIRM_SPOTS were tuned against a roughly 880px tall
   window while the background still scrolled with the content. Pinned to
   the viewport they have to stretch or squash with the window instead,
   or every spot below the fold would simply never be seen on a laptop.
   So the px is converted to a share of viewport height against that same
   reference, which keeps the spacing she approved and makes it fit any
   window. */
const AFFIRM_REF_HEIGHT = 880;

function affirmTop(y) {
  const px = parseFloat(String(y));
  if (!isFinite(px)) return `top:${y}`;
  const vh = (px / AFFIRM_REF_HEIGHT) * 100;
  return `top:${vh.toFixed(2)}vh`;
}

function desktopHeader(a) {
  const lines = a.all || [];
  const shapes = AFFIRM_SPOTS.map((sp, i) => affirmation(lines[i % lines.length], {
    box: `${sp.side}:${sp.x};${affirmTop(sp.y)};width:${sp.w}px;height:${sp.h}px`,
    fill: sp.fill,
    noShape: sp.noShape,
    cls: 'affirm-' + sp.tier,
    text: sp.tx,
    heartPos: sp.hp,
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
  w: 0,
  h: 0,
  scale: 1,
  x: 0,
  y: 0,
  wired: false,
};

const CROP_VIEW = 264;   // the square she is looking at, in CSS pixels

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
  crop.target = '';
  crop.wired = false;
  if (!quiet) render();
}

/* What she is looking at, turned into the 256 square that gets saved. */
function cropConfirm() {
  if (!crop.on) return;
  const target = crop.target;
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
    wakeTime: '06:30',
    napOverride: null,
    routineInclude: [],
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
  parent: { name: '', username: '', email: '', birthday: '', lastPeriod: '', cycleLength: '' },
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
  safetyTab: 'cpr',

  /* Profile screen drafts, so a half typed child does not vanish on
     a re render. */
  draftChildName: '',
  draftChildBday: '',
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

['parent', 'children', 'activeChildId', 'bagChecked', 'birthdaySeen', 'profileWho',
 'profileEdit', 'msEdit', 'ciEdit', 'ciOpen', 'photoBusy', 'photoError',
 'liftUsed', 'liftDate', 'pumpTab', 'pumpGoal',
 'pumpProblem', 'flangeMm', 'ppTab', 'ppStage', 'askQuery', 'askAsked',
 'tab', 'view', 'undGroup', 'lensBand', 'feedTab', 'safetyTab',
 'logDraft', 'draftChildName', 'draftChildBday'].forEach((key) => {
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
      birthdaySeen: store.birthdaySeen,
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
  }

  if (saved && Array.isArray(saved.children) && saved.children.length) {
    store.parent = Object.assign({ name: '', username: '', email: '', birthday: '', lastPeriod: '', cycleLength: '' }, saved.parent || {});
    store.parent.birthday = sanitizeStoredDate(store.parent.birthday, 0);
    store.parent.lastPeriod = sanitizeStoredDate(store.parent.lastPeriod, 0);
    // Fill in any field an older saved record is missing, so a profile
    // written by a previous version cannot crash a newer screen.
    store.children = saved.children.map((k) => Object.assign(normalizeChild(k), {
      birthday: sanitizeStoredDate(k.birthday, 2) || null,
    }));
    store.bagChecked = Array.isArray(saved.bagChecked) ? saved.bagChecked : [];
    /* Reopen whoever was open last. Three of the five tabs are about one
       child, so dropping back to the picker on every refresh would make
       the app feel like it forgot. With one child there is nothing to
       choose, so that one opens itself. */
    store.parentUpdatedAt = Number(saved.parentUpdatedAt) || 0;
    const was = saved.activeChildId;
    const stillThere = was && store.children.some((k) => k.id === was);
    store.activeChildId = stillThere ? was
      : (store.children.length === 1 ? store.children[0].id : null);
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

function buildPlan(c) {
  /* A screen called Today's Plan has to actually change today.
   *
   * The seed is the date plus this child's id, which gives three things
   * at once. It moves on at midnight, so a parent opening the app on
   * Tuesday does not get Monday back. Two children get different plans
   * on the same day, which matters in a house where one of them is
   * listening. And it holds still while somebody is reading it, because
   * the same seed always produces the same answer, so nothing reshuffles
   * under them when the screen redraws.
   *
   * None of this needs a server or an API key. It is arithmetic on the
   * date. What it cannot do is invent an activity that is not in the
   * library, which is a content problem rather than a code one. */
  const kid = activeChild();
  const seed = hashSeed(todayKey() + ':' + (kid ? kid.id : 'none'));

  /* Rotate the list by the seed before choosing, rather than always
     taking the first match. Same candidates, different starting point
     each day. */
  const rotate = (list, offset) => {
    if (!list.length) return list;
    const n = offset % list.length;
    return list.slice(n).concat(list.slice(0, n));
  };

  const used = new Set();
  const pickFrom = (fn, offset) => {
    const candidates = rotate(c.activities.filter((a) => fn(a) && !used.has(a.id)), offset);
    const chosen = candidates[0] || null;
    if (chosen) used.add(chosen.id);
    return chosen;
  };
  const anyLeft = (offset) => {
    const rest = rotate(c.activities.filter((a) => !used.has(a.id)), offset);
    const chosen = rest[0] || null;
    if (chosen) used.add(chosen.id);
    return chosen;
  };

  const morning = pickFrom(
    (a) => a.skills.includes('regulation') || a.skills.includes('socialEmotional'), seed
  ) || anyLeft(seed);

  const learning = pickFrom(
    (a) => a.skills.some((sk) => ['cognitive', 'literacy', 'numeracy', 'language'].includes(sk)), seed + 3
  ) || anyLeft(seed + 3);

  const move = pickFrom(
    (a) => a.skills.includes('grossMotor') || a.setting === 'outdoor', seed + 7
  ) || anyLeft(seed + 7);

  const script = c.scripts.length ? c.scripts[seed % c.scripts.length] : null;
  const mins = c.months == null ? 10 : c.months < 12 ? 5 : c.months < 36 ? 10 : c.months < 72 ? 15 : 20;
  return { morning, learning, move, script, mins };
}

function screenPlan(c) {
  if (c.months == null) return emptyScreen('Add a birthday to see a plan.');
  const p = buildPlan(c);
  const focus = c.content[0];

  const item = (eyebrow, ic, title, text, btn, go) => `
    <div class="plan">
      <span class="picon">${icon(ic, 17)}</span>
      <div class="grow">
        <p class="eyebrow">${eyebrow}</p>
        <h3 class="h3">${esc(title)}</h3>
        <p class="tiny" style="margin-top:3px">${esc(text)}</p>
        ${btn ? `<button class="btn ghost sm" style="margin-top:9px" ${go}>${btn}</button>` : ''}
      </div>
    </div>`;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">Today's Plan</h1>
    <p class="sub">${esc(c.child.name)} &middot; ${esc(c.summary.label)}</p>
  </div>
  <div class="sc">
    ${focus ? `
    <div class="card leafy">
      <p class="eyebrow">Today's Development Focus</p>
      <h3 class="h3">${esc(focus.title)}</h3>
      <p class="bodytext" style="margin-top:5px">${esc(focus.summary)}</p>
    </div>` : ''}

    ${p.morning ? item('Morning Activity', 'sun', p.morning.title, p.morning.description, 'Let\'s do it', `data-go="activity" data-id="${esc(p.morning.id)}"`) : ''}
    ${p.learning ? item('Learning Moment', 'book', p.learning.title, p.learning.description, 'Try this', `data-go="activity" data-id="${esc(p.learning.id)}"`) : ''}

    ${item('Reading Time', 'book', `Read together for ${p.mins} minutes`, 'Ask what they think happens next. Questions build more language than reading straight through.', '', '')}

    ${p.move ? item('Outdoor / Movement', 'run', p.move.title, p.move.description, 'Get moving', `data-go="activity" data-id="${esc(p.move.id)}"`) : ''}

    ${p.script ? `
    <p class="sect">Parent Script</p>
    <div class="quote">
      <p class="sit">${esc(p.script.situation)}</p>
      <q>${esc(p.script.say)}</q>
      <p class="why">${esc(p.script.why)}</p>
    </div>` : ''}

    ${item('Evening Wind Down', 'moon', 'Gratitude and Good Night', 'Share one thing that went well, one feeling you noticed, and end with: tomorrow is a new day, and I am so proud of you.', '', '')}
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
    { id: 'profile', label: 'Profile', icon: 'user' },
    { id: 'settings', label: 'Settings', icon: 'gear' },
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
    state.feedTab, state.safetyTab, state.ppTab, state.pumpTab,
    state.undGroup, state.lensBand,
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
  /* Screens that only make sense inside one child. Reaching one with no
     child open sends you to the picker rather than to an empty screen. */
  const CHILD_SCOPED = ['milestones', 'activities', 'topics', 'understand', 'feeding',
    'safety', 'plan', 'sleep', 'development', 'checkins'];
  if (v && v.type === 'screen' && CHILD_SCOPED.indexOf(v.id) !== -1 && !activeChild()) {
    v = null; state.view = null; state.tab = 'home';
  }
  if (v && v.type === 'log' && !activeChild()) { v = null; state.view = null; state.tab = 'home'; }

  if (v && v.type === 'content') html = viewContent(c, v.id);
  else if (v && v.type === 'activity') html = viewActivity(c, v.id);
  else if (v && v.type === 'situation') html = viewSituation(c, v.id);
  else if (v && v.type === 'topic') html = viewTopic(c, v.id);
  else if (v && v.type === 'screen' && v.id === 'milestones') html = screenMilestones(c);
  else if (v && v.type === 'screen' && v.id === 'activities') html = screenActivities(c);
  else if (v && v.type === 'screen' && v.id === 'topics') html = screenTopics(c);
  else if (v && v.type === 'screen' && v.id === 'feeding') html = screenFeeding(c);
  else if (v && v.type === 'screen' && v.id === 'safety') html = screenSafety(c);
  else if (v && v.type === 'screen' && v.id === 'plan') html = screenPlan(c);
  else if (v && v.type === 'screen' && v.id === 'sleep') html = screenSleep(c);
  else if (v && v.type === 'screen' && v.id === 'development') html = screenDevelopment(c);
  else if (v && v.type === 'screen' && v.id === 'community') html = screenCommunity(c);
  else if (v && v.type === 'log') html = viewLog(c, v.id);
  else if (v && v.type === 'screen' && v.id === 'bag') html = screenBag();
  else if (v && v.type === 'screen' && v.id === 'pumping') html = screenPumping();
  else if (v && v.type === 'screen' && v.id === 'postpartum') html = screenPostpartum(c);
  else if (v && v.type === 'screen' && v.id === 'pregHealth') html = screenPregHealth();
  else if (v && v.type === 'screen' && v.id === 'checkins') html = screenCheckins(c);
  else if (v && v.type === 'screen' && v.id === 'addchild') html = screenAddChild();
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
  else if (state.tab === 'welcome') html = screenWelcome(c);
  else if (state.tab === 'settings') html = screenSettings();
  /* Profile shows whoever is selected. Her own face in the corner puts
     her here, a child's circle on Home puts them here. */
  else if (state.tab === 'profile') html = screenProfileTab(c);
  else if (state.tab === 'community') html = screenCommunity(c);
  else if (state.tab === 'logs') html = activeChild() ? screenLogs(c) : screenPickChild('Logs');
  /* Home is hers and never asks which child you mean, which is the whole
     point of it being the middle tab. */
  else html = screenHome(c);

  // Inputs inside the screen are destroyed by this swap, so remember where
  // the caret was and put it back, or typing loses focus every keystroke.
  const act = document.activeElement;
  const keepId = act && screen.contains(act) && act.id ? act.id : null;
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
    willowSlot.innerHTML = bday || (pendingSave ? '' : willowBubble() + willowPanel());
  }
  /* The canvas has to exist before anything can draw on it, so the
     confetti starts here rather than inside the function that writes the
     markup. It leaves itself alone if it is already running. */
  if (bday) bdayStartArt(); else bdayStopArt();
  /* The cropper has to exist before its gesture can be attached. */
  if (crop.on) cropWire();
  /* Computed after every redirect above has had its say, so the key
     describes the screen that was actually painted. */
  const nowRoute = routeKey();
  const sameRoute = nowRoute === lastRoute;
  lastRoute = nowRoute;
  screen.scrollTop = (keepId || sameRoute) ? keepScroll : 0;

  if (keepId) restoreFocus(keepId, keepStart, keepEnd);

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
  });

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-months],[data-lens],[data-lensopt],[data-tab],[data-go],[data-back],[data-ms],[data-filter],[data-naps],[data-routine],[data-sub],[data-bag],[data-ask],[data-child],[data-allprofiles],[data-addchild],[data-removechild],[data-profilebtn],[data-auth],[data-update],[data-willow],[data-combinechild],[data-notdupe],[data-logset],[data-logmulti],[data-logsave],[data-dellog],[data-export],[data-bday],[data-me],[data-face],[data-avatar],[data-edit],[data-msave],[data-ci],[data-photopick],[data-crop]');
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
      // Opening a child switches every child scoped screen at once, which
      // is the whole reason profiles are separate in the first place.
      selectChild(t.dataset.child);
      /* Tapping a face opens that child's profile, which is what the
         circle looks like it should do. */
      store.profileWho = t.dataset.child;
      store.profileEdit = null;
      state.tab = 'profile';
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
        const kid = newChildRecord(nm, bd || null);
        store.children.push(kid);
        store.draftChildName = '';
        store.draftChildBday = '';
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
    } else if (t.dataset.willow === 'open') {
      willow.open = true;
      if (!willow.ready && !willow.loading) willowLoad().catch(() => {});
    } else if (t.dataset.willow === 'close') {
      willow.open = false;
    } else if (t.dataset.willow === 'send') {
      willowAsk(willow.input);
      return;
    } else if (t.dataset.willow === 'try') {
      willowAsk(t.dataset.q);
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
      state.tab = t.dataset.tab; state.view = null;
    } else if (t.dataset.go === 'tab') {
      state.tab = t.dataset.id; state.view = null;
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
      state.view = { type: t.dataset.go, id: t.dataset.id };
    } else if (t.dataset.back) {
      const to = t.dataset.back;
      state.view = to && to !== '1' ? { type: 'screen', id: to } : null;
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
  const tabs = (newbornHere ? [{ id: 'newborn', label: 'The newborn rhythm' }] : []).concat([
    { id: 'stance', label: 'Fed is best' },
    { id: 'milk', label: 'Milk' },
    { id: 'solids', label: 'Starting solids' },
    { id: 'how', label: 'Purees or baby led' },
    { id: 'foods', label: 'First foods' },
  ]);

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

    ${dsec('Sources', sourceRows(FEEDING_SOURCES))}
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

      ${CPR_BY_AGE.map((card) => `
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
        </div>`).join('')}` : ''}

    ${tab === 'choking' ? `
      <div class="card leafy">
        <p class="eyebrow">${icon('info', 11, 'var(--sage)')} ${esc(CHOKING_STANCE.headline)}</p>
        ${CHOKING_STANCE.body.map((p) => `
          <p class="bodytext" style="margin:9px 0 0">${esc(p)}</p>`).join('')}
      </div>

      ${CHOKING_BY_AGE.map((card) => `
        <div class="dsec">
          <h4>${esc(card.label)}${card.id === choke.id ? ' (this is ' + esc(state.name || 'your child') + ')' : ''}</h4>
          ${steps(card.steps)}
          <div class="callout" style="margin-top:10px">
            <p style="margin:0"><strong style="color:var(--deep)">Never:</strong> ${esc(card.neverDo)}</p>
          </div>
        </div>`).join('')}

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
      <div class="card leafy">
        <p class="bodytext" style="font-size:15px;line-height:1.55">${esc(HOME_ALONE.headline)}</p>
      </div>

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
      </div>` : ''}

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

function screenCommunity(c) {
  /* Deterministic from the date so the number holds still while someone
     is reading, rather than jumping on every render. */
  const awake = 180 + (hashSeed(todayKey()) % 90);
  const pumping = 20 + (hashSeed(todayKey() + 'p') % 40);

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <p class="eyebrow">Community</p>
    <h1 class="title">You are not the only one awake.</h1>
    <p class="sub">Rooms for what you are actually in the middle of, and people who are in it too.</p>
  </div>
  <div class="sc">

    <button class="lrow" data-go="screen" data-id="wisdom" style="align-items:flex-start">
      <span class="licon">${icon('bulb', 18, 'var(--sage)')}</span>
      <span class="grow">
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">What worked for us</span>
        <span class="tiny" style="display:block;margin-top:2px">Output, clogs, and the kit. Every tip labelled for how well it holds up.</span>
      </span>
      <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
    </button>

    <div class="card leafy">
      <p class="eyebrow">${icon('moon', 11, 'var(--sage)')} You are not doing this alone</p>
      <p class="bodytext" style="margin-top:7px">
        Somebody else is awake right now for the same reason you are. Pick the room that matches
        what you are in the middle of.
      </p>
    </div>

    <p class="sect">Rooms</p>
    ${COMMUNITY_ROOMS.map((r) => `
      <button class="lrow" data-room="${esc(r.id)}" style="align-items:flex-start">
        <span class="licon">${icon(r.icon, 18)}</span>
        <span class="grow">
          <span style="display:block;font-size:14.5px;font-weight:600;color:var(--ink)">${esc(r.label)}</span>
          <span class="tiny" style="display:block;margin-top:2px">${esc(r.blurb)}</span>
        </span>
        <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
      </button>`).join('')}

    <div class="card" style="text-align:center;padding:30px 22px">
      ${growthSVG(2, 58)}
      <p style="margin:12px 0 0;font-size:14.5px;font-weight:600;color:var(--ink)">
        Nobody has posted in here yet
      </p>
      <p class="bodytext" style="margin-top:7px">
        Somebody has to be first, and being first in a quiet room is how every good one started.
        Say what you are in the middle of tonight.
      </p>
      <button class="chip" data-go="screen" data-id="wisdom" style="margin-top:14px">
        Read what has worked for other parents
      </button>
    </div>

    <p class="sect">How this room works</p>
    <div class="card">
      <ul class="dlist">${COMMUNITY_RULES.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
    </div>

    <div class="card flat">
      <p class="eyebrow">${icon('people', 11, 'var(--sage)')} How your privacy works here</p>
      <p class="bodytext" style="margin-top:5px">
        You post under a username, never your child's name, birthday or photo. Your children's
        profiles, milestones and notes stay in your account and never become community content.
        Reports go to a person, not a queue nobody reads.
      </p>
    </div>

    <p class="disclaimer">
      Other parents are not a substitute for your pediatrician. Anything in a community room is one
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
    ${store.children.length
      ? store.children.map((k) => childCard(k, false)).join('')
      : `<div class="card flat">
           <p class="bodytext">No child profiles yet. Add one and this fills in straight away.</p>
         </div>`}
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
  } else if (parts[0] === 'draft') {
    store.draftChildBday = iso;
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

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <h1 class="title">Settings</h1>
    <p class="sub">Your account, your children's records, and this copy of the app.</p>
  </div>
  <div class="sc">

    <p class="sect">Your account</p>
    <div class="card" style="border-left:3px solid ${border}">
      <p class="eyebrow">${icon(st.tone === 'good' ? 'check' : 'info', 11, 'var(--sage)')} ${esc(st.title)}</p>
      <p class="bodytext" style="margin-top:5px">${esc(st.text)}</p>
      ${st.action ? `<button class="btn" style="margin-top:12px" data-auth="account">${esc(st.action)}</button>` : ''}
    </div>

    ${childRow('user', 'Your profile',
      store.parent.name
        ? esc(store.parent.name) + (store.parent.email ? ', ' + esc(store.parent.email) : '')
        : 'Add your name so the app knows who it is talking to',
      'data-me="1"')}

    <button class="lrow" data-auth="signout" style="align-items:center">
      <span class="licon">${icon('back', 17, 'var(--deep)')}</span>
      <span class="grow">
        <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">Sign out</span>
        <span class="tiny" style="display:block;margin-top:2px">${auth.user
          ? esc(auth.user.email || 'Signed in')
          : 'Looking around without an account'}</span>
      </span>
    </button>

    <p class="sect">Your children</p>
    ${duplicateCard()}
    ${kids.length ? kids.map(settingsChildRow).join('') : `
      <div class="card flat">
        <p class="bodytext">No profiles yet. Add one from Home and the whole app reshapes around
        their age.</p>
      </div>`}
    ${childRow('plus', 'Add a child', 'Name and birthday is all it takes to start',
      'data-go="screen" data-id="addchild"')}

    <p class="sect">This app</p>
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
  </div>`;
}

function screenAddChild() {
  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <button class="back" data-back="1">${icon('back', 15, 'var(--deep)')} Back</button>
    <h1 class="title" style="margin-top:6px">Add a child</h1>
    <p class="sub">A name and a birthday is all it takes to start.</p>
  </div>
  <div class="sc">
    <div class="card">
      <p class="eyebrow">Their name</p>
      <input class="inp" type="text" id="newChildName" value="${esc(store.draftChildName)}"
        placeholder="Their name" autocomplete="off" style="margin-top:8px;width:100%" />
      <p class="eyebrow" style="margin-top:14px">Their birthday</p>
      <div style="margin-top:7px">${dateSelects('draft', store.draftChildBday || '', 25, 1)}</div>
      <p class="tiny" style="margin-top:9px">
        Expecting? Put the due date in and the app follows the pregnancy instead.
      </p>
      <button class="btn" data-addchild="1" style="margin-top:14px;width:100%">Add this child</button>
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
    store.parent = { name: '', username: '', email: '', birthday: '', lastPeriod: '', cycleLength: '' };
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
function topBar(markOnly) {
  const meOn = state.tab === 'profile' && store.profileWho === 'me' && !state.view;
  const mark = IS_DESKTOP ? `<div class="mark-holder">${wordmark(false)}</div>` : '';
  if (markOnly) return updateBar() + `<div class="topbar mark-only">${mark}</div>`;
  const first = (store.parent.name || '').trim().split(/\s+/)[0];
  return updateBar() + `
  <div class="topbar">
    <div class="topbar-left"></div>
    ${mark}
    <div class="me-slot">
      <button class="mebtn${meOn ? ' on' : ''}" data-me="1" aria-label="Your profile">
        ${parentFace(26)}<span>${esc(first || 'Me')}</span>
      </button>
    </div>
  </div>`;
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
function liftWrite(kind, context, onDone) {
  if (!hasAccess()) return;
  if (lift.tried[kind]) return;
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
    .catch(() => { /* The written one is already on screen. Nothing to do. */ });
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
    <div class="card flat">
      <p class="bodytext">Check in from Home once and this fills in. A week of it is enough to
      start seeing a shape.</p>
    </div>` : `

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

function screenHome(c) {
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  const first = (store.parent.name || '').trim().split(/\s+/)[0];
  const kids = store.children;
  const l = liftStore();
  const affirmation = liftAffirmation();
  const morning = liftMorning();
  const isMorning = hour < 12;

  return `
  ${cornerLeaves()}
  <div class="sc-head">
    <h1 class="title">${esc(greet)}${first ? ',' : ''}</h1>
    ${first ? `<p class="hello">${esc(first)}</p>` : ''}
  </div>
  <div class="sc">

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

    ${morning ? `
    <div class="card">
      <p class="eyebrow">${icon(isMorning ? 'sun' : 'moon', 11, 'var(--sage)')}
        ${isMorning ? 'Something for this morning' : 'For tomorrow morning'}</p>
      <h3 class="h3" style="font-size:16px;margin-top:5px">${esc(morning.title)}</h3>
      <p class="bodytext" style="margin-top:4px">${esc(morning.body)}</p>
    </div>` : ''}

    <button class="bigbtn" data-go="screen" data-id="now">
      <span class="bigbtn-ic">${icon('heart', 22, '#fff')}</span>
      <span class="grow">
        <span class="bigbtn-t">Something is happening right now</span>
        <span class="bigbtn-s">Witching hour, a fever, crying that will not stop, choking</span>
      </span>
      ${icon('chev', 17, 'rgba(255,255,255,.8)')}
    </button>

    ${(() => {
      /* The one thing on Home that is about a child rather than about
         her. It stays because burying the choking page two taps inside
         a profile would be the wrong call, and because it is the same
         page whichever child it turns out to be about. */
      const waiting = kids.filter((k) => !isExampleChild(k) && !ciSavedFor(k));
      if (!waiting.length) return '';
      return `
      <p class="sect">Waiting on you</p>
      ${waiting.map((k) => `
        <button class="lrow" data-child="${esc(k.id)}" style="align-items:center">
          <span class="licon">${icon('sun', 17)}</span>
          <span class="grow">
            <span style="display:block;font-size:14px;font-weight:600;color:var(--ink)">
              How ${esc((k.name || 'they').split(/\s+/)[0])} is doing today
            </span>
            <span class="tiny" style="display:block;margin-top:2px">Thirty seconds, on their profile</span>
          </span>
          <span class="chev">${icon('chev', 16, 'var(--faint)')}</span>
        </button>`).join('')}`;
    })()}

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
  const cyc = cycleInfo(v.lastPeriod, null, p.cycleLength);

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
    <div class="bigface">${faceHTML(v.photo, 84, 'me')}</div>
    <h1 class="title" style="margin-top:8px">${esc(p.name || 'Your profile')}</h1>
    <p class="sub">Everything here is yours, and none of it is on any child.</p>
  </div>
  <div class="sc">

    <div class="editbar">
      ${editing ? `
        <button class="btn" data-edit="save">${icon('check', 15, '#fff')} Save</button>
        <button class="btn ghost" data-edit="cancel">Cancel</button>
      ` : `
        <button class="btn ghost" data-edit="me">${icon('star', 14, 'var(--deep)')} Edit</button>
      `}
    </div>

    ${editing ? facePicker('me', v.photo) : ''}
    ${editing ? editUnsavedNote() : ''}

    <p class="sect">About you</p>
    ${editing ? `
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
        ${readRow('Last period began', p.lastPeriod ? cycleDateLabel(p.lastPeriod) : '', 'Add it and the app works out the rest')}
      </div>
    `}

    ${cyc ? cycleCard(cyc) : `
    <div class="card flat">
      <p class="bodytext">Add the first day of your last period above and the app works out the rest,
      the day of your cycle, roughly when the next one is due, and a due date if you are pregnant.</p>
    </div>`}

    <p class="sect">Your body and your recovery</p>
    <p class="tiny" style="margin:-4px 0 10px">
      This part is about you, not about any of them, and it does not disappear when you open a child.
    </p>
    ${childRow('heart', 'The fourth trimester',
      'Your recovery week by week, and how you are actually doing',
      'data-go="screen" data-id="postpartum"')}
    ${childRow('drop', 'Pumping and breastfeeding',
      'Flange fitting, schedules, storage, and why frozen milk tastes like soap',
      'data-go="screen" data-id="pumping"')}
    ${childRow('bag', 'Hospital bag',
      (() => { const bag = getBagProgress(store.bagChecked);
        return bag.done === 0 ? 'A checklist, plus the things people actually forget'
          : esc(bag.done + ' of ' + bag.total + ' packed'); })(),
      'data-go="screen" data-id="bag"')}
    ${childRow('shield', 'Looking after yourself in pregnancy',
      'CMV first, plus vaccines and the one about not stopping a medication',
      'data-go="screen" data-id="pregHealth"')}

    <p class="sect">Other parents</p>
    ${childRow('people', 'Community',
      'Rooms for parents, under your name rather than your child\'s',
      'data-tab="community"')}

    <div class="card flat" style="margin-top:6px">
      <p class="eyebrow">${icon('shield', 11, 'var(--sage)')} Who sees this</p>
      <p class="bodytext" style="margin-top:5px">
        Your dates, your photo and your real name are yours alone. The community only ever shows
        your username. None of this is attached to any child, and none of it is shared with anyone.
      </p>
    </div>
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

    ${checkinCard()}

    ${c.days != null && c.days < 56 && getDiaperDay(c.days) ? `
    <p class="sect">The newborn count</p>
    ${newbornCounter(c)}
    <button class="btn ghost sm" style="width:100%;margin-top:-3px"
      data-go="screen" data-id="feeding" data-asksub="feedTab" data-asksubval="newborn">
      Feeds, diapers and how many ounces
    </button>` : ''}

    ${(() => {
      const quickLogs = c.months == null ? [] : getLogTypesForAge(c.months).slice(0, 4);
      if (!quickLogs.length) return '';
      return `
      <p class="sect">Log it as it happens</p>
      <div class="qgrid">
        ${quickLogs.map((t) => `
          <button class="q" data-go="log" data-id="${esc(t.id)}">
            <span class="qi">${icon(logIcon(t.icon), 17)}</span>
            <span class="qt">${esc(t.label)}</span>
            <span class="qs">${esc(lastLogLine(t.id))}</span>
          </button>`).join('')}
      </div>
      <button class="btn ghost sm" style="width:100%;margin-top:9px" data-tab="logs">
        Everything logged so far
      </button>`;
    })()}

    ${(() => {
      const pl = c.months == null ? null : buildPlan(c);
      if (!pl || !pl.morning) return '';
      return `
      <p class="sect">Today's plan</p>
      <p class="tiny" style="margin:-4px 0 10px">
        This changes on its own at midnight, so tomorrow is not today again.
      </p>
      <div class="plan">
        <span class="picon">${icon('sun', 17)}</span>
        <div class="grow">
          <p class="eyebrow">Morning</p>
          <h3 class="h3" style="font-size:16px">${esc(pl.morning.title)}</h3>
          <p class="tiny" style="margin-top:3px">${esc(pl.morning.description)}</p>
          <button class="btn ghost sm" style="margin-top:9px" data-go="screen" data-id="plan">
            The whole plan
          </button>
        </div>
      </div>`;
    })()}

    <p class="sect">Where they are now</p>
    ${childRow('chart', 'Milestones',
      msChangeCount()
        ? esc(msChangeCount() + ' marked but not saved yet')
        : (doneMs ? esc(doneMs + ' marked so far. Ranges, not deadlines.') : 'Ranges, not deadlines'),
      'data-go="screen" data-id="milestones"')}
    ${childRow('book', 'Development guidance',
      c.content.length ? esc(c.content.length + ' written for exactly this age') : 'Nothing written for this age yet',
      'data-go="screen" data-id="development"')}

    <p class="sect">How their mind works</p>
    ${childRow('bulb', 'Understanding ' + esc(name),
      state.lenses.length
        ? esc(getLenses(state.lenses).map((l) => l.label).join(', ')) + ' &middot; tap to change'
        : 'Twenty one ways a mind can work, explained in plain English and scoped to their age',
      'data-go="screen" data-id="understand"')}
    <p class="tiny" style="margin:-3px 0 8px">
      Straight to one of them, whether or not it is turned on for ${esc(name)}:
    </p>
    <div class="chips" style="margin-bottom:6px">
      ${COMMON_LENSES.map((id) => getLens(id)).filter(Boolean).map((l) => `
        <button class="chip" data-go="lens" data-id="${esc(l.id)}">${esc(l.label)}</button>`).join('')}
      <button class="chip" data-go="screen" data-id="understand"
        style="background:var(--leaf2);border-color:var(--leaf)">All ${SUPPORT_LENSES.length}</button>
    </div>

    <p class="sect">Things to do together</p>
    ${childRow('calendar', "Today's plan", 'Three things chosen for today, new again tomorrow',
      'data-go="screen" data-id="plan"')}
    ${childRow('puzzle', 'Activities',
      esc(c.activities.length + ' that fit this age'),
      'data-go="screen" data-id="activities"')}

    <p class="sect">Everyday care</p>
    ${childRow('moon', "Today's rhythm", 'Wake times, naps and bedtime, built from one answer',
      'data-go="screen" data-id="sleep"')}
    ${childRow('utensils', 'Feeding',
      esc(getFeedingHeadline(c.months) || 'Milk, starting solids, and the family table'),
      'data-go="screen" data-id="feeding"')}
    ${childRow('bulb', 'Care topics',
      c.topics.length ? esc(c.topics.slice(0, 4).map((t) => t.label).join(', ')) : 'Practical care, picked for this age',
      'data-go="screen" data-id="topics"')}

    <p class="sect">Health</p>
    ${childRow('shield', 'Vaccines',
      'What the evidence says, what your rights are, and how to decide',
      'data-go="screen" data-id="vaccines"')}
    ${childRow('pill', 'Something is wrong right now',
      'Fever, rashes, crying that will not stop, and when to call',
      'data-go="screen" data-id="now"')}

    <p class="sect">If something happens</p>
    ${childRow('heart', 'CPR, choking and staying safe',
      esc('For ' + getCprForAge(c.months).label.toLowerCase()) +
        (homeAloneIsRelevant(c.months) ? ', plus home alone readiness' : ''),
      'data-go="screen" data-id="safety"')}

    ${state.lenses.length ? `
    <div class="card flat" style="margin-top:16px">
      <p class="eyebrow">${icon('leaf', 11, 'var(--sage)')} Your active lenses</p>
      <p class="tiny" style="margin-top:4px">${esc(getLenses(state.lenses).map((l) => l.label).join(', '))}
      are reordering what surfaces first. Nothing is hidden, everything is still here.</p>
    </div>` : ''}
    <p class="disclaimer">${esc(CONTENT_DISCLAIMER)}</p>
    ${editing ? editSaveBar() : ''}
  </div>`;
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
      <div class="card flat">
        <p class="bodytext">Nothing logged yet. Tap any of the buttons above and it lands here with a time on it.</p>
      </div>`}

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
  const t = getLogType(typeId);
  if (!t) return emptyScreen('That log could not be found.');
  const d = state.logDraft && state.logDraft.typeId === typeId ? state.logDraft : { typeId: typeId, values: {} };
  const v = d.values || {};
  const med = typeId === 'medication' ? medDueLine(v.name || '') : null;

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
    const inputType = f.type === 'number' || f.type === 'duration' ? 'number' : f.type === 'time' ? 'time' : 'text';
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
    <p class="eyebrow" style="margin-top:6px">New log</p>
    <h1 class="title sm">${esc(t.label)}</h1>
  </div>
  <div class="sc">

    ${med ? `
    <div class="card" style="border-left:3px solid ${med.due ? 'var(--sage)' : 'var(--attention)'}">
      <p class="eyebrow">${esc(med.label)} timing</p>
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
      Saved with the time right now. It stays on this device, under ${esc(state.name || 'this child')}.
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
const CHILD_LOCAL_ONLY = ['seeded'];

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
    /* Carried so the greeting that already appeared on her phone does
       not appear again on the laptop the same afternoon. */
    birthdaySeen: store.birthdaySeen || {},
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
  const localKids = store.children.filter((k) => !isUntouchedSeed(k)).map(childPayload);

  const merged = mergeChildren(localKids, remoteKids, deleted);
  /* Anything that came through the merge is on the account now, so
     nothing left is the app's invention. */
  merged.children.forEach((k) => { delete k.seeded; });
  store.children = merged.children;
  if (store.activeChildId && !store.children.some((k) => k.id === store.activeChildId)) {
    store.activeChildId = store.children.length === 1 ? store.children[0].id : null;
  }

  /* The parent record follows the same later stamp wins rule. */
  const localPt = Number(store.parentUpdatedAt) || 0;
  const remotePt = Number(remoteUser && remoteUser.updatedAt) || 0;
  if (remoteUser && remotePt > localPt) {
    store.parent = Object.assign({ name: '', username: '', email: '', birthday: '', lastPeriod: '', cycleLength: '' }, remoteUser.parent || {});
    store.parent.birthday = sanitizeStoredDate(store.parent.birthday, 0);
    store.parent.lastPeriod = sanitizeStoredDate(store.parent.lastPeriod, 0);
    store.bagChecked = Array.isArray(remoteUser.bagChecked) ? remoteUser.bagChecked : [];
    store.birthdaySeen = (remoteUser.birthdaySeen && typeof remoteUser.birthdaySeen === 'object')
      ? remoteUser.birthdaySeen : {};
    store.parentUpdatedAt = remotePt;
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
      const lt = Number(store.children[i].updatedAt) || 0;
      const rt = Number(remote.updatedAt) || 0;
      /* Through the normaliser, same as the first sync. A record written
         by an older copy of the app must never arrive missing fields
         and take the local copy's with it. */
      if (rt > lt) { store.children[i] = normalizeChild(remote); changed = true; }
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
    writes.push(fs.setDoc(fs.doc(cloud.db, 'users', uid, 'children', k.id), payload));
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
  /* Once on open, then at most every five minutes when the app comes
     back to the front. Nobody needs this answered more often. */
  if (!force && now - update.checkedAt < 300000) return;
  update.checkedAt = now;
  if (typeof fetch !== 'function' || !buildStamp()) return;
  try {
    const res = await fetch(location.pathname + '?stamp=' + now, {
      cache: 'no-store',
      headers: { Range: 'bytes=0-2047' },
    });
    if (res.status !== 206) {
      /* No range support means the only way to answer is to download
         the whole app again, which is worse than not knowing. */
      if (res.body && res.body.cancel) { try { res.body.cancel(); } catch (err) {} }
      return;
    }
    const head = await res.text();
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
  threads: {},      // childId -> [ { who: 'you' | 'willow', text, sources: [], kind } ]
  ai: null,         // the model handle, once loaded
  loading: null,    // the in flight load promise
  ready: false,
  failed: false,
  usedToday: 0,
  usedDate: '',
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

function willowSay(who, text, sources, kind, key) {
  willowThread(key).push({ who: who, text: text, sources: sources || [], kind: kind || '' });
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
    const res = await chat.sendMessage(willowPrompt(q, hits.slice(0, 4), willowChildLine(c)));
    const raw = res && res.response && typeof res.response.text === 'function'
      ? res.response.text() : String(res || '');
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
    /* Three failures, three different fixes, so they get three
       different sentences. Telling somebody to try again in a moment,
       when the real answer is that a key was never pasted in, wastes
       their evening on a problem no amount of retrying will move. */
    const code = String((err && err.code) || '') + ' ' + String((err && err.message) || '');
    let message;
    if (/app.?check|401|unauthenticated/i.test(code)) message = WILLOW.notVerified;
    else if (/api-not-enabled|not been used|SERVICE_DISABLED|403|permission/i.test(code)) message = WILLOW.notReady;
    else if (!willow.ready) message = WILLOW.notReady;
    else message = WILLOW.failed;
    willowSay('willow', message, [], 'failed', key);
  }
  willow.busyKey = '';
  render();
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
        placeholder="Ask ${esc(WILLOW.name)} something" value="${esc(willow.input)}"
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
initControls();
restoreSession();
render();

/* Ask once, a few seconds in, so it never competes with the first
   paint or with signing in. */
setTimeout(() => { try { checkForUpdate(true); } catch (err) {} }, 4000);

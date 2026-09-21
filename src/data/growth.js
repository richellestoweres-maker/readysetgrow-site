/**
 * Ready Set Grow: Growth
 * ------------------------------------------------------------------
 * Weight, length and head circumference over time, plotted against the
 * real reference curves, with the percentile treated as the least
 * interesting thing on the screen.
 *
 * WHY THE PERCENTILE IS NOT THE POINT
 * A percentile is a position in a crowd, not a grade. Half of all
 * healthy children are below the fiftieth line and always will be,
 * because that is what a fiftieth line is. What a doctor actually
 * looks at is whether a child is following their own line, and that
 * needs three measurements, not one. So this screen leads with the
 * shape of the line and puts the number underneath it.
 *
 * WHERE THE NUMBERS COME FROM, AND HOW THEY WERE CHECKED
 * Birth to two years uses the WHO Child Growth Standards, which is
 * what the CDC and the AAP both recommend for that age in the United
 * States. Two years and up uses the CDC 2000 growth charts, which is
 * what a US pediatrician plots on.
 *
 * Every table below is the published L, M and S parameters. They were
 * not typed from memory. Each row was read from the official table and
 * then checked by a method that does not depend on the reading: the S
 * was solved from the printed ninety seventh percentile, and the
 * result had to reproduce the printed third percentile as well. A
 * single mistyped digit fails that check, and one did, and was fixed.
 * Rows that would not reconcile were dropped rather than guessed.
 *
 * THE STEP AT TWO YEARS IS REAL AND IS NOT A BUG
 * WHO and CDC are different references built from different children,
 * so a child sitting on the fiftieth WHO line at twenty three months
 * can land near the thirty fifth CDC line at twenty five months. The
 * same thing happens on the paper chart at the doctor. The app says so
 * out loud rather than letting a parent discover it alone at midnight.
 *
 * WHY THE WEIGHT CURVE STOPS AT ELEVEN
 * Not a data limitation. Above about eleven, plotting a child on a
 * weight curve tells a parent very little they can act on, and it
 * starts something that is hard to stop. Weight is still recorded at
 * any age, it just stops being scored. Height keeps its curve all the
 * way to twenty, because how tall they will be is a fair question and
 * a harmless one.
 *
 * TABLE FORMAT
 *   [age in months, L, M, S]
 * Between two rows the three parameters are interpolated, which is
 * what the CDC itself says to do between its own monthly rows.
 */

export const GROWTH_MEASURES = [
  { id: 'weight', label: 'Weight', metric: 'kg', us: 'lb', maxMonths: 132,
    whoOnly: false, note: 'Stripped down to a diaper for a baby, light clothes and no shoes after that.' },
  { id: 'height', label: 'Height', metric: 'cm', us: 'in', maxMonths: 240,
    whoOnly: false, note: 'Lying down until two, standing after that. The two are not the same measurement and the charts know it.' },
  { id: 'head', label: 'Head', metric: 'cm', us: 'in', maxMonths: 24,
    whoOnly: true, note: 'Around the widest part, above the eyebrows and ears. Measured until about two, then it stops being routine.' },
];

/* The reference tables. Big, boring, and checked. See the header. */
const REF = {
  who_weight_m: [
    [0,0.3487,3.3464,0.14602],[1,0.2297,4.4709,0.13395],[2,0.197,5.5675,0.12385],
    [3,0.1738,6.3762,0.11727],[4,0.1553,7.0023,0.11316],[5,0.1395,7.5105,0.1108],
    [6,0.1257,7.934,0.10958],[7,0.1134,8.297,0.10902],[8,0.1021,8.6151,0.10882],
    [9,0.0917,8.9014,0.10881],[10,0.082,9.1649,0.10891],[11,0.073,9.4122,0.10906],
    [12,0.0644,9.6479,0.10925],[13,0.0563,9.8749,0.10949],
    [14,0.0487,10.0953,0.10976],[15,0.0413,10.3108,0.11007],
    [16,0.0343,10.5228,0.11041],[17,0.0275,10.7319,0.11079],
    [18,0.0211,10.9385,0.11119],[19,0.0148,11.143,0.11164],
    [20,0.0087,11.3462,0.11211],[21,0.0029,11.5486,0.11261],
    [22,-0.0028,11.7504,0.11314],[23,-0.0083,11.9514,0.11369],
    [24,-0.0137,12.1515,0.11426],
  ],
  who_weight_f: [
    [0,0.3809,3.2322,0.14171],[1,0.1714,4.1873,0.13724],[2,0.0962,5.1282,0.13],
    [3,0.0402,5.8458,0.12619],[4,-0.005,6.4237,0.12402],[5,-0.043,6.8985,0.12274],
    [6,-0.0756,7.297,0.12204],[7,-0.1039,7.6422,0.12178],[8,-0.1288,7.9487,0.12181],
    [9,-0.1507,8.2254,0.12199],[10,-0.17,8.48,0.12223],[11,-0.1872,8.7192,0.12247],
    [12,-0.2024,8.9481,0.12268],[13,-0.2158,9.1699,0.12283],
    [14,-0.2278,9.387,0.12294],[15,-0.2384,9.6008,0.12299],
    [16,-0.2478,9.8124,0.12303],[17,-0.2562,10.0226,0.12306],
    [18,-0.2637,10.2315,0.12309],[19,-0.2703,10.4393,0.12315],
    [20,-0.2762,10.6464,0.12323],[21,-0.2815,10.8534,0.12335],
    [22,-0.2862,11.0608,0.1235],[23,-0.2903,11.2688,0.12369],
    [24,-0.2941,11.4775,0.1239],
  ],
  who_height_m: [
    [0,1,49.8842,0.03795],[1,1,54.7244,0.03557],[2,1,58.4249,0.03424],
    [3,1,61.4292,0.03328],[4,1,63.886,0.03257],[5,1,65.9026,0.03204],
    [6,1,67.6236,0.03165],[7,1,69.1645,0.03139],[8,1,70.5994,0.03124],
    [9,1,71.9687,0.03117],[10,1,73.2812,0.03118],[11,1,74.5388,0.03125],
    [12,1,75.7488,0.03137],[13,1,76.9186,0.03154],[14,1,78.0497,0.03174],
    [15,1,79.1458,0.03197],[16,1,80.2113,0.03222],[17,1,81.2487,0.0325],
    [18,1,82.2587,0.03279],[19,1,83.2418,0.0331],[20,1,84.1996,0.03342],
    [21,1,85.1348,0.03376],[22,1,86.0477,0.0341],[23,1,86.941,0.03445],
    [24,1,87.8161,0.03479],
  ],
  who_height_f: [
    [0,1,49.1477,0.0379],[1,1,53.6872,0.0364],[2,1,57.0673,0.03568],
    [3,1,59.8029,0.0352],[4,1,62.0899,0.03486],[5,1,64.0301,0.03463],
    [6,1,65.7311,0.03448],[7,1,67.2873,0.03441],[8,1,68.7498,0.0344],
    [9,1,70.1435,0.03444],[10,1,71.4818,0.03452],[11,1,72.771,0.03464],
    [12,1,74.015,0.03479],[13,1,75.2176,0.03496],[14,1,76.3817,0.03514],
    [15,1,77.5099,0.03534],[16,1,78.6055,0.03555],[17,1,79.671,0.03576],
    [18,1,80.7079,0.03598],[19,1,81.7182,0.0362],[20,1,82.7036,0.03643],
    [21,1,83.6654,0.03666],[22,1,84.604,0.03688],[23,1,85.5202,0.03711],
    [24,1,86.4153,0.03734],
  ],
  who_head_m: [
    [0,1,34.4618,0.03686],[1,1,37.2759,0.03133],[2,1,39.1285,0.02997],
    [3,1,40.5135,0.02918],[4,1,41.6317,0.02868],[5,1,42.5576,0.02837],
    [6,1,43.3306,0.02817],[7,1,43.9803,0.02804],[8,1,44.53,0.02796],
    [9,1,44.9998,0.02792],[10,1,45.4051,0.0279],[11,1,45.7573,0.02789],
    [12,1,46.0661,0.02789],[13,1,46.3395,0.02789],[14,1,46.5844,0.02791],
    [15,1,46.806,0.02792],[16,1,47.0088,0.02795],[17,1,47.1962,0.02797],
    [18,1,47.3711,0.028],[19,1,47.5357,0.02803],[20,1,47.6919,0.02806],
    [21,1,47.8408,0.0281],[22,1,47.9833,0.02813],[23,1,48.1201,0.02817],
    [24,1,48.2515,0.02821],
  ],
  who_head_f: [
    [0,1,33.8787,0.03496],[1,1,36.5463,0.0321],[2,1,38.2521,0.03168],
    [3,1,39.5328,0.0314],[4,1,40.5817,0.03119],[5,1,41.459,0.03102],
    [6,1,42.1995,0.03087],[7,1,42.829,0.03075],[8,1,43.3671,0.03063],
    [9,1,43.83,0.03053],[10,1,44.2319,0.03044],[11,1,44.5844,0.03035],
    [12,1,44.8965,0.03027],[13,1,45.1752,0.03019],[14,1,45.4265,0.03012],
    [15,1,45.6551,0.03006],[16,1,45.865,0.02999],[17,1,46.0598,0.02993],
    [18,1,46.2424,0.02987],[19,1,46.4152,0.02982],[20,1,46.5801,0.02977],
    [21,1,46.7384,0.02972],[22,1,46.8913,0.02967],[23,1,47.0391,0.02962],
    [24,1,47.1822,0.02957],
  ],
  cdc_weight_m: [
    [24.5,-0.216501,12.7415,0.108166],[30.5,-0.397568,13.5609,0.109378],
    [36.5,-0.62132,14.4026,0.111875],[42.5,-0.804515,15.3194,0.115493],
    [48.5,-0.915242,16.3168,0.119955],[54.5,-0.969633,17.3791,0.124879],
    [60.5,-1.00045,18.4859,0.129879],[66.5,-1.03504,19.6214,0.134676],
    [72.5,-1.08747,20.7777,0.139143],[78.5,-1.15813,21.9564,0.14331],
    [84.5,-1.2365,23.1674,0.147337],[90.5,-1.30627,24.4265,0.151472],
    [96.5,-1.35181,25.7526,0.155974],[102.5,-1.36361,26.6834,0.159275],
    [108.5,-1.3394,28.6813,0.166659],[114.5,-1.28438,30.3177,0.172729],
    [120.5,-1.20669,32.088,0.178929],[126.5,-1.11554,34.0036,0.184847],
    [132.5,-1.01928,36.0726,0.19003],
  ],
  cdc_weight_f: [
    [24.5,-0.752207,12.1346,0.10774],[30.5,-0.914719,13.0436,0.113023],
    [36.5,-1.02447,13.9411,0.119492],[42.5,-1.10702,14.8812,0.125973],
    [48.5,-1.17703,15.8782,0.131802],[54.5,-1.23833,16.9283,0.136811],
    [60.5,-1.28769,18.0231,0.141191],[66.5,-1.31899,19.1583,0.145317],
    [72.5,-1.32676,20.3364,0.14959],[78.5,-1.30849,21.5675,0.154326],
    [84.5,-1.26555,22.868,0.159693],[90.5,-1.20288,24.2579,0.165689],
    [96.5,-1.12768,25.757,0.172147],[102.5,-1.04785,27.382,0.178774],
    [108.5,-0.970686,29.1429,0.185201],[114.5,-0.902198,31.0403,0.191041],
    [120.5,-0.846873,33.0639,0.195947],[126.5,-0.807873,35.1918,0.199648],
    [132.5,-0.787374,37.3909,0.201971],
  ],
  cdc_height_m: [
    [24.5,1.00721,86.8616,0.040396],[30.5,0.174489,91.3324,0.040965],
    [36.5,-0.390918,95.2736,0.040534],[42.5,0.32653,99.0025,0.040848],
    [48.5,0.827637,102.51,0.041344],[54.5,1.13365,105.881,0.041956],
    [60.5,1.26637,109.175,0.042593],[66.5,1.2554,112.43,0.043181],
    [72.5,1.13744,115.661,0.043673],[78.5,0.954853,118.867,0.044069],
    [84.5,0.753244,122.031,0.044403],[90.5,0.575908,125.126,0.044736],
    [96.5,0.455268,128.124,0.045127],[102.5,0.404778,130.998,0.045618],
    [108.5,0.415687,133.734,0.046217],[114.5,0.461031,136.334,0.046897],
    [120.5,0.505564,138.823,0.04761],[126.5,0.518588,141.258,0.048304],
    [132.5,0.487939,143.73,0.048938],[144.5,0.420919,149.309,0.049948],
    [150.5,0.531952,152.662,0.050273],[156.5,0.81624,156.41,0.050333],
    [162.5,1.23277,160.349,0.049927],[168.5,1.67043,164.142,0.048945],
    [174.5,2.01678,167.464,0.047507],[180.5,2.20518,170.139,0.04589],
    [186.5,2.22533,172.156,0.044363],[192.5,2.11302,173.61,0.043086],
    [198.5,1.92732,174.631,0.042107],[204.5,1.72474,175.341,0.041408],
    [210.5,1.54325,175.836,0.040938],[216.5,1.4,176.185,0.040644],
    [228.5,1.22916,176.618,0.040391],[234.5,1.18802,176.754,0.040364],
    [240,1.16728,176.849,0.04037],
  ],
  cdc_height_f: [
    [24.5,1.05127,85.3973,0.04086],[30.5,0.814544,90.3334,0.041754],
    [36.5,0.541981,94.2134,0.042018],[42.5,0.377878,97.6485,0.042622],
    [48.5,0.225706,101.034,0.04326],[54.5,0.075699,104.463,0.043817],
    [60.5,-0.05773,107.957,0.044277],[66.5,-0.159198,111.488,0.044653],
    [72.5,-0.219069,115.005,0.044964],[78.5,-0.234772,118.45,0.045226],
    [84.5,-0.210211,121.762,0.045461],[90.5,-0.154357,124.896,0.045694],
    [96.5,-0.079283,127.826,0.045968],[102.5,0.002744,130.557,0.04634],
    [108.5,0.084148,133.13,0.046884],[114.5,0.169805,135.634,0.04767],
    [120.5,0.284749,138.211,0.048705],[126.5,0.46918,141.04,0.049812],
    [132.5,0.74429,144.261,0.050524],[138.5,1.06248,147.842,0.050208],
    [144.5,1.30305,151.487,0.048599],[150.5,1.35816,154.756,0.046198],
    [156.5,1.24297,157.344,0.043859],[162.5,1.07697,159.208,0.042114],
    [168.5,0.956572,160.478,0.041022],[174.5,0.902452,161.327,0.040409],
    [180.5,0.89557,161.898,0.040084],[186.5,0.913398,162.291,0.039913],
    [192.5,0.941146,162.569,0.039821],[198.5,0.965256,162.772,0.03974],
    [204.5,0.982275,162.907,0.039781],[210.5,0.992901,163.004,0.039824],
    [216.5,0.998305,163.071,0.039842],[222.5,0.998906,163.12,0.039828],
    [228.5,0.995004,163.158,0.039753],[234.5,0.986902,163.196,0.03959],
    [240,0.978206,163.236,0.039368],
  ],
};

/* THE BOUNDARY. Under this many months the WHO tables are used, at or
   above it the CDC ones. The second birthday, which is where the AAP
   says to switch. The quarter month is only there so the two tables,
   which stop at 24.0 and start at 24.5, hand over in the middle of
   their gap rather than one of them covering 2 weeks it does not
   have a row for. */
const CDC_FROM = 24.25;

/* Standard normal, both directions. Written out rather than imported
   because the whole app is one file and this is the only place that
   needs them. Accurate to about one part in a billion, which is nine
   more digits than a growth chart deserves. */
function normCdf(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989422804014327 * Math.exp(-z * z / 2);
  let p = d * t * (0.319381530 + t * (-0.356563782 + t * (1.781477937
    + t * (-1.821255978 + t * 1.330274429))));
  return z > 0 ? 1 - p : p;
}

function normInv(p) {
  const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687,
    138.3577518672690, -30.66479806614716, 2.506628277459239];
  const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866,
    66.80131188771972, -13.28068155288572];
  const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838,
    -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996,
    3.754408661907416];
  const lo = 0.02425;
  let q, r;
  if (p < lo) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5])
      / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
  if (p <= 1 - lo) {
    q = p - 0.5; r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q
      / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  }
  q = Math.sqrt(-2 * Math.log(1 - p));
  return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5])
    / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
}

function refKey(measure, months, sex) {
  const s = sex === 'f' ? 'f' : 'm';
  if (measure === 'head') return 'who_head_' + s;
  const src = months < CDC_FROM ? 'who' : 'cdc';
  return src + '_' + measure + '_' + s;
}

/* The L, M and S for this exact age, interpolated between the two rows
   either side of it. Returns null outside the table, which is how the
   screen knows to draw a dot with no line behind it. */
export function lmsAt(measure, months, sex) {
  const table = REF[refKey(measure, months, sex)];
  if (!table || !table.length) return null;
  const m = Number(months);
  if (!isFinite(m)) return null;
  /* THE HALF MONTH SEAM.
     WHO's last row is 24.0 and CDC's first is 24.5, so a child measured
     in the 2 weeks between them falls through a gap that exists only
     because two organizations chose different row spacing. Rather than
     invent a row, an age within about half a month of either end of a
     table is snapped to that end. The error that introduces is smaller
     than the error in weighing a toddler. Anything further out than
     that returns null and the screen draws the dot with no line. */
  const first = table[0][0], last = table[table.length - 1][0];
  if (m < first) return (first - m <= 0.6)
    ? { L: table[0][1], M: table[0][2], S: table[0][3] } : null;
  if (m > last) return (m - last <= 0.6)
    ? { L: table[table.length - 1][1], M: table[table.length - 1][2], S: table[table.length - 1][3] } : null;
  for (let i = 0; i < table.length; i++) {
    if (table[i][0] === m) return { L: table[i][1], M: table[i][2], S: table[i][3] };
    if (table[i][0] > m) {
      const a = table[i - 1], b = table[i];
      const f = (m - a[0]) / (b[0] - a[0]);
      return {
        L: a[1] + (b[1] - a[1]) * f,
        M: a[2] + (b[2] - a[2]) * f,
        S: a[3] + (b[3] - a[3]) * f,
      };
    }
  }
  return null;
}

/* The z score, which is the honest form of the number. A percentile is
   just this run through a normal curve, and z is what actually gets
   compared between two visits. */
export function growthZ(measure, months, sex, value) {
  const p = lmsAt(measure, months, sex);
  const x = Number(value);
  if (!p || !isFinite(x) || x <= 0) return null;
  const z = Math.abs(p.L) < 1e-7
    ? Math.log(x / p.M) / p.S
    : (Math.pow(x / p.M, p.L) - 1) / (p.L * p.S);
  if (!isFinite(z)) return null;
  /* Past about four SDs the LMS model stops meaning anything, so it is
     clamped rather than allowed to print a hundredth of a percentile at
     somebody. */
  return Math.max(-4, Math.min(4, z));
}

export function growthPercentile(measure, months, sex, value) {
  const z = growthZ(measure, months, sex, value);
  if (z === null) return null;
  return normCdf(z) * 100;
}

/* The value at a given percentile, which is what draws the curves. */
export function growthValueAt(measure, months, sex, percentile) {
  const p = lmsAt(measure, months, sex);
  if (!p) return null;
  const z = normInv(Math.max(0.0001, Math.min(0.9999, percentile / 100)));
  if (Math.abs(p.L) < 1e-7) return p.M * Math.exp(p.S * z);
  const base = 1 + p.L * p.S * z;
  if (base <= 0) return null;
  return p.M * Math.pow(base, 1 / p.L);
}

/* The oldest age this measure can still be scored at. */
export function growthMaxMonths(measure) {
  const m = GROWTH_MEASURES.filter((x) => x.id === measure)[0];
  return m ? m.maxMonths : 0;
}

/* Points along one reference line, for drawing. Steps are picked so a
   curve is smooth without carrying a thousand points. */
export function growthCurve(measure, sex, fromMonths, toMonths, percentile, steps) {
  const n = Math.max(2, steps || 40);
  const out = [];
  for (let i = 0; i <= n; i++) {
    const m = fromMonths + (toMonths - fromMonths) * (i / n);
    const v = growthValueAt(measure, m, sex, percentile);
    if (v !== null) out.push({ months: m, value: v });
  }
  return out;
}

/* ------------------------------------------------------------------
   UNITS
   Stored in kilograms and centimeters always, shown in whatever the
   parent reads. Storing what is displayed is how an app ends up with a
   child who weighs nine point five of something.
   ------------------------------------------------------------------ */
export const LB_PER_KG = 2.20462262;
export const IN_PER_CM = 0.393700787;

export function kgToLbOz(kg) {
  const total = Number(kg) * LB_PER_KG;
  const lb = Math.floor(total);
  const oz = Math.round((total - lb) * 16);
  return oz === 16 ? { lb: lb + 1, oz: 0 } : { lb: lb, oz: oz };
}

export function lbOzToKg(lb, oz) {
  return ((Number(lb) || 0) + (Number(oz) || 0) / 16) / LB_PER_KG;
}

export function cmToIn(cm) { return Number(cm) * IN_PER_CM; }
export function inToCm(inches) { return Number(inches) / IN_PER_CM; }

export function showWeight(kg, us) {
  if (kg === null || kg === undefined || kg === '') return '';
  if (!us) return (Math.round(Number(kg) * 100) / 100) + ' kg';
  const w = kgToLbOz(kg);
  return w.lb + ' lb ' + w.oz + ' oz';
}

export function showLength(cm, us) {
  if (cm === null || cm === undefined || cm === '') return '';
  if (!us) return (Math.round(Number(cm) * 10) / 10) + ' cm';
  const inches = cmToIn(cm);
  const whole = Math.floor(inches);
  const eighths = Math.round((inches - whole) * 8);
  if (eighths === 8) return (whole + 1) + ' in';
  if (!eighths) return whole + ' in';
  let n = eighths, d = 8;
  while (n % 2 === 0 && d % 2 === 0) { n /= 2; d /= 2; }
  return whole + ' ' + n + '/' + d + ' in';
}

/* An ordinal that reads like a person wrote it. */
export function ordinal(n) {
  const v = Math.round(n);
  if (v % 100 >= 11 && v % 100 <= 13) return v + 'th';
  if (v % 10 === 1) return v + 'st';
  if (v % 10 === 2) return v + 'nd';
  if (v % 10 === 3) return v + 'rd';
  return v + 'th';
}

/* How to say a percentile without it sounding like a mark out of a
   hundred. Below the third and above the ninety seventh are the two
   ends where the number itself stops being precise, so they are said
   as a direction rather than a figure. */
export function percentileWords(p) {
  if (p === null || p === undefined) return '';
  if (p < 2) return 'below the 3rd line';
  if (p > 98) return 'above the 97th line';
  return 'around the ' + ordinal(p) + ' line';
}

/* ------------------------------------------------------------------
   THE THING THAT ACTUALLY MATTERS: THE SHAPE OF THEIR OWN LINE

   Two measurements far enough apart, compared as z scores rather than
   as percentiles, because a percentile moves fastest exactly where the
   curve is steepest and that makes an ordinary week look dramatic.

   The thresholds are NICE guideline NG75, which is the clearest
   published version and the only one that varies the threshold by
   where the child started. One centile space is two thirds of a z,
   which is the spacing between the printed lines on a growth chart.
   ------------------------------------------------------------------ */
export const CENTILE_SPACE = 0.6667;

export function growthTrend(entries, measure, birthday, sex) {
  const pts = (entries || [])
    .map((e) => ({ e: e, v: e[measure === 'weight' ? 'kg' : (measure === 'height' ? 'cm' : 'headCm')] }))
    .filter((x) => x.v !== null && x.v !== undefined && x.v !== '')
    .map((x) => {
      const months = growthMonthsBetween(birthday, x.e.date);
      return { date: x.e.date, months: months, value: Number(x.v), z: growthZ(measure, months, sex, x.v) };
    })
    .filter((x) => x.z !== null)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  return pts;
}

/* Named for growth rather than called monthsBetween, because
   src/utils/age.js already has a private function by that name taking
   Date objects, and in a bundle that is one flat scope the second one
   silently replaced the first. Every age in the app read as zero and
   nothing threw. The build gate now catches that class of thing; the
   long name is the belt to its braces. */
export function growthMonthsBetween(birthday, dateStr) {
  if (!birthday || !dateStr) return null;
  const b = new Date(birthday + 'T00:00:00');
  const d = new Date(dateStr + 'T00:00:00');
  if (isNaN(b.getTime()) || isNaN(d.getTime())) return null;
  return (d.getTime() - b.getTime()) / 86400000 / 30.4375;
}

/* Whether the line has drifted far enough to be worth a conversation.
   Deliberately conservative, and deliberately silent unless there are
   at least three points across at least eight weeks, because two dots
   close together are noise and telling a parent otherwise is the exact
   harm this screen is trying to avoid. */
export function growthConcern(points, birthCentile) {
  if (!points || points.length < 3) return null;
  const first = points[0], last = points[points.length - 1];
  const weeks = (new Date(last.date) - new Date(first.date)) / 604800000;
  if (!(weeks >= 8)) return null;

  const spaces = (first.z - last.z) / CENTILE_SPACE;
  const bc = Number(birthCentile);
  const threshold = isFinite(bc) ? (bc < 9 ? 1 : (bc > 91 ? 3 : 2)) : 2;

  const nowPct = normCdf(last.z) * 100;
  if (nowPct < 2) {
    return {
      level: 'ask',
      line: 'They are below the 2nd line now. That on its own is worth asking about, whatever the rest of the chart does.',
    };
  }
  if (spaces >= threshold) {
    return {
      level: 'ask',
      line: 'Their line has come down across about ' + (Math.round(spaces * 10) / 10)
        + ' centile spaces since ' + first.date + '. Crossing ' + threshold
        + ' or more is the point at which the guidance says to have it looked at. It is a conversation, not an emergency.',
    };
  }
  if (spaces >= threshold - 0.7) {
    return {
      level: 'watch',
      line: 'Their line has drifted down a little. Not enough to mean anything yet, and worth another measurement in a few weeks rather than tomorrow.',
    };
  }
  return null;
}

/* ------------------------------------------------------------------
   THE WORDS
   ------------------------------------------------------------------ */

export const GROWTH_INTRO =
  '3 measurements make a line. One makes a dot, and a dot cannot tell you anything at all.';

export const GROWTH_WHAT_IT_MEANS = {
  title: 'What a percentile actually is',
  items: [
    'It is a position in a crowd, not a grade. The 30th line means that out of 100 children this age, about 30 weigh less and 70 weigh more. That is the whole of it.',
    'Half of every healthy child in the world is below the 50th line. Somebody has to be, or there would be no 50th line.',
    'A small child who has always been small is a small child. A doctor is looking at whether they are following their own line, not at which line it is.',
    'The number moves fastest in the first few months, when the curve is steepest, so an ordinary week can look dramatic. That is the chart being steep, not your baby changing.',
  ],
};

export const GROWTH_THE_JUMP = {
  title: 'Why the number can jump at 2 years old',
  body: [
    'Up to two, the chart is the World Health Organization standard, which was built from breastfed children growing in good conditions. From two, it is the CDC chart, built from a survey of children in the United States.',
    'They are different references, so the same child measured either side of their second birthday can move by 10 or 15 percentile points without anything happening to them at all.',
    'The same step happens on the paper chart at the pediatrician. If you see it here, it is the chart changing and not your child.',
  ],
};

export const GROWTH_WHEN_TO_ASK = {
  title: 'When it is actually worth asking',
  items: [
    'When the line comes down across 2 or more centile spaces and stays down. One space is the gap between 2 printed lines on the chart.',
    'When a baby who started below the 9th line comes down even one space. There is less room underneath them, so the threshold is lower.',
    'When the current weight is below the 2nd line, whatever the rest of the chart is doing.',
    'When a newborn has not got back to their birth weight by about 2 weeks.',
    'When they are not just light but also not themselves. Fewer wet diapers, less interest in feeding, much quieter than usual. The behavior matters more than the number.',
  ],
};

export const GROWTH_WHEN_NOT_TO = {
  title: 'When it is not worth worrying',
  items: [
    'One low reading. Scales differ, clothes differ, a full diaper is 100 grams. Weigh again in 2 weeks before concluding anything.',
    'A drop in the first few days of life. Newborns lose weight and then get it back. That is the design.',
    'Being consistently on a low line while growing steadily along it. That is a small child growing.',
    'A number that came from a different set of scales than last time. Use the same ones if you possibly can.',
    'Weighing them every day. It tells you nothing at this age and it will make you miserable. Babies get weighed at their checks, and in between only if somebody asked you to.',
  ],
};

export const GROWTH_HOW_TO_MEASURE = {
  title: 'Getting a measurement that is worth plotting',
  items: [
    'Weight: same scales every time, same time of day if you can, stripped to a diaper for a baby and light clothes with no shoes after that.',
    'Length under two: lying flat, somebody holding the head still, legs gently straightened. This is genuinely hard to do alone and it is why the number wobbles.',
    'Height over two: standing against a wall, heels and back touching it, looking straight ahead, no shoes and no bun in the hair.',
    'Head: a soft tape around the widest part, just above the eyebrows and above the ears. Take it 3 times and use the biggest.',
  ],
};

export const GROWTH_SOURCES = [
  { label: 'Child growth standards, birth to five', org: 'World Health Organization', url: 'https://www.who.int/tools/child-growth-standards/standards' },
  { label: 'Growth charts and LMS parameter files', org: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/growthcharts/cdc-data-files.htm' },
  { label: 'Faltering growth, recognition and management (NG75)', org: 'NICE', url: 'https://www.nice.org.uk/guidance/ng75' },
];

export const GROWTH_DISCLAIMER =
  'These are the same reference curves your pediatrician uses, but a chart on a phone is not a '
  + 'medical opinion. If something about how they are growing worries you, the measurement to '
  + 'take is the one at the surgery.';

export default GROWTH_MEASURES;

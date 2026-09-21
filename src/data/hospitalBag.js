/**
 * Ready Set Grow: Hospital Bag
 * ------------------------------------------------------------------
 * A packing checklist that behaves like a friend who has done this
 * before, not like a registry.
 *
 * WHY THIS FILE EXISTS
 * Almost every hospital bag list online is a product list. It tells you
 * to bring a robe. It does not tell you that the hospital gives you mesh
 * underwear and you should ask for more before you are discharged, or
 * that the pillow you bring should have a colored pillowcase so it does
 * not get collected with the hospital linens.
 *
 * THE STRUCTURE
 * Items are grouped by who they are for, because in the moment you are
 * grabbing one bag, not five. Every item carries an optional `note` that
 * says the thing a nurse or a second time parent would tell you.
 *
 * `essential` marks the small set you genuinely cannot replace on site.
 * `insiderTip` marks the items people are surprised by. The screen can
 * surface those separately, since they are the reason to read a list you
 * think you already know.
 *
 * WHAT WE DELIBERATELY DO NOT DO
 * We do not recommend brands. We do not tell anyone what their birth
 * should look like. The cesarean and NICU sections exist because those
 * are common outcomes, not because they are worst cases, and they are
 * written that way.
 *
 * TIMING
 * Packing guidance says to have the bag ready by 36 weeks. Babies arrive
 * before their due dates often enough that a bag packed at 39 weeks is a
 * bag that sometimes does not get packed.
 */

/* ------------------------------------------------------------------
 * WHEN TO PACK
 * ------------------------------------------------------------------ */

export const PACKING_TIMELINE = {
  id: 'packing-timeline',
  headline: 'Have it by the door at 36 weeks',
  body:
    'About 1 in 10 babies is born preterm, and plenty of full term babies come at 37 or 38 weeks. ' +
    'A bag that is packed early is a bag you never have to think about again. If you go past your ' +
    'due date, nothing is lost. If you go early, everything is.',
  steps: [
    'By 32 weeks, make the list and buy anything you do not already own.',
    'By 36 weeks, pack the bag and put it wherever you would grab it on the way out.',
    'Put the car seat base in the car at the same time, and get the install checked.',
    'Photograph your ID, insurance card and any birth preferences and keep the photos on your phone, in case the physical copies stay home.',
    'Tell your partner or support person where the bag is. In the moment, you may not be the one carrying it.',
  ],
  note:
    'Most hospitals will not send you home without a car seat that is installed and buckled correctly. ' +
    'That is the one item that cannot be improvised on the day.',
};

/* ------------------------------------------------------------------
 * THE CHECKLIST
 * ------------------------------------------------------------------ */

export const BAG_CATEGORIES = [
  {
    id: 'documents',
    label: 'Documents and logistics',
    order: 10,
    intro: 'Small, boring, and the only category where forgetting something creates real friction.',
    items: [
      {
        id: 'doc-id',
        label: 'Photo ID and insurance card',
        essential: true,
      },
      {
        id: 'doc-hospital-forms',
        label: 'Pre registration paperwork, if your hospital sent any',
        note: 'Many hospitals let you pre register online in the third trimester. Doing it early means you are not filling out forms during contractions.',
      },
      {
        id: 'doc-birth-preferences',
        label: 'Birth preferences, one page, several copies',
        note: 'One page. Nurses change shifts and a short sheet actually gets read. Bring copies so it can go in the chart and stay on the wall.',
        insiderTip: true,
      },
      {
        id: 'doc-pediatrician',
        label: 'Your chosen pediatrician’s name and phone number',
        note: 'The hospital will ask who is taking over the baby’s care, and it is easier to answer that in advance than to pick from a list while exhausted.',
        insiderTip: true,
      },
      {
        id: 'doc-phone-list',
        label: 'A written list of who to call, on paper or in a note',
        note: 'Phones die. If someone else needs to make the calls, they need the numbers.',
      },
      {
        id: 'doc-parking',
        label: 'Parking cash or a card, and a note of where you parked',
        note: 'Genuinely. People forget where the car is after a night with no sleep.',
        insiderTip: true,
      },
    ],
  },
  {
    id: 'labor',
    label: 'For labor itself',
    order: 20,
    intro: 'You may use none of this. Bring it anyway, because you cannot go get it later.',
    items: [
      {
        id: 'labor-hair',
        label: 'Hair ties, clips, or a headband',
        note: 'Hair in your face during transition is a small misery with an easy fix.',
        essential: true,
      },
      {
        id: 'labor-lip-balm',
        label: 'Lip balm',
        note: 'Labor rooms are dry, and breathing through contractions dries you out further. This is the single most commonly named forgotten item.',
        insiderTip: true,
      },
      {
        id: 'labor-socks',
        label: 'Warm socks with grip on the bottom',
        note: 'Hospital floors are cold and slippery. Grip socks let you walk and lean without a nurse hovering.',
        insiderTip: true,
      },
      {
        id: 'labor-glasses',
        label: 'Glasses, and a case, if you wear contacts',
        note: 'You may not be able to wear contacts through a long labor or a cesarean.',
      },
      {
        id: 'labor-chargers',
        label: 'Extra long phone charger, and a battery pack',
        note: 'Hospital outlets are never near the bed. A 10 foot cord solves a problem you will otherwise complain about for 2 days.',
        insiderTip: true,
        essential: true,
      },
      {
        id: 'labor-music',
        label: 'A playlist or headphones, downloaded, not streaming',
        note: 'Hospital wifi is not reliable. Download whatever you want to hear before you go.',
      },
      {
        id: 'labor-comfort',
        label: 'Anything that helps you settle: a massage tool, a heat pack, a familiar smell',
        note: 'Ask whether your unit allows heat packs and essential oils before you count on them.',
      },
      {
        id: 'labor-snacks-partner',
        label: 'Snacks and drinks for your support person',
        note: 'Cafeterias close. Your support person leaving to find food is your support person not being there.',
        insiderTip: true,
      },
      {
        id: 'labor-own-snacks',
        label: 'Your own snacks, if your provider allows eating in labor',
        note: 'Policies vary a lot, and some units allow clear liquids only. Ask at a prenatal visit rather than guessing.',
      },
    ],
  },
  {
    id: 'for-you',
    label: 'For you, after',
    order: 30,
    intro: 'The recovery days are longer than the birth. Pack for those.',
    items: [
      {
        id: 'you-going-home',
        label: 'Going home clothes that fit you at about 6 months pregnant',
        note: 'Your belly does not go down immediately. Soft, loose, and forgiving. Nothing with a waistband that sits on a cesarean incision.',
        essential: true,
        insiderTip: true,
      },
      {
        id: 'you-nursing-bra',
        label: '2 soft nursing bras or bralettes with no underwire',
        note: 'Your size will change when your milk comes in around day 3 to 5. Buy stretchy, and do not buy your final size in advance.',
        insiderTip: true,
      },
      {
        id: 'you-robe',
        label: 'A robe or zip up that opens at the front',
        note: 'Front opening matters for skin to skin and for feeding. A dark color hides more than a light one.',
      },
      {
        id: 'you-underwear',
        label: 'Your own underwear, high waisted, dark, disposable or old',
        note: 'The hospital gives you mesh underwear. Ask for extra to take home before you are discharged, because most people end up wanting more of it.',
        insiderTip: true,
      },
      {
        id: 'you-toiletries',
        label: 'Toiletries, including your own shampoo and a hair brush',
        note: 'The first shower after birth is a genuine event. Having your own soap makes it feel like yours.',
      },
      {
        id: 'you-towel',
        label: 'Your own towel, optional but often mentioned',
        note: 'Hospital towels are small and thin. This is a low cost comfort.',
      },
      {
        id: 'you-pillow',
        label: 'Your own pillow, in a colored pillowcase',
        note: 'The colored case is the trick. White cases get swept up with hospital linens and disappear.',
        insiderTip: true,
      },
      {
        id: 'you-flip-flops',
        label: 'Shower shoes or flip flops',
      },
      {
        id: 'you-glasses-case',
        label: 'Medications you take daily, in their original bottles',
        note: 'Tell the nurse what you take. Do not stop anything on your own. The hospital may want to dispense it rather than have you take your own.',
        essential: true,
      },
      {
        id: 'you-water-bottle',
        label: 'A large water bottle with a straw',
        note: 'You will be thirsty in a way that surprises you, particularly if you are feeding. A straw means you can drink without sitting up.',
        insiderTip: true,
      },
    ],
  },
  {
    id: 'feeding',
    label: 'Feeding',
    order: 40,
    intro:
      'However you plan to feed, the hospital has the basics. These are the items that make the first ' +
      'days easier rather than the items you cannot do without.',
    items: [
      {
        id: 'feed-nipple-cream',
        label: 'Nipple cream, lanolin or a hospital grade ointment',
        note: 'Ask the hospital first. Many units hand it out free, and then you have two.',
      },
      {
        id: 'feed-pillow',
        label: 'A feeding pillow, if you have one',
        note: 'Bulky. Skip it if the bag is full. A rolled up blanket does the same job.',
      },
      {
        id: 'feed-pump-parts',
        label: 'Your pump flanges and parts, if you already have a pump',
        note: 'Most hospitals have hospital grade pumps you can use, but they may not have your flange size. Bring your own parts even if you leave the pump at home.',
        insiderTip: true,
      },
      {
        id: 'feed-bottles',
        label: 'Bottles and formula, if you are formula feeding or combination feeding',
        note: 'Hospitals stock ready to feed formula. If you want a specific one, bring it. No one has to justify how they feed their baby.',
      },
      {
        id: 'feed-ask-lc',
        label: 'A note to yourself: ask for the lactation consultant',
        note: 'Most hospitals have one, and most people do not know to ask before discharge. Ask on day one, not on the way out.',
        insiderTip: true,
        essential: true,
      },
    ],
  },
  {
    id: 'baby',
    label: 'For the baby',
    order: 50,
    intro: 'Less than you think. The hospital provides diapers, wipes, and usually everything else.',
    items: [
      {
        id: 'baby-car-seat',
        label: 'An installed, checked infant car seat',
        note: 'Install it weeks before, and get the install checked. Many fire departments and hospitals have certified technicians who check for free.',
        essential: true,
      },
      {
        id: 'baby-going-home',
        label: 'Going home outfit, in 2 sizes',
        note: 'Bring newborn and 0 to 3 months. Babies come in sizes nobody predicts, and the outfit you pictured may not fit.',
        insiderTip: true,
      },
      {
        id: 'baby-weather',
        label: 'A hat and weather appropriate layers',
        note: 'Bulky coats and snowsuits do not go under car seat straps. Buckle the baby in thin layers, then put a blanket over the straps.',
        insiderTip: true,
      },
      {
        id: 'baby-swaddle',
        label: 'One or 2 swaddles or receiving blankets',
        note: 'The hospital gives you the striped ones. Ask if you can keep them, most units say yes.',
      },
      {
        id: 'baby-mittens',
        label: 'Scratch mittens or sleeves that fold over',
        note: 'Newborn nails are sharp and their arms are not under their control yet.',
      },
    ],
  },
  {
    id: 'partner',
    label: 'For your support person',
    order: 60,
    intro:
      'They are staying too, usually on a chair that unfolds badly. A support person who has slept ' +
      'and eaten is a support person who can help.',
    items: [
      {
        id: 'partner-clothes',
        label: 'A change of clothes for at least 2 days',
        note: 'Labor is unpredictable. Pack for longer than you expect.',
      },
      {
        id: 'partner-pillow',
        label: 'Their own pillow and a blanket',
        note: 'Hospitals often will not give bedding to a non patient.',
        insiderTip: true,
      },
      {
        id: 'partner-toiletries',
        label: 'Toiletries and a toothbrush',
      },
      {
        id: 'partner-snacks',
        label: 'Real food, not just snacks',
        note: 'Overnight, the cafeteria is closed and the vending machine is the whole menu.',
      },
      {
        id: 'partner-charger',
        label: 'Their own charger',
        note: '2 people, 2 phones, 2 cables. Sharing one becomes a problem at 3am.',
      },
    ],
  },
];

/* ------------------------------------------------------------------
 * SITUATION SPECIFIC ADDITIONS
 * ------------------------------------------------------------------ */

export const BAG_ADDITIONS = [
  {
    id: 'cesarean',
    label: 'If you have a cesarean, planned or not',
    intro:
      'About a third of births in the United States are cesarean, and many of those were not planned. ' +
      'This is a longer hospital stay, usually 2 to 4 days, and a different recovery, not a lesser one.',
    items: [
      'High waisted underwear that sits well above the incision. Anything at the waistband is going to hurt.',
      'Loose dresses or wide leg pants, nothing that has to be pulled up past the incision.',
      'A small pillow to hold against your belly in the car, for bumps and for coughing and sneezing.',
      'Pack for an extra day or 2 beyond what you planned.',
      'A grabber or a plan for how you will pick things up, since bending is limited at first.',
    ],
    note:
      'Ask the nurses to show you how to get out of bed by rolling to your side first. It is a specific ' +
      'technique and it makes a real difference. Ask before you need to do it alone.',
  },
  {
    id: 'nicu',
    label: 'If your baby goes to the NICU',
    intro:
      'This is common enough to prepare for, and nobody prepares for it. About 1 in 10 babies spends ' +
      'time in a NICU. It is not always about prematurity, sometimes it is a few hours of monitoring.',
    items: [
      'A pump, or a plan to use the hospital grade one. Ask a nurse to help you start within the first 6 hours if your baby cannot feed directly.',
      'Labels and a marker for milk, and ask where the NICU stores it.',
      'A cardigan or something with pockets, since you will be sitting for long stretches.',
      'Something small of yours to leave in the isolette if the unit allows it, such as a cloth that smells like you.',
      'Snacks and a refillable bottle, because you will lose track of eating.',
    ],
    note:
      'Ask for the name of your baby’s primary nurse and write it down. Ask what time rounds happen so ' +
      'you can be there for them. Those 2 questions change how much information you get.',
  },
  {
    id: 'induction',
    label: 'If you are being induced',
    intro:
      'Inductions can take a long time, sometimes more than a day before active labor starts. Pack ' +
      'for waiting, not just for birthing.',
    items: [
      'Something to do that is not your phone. A book, cards, a download.',
      'A longer charging cable, and the battery pack.',
      'Comfortable clothes for the early hours, when you are not yet in active labor.',
      'Your own snacks if allowed, since early induction hours are often food permitted while active labor may not be.',
    ],
    note:
      'Ask what the plan is at each stage and roughly how long each step usually takes. Knowing the shape ' +
      'of the day makes the waiting far easier.',
  },
];

/* ------------------------------------------------------------------
 * WHAT NOT TO BRING
 * ------------------------------------------------------------------ */

export const SKIP_THESE = {
  id: 'skip',
  headline: 'Things almost everyone packs and almost nobody uses',
  items: [
    { label: 'Newborn diapers and wipes', why: 'The hospital provides them, and gives you the open packs to take home.' },
    { label: 'A full outfit for every day', why: 'You will live in the hospital gown and a robe.' },
    { label: 'Jewelry and anything valuable', why: 'Rings may not fit with swelling, and rooms are not secure.' },
    { label: 'A hair dryer or styling tools', why: 'It is not that kind of trip.' },
    { label: 'Postpartum pads', why: 'The hospital supply is heavier duty than anything you can buy. Ask for extras to take home.' },
    { label: 'Books you intend to read', why: 'One, maybe. Not five.' },
  ],
  note:
    'The real rule is that anything the hospital opens for you is yours. Ask before discharge for extra ' +
    'mesh underwear, pads, peri bottle, ice packs and witch hazel pads. Those go home with you, and they ' +
    'are better than the retail versions.',
};

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

export function getCategories() {
  return [...BAG_CATEGORIES].sort((a, b) => a.order - b.order);
}

export function getCategory(id) {
  if (!id) return null;
  return BAG_CATEGORIES.find((c) => c.id === id) || null;
}

/** Flat list of every item, with its category attached. */
export function getAllItems() {
  const out = [];
  getCategories().forEach((cat) => {
    (cat.items || []).forEach((item) => {
      out.push({ ...item, categoryId: cat.id, categoryLabel: cat.label });
    });
  });
  return out;
}

/** The small set that cannot be replaced at the hospital. */
export function getEssentials() {
  return getAllItems().filter((i) => i.essential);
}

/** The items people are surprised by. This is the reason to read the list. */
export function getInsiderTips() {
  return getAllItems().filter((i) => i.insiderTip);
}

export function getAddition(id) {
  if (!id) return null;
  return BAG_ADDITIONS.find((a) => a.id === id) || null;
}

/**
 * Progress across the whole bag, given a set of checked item ids.
 * Returns totals plus a per category breakdown so a screen can show
 * both a single bar and a row per category.
 */
export function getBagProgress(checkedIds) {
  const checked = new Set(checkedIds || []);
  const categories = getCategories().map((cat) => {
    const items = cat.items || [];
    const done = items.filter((i) => checked.has(i.id)).length;
    return {
      id: cat.id,
      label: cat.label,
      total: items.length,
      done,
      complete: items.length > 0 && done === items.length,
    };
  });
  const total = categories.reduce((sum, c) => sum + c.total, 0);
  const done = categories.reduce((sum, c) => sum + c.done, 0);
  const essentials = getEssentials();
  const essentialsDone = essentials.filter((i) => checked.has(i.id)).length;
  return {
    total,
    done,
    percent: total === 0 ? 0 : Math.round((done / total) * 100),
    categories,
    essentialsTotal: essentials.length,
    essentialsDone,
    essentialsComplete: essentials.length > 0 && essentialsDone === essentials.length,
  };
}

export const BAG_ITEM_IDS = getAllItems().map((i) => i.id);

export const HOSPITAL_BAG_SOURCES = [
  {
    org: 'ACOG',
    label: 'Preparing for birth and what to expect in the hospital',
    url: 'https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins',
  },
  {
    org: 'NHTSA',
    label: 'Car seat installation and finding a free inspection station',
    url: 'https://www.nhtsa.gov/car-seats-and-booster-seats',
  },
  {
    org: 'AAP, HealthyChildren',
    label: 'Bringing your baby home, and what the hospital provides',
    url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/Going-Home.aspx',
  },
  {
    org: 'CDC',
    label: 'Preterm birth rates, why the bag is packed at 36 weeks',
    url: 'https://www.cdc.gov/maternal-infant-health/preterm-birth/index.html',
  },
];

export default BAG_CATEGORIES;

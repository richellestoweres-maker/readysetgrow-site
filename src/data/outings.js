/**
 * Ready Set Grow: Outings
 * ------------------------------------------------------------------
 * WHY THIS EXISTS
 * Going anywhere with a small child is a logistics problem nobody
 * teaches, and the advice that does exist is packing lists written by
 * people selling the things on the list.
 *
 * TWO THINGS THIS FILE DOES THAT LISTS DO NOT
 *
 * ONE. It tells you what NOT to carry. Most of the misery of traveling
 * with a baby is hauling a crib and a high chair through an airport,
 * and a lot of that is avoidable. Renting at the other end, borrowing
 * from the hotel, finding out what the ship already has. That section
 * comes before the packing list on purpose.
 *
 * TWO. It takes safe sleep seriously somewhere else. Safe sleep at home
 * is well covered everywhere. Safe sleep in a hotel room at midnight
 * with a jetlagged baby and no crib is where people improvise, and
 * improvising is where babies die. So the sleep section leads with the
 * rule rather than the tips.
 *
 * THE SLEEP POD PROBLEM, STATED CAREFULLY
 * Loungers and docks are everywhere in travel advice and a great many
 * parents own one. They are genuinely useful for supervised awake time
 * and they are not sleep surfaces. Since 2022 a product meant for
 * infant sleep has to meet a federal standard, including a sleep
 * surface angle of ten degrees or less, and the CPSC has specifically
 * warned about loungers being used for sleep. This file says so plainly
 * and without making anybody feel stupid for owning one, because the
 * packaging on these things is doing its best to blur exactly that
 * line.
 *
 * WHAT A PACK AND PLAY ACTUALLY IS
 * A play yard, which is one of the categories that does meet a federal
 * safe sleep standard. Which is why it is the answer to this whole
 * section and why it is worth renting one rather than trusting whatever
 * is in the closet of a hotel room.
 *
 * SOURCES at the bottom. TSA, FAA, CPSC and the cruise lines' own
 * published policies, all linked.
 */

export const OUT_TITLE = 'Outings';

export const OUT_SUB = 'Going places with them, from an afternoon out to a flight.';

export const OUT_INTRO =
  'Leaving the house with a small child is a logistics problem, and it is a solvable one. Most of '
  + 'what makes it awful is carrying things you did not need to carry and not knowing a rule until '
  + 'somebody stops you at a gate.';

/* ------------------------------------------------------------------
 * DO NOT CARRY IT
 * First, because it changes the shape of everything after it.
 * ------------------------------------------------------------------ */

export const OUT_RENT = {
  title: 'Rent it, do not haul it',
  headline: 'You can have a crib, a high chair and a stroller waiting at the other end. Most parents have no idea.',
  body: [
    'Baby gear rental is a real and unglamorous industry that almost nobody tells new parents about. You book before you travel, choose what you want, and it is delivered to your hotel, your rental, a family member’s house or in some places the airport, and collected again when you leave.',
    'BabyQuip is the biggest one in the US and works this way. The gear is cleaned between rentals, checked against recall lists and expiry dates, and carries liability insurance. There are regional companies in most vacation spots too, and they are often cheaper.',
    'The arithmetic is usually obvious once you look at it. A week of crib and high chair rental against checking a pack and play, wrestling it through an airport with a baby on your hip, and hoping it survives the hold.',
  ],
  worthRenting: [
    'The crib or play yard. The single biggest thing you can stop carrying.',
    'A high chair, which no hotel reliably has enough of.',
    'A stroller, especially if yours is the good heavy one.',
    'A car seat, if you are not bringing your own and the rental car company would otherwise charge you a fortune for a mystery one.',
    'Bulky things you will use for 4 days: a bath seat, a monitor, a bouncer, stair gates.',
  ],
  bringAnyway: [
    'Your own car seat if you possibly can. It is the one piece of gear where knowing its history matters, and airlines carry it free.',
    'Anything they sleep with. Their sleep bag, their comforter, the specific muslin. This is the cheapest sleep insurance there is.',
    'Enough formula or milk for the journey plus a full extra day. Brands vary by country and a hungry baby is not the moment to find out.',
    'Medicine you would not want to hunt for in an unfamiliar pharmacy at 2am.',
  ],
};

/* ------------------------------------------------------------------
 * SLEEP AWAY FROM HOME
 * The safety rule first, then the craft.
 * ------------------------------------------------------------------ */

export const OUT_SLEEP = {
  title: 'Sleeping somewhere that is not home',
  headline: 'This is the part that goes wrong, and it is the part worth getting right before you leave.',
  theRule: {
    label: 'The one rule that does not bend for travel',
    body: [
      'A baby under one needs a firm, flat, empty surface of their own, on their back. That does not change because you are in a hotel, or at your mother in law’s, or because everybody is tired and it is one night.',
      'Since 2022 anything sold for infant sleep in the US has to meet a federal safety standard, including a sleep surface angle of no more than 10 degrees. That rule took inclined sleepers, in bed sleepers and non compliant travel bassinets off the market.',
      'The things that do meet a safe sleep standard are full size cribs, smaller cribs, play yards, bassinets and cradles, and bedside sleepers. A play yard is what a pack and play is, which is exactly why it is the travel answer.',
    ],
  },
  thePod: {
    label: 'About loungers, docks and sleep pods',
    body: [
      'These are the soft padded nests with a raised rim, and a lot of parents own one. They are genuinely useful for supervised awake time, for a safe spot on somebody’s living room floor, for tummy time, for putting the baby down for 2 minutes while you are in the room watching.',
      'They are not sleep surfaces, and they do not meet the federal infant sleep standard. The CPSC has issued specific warnings about loungers being used for sleep, including by name. The soft sides and padded base are the problem.',
      'This is worth saying plainly because the marketing around them is doing its best to blur that line, and because they turn up constantly in travel advice as a hotel sleep solution. Take one if it is useful awake. Do not let it be the plan for the night.',
    ],
  },
  darkness: {
    label: 'The 2 things that actually make a strange room work',
    body: [
      'Dark, and the same noise as home. Unfamiliar rooms fail on light and on sound far more often than on the bed itself.',
      'Suction cup blackout panels, or the portable blackout blinds that stick to the glass, are the single best thing in the bag. Hotel curtains almost never close properly and there is always a gap, a smoke alarm light, or a parking lot floodlight. Binder clips or clothespins on the curtain gap are the free version and they work.',
      'Bring the white noise. The same one, at the same volume. It is a portable piece of their bedroom and it costs nothing to pack.',
      'Their sleep bag and their comforter matter more than the room does. Smell does a lot of the work here.',
    ],
  },
  theRoom: {
    label: 'Sharing a room with them, which you probably are',
    body: [
      'Put them somewhere they cannot see you. Around a corner, in a dressing area, on the far side of a suitcase stood on its end, behind the curtain of a connecting door. A baby who can see you at 5am wants you at 5am.',
      'Bathrooms are the classic answer for a travel crib and they are fine if the room is ventilated, not damp, and the extractor is off. Take the trash out first.',
      'Go to bed in the dark with them, or sit in the bathroom with the door shut and the light on. Everybody has done a vacation evening reading on a toilet lid.',
      'Keep the bedtime routine identical even if the timing slips. The order of events is the signal, not the clock.',
    ],
  },
  hotelCribs:
    'If you are relying on a hotel crib, ask before you book rather than on arrival, and ask 3 '
    + 'things: whether it is a crib or a play yard, whether it comes with a mattress that fits it, and '
    + 'whether they have more than one. Hotels routinely have two for 200 rooms. What turns '
    + 'up can also be older than the current standards, which is a real reason to rent instead.',
};

/* ------------------------------------------------------------------
 * FLYING
 * ------------------------------------------------------------------ */

export const OUT_FLY = {
  title: 'Flying',
  headline: '2 rules genuinely worth knowing before you get to the airport, and the rest is craft.',
  milkAndFormula: {
    label: 'Milk, formula and baby food go through security',
    items: [
      'Breast milk, formula and juice are exempt from the 100ml liquids rule. You can take more than 3.4 ounces and it does not have to fit in the quart bag.',
      'You do not have to be traveling with your child to bring breast milk. Pumping on a work trip and flying it home is allowed.',
      'Take them out of your bag at the checkpoint to be screened separately, and say what they are.',
      'Ice packs, freezer packs and cooler bags are allowed, including when they have partly thawed.',
      'Expect extra screening sometimes. They may test the outside of the container. You can ask for it not to be opened and for alternative screening instead.',
      'Allow an extra 10 minutes for all of this and it is a non event. Allow none and it is the worst part of your day.',
    ],
  },
  carSeat: {
    label: 'The car seat question, answered honestly',
    items: [
      'The FAA is unambiguous: the safest place for a child under two on a plane is in an approved restraint, not on your lap. They stop short of requiring it, and they recommend it for every child from birth to 40 pounds.',
      'The reason is turbulence and aborted takeoffs rather than crashes. Arms cannot hold a 20 pound child against that.',
      'A seat is FAA approved if it carries the label saying it is certified for use in aircraft, in red lettering. Almost every harnessed infant and convertible seat has one. Check yours at home, not at the gate.',
      'Belt positioning booster seats cannot be used in flight, because there is no shoulder belt. You can carry one on as baggage.',
      'The CARES harness is the light alternative for older toddlers, and it has height and weight limits. Smaller toddlers can slide underneath it, so it is not a substitute for a harnessed seat for a young one.',
      'A car seat used in flight needs its own paid seat. Buying a seat for an under two is expensive and it is the safest option, and it is completely reasonable to weigh that against what a flight costs your family.',
      'Gate checking a seat is free on US airlines, and it is where seats get damaged. A padded bag and a photo of it undamaged before you hand it over costs you nothing and settles arguments.',
    ],
  },
  practical: {
    label: 'The things that actually make the flight survivable',
    items: [
      'Feed, suck or drink on the way up and on the way down. Anything that makes them swallow sorts their ears out. A bottle, the breast, a pacifier, a straw cup, a lollipop for a bigger one.',
      'Book the bassinet position the moment you book the flight if you are long haul. There are 2 or 3 on the plane and they go instantly. Weight and length limits apply and vary by airline.',
      'Board last with a walking toddler, not first. The gate is a bigger room than the plane.',
      'One parent boards early with the bags and the car seat, one stays out with the child until final call. This is the best trick in this section.',
      'Change them right before boarding. Aircraft changing tables are tiny and there is a queue.',
      'Pack twice the diapers you think, and one full change of clothes for you as well as for them. You are the one who has to sit in it for 6 hours.',
      'New small things, wrapped, one per hour, doled out. Novelty is the whole resource on a plane.',
      'A pouch or snack they have to work at slowly is worth 3 toys.',
    ],
  },
};

/* ------------------------------------------------------------------
 * THE ROAD
 * ------------------------------------------------------------------ */

export const OUT_ROAD = {
  title: 'Road trips',
  headline: 'Easier than flying in every way except one, which is that the car seat rules do not relax because the drive is long.',
  safety: [
    'Nothing goes behind or under the child in the seat. No aftermarket inserts, no rolled towel behind the back, no seat protector that did not come with the seat, no strap covers that are not the manufacturer’s. Every one of those changes how the seat performs in a crash.',
    'Coats come off. A bulky coat leaves a gap under the harness that closes in a crash and leaves the straps loose. Harness first, then coat on backwards over the top, or a blanket.',
    'Nothing loose in the cabin. A hard toy, a tablet or a travel mug becomes a projectile at speed. Soft things only within reach.',
    'Never leave them in the car. Not for a minute, not with the engine running, not in mild weather. A car interior climbs dangerously fast even on a pleasant day. Put something you cannot leave without, a phone or a shoe, in the back beside them every single time you drive.',
  ],
  practical: [
    'Drive into a nap if the timing works, and accept that a nap in the car is a shorter nap than a nap in a bed.',
    'Stop every 2 hours or so for anybody in a car seat, and stop properly, out of the seat, moving. Long uninterrupted stretches in a seat are not good for a small baby’s breathing.',
    'Feed at the stops, not on the move. Choking risk in a moving car is real and you cannot see them.',
    'A window shade that actually blocks sun, not the mesh kind that does very little.',
    'A bag in the boot and a bag in the cabin. Everything you need at a stop goes in the cabin one.',
    'Take a trash bag. A grocery bag hung on a headrest saves the footwell.',
  ],
};

/* ------------------------------------------------------------------
 * CRUISES
 * ------------------------------------------------------------------ */

export const OUT_CRUISE = {
  title: 'Cruises',
  headline: 'The 2 rules that catch families out are an age minimum and a pool rule, and both are enforced hard.',
  rules: [
    'Most major lines require a baby to be at least 6 months old on the first day of the cruise.',
    'That rises to 12 months for transatlantic and transpacific crossings, Hawaii, some South American itineraries, and crucially any sailing with 3 or more consecutive days at sea. That last one catches people who did not think of their cruise as a long haul one.',
    'It is enforced at the terminal, boarding is refused, and there is no refund. Check your specific sailing against your specific baby’s birthday before you pay.',
    'Children in diapers, and children who are not fully toilet trained, are not allowed in the main pools or hot tubs. This is a public health rule, it is not negotiable, and a swim diaper does not change it.',
    'Some ships have a separate baby splash area for exactly this reason. Some do not. It is a per ship question rather than a per cruise line one, so check your ship by name.',
    'Ship childcare usually has its own minimum age, often 6 months or older, and the daycare is often paid and books out. Reserve it when you board, not when you want it.',
  ],
  provided: [
    'Cribs or play yards, usually free, but you request them in advance rather than on arrival.',
    'High chairs in the dining rooms as standard.',
    'Bottle warming and refrigeration, though cabin fridges are cooler boxes rather than real fridges and do not reliably keep milk cold. Ask.',
    'Diapers and wipes in the shops, at prices that will make you laugh. Bring your own.',
  ],
  worthKnowing: [
    'Your cabin will be dark, which is genuinely the best sleep environment your baby has had all year. Interior cabins especially.',
    'The cabin is small, so you are in the dark with them at 7pm. A balcony changes this enormously and is worth the upgrade with a baby.',
    'Port days with a baby are shorter than you imagine. Plan one thing.',
    'Bring a small night light and something to cover the bright safety lights.',
  ],
};

/* ------------------------------------------------------------------
 * HOTELS AND RENTALS
 * ------------------------------------------------------------------ */

export const OUT_STAY = {
  title: 'Hotels and rentals',
  ask: {
    label: 'Ask these before you book',
    items: [
      'Is there a crib, is it a crib or a play yard, does it come with a mattress, and how many do you have.',
      'Is there a bath, or only a shower. This matters more than people expect with a baby.',
      'Is there a fridge in the room, a real one or a cooler box.',
      'Is it a separate bedroom or one room. One room with a baby means your evening ends at seven.',
      'What floor, and is there an elevator. Stairs with a stroller is a different vacation.',
    ],
  },
  babyproof: {
    label: '10 minutes when you arrive',
    items: [
      'Walk the room on your knees once. You will find the cables, the sockets, the sharp corner and the thing under the bed.',
      'Move the minibar contents and the glass out of reach, and the kettle cord off the side.',
      'Check the window opening and the balcony gaps. Balcony railings in older buildings are often wide enough to climb or slide through.',
      'Find the cord on the blinds and tie it up high. Blind cords are a strangulation risk and they are at exactly toddler height.',
      'Decide where they are sleeping before you are tired, and set it up now.',
      'Bring a couple of outlet covers and a roll of painter’s tape. The tape holds a cupboard shut, covers a socket, and tapes a blackout panel up.',
    ],
  },
};

/* ------------------------------------------------------------------
 * DAYS OUT
 * ------------------------------------------------------------------ */

export const OUT_DAYS = {
  title: 'Days out and afternoons',
  items: [
    'Go early. Almost everything with a small child is better before 11 and worse after three.',
    'One thing a day. 2 things with a toddler is how a nice day becomes a bad one.',
    'Find the changing table before you need it, when you arrive, not when it is urgent.',
    'Restaurants: ask for the food to come when it comes rather than together, and ask for their food first. A toddler with bread is a toddler with a timer on them.',
    'Sit somewhere you can leave from easily. The booth at the back is a trap.',
    'Beaches and pools: shade, then sun cream, then water. Under 6 months should be kept out of direct sun rather than covered in cream.',
    'Water is never a nearly. Within arm’s reach for anybody under five, and one named adult watching rather than everybody vaguely watching.',
    'Leave while it is still going well. The whole skill is leaving 20 minutes before you want to.',
  ],
};

/* ------------------------------------------------------------------
 * THE BAG, BY AGE
 * ------------------------------------------------------------------ */

export const OUT_BAGS = [
  {
    id: 'newborn',
    label: 'Newborn and small baby',
    max: 6,
    items: [
      'Diapers: one for every hour you will be out, plus two. Round up, never down',
      '2 full changes of clothes, and one top for you',
      'Muslins, more than one',
      'Feeding kit: bottles and formula, or a cover if you want one, or nothing at all',
      'A carrier, which beats a stroller almost everywhere that is not a pavement',
      'A blanket that works as a mat, a sunshade and a cover',
      'Pacifier and a spare, in a case',
      'Hand sanitiser and a bag for the wet things',
    ],
  },
  {
    id: 'baby',
    label: 'Sitting up to crawling',
    max: 12,
    items: [
      'Everything above, and now snacks and a cup',
      'A few small toys, and a clip so they do not end up on the floor',
      'Something to chew, because everything is teething at this stage',
      'A portable high chair strap or seat, which turns any chair into a place they can sit',
      'A spare pacifier and a spare comforter if the real one is load bearing',
    ],
  },
  {
    id: 'toddler',
    label: 'Toddler',
    max: 36,
    items: [
      'Snacks, plural, and water',
      'A change of clothes and a bag for the wet ones, well past potty training',
      'A small sticker book or a pad and crayons, which weigh nothing',
      'A comforter, if there is one',
      'Sun cream and a hat in summer, gloves that stay on in winter',
      'Bandages, because there is always a knee',
      'Something familiar for the journey and something new for the hard bit',
    ],
  },
  /* THE BAND THAT WAS MISSING.

     The list used to run toddler to 48 months and then straight to
     school age, so Stetson at four years five months was handed the
     twelve year old's list. Four and five are their own thing: out of
     diapers mostly, still needing a spare pair of pants, and old
     enough to carry something. */
  {
    id: 'preschool',
    label: '3 to 6',
    max: 72,
    items: [
      'Water and snacks, and one more snack than that',
      'Spare underwear and pants, because accidents keep happening well past training',
      'Wipes, still. Faces, hands, seats, everything',
      'A hat and sun cream, or gloves and a warm layer',
      'Bandages. There is always a knee',
      'Something small to do while waiting, a pad and crayons or a sticker book',
      'A comforter if there is one, even if they say there is not',
      'Their own small backpack, with two of their own things in it',
    ],
  },
  {
    id: 'big',
    label: 'School age and up',
    max: 1000,
    items: [
      'Water, and more snacks than seems reasonable',
      'A layer. They will say they are not cold and then be cold',
      'Something to do that is not a screen, and the screen',
      'Headphones, so it is not everybody’s problem',
      'A charged phone, or a card in their pocket with your number written on it for anywhere crowded',
      'Any medication they take, in its own labeled box rather than loose',
      'A little cash, so they are not stuck if a phone dies',
      'Let them pack and carry their own small bag. It is half the battle and they like it',
    ],
  },
];

/* Things that are packed once for the whole outing rather than once
   per child. They used to be scattered through each age list, which
   meant a parent of three saw "sun cream" three times. */
export const OUT_SHARED = {
  id: 'everyone',
  label: 'For everyone',
  items: [
    'Water, and more of it than you think',
    'Sun cream and hats, or gloves and layers',
    'A small first aid kit. Bandages, infant acetaminophen, an antihistamine',
    'Phone charger or a battery pack',
    'A bag for wet or dirty things',
    'Snacks that are not in the diaper bag, for you',
    'Hand sanitiser and a pack of wipes within reach',
  ],
};

/* A stable id per line, so ticking something survives the wording of
   that line being improved later. Built from the list id and the
   position rather than stored by hand, because a hand maintained id
   list is a list that drifts. */
export function outItemId(listId, index) {
  return String(listId) + ':' + String(index);
}

/* PACKING FOR THE CHILD YOU ACTUALLY HAVE.
 *
 * She asked for this and she is right that it is the difference
 * between an app that mentions inclusion and one that does anything
 * about it. A generic packing list is written for an imaginary average
 * child, and the parent who most needs a list is the one whose child
 * is not that.
 *
 * The lenses are already set per child, so the packing list knows. A
 * child with the autism lens on gets ear defenders and a chew on their
 * list. A deaf child gets spare batteries and a drying kit. Nobody has
 * to remember to go and look somewhere else.
 *
 * THE RULE THIS IS WRITTEN UNDER, SAME AS EVERY LENS IN THIS APP
 * These are things that help, not things a diagnosis requires. Nothing
 * here says your child has anything. It says parents of children who
 * need this kind of support have found these worth having in the bag,
 * which is true and useful and not a label.
 *
 * WHY IT IS ADDITIVE RATHER THAN A REPLACEMENT
 * A child with two lenses on gets both lists merged, with duplicates
 * removed, on top of their ordinary age list. Nothing is taken away,
 * because a child who needs ear defenders still needs a change of
 * clothes.
 */
export const OUT_LENS_PACK = {
  adhd: {
    label: 'Because sitting still is hard work',
    items: [
      'Something for their hands. A fidget, a stress ball, a bit of blu tack',
      'More snacks than the age list says. Medication can flatten appetite, and then it comes back all at once',
      'Their medication in its own labeled box, with the timing written down if somebody else might be giving it',
      'A plan they have heard out loud. Where you are going, how long, what happens after',
      'Somewhere to run before you need them to sit. 10 minutes of moving buys you an hour of still',
    ],
  },
  autism: {
    label: 'Because the world is louder here',
    items: [
      'Ear defenders, and headphones as well if they use both for different things',
      'Sunglasses or a cap. Fluorescent light and glare are as much of a problem as noise',
      'A chew, or whatever they use for that',
      'The comfort item, and a spare if one exists',
      'Familiar food. Somewhere new is not the day to find out what they will eat',
      'The plan, as pictures or a written list they can hold',
      'Something with their name and your number on it, or a tag, for anywhere crowded',
      'A decided quiet place and a decided way out, before you need either',
    ],
  },
  pda: {
    label: 'Because being told is the hard part',
    items: [
      'Real choices packed in advance. 2 snacks, 2 activities, 2 hats',
      'The plan offered rather than announced, and loosely',
      'A way out that is theirs to take rather than yours to impose',
      'Extra time built in, so nothing has to become a demand',
    ],
  },
  sensory: {
    label: 'Because how it feels decides how it goes',
    items: [
      'Ear defenders',
      'The clothes that work. Seamless socks, the soft label free top, the one pair of pants',
      'A spare set of the same clothes rather than different ones',
      'Familiar food and a familiar cup',
      'Something heavy for their lap, or the weighted thing if they have one',
      'Wipes, for the texture problems as much as the mess',
    ],
  },
  communication: {
    label: 'Because being understood should not depend on the room',
    items: [
      'Their communication device, charged, plus the charger and a battery pack',
      'A paper backup. Picture cards or a printed board, for when the device dies or gets wet',
      'A card you can hand to somebody explaining how your child communicates',
      'Their signs, if you sign, and the family knowing the 10 that matter most',
    ],
  },
  speech: {
    label: 'Because strangers will not understand them yet',
    items: [
      'Picture cards or a phone with their pictures on it',
      'A card explaining how they communicate, so you are not translating for every stranger',
      'Extra time for ordering, asking and answering',
    ],
  },
  selectiveMutism: {
    label: 'Because speaking to strangers may not be possible today',
    items: [
      'A written card they can hand over instead of speaking',
      'Their order or their question written down before you arrive',
      'An agreed signal that means take over for me',
      'No expectation packed at all. This is the one that matters',
    ],
  },
  auditoryProcessing: {
    label: 'Because noise takes the words away',
    items: [
      'Ear defenders or noise reducing earbuds for busy places',
      'The plan written down, since a spoken plan in a loud room did not happen',
      'Extra time, and a habit of checking rather than assuming',
    ],
  },
  deafHoh: {
    label: 'Because the equipment has to survive the trip',
    items: [
      'Spare batteries, more than you think, and the charger for rechargeables',
      'A drying kit or a dehumidifier pot. Heat, damp and swimming are hard on aids and processors',
      'Retention clips, toupee tape or a headband, especially for water and wind',
      'The remote microphone if they use one, charged',
      'Spare cables, coils, domes or earmolds. The small part that fails is always the one you did not bring',
      'A waterproof case or a dry bag for anything going near water',
      'Your audiologist details, and the make and model written down',
      'Captions downloaded rather than streamed, for anything they will watch on the way',
      'A card explaining that your child is deaf, for staff, drivers and anybody with a whistle',
    ],
  },
  blindLowVision: {
    label: 'Because the space has to be learned, not seen',
    items: [
      'Their cane, and a spare tip',
      'Familiar toys that work by touch and sound rather than by looking',
      'Sunglasses or a brimmed hat. Light sensitivity is very common and glare outdoors is exhausting',
      'A description of where you are going, talked through before you get there',
      'Tactile markers. A few bump dots or a bit of textured tape to mark their bed, their cup, the bathroom door',
      'Anything high contrast that helps. Their own dark plate, a bright cup',
      'Their own bedding, since the room will be learned by touch rather than by sight',
    ],
  },
  downSyndrome: {
    label: 'Because the day needs more room in it',
    items: [
      'Extra time, built into the plan rather than hoped for',
      'Signs or picture cards, if you use them',
      'Familiar food and their own cup or straw cup',
      'A buggy or carrier for longer distances than you would expect at their age. Low tone makes walking tiring',
      'A letter from your care team if there is a heart, thyroid or airway issue, and the medication list',
      'Spare clothes past the age the ordinary list would suggest',
    ],
  },
  motor: {
    label: 'Because getting about takes more here',
    items: [
      'A buggy, carrier or wheelchair for further than they would usually manage',
      'Their adaptive cutlery, cup or seat insert',
      'Somewhere supported to sit, rather than assuming a chair will work',
      'Shoes or splints they actually walk in, plus a spare pair of socks',
      'Plan the route for the surface, not the distance. Cobbles and sand are a different trip',
    ],
  },
  tics: {
    label: 'Because tired and watched both make it worse',
    items: [
      'Water. A lot of vocal tics get worse when a throat is dry',
      'An agreed quiet place to go if it gets loud, without anybody making it a thing',
      'A card or a sentence you have both agreed on for strangers who stare',
      'Rest built into the day, since tiredness is the biggest driver there is',
    ],
  },
  anxiety: {
    label: 'Because knowing is most of it',
    items: [
      'The plan, told in advance and in order, and a photo of where you are going',
      'A comfort item, whatever age they are',
      'An agreed way out, and an agreed signal for needing it',
      'Something to do with their hands for the waiting parts',
      'Food and water, since hunger turns into panic faster than anyone expects',
    ],
  },
  ocd: {
    label: 'Because a strange place raises the volume',
    items: [
      'Anything you already use for the hard moments, packed rather than left at home',
      'Extra time for the parts that take longer',
      'Their own soap or towel if that is one of the ones that matters',
    ],
  },
  emotionalRegulation: {
    label: 'Because the fall happens fast',
    items: [
      'Food and water within reach, always, and earlier than seems necessary',
      'A decided place to go to come down, chosen when you arrive rather than mid meltdown',
      'The comfort item',
      'A shorter day than you planned. This is the pack item people forget',
    ],
  },
  bigChanges: {
    label: 'Because the change is the difficult bit',
    items: [
      'The plan in advance, with the parts that will be different named out loud',
      'Something from home that is coming too and is theirs',
      'The routine kept in the same order even when the timing slips',
      'Photos of where you are going, looked at before you leave',
    ],
  },
  executiveFunction: {
    label: 'Because holding the steps is the hard part',
    items: [
      'A packing list they tick themselves, which is what this screen is',
      'A written list of what is happening, in order, that they keep',
      'A labeled bag per day or per activity, rather than one bag to rummage in',
      'Photos of where you put things',
    ],
  },
  learningDifferences: {
    label: 'Because reading the signs is somebody else’s job today',
    items: [
      'Anything they need read aloud already dealt with. Tickets, times, menus checked in advance',
      'Their reading tool if they use one, and its charger',
      'A checklist in pictures rather than words',
    ],
  },
  prematurity: {
    label: 'Because corrected age is the age that counts',
    items: [
      'Pack for their corrected age, not the date on the birth certificate',
      'Anything medical, in the cabin bag and never checked',
      'Their feeding kit exactly as at home, including the specific bottle',
      'A note of their corrected age and any ongoing care, for anybody who needs it',
      'More caution about crowds and germs in the first winter than an ordinary list assumes',
    ],
  },
  medicalComplexity: {
    label: 'Because running out is not an option',
    items: [
      'Medication and supplies for twice the days you are away',
      'Everything in the cabin bag. Nothing medical goes in the hold, ever',
      'A written list of conditions, medications and doses, and a photo of it on 2 phones',
      'A letter from your team, especially for flying with equipment or liquids',
      'Prescriptions in original labeled boxes',
      'Chargers, spare batteries, and the right plug adapter for any equipment',
      'The nearest hospital and pharmacy to where you are staying, looked up before you go',
      'Your insurance details and any prior authorization, on paper as well as on a phone',
    ],
  },
  gifted: {
    label: 'Because boredom is the risk',
    items: [
      'Something harder than seems age appropriate. They will finish the easy thing on the way there',
      'A book well above their level',
      'A real question to think about for the journey',
    ],
  },
  exploring: {
    label: 'Because you are still working it out',
    items: [
      'Ear defenders are worth trying even if you are not sure. They are cheap and they either help or they do not',
      'A comfort item, whatever their age',
      'A shorter day than you planned, and a way out',
      'A note on your phone of what worked and what did not. That note is how you find out',
    ],
  },
};

/* One merged list for a child, from whichever lenses they have on.
   Additive, deduplicated, and never a replacement for the age list.

   ON THE DEDUPLICATION, WHICH TOOK TWO GOES.
   A child with autism and sensory both on was getting "Ear defenders"
   twice, because autism says "Ear defenders, and headphones as well if
   they use both" and sensory just says "Ear defenders". So the first
   attempt keyed on the opening fourteen characters, which merged those
   two correctly and also merged five pairs that are genuinely
   different items, such as "A card explaining how they communicate"
   and "A card explaining that your child is deaf". Losing the second
   of those for a child who is deaf AND uses a device is exactly the
   kind of quiet failure this whole feature exists to avoid.

   So it merges only when one line is actually the start of the other,
   which is true for the ear defenders case and false for the cards.
   Where they do overlap, the longer wording wins, since it is the one
   carrying the extra detail. */
export function outLensPack(lensIds) {
  const norm = (t) => String(t).toLowerCase().replace(/[^a-z]/g, '');
  const kept = [];
  (lensIds || []).forEach((id) => {
    const entry = OUT_LENS_PACK[id];
    if (!entry) return;
    entry.items.forEach((line) => {
      const a = norm(line);
      if (!a) return;
      for (let i = 0; i < kept.length; i++) {
        const b = norm(kept[i]);
        if (a === b || a.indexOf(b) === 0 || b.indexOf(a) === 0) {
          /* Same item, said at two lengths. Keep the fuller one. */
          if (a.length > b.length) kept[i] = line;
          return;
        }
      }
      kept.push(line);
    });
  });
  return kept;
}

export function outLensLabels(lensIds) {
  return (lensIds || [])
    .filter((id) => OUT_LENS_PACK[id])
    .map((id) => OUT_LENS_PACK[id].label);
}

export const OUT_LENS_NOTE =
  'These are on this list because of the support lenses you have turned on for them. Nothing here '
  + 'is a requirement and nothing here is a diagnosis. They are the things parents in the same '
  + 'situation say they wish somebody had told them to pack.';

export const OUT_LENS_NONE =
  'If your child needs something the standard list does not cover, turn on a support lens for them '
  + 'under Understanding and this list will change to match.';

/* A CHECKLIST PER TRIP, NOT ONE LIST FOR EVERYTHING.
 *
 * Her words: it is not just one list, it is a list for flying, for
 * cruising, for days out, for road trips, for everything. She is
 * right. Packing for an afternoon at the park and packing for a seven
 * night cruise share maybe a third of their items, and one list that
 * tries to cover both is wrong for both.
 *
 * SO THE SHAPE IS: pick the trip, and the checklist is built from
 * three layers.
 *   1. What everybody needs for that kind of trip
 *   2. What each child needs at their own age
 *   3. What each child needs because of the lenses they have on
 *
 * Ticks are saved against the trip as well as the list, so packing for
 * a cruise does not quietly tick off your day bag.
 */
export const OUT_TRIPS = [
  {
    id: 'day',
    label: 'An afternoon out',
    everyoneLabel: 'Just for today',
    blurb: 'The park, the shops, somebody’s house. Back before bedtime.',
    everyone: [],
    perChild: [],
    note: 'Keep this bag packed between outings and restock it when you get home rather than when you leave.',
  },
  {
    id: 'road',
    label: 'A road trip',
    everyoneLabel: 'Because you are driving',
    blurb: 'Hours in the car, with stops.',
    everyone: [
      'A trash bag, or a grocery bag hooked on a headrest',
      'Wipes and a roll of paper towel in the cabin, not the boot',
      'A cooler bag for milk, snacks and anything that must stay cold',
      'Window shades that actually block sun, not the mesh kind',
      'A phone mount, and a charger for every phone',
      'Change and a card for tolls and parking',
      'A blanket each, for sleeping and for the moment the air conditioning wins',
      'Sick bags or a lidded tub within reach of whoever gets car sick',
      'The bag you need at stops packed separately from the bag in the boot',
    ],
    perChild: [
      'Diapers: one per hour of driving plus four, in the cabin rather than the boot',
      'Their own drink, in something that does not spill when it rolls under a seat',
      'Snacks they can manage alone, handed out at stops rather than on the move',
      'Soft things only. Anything hard within reach is a projectile at speed',
      'A change of clothes in the cabin, not the boot',
    ],
    note: 'Stop every 2 hours or so for anybody in a car seat, and stop properly, out of the seat and moving.',
  },
  {
    id: 'night',
    label: 'A night or 2 away',
    everyoneLabel: 'Because you are sleeping there',
    blurb: 'One sleep somewhere else, which is the hardest single night of any trip.',
    everyone: [
      'Blackout. Suction panels, a travel blind, or binder clips and a trash bag',
      'White noise, the same one, at the same volume',
      'A night light, so you are not using the main light at 3am',
      'Travel detergent or a couple of pods, for the inevitable',
      'Medicine you would not want to hunt for at 2am, in its own bag',
    ],
    perChild: [
      'Diapers: a full day\u2019s worth plus six. Somebody else\u2019s house at 2am is not the moment to run out',
      'Whatever they sleep in. Sleep bag, comforter, the specific muslin. The most important thing you will pack',
      'Their own fitted sheet. Smell does more than you expect, and hotel crib sheets rarely fit anyway',
      'A travel crib for anyone under two, or a confirmed promise of one',
      '2 more outfits than the number of nights',
      'Their toothbrush, and their own toothpaste if the flavour matters',
    ],
    note: 'The first night away is nearly always bad and the second is nearly always fine. Plan for that rather than being surprised by it.',
  },
  {
    id: 'week',
    label: 'A week or more',
    everyoneLabel: 'Because you are away a while',
    blurb: 'Long enough that laundry beats packing more.',
    everyone: [
      'Everything from the overnight list, plus a plan for washing',
      'Travel detergent, a few hangers, and a small drying line for a rental',
      'Prescriptions in original labeled boxes, with a photo of each label on your phone',
      'The nearest pharmacy and urgent care to where you are staying, looked up before you go',
      'Insurance details on paper as well as on a phone',
      'A plug adapter for every country, and one more than you think',
    ],
    perChild: [
      'Diapers: 3 days\u2019 worth and buy the rest there, unless you are going somewhere rural or abroad where your size may not be on the shelf',
      '4 days of clothes and a plan to wash, whatever the length of the trip',
      'One outfit per day plus two for anyone under three',
      'Enough formula or milk for the whole trip plus 2 days. Brands and availability change by country',
      'Shoes that are already broken in. A vacation is not the week for new sandals',
      'Their own sun cream, if theirs is the one that does not cause a reaction',
    ],
    note: 'Rent the bulky things at the other end rather than checking them. The next tab is entirely about that.',
  },
  {
    id: 'plane',
    label: 'Flying',
    everyoneLabel: 'Because you are flying',
    blurb: 'Different rules, and a bag that has to work in a meter of space.',
    everyone: [
      'Passports for everybody including the baby, and any visa or travel authorization',
      'A notarised consent letter if one parent is traveling without the other',
      'A birth certificate or proof of age for a lap infant, since airlines do ask',
      'Boarding passes downloaded rather than relying on signal at the gate',
      'Everything medical in the cabin. Nothing medical in the hold, ever',
      'A padded bag for a gate checked car seat or stroller, and a photo of it undamaged before you hand it over',
      'Snacks bought after security, since the good ones are past it',
      'An empty water bottle each, filled on the other side',
    ],
    perChild: [
      'Diapers: twice what the same hours on the ground would need. Delays are the reason, and you cannot buy more at 30,000 feet',
      'A full change of clothes, and a spare top for you, in a bag you can reach without standing up',
      'Feeds for the whole journey plus one extra, planned around takeoff and landing',
      'Something to suck on going up and coming down. Bottle, breast, pacifier, straw cup, lollipop',
      'Small new things, wrapped, one per hour. Novelty is the only resource you have on a plane',
      'A pouch or a snack they have to work at slowly',
      'Their comforter, in the cabin bag and never in the hold',
      'A muslin or a light blanket. Planes are cold and the blanket may not come',
      'A plastic bag for the clothes that do not survive',
    ],
    note: 'Book the bassinet position the moment you book the flight. There are 2 or 3 on the plane and they go instantly.',
  },
  {
    id: 'cruise',
    label: 'A cruise',
    everyoneLabel: 'Because you are on a ship',
    blurb: 'A hotel that moves, with its own rules about small children.',
    everyone: [
      'Check the age minimum against your sailing before you pay. 6 months on most lines, 12 for any itinerary with 3 or more days at sea in a row',
      'Passports, and a birth certificate for anyone who does not have one yet',
      'A power strip with no surge protector, since surge protectors are confiscated on most ships',
      'A magnetic hook or two. Cabin walls are steel and there is nowhere to put anything',
      'A small night light, and something to cover the bright safety lights in the cabin',
      'Motion sickness remedies for everybody, including the ones who have never needed them',
      'A lanyard for each cruise card, children included',
      'A small backpack for port days, packed the night before',
      'Cash in small notes for taxis and markets in port',
    ],
    perChild: [
      'Diapers for the whole sailing plus 3 days. The ship shop will have some, at a price that will make you laugh',
      'Swim diapers, and the knowledge that they will not get your child into the main pool. Most lines do not allow children in diapers in any pool, only in a baby splash area if the ship has one',
      'A rash vest and sun cream, reapplied more often than you think at sea',
      'Their own cup with a lid, for the buffet and the cabin',
      'A carrier for gangways and tenders, which are not stroller friendly',
      'Their sleep kit exactly as at home. An interior cabin is the darkest room they will ever sleep in',
      'Whatever the daycare asks for, and the daycare booked the day you board rather than the day you want it',
    ],
    note: 'Request the crib when you book rather than on arrival, and check whether your specific ship has a baby splash area. It is a per ship question, not a per cruise line one.',
  },
];

export function outTripById(id) {
  return OUT_TRIPS.filter((t) => t.id === id)[0] || OUT_TRIPS[0];
}

export function outBagForAge(months) {
  if (typeof months !== 'number') return OUT_BAGS[1];
  for (let i = 0; i < OUT_BAGS.length; i++) {
    if (months < OUT_BAGS[i].max) return OUT_BAGS[i];
  }
  return OUT_BAGS[OUT_BAGS.length - 1];
}

/* Which section a parent of this age most likely came for, so the tab
   they land on is the useful one. */
export function outFirstTab(months) {
  if (typeof months !== 'number') return 'bag';
  if (months < 12) return 'sleep';
  return 'bag';
}

export const OUT_SOURCES = [
  { org: 'TSA', label: 'Breast milk, formula and juice are exempt from the liquids rule', url: 'https://www.tsa.gov/travel/frequently-asked-questions/breast-milk-formula-and-juice-exempt-3-1-1-liquids-rule' },
  { org: 'TSA', label: 'Traveling with children', url: 'https://www.tsa.gov/travel/tsa-cares/traveling-children' },
  { org: 'FAA', label: 'Flying with children and child restraint systems', url: 'https://www.faa.gov/travelers/fly_children' },
  { org: 'CPSC', label: 'Federal infant sleep products safety standard', url: 'https://www.cpsc.gov/Newsroom/News-Releases/2022/CPSCs-New-Federal-Infant-Sleep-Products-Safety-Standard-Takes-Effect' },
  { org: 'CPSC', label: 'Safe sleep, cribs and infant products', url: 'https://www.cpsc.gov/SafeSleep' },
  { org: 'Royal Caribbean', label: 'Infant age policy, including the three sea day rule', url: 'https://www.royalcaribbean.com/faq/questions/international-age-policy' },
  { org: 'Royal Caribbean', label: 'Children in diapers and the onboard pools', url: 'https://www.royalcaribbean.com/faq/questions/are-children-in-diapers-allowed-in-the-onboard-pools' },
];

export const OUT_NOT_SPONSORED =
  'Rental companies and products are named because being told what exists is useful. Nothing here is '
  + 'sponsored and nobody has paid to be mentioned.';

export default OUT_TITLE;

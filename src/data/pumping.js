/**
 * Ready Set Grow: Pumping and Milk
 * ------------------------------------------------------------------
 * Flange fitting, schedules, output, storage, and the things nobody
 * tells you until you are already crying at 2am.
 *
 * WHY THIS FILE IS AS LONG AS IT IS
 * Pumping is where the gap between what parents are told and what they
 * need to know is widest. People are handed a pump and no instructions.
 * The default flange in the box fits a minority of people. Nobody
 * mentions that milk can come out of the freezer smelling like soap and
 * that this is normal and fixable. Nobody explains that the amount in the
 * bottle is not a measure of your supply.
 *
 * THE PRINCIPLE THIS FILE HOLDS
 * Pumping is a skill with adjustable variables, not a verdict on your
 * body. Almost every "I can't pump enough" problem turns out to be flange
 * size, frequency, settings, or comparison to a formula bottle. We say
 * that plainly and early, every time.
 *
 * THE HARD LINE ON SUPPLY
 * We give evidence based levers. We do not sell or recommend
 * galactagogues, supplements, teas or cookies. Most have thin or no
 * evidence, some interact with medications, and the ones that work do so
 * far less reliably than removing milk more often. If someone's supply is
 * genuinely low, the answer is an IBCLC, not a product.
 *
 * COMMUNITY TIPS ARE LABELED
 * Some of what parents pass around works and has never been studied.
 * Those entries carry `evidence: 'community'` and say so in the text.
 * Established guidance carries `evidence: 'established'`. We never blur
 * the two, because a parent deciding what to do with 300 ounces of frozen
 * milk deserves to know which is which.
 *
 * WHAT IS NOT HERE
 * We do not give dosing, we do not diagnose mastitis or thrush, and we do
 * not tell anyone whether to keep going. Those belong to a person who can
 * see them.
 */

/* ------------------------------------------------------------------
 * FLANGE FITTING
 * The single highest impact thing in this file.
 * ------------------------------------------------------------------ */

export const FLANGE_FITTING = {
  id: 'flange-fitting',
  label: 'Flange fitting',
  headline: 'The flange in the box probably does not fit you',
  evidence: 'established',
  whyItMatters:
    'Pumps ship with 24mm and 27mm flanges because those are middle of the road, not because they fit ' +
    'most people. A flange that is too large or too small causes pain, damage, and low output, and every ' +
    'one of those gets blamed on supply instead of on a plastic funnel. Getting this right is usually the ' +
    'fastest improvement available to a person who is struggling.',
  howToMeasure: [
    'Do this right before a pump or a feed, when your nipple is already stimulated. Measuring it soft gives you a number that is too small.',
    'Measure the nipple only, straight across at its widest point, which is usually the base. Do not include any of the areola, the darker circle around it.',
    'Measure in millimeters. A ruler works. Many pump companies also send a printable measuring card.',
    'Add 2 to 4mm to your measurement. That is your likely flange size.',
    'Measure both sides. It is very common for them to be different sizes, and it is fine to use two different flanges.',
  ],
  example:
    'If you measure 17mm, you are likely looking at a 19mm to 21mm flange, not the 24mm that came in the box.',
  goodFit: [
    'Your nipple moves freely in and out of the tunnel without rubbing the sides.',
    'Little or no areola gets pulled in, and what does gets pulled in gently.',
    'It does not hurt. Pumping should feel like a tug, never like pain.',
    'After you finish, your nipple looks like it did before, not swollen, blanched white, cracked or ridged.',
  ],
  tooSmall: [
    'Pain during pumping, sometimes sharp.',
    'Your nipple rubs the sides of the tunnel, or barely moves at all.',
    'The nipple looks white, flattened or ridged when you take the flange off.',
    'Cracks, blisters or scabbing.',
    'Output drops, because the ducts are being compressed.',
  ],
  tooLarge: [
    'A lot of areola gets pulled into the tunnel with each cycle.',
    'A tugging or dragging sensation rather than a rhythmic pull.',
    'Gaps where the flange does not sit flush against your breast, which loses suction.',
    'Swelling or a puffy ring around the areola afterward.',
    'Output drops, because suction is being spread across tissue instead of focused where the milk is.',
  ],
  keepChecking:
    'Your size changes. Most people size down at least once in the first several months, and swelling in ' +
    'the first two weeks postpartum can make you temporarily larger. If pumping suddenly starts hurting, or ' +
    'output drops for no reason, re measure before you assume anything about your supply.',
  inserts:
    'If you are between sizes, or you need to go smaller than the smallest flange your pump sells, silicone ' +
    'inserts drop a flange down by a few millimeters and are cheap. They are a normal solution, not a hack.',
  askForHelp:
    'An IBCLC will size you in about five minutes and watch you pump. If pumping hurts and adjusting the ' +
    'size has not fixed it, that is a reason to be seen, not a reason to push through.',
  sources: [
    {
      org: 'Cleveland Clinic',
      label: 'Finding your breast pump flange size',
      url: 'https://health.clevelandclinic.org/breast-pump-flange',
    },
    {
      org: 'CDC',
      label: 'How to keep your pump kit clean',
      url: 'https://www.cdc.gov/hygiene/about/how-to-keep-your-breast-pump-kit-clean.html',
    },
  ],
};

/* ------------------------------------------------------------------
 * PUMP SETTINGS
 * ------------------------------------------------------------------ */

export const PUMP_SETTINGS = {
  id: 'pump-settings',
  label: 'Settings, and what the buttons actually do',
  evidence: 'established',
  headline: 'Higher suction is not more milk',
  intro:
    'Most double electric pumps have two modes and two dials, and most people are never shown how to use ' +
    'them. Turning everything to maximum is the most common mistake and it usually reduces output while ' +
    'causing damage.',
  modes: [
    {
      name: 'Letdown or stimulation mode',
      what: 'Fast, light cycles that mimic how a baby sucks at the start of a feed, before milk flows.',
      how: 'Start here. When you see milk spraying or dripping steadily, switch to expression mode.',
    },
    {
      name: 'Expression mode',
      what: 'Slower, deeper cycles that mimic how a baby drinks once milk is flowing.',
      how: 'Stay here while milk is actively flowing. If flow stops for a minute or two, switch back to letdown mode to trigger another one. Most people get two or three letdowns per session.',
    },
  ],
  suctionRule:
    'Turn the suction up slowly until it feels like a firm tug, then back it off one notch. That is your ' +
    'number. If it hurts, it is too high, and pain triggers a stress response that actively works against ' +
    'letdown.',
  sessionLength:
    'Aim for about 15 to 20 minutes, or roughly 2 to 5 minutes past the last drop. Pumping much longer than ' +
    'that on an empty breast is how people end up with damage.',
  helpsLetdown: [
    'Warmth on the breast for a few minutes first.',
    'Hands on pumping, meaning gently massaging and compressing while the pump runs. This reliably increases both volume and fat content.',
    'Not watching the bottle. Cover it, or turn away. Watching the number is stressful and stress delays letdown.',
    'A photo or video of your baby, or a piece of their clothing, if you are pumping away from them.',
    'Being somewhere you feel unobserved. This is physiology, not preference.',
  ],
  maintenance: [
    'Replace duckbills or valve membranes every few weeks to a couple of months with regular use. Worn valves are a very common cause of sudden output drops.',
    'Replace tubing if you see moisture or mold inside it. Do not try to dry and reuse moldy tubing.',
    'Check that flanges are not cracked and that everything seals.',
    'Wash pump parts after every use and follow the CDC cleaning guidance. Parts that touch milk need real cleaning, not a rinse.',
  ],
  suddenDrop:
    'If output falls off a cliff, check the equipment before you panic about your body. Worn valves, a ' +
    'cracked flange, a loose connection or a pump motor at end of life account for most sudden drops.',
  sources: [
    {
      org: 'CDC',
      label: 'How to keep your breast pump kit clean',
      url: 'https://www.cdc.gov/hygiene/about/how-to-keep-your-breast-pump-kit-clean.html',
    },
  ],
};

/* ------------------------------------------------------------------
 * SCHEDULES BY GOAL
 * ------------------------------------------------------------------ */

export const PUMPING_GOALS = [
  {
    id: 'exclusive',
    label: 'Exclusively pumping',
    priority: 100,
    who: 'Your baby is getting your milk by bottle, whether by choice or because direct feeding is not working.',
    principle:
      'Supply follows removal. Frequency matters more than session length, because a breast that is ' +
      'emptied often makes more than a breast that is emptied thoroughly but rarely.',
    guidance: [
      'In the first 12 weeks, most people need 8 to 12 sessions in 24 hours to build and hold a full supply.',
      'A common way to think about it is total time rather than session count. Roughly 120 minutes of pumping across 24 hours, however you divide it.',
      'Do not go longer than about 5 to 6 hours overnight in the early weeks. Prolactin, the hormone that drives supply, is highest overnight, so that stretch is worth more than the same time during the day.',
      'After about 12 weeks, once supply is established, many people drop to 6 to 7 sessions while holding output steady. Drop one session at a time and watch what happens for several days before dropping another.',
    ],
    sampleDay: [
      { time: '6:00 AM', note: 'First session, usually your biggest of the day' },
      { time: '9:00 AM', note: '' },
      { time: '12:00 PM', note: '' },
      { time: '3:00 PM', note: '' },
      { time: '6:00 PM', note: 'Often the smallest, and that is normal' },
      { time: '9:00 PM', note: '' },
      { time: '12:00 AM', note: '' },
      { time: '3:00 AM', note: 'Drop this one last, not first' },
    ],
    reassurance:
      'Exclusive pumping is the hardest way to feed a baby, because you are doing the feeding and the ' +
      'pumping and the washing. If you are doing it, you are doing something genuinely difficult.',
  },
  {
    id: 'return-to-work',
    label: 'Going back to work',
    priority: 94,
    who: 'You are feeding directly when you are together, and pumping while you are apart.',
    principle:
      'Match the pump to the feeds you miss. If your baby eats three times while you are gone, pump three ' +
      'times. Trying to fit four feeds worth into two sessions is what causes supply to slide.',
    guidance: [
      'Start practicing about 2 weeks before you go back, so bottles are familiar and so you have a small buffer.',
      'You need far less of a freezer stash than the internet suggests. Enough for the first few days is plenty, because what you pump today feeds your baby tomorrow.',
      'Pump roughly every 3 hours while you are away, about 15 to 20 minutes each time.',
      'Feed directly right before you leave and right when you get back. Those feeds count.',
      'On days off, feed directly and do not try to also keep the pumping schedule. Direct feeding removes milk more efficiently than a pump.',
    ],
    sampleDay: [
      { time: '6:30 AM', note: 'Feed directly before leaving' },
      { time: '9:30 AM', note: 'Pump at work' },
      { time: '12:30 PM', note: 'Pump at work, over lunch' },
      { time: '3:30 PM', note: 'Pump at work' },
      { time: '5:30 PM', note: 'Feed directly at pickup or when home' },
      { time: 'Evening', note: 'Feed directly on demand' },
    ],
    yourRights:
      'In the United States, the PUMP Act requires most employers to give you reasonable break time to ' +
      'pump for one year after birth, and a private space that is not a bathroom, shielded from view and ' +
      'free from intrusion. This covers most workers, including many who were not covered before 2023, ' +
      'such as teachers, nurses, farmworkers and drivers. You do not have to negotiate for this as a favor.',
    reassurance:
      'Almost everyone pumps less at work than the baby eats, for the first week or two. Your body adjusts ' +
      'to the new pattern. Give it time before you change anything.',
  },
  {
    id: 'build-stash',
    label: 'Building a freezer stash',
    priority: 88,
    who: 'You are feeding directly and want milk in the freezer for going back to work, a trip, or peace of mind.',
    principle:
      'Add sessions, do not replace feeds. Pumping instead of feeding does not build a stash, it just moves ' +
      'milk from one container to another.',
    guidance: [
      'If you can, wait until about 4 to 6 weeks so supply regulates first. Building hard before then tends to land you in oversupply sooner, which is workable and does come with more engorgement, clogs and mastitis to manage. Plenty of people start earlier on purpose and manage it fine.',
      'Add one short pump about 30 to 60 minutes after your baby’s first morning feed. Morning supply is highest, and this is the least disruptive place to add a session.',
      'Expect small amounts at first, sometimes half an ounce. That is a normal starting point for an extra session, not a sign of anything.',
      'A hand pump or a collection cup on the other side while feeding catches letdown that would otherwise go into a nursing pad. This is free milk and costs no extra time.',
      'If your goal is simply covering work, 24 to 40 ounces frozen is usually plenty, because what you pump today feeds your baby tomorrow. Aim higher than that if you want to, and know that you are choosing a bigger project rather than a necessary one.',
      'If you are building a large supply on purpose, to donate or for any other reason, see the donating goal. Oversupply is a thing to manage well, not a thing to avoid.',
    ],
    sampleDay: [
      { time: 'Morning feed', note: 'Feed as usual' },
      { time: '30 to 60 min later', note: 'Add a 15 minute pump' },
      { time: 'All other feeds', note: 'Feed directly as usual' },
      { time: 'Optional', note: 'Collection cup on the opposite side during one feed' },
    ],
    reassurance:
      'How much you want in the freezer is your call, and there is no number you are supposed to hit. If you ' +
      'are stashing for peace of mind and it is costing you sleep, you are allowed to stop. If you want a big ' +
      'supply because it matters to you, that is a real goal and this app will help you do it well rather ' +
      'than talk you out of it.',
  },
  {
    id: 'donating',
    label: 'Building a large supply, or donating',
    priority: 86,
    who:
      'You want a bigger supply than your own baby needs. That might be for a milk bank, for a friend, for ' +
      'a baby who is not yet home, or because you are producing milk after a loss and want it to go ' +
      'somewhere that matters.',
    principle:
      'More milk removed, more often, makes more milk. Everything else is detail. The work here is not ' +
      'learning a trick, it is protecting your body while you run a supply above what one baby needs.',
    guidance: [
      'Add sessions rather than lengthening them. Frequency drives supply far more than duration does.',
      'Power pumping once a day for a week is the usual way to push a step change. Sixty minutes, broken into pump, rest, pump, rest, pump.',
      'Expect oversupply to come with engorgement, leaking, clogs and a higher mastitis risk. That is the cost of the goal, and it is manageable rather than a reason to stop.',
      'Keep a session on the clock even when you are full. Skipping to relieve fullness is what turns a full breast into a clogged one.',
      'Learn what early mastitis feels like, and treat a clog quickly. A wedge of heat and hard massage is out of date guidance. Current advice is ice, gentle lymphatic stroking toward the collarbone and armpit, ibuprofen, and no aggressive massage.',
      'Label every bag with the date you pumped it. Milk banks require it, and you will want it anyway.',
      'Contact the milk bank before you build, not after. Screening takes time, and each bank has its own rules about medications, freezer age, and minimum volume.',
    ],
    sampleDay: [
      { time: 'Morning', note: 'Feed or pump as usual, then add a second pump 30 to 60 minutes later' },
      { time: 'Midday', note: 'Pump, roughly every 3 hours through the day' },
      { time: 'Late afternoon', note: 'Power pumping block, if you are pushing supply up' },
      { time: 'Before bed', note: 'Pump, and do not skip this one' },
      { time: 'Overnight', note: 'One session between 1 and 5 AM does more for supply than any other hour' },
    ],
    donating:
      'In North America, milk banks in the Human Milk Banking Association of North America network take ' +
      'donor milk, screen it, pasteurize it, and send it mostly to premature and medically fragile babies in ' +
      'hospital. Donors are screened with a questionnaire and a blood test, and the milk bank pays for it. ' +
      'Informal milk sharing between families also happens and is a different thing, with real risks around ' +
      'screening and handling that you take on yourself.',
    afterLoss:
      'If you are here because your baby died, first: your milk coming in is not your body being cruel to ' +
      'you, and you get to decide what happens next. There is no right answer. Some people want it to stop ' +
      'as fast as possible. Some pump for a while and wean gently. Some donate, and describe it as the one ' +
      'thing in an unbearable stretch that felt like it meant something. Some make keepsake jewellery from a ' +
      'small amount. All of those are whole, reasonable choices, and nobody gets to rank them for you. ' +
      'Most milk banks have bereavement donation programs with their own materials and support, and it is ' +
      'worth saying on the phone that this is why you are calling. Whichever way you go, stopping gradually ' +
      'is kinder to your body than stopping all at once, and an IBCLC can help you taper without pain.',
    reassurance:
      'Wanting a big supply is not vanity and it is not a competition, whatever the internet implies. People ' +
      'do this for surrogacy, for adoption, for twins, for a baby still in the NICU, for a friend who cannot ' +
      'produce, for a milk bank, and for a baby they are grieving. This app will help you do it safely and ' +
      'will not make you justify it.',
    sources: [
      { org: 'HMBANA', label: 'Milk banking, and donating after a loss',
        url: 'https://www.hmbana.org/about-us/frequent-questions.html' },
      { org: 'Star Legacy Foundation', label: 'Lactation after the loss of a baby',
        url: 'https://starlegacyfoundation.org/lactation/' },
    ],
  },
  {
    id: 'triple-feeding',
    label: 'Triple feeding, temporarily',
    priority: 82,
    who:
      'Your baby is feeding at the breast, then taking a bottle top up, then you pump. Usually because of ' +
      'weight concerns, latch problems, or a tie.',
    principle:
      'This is a bridge, not a destination. It exists to protect the baby’s weight and your supply while ' +
      'the underlying problem gets fixed.',
    guidance: [
      'Every cycle is feed, then supplement, then pump, roughly every 2.5 to 3 hours.',
      'It is exhausting and it is meant to be temporary. Days to a couple of weeks, not months.',
      'You should have a plan, in writing, for how you get off it. If nobody has given you one, ask.',
      'Ask directly at every visit: what has to change for us to stop doing this?',
      'It is completely reasonable to decide the cost is too high and change the plan. That is a real option, not a failure.',
    ],
    sampleDay: [
      { time: 'Every 2.5 to 3 hours', note: 'Feed at the breast' },
      { time: 'Immediately after', note: 'Offer the top up' },
      { time: 'Then', note: 'Pump for 15 minutes' },
    ],
    reassurance:
      'If you are triple feeding, you are working three jobs at once around the clock. Anyone who tells you ' +
      'to just relax has not done it. Get an IBCLC involved, and set an end date you revisit together.',
  },
  {
    id: 'weaning-from-pump',
    label: 'Weaning off the pump',
    priority: 76,
    who: 'You are ready to stop, or ready to cut back, whenever that is.',
    principle:
      'Slowly, so your body has time to get the message. Going cold turkey is how people get clogged ducts ' +
      'and mastitis.',
    guidance: [
      'Drop one session at a time, and hold there for 3 to 5 days before dropping the next.',
      'Alternatively, shorten every session by 2 to 3 minutes every few days until they are short, then drop them.',
      'Drop the session with the lowest output first. Usually late afternoon or evening.',
      'Drop the first morning session last, it is usually your largest.',
      'If you get full and uncomfortable, pump just enough for comfort, not to empty. Emptying signals your body to make more.',
      'Cold packs and gentle support help. If you develop a hard, red, painful area with fever or flu like symptoms, call your provider, that can be mastitis.',
    ],
    sampleDay: [
      { time: 'Week 1', note: 'Drop the smallest session' },
      { time: 'Week 2', note: 'Drop the next smallest' },
      { time: 'Ongoing', note: 'Continue every 3 to 5 days until you are where you want to be' },
    ],
    reassurance:
      'You do not owe anyone an explanation for stopping, at any point, for any reason. However long you ' +
      'did it, your baby got that.',
  },
];

/* ------------------------------------------------------------------
 * INCREASING OUTPUT
 * ------------------------------------------------------------------ */

export const INCREASING_OUTPUT = {
  id: 'increasing-output',
  label: 'If you want more milk',
  evidence: 'established',
  theFirstThing:
    'Before you change anything about your body, check the equipment. Flange size, worn duckbills or ' +
    'membranes, cracked parts, a pump past its motor life, and settings turned up too high account for an ' +
    'enormous share of "my supply dropped" problems, and all of them are cheap to fix.',
  howSupplyWorks:
    'Milk production is driven by removal. The emptier a breast gets, and the more often, the stronger the ' +
    'signal to make more. That is the whole mechanism. Everything below is a way of removing more milk more ' +
    'often, or of removing it more effectively.',
  levers: [
    {
      name: 'Add a session, not minutes',
      detail:
        'One extra 15 minute session per day does more than adding 10 minutes to every existing session. ' +
        'Frequency beats duration.',
      evidence: 'established',
    },
    {
      name: 'Hands on pumping',
      detail:
        'Massage and compress the breast with your hands while the pump runs, and hand express for a couple ' +
        'of minutes after. This increases both volume and the fat content of what you get, and it is free.',
      evidence: 'established',
    },
    {
      name: 'Power pumping',
      detail:
        'One hour, once a day, structured as pump 20, rest 10, pump 10, rest 10, pump 10. It mimics cluster ' +
        'feeding and signals demand. Do it at the same time daily, ideally in the morning, and give it 3 to ' +
        '7 days before you judge it. It is widely recommended by lactation consultants and is low risk, ' +
        'though it has not been formally studied the way medication has.',
      evidence: 'established',
    },
    {
      name: 'Protect the overnight hours',
      detail:
        'Prolactin runs highest overnight. A session between roughly midnight and 5am is worth more for ' +
        'supply than the same session at noon. This is also the one nobody wants to hear.',
      evidence: 'established',
    },
    {
      name: 'Do not skip and stack',
      detail:
        'Skipping a session and pumping longer later does not make it up. The gap is what tells your body ' +
        'to make less.',
      evidence: 'established',
    },
    {
      name: 'Eat and drink enough',
      detail:
        'Not gallons of water, and not a special diet. Enough food and enough fluid to not be running on ' +
        'empty. Severe restriction does reduce supply. Drinking extra beyond thirst does not increase it.',
      evidence: 'established',
    },
  ],
  powerPumpingSchedule: [
    { minutes: 20, action: 'Pump' },
    { minutes: 10, action: 'Rest' },
    { minutes: 10, action: 'Pump' },
    { minutes: 10, action: 'Rest' },
    { minutes: 10, action: 'Pump' },
  ],
  aboutSupplements:
    'We do not recommend supplements, teas, cookies or herbs for supply. The evidence for most of them is ' +
    'thin or absent, some interact with medications or conditions, and none of them work as reliably as ' +
    'removing milk more often. If you want to try something, run it past your provider or pharmacist first, ' +
    'particularly if you take any medication. Prescription options exist and are a conversation with a ' +
    'doctor, not a purchase.',
  whenToGetHelp: [
    'Your baby is not gaining weight, or has fewer wet diapers than expected.',
    'Pumping hurts and changing the flange size has not fixed it.',
    'Output dropped suddenly and the equipment checks out.',
    'You have a history of breast surgery, PCOS, thyroid disease, or significant blood loss at birth. All of these can affect supply and all of them are worth naming out loud.',
    'You are doing everything and it is not working. That is information, not failure, and it deserves a real evaluation.',
  ],
  sources: [
    {
      org: 'Academy of Breastfeeding Medicine',
      label: 'Clinical protocols on lactation, including supply',
      url: 'https://www.bfmed.org/protocols',
    },
    {
      org: 'Office on Women’s Health',
      label: 'Pumping and going back to work',
      url: 'https://www.womenshealth.gov/breastfeeding/breastfeeding-home-work-and-public/breastfeeding-and-going-back-work',
    },
  ],
};

/* ------------------------------------------------------------------
 * HOW MUCH IS NORMAL
 * ------------------------------------------------------------------ */

export const OUTPUT_EXPECTATIONS = {
  id: 'output-expectations',
  label: 'How much should I be getting',
  evidence: 'established',
  headline: 'The bottle is not a report card',
  theNumber:
    'From about 1 month to 6 months, a breastfed baby takes roughly 25 to 35 ounces in 24 hours in total, ' +
    'and that number stays fairly flat. Unlike formula fed babies, they do not scale up steadily with age. ' +
    'Divided across 8 to 12 feeds, that is usually about 2 to 4 ounces at a time.',
  perSession:
    'If you are pumping in place of a feed, half to 4 ounces total across both breasts is a normal range. ' +
    'If you are pumping in addition to feeding, half an ounce is a normal amount and not a problem.',
  variation: [
    'Morning sessions are almost always your largest.',
    'Late afternoon and evening are almost always your smallest. This is normal and daily.',
    'The two sides are rarely equal. One side out producing the other by a lot is extremely common.',
    'Output varies day to day with sleep, stress, illness and your cycle.',
  ],
  theTrap:
    'A pump is less efficient than a baby. Plenty of people with completely adequate supply pump very little, ' +
    'because their body responds to their baby and not to plastic. If your baby is gaining weight and having ' +
    'normal diapers, the pump output does not tell you anything is wrong.',
  comparison:
    'Do not compare your output to anyone else’s, including people online posting freezer photos. Oversupply ' +
    'is not a goal, it is a condition, and it comes with clogs, mastitis and a baby who struggles with fast ' +
    'flow. Enough for your baby is the target.',
  sources: [
    {
      org: 'AAP, HealthyChildren',
      label: 'How much and how often to feed',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/how-often-and-how-much-should-your-baby-eat.aspx',
    },
  ],
};

/* ------------------------------------------------------------------
 * STORAGE
 * ------------------------------------------------------------------ */

export const MILK_STORAGE = {
  id: 'milk-storage',
  label: 'Storing milk',
  evidence: 'established',
  headline: 'The CDC numbers, and what they mean in a real kitchen',
  note: 'These are for a healthy full term baby. Preterm or hospitalized babies have stricter rules, ask the NICU.',
  table: [
    {
      id: 'countertop',
      place: 'Countertop',
      temp: '77°F, 25°C or cooler',
      freshLimit: 'Up to 4 hours',
      thawedLimit: '1 to 2 hours',
      note: 'Keep it covered and out of direct sun. Cooler is better.',
    },
    {
      id: 'refrigerator',
      place: 'Refrigerator',
      temp: '40°F, 4°C',
      freshLimit: 'Up to 4 days',
      thawedLimit: 'Up to 24 hours from the time it finished thawing',
      note: 'Store it toward the back, not in the door, where the temperature swings every time it opens.',
    },
    {
      id: 'freezer',
      place: 'Freezer',
      temp: '0°F, -18°C or colder',
      freshLimit: 'Best within 6 months, acceptable up to 12',
      thawedLimit: 'Never refreeze thawed milk',
      note: 'A deep freezer holds temperature better than the freezer compartment of a fridge, and far better than the freezer door.',
    },
  ],
  leftovers:
    'Milk left in a bottle after your baby has fed from it should be used within 2 hours of when they ' +
    'finished. Bacteria from their mouth are now in it. This is why smaller bottles waste less.',
  rules: [
    'Label every container with the date it was pumped, before it goes anywhere.',
    'First in, first out. Always use the oldest milk you have.',
    'Store in 2 to 4 ounce portions. A 6 ounce bag that gets half used is 3 ounces thrown away.',
    'Freeze bags flat. They stack, they thaw faster, and they take a fraction of the space.',
    'Leave room at the top. Milk expands when it freezes and a full bag can split.',
    'You can add freshly pumped milk to already chilled milk from the same day, but cool the new milk in the fridge first rather than adding warm milk to cold.',
    'Never refreeze thawed milk.',
  ],
  thawing: [
    'Thaw in the refrigerator overnight, or under cool then warm running water, or in a bowl of warm water.',
    'Never microwave. It creates hot spots that can burn your baby’s mouth, and it damages the milk’s immune components.',
    'Swirl, do not shake vigorously. Separation into a fat layer on top is normal, it just needs mixing.',
    'Thawed milk can smell and taste different from fresh. That alone does not mean it is spoiled, see the lipase section.',
  ],
  powerOutage:
    'Milk that is still frozen solid with ice crystals can be refrozen, though quality drops. Milk that has ' +
    'fully thawed should be moved to the refrigerator and used within 24 hours. Keep the freezer door closed, ' +
    'a full deep freezer holds temperature for roughly 48 hours.',
  sources: [
    {
      org: 'CDC',
      label: 'Human milk storage guidelines',
      url: 'https://www.cdc.gov/breastfeeding/pdf/humanmilk-en-4x6-508.pdf',
    },
    {
      org: 'AAP',
      label: 'Milk storage guidelines',
      url: 'https://www.aap.org/en/patient-care/breastfeeding/milk-storage-guidelines/',
    },
    {
      org: 'Academy of Breastfeeding Medicine',
      label: 'Protocol 8, human milk storage for home use',
      url: 'https://www.bfmed.org/protocols',
    },
  ],
};

/* ------------------------------------------------------------------
 * HIGH LIPASE
 * The one nobody warns you about until it has already happened.
 * ------------------------------------------------------------------ */

export const HIGH_LIPASE = {
  id: 'high-lipase',
  label: 'When frozen milk smells like soap',
  evidence: 'established',
  headline: 'Your milk is fine. This is lipase, and it is fixable.',
  whatIsHappening:
    'Lipase is an enzyme in your milk that breaks down fat, which is a good thing, it helps your baby digest ' +
    'it. Some people have higher lipase activity than others. In their milk, that breakdown keeps going after ' +
    'the milk is stored, and it changes the smell and taste to something soapy, metallic, or occasionally ' +
    'fishy. The milk is not spoiled. It is not unsafe. Its nutrition is intact.',
  whyItHurts:
    'People usually find this out after they have built a freezer stash of a hundred ounces or more, when ' +
    'their baby refuses the first bottle. Discovering that months of pumping might be unusable is genuinely ' +
    'devastating, and it is worth knowing before you get there, not after.',
  testFirst: [
    'Before you build a large stash, freeze one bag for 5 days.',
    'Thaw it and smell and taste it yourself. Yes, taste it.',
    'If it tastes fine, you do not have this problem and you can stop worrying.',
    'If it is soapy or metallic, do the same test at 24 hours and 3 days to find out how fast it changes. That tells you how long you can store milk without treating it.',
  ],
  theFix: {
    name: 'Scalding, before freezing',
    evidence: 'established',
    what:
      'Heating the milk just enough to deactivate the lipase enzyme, then cooling it fast and freezing it. ' +
      'This is the established remedy and it works. It has to be done before freezing, it cannot fix milk ' +
      'that is already frozen.',
    steps: [
      'Pour fresh milk into a clean pan on the stove over low to medium heat. Not a microwave.',
      'Heat until you see small bubbles forming around the edge of the pan, roughly 180°F or 82°C. It should be steaming and just starting to simmer.',
      'Do not let it come to a rolling boil. Boiling destroys more of the immune components than you need to.',
      'Take it off the heat immediately.',
      'Cool it quickly by setting the pan in a bowl of ice water.',
      'Store or freeze as usual.',
    ],
    cost:
      'Scalding does reduce some of the immune factors and some enzymes in the milk. It is a real tradeoff. ' +
      'Scalded milk is still your milk and still a good thing to give your baby. A freezer full of milk your ' +
      'baby will not drink helps nobody.',
    tip:
      'If you have a bottle warmer or a sous vide setup, some people scald in it because it holds temperature ' +
      'precisely. A pan and your eyes work fine.',
  },
  alternatives: [
    {
      name: 'Use fresh milk more, freeze less',
      evidence: 'established',
      detail:
        'If your milk changes at 5 days but is fine at 2, you can simply cycle through the refrigerator ' +
        'rather than treating everything. Many people never need to scald.',
    },
    {
      name: 'Mix affected milk with fresh milk',
      evidence: 'community',
      detail:
        'Some babies accept a bottle that is part thawed and part fresh, and you can shift the ratio ' +
        'gradually. Widely reported by parents to work, not formally studied.',
    },
    {
      name: 'A drop of alcohol free vanilla extract',
      evidence: 'community',
      detail:
        'A very common tip passed between pumping parents. A drop or two of alcohol free vanilla in the ' +
        'bottle masks the soapy taste enough that some babies will take milk they were refusing. Alcohol ' +
        'free specifically, because standard vanilla extract is around 35 percent alcohol. This is a parent ' +
        'workaround, not established guidance, and it has not been studied. It does not fix the milk, it ' +
        'covers the taste. Many parents say it saved their stash. Run it past your pediatrician first, ' +
        'especially for a young infant, since anything added to a bottle is a food introduction.',
      caution:
        'Not established guidance. Ask your pediatrician before adding anything to a bottle for a baby under ' +
        'about 6 months.',
    },
    {
      name: 'Offer it anyway',
      evidence: 'community',
      detail:
        'Plenty of babies drink high lipase milk without noticing. Try it before you assume it is a loss, ' +
        'and try it warm, since temperature changes how strongly the taste comes through.',
    },
  ],
  notThis:
    'Do not throw the milk out because it smells strange. Spoiled milk smells sour and rancid in a way that ' +
    'is different from soapy, and it usually separates in a way that will not swirl back together. If you are ' +
    'unsure, taste it. Soapy is lipase. Sour is spoiled.',
  sources: [
    {
      org: 'La Leche League USA',
      label: 'Storing human milk, including high lipase and scalding',
      url: 'https://lllusa.org/storing-human-milk/',
    },
    {
      org: 'CDC',
      label: 'Human milk storage guidelines',
      url: 'https://www.cdc.gov/breastfeeding/pdf/humanmilk-en-4x6-508.pdf',
    },
  ],
};

/* ------------------------------------------------------------------
 * TROUBLESHOOTING
 * ------------------------------------------------------------------ */

export const PUMPING_TROUBLESHOOTING = [
  {
    id: 'pumping-hurts',
    problem: 'Pumping hurts',
    priority: 100,
    firstChecks: [
      'Flange size. Measure the nipple only, add 2 to 4mm. This is the answer most of the time.',
      'Suction turned too high. Back it down to a firm tug.',
      'Session running too long on an empty breast.',
      'A cracked flange or a rough edge on the plastic.',
    ],
    thenWhat:
      'If sizing and settings do not fix it, get seen. Persistent pain with cracked or bleeding nipples, or ' +
      'deep shooting pain after pumping, is not something to push through.',
    seeSomeone:
      'Call your provider for a hard, red, painful area with fever or flu like symptoms, which can be ' +
      'mastitis, or for burning nipple pain with shiny or flaky skin, which can be a fungal issue.',
  },
  {
    id: 'output-dropped',
    problem: 'My output suddenly dropped',
    priority: 94,
    firstChecks: [
      'Duckbills or valve membranes. These wear out in weeks and are the number one cause.',
      'Tubing with moisture or a loose connection.',
      'Flange size, since your size changes over time.',
      'Whether you have been skipping or shortening sessions.',
      'Your cycle. Supply commonly dips around ovulation and before a period.',
      'Illness, dehydration, stress, or a new medication, including some cold medicines and hormonal birth control.',
    ],
    thenWhat:
      'Replace the cheap parts first. If everything is new and the drop persists for more than a week, that ' +
      'is a reason to talk to an IBCLC.',
  },
  {
    id: 'wont-let-down',
    problem: 'I cannot get a letdown when I pump',
    priority: 88,
    firstChecks: [
      'Are you watching the bottle? Cover it. This alone fixes it for a lot of people.',
      'Are you somewhere you feel watched or rushed? Letdown is a reflex and stress blocks it.',
      'Warmth on the breast first, and hands on massage.',
      'A photo, a video, or a piece of your baby’s clothing if you are apart.',
      'Are you starting in letdown mode and only switching once milk flows?',
    ],
    thenWhat:
      'Some people simply do not respond well to a pump even with excellent supply. Hand expression, or a ' +
      'different pump, sometimes changes everything. It is worth trying a different style, such as a manual ' +
      'or a wearable, before concluding anything about your body.',
  },
  {
    id: 'baby-refuses-bottle',
    problem: 'My baby refuses the bottle',
    priority: 82,
    firstChecks: [
      'Has the milk been frozen? Taste it. This is very often high lipase.',
      'Is the milk the temperature they are used to? Body temperature is usually the answer.',
      'Is the nipple flow too fast or too slow for their age?',
      'Who is offering it? Many babies will not take a bottle from the person who feeds them directly, because they can smell the alternative.',
      'Are they too hungry? Offer the bottle before they are frantic, not after.',
    ],
    thenWhat:
      'Try a different person, a different room, a different position, and a different time of day. Try ' +
      'offering it while walking or bouncing. Give it several attempts across several days before switching ' +
      'bottle brands, which is expensive and usually not the issue.',
  },
  {
    id: 'clogged-duct',
    problem: 'I have a hard, sore lump',
    priority: 76,
    firstChecks: [
      'Keep removing milk on a normal schedule. Do not skip that side and do not add extra pumping to try to clear it.',
      'Current guidance is gentle. Ice, not heat, and light lymphatic massage stroking toward the armpit rather than deep aggressive massage, which can worsen swelling.',
      'Anti inflammatories, if your provider says they are fine for you.',
      'Check the flange size and whether a bra or bag strap is compressing that area.',
    ],
    thenWhat:
      'Guidance on this changed. Deep massage, heat, and pumping extra to "clear" a clog were standard advice ' +
      'and are now understood to often make inflammation worse.',
    seeSomeone:
      'Call your provider if you develop a fever, chills, body aches, or a spreading red area. That can be ' +
      'mastitis and it may need treatment.',
  },
];

/* ------------------------------------------------------------------
 * LACTATION SUPPORT
 * ------------------------------------------------------------------ */

export const LACTATION_SUPPORT = {
  id: 'lactation-support',
  label: 'Getting real help',
  evidence: 'established',
  headline: 'An IBCLC is a specialist, and your insurance probably covers it',
  whoIsWho: [
    {
      credential: 'IBCLC',
      full: 'International Board Certified Lactation Consultant',
      what:
        'The highest credential in lactation. Clinical training, supervised hours, and a board exam. This is ' +
        'who you want for anything complicated: pain, supply, weight gain, ties, a baby who will not latch.',
    },
    {
      credential: 'CLC or CBS',
      full: 'Certified Lactation Counselor, Certified Breastfeeding Specialist',
      what:
        'A shorter certification, usually a week long course. Genuinely useful for positioning, general ' +
        'support and encouragement. Not equivalent to an IBCLC for clinical problems.',
    },
    {
      credential: 'Peer counselor',
      full: 'WIC peer counselors, La Leche League leaders',
      what:
        'Trained volunteers or staff who have fed babies themselves. Free, warm, and often available by ' +
        'phone at odd hours. Excellent for normal questions and for not feeling alone.',
    },
    {
      credential: 'Hospital lactation staff',
      full: 'Usually IBCLCs employed by the birth hospital',
      what:
        'Free while you are admitted, and many hospitals run free outpatient clinics or drop in groups after ' +
        'discharge that people never find out about. Ask before you leave.',
    },
  ],
  insurance:
    'Under the Affordable Care Act, most health plans in the United States have to cover breastfeeding ' +
    'support and counseling, and a breast pump, without a copay. In practice, coverage varies in how easy it ' +
    'is to use, and some plans only cover in network providers. Call the number on your card and ask ' +
    'specifically about lactation consultant visits and how many are covered.',
  howToAsk: [
    'Ask the hospital, before discharge, whether they run a free outpatient lactation clinic or support group.',
    'Ask your pediatrician for a referral. Some pediatric practices have an IBCLC on staff.',
    'Ask your obstetric provider, who may also be able to refer.',
    'Look for in home IBCLCs. Being seen in your own chair, with your own pump, changes what they can spot.',
    'Virtual visits are real and often covered. For flange sizing and settings, a video call works fine.',
    'If you are eligible for WIC, peer counselors and often IBCLCs are included at no cost.',
  ],
  whenToCall: [
    'Feeding or pumping hurts, at all, beyond the first few seconds.',
    'Your baby is not back to birth weight by about 2 weeks, or is not gaining as expected.',
    'Fewer wet or dirty diapers than expected for their age.',
    'Your baby will not latch, or slides off, or clicks, or feeds for an hour and is still hungry.',
    'You are worried about supply, in either direction.',
    'You are being told to supplement and nobody has explained the plan to get back off it.',
    'You are considering stopping because it is unbearable. That is exactly when help is worth the most, and getting help is not a commitment to continue.',
  ],
  theQuietPart:
    'A lot of people struggle for weeks with something an IBCLC would have solved in one visit, because they ' +
    'thought asking for help meant they were failing. Feeding a baby is a learned skill for both of you. ' +
    'Nobody is born knowing it.',
  sources: [
    {
      org: 'Office on Women’s Health',
      label: 'Breastfeeding support and your rights',
      url: 'https://www.womenshealth.gov/breastfeeding',
    },
    {
      org: 'U.S. Department of Labor',
      label: 'PUMP Act, your protections to pump at work',
      url: 'https://www.dol.gov/agencies/whd/pump-at-work',
    },
    {
      org: 'HealthCare.gov',
      label: 'Breastfeeding benefits covered by health plans',
      url: 'https://www.healthcare.gov/coverage/breast-feeding-benefits/',
    },
  ],
};

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

export function getGoal(id) {
  if (!id) return null;
  return PUMPING_GOALS.find((g) => g.id === id) || null;
}

export function getGoalsSorted() {
  return [...PUMPING_GOALS].sort((a, b) => b.priority - a.priority);
}

export function getTroubleshooting(id) {
  if (!id) return null;
  return PUMPING_TROUBLESHOOTING.find((t) => t.id === id) || null;
}

export function getTroubleshootingSorted() {
  return [...PUMPING_TROUBLESHOOTING].sort((a, b) => b.priority - a.priority);
}

/**
 * Suggested flange size from a nipple measurement in millimeters.
 * Returns a range, because 2 to 4mm is the accepted add and people
 * land differently inside it.
 */
export function suggestFlangeSize(nippleMm) {
  const mm = Number(nippleMm);
  if (!mm || mm <= 0 || Number.isNaN(mm)) return null;
  const low = mm + 2;
  const high = mm + 4;
  const common = [13, 15, 17, 19, 21, 24, 27, 30, 36];
  const inRange = common.filter((c) => c >= low && c <= high);
  return {
    measured: mm,
    low,
    high,
    commonSizesInRange: inRange,
    startWith: inRange.length > 0 ? inRange[0] : Math.round(low),
    note:
      'This is a starting point, not a prescription. Fit is judged by how it feels and how your nipple ' +
      'looks afterward, not by the number.',
  };
}

/**
 * Total minutes of pumping across a set of logged sessions, plus how
 * that compares to the roughly 120 minutes per 24 hours often used as
 * a target when exclusively pumping.
 */
export function summarizePumpDay(sessions, targetMinutes) {
  const list = Array.isArray(sessions) ? sessions : [];
  const target = targetMinutes || 120;
  const minutes = list.reduce((sum, s) => sum + (Number(s.minutes) || 0), 0);
  const ounces = list.reduce((sum, s) => sum + (Number(s.ounces) || 0), 0);
  return {
    sessions: list.length,
    minutes,
    ounces: Math.round(ounces * 10) / 10,
    target,
    minutesRemaining: Math.max(0, target - minutes),
    metTarget: minutes >= target,
  };
}

/** Total elapsed minutes of a power pumping block, for a timer screen. */
export function powerPumpTotalMinutes() {
  return INCREASING_OUTPUT.powerPumpingSchedule.reduce((sum, s) => sum + s.minutes, 0);
}

/** Every source in this file, deduplicated, for a references screen. */
export function getAllPumpingSources() {
  const seen = new Set();
  const out = [];
  const add = (s, from) => {
    if (!s || !s.url || seen.has(s.url)) return;
    seen.add(s.url);
    out.push({ ...s, from });
  };
  (FLANGE_FITTING.sources || []).forEach((s) => add(s, 'Flange fitting'));
  (PUMP_SETTINGS.sources || []).forEach((s) => add(s, 'Pump settings'));
  (INCREASING_OUTPUT.sources || []).forEach((s) => add(s, 'Increasing output'));
  (OUTPUT_EXPECTATIONS.sources || []).forEach((s) => add(s, 'How much is normal'));
  (MILK_STORAGE.sources || []).forEach((s) => add(s, 'Storage'));
  (HIGH_LIPASE.sources || []).forEach((s) => add(s, 'High lipase'));
  (LACTATION_SUPPORT.sources || []).forEach((s) => add(s, 'Lactation support'));
  PUMPING_GOALS.forEach((g) => (g.sources || []).forEach((sc) => add(sc, g.label)));
  return out;
}

export const PUMPING_GOAL_IDS = PUMPING_GOALS.map((g) => g.id);

export default PUMPING_GOALS;

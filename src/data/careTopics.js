/**
 * Ready Set Grow: Care Topics
 * ------------------------------------------------------------------
 * Reference topics a parent looks up rather than lives through. Safe
 * sleep, reflux, oral ties, feeding, pumping, milk storage, teething,
 * car seats, and when a sick child needs to be seen.
 *
 * WHY EVERY TOPIC CARRIES SOURCES
 * We are a parenting app, not a medical authority, and the honest way to
 * hold that position is to say where something came from and link
 * straight to it. A parent who wants to check us should be one tap from
 * the AAP rather than stuck taking our word for it. It also protects the
 * product: sourced guidance is defensible, unsourced guidance is not.
 *
 * WHY EVERY TOPIC HAS A MYTHS SECTION
 * Most of what a new parent hears comes from a group chat, a relative,
 * or a video. Some of it is dangerous, like teething necklaces and crib
 * wedges. Correcting a specific belief works better than stating the
 * right answer and hoping it displaces the wrong one.
 *
 * KEEPING THIS CURRENT
 * Guidance changes. Safe sleep was updated in 2022, the tongue tie
 * clinical report came in 2024. Each topic carries a reviewedAgainst
 * field naming the version it was written from, so it is obvious later
 * what needs rechecking rather than being silently out of date.
 */

export const TOPIC_DISCLAIMER =
  'Educational information, not medical advice. It cannot examine your child. Your pediatrician can, ' +
  'and they want you to call.';

export const CARE_TOPICS = [
  /* ---------------------------------------------------------------- */
  {
    id: 'newborn-basics',
    label: 'Is my newborn okay?',
    shortLabel: 'Newborn basics',
    category: 'health',
    minMonths: 0, maxMonths: 4,
    priority: 97,
    reviewedAgainst: 'AAP newborn care guidance',
    summary:
      'The questions almost every new parent has at 3 AM and feels embarrassed to ask. Diaper counts, ' +
      'weight, the cord, and how to know feeding is actually working.',
    keyPoints: [
      'Wet diapers are the simplest measure of intake. A rough guide for the first week is one wet diaper on day one, two on day two, and so on, reaching about 6 or more a day by around day 5 and staying there.',
      'Stool changes on a schedule: black tarry meconium for the first day or two, then greenish transitional, then yellow and seedy by around day 4 or 5 if breastfeeding. Formula fed stools are usually tan and firmer.',
      'Most newborns lose weight in the first days. Losing up to about 7 to 10 percent of birth weight is common, and most babies are back to birth weight by about 2 weeks.',
      'Newborn breathing is irregular by nature. Fast stretches followed by brief pauses of a few seconds, called periodic breathing, are normal. Pauses longer than about 20 seconds, or with color change, are not.',
      'Keep the cord stump dry and let it fall off on its own, usually in 1 to 3 weeks. Sponge baths until then.',
      'Newborns sneeze, hiccup, grunt, and make constant noise in their sleep. Nearly all of it is normal.',
      'Newborn skin does a lot: peeling, milia, baby acne, and a blotchy rash called erythema toxicum are all common and all resolve.',
      'Feed on cues, roughly 8 to 12 times in 24 hours. Do not let a newborn go more than about 4 hours without feeding until weight gain is established.',
    ],
    myths: [
      { myth: 'A newborn who sleeps a lot is an easy baby.', truth: 'A very sleepy newborn who is hard to wake for feeds needs to be checked. Excessive sleepiness can be a sign of jaundice, low blood sugar, or infection.' },
      { myth: 'Cord stumps need alcohol.', truth: 'Current guidance is dry cord care. Keep it clean and dry and let it come off on its own.' },
      { myth: 'You can spoil a newborn by holding them.', truth: 'You cannot. Responding builds the security they will regulate from later.' },
    ],
    redFlags: [
      'Any fever, meaning a rectal temperature of 100.4 F (38 C) or higher, is an emergency at this age',
      'Fewer wet diapers than expected, or no stool for an unusually long stretch in a newborn',
      'Very difficult to wake, or not waking for feeds',
      'Yellow color in the skin or the whites of the eyes',
      'The cord area is red, swollen, smells bad, or has pus',
      'Forceful vomiting, or green vomit',
      'Breathing pauses longer than about 20 seconds, or with color change',
    ],
    sources: [
      { org: 'AAP', label: 'HealthyChildren: baby care basics', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'jaundice',
    label: 'Jaundice',
    shortLabel: 'Jaundice',
    category: 'health',
    minMonths: 0, maxMonths: 4,
    priority: 96,
    reviewedAgainst: 'AAP 2022 clinical practice guideline on hyperbilirubinemia',
    summary:
      'Very common, usually harmless, and occasionally serious. What matters is not missing the ' +
      'small number of babies who need treatment, which is why follow up timing is not optional.',
    keyPoints: [
      'Jaundice is a yellow tint to the skin and the whites of the eyes, caused by bilirubin. More than half of newborns get some.',
      'It usually appears after the first day, peaks around days 3 to 5, and fades over the following week or two.',
      'It typically shows up on the face first and moves downward. Yellowing that reaches the belly, arms or legs suggests higher levels and needs checking.',
      'Check in natural daylight rather than indoor lighting. Press gently on the skin and look at the color as you release.',
      'Every newborn should have bilirubin measured before leaving the hospital, and a follow up visit timed to their risk. Do not skip or delay that visit.',
      'Treatment when needed is usually phototherapy, which is light treatment and is straightforward.',
      'Feeding well matters, because bilirubin leaves the body in stool. A baby who is not feeding well can become more jaundiced.',
      'Untreated severe jaundice can cause a rare but permanent brain injury called kernicterus. Rare, and the entire reason follow up exists.',
    ],
    myths: [
      { myth: 'Sunlight through a window treats jaundice.', truth: 'It is not a treatment and it risks sunburn and overheating. Phototherapy uses specific wavelengths and is medically supervised.' },
      { myth: 'Jaundice means you should stop breastfeeding.', truth: 'In almost all cases breastfeeding continues, and feeding more often helps. Do not stop without your pediatrician telling you to.' },
      { myth: 'Yellow skin at 2 weeks is just leftover jaundice.', truth: 'Jaundice that persists past about 2 weeks needs evaluation, because a small number of causes are serious and treatable.' },
    ],
    redFlags: [
      'Yellow color that reaches the belly, arms, or legs',
      'Jaundice appearing in the first 24 hours of life: call immediately',
      'Your baby is very sleepy, hard to wake, or feeding poorly',
      'High pitched crying, arching, or stiffness',
      'Jaundice that is getting more intense rather than fading',
      'Any jaundice still present after about 2 weeks',
      'Pale or chalky stools, or dark urine',
    ],
    sources: [
      { org: 'AAP', label: 'Hyperbilirubinemia clinical practice guideline', url: 'https://www.aap.org/en/patient-care/hyperbilirubinemia/' },
      { org: 'AAP', label: 'AAP revises clinical guidelines for hyperbilirubinemia in newborns', url: 'https://www.healthychildren.org/English/news/Pages/AAP-revises-clinical-guidelines-for-hyperbilirubinemia-in-newborns.aspx' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'starting-solids',
    label: 'Starting solids and allergens',
    shortLabel: 'Starting solids',
    category: 'feeding',
    minMonths: 3, maxMonths: 24,
    priority: 86,
    reviewedAgainst: 'AAP guidance on solids and early allergen introduction',
    summary:
      'Readiness is about development, not a birthday. And the advice on allergens reversed ' +
      'completely, so what your mother was told is now the opposite of current guidance.',
    keyPoints: [
      'Readiness signs, and you want all of them: sits with little or no support, holds their head steady, opens their mouth toward food, and can move food to the back of the mouth rather than pushing it out with the tongue.',
      'Most babies are ready around 6 months. Some are ready a little before, but not before about 4 months.',
      'Milk stays the main nutrition through the first year. Early solids are practice, not replacement.',
      'Introduce common allergens early rather than delaying. Delaying does not prevent allergy, and for peanut, early introduction can reduce it.',
      'The common allergens are peanut, egg, dairy, wheat, soy, sesame, tree nuts, fish and shellfish.',
      'Offer allergens in a safe form: smooth peanut butter thinned into puree or cereal, never whole nuts or thick spoonfuls. Well cooked egg. Yogurt rather than whole milk as a drink.',
      'Give a new allergen earlier in the day, at home, not right before bed, so you can watch for reaction.',
      'Once an allergen is introduced and tolerated, keep it in the diet regularly. Reintroducing after a long gap is where problems can appear.',
      'If your baby has severe eczema or an existing food allergy, talk to your pediatrician before introducing peanut, because they may want testing or a supervised introduction first.',
      'Foods to avoid in year one: honey (infant botulism risk), cow milk as a main drink, and choking shapes.',
    ],
    myths: [
      { myth: 'Delay allergens until age 3 to prevent allergy.', truth: 'That was old advice and it was reversed. Delaying does not prevent allergy, and for peanut, early introduction reduces risk.' },
      { myth: 'Rice cereal at 4 months helps them sleep.', truth: 'Solids do not improve sleep, and starting before readiness carries risk without benefit.' },
      { myth: 'Gagging means choking.', truth: 'They are different. Gagging is noisy and protective, the baby is red faced and making sound, and it is how they learn to manage food. Choking is silent or nearly silent, the baby cannot cough or cry, and it is an emergency.' },
      { myth: 'Babies need water with solids.', truth: 'Small sips of water with meals are fine after 6 months, but milk still provides hydration. Large amounts of water can be dangerous for infants.' },
    ],
    redFlags: [
      'Hives, swelling of the lips, face or tongue, vomiting, or a sudden rash after a food',
      'Any trouble breathing, wheezing, or a hoarse or weak cry after eating: call 911, this can be anaphylaxis',
      'Repeated gagging that turns into silent distress',
      'Refusing all solids well past 8 or 9 months',
      'Poor weight gain once solids have started',
    ],
    sources: [
      { org: 'AAP', label: 'When to introduce egg, peanut butter and other common food allergens', url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/when-to-introduce-egg-peanut-butter-and-other-common-food-allergens-to-your-baby-food-allergy-prevention-tips.aspx' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'formula-feeding',
    label: 'Formula and combination feeding',
    shortLabel: 'Formula',
    category: 'feeding',
    minMonths: 0, maxMonths: 24,
    priority: 84,
    reviewedAgainst: 'AAP and CDC infant formula guidance',
    summary:
      'Formula is safe, regulated infant nutrition. Combination feeding is a legitimate choice and ' +
      'not a failed version of anything.',
    keyPoints: [
      'All infant formula sold in the US must meet the same federal nutrient requirements. Store brands meet the same standard as name brands.',
      'Standard cow milk based formula is the right starting point for most babies. Specialty formulas are for specific medical reasons, not for fussiness.',
      'Measure exactly as the label says. Adding extra water to stretch formula is dangerous, and adding extra powder is hard on the kidneys.',
      'Prepared formula keeps about 2 hours at room temperature, or 24 hours in the fridge. Anything left in a bottle after a feed should be used within 1 hour and then discarded.',
      'Never warm a bottle in the microwave. Hot spots burn.',
      'Paced bottle feeding, holding the baby more upright and letting them take breaks, reduces overfeeding and works well for babies who also breastfeed.',
      'Combination feeding works. If you want to protect supply while supplementing, removing milk at roughly the times your baby feeds is what maintains it.',
      'Fussiness, spit up, and gas are usually not formula intolerance. Switching formulas repeatedly rarely helps and makes it harder to tell what is going on.',
      'Never make your own formula and never dilute or substitute with cow, goat, or plant milks in the first year. Homemade formula has caused serious harm.',
    ],
    myths: [
      { myth: 'Expensive formula is better.', truth: 'Nutrient requirements are federally set and identical. Price reflects branding, not nutrition.' },
      { myth: 'Formula fed babies sleep through the night.', truth: 'Sleep is driven by development, not feeding method. Some formula fed babies sleep less.' },
      { myth: 'Combination feeding ruins breastfeeding.', truth: 'Plenty of families combination feed for months or years. Supply responds to how often milk is removed, so it can be managed.' },
      { myth: 'Switching formula fixes fussiness.', truth: 'Usually not. Evening fussiness is developmental. Talk to your pediatrician before switching, especially more than once.' },
    ],
    redFlags: [
      'Blood or mucus in stool',
      'Forceful or projectile vomiting',
      'Poor weight gain, or fewer wet diapers',
      'Severe eczema, hives, or swelling after feeds',
      'Any formula you cannot afford consistently. Tell your pediatrician, because programs such as WIC exist and diluting formula is dangerous.',
    ],
    sources: [
      { org: 'AAP', label: 'HealthyChildren: formula feeding', url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/default.aspx' },
      { org: 'CDC', label: 'Infant formula preparation and storage', url: 'https://www.cdc.gov/infant-toddler-nutrition/formula-feeding/index.html' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'water-safety',
    label: 'Water safety',
    shortLabel: 'Water safety',
    category: 'safety',
    minMonths: 0, maxMonths: 240,
    priority: 94,
    reviewedAgainst: 'AAP drowning prevention policy',
    summary:
      'Drowning is a leading cause of death in young children, and it is fast and silent. It does ' +
      'not look like it does in films. This is the topic most parenting apps skip.',
    keyPoints: [
      'Use layers of protection, because no single measure is enough: barriers, supervision, swim skills, life jackets, and someone ready to respond.',
      'A home pool needs 4 sided isolation fencing at least 4 feet high, with a self closing and self latching gate that opens away from the pool, latch at least 54 inches up. Fencing that uses the house as one side is far less protective.',
      'Touch supervision for young children means within arm reach, not watching from a chair. Drowning is usually silent, with no splashing or shouting.',
      'Name a designated water watcher when adults are around a pool. Shared supervision is how children go unnoticed.',
      'Most bathtub drownings happen during a brief lapse. Never leave a young child in the bath, even for a moment, and do not leave an older sibling in charge.',
      'Empty buckets, coolers, wading pools and pet bowls right after use. A toddler can drown in very little water.',
      'Swim lessons can start after the first birthday depending on readiness, and they are one layer, not a substitute for the others.',
      'On or near open water, use a Coast Guard approved life jacket. Floaties and water wings are toys and do not prevent drowning.',
      'Learn CPR. In a drowning, the minutes before help arrives are the ones that matter.',
      'Toilet lid latches and bathroom door latches matter in the toddler years.',
    ],
    myths: [
      { myth: 'You would hear a child drowning.', truth: 'Drowning is usually silent. There is often no splashing and no call for help.' },
      { myth: 'Swim lessons make a child drown proof.', truth: 'No child is drown proof. Lessons are one layer among several.' },
      { myth: 'Floaties keep them safe.', truth: 'They deflate, slip off, and give false confidence. Use a Coast Guard approved life jacket.' },
      { myth: 'Drowning only happens at pools.', truth: 'Bathtubs, buckets, toilets, coolers and ponds all account for young child drownings.' },
    ],
    redFlags: [
      'Any child who was submerged and needed rescue should be evaluated, even if they seem fine afterward',
      'Coughing, trouble breathing, or unusual sleepiness after a water incident: seek care',
    ],
    sources: [
      { org: 'AAP', label: 'Drowning prevention and water safety', url: 'https://www.aap.org/en/patient-care/drowning-prevention-and-water-safety/' },
      { org: 'AAP', label: 'Water safety and young children', url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Water-Safety-And-Young-Children.aspx' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'choking',
    label: 'Choking prevention',
    shortLabel: 'Choking',
    category: 'safety',
    minMonths: 3, maxMonths: 96,
    priority: 92,
    reviewedAgainst: 'AAP choking prevention guidance',
    summary:
      'Prevention plus knowing the difference between gagging and choking. The response itself is ' +
      'something to learn in a hands on class, not from a screen while it is happening.',
    keyPoints: [
      'Gagging is loud and protective. The child is red faced, coughing, making noise, and it is part of learning to eat. Let them work through it.',
      'Choking is silent or nearly silent. They cannot cough, cry, or breathe, may clutch at their throat, and their color changes. That is an emergency.',
      'A forceful cough is doing more than you can. If they are coughing hard, let them cough and stay with them.',
      'High risk foods for under fours: whole grapes, hot dog rounds, whole nuts, popcorn, hard raw vegetables, chunks of meat or cheese, sticky nut butter by the spoonful, hard candy, marshmallows.',
      'Modify rather than avoid: quarter grapes and cherry tomatoes lengthwise, cut hot dogs lengthwise then into small pieces, cook hard vegetables soft, spread nut butter thinly.',
      'Meals sitting down, no eating in the car seat, no walking or running with food, and no eating while lying down or laughing.',
      'Non food risks matter too: coins, button batteries, small magnets, balloons, small balls, and anything that fits through a toilet paper tube.',
      'Button batteries and high powered magnets are true emergencies if swallowed, even if the child seems fine. Go straight to an emergency room.',
      'Take an in person infant and child CPR and choking course. Techniques differ for infants and older children, and doing it wrong can cause injury.',
    ],
    myths: [
      { myth: 'Gagging means the food is unsafe.', truth: 'Gagging is how babies learn to manage food. Silent distress is the emergency.' },
      { myth: 'You should reach in and sweep the mouth.', truth: 'Blind finger sweeps can push an object deeper. Only remove something you can clearly see and easily grab.' },
      { myth: 'Round foods are fine if the child has teeth.', truth: 'Molars for grinding do not come in until well past the first year, and shape matters more than teeth.' },
    ],
    redFlags: [
      'Cannot cough, cry, or breathe: call 911 and begin choking first aid if you are trained',
      'Swallowed a button battery or magnet: emergency room immediately, even if they seem fine',
      'Any object swallowed that causes drooling, refusal to eat, or chest or throat pain',
      'After any choking episode that needed intervention, get them checked',
    ],
    sources: [
      { org: 'AAP', label: 'HealthyChildren: choking prevention', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx' },
      { org: 'Poison Control', label: 'US Poison Control, 1-800-222-1222, 24 hours', url: 'https://www.poison.org/' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'early-intervention',
    label: 'Getting a developmental evaluation',
    shortLabel: 'Getting help',
    category: 'development',
    minMonths: 0, maxMonths: 120,
    priority: 91,
    reviewedAgainst: 'IDEA Part C and Part B, and CDC Learn the Signs Act Early',
    summary:
      'Every time this app says mention it to your pediatrician, this is the next step nobody ' +
      'explains. In the US you can request a free evaluation yourself, and you do not need a ' +
      'doctor to agree with you first.',
    keyPoints: [
      'Under IDEA Part C, every state has an early intervention program for children from birth to their third birthday.',
      'You can contact your state program directly and request an evaluation. You do not need a referral, and you do not need your pediatrician to agree.',
      'The evaluation is free. Evaluations, assessments and service coordination are provided at no cost to families under Part C.',
      'There is a timeline. Once you make a referral, the process of evaluation and, if eligible, writing a plan generally happens within 45 days.',
      'If your child is found eligible, the plan is called an IFSP, an Individualized Family Service Plan, and it is built with you rather than handed to you.',
      'From age three, it changes hands. Evaluation goes through your local public school district, even if your child does not attend that school, and the plan becomes an IEP.',
      'Put your request in writing and date it. That starts the clock and creates a record.',
      'Waiting to see rarely costs nothing. Early support is more effective, and if your child turns out not to need it, you have lost nothing but an appointment.',
      'Bring notes. What you have noticed, when it started, and what it looks like at home is exactly the information an evaluation needs.',
      'Being found ineligible is not the end. You can ask what to watch for, request re-evaluation later, and pursue private assessment.',
    ],
    myths: [
      { myth: 'You need a diagnosis first.', truth: 'You do not. Eligibility is based on evaluated developmental need, not on having a diagnosis.' },
      { myth: 'Your pediatrician has to refer you.', truth: 'Parents can self refer directly to their state early intervention program.' },
      { myth: 'It will label your child.', truth: 'Early intervention is educational and developmental support, not a permanent medical label. Many children exit it entirely.' },
      { myth: 'They will catch up on their own, so waiting is safer.', truth: 'Sometimes they do. But the window where support works best is early, and an evaluation costs you nothing if it turns out to be unnecessary.' },
    ],
    redFlags: [
      'Losing skills they previously had, at any age, warrants a call rather than a wait',
      'No babbling, pointing, or gestures by about 12 months',
      'No single words by about 16 months, or no 2 word phrases by about 24 months',
      'Not responding to their name consistently',
      'You have raised a concern and felt dismissed. You can request evaluation yourself.',
    ],
    sources: [
      { org: 'Center for Parent Information and Resources', label: 'Overview of early intervention', url: 'https://www.parentcenterhub.org/ei-overview/' },
      { org: 'CDC', label: 'Learn the Signs. Act Early.', url: 'https://www.cdc.gov/act-early/index.html' },
      { org: 'ECTA Center', label: 'Find your state early intervention program', url: 'https://ectacenter.org/contact/ptccoord.asp' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'postpartum-parent',
    label: 'How the parent is doing',
    shortLabel: 'For you',
    category: 'health',
    minMonths: 0, maxMonths: 36,
    priority: 93,
    reviewedAgainst: 'AAP and ACOG postpartum mental health guidance',
    summary:
      'The person this app is written for also needs care. Perinatal mood and anxiety conditions are ' +
      'among the most common complications of childbirth, and they are treatable.',
    keyPoints: [
      'Baby blues are common in the first 2 weeks: tearfulness, mood swings, feeling overwhelmed. They lift on their own.',
      'When it lasts beyond about 2 weeks, or gets worse, or makes it hard to function, that is different and worth treating.',
      'Postpartum anxiety is as common as postpartum depression and gets talked about far less. Racing thoughts, constant checking, and a body that will not settle even when the baby sleeps.',
      'Intrusive thoughts, sudden unwanted images of something bad happening to the baby, are very common and very frightening. Having them is not the same as wanting them, and they respond well to treatment.',
      'It is not only birthing parents. Partners experience postpartum depression too.',
      'It can start any time in the first year, not just right after birth. Weaning and returning to work are both common trigger points.',
      'Pediatric visits often include a screening questionnaire for the parent. It is there because this is common, not because anyone suspects you.',
      'Treatment works: therapy, support, and where appropriate medication, including options compatible with breastfeeding.',
      'Sleep deprivation makes everything worse and is not a character test. One protected 4 hour block does more than 8 broken hours.',
      'In the US, the National Maternal Mental Health Hotline is 1-833-TLC-MAMA (1-833-852-6262), available 24 hours in English and Spanish.',
    ],
    myths: [
      { myth: 'Good mothers do not feel this way.', truth: 'This is a medical complication, as much as any physical one. It says nothing about your love for your baby.' },
      { myth: 'You have to stop breastfeeding to get treatment.', truth: 'Many treatments are compatible with breastfeeding. Ask rather than assuming you must choose.' },
      { myth: 'It is just tiredness.', truth: 'Exhaustion is real and so is this. If it has lasted more than 2 weeks or is affecting how you function, get it looked at.' },
      { myth: 'Intrusive thoughts mean you are dangerous.', truth: 'Distressing unwanted thoughts are a recognized and treatable symptom. Telling someone is the way through, not a risk to your family.' },
    ],
    redFlags: [
      'Symptoms lasting more than 2 weeks, or getting worse',
      'Unable to sleep even when the baby sleeps, or unable to eat',
      'Feeling disconnected from your baby, or from yourself',
      'Thoughts of harming yourself or your baby: get help immediately, call 988 in the US and Canada, or go to an emergency room',
      'Seeing or hearing things others do not, or beliefs that feel urgent and out of character: this is a medical emergency, go now',
    ],
    sources: [
      { org: 'HRSA', label: 'National Maternal Mental Health Hotline, 1-833-852-6262', url: 'https://mchb.hrsa.gov/national-maternal-mental-health-hotline' },
      { org: '988 Lifeline', label: '988 Suicide and Crisis Lifeline', url: 'https://988lifeline.org/' },
      { org: 'AAP', label: 'HealthyChildren: postpartum depression', url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/understanding-motherhood-and-mood-baby-blues-and-beyond.aspx' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'breathing',
    label: 'Breathing trouble: what to look for',
    shortLabel: 'Breathing',
    category: 'safety',
    minMonths: 0, maxMonths: 240,
    priority: 99,
    reviewedAgainst: "Children's hospital respiratory distress guidance and WHO IMCI fast breathing thresholds",
    summary:
      'Parents are told to watch for trouble breathing and almost never told what that looks like. ' +
      'These are the specific things to look at, and most of them need the shirt off and good light.',
    keyPoints: [
      'Retractions are the key sign. The skin sucks inward with each breath in 3 places: the notch at the base of the throat, under the breastbone, and between the ribs. The lower and deeper the pulling, the harder they are working.',
      'You cannot see retractions through clothing. Take the shirt off and look at the bare chest and belly.',
      'Nasal flaring means the nostrils widen with each breath in, and it signals extra effort.',
      'Grunting is a short sound at the end of a breath out. In a baby it is a serious sign, not a cute noise. It is an attempt to keep the lungs from collapsing.',
      'Stridor is a harsh noise breathing IN, and points to the upper airway. Wheezing is a whistling noise usually breathing OUT, and points lower down.',
      'Head bobbing, or using neck muscles to breathe, is the same story as retractions: extra effort.',
      'Color matters centrally. Look at lips, gums and tongue. Blue or dusky there is an emergency. Blue hands and feet alone in a newborn is usually just circulation.',
      'Count breaths for a full 60 seconds while they are calm or asleep. Crying makes the number meaningless.',
      'A child who has been working hard and then suddenly goes quiet and still may be tiring, not improving. Treat that as an emergency.',
      'Babies breathe mainly through their nose, so congestion alone can sound alarming. Saline and suction first, then look again at the effort.',
    ],
    rateTable: [
      { age: 'Under 2 months', fast: '60 or more breaths a minute' },
      { age: '2 to 12 months', fast: '50 or more breaths a minute' },
      { age: '1 to 5 years', fast: '40 or more breaths a minute' },
    ],
    myths: [
      { myth: 'If they are playing and alert, their breathing is fine.', truth: 'Children compensate well right up until they do not. A child can be working very hard to breathe and still look alert. The effort signs show before the child looks obviously sick.' },
      { myth: 'Blue hands and feet mean low oxygen.', truth: 'Cool, bluish hands and feet are common in newborns and usually just circulation. Blue lips, gums or tongue is the emergency version.' },
      { myth: 'Noisy breathing is the thing to worry about.', truth: 'Effort matters more than noise. A quiet child working extremely hard is more concerning than a noisy congested one who is comfortable.' },
      { myth: 'They stopped struggling, so they are better.', truth: 'Sometimes. But a child who was working hard and has gone quiet and floppy may be exhausted. If in doubt, call 911.' },
    ],
    redFlags: [
      'Blue, gray, or dusky lips, gums, or tongue: call 911',
      'Gasping, or pauses in breathing: call 911',
      'Too breathless to cry, feed, talk, or finish a sentence: call 911',
      'Deep retractions with every breath, or a harsh noise breathing in at rest: call 911',
      'Limp, very difficult to wake, or suddenly quiet after working hard: call 911',
      'Any retractions, nasal flaring, or grunting, even mild: call your pediatrician now',
      'Fast breathing at rest by the counts above: call your pediatrician now',
      'Feeding much less because they cannot breathe and suck at once: call your pediatrician now',
      'A lower threshold applies for babies born prematurely and children with heart or lung conditions',
    ],
    sources: [
      { org: "Nationwide Children's", label: 'Signs of respiratory distress in children', url: 'https://www.nationwidechildrens.org/conditions/health-library/signs-of-respiratory-distress-in-children' },
      { org: 'CHOP', label: 'Signs of respiratory distress in children', url: 'https://www.chop.edu/conditions-diseases/signs-respiratory-distress-children' },
      { org: 'WHO IMCI', label: 'Fast breathing thresholds by age', url: 'https://www.ncbi.nlm.nih.gov/books/NBK361919/table/part2.ch8.sec3.table3/' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'safe-sleep',
    label: 'Safe sleep and reducing SIDS risk',
    shortLabel: 'Safe sleep',
    category: 'safety',
    minMonths: 0, maxMonths: 15,
    priority: 100,
    reviewedAgainst: 'AAP 2022 policy statement on sleep related infant deaths',
    summary:
      'The single highest impact safety information in the first year. These recommendations apply ' +
      'to every sleep, including naps, and to every place your baby sleeps.',
    keyPoints: [
      'Back to sleep, every sleep, until their first birthday. Once a baby can roll both ways on their own, you do not have to flip them back.',
      'A firm, flat, non inclined surface. A crib, bassinet, or play yard with a fitted sheet and nothing else.',
      'Nothing else in the sleep space. No blankets, pillows, bumpers, stuffed toys, or positioners.',
      'Share a room, not a bed. The AAP recommends the baby sleep in your room on their own surface, ideally for at least the first 6 months.',
      'Couches, sofas, and armchairs are among the most dangerous places for a baby to fall asleep with an adult.',
      'Offer a pacifier at naps and bedtime once feeding is going well.',
      'Do not overheat. Dress them in about one more layer than you are comfortable in.',
      'Breastfeeding and avoiding smoke exposure both lower the risk.',
      'Stop swaddling as soon as your baby shows any sign of trying to roll, usually somewhere around 2 to 4 months.',
      'Supervised tummy time while awake, building toward 15 to 30 minutes a day by about 7 weeks.',
    ],
    myths: [
      { myth: 'Babies with reflux should sleep propped up or inclined.', truth: 'Inclined sleep is not safe and is not recommended for reflux. Never prop the mattress or use a wedge. Keeping baby upright after a feed is the safe version of this idea.' },
      { myth: 'They sleep better on their tummy, so it must be fine.', truth: 'Deeper sleep is part of why tummy sleeping is riskier. Better sleep is not evidence of safety.' },
      { myth: 'A home monitor will prevent SIDS.', truth: 'Consumer monitors marketed for SIDS prevention have not been shown to reduce risk, and relying on one can lead to a less safe sleep setup.' },
      { myth: 'Bumpers protect the baby from bumping their head.', truth: 'Crib bumpers pose a suffocation risk and are not recommended. A bumped head is not a danger, suffocation is.' },
    ],
    redFlags: [
      'Any pause in breathing, color change, or limpness needs emergency care',
      'A baby who is very difficult to wake, or who is breathing noisily or with effort',
    ],
    sources: [
      { org: 'AAP', label: 'Safe Sleep', url: 'https://www.aap.org/en/patient-care/safe-sleep/' },
      { org: 'AAP', label: 'Sleep Related Infant Deaths: Updated 2022 Recommendations', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'reflux',
    label: 'Reflux and spitting up',
    shortLabel: 'Reflux',
    category: 'feeding',
    minMonths: 0, maxMonths: 18,
    priority: 80,
    reviewedAgainst: 'AAP HealthyChildren guidance on GER and GERD',
    summary:
      'Most spitting up is a laundry problem rather than a medical one. What separates ordinary ' +
      'reflux from something that needs treatment is discomfort and growth, not volume.',
    keyPoints: [
      'GER is ordinary spitting up. GERD is when reflux comes with other symptoms or lasts beyond infancy.',
      'It usually starts around 2 to 3 weeks, peaks around 4 to 5 months, and resolves for most babies between 9 and 12 months.',
      'A baby who spits up a lot but is comfortable and growing is what pediatricians call a happy spitter, and needs no treatment.',
      'Burp at natural pauses during a feed rather than only at the end.',
      'Keep them upright for about 30 minutes after feeding.',
      'Smaller, more frequent feeds often help more than anything else.',
      'A cow milk protein allergy can look very much like reflux, so if a breastfeeding parent removing dairy is being considered, do it with your pediatrician rather than alone.',
    ],
    myths: [
      { myth: 'Reflux means you should tilt the crib mattress.', truth: 'Inclined sleep surfaces are not safe. Safe sleep rules do not change for reflux. Upright after feeds is the safe version.' },
      { myth: 'Reflux medication is the standard fix.', truth: 'Acid reducing medication is used far less in babies than it used to be, because for most infants it has not been shown to help. It is reserved for specific situations.' },
      { myth: 'Lots of spit up means they are not getting enough.', truth: 'Weight gain and wet diapers tell you whether they are getting enough. The amount on your shirt does not.' },
    ],
    redFlags: [
      'Blood, or green color, in the spit up',
      'Forceful vomiting, or vomiting that is becoming more frequent and more forceful',
      'Refusing feeds, crying or arching during feeds',
      'Poor weight gain, or fewer wet and dirty diapers',
      'A swollen or hard belly',
      'Wheezing or coughing alongside it',
    ],
    sources: [
      { org: 'AAP', label: 'GER and GERD in infants and children', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'oral-ties',
    label: 'Tongue tie and lip tie',
    shortLabel: 'Oral ties',
    category: 'feeding',
    minMonths: 0, maxMonths: 24,
    priority: 70,
    reviewedAgainst: 'AAP 2024 clinical report on ankyloglossia',
    summary:
      'Worth reading carefully before agreeing to a procedure. Tongue tie is real and sometimes needs ' +
      'treating, and it is also being diagnosed far more often than the evidence supports.',
    keyPoints: [
      'The AAP published a clinical report in 2024 specifically because diagnoses have risen so sharply. Diagnoses increased roughly tenfold between 1997 and 2012, and then roughly doubled again by 2016.',
      'The central point of that report: most breastfeeding difficulty, including pain, is not caused by ankyloglossia.',
      'Positioning and latch depth cause far more feeding pain than ties do, and they are fixable in a single lactation visit.',
      'Non surgical help should come first. A skilled lactation consultant, and where relevant a speech language pathologist, before a procedure.',
      'Frenotomy has limited evidence behind it and is best reserved for genuine functional problems that have not responded to non surgical support.',
      'Upper lip tie and posterior tongue tie are diagnosed frequently and have notably weaker evidence than classic anterior tongue tie.',
      'It is reasonable to ask any provider recommending a procedure: what specific function is impaired, what did we try first, and what does the evidence show for this.',
    ],
    myths: [
      { myth: 'Painful feeding means a tie.', truth: 'Pain is most often a latch depth problem. That is good news, because it is usually fixable without a procedure.' },
      { myth: 'A quick release is harmless, so it is worth trying.', truth: 'It is a procedure on a newborn with real recovery, sometimes with aftercare stretches. Low risk is not the same as no reason to be careful.' },
      { myth: 'A provider who diagnoses ties has more expertise.', truth: 'A second opinion from a pediatrician not performing the procedure is a reasonable thing to want, and asking for one is not rude.' },
    ],
    redFlags: [
      'Your baby is not gaining weight as expected',
      'Feeding pain that is not improving with skilled lactation support',
      'Your baby cannot maintain a latch, or feeds are extremely long and still ineffective',
    ],
    sources: [
      { org: 'AAP', label: 'Report addresses rise in tongue tie diagnoses', url: 'https://www.healthychildren.org/English/news/Pages/AAP-report-addresses-rise-in-tongue-tie-diagnoses-for-breastfeeding-concerns.aspx' },
      { org: 'AAP', label: 'Identification and Management of Ankyloglossia (2024 clinical report)', url: 'https://publications.aap.org/pediatrics/article/154/2/e2024067605/198022/Identification-and-Management-of-Ankyloglossia-and' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'breastfeeding',
    label: 'Breastfeeding',
    shortLabel: 'Breastfeeding',
    category: 'feeding',
    minMonths: 0, maxMonths: 36,
    priority: 90,
    reviewedAgainst: 'AAP and CDC breastfeeding guidance',
    summary:
      'The early weeks are the hardest and the most fixable. Most problems have a cause you can find, ' +
      'and skilled help early changes the whole trajectory.',
    keyPoints: [
      'Newborns feed often, roughly 8 to 12 times in 24 hours, and that frequency is normal rather than a sign of insufficient milk.',
      'Feed on cues rather than a clock: rooting, hands to mouth, stirring. Crying is a late cue.',
      'Supply is driven by removal. The more milk taken out, the more gets made.',
      'Cluster feeding, especially in the evening, is normal and is not evidence your supply dropped.',
      'Wet diapers and weight gain are the real measure of intake. Feed length and how full you feel are not.',
      'Deep latch is the whole game: nose level with the nipple, head tilting back, chin leading, wide open mouth.',
      'Sharp pain past the first few seconds means something is fixable. It is not something to push through.',
      'Ask for a lactation consultant early rather than as a last resort. Many hospitals and insurance plans cover this.',
    ],
    myths: [
      { myth: 'Soft breasts mean low supply.', truth: 'Breasts stop feeling full once supply regulates, usually around 6 to 12 weeks. That is your body getting efficient, not failing.' },
      { myth: 'A baby feeding often is not getting enough.', truth: 'Frequent feeding is how newborns are built to eat, and it is also how supply gets established.' },
      { myth: 'Pumping output tells you your supply.', truth: 'A pump is far less efficient than a baby. Low pump output is not a measurement of what your baby gets.' },
      { myth: 'Breastfeeding is supposed to hurt at first.', truth: 'Some tenderness is common. Cracking, bleeding, and sharp ongoing pain are signals, not rites of passage.' },
    ],
    redFlags: [
      'Fever, chills, body aches, or a red wedge shaped area on the breast, which can be mastitis and needs treatment',
      'Your baby is not back to birth weight by about 2 weeks',
      'Fewer wet diapers than expected for their age',
      'Your baby is very sleepy and hard to wake for feeds',
      'You are dreading feeds or feeling hopeless. That is worth telling your own doctor.',
    ],
    sources: [
      { org: 'CDC', label: 'Breastfeeding information for families', url: 'https://www.cdc.gov/breastfeeding/' },
      { org: 'AAP', label: 'HealthyChildren breastfeeding guidance', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'pumping',
    label: 'Pumping',
    shortLabel: 'Pumping',
    category: 'feeding',
    minMonths: 0, maxMonths: 36,
    priority: 75,
    reviewedAgainst: 'CDC and general lactation practice',
    summary:
      'Most pumping problems are equipment problems. Flange size in particular is the single most ' +
      'common fixable cause of pain and low output, and almost nobody is told to check it.',
    keyPoints: [
      'Flange size is measured from your nipple only, not the areola, and the size that comes in the box fits a minority of people.',
      'Signs the flange is wrong: pain, a lot of areola pulled into the tunnel, rubbing, white or blanched nipple after, or output that drops off.',
      'Pumping should not hurt. Turn the suction up only to the highest setting that is still comfortable, because higher is not more effective.',
      'To build supply, add sessions rather than lengthening them. Frequency of removal matters more than duration.',
      'A session is usually about 15 to 20 minutes, or a few minutes past the last let down.',
      'Returning to work: pumping roughly as often as the baby would feed protects supply, commonly about every 3 hours.',
      'Hands on pumping, compressing and massaging while you pump, meaningfully increases output for most people.',
      'Under US federal law many employees have the right to reasonable break time and a private, non bathroom space to pump. Worth knowing before you negotiate.',
    ],
    myths: [
      { myth: 'Pump output shows how much milk you make.', truth: 'A pump is much less efficient than a baby. Output measures the pump, not you.' },
      { myth: 'Higher suction gets more milk.', truth: 'Suction past comfort causes damage and often reduces output by inhibiting let down.' },
      { myth: 'You have to pump and dump after a drink.', truth: 'Milk alcohol falls as blood alcohol falls. Pumping does not speed that up. Time is what clears it.' },
    ],
    redFlags: [
      'Pain, cracking, or bleeding from pumping',
      'A sudden drop in output that does not recover',
      'A hard, red, painful area on the breast with fever or chills',
    ],
    sources: [
      { org: 'CDC', label: 'Breastfeeding information for families', url: 'https://www.cdc.gov/breastfeeding/' },
      { org: 'US DOL', label: 'Break time for nursing employees', url: 'https://www.dol.gov/agencies/whd/pump-at-work' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'milk-storage',
    label: 'Breast milk storage',
    shortLabel: 'Milk storage',
    category: 'feeding',
    minMonths: 0, maxMonths: 36,
    priority: 72,
    reviewedAgainst: 'CDC human milk storage guidelines',
    summary:
      'The numbers people quote from memory are usually wrong. These are the CDC figures for healthy ' +
      'full term babies.',
    storageTable: [
      { state: 'Freshly pumped', room: 'Up to 4 hours', fridge: 'Up to 4 days', freezer: 'Best within 6 months, up to 12 months acceptable' },
      { state: 'Thawed, previously frozen', room: '1 to 2 hours', fridge: 'Up to 1 day (24 hours)', freezer: 'Never refreeze' },
      { state: 'Left over from a feed', room: 'Use within 2 hours after baby finishes', fridge: 'Use within 2 hours after baby finishes', freezer: 'Do not freeze' },
    ],
    keyPoints: [
      'Room temperature means 77 F (25 C) or cooler. Refrigerator means 40 F (4 C). Freezer means 0 F (minus 18 C) or colder.',
      'Store in small amounts, 2 to 4 ounces, so less gets thrown away.',
      'Leave room at the top of the container, because milk expands as it freezes.',
      'Label every container with the date it was pumped.',
      'Store in the back of the fridge or freezer, never in the door, where the temperature swings.',
      'Thaw in the fridge overnight, or under warm running water. Never in a microwave, which creates hot spots and damages some of the milk.',
      'It is normal for stored milk to separate and to vary in color. Swirl rather than shake.',
      'These figures are for healthy full term babies. Ask your care team for different guidance if your baby was premature or is unwell.',
    ],
    myths: [
      { myth: 'You can refreeze thawed milk if it still seems cold.', truth: 'Never refreeze thawed human milk.' },
      { myth: 'Leftover milk in a bottle keeps for later if you refrigerate it.', truth: 'Once a baby has fed from it, use within 2 hours. Bacteria from the mouth are now in the bottle.' },
      { myth: 'Shaking damages the milk.', truth: 'Swirling is preferred and gentler, but this one is far less important than people are told.' },
    ],
    redFlags: [],
    sources: [
      { org: 'CDC', label: 'Human Milk Storage Guidelines', url: 'https://www.cdc.gov/breastfeeding/pdf/humanmilk-en-4x6-508.pdf' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'teething',
    label: 'Teething',
    shortLabel: 'Teething',
    category: 'health',
    minMonths: 3, maxMonths: 36,
    priority: 68,
    reviewedAgainst: 'FDA safety communications and AAP guidance',
    summary:
      '2 widely sold teething products carry FDA warnings, one of them following reported deaths. ' +
      'That is the most important part of this topic.',
    keyPoints: [
      'Safe relief: firm counter pressure from a clean finger, a chilled damp washcloth, or a refrigerated teether that is not frozen solid.',
      'Choose a teether too large to fit through a toilet paper tube, so it cannot become a choking hazard.',
      'Wipe drool and use a barrier ointment on the chin, since drool rash makes everything worse.',
      'Ask your pediatrician about acetaminophen for pain that is genuinely disrupting sleep, and dose by weight as they direct.',
      'Teething causes drooling, chewing, gum discomfort, irritability and disrupted sleep. It does not cause high fever, diarrhea, or a widespread rash.',
      'First teeth commonly arrive somewhere between 4 and 15 months, and that whole range is normal.',
    ],
    myths: [
      { myth: 'Amber teething necklaces relieve pain.', truth: 'There is no evidence they do anything, and the FDA has warned about teething jewelry following reports of strangulation and choking deaths. Do not use them, awake or asleep.' },
      { myth: 'Numbing gels are the obvious fix.', truth: 'The FDA warns against benzocaine teething products in infants and young children because of a rare but serious blood condition called methemoglobinemia.' },
      { myth: 'Teething causes fever.', truth: 'A true fever is not from teething. Treat it as a fever, which in a baby under 3 months means urgent care.' },
      { myth: 'Frozen teethers are best.', truth: 'Rock hard frozen objects can bruise gums. Chilled, not frozen solid.' },
    ],
    redFlags: [
      'A true fever, and in a baby under 3 months any fever is an emergency',
      'Diarrhea, a widespread rash, or a child who seems ill rather than uncomfortable',
      'Refusing to drink',
      'No teeth at all by about 18 months is worth mentioning, though often it is just their timeline',
    ],
    sources: [
      { org: 'AAP', label: 'FDA: teething necklaces can lead to choking and strangulation', url: 'https://publications.aap.org/aapnews/news/9241/FDA-Teething-necklaces-can-lead-to-choking' },
      { org: "Nationwide Children's", label: 'The dangers of amber teething necklaces', url: 'https://www.nationwidechildrens.org/family-resources-education/700childrens/2023/05/the-dangers-of-amber-teething-necklaces' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'car-seat',
    label: 'Car seat safety',
    shortLabel: 'Car seats',
    category: 'safety',
    minMonths: 0, maxMonths: 156,
    priority: 85,
    reviewedAgainst: 'AAP child passenger safety guidance',
    summary:
      'The old rule was an age. The current rule is not. Children stay in each stage until they reach ' +
      'the actual limits of their seat, which is usually much longer than parents expect.',
    keyPoints: [
      'Rear facing from the first ride home, and stay rear facing until they reach the maximum height or weight their seat allows.',
      'The age 2 rule was replaced. It is now height and weight based, and many convertible seats rear face well past 2 years.',
      'Then forward facing with a harness, again until they max out the seat limits.',
      'Then a belt positioning booster, until the adult seat belt fits correctly on its own.',
      'The belt fits when the lap belt sits low across the upper thighs and the shoulder belt crosses the chest and shoulder, with knees bent at the seat edge. That is usually somewhere around 4 foot nine.',
      'The back seat is the safest place, and children should ride there through at least age 13.',
      'Nothing bulky under the harness. Coats go on backwards over the buckled harness, not underneath it.',
      'The harness should be snug enough that you cannot pinch a horizontal fold of webbing at the shoulder, with the chest clip at armpit level.',
      'A free car seat check with a certified technician is available in most areas and catches installation errors that are extremely common.',
    ],
    myths: [
      { myth: 'Their legs look cramped, so it is time to turn them around.', truth: 'Crossed legs are comfortable for children and leg injuries in rear facing crashes are rare. Rear facing protects the head, neck and spine, which is what matters.' },
      { myth: 'Turning forward at two is the rule.', truth: 'That was the old guidance. Now it is the seat limits, and staying rear facing longer is safer.' },
      { myth: 'A used seat from a friend is fine.', truth: 'Only if you know its full crash history, it is not expired, and no parts are missing. Seats do expire.' },
      { myth: 'They can move to a booster whenever they are tall enough for the belt to reach.', truth: 'The harness stage should be used to its limits first. Each move is a step down in protection.' },
    ],
    redFlags: [
      'After any moderate or severe crash, the seat generally needs replacing even if it looks fine',
    ],
    sources: [
      { org: 'AAP', label: 'Rear facing car seats for infants and toddlers', url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Rear-Facing-Car-Seats-for-Infants-Toddlers.aspx' },
      { org: 'NHTSA', label: 'Car seats and booster seats, and finding a free inspection', url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats' },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    id: 'sick-day',
    label: 'When they are sick',
    shortLabel: 'Sick days',
    category: 'health',
    minMonths: 0, maxMonths: 240,
    priority: 88,
    reviewedAgainst: 'AAP HealthyChildren guidance',
    summary:
      'Colds are the most common reason parents worry and the least common reason a child needs ' +
      'medicine. What matters most is how they are acting, not the number on the thermometer.',
    keyPoints: [
      'A young child having many colds a year is normal, especially in childcare, and each one can run 7 to 10 days.',
      'Fever is the immune system working, not the illness itself. Treat the child, not the number.',
      'Under 3 months, a rectal temperature of 100.4 F (38 C) or higher is an emergency evaluation every time, day or night.',
      'Do not give over the counter cough and cold medicines to young children. They have not been shown to help and they carry real risks.',
      'Honey helps cough in children over one year. Never give honey under one year because of the risk of infant botulism.',
      'For congestion: saline drops and suction, a cool mist humidifier, and fluids.',
      'Watch hydration rather than appetite. Wet diapers and drinking matter, eating less for a few days does not.',
      'Ask your pediatrician for weight based dosing of acetaminophen or ibuprofen and write it down, rather than guessing at 2 AM. Ibuprofen is not used under 6 months.',
      'Never give aspirin to a child, because of the risk of Reye syndrome.',
    ],
    myths: [
      { myth: 'A high fever means a serious illness.', truth: 'The height of a fever does not track with how serious the illness is. How your child looks and acts tells you far more.' },
      { myth: 'Green mucus means antibiotics are needed.', truth: 'Color changes are a normal part of a viral cold and are not a sign of bacterial infection.' },
      { myth: 'You should alternate fever medicines routinely.', truth: 'Only do this if your pediatrician tells you to, because alternating raises the chance of a dosing error.' },
    ],
    redFlags: [
      'Any fever in a baby under 3 months',
      'Any sign of breathing effort: skin pulling in at the ribs, neck or under the breastbone, flaring nostrils, or grunting. See the breathing topic for what to look for.',
      'Fast breathing at rest, counted for a full minute while calm',
      'Signs of dehydration: far fewer wet diapers, no tears, a dry mouth, unusual sleepiness',
      'A rash that does not fade when you press a glass against it',
      'Very difficult to wake, confused, or unusually floppy',
      'A fever that lasts more than about 3 days, or goes away and comes back',
      'Your gut says something is wrong',
    ],
    sources: [
      { org: 'AAP', label: 'HealthyChildren: fever and symptom guidance', url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/default.aspx' },
      { org: 'AAP', label: 'HealthyChildren symptom checker', url: 'https://www.healthychildren.org/English/tips-tools/symptom-checker/Pages/default.aspx' },
      { org: 'Poison Control', label: 'US Poison Control, 1-800-222-1222, 24 hours', url: 'https://www.poison.org/' },
    ],
  },
];

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

export function getTopic(id) {
  if (!id) return null;
  return CARE_TOPICS.find((t) => t.id === id) || null;
}

export function getTopicsForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return [];
  return CARE_TOPICS
    .filter((t) => months >= t.minMonths && months < t.maxMonths)
    .sort((a, b) => b.priority - a.priority);
}

export function getTopicsByCategory(months) {
  const list = typeof months === 'number' ? getTopicsForAge(months) : [...CARE_TOPICS];
  const groups = {};
  list.forEach((t) => { (groups[t.category] = groups[t.category] || []).push(t); });
  return Object.keys(groups).map((id) => ({
    id, label: TOPIC_CATEGORIES[id] || id, items: groups[id],
  }));
}

export const TOPIC_CATEGORIES = {
  safety: 'Safety',
  feeding: 'Feeding',
  health: 'Health',
  development: 'Development',
};

/** Searchable across labels, key points and the myths, which is how parents phrase things. */
export function searchTopics(query) {
  if (!query || typeof query !== 'string') return [];
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  return CARE_TOPICS.filter((t) => {
    const hay = [
      t.label, t.shortLabel, t.summary,
      ...(t.keyPoints || []),
      ...(t.myths || []).map((m) => m.myth + ' ' + m.truth),
    ].join(' ').toLowerCase();
    return hay.includes(q);
  });
}

/** Every source across every topic, for a single references screen. */
export function getAllSources() {
  const seen = new Set();
  const out = [];
  CARE_TOPICS.forEach((t) => {
    (t.sources || []).forEach((s) => {
      if (seen.has(s.url)) return;
      seen.add(s.url);
      out.push({ ...s, topicId: t.id, topicLabel: t.label });
    });
  });
  return out;
}

export const TOPIC_IDS = CARE_TOPICS.map((t) => t.id);

export default CARE_TOPICS;

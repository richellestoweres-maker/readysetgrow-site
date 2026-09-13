/**
 * Ready Set Grow: Right Now
 * ------------------------------------------------------------------
 * The parent is not browsing. It is 6:40 PM, the baby has been screaming
 * for an hour, and they have one hand free. This file is what happens
 * when they tap the button.
 *
 * WHAT MAKES THIS DIFFERENT FROM THE DEVELOPMENT HUB
 * The Hub is organized by topic and read when there is time. Right Now is
 * organized by what is happening this minute and read while it is
 * happening. Same underlying knowledge, completely different shape.
 *
 * THE RULES FOR EVERY ENTRY
 *
 * 1. Safety comes before explanation, always.
 *    If a situation has any emergency version, the emergency check is the
 *    first thing rendered. A parent must never have to scroll past three
 *    paragraphs of reassurance to find out their baby needs to be seen.
 *
 * 2. Something to do in the first sixty seconds.
 *    tryRightNow is ordered, and the first item is doable one handed
 *    while holding a crying baby. Not a lecture. A move.
 *
 * 3. Explanation comes after the action, not before.
 *    whatIsHappening matters enormously for a parent's sanity, and it
 *    matters five minutes from now, not right this second.
 *
 * 4. Nothing here diagnoses anything.
 *    "Some babies", "one possibility", "this often means". Never
 *    "your baby has".
 *
 * FIELDS
 *   label            what the parent taps, in their words not ours
 *   urgencyCheck     shown FIRST when present. Emergency triage.
 *   tryRightNow      ordered, immediate, physical actions
 *   timers           timer presets this situation can launch, see sleep.js
 *   whatIsHappening  the reassurance and the science
 *   scripts          words to say, for the situations that need them
 *   forYou           the parent's own state, which is often the real issue
 *   callDoctorIf     the honest list, never softened
 *   topics           ids in careTopics.js for deeper reading
 */

/* ------------------------------------------------------------------
 * URGENCY LEVELS
 * These drive color and placement in the UI. Emergency content is never
 * collapsed, never below the fold, and never styled gently enough to
 * be missed.
 * ------------------------------------------------------------------ */

export const URGENCY = {
  emergency: { id: 'emergency', label: 'Go now', description: 'Call 911 or go to an emergency room.' },
  callNow: { id: 'callNow', label: 'Call now', description: 'Call your pediatrician or an after hours line today, even if it is the middle of the night.' },
  sameDay: { id: 'sameDay', label: 'Be seen today', description: 'Get an appointment today rather than waiting.' },
  routine: { id: 'routine', label: 'Mention it', description: 'Worth raising at your next visit.' },
};

/**
 * The universal emergency card. Shown at the top of the Right Now
 * screen at every age, always, regardless of what the parent taps.
 * A parent in a crisis should not have to find the right category first.
 */
export const ALWAYS_EMERGENCY = {
  title: 'Call 911 right now if',
  items: [
    'Their breathing looks like hard work: the skin sucks in below the neck, under the breastbone, or between the ribs with each breath (retractions), the nostrils flare wide, or they grunt on the way out',
    'They are gasping, or you can hear a harsh noise when they breathe in (stridor)',
    'Their lips, gums, tongue, or the skin around their mouth look blue, gray, or dusky',
    'They are too breathless to talk, cry, feed, or finish a sentence',
    'They are unresponsive, limp, or you cannot wake them',
    'They are having a seizure for the first time, or one lasting more than five minutes',
    'They had a serious fall, a head injury with vomiting or confusion, or you suspect a broken bone in the neck or back',
    'They may have swallowed a battery, a magnet, a medication, or a household chemical',
    'You think they are choking and cannot cough, cry, or breathe',
  ],
  poison: 'In the United States, Poison Control is 1-800-222-1222 and they answer 24 hours a day. Call them before trying anything at home.',
};

/**
 * Fever is the single most common reason a parent panics at 2 AM, and
 * the right answer depends almost entirely on age. This is separated out
 * because it should be reachable from every crying and illness entry.
 *
 * The under three months rule is not a judgment call. A rectal
 * temperature of 100.4 F or higher in a baby that young is an emergency
 * evaluation every time, because a young infant can be seriously ill
 * without looking seriously ill.
 */
export const FEVER_TRIAGE = [
  {
    minMonths: 0, maxMonths: 3,
    urgency: 'emergency',
    headline: 'Under 3 months with a fever is an emergency',
    detail:
      'A rectal temperature of 100.4 F (38 C) or higher in a baby under three months needs medical ' +
      'evaluation right away, day or night. Do not wait to see how the night goes and do not give ' +
      'fever medicine first, since that can mask what a doctor needs to see. This is true even if ' +
      'your baby seems fine otherwise.',
  },
  {
    minMonths: 3, maxMonths: 6,
    urgency: 'callNow',
    headline: 'Call for any fever at this age',
    detail:
      'Between three and six months, call your pediatrician for a temperature of 100.4 F (38 C) or ' +
      'higher, even if your baby seems comfortable. They will tell you whether to come in.',
  },
  {
    minMonths: 6, maxMonths: 216,
    urgency: 'sameDay',
    headline: 'How they look matters more than the number',
    detail:
      'Past six months, how your child is acting tells you more than the thermometer does. A child ' +
      'who is drinking, alert between fevers, and can be comforted is usually okay to watch at home. ' +
      'Call if the fever lasts more than a few days, if they seem very unwell, if they will not drink, ' +
      'if they have far fewer wet diapers, or if you are worried. Being worried is a good enough reason.',
  },
];

export function getFeverTriage(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return null;
  return FEVER_TRIAGE.find((f) => months >= f.minMonths && months < f.maxMonths) || null;
}

/* ------------------------------------------------------------------
 * THE SITUATIONS
 * ------------------------------------------------------------------ */

export const RIGHT_NOW = [
  /* ============ HIGHEST PRIORITY, EVERY AGE ============ */
  {
    id: 'breathing-looks-wrong',
    label: 'Their breathing looks wrong',
    subtitle: 'Fast, noisy, or like it is hard work',
    category: 'health',
    minMonths: 0, maxMonths: 240,
    priority: 200,
    urgencyCheck: {
      title: 'Call 911 now if you see any of these',
      body:
        'Blue, gray, or dusky lips, gums, or tongue. Gasping, or long pauses in breathing. Too ' +
        'breathless to cry, feed, talk, or finish a sentence. Very deep pulling in of the chest with ' +
        'every breath. Limp, or very difficult to wake. A harsh noise breathing in while at rest. ' +
        'Do not drive yourself if your child is struggling this hard, call 911 so care starts on the way.',
      severity: 'critical',
    },
    tryRightNow: [
      'Take their shirt off and look at their bare chest and belly in good light. You cannot see retractions through clothing, which is why this gets missed.',
      'Watch for the skin sucking IN as they breathe in. Check three places: the notch at the base of the throat, under the breastbone, and between each rib. That pulling in is called retractions and it means they are working hard to move air.',
      'Look at their nostrils. Widening with each breath is nasal flaring.',
      'Listen at the end of the breath. A small grunt on the way out is the body trying to hold the lungs open, and in a baby that is a serious sign.',
      'Count breaths for a full sixty seconds while they are calm or asleep. One rise and fall is one breath. Crying makes the number meaningless.',
      'Look at the color of their lips, gums and tongue, not their hands or feet. Cool hands and feet are common and not the same thing.',
      'If you see retractions, flaring, grunting, or color change, this is a call now, not a wait and see. Take a short video on your phone, it is genuinely useful to whoever sees them.',
    ],
    timers: [],
    whatIsHappening: {
      headline: 'Retractions are the sign parents are almost never taught to look for',
      body:
        'Children compensate well right up until they do not. A child can be working extremely hard to ' +
        'breathe while still looking alert and even playing. Retractions, flaring and grunting show ' +
        'that effort before the child looks obviously sick, which is exactly why they matter.',
      points: [
        'Retractions mean the chest wall is being pulled inward because the effort of breathing is high. The lower down and the deeper they go, the harder the work.',
        'Grunting in a baby is a red flag rather than a cute noise. It is an attempt to keep the lungs from collapsing at the end of each breath.',
        'A worrying color change shows centrally, on lips, gums and tongue. Blue hands and feet alone in a newborn are usually just circulation.',
        'A child who suddenly goes quiet and stops fighting after working hard to breathe may be tiring rather than improving. That is an emergency.',
        'Nasal congestion alone can cause noisy breathing in babies, who breathe mainly through their nose. Suction and saline first, then look again at whether the effort is normal.',
      ],
    },
    forYou: [
      'You are not overreacting by calling about breathing. Every pediatric provider would rather see a well child than miss a sick one.',
      'Trust what you see over what you are told on the phone. If they look worse, call again or go in.',
    ],
    callDoctorIf: [
      'Any retractions, nasal flaring, or grunting, even if they seem mild',
      'Breathing faster than roughly 60 a minute under 2 months, 50 a minute from 2 to 12 months, or 40 a minute from 1 to 5 years, counted while calm',
      'Pauses in breathing, or periods of noisy or laboured breathing during sleep',
      'Wheezing, or a barking cough with a harsh noise breathing in',
      'They are feeding much less because they cannot breathe and suck at the same time',
      'Any fever in a baby under three months alongside breathing changes',
      'Breathing changes in a baby born prematurely, or a child with a heart or lung condition, warrant a lower threshold to call',
    ],
    topics: ['breathing', 'sick-day'],
    relatedContent: [],
  },

  /* ============ NEWBORN AND INFANT ============ */
  {
    id: 'wont-stop-crying',
    label: "They won't stop crying",
    subtitle: "You've tried everything and it isn't working",
    category: 'crying',
    minMonths: 0, maxMonths: 12,
    priority: 100,
    urgencyCheck: {
      title: 'First, the important part',
      body:
        'If you feel yourself getting angry or shaken, put your baby down on their back somewhere ' +
        'safe, like their crib, and walk out of the room. A crying baby in a safe crib is completely ' +
        'fine for a few minutes. Take those minutes. Never shake a baby, not even a little. Shaking ' +
        'causes permanent brain injury in seconds, and it most often happens to loving parents at ' +
        'the end of a very long day.',
      severity: 'critical',
    },
    tryRightNow: [
      'Run through the quick list once: hungry, wet, too hot, too cold, a hair wrapped around a finger or toe, clothing tag, burp trapped.',
      'Pick one soothing thing and do it for a full five minutes before switching. Cycling through six things every thirty seconds is its own kind of overstimulating.',
      'Go skin to skin, or hold them upright against your chest with their ear over your heart.',
      'Try steady loud shushing right by their ear, close to the volume of their own crying. Quiet shushing usually cannot be heard over the crying.',
      'Change the environment completely. Step outside. Cold air and a new set of sounds resets a lot of crying jags.',
      'Turn on the shower or a vacuum. Low steady sound is closer to what the womb sounded like than silence is.',
      'If you are alone and running out, put them down safely and take five minutes. Then come back.',
    ],
    timers: ['soothe-five', 'parent-break'],
    whatIsHappening: {
      headline: 'Crying peaks around six to eight weeks and then it gets better',
      body:
        'Infant crying follows a curve. It climbs from birth, peaks somewhere around six to eight ' +
        'weeks, and drops off after that. During the peak, some babies cry for hours a day for no ' +
        'findable reason, and it is often worse in the late afternoon and evening. That is a stage ' +
        'in normal development, not a sign of a problem with your baby or with you.',
      points: [
        'A newborn who cries a lot is not rejecting you and is not spoiled by being held.',
        'Some crying has no cause you can find. Not finding the reason does not mean you missed it.',
        'Babies who cry hard often cannot come down on their own yet, so the crying continues after the original trigger is gone.',
        'You cannot spoil a baby under six months by responding. Responding is what builds the security they will regulate from later.',
      ],
    },
    forYou: [
      'Listening to your own baby cry sets off a genuine stress response in your body. Feeling desperate is a physiological reaction, not a character failure.',
      'Trade off with another adult in shifts if there is one. Two hours off duty is worth more than eight hours of both of you being frayed.',
      'Tell someone how hard it is. This is the stage people hide, which is exactly why every parent thinks they are the only one.',
    ],
    callDoctorIf: [
      'The cry sounds different from usual: high pitched, weak, or moaning',
      'They have a fever (see the fever guidance, which depends on their age)',
      'They are vomiting forcefully, or the vomit is green or has blood in it',
      'They will not feed, or are feeding much less than usual',
      'There are fewer wet diapers than normal',
      'They are much sleepier or much floppier than usual',
      'Crying started suddenly after a fall or an injury',
      'Your gut says something is wrong. That instinct is data and doctors want to hear it.',
    ],
    topics: ['safe-sleep', 'reflux', 'breastfeeding'],
    relatedContent: [],
  },

  {
    id: 'witching-hour',
    label: "It's the witching hour",
    subtitle: 'Same time every evening, and nothing helps',
    category: 'crying',
    minMonths: 0, maxMonths: 5,
    priority: 99,
    tryRightNow: [
      'Get ahead of it tomorrow rather than fighting it tonight. Start the calm part of the evening about thirty minutes before the fussing usually begins.',
      'Cut the stimulation now. Lights down, TV off, one adult in the room instead of three.',
      'Offer the breast or bottle even if it does not feel like it should be time. Evening cluster feeding is normal and it is not a sign your supply failed.',
      'Move. A carrier, a walk outside, or a slow bounce works better than sitting still for most babies at this hour.',
      'Try a warm bath, then straight into a dim room.',
      'Hand off to another adult if there is one. Babies pick up on tension, and by 6 PM you have run out.',
    ],
    timers: ['soothe-five', 'wind-down'],
    whatIsHappening: {
      headline: 'The evening fussy stretch is a real and well described pattern',
      body:
        'Lots of babies have a predictable stretch of fussiness in the late afternoon and evening, ' +
        'most commonly from around two weeks to three or four months. It is usually at its worst ' +
        'around six weeks and then fades.',
      points: [
        'By evening a newborn has absorbed a whole day of input with no way to discharge it. The fussing is often overload coming back out.',
        'Their internal clock is not set yet. The hormone rhythms that will eventually make evening feel like wind down time are still developing.',
        'Milk supply is naturally lower in the evening, which is part of why babies cluster feed then. Lower does not mean insufficient.',
        'The predictability is a good sign. Fussiness at the same time daily looks much more like a developmental stage than fussiness that comes out of nowhere.',
      ],
    },
    forYou: [
      'Plan your day around it instead of being ambushed by it. Dinner made at 2 PM is a legitimate strategy.',
      'This is the hour to lower every other standard. Nothing else has to happen between 5 and 8.',
    ],
    callDoctorIf: [
      'The crying is spreading well beyond the usual window, or getting worse rather than better after about three months',
      'They are arching, pulling their legs up, and seem in pain rather than just unhappy',
      'They are not gaining weight as expected',
      'There is blood or mucus in their stool',
      'They are spitting up forcefully, or refusing feeds',
    ],
    topics: ['reflux', 'breastfeeding', 'safe-sleep'],
    relatedContent: [],
  },

  {
    id: 'up-every-hour',
    label: 'They are up every hour',
    subtitle: 'Sleep fell apart and nothing has changed',
    category: 'sleep',
    minMonths: 2, maxMonths: 30,
    priority: 95,
    tryRightNow: [
      'Check the basics first: too warm, hungry, teething, or coming down with something.',
      'Wait a minute before going in. Some wakings settle on their own, and going in during a light stage can fully wake a baby who was on their way back down.',
      'Keep night wakings boring. Dim, quiet, minimal talking. Interesting nights make more nights.',
      'Look at the last wake window before bed. Overtired babies wake more often, not less.',
      'Tomorrow, make sure they get enough daytime feeding and enough daylight. Both influence how the night goes.',
      'Tonight, share the night in shifts if you can, so someone gets one solid block.',
    ],
    timers: ['wake-window', 'settle-check'],
    whatIsHappening: {
      headline: 'Sleep reorganizes several times in the first two years',
      body:
        'Around three to four months, infant sleep changes permanently from two simple states into ' +
        'cycles with lighter stages, much closer to how adults sleep. Lighter stages mean more ' +
        'opportunities to surface fully. Later disruptions tend to cluster around big developmental ' +
        'leaps, new motor skills, separation awareness, and language bursts.',
      points: [
        'The four month change is not a regression. It is a permanent upgrade in how their brain sleeps, and it does not go back.',
        'New skills get practiced at night. A baby learning to pull up will pull up at 2 AM.',
        'Separation awareness developing around eight to ten months makes waking alone feel very different than it did before.',
        'Teething, illness, travel, and a new room all cause the same picture, so it is worth ruling them out before concluding it is developmental.',
      ],
    },
    forYou: [
      'Broken sleep impairs you the way alcohol does. Be careful driving and be gentle with yourself about everything else.',
      'If you can only fix one thing, fix getting one unbroken four hour stretch for one adult. That single block does more than an extra hour spread thin.',
    ],
    callDoctorIf: [
      'They snore, gasp, or pause in their breathing during sleep',
      'The waking comes with pain, pulling at ears, or fever',
      'They are not gaining weight as expected',
      'You are struggling in a way that feels bigger than exhaustion. Postpartum depression and anxiety are common, treatable, and worth raising with your own doctor too.',
    ],
    topics: ['safe-sleep'],
    relatedContent: ['sleep-4-month-change'],
  },

  {
    id: 'fighting-sleep',
    label: 'They are fighting sleep',
    subtitle: 'Overtired, wired, and furious about bedtime',
    category: 'sleep',
    minMonths: 0, maxMonths: 60,
    priority: 88,
    tryRightNow: [
      'Stop trying to put them down for a moment and reset. Ten minutes of calm holding in a dim room does more than thirty minutes of fighting the crib.',
      'Turn everything down: lights, sound, and the number of people in the room.',
      'Go earlier tomorrow, not later. Overtired children fight sleep harder, and a later bedtime usually makes it worse.',
      'Use the same short sequence in the same order every night. Predictability does the work that persuasion cannot.',
      'For toddlers and up, give a five minute and a one minute warning before the transition.',
      'If it has been a battle for more than twenty minutes, stop, hold, and start the wind down again from the beginning.',
    ],
    timers: ['wind-down', 'wake-window'],
    whatIsHappening: {
      headline: 'Overtired looks exactly like not tired',
      body:
        'When a child stays awake past the point they were ready to sleep, their body responds with a ' +
        'stress response that produces alertness. That is why an exhausted child can seem suddenly ' +
        'wild rather than sleepy, and why it is harder to get them down than it was an hour earlier.',
      points: [
        'The window matters more than the clock. Watch for eye rubbing, ear pulling, staring, and going quiet, and move then.',
        'Second winds are real. Once past it, settling takes far longer.',
        'For toddlers, bedtime resistance is often about separation and control rather than tiredness.',
        'Screens close to bedtime delay sleep for older children through both light and content.',
      ],
    },
    forYou: [
      'Bedtime is the hour with the least patience left in the day. Trading nights with another adult protects both of you.',
    ],
    callDoctorIf: [
      'They seem to be in pain when lying down',
      'They snore loudly or seem to stop breathing during sleep',
      'Bedtime resistance comes with real fear or anxiety that is not settling over weeks',
    ],
    topics: ['safe-sleep'],
    relatedContent: ['sleep-4-month-change'],
  },

  {
    id: 'feeding-hurts',
    label: 'Feeding hurts',
    subtitle: 'Latching is painful and you are dreading the next feed',
    category: 'feeding',
    minMonths: 0, maxMonths: 12,
    priority: 92,
    urgencyCheck: {
      title: 'Pain is a signal, not a rite of passage',
      body:
        'Breastfeeding should not be sharply painful past the first few seconds of a latch. Being told ' +
        'to push through is common advice and it is usually wrong. Persistent pain almost always has ' +
        'a findable, fixable cause, and a lactation consultant can often change it in one visit.',
      severity: 'info',
    },
    tryRightNow: [
      'Break the suction gently with a clean finger at the corner of their mouth and start the latch again rather than enduring it.',
      'Aim so their nose is level with your nipple and they tilt their head back to come on. Chin leads, not nose.',
      'Look for a wide open mouth and more of the underside of the areola in than the top side.',
      'Try a different hold. Laid back or football hold changes the angle completely and often changes the pain.',
      'After the feed, put a little expressed milk on your nipple and let it air dry.',
      'Book a lactation consultant. This is the single highest value thing on this list.',
    ],
    timers: ['feed-timer'],
    whatIsHappening: {
      headline: 'Most feeding pain comes from positioning, and most of it is fixable',
      body:
        'A shallow latch is by far the most common cause of nipple pain, and it is usually a matter ' +
        'of angle and depth rather than anything wrong with you or your baby. Other common causes ' +
        'include a strong let down, thrush, vasospasm, and pump flanges that are the wrong size.',
      points: [
        'Cracking, bleeding, or a compressed lipstick shaped nipple after feeds all point at latch depth.',
        'Pain that starts after weeks of comfortable feeding is a different picture and worth having looked at.',
        'Tongue tie gets blamed for a great deal of feeding pain that turns out to be positioning. It is worth reading the oral ties topic before agreeing to a procedure.',
        'Pumping pain is very often flange sizing, which is easy to test and easy to change.',
      ],
    },
    forYou: [
      'Dreading feeds is a real and common experience, and it is worth telling someone about rather than white knuckling.',
      'Fed is the goal. If feeding is hurting your mental health, changing how you feed is a legitimate answer, not a failure.',
    ],
    callDoctorIf: [
      'You have a fever, chills, body aches, or a red wedge shaped area on your breast. That can be mastitis and it needs treatment.',
      'There is bleeding or cracking that is not improving',
      'Your baby is not gaining weight as expected, or has fewer wet diapers',
      'You have burning pain that continues between feeds',
    ],
    topics: ['breastfeeding', 'pumping', 'oral-ties'],
    relatedContent: [],
  },

  {
    id: 'spitting-up',
    label: 'They keep spitting up',
    subtitle: 'It seems like a lot and you are worried',
    category: 'feeding',
    minMonths: 0, maxMonths: 15,
    priority: 80,
    tryRightNow: [
      'Keep them upright for about thirty minutes after a feed rather than laying them straight down.',
      'Try smaller feeds more often instead of large ones.',
      'Burp at natural pauses during the feed rather than only at the end.',
      'Avoid tummy pressure right after eating, including the car seat if you can.',
      'Never prop the crib mattress or use a sleep positioner. Reflux is not a reason to change safe sleep. Back and flat still applies.',
    ],
    timers: ['upright-after-feed'],
    whatIsHappening: {
      headline: 'Most spitting up is laundry, not medicine',
      body:
        'Spitting up usually starts around two to three weeks, peaks somewhere around four to five ' +
        'months, and resolves for most babies between nine and twelve months as the muscle at the top ' +
        'of the stomach matures. A baby who spits up a lot but is comfortable and gaining weight is ' +
        'described by pediatricians as a happy spitter, and that needs no treatment.',
      points: [
        'The volume looks far bigger on a shirt than it is. A tablespoon spreads dramatically.',
        'What separates ordinary reflux from something needing treatment is discomfort and growth, not amount.',
        'Crying, arching, and refusing feeds alongside spitting up is a different picture and worth a call.',
        'Reflux medication is used much less than it used to be in babies, because for most it has not been shown to help.',
      ],
    },
    forYou: [
      'Buy more burp cloths and stop changing your shirt. This one really is a phase you outlast.',
    ],
    callDoctorIf: [
      'There is blood or green color in the spit up',
      'Vomiting is forceful, or it is becoming more frequent and more forceful',
      'They are refusing feeds, crying, or arching during feeds',
      'They are not gaining weight, or there are fewer wet or dirty diapers',
      'Their belly is swollen or hard',
      'They are wheezing or coughing alongside it',
    ],
    topics: ['reflux', 'safe-sleep'],
    relatedContent: [],
  },

  {
    id: 'teething-pain',
    label: 'Teething is miserable',
    subtitle: 'Drooling, chewing, and up all night',
    category: 'health',
    minMonths: 3, maxMonths: 36,
    priority: 78,
    urgencyCheck: {
      title: 'Two things to avoid completely',
      body:
        'Do not use benzocaine teething gels in babies and toddlers. The FDA warns they can cause a ' +
        'rare but serious blood condition. And do not use amber or beaded teething necklaces. The FDA ' +
        'has reports of strangulation and choking deaths from teething jewelry, and there is no ' +
        'evidence amber does anything at all.',
      severity: 'warning',
    },
    tryRightNow: [
      'Give firm counter pressure. A clean finger rubbed on the gums often helps more than anything you can buy.',
      'Offer something cold but not frozen solid: a damp washcloth chilled in the fridge, or a refrigerated teether.',
      'Pick a teether too large to fit through a toilet paper tube, so it cannot be a choking hazard.',
      'Wipe the drool and put a barrier ointment on their chin to stop the rash that makes everything worse.',
      'Ask your pediatrician about acetaminophen at night if pain is genuinely disrupting sleep, and follow their dosing by weight.',
    ],
    timers: [],
    whatIsHappening: {
      headline: 'Teething is real, and it gets blamed for a lot that is not teething',
      body:
        'Teething commonly causes drooling, chewing, gum discomfort, irritability, and disrupted ' +
        'sleep. It does not cause high fever, diarrhea, or a full body rash. Those point at ' +
        'something else happening at the same time, and teething is such a long stretch of a baby ' +
        'life that plenty of illnesses overlap with it.',
      points: [
        'First teeth usually arrive somewhere between four and fifteen months, and the range is wide and normal.',
        'The two or three days around a tooth actually cutting are usually the hard part.',
        'A low grade temperature can happen. A real fever should be treated as a fever, not attributed to teeth.',
      ],
    },
    forYou: [
      'Teething is used to explain months of bad sleep. Sometimes it is genuinely teething, and sometimes it is a developmental change wearing a teething costume.',
    ],
    callDoctorIf: [
      'There is a real fever, especially in a baby under three months where any fever is urgent',
      'They have diarrhea, a widespread rash, or seem ill rather than uncomfortable',
      'They refuse to drink',
      'No teeth at all by about eighteen months is worth mentioning, though it is often just their timeline',
    ],
    topics: ['teething'],
    relatedContent: [],
  },

  /* ============ TODDLER AND PRESCHOOL ============ */
  {
    id: 'tantrum-now',
    label: 'They are having a meltdown',
    subtitle: 'Right now, and possibly in public',
    category: 'behavior',
    minMonths: 12, maxMonths: 72,
    priority: 97,
    tryRightNow: [
      'Take one breath before you do anything. Your calm is the actual tool here.',
      'Get low, get close, and stop talking. Words do not land in a flooded brain.',
      'Say the want out loud once: you really wanted that. Then stop and wait.',
      'Do not try to reason, bargain, or explain during it. Save all of that for after.',
      'Keep them safe and keep the limit. You can be completely warm and still not change the answer.',
      'If you are in public, five words to the onlookers is plenty: he is having a hard time.',
      'Move somewhere with less input if you can. Fewer people and less noise shortens it.',
    ],
    timers: ['parent-break'],
    whatIsHappening: {
      headline: 'This is a brain limitation, not a behavior choice',
      body:
        'The part of the brain that manages impulses and brings big feelings back down is barely ' +
        'built at this age. A toddler in a meltdown is not deciding to do this, and they cannot stop ' +
        'themselves on request any more than they could reach a high shelf.',
      points: [
        'They know exactly what they want and cannot yet say it or get it. That gap is most of it.',
        'Feelings arrive at full volume with no dimmer switch.',
        'Look at what came before it. Hunger, tiredness and too much stimulation cause far more meltdowns than defiance does.',
        'Giving in during a meltdown teaches that meltdowns work. Staying warm while holding the limit teaches that you are safe and the limit is real.',
      ],
    },
    scripts: [
      { situation: 'While it is happening', say: "You really wanted that. I'm right here.", why: 'Names the want and offers presence without arguing and without giving in.' },
      { situation: 'They are hitting', say: "I won't let you hit. I'm moving you here so you're safe.", why: 'Stops it by acting rather than asking, and narrates so it is not frightening.' },
      { situation: 'Afterward, when calm', say: "That was a big feeling. Next time you can tell me mad.", why: 'Teaches at the only moment teaching can be heard, and names the alternative.' },
    ],
    forYou: [
      'A meltdown in public is not a performance review of your parenting.',
      'If you feel yourself escalating, it is fine to say "I need a second" and step just far enough away to breathe while they stay safe.',
      'You will lose your patience sometimes. Repairing afterward matters more than never slipping.',
    ],
    callDoctorIf: [
      'Meltdowns regularly last far longer than about 25 minutes or happen many times a day over a long stretch',
      'They hurt themselves during them',
      'They cannot be soothed by anyone at all, or cannot recover afterward',
      'They have very few words compared to what you would expect at this age',
      'You are frightened by how angry you feel. Saying that to your own doctor is a sign of good parenting, not a failure of it.',
    ],
    topics: [],
    relatedContent: ['toddler-tantrums-begin', 'preschool-big-feelings'],
  },

  {
    id: 'hitting-now',
    label: 'They just hit someone',
    subtitle: 'And you need to handle it in the next ten seconds',
    category: 'behavior',
    minMonths: 12, maxMonths: 84,
    priority: 90,
    tryRightNow: [
      'Stop it physically and calmly. Block the hand, or move your child.',
      'Go to the child who was hurt first. It models care and it takes the spotlight off the behavior.',
      'Give the limit and the replacement in one short sentence, then stop talking.',
      'Stay close for the next few minutes. This is usually when it happens again.',
      'Teach the alternative later, when everyone is calm, not now.',
    ],
    timers: [],
    whatIsHappening: {
      headline: 'At this age hitting is almost always communication',
      body:
        'Young children hit when they do not have the words, when excitement and frustration feel ' +
        'the same in the body, or when their body is seeking strong input. Impulse control is barely ' +
        'developed, so the gap between feeling something and doing something is nearly zero.',
      points: [
        'They often hit you most because you are safest. That is uncomfortable and it is a good sign.',
        'Excitement hitting looks like anger hitting but needs a different response: redirect the energy rather than address the feeling.',
        'Children with fewer words hit more. Speech support changes this picture more often than discipline does.',
      ],
    },
    scripts: [
      { situation: 'Immediately', say: "I won't let you hit. Hands are for playing.", why: 'A limit and a replacement, short enough to actually land.' },
      { situation: 'When it was excitement, not anger', say: "Big energy is okay. Let's use it safely. Stomp with me.", why: 'Does not treat the energy as bad, redirects where it can go.' },
      { situation: 'To another parent', say: "We're working on hands. I'm sorry, are you okay?", why: 'Handles the social moment without lecturing your child in front of an audience.' },
    ],
    forYou: [
      'Being hit by your own child stings in a way people do not talk about. That reaction is normal.',
    ],
    callDoctorIf: [
      'It is not decreasing at all over a period of months',
      'It is causing real injury, or seems intended to hurt',
      'It is happening at school or childcare too, or threatening their placement',
      'They have very few words for their age',
    ],
    topics: [],
    relatedContent: ['hitting-and-biting', 'four-year-physical-intensity'],
  },

  {
    id: 'drop-off-crying',
    label: 'Drop off is awful',
    subtitle: 'They cling and cry every single time',
    category: 'separation',
    minMonths: 7, maxMonths: 72,
    priority: 82,
    tryRightNow: [
      'Say goodbye every time. Slipping out avoids one hard moment and teaches them to watch you constantly.',
      'Keep it short and confident. Long goodbyes tell them there is something here to worry about.',
      'Use the exact same words and the same gesture every time, so it becomes a predictable ritual.',
      'Anchor your return to something in their day rather than a clock: after snack, after nap.',
      'Hand off and go. Lingering in the doorway extends it for everyone.',
      'Ask the caregiver later how long it actually lasted. It is almost always far shorter than you imagine.',
    ],
    timers: [],
    whatIsHappening: {
      headline: 'This is what a working attachment looks like',
      body:
        'Separation distress appears once a child understands that you continue to exist when you are ' +
        'out of sight. Knowing you exist somewhere else is exactly what makes leaving worth protesting. ' +
        'It commonly begins around seven to nine months and can return at new transitions for years.',
      points: [
        'They cannot yet hold onto the idea that you will come back, so every goodbye feels open ended.',
        'They have no sense of time. Ten minutes and a whole day feel the same.',
        'A child who cries at goodbye and settles a few minutes later is doing well.',
        'The return is the part that teaches the lesson, so name it out loud when you come back.',
      ],
    },
    scripts: [
      { situation: 'Leaving', say: "I'm going to work. I always come back. See you after nap.", why: 'Names what is happening, promises the return, anchors it to their day.' },
      { situation: 'They cry as you go', say: "It's hard to say goodbye. And I'll be back.", why: 'Acknowledges the feeling without treating it as a reason to stay.' },
      { situation: 'Coming back', say: "I came back. I always come back.", why: 'Makes the pattern visible, which is what eventually makes goodbyes easier.' },
    ],
    forYou: [
      'Guilt at drop off is not evidence you are doing anything wrong.',
    ],
    callDoctorIf: [
      'Distress does not ease at all after you leave, across many weeks',
      'They do not seek comfort from you when upset, or seem equally content with anyone',
      'They have lost words, gestures, or social skills they previously had',
      'The fear is severe enough to disrupt sleep, eating, or daily life',
    ],
    topics: [],
    relatedContent: ['separation-anxiety-onset'],
  },

  {
    id: 'wont-eat-dinner',
    label: 'They will not eat',
    subtitle: 'Dinner has become a battle',
    category: 'feeding',
    minMonths: 12, maxMonths: 96,
    priority: 76,
    tryRightNow: [
      'Stop asking, encouraging, praising or bargaining. Every one of those is pressure and pressure reduces eating.',
      'Put a safe food they reliably accept on the plate alongside whatever else is served.',
      'Say it once: you do not have to eat it, it is just on your plate. Then leave it alone.',
      'Keep the meal short. A long tense meal teaches that eating is unpleasant.',
      'Do not make a second dinner, but do not leave them with nothing acceptable either.',
      'End the meal without a lecture, and hold the kitchen closed until the next planned snack or meal.',
    ],
    timers: ['mealtime'],
    whatIsHappening: {
      headline: 'Appetite genuinely drops after the first year',
      body:
        'Growth slows dramatically after age one, so a toddler needs less food than a baby did. On top ' +
        'of that, wariness of new foods is a developmental stage that peaks in the toddler and ' +
        'preschool years. Food is also one of the very few things a small child fully controls, which ' +
        'is why it becomes a battleground.',
      points: [
        'Judge intake across a week, not a meal. Toddlers eat erratically and even out over days.',
        'Accepting a new food often takes many neutral exposures. Being served it and ignoring it is part of the process.',
        'Some children are genuinely more sensitive to texture and smell. That is real, not stubbornness.',
        'The division that ends most fights: you decide what is offered and when, they decide whether and how much.',
      ],
    },
    scripts: [
      { situation: 'They refuse', say: "You don't have to eat it. It's just on your plate.", why: 'Removes the pressure that causes most refusal while keeping the exposure.' },
      { situation: 'They want something else', say: "This is what's for dinner. There's bread too.", why: 'Holds the boundary while guaranteeing something they can eat.' },
      { situation: 'Hungry later', say: "Kitchen's closed, but breakfast is coming. Want to pick what we have?", why: 'Consistent limit plus control over the next thing, which is what they wanted anyway.' },
    ],
    forYou: [
      'You are responsible for what is offered, not for what is swallowed. That line protects both of you.',
      'If you dread dinner, they will feel it and eat less.',
    ],
    callDoctorIf: [
      'They are losing weight or falling off their growth curve',
      'The accepted food list is very short and still shrinking',
      'They gag, choke, vomit, or seem to have pain with eating',
      'They avoid entire textures or food groups, which can point to a sensory difference worth evaluating',
    ],
    topics: [],
    relatedContent: ['picky-eating'],
  },

  {
    id: 'bedtime-battle',
    label: 'Bedtime is a battle',
    subtitle: 'Endless requests, getting out of bed, hours of it',
    category: 'sleep',
    minMonths: 18, maxMonths: 96,
    priority: 85,
    tryRightNow: [
      'Give a five minute and a one minute warning before the routine starts.',
      'Use the same short sequence in the same order. Predictability beats negotiation.',
      'Front load the requests. One drink, one more hug, one more question, all offered before lights out so there is nothing left to ask for.',
      'For getting out of bed, walk them back with almost no words and almost no eye contact. Any reaction is a reward.',
      'Give them control over something real: which pajamas, which two books, which side of the bed.',
      'Move bedtime earlier if the battle is long. Overtired children resist harder.',
    ],
    timers: ['wind-down'],
    whatIsHappening: {
      headline: 'Bedtime resistance is usually about separation and control',
      body:
        'Going to sleep means being alone and letting go of the day, and for a child who is working ' +
        'hard on independence, that is a lot to ask. The requests are rarely about the water.',
      points: [
        'Fear of the dark and of being alone commonly appears around three to five and is developmentally normal.',
        'A child with almost no say over their day will make a stand at the one point where they have leverage.',
        'Screens close to bedtime delay sleep onset in older children.',
        'Consistency matters more than which specific approach you use.',
      ],
    },
    scripts: [
      { situation: 'The endless requests', say: "That was our last one. I'll see you in the morning.", why: 'Names the end clearly, so there is nothing ambiguous to negotiate with.' },
      { situation: 'They get out of bed', say: "It's sleep time.", why: 'Four words, no eye contact, walk them back. A boring response ends it fastest.' },
      { situation: 'They are scared', say: "You're safe. I'm just down the hall and I'll check on you.", why: 'Takes the fear seriously and gives a concrete, keepable promise.' },
    ],
    forYou: [
      'Bedtime lands at the hour when you have the least left. Trading nights protects everyone.',
    ],
    callDoctorIf: [
      'They snore, gasp, or seem to stop breathing during sleep',
      'Night fears are severe and not easing over months',
      'They seem anxious most of the time rather than mainly at bedtime',
    ],
    topics: ['safe-sleep'],
    relatedContent: [],
  },

  /* ============ SCHOOL AGE AND TEEN ============ */
  {
    id: 'after-school-meltdown',
    label: 'They fell apart after school',
    subtitle: 'Fine at school, impossible the second they see you',
    category: 'emotional',
    minMonths: 48, maxMonths: 156,
    priority: 84,
    tryRightNow: [
      'Feed them before you ask anything. Have food ready in the car, every time.',
      'Do not ask about their day yet. Questions are more work and work is the problem.',
      'Give quiet first. Connection can be a snack and silence.',
      'Get movement in before homework or chores.',
      'Lower every expectation for the first hour, as a policy rather than a concession.',
      'Come back to the real conversation later, sideways, in the car or at bedtime.',
    ],
    timers: ['decompress'],
    whatIsHappening: {
      headline: 'They spent all day holding it together and you are the safe place to let go',
      body:
        'Managing themselves through a full school day takes enormous effort. By pickup the reserves ' +
        'are empty, and the release happens with you precisely because you are the person who will ' +
        'not leave. It is often worst on the days that went best.',
      points: [
        'Hunger and tiredness both peak right at pickup, which is the worst possible timing.',
        'They have followed someone else\'s rules and schedule for hours with almost no control.',
        'Younger children cannot yet say they are depleted, so it arrives as behavior.',
        'A glowing report from the teacher plus a meltdown in the car is the classic version of this.',
      ],
    },
    scripts: [
      { situation: 'Getting in the car', say: "Snack's here. We don't have to talk yet.", why: 'Removes both demands at once, food and conversation.' },
      { situation: 'They snap at you', say: "You held it together all day. You can let it out with me.", why: 'Tells them the release is allowed, and reminds you what it means so it stings less.' },
      { situation: 'Later', say: "Tell me one thing that was good and one thing that was annoying.", why: 'Specific and small, which gets answers where how was your day gets fine.' },
    ],
    forYou: [
      'Being the person they fall apart with is a compliment delivered in the worst possible format.',
    ],
    callDoctorIf: [
      'They seem anxious or unhappy about going, not just tired after',
      'It is getting worse over time rather than settling',
      'There are changes in sleep, eating, or interest in things they used to enjoy',
      'They hint at something happening at school that concerns you',
    ],
    topics: [],
    relatedContent: ['after-school-restraint-collapse'],
  },

  {
    id: 'homework-shutdown',
    label: 'They cannot start their homework',
    subtitle: 'Sitting there, upset, going nowhere',
    category: 'school',
    minMonths: 72, maxMonths: 216,
    priority: 74,
    tryRightNow: [
      'Stop pushing for a moment. A shut down brain does not restart under more pressure.',
      'Ask what part is confusing rather than telling them to get going. Often they are stuck, not refusing.',
      'Make the first step absurdly small. Open the book. Write the name. Do problem one.',
      'Sit down next to them and do the first two minutes with them, then stay nearby and do your own thing.',
      'Set a visible timer for a short block with a real break after it.',
      'If it is genuinely too hard, stop and write a note to the teacher. Protecting the evening is worth more than a finished worksheet.',
    ],
    timers: ['focus-block', 'decompress'],
    whatIsHappening: {
      headline: 'Starting is a separate skill from doing',
      body:
        'A child can fully understand a task, know exactly what is required, and still be unable to ' +
        'begin. Initiating a task, holding the steps in mind, and finishing are different skills, and ' +
        'a child can be strong at one while needing real support with another.',
      points: [
        'What looks like laziness is very often overwhelm at the size of the task.',
        'Company helps enormously. Many people start far more easily with someone else in the room.',
        'Homework after a full school day is being asked for effort from an empty tank.',
        'If this is a pattern rather than a bad night, executive function support is worth exploring, and it is a skill set that can be taught.',
      ],
    },
    scripts: [
      { situation: 'They are stuck', say: "What part is confusing? Let's start there.", why: 'Treats it as a problem to solve rather than a motivation failure.' },
      { situation: 'They cannot begin', say: "Let's just do the first two minutes together.", why: 'Two minutes is small enough to agree to, and starting is usually the whole barrier.' },
      { situation: 'It is genuinely too much tonight', say: "We're stopping. I'll write the teacher a note.", why: 'Protects the relationship and the evening, and teaches that adults can adjust demands.' },
    ],
    forYou: [
      'Homework fights damage the relationship more than an unfinished assignment damages their education.',
    ],
    callDoctorIf: [
      'This happens most nights across a long stretch',
      'They are falling behind despite real effort',
      'They avoid school, or say they are stupid',
      'Focus, organization, or task initiation are difficult across every setting, not just homework',
    ],
    topics: [],
    relatedContent: [],
  },

  {
    id: 'teen-shut-down',
    label: 'They will not talk to me',
    subtitle: 'Door closed, one word answers, something is off',
    category: 'emotional',
    minMonths: 132, maxMonths: 240,
    priority: 86,
    urgencyCheck: {
      title: 'If you are worried about their safety',
      body:
        'If your teen has talked about wanting to die, hurting themselves, or not wanting to be here, ' +
        'take it seriously and ask directly. Asking does not put the idea in their head. In the US ' +
        'and Canada, the 988 Suicide and Crisis Lifeline can be called or texted at 988, any time. ' +
        'If they are in immediate danger, call 911 or go to an emergency room.',
      severity: 'critical',
    },
    tryRightNow: [
      'Stop asking questions for now. Interrogation closes the door further.',
      'Be nearby without demanding anything. Drive them somewhere, cook next to them, sit in the same room.',
      'Say the door is open and then actually stop talking.',
      'Talk sideways rather than face to face. Cars and walks get far more conversation than a kitchen table does.',
      'Do not lead with a solution. Most teens stop sharing because sharing produced advice they did not ask for.',
      'Name what you see without a verdict: you seem down this week, and I am around.',
    ],
    timers: [],
    whatIsHappening: {
      headline: 'Pulling away is developmentally on schedule, and it is not the same as shutting you out',
      body:
        'Adolescence involves building an identity separate from you, and privacy is part of how that ' +
        'gets built. Most teens who go quiet are not in crisis. But withdrawal can also be the first ' +
        'visible sign of depression or anxiety, so the goal is staying close enough to tell the ' +
        'difference without forcing it.',
      points: [
        'Peers become the primary reference point at this age. That is a normal developmental shift, not a rejection of you.',
        'Teens are biologically wired toward later sleep timing, so exhaustion often looks like moodiness.',
        'What matters most is the change from their baseline, not how talkative they are compared to other teens.',
        'Availability without pressure gets more conversation than any question does.',
      ],
    },
    scripts: [
      { situation: 'Opening the door', say: "You seem off this week. I'm not going to push. I'm around.", why: 'Names what you noticed, removes the pressure, and states availability.' },
      { situation: 'They start talking', say: "That sounds really hard. Do you want help or do you want me to just listen?", why: 'Asking which one they want is the single most effective thing a parent of a teen can say.' },
      { situation: 'Asking directly about safety', say: "Have you been having thoughts about hurting yourself?", why: 'Direct and calm. Asking does not plant the idea, and it gives them permission to answer honestly.' },
    ],
    forYou: [
      'You have not lost them. Most of this is the normal work of becoming a separate person.',
      'Staying steady and available while being pushed away is genuinely hard, and it is the job right now.',
    ],
    callDoctorIf: [
      'Withdrawal comes with changes in sleep, appetite, or dropping activities they used to care about',
      'It has lasted more than a couple of weeks and is not lifting',
      'Their grades have dropped sharply',
      'You see signs of self harm, or substance use',
      'Any mention of not wanting to be here. Take it seriously and get help the same day.',
    ],
    topics: [],
    relatedContent: [],
  },
];

/* ------------------------------------------------------------------
 * HELPERS
 * ------------------------------------------------------------------ */

/** One situation by id, or null. */
export function getSituation(id) {
  if (!id) return null;
  return RIGHT_NOW.find((s) => s.id === id) || null;
}

/**
 * The buttons to show a parent, given their child's age.
 * Sorted by priority so the most common panic at this age is the
 * biggest, easiest target on the screen.
 */
export function getSituationsForAge(months) {
  if (typeof months !== 'number' || Number.isNaN(months)) return [];
  return RIGHT_NOW
    .filter((s) => months >= s.minMonths && months < s.maxMonths)
    .sort((a, b) => b.priority - a.priority);
}

/** Situations grouped by category, for a browsable version of the list. */
export function getSituationsByCategory(months) {
  const list = getSituationsForAge(months);
  const groups = {};
  list.forEach((s) => { (groups[s.category] = groups[s.category] || []).push(s); });
  return Object.keys(groups).map((id) => ({ id, label: CATEGORY_LABELS[id] || id, items: groups[id] }));
}

export const CATEGORY_LABELS = {
  crying: 'Crying',
  sleep: 'Sleep',
  feeding: 'Feeding and eating',
  behavior: 'Behavior',
  separation: 'Separation',
  emotional: 'Big feelings',
  health: 'Health and comfort',
  school: 'School',
};

/** Plain text search, so a parent can type what is happening. */
export function searchSituations(query, months) {
  if (!query || typeof query !== 'string') return [];
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const pool = typeof months === 'number' ? getSituationsForAge(months) : RIGHT_NOW;
  return pool.filter((s) => {
    const hay = [s.label, s.subtitle, s.category, s.whatIsHappening && s.whatIsHappening.headline]
      .filter(Boolean).join(' ').toLowerCase();
    return hay.includes(q);
  });
}

/** Every timer id referenced by the situations available at this age. */
export function getTimersForAge(months) {
  const ids = getSituationsForAge(months).flatMap((s) => s.timers || []);
  return Array.from(new Set(ids));
}

export const SITUATION_IDS = RIGHT_NOW.map((s) => s.id);

export default RIGHT_NOW;

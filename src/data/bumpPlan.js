/**
 * Ready Set Grow: The Pregnancy Day, And Getting Ready For Labor
 * ------------------------------------------------------------------
 * Every child's profile opens with Today's plan. The pregnancy profile
 * did not have one, which she noticed: she wanted the same card on
 * Bean, telling her what to actually do today for the baby and for
 * herself.
 *
 * AND THE 37 WEEK LIST, which is what she was really asking for. The
 * curb walking, the pineapple, the dates, the ball. The whole of the
 * internet has an opinion about these and almost none of it separates
 * the ones with trials behind them from the ones that are folklore
 * from the ones that can actually hurt somebody.
 *
 * SO THEY ARE IN 3 GROUPS, and the grouping is the content:
 *   evidence   Dates have real randomized trials. Perineal massage has
 *              a Cochrane review. Say what the studies found and how
 *              many women were in them.
 *   movement   Curb walking, the ball, the Miles Circuit, pineapple.
 *              Little or no evidence any of it starts labor, and that
 *              is said plainly, along with what it probably IS doing,
 *              which is usually position and feeling less stuck.
 *   askfirst   Castor oil, nipple stimulation, evening primrose oil,
 *              blue and black cohosh. Real risks, named. Blue cohosh
 *              has case reports of serious harm to newborns.
 *
 * TONE, WHICH MATTERS MORE HERE THAN ANYWHERE. She is 9 months
 * pregnant and sick of being told what to do. Nothing on this page is
 * a task she can fail at, and she is allowed to eat the pineapple.
 */


export const BUMP_PLAN_TITLE = 'Today with Bean';
export const BUMP_PLAN_SUB =
  'A few small things you can actually do today, for you and for Bean, wherever you are in '
    + 'this pregnancy.';

export const BUMP_BANDS = [
  {
    id: 'first',
    label: 'The first trimester',
    weeks: [1, 13],
    intro: 'This is the tired, queasy, nobody knows yet stretch, and it is a lot. Almost nothing on '
      + 'this list takes more than a few minutes, and on the days when you only manage 1 of them, '
      + 'that counts. If food and water are all you can do today, do food and water.',
    items: [
      {
        what: 'Take your prenatal vitamin, at whatever time of day you can keep it down',
        why: 'Folic acid does its most important work in these early weeks, while the baby\'s '
          + 'brain and spine are forming. If it makes you queasy, try it with food or right '
          + 'before bed instead of first thing.',
      },
      {
        what: 'Eat something small every 2 to 3 hours',
        why: 'An empty stomach makes nausea worse, so frequent and bland often beats balanced '
          + 'right now. Crackers, toast, cheese, fruit, whatever stays down is the right food '
          + 'today.',
      },
      {
        what: 'Keep a water bottle within reach and sip all day',
        why: 'Your blood volume is already climbing, and sipping is easier to tolerate than big '
          + 'glasses. Being even slightly dry makes headaches and tiredness worse.',
      },
      {
        what: 'Book your first prenatal visit, or your next one, today',
        why: 'Early visits confirm dating and get your bloodwork started, and appointments fill '
          + 'up. Booking it is 5 minutes of phone time that saves you weeks of wondering.',
      },
      {
        what: 'Move for 10 to 20 minutes, or nap instead if that is what your body is asking for',
        why: 'A short walk helps circulation and mood, and the NHS suggests aiming for around 30 '
          + 'minutes of walking a day if you can. The test is whether you can still hold a '
          + 'conversation. If you are exhausted, rest is the better call today, not a failure.',
      },
      {
        what: 'Do 1 round of pelvic floor squeezes, 8 slow and 8 quick',
        why: 'Squeeze as if you were stopping yourself from peeing, then fully let go. Starting '
          + 'now builds the muscles that carry the weight later and help with leaking, and the '
          + 'NHS suggests working up to 3 sets of 8 a day.',
      },
      {
        what: 'Write down 1 question for your next appointment, in your phone',
        why: 'You will forget it in the room, everyone does. It also means you go in with '
          + 'something you want instead of just being asked things.',
      },
    ],
  },
  {
    id: 'second',
    label: 'The second trimester',
    weeks: [14, 27],
    intro: 'For a lot of women this is the easiest stretch, and the nausea eases while the bump is '
      + 'still manageable. It is the best window you will get to build habits that pay off in the '
      + 'third trimester, so a little consistency now buys you comfort later. It is also fine if '
      + 'you feel rotten through this part too. Not everyone gets the glow.',
    items: [
      {
        what: 'Walk 20 to 30 minutes most days',
        why: 'A 2025 review of 16 randomized trials in 3,387 women found that women who exercised '
          + 'through pregnancy had more spontaneous vaginal births, fewer cesareans, and a first '
          + 'stage of labor about 61 minutes shorter on average. You should still be able to talk '
          + 'while you walk.',
      },
      {
        what: 'Keep the pelvic floor squeezes going, 3 sets of 8, every day',
        why: 'This is the single most boring and most useful thing on this page. Attach it to '
          + 'something you already do daily, such as brushing your teeth, so you are not relying '
          + 'on remembering.',
      },
      {
        what: 'Put an iron rich food next to something with vitamin C at 1 meal',
        why: 'Your blood volume keeps expanding through this trimester, so your iron needs go up. '
          + 'Vitamin C helps your body absorb iron from food, so beans with salsa or spinach with '
          + 'strawberries does more than either alone. Your provider will check your levels, so '
          + 'let them tell you if you need more than food.',
      },
      {
        what: 'Sleep on your side with a pillow between your knees',
        why: 'Side sleeping is more comfortable as the bump grows, and after about 16 weeks it is '
          + 'best to avoid lying flat on your back for long stretches. A pillow between the knees '
          + 'takes the pull off your hips and lower back.',
      },
      {
        what: 'Get your anatomy scan and glucose test on the calendar',
        why: 'These are time sensitive and usually land around 18 to 22 weeks and 24 to 28 weeks. '
          + 'Ask at the same time about when your provider recommends the Tdap vaccine, which is '
          + 'usually in the 27 to 36 week window.',
      },
      {
        what: 'Ask at your next visit when you should start paying attention to Bean\'s movements',
        why: 'Providers differ on when and how they want you tracking, and it is easier to hear it '
          + 'once from yours than to sort through 10 opinions online. Knowing Bean\'s normal '
          + 'pattern is what makes a change noticeable later.',
      },
      {
        what: 'Do 1 thing today that has nothing to do with being pregnant',
        why: 'You are still a whole person, and the pregnancy is currently very good at taking up '
          + 'all the space. 20 minutes of something that is just yours is not indulgent, it is '
          + 'maintenance.',
      },
    ],
  },
  {
    id: 'third',
    label: 'The third trimester',
    weeks: [28, 36],
    intro: 'Everything gets heavier and slower now, and the good sleep is mostly behind you. The '
      + 'goal shifts from building to maintaining, so shorter and more often beats one big '
      + 'effort. This is also where the practical list starts to matter, because 36 weeks is a '
      + 'better time to find your bag than 39 weeks is.',
    items: [
      {
        what: 'Notice Bean\'s pattern today, when the active stretches usually are',
        why: 'You are not counting to hit a number, you are learning what normal looks like for '
          + 'this baby. If the movements drop off, change, or stop, call your midwife or '
          + 'maternity unit straight away, even in the middle of the night. Do not wait until '
          + 'morning and do not wait to see if cold water or food brings the baby back.',
      },
      {
        what: 'Keep walking, in 10 or 15 minute pieces if that is what works',
        why: 'Three short walks do the same job as one long one, and are easier on your pelvis and '
          + 'your energy. Anything that keeps you upright and moving helps with swelling, sleep, '
          + 'and digestion.',
      },
      {
        what: 'From about 34 weeks, ask your midwife or doctor about perineal massage',
        why: 'A Cochrane review of 4 trials in 2,497 women found that doing this in the last weeks '
          + 'slightly reduced tearing that needed stitches and reduced episiotomy, mostly for '
          + 'first vaginal births. It did not change the rate of severe tears. It is completely '
          + 'optional and it does not start labor, so let your provider show you how if you want '
          + 'to try it.',
      },
      {
        what: 'Sit on a birth ball for 10 minutes and circle your hips',
        why: 'This will not start labor, but at 34 weeks it is often the most comfortable way to '
          + 'sit, and it opens up your hips and eases your lower back. Keep your feet flat and '
          + 'your hips a little higher than your knees.',
      },
      {
        what: 'Put your feet up for 20 minutes this afternoon, higher than your hips',
        why: 'Swollen ankles and feet come from fluid pooling, and gravity is the cheapest '
          + 'treatment there is. Pair it with a big glass of water, which sounds backwards and '
          + 'helps anyway.',
      },
      {
        what: 'Do 1 practical task from the list, not the whole list',
        why: 'Hospital bag, car seat installed, pediatrician chosen, route to the hospital driven '
          + 'once. One a day from 30 weeks means you are done well before you need to be, without '
          + 'a panic week.',
      },
      {
        what: 'Ask at your next visit what your blood pressure is running and which symptoms mean '
          + 'call now',
        why: 'Preeclampsia usually shows up in this stretch, and your own numbers are more useful '
          + 'to you than a general range. Hearing the warning signs in your provider\'s words '
          + 'makes them much easier to act on at 2am.',
      },
    ],
  },
  {
    id: 'term',
    label: '37 to 40 weeks',
    weeks: [37, 40],
    intro: 'You are at term. Getting ready for labor has unlocked below, which is where the dates '
      + 'and the curb walking and the yoga ball live. Up here is the ordinary daily stuff that '
      + 'still matters more than any of it: moving a bit, eating, drinking, resting, and paying '
      + 'attention to Bean.',
    items: [
      {
        what: 'Walk today, however far you get',
        why: 'Walking in late pregnancy is one of the few things on this list with real research '
          + 'behind it, though what it looks like is a better chance of a spontaneous vaginal '
          + 'birth and a shorter first stage, not a labor that starts tonight. If you get to the '
          + 'end of the driveway and turn around, that still counts.',
      },
      {
        what: 'Eat 6 dates, if you like dates',
        why: 'This is the strongest evidence of anything in the labor prep list, and it is '
          + 'explained properly below. Roughly 6 a day, around 70 grams, is the amount used in '
          + 'the studies. If you have gestational diabetes, ask your provider first, because '
          + 'dates are high in sugar.',
      },
      {
        what: 'Check in on Bean\'s movements the way you have been',
        why: 'Movement does not slow down just because you are near the end, and that is a myth '
          + 'worth ignoring. Less movement, no movement, or a change in the pattern means call '
          + 'now, at any hour.',
      },
      {
        what: 'Rest hard in the afternoon, even if you cannot sleep',
        why: 'Nights are broken and labor could start at any hour, so sleep has stopped being '
          + 'something you schedule and become something you grab. Lying down with your eyes '
          + 'closed for 40 minutes is worth taking.',
      },
      {
        what: 'Ask what to do when your waters break, and when they want you to come in',
        why: 'The answer is specific to your provider and your hospital, and knowing it removes '
          + 'the worst decision from the worst moment. Ask about contraction timing too, such as '
          + 'how long and how close together before you call.',
      },
      {
        what: 'Keep drinking water, more than feels necessary',
        why: 'Being dehydrated can bring on tightenings that feel like early labor and are not, '
          + 'which is an exhausting way to spend an evening. It also helps with the constipation '
          + 'and the headaches.',
      },
      {
        what: 'Let yourself off the hook for today',
        why: 'Nothing you eat, bounce on, or walk over makes you responsible for when labor '
          + 'starts. Bean will come when Bean is ready, and that is genuinely not a reflection on '
          + 'your effort.',
      },
    ],
  },
  {
    id: 'over',
    label: '41 weeks and beyond',
    weeks: [41, 44],
    intro: 'You are late term, not late. Your due date was always an estimate of the middle of a '
      + 'range, and plenty of healthy first pregnancies run past it. This is the stretch where '
      + 'everyone texts you and nothing happens, so the list gets shorter and more protective.',
    items: [
      {
        what: 'Pay close attention to Bean\'s movements, today and every day',
        why: 'This is the most important item on this entire page right now. Any reduction, any '
          + 'change in pattern, any doubt, call your midwife or maternity unit immediately. Not '
          + 'in the morning, not after a snack, now.',
      },
      {
        what: 'Ask what monitoring they offer from here, and how often',
        why: 'Many providers start extra checks after 41 weeks, such as fluid volume or a '
          + 'nonstress test. Knowing what is scheduled and what it is for makes this wait a lot '
          + 'less blank.',
      },
      {
        what: 'Have the induction conversation properly, before you have to have it fast',
        why: 'Ask what your provider recommends and when, what the method would be, and what '
          + 'happens if you wait. You are allowed to ask what the risks are on both sides, and '
          + 'you are allowed to take a day to think.',
      },
      {
        what: 'Walk a little, rest a lot',
        why: 'Big pushes of activity now mostly just make you sore and discouraged. Short and '
          + 'gentle keeps you loose without spending energy you may want soon.',
      },
      {
        what: 'Stop answering the any news yet messages',
        why: 'Send 1 group message saying you will tell everyone when there is something to tell, '
          + 'then put the phone down. You do not owe anyone hourly updates on your cervix.',
      },
      {
        what: 'Eat normal meals and keep the water going',
        why: 'It is tempting to live on adrenaline and snacks at this point. Labor could start '
          + 'tonight or in 5 days, and either way you want to go into it fed and hydrated.',
      },
      {
        what: 'Say the thing you are actually feeling out loud, to 1 person',
        why: 'Waiting past your date is genuinely hard, and being told to be patient does not '
          + 'help. Frustrated, scared, and done is a normal thing to be at 41 weeks, and saying '
          + 'it takes some of the weight out of it.',
      },
    ],
  },
];

export const BUMP_LABOR = {
  title: 'Getting ready for labor',
  sub: 'The dates, the pineapple, the curb walking and the yoga ball, sorted honestly into what '
    + 'the research actually supports, what is just nice movement, and what to ask about first.',
  intro: [
    'You have probably already been sent a reel about this. Somebody\'s cousin ate 6 dates '
      + 'and went into labor the next day, somebody swears by pineapple, and there is a video of '
      + 'a woman walking sideways down a curb at 39 weeks. Almost none of it is dangerous, and a '
      + 'little of it has real research behind it, so this page sorts it out rather than telling '
      + 'you to stop looking.',
    'One thing before you scroll: this is not a to do list you can fail at. There is no '
      + 'version of the end of pregnancy where you did the right combination of things and earned '
      + 'an earlier labor, and there is no version where you missed something and caused a long '
      + 'one. Labor starts when your body and Bean are ready, and the honest truth is that '
      + 'nothing here reliably changes that date. What some of it can do is help you feel less '
      + 'stuck, help Bean settle into a good position, and in a couple of cases make the labor '
      + 'you do have a bit shorter. Pick what sounds good, skip the rest, and let your midwife or '
      + 'doctor be the one who decides anything medical.',
  ],
  termNote: [
    '37 weeks used to be the finish line, and it is not anymore. In 2013 ACOG and the Society '
      + 'for Maternal Fetal Medicine split term into 4 parts, because the research showed that '
      + 'the last few weeks are not interchangeable. 37 weeks 0 days to 38 weeks 6 days is early '
      + 'term. 39 weeks 0 days to 40 weeks 6 days is full term. 41 weeks 0 days to 41 weeks 6 '
      + 'days is late term, and past 42 weeks is postterm. So reaching 37 weeks is a real '
      + 'milestone and a genuine relief, and it is the start of term rather than the end of the '
      + 'pregnancy.',
    'That split is why ACOG advises against scheduling an induction or a cesarean before 39 '
      + 'weeks when there is no medical reason for it. In those 2 extra weeks Bean\'s brain, '
      + 'lungs, and liver are still finishing, and babies born in the early term window have '
      + 'somewhat more trouble with breathing, feeding, and temperature than babies born at 39 or '
      + '40 weeks. If there is a medical reason to deliver earlier, that reason wins, and your '
      + 'provider will tell you what it is. Going the other way, once you pass 41 weeks the risks '
      + 'start to creep up slowly too, which is why most providers will want to talk with you '
      + 'about monitoring and about induction somewhere in the 41 to 42 week range. Both of those '
      + 'are conversations with your own provider about your own pregnancy, not rules you have to '
      + 'apply to yourself.',
  ],
  groups: [
    {
      id: 'evidence',
      label: 'There is some evidence behind these',
      note: 'These are the ones with published research, and that still means different things for '
        + 'each one. Dates have the most for a food, walking has solid evidence for labor going '
        + 'more smoothly, perineal massage has good evidence for your perineum rather than for '
        + 'starting labor, and membrane sweeping is something a clinician does, not something you '
        + 'do. Even the best of these shifts the odds a little. None of them is a switch.',
      items: [
        {
          what: 'Dates',
          detail: 'This is the one that genuinely has trials behind it. A 2011 study in 114 women, 69 '
            + 'of whom ate about 6 dates a day for the last 4 weeks, found the date eaters '
            + 'arrived at the hospital more dilated, 3.52 cm on average against 2.02 cm, spent a '
            + 'shorter latent phase, about 8.5 hours against 15, and needed prostaglandin or '
            + 'oxytocin less often, 28% against 47%. A randomized trial in 210 first time mothers '
            + 'eating 70 to 75 grams a day from 37 weeks found higher Bishop scores, 7.67 against '
            + '5.12, and much less oxytocin use, 20% against 44.8%. A 2024 review pooling 48 '
            + 'trials pointed the same way on cervical ripening, dilation on admission, and '
            + 'shorter first stage. The important caveat is that the reviewers rated the overall '
            + 'quality of this research as poor, with high risk of bias in most studies and '
            + 'safety reported in only 4 of them, so treat it as promising rather than proven. '
            + 'Practically: around 6 dates a day from 36 or 37 weeks, and check with your '
            + 'provider first if you have gestational diabetes, because they are high in sugar.',
        },
        {
          what: 'Walking and staying active',
          detail: 'Walking is not an induction method, and it is one of the better supported things '
            + 'you can do for the labor you are going to have. A 2025 review of 16 randomized '
            + 'trials in 3,387 women found that women who exercised through pregnancy had more '
            + 'spontaneous vaginal births, 14% more, about a third fewer cesareans, and a first '
            + 'stage of labor around 61 minutes shorter, and the reviewers rated that evidence '
            + 'moderate to high certainty. The upright and moving effect carries into labor too: '
            + 'a Cochrane review of 25 trials in 5,218 women found that women who stayed upright '
            + 'and mobile in the first stage had a first stage about 1 hour 22 minutes shorter '
            + 'and were less likely to need an epidural or a cesarean. Aim for whatever you can '
            + 'manage while still being able to hold a conversation, and stop if your pelvis or '
            + 'pubic bone hurts.',
        },
        {
          what: 'Perineal massage from about 34 weeks',
          detail: 'This one has Cochrane evidence, and not for starting labor. Across 4 randomized '
            + 'trials in 2,497 women, massaging the perineum for a few minutes once or twice a '
            + 'week from around 35 weeks slightly reduced the chance of tearing that needed '
            + 'stitches and reduced episiotomy, with the benefit clearest for women having their '
            + 'first vaginal birth. It did not reduce severe third or fourth degree tears, and it '
            + 'did not change instrumental birth rates. It is entirely optional, it can feel odd '
            + 'or uncomfortable the first few times, and it is worth asking your midwife or '
            + 'doctor to explain the technique rather than learning it from a video.',
        },
        {
          what: 'Membrane sweeping',
          detail: 'This is a procedure, not something you do at home. A clinician puts a finger '
            + 'through your cervix and sweeps it around the membranes to separate them slightly '
            + 'from the cervix, which releases prostaglandins locally. A Cochrane review of 44 '
            + 'studies in 6,940 women found sweeping made spontaneous labor somewhat more likely '
            + 'and reduced the need for a formal induction, with no clear difference in cesarean '
            + 'rates or in serious problems for mothers or babies. It is often uncomfortable, '
            + 'sometimes properly painful for a minute, and can be followed by cramping and '
            + 'spotting for a day. It is your provider\'s call whether it is appropriate for you, '
            + 'and it is entirely your call whether you consent. If you are curious, ask at your '
            + 'next visit what they think and when they would consider it.',
        },
        {
          what: 'Acupuncture',
          detail: 'The evidence here is real but modest. A Cochrane review of 22 trials in 3,456 '
            + 'women found no clear reduction in cesarean rates from acupuncture or acupressure, '
            + 'with some signal that acupuncture improved cervical readiness, measured by Bishop '
            + 'score, within 24 hours. Quality ranged from low to high across outcomes, with most '
            + 'trials at moderate risk of bias, and the reviewers called for better designed '
            + 'studies. It is generally safe with a licensed practitioner who is experienced in '
            + 'pregnancy, so if you like acupuncture and it makes you feel better, it is a '
            + 'reasonable thing to book. Just do not plan your birth around it, and tell your '
            + 'provider you are doing it.',
        },
        {
          what: 'Red raspberry leaf tea',
          detail: 'The internet is much more confident about this than the research is, so here is '
            + 'the honest version. A 2021 systematic review pulled together 13 studies going back '
            + 'to 1941, of which only 6 were in humans and only 1 was a randomized trial, and '
            + 'that trial used a dose most people would call too low to do much. It found the '
            + 'second stage about 10 minutes shorter in the raspberry leaf group, which was not '
            + 'statistically significant. The reviewers concluded plainly that the human evidence '
            + 'does not show a benefit. On safety they found little sign of harm, with 2 things '
            + 'worth knowing: 1 case report of low blood sugar in a woman with gestational '
            + 'diabetes who drank it, and the possibility that it interacts with some medications '
            + 'through the liver enzymes that process them. So if you like the tea, drink the '
            + 'tea. If you are on medication or have gestational diabetes, mention it to your '
            + 'provider first.',
        },
      ],
    },
    {
      id: 'movement',
      label: 'Harmless, and probably just movement',
      note: 'These are the ones from the reels. No good evidence says any of them starts labor, and '
        + 'that does not make them pointless. Most are some combination of getting your hips '
        + 'moving, getting Bean into a better position, and giving you something to do with the '
        + 'restless energy of a 39th week. Being stuck and helpless feels terrible, and doing '
        + 'something gentle about it is worth more than people give it credit for. Try what '
        + 'appeals to you, stop anything that hurts, and know what you are actually getting.',
      items: [
        {
          what: 'Curb walking',
          detail: 'Walking with 1 foot up on a curb and 1 foot down, so your hips are working '
            + 'unevenly. There is no trial on this, so nobody can tell you it starts labor. The '
            + 'idea is that the asymmetry rocks your pelvis and gives Bean a nudge toward '
            + 'settling deeper or straighter, which is plausible and unproven. What it definitely '
            + 'is, is walking, and walking does have evidence behind it. If it feels good, do it '
            + 'in short bursts, hold onto something, and stop right away if your pubic bone or '
            + 'the front of your pelvis complains, because that joint is already loose and sore '
            + 'for a lot of women at this point.',
        },
        {
          what: 'Bouncing on a birth ball',
          detail: 'Nothing shows that bouncing brings on labor. What birth ball research actually '
            + 'covers is being on the ball during labor, where trials link it to less pain and '
            + 'more comfort, and that is a different question from starting labor. The reason to '
            + 'use it now is simpler: at 38 weeks it is often the most comfortable way to sit, it '
            + 'takes pressure off your lower back, and gentle hip circles feel genuinely good '
            + 'when nothing else does. Keep your feet flat and wide and your hips slightly higher '
            + 'than your knees, and have something to hold if you feel wobbly.',
        },
        {
          what: 'The Miles Circuit',
          detail: 'Three positions, roughly 30 minutes each, meant to help Bean line up well. There '
            + 'is no published trial showing it starts labor or repositions a baby, so anyone '
            + 'promising either is going beyond the evidence. The reasoning behind it is about '
            + 'pelvic alignment and it is largely harmless, which is a fair combination if you '
            + 'want a structured 90 minutes that is not scrolling. Treat it as comfortable '
            + 'positioning rather than a technique, come out of anything that hurts or makes you '
            + 'dizzy, and do not lie flat on your back for the whole thing.',
        },
        {
          what: 'Spinning Babies positions',
          detail: 'Same category, same honesty. The published research on these techniques is early '
            + 'and thin, mostly observational rather than randomized, and it is not enough to say '
            + 'they turn babies or bring on labor. The daily stretches are gentle and most women '
            + 'find they feel good on a stiff back and tight hips. What they are not is a fix for '
            + 'a baby who is genuinely in an awkward position, which is a conversation with your '
            + 'midwife or doctor, and they are not an induction. Do them because your body likes '
            + 'them.',
        },
        {
          what: 'Pineapple',
          detail: 'Pineapple contains bromelain, an enzyme that breaks down protein, and in a dish in '
            + 'a lab bromelain does act on tissue. That is where the theory comes from and it is '
            + 'also where it stops. Eaten, most bromelain is broken down by your own digestion '
            + 'before it gets anywhere near your cervix, the amount in a serving of fruit is '
            + 'small, and there is no human trial showing pineapple ripens a cervix or starts '
            + 'labor. Estimates for a theoretical labor dose run to something like 7 or more '
            + 'whole fresh pineapples, cores included, in 1 sitting, which would realistically '
            + 'get you heartburn, a raw mouth, and an unhappy stomach at 39 weeks. Eat some '
            + 'pineapple because it is cold and sharp and good, which is a perfectly fine reason.',
        },
        {
          what: 'Spicy food',
          detail: 'There is no evidence that spicy food starts labor. The theory is vague, something '
            + 'about irritating your gut into irritating your uterus, and nothing supports it. '
            + 'The realistic outcome at 39 weeks is reflux, which you probably already have '
            + 'plenty of. If you love spicy food, eat spicy food, because the pregnancy has '
            + 'already taken enough away from you. Just do it for the food.',
        },
        {
          what: 'Sex',
          detail: 'The theory is reasonable: semen contains prostaglandins, and orgasm causes uterine '
            + 'contractions, and prostaglandins are literally what some medical inductions use. '
            + 'The evidence is almost nonexistent. The Cochrane review on this found exactly 1 '
            + 'trial with 28 women in it, from which no meaningful conclusion could be drawn. For '
            + 'most people it is safe at term, and it is not safe if your waters have broken, if '
            + 'you have bleeding, or if you have been told you have placenta previa or another '
            + 'reason to avoid it, so ask if you are unsure. Otherwise, do it because you want '
            + 'to, not as a task.',
        },
      ],
    },
    {
      id: 'askfirst',
      label: 'Ask first, or skip',
      note: 'These are the ones that can actually do something, which is exactly why they belong in '
        + 'a conversation with your midwife or doctor and not in a comment section. Some are used '
        + 'by providers in specific ways at specific points, which is very different from trying '
        + 'them at home off a video. One of them, blue cohosh, has case reports of serious harm '
        + 'to newborns, and the honest answer there is not to try it at all.',
      items: [
        {
          what: 'Castor oil',
          detail: 'A Cochrane review found only 3 small trials, 233 women in total, of poor quality, '
            + 'with no evidence of a difference in cesarean rates. What the research is clear '
            + 'about is the side effect: essentially every woman who took castor oil felt '
            + 'nauseated, and vomiting and diarrhea are common with it. Spending a day vomiting '
            + 'and running to the bathroom is a bad way to arrive at labor, because dehydration '
            + 'and exhaustion are not what you want to start with, and it can bring on painful '
            + 'cramping that is not productive labor. Some providers do use it in specific doses '
            + 'at specific gestations and will tell you exactly how. That is the only version of '
            + 'this worth doing, so ask, and do not dose yourself from a video.',
        },
        {
          what: 'Nipple stimulation and pumping',
          detail: 'This one has the strongest effect signal of anything on this whole page, and that '
            + 'is precisely why it needs your provider. A Cochrane review of 6 trials in 719 '
            + 'women found far fewer women still not in labor at 72 hours, 62.7% against 93.6%, '
            + 'and much less postpartum bleeding. It also recorded 3 baby deaths in the '
            + 'stimulation groups against none in the comparison groups, and the reviewers stated '
            + 'directly that it should not be used in high risk pregnancies until the safety '
            + 'questions are answered. Stimulation can also produce contractions that are too '
            + 'long or too close together for a baby to tolerate well. So: ask your midwife or '
            + 'doctor whether it is appropriate for you, and if they say yes, ask for how long, '
            + 'how often, and what should make you stop.',
        },
        {
          what: 'Evening primrose oil',
          detail: 'The research is genuinely mixed. A meta analysis of 16 randomized trials in 1,662 '
            + 'women found that evening primrose oil used vaginally was linked to better cervical '
            + 'ripening scores while the oral form was not, and both forms were associated with '
            + 'fewer cesareans. Then the same reviewers noted that 13 of those 16 trials were at '
            + 'high risk of bias and the results varied widely between studies, which is a large '
            + 'asterisk. On top of that, supplements are not regulated the way medication is, so '
            + 'the dose in the bottle is not guaranteed, and older reports raised questions about '
            + 'prolonged rupture of membranes and slower descent. This is a real ask your '
            + 'provider item, including about the vaginal route, which is not something to '
            + 'improvise.',
        },
        {
          what: 'Blue cohosh',
          detail: 'This is the one to genuinely skip. There are published case reports of serious '
            + 'harm to newborns after mothers took blue cohosh to bring on labor: a baby who had '
            + 'a heart attack, severe heart failure and shock and was critically ill for weeks, a '
            + 'baby who had a stroke and started seizing at 26 hours old, and a baby born not '
            + 'breathing who suffered severe organ damage from lack of oxygen and permanent brain '
            + 'injury. The plant contains vasoactive compounds and alkaloids that constrict blood '
            + 'vessels, which is the suspected mechanism. A 2008 safety review concluded it '
            + 'should only ever be used under medical supervision and should not be sold to the '
            + 'public over the counter. Please do not take this one, and if a tea or tincture '
            + 'lists it in the ingredients, put it down.',
        },
        {
          what: 'Black cohosh',
          detail: 'A different plant that is often sold alongside blue cohosh and sometimes confused '
            + 'with it, including in products that combine both. There is no good evidence that '
            + 'it starts labor, and there are reports of liver injury associated with it in '
            + 'general use. Given that it is frequently blended with blue cohosh in labor '
            + 'preparations, read ingredient lists carefully. If you are considering it, that is '
            + 'a conversation with your provider first.',
        },
        {
          what: 'Any other herbal induction blend or midwives brew',
          detail: 'This covers labor tinctures, induction teas, and the castor oil plus herbs '
            + 'mixtures that circulate online. The common problem is that you cannot know the '
            + 'actual dose or purity of what you are taking, and anything strong enough to cause '
            + 'contractions is strong enough to cause contractions that are too intense or too '
            + 'frequent for Bean to tolerate, with nobody monitoring either of you. If someone '
            + 'you trust recommended one, bring the exact bottle and ingredient list to your next '
            + 'appointment and ask. A midwife or doctor who knows your pregnancy can tell you '
            + 'whether it is reasonable for you, which no video can.',
        },
      ],
    },
  ],
  callNow: [
    'Bean is moving less than usual, or the pattern has changed, or you cannot feel movement. '
      + 'Call your midwife or maternity unit straight away, even if it is the middle of the '
      + 'night. Do not wait until morning, and do not wait to see whether cold water, sugar, or '
      + 'lying down brings the baby back.',
    'Any bleeding from your vagina, whether it is bright red, brown, light, or heavy.',
    'A gush or a steady trickle of fluid, or you think your waters may have broken, even if '
      + 'nothing else is happening. Note the time and the color and call.',
    'A bad headache that will not go away, especially with changes in your vision such as '
      + 'blurring, spots, flashing, or sensitivity to light. This can be preeclampsia and it is '
      + 'urgent.',
    'Pain high in your belly, usually under your ribs on the right side, with or without '
      + 'nausea and vomiting. This is another preeclampsia sign and it is easy to mistake for '
      + 'indigestion.',
    'Sudden swelling in your face or hands, or shortness of breath that is new.',
    'Regular painful contractions before 37 weeks.',
    'Constant belly pain that does not ease off between contractions, or your belly feels '
      + 'hard and tender all the time.',
    'A fever, or chills and feeling unwell.',
    'A fall, a car accident, or a hit to your belly, even a small one and even if you feel '
      + 'fine.',
    'A feeling that something is wrong that you cannot explain. You do not need to justify '
      + 'calling, and nobody will think you overreacted.',
  ],
  closing: [
    'Here is the short version of everything above. Eat the dates if you like dates, walk '
      + 'when you can, sit on the ball because it is comfortable, enjoy the pineapple, and ask '
      + 'your midwife or doctor before you take anything that could actually make your uterus '
      + 'contract. The rest of it, the curb walking and the circuits and the spicy dinner, is '
      + 'fine to try and fine to skip, and neither choice changes when Bean arrives. You are not '
      + 'behind, you have not missed a window, and there is nothing on this page you can fail at. '
      + 'Rest, eat, drink water, watch Bean\'s movements, and let your body get there.',
  ],
};

export const BUMP_SOURCES = [
  { org: 'March of Dimes',
    label: 'What is full term? The early term, full term, late term and postterm definitions from '
      + 'ACOG and SMFM',
    url: 'https://www.marchofdimes.org/find-support/topics/pregnancy/what-full-term' },
  { org: 'BMC Pregnancy and Childbirth',
    label: 'Dates in the peripartum period: systematic review and dose response meta analysis of 48 '
      + 'trials, 2024',
    url: 'https://link.springer.com/article/10.1186/s12884-023-06196-y' },
  { org: 'Journal of Midwifery and Reproductive Health',
    label: 'Randomized trial of date fruit from 37 weeks and cervical ripening in 210 first time mothers',
    url: 'https://jmrh.mums.ac.ir/article_2772.html' },
  { org: 'Journal of Obstetrics and Gynaecology',
    label: 'Al Kuran and colleagues, 2011: date fruit in the last 4 weeks and labor outcomes in 114 '
      + 'women (PDF)',
    url: 'https://beautyinthemargins.com/wp-content/uploads/2023/09/Al-kuran-2011-The-effect-of-late-pregnancy-consum.pdf' },
  { org: 'Cochrane',
    label: 'Antenatal perineal massage for reducing perineal trauma, 4 trials, 2,497 women',
    url: 'https://www.cochrane.org/evidence/CD005123_antenatal-perineal-massage-reducing-perineal-trauma' },
  { org: 'Cochrane',
    label: 'Membrane sweeping for induction of labour, 44 studies, 6,940 women',
    url: 'https://www.cochrane.org/evidence/CD000451_membrane-sweeping-induction-labour' },
  { org: 'Cochrane',
    label: 'Acupuncture or acupressure for induction of labour, 22 trials, 3,456 women',
    url: 'https://www.cochrane.org/evidence/CD002962_acupuncture-or-acupressure-induction-labour' },
  { org: 'Cochrane',
    label: 'Breast and nipple stimulation for cervical ripening and induction of labour, 6 trials, '
      + '719 women',
    url: 'https://www.cochrane.org/evidence/CD003392_breast-stimulation-cervical-ripening-and-induction-labour' },
  { org: 'Cochrane',
    label: 'Castor oil, bath and enema for cervical priming and induction of labour, 3 trials, 233 women',
    url: 'https://www.cochrane.org/evidence/CD003099_castor-oil-bath-andor-enema-cervical-priming-and-induction-labour' },
  { org: 'Cochrane',
    label: 'Sexual intercourse for cervical ripening and induction of labour, 1 trial, 28 women',
    url: 'https://www.cochrane.org/evidence/CD003093_sexual-intercourse-cervical-ripening-and-induction-labour' },
  { org: 'Cochrane',
    label: 'Maternal positions and mobility during the first stage of labour, 25 trials, 5,218 women',
    url: 'https://www.cochrane.org/evidence/CD003934_maternal-positions-and-mobility-during-first-stage-labour' },
  { org: 'BMC Complementary Medicine and Therapies',
    label: 'Raspberry leaf in pregnancy: systematic integrative review of 13 studies, 2021',
    url: 'https://link.springer.com/article/10.1186/s12906-021-03230-4' },
  { org: 'PLOS ONE',
    label: 'Physical exercise in pregnancy and delivery outcomes: meta analysis of 16 randomized '
      + 'trials, 3,387 women, 2025',
    url: 'https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0326868' },
  { org: 'Evidence Based Care Journal',
    label: 'Oral and vaginal evening primrose oil for cervical ripening: meta analysis of 16 trials, '
      + '1,662 women',
    url: 'https://ebcj.mums.ac.ir/article_27659.html' },
  { org: 'Journal of Population Therapeutics and Clinical Pharmacology',
    label: 'Safety and efficacy of blue cohosh in pregnancy and lactation, with the newborn case reports',
    url: 'https://jptcp.com/index.php/jptcp/article/view/192' },
  { org: 'NHS',
    label: 'Your baby\'s movements in pregnancy, and why not to wait until morning',
    url: 'https://www.nhs.uk/pregnancy/keeping-well/your-babys-movements/' },
  { org: 'NHS',
    label: 'Exercise in pregnancy, including the talk test and pelvic floor exercises',
    url: 'https://www.nhs.uk/pregnancy/keeping-well/exercise/' },
  { org: 'Mayo Clinic',
    label: 'Preeclampsia symptoms and when to seek immediate care',
    url: 'https://www.mayoclinic.org/diseases-conditions/preeclampsia/symptoms-causes/syc-20355745' },
  { org: 'NIH NICHD',
    label: 'Symptoms of preeclampsia, eclampsia and HELLP syndrome',
    url: 'https://www.nichd.nih.gov/health/topics/preeclampsia/conditioninfo/symptoms' },
];

/* Which band a given week falls in. Weeks past 41 stay on the last one
   rather than falling off the end. */
export function bumpBandFor(week) {
  if (typeof week !== 'number' || !isFinite(week)) return null;
  const hit = BUMP_BANDS.filter((b) => week >= b.weeks[0] && week <= b.weeks[1])[0];
  return hit || BUMP_BANDS[BUMP_BANDS.length - 1];
}

/* The labor list unlocks at 37 weeks, which is where she asked for it,
   and which is also where it stops being a thing anybody should be
   trying. Before then, the honest answer is that it is too early. */
export function bumpLaborShows(week) {
  return typeof week === 'number' && week >= 37;
}

/* 3 of the day's items, rotated by the day of the month so it is not
   the same 3 every morning of a 40 week pregnancy. */
export function bumpToday(week, dayNumber) {
  const band = bumpBandFor(week);
  if (!band || !band.items.length) return [];
  const n = Math.min(3, band.items.length);
  const start = (Number(dayNumber) || 0) % band.items.length;
  const out = [];
  for (let i = 0; i < n; i++) out.push(band.items[(start + i) % band.items.length]);
  return out;
}

/**
 * Ready Set Grow: Monitors, Thermometers, and What They Can Tell You
 * ------------------------------------------------------------------
 * She uses an Owlet. It calms her rather than worrying her, and she
 * still goes and checks on her son herself, because it is sometimes
 * wrong. That sentence is the page. Not the version that sells one,
 * and not the version that tells a frightened parent she is foolish
 * for wanting one.
 *
 * THE 3 THINGS THIS HAS TO GET RIGHT
 * 1. No home monitor has been shown to prevent SIDS, and none replaces
 *    safe sleep. That is said plainly and said early.
 * 2. Her actual question, whether insurance covers it, is answered
 *    with the real answer rather than a maybe. There are 2 different
 *    Owlet devices and only one of them is the one people mean.
 * 3. Button batteries. A swallowed one can burn through a child's
 *    esophagus in about 2 hours, and most families own several
 *    devices that take one without ever thinking about it.
 */


export const MON_TITLE = 'Baby monitors and thermometers, honestly';
export const MON_SUB =
  'What these devices can tell you, what they cannot, and the one battery in your house that '
    + 'is genuinely dangerous.';

export const MON_INTRO = [
  'Monitors are one of the few baby purchases where the honest answer has two halves. A '
    + 'wearable sock monitor can help a frightened parent sleep, and that is a real benefit, not '
    + 'a small one. It also cannot do the thing most parents are secretly buying it for, which is '
    + 'prevent SIDS, and it will sometimes tell you something alarming that turns out to be '
    + 'nothing at all. Both of those are true at the same time, and you deserve to hear both.',
  'This page is not here to talk you out of your monitor, or into one. It is here so you know '
    + 'what you are looking at when it alarms at 3am, which thermometer reading a doctor will '
    + 'actually act on at which age, and which small device in your house contains a battery that '
    + 'can injure a child in about 2 hours.',
];

export const MON_SECTIONS = [
  {
    h: 'What an Owlet Dream Sock actually is',
    body: [
      'The Owlet Dream Sock is an over the counter pulse oximeter for infants. It received '
        + 'FDA De Novo clearance and is described as the first and only over the counter medical '
        + 'grade pulse oximeter cleared for use in infants. It is intended for healthy babies '
        + 'roughly 1 to 18 months old and 6 to 30 pounds, and what it does is read oxygen '
        + 'saturation and pulse rate through the foot and notify you when a reading falls outside '
        + 'preset limits.',
      'So it is a genuine medical device with genuine clearance, which is a meaningful step '
        + 'up from the unregulated wellness gadgets that came before it. What it is not is a '
        + 'device that tells you your baby is safe. It reports 2 numbers. Numbers taken from a '
        + 'fabric sock on a moving foot, which becomes important in a minute when we get to false '
        + 'alarms.',
    ],
    list: [
      'It is a pulse oximeter. It is not a breathing monitor, and it is not a SIDS monitor.',
      'It is cleared for healthy infants, about 1 to 18 months and 6 to 30 pounds.',
      'It reads oxygen saturation and pulse rate, and alerts you when readings fall outside '
        + 'set ranges.',
      'It is not a diagnosis, and a reassuring reading is not a reason to skip a call to your '
        + 'pediatrician when your baby seems unwell.',
    ],
  },
  {
    h: 'Does insurance cover it? A straight answer',
    body: [
      'This question comes up constantly, so here it is directly. The Dream Sock does not '
        + 'qualify for insurance reimbursement. Owlet states it plainly in its own materials: the '
        + 'Dream Sock will not be covered by insurance, but it is HSA and FSA eligible. So you '
        + 'can pay for it with pretax dollars from a health savings account or a flexible '
        + 'spending account, and you cannot submit it to your insurer for reimbursement.',
      'There is a second Owlet device that gets confused with it constantly. The Owlet '
        + 'BabySat is a prescription pulse oximeter, for the same age and weight range, but used '
        + 'under medical supervision. Because it is a prescription device, Owlet says it may '
        + 'qualify for insurance reimbursement options. If your baby has a medical reason to be '
        + 'monitored at home, that is a conversation with your pediatrician, not a retail '
        + 'purchase.',
    ],
    list: [
      'Dream Sock: over the counter, does not qualify for insurance reimbursement, HSA and '
        + 'FSA eligible.',
      'BabySat: prescription, may qualify for insurance reimbursement, also HSA and FSA '
        + 'eligible.',
      'Keep your receipt either way. HSA and FSA administrators sometimes ask for '
        + 'documentation.',
      'If you want monitoring for a medical reason, ask your pediatrician about the '
        + 'prescription route before you pay out of pocket.',
    ],
  },
  {
    h: 'No home monitor has been shown to prevent SIDS',
    body: [
      'This is the part that matters most, and it is not a technicality. The American Academy '
        + 'of Pediatrics\' safe sleep recommendations include this one, worded almost exactly '
        + 'like this: do not use home cardiorespiratory monitors as a strategy to reduce the risk '
        + 'of SIDS.',
      'The AAP is not unkind about why parents buy them. Its own statement acknowledges that '
        + 'use of these monitors may give parents peace of mind, and notes there is no '
        + 'contraindication to using them, while saying that data are lacking that would support '
        + 'their use to reduce the risk of these deaths. It also raises a specific worry, that '
        + 'use of these monitors will lead to parent complacency and decreased adherence to safe '
        + 'sleep guidelines. Its parent facing page says the same thing more simply, that home '
        + 'monitors offer little or no protection from SIDS.',
      'So the monitor does not replace any part of safe sleep, and putting it on does not buy '
        + 'you room to relax any of it. Back to sleep every single time. A firm, flat sleep '
        + 'surface in a crib or bassinet that meets current standards. Nothing loose in it, no '
        + 'blankets, pillows, bumpers, or positioners. Room sharing without bed sharing. No '
        + 'smoking. Those are the things with evidence behind them. The sock is not one of them.',
    ],
    list: [
      'No home monitor, wearable or otherwise, has been shown to reduce the risk of SIDS.',
      'The AAP recommends against using home cardiorespiratory monitors as a SIDS risk '
        + 'reduction strategy.',
      'Safe sleep stays exactly as strict with a monitor as without one.',
      'If you notice yourself easing up on safe sleep because the monitor is on, that is the '
        + 'risk the AAP is describing. Take it as a signal, not a judgment.',
    ],
    warn: true,
  },
  {
    h: 'False alarms, and what they do to families',
    body: [
      'Wearable infant monitors alarm when nothing is wrong. This is documented, not '
        + 'anecdotal. A Children\'s Hospital of Philadelphia study of 2 consumer sock monitors '
        + 'found problems in both directions. One of them did detect low oxygen in every infant '
        + 'who had it, but also incorrectly showed normal oxygen at least once during low oxygen '
        + 'in 5 of those 12 babies. The other never detected low oxygen when it occurred, and '
        + 'falsely displayed a low heart rate in 14 babies whose pulse was actually normal.',
      'The consequence is not just a lost night. CHOP\'s researchers noted that these '
        + 'monitors often trigger unwarranted alarms that land families in the ER unnecessarily, '
        + 'and that false positive alarms could cause parents undue concern. The AAP\'s parent '
        + 'facing page on home monitors is blunter about the emotional cost. It says home '
        + 'monitors cause many false alarms, that the noise can make parents worry too much and '
        + 'lose sleep, and it cites research in which parents of monitored infants reported '
        + 'feeling more depressed than parents of infants who were not monitored.',
      'None of that makes you wrong for finding your monitor calming. Anxiety is not '
        + 'distributed evenly across parents, and neither is what soothes it. For some families '
        + 'the sock is the thing that finally lets them sleep, and a rested parent is good for '
        + 'the whole household. For others, every alarm rewinds the night to the beginning. Both '
        + 'are legitimate, and you are allowed to figure out which one you are without anybody '
        + 'making you feel foolish about it.',
    ],
    list: [
      'Expect false alarms. Decide in advance that an alarm means go look at the baby, not '
        + 'that something is wrong.',
      'Check the baby before the app. Look at her chest rising, her color, and how she is '
        + 'breathing, then look at the number.',
      'Check the fit. A loose sock, a cold foot, or a very active sleeper all produce bad '
        + 'readings.',
      'Have the conversation before you need it. CHOP\'s advice is to talk with your '
        + 'pediatrician up front about the monitor\'s limits and agree on a plan for what to do '
        + 'when it alarms in the middle of the night.',
      'If the monitor is making your anxiety worse instead of better, you are allowed to take '
        + 'it off. That is a reasonable outcome, not a failure.',
    ],
  },
  {
    h: 'The honest middle',
    body: [
      'Here is where this page lands, and it is where a lot of parents actually live. A '
        + 'monitor can be genuinely calming, and you can still walk in and put a hand on your '
        + 'baby\'s back, because you know the device is not perfect and you want to see her with '
        + 'your own eyes. That is not a contradiction. That is the most accurate possible '
        + 'relationship with a device that reports 2 numbers through a sock.',
      'The honest version sounds like this: it helps me sleep, it is sometimes wrong, and I '
        + 'still check on him myself. If that is you, you are not being irrational in either '
        + 'direction. Keep safe sleep just as strict as it would be with no monitor in the house, '
        + 'treat alarms as prompts to go look rather than verdicts, and let the peace of mind be '
        + 'what it honestly is, which is peace of mind, not protection.',
    ],
  },
  {
    h: 'Button batteries, the one to take seriously',
    body: [
      'If you skim everything else on this page, read this part. Coin cell and button '
        + 'batteries, the flat silver ones about the size of a nickel or a penny, cause '
        + 'catastrophic injuries when a child swallows one. The National Capital Poison Center '
        + 'states that batteries lodged in the esophagus may cause serious burns in as little as '
        + '2 hours. Its parent facing article puts it even more directly, that swallowed '
        + 'batteries burn through a child\'s esophagus in just 2 hours, leading to surgery, '
        + 'months with feeding and breathing tubes, and even death.',
      'The injury is not choking, and it is not acid leaking out. A lodged battery generates '
        + 'a current against wet tissue and chemically burns through the esophageal wall, and the '
        + 'damage keeps progressing even after the battery is removed. A child can look '
        + 'completely fine for the first hour or two.',
      'The reason this belongs on a page about monitors and thermometers is that these are '
        + 'exactly the devices the batteries are in. Ear and forehead thermometers, digital '
        + 'thermometers, remotes, bathroom scales, nightlights, singing greeting cards, key fobs, '
        + 'hearing aids, flameless candles, small toys, and electric toothbrushes commonly run on '
        + 'coin cells. If you have a Momcozy forehead and ear thermometer, or any non contact '
        + 'infrared thermometer, turn it over right now and look at how the battery door is held '
        + 'shut. Then do the same for every other small device within reach of your child. Most '
        + 'parents are surprised how many pop open with a fingernail.',
      'Poison Control singles out the larger ones for extra caution, saying to be especially '
        + 'cautious with any product that contains a battery as big as a penny or larger, and '
        + 'naming the CR2032, CR2025, and CR2016 lithium coin cells specifically.',
    ],
    list: [
      'Check the battery door on every device your child can reach. It should need a '
        + 'screwdriver, a coin, or a tool to open, or have a child resistant latch.',
      'Tape shut any compartment that opens easily, using strong tape, and re tape it after '
        + 'every battery change.',
      'Store spare batteries and used batteries out of sight and reach. Not in a drawer your '
        + 'toddler can open, and not on a nightstand.',
      'Put non conductive tape over the terminals of a used battery before you throw it away. '
        + 'A dead battery still holds enough charge to burn.',
      'Keep batteries away from pill bottles, and never store them near food or in a cup or '
        + 'glass.',
      'If a device that had a battery suddenly stops working, stop and find out where that '
        + 'battery went.',
    ],
    warn: true,
  },
  {
    h: 'If you think a button battery was swallowed',
    body: [
      'Treat it as an emergency right now, even if your child seems completely fine. Looking '
        + 'fine is normal in the first couple of hours, and the clock is short.',
      'Call the National Battery Ingestion Hotline at 1-800-498-8666. Then get to an '
        + 'emergency room. Tell them you suspect a button battery, using those words, so they '
        + 'know to x ray immediately, because where it sits in the esophagus is what determines '
        + 'how fast they have to act.',
      'There is one thing you can give on the way, and only for children 12 months and older. '
        + 'Honey coats the battery and slows the chemical burn. The National Capital Poison '
        + 'Center\'s guideline is 10 mL of honey, which is 2 teaspoons, by mouth every 10 '
        + 'minutes, up to 6 doses, when the battery was swallowed within the previous 12 hours. '
        + 'Do not give honey to a baby under 12 months, because of the risk of infant botulism, '
        + 'and do not delay leaving for the ER in order to hunt for honey. Going is more '
        + 'important than the honey.',
    ],
    list: [
      'Call 1-800-498-8666, the National Battery Ingestion Hotline, immediately, and head to '
        + 'an emergency room.',
      'Say the words button battery so the ER x rays right away.',
      'Do not try to make your child vomit.',
      'Do not give food or other drinks. The guideline is to keep the child with nothing by '
        + 'mouth until an x ray rules out a battery in the esophagus.',
      'Honey, 10 mL every 10 minutes up to 6 doses, only for children 12 months and older, '
        + 'only on the way, and never instead of going.',
      'Bring the device it came out of, or an identical battery, so the ER knows the size and '
        + 'type.',
    ],
    warn: true,
  },
  {
    h: 'Thermometers, which one at which age',
    body: [
      'This is genuinely confusing, and the confusion is not your fault, because the box on '
        + 'every one of them says accurate. The useful question is not which thermometer is best. '
        + 'It is which reading a doctor will act on for your child\'s age.',
      'For a baby under 3 months, rectal is the only reading that counts. That is the '
        + 'measurement the 100.4 degree threshold was built on, and it is the number the office '
        + 'will ask you for. The AAP says taking a rectal temperature gives the best reading, '
        + 'especially for infants under 3 months of age. It feels invasive, it is quick, and it '
        + 'is worth it, because a forehead reading that is off by a degree in either direction '
        + 'changes the entire decision at that age.',
      'Above 3 months you get more room. Temporal artery thermometers, the forehead ones, can '
        + 'be used at any age. Ear thermometers work from 6 months up, because younger babies '
        + 'have ear canals too narrow for an accurate reading. Armpit is the least accurate of '
        + 'all, but it is perfectly fine as a quick screen at any age. Oral becomes reliable '
        + 'around age 4, once a child can hold it under her tongue without chewing it.',
      'What forehead and ear readings are good for is screening and watching a trend. Is she '
        + 'hotter than she was an hour ago. Is this worth getting the rectal thermometer out. '
        + 'What they are not good for is a borderline decision in a young baby, where a tenth of '
        + 'a degree changes what happens next.',
    ],
    list: [
      'Under 3 months: rectal, and that is the number to report to the doctor.',
      'Forehead, meaning temporal artery: any age. Good for screening and trends, not for a '
        + 'newborn decision.',
      'Ear: 6 months and older. Earwax, a curved canal, and bad aim all skew the reading.',
      'Armpit: any age, least accurate, fine for a rough check.',
      'Oral: about age 4 and up. Wait 15 minutes after anything hot or cold to drink.',
      'Never use a mercury thermometer. The glass can break and release toxic mercury vapor.',
      'Forehead strips are not as good as a digital thermometer. Skip them.',
      'Use one thermometer and one method while you are tracking a fever, and tell the doctor '
        + 'which method you used. A forehead 101 and a rectal 101 are not the same information.',
    ],
  },
  {
    h: 'Video and audio monitors, and the cord',
    body: [
      'The camera is not the hazard. The cord is, and this is not a theoretical risk. The '
        + 'Consumer Product Safety Commission has documented infant strangulation deaths from '
        + 'baby monitor cords. A 2011 recall of corded video baby monitors followed 2 '
        + 'strangulation deaths, and CPSC later reported that the number of death reports had '
        + 'risen to 7. The agency\'s instruction is direct: parents and caregivers should never '
        + 'place these and other corded cameras within 3 feet of a crib.',
      'The 3 foot rule is essentially the whole rule, and it applies to everything with a '
        + 'cord, not only the monitor. Lamps, sound machines, humidifiers, phone chargers, and '
        + 'window blind cords all count. A baby who can pull to stand reaches much further than '
        + 'you expect, and a cord that was safely out of range at 4 months is not safely out of '
        + 'range at 9 months. Walk the room again each time she gains a new skill.',
    ],
    list: [
      'Keep the monitor and its cord at least 3 feet from the crib, and from anywhere else '
        + 'your child sleeps or plays.',
      'Mount the camera on a wall or a shelf and run the cord along the wall, secured, rather '
        + 'than draped or dangling.',
      'Never put the monitor or its cord inside the crib, clipped to the rail, or resting on '
        + 'the crib itself.',
      'Apply the same 3 feet to lamp cords, sound machines, humidifiers, chargers, and blind '
        + 'cords.',
      'Recheck the room whenever your child starts rolling, sitting, pulling up, or climbing.',
      'A monitor is a tool for hearing and seeing her, not a safety device. It does not '
        + 'change anything about how the sleep space itself needs to be set up.',
    ],
    warn: true,
  },
];

export const MON_SOURCES = [
  { org: 'AAP',
    label: 'How to Keep Your Sleeping Baby Safe, AAP safe sleep policy explained, including home '
      + 'cardiorespiratory monitors',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx' },
  { org: 'AAP',
    label: 'The Truth About Home Apnea Monitors for SIDS, including false alarms and effects on parents',
    url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Home-Apnea-Monitors-for-SIDs.aspx' },
  { org: 'AAP',
    label: 'Sleep Related Infant Deaths, Updated 2022 Recommendations, policy statement PDF',
    url: 'https://bpb-us-w2.wpmucdn.com/sites.uab.edu/dist/f/430/files/2025/09/AAP-2022-Safe-Sleep-Recommendations.pdf' },
  { org: 'AAP',
    label: 'How to Take Your Child\'s Temperature, thermometer type by age',
    url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/How-to-Take-a-Childs-Temperature.aspx' },
  { org: 'CHOP',
    label: 'Do Vital Sign Baby Monitors Work? Research Says, Beware',
    url: 'https://www.chop.edu/news/health-tip/do-vital-sign-baby-monitors-work-research-says-beware' },
  { org: 'CHOP',
    label: 'Study release, two consumer baby monitors show worrisome results in measuring vital signs',
    url: 'https://www.sciencedaily.com/releases/2018/08/180821145211.htm' },
  { org: 'Owlet',
    label: 'Get to Know FDA Cleared Dream Sock and BabySat, including insurance and HSA or FSA '
      + 'eligibility',
    url: 'https://owletcare.com/blogs/all/fda-cleared-dream-sock-vs-babysat' },
  { org: 'Owlet',
    label: 'Frequently Asked Questions about FDA Cleared Dream Sock',
    url: 'https://owletcare.com/blogs/all/frequently-asked-questions-about-fda-cleared-dream-sock' },
  { org: 'Contemporary Pediatrics',
    label: 'FDA grants De Novo clearance to Owlet\'s Dream Sock',
    url: 'https://www.contemporarypediatrics.com/view/fda-grants-de-novo-clearance-to-owlet-s-dream-sock' },
  { org: 'National Capital Poison Center',
    label: 'Button battery ingestion triage and treatment guideline, including the hotline number '
      + 'and honey guidance',
    url: 'https://www.poison.org/battery/guideline' },
  { org: 'National Capital Poison Center',
    label: 'Button batteries cause devastating injuries',
    url: 'https://www.poison.org/articles/button-batteries' },
  { org: 'National Capital Poison Center',
    label: 'Button battery safety, prevention tips for the home',
    url: 'https://www.poison.org/battery/tips' },
  { org: 'CPSC',
    label: 'Button Cell and Coin Battery Information Center',
    url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Button-Cell-Coin-Battery-Information-Center' },
  { org: 'CPSC',
    label: 'Strangulation deaths prompt recall of video baby monitors with cords, and the 3 feet rule',
    url: 'https://www.cpsc.gov/Recalls/2011/two-strangulation-deaths-prompt-summer-infant-to-recall-video-baby-monitors-with-cords' },
];

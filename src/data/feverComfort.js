/**
 * Ready Set Grow: Comfort Care For A Fever
 * ------------------------------------------------------------------
 * The app already tells a parent when to call and when to go. What it
 * did not tell them is what to actually DO in the hours in between,
 * which is most of what a fever is.
 *
 * SHE NAMED WHAT SHE WANTED IN IT: a lukewarm bath, damp cloths at the
 * head, neck and groin, 1 light layer and a sheet rather than a
 * comforter. Current guidance is cooler on sponging than it used to
 * be, so rather than contradict her, the page keeps those as comfort
 * rather than as treatment. Fine if the water is warm and she likes
 * it, stop the moment there is shivering, never cold, never alcohol.
 *
 * THE LINE IT HOLDS THROUGHOUT: the goal is a comfortable child, not a
 * normal thermometer reading. A child drinking and alert between the
 * bad patches at 102 is in better shape than a listless one at 100.
 *
 * NO DOSES. Not one, anywhere. Acetaminophen and ibuprofen are dosed
 * by weight, and that number comes from the pediatrician or the
 * package, never from an app.
 */


export const FC_TITLE = 'Comfort care for a fever';

export const FC_INTRO = [
  'Your app already tells you when a fever means calling the doctor and when it means going '
    + 'in. This page is about the other hours, the ones after you have decided you are waiting it '
    + 'out at home, when you just want to know what you can actually do for your child right now.',
  'Almost none of it is dramatic. A lukewarm bath if she likes the water, a damp cloth on her '
    + 'forehead, one light layer instead of three, and something to drink every time she will '
    + 'take it. The care that helps most is the care that makes a miserable child feel a little '
    + 'less miserable, and that is a much lower bar than getting a thermometer back to 98.6.',
];

export const FC_GENERAL = [
  {
    h: 'The goal is comfort, not a normal thermometer reading',
    body: [
      'The American Academy of Pediatrics puts this plainly in its guidance for doctors: '
        + 'improving the comfort of the child should be the primary goal, ahead of lowering body '
        + 'temperature. Bringing a fever down has not been shown to make children recover faster '
        + 'or to reduce complications.',
      'So the question to ask yourself at 2am is not what the number is, it is how she is '
        + 'doing. A child who is taking sips, who perks up a little between the bad stretches, '
        + 'and who is breathing comfortably at 102 is in better shape than a child who is limp, '
        + 'refusing everything and hard to wake at 100. The second child needs a call even though '
        + 'the number looks friendlier.',
    ],
    list: [
      'Is she drinking, even small amounts, and still wetting diapers or using the bathroom?',
      'Does she brighten at all when the medicine kicks in, or when you pick her up?',
      'Is her breathing easy and quiet, not fast, not grunting, not pulling in at the ribs?',
      'Is her color normal, not pale, blotchy, or bluish?',
      'Can you wake her, and does she stay awake once you do?',
    ],
  },
  {
    h: 'Baths and damp cloths, and what has changed',
    body: [
      'This is the part where the advice has genuinely shifted, so if your mother told you to '
        + 'sponge a fever down, she was told that in good faith. The guidance moved. The AAP now '
        + 'says that practices such as an alcohol bath, ice packs, and sponging are no longer '
        + 'recommended and can actually have adverse effects for your child. The NHS tells '
        + 'parents not to sponge a child down to cool them, because a high temperature is a '
        + 'natural and healthy response to infection. The UK guideline for children under 5 says '
        + 'it in one line: tepid sponging is not recommended for the treatment of fever.',
      'The reason is mechanical. Cooling the skin does not change the temperature your '
        + 'child\'s brain is currently aiming for, so the body reads cold skin as a problem and '
        + 'shivers to make more heat. Shivering can push the temperature up rather than down, and '
        + 'it feels awful while it happens. One NHS page says exactly that: avoid tepid sponging, '
        + 'it does not actually reduce your child\'s temperature and may cause your child to '
        + 'shiver.',
      'None of that means water is forbidden. A lukewarm bath because your child loves the '
        + 'tub and it settles her is comfort care, and comfort care is the entire point of this '
        + 'page. Treat it as a bath, not as a treatment. The same goes for a cool damp cloth at '
        + 'the forehead, the back of the neck, or the groin. If it feels good to her, it is doing '
        + 'its job. If she fights it, it is not.',
    ],
    list: [
      'Lukewarm only, roughly 85 to 90 degrees, which will feel barely warm on your wrist.',
      'Never cold water, never an ice bath, never ice packs against the skin.',
      'Never rubbing alcohol, and never alcohol of any kind in the water or on the skin. It '
        + 'absorbs through the skin and can poison a child.',
      'Stop and lift her out if she shivers, her teeth chatter, her skin goes goosebumpy, or '
        + 'she starts crying and fighting it. Shivering means it has turned into work against '
        + 'you.',
      'A damp cloth at the head, neck, or groin is fine for the same reason a cool cloth '
        + 'feels good on your own forehead. It is a comfort, not a treatment, and you do not need '
        + 'to keep it there if she hates it.',
      'Never leave a baby or young child alone in the bath for a second, no matter how sick '
        + 'and still she seems.',
    ],
  },
  {
    h: 'One light layer, and why bundling backfires',
    body: [
      'The AAP\'s advice on dressing a feverish child is short: do not overdress your child, '
        + 'a single layer of clothing is good. The NHS says the same thing from the other '
        + 'direction, do not cover them up in too many clothes or bedclothes. The UK guideline '
        + 'words it as not underdressed and not over wrapped, which is a useful way to hold it, '
        + 'because stripping her down is not the answer either.',
      'Bundling traps the heat the body is trying to shed, so the temperature climbs. Babies '
        + 'are hit hardest, because they have a lot of surface area and very little ability to '
        + 'sweat their way out of a pile of blankets. If your child is shivering during the '
        + 'rising phase of a fever, a thin blanket such as a sheet is enough, and you can take it '
        + 'off once the shivering passes.',
      'And you do not need to chase the number down. Fever is the immune system running a '
        + 'strategy, not the illness itself. If she is comfortable at 101.5, you are finished. '
        + 'You have not failed to treat something.',
    ],
    list: [
      'One light layer, such as a onesie, or a soft shirt and light pants.',
      'A thin blanket such as a sheet, not a comforter, and not a sleep sack plus a quilt.',
      'Keep the room comfortably cool rather than cold. A fan moving air across the room is '
        + 'fine as long as it is not blowing straight onto her.',
      'For babies under 12 months, safe sleep still applies. Nothing loose in the crib. '
        + 'Adjust the room temperature and her one layer instead of adding bedding.',
      'Socks off, hat off. Heat leaves through the head and feet, and a hat on a feverish '
        + 'baby works against you.',
    ],
  },
  {
    h: 'Fluids, which matter more than the number',
    body: [
      'Dehydration is the thing that actually lands children in the ER during an ordinary '
        + 'fever, not the temperature. A fever raises fluid losses through faster breathing and '
        + 'sweating, and sick children drink less at exactly the moment they need more. This is '
        + 'the one job worth being a little stubborn about.',
      'Small and constant beats large and occasional. A syringe or a spoon of fluid every few '
        + 'minutes gets more into a child than a full cup she refuses. Cold fluids often go down '
        + 'easier, and so do things that do not feel like drinking, such as ice chips, a '
        + 'popsicle, or watery fruit.',
    ],
    list: [
      'Under 6 months: breast milk or formula only. No water and no juice. Offer the breast '
        + 'or bottle more often than usual, even if each feed is short. Frequent small feeds are '
        + 'normal when a baby is sick.',
      '6 to 12 months: breast milk or formula stays the main fluid, offered more often. Small '
        + 'amounts of water are fine now. Ask your pediatrician before giving an oral rehydration '
        + 'solution to a baby this young.',
      '12 months and up: water, milk, and oral rehydration solution are all reasonable. Go '
        + 'easy on juice, and skip soda and sports drinks, which can make loose stools worse.',
      'Aim to offer something every 15 to 30 minutes while she is awake, in whatever amount '
        + 'she will take.',
      'The signal you are actually watching is urine. The AAP lists fewer than 6 wet diapers '
        + 'a day in an infant as a sign of dehydration, along with a parched dry mouth, fewer '
        + 'tears when crying, a sunken soft spot, and playing less than usual.',
      'Urinating only 1 or 2 times a day, sunken eyes, cool or discolored hands and feet, '
        + 'wrinkled skin, or being excessively sleepy are signs of severe dehydration. Those are '
        + 'reasons to call right away, whatever the temperature is.',
    ],
  },
  {
    h: 'Watch your child, not the display',
    body: [
      'Fevers come in waves. She will feel hot and wretched, then the medicine works or the '
        + 'wave passes and she asks for a snack, then two hours later she is hot again. That '
        + 'pattern is normal and it is not a sign the illness is getting worse. Judge her on the '
        + 'good patches as much as the bad ones.',
      'What you are looking for is the trend in how she acts, not the trend in degrees. A '
        + 'child who is a little less playful each day for 3 days is telling you something. A '
        + 'child whose temperature bounces between 100 and 103 while she keeps drinking and keeps '
        + 'interacting is telling you something much less worrying.',
    ],
    list: [
      'Take a temperature when you need the information, not on a schedule. Checking every 30 '
        + 'minutes gives you anxiety, not data.',
      'Never wake a sleeping child to take a temperature or give medicine. Sleep is doing '
        + 'more for her than the reading will do for you.',
      'Use the same thermometer and the same method while you are tracking a fever, and tell '
        + 'the doctor which method you used. A forehead 101 and a rectal 101 are not the same '
        + 'information.',
      'Write down what you gave and when. At 3am you will not remember, and the office will '
        + 'ask.',
    ],
  },
  {
    h: 'About fever medicine, and what this page will not give you',
    body: [
      'There are no doses on this page, on purpose. Acetaminophen and ibuprofen for children '
        + 'are dosed by your child\'s current weight, not her age, and the difference between a '
        + '22 pound 1 year old and a 32 pound 1 year old is a real difference in milliliters. The '
        + 'number has to come from your pediatrician\'s office, or from the dosing chart on the '
        + 'package that matches the exact concentration in the bottle in your hand.',
      'Medicine is for distress, not for the number. The UK guideline frames it as '
        + 'considering paracetamol, which is the same drug as acetaminophen, or ibuprofen in '
        + 'children who appear distressed, and not using them with the sole aim of reducing body '
        + 'temperature. If your child is playing and drinking at 102, you are allowed to skip a '
        + 'dose. Neither drug prevents febrile seizures, so that is not a reason to give one '
        + 'either.',
    ],
    list: [
      'Get the dose from your pediatrician, or from the package instructions for your '
        + 'specific bottle, based on weight.',
      'Check the concentration every time you open a new bottle, and use the syringe or cup '
        + 'that came with it rather than a kitchen spoon.',
      'Ibuprofen is not for babies under 6 months. Below that age it is acetaminophen only, '
        + 'and for a baby under 3 months, nothing at all without talking to the doctor first.',
      'Never give aspirin, or any medicine containing aspirin, to a child or teenager. '
        + 'Aspirin during a viral illness is linked to Reye syndrome, a rare but severe illness '
        + 'affecting the liver and brain. The AAP strongly recommends against aspirin for '
        + 'children and teens with any viral illness, and the NHS says not to give aspirin under '
        + '16 years of age. Check combination cold and flu products, since some contain '
        + 'salicylate.',
      'Ask your pediatrician before alternating the two medicines. It is sometimes advised '
        + 'and sometimes not, and alternating is where dosing mistakes happen most often.',
      'Store both out of reach and use a child resistant cap. Acetaminophen overdose is one '
        + 'of the most common serious poisonings in young children.',
    ],
  },
  {
    h: 'Fever phobia, said kindly',
    body: [
      'There is a name for what you are feeling. Pediatricians call it fever phobia. It was '
        + 'described in the medical literature in the 1980s and studied again decades later, '
        + 'because it never went away. It is the widespread belief that the fever itself is the '
        + 'danger, that a high number causes brain damage, and that a parent\'s job is to get the '
        + 'temperature down.',
      'What the evidence supports is gentler than that. Fever is a coordinated immune '
        + 'response. Raising the body\'s temperature makes it harder for many viruses and '
        + 'bacteria to reproduce, and it helps immune cells do their work. The summary of the '
        + 'AAP\'s clinical report puts it this way: fevers in children generally do not last '
        + 'long, are benign, and can actually protect the child, and evidence does not suggest '
        + 'that lowering a fever reduces harm.',
      'The illness can be serious. The fever is your child\'s body responding to it. Those '
        + 'are two different things, and that distinction is the reason this page keeps turning '
        + 'you back toward how she looks instead of what the thermometer says. How she looks is '
        + 'simply the better information.',
    ],
  },
];

/* By age, because comfort care for a 2 month old and a 6 year old are
   not the same thing, and the calling threshold is not either. */
export const FC_BANDS = [
  {
    id: 'under3',
    label: 'Under 3 months',
    minMonths: 0, maxMonths: 3,
    lines: [
      'This is the one age where the number by itself is the answer. Any rectal temperature '
        + 'of 100.4 degrees or higher in a baby under 3 months means calling your pediatrician or '
        + 'the after hours line right away, day or night, even if she looks completely fine '
        + 'otherwise. A newborn\'s immune system cannot yet contain an infection the way an older '
        + 'child\'s can, so the visit is to find out what is causing the fever, not to bring it '
        + 'down.',
      'Which makes comfort care here short, and it mostly happens while you are on the phone '
        + 'or on your way in. Take a rectal temperature, because that is the only measurement '
        + 'this age is judged on. Keep her in one light layer. Feed her as often as she will take '
        + 'it, breast or bottle. Hold her, because being held is close to the whole toolkit at '
        + 'this age.',
      'Do not give any fever medicine, not acetaminophen and not ibuprofen, unless the doctor '
        + 'tells you to. Medicine can hide the one sign they are asking you about. Skip the bath '
        + 'entirely until you have talked to someone.',
    ],
    list: [
      'Call now for 100.4 degrees or higher rectally, at any hour, with or without other '
        + 'symptoms.',
      'Call now also for a temperature below 97.7 degrees, or for a baby who is hard to wake, '
        + 'feeding poorly, breathing fast, or looks mottled or gray.',
      'Rectal thermometer only for a number you can act on. Forehead and armpit readings are '
        + 'not reliable enough to make this decision.',
      'One light layer, frequent feeds, skin to skin contact and holding.',
      'No medicine and no bath without the doctor saying so.',
    ],
  },
  {
    id: 'threeToSix',
    label: '3 to 6 months',
    minMonths: 3, maxMonths: 6,
    lines: [
      'Fever is still taken seriously here, just not quite as absolutely. Call your '
        + 'pediatrician for any fever in this age range, and call right away for 102 degrees or '
        + 'higher, or for a baby who seems off in any way you cannot explain. The UK guideline '
        + 'places babies 3 to 6 months old with a temperature of 39 Celsius, about 102.2 degrees, '
        + 'in at least an intermediate risk group, which is a clinical way of saying this one '
        + 'deserves eyes on her.',
      'Comfort care at this age is mostly layers and feeding. One light layer, a thin blanket '
        + 'such as a sheet only while she is shivering, and a cool damp cloth on her forehead or '
        + 'the back of her neck if she settles under it rather than squirming away. Feeds often '
        + 'get shorter and more frequent when babies are sick. That is fine. Take whatever she '
        + 'will take.',
      'Ibuprofen is still off the table until 6 months. Acetaminophen may be appropriate '
        + 'here, and the dose comes from your pediatrician, based on her current weight.',
    ],
    list: [
      'Call for any fever in this age range. Call right away for 102 degrees or higher, or a '
        + 'fever with poor feeding, unusual sleepiness, inconsolable crying, or a rash.',
      'Rectal is still the most reliable reading at this age.',
      'One light layer, thin blanket only while she is shivering, room comfortably cool.',
      'Offer breast or bottle more often than usual. Still no water and no juice before 6 '
        + 'months.',
      'No ibuprofen before 6 months. Acetaminophen dosed by weight, from your pediatrician.',
    ],
  },
  {
    id: 'sixToTwo',
    label: '6 to 24 months',
    minMonths: 6, maxMonths: 24,
    lines: [
      'This is the band where fever becomes routine. Daycare years, first big run of viruses, '
        + 'several fevers a season. A number on its own tells you less now than how she is acting '
        + 'does. Call if the fever lasts more than 24 hours with no other symptoms you can point '
        + 'at, if it goes above 104 degrees, if she shows signs of dehydration, or any time she '
        + 'seems genuinely unwell rather than just sick.',
      'Comfort care gets more options because she is bigger and has opinions. A lukewarm bath '
        + 'is a reasonable thing to offer now if she likes the tub, and a lot of toddlers do. A '
        + 'damp cloth on the forehead, the back of the neck, or the groin between splashes feels '
        + 'good to some kids and not at all to others, so follow her lead. One light layer, and a '
        + 'sheet instead of a comforter for naps and nights.',
      'Fluids are the real work at this age, because a toddler with a fever will often close '
        + 'her mouth on principle. Popsicles, ice chips, watered down milk, a straw, a cup she '
        + 'thinks is special, and a sip offered every 15 minutes all count. Both acetaminophen '
        + 'and ibuprofen are options now, dosed by weight.',
    ],
    list: [
      'Call if the fever runs more than 24 hours with no clear cause, tops 104 degrees, or '
        + 'comes with dehydration, a stiff neck, a rash that does not fade when you press on it, '
        + 'trouble breathing, or a seizure.',
      'Ear thermometers become usable at 6 months and up. Forehead and armpit are fine for a '
        + 'quick check.',
      'A lukewarm bath is fine as comfort if she enjoys it. End it the moment she shivers.',
      'One light layer, a sheet rather than a heavy blanket, and nothing loose in the crib '
        + 'before 12 months.',
      'Fluids in tiny frequent amounts, and watch wet diapers rather than the thermometer.',
      'A febrile seizure is terrifying to watch and usually brief and harmless. Put her on '
        + 'her side on the floor away from furniture, do not put anything in her mouth, time it, '
        + 'and call. Call 911 if it lasts more than 5 minutes or if it is her first one.',
    ],
  },
  {
    id: 'twoToFive',
    label: '2 to 5 years',
    minMonths: 24, maxMonths: 60,
    lines: [
      'Preschoolers can tell you something about how they feel, which is genuinely useful, '
        + 'and they will also tell you they feel terrible when they want to stay on the couch, '
        + 'which is fine too. The threshold shifts toward duration and behavior. Call if the '
        + 'fever runs more than 3 days, if it goes above 104 degrees, if she is not drinking, or '
        + 'if she is much less herself than the number seems to warrant.',
      'Comfort care can now include her preferences, and that is worth using. Ask whether she '
        + 'wants a bath, a cool cloth, socks off, the fan on, a lighter blanket, the lamp left '
        + 'on. Letting a sick 4 year old have some say in her own comfort helps more than the '
        + 'specific choice she makes.',
      'Rest does not have to mean sleep or bed. Quiet is enough. Books and screens on the '
        + 'couch, a nest of thin blankets in the living room where you can see her. Appetite '
        + 'drops during fevers and that is expected. Fluids matter, food can wait a day or two.',
    ],
    list: [
      'Call if the fever lasts more than 3 days, goes above 104 degrees, she will not drink, '
        + 'she is difficult to wake, or she has a stiff neck, a rash that does not fade when '
        + 'pressed, or trouble breathing.',
      'Oral readings become reliable around age 4, once she can hold the thermometer under '
        + 'her tongue. Forehead is fine before that.',
      'Let her choose her own comfort measures, including whether she wants a lukewarm bath '
        + 'at all.',
      'One light layer, a thin blanket, a cool room, and let her kick the covers off.',
      'Something to drink every 15 to 30 minutes in whatever form she will accept. Skip soda '
        + 'and sports drinks.',
    ],
  },
  {
    id: 'fiveUp',
    label: '5 years and up',
    minMonths: 60, maxMonths: null,
    lines: [
      'School age children handle fevers well, and mostly they need fluids, rest, and to be '
        + 'left alone about the thermometer. The same thresholds apply. Call if the fever lasts '
        + 'more than 3 days, if it goes above 104 degrees, or if she seems much sicker than the '
        + 'number suggests. Call sooner for a fever that goes away for a day or more and then '
        + 'comes back, or a fever with a severe headache, a stiff neck, chest pain, or trouble '
        + 'breathing.',
      'Comfort care at this age is largely handing her the controls. A lukewarm shower if she '
        + 'wants one, a cool cloth, a lighter blanket, her own water bottle within reach so she '
        + 'can drink without asking anyone. She can tell you when the medicine has worn off, '
        + 'which is more accurate than watching the clock.',
      'Keep her home until she has been fever free for 24 hours without medicine and feels '
        + 'well enough to take part in a normal day. That is the AAP\'s standard for going back, '
        + 'and it spares the rest of the class as well.',
    ],
    list: [
      'Call if the fever lasts more than 3 days, tops 104 degrees, returns after a full day '
        + 'without fever, or comes with a severe headache, stiff neck, chest pain, trouble '
        + 'breathing, or repeated vomiting.',
      'Oral readings are reliable at this age. Wait 15 minutes after anything hot or cold to '
        + 'drink.',
      'Her own water bottle in reach, refilled often, is the single most useful thing you can '
        + 'set up.',
      'A lukewarm shower or bath if she asks for one. Nothing cold.',
      'Fever free for 24 hours without medicine before school, and well enough for a normal '
        + 'day.',
    ],
  },
];

export const FC_NEVER = [
  'Never sponge or bathe a child in cold or ice water, and never put ice packs against the '
    + 'skin. It causes shivering, which raises the temperature and makes her feel worse.',
  'Never put rubbing alcohol, or alcohol of any kind, on a child\'s skin or in bath water. It '
    + 'absorbs through the skin and can cause poisoning and coma.',
  'Never bundle a feverish child in heavy blankets or extra layers to sweat it out. Trapped '
    + 'heat drives the temperature up.',
  'Never give aspirin, or any medicine containing aspirin, to a child or teenager, because of '
    + 'the link to Reye syndrome during viral illness.',
  'Never give ibuprofen to a baby under 6 months.',
  'Never give any fever medicine to a baby under 3 months without talking to the doctor first.',
  'Never dose by age off the box if you know your child\'s weight. Weight is what the dose is '
    + 'built on.',
  'Never give a second dose early because the first one did not bring the number down enough. '
    + 'The number is not the target.',
  'Never wake a sleeping child just to medicate her or take a temperature.',
  'Never use a mercury thermometer. They can break and release toxic mercury vapor. Your '
    + 'health department or pharmacy can tell you how to dispose of one.',
  'Never treat the thermometer instead of the child. If she is comfortable, you are done, '
    + 'whatever the display says.',
];

export const FC_REASSURE = [
  'If you are reading this at 2am with a hot, cranky child on your chest, here is the short '
    + 'version. Fever is not the enemy. It is her body doing exactly what it is built to do. The '
    + 'number does not tell you how sick she is, and a high number is not by itself a reason to '
    + 'panic.',
  'Your job tonight is smaller than it feels. Keep her comfortable, keep something going into '
    + 'her, and keep looking at her rather than at the display. One light layer, a sip whenever '
    + 'she will take one, medicine if she is miserable and you have the right dose, and a cool '
    + 'cloth if she likes it. That is the whole list, and you are probably already doing most of '
    + 'it.',
  'And if something feels wrong in a way this page does not cover, call. You do not need a '
    + 'number high enough to justify it. Pediatric offices keep after hours lines for exactly '
    + 'this, and nobody on the other end thinks you are overreacting. You know your child\'s '
    + 'normal better than anyone does, and noticing that she is off it is real information, not '
    + 'nerves.',
];

export const FC_SOURCES = [
  { org: 'AAP',
    label: 'Fever Without Fear: Information for Parents',
    url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-Without-Fear.aspx' },
  { org: 'AAP',
    label: 'Treating Your Child\'s Fever: FAQs for Parents',
    url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Medications-Used-to-Treat-Fever.aspx' },
  { org: 'AAP',
    label: 'Fever symptom guide, including lukewarm sponging and one layer of clothing',
    url: 'https://www.healthychildren.org/English/tips-tools/symptom-checker/Pages/symptomviewer.aspx?symptom=Fever' },
  { org: 'AAP',
    label: 'Signs of Dehydration in Infants and Children',
    url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/dehydration.aspx' },
  { org: 'AAP',
    label: 'Reye Syndrome, and why aspirin is not given to children',
    url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Reye-Syndrome.aspx' },
  { org: 'AAP',
    label: 'How to Take Your Child\'s Temperature, by age and method',
    url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/How-to-Take-a-Childs-Temperature.aspx' },
  { org: 'AAFP',
    label: 'Summary of the AAP clinical report Fever and Antipyretic Use in Children, comfort as the '
      + 'primary goal',
    url: 'https://www.aafp.org/pubs/afp/issues/2012/0301/p518.html' },
  { org: 'NHS',
    label: 'Fever in children, including do not sponge them down and no aspirin under 16',
    url: 'https://www.nhs.uk/conditions/fever-in-children/' },
  { org: 'NHS',
    label: 'Fever and high temperature in children under 5, including avoid tepid sponging',
    url: 'https://www.healthiertogether.nhs.uk/child-under-5-years/fever' },
  { org: 'NICE',
    label: 'Fever in under 5s, assessment and initial management, guideline NG143 hosted at NCBI '
      + 'Bookshelf',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK552086/' },
  { org: 'Seattle Children\'s',
    label: 'Fever, 0 to 12 months, including avoid bundling and no rubbing alcohol',
    url: 'https://www.seattlechildrens.org/conditions/a-z/fever-0-12-months/' },
];

export function fcBandFor(months) {
  if (typeof months !== 'number') return FC_BANDS[2];
  const hit = FC_BANDS.filter((b) => months >= b.minMonths
    && (b.maxMonths === null || months < b.maxMonths))[0];
  return hit || FC_BANDS[FC_BANDS.length - 1];
}

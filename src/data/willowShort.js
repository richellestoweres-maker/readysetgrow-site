/**
 * Ready Set Grow: Willow's Short Version
 * ------------------------------------------------------------------
 * She said the long pages read like a textbook. So every long reading
 * tab now opens on Willow saying the few things that matter, with the
 * full detail one tap away under "Read the full details" for anybody
 * who wants it. Nothing was removed. The long version is exactly what
 * it was, it is simply folded away until someone asks for it.
 *
 * Keys are "screen:tab", or just "screen" for pages with no tabs.
 * tool: true means the tab is something you use (a chart, a tracker,
 *       a list of choices), so the summary sits on top and nothing is
 *       folded away.
 * ages: [min, max] in months. The summary only shows for a child in
 *       that range, because the page underneath changes with age.
 *
 * Every line here was written from the tab it sits on. If a tab
 * changes, change its summary too.
 */

export const SHORT_READ_MORE = 'Read the full details';
export const SHORT_READ_LESS = 'Show the short version';
export const SHORT_EYEBROW = "Willow's short version";
export const SHORT_SETTING = 'Always show the full details';
export const SHORT_SETTING_HELP = "For the curious. Every page opens with everything showing, and Willow's short version stays on top.";

export const WILLOW_SHORT = {
  "birth:yours": {
    "say": "Nothing here tells you what to choose. Pick the few things you truly care about, then talk them through with your midwife or doctor, because that conversation is what helps.",
    "points": [
      "Continuous monitoring really does raise cesareans, by about 63 percent. In the trials, epidurals and breaking the waters did not.",
      "Having somebody with you the whole time is the best evidenced thing here, with cesareans down about 25 percent.",
      "Fill in the cesarean preference even if you're sure you won't need it. Saying what you'd want makes a surprise less of a shock.",
      "You can accept or decline care, change your mind, even stop an induction. If you're mistreated, it's not normal and not your fault."
    ],
    "tool": true
  },
  "birth:who": {
    "say": "The person beside you matters more than most people realize. Somebody who stays with you the whole way through changes outcomes more reliably than many medical decisions.",
    "points": [
      "Continuous support in 24 trials: cesareans down about a quarter, and negative feelings about the birth down about a third.",
      "A doula had the biggest effect on cesareans. Your partner, mom or friend did as well or better for how you felt afterward.",
      "First baby: midwife units matched the hospital for baby outcomes with fewer interventions. Planned home birth had about 4 more serious problems per 1,000.",
      "Planning a home birth in the US? Ask about the transfer plan, how far the hospital is, and whether your midwife works with it."
    ],
    "tool": false
  },
  "birth:pain": {
    "say": "There's no right answer on pain relief. How you feel about your birth later depends more on support, being involved in decisions, and expectations than on which method you chose.",
    "points": [
      "The epidural is the most effective option and didn't raise cesareans in 33 trials. You don't have to hold out until 4 centimeters.",
      "Epidurals can bring fever, low blood pressure and a longer labor, and about 1 in 8 women need something else for enough relief.",
      "Without medicine, staying upright and moving, being in water, and massage all have some evidence. Hypnobirthing's marketing is much stronger than its evidence.",
      "When pushing, upright positions help without an epidural, but lying on your side may be better with one."
    ],
    "tool": false
  },
  "birth:body": {
    "say": "Most first births bring some tearing, and most of it heals. The biggest thing that changes the risk of a severe tear on the day is whether forceps are used.",
    "points": [
      "Severe tears happen to about 6 in 100 first-time moms, and about 1 to 2 in 100 with later babies.",
      "For an ordinary birth, a cut isn't better than a tear. With forceps, an angled cut lowers the risk of a severe tear a lot.",
      "A warm compress while you push has the best evidence, cutting severe tears by about 54 percent. You can ask for it.",
      "Get it checked if pain gets worse, there's a smell, pus or new bleeding, you feel unwell, or the wound looks like it's opening."
    ],
    "tool": false
  },
  "birth:wrong": {
    "say": "Almost everything here is rare, and it's here so nothing sounds brand new in the moment. Reading it calmly beforehand is far easier than hearing it for the first time then.",
    "points": [
      "About 6 in 10 first cesareans come from labor not progressing or a worrying heart rate, and both are judgment calls.",
      "Emergency time targets, such as 30 minutes, are audit goals. Taking a little longer doesn't mean something went wrong.",
      "With a spinal or epidural you're awake and your partner can be there. With a general anesthetic, your partner usually isn't in the room.",
      "Some things are simply good: waiting a minute or more before clamping the cord, skin-to-skin straight away, and eating and drinking if you're low risk."
    ],
    "tool": false
  },
  "induction:chart": {
    "say": "There's a chart called the Bishop score, and you're allowed to ask for your number. A low score is a plan for what to use first, not a prediction of how this ends.",
    "points": [
      "The score adds up 5 checks from an exam, out of 13. A score of 6 or less usually means softening the cervix first.",
      "Ask for your 5 numbers at each check and log them here. A few scores in a row show whether anything is moving.",
      "It's a poor predictor: more than half of women labeled unfavorable still gave birth vaginally. A slow cervix isn't your body failing.",
      "In the US, no guideline requires checking the score before breaking your waters. Asking is completely reasonable, accusing isn't."
    ],
    "tool": true
  },
  "induction:ripen": {
    "say": "If your number is low, softening the cervix comes first, and it often takes most of a day or overnight. That's the induction starting, not failing.",
    "points": [
      "A balloon has no drug in it and is as effective as the gel, with fewer episodes of the uterus contracting too hard.",
      "Misoprostol is strongly recommended, but it's not used if you've had a cesarean or other surgery on your uterus.",
      "A sweep can hurt or cause some bleeding, and an independent appraisal rated its benefits unclear.",
      "If exams and insertions are hard for you, for any reason, you can ask for the swallowed option without explaining why."
    ],
    "tool": false
  },
  "induction:water": {
    "say": "Breaking your waters is the one step that can't be undone, so it's worth making it a deliberate choice, not something that just happens during an exam.",
    "points": [
      "In US guidance, an induction isn't called failed until the drip has run at least 12 to 18 hours after your waters are broken.",
      "Breaking them early got to birth about 2.5 hours sooner, didn't change the cesarean rate, and raised womb infection risk by about 46 percent.",
      "Ask whether the baby's head is engaged. A head that isn't engaged is a reason not to break the waters, because of cord prolapse.",
      "The real question is whether now is the right moment, and what's gained by doing it before your cervix is ready."
    ],
    "tool": false
  },
  "induction:why": {
    "say": "Induction is offered for reasons of very different strength. Knowing which kind yours is tells you how much room there is to talk about timing.",
    "points": [
      "Strong reasons include high blood pressure or preeclampsia, going past 41 weeks, and waters breaking at term before labor starts.",
      "Always report reduced movements urgently, every time, and call your provider. The study questioned a policy of inducing for it, not calling.",
      "At 39 weeks with nothing wrong, induction is called reasonable to offer, not recommended. You're allowed to hear it as an offer.",
      "At 41 weeks the picture is much clearer, and in trials induction didn't raise the cesarean rate compared with waiting."
    ],
    "tool": false
  },
  "induction:ask": {
    "say": "Asking questions isn't being difficult, it's being a patient. Guidance in Britain says you can proceed, delay, decline or stop an induction, even once it's started.",
    "points": [
      "Start with: what's my Bishop score, and what are the 5 numbers behind it?",
      "Ask if you can have the balloon instead of medicine, and whether it can be placed by hand rather than with a speculum.",
      "If you'd rather wait, ask what they'd watch and how often. Delaying comes with monitoring, not being left alone.",
      "Bring somebody and give them a job, such as asking for your Bishop score if you forget."
    ],
    "tool": false
  },
  "sexed:why": {
    "say": "Pregnancy is the least of your worries. Several common infections cause no symptoms at all, so the message that protects your teen is a condom as well, every time, even on birth control.",
    "points": [
      "Up to 7 in 10 women and 5 in 10 men with chlamydia notice nothing, so nobody gets tested and it stays.",
      "Untreated, roughly 1 in 6 chlamydia infections leads to pelvic inflammatory disease, which can scar the tubes and affect fertility later.",
      "The pill, implant, coil and injection prevent pregnancy but do nothing against infection. Only a barrier does that.",
      "Small, calm, specific talks help most. Tell them they can be tested without you, and where."
    ],
    "tool": false
  },
  "sexed:stis": {
    "say": "Many of these infections cause no symptoms at all, which is why testing matters more than waiting to notice something. The good news is most are curable or very manageable.",
    "points": [
      "Chlamydia, gonorrhea, syphilis and trichomoniasis are curable. HPV usually clears by itself. Herpes, HIV and hepatitis B are managed, not cured.",
      "Most tests are a urine sample or a swab they take themselves. Syphilis and HIV need a blood or finger prick test.",
      "Oral sex is sex for infections. Chlamydia, gonorrhea, syphilis, herpes, HPV and HIV can all pass that way.",
      "HPV causes about 70 percent of throat cancer, mostly in men, so this is as much a conversation for sons as for daughters."
    ],
    "tool": false
  },
  "sexed:protect": {
    "say": "The methods that best prevent pregnancy do nothing against infection, so the case is for using both. And your teen can be tested without you, which is a good thing.",
    "points": [
      "Used every time, condoms cut HIV risk by about 80 percent and protect well against chlamydia and gonorrhea. Herpes protection is only partial.",
      "Sexually active young women under 25 should test for chlamydia every year and after each new partner. Tests are usually urine or a self swab.",
      "Every US state lets teens consent to their own STI testing. Tell them they can go without you, and where.",
      "The HPV vaccine works best young, offered at 11 or 12 and able to start at 9, for boys and girls. Check hepatitis B too."
    ],
    "tool": false
  },
  "sexed:pregnant": {
    "say": "If your teen is ever pregnant, the danger is hiding it, not the pregnancy. Tell them now, and more than once, that they can tell you, you won't be angry, and you'll work it out.",
    "points": [
      "Teens hide pregnancy mostly out of fear of how parents will react. If they can't tell you, make sure they know to tell somebody.",
      "If they tell you, start with: I'm glad you told me. You're not in trouble. We'll work this out together.",
      "Early care catches high blood pressure, infection and anemia. In 37 states and Washington DC, a pregnant minor can consent to her own prenatal care.",
      "Every US state has a Safe Haven law, and the National Safe Haven Alliance runs a confidential line, day and night, listed on this tab."
    ],
    "tool": false
  },
  "sexed:more": {
    "say": "Your teen is learning about sex whether you talk or not, and you're still the bigger influence. Talk about readiness as its own thing, separate from protection.",
    "points": [
      "In one US survey, 73 percent of teens aged 13 to 17 had seen pornography, first at about 12, often by accident.",
      "The short message: it's acting, it's often made to be extreme, and real sex involves asking, checking and stopping.",
      "Readiness means they want to, it's their own decision rather than pressure or alcohol, and they'd feel all right about it tomorrow.",
      "Once an image is sent, they can't control it. If anyone threatens them with one, it's not their fault and they're not in trouble."
    ],
    "tool": false
  },
  "consent:told": {
    "say": "Your first words matter most: I believe you, I'm so glad you told me, this isn't your fault. Then listen. Almost everything else can wait, except 2 medical things with a clock.",
    "points": [
      "Emergency contraception works best within hours. HIV prevention medicine, called PEP, must start within 72 hours. An emergency department can do both tonight.",
      "Don't ask why they didn't fight, what they wore, or why they didn't tell sooner. Freezing is normal and involuntary.",
      "The forensic exam should be free, and evidence can often be collected up to 7 days. For a minor, expect staff to make a report.",
      "Call RAINN any hour, free and confidential, or text HOPE to 64673. Childhelp and other lines are listed on this tab."
    ],
    "tool": false
  },
  "consent:what": {
    "say": "Consent isn't the absence of a no. It's the presence of a yes, from someone in a state to give one, for this, now.",
    "points": [
      "Freezing happens to most people and is involuntary. Tell your child before anything happens: if your body freezes, that doesn't mean you agreed.",
      "Someone asleep, passed out, drunk or high past making decisions, drugged, frightened or cornered can't agree.",
      "Being worn down, guilt trips or threats isn't agreeing. Yes can be taken back anytime, and yes once isn't yes next time.",
      "For teens it's usually another young person they know, not a stranger. In one large sample, around 7 in 10 were other juveniles."
    ],
    "tool": false
  },
  "consent:raising": {
    "say": "Most parents teach their child how not to be a victim. Far fewer teach the other half: your job isn't to avoid being refused, it's to be sure.",
    "points": [
      "Silence, going still, or a worn down fine, whatever isn't a yes. Being drunk won't make it not count, or be a defense.",
      "Skip any version of be careful, you could get accused. It teaches a boy the risk is to him.",
      "Ask what they'd do when a friend is the one doing it. Changing what friends will tolerate is what the best programs do.",
      "Boys are assaulted too, around 1 in 20 by age 17, and they tell even less often. Sons need both halves."
    ],
    "tool": false
  },
  "growingup:track": {
    "say": "This is an optional, private record of your child's puberty changes, only on if you choose. Tick what's happened and roughly when, and you can delete it all anytime.",
    "points": [
      "Anyone you've shared this child with can see everything here. Check access under Sharing a child before you start.",
      "Tick changes with a rough month, a day isn't needed. For a girl, recording a first period opens a cycle calendar.",
      "At 13, it's usually better your child knows you're keeping this than finds out. When the time comes, hand it over or delete it.",
      "You can also note ongoing medications, such as birth control, so dates are in one place when a doctor asks."
    ],
    "tool": true
  },
  "growingup:body": {
    "say": "Puberty follows a usual order, but ages vary widely and early or late is often ordinary. Tell your child what's coming before it happens, and know the signs worth an appointment.",
    "points": [
      "Girls: breasts first around 10, then pubic hair, a growth spurt, and a first period about 2 to 2.5 years later, around 12.",
      "Boys: testicles grow first, around 11.5. Tell him about erections and wet dreams before they happen, and that they're normal.",
      "Worth a doctor: no period by 15, bleeding over 7 days, cycles under 21 or over 45 days apart, or pain keeping her off school.",
      "Girls who develop early get more unwanted attention. Talk before it shows, and say a body that looks older doesn't make her older."
    ],
    "tool": false
  },
  "growingup:talking": {
    "say": "The talk doesn't work. 40 small ones do. Being specific and comfortable matters more than how much you say, and talking doesn't make anything happen sooner.",
    "points": [
      "Specific beats general. Talking about condoms, contraception or particular situations does measurably more than a general chat about sex.",
      "Keep it open, calm and respectful. Awkward, rushed talks predict very little.",
      "Across 52 studies, talks with mothers had a small protective effect and fathers essentially none, likely because most fathers aren't doing it.",
      "Abstinence only programs haven't been shown to work, and withholding accurate information hasn't been shown to delay anything."
    ],
    "tool": false
  },
  "growingup:safe": {
    "say": "Teach the correct words and the body rules, including that anyone who says not to tell is exactly who to tell. If your child tells you something, stay calm and believe them.",
    "points": [
      "Their body is theirs, the rules cover everyone including family, and it's never their fault. Nothing is too bad to tell you.",
      "Help them have someone else they'd tell besides you. A child needs more than 1 door.",
      "Limit times one adult is alone with your child unobserved, and notice if they suddenly don't want to go somewhere they used to love.",
      "If they tell you: stay calm, believe them, don't interrogate, write down their words, then call Childhelp at 1 800 422 4453."
    ],
    "tool": false
  },
  "online:real": {
    "say": "The danger you fear hasn't gone, it's moved. Adults who want to hurt children now earn their trust through a screen, which is also much easier for you to do something about.",
    "points": [
      "Around 100 stereotypical kidnappings a year nationally, compared with 21.3 million exploitation reports to the tip line in 2025.",
      "The pattern: kindness, a fake younger age, making sexual talk ordinary, a swap request, then threats, sometimes within 24 hours.",
      "Watch for someone moving your child off the platform into private or encrypted messages. Groups of adults sometimes pose as kids together.",
      "Tell your child: if this ever happens, come to me, I won't be angry, and it will be over by the morning."
    ],
    "tool": false
  },
  "online:apps": {
    "say": "Parental controls help, but each one has limits. Treat them as a floor, not a fence, and remember the only way to know what was said is asking your child.",
    "points": [
      "Roblox requires an age check for chat, and adults can't start a conversation with a 12 year old. Set chat, spending and time limits.",
      "Discord doesn't age check most people. Make sure your teen's account is actually set as a teen account.",
      "Snapchat Family Center shows who they talk to, never what's said. Keep asking.",
      "On Instagram and TikTok, use a private account, limit messages and comments, and review followers together. On YouTube, turn autoplay off."
    ],
    "tool": false
  },
  "online:rules": {
    "say": "40 percent of kids said they'd tell a parent, but only 10 percent actually did, mostly out of fear. So promise early that they'll never be in trouble for telling you.",
    "points": [
      "No devices in the bedroom or overnight, charge them in the kitchen, and nothing for an hour before bed.",
      "Using it together and talking about it work better than restricting alone. Controls are the floor, the conversation is the thing.",
      "No age is proven right for a first phone. A basic phone, a watch, or a smartphone without social media are real middle options.",
      "If it's already happened: don't delete anything, screenshot everything, don't pay, and report it at report.cybertip.org."
    ],
    "tool": false
  },
  "trying:timing": {
    "say": "Every fertile window I show you is an estimate, and it's never a contraceptive. LH tests and cervical mucus tell you more, and there's a clear point when it's worth asking for help.",
    "points": [
      "The window is 6 days long and ends on ovulation day. The 2 days before ovulation are the best.",
      "Calendar prediction of ovulation is no better than 21 percent accurate. Urinary LH tests and cervical mucus are more useful.",
      "Daily or every other day through the window works well. Position and lying down afterwards make no difference.",
      "See someone after 12 months if you're under 35, after 6 months at 35 or over, sooner over 40. Both partners get assessed together."
    ],
    "tool": true
  },
  "trying:body": {
    "say": "Folic acid, 400 micrograms a day, is the one thing with strong evidence. Most of what's sold for fertility isn't backed up, and there's no evidence that how you ate caused this.",
    "points": [
      "Start folic acid at least a month before trying. More isn't better, and the ceiling is 1,000 micrograms a day.",
      "CoQ10, myo-inositol for PCOS, and omega 3 have some evidence. They're worth a conversation with your doctor, not a purchase.",
      "Vitamin D, DHEA, melatonin and fertility blends aren't supported. Of 39 blends examined, not one could substantiate its claims.",
      "Watch preformed vitamin A, or retinol, since the pregnancy ceiling is 10,000 IU a day. Tell your provider everything you take."
    ],
    "tool": false
  },
  "trying:help": {
    "say": "If you need IUI or IVF, the most useful question is what a success rate is measured per. Clinic figures often look higher than live birth rates.",
    "points": [
      "IUI with letrozole or clomiphene gives about 9 percent live births per cycle, typically for 3 or 4 cycles before moving to IVF.",
      "IVF live births per intended retrieval in 2023 ranged from 53 percent under 35 to 4 percent over 42.",
      "Routine PGT-A, and ICSI without a male factor, aren't supported by the guidance. It's fair to ask why one is recommended for you.",
      "Most sources put IVF at 15,000 to 30,000 dollars a cycle all in. For coverage, check your plan, not your state."
    ],
    "tool": false
  },
  "trying:wait": {
    "say": "The wait is hard, and if this is flattening you, that isn't fragility. Stress is a result of infertility, not the reason for it, and support is here whenever you want it.",
    "points": [
      "Tests are reliable from after the day your period was due. Testing earlier is the main cause of false negatives.",
      "Symptoms at 8 or 10 days past ovulation are very unlikely to tell you anything either way. Everybody looks anyway.",
      "Anxiety and depression are common during fertility treatment. Psychological support does help, and fertility trained therapists exist.",
      "RESOLVE runs free peer support groups. If this takes you somewhere darker, call or text 988, any hour."
    ],
    "tool": false
  },
  "postpartum:timeline": {
    "say": "Recovery is longer than anyone tells you, and it isn't a straight line. The 6 week visit isn't a finish line, and your care should continue through 12 weeks and beyond.",
    "points": [
      "Bleeding can last up to about 6 weeks, fading from bright red to pink, then brown, then yellowish.",
      "Baby blues peak around day 5 and ease by about 2 weeks. If they worsen or never lift, call the maternal mental health hotline.",
      "Your provider should see or contact you within the first 3 weeks. If nobody has called, call them.",
      "A sudden return of heavy bright red bleeding is worth a call, and so is any urgent warning sign, for at least a year."
    ],
    "tool": true
  },
  "postpartum:nobody": {
    "say": "None of this is a complication. It's the ordinary side of recovery that rarely gets said out loud, so you know it isn't only happening to you.",
    "points": [
      "Night sweats, afterpains during feeding, and hair shedding around month 3 are all expected, and they pass.",
      "Leaking urine is common, but you don't have to accept it. Ask for a pelvic floor physical therapy referral.",
      "Frightening thoughts about your baby being hurt are extremely common and don't mean you want it or would do it.",
      "If those thoughts are constant, or you feel pulled toward acting on them, get help today. Call 988 or the maternal mental health hotline."
    ],
    "tool": false
  },
  "postpartum:mind": {
    "say": "Perinatal mood and anxiety disorders affect roughly 1 in 5 birthing people, and they're treatable. They aren't caused by weakness, by how much you love your baby, or by anything you did.",
    "points": [
      "Thoughts of harming yourself or your baby, or seeing or hearing things others don't, need help today. Call 988 or go to an emergency room.",
      "Baby blues ease by about 2 weeks. If it lasts longer, gets worse, or starts later, reach out, because treatment works.",
      "It can look like rage, numbness, racing thoughts, or not sleeping even when the baby sleeps.",
      "Telling a provider leads to support, not removal. The National Maternal Mental Health Hotline is free, confidential and open 24 hours."
    ],
    "tool": false
  },
  "postpartum:supplies": {
    "say": "Set up your recovery supplies before the baby comes, because you won't be shopping. Ask the hospital for extras of everything they open before you're discharged.",
    "points": [
      "Heavy overnight pads, a peri bottle, witch hazel pads and cold packs cover the hardest first days.",
      "Start a stool softener on day 1. It's the most repeated advice from people who've done this.",
      "Nothing internal, such as tampons or menstrual cups, until you're cleared.",
      "After a cesarean, a small firm pillow pressed against the incision helps when you cough, laugh, or get in and out of a car."
    ],
    "tool": false
  },
  "postpartum:help": {
    "say": "People want to help and have no idea what to offer. Have specific asks ready, and remember you're allowed to say not yet to visitors for as long as you want.",
    "points": [
      "Ask for specific things, such as dinner left at the door or an hour holding the baby so you can sleep.",
      "You can require handwashing, current vaccines and no sick visitors, and ask people not to kiss the baby.",
      "Partners can own a whole category, such as nights or bottles, and handle the visitors so you don't have to say no.",
      "Partners are often first to notice a mood disorder. Around 1 in 10 partners experience postpartum depression too."
    ],
    "tool": false
  },
  "pumping:flange": {
    "say": "Start with the flange, because the one in the box probably doesn't fit you. Measure your nipple, add 2 to 4mm, and remember pumping should feel like a tug, never pain.",
    "points": [
      "Measure just the nipple at its base, in millimeters, right before you pump. Measure both sides, since they often differ.",
      "A flange that's too small or too large can cause pain and low output, which often gets blamed on supply.",
      "Start in letdown mode, then switch to expression. Turn suction up to a firm tug, then back it off 1 notch.",
      "If pumping still hurts after adjusting the size, see an IBCLC rather than pushing through."
    ],
    "tool": true
  },
  "pumping:schedule": {
    "say": "There's no single right pumping schedule, just one that matches what you're trying to do. Pick your goal and you'll see a sample day that fits it.",
    "points": [
      "Exclusively pumping in the first 12 weeks usually means 8 to 12 sessions in 24 hours, roughly 120 minutes total.",
      "Back at work, pump for each feed you miss, roughly every 3 hours. The PUMP Act protects your break time and a private space.",
      "To build a stash, add a short pump 30 to 60 minutes after the first morning feed rather than replacing feeds.",
      "Weaning? Drop 1 session at a time and hold 3 to 5 days. Call your provider for a hard, red, painful area with fever."
    ],
    "tool": false
  },
  "pumping:output": {
    "say": "The bottle isn't a report card. A pump is less efficient than your baby, so if your baby is gaining and has normal diapers, low pump output doesn't mean something's wrong.",
    "points": [
      "Pumping in place of a feed, half to 4 ounces across both breasts is normal. Pumping as an extra, half an ounce is normal.",
      "Check the equipment first, including flange size, worn valves, cracked parts and suction set too high.",
      "To make more milk, add a session rather than minutes. Power pumping takes 60 minutes once a day, so give it 3 to 7 days.",
      "Get a real evaluation if your baby isn't gaining weight or has fewer wet diapers than expected."
    ],
    "tool": false
  },
  "pumping:storage": {
    "say": "Here are the CDC storage times in plain terms, for a healthy full term baby. Label everything, use the oldest milk first, and never refreeze thawed milk.",
    "points": [
      "Fresh milk keeps up to 4 hours on the counter, up to 4 days in the fridge, and is best within 6 months frozen.",
      "Thawed milk lasts 1 to 2 hours on the counter, or up to 24 hours in the fridge.",
      "Use milk left in a bottle within 2 hours of the feed. Storing 2 to 4 ounce portions wastes less.",
      "Thaw in the fridge or warm water, never the microwave. Preterm or hospitalized babies have stricter rules, so ask the NICU."
    ],
    "tool": false
  },
  "pumping:lipase": {
    "say": "If thawed milk smells soapy, your milk is fine. It's lipase, the milk isn't spoiled or unsafe, and it's fixable.",
    "points": [
      "Before building a big stash, freeze 1 bag for 5 days, then thaw it, smell it and taste it.",
      "Scalding fresh milk before freezing, until small bubbles form at roughly 180°F, fixes it. It can't fix milk that's already frozen.",
      "Scalding does reduce some immune factors, but it's still your milk and still a good thing to give your baby.",
      "Soapy is lipase, sour is spoiled. Don't pour milk out just because it smells strange."
    ],
    "tool": false
  },
  "pumping:trouble": {
    "say": "Pick what's happening, and start by checking the equipment, since almost every pumping problem begins there. A few signs mean it's time to call your provider.",
    "points": [
      "Pain usually comes back to flange size or suction set too high. Persistent pain isn't something to push through.",
      "A sudden drop is most often worn duckbills or valve membranes. Replace the cheap parts first.",
      "For a hard, sore lump, keep removing milk as usual and use ice, not heat or deep massage.",
      "Call your provider for fever, chills, body aches or a spreading red area, which can be mastitis."
    ],
    "tool": false
  },
  "pumping:help": {
    "say": "An IBCLC can often solve in 1 visit what people struggle with for weeks, and your insurance probably covers it. Asking for help doesn't mean you're failing.",
    "points": [
      "Under the Affordable Care Act, most plans cover lactation support and a pump with no copay. Call and ask what's covered.",
      "An IBCLC is the highest lactation credential, the one to see for pain, supply, weight gain, ties or latch trouble.",
      "Ask the hospital about free outpatient clinics, and ask your pediatrician for a referral. Virtual visits are often covered.",
      "Call if feeding or pumping hurts, your baby isn't back to birth weight by about 2 weeks, or diapers are fewer than expected."
    ],
    "tool": false
  },
  "pregHealth": {
    "say": "Please don't stop a medication just because you're pregnant. Untreated illness is a risk too, so bring the bottle to your provider and decide together.",
    "points": [
      "CMV affects about 1 in 200 babies. Don't share food, cups or utensils with young children, and wash hands after diapers.",
      "If your baby fails the newborn hearing screen, ask about CMV testing right away. It has to happen within 2 to 3 weeks.",
      "Tdap is recommended between 27 and 36 weeks every pregnancy, and flu at any point, ideally by the end of October.",
      "A prenatal vitamin matters more for consistency than brand. Ask to have your iron and vitamin D checked."
    ],
    "tool": false
  },
  "feeding:stance": {
    "say": "Fed is best, and I mean that with no asterisk. A baby who is fed, gaining, and loved is the goal, and the route there is yours.",
    "points": [
      "Human milk has real benefits, such as antibodies and fewer ear, respiratory, and stomach infections. Any amount counts, including combination feeding.",
      "Formula is regulated food. Every US formula meets the same FDA nutrient requirements, so store brand and name brand are both complete nutrition.",
      "Never water down formula to stretch a can. WIC, formula banks, and diaper banks exist for exactly this, and asking is the system working.",
      "If you're deciding at 3am whether to keep going, the gap between a coping parent and one who isn't is enormous. Weigh both."
    ],
    "tool": false
  },
  "feeding:latch": {
    "say": "Most early feeding trouble is the shape of the latch, and the shape is fixable. Pain past the first few seconds is information, not something to push through.",
    "points": [
      "A deep latch takes a mouthful of breast, not just the nipple. Line up nose to nipple and wait for a wide, yawning mouth.",
      "Clicking, dimpled cheeks, or a slanted, lipstick shaped nipple usually point to a shallow latch, far more often than to a tie.",
      "Ask for an IBCLC early, and a feeding assessment where they weigh your baby before and after a feed. Most plans cover lactation support.",
      "Weight and diapers don't wait. Not back to birth weight by about 2 weeks, or fewer wet diapers than expected, is worth a call today."
    ],
    "tool": false
  },
  "feeding:weight": {
    "say": "Diapers and the scale are the only honest measure of how much went in. Feed length, how full you feel, and pump output are all guesses.",
    "points": [
      "Losing up to about 7 to 10 percent early on is common. Most are back to birth weight by 10 to 14 days.",
      "Gain is roughly 1 ounce a day to 3 months, then about 20 grams a day to 6 months. The line over time matters most.",
      "Get seen this week if they're falling across their curve, have fewer wet diapers than expected, or are hard to wake.",
      "Triple feeding is a bridge for days to a couple of weeks, not a way to live. Ask what has to change to stop."
    ],
    "tool": false
  },
  "feeding:bottles": {
    "say": "Judge the flow by watching your baby, not by reading the box. Slow flow isn't a standard, and one brand's slow can be another's medium.",
    "points": [
      "Paced feeding helps. Sit them upright, hold the bottle close to level, and tip it down every 20 or 30 swallows for a breather.",
      "A bottle should take about 15 to 20 minutes. Gulping, spluttering, or empty in 5 minutes means the flow is too fast.",
      "Stay on the slowest nipple they'll take, and try a couple of different bottles before committing to a set, because babies have opinions.",
      "The AAP recommends offering a pacifier at sleep times because it lowers the risk of SIDS. Aim to have stopped by age 3."
    ],
    "tool": false
  },
  "feeding:milk": {
    "say": "Formula stops at 12 months, and breastmilk can carry on as long as you both want. Stopping earlier is equally fine, and your vote counts.",
    "points": [
      "Birth to 6 months is human milk or formula only. Solids and water aren't needed, even in hot weather.",
      "From 6 to 12 months, milk is still the main nutrition. Small amounts of water in an open or straw cup with meals are fine.",
      "Around 12 months, whole cow milk can start, about 16 ounces a day at most. Most toddlers don't need toddler formula.",
      "When weaning, drop 1 feed at a time and hold each change for about a week. Sudden stopping risks clogged ducts and mastitis."
    ],
    "tool": false
  },
  "feeding:solids": {
    "say": "Solids usually start around 6 months, and the readiness signs matter more than the date. Before 4 months is a no, because the gut and swallowing aren't ready yet.",
    "points": [
      "Look for all the signs, not just some, such as sitting upright with good head control, the tongue thrust fading, and leaning in for food.",
      "They also need to move food from the front of the mouth to the back and swallow it. That's the part that keeps them safe.",
      "Rice cereal in a bottle doesn't help babies sleep through the night, and it's a choking risk.",
      "If your baby was born early, use corrected age. A baby born at 32 weeks is usually ready around 6 months corrected."
    ],
    "tool": false
  },
  "feeding:how": {
    "say": "Purees, baby led weaning, or a bit of both are all safe when they're done properly. Pick the one that fits your kitchen and your nerve.",
    "points": [
      "Purees let you see how much went in. Keep advancing the texture so they don't get stuck on smooth.",
      "Baby led weaning uses soft, finger sized pieces that squash between your thumb and forefinger. Offer iron rich foods from the start.",
      "Gagging is loud and normal, the reflex working. Choking is silent or a weak high pitched sound, and it needs you now.",
      "For an infant who is choking, act immediately with back blows and chest thrusts. Always feed fully upright and never leave them alone with food."
    ],
    "tool": false
  },
  "feeding:foods": {
    "say": "Iron first, allergens early, and no honey. Those are the 3 that actually matter as you start first foods.",
    "points": [
      "Offer iron rich foods such as soft meat, beans, lentils, and iron fortified cereal, with some vitamin C such as fruit to help absorption.",
      "Start the common allergens between about 4 and 6 months once solids are underway, one at a time, and keep them in the diet regularly.",
      "No honey under 12 months, and no cow milk as a drink or juice before 12 months. Yogurt and cheese are fine from 6 months.",
      "Quarter grapes, cherry tomatoes, and hot dogs lengthwise, never in coins or rounds. Never offer whole nuts or spoonfuls of thick nut butter."
    ],
    "tool": false
  },
  "safety:cpr": {
    "say": "If something happens, call 911 and put it on speaker. The dispatcher will talk you through compressions, so you don't have to remember any of this alone.",
    "points": [
      "No response and no normal breathing means start CPR. Gasping isn't breathing. Shout for someone to call 911 and get an AED.",
      "For a child, push with the heel of your hand in the center of the chest, about 2 inches deep, 100 to 120 a minute.",
      "Do 30 compressions, then 2 breaths, and keep going. Push hard enough that it feels like too much, which is almost always about right.",
      "This is a reference, not a certification. An in person class takes about 2 hours, costs very little, and is sometimes free."
    ],
    "tool": false,
    "ages": [
      12,
      83
    ]
  },
  "safety:choking": {
    "say": "If they're coughing, let them cough, because coughing is working. Act when they can't make a sound, since that's a blocked airway and it needs you now.",
    "points": [
      "For a child over 1, have someone call 911, then alternate 5 back blows and 5 abdominal thrusts until it clears.",
      "If they go unresponsive, lower them to the floor and start CPR, checking the mouth before each set of breaths.",
      "Never do a blind finger sweep. Only hook out an object you can clearly see.",
      "Devices such as LifeVac may be worth owning but never go first. Back blows and thrusts come first, every time."
    ],
    "tool": false,
    "ages": [
      12,
      83
    ]
  },
  "safety:alone": {
    "say": "At this age the answer is no, and it's okay to not be okay. If you're at the end of it, put them somewhere safe and step out.",
    "points": [
      "Right now, put them down somewhere safe, walk out and shut the door, breathe, then call somebody before you go back in.",
      "Never shake them, never leave them in a car, and never leave them home alone. If they were shaken, call 911 now.",
      "Call a partner, your mom, a friend, or a neighbor. The National Maternal Mental Health Hotline is 1-833-852-6262, or call 988.",
      "If you can't keep going, call 1-888-510-2229 or local child protective services to place them safely. Asking isn't the same as being reported."
    ],
    "tool": false,
    "ages": [
      12,
      83
    ]
  },
  "vaccines": {
    "say": "This is your decision, and you're allowed to ask hard questions. I'll share what the evidence shows, without shame and without deciding for you.",
    "points": [
      "Nothing can be given without your consent. Ask for the Vaccine Information Statement, say yes to one and no to another, or change your mind.",
      "Studies of millions of children, including a Danish study of more than 650,000, found no link between vaccines and autism.",
      "If you're declining or waiting, keep a pediatrician and tell every clinician early, because it changes what an emergency room tests for.",
      "Fever with a stiff neck, or a rash that doesn't fade under a glass, is an emergency. Vitamin A doesn't prevent or treat measles."
    ],
    "tool": false
  },
  "support:safe": {
    "say": "Nothing you read here is recorded or reported. The Leave now button takes you to a weather page instantly, and if someone is in danger, call 911.",
    "points": [
      "Leave now can't erase your browser history, hide the app, or stop tracking software someone installed on purpose.",
      "The safest place to read this is a device that person has never touched, such as a library computer or a friend's phone.",
      "If you've shared a child with someone you're now worried about, they can see what's logged. Removing access is instant, and they'll notice.",
      "The National Domestic Violence Hotline will talk through phone safety with you, free, any hour. Call 1-800-799-7233 or text START to 88788."
    ],
    "tool": false
  },
  "support:dv": {
    "say": "It doesn't need a name to count, and you don't have to decide anything today. If you're in danger right now, call 911.",
    "points": [
      "The National Domestic Violence Hotline is free and 24 hours at 1-800-799-7233, or text START to 88788. They do safety planning, not lectures.",
      "If someone's hands have ever been on your neck, even once, the risk is higher. Trouble swallowing, dizziness, or voice changes need same day care.",
      "Leaving is the most dangerous time. Don't announce it, and call an advocate before you move anything.",
      "A hotline advocate isn't a mandated reporter the way a doctor is, and calling doesn't start a case. You can ask that first."
    ],
    "tool": false
  },
  "support:cps": {
    "say": "A knock on your door doesn't mean you did something. Most investigations end with the child staying right where they are. If anyone is in danger, call 911.",
    "points": [
      "You have real rights, such as refusing entry without a court order, and each has a catch. Ask what happens if you say no.",
      "Being broke isn't neglect. Saying plainly what you need tends to work out better than hiding it.",
      "Show up to everything, stay calm, keep your own record of every date and name, and read anything before you sign it.",
      "Childhelp answers 24 hours at 1-800-422-4453, including for parents under investigation. Call 211 for housing, food, and utility help."
    ],
    "tool": false
  },
  "support:traffick": {
    "say": "It's almost never a van in a parking lot. It usually starts with someone your child already knows or has talked to for weeks. If they're in danger, call 911.",
    "points": [
      "If it's sextortion, first tell your child it isn't their fault. Don't pay, don't send more, and don't delete anything, because it's evidence.",
      "Report it at report.cybertip.org or 1-800-843-5678. If your child is under 18, takeitdown.ncmec.org can get the image removed for free.",
      "Watch for several signs together, such as a much older new friend, unexplained money or gifts, a second phone, or going missing overnight.",
      "Call the National Human Trafficking Hotline at 1-888-373-7888 before you confront anybody, and keep telling your child they'll never be in trouble for telling you."
    ],
    "tool": false
  }
};

export function willowShortFor(key, months) {
  const s = WILLOW_SHORT[key];
  if (!s) return null;
  if (s.ages && (months == null || months < s.ages[0] || months > s.ages[1])) return null;
  return s;
}

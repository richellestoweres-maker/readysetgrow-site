# Ready Set Grow

A parenting and child development companion app that grows with a family from pregnancy through life launch.

One child profile. Eighteen years. The app matures as the child does.

---

## What this repo is right now

A working React Native app, built with Expo. It runs on a real phone.

See **[SETUP.md](SETUP.md)** for how to run it. No coding knowledge needed, about fifteen minutes the first time.

**What works today**

- Onboarding, and multi child profiles with an active child switcher
- Everything saved on the device, so it survives closing the app
- Right Now: tap what is happening, get triage and something to try
- The schedule builder: one wake time in, the whole day out
- The bedtime routine, timed backward from that bedtime
- Milestones you can tap and record, per child
- Care topics with live links to the AAP, CDC, FDA and others
- Support lenses that reorder content and activities
- Logging, per child, with a plain text and CSV export for a pediatrician
- Pregnancy: urgent maternal warning signs, preparation topics, and the infections nobody mentions
- A hospital bag checklist that remembers what you packed
- Pumping: flange sizing, schedules by goal, milk storage, and high lipase milk
- Postpartum recovery week by week, with the maternal mental health lines pinned

**What does not work yet**

Timers are defined but do not count down. The community is not live. No AI chat and no memories yet.

Accounts and sync do work on the website: signing in keeps every child, log and
milestone on the account rather than in one browser, it works offline and catches
up later, and a change on a phone appears on a laptop without a refresh. The React
Native app has not caught up with that yet.

---

## How the website is published

This repo is both the source and the website, which is why the built file sits
at the root next to the code that produced it. GitHub Pages serves `index.html`
from the root of `main`, with `readysetgrow-app.com` pointed at it.

`index.html` is the whole app in one file: every data file and every screen,
concatenated by the build.

    python3 proto/build.py

That one command produces three things from the same source, so they cannot
drift apart:

    index.html                            the website, which IS the app
    demo/index.html                       the public demo, phone in a frame
    proto/ready-set-grow-prototype.html   the workbench, with the dev rail

To publish a change: edit something in `src/data/` or `proto/`, run the build,
and commit `index.html`. Nothing else has to move, and nothing in the GitHub
Pages settings ever needs touching.

The files that make the hosting work, and should be left alone:

    CNAME        the custom domain. Deleting this unhooks readysetgrow-app.com.
    .nojekyll    stops GitHub trying to process the site as a Jekyll blog.
    robots.txt   what search engines may crawl.

The build refuses to finish if a data file is missing from the bundle, if two
files declare the same name, if the assembled JavaScript does not parse, if a
function is declared twice, or if anything is declared after the startup block.
Each of those guards exists because that exact mistake broke the site once.

Every build stamps itself with the date and time, in a meta tag near the top of
`index.html` and again inside the app. A running copy checks that stamp against
the server and offers a reload when it is out of date, which is what stops a
phone quietly running last week's version.

Folder structure

```
App.js                   Entry point, navigation, and the tab bar
app.json                 Expo config
babel.config.js          Build config
SETUP.md                 How to run it on your phone

src/
  context/
    AppContext.js        All app state, and the only thing that touches storage
  components/
    ui.js                Every shared visual piece, including the sprout
  screens/               One file per screen, 23 of them
  theme/
    theme.js               Design system. Colors, type, spacing, shadows.
  utils/
    age.js                 The age engine. Everything personalized starts here.
  data/
    stages.js              The ten life stages and the growth metaphor.
    supportLenses.js       Neuro inclusive support lenses.
    milestones.js          CDC milestone data across 12 checkpoints.
    developmentContent.js  The "what is happening and what do I do" content.
    activities.js          Age appropriate activities.
    rightNow.js            Real time help. The button a parent taps mid crisis.
    sleep.js               Sleep needs, wake windows, and the schedule builder.
    routines.js            Age based routine templates, timed backward.
    careTopics.js          Sourced reference topics with links to AAP, CDC, FDA.
    logTypes.js            The fifteen log types, and medication timing rules.
    affirmations.js        Margin lines and parent notes, picked by age.
    pregnancy.js           Urgent maternal signs, postpartum conditions, prep topics.
    pregnancyHealth.js     CMV first, plus vaccines and medications in pregnancy.
    hospitalBag.js         The checklist, and the items people actually forget.
    pumping.js             Flange fitting, schedules, output, storage, high lipase.
    postpartum.js          Recovery week by week, and perinatal mental health.
    communityWisdom.js     What parents say worked, labeled for how well it holds up.
    vaccines.js            The evidence, the parent rights, and declining safely.
prototype/
  ready-set-grow-prototype.html   A browser preview that runs the real data.
```

---

## The core idea

Every personalized thing the app does follows the same chain:

```
birthday
  -> age in days, weeks, months, years        (utils/age.js)
  -> life stage                               (data/stages.js)
  -> milestone checkpoint                     (data/milestones.js)
  -> relevant content                         (data/developmentContent.js)
  -> suggested activities                     (data/activities.js)
  -> reordered by active support lenses       (data/supportLenses.js)
  -> styled for the stage                     (theme/theme.js)
```

A child born June 2022 with the sensory and ADHD lenses turned on produces: "4 years, 3 months", the Preschool stage, the 48 month checkpoint with 17 milestones, "Big Energy and Physical Play" as the top content, and "Heavy Work Helper Jobs" as the top activity. None of that is hardcoded anywhere. It falls out of the birthday and two toggles.

---

## Design principles baked into the code

**Ranges, not deadlines.** Milestone data uses the CDC's 2022 revision, which describes what most children (about 75 percent) can do by an age, rather than the average. Every milestone renders with a window, never a pass or fail.

**Reassurance never blocks action.** A support lens can widen how gently a milestone window is described. No lens ever hides the guidance to talk with a pediatrician. Every lens carries `suppressesRedFlags: false` and nothing should ever read it as true.

**Never diagnose.** Content says "some children" and "one possibility is". It never says "your child has". Lenses describe support a family wants, not a label on a child.

**Lenses stack.** A parent can turn on ADHD, sensory, and communication together and get the union of all three, not one winner.

**One shared vocabulary.** Lenses, content, and activities all use the same `strategyTags`. That is what lets a sensory lens surface heavy work activities automatically without maintaining a separate list per lens.

**Nothing is hidden, only reordered.** Lenses change the order content appears in. A parent can always still find everything.

**Age appropriate logging.** Each stage declares its own `logTypes`. A teenager is never offered a diaper log.

---

## Safety

This app provides educational information. It is not a pediatrician, therapist, psychologist, or speech pathologist, and it is not a diagnostic tool. Every content entry carries a `worthMentioning` list describing when a parent should raise something with a professional, and medical emergencies get escalation guidance rather than parenting tips.

Children's private profiles and logs must never automatically become community content.

---

## Data sources

Milestone content is based on the CDC's Learn the Signs, Act Early program, using the 2022 revised checklists.

- CDC Developmental Milestones: https://www.cdc.gov/act-early/milestones/index.html
- CDC Milestone Checklists by Age: https://www.cdc.gov/act-early/resources/milestones-checklist-by-age.html
- On the 2022 revision: https://www.aafp.org/pubs/afp/issues/2022/1000/editorial-cdc-developmental-milestone-checklist.html

---

## Right Now

The differentiator. A parent at 6:40 PM with a screaming baby is not browsing a library, so `rightNow.js` is organized by what is happening this minute rather than by topic.

Three rules govern every entry:

1. **Safety before explanation.** Any situation with an emergency version shows the emergency check first. Nobody should scroll past reassurance to learn their baby needs to be seen.
2. **Something to do in the first sixty seconds.** The first action is doable one handed while holding a crying baby.
3. **Nothing diagnoses anything.** "Some babies", "one possibility is", never "your baby has".

Fever triage is age aware, because the right answer is completely different at six weeks and six years. Under three months, any fever of 100.4 F is an emergency evaluation, and the app says so rather than offering a generic "call your doctor".

## The schedule builder

`sleep.js` takes one input, when the child woke up, and produces the day. Nap count, nap length, and wake windows all come from the age band. Naps that already happened are treated as fact and the rest recalculates from them, so a short nap does not silently produce a schedule that no longer fits.

`routines.js` then works backward from the bedtime that produced, so a parent sees when to start the bath rather than being told a routine takes forty minutes.

An honest note lives in the code and in the UI: total sleep needs come from the AASM consensus and are real published figures, but wake windows have no governing body publishing official numbers. They are widely used practice guides. Every generated schedule carries that framing, because a parent should never feel they are failing to hit a standard that does not exist.

## Sources

Every care topic carries real links and a `reviewedAgainst` field naming the guidance version it was written from, so it is obvious later what needs rechecking. Highlights:

- Safe sleep: AAP 2022 policy statement
- Milestones: CDC Learn the Signs, Act Early, 2022 revision
- Tongue tie: AAP 2024 clinical report on overdiagnosis
- Sleep duration: AASM consensus, endorsed by the AAP
- Milk storage: CDC human milk storage guidelines
- Car seats: AAP child passenger safety
- Teething: FDA warnings on benzocaine and teething jewelry
- Allergens: AAP early introduction guidance
- Jaundice: AAP 2022 hyperbilirubinemia guideline
- Water safety: AAP drowning prevention
- Early intervention: IDEA Part C

## How multi child safety is enforced

Everything belonging to a child lives inside that child's object: their lenses, their milestone
statuses, their wake time, their routine choices. Nothing about a child is stored at the top level.

That is deliberate. The fastest way to ship a bug that shows one child's milestone progress under
their sibling's name is to keep a shared map keyed by milestone id. Keeping it per child makes that
mistake structurally impossible rather than something a future change has to remember.

## How evidence is labeled

Some of what parents pass to each other works and has never been studied. Those entries carry
`evidence: 'community'` and render with a visible tag saying so, rather than being blended into the
sourced guidance. The non alcoholic vanilla tip for high lipase milk is the clearest example: it is
included, because parents say it saves their freezer stash, and it is labeled, because the
established remedy is scalding before freezing and a parent deciding what to do with three hundred
ounces of milk deserves to know which is which.

The same rule governs supply. Every lever in the pumping content is a way of removing milk more
often or more effectively. As of September 2026 the framing changed. The guidance still leads with
frequency, because removing milk more often is what actually works, and it no longer implies anything
else is silly. Oats, cookies and teas live in the community section under a visible "Parent tip, not
studied" label, with an honest note that eating something you like at 3 AM makes the session bearable,
and that is not nothing. Herbal supplements carry their real interaction warnings rather than a brush off.

Nobody gets judged for wanting a large supply either. Wanting one is a real goal, held by people donating
to milk banks, feeding twins, waiting on a NICU baby, and grieving a baby who died. The app helps them do
it safely instead of talking them out of it.

---

## Not built yet

Running timers, cloud accounts and sync, the birth celebration, memories, the AI parenting
assistant, the community, and the school age and teen learning experience.

Content gaps: developmental content for 0 to 3 months. Activities are thin under six months. The teen
years are now written, covering eleven through eighteen.

## Two levels: the parent and each child

Ready Set Grow has two users at once and they are not the same person.

A mother has her own recovery, her own pumping, her own community and her own
account. A child has an age, a set of support lenses, and content that is only
right for that age. Mixing them is what makes most parenting apps feel wrong,
so the app keeps them apart structurally rather than by convention.

* Parent scoped lives on `store`: the account, the hospital bag, pumping,
  the fourth trimester, pregnancy health, and Community.
* Child scoped lives inside a child record: birthday, lenses, lens options,
  milestone statuses, wake time, routine. `state` is a live view onto whichever
  child is open, which is why screens written before profiles existed still work.
* Home is the mother's screen. Opening a child moves into their space, and a
  strip at the top of every child screen says whose profile you are in.
* Reaching a child scoped screen with no child open shows a picker, never an
  empty screen.

Everything persists to `localStorage` under `readysetgrow:v2`. Structural
changes flush immediately, ordinary edits are debounced, and the page flushes
on the way out. There is no password field, on purpose: a real account needs a
server, and a password held in a browser is worse than none.

## Support lenses

Twenty one lenses across seven groups, each carrying an `understanding` block:
a headline, plain language on how that mind works, the strengths that come with
it, and `misreadAs` pairs that put the behavior a parent sees next to what it
usually is. Those pairs are the highest value content in the project.

Two facts worth keeping straight, because families get told otherwise:

* Autism support levels are 1, 2 and 3, not 4. They describe support needs,
  not ability, and they can look different on a different day.
* ADD has not been a separate diagnosis since 2013. It is ADHD, inattentive
  presentation, and the ADHD lens carries a note saying so.

Every lens still has `suppressesRedFlags: false`, and no lens hides a milestone
or softens a reason to call a pediatrician. Lenses reorder, they never remove.

## Age coverage

Development content now runs from birth through eighteen. `maxMonths` is
exclusive in `getContentForAge`, so an entry that should cover an eighteen year
old's whole year needs `maxMonths: 228`.


## Vaccines

Two things held at once, and the file header in `src/data/vaccines.js` says more.

The parent decides. They may ask hard questions, accept one vaccine and decline
another, take more time, and say no. The screen states that before anything else.

The evidence is not evenly split, and the app does not pretend otherwise.
Presenting it as a coin flip to seem balanced would be a lie a parent could act
on, and this app is supposed to be the friend who tells the truth.

The largest section is `IF_YOU_DECLINE`, which exists because almost nobody
writes it. A family that has decided against still needs to know which fever
means go now, what to tell an emergency room, and what happens at school during
an outbreak. Withholding that to signal disapproval would put a child at risk to
make a point. Write that section as though the family is your friend.

## Community wisdom

`communityWisdom.js` is lived experience rather than sourced guidance, kept in
its own file so the two never blur. Every entry carries one of four labels: in
current guidance, mixed evidence, parent tip not studied, or guidance changed.

That last label earns its place. The Academy of Breastfeeding Medicine rewrote
its mastitis protocol in 2022 and most of the internet has not caught up.
Sunflower lecithin moved into the protocol. Heat, deep massage, vibrating
massagers and extra pumping to clear a clog moved out of it, because the current
model treats a clog as inflammation rather than stuck milk. The app says so, and
it also says plainly that anyone who followed the old advice was following what
everyone was told. The point is what to reach for next time, not a verdict on
last time.

## Disclosed relationships

`pregnancyHealth.js` carries a `relatedPrograms` block on the CMV entry, separate
from `sources`. Everything in `sources` is independent public health guidance. A
commercial program with a family connection to the app owner is a different kind
of thing, so it sits in its own block, tagged in the UI, with the relationship
stated in the copy. Any future entry of that kind follows the same pattern.

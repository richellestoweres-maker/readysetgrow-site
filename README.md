# Ready Set Grow

A parenting companion that answers what is happening with your child and what you can
actually do about it, from pregnancy through eighteen, on one continuous profile.

**Live at [readysetgrow-app.com](https://readysetgrow-app.com)**

---

## What this repo is

The website **is** the app. `index.html` at the root of this repo is the whole thing:
one self contained file, about 2.4 MB, served by GitHub Pages. There is no server, no
build step on deploy, and nothing to install. Open the address and it runs.

It installs to a phone home screen as a progressive web app, works with no signal once
installed, and syncs across devices for anybody who makes an account.

## How the file is made

Nobody edits `index.html` by hand. It is assembled by `proto/build.py` from:

| Piece | What it is |
|---|---|
| `src/data/*.js` | Every piece of content and every pure function, one file per subject |
| `src/utils/`, `src/theme/` | The age engine and the design tokens |
| `proto/app.js` | Every screen, every handler, the whole interface |
| `proto/shell.html` | The component CSS, and the prototype workbench |
| `proto/desktop-chrome.html` | The wrapper the real site uses |

To rebuild after a change:

```
python3 proto/build.py
```

That writes three files: `index.html` (the site), `demo/index.html` (a public demo with
the workbench controls hidden), and the workbench itself. Then upload `index.html` here.

## The build refuses to finish if any of this is wrong

Most of the bugs this app has shipped were a particular shape, so each one became a gate.
The build fails, loudly, rather than producing a file that breaks in somebody's hands.

- **Unlisted data files.** A file in `src/data/` that is not in the bundle list gets
  silently left out, and the first sign is a `ReferenceError` in a console long after the
  build said it succeeded.
- **Name collisions.** Every file lands in one shared scope, so two top level
  declarations sharing a name means the second silently replaces the first. That is how
  `monthsBetween` from two different files made every child in the app read as a newborn,
  with nothing thrown and every test passing.
- **Undefined constants.** A `SHOUTING_CASE` name used but never declared. It throws only
  when that one screen renders, which on the consent screen meant a parent on the worst
  night of their life getting a blank page.
- **Dead sub tabs.** Every `data-sub` key has to be in the state proxy list, or the tab
  lights up, the screen does not change, and nothing throws.
- **Syntax, duplicate functions, and boot order.**

## What is in it

**Every day**: feeding, including oral ties, triple feeding and pumping. Sleep with real
wake windows. Diapers. Growth on the actual WHO and CDC reference curves. A vaccine
record grouped by appointment. Milestones. Today's Plan. Logging. Chores by age. A
learning day from sixteen months to eighteen years. Outings with packing lists. Memories.

**Understanding them**: support lenses that reorder the whole app around one child,
including autism, ADHD, Down syndrome, deaf and hard of hearing, blind and low vision and
prematurity. Sign language as a progression by age.

**When it is hard**: CPR and choking. What to do when a parent has run out of room,
including that safe surrender is legal. Child protective services, with every right
paired with what exercising it actually costs. Domestic violence. Trafficking and
sextortion. Phones, games and who is on the other side. Puberty, consent, and what to do
in the first day if a child tells you something happened. A quick exit on the pages
somebody may be reading on a watched phone.

**Together**: a community feed with groups, and Fireflies, a night sky that lights up
when other parents are awake at 3am, with no location and no names.

**Willow**, a companion who knows the child's age and what has been logged.

## The rules the content is written under

1. **Say how well a thing is known.** Where the evidence is contested, both sides get
   named. Where something is expert consensus rather than proven outcome, it says so.
2. **Never scold.** Not about formula, not about screens, not about staying, not about
   being poor. Every page assumes somebody who loves their child and has run out of room.
3. **Cite it on the page.** Guidance carries the organisation and a live link, on the
   screen it appears on rather than in a footnote nobody reads.
4. **Never tell somebody what to do** on the pages where only they know their situation.
5. **No dashes as punctuation**, anywhere in the copy.

## The stack

- Plain JavaScript, no framework, no bundler
- Firebase for auth, Firestore, App Check, Cloud Storage and AI Logic
- `firestore.rules` and `storage.rules` are the real security boundary. The client is
  convenience; the rules were written first and tested against every way in.
- `functions/` holds the scheduled notification sender. It is not deployed from here.

## Layout

```
index.html              the site, built, do not edit
demo/index.html         the public demo, built
manifest.webmanifest    installable app metadata
sw.js                   service worker, network first on purpose
proto/build.py          the build and all its gates
proto/app.js            every screen
proto/shell.html        component CSS and the workbench
src/data/               content and pure functions
firestore.rules         the actual security boundary
functions/              scheduled notifications, deployed separately
```

## Status

Live, in active development, and not yet marketed. Free, with no advertising and nothing
sold. Built by one person.

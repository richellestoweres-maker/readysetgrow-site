import re, pathlib, datetime

SRC = pathlib.Path('src')
OUT = pathlib.Path('proto')

# ------------------------------------------------------------------
# THE BUILD STAMP
#
# A phone that is still running last week's copy of the app looks
# exactly like a phone that is up to date, right until somebody notices
# their second child is missing. GitHub Pages tells browsers to cache
# index.html for ten minutes and iOS Safari holds a tab far longer than
# that, so the app has to be able to tell.
#
# The same stamp goes two places: a meta tag in the first few hundred
# bytes of the file, and a constant inside the running app. The app can
# then fetch just the head of the file from the server and compare. Same
# stamp, nothing to say. Different stamp, there is a newer version and
# the reload bar appears.
# ------------------------------------------------------------------
BUILD_STAMP = datetime.datetime.now().strftime('%Y-%m-%d %H:%M')

def strip_esm(text, name):
    # react-native import becomes a stub, so theme.js runs unchanged in a browser
    text = text.replace("import { Platform } from 'react-native';", "/* Platform stubbed for the browser prototype */")
    # named exports
    text = re.sub(r'^export\s+const\s+', 'const ', text, flags=re.M)
    text = re.sub(r'^export\s+function\s+', 'function ', text, flags=re.M)
    # export default IDENT;  ->  drop
    text = re.sub(r'^export\s+default\s+[A-Za-z_$][\w$]*\s*;\s*$', '', text, flags=re.M)
    # export default { ... };  ->  keep object under a throwaway name
    text = re.sub(r'^export\s+default\s+\{', 'const _default_%s = {' % name, text, flags=re.M)
    # export { a, b, c };  (possibly multi-line)  ->  drop
    text = re.sub(r'^export\s*\{[^}]*\}\s*;\s*$', '', text, flags=re.M)
    return text

order = [
    ('theme',               SRC/'theme/theme.js'),
    ('age',                 SRC/'utils/age.js'),
    ('stages',              SRC/'data/stages.js'),
    ('supportLenses',       SRC/'data/supportLenses.js'),
    ('lensByAge',           SRC/'data/lensByAge.js'),
    ('milestones',          SRC/'data/milestones.js'),
    ('developmentContent',  SRC/'data/developmentContent.js'),
    ('activities',          SRC/'data/activities.js'),
    ('rightNow',            SRC/'data/rightNow.js'),
    ('sleep',               SRC/'data/sleep.js'),
    ('careTopics',          SRC/'data/careTopics.js'),
    ('routines',            SRC/'data/routines.js'),
    ('affirmations',        SRC/'data/affirmations.js'),
    ('logTypes',            SRC/'data/logTypes.js'),
    ('pregnancy',           SRC/'data/pregnancy.js'),
    ('pregnancyHealth',     SRC/'data/pregnancyHealth.js'),
    ('hospitalBag',         SRC/'data/hospitalBag.js'),
    ('pumping',             SRC/'data/pumping.js'),
    ('feeding',             SRC/'data/feeding.js'),
    ('latchAndTies',        SRC/'data/latchAndTies.js'),
    ('feedingDeep',         SRC/'data/feedingDeep.js'),
    ('emergencySkills',     SRC/'data/emergencySkills.js'),
    ('willow',              SRC/'data/willow.js'),
    ('postpartum',          SRC/'data/postpartum.js'),
    ('communityWisdom',     SRC/'data/communityWisdom.js'),
    ('vaccines',            SRC/'data/vaccines.js'),
    ('checkins',            SRC/'data/checkins.js'),
    ('dailyLift',           SRC/'data/dailyLift.js'),
    ('situation',           SRC/'data/situation.js'),
    ('parentLearn',         SRC/'data/parentLearn.js'),
    ('momNow',              SRC/'data/momNow.js'),
    ('momLogs',             SRC/'data/momLogs.js'),
    ('caretakers',          SRC/'data/caretakers.js'),
    ('encourage',           SRC/'data/encourage.js'),
    ('memories',            SRC/'data/memories.js'),
    ('onboarding',          SRC/'data/onboarding.js'),
    ('nudges',              SRC/'data/nudges.js'),
    ('planFraming',         SRC/'data/planFraming.js'),
    ('feed',                SRC/'data/feed.js'),
    ('fireflies',           SRC/'data/fireflies.js'),
    ('groups',              SRC/'data/groups.js'),
    ('outings',             SRC/'data/outings.js'),
    ('privacy',             SRC/'data/privacy.js'),
    ('sharing',             SRC/'data/sharing.js'),
    ('diapers',             SRC/'data/diapers.js'),
    ('install',             SRC/'data/install.js'),
    ('chores',              SRC/'data/chores.js'),
    ('learning',            SRC/'data/learning.js'),
    ('growth',              SRC/'data/growth.js'),
    ('vaccineRecord',       SRC/'data/vaccineRecord.js'),
    ('notifications',       SRC/'data/notifications.js'),
    ('foryou',              SRC/'data/foryou.js'),
    ('breakingPoint',       SRC/'data/breakingPoint.js'),
    ('support',             SRC/'data/support.js'),
    ('onlineSafety',        SRC/'data/onlineSafety.js'),
    ('growingUp',           SRC/'data/growingUp.js'),
    ('puberty',             SRC/'data/puberty.js'),
    ('consent',             SRC/'data/consent.js'),
    ('expecting',           SRC/'data/expecting.js'),
    ('pregnancyWeeks',      SRC/'data/pregnancyWeeks.js'),
    ('conceive',            SRC/'data/conceive.js'),
    ('induction',           SRC/'data/induction.js'),
    ('birth',               SRC/'data/birth.js'),
    ('eatingTogether',      SRC/'data/eatingTogether.js'),
    ('childSections',       SRC/'data/childSections.js'),
    ('signLanguage',        SRC/'data/signLanguage.js'),
    ('cycle',               SRC/'data/cycle.js'),
    ('cycleLog',            SRC/'data/cycleLog.js'),
    ('sexEd',               SRC/'data/sexEd.js'),
    ('firebaseConfig',      SRC/'data/firebaseConfig.js'),
]

# A data file that exists but is not listed above gets silently left out of
# the bundle, and the first sign is a ReferenceError in a browser console
# long after the build said it succeeded. Fail here instead.
def check_unlisted():
    listed = {path.resolve() for _, path in order}
    missing = sorted(
        p.name for p in (SRC/'data').glob('*.js') if p.resolve() not in listed
    )
    if missing:
        print('DATA FILES NOT IN THE BUNDLE: %s' % ', '.join(missing))
        print('Add them to `order` above, or the prototype will throw at runtime.')
        raise SystemExit(1)

# Every file lands in one shared script scope, so two files exporting the
# same top level name is a hard SyntaxError that takes the whole prototype
# down. Catch it here, by name, rather than in a browser console.
def check_collisions():
    # EVERY top level declaration, not only the exported ones.
    #
    # This used to look at `export const` and `export function` alone,
    # and that gap cost an afternoon. src/utils/age.js has a private
    # `function monthsBetween`, src/data/growth.js later added an
    # exported one with a different signature, and because the bundle is
    # a plain concatenation the second quietly replaced the first. Every
    # age in the app became zero, so every child looked like a newborn.
    # Nothing threw. The gate saw two names it was not looking at.
    #
    # A private name is exactly as dangerous as a public one here,
    # because after the ESM is stripped they all live in the same
    # scope. So all four shapes are collected now.
    owner, bad = {}, []
    for name, path in order:
        text = path.read_text()
        names = set(re.findall(r'^export\s+const\s+([A-Za-z_$][\w$]*)', text, re.M))
        names |= set(re.findall(r'^export\s+function\s+([A-Za-z_$][\w$]*)', text, re.M))
        names |= set(re.findall(r'^const\s+([A-Za-z_$][\w$]*)', text, re.M))
        names |= set(re.findall(r'^function\s+([A-Za-z_$][\w$]*)', text, re.M))
        names |= set(re.findall(r'^let\s+([A-Za-z_$][\w$]*)', text, re.M))
        for n in sorted(names):
            if n in owner:
                bad.append((n, owner[n], name))
            else:
                owner[n] = name
    if bad:
        print('NAME COLLISIONS IN THE BUNDLE:')
        for n, a, b in bad:
            print('  %-30s %s  vs  %s' % (n, a, b))
        raise SystemExit(1)
    return len(owner)

check_unlisted()
top_level_names = check_collisions()

parts = ["const Platform = { select: (o) => o.default !== undefined ? o.default : o.ios };\n",
         "const BUILD_STAMP = '%s';\n" % BUILD_STAMP]
for name, path in order:
    parts.append('\n/* ===== %s ===== */\n' % path.as_posix())
    parts.append(strip_esm(path.read_text(), name))

bundle = ''.join(parts)

# Nothing ESM may survive, or the browser will refuse the whole script
leftovers = [(i+1, l) for i, l in enumerate(bundle.split('\n'))
             if re.match(r'^\s*(export|import)\s', l)]
if leftovers:
    print('LEFTOVER ESM SYNTAX:')
    for i, l in leftovers: print('  line', i, l[:90])
    raise SystemExit(1)

# A typo inside a data file, such as a space in an object key, is a
# SyntaxError that takes the whole page down with a blank screen. The
# ESM check above only looks at line starts, so it sails straight past
# that. Hand the assembled bundle to node and let a real parser decide.
def check_syntax(text, label):
    import subprocess, tempfile, os
    fd, tmp = tempfile.mkstemp(suffix='.js')
    with os.fdopen(fd, 'w') as f:
        f.write(text)
    try:
        r = subprocess.run(['node', '--check', tmp], capture_output=True, text=True)
    except FileNotFoundError:
        print('note     : node not found, skipping the syntax check')
        os.unlink(tmp)
        return
    os.unlink(tmp)
    if r.returncode != 0:
        print('SYNTAX ERROR IN %s:' % label)
        print(r.stderr.strip()[:2000])
        raise SystemExit(1)

check_syntax(bundle, 'the data bundle')

shell = (OUT/'shell.html').read_text()
app   = (OUT/'app.js').read_text()

# A CONSTANT THAT DOES NOT EXIST.
#
# The consent screen shipped for about a minute referring to CON_LINES
# when the data file exports TOLD_LINES. Nothing caught it. It is not a
# collision, it is not a syntax error, and it is not an unlisted file.
# It is a ReferenceError that only fires when somebody opens that one
# tab, which on that screen meant a parent on the worst night of their
# life getting a blank page.
#
# WHAT THIS LOOKS FOR, AND WHY IT IS NARROW
# Names in SHOUTING_CASE *with an underscore*, which is the shape every
# data export in this repo uses: FEEDING_STANCE, CON_LINES, PUB_START.
# The first version of this gate had no underscore rule and flagged
# sixty hex colours, the letters CPR, and the word TOMORROW inside a
# wordmark. A gate that cries wolf gets switched off, so this one only
# looks at the shape that has actually broken.
#
# Quoted strings are stripped first, or every Firebase error code the
# app compares against reads as a missing constant.
def check_constants(bundle_text, app_text):
    def declared(text):
        names = set(re.findall(r'^\s*(?:const|let|var|function)\s+([A-Z][A-Z0-9]*_[A-Z0-9_]*)', text, re.M))
        return names
    defined = declared(bundle_text) | declared(app_text)

    code = re.sub(r'/\*.*?\*/', ' ', app_text, flags=re.S)
    code = re.sub(r'//[^\n]*', ' ', code)
    code = re.sub(r"'(?:[^'\\\n]|\\.)*'", " '' ", code)
    code = re.sub(r'"(?:[^"\\\n]|\\.)*"', ' "" ', code)

    # Regex literals are code, not strings, so the stripping above does
    # not touch them, and the Willow error handling matches on Google's
    # error codes by name. Those three are text inside a pattern, not
    # identifiers, and they are named here rather than loosening the
    # rule for everything.
    code = re.sub(r'/(?:[^/\\\n\[]|\\.|\[(?:[^\]\\]|\\.)*\])+/[gimsuy]*', ' RE ', code)

    used = set(re.findall(r'(?<![\w$.])([A-Z][A-Z0-9]*_[A-Z0-9_]*)(?![\w$])', code))
    missing = sorted(n for n in used if n not in defined)
    if missing:
        print('THESE CONSTANTS ARE USED BUT NEVER DEFINED: %s' % ', '.join(missing))
        print('A name that does not exist throws a ReferenceError the moment that screen renders,')
        print('and nothing else in this build would have noticed.')
        raise SystemExit(1)
    print('constants: %d shouting case names, all of them resolve' % len(used))

check_constants(bundle, app)

def check_sub_tabs(text, label):
    """Every tab strip key must be a key the state proxy knows about.

    subTabs emits data-sub="<key>" and the single handler for all of
    them does state[key] = value. `state` is a live view onto `store`
    for a fixed list of names and an ordinary object for anything
    else, so a key that is not on the list is written to a property
    nothing ever reads. The tab highlights, the screen does not
    change, and nothing throws.

    That shipped. Four screens had dead tabs before anybody noticed,
    because every test set the store key directly instead of clicking
    the tab. This check is cheap and that class of bug is not."""
    # Comments come out first. One of them explains what state[key]
    # does, and a bracket inside prose is enough to send a search for
    # the opening bracket of a list into the middle of a sentence.
    bare = re.sub(r'/\*.*?\*/', ' ', text, flags=re.S)
    bare = re.sub(r'(?m)^\s*//.*$', ' ', bare)

    listed = set()
    for m in re.finditer(r"\]\.forEach\(\(key\)", bare):
        open_at = bare.rfind('[', 0, m.start())
        if open_at == -1:
            continue
        listed |= set(re.findall(r"'([A-Za-z_$][\w$]*)'", bare[open_at:m.start()]))

    # Both spellings: a literal data-sub in markup, and the call to
    # subTabs, whose own markup writes data-sub="${group}" and would
    # otherwise be read as a key called $.
    used = set(re.findall(r"""data-sub=["']([A-Za-z_][\w$]*)["']""", text))
    used |= set(re.findall(r"subTabs\('([A-Za-z_$][\w$]*)'", text))
    missing = sorted(used - listed)
    if missing:
        print('SUB TAB KEYS MISSING FROM THE STATE PROXY IN %s:' % label)
        for m in missing:
            print('  %s  is used by a tab strip but state cannot reach it, so the tab will do nothing' % m)
        raise SystemExit(1)
    return len(used)

sub_tab_keys = check_sub_tabs(app, 'proto/app.js')

def assemble(shell_html):
    return shell_html + '\n<script>\n' + bundle + '\n</script>\n<script>\n' + app + '\n</script>\n'

html = assemble(shell)
(OUT/'ready-set-grow-prototype.html').write_text(html)
print('names    : %d top level, no collisions' % top_level_names)
print('sub tabs : %d strips, every key reachable' % sub_tab_keys)
print('bundle   : %d lines' % bundle.count('\n'))
print('workbench: %d bytes' % len(html))

# ------------------------------------------------------------------
# THE PUBLIC DEMO BUILD
#
# Same bundle, same app, different framing. The workbench masthead and
# the engine readout are written for whoever is building this. A parent
# landing on the website needs neither, so the demo build rewrites that
# copy and hides the readout.
#
# The readout element stays in the DOM rather than being removed,
# because render() writes into it unconditionally and deleting it would
# throw on the first paint.
# ------------------------------------------------------------------

DEMO_SWAPS = [
    ('<h1>Ready Set Grow, <em>running live</em></h1>',
     '<h1>Try <em>Ready Set Grow</em></h1>'),

    ('<p>This is not a mockup. The phone below is driven by the real data files in your repo. Change the birthday or flip a support lens and every screen recalculates.</p>',
     '<p>This is the real app, running in your browser. Put in any birthday and every screen recalculates around that child. Nothing is saved and nothing leaves this page.</p>'),

    ('<p class="hint">Tap around inside the phone. Cards open, milestones are tappable, filters work.</p>',
     '<p class="hint">Tap around inside the phone. Open the Hub for pumping, the fourth trimester and the hospital bag. Open Right Now for the button a parent taps mid crisis.</p>'),

    ('<h2>The child</h2>',
     '<h2>Try a different child</h2>'),

    ('<p class="railnote">Lenses stack. They reorder what surfaces first, and they never hide the guidance to talk with a pediatrician.</p>',
     '<p class="railnote">Lenses stack. They reorder what surfaces first, and they never hide the guidance to talk with a pediatrician. Turn a few on and watch the Hub reorder.</p>'),

    ('<div class="panel">\n        <h2>What the engine computed</h2>',
     '<div class="panel" style="display:none">\n        <h2>What the engine computed</h2>'),

    ('<title>Ready Set Grow Prototype</title>',
     '<title>Ready Set Grow, live demo</title>'),
]

demo_shell = shell
for o, n in DEMO_SWAPS:
    if demo_shell.count(o) != 1:
        print('DEMO SWAP MISSED (%d matches): %s' % (demo_shell.count(o), o[:70]))
        raise SystemExit(1)
    demo_shell = demo_shell.replace(o, n)

demo_html = assemble(demo_shell)
demo_dir = pathlib.Path('demo')
demo_dir.mkdir(parents=True, exist_ok=True)
(demo_dir/'index.html').write_text(demo_html)
print('demo     : %d bytes -> demo/index.html' % len(demo_html))

# ------------------------------------------------------------------
# THE DESKTOP BUILD
#
# The website is the app, not a page about the app, so this build runs
# the same bundle and the same screens with desktop chrome around them:
# the tab bar becomes a sidebar, the child and the lenses live there
# permanently, and the content gets a readable column.
#
# The component CSS is NOT rewritten. It is lifted out of shell.html at
# build time, which is the only way to guarantee that a card, a list row
# and a milestone look the same on both. If someone restyles a card for
# the phone, the desktop build inherits it automatically.
# ------------------------------------------------------------------

def extract_css(shell_html, start_marker, end_marker):
    a = shell_html.index(start_marker)
    b = shell_html.index(end_marker, a)
    return shell_html[a:b]

head = shell[:shell.index('<style>')]          # title and font links

brand_tokens = extract_css(
    shell,
    '/* ---------- BRAND TOKENS',
    '/* ---------- PAGE ---------- */',
)
decorative_css = extract_css(
    shell,
    '/* ---------- THE DECORATIVE LAYER',
    '/* ---------- IN-APP TYPE ---------- */',
)
component_css = extract_css(
    shell,
    '/* ---------- IN-APP TYPE ---------- */',
    '</style>',
)

desktop_chrome = (OUT/'desktop-chrome.html').read_text()

desktop_head = head.replace(
    '<title>Ready Set Grow Prototype</title>',
    '<title>Ready Set Grow</title>\n'
    '<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
    '<meta name="description" content="A parenting companion that answers what is happening '
    'with your child and what you can actually do about it, from pregnancy through eighteen, '
    'on one continuous profile.">\n'
    # Near the top of the file on purpose. The running app asks the
    # server for the first two kilobytes and reads this, rather than
    # pulling a megabyte down to find out whether anything changed.
    '<meta name="rsg-build" content="%s">\n' % BUILD_STAMP
    # Everything an installable app needs. The manifest, the icons and
    # the service worker are real files at the root of the site, not
    # data URLs, because a browser refuses to install from a data URL
    # and flatly refuses to register a worker from one.
    + '<link rel="manifest" href="/manifest.webmanifest">\n'
    '<meta name="theme-color" content="#F7F5EF" media="(prefers-color-scheme:light)">\n'
    '<meta name="theme-color" content="#16180F" media="(prefers-color-scheme:dark)">\n'
    '<meta name="apple-mobile-web-app-capable" content="yes">\n'
    '<meta name="apple-mobile-web-app-status-bar-style" content="default">\n'
    '<meta name="apple-mobile-web-app-title" content="Ready Set Grow">\n'
    '<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n'
    '<link rel="icon" href="/favicon-32.png" sizes="32x32">\n'
    '<link rel="icon" href="/icon-512.png" sizes="512x512">',
)

desktop_shell = (
    desktop_head
    + '<style>\n'
    + brand_tokens
    + decorative_css
    + component_css
    + '</style>\n'
    + desktop_chrome
)

desktop_html = assemble(desktop_shell)
# The repo root IS the website. GitHub Pages serves index.html from here,
# which is why the built file lands beside the source rather than in a
# folder of its own. Nothing in the Pages settings has to change, ever.
pathlib.Path('index.html').write_text(desktop_html)
print('website  : %d bytes -> index.html' % len(desktop_html))
print('build    : %s' % BUILD_STAMP)

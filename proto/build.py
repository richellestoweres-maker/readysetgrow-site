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
    ('emergencySkills',     SRC/'data/emergencySkills.js'),
    ('willow',              SRC/'data/willow.js'),
    ('postpartum',          SRC/'data/postpartum.js'),
    ('communityWisdom',     SRC/'data/communityWisdom.js'),
    ('vaccines',            SRC/'data/vaccines.js'),
    ('cycle',               SRC/'data/cycle.js'),
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
    owner, bad = {}, []
    for name, path in order:
        text = path.read_text()
        names = set(re.findall(r'^export\s+const\s+([A-Za-z_$][\w$]*)', text, re.M))
        names |= set(re.findall(r'^export\s+function\s+([A-Za-z_$][\w$]*)', text, re.M))
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

# Two `function foo` declarations in one scope is legal JavaScript: the
# last one silently wins. That is how the pumping screen ended up
# labelling standard practice as an unstudied parent tip, because an
# older evidenceTag was shadowed by a newer one with different rules.
# Legal, silent, and wrong, so fail on it.
def check_duplicate_functions(text, label):
    import collections
    names = re.findall(r'^function\s+([A-Za-z_$][\w$]*)', text, re.M)
    dupes = sorted(n for n, count in collections.Counter(names).items() if count > 1)
    if dupes:
        print('DUPLICATE TOP LEVEL FUNCTIONS IN %s:' % label)
        for n in dupes:
            print('  %s is declared %d times, only the last one runs' % (n, names.count(n)))
        raise SystemExit(1)

check_syntax(app, 'proto/app.js')
check_duplicate_functions(app, 'proto/app.js')

# A top level const is unreadable until the line that declares it has
# run, so anything declared BELOW the boot block does not exist yet when
# the first screen paints. The failure is a bare ReferenceError into a
# blank page, and it has now happened three times, every time by somebody
# appending a new section to the end of the file without noticing the
# boot block was already there. So the rule is checked rather than
# remembered: boot goes last, and nothing is declared after it.
def check_boot_is_last(text, label):
    lines = text.split('\n')
    boot = None
    for i, l in enumerate(lines):
        if l.strip() == 'loadStore();' and not l.startswith(' '):
            boot = i
    if boot is None:
        print('NO BOOT BLOCK FOUND IN %s' % label)
        raise SystemExit(1)
    bad = [(i + 1, l) for i, l in enumerate(lines[boot:], start=boot)
           if re.match(r'^(const|let|class)\s', l)]
    if bad:
        print('DECLARED AFTER THE BOOT BLOCK IN %s:' % label)
        for i, l in bad:
            print('  line %d  %s' % (i, l[:80]))
        print('These do not exist yet when the first render runs.')
        print('Move the boot block (loadStore/initControls/restoreSession/render)')
        print('back to the very end of the file.')
        raise SystemExit(1)

check_boot_is_last(app, 'proto/app.js')

def assemble(shell_html):
    return shell_html + '\n<script>\n' + bundle + '\n</script>\n<script>\n' + app + '\n</script>\n'

html = assemble(shell)
(OUT/'ready-set-grow-prototype.html').write_text(html)
print('names    : %d top level, no collisions' % top_level_names)
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
    '<meta name="rsg-build" content="%s">' % BUILD_STAMP,
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

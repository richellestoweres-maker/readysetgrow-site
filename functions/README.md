# The part that stays awake

Everything else in Ready Set Grow runs in a browser. A notification cannot,
because the whole point of one is that it arrives when the browser is shut.
So this folder is the only server side code in the project, and it is
deliberately the smallest thing that does the job.

Nothing in the app asks anybody for notification permission until the two
steps below are done. That is on purpose: a website gets one chance to ask a
browser for permission, and a browser that has refused once is very hard to
ask again. Better silent than asking for something that goes nowhere.

## What only you can do

Both of these need to be done by the account owner. Neither can be done from
inside the app.

### 1. Make a web push certificate

1. Open the Firebase console for `ready-set-grow-4ccf7`.
2. Project settings, then the **Cloud Messaging** tab.
3. Under **Web Push certificates**, press **Generate key pair**.
4. Copy the long string it produces. It starts with `B` and is about 88
   characters.

That string is public. It goes in the app bundle the same way the rest of the
Firebase config does, and it authorises nothing on its own.

Paste it into `src/data/notifications.js`:

```js
export const WEB_PUSH_KEY = 'Bxxxxx…';
```

Then run `python3 proto/build.py` and commit `index.html`. The moment that
key is in place, the Notifications row appears in the corner menu and the
button on that screen starts working.

### 2. Put these functions on Firebase

This needs the Firebase command line tool on a real computer. It is three
commands and about ten minutes the first time.

```
npm install -g firebase-tools
firebase login
firebase deploy --only functions --project ready-set-grow-4ccf7
```

Run them from the top of this repository, not from inside `functions/`.

It will ask to enable a couple of Google Cloud services the first time. Say
yes. The project is already on the Blaze plan, which is what these need, and
the free allowance is far larger than this app will use.

## What the three functions do

**hourlyNudges** runs once an hour. For each person who asked for a daily
reminder it works out what time it is where they are, skips them if it is
inside their quiet hours, and sends at the hour they chose. Running hourly is
what makes a per person hour possible without a separate job per timezone.

**onReply** fires when somebody replies to a post, and tells the author.

**onMeToo** fires when somebody sends a me too to a lit firefly. It is the
only notification in the whole app that exists purely for company, and the
only one genuinely worth having at three in the morning.

All three obey quiet hours, including the replies. A message that would land
in somebody's quiet hours is not sent at all rather than sent and hidden,
because a phone that is asleep still buzzes.

## What the server can see

One document per person, `users/{uid}/private/push`. It holds their device
tokens, which kinds of notification they asked for, their quiet hours and
their timezone.

It holds nothing about a child. Not a name, not a birthday, not a log. That
is why the notifications themselves are vague: "Anything left on the chart
today" rather than "Stetson still has to feed the dog". The app fills in the
detail once it opens. It is a slightly worse notification and a much better
privacy position, and for a message whose whole job is to make somebody open
the app, it costs almost nothing.

## Checking it worked

After deploying, the Firebase console under Functions should list all three.
Turn notifications on in the app, then send yourself a test from the console
under Cloud Messaging. If it arrives, the certificate and the service worker
are both right, and the scheduled ones will work too.

## Cost

The scheduled function runs 24 times a day and reads one small document per
person who has notifications on. At any size this app is likely to reach, that
sits inside the free allowance. Cloud Messaging itself is free and has no
per message charge.

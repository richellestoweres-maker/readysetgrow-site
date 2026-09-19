/* READY SET GROW SERVICE WORKER

   This file is what makes the app installable and what makes it open
   when the phone has no signal. It is deliberately small and
   deliberately cautious.

   WHY NETWORK FIRST AND NOT CACHE FIRST
   The usual advice for a service worker is cache first, because it is
   faster. We do not do that here. The app is one big index.html that
   gets rebuilt and re uploaded often, and a stale copy has already
   caused real confusion twice, where a new build was live on the
   server and the phone kept showing the old one. A cache first worker
   would make that permanent instead of temporary. So the page itself
   is always fetched from the network, and the cached copy is only used
   when the network genuinely fails. Offline still works. Stale does
   not happen.

   WHAT IS NEVER TOUCHED
   Anything that is not on our own origin, which means Firebase,
   Google fonts and the AI calls, goes straight past this file. Range
   requests go past too, because the running app uses a range request
   to ask the server for the first few kilobytes of index.html to find
   out whether a newer build exists. If that request were served from
   cache the app could never tell it was out of date, which is the
   exact problem this worker is supposed to help with. */

const CACHE = 'rsg-v1';

/* The small fixed things worth having on hand the moment the app is
   installed, so the first offline open is not a blank screen. */
const PRECACHE = [
  '/',
  '/manifest.webmanifest',
  '/icon-192.png',
  '/icon-512.png',
  '/icon-maskable-512.png',
  '/apple-touch-icon.png',
  '/favicon-32.png',
];

self.addEventListener('install', (ev) => {
  /* Take over straight away rather than waiting for every tab to
     close. There is only ever one tab in practice and waiting means
     a fix does not land until the parent fully quits the app. */
  self.skipWaiting();
  ev.waitUntil(
    caches.open(CACHE).then((c) => Promise.all(
      PRECACHE.map((u) => c.add(u).catch(() => {}))
    ))
  );
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.map((n) => (n === CACHE ? null : caches.delete(n))));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (ev) => {
  if (ev && ev.data === 'skip-waiting') self.skipWaiting();
});

/* ---------------- PUSH ----------------

   The messages that arrive when the app is shut. Firebase normally
   wants its own file called firebase-messaging-sw.js for this, but a
   second service worker on the same scope is a fight nobody wins, so
   the app registers this one with Firebase instead and the raw push
   event is handled here by hand.

   Handled by hand and not through the Firebase SDK on purpose: the
   payload is three strings, the SDK is a hundred kilobytes, and a
   service worker that pulls a hundred kilobytes off the network before
   it can show a notification will sometimes not show one. */
self.addEventListener('push', (ev) => {
  let d = {};
  try { d = ev.data ? ev.data.json() : {}; } catch (err) { d = {}; }
  const n = d.notification || {};
  const data = d.data || {};
  const title = n.title || 'Ready Set Grow';
  const body = n.body || '';
  const url = data.url || n.click_action || '/';

  ev.waitUntil(self.registration.showNotification(title, {
    body: body,
    icon: '/icon-192.png',
    badge: '/favicon-32.png',
    tag: data.tag || n.tag || 'rsg',
    /* Never re alerts for something already on the screen. A lock
       screen with six of these on it is how somebody turns the whole
       feature off. */
    renotify: false,
    data: { url: url },
  }));
});

/* Tapping one. If the app is already open somewhere, that window is
   brought forward and told where to go, rather than a second copy
   being opened next to it. */
self.addEventListener('notificationclick', (ev) => {
  ev.notification.close();
  const url = (ev.notification.data && ev.notification.data.url) || '/';
  ev.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of all) {
      if (c.url.indexOf(self.location.origin) === 0) {
        await c.focus();
        try { c.postMessage({ rsg: 'open', url: url }); } catch (err) {}
        return;
      }
    }
    await self.clients.openWindow(url);
  })());
});

function isPage(req) {
  if (req.mode === 'navigate') return true;
  const a = req.headers.get('accept') || '';
  return req.method === 'GET' && a.indexOf('text/html') !== -1;
}

self.addEventListener('fetch', (ev) => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  if (req.headers.get('range')) return;

  let url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.origin !== self.location.origin) return;

  if (isPage(req)) {
    ev.respondWith((async () => {
      try {
        /* no-store so the browser's own HTTP cache cannot hand back a
           stale build behind our back. */
        const fresh = await fetch(req, { cache: 'no-store' });
        if (fresh && fresh.ok) {
          const copy = fresh.clone();
          caches.open(CACHE).then((c) => c.put('/', copy)).catch(() => {});
        }
        return fresh;
      } catch (err) {
        const hit = await caches.match('/', { ignoreSearch: true });
        if (hit) return hit;
        return new Response(
          '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
          + '<body style="margin:0;display:flex;align-items:center;justify-content:center;'
          + 'min-height:100vh;background:#F7F5EF;color:#3C5435;font:16px/1.5 system-ui,sans-serif">'
          + '<div style="text-align:center;padding:24px"><p style="font-size:19px;margin:0 0 6px">You are offline.</p>'
          + '<p style="margin:0;opacity:.7">Open this again once you have signal.</p></div>',
          { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 503 }
        );
      }
    })());
    return;
  }

  /* Everything else on our origin is an icon or the manifest, which
     change almost never. Serve the cached copy if there is one and
     quietly refresh it in the background. */
  ev.respondWith((async () => {
    const hit = await caches.match(req);
    const net = fetch(req).then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
      }
      return res;
    }).catch(() => null);
    return hit || (await net) || Response.error();
  })());
});

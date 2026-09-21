/**
 * Ready Set Grow: Firebase configuration
 * ------------------------------------------------------------------
 * WHY THIS IS NOT A SECRET
 *
 * Every value below is meant to be public. A Firebase web config ships
 * inside the browser bundle of every Firebase app on the internet, and
 * anyone can read it with view source. It identifies the project, it
 * does not authorize anything.
 *
 * What actually protects the data is two things, and neither is in
 * this file:
 *   1. Firestore security rules, which decide who can read and write
 *      which document. They are in firestore.rules.
 *   2. The authorized domains list in the Firebase console, which
 *      decides which websites are allowed to sign a user in at all.
 *
 * So committing this to a public repo is correct and normal. Hiding it
 * would buy nothing and would break the site.
 */

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCVYO0N_rO8o4GzjDiOwla0FfY4d_7yRG8',
  authDomain: 'ready-set-grow-4ccf7.firebaseapp.com',
  projectId: 'ready-set-grow-4ccf7',
  storageBucket: 'ready-set-grow-4ccf7.firebasestorage.app',
  messagingSenderId: '1035812926259',
  appId: '1:1035812926259:web:b27459d40a7b928bad4446',
};

/* The SDK is loaded from Google's CDN as ES modules. Pinning the version
   means a future SDK release cannot change behavior under the app
   without somebody deciding to move it.

   Moved from 11.0.2 to 12.19.0 for Willow. The firebase-ai module, which
   is what lets the app talk to Gemini without ever holding a key, only
   exists from 12.5 onward. Auth and Firestore are used through the same
   calls in both versions, so the sign in and the syncing are unaffected,
   but this is the one line to put back if either of those ever misbehave
   after a release. */
export const FIREBASE_SDK_VERSION = '12.19.0';

/* ------------------------------------------------------------------
 * APP CHECK
 *
 * App Check is what proves a request came from this website rather than
 * from somebody who read the config above and decided to spend the AI
 * quota. Firebase already enforces it on AI Logic, which is why Willow
 * returns a 401 until this is filled in, and from 2 November 2026 it is
 * required rather than merely enforced by default.
 *
 * The value below is a reCAPTCHA Enterprise SITE key. Site keys are
 * public by design, the same as the API key above: it is the half that
 * goes in the page. The secret half never leaves Google.
 *
 * To get one: Firebase console, App Check, Apps, Register on the web
 * app, choose reCAPTCHA Enterprise, and it walks you through creating
 * the key. Paste it here, rebuild, and Willow starts answering.
 *
 * Leave it empty and the app still works completely. App Check is
 * simply skipped, which means everything except Willow carries on as
 * normal rather than the whole site failing over a missing key.
 * ------------------------------------------------------------------ */
export const RECAPTCHA_SITE_KEY = '6LcNxLktAAAAAF5_BPwH-X375etnffNZnhDmoaud';

export default FIREBASE_CONFIG;

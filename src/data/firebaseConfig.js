/**
 * Ready Set Grow: Firebase configuration
 * ------------------------------------------------------------------
 * WHY THIS IS NOT A SECRET
 *
 * Every value below is meant to be public. A Firebase web config ships
 * inside the browser bundle of every Firebase app on the internet, and
 * anyone can read it with view source. It identifies the project, it
 * does not authorise anything.
 *
 * What actually protects the data is two things, and neither is in
 * this file:
 *   1. Firestore security rules, which decide who can read and write
 *      which document. They are in firestore.rules.
 *   2. The authorised domains list in the Firebase console, which
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
   without somebody deciding to move it. */
export const FIREBASE_SDK_VERSION = '11.0.2';

export default FIREBASE_CONFIG;

/* PUTTING THE APP ON THE HOME SCREEN

   Ready Set Grow is a website that behaves like an app. That is a real
   advantage, because there is nothing to download and nothing to
   update by hand, but it has one honest cost: until somebody puts it
   on their home screen it lives in a browser tab, and a browser tab is
   easy to lose.

   This file is only the words. The part that knows whether a phone can
   be asked, and which phone it is, lives in the app itself, because
   the two answers are different on Android and on iPhone and there is
   no way to write one set of steps that is true for both.

   WHY THE STEPS ARE SPELLED OUT FOR IPHONE
   Android and desktop Chrome hand the browser a real install button,
   which the app can put in front of somebody and which does the work.
   iPhone has never fired that event and almost certainly never will,
   so on an iPhone the only honest thing to do is point at the Share
   button and say exactly which item to look for. Pretending there is a
   button would be worse than saying there is not. */

export const INSTALL_TITLE = 'Put it on your home screen';
export const INSTALL_SUB = 'One tap to open, and it keeps working with no signal.';

export const INSTALL_WHY = [
  'It opens from your home screen like any other app, with its own icon, instead of you having to remember which tab it was in.',
  'It opens full screen, so the address bar and the browser buttons are out of the way and you get the whole phone.',
  'What you have already looked at still opens when you have no signal, which matters in a hospital corridor and in the back of a car.',
  'Your logs are kept on the phone either way, so nothing is lost by not doing this. It is about getting back to the app quickly at three in the morning.',
];

export const INSTALL_IOS = {
  title: 'On an iPhone or iPad',
  note: 'Safari only. Chrome on an iPhone cannot do this, so if you are in Chrome, open readysetgrow-app.com in Safari first.',
  steps: [
    'Tap the Share button at the bottom of Safari, the square with the arrow pointing up out of it.',
    'Scroll down the list until you see Add to Home Screen.',
    'Tap it, then tap Add in the top right corner.',
    'Close Safari. The sprout icon is now on your home screen.',
  ],
};

export const INSTALL_ANDROID = {
  title: 'On an Android phone',
  note: 'Chrome, Samsung Internet and Edge all handle this the same way.',
  steps: [
    'Tap Install below and say yes to the box that appears.',
    'If no box appears, tap the 3 dots in the top right of the browser.',
    'Choose Install app, or Add to Home screen if that is what it says.',
    'The sprout icon is now in your app drawer and on your home screen.',
  ],
};

export const INSTALL_DESKTOP = {
  title: 'On a computer',
  note: 'Chrome and Edge. Safari on a Mac does this from the File menu instead, under Add to Dock.',
  steps: [
    'Tap Install below, or look for the small install icon at the right hand end of the address bar.',
    'Say yes, and the app opens in its own window with no address bar.',
    'It will be in your applications list from then on.',
  ],
};

/* SAID OUT LOUD BECAUSE SOMEBODY WILL ASK

   A parent who installs an app expects it to be able to buzz them. This
   one cannot yet. Saying so here is better than them finding out by
   missing something. */
export const INSTALL_NOTIFY = {
  title: 'About reminders',
  body: [
    'The app does not send you notifications yet. Nothing buzzes, nothing appears on your lock screen, and nothing is waiting for you unless you open it.',
    'That is being worked on. On an iPhone it can only ever work once the app is on your home screen, which is the other reason this page exists.',
    'Until then, the menu in the top corner tells you what is waiting the moment you open the app.',
  ],
};

export const INSTALL_ALREADY = 'You are already running it from your home screen. Nothing more to do.';
export const INSTALL_BANNER = 'Put Ready Set Grow on your home screen so it is one tap away.';

export default INSTALL_TITLE;

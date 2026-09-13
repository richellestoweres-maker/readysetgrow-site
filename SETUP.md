# Running Ready Set Grow on your phone

You do not need to know how to code to do this. It is copy and paste, and it
takes about fifteen minutes the first time.

## Why there is no package.json in this repo

`package.json` lists the exact version of every library the app uses, and those
versions have to match the version of Expo you install. If I guessed those
version numbers, they would almost certainly be wrong by the time you run this,
and you would get errors that are hard to diagnose.

So instead, the commands below create that file for you with the correct
versions. Once you have run them, commit the `package.json` that appears.

## What you need first

1. **Node.js.** Download the LTS version from nodejs.org and install it.
2. **Expo Go on your phone.** Free, in the App Store and Google Play. This is
   what actually runs the app.

Your phone and your computer need to be on the same wifi.

## Step by step

Open a terminal. On Windows, press the Start key, type `powershell`, press Enter.

**1. Create the project.** Run this and press Enter at any prompts:

```
npx create-expo-app@latest ready-set-grow-app --template blank
```

**2. Go into the folder it made:**

```
cd ready-set-grow-app
```

**3. Install the extra libraries.** One long command, paste it all at once:

```
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context @react-native-async-storage/async-storage react-native-svg expo-font expo-splash-screen @expo-google-fonts/playfair-display @expo-google-fonts/inter @expo-google-fonts/caveat
```

The last few are the fonts: Playfair Display for headings, Inter for body
text, and Caveat for the handwritten phrases. If they fail to download the app
still runs, it just falls back to your phone's built in fonts.

`npx expo install` picks versions that match your Expo version, which is why we
use it instead of a fixed list.

**4. Copy in the app files.** Download this repo (green Code button, then
Download ZIP), unzip it, and copy these over into `ready-set-grow-app`,
replacing what is already there:

- `App.js`
- the whole `src` folder
- `app.json`
- `babel.config.js`

Do not copy the `prototype` folder. It is a separate browser preview and the app
does not use it.

**5. Start it:**

```
npx expo start
```

A QR code appears. On iPhone open the Camera app and point it at the QR code. On
Android open Expo Go and scan it from there. The app loads on your phone.

## While you are working

Save a file and the app reloads on your phone by itself. Press `r` in the
terminal to force a reload. Press `Ctrl` and `C` to stop it.

## If something goes wrong

- **QR code will not connect.** Both devices on the same wifi. If your network
  blocks it, run `npx expo start --tunnel` instead, which is slower but works
  almost anywhere.
- **Red error screen mentioning a module.** A library did not install. Rerun the
  command from step 3.
- **Anything else.** Screenshot the whole error and send it. The message usually
  names the file and the line.

# expo_native_web_starter

A barebones starter to build **cross-platform UI** with **Expo + React Native + React Native Web**.

One codebase.
Runs on **iOS, Android, and Web**.
Zero native config until you actually need it.

This starter is intentionally minimal. It is meant for building:

* UI libraries
* design systems
* cross-platform apps

## Features

* Expo powered React Native
* Single shared `App.tsx`
* Runs on iOS, Android, and Web
* Clean project structure
* Works in Expo Go and with native builds

## Requirements

* Node.js
* npm or yarn
* Expo CLI

  ```
  npm install -g expo
  ```

## Install

```bash
npm install
```

or

```bash
yarn
```

## Rename the Project

This template ships with the default name:

```
expo_native_web_starter
```

Since this is an **Expo project**, you do NOT use `react-native-rename`.

Instead, rename through Expo config.

### Step 1: Edit `app.json` or `app.config.ts`

Change:

```json
{
  "expo": {
    "name": "Expo Native Web Starter",
    "slug": "expo-native-web-starter",
    "scheme": "starter",
    "ios": {
      "bundleIdentifier": "com.yourname.starter"
    },
    "android": {
      "package": "com.yourname.starter"
    }
  }
}
```

### Step 2: Regenerate native projects

```bash
npx expo prebuild --clean
```

This recreates `ios/` and `android/` with the new name and IDs applied correctly.


### Step 3 (Optional): Rename the folder

This is just cosmetic:

```bash
mv expo_native_web_starter MyApp
```

Expo does not care about the folder name. Only the config.

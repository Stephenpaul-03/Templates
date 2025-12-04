# native-web-starter

A barebones starter boilerplate to build cross-platform UI with **React Native + React Native Web**. No Expo. No storybook yet. Pure native app that runs on iOS, Android and Web using a single `App.tsx`.

This starter is intentionally minimal. Good for building component libraries, design systems, and RN+Web UI.


## Features

* React Native running on mobile (iOS + Android)
* React Native Web support using Webpack
* Single codebase across platforms
* Clean minimal App setup

## Run on Android

Make sure an emulator is running or a device connected.

```
npx react-native run-android
```

## Run on iOS

Xcode required (macOS only)

```
cd ios
pod install
cd ..
npx react-native run-ios
```

Or open `ios/*.xcworkspace` manually in Xcode and press run.

## Run on Web

```
npm run web
```

This starts webpack dev server at `http://localhost:3000`.

---

## Rename the project

This template comes with default name `native-web-starter`.

To rename to your own project name (example: `MyApp`):

1. Install rename tool

```
npm install -g react-native-rename
```

or locally

```
npm install react-native-rename --save-dev
```

2. Run rename

```
npx react-native-rename "MyApp"
```

3. Reinstall pods after renaming (iOS only)

```
cd ios && pod install && cd ..
```

4. Run project again on platforms.

---

## Requirements

* Node.js and npm/yarn
* Xcode for iOS
* Android Studio for Android
* Webpack for web build
* CocoaPods (iOS)
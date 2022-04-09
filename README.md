# React Native Test Project

This project aims to be a answer for the [React Native Test](./teste_react_native.md).

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [redux-tookit](https://redux-toolkit.js.org/) for state management.
- [redux-persist](https://github.com/rt2zz/redux-persist) as persistance layer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) to dispatch asynchronous actions.
- [styled-components](https://styled-components.com/) to manage app styles.
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/) to manage native storage.

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside the application.
  - `assets`: Asset folder to store all images, vectors, etc (expose the combined result using its `index.js`).
  - `components`: Folder to store any common component that you use through the app (such as a generic button)
  - `screens`: Folder that contains all the application screens/features.
    - `index.js`: Main component that starts the whole app.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.tsx`
      - `Screen.styles.tsx`
      - `types.ts`
  - `store`: Folder to put all redux related code.
    - `actions`: This folder contains all actions that can be dispatched to redux.
    - `reducers`: This folder should have all the reducers, and expose the combined result using its `index.js`
    - `hooks.tsx`: Typed redux hooks for global use.
    - `rootReducer.tsx`: combineReducers returning rootReducer.
    - `index.tsx`: Main redux/redux-persist settings.
    - `types.ts`
  - `baseStyles.tsx`: Global theme constants.
  - `index.tsx`: Entry point of the application as per React-Native standards.

## Setup environments

### Getting started

- First steps after cloning the repository:
- Run `yarn` to download dependencies
- Go to iOS folter through `cd/ios`
- Run `pod install` or `pod install --repo-update` to donwload CocoaPods dependencies

After those steps you are good to go!

### Using scripts from console

This project doesn't have enviroment files implemented, only DEVELOPMENT SCRIPTS are available

DEV: `yarn ios` or `yarn android`

---
sidebar_position: 3
title: Dependencies ans scripts
---
## Dependencies

This repository relies on dependencies which are needed in day-to-day development.

Every dependency is provided with types or in case if there are no types it implements in [Types](./types.md).

The versions are updating manually and regularly with new releases.

Build primarily with
- [React Native](https://reactnative.dev) `0.66.1`
- [React Native Navigation](https://wix.github.io/react-native-navigation/docs/before-you-start/) `7.23.1`
- [Redux Toolkit](https://redux-toolkit.js.org) `1.6.2`
- [TypeScript](https://www.typescriptlang.org) `4.4.3`

Includes next components:
- [Date time picker](https://github.com/react-native-datetimepicker/datetimepicker) `3.5.2`
- [Localization](https://github.com/stefalda/ReactNativeLocalization) `2.1.7`
- [Orientation locker](https://github.com/wonday/react-native-orientation-locker) `1.3.1`
- [Permissions](https://github.com/zoontek/react-native-permissions) `3.0.5`
- [Config](https://github.com/luggit/react-native-config) `1.4.4`
- [Fast image](https://github.com/DylanVann/react-native-fast-image) `8.5.11`
- [Image crop picker](https://github.com/ivpusic/react-native-image-crop-picker) `0.36.4`
- [Snap carousel](https://github.com/meliorence/react-native-snap-carousel) `3.9.1`
- [Vector icons](https://github.com/oblador/react-native-vector-icons) `8.1.0`
- [SF Symbols](https://github.com/birkir/react-native-sfsymbols) `1.2.0`
- [In-app review](https://github.com/MinaSamir11/react-native-in-app-review) `3.2.3`
- [Size matters](https://github.com/nirsky/react-native-size-matters) `0.4.0`
- [Masked text](https://github.com/benhurott/react-native-masked-text) `1.13.0`
- [DayJS](https://github.com/iamkun/dayjs/) `1.10.7`
- [Net info](https://github.com/react-native-netinfo/react-native-netinfo) `6.0.2`
- [Share](https://github.com/react-native-share/react-native-share) `7.1.2`
- [Reanimated](https://github.com/software-mansion/react-native-reanimated) `2.3.0-beta.2`

Testing made with:
- [Jest](https://github.com/facebook/jest) `27.0.6`
- [Detox](https://github.com/wix/Detox) `18.22.2`
- [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/) `5.3.25`

Code quality covered with:
- [ESLint](https://github.com/eslint/eslint) `8.0.1`
- [ESLint Config React Strong](https://github.com/svbutko/eslint-config-react-strong) `2.0.0`
- [Husky](https://github.com/typicode/husky) `7.0.2`
- [Prettier](https://github.com/prettier/prettier) `2.4.1`
- [Lint staged](https://github.com/okonet/lint-staged) `11.2.3`

It also includes other small or utility components.

## Scripts

Most of the needed scripts are here to help with your development process without using terminal:

### React Native specific
- `start` - starts Metro bundler
- `start-reset-cache` - starts Metro bundler with resetting cache

### Project openers
- `open:xcode` - opens Xcode with workspace project
- `open:android-studio` - opens Android Studio with Android project

### Android specific
- `android:run` - compiles and runs your application on Android devices or emulators WITHOUT starting Metro
- `android:run+start` - compiles and runs your application on Android devices or emulators AND if successful starts Metro
- `android:build-release-bundle-nix` - builds Android release bundle on Linux/macOS
- `android:build-release-apk-nix` - builds Android release APK on Linux/macOS
- `android:clean-nix` - cleans Android builds on Linux/macOS
- `android:build-release-bundle-win` - builds Android release bundle on Windows
- `android:build-release-apk-win` - builds Android release APK on Windows
- `android:clean-win` - cleans Android builds on Windows
- `android:bundle` - builds Android bundle with sourcemaps to visualize its content
- `android:bundle-visualizer` - visualizes contents of Android bundle (total, components, packages size)

### iOS specific
- `ios:run` - compiles and runs your application on iOS devices or emulators WITHOUT starting Metro
- `ios:bundle-visualizer` - visualizes contents of iOS bundle (total, components, packages size)

The rest of the actions are done in XCode by opening the project's workspace.

### Environment specific
- `environment:development-nix` - sets development environment on Linux/macOS
- `environment:test-nix` - sets test environment on Linux/macOS
- `environment:staging-nix` - sets staging environment on Linux/macOS
- `environment:production-nix` - sets production environment on Linux/macOS
- `environment:development-win` - sets development environment on Windows
- `environment:test-win` - sets test environment on Windows
- `environment:staging-win` - sets staging environment on Windows
- `environment:production-win` - sets production environment on Windows

### Version specific
- `version:major` - updates major version of iOS, Android and package.json
- `version:minor` - updates minor version of iOS, Android and package.json
- `version:patch` - updates patch version of iOS, Android and package.json

### Test specific
- `ts` - checks TypeScript files for errors
- `tests` - runs Jest tests
- `tests:watch` - runs Jest tests with watcher enabled
- `tests:coverage` - creates HTML and console representation of Jest test coverage percentage
- `e2e:build-android-debug` - builds Android debug build for Detox tests
- `e2e:build-android-release` - builds Android release build for Detox tests
- `e2e:android-debug` - runs Detox tests on Android device or emulator of debug build
- `e2e:android-release` - runs Detox tests on Android device or emulator of release build
- `e2e:build-ios-debug` - builds iOS debug build for Detox tests
- `e2e:build-ios-release` - builds iOS release build for Detox tests
- `e2e:ios-debug` - runs Detox tests on iOS device or emulator of debug build
- `e2e:ios-release` - runs Detox tests on iOS device or emulator of release build
- `eslint:run` - runs ESLint on JSX, TSX and TS files to check for rules error and warnings
- `eslint:fix` - runs ESLint on JSX, TSX and TS files and tries to automatically fix errors and warnings

### Utility specific
- `postinstall` - uses `patch-package` to apply changes made with `patch-package` after `npm install`, check [Patches](./patches.md) for more
- `postversion`- utilizes `react-native-version` to increment version of iOS, Android and package.json
- `check-dependencies-updates` - checks version updates of your dependencies so that you could manually check changes and update what's needed
- `check-pods-updates` - checks iOS pods updates
- `generate-image-resources` - generates image resources based on images from selected folder, check [Images](../docs/resources/images.md) for more
- `prepare` - if you have a git repository then it prepares scripts `pre-commit` and `post-merge` from package.json




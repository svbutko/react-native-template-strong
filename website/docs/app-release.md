---
sidebar_position: 22
title: App release
---
## Preparations

Make sure that
- ESLint and TypeScript have no errors and warnings
- All tests are running and not failing
- API is reachable and working
- Components and pages are rendering correctly on different devices (smartphones, tablets), different screen sizes (iPhone X, iPhone SE, iPad, Pixel 5, Android Tablet), both platforms (iOS, Android)
- App icons and splash screen are set up

## Common start
- Select production environment (`npm run environment:production-nix` on macOS/Linux or `npm run environment:production-win` on Windows)
- Bump the update version (e.g. `npm run version:major` for major bump)

## Android
- Build the release bundle (`npm android:build-release-bundle-nix` on macOS/Linux or `npm run android:build-release-bundle-win` on Windows)
- Test that it works on one of your devices
- If everything is fine, then create an update in [Google Play Market Developer Console](https://play.google.com/console/)

## iOS
- Open `.xcworkspace` file in XCode
- Select `Any iOS device (arm64)` in devices
- Select `Product` -> `Archive`
- Follow the instructions after the archive task will be completed

## After all
- Commit updated changes of iOS, Android and package.json versions
- Create a tag at this commit with version name, so it would be easier to rollback.

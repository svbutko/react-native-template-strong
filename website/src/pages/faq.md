---
title: FAQ
---

# FAQ

## Why react-native-navigation and not react-navigation?
There are several reasons:
- Actually native
- More native presets/components out of the box
- Performance is better
- RAM consumption is less significant (especially on old devices)
- No need to include lots of additional dependencies to achieve the platform-like screens

## Why react-native-localization and not i18n?
My primary reason is how i18n handles translation strings in combination with TypeScript.
I can set a string in one language and abandon other languages, or I can use non-existent translation string,
and I won't receive any errors.

Additionally, it offers way too many features which aren't needed while developing mobile apps.

While react-native-localization brings all what's needed and handles the before mentioned issue.

## Why Redux and not MobX/Context/Apollo?
I believe that redux is the best choice as state management for every application size, 
it's the most mature one, has straightforward set of rules, gives almost full control of what's happening. 
With RTK it became even easier to work with it.

## Why TypeScript?
TypeScript gives better reliability, easy to refactor, read, debug, fixes many errors before seeing them in runtime.

## Why not Expo?
Not every dependency works with Expo, often times there's a need to change something in native code and that will be painful.

## Why not use Tailwind for styles?
I believe creating styles with StyleSheet is more than enough, and if used properly there won't be any need to use any other frameworks.

## Why minimum iOS 13 is minimum version?
I follow the 3 latest major versions approach when working with iOS, since most of the users update quickly.
Statistics to provide detailed numbers: [statcounter](https://gs.statcounter.com/os-version-market-share/ios/mobile-tablet/worldwide)

## Does it support macOS/Windows/Web/tvOS?
No, it doesn't, but I have plans to work with macOS, Windows and tvOS.
At this moment it works with iOS, iPadOS, Android and can work with Android TV (not tested).

## Why NPM and not Yarn?
NPM updates regularly and improves in terms of speed and quality, while Yarn has different versions with major differences.

## Why there's no UI library?
There are lots of UI libraries out there and there are different opinions/likings, so you can install the one you like.
I, personally don't like the idea of using UI libraries since it's harder to update them,
and sometimes they are hard to modify to one's likings, as for me, it makes more sense to create UI components from the ground.

## Why every dependency in package.json has stable version?
To preserve the current state and neglect issues with new versions,
I keep all dependencies stable and when there are updates I update manually (even patch fixes) to see what has been changed.









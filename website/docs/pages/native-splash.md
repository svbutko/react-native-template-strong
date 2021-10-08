---
sidebar_position: 1
title: Native splash
---

## Content

Native splash at this moment shows the most common pattern for this kind of screens:

It shows a logo in the middle of the screen with theme background on iOS and gradient on Android.

## Changing logos

To change the logo you have to do the following:

### iOS

- Create your icons with appropriate sizes (1x, 2x, 3x)
- Replace them in `ios/YourProjectName/images.xcassets` with the same name (`splash.png`)
- Check the result in XCode by opening `LaunchScreen`

### Android

- Create your icon with appropriate size (xxhdpi)
- Replace it in `android/app/src/main/res/drawable-xxhdpi` with the same name (`splash.png`)
- Your gradient and splash files are located in `android/app/src/main/res/drawable`, you can also change them if needed

:::tip Tip
Don't use text on your logos on both platforms, try to place just logos.
:::


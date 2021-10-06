---
sidebar_position: 9
title: Common constants
---
## Content

This is a set of constants which are useful throughout the development process, rather than creating them every time, 
they are being created once and stored and exported from [commonConstants.ts](https://github.com/svbutko/react-native-template-strong/blob/main/template/src/core/theme/commonConsts.ts)

## Platform dependant

Rather than always importing `Device` or `Platform` and checking whether it's iOS or Android or some versions, 
it's easier to have this checks

- `isIos`
- `isIphoneX`
- `isIpad`
- `isTablet`
- `isAndroid`
- `isAndroidLollipop`
- `isAndroid11AndHigher`

## Dimensions dependant

Most of the time the apps are made for smartphones and orientation is almost always locked to portrait,
so instead of checking dimensions all the time it's easier to use next constants:

- `windowWidth`
- `windowHeight` - on Android it also subtracts `StatusBar.currentHeight` from height

In cases when it comes to tablets where all the orientations are unlocked or in other cases where orientation is not locked,
there are next two constants:

- `maxWindowDimension`
- `minWindowDimension`

They basically compare (max/min) `windowHeight` and `windowWidth` on start so that you could use them rather than always calling `Dimensions`.

## Hit slops

Some basic predefined hit slops, you can change them for your needs:

- `hitSlop`
- `hitSlopBig`

## Time dependant

- `minimalLegalAge` - subtracts 16 years from current time
- `maximalAge` - subtracts 100 years from current time 


## Other

- `hairlineWidth` - contains the result of `StyleSheet.hairlineWidth`
- `pixelRatio` - contains the result of `PixelRatio.get()`




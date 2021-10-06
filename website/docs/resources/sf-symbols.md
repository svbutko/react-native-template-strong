---
sidebar_position: 3
title: SF Symbols
---
## Content

The preferable way to show icons on iOS is to use [SF Symbols](https://developer.apple.com/sf-symbols/).

## Browsing icons

All icons are stored as enum with names in `/resources/symbols/sfSymbols`. It contains mostly all the 3 100 icons.

To take a look at them without using them you can open [SF Symbols App](https://developer.apple.com/sf-symbols/) on macOS.

## Using icons in navigation

### BottomTab

`react-native-navigation` currently supports SF Symbols as icon in `bottomTab`:

```typescript jsx
Main.options = {
  bottomTab: {
    sfSymbol: SFSymbols["app.gift"],
    sfSelectedSymbol: SFSymbols["app.gift.fill"],
  },
};
```

It also applies same effect properties as `Icon` ones, like `selectedIconColor` or `iconColor`, see more properties [here](https://wix.github.io/react-native-navigation/api/options-bottomTab#iconwidth).

### BackButton

SF Symbol can also be applied directly as `topBar`'s `backButton` like so:
```typescript jsx
Main.options = {
  topBar: {
    backButton: {
      sfSymbol: SFSymbols["arrow.backward.circle"],
    },
  },
};
```

## Using icons as components

Usage of SF Symbols as components made possible by [react-native-sfsymbols](https://github.com/birkir/react-native-sfsymbols).

You can use it directly like so:

```typescript jsx
<SFSymbol 
    name={SFSymbol["thermometer.sun.fill"]}
    size={16} 
    multicolor={false}
/>
```

But it will be shown only on iOS, which is not desired.

To work with both iOS and Android, there's [IconPlatform](../components/icon-platform.md) component,
which shows SF Symbols on iOS and Material Icons on Android, it works next way:

```typescript jsx
<IconPlatform 
    iosName={SFSymbols["thermometer.sun.fill"]}
    androidName={"star-rate"}
    size={32} 
    resizeMode={"contain"} 
    style={styles.clauseIcon}
/>
```

---
sidebar_position: 4
title: Vector icons
---
## Content

The preferable way to show icons on Android is to use [Material Icons](https://fonts.google.com/icons).

Usage of icons in the application is made possible by [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Browsing icons

To take a look at them without using them you can open [Material Icons](https://fonts.google.com/icons) and browse through them.

Find an icon which suits your need and use its name.

## Using icons in navigation

To access icons in navigation you need to get them as PNG image/source asset.

It can be achieved next way:

```typescript jsx
import Icon from "react-native-vector-icons/MaterialIcons";

Main.options = {
  bottomTab: {
    icon: Icon.getImageSourceSync("person", 20),
  },
};
```

To learn more check this [descriptions](https://github.com/oblador/react-native-vector-icons#usage-as-png-imagesource-object).

## Using icons as components

You can use it directly like so:

```typescript jsx
import Icon from "react-native-vector-icons/MaterialIcons";

<Icon name={"person"} size={30} />
```

But it will be shown only on Android, which is not desired.

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

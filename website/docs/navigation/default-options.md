---
sidebar_position: 1
title: Default options
---

## Content
[Default options](https://wix.github.io/react-native-navigation/api/options-api#setdefaultoptions)

Here we are setting default options which will be applied to every navigation component which will be created in application.

So rather than changing lots of different options in pages, modals, overlays, tabs, it's more convenient to do it once
and then apply needed changes to certain navigation components.

These options are being applied ad the application's initialization:
```typescript jsx
export function initializeApp() {
    ...
  setDefaultOptions();
    ...
}
```

## Options
The options which are provided with template are very close to the stock iOS and Android applications.

### iOS
Bars are translucent, in stacks the large title is present and tint color is `systemBlue`.

### Android
Bars' background is set to follow the Material's primary color while `light` theme is on, and they are dark when `dark` theme is on.

Bottom bar animation is present.

Status bar changes its color accordingly to theme.

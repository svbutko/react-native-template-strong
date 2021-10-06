---
sidebar_position: 2
title: Default options
---

## Content
[Default options](https://wix.github.io/react-native-navigation/api/options-api#setdefaultoptions) are being set in `src/navigation/navigation.ts`:

```typescript
export function setDefaultOptions() {
  Navigation.setDefaultOptions({
    animations: {
      setRoot: {
        waitForRender: true,
      },
      setStackRoot: {
        waitForRender: true,
      },
    },
    layout: {
      componentBackgroundColor: platformNativeColor(PlatformColorsIOS.systemBackground, PlatformColorsAndroid.background),
    },
    topBar: {
      animate: true,
      drawBehind: !isAndroid,
      background: {
        translucent: true,
        color: platformNativeColor(undefined, PlatformColorsAndroid.navigation),
      },
      title: {
        color: platformNativeColor(undefined, PlatformColorsAndroid.onPrimaryText),
      },
      largeTitle: {
        visible: false,
      },
      scrollEdgeAppearance: {
        active: true,
        noBorder: true,
      },
      searchBar: {
        visible: false,
        hideOnScroll: true,
        hideTopBarOnFocus: true,
        obscuresBackgroundDuringPresentation: true,
      },
      hideNavBarOnFocusSearchBar: true,
      searchBarHiddenWhenScrolling: true,
      searchBarPlaceholder: localization.common.search,
      noBorder: false,
    },
    bottomTabs: {
      animate: true,
      hideShadow: false,
      translucent: true,
      animateTabSelection: true,
      preferLargeIcons: false,
      tabsAttachMode: "together",
      backgroundColor: platformNativeColor(undefined, PlatformColorsAndroid.navigation),
      ...Platform.select({
        android: {
          translucent: false,
          borderWidth: 1,
          borderColor: platformNativeColor(undefined, PlatformColorsAndroid.divider),
        },
      }),
    },
    bottomTab: {
      selectedTextColor: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.onPrimaryText),
      selectedIconColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.onPrimaryText),
      textColor: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.onPrimaryTextOpacity),
      iconColor: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.onPrimaryTextOpacity),
    },
    statusBar: {
      backgroundColor: platformNativeColor(undefined, PlatformColorsAndroid.statusbar),
      visible: true,
    },
  });
}
```

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

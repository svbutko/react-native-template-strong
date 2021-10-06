---
sidebar_position: 2
title: Native colors
---
## Content

Native colors are used to work with `dark` and `light` themes of your application.

There are some predefined (Android) and built-in (iOS) color names which are listed as enums in `src/core/theme/colors.ts`

It's highly recommended to use native colors opposed to JS defined ones to present better user experience with `dark` and `light` themes

## Android

### Content

There are two sets of colors defined in native resources:
- `/android/app/src/main/res/values/colors.xml` - for light theme
- `/android/app/src/main/res/values-night/colors.xml` - for dark theme

They look like this (light theme colors e.g.):

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <item name="primary" type="color">#61DAFB</item>
    <item name="primaryDark" type="color">#2596BE</item>
    <item name="primaryLight" type="color">#B3E5FC</item>
    <item name="background" type="color">#FFFFFF</item>
    <item name="primaryText" type="color">#212121</item>
    <item name="primaryTextOpacity" type="color">#CC212121</item>
    <item name="secondaryText" type="color">#757575</item>
    <item name="onPrimaryText" type="color">#FFFFFF</item>
    <item name="onPrimaryTextOpacity" type="color">#CCFFFFFF</item>
    <item name="divider" type="color">#BDBDBD</item>
    <item name="navigation" type="color">#61DAFB</item>
    <item name="statusbar" type="color">#0288D1</item>
</resources>

```

For both themes this colors share the same set of items (names) but can have different color values.

In React Native they are represented as `PlatformColorsAndroid` enum in `src/core/theme/colors.ts`:

```typescript
export enum PlatformColorsAndroid {
  primary = "@color/primary",
  primaryDark = "@color/primaryDark",
  primaryLight = "@color/primaryLight",
  background = "@color/background",
  primaryText = "@color/primaryText",
  primaryTextOpacity = "@color/primaryTextOpacity",
  secondaryText = "@color/secondaryText",
  onPrimaryText = "@color/onPrimaryText",
  onPrimaryTextOpacity = "@color/onPrimaryTextOpacity",
  divider = "@color/divider",
  navigation = "@color/navigation",
  statusbar = "@color/statusbar",
}
```

### Usage

It's not enough to directly use this colors sam way as ones from `Colors` enum.

You can use them in styles in multiple ways:

1) Using `PlatformColor` in mix with `Platform.select`
```typescript
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        backgroundColor: PlatformColor(PlatformColorsAndroid.background),
      } as ViewStyle,
    }),
  } as ViewStyle,
});
```

2) Using [platformNativeColor](../helpers/color-helpers.md) or [platformMixedColor](../helpers/color-helpers.md):
```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: platformNativeColor(PlatformColorsIOS.systemBackground, PlatformColorsAndroid.background),
  } as ViewStyle,
});
```

3) To assign native colors in navigation, assign them directly, not separately:

:::danger Incorrect
```typescript
    topBar: {
      background: {
        color: {
          light: PlatformColor(PlatformColorsAndroid.navigation),
          darK: PlatformColor(PlatformColorsAndroid.navigation),
        },
      },
    }
```
:::

:::tip Correct
```typescript
    topBar: {
        background: {
            color: platformNativeColor(PlatformColorsIOS.systemBackground, PlatformColorsAndroid.navigation),
        },
    }
```
:::

### Add colors

To add more native colors:
- Create `item` in both `/android/app/src/main/res/values/colors.xml` and `/android/app/src/main/res/values-night/colors.xml`
with the same name
- Add your new color name in `PlatformColorsAndroid`
- Rebuild your application

### Native theme constants

There are some native theme constants which you can change.
These constants change things like `tint`, `status bar` colors on native side.

They are located in:
- `/android/app/src/main/res/values/styles.xml` - for light theme
- `/android/app/src/main/res/values-night/styles.xml` - for dark theme

And look like this:

```xml
<?xml version="1.0" encoding="utf-8"?>

<resources>
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:windowBackground">@color/background</item>
        <item name="android:statusBarColor">@color/statusbar</item>
        <item name="colorAccent">@color/primary</item>
    </style>

    <style name="SplashTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <item name="android:windowBackground">@drawable/splash_background</item>
        <item name="android:statusBarColor">@color/statusbar</item>
    </style>
</resources>
```

Our app's theme is defined within style `AppTheme`.

You can see that there's a `colorAccent` assigned to our `@color/primary`, this change can be seen in dialogs, alerts and other components.

Same goes with `android:statusBarColor` which sets the color of `status bar`.

To check other constant names you can adjust, check Android related resources regarding your components which you'd like to modify.

## iOS

### Content

iOS already has some predefined colors for us, you can check how they look and change with `dark` and `light` theme in Storybook's colors page.

### Usage

It's not enough to directly use this colors sam way as ones from `Colors` enum.

You can use them in styles in multiple ways:

1) Using `PlatformColor` in mix with `Platform.select`
```typescript
const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      iOS: {
        backgroundColor: PlatformColor(PlatformColorsIOS.systemBackground),
      } as ViewStyle,
    }),
  } as ViewStyle,
});
```

2) Using [platformNativeColor](../helpers/color-helpers.md) or [platformMixedColor](../helpers/color-helpers.md):
```typescript
const styles = StyleSheet.create({
  container: {
    backgroundColor: platformNativeColor(PlatformColorsIOS.systemBackground, PlatformColorsAndroid.background),
  } as ViewStyle,
});
```

3) To assign native colors in navigation, assign them directly, not separately:

:::danger Incorrect
```typescript
    topBar: {
      background: {
        color: {
          light: PlatformColor(PlatformColorsIOS.systemBackground),
          darK: PlatformColor(PlatformColorsIOS.systemBackground),
        },
      },
    }
```
:::

:::tip Correct
```typescript
    topBar: {
        background: {
            color: platformNativeColor(PlatformColorsIOS.systemBackground, PlatformColorsAndroid.navigation),
        },
    }
```
:::

### Add colors

At this moment you can't add your colors natively, but you can define your own colors in a separate enum and use [DynamicColorIOS](https://reactnative.dev/docs/dynamiccolorios).

But it would be better to stick to built-in colors to provide better user experience for users.

### Native theme constants

You can define `AccentColor` of your application for both `light` and `dark` themes in XCode:
- Open .xcworkspace file
- Navigate to Images.xcassets where you'll see your app and splash icons and `AccentColor` which you can change 

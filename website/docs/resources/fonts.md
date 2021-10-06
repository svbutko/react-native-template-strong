---
sidebar_position: 1
title: Fonts
---
## Content

Currently, there is only a single font which is used, and it's `system`.
It's a system font which is used on device.

## Accessing fonts

To access a font in your code, you need to use `fonts.ts`:

```typescript
export const Fonts = {
  system: "System",
};
```

To use it you simply can create a style and use it like this:

```typescript jsx
const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.system
  } as TextStyle
});
```

There's also a default combination of font styles which is stored in `commonStyles`:
```typescript
export const CommonStyles = StyleSheet.create({
    normalText: {
        fontFamily: Fonts.system,
        fontSize: CommonSizes.font.medium,
        lineHeight: CommonSizes.lineHeight.medium,
        color: platformNativeColor(PlatformColorsIOS.label, PlatformColorsAndroid.primaryText),
    } as TextStyle,
});
```
To use it you can simply call it like this:

```typescript jsx
      <Text style={CommonStyles.normalText} numberOfLines={1}>
        {localization.common.loading}
      </Text>
```

## Adding fonts

To add your custom fonts you need to do the following:
- Place your `.ttf` or `.otf` font/s in `resources/fonts` folder
- Run `react-native link`, it will add your fonts to native resources folders
- Add your font inside `Fonts`
- Rebuild your application
- Use your newly added fonts

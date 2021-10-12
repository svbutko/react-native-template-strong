---
sidebar_position: 7
title: TouchablePlatform
---

## Content
Platform-friendly touchable button which relies on `Pressable`.
Used in `PrimaryButton` and `RadioButton`.

## Params
Extends `PressableProps` and additionally adds next properties

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| style           | `ViewStyle or ViewStyle[]`      | False          | Undefined             | Style of button
| highlightColor  | `string or OpaqueColorValue`    | False          | `PlatformColorsIOS.quaternarySystemFill` on iOS and `PlatformColorsAndroid.primaryLight` on Android   | Highlight color used as ripple color on Android and when pressed background color on iOS

## Usage example

```typescript jsx
    <TouchablePlatform style={styles.container} onPress={onButtonPress}>
      <Text style={labelStyle} numberOfLines={1}>
        {label}
      </Text>
    </TouchablePlatform>
```

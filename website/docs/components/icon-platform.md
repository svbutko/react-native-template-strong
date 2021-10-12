---
sidebar_position: 6
title: IconPlatform
---
## Content

Shows provided SF Symbol for iOS or Material Icon for Android or if both aren't provided then returns `null`.

## Params
Extends `IconProps` of `react-native-vector-icons/Icon` and `SFSymbolProps` of `react-native-sfsymbols` and omits `name` of both of them.

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| iosName           | `SFSymbols`         | False           | Undefined              | SF Symbol fron enum
| androidName        | `string`         | False          | Undefined             | Name of Material Icon
| color        | `ColorValue`         | False          | Undefined       | Color of icon
| style        | `TextStyle or ViewStyle`         | False          | Undefined       | Style of icon

## Usage example

```typescript jsx
        <IconPlatform
          iosName={SFSymbols["star.fill"]}
          androidName={"star-rate"}
          size={moderateScale(32)}
          resizeMode={"contain"}
          color={platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary)}
          style={styles.clauseIcon}
        />
```

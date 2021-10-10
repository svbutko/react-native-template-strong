---
sidebar_position: 2
title: colorHelpers
---

## Content

Used to select color based on platform.

### platformNativeColor

Selects color based on platform and if at least one is provided goes it through `PlatformColor` otherwise returns `undefined`.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| iosColor           | `PlatformColorsIOS`         | False           | Undefined              | iOS color from `PlatformColorsIOS`
| androidColor        | `PlatformColorsAndroid`         | False          | Undefined             | Android color from `PlatformColorsAndroid`

#### Usage example

```typescript jsx
export const LoadingComponent = () => {
    return (
        <View style={CommonStyles.flexCenter}>
            <ActivityIndicator color={platformNativeColor(PlatformColorsIOS.label, PlatformColorsAndroid.primary)}/>
            <Text style={CommonStyles.normalText} numberOfLines={1}>
                {localization.common.loading}
            </Text>
        </View>
    );
};
```

### platformLocalColor

Selects color based on platform and if at least one is provided returns it otherwise returns `undefined`.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| iosColor           | `Colors`         | False           | Undefined              | iOS color from `Colors`
| androidColor        | `Colors`         | False          | Undefined             | Android color from `Colors`

#### Usage example

```typescript jsx
export const LoadingComponent = () => {
    return (
        <View style={CommonStyles.flexCenter}>
            <ActivityIndicator color={platformLocalColor(Colors.red, Colors.green)} />
            <Text style={CommonStyles.normalText} numberOfLines={1}>
                {localization.common.loading}
            </Text>
        </View>
    );
};
```

### platformMixedColor

Selects color based on platform and if at least one is provided returns it or goes it through `PlatformColor` if it's type of `PlatformColorsIOS` or `PlatformColorsAndroid` otherwise returns `undefined`.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| iosColor           | `Colors`, `PlatformColorsIOS`         | False           | Undefined              | iOS color from `Colors` or `PlatformColorsIOS`
| androidColor        | `Colors`, `PlatformColorsAndroid`         | False          | Undefined             | Android color from `Colors` or `PlatformColorsAndroid`

#### Usage example

```typescript jsx
export const LoadingComponent = () => {
    return (
        <View style={CommonStyles.flexCenter}>
            <ActivityIndicator color={platformMixedColor(Colors.red, PlatformColorsAndroid.primary)} />
            <Text style={CommonStyles.normalText} numberOfLines={1}>
                {localization.common.loading}
            </Text>
        </View>
    );
};
```

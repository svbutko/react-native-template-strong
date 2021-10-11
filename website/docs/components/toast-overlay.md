---
sidebar_position: 16
title: ToastOverlay
---

## Content

:::danger Do not use this component directly!
Use `showToast` to present this component because it's linked to navigation.
:::

Represents a simple toast overlay which animatedly appears for 3 seconds with presented text and the animatedly disappears.

## Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| text           | `string`         | True           | -              | Text which will be shown
| textStyle        | `TextStyle`         | False          | Undefined             | Style of text
| icon        | `ImageURISource`         | False          | Undefined             | Icon which will be shown on the lft side from message
| iconStyle        | `ImageStyle`        | False          | Undefined             | Icon style
| loading        | `boolean`        | False          | Undefined             | Shows activity indicator
| location        | `bottom or top`        | False          | `top` on iOS, `bottom` on Android   | Location of toast

## Usage example

```typescript jsx
  const showTopToast = useCallback(() => {
    showToast({
        text: "Toast message text",
        location: "top",
    });
}, []);

const showBottomToast = useCallback(() => {
    showToast({
        text: "Toast message text",
        location: "bottom",
    });
}, []);

const showBottomToastLoading = useCallback(() => {
    showToast({
        text: "Loading message",
        location: "bottom",
        loading: true,
    });
}, []);

const showBottomToastIcon = useCallback(() => {
    showToast({
        text: "Message with icon",
        location: "bottom",
        icon: ImageResources.camera,
        iconStyle: {tintColor: Colors.red},
    });
}, []);

return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
        <PrimaryButton type={ButtonType.solid} label={"Show top toast"} onPress={showTopToast} />
        <PrimaryButton type={ButtonType.solid} label={"Show bottom toast"} onPress={showBottomToast} />
        <PrimaryButton type={ButtonType.solid} label={"Show loading"} onPress={showBottomToastLoading} />
        <PrimaryButton type={ButtonType.solid} label={"Show icon"} onPress={showBottomToastIcon} />
    </ScrollView>
);
```

---
sidebar_position: 12
title: shareHelpers
---
## Content

Set of share functions, made possible by [react-native-share](https://github.com/react-native-share/react-native-share).
Check the docs to learn more.

### showShareDialog

Shows share dialog with provided options and optional callbacks.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| options           | `ShareOptions`         | True           | -              | Share options
| completedCallback           | `(result: ShareOpenResult) => void`         | False           | Undefined              | Callback when user completed share action with result parameters
| errorCallback           | `(error: Error or unknown) => void`         | False           | Undefined              | Error callback when something went wrong or user didn't share anything

#### Usage example

```typescript jsx
  const onShowShareDialogPress = useCallback(async () => {
    await showShareDialog(
        {
            showAppsToView: true,
            message: "Test message to share",
        },
        (result) => {
            console.warn("Share result: ", result);
        },
        (error) => {
            console.error("Share error: ", error);
        },
    );
}, []);
```

### showShareSocialDialog

Shows share to social network dialog with provided options and optional callbacks. If the app is not installed then tries to open the web page of social network.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| options           | `ShareSingleOptions`         | True           | -              | Share options
| completedCallback           | `(result: ShareSingleResult) => void`         | False           | Undefined              | Callback when user completed share action with result parameters
| errorCallback           | `(error: Error or unknown) => void`         | False           | Undefined              | Error callback when something went wrong or user didn't share anything

#### Usage example

```typescript jsx
  const onShowShareSocialDialogPress = useCallback(async () => {
    await showShareSocialDialog(
        {
            social: Share.Social.TWITTER,
            title: "Share via",
            message: "Twitter test message from template",
            url: "",
        },
        (result) => {
            console.warn("Share result: ", result);
        },
        (error) => {
            console.error("Share error: ", error);
        },
    );
}, []);
```

### isPackageInstalled

Checks whether the package installed, on Android uses the share check, on iOS checks using `Linking.canOpenURL`.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| androidPackageName           | `string`         | False           | Undefined              | Android package name
| iosUrl           | `string`         | False           | Undefined              | iOS package URI

#### Usage example

```typescript jsx
await isPackageInstalled("com.instagram.android", "instagram://");
```

---
sidebar_position: 4
title: dialogsHelpers
---

## Content

Used to show dialogs, alerts and action sheets

### showActionSheet

Shows action sheet on iOS with defined options, on Android it shows React Native's `Alert` with title, message and buttons.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| options           | `ActionSheetIOSOptions`         | True           | -              | Options which will be used to show `ActionSheetIOS` or `Alert.alert`
| onOptionSelected  | `(optionIndex: number) => void`         | True          | -             | Handler which receives selected index of button

#### Usage example

```typescript jsx
  const onShowActionSheetPress = useCallback(() => {
    showActionSheet(
        {
            title: "Action Sheet Title",
            options: ["Cancel", "Action 1", "Action 2"],
            cancelButtonIndex: 0,
            destructiveButtonIndex: 3,
            message: "Action Sheet Message",
        },
        (optionIndex) => {
            console.warn(`Option ${optionIndex} was pressed`);
        },
    );
}, []);
```

### showAlert

Shows React Native's `Alert` with provided parameters.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| title          | `string`         | True           | -              | The dialog's title. Passing empty string will hide the title
| message        | `string`         | False          | Undefined             | An optional message that appears below the dialog's title
| buttons        | `AlertButton[]`  | False          | Undefined             | An optional array containing buttons configuration
| options        | `AlertOptions`   | False          | `{cancelable: true}`  | An optional Alert configuration for the Android


#### Usage example

```typescript jsx
  const onShowAlertPress = useCallback(() => {
    showAlert("Title", "Message", [
        {
            text: "Action 1",
            onPress: () => {
                console.warn("Action 1 was pressed");
            },
            style: "default",
        },
        {
            text: "Action 2",
            onPress: () => {
                console.warn("Action 2 was pressed");
            },
            style: "destructive",
        },
    ]);
}, []);
```

### showCommonDialog

Shows common yes-no dialog with title and message and on yes press callback.

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| title          | `string`         | True           | -              | The dialog's title. Passing empty string will hide the title
| message        | `string`         | True          | -             | The message that appears below the dialog's title
| onAcceptPress        | `() => void`         | True          | -             | The callback from `Yes` pressed button

#### Usage example

```typescript jsx
  const onShowCommonDialogPress = useCallback(() => {
    showCommonDialog("Title", "Message", () => {
        console.warn("You pressed Yes");
    });
}, []);
```

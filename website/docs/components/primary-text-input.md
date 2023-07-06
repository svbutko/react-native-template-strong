---
sidebar_position: 2
title: PrimaryTextInput
---

## Content

Primary text input component which should be used in project.

## Params
Extends `TextInputProps` and additionally adds next properties

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| nextInputFocusRef | `MutableRefObject<any>`     | False          | Undefined          | If provided then when `onSubmitEditing` fires focuses on next input
| inputRef  | `Ref<any>`    | False          | Undefined   | Reference of `TextInput`
| containerStyle  | `ViewStyle`    | False          | Undefined   | Style of container
| label  | `string`    | False          | Undefined   | Style of container
| error  | `string or null`    | False          | Undefined   | Error which will be shown under the input
| hint  | `string`    | False          | Undefined   | Hint which will be shown under the input

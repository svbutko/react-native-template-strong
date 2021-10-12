---
sidebar_position: 1
title: PrimaryButton
---

## Content
Primary button of project which should be used as a button component. Provides several built-in type scenarios.

## Params
Extends `PressableProps` and additionally adds next properties

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| label | `string`     | True          | -          | Label of button
| type  | `ButtonType`    | True          | -   | Button type based on which different styles will be shown
| rounded  | `boolean`    | False          | Undefined   | Should the corners be rounded
| label  | `string`    | False          | Undefined   | Style of container
| icon  | `ImageURISource`    | False          | Undefined   | Custom icon
| iconStyle  | `StyleProp<ImageStyle>`    | False          | Undefined   | Custom icon's style
| platformIconProps  | `IIconPlatformProps`    | False          | Undefined   | Platform icon props which will be used if `icon` is not provided
| labelStyle  | `TextStyle`    | False          | Undefined   | Label's style
| isLoading  | `boolean`    | False          | Undefined   | Shows activity indicator

## Usage example
```typescript jsx
      <PrimaryButton type={ButtonType.solid} label={"Select date"} onPress={onPress} />
```


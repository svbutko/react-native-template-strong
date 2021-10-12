---
sidebar_position: 10
title: RadioButton
---

## Content

Radio button component.

## Params

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| isSelected      | `boolean`         | True           | -              | Changes the design based on selection
| id      | `string`         | True           | -              | ID of radio button item
| label      | `string`         | True           | -              | Label of radio button
| onPress      | `(id: string, nextValue: boolean) => void`         | True           | -              | On item press callback
| disabled        | `boolean`         | False          | Undefined             | If disabled then not allows to select it and shows different design
| IconComponent        | `FunctionComponent<IIconComponentProps>`         | False          | `RadioIcon`             | Radio icon component

## Usage example

```typescript jsx
<RadioButton id={"0"} label={"Selected"} isSelected={true} onPress={onPress} />
<RadioButton id={"1"} label={"Unselected"} isSelected={false} onPress={onPress} />
<RadioButton id={"2"} label={"Selected disabled"} isSelected={true} onPress={onPress} disabled={true} />
```

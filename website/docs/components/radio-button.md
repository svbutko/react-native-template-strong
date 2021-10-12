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
const [isSelected, setSelected] = useState<boolean>(false);

const onPress = useCallback((id, nextSelection) => {
    setSelected(nextSelection);
}, []);

return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
        <RadioButton id={"0"} label={"Radio button label"} isSelected={isSelected} onPress={onPress} />
    </ScrollView>
);
```

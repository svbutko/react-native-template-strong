---
sidebar_position: 15
title: DatePickerOverlay
---

## Content

:::danger Do not use this component directly!
Use `showDatePicker` to present this component because it's linked to navigation.
:::

Represents a date picker provided by [@react-native-community/datetimepicker](https://github.com/react-native-datetimepicker/datetimepicker) as modal on iOS and as overlay on Android.

## Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| value           | `Date`         | True           | -              | Current selected date value
| minDate        | `Date`         | False          | Undefined             | Minimum border of available dates for selection
| maxDate        | `Date`         | False          | Undefined             | Maximum border of available dates for selection
| onDateChange        | `(date: Date) => void `        | False          | Undefined             | Callback with selected date

## Usage example

```typescript jsx
const [selectedDate, setSelectedDate] = useState<Date>(new Date());

const onPress = useCallback(() => {
    return showDatePicker({
        value: selectedDate,
        onDateChange: setSelectedDate,
    });
}, [selectedDate, setSelectedDate]);

return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
        <PrimaryButton type={ButtonType.solid} label={"Select date"} onPress={onPress} />
        <DescriptionText>{dateFromFormat(selectedDate, DateFormat.yearDateTime)}</DescriptionText>
    </ScrollView>
);
```


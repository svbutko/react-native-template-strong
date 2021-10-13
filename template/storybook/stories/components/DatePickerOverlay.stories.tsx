import React, {FC, useCallback, useState} from "react";
import {ScrollView} from "react-native";
import {DescriptionText} from "../../components/DescriptionText";
import {ButtonType} from "../../../src/types";
import {DateFormat, dateFromFormat} from "../../../src/common/localization/dateFormatter";
import {showDatePicker} from "../../../src/navigation/helpers/showDatePicker";
import {CommonStyles} from "../../../src/core/theme/commonStyles";
import {PrimaryButton} from "../../../src/common/components/PrimaryButton";
import {Separator} from "../../../src/common/components/Separator";
import dayjs from "dayjs";

export const DatePickerOverlayStories: FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const onPress = useCallback(() => {
    return showDatePicker({
      value: selectedDate,
      onDateChange: setSelectedDate,
    });
  }, [selectedDate, setSelectedDate]);

  const onPressMinMax = useCallback(() => {
    return showDatePicker({
      value: selectedDate,
      onDateChange: setSelectedDate,
      minDate: dayjs().subtract(10, "days").toDate(),
      maxDate: dayjs().add(2, "days").toDate(),
    });
  }, [selectedDate, setSelectedDate]);

  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <PrimaryButton type={ButtonType.solid} label={"Select date"} onPress={onPress} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} label={"Select date (min, max)"} onPress={onPressMinMax} />
      <DescriptionText>{dateFromFormat(selectedDate, DateFormat.yearDateTime)}</DescriptionText>
    </ScrollView>
  );
};

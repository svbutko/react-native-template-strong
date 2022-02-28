import React, {FC, useCallback, useState} from "react";
import {ScrollView} from "react-native";
import {DescriptionText} from "../../components/DescriptionText";
import {DateFormat, dateFromFormat} from "~/common/localization/momentFormatter";
import {showDatePicker} from "~/services/navigationService/showDatePicker";
import {CommonStyles} from "~/core/theme/commonStyles";
import {ButtonType, PrimaryButton} from "../../../src/common/components/PrimaryButton";
import {Separator} from "~/common/components/Separator";
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
      <PrimaryButton type={ButtonType.solid} text={"Select date"} onPress={onPress} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} text={"Select date (min, max)"} onPress={onPressMinMax} />
      <DescriptionText>{dateFromFormat(selectedDate, DateFormat.yearDateTime)}</DescriptionText>
    </ScrollView>
  );
};

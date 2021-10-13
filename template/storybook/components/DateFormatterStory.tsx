import React, {FC, memo} from "react";
import {ScrollView} from "react-native";
import {
  calendarDate,
  DateFormat,
  dateFromFormat,
  dateFromString,
  dateFromUnknown,
  getUnixDate,
} from "../../src/common/localization/dateFormatter";
import {CommonStyles} from "../../src/core/theme/commonStyles";
import {TitleDescriptionBorder} from "./TitleDescriptionBorder";

export const DateFormatterStory: FC = memo(() => {
  return (
    <ScrollView style={CommonStyles.flexPlatformBackground}>
      <TitleDescriptionBorder title={dateFromString(new Date()).toString()} description={dateFromString.name} />
      <TitleDescriptionBorder title={dateFromUnknown(new Date())?.toString() || ""} description={dateFromUnknown.name} />
      <TitleDescriptionBorder title={calendarDate(new Date()).toString()} description={calendarDate.name} />
      <TitleDescriptionBorder
        title={dateFromFormat(new Date(), DateFormat.dayMonthWeekdayFull)}
        description={dateFromFormat.name}
        isLast={true}
      />
      <TitleDescriptionBorder title={getUnixDate(new Date()).toString()} description={getUnixDate.name} />
    </ScrollView>
  );
});

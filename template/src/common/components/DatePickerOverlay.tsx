import React, {useCallback, useMemo, useState} from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Platform, SafeAreaView, StyleSheet, View, ViewStyle} from "react-native";
import {Navigation, NavigationFunctionComponent, OptionsTopBarButton} from "react-native-navigation";
import {ButtonType} from "../../types";
import {useNavigationButtonPress} from "react-native-navigation-hooks";
import {PrimaryButton} from "./PrimaryButton";
import {getLanguage, localization} from "../localization/localization";
import {isAndroid, isIos} from "../../core/theme/commonConsts";
import {Fonts} from "../../core/theme/fonts";
import {CommonStyles} from "../../core/theme/commonStyles";
import {Colors} from "../../core/theme/colors";
import {CommonSizes} from "../../core/theme/commonSizes";

export interface IDatePickerProps {
  value: Date;
  minDate?: Date;
  maxDate?: Date;
  onDateChange?: (date: Date) => void;
}

const displayMode = isIos ? "inline" : "default";

const doneButtonId = "doneButton";

const rightButton: OptionsTopBarButton = {
  id: doneButtonId,
  text: localization.common.done,
  fontFamily: Fonts.system,
  enabled: true,
};

export const DatePickerOverlay: NavigationFunctionComponent<IDatePickerProps> = ({componentId, maxDate, minDate, onDateChange, value}) => {
  const [date, setDate] = useState<Date>(value);

  const onSetDate = useCallback(
    (event, selectedDate) => {
      if (isAndroid) {
        if (selectedDate == null) {
          Navigation.dismissOverlay(componentId);
        } else {
          onDateChange && onDateChange(selectedDate);
          Navigation.dismissOverlay(componentId);
        }
      } else {
        setDate(selectedDate);
      }
    },
    [componentId, onDateChange],
  );

  const changeDate = useCallback(() => {
    onDateChange && onDateChange(date);
    Navigation.dismissModal(componentId);
  }, [onDateChange, componentId, date]);

  const locale = useMemo(() => {
    return getLanguage();
  }, []);

  useNavigationButtonPress(changeDate, {componentId, buttonId: doneButtonId});

  return (
    <SafeAreaView style={CommonStyles.flex1}>
      <View style={styles.container}>
        <DateTimePicker
          value={date}
          mode={"date"}
          display={displayMode}
          onChange={onSetDate}
          minimumDate={minDate}
          maximumDate={maxDate}
          locale={locale}
        />
        {isIos && <PrimaryButton label={localization.common.select} type={ButtonType.solid} onPress={changeDate} />}
      </View>
    </SafeAreaView>
  );
};

DatePickerOverlay.options = {
  ...Platform.select({
    android: {
      layout: {
        componentBackgroundColor: Colors.transparent,
      },
      overlay: {
        interceptTouchOutside: true,
      },
    },
    ios: {
      topBar: {
        rightButtons: [rightButton],
      },
    },
  }),
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: CommonSizes.spacing.medium,
        paddingVertical: CommonSizes.spacing.large,
      } as ViewStyle,
      android: {
        ...CommonStyles.flexCenter,
        backgroundColor: Colors.transparent,
      } as ViewStyle,
    }),
  } as ViewStyle,
});

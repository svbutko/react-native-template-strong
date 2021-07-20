import React, {useCallback, useMemo, useState} from "react";
import {Colors, CommonStyles, Fonts, isAndroid, isIos} from "../../core/theme";
import DateTimePicker from "@react-native-community/datetimepicker";
import {getLanguage, localization} from "../localization";
import {styleSheetCreate} from "../utils";
import {Platform, SafeAreaView, View, ViewStyle} from "react-native";
import {Navigation, NavigationFunctionComponent, OptionsTopBarButton} from "react-native-navigation";
import {ButtonType} from "../../types";
import {useNavigationButtonPress} from "react-native-navigation-hooks";
import {PrimaryButton} from "./PrimaryButton";

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

//TODO: Add to Storybook, check Android
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
          textColor={Colors.red}
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

const styles = styleSheetCreate({
  container: {
    ...Platform.select({
      ios: {
        flex: 1,
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 24,
      } as ViewStyle,
      android: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.transparent,
      } as ViewStyle,
    }),
  } as ViewStyle,
});

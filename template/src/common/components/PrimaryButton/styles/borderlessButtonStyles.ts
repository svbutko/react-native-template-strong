import {Colors} from "~/core/theme/colors";
import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {
  commonButtonStyle,
  commonIcon,
  commonLabelStyle,
} from "~/common/components/PrimaryButton/styles/commonButtonStyles";

export const borderlessStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    backgroundColor: Colors.transparent,
    borderRadius: undefined,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: Colors.black,
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: Colors.black,
  } as ImageStyle,
});

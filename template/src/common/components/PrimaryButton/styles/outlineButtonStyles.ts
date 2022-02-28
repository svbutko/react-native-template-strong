import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {
  commonButtonStyle,
  commonIcon,
  commonLabelStyle,
} from "~/common/components/PrimaryButton/styles/commonButtonStyles";
import {Colors} from "~/core/theme/colors";

export const outlineStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    borderColor: Colors.black,
    borderWidth: 1,
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

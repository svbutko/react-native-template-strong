import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {
  commonButtonStyle,
  commonIcon,
  commonLabelStyle,
} from "~/common/components/PrimaryButton/styles/commonButtonStyles";
import {Colors} from "~/core/theme/colors";

export const solidStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    backgroundColor: Colors.blue,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: Colors.black,
  } as ImageStyle,
});


import {Platform, StyleSheet, TextStyle, ViewStyle} from "react-native";
import {Fonts} from "./fonts";
import {PlatformColorsAndroid, PlatformColorsIOS} from "./colors";
import {CommonSizes} from "./commonSizes";
import {platformNativeColor} from "../../common/helpers/colorHelpers";

export const CommonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  } as ViewStyle,
  flexCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  flexColumnCenterStretch: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  } as ViewStyle,
  flexPlatformBackground: {
    flex: 1,
    backgroundColor: platformNativeColor(PlatformColorsIOS.systemBackground, PlatformColorsAndroid.background),
  } as ViewStyle,
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  columnAlignStart: {
    flexDirection: "column",
    alignItems: "flex-start",
  } as ViewStyle,
  shadow: {
    ...Platform.select({
      ios: {
        shadowOffset: {height: 3, width: 0},
        shadowOpacity: 0.16,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  iPhoneXFooter: {
    height: 20,
  } as ViewStyle,
  normalText: {
    fontFamily: Fonts.system,
    fontSize: CommonSizes.font.medium,
    lineHeight: CommonSizes.lineHeight.medium,
    color: platformNativeColor(PlatformColorsIOS.label, PlatformColorsAndroid.primaryText),
  } as TextStyle,
});

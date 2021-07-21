import {Platform, PlatformColor, TextStyle, ViewStyle} from "react-native";
import {styleSheetCreate} from "../../common/utils";
import {Fonts} from "./fonts";
import {PlatformColorsAndroid, PlatformColorsIOS} from "./colors";
import {FontSize} from "./commonSizes";

export const CommonStyles = styleSheetCreate({
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
    ...Platform.select({
      ios: {
        backgroundColor: PlatformColor(PlatformColorsIOS.systemBackground),
      },
      android: {
        backgroundColor: PlatformColor(PlatformColorsAndroid.primarySurface),
      },
    }),
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
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: FontSize.medium,
    lineHeight: FontSize.medium,
  } as TextStyle,
});

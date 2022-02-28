import {logger} from "~/infrastructure/logger";
import {typography} from "~/infrastructure/typography";
import {Fonts} from "~/core/theme/fonts";
import {Colors} from "~/core/theme/colors";
import {LogLevel} from "~/infrastructure/common/logger";
import {TextStyle} from "react-native";

export const typographyStyles = {
  Brand: {
    H1: {
      fontFamily: Fonts.brand,
      fontWeight: "400",
      fontSize: 28,
      lineHeight: 36,
      color: Colors.black,
    } as TextStyle,
    H2: {
      fontFamily: Fonts.brand,
      fontWeight: "400",
      fontSize: 24,
      lineHeight: 32,
      color: Colors.black,
    } as TextStyle,
    H3: {
      fontFamily: Fonts.brand,
      fontWeight: "400",
      fontSize: 22,
      lineHeight: 28,
      color: Colors.black,
    } as TextStyle,
    H4: {
      fontFamily: Fonts.brand,
      fontWeight: "400",
      fontSize: 16,
      lineHeight: 24,
      color: Colors.black,
    } as TextStyle,
    H5: {
      fontFamily: Fonts.brand,
      fontWeight: "400",
      fontSize: 14,
      lineHeight: 20,
      color: Colors.black,
    } as TextStyle,
    H6: {
      fontFamily: Fonts.brand,
      fontWeight: "400",
      fontSize: 12,
      lineHeight: 16,
      color: Colors.black,
    } as TextStyle,
    H7: {
      fontFamily: Fonts.brand,
      fontWeight: "400",
      fontSize: 10,
      lineHeight: 12,
      color: Colors.black,
    } as TextStyle,
  },
  Regular: {
    H1: {fontWeight: "400", fontSize: 15, lineHeight: 20, color: Colors.primaryBlack} as TextStyle,
    H2: {fontWeight: "400", fontSize: 15, lineHeight: 22, color: Colors.primaryBlack} as TextStyle,
    H3: {fontWeight: "400", fontSize: 13, lineHeight: 18, color: Colors.primaryBlack} as TextStyle,
    H4: {fontWeight: "400", fontSize: 11, lineHeight: 14, color: Colors.primaryBlack} as TextStyle,
    H5: {fontWeight: "400", fontSize: 11, lineHeight: 14, color: Colors.primaryBlack} as TextStyle,
    H6: {fontWeight: "400", fontSize: 9, lineHeight: 12, color: Colors.primaryBlack} as TextStyle,
  },
};

export function configureTypography() {
  typography.configure({
    logLevel: LogLevel.debug, //todo replace with Logging.LogLevel.debug,
    logger: logger,
    ...typographyStyles,
  });
}

import React, {FC, memo} from "react";
import {Platform, PlatformColor, StyleSheet, View, ViewStyle} from "react-native";
import {Colors, PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme/colors";
import {isIos, maxWindowDimension, minWindowDimension} from "../../src/core/theme/commonConsts";
import {DescriptionText} from "./DescriptionText";

interface IProps {
  color: string;
  isPlatformColor: boolean;
}

export const ColorPaletteListItem: FC<IProps> = memo(({color, isPlatformColor}) => {
  const colorStyle = StyleSheet.flatten([
    styles.colorContainer,
    {
      backgroundColor: isPlatformColor
        ? PlatformColor(((isIos ? PlatformColorsIOS : PlatformColorsAndroid) as any)[color])
        : (Colors as any)[color],
    },
  ]) as ViewStyle;

  return (
    <View style={styles.container}>
      <View style={colorStyle} />
      <DescriptionText>{color}</DescriptionText>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  colorContainer: {
    width: minWindowDimension - 50,
    height: maxWindowDimension / 6,
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: PlatformColor(PlatformColorsIOS.separator),
      },
      android: {
        elevation: 2,
      },
    }),
  } as ViewStyle,
});

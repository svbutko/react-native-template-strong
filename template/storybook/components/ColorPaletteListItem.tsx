import React, {FC, memo} from "react";
import {Platform, PlatformColor, Text, TextStyle, View, ViewStyle} from "react-native";
import {styleSheetCreate, styleSheetFlatten} from "../../src/common/utils";
import {Colors, isIos, maxWindowDimension, minWindowDimension, PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";

interface IProps {
  color: string;
  isPlatformColor: boolean;
}

export const ColorPaletteListItem: FC<IProps> = memo(({color, isPlatformColor}) => {
  const colorStyle = styleSheetFlatten([
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
      <Text style={styles.title}>{color}</Text>
    </View>
  );
});

const styles = styleSheetCreate({
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
  title: {
    fontSize: 24,
    padding: 10,
    textAlign: "center",
    ...Platform.select({
      ios: {
        color: PlatformColor(PlatformColorsIOS.label),
      },
      android: {
        color: PlatformColor(PlatformColorsAndroid.onBackground),
      },
    }),
  } as TextStyle,
});

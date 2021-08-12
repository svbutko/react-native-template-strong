import React, {FC, memo} from "react";
import {Platform, PlatformColor, StyleSheet, Text, TextStyle, ViewStyle} from "react-native";
import {Fonts, PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";

interface IProps {
  font: string;
}

export const FontListItem: FC<IProps> = memo(({font}) => {
  const titleStyle = StyleSheet.flatten([styles.title, {fontFamily: (Fonts as any)[font]}]) as ViewStyle;

  return <Text style={titleStyle}>{font}</Text>;
});

const styles = StyleSheet.create({
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

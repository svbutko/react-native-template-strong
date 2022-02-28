import React, {FC, memo} from "react";
import {Platform, StyleSheet, View, ViewStyle} from "react-native";
import {Colors} from "~/core/theme/colors";
import {maxWindowDimension, minWindowDimension} from "~/core/theme/commonConsts";
import {DescriptionText} from "./DescriptionText";

interface IProps {
  color: string;
  isPlatformColor: boolean;
}

export const ColorPaletteListItem: FC<IProps> = memo(({color}) => {
  const colorStyle = StyleSheet.flatten([
    styles.colorContainer,
    {
      backgroundColor: (Colors as any)[color],
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
        borderColor: Colors.black,
      },
      android: {
        elevation: 2,
      },
    }),
  } as ViewStyle,
});

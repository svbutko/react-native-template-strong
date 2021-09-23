import React, {FC, memo} from "react";
import {PlatformColor, StyleSheet, View, ViewStyle} from "react-native";
import {SFSymbol} from "react-native-sfsymbols";
import {DescriptionText} from "./DescriptionText";
import {PlatformColorsIOS} from "../../src/core/theme/colors";

interface IProps {
  title: string;
}

export const SFSymbolListItem: FC<IProps> = memo(({title}) => {
  return (
    <View style={styles.container}>
      <SFSymbol name={title} size={32} color={PlatformColor(PlatformColorsIOS.systemBlue)} />
      <DescriptionText>{title}</DescriptionText>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});

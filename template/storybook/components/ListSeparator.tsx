import {Platform, PlatformColor, StyleSheet, View, ViewStyle} from "react-native";
import React, {memo} from "react";
import {Colors, hairlineWidth, PlatformColorsIOS} from "../../src/core/theme";

export const ListSeparator = memo(() => {
  return <View style={styles.container} />;
});

const styles = StyleSheet.create({
  container: {
    height: hairlineWidth,
    ...Platform.select({
      ios: {
        backgroundColor: PlatformColor(PlatformColorsIOS.separator),
      },
      android: {
        backgroundColor: Colors.gray,
      },
    }),
    marginTop: 10,
    marginBottom: 10,
  } as ViewStyle,
});

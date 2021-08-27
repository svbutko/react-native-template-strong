import React, {FC, useMemo} from "react";
import {PlatformColor, StyleSheet, View, ViewStyle} from "react-native";
import {hairlineWidth, isIos, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";

interface IProps {
  isFull?: boolean;
}

export const Separator: FC<IProps> = ({isFull}) => {
  const containerStyle = useMemo(() => {
    return isFull ? styles.fullContainer : styles.container;
  }, [isFull]);

  return <View style={containerStyle} />;
};

const styles = StyleSheet.create({
  container: {
    height: hairlineWidth,
    backgroundColor: isIos ? PlatformColor(PlatformColorsIOS.separator) : PlatformColor(PlatformColorsAndroid.secondary),
    marginHorizontal: 16,
  } as ViewStyle,
  fullContainer: {
    height: hairlineWidth,
    backgroundColor: isIos ? PlatformColor(PlatformColorsIOS.separator) : PlatformColorsAndroid.secondary,
  } as ViewStyle,
});

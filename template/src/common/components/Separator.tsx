import React, {FC, useMemo} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import {CommonSizes, hairlineWidth, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";
import {platformNativeColor} from "../helpers";

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
    backgroundColor: platformNativeColor(PlatformColorsIOS.separator, PlatformColorsAndroid.highlight),
    marginHorizontal: CommonSizes.spacing.medium,
  } as ViewStyle,
  fullContainer: {
    height: hairlineWidth,
    backgroundColor: platformNativeColor(PlatformColorsIOS.separator, PlatformColorsAndroid.highlight),
  } as ViewStyle,
});

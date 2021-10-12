import React, {FC, useMemo} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme/colors";
import {hairlineWidth} from "../../core/theme/commonConsts";
import {CommonSizes} from "../../core/theme/commonSizes";
import {platformNativeColor} from "../helpers/colorHelpers";

interface IProps {
  isFull?: boolean;
}

export const Separator: FC<IProps> = ({isFull}) => {
  const containerStyle = useMemo(() => {
    return isFull ? styles.fullContainer : styles.container;
  }, [isFull]);

  return <View style={containerStyle} />;
};

Separator.defaultProps = {
  isFull: true,
};

const styles = StyleSheet.create({
  container: {
    height: hairlineWidth,
    backgroundColor: platformNativeColor(PlatformColorsIOS.separator, PlatformColorsAndroid.divider),
    marginHorizontal: CommonSizes.spacing.medium,
  } as ViewStyle,
  fullContainer: {
    height: hairlineWidth,
    backgroundColor: platformNativeColor(PlatformColorsIOS.separator, PlatformColorsAndroid.divider),
  } as ViewStyle,
});

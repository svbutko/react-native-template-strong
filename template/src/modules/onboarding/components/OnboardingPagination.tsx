import React, {FC, memo} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import {CommonSizes, PlatformColorsAndroid, PlatformColorsIOS} from "../../../core/theme";
import {platformNativeColor} from "../../../common/helpers";

interface IProps {
  totalItems: number;
  activeIndex: number;
}

export const OnboardingPagination: FC<IProps> = memo(({activeIndex, totalItems}) => {
  const dots = [];

  for (let i = 0; i < totalItems; i++) {
    dots.push(<View key={i} style={activeIndex == i ? styles.activeIcon : styles.inactiveIcon} />);
  }

  return <View style={styles.container}>{dots}</View>;
});

/**
 * Border radius is set this way in order to avoid error on Android
 * when setting borderRadius and background with PlatformColor
 */
const commonIcon: ViewStyle = {
  width: 10,
  height: 10,
  borderRadius: 5,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5,
  marginHorizontal: CommonSizes.spacing.extraSmall,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: CommonSizes.spacing.large,
  } as ViewStyle,
  activeIcon: {
    ...commonIcon,
    backgroundColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as ViewStyle,
  inactiveIcon: {
    ...commonIcon,
    backgroundColor: platformNativeColor(PlatformColorsIOS.systemFill, PlatformColorsAndroid.highlight),
  } as ViewStyle,
});

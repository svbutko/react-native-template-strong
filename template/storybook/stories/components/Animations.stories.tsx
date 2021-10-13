import React, {FC, useCallback} from "react";
import {ScrollView, StyleSheet, ViewStyle} from "react-native";
import {ButtonType} from "../../../src/types";
import {CommonStyles} from "../../../src/core/theme/commonStyles";
import {PrimaryButton} from "../../../src/common/components/PrimaryButton";
import {platformNativeColor} from "../../../src/common/helpers/colorHelpers";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../../src/core/theme/colors";
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";

export const AnimationsStories: FC = () => {
  const offset = useSharedValue(0);

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 255, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });

  const onMovePress = useCallback(() => {
    offset.value = Math.random();
  }, [offset]);

  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <Animated.View style={[styles.square, customSpringStyles]} />
      <PrimaryButton type={ButtonType.solid} label={"Move"} onPress={onMovePress} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 40,
    height: 40,
    borderRadius: 2,
    backgroundColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
    marginVertical: 40,
  } as ViewStyle,
});

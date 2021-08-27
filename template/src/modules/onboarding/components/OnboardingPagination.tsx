import React, {FC, memo, useCallback, useMemo} from "react";
import {StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import {PrimaryButton} from "../../../common/components";
import {Colors} from "../../../core/theme";
import {localization} from "../../../common/localization";
import {ButtonType} from "../../../types";
import {setTabsRoot} from "../../../navigation/roots";

interface IProps {
  carouselRef: any;
  activeIndex: number;
}

export const OnboardingPagination: FC<IProps> = memo(({activeIndex, carouselRef}) => {
  const onBackPress = useCallback(() => {
    carouselRef && carouselRef.current && carouselRef.current.snapToPrev();
  }, [carouselRef]);

  const isZeroIndex = useMemo(() => {
    return activeIndex == 0;
  }, [activeIndex]);

  const onNextPress = useCallback(() => {
    if (isZeroIndex) {
      carouselRef && carouselRef.current && carouselRef.current.snapToNext();
    } else {
      setTabsRoot();
    }
  }, [carouselRef, isZeroIndex]);

  return (
    <View style={styles.container}>
      <PrimaryButton
        type={ButtonType.borderless}
        style={styles.button}
        label={localization.common.back}
        onPress={onBackPress}
        disabled={isZeroIndex}
        labelStyle={isZeroIndex ? styles.disabledText : undefined}
      />
      <View style={styles.iconsContainer}>
        <View style={[styles.inactiveIcon, isZeroIndex && styles.activeIcon]} />
        <View style={[styles.inactiveIcon, !isZeroIndex && styles.activeIcon]} />
      </View>
      <PrimaryButton
        type={ButtonType.borderless}
        style={styles.button}
        label={isZeroIndex ? localization.common.next : localization.common.done}
        onPress={onNextPress}
        labelStyle={!isZeroIndex ? styles.doneText : undefined}
      />
    </View>
  );
});

const commonIcon: ViewStyle = {
  width: 10,
  height: 10,
  borderRadius: 5,
  marginHorizontal: 8,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  } as ViewStyle,
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  activeIcon: {
    ...commonIcon,
    backgroundColor: Colors.red,
  } as ViewStyle,
  inactiveIcon: {
    ...commonIcon,
    backgroundColor: Colors.black,
  } as ViewStyle,
  button: {
    padding: 24,
  } as ViewStyle,
  doneText: {
    color: Colors.red,
  } as TextStyle,
  disabledText: {
    color: Colors.black,
  } as TextStyle,
});

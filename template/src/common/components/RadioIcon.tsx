import React, {FC, memo, useMemo} from "react";
import {View, ViewStyle, StyleSheet} from "react-native";
import {Colors} from "../../core/theme";

interface IProps {
  isSelected: boolean;
  disabled?: boolean;
}

//TODO: Add to Storybook
export const RadioIcon: FC<IProps> = memo(({isSelected, disabled}) => {
  const outerCircleStyle = useMemo(() => {
    return disabled ? styles.outerCircle : isSelected ? styles.outerCircleSelected : styles.outerCircle;
  }, [isSelected, disabled]);

  const innerCircleStyle = useMemo(() => {
    return disabled ? styles.innerCircleDisabled : styles.innerCircle;
  }, [disabled]);

  return <View style={outerCircleStyle}>{isSelected && <View style={innerCircleStyle} />}</View>;
});

const commonOuterCircle: ViewStyle = {
  width: 16,
  height: 16,
  borderRadius: 8,
  borderWidth: 1,
  justifyContent: "center",
  alignItems: "center",
};

const commonInnerCircle: ViewStyle = {
  width: 8,
  height: 8,
  borderRadius: 4,
};

const styles = StyleSheet.create({
  outerCircle: StyleSheet.flatten([commonOuterCircle, {borderColor: Colors.black}]) as ViewStyle,
  outerCircleSelected: StyleSheet.flatten([commonOuterCircle, {borderColor: Colors.red}]) as ViewStyle,
  innerCircle: StyleSheet.flatten([commonInnerCircle, {backgroundColor: Colors.red}]) as ViewStyle,
  innerCircleDisabled: StyleSheet.flatten([commonInnerCircle, {backgroundColor: Colors.black}]) as ViewStyle,
});

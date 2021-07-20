import React, {FC, memo, useMemo} from "react";
import {View, ViewStyle} from "react-native";
import {styleSheetCreate, styleSheetFlatten} from "../utils";
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

const styles = styleSheetCreate({
  outerCircle: styleSheetFlatten([commonOuterCircle, {borderColor: Colors.lightBlue}]) as ViewStyle,
  outerCircleSelected: styleSheetFlatten([commonOuterCircle, {borderColor: Colors.red}]) as ViewStyle,
  innerCircle: styleSheetFlatten([commonInnerCircle, {backgroundColor: Colors.red}]) as ViewStyle,
  innerCircleDisabled: styleSheetFlatten([commonInnerCircle, {backgroundColor: Colors.lightBlue}]) as ViewStyle,
});

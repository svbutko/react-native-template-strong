import React, {FC, memo} from "react";
import {StyleSheet, Text, TextStyle} from "react-native";
import {CommonSizes, CommonStyles} from "../../src/core/theme";

interface IProps {
  children: string;
  style?: TextStyle;
}

export const DescriptionText: FC<IProps> = memo(({children, style}) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
});

const styles = StyleSheet.create({
  title: {
    ...CommonStyles.normalText,
    padding: CommonSizes.spacing.small,
    textAlign: "center",
  } as TextStyle,
});

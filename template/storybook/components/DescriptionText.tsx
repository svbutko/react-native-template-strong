import React, {FC, memo} from "react";
import {StyleSheet, TextStyle} from "react-native";
import {CommonSizes} from "~/core/theme/commonSizes";
import {Brand} from "~/infrastructure/typography";

interface IProps {
  children: string;
  style?: TextStyle;
}

export const DescriptionText: FC<IProps> = memo(({children, style}) => {
  return <Brand.H4 style={[styles.title, style]}>{children}</Brand.H4>;
});

const styles = StyleSheet.create({
  title: {
    padding: CommonSizes.spacing.small,
    textAlign: "center",
  } as TextStyle,
});

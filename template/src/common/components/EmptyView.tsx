import React, {FC, memo} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import {CommonSizes} from "~/core/theme/commonSizes";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Brand} from "~/infrastructure/typography";

interface IProps {
  title: string;
  description: string;
}

export const EmptyView: FC<IProps> = memo(({title, description}) => {
  return (
    <View style={styles.container}>
      <Brand.H4>{title}</Brand.H4>
      <Brand.H4>{description}</Brand.H4>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.flexCenter,
    padding: CommonSizes.spacing.medium,
  } as ViewStyle,
});

import React, {FC, memo} from "react";
import {StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import {CommonSizes} from "../../core/theme/commonSizes";
import {CommonStyles} from "../../core/theme/commonStyles";

interface IProps {
  title: string;
  description: string;
}

export const EmptyView: FC<IProps> = memo(({title, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.flexCenter,
    padding: CommonSizes.spacing.medium,
  } as ViewStyle,
  title: {
    ...CommonStyles.normalText,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: CommonSizes.spacing.extraSmall,
  } as TextStyle,
  description: {
    ...CommonStyles.normalText,
    textAlign: "center",
  } as TextStyle,
});

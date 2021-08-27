import React, {FC, memo} from "react";
import {StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import {Colors, CommonStyles} from "../../core/theme";

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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  } as ViewStyle,
  title: StyleSheet.flatten([
    CommonStyles.normalText,
    {
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 24,
      color: Colors.black,
      textAlign: "center",
      marginBottom: 8,
    },
  ]) as TextStyle,
  description: StyleSheet.flatten([
    CommonStyles.normalText,
    {
      color: Colors.black,
      textAlign: "center",
    },
  ]) as TextStyle,
});

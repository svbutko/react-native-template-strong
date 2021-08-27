import React, {FC, memo} from "react";
import {StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import {Colors, CommonStyles} from "../../core/theme";
import {localization} from "../localization";

interface IProps {
  onPress?: () => void;
  errorText?: string | null;
}

export const TryAgain: FC<IProps> = memo(({onPress, errorText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{errorText}</Text>
      {onPress != null && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.description}>{localization.errors.tryAgain}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

const styles = StyleSheet.flatten({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  } as ViewStyle,
  title: StyleSheet.flatten([
    CommonStyles.normalText,
    {
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
      textDecorationLine: "underline",
    },
  ]) as TextStyle,
});

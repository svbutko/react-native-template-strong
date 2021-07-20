import React, {FC, memo} from "react";
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import {styleSheetCreate, styleSheetFlatten} from "../utils";
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

const styles = styleSheetCreate({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  } as ViewStyle,
  title: styleSheetFlatten([
    CommonStyles.normalText,
    {
      color: Colors.dark,
      textAlign: "center",
      marginBottom: 8,
    },
  ]) as TextStyle,
  description: styleSheetFlatten([
    CommonStyles.normalText,
    {
      color: Colors.highlightRed,
      textAlign: "center",
      textDecorationLine: "underline",
    },
  ]) as TextStyle,
});

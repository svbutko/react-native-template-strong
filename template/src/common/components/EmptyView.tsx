import React, {FC, memo} from "react";
import {Text, TextStyle, View, ViewStyle} from "react-native";
import {styleSheetCreate, styleSheetFlatten} from "../utils";
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

const styles = styleSheetCreate({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  } as ViewStyle,
  title: styleSheetFlatten([
    CommonStyles.normalText,
    {
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 24,
      color: Colors.gray,
      textAlign: "center",
      marginBottom: 8,
    },
  ]) as TextStyle,
  description: styleSheetFlatten([
    CommonStyles.normalText,
    {
      color: Colors.gray,
      textAlign: "center",
    },
  ]) as TextStyle,
});

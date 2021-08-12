import {ActivityIndicator, Text, TextStyle, View, StyleSheet} from "react-native";
import React from "react";
import {localization} from "../localization";
import {Colors, CommonStyles} from "../../core/theme";

export const LoadingComponent = () => {
  return (
    <View style={CommonStyles.flexCenter}>
      <ActivityIndicator animating={true} color={Colors.black} size={"small"} />
      <Text style={styles.text} numberOfLines={1}>
        {localization.common.loading}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: StyleSheet.flatten([CommonStyles.normalText, {color: Colors.black}]) as TextStyle,
});

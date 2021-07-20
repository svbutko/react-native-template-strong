import {ActivityIndicator, Text, TextStyle, View} from "react-native";
import React from "react";
import {localization} from "../localization";
import {Colors, CommonStyles} from "../../core/theme";
import {styleSheetCreate, styleSheetFlatten} from "../utils";

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

const styles = styleSheetCreate({
  text: styleSheetFlatten([CommonStyles.normalText, {color: Colors.black}]) as TextStyle,
});

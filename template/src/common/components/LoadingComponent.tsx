import {ActivityIndicator, Text, View} from "react-native";
import React from "react";
import {i18next} from "../localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme/colors";
import {platformNativeColor} from "../helpers/colorHelpers";

export const LoadingComponent = () => {
  return (
    <View style={CommonStyles.flexCenter}>
      <ActivityIndicator
        animating={true}
        color={platformNativeColor(PlatformColorsIOS.label, PlatformColorsAndroid.primary)}
        size={"small"}
      />
      <Text style={CommonStyles.normalText} numberOfLines={1}>
        {i18next.t("common.loading")}
      </Text>
    </View>
  );
};

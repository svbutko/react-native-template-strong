import {ActivityIndicator, Text, View} from "react-native";
import React, {FC} from "react";
import {localization} from "../localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme/colors";
import {platformNativeColor} from "../helpers/colorHelpers";

interface IProps {
  testID?: string;
}

export const LoadingComponent: FC<IProps> = ({testID}) => {
  return (
    <View testID={testID} style={CommonStyles.flexCenter}>
      <ActivityIndicator
        animating={true}
        color={platformNativeColor(PlatformColorsIOS.label, PlatformColorsAndroid.primary)}
        size={"small"}
      />
      <Text style={CommonStyles.normalText} numberOfLines={1}>
        {localization.common.loading}
      </Text>
    </View>
  );
};

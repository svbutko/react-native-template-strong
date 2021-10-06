import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView} from "react-native";
import React from "react";
import {localization} from "../../common/localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";

export const Main: NavigationFunctionComponent = (): JSX.Element => {
  return <ScrollView testID={"MainPageID"} contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1} />;
};

Main.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: localization.pages.main,
    },
  },
};

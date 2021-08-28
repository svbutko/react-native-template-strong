import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView} from "react-native";
import React from "react";
import {CommonStyles} from "../../core/theme";
import {localization} from "../../common/localization";

export const Main: NavigationFunctionComponent = (): JSX.Element => {
  return <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1} />;
};

Main.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    searchBar: {
      visible: true,
    },
    title: {
      text: localization.pages.main,
    },
  },
};

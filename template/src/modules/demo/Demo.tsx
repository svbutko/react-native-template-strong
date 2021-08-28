import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView} from "react-native";
import React from "react";
import {localization} from "../../common/localization";
import {CommonStyles} from "../../core/theme";

export const Demo: NavigationFunctionComponent = (): JSX.Element => {
  return <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1} />;
};

Demo.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    searchBar: {
      visible: false,
    },
    title: {
      text: localization.pages.demo,
    },
  },
};

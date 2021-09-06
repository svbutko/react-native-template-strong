import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView} from "react-native";
import React from "react";
import {localization} from "../../common/localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";

export const More: NavigationFunctionComponent = (): JSX.Element => {
  return <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1} />;
};

More.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    searchBar: {
      visible: false,
    },
    title: {
      text: localization.pages.more,
    },
  },
};

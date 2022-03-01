import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView} from "react-native";
import React from "react";
import {i18next} from "../../common/localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";

export const Settings: NavigationFunctionComponent = (): JSX.Element => {
  return <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1}/>;
};

Settings.options = () => ({
  topBar: {
    largeTitle: {
      visible: true,
    },
    searchBar: {
      visible: false,
    },
    title: {
      text: i18next.t("pages.settings"),
    },
  },
});

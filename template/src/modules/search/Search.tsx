import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView} from "react-native";
import React from "react";
import {i18next} from "../../common/localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";

export const Search: NavigationFunctionComponent = (): JSX.Element => {
  return <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1}/>;
};

Search.options = () => ({
  topBar: {
    largeTitle: {
      visible: true,
    },
    searchBar: {
      visible: true,
    },
    title: {
      text: i18next.t("pages.search"),
    },
  },
});

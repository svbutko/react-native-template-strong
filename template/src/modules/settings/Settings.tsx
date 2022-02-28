import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView} from "react-native";
import React from "react";
import {CommonStyles} from "~/core/theme/commonStyles";
import {getStackOptions} from "~/navigation/helpers/getStackOptions";
import {Pages} from "~/navigation/pages";

export const Settings: NavigationFunctionComponent = (): JSX.Element => {
  return <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1}/>;
};

const screenOptions = getStackOptions("pages.settings", Pages.settings);
Settings.options = screenOptions.getOptions;

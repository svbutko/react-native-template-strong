import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView, Text} from "react-native";
import React from "react";
import {i18next} from "../../common/localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";
import {Colors} from "../../core/theme/colors";
import {useTranslation} from "react-i18next";

export const Main: NavigationFunctionComponent = (): JSX.Element => {
  const {t} = useTranslation();

  return <ScrollView testID={"MainPageID"} contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1}>
    <Text>
      {t("pages.main")}
    </Text>
  </ScrollView>;
};

Main.options = () => ({
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: i18next.t("pages.main"),
      color: Colors.white
    },
    backButton: {visible: true}
  },
});

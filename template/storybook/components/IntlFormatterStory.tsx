import React, {FC, memo} from "react";
import {ScrollView} from "react-native";
import {CommonStyles} from "../../src/core/theme";
import {TitleDescriptionBorder} from "./TitleDescriptionBorder";
import {formatCurrency, formatDecimal, formatPercent} from "../../src/common/localization";

export const IntlFormatterStory: FC = memo(() => {
  return (
    <ScrollView style={CommonStyles.flexPlatformBackground}>
      <TitleDescriptionBorder title={formatPercent(25)} description={formatPercent.name} />
      <TitleDescriptionBorder title={formatCurrency(10000)} description={formatCurrency.name} />
      <TitleDescriptionBorder title={formatDecimal(10000)} description={formatDecimal.name} isLast={true} />
    </ScrollView>
  );
});

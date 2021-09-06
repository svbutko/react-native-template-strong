import React, {FC, memo} from "react";
import {ScrollView} from "react-native";
import {formatCurrency, formatDecimal, formatPercent} from "../../src/common/localization/intlFormatter";
import {CommonStyles} from "../../src/core/theme/commonStyles";
import {TitleDescriptionBorder} from "./TitleDescriptionBorder";

export const IntlFormatterStory: FC = memo(() => {
  return (
    <ScrollView style={CommonStyles.flexPlatformBackground}>
      <TitleDescriptionBorder title={formatPercent(25)} description={formatPercent.name} />
      <TitleDescriptionBorder title={formatCurrency(10000)} description={formatCurrency.name} />
      <TitleDescriptionBorder title={formatDecimal(10000)} description={formatDecimal.name} isLast={true} />
    </ScrollView>
  );
});

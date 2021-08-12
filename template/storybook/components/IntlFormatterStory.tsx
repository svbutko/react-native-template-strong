import React, {FC, memo} from "react";
import {Platform, PlatformColor, ScrollView, StyleSheet, ViewStyle} from "react-native";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";
import {TitleDescriptionBorder} from "./TitleDescriptionBorder";
import {formatCurrency, formatDecimal, formatPercent} from "../../src/common/localization";

export const IntlFormatterStory: FC = memo(() => {
  return (
    <ScrollView style={styles.container}>
      <TitleDescriptionBorder title={formatPercent(25)} description={formatPercent.name} />
      <TitleDescriptionBorder title={formatCurrency(10000)} description={formatCurrency.name} />
      <TitleDescriptionBorder title={formatDecimal(10000)} description={formatDecimal.name} isLast={true} />
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: PlatformColor(PlatformColorsIOS.systemBackground),
      },
      android: {
        backgroundColor: PlatformColor(PlatformColorsAndroid.primarySurface),
      },
    }),
  } as ViewStyle,
});

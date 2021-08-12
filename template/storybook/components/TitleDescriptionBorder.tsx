import React, {FC, Fragment, memo} from "react";
import {Platform, PlatformColor, StyleSheet, Text, TextStyle} from "react-native";
import {ListSeparator} from "./ListSeparator";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";

interface IProps {
  title: string;
  description: string;
  isLast?: boolean;
}

export const TitleDescriptionBorder: FC<IProps> = memo(({title, description, isLast}) => {
  return (
    <Fragment>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {isLast ? null : <ListSeparator />}
    </Fragment>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    padding: 10,
    textAlign: "center",
    ...Platform.select({
      ios: {
        color: PlatformColor(PlatformColorsIOS.secondaryLabel),
      },
      android: {
        color: PlatformColor(PlatformColorsAndroid.onSecondary),
      },
    }),
  } as TextStyle,
  description: {
    fontSize: 24,
    padding: 10,
    textAlign: "center",
    ...Platform.select({
      ios: {
        color: PlatformColor(PlatformColorsIOS.label),
      },
      android: {
        color: PlatformColor(PlatformColorsAndroid.onBackground),
      },
    }),
  } as TextStyle,
});

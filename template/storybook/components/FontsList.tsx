import React, {FC, memo, useCallback} from "react";
import {FlatList, Platform, PlatformColor, StyleSheet, ViewStyle} from "react-native";
import {Fonts, PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";
import {ListSeparator} from "./ListSeparator";
import {FontListItem} from "./FontListItem";

export const FontsList: FC = memo(() => {
  const renderItem = useCallback(({item}) => {
    return <FontListItem key={item} font={item} />;
  }, []);

  const keyExtractor = useCallback((item) => {
    return item;
  }, []);

  return (
    <FlatList
      data={fonts}
      keyExtractor={keyExtractor}
      style={styles.container}
      renderItem={renderItem}
      ItemSeparatorComponent={ListSeparator}
    />
  );
});

const fonts: string[] = Object.keys(Fonts);

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

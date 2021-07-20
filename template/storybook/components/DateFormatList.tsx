import React, {FC, memo, useCallback} from "react";
import {FlatList, Platform, PlatformColor, ViewStyle} from "react-native";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";
import {styleSheetCreate} from "../../src/common/utils";
import {ListSeparator} from "./ListSeparator";
import {DateFormat, dateFromFormat} from "../../src/common/localization";
import {TitleDescriptionBorder} from "./TitleDescriptionBorder";

export const DateFormatList: FC = memo(() => {
  const renderItem = useCallback(({item}) => {
    const title = item[1] + "\n" + dateFromFormat(new Date(), item[1]);

    return <TitleDescriptionBorder key={item[0]} title={title} description={item[0]} isLast={true} />;
  }, []);

  const keyExtractor = useCallback((item) => {
    return item[0];
  }, []);

  return (
    <FlatList
      data={formats}
      keyExtractor={keyExtractor}
      style={styles.container}
      renderItem={renderItem}
      ItemSeparatorComponent={ListSeparator}
    />
  );
});

const formats = Object.entries(DateFormat);

const styles = styleSheetCreate({
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

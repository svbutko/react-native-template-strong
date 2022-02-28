import React, {FC, memo, useCallback} from "react";
import {FlatList} from "react-native";
import {FontListItem} from "./FontListItem";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Fonts} from "~/core/theme/fonts";
import {Separator} from "~/common/components/Separator";

export const FontsList: FC = memo(() => {
  const renderItem = useCallback(({item}: {item: string}) => {
    return <FontListItem key={item} font={item}/>;
  }, []);

  const keyExtractor = useCallback((item: string) => {
    return item;
  }, []);

  return (
    <FlatList
      data={fonts}
      keyExtractor={keyExtractor}
      style={CommonStyles.flexPlatformBackground}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
});

const fonts: string[] = Object.keys(Fonts);

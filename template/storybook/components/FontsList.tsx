import React, {FC, memo, useCallback} from "react";
import {FlatList} from "react-native";
import {FontListItem} from "./FontListItem";
import {CommonStyles} from "../../src/core/theme/commonStyles";
import {Fonts} from "../../src/core/theme/fonts";
import {Separator} from "../../src/common/components/Separator";

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
      style={CommonStyles.flexPlatformBackground}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
});

const fonts: string[] = Object.keys(Fonts);

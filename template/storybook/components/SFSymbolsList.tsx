import React, {FC, useCallback} from "react";
import {FlatList} from "react-native";
import {CommonStyles} from "../../src/core/theme/commonStyles";
import {Separator} from "../../src/common/components/Separator";
import {SFSymbols} from "../../resources/symbols/SFSymbols";
import {SFSymbolListItem} from "./SFSymbolListItem";

export const SFSymbolsList: FC = () => {
  const renderItem = useCallback(({item}) => {
    return <SFSymbolListItem key={item} title={item} />;
  }, []);

  const keyExtractor = useCallback((item) => {
    return item;
  }, []);

  return (
    <FlatList
      data={symbols}
      keyExtractor={keyExtractor}
      style={CommonStyles.flexPlatformBackground}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
};

const symbols = Object.keys(SFSymbols);

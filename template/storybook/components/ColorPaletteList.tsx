import React, {FC, memo, useCallback, useMemo} from "react";
import {FlatList} from "react-native";
import {Colors, CommonStyles, isIos, PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";
import {ColorPaletteListItem} from "./ColorPaletteListItem";
import {Separator} from "../../src/common/components";

interface IProps {
  isPlatformColors: boolean;
}

export const ColorPaletteList: FC<IProps> = memo(({isPlatformColors}) => {
  const renderItem = useCallback(
    ({item}) => {
      return <ColorPaletteListItem key={item} color={item} isPlatformColor={isPlatformColors} />;
    },
    [isPlatformColors],
  );

  const keyExtractor = useCallback((item) => {
    return item;
  }, []);

  const data = useMemo(() => (isPlatformColors ? platformPalette : colorPalette), [isPlatformColors]);

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      style={CommonStyles.flexPlatformBackground}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
});

const platformPalette: string[] = Object.keys(isIos ? PlatformColorsIOS : PlatformColorsAndroid);
const colorPalette: string[] = Object.keys(Colors);

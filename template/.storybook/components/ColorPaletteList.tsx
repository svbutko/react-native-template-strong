import React, {FC, useCallback, useMemo} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {ColorPaletteListItem} from './ColorPaletteListItem';
import {CommonStyles} from '../../src/core/theme/commonStyles';
import {isIos} from '../../src/core/theme/commonConsts';
import {
  Colors,
  PlatformColorsAndroid,
  PlatformColorsIOS,
} from '../../src/core/theme/colors';
import {Separator} from '../../src/common/components/Separator';

interface IProps {
  isPlatformColors: boolean;
}

export const ColorPaletteList: FC<IProps> = ({isPlatformColors}) => {
  const renderItem = useCallback<ListRenderItem<string>>(
    ({item}) => {
      return (
        <ColorPaletteListItem
          key={item}
          color={item}
          isPlatformColor={isPlatformColors}
        />
      );
    },
    [isPlatformColors],
  );

  const data = useMemo(
    () => (isPlatformColors ? platformPalette : colorPalette),
    [isPlatformColors],
  );

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      style={CommonStyles.flexPlatformBackground}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
};

const keyExtractor = (item: string) => {
  return item;
};

const platformPalette: string[] = Object.keys(
  isIos ? PlatformColorsIOS : PlatformColorsAndroid,
);
const colorPalette: string[] = Object.keys(Colors);

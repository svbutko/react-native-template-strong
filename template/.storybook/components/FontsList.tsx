import React, {FC} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {FontListItem} from './FontListItem';
import {CommonStyles} from '../../src/core/theme/commonStyles';
import {Fonts} from '../../src/core/theme/fonts';
import {Separator} from '../../src/common/components/Separator';

export const FontsList: FC = () => {
  return (
    <FlatList
      data={fonts}
      keyExtractor={keyExtractor}
      style={CommonStyles.flexPlatformBackground}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
};

const renderItem: ListRenderItem<string> = ({item}) => {
  return <FontListItem key={item} font={item}/>;
};

const keyExtractor = (item: string) => {
  return item;
};

const fonts: string[] = Object.keys(Fonts);

import React, {FC, useCallback} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {TitleDescriptionBorder} from './TitleDescriptionBorder';
import {
  DateFormat,
  dateFromFormat,
} from '../../src/common/localization/dateFormatter';
import {CommonStyles} from '../../src/core/theme/commonStyles';
import {Separator} from '../../src/common/components/Separator';

export const DateFormatList: FC = () => {
  const renderItem = useCallback<ListRenderItem<DataItem>>(({item}) => {
    const title = item[1] + '\n' + dateFromFormat(new Date(), item[1]);

    return (
      <TitleDescriptionBorder
        key={item[0]}
        title={title}
        description={item[0]}
        isLast={true}
      />
    );
  }, []);

  return (
    <FlatList
      data={formats}
      keyExtractor={keyExtractor}
      style={CommonStyles.flexPlatformBackground}
      renderItem={renderItem}
      ItemSeparatorComponent={Separator}
    />
  );
};

const keyExtractor = (item: DataItem) => {
  return item[0];
};

type DataItem = [string, DateFormat];

const formats = Object.entries(DateFormat);

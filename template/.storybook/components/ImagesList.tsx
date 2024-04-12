import React, {FC, Fragment} from 'react';
import {
  FlatList,
  Image,
  ImageStyle,
  ImageURISource,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
import {DescriptionText} from './DescriptionText';
import {CommonStyles} from '../../src/core/theme/commonStyles';
import {Separator} from '../../src/common/components/Separator';

interface IProps {
  data: DataItem[];
}

export const ImagesList: FC<IProps> = ({data}) => {
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

const renderItem: ListRenderItem<DataItem> = ({item}) => {
  return (
      <Fragment>
        <Image source={item[1]} style={styles.icon} />
        <DescriptionText>{item[0]}</DescriptionText>
      </Fragment>
  );
};

const keyExtractor = (item: DataItem) => {
  return item[0];
};

type DataItem = [string, ImageURISource];

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
  } as ImageStyle,
});

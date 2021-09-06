import React, {FC, Fragment, memo, useCallback} from "react";
import {FlatList, Image, ImageStyle, ImageURISource, StyleSheet} from "react-native";
import {DescriptionText} from "./DescriptionText";
import {CommonStyles} from "../../src/core/theme/commonStyles";
import {Separator} from "../../src/common/components/Separator";

interface IProps {
  data: [string, ImageURISource][];
}

export const ImagesList: FC<IProps> = memo(({data}) => {
  const renderItem = useCallback(({item}) => {
    return (
      <Fragment>
        <Image source={item[1]} style={styles.icon} />
        <DescriptionText>{item[0]}</DescriptionText>
      </Fragment>
    );
  }, []);

  const keyExtractor = useCallback((item) => {
    return item[0];
  }, []);

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

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
  } as ImageStyle,
});

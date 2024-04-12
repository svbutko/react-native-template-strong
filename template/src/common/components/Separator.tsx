import React, {FC, useMemo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {
  PlatformColorsAndroid,
  PlatformColorsIOS,
} from '../../core/theme/colors';
import {hairlineWidth} from '../../core/theme/commonConsts';
import {CommonSizes} from '../../core/theme/commonSizes';
import {platformNativeColor} from '../helpers/colorHelpers';

interface IProps {
  isFull?: boolean;
}

export const Separator: FC<IProps> = ({isFull = true}) => {
  const containerStyle = useMemo(() => {
    return isFull ? styles.fullContainer : styles.container;
  }, [isFull]);

  return <View style={containerStyle} />;
};

const sharedStyle: ViewStyle = {
  height: hairlineWidth,
  backgroundColor: platformNativeColor(
    PlatformColorsIOS.separator,
    PlatformColorsAndroid.divider,
  ),
};

const styles = StyleSheet.create({
  container: {
    ...sharedStyle,
    marginHorizontal: CommonSizes.spacing.medium,
  } as ViewStyle,
  fullContainer: {
    ...sharedStyle,
  } as ViewStyle,
});

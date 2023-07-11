import {ActivityIndicator, Text, View} from 'react-native';
import React from 'react';
import {localization} from '../localization/localization';
import {CommonStyles} from '../../core/theme/commonStyles';
import {
  PlatformColorsAndroid,
  PlatformColorsIOS,
} from '../../core/theme/colors';
import {platformNativeColor} from '../helpers/colorHelpers';

export const LoadingComponent = () => {
  return (
    <View style={CommonStyles.flexCenter}>
      <ActivityIndicator animating={true} color={color} size={'small'} />
      <Text style={CommonStyles.normalText} numberOfLines={1}>
        {localization.common.loading}
      </Text>
    </View>
  );
};

const color = platformNativeColor(
  PlatformColorsIOS.label,
  PlatformColorsAndroid.primary,
);

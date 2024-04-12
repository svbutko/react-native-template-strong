import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  PlatformColorsAndroid,
  PlatformColorsIOS,
} from '../../core/theme/colors';
import {CommonSizes} from '../../core/theme/commonSizes';
import {CommonStyles} from '../../core/theme/commonStyles';
import {platformNativeColor} from '../helpers/colorHelpers';
import {localization} from '../localization/localization';

interface IProps {
  onPress?: () => void;
  errorText?: string | null;
}

export const TryAgain: FC<IProps> = ({onPress, errorText = localization.errors.unknownErrorHasOccurred}) => {
  return (
    <View style={CommonStyles.flexCenter}>
      <Text style={styles.title}>{errorText}</Text>
      {onPress != null && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.description}>{localization.errors.tryAgain}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    ...CommonStyles.normalText,
    textAlign: 'center',
    marginBottom: CommonSizes.spacing.extraSmall,
  } as TextStyle,
  description: {
    ...CommonStyles.normalText,
    color: platformNativeColor(
      PlatformColorsIOS.systemBlue,
      PlatformColorsAndroid.primary,
    ),
    textAlign: 'center',
    textDecorationLine: 'underline',
  } as TextStyle,
});

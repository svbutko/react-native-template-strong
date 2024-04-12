import React, {FC, useCallback, useMemo} from 'react';
import {
  OpaqueColorValue,
  Pressable,
  PressableAndroidRippleConfig,
  PressableProps,
  PressableStateCallbackType,
  ViewStyle,
} from 'react-native';
import {Colors, PlatformColorsIOS} from '../../core/theme/colors';
import {isAndroid} from '../../core/theme/commonConsts';
import {platformMixedColor} from '../helpers/colorHelpers';

interface IProps extends PressableProps {
  style?: ViewStyle | ViewStyle[];
  highlightColor?: string | null | OpaqueColorValue;
}

export const TouchablePlatform: FC<IProps> =
  ({children, highlightColor = defaultHighlightColor, style, ...props}) => {
    const pressableStyle = useCallback(
      (state: PressableStateCallbackType) => {
        if (isAndroid) {
          return style;
        } else {
          return [
            style,
            state.pressed &&
              ({
                backgroundColor: highlightColor,
              } as ViewStyle),
          ];
        }
      },
      [style, highlightColor],
    );

    /**
     * Android can't use platform native colors
     */
    const rippleConfig = useMemo(() => {
      return highlightColor != null
        ? {...androidRippleConfig, color: highlightColor}
        : androidRippleConfig;
    }, [highlightColor]);

    return (
      <Pressable
        android_disableSound={false}
        android_ripple={rippleConfig}
        {...props}
        style={pressableStyle}
      >
        {children}
      </Pressable>
    );
};

const defaultHighlightColor = platformMixedColor(
    PlatformColorsIOS.secondarySystemFill,
    Colors.white,
);

const androidRippleConfig: PressableAndroidRippleConfig = {
  color: Colors.white,
  borderless: false,
};

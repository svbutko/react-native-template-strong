import React, {FC, memo, useCallback, useMemo} from "react";
import {
  OpaqueColorValue,
  Pressable,
  PressableAndroidRippleConfig,
  PressableProps,
  PressableStateCallbackType,
  ViewStyle,
} from "react-native";
import {Colors, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme/colors";
import {isAndroid} from "../../core/theme/commonConsts";
import {platformNativeColor} from "../helpers/colorHelpers";

interface IProps extends PressableProps {
  style?: ViewStyle | ViewStyle[];
  highlightColor?: string | null | OpaqueColorValue;
}

export const TouchablePlatform: FC<IProps> = memo(({children, highlightColor, ...props}) => {
  const pressableStyle = useCallback(
    (state: PressableStateCallbackType) => {
      if (isAndroid) {
        return props.style;
      } else {
        return [
          props.style,
          state.pressed &&
            ({
              backgroundColor: highlightColor,
            } as ViewStyle),
        ];
      }
    },
    [props.style, highlightColor],
  );

  const rippleConfig = useMemo(() => {
    return highlightColor != null ? {...androidRippleConfig, color: highlightColor} : androidRippleConfig;
  }, [highlightColor]);

  return (
    <Pressable android_disableSound={false} android_ripple={rippleConfig} {...props} style={pressableStyle as any}>
      {children}
    </Pressable>
  );
});

const androidRippleConfig: PressableAndroidRippleConfig = {
  color: Colors.white,
  borderless: false,
};

TouchablePlatform.defaultProps = {
  highlightColor: platformNativeColor(PlatformColorsIOS.secondarySystemFill, PlatformColorsAndroid.primaryLight),
};

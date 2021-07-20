import React, {FC, memo, useCallback} from "react";
import {OpaqueColorValue, PlatformColor, Pressable, PressableProps, PressableStateCallbackType, ViewStyle} from "react-native";
import {isAndroid, isIos, PlatformColorsIOS} from "../../core/theme";

interface IProps extends PressableProps {
  style?: ViewStyle | ViewStyle[];
  highlightColor?: string | OpaqueColorValue;
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

  return (
    <Pressable android_disableSound={false} {...props} style={pressableStyle as any}>
      {children}
    </Pressable>
  );
});

TouchablePlatform.defaultProps = {
  highlightColor: isIos ? PlatformColor(PlatformColorsIOS.quaternarySystemFill) : undefined,
};

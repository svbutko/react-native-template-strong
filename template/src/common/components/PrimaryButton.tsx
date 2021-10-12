import React, {FC, memo, useMemo} from "react";
import {
  ActivityIndicator,
  Image,
  ImageStyle,
  ImageURISource,
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import {ButtonType, IIconPlatformProps, TouchablePlatformProps} from "../../types";
import {TouchablePlatform} from "./TouchablePlatform";
import {Colors, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme/colors";
import {isAndroid, isIos} from "../../core/theme/commonConsts";
import {CommonSizes} from "../../core/theme/commonSizes";
import {CommonStyles} from "../../core/theme/commonStyles";
import {platformMixedColor, platformNativeColor} from "../helpers/colorHelpers";
import {IconPlatform} from "./IconPlatform";

interface IProps extends TouchablePlatformProps {
  label: string;
  type: ButtonType;
  rounded?: boolean;
  icon?: ImageURISource;
  iconStyle?: StyleProp<ImageStyle>;
  platformIconProps?: IIconPlatformProps;
  labelStyle?: TextStyle;
  isLoading?: boolean;
}

export const PrimaryButton: FC<IProps> = memo(
  ({label, icon, iconStyle, type, rounded, labelStyle, style, isLoading, platformIconProps, ...props}) => {
    const styles = useMemo(() => {
      return getStyles(type, rounded, props.disabled);
    }, [type, rounded, props.disabled]);

    const highlightColor = useMemo(() => {
      switch (type) {
        case ButtonType.solid:
          return platformMixedColor(PlatformColorsIOS.systemFill, Colors.white);
        case ButtonType.outline:
          return platformMixedColor(undefined, Colors.black);
        case ButtonType.borderless:
          return platformMixedColor(undefined, Colors.black);
        case ButtonType.outlineNegative:
          return platformMixedColor(undefined, Colors.red);
        default:
          return undefined;
      }
    }, [type]);

    const content = useMemo(() => {
      if (isLoading) {
        return (
          <ActivityIndicator
            animating={true}
            color={platformNativeColor(PlatformColorsIOS.label, PlatformColorsAndroid.primary)}
            size={"small"}
          />
        );
      } else {
        return (
          <>
            <ButtonIcon icon={icon} iconStyle={[styles.icon, iconStyle]} platformIconProps={platformIconProps} />
            <Text style={[styles.label, labelStyle]} numberOfLines={1}>
              {isAndroid ? label.toUpperCase() : label}
            </Text>
          </>
        );
      }
    }, [icon, iconStyle, isLoading, label, labelStyle, styles.icon, styles.label]);

    return (
      <TouchablePlatform style={[styles.button, style] as any} highlightColor={highlightColor} {...props}>
        {content}
      </TouchablePlatform>
    );
  },
);

const ButtonIcon: FC<Pick<IProps, "icon" | "iconStyle" | "platformIconProps">> = memo((props) => {
  if (props.icon != null) {
    return <Image source={props.icon} style={props.iconStyle} />;
  } else if (props.platformIconProps != null) {
    return <IconPlatform {...props.platformIconProps} />;
  } else {
    return null;
  }
});

function getStyles(type: ButtonType, rounded?: boolean, disabled?: boolean | null): IStyles {
  switch (type) {
    case ButtonType.solid:
      return mergeStylesWithDisabled(rounded ? smallSolidStyles : solidStyles, disabled);
    case ButtonType.outline:
      return mergeStylesWithDisabled(rounded ? smallOutlineStyles : outlineStyles, disabled, true);
    case ButtonType.outlineNegative:
      return mergeStylesWithDisabled(rounded ? smallOutlineStyles : outlineNegativeStyles, disabled, true);
    case ButtonType.borderless:
      return borderlessStyles;
    default:
      throw new Error("Unknown button type: " + type);
  }
}

function mergeStylesWithDisabled(styles: IStyles, disabled?: boolean | null, outline?: boolean): IStyles {
  return disabled
    ? {
        ...styles,
        button: {
          ...styles.button,
          backgroundColor: platformMixedColor(PlatformColorsIOS.systemFill, PlatformColorsAndroid.divider),
          borderColor: outline ? platformMixedColor(PlatformColorsIOS.tertiarySystemFill) : styles.button.borderColor,
          elevation: 0,
        } as ViewStyle,
        icon: {
          ...styles.icon,
          tintColor: platformMixedColor(PlatformColorsIOS.placeholderText, Colors.gray),
        } as ImageStyle,
        label: {
          ...styles.label,
          color: platformMixedColor(PlatformColorsIOS.placeholderText, PlatformColorsAndroid.secondaryText),
        } as TextStyle,
      }
    : styles;
}

interface IStyles {
  button: ViewStyle;
  icon: ImageStyle;
  label: TextStyle;
}

const commonButtonStyle: ViewStyle = {
  padding: CommonSizes.spacing.medium,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: isIos ? CommonSizes.borderRadius.large : CommonSizes.borderRadius.extraSmall,
  flexDirection: "row",
  backgroundColor: Colors.transparent,
};

const commonLabelStyle: TextStyle = {
  ...CommonStyles.normalText,
  color: Colors.white,
  textAlign: "center",
  textAlignVertical: "center",
};

const commonIcon: ImageStyle = {
  width: 22,
  height: 22,
  marginHorizontal: CommonSizes.spacing.extraSmall,
  resizeMode: "contain",
  tintColor: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.black),
};

const solidStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    backgroundColor: platformMixedColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
    ...Platform.select({
      android: {
        ...CommonStyles.shadow,
      },
    }),
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: Colors.white,
  },
});

const outlineStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    borderColor: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.gray),
    borderWidth: 1,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: platformMixedColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: platformMixedColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as ImageStyle,
});

const outlineNegativeStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    borderColor: platformMixedColor(PlatformColorsIOS.systemRed, Colors.red),
    borderWidth: 1,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: platformMixedColor(PlatformColorsIOS.systemRed, Colors.red),
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: platformMixedColor(PlatformColorsIOS.systemRed, Colors.red),
  } as ImageStyle,
});

const borderlessStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    borderRadius: undefined,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: platformMixedColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: platformMixedColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as ImageStyle,
});

const roundedButtonStyle: ViewStyle = {
  paddingHorizontal: CommonSizes.spacing.medium,
  paddingVertical: CommonSizes.spacing.extraSmall,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: CommonSizes.borderRadius.extraLarge,
  flexDirection: "row",
  backgroundColor: Colors.transparent,
};

const smallSolidStyles = StyleSheet.create({
  button: {
    ...roundedButtonStyle,
    backgroundColor: platformMixedColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as ViewStyle,
  label: {
    ...CommonStyles.normalText,
  } as TextStyle,
  icon: {
    ...commonIcon,
  },
});

const smallOutlineStyles = StyleSheet.create({
  button: {
    ...roundedButtonStyle,
    borderColor: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.gray),
    borderWidth: 1,
  } as ViewStyle,
  label: {
    ...CommonStyles.normalText,
    color: platformMixedColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.gray),
  } as ImageStyle,
});

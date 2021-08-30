import React, {FC, memo, useMemo} from "react";
import {ActivityIndicator, Image, ImageProps, ImageStyle, ImageURISource, StyleSheet, Text, TextStyle, ViewStyle} from "react-native";
import {Colors, CommonSizes, CommonStyles, hairlineWidth, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";
import {ButtonType, TouchablePlatformProps} from "../../types";
import {TouchablePlatform} from "./TouchablePlatform";
import {platformMixedColor, platformNativeColor} from "../helpers";

interface IProps extends TouchablePlatformProps {
  label: string;
  type: ButtonType;
  rounded?: boolean;
  icon?: ImageURISource;
  iconStyle?: ImageStyle;
  labelStyle?: TextStyle;
  isLoading?: boolean;
}

export const PrimaryButton: FC<IProps> = memo(({label, icon, iconStyle, type, rounded, labelStyle, style, isLoading, ...props}) => {
  const styles = useMemo(() => {
    return getStyles(type, rounded, props.disabled);
  }, [type, rounded, props.disabled]);

  const highlightColor = useMemo(() => {
    return type == ButtonType.solid ? platformMixedColor(PlatformColorsIOS.systemFill, Colors.black) : undefined;
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
          <ButtonIcon source={icon} style={[styles.icon, iconStyle]} />
          <Text style={[styles.label, labelStyle]} numberOfLines={1}>
            {label}
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
});

const ButtonIcon: FC<Partial<ImageProps>> = memo((props) => {
  return props.source != null ? <Image {...props} source={props.source} /> : null;
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
          backgroundColor: platformMixedColor(PlatformColorsIOS.systemFill, PlatformColorsAndroid.highlight),
          borderColor: outline ? platformMixedColor(PlatformColorsIOS.tertiarySystemFill) : styles.button.borderColor,
        } as ViewStyle,
        icon: {
          ...styles.icon,
          tintColor: platformMixedColor(PlatformColorsIOS.placeholderText, Colors.black),
        } as ImageStyle,
        label: {
          ...styles.label,
          color: platformMixedColor(PlatformColorsIOS.placeholderText, PlatformColorsAndroid.darkerGray),
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
  borderRadius: CommonSizes.borderRadius.large,
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
    borderColor: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.black),
    borderWidth: hairlineWidth,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.black),
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.black),
  } as ImageStyle,
});

const outlineNegativeStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    borderColor: platformMixedColor(PlatformColorsIOS.systemRed, Colors.red),
    borderWidth: hairlineWidth,
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
    borderColor: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.black),
    borderWidth: hairlineWidth,
  } as ViewStyle,
  label: {
    ...CommonStyles.normalText,
    color: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.black),
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.black),
  } as ImageStyle,
});

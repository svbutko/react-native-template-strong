import React, {FC, memo, useMemo} from "react";
import {ActivityIndicator, Image, ImageProps, ImageStyle, ImageURISource, StyleSheet, Text, TextStyle, ViewStyle} from "react-native";
import {Colors, CommonSizes, CommonStyles, hairlineWidth, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";
import {ButtonType, TouchablePlatformProps} from "../../types";
import {TouchablePlatform} from "./TouchablePlatform";
import {platformNativeColor} from "../helpers";

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
    return type == ButtonType.solid ? platformNativeColor(PlatformColorsIOS.systemFill, PlatformColorsAndroid.activated) : undefined;
  }, [type]);

  const content = useMemo(() => {
    if (isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          color={platformNativeColor(PlatformColorsIOS.label, PlatformColorsAndroid.activated)}
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
          backgroundColor: platformNativeColor(PlatformColorsIOS.systemFill, PlatformColorsAndroid.primary),
          borderColor: outline
            ? platformNativeColor(PlatformColorsIOS.tertiarySystemFill, PlatformColorsAndroid.primary)
            : styles.button.borderColor,
        } as ViewStyle,
        icon: {
          ...styles.icon,
          tintColor: platformNativeColor(PlatformColorsIOS.placeholderText, PlatformColorsAndroid.primary),
        } as ImageStyle,
        label: {
          ...styles.label,
          color: platformNativeColor(PlatformColorsIOS.placeholderText, PlatformColorsAndroid.primary),
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
  tintColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
};

const solidStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    backgroundColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
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
    borderColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
    borderWidth: hairlineWidth,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as ImageStyle,
});

const outlineNegativeStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    borderColor: platformNativeColor(PlatformColorsIOS.systemRed, PlatformColorsAndroid.primary),
    borderWidth: hairlineWidth,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: platformNativeColor(PlatformColorsIOS.systemRed, PlatformColorsAndroid.primary),
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: platformNativeColor(PlatformColorsIOS.systemRed, PlatformColorsAndroid.primary),
  } as ImageStyle,
});

const borderlessStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    borderRadius: undefined,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
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
    backgroundColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
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
    borderColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
    borderWidth: hairlineWidth,
  } as ViewStyle,
  label: {
    ...CommonStyles.normalText,
    color: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.primary),
  } as ImageStyle,
});

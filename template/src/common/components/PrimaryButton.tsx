import React, {FC, memo, useMemo} from "react";
import {ActivityIndicator, Image, ImageProps, ImageStyle, ImageURISource, StyleSheet, Text, TextStyle, ViewStyle} from "react-native";
import {Colors, CommonStyles, Fonts} from "../../core/theme";
import {ButtonType, TouchablePlatformProps} from "../../types";
import {TouchablePlatform} from "./TouchablePlatform";

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
    return type == ButtonType.solid ? Colors.red : undefined;
  }, [type]);

  const content = useMemo(() => {
    if (isLoading) {
      return <ActivityIndicator animating={true} color={Colors.black} size={"small"} />;
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
          backgroundColor: Colors.gray,
          borderColor: outline ? Colors.red : styles.button.borderColor,
        } as ViewStyle,
        icon: {
          ...styles.icon,
          tintColor: Colors.gray,
        } as ImageStyle,
        label: {
          ...styles.label,
          color: Colors.gray,
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
  padding: 12,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 5,
  flexDirection: "row",
  backgroundColor: Colors.transparent,
};

const commonLabelStyle: TextStyle = {
  fontFamily: Fonts.system,
  fontStyle: "normal",
  fontWeight: "800",
  fontSize: 18,
  lineHeight: 24,
  textAlign: "center",
};

const commonIcon: ImageStyle = {
  width: 24,
  height: 24,
  resizeMode: "contain",
  tintColor: Colors.white,
};

const solidStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    backgroundColor: Colors.red,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: Colors.white,
  } as TextStyle,
  icon: commonIcon,
});

const outlineStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    borderColor: Colors.red,
    borderWidth: 1,
    padding: (commonButtonStyle.padding as number) - 1,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: Colors.red,
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: Colors.red,
  } as ImageStyle,
});

//TODO: Add outlineNegative in Storybook
const outlineNegativeStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    borderColor: Colors.gray,
    borderWidth: 1,
    padding: (commonButtonStyle.padding as number) - 1,
  } as ViewStyle,
  label: {
    ...commonLabelStyle,
    color: Colors.black,
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: Colors.black,
  } as ImageStyle,
});

const borderlessStyles = StyleSheet.create({
  button: {
    ...commonButtonStyle,
    borderRadius: undefined,
  } as ViewStyle,
  label: {
    ...CommonStyles.normalText,
    color: Colors.black,
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: Colors.red,
  } as ImageStyle,
});

const roundedButtonStyle: ViewStyle = {
  paddingHorizontal: 18,
  paddingVertical: 6,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 16,
  flexDirection: "row",
  backgroundColor: Colors.transparent,
};

//TODO: Small styles are incorrect
const smallSolidStyles = StyleSheet.create({
  button: {
    ...roundedButtonStyle,
    backgroundColor: Colors.red,
  } as ViewStyle,
  label: {
    ...CommonStyles.normalText,
    color: Colors.white,
    textAlign: "center",
  } as TextStyle,
  icon: commonIcon,
});

const smallOutlineStyles = StyleSheet.create({
  button: {
    ...roundedButtonStyle,
    borderColor: Colors.red,
    borderWidth: 1,
    paddingVertical: (roundedButtonStyle.paddingVertical as number) - 1,
    paddingHorizontal: (roundedButtonStyle.paddingHorizontal as number) - 1,
  } as ViewStyle,
  label: {
    ...CommonStyles.normalText,
    color: Colors.red,
    textAlign: "center",
  } as TextStyle,
  icon: {
    ...commonIcon,
    tintColor: Colors.red,
  } as ImageStyle,
});

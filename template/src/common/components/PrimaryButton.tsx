import React, {FC, memo, useMemo} from "react";
import {ActivityIndicator, Image, ImageProps, ImageStyle, ImageURISource, Text, TextStyle, ViewStyle} from "react-native";
import {styleSheetCreate, styleSheetFlatten} from "../utils";
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
    return type == ButtonType.solid ? Colors.highlightRed : undefined;
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
          backgroundColor: Colors.grayDisabled,
          borderColor: outline ? Colors.lightBlue : styles.button.borderColor,
        } as ViewStyle,
        icon: {
          ...styles.icon,
          tintColor: Colors.lightGray,
        } as ImageStyle,
        label: {
          ...styles.label,
          color: Colors.lightGray,
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
  fontFamily: Fonts.avenir,
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

const solidStyles = styleSheetCreate({
  button: styleSheetFlatten([commonButtonStyle, {backgroundColor: Colors.red}]) as ViewStyle,
  label: styleSheetFlatten([commonLabelStyle, {color: Colors.white}]) as TextStyle,
  icon: commonIcon,
});

const outlineStyles = styleSheetCreate({
  button: styleSheetFlatten([
    commonButtonStyle,
    {
      borderColor: Colors.red,
      borderWidth: 1,
      padding: (commonButtonStyle.padding as number) - 1,
    },
  ]) as ViewStyle,
  label: styleSheetFlatten([commonLabelStyle, {color: Colors.red}]) as TextStyle,
  icon: styleSheetFlatten([commonIcon, {tintColor: Colors.red}]) as ImageStyle,
});

//TODO: Add outlineNegative in Storybook
const outlineNegativeStyles = styleSheetCreate({
  button: styleSheetFlatten([
    commonButtonStyle,
    {
      borderColor: Colors.lightBlue,
      borderWidth: 1,
      padding: (commonButtonStyle.padding as number) - 1,
    },
  ]) as ViewStyle,
  label: styleSheetFlatten([commonLabelStyle, {color: Colors.dark}]) as TextStyle,
  icon: styleSheetFlatten([commonIcon, {tintColor: Colors.dark}]) as ImageStyle,
});

const borderlessStyles = styleSheetCreate({
  button: styleSheetFlatten([commonButtonStyle, {borderRadius: undefined}]) as ViewStyle,
  label: styleSheetFlatten([CommonStyles.normalText, {color: Colors.dark}]) as TextStyle,
  icon: styleSheetFlatten([commonIcon, {tintColor: Colors.red}]) as ImageStyle,
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
const smallSolidStyles = styleSheetCreate({
  button: styleSheetFlatten([roundedButtonStyle, {backgroundColor: Colors.red}]) as ViewStyle,
  label: styleSheetFlatten([CommonStyles.normalText, {color: Colors.white, textAlign: "center"}]) as TextStyle,
  icon: commonIcon,
});

const smallOutlineStyles = styleSheetCreate({
  button: styleSheetFlatten([
    roundedButtonStyle,
    {
      borderColor: Colors.red,
      borderWidth: 1,
      paddingVertical: (roundedButtonStyle.paddingVertical as number) - 1,
      paddingHorizontal: (roundedButtonStyle.paddingHorizontal as number) - 1,
    },
  ]) as ViewStyle,
  label: styleSheetFlatten([CommonStyles.normalText, {color: Colors.red, textAlign: "center"}]) as TextStyle,
  icon: styleSheetFlatten([commonIcon, {tintColor: Colors.red}]) as ImageStyle,
});

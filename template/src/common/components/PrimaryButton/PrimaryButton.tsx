import React, {FC, memo, useMemo} from "react";
import {
  ActivityIndicator,
  Image,
  ImageProps,
  ImageStyle,
  ImageURISource,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import {TouchablePlatformProps} from "~/types";
import {TouchablePlatform} from "../TouchablePlatform";
import {Colors} from "~/core/theme/colors";
import {useTranslation} from "react-i18next";
import {ButtonType} from "~/common/components/PrimaryButton/ButtonType";
import {borderlessStyles} from "./styles/borderlessButtonStyles";
import {outlineStyles} from "./styles/outlineButtonStyles";
import {solidStyles} from "~/common/components/PrimaryButton/styles/solidStyles";
import {Brand} from "~/infrastructure";
import {TFuncKeyApp} from "~/common/localization/localization";

interface IStyles {
  button: ViewStyle;
  icon: ImageStyle;
  label: TextStyle;
}

interface IProps extends TouchablePlatformProps {
  text?: string;
  labelKey?: string;
  type: ButtonType;
  icon?: ImageURISource;
  iconStyle?: StyleProp<ImageStyle>;
  labelStyle?: TextStyle;
  isLoading?: boolean;
  onPress?: () => void;
}

export const PrimaryButton: FC<IProps> = memo(
  ({text, labelKey, icon, iconStyle, type, labelStyle, style, isLoading, children, onPress, ...props}) => {
    const {t} = useTranslation();
    const styles = useMemo(() => {
      return getStyles(type, props.disabled);
    }, [type, props.disabled]);

    const highlightColor = useMemo(() => {
      switch (type) {
        case ButtonType.solid:
          return Colors.white;
        case ButtonType.outline:
          return Colors.blue;
        case ButtonType.borderless:
          return Colors.blue;
        default:
          return undefined;
      }
    }, [type]);

    const content = useMemo(() => {
      if (isLoading) {
        return (
          <ActivityIndicator
            animating={true}
            color={Colors.black}
            size={"small"}
          />
        );
      } else {
        return children || (
          <>
            <ButtonIcon source={icon} style={[styles.icon, iconStyle]}/>
            <Brand.H5 style={[styles.label, labelStyle]} numberOfLines={1}>
              {labelKey ? t(labelKey as TFuncKeyApp) : text}
            </Brand.H5>
          </>
        );
      }
    }, [isLoading, children, icon, styles.icon, styles.label, iconStyle, labelStyle, labelKey, t, text]);

    return (
      <TouchablePlatform
        style={[styles.button, style] as any}
        highlightColor={highlightColor}
        {...props}
        onLongPress={onPress}
        onPress={onPress}
        disabled={isLoading || props.disabled}
      >
        {content}
      </TouchablePlatform>
    );
  },
);

const ButtonIcon: FC<Partial<ImageProps>> = memo((props) => {
  return props.source != null ? <Image {...props} source={props.source}/> : null;
});

function getStyles(type: ButtonType, disabled?: boolean | null): IStyles {
  switch (type) {
    case ButtonType.solid:
      return mergeStylesWithDisabled(solidStyles, type, disabled);
    case ButtonType.outline:
      return mergeStylesWithDisabled(outlineStyles, type, disabled);
    case ButtonType.borderless:
      return mergeStylesWithDisabled(borderlessStyles, type, disabled);
    default:
      throw new Error("Unknown button type: " + type);
  }
}

function mergeStylesWithDisabled(styles: IStyles, type: ButtonType, disabled?: boolean | null): IStyles {
  return disabled
    ? {
      ...styles,
      button: {
        ...styles.button,
        backgroundColor: type == ButtonType.solid ? Colors.darkGray : Colors.transparent,
        borderColor: type == ButtonType.outline ? Colors.gray : styles.button.borderColor,
      } as ViewStyle,
      icon: {
        ...styles.icon,
        tintColor: Colors.primaryBlack,
      } as ImageStyle,
      label: {
        ...styles.label,
        color: Colors.gray,
      } as TextStyle,
    }
    : styles;
}

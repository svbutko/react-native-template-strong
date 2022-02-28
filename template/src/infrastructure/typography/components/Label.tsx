import _ from "lodash";
import React, {FC, memo, useCallback, useMemo} from "react";
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from "react-native";
import {LabelTypes, LabelSizes, LabelWeights} from "../types";
import {Typography} from "../typography";
import {useTranslation} from "react-i18next";
import {TFuncKeyApp} from "~/common/localization/localization";

export interface ILabelProps extends TextProps {
  size: LabelSizes;
  type: LabelTypes;
  weight?: LabelWeights;
  text?: string;
  labelKey?: TFuncKeyApp;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const Label: FC<ILabelProps> = memo((props) => {
  const config = useMemo(() => Typography.configuration, []);
  const logger = config?.logger;
  const {t} = useTranslation();
  const style = useMemo(
    () => {
      const baseStyle: TextStyle = _.get(config, `${props.type}.${props.size}`, null);

      if (!baseStyle) {
        logger?.warn(`${props.type} style of size ${props.size} where not found`, {
          stack: new Error("debug error").stack,
        });
      }

      switch (props.weight) {
        case LabelWeights.Regular:
          baseStyle.fontWeight = "400";
          break;
        case LabelWeights.Medium:
          baseStyle.fontWeight = "500";
          break;
        case LabelWeights.Bold:
          baseStyle.fontWeight = "700";
          break;
        case LabelWeights.EBold:
          baseStyle.fontWeight = "900";
          break;
        default:
          break;
      }

      return StyleSheet.flatten([baseStyle, props.color ? {color: props.color} : null, props.style]);
    },
    [config, logger, props.color, props.size, props.style, props.type, props.weight],
  );

  const localize = useCallback(() => {
    if (props.labelKey) {
      return t(props.labelKey);
    } else {
      return props.text;
    }
  }, [t, props.labelKey, props.text]);

  const content = localize() || props.children || "";

  return (
    <Text {...props} style={style}>{content}</Text>
  );
});

Label.defaultProps = {
  size: LabelSizes.H4,
  weight: LabelWeights.Regular,
};

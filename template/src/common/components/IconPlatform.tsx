import React, {FC, memo} from "react";
import {isIos} from "../../core/theme/commonConsts";
import Icon from "react-native-vector-icons/MaterialIcons";
import {SFSymbol, SFSymbolProps} from "react-native-sfsymbols";
import {IconProps} from "react-native-vector-icons/Icon";
import {ColorValue, TextStyle, ViewStyle} from "react-native";
import {SFSymbols} from "../../../resources/symbols/SFSymbols";

interface IProps extends Omit<IconProps, "name" | "color">, Omit<SFSymbolProps, "name"> {
  iosName: SFSymbols;
  androidName: string;
  color?: ColorValue;
  style?: TextStyle | ViewStyle;
}

export const IconPlatform: FC<IProps> = memo(({iosName, androidName, ...props}) => {
  if (isIos) {
    return <SFSymbol {...props} name={iosName} />;
  } else {
    return <Icon {...props} name={androidName} />;
  }
});

import React, {FC, useMemo} from "react";
import {View, ViewStyle} from "react-native";
import {styleSheetCreate} from "../utils";
import {hairlineWidth, isIos, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";

interface IProps {
  isFull?: boolean;
}

export const Separator: FC<IProps> = ({isFull}) => {
  const containerStyle = useMemo(() => {
    return isFull ? styles.fullContainer : styles.container;
  }, [isFull]);

  return <View style={containerStyle} />;
};

const styles = styleSheetCreate({
  container: {
    height: hairlineWidth,
    backgroundColor: isIos ? PlatformColorsIOS.separator : PlatformColorsAndroid.secondary,
    marginHorizontal: 16,
  } as ViewStyle,
  fullContainer: {
    height: hairlineWidth,
    backgroundColor: isIos ? PlatformColorsIOS.separator : PlatformColorsAndroid.secondary,
  } as ViewStyle,
});

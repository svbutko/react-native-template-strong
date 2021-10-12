import React, {FC, memo} from "react";
import {isAndroid, isIos} from "../../core/theme/commonConsts";
import Icon from "react-native-vector-icons/MaterialIcons";
import {SFSymbol} from "react-native-sfsymbols";
import {IIconPlatformProps} from "../../types";

export const IconPlatform: FC<IIconPlatformProps> = memo(({iosName, androidName, ...props}) => {
  if (isIos && iosName) {
    return <SFSymbol {...props} name={iosName} />;
  } else if (isAndroid && androidName) {
    return <Icon {...props} name={androidName} />;
  } else {
    return null;
  }
});

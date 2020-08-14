import {Dimensions, Platform, PlatformIOSStatic} from "react-native";

let isIphoneXValue: boolean | null;

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export function isIphoneX(): boolean {
    if (isIphoneXValue == null) {
        const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get("window");

        isIphoneXValue =
            Platform.OS == "ios" && !(Platform as PlatformIOSStatic).isPad
            && (((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH)
            || (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))
            || ((D_HEIGHT === XSMAX_HEIGHT && D_WIDTH === XSMAX_WIDTH)
                || (D_HEIGHT === XSMAX_WIDTH && D_WIDTH === XSMAX_HEIGHT)));
    }

    return isIphoneXValue;
}

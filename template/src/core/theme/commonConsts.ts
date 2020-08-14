import {Dimensions, PixelRatio, Platform, StatusBar} from "react-native";
import {isIphoneX as isIphoneXFunc} from "./isIphoneX";

const windowDimensions = Dimensions.get("window");
export const isIos = Platform.OS == "ios";
export const isIphoneX = isIphoneXFunc();
export const isIpad = Platform.OS == "ios" && Platform.isPad;

export const isAndroid = Platform.OS != "ios";
export const isAndroidLollipop = Platform.Version >= 21 && Platform.Version < 23;

export const windowWidth = windowDimensions.width;
export const windowHeight = windowDimensions.height - (!isIos ? StatusBar.currentHeight || 0 : 0);

export const screenTabInitialLayout = {height: 0, width: windowWidth};
export const menuWidth = windowWidth - windowWidth * 0.2;

export const hitSlop = {top: 10, bottom: 10, left: 10, right: 10};
export const hitSlopBig = {top: 20, bottom: 20, left: 20, right: 20};

export const pixelRatio = PixelRatio.get();
export const tabBarHeight = isIphoneX ? 65 : 49;

export const maxWindowDimension = Math.max(windowWidth, windowHeight);
export const minWindowDimension = Math.min(windowHeight, windowWidth);

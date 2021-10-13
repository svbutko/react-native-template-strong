import dayjs from "dayjs";
import {Dimensions, PixelRatio, Platform, StatusBar, StyleSheet} from "react-native";
import Device from "react-native-device-detection";

const windowDimensions = Dimensions.get("window");
export const isIos = Device.isIos;
export const isIphoneX = Device.isIphoneX;
export const isIpad = isIos && (Platform as any).isPad;
export const isTablet = Device.isTablet;

export const isAndroid = Device.isAndroid;
export const isAndroidLollipop = isAndroid && Platform.Version >= 21 && Platform.Version < 23;
export const isAndroid11AndHigher = isAndroid && Platform.Version >= 30;

export const windowWidth = windowDimensions.width;
export const windowHeight = windowDimensions.height - (!isIos ? StatusBar.currentHeight || 0 : 0);

export const screenTabInitialLayout = {height: 0, width: windowWidth};
export const hairlineWidth = StyleSheet.hairlineWidth;

export const hitSlop = {top: 10, bottom: 10, left: 10, right: 10};
export const hitSlopBig = {top: 20, bottom: 20, left: 20, right: 20};

export const pixelRatio = PixelRatio.get();

export const maxWindowDimension = Math.max(windowWidth, windowHeight);
export const minWindowDimension = Math.min(windowHeight, windowWidth);

export const minimalLegalAge = dayjs().subtract(16, "years").toDate();
export const maximalAge = dayjs().subtract(100, "years").toDate();

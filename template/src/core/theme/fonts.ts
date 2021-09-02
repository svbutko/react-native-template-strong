import {isIos} from "./commonConsts";

export const Fonts = {
  system: "System",
  regular: isIos ? "SFProText-Regular" : "Roboto-Regular",
  bold: isIos ? "SFProText-Bold" : "Roboto-Bold",
  semiBold: isIos ? "SFProText-Semibold" : "Roboto-Medium",
  thin: isIos ? "SFProText-Thin" : "Roboto-Thin",
};

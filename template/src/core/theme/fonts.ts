import {isIos} from "./commonConsts";

export class Fonts {
    static regular = isIos ? "SFProText-Regular" : "Roboto-Regular";
    static italic = isIos ? "SFProText-RegularItalic" : "Roboto-Italic";
    static light = isIos ? "SFProText-Light" : "Roboto-Light";
    static ultraLight = isIos ? "SFProText-Ultralight" : "Roboto-Light";
    static medium = isIos ? "SFProText-Medium" : "Roboto-Medium";
    static bold = isIos ? "SFProText-Bold" : "Roboto-Bold";
    static semiBold = isIos ? "SFProText-Semibold" : "Roboto-Bold";
    static thin = isIos ? "SFProText-Thin" : "Roboto-Thin";
    static black = isIos ? "SFProText-Black" : "Roboto-Black";
    static heavy = isIos ? "SFProText-Heavy" : "Roboto-Black";
    static glyph = isIos ? "SFProText-Regular" : "MaterialIcons-Regular";
}

import {PlatformColor} from "react-native";
import {Colors, isIos, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";

export function platformNativeColor(iosColor?: PlatformColorsIOS, androidColor?: PlatformColorsAndroid) {
  const selectedColor = isIos ? iosColor : androidColor;

  return selectedColor != null ? PlatformColor(selectedColor) : undefined;
}

export function platformLocalColor(iosColor?: Colors, androidColor?: Colors) {
  return isIos ? iosColor : androidColor;
}

export function platformMixedColor(iosColor?: Colors | PlatformColorsIOS, androidColor?: Colors | PlatformColorsAndroid) {
  const selectedColor = isIos ? iosColor : androidColor;

  if (selectedColor != null) {
    return Object.values(Colors).includes(selectedColor as Colors) ? (selectedColor as Colors) : PlatformColor(selectedColor);
  } else {
    return undefined;
  }
}

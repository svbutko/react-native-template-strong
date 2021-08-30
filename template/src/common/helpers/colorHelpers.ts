import {PlatformColor} from "react-native";
import {Colors, isIos, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";

export function platformNativeColor(iosColor: PlatformColorsIOS, androidColor: PlatformColorsAndroid) {
  return PlatformColor(isIos ? iosColor : androidColor);
}

export function platformLocalColor(iosColor: Colors, androidColor: Colors) {
  return isIos ? iosColor : androidColor;
}

export function platformMixedColor(iosColor: Colors | PlatformColorsIOS, androidColor: Colors | PlatformColorsAndroid) {
  const selectedColor = isIos ? iosColor : androidColor;

  return Object.values(Colors).includes(selectedColor as Colors) ? (selectedColor as Colors) : PlatformColor(selectedColor);
}

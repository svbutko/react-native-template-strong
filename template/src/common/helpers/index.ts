import {getCurrentOrientation, setDefaultOrientation} from "./orientationHelpers";
import {fromArray, fromMap, withNewElement, withNewElements} from "./fromMap";
import {defaultKeyIdExtractor} from "./defaultKeyIdExtractor";
import {calculatePage} from "./calculatePage";
import {capitalizeFirstLetter, removeEmojis, removeHtmlTags} from "./stringsHelpers";
import {isEmail} from "./regexHelpers";
import {showActionSheet, showAlert, showCommonDialog} from "./dialogsHelpers";
import {convertCropperImageToBase64} from "./imageHelpers";
import {InputMask} from "./inputMask";
import {platformLocalColor, platformMixedColor, platformNativeColor} from "./colorHelpers";
import {startListeningToNetInfo, unsubscribeFromNetInfo} from "./netInfoHelpers";

export {
  getCurrentOrientation,
  setDefaultOrientation,
  fromArray,
  fromMap,
  withNewElement,
  withNewElements,
  defaultKeyIdExtractor,
  calculatePage,
  capitalizeFirstLetter,
  removeEmojis,
  removeHtmlTags,
  isEmail,
  showActionSheet,
  showCommonDialog,
  showAlert,
  convertCropperImageToBase64,
  InputMask,
  platformNativeColor,
  platformLocalColor,
  platformMixedColor,
  startListeningToNetInfo,
  unsubscribeFromNetInfo,
};

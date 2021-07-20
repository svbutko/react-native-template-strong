import {getCurrentOrientation, setDefaultOrientation} from "./orientationHelper";
import {fromArray, fromMap, withNewElement, withNewElements} from "./fromMap";
import {defaultKeyIdExtractor} from "./defaultKeyIdExtractor";
import {calculatePage} from "./calculatePage";
import {capitalizeFirstLetter, removeEmojis, removeHtmlTags} from "./stringsHelpers";
import {isEmail} from "./regexHelpers";
import {showActionSheet, showCommonDialog} from "./dialogsHelper";
import {convertCropperImageToBase64} from "./imageHelpers";
import {InputMask} from "./inputMask";

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
  convertCropperImageToBase64,
  InputMask,
};

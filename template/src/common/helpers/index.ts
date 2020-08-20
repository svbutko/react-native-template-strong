import { getCurrentOrientation, setDefaultOrientation } from "./orientationHelper";
import { fromArray, fromMap, withNewElement, withNewElements } from "./fromMap";
import { defaultKeyIdExtractor } from "./defaultKeyIdExtractor";
import { calculatePage } from "./calculatePage";
import { capitalizeFirstLetter, removeEmojis, removeHtmlTags } from "./stringsHelpers";
import { isEmail } from "./regexHelpers";

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
}

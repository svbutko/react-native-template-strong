import LocalizedStrings from "react-native-localization";
import {commonLocalization} from "./translations/commonLocalization";
import {errorsLocalization} from "./translations/errorsLocalization";
import {emptyLocalization} from "./translations/emptyLocalization";
import {setMomentLocale} from "./index";

export enum Languages {
    en = "en",
    ru = "ru",
}

export const localization = {
    common: new LocalizedStrings(commonLocalization),
    errors: new LocalizedStrings(errorsLocalization),
    empty: new LocalizedStrings(emptyLocalization),
};

export function getLanguage(): string {
    return localization.common.getLanguage();
}

export function getInterfaceLanguage(): string {
    return localization.common.getInterfaceLanguage();
}

export function setLanguage(language?: Languages): void {
    let localizationLanguage: Languages | string | undefined = language;

    if (localizationLanguage == null) {
        localizationLanguage = getLanguage();
    }

    const strings: any = Object.keys(localization);

    for (const key of strings) {
        if (strings[key].setLanguage) {
            strings[key].setLanguage(localizationLanguage);
        }
    }

    setMomentLocale(localizationLanguage);
}

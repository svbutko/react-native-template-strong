import {setMomentLocale} from "./momentFormatter";
import i18n from "i18next";
import {getI18n, initReactI18next, TFuncKey} from "react-i18next";
import {findBestAvailableLanguage} from "react-native-localize";
import {I18nManager} from "react-native";
import type {en} from "./translations/en";
import type {ru} from "./translations/ru";

export const languages = [
  {languageTag: "en", isRTL: false, name: "English"},
  {languageTag: "ru", isRTL: false, name: "Русский"},
] as const;

export const fallbackLng = languages[0].languageTag;

export type Languages = typeof languages[number];
export const languagesTags = languages.map(el => el.languageTag);
export const languagesNames = languages.map(el => el.name);
const getLanguageByTag = (tag?: string) => languages.find(el => el.languageTag == tag);

export type LanguageResource = typeof en | typeof ru;
// @ts-ignore
const testRu: typeof en;
// @ts-ignore
let testEn: typeof ru;
// @ts-ignore
// eslint-disable-next-line prefer-const
testEn = testRu;

export type TFuncKeyApp = TFuncKey<"translation", undefined, LanguageResource>;

const translationGetters: {[key: string]: (() => {[key: string]: LanguageResource}) | undefined} = {
  en: () => require("./translations/en"),
  ru: () => require("./translations/ru"),
};

i18n
  .use(initReactI18next)
  .init({
    resources: {},
    fallbackLng,
    interpolation: {escapeValue: false},
    react: {useSuspense: false},
  });

export const getLanguage = () => getLanguageByTag(getInterfaceLanguage()?.languageTag) || languages[0];
export const getInterfaceLanguage = () => findBestAvailableLanguage(languagesTags);

export async function setLanguage(inputLanguage?: Languages): Promise<void> {
  const language = inputLanguage || getLanguage();
  i18n.addResourceBundle(
    language.languageTag,
    "translation",
    translationGetters[language.languageTag]?.()[language.languageTag]["translation"],
    true,
    false,
  );

  I18nManager.forceRTL(language.isRTL);
  await i18n.changeLanguage(language.languageTag);
  setMomentLocale(language.languageTag);
}

export const i18next = getI18n();

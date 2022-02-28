export type Languages = "ru" | "en";

export const initialLang: Languages = "ru";

const localeEntries: [Languages, string][] = [
  ["ru", "Русский"],
  ["en", "English"],
];
export const languages = localeEntries.map(el => el[0]);
export const languagesLocalized = localeEntries.map(el => el[1]);

export const localizeLanguage = Object.fromEntries(localeEntries);

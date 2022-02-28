import {getInterfaceLanguage, i18next, setLanguage} from "~/common/localization/localization";

jest.mock("react-native-localization");

describe("Localization", () => {
    test("Current language: RU", () => {
        expect(i18next.language).toBe("ru");
    });

    test("Current interface language: RU", () => {
        expect(getInterfaceLanguage()).toBe("ru");
    });

    test("Set empty language", () => {
        setLanguage();
        expect(i18next.language).toBe("ru");
    });

    test("Set language: RU", () => {
        setLanguage({languageTag: 'ru', isRTL: false, name: 'Русский'});
        expect(i18next.language).toBe("ru");
    });
});

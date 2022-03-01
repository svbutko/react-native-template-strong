import {getInterfaceLanguage, getLanguage, setLanguage} from "../src/common/localization/localization";

jest.mock("react-native-localization");

describe("Localization", () => {
  test("Current language: EN", () => {
    expect(getLanguage()).toBe("en");
  });

  test("Current interface language: EN", () => {
    expect(getInterfaceLanguage()).toBe("en");
  });

  test("Set empty language", () => {
    setLanguage();
    expect(getLanguage()).toBe("en");
  });

  test("Set language: EN", () => {
    setLanguage({languageTag: "ru", isRTL: false, name: "Русский"});
    expect(getLanguage()).toBe("en");
  });
});

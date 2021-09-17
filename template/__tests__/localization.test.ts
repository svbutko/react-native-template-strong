import {getInterfaceLanguage, getLanguage, Languages, setLanguage} from "../src/common/localization/localization";

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
    setLanguage(Languages.en);
    expect(getLanguage()).toBe("en");
  });
});

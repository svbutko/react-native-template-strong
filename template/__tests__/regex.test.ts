import {isEmail} from "../src/common/helpers/regexHelpers";
import {capitalizeFirstLetter, removeEmojis, removeHtmlTags} from "../src/common/helpers/stringsHelpers";

describe("Regex", () => {
  describe("isEmail", () => {
    test("Invalid email: example.com", () => {
      expect(isEmail("example.com")).toBe(false);
    });

    test("Invalid email: A@b@c@domain.com", () => {
      expect(isEmail("A@b@c@domain.com")).toBe(false);
    });

    test("Invalid email: a”b(c)d,e:f;gi[j\\k]l@domain.com", () => {
      expect(isEmail("a”b(c)d,e:f;gi[j\\k]l@domain.com")).toBe(false);
    });

    test("Invalid email: abc is”not\\valid@domain.com", () => {
      expect(isEmail("abc is”not\\valid@domain.com")).toBe(false);
    });

    test("Invalid email: .test@domain.com", () => {
      expect(isEmail(".test@domain.com")).toBe(false);
    });

    test("Invalid email: test@domain..com", () => {
      expect(isEmail("test@domain..com")).toBe(false);
    });

    test("Valid email: test@domain.com", () => {
      expect(isEmail("test@domain.com")).toBe(true);
    });
  });

  describe("capitalizeFirstLetter", () => {
    test("Empty string", () => {
      expect(capitalizeFirstLetter("")).toBe("");
    });

    test("Word: test", () => {
      expect(capitalizeFirstLetter("test")).toBe("Test");
    });
  });

  describe("removeHtmlTags", () => {
    test("Empty string", () => {
      expect(removeHtmlTags("")).toBe("");
    });

    test("String without tags", () => {
      const testString = "Some random text without HTML tags like b r a";
      expect(removeHtmlTags(testString)).toBe(testString);
    });

    test("String with tag symbols", () => {
      const testString = "Test <> 123 /";
      expect(removeHtmlTags(testString)).toBe(testString);
    });

    test("String with HTML tags", () => {
      const testString = "<b>some text</b>";
      const expectedResult = "some text";
      expect(removeHtmlTags(testString)).toBe(expectedResult);
    });
  });

  describe("removeEmojis", () => {
    test("Empty string", () => {
      expect(removeEmojis("")).toBe("");
    });

    test("String without emojis", () => {
      const testString = "Some random text";
      expect(removeEmojis(testString)).toBe(testString);
    });

    test("String with emoji: Test😄", () => {
      expect(removeEmojis("Test😄")).toBe("Test");
    });

    test("Only emoji: 😄", () => {
      expect(removeEmojis("😄")).toBe("");
    });

    test("Several emojis in row: 😄👻😒", () => {
      expect(removeEmojis("😄👻😒")).toBe("");
    });
    test("Several emojis in row with text: test😄👻😒test", () => {
      expect(removeEmojis("test😄👻😒test")).toBe("testtest");
    });
  });
});

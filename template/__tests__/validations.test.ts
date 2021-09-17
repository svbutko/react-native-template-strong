import {phoneValidations} from "../src/common/validations/authValidations";
import {localization} from "../src/common/localization/localization";
import {datesValidation, emptyValidation} from "../src/common/validations/commonValidations";
import {emailValidations, fullNameValidations} from "../src/common/validations/profileValidations";

jest.mock("react-native-localization");

describe("Validations", () => {
  describe("commonValidations", () => {
    describe("emptyValidation", () => {
      test("Empty", () => {
        expect(emptyValidation("")).toBe(localization.errors.thisFieldIsRequired);
      });

      test("Not empty", () => {
        expect(emptyValidation("value")).toBe(null);
      });
    });

    describe("datesValidation", () => {
      test("Now, Now, From", () => {
        const now = new Date();
        expect(datesValidation(now, now, "from", "to", "from")).toBe(localization.errors.datesCantBeEqual("from", "to"));
      });

      test("Not empty", () => {
        expect(emptyValidation("value")).toBe(null);
      });
    });
  });

  describe("authValidations", () => {
    describe("phoneValidations", () => {
      test("Empty", () => {
        expect(phoneValidations("")).toBe(localization.errors.thisFieldIsRequired);
      });

      test("Short: 12345", () => {
        expect(phoneValidations("12345")).toBe(localization.errors.invalidPhoneNumber);
      });

      test("Long: 12345678910112345678", () => {
        expect(phoneValidations("12345678910112345678")).toBe(null);
      });

      test("Valid: 37377712345", () => {
        expect(phoneValidations("37377712345")).toBe(null);
      });
    });
  });

  describe("profileValidations", () => {
    describe("emailValidations", () => {
      test("Empty", () => {
        expect(emailValidations("")).toBe(localization.errors.thisFieldIsRequired);
      });

      test("Invalid email: A@b@c@domain.com", () => {
        expect(emailValidations("A@b@c@domain.com")).toBe(localization.errors.invalidEmail);
      });

      test("Valid email: test@domain.com", () => {
        expect(emailValidations("test@domain.com")).toBe(null);
      });
    });
  });

  describe("fullNameValidations", () => {
    describe("emailValidations", () => {
      test("Empty", () => {
        expect(fullNameValidations("")).toBe(localization.errors.thisFieldIsRequired);
      });

      test("Short name: a", () => {
        expect(fullNameValidations("a")).toBe(localization.errors.invalidFullName);
      });

      test("Short name with spaces: a", () => {
        expect(fullNameValidations("       a         ")).toBe(localization.errors.invalidFullName);
      });

      test("Valid name: Alex", () => {
        expect(fullNameValidations("Alex")).toBe(null);
      });
    });
  });
});

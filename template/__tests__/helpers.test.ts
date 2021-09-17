import {calculatePage} from "../src/common/helpers/calculatePage";

describe("Helpers", () => {
  describe("calculatePage", () => {
    test("count: 0", () => {
      expect(calculatePage(0)).toBe(1);
    });

    test("count: -1", () => {
      expect(() => calculatePage(-1)).toThrow("Count can't be negative");
    });

    test("count: 0, pageSize: 0", () => {
      expect(() => calculatePage(0, 0)).toThrow("Page size can't be 0 or negative");
    });

    test("count: 0, pageSize: -1", () => {
      expect(() => calculatePage(0, -1)).toThrow("Page size can't be 0 or negative");
    });

    test("count: 25", () => {
      expect(calculatePage(25)).toBe(2);
    });

    test("count: 40", () => {
      expect(calculatePage(25)).toBe(2);
    });
  });
});

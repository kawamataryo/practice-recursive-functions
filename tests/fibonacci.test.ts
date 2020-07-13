import { fibonacci } from "../src/fibonacci";

describe("fibonacci", () => {
  describe("sum", () => {
    test.each([
      [0, 0],
      [1, 1],
      [8, 21],
      [30, 832040],
    ])("fibonacci %i", (n, expected) => {
      expect(fibonacci(n)).toBe(expected);
    });
  });
});

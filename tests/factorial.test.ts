import { factorial } from "../src/factorial";

describe("factorial", () => {
  test.each([
    [0, 1],
    [1, 1],
    [8, 40320],
    [13, 6227020800],
  ])("factorial %i", (n, expected) => {
    expect(factorial(n)).toBe(expected);
  });
});

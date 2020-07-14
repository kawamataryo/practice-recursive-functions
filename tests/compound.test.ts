import { compound } from "../src/compound";

describe("compound", () => {
  test.each([
    [100, 0.01, 2, 102.01],
    [100, 0.05, 30, 432.1942375150668],
    [100, 0.15, 2, 132.24999999999997],
  ])("compound %i", (principal, interest, period, expected) => {
    expect(compound(principal, interest, period)).toBe(expected);
  });
});

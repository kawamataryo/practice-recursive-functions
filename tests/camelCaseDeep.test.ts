import { camelCaseDeep, camelize } from "../src/camelCaseDeep";

describe("camelCaseDeep", () => {
  describe("camelCaseDeep", () => {
    test("キャメルケースに変換できる（1階層）", () => {
      const object = {
        first_name: "taro",
        last_name: "yamada",
      };
      expect(camelCaseDeep(object)).toEqual({
        firstName: "taro",
        lastName: "yamada",
      });
    });
    test("キャメルケースに変換できる（2階層）", () => {
      const object = {
        first_name: "taro",
        last_name: "yamada",
        has_profile: {
          tel_number: "0805",
          address: {
            first_city: "mito",
            second_city: "hitachinaka",
            array: [2, 3, 4],
          },
        },
      };
      expect(camelCaseDeep(object)).toEqual({
        firstName: "taro",
        lastName: "yamada",
        hasProfile: {
          telNumber: "0805",
          address: {
            firstCity: "mito",
            secondCity: "hitachinaka",
            array: [2, 3, 4],
          },
        },
      });
    });
  });

  describe("camelize", () => {
    test.each([
      ["snake_case", "snakeCase"],
      ["snake_case_case", "snakeCaseCase"],
      ["snake_case_case_case", "snakeCaseCaseCase"],
      ["SNAKE_CASE_CASE_CASE", "snakeCaseCaseCase"],
      ["snake", "snake"],
    ])("camelize %s", (str, expected) => {
      expect(camelize(str)).toBe(expected);
    });
  });
});

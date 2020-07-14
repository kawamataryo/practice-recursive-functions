import { camelCaseDeep } from "../src/camelCaseDeep";

describe("camelCaseDeep", () => {
  xtest("キャメルケースに変換できる", () => {
    const object = {
      first_name: "taro",
      last_name: "yamada",
    };

    expect(camelCaseDeep(object)).toEqual({
      firstName: "taro",
      lastName: "jiro",
    });
  });
});

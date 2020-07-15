import { searchValue } from "../src/searchValue";

describe("searchValue", () => {
  describe("searchValue", () => {
    test("検索できる", () => {
      const object = {
        first_name: "taro",
        last_name: "yamada",
      };
      expect(searchValue("first_name", object)).toBe("taro");
    });
    test("階層でも検索できる", () => {
      const object = {
        first_name: "taro",
        last_name: "yamada",
        has_profile: {
          tel_number: "0805",
          address: {
            first_city: "mito",
            second_city: "hitachinaka",
            array: [2, 3, 4],
            object_object: {
              obj_obj: "hoge",
            },
          },
        },
      };
      expect(searchValue("obj_obj", object)).toBe("hoge");
    });
  });
});

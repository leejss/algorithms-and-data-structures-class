import { same1 } from "./codes";

test("same test", () => {
  expect(same1([1, 2, 3], [4, 1, 9])).toBe(true);
});

import { power } from "./power";
import { productOfArray } from "./productOfArray";

test("power Test", () => {
  expect(power(2, 4)).toBe(16);
});

test("productOfArray Test", () => {
  expect(productOfArray([1, 2, 3])).toBe(6);
});

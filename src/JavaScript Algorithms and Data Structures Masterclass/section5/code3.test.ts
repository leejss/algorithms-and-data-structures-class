import { binarySearch } from "./code3";

test("binarySearch Test", () => {
  expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 4)).toBe(3);
});

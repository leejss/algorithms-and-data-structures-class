import { sumZero, sumZero2, countUniqueValues } from "./code2";

test("sumZero test", () => {
  expect(sumZero([1, 2, 3, 4])).toEqual(false);
  expect(sumZero([-3, -2, 0, 1, 2, 4])).toEqual([-2, 2]);
});

test("sumZero2 test", () => {
  expect(sumZero2([-3, -2, 0, 1, 2, 4])).toEqual([2, -2]);
});

test("countUniqueValues test", () => {
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2); // 2
  expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7); // 7
  expect(countUniqueValues([])).toBe(0); // 0
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4); //
});

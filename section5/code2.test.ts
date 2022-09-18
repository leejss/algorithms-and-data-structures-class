import { sumZero, sumZero2 } from "./code2";

test("sumZero test", () => {
  expect(sumZero([1, 2, 3, 4])).toEqual(false);
  expect(sumZero([-3, -2, 0, 1, 2, 4])).toEqual([-2, 2]);
});

test("sumZero2 test", () => {
  expect(sumZero2([-3, -2, 0, 1, 2, 4])).toEqual([2, -2]);
});

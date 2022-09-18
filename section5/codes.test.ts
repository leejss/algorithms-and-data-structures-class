import { same1, same2, counter, validAnagram, shallowEqual } from "./codes";

test("same1 test", () => {
  expect(same1([1, 2, 3], [4, 1, 9])).toBe(true);
});

test("counter test", () => {
  expect(counter([1, 2, 3, 4, 1])).toEqual({
    1: 2,
    2: 1,
    3: 1,
    4: 1,
  });
});

test("same2 test", () => {
  expect(same2([1, 2, 3], [4, 1, 9])).toBe(true);
});

test("shallowEqual test", () => {
  expect(
    shallowEqual(
      {
        a: 1,
      },
      {
        b: 2,
      }
    )
  ).toBe(false);
});

test("validAnagram test", () => {
  expect(validAnagram("abc", "cba")).toBe(true);
});

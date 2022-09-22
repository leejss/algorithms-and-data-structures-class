import { factorial } from "./factorial";

test("factorial Test", () => {
  expect(factorial(3)).toBe(6); // 1 2 3
  expect(factorial(4)).toBe(24); // 1 2 3 4
  expect(factorial(5)).toBe(120); // 1 2 3 4 5
});

import { collectOddValues } from "./collectOddValues";

test("collectOddValues Test", () => {
  expect(collectOddValues([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
});

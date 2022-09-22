export function collectOddValues(arr: number[]): number[] {
  const result: number[] = [];

  const collect = (nums: number[]): void => {
    if (nums.length === 0) return;
    if (nums[0] % 2 !== 0) result.push(nums[0]);
    collect(nums.slice(1));
  };

  collect(arr);

  return result;
}

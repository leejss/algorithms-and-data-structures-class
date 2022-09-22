export function rangeSum(n: number): number {
  if (n === 1) return 1;
  return n + rangeSum(n - 1);
}

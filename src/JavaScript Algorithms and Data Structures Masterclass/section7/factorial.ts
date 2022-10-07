export function factorial(num: number): number {
  if (num === 1) return 1;
  if (num === 2) return 2;
  return num * factorial(num - 1);
}

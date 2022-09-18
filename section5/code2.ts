export function sumZero(arr: number[]) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === 0) return [arr[start], arr[end]];
    else if (sum > 0) {
      end -= 1;
    } else {
      start += 1;
    }
  }
  return false;
}

export function sumZero2(arr: number[]) {
  const m = arr.reduce((prev, cur, index) => {
    prev[cur] = index;
    return prev;
  }, {} as Record<string, number>);

  for (const k in m) {
    if (`-${k}` in m) return [parseInt(k), parseInt(`-${k}`)];
  }
  return false;
}

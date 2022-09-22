export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    console.log(middle);

    if (arr[middle] === target) return middle;
    if (arr[middle] > target) {
      right = middle;
    } else if (arr[middle] < target) {
      left = middle;
    }
  }
  return -1;
}

// function sameFrequency(n1: number, n2: number): boolean {
//   const counter = (arr: string[]) =>
//     arr.reduce((prev, cur) => {
//       if (prev[cur]) {
//         prev[cur] += 1;
//       } else {
//         prev[cur] = 1;
//       }
//     }, {} as Record<string, number>);
// }

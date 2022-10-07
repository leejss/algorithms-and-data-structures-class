function selectionSort(arr) {
  // 1. select min number
  // 2. replace position
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

const testArr = [
  10, 28, 22, 17, 21, 25, 1, 24, 11, 13, 29, 18, 12, 15, 2, 5, 23, 9, 30, 16, 8,
  19, 7, 4, 6, 3, 20, 26, 14, 27,
];

console.log(selectionSort(testArr));

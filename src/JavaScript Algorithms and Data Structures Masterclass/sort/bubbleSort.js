function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // in place replacement
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

const testArr = [
  1, 55, 42, 54, 17, 44, 15, 57, 39, 30, 68, 6, 43, 33, 46, 18, 47, 64, 31, 9,
  4, 69, 12, 22, 8, 34, 67, 19, 35, 7,
];

console.log(bubbleSort(testArr));

function bubbleSortOp(arr) {
  // noSwap => sorted
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // in place replacement
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}

console.log(bubbleSortOp(testArr));

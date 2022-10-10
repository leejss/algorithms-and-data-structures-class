function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (let j = i - 1; j > -1; j--) {
      if (currentVal < arr[j]) {
        arr[j + 1] = arr[j];
      }
      arr[j] = currentVal;
    }
  }
  return arr;
}

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j > -1; j--) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort2([5, 4, 3, 2, 1]));

const ascendingOrder = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    console.log(i, nums[i]);
  }
};

const descendingOrder = (nums) => {
  for (let i = nums.length - 1; i > -1; i--) {
    console.log(i, nums[i]);
  }
};

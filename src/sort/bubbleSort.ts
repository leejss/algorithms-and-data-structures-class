function bubbleSort(arr: number[]) {
  // bubble up
  const swap = (targetArr: number[], left: number, right: number) => {
    [targetArr[left], targetArr[right]] = [targetArr[right], targetArr[left]];
  };

  // What i and j point to ?
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // compare arr[i] and arr[j]
      if (i === 0) {
        console.log(`compare${i}-${j}`, { "arr[i]": arr[i], "arr[j]": arr[j] });
      }

      if (arr[i] > arr[j]) {
        // swap
        swap(arr, i, j);
      }
    }
  }
}

bubbleSort([5, 4, 3, 2, 1]);

// 5 4 3 2 1

// 4 5 3 2 1

// 4 3 5 2 1

// 4 3 2 5 1

// 4 3 2 1 5

// how sort works ?
// it swap the positions

function isSubsequence(str1: string, str2: string): boolean {
  let pivot = 0;
  let cur = 0;

  while (cur < str2.length) {
    const same = str1[pivot] === str2[cur];
    console.log({ same, cur, pivot });

    if (same) {
      pivot++;
      if (pivot === str1.length) return true;
      cur++;
    } else {
      cur++;
    }
  }
  return false;
}

console.log(isSubsequence("sing", "sting"));

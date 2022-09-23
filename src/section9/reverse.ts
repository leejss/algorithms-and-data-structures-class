function reverse(word: string): string {
  let middle = word.length % 2 === 0 ? Math.trunc(word.length / 2) : 0;
  // return something and reverse("ae")

  console.log(middle);

  reverse(word.slice());
  return "";
}

console.log(reverse("awesome")); // emosewa

// divide and conquer

// em
// a w e s o m e

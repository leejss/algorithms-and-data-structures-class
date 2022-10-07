type Dict<T> = Record<string, T>;

// Frequency counter pattern
export function same1(bases: number[], squareds: number[]): boolean {
  if (bases.length !== squareds.length) return false;
  for (const n of bases) {
    const squaredN = n ** 2;
    const index = squareds.indexOf(squaredN);
    if (index === -1) return false;
    squareds.splice(index, 1);
  }
  return true;
}

export function same2(bases: number[], squareds: number[]): boolean {
  if (bases.length !== squareds.length) return false;
  const baseCounter = counter(bases);
  const sqauredsCounter = counter(squareds);

  for (const base in baseCounter) {
    const baseSquared = parseInt(base) ** 2;
    if (sqauredsCounter[baseSquared] !== baseCounter[base]) {
      return false;
    }
  }
  return true;
}

export function counter(arr: number[]) {
  return arr.reduce((prev, cur) => {
    if (prev[cur]) {
      prev[cur] += 1;
    } else {
      prev[cur] = 1;
    }
    return prev;
  }, {} as Record<string, number>);
}

export function shallowEqual(obj1: Dict<number>, obj2: Dict<number>) {
  for (const key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

export function validAnagram(str1: string, str2: string): boolean {
  const counter = (str: string) => {
    const strArr = Array.from(str);
    return strArr.reduce((prev, cur) => {
      if (cur in prev) {
        prev[cur] += 1;
      } else {
        prev[cur] = 1;
      }
      return prev;
    }, {} as Record<string, number>);
  };

  const s1Map = counter(str1);
  const s2Map = counter(str2);

  return shallowEqual(s1Map, s2Map);
}

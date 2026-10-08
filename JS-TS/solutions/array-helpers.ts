/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  if (source == null) throw new TypeError('mapArray: not implemented');
  let res: R[] = [];
  for (let i = 0; i < source.length; ++i ) {
    res.push(mapper(source[i], i));
  }
  return res;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
  if (source == null) throw new TypeError('filterArray: not implemented');
  let res: T[] = [];
  for (let i = 0; i < source.length; ++i) {
    if (predicate(source[i], i)) {
      res.push(source[i]);
    }
  }
  return res;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
  if (source == null) throw new TypeError('reduceArray: not implemented');
  let res: R = initial;
  for (let i = 0; i < source.length; ++i) {
    res = reducer(res, source[i], i);
  }
  return res;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  if (source == null) throw new TypeError('partition: not implemented');
  let res1: T[] = [];
  let res2: T[] = [];
  for (let i = 0; i < source.length; ++i) {
    if(predicate(source[i])){
      res1.push(source[i]);
    } else {
      res2.push(source[i]);
    }
  }
  return [res1, res2];
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  if (source == null) throw new TypeError('groupBy: not implemented');
  let res: Record<K, T[]> = {} as Record<K, T[]>;
  for (let i = 0; i < source.length; ++i) {
    const key = keySelector(source[i]);
    if (res[key] === undefined) {
      res[key] = [source[i]];
    } else {
      res[key].push(source[i]);
    }
  }
  return res;
}

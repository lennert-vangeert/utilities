/**
 * Splits an array into chunks of a specified size.
 * @param array The input array to chunk.
 * @param size The size of each chunk.
 * @returns An array of chunks.
 */
export const chunkArray = <T>(array: T[], size: number): T[][] => {
  if (size <= 0) {
    throw new Error("Size must be greater than 0");
  }
  if (typeof size !== "number") {
    throw new Error("Size must be a number");
  }
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};

/**
 * Removes duplicate values from an array.
 * @param array The input array to filter for unique values.
 * @returns An array of unique values.
 */
export const uniqueArray = <T>(array: T[]): T[] => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  return Array.from(new Set(array));
};

/**
 * Groups an array of objects by a specified key.
 * @param array The input array to group.
 * @param key A function that returns the key to group by.
 * @returns An object where keys are the result of the key function and values are arrays of items.
 */
export const groupBy = <T, K extends keyof any>(
  array: T[],
  key: (item: T) => K
): Record<K, T[]> => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  return array.reduce((acc, item) => {
    const groupKey = key(item);
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {} as Record<K, T[]>);
};

/**
 * Flattens a two-dimensional array into a one-dimensional array.
 * @param array The input two-dimensional array to flatten.
 * @returns A one-dimensional array containing all elements.
 */
export const flattenArray = <T>(array: T[][]): T[] => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  return array.reduce((acc, item) => acc.concat(item), []);
};

/**
 * Removes all falsy values (null and undefined) from an array.
 * @param array The input array to compact.
 * @returns An array with all falsy values removed.
 */
export const compactArray = <T>(array: (T | null | undefined)[]): T[] => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  return array.filter((item): item is T => item !== null && item !== undefined);
};

/**
 * Finds the first item in an array that matches a predicate.
 * @param array The input array to search.
 * @param predicate A function that returns true for the item to find.
 * @returns The first matching item or undefined if no match is found.
 */
export const find = <T>(
  array: T[],
  predicate: (item: T) => boolean
): T | undefined => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  for (const item of array) {
    if (predicate(item)) {
      return item;
    }
  }
  return undefined;
};

/**
 * Finds the index of the first item in an array that matches a predicate.
 * @param array The input array to search.
 * @param predicate A function that returns true for the item to find.
 * @returns The index of the first matching item or -1 if no match is found.
 */
export const findIndex = <T>(
  array: T[],
  predicate: (item: T) => boolean
): number => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return i;
    }
  }
  return -1;
};

/**
 * Filters an array based on a predicate function.
 * @param array The input array to filter.
 * @param predicate A function that returns true for items to keep.
 * @returns An array containing items that match the predicate.
 */
export const filter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  const result: T[] = [];
  for (const item of array) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

/**
 * Maps an array to a new array based on a mapping function.
 * @param array The input array to map.
 * @param mapper A function that returns the new value for each item.
 * @returns A new array containing the mapped values.
 */
export const intersection = <T>(array1: T[], array2: T[]): T[] => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error("Both inputs must be arrays");
  }

  const set2 = new Set(array2);
  return array1.filter((item) => set2.has(item));
};

/**
 * Extracts a specific key from each object in an array.
 * @param array The input array of objects.
 * @param key The key to extract from each object.
 * @returns An array of values corresponding to the specified key.
 */
export const pluck = <T, K extends keyof T>(array: T[], key: K): T[K][] => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  return array.map((item) => item[key]);
};

/**
 * Shuffles an array randomly.
 * @param array The input array to shuffle.
 * @param seed Optional seed for reproducibility.
 * @returns A new array with the items shuffled.
 */
export const shuffle = <T>(array: T[], seed?: number): T[] => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  const shuffled = [...array];
  if (seed !== undefined) {
    // Simple seeded random function
    const random = (s: number) => (Math.sin(s) * 10000) % 1;
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(random(seed + i) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  } else {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  }

  return shuffled;
};

/**
 * Creates a range of numbers from start to end.
 * @param start The starting number (inclusive).
 * @param end The ending number (exclusive).
 * @returns An array containing the range of numbers.
 */
export const range = (start: number, end: number): number[] => {
  if (start >= end) {
    throw new Error("Invalid range");
  }

  const range: number[] = [];
  for (let i = start; i < end; i++) {
    range.push(i);
  }
  return range;
};

/**
 * Swaps an item with another on a specified index in an array.
 * @param array The input array.
 * @param index1 The index of the first item to swap.
 * @param index2 The index of the second item to swap.
 * @returns A new array with the items swapped.
 */
export const swap = <T>(array: T[], index1: number, index2: number): T[] => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    throw new Error("Index out of bounds");
  }

  const newArray = [...array];
  [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
  return newArray;
};

/**
 * A strongly typed version of Array.prototype.map.
 * @param array The input array to map.
 * @param mapper A function that returns the new value for each item.
 * @returns A new array containing the mapped values.
 */
export const map = <T, U>(array: T[], mapper: (item: T) => U): U[] => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  const result: U[] = [];
  for (const item of array) {
    result.push(mapper(item));
  }
  return result;
};

/**
 * A strongly typed version of Array.prototype.reduce.
 * @param array The input array to reduce.
 * @param reducer A function that reduces the array to a single value.
 * @param initialValue The initial value for the reduction.
 * @returns The reduced value.
 */
export const reduce = <T, U>(
  array: T[],
  reducer: (accumulator: U, item: T) => U,
  initialValue: U
): U => {
  if (!Array.isArray(array)) {
    throw new Error("Input must be an array");
  }

  let accumulator = initialValue;
  for (const item of array) {
    accumulator = reducer(accumulator, item);
  }
  return accumulator;
};

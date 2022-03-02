export function getRandomItem<T>(array: readonly T[], excludeItem?: T): T {
  let result;
  do {
    result = array[Math.round(Math.random() * (array.length - 1))];
  } while (result == excludeItem);

  return result;
}

export function getRandomNumber(max: number, min: number = 0): number {
  return Math.round(Math.random() * (max - min) + min);
}

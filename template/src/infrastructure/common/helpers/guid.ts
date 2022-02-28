export function guid(): string {
  function s4(): string {
    const rand = 0x10000;
    const radix = 16;

    return Math.floor((1 + Math.random()) * rand)
      .toString(radix)
      .substring(1);
  }

  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
}

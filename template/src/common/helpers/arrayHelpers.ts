export function getItemIndex<T, V>(
  data: T[],
  comparisonParam: keyof T,
  comparisonValue: V,
) {
  const index = data.findIndex(
    item => item[comparisonParam] == comparisonValue,
  );

  const itemExists = index > -1;

  return {index, itemExists};
}

export function filterBySearch<T>(
  data: T[],
  param: keyof T,
  searchText: string,
): T[] {
  if (searchText != '') {
    const lowerCaseSearch = searchText.toLowerCase();

    return data.filter(item =>
      (item[param] as string).toLowerCase().includes(lowerCaseSearch),
    );
  } else {
    return data;
  }
}

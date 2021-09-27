export const DEFAULT_PAGE_SIZE = 20;

export function calculatePage(count: number, pageSize: number = DEFAULT_PAGE_SIZE): number {
  if (count < 0) {
    throw new Error("Count can't be negative");
  }

  if (pageSize < 1) {
    throw new Error("Page size can't be 0 or negative");
  }

  return Math.trunc(count / pageSize) + 1;
}

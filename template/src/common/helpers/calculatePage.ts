export const DEFAULT_PAGE_SIZE = 20;

export function calculatePage(count: number, pageSize: number = DEFAULT_PAGE_SIZE): number {
    return Math.trunc(count / pageSize) + 1;
}

export function defaultKeyIdExtractor<T extends {id: string | number}>(item: T): string {
  return typeof item.id == "string" ? item.id : item.id.toString();
}

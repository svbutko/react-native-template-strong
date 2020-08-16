export function defaultIdExtractor<T extends {id: string | number}>(item: T): string {
    if (typeof item.id == "string") {
        return item.id;
    } else {
        return item.id.toString();
    }
}
export function fromMap<T>(map: Map<any, T>): T[] {
    return Array.from(map.values());
}

export function fromArray<T>(array: (string | T)[][]): Map<string, T> {
    return new Map<string, T>(array as any);
}

export function withNewElement<TK, TP>(map: Map<TK, TP>, key: TK, value: TP): Map<TK, TP> {
    const newMap = new Map(map);
    newMap.set(key, value);

    return newMap;
}

export function withNewElements<TK, TP>(map: Map<TK, TP>, arr: TP[], keyExtractor: (el: TP) => TK): Map<TK, TP> {
    const rightMap = arr.map((el: TP): [TK, TP] => [keyExtractor(el), el]);

    return new Map([...map, ...rightMap]);
}
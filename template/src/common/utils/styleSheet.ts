import {StyleSheet} from "react-native";

export function styleSheetFlatten<T>(...args: T[]): T {
    return StyleSheet.flatten(args as any) as any;
}

export function styleSheetCreate<T>(styles: T): T {
    return StyleSheet.create(styles as any) as any;
}

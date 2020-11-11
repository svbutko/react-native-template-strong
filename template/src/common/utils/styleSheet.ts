import {Appearance, StyleSheet} from "react-native";

export function styleSheetFlatten<T>(...args: T[]): T {
    return (Appearance.getColorScheme() === "dark"
        ? StyleSheet.flatten(args as any) as any
        : StyleSheet.flatten(args as any) as any
    );
}

export function styleSheetCreate<T>(styles: T): T {
    return StyleSheet.create(styles as any) as any;
}

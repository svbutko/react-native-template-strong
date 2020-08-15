import React, {FC, memo} from "react";
import {Platform, PlatformColor, Text, TextStyle, ViewStyle} from "react-native";
import {styleSheetCreate, styleSheetFlatten} from "../utils";
import {Fonts, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";

interface IProps {
    font: string;
}

export const FontListItem: FC<IProps> = memo(({font}) => {
    const titleStyle = styleSheetFlatten([
        styles.title,
        {fontFamily: (Fonts as any)[font]}
    ]) as ViewStyle;

    return (
        <Text style={titleStyle}>
            {font}
        </Text>
    );
});

const styles = styleSheetCreate({
    title: {
        fontSize: 24,
        padding: 10,
        textAlign: "center",
        ...Platform.select({
            ios: {
                color: PlatformColor(PlatformColorsIOS.label),
            },
            android: {
                color: PlatformColor(PlatformColorsAndroid.onBackground)
            },
        }),
    } as TextStyle,
});

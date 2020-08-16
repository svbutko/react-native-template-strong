import React, {FC, memo} from "react";
import {Text, TextStyle} from "react-native";
import {styleSheetCreate} from "../utils";
import {Colors} from "../../core/theme";

interface IProps {
    glyph: number;
    style?: TextStyle;
}

export const GlyphIcon: FC<IProps> = memo(({glyph, style}) => {
    return (
        <Text style={[styles.glyph, style]} allowFontScaling={false}>
            {String.fromCodePoint(glyph)}
        </Text>
    )
});

const styles = styleSheetCreate({
    glyph: {
        fontSize: 12,
        color: Colors.black,
        fontStyle: "normal",
        fontWeight: "normal",
    } as TextStyle,
});

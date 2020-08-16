import React, {FC, memo} from "react";
import {Text, TextStyle} from "react-native";
import {styleSheetCreate} from "../utils";
import {Colors, Fonts} from "../../core/theme";

interface IProps {
    glyph: string;
    style?: TextStyle;
}

export const GlyphIcon: FC<IProps> = memo(({glyph, style}) => {
    return (
        <Text style={[styles.glyph, style]} allowFontScaling={false}>
            {glyph}
        </Text>
    )
});

const styles = styleSheetCreate({
    glyph: {
        fontSize: 24,
        color: Colors.black,
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: Fonts.glyph,
    } as TextStyle,
});

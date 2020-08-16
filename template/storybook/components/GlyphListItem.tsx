import React, {FC, memo} from "react";
import {Platform, PlatformColor, Text, TextStyle, View, ViewStyle} from "react-native";
import {styleSheetCreate} from "../../src/common/utils";
import {GlyphIcon} from "../../src/common/components";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";

interface IProps {
    glyph: string;
    title: string;
}

export const GlyphListItem: FC<IProps> = memo(({glyph, title}) => {
    return (
      <View style={styles.container}>
          <GlyphIcon glyph={glyph} style={styles.glyph}/>
          <Text style={styles.title}>
              {title}
          </Text>
      </View>
    );
});

const styles = styleSheetCreate({
    container: {
        flexDirection: "row",
        padding: 5,
        alignItems: "center",
        justifyContent: "flex-start",
    } as ViewStyle,
    title: {
        alignSelf: "flex-start",
        flex: 1,
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
    glyph: {
        ...Platform.select({
            ios: {
                color: PlatformColor(PlatformColorsIOS.link),
            },
            android: {
                color: PlatformColor(PlatformColorsAndroid.primary)
            },
        }),
    } as TextStyle,
});

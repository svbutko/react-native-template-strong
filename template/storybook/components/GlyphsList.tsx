import React, {FC, memo, useCallback} from "react";
import {FlatList, Platform, PlatformColor, ViewStyle} from "react-native";
import {isIos, PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";
import {styleSheetCreate} from "../../src/common/utils";
import {ListSeparator} from "./ListSeparator";
import {GlyphListItem} from "./GlyphListItem";
import {SFSymbols} from "../../resources/glyphs/sfsymbols/sfsymbols";

export const GlyphsList: FC = memo(() => {
    const renderItem = useCallback(({item}) => {
        return <GlyphListItem key={item[0]} glyph={item[1]} title={item[0]}/>;
    }, []);

    const keyExtractor = useCallback((item) => {
        return item[0];
    }, []);

    return (
        <FlatList
            data={glyphs}
            keyExtractor={keyExtractor}
            style={styles.container}
            renderItem={renderItem}
            ItemSeparatorComponent={ListSeparator}
        />
    );
});

const glyphs = Object.entries(isIos ? SFSymbols : []);

const styles = styleSheetCreate({
    container: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: PlatformColor(PlatformColorsIOS.systemBackground)
            },
            android: {
                backgroundColor: PlatformColor(PlatformColorsAndroid.primarySurface)
            },
        }),
    } as ViewStyle,
})

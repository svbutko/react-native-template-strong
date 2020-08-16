import React, {FC, memo, useCallback} from "react";
import {FlatList, Platform, PlatformColor, ViewStyle} from "react-native";
import {Fonts, PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";
import {styleSheetCreate} from "../../src/common/utils";
import {ListSeparator} from "./ListSeparator";
import {FontListItem} from "./FontListItem";

export const FontsList: FC = memo(() => {
    const renderItem = useCallback(({item}) => {
        return <FontListItem key={item} font={item}/>;
    }, []);

    return (
        <FlatList
            data={fonts}
            style={styles.container}
            renderItem={renderItem}
            ItemSeparatorComponent={ListSeparator}
        />
    );
});

const fonts: string[] = Object.keys(Fonts);

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

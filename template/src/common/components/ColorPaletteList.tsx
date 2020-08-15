import React, {FC, memo, useCallback, useMemo} from "react";
import {FlatList, Platform, PlatformColor, ViewStyle} from "react-native";
import {Colors, isIos, PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";
import {styleSheetCreate} from "../utils";
import {ListSeparator} from "./ListSeparator";
import {ColorPaletteListItem} from "./ColorPaletteListItem";

interface IProps {
    isPlatformColors: boolean;
}

export const ColorPaletteList: FC<IProps> = memo(({isPlatformColors}) => {
    const renderItem = useCallback(({item}) => {
        return <ColorPaletteListItem key={item} color={item} isPlatformColor={isPlatformColors}/>;
    }, [isPlatformColors]);

    const data = useMemo(() => isPlatformColors ? platformPalette : colorPalette,
        [isPlatformColors, platformPalette, colorPalette]
    );

    return (
        <FlatList
            data={data}
            style={styles.container}
            renderItem={renderItem}
            ItemSeparatorComponent={ListSeparator}
        />
    );
});

const platformPalette: string[] = Object.keys(isIos ? PlatformColorsIOS : PlatformColorsAndroid);
const colorPalette: string[] = Object.values(Colors);

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

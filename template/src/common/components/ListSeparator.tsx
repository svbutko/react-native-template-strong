import React, {memo} from "react";
import {Platform, PlatformColor, View, ViewStyle} from "react-native";
import {styleSheetCreate} from "../utils";
import {Colors, hairlineWidth, PlatformColorsIOS} from "../../core/theme";

export const ListSeparator = memo(() => {
   return <View style={styles.container}/>;
});

const styles = styleSheetCreate({
    container: {
        height: hairlineWidth,
        ...Platform.select({
            ios: {
                backgroundColor: PlatformColor(PlatformColorsIOS.separator),
            },
            android: {
                backgroundColor: Colors.gray,
            },
        }),
        marginTop: 10,
        marginBottom: 10,
    } as ViewStyle
});

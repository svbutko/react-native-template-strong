import React, {FC, memo} from "react";
import {Platform, PlatformColor, ScrollView, ViewStyle} from "react-native";
import {styleSheetCreate} from "../../src/common/utils";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../src/core/theme";
import {TitleDescriptionBorder} from "./TitleDescriptionBorder";
import {calendarDate, DateFormat, dateFromFormat, dateFromString, dateFromUnknown} from "../../src/common/localization";

export const MomentFormatterStory: FC = memo(() => {
    return (
        <ScrollView style={styles.container}>
            <TitleDescriptionBorder title={dateFromString(new Date()).toString()} description={dateFromString.name}/>
            <TitleDescriptionBorder title={dateFromUnknown(new Date())?.toString() || ""} description={dateFromUnknown.name}/>
            <TitleDescriptionBorder title={calendarDate(new Date()).toString()} description={calendarDate.name}/>
            <TitleDescriptionBorder title={dateFromFormat(new Date(), DateFormat.dayMonthWeekdayFull)} description={dateFromFormat.name} isLast={true}/>
        </ScrollView>
    );
});

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
        })
    } as ViewStyle,
});

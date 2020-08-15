import "react-native-gesture-handler";
import React, {FC, useEffect} from "react";
import {Platform, PlatformColor, SafeAreaView, ScrollView, Text, TextStyle, View, ViewStyle} from "react-native";

import {DebugInstructions, ReloadInstructions,} from "react-native/Libraries/NewAppScreen";
import {setDefaultOrientation} from "./common/helpers/orientationHelper";
import {styleSheetCreate} from "./common/utils";
import {PlatformColorsAndroid, PlatformColorsIOS} from "./core/theme";

export const App: FC = () => {
    useEffect(() => {
        setDefaultOrientation();
    }, []);

    return (
        <SafeAreaView style={styles.body}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}
            >
                <View style={styles.body}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Step One</Text>
                        <Text style={styles.sectionDescription}>
                            Edit <Text style={styles.highlight}>App.js</Text> to change this
                            screen and then come back to see your edits.
                        </Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>See Your Changes</Text>
                        <Text style={styles.sectionDescription}>
                            <ReloadInstructions/>
                        </Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Debug</Text>
                        <Text style={styles.sectionDescription}>
                            <DebugInstructions/>
                        </Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Learn More</Text>
                        <Text style={styles.sectionDescription}>
                            Read the docs to discover what to do next:
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = styleSheetCreate({
    scrollView: {
        ...Platform.select({
            ios: {
                backgroundColor: PlatformColor(PlatformColorsIOS.systemBackground),
            },
            android: {
                backgroundColor: PlatformColor(PlatformColorsAndroid.background),
            },
        })
    } as ViewStyle,
    engine: {
        position: "absolute",
        right: 0,
    } as ViewStyle,
    body: {
        flex: 1,
        ...Platform.select({
            ios: {
                backgroundColor: PlatformColor(PlatformColorsIOS.systemBackground),
            },
            android: {
                backgroundColor: PlatformColor(PlatformColorsAndroid.background),
            },
        })
    } as ViewStyle,
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    } as ViewStyle,
    sectionTitle: {
        fontSize: 24,
        fontWeight: "600",
        ...Platform.select({
            ios: {
                color: PlatformColor(PlatformColorsIOS.label),
            },
            android: {
                color: PlatformColor(PlatformColorsAndroid.primary),
            },
        })
    } as TextStyle,
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: "400",
        ...Platform.select({
            ios: {
                color: PlatformColor(PlatformColorsIOS.label),
            },
            android: {
                color: PlatformColor(PlatformColorsAndroid.secondary),
            },
        })
    } as TextStyle,
    highlight: {
        fontWeight: "700",
    } as TextStyle,
});

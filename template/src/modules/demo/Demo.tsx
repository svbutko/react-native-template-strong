import {NavigationFunctionComponent} from "react-native-navigation";
import {Platform, PlatformColor, ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import {DebugInstructions, ReloadInstructions} from "react-native/Libraries/NewAppScreen";
import React from "react";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../../core/theme";
import {localization} from "../../common/localization";

export const Demo: NavigationFunctionComponent = (): JSX.Element => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
      <Text style={styles.sectionTitle}>Step One</Text>
      <Text style={styles.sectionDescription}>
        Edit <Text style={styles.highlight}>App.js</Text> to change this screen and then come back to see your edits.
      </Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>See Your Changes</Text>
        <Text style={styles.sectionDescription}>
          <ReloadInstructions />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Debug</Text>
        <Text style={styles.sectionDescription}>
          <DebugInstructions />
        </Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Learn More</Text>
        <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Learn More</Text>
        <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Learn More</Text>
        <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Learn More</Text>
        <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Learn More</Text>
        <Text style={styles.sectionDescription}>Read the docs to discover what to do next:</Text>
      </View>
    </ScrollView>
  );
};

Demo.options = {
  topBar: {
    title: {
      text: localization.pages.demo,
    },
  },
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 18,
    ...Platform.select({
      ios: {
        backgroundColor: PlatformColor(PlatformColorsIOS.systemBackground),
      },
      android: {
        backgroundColor: PlatformColor(PlatformColorsAndroid.background),
      },
    }),
  } as ViewStyle,
  sectionContainer: {
    marginTop: 32,
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
    }),
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
    }),
  } as TextStyle,
  highlight: {
    fontWeight: "700",
  } as TextStyle,
});

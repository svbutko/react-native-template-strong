import React, {useCallback, useState} from "react";
import {Image, ImageStyle, ImageURISource, SafeAreaView, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import {CommonSizes, CommonStyles, Fonts, windowWidth} from "../../core/theme";
import Carousel from "react-native-snap-carousel";
import {NavigationFunctionComponent} from "react-native-navigation";
import {localization} from "../../common/localization";
import {OnboardingPagination} from "./components/OnboardingPagination";
import {IllustrationsResources} from "../../common/ImageResources.g";
import {PrimaryButton} from "../../common/components";
import {ButtonType} from "../../types";
import {setTabsRoot} from "../../navigation/roots";

const carouselData: {header: string; body: string; image: ImageURISource}[] = [
  {
    header: localization.onboarding.firstHeader,
    body: localization.onboarding.firstBody,
    image: IllustrationsResources.onboarding_first,
  },
  {
    header: localization.onboarding.secondHeader,
    body: localization.onboarding.secondBody,
    image: IllustrationsResources.onboarding_second,
  },
];

export const Onboarding: NavigationFunctionComponent = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const carouselItem = useCallback(({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.illustration} />
        <Text style={styles.header}>{item.header}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={CommonStyles.flex1}>
      <Carousel
        containerCustomStyle={styles.carousel}
        data={carouselData}
        renderItem={carouselItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        onSnapToItem={setActiveSlide}
      />
      <View style={styles.bottomContainer}>
        <OnboardingPagination activeIndex={activeSlide} totalItems={carouselData.length} />
        <PrimaryButton type={ButtonType.solid} label={localization.common.next} onPress={setTabsRoot} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    paddingTop: CommonSizes.spacing.large,
  } as ViewStyle,
  itemContainer: {
    flexDirection: "column",
  } as ViewStyle,
  illustration: {
    height: "50%",
    alignSelf: "center",
    width: "100%",
  } as ImageStyle,
  header: {
    ...CommonStyles.normalText,
    fontFamily: Fonts.bold,
    fontSize: CommonSizes.font.large,
    lineHeight: CommonSizes.font.large,
    alignSelf: "center",
    textAlign: "center",
    marginTop: CommonSizes.spacing.large,
    marginBottom: CommonSizes.spacing.extraSmall,
    paddingHorizontal: CommonSizes.spacing.medium,
  } as TextStyle,
  body: {
    ...CommonStyles.normalText,
    alignSelf: "center",
    textAlign: "center",
    paddingBottom: CommonSizes.spacing.medium,
    paddingHorizontal: CommonSizes.spacing.medium,
  } as TextStyle,
  bottomContainer: {
    paddingHorizontal: CommonSizes.spacing.medium,
    paddingBottom: CommonSizes.spacing.large,
  } as ViewStyle,
});

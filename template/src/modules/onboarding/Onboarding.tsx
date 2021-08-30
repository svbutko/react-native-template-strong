import React, {memo, useCallback, useRef, useState} from "react";
import {ImageStyle, ImageURISource, SafeAreaView, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import {Colors, CommonSizes, CommonStyles, windowHeight, windowWidth} from "../../core/theme";
import Carousel, {ParallaxImage} from "react-native-snap-carousel";
import {NavigationFunctionComponent} from "react-native-navigation";
import {localization} from "../../common/localization";
import {OnboardingPagination} from "./components/OnboardingPagination";
import {IllustrationsResources} from "../../common/ImageResources.g";

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

export const Onboarding: NavigationFunctionComponent = memo(() => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const carouselRef = useRef(null);

  const carouselItem = useCallback(({item, index}, parallaxProps) => {
    return (
      <View style={styles.itemContainer}>
        <ParallaxImage
          dimensions={illustrationDimensions}
          source={item.image}
          parallaxFactor={0.4}
          showSpinner={true}
          style={styles.illustration}
          containerStyle={styles.illustrationContainer}
          {...parallaxProps}
        />
        <Text style={styles.header}>{item.header}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={CommonStyles.flex1}>
      <Carousel
        ref={carouselRef}
        data={carouselData}
        renderItem={carouselItem as any}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        onSnapToItem={setActiveSlide}
        hasParallaxImages={true}
      />
      <OnboardingPagination activeIndex={activeSlide} carouselRef={carouselRef} />
    </SafeAreaView>
  );
});

export const illustrationDimensions = {
  width: windowWidth,
  height: windowHeight / 2.7,
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.red,
  } as ViewStyle,
  inactiveDot: {
    backgroundColor: Colors.blue,
  } as ViewStyle,
  itemContainer: {
    flexDirection: "column",
  } as ViewStyle,
  illustration: {
    height: illustrationDimensions.height,
    width: illustrationDimensions.width,
    resizeMode: "contain",
  } as ImageStyle,
  illustrationContainer: {
    height: illustrationDimensions.height,
    width: illustrationDimensions.width,
  } as ViewStyle,
  header: {
    ...CommonStyles.normalText,
    color: Colors.black,
    paddingHorizontal: CommonSizes.spacing.large,
    marginVertical: CommonSizes.spacing.small,
  } as TextStyle,
  body: {
    ...CommonStyles.normalText,
    color: Colors.black,
    paddingHorizontal: CommonSizes.spacing.large,
  } as TextStyle,
});

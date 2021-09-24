import React, {useCallback, useMemo, useState} from "react";
import {PlatformColor, SafeAreaView, StyleSheet, Text, TextStyle, useWindowDimensions, View, ViewStyle} from "react-native";
import Carousel from "react-native-snap-carousel";
import {NavigationFunctionComponent} from "react-native-navigation";
import {OnboardingPagination} from "./components/OnboardingPagination";
import {ButtonType, IOnboardingData} from "../../types";
import {localization} from "../../common/localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";
import {CommonSizes} from "../../core/theme/commonSizes";
import {Fonts} from "../../core/theme/fonts";
import {PrimaryButton} from "../../common/components/PrimaryButton";
import {setTabsRoot} from "../../navigation/roots";
import {platformNativeColor} from "../../common/helpers/colorHelpers";
import {PlatformColorsAndroid} from "../../core/theme/colors";
import {isTablet} from "../../core/theme/commonConsts";
import {OrientationType, useOrientationChange} from "react-native-orientation-locker";
import {getCurrentOrientation} from "../../common/helpers/orientationHelpers";
import {moderateScale} from "react-native-size-matters";
import {IconPlatform} from "../../common/components/IconPlatform";

const carouselData: IOnboardingData[] = [
  {
    header: localization.onboarding.firstHeader,
    body: localization.onboarding.firstBody,
    icon: "thumb-up",
  },
  {
    header: localization.onboarding.secondHeader,
    body: localization.onboarding.secondBody,
    icon: "description",
  },
  {
    header: localization.onboarding.thirdHeader,
    body: localization.onboarding.thirdBody,
    icon: "star-rate",
  },
];

export const Onboarding: NavigationFunctionComponent = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [orientation, setOrientation] = useState<OrientationType>(() => getCurrentOrientation());
  const dimensions = useWindowDimensions();

  useOrientationChange((changedOrientation) => {
    if (isTablet) {
      setOrientation(changedOrientation);
    }
  });

  const styles = useMemo(() => {
    return orientation == "LANDSCAPE-LEFT" || orientation == "LANDSCAPE-RIGHT" ? landscapeStyles : portraitStyles;
  }, [orientation]);

  const carouselItem = useCallback(
    ({item}: {item: IOnboardingData}) => {
      return (
        <View style={styles.itemContainer}>
          <View style={styles.illustration}>
            <IconPlatform androidName={item.icon} size={moderateScale(120)} color={PlatformColor(PlatformColorsAndroid.primary)} />
          </View>
          <View style={styles.itemTextContainer}>
            <Text style={styles.header}>{item.header}</Text>
            <Text style={styles.body} numberOfLines={3}>
              {item.body}
            </Text>
          </View>
        </View>
      );
    },
    [styles],
  );

  const onContinuePress = useCallback(() => {
    setTabsRoot();
  }, []);

  return (
    <SafeAreaView style={CommonStyles.flex1}>
      <Carousel
        data={carouselData}
        renderItem={carouselItem}
        sliderWidth={dimensions.width}
        itemWidth={dimensions.width}
        onSnapToItem={setActiveSlide}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        removeClippedSubviews={false}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            testID={"OnboardingButtonID"}
            type={ButtonType.solid}
            label={localization.common.continue}
            onPress={onContinuePress}
          />
        </View>
        <OnboardingPagination activeIndex={activeSlide} totalItems={carouselData.length} />
        <View style={CommonStyles.flex1} />
      </View>
    </SafeAreaView>
  );
};

const initialStyles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginBottom: CommonSizes.spacing.extraLargePlus,
  } as ViewStyle,
  illustration: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  } as TextStyle,
  itemTextContainer: {
    flex: 1,
  } as ViewStyle,
  header: {
    ...CommonStyles.normalText,
    fontFamily: Fonts.system,
    fontWeight: "bold",
    fontSize: CommonSizes.font.large,
    lineHeight: CommonSizes.lineHeight.large,
    letterSpacing: CommonSizes.letterSpacing.large,
    alignSelf: "center",
    textAlign: "center",
  } as TextStyle,
  body: {
    ...CommonStyles.normalText,
    fontSize: CommonSizes.font.smallPlus,
    lineHeight: CommonSizes.lineHeight.smallPlus,
    letterSpacing: CommonSizes.letterSpacing.smallPlus,
    alignSelf: "center",
    textAlign: "center",
    color: platformNativeColor(undefined, PlatformColorsAndroid.secondaryText),
  } as TextStyle,
  bottomContainer: {
    alignItems: "center",
    paddingHorizontal: CommonSizes.spacing.medium,
    marginBottom: CommonSizes.spacing.mediumPlus,
  } as ViewStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  buttonContainer: {
    flex: isTablet ? 1 : undefined,
  } as ViewStyle,
});

const portraitStyles = StyleSheet.create({
  ...initialStyles,
  // eslint-disable-next-line react-native/no-unused-styles
  itemContainer: {
    ...initialStyles.itemContainer,
    flexDirection: "column",
  } as ViewStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  illustration: {
    ...initialStyles.illustration,
    height: "50%",
    width: "100%",
  } as TextStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  itemTextContainer: {
    ...initialStyles.itemTextContainer,
    justifyContent: "flex-start",
    marginTop: CommonSizes.spacing.large,
  } as ViewStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  header: {
    ...initialStyles.header,
    marginBottom: CommonSizes.spacing.extraSmall,
    paddingHorizontal: CommonSizes.spacing.medium,
  } as TextStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  body: {
    ...initialStyles.body,
    paddingHorizontal: CommonSizes.spacing.medium,
  } as TextStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  bottomContainer: {
    ...initialStyles.bottomContainer,
    flexDirection: isTablet ? "row-reverse" : "column",
    justifyContent: isTablet ? "space-between" : "flex-end",
  } as ViewStyle,
});

const landscapeStyles = StyleSheet.create({
  ...initialStyles,
  // eslint-disable-next-line react-native/no-unused-styles
  itemContainer: {
    ...initialStyles.itemContainer,
    flexDirection: "row",
  } as ViewStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  illustration: {
    ...initialStyles.illustration,
    height: "100%",
    width: "50%",
  } as TextStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  itemTextContainer: {
    ...initialStyles.itemTextContainer,
    justifyContent: "center",
  } as ViewStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  header: {
    ...initialStyles.header,
    marginBottom: CommonSizes.spacing.extraSmall,
    paddingHorizontal: CommonSizes.spacing.medium,
  } as TextStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  body: {
    ...initialStyles.body,
    paddingHorizontal: CommonSizes.spacing.medium,
  } as TextStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  bottomContainer: {
    ...initialStyles.bottomContainer,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  } as ViewStyle,
});

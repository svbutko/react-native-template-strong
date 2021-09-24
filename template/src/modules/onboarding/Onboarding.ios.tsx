import React, {useCallback} from "react";
import {PlatformColor, SafeAreaView, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import {Navigation, NavigationFunctionComponent} from "react-native-navigation";
import {ButtonType, IOnboardingData} from "../../types";
import {localization} from "../../common/localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";
import {CommonSizes} from "../../core/theme/commonSizes";
import {Fonts} from "../../core/theme/fonts";
import {PrimaryButton} from "../../common/components/PrimaryButton";
import {platformNativeColor} from "../../common/helpers/colorHelpers";
import {PlatformColorsIOS} from "../../core/theme/colors";
import {moderateScale} from "react-native-size-matters";
import {isTablet} from "../../core/theme/commonConsts";
import {SFSymbols} from "../../../resources/symbols/SFSymbols";
import {IconPlatform} from "../../common/components/IconPlatform";

const carouselData: IOnboardingData[] = [
  {
    header: localization.onboarding.firstHeader,
    body: localization.onboarding.firstBody,
    icon: SFSymbols["hands.sparkles.fill"],
  },
  {
    header: localization.onboarding.secondHeader,
    body: localization.onboarding.secondBody,
    icon: SFSymbols["books.vertical.fill"],
  },
  {
    header: localization.onboarding.thirdHeader,
    body: localization.onboarding.thirdBody,
    icon: SFSymbols["star.fill"],
  },
];

export const Onboarding: NavigationFunctionComponent = ({componentId}) => {
  const renderClauseItem = useCallback((value: IOnboardingData, index) => {
    return (
      <View key={index} style={styles.clauseContainer}>
        <IconPlatform
          iosName={value.icon as SFSymbols}
          size={moderateScale(32)}
          resizeMode={"contain"}
          color={PlatformColor(PlatformColorsIOS.systemBlue)}
          style={styles.clauseIcon}
        />
        <View style={styles.clauseTextContainer}>
          <Text style={styles.clauseHeader}>{value.header}</Text>
          <Text style={styles.clauseBody}>{value.body}</Text>
        </View>
      </View>
    );
  }, []);

  const onContinuePress = useCallback(() => {
    Navigation.dismissModal(componentId);
  }, [componentId]);

  return (
    <SafeAreaView style={CommonStyles.flex1}>
      <View style={styles.topContainer}>
        <Text style={styles.welcomeText}>{localization.onboarding.welcomeToApp}</Text>
        <View>{carouselData.map(renderClauseItem)}</View>
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          testID={"OnboardingButtonID"}
          style={styles.button}
          type={ButtonType.solid}
          label={localization.common.continue}
          onPress={onContinuePress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    paddingTop: moderateScale(CommonSizes.spacing.extraLargePlus),
    paddingHorizontal: moderateScale(CommonSizes.spacing.large),
  } as ViewStyle,
  welcomeText: {
    fontFamily: Fonts.system,
    fontWeight: "bold",
    fontSize: CommonSizes.font.extraLarge,
    lineHeight: CommonSizes.lineHeight.extraLarge,
    letterSpacing: CommonSizes.letterSpacing.extraLarge,
    color: platformNativeColor(PlatformColorsIOS.label, undefined),
    paddingBottom: moderateScale(CommonSizes.spacing.extraLarge, 0.5),
    alignSelf: "center",
    textAlign: "center",
  } as TextStyle,
  clauseContainer: {
    flexDirection: "row",
    marginBottom: moderateScale(CommonSizes.spacing.small),
  } as ViewStyle,
  clauseIcon: {
    width: moderateScale(32),
    height: moderateScale(32),
    alignSelf: "center",
  } as ViewStyle,
  clauseTextContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: moderateScale(CommonSizes.spacing.medium),
  } as ViewStyle,
  clauseHeader: {
    ...CommonStyles.normalText,
    fontWeight: "600",
  } as TextStyle,
  clauseBody: {
    ...CommonStyles.normalText,
    color: platformNativeColor(PlatformColorsIOS.secondaryLabel, undefined),
  } as TextStyle,
  bottomContainer: {
    alignItems: isTablet ? "center" : undefined,
    paddingHorizontal: moderateScale(CommonSizes.spacing.large),
    paddingVertical: moderateScale(CommonSizes.spacing.large),
  } as ViewStyle,
  button: {
    width: isTablet ? "50%" : undefined,
  } as ViewStyle,
});

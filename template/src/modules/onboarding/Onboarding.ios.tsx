import React, {useCallback, useMemo} from "react";
import {SafeAreaView, StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import {Navigation, NavigationFunctionComponent} from "react-native-navigation";
import {IOnboardingData} from "~/types";
import {CommonStyles} from "~/core/theme/commonStyles";
import {CommonSizes} from "~/core/theme/commonSizes";
import {ButtonType, PrimaryButton} from "~/common/components/PrimaryButton";
import {moderateScale} from "react-native-size-matters";
import {isTablet} from "~/core/theme/commonConsts";
import {SFSymbols} from "../../../resources/symbols/SFSymbols";
import {IconPlatform} from "~/common/components/IconPlatform";
import {useTranslation} from "react-i18next";
import {Colors} from "~/core/theme/colors";
import {Brand} from "~/infrastructure/typography";

export const Onboarding: NavigationFunctionComponent = ({componentId}) => {
  const {t} = useTranslation();

  const carouselData: IOnboardingData[] = useMemo(() => ([
    {
      header: t("onboarding.firstHeader"),
      body: t("onboarding.firstBody"),
      icon: SFSymbols["hands.sparkles.fill"],
    },
    {
      header: t("onboarding.secondHeader"),
      body: t("onboarding.secondBody"),
      icon: SFSymbols["books.vertical.fill"],
    },
    {
      header: t("onboarding.thirdHeader"),
      body: t("onboarding.thirdBody"),
      icon: SFSymbols["star.fill"],
    },
  ]), [t]);

  const renderClauseItem = useCallback((value: IOnboardingData, index: number) => {
    return (
      <View key={index} style={styles.clauseContainer}>
        <IconPlatform
          iosName={value.icon as SFSymbols}
          size={moderateScale(32)}
          resizeMode={"contain"}
          color={Colors.black}
          style={styles.clauseIcon}
        />
        <View style={styles.clauseTextContainer}>
          <Brand.H4 style={styles.clauseHeader}>{value.header}</Brand.H4>
          <Brand.H4>{value.body}</Brand.H4>
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
        <Brand.H1 style={styles.welcomeText} labelKey={"onboarding.welcomeToApp"}/>
        <View>{carouselData.map(renderClauseItem)}</View>
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          testID={"OnboardingButtonID"}
          style={styles.button}
          type={ButtonType.solid}
          labelKey={"common.continue"}
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
    fontWeight: "bold",
    fontSize: CommonSizes.font.extraLarge,
    lineHeight: CommonSizes.lineHeight.extraLarge,
    letterSpacing: CommonSizes.letterSpacing.extraLarge,
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
    fontWeight: "600",
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

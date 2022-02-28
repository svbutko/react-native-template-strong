import React, {FC, memo} from "react";
import {StyleSheet, TextStyle, View, ViewStyle} from "react-native";
import {CommonSizes} from "~/core/theme/commonSizes";
import {CommonStyles} from "~/core/theme/commonStyles";
import {i18next} from "~/common/localization/localization";
import {Brand} from "~/infrastructure";
import {LoadState} from "~/types";
import {LoadingComponent} from "./LoadingComponent";
import {Colors} from "~/core/theme/colors";
import {ButtonType, PrimaryButton} from "~/common/components/PrimaryButton";

interface IProps {
  onPress?: () => void;
  errorText?: string | null;
  loadState: LoadState;
}

export const TryAgain: FC<IProps> = memo(({onPress, errorText, loadState}) => {
  return (
    <View style={styles.container}>
      <Brand.H4 style={styles.title}>{errorText}</Brand.H4>
      {onPress != null ? (
        <PrimaryButton
          isLoading={loadState != LoadState.error}
          labelKey={"errors.tryAgain"}
          onPress={onPress}
          type={ButtonType.outline}
        />
      ) : (
        <LoadingComponent containerStyle={styles.loader}/>
      )}
    </View>
  );
});

TryAgain.defaultProps = {
  errorText: i18next.t("errors.unknownErrorHasOccurred"),
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.flexCenter,
    padding: CommonSizes.spacing.medium,
  } as ViewStyle,
  title: {
    textAlign: "center",
    marginBottom: CommonSizes.spacing.extraSmall,
  } as TextStyle,
  description: {
    textAlign: "center",
    textDecorationLine: "underline",
  } as TextStyle,
  loader: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    backgroundColor: Colors.black,
  },
});

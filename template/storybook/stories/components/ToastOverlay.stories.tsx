import React, {FC, useCallback} from "react";
import {ScrollView} from "react-native";
import {ImageResources} from "~/common/ImageResources.g";
import {showToast} from "~/services/navigationService/showToast";
import {CommonStyles} from "~/core/theme/commonStyles";
import {Colors} from "~/core/theme/colors";
import {Separator} from "~/common/components/Separator";
import {ButtonType, PrimaryButton} from "~/common/components/PrimaryButton";

export const ToastOverlayStories: FC = () => {
  const showTopToast = useCallback(() => {
    showToast({
      text: "Toast message text",
      location: "top",
    });
  }, []);

  const showBottomToast = useCallback(() => {
    showToast({
      text: "Toast message text",
      location: "bottom",
    });
  }, []);

  const showBottomToastLoading = useCallback(() => {
    showToast({
      text: "Loading message",
      location: "bottom",
      loading: true,
    });
  }, []);

  const showBottomToastIcon = useCallback(() => {
    showToast({
      text: "Message with icon",
      location: "bottom",
      icon: ImageResources.camera,
      iconStyle: {tintColor: Colors.red},
    });
  }, []);

  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <PrimaryButton type={ButtonType.solid} text={"Show top toast"} onPress={showTopToast} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} text={"Show bottom toast"} onPress={showBottomToast} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} text={"Show loading"} onPress={showBottomToastLoading} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} text={"Show icon"} onPress={showBottomToastIcon} />
    </ScrollView>
  );
};

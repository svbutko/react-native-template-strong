import React, {FC, useCallback} from "react";
import {ScrollView} from "react-native";
import {ButtonType} from "../../../src/types";
import {ImageResources} from "../../../src/common/ImageResources.g";
import {showToast} from "../../../src/navigation/helpers/showToast";
import {CommonStyles} from "../../../src/core/theme/commonStyles";
import {Colors} from "../../../src/core/theme/colors";
import {PrimaryButton} from "../../../src/common/components/PrimaryButton";
import {Separator} from "../../../src/common/components/Separator";

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
      <PrimaryButton type={ButtonType.solid} label={"Show top toast"} onPress={showTopToast} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} label={"Show bottom toast"} onPress={showBottomToast} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} label={"Show loading"} onPress={showBottomToastLoading} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} label={"Show icon"} onPress={showBottomToastIcon} />
    </ScrollView>
  );
};

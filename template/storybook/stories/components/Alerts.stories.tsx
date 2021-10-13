import React, {FC, useCallback} from "react";
import {ScrollView} from "react-native";
import {ButtonType} from "../../../src/types";
import {CommonStyles} from "../../../src/core/theme/commonStyles";
import {PrimaryButton} from "../../../src/common/components/PrimaryButton";
import {Separator} from "../../../src/common/components/Separator";
import {showActionSheet, showAlert, showCommonDialog} from "../../../src/common/helpers/dialogsHelpers";
import {showShareDialog, showShareSocialDialog} from "../../../src/common/helpers/shareHelpers";
import Share from "react-native-share";

export const AlertsStories: FC = () => {
  const onShowActionSheetPress = useCallback(() => {
    showActionSheet(
      {
        title: "Action Sheet Title",
        options: ["Cancel", "Action 1", "Action 2"],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 3,
        message: "Action Sheet Message",
      },
      (optionIndex) => {
        console.warn(`Option ${optionIndex} was pressed`);
      },
    );
  }, []);

  const onShowAlertPress = useCallback(() => {
    showAlert("Title", "Message", [
      {
        text: "Action 1",
        onPress: () => {
          console.warn("Action 1 was pressed");
        },
        style: "default",
      },
      {
        text: "Action 2",
        onPress: () => {
          console.warn("Action 2 was pressed");
        },
        style: "destructive",
      },
    ]);
  }, []);

  const onShowCommonDialogPress = useCallback(() => {
    showCommonDialog("Title", "Message", () => {
      console.warn("You pressed Yes");
    });
  }, []);

  const onShowShareDialogPress = useCallback(async () => {
    await showShareDialog(
      {
        showAppsToView: true,
        message: "Test message to share",
      },
      (result) => {
        console.warn("Share result: ", result);
      },
      (error) => {
        console.error("Share error: ", error);
      },
    );
  }, []);

  const onShowShareSocialDialogPress = useCallback(async () => {
    await showShareSocialDialog(
      {
        social: Share.Social.TWITTER,
        title: "Share via",
        message: "Twitter test message from template",
        url: "",
      },
      (result) => {
        console.warn("Share result: ", result);
      },
      (error) => {
        console.error("Share error: ", error);
      },
    );
  }, []);

  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <PrimaryButton type={ButtonType.solid} label={"Show action sheet (iOS)"} onPress={onShowActionSheetPress} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} label={"Show alert"} onPress={onShowAlertPress} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} label={"Show common dialog"} onPress={onShowCommonDialogPress} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} label={"Show share dialog"} onPress={onShowShareDialogPress} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} label={"Show share social dialog (Twitter)"} onPress={onShowShareSocialDialogPress} />
    </ScrollView>
  );
};

import React, {FC, useCallback} from "react";
import {ScrollView} from "react-native";
import {ButtonType} from "../../../src/types";
import {CommonStyles} from "../../../src/core/theme/commonStyles";
import {PrimaryButton} from "../../../src/common/components/PrimaryButton";
import {Separator} from "../../../src/common/components/Separator";
import {showActionSheet, showAlert, showCommonDialog} from "../../../src/common/helpers/dialogsHelpers";

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

  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <PrimaryButton type={ButtonType.solid} label={"Show action sheet (iOS)"} onPress={onShowActionSheetPress} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} label={"Show alert"} onPress={onShowAlertPress} />
      <Separator />
      <PrimaryButton type={ButtonType.solid} label={"Show common dialog"} onPress={onShowCommonDialogPress} />
    </ScrollView>
  );
};

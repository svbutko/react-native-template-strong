import React, {FC} from "react";
import {ScrollView} from "react-native";
import {PrimaryTextInput} from "../../../src/common/components/PrimaryTextInput";
import {CommonStyles} from "../../../src/core/theme/commonStyles";

export const PrimaryTextInputStories: FC = () => {
  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <PrimaryTextInput label={"Primary Text Input"} />
      <PrimaryTextInput label={"Primary Text Input Non Editable"} placeholder={"Empty text"} editable={false} />
      <PrimaryTextInput label={"Primary Text Input Hint"} hint={"Hint message"} />
      <PrimaryTextInput label={"Primary Text Input Error"} error={"Error message"} />
    </ScrollView>
  );
};

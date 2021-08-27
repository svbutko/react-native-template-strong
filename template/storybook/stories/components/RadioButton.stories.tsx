import React, {FC, useCallback} from "react";
import {ScrollView} from "react-native";
import {CommonStyles} from "../../../src/core/theme";
import {RadioButton} from "../../../src/common/components";

export const RadioButtonStories: FC = () => {
  const onEmptyPress = useCallback(() => {
    console.log("Pressed");
  }, []);

  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <RadioButton id={"0"} label={"Selected"} isSelected={true} onPress={onEmptyPress} />
      <RadioButton id={"1"} label={"Unselected"} isSelected={false} onPress={onEmptyPress} />
      <RadioButton id={"2"} label={"Selected disabled"} isSelected={true} onPress={onEmptyPress} disabled={true} />
    </ScrollView>
  );
};

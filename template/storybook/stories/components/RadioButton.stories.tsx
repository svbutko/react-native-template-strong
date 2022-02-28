import React, {FC, useCallback} from "react";
import {ScrollView} from "react-native";
import {RadioButton} from "~/common/components/RadioButton";
import {CommonStyles} from "~/core/theme/commonStyles";

export const RadioButtonStories: FC = () => {
  const onEmptyPress = useCallback(() => {
    console.log("Pressed");
  }, []);

  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <RadioButton id={"0"} label={"Selected"} isSelected={true} onPress={onEmptyPress} />
      <RadioButton id={"1"} label={"Unselected"} isSelected={false} onPress={onEmptyPress} />
      <RadioButton id={"2"} label={"Selected disabled"} isSelected={true} onPress={onEmptyPress} disabled={true} />
      <RadioButton id={"3"} label={"Unselected disabled"} isSelected={false} onPress={onEmptyPress} disabled={true} />
    </ScrollView>
  );
};

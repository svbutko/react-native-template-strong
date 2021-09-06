import React, {FC, useCallback} from "react";
import {ScrollView} from "react-native";
import {ButtonType} from "../../../src/types";
import {ImageResources} from "../../../src/common/ImageResources.g";
import {CommonStyles} from "../../../src/core/theme/commonStyles";
import {PrimaryButton} from "../../../src/common/components/PrimaryButton";

export const PrimaryButtonStories: FC = () => {
  const onEmptyPress = useCallback(() => {
    console.log("Pressed");
  }, []);

  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <PrimaryButton label={"Solid"} type={ButtonType.solid} onPress={onEmptyPress} />
      <PrimaryButton label={"Borderless"} type={ButtonType.borderless} onPress={onEmptyPress} />
      <PrimaryButton label={"Outline"} type={ButtonType.outline} onPress={onEmptyPress} />

      <PrimaryButton label={"Solid Rounded"} type={ButtonType.solid} rounded={true} onPress={onEmptyPress} />
      <PrimaryButton label={"Outline Rounded"} type={ButtonType.outline} rounded={true} onPress={onEmptyPress} />

      <PrimaryButton label={"Solid Disabled"} type={ButtonType.solid} disabled={true} onPress={onEmptyPress} />
      <PrimaryButton label={"Outline Disabled"} type={ButtonType.outline} disabled={true} onPress={onEmptyPress} />

      <PrimaryButton label={"Solid Icon"} type={ButtonType.solid} onPress={onEmptyPress} icon={ImageResources.camera} />
      <PrimaryButton label={"Borderless Icon"} type={ButtonType.borderless} onPress={onEmptyPress} icon={ImageResources.camera} />
      <PrimaryButton label={"Outline Icon"} type={ButtonType.outline} onPress={onEmptyPress} icon={ImageResources.camera} />

      <PrimaryButton label={"Outline Negative"} type={ButtonType.outlineNegative} onPress={onEmptyPress} icon={ImageResources.camera} />
    </ScrollView>
  );
};

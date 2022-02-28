import React, {FC, useCallback} from "react";
import {ScrollView} from "react-native";
import {ImageResources} from "~/common/ImageResources.g";
import {CommonStyles} from "~/core/theme/commonStyles";
import {ButtonType, PrimaryButton} from "../../../src/common/components/PrimaryButton";

export const PrimaryButtonStories: FC = () => {
  const onEmptyPress = useCallback(() => {
    console.log("Pressed");
  }, []);

  return (
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
        <PrimaryButton text={"Solid"} type={ButtonType.solid} onPress={onEmptyPress} />
        <PrimaryButton text={"Borderless"} type={ButtonType.borderless} onPress={onEmptyPress} />
        <PrimaryButton text={"Outline"} type={ButtonType.outline} onPress={onEmptyPress} />

        <PrimaryButton text={"Solid Disabled"} type={ButtonType.solid} disabled={true} onPress={onEmptyPress} />
        <PrimaryButton text={"Borderless Disabled"} type={ButtonType.borderless} disabled={true}
                       onPress={onEmptyPress} />
        <PrimaryButton text={"Outline Disabled"} type={ButtonType.outline} disabled={true} onPress={onEmptyPress} />

        <PrimaryButton text={"Solid Icon"} type={ButtonType.solid} onPress={onEmptyPress}
                       icon={ImageResources.camera} />
        <PrimaryButton text={"Borderless Icon"} type={ButtonType.borderless} onPress={onEmptyPress}
                       icon={ImageResources.camera} />
        <PrimaryButton text={"Outline Icon"} type={ButtonType.outline} onPress={onEmptyPress}
                       icon={ImageResources.camera} />
    </ScrollView>
  );
};

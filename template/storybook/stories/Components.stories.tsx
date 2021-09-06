import React from "react";
import {storiesOf} from "@storybook/react-native";
import {withKnobs} from "@storybook/addon-knobs";
import {PrimaryButtonStories} from "./components/PrimaryButton.stories";
import {PrimaryTextInputStories} from "./components/PrimaryTextInput.stories";
import {RadioButtonStories} from "./components/RadioButton.stories";
import {PhotoTakingButtonStories} from "./components/PhotoTakingButton.stories";
import {EmptyViewStories} from "./components/EmptyView.stories";
import {LoadingComponent} from "../../src/common/components/LoadingComponent";
import {TryAgain} from "../../src/common/components/TryAgain";

const ComponentsStories = storiesOf("Components", module);

ComponentsStories.addDecorator(withKnobs);

ComponentsStories.add("PrimaryButton", () => <PrimaryButtonStories />);

ComponentsStories.add("PrimaryTextInput", () => <PrimaryTextInputStories />);

ComponentsStories.add("RadioButton", () => <RadioButtonStories />);

ComponentsStories.add("PhotoTakingButton", () => <PhotoTakingButtonStories />);

ComponentsStories.add("EmptyView", () => <EmptyViewStories />);

ComponentsStories.add("LoadingComponent", () => <LoadingComponent />);

ComponentsStories.add("TryAgain", () => (
  <TryAgain
    onPress={() => {
      console.log("pressed");
    }}
  />
));

import React from "react";
import {storiesOf} from "@storybook/react-native";
import {AnimationsStories} from "./components/Animations.stories";

const AnimationsAndInteractionStories = storiesOf("Animations", module);

AnimationsAndInteractionStories.add("Animations", () => <AnimationsStories />);

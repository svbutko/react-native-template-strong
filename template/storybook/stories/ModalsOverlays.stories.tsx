import React from "react";
import {storiesOf} from "@storybook/react-native";
import {DatePickerOverlayStories} from "./components/DatePickerOverlay.stories";
import {ToastOverlayStories} from "./components/ToastOverlay.stories";

const ModalsOverlaysStories = storiesOf("Modals and overlays", module);

ModalsOverlaysStories.add("DatePickerOverlay", () => <DatePickerOverlayStories />);

ModalsOverlaysStories.add("ToastOverlay", () => <ToastOverlayStories />);

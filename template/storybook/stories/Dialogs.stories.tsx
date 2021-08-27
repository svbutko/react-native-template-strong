import React from "react";
import {storiesOf} from "@storybook/react-native";
import {DatePickerOverlay} from "../../src/common/components";
import {DatePickerOverlayStories} from "./components/DatePickerOverlay.stories";

const DialogsStories = storiesOf("Dialogs", module);

DialogsStories.add("DatePickerOverlay", () => <DatePickerOverlayStories />);

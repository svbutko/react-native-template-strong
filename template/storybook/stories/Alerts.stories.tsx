import React from "react";
import {storiesOf} from "@storybook/react-native";
import {AlertsStories} from "./components/Alerts.stories";

const AlertsDialogsStories = storiesOf("Alerts and dialogs", module);

AlertsDialogsStories.add("Alerts", () => <AlertsStories />);

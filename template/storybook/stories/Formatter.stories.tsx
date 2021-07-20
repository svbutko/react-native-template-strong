import React from "react";
import {storiesOf} from "@storybook/react-native";
import {DateFormatList} from "../components/DateFormatList";
import {MomentFormatterStory} from "../components/MomentFormatterStory";
import {IntlFormatterStory} from "../components/IntlFormatterStory";

const FormatStories = storiesOf("Format", module);

FormatStories.add("Date Formats Enum", () => <DateFormatList />);

FormatStories.add("Date Formats", () => <MomentFormatterStory />);

FormatStories.add("Intl Formats", () => <IntlFormatterStory />);

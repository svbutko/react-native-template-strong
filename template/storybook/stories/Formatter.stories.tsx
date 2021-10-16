import React from "react";
import {storiesOf} from "@storybook/react-native";
import {DateFormatList} from "../components/DateFormatList";
import {DateFormatterStory} from "../components/DateFormatterStory";
import {IntlFormatterStory} from "../components/IntlFormatterStory";

const FormatStories = storiesOf("Format", module);

FormatStories.add("Date Formats Enum", () => <DateFormatList />);

FormatStories.add("Date Formats", () => <DateFormatterStory />);

FormatStories.add("Intl Formats", () => <IntlFormatterStory />);

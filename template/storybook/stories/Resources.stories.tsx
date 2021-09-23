import React from "react";
import {storiesOf} from "@storybook/react-native";
import {ImagesList} from "../components/ImagesList";
import {IllustrationsResources, ImageResources} from "../../src/common/ImageResources.g";

const ResourcesStories = storiesOf("Resources", module);

ResourcesStories.add("ImageResources", () => <ImagesList data={Object.entries(ImageResources)} />);

ResourcesStories.add("IllustrationsResources", () => <ImagesList data={Object.entries(IllustrationsResources)} />);

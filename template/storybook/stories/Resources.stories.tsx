import React from "react";
import {storiesOf} from "@storybook/react-native";
import {GlyphsList} from "../components/GlyphsList";

const ResourcesStories = storiesOf('Resources', module);

ResourcesStories.add("Glyphs", () => (
    <GlyphsList/>
));

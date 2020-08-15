import React from "react";
import { storiesOf } from "@storybook/react-native";
import {ColorPaletteList} from "../../src/common/components/ColorPaletteList";
import {FontsList} from "../../src/common/components/FontsList";

const ThemeStories = storiesOf('Theme', module);

ThemeStories.add("Platform Colors", () => (
    <ColorPaletteList isPlatformColors={true}/>
));

ThemeStories.add("Custom Colors", () => (
    <ColorPaletteList isPlatformColors={false}/>
));

ThemeStories.add("Fonts", () => (
    <FontsList/>
));


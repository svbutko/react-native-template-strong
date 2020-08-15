import {AppRegistry} from "react-native";
import {name as appName} from "./app.json";
import {App} from "./src/App";
import { getStorybookUI, configure } from "@storybook/react-native";
import "./storybook.config"

configure(() => {
    require("./storybook/stories.ts");
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

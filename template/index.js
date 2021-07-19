import {configure} from "@storybook/react-native";
import "./storybook.config";
import "react-native-gesture-handler";
import {initializeApp} from "./src/app";

configure(() => {
    require("./storybook/stories.ts");
}, module);

initializeApp();

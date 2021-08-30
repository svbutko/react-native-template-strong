import {configure} from "@storybook/react-native";
// eslint-disable-next-line import/no-unassigned-import
import "./storybook.config";
// eslint-disable-next-line import/no-unassigned-import
import "react-native-gesture-handler";
import {initializeApp} from "./src/app";

configure(() => {
  // eslint-disable-next-line import/no-unassigned-import
  require("./storybook/stories.ts");
}, module);

initializeApp();

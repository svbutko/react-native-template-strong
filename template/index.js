import {configure} from "@storybook/react-native";
// eslint-disable-next-line import/no-unassigned-import
import "./storybook.config";
// eslint-disable-next-line import/no-unassigned-import
import "react-native-gesture-handler";
import {initializeApp} from "./src/app";
import {showStorybook} from "./src/navigation/helpers";
import DevMenu from "react-native-dev-menu";

if (__DEV__) {
  configure(() => {
    // eslint-disable-next-line import/no-unassigned-import
    require("./storybook/stories.ts");
  }, module);

  DevMenu.addItem("Storybook", showStorybook);
}

initializeApp();

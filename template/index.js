import "react-native-gesture-handler";
import {initializeApp} from "./src/app";

if (__DEV__) {
  const {configure} = require("@storybook/react-native");
  require("@storybook/addon-ondevice-knobs/register");
  require("@storybook/addon-ondevice-actions/register");
  configure(() => {
    require("./storybook/stories.ts");
  }, module);

  const DevMenu = require("react-native-dev-menu");
  const {showStorybook} = require("./src/navigation/helpers/showStorybook");
  DevMenu.addItem("Storybook", showStorybook);
}

initializeApp();

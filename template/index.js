import "react-native-gesture-handler";
import {initializeApp} from "./src/app";

if (__DEV__) {
  // temp fix for the promise.finally
  // https://github.com/storybookjs/storybook/issues/8371
  const fn = Promise.prototype.finally;
  const {configure} = require("@storybook/react-native");
  Promise.prototype.finally = fn;

  require("@storybook/addon-ondevice-knobs/register");
  require("@storybook/addon-ondevice-actions/register");
  configure(() => {
    require("./storybook/stories.ts");
  }, module);

  const DevMenu = require("react-native-dev-menu");
  const {showStorybook} = require("./src/services/navigationService/showStorybook");
  DevMenu.addItem("Storybook", showStorybook);
}

initializeApp();

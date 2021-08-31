// eslint-disable-next-line import/no-unassigned-import
import "react-native-gesture-handler";
import {initializeApp} from "./src/app";

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const {configure} = require("@storybook/react-native");
  // eslint-disable-next-line import/no-unassigned-import
  require("@storybook/addon-ondevice-knobs/register");
  // eslint-disable-next-line import/no-unassigned-import
  require("@storybook/addon-ondevice-actions/register");
  configure(() => {
    // eslint-disable-next-line import/no-unassigned-import
    require("./storybook/stories.ts");
  }, module);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const DevMenu = require("react-native-dev-menu");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const {showStorybook} = require("./src/navigation/helpers/showStorybook");
  DevMenu.addItem("Storybook", showStorybook);
}

initializeApp();

import {registerComponents, setDefaultOptions} from "./navigation";
import {Navigation} from "react-native-navigation";
import {setLanguage} from "./common/localization";
import {setDefaultOrientation} from "./common/helpers";
import {setInitialRoot} from "./navigation/roots";
import DevMenu from "react-native-dev-menu";
import {showStorybook} from "./navigation/helpers";

if (__DEV__) {
  DevMenu.addItem("Storybook", showStorybook);
}

export function initializeApp() {
  setLanguage();
  setDefaultOrientation();
  registerComponents();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setInitialRoot();
  });
}

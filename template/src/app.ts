import {Navigation} from "react-native-navigation";
import {setInitialRoot} from "./navigation/roots";
import {setLanguage} from "./common/localization/localization";
import {registerComponents, setDefaultOptions} from "./navigation/navigation";
import {setDefaultOrientation} from "./common/helpers/orientationHelpers";

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

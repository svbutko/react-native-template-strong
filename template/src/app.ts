import {Navigation} from "react-native-navigation";
import {setInitialRoot} from "./navigation/roots";
import {registerComponents, setDefaultOptions} from "./navigation/navigation";
import {setDefaultOrientation} from "./common/helpers/orientationHelpers";

export function initializeApp() {
  setDefaultOrientation();
  registerComponents();
  setDefaultOptions();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setInitialRoot();
  });
}

import {Navigation} from "react-native-navigation";
import {setInitialRoot} from "./navigation/roots";
import {setDefaultOrientation} from "./common/helpers/orientationHelpers";
import {configureTypography} from "./startup/configureTypography";
import {configureLogger} from "~/startup/configureLogger";
import {registerComponents} from "./navigation/componentsRegistration";
import {setDefaultOptions} from "./navigation/defaults";

export function initializeApp() {
  setDefaultOrientation();
  registerComponents();
  setDefaultOptions();
  configureTypography();
  configureLogger();
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.dismissAllModals();
    setInitialRoot();
  });
}

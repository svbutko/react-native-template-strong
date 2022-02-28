import {Navigation} from "react-native-navigation";
import {Pages} from "./pages";
import {Main} from "~/modules/main/Main";
import {Splash} from "~/modules/splash/Splash";
import {ToastOverlay} from "~/common/components/ToastOverlay";
import {DatePickerOverlay} from "~/common/components/DatePickerOverlay";
import {Onboarding} from "~/modules/onboarding/Onboarding";
import {Search} from "~/modules/search/Search";
import {Settings} from "~/modules/settings/Settings";
import {AppNavigationComponentProps, NavigationHOC, NavigationHOCProps} from "~/navigation/helpers/NavigationHOC";


function registerAppComponent<P extends AppNavigationComponentProps>(props: NavigationHOCProps<P>) {
  Navigation.registerComponent(props.page.name, () => NavigationHOC(props));
}

export function registerComponents() {
  if (__DEV__) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const {getStorybookUI} = require("@storybook/react-native");
    const StorybookUIRoot = getStorybookUI({
      asyncStorage: null,
    });
    Navigation.registerComponent(Pages.storybook.name, () => StorybookUIRoot);
  }
  registerAppComponent({Component: Splash, page: Pages.splash});
  Navigation.registerComponent(Pages.onboarding.name, () => Onboarding);
  Navigation.registerComponent(Pages.main.name, () => Main);
  Navigation.registerComponent(Pages.search.name, () => Search);
  Navigation.registerComponent(Pages.settings.name, () => Settings);
  Navigation.registerComponent(Pages.toast.name, () => ToastOverlay);
  Navigation.registerComponent(Pages.datePicker.name, () => DatePickerOverlay);
}

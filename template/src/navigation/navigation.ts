import {Navigation, NavigationConstants} from "react-native-navigation";
import {Pages} from "./pages";
import {isAndroid, PlatformColorsAndroid, PlatformColorsIOS} from "../core/theme";
import {Demo} from "../modules/demo/Demo";
import {More} from "../modules/more/More";
import {localization} from "../common/localization";
import {Main} from "../modules/main/Main";
import {gestureHandlerRootHOC} from "react-native-gesture-handler";
import {Splash} from "../modules/splash/Splash";
import {DatePickerOverlay, Toast} from "../common/components";
import {getStorybookUI} from "@storybook/react-native";
import {reduxProvider} from "../core/store/store";
import {useState} from "react";
import {Onboarding} from "../modules/onboarding/Onboarding";
// eslint-disable-next-line import/no-unassigned-import
import "../../storybook.config";
import {platformNativeColor} from "../common/helpers";

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export function useNavigationConstants() {
  const [constants, setConstants] = useState<NavigationConstants>();

  Navigation.constants().then(setConstants);

  return constants;
}

export function setDefaultOptions() {
  Navigation.setDefaultOptions({
    animations: {
      setRoot: {
        waitForRender: true,
      },
      setStackRoot: {
        waitForRender: true,
      },
    },
    layout: {
      componentBackgroundColor: platformNativeColor(PlatformColorsIOS.systemBackground, PlatformColorsAndroid.darkerGray),
    },
    topBar: {
      animate: true,
      drawBehind: !isAndroid,
      background: {
        translucent: true,
      },
      largeTitle: {
        visible: false,
      },
      scrollEdgeAppearance: {
        active: true,
        noBorder: true,
      },
      searchBar: {
        visible: false,
        hideOnScroll: true,
        hideTopBarOnFocus: true,
        obscuresBackgroundDuringPresentation: true,
      },
      hideNavBarOnFocusSearchBar: true,
      searchBarHiddenWhenScrolling: true,
      searchBarPlaceholder: localization.common.search,
      noBorder: false,
    },
    bottomTabs: {
      animate: true,
      hideShadow: false,
      translucent: true,
    },
    bottomTab: {
      selectedTextColor: {
        light: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.darkerGray),
        dark: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.darkerGray),
      },
      selectedIconColor: {
        light: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.darkerGray),
        dark: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.darkerGray),
      },
      textColor: {
        light: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.darkerGray),
        dark: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.darkerGray),
      },
      iconColor: {
        light: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.darkerGray),
        dark: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.darkerGray),
      },
    },
  });
}

export function registerComponents() {
  Navigation.registerComponent(Pages.storybook.name, () => StorybookUIRoot);
  Navigation.registerComponent(
    Pages.splash.name,
    () => gestureHandlerRootHOC(reduxProvider(Splash)),
    () => Splash,
  );
  Navigation.registerComponent(Pages.onboarding.name, () => Onboarding);
  Navigation.registerComponent(Pages.main.name, () => Main);
  Navigation.registerComponent(Pages.demo.name, () => Demo);
  Navigation.registerComponent(Pages.more.name, () => More);
  Navigation.registerComponent(Pages.toast.name, () => Toast);
  Navigation.registerComponent(Pages.datePicker.name, () => DatePickerOverlay);
}

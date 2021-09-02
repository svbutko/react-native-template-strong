import {Navigation} from "react-native-navigation";
import {Pages} from "./pages";
import {Colors, isAndroid, PlatformColorsAndroid, PlatformColorsIOS} from "../core/theme";
import {Demo} from "../modules/demo/Demo";
import {More} from "../modules/more/More";
import {localization} from "../common/localization";
import {Main} from "../modules/main/Main";
import {gestureHandlerRootHOC} from "react-native-gesture-handler";
import {Splash} from "../modules/splash/Splash";
import {DatePickerOverlay, ToastOverlay} from "../common/components";
import {reduxProvider} from "../core/store/store";
import {Onboarding} from "../modules/onboarding/Onboarding";
import {platformMixedColor, platformNativeColor} from "../common/helpers";
import {Platform} from "react-native";
import {getStorybookUI} from "@storybook/react-native";

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

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
      componentBackgroundColor: platformNativeColor(PlatformColorsIOS.systemBackground, PlatformColorsAndroid.background),
    },
    topBar: {
      animate: true,
      drawBehind: !isAndroid,
      background: {
        translucent: true,
        color: {
          light: platformMixedColor(undefined, Colors.gray),
          dark: platformMixedColor(undefined, Colors.black),
        },
      },
      title: {
        color: {
          light: platformMixedColor(undefined, Colors.black),
          dark: platformMixedColor(undefined, Colors.white),
        },
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
      animateTabSelection: true,
      preferLargeIcons: false,
      tabsAttachMode: "together",
      backgroundColor: {
        light: platformMixedColor(undefined, Colors.gray),
        dark: platformMixedColor(undefined, Colors.black),
      },
      ...Platform.select({
        android: {
          translucent: false,
          borderWidth: 1,
          borderColor: Colors.gray,
        },
      }),
    },
    bottomTab: {
      selectedTextColor: {
        light: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.black),
        dark: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.white),
      },
      selectedIconColor: {
        light: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.black),
        dark: platformMixedColor(PlatformColorsIOS.systemBlue, Colors.white),
      },
      textColor: {
        light: platformMixedColor(PlatformColorsIOS.secondaryLabel, Colors.darkGray),
        dark: platformMixedColor(PlatformColorsIOS.secondaryLabel, Colors.darkGray),
      },
      iconColor: {
        light: platformMixedColor(PlatformColorsIOS.secondaryLabel, Colors.darkGray),
        dark: platformMixedColor(PlatformColorsIOS.secondaryLabel, Colors.darkGray),
      },
    },
    statusBar: {
      visible: true,
    },
  });
}

export function registerComponents() {
  if (__DEV__) {
    Navigation.registerComponent(Pages.storybook.name, () => StorybookUIRoot);
  }
  Navigation.registerComponent(
    Pages.splash.name,
    () => gestureHandlerRootHOC(reduxProvider(Splash)),
    () => Splash,
  );
  Navigation.registerComponent(Pages.onboarding.name, () => Onboarding);
  Navigation.registerComponent(Pages.main.name, () => Main);
  Navigation.registerComponent(Pages.demo.name, () => Demo);
  Navigation.registerComponent(Pages.more.name, () => More);
  Navigation.registerComponent(Pages.toast.name, () => ToastOverlay);
  Navigation.registerComponent(Pages.datePicker.name, () => DatePickerOverlay);
}

import {Navigation} from "react-native-navigation";
import {Pages} from "./pages";
import {Main} from "../modules/main/Main";
import {gestureHandlerRootHOC} from "react-native-gesture-handler";
import {Splash} from "../modules/splash/Splash";
import {reduxProvider} from "../core/store/store";
import {Platform} from "react-native";
import {getStorybookUI} from "@storybook/react-native";
import {localization} from "../common/localization/localization";
import {PlatformColorsAndroid, PlatformColorsIOS} from "../core/theme/colors";
import {isAndroid} from "../core/theme/commonConsts";
import {platformNativeColor} from "../common/helpers/colorHelpers";
import {ToastOverlay} from "../common/components/ToastOverlay";
import {DatePickerOverlay} from "../common/components/DatePickerOverlay";
import {Onboarding} from "../modules/onboarding/Onboarding";
import {Search} from "../modules/search/Search";
import {Settings} from "../modules/settings/Settings";

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
      componentBackgroundColor: platformNativeColor(PlatformColorsIOS.secondarySystemBackground, PlatformColorsAndroid.background),
    },
    topBar: {
      animate: true,
      drawBehind: !isAndroid,
      background: {
        translucent: true,
        color: platformNativeColor(PlatformColorsIOS.secondarySystemBackground, PlatformColorsAndroid.navigation),
      },
      title: {
        color: platformNativeColor(undefined, PlatformColorsAndroid.onPrimaryText),
      },
      largeTitle: {
        visible: false,
      },
      scrollEdgeAppearance: {
        active: true,
        noBorder: true,
        background: {
          translucent: true,
          color: platformNativeColor(PlatformColorsIOS.secondarySystemBackground, PlatformColorsAndroid.navigation),
        },
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
      backgroundColor: platformNativeColor(PlatformColorsIOS.secondarySystemBackground, PlatformColorsAndroid.navigation),
      ...Platform.select({
        android: {
          translucent: false,
          borderWidth: 1,
          borderColor: platformNativeColor(undefined, PlatformColorsAndroid.divider),
        },
      }),
    },
    bottomTab: {
      selectedTextColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.onPrimaryText),
      selectedIconColor: platformNativeColor(PlatformColorsIOS.systemBlue, PlatformColorsAndroid.onPrimaryText),
      textColor: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.onPrimaryTextOpacity),
      iconColor: platformNativeColor(PlatformColorsIOS.secondaryLabel, PlatformColorsAndroid.onPrimaryTextOpacity),
    },
    statusBar: {
      backgroundColor: platformNativeColor(undefined, PlatformColorsAndroid.statusbar),
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
  Navigation.registerComponent(Pages.search.name, () => Search);
  Navigation.registerComponent(Pages.settings.name, () => Settings);
  Navigation.registerComponent(Pages.toast.name, () => ToastOverlay);
  Navigation.registerComponent(Pages.datePicker.name, () => DatePickerOverlay);
}

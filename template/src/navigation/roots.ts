import {Pages} from "./pages";
import {Navigation} from "react-native-navigation";
import {Tabs} from "./tabs";
import {localization} from "../common/localization/localization";
import {SFSymbols} from "../../resources/symbols/SFSymbols";
import {getPlatformTabsIcon} from "./helpers/navigationIconHelpers";

export function setStorybookRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.storybook.name,
        id: Pages.storybook.id,
        options: {
          topBar: {
            visible: true,
            title: {
              text: localization.pages.storybook,
            },
          },
        },
      },
    },
  });
}

export function setInitialRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.splash.name,
        id: Pages.splash.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}

export function setOnboardingRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.onboarding.name,
        id: Pages.onboarding.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  });
}

export function setTabsRoot(callback?: () => void) {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: Pages.tabs.id,
        children: [
          {
            stack: {
              id: Tabs.main.id,
              children: [
                {
                  component: {
                    id: Pages.main.id,
                    name: Pages.main.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: localization.pages.main,
                  ...getPlatformTabsIcon(SFSymbols["house"], SFSymbols["house.fill"], "home"),
                },
              },
            },
          },
          {
            stack: {
              id: Tabs.search.id,
              children: [
                {
                  component: {
                    id: Pages.search.id,
                    name: Pages.search.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: localization.pages.search,
                  ...getPlatformTabsIcon(SFSymbols["magnifyingglass"], SFSymbols["magnifyingglass"], "search"),
                },
              },
            },
          },
          {
            stack: {
              id: Tabs.settings.id,
              children: [
                {
                  component: {
                    id: Pages.settings.id,
                    name: Pages.settings.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: localization.pages.settings,
                  ...getPlatformTabsIcon(SFSymbols["gearshape"], SFSymbols["gearshape.fill"], "settings"),
                },
              },
            },
          },
        ],
      },
    },
  }).then(callback);
}

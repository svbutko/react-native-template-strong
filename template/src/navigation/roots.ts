import {Pages} from "./pages";
import {Navigation, OptionsBottomTab} from "react-native-navigation";
import {Tabs} from "./tabs";
import {localization} from "../common/localization/localization";
import {Platform} from "react-native";
import {SFSymbols} from "../../resources/symbols/SFSymbols";
import Icon from "react-native-vector-icons/MaterialIcons";

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
                  ...Platform.select({
                    ios: {
                      sfSymbol: SFSymbols["house"],
                      sfSelectedSymbol: SFSymbols["house.fill"],
                    } as OptionsBottomTab,
                    android: {
                      icon: Icon.getImageSourceSync("home"),
                    } as OptionsBottomTab,
                  }),
                },
              },
            },
          },
          {
            stack: {
              id: Tabs.demo.id,
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
                  ...Platform.select({
                    ios: {
                      sfSymbol: SFSymbols["magnifyingglass"],
                      sfSelectedSymbol: SFSymbols["magnifyingglass"],
                    } as OptionsBottomTab,
                    android: {
                      icon: Icon.getImageSourceSync("search"),
                    } as OptionsBottomTab,
                  }),
                },
              },
            },
          },
          {
            stack: {
              id: Tabs.more.id,
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
                  ...Platform.select({
                    ios: {
                      sfSymbol: SFSymbols["gearshape"],
                      sfSelectedSymbol: SFSymbols["gearshape.fill"],
                    } as OptionsBottomTab,
                    android: {
                      icon: Icon.getImageSourceSync("settings"),
                    } as OptionsBottomTab,
                  }),
                },
              },
            },
          },
        ],
      },
    },
  }).then(callback);
}

import {Pages} from "./pages";
import {Navigation} from "react-native-navigation";
import {Tabs} from "./tabs";
import {localization} from "../common/localization";

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

export function setTabsRoot() {
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
                    id: Pages.demo.id,
                    name: Pages.demo.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: localization.pages.demo,
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
                    id: Pages.more.id,
                    name: Pages.more.name,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: localization.pages.more,
                },
              },
            },
          },
        ],
      },
    },
  }).then();
}

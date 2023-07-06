---
sidebar_position: 3
title: Pages
---

## Content

Pages constants are located in `src/navigation/pages.ts`.

```typescript
export const Pages = {
  storybook: {
    id: "STORYBOOK",
    name: "Storybook",
  },
  splash: {
    id: "SPLASH_SCREEN",
    name: "SplashScreen",
  },
  onboarding: {
    id: "ONBOARDING_SCREEN",
    name: "OnboardingScreen",
  },
  toast: {
    id: "TOAST",
    name: "ToastOverlay",
  },
  datePicker: {
    id: "DATE_PICKER",
    name: "DatePickerOverlay",
  },
  tabs: {
    id: "BOTTOM_TABS",
    name: "BottomTabs",
  },
  main: {
    id: "MAIN_SCREEN",
    name: "MainScreen",
  },
  search: {
    id: "SEARCH_SCREEN",
    name: "SearchScreen",
  },
  settings: {
    id: "SETTINGS_SCREEN",
    name: "SettingsScreen",
  },
};
```

Pages are defined as the object which contains page names as parameters which are objects with `name` and `id`.

Here besides pages itself you add modals, overlays and other components which will be registered in navigation (i.e. `registerNavigationComponent`).

`registerNavigationComponent` - shorthand function to simplify registration of a page.

Such examples are `toast` and `datePicker` properties of `Pages`.

## Adding pages

To add a page, simply add your own property in `Pages` with `id` and `name`.

## Registering pages

All the pages are being registered in `src/navigation/navigation.ts`'s `registerComponents` function which is being called at initialization of application.

```typescript
export function registerComponents() {
    if (__DEV__) {
        registerNavigationComponent(Pages.storybook, StorybookUIRoot);
    }
    registerNavigationComponent(Pages.splash, Splash, true);
    registerNavigationComponent(Pages.onboarding, Onboarding);
    registerNavigationComponent(Pages.main, Main);
    registerNavigationComponent(Pages.search, Search);
    registerNavigationComponent(Pages.settings, Settings);
    registerNavigationComponent(Pages.toast, ToastOverlay);
    registerNavigationComponent(Pages.datePicker, DatePickerOverlay);
}
```

If your page or component is going to be a simple component which won't be communication with `redux` then you can simply register it the next way:

```typescript
  registerNavigationComponent(Pages.yourPage, YourPage);
```

Otherwise, add a third parameter with `true`:

```typescript
  registerNavigationComponent(Pages.yourPage, YourPage, true);
```

The communication with `redux` and usage will be explained later.

## Using pages

Create a simple function component like so and describe its options if needed:

```typescript jsx
export const YourPage: NavigationFunctionComponent = (): JSX.Element => {
  return <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1} />;
};

YourPage.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    searchBar: {
      visible: false,
    },
    title: {
      text: localization.pages.yourPage,
    },
  },
};
```

:::tip Tip
Try to use `ScrollView` as your parent component in order to have the best behavior on iOS.
:::



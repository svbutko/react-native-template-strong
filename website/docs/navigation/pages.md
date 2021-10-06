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

Here besides pages itself you add modals, overlays and other components which will be registered in navigation (i.e. `Navigation.registerComponent`).

Such examples are `toast` and `datePicker` properties of `Pages`.

## Adding pages

To add a page, simply add your own property in `Pages` with `id` and `name`.

## Registering pages

All the pages are being registered in `src/navigation/navigation.ts`'s `registerComponents` function which is being called at initialization of application.

```typescript
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
```

If your page or component is going to be a simple component which won't be communication with `redux` then you can simply register it the next way:

```typescript
  Navigation.registerComponent(Pages.yourPage.name, () => YourPage);
```

Otherwise, it should be wrapped with `gestureHandlerRootHOC` and `reduxProvider` like so:

```typescript
  Navigation.registerComponent(
    Pages.splash.name,
    () => gestureHandlerRootHOC(reduxProvider(Splash)),
    () => Splash,
  );
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



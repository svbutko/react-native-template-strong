---
sidebar_position: 1
title: Before starting
---

## Content

First read about [Redux](https://redux.js.org/introduction/getting-started) and [Redux ToolKit](https://redux-toolkit.js.org/introduction/getting-started), about what it can do, what they offer and then come back here to move on.

It's important to know about them because they are core components of this template and knowing them can save your time
and eliminate many questions.

## If you don't want to use Redux

You can simply remove it with next following steps:
- Remove it from dependencies and devDependencies:

```shell
npm uninstall @reduxjs/toolkit react-redux redux-persist @types/react-redux
```

- Delete the `src/core/store` folder
- Change `Splash` screen navigation component initialization:

From:

```typescript jsx
  Navigation.registerComponent(
    Pages.splash.name,
    () => gestureHandlerRootHOC(reduxProvider(Splash)),
    () => Splash,
  );
```

To:

```typescript jsx
  Navigation.registerComponent(Pages.splash.name, () => Splash);
```

- Remove usage of `useAppSelector` in `Splash` (but you have to manage now `Onboarding` logic your way):
```typescript jsx
export const Splash: NavigationFunctionComponent = () => {
  useEffect(() => {
    setTabsRoot();
  }, []);

  return <LoadingComponent />;
};
```

- Remove unneeded interfaces from `src/types/index.ts`:
```typescript jsx
export interface RehydrateAppAction extends RehydrateAction {
  payload?: RootState;
}
```

- Remove unneeded `handlePromiseResult` from `src/common/validations/errorValidations.ts`:

```typescript jsx
export function handlePromiseResult(
  promiseAction: Promise<any>,
  successMessage?: string,
  successAction?: () => void,
  processError?: (error: Error) => IErrorResult,
  setError?: (errorMessage: string) => void,
) {
  promiseAction
    .then(unwrapResult)
    .then(() => {
      successMessage && showToast({text: successMessage});
      successAction && successAction();
    })
    .catch((handledError: Error) => {
      processError && handleErrorPostProcessing(processError(handledError), setError);
    });
}
```

That's it, you successfully removed `redux` from project.

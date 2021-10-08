---
sidebar_position: 2
title: Splash
---

## Content

It's React Native navigation page which at this moment shows `LoadingComponent`.

You can try to adjust it to show replicate the native splash, or add some animation here.

This page is primarily used to implement initial navigation root setting by checking different parameters.

For example, now it checks whether user opens this app first time or not in order to show him `Onboarding`:

```typescript jsx
export const Splash: NavigationFunctionComponent = () => {
  const isOnboardingVisited = useAppSelector((state) => state.system.isOnboardingVisited);

  useEffect(() => {
    if (isOnboardingVisited) {
      setTabsRoot();
    } else if (isIos) {
      setTabsRoot(showOnboarding);
    } else {
      setOnboardingRoot();
    }
  }, [isOnboardingVisited]);

  return <LoadingComponent />;
};
```

You can also implement your checks here (e.g. is logged in or not).

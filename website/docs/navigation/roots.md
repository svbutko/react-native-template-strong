---
sidebar_position: 4
title: Roots
---

## Content

The root is where the application layout structure is defined. It is typically the first UI element a user interacts with. 

The root can be changed multiple times during the lifespan of the application. 

For example, if an app requires users to login, it's common to use a stack-based root and transition to either tabs- or SideMenu-based root if login is successful.

Roots are located in `src/navigation/roots.ts`.

Each root is being exported separately.

## Starting root

The starting root is `setInitialRoot` which shows `Splash`.

## Switching roots

As shown in `Splash` based on whether user opened application first time or second time it switches the root to `tabs` or `onboarding`:

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

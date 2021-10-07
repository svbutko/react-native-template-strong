---
sidebar_position: 2
title: Core idea
---

## Content

The core idea is to keep components as "stupid" as possible and connecting only pages to `redux`.

This approach makes components easier to test and reuse and not bounding them to redux logic.

Only in some rare cases it might be needed to connect to `redux` directly from components but other times it's better to provide props.

So we're basically connecting pages where we would like to use `redux`, like so:

```typescript
  Navigation.registerComponent(
    Pages.splash.name,
    () => gestureHandlerRootHOC(reduxProvider(Splash)),
    () => Splash,
  );
```

And on the page we will be executing our logic with `redux` what we need and getting data from it using `useAppSelector`.

And passing props down the tree if needed.

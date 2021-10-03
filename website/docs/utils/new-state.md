---
sidebar_position: 1
title: newState
---
Used primarily for merging redux state objects.

First parameter is your current or initial state, and second is your changes to this state.

Result will be new merged object.

Example usage from `systemSlice.ts`:

```typescript
function rehydrate(state: SystemState, rehydrateParams: RehydrateAppAction) {
  return newState(rehydrateParams.payload?.system || state, {isOnboardingVisited: rehydrateParams.payload != null});
}

function onboardingHandler(state: SystemState) {
  return newState(state, {isOnboardingVisited: true});
}
```

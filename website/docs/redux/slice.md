---
sidebar_position: 5
title: Slice
---

## Content

`Slices` as well as `AsyncThunks` are stored together for better readability and remove need to have additional imports.

## Creation

`Slices` are created the same way as described in documentation.

E.g. `systemSlice.ts`:

```typescript
export const {reducer: SystemReducer} = createSlice({
  name: "system",
  initialState: SystemInitialState,
  reducers: {
    setOnboarding: onboardingHandler,
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, rehydrate);
  },
});
```

In `extraReducers` don't forget to add the `REHYDRATE` case to set properly store after rehydration:

```typescript
function rehydrate(state: SystemState, rehydrateParams: RehydrateAppAction) {
  return newState(rehydrateParams.payload?.system || state, {isOnboardingVisited: rehydrateParams.payload != null});
}
```

## Adding reducer to RootReducer
To see and use our reducer, first it has to be added into `RootReducer`, which is constructed using `combineReducers`
and can be found in `src/core/store/rootReducer.ts`.

E.g. of adding `SystemReducer` into `RootReducer`:

```typescript
export const rootReducer = combineReducers({
  system: SystemReducer,
});
```

Parameter should be the same as `name` which was used in `createSlice`

## Case handlers

Case handlers as you could see in example of the `rehydrate` case should be handled as a separate function for better readability.

## Return newState

Even though `Immer` is used under the hood of the toolkit, it's still better to return [newState](../utils/new-state.md)
rather than change properties directly without returning anything.

```typescript
function rehydrate(state: SystemState, rehydrateParams: RehydrateAppAction) {
  return newState(rehydrateParams.payload?.system || state, {isOnboardingVisited: rehydrateParams.payload != null});
}
```



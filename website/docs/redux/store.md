---
sidebar_position: 3
title: Store
---

## Content

The store is defined together with `redux-persist` (read next about it) as `reducer` and disables `serializableCheck` of middlewares:

```typescript
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
```

## Middlewares

This template utilizes middlewares what come together with the toolkit with addition of `redux-persist` to have data stored for offline usage.

### Redux-persist

[Check it out](https://github.com/rt2zz/redux-persist) how it works.

It's defined in `src/core/store.ts` near the store:

```typescript
const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
  timeout: 1000,
};
```

It uses `AsyncStorage` as storage, if you don't like it you can change it to your own likings.

It creates `persistor`:

```typescript
export const persistor = persistStore(store);
```

Which is being used in `PersistGate` of `reduxProvider` wrapper:

```typescript jsx
export const reduxProvider = (Component: any) => (props: any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
};
```

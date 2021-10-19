import React from "react";
import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {PersistConfig, persistReducer, persistStore} from "redux-persist";
import {rootReducer, RootState} from "./rootReducer";
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage: AsyncStorage,
  version: 1,
  timeout: 1000,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const reduxProvider = (Component: any) => (props: any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
};

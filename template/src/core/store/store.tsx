import React from "react";
import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {PersistConfig, persistReducer, persistStore} from "redux-persist";
import {rootReducer, RootState} from "./rootReducer";
import {isIos} from "../theme";
import AsyncStorage from "@react-native-community/async-storage";
import FilesystemStorage from "redux-persist-filesystem-storage";
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage: isIos ? AsyncStorage : FilesystemStorage,
  version: 1,
  timeout: 1000,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
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

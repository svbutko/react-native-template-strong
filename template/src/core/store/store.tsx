import React from 'react';
import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer, persistStore, Storage} from 'redux-persist';
import {rootReducer, RootState} from './rootReducer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const reduxStorage: Storage = {
    setItem: async (key, value) => {
        storage.set(key, value);

        return Promise.resolve(true);
    },
    getItem: async key => {
        const value = storage.getString(key);

        return Promise.resolve(value);
    },
    removeItem: async key => {
        storage.delete(key);

        return Promise.resolve();
    },
};

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: reduxStorage,
  version: 1,
  timeout: 1000,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const reduxProvider = (Component: any) => (props: any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...props} />
      </PersistGate>
    </Provider>
  );
};

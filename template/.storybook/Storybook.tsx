import {view} from './storybook.requires';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const StorybookUIRoot = view.getStorybookUI({
    storage: {
        setItem: (key, value) => {
            storage.set(key, value);

            return Promise.resolve();
        },
        getItem: key => {
            const value = storage.getString(key) || '';

            return Promise.resolve(value);
        },
    },
});

export default StorybookUIRoot;

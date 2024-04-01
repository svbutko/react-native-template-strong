const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const {generate} = require('@storybook/react-native/scripts/generate');

generate({
    // update ./.storybook to your storybook folder
    configPath: path.resolve(__dirname, './.storybook'),
});

const defaultConfig = getDefaultConfig(__dirname);

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        unstable_allowRequireContext: true,
    },
    resolver: {
        sourceExts: [...defaultConfig.resolver.sourceExts, 'mjs'],
    },
};

module.exports = mergeConfig(defaultConfig, config);

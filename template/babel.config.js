module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: ["react-native-reanimated/plugin"],
  env: {
    test: {
      plugins: ["react-native-config-node/transform"],
    },
    production: {
      plugins: ["transform-remove-console"],
    },
  },
};

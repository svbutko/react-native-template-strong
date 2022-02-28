const rootImportOpts = {
  root: __dirname,
  rootPathPrefix: '~/',
  rootPathSuffix: './src/',
  paths: [
    {
      "rootPathPrefix": "~/",
      "rootPathSuffix": "./src"
    },
  ]
};

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [["babel-plugin-root-import", rootImportOpts]],
  env: {
    test: {
      plugins: ["react-native-config-node/transform"],
    },
    production: {
      plugins: ["transform-remove-console"],
    },
  },
};

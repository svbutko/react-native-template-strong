module.exports = {
    parser: require.resolve("@typescript-eslint/parser"),
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: "module",
        jsx: true,
        project: "tsconfig.json",
        ecmaVersion: 6,
        jsxPragma: "React",
        createDefaultProgram: true,
    },
    ignorePatterns: [],
    extends: [
        "react-strong",
    ],
    overrides: [
        {
            excludedFiles: "*/infrastructure/modules/*",
            files: "BaseRequest.ts",
            rules: {
                "react-hooks/rules-of-hooks": "off",
            },
        },
    ],
    settings: {
        "import/resolver": {
            "babel-plugin-root-import": {
                "rootPathPrefix": "~",
                "rootPathSuffix": "src"
            }
        },
        "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    },
};

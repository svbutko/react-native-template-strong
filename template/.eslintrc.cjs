/* eslint-env node */
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        jsx: true,
        jsxPragma: 'React',
        project: true,
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: [],
    extends: [
        'react-strong',
    ],
    root: true
};

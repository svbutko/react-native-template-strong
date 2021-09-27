---
title: Troubleshooting
---

# Troubleshooting

## ESLint: Error: Cannot read config file: .../.eslintrc.js
Try to update `ESLint` and `NPM` versions

## npm ERR! command failed npm ERR! command sh -c husky install
[Husky](https://github.com/typicode/husky) tries to initialize itself using `prepare` script from `package.json`
and to do so it needs to have a git repository, check how to work with Husky or remove `prepare` script if you're not going to use it
(not recommended)

## nvm is not compatible with the "PREFIX" variable: currently set to "/usr/local"
If you have `NVM` installed then there's a minor conflict which can be solved next way:
`nvm unalias default`

Can't find an answer to your issue? Feel free to [create an issue](https://github.com/svbutko/react-native-template-strong/issues/new/choose)

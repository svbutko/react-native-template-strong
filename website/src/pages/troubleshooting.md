---
title: Troubleshooting
---

# Troubleshooting

## Error: Command failed: yarn install
The project uses `npm` as package manager, and you're trying to use `Yarn`, 
It is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files.
Simply run `npm install` and use `npm` version >= 6.14.13.

## ESLint: Error: Cannot read config file: .../.eslintrc.js
Try to update `ESLint` and `npm` versions

## npm ERR! command failed npm ERR! command sh -c husky install
[Husky](https://github.com/typicode/husky) tries to initialize itself using `prepare` script from `package.json`
and to do so it needs to have a git repository, check how to work with Husky or remove `prepare` script if you're not going to use it
(not recommended)

## nvm is not compatible with the "PREFIX" variable: currently set to "/usr/local"
If you have `NVM` installed then there's a minor conflict which can be solved next way:
`nvm unalias default`

## Android Gradle plugin requires Java 11 to run. You are currently using Java 1.8
Update your JDK version, run following command in terminal

On macOS:
`brew install --cask adoptopenjdk/openjdk/adoptopenjdk11`

On Windows:
`choco install -y nodejs.install openjdk11`

## Can't find your issue?
Can't find an answer to your issue? Feel free to [create an issue](https://github.com/svbutko/react-native-template-strong/issues/new/choose)

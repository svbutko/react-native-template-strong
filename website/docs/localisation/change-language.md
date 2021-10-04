---
sidebar_position: 3
title: Change language
---

There are two ways you can change language of your app.

## Recommended way

If you correctly added languages for both Android and iOS, there will be an option in app's system settings to switch the language.

Describe the process of changing language to user and create a button which will lead him to app's settings.

Use `openSettings` method of [Linking](https://reactnative.dev/docs/linking#opensettings) to open settings.

There will be `PREFERRED LANGUAGE`, user can tap on it and switch to another available language.

## Not recommended way

You can change the language in app, using `setLanguage` function from `localization.ts`.

You can list available languages for and user to select and when selected, call `setLanguage` with selected language.

But with this way you also have to store the saved value in `redux` store because for system your app still uses the previously selected language,
and also apply it on app start every time.

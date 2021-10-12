---
sidebar_position: 2
title: Add language
---

## Description

To add a new language you have to do some changes in native iOS and Android code in order to show available languages in stores and in application's settings.

And it goes without saying you have to add language in `localization` itself and add translation for each string already defined in other languages.

There also should be added imports of translations for `intl` and `dayjs` to show correct strings and formats.

As an example, I will add Russian language.

## Add language in localization

In `localization.ts` you can see `Languages` enum.

Add your language (in our example `ru`) there based on its locale identifier.

```typescript
export enum Languages {
    en = "en",
    ru = "ru",
}
```

Then you have to open every single translation file you have stored in `translations` folder and add `ru` with every single translation string.

For example, here's how `emptyLocalization` will look like:

```typescript
export const emptyLocalization = {
  en: {
    noData: "No data",
    checkThisPageLater: "Check this page later",
  },
  ru: {
    noData: "Нет данных",
    checkThisPageLater: "Проверьте эту страницу позже",
  },
};
```

If you miss a string in some langauge, it will be seen as error in place where you are using this string.

## Add imports for dayjs

Open `/src/common/localization/dateFormatter.ts` and the top of this file you will see already an import of English language:

```typescript
// eslint-disable-next-line import/no-unassigned-import
import "dayjs/locale/en";
```

It has ESLint disable rule because unassigned imports aren't welcome.

Add your language import here and add the disable rule comment too:

```typescript
// eslint-disable-next-line import/no-unassigned-import
import "dayjs/locale/en";
// eslint-disable-next-line import/no-unassigned-import
import "dayjs/locale/ru";
```

## Add imports for intl

Open `/src/common/localization/intlFormatter.ts` and the top of this file you will see already an import of English language:

```typescript
// eslint-disable-next-line import/no-unassigned-import
import "intl/locale-data/jsonp/en";
```

Add your language the same way you did with `dayjs`:

```typescript
// eslint-disable-next-line import/no-unassigned-import
import "intl/locale-data/jsonp/en";
// eslint-disable-next-line import/no-unassigned-import
import "intl/locale-data/jsonp/ru";
```

## Add language in iOS

Open `.xcworkspace` file in XCode.

We will be adding stub files without actual translations so that App Store and the application settings would see that the app has support for languages.

To add a language follow this [guide](https://developer.apple.com/documentation/xcode/adding-support-for-languages-and-regions).

When you added a language just add a comment there to mention that actual localization is stored within your TypeScript files.

More about localization for App Store and other things you can find [here](https://developer.apple.com/localization/).

## Add language in Android

Open `Android` folder in Android Studio.

And follow this [guide](https://developer.android.com/training/basics/supporting-devices/languages).

Just add `.xml` strings.


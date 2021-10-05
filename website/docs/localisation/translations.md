---
sidebar_position: 1
title: Translations
---

Localisation is made possible by [react-native-localization](https://github.com/stefalda/ReactNativeLocalization).

## Content

Localization file are located at `/src/common/localization/localization.ts`.

It has translation methods and the constant object which holds all the translations:

```typescript
export const localization = {
  common: new LocalizedStrings(commonLocalization),
  errors: new LocalizedStrings(errorsLocalization),
  empty: new LocalizedStrings(emptyLocalization),
  pages: new LocalizedStrings(pagesLocalization),
  onboarding: new LocalizedStrings(onboardingLocalization),
};
```

Translations itself are located in `/src/common/localization/translations`.

Each translation file is represented by simple constant object which holds languages as properties which hold translations strings.

Common localization:

```typescript
export const commonLocalization = {
  en: {
    search: "Search",
    selectPhoto: "Select a photo",
    takePhoto: "Take a photo",
    chooseFromLibrary: "Choose from library",
    cancel: "Cancel",
    reject: "Reject",
    delete: "Delete",
    back: "Back",
    next: "Next",
    done: "Done",
    ok: "Ok",
    continue: "Continue",
    save: "Save",
    loading: "Loading",
    photo: "Photo",
    yes: "Yes",
    no: "No",
    areYouSure: "Are you sure?",
    warning: "Warning",
    success: "Success",
    select: "Select",
    dataSuccessfullyUpdated: "Data has been successfully updated",
    settings: "Settings",
  },
};
```

It can be string or function.

Function example:

```typescript
    stops: (stopsCount: number) => {
      return stopsCount + (stopsCount > 1 ? " stops" : " stop");
    },
    km: (distance: string | number) => {
      return distance + " km";
    },
```

## Usage

Import the localization constant and use needed translation string:

```typescript jsx
<Text style={CommonStyles.normalText} numberOfLines={1}>
    {localization.common.loading}
</Text>
```

## Translations structure

The structure is pretty simple:
- `commonLocalization.ts` - contains common strings like yes, no, loading etc.
- `emptyLocalization.ts` - contains strings for empty cases like No data, nothing was found etc.
- `errorsLocalization.ts` - contains error related strings
- `pagesLocalization.ts` - contains pages, tabs, modals, overlays titles

Then there are pages specific localization strings:

- `onboardingLocalization.ts` - contains strings needed for Onboarding

## Add translation

Based on what your specific need is (page, common, error etc.) selected the translation file or create one if it's for a page.

If you created a file, don't forget to add it into `localization` constant.

Then add a translation string to every language that you have.

## Default language

By default, there's only English language present in the template.

The first language which goes in translation files is going to be the default one.


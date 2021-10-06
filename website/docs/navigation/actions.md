---
sidebar_position: 7
title: Actions
---

## Content

There are a couple basic actions which were added in addition to what React Native Navigation offers.

These actions are located in `/src/navigation/helpers/navigationActions/ts`.

- `navigateToPage` - simple navigation to page using `Pages`
- `navigateWithoutTabs` - if you want to navigate to page without showing tabs.

Both of these actions require `page`, `componentId`.

Optionally you can provide your own `passProps` and `options`.

## Usage

Simple case:

```typescript jsx
  const onFaqPress = useCallback(() => {
    navigateWithoutTabs(Pages.faq, componentId);
  }, [componentId]);
```

With `passProps` and `options`:

```typescript jsx
  const onSuccess = useCallback(
    (confirmation: FirebaseAuthTypes.ConfirmationResult) => {
      navigateWithoutTabs<ICodeConfirmationProps>(
        Pages.confirmation,
        componentId,
        {
          phone: phone,
          formattedPhone: formattedPhone,
          confirmation: confirmation,
        },
        {
          topBar: {
            title: {
              text: localization.pages.signIn,
            },
          },
        },
      );
    },
    [phone, formattedPhone, componentId],
  );
```

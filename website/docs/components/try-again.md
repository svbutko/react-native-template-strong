---
sidebar_position: 9
title: TryAgain
---

## Content

Simple try again screen-like message with the try again button. Used primarily in `FlatListWrapper` and `SectionListWrapper`.

## Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| onPress           | `() => void`         | False           | Undefined              | On try again press callback
| errorText        | `string`         | False          | `localization.errors.unknownErrorHasOccurred`   | Error text

## Usage example

```typescript jsx
  <TryAgain onPress={tryAgain} errorText={error || localization.errors.listErrorTitle} />
```

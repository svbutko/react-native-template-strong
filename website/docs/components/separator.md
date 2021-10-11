---
sidebar_position: 3
title: Separator
---

## Content

Simple separator component, primarily used with `FlatListWrapper` and `SectionListWrapper`.

## Params

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| isFull           | `boolean`         | False           | `true`              | Should it take whole width or have horizontal margins

## Usage example

```typescript jsx
FlatListWrapper.defaultProps = {
  ItemSeparatorComponent: Separator,
};
```

```typescript jsx
      <Separator />
```

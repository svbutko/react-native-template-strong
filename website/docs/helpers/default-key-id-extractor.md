---
sidebar_position: 3
title: defaultKeyIdExtractor
---

## Content

Used to provide string value of `id` from items as key for the `keyExtractor` property of `FlatList` or `SectionList`.

Used as default property in `FlatListWrapper` and `SectionListWrapper`:

```typescript jsx
FlatListWrapper.defaultProps = {
    keyExtractor: defaultKeyIdExtractor,
};

SectionListWrapper.defaultProps = {
    keyExtractor: defaultKeyIdExtractor,
};
```

## Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| item           | T extends {id: string or number}         | -           | -              | Item which has `id` and will be used as key

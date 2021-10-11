---
sidebar_position: 12
title: EmptyView
---

## Content

Empty view with title and description. Used mostly in conjunction with `FlatListWrapper` and `SectionListWrapper` as `ListEmptyComponent` (used as default property in both of them).

## Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| title           | `string`         | True           | -              | Title message
| description        | `string`         | True          | -             | Description message

## Usage example

```typescript jsx
return (
    <EmptyView title={"You have no items yet"} description={"All your items will be displayed here"} />
);
```

```typescript jsx
FlatListWrapper.defaultProps = {
  keyExtractor: defaultKeyIdExtractor,
  ListEmptyComponent: <EmptyView title={localization.empty.noData} description={localization.empty.checkThisPageLater} />,
  onEndReachedThreshold: 1,
};
```

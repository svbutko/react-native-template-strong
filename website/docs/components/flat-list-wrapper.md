---
sidebar_position: 4
title: FlatListWrapper
---
## Content

Wrapper around `FlatList` which operates based on provided `LoadState` and shows appropriate data.

## Params
Extends `FlatListProps` and additionally adds next properties

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| loadState           | `LoadState`         | True           | -              | Load state
| tryAgain        | `() => void`         | False          | Undefined             | Action callback which occurs when pressing on Try Again
| error        | `string or null`         | False          | `localization.errors.listErrorTitle`       | Error text which will be shown to user in case if `loadState == LoadState.error`

## Usage example

```typescript jsx
  return (
    <FlatListWrapper
        loadState={loadState}
        data={data}
        error={error}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyView title={localization.empty.orders} description={localization.empty.ordersDescription} />}
        tryAgain={tryAgain}
        onRefresh={pullToRefresh}
        onEndReached={loadMore}
        keyExtractor={orderKeyExtractor}
    />
);
```

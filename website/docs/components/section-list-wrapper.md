---
sidebar_position: 5
title: SectionListWrapper
---
## Content

Wrapper around `SectionList` which operates based on provided `LoadState` and shows appropriate data.

## Params
Extends `SectionListProps` and additionally adds next properties

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| loadState           | `LoadState`         | True           | -              | Load state
| tryAgain        | `() => void`         | False          | Undefined             | Action callback which occurs when pressing on Try Again
| error        | `string or null`         | False          | `localization.errors.listErrorTitle`       | Error text which will be shown to user in case if `loadState == LoadState.error`

## Usage example

```typescript jsx
  return (
    <SectionListWrapper
        stickySectionHeadersEnabled={true}
        sections={sections}
        ListHeaderComponent={<BalanceListHeader balance={balance} />}
        loadState={loadState}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        error={error}
        tryAgain={tryAgain}
        onRefresh={pullToRefresh}
        onEndReached={loadMore}
        ListEmptyComponent={<EmptyView title={localization.empty.payment} description={localization.empty.paymentDescription} />}
    />
);
```

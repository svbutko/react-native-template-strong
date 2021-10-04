---
sidebar_position: 1
title: useFlatListActions
---

## Content

Creates default `loadMore`, `tryAgain` and `pullToRefresh` request dispatches based on provided `LoadState`.

Works in together with `FlatlistWrapper` and `SectionListWrapper`.

## Usage

```typescript jsx
  const {data, error, loadState} = useAppSelector(({offers}) => offers);
  const {loadMore, tryAgain, pullToRefresh} = useFlatListActions(getCompanyOffers, loadState);

  return (
    <FlatListWrapper
      data={data}
      error={error}
      renderItem={renderItem}
      loadState={loadState}
      tryAgain={tryAgain}
      onRefresh={pullToRefresh}
      onEndReached={loadMore}
    />
  );
```

Where `getCompanyOffers` is `AsyncThunk`.


---
sidebar_position: 2
title: listHandlers
---

## commonListFulfilledHandler

Used primarily in redux slices' fulfilled functions to merge or replace the current list with new data based on `LoadState`.

First parameter is `LoadState` which comes as meta argument.

Second parameter is array of new items which comes as payload of API call or your changes.

Third parameter is your current state data array.

As a result, it will produce merged or new array of data, will set `error` to `null` and will update `LoadState` based on the payload array size.


Example of usage:

```typescript
function ordersFulfilledHandler(state: OrdersState, payloadAction: OrdersGetPayloadAction) {
    const {data, error, loadState} = commonListFulfilledHandler(payloadAction.meta.arg, payloadAction.payload.orders, state.data);

    return newState(state, {loadState, error, data});
}
```

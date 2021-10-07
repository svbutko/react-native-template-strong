---
sidebar_position: 6
title: AsyncThunk
---

## Content
`AsyncThunks` as well as `Slices` are stored together for better readability and remove need to have additional imports.

To demonstrate how to create and use it, I will be using some `Orders` state and `ordersApi` as example.

## Creation

Creation of `AsyncThunk` is the same as in original documentation, with your API call do the following:

```typescript
export const takeOrder = createAsyncThunk("orders/take", async (id: string) => {
  return await ordersApi.takeOrder(id);
});
```

Where `"orders/take""` is name of your slice and name of your method.

## Slice handlers

You can handle the result inline or as I like with functions, all together it looks like this:

```typescript
export const takeOrder = createAsyncThunk("order/take", async (id: string) => {
  return await ordersApi.takeOrder(id);
});

function rehydrate(state: OrderState, rehydrateParams: RehydrateAppAction) {
  return newState(rehydrateParams.payload?.orders || state, {});
}

function orderActionPendingHandler(state: OrderState, params: ReturnType<typeof takeOrder.pending>) {
  return newState(state, {isLoading: true, error: null});
}

function takeOrderFulfilledHandler(state: OrderState, params: ReturnType<typeof takeOrder.fulfilled>) {
  return newState(state, {isLoading: false, error: null, order: params.payload});
}

function orderActionRejectedHandler(state: OrderState, params: ReturnType<typeof takeOrder.rejected>) {
  return newState(state, {isLoading: false, error: params.error.message});
}

export const {reducer: OrderReducer} = createSlice({
  name: "order",
  initialState: OrdersInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(REHYDRATE, rehydrate)
      .addCase(takeOrder.pending, orderActionPendingHandler)
      .addCase(takeOrder.fulfilled, takeOrderFulfilledHandler)
      .addCase(takeOrder.rejected, orderActionRejectedHandler);
  },
});
```

## Promise result handlers

To handle promise results in pages/components (i.e. show error toast, show error in input, show success toast etc.)
we can handle it the following way:

```typescript
  const onTakeOrderPress = useCallback(() => {
    handlePromiseResult(dispatch(takeOrder(orderId)), localization.common.orderHasBeenSuccessfullyTaken);
  }, [dispatch, orderId]);
```

To check more about `handlePromiseResult` read more [here](../validations.md).

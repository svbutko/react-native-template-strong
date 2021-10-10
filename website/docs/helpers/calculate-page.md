---
sidebar_position: 1
title: calculatePage
---

## Content

Used for next page calculation.

### calculatePage

Used to calculate next page which will be requested from remote server by using calculation based on current page size and current page.

### Params
| Name            | Type           | Required       | Default value  | Description                   
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| count           | Number         | True           | -              | Current total count of items
| pageSize        | Number         | False          | 20             | Size of items in a page        

### Usage example

```typescript
export async function getOrders(listLength: number, loadState: LoadState) {
    const page = loadState == LoadState.pullToRefresh || loadState == LoadState.refreshing ? 1 : calculatePage(listLength);

    return await ordersApi.getOrders({
        page: page,
        sorting: defaultOrdersSorting,
    });
}
```


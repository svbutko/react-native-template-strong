---
sidebar_position: 17
title: API
---

## Content
This template was primarily made and tested with usage of `fetch` to communicate with API.

But it's up to you to choose what to use.

The API folder is located in `src/core/api`.

It contains `dto` folder for your API interfaces.

And `requests` where your requests will be stored.

There is also a set of predefined server headers which can be used to fetch data:
- `defaultHeaders` - connection `keep-alive` and content type `application/json`

Additionally, there is `handleFetchJsonResponse` a fetch result handler to properly handle errors.

## Example

```typescript
export const ItemApi = {
    async getData(): Promise<IResponseData> {
        return await fetch(
            `${Config.API_URL}/api/getData`,
            {
                method: 'GET',
                headers: defaultHeaders,
            },
        ).then(handleFetchJsonResponse);
    },
};
```

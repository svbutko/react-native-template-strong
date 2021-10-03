---
sidebar_position: 3
title: URL openers
---

## PhoneUrl

Opens the system phone application with provided phone number.

If the phone won't be provided it will return null.

Example usage:

```typescript jsx
await new PhoneUrl("37322233444").open();
```

## MapUrl

Opens a map application or browser with latitude, longitude and address.

Example usage:

```typescript jsx
await new MapUrl(60.59735, 27.63646, "some address").open();
```

## EmailUrl

Opens email application with a new email to provided address.

Example usage:

```typescript jsx
await new EmailUrl("test@mail.com").open();
```

## HttpUrl

Opens browser or application to handle provided web address.

If web address doesn't start with `http` then `https://` will be pasted before the address.

Example usage:

```typescript jsx
await new HttpUrl("google.com").open();
```

## Create your own handlers

All the previously described openers extend abstract `BaseUrlOpener` which uses [Linking.openURL](https://reactnative.dev/docs/linking) under the hood when trying to open your params.

You can create your own class extend it from `BaseUrlOpener`, set your own `constructor` and `generateUrl`, like so:

```typescript
export class MyParamUrl extends BaseUrlOpener {
  //Define your parameters
  constructor(private myParam: string | null) {
    super();
  }

  protected generateUrl(): string | null {
    if (this.myParam == null) {
      return null;
    } else {
      //Do some action here
      return "do something";
    }
  }
}
```


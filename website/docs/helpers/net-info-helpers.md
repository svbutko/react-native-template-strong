---
sidebar_position: 11
title: netInfoHelpers
---

## Content

Checks Internet connection. Made possible by [react-native-netinfo](https://github.com/react-native-netinfo/react-native-netinfo).

### startListeningToNetInfo

Starts listening to net-info changes, and if `isInternetReachable` is equal to `false` then shows `alert` that states that there are no Internet connection and gives user a choice to open settings.

Won't work if you provide `IGNORE_NET_INFO` as `true` in your environment variables.

Shows only once.

Don't forget to unsubscribe.

#### Usage example

```typescript jsx
export function setInitialRoot() {
  Navigation.setRoot({
    root: {
      component: {
        name: Pages.splash.name,
        id: Pages.splash.id,
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  }).then(startListeningToNetInfo);
}
```

### unsubscribeFromNetInfo

Unsubscribe from listening to net-info changes.

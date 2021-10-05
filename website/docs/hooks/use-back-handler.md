---
sidebar_position: 4
title: useBackHandler
---

## Content

Creates a simple `hardwareBackPress` listener with provided `handler`.

## Usage

```typescript jsx
  const backHandler = useCallback(() => {
    //Do something here
    return true;
  }, []);

  useBackHandler(backHandler);
```

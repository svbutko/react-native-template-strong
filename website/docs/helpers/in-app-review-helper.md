---
sidebar_position: 9
title: inAppReviewHelper
---

## Content

Shows in-app review provided by [react-native-in-app-review](https://github.com/MinaSamir11/react-native-in-app-review).

### showInAppReview

The Google Play In-App Review API, App store rating API lets you prompt users to submit Play Store or App store ratings and reviews without the inconvenience of leaving your app or game. 

#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| successAction           | `() => void`         | False           | Undefined              | Success action callback
| failAction           | `(error: Error) => void`         | False           | Undefined              | Error callback with error
| onReviewNotAvailable           | `() => void`         | False           | Undefined              | Callback when review is not available on this device

#### Usage example

```typescript jsx
import {useEffect} from "react";

useEffect(() => {
    showInAppReview();
}, []);
```

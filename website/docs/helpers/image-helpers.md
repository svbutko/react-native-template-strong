---
sidebar_position: 5
title: imageHelpers
---

## Content

Used to convert and apply different changes to images

### convertCropperImageToBase64

Converts `CropperImage` from `react-native-image-crop-picker` to base64 string using `mime` and `data`.
#### Params
| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| image           | `CropperImage`         | True           | -              | Picked image as result from `react-native-image-crop-picker`

#### Usage example

```typescript jsx
  const onImagePicked = useCallback((nextImage) => {
    convertCropperImageToBase64(nextImage);
}, []);
```

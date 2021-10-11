---
sidebar_position: 13
title: PhotoTakingButton
---

## Content

Button which is used as primary component of `ImageCropPickerButton`

## Params

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| onPress   | `() => void`         | True           | -              | On press callback
| backgroundImage        | `ImageURISource or null or CropperImage`         | False          | Undefined       | Selected image which will be shown and used
| icon        | `ImageURISource`         | False          | `ImageResources.camera`       | Icon which will be shown when image is not present and over the selected image
| style        | `ViewStyle`         | False          | Undefined       | Style of button
| iconStyle        | `ImageStyle`         | False          | Undefined       | Style of icon
| imageStyle        | `ImageStyle`         | False          | Undefined       | Style of image
| disabled        | `boolean`         | False          | Undefined       | Is button disabled


## Usage example

```typescript jsx
    return (
      <PhotoTakingButton
        style={style}
        iconStyle={iconStyle}
        imageStyle={imageStyle}
        onPress={onPress}
        backgroundImage={image}
        icon={icon}
        disabled={disabled}
      />
    );
```

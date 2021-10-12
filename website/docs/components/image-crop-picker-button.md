---
sidebar_position: 14
title: ImageCropPickerButton
---
## Content

Image crop picker button which provides a dialog to user to photo selection or image taking or removing existing one and also showing the result to user.

If image is not selected it will show a button with icon.

Uses `PhotoTakingButton` as button component.

Uses [react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker) for image picking. 

## Params

| Name            | Type           | Required       | Default value  | Description
|:----------------|:---------------|:---------------|:---------------|:---------------------------    
| onImagePicked   | `(image: CropperImage) => void`         | True           | -              | On image picked callback
| onRemoveImage   | `() => void`         | True          | -             | On remove image callback
| onPickerError        | `(error: Error) => void`         | False          | Undefined       | Callback with error when something went wrong
| image        | `ImageURISource or null`         | False          | Undefined       | Selected image which will be shown and used
| icon        | `ImageURISource`         | False          | `ImageResources.camera`       | Icon which will be shown when image is not present and over the selected image
| style        | `ViewStyle`         | False          | Undefined       | Style of button
| iconStyle        | `ImageStyle`         | False          | Undefined       | Style of icon
| imageStyle        | `ImageStyle`         | False          | Undefined       | Style of image
| disabled        | `boolean`         | False          | Undefined       | Is button disabled


## Usage example

```typescript jsx
    const [photo, setPhoto] = useState<ImageURISource | null>(null);

    const onRemoveImage = useCallback(() => {
        setPhoto(null);
    }, [setPhoto]);

    const onImagePicked = useCallback(
        (nextImage) => {
            setPhoto({uri: nextImage.path});
        },
        [setPhoto],
    );

    return (
        <ImageCropPickerButton 
            image={photo} 
            onRemoveImage={onRemoveImage} 
            onImagePicked={onImagePicked} 
            onPickerError={console.error} 
        />
    );
```

import {Image as CropperImage} from "react-native-image-crop-picker";

export function convertCropperImageToBase64(image: CropperImage): string {
  return `data:${image.mime};base64,${image.data}`;
}

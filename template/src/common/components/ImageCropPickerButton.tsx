import React, {FC, memo, useCallback} from "react";
import ImagePicker, {Image as CropperImage, Options} from "react-native-image-crop-picker";
import {ImageStyle, ImageURISource, ViewStyle} from "react-native";
import {ImageResources} from "../ImageResources.g";
import {PhotoTakingButton} from "./PhotoTakingButton";
import {i18next} from "~/common/localization/localization";
import {showActionSheet} from "../helpers/dialogsHelpers";

interface IProps {
  onImagePicked: (image: CropperImage) => void;
  onRemoveImage: () => void;
  onPickerError?: (error: Error) => void;
  image?: ImageURISource | null;
  icon?: ImageURISource;
  style?: ViewStyle;
  iconStyle?: ImageStyle;
  imageStyle?: ImageStyle;
  disabled?: boolean;
}

export const ImageCropPickerButton: FC<IProps> = memo(
  ({onPickerError, onImagePicked, onRemoveImage, image, icon, style, iconStyle, imageStyle, disabled}) => {
    const openGallery = useCallback(() => {
      ImagePicker.openPicker(pickerOptions)
        .then((imageResult) => {
          onImagePicked(imageResult);
        })
        .catch((error) => {
          onPickerError && onPickerError(error);
        });
    }, [onImagePicked, onPickerError]);

    const openCamera = useCallback(() => {
      ImagePicker.openCamera(pickerOptions)
        .then((imageResult) => {
          onImagePicked(imageResult);
        })
        .catch((error) => {
          onPickerError && onPickerError(error);
        });
    }, [onImagePicked, onPickerError]);

    const onPress = useCallback(() => {
      const options = [i18next.t("common.cancel"), i18next.t("common.chooseFromLibrary"), i18next.t("common.takePhoto")];

      if (image != null) {
        options.push(i18next.t("common.delete"));
      }

      showActionSheet(
        {
          title: i18next.t("common.selectPhoto"),
          options: options,
          cancelButtonIndex: 0,
          destructiveButtonIndex: 3,
        },
        (optionIndex) => {
          if (optionIndex == 1) {
            openGallery();
          } else if (optionIndex == 2) {
            openCamera();
          } else if (optionIndex == 3) {
            onRemoveImage();
          }
        },
      );
    }, [openGallery, openCamera, image, onRemoveImage]);

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
  },
);

ImageCropPickerButton.defaultProps = {
  icon: ImageResources.camera,
};

const pickerOptions: Options = {
  height: 1000,
  width: 1000,
  cropping: true,
  compressImageQuality: 0.5,
  multiple: false,
  mediaType: "photo",
  includeBase64: true,
};

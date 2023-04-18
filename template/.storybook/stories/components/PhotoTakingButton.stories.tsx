import React, {FC, useCallback, useState} from 'react';
import {ImageURISource, ScrollView} from 'react-native';
import {ImageCropPickerButton} from '../../../src/common/components/ImageCropPickerButton';
import {CommonStyles} from '../../../src/core/theme/commonStyles';
import {Image as CropperImage} from 'react-native-image-crop-picker';

export const PhotoTakingButtonStories: FC = () => {
  const [photo, setPhoto] = useState<ImageURISource | null>(null);

  const onRemoveImage = useCallback(() => {
    setPhoto(null);
  }, [setPhoto]);

  const onImagePicked = useCallback(
    (nextImage: CropperImage) => {
      setPhoto({uri: nextImage.path});
    },
    [setPhoto],
  );

  return (
    <ScrollView
      style={CommonStyles.flexPlatformBackground}
      contentContainerStyle={CommonStyles.flexColumnCenterStretch}
    >
      <ImageCropPickerButton
        image={photo}
        onRemoveImage={onRemoveImage}
        onImagePicked={onImagePicked}
        onPickerError={console.error}
      />
    </ScrollView>
  );
};

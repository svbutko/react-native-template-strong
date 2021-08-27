import React, {FC, useCallback, useState} from "react";
import {ImageURISource, ScrollView} from "react-native";
import {CommonStyles} from "../../../src/core/theme";
import {ImageCropPickerButton} from "../../../src/common/components";

export const PhotoTakingButtonStories: FC = () => {
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
    <ScrollView style={CommonStyles.flexPlatformBackground} contentContainerStyle={CommonStyles.flexColumnCenterStretch}>
      <ImageCropPickerButton image={photo} onRemoveImage={onRemoveImage} onImagePicked={onImagePicked} onPickerError={console.error} />
    </ScrollView>
  );
};

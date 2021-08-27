import React, {FC, Fragment, memo} from "react";
import {Image, ImageBackground, ImageStyle, ImageURISource, StyleSheet, TouchableOpacity, ViewStyle} from "react-native";
import {Colors} from "../../core/theme";
import {ImageResources} from "../ImageResources.g";
import {Image as CropperImage} from "react-native-image-crop-picker";

interface IProps {
  onPress?: () => void;
  icon?: ImageURISource | CropperImage;
  backgroundImage?: ImageURISource | CropperImage | null;
  style?: ViewStyle;
  iconStyle?: ImageStyle;
  imageStyle?: ImageStyle;
  disabled?: boolean;
}

export const PhotoTakingButton: FC<IProps> = memo(({icon, onPress, backgroundImage, style, iconStyle, imageStyle, disabled}) => {
  return (
    <TouchableOpacity style={[styles.button, style] as ViewStyle} onPress={onPress} disabled={disabled}>
      <BackgroundComponent image={backgroundImage} style={imageStyle}>
        <Image style={[styles.icon, iconStyle]} source={icon!} />
      </BackgroundComponent>
    </TouchableOpacity>
  );
});

interface IBackgroundComponentProps {
  image?: ImageURISource | null;
  style?: ImageStyle;
}

const BackgroundComponent: FC<IBackgroundComponentProps> = memo(({image, children, style}) => {
  if (image != null) {
    return (
      <ImageBackground source={image} style={[styles.image, style]} imageStyle={[styles.image, style]}>
        {children}
      </ImageBackground>
    );
  } else {
    return <Fragment>{children}</Fragment>;
  }
});

PhotoTakingButton.defaultProps = {
  icon: ImageResources.camera,
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  } as ViewStyle,
  image: {
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    overflow: "hidden",
  } as ImageStyle,
  icon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
    tintColor: Colors.black,
    opacity: 0.8,
  } as ImageStyle,
});

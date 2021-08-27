import React, {useCallback, useEffect, useMemo} from "react";
import {Image, ImageStyle, ImageURISource, SafeAreaView, StyleSheet, Text, View, ViewStyle} from "react-native";
import {Colors, CommonStyles, windowWidth} from "../../core/theme";
import {ToastType} from "../../types";
import {Navigation, NavigationFunctionComponent} from "react-native-navigation";
import {useNavigationConstants} from "../../navigation/navigation";

export interface IToastNavProps {
  text: string;
  type: ToastType;
  icon: ImageURISource;
}

export const Toast: NavigationFunctionComponent<IToastNavProps> = ({componentId, text, icon, type}) => {
  const constants = useNavigationConstants();

  const containerStyle = useMemo(() => {
    return {top: constants ? constants.topBarHeight + constants.statusBarHeight + 16 : 0};
  }, [constants]);

  const styles = useMemo(() => {
    return getStylesByType(type);
  }, [type]);

  const closeToast = useCallback(() => {
    Navigation.dismissOverlay(componentId);
  }, [componentId]);

  useEffect(() => {
    const handler = setTimeout(closeToast, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [closeToast]);

  return (
    <SafeAreaView style={containerStyle}>
      <View style={styles.container} onTouchStart={closeToast}>
        <View style={styles.iconContainer}>
          <Image source={icon} defaultSource={icon} style={styles.icon} />
        </View>
        <Text style={styles.label} numberOfLines={3}>
          {text}
        </Text>
      </View>
    </SafeAreaView>
  );
};

function getStylesByType(type: ToastType): typeof infoStyles {
  switch (type) {
    case ToastType.info:
      return infoStyles;
    case ToastType.error:
      return errorStyles;
    case ToastType.success:
      return successStyles;
    default:
      throw new Error("Unknown toast type: " + type);
  }
}

const commonContainer: ViewStyle = {
  alignSelf: "center",
  width: windowWidth - 32,
  paddingVertical: 6,
  paddingHorizontal: 13,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  borderRadius: 4,
};

const commonIconContainer: ViewStyle = {
  width: 14,
  height: 14,
  borderRadius: 7,
  alignItems: "center",
  justifyContent: "center",
};

const commonStyles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-unused-styles
  label: StyleSheet.flatten([CommonStyles.normalText, {color: Colors.black, paddingHorizontal: 9}]),
  // eslint-disable-next-line react-native/no-unused-styles
  icon: {
    width: 8,
    height: 8,
    resizeMode: "contain",
    tintColor: Colors.white,
  } as ImageStyle,
});

const infoStyles = StyleSheet.create({
  ...commonStyles,
  // eslint-disable-next-line react-native/no-unused-styles
  container: StyleSheet.flatten([commonContainer, {backgroundColor: Colors.gray}]) as ViewStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  iconContainer: StyleSheet.flatten([commonIconContainer, {backgroundColor: Colors.gray}]) as ViewStyle,
});

const successStyles = StyleSheet.create({
  ...commonStyles,
  // eslint-disable-next-line react-native/no-unused-styles
  container: StyleSheet.flatten([commonContainer, {backgroundColor: Colors.green}]) as ViewStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  iconContainer: StyleSheet.flatten([commonIconContainer, {backgroundColor: Colors.green}]) as ViewStyle,
});

const errorStyles = StyleSheet.create({
  ...commonStyles,
  // eslint-disable-next-line react-native/no-unused-styles
  container: StyleSheet.flatten([commonContainer, {backgroundColor: Colors.red}]) as ViewStyle,
  // eslint-disable-next-line react-native/no-unused-styles
  iconContainer: StyleSheet.flatten([commonIconContainer, {backgroundColor: Colors.red}]) as ViewStyle,
});

Toast.options = {
  layout: {
    componentBackgroundColor: Colors.transparent,
  },
  overlay: {
    interceptTouchOutside: false,
  },
};

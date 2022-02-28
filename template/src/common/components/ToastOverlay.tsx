import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  ImageStyle,
  ImageURISource,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from "react-native";
import {Navigation, NavigationConstants, NavigationFunctionComponent} from "react-native-navigation";
import {useNavigationComponentDidAppear} from "react-native-navigation-hooks";
import {CommonSizes} from "~/core/theme/commonSizes";
import {Colors} from "~/core/theme/colors";
import {CommonStyles} from "~/core/theme/commonStyles";
import {isIos, minWindowDimension} from "~/core/theme/commonConsts";
import {Brand} from "~/infrastructure";

export interface IToastNavProps {
  text: string;
  textStyle?: TextStyle;
  icon?: ImageURISource;
  iconStyle?: ImageStyle;
  loading?: boolean;
  location?: "bottom" | "top";
}

export const ToastOverlay: NavigationFunctionComponent<IToastNavProps> = ({
                                                                            componentId,
                                                                            text,
                                                                            textStyle,
                                                                            icon,
                                                                            iconStyle,
                                                                            loading,
                                                                            location,
                                                                          }) => {
  const [constants, setConstants] = useState<NavigationConstants | undefined>(undefined);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const isTopLocation = useMemo(() => {
    return location == "top";
  }, [location]);

  useNavigationComponentDidAppear(
    async () => {
      const constantsResult = await Navigation.constants();
      setConstants(constantsResult);
    },
    {componentId},
  );

  const containerStyle = useMemo(() => {
    if (constants != null) {
      if (location == "top") {
        return {
          top: isIos ? constants.topBarHeight + constants.statusBarHeight + CommonSizes.spacing.medium : 0,
        } as ViewStyle;
      } else {
        return {
          bottom: constants.bottomTabsHeight + CommonSizes.spacing.medium,
          position: "absolute",
        } as ViewStyle;
      }
    } else {
      return null;
    }
  }, [constants, location]);

  const closeToast = useCallback(() => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      Navigation.dismissOverlay(componentId);
    });
  }, [animatedValue, componentId]);

  useEffect(() => {
    const containerExist = containerStyle != null;
    let handler: ReturnType<typeof setTimeout> | null = null;

    if (containerExist) {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start();

      handler = setTimeout(closeToast, 3100);
    }

    return () => {
      if (handler != null) {
        clearTimeout(handler);
      }
    };
  }, [closeToast, containerStyle, animatedValue]);

  const renderIconOrLoading = useMemo(() => {
    if (icon != null) {
      return <Image style={[styles.icon, iconStyle]} source={icon} defaultSource={icon}/>;
    } else if (loading) {
      return (
        <ActivityIndicator
          style={styles.loading}
          animating={true}
          color={Colors.black}
          size={"small"}
        />
      );
    } else {
      return null;
    }
  }, [loading, icon, iconStyle]);

  if (containerStyle != null) {
    return (
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          {
            opacity: animatedValue,
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: isTopLocation ? [-CommonSizes.spacing.medium, 0] : [CommonSizes.spacing.medium, 0],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        {renderIconOrLoading}
        <Brand.H4 style={[styles.text, textStyle]} numberOfLines={3}>
          {text}
        </Brand.H4>
      </Animated.View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.shadow,
    backgroundColor: Colors.blue,
    alignSelf: "center",
    width: minWindowDimension - CommonSizes.spacing.large,
    padding: CommonSizes.spacing.medium,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: CommonSizes.borderRadius.medium,
  } as ViewStyle,
  icon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
    marginRight: CommonSizes.spacing.extraSmall,
  } as ImageStyle,
  loading: {
    marginRight: CommonSizes.spacing.extraSmall,
  } as ViewStyle,
  text: {
    flex: 1,
  } as TextStyle,
});

ToastOverlay.defaultProps = {
  loading: false,
  location: isIos ? "top" : "bottom",
};

ToastOverlay.options = {
  layout: {
    componentBackgroundColor: Colors.transparent,
  },
  overlay: {
    interceptTouchOutside: false,
  },
};

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  ImageStyle,
  ImageURISource,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  Navigation,
  NavigationConstants,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import {useNavigationComponentDidAppear} from 'react-native-navigation-hooks';
import {CommonSizes} from '../../core/theme/commonSizes';
import {
  Colors,
  PlatformColorsAndroid,
  PlatformColorsIOS,
} from '../../core/theme/colors';
import {CommonStyles} from '../../core/theme/commonStyles';
import {isIos, minWindowDimension} from '../../core/theme/commonConsts';
import {platformNativeColor} from '../helpers/colorHelpers';

export interface IToastNavProps {
  text: string;
  textStyle?: TextStyle;
  icon?: ImageURISource;
  iconStyle?: ImageStyle;
  loading?: boolean;
  location?: 'bottom' | 'top';
}

export const ToastOverlay: NavigationFunctionComponent<IToastNavProps> = ({
  componentId,
  text,
  textStyle,
  icon,
  iconStyle,
  loading = false,
  location = defaultLocation,
}) => {
  const [constants, setConstants] = useState<NavigationConstants | undefined>(undefined,);
  const animatedValue = useRef(new Animated.Value(0));

  const isTopLocation = useMemo(() => {
    return location == 'top';
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
      if (location == 'top') {
        return {
          top: isIos
            ? constants.topBarHeight +
              constants.statusBarHeight +
              CommonSizes.spacing.medium
            : 0,
        } as ViewStyle;
      } else {
        return {
          bottom: constants.bottomTabsHeight + CommonSizes.spacing.medium,
          position: 'absolute',
        } as ViewStyle;
      }
    } else {
      return null;
    }
  }, [constants, location]);

  const closeToast = useCallback(() => {
    animatedValue.current.stopAnimation(() => {
      Animated.timing(animatedValue.current, animatedClosingTimingConfig).start(() => {
        Navigation.dismissOverlay(componentId);
      });
    });
  }, [componentId]);

  useEffect(() => {
    const containerExist = containerStyle != null;
    let handler: ReturnType<typeof setTimeout> | null = null;

    if (containerExist) {
      animatedValue.current.stopAnimation(() => {
        Animated.timing(animatedValue.current, animatedOpeningTimingConfig).start();
      });

      handler = setTimeout(closeToast, 3100);
    }

    return () => {
      if (handler != null) {
        clearTimeout(handler);
      }
    };
  }, [closeToast, containerStyle]);

  const renderIconOrLoading = useMemo(() => {
    if (icon != null) {
      return (
        <Image
          style={[styles.icon, iconStyle]}
          source={icon}
          defaultSource={icon}
        />
      );
    } else if (loading) {
      return (
        <ActivityIndicator
          style={styles.loading}
          animating={true}
          color={activityIndicatorColor}
          size={'small'}
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
            opacity: animatedValue.current,
            transform: [
              {
                translateY: animatedValue.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: isTopLocation
                    ? [-CommonSizes.spacing.medium, 0]
                    : [CommonSizes.spacing.medium, 0],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        {renderIconOrLoading}
        <Text style={[styles.text, textStyle]} numberOfLines={3}>
          {text}
        </Text>
      </Animated.View>
    );
  } else {
    return null;
  }
};

const defaultLocation = isIos ? 'top' : 'bottom';

const activityIndicatorColor = platformNativeColor(
    PlatformColorsIOS.systemBackground,
    PlatformColorsAndroid.primary,
);

const animatedOpeningTimingConfig = {
  toValue: 1,
  duration: 100,
  useNativeDriver: true,
};

const animatedClosingTimingConfig = {
  ...animatedOpeningTimingConfig,
  toValue: 0,
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.shadow,
    backgroundColor: platformNativeColor(
      PlatformColorsIOS.label,
      PlatformColorsAndroid.background,
    ),
    alignSelf: 'center',
    width: minWindowDimension - CommonSizes.spacing.large,
    padding: CommonSizes.spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: CommonSizes.borderRadius.medium,
  } as ViewStyle,
  icon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    marginEnd: CommonSizes.spacing.extraSmall,
  } as ImageStyle,
  loading: {
    marginEnd: CommonSizes.spacing.extraSmall,
  } as ViewStyle,
  text: {
    ...CommonStyles.normalText,
    color: platformNativeColor(
      PlatformColorsIOS.systemBackground,
      PlatformColorsAndroid.primaryText,
    ),
    flex: 1,
  } as TextStyle,
});

ToastOverlay.options = {
  layout: {
    componentBackgroundColor: Colors.transparent,
  },
  overlay: {
    interceptTouchOutside: false,
  },
};

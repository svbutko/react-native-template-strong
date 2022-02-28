import {Navigation, NavigationComponentProps, NavigationFunctionComponent, Options} from "react-native-navigation";
import React, {useEffect} from "react";
import {gestureHandlerRootHOC} from "react-native-gesture-handler";
import {INavigationPage} from "~/types";
import {getStackOptions, StackOptionsType} from "./getStackOptions";
import {reduxProvider} from "~/core/store/store";
import {analytics} from "~/services";
import {TFuncKeyApp} from "~/common/localization/localization";

export interface AppNavigationComponentProps extends NavigationComponentProps {
  updateProps: (props: object, callback?: () => void) => void;
}

interface INavigationHOCProps<P extends NavigationComponentProps> {
  Component: AppNavigationComponent<P>;
  page: INavigationPage;
  useRedux?: boolean;
  titleKey?: TFuncKeyApp;
}

export type NavigationHOCProps<P extends AppNavigationComponentProps> = INavigationHOCProps<P>;

export interface AppNavigationComponent<Props = {}> extends React.FunctionComponent<Props & NavigationComponentProps> {
  optionsMigrator?: (customOptions: Options) => Options;
  options?: ((props: Props & NavigationComponentProps) => Options) | Options;
}

export function NavigationHOC<P extends AppNavigationComponentProps>(
  {Component, titleKey, page, useRedux}: INavigationHOCProps<P>,
): NavigationFunctionComponent<P> {
  let screenOptions: StackOptionsType | undefined;
  if (titleKey) {
    screenOptions = getStackOptions(titleKey, page, Component.optionsMigrator);
    Component.options = screenOptions.getOptions();
  }

  const WrappingComponent = useRedux ? Component : gestureHandlerRootHOC(reduxProvider(Component));

  const updatePropsLocal = (props: object, callback?: () => void) => Navigation.updateProps(page.id, props, callback);

  function Wrapper(props: P) {
    useEffect(() => {
      let focused = 0;
      const listener = {
        componentDidAppear: () => {
          focused = Date.now();
          analytics.logEvent("screen_view", props);
        },
        componentDidDisappear: () => {
          const time = Math.floor((Date.now() - focused) / 1000);
          analytics.logEvent("screen_leave", {...props, time});
        },
      };
      const unsubscribe = Navigation.events().registerComponentListener(listener, props.componentId);

      return () => {
        unsubscribe.remove();
      };
    }, []);

    screenOptions?.useUpdateTitle();

    return (
      <WrappingComponent {...props} updateProps={updatePropsLocal}/>
    );
  }

  Wrapper.displayName = `NavigationHOC(${
    Component.displayName || Component.name
  })`;

  return Wrapper;
}

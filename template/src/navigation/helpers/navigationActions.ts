import {
  Navigation,
  NavigationFunctionComponent,
  Options,
} from 'react-native-navigation';
import {INavigationPage} from '../../types';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {reduxProvider} from '../../core/store/store';

export function registerNavigationComponent(
  page: INavigationPage,
  Component: NavigationFunctionComponent<any>,
  reduxEnabled?: boolean,
) {
  if (reduxEnabled) {
    return Navigation.registerComponent(
      page.name,
      () => gestureHandlerRootHOC(reduxProvider(Component)),
      () => Component,
    );
  } else {
    return Navigation.registerComponent(
      page.name,
      () => gestureHandlerRootHOC<any>(Component),
      () => Component,
    );
  }
}

export function navigateToPage<T>(
  page: INavigationPage,
  componentId: string,
  passProps?: T,
  options?: Options,
) {
  Navigation.push(componentId, {
    component: {
      name: page.name,
      id: page.id,
      passProps: passProps,
      options: options,
    },
  });
}

export function navigateWithoutTabs<T>(
  page: INavigationPage,
  componentId: string,
  passProps?: T,
  options?: Options,
) {
  Navigation.push(componentId, {
    component: {
      name: page.name,
      id: page.id,
      passProps: passProps,
      options: {
        ...options,
        bottomTabs: {
          visible: false,
        },
      },
    },
  });
}

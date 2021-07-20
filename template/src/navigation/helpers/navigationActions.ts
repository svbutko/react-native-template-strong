import {Navigation, Options} from "react-native-navigation";
import {INavigationPage} from "../../types";

export function navigateToPage<T>(page: INavigationPage, componentId: string, passProps?: T, options?: Options) {
  Navigation.push(componentId, {
    component: {
      name: page.name,
      id: page.id,
      passProps: passProps,
      options: options,
    },
  });
}

export function navigateWithoutTabs<T>(page: INavigationPage, componentId: string, passProps?: T, options?: Options) {
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

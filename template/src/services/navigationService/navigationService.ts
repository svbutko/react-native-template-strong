import {LayoutRoot, Navigation} from "react-native-navigation";
import {INavigationPage} from "~/types";
import {logger} from "~/infrastructure";
import {AppOptions, getAnimationOptions} from "~/services/navigationService/getAnimationOptions";

class NavigationService {
  stackId: string | undefined;

  async navigateInStackAsync(stackId: string, page: INavigationPage, params?: object, options?: AppOptions): Promise<void> {
    const passOptions = {
      sideMenu: {
        left: {visible: false},
        right: {visible: false},
      },
      ...getAnimationOptions(options?.itemsToAnimate || []),
      ...options,
    };

    if (passOptions?.itemsToAnimate) {
      delete passOptions.itemsToAnimate;
    }

    try {
      if (params) {
        Navigation.updateProps(page.id, passOptions);
      }
      await Navigation.popTo(page.id, options);
    } catch (error) {
      const navProps = {
        component: {
          id: page.id,
          name: page.name,
          passProps: params,
          options: passOptions,
        },
      };

      await Navigation.push(stackId, navProps);
    }
  }

  async navigateInStack(
    stackId: string,
    page: INavigationPage,
    params?: object,
    options?: AppOptions,
    callback?: () => void,
  ): Promise<void> {
    this.navigateInStackAsync(stackId, page, params, options).then(callback);
  }

  async navigateAsync(page: INavigationPage, params?: object, options?: AppOptions): Promise<void> {
    if (this.stackId) {
      return this.navigateInStackAsync(this.stackId, page, params, options);
    } else {
      logger.log("no stack id found", {stackId: this.stackId});
    }
  }

  navigate(page: INavigationPage, params?: object, options?: AppOptions, callback?: () => void) {
    this.navigateAsync(page, params, options).then(callback);
  }

  async setRootAsync(layout: LayoutRoot): Promise<string> {
    const stackId = layout.root?.component?.id || layout.root.stack?.id;
    const centerId = layout.root?.sideMenu?.center.stack?.id;

    this.stackId = stackId || centerId;

    return Navigation.setRoot(layout);
  }

  setRoot(layout: LayoutRoot, callback?: () => void) {
    this.setRootAsync(layout).then(callback);
  }
}

export const navigation = new NavigationService();

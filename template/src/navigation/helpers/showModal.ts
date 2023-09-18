import {isIos} from '../../core/theme/commonConsts';
import {Layout, Navigation} from 'react-native-navigation';
import {INavigationPage} from '../../types';

export function showModal<T extends {}>(
  page: INavigationPage,
  title: string,
  passProps?: T,
) {
  const data: Layout<T> = {
    component: {
      name: page.name,
      id: page.id,
      passProps: passProps,
      options: {
        topBar: {
          title: {
            text: title,
          },
        },
      },
    },
  };

  if (isIos) {
    Navigation.showModal<T>({
      stack: {
        children: [data],
      },
    });
  } else {
    Navigation.showOverlay<T>(data);
  }
}

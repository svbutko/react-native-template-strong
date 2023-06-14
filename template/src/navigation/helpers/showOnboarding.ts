import {Pages} from '../pages';
import {Layout, Navigation} from 'react-native-navigation';
import {isIos} from '../../core/theme/commonConsts';

export function showOnboarding() {
  if (isIos) {
    Navigation.showModal(layoutData);
  }
}

const layoutData: Layout = {
  stack: {
    children: [
      {
        component: {
          name: Pages.onboarding.name,
          id: Pages.onboarding.id,
          options: {
            topBar: {
              visible: false,
            },
          },
        },
      },
    ],
  },
};

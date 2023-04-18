import 'react-native-gesture-handler';
import {initializeApp} from './src/app';

if (__DEV__) {
  const DevMenu = require('react-native-dev-menu');
  const {showStorybook} = require('./src/navigation/helpers/showStorybook');

  DevMenu.addItem('Storybook', showStorybook);
}

initializeApp();

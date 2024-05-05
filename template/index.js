import 'react-native-gesture-handler';
import {initializeApp} from './src/app';
import {DevSettings} from 'react-native';

if (__DEV__) {
  const {showStorybook} = require('./src/navigation/helpers/showStorybook');

  DevSettings.addItem('Storybook', showStorybook);
}

initializeApp();

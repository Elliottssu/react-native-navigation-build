import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen';
import SecondTabScreen from './SecondTabScreen';
import PushedScreen from './PushedScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('askinghoney.FirstTabScreen', () => FirstTabScreen);
    Navigation.registerComponent('askinghoney.SecondTabScreen', () => SecondTabScreen);
    Navigation.registerComponent('askinghoney.PushedScreen', () => PushedScreen);
}
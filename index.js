/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import {App} from './App';
import {mainApp} from './src/pages/LandingPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => mainApp);

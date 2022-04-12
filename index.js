/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import {App} from './App';
import newMainApp from './src/routing';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => newMainApp);

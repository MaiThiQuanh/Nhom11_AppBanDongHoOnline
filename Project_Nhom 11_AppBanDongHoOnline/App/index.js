/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Flatlist from './Flatlist';

import MyNewProject from './1/MyNewProject';

import runD from './runD';
import run from './4/run';

AppRegistry.registerComponent(appName, () => runD);

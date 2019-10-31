/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FetchExample from './FetchExample';
import InsertNguoiDung from './InsertNguoiDung';
import SanPham from './SanPham';


AppRegistry.registerComponent(appName, () => FetchExample);

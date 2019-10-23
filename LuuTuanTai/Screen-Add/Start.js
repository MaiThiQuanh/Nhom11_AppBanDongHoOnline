import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import AddSP from './AddSP';
import Login from './Login';

const RootStack = createStackNavigator(
    {
    Login: {
      screen: Login
    },
    Add: {
      screen: AddSP
    }, 
  },
    {
      initialRouteName: 'Login'
    }
  );

const Start = createAppContainer(RootStack);
export default Start;
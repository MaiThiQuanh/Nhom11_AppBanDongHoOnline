import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import dangNhap from './dangNhap';
import dangKy from './dangKy';

const RootStack = createStackNavigator(
  {
    Login: dangNhap,
    Register: dangKy,  
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


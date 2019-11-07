import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Icon from "react-native-vector-icons/Ionicons";

import Flatlist from './Flatlist';
import details from './details';
import LoginDoAn from './LoginDoAn';
import Register from './Register';
import loginAdmin from './loginAdmin';
import AddProduct from './AddProduct';
import Rolex from './Rolex';
import Chronowsiss from './Chronowsiss';
import User from './User';

const draw = createDrawerNavigator({
  ListScreen: {
    screen: Flatlist,
  },
  DetailScreen: {
    screen: details,
  },
  Rolex: {
    screen: Rolex,
  },
  Chronowsiss:{
    screen: Chronowsiss,
  }
  });
const stack = createStackNavigator({
    ListScreen: {
      screen: Flatlist,
    },
    DetailScreen: {
      screen: details,
    },
    DangNhapTT:
    {
      screen: LoginDoAn
    },
    Register:
    {
      screen: Register
    },
    
    // Admin:
    // {
    //   screen: loginAdmin
    // },
    // AddProduct:
    // {
    //   screen: AddProduct
    // },
    // User: 
    // {
    //   screen: User
    // },
  }, 
  {
      initialRouteName: 'DangNhapTT',
  });
  
  const runD =  createAppContainer(stack);
  export default runD;
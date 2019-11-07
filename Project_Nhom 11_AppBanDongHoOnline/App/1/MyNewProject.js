import React, { Component } from 'react';

import { StyleSheet, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import MainActivity from './MainActivity';
import ShowProductListActivity from './ShowProductListActivity';
import EditProductActivity from './EditProductActivity';
import LoginActivity from './LoginActivity';
import { createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
  {
  Login: {
    screen: LoginActivity
  },
  Home: {
    screen:  MainActivity
  },
  List: {
    screen: ShowProductListActivity
  },
  Update: {
    screen: EditProductActivity
  },
  
},
  {
    initialRouteName: 'List'
  }

);

const MyNewProject = createAppContainer(RootStack);
export default MyNewProject;
  

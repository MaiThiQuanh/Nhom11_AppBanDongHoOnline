import React, { Component } from 'react';

import { StyleSheet, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import login from './login';
import register from './register';
import trangchu from './trangchu';
import add from './add';
import edit from './edit';

const RootStack = createStackNavigator(
  {
  Login: {
    screen: login
  },
  Register: {
    screen:  register
  },
  Home: {
      screen: trangchu
  },
  Add: {
    screen: add
  },
  Edit: {
    screen: edit
  }
},
  {
    initialRouteName: 'Home'
  }

);

const run = createAppContainer(RootStack);
export default run;
  

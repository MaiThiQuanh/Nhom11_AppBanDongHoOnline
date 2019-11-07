import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text, Image } from 'react-native';

export default class trangchu extends Component
{
    static navigationOptions =
    {
        title: 'Trang chủ',
    };
    render()
    {
        return(
            <View>
                <Text>Đây là trang chủ</Text>
            </View>
        );
    }
}
import React, { Component } from 'react';

import { StyleSheet, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

export default class Login extends Component{
    static navigationOptions =
    {
        title: 'Đăng nhập',
    };

    constructor(props)
    {
        super(props)
        this.state ={
            UserTenTK: '',
            UserPassword: ''
        }
    }

    UserLogin = () => 
    {
        const {UserTenTK} = this.state;
        const {UserPassword} = this.state;
        fetch('http://192.168.1.104:82/database/logindongho.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    tentk: UserTenTK,
 
    pass: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Add');
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
     
    }
    render() {
        return (
     
    <View style={styles.body}>
     
            {/* <Text style= {styles.TextComponent}>Đăng Nhập</Text> */}
      
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập tên tài khoản"
     
              onChangeText={UserTenTK => this.setState({UserTenTK})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInput}
            />
     
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập mật khẩu"
     
              onChangeText={UserPassword => this.setState({UserPassword})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInput}
     
              secureTextEntry={true}
            />
     
            <Button title="Login" onPress={this.UserLogin} color="#0AC7BE" />
          
      
     
    </View>
                
        );
      }
    }

const styles = StyleSheet.create({
 
    body :{
    justifyContent: 'center',
    flex:1,
    margin: 10,
    },
     
    TextInput: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#0AC7BE',
     
     // Set border Radius.
     borderRadius: 5 ,
     
    },
     TextComponent: {
       fontSize: 20,
      color: "#000",
      textAlign: 'center', 
      marginBottom: 15
     }
    });
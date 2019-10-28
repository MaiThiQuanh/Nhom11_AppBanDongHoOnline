import React, { Component } from 'react';

import { StyleSheet, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

export default class LoginActivity extends Component{
    static navigationOptions =
    {
        title: 'LoginActivity',
    };

    constructor(props)
    {
        super(props)
        this.state ={
            UserEmail: '',
            UserPassword: ''
        }
    }

    UserLogin = () => 
    {
        const {UserEmail} = this.state;
        const {UserPassword} = this.state;
        fetch('http://192.168.1.104:82/database/2/login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    pass: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Home');
 
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
     
    <View style={styles.MainContainer}>
     
            <Text style= {styles.TextComponentStyle}>Đăng Nhập</Text>
      
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập Email"
     
              onChangeText={UserEmail => this.setState({UserEmail})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập mật khẩu"
     
              onChangeText={UserPassword => this.setState({UserPassword})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
     
              secureTextEntry={true}
            />
     
            <Button title="Login" onPress={this.UserLogin} color="red" />
          
      
     
    </View>
                
        );
      }
    }

const styles = StyleSheet.create({
 
    MainContainer :{
     
    justifyContent: 'center',
    flex:1,
    margin: 10,
    },
     
    TextInputStyleClass: {
     
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: 'red',
     
     // Set border Radius.
     borderRadius: 5 ,
     
    },
     
     TextComponentStyle: {
       fontSize: 20,
      color: "#000",
      textAlign: 'center', 
      marginBottom: 15
     }
    });
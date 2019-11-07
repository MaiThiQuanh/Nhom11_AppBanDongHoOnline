import React, { Component } from 'react';

import { StyleSheet, Image, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
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
            Uemail: '',
            Upass: ''
        }
    }

    UserLogin = () => 
    {
        const {Uemail} = this.state;
        const {Upass} = this.state;
        fetch('http://172.16.13.41:82/database/1/login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: Uemail,
 
    pass: Upass
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('ListScreen');
        }
        else{
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
     
    }
    naviDangky = () =>
    {
      this.props.navigation.navigate('Register');
    }
    render() {
        return (
     
    <View style={styles.body}>
     
     <Image style={styles.icon} source={require('./hinhanh/icon.png')}></Image>

            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập tên tài khoản"
     
              onChangeText={Uemail => this.setState({Uemail})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInput}
            />
     
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập mật khẩu"
     
              onChangeText={Upass => this.setState({Upass})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInput}
     
              secureTextEntry={true}
            />
     
            <Button title="Đăng nhập" onPress={this.UserLogin} color="#2CE426" />
            <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
            <View style={styles.btnDK}>
            <Button  title="Đăng ký" onPress={this.naviDangky} color="#2CE426" />
            </View>
            
          
      
     
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
     borderColor: '#2CE426',
     
     // Set border Radius.
     borderRadius: 5 ,
     
    },
     TextComponent: {
       fontSize: 20,
      color: "#000",
      textAlign: 'center', 
      marginBottom: 15
     },
     btnDK:{
        marginTop:10
     },
     text:
     {
      textAlign: 'center',
      marginTop:10
     },
     icon:
     {
        justifyContent: 'center',
        marginLeft:50,
        marginBottom: 30,
        width:300,
        height:300
     }
  });
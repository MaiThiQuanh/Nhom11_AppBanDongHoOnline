import React, { Component } from 'react';

import { StyleSheet, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';


export default class login extends Component{
    static navigationOptions =
    {
        title: 'Đăng nhập',
    };

    constructor(props)
    {
        super(props)
        this.state ={
            UserEmail: '',
            UserPass: ''
        }
    }

    UserLogin = () => 
    {
        const {UserEmail} = this.state;
        const {UserPass} = this.state;
        const{navigate} = this.props.navigation;
        fetch('http://192.168.137.40:82/database/5/login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    email: UserEmail,
 
    pass: UserPass
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
           navigate('Home');
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
     
    }
    naviDangKy = () => {
        const{navigate} = this.props.navigation;
        navigate('Register');
    }
    render() {
        return (
     
    <View style={styles.body}>
     
            {/* <Text style= {styles.TextComponent}>Đăng Nhập</Text> */}
      
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập tên tài khoản"
     
              onChangeText={UserEmail => this.setState({UserEmail})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInput}
            />
     
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập mật khẩu"
     
              onChangeText={UserPass => this.setState({UserPass})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInput}
     
              secureTextEntry={true}
            />
     
            <Button title="Đăng nhập" onPress={this.UserLogin} color="red" />
            <View style={styles.btnDK}>
            <Button title="Đăng ký" onPress={this.naviDangKy} color="red" />
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
     borderColor: 'red',
     
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
     }
    });
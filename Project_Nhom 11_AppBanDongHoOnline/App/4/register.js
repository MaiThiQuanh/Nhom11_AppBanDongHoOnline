import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button, Text, Image } from 'react-native';

export default class register extends Component
{
    static navigationOptions =
    {
        title: 'Đăng Ký',
    };
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserPass: ''
 
    }
  }
  dangKy = () =>{
 
 
    const { UserName }  = this.state ;
    const { UserEmail }  = this.state ;
    const { UserPass }  = this.state ;
    const {navigate} = this.props.navigation;
    
    
   fetch('http://192.168.1.102:82/database/4/register.php', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
    
       name: UserName,
    
       email: UserEmail,
    
       pass: UserPass
     })
    
   }).then((response) => response.json())
         .then((responseJson) => {
    
    // If server response message same as Data Matched
    //if(responseJson === 'Tạo tài khoản thành công')
    if(responseJson === 'Data Matched')
    {

        //Then open Profile activity and send user email to profile activity.
        navigate('Login');

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
    
            {/* <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text> */}
        
      
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập tên"
     
              onChangeText={UserName => this.setState({UserName})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập email"
     
              onChangeText={UserEmail => this.setState({UserEmail})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
            />
     
            <TextInput
              
              // Adding hint in Text Input using Place holder.
              placeholder="Nhập mật khẩu"
     
              onChangeText={UserPass => this.setState({UserPass})}
     
              // Making the Under line Transparent.
              underlineColorAndroid='transparent'
     
              style={styles.TextInputStyleClass}
    
              secureTextEntry={true}
            />
     
            <Button title="Đăng Ký" onPress={this.dangKy} color="red" />
          
      
     
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
     
    // Set border Radius.
     //borderRadius: 10 ,
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
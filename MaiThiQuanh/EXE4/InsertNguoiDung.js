import React, { Component } from 'react';
 
import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
 
export default class InsertNguoiDung extends Component
{

  static navigationOptions =
  {
    title: 'ThemNguoiDung'

  };
    constructor(props)
    {
        super(props);
 
        this.state = 
        { 
          TextInput_hoten:'',
          TextInput_user:'',
          TextInput_password:'',
          TextInput_email:''
 
          
 
        }
    }
 
    Insert_Data_Into_MySQL = () =>
    {
      
            fetch('http://192.168.0.102:82/QLSanPham/Them_NguoiDung.php',{
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  hoten : this.state.TextInput_hoten,
 
                  user : this.state.TextInput_user,
 
                  password : this.state.TextInput_password,

                  email: this.state.TextInput_email
 
                })
              }).then((response) => response.json())
              .then((responseJson) =>{

                alert(responseJson);
              }).catch((error) => {

                console.error(error);

              });
 
            
    }

    
 
    render()
    {
        return(
 
            <View style = { styles.MainContainer }>
            
                <TextInput 
                  placeholder = "Nhập họ tên"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {TextInputValue => this.setState({TextInput_hoten : TextInputValue})} />
 
                <TextInput 
                  placeholder = "Nhập username"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {TextInputValue => this.setState({TextInput_user : TextInputValue})} />
 
                <TextInput  
                  placeholder = "Nhập password" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {TextInputValue => this.setState({TextInput_password : TextInputValue})} />

            <TextInput  
                  placeholder = "Nhập email" 
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {TextInputValue => this.setState({TextInput_email: TextInputValue})} />
 
                <TouchableOpacity 
                  activeOpacity = { 0.5 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>
 
                    <Text style = { styles.TextStyle }>Thêm người dùng</Text>
 
                </TouchableOpacity>
 
                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
 
    },
 
    TextInputStyleClass:
    {
 
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#009688',
      marginBottom: 20,
      width: '90%'
 
    },
 
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
 
    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
});

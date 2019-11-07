import React, { Component } from 'react';

import { StyleSheet, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

export default class add extends Component
{
    static navigationOptions =
    {
        title: 'Thêm sinh viên'
    };

    constructor(props)
    {
        super(props)
        this.state =
        {
            TextInput_maSinhVien: '',
            TextInput_tenSinhVien: '',
            TextInput_Lop: '',
            TextInput_ngaySinh: '',
            TextInput_diaChi: '',
            TextInput_soDT: '',
        }
    }

    InsertProduct = () =>{
 
        fetch('http://192.168.1.104:82/database1/add.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
   
          masv : this.state.TextInput_maSinhVien,
   
          tensv : this.state.TextInput_tenSinhVien,

          lop : this.state.TextInput_Lop,
   
          ngaysinh : this.state.TextInput_ngaySinh,

          diachi : this.state.TextInput_diaChi,
   
          sodt : this.state.TextInput_soDT,

        
   
        })
   
        }).then((response) => response.json())
            .then((responseJson) => {
   
              // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
   
            }).catch((error) => {
              console.error(error);
            });
  }

  Out = () =>
  {
      this.props.navigation.navigate('Login');
  }

  danhsach = () =>
  {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
  
 <View style={styles.body }>
  
  
        {/* <Text style={styles.add}> Thêm Sản Phẩm </Text> */}
        <TextInput
          
          placeholder="Nhập mã sinh viên"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_maSinhVien : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />
  
       <TextInput
          
          placeholder="Nhập tên sinh viên"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_tenSinhVien : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />
  
        <TextInput
          
          placeholder="Nhập lớp"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_Lop : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />
  
       <TextInput
          
          placeholder="Nhập ngày sinh"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_ngaySinh : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />

        <TextInput
          
          placeholder="Nhập địa chỉ"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_diaChi : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />
  
       <TextInput
          
          placeholder="Nhập số điện thoại"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_soDT : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />
  

       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertProduct} >
  
         <Text style={styles.TextStyle}>Lưu</Text>
  
       </TouchableOpacity>
        
       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.danhsach} >
  
         <Text style={styles.TextStyle}>Danh sách</Text>

      </TouchableOpacity>

       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.Out} >
  
         <Text style={styles.TextStyle}>Thoát</Text>
  
       </TouchableOpacity>
       
       
  
  
  
 </View>     
    );
  }
}

const styles = StyleSheet.create({
 
    body :{
   
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#fff',
   
    },
   
    TextInputStyle: {
   color:'red',
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5 ,
   
    },
   
    TouchableOpacityStyle: {
   
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: 'red'
   
    },
   
    TextStyle:{
      color:'#000',
      textAlign:'center',
    },
   
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
    add:{
      fontSize: 20, 
      textAlign: 'center', 
      marginBottom: 7
    }
   
  });
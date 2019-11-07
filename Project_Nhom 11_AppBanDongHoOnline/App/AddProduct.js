import React, { Component } from 'react';

import { StyleSheet, Image, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

export default class AddProduct extends Component
{
    static navigationOptions =
    {
        title: 'Thêm sản phẩm',
    };
    constructor(props)
    {
        super(props)
        this.state =
        {
            TextInput_maSanPham: '',
            TextInput_tenSanPham: '',
            TextInput_hinhAnh: '',
            TextInput_moTa: ''
        }
    }

    InsertProduct = () =>{
 
        fetch('http://192.168.1.102:82/database/1/add.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
   
          masp : this.state.TextInput_maSanPham,
   
          tensp : this.state.TextInput_tenSanPham,

          hinhanh: this.state.TextInput_hinhAnh,

          mota: this.state.TextInput_moTa
   
        })
   
        }).then((response) => response.json())
            .then((responseJson) => {
   
              // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
   
            }).catch((error) => {
              console.error(error);
            });
  }

  ViewList = () =>
  {
      this.props.navigation.navigate('List');
  }

  render() {
    return (
  
 <View style={styles.MainContainer}>
  
  
        {/* <Text style={styles.add}> Thêm Sản Phẩm </Text> */}
  
        <TextInput
          
          placeholder="Nhập mã sản phẩm"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_maSanPham : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyleClass}
        />
  
       <TextInput
          
          placeholder="Nhập tên sản phẩm"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_tenSanPham : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          placeholder="Hình ảnh"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_hinhAnh : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          placeholder="Nhập mô tả sản phẩm"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_moTa : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyleClass}
        />
  
  
       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertProduct} >
  
         <Text style={styles.TextStyle}>Thêm</Text>
  
       </TouchableOpacity>
  
       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.ViewList} >
  
         <Text style={styles.TextStyle}>Danh Sách</Text>
  
       </TouchableOpacity>
  
  
 </View>     
    );
  }
}

const styles = StyleSheet.create({
 
    MainContainer :{
   
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#fff'
   
    },
   

   
    TextInputStyleClass: {
   
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2CE426',
    borderRadius: 5 ,
   
    },
   
    TouchableOpacityStyle: {
   
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#2CE426'
   
    },
   
    TextStyle:{
      color:'#fff',
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

import React, { Component } from 'react';

import { StyleSheet, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

export default class AddSP extends Component
{
    static navigationOptions =
    {
        title: 'Thêm sản phẩm'
    };

    constructor(props)
    {
        super(props)
        this.state =
        {
            TextInput_maSanPham: '',
            TextInput_tenSanPham: '',
            TextInput_soLuong: '',
            TextInput_hang: '',
            TextInput_mau: '',
            TextInput_giatien: '',
            TextInput_chitet: '',
        }
    }

    InsertProduct = () =>{
 
        fetch('http://192.168.1.104:82/database/adddongho.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
   
          masp : this.state.TextInput_maSanPham,
   
          tensp : this.state.TextInput_tenSanPham,

          soluong : this.state.TextInput_soLuong,
   
          hang : this.state.TextInput_hang,

          mau : this.state.TextInput_mau,
   
          giatien : this.state.TextInput_giatien,

          chitiet : this.state.TextInput_chitet

   
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

  render() {
    return (
  
 <View style={styles.body }>
  
  
        {/* <Text style={styles.add}> Thêm Sản Phẩm </Text> */}
        <TextInput
          
          placeholder="Nhập mã sản phẩm"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_maSanPham : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />
  
       <TextInput
          
          placeholder="Nhập tên sản phẩm"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_tenSanPham : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />
  
        <TextInput
          
          placeholder="Nhập số lượng"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_soLuong : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />
  
       <TextInput
          
          placeholder="Nhập hãng"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_hang : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />

        <TextInput
          
          placeholder="Nhập màu"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_mau : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />
  
       <TextInput
          
          placeholder="Nhập giá tiền"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_giatien : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />
  
        <TextInput
          
          placeholder="Nhập chi tiết sản phẩm"
  
          onChangeText={ TextInputValue => this.setState({ TextInput_chitet : TextInputValue }) }
  
          underlineColorAndroid='transparent'
  
          style={styles.TextInputStyle}
        />

       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertProduct} >
  
         <Text style={styles.TextStyle}>Lưu</Text>
  
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
    borderColor: '#0AC7BE',
    borderRadius: 5 ,
   
    },
   
    TouchableOpacityStyle: {
   
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#0AC7BE'
   
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
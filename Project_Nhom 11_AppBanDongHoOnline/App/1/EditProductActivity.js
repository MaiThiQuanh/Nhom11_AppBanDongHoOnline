import React, { Component } from 'react';

import { StyleSheet, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';


export default class EditProductActivity extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            TextInput_ID: '',
            TextInput_maSanPham: '',
            TextInput_tenSanPham: '',
        }
    }

    componentDidMount(){
      const {params} = this.props.navigation.state;
        this.setState({ 
          TextInput_ID : params.ID,
          TextInput_maSanPham: params.MASP,
          TextInput_tenSanPham: params.TENSP
        })
   
       }
       static navigationOptions = 
       {
           title: 'EditProduct'
       };

       UpdateStudentRecord = () =>{
      
        fetch('http://192.168.1.104:82/database/2/update.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  
          id : this.state.TextInput_ID,

          masp : this.state.TextInput_maSanPham,
  
          tensp : this.state.TextInput_tenSanPham,
  
        })
  
        }).then((response) => response.json())
            .then((responseJson) => {
  
      
              Alert.alert(responseJson);
  
            }).catch((error) => {
              console.error(error);
            });
  
  }

  DeleteStudentRecord = () =>{
        
    fetch('http://192.168.1.104:82/database/2/delete.php', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',

    },
    body: JSON.stringify({
  
      id : this.state.TextInput_ID,
    })
  
    }).then((response) => response.json())
    .then((responseJson) => {
  
      // Showing response message coming from server after inserting records.
      Alert.alert(responseJson);
  
    }).catch((error) => {
       console.error(error);
    });

    this.props.navigation.navigate('Home');

}

render() {

    return (
 
 <View style={styles.MainContainer}>
 
        {/* <Text style={styles.Edit}>Chỉnh Sửa</Text> */}

        <TextInput
          
          placeholder="ID"
          
          value={this.state.TextInput_ID}
 
          onChangeText={ TextInputValue => this.setState({ TextInput_ID : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
        <TextInput
          
          placeholder="Mã sản phẩm"
          
          value={this.state.TextInput_maSanPham}
 
          onChangeText={ TextInputValue => this.setState({ TextInput_maSanPham : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
       <TextInput
          
          placeholder="Tên sản phẩm"

          value={this.state.TextInput_tenSanPham}
 
          onChangeText={ TextInputValue => this.setState({ TextInput_tenSanPham : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
 
       <TouchableOpacity activeOpacity = { .4 } style={styles.add} onPress={this.UpdateStudentRecord}>
 
          <Text style={styles.TextStyle}> UPDATE</Text>
 
       </TouchableOpacity>
 
       <TouchableOpacity activeOpacity = { .4 } style={styles.add} onPress={this.DeleteStudentRecord}>
 
          <Text style={styles.TextStyle}> DELETE </Text>
 
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
   
    Edit:
    {
      fontSize: 20, 
      textAlign: 'center', 
      marginBottom: 7
    },
   
    TextInputStyleClass: {
   
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5 ,
   
    },
   
    add: {
   
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
    }
   
  });

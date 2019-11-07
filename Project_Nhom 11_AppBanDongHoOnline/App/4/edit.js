import React, { Component } from 'react';

import { StyleSheet, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';


export default class edit extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            TextInput_ID: '',
            TextInput_maSinhVien: '',
            TextInput_tenSinhVien: '',
            TextInput_Lop: '',
            TextInput_ngaySinh: '',
            TextInput_diaChi: '',
            TextInput_soDienThoai: '',
        }
    }

    componentDidMount(){
      const {params} = this.props.navigation.state;
        this.setState({
            TextInput_ID: params.ID,
            TextInput_maSinhVien : params.MASV,
            TextInput_tenSinhVien: params.TENSV,
            TextInput_Lop: params.LOP,
            TextInput_ngaySinh : params.NGAYSINH,
            TextInput_diaChi: params.DIACHI,
            TextInput_soDienThoai: params.SODT,
        })
   
       }
       static navigationOptions = 
       {
           title: 'Thay đổi'
       };

       UpdateStudentRecord = () =>{
      
        fetch('http://192.168.1.104:82/database1/update.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            
          id: this.state.TextInput_ID,  
  
          masv : this.state.TextInput_maSinhVien,

          tensv : this.state.TextInput_tenSinhVien,
  
          lop : this.state.TextInput_Lop,

          ngaysinh : this.state.TextInput_ngaySinh,

          diachi : this.state.TextInput_diaChi,
  
          sodt : this.state.TextInput_soDienThoai

        })
  
        }).then((response) => response.json())
            .then((responseJson) => {
  
      
              Alert.alert(responseJson);
  
            }).catch((error) => {
              console.error(error);
            });
  
  }

  DeleteStudentRecord = () =>{
        
    fetch('http://192.168.1.104:82/database1/delete.php', {
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
          
          placeholder="Mã sinh viên"
          
          value={this.state.TextInput_maSinhVien}
 
          onChangeText={ TextInputValue => this.setState({ TextInput_maSinhVien : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
        <TextInput
          
          placeholder="Tên sinh viên"
          
          value={this.state.TextInput_tenSinhVien}
 
          onChangeText={ TextInputValue => this.setState({ TextInput_tenSinhVien : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
       <TextInput
          
          placeholder="Lớp"

          value={this.state.TextInput_Lop}
 
          onChangeText={ TextInputValue => this.setState({ TextInput_Lop : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          placeholder="Ngày sinh"

          value={this.state.TextInput_ngaySinh}
 
          onChangeText={ TextInputValue => this.setState({ TextInput_ngaySinh : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          placeholder="Địa chỉ"

          value={this.state.TextInput_diaChi}
 
          onChangeText={ TextInputValue => this.setState({ TextInput_diaChi : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          placeholder="Số điện thoại"

          value={this.state.TextInput_soDienThoai}
 
          onChangeText={ TextInputValue => this.setState({ TextInput_soDienThoai : TextInputValue }) }
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
 
       <TouchableOpacity activeOpacity = { .4 } style={styles.add} onPress={this.UpdateStudentRecord}>
 
          <Text style={styles.TextStyle}> Cập nhật</Text>
 
       </TouchableOpacity>
 
       <TouchableOpacity activeOpacity = { .4 } style={styles.add} onPress={this.DeleteStudentRecord}>
 
          <Text style={styles.TextStyle}> Xóa </Text>
 
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

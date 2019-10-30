

import React, { Component } from 'react';


import {

  StyleSheet,
  Text, Image,
  View, TextInput, TouchableOpacity
} from 'react-native';

export default class DangKy extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

//   dangKy = () => {
//     const { hoten, user, email, password} = this.state;
//     if(password == password2){
//     fetch('http://192.168.0.102:82/QLSanPham/Them_Nguoi_Dung.php',
//       {
//         method: 'POST',
//         headers:
//         {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(
//           {
//             HoTen: hoten,
//             User: user,
//             Password: password,
//             Email: email
//           })

//       }).then((response) => response.text())
//       .then((responseJson) => {
//         alert("Dang Ky Thanh Cong")
//       }).done()
//     }else{
//       alert("Dang Ky That Bai ")
//     }
//   }




  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dangnhap}>
          <Text style={{ textAlign: 'center', marginTop: 20, color: 'red', fontSize: 30, marginBottom: 50 }}>ĐĂNG KÝ</Text>
          <TextInput
            placeholder="Nhập Họ Tên..."
            style={styles.text}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ hoten: text })} />
          <TextInput
            placeholder="Nhập Tên Đăng Nhập..."
            style={styles.text}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ user: text })} />
            <TextInput
            placeholder="Nhập Mật Khẩu..."
            style={styles.text}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ password: text })} />
          <TextInput
            placeholder="Nhập Email..."
            style={styles.text}
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ email: text })} />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.txtButton1}
            onPress={()=>{this.dangKy()}}>

            <Text style={styles.txt1}>Đăng Ký</Text>

          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.txtButton2}
            onPress={() => this.props.navigation.navigate('Login')}>

            <Text style={styles.txt2}>Thoát</Text>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#CCFFFF'
  },
  dangnhap: {
    marginLeft: 10

  },
  dong: {
    flexDirection: 'row',
    marginTop: 20
  },
  text:
  {
    textAlign: 'center',
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 7,
    marginTop:10,
    width: '90%',
    fontSize:16,
    marginLeft:15
  },
  txtButton1:
  {
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#00FF99',
    marginTop:100,
    width: '40%',
    marginLeft: 120,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2

  },
  txtButton2:
  {
    paddingTop: 7,
    paddingBottom: 7,
    backgroundColor: '#00FF99',
    marginTop:20,
    width: '40%',
    marginLeft: 120,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2

  },
  txt1:
  {
    color: '#333333',
    textAlign: 'center',
    fontSize: 18
  },
  txt2:
  {
    color: '#333333',
    textAlign: 'center',
    fontSize: 18
  }
});

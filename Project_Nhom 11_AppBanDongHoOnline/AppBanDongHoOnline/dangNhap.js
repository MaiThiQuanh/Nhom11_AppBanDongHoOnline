

import React, { Component } from 'react';


import {

  StyleSheet,
  Text, Image,
  View, TextInput, TouchableOpacity
} from 'react-native';

export default class DangNhap extends Component {

  constructor(props) {
    super(props);
    this.state = {
       
    };
  }


//     dangnhap=()=> { 
//       const {user,password} = this.state;
//         fetch('http://192.168.0.102:2/QLSanPham/login.php',
//         {
//             method: 'POST',
//             headers: 
//             {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(
//             {
//               user : user,
//               passWord : password ,
//             })

//         }).then((response) => response.json()).then(
//           (responseJson)=>{
//            if(responseJson=='ok'){
//             this.props.navigation.navigate('FetchExample')
//            }else{
//              alert('Dang Nhap That Bai !');
//            }
//           }
//         );
//   }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dangnhap}>
          <Text style={{ textAlign: 'center', marginTop: 150, color: 'red', fontSize: 30}}>ĐĂNG NHẬP</Text>
          <TextInput
            placeholder="Nhập Tên Đăng Nhập..."
            style={styles.text1}
            underlineColorAndroid="transparent"
            onChangeText = {(TextInputText) => this.setState({ user: TextInputText })}/>
          <TextInput
            placeholder="Nhập Mật Khẩu..."
            style={styles.text2}
            underlineColorAndroid="transparent"
            onChangeText = {(TextInputText) => this.setState({ password: TextInputText })} />
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.txtButton1}
            onPress={()=>{this.dangnhap()}}>

            <Text style={styles.txt1}>Đăng Nhập</Text>

          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.txtButton2}
            onPress={() => this.props.navigation.navigate('Register')}>

            <Text style={styles.txt1}>Đăng Ký</Text>

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
  text1:
  {
    textAlign: 'center',
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 7,
    marginTop:100,
    width: '90%',
    fontSize:16,
    marginLeft:15
  },
  text2:
  {
    textAlign: 'center',
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 7,
    marginTop:20,
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
    borderWidth: 2,

  },
  txt1:
  {
    color: '#333333',
    textAlign: 'center',
    fontSize: 18
  },
});

import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity, 
    TextInput,
    FlatList,
    ActivityIndicator
} from 'react-native';
import SanPham from './SanPham';
export default class TrangChu extends React.Component {

  render(){
    return(
     
      
      <View style={styles.container}>
      <View style={styles.top}>
     
      <View style={styles.login}>
          <TouchableOpacity > 
          <Image style={styles.imagemenu} source={require('./hinhanh/menu.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style= {styles.test}>
            <Image style={styles.imagesearch} source={require('./hinhanh/searchtap.jpg')}></Image>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity >
          <TextInput style = {styles.search} placeholder = "Tìm kiếm...." placeholderTextColor = "gray">
          </TextInput>
          </TouchableOpacity>
          
          <TouchableOpacity >
          <Image style={styles.image} source={require('./hinhanh/giohang.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity >
          <Image style={styles.imageuser} source={require('./hinhanh/taikhoan.png')}></Image>
          </TouchableOpacity>
      </View>
      <View style={styles.login}>
          <TouchableOpacity >
              <Text style={styles.log}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity >
              <Text style={styles.logDK}>Đăng ký</Text>
          </TouchableOpacity>
      </View>   
      </View>
      </View>
           
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  login:{
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },
  log:{
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop:5,
    color:'white',
    marginRight: 120,
    backgroundColor: 'green',
    fontWeight: 'bold',
    borderRadius: 7

  },
  logDK:{
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop:5,
    color:'white',
    marginTop:500,
    marginRight: 20,
    backgroundColor: 'green',
    fontWeight: 'bold',
    borderRadius: 7

  },
  image: {
    marginRight:10,
    width:25,
    height:25,
    
  },
  imageuser: {
    marginRight:5,
    marginTop:10,
    width:25,
    height:25,
  },
  imagemenu: {
    marginRight:50,
    width:20,
    height:20,
  },
  imagesearch: {
    width:20,
    height:20,
  },
  search: {
    backgroundColor: '#E6E6E6',
    marginRight:25,
    marginTop:10,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 2,
    paddingTop:2
    
  },
  test: {
    backgroundColor: '#048204',
    padding:8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  }

  

});

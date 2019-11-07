import React, { Component } from 'react';

import { StyleSheet, Image, ScrollView, View, Text, TouchableOpacity } from 'react-native';

export default class details extends Component
{
    static navigationOptions =
    {
        title: 'Chi tiết sản phẩm'
    };
    constructor(props)
    {
        super(props)
        this.state = {
            TextInput_ID: '',
            TextInput_maSanPham: '',
            TextInput_tenSanPham: '',
            //TextInput_hinhAnh: '',
            TextInput_moTa: '',
            TextInput_gia: ''
        }
    }

    componentDidMount(){ //lấy dữ liệu từ database về app
      const {params} = this.props.navigation.state;
        this.setState({ 
          //TextInput_ID: params.ID,
          TextInput_maSanPham: params.MASP,
          TextInput_tenSanPham: params.TENSP,
          //TextInput_hinhAnh: params.HINHANH,
          TextInput_moTa: params.MOTA,
          TextInput_gia: params.GIA
        })
   
       }
       navi = () => {
           this.props.navigation.navigate('ListScreen');
       }

      
    render()
    {
        return(
            <ScrollView>
            <View style={styles.MainContainer}>
                <View style={styles.textDetail}>
                    
                    <Text style={styles.textMa}>Mã sản phẩm: {this.state.TextInput_maSanPham}</Text>
                    <Text style={styles.textChiTiet}>Mô tả sản phẩm: {this.state.TextInput_moTa}</Text>
                    <Text style={styles.textGia}>Giá: {this.state.TextInput_gia} VND</Text>
                </View>

                <View style = {styles.stlButton}>
                    <TouchableOpacity  style={styles.buttonMua}>
                        <Text>Mua</Text>
                    </TouchableOpacity>  
                <View>
                <TouchableOpacity style={styles.buttonTroVe} onPress ={this.navi}>
                        <Text>Trở về</Text>
                    </TouchableOpacity>
                </View>
                </View>

            </View>
            </ScrollView>
        );
    }
}
   

const styles = StyleSheet.create({
 
    MainContainer :{
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#fff',
      fontSize: 20,
      flexDirection: 'column',
   
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
    },
    buttonMua:{
        backgroundColor: "#2CE426",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        marginRight:20,
        alignItems:"center",
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 50,
        justifyContent: "space-around",
        
        
    },
    buttonTroVe:{
        backgroundColor: "#2CE426",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        alignItems:"center",
        marginTop: 50,
        marginLeft: 100,
        //marginBottom: 50,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: "space-around",  
       
    },
    stlButton:{
        flexDirection: 'row',
        marginBottom: 50
    },
    textDetail:{
        flex:1,
        flexDirection: 'column',
    },
    textMa:{
        fontSize: 20,
        marginBottom: 10
    },
    textChiTiet:{
        fontSize: 22,
    },

    textGia:{
        fontSize: 20,
        color: 'red',
        marginTop: 10
    },
    hinh:{
        width:100,
        height:100,
        borderRadius:50
    },
  });

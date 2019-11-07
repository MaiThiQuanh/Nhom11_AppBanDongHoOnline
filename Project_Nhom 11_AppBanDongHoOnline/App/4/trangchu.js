import React, { Component } from 'react';
 
import { AppRegistry, TouchableOpacity, FlatList, StyleSheet, TextInput, View, Alert, Button, Text, Image } from 'react-native';

export default class trangchu extends Component
{
    static navigationOptions =
    {
        title: 'Danh sách',
    };
    constructor(props)
    {
        super(props);
        this.state={
            mang:[],
            refresh:false
            
        }
    }

    navi = (id, masv, tensv, lop, ngaysinh, diachi, sodt) =>
    {
        this.props.navigation.navigate('Edit',{
        ID: id,
        MASV: masv,
        TENSV: tensv,
        LOP: lop,
        NGAYSINH: ngaysinh,
        DIACHI: diachi,
        SODT: sodt
    });
}
    
    render()
    {
        //const {navigate} = this.props.navigation;
        return(
                <View style={Styles.flat}>
                <FlatList
                    data={this.state.mang}
                    renderItem={({item}) => 
                    <TouchableOpacity style={Styles.inside} onPress={this.navi.bind(this, item.id, item.masv, item.tensv, item.lop, item.ngaysinh, item.diachi, item.sodt)}>
                        <View>
                            <Text style={Styles.text}>Tên sinh viên: {item.tensv}</Text>
                        </View>
                        <View >
                        </View>
                    </TouchableOpacity>
                    }
                />
                {/* navigate('DetailScreen', item.id, item.masp, item.tensp, item.hinhanh) */}
                </View>
        );
    }
    componentDidMount()
    {
        
        fetch("http://192.168.1.104:82/database1/list.php")
        .then((response)=> response.json())
        .then((responseJson)=>{
            this.setState({
                mang: responseJson //lấy dữ liệu từ database về
            });
        })
        .catch((e) => {console.log(e)});
        
    }
}


var Styles = StyleSheet.create({
    inside:{
        borderBottomWidth: 1,
        padding:50,
        borderRightWidth: 1,
        flexDirection: "row"
    },

    left:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center" 
    },

    right:{
        flex: 2,
    },

    hinh:{
        width:100,
        height:100,
        borderRadius:50
    },

    text:{
        marginTop: 10,
        marginBottom: 10,
        marginLeft:20
    },

    container:
    {
        flex:1,
        flexDirection: 'row',
        
    },

    imagemenu: {
        marginTop:15,
        marginLeft:30,
        marginRight:30,
        width:20,
        height:20,
    },

    imagesearch: {
        width:20,
        height:20,
        
    },

    text1:
    {
        marginTop:10,
        backgroundColor: '#048204',
        padding:5,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },

    giohang: {
        marginTop:10,
        marginLeft:20,
        width:30,
        height:30,
        
    },

    imguser:
    {
        marginTop:12,
        marginLeft:10,
        width:30,
        height:30,
    },

    TxtInput:
    {
        backgroundColor: "#E6E6E6",
        marginTop:10,
        paddingLeft: 60,
        paddingRight: 60,
        padding:1
    },
    test:
    {
        flex:1,
        flexDirection: 'column',
    },
    flat:
    {
        flex:9,
        flexDirection: 'row',
    },
    btn_chitiet:{
        backgroundColor: "#2CE426",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        marginLeft:20,
        justifyContent:"center",
        alignItems:"center" 
    }
});

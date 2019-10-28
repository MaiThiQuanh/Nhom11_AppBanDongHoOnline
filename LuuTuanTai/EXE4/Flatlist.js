import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';

export default class Flatlist extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            mang:[],
            refresh:false
        }
    }
    render()
    {
        return(
            <FlatList

            refreshing={this.state.refresh} //vòng tròn xoay cập nhật random các sản phẩm
            onRefresh={()=>{this.refresh()}} //gọi đến hàm refresh
                data={this.state.mang}
                renderItem={({item}) => 
                <TouchableOpacity style={Styles.inside} onPress={()=> {alert(item.tensp)}}>
                    
                    <View style={Styles.left}>
                        <Image source={{uri: item.hinhanh}}
                            style={Styles.hinh} />
                    </View>
                    <View style={Styles.right}>
                        <Text>Mã sản phẩm: {item.masp}</Text>
                        <Text style={Styles.text}>Tên sản phẩm: {item.tensp}</Text>
                        
                    </View>
                
                </TouchableOpacity>
                }
            />
        );
    }
    refresh()
    {
        this.setState({
            refresh:true //hiện xoay
        });
        fetch("http://192.168.1.104:82/demo/database/demo1.php")
        .then((response)=> response.json())
        .then((responseJson)=>{
            this.setState({
                mang: responseJson,
                refresh:false //set false cho dừng lại
            });
        })
        .catch((e) => {console.log(e)});
    }
    componentDidMount()
    {
        fetch("http://192.168.1.104:82/demo/database/demo.php")
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
        flex: 2
    },
    hinh:{
        width:100,
        height:100,
        borderRadius:50
    },
    text:{
        marginTop: 10,
        marginBottom: 10
    }
})
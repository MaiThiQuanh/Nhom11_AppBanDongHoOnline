import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity,  ScrollView} from 'react-native';


export default class Chronowsiss extends Component{

    static navigationOptions =
    {
        title: 'Đồng hồ Chronowsiss',
    };
    constructor(props)
    {
        super(props);
        this.state={
            mang:[],
             
        }
    }
 
    navi = (id, masp, tensp,hinhanh, mota, gia) =>
    {
        this.props.navigation.navigate('DetailScreen',{
        ID: id,
        MASP: masp,
        TENSP: tensp,
        HINHANH: hinhanh,
        MOTA: mota,
        GIA: gia
    });
}
    
    render()
    {
        //const {navigate} = this.props.navigation;
        return(
            <View style={Styles.test}>
                <View style={Styles.container}>
                    <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                        <Image style={Styles.imagemenu} source={require('./hinhanh/menu.png')}></Image>
                    </TouchableOpacity>
                    
                    <TouchableOpacity >
                        <Text style={Styles.text1}>
                            <Image style={Styles.imagesearch} source={require('./hinhanh/searchtap.jpg')}></Image>
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <TextInput style={Styles.TxtInput}  placeholder = "Tìm kiếm...." placeholderTextColor = "gray" ></TextInput>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image style={Styles.giohang}  source={require('./hinhanh/giohang.png')}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.user}>
                        <Image style={Styles.imguser}  source={require('./hinhanh/taikhoan.png')}></Image>
                    </TouchableOpacity>
                    </View>

                <View style={Styles.flat}>
                <FlatList
                    data={this.state.mang}
                    renderItem={({item}) => 
                    <TouchableOpacity style={Styles.inside}>
                        <View>
                            <Image source={{uri: item.hinhanh}}
                                style={Styles.hinh} />
                        </View>
                        <View><Text style={Styles.text}>Mã sản phẩm: {item.masp}</Text>
                            <Text style={Styles.text}>Tên sản phẩm: {item.tensp}</Text>
                            {/* <TouchableOpacity style={Styles.btn_chitiet} onPress={this.navi.bind(this, 
                                item.id, item.masp, item.tensp, item.hinhanh, item.mota, item.gia)}>
                                    <Text>Chi tiết</Text>
                            </TouchableOpacity> */}
                        </View>
                        <View >
                        </View>
                    </TouchableOpacity>
                    }
                />
                {/* navigate('DetailScreen', item.id, item.masp, item.tensp, item.hinhanh) */}
                </View>
            </View>
        );
    }
    componentDidMount()
    {
        
        fetch("http://172.16.13.41:82/database/1/listchronowsiss.php")
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
})

import React, { Component } from 'react';

import { StyleSheet, FlatList, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, ListView, ActivityIndicator } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

export default class ShowProductListActivity extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            mang:[],
            isLoading: true,
        }
    }
    static navigationOptions = {
        title: 'ListProduct'
    };
navi = (id, masp, tensp) =>
{
  this.props.navigation.navigate('Update', {
    ID: id,
    MASP: masp,
    TENSP: tensp
  });
}

    componentDidMount() {
    
        return fetch('http://192.168.1.104:82/database/2/show.php')
          .then((response) => response.json()).then((responseJson) => {
            this.setState({
              isLoading: false,
              mang: responseJson
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }

      render() {
       if (this.state.isLoading) {
         return (
           <View style={{flex: 1, paddingTop: 20}}>
             <ActivityIndicator />
           </View>
         );
       }
       return (
    
    
           <FlatList
             data={this.state.mang}
             renderItem={({item}) => 
                <Text style={styles.inside} onPress={this.navi.bind(this, item.id, item.masp, item.tensp)}>
                   {item.tensp}
                
                </Text>
             }
           />
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
 
  MainContainer_For_Show_StudentList_Activity :{
    
    flex:1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5
    
    },
 
  TextInputStyleClass: {
 
  textAlign: 'center',
  width: '90%',
  marginBottom: 7,
  height: 40,
  borderWidth: 1,
  borderColor: '#FF5722',
  borderRadius: 5 ,
 
  },
 
  TouchableOpacityStyle: {
 
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '90%',
    backgroundColor: '#00BCD4'
 
  },
 
  TextStyle:{
    color:'#fff',
    textAlign:'center',
  },
 
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
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
 
});

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  Alert,
  TouchableHighlight,
  Dimensions,
  TextInput
} from 'react-native';

import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from './flatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription:''

        };
    }
    showAddModal = () => {
        this.refs.myModal.open();

    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }
    render(){
        return(
            <Modal 
                ref={"myModal"}
                style={{
                justifyContent:'center',
                shadowRadius: 10,
                width: screen.width - 80,
                height: 280
            }}
            position='center'
            backdrop={true}
            onClosed={() => {
                // alert("Modal closed");
            }}
        > 
            <Text style={{
                fontSize:16,
                fontWeight:'bold',
                textAlign:'center',
                marginTop:40
            }}>Thông tin chi tiết món ăn mới</Text>
            <TextInput
            style={{
                height:40,
                borderBottomColor:'gray',
                marginLeft:30,
                marginRight:30,
                marginTop:20,
                marginBottom:10,
                borderBottomWidth: 1
            }}
            onChangeText={(text) => this.setState({ newFoodName: text })}
            placeholder="Nhập tên món ăn"
            value={this.state.newFoodName}>
            </TextInput>

            <TextInput
            style={{
                height:40,
                borderBottomColor:'gray',
                marginLeft:30,
                marginRight:30,
                marginTop:20,
                marginBottom:10,
                borderBottomWidth: 1
            }}
            onChangeText={(text) => this.setState({ newFoodDescription: text })}
            placeholder="Nhập mô tả món ăn"
            value={this.state.newFoodDescription}>
            </TextInput>

            <Button
                style={{ fontSize:15, color: 'white'}}
                containerStyle={{
                    padding:5,
                    marginLeft:105,
                    marginRight:105,
                    height:35,
                    borderRadius:10,
                    backgroundColor:'#FF0000',
                    
            }}
            onPress={() => {
                if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0) {
                    alert("Bạn vui lòng nhập đầy đủ tên và chi tiết món ăn mới !!!");
                    return;
                }
                const newKey = this.generateKey(24);
                const newFood = {
                    key:newKey,
                    name:this.state.newFoodName,
                    imageUrl:"https://sgp1.digitaloceanspaces.com/tz-mag-vn/wp-content/uploads/2019/04/111104040606/dac-san-chau-a-1.jpg",
                    foodDescription:this.state.newFoodDescription
                };
                flatListData.push(newFood);
                this.props.parentFlatList.refreshFlatList(newKey);
                this.refs.myModal.close();
            }}>
            Lưu  
            </Button>
            </Modal>

        );
    }
}


            
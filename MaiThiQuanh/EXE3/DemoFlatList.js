
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
} from 'react-native';

import flatListData from './flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';


class FlatListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }
    render(){
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }  
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress:() => {
                       this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index],this);

                    },
                    text: 'Sửa', type: 'primary', backgroundColor:'#0000FF'

                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Thông báo',
                            'Bạn có muốn xóa món ăn này ?',
                            [
                                {text: 'Không ', onPress: () => console.log('Cancel Pressed'), style:'cancel'},
                                {text: 'Có',onPress: () => {
                                    flatListData.splice(this.props.index, 1);
                                    this.props.parentFlatList.refreshFlatList(deletingRow);

                                }},

                            ],
                            { cancelable: true}

                        );

                    },
                    text: 'Xóa', type: 'delete', backgroundColor:'#FF0000'
                }
            ],
            rowId: this.props.index,
            sectionId: 1

        };
        return(
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex:1,
                    flexDirection:'column',
                   
                }}>
                <View style={{
                flex:1,
                flexDirection:'row',
                backgroundColor:'#00FFCC'}}>
                <Image
                source={{uri:this.props.item.imageUrl}}
                style={{width:90, height: 90, margin: 10,marginTop:20,marginBottom:60}}>   
                </Image>
                
                <View style={{
                    flex:1,
                    flexDirection:'column',
                    height:100
                }}>
                <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>

                </View>
                

            </View>
            <View style={{
                height:1,
                backgroundColor:'white',
            }}>

                </View>
            </View>
            </Swipeout>
            

        );
    }
}
const styles = StyleSheet.create({
    flatListItem:{
        color:'black',
        fontSize:16,
        paddingTop:10
    }

});
export default class DemoFlatList extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey:activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd (){
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }
    render(){
        return(
            <View>
                <View style={{ backgroundColor:'#FFFF00', 
                height: 45,
                flexDirection:'row',
                justifyContent:'flex-end',
                alignItems:'center'}}>


                <Text style={{ fontSize:18,
                textAlign:"center",
                color:"red",
                marginRight:50,
                fontWeight:"bold"
                }}>THỰC ĐƠN NHÀ HÀNG</Text>
                
                <TouchableHighlight
                    style={{marginRight:10}}
                    underlayColor='#FFFF00'
                    onPress={this._onPressAdd}>

                
                <Image
                    style={{width:30, height: 30}}
                    source={require('./icons/icon_add.png')}/>
                    
                </TouchableHighlight>
                
                </View>
                <FlatList 
                ref={"flatList"}
                data={flatListData}
                renderItem={({item, index}) =>{
                    return(
                        <FlatListItem item={item} index={index} parentFlatList={this}>

                        </FlatListItem>);

                }}
                >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this} >
                </AddModal>

                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>

            </View>

        );
    }
}

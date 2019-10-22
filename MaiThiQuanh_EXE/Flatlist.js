

import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList,Image } from 'react-native';

export default class Flatlist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>DEMO FLATLIST</Text>
        <FlatList
          data={[{ key: 'a',ten:'Gà rán',gia:'100000' }, { key: 'a',ten:'Gà rán',gia:'150000'  },{key: 'a',ten:'Gà rán',gia:'200000' }]}
          renderItem={({ item }) =>
          <View style={styles.content}>
            <View style={styles.image}>
                <Image
                     style={styles.hinh}
                     source={require('./image/hinh1.jpg')}
                  />
            </View>
            <View style={styles.mota}>
            <Text>Tên :{item.ten}</Text>
            <Text>Giá :{item.gia}</Text>
            </View>
          </View>
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'red'
  },
  mota:{
    marginLeft:40
  },
  hinh:{
    width:100,
    height:100
  },
  content:{
    marginTop:20,
    flexDirection:'row'
  }
});

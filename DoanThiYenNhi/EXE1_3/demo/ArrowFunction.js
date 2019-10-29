import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default class ArrowFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:0
    }
  }
  
  TANG = () => {
    this.setState({
      id:this.state.id + 1
    })
  };
  GIAM = () => {
    this.setState({
      id:this.state.id - 1
    })
  };


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>DEMO</Text>
        <View style={styles.demo}>            
            <Text>GIÁ TRỊ:{this.state.id} </Text>
            <TouchableOpacity onPress={()=>{this.TANG()}}>
            <Text style={styles.tang}>TĂNG</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.GIAM()}}>
            <Text style={styles.tang}>GiẢM</Text>
            </TouchableOpacity>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'red'
  },
  tang: {    
    marginBottom: 10,
    marginTop:10,
    color:"red"
  },
});

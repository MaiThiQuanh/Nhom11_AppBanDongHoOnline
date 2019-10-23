import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button
} from 'react-native';

export default class test extends Component{
    constructor(props){
        super(props);
        this.state={
            sum:0,
            nhan:1,
            a:"Hello Thu Duc College",
            b:"Today is not a good day to training somthing.",
            c:"Welcome ",
            d:"Something will be good today"
        }
    }
    click()
    {   
        this.setState({
            sum:this.state.sum + 1
        });
    }
    click2()
    {
        this.setState({
            nhan:this.state.nhan * 2
        });
    }
    viTri()
    {
        this.setState({
            a:this.state.a.indexOf("Duc"),
            b:this.state.b.indexOf("training")
        });
    }

    noiChuoi()
    {
        this.setState({
            c:this.state.c.concat("TDC-Cao đẳng công nghệ thủ đức")
        });
    }

    thayThe()
    {
        this.setState({
            d:this.state.d.replace("Something will be good today", "Maybe it will be good")
        });
    }

    render()
    {
        return(
            <View style={Styles.view}>
            <View style={Styles.styleButton}>
                <Button title="+" onPress={()=>{this.click()}}></Button>
                <Text style={Styles.sum}>Kết quả: {this.state.sum}</Text>
            </View>
            
            <View style={Styles.styleButton}>
                <Button title="*" onPress={()=>{this.click2()}}><Text>*</Text></Button>
                
                <Text style={Styles.sum}>Kết quả: {this.state.nhan}</Text>
            </View>

            <View style={Styles.styleButton}>
                <Button title="vị trí" onPress={()=>{this.viTri()}}></Button>
                <Text style={Styles.sum}>a: {this.state.a}</Text>
                <Text style={Styles.sum}>b: {this.state.b}</Text>
            </View>

            <View style={Styles.styleButton}>
                <Button title="Nối chuỗi" onPress={()=>{this.noiChuoi()}}></Button>
                <Text style={Styles.sum}>c: {this.state.c}</Text>
                
            </View>

            <View style={Styles.styleButton}>
                <Button title="thay thế" onPress={()=>{this.thayThe()}}></Button>
                <Text style={Styles.sum}>d: {this.state.d}</Text>
                
            </View>
        </View>
        );
    }
}

var Styles = StyleSheet.create({
    inside:{
        flex:1,
        width:50,
        height:50,
        backgroundColor:"blue",
        margin:20,
        justifyContent:"center",
        alignItems:"center"
    },
    styleButton:{
        flex:2,
        width:100,
        height:100,
        justifyContent:"center",
        alignItems:"center"
    },
    view:{
        flex:3,
        backgroundColor:"pink"
    },
    sum:{
        marginTop: 20,
        justifyContent:"center",
        alignItems:"center"
    }
    
});
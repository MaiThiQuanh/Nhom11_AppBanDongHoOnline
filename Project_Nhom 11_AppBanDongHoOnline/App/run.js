import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';

export default class run extends Component
{
    constructor()
    {
        super();
        this.state ={
            MaSanPham: "", 
            TenSanPham: "", 
            ActivityIndicator_Loading: false
        };
    }

    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://192.168.0.127:82/database/add.php',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  masp : this.state.MaSanPham,

                  tensp : this.state.TenSanPham,

                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);

                this.setState({ ActivityIndicator_Loading : false });

            }).catch((error) =>
            {
                console.error(error);

                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

    render()
    {
        return(

            <View style = { styles.MainContainer }>
            
                <TextInput 
                  placeholder = "Nhap ma san pham"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({ MaSanPham: TextInputText })} />

                <TextInput 
                  placeholder = "Nhap ten san pham"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  onChangeText = {(TextInputText) => this.setState({TenSanPham: TextInputText })} />
 
                <TouchableOpacity 
                  activeOpacity = { 0.5 } 
                  style = { styles.TouchableOpacityStyle } 
                  onPress = { this.Insert_Data_Into_MySQL }>

                    <Text style = { styles.TextStyle }>Insert</Text>

                </TouchableOpacity>

                {
        
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
                
                }
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20

    },
 
    TextInputStyleClass:
    {

      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#009688',
      borderRadius: 7 ,
      marginBottom: 10,
      width: '95%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#009688',
      marginBottom: 20,
      width: '90%'
 
    },
 
    TextStyle:
    {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },

    ActivityIndicatorStyle:{
      
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    
  }
});
//     saveData =() =>
//     {
//         this.setState({loading: true, disabled: true}, () =>
//         {
//             fetch("192.168.0.127:82/database/demo.php",
//             {   
//                 method: "POST",
//                 headers:
//                 {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     masp: this.state.masp,
//                     tensp: this.state.tensp
//                 })
//             }).then((response) => response.json()).then((responseJson) =>
//             {
//                 alert(responseJson);
//                 this.setState({ loading: false, disabled: false });
//             }).catch((error) =>
//             {
//                 console.error(error);
//                 this.setState({ loading: false, disabled: false });
//             });
//         });
//     }

//     render()
//     {
//         return(
//             <View style={Styles.container}>
//                 <TextInput underlineColorAndroid="transparent" placeholder ="Ma san pham" style={Styles.textInput} onChangeText={(text) => this.setState({masp: text})}></TextInput>
//                 <TextInput underlineColorAndroid="transparent" placeholder ="Ten san pham" style={Styles.textInput} onChangeText={(text) => this.setState({tensp: text})}></TextInput>

//                 <TouchableOpacity disabled = { this.state.disabled } activeOpacity = { 0.8 } style = { Styles.Btn } onPress = { this.saveData }>
//                     <Text style = { Styles.btnText }>Insert</Text>
//                 </TouchableOpacity>

//                 {
//                     (this.state.loading)
//                     ?
//                         (<ActivityIndicator size = "large" />)
//                     :
//                         null
//                 }
//             </View>
//         );
//     }
// }

// const Styles = StyleSheet.create(
//     {
//         container:
//         {
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#eee',
//             paddingHorizontal: 25,
//             paddingTop: (Platform.OS == 'ios') ? 20 : 0
//         },
     
//         textInput:
//         {
//             height: 40,
//             borderWidth: 1,
//             borderColor: 'grey',
//             marginVertical: 5,
//             alignSelf: 'stretch',
//             padding: 8,
//             fontSize: 16
//         },
     
//         Btn:
//         {
//             backgroundColor: 'rgba(0,0,0,0.6)',
//             alignSelf: 'stretch',
//             padding: 10,
//             marginTop: 10,
//             marginBottom: 25
//         },
     
//         btnText:
//         {
//             textAlign: 'center',
//             color: 'white',
//             fontSize: 16
//         }
//     });
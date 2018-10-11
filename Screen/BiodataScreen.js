/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, KeyboardAvoidingView,Button,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation'



class BiodataScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

          <StatusBar
          barStyle="light-content"
          />

          <View style={styles.logoContainer}>

           <Image
       style={styles.logo}
       source={require('F:/SEKOLAH/XIRPL3/KK4/react/hello08/Screen/img/aa.jpg')}
       />


          <TextInput
          placeholder="Aqil Jawadal Furqon"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />

          <TextInput
          placeholder="Pemalang,07 November 2001"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />

          <TextInput
          placeholder="SMK Telkom Purwokerto"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />

           <TextInput
          placeholder="Islam"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          style={styles.input}
          />
          

          <TouchableOpacity style={styles.buttonContainer}>

          <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('WelcomeScreen')}>Exit</Text>
          </TouchableOpacity>
          </View>
          </View>
    );
  }
} 

export default BiodataScreen;


const styles = StyleSheet.create({
 
  container: {

      padding: 20,
      backgroundColor:'#3C5B9A',
      flex: 1,
    alignItems: 'center',


  },
  input:{
    height:40,
    width:300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:20,
    marginTop:30,
    color: '#FFF',
    paddingHorizontal:10,
    fontWeight:'bold'
  },
  buttonContainer:{
    backgroundColor:'#133F6F',
    paddingVertical:15,
    width: 300,
  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700',

    //{marginTop:10, width:300, borderRadius: 10,textAlign:'center',color:'#FFF', backgroundColor: '#133F6F',fontWeight:'bold',height:15}
    
  },
  logo:{

    width:120,
    height:120
    
  },  
  logoContainer:{
    alignItems: 'center',
    justifyContent: 'center'

  },
 
});

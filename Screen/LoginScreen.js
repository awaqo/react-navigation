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



class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar
          barStyle="light-content"
          />
          <View style={styles.logoContainer}>
          <TextInput
          placeholder="username or email"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          returnKeyType="next"
          OnSubmitEditing={() => this.passwordInput.focus()}
          KeyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />

          <TextInput
          placeholder="password"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) =>this.passwordInput = input}
          />
          

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('BiodataScreen')}> Login</Text>
          </TouchableOpacity>
          </View>
          </View>
    );
  }
} 

export default LoginScreen;


const styles = StyleSheet.create({
 
  container: {

      padding: 20,
      backgroundColor:'#3C5B9A',
      flex:1,
  },
  input: {
    height:40,
    width:370,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:20,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal:50,
    borderRadius: 5,
  },
  buttonContainer:{
    width:370,
    backgroundColor:'#133F6F',
    paddingVertical:15,
    height:50,
    borderRadius: 10,
  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700',
  }
 
});

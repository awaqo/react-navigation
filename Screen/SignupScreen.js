/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,StatusBar,TextInput} from 'react-native';
import {StackNavigator} from 'react-navigation'


class SignupScreen extends Component{
  render() {
    return (
     <View style={styles.container}>
          <StatusBar
          barStyle="light-content"
          />
          <View style={styles.logoContainer}>
          <TextInput
          placeholder="email"
          placeholderTextColor= "rgba(255,255,255,0.5)"
          returnKeyType="next"
          OnSubmitEditing={() => this.passwordInput.focus()}
          KeyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />

           <TextInput
          placeholder="username"
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

          <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('WelcomeScreen')}>Signup</Text>
          </TouchableOpacity>
      
          <TouchableOpacity style={styles.buttonCont}>

          <Text style={styles.buttonText} onPress={()=>this.props.navigation.navigate('LoginScreen')}>Login</Text>
          </TouchableOpacity>
          </View>
          </View>
    );
  }
} 

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
     justifyContent: 'center',
     backgroundColor:'#3C5B9A'
  },
     buttonContainer:{
    backgroundColor:'#133F6F',
    paddingVertical:15,
    height:50,
    width:300,
    borderRadius: 10,
    marginBottom:80,

  },
  buttonCont: {

  },

  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  input:{
    height:40,
    width:300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:20,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal:50,
    borderRadius: 5,
  } 
});

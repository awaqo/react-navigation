/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  KeyboardAvoidingView, 
  Button, 
  StatusBar, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import {StackNavigator} from 'react-navigation'

class WelcomeScreen extends Component{
  render() {
    return (
     <View style={styles.container}>
      <View style={styles.logoContainer}>
      <StatusBar
              backgroundColor="#2B4D91"
              barStyle="light-content"
            />
       
       <Image
       style={styles.logo}
       source={require('F:/SEKOLAH/XIRPL3/KK4/react/hello08/Screen/img/facebook.png')}
       />

        <Text style={styles.title}>Welcome to Facebook</Text>
        </View>
        <View style={styles.formConatiner}>
        
        </View>     
      
     <TouchableOpacity style={styles.buttonContainer}>


          <Text  onPress={()=>this.props.navigation.navigate('LoginScreen')} style={styles.buttonText}> Login</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCont}>


          <Text  onPress={()=>this.props.navigation.navigate('SignupScreen')} style={styles.buttonText} > SignUp</Text>

          </TouchableOpacity>


        </View> 
    	
    );
  }
} 

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3C5B9A',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'

  },
  logo:{
    width:120,
    height:120
  },  
  title:{
    fontSize:16,
    fontWeight:'bold',  
    color: '#FFF',
    marginTop: 10,
    width:160,
    textAlign: 'center',
    opacity: 0.9
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
  buttonContainer:{
    backgroundColor:'#133F6F',
    paddingVertical:15,
    height:50,
    width:300,
    marginBottom:30,
    borderRadius: 10,
  },
  buttonCont: {
    backgroundColor:'#133F6F',
    paddingVertical:15,
    height:50,
    width:300,
    marginBottom:80,
    borderRadius: 10,
  },
  buttonText:{
    textAlign:'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
});

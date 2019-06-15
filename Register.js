import React from 'react'
import {
  View,
  
  TextInput,
  StyleSheet,Text,Alert,
} from 'react-native'
import SignUp from './SignUp';
import MasterScreen from './MasterScreen';
import { Button } from 'react-native-elements';
import {container,Content,Header,Form,Input,Item,Label} from 'native-base'
import { DrawerNavigator,StackNavigator } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';
const firebaseConfig ={
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
};
// firebase.initializeApp(firebaseConfig);

export default class Register extends React.Component {
constructor(props){
  super(props)
  this.state = ({email:'', password:''})
}
signUpUser = (email,password) => {
try{
  if(this.state.password.length<4){
    Alert.alert(
  'Hata',
  'Please fill the form!')
    return;
  }
firebase.auth().createUserWithEmailAndPassword(email,password)
}
catch(error){
  console.log(error.toString())
}
}

loginUser = (email,password) => {
  try{

    if(this.state.password.length<4){
    Alert.alert(
  'Hata',
  'Please fill the form!')
    return;
  }
    
 firebase.auth().signInWithEmailAndPassword(email,password).then(function (user){
   console.log(user)
 })
  }
catch(error){
  console.log(error.toString())
}
}

  render() {
    return (
      <View style={styles.container}>  
     
        <Text style={{fontSize:19, marginBottom:30 }}>Log In</Text>
      <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={(email)=> this.setState({email})}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={(password)=> this.setState({password})}   
        />
      
        <Button
          title='Log in'
          onPress={() => this.loginUser(this.state.email,this.state.password)}
          style={{width:350}}
        />
         <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignUp')}
          style={{width:350, marginTop:10 }}
          type="outline"
        />
      </View>
    )
  }
}
Register.navigationOptions = {
  title: 'Setting'
};
const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'white',
    margin: 5,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 16,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fafafa',
  }
})
import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,Text,Alert,
} from 'react-native'
import { Button } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {container,Content,Header,Form,Input,Item,Label} from 'native-base'
import * as firebase from 'firebase';
const firebaseConfig ={
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
};

export default class SignUp extends React.Component {
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

  render() {
    return (
      <View style={styles.container}>  
     
        <Text style={{fontSize:19, marginBottom:30 }}>Sign Up</Text>
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
          title='Sign Up'
          onPress={() => this.signUpUser(this.state.email,this.state.password)}
          style={{width:350}}
        />
      </View>
    )
  }
}
SignUp.navigationOptions = {
  title: 'SigUp'
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

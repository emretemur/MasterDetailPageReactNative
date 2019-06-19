import React from 'react'
import {
  View,
  TextInput,
  StyleSheet,Text,Alert,ListView
} from 'react-native'
import { Button } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {container,Content,Header,Form,Input,Item,Label,List,ListItem} from 'native-base'
import * as firebase from 'firebase';
const firebaseConfig ={
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
};

var data = ["Migros", "Puma MotorSport"]
export default class CreateRecord extends React.Component {
constructor(props){
  super(props);
  
   this.ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2})
  this.state = {
ListViewData: data,
newKampanyaTitle:"",
newKampanyaCode:""
  }
}

  render() {
    return (
      <View style={styles.container}>  
     
        <Text style={{fontSize:19, marginBottom:30 }}>Create New Campaingn</Text>
      <TextInput
          style={styles.input}
          placeholder='Campaign Name'
          autoCapitalize="none"
          placeholderTextColor='#333438'
          onChangeText={(newKampanyaTitle)=> this.setState({newKampanyaTitle})}
        />
        <TextInput
          style={styles.input}
          placeholder='Discount Code'
          autoCapitalize="none"
          placeholderTextColor='#333438'
          onChangeText={(newKampanyaCode)=> this.setState({newKampanyaCode})}   
        />
      
     
      <Button
          title='Sign Up'
          onPress={() => this.signUpUser(this.state.email,this.state.password)}
          style={{width:350}}
        />
        <Content style={{marginTop:100}}>
        <List dataSource={this.ds.cloneWithRows(this.state.ListViewData)}
        renderRow={data=>
        <ListItem>
        <Text>{data}</Text>
        </ListItem>
        }
        
         />
        </Content>
      </View>
    )
  }
}
CreateRecord.navigationOptions = {
  title: 'Create'
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

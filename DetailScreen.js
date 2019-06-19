'use strict';

import React from 'react';
import {
  StyleSheet,Component,
  Text,Image,Linking,TouchableOpacity,Share,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const msg = "Kampanya | Message Content";
const DetailScreen = ({navigation}) => (

  <View style={styles.container}>
  <Image   style={{width: 400, height: 160,marginTop:12}} 
  source={{uri: navigation.state.params.item.imageU}}></Image>
    <Text style={styles.title}>{navigation.state.params.item.title}</Text>
    <Text style={{marginTop:-20,marginLeft:200, fontWeight:'bold'}} >Expiry Date</Text>
    <Text style={{marginTop:4,marginLeft:200}} >16/06/2019</Text>
    <View style={{backgroundColor: '#f2f4f7', width:500,height:1,marginTop:10}} ></View>
    

  <Text style={{marginTop:20,marginLeft:-24, fontWeight:'bold'}}>{navigation.state.params.item.detail}</Text>
   <Text style={{marginTop:15,marginLeft:-180,fontWeight:'bold'}} >Campaign Conditions:</Text>
   <Text style={{marginTop:15,marginLeft:-30,width:320}} >- The campaign is valid for purchases made between 16.05.2019-16.06.2019 at puma.com.tr</Text>
   <Text style={{marginTop:5,marginLeft:-30,width:320}} >- Puma has the right to make changes to the campaign conditions.</Text>
<Text style={{marginTop:15,marginLeft:-160,fontWeight:'bold'}} >Discount Code: {navigation.state.params.item.dsccode} </Text>

  <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
  <Text style={{color: '#40a6ff',marginTop:15,marginLeft:-130,fontSize:18}}>
    {navigation.state.params.item.pagelink}
  </Text>
</TouchableOpacity>

<Button style={{backgroundColor:'white',color:"#40a6ff",marginTop:25}}  onPress={() => {
    try {
      const result =  Share.share({
        message: msg
          ,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
              this.message +="";
        } else {
          this.message +="";
        }
      } else if (result.action === Share.dismissedAction) {
        this.message +="";
      }
    } catch (error) {
      alert(error.message);
    }
  }

  } title="  Share"   icon={
    <Icon
      name="share-alt"
      size={23}
      color="white" 
    />
  }  /> 

  </View>
)

DetailScreen.navigationOptions = {
  title: 'Detail',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: '',
    alignItems: 'center',
  },
  title: {
    color: "fff",
    fontFamily:'lucida grande',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:20,
    marginLeft:-170,
    
  }
});
export default DetailScreen;

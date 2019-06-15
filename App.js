'use strict';
import React, {Component} from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'; 
import { StackNavigator } from 'react-navigation';
import MasterScreen from './MasterScreen';
import DetailScreen from './DetailScreen';
import SignUp from './SignUp';
import Home from './Home';
import Register from './Register';
import { Card } from 'react-native-paper';

const MainNavigator = createStackNavigator({
 Master: { screen: MasterScreen,    navigationOptions: ({ navigation }) => ({
      title: 'Kampanyalar'
      })
 },
 Home: { screen: Home },
 Register: { screen: Register, navigationOptions: ({ navigation }) => ({
      title: 'Log in'
      }) },
  
  Detail: { screen: DetailScreen },
  SignUp: { screen: SignUp }
});
export default createAppContainer (MainNavigator);
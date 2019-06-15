'use strict';

import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,Image,Button,Header,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import DetailScreen from './DetailScreen';
import Home from './Home';
import Register from './Register';
import CreateRecord from './CreateRecord';
import SearchInput, { createFilter } from 'react-native-search-filter';

const MasterScreen = ({ navigation }) => (
  <ItemList
    navigation={navigation}
    items={[
      {title: 'Puma MotorSport',dsccode:'driven34',pagelink:'https://tr.puma.com/',detail:'25% discount on purchases from puma.com!',                                                      
      imageU:'http://www.gsf-sportfashion.com/images/ourbrands/puma-motorsport.jpg', key: '1'},

      {title: 'Boyner',dsccode:'Babalar19',pagelink:'https://www.boyner.com.tr/',detail:'20% discount on purchases from boyner.com!',imageU:'https://cdn.webrazzi.com/uploads/2018/07/boyner.jpg', key: '2'},
   {title: 'Estee Laude',dsccode:'bkmexpress',pagelink:'https://www.esteelauder.com.tr/',detail:'Estée Lauder da %20 indirim ve ücretsiz kargo!',imageU:'https://logos-download.com/wp-content/uploads/2016/05/Estee_Lauder_logo_small.png',  key: '3'},
      {title: 'Toyzz Shop',dsccode:'bkmexpress',pagelink:'https://www.toyzzshop.com/',detail:'150 TL ve üzeri alışverişlerde anında 30 TL indirim!',imageU:'https://www.toyzzshop.com/assets/img/og-logo.jpg',  key: '4'},
      {title: 'Arzum',dsccode:'bkmexpress',pagelink:'https://www.arzum.com.tr/',detail:'40% discount on purchases from arzum.com.tr!',imageU:'https://logos-download.com/wp-content/uploads/2016/06/Arzum_logo_small.png',  key: '5'},
     
          {title: 'Bisu',dsccode:'bkmexpress',pagelink:'http://bisu.com.tr/',detail:'BiSU da BKM Express ile Ramazan Şenliği!',imageU:'https://bkmexpress.com.tr/wp-content/uploads/2019/05/bex-605x480-banner-BiSU.jpg',  key: '6'},
      {title: 'D&R',dsccode:'bkmexpress',pagelink:'https://www.dr.com.tr/',detail:'dr.com.tr de 75 TL ve üzerine anında 15 TL indirim!',imageU:'https://aquaflorya.com/data/magazalar/32/logo.png',  key: '7'},

      {title: 'Hayal Kahvesi',dsccode:'bkmexpress',pagelink:'https://www.hayalkahvesi.com.tr/',detail:'Hayal Kahvesideki harcamalarınıza % 15 indirim!',imageU:'https://bkmexpress.com.tr/wp-content/uploads/2018/12/hayalkahvesi.jpg',  key: '8'},
      {title: 'Fasttrack',dsccode:'bkmexpress',pagelink:'https://bkmexpress.com.tr/',detail:'Sabiha Gökçen de hızlı geçiş % 50 indirimli!',imageU:'https://bkmexpress.com.tr/wp-content/uploads/2018/10/lgm.jpg',  key: '9'},

      {title: 'Aytemiz',dsccode:'bkmexpress',pagelink:'https://www.aytemiz.com.tr/',detail:'Mobil den yapılacak yakıt alımlarında %3 avantaj',imageU:'https://bkmexpress.com.tr/wp-content/uploads/2018/05/AYTEMIZ.jpg',  key: '10'},
      {title: 'N11',dsccode:'bex2019',pagelink:'https://www.n11.com/',detail:'25% discount on purchases from n11.com!',imageU:'https://kurumsal.n11.com/assets/logo/logo-n11-usshape2-large.png',  key: '11'},

       {title: 'Puma MotorSport',dsccode:'driven34',pagelink:'https://tr.puma.com/',detail:'25% discount on purchases from puma.com!',                                                      
      imageU:'http://www.gsf-sportfashion.com/images/ourbrands/puma-motorsport.jpg', key: '12'},

      {title: 'Boyner',dsccode:'Babalar19',pagelink:'https://www.boyner.com.tr/',detail:'20% discount on purchases from boyner.com!',imageU:'https://cdn.webrazzi.com/uploads/2018/07/boyner.jpg', key: '13'},
   {title: 'Estee Laude',dsccode:'bkmexpress',pagelink:'https://www.esteelauder.com.tr/',detail:'Estée Lauder da %20 indirim ve ücretsiz kargo!',imageU:'https://logos-download.com/wp-content/uploads/2016/05/Estee_Lauder_logo_small.png',  key: '14'},
      {title: 'Toyzz Shop',dsccode:'bkmexpress',pagelink:'https://www.toyzzshop.com/',detail:'150 TL ve üzeri alışverişlerde anında 30 TL indirim!',imageU:'https://www.toyzzshop.com/assets/img/og-logo.jpg',  key: '15'},
      {title: 'Arzum',dsccode:'bkmexpress',pagelink:'https://www.arzum.com.tr/',detail:'40% discount on purchases from arzum.com.tr!',imageU:'https://logos-download.com/wp-content/uploads/2016/06/Arzum_logo_small.png',  key: '16'},
     
          {title: 'Bisu',dsccode:'bkmexpress',pagelink:'http://bisu.com.tr/',detail:'BiSU da BKM Express ile Ramazan Şenliği!',imageU:'https://bkmexpress.com.tr/wp-content/uploads/2019/05/bex-605x480-banner-BiSU.jpg',  key: '17'},
      {title: 'D&R',dsccode:'bkmexpress',pagelink:'https://www.dr.com.tr/',detail:'dr.com.tr de 75 TL ve üzerine anında 15 TL indirim!',imageU:'https://aquaflorya.com/data/magazalar/32/logo.png',  key: '18'},

      {title: 'Hayal Kahvesi',dsccode:'bkmexpress',pagelink:'https://www.hayalkahvesi.com.tr/',detail:'Hayal Kahvesideki harcamalarınıza % 15 indirim!',imageU:'https://bkmexpress.com.tr/wp-content/uploads/2018/12/hayalkahvesi.jpg',  key: '19'},
      {title: 'Fasttrack',dsccode:'bkmexpress',pagelink:'https://bkmexpress.com.tr/',detail:'Sabiha Gökçen de hızlı geçiş % 50 indirimli!',imageU:'https://bkmexpress.com.tr/wp-content/uploads/2018/10/lgm.jpg',  key: '20'},

      {title: 'Aytemiz',dsccode:'bkmexpress',pagelink:'https://www.aytemiz.com.tr/',detail:'Mobil den yapılacak yakıt alımlarında %3 avantaj',imageU:'https://bkmexpress.com.tr/wp-content/uploads/2018/05/AYTEMIZ.jpg',  key: '21'},
      {title: 'N11',dsccode:'bex2019',pagelink:'https://www.n11.com/',detail:'25% discount on purchases from n11.com!',imageU:'https://kurumsal.n11.com/assets/logo/logo-n11-usshape2-large.png',  key: '22'},
  
    ]}
  />
);

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class ItemList extends React.PureComponent {

  _scrollPos = new Animated.Value(0);
  _scrollSinkY = Animated.event(
    [{nativeEvent: { contentOffset: { y: this._scrollPos } }}],
    {useNativeDriver: true},
  );

  _onPressItem = (item) => {
    this.props.navigation.navigate('Detail', {
      item,
    });
  };

  _onRefresh = () => {
  };

  _renderItem = ({item}) => {
    if (Platform.OS === 'ios') {
      return (
       
        <ListItem
          key={item.key}
          onPress={() => this._onPressItem(item)}
          title={item.title}
          
leftAvatar={{ width:100, height:60, rounded:false, source: { uri: item.imageU }  }}
          underlayColor="#d9d9d9"
        />
      );
    } else {
      return (

        <TouchableWithoutFeedback onPress={() => this._onPressItem(item)}>
          <View style={styles.item}>
            <Text style={styles.itemKey}>{item.key}</Text>
            <Text style={styles.itemTitle}>{item.title}</Text>
            
          </View>
        </TouchableWithoutFeedback>
      );
    }
  };

  render() {
    return (

      <AnimatedFlatList
        data={this.props.items}
        getItemLayout={(data, index) => ({
          length: ITEM_AND_SEPARATOR_HEIGHT,
          offset: ITEM_AND_SEPARATOR_HEIGHT * index,
          index
        })}
        numColumns={1}
        onRefresh={this._onRefresh}
        onScroll={this._scrollSinkY}
        refreshing={false}
        renderItem={this._renderItem}
        style={styles.list}
      />
    );
  }
}
MasterScreen.navigationOptions = {
  title: 'Kampanyalar'
};

const ITEM_HEIGHT = 48;
const ITEM_AND_SEPARATOR_HEIGHT = ITEM_HEIGHT + (Platform.OS === 'ios') ? Dimensions.hairlineWidth : 0;
const styles = StyleSheet.create({
  list: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 0,
      },
      android: {
        paddingTop: 8,
      },
    }),
  },
  item: {
    width: Dimensions.get('window').width,
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
  },
  itemKey: {
    margin: 16,
    fontSize: 14,
  },
  itemTitle: {
    margin: 16,
    fontSize: 14,
  },
});
export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen:MasterScreen  },
    Create: { screen:CreateRecord  },
    Settings: { screen:Register  },
    
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Settings') {
          iconName = `ios-settings`;
        }

      
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));

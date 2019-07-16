/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import Category from './components/Explore/Category'
import Home from './components/Explore/Home'

const { height, width } = Dimensions.get('window')

export default class Explore extends Component {

  componentWillMount() {
    this.startHeaderHeight = 80
    if(Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 20,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 4,
                marginTop: Platform.OS == 'android' ? 30 : null,
              }}>
              <Icon name="md-search" size={20} style={{marginRight: 10}}/>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try 'Tokyo'"
                placeholderTextColor="grey"
                style={{flex: 1, fontWeight: '700', backgroundColor: 'white'}}
              />
            </View>
          </View>
          <ScrollView scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
              <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                What can we help you find, Matthieu?
              </Text>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require('../assets/home.jpg')} name="Stays" desc="Homes & more"/>
                  <Category imageUri={require('../assets/activites.jpg')} name="Experiences" desc="Hosted activites"/>
                  <Category imageUri={require('../assets/trips.jpg')} name="Adventures" desc="Hosted trips"/>
                  <Category imageUri={require('../assets/restaurant.jpg')} name="Restaurants" desc="Top-rated eats"/>
                </ScrollView>
              </View>
              <View style={{marginTop: 40, paddingHorizontal: 20}}>
                <Text style={{fontSize: 24, fontWeight: '700'}}>
                  Introducing Airbnb Luxe
                </Text>
                <Text style={{marginTop: 10, fontWeight: '100'}}>
                  Extraordinary homes with five-star everything
                </Text>
                <View style={{width: width-40, height: 200, marginTop: 20}}>
                  <Image
                    source={require('../assets/deluxe.jpg')}
                    style={{flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor:'#dddddd'}}
                  />
                </View>
              </View>
            </View>
            <View style={{marginTop: 40}}>
              <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                Places to stay around the world
              </Text>
              <View style={{paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <Home width={width} type={'VERIFIED ⋅ MENAGGIO'} name={'Lakeside Home with Views of Lake Como'} price={135} rating={5}/>
                <Home width={width} type={'ENTIRE HOUSE ⋅ KOTO-KU'} name={'Decoboco hanare'} price={74} rating={5}/>
                <Home width={width} type={'ENTIRE APARTMENT ⋅ RIVA'} name={'Lussuoso. Vista incantevole.'} price={101} rating={5}/>
                <Home width={width} type={'ENTIRE APARTMENT ⋅ ROME'} name={'Pettinarihome Campo de FIORI'} price={124} rating={5}/>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

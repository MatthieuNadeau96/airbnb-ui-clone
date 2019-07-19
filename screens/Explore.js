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
  Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import Category from './components/Explore/Category'
import Home from './components/Explore/Home'
import Tag from './components/Explore/Tag'

const { height, width } = Dimensions.get('window')

export default class Explore extends Component {

  componentWillMount() {

    this.scrollY = new Animated.Value(0)

    this.startHeaderHeight = 80
    this.endHeaderHeight = 50
    if(Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
      this.endHeaderHeight = 60 + StatusBar.currentHeight
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange:[0,50],
      outputRange:[this.startHeaderHeight,this.endHeaderHeight],
      extrapolate: 'clamp'
    })

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange:[this.endHeaderHeight, this.startHeaderHeight],
      outputRange:[0, 1],
      extrapolate: 'clamp'
    })

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange:[this.endHeaderHeight, this.startHeaderHeight],
      outputRange:[-30, 10],
      extrapolate: 'clamp'
    })
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Animated.View style={{height: this.animatedHeaderHeight, backgroundColor: 'white'}}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 20,
                borderRadius: 3,
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
            <Animated.View style={{flexDirection: 'row', marginHorizontal: 20, position: 'relative', top: this.animatedTagTop, opacity: this.animatedOpacity}}>
              <Tag name="Dates"/>
              <Tag name="Guests"/>
            </Animated.View>
          </Animated.View>
          <ScrollView scrollEventThrottle={16} onScroll={Animated.event([{nativeEvent:{contentOffset:{y: this.scrollY}}}])}>
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
                <Home
                  imageUri={require('../assets/lakeside.jpg')}
                  width={width}
                  type={'VERIFIED ⋅ MENAGGIO'}
                  name={'Lakeside Home with Views of Lake Como'}
                  price={135}
                  rating={5}
                />
                <Home
                  imageUri={require('../assets/koto-ku.jpg')}
                  width={width}
                  type={'ENTIRE HOUSE ⋅ KOTO-KU'}
                  name={'Decoboco hanare'}
                  price={74}
                  rating={5}
                />
                <Home
                  imageUri={require('../assets/riva.jpg')}
                  width={width}
                  type={'ENTIRE APARTMENT ⋅ RIVA'}
                  name={'Lussuoso. Vista incantevole.'}
                  price={101}
                  rating={5}
                />
                <Home
                  imageUri={require('../assets/fiori.jpg')}
                  width={width}
                  type={'ENTIRE APARTMENT ⋅ ROME'}
                  name={'Pettinarihome Campo de FIORI'}
                  price={124}
                  rating={5}
                />
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

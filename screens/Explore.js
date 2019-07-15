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
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

export default class Explore extends Component {

  componentWillMount() {
    this.startHeaderHeight = 80
    if(Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  render() {
    return (
      <SafeAreaView>
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
          <View scrollEventThrottle={16}>
            <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
              <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
                What can we help you find, Matt?
              </Text>
              <View style={{height: 130, marginTop: 20}}>
                <ScrollView>
                  <View style={{height: 130, width: 130, marginLeft: 20, borderWidth: 0.8, borderColor: '#dddddd'}}>
                    <View style={{flex: 2}}>
                      <Image
                        source={require('../assets/home.jpg')}
                        style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                      <Text>Home</Text>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
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

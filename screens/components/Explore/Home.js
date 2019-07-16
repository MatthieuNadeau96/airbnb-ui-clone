import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, borderWidth: 1, borderColor: '#dddddd'}}>
        <View style={{flex: 1}}>
          <Image
            style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
            source={require('../../../assets/home.jpg')}
          />
        </View>
        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10}}>
          <Text style={{fontSize: 10, color: '#b63838', fontWeight: 'bold'}}>ENTIRE HOUSE ⋅ KOTO-KU</Text>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>Decoboco hanare</Text>
          <Text style={{fontSize: 10}}>$74/night</Text>
        </View>
      </View>
    );
  }
}
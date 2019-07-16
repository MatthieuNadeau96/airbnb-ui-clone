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
      <View style={{marginTop: 40}}>
        <Text style={{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}}>
          Places to stay around the world
        </Text>
        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <View style={{width: this.props.width/2, height: this.props.width/2, borderWidth: 1, borderColor: '#dddddd'}}>
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
        </View>
      </View>
    );
  }
}

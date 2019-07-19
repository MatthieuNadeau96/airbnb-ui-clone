import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import StarRating from 'react-native-star-rating'

export default class Home extends Component {
  render() {
    return (
      <View style={{width: this.props.width / 2 - 30, height: this.props.width / 2 - 30, marginVertical: 20}}>
        <View style={{flex: 1}}>
          <Image
            style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
            source={this.props.imageUri}
          />
        </View>
        <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
          <Text style={{fontSize: 9, color: '#b63838', fontWeight: 'bold'}}>{this.props.type}</Text>
          <Text style={{fontSize: 12, fontWeight: 'bold'}}>{this.props.name}</Text>
          <Text style={{fontSize: 10}}>${this.props.price}/night</Text>
          <StarRating
            disable={true}
            maxStars={5}
            rating={this.props.rating}
            starSize={10}
            fullStarColor={'#20938f'}
          />
        </View>
      </View>
    );
  }
}

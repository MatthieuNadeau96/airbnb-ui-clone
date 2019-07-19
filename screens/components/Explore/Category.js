import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export default class Category extends Component {
  render() {
    return (
      <View style={{height: 130, width: 130, marginLeft: 20, borderWidth: 0.8, borderColor: '#dddddd', borderRadius: 3}}>
        <View style={{flex: 2}}>
          <Image
            source={this.props.imageUri}
            style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
          />
        </View>
        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
          <Text>{this.props.name}</Text>
          <Text style={{fontSize: 10, color: '#666666'}}>{this.props.desc}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

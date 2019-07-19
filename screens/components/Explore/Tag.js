/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Tag extends Component {
  render() {
    return (
      <View style={{minHeight: 20, minWidth: 40, padding: 5, backgroundColor: 'white', borderColor: '#dddddd', borderWidth: 0.5, borderRadius: 3, marginRight: 5}}>
        <Text style={{fontWeight: '100', fontSize: 10}}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

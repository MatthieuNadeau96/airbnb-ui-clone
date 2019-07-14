import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'

import Explore from './screens/Explore'
import Inbox from './screens/Inbox'
import Saved from './screens/Saved'
import Trips from './screens/Trips'

class function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

export default createBottomTabNavigator({
  Explore: {
    screen: Explore
  },
  Saved: {
    screen: Inbox
  },
  Trips: {
    screen: Saved
  },
  Inbox: {
    screen: Trips
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class Sample extends Component {
  constructor() {
    super()
  }

  render() {
    return (
        <Text style={styles.welcome}>
          Welcome to React Native!
          This is written in src/components/sample/index.js
        </Text>  
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

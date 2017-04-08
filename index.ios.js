// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Welcome from './src/components/welcome';
import Instruction from './src/components/instruction';

export default class ReactNativeCalculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome>test</Welcome>
        <Instruction text="To get started, edit index.ios.js"></Instruction>
        <Instruction text="Press Cmd+R to reload, Cmd+D or shake for dev menu"></Instruction>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ReactNativeCalculator', () => ReactNativeCalculator);

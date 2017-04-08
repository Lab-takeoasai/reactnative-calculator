// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Welcome from './src/components/welcome';
import Instruction from './src/components/instruction';
import CalcButtons from './src/components/calc-buttons';

export default class ReactNativeCalculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Welcome />
        <CalcButtons />
        <Instruction text="To get started, edit index.ios.js" />
        <Instruction text="Press Cmd+R to reload, Cmd+D or shake for dev menu" />
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

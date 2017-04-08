// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class Instruction extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Text style={styles.instructions}>
          {this.props.text}
        </Text> 
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

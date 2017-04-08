// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Button
} from 'react-native';

export default class CalcButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Button
          onPress={this.onPressCalcButton}
          title={this.props.value}
          color="#841584"
        />
    );
  }

  onPressCalcButton = () => {
    console.log(Number(this.props.value));
  };
};

const styles = StyleSheet.create({
  
});

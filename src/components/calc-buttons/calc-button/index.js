// @flow

import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text
} from 'react-native';

export default class CalcButton extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                onPress={this.onPressCalcButton}
            >
                <Text style={styles.text}>{this.props.value}</Text>
            </TouchableHighlight>
        );
    }
    
    onPressCalcButton = () => {
        console.log(this.props.value);
    };
};

const styles = StyleSheet.create({
    button: {
        width: 50,
    },
    text: {
        textAlign: "center",
    },
});

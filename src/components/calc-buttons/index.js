// @flow

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import CalcButton from './calc-button';

export default class CalcButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <CalcButton value="1" />
                    <CalcButton value="2" />
                    <CalcButton value="3" />
                    <CalcButton value="/" />
                </View>
                <View style={styles.row}>
                    <CalcButton value="4" />
                    <CalcButton value="5" />
                    <CalcButton value="6" />
                    <CalcButton value="*" />
                </View>
                <View style={styles.row}>
                    <CalcButton value="7" />
                    <CalcButton value="8" />
                    <CalcButton value="9" />
                    <CalcButton value="-" />
                </View>
                <View style={styles.row}>
                    <CalcButton value="0" />
                    <CalcButton value="." />
                    <CalcButton value="=" />
                    <CalcButton value="+" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

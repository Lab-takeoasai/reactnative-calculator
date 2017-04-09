// @flow

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';

class CalcOutput extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.calc.result}</Text>
                <Text>{this.props.calc.current}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
});

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(CalcOutput);
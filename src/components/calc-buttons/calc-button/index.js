// @flow

import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../../actions';

class CalcButton extends Component {
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
        console.log(this.props);
    };
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
    },
    text: {
        textAlign: "center",
    },
});

function mapStateToProps(state) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators(Actions, dispatch),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CalcButton);

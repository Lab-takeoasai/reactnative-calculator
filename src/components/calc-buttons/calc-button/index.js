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
    static propTypes = {
        value: React.PropTypes.string.isRequired
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
        const value = this.props.value;
        if (Number(value) >= 0) {
            this.props.number(Number(value));
        } else {
            switch (value) {
                case '+': this.props.add(); break;
                case '-': this.props.minus(); break;
                case '*': this.props.multiply(); break;
                case '/': this.props.divide(); break;
                case '=': this.props.equal(); break;
                case 'c': this.props.clear(); break;
                default: break;
            }
        }
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

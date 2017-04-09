// @flow

import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { connect } from 'react-redux';

import CalcButtons from './components/calc-buttons';
import CalcOutput from './components/calc-output';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <CalcOutput />
                <CalcButtons />
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

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(App);

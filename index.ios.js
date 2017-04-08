// @flow

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import Welcome from './src/components/welcome';
import Instruction from './src/components/instruction';
import Reducers from './src/reducers';
import App from './src/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Reducers);

export default class ReactNativeCalculator extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
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

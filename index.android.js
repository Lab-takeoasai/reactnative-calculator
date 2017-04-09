// @flow

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
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

AppRegistry.registerComponent('ReactNativeCalculator', () => ReactNativeCalculator);

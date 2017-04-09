// @flow

import { combineReducers } from 'redux';
import * as calc from './calc';

export default combineReducers({
    calc: calc.default
});

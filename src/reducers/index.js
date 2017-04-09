// @flow

import { combineReducers } from 'redux'
import * as Actions from '../actions';
 
export default combineReducers({
    test
});

function test(state = {}, action) {
    return state;
}
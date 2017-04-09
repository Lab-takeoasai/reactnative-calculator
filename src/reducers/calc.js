// @flow

import * as Actions from '../actions';

export default function calc(state = { current: 0, result: 0 }, action) {
    switch (action.type) {
        case Actions.NUMBER:
            return Object.assign({}, state, {
                current: state.current * 10 + action.value,
            });
        case Actions.ADD:
            return Object.assign({}, state, {
                current: 0,
                result: state.result + state.current,
            });
        case Actions.MINUS:
            return Object.assign({}, state, {
                current: 0,
                result: state.result - state.current,
            });
        case Actions.MULTIPLY:
            return Object.assign({}, state, {
                current: 0,
                result: state.result * state.current,
            });
        case Actions.DIVIDE:
            return Object.assign({}, state, {
                current: 0,
                result: state.result / state.current,
            });
        case Actions.EQUAL:
            return Object.assign({}, state, {
                current: 0,
                result: state.current,
            });
        case Actions.CLEAR:
            return Object.assign({}, state, {
                current: 0,
                result: state.result,
            });
        default: return state;
    }
}
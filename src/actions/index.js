// @flow

export const ADD = 'ADD';
export const MINUS = 'MINUS';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const NUMBER = 'NUMBER';
export const CLEAR = 'CREAR';
export const EQUAL = 'EQUAL';

export function number(value: number) {
  return {
    type: NUMBER,
    value: value,
  };
}

export function clear() {
  return {
    type: CLEAR,
  };
}

export function equal() {
  return {
    type: EQUAL,
  };
}

export function add() {
  return {
    type: ADD,
  };
}

export function minus() {
  return {
    type: MINUS,
  };
}

export function multiply() {
  return {
    type: MULTIPLY,
  };
}

export function divide() {
  return {
    type: DIVIDE,
  };
}

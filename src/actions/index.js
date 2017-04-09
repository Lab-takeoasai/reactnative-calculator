// @flow

export const ADD = 'ADD';
export const MINUS = 'MINUS';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const NUMBER = 'NUMBER';
export const DOT = 'DOT';
export const EQUAL = 'EQUAL';

export function number(value) {
  return {
    type: NUMBER,
    value: value,
  };
}

export function dot() {
  return {
    type: DOT,
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

import React from 'react';
import { Text } from 'react-native';
import { storiesOf, action, linkTo } from '@kadira/react-native-storybook';

import Reducers from '../../src/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(Reducers);

import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

import CalcOutput from '../../src/components/calc-output';
import CalcButtons from '../../src/components/calc-buttons';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Calc', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      {getStory()}
    </Provider>
  ))
  .add('output', () => (
    <CalcOutput />
  ))
  .add('buttons', () => (
    <CalcButtons />
  ));

storiesOf('Button', module)
  .addDecorator(getStory => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));

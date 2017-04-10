import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

export default function CenterView(props) {
  return (
    <View style={style.main}>
      <Text>CenterView</Text>
      {props.children}
    </View>
  );
}

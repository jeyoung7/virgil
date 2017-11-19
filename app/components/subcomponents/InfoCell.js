import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import firebase from "firebase";
import { StackNavigator } from "react-navigation";

import {TextCell} from './TextCell';
const InfoCell = (props) => {
  const { textStyle, viewStyle,logo,buttonStyle } = styles;
  const { name, nation, religion } = props;
  console.log(nation);
    return (
    <View style={viewStyle}>
      <TextCell style = {{padding: 20}} k="name" val = {name}/>
      <TextCell style = {{padding: 20}}  k="nation" val = {nation}/>
      <TextCell style = {{padding: 20}} k="religion" val = {religion}/>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    position: 'absolute',
    height: 250,
    width: 300,
    top: 50,
    left: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flex: 1,
    opacity: .7
  },
  textStyle: {
    fontSize: 20

  },
  buttonStyle: {
    marginTop: 30,
    opacity: .7

  },
  logo: {
    width: 100,
    alignSelf: 'center',
    marginTop: 20,
    height: 40,
    opacity: .9

  },
};

export { InfoCell };

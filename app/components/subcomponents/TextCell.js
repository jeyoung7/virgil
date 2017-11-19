import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import firebase from "firebase";
import { StackNavigator } from "react-navigation";

const TextCell = (props) => {
  const { textStyle, viewStyle,logo,buttonStyle } = styles;
  const { k, val }= props;

    return (

    <View style={viewStyle}>
      <Text style={styles.heavyStyle} >
      {k}
      </Text>
      <Text style={styles.textStyle} >
      {val}
      </Text>

    </View>
  );
};

const styles = {
  viewStyle: {
    alignItems: 'flex-start',
    position: 'relative',
    height: 30,
    flex: 1,
    flexDirection: 'row',
    opacity: .7
  },
  textStyle: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue',
    color: '#848484',
    padding:10

  },
  heavyStyle: {
      fontFamily: 'HelveticaNeue-Bold',
      fontSize: 14,
      color: '#848484',
      padding:10
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

export { TextCell };

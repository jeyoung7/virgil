import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import firebase from "firebase";
import { StackNavigator } from "react-navigation";

const Header = (props) => {
  const { textStyle, viewStyle,logo,buttonStyle } = styles;
  return (
    <View style={viewStyle}>

    <Button
      style = {buttonStyle}
      primary
      title="Logout"
      //style={styles.rightButton}
      onPress={() => {
        firebase
          .auth()
          .signOut()
          .then(
            () => {
              this.navigate("Login");
            },
            function(error) {
              // An error happened.
            }
          );
      }}
    >
      Log out
    </Button>
    <Image style = {logo} source={require("../../virgilheader.png")} />

    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F9A12D",
    alignItems: 'flex-start',
    position: 'relative',
    height: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    flex: 1,
    flexDirection: 'row',
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

export { Header };

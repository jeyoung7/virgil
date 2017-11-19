import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  TextInput,
  TouchableOpacity, Image
} from "react-native";
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import Profile from './Profile';


import { StackNavigator } from "react-navigation";
import firebase from "firebase";


export default class Main extends Component {
  state = {
    name: ""
  };
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#F9A12D",
    },
    headerLeft: null
  };
  render() {
    return (
      <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      customMapStyle={require('./mapStyle.json')}
      onRegionChange={this.onRegionChange}
     initialRegion={{
      latitude: 36.0019,
       longitude: -78.9401,
       latitudeDelta: 9.5,
       longitudeDelta: 9.5,
     }}
      >
      <Button
        primary
        title="Logout"
        //style={styles.rightButton}
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(
              () => {
                this.props.navigation.navigate("Login");
              },
              function(error) {
                // An error happened.
              }
            );
        }}
      >
        Log out
      </Button>
      <Button
        style = {{ padding: 10, margin: 10 }}
        primary
        title="Profile"
        //style={styles.rightButton}
        onPress=  {() => this.props.navigation.navigate("Profile")}      >
        Log out
      </Button>
      </MapView>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20
  },
  nameInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    margin: 20
  },
  buttonStyle: {
    marginLeft: 20,
    margin: 20
  },
  containerl: {
    flex: 1
  },
  map: {
  position: 'absolute',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
},
logo: {
  width: 100,
  left: 50,
  top: 0,
  marginTop: 20,
  height: 50,
  opacity: .9

}
});

AppRegistry.registerComponent("Main", () => Main);

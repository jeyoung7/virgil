import _ from 'lodash';
import React, { Component } from 'react';
import firebase from 'firebase';
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

import { StackNavigator } from "react-navigation";

import { InfoCell } from './subcomponents/InfoCell';


export default class Profile extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nation: "",
      religion: "",
    }

}
  componentDidMount() {

    var userId = firebase.auth().currentUser.uid;
    const data = firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
      let nation = snapshot.val().nation;
      let name = snapshot.val().name;
      let religion = snapshot.val().religion;
    this.setState({
     name: name,
     nation: nation,
     religion: religion,
   });

 });
    // ...
    }


  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#F9A12D"
    },
    headerLeft: null
  };
  render() {

    return (
      <View style={{backgroundColor: "#F9A12D",shadowColor: '#000', width: '100%', height: '100%',
      paddingTop: 10,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 2}}>

        <Button
          primary
          title="Back"
          //style={styles.rightButton}
          onPress= {() => this.props.navigation.navigate("Main")}

        >
          Log out
        </Button>
        <InfoCell name={this.state.name} religion={this.state.religion } nation={this.state.nation } />



      </View>
    );
  }
}

AppRegistry.registerComponent("Profile", () => Profile);

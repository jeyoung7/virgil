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



export default class EditProfile extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nation: "",
      religion: "",
      politics: "",
    }

}
componentDidMount() {

  var userId = firebase.auth().currentUser.uid;
  const data = firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
    let nation = snapshot.val().nation;
    let name = snapshot.val().name;
    let religion = snapshot.val().religion;
    let politics = snapshot.val().politics;

  this.setState({
   name: name,
   nation: nation,
   religion: religion,
   politics: politics
 });

});
  // ...
  }
  changeData() {
    var userId = firebase.auth().currentUser.uid;

    firebase.database().ref('users/'+userId+'/')
      .set({
        name: this.state.name,
        nation: this.state.nation,
        religion: this.state.religion,
        politics: this.state.politics
      });
      this.props.navigation.navigate("Profile");
 }
    // ...



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
          onPress= {() => this.props.navigation.navigate("Profile")}
        >


          Log out
        </Button>
        <TextInput
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
          style={styles.input}
          placeholder={this.state.name}
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.emailInput.focus()}
        />
        <TextInput
          value={this.state.nation}
          onChangeText={nation => this.setState({ nation })}
          style={styles.input}
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          ref={input => (this.nationInput = input)}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={this.state.nation}
        />
        <TextInput
          value={this.state.religion}
          onChangeText={religion => this.setState({ religion })}
          style={styles.input}
          placeholder={this.state.religion}
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
        />
        <TextInput
          value={this.state.politics}
          onChangeText={politics => this.setState({ politics })}
          style={styles.input}
          placeholder={this.state.politics}
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
        />
        <Button
          primary
          title="Save"
          //style={styles.rightButton}
          onPress= {() => this.changeData()}
        >
        Save
        </Button>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F9A12D",
    padding: 10,
    paddingTop: 30
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 150
  },
  input: {
    height: 40,
    width: 350,
    marginBottom: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    paddingHorizontal: 10
  },
  button: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: 15,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "700"
  },
  subtext: {
    color: "#ffffff",
    width: 160,
    textAlign: "center",
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20
  },
  error: {
    margin: 8,
    marginBottom: 0,
    color: "red",
    textAlign: "center"
  }
});

AppRegistry.registerComponent("EditProfile", () => EditProfile);

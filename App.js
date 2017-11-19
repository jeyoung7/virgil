import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';

import Login from './app/components/Login';
import Main from './app/components/Main';
import Register from './app/components/Register';
import Profile from './app/components/Profile';
import EditProfile from './app/components/EditProfile';

import ForgetPassword from './app/components/ForgetPassword';

import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';




class Home extends Component<{}> {
  constructor() {
    super();
    this.state = {
      page: 'connection',
      loading: true,
      authenticated: false
    };

      const config = {
    apiKey: 'AIzaSyBoe9m4h4zEVY1UCelPorW2myrKYV2LuvY',
    authDomain: 'virgil-bb52c.firebaseapp.com',
    databaseURL: 'https://virgil-bb52c.firebaseio.com',
    projectId: 'virgil-bb52c',
    storageBucket: 'virgil-bb52c.appspot.com',
    messagingSenderId: '49606052410'
     };
    firebase.initializeApp(config);
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null
    },
    header: null
  };

  componentDidMount() {


    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        //firebase.messaging().requestPermissions();
        //firebase.messaging().subscribeToTopic('chat');
        this.setState({ loading: false, authenticated: true });
      } else {
        //firebase.messaging().unsubscribeFromTopic('chat');
        this.setState({ loading: false, authenticated: false });
      }
    });
  }

  render() {
    if (this.state.loading) return null; // Render loading/splash screen etc
    if (!this.state.authenticated) {
      return <Login navigation={this.props.navigation} />;
    }
    return <Main navigation={this.props.navigation} />;
  }
}

export default (App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register'
    }
  },
  ForgetPassword: {
    screen: ForgetPassword,
    navigationOptions: {
      title: 'ForgetPassword'
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'Main',
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      title: 'EditProfile',
    }
  }
}));

const styles = StyleSheet.create({});

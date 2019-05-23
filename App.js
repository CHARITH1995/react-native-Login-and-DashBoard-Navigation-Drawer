import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { View, StyleSheet, StatusBar,ScrollView , Text } from 'react-native';
import appNavigator from './src/appNavigator';

const AppContainer = createAppContainer(appNavigator);

export default class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}




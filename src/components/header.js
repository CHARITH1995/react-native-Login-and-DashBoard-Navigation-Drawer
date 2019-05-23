import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation';

export default class Upper extends Component {

  render() {
    return (
            <Header >
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} >
              <Image source={require('../assets/images/hamburger.png')} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>{this.props.name}</Title>
          </Body>
          <Right />
        </Header>
    );
  }
};

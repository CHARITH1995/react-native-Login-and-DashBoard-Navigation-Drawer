import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  Image,
  TouchableHighlight,
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { DrawerActions } from 'react-navigation';
import Upper from '../components/header';
import Lower from '../components/footer';
import Alert from '../components/alert';
import Grid from '../components/grideView';
export default class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      advertisments: [],
      showAlert: false,
    };
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
      message: ''
    });
  };

  componentDidMount() {
    fetch("https://www.patpat.lk/api/read.php?view=car&page=0", {
      method: "get",
    }).then(function (response) {
      return response.json();
    }).then((details) => {
      if (JSON.stringify(details.data).length == 0) {
        this.setState({
          message: details.status_message,
          showAlert: true
        })
        this.showAlert();
      } else {
        this.setState({
          advertisments: details.data
        })
      }
    });
  }

  render() {
    return (
      <Container>
        <Alert
          msg={this.state.message}
          show={this.state.showAlert}
          hide={this.hideAlert}
        />
        <Upper navigation={this.props.navigation}
          name="Product List" />
        <Content>
            <Grid advertisments = {this.state.advertisments}/>
        </Content>
        <Lower />
      </Container>
    );
  }
};


const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 2,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

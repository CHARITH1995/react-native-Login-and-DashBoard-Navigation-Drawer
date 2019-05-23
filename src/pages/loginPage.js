import React, { Component } from 'react';
import { View, StyleSheet, StatusBar,ScrollView } from 'react-native';
import Form from '../components/form';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style={styles.container}>
                <Form navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#03506D',
    },
  });
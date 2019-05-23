import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, StatusBar, TextInput,
    Button,ToastAndroid,
    TouchableHighlight,
} from 'react-native';
import Alert from './alert';
import base64 from 'react-native-base64';
var ls = require('react-native-local-storage');


export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            message:'',
            showAlert:false,

         }
         this.handleSubmit= this.handleSubmit.bind(this);
         this.handlePassword = this.handlePassword.bind(this);
         this.handleUserName = this.handleUserName.bind(this);
         this.hideAlert = this.hideAlert.bind(this);
         this.showAlert = this.showAlert.bind(this);
    }
    showAlert = () => {
        this.setState({
            showAlert: true,
        });
    };

    hideAlert = () => {
        this.setState({
            showAlert: false,
            message: ''
        });
    };
     handleUserName = (text) => {
        this.setState({username: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }

    handleSubmit(){
        if ((this.state.username && this.state.password) != '') {
            let encodedPassword = base64.encode(this.state.password);
            const user = {
                username: this.state.username,
                password: encodedPassword
            }
            fetch("https://www.patpat.lk/api/customer.php?customer=login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(user)
            }).then(function (response) {
                return response.json();
            }).then((details) => {
                if(details.data === null){
                    this.setState({
                        message:details.status_message,
                    });
                }else{
                    this.setState({
                        message:details.status_message,
                        username:'',
                        password:''
                    });
                    ls.save('token', details.data.token);
                    this.props.navigation.navigate('LandPage');
                }
            });
        }else{
            this.setState({
                message:'check your input fields!'
            })
        }
        this.showAlert();
    }
    render() {
        return (
            <View style={styles.container}>
                <Alert
                    msg={this.state.message}
                    show={this.state.showAlert}
                    hide={this.hideAlert}
                />
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Username"
                        name = "username"
                        value = {this.state.username}
                        underlineColorAndroid='transparent' 
                        onChangeText = {this.handleUserName}/>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        name ="password"
                        value = {this.state.password}
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText = {this.handlePassword}
                        />
                </View>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}onPress={this.handleSubmit}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'40%'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:35,
        borderBottomWidth: 1,
        width:350,
        height:80,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:50,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,   
        color: '#000000',
        fontSize:15,
        borderRadius:50,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center',
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:100,
      width:150,
      borderRadius:80,
    },
    loginButton: {
      backgroundColor: "#0A93C8",
    },
    loginText: {
      color: 'white',
      fontSize: 20, 
    }
});
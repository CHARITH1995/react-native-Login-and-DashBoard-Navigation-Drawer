import  React, { Component } from 'react';
import {
    Platform, 
    StyleSheet, 
    Text,
     View,
    TouchableOpacity, 
    TouchableHighlight, 
    Image
} from 'react-native';
var ls = require('react-native-local-storage');

import  
{
 Dialog,
SlideAnimation,
 DialogContent, 
 DialogButton, 
 DialogFooter, 
 DialogTitle 
} from 'react-native-popup-dialog';


const Logout = (props) => {
   return (
       <View>
           {
               
           }
       </View>
   )
}

export default Logout;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '10%',
    },
    footer: {
        marginTop: '15%',
        marginBottom: '-8%'
    },
    msgtext: {
        marginTop: '2%',
        color: '#2E4053',
        fontSize: 15,
    },
});

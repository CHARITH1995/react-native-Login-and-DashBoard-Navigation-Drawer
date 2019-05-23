import React, { Component } from 'react';
import {
    createDrawerNavigator,
    createAppContainer,
} from 'react-navigation';
import {
    Text , Button 
} from 'react-native';
import Login from '../pages/loginPage'
import Dashboard from '../pages/dashBoard';
import product from '../pages/productList';
import { Left } from 'native-base';

const myDrawer = createDrawerNavigator (
    {
        DashBoard : { screen : Dashboard },
        Product :{ screen : product },
        Logout : {screen : Login}
    },{
        initialRouteName:'DashBoard',
        drawerWidth :300 ,
        hideStatusBar:true,
        drawerPosition : Left
    }
);

const Appcontainer = createAppContainer(myDrawer);

export default class Drawer extends Component {
    render(){
        return (
            <Appcontainer />
        )
    }
}


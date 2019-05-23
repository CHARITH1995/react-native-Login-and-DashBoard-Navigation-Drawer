import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './pages/loginPage';
import LandPage from './pages/landPage';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  LandPage:{
      screen:LandPage,
  },
},{ 
    initialRouteName: 'Login',
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false
        }
}
);

export default AppNavigator;
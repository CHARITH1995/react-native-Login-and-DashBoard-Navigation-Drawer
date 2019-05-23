import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  TouchableHighlight,
} from 'react-native';

const Grid = (props) =>{
return (
    <View style={styles.MainContainer}>
            {
              props.advertisments.length != 0 ? (
                <View style={styles.MainContainer}>
                  <FlatList
                    data={props.advertisments}
                    renderItem={({ item }) => <View style={styles.GridViewBlockStyle}>
                      <Text style={styles.GridViewInsideTextItemStyle} >{item.title} </Text>
                    </View>}
                    numColumns={2}
                  />
                </View>
              ) : (
                  <View>
                  </View>
                )
            }
          </View>
)
}

export default Grid;

const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      margin: 10,
    },
    GridViewBlockStyle: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      height: 100,
      margin:1,
      backgroundColor:'#00BCD4'
  
    },
    GridViewInsideTextItemStyle: {
      color: '#fff',
      padding:5,
      fontSize: 18,
      justifyContent: 'center',
  
    },
  });
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
} from 'react-native';

const listView = (props) => {
    return (
        <View>
            {
                props.advertisments.map((item, index) =>
                    <View style={styles.MainContainer}
                        key={index}>
                        <TouchableOpacity style={styles.name} onPress={() =>{alert("\nTitle :"+JSON.stringify(item.title)+" "+"\n Price :"+JSON.stringify(item.price) +" "+ "\nDistrict : "+JSON.stringify(item.district))}}>
                            <Text style = {styles.GridViewInsideTextItemStyle}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

export default listView;

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin:3,
        backgroundColor:'#00BCD4',
        padding:15,
        borderRadius: 5,
    },

    GridViewBlockStyle: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 100,
        margin: 1,
        backgroundColor: '#00BCD4'

    },
    GridViewInsideTextItemStyle: {
        color: '#fff',
        padding: 5,
        fontSize: 18,
        justifyContent: 'center',

    },
});
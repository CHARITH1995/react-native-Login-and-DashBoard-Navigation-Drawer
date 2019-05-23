import React from 'react';
import {
    Platform, StyleSheet, Text, View,
    TouchableOpacity, TouchableHighlight, Image
} from 'react-native';
import Dialog, { SlideAnimation, DialogContent, DialogButton, DialogFooter, DialogTitle } from 'react-native-popup-dialog';

const Alert = (props) => {
    return (
        <View>
            <Dialog 
                visible={props.show}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                })}
                dialogTitle={<DialogTitle 
                    title="Alert !" />}
                footer={
                    <DialogFooter style={styles.footer} >
                        <DialogButton style={styles.button}
                            text="Dismiss"
                            onPress={props.hide}
                        />
                        <DialogButton style={styles.button}
                            text="OK"
                            onPress={props.hide}
                        />
                    </DialogFooter>
                }
            >
                <DialogContent style={styles.container}>
                    <Text style={styles.msgtext}>{props.msg}</Text>
                </DialogContent>
            </Dialog>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width:200,
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
        padding:10
    },
});

export default Alert;
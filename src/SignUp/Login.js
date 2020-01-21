import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Login = ({login}) => (
    <View style={styles.loginContainer}>
        <TouchableHighlight
            underlayColor="#dcdb98"
            style={styles.button}
            onPress={login}>
            <Text style={styles.textStyle}>LOGIN</Text>
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    loginContainer: {
        height: 48,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#FCDB98'
    },
    textStyle: {
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 12,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#9d7300'
    },
    button: {
        height: 48,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Login;
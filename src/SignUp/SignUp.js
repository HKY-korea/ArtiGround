import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const SignUp = ({signUp}) => (
    <View style={styles.signUpButtonContainer}>
        <TouchableHighlight
            underlayColor='#e0a600'
            style={styles.button}
            onPress={signUp}>
            <Text style={styles.continueText}>CONTINUE</Text>
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    signUpButtonContainer: {
        marginTop: 42,
        alignItems: 'center'
    },
    button: {
        width: 327,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#f8a600',
        justifyContent: 'center'
    },
    continueText: {
        color: '#ffffff',
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'normal',
        letterSpacing: 0
    }
});

export default SignUp;
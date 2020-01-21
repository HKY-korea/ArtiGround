import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from './Input';

const Inputs = ({ profileValue, mailValue, passwordValue, profileChange, mailChange, passwordChange }) => (
    <View style={styles.container}>
        <Input 
            imageSource='ProfileSB'
            inputValue={profileValue}
            inputChange={profileChange} />
        <View style={styles.mailSB}>
            <Input 
                imageSource='MailSB'
                inputValue={mailValue}
                inputChange={mailChange} />
        </View>
        <View style={styles.lockSB}>
            <Input 
                imageSource='LockSB'
                inputValue={passwordValue}
                inputChange={passwordChange} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        alignItems: 'center'
    },
    mailSB: {
        marginTop: 39
    },
    lockSB: {
        marginTop: 36
    }
});

export default Inputs;
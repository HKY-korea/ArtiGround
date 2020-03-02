import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from './Input';

const Inputs = ({ username, mail, password, usernameChange, mailChange, passwordChange }) => (
    <View style={styles.container}>
        <Input 
            imageSource='ProfileSB'
            inputValue={username}
            inputChange={usernameChange}
            isPassword={false}
            placeholderText='username' />
        <View style={styles.mailSB}>
            <Input 
                imageSource='MailSB'
                inputValue={mail}
                inputChange={mailChange}
                isPassword={false}
                placeholderText='mail' />
        </View>
        <View style={styles.lockSB}>
            <Input 
                imageSource='LockSB'
                inputValue={password}
                inputChange={passwordChange}
                isPassword={true}
                placeholderText='password' />
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
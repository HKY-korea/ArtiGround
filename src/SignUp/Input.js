import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import image from '../constants/image';

const Input = ({ imageSource, inputValue, inputChange }) => (
    <View style={styles.inputContainer}>
        <View style={styles.inputStyle}>
            <Image source={image[imageSource]} />
            <TextInput 
                style={styles.textInputStyle}
                value={inputValue}
                onChangeText={inputChange} 
                placeholder="this is text input"
                maxLength={20} />
        </View>
        <View style={styles.line}></View>
    </View>
);

const styles = StyleSheet.create({
    line: {
        marginTop: 17,
        width: 327,
        height: 1,
        backgroundColor: '#694f0b'
    },
    inputStyle: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    textInputStyle: {
        paddingLeft: 10,
        marginBottom: -18,
        marginTop: -100,
        fontSize: 20,
        color: '#f83900',
        backgroundColor: '#ffffff'
    }
});

export default Input;
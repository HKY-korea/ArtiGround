import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import image from '../constants/image';

const Input = ({ imageSource, inputValue, inputChange, isPassword, placeholderText }) => (
    <View style={styles.inputContainer}>
        <View style={styles.inputStyle}>
            <Image 
                source={image[imageSource]} 
                style={styles.imageStyle} />
            <TextInput 
                style={styles.textInputStyle}
                value={inputValue}
                onChangeText={inputChange} 
                placeholder={placeholderText}
                maxLength={20}
                secureTextEntry={isPassword} />
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
    },
    imageStyle: {
        width: 16,
        height: 16
    }
});

export default Input;
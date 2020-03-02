import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import image from '../constants/image';

const SocialLoginButton = ({imageSource, loginFunction}) => (
    <View style={styles.button}>
        <TouchableHighlight
            underlayColor="#efefef"
            style={styles.onClick}
            onPress={loginFunction} >
            <Image 
                source={image[imageSource]} 
                style={styles.imageStyle} />
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    button: {
        width: 56,
        height: 56,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#694f0b',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        margin: 20,
        height: 16,
        width: 16
    },
    onClick: {
        width: 54,
        height: 54,
        borderRadius: 50
    }
});

export default SocialLoginButton;
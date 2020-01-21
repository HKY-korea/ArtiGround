import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import image from '../constants/image';

const BackButton = ({backWard}) => (
    <View style={styles.backButtonContainer}>
        <TouchableHighlight
            underlayColor='#efefef'
            style={styles.button}
            onPress={backWard}>
            <Image source={image['BackwardArrow']} />
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    backButtonContainer: {
        marginTop: 7,
        marginLeft: 7,
        flexDirection: 'row'
    },
    button: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 60
    }
});

export default BackButton;
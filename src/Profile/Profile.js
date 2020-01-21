import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import image from '../constants/image';

const Profile = () => (
    <View style={styles.container}>
        <Image source={image['EX_Profile']} />
        <View style={styles.textContainer}>
            <Text style={styles.nameText}>John Marlie</Text>
            <Text style={styles.jobText}>Designer</Text>
        </View>
        <Image 
            source={image['Add']} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textContainer: {
        marginRight: 130
    },
    nameText: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: '#694f0b'
    },
    jobText: {
        fontFamily: 'Arial',
        fontStyle: 10,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: '#694f0b'
    }
});

export default Profile;
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import image from '../constants/image';

const Profile = () => (
    <View style={styles.container}>
        <Text style={styles.name}>Jone Marlie</Text>
        <Image 
            source={image.Ex_Profile_Picture} 
            style={styles.profileImage} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    name: {
        fontFamily: 'Helvetica',
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 1.38,
        textAlign: 'center',
        color: '#1A1311'
    },
    profileImage: {
        width: 300,
        height: 200,
        borderRadius: 16,
        marginTop: 20
    }
})

export default Profile; 
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import image from '../constants/image';

const ProfileSocialTab = () => (
    <View style={styles.container}>
        <Image 
            source={image['ProfileSB']} 
            style={styles.imageStyle} />
        <Image source={image['Message']} 
            style={styles.imageStyle} />
        <Image 
            source={image['FacebookSB']} 
            style={styles.imageStyle} />
        <Image 
            source={image['TwitterSB']}
            style={styles.imageStyle} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    imageStyle: {
        height: 16,
        width: 16
    }
});

export default ProfileSocialTab;
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import image from '../constants/image';

const ProfileSocialTab = () => (
    <View style={styles.container}>
        <Image source={image['ProfileSB']} />
        <Image source={image['Message']} />
        <Image source={image['FaceBookSB']} />
        <Image source={image['TwitterSB']} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});

export default ProfileSocialTab;
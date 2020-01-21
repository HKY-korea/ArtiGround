import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import Profile from './Profile';
import Introduction from './Introduction';
import ProfileSocialTab from './ProfileSocialTab';
import ProfileTabBar from './ProfileTabBar';
import PostPhoto from './PostPhoto';

import image from '../constants/image';

class ProfileScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={image.ICON_PROFILE}
                resizeMode='contain'
            />
        )
    }

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Profile />
                    <Introduction />
                    <ProfileSocialTab />
                    <ProfileTabBar />
                </View>
                <View style={styles.representativePhotoContainer}>
                    <PostPhoto />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    profileContainer: {
        flex: 1.1,
        marginTop: 40,
        marginLeft: 32,
        marginRight: 32,
        justifyContent: 'space-between'
    },
    representativePhotoContainer: {
        flex: 1,
        marginTop: 50,
        marginLeft: 32,
        marginRight: 32
    }
});

export default ProfileScreen;
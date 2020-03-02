import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import Profile from './Profile';
import Introduction from './Introduction';
import ProfileSocialTab from './ProfileSocialTab';
import ProfileTabBar from './ProfileTabBar';
import PostPhoto from './PostPhoto';

import image from '../constants/image';

class ProfileScreen extends Component {
    constructor() {
        super();
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false} >
                <View style={styles.profileContainer}>
                    <Profile navigation={navigation} />
                    <View style={{marginTop: 20}}>
                        <Introduction />
                    </View>
                    <View style={{marginTop: 20}}>
                        <ProfileSocialTab />
                    </View>
                    <View style={{marginTop: 20}}>
                        <ProfileTabBar />
                    </View>
                </View>
                <View style={styles.representativePhotoContainer}>
                    <PostPhoto />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingBottom: 40
    },
    profileContainer: {
        flex: 1,
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30
    },
    representativePhotoContainer: {
        flex: 1,
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30
    }
});

export default ProfileScreen;
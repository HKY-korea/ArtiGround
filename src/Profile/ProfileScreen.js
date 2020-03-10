import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import Profile from './Profile';
import Introduction from './Introduction';
import ProfileSocialTab from './ProfileSocialTab';
import ProfileTabBar from './ProfileTabBar';
import PostPhoto from './PostPhoto';

import image from '../constants/image';
import Fire from '../Fire';

class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    unsubscribe = null

    componentDidMount() {
        const user = this.props.uid || Fire.shared.uid

        this.unsubscribe = Fire.shared.firestore
                                            .collection("users")
                                            .doc(user)
                                            .onSnapshot(doc => {
                                                this.setState({ user: doc.data() })
                                            })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false} >
                <View style={styles.profileContainer}>
                    <Profile 
                        navigation={navigation}
                        user={this.state.user} />
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
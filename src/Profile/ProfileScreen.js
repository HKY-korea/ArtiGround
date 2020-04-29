import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, Text, FlatList, Dimensions, YellowBox } from 'react-native';
import Profile from './Profile';
import Introduction from './Introduction';
import ProfileSocialTab from './ProfileSocialTab';
import ProfileTabBar from './ProfileTabBar';

import Fire from '../Fire';

class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            posts: [],
            refreshing: false
        }
    }

    unsubscribe = null

    getPost = () => {
        Fire.shared.firestore
                        .collection("posts")
                        .orderBy('timestamp', 'desc')
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(doc => {
                                if (doc.data().uid === Fire.shared.uid) {
                                    this.setState({ 
                                        posts: [...this.state.posts, doc.data()],
                                        refreshing: false
                                    })
                                    
                                }
                            })
                        })
    }

    componentDidMount() {
        const user = this.props.uid || Fire.shared.uid

        this.unsubscribe = Fire.shared.firestore
                                            .collection("users")
                                            .doc(user)
                                            .onSnapshot(doc => {
                                                this.setState({ user: doc.data() })
                                            })
        this.getPost();
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    renderItem = ({ item }) => (
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <Image 
                source={{ uri: item.image }} 
                style={styles.postImage} />
        </View>
    )

    handleRefresh = () => {
        this.setState({
            refreshing: true,
        }, this.getPost())
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex: 1}}>
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
                <FlatList
                    data={this.state.posts}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.image}
                    onEndReached={this.getPost} 
                    onEndReachedThreshold={1} 
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh} 
                    style={{marginTop: 20}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingBottom: 40
    },
    profileContainer: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30
    },
    representativePhotoContainer: {
        flex: 1,
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30
    },
    postImage: {
        width: Dimensions.get("window").width - 40, 
        height: (Dimensions.get("window").width - 40) * 3 / 4 
    }
});

export default ProfileScreen;
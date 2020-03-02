import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

import Profile from './Profile';
import Description from './Description';
import ArtWork from './ArtWork';

import ProfileSocialTab from '../Profile/ProfileSocialTab';

class ProfileDetailScreen extends Component {
    state = {
        images: []
    }

    componentDidMount() {
        this.getImages();
    }

    getImages = () => {
        axios
            .get(
                'https://api.unsplash.com/photos/random?count=30&client_id=rFWcp6z5QxPnb_YNHuHXrxGILb1jvGIBPs0Hj_lms6o'
            )
            .then(res => {
                this.setState({
                    images: [...this.state.images, ...res.data.map(image => image.urls.small)]
                })
            })
    }

    render() {
        return(
            <ScrollView 
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false} >
                <View>
                    <Profile />
                </View>
                <View style={{paddingTop: 20}}>
                    <ProfileSocialTab />
                </View>
                <View style={{paddingTop: 20}}>
                    <Description /> 
                </View>
                <View style={{paddingTop: 40}}>
                    <ArtWork images={this.state.images} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 40
    }
})

export default ProfileDetailScreen;
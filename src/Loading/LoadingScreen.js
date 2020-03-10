import React, { Component } from 'react';
import { View, Image, ActivityIndicator, StatusBar } from 'react-native';
import firebase from 'firebase';
import Fire from '../Fire';

import image from '../constants/image';

class LoadingScreen extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "app" : "auth")
        })
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    source={image.ARTILOGO}
                    style={{width: 238.9, height: 293.7}} />
                <ActivityIndicator style={{marginTop: 20}} />
                <StatusBar barStyle='default' />
            </View>
        )
    }
}

export default LoadingScreen;
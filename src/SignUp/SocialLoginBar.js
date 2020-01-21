import React from 'react';
import { View, StyleSheet } from 'react-native';
import SocialLoginButton from './SocialLoginButton';

const SocialLoginBar = ({faceBookLogin, twitterLogin, googleLogin}) => (
    <View style={styles.container}>
        <View style={styles.rightMargin}>
            <SocialLoginButton 
                imageSource='FaceBookSB'
                loginFunction={faceBookLogin} />
        </View>
        <SocialLoginButton 
            imageSource='TwitterSB' 
            loginFunction={twitterLogin} />
        <View style={styles.leftMargin}>
            <SocialLoginButton 
                imageSource='gSB'
                loginFunction={googleLogin} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    leftMargin: {
        marginLeft: 16
    },
    rightMargin: {
        marginRight: 16
    }
});

export default SocialLoginBar;
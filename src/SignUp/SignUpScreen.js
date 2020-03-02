import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, AsyncStorage } from 'react-native';

import BackButton from './BackButton';
import SignUp from './SignUp';
import Inputs from './Inputs';
import SocialLoginBar from './SocialLoginBar';
import Login from './Login';

const userInfo = {username: 'admin', mail: 'admin@google.com', password: '123456789'}

class SignUpScreen extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            mail: '',
            password: ''
        }
        this.backWard = this.backWard.bind(this);
        this.signUp = this.signUp.bind(this);
        this.faceBookLogin = this.faceBookLogin.bind(this);
        this.twitterLogin = this.twitterLogin.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
        this.login = this.login.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.mailChange = this.mailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    backWard() {
        console.log('Successful BackWard');
    }

    signUp() {
        console.log('Successful Signup');
    }

    faceBookLogin() {
        console.log('Successful Login');
    }

    twitterLogin() {
        console.log('Successful Login');
    }

    googleLogin() {
        console.log('Successful Login');
    }

    login = async() => {
        if (userInfo.username === this.state.username && userInfo.mail === this.state.mail && userInfo.password === this.state.password) {
            await AsyncStorage.setItem('isLoggedIn', '1');
            this.props.navigation.navigate('app');
        } else {
            Alert.alert('Login', 'Login information is incorrect');
        }
    }

    usernameChange(username) {
        this.setState({ username });
    }

    mailChange(mail) {
        this.setState({ mail });
    }

    passwordChange(password) {
        this.setState({ password });
    }

    render() {
        const { username, mail, password } = this.state;

        return (
            // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ScrollView>
                    <BackButton backWard={this.backWard} />
                    {/* <Header /> 작은 아티그라운드 로고 */} 
                    <Inputs
                        username={username}
                        mail={mail}
                        password={password}
                        usernameChange={(text) => this.usernameChange(text)}
                        mailChange={(text) => this.mailChange(text)}
                        passwordChange={(text) => this.passwordChange(text)}/>
                    <SignUp signUp={this.signUp} />
                    <SocialLoginBar 
                        faceBookLogin={this.faceBookLogin} 
                        twitterLogin={this.twitterLogin} 
                        googleLogin={this.googleLogin} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle} >Already have an acount?</Text>
                    </View>
                </ScrollView>
            <Login login={this.login} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    textContainer: {
        marginTop: 30,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#f8a600'
    }
});

export default SignUpScreen;
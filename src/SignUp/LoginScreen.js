import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Dimensions, Keyboard, AsyncStorage } from 'react-native';
import { Button } from 'native-base';

import image from '../constants/image';

import * as firebase from 'firebase';
import axios from 'axios';


class LoginScreen extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errorMessage: null,
            token: ''
        }
    }

    // handleLogin = () => {
    //     const { email, password } = this.state

    //     Keyboard.dismiss()
  
    //     firebase
    //         .auth()
    //         .signInWithEmailAndPassword(email, password)
    //         .catch(error => this.setState({ errorMessage: error.message }))
    // }

    handleLogin = async() => {
        const { email, password } = this.state;
        const body = {
            email: email, 
            password: password
        }
        Keyboard.dismiss();

        axios
            .post('http://52.205.45.114:3000/api/auth/login', body)
            .then(res => {
                // console.log("리스폰스  :", res.data.token);
                // AsyncStorage.setItem("token", res.data.token);
                // const getToken = AsyncStorage.getItem("token");
                // console.log("리스폰스  :", getToken);
                this.setState({
                    token: res.data.token
                })
            })
        await AsyncStorage.setItem("token", this.state.token)
        const getToken = await AsyncStorage.getItem("token");
        console.log("리스폰스데이터 : ", getToken)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={image.ARTILOGO} 
                        style={{width: 90, height: 111}} />
                </View>

                <View style={styles.form}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image 
                            source={image.MailSB}
                            style={{width: 16, height: 12, marginHorizontal: 5}} />
                        <Text style={styles.inputTitle}>Email Address</Text>
                    </View>
                    <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email} />

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
                        <Image 
                            source={image.LockSB}
                            style={{width: 16, height: 16, marginHorizontal: 5}} />
                        <Text style={styles.inputTitle}>Password</Text>
                    </View>
                    <TextInput 
                        style={styles.input} 
                        autoCapitalize="none" 
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password} />
                </View>

                <View style={styles.loginButtonContainer}>
                    <Button 
                        style={styles.loginButton}
                        onPress={this.handleLogin}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </Button>
                </View>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.errorText}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.socialButtonContainer}>
                    <Button
                        style={styles.socialButton}>
                        <Image 
                            source={image.FacebookSB}
                            style={{width: 16, height: 16}} />
                    </Button>
                    <Button 
                        style={styles.socialButton}>
                        <Image 
                            source={image.TwitterSB}
                            style={{width: 16, height: 16}} />
                    </Button>
                    <Button 
                        style={styles.socialButton}>
                        <Image 
                            source={image.gSB}
                            style={{width: 16, height: 16}} />
                    </Button>
                </View>

                <Button 
                    transparent
                    style={{alignSelf: 'center', marginTop: 20}}
                    onPress={() => this.props.navigation.navigate('Register')} >
                    <Text style={{color: '#F83900', fontSize: 12}}>
                        New To ArtiGround? <Text style={{fontWeight: '500'}}>SIGN UP HERE!</Text>
                    </Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    logoContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        marginTop: 25,
        marginHorizontal: 25
    },
    input: {
        borderBottomColor: '#694f0b',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontFamily: 'Arial',
        fontSize: 15,
        color: '#F83900'
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase'
    },
    loginButton: {
        width: Dimensions.get('window').width - 25,
        height: 50,
        borderRadius: 24,
        backgroundColor: '#f8a600',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButtonContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        color: '#ffffff', 
        fontFamily: 'Arial', 
        fontSize: 13, 
        fontWeight: 'bold'
    },
    errorMessage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        height: 19
    },
    errorText: {
        fontFamily: 'Arial',
        fontSize: 14,
        color: '#F83900',
        fontWeight: '400',
        textAlign: 'center'
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginHorizontal: 15,
        borderStyle: 'solid',
        borderColor: '#694F0B',
        borderWidth: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialButtonContainer: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoginScreen;
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Dimensions, Keyboard } from 'react-native';
import { Button } from 'native-base';

import image from '../constants/image';
import Fire from '../Fire';

import * as firebase from 'firebase';

class RegisterScreen extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: '',
                email: '',
                password: '',
                avatar: null
            },
            errorMessage: null
        }
    }

    handleSignUp = () => {
        Keyboard.dismiss();

        Fire.shared.createUser(this.state.user)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image 
                            source={image.ProfileSB}
                            style={{width: 16, height: 16, marginHorizontal: 5}} />
                        <Text style={styles.inputTitle}>Full Name</Text>
                    </View>
                    <TextInput 
                        style={styles.input} autoCapitalize="none"
                        onChangeText={name => this.setState({ user: {...this.state.user, name} })}
                        value={this.state.user.name} />

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 16}}>
                        <Image 
                            source={image.MailSB}
                            style={{width: 16, height: 12, marginHorizontal: 5}} />
                        <Text style={styles.inputTitle}>Email Address</Text>
                    </View>
                    <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ user: {...this.state.user, email} })}
                        value={this.state.user.email} />

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
                        onChangeText={password => this.setState({ user: {...this.state.user, password} })}
                        value={this.state.user.password} />
                </View>

                <View style={styles.signUpButtonContainer}>
                    <Button 
                        style={styles.signUpButton}
                        onPress={this.handleSignUp}>
                        <Text style={styles.signUpText}>SIGN UP</Text>
                    </Button>
                </View>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.errorText}>{this.state.errorMessage}</Text>}
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
    signUpButton: {
        width: Dimensions.get('window').width - 25,
        height: 50,
        borderRadius: 24,
        backgroundColor: '#f8a600',
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpButtonContainer: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpText: {
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
    }
});

export default RegisterScreen;
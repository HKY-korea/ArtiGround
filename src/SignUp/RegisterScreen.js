import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Dimensions, Keyboard, AsyncStorage } from 'react-native';
import { Button } from 'native-base';

import image from '../constants/image';
import Fire from '../Fire';

import UserPermissions from '../../utilities/UserPermissions';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

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

    handlePickAvatar = async() => {
        UserPermissions.getCameraPermissions()

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Image,
            allowsEditing: true,
            aspect: [1, 1]
        })

        if (!result.cancelled) {
            this.setState({ user: {...this.state.user, avatar: result.uri }})
        }
    }

    // handleSignUp = () => {
    //     Keyboard.dismiss();

    //     Fire.shared.createUser(this.state.user)
    // }
    
    handleSignUp = async() => {
        const { name, email, password } = this.state.user;
        const body = {
            username: name,
            email: email, 
            password: password
        }
        Keyboard.dismiss();

        axios
            .post('http://52.205.45.114:3000/api/auth/register', body)
            .then(res => {
                console.log("회원가입 :", res.data.message)
                if (res.data.message === 'registered successfully') {
                    this.props.navigation.goBack();
                } else if (res.data.message === 20) {
                    this.setState({ errorMessage: '이메일 중복'})
                }
            })
        // if res.data.message === registered successfully 
        //  redirect => login
        // else if res.data.message === 20
        //  alert(이메일 중복!!!!)
    }

    // handleSignUp = async() => {
    //     await AsyncStorage.setItem("token", );
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Button 
                        style={styles.avatarButton}
                        onPress={this.handlePickAvatar}>
                        <Image 
                            source={{ uri: this.state.user.avatar }} 
                            style={styles.avatarImage} />
                    </Button>
                </View>
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
    },
    avatarButton: {
        width: 90, 
        height: 90, 
        borderRadius: 50, 
        backgroundColor: '#efefef', 
        borderColor: '#f8a600', 
        borderWidth: 1   
    },
    avatarImage: {
        width: 90, 
        height: 90, 
        borderRadius: 50
    },
    avatarContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 20
    }
});

export default RegisterScreen;
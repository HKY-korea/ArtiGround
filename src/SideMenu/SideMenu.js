import React, { Component } from 'react';
import { SafeAreaView, View, Image, ScrollView, Text, StyleSheet, AsyncStorage } from 'react-native';
import { List, ListItem, Button } from 'native-base';

import { DrawerActions } from 'react-navigation-drawer';

import image from '../constants/image';

import * as firebase from 'firebase';

class SideMenu extends Component {
    signOutUser = () => {
        firebase.auth().signOut()
    }

    // signOutUser = async() => {
    //     await AsyncStorage.clear();
    //     this.props.navigation.navigate('auth');
    // }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#F0EABA'}}>
                <ScrollView style={{marginTop: 55}}>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.dispatch(DrawerActions.closeDrawer())}
                        style={{marginLeft: 10, width: 30}}>
                        <Image 
                            source={image.ICON_BACKWARD1}
                            style={{marginLeft: 8, width: 16, height: 16}} />
                    </Button>
                    <List style={{marginTop: 20}}>
                        <ListItem onPress={() => this.props.navigation.navigate('MyPage')}>
                            <Text style={styles.listText}>My Page</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('Feed')}>
                            <Text style={styles.listText}>Feed</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('BookMark')}>
                            <Text style={styles.listText}>Bookmark</Text>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('Message')}>
                            <Text style={styles.listText}>Message</Text>
                        </ListItem>
                    </List>
                </ScrollView>
                <View style={{flexDirection: 'row', marginBottom: 30}}>
                    <Image 
                        source={image.ICON_SETTING}
                        style={{marginLeft: 20, width: 30, height: 30}} />
                    <Image 
                        source={image.ICON_ALARM} 
                        style={{marginLeft: 40, width: 30, height: 30}} />
                    <Button
                        transparent
                        style={{marginLeft: 40}}
                        onPress={this.signOutUser}>
                        <Text style={{fontSize: 15}}>Log Out</Text>
                    </Button>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    listText: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 21,
        letterSpacing: 1.1,
        textAlign: 'left',
        color: '#1A1311'
    }
})

export default SideMenu;
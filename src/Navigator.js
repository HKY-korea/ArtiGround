import React, { Component } from 'react';
import { Text, View, Image, Dimensions, ActivityIndicator, StatusBar, AsyncStorage } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import image from './constants/image';
import SideMenu from './SideMenu/SideMenu';
import SignUpScreen from './SignUp/SignUpScreen';
import HomeScreen from './Home/HomeScreen';
import AddContentScreen from './AddContent/AddContentScreen';
import ProfileScreen from './Profile/ProfileScreen';
import ProfileDetailScreen from './ProfileDetail/ProfileDetailScreen';
import SearchScreen from './Search/SearchScreen';


class MyPageScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>My Page!</Text>
            </View>
        )
    }
}

class FeedScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Feed!</Text>
            </View>
        )
    }
}

class BookmarkScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Bookmark!</Text>
            </View>
        )
    }
}

class MessageScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Message!</Text>
            </View>
        )
    }
}

class AuthLoadingScreen extends Component {
    constructor() {
        super();
        this.loadingData();
    }

    loadingData = async() => {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        this.props.navigation.navigate(isLoggedIn !== '1' ? 'auth' : 'app')
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image 
                    source={image.ARTILOGO}
                    style={{width: 260, height: 320}} />
                <ActivityIndicator style={{marginTop: 20}} />
                <StatusBar barStyle='default' />
            </View>
        )
    }
}

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Search: {
            screen: SearchScreen
        },
        MyPage: {
            screen: MyPageScreen
        },
        Feed: {
            screen: FeedScreen
        },
        BookMark: {
            screen: BookmarkScreen
        },
        Message: {
            screen: MessageScreen
        }
    }
)

const ProfileStack = createStackNavigator(
    {
        Profile: {
            screen: ProfileScreen
        },
        ProfileDetail: {
            screen: ProfileDetailScreen
        }
    }
)

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={image.ICON_HOME}
                        style={{height: 27.3, width: 24.6}}
                        resizeMode='contain' />
                ),
                tabBarOptions: {
                    showLabel: false
                }
            }
        },
        AddContent: {
            screen: AddContentScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={image.ICON_ADDCONTENT}
                        style={{height: 28, width: 28}}
                        resizeMode='contain' />
                ),
                tabBarOptions: {
                    showLabel: false
                }
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={image.ICON_PROFILE}
                        style={{height: 26.9, width: 22.4}}
                        resizeMode='contain' />
                ),
                tabBarOptions: {
                    showLabel: false
                }
            }
        }
    }
)

const HomeDrawer = createDrawerNavigator(
    {
        drawer: TabNavigator
    },
    {
        contentComponent: SideMenu,
        drawerWidth: Dimensions.get('window').width * 3/4
    }
)

const MainApp = createSwitchNavigator(
    {
        authLoading: AuthLoadingScreen,
        auth: SignUpScreen,
        app: HomeDrawer
    },
    {
        initialRouteName: 'authLoading'
    }
)

export default createAppContainer(MainApp);
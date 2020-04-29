import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import image from './constants/image';
import SideMenu from './SideMenu/SideMenu';
import LoginScreen from './SignUp/LoginScreen';
import RegisterScreen from './SignUp/RegisterScreen';
import HomeScreen from './Home/HomeScreen';
import PostScreen from './Post/PostScreen';
import ProfileScreen from './Profile/ProfileScreen';
import ProfileDetailScreen from './ProfileDetail/ProfileDetailScreen';
import SearchScreen from './Search/SearchScreen';
import LoadingScreen from './Loading/LoadingScreen';


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

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        Register: {
            screen: RegisterScreen
        }
    }
)

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
            screen: ProfileScreen,
            navigationOptions: {
                headerShown: false
            }
        },
        ProfileDetail: {
            screen: ProfileDetailScreen
        }
    }
)

const AppContainer = createStackNavigator(
    {
        default: createBottomTabNavigator(
            {
                Home: {
                    screen: HomeStack,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <Image
                                source={image.ICON_HOME}
                                style={{height: 27.3, width: 24.6}}
                                resizeMode='contain' />
                        )
                    }
                },
                Post: {
                    screen: PostScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => (
                            <Image
                                source={image.ICON_ADDCONTENT}
                                style={{height: 28, width: 28}}
                                resizeMode='contain' />
                        )
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
                        )
                    }
                }
            },
            {
                defaultNavigationOptions: {
                    tabBarOnPress: ({ navigation, defaultHandler }) => {
                        if (navigation.state.routeName === "Post") {
                            navigation.navigate("postModal")
                        } else {
                            defaultHandler()
                        }
                    }
                },
                tabBarOptions: {
                    showLabel: false
                }
            }
        ),
        postModal: {
            screen: PostScreen
        }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)

const HomeDrawer = createDrawerNavigator(
    {
        drawer: AppContainer
    },
    {
        contentComponent: SideMenu,
        drawerWidth: Dimensions.get('window').width * 3/4
    }
)

const MainApp = createSwitchNavigator(
    {
        Loading: LoadingScreen,
        auth: AuthStack,
        app: HomeDrawer
    },
    {
        initialRouteName: 'Loading'
    }
)

export default createAppContainer(MainApp);
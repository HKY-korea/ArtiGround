import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import image from './src/constants/image';

import SignUpScreen from './src/SignUp/SignUpScreen';
import SideMenu from './src/SideMenu/SideMenu';
import HomeScreen from './src/Home/HomeScreen';
import ProfileScreen from './src/Profile/ProfileScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { Button } from 'native-base';
import { createDrawerNavigator } from 'react-navigation-drawer';

class AddContentScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Content!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    AddContent: {
      screen: AddContentScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
              source={image.ICON_ADDCONTENT}
              resizeMode='contain'
          />
      )
      }
    },
    Profile: {
      screen: ProfileScreen
    }
  }, 
  {
    tabBarOptions: {
      activeTintColor: '#f8b93a',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true
    }
  }
);

const StackNavigator = createStackNavigator({
  Main: { 
    screen: TabNavigator,
    navigationOptions: {
      headerLeft: () => (
        <View style={{paddingLeft: 30}}>
          <Button
            transparent
            style={{height: 25}}
            onPress={() => alert('SideMenu Button')}>
            <Image source={image.ICON_HAMBURGER} />
          </Button>
        </View>
      ),
      headerTitle: () => 
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{
            fontFamily: "S-CoreDream-4",
            fontSize: 17,
            fontWeight: 'normal',
            fontStyle: 'normal',
            letterSpacing: 0.94,
            color: '#1a1311'}} >ARTI GROUND</Text>
        </View>
      ,
      headerTitleAlign: 'center',
      headerRight: () => ( 
        <View style={{ paddingRight: 30}}>
          <Button 
            transparent
            style={{height: 25}}
            onPress={() => alert('Search Button')}>
            <Image source={image.ICON_SEARCH} />
          </Button>
        </View>
      )
    }
  }
});

const DrawerNavigator = createDrawerNavigator(
  {
    Drawer: StackNavigator
  },
  {
    contentComponent: SideMenu,
    drawerWidth: (Dimensions.get('window').width * 3/4)
  }
)

const authStack = createStackNavigator(
  {
    Login: { screen: SignUpScreen }
  },
  {
    headerMode: 'none'
  }
);

const app = createSwitchNavigator(
  {
    MainApp: DrawerNavigator,
    auth: authStack
  },
  {
    initialRouteName: 'auth'
  }
)

export default createAppContainer(app);
import React from 'react';
import { Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import image from './constants/image';

import HomeScreen from './Home/HomeScreen';
import ProfileScreen from './Profile/ProfileScreen';

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

export default createAppContainer(TabNavigator);
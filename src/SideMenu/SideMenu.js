import React, { Component } from 'react';
import { SafeAreaView, View, ScrollView, Text } from 'react-native';
import { List, ListItem } from 'native-base';

class SideMenu extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <List>
                        <ListItem>
                            <Text>Setting</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Profile</Text>
                        </ListItem>
                    </List>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default SideMenu;
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import TodayWork from './TodayWork';
import NewDesigner from './NewDesigner';
import WorkSale from './WorkSale';
import image from '../constants/image';

class HomeScreen extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={image.ICON_HOME}
                resizeMode='contain'
            />
        )
    }

    constructor() {
        super();
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TodayWork />
                <NewDesigner />
                <WorkSale />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingBottom: 50
    }
});

export default HomeScreen;
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import { Button } from 'native-base';
import axios from 'axios';

import { DrawerActions } from 'react-navigation-drawer';

import TodayWork from './TodayWork';
import NewDesigner from './NewDesigner';
import WorkSale from './WorkSale';
import image from '../constants/image';

class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: () => (
                <View style={{ paddingLeft: 20 }}>
                    <Button
                        transparent
                        style={{height: 30, width: 30}}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Image 
                            source={image.ICON_HAMBURGER}
                            style={{width: 27, height: 17}} />
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
                <View style={{ paddingRight: 20 }}>
                    <Button 
                        transparent
                        style={{height: 30, width: 30}}
                        onPress={() => navigation.navigate('Search')}>
                        <Image 
                            source={image.ICON_SEARCH} 
                            style={{height: 22.9, width: 20.3}}/>
                    </Button>
                </View>
            )
        }
    }

    constructor() {
        super();
    }

    state = {
        images: []
    }

    componentDidMount() {
        this.getImages();
    }

    getImages = () => {
        axios
            .get(
                'https://api.unsplash.com/photos/random?count=30&client_id=rFWcp6z5QxPnb_YNHuHXrxGILb1jvGIBPs0Hj_lms6o'
            )
            .then(res => {
                this.setState({
                    images: [...this.state.images, ...res.data.map(image => image.urls.small)]
                })
            })
    }

    render() {
        return (
            <ScrollView 
                contentContainerStyle={styles.container}
                showsVerticalScrollIndicator={false} >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Today's Works</Text>
                </View>
                <TodayWork images={this.state.images} />
                <NewDesigner />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Art Work Sales</Text>
                </View>
                <WorkSale images={this.state.images} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingBottom: 40
    },
    titleContainer: {
        paddingStart: 30,
        marginTop: 30
    },
    title: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 1.1,
        textAlign: 'left',
        color: '#1a1311',
    }
});

export default HomeScreen;
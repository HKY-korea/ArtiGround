import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, Dimensions } from 'react-native';

import image from '../constants/image';

class SearchScreen extends Component {
    static navigationOptions = {
        title: '',
        headerRight: () => (
            <View style={styles.searchBox}>
                <View>
                    <TextInput
                        autoCapitalize={'none'} 
                        style={styles.textInput}
                        maxLength={24}
                        placeholder={'Search'} />
                </View>
                <Image 
                    source={image.ICON_CLICKEDSEARCH}
                    style={styles.imageStyle} />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBox: {
        marginRight: 10,
        width: Dimensions.get('window').width - 60,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#FCDB98',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInput: {
        fontSize: 20,
        marginLeft: 15
    },
    imageStyle: {
        width: 20.3,
        height: 22.9,
        marginRight: 20
    }
});

export default SearchScreen;
import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const ProfileTabBar = () => (
    <View style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.numberText}>140</Text>
            <Text style={styles.numberTitleText}>Projects</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.numberText}>24k</Text>
            <Text style={styles.numberTitleText}>Followers</Text>
        </View>
        <View style={styles.box}>
            <Text style={styles.numberText}>1,980</Text>
            <Text style={styles.numberTitleText}>Following</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box: {
        width: (Dimensions.get('window').width - 60) / 3 - 5,
        height: 70,
        borderRadius: 16,
        backgroundColor: '#fcdb98',
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberText: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: '#694f0b'
    },
    numberTitleText: {
        fontFamily: 'Arial',
        fontStyle: 13,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'left',
        color: '#694f0b'
    }
});

export default ProfileTabBar;
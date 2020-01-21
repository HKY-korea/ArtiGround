import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import image from '../constants/image';

const NewDesigner = () => (
    <View>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Today's Works</Text>
        </View>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.photoContainer} >
            <Image source={image['Ex_Work1']} style={styles.photoMargin} />
            <Image source={image['Ex_Work2']} style={styles.photoMargin} />
            <Image source={image['Ex_Work3']} style={styles.photoMargin} />
            <Image source={image['Ex_Work1']} style={styles.photoMargin} />
            <Image source={image['Ex_Work2']} style={styles.photoMargin} />
            <Image source={image['Ex_Work3']} style={styles.photoMargin} />
        </ScrollView>
        <View style={styles.scrollBarStyle}>
            <Image source={image['ScrollBar']} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    photoContainer: {
        alignItems: 'center',
        paddingStart: 15,
        paddingEnd: 15,
        marginTop: 25
    },
    photoMargin: {
        marginHorizontal: 15
    },
    title: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 1.1,
        textAlign: 'left',
        color: '#1a1311',
        marginTop: 30
    },
    titleContainer: {
        paddingStart: 30,
        flexDirection: 'row',
    },
    scrollBarStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    }
});

export default NewDesigner;
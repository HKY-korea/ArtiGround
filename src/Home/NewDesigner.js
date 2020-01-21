import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import image from '../constants/image';

const NewDesigner = () => (
    <View>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>New Designers</Text>
        </View>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.photoContainer} >
            <View style={styles.designerCard}>
                <Image source={image['Ex_Artist1']} />
                <Text style={{paddingTop: 10}}>Jone Marlie</Text>
            </View>
            <View style={styles.designerCard}>
                <Image source={image['Ex_Artist2']} />
                <Text style={{paddingTop: 10}}>Ed Mars</Text>
            </View>
            <View style={styles.designerCard}>
                <Image source={image['Ex_Artist1']} />
                <Text style={{paddingTop: 10}}>Jone Marlie</Text>
            </View>
            <View style={styles.designerCard}>
                <Image source={image['Ex_Artist2']} />
                <Text style={{paddingTop: 10}}>Ed Mars</Text>
            </View>
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
    designerCard: {
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
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
    },
});

export default NewDesigner;
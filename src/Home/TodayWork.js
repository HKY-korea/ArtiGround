import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, ImageStore } from 'react-native';
import image from '../constants/image';

const TodayWork = ({ images }) => (
    <View>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.photoContainer} >
            {images.map(image => (
                <Image
                    key={image}
                    source={{ uri: image }}
                    style={styles.photoStyle} />
            ))}
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
    photoStyle: {
        width: 111,
        height: 111,
        marginHorizontal: 15,
        borderRadius: 16
    },
    scrollBarStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    }
});

export default TodayWork;